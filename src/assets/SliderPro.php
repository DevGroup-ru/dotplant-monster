<?php

namespace DotPlant\Monster\assets;

use yii;

/**
 * Asset bundle for SliderPro
 *
 * @package DotPlant\Monster\assets
 */
class SliderPro extends HeadBundle
{
    public $sourcePath = null;
    public $js = [
        '//cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/js/jquery.sliderPro.js',
    ];
    public $css = [
        '//cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/slider-pro.min.css',
    ];
    public $depends = [
        'yii\web\JqueryAsset'
    ];
}
