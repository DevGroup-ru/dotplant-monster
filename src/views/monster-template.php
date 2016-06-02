<?php

/**
 * @var \yii\web\View    $this
 * @var TemplateRegion[] $templateRegions
 * @var array            $dataByTemplateRegion
 * @var Page             $model
 */

use app\models\Page;
use DotPlant\Monster\models\TemplateRegion;
use DotPlant\Monster\MonsterContent;
use yii\helpers\ArrayHelper;
use yii\helpers\VarDumper;

//VarDumper::dump($dataByTemplateRegion, 20, true);die();

foreach ($templateRegions as $region) {
    $materials = $region->content;
    if ($region->entity_dependent) {
        if (isset($model->content[$region->key])) {
            $materials = $model->content[$region->key];
        }
    }
    $config['data'] = ArrayHelper::getValue($dataByTemplateRegion, $region->key, []);
    $config['uniqueContentId'] = $region->key;
    $config['materials'] = $materials;

    echo MonsterContent::widget(
        $config
    );
}