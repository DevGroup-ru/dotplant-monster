<?php

namespace DotPlant\Monster;

use BEM\BH;
use BEM\Context;
use BEM\Json;
use BEM\Step;
use DotPlant\Monster\materials\BaseMaterial;
use Yii;
use yii\base\Component;
use yii\base\InvalidConfigException;
use yii\helpers\ArrayHelper;
use yii\helpers\VarDumper;

class MonsterBemBh extends Component
{
    /** @var \BEM\BH */
    public $bh = null;

    public $formatHtml = '  ';

    public $customization = [];

    public $modsDelimiter = '--';

    public $templateCacheDuration = 86400;

    public function init()
    {
        parent::init();
        $this->bh = new BH();
        $this->initBH($this->bh);
    }


    /**
     * Configures BEM\BH class with our needed matchers
     * @param \BEM\BH $bh
     */
    public function initBH(BH &$bh)
    {
        $bh->setOptions([
            'modsDelimiter' => $this->modsDelimiter,
            'indent' => $this->formatHtml,
        ]);

        $bh->match([
            '$after' => function (Context $ctx, Json $json) {

                $clsAdd = [];
                $attrs = $ctx->attrs();

                if (isset($json->phpParam)) {
                    $ctx->content('{{phpParam:'.$json->phpParam.'}}');
                }
                if (isset($json->row)) {
                    $clsAdd[] = 'm-row';
                }
                if (isset($json->utils)) {
                    foreach ($json->utils as $util) {
                        $clsAdd[] = 'g__' . $util;
                    }
                }
                // add new classes
                if (count($clsAdd) > 0) {
                    $ctx->cls(implode(' ', $clsAdd) . ' ' . $ctx->cls(), true);
                }

                if ($json->block) {
                    $attrs['data-bem-match'] = $bemSelector = $json->block . ($json->elem ? '__' . $json->elem : '');

                    // if it's editable
                    if (isset($json->editable) || isset($json->link)) {
                        $attrs['data-editable'] = 1;
                        // find editable prefix
                        $attrs['data-editable-group'] = $prefix = $this->recursiveFindEditableGroup($ctx->node);

                        if (empty($prefix) === false) {
                            $value = <<<php
{{grouppedEditableValue:$prefix::$bemSelector}}
php;
                        } else {
                            $value = <<<php
{{editableValue:$bemSelector}}
php;
                        }

                        $ctx->content($value, true);

                        if (isset($json->link)) {
                            $ctx->tag('a');
                            if (empty($prefix) === false) {
                                $attrs['href'] = "{{grouppedLink:$prefix::$bemSelector}}";
                            } else {
                                $attrs['href'] = "{{link:$bemSelector}}";
                            }
                        }
                    }
                }

                $ctx->attrs($attrs, true);
            },
            'button' => function (Context $ctx) {
                $ctx->tag('button');
            },

        ]);

    }

    private function recursiveFindEditableGroup($node) {
        if ($node === null) {
            return "";
        } elseif (isset($node->json->editableGroup)) {
            return $node->json->editableGroup;
        } elseif (isset($node->parentNode)) {
            return $this->recursiveFindEditableGroup($node->parentNode);
        } else {
            return '';
        }
    }

