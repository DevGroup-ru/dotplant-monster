import './bundle.css';


// Documentation is located at https://github.com/zenwalker/jquery-bem#jquerybem
import './node_modules/jquery-bem/jquery.bem';

// Reconfigure BEM naming
$.BEM.setConfig({
  namePattern: '[a-zA-Z0-9-]+',
  elemPrefix: '__',
  modPrefix: '--',
  modDlmtr: '_',
});
