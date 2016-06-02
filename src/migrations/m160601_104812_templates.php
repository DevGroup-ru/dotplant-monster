<?php

use yii\db\Migration;
use yii\helpers\Json;

class m160601_104812_templates extends Migration
{
    public function up()
    {
        $tableOptions = $this->db->driverName === 'mysql'
            ? 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB'
            : null;

        $this->createTable(
            '{{%template}}',
            [
                'id' => $this->primaryKey(),
                'name' => $this->string()->notNull()->defaultValue(''),
                'key' => $this->string(40)->notNull()->defaultValue(''),
                'is_layout' => $this->boolean()->defaultValue(0)->notNull(),
                'packed_json_providers' => 'LONGTEXT NOT NULL',
            ],
            $tableOptions
        );
        $this->createIndex(
            'key-lay',
            '{{%template}}',
            [
                'is_layout',
                'key',
            ]
        );

        // contexts binding
        $this->createTable(
            '{{%template_contexts}}',
            [
                'template_id' => $this->integer()->notNull(),
                'context_id' => $this->integer()->notNull(),
            ],
            $tableOptions
        );
        $this->addPrimaryKey(
            'pr',
            '{{%template_contexts}}',
            [
                'template_id',
                'context_id',
            ]
        );
        $this->addForeignKey(
            'fk-template_context',
            '{{%template_contexts}}',
            'template_id',
            '{{%template}}',
            'id',
            'CASCADE',
            'CASCADE'
        );

        // template regions
        $this->createTable(
            '{{%template_region}}',
            [
                'id' => $this->primaryKey(),
                'template_id' => $this->integer()->notNull(),
                'sort_order' => $this->integer()->notNull()->defaultValue(0),
                'name' => $this->string()->notNull()->defaultValue(''),
                'key' => $this->string()->notNull()->defaultValue(''),
                'entity_dependent' => $this->boolean()->defaultValue(1)->notNull(),
                'packed_json_content' => 'LONGTEXT NOT NULL',
            ],
            $tableOptions
        );
        $this->addForeignKey(
            'fk-template_regions',
            '{{%template_region}}',
            'template_id',
            '{{%template}}',
            'id',
            'CASCADE',
            'CASCADE'
        );
        $this->createIndex(
            'regionsSorted',
            '{{%template_region}}',
            [
                'template_id',
                'sort_order',
            ]
        );

        // base data
        $this->insert(
            '{{%template}}',
            [
                'name' => 'Basic layout',
                'key' => 'basic',
                'is_layout' => 1,
                'packed_json_providers' => '[]',
            ]
        );
        $basicLayoutId = $this->db->lastInsertID;
        $this->insert(
            '{{%template_contexts}}',
            [
                'template_id' => $basicLayoutId,
                'context_id' => 1,
            ]
        );
        $this->insert(
            '{{%template_region}}',
            [
                'template_id' => $basicLayoutId,
                'sort_order' => 1,
                'name' => 'Header',
                'key' => 'header',
                'entity_dependent' => 0,
                'packed_json_content' => '[]'
            ]
        );
        $this->insert(
            '{{%template_region}}',
            [
                'template_id' => $basicLayoutId,
                'sort_order' => 2,
                'name' => 'content',
                'key' => 'Content',
                'entity_dependent' => 0,
                'packed_json_content' => Json::encode([
                    'materials' => [
                        [
                            'material' => 'core.frontend-monster-core.general.content-placeholder',
                        ],
                    ],
                    'providers' => [],
                ])
            ]
        );
        $this->insert(
            '{{%template_region}}',
            [
                'template_id' => $basicLayoutId,
                'sort_order' => 2,
                'name' => 'footer',
                'key' => 'Footer',
                'entity_dependent' => 0,
                'packed_json_content' => '[]'
            ]
        );

    }

    public function down()
    {
        $this->dropTable('{{%template_region}}');
        $this->dropTable('{{%template_contexts}}');
        $this->dropTable('{{%template}}');
    }

    /*
    // Use safeUp/safeDown to run migration code within a transaction
    public function safeUp()
    {
    }

    public function safeDown()
    {
    }
    */
}
