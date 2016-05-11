<?php

namespace DotPlant\Monster\tests;

use BEM\BH;
use DotPlant\Monster\Bundle;
use yii;
use yii\helpers\ArrayHelper;

class BhTest extends \PHPUnit_Framework_TestCase
{
    /** @var BH */
    protected $bh;

    protected function setUp()
    {
        $this->bh = new BH();
        $this->bh->setOptions([
            'modsDelimiter' => '--',
//            'indent' => '  ',
        ]);
    }

    public function testOne()
    {
        $this->assertTrue(true);
        return;
        $tree = [
            [
                'label' => 'One',
                'children' => [
                    [
                        'label' => '1.1',
                    ],
                    [
                        'label' => '1.2',
                        'children' => [
                            [
                                'label' => '1.2.1',
                                'red' => true,
                            ],
                            [
                                'label' => '1.2.2',
                            ]
                        ]
                    ]
                ]
            ]
        ];
        $data = [
            'foo' => 'bar',
            'tree' => $tree,
        ];
        $bemJson = [
            'block' => 'test',
            'content' => [
                [
                    'block' => 'foo-tst',
                    'content' => "Hello, <?= \$data['foo'] ?>",
                ],
                [
                    'block' => 'nav',
                    'tag' => 'ul',
                    'recursive' => '$data["tree"]',
                    'itemTemplate' => [
                        'elem' => 'item',
                        'tag' => 'li',
                        'content' => '<?= $item["label"] ?>',


                    ],
                    'wrapTemplate' => [
                        'elem' => 'subnav',
                        'tag' => 'ul',
                        'mods' => [
                            'nest' => '<?=$recursiveNestingLevel?>',
                        ],
                    ],
                    'childrenAttribute' => 'children',
                ],
            ],
        ];

//
        $this->bh->match(
            '$before',
            function(\BEM\Context $ctx, \BEM\Json $json) {
                if ($ctx->param('recursive') !== null && $ctx->param('itemTemplate') !== null) {
                    $recursive = (string) $ctx->param('recursive');
                    $itemTemplate = $ctx->bh->apply($ctx->process($ctx->param('itemTemplate')));
                    $childrenAttribute = $ctx->param('childrenAttribute') ?: 'children';
                    $uniq = '$recursive_' . $ctx->generateId();

                    $wrapChildrenJson = $ctx->param('wrapTemplate') ?: [
                        'bem' => false,
                    ];
                    /**
                     * @todo itemTemplate - контекстуальный или нет
                     * @todo wrapTemplate - контекстуальный или нет(применять $ctx->process?)
                     */
                    $wrapChildrenJson['content'] =
                        "<?php $uniq(\$item['$childrenAttribute'], \$recursiveNestingLevel+1); ?>";
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
        );
//        $processed = $this->bh->processBemJson($bemJson);


        $html = $this->bh->apply($bemJson);
        echo $html."\n\n===========\n\n\n";
        $dumped = var_export($data, true);
        file_put_contents('/tmp/c.php', <<<php
<?php
\$data = $dumped;
?>
$html
php
);
        include('/tmp/c.php');
        echo "\n\n=11=====\n\n";
        self::assertFalse(true);
    }

    public function testBundle()
    {
//        $bundle = new Bundle(__DIR__.'/bundles/example-bundle/');
//        $bundle->process();
//        $encoded = serialize($bundle);
//        echo "$encoded\n\n======\ndecoded:\n\n";
//        /** @var Bundle $decoded */
//        $decoded = unserialize($encoded);
//        var_dump($decoded);
//        echo "\n\n\n";
//        /** @var Bundle\Material $material */
//        $material = ArrayHelper::getValue($decoded, 'groups.group1.materials.block1');
//        var_dump($material);
////        $material->loadManifest();
////        var_dump($material->getManifest());
//        echo "\n\n\n";
//        die();
        

        
    }
}
