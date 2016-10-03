<?php

namespace DotPlant\Monster\controllers;

use DevGroup\AdminUtils\controllers\BaseController;
use DevGroup\Frontend\helpers\RequestHelper;
use DotPlant\Monster\Repository;
use Yii;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;
use yii\helpers\FileHelper;
use yii\helpers\VarDumper;

class BundlesController extends BaseController
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::class,
                'rules' => [
                    [
                        'actions' => ['index', 'list', 'reload-bundles', 'clear-cache'],
                        'allow' => true,
                        'roles' => ['dotplant-monster-bundles'],
                    ],
                    [
                        'allow' => false,
                        'roles' => ['*'],
                    ]
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::class,
                'actions' => [
                    'delete' => ['POST'],
                ],
            ]
        ];
    }

    public function actionList()
    {
        /** @var Repository $repository */
        $repository = Yii::$app->get('monsterRepository');

        return $this->renderContent(VarDumper::dumpAsString($repository, 10, true));
    }

    public function actionReloadBundles()
    {
        RequestHelper::allowAjaxOnly();
        RequestHelper::allowOnlyJsonRequest();

        /** @var Repository $repository */
        $repository = Yii::$app->get('monsterRepository');
        $repository->reloadBundles();
        return array_keys($repository->bundles);
    }

    public function actionClearCache()
    {
        RequestHelper::allowAjaxOnly();
        RequestHelper::allowOnlyJsonRequest();
        FileHelper::removeDirectory(Yii::getAlias('@app/monster/cache/'));
        FileHelper::removeDirectory(Yii::getAlias('@app/monster/templates/'));
        /** @var Repository $repository */
        $repository = Yii::$app->monsterRepository;
        $repository->reloadBundles();
        return true;
    }
}
