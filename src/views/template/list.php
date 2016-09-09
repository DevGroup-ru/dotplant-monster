<?php
/**
 * @var \yii\data\ActiveDataProvider $dataProvider
 * @var TemplateSearch $searchModel

 */

use DevGroup\AdminUtils\columns\ActionColumn;
use DotPlant\Monster\models\Template;
use DotPlant\Monster\models\TemplateSearch;
use yii\grid\GridView;


?>

<div class="row">
    <div class="col-md-12">
        <div class="box box-solid">
            <div class="box-header with-border clearfix">
                <h3 class="box-title pull-left">
                    <?= Yii::t('dotplant.monster', 'Templates list') ?>
                </h3>
                <div class="pull-right">

                </div>
            </div>
            <?= GridView::widget([
                'id' => 'entities-list',
                'dataProvider' => $dataProvider,
                'tableOptions' => [
                    'class' => 'table table-bordered table-hover table-responsive',
                ],
                'columns' => [
                    [
                        'attribute' => 'name',
                        'label' => Yii::t('dotplant.monster', 'Name'),
                        'options' => [
                            'width' => '20%',
                        ],
                    ],
                    [
                        'attribute' => 'key',
                        'label' => Yii::t('dotplant.monster', 'Key'),
                        'options' => [
                            'width' => '20%',
                        ],
                    ],
                    [
                        'attribute' => 'is_layout',
                        'label' => Yii::t('dotplant.monster', 'Is Layout'),
                        'content' => function ($data) {
                            return Yii::$app->formatter->asBoolean($data->is_layout);
                        },
                        'filter' => [
                            0 => Yii::$app->formatter->asBoolean(0),
                            1 => Yii::$app->formatter->asBoolean(1),
                        ],
                    ],
                    [
                        'attribute' => 'is_deleted',
                        'label' => Yii::t('dotplant.monster', 'Show deleted?'),
                        'value' => function ($model) {
                            /** @var Template $model */
                            return $model->isDeleted() === true
                                ? Yii::t('dotplant.monster', 'Deleted')
                                : Yii::t('dotplant.monster', 'Active');
                        },
                        'filter' => [
                            Yii::t('dotplant.monster', 'Show only active'),
                            Yii::t('dotplant.monster', 'Show only deleted')
                        ],
                        'filterInputOptions' => [
                            'class' => 'form-control',
                            'id' => null,
                            'prompt' => Yii::t('dotplant.entity.structure', 'Show all')
                        ]
                    ],
                    [
                        'class' => ActionColumn::class,
                        'options' => [
                            'width' => '120px',
                        ],
                        'buttons' => function ($model, $key, $index, $column) {
                            /** @var Template $model */
                            $result = [
                                [
                                    'url' => '/monster/template/edit',
                                    'icon' => 'pencil',
                                    'class' => 'btn-primary',
                                    'label' => Yii::t('dotplant.monster', 'Edit'),

                                ],
                            ];

                            if ($model->isDeleted() === false) {
                                $result['delete'] = [
                                    'url' => '/monster/template/delete',
                                    'visible' => false,
                                    'icon' => 'trash-o',
                                    'class' => 'btn-warning',
                                    'label' => Yii::t('dotplant.monster', 'Delete'),

                                    'options' => [
                                        'data-action' => 'delete',
                                        'data-method' => 'post',
                                    ],
                                ];
                            } else {
                                $result['restore'] = [
                                    'url' => '/monster/template/restore',
                                    'icon' => 'undo',
                                    'class' => 'btn-info',
                                    'label' => Yii::t('dotplant.monster', 'Restore'),
                                ];
                                $result['delete'] = [
                                    'url' => '/monster/template/delete',
                                    'urlAppend' => ['hard' => 1],
                                    'icon' => 'trash-o',
                                    'class' => 'btn-danger',
                                    'label' => Yii::t('dotplant.monster', 'Delete'),
                                    'options' => [
                                        'data-action' => 'delete',
                                        'data-method' => 'post',
                                    ],
                                ];
                            }
                            return $result;
                        }
                    ]
                ],
            ]) ?>
        </div>
    </div>
</div>
