<?php

namespace DotPlant\Monster\assets;

use yii\web\View;

/**
 * Automatically make same-page links scroll smoothly
 * @see https://github.com/kswedberg/jquery-smooth-scroll
 *
 * @package DotPlant\Monster\assets
 */
class SmoothScroll extends HeadBundle
{
    public $js = [
        'https://cdnjs.cloudflare.com/ajax/libs/jquery-smooth-scroll/2.0.0/jquery.smooth-scroll.min.js',
    ];

    public $depends = [
        'yii\jui\JuiAsset',
    ];

    public function registerAssetFiles($view)
    {
        parent::registerAssetFiles($view);
        $js = <<<js
$.fn.smoothScroll.defaults.speed = 400;
js;
//        $view->registerJs($js, View::POS_END, 'js:smoothScroll');
    }
}
