<?php

namespace DotPlant\Monster\assets;

/**
 * Asset bundle for OwlSlider
 * An awesome, fully responsive jQuery slider toolkit.
 *
 * @package DotPlant\Monster\assets
 */
class OwlSlider extends HeadBundle
{
    public $sourcePath = null;
    public $js = [
        'https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js',
    ];
    public $css = [
        'https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.css',
        'https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.css',
    ];
    public $depends = [
        'yii\web\JqueryAsset'
    ];
}
