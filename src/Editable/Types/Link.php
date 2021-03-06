<?php

namespace DotPlant\Monster\Editable\Types;

use BEM\Context;
use BEM\Json;
use yii;

class Link extends BaseEditableType
{

    /**
     * Handles editable type
     *
     * @param \BEM\Context $ctx
     * @param \BEM\Json    $json
     *
     * @return mixed
     */
    public function handleEditable(Context $ctx, Json $json, $editable)
    {
        $ctx->tag('a');
        $ctx->attr('data-is-link', 1);
        $ctx->content("<?= ArrayHelper::getValue(\${$this->target($editable)}, \"{$editable['key']}.anchor\", '#UNDEFINED') ?>");
        $ctx->attr(
            'href',
            [
                'unsafe' => "<?= ArrayHelper::getValue(\${$this->target($editable)}, \"{$editable['key']}.href\", '#UNDEFINED') ?>",
            ]
        );
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
