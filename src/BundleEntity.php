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
        if ($this->id === null) {
            if ($this instanceof Bundle) {
                $this->id = basename(dirname($this->getFsLocation()));
            } else {
                $this->id = basename($this->getFsLocation());
            }
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
                $this->childrenDirectories[] = $directory->getRealPath();
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
        ];

        if (count($this->css) > 0) {
            $attributes[] = 'css';
        }
        if (count($this->js) > 0) {
            $attributes[] = 'js';
        }

        return $attributes;
    }
}
