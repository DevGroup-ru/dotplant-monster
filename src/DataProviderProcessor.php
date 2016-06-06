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
     * @param  array                $packed
     *
     * @return mixed
     */
    public static function process($providers, &$actionData, &$packed)
    {
        $result = [];
        foreach ($providers as $i => $provider) {
            $profileKey = "DataProviderProcessor: $i";
            Yii::beginProfile($profileKey);
            //! @todo Add check for correct class names here
            /** @var DataEntityProvider $instance */
            $instance = Yii::createObject($provider);
            $result = yii\helpers\ArrayHelper::merge($result, $instance->getEntities($actionData));
            $packed[$i] = $instance->pack();
            Yii::endProfile($profileKey);
        }
        
        return $result;
    }
}
