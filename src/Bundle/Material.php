<?php

namespace DotPlant\Monster\Bundle;

use DotPlant\Monster\BundleEntity;
use yii;
use yii\helpers\Json;

class Material extends BundleEntity
{
    /** @var string bemJson filename */
    public $bemJson = 'bem.json';

    /** @var string Class name for widget - must be extended from BaseMaterialize or Materialize */
    public $widget = 'DotPlant\Monster\Materialize';

    /**
     * @param string $path
     *
     * @return BundleEntity
     */
    public function newChild($path)
    {
        throw new \BadFunctionCallException;
    }

    /**
     * @param string $parentPath
     * @return void
     */
    public function process($parentPath = '')
    {
        $this->loadManifest();
        $this->fullPath = $parentPath . '.' . $this->id;
    }

    public function __sleep()
    {
        return yii\helpers\ArrayHelper::merge(
            parent::__sleep(),
            [
                'bemJson',
            ]
        );
    }

    public function loadManifest()
    {
        parent::loadManifest();
        if (is_string($this->bemJson) === false || $this->bemJson === '') {
            $this->bemJson = 'bem.json';
        }
    }

    /**
     * @return string Full absolute path to raw bemJson filename(non-expanded).
     */
    public function rawBemJsonFilename()
    {
        return $this->getFsLocation() . $this->bemJson;
    }

    /**
     * @return array|object
     */
    public function rawBemJson()
    {
        $rawBemJsonFilename = $this->rawBemJsonFilename();
        if (is_readable($rawBemJsonFilename) === false) {
            throw new \RuntimeException("Raw bemJson file is not accessible for material: {$this->fullPath}");
        }
        return Json::decode(file_get_contents($rawBemJsonFilename));
    }

}
