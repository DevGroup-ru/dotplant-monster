<?php

namespace DotPlant\Monster\bem;

use Yii;
use yii\helpers\ArrayHelper;
use yii\helpers\Json;

class BemTemplatable extends BemEntity
{
    /** @var MonsterGroup[] Array of references to groups that this bem entity exists in */
    public $groups = [];

    /**
     * @var string Path to base bemjson file.
     *             Is set in SCSS comment with `@bemjson path/to/bemjson.json` directive.
     *             For `BaseMaterial` widget bemjson path is relative to
     *             `@vendor/devgroup/yii2-frontend-utils/src/monster/materials/`.
     */
    public $bemJson = '';

    /**
     * @var array BEM Json tree
     */
    public $bemJsonTree = [];

    /** @inheritdoc */
    public function unpackAdditionalAttributes(&$data, $mergeInstructions)
    {
        parent::unpackAdditionalAttributes($data, $mergeInstructions);
        if (isset($this->bemJson)) {
            $filename = $this->workingDirectory . $this->bemJson;
            $this->bemJsonTree = Json::decode(file_get_contents($filename));
        }
    }

    /** @inheritdoc */
    public function jsonSerialize()
    {
        return ArrayHelper::merge(
            parent::jsonSerialize(),
            [
                'bemJson' => $this->bemJson,
//                'bemJsonTree' => $this->bemJsonTree,
            ]
        );
    }

    /** @inheritdoc */
    public function __sleep()
    {
        if (!empty($this->bemJson)) {
            $this->bemJson = $this->workingDirectory . $this->bemJson;
        }
        return ArrayHelper::merge(
            parent::__sleep(),
            [
                'bemJson',
            ]
        );
    }

    /**
     * Returns BEMJson tree, loads it from json file if not loaded.
     * @return array
     * @throws \Exception
     */
    public function tree()
    {
        if (count($this->bemJsonTree) > 0) {
            return $this->bemJsonTree;
        }
        if (empty($this->bemJson) === true) {
            return [];
        }
        if (is_readable($this->bemJson) === false) {
            throw new \Exception("BemJson file {$this->bemJson} is not readable.");
        }
        $this->bemJsonTree = Json::decode(
            file_get_contents($this->bemJson)
        );
        return $this->bemJsonTree;
    }

}
