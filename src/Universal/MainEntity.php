<?php

namespace DotPlant\Monster\Universal;

use DevGroup\Frontend\Universal\ActionData;
use DevGroup\Frontend\Universal\UniversalAction;
use DotPlant\Monster\DataProviderProcessor;
use DotPlant\Monster\models\Template;
use yii;
use yii\helpers\ArrayHelper;

class MainEntity extends UniversalAction
{
    public $mainEntityKey;

    public $entityTemplateIdAttribute = 'template_id';

    public $defaultTemplateKey;

    /** @var bool|string Template key to force */
    public $forceTemplate = false;
    /**
     * @param ActionData $actionData
     *
     * @return void
     */
    public function run(&$actionData)
    {
        if (empty($this->mainEntityKey)) {
            throw new yii\base\InvalidConfigException("You must set main entity key");
        }
        if (empty($this->defaultTemplateKey)) {
            throw new yii\base\InvalidConfigException("You must provide default template key");
        }

        // first we need to find our entity
        $entity = isset($actionData->entities[$this->mainEntityKey])
            ? ($actionData->entities[$this->mainEntityKey] ?: null)
            : null;
        if ($entity === null) {
            throw new yii\web\NotFoundHttpException;
        }


        if ($this->forceTemplate !== false) {
            $actionData->template = Template::findByKey($this->forceTemplate);
        } else {
            if ($entity->{$this->entityTemplateIdAttribute} > 0) {
                $actionData->template = Template::loadModel($entity->{$this->entityTemplateIdAttribute});
            } else {
                $actionData->template = Template::findByKey($this->defaultTemplateKey);
            }
        }
        // now we have template and it can be rendered
        $actionData->viewFile = '@DotPlant/Monster/views/monster-template.php';
        $actionData->result['templateRegions'] = $actionData->template->templateRegions;
        /** @var DataProviderProcessor $processor */
        $processor = Yii::createObject(['class' => DataProviderProcessor::class]);
        $providers = ArrayHelper::merge($actionData->template->providers, $entity->providers);
        //@todo add ActionEntityProvider here
        $actionData->result['dataByTemplateRegion'] = $processor->process($providers, $actionData);
        $actionData->result['model'] = &$entity;
//        var_dump($actionData->result['dataByTemplateRegion']);die();
    }
}
