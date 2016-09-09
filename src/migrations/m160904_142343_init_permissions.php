<?php

use app\helpers\PermissionsHelper;
use yii\db\Migration;

class m160904_142343_init_permissions extends Migration
{
    private static $rules = [
        'MonsterTemplateManager' => [
            'descr' => 'Template Management Role',
            'permits' => [
                'dotplant-monster-template' => 'Manage templates and layouts',
            ],
        ],
        'MonsterContentAdministrator' => [
            'descr' => 'Monster Content Administration Role',
            'permits' => [
                'dotplant-monster-bundles' => 'Manage Monster bundles',
            ],
            'roles' => [
                'MonsterTemplateManager',
            ],
        ],
    ];

    public function up()
    {
        PermissionsHelper::createPermissions(self::$rules);
    }

    public function down()
    {
        PermissionsHelper::removePermissions(self::$rules);
    }
}
