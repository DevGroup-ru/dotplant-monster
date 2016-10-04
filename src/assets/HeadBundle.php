<?php

namespace DotPlant\Monster\assets;

use yii;
use yii\web\View;

class HeadBundle extends yii\web\AssetBundle
{
    public $jsOptions = [
        'position' => View::POS_HEAD,
    ];
}
