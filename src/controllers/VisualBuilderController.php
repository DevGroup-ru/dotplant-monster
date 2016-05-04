<?php

namespace DotPlant\Monster\controllers;

use yii;
use yii\filters\VerbFilter;
use yii\web\Controller;

class VisualBuilderController extends Controller
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

    public function actionIndex()
    {
//        $this->title = Yii::t('monster', 'Visual Builder');
        return $this->render('index');
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
            $_POST['materialIndex'],
            [
                'block' => $_POST['block'],
            ],
            true
        )->run();
        return $this->renderAjax('new-block', ['content' => $content]);
    }
}
