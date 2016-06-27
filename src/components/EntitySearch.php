<?php

namespace DotPlant\Monster\components;

use DevGroup\DataStructure\propertyStorage\EAV;
use DevGroup\DataStructure\propertyStorage\StaticValues;
use DevGroup\DataStructure\search\base\AbstractSearch;
use yii\base\Module;
use yii\db\ActiveQuery;

class EntitySearch
{
    /**
     * @var string
     */
    protected $className;

    /**
     * @var array
     */
    protected $properties;

    /**
     * @var int
     */
    protected $limit;

    /**
     * @var ActiveQuery
     */
    protected $query;

    public $propertiesConfig = [
        'storage' => [
            EAV::class,
            StaticValues::class,
        ],
    ];

    protected function prepareQuery()
    {
        if (empty($this->properties) === false && \Yii::$app->getModule('properties') instanceof Module) {
            /** @var AbstractSearch $search */
            $search = \Yii::$app->getModule('properties')->getSearch();
            $ids = $search->findInProperties(
                $this->className,
                $this->propertiesConfig,
                $this->properties
            );
            if (empty($ids) === true) {
                return false;
            }
            // I know that this code is correct no for any model.
            // But yii2-data-structure-tools works with no-composite primary key only.
            $pk = reset(call_user_func([$this->className, 'primaryKey']));
            $this->query->andWhere([$pk => $ids]);
        }
        return true;
    }

    public function __construct($className, $limit = 10)
    {
        if (class_exists($className) === false) {
            throw new \yii\base\Exception('Class not found');
        }
        $this->query = call_user_func([$className, 'find']);
        $this->className = $className;
        $this->limit = $limit;
    }

    public function whereAttributes($params = [], $intersect = true)
    {
        if ($intersect || count($params) < 2) {
            $this->query->andWhere($params);
        } else {
            $orCondition = ['or'];
            foreach ($params as $attributeName => $values) {
                $orCondition[] = [$attributeName => $values];
            }
            $this->query->andWhere($orCondition);
        }
        return $this;
    }

    public function whereProperties($params = [])
    {
        $this->properties = $params;
        return $this;
    }

    public function whereAttributesContain($attributes, $value, $intersect = false)
    {
        $condition = [$intersect === true ? 'and' : 'or'];
        foreach ($attributes as $attribute) {
            $condition[] = ['like', $attribute, $value];
        }
        $this->query->andWhere($condition);
        return $this;
    }

    public function count()
    {
        if ($this->prepareQuery() === false) {
            return 0;
        }
        return (int) $this->query->count();
    }

    public function all($page = 1)
    {
        if ($this->prepareQuery() === false) {
            return [];
        }
        $this->query->limit($this->limit);
        if ($page < 1) {
            $page = 1;
        }
        if ($page > 1) {
            $this->query->offset(($page - 1) * $this->limit);
        }
        return $this->query->all();
    }
}
