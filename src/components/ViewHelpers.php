<?php

namespace DotPlant\Monster\components;

use yii\helpers\ArrayHelper;

class ViewHelpers
{
    public static function modsClass($bem, $mods)
    {
        $classes = [];
        $mods = ArrayHelper::getValue($mods, '__monster__mods__', []);
        $isIndexed = ArrayHelper::isIndexed($mods);
        foreach ($mods as $key => $value) {
            if ($value === true) {
                $classes[] = "{$bem}_$key";
            } elseif ($isIndexed) {
                $classes[] = "{$bem}_$value";
            } else {
                $classes[] = "{$bem}_{$key}_$value";
            }
        }
        return implode(' ', $classes);
    }
}
