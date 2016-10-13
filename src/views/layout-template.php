<?php

/**
 * @var \yii\web\View $this
 * @var string        $content
 */
use app\assets\AppAsset;
use DevGroup\Multilingual\widgets\HrefLang;
use DotPlant\Monster\models\TemplateRegion;
use DotPlant\Monster\MonsterContent;
use DotPlant\Monster\Universal\MonsterEntityTrait;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;

AppAsset::register($this);
$mods = Yii::$app->request->isEditMode() ? 'm-wrapper_monster-edit-mode' : '';
?>
<?php $this->beginPage(); ?>
<!DOCTYPE html>
<html lang="<?=Yii::$app->language?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= Html::encode($this->title) ?></title>
    <meta http-equiv="content-language" content="<?=Yii::$app->language?>">
    <meta name="generator" content="DotPlant CMS">

    <?= Html::csrfMetaTags() ?>
    <?= HrefLang::widget() ?>
    <?php $this->head(); ?>

</head>
<body itemscope itemtype="http://schema.org/WebPage">
<?php $this->beginBody(); ?>
<div class="m-wrapper <?=$mods?>">
<?php
/** @var TemplateRegion $templateRegions */
$templateRegions = Yii::$app->params['layoutTemplateRegions'];
/** @var \yii\base\Model|MonsterEntityTrait $model */
$model = Yii::$app->params['layoutMainEntity'];
/** @var array $dataByTemplateRegion */
$dataByTemplateRegion = Yii::$app->params['layoutDataByTemplateRegion'];

foreach ($templateRegions as $region) {
    $config = [
        'isLayout' => true,
        'globalData' => [
            'content' => &$content,
        ],
        'uniqueContentId' => 'template-' . $region->template->id . '/' . $region->key,
        'regionId' => $region->id,
        'regionKey' => $region->key,
        'contentDescription' => Yii::t('app', 'Layout') . ' – ' . $region->name . " [{$region->key}]",
    ];
    $materials = $region->content;
    if ($region->entity_dependent) {
        $config['uniqueContentId'] = $model->uniqueContentIdPrefix() . '/' . $region->key;
        if (isset($model->content[$region->key])) {
            $materials = $model->content[$region->key];
        }
    }
    $config['data'] = ArrayHelper::getValue($dataByTemplateRegion, $region->key, []);

    $config['materials'] = $materials;

    echo MonsterContent::widget(
        $config
    );
}
?>
</div>
<?php $this->endBody(); ?>
</body>
</html>
<?php $this->endPage(); ?>