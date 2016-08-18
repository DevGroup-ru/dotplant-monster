<?php

namespace DotPlant\Monster;

use DotPlant\Monster\assets\CKEditor;
use DotPlant\Monster\assets\ContentTools;
use DotPlant\Monster\assets\MediumEditor;
use DotPlant\Monster\assets\TinyMCE;
use DotPlant\Monster\assets\VisualBuilder;
use DotPlant\Monster\Bundle\Material;
use yii;
use yii\base\InvalidConfigException;
use yii\caching\ChainedDependency;
use yii\caching\TagDependency;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;
use yii\helpers\VarDumper;

class MonsterContent extends yii\base\Widget
{
    /** @var BaseMaterialize[] */
    public $materials = [];

    public $data = [];
    public $isLayout = false;
    
    public $globalData = [];

    public $uniqueContentId = '';

    private $cacheKey = '';
    private $minCacheDuration = 2592000;

    public $contentDescription = 'Content';
    public $regionId;
    public $regionKey;
    public static $perPageCounter = [];

    /**
     * Special caching strategy CACHE_ENTIRE_RESULT_ONLY:
     * - All materials in this content are cacheable and cache is turned on
     * - We can turn off material cache and cache the entire result.
     *
     * Applicable only when each material is cacheable and cache is turned on.
     */
    const CACHE_ENTIRE_RESULT_ONLY = 'entire-only';

    /**
     * Cache entire result of this content and turn each material cache on.
     */
    const CACHE_ENTIRE_AND_EACH = 'entire-and-each';

    /**
     * Don't cache entire results of this content.
     * Each material handle cache itself.
     */
    const CACHE_RELY_ON_MATERIAL = 'rely-on-material';

    /**
     * Force no caching the monster content.
     */
    const CACHE_FORCE_NO_CACHE = 'force-no-cache';

    /**
     * @var string Cache strategy for this content.
     */
    public $cacheStrategy = self::CACHE_RELY_ON_MATERIAL;

    /** @inheritdoc */
    public function init()
    {
        parent::init();
        if (empty($this->uniqueContentId)) {
            throw new InvalidConfigException("uniqueContentId must be set for MonsterContent");
        }
        if (isset(static::$perPageCounter[$this->contentDescription]) === false) {
            static::$perPageCounter[$this->contentDescription] = 1;
        } else {
            static::$perPageCounter[$this->contentDescription]++;
        }
        if (static::$perPageCounter[$this->contentDescription] > 1) {
            $this->contentDescription .= ' [' . static::$perPageCounter[$this->contentDescription] . ']';
        }

    }

    public function editModeOn()
    {
        /** @var Repository $repository */
        $repository = Yii::$app->get('monsterRepository');
        $repository->material('core.visual-builder.components.builder')->publishAssets();

        if (Yii::$app instanceof yii\web\Application) {
            return Yii::$app->request->isEditMode();
        }
        return false;
    }

    public function run()
    {
        $key = "MonsterContent: {$this->uniqueContentId}";
        Yii::beginProfile($key);
        $result = $this->runImpl();
        Yii::endProfile($key);
        return $result;
    }

