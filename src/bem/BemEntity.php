<?php

namespace DotPlant\Monster\bem;

use Yii;
use yii\base\Object;
use yii\helpers\ArrayHelper;

/**
 * Class BemEntity is a base class for representing SCSS BEM entities(block, element, modifier)
 *
 * @package DotPlant\Monster\bem
 */
class BemEntity extends BemDescribable
{
    /**
     * @var string Name of entity(block name, element name, modifier name).
     *             Filled automatically by annotator(parses `@include block(bem-block-name-here)` expressions).
     */
    public $name = '';

    /**
     * @var string Full BEM name of entity(ie. block__element--modifier)
     *             Filled automatically by annotator.
     */
    public $bemSelector = '';

    /** @var string BEM Selector of entity parent. Must be empty for blocks. */
    public $parentBemSelector = '';

    /** @var string Inner SCSS code of this entity - stored for debug only */
    public $inner = '';

    /** @var string SCSS definition of this entity */
    public $definition = '';

    /**
     * @var string Inner SCSS code of this entity without nested entities.
     *             For example: bem block code without it's elements definitions.
     */
    public $innerExclusive = '';

    /**
     * @var string Description of entity.
     *             Is set in SCSS comment with `@desc HERE IS YOUR DESCRIPTION` directive before entity definition.
     */
    public $description = '';

    /**
     * @var MonsterVariable[] Array of references to variables directly used in this BEM entity.
     *                        Filled automatically by annotator during scss parsing -
     *                        gathers all variables from innerExclusive content.
     */
    public $variablesUsed = [];

    /** @var BemEntity[] Global entity map for all BemEntity objects. Array keys - bemSelector */
    public static $globalIdentityMap = [];

    /** @var string Working directory - where base scss file is located */
    public $workingDirectory = './';

    public $serializationVariablesMapper = [];

    public function init()
    {
        parent::init();
        if (!empty($this->inner)) {
            $this->innerExclusive = preg_replace(Annotator::SCSS_REGEXP, '', $this->inner);
        }
    }

    /** @inheritdoc */
    public function jsonSerialize()
    {
        return ArrayHelper::merge(
            parent::jsonSerialize(),
            [
                'name' => $this->name,
                'bemSelector' => $this->bemSelector,
                'parentBemSelector' => $this->parentBemSelector,
                'definition' => $this->definition,
                'description' => $this->description,
                'workingDirectory' => $this->workingDirectory,
                'variablesMapper' => $this->getVariablesMapper(),
            ]
        );
    }

    /** @inheritdoc */
    public function __sleep()
    {
        $this->serializationVariablesMapper = iterator_to_array($this->getVariablesMapper());
        return ArrayHelper::merge(
            parent::__sleep(),
            [
                'name',
                'bemSelector',
                'parentBemSelector',
                'description',
                'serializationVariablesMapper',
            ]
        );
    }

    public function getVariablesMapper()
    {
        foreach ($this->variablesUsed as $variable) {
            yield $variable->name;
        }
    }

    public function __wakeup()
    {
        parent::__wakeup();
        $this->setVariablesMapper($this->serializationVariablesMapper);
    }

    public function setVariablesMapper($variables)
    {
        $variables = array_unique($variables);
        foreach ($variables as $variable) {
            $this->variablesUsed[] = MonsterVariable::instance($variable);
        }
    }

    /**
     * Retrieves BemEntity instance from global identity map.
     * Returns null if it is not presented there.
     *
     * @param string $bemSelector
     *
     * @return \DotPlant\Monster\bem\BemEntity|null
     */
    public static function retrieveInstance($bemSelector)
    {
        if (isset(static::$globalIdentityMap[$bemSelector])) {
            return static::$globalIdentityMap[$bemSelector];
        }
        return null;
    }

    /**
     * @return \DotPlant\Monster\bem\BemEntity|null
     */
    public function parentEntity()
    {
        return empty($this->parentBemSelector) ? null : static::retrieveInstance($this->parentBemSelector);
    }

    /**
     * Creates instance of BEM entity.
     * Detects entity type automatically.
     * @param array  $data              Regexp matches array
     * @param string $parentBemSelector BEM selector of current entity parent
     * @param string $workingDirectory  Working directory
     * @return BemEntity instance
     */
    public static function unpack($data, $parentBemSelector = '', $workingDirectory = './')
    {
        if (isset($data['bem-type'], $data['definition'], $data['inner'], $data['name']) === false) {
            return null;
        }

        $bemSelector = static::nameEntity($data['name'], $data['bem-type'], $parentBemSelector);
        $instance = static::retrieveInstance($bemSelector);

        $mergeInstructions = true;

        if ($instance === null) {
            $mergeInstructions = false;

            switch ($data['bem-type']) {
                case 'element':
                    $instance = new BemElement([
                        'name' => $data['name'],
                        'definition' => $data['definition'],
                        'inner' => $data['inner'],
                        'parentBemSelector' => $parentBemSelector,
                    ]);
                    break;
                case 'modifier':
                    $instance = new BemModifier([
                        'name' => $data['name'],
                        'definition' => $data['definition'],
                        'inner' => $data['inner'],
                        'parentBemSelector' => $parentBemSelector,
                    ]);
                    break;
                case 'block':
                default:
                    $instance = new BemBlock([
                        'name' => $data['name'],
                        'definition' => $data['definition'],
                        'inner' => $data['inner'],
                    ]);
                    break;
            }

            $instance->bemSelector = $bemSelector;
        }

        $instance->workingDirectory = $workingDirectory;
        $instance->unpackAdditionalAttributes($data, $mergeInstructions);

        static::$globalIdentityMap[$bemSelector] = $instance;

        return $instance;
    }

    /**
     * Unpacks additional attributes from data array.
     * All child classes should first call parent function to extract common attributes.
     * @param array   $data
     * @param boolean $mergeInstructions
     */
    public function unpackAdditionalAttributes(&$data, $mergeInstructions)
    {
        MonsterVariable::processEntityVariables($this);
        if (isset($data['comment'])) {
            $this->processComments($data['comment']);
        }
    }

    /**
     * Returns bemSelector based on name, entity type and it's parent.
     *
     * @param string $name            BEM entity name
     * @param string $bemType         BEM type(block, element, modifier)
     * @param string $parentSelector  BEM selector of current entity parent
     *
     * @throws \Exception If element or modifier specified without parentSelector or there's no entity for it
     *
     * @return string
     */
    public static function nameEntity($name, $bemType, $parentSelector = '')
    {
        if ($bemType === 'block') {
            return $name;
        }

        $parent = static::retrieveInstance($parentSelector);

        if ($parent === null) {
            throw new \Exception("BEM Entity $name of type $bemType defined without parent.");
        }

        if ($bemType === 'element') {
            return $parent->bemSelector . '__' . $name;
        }

        // modifier
        return $parent->bemSelector . '--' . $name;
    }
}
