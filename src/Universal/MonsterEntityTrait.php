<?php

namespace DotPlant\Monster\Universal;


trait MonsterEntityTrait
{
    public function getTemplateId()
    {
        /** @var \yii\base\Model $this */
        return (int) $this->template_id;
    }

    public function getMaterials()
    {
        /** @var \yii\base\Model $this */
        return $this->content;
    }

    public function getEntityDataProviders()
    {
        /** @var \yii\base\Model $this */
        return $this->providers;
    }

    /**
     * @param array $materials
     */
    public function setMaterials($materials)
    {
        $this->content = $materials;
    }

    public function saveMonsterContent()
    {
        return $this->save();
    }

    /**
     * @param array $providers
     */
    public function setEntityDataProviders($providers)
    {
        $this->providers = $providers;
    }
    
    public function uniqueContentIdPrefix()
    {
        return static::tableName() . '/' . $this->id;
    }

    public function getLayoutId()
    {
        /** @var \yii\base\Model $this */
        return (int) $this->layout_id;
    }
}
