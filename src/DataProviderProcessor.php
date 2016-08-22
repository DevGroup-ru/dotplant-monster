<?php

namespace DotPlant\Monster;

use DevGroup\Frontend\Universal\ActionData;
use DotPlant\Monster\DataEntity\DataEntityProvider;
use yii;
use yii\helpers\ArrayHelper;

class DataProviderProcessor
{
    /**
     * @param  DataEntityProvider[] $providers
     * @param  ActionData           $actionData
     * @param  array                $packed
     * @param  array                $providedKeys
     *
     * @return mixed
     */
    public static function process($providers, &$actionData, &$packed, &$providedKeys)
    {
        $result = [];
        $providedKeys = [];
        foreach ($providers as $i => $provider) {
            $profileKey = "DataProviderProcessor: $i";
            Yii::beginProfile($profileKey);
            //! @todo Add check for correct class names here
            /** @var DataEntityProvider $instance */
            $instance = Yii::createObject($provider);
            $providerResult = $instance->getEntities($actionData);
            $keys = [];

            array_walk($providerResult, function($materials, $regionKey) use (&$keys) {
                $result = [];
                array_walk($materials, function($data, $materialIndex) use(&$result) {
                    $result[$materialIndex] = array_keys($data);
                });
                $keys[$regionKey] = $result;
            });
            $providedKeys[$i] = $keys;

            $result = ArrayHelper::merge($result, $providerResult);
            $packed[$i] = $instance->pack();
            Yii::endProfile($profileKey);
        }
        
        return $result;
    }
}
