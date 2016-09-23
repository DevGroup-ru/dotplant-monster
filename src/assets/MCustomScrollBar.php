<?php

namespace DotPlant\Monster\assets;

use yii;

/**
 * Asset bundle for malihu-custom-scrollbar-plugin
 * Highly customizable custom scrollbar jQuery plugin, featuring vertical/horizontal scrollbars, scrolling momentum,
 * mouse-wheel, keyboard and touch support user defined callbacks etc.
 *
 * @package DotPlant\Monster\assets
 */
class MCustomScrollBar extends HeadBundle
{
    public $sourcePath = null;
    public $js = [
        '//cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.4/jquery.mCustomScrollbar.min.js',
    ];
    public $css = [
        '//cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.4/jquery.mCustomScrollbar.min.css',
    ];
    public $depends = [
        'DotPlant\Monster\assets\MouseWheel',
    ];
}
