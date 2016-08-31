<?php

namespace DotPlant\Monster\Universal;

trait MonsterProvidersTrait
{
    public function getEntityDataProviders()
    {
        /** @var \yii\base\Model $this */
        return $this->providers;
    }

    /**
     * @param array $providers
     */
    public function setEntityDataProviders($providers)
    {
        $this->providers = $providers;
    }

}
