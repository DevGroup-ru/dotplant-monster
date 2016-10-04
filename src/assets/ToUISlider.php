<?php

namespace DotPlant\Monster\assets;

use yii;

/**
 * Asset bundle for ToUISlider
 *
 * @package DotPlant\Monster\assets
 */
class ToUISlider extends HeadBundle
{
    public $sourcePath = null;
    public $js = [
        'https://cdnjs.cloudflare.com/ajax/libs/jQuery-ui-Slider-Pips/1.11.3/jquery-ui-slider-pips.min.js',
    ];
    public $css = [
        'https://cdnjs.cloudflare.com/ajax/libs/jQuery-ui-Slider-Pips/1.11.3/jquery-ui-slider-pips.min.css',
    ];
    public $depends = [
        'yii\jui\JuiAsset',
    ];
}
