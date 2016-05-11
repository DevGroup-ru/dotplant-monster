<?php

namespace DotPlant\Monster;

use yii;
use yii\caching\FileCache;

class Cache extends FileCache
{
    /** @inheritdoc */
    public $cachePath = '@app/monster/cache';
    /** @inheritdoc */
    public $directoryLevel = 2;
}
