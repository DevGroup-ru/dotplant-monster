<?php

namespace DotPlant\Monster\controllers;

use DevGroup\AdminUtils\controllers\BaseController;
use DevGroup\Frontend\helpers\RequestHelper;
use DevGroup\Frontend\Universal\SuperAction;
use DotPlant\Monster\actions\Template\ListAction;
use DotPlant\Monster\models\Template;
use Yii;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;
use yii\web\BadRequestHttpException;

class TemplateController extends BaseController
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
                        'actions' => ['index', 'list', 'edit', 'delete'],
                        'allow' => true,
                        'roles' => ['dotplant-monster-template'],
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

    public function actions()
    {
        return [
            'list' => [
                'class' => SuperAction::class,
                'actions' => [
                    [
                        'class' => ListAction::class,
                    ],
                ],
            ],
        ];
    }


    public function actionDelete()
    {
        RequestHelper::allowAjaxOnly();
        RequestHelper::allowOnlyJsonRequest();

        $template_id = (int) Yii::$app->request->post('template_id', 0);
        if ($template_id <= 0) {
            throw new BadRequestHttpException();
        }
        $model = Template::findById(
            $template_id
        );
        return RequestHelper::jsonpFormat(
            $model->delete() !== false
        );
    }
}
