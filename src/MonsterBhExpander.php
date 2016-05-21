<?php

namespace DotPlant\Monster;

use DotPlant\Monster\Bundle\Material;
use yii;

class MonsterBhExpander extends BaseBh
{

    public $expandedBemJsonLifetime = 5184000; // 60 days
    
    public function expandMaterial(Material $material)
    {
        $rawBemJson = $material->rawBemJson();
        
        $newMatchers = $this->applyGlobalCustomizations($material, true);

        /** @var \BEM\Json $expandedJson */
        $expandedJson = $this->bh()->processBemJson($rawBemJson);

        // unload expanded
        $this->bh()->removeMatcherById($newMatchers);

        $this->cache()->set(
            $this->cacheKey($material),
            $expandedJson,
            $this->expandedBemJsonLifetime
        );
        return $expandedJson;
    }
    
    public function cacheKey(Material $material)
    {
        return 'ExpandedBemJson:' . $material->fullPath;
    }


    public function initCoreMatchers()
    {
//        $this->loadMatchersFile(__DIR__ . '/base-bundle/core.bh.expander.php');
    }
}
