<?php

namespace DotPlant\Monster;

use BEM\BH;
use DotPlant\Monster\Bundle\Material;
use yii;
use yii\base\Component;
use yii\helpers\Json;

class MonsterBhExpander extends Component
{
    use HasMonsterCache;
    public $expandedBemJsonLifetime = 5184000; // 60 days
    /** @var null|string|MonsterBh */
    public $monsterBh = null;

    /** @var BH */
    private $bh = null;
    
    /** @inheritdoc */
    public function init()
    {
        parent::init();
        if ($this->monsterBh === null) {
            $this->monsterBh = Yii::$app->get('monsterBh');
        } elseif (is_string($this->monsterBh)) {
            $this->monsterBh = Yii::$app->get($this->monsterBh);
        }
        if (is_object($this->monsterBh) === false) {
            throw new yii\base\InvalidConfigException("MonsterBh application component should be configured.");
        }
    }
    /**
     * @return \BEM\BH|mixed
     */
    public function bh()
    {
        if ($this->bh === null) {
            $this->bh = new BH();
            // configure expander the same way as base monster bh
            $this->monsterBh->configureBhBase($this->bh);
        }
        return $this->bh;
    }
    
    public function expandMaterial(Material $material)
    {
        $rawBemJson = $material->rawBemJson();

        /** @var Repository $repository */
        $repository = Yii::$app->get('monsterRepository');
        $expanderMatchersList = [];
        $bundle = $repository->bundle($material->fullPath);
        $group = $repository->group($material->fullPath);
        $this->bh();
        foreach ([$bundle, $group, $material] as $bundleEntity) {
            /** @var BundleEntity $bundleEntity */
            if ($bundleEntity->hasBhExpander) {
                $new = $this->monsterBh->loadMatchersFile(
                    $bundleEntity->getFsLocation() . 'bh.expander.php',
                    $this->bh
                );
                $expanderMatchersList = yii\helpers\ArrayHelper::merge($expanderMatchersList, $new);
            }
        }

        /** @var \BEM\Json $expandedJson */
        $expandedJson = $this->bh()->processBemJson($rawBemJson);

        // unload expanded
        $this->bh()->removeMatcherById($expanderMatchersList);

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
}
