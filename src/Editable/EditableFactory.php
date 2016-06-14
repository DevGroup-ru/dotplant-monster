<?php

namespace DotPlant\Monster\Editable;

use DotPlant\Monster\Editable\Types\BaseEditableType;
use DotPlant\Monster\Editable\Types\Image;
use DotPlant\Monster\Editable\Types\Link;
use DotPlant\Monster\Editable\Types\SimpleString;
use yii;
use yii\base\Component;

class EditableFactory extends Component
{
    /** @var array|BaseEditableType[] */
    public $types = [];
    
    public $defaultTypes = [
        'link' => [
            'class' => Link::class,
        ],
        'string' => [
            'class' => SimpleString::class,
        ],
        'image' => [
            'class' => Image::class,
        ],
    ];
    
    public function init()
    {
        parent::init();
        $this->types = yii\helpers\ArrayHelper::merge($this->defaultTypes, $this->types);
        // pre-init string
        $this->types['string'] = Yii::createObject($this->types['string']);
    }

    protected function handlerByType($type)
    {
        if (array_key_exists($type, $this->types)) {
            if (is_object($this->types[$type]) === false) {
                $this->types[$type] = Yii::createObject($this->types[$type]);
            }
        } else {
            $this->types[$type] = $this->types['string'];
        }
        return $this->types[$type];
    }
    
    public function handleType($type, $ctx, $json, $editable)
    {
        return static::handlerByType($type)->handleEditable($ctx, $json, $editable);
    }

    public function dataAttribute($type, $editable)
    {
        return static::handlerByType($type)->dataAttribute($editable);
    }
}
