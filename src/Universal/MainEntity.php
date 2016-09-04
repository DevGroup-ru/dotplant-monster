<?php

namespace DotPlant\Monster\Universal;

use DevGroup\Frontend\traits\ContentNegotiator;
use DevGroup\Frontend\Universal\ActionData;
use DevGroup\Frontend\Universal\UniversalAction;
use DotPlant\Monster\DataEntity\ProvidersHelper;
use DotPlant\Monster\DataProviderProcessor;
use DotPlant\Monster\models\Layout;
use DotPlant\Monster\models\Template;
use DotPlant\Monster\models\TemplateRegion;
use DotPlant\Monster\MonsterContent;
use yii;
use yii\helpers\ArrayHelper;

class MainEntity extends UniversalAction
{
    use ContentNegotiator;

    public $mainEntityKey;

    public $defaultTemplateKey;

    public $defaultLayoutKey = 'basic';

    /** @var bool|string Template key to force */
    public $forceTemplate = false;

    /**
     * @var null|array JSON from VisualFrame.formSubmit
     */
    private $visualBuilderProvidedData = null;

    const ACTION_VAR_NAME = 'action';
    const ACTION_DEFAULT = 'default';
    const ACTION_SAVE = 'save';
    const ACTION_SAVE_TEMPLATE = 'save-template';
    const ACTION_SAVE_LAYOUT = 'save-layout';
    const ACTION_PREVIEW = 'preview';

    private $actionType;

    /**
     * @param ActionData $actionData
     *
     * @throws \yii\base\InvalidConfigException
     * @throws \yii\web\NotFoundHttpException
     * @throws bool
     */
    public function run(&$actionData)
    {
        if ($this->mainEntityKey === null) {
            throw new yii\base\InvalidConfigException('You must set main entity key');
        }
        if ($this->defaultTemplateKey === null) {
            throw new yii\base\InvalidConfigException('You must provide default template key');
        }

        // first we need to find our entity
        /** @var \yii\base\Model|MonsterEntityTrait $entity */
        $entity = null;
        if (array_key_exists($this->mainEntityKey, $actionData->entities)) {
            $entity = ($actionData->entities[$this->mainEntityKey] ?: null);
        }
        if ($entity === null) {
            throw new yii\web\NotFoundHttpException;
        }

        $templateId = ArrayHelper::getValue($this->visualBuilderProvidedData, 'template.templateId');
        if ($templateId !== null) {
            $entity->setTemplateId($templateId);
        }

        /** @var Template $template */
        $template = null;
        if ($this->forceTemplate !== false) {
            $template = Template::findByKey($this->forceTemplate);
        } elseif ($templateId = $entity->getTemplateId()) {
            $template = Template::findById($templateId);
        }
        if ($template === null) {
            $template = Template::findByKey($this->defaultTemplateKey);
        }
        // now we have template and it can be rendered

        /**
         * @var string $action Action type
         */
        if ($this->action() !== self::ACTION_DEFAULT) {
            $this->providersSupplied($entity, 'entity');
            $this->materialsSupplied($entity, 'entity.materialsByRegionDecl', true);

            $this->providersSupplied($template, 'template');
            $this->templateRegions($template, 'template');

        }


        $this->handleRegionsMaterials($entity, $entity);

        $packedTemplateProviders = [];
        $providedKeysTemplate = [];

        $packedEntityProviders = [];
        $providedKeysEntity = [];

        $dataTemplate = DataProviderProcessor::process(
            $template->getEntityDataProviders(),
            $actionData,
            $packedTemplateProviders,
            $providedKeysTemplate
        );
        $dataEntity = DataProviderProcessor::process(
            $entity->getEntityDataProviders(),
            $actionData,
            $packedEntityProviders,
            $providedKeysEntity
        );


        $actionData->result['dataByTemplateRegion'] = ArrayHelper::merge(
            $dataTemplate,
            $dataEntity
        );
        $actionData->result['model'] = &$entity;


        if ($this->action() === self::ACTION_SAVE) {
            // perform actual saving
            $entity->saveMonsterContent();
        }

        if (YII_ENV === 'dev') {
            Yii::$app->params['actionData'] = &$actionData;
//            Yii::$app->params['providers'] = $packed;
        }

        $layoutData = $this->applyLayout($entity, $actionData, $dataEntity);

        $actionData->viewFile = '@DotPlant/Monster/views/monster-template.php';
        $actionData->result['templateRegions'] = $template->templateRegions;


        if (Yii::$app->request->isEditMode()) {
            $view = $actionData->controller->view;
            $jsonData = yii\helpers\Json::encode([
                'template' => [
                    'id' => $template->id,
                    'key' => $template->key,
//                    'dataByTemplateRegion' => $dataTemplate,
                    'providedKeys' => $providedKeysTemplate,
                    'regions' => ArrayHelper::map($template->templateRegions, 'id', function (TemplateRegion $item) {
                        return [
                            'id' => $item->id,
                            'name' => $item->name,
                            'key' => $item->key,
                            'entity_dependent' => (bool) $item->entity_dependent,
                        ];
                    }),
                    'providers' => $packedTemplateProviders,
                ],
                'entity' => [
                    'id' => isset($entity->id) ? $entity->id : null,
                    'name' => $entity->formName(),
                    'class' => $entity::className(),
//                    'dataByTemplateRegion' => $dataEntity,
                    'providedKeys' => $providedKeysEntity,
                    'providers' => $packedEntityProviders,
                ],
                'layout' => $layoutData,
            ]);

            $js = "window.MONSTER_EDIT_MODE_DATA = $jsonData;";
            $view->registerJs($js, yii\web\View::POS_BEGIN, 'edit-mode-vars');
        }
    }

