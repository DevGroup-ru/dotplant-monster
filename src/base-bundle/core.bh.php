<?php

use BEM\BH;
use BEM\Context;
use BEM\Json;
use BEM\Matcher;
use DotPlant\Monster\Repository;
use yii\helpers\VarDumper;

return [
    'editables' => new Matcher(
        '$after',
        function(Context $ctx, Json $json) {
            $json = $ctx->json();

            if ($json->block) {
                $ctx->attr('data-bem-match', $json->block . ($json->elem ? '__' . $json->elem : ''));

                if ($editable = $ctx->param('editable')) {
                    $ctx->attr('data-editable', 1);

                    $ctx->js([
                        'editable' => $editable
                    ]);

                    $type = isset($editable['type'])
                        ? $editable['type']
                        : 'string';
                    
                    /** @var Repository $repository */
                    $repository = Yii::$app->get('monsterRepository');
                    $editableFactory = $repository->editable();
                    $result = $editableFactory->handleType($type, $ctx, $json, $editable);
                    if ($result !== null) {
                        return $result;
                    }

                    

                }
//                if ($ctx->param('link')) {
//                    $ctx->attr('data-is-link', 1);
//                    $ctx->tag('a');
//                    if (is_string($ctx->param('link'))) {
//                        $ctx->attr('href', $ctx->param('link'));
//                    } else {
//                        $ctx->attr('href', '#');
//                    }
//                }
            }
        }
    ),
    'recursiveIterator' => new Matcher(
        '$before',
        function(Context $ctx, Json $json) {
            if ($ctx->param('recursive') !== null && $ctx->param('itemTemplate') !== null) {
                $recursive = (string) $ctx->param('recursive');

                $isBem = $ctx->json()->block || $ctx->json()->elem;
                $js = [
                    'recursive' => $recursive,
                ];


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
                $wrapChildrenJson['isWrapTemplate'] = true;
                if (isset($wrapChildrenJson['content']) == false) {
                    $wrapChildrenJson['content'] = [];
                }
                $wrapChildrenJson['content'] = (array) $wrapChildrenJson['content'];
                $wrapChildrenJson['content'][] =
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
                if ($json->elem) {
                    $itemTemplateJson['isItemTemplate'] = $json->block . '__' . $json->elem;
                } elseif ($json->block) {
                    $itemTemplateJson['isItemTemplate'] = $json->block;
                } else {
                    $parentJson = $ctx->node->parentNode->json;
                    $itemTemplateJson['isItemTemplate'] = $parentJson->block;
                    if ($parentJson->elem) {
                        $itemTemplateJson['isItemTemplate'] .= '__' . $parentJson->elem;
                    }
                }
                $itemTemplateJson['recursiveOf'] = $recursive;



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
    $uniq(\$data['$recursive']);

?>


PHP;
                if ($isBem === false) {
                    $ctx->node->parentNode->json->js = $js;
                } else {
                    $ctx->js($js);
                }

                if ($json->block === null && $json->elem === null) {
                    return $php;
                }
                $ctx->json()->content = $php;
            }



            // it is a child of recursive - itemTemplate or wrapTemplate
            if ($isItemTemplate = $ctx->param('isItemTemplate')) {
                // it's itemTemplate
                $ctx->js([
                    'itemTemplateInside' => $isItemTemplate,
                    'recursiveOf' => $ctx->param('recursiveOf'),
                ]);
            }
        }
    ),
    // other matchers will be here
];