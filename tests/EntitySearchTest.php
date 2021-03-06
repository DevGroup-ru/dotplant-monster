<?php

namespace DotPlant\Monster\tests;

use DotPlant\Monster\components\EntitySearch;
use DotPlant\Monster\Tests\models\Page;
use DotPlant\Monster\Tests\models\Product;
use Yii;
use yii\web\Application;

class EntitySearchTest extends \PHPUnit_Framework_TestCase
{
    protected function getQueryCount()
    {
        $logger = Yii::getLogger();
        if ($logger === null) {
            $this->markTestSkipped('I has no logger');
        }
        return $logger->getDbProfiling()[0];
    }

    public static function setUpBeforeClass()
    {
        $config = require(__DIR__ . '/config/config.php');
        Yii::$app = new Application($config);
        Yii::$app->getModule('properties')->bootstrap(Yii::$app);
    }

    public static function tearDownAfterClass()
    {
        $config = require(__DIR__ . '/config/config.php');
        Yii::$app = new \yii\console\Application($config);
        Yii::$app->setAliases(['@webroot' => __DIR__ . '/fakeweb']);
        Yii::$app->setAliases(['@web' => __DIR__ . '/fakeweb']);
    }

    public function testWhereAttributes()
    {
        $es = new EntitySearch(Page::class);
        $es->whereAttributes(['active' => 0]);
        $this->assertSame(2, count($es->all()));
        $es = new EntitySearch(Page::class);
        $es->whereAttributes(['active' => 1]);
        $this->assertSame(7, count($es->all()));
        // test intersect mode
        $es = new EntitySearch(Product::class);
        $es->whereAttributes(['active' => 0, 'name' => 'Product 3']);
        $this->assertSame(0, $es->count());
        $es = new EntitySearch(Product::class);
        $es->whereAttributes(['active' => 0, 'name' => 'Product 3'], false);
        $this->assertSame(3, $es->count());
    }

    public function testPagination()
    {
        $es = new EntitySearch(Page::class, 2);
        $es->whereAttributes(['active' => 1]);
        $result = $es->all(2);
        $this->assertTrue(isset($result[0]));
        $this->assertEquals('3', $result[0]->id);
    }

    public function testBadPagination()
    {
        $es = new EntitySearch(Page::class, 2);
        $es->whereAttributes(['active' => 1]);
        $result = $es->all(0);
        $this->assertTrue(isset($result[0]));
        $this->assertEquals('1', $result[0]->id);
    }

    public function testWhereAttributesContain()
    {
        // single field
        $es = new EntitySearch(Page::class);
        $es->whereAttributesContain(['content'], 'news');
        $this->assertEquals(1, count($es->all()));
        // multi fields
        $es = new EntitySearch(Page::class);
        $es->whereAttributesContain(['name', 'content'], 'news');
        $this->assertEquals(3, count($es->all()));
        // intersect
        $es = new EntitySearch(Page::class);
        $es->whereAttributesContain(['name', 'content'], 'news', true);
        $this->assertEquals(0, count($es->all()));
    }


    public function testGetList()
    {
        $es = new EntitySearch(Product::class);

        /***
         * @var $product Product
         */
        $product = Product::findOne(['name' => 'Product 6']);
        $this->assertNotNull($product);

        $es->whereAttributes(['name' => 'Product 6']);
        $rows = $es->listData();

        $this->assertSame($product->name, $rows[$product->id]);

        $rows = $es->listData(1, 'content');
        $this->assertSame($product->content, $rows[$product->id]);



    }

    public function testWhereProperties()
    {
        // Single property
        $this->assertEquals(3, count((new EntitySearch(Product::class))->whereProperties([1 => [1]])->all()));
        // Multi property
        $this->assertEquals(2, count((new EntitySearch(Product::class))->whereProperties([1 => [2], 2 => [5]])->all()));
        // Not found
        $this->assertEquals(0, count((new EntitySearch(Product::class))->whereProperties([1 => [85]])->all()));
    }

    public function testMultiCondition()
    {
        // equal and like
        $es = (new EntitySearch(Page::class))->whereAttributesContain(['name', 'content'], 'news')->whereAttributes(['active' => 1]);
        $this->assertEquals(2, count($es->all()));
        // reverse
        $es = (new EntitySearch(Page::class))->whereAttributes(['active' => 1])->whereAttributesContain(['name', 'content'], 'news');
        $this->assertEquals(2, count($es->all()));
        // property + where
        $es = new EntitySearch(Product::class);
        $es->whereProperties([1 => [1]]);
        $es->whereAttributes(['name' => 'Product 3']);
        $this->assertEquals(1, count($es->all()));
    }

    public function testCount()
    {
        $this->assertSame(2, (new EntitySearch(Page::class))->whereAttributes(['active' => 0])->count());
        $this->assertEquals(0, (new EntitySearch(Product::class))->whereProperties([1 => [85]])->count());
    }

    /**
     * @expectedException \yii\base\Exception
     * @expectedExceptionMessage Class not found
     */
    public function testUnknownClass()
    {
        new EntitySearch('bla/bla/bla/Class');
    }

    public function testIsNewQuery()
    {
        $es = (new EntitySearch(Product::class))->whereProperties([1 => [1]]);
        $es->count();
        $queryCount = $this->getQueryCount();
        $es->all();
        $this->assertSame($queryCount + 1, $this->getQueryCount());
    }
}
