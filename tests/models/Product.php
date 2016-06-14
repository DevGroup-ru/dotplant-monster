<?php

namespace DotPlant\Monster\Tests\models;

use DevGroup\DataStructure\behaviors\HasProperties;
use DevGroup\DataStructure\traits\PropertiesTrait;

class Product extends \yii\db\ActiveRecord
{
    use PropertiesTrait;
    use \DevGroup\TagDependencyHelper\TagDependencyTrait;

    public function behaviors()
    {
        return [
            'properties' => [
                'class' => HasProperties::class,
            ],
            'CacheableActiveRecord' => [
                'class' => \DevGroup\TagDependencyHelper\CacheableActiveRecord::class,
            ],
        ];
    }
}
