<?php

defined('YII_DEBUG') or define('YII_DEBUG', true);
defined('YII_ENV') or define('YII_ENV', 'test');

require(__DIR__ . '/../vendor/autoload.php');
require(__DIR__ . '/../vendor/yiisoft/yii2/Yii.php');

Yii::setAlias('@tests', __DIR__);

new \yii\console\Application([
    'id' => 'unit',
    'basePath' => __DIR__,
    'modules' => [
        'monster' => [
            'class' => 'DotPlant\Monster\MonsterModule',
        ],
    ],
    'components' => [
        'monsterCache' => [
            'class' => 'DotPlant\Monster\Cache',
        ],
        'monsterRepository' => [
            'class' => 'DotPlant\Monster\Tests\ExtendedRepository',
        ],
        'monsterBh' => [
            'class' => 'DotPlant\Monster\MonsterBh',
            'expander' => 'monsterBhExpander',
        ],
        'monsterBhExpander' => [
            'class' => 'DotPlant\Monster\MonsterBhExpander',
            'monsterBh' => 'monsterBh',
        ],
    ],
]);
