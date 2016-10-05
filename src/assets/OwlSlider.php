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
        'http://www.owlgraphic.com/owlcarousel/owl-carousel/owl.carousel.min.js',
    ];
    public $css = [
        'http://www.owlgraphic.com/owlcarousel/owl-carousel/owl.carousel.css',
        'http://www.owlgraphic.com/owlcarousel/owl-carousel/owl.theme.css',
    ];
    public $depends = [
        'yii\web\JqueryAsset'
    ];
}
