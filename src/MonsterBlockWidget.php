<?php

namespace DotPlant\Monster;

use Yii;
use yii\base\Widget;
use yii\caching\ChainedDependency;
use yii\caching\FileDependency;
use yii\caching\TagDependency;
use yii\helpers\ArrayHelper;
use yii\helpers\Json;

/**
 * Abstract class MonsterBlockWidget must be used by all widgets, that want's to be compatible with frontend monster
 *
 * @package DevGroup\Frontend\monster
 */
abstract class MonsterBlockWidget extends Widget
{
    /**
     * @var bool Is this widget cacheable
     */
    public $cacheable = true;

    /**
     * @var bool If cache is turned on
     */
    public $cacheOn = false;

    /**
     * @var int Cache lifetime in seconds
     */
    public $cacheLifetime = 86400;

    /**
     * @var array Additional tags for cache
     */
    public $cacheAdditionalTags = [];

    /** @var array Base BEM Json */
    public $bemJson = '';

    /** @var array Array of non-bemjson tree extends that are compiled into bem matchers */
    public $bemCustomization = [];

    public $editableValues = [];

    /**
     * This is not the function that you should implement
     * @inheritdoc
     */
    public function run()
    {
        if ($this->cacheable === true && $this->cacheOn === true) {
            $result = Yii::$app->cache->get($this->generateCacheKey());
            if ($result !== false) {
                Yii::trace("Serving block widget {$this->generateCacheKey()} from cache");
                return $result;
            }
        }

        $this->uncachedRun();

        $params = $this->produceParams();
        /** @var MonsterWebView $view */
        $view = $this->view;
        $bh = $view->bh;

        if (count($this->bemCustomization) > 0) {
            $bh = new MonsterBemBh();
            $bh->customize($this->bemCustomization);
        }

        $result = $bh->apply($this->bemJson, $params, $this->editableValues, $this->templateCacheKey());
        $bh = null;
        unset($bh);


        if ($this->cacheable === true && $this->cacheOn === true) {
            Yii::$app->cache->set(
                $this->generateCacheKey(),
                $result,
                $this->cacheLifetime,
                $this->generateCacheDependency()
            );
        }

        return $result;
    }

    public function uncachedRun()
    {

    }

    public function templateCacheKey()
    {
        return '';
    }

    /**
     * Actual widget rendering function you should implement
     * @return string
     */
    abstract public function produceParams();

    /**
     * Generates cache key
     * @return string
     */
    protected function generateCacheKey()
    {
        $key = '';

        return $key;
    }

    public function generateCacheTags()
    {
        return [];
    }

    public function additionalCacheDependencies()
    {
        return [];
    }

    /**
     * Returns cache dependency for this widget
     * @return \yii\caching\TagDependency
     */
    public function generateCacheDependency()
    {
        $tags = $this->generateCacheTags();

        $tags = ArrayHelper::merge($tags, $this->cacheAdditionalTags);

        $dependencies = [
            'tags' => new TagDependency([
                'tags' => $tags,
            ]),
        ];
        $dependencies = ArrayHelper::merge($dependencies, $this->additionalCacheDependencies());

        return new ChainedDependency([
            'dependencies' => $dependencies,
        ]);
    }
}
