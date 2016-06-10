<?php

use DotPlant\Monster\Tests\models\Product;
use yii\db\Migration;
use DevGroup\DataStructure\models\StaticValue;

class m160610_061522_tests extends Migration
{
    public function up()
    {
        $this->createTable(
            Product::tableName(),
            [
                'id' => $this->primaryKey(),
                'name' => $this->string(255),
                'content' => $this->text(),
                'active' => $this->boolean()->defaultValue(1),
            ]
        );
        \DevGroup\DataStructure\helpers\PropertiesTableGenerator::getInstance()->generate(Product::class);
        $p1 = new \DevGroup\DataStructure\models\Property();
        $p1->storage_id = 1; // @todo remove this hardcode
        $p1->property_handler_id = \DevGroup\DataStructure\helpers\PropertyHandlerHelper::getInstance()->handlerIdByClassName(
            \DevGroup\DataStructure\propertyHandler\StaticValues::className()
        );
        $p1->key = 'key_one';
        $p1->data_type = \DevGroup\DataStructure\models\Property::DATA_TYPE_STRING;
        $p1->translate(1)->name = 'First';
        $p1->save();
        $p2 = new \DevGroup\DataStructure\models\Property();
        $p2->storage_id = 1; // @todo remove this hardcode
        $p2->property_handler_id = \DevGroup\DataStructure\helpers\PropertyHandlerHelper::getInstance()->handlerIdByClassName(
            \DevGroup\DataStructure\propertyHandler\StaticValues::className()
        );
        $p2->key = 'key_two';
        $p2->data_type = \DevGroup\DataStructure\models\Property::DATA_TYPE_STRING;
        $p2->translate(1)->name = 'Second';
        $p2->save();
        $sv = new StaticValue($p1);
        $sv->name = 'One';
        $sv->save();
        $sv = new StaticValue($p1);
        $sv->name = 'Two';
        $sv->save();
        $sv = new StaticValue($p1);
        $sv->name = 'Three';
        $sv->save();
        $sv = new StaticValue($p2);
        $sv->name = 'Four';
        $sv->save();
        $sv = new StaticValue($p2);
        $sv->name = 'Five';
        $sv->save();
        $pg = new \DevGroup\DataStructure\models\PropertyGroup(Product::class);
        $pg->internal_name = 'Only one';
        $pg->translate(1)->name = 'Only one';
        $pg->save();
        $pg->link('properties', $p1);
        $pg->link('properties', $p2);
        for ($i = 1; $i <= 10; $i++) {
            $product = new Product();
            $product->name = 'Product ' . $i;
            $product->content = $i;
            $product->active = $i % 4 !== 0;
            $product->save();
            $product->addPropertyGroup($pg);
            $product->key_one = $i % 3 + 1;
            $product->key_two = $i % 2 + 4;
            $product->autoSaveProperties = true;
            $product->save();
        }
    }

    public function down()
    {
        \DevGroup\DataStructure\helpers\PropertiesTableGenerator::getInstance()->drop(Product::tableName());
        $this->dropTable(Product::class);
    }
}
