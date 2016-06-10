<?php

return [
    'id' => 'test',
    'basePath' => __DIR__ . '/../',
    'controllerMap' => [
        'migrate' => [
            'class' => dmstr\console\controllers\MigrateController::class,
            'migrationPath' => '@app',
            'migrationLookup' => [
                '@app/../vendor/devgroup/yii2-multilingual/src/migrations',
                '@app/../vendor/devgroup/yii2-data-structure-tools/src/migrations',
                '@app/migrations',
            ],
        ],
    ],
    'components' => [
        'db' => [
            'class' => yii\db\Connection::class,
            'dsn' => 'mysql:host=localhost;dbname=dotplant_monster',
            'username' => 'root',
            'password' => '',
            'charset' => 'utf8',
        ],
        'filedb' => [
            'class' => yii2tech\filedb\Connection::class,
        ],
        'multilingual' => [
            'class' => DevGroup\Multilingual\Multilingual::class,
        ],
        'cache' => [
            'class' => yii\caching\ArrayCache::class,
            'as lazy' => [
                'class' => DevGroup\TagDependencyHelper\LazyCache::class,
            ],
        ],
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
        ],
    ],
    'modules' => [
        'properties' => [
            'class' => DevGroup\DataStructure\Properties\Module::class,
            'searchClass' => DevGroup\DataStructure\search\common\Search::class,
        ],
        'monster' => [
            'class' => 'DotPlant\Monster\MonsterModule',
        ],
    ],
];
