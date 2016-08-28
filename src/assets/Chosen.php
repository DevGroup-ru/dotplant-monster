<?php

namespace DotPlant\Monster\assets;

/**
 * Asset bundle for Chosen
 * Chosen is a JavaScript plugin that makes select boxes user-friendly.
 * It is currently available in both jQuery and Prototype flavors.
 *
 * @package DotPlant\Monster\assets
 */
class Chosen extends HeadBundle
{
    public $js = [
        'https://cdnjs.cloudflare.com/ajax/libs/chosen/1.5.1/chosen.jquery.min.js',
    ];
    public $css = [
        'https://cdnjs.cloudflare.com/ajax/libs/chosen/1.5.1/chosen.min.css',
    ];
    public $depends = [
        '\yii\web\JqueryAsset'
    ];
}
