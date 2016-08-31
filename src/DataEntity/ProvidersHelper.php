<?php

namespace DotPlant\Monster\DataEntity;

use DotPlant\Monster\Universal\MonsterEntityTrait;
use yii\helpers\ArrayHelper;

class ProvidersHelper
{
    /**
     * @param MonsterEntityTrait $entity
     *
     * @return array
     */
    public static function hashEntityProviders($entity)
    {
        $hash = [];
        $providers = $entity->getEntityDataProviders();
        foreach ($providers as $provider) {
            /** @var array $provider */
            $entities = ArrayHelper::getValue($provider, 'entities', []);
            foreach ($entities as $regionName => $materials) {
                foreach ($materials as $key => $material) {
                    $hash[] = "$regionName.$key";
                }
            }
        }
        return $hash;
    }

    /**
     * @param MonsterEntityTrait $entity
     *
     * @return int|string
     */
    public static function ensureStaticProvider(&$entity)
    {
        $providers = $entity->getEntityDataProviders();
        foreach ($providers as $index => $provider) {
            /** @var array $provider */
            $className = ArrayHelper::getValue($provider, 'class', null);
            if ($className === StaticContentProvider::class) {
                return $index;
            }
        }
        $providers[uniqid('prov', true)] = [
            'class' => StaticContentProvider::class,
            'entities' => []
        ];
        $entity->setEntityDataProviders($providers);
        return key(array_slice($providers, -1, 1, true));
    }
}
