<?php

namespace DotPlant\Monster\Universal;

use DevGroup\Frontend\traits\ContentNegotiator;
use DevGroup\Frontend\Universal\ActionData;
use DevGroup\Frontend\Universal\UniversalAction;
use DotPlant\Monster\DataEntity\StaticContentProvider;
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

        $visualBuilderProvided = $this->visualBuilderProvided();

        // first we need to find our entity
        /** @var \yii\base\Model|EntityTrait $entity */
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

        $action = ArrayHelper::getValue($visualBuilderProvided, 'action', 'default');
        $providers = ArrayHelper::merge(
            $template->getEntityDataProviders(),
            $entity->getEntityDataProviders()
        );

        $providedEntities = ArrayHelper::getValue($visualBuilderProvided, 'template.providersEntities', null);
        if (is_array($providedEntities)) {
            // safely merge entities with provided
            foreach ($providers as $i => $config) {
                if (isset($providedEntities[$i])) {

                    $providers[$i]['entities'] = $providedEntities[$i];

                }
            }
        }
        if ($action === 'render-material') {
            // we should render and return the whole content and replace it
            $materialIndex = ArrayHelper::getValue($visualBuilderProvided, 'materialId', null);
            $materialRegion = ArrayHelper::getValue($visualBuilderProvided, 'materialRegion', null);
            $materialName = ArrayHelper::getValue($visualBuilderProvided, 'material', null);
            if ($materialIndex !== null && $materialRegion !== null && $materialName !== null) {

                //! @todo Material can be inserted into layout, not template or entity! Take care of that too.
                $staticContentFilled = false;
                $material = MonsterContent::repository()->material($materialName);
                $sampleData = $material->sampleData();

                foreach ($providers as $index => &$provider) {
                    if (isset($provider['class'])) {
                        if ($provider['class'] !== StaticContentProvider::class) {
                            continue;
                        }
                    }
                    if (isset($provider['entities'])) {
                        if (isset($provider['entities'][$materialRegion])) {
                            $provider['entities'][$materialRegion][$materialIndex] = $sampleData;
                            $staticContentFilled = true;
                        }
                    }
                }
                unset($provider);
                if ($staticContentFilled===false) {
                    // know if region is entity dependent
                    $entityDependent = false;
                    foreach ($actionData->result['templateRegions'] as $region) {
                        /** @var TemplateRegion $region */
                        if ($region->key === $materialRegion) {
                            if ($region->entity_dependent) {
                                $entityDependent = true;
                            }
                        }
                    }
                    $newProvider = [
                        'class' => StaticContentProvider::class,
                        'entities' => [
                            $materialRegion => [
                                $materialIndex => $sampleData,
                            ],
                        ],
                    ];

                    if ($entityDependent) {
                        $entity->providers[$materialIndex] = $newProvider;
                    } else {
                        $template->providers[$materialIndex] = $newProvider;
                    }
                    $providers[$materialIndex] = $newProvider;
                }
            }
        }

//        \yii\helpers\VarDumper::dump($providers,10,true);die();
        //\yii\helpers\VarDumper::dump($visualBuilderProvided,10,true);die();
//        \yii\helpers\VarDumper::dump($actionData->result['templateRegions'][1], 10, true);die();

        $packed = [];
        $providedKeys = [];
        $actionData->result['dataByTemplateRegion'] = DataProviderProcessor::process(
            $providers,
            $actionData,
            $packed,
            $providedKeys
        );
        $actionData->result['model'] = &$entity;

        // apply new materials for model
        $regionsMaterials = ArrayHelper::getValue($visualBuilderProvided, 'template.regionsMaterials', null);
        if (is_array($regionsMaterials) && count($regionsMaterials) > 0) {
            $entityContent = [];
            foreach ($actionData->result['templateRegions'] as $region) {
                /** @var TemplateRegion $region */
                if ($region->entity_dependent && isset($regionsMaterials[$region->key])) {
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
                $entity->content = $entityContent;
            }
        }
        
        if (YII_ENV === 'dev') {
            Yii::$app->params['actionData'] = &$actionData;
            Yii::$app->params['providers'] = $packed;
        }
        
        $layoutData = $this->applyLayout($entity, $actionData);

        if (Yii::$app->request->isEditMode()) {
            $view = $actionData->controller->view;
            $jsonData = yii\helpers\Json::encode([
                'template' => [
                    'id' => $template->id,
                    'key' => $template->key,
                    'dataByTemplateRegion' => $actionData->result['dataByTemplateRegion'],
                    'providedKeys' => $providedKeys,
                    'regions' => ArrayHelper::map($template->templateRegions, 'id', function (TemplateRegion $item) {
                        return [
                            'id' => $item->id,
                            'name' => $item->name,
                            'key' => $item->key,
                            'entity_dependent' => (bool) $item->entity_dependent,
                        ];
                    }),
                    'providers' => $packed,
                    'entity' => [
                        'id' => isset($entity->id) ? $entity->id : null,
                        'name' => $entity->formName(),
                        'class' => $entity::className(),
                    ]
                ],
                'layout' => $layoutData,
            ]);

            $js = "window.MONSTER_EDIT_MODE_DATA = $jsonData;";
            $view->registerJs($js, yii\web\View::POS_BEGIN, 'edit-mode-vars');



        }
    }

    protected function applyLayout(&$entity, &$actionData)
    {
        /** @var \yii\base\Model|EntityTrait $entity */
        // apply layout
        $layoutId = $entity->getLayoutId();
        $layout = $layoutId > 0 ? Layout::findById($layoutId) : null;
        if ($layout === null) {
            $layout = Layout::findByKey($this->defaultLayoutKey);
        }

        $layoutData = [];

        if ($layout !== null) {
            Yii::$app->params['layoutTemplateRegions'] = $layout->templateRegions;
            Yii::$app->params['layoutMainEntity'] = &$entity;
            $providers = ArrayHelper::merge(
                $layout->getEntityDataProviders(),
                $entity->getEntityDataProviders()
            );

            $packedLayoutProviders = [];
            $providedLayoutKeys = [];
            Yii::$app->params['layoutDataByTemplateRegion'] =
                DataProviderProcessor::process($providers, $actionData, $packedLayoutProviders, $providedLayoutKeys);
            $actionData->controller->layout = '@DotPlant/Monster/views/layout-template.php';

            $layoutData = [
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
                'dataByTemplateRegion' => Yii::$app->params['layoutDataByTemplateRegion'],
            ];
        }
        return $layoutData;
    }
    
    protected function visualBuilderProvided()
    {
        //! @todo add RBAC check here
        $this->negotiate();
        return is_array($this->requestJson) ? $this->requestJson : [];
    }
}
