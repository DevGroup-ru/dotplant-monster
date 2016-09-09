<?php

namespace DotPlant\Monster\actions\Template;

use DevGroup\Frontend\helpers\RequestHelper;
use DevGroup\Frontend\Universal\ActionData;
use DevGroup\Frontend\Universal\UniversalAction;
use DotPlant\Monster\models\Template;
use DotPlant\Monster\models\TemplateSearch;
use yii;

class ListAction extends UniversalAction
{

    /**
     * @param ActionData $actionData
     *
     * @return void
     */
    public function run(&$actionData)
    {
        /** @var TemplateSearch() $searchModel */
        $searchModel = new TemplateSearch(['is_layout' => '']);

        $params = Yii::$app->request->get();
        $dataProvider = $searchModel->search($params);
        if (RequestHelper::isJsonRequested()) {
            $actionData->result['list'] = $dataProvider->getModels();
        } else {
            $actionData->result['dataProvider'] = $dataProvider;
            $actionData->result['searchModel'] = $searchModel;
        }
    }
}
