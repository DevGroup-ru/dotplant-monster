<?php

namespace DotPlant\Monster\controllers;

use Yii;
use yii\web\Controller;

class VisualBuilderController extends Controller
{
    public function actionIndex()
    {
        return $this->render('index');
    }
}
