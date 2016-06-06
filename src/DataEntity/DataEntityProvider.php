<?php

namespace DotPlant\Monster\DataEntity;

use DevGroup\Frontend\Universal\ActionData;
use yii\base\Object;

abstract class DataEntityProvider extends Object
{
    protected $entities = [];

    abstract public function pack();

    /**
     * @param ActionData $actionData
     *
     * @return mixed
     */
    abstract public function getEntities(&$actionData);

    public function setEntities($value)
    {
        $this->entities = $value;
    }
}
