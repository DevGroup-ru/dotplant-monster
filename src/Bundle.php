<?php

namespace DotPlant\Monster;

use DotPlant\Monster\Bundle\Group;
use yii;

class Bundle extends BundleEntity
{
    public $isCore = false;
    
    /** @var string */
    public $namespace;

    /**
     * @var Group[]
     */
    public $groups;


    /**
     * @var array
     */
    public $jsOptions = [];


    /**
     * @var array
     */
    public $cssOptions = [];


    /**
     * Returns Manifest instance. Loads it if needed.
     * @return \DotPlant\Monster\Manifest
     */
    public function getManifest()
    {
        if (parent::getManifest() === null) {
            // manifest is requested, but was not loaded
            $this->loadManifest();
        }
        return parent::getManifest();
    }

    /**
     * @param string $parentPath
     * @return void
     */
    public function process($parentPath = '')
    {
        $this->loadManifest();

        if ($this->namespace === '' || $this->namespace === null) {
            $this->namespace = 'unknown';
        }
        if (empty($this->name)) {
            $this->name = $this->id;
        }
        if (empty($this->name)) {
            $this->name = basename($this->getFsLocation());
        }
        $this->fullPath = $this->namespace . '.' . $this->id;

        $groupsDirectories = $this->getChildrenDirectories();
        $this->groups = [];
        foreach ($groupsDirectories as $directory) {
            $group = $this->newChild($directory);
            try {
                $group->process($this->fullPath);
                if ($group->id === null) {
                    Yii::error(
                        "Group for path $directory is in unknown format(no id or bad manifest)" .
                        " - bundle: {$this->id}"
                    );
                    unset($group);
                    continue;
                }
                $this->groups[$group->id] = $group;
            } catch (\RuntimeException $e) {
                Yii::warning($e);
            }
        }
    }

    /**
     * @param string $path
     *
     * @return BundleEntity
     */
    public function newChild($path)
    {
        return new Group($path);
    }
    
    public function __sleep()
    {
        return yii\helpers\ArrayHelper::merge(
            parent::__sleep(),
            [
                'groups',
                'namespace',
                'isCore',
                'jsOptions',
                'cssOptions'
            ]
        );
    }

    /**
     * @param string $id
     *
     * @return \DotPlant\Monster\Bundle\Group|null
     */
    public function group($id)
    {
        if (array_key_exists($id, $this->groups)) {
            return $this->groups[$id];
        }
        return null;
    }

    public function publishAssets()
    {
        Yii::trace("Publish assets for bundle {$this->fullPath}!");
        $this->publishEntityAssets($this->isCore);
    }
    
    public function publishEntityAssets($jsAtHead = false)
    {
        if ($this->published) {
            return;
        }
        if ($this->hasJs) {
            $publishedPath = Yii::$app->assetManager->getPublishedPath($this->scriptsFilename());
            if (file_exists($publishedPath) === false) {
                Yii::$app->assetManager->publish($this->scriptsFilename());
            }
            $publishedUrl = Yii::$app->assetManager->getPublishedUrl($this->scriptsFilename());

            Yii::$app->view->registerJsFile($publishedUrl, $this->jsOptions);
        }

        if ($this->hasCss) {
            $publishedPath = Yii::$app->assetManager->getPublishedPath($this->stylesFilename());
            if (file_exists($publishedPath) === false) {
                Yii::$app->assetManager->publish($this->stylesFilename());
            }
            $publishedUrl = Yii::$app->assetManager->getPublishedUrl($this->stylesFilename());

            Yii::$app->view->registerCssFile($publishedUrl, $this->cssOptions);
        }
        
        $this->publishAssetBundles();
        
        $this->published = true;
    }

    /**
     * @return array
     */
    public function dataForBuilder()
    {
        $result = [
            'name' => $this->name,
            'fullPath' => $this->fullPath,
            'groups' => [],
            'isCore' => $this->isCore,
        ];
        foreach ($this->groups as $group) {
            if ($group->hidden) {
                continue;
            }
            $result['groups'][] = $group->dataForBuilder();
        }
        return $result;
    }
}
