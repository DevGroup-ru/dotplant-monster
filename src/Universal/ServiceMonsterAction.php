<?php

namespace DotPlant\Monster\Universal;

use DotPlant\Monster\models\ServiceEntity;
use DotPlant\Monster\models\ServiceTemplate;
use yii;

class ServiceMonsterAction extends MainEntity
{
    /**
     * @var string|callable
     */
    public $serviceTemplateKey = '';

    /**
     * @var callable
     */
    public $serviceEntityCallback;

    /**
     * @param \DevGroup\Frontend\Universal\ActionData $actionData
     *
     * @return \DotPlant\Monster\models\ServiceEntity
     */
    public function defineMainEntity(&$actionData)
    {
        if (is_callable($this->serviceTemplateKey) === false && empty($this->serviceTemplateKey)) {
            throw new \RuntimeException("ServiceTemplateKey is not set");
        }

        $key = is_callable($this->serviceTemplateKey)
            ? Yii::$container->invoke($this->serviceTemplateKey, [&$this, &$actionData])
            : $this->serviceTemplateKey;

        /** @var ServiceTemplate $serviceTemplate */
        $serviceTemplate = ServiceTemplate::findByKey($key);

        $this->defaultLayoutKey = $serviceTemplate->layout_id;
        $this->defaultTemplateKey = $serviceTemplate->template_id;

        $entity = new ServiceEntity([
            'template_id' => $serviceTemplate->template_id,
            'layout_id' => $serviceTemplate->layout_id,
        ]);

        if (is_callable($this->serviceEntityCallback)) {
            Yii::$container->invoke(
                $this->serviceEntityCallback,
                [
                    &$entity
                ]
            );
        }

        return $entity;
    }
}
