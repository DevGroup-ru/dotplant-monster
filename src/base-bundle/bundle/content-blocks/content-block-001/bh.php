<?php

use BEM\Matcher;
use BEM\Context;
use BEM\Json;


return [
    'example' => new Matcher(
        'content-block-001',
        function(Context $ctx, Json $json) {
            $ctx->cls('bh-example');
        }
    ),
];