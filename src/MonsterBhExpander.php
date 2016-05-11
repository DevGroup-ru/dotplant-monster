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

        /**
         * @todo Добавить поддержку дополнительных матчеров из бандла/группы/материала(*.bh.expander.php)
         *       Матчеры добавляются через новомодную функцию addMatcherList, а потом удаляются через removeMatcherById
         */

        /** @var \BEM\Json $expandedJson */
        $expandedJson = $this->bh()->processBemJson($rawBemJson);
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
