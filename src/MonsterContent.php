<?php

namespace DotPlant\Monster;

use DotPlant\Monster\materials\BaseMaterial;
use Yii;
use yii\base\InvalidConfigException;
use yii\base\Object;
use yii\caching\ChainedDependency;
use yii\caching\TagDependency;
use yii\helpers\ArrayHelper;
use yii\helpers\VarDumper;

class MonsterContent extends Object
{
    /** @var BaseMaterial[] */
    public $materials = [];

    public $uniqueContentId = '';

    private $cacheKey = '';
    private $minCacheDuration = 2592000;

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
    }

    public function render()
    {
        $result = '';
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
            $material->uniqueTemplateId = $this->uniqueContentId . ":material:$index";
            if ($cacheable === true && $this->cacheStrategy === self::CACHE_ENTIRE_RESULT_ONLY) {
                $material->cacheOn = false;
            }
            $result .= $material->run();
        }

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
        foreach ($this->materials as $materialConfiguration) {
            $className = ArrayHelper::getValue(
                $materialConfiguration,
                'class',
                'DotPlant\Monster\materials\BaseMaterial'
            );
            $materialConfiguration['class'] = $className;
            $materials[] = Yii::createObject($materialConfiguration);
        }
        $this->materials = $materials;
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
