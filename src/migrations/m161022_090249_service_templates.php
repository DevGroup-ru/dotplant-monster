<?php

use yii\db\Migration;

class m161022_090249_service_templates extends Migration
{
    public function up()
    {
        $tableOptions = $this->db->driverName === 'mysql'
            ? 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB'
            : null;

        $this->createTable(
            '{{%service_template}}',
            [
                'id' => $this->primaryKey(),
                'name' => $this->string()->notNull()->defaultValue(''),
                'key' => $this->string(80)->notNull()->defaultValue(''),
                'template_id' => $this->integer()->notNull()->defaultValue(0),
                'layout_id' => $this->integer()->notNull()->defaultValue(0),
            ],
            $tableOptions
        );
        $this->addForeignKey(
            'fkServiceTemplate',
            '{{%service_template}}',
            'layout_id',
            '{{%template}}',
            'id',
            'CASCADE',
            'CASCADE'
        );
        $this->addForeignKey(
            'fkServiceLayout',
            '{{%service_template}}',
            'template_id',
            '{{%template}}',
            'id',
            'CASCADE',
            'CASCADE'
        );
        $this->createIndex(
            'byKey',
            '{{%service_template}}',
            'key'
        );
    }

    public function down()
    {
        $this->dropTable('{{%service_template}}');
    }
}
