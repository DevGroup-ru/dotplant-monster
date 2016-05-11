<?php

namespace DotPlant\Monster;

use DotPlant\Monster\Bundle\Material;
use yii;
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
        ]);

        if (is_readable($templateFilename) === false) {
            //@todo add expire support for the template file into above condition
            $this->ensureTemplateFolderCreated($templateFilename);

            $this->trigger(static::EVENT_BEFORE_GLOBAL_CUSTOMIZATION, $event);
            //@todo add global bh customization here

            $this->trigger(static::EVENT_BEFORE_CONTEXTUAL_CUSTOMIZATION, $event);
            //@todo add contextual bh customization here

            $this->trigger(static::EVENT_BEFORE_TEMPLATE_CREATION, $event);

            $template = $this->monsterBh->bh()->apply($expandedBemJson);
            if (file_put_contents($templateFilename, $template) === false) {
                throw new \RuntimeException(
                    "Template file can't be saved: $templateFilename for ($this->uniqueContentId,$this->materialIndex)"
                );
            }
            unset($template);
            $this->trigger(static::EVENT_AFTER_TEMPLATE_CREATION, $event);
        }
        $this->trigger(static::EVENT_BEFORE_MATERIALIZE, $event);

        $content = $this->renderFile($templateFilename, ['data' => &$this->data]);

        $this->trigger(static::EVENT_AFTER_MATERIALIZE, $event);

        return $content;
    }

    public function generateTemplateFilename()
    {
        return
            Yii::getAlias('@app/monster/templates') .
            '/' .
            $this->uniqueContentId .
            '/' .
            $this->materialIndex . '.php';
    }

    public function ensureTemplateFolderCreated($templateFilename)
    {
        if (is_writable(dirname($templateFilename)) === false) {
            FileHelper::createDirectory(dirname($templateFilename));
        }
    }
}
