<?php

namespace DotPlant\Monster;


interface EntityCollection
{
    /**
     * @return Entity[]
     */
    public function entityChildren();

    /**
     * @return string
     */
    public function additionalCachePostfix();

    /**
     * @return string[]
     */
    public function additionalCacheTags();
}
