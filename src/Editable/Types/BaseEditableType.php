<?php

namespace DotPlant\Monster\Editable\Types;

use BEM\Context;
use BEM\Json;
use yii;

abstract class BaseEditableType extends yii\base\Object
{
    /**
     * Handles editable type
     * @param \BEM\Context $ctx
     * @param \BEM\Json    $json
     * @param array        $editable
     *
     * @return mixed
     */
    abstract public function handleEditable(Context $ctx, Json $json, $editable);

    /**
     * @param array $editable
     *
     * @return string
     */
    public function target($editable)
    {
        return isset($editable['target'])
            ? $editable['target']
            : 'data';
    }

    /**
     * Returns a js `function($node){}` string which will be used for this type of editable.
     * @return string
     */
    abstract public function jsSerializer();

    /**
     * @param array $editable
     * @return string|null
     */
    public function dataAttribute($editable)
    {
        if (isset($editable['target'])) {
            return $editable['target'] . '.' . $editable['key'];
        }
        return $editable['key'];
    }
}
