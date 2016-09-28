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
                $debugModule = Yii::$app->getModule('debug');
                if ($debugModule !== false) {
                    Yii::$app->getView()->off(
                        yii\web\View::EVENT_END_BODY,
                        [$debugModule, 'renderToolbar']
                    );
                }
                $editModeVar = MonsterRequest::EDIT_MODE_VAR;
                /**
                 * @todo This should be done as click handler later.
                 */
                $js = <<<js
$(function() {
  $('a').each(function() {
    var LINK = $(this);
    var href = originalHref = LINK.attr('href');
    if (typeof(href) == 'undefined') {
        return false;
    }
    var anchorPart = href.match(/#(.*)$/);
    if (anchorPart) {
      href = href.replace(/#(.*)$/, '');
      anchorPart = anchorPart[0];
    } else {
      anchorPart = '';
    }
    if (href.indexOf('?') > 0) {
      href += '&';
    } else {
      href += '?';
    }
    href += '$editModeVar=1';
    LINK
      .attr('href', href + anchorPart)
      .data('originalHref', originalHref);
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
