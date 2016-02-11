<?php
/** @var \yii\web\View $this */
Yii::$app->cache->flush();
//\yii\helpers\VarDumper::dump(
//    Yii::$app->bemRepository->materials,//['monster-section-selector'],
//    30,
//    true
//);
//die();
\kartik\icons\Icon::map($this);
$builder = new \DotPlant\Monster\MonsterContent([
    'uniqueContentId' => 'visual-builder',
    'materials' => [
        [
            'block' => 'monster-visual-builder',
            'params' => [
                'environments' => [
                    [
                        'icon' => \kartik\icons\Icon::show('list-ul'),
                        'environment' => 'structure',
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
echo $builder->render();
/** @var \DotPlant\Monster\BemRepository $repository */
$repository = Yii::$app->bemRepository;
$groups = \yii\helpers\Json::encode($repository->groups);
$materials = \yii\helpers\Json::encode($repository->materials);
$js = <<<js
    window.VisualBuilderSettings = {
      groups: $groups,
      materials: $materials
    };
js;
$this->registerJs($js, \yii\web\View::POS_BEGIN);
?>
