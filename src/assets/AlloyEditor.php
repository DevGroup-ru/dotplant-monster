<?php

namespace DotPlant\Monster\assets;

use yii\web\AssetBundle;

class AlloyEditor extends AssetBundle
{
    public $sourcePath = '@bower/alloyeditor';
    public $css = [
        'dist/alloy-editor/assets/alloy-editor-atlas-min.css',
    ];
    public $js = [
        'dist/alloy-editor/alloy-editor-all-min.js',
        '//cdnjs.cloudflare.com/ajax/libs/ckeditor/4.5.10/adapters/jquery.js',
    ];
    public $publishOptions = [
        'only' => [
            'dist/alloy-editor/',
        ]
    ];
}
