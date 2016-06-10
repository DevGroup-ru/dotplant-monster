<?php

namespace DotPlant\Monster\Tests\models;

use DevGroup\DataStructure\behaviors\HasProperties;
use DevGroup\DataStructure\traits\PropertiesTrait;
use Yii;
use yii2tech\filedb\ActiveRecord;

class Page extends ActiveRecord
{
    use PropertiesTrait;

    public function behaviors()
    {
        return [
            [
                'class' => HasProperties::class,
            ],
        ];
    }
}
