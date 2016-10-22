<?php

namespace DotPlant\Monster\models;

use DotPlant\Monster\Universal\MonsterEntityTrait;
use yii;

class ServiceEntity extends yii\base\Model
{
    public $content = [];
    public $providers = [];
    public $template_id = 0;
    public $layout_id = 0;

    use MonsterEntityTrait;

    /**
     * @return string
     */
    public function uniqueContentIdPrefix()
    {
        return md5(Yii::$app->requestedRoute);
    }

    public function save($runValidation = true, $attrs = [])
    {
        return true;
    }
}
