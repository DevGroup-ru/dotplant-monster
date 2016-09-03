<?php

namespace DotPlant\Monster\assets;

class BemComponents extends HeadBundle
{
    public $css = [
        'https://yastatic.net/bem-components/latest/desktop/bem-components.css',
//        'https://yastatic.net/bem-components/3.0.0/desktop/bem-components.css',
    ];

    public $js = [
        'https://yastatic.net/bem-components/latest/desktop/bem-components.js+bemhtml.js',
//        'https://yastatic.net/bem-components/3.0.0/desktop/bem-components.js+bemhtml.js',
    ];

    public $depends = [
        'yii\web\JqueryAsset',
    ];
}
