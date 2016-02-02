<?php

namespace DotPlant\Monster;

use DotPlant\Monster\bem\BemBlock;
use DotPlant\Monster\bem\MonsterGroup;
use DotPlant\Monster\bem\MonsterVariable;
use Yii;
use yii\base\Component;
use yii\helpers\ArrayHelper;

class BemRepository extends Component
{
    /**
     * @var string Cache path for BEM repository
     */
    public $repositoryCachePath = '@runtime/';

    public $monsterPath = '@app/assets/frontend-monster/';

    public $monsterStylesPath = 'src/assets/toolkit/styles/';

    public $monsterEntryFile = 'toolkit.scss';

    public $customMaterialsPath = '@app/web/theme/assets-src/styles/';
    public $customMaterialsEntryFile = 'theme.scss';

    public $customizationStoragePath = '@app/monster-custom/';

    const CACHE_VARIABLES = 'monster-vars.ser';
    const CACHE_GROUPS = 'monster-groups.ser';
    const CACHE_MATERIALS = 'monster-materials.ser';
    const CACHE_GROUPS_TO_BLOCKS = 'monster-group2blocks.ser';

    /** @var BemBlock[] */
    public $materials = [];

    /** @var array Array of groups names => block names available for content */
    public $groups = [];

    public $annotatorConfig = [
        'class' => 'DotPlant\Monster\bem\Annotator',
    ];

    public $customizationConfig = [
        'class' => 'DotPlant\Monster\BemCustomizationRepository',
    ];

    /** @var \DotPlant\Monster\bem\Annotator Annotator instance */
    private $annotator = null;

    /** @var BemCustomizationRepository Customization repository instance */
    private $customization = null;

    /**
     * Initializes BEM Repository component.
     * Loads serialized monster blocks, groups and variables.
     * Annotates scss and produces serialized cache files if not available.
     */
    public function init()
    {
        parent::init();

        $this->repositoryCachePath = Yii::getAlias($this->repositoryCachePath);

        if ($this->allCacheFilesExist() === false) {
            // this is cold start
            // we must annotate
            Yii::beginProfile('Annotate monster');
            $this->annotateMonster();
            Yii::endProfile('Annotate monster');
        } else {
            Yii::beginProfile('Load monster blocks, variables and groups');
            MonsterGroup::$globalIdentityMap = unserialize(
                file_get_contents(
                    $this->repositoryCachePath . self::CACHE_GROUPS
                )
            );
            MonsterVariable::$globalIdentityMap = unserialize(
                file_get_contents(
                    $this->repositoryCachePath . self::CACHE_VARIABLES
                )
            );
            $this->materials = unserialize(
                file_get_contents(
                    $this->repositoryCachePath . self::CACHE_MATERIALS
                )
            );
            $this->groups = unserialize(
                file_get_contents(
                    $this->repositoryCachePath . static::CACHE_GROUPS_TO_BLOCKS
                )
            );
            Yii::endProfile('Load monster blocks, variables and groups');
        }

    }

    public function annotateMonster()
    {
        $workingDirectory = Yii::getAlias($this->monsterPath  . $this->monsterStylesPath);
        Yii::beginProfile('Annotate SCSS');
        $this->materials = $this->annotator()->annotate($this->monsterEntryFile, $workingDirectory);

        $customPath = Yii::getAlias($this->customMaterialsPath);

        if (file_exists($customPath . $this->customMaterialsEntryFile)) {
            $custom = $this->annotator()->annotate(
                $this->customMaterialsEntryFile,
                $customPath
            );
            foreach ($custom as $blockName => $block) {
                $this->materials[$blockName] = $block;
            }
        }

        Yii::endProfile('Annotate SCSS');

        Yii::beginProfile('Serialize blocks');
        file_put_contents(
            $this->repositoryCachePath . static::CACHE_MATERIALS,
            serialize($this->materials)
        );
        Yii::endProfile('Serialize blocks');
        Yii::beginProfile('Serialize groups');
        file_put_contents(
            $this->repositoryCachePath . static::CACHE_GROUPS,
            serialize(MonsterGroup::$globalIdentityMap)
        );
        Yii::endProfile('Serialize groups');
        Yii::beginProfile('Serialize variables');
        file_put_contents(
            $this->repositoryCachePath . static::CACHE_VARIABLES,
            serialize(MonsterVariable::$globalIdentityMap)
        );
        Yii::endProfile('Serialize variables');

        // generate cache for groups to blocks
        $this->groups = [];
        foreach ($this->materials as $block) {
            if (empty($block->bemJson) === false) {
                foreach ($block->groups as $instance) {
                    $groupName = $instance->name;
                    if (isset($this->groups[$groupName]) === false) {
                        $this->groups[$groupName] = [];
                    }
                    $this->groups[$groupName][] = $block->bemSelector;
                }
            }
        }
        file_put_contents(
            $this->repositoryCachePath . static::CACHE_GROUPS_TO_BLOCKS,
            serialize($this->groups)
        );
    }

    /**
     * @return \DotPlant\Monster\BemCustomizationRepository
     * @throws \yii\base\InvalidConfigException
     */
    public function customization()
    {
        if ($this->customization === null) {
            $this->customization = Yii::createObject($this->customizationConfig);
        }
        return $this->customization;
    }

    /**
     * @return \DotPlant\Monster\bem\Annotator
     * @throws \yii\base\InvalidConfigException
     */
    public function annotator()
    {
        if ($this->annotator === null) {
            $this->annotator = Yii::createObject($this->annotatorConfig);
        }
        return $this->annotator;
    }

    /**
     * @return bool
     */
    private function allCacheFilesExist()
    {
        return
            file_exists($this->repositoryCachePath . self::CACHE_VARIABLES) &&
            file_exists($this->repositoryCachePath . self::CACHE_GROUPS) &&
            file_exists($this->repositoryCachePath . self::CACHE_MATERIALS) &&
            file_exists($this->repositoryCachePath . static::CACHE_GROUPS_TO_BLOCKS);
    }
}
