<?php

namespace DotPlant\Monster;

use BEM\Context;
use BEM\Json;
use BEM\JsonCollection;
use BEM\Matcher;
use DotPlant\Monster\Bundle\Material;
use DotPlant\Monster\exceptions\MonsterViewException;
use yii;
use yii\helpers\ArrayHelper;
use yii\helpers\FileHelper;

/**
 * Class BaseMaterialize
 *
 * The whole materialization cycle:
 * //  INPUT: $material, $data, $uniqueContentId, $materialIndex.
 * 1.  EVENT: beforeExpand
 * 2.  Expand bem json(handles expand.bh matchers in expander from bundle, group, material matchers)
 * 3.  EVENT: beforeGlobalCustomization - global, site matchers for THIS material->fullPath
 * 4.  Apply global customizations to bh
 * 5.  EVENT: beforeContextualCustomization - contextual matchers for THIS <uniqueContentId,materialIndex>
 * 6.  Apply contextual customizations to bh
 * 7.  EVENT: beforeTemplateCreation
 * 8.  Create php template file
 * 9.  EVENT: afterTemplateCreation
 * 10. EVENT: beforeMaterialize - global, site and contextual data manipulations. Reference to `$data` is used.
 * 11. Render php template on $data
 * 12. EVENT: afterMaterialize
 * //  OUTPUT: $content string
 *
 * Steps 1-2 handled inside MonsterBh and MonsterBhExpander.
 * If there is no contextual matchers or they are not changed - steps 3-8 CAN BE cached,
 * so no new php template generated without changes to bh behavior.
 * Cache relies on policy provided by corresponding MonsterContent.
 * Step 10 is used for $data population, generation or modification.
 * Step 11 - renders php file as yii2 view. Php file is used as opcache can boost performance + debug is simpler.
 * Step 12 receives rendered $content string and can manipulate with it.
 *
 * @package DotPlant\Monster
 */
class BaseMaterialize extends yii\base\Widget
{
    /** @var Material */
    public $material;

    /** @var string */
    public $uniqueContentId;
    /** @var string */
    public $materialIndex;
    /** @var array */
    public $data;

    /** @var MonsterBh */
    private $monsterBh;

    /** @var bool Edit mode flag */
    public $editMode = false;

    const EVENT_BEFORE_GLOBAL_CUSTOMIZATION = 'beforeGlobalCustomization';
    const EVENT_BEFORE_CONTEXTUAL_CUSTOMIZATION = 'beforeContextualCustomization';
    const EVENT_BEFORE_TEMPLATE_CREATION = 'beforeTemplateCreation';
    const EVENT_AFTER_TEMPLATE_CREATION = 'afterTemplateCreation';
    const EVENT_BEFORE_MATERIALIZE = 'beforeMaterialize';
    const EVENT_AFTER_MATERIALIZE = 'afterMaterialize';

    public function init()
    {
        parent::init();
        $this->monsterBh = Yii::$app->get('monsterBh');
    }

