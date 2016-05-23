<?php

use BEM\Context;
use BEM\Json;
use BEM\Matcher;

return [
    'recursiveIterator' => new Matcher(
        '$after',
        function(Context $ctx) {
            $cls = explode(' ', $ctx->cls());
            $originalClsCount = count($cls);
            if ($ctx->param('row') === true) {
                $cls[] = 'm-row';
            }
            if ($ctx->param('container') === true) {
                $cls[] = 'm-container';
            }

            $utils = $ctx->param('utils');
            if ($utils !== null) {
                if (is_string($utils)) {
                    $utils = explode(' ', $utils);
                }
                foreach ($utils as $util) {
                    $cls[] = 'g__' . $util;
                }
            }
            $json = $ctx->json();
            if ($json->block) {
                $attrs['data-bem-match'] = $bemSelector = $json->block . ($json->elem ? '__' . $json->elem : '');

                if ($ctx->param('editable') || $ctx->param('link')) {
                    $ctx->attr('data-editable', 1);
                }
                if ($ctx->param('link')) {
                    $ctx->attr('data-is-link', 1);
                }
            }
            $cls = array_unique($cls);
            if ($originalClsCount < count($cls)) {
                $ctx->cls(implode(' ', $cls), true);
            }
        }
    ),
    // other matchers will be here
];