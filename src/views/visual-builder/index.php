<?php
/** @var \yii\web\View $this */
/** @var string $url */
use DotPlant\Monster\assets\JsTreeDark;
use kartik\icons\Icon;
use yii\helpers\Json;
use yii\helpers\Url;

if (parse_url($url, PHP_URL_QUERY)) {
    $url .= '&__monster_edit_mode__=1';
} else {
    $url .= '?__monster_edit_mode__=1';
}

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
                        'icon' => Icon::show('list-ul'),
                        'environment' => 'structure',
                    ],
                    [
                        'icon' => Icon::show('tree'),
                        'environment' => 'page-structure',
                    ],
                    [
                        'icon' => Icon::show('list-alt'),
                        'environment' => 'materials',
                    ],
                    [
                        'icon' => Icon::show('paint-brush'),
                        'environment' => 'customization',
                    ],
                    [
                        'icon' => Icon::show('link'),
                        'environment' => 'action',
                    ],
                ],
                'url' => $url,
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
    $(function() {
      window.FrontendMonster.builder;
    });
js;
$this->registerJs($js, \yii\web\View::POS_BEGIN);
