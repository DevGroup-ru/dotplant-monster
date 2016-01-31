<?php

namespace DotPlant\Monster;

use Yii;
use yii\base\Application;
use yii\base\BootstrapInterface;

class ExtensionBootstrap implements BootstrapInterface
{

    /**
     * Bootstrap method to be called during application bootstrap stage.
     *
     * @param Application $app the application currently running
     */
    public function bootstrap($app)
    {
        $app->setComponents([
            'bemRepository' => [
                'class' => BemRepository::className(),
            ]
        ]);
    }
}