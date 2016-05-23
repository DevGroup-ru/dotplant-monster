<?php

use BEM\Context;
use BEM\Json;
use BEM\Matcher;

return [
    'editables' => new Matcher(
        '$after',
        function(Context $ctx, Json $json) {
            $json = $ctx->json();

            if ($json->block) {
                $ctx->attr('data-bem-match', $json->block . ($json->elem ? '__' . $json->elem : ''));

                if ($ctx->param('editable') || $ctx->param('link')) {
                    $ctx->attr('data-editable', 1);
                }
                if ($ctx->param('link')) {
                    $ctx->attr('data-is-link', 1);
                    $ctx->tag('a');
                    if (is_string($ctx->param('link'))) {
                        $ctx->attr('href', $ctx->param('link'));
                    } else {
                        $ctx->attr('href', '#');
                    }
                }
            }
        }
    ),
    'recursiveIterator' => new Matcher(
        '$before',
        function(Context $ctx, Json $json) {
            if ($ctx->param('recursive') !== null && $ctx->param('itemTemplate') !== null) {
                $recursive = (string) $ctx->param('recursive');

                $blockName = $json->block === null && $json->elem === null
                    ? $ctx->node->parentNode->json->block
                    : $ctx->json()->block;

                $itemTemplateJson = $ctx->param('itemTemplate');
                if (isset($itemTemplateJson['elem']) && !isset($itemTemplateJson['block'])) {
                    $itemTemplateJson['block'] = $blockName;
                }
                if (isset($itemTemplateJson['content']) === false) {
                    $itemTemplateJson['content'] = [];
                }
                $itemTemplateJson['content'] = (array) $itemTemplateJson['content'];




                $childrenAttribute = $ctx->param('childrenAttribute') ? : 'children';
                $json = $ctx->json();

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

                $itemTemplateJson['content'][] = <<<PHP
<?php
if (isset(\$item['$childrenAttribute'])) {
                // go recursive
                ?>$goRecursive<?php
            }
?>
PHP;

                $itemTemplate = $ctx->bh->apply($ctx->process($itemTemplateJson));
                $php = <<<PHP


<?php
    // automatically generated function
    $uniq = function (\$iterator, \$recursiveNestingLevel = 1) use (&$uniq) {
        foreach (\$iterator as \$key => \$item) {
            ?>
            $itemTemplate
            <?php
            
        }
    };
    
    // run first loop
    $uniq($recursive);

?>


PHP;
                if ($json->block === null && $json->elem === null) {
                    return $php;
                }
                $ctx->json()->content = $php;
            }
        }
    ),
    // other matchers will be here
];