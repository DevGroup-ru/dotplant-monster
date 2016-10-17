/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(32);
	
	var _FrontendMonster = __webpack_require__(11);
	
	var _FrontendMonster2 = _interopRequireDefault(_FrontendMonster);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.FrontendMonster = new _FrontendMonster2.default();
	//

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _FrameApi = __webpack_require__(3);
	
	var _FrameApi2 = _interopRequireDefault(_FrameApi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BaseEnvironment = function () {
	  function BaseEnvironment(visualBuilder, name) {
	    _classCallCheck(this, BaseEnvironment);
	
	    this.visualBuilder = visualBuilder;
	    this.name = name;
	    this.target = $(this.visualBuilder.settings['frame-selector'])[0].contentWindow;
	  }
	
	  _createClass(BaseEnvironment, [{
	    key: 'activate',
	    value: function activate() {
	      // deactivate current selected environment
	      if (this.name === this.visualBuilder.currentEnvironment) {
	        return;
	      }
	      if (this.visualBuilder.currentEnvironment) {
	        this.visualBuilder.environments.get(this.visualBuilder.currentEnvironment).deactivate();
	      }
	    }
	  }, {
	    key: 'deactivate',
	    value: function deactivate() {
	      this.visualBuilder.clearStackable();
	    }
	  }, {
	    key: 'sendMessage',
	    value: function sendMessage(func, args) {
	      return _FrameApi2.default.sendMessage(this.target, func, args);
	    }
	  }, {
	    key: 'pageChanged',
	    value: function pageChanged() {}
	  }, {
	    key: 'target$',
	    get: function get() {
	      return this.target.$;
	    }
	  }]);
	
	  return BaseEnvironment;
	}();
	
	exports.default = BaseEnvironment;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BaseEditable = function () {
	  function BaseEditable() {
	    _classCallCheck(this, BaseEditable);
	  }
	
	  _createClass(BaseEditable, [{
	    key: "serializeNode",
	    value: function serializeNode($node) {}
	  }, {
	    key: "initializeEditable",
	    value: function initializeEditable($node) {}
	  }], [{
	    key: "frame$",
	    get: function get() {
	      return window.$;
	    }
	  }]);
	
	  return BaseEditable;
	}();
	
	exports.default = BaseEditable;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var FrameApi = function () {
	  function FrameApi() {
	    _classCallCheck(this, FrameApi);
	  }
	
	  _createClass(FrameApi, null, [{
	    key: 'bindMessageListener',
	    value: function bindMessageListener(listener) {
	      var callback = function callbackHandler(event) {
	        var message = null;
	        if (FrameApi.isIe) {
	          message = JSON.parse(event.data);
	        } else {
	          message = event.data;
	        }
	
	        if (listener[message.func]) {
	          listener[message.func].apply(listener, message.args);
	        }
	      };
	
	      if (window.addEventListener) {
	        window.addEventListener('message', callback);
	      } else {
	        // IE8
	        window.attachEvent('onmessage', callback);
	      }
	    }
	  }, {
	    key: 'sendMessage',
	    value: function sendMessage(target, func, args) {
	      var data = {
	        func: func,
	        args: args
	      };
	      var message = FrameApi.isIe ? JSON.stringify(data) : data;
	
	      target.postMessage(message, '*');
	    }
	  }, {
	    key: 'isIe',
	    get: function get() {
	      /* global is */
	      if (typeof is !== 'undefined') {
	        return is.ie(); // || is.edge();
	      }
	
	      return true;
	    }
	  }]);
	
	  return FrameApi;
	}();
	
	exports.default = FrameApi;

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _VisualBuilder = __webpack_require__(12);
	
	var _VisualBuilder2 = _interopRequireDefault(_VisualBuilder);
	
	var _VisualFrame = __webpack_require__(23);
	
	var _VisualFrame2 = _interopRequireDefault(_VisualFrame);
	
	var _HashApi = __webpack_require__(22);
	
	var _HashApi2 = _interopRequireDefault(_HashApi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var FrontendMonster = function () {
	  function FrontendMonster() {
	    _classCallCheck(this, FrontendMonster);
	
	    this.params();
	    this.visualBulder = null;
	    this.hashApi = new _HashApi2.default();
	    if (window.parent !== window && window.parent.FrontendMonster) {
	      if (window.parent.FrontendMonster.hasBuilder) {
	        this.VisualFrame = new _VisualFrame2.default();
	      }
	    }
	    /* global smoothScroll: false*/
	    if (typeof smoothScroll !== 'undefined') {
	      smoothScroll.init();
	    }
	  }
	
	  /**
	   * Returns VisualBuilder class instance
	   * @returns VisualBuilder
	   */
	
	
	  _createClass(FrontendMonster, [{
	    key: 'params',
	
	
	    /**
	     * Sets FrontendMonster settings.
	     * Uses FrontendMonsterSettings variable if provided or default values instead.
	     */
	    value: function params() {
	      var userSettings = window.FrontendMonsterSettings || {};
	      var settings = {};
	      Object.keys(userSettings).forEach(function (key) {
	        settings[key] = userSettings[key];
	      });
	      this.settings = settings;
	    }
	  }, {
	    key: 'builder',
	    get: function get() {
	      if (this.visualBulder === null) {
	        this.visualBulder = new _VisualBuilder2.default();
	      }
	      return this.visualBulder;
	    }
	
	    /**
	     * If this FrontendMonster instance has Visual Builder on page
	     * @returns {boolean}
	     */
	
	  }, {
	    key: 'hasBuilder',
	    get: function get() {
	      return this.builder.$builder.length === 1;
	    }
	  }]);
	
	  return FrontendMonster;
	}();
	
	exports.default = FrontendMonster;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _SiteStructureEnvironment = __webpack_require__(17);
	
	var _SiteStructureEnvironment2 = _interopRequireDefault(_SiteStructureEnvironment);
	
	var _MaterialsEnvironment = __webpack_require__(15);
	
	var _MaterialsEnvironment2 = _interopRequireDefault(_MaterialsEnvironment);
	
	var _CustomizationEnvironment = __webpack_require__(14);
	
	var _CustomizationEnvironment2 = _interopRequireDefault(_CustomizationEnvironment);
	
	var _ActionEnvironment = __webpack_require__(13);
	
	var _ActionEnvironment2 = _interopRequireDefault(_ActionEnvironment);
	
	var _PageStructureEnvironment = __webpack_require__(16);
	
	var _PageStructureEnvironment2 = _interopRequireDefault(_PageStructureEnvironment);
	
	var _FrameApi = __webpack_require__(3);
	
	var _FrameApi2 = _interopRequireDefault(_FrameApi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import Editable from './Editable';
	
	var VisualBuilder = function () {
	  function VisualBuilder() {
	    _classCallCheck(this, VisualBuilder);
	
	    this.params();
	    this.resolutionSwitcher();
	
	    this.environments = new Map([['site-structure', new _SiteStructureEnvironment2.default(this, 'site-structure')], ['page-structure', new _PageStructureEnvironment2.default(this, 'page-structure')], ['materials', new _MaterialsEnvironment2.default(this, 'materials')], ['customization', new _CustomizationEnvironment2.default(this, 'customization')], ['action', new _ActionEnvironment2.default(this, 'action')]]);
	
	    this.environmentSelector();
	
	    // select first environment by default
	    this.switchEnvironment('site-structure');
	    $('.monster-environment-selector__environment-link').first().mod('active', true);
	    _FrameApi2.default.bindMessageListener(this);
	
	    // this.editable = new Editable();
	
	    this.controls();
	  }
	
	  /**
	   * Sets VisualBuilder settings.
	   * Uses VisualBuilderSettings variable if provided or default values instead.
	   */
	
	
	  _createClass(VisualBuilder, [{
	    key: 'params',
	    value: function params() {
	      var userSettings = window.VisualBuilderSettings || {};
	      var settings = {
	        'element-selector': '.monster-visual-builder',
	        'frame-selector': '.monster-visual-frame',
	        bundles: {},
	        'stackable-container-class': 'monster-stackable-container',
	        'new-block-url': '/monster/visual-builder/new-block'
	      };
	      Object.keys(userSettings).forEach(function (key) {
	        settings[key] = userSettings[key];
	      });
	      this.settings = settings;
	      this.$builder = $(this.settings['element-selector']);
	      this.$stackable = $('.' + this.settings['stackable-container-class']);
	    }
	  }, {
	    key: 'resolutionSwitcher',
	    value: function resolutionSwitcher() {
	      var that = this;
	      var bemElem = 'resolution-switcher__resolution-link';
	
	      var $resolutionLinks = $('.' + bemElem);
	      $resolutionLinks.click(function callback() {
	        $resolutionLinks.mod('active', false);
	        $(that.settings['frame-selector']).width($(this).data('resolutionWidth'));
	        $(this).mod('active', true);
	        return false;
	      });
	    }
	  }, {
	    key: 'environmentSelector',
	    value: function environmentSelector() {
	      var that = this;
	      var bemElem = 'monster-environment-selector__environment-link';
	
	      var $sectionLinks = $('.' + bemElem);
	      $sectionLinks.click(function callback() {
	        var environmentName = $(this).data('environmentName');
	        if (that.currentEnvironment === environmentName) {
	          $sectionLinks.mod('active', false);
	          that.environments.get(environmentName).deactivate();
	          that.currentEnvironment = null;
	          return false;
	        }
	
	        $sectionLinks.mod('active', false);
	        that.switchEnvironment(environmentName);
	        $(this).mod('active', true);
	        return false;
	      });
	    }
	  }, {
	    key: 'switchEnvironment',
	    value: function switchEnvironment(environmentName) {
	      this.environments.get(environmentName).activate();
	      this.currentEnvironment = environmentName;
	    }
	  }, {
	    key: 'clearStackable',
	    value: function clearStackable() {
	      this.$stackable.empty();
	    }
	  }, {
	    key: 'createStackablePane',
	    value: function createStackablePane() {
	      var paneClass = this.settings['stackable-container-class'] + '__pane';
	      var modifier = this.$stackable.find('.' + paneClass).length === 0 ? paneClass + '_first' : '';
	      var $newPane = $('<div class="' + paneClass + ' ' + modifier + '"></div>');
	      this.$stackable.append($newPane);
	      return $newPane;
	    }
	  }, {
	    key: 'materialByName',
	    value: function materialByName(name) {
	      if (this.settings.materials.hasOwnProperty(name)) {
	        return this.settings.materials[name];
	      }
	      return null;
	    }
	  }, {
	    key: 'serialize',
	    value: function serialize() {
	      // FrameApi.sendMessage(this.frameContentWindow, 'serializeContent', ['log']);
	      var result = this.environments.get('page-structure').serializePage();
	      console.log(result);
	
	      // we have result which is content in format:
	      // region
	      // --- material id
	      // ------- keys => values
	      //
	      // our Providers should get only those keys that they provide
	      // provided keys are stored in frameContentWindow.MONSTER_EDIT_MODE_DATA.template.providedKeys
	      var resultByProviders = {};
	      var providedKeys = this.frameContentWindow.MONSTER_EDIT_MODE_DATA.template.providedKeys;
	
	      Object.keys(providedKeys).forEach(function (providerIndex) {
	        resultByProviders[providerIndex] = {};
	
	        var regions = providedKeys[providerIndex];
	
	        Object.keys(regions).forEach(function (regionKey) {
	          if (result.hasOwnProperty(regionKey) === false) {
	            return;
	          }
	          resultByProviders[providerIndex][regionKey] = {};
	
	          // go deep to material indeces
	          var materials = regions[regionKey];
	
	          Object.keys(materials).forEach(function (materialIndex) {
	            if (result[regionKey].hasOwnProperty(materialIndex) === false) {
	              return;
	            }
	            resultByProviders[providerIndex][regionKey][materialIndex] = {};
	
	            var dataKeys = materials[materialIndex];
	
	            dataKeys.forEach(function (key) {
	              if (result[regionKey][materialIndex].hasOwnProperty(key) === false) {
	                return;
	              }
	              resultByProviders[providerIndex][regionKey][materialIndex][key] = result[regionKey][materialIndex][key];
	            });
	          });
	        });
	      });
	      console.log(resultByProviders);
	      return resultByProviders;
	    }
	  }, {
	    key: 'pageChanged',
	    value: function pageChanged() {
	      this.environments.forEach(function (environment) {
	        return environment.pageChanged();
	      });
	    }
	  }, {
	    key: 'log',
	    value: function log(result) {
	      console.log(result);
	    }
	  }, {
	    key: 'controls',
	    value: function controls() {
	      var _this = this;
	
	      this.$controls = this.$builder.find('.controls_left').first();
	      this.$controls.elem('refresh').click(function () {
	        _this.frameContentWindow.location.reload();
	        return false;
	      });
	
	      this.$controls.elem('save').click(function () {
	        _FrameApi2.default.sendMessage(_this.frameContentWindow, 'save');
	        return false;
	      });
	      this.$controlsRight = this.$builder.find('.controls_right').first();
	      this.$controlsRight.elem('clear-cache').click(function () {
	        /* global window: false */
	        /* eslint-disable no-param-reassign, no-unused-vars */
	        window.DialogHelper.builderDialog().onAjaxLoad(function (data, $target, dialog, dataChanger) {
	          dataChanger(data ? '<div>OK</div>' : '<div>Error</div>');
	          return true;
	        }).ajax({
	          url: '/monster/bundles/clear-cache',
	          method: 'POST',
	          dataType: 'json'
	        }).autoDestroy().show();
	        /* eslint-enable no-param-reassign, no-unused-vars */
	        return false;
	      });
	    }
	  }, {
	    key: 'frameContentWindow',
	    get: function get() {
	      return $(this.settings['frame-selector'])[0].contentWindow;
	    }
	  }]);
	
	  return VisualBuilder;
	}();
	
	exports.default = VisualBuilder;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BaseEnvironment2 = __webpack_require__(1);
	
	var _BaseEnvironment3 = _interopRequireDefault(_BaseEnvironment2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ActionEnvironment = function (_BaseEnvironment) {
	  _inherits(ActionEnvironment, _BaseEnvironment);
	
	  function ActionEnvironment() {
	    _classCallCheck(this, ActionEnvironment);
	
	    return _possibleConstructorReturn(this, (ActionEnvironment.__proto__ || Object.getPrototypeOf(ActionEnvironment)).apply(this, arguments));
	  }
	
	  return ActionEnvironment;
	}(_BaseEnvironment3.default);
	
	exports.default = ActionEnvironment;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BaseEnvironment2 = __webpack_require__(1);
	
	var _BaseEnvironment3 = _interopRequireDefault(_BaseEnvironment2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CustomizationEnvironment = function (_BaseEnvironment) {
	  _inherits(CustomizationEnvironment, _BaseEnvironment);
	
	  function CustomizationEnvironment() {
	    _classCallCheck(this, CustomizationEnvironment);
	
	    return _possibleConstructorReturn(this, (CustomizationEnvironment.__proto__ || Object.getPrototypeOf(CustomizationEnvironment)).apply(this, arguments));
	  }
	
	  return CustomizationEnvironment;
	}(_BaseEnvironment3.default);
	
	exports.default = CustomizationEnvironment;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _BaseEnvironment2 = __webpack_require__(1);
	
	var _BaseEnvironment3 = _interopRequireDefault(_BaseEnvironment2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MaterialsEnvironment = function (_BaseEnvironment) {
	  _inherits(MaterialsEnvironment, _BaseEnvironment);
	
	  function MaterialsEnvironment(visualBuilder, name) {
	    _classCallCheck(this, MaterialsEnvironment);
	
	    var _this = _possibleConstructorReturn(this, (MaterialsEnvironment.__proto__ || Object.getPrototypeOf(MaterialsEnvironment)).call(this, visualBuilder, name));
	
	    _this.initMaterialsSelector();
	    return _this;
	  }
	
	  _createClass(MaterialsEnvironment, [{
	    key: 'initMaterialsSelector',
	    value: function initMaterialsSelector() {
	      var _this2 = this;
	
	      this.$materialsGroups = $('<ul class="materials-groups"></ul>');
	      this.$materialsList = [];
	
	      this.visualBuilder.settings.bundles.forEach(function (bundle) {
	        /* global polyglot: false */
	        var i18nBundleName = typeof polyglot !== 'undefined' ? polyglot.t(bundle.name) : bundle.name;
	
	        var $bundleTitle = '\n      <li class="materials-groups__item materials-groups__item--bundle-label">\n        <a href="#" class="materials-groups__switch-bundle" data-bundle-path="' + bundle.fullPath + '">\n            ' + i18nBundleName + '\n        </a>\n      </li>\n      ';
	        _this2.$materialsList.push($bundleTitle);
	
	        bundle.groups.forEach(function (group) {
	          var groupName = group.name;
	          var materials = group.materials;
	          var i18nGroupName = typeof polyglot !== 'undefined' ? polyglot.t(groupName) : groupName;
	          var $li = $('\n    <li class="materials-groups__item">\n      <a href="#" data-group-path="' + group.fullPath + '" class="materials-groups__switch-group">\n        ' + i18nGroupName + ' <span class="materials-groups__count">(' + materials.length + ')</span>\n      </a>\n    </li>');
	          _this2.$materialsGroups.append($li);
	          var $list = $('<ul class="materials-list" data-group-path="' + group.fullPath + '"></ul>');
	          var items = [];
	
	          materials.forEach(function (material) {
	            var materialName = material.name;
	            var i18nMaterialName = typeof polyglot !== 'undefined' ? polyglot.t(materialName) : materialName;
	            var $item = $('\n<li>\n  <a href="#" class="materials-list__item" data-material-path="' + material.fullPath + '">\n    ' + i18nMaterialName + '\n  </a>\n</li>\n');
	            items.push($item);
	          });
	          $list.append(items);
	          _this2.$materialsList.push($list);
	        });
	      });
	
	      var that = this;
	      /* global document: false */
	      $(document).on('click', '.materials-groups__switch-group', function clickHandler() {
	        var $this = $(this);
	        $this.toggleMod('active');
	        var groupPath = $this.data('groupPath');
	        if ($this.mod('active')) {
	          $('.materials-groups__switch-group').mod('active', false);
	
	          $('.materials-list').each(function it() {
	            var $list = $(this);
	            if ($list.mod('active')) {
	              $list.mod('active', false);
	            }
	            if ($list.data('groupPath') === groupPath) {
	              $list.mod('active', true);
	            }
	          });
	
	          $this.mod('active', true);
	          that.$materialsPane.show();
	        } else {
	          // that's just second click on the same group
	          that.$materialsPane.hide();
	        }
	        return false;
	      });
	
	      $(document).on('click', '.materials-list__item', function clickHandler() {
	        var PageStructureEnv = that.visualBuilder.environments.get('page-structure');
	
	        var selectedRegionKey = PageStructureEnv.selectedRegionKey;
	        var selectedEntity = PageStructureEnv.selectedEntity;
	
	        if (selectedRegionKey !== null && selectedEntity !== null) {
	          that.sendMessage('newBlock', [$(this).data('materialPath'), selectedEntity, selectedRegionKey]);
	        }
	      });
	    }
	  }, {
	    key: 'activate',
	    value: function activate() {
	      _get(MaterialsEnvironment.prototype.__proto__ || Object.getPrototypeOf(MaterialsEnvironment.prototype), 'activate', this).call(this);
	
	      this.$groupsPane = this.visualBuilder.createStackablePane();
	      this.$groupsPane.append(this.$materialsGroups);
	
	      this.$materialsPane = this.visualBuilder.createStackablePane();
	      this.$materialsPane.append(this.$materialsList);
	      this.$materialsPane.hide();
	
	      /*
	      const PageStructureEnv = that.visualBuilder.environments.get('page-structure');
	       const selectedRegionKey = PageStructureEnv.selectedRegionKey;
	      const selectedEntity = PageStructureEnv.selectedEntity;
	       @todo check for selectedRegion if not - we must not add block here
	      */
	
	      $('.materials-groups__switch-group').mod('active', false);
	    }
	  }]);
	
	  return MaterialsEnvironment;
	}(_BaseEnvironment3.default);
	
	exports.default = MaterialsEnvironment;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _BaseEnvironment2 = __webpack_require__(1);
	
	var _BaseEnvironment3 = _interopRequireDefault(_BaseEnvironment2);
	
	var _MaterialControls = __webpack_require__(40);
	
	var _MaterialControls2 = _interopRequireDefault(_MaterialControls);
	
	var _PageIterator = __webpack_require__(42);
	
	var _PageIterator2 = _interopRequireDefault(_PageIterator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PageStructureEnvironment = function (_BaseEnvironment) {
	  _inherits(PageStructureEnvironment, _BaseEnvironment);
	
	  function PageStructureEnvironment(visualBuilder, name) {
	    _classCallCheck(this, PageStructureEnvironment);
	
	    var _this = _possibleConstructorReturn(this, (PageStructureEnvironment.__proto__ || Object.getPrototypeOf(PageStructureEnvironment)).call(this, visualBuilder, name));
	
	    _this.initPageStructureElement();
	    _this.selectedRegionKey = null;
	    _this.selectedEntity = null;
	    return _this;
	  }
	
	  _createClass(PageStructureEnvironment, [{
	    key: 'initPageStructureElement',
	    value: function initPageStructureElement() {
	      this.$header = $('<div class="monster-stackable-container__pane-header">Page structure</div>');
	      this.$pageStructure = $('<div class="page-structure"></div>');
	    }
	  }, {
	    key: 'activate',
	    value: function activate() {
	      _get(PageStructureEnvironment.prototype.__proto__ || Object.getPrototypeOf(PageStructureEnvironment.prototype), 'activate', this).call(this);
	
	      this.$structurePane = this.visualBuilder.createStackablePane();
	      this.$structurePane.append(this.$header);
	      this.$structurePane.append(this.$pageStructure);
	    }
	  }, {
	    key: 'deactivate',
	    value: function deactivate() {
	      this.$pageStructure.detach();
	      this.$header.detach();
	      _get(PageStructureEnvironment.prototype.__proto__ || Object.getPrototypeOf(PageStructureEnvironment.prototype), 'deactivate', this).call(this);
	    }
	  }, {
	    key: 'pageChanged',
	    value: function pageChanged() {
	      var _this2 = this;
	
	      _get(PageStructureEnvironment.prototype.__proto__ || Object.getPrototypeOf(PageStructureEnvironment.prototype), 'pageChanged', this).call(this);
	      this.$pageStructure.jstree('destroy');
	      var layout = this.target.MONSTER_EDIT_MODE_DATA.layout;
	      var template = this.target.MONSTER_EDIT_MODE_DATA.template;
	
	      var layoutItem = {
	        data: {
	          id: 'layout',
	          templateId: layout.id
	        },
	        text: 'Layout - ' + layout.key + ' #' + layout.id,
	        icon: 'fa fa-columns',
	        state: {
	          opened: true
	        },
	        children: []
	      };
	      var templateItem = {
	        data: {
	          id: 'template',
	          templateId: template.id
	        },
	        text: 'Template - ' + template.key + ' #' + template.id,
	        icon: 'fa fa-th',
	        state: {
	          opened: true
	        },
	        children: []
	      };
	
	      var $layoutRegions = this.target$('.m-monster-content__layout');
	
	      $layoutRegions.each(function iter() {
	        var result = _PageIterator2.default.processLayout($(this));
	        layoutItem.children.push(result.item);
	        result.templateRegions.forEach(function (region) {
	          templateItem.children.push(region);
	        });
	      });
	
	      this.pageStructure = [layoutItem, templateItem];
	
	      this.$pageStructure.jstree({
	        core: {
	          check_callback: function check_callback(operation, node, node_parent /*, node_position, more*/) {
	            if (operation === 'move_node') {
	              if (node.type === 'material') {
	                return node_parent.type === 'templateRegion' || node_parent.type === 'contentTemplateRegion';
	              } else if (node.type === 'templateRegion' || node.type === 'contentTemplateRegion') {
	                return node_parent.type === 'default';
	              }
	              return false;
	            }
	            return true;
	          },
	          data: this.pageStructure,
	          themes: {
	            name: 'default-dark'
	          }
	        },
	        plugins: ['types', 'wholerow', 'dnd'],
	        dnd: {
	          open_timeout: 200,
	          large_drop_target: true,
	          large_drag_target: true,
	          check_while_dragging: true,
	          copy: false,
	          is_draggable: function is_draggable(nodes) {
	            var node = nodes[0] || undefined;
	            if (node === undefined) {
	              return false;
	            }
	            return node.type === 'material' || node.type === 'contentTemplateRegion' || node.type === 'templateRegion';
	          }
	        },
	        types: {
	          layout: {
	            icon: 'fa fa-columns'
	          },
	          template: {
	            icon: 'fa fa-th'
	          },
	          templateRegion: {
	            icon: 'fa fa-folder-o'
	          },
	          contentTemplateRegion: {
	            icon: 'fa fa-folder'
	          },
	          material: {
	            icon: 'fa fa-puzzle-piece'
	          }
	        }
	      });
	
	      this.jstreeObj = this.$pageStructure.jstree();
	
	      this.$pageStructure.on('loaded.jstree', function () {
	        _this2.updatePageStructureJson();
	
	        var isContentRegionFound = false;
	        _this2.pageStructure[1].children.forEach(function (region) {
	          if (region.data.entityDependent && isContentRegionFound === false) {
	            isContentRegionFound = true;
	            _this2.jstreeObj.select_node(region.id);
	          }
	        });
	      }).on('move_node.jstree', function () {
	        _this2.updatePageStructureJson();
	        _this2.target.FrontendMonster.VisualFrame.preview();
	        return true;
	      });
	
	      this.controlButtons = {
	        material: new _MaterialControls2.default(this)
	      };
	      console.log(this.controlButtons);
	
	      this.$pageStructure.on('select_node.jstree', function (e, obj) {
	
	        var type = obj.node.type;
	        _this2.selectedEntity = obj.node.data.entityType || null;
	        switch (type) {
	          case 'material':
	            var $anchor = $('#' + obj.node.id);
	            $anchor.prepend(_this2.controlButtons[type].controlButtons);
	            _this2.selectMaterial(obj.node.data.materialIndex);
	            _this2.selectedRegionKey = obj.node.data.regionKey;
	            break;
	          case 'templateRegion':
	          case 'contentTemplateRegion':
	            _this2.target$.smoothScroll({
	              scrollTarget: _this2.target$('[data-region-key="' + obj.node.data.regionKey + '"]')
	            });
	            _this2.selectedRegionKey = obj.node.data.regionKey;
	            break;
	          default:
	            _this2.selectedRegionKey = null;
	            break;
	        }
	      });
	    }
	  }, {
	    key: 'selectMaterial',
	    value: function selectMaterial(index) {
	      var $targetMaterial = this.target$('[data-material-index="' + index + '"]');
	      $('.m-monster-material_selected').removeClass('m-monster-material_selected');
	      this.target$.smoothScroll({
	        scrollTarget: $targetMaterial
	      });
	      // restart animation magic. see https://css-tricks.com/restart-css-animation/
	      $targetMaterial.removeClass('m-monster-material_selected');
	
	      void $targetMaterial[0].offsetWidth;
	
	      $targetMaterial.addClass('m-monster-material_selected');
	    }
	  }, {
	    key: 'updatePageStructureJson',
	    value: function updatePageStructureJson() {
	      this.pageStructureJson = this.jstreeObj.get_json(this.$pageStructure, {
	        no_state: true,
	        no_id: true,
	        no_li_attr: true,
	        no_a_attr: true
	      });
	      this.target.FrontendMonster.VisualFrame.pageStructureJson = this.pageStructureJson;
	    }
	  }]);
	
	  return PageStructureEnvironment;
	}(_BaseEnvironment3.default);
	
	exports.default = PageStructureEnvironment;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BaseEnvironment2 = __webpack_require__(1);
	
	var _BaseEnvironment3 = _interopRequireDefault(_BaseEnvironment2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SiteStructureEnvironment = function (_BaseEnvironment) {
	  _inherits(SiteStructureEnvironment, _BaseEnvironment);
	
	  function SiteStructureEnvironment() {
	    _classCallCheck(this, SiteStructureEnvironment);
	
	    return _possibleConstructorReturn(this, (SiteStructureEnvironment.__proto__ || Object.getPrototypeOf(SiteStructureEnvironment)).apply(this, arguments));
	  }
	
	  return SiteStructureEnvironment;
	}(_BaseEnvironment3.default);
	
	exports.default = SiteStructureEnvironment;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function uniqid(prefix, moreEntropy) {
	  //  discuss at: http://locutus.io/php/uniqid/
	  // original by: Kevin van Zonneveld (http://kvz.io)
	  //  revised by: Kankrelune (http://www.webfaktory.info/)
	  //      note 1: Uses an internal counter (in locutus global) to avoid collision
	  //   example 1: var $id = uniqid()
	  //   example 1: var $result = $id.length === 13
	  //   returns 1: true
	  //   example 2: var $id = uniqid('foo')
	  //   example 2: var $result = $id.length === (13 + 'foo'.length)
	  //   returns 2: true
	  //   example 3: var $id = uniqid('bar', true)
	  //   example 3: var $result = $id.length === (23 + 'bar'.length)
	  //   returns 3: true
	
	  if (typeof prefix === 'undefined') {
	    prefix = '';
	  }
	
	  var retId;
	  var _formatSeed = function _formatSeed(seed, reqWidth) {
	    seed = parseInt(seed, 10).toString(16); // to hex str
	    if (reqWidth < seed.length) {
	      // so long we split
	      return seed.slice(seed.length - reqWidth);
	    }
	    if (reqWidth > seed.length) {
	      // so short we pad
	      return Array(1 + (reqWidth - seed.length)).join('0') + seed;
	    }
	    return seed;
	  };
	
	  var $global = typeof window !== 'undefined' ? window : GLOBAL;
	  $global.$locutus = $global.$locutus || {};
	  var $locutus = $global.$locutus;
	  $locutus.php = $locutus.php || {};
	
	  if (!$locutus.php.uniqidSeed) {
	    // init seed with big random int
	    $locutus.php.uniqidSeed = Math.floor(Math.random() * 0x75bcd15);
	  }
	  $locutus.php.uniqidSeed++;
	
	  // start with prefix, add current milliseconds hex string
	  retId = prefix;
	  retId += _formatSeed(parseInt(new Date().getTime() / 1000, 10), 8);
	  // add seed hex string
	  retId += _formatSeed($locutus.php.uniqidSeed, 5);
	  if (moreEntropy) {
	    // for more entropy we add a float lower to 10
	    retId += (Math.random() * 10).toFixed(8).toString();
	  }
	
	  return retId;
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DataProvider = function () {
	  function DataProvider(className, providedKeys) {
	    _classCallCheck(this, DataProvider);
	
	    this.className = className;
	    this.providedKeys = providedKeys;
	    this.associations = {};
	    this.associate();
	  }
	
	  /**
	   *
	   * @returns {Editable}
	   */
	
	
	  _createClass(DataProvider, [{
	    key: 'associate',
	    value: function associate() {
	      var _this = this;
	
	      this.associations = {};
	      Object.keys(this.providedKeys).forEach(function (regionKey) {
	        var region = _this.providedKeys[regionKey];
	        var $region = $('[data-region-key="' + regionKey + '"]').first();
	        // console.log(`%cRegion: ${regionKey}`, 'color: red; font-weight: bold; background: #333');
	        // console.log(region);
	        var materials = {};
	        Object.keys(region).forEach(function (materialKey) {
	          var dataKeys = region[materialKey];
	          var $material = $region.find('[data-material-index="' + materialKey + '"]').first();
	          // console.log(`%cMaterial: ${materialKey}`, 'color: #fff; font-weight: bold; background: #69f');
	          // console.log($material);
	          if ($material.length === 0) {
	            return;
	          }
	          materials[materialKey] = {
	            dataKeys: dataKeys,
	            $material: $material
	          };
	          var materialEditableKeys = $material.data('editableKeys');
	          _this.initializeMaterialEdit(materialEditableKeys, $material, dataKeys);
	        });
	        _this.associations[regionKey] = {
	          $region: $region,
	          materials: materials
	        };
	      });
	    }
	  }, {
	    key: 'initializeMaterialEdit',
	    value: function initializeMaterialEdit(materialEditableKeys, $root, dataKeys) {
	      var _this2 = this;
	
	      var prefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
	
	      dataKeys.forEach(function (key) {
	        var obj = materialEditableKeys[key] || 'NO_SUCH_KEY';
	        if (obj === 'NO_SUCH_KEY') {
	          return;
	        }
	        if (obj === Object(obj)) {
	          (function () {
	            // it's recursive
	            // first - find all blocks
	            var $blocks = $root.find('[data-recursive-item="' + key + '"]');
	            var that = _this2;
	            var counter = 0;
	            $blocks.each(function iter() {
	              var $this = $(this);
	              // console.log(`%c Recursive item ${key} #${counter}`, 'background: #222; color: #bada55');
	              // console.log(this);
	              that.initializeMaterialEdit(obj, $this, Object.keys(obj), 'item.');
	              counter++;
	            });
	          })();
	        } else {
	          // it's plain field
	          var $node = $root.find('[data-editable-key="' + prefix + key + '"]').first();
	          if ($node.length === 0) {
	            return;
	          }
	          DataProvider.editable.initializeEditable($node);
	          // console.log(`%c Plain field editable ${prefix}${key}`, 'background: #222; color: #bada55');
	          // console.log($node[0].outerHTML);
	        }
	      });
	    }
	  }, {
	    key: 'serializeKeys',
	    value: function serializeKeys() {
	      var _this3 = this;
	
	      var result = {};
	      Object.keys(this.associations).forEach(function (regionKey) {
	        var region = _this3.associations[regionKey];
	        var $region = region.$region;
	        result[regionKey] = {};
	        Object.keys(region.materials).forEach(function (materialKey) {
	          var dataKeys = region.materials[materialKey].dataKeys;
	          var $material = region.materials[materialKey].$material;
	          result[regionKey][materialKey] = _this3.serializeMaterial(regionKey, materialKey, dataKeys, $region, $material);
	        });
	      });
	      return result;
	    }
	  }, {
	    key: 'serialize',
	    value: function serialize() {
	      var data = {
	        class: this.className
	      };
	      return this.fillConfig(data);
	    }
	  }, {
	    key: 'fillConfig',
	    value: function fillConfig(data) {
	      return data;
	    }
	  }, {
	    key: 'serializeMaterial',
	    value: function serializeMaterial(regionKey, materialKey, dataKeys, $region, $material) {
	      return null;
	    }
	  }], [{
	    key: 'editable',
	    get: function get() {
	      return window.FrontendMonster.VisualFrame.editable;
	    }
	  }]);
	
	  return DataProvider;
	}();
	
	exports.default = DataProvider;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _StaticContent = __webpack_require__(29);
	
	var _StaticContent2 = _interopRequireDefault(_StaticContent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DataProviderFactory = function () {
	  function DataProviderFactory() {
	    _classCallCheck(this, DataProviderFactory);
	  }
	
	  _createClass(DataProviderFactory, null, [{
	    key: 'factory',
	    value: function factory(providerDecl, providedKeys) {
	      var provider = null;
	      var className = providerDecl.className || 'DotPlant\\Monster\\DataEntity\\StaticContentProvider';
	      switch (className) {
	        case 'DotPlant\\Monster\\DataEntity\\StaticContentProvider':
	        default:
	          provider = new _StaticContent2.default(providedKeys);
	      }
	      return provider;
	    }
	  }]);
	
	  return DataProviderFactory;
	}();
	
	exports.default = DataProviderFactory;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _all = __webpack_require__(25);
	
	var _all2 = _interopRequireDefault(_all);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Editable = function () {
	  function Editable() {
	    _classCallCheck(this, Editable);
	
	    this.editablesByType = {};
	    // initialize base build-in editables
	    (0, _all2.default)();
	    this.editablesByType = window.MONSTER_EDITABLES;
	  }
	
	  _createClass(Editable, [{
	    key: 'serializeEditable',
	    value: function serializeEditable($node) {
	      var editable = $node.data('editableParams');
	      if ((typeof editable === 'undefined' ? 'undefined' : _typeof(editable)) !== 'object') {
	        return false;
	      }
	      var type = editable.hasOwnProperty('type') ? editable.type : 'string';
	      if (this.editablesByType.hasOwnProperty(type) === false) {
	        type = 'string';
	      }
	
	      var exportVariable = editable.hasOwnProperty('target') ? editable.target : 'data';
	
	      return this.editablesByType[type].serializeNode($node, exportVariable);
	    }
	  }, {
	    key: 'initializeEditable',
	    value: function initializeEditable($node) {
	      var type = $node.data('editable-type') || 'uneditable';
	      if (type === 'uneditable') {
	        return null;
	      }
	
	      var editable = this.editablesByType[type] || this.editablesByType.string;
	      return editable.initializeEditable($node);
	    }
	  }]);
	
	  return Editable;
	}();
	
	exports.default = Editable;

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HashApi = function () {
	  function HashApi() {
	    _classCallCheck(this, HashApi);
	
	    this.functionCalls = {};
	
	    if (document.location.hash) {
	      var matches = document.location.hash.match(/#hashApi:(.*?):\/hashApi/);
	      if (matches && matches.length === 2) {
	        var functionCalls = JSON.parse(decodeURIComponent(matches[1]));
	
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = functionCalls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var item = _step.value;
	
	            if (item.func) {
	              this.functionCalls[item.func] = item.args || {};
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	      }
	    }
	  }
	
	  _createClass(HashApi, [{
	    key: "shouldCall",
	    value: function shouldCall(func) {
	      return this.functionCalls[func] || false;
	    }
	  }]);
	
	  return HashApi;
	}();
	
	exports.default = HashApi;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _FrameApi = __webpack_require__(3);
	
	var _FrameApi2 = _interopRequireDefault(_FrameApi);
	
	var _uniqid = __webpack_require__(18);
	
	var _uniqid2 = _interopRequireDefault(_uniqid);
	
	var _DataProviderFactory = __webpack_require__(20);
	
	var _DataProviderFactory2 = _interopRequireDefault(_DataProviderFactory);
	
	var _Editable = __webpack_require__(21);
	
	var _Editable2 = _interopRequireDefault(_Editable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var VisualFrame = function () {
	  function VisualFrame() {
	    _classCallCheck(this, VisualFrame);
	
	    this.params();
	    this.initialize();
	  }
	
	  _createClass(VisualFrame, [{
	    key: 'initialize',
	    value: function initialize() {
	      var _this = this;
	
	      _FrameApi2.default.bindMessageListener(this);
	      this.pageStructureJsonData = null;
	      /* global window:false */
	      this.parentWindow = window.parent;
	      /** @var FrontendMonster */
	      this.parentMonster = this.parentWindow.FrontendMonster;
	      this.parentBuilder = this.parentMonster.builder;
	      this.currentMonsterContent = false;
	      this.editable = new _Editable2.default();
	      // this.makeItMove();
	      $(window).resize(function () {
	        _this.updateHandlers();
	        return true;
	      });
	      $(function () {
	        _this.parentBuilder.pageChanged();
	        _this.initProviders();
	      });
	      this.MonsterEditData = window.MONSTER_EDIT_MODE_DATA;
	    }
	  }, {
	    key: 'initProviders',
	    value: function initProviders() {
	      this.providers = {
	        layout: this.getProviders(this.MonsterEditData.layout),
	        template: this.getProviders(this.MonsterEditData.template),
	        entity: this.getProviders(this.MonsterEditData.entity)
	      };
	    }
	  }, {
	    key: 'getProviders',
	    value: function getProviders(arr) {
	      var result = {};
	      Object.keys(arr.providers).forEach(function (key) {
	        var providerDecl = arr.providers[key];
	        result[key] = _DataProviderFactory2.default.factory(providerDecl, arr.providedKeys[key] || {});
	      });
	      return result;
	    }
	  }, {
	    key: 'refreshMonsterContentCache',
	    value: function refreshMonsterContentCache() {
	      this.$monsterContentCache = {};
	      var that = this;
	      $(this.settings['monster-content-selector']).each(function iter() {
	        if (!that.currentMonsterContent) {
	          that.currentMonsterContent = $(this).data('uniqueContentId');
	        }
	        that.$monsterContentCache[$(this).data('uniqueContentId')] = $(this);
	      });
	    }
	  }, {
	    key: 'updateHandlers',
	    value: function updateHandlers() {
	      if (this.$selectedMaterial && this.$handlers) {
	        this.$handlers.css('top', this.$selectedMaterial.position().top + this.$selectedMaterial.height() - this.$handlers.height());
	        this.$selectedMaterial.mod('active', true);
	      }
	    }
	  }, {
	    key: 'selectMaterial',
	    value: function selectMaterial($material) {
	      if (this.$selectedMaterial === $material) {
	        return;
	      }
	      if (this.$selectedMaterial) {
	        this.$selectedMaterial.mod('active', false);
	      }
	      this.$selectedMaterial = $material;
	      this.updateHandlers();
	      this.$handlers.show();
	    }
	  }, {
	    key: 'serializeContent',
	    value: function serializeContent(callback) {
	      var _this2 = this;
	
	      var result = {};
	      var that = this;
	      Object.keys(this.$monsterContent).forEach(function (uniqueContentId) {
	        var $monster = _this2.$monsterContent[uniqueContentId];
	        result[$monster.data('uniqueContentId')] = that.serializeUniqueContent($monster);
	      });
	      this.sendToBuilder(callback, [result]);
	    }
	  }, {
	    key: 'serializeUniqueContent',
	    value: function serializeUniqueContent($monsterContent) {
	      var result = {};
	      result.uniqueContentId = $monsterContent.data('uniqueContentId');
	      result.materials = {};
	      $monsterContent.find('[data-is-material=\'1\']').each(function iter() {
	        var material = {};
	        material.block = $(this).data('materialBlock');
	        result.materials[$(this).data('materialIndex')] = material;
	      });
	      return result;
	    }
	
	    /**
	     * Sets VisualFrame settings.
	     * Uses VisualFrameSettings variable if provided or default values instead.
	     */
	
	  }, {
	    key: 'params',
	    value: function params() {
	      var userSettings = window.VisualFrameSettings || {};
	      var settings = {
	        'monster-content-selector': '.m-monster-content__content'
	      };
	      Object.keys(userSettings).forEach(function (key) {
	        settings[key] = userSettings[key];
	      });
	      this.settings = settings;
	    }
	  }, {
	    key: 'sendToBuilder',
	    value: function sendToBuilder(func, args) {
	      _FrameApi2.default.sendMessage(this.parentWindow, func, args);
	    }
	  }, {
	    key: 'newBlock',
	    value: function newBlock(materialName, selectedEntity, regionName) {
	      // @todo Add loader here as we are using form post !
	      var randomIndex = (0, _uniqid2.default)('mat');
	      var data = this.iterateTemplateType(this.pageStructureJson);
	      if (selectedEntity === 'entity') {
	        data.entity.materialsByRegionDecl[regionName].decl[randomIndex] = {
	          material: materialName
	        };
	        data.entity.materialsByRegionDecl[regionName].materialsOrder.push(randomIndex);
	      } else {
	        data[selectedEntity].templateRegions[regionName].materialsDecls.decl[randomIndex] = {
	          material: materialName
	        };
	        data[selectedEntity].templateRegions[regionName].materialsDecls.materialsOrder.push(randomIndex);
	      }
	      return this.preview(data);
	    }
	  }, {
	    key: 'preview',
	    value: function preview() {
	      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	
	      var newData = data || this.iterateTemplateType(this.pageStructureJson);
	      newData.action = 'preview';
	      VisualFrame.formSubmit(newData);
	      return false;
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      var data = this.iterateTemplateType(this.pageStructureJson);
	      data.action = 'save';
	      VisualFrame.formSubmit(data);
	      return false;
	    }
	  }, {
	    key: 'iterateTemplateType',
	    value: function iterateTemplateType(arr) {
	      var _this3 = this;
	
	      var result = {
	        entity: {
	          materialsByRegionDecl: {},
	          providers: {}
	        }
	      };
	      arr.forEach(function (obj) {
	        var key = obj.data.id;
	        var regionsResult = VisualFrame.iterateTemplateRegions(obj.children);
	        // layout or template
	        result[key] = {
	          templateRegions: regionsResult.templateRegions,
	          templateRegionsOrder: regionsResult.templateRegionsOrder,
	          templateId: obj.data.templateId,
	          providers: {}
	        };
	        if (Object.keys(regionsResult.entityMaterials).length > 0) {
	          Object.keys(regionsResult.entityMaterials).forEach(function (regionKey) {
	            result.entity.materialsByRegionDecl[regionKey] = regionsResult.entityMaterials[regionKey];
	          });
	        }
	        result[key].providers = _this3.serializeProviders(key);
	      });
	      result.entity.providers = this.serializeProviders('entity');
	      return result;
	    }
	  }, {
	    key: 'serializeProviders',
	    value: function serializeProviders(type) {
	      var _this4 = this;
	
	      var result = {};
	      Object.keys(this.providers[type]).forEach(function (providerKey) {
	        result[providerKey] = _this4.providers[type][providerKey].serialize();
	      });
	      return result;
	    }
	  }, {
	    key: 'pageStructureJson',
	    set: function set(value) {
	      this.pageStructureJsonData = value;
	    },
	    get: function get() {
	      return this.pageStructureJsonData;
	    }
	  }, {
	    key: '$monsterContent',
	    get: function get() {
	      if (this.$monsterContentCache) {
	        return this.$monsterContentCache;
	      }
	      this.refreshMonsterContentCache();
	      return this.$monsterContentCache;
	    }
	  }], [{
	    key: 'formSubmit',
	    value: function formSubmit(data) {
	      var $form = $('<form method="POST"></form>');
	      var $input = $('<input type="hidden" name="__json">');
	      var $csrf = $('<input type="hidden">');
	
	      $csrf.attr('name', $('meta[name=csrf-param]').attr('content')).val($('meta[name=csrf-token]').attr('content')).appendTo($form);
	
	      $input.val(JSON.stringify(data)).appendTo($form);
	
	      $form[0].submit();
	    }
	  }, {
	    key: 'iterateTemplateRegions',
	    value: function iterateTemplateRegions(arr) {
	      var result = {
	        templateRegions: {},
	        templateRegionsOrder: [],
	        entityMaterials: {}
	      };
	      arr.forEach(function (obj) {
	        // const key = obj.data.id.replace(/^.*\./, '');
	        var regionKey = obj.data.regionKey;
	        result.templateRegionsOrder.push(regionKey);
	        var entityDependent = obj.data.entityDependent || false;
	
	        var regionMaterials = VisualFrame.iterateMaterials(obj.children, regionKey);
	
	        if (entityDependent === false) {
	          // this is an exact template region
	          result.templateRegions[regionKey] = {
	            regionId: obj.data.regionId,
	            regionKey: regionKey,
	            uniqueContentId: obj.data.uniqueContentId,
	            materialsDecls: regionMaterials,
	            entityDependent: entityDependent
	          };
	        } else {
	          result.templateRegions[regionKey] = {
	            regionId: obj.data.regionId,
	            regionKey: regionKey,
	            uniqueContentId: obj.data.uniqueContentId,
	            entityDependent: entityDependent
	          };
	          // this is entity-dependent region
	          result.entityMaterials[regionKey] = regionMaterials;
	        }
	      });
	      return result;
	    }
	  }, {
	    key: 'iterateMaterials',
	    value: function iterateMaterials(arr, regionKey) {
	      var result = {
	        decl: {},
	        materialsOrder: []
	      };
	      arr.forEach(function (obj) {
	        var key = obj.data.materialIndex;
	        result.decl[key] = {
	          // editablesKeys: obj.data.editableKeys,
	          material: obj.data.materialPath
	        };
	        result.materialsOrder.push(key);
	      });
	      return result;
	    }
	  }]);
	
	  return VisualFrame;
	}();
	
	exports.default = VisualFrame;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _BaseEditable2 = __webpack_require__(2);
	
	var _BaseEditable3 = _interopRequireDefault(_BaseEditable2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var WYSIWYG = function (_BaseEditable) {
	  _inherits(WYSIWYG, _BaseEditable);
	
	  function WYSIWYG() {
	    _classCallCheck(this, WYSIWYG);
	
	    return _possibleConstructorReturn(this, (WYSIWYG.__proto__ || Object.getPrototypeOf(WYSIWYG)).apply(this, arguments));
	  }
	
	  _createClass(WYSIWYG, [{
	    key: 'serializeNode',
	    value: function serializeNode($node) {
	      var node = _BaseEditable3.default.frame$($node);
	      var editor = node.data('editor');
	      if (editor) {
	        return editor.getData();
	      }
	      return node.html();
	    }
	  }, {
	    key: 'initializeEditable',
	    value: function initializeEditable($node) {
	      var node = $node[0];
	      var config = {
	        autoParagraph: false,
	        enableContentEditable: true,
	        ignoreEmptyParagraph: true,
	        enterMode: window.CKEDITOR.ENTER_BR
	      };
	      // $(() => {
	      var editor = window.AlloyEditor.editable(node, config).get('nativeEditor');
	      $node.data('editor', editor);
	      // });
	    }
	  }]);
	
	  return WYSIWYG;
	}(_BaseEditable3.default);
	
	exports.default = WYSIWYG;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = all;
	
	var _WYSIWYG = __webpack_require__(24);
	
	var _WYSIWYG2 = _interopRequireDefault(_WYSIWYG);
	
	var _image = __webpack_require__(26);
	
	var _image2 = _interopRequireDefault(_image);
	
	var _link = __webpack_require__(27);
	
	var _link2 = _interopRequireDefault(_link);
	
	var _string = __webpack_require__(28);
	
	var _string2 = _interopRequireDefault(_string);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function all() {
	  if (typeof window.MONSTER_EDITABLES === 'undefined') {
	    window.MONSTER_EDITABLES = {};
	  }
	  window.MONSTER_EDITABLES['wysiwyg'] = new _WYSIWYG2.default();
	  window.MONSTER_EDITABLES['link'] = new _link2.default();
	  window.MONSTER_EDITABLES['image'] = new _image2.default();
	  window.MONSTER_EDITABLES['string'] = new _string2.default();
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _BaseEditable2 = __webpack_require__(2);
	
	var _BaseEditable3 = _interopRequireDefault(_BaseEditable2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Image = function (_BaseEditable) {
	  _inherits(Image, _BaseEditable);
	
	  function Image() {
	    _classCallCheck(this, Image);
	
	    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
	  }
	
	  _createClass(Image, [{
	    key: 'serializeNode',
	    value: function serializeNode($node) {
	      var $img = $node.find('img').first();
	      return {
	        src: $img.attr('src'),
	        alt: $img.attr('alt')
	      };
	    }
	  }]);
	
	  return Image;
	}(_BaseEditable3.default);
	
	exports.default = Image;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _BaseEditable2 = __webpack_require__(2);
	
	var _BaseEditable3 = _interopRequireDefault(_BaseEditable2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Link = function (_BaseEditable) {
	  _inherits(Link, _BaseEditable);
	
	  function Link() {
	    _classCallCheck(this, Link);
	
	    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
	  }
	
	  _createClass(Link, [{
	    key: 'serializeNode',
	    value: function serializeNode($node) {
	      return {
	        href: $node.data('originalHref') ? $node.data('originalHref') : $node.attr('href'),
	        anchor: $node.html()
	      };
	    }
	  }]);
	
	  return Link;
	}(_BaseEditable3.default);
	
	exports.default = Link;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _BaseEditable2 = __webpack_require__(2);
	
	var _BaseEditable3 = _interopRequireDefault(_BaseEditable2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TextString = function (_BaseEditable) {
	  _inherits(TextString, _BaseEditable);
	
	  function TextString() {
	    _classCallCheck(this, TextString);
	
	    return _possibleConstructorReturn(this, (TextString.__proto__ || Object.getPrototypeOf(TextString)).apply(this, arguments));
	  }
	
	  _createClass(TextString, [{
	    key: 'serializeNode',
	    value: function serializeNode($node) {
	      var node = _BaseEditable3.default.frame$($node);
	      var editor = node.data('editor');
	      if (editor) {
	        return editor.getData();
	      }
	      return node.html();
	    }
	  }, {
	    key: 'initializeEditable',
	    value: function initializeEditable($node) {
	      var node = $node[0];
	      /* global window:false */
	
	      var config = {
	        allowedContent: 'i u',
	        toolbars: {
	          styles: {
	            selections: window.AlloyEditor.Selections,
	            tabIndex: 1
	          }
	        },
	        autoParagraph: false,
	        enableContentEditable: true,
	        ignoreEmptyParagraph: true,
	        blockless: true,
	        enterMode: window.CKEDITOR.ENTER_BR
	      };
	      // $(() => {
	      try {
	        var editor = window.AlloyEditor.editable(node, config).get('nativeEditor');
	        editor.on('key', function (event) {
	          if (event.data.keyCode === 13 || event.data.keyCode === window.CKEDITOR.SHIFT + 13) {
	            // add saving function here
	            event.cancel();
	          }
	        });
	        editor.on('paste', function (event) {
	          event.data.dataValue = event.data.dataValue.replace(/<br[\s\/]*>/gmi, ' ');
	        });
	        $node.data('editor', editor);
	      } catch (e) {
	        console.log($node, node);
	        // throw e;
	      }
	      // });
	    }
	  }]);
	
	  return TextString;
	}(_BaseEditable3.default);
	
	exports.default = TextString;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _DataProvider2 = __webpack_require__(19);
	
	var _DataProvider3 = _interopRequireDefault(_DataProvider2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StaticContent = function (_DataProvider) {
	  _inherits(StaticContent, _DataProvider);
	
	  function StaticContent(providedKeys) {
	    _classCallCheck(this, StaticContent);
	
	    return _possibleConstructorReturn(this, (StaticContent.__proto__ || Object.getPrototypeOf(StaticContent)).call(this, 'DotPlant\\Monster\\DataEntity\\StaticContentProvider', providedKeys));
	  }
	
	  _createClass(StaticContent, [{
	    key: 'fillConfig',
	    value: function fillConfig(data) {
	      var newData = data;
	      newData.entities = this.serializeKeys();
	      return newData;
	    }
	  }, {
	    key: 'serializeMaterial',
	    value: function serializeMaterial(regionKey, materialKey, dataKeys, $region, $material) {
	      var materialEditableKeys = $material.data('editableKeys');
	      var result = this.recursiveSerialize(materialEditableKeys, $material, dataKeys);
	      return result;
	    }
	  }, {
	    key: 'recursiveSerialize',
	    value: function recursiveSerialize(materialEditableKeys, $root, dataKeys) {
	      var _this2 = this;
	
	      var prefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
	
	      var result = {};
	
	      dataKeys.forEach(function (key) {
	        var obj = materialEditableKeys[key] || 'NO_SUCH_KEY';
	        if (obj === 'NO_SUCH_KEY') {
	          debugger;
	          return;
	        }
	        if (obj === Object(obj)) {
	          (function () {
	            // it's recursive
	            // first - find all blocks
	            var $blocks = $root.find('[data-recursive-item="' + key + '"]');
	            var that = _this2;
	            var counter = 0;
	            result[key] = [];
	            $blocks.each(function iter() {
	              var $this = $(this);
	              result[key].push(that.recursiveSerialize(obj, $this, Object.keys(obj), 'item.'));
	              counter++;
	            });
	          })();
	        } else {
	          // it's plain field
	          var $node = $root.find('[data-editable-key="' + prefix + key + '"]').first();
	          if ($node.length === 0) {
	            console.warn('Skipped [data-editable-key="' + prefix + key + '"] as not found');
	            return;
	          }
	          result[key] = _DataProvider3.default.editable.serializeEditable($node);
	        }
	      });
	      return result;
	    }
	  }]);
	
	  return StaticContent;
	}(_DataProvider3.default);
	
	exports.default = StaticContent;

/***/ },
/* 30 */,
/* 31 */,
/* 32 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BaseControls = function () {
	  function BaseControls(env) {
	    var _this = this;
	
	    _classCallCheck(this, BaseControls);
	
	    this.env = env;
	    this.controlButtons = $('<div class="tree-control-buttons" role="presentation"></div>');
	
	    var thatEnv = this.env;
	    this.buttonsArray.forEach(function (conf) {
	      var $button = $("<a href=\"#\" class=\"tree-control-buttons__button\" title=\"" + conf.name + "\">\n  <i class=\"" + conf.icon + "\"></i>\n</a>");
	      $button.click(function clickHandler() {
	        var $node = $(this).parent().parent();
	
	        return conf.click(thatEnv.jstreeObj.get_node($node), $node);
	      });
	      _this.controlButtons.append($button);
	    });
	  }
	
	  _createClass(BaseControls, [{
	    key: "buttonsArray",
	    get: function get() {
	      throw "You must implement buttonsArray";
	    }
	  }]);
	
	  return BaseControls;
	}();
	
	exports.default = BaseControls;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _BaseControls2 = __webpack_require__(39);
	
	var _BaseControls3 = _interopRequireDefault(_BaseControls2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MaterialControls = function (_BaseControls) {
	  _inherits(MaterialControls, _BaseControls);
	
	  function MaterialControls() {
	    _classCallCheck(this, MaterialControls);
	
	    return _possibleConstructorReturn(this, (MaterialControls.__proto__ || Object.getPrototypeOf(MaterialControls)).apply(this, arguments));
	  }
	
	  _createClass(MaterialControls, [{
	    key: 'buttonsArray',
	    get: function get() {
	      var _this2 = this;
	
	      return [{
	        icon: 'fa fa-arrow-right',
	        name: 'Select',
	        click: function click(jsTreeNode /*, $node*/) {
	          _this2.env.selectMaterial(jsTreeNode.data.materialIndex);
	          return false;
	        }
	      }, {
	        icon: 'fa fa-trash-o',
	        name: 'Remove',
	        click: function click() /*jsTreeNode, $node*/{
	          _this2.env.jstreeObj.delete_node(_this2.env.jstreeObj.get_selected());
	          _this2.env.updatePageStructureJson();
	          _this2.env.target.FrontendMonster.VisualFrame.preview();
	          return false;
	        }
	      }];
	    }
	  }]);
	
	  return MaterialControls;
	}(_BaseControls3.default);
	
	exports.default = MaterialControls;

/***/ },
/* 41 */,
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PageIterator = function () {
	  function PageIterator() {
	    _classCallCheck(this, PageIterator);
	  }
	
	  _createClass(PageIterator, null, [{
	    key: 'processLayout',
	    value: function processLayout($layoutRegion) {
	      var item = PageIterator.extractRegionData($layoutRegion);
	      item.state = {
	        opened: true
	      };
	      item.children = [];
	      item.data.id = 'layout.templateRegion.' + item.data.regionKey;
	      item.id = ('psj_' + item.data.id).replace(/\./g, '_');
	      item.data.entityType = 'layout';
	      var templateRegions = [];
	
	      // find materials
	      var $layoutMaterials = $layoutRegion.find('>[data-is-material]');
	      $layoutMaterials.each(function iter() {
	        var $layoutMaterial = $(this);
	        var result = PageIterator.processLayoutMaterial($layoutMaterial, item.id, item.data.regionKey);
	        var layoutMaterialItem = result.layoutMaterial;
	        result.templateRegions.forEach(function (region) {
	          templateRegions.push(region);
	        });
	        item.children.push(layoutMaterialItem);
	      });
	
	      return {
	        item: item,
	        templateRegions: templateRegions
	      };
	    }
	  }, {
	    key: 'processLayoutMaterial',
	    value: function processLayoutMaterial($layoutMaterial, prefix, regionKey) {
	      var materialIndex = $layoutMaterial.data('materialIndex');
	      var materialPath = $layoutMaterial.data('materialPath');
	      var item = {
	        text: (materialPath === 'core.frontend-monster-core.general.content-placeholder' ? 'Main Entity Content' : 'Material: ' + materialIndex) + '\n      ',
	        type: 'material',
	        data: {
	          id: prefix + '.' + materialIndex,
	          materialIndex: materialIndex,
	          materialPath: materialPath,
	          editableKeys: $layoutMaterial.data('editableKeys'),
	          node: $layoutMaterial,
	          regionKey: regionKey,
	          entityType: 'layout'
	        },
	        id: 'psj_' + prefix + '_' + materialIndex
	      };
	      var templateRegions = [];
	      var $regions = $layoutMaterial.find('> .m-monster-content__content');
	      $regions.each(function iter() {
	        var result = PageIterator.processTemplateRegion($(this));
	        templateRegions.push(result);
	      });
	      if (templateRegions.length > 0) {
	        item.data.isContent = true;
	      }
	      return {
	        layoutMaterial: item,
	        templateRegions: templateRegions
	      };
	    }
	  }, {
	    key: 'processTemplateRegion',
	    value: function processTemplateRegion($templateRegion) {
	      var item = PageIterator.extractRegionData($templateRegion);
	      item.state = {
	        opened: true
	      };
	      item.children = [];
	      item.data.entityDependent = $templateRegion.data('regionEntityDependent') === 1;
	
	      var prefix = item.data.entityDependent ? 'content' : 'template';
	      item.data.entityType = item.data.entityDependent ? 'entity' : 'template';
	      item.data.id = prefix + '.templateRegion.' + item.data.regionKey;
	      item.id = ('psj_' + item.data.id).replace(/\./g, '_');
	
	      if (item.data.entityDependent) {
	        item.type = 'contentTemplateRegion';
	      }
	      var $regionMaterials = $templateRegion.find('>[data-is-material]');
	      $regionMaterials.each(function iter() {
	        var material = PageIterator.processTemplateRegionMaterial($(this), item.data.id, prefix);
	        material.data.regionKey = item.data.regionKey;
	        material.id = ('psj_' + material.data.id).replace(/\./g, '_');
	        item.children.push(material);
	      });
	      return item;
	    }
	  }, {
	    key: 'processTemplateRegionMaterial',
	    value: function processTemplateRegionMaterial($regionMaterial, prefix, entityType) {
	      var materialIndex = $regionMaterial.data('materialIndex');
	      var materialPath = $regionMaterial.data('materialPath');
	      return {
	        text: 'Material: ' + materialIndex,
	        type: 'material',
	        data: {
	          id: prefix + '.' + materialIndex,
	          materialIndex: materialIndex,
	          materialPath: materialPath,
	          editableKeys: $regionMaterial.data('editableKeys'),
	          node: $regionMaterial,
	          entityType: entityType
	        }
	      };
	    }
	  }, {
	    key: 'extractRegionData',
	    value: function extractRegionData($node) {
	      return {
	        text: $node.data('contentDescription'),
	        type: 'templateRegion',
	        data: {
	          regionId: $node.data('regionId'),
	          regionKey: $node.data('regionKey'),
	          uniqueContentId: $node.data('uniqueContentId'),
	          node: $node
	        }
	      };
	    }
	  }]);
	
	  return PageIterator;
	}();
	
	exports.default = PageIterator;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2MxZWI1NjFkNTExYjA3ZDJlMDUiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL0Jhc2VFbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL0Jhc2VFZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL0Zyb250ZW5kTW9uc3Rlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQWN0aW9uRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0VkaXRhYmxlLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9IYXNoQXBpLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL1dZU0lXWUcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9hbGwuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL3Byb3ZpZGVycy9TdGF0aWNDb250ZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9idW5kbGUuY3NzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZS9CYXNlQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9QYWdlU3RydWN0dXJlL01hdGVyaWFsQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9QYWdlU3RydWN0dXJlL1BhZ2VJdGVyYXRvci5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJGcm9udGVuZE1vbnN0ZXIiLCJCYXNlRW52aXJvbm1lbnQiLCJ2aXN1YWxCdWlsZGVyIiwibmFtZSIsInRhcmdldCIsIiQiLCJzZXR0aW5ncyIsImNvbnRlbnRXaW5kb3ciLCJjdXJyZW50RW52aXJvbm1lbnQiLCJlbnZpcm9ubWVudHMiLCJnZXQiLCJkZWFjdGl2YXRlIiwiY2xlYXJTdGFja2FibGUiLCJmdW5jIiwiYXJncyIsInNlbmRNZXNzYWdlIiwiQmFzZUVkaXRhYmxlIiwiJG5vZGUiLCJGcmFtZUFwaSIsImxpc3RlbmVyIiwiY2FsbGJhY2siLCJjYWxsYmFja0hhbmRsZXIiLCJldmVudCIsIm1lc3NhZ2UiLCJpc0llIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsImFwcGx5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50Iiwic3RyaW5naWZ5IiwicG9zdE1lc3NhZ2UiLCJpcyIsImllIiwicGFyYW1zIiwidmlzdWFsQnVsZGVyIiwiaGFzaEFwaSIsInBhcmVudCIsImhhc0J1aWxkZXIiLCJWaXN1YWxGcmFtZSIsInNtb290aFNjcm9sbCIsImluaXQiLCJ1c2VyU2V0dGluZ3MiLCJGcm9udGVuZE1vbnN0ZXJTZXR0aW5ncyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiYnVpbGRlciIsIiRidWlsZGVyIiwibGVuZ3RoIiwiVmlzdWFsQnVpbGRlciIsInJlc29sdXRpb25Td2l0Y2hlciIsIk1hcCIsImVudmlyb25tZW50U2VsZWN0b3IiLCJzd2l0Y2hFbnZpcm9ubWVudCIsImZpcnN0IiwibW9kIiwiYmluZE1lc3NhZ2VMaXN0ZW5lciIsImNvbnRyb2xzIiwiVmlzdWFsQnVpbGRlclNldHRpbmdzIiwiYnVuZGxlcyIsIiRzdGFja2FibGUiLCJ0aGF0IiwiYmVtRWxlbSIsIiRyZXNvbHV0aW9uTGlua3MiLCJjbGljayIsIndpZHRoIiwiJHNlY3Rpb25MaW5rcyIsImVudmlyb25tZW50TmFtZSIsImFjdGl2YXRlIiwiZW1wdHkiLCJwYW5lQ2xhc3MiLCJtb2RpZmllciIsImZpbmQiLCIkbmV3UGFuZSIsImFwcGVuZCIsIm1hdGVyaWFscyIsImhhc093blByb3BlcnR5IiwicmVzdWx0Iiwic2VyaWFsaXplUGFnZSIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRCeVByb3ZpZGVycyIsInByb3ZpZGVkS2V5cyIsImZyYW1lQ29udGVudFdpbmRvdyIsIk1PTlNURVJfRURJVF9NT0RFX0RBVEEiLCJ0ZW1wbGF0ZSIsInByb3ZpZGVySW5kZXgiLCJyZWdpb25zIiwicmVnaW9uS2V5IiwibWF0ZXJpYWxJbmRleCIsImRhdGFLZXlzIiwiZW52aXJvbm1lbnQiLCJwYWdlQ2hhbmdlZCIsIiRjb250cm9scyIsImVsZW0iLCJsb2NhdGlvbiIsInJlbG9hZCIsIiRjb250cm9sc1JpZ2h0IiwiRGlhbG9nSGVscGVyIiwiYnVpbGRlckRpYWxvZyIsIm9uQWpheExvYWQiLCIkdGFyZ2V0IiwiZGlhbG9nIiwiZGF0YUNoYW5nZXIiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJhdXRvRGVzdHJveSIsInNob3ciLCJBY3Rpb25FbnZpcm9ubWVudCIsIkN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCIsIk1hdGVyaWFsc0Vudmlyb25tZW50IiwiaW5pdE1hdGVyaWFsc1NlbGVjdG9yIiwiJG1hdGVyaWFsc0dyb3VwcyIsIiRtYXRlcmlhbHNMaXN0IiwiaTE4bkJ1bmRsZU5hbWUiLCJwb2x5Z2xvdCIsInQiLCJidW5kbGUiLCIkYnVuZGxlVGl0bGUiLCJmdWxsUGF0aCIsInB1c2giLCJncm91cHMiLCJncm91cE5hbWUiLCJncm91cCIsImkxOG5Hcm91cE5hbWUiLCIkbGkiLCIkbGlzdCIsIml0ZW1zIiwibWF0ZXJpYWxOYW1lIiwibWF0ZXJpYWwiLCJpMThuTWF0ZXJpYWxOYW1lIiwiJGl0ZW0iLCJkb2N1bWVudCIsIm9uIiwiY2xpY2tIYW5kbGVyIiwiJHRoaXMiLCJ0b2dnbGVNb2QiLCJncm91cFBhdGgiLCJlYWNoIiwiaXQiLCIkbWF0ZXJpYWxzUGFuZSIsImhpZGUiLCJQYWdlU3RydWN0dXJlRW52Iiwic2VsZWN0ZWRSZWdpb25LZXkiLCJzZWxlY3RlZEVudGl0eSIsIiRncm91cHNQYW5lIiwiY3JlYXRlU3RhY2thYmxlUGFuZSIsIlBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCIsImluaXRQYWdlU3RydWN0dXJlRWxlbWVudCIsIiRoZWFkZXIiLCIkcGFnZVN0cnVjdHVyZSIsIiRzdHJ1Y3R1cmVQYW5lIiwiZGV0YWNoIiwianN0cmVlIiwibGF5b3V0IiwibGF5b3V0SXRlbSIsImlkIiwidGVtcGxhdGVJZCIsInRleHQiLCJpY29uIiwic3RhdGUiLCJvcGVuZWQiLCJjaGlsZHJlbiIsInRlbXBsYXRlSXRlbSIsIiRsYXlvdXRSZWdpb25zIiwidGFyZ2V0JCIsIml0ZXIiLCJwcm9jZXNzTGF5b3V0IiwiaXRlbSIsInRlbXBsYXRlUmVnaW9ucyIsInJlZ2lvbiIsInBhZ2VTdHJ1Y3R1cmUiLCJjb3JlIiwiY2hlY2tfY2FsbGJhY2siLCJvcGVyYXRpb24iLCJub2RlIiwibm9kZV9wYXJlbnQiLCJ0eXBlIiwidGhlbWVzIiwicGx1Z2lucyIsImRuZCIsIm9wZW5fdGltZW91dCIsImxhcmdlX2Ryb3BfdGFyZ2V0IiwibGFyZ2VfZHJhZ190YXJnZXQiLCJjaGVja193aGlsZV9kcmFnZ2luZyIsImNvcHkiLCJpc19kcmFnZ2FibGUiLCJub2RlcyIsInVuZGVmaW5lZCIsInR5cGVzIiwidGVtcGxhdGVSZWdpb24iLCJjb250ZW50VGVtcGxhdGVSZWdpb24iLCJqc3RyZWVPYmoiLCJ1cGRhdGVQYWdlU3RydWN0dXJlSnNvbiIsImlzQ29udGVudFJlZ2lvbkZvdW5kIiwiZW50aXR5RGVwZW5kZW50Iiwic2VsZWN0X25vZGUiLCJwcmV2aWV3IiwiY29udHJvbEJ1dHRvbnMiLCJlIiwib2JqIiwiZW50aXR5VHlwZSIsIiRhbmNob3IiLCJwcmVwZW5kIiwic2VsZWN0TWF0ZXJpYWwiLCJzY3JvbGxUYXJnZXQiLCJpbmRleCIsIiR0YXJnZXRNYXRlcmlhbCIsInJlbW92ZUNsYXNzIiwib2Zmc2V0V2lkdGgiLCJhZGRDbGFzcyIsInBhZ2VTdHJ1Y3R1cmVKc29uIiwiZ2V0X2pzb24iLCJub19zdGF0ZSIsIm5vX2lkIiwibm9fbGlfYXR0ciIsIm5vX2FfYXR0ciIsIlNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmlxaWQiLCJwcmVmaXgiLCJtb3JlRW50cm9weSIsInJldElkIiwiX2Zvcm1hdFNlZWQiLCJzZWVkIiwicmVxV2lkdGgiLCJwYXJzZUludCIsInRvU3RyaW5nIiwic2xpY2UiLCJBcnJheSIsImpvaW4iLCIkZ2xvYmFsIiwiR0xPQkFMIiwiJGxvY3V0dXMiLCJwaHAiLCJ1bmlxaWRTZWVkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiRGF0ZSIsImdldFRpbWUiLCJ0b0ZpeGVkIiwiRGF0YVByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiYXNzb2NpYXRpb25zIiwiYXNzb2NpYXRlIiwiJHJlZ2lvbiIsIm1hdGVyaWFsS2V5IiwiJG1hdGVyaWFsIiwibWF0ZXJpYWxFZGl0YWJsZUtleXMiLCJpbml0aWFsaXplTWF0ZXJpYWxFZGl0IiwiJHJvb3QiLCIkYmxvY2tzIiwiY291bnRlciIsImVkaXRhYmxlIiwiaW5pdGlhbGl6ZUVkaXRhYmxlIiwic2VyaWFsaXplTWF0ZXJpYWwiLCJjbGFzcyIsImZpbGxDb25maWciLCJEYXRhUHJvdmlkZXJGYWN0b3J5IiwicHJvdmlkZXJEZWNsIiwicHJvdmlkZXIiLCJFZGl0YWJsZSIsImVkaXRhYmxlc0J5VHlwZSIsIk1PTlNURVJfRURJVEFCTEVTIiwiZXhwb3J0VmFyaWFibGUiLCJzZXJpYWxpemVOb2RlIiwic3RyaW5nIiwiSGFzaEFwaSIsImZ1bmN0aW9uQ2FsbHMiLCJoYXNoIiwibWF0Y2hlcyIsIm1hdGNoIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiaW5pdGlhbGl6ZSIsInBhZ2VTdHJ1Y3R1cmVKc29uRGF0YSIsInBhcmVudFdpbmRvdyIsInBhcmVudE1vbnN0ZXIiLCJwYXJlbnRCdWlsZGVyIiwiY3VycmVudE1vbnN0ZXJDb250ZW50IiwicmVzaXplIiwidXBkYXRlSGFuZGxlcnMiLCJpbml0UHJvdmlkZXJzIiwiTW9uc3RlckVkaXREYXRhIiwicHJvdmlkZXJzIiwiZ2V0UHJvdmlkZXJzIiwiZW50aXR5IiwiYXJyIiwiZmFjdG9yeSIsIiRtb25zdGVyQ29udGVudENhY2hlIiwiJHNlbGVjdGVkTWF0ZXJpYWwiLCIkaGFuZGxlcnMiLCJjc3MiLCJwb3NpdGlvbiIsInRvcCIsImhlaWdodCIsIiRtb25zdGVyQ29udGVudCIsIiRtb25zdGVyIiwidW5pcXVlQ29udGVudElkIiwic2VyaWFsaXplVW5pcXVlQ29udGVudCIsInNlbmRUb0J1aWxkZXIiLCJibG9jayIsIlZpc3VhbEZyYW1lU2V0dGluZ3MiLCJyZWdpb25OYW1lIiwicmFuZG9tSW5kZXgiLCJpdGVyYXRlVGVtcGxhdGVUeXBlIiwibWF0ZXJpYWxzQnlSZWdpb25EZWNsIiwiZGVjbCIsIm1hdGVyaWFsc09yZGVyIiwibWF0ZXJpYWxzRGVjbHMiLCJuZXdEYXRhIiwiYWN0aW9uIiwiZm9ybVN1Ym1pdCIsInJlZ2lvbnNSZXN1bHQiLCJpdGVyYXRlVGVtcGxhdGVSZWdpb25zIiwidGVtcGxhdGVSZWdpb25zT3JkZXIiLCJlbnRpdHlNYXRlcmlhbHMiLCJzZXJpYWxpemVQcm92aWRlcnMiLCJwcm92aWRlcktleSIsInNlcmlhbGl6ZSIsInZhbHVlIiwicmVmcmVzaE1vbnN0ZXJDb250ZW50Q2FjaGUiLCIkZm9ybSIsIiRpbnB1dCIsIiRjc3JmIiwiYXR0ciIsInZhbCIsImFwcGVuZFRvIiwic3VibWl0IiwicmVnaW9uTWF0ZXJpYWxzIiwiaXRlcmF0ZU1hdGVyaWFscyIsInJlZ2lvbklkIiwibWF0ZXJpYWxQYXRoIiwiV1lTSVdZRyIsImZyYW1lJCIsImVkaXRvciIsImdldERhdGEiLCJodG1sIiwiY29uZmlnIiwiYXV0b1BhcmFncmFwaCIsImVuYWJsZUNvbnRlbnRFZGl0YWJsZSIsImlnbm9yZUVtcHR5UGFyYWdyYXBoIiwiZW50ZXJNb2RlIiwiQ0tFRElUT1IiLCJFTlRFUl9CUiIsIkFsbG95RWRpdG9yIiwiYWxsIiwiSW1hZ2UiLCIkaW1nIiwic3JjIiwiYWx0IiwiTGluayIsImhyZWYiLCJhbmNob3IiLCJUZXh0U3RyaW5nIiwiYWxsb3dlZENvbnRlbnQiLCJ0b29sYmFycyIsInN0eWxlcyIsInNlbGVjdGlvbnMiLCJTZWxlY3Rpb25zIiwidGFiSW5kZXgiLCJibG9ja2xlc3MiLCJrZXlDb2RlIiwiU0hJRlQiLCJjYW5jZWwiLCJkYXRhVmFsdWUiLCJyZXBsYWNlIiwiU3RhdGljQ29udGVudCIsImVudGl0aWVzIiwic2VyaWFsaXplS2V5cyIsInJlY3Vyc2l2ZVNlcmlhbGl6ZSIsIndhcm4iLCJzZXJpYWxpemVFZGl0YWJsZSIsIkJhc2VDb250cm9scyIsImVudiIsInRoYXRFbnYiLCJidXR0b25zQXJyYXkiLCIkYnV0dG9uIiwiY29uZiIsImdldF9ub2RlIiwiTWF0ZXJpYWxDb250cm9scyIsImpzVHJlZU5vZGUiLCJkZWxldGVfbm9kZSIsImdldF9zZWxlY3RlZCIsIlBhZ2VJdGVyYXRvciIsIiRsYXlvdXRSZWdpb24iLCJleHRyYWN0UmVnaW9uRGF0YSIsIiRsYXlvdXRNYXRlcmlhbHMiLCIkbGF5b3V0TWF0ZXJpYWwiLCJwcm9jZXNzTGF5b3V0TWF0ZXJpYWwiLCJsYXlvdXRNYXRlcmlhbEl0ZW0iLCJsYXlvdXRNYXRlcmlhbCIsImVkaXRhYmxlS2V5cyIsIiRyZWdpb25zIiwicHJvY2Vzc1RlbXBsYXRlUmVnaW9uIiwiaXNDb250ZW50IiwiJHRlbXBsYXRlUmVnaW9uIiwiJHJlZ2lvbk1hdGVyaWFscyIsInByb2Nlc3NUZW1wbGF0ZVJlZ2lvbk1hdGVyaWFsIiwiJHJlZ2lvbk1hdGVyaWFsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVBOzs7Ozs7QUFFQUEsUUFBT0MsZUFBUCxHQUF5QiwrQkFBekI7QUFDQSxHOzs7Ozs7Ozs7Ozs7OztBQ0xBOzs7Ozs7OztLQUVNQyxlO0FBQ0osNEJBQVlDLGFBQVosRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQy9CLFVBQUtELGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0MsTUFBTCxHQUFjQyxFQUFFLEtBQUtILGFBQUwsQ0FBbUJJLFFBQW5CLENBQTRCLGdCQUE1QixDQUFGLEVBQWlELENBQWpELEVBQW9EQyxhQUFsRTtBQUNEOzs7O2dDQUVVO0FB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ZDtBQUVMMEYsZUFBTSxVQUZEO0FBR0wzSixlQUFNO0FBQ0pzSSxlQUFPaUUsTUFBUCxTQUFpQnRJLGFBRGI7QUFFSkEsdUNBRkk7QUFHSnNQLHFDQUhJO0FBSUo0RCx5QkFBY08sZ0JBQWdCMVgsSUFBaEIsQ0FBcUIsY0FBckIsQ0FKVjtBQUtKeUosaUJBQU1pTyxlQUxGO0FBTUp2TTtBQU5JO0FBSEQsUUFBUDtBQVlEOzs7dUNBRXdCN0wsSyxFQUFPO0FBQzlCLGNBQU87QUFDTGtKLGVBQU1sSixNQUFNVSxJQUFOLENBQVcsb0JBQVgsQ0FERDtBQUVMMkosZUFBTSxnQkFGRDtBQUdMM0osZUFBTTtBQUNKc1QscUJBQVVoVSxNQUFNVSxJQUFOLENBQVcsVUFBWCxDQUROO0FBRUpnRSxzQkFBVzFFLE1BQU1VLElBQU4sQ0FBVyxXQUFYLENBRlA7QUFHSnFSLDRCQUFpQi9SLE1BQU1VLElBQU4sQ0FBVyxpQkFBWCxDQUhiO0FBSUp5SixpQkFBTW5LO0FBSkY7QUFIRCxRQUFQO0FBVUQ7Ozs7OzttQkFHWXFYLFkiLCJmaWxlIjoidmlzdWFsLWJ1aWxkZXIvc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgM2MxZWI1NjFkNTExYjA3ZDJlMDVcbiAqKi8iLCJpbXBvcnQgJy4vYnVuZGxlLmNzcyc7XG5cbmltcG9ydCBGcm9udGVuZE1vbnN0ZXIgZnJvbSAnLi9Gcm9udGVuZE1vbnN0ZXInO1xuXG53aW5kb3cuRnJvbnRlbmRNb25zdGVyID0gbmV3IEZyb250ZW5kTW9uc3RlcigpO1xuLy9cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9idW5kbGUuanNcbiAqKi8iLCJpbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi8uLi92aXN1YWwtZnJhbWUvRnJhbWVBcGknO1xuXG5jbGFzcyBCYXNlRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2aXN1YWxCdWlsZGVyLCBuYW1lKSB7XG4gICAgdGhpcy52aXN1YWxCdWlsZGVyID0gdmlzdWFsQnVpbGRlcjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFyZ2V0ID0gJCh0aGlzLnZpc3VhbEJ1aWxkZXIuc2V0dGluZ3NbJ2ZyYW1lLXNlbGVjdG9yJ10pWzBdLmNvbnRlbnRXaW5kb3c7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICAvLyBkZWFjdGl2YXRlIGN1cnJlbnQgc2VsZWN0ZWQgZW52aXJvbm1lbnRcbiAgICBpZiAodGhpcy5uYW1lID09PSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3VycmVudEVudmlyb25tZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnZpc3VhbEJ1aWxkZXIuY3VycmVudEVudmlyb25tZW50KSB7XG4gICAgICB0aGlzLnZpc3VhbEJ1aWxkZXIuZW52aXJvbm1lbnRzLmdldCh0aGlzLnZpc3VhbEJ1aWxkZXIuY3VycmVudEVudmlyb25tZW50KS5kZWFjdGl2YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRhcmdldCQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0LiQ7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMudmlzdWFsQnVpbGRlci5jbGVhclN0YWNrYWJsZSgpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2UoZnVuYywgYXJncykge1xuICAgIHJldHVybiBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLnRhcmdldCwgZnVuYywgYXJncyk7XG4gIH1cblxuICBwYWdlQ2hhbmdlZCgpIHtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VFbnZpcm9ubWVudDtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL0Jhc2VFbnZpcm9ubWVudC5qc1xuICoqLyIsImNsYXNzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcblxuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBnZXQgZnJhbWUkKCkge1xuICAgIHJldHVybiB3aW5kb3cuJDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlRWRpdGFibGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL0Jhc2VFZGl0YWJsZS5qc1xuICoqLyIsImNsYXNzIEZyYW1lQXBpIHtcbiAgc3RhdGljIGdldCBpc0llKCkge1xuICAgIC8qIGdsb2JhbCBpcyAqL1xuICAgIGlmICh0eXBlb2YoaXMpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGlzLmllKCk7Ly8gfHwgaXMuZWRnZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGljIGJpbmRNZXNzYWdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrSGFuZGxlcihldmVudCkge1xuICAgICAgbGV0IG1lc3NhZ2UgPSBudWxsO1xuICAgICAgaWYgKEZyYW1lQXBpLmlzSWUpIHtcbiAgICAgICAgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXNzYWdlID0gZXZlbnQuZGF0YTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxpc3RlbmVyW21lc3NhZ2UuZnVuY10pIHtcbiAgICAgICAgbGlzdGVuZXJbbWVzc2FnZS5mdW5jXS5hcHBseShsaXN0ZW5lciwgbWVzc2FnZS5hcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSUU4XG4gICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29ubWVzc2FnZScsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgc2VuZE1lc3NhZ2UodGFyZ2V0LCBmdW5jLCBhcmdzKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGZ1bmMsXG4gICAgICBhcmdzXG4gICAgfTtcbiAgICBjb25zdCBtZXNzYWdlID0gRnJhbWVBcGkuaXNJZSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogZGF0YTtcblxuICAgIHRhcmdldC5wb3N0TWVzc2FnZShtZXNzYWdlLCAnKicpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyYW1lQXBpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanNcbiAqKi8iLCJpbXBvcnQgVmlzdWFsQnVpbGRlciBmcm9tICcuL2NvbXBvbmVudHMvYnVpbGRlci9WaXN1YWxCdWlsZGVyJztcbmltcG9ydCBWaXN1YWxGcmFtZSBmcm9tICcuL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL1Zpc3VhbEZyYW1lJztcbmltcG9ydCBIYXNoQXBpIGZyb20gJy4vY29tcG9uZW50cy92aXN1YWwtZnJhbWUvSGFzaEFwaSc7XG5cbmNsYXNzIEZyb250ZW5kTW9uc3RlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFyYW1zKCk7XG4gICAgdGhpcy52aXN1YWxCdWxkZXIgPSBudWxsO1xuICAgIHRoaXMuaGFzaEFwaSA9IG5ldyBIYXNoQXBpKCk7XG4gICAgaWYgKHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdyAmJiB3aW5kb3cucGFyZW50LkZyb250ZW5kTW9uc3Rlcikge1xuICAgICAgaWYgKHdpbmRvdy5wYXJlbnQuRnJvbnRlbmRNb25zdGVyLmhhc0J1aWxkZXIpIHtcbiAgICAgICAgdGhpcy5WaXN1YWxGcmFtZSA9IG5ldyBWaXN1YWxGcmFtZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiBnbG9iYWwgc21vb3RoU2Nyb2xsOiBmYWxzZSovXG4gICAgaWYgKHR5cGVvZihzbW9vdGhTY3JvbGwpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc21vb3RoU2Nyb2xsLmluaXQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBWaXN1YWxCdWlsZGVyIGNsYXNzIGluc3RhbmNlXG4gICAqIEByZXR1cm5zIFZpc3VhbEJ1aWxkZXJcbiAgICovXG4gIGdldCBidWlsZGVyKCkge1xuICAgIGlmICh0aGlzLnZpc3VhbEJ1bGRlciA9PT0gbnVsbCkge1xuICAgICAgdGhpcy52aXN1YWxCdWxkZXIgPSBuZXcgVmlzdWFsQnVpbGRlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy52aXN1YWxCdWxkZXI7XG4gIH1cblxuICAvKipcbiAgICogSWYgdGhpcyBGcm9udGVuZE1vbnN0ZXIgaW5zdGFuY2UgaGFzIFZpc3VhbCBCdWlsZGVyIG9uIHBhZ2VcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaGFzQnVpbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZGVyLiRidWlsZGVyLmxlbmd0aCA9PT0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIEZyb250ZW5kTW9uc3RlciBzZXR0aW5ncy5cbiAgICogVXNlcyBGcm9udGVuZE1vbnN0ZXJTZXR0aW5ncyB2YXJpYWJsZSBpZiBwcm92aWRlZCBvciBkZWZhdWx0IHZhbHVlcyBpbnN0ZWFkLlxuICAgKi9cbiAgcGFyYW1zKCkge1xuICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5Gcm9udGVuZE1vbnN0ZXJTZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHVzZXJTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcm9udGVuZE1vbnN0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9Gcm9udGVuZE1vbnN0ZXIuanNcbiAqKi8iLCJpbXBvcnQgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL1NpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCc7XG5pbXBvcnQgTWF0ZXJpYWxzRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvTWF0ZXJpYWxzRW52aXJvbm1lbnQnO1xuaW1wb3J0IEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9DdXN0b21pemF0aW9uRW52aXJvbm1lbnQnO1xuaW1wb3J0IEFjdGlvbkVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL0FjdGlvbkVudmlyb25tZW50JztcbmltcG9ydCBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50JztcbmltcG9ydCBGcmFtZUFwaSBmcm9tICcuLy4uL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaSc7XG4vLyBpbXBvcnQgRWRpdGFibGUgZnJvbSAnLi9FZGl0YWJsZSc7XG5cbmNsYXNzIFZpc3VhbEJ1aWxkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtcygpO1xuICAgIHRoaXMucmVzb2x1dGlvblN3aXRjaGVyKCk7XG5cbiAgICB0aGlzLmVudmlyb25tZW50cyA9IG5ldyBNYXAoW1xuICAgICAgWydzaXRlLXN0cnVjdHVyZScsIG5ldyBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQodGhpcywgJ3NpdGUtc3RydWN0dXJlJyldLFxuICAgICAgWydwYWdlLXN0cnVjdHVyZScsIG5ldyBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQodGhpcywgJ3BhZ2Utc3RydWN0dXJlJyldLFxuICAgICAgWydtYXRlcmlhbHMnLCBuZXcgTWF0ZXJpYWxzRW52aXJvbm1lbnQodGhpcywgJ21hdGVyaWFscycpXSxcbiAgICAgIFsnY3VzdG9taXphdGlvbicsIG5ldyBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQodGhpcywgJ2N1c3RvbWl6YXRpb24nKV0sXG4gICAgICBbJ2FjdGlvbicsIG5ldyBBY3Rpb25FbnZpcm9ubWVudCh0aGlzLCAnYWN0aW9uJyldLFxuICAgIF0pO1xuXG4gICAgdGhpcy5lbnZpcm9ubWVudFNlbGVjdG9yKCk7XG5cbiAgICAvLyBzZWxlY3QgZmlyc3QgZW52aXJvbm1lbnQgYnkgZGVmYXVsdFxuICAgIHRoaXMuc3dpdGNoRW52aXJvbm1lbnQoJ3NpdGUtc3RydWN0dXJlJyk7XG4gICAgJCgnLm1vbnN0ZXItZW52aXJvbm1lbnQtc2VsZWN0b3JfX2Vudmlyb25tZW50LWxpbmsnKVxuICAgICAgLmZpcnN0KClcbiAgICAgIC5tb2QoJ2FjdGl2ZScsIHRydWUpO1xuICAgIEZyYW1lQXBpLmJpbmRNZXNzYWdlTGlzdGVuZXIodGhpcyk7XG5cbiAgICAvLyB0aGlzLmVkaXRhYmxlID0gbmV3IEVkaXRhYmxlKCk7XG5cbiAgICB0aGlzLmNvbnRyb2xzKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBWaXN1YWxCdWlsZGVyIHNldHRpbmdzLlxuICAgKiBVc2VzIFZpc3VhbEJ1aWxkZXJTZXR0aW5ncyB2YXJpYWJsZSBpZiBwcm92aWRlZCBvciBkZWZhdWx0IHZhbHVlcyBpbnN0ZWFkLlxuICAgKi9cbiAgcGFyYW1zKCkge1xuICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5WaXN1YWxCdWlsZGVyU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICAnZWxlbWVudC1zZWxlY3Rvcic6ICcubW9uc3Rlci12aXN1YWwtYnVpbGRlcicsXG4gICAgICAnZnJhbWUtc2VsZWN0b3InOiAnLm1vbnN0ZXItdmlzdWFsLWZyYW1lJyxcbiAgICAgIGJ1bmRsZXM6IHt9LFxuICAgICAgJ3N0YWNrYWJsZS1jb250YWluZXItY2xhc3MnOiAnbW9uc3Rlci1zdGFja2FibGUtY29udGFpbmVyJyxcbiAgICAgICduZXctYmxvY2stdXJsJzogJy9tb25zdGVyL3Zpc3VhbC1idWlsZGVyL25ldy1ibG9jaycsXG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyh1c2VyU2V0dGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICB9KTtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy4kYnVpbGRlciA9ICQodGhpcy5zZXR0aW5nc1snZWxlbWVudC1zZWxlY3RvciddKTtcbiAgICB0aGlzLiRzdGFja2FibGUgPSAkKGAuJHt0aGlzLnNldHRpbmdzWydzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJ119YCk7XG4gIH1cblxuICByZXNvbHV0aW9uU3dpdGNoZXIoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgYmVtRWxlbSA9ICdyZXNvbHV0aW9uLXN3aXRjaGVyX19yZXNvbHV0aW9uLWxpbmsnO1xuXG4gICAgY29uc3QgJHJlc29sdXRpb25MaW5rcyA9ICQoYC4ke2JlbUVsZW19YCk7XG4gICAgJHJlc29sdXRpb25MaW5rcy5jbGljayhmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICRyZXNvbHV0aW9uTGlua3MubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgICAkKHRoYXQuc2V0dGluZ3NbJ2ZyYW1lLXNlbGVjdG9yJ10pLndpZHRoKCQodGhpcykuZGF0YSgncmVzb2x1dGlvbldpZHRoJykpO1xuICAgICAgJCh0aGlzKS5tb2QoJ2FjdGl2ZScsIHRydWUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgZW52aXJvbm1lbnRTZWxlY3RvcigpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBiZW1FbGVtID0gJ21vbnN0ZXItZW52aXJvbm1lbnQtc2VsZWN0b3JfX2Vudmlyb25tZW50LWxpbmsnO1xuXG4gICAgY29uc3QgJHNlY3Rpb25MaW5rcyA9ICQoYC4ke2JlbUVsZW19YCk7XG4gICAgJHNlY3Rpb25MaW5rcy5jbGljayhmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgIGNvbnN0IGVudmlyb25tZW50TmFtZSA9ICQodGhpcykuZGF0YSgnZW52aXJvbm1lbnROYW1lJyk7XG4gICAgICBpZiAodGhhdC5jdXJyZW50RW52aXJvbm1lbnQgPT09IGVudmlyb25tZW50TmFtZSkge1xuICAgICAgICAkc2VjdGlvbkxpbmtzLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgICAgICB0aGF0LmVudmlyb25tZW50cy5nZXQoZW52aXJvbm1lbnROYW1lKS5kZWFjdGl2YXRlKCk7XG4gICAgICAgIHRoYXQuY3VycmVudEVudmlyb25tZW50ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAkc2VjdGlvbkxpbmtzLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgICAgdGhhdC5zd2l0Y2hFbnZpcm9ubWVudChlbnZpcm9ubWVudE5hbWUpO1xuICAgICAgJCh0aGlzKS5tb2QoJ2FjdGl2ZScsIHRydWUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgc3dpdGNoRW52aXJvbm1lbnQoZW52aXJvbm1lbnROYW1lKSB7XG4gICAgdGhpcy5lbnZpcm9ubWVudHMuZ2V0KGVudmlyb25tZW50TmFtZSkuYWN0aXZhdGUoKTtcbiAgICB0aGlzLmN1cnJlbnRFbnZpcm9ubWVudCA9IGVudmlyb25tZW50TmFtZTtcbiAgfVxuXG4gIGNsZWFyU3RhY2thYmxlKCkge1xuICAgIHRoaXMuJHN0YWNrYWJsZS5lbXB0eSgpO1xuICB9XG5cbiAgY3JlYXRlU3RhY2thYmxlUGFuZSgpIHtcbiAgICBjb25zdCBwYW5lQ2xhc3MgPSBgJHt0aGlzLnNldHRpbmdzWydzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJ119X19wYW5lYDtcbiAgICBjb25zdCBtb2RpZmllciA9IHRoaXMuJHN0YWNrYWJsZS5maW5kKGAuJHtwYW5lQ2xhc3N9YCkubGVuZ3RoID09PSAwXG4gICAgICA/IGAke3BhbmVDbGFzc31fZmlyc3RgXG4gICAgICA6ICcnO1xuICAgIGNvbnN0ICRuZXdQYW5lID0gJChgPGRpdiBjbGFzcz1cIiR7cGFuZUNsYXNzfSAke21vZGlmaWVyfVwiPjwvZGl2PmApO1xuICAgIHRoaXMuJHN0YWNrYWJsZS5hcHBlbmQoJG5ld1BhbmUpO1xuICAgIHJldHVybiAkbmV3UGFuZTtcbiAgfVxuXG4gIG1hdGVyaWFsQnlOYW1lKG5hbWUpIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5tYXRlcmlhbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLm1hdGVyaWFsc1tuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXQgZnJhbWVDb250ZW50V2luZG93KCkge1xuICAgIHJldHVybiAkKHRoaXMuc2V0dGluZ3NbJ2ZyYW1lLXNlbGVjdG9yJ10pWzBdLmNvbnRlbnRXaW5kb3c7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgLy8gRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5mcmFtZUNvbnRlbnRXaW5kb3csICdzZXJpYWxpemVDb250ZW50JywgWydsb2cnXSk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5lbnZpcm9ubWVudHMuZ2V0KCdwYWdlLXN0cnVjdHVyZScpLnNlcmlhbGl6ZVBhZ2UoKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgLy8gd2UgaGF2ZSByZXN1bHQgd2hpY2ggaXMgY29udGVudCBpbiBmb3JtYXQ6XG4gICAgLy8gcmVnaW9uXG4gICAgLy8gLS0tIG1hdGVyaWFsIGlkXG4gICAgLy8gLS0tLS0tLSBrZXlzID0+IHZhbHVlc1xuICAgIC8vXG4gICAgLy8gb3VyIFByb3ZpZGVycyBzaG91bGQgZ2V0IG9ubHkgdGhvc2Uga2V5cyB0aGF0IHRoZXkgcHJvdmlkZVxuICAgIC8vIHByb3ZpZGVkIGtleXMgYXJlIHN0b3JlZCBpbiBmcmFtZUNvbnRlbnRXaW5kb3cuTU9OU1RFUl9FRElUX01PREVfREFUQS50ZW1wbGF0ZS5wcm92aWRlZEtleXNcbiAgICBjb25zdCByZXN1bHRCeVByb3ZpZGVycyA9IHt9O1xuICAgIGNvbnN0IHByb3ZpZGVkS2V5cyA9IHRoaXMuZnJhbWVDb250ZW50V2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEudGVtcGxhdGUucHJvdmlkZWRLZXlzO1xuXG4gICAgT2JqZWN0LmtleXMocHJvdmlkZWRLZXlzKS5mb3JFYWNoKHByb3ZpZGVySW5kZXggPT4ge1xuICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF0gPSB7fTtcblxuICAgICAgY29uc3QgcmVnaW9ucyA9IHByb3ZpZGVkS2V5c1twcm92aWRlckluZGV4XTtcblxuICAgICAgT2JqZWN0LmtleXMocmVnaW9ucykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0Lmhhc093blByb3BlcnR5KHJlZ2lvbktleSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdW3JlZ2lvbktleV0gPSB7fTtcblxuICAgICAgICAvLyBnbyBkZWVwIHRvIG1hdGVyaWFsIGluZGVjZXNcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gcmVnaW9uc1tyZWdpb25LZXldO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG1hdGVyaWFscykuZm9yRWFjaChtYXRlcmlhbEluZGV4ID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0W3JlZ2lvbktleV0uaGFzT3duUHJvcGVydHkobWF0ZXJpYWxJbmRleCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdW3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF0gPSB7fTtcblxuICAgICAgICAgIGNvbnN0IGRhdGFLZXlzID0gbWF0ZXJpYWxzW21hdGVyaWFsSW5kZXhdO1xuXG4gICAgICAgICAgZGF0YUtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdFtyZWdpb25LZXldW21hdGVyaWFsSW5kZXhdLmhhc093blByb3BlcnR5KGtleSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzXG4gICAgICAgICAgICAgIFtwcm92aWRlckluZGV4XVxuICAgICAgICAgICAgICBbcmVnaW9uS2V5XVxuICAgICAgICAgICAgICBbbWF0ZXJpYWxJbmRleF1cbiAgICAgICAgICAgICAgW2tleV0gPSByZXN1bHRbcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XVtrZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdEJ5UHJvdmlkZXJzKTtcbiAgICByZXR1cm4gcmVzdWx0QnlQcm92aWRlcnM7XG4gIH1cblxuICBwYWdlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmVudmlyb25tZW50cy5mb3JFYWNoKFxuICAgICAgZW52aXJvbm1lbnQgPT5cbiAgICAgICAgZW52aXJvbm1lbnQucGFnZUNoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICBsb2cocmVzdWx0KSB7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgfVxuXG4gIGNvbnRyb2xzKCkge1xuICAgIHRoaXMuJGNvbnRyb2xzID0gdGhpcy4kYnVpbGRlci5maW5kKCcuY29udHJvbHNfbGVmdCcpLmZpcnN0KCk7XG4gICAgdGhpcy4kY29udHJvbHMuZWxlbSgncmVmcmVzaCcpLmNsaWNrKCgpID0+IHtcbiAgICAgIHRoaXMuZnJhbWVDb250ZW50V2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kY29udHJvbHMuZWxlbSgnc2F2ZScpLmNsaWNrKCgpID0+IHtcbiAgICAgIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMuZnJhbWVDb250ZW50V2luZG93LCAnc2F2ZScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMuJGNvbnRyb2xzUmlnaHQgPSB0aGlzLiRidWlsZGVyLmZpbmQoJy5jb250cm9sc19yaWdodCcpLmZpcnN0KCk7XG4gICAgdGhpcy4kY29udHJvbHNSaWdodC5lbGVtKCdjbGVhci1jYWNoZScpLmNsaWNrKCgpID0+IHtcbiAgICAgIC8qIGdsb2JhbCB3aW5kb3c6IGZhbHNlICovXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiwgbm8tdW51c2VkLXZhcnMgKi9cbiAgICAgIHdpbmRvdy5EaWFsb2dIZWxwZXJcbiAgICAgICAgLmJ1aWxkZXJEaWFsb2coKVxuICAgICAgICAub25BamF4TG9hZCgoZGF0YSwgJHRhcmdldCwgZGlhbG9nLCBkYXRhQ2hhbmdlcikgPT4ge1xuICAgICAgICAgIGRhdGFDaGFuZ2VyKGRhdGEgPyAnPGRpdj5PSzwvZGl2PicgOiAnPGRpdj5FcnJvcjwvZGl2PicpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KVxuICAgICAgICAuYWpheCh7XG4gICAgICAgICAgdXJsOiAnL21vbnN0ZXIvYnVuZGxlcy9jbGVhci1jYWNoZScsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgfSlcbiAgICAgICAgLmF1dG9EZXN0cm95KClcbiAgICAgICAgLnNob3coKTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tcGFyYW0tcmVhc3NpZ24sIG5vLXVudXNlZC12YXJzICovXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsQnVpbGRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9WaXN1YWxCdWlsZGVyLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIEFjdGlvbkVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcblxufVxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0FjdGlvbkVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIE1hdGVyaWFsc0Vudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IodmlzdWFsQnVpbGRlciwgbmFtZSkge1xuICAgIHN1cGVyKHZpc3VhbEJ1aWxkZXIsIG5hbWUpO1xuICAgIHRoaXMuaW5pdE1hdGVyaWFsc1NlbGVjdG9yKCk7XG4gIH1cblxuICBpbml0TWF0ZXJpYWxzU2VsZWN0b3IoKSB7XG4gICAgdGhpcy4kbWF0ZXJpYWxzR3JvdXBzID0gJCgnPHVsIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc1wiPjwvdWw+Jyk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzTGlzdCA9IFtdO1xuXG4gICAgdGhpcy52aXN1YWxCdWlsZGVyLnNldHRpbmdzLmJ1bmRsZXMuZm9yRWFjaChidW5kbGUgPT4ge1xuICAgICAgLyogZ2xvYmFsIHBvbHlnbG90OiBmYWxzZSAqL1xuICAgICAgY29uc3QgaTE4bkJ1bmRsZU5hbWUgPSB0eXBlb2YocG9seWdsb3QpICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHBvbHlnbG90LnQoYnVuZGxlLm5hbWUpXG4gICAgICAgIDogYnVuZGxlLm5hbWU7XG5cbiAgICAgIGNvbnN0ICRidW5kbGVUaXRsZSA9IGBcbiAgICAgIDxsaSBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX2l0ZW0gbWF0ZXJpYWxzLWdyb3Vwc19faXRlbS0tYnVuZGxlLWxhYmVsXCI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtYnVuZGxlXCIgZGF0YS1idW5kbGUtcGF0aD1cIiR7YnVuZGxlLmZ1bGxQYXRofVwiPlxuICAgICAgICAgICAgJHtpMThuQnVuZGxlTmFtZX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICAgIGA7XG4gICAgICB0aGlzLiRtYXRlcmlhbHNMaXN0LnB1c2goJGJ1bmRsZVRpdGxlKTtcblxuICAgICAgYnVuZGxlLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBOYW1lID0gZ3JvdXAubmFtZTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gZ3JvdXAubWF0ZXJpYWxzO1xuICAgICAgICBjb25zdCBpMThuR3JvdXBOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCcgPyBwb2x5Z2xvdC50KGdyb3VwTmFtZSkgOiBncm91cE5hbWU7XG4gICAgICAgIGNvbnN0ICRsaSA9ICQoYFxuICAgIDxsaSBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX2l0ZW1cIj5cbiAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS1ncm91cC1wYXRoPVwiJHtncm91cC5mdWxsUGF0aH1cIiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cFwiPlxuICAgICAgICAke2kxOG5Hcm91cE5hbWV9IDxzcGFuIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fY291bnRcIj4oJHttYXRlcmlhbHMubGVuZ3RofSk8L3NwYW4+XG4gICAgICA8L2E+XG4gICAgPC9saT5gKTtcbiAgICAgICAgdGhpcy4kbWF0ZXJpYWxzR3JvdXBzLmFwcGVuZCgkbGkpO1xuICAgICAgICBjb25zdCAkbGlzdCA9ICQoYDx1bCBjbGFzcz1cIm1hdGVyaWFscy1saXN0XCIgZGF0YS1ncm91cC1wYXRoPVwiJHtncm91cC5mdWxsUGF0aH1cIj48L3VsPmApO1xuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuXG4gICAgICAgIG1hdGVyaWFscy5mb3JFYWNoKG1hdGVyaWFsID0+IHtcbiAgICAgICAgICBjb25zdCBtYXRlcmlhbE5hbWUgPSBtYXRlcmlhbC5uYW1lO1xuICAgICAgICAgIGNvbnN0IGkxOG5NYXRlcmlhbE5hbWUgPSB0eXBlb2YocG9seWdsb3QpICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBwb2x5Z2xvdC50KG1hdGVyaWFsTmFtZSlcbiAgICAgICAgICAgIDogbWF0ZXJpYWxOYW1lO1xuICAgICAgICAgIGNvbnN0ICRpdGVtID0gJChgXG48bGk+XG4gIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtYXRlcmlhbHMtbGlzdF9faXRlbVwiIGRhdGEtbWF0ZXJpYWwtcGF0aD1cIiR7bWF0ZXJpYWwuZnVsbFBhdGh9XCI+XG4gICAgJHtpMThuTWF0ZXJpYWxOYW1lfVxuICA8L2E+XG48L2xpPlxuYCk7XG4gICAgICAgICAgaXRlbXMucHVzaCgkaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkbGlzdC5hcHBlbmQoaXRlbXMpO1xuICAgICAgICB0aGlzLiRtYXRlcmlhbHNMaXN0LnB1c2goJGxpc3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAvKiBnbG9iYWwgZG9jdW1lbnQ6IGZhbHNlICovXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAnLCBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAkdGhpcy50b2dnbGVNb2QoJ2FjdGl2ZScpO1xuICAgICAgY29uc3QgZ3JvdXBQYXRoID0gJHRoaXMuZGF0YSgnZ3JvdXBQYXRoJyk7XG4gICAgICBpZiAoJHRoaXMubW9kKCdhY3RpdmUnKSkge1xuICAgICAgICAkKCcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJykubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG5cbiAgICAgICAgJCgnLm1hdGVyaWFscy1saXN0JykuZWFjaChmdW5jdGlvbiBpdCgpIHtcbiAgICAgICAgICBjb25zdCAkbGlzdCA9ICQodGhpcyk7XG4gICAgICAgICAgaWYgKCRsaXN0Lm1vZCgnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICRsaXN0Lm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoJGxpc3QuZGF0YSgnZ3JvdXBQYXRoJykgPT09IGdyb3VwUGF0aCkge1xuICAgICAgICAgICAgJGxpc3QubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICR0aGlzLm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgICAgIHRoYXQuJG1hdGVyaWFsc1BhbmUuc2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhhdCdzIGp1c3Qgc2Vjb25kIGNsaWNrIG9uIHRoZSBzYW1lIGdyb3VwXG4gICAgICAgIHRoYXQuJG1hdGVyaWFsc1BhbmUuaGlkZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hdGVyaWFscy1saXN0X19pdGVtJywgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCkge1xuICAgICAgY29uc3QgUGFnZVN0cnVjdHVyZUVudiA9IHRoYXQudmlzdWFsQnVpbGRlci5lbnZpcm9ubWVudHMuZ2V0KCdwYWdlLXN0cnVjdHVyZScpO1xuXG4gICAgICBjb25zdCBzZWxlY3RlZFJlZ2lvbktleSA9IFBhZ2VTdHJ1Y3R1cmVFbnYuc2VsZWN0ZWRSZWdpb25LZXk7XG4gICAgICBjb25zdCBzZWxlY3RlZEVudGl0eSA9IFBhZ2VTdHJ1Y3R1cmVFbnYuc2VsZWN0ZWRFbnRpdHk7XG5cbiAgICAgIGlmIChzZWxlY3RlZFJlZ2lvbktleSAhPT0gbnVsbCAmJiBzZWxlY3RlZEVudGl0eSAhPT0gbnVsbCkge1xuICAgICAgICB0aGF0LnNlbmRNZXNzYWdlKFxuICAgICAgICAgICduZXdCbG9jaycsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKCdtYXRlcmlhbFBhdGgnKSxcbiAgICAgICAgICAgIHNlbGVjdGVkRW50aXR5LFxuICAgICAgICAgICAgc2VsZWN0ZWRSZWdpb25LZXksXG4gICAgICAgICAgXVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgc3VwZXIuYWN0aXZhdGUoKTtcblxuICAgIHRoaXMuJGdyb3Vwc1BhbmUgPSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3JlYXRlU3RhY2thYmxlUGFuZSgpO1xuICAgIHRoaXMuJGdyb3Vwc1BhbmUuYXBwZW5kKHRoaXMuJG1hdGVyaWFsc0dyb3Vwcyk7XG5cbiAgICB0aGlzLiRtYXRlcmlhbHNQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRtYXRlcmlhbHNQYW5lLmFwcGVuZCh0aGlzLiRtYXRlcmlhbHNMaXN0KTtcbiAgICB0aGlzLiRtYXRlcmlhbHNQYW5lLmhpZGUoKTtcblxuICAgIC8qXG4gICAgY29uc3QgUGFnZVN0cnVjdHVyZUVudiA9IHRoYXQudmlzdWFsQnVpbGRlci5lbnZpcm9ubWVudHMuZ2V0KCdwYWdlLXN0cnVjdHVyZScpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRSZWdpb25LZXkgPSBQYWdlU3RydWN0dXJlRW52LnNlbGVjdGVkUmVnaW9uS2V5O1xuICAgIGNvbnN0IHNlbGVjdGVkRW50aXR5ID0gUGFnZVN0cnVjdHVyZUVudi5zZWxlY3RlZEVudGl0eTtcblxuICAgIEB0b2RvIGNoZWNrIGZvciBzZWxlY3RlZFJlZ2lvbiBpZiBub3QgLSB3ZSBtdXN0IG5vdCBhZGQgYmxvY2sgaGVyZVxuICAgICovXG5cbiAgICAkKCcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJykubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFsc0Vudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9NYXRlcmlhbHNFbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuaW1wb3J0IE1hdGVyaWFsQ29udHJvbHMgZnJvbSAnLi8uLi9QYWdlU3RydWN0dXJlL01hdGVyaWFsQ29udHJvbHMnO1xuaW1wb3J0IFBhZ2VJdGVyYXRvciBmcm9tICcuLy4uL1BhZ2VTdHJ1Y3R1cmUvUGFnZUl0ZXJhdG9yJztcblxuY2xhc3MgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IodmlzdWFsQnVpbGRlciwgbmFtZSkge1xuICAgIHN1cGVyKHZpc3VhbEJ1aWxkZXIsIG5hbWUpO1xuICAgIHRoaXMuaW5pdFBhZ2VTdHJ1Y3R1cmVFbGVtZW50KCk7XG4gICAgdGhpcy5zZWxlY3RlZFJlZ2lvbktleSA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RlZEVudGl0eSA9IG51bGw7XG4gIH1cblxuICBpbml0UGFnZVN0cnVjdHVyZUVsZW1lbnQoKSB7XG4gICAgdGhpcy4kaGVhZGVyID0gJCgnPGRpdiBjbGFzcz1cIm1vbnN0ZXItc3RhY2thYmxlLWNvbnRhaW5lcl9fcGFuZS1oZWFkZXJcIj5QYWdlIHN0cnVjdHVyZTwvZGl2PicpO1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUgPSAkKCc8ZGl2IGNsYXNzPVwicGFnZS1zdHJ1Y3R1cmVcIj48L2Rpdj4nKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHN1cGVyLmFjdGl2YXRlKCk7XG5cbiAgICB0aGlzLiRzdHJ1Y3R1cmVQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRzdHJ1Y3R1cmVQYW5lLmFwcGVuZCh0aGlzLiRoZWFkZXIpO1xuICAgIHRoaXMuJHN0cnVjdHVyZVBhbmUuYXBwZW5kKHRoaXMuJHBhZ2VTdHJ1Y3R1cmUpO1xuICB9XG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5kZXRhY2goKTtcbiAgICB0aGlzLiRoZWFkZXIuZGV0YWNoKCk7XG4gICAgc3VwZXIuZGVhY3RpdmF0ZSgpO1xuICB9XG5cbiAgcGFnZUNoYW5nZWQoKSB7XG4gICAgc3VwZXIucGFnZUNoYW5nZWQoKTtcbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlLmpzdHJlZSgnZGVzdHJveScpO1xuICAgIGNvbnN0IGxheW91dCA9IHRoaXMudGFyZ2V0Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEubGF5b3V0O1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy50YXJnZXQuTU9OU1RFUl9FRElUX01PREVfREFUQS50ZW1wbGF0ZTtcblxuICAgIGNvbnN0IGxheW91dEl0ZW0gPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiAnbGF5b3V0JyxcbiAgICAgICAgdGVtcGxhdGVJZDogbGF5b3V0LmlkLFxuICAgICAgfSxcbiAgICAgIHRleHQ6IGBMYXlvdXQgLSAke2xheW91dC5rZXl9ICMke2xheW91dC5pZH1gLFxuICAgICAgaWNvbjogJ2ZhIGZhLWNvbHVtbnMnLFxuICAgICAgc3RhdGU6IHtcbiAgICAgICAgb3BlbmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICB9O1xuICAgIGNvbnN0IHRlbXBsYXRlSXRlbSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6ICd0ZW1wbGF0ZScsXG4gICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgfSxcbiAgICAgIHRleHQ6IGBUZW1wbGF0ZSAtICR7dGVtcGxhdGUua2V5fSAjJHt0ZW1wbGF0ZS5pZH1gLFxuICAgICAgaWNvbjogJ2ZhIGZhLXRoJyxcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIG9wZW5lZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgfTtcblxuICAgIGNvbnN0ICRsYXlvdXRSZWdpb25zID0gdGhpcy50YXJnZXQkKCcubS1tb25zdGVyLWNvbnRlbnRfX2xheW91dCcpO1xuXG4gICAgJGxheW91dFJlZ2lvbnMuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gUGFnZUl0ZXJhdG9yLnByb2Nlc3NMYXlvdXQoJCh0aGlzKSk7XG4gICAgICBsYXlvdXRJdGVtLmNoaWxkcmVuLnB1c2gocmVzdWx0Lml0ZW0pO1xuICAgICAgcmVzdWx0LnRlbXBsYXRlUmVnaW9ucy5mb3JFYWNoKHJlZ2lvbiA9PiB7XG4gICAgICAgIHRlbXBsYXRlSXRlbS5jaGlsZHJlbi5wdXNoKHJlZ2lvbik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMucGFnZVN0cnVjdHVyZSA9IFtcbiAgICAgIGxheW91dEl0ZW0sXG4gICAgICB0ZW1wbGF0ZUl0ZW0sXG4gICAgXTtcblxuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUuanN0cmVlKHtcbiAgICAgIGNvcmU6IHtcbiAgICAgICAgY2hlY2tfY2FsbGJhY2s6IChvcGVyYXRpb24sIG5vZGUsIG5vZGVfcGFyZW50LyosIG5vZGVfcG9zaXRpb24sIG1vcmUqLykgPT4ge1xuICAgICAgICAgIGlmIChvcGVyYXRpb24gPT09ICdtb3ZlX25vZGUnKSB7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSAnbWF0ZXJpYWwnKSB7XG4gICAgICAgICAgICAgIHJldHVybiBub2RlX3BhcmVudC50eXBlID09PSAndGVtcGxhdGVSZWdpb24nIHx8IG5vZGVfcGFyZW50LnR5cGUgPT09ICdjb250ZW50VGVtcGxhdGVSZWdpb24nO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLnR5cGUgPT09ICd0ZW1wbGF0ZVJlZ2lvbicgfHwgbm9kZS50eXBlID09PSAnY29udGVudFRlbXBsYXRlUmVnaW9uJykge1xuICAgICAgICAgICAgICByZXR1cm4gbm9kZV9wYXJlbnQudHlwZSA9PT0gJ2RlZmF1bHQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogdGhpcy5wYWdlU3RydWN0dXJlLFxuICAgICAgICB0aGVtZXM6IHtcbiAgICAgICAgICBuYW1lOiAnZGVmYXVsdC1kYXJrJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgICd0eXBlcycsXG4gICAgICAgICd3aG9sZXJvdycsXG4gICAgICAgICdkbmQnLFxuICAgICAgXSxcbiAgICAgIGRuZDoge1xuICAgICAgICBvcGVuX3RpbWVvdXQ6IDIwMCxcbiAgICAgICAgbGFyZ2VfZHJvcF90YXJnZXQ6IHRydWUsXG4gICAgICAgIGxhcmdlX2RyYWdfdGFyZ2V0OiB0cnVlLFxuICAgICAgICBjaGVja193aGlsZV9kcmFnZ2luZzogdHJ1ZSxcbiAgICAgICAgY29weTogZmFsc2UsXG4gICAgICAgIGlzX2RyYWdnYWJsZTogZnVuY3Rpb24obm9kZXMpIHtcbiAgICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbMF0gfHwgdW5kZWZpbmVkO1xuICAgICAgICAgIGlmIChub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ21hdGVyaWFsJ1xuICAgICAgICAgICAgfHwgbm9kZS50eXBlID09PSAnY29udGVudFRlbXBsYXRlUmVnaW9uJ1xuICAgICAgICAgICAgfHwgbm9kZS50eXBlID09PSAndGVtcGxhdGVSZWdpb24nO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdHlwZXM6IHtcbiAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgaWNvbjogJ2ZhIGZhLWNvbHVtbnMnLFxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgIGljb246ICdmYSBmYS10aCcsXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlUmVnaW9uOiB7XG4gICAgICAgICAgaWNvbjogJ2ZhIGZhLWZvbGRlci1vJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudFRlbXBsYXRlUmVnaW9uOiB7XG4gICAgICAgICAgaWNvbjogJ2ZhIGZhLWZvbGRlcicsXG4gICAgICAgIH0sXG4gICAgICAgIG1hdGVyaWFsOiB7XG4gICAgICAgICAgaWNvbjogJ2ZhIGZhLXB1enpsZS1waWVjZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgdGhpcy5qc3RyZWVPYmogPSB0aGlzLiRwYWdlU3RydWN0dXJlLmpzdHJlZSgpO1xuXG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZVxuICAgICAgLm9uKCdsb2FkZWQuanN0cmVlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VTdHJ1Y3R1cmVKc29uKCk7XG5cbiAgICAgICAgbGV0IGlzQ29udGVudFJlZ2lvbkZvdW5kID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFnZVN0cnVjdHVyZVsxXS5jaGlsZHJlbi5mb3JFYWNoKChyZWdpb24pID0+IHtcbiAgICAgICAgICBpZiAocmVnaW9uLmRhdGEuZW50aXR5RGVwZW5kZW50ICYmIGlzQ29udGVudFJlZ2lvbkZvdW5kID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaXNDb250ZW50UmVnaW9uRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5qc3RyZWVPYmouc2VsZWN0X25vZGUocmVnaW9uLmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSlcblxuICAgICAgLm9uKCdtb3ZlX25vZGUuanN0cmVlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VTdHJ1Y3R1cmVKc29uKCk7XG4gICAgICAgIHRoaXMudGFyZ2V0LkZyb250ZW5kTW9uc3Rlci5WaXN1YWxGcmFtZS5wcmV2aWV3KCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmNvbnRyb2xCdXR0b25zID0ge1xuICAgICAgbWF0ZXJpYWw6IG5ldyBNYXRlcmlhbENvbnRyb2xzKHRoaXMpLFxuICAgIH07XG4gICAgY29uc29sZS5sb2codGhpcy5jb250cm9sQnV0dG9ucyk7XG5cbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlLm9uKCdzZWxlY3Rfbm9kZS5qc3RyZWUnLCAoZSwgb2JqKSA9PiB7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSBvYmoubm9kZS50eXBlO1xuICAgICAgdGhpcy5zZWxlY3RlZEVudGl0eSA9IG9iai5ub2RlLmRhdGEuZW50aXR5VHlwZSB8fCBudWxsO1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21hdGVyaWFsJzpcbiAgICAgICAgICBjb25zdCAkYW5jaG9yID0gJChgIyR7b2JqLm5vZGUuaWR9YCk7XG4gICAgICAgICAgJGFuY2hvci5wcmVwZW5kKHRoaXMuY29udHJvbEJ1dHRvbnNbdHlwZV0uY29udHJvbEJ1dHRvbnMpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0TWF0ZXJpYWwob2JqLm5vZGUuZGF0YS5tYXRlcmlhbEluZGV4KTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUmVnaW9uS2V5ID0gb2JqLm5vZGUuZGF0YS5yZWdpb25LZXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RlbXBsYXRlUmVnaW9uJzpcbiAgICAgICAgY2FzZSAnY29udGVudFRlbXBsYXRlUmVnaW9uJzpcbiAgICAgICAgICB0aGlzLnRhcmdldCQuc21vb3RoU2Nyb2xsKHtcbiAgICAgICAgICAgIHNjcm9sbFRhcmdldDogdGhpcy50YXJnZXQkKGBbZGF0YS1yZWdpb24ta2V5PVwiJHtvYmoubm9kZS5kYXRhLnJlZ2lvbktleX1cIl1gKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUmVnaW9uS2V5ID0gb2JqLm5vZGUuZGF0YS5yZWdpb25LZXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJlZ2lvbktleSA9IG51bGw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RNYXRlcmlhbChpbmRleCkge1xuICAgIGNvbnN0ICR0YXJnZXRNYXRlcmlhbCA9IHRoaXMudGFyZ2V0JChgW2RhdGEtbWF0ZXJpYWwtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuICAgICQoJy5tLW1vbnN0ZXItbWF0ZXJpYWxfc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnbS1tb25zdGVyLW1hdGVyaWFsX3NlbGVjdGVkJyk7XG4gICAgdGhpcy50YXJnZXQkLnNtb290aFNjcm9sbCh7XG4gICAgICBzY3JvbGxUYXJnZXQ6ICR0YXJnZXRNYXRlcmlhbCxcbiAgICB9KTtcbiAgICAvLyByZXN0YXJ0IGFuaW1hdGlvbiBtYWdpYy4gc2VlIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vcmVzdGFydC1jc3MtYW5pbWF0aW9uL1xuICAgICR0YXJnZXRNYXRlcmlhbFxuICAgICAgLnJlbW92ZUNsYXNzKCdtLW1vbnN0ZXItbWF0ZXJpYWxfc2VsZWN0ZWQnKTtcblxuICAgIHZvaWQgJHRhcmdldE1hdGVyaWFsWzBdLm9mZnNldFdpZHRoO1xuXG4gICAgJHRhcmdldE1hdGVyaWFsXG4gICAgICAuYWRkQ2xhc3MoJ20tbW9uc3Rlci1tYXRlcmlhbF9zZWxlY3RlZCcpO1xuICB9XG5cbiAgdXBkYXRlUGFnZVN0cnVjdHVyZUpzb24oKSB7XG4gICAgdGhpcy5wYWdlU3RydWN0dXJlSnNvbiA9IHRoaXMuanN0cmVlT2JqLmdldF9qc29uKHRoaXMuJHBhZ2VTdHJ1Y3R1cmUsIHtcbiAgICAgIG5vX3N0YXRlOiB0cnVlLFxuICAgICAgbm9faWQ6IHRydWUsXG4gICAgICBub19saV9hdHRyOiB0cnVlLFxuICAgICAgbm9fYV9hdHRyOiB0cnVlLFxuICAgIH0pO1xuICAgIHRoaXMudGFyZ2V0LkZyb250ZW5kTW9uc3Rlci5WaXN1YWxGcmFtZS5wYWdlU3RydWN0dXJlSnNvbiA9IHRoaXMucGFnZVN0cnVjdHVyZUpzb247XG4gIH1cblxuXG5cblxuXG59XG5leHBvcnQgZGVmYXVsdCBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1NpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdW5pcWlkIChwcmVmaXgsIG1vcmVFbnRyb3B5KSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvdW5pcWlkL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gIHJldmlzZWQgYnk6IEthbmtyZWx1bmUgKGh0dHA6Ly93d3cud2ViZmFrdG9yeS5pbmZvLylcbiAgLy8gICAgICBub3RlIDE6IFVzZXMgYW4gaW50ZXJuYWwgY291bnRlciAoaW4gbG9jdXR1cyBnbG9iYWwpIHRvIGF2b2lkIGNvbGxpc2lvblxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRpZCA9IHVuaXFpZCgpXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJHJlc3VsdCA9ICRpZC5sZW5ndGggPT09IDEzXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiB2YXIgJGlkID0gdW5pcWlkKCdmb28nKVxuICAvLyAgIGV4YW1wbGUgMjogdmFyICRyZXN1bHQgPSAkaWQubGVuZ3RoID09PSAoMTMgKyAnZm9vJy5sZW5ndGgpXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgJGlkID0gdW5pcWlkKCdiYXInLCB0cnVlKVxuICAvLyAgIGV4YW1wbGUgMzogdmFyICRyZXN1bHQgPSAkaWQubGVuZ3RoID09PSAoMjMgKyAnYmFyJy5sZW5ndGgpXG4gIC8vICAgcmV0dXJucyAzOiB0cnVlXG5cbiAgaWYgKHR5cGVvZiBwcmVmaXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcHJlZml4ID0gJydcbiAgfVxuXG4gIHZhciByZXRJZFxuICB2YXIgX2Zvcm1hdFNlZWQgPSBmdW5jdGlvbiAoc2VlZCwgcmVxV2lkdGgpIHtcbiAgICBzZWVkID0gcGFyc2VJbnQoc2VlZCwgMTApLnRvU3RyaW5nKDE2KSAvLyB0byBoZXggc3RyXG4gICAgaWYgKHJlcVdpZHRoIDwgc2VlZC5sZW5ndGgpIHtcbiAgICAgIC8vIHNvIGxvbmcgd2Ugc3BsaXRcbiAgICAgIHJldHVybiBzZWVkLnNsaWNlKHNlZWQubGVuZ3RoIC0gcmVxV2lkdGgpXG4gICAgfVxuICAgIGlmIChyZXFXaWR0aCA+IHNlZWQubGVuZ3RoKSB7XG4gICAgICAvLyBzbyBzaG9ydCB3ZSBwYWRcbiAgICAgIHJldHVybiBBcnJheSgxICsgKHJlcVdpZHRoIC0gc2VlZC5sZW5ndGgpKS5qb2luKCcwJykgKyBzZWVkXG4gICAgfVxuICAgIHJldHVybiBzZWVkXG4gIH1cblxuICB2YXIgJGdsb2JhbCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IEdMT0JBTClcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge31cbiAgdmFyICRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1c1xuICAkbG9jdXR1cy5waHAgPSAkbG9jdXR1cy5waHAgfHwge31cblxuICBpZiAoISRsb2N1dHVzLnBocC51bmlxaWRTZWVkKSB7XG4gICAgLy8gaW5pdCBzZWVkIHdpdGggYmlnIHJhbmRvbSBpbnRcbiAgICAkbG9jdXR1cy5waHAudW5pcWlkU2VlZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDB4NzViY2QxNSlcbiAgfVxuICAkbG9jdXR1cy5waHAudW5pcWlkU2VlZCsrXG5cbiAgLy8gc3RhcnQgd2l0aCBwcmVmaXgsIGFkZCBjdXJyZW50IG1pbGxpc2Vjb25kcyBoZXggc3RyaW5nXG4gIHJldElkID0gcHJlZml4XG4gIHJldElkICs9IF9mb3JtYXRTZWVkKHBhcnNlSW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCwgMTApLCA4KVxuICAvLyBhZGQgc2VlZCBoZXggc3RyaW5nXG4gIHJldElkICs9IF9mb3JtYXRTZWVkKCRsb2N1dHVzLnBocC51bmlxaWRTZWVkLCA1KVxuICBpZiAobW9yZUVudHJvcHkpIHtcbiAgICAvLyBmb3IgbW9yZSBlbnRyb3B5IHdlIGFkZCBhIGZsb2F0IGxvd2VyIHRvIDEwXG4gICAgcmV0SWQgKz0gKE1hdGgucmFuZG9tKCkgKiAxMCkudG9GaXhlZCg4KS50b1N0cmluZygpXG4gIH1cblxuICByZXR1cm4gcmV0SWRcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3VuaXFpZC5qc1xuICoqLyIsImNsYXNzIERhdGFQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSwgcHJvdmlkZWRLZXlzKSB7XG4gICAgdGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgdGhpcy5wcm92aWRlZEtleXMgPSBwcm92aWRlZEtleXM7XG4gICAgdGhpcy5hc3NvY2lhdGlvbnMgPSB7fTtcbiAgICB0aGlzLmFzc29jaWF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHtFZGl0YWJsZX1cbiAgICovXG4gIHN0YXRpYyBnZXQgZWRpdGFibGUoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5Gcm9udGVuZE1vbnN0ZXIuVmlzdWFsRnJhbWUuZWRpdGFibGU7XG4gIH1cblxuICBhc3NvY2lhdGUoKSB7XG4gICAgdGhpcy5hc3NvY2lhdGlvbnMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnByb3ZpZGVkS2V5cykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgY29uc3QgcmVnaW9uID0gdGhpcy5wcm92aWRlZEtleXNbcmVnaW9uS2V5XTtcbiAgICAgIGNvbnN0ICRyZWdpb24gPSAkKGBbZGF0YS1yZWdpb24ta2V5PVwiJHtyZWdpb25LZXl9XCJdYCkuZmlyc3QoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGAlY1JlZ2lvbjogJHtyZWdpb25LZXl9YCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkOyBiYWNrZ3JvdW5kOiAjMzMzJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZWdpb24pO1xuICAgICAgY29uc3QgbWF0ZXJpYWxzID0ge307XG4gICAgICBPYmplY3Qua2V5cyhyZWdpb24pLmZvckVhY2gobWF0ZXJpYWxLZXkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhS2V5cyA9IHJlZ2lvblttYXRlcmlhbEtleV07XG4gICAgICAgIGNvbnN0ICRtYXRlcmlhbCA9ICRyZWdpb24uZmluZChgW2RhdGEtbWF0ZXJpYWwtaW5kZXg9XCIke21hdGVyaWFsS2V5fVwiXWApLmZpcnN0KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAlY01hdGVyaWFsOiAke21hdGVyaWFsS2V5fWAsICdjb2xvcjogI2ZmZjsgZm9udC13ZWlnaHQ6IGJvbGQ7IGJhY2tncm91bmQ6ICM2OWYnKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJG1hdGVyaWFsKTtcbiAgICAgICAgaWYgKCRtYXRlcmlhbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbWF0ZXJpYWxzW21hdGVyaWFsS2V5XSA9IHtcbiAgICAgICAgICBkYXRhS2V5cyxcbiAgICAgICAgICAkbWF0ZXJpYWwsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsRWRpdGFibGVLZXlzID0gJG1hdGVyaWFsLmRhdGEoJ2VkaXRhYmxlS2V5cycpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVNYXRlcmlhbEVkaXQobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRtYXRlcmlhbCwgZGF0YUtleXMpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFzc29jaWF0aW9uc1tyZWdpb25LZXldID0ge1xuICAgICAgICAkcmVnaW9uLFxuICAgICAgICBtYXRlcmlhbHMsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGl6ZU1hdGVyaWFsRWRpdChtYXRlcmlhbEVkaXRhYmxlS2V5cywgJHJvb3QsIGRhdGFLZXlzLCBwcmVmaXggPSAnJykge1xuICAgIGRhdGFLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IG9iaiA9IG1hdGVyaWFsRWRpdGFibGVLZXlzW2tleV0gfHwgJ05PX1NVQ0hfS0VZJztcbiAgICAgIGlmIChvYmogPT09ICdOT19TVUNIX0tFWScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9iaiA9PT0gT2JqZWN0KG9iaikpIHtcbiAgICAgICAgLy8gaXQncyByZWN1cnNpdmVcbiAgICAgICAgLy8gZmlyc3QgLSBmaW5kIGFsbCBibG9ja3NcbiAgICAgICAgY29uc3QgJGJsb2NrcyA9ICRyb290LmZpbmQoYFtkYXRhLXJlY3Vyc2l2ZS1pdGVtPVwiJHtrZXl9XCJdYCk7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgICRibG9ja3MuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJWMgUmVjdXJzaXZlIGl0ZW0gJHtrZXl9ICMke2NvdW50ZXJ9YCwgJ2JhY2tncm91bmQ6ICMyMjI7IGNvbG9yOiAjYmFkYTU1Jyk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgICAgdGhhdC5pbml0aWFsaXplTWF0ZXJpYWxFZGl0KG9iaiwgJHRoaXMsIE9iamVjdC5rZXlzKG9iaiksICdpdGVtLicpO1xuICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpdCdzIHBsYWluIGZpZWxkXG4gICAgICAgIGNvbnN0ICRub2RlID0gJHJvb3QuZmluZChgW2RhdGEtZWRpdGFibGUta2V5PVwiJHtwcmVmaXh9JHtrZXl9XCJdYCkuZmlyc3QoKTtcbiAgICAgICAgaWYgKCRub2RlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBEYXRhUHJvdmlkZXIuZWRpdGFibGUuaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCVjIFBsYWluIGZpZWxkIGVkaXRhYmxlICR7cHJlZml4fSR7a2V5fWAsICdiYWNrZ3JvdW5kOiAjMjIyOyBjb2xvcjogI2JhZGE1NScpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygkbm9kZVswXS5vdXRlckhUTUwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICBzZXJpYWxpemVLZXlzKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMuYXNzb2NpYXRpb25zKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICBjb25zdCByZWdpb24gPSB0aGlzLmFzc29jaWF0aW9uc1tyZWdpb25LZXldO1xuICAgICAgY29uc3QgJHJlZ2lvbiA9IHJlZ2lvbi4kcmVnaW9uO1xuICAgICAgcmVzdWx0W3JlZ2lvbktleV0gPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKHJlZ2lvbi5tYXRlcmlhbHMpLmZvckVhY2gobWF0ZXJpYWxLZXkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhS2V5cyA9IHJlZ2lvbi5tYXRlcmlhbHNbbWF0ZXJpYWxLZXldLmRhdGFLZXlzO1xuICAgICAgICBjb25zdCAkbWF0ZXJpYWwgPSByZWdpb24ubWF0ZXJpYWxzW21hdGVyaWFsS2V5XS4kbWF0ZXJpYWw7XG4gICAgICAgIHJlc3VsdFtyZWdpb25LZXldW21hdGVyaWFsS2V5XSA9IHRoaXMuc2VyaWFsaXplTWF0ZXJpYWwoXG4gICAgICAgICAgcmVnaW9uS2V5LFxuICAgICAgICAgIG1hdGVyaWFsS2V5LFxuICAgICAgICAgIGRhdGFLZXlzLFxuICAgICAgICAgICRyZWdpb24sXG4gICAgICAgICAgJG1hdGVyaWFsXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBjbGFzczogdGhpcy5jbGFzc05hbWUsXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5maWxsQ29uZmlnKGRhdGEpO1xuICB9XG5cbiAgZmlsbENvbmZpZyhkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBzZXJpYWxpemVNYXRlcmlhbChyZWdpb25LZXksIG1hdGVyaWFsS2V5LCBkYXRhS2V5cywgJHJlZ2lvbiwgJG1hdGVyaWFsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YVByb3ZpZGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRGF0YVByb3ZpZGVyLmpzXG4gKiovIiwiaW1wb3J0IFN0YXRpY0NvbnRlbnQgZnJvbSAnLi9wcm92aWRlcnMvU3RhdGljQ29udGVudCc7XG5cbmNsYXNzIERhdGFQcm92aWRlckZhY3Rvcnkge1xuICBzdGF0aWMgZmFjdG9yeShwcm92aWRlckRlY2wsIHByb3ZpZGVkS2V5cykge1xuICAgIGxldCBwcm92aWRlciA9IG51bGw7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gcHJvdmlkZXJEZWNsLmNsYXNzTmFtZVxuICAgICAgfHwgJ0RvdFBsYW50XFxcXE1vbnN0ZXJcXFxcRGF0YUVudGl0eVxcXFxTdGF0aWNDb250ZW50UHJvdmlkZXInO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICBjYXNlICdEb3RQbGFudFxcXFxNb25zdGVyXFxcXERhdGFFbnRpdHlcXFxcU3RhdGljQ29udGVudFByb3ZpZGVyJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHByb3ZpZGVyID0gbmV3IFN0YXRpY0NvbnRlbnQocHJvdmlkZWRLZXlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3ZpZGVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFQcm92aWRlckZhY3Rvcnk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXJGYWN0b3J5LmpzXG4gKiovIiwiaW1wb3J0IGFsbEVkaXRhYmxlcyBmcm9tICcuL2VkaXRhYmxlcy9hbGwnO1xuXG5jbGFzcyBFZGl0YWJsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZWRpdGFibGVzQnlUeXBlID0ge307XG4gICAgLy8gaW5pdGlhbGl6ZSBiYXNlIGJ1aWxkLWluIGVkaXRhYmxlc1xuICAgIGFsbEVkaXRhYmxlcygpO1xuICAgIHRoaXMuZWRpdGFibGVzQnlUeXBlID0gd2luZG93Lk1PTlNURVJfRURJVEFCTEVTO1xuICB9XG5cbiAgc2VyaWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBjb25zdCBlZGl0YWJsZSA9ICRub2RlLmRhdGEoJ2VkaXRhYmxlUGFyYW1zJyk7XG4gICAgaWYgKHR5cGVvZihlZGl0YWJsZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCB0eXBlID0gZWRpdGFibGUuaGFzT3duUHJvcGVydHkoJ3R5cGUnKSA/IGVkaXRhYmxlLnR5cGUgOiAnc3RyaW5nJztcbiAgICBpZiAodGhpcy5lZGl0YWJsZXNCeVR5cGUuaGFzT3duUHJvcGVydHkodHlwZSkgPT09IGZhbHNlKSB7XG4gICAgICB0eXBlID0gJ3N0cmluZyc7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwb3J0VmFyaWFibGUgPSBlZGl0YWJsZS5oYXNPd25Qcm9wZXJ0eSgndGFyZ2V0JykgPyBlZGl0YWJsZS50YXJnZXQgOiAnZGF0YSc7XG5cbiAgICByZXR1cm4gdGhpcy5lZGl0YWJsZXNCeVR5cGVbdHlwZV0uc2VyaWFsaXplTm9kZSgkbm9kZSwgZXhwb3J0VmFyaWFibGUpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3QgdHlwZSA9ICRub2RlLmRhdGEoJ2VkaXRhYmxlLXR5cGUnKSB8fCAndW5lZGl0YWJsZSc7XG4gICAgaWYgKHR5cGUgPT09ICd1bmVkaXRhYmxlJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdGFibGUgPSB0aGlzLmVkaXRhYmxlc0J5VHlwZVt0eXBlXSB8fCB0aGlzLmVkaXRhYmxlc0J5VHlwZS5zdHJpbmc7XG4gICAgcmV0dXJuIGVkaXRhYmxlLmluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdGFibGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9FZGl0YWJsZS5qc1xuICoqLyIsImNsYXNzIEhhc2hBcGkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZ1bmN0aW9uQ2FsbHMgPSB7fTtcblxuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaC5tYXRjaCgvI2hhc2hBcGk6KC4qPyk6XFwvaGFzaEFwaS8pO1xuICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgY29uc3QgZnVuY3Rpb25DYWxscyA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoZXNbMV0pKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZnVuY3Rpb25DYWxscykge1xuICAgICAgICAgIGlmIChpdGVtLmZ1bmMpIHtcbiAgICAgICAgICAgIHRoaXMuZnVuY3Rpb25DYWxsc1tpdGVtLmZ1bmNdID0gaXRlbS5hcmdzIHx8IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNob3VsZENhbGwoZnVuYykge1xuICAgIHJldHVybiB0aGlzLmZ1bmN0aW9uQ2FsbHNbZnVuY10gfHwgZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGFzaEFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanNcbiAqKi8iLCJpbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi9GcmFtZUFwaSc7XG5pbXBvcnQgdW5pcXVlSWQgZnJvbSAnLi8uLi91bmlxaWQnO1xuaW1wb3J0IERhdGFQcm92aWRlckZhY3RvcnkgZnJvbSAnLi9EYXRhUHJvdmlkZXJGYWN0b3J5JztcbmltcG9ydCBFZGl0YWJsZSBmcm9tICcuL0VkaXRhYmxlJztcblxuY2xhc3MgVmlzdWFsRnJhbWVcbntcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgRnJhbWVBcGkuYmluZE1lc3NhZ2VMaXN0ZW5lcih0aGlzKTtcbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YSA9IG51bGw7XG4gICAgLyogZ2xvYmFsIHdpbmRvdzpmYWxzZSAqL1xuICAgIHRoaXMucGFyZW50V2luZG93ID0gd2luZG93LnBhcmVudDtcbiAgICAvKiogQHZhciBGcm9udGVuZE1vbnN0ZXIgKi9cbiAgICB0aGlzLnBhcmVudE1vbnN0ZXIgPSB0aGlzLnBhcmVudFdpbmRvdy5Gcm9udGVuZE1vbnN0ZXI7XG4gICAgdGhpcy5wYXJlbnRCdWlsZGVyID0gdGhpcy5wYXJlbnRNb25zdGVyLmJ1aWxkZXI7XG4gICAgdGhpcy5jdXJyZW50TW9uc3RlckNvbnRlbnQgPSBmYWxzZTtcbiAgICB0aGlzLmVkaXRhYmxlID0gbmV3IEVkaXRhYmxlKCk7XG4gICAgLy8gdGhpcy5tYWtlSXRNb3ZlKCk7XG4gICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICAkKCgpID0+IHtcbiAgICAgIHRoaXMucGFyZW50QnVpbGRlci5wYWdlQ2hhbmdlZCgpO1xuICAgICAgdGhpcy5pbml0UHJvdmlkZXJzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5Nb25zdGVyRWRpdERhdGEgPSB3aW5kb3cuTU9OU1RFUl9FRElUX01PREVfREFUQTtcbiAgfVxuXG4gIGluaXRQcm92aWRlcnMoKSB7XG4gICAgdGhpcy5wcm92aWRlcnMgPSB7XG4gICAgICBsYXlvdXQ6IHRoaXMuZ2V0UHJvdmlkZXJzKHRoaXMuTW9uc3RlckVkaXREYXRhLmxheW91dCksXG4gICAgICB0ZW1wbGF0ZTogdGhpcy5nZXRQcm92aWRlcnModGhpcy5Nb25zdGVyRWRpdERhdGEudGVtcGxhdGUpLFxuICAgICAgZW50aXR5OiB0aGlzLmdldFByb3ZpZGVycyh0aGlzLk1vbnN0ZXJFZGl0RGF0YS5lbnRpdHkpLFxuICAgIH07XG4gIH1cblxuICBzZXQgcGFnZVN0cnVjdHVyZUpzb24odmFsdWUpIHtcbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHBhZ2VTdHJ1Y3R1cmVKc29uKCkge1xuICAgIHJldHVybiB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YTtcbiAgfVxuXG4gIGdldFByb3ZpZGVycyhhcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhhcnIucHJvdmlkZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBwcm92aWRlckRlY2wgPSBhcnIucHJvdmlkZXJzW2tleV07XG4gICAgICByZXN1bHRba2V5XSA9IERhdGFQcm92aWRlckZhY3RvcnkuZmFjdG9yeShcbiAgICAgICAgcHJvdmlkZXJEZWNsLFxuICAgICAgICBhcnIucHJvdmlkZWRLZXlzW2tleV0gfHwge31cbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldCAkbW9uc3RlckNvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGUpIHtcbiAgICAgIHJldHVybiB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hNb25zdGVyQ29udGVudENhY2hlKCk7XG4gICAgcmV0dXJuIHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGU7XG4gIH1cblxuICByZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpIHtcbiAgICB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlID0ge307XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgJCh0aGlzLnNldHRpbmdzWydtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InXSkuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgaWYgKCF0aGF0LmN1cnJlbnRNb25zdGVyQ29udGVudCkge1xuICAgICAgICB0aGF0LmN1cnJlbnRNb25zdGVyQ29udGVudCA9ICQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyk7XG4gICAgICB9XG4gICAgICB0aGF0LiRtb25zdGVyQ29udGVudENhY2hlWyQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyldID0gJCh0aGlzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUhhbmRsZXJzKCkge1xuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsICYmIHRoaXMuJGhhbmRsZXJzKSB7XG4gICAgICB0aGlzLiRoYW5kbGVycy5jc3MoXG4gICAgICAgICd0b3AnLFxuICAgICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLnBvc2l0aW9uKCkudG9wXG4gICAgICAgICAgKyB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLmhlaWdodCgpXG4gICAgICAgICAgLSB0aGlzLiRoYW5kbGVycy5oZWlnaHQoKVxuICAgICAgKTtcbiAgICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RNYXRlcmlhbCgkbWF0ZXJpYWwpIHtcbiAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCA9PT0gJG1hdGVyaWFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgIH1cbiAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsID0gJG1hdGVyaWFsO1xuICAgIHRoaXMudXBkYXRlSGFuZGxlcnMoKTtcbiAgICB0aGlzLiRoYW5kbGVycy5zaG93KCk7XG4gIH1cblxuICBzZXJpYWxpemVDb250ZW50KGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgT2JqZWN0LmtleXModGhpcy4kbW9uc3RlckNvbnRlbnQpLmZvckVhY2godW5pcXVlQ29udGVudElkID0+IHtcbiAgICAgIGNvbnN0ICRtb25zdGVyID0gdGhpcy4kbW9uc3RlckNvbnRlbnRbdW5pcXVlQ29udGVudElkXTtcbiAgICAgIHJlc3VsdFskbW9uc3Rlci5kYXRhKCd1bmlxdWVDb250ZW50SWQnKV0gPSB0aGF0LnNlcmlhbGl6ZVVuaXF1ZUNvbnRlbnQoJG1vbnN0ZXIpO1xuICAgIH0pO1xuICAgIHRoaXMuc2VuZFRvQnVpbGRlcihjYWxsYmFjaywgW3Jlc3VsdF0pO1xuICB9XG5cbiAgc2VyaWFsaXplVW5pcXVlQ29udGVudCgkbW9uc3RlckNvbnRlbnQpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICByZXN1bHQudW5pcXVlQ29udGVudElkID0gJG1vbnN0ZXJDb250ZW50LmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpO1xuICAgIHJlc3VsdC5tYXRlcmlhbHMgPSB7fTtcbiAgICAkbW9uc3RlckNvbnRlbnQuZmluZCgnW2RhdGEtaXMtbWF0ZXJpYWw9XFwnMVxcJ10nKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCBtYXRlcmlhbCA9IHt9O1xuICAgICAgbWF0ZXJpYWwuYmxvY2sgPSAkKHRoaXMpLmRhdGEoJ21hdGVyaWFsQmxvY2snKTtcbiAgICAgIHJlc3VsdC5tYXRlcmlhbHNbJCh0aGlzKS5kYXRhKCdtYXRlcmlhbEluZGV4JyldID0gbWF0ZXJpYWw7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIFZpc3VhbEZyYW1lIHNldHRpbmdzLlxuICAgKiBVc2VzIFZpc3VhbEZyYW1lU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuVmlzdWFsRnJhbWVTZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICdtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InOiAnLm0tbW9uc3Rlci1jb250ZW50X19jb250ZW50JyxcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHVzZXJTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgfVxuXG4gIHNlbmRUb0J1aWxkZXIoZnVuYywgYXJncykge1xuICAgIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMucGFyZW50V2luZG93LCBmdW5jLCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JtU3VibWl0KGRhdGEpIHtcbiAgICBjb25zdCAkZm9ybSA9ICQoJzxmb3JtIG1ldGhvZD1cIlBPU1RcIj48L2Zvcm0+Jyk7XG4gICAgY29uc3QgJGlucHV0ID0gJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX19qc29uXCI+Jyk7XG4gICAgY29uc3QgJGNzcmYgPSAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiPicpO1xuXG4gICAgJGNzcmZcbiAgICAgIC5hdHRyKCduYW1lJywgJCgnbWV0YVtuYW1lPWNzcmYtcGFyYW1dJykuYXR0cignY29udGVudCcpKVxuICAgICAgLnZhbCgkKCdtZXRhW25hbWU9Y3NyZi10b2tlbl0nKS5hdHRyKCdjb250ZW50JykpXG4gICAgICAuYXBwZW5kVG8oJGZvcm0pO1xuXG4gICAgJGlucHV0XG4gICAgICAudmFsKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgLmFwcGVuZFRvKCRmb3JtKTtcblxuICAgICRmb3JtWzBdLnN1Ym1pdCgpO1xuICB9XG5cbiAgbmV3QmxvY2sobWF0ZXJpYWxOYW1lLCBzZWxlY3RlZEVudGl0eSwgcmVnaW9uTmFtZSkge1xuICAgIC8vIEB0b2RvIEFkZCBsb2FkZXIgaGVyZSBhcyB3ZSBhcmUgdXNpbmcgZm9ybSBwb3N0ICFcbiAgICBjb25zdCByYW5kb21JbmRleCA9IHVuaXF1ZUlkKCdtYXQnKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5pdGVyYXRlVGVtcGxhdGVUeXBlKHRoaXMucGFnZVN0cnVjdHVyZUpzb24pO1xuICAgIGlmIChzZWxlY3RlZEVudGl0eSA9PT0gJ2VudGl0eScpIHtcbiAgICAgIGRhdGEuZW50aXR5Lm1hdGVyaWFsc0J5UmVnaW9uRGVjbFtyZWdpb25OYW1lXS5kZWNsW3JhbmRvbUluZGV4XSA9IHtcbiAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsTmFtZSxcbiAgICAgIH07XG4gICAgICBkYXRhLmVudGl0eS5tYXRlcmlhbHNCeVJlZ2lvbkRlY2xbcmVnaW9uTmFtZV0ubWF0ZXJpYWxzT3JkZXIucHVzaChyYW5kb21JbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGFbc2VsZWN0ZWRFbnRpdHldLnRlbXBsYXRlUmVnaW9uc1tyZWdpb25OYW1lXS5tYXRlcmlhbHNEZWNscy5kZWNsW3JhbmRvbUluZGV4XSA9IHtcbiAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsTmFtZSxcbiAgICAgIH07XG4gICAgICBkYXRhW3NlbGVjdGVkRW50aXR5XS50ZW1wbGF0ZVJlZ2lvbnNbcmVnaW9uTmFtZV0ubWF0ZXJpYWxzRGVjbHMubWF0ZXJpYWxzT3JkZXIucHVzaChyYW5kb21JbmRleCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByZXZpZXcoZGF0YSk7XG4gIH1cblxuICBwcmV2aWV3KGRhdGEgPSBudWxsKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEgfHwgdGhpcy5pdGVyYXRlVGVtcGxhdGVUeXBlKHRoaXMucGFnZVN0cnVjdHVyZUpzb24pO1xuICAgIG5ld0RhdGEuYWN0aW9uID0gJ3ByZXZpZXcnO1xuICAgIFZpc3VhbEZyYW1lLmZvcm1TdWJtaXQobmV3RGF0YSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5pdGVyYXRlVGVtcGxhdGVUeXBlKHRoaXMucGFnZVN0cnVjdHVyZUpzb24pO1xuICAgIGRhdGEuYWN0aW9uID0gJ3NhdmUnO1xuICAgIFZpc3VhbEZyYW1lLmZvcm1TdWJtaXQoZGF0YSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXRlcmF0ZVRlbXBsYXRlVHlwZShhcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBlbnRpdHk6IHtcbiAgICAgICAgbWF0ZXJpYWxzQnlSZWdpb25EZWNsOiB7fSxcbiAgICAgICAgcHJvdmlkZXJzOiB7fSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBhcnIuZm9yRWFjaChvYmogPT4ge1xuICAgICAgY29uc3Qga2V5ID0gb2JqLmRhdGEuaWQ7XG4gICAgICBjb25zdCByZWdpb25zUmVzdWx0ID0gVmlzdWFsRnJhbWUuaXRlcmF0ZVRlbXBsYXRlUmVnaW9ucyhvYmouY2hpbGRyZW4pO1xuICAgICAgLy8gbGF5b3V0IG9yIHRlbXBsYXRlXG4gICAgICByZXN1bHRba2V5XSA9IHtcbiAgICAgICAgdGVtcGxhdGVSZWdpb25zOiByZWdpb25zUmVzdWx0LnRlbXBsYXRlUmVnaW9ucyxcbiAgICAgICAgdGVtcGxhdGVSZWdpb25zT3JkZXI6IHJlZ2lvbnNSZXN1bHQudGVtcGxhdGVSZWdpb25zT3JkZXIsXG4gICAgICAgIHRlbXBsYXRlSWQ6IG9iai5kYXRhLnRlbXBsYXRlSWQsXG4gICAgICAgIHByb3ZpZGVyczoge30sXG4gICAgICB9O1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHJlZ2lvbnNSZXN1bHQuZW50aXR5TWF0ZXJpYWxzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHJlZ2lvbnNSZXN1bHQuZW50aXR5TWF0ZXJpYWxzKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICAgICAgcmVzdWx0LmVudGl0eS5tYXRlcmlhbHNCeVJlZ2lvbkRlY2xbcmVnaW9uS2V5XSA9IHJlZ2lvbnNSZXN1bHQuZW50aXR5TWF0ZXJpYWxzW3JlZ2lvbktleV07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0W2tleV0ucHJvdmlkZXJzID0gdGhpcy5zZXJpYWxpemVQcm92aWRlcnMoa2V5KTtcbiAgICB9KTtcbiAgICByZXN1bHQuZW50aXR5LnByb3ZpZGVycyA9IHRoaXMuc2VyaWFsaXplUHJvdmlkZXJzKCdlbnRpdHknKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2VyaWFsaXplUHJvdmlkZXJzKHR5cGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnByb3ZpZGVyc1t0eXBlXSkuZm9yRWFjaChwcm92aWRlcktleSA9PiB7XG4gICAgICByZXN1bHRbcHJvdmlkZXJLZXldID0gdGhpcy5wcm92aWRlcnNbdHlwZV1bcHJvdmlkZXJLZXldLnNlcmlhbGl6ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgaXRlcmF0ZVRlbXBsYXRlUmVnaW9ucyhhcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnM6IHt9LFxuICAgICAgdGVtcGxhdGVSZWdpb25zT3JkZXI6IFtdLFxuICAgICAgZW50aXR5TWF0ZXJpYWxzOiB7fSxcbiAgICB9O1xuICAgIGFyci5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAvLyBjb25zdCBrZXkgPSBvYmouZGF0YS5pZC5yZXBsYWNlKC9eLipcXC4vLCAnJyk7XG4gICAgICBjb25zdCByZWdpb25LZXkgPSBvYmouZGF0YS5yZWdpb25LZXk7XG4gICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zT3JkZXIucHVzaChyZWdpb25LZXkpO1xuICAgICAgY29uc3QgZW50aXR5RGVwZW5kZW50ID0gb2JqLmRhdGEuZW50aXR5RGVwZW5kZW50IHx8IGZhbHNlO1xuXG4gICAgICBjb25zdCByZWdpb25NYXRlcmlhbHMgPSBWaXN1YWxGcmFtZS5pdGVyYXRlTWF0ZXJpYWxzKG9iai5jaGlsZHJlbiwgcmVnaW9uS2V5KTtcblxuICAgICAgaWYgKGVudGl0eURlcGVuZGVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBhbiBleGFjdCB0ZW1wbGF0ZSByZWdpb25cbiAgICAgICAgcmVzdWx0LnRlbXBsYXRlUmVnaW9uc1tyZWdpb25LZXldID0ge1xuICAgICAgICAgIHJlZ2lvbklkOiBvYmouZGF0YS5yZWdpb25JZCxcbiAgICAgICAgICByZWdpb25LZXksXG4gICAgICAgICAgdW5pcXVlQ29udGVudElkOiBvYmouZGF0YS51bmlxdWVDb250ZW50SWQsXG4gICAgICAgICAgbWF0ZXJpYWxzRGVjbHM6IHJlZ2lvbk1hdGVyaWFscyxcbiAgICAgICAgICBlbnRpdHlEZXBlbmRlbnQsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zW3JlZ2lvbktleV0gPSB7XG4gICAgICAgICAgcmVnaW9uSWQ6IG9iai5kYXRhLnJlZ2lvbklkLFxuICAgICAgICAgIHJlZ2lvbktleSxcbiAgICAgICAgICB1bmlxdWVDb250ZW50SWQ6IG9iai5kYXRhLnVuaXF1ZUNvbnRlbnRJZCxcbiAgICAgICAgICBlbnRpdHlEZXBlbmRlbnQsXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRoaXMgaXMgZW50aXR5LWRlcGVuZGVudCByZWdpb25cbiAgICAgICAgcmVzdWx0LmVudGl0eU1hdGVyaWFsc1tyZWdpb25LZXldID0gcmVnaW9uTWF0ZXJpYWxzO1xuICAgICAgfVxuXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBpdGVyYXRlTWF0ZXJpYWxzKGFyciwgcmVnaW9uS2V5KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgZGVjbDoge30sXG4gICAgICBtYXRlcmlhbHNPcmRlcjogW10sXG4gICAgfTtcbiAgICBhcnIuZm9yRWFjaChvYmogPT4ge1xuICAgICAgY29uc3Qga2V5ID0gb2JqLmRhdGEubWF0ZXJpYWxJbmRleDtcbiAgICAgIHJlc3VsdC5kZWNsW2tleV0gPSB7XG4gICAgICAgIC8vIGVkaXRhYmxlc0tleXM6IG9iai5kYXRhLmVkaXRhYmxlS2V5cyxcbiAgICAgICAgbWF0ZXJpYWw6IG9iai5kYXRhLm1hdGVyaWFsUGF0aCxcbiAgICAgIH07XG4gICAgICByZXN1bHQubWF0ZXJpYWxzT3JkZXIucHVzaChrZXkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsRnJhbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZS5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBXWVNJV1lHIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBCYXNlRWRpdGFibGUuZnJhbWUkKCRub2RlKTtcbiAgICBjb25zdCBlZGl0b3IgPSBub2RlLmRhdGEoJ2VkaXRvcicpO1xuICAgIGlmIChlZGl0b3IpIHtcbiAgICAgIHJldHVybiBlZGl0b3IuZ2V0RGF0YSgpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZS5odG1sKCk7XG4gIH1cblxuICBpbml0aWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gJG5vZGVbMF07XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgYXV0b1BhcmFncmFwaDogZmFsc2UsXG4gICAgICBlbmFibGVDb250ZW50RWRpdGFibGU6IHRydWUsXG4gICAgICBpZ25vcmVFbXB0eVBhcmFncmFwaDogdHJ1ZSxcbiAgICAgIGVudGVyTW9kZTogd2luZG93LkNLRURJVE9SLkVOVEVSX0JSLFxuICAgIH07XG4gICAgLy8gJCgoKSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB3aW5kb3cuQWxsb3lFZGl0b3IuZWRpdGFibGUobm9kZSwgY29uZmlnKS5nZXQoJ25hdGl2ZUVkaXRvcicpO1xuICAgICAgJG5vZGUuZGF0YSgnZWRpdG9yJywgZWRpdG9yKTtcbiAgICAvLyB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdZU0lXWUc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvV1lTSVdZRy5qc1xuICoqLyIsImltcG9ydCBXWVNJV1lHIGZyb20gJy4vV1lTSVdZRyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICcuL2xpbmsnO1xuaW1wb3J0IFRleHRTdHJpbmcgZnJvbSAnLi9zdHJpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbGwoKSB7XG4gIGlmICh0eXBlb2Yod2luZG93Lk1PTlNURVJfRURJVEFCTEVTKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVMgPSB7fTtcbiAgfVxuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ3d5c2l3eWcnXSA9IG5ldyBXWVNJV1lHKCk7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snbGluayddID0gbmV3IExpbmsoKTtcbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWydpbWFnZSddID0gbmV3IEltYWdlKCk7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snc3RyaW5nJ10gPSBuZXcgVGV4dFN0cmluZygpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9hbGwuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgSW1hZ2UgZXh0ZW5kcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG4gICAgY29uc3QgJGltZyA9ICRub2RlLmZpbmQoJ2ltZycpLmZpcnN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNyYzogJGltZy5hdHRyKCdzcmMnKSxcbiAgICAgIGFsdDogJGltZy5hdHRyKCdhbHQnKSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2ltYWdlLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFZGl0YWJsZSBmcm9tICcuL0Jhc2VFZGl0YWJsZSc7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6ICRub2RlLmRhdGEoJ29yaWdpbmFsSHJlZicpID8gJG5vZGUuZGF0YSgnb3JpZ2luYWxIcmVmJykgOiAkbm9kZS5hdHRyKCdocmVmJyksXG4gICAgICBhbmNob3I6ICRub2RlLmh0bWwoKSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvbGluay5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBUZXh0U3RyaW5nIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBCYXNlRWRpdGFibGUuZnJhbWUkKCRub2RlKTtcbiAgICBjb25zdCBlZGl0b3IgPSBub2RlLmRhdGEoJ2VkaXRvcicpO1xuICAgIGlmIChlZGl0b3IpIHtcbiAgICAgIHJldHVybiBlZGl0b3IuZ2V0RGF0YSgpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZS5odG1sKCk7XG4gIH1cblxuICBpbml0aWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gJG5vZGVbMF07XG4gICAgLyogZ2xvYmFsIHdpbmRvdzpmYWxzZSAqL1xuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgYWxsb3dlZENvbnRlbnQ6ICdpIHUnLFxuICAgICAgdG9vbGJhcnM6IHtcbiAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgc2VsZWN0aW9uczogd2luZG93LkFsbG95RWRpdG9yLlNlbGVjdGlvbnMsXG4gICAgICAgICAgdGFiSW5kZXg6IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYXV0b1BhcmFncmFwaDogZmFsc2UsXG4gICAgICBlbmFibGVDb250ZW50RWRpdGFibGU6IHRydWUsXG4gICAgICBpZ25vcmVFbXB0eVBhcmFncmFwaDogdHJ1ZSxcbiAgICAgIGJsb2NrbGVzczogdHJ1ZSxcbiAgICAgIGVudGVyTW9kZTogd2luZG93LkNLRURJVE9SLkVOVEVSX0JSLFxuICAgIH07XG4gICAgLy8gJCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHdpbmRvdy5BbGxveUVkaXRvci5lZGl0YWJsZShub2RlLCBjb25maWcpLmdldCgnbmF0aXZlRWRpdG9yJyk7XG4gICAgICBlZGl0b3Iub24oJ2tleScsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQuZGF0YS5rZXlDb2RlID09PSB3aW5kb3cuQ0tFRElUT1IuU0hJRlQgKyAxMykge1xuICAgICAgICAgIC8vIGFkZCBzYXZpbmcgZnVuY3Rpb24gaGVyZVxuICAgICAgICAgIGV2ZW50LmNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGVkaXRvci5vbigncGFzdGUnLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LmRhdGEuZGF0YVZhbHVlID0gZXZlbnQuZGF0YS5kYXRhVmFsdWUucmVwbGFjZSgvPGJyW1xcc1xcL10qPi9nbWksICcgJyk7XG4gICAgICB9KTtcbiAgICAgICRub2RlLmRhdGEoJ2VkaXRvcicsIGVkaXRvcik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coJG5vZGUsIG5vZGUpO1xuICAgICAgLy8gdGhyb3cgZTtcbiAgICB9XG4gICAgLy8gfSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0U3RyaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL3N0cmluZy5qc1xuICoqLyIsImltcG9ydCBEYXRhUHJvdmlkZXIgZnJvbSAnLi4vRGF0YVByb3ZpZGVyJztcblxuY2xhc3MgU3RhdGljQ29udGVudCBleHRlbmRzIERhdGFQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKHByb3ZpZGVkS2V5cykge1xuICAgIHN1cGVyKCdEb3RQbGFudFxcXFxNb25zdGVyXFxcXERhdGFFbnRpdHlcXFxcU3RhdGljQ29udGVudFByb3ZpZGVyJywgcHJvdmlkZWRLZXlzKTtcbiAgfVxuXG4gIGZpbGxDb25maWcoZGF0YSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhO1xuICAgIG5ld0RhdGEuZW50aXRpZXMgPSB0aGlzLnNlcmlhbGl6ZUtleXMoKTtcbiAgICByZXR1cm4gbmV3RGF0YTtcbiAgfVxuXG4gIHNlcmlhbGl6ZU1hdGVyaWFsKHJlZ2lvbktleSwgbWF0ZXJpYWxLZXksIGRhdGFLZXlzLCAkcmVnaW9uLCAkbWF0ZXJpYWwpIHtcbiAgICBjb25zdCBtYXRlcmlhbEVkaXRhYmxlS2V5cyA9ICRtYXRlcmlhbC5kYXRhKCdlZGl0YWJsZUtleXMnKTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnJlY3Vyc2l2ZVNlcmlhbGl6ZShtYXRlcmlhbEVkaXRhYmxlS2V5cywgJG1hdGVyaWFsLCBkYXRhS2V5cyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJlY3Vyc2l2ZVNlcmlhbGl6ZShtYXRlcmlhbEVkaXRhYmxlS2V5cywgJHJvb3QsIGRhdGFLZXlzLCBwcmVmaXggPSAnJykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gICAgZGF0YUtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3Qgb2JqID0gbWF0ZXJpYWxFZGl0YWJsZUtleXNba2V5XSB8fCAnTk9fU1VDSF9LRVknO1xuICAgICAgaWYgKG9iaiA9PT0gJ05PX1NVQ0hfS0VZJykge1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9iaiA9PT0gT2JqZWN0KG9iaikpIHtcbiAgICAgICAgLy8gaXQncyByZWN1cnNpdmVcbiAgICAgICAgLy8gZmlyc3QgLSBmaW5kIGFsbCBibG9ja3NcbiAgICAgICAgY29uc3QgJGJsb2NrcyA9ICRyb290LmZpbmQoYFtkYXRhLXJlY3Vyc2l2ZS1pdGVtPVwiJHtrZXl9XCJdYCk7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIHJlc3VsdFtrZXldID0gW107XG4gICAgICAgICRibG9ja3MuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICByZXN1bHRba2V5XS5wdXNoKHRoYXQucmVjdXJzaXZlU2VyaWFsaXplKG9iaiwgJHRoaXMsIE9iamVjdC5rZXlzKG9iaiksICdpdGVtLicpKTtcbiAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaXQncyBwbGFpbiBmaWVsZFxuICAgICAgICBjb25zdCAkbm9kZSA9ICRyb290LmZpbmQoYFtkYXRhLWVkaXRhYmxlLWtleT1cIiR7cHJlZml4fSR7a2V5fVwiXWApLmZpcnN0KCk7XG4gICAgICAgIGlmICgkbm9kZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFNraXBwZWQgW2RhdGEtZWRpdGFibGUta2V5PVwiJHtwcmVmaXh9JHtrZXl9XCJdIGFzIG5vdCBmb3VuZGApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRba2V5XSA9IERhdGFQcm92aWRlci5lZGl0YWJsZS5zZXJpYWxpemVFZGl0YWJsZSgkbm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0aWNDb250ZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvcHJvdmlkZXJzL1N0YXRpY0NvbnRlbnQuanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJjbGFzcyBCYXNlQ29udHJvbHMge1xuICBjb25zdHJ1Y3RvcihlbnYpIHtcbiAgICB0aGlzLmVudiA9IGVudjtcbiAgICB0aGlzLmNvbnRyb2xCdXR0b25zID0gJCgnPGRpdiBjbGFzcz1cInRyZWUtY29udHJvbC1idXR0b25zXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPjwvZGl2PicpO1xuXG4gICAgY29uc3QgdGhhdEVudiA9IHRoaXMuZW52O1xuICAgIHRoaXMuYnV0dG9uc0FycmF5LmZvckVhY2goY29uZiA9PiB7XG4gICAgICBjb25zdCAkYnV0dG9uID0gJChgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRyZWUtY29udHJvbC1idXR0b25zX19idXR0b25cIiB0aXRsZT1cIiR7Y29uZi5uYW1lfVwiPlxuICA8aSBjbGFzcz1cIiR7Y29uZi5pY29ufVwiPjwvaT5cbjwvYT5gKTtcbiAgICAgICRidXR0b24uY2xpY2soZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCl7XG4gICAgICAgIGNvbnN0ICRub2RlID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKTtcblxuICAgICAgICByZXR1cm4gY29uZi5jbGljayh0aGF0RW52LmpzdHJlZU9iai5nZXRfbm9kZSgkbm9kZSksICRub2RlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jb250cm9sQnV0dG9ucy5hcHBlbmQoJGJ1dHRvbik7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgYnV0dG9uc0FycmF5KCkge1xuICAgIHRocm93IFwiWW91IG11c3QgaW1wbGVtZW50IGJ1dHRvbnNBcnJheVwiO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDb250cm9scztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZS9CYXNlQ29udHJvbHMuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUNvbnRyb2xzIGZyb20gJy4vQmFzZUNvbnRyb2xzJztcblxuY2xhc3MgTWF0ZXJpYWxDb250cm9scyBleHRlbmRzIEJhc2VDb250cm9scyB7XG4gIGdldCBidXR0b25zQXJyYXkoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgaWNvbjogJ2ZhIGZhLWFycm93LXJpZ2h0JyxcbiAgICAgICAgbmFtZTogJ1NlbGVjdCcsXG4gICAgICAgIGNsaWNrOiAoanNUcmVlTm9kZS8qLCAkbm9kZSovKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbnYuc2VsZWN0TWF0ZXJpYWwoanNUcmVlTm9kZS5kYXRhLm1hdGVyaWFsSW5kZXgpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogJ2ZhIGZhLXRyYXNoLW8nLFxuICAgICAgICBuYW1lOiAnUmVtb3ZlJyxcbiAgICAgICAgY2xpY2s6ICgvKmpzVHJlZU5vZGUsICRub2RlKi8pID0+IHtcbiAgICAgICAgICB0aGlzLmVudi5qc3RyZWVPYmouZGVsZXRlX25vZGUodGhpcy5lbnYuanN0cmVlT2JqLmdldF9zZWxlY3RlZCgpKTtcbiAgICAgICAgICB0aGlzLmVudi51cGRhdGVQYWdlU3RydWN0dXJlSnNvbigpO1xuICAgICAgICAgIHRoaXMuZW52LnRhcmdldC5Gcm9udGVuZE1vbnN0ZXIuVmlzdWFsRnJhbWUucHJldmlldygpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0ZXJpYWxDb250cm9scztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZS9NYXRlcmlhbENvbnRyb2xzLmpzXG4gKiovIiwiY2xhc3MgUGFnZUl0ZXJhdG9yIHtcblxuICBzdGF0aWMgcHJvY2Vzc0xheW91dCgkbGF5b3V0UmVnaW9uKSB7XG4gICAgY29uc3QgaXRlbSA9IFBhZ2VJdGVyYXRvci5leHRyYWN0UmVnaW9uRGF0YSgkbGF5b3V0UmVnaW9uKTtcbiAgICBpdGVtLnN0YXRlID0ge1xuICAgICAgb3BlbmVkOiB0cnVlLFxuICAgIH07XG4gICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgIGl0ZW0uZGF0YS5pZCA9IGBsYXlvdXQudGVtcGxhdGVSZWdpb24uJHtpdGVtLmRhdGEucmVnaW9uS2V5fWA7XG4gICAgaXRlbS5pZCA9IGBwc2pfJHtpdGVtLmRhdGEuaWR9YC5yZXBsYWNlKC9cXC4vZywgJ18nKTtcbiAgICBpdGVtLmRhdGEuZW50aXR5VHlwZSA9ICdsYXlvdXQnO1xuICAgIGNvbnN0IHRlbXBsYXRlUmVnaW9ucyA9IFtdO1xuXG4gICAgLy8gZmluZCBtYXRlcmlhbHNcbiAgICBjb25zdCAkbGF5b3V0TWF0ZXJpYWxzID0gJGxheW91dFJlZ2lvbi5maW5kKCc+W2RhdGEtaXMtbWF0ZXJpYWxdJyk7XG4gICAgJGxheW91dE1hdGVyaWFscy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCAkbGF5b3V0TWF0ZXJpYWwgPSAkKHRoaXMpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gUGFnZUl0ZXJhdG9yLnByb2Nlc3NMYXlvdXRNYXRlcmlhbCgkbGF5b3V0TWF0ZXJpYWwsIGl0ZW0uaWQsIGl0ZW0uZGF0YS5yZWdpb25LZXkpO1xuICAgICAgY29uc3QgbGF5b3V0TWF0ZXJpYWxJdGVtID0gcmVzdWx0LmxheW91dE1hdGVyaWFsO1xuICAgICAgcmVzdWx0LnRlbXBsYXRlUmVnaW9ucy5mb3JFYWNoKHJlZ2lvbiA9PiB7XG4gICAgICAgIHRlbXBsYXRlUmVnaW9ucy5wdXNoKHJlZ2lvbik7XG4gICAgICB9KTtcbiAgICAgIGl0ZW0uY2hpbGRyZW4ucHVzaChsYXlvdXRNYXRlcmlhbEl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW0sXG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnMsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9jZXNzTGF5b3V0TWF0ZXJpYWwoJGxheW91dE1hdGVyaWFsLCBwcmVmaXgsIHJlZ2lvbktleSkge1xuICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSAkbGF5b3V0TWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxJbmRleCcpO1xuICAgIGNvbnN0IG1hdGVyaWFsUGF0aCA9ICRsYXlvdXRNYXRlcmlhbC5kYXRhKCdtYXRlcmlhbFBhdGgnKTtcbiAgICBjb25zdCBpdGVtID0ge1xuICAgICAgdGV4dDogYCR7XG4gICAgICAgIG1hdGVyaWFsUGF0aCA9PT0gJ2NvcmUuZnJvbnRlbmQtbW9uc3Rlci1jb3JlLmdlbmVyYWwuY29udGVudC1wbGFjZWhvbGRlcidcbiAgICAgICAgICA/ICdNYWluIEVudGl0eSBDb250ZW50J1xuICAgICAgICAgIDogYE1hdGVyaWFsOiAke21hdGVyaWFsSW5kZXh9YH1cbiAgICAgIGAsXG4gICAgICB0eXBlOiAnbWF0ZXJpYWwnLFxuICAgICAgZGF0YToge1xuICAgICAgICBpZDogYCR7cHJlZml4fS4ke21hdGVyaWFsSW5kZXh9YCxcbiAgICAgICAgbWF0ZXJpYWxJbmRleCxcbiAgICAgICAgbWF0ZXJpYWxQYXRoLFxuICAgICAgICBlZGl0YWJsZUtleXM6ICRsYXlvdXRNYXRlcmlhbC5kYXRhKCdlZGl0YWJsZUtleXMnKSxcbiAgICAgICAgbm9kZTogJGxheW91dE1hdGVyaWFsLFxuICAgICAgICByZWdpb25LZXksXG4gICAgICAgIGVudGl0eVR5cGU6ICdsYXlvdXQnLFxuICAgICAgfSxcbiAgICAgIGlkOiBgcHNqXyR7cHJlZml4fV8ke21hdGVyaWFsSW5kZXh9YCxcbiAgICB9O1xuICAgIGNvbnN0IHRlbXBsYXRlUmVnaW9ucyA9IFtdO1xuICAgIGNvbnN0ICRyZWdpb25zID0gJGxheW91dE1hdGVyaWFsLmZpbmQoJz4gLm0tbW9uc3Rlci1jb250ZW50X19jb250ZW50Jyk7XG4gICAgJHJlZ2lvbnMuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gUGFnZUl0ZXJhdG9yLnByb2Nlc3NUZW1wbGF0ZVJlZ2lvbigkKHRoaXMpKTtcbiAgICAgIHRlbXBsYXRlUmVnaW9ucy5wdXNoKHJlc3VsdCk7XG4gICAgfSk7XG4gICAgaWYgKHRlbXBsYXRlUmVnaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBpdGVtLmRhdGEuaXNDb250ZW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGxheW91dE1hdGVyaWFsOiBpdGVtLFxuICAgICAgdGVtcGxhdGVSZWdpb25zLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgcHJvY2Vzc1RlbXBsYXRlUmVnaW9uKCR0ZW1wbGF0ZVJlZ2lvbikge1xuICAgIGNvbnN0IGl0ZW0gPSBQYWdlSXRlcmF0b3IuZXh0cmFjdFJlZ2lvbkRhdGEoJHRlbXBsYXRlUmVnaW9uKTtcbiAgICBpdGVtLnN0YXRlID0ge1xuICAgICAgb3BlbmVkOiB0cnVlLFxuICAgIH07XG4gICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgIGl0ZW0uZGF0YS5lbnRpdHlEZXBlbmRlbnQgPSAkdGVtcGxhdGVSZWdpb24uZGF0YSgncmVnaW9uRW50aXR5RGVwZW5kZW50JykgPT09IDE7XG5cbiAgICBjb25zdCBwcmVmaXggPSBpdGVtLmRhdGEuZW50aXR5RGVwZW5kZW50ID8gJ2NvbnRlbnQnIDogJ3RlbXBsYXRlJztcbiAgICBpdGVtLmRhdGEuZW50aXR5VHlwZSA9IGl0ZW0uZGF0YS5lbnRpdHlEZXBlbmRlbnQgPyAnZW50aXR5JyA6ICd0ZW1wbGF0ZSc7XG4gICAgaXRlbS5kYXRhLmlkID0gYCR7cHJlZml4fS50ZW1wbGF0ZVJlZ2lvbi4ke2l0ZW0uZGF0YS5yZWdpb25LZXl9YDtcbiAgICBpdGVtLmlkID0gYHBzal8ke2l0ZW0uZGF0YS5pZH1gLnJlcGxhY2UoL1xcLi9nLCAnXycpO1xuXG4gICAgaWYgKGl0ZW0uZGF0YS5lbnRpdHlEZXBlbmRlbnQpIHtcbiAgICAgIGl0ZW0udHlwZSA9ICdjb250ZW50VGVtcGxhdGVSZWdpb24nO1xuICAgIH1cbiAgICBjb25zdCAkcmVnaW9uTWF0ZXJpYWxzID0gJHRlbXBsYXRlUmVnaW9uLmZpbmQoJz5bZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICAkcmVnaW9uTWF0ZXJpYWxzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0IG1hdGVyaWFsID0gUGFnZUl0ZXJhdG9yLnByb2Nlc3NUZW1wbGF0ZVJlZ2lvbk1hdGVyaWFsKFxuICAgICAgICAkKHRoaXMpLFxuICAgICAgICBpdGVtLmRhdGEuaWQsXG4gICAgICAgIHByZWZpeFxuICAgICAgKTtcbiAgICAgIG1hdGVyaWFsLmRhdGEucmVnaW9uS2V5ID0gaXRlbS5kYXRhLnJlZ2lvbktleTtcbiAgICAgIG1hdGVyaWFsLmlkID0gYHBzal8ke21hdGVyaWFsLmRhdGEuaWR9YC5yZXBsYWNlKC9cXC4vZywgJ18nKTtcbiAgICAgIGl0ZW0uY2hpbGRyZW4ucHVzaChtYXRlcmlhbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBzdGF0aWMgcHJvY2Vzc1RlbXBsYXRlUmVnaW9uTWF0ZXJpYWwoJHJlZ2lvbk1hdGVyaWFsLCBwcmVmaXgsIGVudGl0eVR5cGUpIHtcbiAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gJHJlZ2lvbk1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsSW5kZXgnKTtcbiAgICBjb25zdCBtYXRlcmlhbFBhdGggPSAkcmVnaW9uTWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxQYXRoJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGBNYXRlcmlhbDogJHttYXRlcmlhbEluZGV4fWAsXG4gICAgICB0eXBlOiAnbWF0ZXJpYWwnLFxuICAgICAgZGF0YToge1xuICAgICAgICBpZDogYCR7cHJlZml4fS4ke21hdGVyaWFsSW5kZXh9YCxcbiAgICAgICAgbWF0ZXJpYWxJbmRleCxcbiAgICAgICAgbWF0ZXJpYWxQYXRoLFxuICAgICAgICBlZGl0YWJsZUtleXM6ICRyZWdpb25NYXRlcmlhbC5kYXRhKCdlZGl0YWJsZUtleXMnKSxcbiAgICAgICAgbm9kZTogJHJlZ2lvbk1hdGVyaWFsLFxuICAgICAgICBlbnRpdHlUeXBlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGV4dHJhY3RSZWdpb25EYXRhKCRub2RlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6ICRub2RlLmRhdGEoJ2NvbnRlbnREZXNjcmlwdGlvbicpLFxuICAgICAgdHlwZTogJ3RlbXBsYXRlUmVnaW9uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcmVnaW9uSWQ6ICRub2RlLmRhdGEoJ3JlZ2lvbklkJyksXG4gICAgICAgIHJlZ2lvbktleTogJG5vZGUuZGF0YSgncmVnaW9uS2V5JyksXG4gICAgICAgIHVuaXF1ZUNvbnRlbnRJZDogJG5vZGUuZGF0YSgndW5pcXVlQ29udGVudElkJyksXG4gICAgICAgIG5vZGU6ICRub2RlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VJdGVyYXRvcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZS9QYWdlSXRlcmF0b3IuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9