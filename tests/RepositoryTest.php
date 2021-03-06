<?php

namespace DotPlant\Monster\Tests;

use DotPlant\Monster\Bundle;
use DotPlant\Monster\MonsterBh;
use DotPlant\Monster\MonsterContent;
use yii;
use yii\helpers\FileHelper;
use yii\helpers\Json;

class RepositoryTest extends \PHPUnit_Framework_TestCase
{
    protected function setUp()
    {

    }

    public function testRepositoryCache()
    {
        // clear cache
        FileHelper::removeDirectory(Yii::getAlias('@app/monster/cache/'));
        /** @var ExtendedRepository $repository */
        $repository = Yii::$app->get('monsterRepository');
        static::assertTrue($repository->bundlesReloaded, 'Cold start must reload bundles');

        /** @var ExtendedRepository $newRepository */
        $newRepository = $this->newRepository();
        static::assertFalse(
            $newRepository->bundlesReloaded,
            'Non-cold start must not reload bundles - use from cached'
        );
    }

    public function testRepositoryRetrieving()
    {
        /** @var ExtendedRepository $repository */
        $repository = $this->newRepository();
        static::assertFalse($repository->bundlesReloaded);

        $bundle = $repository->bundle('example.example-bundle');
        static::assertInstanceOf(Bundle::class, $bundle, 'Bundle should be an instance of our bundle');
        static::assertSame('example.example-bundle', $bundle->fullPath);

        $group = $repository->group('example.example-bundle.group1');
        static::assertInstanceOf(Bundle\Group::class, $group, 'Group should be an instance of our group');
        static::assertSame('example.example-bundle.group1', $group->fullPath);

        $material = $repository->material('example.example-bundle.group1.block1');
        static::assertInstanceOf(Bundle\Material::class, $material, 'Material should be an instance of our material');
        static::assertSame('example.example-bundle.group1.block1', $material->fullPath);

        static::assertNull($repository->bundle('a.b'));
        static::assertNull($repository->group('a.b.c'));
        static::assertNull($repository->material('a.b.c.d'));
        static::assertNull($repository->bundle('a'));

    }

    public function testExpander()
    {
        /** @var ExtendedRepository $repository */
        $repository = $this->newRepository();
        $material = $repository->material('example.example-bundle.group1.block1');
        static::assertInstanceOf(Bundle\Material::class, $material, 'Material should be an instance of our material');

        $referenceRaw = [
            'block' => 'test',
            'content' => [
                [
                    'block' => 'foo-tst',
                    'content' => 'Hello, <?= $data[\'foo\'] ?>',
                ],
                [
                    'block' => 'nav',
                    'tag' => 'ul',
                    'recursive' => 'tree',
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
        $raw = $material->rawBemJson();
        static::assertSame($referenceRaw, $raw);

        // go expand
        $referenceExpanded = [
            'block' => 'test',
            'elem' => null,
            'mix' => null,
            'content' => [
                [
                    'block' => 'foo-tst',
                    'elem' => null,
                    'mix' => null,
                    'content' => 'Hello, <?= $data[\'foo\'] ?>',
                    'tag' => null,
                    'html' => null,
                    'js' => null,
                    'jsAttr' => null,
                    'bem' => null,
                    'cls' => null,
                    'attrs' => null,
                    '_stop' => false,
                    '_matcherCalls' => 0,
                    '_m' => [],
                ],
                [
                    'block' => 'nav',
                    'elem' => null,
                    'mix' => null,
                    'content' => null,
                    'tag' => 'ul',
                    'html' => null,
                    'js' => null,
                    'jsAttr' => null,
                    'bem' => null,
                    'cls' => null,
                    'attrs' => null,
                    '_stop' => false,
                    '_matcherCalls' => 0,
                    '_m' => [],
                    'recursive' => 'tree',
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
            'tag' => null,
            'html' => null,
            'js' => null,
            'jsAttr' => null,
            'bem' => null,
            'cls' => null,
            'attrs' => null,
            '_stop' => false,
            '_matcherCalls' => 0,
            '_m' => [],
        ];

        /** @var MonsterBh $monsterBh */
        $monsterBh = Yii::$app->get('monsterBh');

        $expanded = Json::decode(Json::encode($monsterBh->expandedBemJson($material)));
        $expected = $monsterBh->bh()->apply($referenceExpanded);
        $test = $monsterBh->bh()->apply($expanded);
        $expected= preg_replace("/recursive_uniq\\d+/", "recursive_uniq1", $expected);
        $test= preg_replace("/recursive_uniq\\d+/", "recursive_uniq1", $test);
        static::assertSame($expected, $test);
    }

    public function testMonsterContent()
    {
        // clear cache
        FileHelper::removeDirectory(Yii::getAlias('@app/monster/templates/'));

        $out = MonsterContent::widget([
            'uniqueContentId' => 'site-index',
//            'data' => $this->getSampleData('example.example-bundle.group1.block1'),
            'materials' => [
                'foo' => [
                    'material' => 'example.example-bundle.group1.block1',
                ],
            ],
        ]);

        $expected = <<<html
<div class="test"><div class="foo-tst">Hello, bar</div><ul class="nav">

            <li class="nav__item" data-recursive-item-key="0">One<ul class="nav__subnav nav__subnav_nest_1">            <li class="nav__item" data-recursive-item-key="0">1.1</li>
                        <li class="nav__item" data-recursive-item-key="1">1.2<ul class="nav__subnav nav__subnav_nest_2">            <li class="nav__item" data-recursive-item-key="0">1.2.1</li>
                        <li class="nav__item" data-recursive-item-key="1">1.2.2</li>
            </ul></li>
            </ul></li>

</ul></div>
html;

        $expected = preg_replace('/\s+/', ' ', $expected);
        $out = preg_replace('/\s+/', ' ', $out);
        static::assertSame($expected, $out);

    }

    private function getSampleData($material)
    {
        /** @var ExtendedRepository $repository */
        $repository = Yii::$app->get('monsterRepository');
        $filename = $repository->material($material)->getFsLocation() .'/sample.json';
        return Json::decode(file_get_contents($filename));
    }

    /**
     * @return ExtendedRepository
     * @throws \yii\base\InvalidConfigException
     */
    private function newRepository()
    {
        return Yii::createObject([
            'class' => 'DotPlant\Monster\Tests\ExtendedRepository',
        ]);
    }
}
