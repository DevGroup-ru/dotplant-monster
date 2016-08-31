<?php

namespace DotPlant\Monster\Universal;


trait MonsterEntityTrait
{
    use MonsterContentTrait;
    use MonsterProvidersTrait;

    public function getTemplateId()
    {
        /** @var \yii\base\Model $this */
        return (int) $this->template_id;
    }

    public function setTemplateId($id)
    {
        /** @var \yii\base\Model $this */
        $this->template_id = (int) $id;
    }

    public function getLayoutId()
    {
        /** @var \yii\base\Model $this */
        return (int) $this->layout_id;
    }

    public function setLayoutId($id)
    {
        /** @var \yii\base\Model $this */
        $this->layout_id = (int) $id;
    }
}