    /**
     * @param string $bemJson
     * @param array  $params
     * @param array  $editableValues
     * @return string
     */
    public function apply($bemJson, $params = [], $editableValues = [], $templateCacheKey = '')
    {
        Yii::beginProfile('BEM BH');

        /*
         * bh->apply takes about 13-17 ms to compile simple block
         * html formatter takes about 0.7-1 ms to format it
         * preg_replace with params is just only about 0.1ms
         *
         * Also, we can try twig here without preg_replace ^_^
         * UPD: twig is too slow for such use case
         */
        Yii::beginProfile('apply');
        $output = '';
        if ($templateCacheKey !== '') {
            $output = Yii::$app->cache->get($templateCacheKey);
        }
        if (empty($output)) {

            $this->bh->match([
                '$before' => function (Context $ctx, Json $json) use ($editableValues, $params, $templateCacheKey) {
                    if (isset($json->repeatable)) {
                        $repeatable = $json->repeatable;

                        $block = isset($repeatable['block']) ? $repeatable['block'] : $json->block;
                        /** @var BemRepository $repository */
                        $repository = Yii::$app->get('bemRepository');
                        if (!isset($repository->materials[$block])) {
                            throw new InvalidConfigException("Block with name {$block} does not exist.");
                        }
                        if (isset($repeatable['elem'])) {
                            if (!isset($repository->materials[$block]->elements[$repeatable['elem']])) {
                                throw new InvalidConfigException(
                                    "Elem with name {$repeatable['elem']} in block {$block} does not exist."
                                );
                            }
                            $tree = $repository->materials[$block]->elements[$repeatable['elem']]->tree();
                            $block .= '__' . $repeatable['elem'];
                        } else {
                            $tree = $repository->materials[$block];
                        }
                        $content = '';

                        $where = isset($editableValues[$repeatable['iterateOver']]) ?
                            $editableValues[$repeatable['iterateOver']] :
                            $params[$repeatable['iterateOver']];
                        if (!is_array($where)) {
                            throw new InvalidConfigException(
                                "Unable to find iteratable variable {$repeatable['iterateOver']}"
                            );
                        }
                        foreach ($where as $param) {
                            $result = $ctx->bh->apply($tree);
                            $result = $this->postProcess($result, $param, $param);
                            $content .= "$result\n\n";
                        }
                        $ctx->bem(false);
                        $ctx->html($content, true);
                    }
                },
            ]);

            $output = $this->bh->apply($bemJson);
            if ($templateCacheKey !== '') {
                Yii::$app->cache->set(
                    $templateCacheKey,
                    $output,
                    $this->templateCacheDuration
                );
            }
        }
        Yii::endProfile('apply');

        Yii::beginProfile('Replace php params');

        $output = $this->postProcess($output, $params, $editableValues);

        Yii::endProfile('Replace php params');

        Yii::endProfile('BEM BH');

        return $output;
    }

    public function postProcess($output, $params = [], $editableValues = [])
    {
        $output = preg_replace_callback(
            '/{{phpParam:(?<group>[^:]*)::(?<param>[^}]*)}}/S',
            function ($match) use ($params) {
                if (isset($params[$match['group']])) {
                    if (isset($params[$match['group']][$match['param']])) {
                        return $params[$match['group']][$match['param']];
                    }
                    return "<!-- unknown php param {$match['param']} in group {$match['group']} -->";
                }
                return "<!-- unknown php param group {$match['group']} -->";
            },
            $output
        );

        $output = preg_replace_callback(
            '/{{phpParam:([^}]*)}}/S',
            function ($match) use ($params) {
                if (isset($params[$match[1]])) {
                    return $params[$match[1]];
                }
                return "<!-- unknown php param $match[1] -->";
            },
            $output
        );
        $output = preg_replace_callback(
            '/{{editableValue:(?<bemSelector>[^}]*)}}/S',
            function ($match) use ($editableValues) {
                return isset($editableValues[$match['bemSelector']])
                    ? $editableValues[$match['bemSelector']]
                    : '!!Undefined bemSelector:' . $match['bemSelector'] . '!!';
            },
            $output
        );
        $output = preg_replace_callback(
            '/{{grouppedEditableValue:(?<group>[^:]*)::(?<bemSelector>[^}]*)}}/S',
            function ($match) use ($editableValues) {
                return isset($editableValues[$match['group']][$match['bemSelector']])
                    ? $editableValues[$match['group']][$match['bemSelector']]
                    : '!!Undefined bemSelector:' . $match['bemSelector']
                    . '@' . $match['group'] . '!!';
            },
            $output
        );
        return $output;
    }

    public function customize($customization)
    {
        $this->customization = $customization;
        foreach ($customization as $bemSelector => $instructions) {
            $this->bh->match(
                $bemSelector,
                function (Context $ctx, Json $json) use($instructions) {
                    $this->processInstructions($ctx, $json, $instructions);
                }
            );
        }
    }

    public function processInstructions(Context $ctx, Json $json, $instructions)
    {
        Yii::beginProfile("Process instructions");

        foreach ($instructions as $what => $how) {
            switch ($what) {
                case 'mods':
                    $ctx->mods($how);
                    break;
                case 'content':
                    $ctx->content($how, true);
                    break;
                default:
                    if (isset($json->$what)) {
                        if (is_array($json->$what)) {
                            $json->$what = ArrayHelper::merge($json->$what, $how);
                        } elseif (is_string($json->$what)) {
                            $json->$what .= " $how";
                        } else {
                            Yii::warning(
                                "Unknown json->what[$what] type, need to implement it. Current: " .
                                VarDumper::dumpAsString($json->$what) . " Customization: " .
                                VarDumper::dumpAsString($how)
                            );
                            $json->$what = $how;
                        }
                    } else {
                        $json->$what = $how;
                    }
            }
        }
        Yii::endProfile("Process instructions");
    }
}
