import WYSIWYG from './WYSIWYG';
import image from './image';
import link from './link';
import StringEditable from './string';

export default function all() {
  if (typeof(window.MONSTER_EDITABLES) === 'undefined') {
    window.MONSTER_EDITABLES = {};
  }
  window.MONSTER_EDITABLES['wysiwyg'] = WYSIWYG;
  window.MONSTER_EDITABLES['link'] = link;
  window.MONSTER_EDITABLES['image'] = image;
  window.MONSTER_EDITABLES['string'] = StringEditable;
}