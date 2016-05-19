<?php

namespace DotPlant\Monster;

trait DescribableBundleEntity
{
    /** @var string Name of entity */
    public $name;

    /** @var array Array of CSS files relative to baseDirectory() */
    public $css = [];

    /** @var array Array of JS files relative to baseDirectory() */
    public $js = [];

    /** @var bool If entity should be hidden in listings and visual editor */
    public $hidden = false;
}
