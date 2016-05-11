<?php

namespace DotPlant\Monster;

use yii;

trait HasMonsterCache
{
    /**
     * @var string Name of monster cache application component in yii
     */
    public $monsterCache = 'monsterCache';

    /**
     * @return \yii\caching\Cache
     * @throws \yii\base\InvalidConfigException
     */
    public function cache()
    {
        $cache = Yii::$app->get($this->monsterCache);
        if ($cache === null) {
            Yii::$app->set($this->monsterCache, [
                'class' => Cache::className(),
            ]);
            $cache = Yii::$app->get($this->monsterCache);
        }
        return $cache;
    }
}
