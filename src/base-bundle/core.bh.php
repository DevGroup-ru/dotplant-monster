<?php

use BEM\Context;
use BEM\Json;
use BEM\Matcher;

return [
    'recursiveIterator' => new Matcher(
        '$before',
        function(Context $ctx, Json $json) {
            if ($ctx->param('recursive') !== null && $ctx->param('itemTemplate') !== null) {
                $recursive = (string) $ctx->param('recursive');
                $itemTemplate = $ctx->bh->apply($ctx->process($ctx->param('itemTemplate')));
                $childrenAttribute = $ctx->param('childrenAttribute') ? : 'children';
                $uniq = '$recursive_' . $ctx->generateId();

                $wrapChildrenJson = $ctx->param('wrapTemplate') ? : [
                    'bem' => false,
                ];
                /**
                 * @todo itemTemplate - контекстуальный или нет
                 * @todo wrapTemplate - контекстуальный или нет(применять $ctx->process?)
                 */
                $wrapChildrenJson['content'] =
                    "<?php if (isset(\$item['$childrenAttribute'])) {\n$uniq(\$item['$childrenAttribute'], \$recursiveNestingLevel+1); \n}\n?>";
                $goRecursive = $ctx->bh->apply($ctx->process($wrapChildrenJson));

                $php = <<<PHP


<?php
    // automatically generated function
    $uniq = function (\$iterator, \$recursiveNestingLevel = 1) use (&$uniq) {
        foreach (\$iterator as \$key => \$item) {
            ?>$itemTemplate<?php
            if (isset(\$item['$childrenAttribute'])) {
                // go recursive
                ?>$goRecursive<?php
            }
        }
    };
    
    // run first loop
    $uniq($recursive);

?>


PHP;
                $ctx->json()->content = $php;
            }
        }
    ),
    // other matchers will be here
];