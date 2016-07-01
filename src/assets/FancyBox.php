<?php

namespace DotPlant\Monster\assets;

use yii;

/**
 * Asset bundle for FancyBox
 * fancyBox is a tool that offers a nice and elegant way to add zooming functionality for images,
 * html content and multi-media on your webpages.
 * It is built at the top of the popular JavaScript framework jQuery
 * and is both easy to implement and a snap to customize.
 *
 * @package DotPlant\Monster\assets
 */
class FancyBox extends HeadBundle
{
    public $sourcePath = null;
    public $js = [
        '//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js',
        '//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/helpers/jquery.fancybox-thumbs.js',
        '//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/helpers/jquery.fancybox-media.js',
        '//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/helpers/jquery.fancybox-buttons.js',
    ];
    public $css = [
        '//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css',
        '//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/helpers/jquery.fancybox-thumbs.css',
        '//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/helpers/jquery.fancybox-buttons.css',
    ];
    public $depends = [
        '\yii\web\JqueryAsset',
    ];
}
