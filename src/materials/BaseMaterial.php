<?php

namespace DotPlant\Monster\materials;

use DotPlant\Monster\BemRepository;
use DotPlant\Monster\MonsterBlockWidget;
use Yii;
use yii\base\InvalidConfigException;

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
        /** @var BemRepository $repository */
        $repository = Yii::$app->get('bemRepository');
        if (!isset($repository->materials[$this->block])) {
            throw new InvalidConfigException("Block with name {$this->block} does not exist.");
        }
        $this->bemjson = $repository->materials[$this->block]->tree();
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
        return $this->uniqueTemplateId;
    }
}
