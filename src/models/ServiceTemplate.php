<?php

namespace DotPlant\Monster\models;

use DevGroup\TagDependencyHelper\CacheableActiveRecord;
use DevGroup\TagDependencyHelper\LazyCache;
use DevGroup\TagDependencyHelper\TagDependencyTrait;
use DotPlant\Monster\traits\FindByKey;
use Yii;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "{{%service_template}}".
 * Service templates are used for rendering inside non-content actions like shopping cart or login screen.
 *
 * @property integer $id
 * @property string $name
 * @property string $key
 * @property integer $template_id
 * @property integer $layout_id
 */
class ServiceTemplate extends \yii\db\ActiveRecord
{
    use TagDependencyTrait;

    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'CacheableActiveRecord' => [
                'class' => CacheableActiveRecord::className(),
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%service_template}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['template_id', 'layout_id'], 'integer'],
            [['name'], 'string', 'max' => 255],
            [['key'], 'string', 'max' => 80],
            [['key'], 'required'],
            [['template_id'], 'exist', 'skipOnError' => true, 'targetClass' => Template::className(), 'targetAttribute' => ['template_id' => 'id']],
            [['layout_id'], 'exist', 'skipOnError' => true, 'targetClass' => Layout::className(), 'targetAttribute' => ['layout_id' => 'id']],
        ];
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
            'template_id' => Yii::t('app', 'Template ID'),
            'layout_id' => Yii::t('app', 'Layout ID'),
        ];
    }

    /**
     * @return \DotPlant\Monster\models\Template
     */
    public function getTemplate()
    {
        return $this->template_id > 0
            ? Template::findById($this->template_id)
            : null;
    }

    /**
     * @return \DotPlant\Monster\models\Layout
     */
    public function getLayout()
    {
        return $this->layout_id > 0
            ? Layout::findById($this->layout_id)
            : null;
    }

    /**
     * @param string $key
     * @param boolean $throwException
     *
     * @return ActiveRecord
     */
    public static function findByKey($key, $throwException = true)
    {
        /** @var LazyCache $cache */
        $cache = Yii::$app->cache;

        /** @var string|ActiveRecord $className */
        $className = static::class;

        /** @var ActiveRecord $model */
        $model = $cache->lazy(
            function () use ($key, $className) {
                return $className::find()
                    ->where(['key' => $key])
                    ->one();
            },
            $className . ":byKey:$key",
            86400,
            static::commonTag()
        );
        if ($model === null && $throwException === true) {
            throw new \RuntimeException("Model[$className] key: '$key' not found");
        }
        return $model;
    }
}
