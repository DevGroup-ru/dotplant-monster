<?php

namespace DotPlant\Monster\models;

/**
 * This is the ActiveQuery class for [[Template]].
 *
 * @see Template
 */
class TemplateQuery extends \yii\db\ActiveQuery
{
    public $isLayout = false;

    public function prepare($builder)
    {
        $this->andWhere(['is_layout' => (boolean) $this->isLayout]);
        return parent::prepare($builder);
    }

    /**
     * @inheritdoc
     * @return Template[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * @inheritdoc
     * @return Template|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }

    public function notDeleted()
    {
        $this->andWhere(['is_deleted' => false]);
        return $this;
    }
}
