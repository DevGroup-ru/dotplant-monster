<?php

namespace DotPlant\Monster\Universal;

trait MonsterContentTrait
{
    public function getMaterials()
    {
        /** @var \yii\base\Model $this */
        return $this->content;
    }


    /**
     * @param array $materials
     */
    public function setMaterials($materials)
    {
        $this->content = $materials;
    }

    public function saveMaterials()
    {
        /** @var \yii\base\Model $this */
        return $this->save();
    }

    public function uniqueContentIdPrefix()
    {
        /** @var \yii\base\Model $this */
        return static::tableName() . '/' . $this->id;
    }
}
