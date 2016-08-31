<?php

namespace DotPlant\Monster\assets;

use devgroup\JsTreeWidget\widgets\JsTreeAssetBundle;

class JsTreeDark extends JsTreeAssetBundle
{
    public $sourcePath = null;
    public $js = [
        'https://cdnjs.cloudflare.com/ajax/libs/jstree/3.3.2/jstree.min.js',
    ];
    /**
     * @inheritdoc
     */
    public $css = [
        'https://cdnjs.cloudflare.com/ajax/libs/jstree/3.3.2/themes/default-dark/style.min.css',
    ];
}
