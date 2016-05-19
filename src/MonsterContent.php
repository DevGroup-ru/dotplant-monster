<?php

namespace DotPlant\Monster;

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

    public $uniqueContentId = '';

    private $cacheKey = '';
    private $minCacheDuration = 2592000;

    public $contentDescription = 'Content';
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
        /**
         * WARNING
         *
         * Edit mode is not yet implemented.
         * If edit mode is on - we should use another cache key so it ensures that all data-attributes exist.
         * Data-attributes for now are not splitted from output for non-edit mode.
         *
         * @todo Implement EDIT MODE!
         */

        return Yii::$app instanceof yii\web\Application;
    }

    public function run()
    {
        if ($this->editModeOn()) {
            $contentDescription = Html::encode($this->contentDescription);
            VisualBuilder::register($this->view);

            $result = "<div class=\"m-monster-content\" data-unique-content-id=\"{$this->uniqueContentId}\""
                . " data-content-description=\"$contentDescription\""
                . ">";
        } else {
            $result = '';
        }

        // on this stage $this->materials is array of configurations
        $cacheable = $this->cacheable();
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
                            foreach ($chainItem->tags as $tag) {
                                $tags[] = $tag;
                            }
                        } else {
                            $chain[] = $chainItem;
                        }
                    }
                } elseif ($dependency instanceof TagDependency) {
                    // merge tags
                    foreach ($dependency->tags as $tag) {
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
        $materials = [];
        foreach ($this->materials as $index => $materialConfiguration) {
            if (!isset($materialConfiguration['data'])) {
                $materialConfiguration['data'] = $this->data;
            }
            $materials[] = self::makeMaterial(
                $this->uniqueContentId,
                $index,
                $materialConfiguration,
                $this->editModeOn()
            );
        }
        $this->materials = $materials;
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

        /** @var BaseMaterialize $material */
        $material = Yii::createObject($materialConfiguration);
        if ($editModeOn === true) {

//            $material->bemCustomization = [
//                '$before' => function(Context $ctx, Json $json) use ($index, $materialConfiguration) {
//                    if ($ctx->node->parentNode === null && $ctx->node->position === 0 && $ctx->node->index === 0) {
//                        $json->attrs['data-is-material'] = '1';
//                        $json->attrs['data-material-index'] = $index;
//                        $json->attrs['data-material-block'] = $materialConfiguration['block'];
//                    }
//                }
//            ];
        }
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
