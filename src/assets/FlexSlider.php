<?php

namespace DotPlant\Monster\assets;

use yii;

/**
 * Asset bundle for FlexSlider
 * An awesome, fully responsive jQuery slider toolkit.
 *
 * @package DotPlant\Monster\assets
 */
class FlexSlider extends HeadBundle
{
    public $sourcePath = null;
    public $js = [
        '//cdnjs.cloudflare.com/ajax/libs/flexslider/2.6.1/jquery.flexslider.min.js',
    ];
    public $css = [
        '//cdnjs.cloudflare.com/ajax/libs/flexslider/2.6.1/flexslider.min.css',
    ];
    public $depends = [
        '\yii\web\JqueryAsset'
    ];
}
