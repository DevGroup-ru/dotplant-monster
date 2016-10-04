<?php

use BEM\Matcher;
use BEM\Context;
use BEM\Json;

return [
    'example2' => new Matcher(
        'content-block-001',
        function (Context $ctx, Json $json) {
            $ctx->mod('bh-example', true);
        }
    ),
];
