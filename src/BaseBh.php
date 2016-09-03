<?php

namespace DotPlant\Monster;

use BEM\BH;
use BEM\Context;
use BEM\Matcher;
use DotPlant\Monster\Bundle\Material;
use yii;
use yii\base\Component;

abstract class BaseBh extends Component
{
    use HasMonsterCache;
    /** @var BH */
    private $bh;

    public $modsDelimiter = '_';

    public $formatHtml = false;

    public $repositoryComponent = 'monsterRepository';

    /**
     * @return \BEM\BH|mixed
     */
    public function bh()
    {
        if ($this->bh === null) {
            $this->bh = new BH();
            $this->configureBhBase();
            $this->initCoreMatchers();
        }
        return $this->bh;
    }

    abstract public function initCoreMatchers();

    /**
     * @param BH $bh
     */
    public function configureBhBase()
    {
        $this->bh->setOptions([
            'modsDelimiter' => $this->modsDelimiter,
            'indent' => $this->formatHtml,
            'jsAttrScheme' => false,
            'jsAttrName' => 'data-bem',
            'jsCls' => 'i-bem',
        ]);
    }

    /**
     * @param string $fileName
     *
     * @return array
     */
    public function loadMatchersFile($fileName)
    {
        return $this->bh->addMatcherList(include($fileName));
    }

    /**
     * @return Repository
     * @throws \yii\base\InvalidConfigException
     */
    public function repository()
    {
        return Yii::$app->get($this->repositoryComponent);
    }

    /**
     * @param \DotPlant\Monster\Bundle\Material $material
     * @param bool                              $isExpander
     *
     * @return array Array of mathers IDs
     */
    public function applyGlobalCustomizations(Material $material, $isExpander = false)
    {
        $newMatchers = [];
        $bundle = $this->repository()->bundle($material->fullPath);
        $group = $this->repository()->group($material->fullPath);
        // ensure bh is initialized
        $this->bh();

        foreach ([$bundle, $group, $material] as $bundleEntity) {
            /** @var BundleEntity $bundleEntity */
            $new = [];
            if ($isExpander === false && $bundleEntity->hasBh) {
                $new = $this->loadMatchersFile(
                    $bundleEntity->getFsLocation() . 'bh.php'
                );
            } elseif ($isExpander && $bundleEntity->hasBhExpander) {
                $new = $this->loadMatchersFile(
                    $bundleEntity->getFsLocation() . 'bh.expander.php'
                );
            }
            if (count($new) > 0) {
                $newMatchers = yii\helpers\ArrayHelper::merge($newMatchers, $new);
            }
        }

        if ($material->hasJs && $isExpander) {
            $mJs = new Matcher(
                $material->id,
                function(Context $ctx) {
                    $ctx->cls($ctx->cls() . ' m-js', true);
                }
            );
            $newMatchers['m-js'] = $this->bh()->matcher($mJs);
        }

        return $newMatchers;
    }
}
