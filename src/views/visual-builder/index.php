<?php
/** @var \yii\web\View $this */
use DotPlant\Monster\assets\JsTreeDark;
use kartik\icons\Icon;
use yii\helpers\Json;
use yii\helpers\Url;

JsTreeDark::register($this);
Icon::map($this);
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
//! @todo Is cache needed for Repository::dataForBuilder ?
$bundles = Json::encode($repository->dataForBuilder());
$newBlockUrl = Json::encode(Url::to(['/monster/visual-builder/new-block']));
$js = <<<js
    window.VisualBuilderSettings = {
      'bundles': $bundles,
      'new-block-url': $newBlockUrl
    };
    $(function(){
      window.FrontendMonster.builder;
    });
js;
$this->registerJs($js, \yii\web\View::POS_BEGIN);
?>
