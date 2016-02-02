<?php

namespace DotPlant\Monster\materials;

use DevGroup\TagDependencyHelper\TagDependencyTrait;
use DotPlant\Monster\BemCustomizationRepository;
use DotPlant\Monster\BemRepository;
use DotPlant\Monster\MonsterBlockWidget;
use Yii;
use yii\base\InvalidConfigException;
use yii\db\ActiveRecord;
use yii\helpers\ArrayHelper;

class BaseMaterial extends MonsterBlockWidget
{
    public $params = [];

    public $block = '';

    public $uniqueTemplateId = '';

    /** @inheritdoc */
    public function init()
    {
        parent::init();
        if (empty($this->block)) {
            throw new InvalidConfigException('Block should be set in BaseMaterial widget call');
        }
    }

    public function uncachedRun() {
        /** @var BemRepository $repository */
        $repository = Yii::$app->get('bemRepository');
        if (!isset($repository->materials[$this->block])) {
            throw new InvalidConfigException("Block with name {$this->block} does not exist.");
        }
        $this->bemJson = $repository->materials[$this->block]->tree();

        /** @var BemCustomizationRepository $customizationRepository */
        $customizationRepository = Yii::$app->get('bemRepository')->customization();
        $globalBemCustomization = $customizationRepository->getCustomization($this->block);
        $this->bemCustomization = ArrayHelper::merge($globalBemCustomization, $this->bemCustomization);
    }

    /**
     * Actual widget rendering function you should implement
     *
     * @return string
     */
    public function produceParams()
    {
        $params = $this->params;
        $params['__CLASS__'] = $this->className();
        return $params;
    }

    public function templateCacheKey()
    {
        return 'MaterialTemplate:' . $this->uniqueTemplateId;
    }

    protected function generateCacheKey()
    {
        return 'MaterialCache:' . $this->uniqueTemplateId;
    }

    /**
     * This will look into all params of this material for ActiveRecords that has TagDependencyTrait
     * @return array Cache tags array
     */
    public function generateCacheTags()
    {
        $tags = parent::generateCacheTags();
        foreach ($this->params as $param) {
            if ($param instanceof ActiveRecord) {
                if ($param->hasMethod('objectTag')) {
                    /** @var ActiveRecord|TagDependencyTrait $param */
                    $tags[] = $param->objectTag();
                }
            }
        }
        return $tags;
    }
}
