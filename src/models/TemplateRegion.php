<?php

namespace DotPlant\Monster\models;

use DevGroup\TagDependencyHelper\CacheableActiveRecord;
use DevGroup\TagDependencyHelper\TagDependencyTrait;
use DotPlant\Monster\Universal\MonsterContentTrait;
use yii;
use DevGroup\DataStructure\behaviors\PackedJsonAttributes;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "{{%template_region}}".
 *
 * @property integer $id
 * @property integer $template_id
 * @property integer $sort_order
 * @property string  $name
 * @property string  $key
 * @property integer $entity_dependent
 * @property string  $packed_json_content
 * @property string  $content
 *
 * @property Template $template
 */
class TemplateRegion extends ActiveRecord
{
    use TagDependencyTrait;
    use MonsterContentTrait;

    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'CacheableActiveRecord' => [
                'class' => CacheableActiveRecord::className(),
            ],
            'packedJson' => [
                'class' => PackedJsonAttributes::className(),
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%template_region}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['template_id'], 'required'],
            [['template_id', 'sort_order'], 'integer'],
            [['entity_dependent'], 'filter', 'filter'=>'boolval'],
            [['content'], 'safe'],
            [['name', 'key'], 'string', 'max' => 255],
            [
                ['template_id'],
                'exist',
                'skipOnError' => true,
                'targetClass' => BaseTemplate::className(),
                'targetAttribute' => ['template_id' => 'id'],
            ],
        ];
    }

    /**
     * Adding unique key generation
     * @inheritdoc
     */
    public function beforeValidate()
    {
        if (empty($this->key)) {
            $this->key = uniqid('template-region-', true);
        }
        return parent::beforeValidate();
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'template_id' => Yii::t('app', 'Template ID'),
            'sort_order' => Yii::t('app', 'Sort Order'),
            'name' => Yii::t('app', 'Name'),
            'key' => Yii::t('app', 'Key'),
            'entity_dependent' => Yii::t('app', 'Entity Dependent'),
            'content' => Yii::t('app', 'Content'),
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTemplate()
    {
        return $this->hasOne(Template::className(), ['id' => 'template_id'])->inverseOf('templateRegions');
    }
}
