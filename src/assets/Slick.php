<?php

namespace DotPlant\Monster\assets;

use yii;

/**
 * Asset bundle for Slick slider
 *
 * @package DotPlant\Monster\assets
 */
class Slick extends HeadBundle
{
    public $sourcePath = null;
    public $js = [
        '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js',
    ];
    public $css = [
        '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css',
    ];
    public $depends = [
        'yii\web\JqueryAsset'
    ];
}
