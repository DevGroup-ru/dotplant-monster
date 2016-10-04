<?php

namespace DotPlant\Monster\models;

use yii;

class Layout extends BaseTemplate
{
    /** @inheritdoc */
    public function init()
    {
        $this->is_layout = true;
        parent::init();
    }

    /**
     * @inheritdoc
     * @return TemplateQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new TemplateQuery(get_called_class(), ['isLayout' => true]);
    }

    /** @inheritdoc */
    public function beforeSave($insert)
    {
        $this->is_layout = true;
        return parent::beforeSave($insert);
    }
}
