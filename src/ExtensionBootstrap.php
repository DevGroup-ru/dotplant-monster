<?php

namespace DotPlant\Monster;

use yii;
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
        $app->on(yii\base\Application::EVENT_BEFORE_ACTION, function () use($app) {
            /** @var Repository $repository */
            $repository = $app->get('monsterRepository');
            $repository->autoloadAssets();
        });
    }
}
