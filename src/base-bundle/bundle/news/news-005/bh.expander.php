<?php

use BEM\Matcher;
use BEM\Context;
use BEM\Json;

return [
    'example' => new Matcher(
        'news-005',
        function (Context $ctx, Json $json) {
            $ctx->mod('expander-example', true);
        }
    ),
];
