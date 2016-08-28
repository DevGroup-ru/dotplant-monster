<?php

namespace DotPlant\Monster\assets;

class AlloyEditor extends HeadBundle
{
    public $sourcePath = '@bower/alloyeditor';
    public $css = [
        'dist/alloy-editor/assets/alloy-editor-atlas-min.css',
    ];
    public $js = [
        'dist/alloy-editor/alloy-editor-all-min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/ckeditor/4.5.10/adapters/jquery.js',
    ];
    public $publishOptions = [
        'only' => [
            'dist/alloy-editor/',
        ]
    ];
}
