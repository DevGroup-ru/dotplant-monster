<?php

namespace DotPlant\Monster\models;

use DevGroup\AdminUtils\traits\FetchModels;
use yii\data\ActiveDataProvider;
use yii\db\ActiveQuery;

class TemplateSearch extends Template
{
    use FetchModels;
    /**
     * Finds models
     *
     * @param $params
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        /* @var $query ActiveQuery */

        $dataProvider = new ActiveDataProvider([
            'query' => $query = static::find(),
            'pagination' => [
                'pageSize' => 65535,
            ],
        ]);
        if (null != $this->is_layout) {
            $query->andWhere(['is_layout' => $this->is_layout]);
        }

        if (false === $this->load($params)) {
            return $dataProvider;
        }
        $query->andFilterWhere(['id' => $this->id]);
        $query->andFilterWhere(['is_deleted' => $this->is_deleted]);

        $query->andFilterWhere(['like', 'name', $this->name]);
        $query->andFilterWhere(['like', 'key', $this->key]);
        return $dataProvider;
    }
}
