<?php

namespace DotPlant\Monster\assets;

use yii;

/**
 * Asset bundle for bootstrap modal
 *
 * @package DotPlant\Monster\assets
 */
class Modal extends HeadBundle
{
    public $sourcePath = null;
    public $js = [
        '//cdnjs.cloudflare.com/ajax/libs/bootstrap-modal/2.2.6/js/bootstrap-modal.min.js',
    ];
    public $css = [
        '//cdnjs.cloudflare.com/ajax/libs/bootstrap-modal/2.2.6/css/bootstrap-modal.min.css',
    ];
    public $depends = [
        'yii\web\JqueryAsset'
    ];
}
