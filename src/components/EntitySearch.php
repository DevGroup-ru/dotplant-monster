<?php

namespace DotPlant\Monster\components;

use DevGroup\DataStructure\propertyStorage\EAV;
use DevGroup\DataStructure\propertyStorage\StaticValues;
use DevGroup\DataStructure\search\base\AbstractSearch;
use yii\base\Module;
use yii\db\ActiveQuery;
use yii\helpers\ArrayHelper;

/**
 * Class EntitySearch
 * @package DotPlant\Monster\components
 */
class EntitySearch
{
    /**
     * @var string the model class name
     */
    protected $className;

    /**
     * @var array the properties list to search
     */
    protected $properties = [];

    /**
     * @var bool whether the query is updated
     */
    protected $isNewQuery = true;

    /**
     * @var bool the last result of executing `prepareQuery` method
     */
    protected $prepareResult;

    /**
     * @var int the limit models per page
     */
    protected $limit;

    /**
     * @var ActiveQuery the internal query
     */
    protected $query;

    /**
     * @var array the search component configurations
     */
    public $propertiesConfig = [
        'storage' => [
            EAV::class,
            StaticValues::class,
        ],
    ];

    /**
     * Prepare a query to executing
     * @return bool
     */
    protected function prepareQuery()
    {
        if ($this->isNewQuery === false) {
            return $this->prepareResult;
        }
        $this->prepareResult = true;
        if (empty($this->properties) === false && \Yii::$app->getModule('properties') instanceof Module) {
            /** @var AbstractSearch $search */
            $search = \Yii::$app->getModule('properties')->getSearch();
            $ids = $search->filterByProperties(
                $this->className,
                $this->propertiesConfig,
                $this->properties
            );
            if (empty($ids) === false) {
                // I know that this code is correct no for any model.
                // But yii2-data-structure-tools works with no-composite primary key only.
                $pk = call_user_func([$this->className, 'primaryKey']);
                if (count($pk) === 1) {
                    $this->query->andWhere([reset($pk) => $ids]);
                } else {
                    $this->prepareResult = false;
                }
            } else {
                $this->prepareResult = false;
            }
        }
        $this->isNewQuery = false;
        return $this->prepareResult;
    }

    /**
     * Create a new search instance
     * @param string $className the model class name
     * @param int $limit the limit of models per page
     * @throws \yii\base\Exception
     */
    public function __construct($className, $limit = 10)
    {
        if (class_exists($className) === false) {
            throw new \yii\base\Exception('Class not found');
        }
        $this->query = call_user_func([$className, 'find']);
        $this->className = $className;
        $this->limit = $limit;
    }

    /**
     * Add a new equal condition
     * @param array $params
     * @param bool $intersect
     * @return $this
     */
    public function whereAttributes($params = [], $intersect = true)
    {
        $this->isNewQuery = true;
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

    /**
     * Add a new condition by properties
     * @param array $params
     * @return $this
     */
    public function whereProperties($params = [])
    {
        $this->isNewQuery = true;
        $this->properties = ArrayHelper::merge($this->properties, $params);
        return $this;
    }

    /**
     * Add a new `like` condition
     * @param array $attributes
     * @param string $value
     * @param bool $intersect
     * @return $this
     */
    public function whereAttributesContain($attributes, $value, $intersect = false)
    {
        $this->isNewQuery = true;
        $condition = [$intersect === true ? 'and' : 'or'];
        foreach ($attributes as $attribute) {
            $condition[] = ['like', $attribute, $value];
        }
        $this->query->andWhere($condition);
        return $this;
    }

    /**
     * Get models count
     * @return int count of models
     */
    public function count()
    {
        if ($this->prepareQuery() === false) {
            return 0;
        }
        return (int) $this->query->count();
    }

    /**
     * Get all models
     * @param int $page the page number
     * @return \yii\db\ActiveRecord[]
     */
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
        $rows = $this->query->all();
        $this->query->limit(null);
        $this->query->offset(null);
        return $rows;
    }
}
