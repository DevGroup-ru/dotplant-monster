<?php

/**
 * @var \yii\web\View $this
 * @var string        $content
 */
use DevGroup\Multilingual\widgets\HrefLang;
use DotPlant\Monster\models\TemplateRegion;
use DotPlant\Monster\MonsterContent;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;

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
<div class="m-wrapper">
<?php
$templateRegions = Yii::$app->params['layoutTemplateRegions'];
$model = Yii::$app->params['layoutMainEntity'];
$dataByTemplateRegion = Yii::$app->params['layoutDataByTemplateRegion'];

foreach ($templateRegions as $region) {
    $config = [];
    $config['uniqueContentId'] = 'template-' . $region->template->id . '/' . $region->key;
    $materials = $region->content;
    if ($region->entity_dependent) {
        $config['uniqueContentId'] = $model->uniqueContentIdPrefix() . '/' . $region->key;
        if (isset($model->content[$region->key])) {
            $materials = $model->content[$region->key];
        }
    }
    $config['data'] = ArrayHelper::getValue($dataByTemplateRegion, $region->key, []);
    $config['globalData'] = ['content'=>&$content];
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