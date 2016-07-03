import './bundle.css';


// Documentation is located at https://github.com/zenwalker/jquery-bem#jquerybem
import './libs/jquery.bem';

// Reconfigure BEM naming
$.BEM.setConfig({
  namePattern: '[a-zA-Z0-9\\-]+',
  elemPrefix: '__',
  modPrefix: '--',
  modDlmtr: '_',
});


import MonsterBem from './general/MonsterBem';
window.MonsterBem = new MonsterBem();

/* global $ */
$(() => {
  window.MonsterBem.update();
});
