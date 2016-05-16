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
        Yii::trace("Publish assets!");
        Yii::trace(yii\helpers\VarDumper::dumpAsString($this));
        $this->publishEntityAssets();
    }
}
