<?php

namespace DotPlant\Monster\Debug;

use DotPlant\Monster\DataEntity\DataEntityProvider;
use DotPlant\Monster\models\TemplateRegion;
use yii;
use yii\debug\Panel;
use yii\helpers\ArrayHelper;

class MonsterPanel extends Panel
{
    public function getName()
    {
        return Yii::t('app', 'Monster');
    }

    public function getSummary()
    {
        $regionsCount = count($this->data['templateRegions']);
        return <<<html
<div class="yii-debug-toolbar__block">
    <a href="{$this->getUrl()}">
        Regions: <span class="yii-debug-toolbar__label yii-debug-toolbar__label_info">{$regionsCount}</span>
        Entity: <span class="yii-debug-toolbar__label yii-debug-toolbar__label_info">{$this->data['entityName']}</span>
    </a>
</div>
html;
    }

    public function getDetail()
    {
        $result = <<<html
<h2>Template regions</h2>
<table class="table">
<tbody>
html;
        foreach ($this->data['templateRegions'] as $region) {
            $dependent = $region['entity_dependent'] ? 'Entity dependent' : 'template-dependent';
            $result .= <<<html
<tr>
<td>{$region['id']}</td>
<td>{$region['name']}</td>
<td>{$region['key']}</td>
<td>$dependent</td>
</tr>
html;

        }
        $result .= <<<html
</tbody>
</table>
<h2>Entity</h2>
Name: <b>{$this->data['entityName']}</b><br>
ID: <b>{$this->data['entityPk']}</b>
<h2>Data by template region</h2>

html;
        $result .= '<pre>'.yii\helpers\VarDumper::dumpAsString($this->data['dataByTemplateRegion'], 10, true).'</pre>';
        $result .= "<h2>Providers</h2><pre>" . yii\helpers\VarDumper::dumpAsString($this->data['providers'], 10, true).
            '</pre>';
        return $result;
    }

    public function save()
    {
        $actionData = ArrayHelper::getValue(Yii::$app->params, 'actionData', null);

        if ($actionData === null) {
            return null;
        }

        /** @var  yii\base\Model|\yii\db\ActiveRecord $entity */
        $entity = $actionData->result['model'];
        $entityName = $entity ? $entity->formName() : 'unknown';
        $entityPk = $entity->hasAttribute('id') ? $entity->id : "N/A";
        $providers = ArrayHelper::getValue(Yii::$app->params, 'providers', []);

        $result = [
            'entityName' => $entityName,
            'entityPk' => $entityPk,
            'templateRegions' => ArrayHelper::map(
                $actionData->result['templateRegions'],
                'id',
                function(TemplateRegion $item) {
                    return $item->getAttributes();
                }
            ),
            'dataByTemplateRegion' => $actionData->result['dataByTemplateRegion'],
            'providers' => $providers,
        ];


        return $result;
    }
}
