<?php

namespace DotPlant\Monster;

use Yii;
use yii\base\Module;

class MonsterModule extends Module
{
    /**
     * @return self Module instance in application
     */
    public static function module()
    {
        $module = Yii::$app->getModule('monster');
        if ($module === null) {
            $module = Yii::createObject(self::class, ['monster']);
        }
        return $module;
    }
}
