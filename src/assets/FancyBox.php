<?php

namespace DotPlant\Monster\assets;

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
        'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/helpers/jquery.fancybox-thumbs.js',
        'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/helpers/jquery.fancybox-media.js',
        'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/helpers/jquery.fancybox-buttons.js',
    ];
    public $css = [
        'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/helpers/jquery.fancybox-thumbs.css',
        'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/helpers/jquery.fancybox-buttons.css',
    ];
    public $depends = [
        'yii\web\JqueryAsset',
    ];
}
