<?php

namespace DotPlant\Monster\models;

use yii;

/**
 * This is the model class for table "{{%template_contexts}}".
 *
 * @property integer $template_id
 * @property integer $context_id
 *
 * @property Template $template
 */
class TemplateContexts extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%template_contexts}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['template_id', 'context_id'], 'required'],
            [['template_id', 'context_id'], 'integer'],
            [['template_id'], 'exist', 'skipOnError' => true, 'targetClass' => Template::className(), 'targetAttribute' => ['template_id' => 'id']],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'template_id' => Yii::t('app', 'Template ID'),
            'context_id' => Yii::t('app', 'Context ID'),
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTemplate()
    {
        return $this->hasOne(Template::className(), ['id' => 'template_id'])->inverseOf('templateContexts');
    }
}
