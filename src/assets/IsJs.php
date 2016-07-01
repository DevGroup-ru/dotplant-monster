<?php

namespace DotPlant\Monster\assets;

use yii;

/**
 * Asset bundle for is_js - micro check library
 *
 * @package DotPlant\Monster\assets
 */
class IsJs extends HeadBundle
{
    public $sourcePath = null;
    public $js = [
        '//cdnjs.cloudflare.com/ajax/libs/is_js/0.8.0/is.min.js',
    ];
}
