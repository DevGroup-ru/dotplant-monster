<?php

namespace DotPlant\Monster\DataEntity;

use yii;
use yii\helpers\ArrayHelper;

class ActionEntitiesProvider extends DataEntityProvider
{
    public $mapping = [];

    public function pack()
    {
        return [
            'class' => static::class,
            'mapping' => $this->mapping,
        ];
    }

    public function getEntities(&$actionData)
    {
        $result = [];
        foreach ($this->mapping as $materialPath => $mappings) {
            $result[$materialPath] = [];
            foreach ($mappings as $path => $key) {
                $result[$materialPath][$key] = ArrayHelper::getValue($actionData->entities, $path);
            }
        }
        return $result;
    }
}
