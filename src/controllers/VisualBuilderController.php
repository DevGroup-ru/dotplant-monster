<?php

namespace DotPlant\Monster\controllers;

use DevGroup\Frontend\controllers\FrontendController;
use yii;
use yii\filters\VerbFilter;

class VisualBuilderController extends FrontendController
{
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'index' => ['get'],
                    'new-block' => ['post'],
                ],
            ],
        ];
    }

    public function actionIndex($url = '/')
    {
//        $this->title = Yii::t('monster', 'Visual Builder');
        return $this->render(
            'index',
            [
                'url' => $url,
            ]
        );
    }

    public function actionNewBlock()
    {
        if (
            isset($_POST['block'], $_POST['uniqueContentId'], $_POST['materialIndex']) === false
            || Yii::$app->request->isAjax === false
        ) {
            throw new yii\web\BadRequestHttpException;
        }
        $content = \DotPlant\Monster\MonsterContent::makeMaterial(
            uniqid('monsterContentUNIQUE', true),
            $_POST['materialIndex'],
            [
                'material' => $_POST['block'],
            ],
            true
        )->run();
        return $this->renderAjax('new-block', ['content' => $content]);
    }
}
