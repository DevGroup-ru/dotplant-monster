<?php

namespace DotPlant\Monster\models;

use DevGroup\DataStructure\behaviors\PackedJsonAttributes;
use DevGroup\Entity\traits\EntityTrait;
use DevGroup\Entity\traits\SoftDeleteTrait;
use DevGroup\TagDependencyHelper\LazyCache;
use DevGroup\TagDependencyHelper\TagDependencyTrait;
use DotPlant\Monster\Universal\MonsterProvidersTrait;
use yii;


class Template extends BaseTemplate
{
    /**
     * @inheritdoc
     * @return TemplateQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new TemplateQuery(get_called_class());
    }

}
