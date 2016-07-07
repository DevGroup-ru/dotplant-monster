<?php

use BEM\Matcher;
use BEM\Context;
use BEM\Json;


return [
    'example' => new Matcher(
        'team-004',
        function(Context $ctx, Json $json) {
            $ctx->mod('expander-example', true);
        }
    ),
];