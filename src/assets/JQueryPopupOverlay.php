<?php

namespace DotPlant\Monster\assets;

use yii\web\View;

class JQueryPopupOverlay extends HeadBundle
{
    public $js = [
        'https://cdnjs.cloudflare.com/ajax/libs/jquery-popup-overlay/1.7.9/jquery.popupoverlay.min.js',
    ];

    public function registerAssetFiles($view)
    {
        parent::registerAssetFiles($view);
        $js = <<<js
$.fn.popup.defaults.transition = 'all 0.15s';
if (is.touchDevice()) {
  $.fn.popup.defaults.scrolllock = true;  
}
js;
        $view->registerJs($js, View::POS_BEGIN, __CLASS__ . ':init');
    }
}
