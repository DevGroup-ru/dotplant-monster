<?php

namespace DotPlant\Monster\Tests;

use DotPlant\Monster\Repository;
use yii;

class ExtendedRepository extends Repository
{
    public $bundlesReloaded = false;
    public $coreBundlesLocation = '@app/../src/base-bundle/';
    
    public function reloadBundles()
    {
        parent::reloadBundles();
        $this->bundlesReloaded = true;
    }
}