    protected function action()
    {
        if ($this->actionType === null) {
            $this->actionType = ArrayHelper::getValue(
                $this->visualBuilderProvided(),
                self::ACTION_VAR_NAME,
                self::ACTION_DEFAULT
            );
        }
        return $this->actionType;
    }

    /**
     * @param MonsterProvidersTrait|MonsterEntityTrait $model
     */
    protected function providersSupplied(&$model, $postKey)
    {
        if ($this->action() === self::ACTION_DEFAULT) {
            // skip on default action
            return;
        }

        $providers = ArrayHelper::getValue(
            $this->visualBuilderProvided(),
            "$postKey.providers",
            null
        );
        if (is_array($providers) === false) {
            // no providers supplied
            return;
        }

        //! @todo add check for proper classnames and properties here
//        echo "<pre><h2>$postKey</h2>";
//        var_export($providers);
//        echo '</pre>';
        $model->setEntityDataProviders($providers);
    }

    /**
     * @param MonsterEntityTrait|MonsterContentTrait $entity
     * @todo rewrite it to work also with template regions
     */
    protected function handleRegionsMaterials(&$entityWithMaterials, &$entityWithProviders)
    {
        $hash = ProvidersHelper::hashEntityProviders($entityWithProviders);
        // check all entity materials for existing providers
        // if no provider for material - create one with sample data
        $entityMaterials = $entityWithMaterials->getMaterials();
        if ($entityWithMaterials instanceof TemplateRegion) {
            $entityMaterials = [
                $entityWithMaterials->key => $entityMaterials
            ];
        }

        foreach ($entityMaterials as $region => $materials) {
            foreach ($materials as $key => $materialConfiguration) {
                $hashToSearch = "$region.$key";
                if (in_array($hashToSearch, $hash, true) === false) {

                    $providerId = ProvidersHelper::ensureStaticProvider($entityWithProviders);
                    $providers = $entityWithProviders->getEntityDataProviders();
                    if (array_key_exists($region, $providers[$providerId]['entities']) === false) {
                        $providers[$providerId]['entities'][$region] = [];
                    }


                    $material = MonsterContent::repository()->material($materialConfiguration['material']);

                    $providers[$providerId]['entities'][$region][$key] = $material->sampleData();
                    $entityWithProviders->setEntityDataProviders($providers);
                }
            }
        }

    }

    /**
     * @param MonsterContentTrait $model
     * @param string $path
     */
    public function materialsSupplied(&$model, $path, $byRegions = false)
    {
        if ($this->action() === self::ACTION_DEFAULT) {
            // skip on default action
            return;
        }

        $result = [];

        if ($byRegions === true) {
            $regions = (array) ArrayHelper::getValue(
                $this->visualBuilderProvided(),
                $path,
                []
            );
            foreach ($regions as $index => $decl) {
                $result[$index] = $this->materialsDecl("$path.$index");
            }
        } else {
            $result = $this->materialsDecl($path);
        }

        $model->setMaterials($result);
    }

