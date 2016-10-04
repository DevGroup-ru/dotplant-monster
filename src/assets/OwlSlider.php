<?php

namespace DotPlant\Monster\assets;

use yii;

/**
 * Asset bundle for Owlslider
 * An awesome, fully responsive jQuery slider toolkit.
 *
 * @package DotPlant\Monster\assets
 */
class Owlslider extends HeadBundle
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
