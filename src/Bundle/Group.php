<?php

namespace DotPlant\Monster\Bundle;

use DotPlant\Monster\BundleEntity;
use DotPlant\Monster\Repository;
use yii;

class Group extends BundleEntity
{
    /**
     * @var Material[]
     */
    public $materials = [];
    /**
     * @param string $path
     *
     * @return BundleEntity
     */
    public function newChild($path)
    {
        return new Material($path);
    }

    /**
     * @param string $parentPath
     * @return void
     */
    public function process($parentPath = '')
    {
        $this->loadManifest();
        $this->fullPath = $parentPath . '.' . $this->id;
        
        $materialsDirectories = $this->getChildrenDirectories();
        $this->materials = [];
        foreach ($materialsDirectories as $directory) {
            $material = $this->newChild($directory);
            $material->process($this->fullPath);
            if ($material->id === null) {
                Yii::error(
                    "Material for path $directory is in unknown format(no id or bad manifest)" .
                    " - group: {$this->id}"
                );
                unset($material);
                continue;
            }
            $this->materials[$material->id] = $material;
        }
    }

    public function __sleep()
    {
        return yii\helpers\ArrayHelper::merge(
            parent::__sleep(),
            [
                'materials',
            ]
        );
    }

    /**
     * @param string $id
     *
     * @return \DotPlant\Monster\Bundle\Material|null
     */
    public function material($id)
    {
        if (array_key_exists($id, $this->materials)) {
            return $this->materials[$id];
        }
        return null;
    }

    public function publishAssets()
    {
        /** @var Repository $repository */
        $repository = Yii::$app->get('monsterRepository');
        $bundle = $repository->bundle($this->fullPath);
        if ($bundle !== null) {
            $bundle->publishAssets();
        } else {
            Yii::error("Can't find bundle for group {$this->fullPath}. That's weird");
        }
        $this->publishEntityAssets();
    }

    /**
     * @return array
     */
    public function dataForBuilder()
    {
        $result = [
            'name' => $this->name,
            'fullPath' => $this->fullPath,
            'materials' => [],
        ];
        foreach ($this->materials as $material) {
            if ($material->hidden) {
                continue;
            }
            $result['materials'][] = $material->dataForBuilder();
        }
        return $result;
    }

    public function publishEntityAssets($jsAtHead = false)
    {
        // do nothing for group for now
    }
}
