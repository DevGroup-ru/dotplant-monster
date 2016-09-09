<?php

use DotPlant\Monster\models\Template;
use DotPlant\Monster\models\TemplateRegion;
use yii\db\Migration;

class m160908_124448_default_template extends Migration
{
    public function up()
    {
        $this->addColumn(
            Template::tableName(),
            'is_deleted',
            $this->boolean()->notNull()->defaultValue(false)
        );
        $this->insert(
            Template::tableName(),
            [
                'key' => 'basic-template',
                'is_layout' => 0,
                'packed_json_providers' => '[]',
            ]
        );
        $templateId = $this->db->lastInsertID;
        $this->insert(
            TemplateRegion::tableName(),
            [
                'template_id' => $templateId,
                'name' => 'Content',
                'key' => 'content',
                'entity_dependent' => 1,
                'packed_json_content' => '[]',
            ]
        );

    }

    public function down()
    {
        $template = Template::findByKey('basic-template');
        if ($template !== null) {
            $template->delete();
        }
        $this->dropColumn(
            Template::tableName(),
            'is_deleted'
        );
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
