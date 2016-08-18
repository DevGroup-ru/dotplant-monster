import WYSIWYG from './WYSIWYG';
import Image from './image';
import Link from './link';
import TextString from './string';

export default function all() {
  if (typeof(window.MONSTER_EDITABLES) === 'undefined') {
    window.MONSTER_EDITABLES = {};
  }
  window.MONSTER_EDITABLES['wysiwyg'] = new WYSIWYG();
  window.MONSTER_EDITABLES['link'] = new Link();
  window.MONSTER_EDITABLES['image'] = new Image();
  window.MONSTER_EDITABLES['string'] = new TextString();
}