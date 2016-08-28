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
    const ACTION_PREVIEW = 'preview';

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

        /** @var Template $template */
        if ($this->forceTemplate !== false) {
            $template = Template::findByKey($this->forceTemplate);
        } elseif ($templateId = $entity->getTemplateId()) {
            $template = Template::findById($templateId);
        }
        if ($template === null) {
            $template = Template::findByKey($this->defaultTemplateKey);
        }
        // now we have template and it can be rendered
        $actionData->viewFile = '@DotPlant/Monster/views/monster-template.php';
        $actionData->result['templateRegions'] = $template->templateRegions;

        /**
         * @var string $action Action type
         */
        $action = ArrayHelper::getValue($this->visualBuilderProvided(), self::ACTION_VAR_NAME, self::ACTION_DEFAULT);

        $this->handleProvidedEntities($entity, $template);
        $this->handleRegionsMaterials($entity, $actionData);

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


        if ($action === self::ACTION_SAVE) {
            // perform actual saving
            $entity->saveMonsterContent();
        }
        
        if (YII_ENV === 'dev') {
            Yii::$app->params['actionData'] = &$actionData;
//            Yii::$app->params['providers'] = $packed;
        }
        
        $layoutData = $this->applyLayout($entity, $actionData, $dataEntity);

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

    /**
     * @param MonsterEntityTrait $entity
     * @param Template $template
     */
    protected function handleProvidedEntities(&$entity, &$template)
    {
//        $providedEntities = ArrayHelper::getValue($this->visualBuilderProvided(), 'template.providersEntities', null);
//        if (is_array($providedEntities)) {
//            // safely merge entities with provided
//            $entityProviders = $entity->getEntityDataProviders();
//            foreach ($entityProviders as $i => $provider) {
//                /** @var DataEntityProvider $provider */
//                if ($provider instanceof StaticContentProvider && isset($providedEntities[$i])) {
//                    $provider->setEntities($providedEntities[$i]);
//                }
//            }
//        }
    }

    /**
     * @param MonsterEntityTrait $entity
     * @param ActionData $actionData
     */
    protected function handleRegionsMaterials(&$entity, &$actionData)
    {
        $hash = ProvidersHelper::hashEntityProviders($entity);
        // apply new materials for model
        $regionsMaterials = ArrayHelper::getValue($this->visualBuilderProvided(), 'template.regionsMaterials', null);
        if (is_array($regionsMaterials) && count($regionsMaterials) > 0) {
            $entityContent = [];
            foreach ($actionData->result['templateRegions'] as $region) {
                /** @var TemplateRegion $region */
                if (isset($regionsMaterials[$region->key])) {
                    $newMaterials = $regionsMaterials[$region->key];
                    if (array_key_exists('decl', $newMaterials)) {
                        $entityContent[$region->key] = [];
                        foreach ($newMaterials['materialsOrder'] as $key) {
                            $entityContent[$region->key][$key] = $newMaterials['decl'][$key];
                        }
                    } else {
                        $entityContent[$region->key] = $newMaterials;
                    }
                }
            }
            if (count($entityContent) > 0) {
                $entity->setMaterials($entityContent);
            }
        }
        // check all entity materials for existing providers
        // if no provider for material - create one with sample data
        $entityMaterials = $entity->getMaterials();

        $providers = $entity->getEntityDataProviders();
        foreach ($entityMaterials as $region => $materials) {
            foreach ($materials as $key => $materialConfiguration) {
                $hashToSearch = "$region.$key";
                if (in_array($hashToSearch, $hash, true) === false) {
                    $providerId = ProvidersHelper::ensureStaticProvider($entity);
                    if (array_key_exists($region, $providers[$providerId]['entities']) === false) {
                        $providers[$providerId]['entities'][$region] = [];
                    }
                    $material = MonsterContent::repository()->material($materialConfiguration['material']);

                    $providers[$providerId]['entities'][$region][$key] = $material->sampleData();;
                }
            }
        }
        $entity->setEntityDataProviders($providers);
    }

    protected function applyLayout(&$entity, &$actionData, $dataEntity)
    {
        /** @var \yii\base\Model|MonsterEntityTrait $entity */
        // apply layout
        $layoutId = $entity->getLayoutId();
        $layout = $layoutId > 0 ? Layout::findById($layoutId) : null;
        if ($layout === null) {
            $layout = Layout::findByKey($this->defaultLayoutKey);
        }

        $layoutEditData = [];

        if ($layout !== null) {
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
