import './bundle.css';
/*
 This bundle is included into every page
 */

// Documentation is located at https://github.com/zenwalker/jquery-bem#jquerybem
import './libs/jquery.bem';

// Reconfigure BEM naming
$.BEM.setConfig({
  namePattern: '[a-zA-Z0-9\\-]+',
  elemPrefix: '__',
  modPrefix: '_',
  modDlmtr: '_',
});


import MonsterBem from './general/MonsterBem';
window.MonsterBem = new MonsterBem();

import DialogHelper from './general/DialogHelper';
window.DialogHelper = DialogHelper;

/* global $ */
$(() => {
  window.MonsterBem.update();
});
