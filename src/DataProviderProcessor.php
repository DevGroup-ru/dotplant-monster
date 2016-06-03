<?php

namespace DotPlant\Monster;

use DevGroup\Frontend\Universal\ActionData;
use DotPlant\Monster\DataEntity\DataEntityProvider;
use yii;

class DataProviderProcessor
{
    /**
     * @param  DataEntityProvider[] $providers
     * @param  ActionData           $actionData
     *
     * @return mixed
     */
    public static function process($providers, &$actionData)
    {
        $result = [];
        foreach ($providers as $i => $provider) {
            $profileKey = "DataProviderProcessor: $i";
            Yii::beginProfile($profileKey);
            /** @var DataEntityProvider $instance */
            $instance = Yii::createObject($provider);
            $result = yii\helpers\ArrayHelper::merge($result, $instance->getEntities($actionData));
            Yii::endProfile($profileKey);
        }
        
        return $result;
    }
}
