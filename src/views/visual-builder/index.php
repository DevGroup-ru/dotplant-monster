<?php
/** @var \yii\web\View $this */
use yii\helpers\Json;
use yii\helpers\Url;
//Yii::$app->cache->flush();
//\yii\helpers\VarDumper::dump(
//    Yii::$app->bemRepository->materials,//['monster-section-selector'],
//    30,
//    true
//);
//die();
\kartik\icons\Icon::map($this);
echo \DotPlant\Monster\MonsterContent::widget([
    'uniqueContentId' => 'visual-builder',
    'materials' => [
        [
            'material' => 'core.visual-builder.components.builder',
            'data' => [
                'environments' => [
                    [
                        'icon' => \kartik\icons\Icon::show('list-ul'),
                        'environment' => 'structure',
                    ],
                    [
                        'icon' => \kartik\icons\Icon::show('tree'),
                        'environment' => 'page-structure',
                    ],
                    [
                        'icon' => \kartik\icons\Icon::show('list-alt'),
                        'environment' => 'materials',
                    ],
                    [
                        'icon' => \kartik\icons\Icon::show('paint-brush'),
                        'environment' => 'customization',
                    ],
                    [
                        'icon' => \kartik\icons\Icon::show('link'),
                        'environment' => 'action',
                    ],
                ],
            ],
        ],
    ],

]);

/** @var \DotPlant\Monster\Repository $repository */
$repository = Yii::$app->get('monsterRepository');
$groups = Json::encode([]);
$materials = Json::encode([]);
$newBlockUrl = Json::encode(Url::to(['/monster/visual-builder/new-block']));
$js = <<<js
    window.VisualBuilderSettings = {
      groups: $groups,
      materials: $materials,
      'new-block-url': $newBlockUrl
    };
js;
$this->registerJs($js, \yii\web\View::POS_BEGIN);
?>
