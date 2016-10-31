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
        function (Context $ctx, Json $json) {
            $json = $ctx->json();
            $editMode = false;
            if (Yii::$app instanceof yii\web\Application) {
                $editMode = Yii::$app->request->isEditMode();
            }

            if ($json->block) {
                if ($editMode) {
                    $ctx->attr('data-bem-match', $json->block . ($json->elem ? '__' . $json->elem : ''));
                }

                if ($editable = $ctx->param('editable')) {
                    if ($editMode) {
                        $ctx->attr('data-editable', 1);

        //
        //                        $ctx->js([
        //                            'editable' => $editable
        //                        ]);
                        $ctx->attr('data-editable-params', \yii\helpers\Json::encode($editable));
                    }

                    $type = isset($editable['type'])
                        ? $editable['type']
                        : 'string';

                    /** @var Repository $repository */
                    $repository = Yii::$app->get('monsterRepository');
                    $editableFactory = $repository->editable();
                    $ctx->attr('data-editable-key', $editableFactory->dataAttribute($type, $editable));
                    $ctx->attr('data-editable-type', $type);
                    $result = $editableFactory->handleType($type, $ctx, $json, $editable);
                    if ($result !== null) {
                        return $result;
                    }
                }
            }
        }
    ),
    'recursiveIterator' => new Matcher(
        '$before',
        function (Context $ctx, Json $json) {
            $editMode = false;
            if (Yii::$app instanceof yii\web\Application) {
                $editMode = Yii::$app->request->isEditMode();
            }
            if ($ctx->param('recursive') !== null && $ctx->param('itemTemplate') !== null) {
                $recursive = (string) $ctx->param('recursive');
                $target = '$' . ($ctx->param('target') ?: 'data');

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

                $wrapChildrenJson = Yii::$app->monsterBh->expander()->bh()->processBemJson($wrapChildrenJson);
                $goRecursive = $ctx->bh->apply($ctx->process($wrapChildrenJson));

                $itemTemplateJson['content'][] = <<<PHP
<?php
if ((is_array(\$item) || \$item instanceof \\yii\\base\\Arrayable) && isset(\$item['$childrenAttribute'])) {
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
                $itemTemplateJson['attrs']['data-recursive-item-key'] = ['unsafe'=>'<?=$key?>'];
                /**
                 * @todo Сначала надо заэкспандить этот json, а потом процессить!
                 */

                $itemTemplateJson = Yii::$app->monsterBh->expander()->bh()->processBemJson($itemTemplateJson);
                $itemTemplate = $ctx->bh->apply($ctx->process($itemTemplateJson));
                /** @var array $target */
                $php = <<<PHP


<?php
    // automatically generated function
    $uniq = function (\$iterator, \$recursiveNestingLevel = 1) use (&$uniq, \$data) {
        foreach (\$iterator as \$key => \$item) {
            ?>
            $itemTemplate
            <?php
            
        }
    };
    
    // run first loop
    if (isset({$target}['$recursive']) && is_array({$target}['$recursive'])) {
        $uniq({$target}['$recursive']);
    }

?>


PHP;
                if ($editMode) {
                    if ($isBem === false) {
                        $ctx->node->parentNode->json->attrs['data-monster-debug'] = \yii\helpers\Json::encode($js);
                        $ctx->node->parentNode->json->attrs['data-recursive'] = 1;
                        $ctx->node->parentNode->json->attrs['data-editable-key'] = $recursive;
                    } else {
                        $ctx->attr('data-monster-debug', $js);
                        $ctx->attr('data-recursive', 1);
                        $ctx->attr('data-editable-key', $recursive);
                    }
                }

                if ($json->block === null && $json->elem === null) {
                    return $php;
                }
                $ctx->json()->content = $php;
            }



            // it is a child of recursive - itemTemplate or wrapTemplate
            if ($isItemTemplate = $ctx->param('isItemTemplate') && $editMode) {
                // it's itemTemplate

                $js=[];
                $js['itemTemplateInside'] = $isItemTemplate;
                $js['recursiveOf'] = $ctx->param('recursiveOf');

                $ctx->attr('data-monster-debug', \yii\helpers\Json::encode($js));
                $ctx->attr('data-recursive-item', $ctx->param('recursiveOf'));
            }
        }
    ),
    'dataMods' => new Matcher(
        '$after',
        function (Context $ctx, Json $json) {
            if ($ctx->json()->block && $target = $ctx->param('monsterMods')) {
                if ($target === true) {
                    $target = 'data';
                }
                $bem = $ctx->json()->block;
                if ($ctx->json()->elem) {
                    $bem .= '__' . $ctx->json()->elem;
                }
                $ctx->cls(
                    $ctx->cls() . ' ' . "<?= ViewHelpers::modsClass('$bem', \${$target}) ?>"
                );

        //                die("ELEM[$target]: ".$ctx->json()->elem);
            }
        }
    )
    // other matchers will be here
];
