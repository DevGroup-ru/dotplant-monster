<?php

namespace DotPlant\Monster;

use DevGroup\Frontend\Universal\ActionData;
use DotPlant\Monster\DataEntity\DataEntityProvider;
use yii;

class DataProviderProcessor extends yii\base\Component
{
    /**
     * @param  DataEntityProvider[] $providers
     * @param  ActionData           $actionData
     *
     * @return mixed
     */
    public function process($providers, $actionData = null)
    {
        if ($actionData === null) {
            $actionData = new ActionData();
        }

        $result = [];
        foreach ($providers as $provider) {
            /** @var DataEntityProvider $instance */
            $instance = Yii::createObject($provider);
            $result = yii\helpers\ArrayHelper::merge($result, $instance->getEntities($actionData));
        }
        
        return $result;
    }
}