    /**
     * Parse materialsDecl block
     * @param string $path
     *
     * @return array
     */
    protected function materialsDecl($path)
    {
        $result = [];
        $materials = ArrayHelper::getValue(
            $this->visualBuilderProvided(),
            $path,
            null
        );
        if (is_array($materials) === false) {
            // no providers supplied
            return [];
        }
        $order = (array) ArrayHelper::getValue($materials, 'materialsOrder', []);
        $decl = (array) ArrayHelper::getValue($materials, 'decl', []);

        foreach ($order as $index) {
            if (isset($decl[$index])) {
                //! @todo check for correct declaration here
                $result[$index] = $decl[$index];
            }
        }
        return $result;
    }

    /**
     * @param Template $model
     * @param string $path
     */
    protected function templateRegions(&$model, $path)
    {
        $currentRegions = ArrayHelper::index($model->templateRegions, 'key');

        $newRegions = [];
        $regionsOrder = ArrayHelper::getValue(
            $this->visualBuilderProvided(),
            "$path.templateRegionsOrder",
            []
        );

        $counter = 0;

        foreach ($regionsOrder as $regionKey) {
            /** @var TemplateRegion $regionModel */
            $regionModel = null;
            if (isset($currentRegions[$regionKey])) {
                $regionModel = $currentRegions[$regionKey];
            } else {
                $regionModel = Yii::createObject([
                    'class' => TemplateRegion::class,
                    'key' => $regionKey,
                    'template_id' => $model->id,
                ]);
            }
            $regionModel->sort_order = $counter;
            $regionModel->entity_dependent = (bool) ArrayHelper::getValue(
                $this->visualBuilderProvided(),
                "$path.templateRegions.$regionKey.entityDependent",
                false
            );
            $this->materialsSupplied($regionModel, "$path.templateRegions.{$regionModel->key}.materialsDecls");

            $this->handleRegionsMaterials($regionModel, $model);
            $newRegions[$regionKey] = $regionModel;
        }
        //!@todo add delete for deleted regions(foreach by order, if not exist - delete) -- only on save$path action
        $model->templateRegionsOverride = $newRegions;

    }

    protected function applyLayout(&$entity, &$actionData, $dataEntity)
    {
        /** @var \yii\base\Model|MonsterEntityTrait $entity */
        $layoutId = ArrayHelper::getValue($this->visualBuilderProvidedData, 'layout.templateId');
        if ($layoutId !== null) {
            $entity->setLayoutId($layoutId);
        }
        // apply layout
        $layoutId = $entity->getLayoutId();
        $layout = $layoutId > 0 ? Layout::findById($layoutId) : null;
        if ($layout === null) {
            $layout = Layout::findByKey($this->defaultLayoutKey);
        }

        $layoutEditData = [];

        if ($layout !== null) {
            if ($this->action() !== self::ACTION_DEFAULT) {
                $this->providersSupplied($layout, 'layout');
                $this->templateRegions($layout, 'layout');

            }

            Yii::$app->params['layoutTemplateRegions'] = $layout->templateRegions;
            Yii::$app->params['layoutMainEntity'] = &$entity;

            $packedLayoutProviders = [];
            $providedLayoutKeys = [];

            $dataLayout = DataProviderProcessor::process(
                $layout->getEntityDataProviders(),
                $actionData,
                $packedLayoutProviders,
                $providedLayoutKeys
            );
            // merged data is needed for rendering the layout
            $mergedData = ArrayHelper::merge(
                $dataLayout,
                $dataEntity
            );

            Yii::$app->params['layoutDataByTemplateRegion'] = $mergedData;
            $actionData->controller->layout = '@DotPlant/Monster/views/layout-template.php';

            $layoutEditData = [
                'id' => $layout->id,
                'providers' => $packedLayoutProviders,
                'key' => $layout->key,
                'regions' => ArrayHelper::map($layout->templateRegions, 'id', function (TemplateRegion $item) {
                    return [
                        'id' => $item->id,
                        'name' => $item->name,
                        'key' => $item->key,
                        'entity_dependent' => (bool) $item->entity_dependent,
                    ];
                }),
                'providedKeys' => $providedLayoutKeys,
//                'dataByTemplateRegion' => Yii::$app->params['layoutDataByTemplateRegion'],
            ];
        }
        return $layoutEditData;
    }

    protected function visualBuilderProvided()
    {
        //! @todo add RBAC check here
        if ($this->visualBuilderProvidedData === null) {
            $this->negotiate();
            $this->visualBuilderProvidedData = is_array($this->requestJson) ? $this->requestJson : [];
        }
        return $this->visualBuilderProvidedData;
    }
}
