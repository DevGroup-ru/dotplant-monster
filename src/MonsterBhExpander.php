<?php

namespace DotPlant\Monster;

use DotPlant\Monster\Bundle\Material;
use yii;

class MonsterBhExpander extends BaseBh
{
    public $expandedBemJsonLifetime = 5184000; // 60 days

    public function expandMaterial(Material $material)
    {
        $rawBemJson = $material->rawBemJson();

        $newMatchers = $this->applyGlobalCustomizations($material, true);

        /** @var \BEM\Json $expandedJson */
        $expandedJson = $this->bh()->processBemJson($rawBemJson);

        // unload expanded
        $this->bh()->removeMatcherById($newMatchers);

        $this->cache()->set(
            $this->cacheKey($material),
            $expandedJson,
            $this->expandedBemJsonLifetime
        );
        return $expandedJson;
    }

    public function cacheKey(Material $material)
    {
        return 'ExpandedBemJson:' . $material->fullPath;
    }


    public function initCoreMatchers()
    {

        // init BEM components ported to php
        // @see https://ru.bem.info/libs/bem-components/3.0.0/
        $matchersList = $this->bemComponentsMatchersList();
        foreach ($matchersList as $file) {
            $matcherFunction = include(
                __DIR__ . DIRECTORY_SEPARATOR .
                'base-bundle' . DIRECTORY_SEPARATOR .
                'core' . DIRECTORY_SEPARATOR .
                $file
            );
            $matcherFunction($this->bh());
        }
        // load our matchers
        $this->loadMatchersFile(__DIR__ . '/base-bundle/core.bh.expander.php');
    }

    public function bemComponentsMatchersList()
    {
        return [
            'common.blocks/textarea/textarea.bh.php',
            'common.blocks/menu-item/menu-item.bh.php',
            'common.blocks/link/link.bh.php',
            'common.blocks/input/input.bh.php',
            'common.blocks/menu/menu.bh.php',
            'common.blocks/modal/modal.bh.php',
            'common.blocks/popup/popup.bh.php',
            'common.blocks/progressbar/progressbar.bh.php',
            'common.blocks/radio-group/radio-group.bh.php',
            'common.blocks/image/image.bh.php',
            'common.blocks/icon/icon.bh.php',
            'common.blocks/dropdown/dropdown.bh.php',
            'common.blocks/control-group/control-group.bh.php',
            'common.blocks/checkbox/checkbox.bh.php',
            'common.blocks/radio/radio.bh.php',
            'common.blocks/spin/spin.bh.php',
            'common.blocks/checkbox-group/checkbox-group.bh.php',
            'common.blocks/select/select.bh.php',
            'common.blocks/button/button.bh.php',
            'common.blocks/attach/attach.bh.php',
            'common.blocks/select/_mode/select_mode_check.bh.php',
            'common.blocks/menu/_mode/menu_mode_radio.bh.php',
            'common.blocks/select/_mode/select_mode_radio.bh.php',
            'common.blocks/select/_mode/select_mode_radio-check.bh.php',
            'common.blocks/select/_focused/select_focused.bh.php',
            'common.blocks/radio-group/_mode/radio-group_mode_radio-check.bh.php',
            'common.blocks/radio/_type/radio_type_button.bh.php',
            'common.blocks/select/__menu/select__menu.bh.php',
            'common.blocks/select/__control/select__control.bh.php',
            'common.blocks/radio/__box/radio__box.bh.php',
            'common.blocks/radio/__control/radio__control.bh.php',
            'common.blocks/select/__button/select__button.bh.php',
            'common.blocks/radio/__text/radio__text.bh.php',
            'common.blocks/menu/_focused/menu_focused.bh.php',
            'common.blocks/attach/__button/attach__button.bh.php',
            'common.blocks/menu/__group/menu__group.bh.php',
            'common.blocks/checkbox/__control/checkbox__control.bh.php',
            'common.blocks/attach/__control/attach__control.bh.php',
            'common.blocks/attach/__file/attach__file.bh.php',
            'common.blocks/attach/__no-file/attach__no-file.bh.php',
            'common.blocks/attach/__text/attach__text.bh.php',
            'common.blocks/button/__text/button__text.bh.php',
            'common.blocks/button/_focused/button_focused.bh.php',
            'common.blocks/button/_togglable/button_togglable.bh.php',
            'common.blocks/button/_type/button_type_link.bh.php',
            'common.blocks/checkbox/__box/checkbox__box.bh.php',
            'common.blocks/checkbox/__text/checkbox__text.bh.php',
            'common.blocks/menu-item/_type/menu-item_type_link.bh.php',
            'common.blocks/checkbox/_type/checkbox_type_button.bh.php',
            'common.blocks/dropdown/_switcher/dropdown_switcher_button.bh.php',
            'common.blocks/dropdown/_switcher/dropdown_switcher_link.bh.php',
            'common.blocks/input/__box/input__box.bh.php',
            'common.blocks/input/__clear/input__clear.bh.php',
            'common.blocks/input/__control/input__control.bh.php',
            'common.blocks/input/_has-clear/input_has-clear.bh.php',
            'common.blocks/input/_type/input_type_password.bh.php',
            'common.blocks/attach/__clear/attach__clear.bh.php',
            'common.blocks/link/_pseudo/link_pseudo.bh.php',
            'common.blocks/input/_type/input_type_search.bh.php',
        ];
    }
}
