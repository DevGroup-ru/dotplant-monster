<?php

defined('YII_DEBUG') or define('YII_DEBUG', true);
defined('YII_ENV') or define('YII_ENV', 'test');

require_once(__DIR__ . '/../vendor/autoload.php');
require_once(__DIR__ . '/../vendor/yiisoft/yii2/Yii.php');

Yii::setAlias('@tests', __DIR__);
$config = require(__DIR__ . '/config/config.php');

new \yii\console\Application($config);
Yii::$app->setAliases(['@webroot' => __DIR__ . '/fakeweb']);
Yii::$app->setAliases(['@web' => __DIR__ . '/fakeweb']);

Yii::$app->getDb()->createCommand("SET foreign_key_checks = 0")->execute();
foreach (Yii::$app->db->schema->tableNames as $tableName) {
    Yii::$app->getDb()->createCommand()->dropTable($tableName)->execute();
}
Yii::$app->getDb()->createCommand("SET foreign_key_checks = 1")->execute();
Yii::$app->multilingual->language_id = 1;
Yii::$app->runAction(
    'migrate/up',
    [
        'interactive' => '0',
    ]
);