    public function run()
    {
        $expandedBemJson = $this->monsterBh->expandedBemJson($this->material);

        $customizedBhMatchersIds = [];
        $content = '';
        $templateFilename = $this->generateTemplateFilename();

        $event = new MaterializeEvent([
            'material' => $this->material,
            'materializeData' => &$this->data,
            'uniqueContentId' => $this->uniqueContentId,
            'materialIndex' => $this->materialIndex,
            'customizedBhMatchersIds' => &$customizedBhMatchersIds,
            'content' => &$content,
            'templateFilename' => &$templateFilename,
            'editMode' => $this->editMode,
        ]);

        if (is_readable($templateFilename) === false) {
            //! @todo add expire support for the template file into above condition
            $this->ensureTemplateFolderCreated($templateFilename);

            $this->trigger(static::EVENT_BEFORE_GLOBAL_CUSTOMIZATION, $event);
            /** @var Repository $repository */
            $newBhMatchers = $this->monsterBh->applyGlobalCustomizations($this->material);

            $this->trigger(static::EVENT_BEFORE_CONTEXTUAL_CUSTOMIZATION, $event);

            // Apply edit-mode matcher
            if ($this->editMode === true) {
                if ($expandedBemJson->attrs === null) {
                    $expandedBemJson->attrs = [];
                }

                $expandedBemJson->attrs['data-is-material'] = 1;
                $expandedBemJson->attrs['data-material-index'] = $this->materialIndex;
                $expandedBemJson->attrs['data-material-path'] = $this->material->fullPath;
                $expandedBemJson->cls .= ' m-monster-material';
            }
            //! @todo Add contextual customization code here(we will need to introduce new param for materialize)

            $this->trigger(static::EVENT_BEFORE_TEMPLATE_CREATION, $event);
            Yii::beginProfile('Materialize -> Template creation');
            // find editables and add them to js of block
            if ($this->editMode === true) {
                $editableKeys = [];
                $fillEditable = function ($editable, $root = null) use (&$editableKeys) {
                    $editableKey = $editable['key'];
                    $editableType = isset($editable['type']) ? $editable['type'] : 'string';
                    $target = isset($editable['target']) ? $editable['target'] : null;
                    if ($root !== null && $target === 'item') {
                        if (isset($editableKeys[$root]) === false) {
                            $editableKeys[$root] = [];
                        }
                        $editableKeys[$root][$editableKey] = $editableType;
                    } elseif ($target !== null) {
                        if (isset($editableKeys[$target]) === false) {
                            $editableKeys[$target] = [];
                        }
                        $editableKeys[$target][$editableKey] = $editableType;
                    } else {
                        $editableKeys[$editableKey] = $editableType;
                    }
                };
                $walker = function ($object, $root = null) use (&$walker, &$fillEditable) {
                    $array = $object;

                    if ($object instanceof Json) {
                        if (isset($object->recursive)) {
                            $root = $object->recursive;
                        }
                        if (isset($object->editable)) {
                            $fillEditable($object->editable, $root);
                        }
                        foreach ($object as $key => $value) {
                            if ($key === 'content' && $value instanceof JsonCollection) {
                                foreach ($value as $content) {
                                    $walker($content, $root);
                                }
                            } elseif (is_array($value)) {
                                $walker($value, $root);
                            }
                        }
                    } else {
                        if (is_array($array)) {
                            foreach ($array as $key => $value) {
                                if ($key === 'editable' && isset($value['key'])) {
                                    $fillEditable($value, $root);
                                } elseif (is_array($value) || $value instanceof JsonCollection) {
                                    $walker($value, $root);
                                }
                            }
                        }
                    }
                };
                $walker($expandedBemJson);

                $expandedBemJson->attrs['data-editable-keys'] = \yii\helpers\Json::encode($editableKeys);
            }
            // @todo Add configuration param somewhere, where we add needed classes list for generating use statements
            $template = <<<'php'
<?php

use yii\helpers\ArrayHelper;
use yii\helpers\Html;
use yii\helpers\Json;
use yii\helpers\Url;
use DotPlant\Monster\components\ViewHelpers;


/**
 * WARNING: THIS FILE IS AUTOGENERATED. ALL CHANGES WILL BE LOST.
 * 
 * Please refer to the DotPlant CMS documentation(Monster subsystem section)
 * on extending and modifying your look'n'feel.
 *
 * @var \yii\web\View $this
 * @var array         $data
 */
?>

php;
            $template .= $this->monsterBh->bh()->apply($expandedBemJson);

            // remove applied matchers
            $this->monsterBh->bh()->removeMatcherById(ArrayHelper::merge($newBhMatchers, $customizedBhMatchersIds));


            Yii::endProfile('Materialize -> Template creation');
            if (file_put_contents($templateFilename, $template) === false) {
                throw new \RuntimeException(
                    "Template file can't be saved: $templateFilename for ($this->uniqueContentId,$this->materialIndex)"
                );
            }
            unset($template);
            $this->trigger(static::EVENT_AFTER_TEMPLATE_CREATION, $event);
        }
        $this->trigger(static::EVENT_BEFORE_MATERIALIZE, $event);
        Yii::beginProfile('Materialize -> Template render');
        try {
            $content = $this->renderFile($templateFilename, ['data' => &$this->data]);
        } catch (\Exception $e) {
            throw new MonsterViewException($templateFilename, $this->data, $e);
        }
        Yii::endProfile('Materialize -> Template render');

        $this->trigger(static::EVENT_AFTER_MATERIALIZE, $event);

        Yii::beginProfile('Materialize -> Publish assets');
        $this->material->publishAssets();
        Yii::endProfile('Materialize -> Publish assets');

        return $content;
    }

    public function generateTemplateFilename()
    {
        $editPrefix = $this->editMode ? 'edit-' : '';
        return
            Yii::getAlias('@app/monster/templates') .
            '/' .
            $this->uniqueContentId .
            '/' .
            $editPrefix .
            $this->materialIndex . '.php';
    }

    public function ensureTemplateFolderCreated($templateFilename)
    {
        if (is_writable(dirname($templateFilename)) === false) {
            FileHelper::createDirectory(dirname($templateFilename));
        }
    }
}
