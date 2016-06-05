<?php

namespace DotPlant\Monster\behaviors;

use yii;

class MonsterRequest extends yii\base\Behavior
{
    const EDIT_MODE_VAR = '__monster_edit_mode__';

    public function attach($owner)
    {
        parent::attach($owner);
        Yii::$app->on(yii\web\Application::EVENT_BEFORE_ACTION, function () {
            if ($this->isEditMode()) {
                $editModeVar = MonsterRequest::EDIT_MODE_VAR;
                $js = <<<js
$(function() {
  $('a').each(function() {
    var href = $(this).attr('href');
    var anchorPart = href.match(/#(.*)$/);
    if (anchorPart) {
      href = href.replace(/#(.*)$/, '');
      anchorPart=anchorPart[0];
    } else {
      anchorPart = '';
    }
    console.log(href,anchorPart);
    if (href.indexOf('?') > 0) {
      href += '&';
    } else {
      href += '?';
    }
    href += '$editModeVar=1';
    $(this).attr('href', href+anchorPart);
  });
});
js;

                Yii::$app->controller->view->registerJs($js, yii\web\View::POS_END, 'edit-mode-links-fix');
            }
        });
    }

    public function isEditMode()
    {
        return (bool) Yii::$app->request->get(self::EDIT_MODE_VAR, false);
    }
}
