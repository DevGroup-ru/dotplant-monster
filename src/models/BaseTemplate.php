<?php

namespace DotPlant\Monster\models;

use DevGroup\DataStructure\behaviors\PackedJsonAttributes;
use DevGroup\Entity\traits\EntityTrait;
use DevGroup\Entity\traits\SoftDeleteTrait;
use DevGroup\TagDependencyHelper\CacheableActiveRecord;
use DevGroup\TagDependencyHelper\LazyCache;
use DevGroup\TagDependencyHelper\TagDependencyTrait;
use DotPlant\Monster\Universal\MonsterProvidersTrait;
use yii;
use yii\db\ActiveRecord;

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
class BaseTemplate extends ActiveRecord
{
    use EntityTrait;
    use TagDependencyTrait;
    use MonsterProvidersTrait;
    use SoftDeleteTrait;

    public $templateRegionsOverride;

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
        return '{{%template}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['is_layout', 'is_deleted'], 'filter', 'filter' => 'boolval'],
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
     * @return \DotPlant\Monster\models\TemplateRegion[]
     */
    public function iterateTemplateRegions()
    {
        return $this->templateRegionsOverride !== null
            ? $this->templateRegionsOverride
            : $this->templateRegions;
    }

    /**
     * Table inheritance pattern here.
     * @inheritdoc
     */
    public static function instantiate($row)
    {
        if ($row['is_layout']) {
            return new Layout();
        }
        return new Template();
    }


    /**
     * @param string $key
     * @param boolean $throwException
     *
     * @return \DotPlant\Monster\models\Template
     */
    public static function findByKey($key, $throwException = true)
    {
        /** @var LazyCache $cache */
        $cache = Yii::$app->cache;
        /** @var string|yii\db\ActiveRecord $className */
        $className = static::class;
        /** @var Template $template */
        $template = $cache->lazy(
            function () use ($key, $className) {
                return $className::find()
                    ->where(['key' => $key])
                    ->with('templateRegions')
                    ->one();
            },
            "Template:byKey:$key",
            86400,
            static::commonTag()
        );
        if ($template === null && $throwException === true) {
            throw new \RuntimeException("Template key: '$key' not found");
        }
        return $template;
    }

    /**
     * @param integer $id
     * @param boolean $throwException
     *
     * @return \DotPlant\Monster\models\Template
     */
    public static function findById($id, $throwException = true)
    {
        /** @var LazyCache $cache */
        $cache = Yii::$app->cache;
        /** @var string|yii\db\ActiveRecord $className */
        $className = static::class;
        /** @var Template $template */
        $template = $cache->lazy(
            function () use ($id, $className) {
                return $className::find()
                    ->where(['id' => $id])
                    ->with('templateRegions')
                    ->one();
            },
            "Template:byId:$id",
            86400,
            static::commonTag()
        );
        if ($template === null && $throwException === true) {
            throw new \RuntimeException("Template ID: '$id' not found");
        }
        return $template;
    }
}
