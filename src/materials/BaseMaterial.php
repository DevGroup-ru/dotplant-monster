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
        /**
         * @todo Тудушечка
         * В репозиторий впилить 2 новые переменные:
         * - $globalBlockCustomization - глобальная поблоковая кастомизация
         * - $contextualBlockCustomization - контекстуальная дополнительная кастомизация
         * Также надо добавить функцию для кеш-тегов templateCacheTags(). По-умолчанию - [].
         *
         * Итоговый блок будет брать кастомизацию из глобальной и подмешивать туда локальную, если определена.
         * Ключ кеширования шаблона по-умолчанию идёт как BaseMaterial.bemTemplate::$this->block.
         *
         * Если для этого блока есть хотя бы какая-нибудь глобальная кастомизация:
         * - к кеш тегам добавляется название текущего блока(для сброса кеша, когда поменяли глоб кастом)
         * - к кеш-ключу добавляется ::Custom::$this->uniqueContextualId
         *
         * !!! uniqueContextualId - комбинированный ID, описывающий сущность (модель)
         *     и место текущего блока в её представлении
         *
         * Кеш теги из templateCacheTags() также используются, если весь вывод(а не только шаблон) кешируются.
         *
         */
        return $this->uniqueTemplateId;
    }
}
