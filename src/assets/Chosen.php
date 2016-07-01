<?php

namespace DotPlant\Monster\assets;

use yii;

/**
 * Asset bundle for Chosen
 * Chosen is a JavaScript plugin that makes select boxes user-friendly.
 * It is currently available in both jQuery and Prototype flavors.
 *
 * @package DotPlant\Monster\assets
 */
class Chosen extends HeadBundle
{
    public $sourcePath = null;
    public $js = [
        '//cdnjs.cloudflare.com/ajax/libs/chosen/1.5.1/chosen.jquery.min.js',
    ];
    public $css = [
        '//cdnjs.cloudflare.com/ajax/libs/chosen/1.5.1/chosen.min.css',
    ];
    public $depends = [
        '\yii\web\JqueryAsset'
    ];
}
