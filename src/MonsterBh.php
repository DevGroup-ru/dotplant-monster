<?php

namespace DotPlant\Monster;

use BEM\Json;
use DotPlant\Monster\Bundle\Material;
use yii;

/**
 * Class MonsterBh
 *
 * Краткое и корявое объяснение принципа работы:
 * - Annotator нам говорит где какие блоки с какими bemjson лежат
 * - Первичный bemjson раскрывается в полный bemjson с помощью MonsterBhExpander
 * - Раскрытый bemjson кешируется в файл
 * - MonsterBh работает на раскрытом bemjson
 * - Раскрытый bemjson MonsterBh компонует в php-файл (тоже такой кеш своего рода)
 *
 * Зачем нужен MonsterBh?
 * Раскрытый bemjson представляет из себя готовое дерево со всей ГЛОБАЛЬНОЙ кастомизацией блоков
 * При раскрытии также применяются матчеры, преобразующие блок в нужный набор HTML-кода, типа тегов и тп
 *
 * Контекстуальная же кастомизация наворачивается на лету самим MonsterBh.
 * Поскольку глобальная кастомизация и первичное раскрытие - самый долгий процесс, мы сохраняем результат в bemjson
 * В итоге для генерации финального куска PHP-кода у нас используется:
 * - меньше памяти
 * - меньше проходов по матчерам(проходим только по тем, что нужны здесь и сейчас)
 * 
 * ==============
 * MonsterBhExpander раскрывает пакеты блоков(MonsterBundle)
 *
 * @package DotPlant\Monster
 */
class MonsterBh extends BaseBh
{
    /** @var string  */
    public $expander = 'monsterBhExpander';

    /**
     * @return MonsterBhExpander
     */
    public function expander()
    {
        return Yii::$app->get($this->expander);
    }

    /**
     * @param \DotPlant\Monster\Bundle\Material $material
     *
     * @return \BEM\Json
     */
    public function expandedBemJson(Material $material)
    {
        $cacheKey = $this->expander()->cacheKey($material);
        /** @var Json $bemJson */
        $bemJson = $this->cache()->get($cacheKey);
        if ($bemJson === false) {
            // no cache
            // go expand it
            $bemJson = $this->expander()->expandMaterial($material);
        }
        return $bemJson;
    }

    public function initCoreMatchers()
    {
        $this->loadMatchersFile(__DIR__ . '/base-bundle/core.bh.php');
    }
}
