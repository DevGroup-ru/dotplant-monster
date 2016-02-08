<?php
Yii::$app->cache->flush();
//\yii\helpers\VarDumper::dump(
//    Yii::$app->bemRepository->materials,//['monster-section-selector'],
//    30,
//    true
//);
//die();
$builder = new \DotPlant\Monster\MonsterContent([
    'uniqueContentId' => 'visual-builder',
    'materials' => [
        [
            'block' => 'monster-visual-builder',
            'params' => [
                'sections' => [
                    [
                        'text' => 'A',
                        'link' => '#A',
                    ],
                    [
                        'text' => 'B',
                        'link' => '#B',
                    ],
                    [
                        'text' => 'C',
                        'link' => '#C',
                    ],
                ],
            ],
        ],
    ],

]);
echo $builder->render();
?>
