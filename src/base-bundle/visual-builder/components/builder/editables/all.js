import WYSIWYG from './WYSIWYG';
import StringEditable from './string';

export default function(){
  if (typeof(window.MONSTER_EDITABLES) === 'undefined') {
    window.MONSTER_EDITABLES = {};
  }
  window.MONSTER_EDITABLES['wysiwyg'] = WYSIWYG;
  window.MONSTER_EDITABLES['string'] = StringEditable;
}