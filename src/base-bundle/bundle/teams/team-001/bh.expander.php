<?php

use BEM\Matcher;
use BEM\Context;
use BEM\Json;

return [
    'example' => new Matcher(
        'team-001',
        function (Context $ctx, Json $json) {
            $ctx->mod('expander-example', true);
        }
    ),
];
