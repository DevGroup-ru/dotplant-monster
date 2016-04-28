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
        if (isset($_POST['block'], $_POST['uniqueContentId']) === false || Yii::$app->request->isAjax === false) {
            throw new yii\web\BadRequestHttpException;
        }
        $content = \DotPlant\Monster\MonsterContent::widget([
            'uniqueContentId' => $_POST['uniqueContentId'],
            'materials' => [
                [
                    'block' => $_POST['block'],
                ],
            ],
        ]);
        return $this->renderAjax('new-block', ['content' => $content]);
    }
}
