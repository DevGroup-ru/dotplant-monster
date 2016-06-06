<?php

namespace DotPlant\Monster\DataEntity;

use yii;

class StaticContentProvider extends DataEntityProvider
{
    public function pack()
    {
        return [
            'class' => static::class,
            'entities' => $this->entities,
        ];
    }

    public function getEntities(&$actionData)
    {
        return $this->entities;
    }
}
