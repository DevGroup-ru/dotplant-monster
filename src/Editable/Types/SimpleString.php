<?php

namespace DotPlant\Monster\Editable\Types;

use BEM\Context;
use BEM\Json;
use yii;

class SimpleString extends BaseEditableType
{

    /**
     * Handles editable type
     *
     * @param \BEM\Context $ctx
     * @param \BEM\Json    $json
     * @param array        $editable
     *
     * @return mixed
     */
    public function handleEditable(Context $ctx, Json $json, $editable)
    {
        $ctx->content("<?= \${$this->target($editable)}['{$editable['key']}'] ?>");
    }

    /**
     * Returns a js `function($node){}` string which will be used for this type of editable.
     *
     * @return string
     */
    public function jsSerializer()
    {
        return false;
    }
}
