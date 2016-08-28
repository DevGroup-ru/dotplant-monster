<?php

namespace DotPlant\Monster\assets;

/**
 * Asset bundle for jqueryui-touch-punch
 * A small hack that enables the use of touch events on sites using the jQuery UI user interface library.
 *
 * @package DotPlant\Monster\assets
 */
class TouchPunch extends HeadBundle
{
    public $js = [
        'https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js',
    ];
    public $depends = [
        'yii\jui\JuiAsset',
    ];
}
