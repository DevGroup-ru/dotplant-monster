<?php

namespace DotPlant\Monster\Universal;

use DevGroup\Frontend\Universal\ActionData;
use DevGroup\Frontend\Universal\UniversalAction;
use DotPlant\Monster\MonsterContent;
use yii;
use yii\helpers\ArrayHelper;

/**
 * Universal action MaterializedAttributes produces the resulting content based on materials inside model's attributes.
 *
 * @package DotPlant\Monster\Universal
 */
class MaterializedAttributes extends UniversalAction
{
    public $entities = [];
    //! @todo Add monster content cache options ability by entity+attributes

    /**
     * @param ActionData $actionData
     *
     * @return void
     */
    public function run(&$actionData)
    {
        $monsterContentConfigs = [];
        foreach ($this->entities as $definition) {
            if (!isset($definition['entity'], $definition['attributes'])) {
                continue;
            }
            $entity = $definition['entity'];
            $definition['attributes'] = (array) $definition['attributes'];
            /** @var yii\base\Model $model */
            $models = ArrayHelper::getValue($actionData->entities, $entity, []);
            $model = is_object($models) ? $models : reset($models);

            if ($model === null) {
                Yii::info("Entities list: " . yii\helpers\VarDumper::dumpAsString($actionData->entities));
                Yii::info((array) ArrayHelper::getValue($actionData->entities, $entity, []));
                Yii::info("Searching for " . $entity);
                throw new \RuntimeException("Model is empty");
            }
            foreach ($definition['attributes'] as $index => $attribute) {
                $materials = $model->$attribute;
                if (is_array($materials) || is_object($materials)) {
                    $monsterContentConfigs[] = [
                        'materials' => $materials,
                        'uniqueContentId' => $model::className() . ":$index:" . $model->id,
                    ];
                } else {
                    Yii::warning("Model attribute $attribute of entity $entity is not array or object");
                }
            }
        }
        $content = '';
        foreach ($monsterContentConfigs as $index => $config) {
            $content .=
                "<!-- MonsterContent::$index -->\n" .
                MonsterContent::widget($config) .
                "\n\n";
        }
        $actionData->content = $content;
    }
}
