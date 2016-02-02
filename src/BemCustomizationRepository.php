<?php

namespace DotPlant\Monster;

use Yii;
use yii\base\Component;
use yii\base\InvalidParamException;
use yii\caching\TagDependency;
use yii\helpers\Json;

class BemCustomizationRepository extends Component
{
    public $storagePath = '@runtime/bem-customization/';

    public static $identityMap = [];

    public function init()
    {
        parent::init();
        $this->storagePath = Yii::getAlias(rtrim($this->storagePath, '/') . '/');
        if (file_exists($this->storagePath) === false) {
            mkdir($this->storagePath);
        }
    }

    public function getCustomization($block)
    {
        if (isset(static::$identityMap[$block]) === false) {
            $this->validateBemSelector($block);
            $filename = $this->storagePath . $block . 'json';

            if (is_readable($filename) === false) {
                return [];
            }

            static::$identityMap[$block] = Json::decode(
                file_get_contents($filename)
            );
        }
        return static::$identityMap[$block];
    }

    public function setCustomization($block, $customization = [])
    {
        $this->validateBemSelector($block);

        static::$identityMap[$block] = $customization;

        $filename = $this->storagePath . $block . 'json';
        $result = file_put_contents($filename, Json::encode($customization)) !== false;
        if ($result === true) {
            TagDependency::invalidate(
                Yii::$app->cache,
                [
                    "GlobalCustomization:$block",
                ]
            );
        }
        return $result;
    }

    protected function validateBemSelector($block)
    {
        if (preg_match('#^[\w\d\-\_]+$#Ssu', $block) !== 1) {
            throw new InvalidParamException("'$block' must be a valid bemSelector");
        }
    }
}
