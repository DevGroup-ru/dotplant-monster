<?php

namespace DotPlant\Monster;

use Symfony\Component\Finder\Finder;
use Symfony\Component\Finder\SplFileInfo;
use yii;

abstract class BundleEntity
{
    use HasFilesystemRepresentation;
    use DescribableBundleEntity;

    /** @var string Entity name - should be unique inside parent(bundle for groups, group for materials) */
    public $id;

    /** @var string Full namespaced path */
    public $fullPath;

    /** @var Manifest */
    private $manifest;

    public $autoloadJs = false;
    public $autoloadCss = false;

    public $hasJs = false;
    public $hasCss = false;
    
    const MANIFEST_FILENAME = 'monster.json';

    /** @var null|array */
    private $childrenDirectories;

    public function __construct($baseDirectory)
    {
        $this->setFsLocation($baseDirectory);
    }

    /**
     * @param string $path
     *
     * @return BundleEntity
     */
    abstract public function newChild($path);

    /**
     * @param string $parentPath Path of parent entity
     * @return void
     */
    abstract public function process($parentPath = null);

    /**
     * @return \DotPlant\Monster\Manifest
     */
    public function getManifest()
    {
        return $this->manifest;
    }
    
    public function loadManifest()
    {
        if ($this->manifest !== null) {
            return;
        }
        $this->manifest = new Manifest($this->getFsLocation() . static::MANIFEST_FILENAME, $this);
        $this->manifest->ensureManifestLoaded();
        $this->postProcessManifest();

        if ($this->id === null) {
            if ($this instanceof Bundle) {
                $this->id = basename(dirname($this->getFsLocation()));
            } else {
                $this->id = basename($this->getFsLocation());
            }
        }
    }

    protected function postProcessManifest()
    {
        if ($this->hasCss === false && file_exists($this->stylesFilename())) {
            $this->hasCss = true;
        }
        if ($this->hasJs === false && file_exists($this->scriptsFilename())) {
            $this->hasJs = true;
        }
    }

    public function scriptsFilename()
    {
        return $this->getFsLocation() . (YII_ENV === 'dev' ? 'scripts.js' : 'scripts.min.js');
    }

    public function stylesFilename()
    {
        return $this->getFsLocation() . (YII_ENV === 'dev' ? 'styles.js' : 'styles.min.js');
    }

    abstract public function publishAssets();

    public function publishEntityAssets()
    {
        if ($this->hasJs) {
            $publishedPath = Yii::$app->assetManager->getPublishedPath($this->scriptsFilename());
            if (file_exists($publishedPath) === false) {
                Yii::$app->assetManager->publish($this->scriptsFilename());
            }
            $publishedUrl = Yii::$app->assetManager->getPublishedUrl($this->scriptsFilename());

            Yii::$app->view->registerJsFile($publishedUrl);

        }

        if ($this->hasCss) {
            $publishedPath = Yii::$app->assetManager->getPublishedPath($this->stylesFilename());
            if (file_exists($publishedPath) === false) {
                Yii::$app->assetManager->publish($this->stylesFilename());
            }
            $publishedUrl = Yii::$app->assetManager->getPublishedUrl($this->stylesFilename());

            Yii::$app->view->registerCssFile($publishedUrl);

        }
    }

    /**
     * @return array|null
     * @throws \InvalidArgumentException
     */
    public function getChildrenDirectories()
    {
        if ($this->childrenDirectories === null) {
            $finder = new Finder();
            $finder
                ->directories()
                ->in($this->getFsLocation())
                ->ignoreUnreadableDirs()
                ->followLinks()
                ->sortByName()
                ->depth('== 0');

            $this->childrenDirectories=[];

            foreach ($finder as $directory) {
                /** @var SplFileInfo $directory */
                $realPath = $directory->getRealPath();
                if (file_exists("$realPath/".static::MANIFEST_FILENAME)) {
                    $this->childrenDirectories[] = $realPath;
                }
            }
        }
        return $this->childrenDirectories;
    }

    /**
     * @return array Returns an array for json_encode serialization
     */
    public function __sleep()
    {
        $attributes =[
            'fsLocation',
            'name',
            'id',
            'fullPath',
            'hasJs',
            'hasCss',
            'autoloadJs',
            'autoloadCss',
            'hidden',
        ];

        if (count($this->css) > 0) {
            $attributes[] = 'css';
        }
        if (count($this->js) > 0) {
            $attributes[] = 'js';
        }

        return $attributes;
    }

    /**
     * @return array
     */
    abstract public function dataForBuilder();
}
