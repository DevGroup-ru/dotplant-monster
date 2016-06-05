<?php

namespace DotPlant\Monster\Universal;

use DevGroup\Frontend\Universal\ActionData;
use DevGroup\Frontend\Universal\UniversalAction;
use DotPlant\Monster\DataProviderProcessor;
use DotPlant\Monster\models\Layout;
use DotPlant\Monster\models\Template;
use yii;
use yii\helpers\ArrayHelper;

class MainEntity extends UniversalAction
{
    public $mainEntityKey;

    public $defaultTemplateKey;

    public $defaultLayoutKey = 'basic';

    /** @var bool|string Template key to force */
    public $forceTemplate = false;

    /**
     * @param ActionData $actionData
     *
     * @throws \yii\base\InvalidConfigException
     * @throws \yii\web\NotFoundHttpException
     * @throws bool
     */
    public function run(&$actionData)
    {
        if ($this->mainEntityKey === null) {
            throw new yii\base\InvalidConfigException('You must set main entity key');
        }
        if ($this->defaultTemplateKey === null) {
            throw new yii\base\InvalidConfigException('You must provide default template key');
        }

        // first we need to find our entity
        /** @var \yii\base\Model|EntityTrait $entity */
        $entity = null;
        if (array_key_exists($this->mainEntityKey, $actionData->entities)) {
            $entity = ($actionData->entities[$this->mainEntityKey] ?: null);
        }
        if ($entity === null) {
            throw new yii\web\NotFoundHttpException;
        }

        /** @var Template $template */
        if ($this->forceTemplate !== false) {
            $template = Template::findByKey($this->forceTemplate);
        } elseif ($templateId = $entity->getTemplateId()) {
            $template = Template::findById($templateId);
        }
        if ($template === null) {
            $template = Template::findByKey($this->defaultTemplateKey);
        }
        // now we have template and it can be rendered
        $actionData->viewFile = '@DotPlant/Monster/views/monster-template.php';
        $actionData->result['templateRegions'] = $template->templateRegions;

        $providers = ArrayHelper::merge(
            $template->getEntityDataProviders(),
            $entity->getEntityDataProviders()
        );
        $packed = [];

        $actionData->result['dataByTemplateRegion'] = DataProviderProcessor::process($providers, $actionData, $packed);
        $actionData->result['model'] = &$entity;
        
        if (YII_ENV === 'dev') {
            Yii::$app->params['actionData'] = &$actionData;
            Yii::$app->params['providers'] = $packed;
        }
        
        // apply layout
        $layoutId = $entity->getLayoutId();
        $layout = $layoutId > 0 ? Layout::findById($layoutId) : null;
        if ($layout === null) {
            $layout = Layout::findByKey($this->defaultLayoutKey);
        }
        if ($layout !== null) {
            Yii::$app->params['layoutTemplateRegions'] = $layout->templateRegions;
            Yii::$app->params['layoutMainEntity'] = &$entity;
            $providers = ArrayHelper::merge(
                $layout->getEntityDataProviders(),
                $entity->getEntityDataProviders()
            );
            $packedLayoutProviders = [];
            Yii::$app->params['layoutDataByTemplateRegion'] =
                DataProviderProcessor::process($providers, $actionData, $Packed);
            $actionData->controller->layout = '@DotPlant/Monster/views/layout-template.php';
        }
    }
}