    public function runImpl()
    {
        if ($this->editModeOn()) {
//            TinyMCE::register($this->view);
            CKEditor::register($this->view);
            $contentDescription = Html::encode($this->contentDescription);
            VisualBuilder::register($this->view);
            $modifier = $this->isLayout ? 'm-monster-content__layout' : 'm-monster-content__content';
            $region = $this->regionId ? " data-region-id=\"{$this->regionId}\"" : '';
            $region .= $this->regionKey ? " data-region-key=\"{$this->regionKey}\"" : '';

            $result = "<div class=\"m-monster-content $modifier\" data-unique-content-id=\"{$this->uniqueContentId}\""
                . " data-content-description=\"$contentDescription\" $region"
                . ">";
        } else {
            $result = '';
        }

        // on this stage $this->materials is array of configurations
        $cacheable = $this->cacheStrategy === self::CACHE_FORCE_NO_CACHE ? false : $this->cacheable();

        Yii::trace("MonsterContent: {$this->uniqueContentId}, cache: {$this->cacheStrategy}, cacheable: {$cacheable}");

        if ($cacheable === true && $this->cacheStrategy !== self::CACHE_RELY_ON_MATERIAL) {
            $result = Yii::$app->cache->get($this->cacheKey);
            if (empty($result) === false) {
                return $result;
            }
        }

        // here we must create objects from materials
        $this->makeMaterials();

        foreach ($this->materials as $index => $material) {
            if ($cacheable === true && $this->cacheStrategy === self::CACHE_ENTIRE_RESULT_ONLY) {
                $material->cacheOn = false;
            }
            $result .= $material->run();
        }
        $result .= $this->editModeOn() ? '</div>' : '';

        if ($cacheable === true && $this->cacheStrategy !== self::CACHE_RELY_ON_MATERIAL) {
            Yii::beginProfile('MonsterContent -> gather cache dependency');
            // gather dependency
            $chain = [];
            $tags = [];
            /**
             * What we are doing here is going through all materials and gathering cache dependencies from them.
             * The result is optimized ChainedDependency
             * to reduce the count of dependencies touches and the whole memory.
             */
            foreach ($this->materials as $material) {
                $dependency = $material->generateCacheDependency();
                if ($dependency instanceof ChainedDependency) {
                    foreach ($dependency->dependencies as $chainItem) {
                        if ($chainItem instanceof TagDependency) {
                            // merge tags of tag dependencies
                            foreach ((array) $chainItem->tags as $tag) {
                                $tags[] = $tag;
                            }
                        } else {
                            $chain[] = $chainItem;
                        }
                    }
                } elseif ($dependency instanceof TagDependency) {
                    // merge tags
                    foreach ((array) $dependency->tags as $tag) {
                        $tags[] = $tag;
                    }
                } else {
                    $chain[] = $dependency;
                }
            }
            if (count($tags) > 0) {
                $tags = array_unique($tags);
                $chain[] = new TagDependency([
                    'tags' => $tags,
                ]);
            }

            Yii::endProfile('MonsterContent -> gather cache dependency');

            Yii::trace('MonsterContent cache chain: ' . VarDumper::dumpAsString($chain, 3));
            $dependency = count($chain) > 0 ? new ChainedDependency(['dependencies' => $chain]) : null;

            Yii::$app->cache->set(
                $this->cacheKey,
                $result,
                $this->minCacheDuration,
                $dependency
            );
        }

        return $result;
    }

    private function makeMaterials()
    {
        Yii::beginProfile('MonsterContent -> Make materials');
        $materials = [];
        foreach ($this->materials as $index => $materialConfiguration) {
            if (!isset($materialConfiguration['data'])) {
                $materialConfiguration['data'] = array_key_exists($index, $this->data) ? $this->data[$index] : [];
            }
            $materialConfiguration['data'] = ArrayHelper::merge($materialConfiguration['data'], $this->globalData);
            $materials[] = self::makeMaterial(
                $this->uniqueContentId,
                $index,
                $materialConfiguration,
                $this->editModeOn()
            );
        }
        $this->materials = $materials;
        Yii::endProfile('MonsterContent -> Make materials');
    }

    /**
     * @return Repository
     * @throws \yii\base\InvalidConfigException
     */
    public static function repository()
    {
        return Yii::$app->get('monsterRepository');
    }

    public static function makeMaterial($uniqueContentId, $index, $materialConfiguration, $editModeOn = false)
    {
        if (isset($materialConfiguration['material']) === false) {
            throw new \RuntimeException("Material should be set in MonsterContent materials");
        }
        $material = static::repository()->material($materialConfiguration['material']);
        $materialConfiguration['class'] = $material->widget;
        $materialConfiguration['material'] = $material;
        $materialConfiguration['uniqueContentId'] = $uniqueContentId;
        $materialConfiguration['materialIndex'] = $index;
        $materialConfiguration['editMode'] = $editModeOn;
        if (empty($materialConfiguration['data'])) {
            $materialConfiguration['data'] = $material->sampleData();
        }

        /** @var BaseMaterialize $material */
        $material = Yii::createObject($materialConfiguration);

        return $material;
    }

    /**
     * @return bool If all materials in this content are cacheable
     */
    protected function cacheable()
    {
        foreach ($this->materials as $material) {
            if ((
                    ArrayHelper::getValue($material, 'cacheable', true)
                    && ArrayHelper::getValue($material, 'cacheOn', false)
                ) === false) {
                return false;
            }
            $this->minCacheDuration = min(
                $this->minCacheDuration,
                ArrayHelper::getValue($material, 'cacheLifetime', 86400)
            );
        }
        $this->cacheKey = $this->uniqueContentId;

        return true;
    }
}
