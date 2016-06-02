<?php

namespace DotPlant\Monster\models;

use DevGroup\DataStructure\behaviors\PackedJsonAttributes;
use DevGroup\TagDependencyHelper\LazyCache;
use yii;

/**
 * This is the model class for table "{{%template}}".
 *
 * @property integer $id
 * @property string  $name
 * @property string  $key
 * @property boolean $is_layout
 * @property array   $providers
 *
 * @property TemplateContexts[] $templateContexts
 * @property TemplateRegion[] $templateRegions
 */
class Template extends \yii\db\ActiveRecord
{
    use \DevGroup\TagDependencyHelper\TagDependencyTrait;

    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'CacheableActiveRecord' => [
                'class' => \DevGroup\TagDependencyHelper\CacheableActiveRecord::className(),
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
        return '{{%template}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['is_layout'], 'filter', 'filter' => 'boolval'],
            [['name', 'key'], 'trim'],
            [['name'], 'required'],
            [['providers'], 'safe'],
            [['name'], 'string', 'max' => 255],
            [['key'], 'string', 'max' => 40],
        ];
    }

    public function beforeValidate()
    {
        if (empty($this->key)) {
            $this->key = uniqid('template-', true);
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
            'name' => Yii::t('app', 'Name'),
            'key' => Yii::t('app', 'Key'),
            'is_layout' => Yii::t('app', 'Is Layout'),
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTemplateContexts()
    {
        return $this->hasMany(TemplateContexts::className(), ['template_id' => 'id'])->inverseOf('template');
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTemplateRegions()
    {
        return $this
            ->hasMany(TemplateRegion::className(), ['template_id' => 'id'])
            ->orderBy(['sort_order' => SORT_ASC])
            ->inverseOf('template');
    }

    /**
     * @inheritdoc
     * @return TemplateQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new TemplateQuery(get_called_class());
    }

    /** @inheritdoc */
    public static function instantiate($row)
    {
        if ($row['is_layout']) {
            return new Layout();
        }
        return new self();
    }


    /**
     * @param string $key
     *
     * @return \DotPlant\Monster\models\Template
     */
    public static function findByKey($key)
    {
        /** @var LazyCache $cache */
        $cache = Yii::$app->cache;
        /** @var Template $template */
        $template = $cache->lazy(
            function () use ($key) {
                return static::find()
                    ->where(['key' => $key])
                    ->with('templateRegions')
                    ->one();
            },
            "Template:byKey:$key",
            86400,
            static::commonTag()
        );
        if ($template === null) {
            throw new \RuntimeException("Template $key not found");
        }
        return $template;
    }
}
