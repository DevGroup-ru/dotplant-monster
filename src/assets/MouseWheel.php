<?php

namespace DotPlant\Monster\assets;

use yii;

/**
 * Asset bundle for jquery-mousewheel
 * A jQuery plugin that adds cross-browser mouse wheel support.
 *
 * @package DotPlant\Monster\assets
 */
class MouseWheel extends HeadBundle
{
    public $sourcePath = null;
    public $js = [
        '//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js',
    ];
    public $depends = [
        '\yii\web\JqueryAsset'
    ];
}
