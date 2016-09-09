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
	    _this.editModeData = {};
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
	        var result = PageStructureEnvironment.processLayout($(this));
	        layoutItem.children.push(result.item);
	        result.templateRegions.forEach(function (region) {
	          templateItem.children.push(region);
	        });
	      });
	
	      this.pageStructure = [layoutItem, templateItem];
	      this.$pageStructure.jstree({
	        core: {
	          data: this.pageStructure,
	          themes: {
	            name: 'default-dark'
	          }
	        },
	        plugins: ['types', 'wholerow'],
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
	
	      var jstreeObj = this.$pageStructure.jstree();
	
	      this.$pageStructure.on('loaded.jstree', function () {
	        _this2.pageStructureJson = jstreeObj.get_json(_this2.$pageStructure, {
	          no_state: true,
	          no_id: true,
	          no_li_attr: true,
	          no_a_attr: true
	        });
	        _this2.target.FrontendMonster.VisualFrame.pageStructureJson = _this2.pageStructureJson;
	        var isContentRegionFound = false;
	        _this2.pageStructure[1].children.forEach(function (region) {
	          if (region.data.entityDependent && isContentRegionFound === false) {
	            isContentRegionFound = true;
	            jstreeObj.select_node(region.id);
	          }
	        });
	      });
	      var controlButtons = $('<div class="tree-control-buttons" role="presentation"> EDIT and etc.</div>');
	      this.$pageStructure.on('select_node.jstree', function (e, obj) {
	        var $anchor = $('#' + obj.node.id);
	        $anchor.prepend(controlButtons);
	        var type = obj.node.type;
	        _this2.selectedEntity = obj.node.data.entityType || null;
	        switch (type) {
	          case 'material':
	            _this2.target$.smoothScroll({
	              scrollTarget: _this2.target$('[data-material-path="' + obj.node.data.materialPath + '"]')
	            });
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
	
	      this.editModeData = this.target.MONSTER_EDIT_MODE_DATA;
	    }
	  }, {
	    key: 'serializePage',
	    value: function serializePage() {
	      var _this3 = this;
	
	      var result = {};
	      Object.keys(this.regionsStructure).forEach(function (regionKey) {
	        var region = _this3.regionsStructure[regionKey];
	        result[region.key] = region.serialize();
	      });
	      return result;
	    }
	  }, {
	    key: 'materialsByRegions',
	    value: function materialsByRegions() {
	      var _this4 = this;
	
	      var result = {};
	      Object.keys(this.regionsStructure).forEach(function (regionKey) {
	        var region = _this4.regionsStructure[regionKey];
	        result[region.key] = region.materialsDecl();
	      });
	      return result;
	    }
	  }], [{
	    key: 'processLayout',
	    value: function processLayout($layoutRegion) {
	      var item = PageStructureEnvironment.extractRegionData($layoutRegion);
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
	        var result = PageStructureEnvironment.processLayoutMaterial($layoutMaterial, item.id, item.data.regionKey);
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
	        var result = PageStructureEnvironment.processTemplateRegion($(this));
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
	      var item = PageStructureEnvironment.extractRegionData($templateRegion);
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
	        var material = PageStructureEnvironment.processTemplateRegionMaterial($(this), item.data.id, prefix);
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
	
	      var prefix = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];
	
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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
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
	    key: 'constructTemplateData',
	    value: function constructTemplateData() {
	      return {
	        providersEntities: this.parentBuilder.serialize(),
	        regionsMaterials: this.parentBuilder.environments.get('page-structure').materialsByRegions()
	      };
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
	      data.action = 'preview';
	      VisualFrame.formSubmit(data);
	
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
	
	      var prefix = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];
	
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWNlMGQ5YjY4NDQ3NjY3NDU0Y2QiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL0Jhc2VFbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL0Jhc2VFZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL0Zyb250ZW5kTW9uc3Rlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQWN0aW9uRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0VkaXRhYmxlLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9IYXNoQXBpLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL1dZU0lXWUcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9hbGwuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL3Byb3ZpZGVycy9TdGF0aWNDb250ZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9idW5kbGUuY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkZyb250ZW5kTW9uc3RlciIsIkJhc2VFbnZpcm9ubWVudCIsInZpc3VhbEJ1aWxkZXIiLCJuYW1lIiwidGFyZ2V0IiwiJCIsInNldHRpbmdzIiwiY29udGVudFdpbmRvdyIsImN1cnJlbnRFbnZpcm9ubWVudCIsImVudmlyb25tZW50cyIsImdldCIsImRlYWN0aXZhdGUiLCJjbGVhclN0YWNrYWJsZSIsImZ1bmMiLCJhcmdzIiwic2VuZE1lc3NhZ2UiLCJCYXNlRWRpdGFibGUiLCIkbm9kZSIsIkZyYW1lQXBpIiwibGlzdGVuZXIiLCJjYWxsYmFjayIsImNhbGxiYWNrSGFuZGxlciIsImV2ZW50IiwibWVzc2FnZSIsImlzSWUiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiYXBwbHkiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJzdHJpbmdpZnkiLCJwb3N0TWVzc2FnZSIsImlzIiwiaWUiLCJwYXJhbXMiLCJ2aXN1YWxCdWxkZXIiLCJoYXNoQXBpIiwicGFyZW50IiwiaGFzQnVpbGRlciIsIlZpc3VhbEZyYW1lIiwic21vb3RoU2Nyb2xsIiwiaW5pdCIsInVzZXJTZXR0aW5ncyIsIkZyb250ZW5kTW9uc3RlclNldHRpbmdzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJidWlsZGVyIiwiJGJ1aWxkZXIiLCJsZW5ndGgiLCJWaXN1YWxCdWlsZGVyIiwicmVzb2x1dGlvblN3aXRjaGVyIiwiTWFwIiwiZW52aXJvbm1lbnRTZWxlY3RvciIsInN3aXRjaEVudmlyb25tZW50IiwiZmlyc3QiLCJtb2QiLCJiaW5kTWVzc2FnZUxpc3RlbmVyIiwiY29udHJvbHMiLCJWaXN1YWxCdWlsZGVyU2V0dGluZ3MiLCJidW5kbGVzIiwiJHN0YWNrYWJsZSIsInRoYXQiLCJiZW1FbGVtIiwiJHJlc29sdXRpb25MaW5rcyIsImNsaWNrIiwid2lkdGgiLCIkc2VjdGlvbkxpbmtzIiwiZW52aXJvbm1lbnROYW1lIiwiYWN0aXZhdGUiLCJlbXB0eSIsInBhbmVDbGFzcyIsIm1vZGlmaWVyIiwiZmluZCIsIiRuZXdQYW5lIiwiYXBwZW5kIiwibWF0ZXJpYWxzIiwiaGFzT3duUHJvcGVydHkiLCJyZXN1bHQiLCJzZXJpYWxpemVQYWdlIiwiY29uc29sZSIsImxvZyIsInJlc3VsdEJ5UHJvdmlkZXJzIiwicHJvdmlkZWRLZXlzIiwiZnJhbWVDb250ZW50V2luZG93IiwiTU9OU1RFUl9FRElUX01PREVfREFUQSIsInRlbXBsYXRlIiwicHJvdmlkZXJJbmRleCIsInJlZ2lvbnMiLCJyZWdpb25LZXkiLCJtYXRlcmlhbEluZGV4IiwiZGF0YUtleXMiLCJlbnZpcm9ubWVudCIsInBhZ2VDaGFuZ2VkIiwiJGNvbnRyb2xzIiwiZWxlbSIsImxvY2F0aW9uIiwicmVsb2FkIiwiJGNvbnRyb2xzUmlnaHQiLCJEaWFsb2dIZWxwZXIiLCJidWlsZGVyRGlhbG9nIiwib25BamF4TG9hZCIsIiR0YXJnZXQiLCJkaWFsb2ciLCJkYXRhQ2hhbmdlciIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhVHlwZSIsImF1dG9EZXN0cm95Iiwic2hvdyIsIkFjdGlvbkVudmlyb25tZW50IiwiQ3VzdG9taXphdGlvbkVudmlyb25tZW50IiwiTWF0ZXJpYWxzRW52aXJvbm1lbnQiLCJpbml0TWF0ZXJpYWxzU2VsZWN0b3IiLCIkbWF0ZXJpYWxzR3JvdXBzIiwiJG1hdGVyaWFsc0xpc3QiLCJpMThuQnVuZGxlTmFtZSIsInBvbHlnbG90IiwidCIsImJ1bmRsZSIsIiRidW5kbGVUaXRsZSIsImZ1bGxQYXRoIiwicHVzaCIsImdyb3VwcyIsImdyb3VwTmFtZSIsImdyb3VwIiwiaTE4bkdyb3VwTmFtZSIsIiRsaSIsIiRsaXN0IiwiaXRlbXMiLCJtYXRlcmlhbE5hbWUiLCJtYXRlcmlhbCIsImkxOG5NYXRlcmlhbE5hbWUiLCIkaXRlbSIsImRvY3VtZW50Iiwib24iLCJjbGlja0hhbmRsZXIiLCIkdGhpcyIsInRvZ2dsZU1vZCIsImdyb3VwUGF0aCIsImVhY2giLCJpdCIsIiRtYXRlcmlhbHNQYW5lIiwiaGlkZSIsIlBhZ2VTdHJ1Y3R1cmVFbnYiLCJzZWxlY3RlZFJlZ2lvbktleSIsInNlbGVjdGVkRW50aXR5IiwiJGdyb3Vwc1BhbmUiLCJjcmVhdGVTdGFja2FibGVQYW5lIiwiUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IiwiaW5pdFBhZ2VTdHJ1Y3R1cmVFbGVtZW50IiwiZWRpdE1vZGVEYXRhIiwiJGhlYWRlciIsIiRwYWdlU3RydWN0dXJlIiwiJHN0cnVjdHVyZVBhbmUiLCJkZXRhY2giLCJqc3RyZWUiLCJsYXlvdXQiLCJsYXlvdXRJdGVtIiwiaWQiLCJ0ZW1wbGF0ZUlkIiwidGV4dCIsImljb24iLCJzdGF0ZSIsIm9wZW5lZCIsImNoaWxkcmVuIiwidGVtcGxhdGVJdGVtIiwiJGxheW91dFJlZ2lvbnMiLCJ0YXJnZXQkIiwiaXRlciIsInByb2Nlc3NMYXlvdXQiLCJpdGVtIiwidGVtcGxhdGVSZWdpb25zIiwicmVnaW9uIiwicGFnZVN0cnVjdHVyZSIsImNvcmUiLCJ0aGVtZXMiLCJwbHVnaW5zIiwidHlwZXMiLCJ0ZW1wbGF0ZVJlZ2lvbiIsImNvbnRlbnRUZW1wbGF0ZVJlZ2lvbiIsImpzdHJlZU9iaiIsInBhZ2VTdHJ1Y3R1cmVKc29uIiwiZ2V0X2pzb24iLCJub19zdGF0ZSIsIm5vX2lkIiwibm9fbGlfYXR0ciIsIm5vX2FfYXR0ciIsImlzQ29udGVudFJlZ2lvbkZvdW5kIiwiZW50aXR5RGVwZW5kZW50Iiwic2VsZWN0X25vZGUiLCJjb250cm9sQnV0dG9ucyIsImUiLCJvYmoiLCIkYW5jaG9yIiwibm9kZSIsInByZXBlbmQiLCJ0eXBlIiwiZW50aXR5VHlwZSIsInNjcm9sbFRhcmdldCIsIm1hdGVyaWFsUGF0aCIsInJlZ2lvbnNTdHJ1Y3R1cmUiLCJzZXJpYWxpemUiLCJtYXRlcmlhbHNEZWNsIiwiJGxheW91dFJlZ2lvbiIsImV4dHJhY3RSZWdpb25EYXRhIiwicmVwbGFjZSIsIiRsYXlvdXRNYXRlcmlhbHMiLCIkbGF5b3V0TWF0ZXJpYWwiLCJwcm9jZXNzTGF5b3V0TWF0ZXJpYWwiLCJsYXlvdXRNYXRlcmlhbEl0ZW0iLCJsYXlvdXRNYXRlcmlhbCIsInByZWZpeCIsImVkaXRhYmxlS2V5cyIsIiRyZWdpb25zIiwicHJvY2Vzc1RlbXBsYXRlUmVnaW9uIiwiaXNDb250ZW50IiwiJHRlbXBsYXRlUmVnaW9uIiwiJHJlZ2lvbk1hdGVyaWFscyIsInByb2Nlc3NUZW1wbGF0ZVJlZ2lvbk1hdGVyaWFsIiwiJHJlZ2lvbk1hdGVyaWFsIiwicmVnaW9uSWQiLCJ1bmlxdWVDb250ZW50SWQiLCJTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwidW5pcWlkIiwibW9yZUVudHJvcHkiLCJyZXRJZCIsIl9mb3JtYXRTZWVkIiwic2VlZCIsInJlcVdpZHRoIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsInNsaWNlIiwiQXJyYXkiLCJqb2luIiwiJGdsb2JhbCIsIkdMT0JBTCIsIiRsb2N1dHVzIiwicGhwIiwidW5pcWlkU2VlZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIkRhdGUiLCJnZXRUaW1lIiwidG9GaXhlZCIsIkRhdGFQcm92aWRlciIsImNsYXNzTmFtZSIsImFzc29jaWF0aW9ucyIsImFzc29jaWF0ZSIsIiRyZWdpb24iLCJtYXRlcmlhbEtleSIsIiRtYXRlcmlhbCIsIm1hdGVyaWFsRWRpdGFibGVLZXlzIiwiaW5pdGlhbGl6ZU1hdGVyaWFsRWRpdCIsIiRyb290IiwiJGJsb2NrcyIsImNvdW50ZXIiLCJlZGl0YWJsZSIsImluaXRpYWxpemVFZGl0YWJsZSIsInNlcmlhbGl6ZU1hdGVyaWFsIiwiY2xhc3MiLCJmaWxsQ29uZmlnIiwiRGF0YVByb3ZpZGVyRmFjdG9yeSIsInByb3ZpZGVyRGVjbCIsInByb3ZpZGVyIiwiRWRpdGFibGUiLCJlZGl0YWJsZXNCeVR5cGUiLCJNT05TVEVSX0VESVRBQkxFUyIsImV4cG9ydFZhcmlhYmxlIiwic2VyaWFsaXplTm9kZSIsInN0cmluZyIsIkhhc2hBcGkiLCJmdW5jdGlvbkNhbGxzIiwiaGFzaCIsIm1hdGNoZXMiLCJtYXRjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsImluaXRpYWxpemUiLCJwYWdlU3RydWN0dXJlSnNvbkRhdGEiLCJwYXJlbnRXaW5kb3ciLCJwYXJlbnRNb25zdGVyIiwicGFyZW50QnVpbGRlciIsImN1cnJlbnRNb25zdGVyQ29udGVudCIsInJlc2l6ZSIsInVwZGF0ZUhhbmRsZXJzIiwiaW5pdFByb3ZpZGVycyIsIk1vbnN0ZXJFZGl0RGF0YSIsInByb3ZpZGVycyIsImdldFByb3ZpZGVycyIsImVudGl0eSIsImFyciIsImZhY3RvcnkiLCIkbW9uc3RlckNvbnRlbnRDYWNoZSIsIiRzZWxlY3RlZE1hdGVyaWFsIiwiJGhhbmRsZXJzIiwiY3NzIiwicG9zaXRpb24iLCJ0b3AiLCJoZWlnaHQiLCIkbW9uc3RlckNvbnRlbnQiLCIkbW9uc3RlciIsInNlcmlhbGl6ZVVuaXF1ZUNvbnRlbnQiLCJzZW5kVG9CdWlsZGVyIiwiYmxvY2siLCJWaXN1YWxGcmFtZVNldHRpbmdzIiwicHJvdmlkZXJzRW50aXRpZXMiLCJyZWdpb25zTWF0ZXJpYWxzIiwibWF0ZXJpYWxzQnlSZWdpb25zIiwicmVnaW9uTmFtZSIsInJhbmRvbUluZGV4IiwiaXRlcmF0ZVRlbXBsYXRlVHlwZSIsIm1hdGVyaWFsc0J5UmVnaW9uRGVjbCIsImRlY2wiLCJtYXRlcmlhbHNPcmRlciIsIm1hdGVyaWFsc0RlY2xzIiwiYWN0aW9uIiwiZm9ybVN1Ym1pdCIsInJlZ2lvbnNSZXN1bHQiLCJpdGVyYXRlVGVtcGxhdGVSZWdpb25zIiwidGVtcGxhdGVSZWdpb25zT3JkZXIiLCJlbnRpdHlNYXRlcmlhbHMiLCJzZXJpYWxpemVQcm92aWRlcnMiLCJwcm92aWRlcktleSIsInZhbHVlIiwicmVmcmVzaE1vbnN0ZXJDb250ZW50Q2FjaGUiLCIkZm9ybSIsIiRpbnB1dCIsIiRjc3JmIiwiYXR0ciIsInZhbCIsImFwcGVuZFRvIiwic3VibWl0IiwicmVnaW9uTWF0ZXJpYWxzIiwiaXRlcmF0ZU1hdGVyaWFscyIsIldZU0lXWUciLCJmcmFtZSQiLCJlZGl0b3IiLCJnZXREYXRhIiwiaHRtbCIsImNvbmZpZyIsImF1dG9QYXJhZ3JhcGgiLCJlbmFibGVDb250ZW50RWRpdGFibGUiLCJpZ25vcmVFbXB0eVBhcmFncmFwaCIsImVudGVyTW9kZSIsIkNLRURJVE9SIiwiRU5URVJfQlIiLCJBbGxveUVkaXRvciIsImFsbCIsIkltYWdlIiwiJGltZyIsInNyYyIsImFsdCIsIkxpbmsiLCJocmVmIiwiYW5jaG9yIiwiVGV4dFN0cmluZyIsImFsbG93ZWRDb250ZW50IiwidG9vbGJhcnMiLCJzdHlsZXMiLCJzZWxlY3Rpb25zIiwiU2VsZWN0aW9ucyIsInRhYkluZGV4IiwiYmxvY2tsZXNzIiwia2V5Q29kZSIsIlNISUZUIiwiY2FuY2VsIiwiZGF0YVZhbHVlIiwiU3RhdGljQ29udGVudCIsIm5ld0RhdGEiLCJlbnRpdGllcyIsInNlcmlhbGl6ZUtleXMiLCJyZWN1cnNpdmVTZXJpYWxpemUiLCJ3YXJuIiwic2VyaWFsaXplRWRpdGFibGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7O0FBRUE7Ozs7OztBQUVBQSxRQUFPQyxlQUFQLEdBQXlCLCtCQUF6QjtBQUNBLEc7Ozs7Ozs7Ozs7Ozs7O0FDTEE7Ozs7Ozs7O0tBRU1DLGU7QUFDSiw0QkFBWUMsYUFB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QVF0SCxJQUFSLENBQWEsU0FBUzZCLElBQVQsR0FBZ0I7QUFDM0IsbUJBQU1oQyxRQUFRdkksRUFBRSxJQUFGLENBQWQ7QUFDQTJFLHNCQUFPaEMsR0FBUCxFQUFZNkUsSUFBWixDQUFpQjdELEtBQUt5VCxrQkFBTCxDQUF3QnJMLEdBQXhCLEVBQTZCeEQsS0FBN0IsRUFBb0MvRixPQUFPQyxJQUFQLENBQVlzSixHQUFaLENBQXBDLEVBQXNELE9BQXRELENBQWpCO0FBQ0FrRTtBQUNELGNBSkQ7QUFQdUI7QUFZeEIsVUFaRCxNQVlPO0FBQ0w7QUFDQSxlQUFNclAsUUFBUW1QLE1BQU16TCxJQUFOLDBCQUFrQzRJLE1BQWxDLEdBQTJDdkssR0FBM0MsU0FBb0RTLEtBQXBELEVBQWQ7QUFDQSxlQUFJeEMsTUFBTWtDLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIrQixxQkFBUXdTLElBQVIsa0NBQTRDbkssTUFBNUMsR0FBcUR2SyxHQUFyRDtBQUNBO0FBQ0Q7QUFDRGdDLGtCQUFPaEMsR0FBUCxJQUFjLHVCQUFhdU4sUUFBYixDQUFzQm9ILGlCQUF0QixDQUF3QzFXLEtBQXhDLENBQWQ7QUFDRDtBQUNGLFFBM0JEO0FBNEJBLGNBQU8rRCxNQUFQO0FBQ0Q7Ozs7OzttQkFHWXFTLGE7Ozs7Ozs7O0FDdERmLDBDIiwiZmlsZSI6InZpc3VhbC1idWlsZGVyL3NjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDVjZTBkOWI2ODQ0NzY2NzQ1NGNkXG4gKiovIiwiaW1wb3J0ICcuL2J1bmRsZS5jc3MnO1xuXG5pbXBvcnQgRnJvbnRlbmRNb25zdGVyIGZyb20gJy4vRnJvbnRlbmRNb25zdGVyJztcblxud2luZG93LkZyb250ZW5kTW9uc3RlciA9IG5ldyBGcm9udGVuZE1vbnN0ZXIoKTtcbi8vXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzXG4gKiovIiwiaW1wb3J0IEZyYW1lQXBpIGZyb20gJy4vLi4vdmlzdWFsLWZyYW1lL0ZyYW1lQXBpJztcblxuY2xhc3MgQmFzZUVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IodmlzdWFsQnVpbGRlciwgbmFtZSkge1xuICAgIHRoaXMudmlzdWFsQnVpbGRlciA9IHZpc3VhbEJ1aWxkZXI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhcmdldCA9ICQodGhpcy52aXN1YWxCdWlsZGVyLnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKVswXS5jb250ZW50V2luZG93O1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgLy8gZGVhY3RpdmF0ZSBjdXJyZW50IHNlbGVjdGVkIGVudmlyb25tZW50XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gdGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkge1xuICAgICAgdGhpcy52aXN1YWxCdWlsZGVyLmVudmlyb25tZW50cy5nZXQodGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkuZGVhY3RpdmF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0YXJnZXQkKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldC4kO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIuY2xlYXJTdGFja2FibGUoKTtcbiAgfVxuXG4gIHNlbmRNZXNzYWdlKGZ1bmMsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy50YXJnZXQsIGZ1bmMsIGFyZ3MpO1xuICB9XG5cbiAgcGFnZUNoYW5nZWQoKSB7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlRW52aXJvbm1lbnQ7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJjbGFzcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG5cbiAgfVxuXG4gIGluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSkge1xuXG4gIH1cblxuICBzdGF0aWMgZ2V0IGZyYW1lJCgpIHtcbiAgICByZXR1cm4gd2luZG93LiQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUVkaXRhYmxlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9CYXNlRWRpdGFibGUuanNcbiAqKi8iLCJjbGFzcyBGcmFtZUFwaSB7XG4gIHN0YXRpYyBnZXQgaXNJZSgpIHtcbiAgICAvKiBnbG9iYWwgaXMgKi9cbiAgICBpZiAodHlwZW9mKGlzKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBpcy5pZSgpOy8vIHx8IGlzLmVkZ2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRpYyBiaW5kTWVzc2FnZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFja0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgIGxldCBtZXNzYWdlID0gbnVsbDtcbiAgICAgIGlmIChGcmFtZUFwaS5pc0llKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZSA9IGV2ZW50LmRhdGE7XG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0ZW5lclttZXNzYWdlLmZ1bmNdKSB7XG4gICAgICAgIGxpc3RlbmVyW21lc3NhZ2UuZnVuY10uYXBwbHkobGlzdGVuZXIsIG1lc3NhZ2UuYXJncyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElFOFxuICAgICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbm1lc3NhZ2UnLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHNlbmRNZXNzYWdlKHRhcmdldCwgZnVuYywgYXJncykge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBmdW5jLFxuICAgICAgYXJnc1xuICAgIH07XG4gICAgY29uc3QgbWVzc2FnZSA9IEZyYW1lQXBpLmlzSWUgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IGRhdGE7XG5cbiAgICB0YXJnZXQucG9zdE1lc3NhZ2UobWVzc2FnZSwgJyonKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcmFtZUFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0ZyYW1lQXBpLmpzXG4gKiovIiwiaW1wb3J0IFZpc3VhbEJ1aWxkZXIgZnJvbSAnLi9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlcic7XG5pbXBvcnQgVmlzdWFsRnJhbWUgZnJvbSAnLi9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZSc7XG5pbXBvcnQgSGFzaEFwaSBmcm9tICcuL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGknO1xuXG5jbGFzcyBGcm9udGVuZE1vbnN0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtcygpO1xuICAgIHRoaXMudmlzdWFsQnVsZGVyID0gbnVsbDtcbiAgICB0aGlzLmhhc2hBcGkgPSBuZXcgSGFzaEFwaSgpO1xuICAgIGlmICh3aW5kb3cucGFyZW50ICE9PSB3aW5kb3cgJiYgd2luZG93LnBhcmVudC5Gcm9udGVuZE1vbnN0ZXIpIHtcbiAgICAgIGlmICh3aW5kb3cucGFyZW50LkZyb250ZW5kTW9uc3Rlci5oYXNCdWlsZGVyKSB7XG4gICAgICAgIHRoaXMuVmlzdWFsRnJhbWUgPSBuZXcgVmlzdWFsRnJhbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogZ2xvYmFsIHNtb290aFNjcm9sbDogZmFsc2UqL1xuICAgIGlmICh0eXBlb2Yoc21vb3RoU2Nyb2xsKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNtb290aFNjcm9sbC5pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgVmlzdWFsQnVpbGRlciBjbGFzcyBpbnN0YW5jZVxuICAgKiBAcmV0dXJucyBWaXN1YWxCdWlsZGVyXG4gICAqL1xuICBnZXQgYnVpbGRlcigpIHtcbiAgICBpZiAodGhpcy52aXN1YWxCdWxkZXIgPT09IG51bGwpIHtcbiAgICAgIHRoaXMudmlzdWFsQnVsZGVyID0gbmV3IFZpc3VhbEJ1aWxkZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmlzdWFsQnVsZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgRnJvbnRlbmRNb25zdGVyIGluc3RhbmNlIGhhcyBWaXN1YWwgQnVpbGRlciBvbiBwYWdlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGhhc0J1aWxkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRlci4kYnVpbGRlci5sZW5ndGggPT09IDE7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBGcm9udGVuZE1vbnN0ZXIgc2V0dGluZ3MuXG4gICAqIFVzZXMgRnJvbnRlbmRNb25zdGVyU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuRnJvbnRlbmRNb25zdGVyU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh1c2VyU2V0dGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICB9KTtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJvbnRlbmRNb25zdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvRnJvbnRlbmRNb25zdGVyLmpzXG4gKiovIiwiaW1wb3J0IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQnO1xuaW1wb3J0IE1hdGVyaWFsc0Vudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50JztcbmltcG9ydCBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50JztcbmltcG9ydCBBY3Rpb25FbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudCc7XG5pbXBvcnQgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCc7XG5pbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi8uLi92aXN1YWwtZnJhbWUvRnJhbWVBcGknO1xuLy8gaW1wb3J0IEVkaXRhYmxlIGZyb20gJy4vRWRpdGFibGUnO1xuXG5jbGFzcyBWaXN1YWxCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLnJlc29sdXRpb25Td2l0Y2hlcigpO1xuXG4gICAgdGhpcy5lbnZpcm9ubWVudHMgPSBuZXcgTWFwKFtcbiAgICAgIFsnc2l0ZS1zdHJ1Y3R1cmUnLCBuZXcgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdzaXRlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsncGFnZS1zdHJ1Y3R1cmUnLCBuZXcgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdwYWdlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsnbWF0ZXJpYWxzJywgbmV3IE1hdGVyaWFsc0Vudmlyb25tZW50KHRoaXMsICdtYXRlcmlhbHMnKV0sXG4gICAgICBbJ2N1c3RvbWl6YXRpb24nLCBuZXcgQ3VzdG9taXphdGlvbkVudmlyb25tZW50KHRoaXMsICdjdXN0b21pemF0aW9uJyldLFxuICAgICAgWydhY3Rpb24nLCBuZXcgQWN0aW9uRW52aXJvbm1lbnQodGhpcywgJ2FjdGlvbicpXSxcbiAgICBdKTtcblxuICAgIHRoaXMuZW52aXJvbm1lbnRTZWxlY3RvcigpO1xuXG4gICAgLy8gc2VsZWN0IGZpcnN0IGVudmlyb25tZW50IGJ5IGRlZmF1bHRcbiAgICB0aGlzLnN3aXRjaEVudmlyb25tZW50KCdzaXRlLXN0cnVjdHVyZScpO1xuICAgICQoJy5tb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJylcbiAgICAgIC5maXJzdCgpXG4gICAgICAubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICBGcmFtZUFwaS5iaW5kTWVzc2FnZUxpc3RlbmVyKHRoaXMpO1xuXG4gICAgLy8gdGhpcy5lZGl0YWJsZSA9IG5ldyBFZGl0YWJsZSgpO1xuXG4gICAgdGhpcy5jb250cm9scygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgVmlzdWFsQnVpbGRlciBzZXR0aW5ncy5cbiAgICogVXNlcyBWaXN1YWxCdWlsZGVyU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuVmlzdWFsQnVpbGRlclNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgJ2VsZW1lbnQtc2VsZWN0b3InOiAnLm1vbnN0ZXItdmlzdWFsLWJ1aWxkZXInLFxuICAgICAgJ2ZyYW1lLXNlbGVjdG9yJzogJy5tb25zdGVyLXZpc3VhbC1mcmFtZScsXG4gICAgICBidW5kbGVzOiB7fSxcbiAgICAgICdzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJzogJ21vbnN0ZXItc3RhY2thYmxlLWNvbnRhaW5lcicsXG4gICAgICAnbmV3LWJsb2NrLXVybCc6ICcvbW9uc3Rlci92aXN1YWwtYnVpbGRlci9uZXctYmxvY2snLFxuICAgIH07XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuJGJ1aWxkZXIgPSAkKHRoaXMuc2V0dGluZ3NbJ2VsZW1lbnQtc2VsZWN0b3InXSk7XG4gICAgdGhpcy4kc3RhY2thYmxlID0gJChgLiR7dGhpcy5zZXR0aW5nc1snc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyddfWApO1xuICB9XG5cbiAgcmVzb2x1dGlvblN3aXRjaGVyKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGJlbUVsZW0gPSAncmVzb2x1dGlvbi1zd2l0Y2hlcl9fcmVzb2x1dGlvbi1saW5rJztcblxuICAgIGNvbnN0ICRyZXNvbHV0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRyZXNvbHV0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAkcmVzb2x1dGlvbkxpbmtzLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgICAgJCh0aGF0LnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKS53aWR0aCgkKHRoaXMpLmRhdGEoJ3Jlc29sdXRpb25XaWR0aCcpKTtcbiAgICAgICQodGhpcykubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGVudmlyb25tZW50U2VsZWN0b3IoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgYmVtRWxlbSA9ICdtb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJztcblxuICAgIGNvbnN0ICRzZWN0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRzZWN0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBjb25zdCBlbnZpcm9ubWVudE5hbWUgPSAkKHRoaXMpLmRhdGEoJ2Vudmlyb25tZW50TmFtZScpO1xuICAgICAgaWYgKHRoYXQuY3VycmVudEVudmlyb25tZW50ID09PSBlbnZpcm9ubWVudE5hbWUpIHtcbiAgICAgICAgJHNlY3Rpb25MaW5rcy5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgdGhhdC5lbnZpcm9ubWVudHMuZ2V0KGVudmlyb25tZW50TmFtZSkuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB0aGF0LmN1cnJlbnRFbnZpcm9ubWVudCA9IG51bGw7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgJHNlY3Rpb25MaW5rcy5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgIHRoYXQuc3dpdGNoRW52aXJvbm1lbnQoZW52aXJvbm1lbnROYW1lKTtcbiAgICAgICQodGhpcykubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHN3aXRjaEVudmlyb25tZW50KGVudmlyb25tZW50TmFtZSkge1xuICAgIHRoaXMuZW52aXJvbm1lbnRzLmdldChlbnZpcm9ubWVudE5hbWUpLmFjdGl2YXRlKCk7XG4gICAgdGhpcy5jdXJyZW50RW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudE5hbWU7XG4gIH1cblxuICBjbGVhclN0YWNrYWJsZSgpIHtcbiAgICB0aGlzLiRzdGFja2FibGUuZW1wdHkoKTtcbiAgfVxuXG4gIGNyZWF0ZVN0YWNrYWJsZVBhbmUoKSB7XG4gICAgY29uc3QgcGFuZUNsYXNzID0gYCR7dGhpcy5zZXR0aW5nc1snc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyddfV9fcGFuZWA7XG4gICAgY29uc3QgbW9kaWZpZXIgPSB0aGlzLiRzdGFja2FibGUuZmluZChgLiR7cGFuZUNsYXNzfWApLmxlbmd0aCA9PT0gMFxuICAgICAgPyBgJHtwYW5lQ2xhc3N9X2ZpcnN0YFxuICAgICAgOiAnJztcbiAgICBjb25zdCAkbmV3UGFuZSA9ICQoYDxkaXYgY2xhc3M9XCIke3BhbmVDbGFzc30gJHttb2RpZmllcn1cIj48L2Rpdj5gKTtcbiAgICB0aGlzLiRzdGFja2FibGUuYXBwZW5kKCRuZXdQYW5lKTtcbiAgICByZXR1cm4gJG5ld1BhbmU7XG4gIH1cblxuICBtYXRlcmlhbEJ5TmFtZShuYW1lKSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MubWF0ZXJpYWxzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5tYXRlcmlhbHNbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IGZyYW1lQ29udGVudFdpbmRvdygpIHtcbiAgICByZXR1cm4gJCh0aGlzLnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKVswXS5jb250ZW50V2luZG93O1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIC8vIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMuZnJhbWVDb250ZW50V2luZG93LCAnc2VyaWFsaXplQ29udGVudCcsIFsnbG9nJ10pO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKS5zZXJpYWxpemVQYWdlKCk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAgIC8vIHdlIGhhdmUgcmVzdWx0IHdoaWNoIGlzIGNvbnRlbnQgaW4gZm9ybWF0OlxuICAgIC8vIHJlZ2lvblxuICAgIC8vIC0tLSBtYXRlcmlhbCBpZFxuICAgIC8vIC0tLS0tLS0ga2V5cyA9PiB2YWx1ZXNcbiAgICAvL1xuICAgIC8vIG91ciBQcm92aWRlcnMgc2hvdWxkIGdldCBvbmx5IHRob3NlIGtleXMgdGhhdCB0aGV5IHByb3ZpZGVcbiAgICAvLyBwcm92aWRlZCBrZXlzIGFyZSBzdG9yZWQgaW4gZnJhbWVDb250ZW50V2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEudGVtcGxhdGUucHJvdmlkZWRLZXlzXG4gICAgY29uc3QgcmVzdWx0QnlQcm92aWRlcnMgPSB7fTtcbiAgICBjb25zdCBwcm92aWRlZEtleXMgPSB0aGlzLmZyYW1lQ29udGVudFdpbmRvdy5NT05TVEVSX0VESVRfTU9ERV9EQVRBLnRlbXBsYXRlLnByb3ZpZGVkS2V5cztcblxuICAgIE9iamVjdC5rZXlzKHByb3ZpZGVkS2V5cykuZm9yRWFjaChwcm92aWRlckluZGV4ID0+IHtcbiAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdID0ge307XG5cbiAgICAgIGNvbnN0IHJlZ2lvbnMgPSBwcm92aWRlZEtleXNbcHJvdmlkZXJJbmRleF07XG5cbiAgICAgIE9iamVjdC5rZXlzKHJlZ2lvbnMpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5oYXNPd25Qcm9wZXJ0eShyZWdpb25LZXkpID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1twcm92aWRlckluZGV4XVtyZWdpb25LZXldID0ge307XG5cbiAgICAgICAgLy8gZ28gZGVlcCB0byBtYXRlcmlhbCBpbmRlY2VzXG4gICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IHJlZ2lvbnNbcmVnaW9uS2V5XTtcblxuICAgICAgICBPYmplY3Qua2V5cyhtYXRlcmlhbHMpLmZvckVhY2gobWF0ZXJpYWxJbmRleCA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdFtyZWdpb25LZXldLmhhc093blByb3BlcnR5KG1hdGVyaWFsSW5kZXgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1twcm92aWRlckluZGV4XVtyZWdpb25LZXldW21hdGVyaWFsSW5kZXhdID0ge307XG5cbiAgICAgICAgICBjb25zdCBkYXRhS2V5cyA9IG1hdGVyaWFsc1ttYXRlcmlhbEluZGV4XTtcblxuICAgICAgICAgIGRhdGFLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHRbcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XS5oYXNPd25Qcm9wZXJ0eShrZXkpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1xuICAgICAgICAgICAgICBbcHJvdmlkZXJJbmRleF1cbiAgICAgICAgICAgICAgW3JlZ2lvbktleV1cbiAgICAgICAgICAgICAgW21hdGVyaWFsSW5kZXhdXG4gICAgICAgICAgICAgIFtrZXldID0gcmVzdWx0W3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF1ba2V5XTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHRCeVByb3ZpZGVycyk7XG4gICAgcmV0dXJuIHJlc3VsdEJ5UHJvdmlkZXJzO1xuICB9XG5cbiAgcGFnZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5lbnZpcm9ubWVudHMuZm9yRWFjaChcbiAgICAgIGVudmlyb25tZW50ID0+XG4gICAgICAgIGVudmlyb25tZW50LnBhZ2VDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgbG9nKHJlc3VsdCkge1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gIH1cblxuICBjb250cm9scygpIHtcbiAgICB0aGlzLiRjb250cm9scyA9IHRoaXMuJGJ1aWxkZXIuZmluZCgnLmNvbnRyb2xzX2xlZnQnKS5maXJzdCgpO1xuICAgIHRoaXMuJGNvbnRyb2xzLmVsZW0oJ3JlZnJlc2gnKS5jbGljaygoKSA9PiB7XG4gICAgICB0aGlzLmZyYW1lQ29udGVudFdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIHRoaXMuJGNvbnRyb2xzLmVsZW0oJ3NhdmUnKS5jbGljaygoKSA9PiB7XG4gICAgICBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLmZyYW1lQ29udGVudFdpbmRvdywgJ3NhdmUnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLiRjb250cm9sc1JpZ2h0ID0gdGhpcy4kYnVpbGRlci5maW5kKCcuY29udHJvbHNfcmlnaHQnKS5maXJzdCgpO1xuICAgIHRoaXMuJGNvbnRyb2xzUmlnaHQuZWxlbSgnY2xlYXItY2FjaGUnKS5jbGljaygoKSA9PiB7XG4gICAgICAvKiBnbG9iYWwgd2luZG93OiBmYWxzZSAqL1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24sIG5vLXVudXNlZC12YXJzICovXG4gICAgICB3aW5kb3cuRGlhbG9nSGVscGVyXG4gICAgICAgIC5idWlsZGVyRGlhbG9nKClcbiAgICAgICAgLm9uQWpheExvYWQoKGRhdGEsICR0YXJnZXQsIGRpYWxvZywgZGF0YUNoYW5nZXIpID0+IHtcbiAgICAgICAgICBkYXRhQ2hhbmdlcihkYXRhID8gJzxkaXY+T0s8L2Rpdj4nIDogJzxkaXY+RXJyb3I8L2Rpdj4nKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmFqYXgoe1xuICAgICAgICAgIHVybDogJy9tb25zdGVyL2J1bmRsZXMvY2xlYXItY2FjaGUnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIH0pXG4gICAgICAgIC5hdXRvRGVzdHJveSgpXG4gICAgICAgIC5zaG93KCk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduLCBuby11bnVzZWQtdmFycyAqL1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbEJ1aWxkZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlci5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBBY3Rpb25FbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBNYXRlcmlhbHNFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICBzdXBlcih2aXN1YWxCdWlsZGVyLCBuYW1lKTtcbiAgICB0aGlzLmluaXRNYXRlcmlhbHNTZWxlY3RvcigpO1xuICB9XG5cbiAgaW5pdE1hdGVyaWFsc1NlbGVjdG9yKCkge1xuICAgIHRoaXMuJG1hdGVyaWFsc0dyb3VwcyA9ICQoJzx1bCBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNcIj48L3VsPicpO1xuICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QgPSBbXTtcblxuICAgIHRoaXMudmlzdWFsQnVpbGRlci5zZXR0aW5ncy5idW5kbGVzLmZvckVhY2goYnVuZGxlID0+IHtcbiAgICAgIC8qIGdsb2JhbCBwb2x5Z2xvdDogZmFsc2UgKi9cbiAgICAgIGNvbnN0IGkxOG5CdW5kbGVOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBwb2x5Z2xvdC50KGJ1bmRsZS5uYW1lKVxuICAgICAgICA6IGJ1bmRsZS5uYW1lO1xuXG4gICAgICBjb25zdCAkYnVuZGxlVGl0bGUgPSBgXG4gICAgICA8bGkgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19pdGVtIG1hdGVyaWFscy1ncm91cHNfX2l0ZW0tLWJ1bmRsZS1sYWJlbFwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWJ1bmRsZVwiIGRhdGEtYnVuZGxlLXBhdGg9XCIke2J1bmRsZS5mdWxsUGF0aH1cIj5cbiAgICAgICAgICAgICR7aTE4bkJ1bmRsZU5hbWV9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICBgO1xuICAgICAgdGhpcy4kbWF0ZXJpYWxzTGlzdC5wdXNoKCRidW5kbGVUaXRsZSk7XG5cbiAgICAgIGJ1bmRsZS5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwTmFtZSA9IGdyb3VwLm5hbWU7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IGdyb3VwLm1hdGVyaWFscztcbiAgICAgICAgY29uc3QgaTE4bkdyb3VwTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnID8gcG9seWdsb3QudChncm91cE5hbWUpIDogZ3JvdXBOYW1lO1xuICAgICAgICBjb25zdCAkbGkgPSAkKGBcbiAgICA8bGkgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19pdGVtXCI+XG4gICAgICA8YSBocmVmPVwiI1wiIGRhdGEtZ3JvdXAtcGF0aD1cIiR7Z3JvdXAuZnVsbFBhdGh9XCIgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXBcIj5cbiAgICAgICAgJHtpMThuR3JvdXBOYW1lfSA8c3BhbiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX2NvdW50XCI+KCR7bWF0ZXJpYWxzLmxlbmd0aH0pPC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvbGk+YCk7XG4gICAgICAgIHRoaXMuJG1hdGVyaWFsc0dyb3Vwcy5hcHBlbmQoJGxpKTtcbiAgICAgICAgY29uc3QgJGxpc3QgPSAkKGA8dWwgY2xhc3M9XCJtYXRlcmlhbHMtbGlzdFwiIGRhdGEtZ3JvdXAtcGF0aD1cIiR7Z3JvdXAuZnVsbFBhdGh9XCI+PC91bD5gKTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcblxuICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaChtYXRlcmlhbCA9PiB7XG4gICAgICAgICAgY29uc3QgbWF0ZXJpYWxOYW1lID0gbWF0ZXJpYWwubmFtZTtcbiAgICAgICAgICBjb25zdCBpMThuTWF0ZXJpYWxOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gcG9seWdsb3QudChtYXRlcmlhbE5hbWUpXG4gICAgICAgICAgICA6IG1hdGVyaWFsTmFtZTtcbiAgICAgICAgICBjb25zdCAkaXRlbSA9ICQoYFxuPGxpPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWF0ZXJpYWxzLWxpc3RfX2l0ZW1cIiBkYXRhLW1hdGVyaWFsLXBhdGg9XCIke21hdGVyaWFsLmZ1bGxQYXRofVwiPlxuICAgICR7aTE4bk1hdGVyaWFsTmFtZX1cbiAgPC9hPlxuPC9saT5cbmApO1xuICAgICAgICAgIGl0ZW1zLnB1c2goJGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgJGxpc3QuYXBwZW5kKGl0ZW1zKTtcbiAgICAgICAgdGhpcy4kbWF0ZXJpYWxzTGlzdC5wdXNoKCRsaXN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgLyogZ2xvYmFsIGRvY3VtZW50OiBmYWxzZSAqL1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJywgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgJHRoaXMudG9nZ2xlTW9kKCdhY3RpdmUnKTtcbiAgICAgIGNvbnN0IGdyb3VwUGF0aCA9ICR0aGlzLmRhdGEoJ2dyb3VwUGF0aCcpO1xuICAgICAgaWYgKCR0aGlzLm1vZCgnYWN0aXZlJykpIHtcbiAgICAgICAgJCgnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcpLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuXG4gICAgICAgICQoJy5tYXRlcmlhbHMtbGlzdCcpLmVhY2goZnVuY3Rpb24gaXQoKSB7XG4gICAgICAgICAgY29uc3QgJGxpc3QgPSAkKHRoaXMpO1xuICAgICAgICAgIGlmICgkbGlzdC5tb2QoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAkbGlzdC5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCRsaXN0LmRhdGEoJ2dyb3VwUGF0aCcpID09PSBncm91cFBhdGgpIHtcbiAgICAgICAgICAgICRsaXN0Lm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkdGhpcy5tb2QoJ2FjdGl2ZScsIHRydWUpO1xuICAgICAgICB0aGF0LiRtYXRlcmlhbHNQYW5lLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoYXQncyBqdXN0IHNlY29uZCBjbGljayBvbiB0aGUgc2FtZSBncm91cFxuICAgICAgICB0aGF0LiRtYXRlcmlhbHNQYW5lLmhpZGUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYXRlcmlhbHMtbGlzdF9faXRlbScsIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgIGNvbnN0IFBhZ2VTdHJ1Y3R1cmVFbnYgPSB0aGF0LnZpc3VhbEJ1aWxkZXIuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRSZWdpb25LZXkgPSBQYWdlU3RydWN0dXJlRW52LnNlbGVjdGVkUmVnaW9uS2V5O1xuICAgICAgY29uc3Qgc2VsZWN0ZWRFbnRpdHkgPSBQYWdlU3RydWN0dXJlRW52LnNlbGVjdGVkRW50aXR5O1xuXG4gICAgICBpZiAoc2VsZWN0ZWRSZWdpb25LZXkgIT09IG51bGwgJiYgc2VsZWN0ZWRFbnRpdHkgIT09IG51bGwpIHtcbiAgICAgICAgdGhhdC5zZW5kTWVzc2FnZShcbiAgICAgICAgICAnbmV3QmxvY2snLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgICQodGhpcykuZGF0YSgnbWF0ZXJpYWxQYXRoJyksXG4gICAgICAgICAgICBzZWxlY3RlZEVudGl0eSxcbiAgICAgICAgICAgIHNlbGVjdGVkUmVnaW9uS2V5LFxuICAgICAgICAgIF1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHN1cGVyLmFjdGl2YXRlKCk7XG5cbiAgICB0aGlzLiRncm91cHNQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRncm91cHNQYW5lLmFwcGVuZCh0aGlzLiRtYXRlcmlhbHNHcm91cHMpO1xuXG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZS5hcHBlbmQodGhpcy4kbWF0ZXJpYWxzTGlzdCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZS5oaWRlKCk7XG5cbiAgICAvKlxuICAgIGNvbnN0IFBhZ2VTdHJ1Y3R1cmVFbnYgPSB0aGF0LnZpc3VhbEJ1aWxkZXIuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkUmVnaW9uS2V5ID0gUGFnZVN0cnVjdHVyZUVudi5zZWxlY3RlZFJlZ2lvbktleTtcbiAgICBjb25zdCBzZWxlY3RlZEVudGl0eSA9IFBhZ2VTdHJ1Y3R1cmVFbnYuc2VsZWN0ZWRFbnRpdHk7XG5cbiAgICBAdG9kbyBjaGVjayBmb3Igc2VsZWN0ZWRSZWdpb24gaWYgbm90IC0gd2UgbXVzdCBub3QgYWRkIGJsb2NrIGhlcmVcbiAgICAqL1xuXG4gICAgJCgnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcpLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbHNFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvTWF0ZXJpYWxzRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IodmlzdWFsQnVpbGRlciwgbmFtZSkge1xuICAgIHN1cGVyKHZpc3VhbEJ1aWxkZXIsIG5hbWUpO1xuICAgIHRoaXMuaW5pdFBhZ2VTdHJ1Y3R1cmVFbGVtZW50KCk7XG4gICAgdGhpcy5lZGl0TW9kZURhdGEgPSB7fTtcbiAgICB0aGlzLnNlbGVjdGVkUmVnaW9uS2V5ID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gbnVsbDtcbiAgfVxuXG4gIGluaXRQYWdlU3RydWN0dXJlRWxlbWVudCgpIHtcbiAgICB0aGlzLiRoZWFkZXIgPSAkKCc8ZGl2IGNsYXNzPVwibW9uc3Rlci1zdGFja2FibGUtY29udGFpbmVyX19wYW5lLWhlYWRlclwiPlBhZ2Ugc3RydWN0dXJlPC9kaXY+Jyk7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZSA9ICQoJzxkaXYgY2xhc3M9XCJwYWdlLXN0cnVjdHVyZVwiPjwvZGl2PicpO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgc3VwZXIuYWN0aXZhdGUoKTtcblxuICAgIHRoaXMuJHN0cnVjdHVyZVBhbmUgPSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3JlYXRlU3RhY2thYmxlUGFuZSgpO1xuICAgIHRoaXMuJHN0cnVjdHVyZVBhbmUuYXBwZW5kKHRoaXMuJGhlYWRlcik7XG4gICAgdGhpcy4kc3RydWN0dXJlUGFuZS5hcHBlbmQodGhpcy4kcGFnZVN0cnVjdHVyZSk7XG4gIH1cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlLmRldGFjaCgpO1xuICAgIHRoaXMuJGhlYWRlci5kZXRhY2goKTtcbiAgICBzdXBlci5kZWFjdGl2YXRlKCk7XG4gIH1cblxuICBwYWdlQ2hhbmdlZCgpIHtcbiAgICBzdXBlci5wYWdlQ2hhbmdlZCgpO1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUuanN0cmVlKCdkZXN0cm95Jyk7XG4gICAgY29uc3QgbGF5b3V0ID0gdGhpcy50YXJnZXQuTU9OU1RFUl9FRElUX01PREVfREFUQS5sYXlvdXQ7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLnRhcmdldC5NT05TVEVSX0VESVRfTU9ERV9EQVRBLnRlbXBsYXRlO1xuXG4gICAgY29uc3QgbGF5b3V0SXRlbSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6ICdsYXlvdXQnLFxuICAgICAgICB0ZW1wbGF0ZUlkOiBsYXlvdXQuaWQsXG4gICAgICB9LFxuICAgICAgdGV4dDogYExheW91dCAtICR7bGF5b3V0LmtleX0gIyR7bGF5b3V0LmlkfWAsXG4gICAgICBpY29uOiAnZmEgZmEtY29sdW1ucycsXG4gICAgICBzdGF0ZToge1xuICAgICAgICBvcGVuZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH07XG4gICAgY29uc3QgdGVtcGxhdGVJdGVtID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBpZDogJ3RlbXBsYXRlJyxcbiAgICAgICAgdGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICB9LFxuICAgICAgdGV4dDogYFRlbXBsYXRlIC0gJHt0ZW1wbGF0ZS5rZXl9ICMke3RlbXBsYXRlLmlkfWAsXG4gICAgICBpY29uOiAnZmEgZmEtdGgnLFxuICAgICAgc3RhdGU6IHtcbiAgICAgICAgb3BlbmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICB9O1xuXG4gICAgY29uc3QgJGxheW91dFJlZ2lvbnMgPSB0aGlzLnRhcmdldCQoJy5tLW1vbnN0ZXItY29udGVudF9fbGF5b3V0Jyk7XG5cbiAgICAkbGF5b3V0UmVnaW9ucy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQucHJvY2Vzc0xheW91dCgkKHRoaXMpKTtcbiAgICAgIGxheW91dEl0ZW0uY2hpbGRyZW4ucHVzaChyZXN1bHQuaXRlbSk7XG4gICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcbiAgICAgICAgdGVtcGxhdGVJdGVtLmNoaWxkcmVuLnB1c2gocmVnaW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5wYWdlU3RydWN0dXJlID0gW1xuICAgICAgbGF5b3V0SXRlbSxcbiAgICAgIHRlbXBsYXRlSXRlbSxcbiAgICBdO1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUuanN0cmVlKHtcbiAgICAgIGNvcmU6IHtcbiAgICAgICAgZGF0YTogdGhpcy5wYWdlU3RydWN0dXJlLFxuICAgICAgICB0aGVtZXM6IHtcbiAgICAgICAgICBuYW1lOiAnZGVmYXVsdC1kYXJrJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgICd0eXBlcycsXG4gICAgICAgICd3aG9sZXJvdycsXG4gICAgICBdLFxuICAgICAgdHlwZXM6IHtcbiAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgaWNvbjogJ2ZhIGZhLWNvbHVtbnMnLFxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgIGljb246ICdmYSBmYS10aCcsXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlUmVnaW9uOiB7XG4gICAgICAgICAgaWNvbjogJ2ZhIGZhLWZvbGRlci1vJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudFRlbXBsYXRlUmVnaW9uOiB7XG4gICAgICAgICAgaWNvbjogJ2ZhIGZhLWZvbGRlcicsXG4gICAgICAgIH0sXG4gICAgICAgIG1hdGVyaWFsOiB7XG4gICAgICAgICAgaWNvbjogJ2ZhIGZhLXB1enpsZS1waWVjZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QganN0cmVlT2JqID0gdGhpcy4kcGFnZVN0cnVjdHVyZS5qc3RyZWUoKTtcblxuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUub24oJ2xvYWRlZC5qc3RyZWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uID0ganN0cmVlT2JqLmdldF9qc29uKHRoaXMuJHBhZ2VTdHJ1Y3R1cmUsIHtcbiAgICAgICAgbm9fc3RhdGU6IHRydWUsXG4gICAgICAgIG5vX2lkOiB0cnVlLFxuICAgICAgICBub19saV9hdHRyOiB0cnVlLFxuICAgICAgICBub19hX2F0dHI6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHRoaXMudGFyZ2V0LkZyb250ZW5kTW9uc3Rlci5WaXN1YWxGcmFtZS5wYWdlU3RydWN0dXJlSnNvbiA9IHRoaXMucGFnZVN0cnVjdHVyZUpzb247XG4gICAgICBsZXQgaXNDb250ZW50UmVnaW9uRm91bmQgPSBmYWxzZTtcbiAgICAgIHRoaXMucGFnZVN0cnVjdHVyZVsxXS5jaGlsZHJlbi5mb3JFYWNoKChyZWdpb24pID0+IHtcbiAgICAgICAgaWYgKHJlZ2lvbi5kYXRhLmVudGl0eURlcGVuZGVudCAmJiBpc0NvbnRlbnRSZWdpb25Gb3VuZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBpc0NvbnRlbnRSZWdpb25Gb3VuZCA9IHRydWU7XG4gICAgICAgICAganN0cmVlT2JqLnNlbGVjdF9ub2RlKHJlZ2lvbi5pZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IGNvbnRyb2xCdXR0b25zID0gJCgnPGRpdiBjbGFzcz1cInRyZWUtY29udHJvbC1idXR0b25zXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPiBFRElUIGFuZCBldGMuPC9kaXY+Jyk7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5vbignc2VsZWN0X25vZGUuanN0cmVlJywgKGUsIG9iaikgPT4ge1xuICAgICAgY29uc3QgJGFuY2hvciA9ICQoYCMke29iai5ub2RlLmlkfWApO1xuICAgICAgJGFuY2hvci5wcmVwZW5kKGNvbnRyb2xCdXR0b25zKTtcbiAgICAgIGNvbnN0IHR5cGUgPSBvYmoubm9kZS50eXBlO1xuICAgICAgdGhpcy5zZWxlY3RlZEVudGl0eSA9IG9iai5ub2RlLmRhdGEuZW50aXR5VHlwZSB8fCBudWxsO1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21hdGVyaWFsJzpcbiAgICAgICAgICB0aGlzLnRhcmdldCQuc21vb3RoU2Nyb2xsKHtcbiAgICAgICAgICAgIHNjcm9sbFRhcmdldDogdGhpcy50YXJnZXQkKGBbZGF0YS1tYXRlcmlhbC1wYXRoPVwiJHtvYmoubm9kZS5kYXRhLm1hdGVyaWFsUGF0aH1cIl1gKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUmVnaW9uS2V5ID0gb2JqLm5vZGUuZGF0YS5yZWdpb25LZXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RlbXBsYXRlUmVnaW9uJzpcbiAgICAgICAgY2FzZSAnY29udGVudFRlbXBsYXRlUmVnaW9uJzpcbiAgICAgICAgICB0aGlzLnRhcmdldCQuc21vb3RoU2Nyb2xsKHtcbiAgICAgICAgICAgIHNjcm9sbFRhcmdldDogdGhpcy50YXJnZXQkKGBbZGF0YS1yZWdpb24ta2V5PVwiJHtvYmoubm9kZS5kYXRhLnJlZ2lvbktleX1cIl1gKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUmVnaW9uS2V5ID0gb2JqLm5vZGUuZGF0YS5yZWdpb25LZXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJlZ2lvbktleSA9IG51bGw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIHRoaXMuZWRpdE1vZGVEYXRhID0gdGhpcy50YXJnZXQuTU9OU1RFUl9FRElUX01PREVfREFUQTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9jZXNzTGF5b3V0KCRsYXlvdXRSZWdpb24pIHtcbiAgICBjb25zdCBpdGVtID0gUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmV4dHJhY3RSZWdpb25EYXRhKCRsYXlvdXRSZWdpb24pO1xuICAgIGl0ZW0uc3RhdGUgPSB7XG4gICAgICBvcGVuZWQ6IHRydWUsXG4gICAgfTtcbiAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgaXRlbS5kYXRhLmlkID0gYGxheW91dC50ZW1wbGF0ZVJlZ2lvbi4ke2l0ZW0uZGF0YS5yZWdpb25LZXl9YDtcbiAgICBpdGVtLmlkID0gYHBzal8ke2l0ZW0uZGF0YS5pZH1gLnJlcGxhY2UoL1xcLi9nLCAnXycpO1xuICAgIGl0ZW0uZGF0YS5lbnRpdHlUeXBlID0gJ2xheW91dCc7XG4gICAgY29uc3QgdGVtcGxhdGVSZWdpb25zID0gW107XG5cbiAgICAvLyBmaW5kIG1hdGVyaWFsc1xuICAgIGNvbnN0ICRsYXlvdXRNYXRlcmlhbHMgPSAkbGF5b3V0UmVnaW9uLmZpbmQoJz5bZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICAkbGF5b3V0TWF0ZXJpYWxzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0ICRsYXlvdXRNYXRlcmlhbCA9ICQodGhpcyk7XG4gICAgICBjb25zdCByZXN1bHQgPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQucHJvY2Vzc0xheW91dE1hdGVyaWFsKCRsYXlvdXRNYXRlcmlhbCwgaXRlbS5pZCwgaXRlbS5kYXRhLnJlZ2lvbktleSk7XG4gICAgICBjb25zdCBsYXlvdXRNYXRlcmlhbEl0ZW0gPSByZXN1bHQubGF5b3V0TWF0ZXJpYWw7XG4gICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcbiAgICAgICAgdGVtcGxhdGVSZWdpb25zLnB1c2gocmVnaW9uKTtcbiAgICAgIH0pO1xuICAgICAgaXRlbS5jaGlsZHJlbi5wdXNoKGxheW91dE1hdGVyaWFsSXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbSxcbiAgICAgIHRlbXBsYXRlUmVnaW9ucyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHByb2Nlc3NMYXlvdXRNYXRlcmlhbCgkbGF5b3V0TWF0ZXJpYWwsIHByZWZpeCwgcmVnaW9uS2V5KSB7XG4gICAgY29uc3QgbWF0ZXJpYWxJbmRleCA9ICRsYXlvdXRNYXRlcmlhbC5kYXRhKCdtYXRlcmlhbEluZGV4Jyk7XG4gICAgY29uc3QgbWF0ZXJpYWxQYXRoID0gJGxheW91dE1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsUGF0aCcpO1xuICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICB0ZXh0OiBgJHtcbiAgICAgICAgbWF0ZXJpYWxQYXRoID09PSAnY29yZS5mcm9udGVuZC1tb25zdGVyLWNvcmUuZ2VuZXJhbC5jb250ZW50LXBsYWNlaG9sZGVyJ1xuICAgICAgICAgID8gJ01haW4gRW50aXR5IENvbnRlbnQnXG4gICAgICAgICAgOiBgTWF0ZXJpYWw6ICR7bWF0ZXJpYWxJbmRleH1gfVxuICAgICAgYCxcbiAgICAgIHR5cGU6ICdtYXRlcmlhbCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiBgJHtwcmVmaXh9LiR7bWF0ZXJpYWxJbmRleH1gLFxuICAgICAgICBtYXRlcmlhbEluZGV4LFxuICAgICAgICBtYXRlcmlhbFBhdGgsXG4gICAgICAgIGVkaXRhYmxlS2V5czogJGxheW91dE1hdGVyaWFsLmRhdGEoJ2VkaXRhYmxlS2V5cycpLFxuICAgICAgICBub2RlOiAkbGF5b3V0TWF0ZXJpYWwsXG4gICAgICAgIHJlZ2lvbktleSxcbiAgICAgICAgZW50aXR5VHlwZTogJ2xheW91dCcsXG4gICAgICB9LFxuICAgICAgaWQ6IGBwc2pfJHtwcmVmaXh9XyR7bWF0ZXJpYWxJbmRleH1gLFxuICAgIH07XG4gICAgY29uc3QgdGVtcGxhdGVSZWdpb25zID0gW107XG4gICAgY29uc3QgJHJlZ2lvbnMgPSAkbGF5b3V0TWF0ZXJpYWwuZmluZCgnPiAubS1tb25zdGVyLWNvbnRlbnRfX2NvbnRlbnQnKTtcbiAgICAkcmVnaW9ucy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQucHJvY2Vzc1RlbXBsYXRlUmVnaW9uKCQodGhpcykpO1xuICAgICAgdGVtcGxhdGVSZWdpb25zLnB1c2gocmVzdWx0KTtcbiAgICB9KTtcbiAgICBpZiAodGVtcGxhdGVSZWdpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGl0ZW0uZGF0YS5pc0NvbnRlbnQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbGF5b3V0TWF0ZXJpYWw6IGl0ZW0sXG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnMsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9jZXNzVGVtcGxhdGVSZWdpb24oJHRlbXBsYXRlUmVnaW9uKSB7XG4gICAgY29uc3QgaXRlbSA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5leHRyYWN0UmVnaW9uRGF0YSgkdGVtcGxhdGVSZWdpb24pO1xuICAgIGl0ZW0uc3RhdGUgPSB7XG4gICAgICBvcGVuZWQ6IHRydWUsXG4gICAgfTtcbiAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgaXRlbS5kYXRhLmVudGl0eURlcGVuZGVudCA9ICR0ZW1wbGF0ZVJlZ2lvbi5kYXRhKCdyZWdpb25FbnRpdHlEZXBlbmRlbnQnKSA9PT0gMTtcblxuICAgIGNvbnN0IHByZWZpeCA9IGl0ZW0uZGF0YS5lbnRpdHlEZXBlbmRlbnQgPyAnY29udGVudCcgOiAndGVtcGxhdGUnO1xuICAgIGl0ZW0uZGF0YS5lbnRpdHlUeXBlID0gaXRlbS5kYXRhLmVudGl0eURlcGVuZGVudCA/ICdlbnRpdHknIDogJ3RlbXBsYXRlJztcbiAgICBpdGVtLmRhdGEuaWQgPSBgJHtwcmVmaXh9LnRlbXBsYXRlUmVnaW9uLiR7aXRlbS5kYXRhLnJlZ2lvbktleX1gO1xuICAgIGl0ZW0uaWQgPSBgcHNqXyR7aXRlbS5kYXRhLmlkfWAucmVwbGFjZSgvXFwuL2csICdfJyk7XG5cbiAgICBpZiAoaXRlbS5kYXRhLmVudGl0eURlcGVuZGVudCkge1xuICAgICAgaXRlbS50eXBlID0gJ2NvbnRlbnRUZW1wbGF0ZVJlZ2lvbic7XG4gICAgfVxuICAgIGNvbnN0ICRyZWdpb25NYXRlcmlhbHMgPSAkdGVtcGxhdGVSZWdpb24uZmluZCgnPltkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICRyZWdpb25NYXRlcmlhbHMuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgY29uc3QgbWF0ZXJpYWwgPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQucHJvY2Vzc1RlbXBsYXRlUmVnaW9uTWF0ZXJpYWwoXG4gICAgICAgICQodGhpcyksXG4gICAgICAgIGl0ZW0uZGF0YS5pZCxcbiAgICAgICAgcHJlZml4XG4gICAgICApO1xuICAgICAgbWF0ZXJpYWwuZGF0YS5yZWdpb25LZXkgPSBpdGVtLmRhdGEucmVnaW9uS2V5O1xuICAgICAgbWF0ZXJpYWwuaWQgPSBgcHNqXyR7bWF0ZXJpYWwuZGF0YS5pZH1gLnJlcGxhY2UoL1xcLi9nLCAnXycpO1xuICAgICAgaXRlbS5jaGlsZHJlbi5wdXNoKG1hdGVyaWFsKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9jZXNzVGVtcGxhdGVSZWdpb25NYXRlcmlhbCgkcmVnaW9uTWF0ZXJpYWwsIHByZWZpeCwgZW50aXR5VHlwZSkge1xuICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSAkcmVnaW9uTWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxJbmRleCcpO1xuICAgIGNvbnN0IG1hdGVyaWFsUGF0aCA9ICRyZWdpb25NYXRlcmlhbC5kYXRhKCdtYXRlcmlhbFBhdGgnKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogYE1hdGVyaWFsOiAke21hdGVyaWFsSW5kZXh9YCxcbiAgICAgIHR5cGU6ICdtYXRlcmlhbCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiBgJHtwcmVmaXh9LiR7bWF0ZXJpYWxJbmRleH1gLFxuICAgICAgICBtYXRlcmlhbEluZGV4LFxuICAgICAgICBtYXRlcmlhbFBhdGgsXG4gICAgICAgIGVkaXRhYmxlS2V5czogJHJlZ2lvbk1hdGVyaWFsLmRhdGEoJ2VkaXRhYmxlS2V5cycpLFxuICAgICAgICBub2RlOiAkcmVnaW9uTWF0ZXJpYWwsXG4gICAgICAgIGVudGl0eVR5cGUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZXh0cmFjdFJlZ2lvbkRhdGEoJG5vZGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogJG5vZGUuZGF0YSgnY29udGVudERlc2NyaXB0aW9uJyksXG4gICAgICB0eXBlOiAndGVtcGxhdGVSZWdpb24nLFxuICAgICAgZGF0YToge1xuICAgICAgICByZWdpb25JZDogJG5vZGUuZGF0YSgncmVnaW9uSWQnKSxcbiAgICAgICAgcmVnaW9uS2V5OiAkbm9kZS5kYXRhKCdyZWdpb25LZXknKSxcbiAgICAgICAgdW5pcXVlQ29udGVudElkOiAkbm9kZS5kYXRhKCd1bmlxdWVDb250ZW50SWQnKSxcbiAgICAgICAgbm9kZTogJG5vZGUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzZXJpYWxpemVQYWdlKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMucmVnaW9uc1N0cnVjdHVyZSkuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgY29uc3QgcmVnaW9uID0gdGhpcy5yZWdpb25zU3RydWN0dXJlW3JlZ2lvbktleV07XG4gICAgICByZXN1bHRbcmVnaW9uLmtleV0gPSByZWdpb24uc2VyaWFsaXplKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIG1hdGVyaWFsc0J5UmVnaW9ucygpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMucmVnaW9uc1N0cnVjdHVyZVtyZWdpb25LZXldO1xuICAgICAgcmVzdWx0W3JlZ2lvbi5rZXldID0gcmVnaW9uLm1hdGVyaWFsc0RlY2woKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1NpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdW5pcWlkIChwcmVmaXgsIG1vcmVFbnRyb3B5KSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvdW5pcWlkL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gIHJldmlzZWQgYnk6IEthbmtyZWx1bmUgKGh0dHA6Ly93d3cud2ViZmFrdG9yeS5pbmZvLylcbiAgLy8gICAgICBub3RlIDE6IFVzZXMgYW4gaW50ZXJuYWwgY291bnRlciAoaW4gbG9jdXR1cyBnbG9iYWwpIHRvIGF2b2lkIGNvbGxpc2lvblxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRpZCA9IHVuaXFpZCgpXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJHJlc3VsdCA9ICRpZC5sZW5ndGggPT09IDEzXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiB2YXIgJGlkID0gdW5pcWlkKCdmb28nKVxuICAvLyAgIGV4YW1wbGUgMjogdmFyICRyZXN1bHQgPSAkaWQubGVuZ3RoID09PSAoMTMgKyAnZm9vJy5sZW5ndGgpXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgJGlkID0gdW5pcWlkKCdiYXInLCB0cnVlKVxuICAvLyAgIGV4YW1wbGUgMzogdmFyICRyZXN1bHQgPSAkaWQubGVuZ3RoID09PSAoMjMgKyAnYmFyJy5sZW5ndGgpXG4gIC8vICAgcmV0dXJucyAzOiB0cnVlXG5cbiAgaWYgKHR5cGVvZiBwcmVmaXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcHJlZml4ID0gJydcbiAgfVxuXG4gIHZhciByZXRJZFxuICB2YXIgX2Zvcm1hdFNlZWQgPSBmdW5jdGlvbiAoc2VlZCwgcmVxV2lkdGgpIHtcbiAgICBzZWVkID0gcGFyc2VJbnQoc2VlZCwgMTApLnRvU3RyaW5nKDE2KSAvLyB0byBoZXggc3RyXG4gICAgaWYgKHJlcVdpZHRoIDwgc2VlZC5sZW5ndGgpIHtcbiAgICAgIC8vIHNvIGxvbmcgd2Ugc3BsaXRcbiAgICAgIHJldHVybiBzZWVkLnNsaWNlKHNlZWQubGVuZ3RoIC0gcmVxV2lkdGgpXG4gICAgfVxuICAgIGlmIChyZXFXaWR0aCA+IHNlZWQubGVuZ3RoKSB7XG4gICAgICAvLyBzbyBzaG9ydCB3ZSBwYWRcbiAgICAgIHJldHVybiBBcnJheSgxICsgKHJlcVdpZHRoIC0gc2VlZC5sZW5ndGgpKS5qb2luKCcwJykgKyBzZWVkXG4gICAgfVxuICAgIHJldHVybiBzZWVkXG4gIH1cblxuICB2YXIgJGdsb2JhbCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IEdMT0JBTClcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge31cbiAgdmFyICRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1c1xuICAkbG9jdXR1cy5waHAgPSAkbG9jdXR1cy5waHAgfHwge31cblxuICBpZiAoISRsb2N1dHVzLnBocC51bmlxaWRTZWVkKSB7XG4gICAgLy8gaW5pdCBzZWVkIHdpdGggYmlnIHJhbmRvbSBpbnRcbiAgICAkbG9jdXR1cy5waHAudW5pcWlkU2VlZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDB4NzViY2QxNSlcbiAgfVxuICAkbG9jdXR1cy5waHAudW5pcWlkU2VlZCsrXG5cbiAgLy8gc3RhcnQgd2l0aCBwcmVmaXgsIGFkZCBjdXJyZW50IG1pbGxpc2Vjb25kcyBoZXggc3RyaW5nXG4gIHJldElkID0gcHJlZml4XG4gIHJldElkICs9IF9mb3JtYXRTZWVkKHBhcnNlSW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCwgMTApLCA4KVxuICAvLyBhZGQgc2VlZCBoZXggc3RyaW5nXG4gIHJldElkICs9IF9mb3JtYXRTZWVkKCRsb2N1dHVzLnBocC51bmlxaWRTZWVkLCA1KVxuICBpZiAobW9yZUVudHJvcHkpIHtcbiAgICAvLyBmb3IgbW9yZSBlbnRyb3B5IHdlIGFkZCBhIGZsb2F0IGxvd2VyIHRvIDEwXG4gICAgcmV0SWQgKz0gKE1hdGgucmFuZG9tKCkgKiAxMCkudG9GaXhlZCg4KS50b1N0cmluZygpXG4gIH1cblxuICByZXR1cm4gcmV0SWRcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3VuaXFpZC5qc1xuICoqLyIsImNsYXNzIERhdGFQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSwgcHJvdmlkZWRLZXlzKSB7XG4gICAgdGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgdGhpcy5wcm92aWRlZEtleXMgPSBwcm92aWRlZEtleXM7XG4gICAgdGhpcy5hc3NvY2lhdGlvbnMgPSB7fTtcbiAgICB0aGlzLmFzc29jaWF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHtFZGl0YWJsZX1cbiAgICovXG4gIHN0YXRpYyBnZXQgZWRpdGFibGUoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5Gcm9udGVuZE1vbnN0ZXIuVmlzdWFsRnJhbWUuZWRpdGFibGU7XG4gIH1cblxuICBhc3NvY2lhdGUoKSB7XG4gICAgdGhpcy5hc3NvY2lhdGlvbnMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnByb3ZpZGVkS2V5cykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgY29uc3QgcmVnaW9uID0gdGhpcy5wcm92aWRlZEtleXNbcmVnaW9uS2V5XTtcbiAgICAgIGNvbnN0ICRyZWdpb24gPSAkKGBbZGF0YS1yZWdpb24ta2V5PVwiJHtyZWdpb25LZXl9XCJdYCkuZmlyc3QoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGAlY1JlZ2lvbjogJHtyZWdpb25LZXl9YCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkOyBiYWNrZ3JvdW5kOiAjMzMzJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZWdpb24pO1xuICAgICAgY29uc3QgbWF0ZXJpYWxzID0ge307XG4gICAgICBPYmplY3Qua2V5cyhyZWdpb24pLmZvckVhY2gobWF0ZXJpYWxLZXkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhS2V5cyA9IHJlZ2lvblttYXRlcmlhbEtleV07XG4gICAgICAgIGNvbnN0ICRtYXRlcmlhbCA9ICRyZWdpb24uZmluZChgW2RhdGEtbWF0ZXJpYWwtaW5kZXg9XCIke21hdGVyaWFsS2V5fVwiXWApLmZpcnN0KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAlY01hdGVyaWFsOiAke21hdGVyaWFsS2V5fWAsICdjb2xvcjogI2ZmZjsgZm9udC13ZWlnaHQ6IGJvbGQ7IGJhY2tncm91bmQ6ICM2OWYnKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJG1hdGVyaWFsKTtcbiAgICAgICAgaWYgKCRtYXRlcmlhbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbWF0ZXJpYWxzW21hdGVyaWFsS2V5XSA9IHtcbiAgICAgICAgICBkYXRhS2V5cyxcbiAgICAgICAgICAkbWF0ZXJpYWwsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsRWRpdGFibGVLZXlzID0gJG1hdGVyaWFsLmRhdGEoJ2VkaXRhYmxlS2V5cycpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVNYXRlcmlhbEVkaXQobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRtYXRlcmlhbCwgZGF0YUtleXMpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFzc29jaWF0aW9uc1tyZWdpb25LZXldID0ge1xuICAgICAgICAkcmVnaW9uLFxuICAgICAgICBtYXRlcmlhbHMsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGl6ZU1hdGVyaWFsRWRpdChtYXRlcmlhbEVkaXRhYmxlS2V5cywgJHJvb3QsIGRhdGFLZXlzLCBwcmVmaXggPSAnJykge1xuICAgIGRhdGFLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IG9iaiA9IG1hdGVyaWFsRWRpdGFibGVLZXlzW2tleV0gfHwgJ05PX1NVQ0hfS0VZJztcbiAgICAgIGlmIChvYmogPT09ICdOT19TVUNIX0tFWScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9iaiA9PT0gT2JqZWN0KG9iaikpIHtcbiAgICAgICAgLy8gaXQncyByZWN1cnNpdmVcbiAgICAgICAgLy8gZmlyc3QgLSBmaW5kIGFsbCBibG9ja3NcbiAgICAgICAgY29uc3QgJGJsb2NrcyA9ICRyb290LmZpbmQoYFtkYXRhLXJlY3Vyc2l2ZS1pdGVtPVwiJHtrZXl9XCJdYCk7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgICRibG9ja3MuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJWMgUmVjdXJzaXZlIGl0ZW0gJHtrZXl9ICMke2NvdW50ZXJ9YCwgJ2JhY2tncm91bmQ6ICMyMjI7IGNvbG9yOiAjYmFkYTU1Jyk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgICAgdGhhdC5pbml0aWFsaXplTWF0ZXJpYWxFZGl0KG9iaiwgJHRoaXMsIE9iamVjdC5rZXlzKG9iaiksICdpdGVtLicpO1xuICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpdCdzIHBsYWluIGZpZWxkXG4gICAgICAgIGNvbnN0ICRub2RlID0gJHJvb3QuZmluZChgW2RhdGEtZWRpdGFibGUta2V5PVwiJHtwcmVmaXh9JHtrZXl9XCJdYCkuZmlyc3QoKTtcbiAgICAgICAgaWYgKCRub2RlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBEYXRhUHJvdmlkZXIuZWRpdGFibGUuaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCVjIFBsYWluIGZpZWxkIGVkaXRhYmxlICR7cHJlZml4fSR7a2V5fWAsICdiYWNrZ3JvdW5kOiAjMjIyOyBjb2xvcjogI2JhZGE1NScpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygkbm9kZVswXS5vdXRlckhUTUwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICBzZXJpYWxpemVLZXlzKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMuYXNzb2NpYXRpb25zKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICBjb25zdCByZWdpb24gPSB0aGlzLmFzc29jaWF0aW9uc1tyZWdpb25LZXldO1xuICAgICAgY29uc3QgJHJlZ2lvbiA9IHJlZ2lvbi4kcmVnaW9uO1xuICAgICAgcmVzdWx0W3JlZ2lvbktleV0gPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKHJlZ2lvbi5tYXRlcmlhbHMpLmZvckVhY2gobWF0ZXJpYWxLZXkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhS2V5cyA9IHJlZ2lvbi5tYXRlcmlhbHNbbWF0ZXJpYWxLZXldLmRhdGFLZXlzO1xuICAgICAgICBjb25zdCAkbWF0ZXJpYWwgPSByZWdpb24ubWF0ZXJpYWxzW21hdGVyaWFsS2V5XS4kbWF0ZXJpYWw7XG4gICAgICAgIHJlc3VsdFtyZWdpb25LZXldW21hdGVyaWFsS2V5XSA9IHRoaXMuc2VyaWFsaXplTWF0ZXJpYWwoXG4gICAgICAgICAgcmVnaW9uS2V5LFxuICAgICAgICAgIG1hdGVyaWFsS2V5LFxuICAgICAgICAgIGRhdGFLZXlzLFxuICAgICAgICAgICRyZWdpb24sXG4gICAgICAgICAgJG1hdGVyaWFsXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBjbGFzczogdGhpcy5jbGFzc05hbWUsXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5maWxsQ29uZmlnKGRhdGEpO1xuICB9XG5cbiAgZmlsbENvbmZpZyhkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBzZXJpYWxpemVNYXRlcmlhbChyZWdpb25LZXksIG1hdGVyaWFsS2V5LCBkYXRhS2V5cywgJHJlZ2lvbiwgJG1hdGVyaWFsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YVByb3ZpZGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRGF0YVByb3ZpZGVyLmpzXG4gKiovIiwiaW1wb3J0IFN0YXRpY0NvbnRlbnQgZnJvbSAnLi9wcm92aWRlcnMvU3RhdGljQ29udGVudCc7XG5cbmNsYXNzIERhdGFQcm92aWRlckZhY3Rvcnkge1xuICBzdGF0aWMgZmFjdG9yeShwcm92aWRlckRlY2wsIHByb3ZpZGVkS2V5cykge1xuICAgIGxldCBwcm92aWRlciA9IG51bGw7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gcHJvdmlkZXJEZWNsLmNsYXNzTmFtZVxuICAgICAgfHwgJ0RvdFBsYW50XFxcXE1vbnN0ZXJcXFxcRGF0YUVudGl0eVxcXFxTdGF0aWNDb250ZW50UHJvdmlkZXInO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICBjYXNlICdEb3RQbGFudFxcXFxNb25zdGVyXFxcXERhdGFFbnRpdHlcXFxcU3RhdGljQ29udGVudFByb3ZpZGVyJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHByb3ZpZGVyID0gbmV3IFN0YXRpY0NvbnRlbnQocHJvdmlkZWRLZXlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3ZpZGVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFQcm92aWRlckZhY3Rvcnk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXJGYWN0b3J5LmpzXG4gKiovIiwiaW1wb3J0IGFsbEVkaXRhYmxlcyBmcm9tICcuL2VkaXRhYmxlcy9hbGwnO1xuXG5jbGFzcyBFZGl0YWJsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZWRpdGFibGVzQnlUeXBlID0ge307XG4gICAgLy8gaW5pdGlhbGl6ZSBiYXNlIGJ1aWxkLWluIGVkaXRhYmxlc1xuICAgIGFsbEVkaXRhYmxlcygpO1xuICAgIHRoaXMuZWRpdGFibGVzQnlUeXBlID0gd2luZG93Lk1PTlNURVJfRURJVEFCTEVTO1xuICB9XG5cbiAgc2VyaWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBjb25zdCBlZGl0YWJsZSA9ICRub2RlLmRhdGEoJ2VkaXRhYmxlUGFyYW1zJyk7XG4gICAgaWYgKHR5cGVvZihlZGl0YWJsZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCB0eXBlID0gZWRpdGFibGUuaGFzT3duUHJvcGVydHkoJ3R5cGUnKSA/IGVkaXRhYmxlLnR5cGUgOiAnc3RyaW5nJztcbiAgICBpZiAodGhpcy5lZGl0YWJsZXNCeVR5cGUuaGFzT3duUHJvcGVydHkodHlwZSkgPT09IGZhbHNlKSB7XG4gICAgICB0eXBlID0gJ3N0cmluZyc7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwb3J0VmFyaWFibGUgPSBlZGl0YWJsZS5oYXNPd25Qcm9wZXJ0eSgndGFyZ2V0JykgPyBlZGl0YWJsZS50YXJnZXQgOiAnZGF0YSc7XG5cbiAgICByZXR1cm4gdGhpcy5lZGl0YWJsZXNCeVR5cGVbdHlwZV0uc2VyaWFsaXplTm9kZSgkbm9kZSwgZXhwb3J0VmFyaWFibGUpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3QgdHlwZSA9ICRub2RlLmRhdGEoJ2VkaXRhYmxlLXR5cGUnKSB8fCAndW5lZGl0YWJsZSc7XG4gICAgaWYgKHR5cGUgPT09ICd1bmVkaXRhYmxlJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdGFibGUgPSB0aGlzLmVkaXRhYmxlc0J5VHlwZVt0eXBlXSB8fCB0aGlzLmVkaXRhYmxlc0J5VHlwZS5zdHJpbmc7XG4gICAgcmV0dXJuIGVkaXRhYmxlLmluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdGFibGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9FZGl0YWJsZS5qc1xuICoqLyIsImNsYXNzIEhhc2hBcGkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZ1bmN0aW9uQ2FsbHMgPSB7fTtcblxuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaC5tYXRjaCgvI2hhc2hBcGk6KC4qPyk6XFwvaGFzaEFwaS8pO1xuICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgY29uc3QgZnVuY3Rpb25DYWxscyA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoZXNbMV0pKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZnVuY3Rpb25DYWxscykge1xuICAgICAgICAgIGlmIChpdGVtLmZ1bmMpIHtcbiAgICAgICAgICAgIHRoaXMuZnVuY3Rpb25DYWxsc1tpdGVtLmZ1bmNdID0gaXRlbS5hcmdzIHx8IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNob3VsZENhbGwoZnVuYykge1xuICAgIHJldHVybiB0aGlzLmZ1bmN0aW9uQ2FsbHNbZnVuY10gfHwgZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGFzaEFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanNcbiAqKi8iLCJpbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi9GcmFtZUFwaSc7XG5pbXBvcnQgdW5pcXVlSWQgZnJvbSAnLi8uLi91bmlxaWQnO1xuaW1wb3J0IERhdGFQcm92aWRlckZhY3RvcnkgZnJvbSAnLi9EYXRhUHJvdmlkZXJGYWN0b3J5JztcbmltcG9ydCBFZGl0YWJsZSBmcm9tICcuL0VkaXRhYmxlJztcblxuY2xhc3MgVmlzdWFsRnJhbWVcbntcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgRnJhbWVBcGkuYmluZE1lc3NhZ2VMaXN0ZW5lcih0aGlzKTtcbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YSA9IG51bGw7XG4gICAgLyogZ2xvYmFsIHdpbmRvdzpmYWxzZSAqL1xuICAgIHRoaXMucGFyZW50V2luZG93ID0gd2luZG93LnBhcmVudDtcbiAgICAvKiogQHZhciBGcm9udGVuZE1vbnN0ZXIgKi9cbiAgICB0aGlzLnBhcmVudE1vbnN0ZXIgPSB0aGlzLnBhcmVudFdpbmRvdy5Gcm9udGVuZE1vbnN0ZXI7XG4gICAgdGhpcy5wYXJlbnRCdWlsZGVyID0gdGhpcy5wYXJlbnRNb25zdGVyLmJ1aWxkZXI7XG4gICAgdGhpcy5jdXJyZW50TW9uc3RlckNvbnRlbnQgPSBmYWxzZTtcbiAgICB0aGlzLmVkaXRhYmxlID0gbmV3IEVkaXRhYmxlKCk7XG4gICAgLy8gdGhpcy5tYWtlSXRNb3ZlKCk7XG4gICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICAkKCgpID0+IHtcbiAgICAgIHRoaXMucGFyZW50QnVpbGRlci5wYWdlQ2hhbmdlZCgpO1xuICAgICAgdGhpcy5pbml0UHJvdmlkZXJzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5Nb25zdGVyRWRpdERhdGEgPSB3aW5kb3cuTU9OU1RFUl9FRElUX01PREVfREFUQTtcbiAgfVxuXG4gIGluaXRQcm92aWRlcnMoKSB7XG4gICAgdGhpcy5wcm92aWRlcnMgPSB7XG4gICAgICBsYXlvdXQ6IHRoaXMuZ2V0UHJvdmlkZXJzKHRoaXMuTW9uc3RlckVkaXREYXRhLmxheW91dCksXG4gICAgICB0ZW1wbGF0ZTogdGhpcy5nZXRQcm92aWRlcnModGhpcy5Nb25zdGVyRWRpdERhdGEudGVtcGxhdGUpLFxuICAgICAgZW50aXR5OiB0aGlzLmdldFByb3ZpZGVycyh0aGlzLk1vbnN0ZXJFZGl0RGF0YS5lbnRpdHkpLFxuICAgIH07XG4gIH1cblxuICBzZXQgcGFnZVN0cnVjdHVyZUpzb24odmFsdWUpIHtcbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHBhZ2VTdHJ1Y3R1cmVKc29uKCkge1xuICAgIHJldHVybiB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YTtcbiAgfVxuXG4gIGdldFByb3ZpZGVycyhhcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhhcnIucHJvdmlkZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBwcm92aWRlckRlY2wgPSBhcnIucHJvdmlkZXJzW2tleV07XG4gICAgICByZXN1bHRba2V5XSA9IERhdGFQcm92aWRlckZhY3RvcnkuZmFjdG9yeShcbiAgICAgICAgcHJvdmlkZXJEZWNsLFxuICAgICAgICBhcnIucHJvdmlkZWRLZXlzW2tleV0gfHwge31cbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldCAkbW9uc3RlckNvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGUpIHtcbiAgICAgIHJldHVybiB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hNb25zdGVyQ29udGVudENhY2hlKCk7XG4gICAgcmV0dXJuIHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGU7XG4gIH1cblxuICByZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpIHtcbiAgICB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlID0ge307XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgJCh0aGlzLnNldHRpbmdzWydtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InXSkuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgaWYgKCF0aGF0LmN1cnJlbnRNb25zdGVyQ29udGVudCkge1xuICAgICAgICB0aGF0LmN1cnJlbnRNb25zdGVyQ29udGVudCA9ICQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyk7XG4gICAgICB9XG4gICAgICB0aGF0LiRtb25zdGVyQ29udGVudENhY2hlWyQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyldID0gJCh0aGlzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUhhbmRsZXJzKCkge1xuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsICYmIHRoaXMuJGhhbmRsZXJzKSB7XG4gICAgICB0aGlzLiRoYW5kbGVycy5jc3MoXG4gICAgICAgICd0b3AnLFxuICAgICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLnBvc2l0aW9uKCkudG9wXG4gICAgICAgICAgKyB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLmhlaWdodCgpXG4gICAgICAgICAgLSB0aGlzLiRoYW5kbGVycy5oZWlnaHQoKVxuICAgICAgKTtcbiAgICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RNYXRlcmlhbCgkbWF0ZXJpYWwpIHtcbiAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCA9PT0gJG1hdGVyaWFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgIH1cbiAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsID0gJG1hdGVyaWFsO1xuICAgIHRoaXMudXBkYXRlSGFuZGxlcnMoKTtcbiAgICB0aGlzLiRoYW5kbGVycy5zaG93KCk7XG4gIH1cblxuICBzZXJpYWxpemVDb250ZW50KGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgT2JqZWN0LmtleXModGhpcy4kbW9uc3RlckNvbnRlbnQpLmZvckVhY2godW5pcXVlQ29udGVudElkID0+IHtcbiAgICAgIGNvbnN0ICRtb25zdGVyID0gdGhpcy4kbW9uc3RlckNvbnRlbnRbdW5pcXVlQ29udGVudElkXTtcbiAgICAgIHJlc3VsdFskbW9uc3Rlci5kYXRhKCd1bmlxdWVDb250ZW50SWQnKV0gPSB0aGF0LnNlcmlhbGl6ZVVuaXF1ZUNvbnRlbnQoJG1vbnN0ZXIpO1xuICAgIH0pO1xuICAgIHRoaXMuc2VuZFRvQnVpbGRlcihjYWxsYmFjaywgW3Jlc3VsdF0pO1xuICB9XG5cbiAgc2VyaWFsaXplVW5pcXVlQ29udGVudCgkbW9uc3RlckNvbnRlbnQpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICByZXN1bHQudW5pcXVlQ29udGVudElkID0gJG1vbnN0ZXJDb250ZW50LmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpO1xuICAgIHJlc3VsdC5tYXRlcmlhbHMgPSB7fTtcbiAgICAkbW9uc3RlckNvbnRlbnQuZmluZCgnW2RhdGEtaXMtbWF0ZXJpYWw9XFwnMVxcJ10nKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCBtYXRlcmlhbCA9IHt9O1xuICAgICAgbWF0ZXJpYWwuYmxvY2sgPSAkKHRoaXMpLmRhdGEoJ21hdGVyaWFsQmxvY2snKTtcbiAgICAgIHJlc3VsdC5tYXRlcmlhbHNbJCh0aGlzKS5kYXRhKCdtYXRlcmlhbEluZGV4JyldID0gbWF0ZXJpYWw7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIFZpc3VhbEZyYW1lIHNldHRpbmdzLlxuICAgKiBVc2VzIFZpc3VhbEZyYW1lU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuVmlzdWFsRnJhbWVTZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICdtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InOiAnLm0tbW9uc3Rlci1jb250ZW50X19jb250ZW50JyxcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHVzZXJTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgfVxuXG4gIHNlbmRUb0J1aWxkZXIoZnVuYywgYXJncykge1xuICAgIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMucGFyZW50V2luZG93LCBmdW5jLCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JtU3VibWl0KGRhdGEpIHtcbiAgICBjb25zdCAkZm9ybSA9ICQoJzxmb3JtIG1ldGhvZD1cIlBPU1RcIj48L2Zvcm0+Jyk7XG4gICAgY29uc3QgJGlucHV0ID0gJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX19qc29uXCI+Jyk7XG4gICAgY29uc3QgJGNzcmYgPSAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiPicpO1xuXG4gICAgJGNzcmZcbiAgICAgIC5hdHRyKCduYW1lJywgJCgnbWV0YVtuYW1lPWNzcmYtcGFyYW1dJykuYXR0cignY29udGVudCcpKVxuICAgICAgLnZhbCgkKCdtZXRhW25hbWU9Y3NyZi10b2tlbl0nKS5hdHRyKCdjb250ZW50JykpXG4gICAgICAuYXBwZW5kVG8oJGZvcm0pO1xuXG4gICAgJGlucHV0XG4gICAgICAudmFsKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgLmFwcGVuZFRvKCRmb3JtKTtcblxuICAgICRmb3JtWzBdLnN1Ym1pdCgpO1xuICB9XG5cbiAgY29uc3RydWN0VGVtcGxhdGVEYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm92aWRlcnNFbnRpdGllczogdGhpcy5wYXJlbnRCdWlsZGVyLnNlcmlhbGl6ZSgpLFxuICAgICAgcmVnaW9uc01hdGVyaWFsczogdGhpcy5wYXJlbnRCdWlsZGVyXG4gICAgICAgIC5lbnZpcm9ubWVudHMuZ2V0KCdwYWdlLXN0cnVjdHVyZScpLm1hdGVyaWFsc0J5UmVnaW9ucygpLFxuICAgIH07XG4gIH1cblxuICBuZXdCbG9jayhtYXRlcmlhbE5hbWUsIHNlbGVjdGVkRW50aXR5LCByZWdpb25OYW1lKSB7XG4gICAgLy8gQHRvZG8gQWRkIGxvYWRlciBoZXJlIGFzIHdlIGFyZSB1c2luZyBmb3JtIHBvc3QgIVxuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gdW5pcXVlSWQoJ21hdCcpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLml0ZXJhdGVUZW1wbGF0ZVR5cGUodGhpcy5wYWdlU3RydWN0dXJlSnNvbik7XG4gICAgaWYgKHNlbGVjdGVkRW50aXR5ID09PSAnZW50aXR5Jykge1xuICAgICAgZGF0YS5lbnRpdHkubWF0ZXJpYWxzQnlSZWdpb25EZWNsW3JlZ2lvbk5hbWVdLmRlY2xbcmFuZG9tSW5kZXhdID0ge1xuICAgICAgICBtYXRlcmlhbDogbWF0ZXJpYWxOYW1lLFxuICAgICAgfTtcbiAgICAgIGRhdGEuZW50aXR5Lm1hdGVyaWFsc0J5UmVnaW9uRGVjbFtyZWdpb25OYW1lXS5tYXRlcmlhbHNPcmRlci5wdXNoKHJhbmRvbUluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YVtzZWxlY3RlZEVudGl0eV0udGVtcGxhdGVSZWdpb25zW3JlZ2lvbk5hbWVdLm1hdGVyaWFsc0RlY2xzLmRlY2xbcmFuZG9tSW5kZXhdID0ge1xuICAgICAgICBtYXRlcmlhbDogbWF0ZXJpYWxOYW1lLFxuICAgICAgfTtcbiAgICAgIGRhdGFbc2VsZWN0ZWRFbnRpdHldLnRlbXBsYXRlUmVnaW9uc1tyZWdpb25OYW1lXS5tYXRlcmlhbHNEZWNscy5tYXRlcmlhbHNPcmRlci5wdXNoKHJhbmRvbUluZGV4KTtcbiAgICB9XG4gICAgZGF0YS5hY3Rpb24gPSAncHJldmlldyc7XG4gICAgVmlzdWFsRnJhbWUuZm9ybVN1Ym1pdChkYXRhKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuaXRlcmF0ZVRlbXBsYXRlVHlwZSh0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uKTtcbiAgICBkYXRhLmFjdGlvbiA9ICdzYXZlJztcbiAgICBWaXN1YWxGcmFtZS5mb3JtU3VibWl0KGRhdGEpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGl0ZXJhdGVUZW1wbGF0ZVR5cGUoYXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgZW50aXR5OiB7XG4gICAgICAgIG1hdGVyaWFsc0J5UmVnaW9uRGVjbDoge30sXG4gICAgICAgIHByb3ZpZGVyczoge30sXG4gICAgICB9LFxuICAgIH07XG4gICAgYXJyLmZvckVhY2gob2JqID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IG9iai5kYXRhLmlkO1xuICAgICAgY29uc3QgcmVnaW9uc1Jlc3VsdCA9IFZpc3VhbEZyYW1lLml0ZXJhdGVUZW1wbGF0ZVJlZ2lvbnMob2JqLmNoaWxkcmVuKTtcbiAgICAgIC8vIGxheW91dCBvciB0ZW1wbGF0ZVxuICAgICAgcmVzdWx0W2tleV0gPSB7XG4gICAgICAgIHRlbXBsYXRlUmVnaW9uczogcmVnaW9uc1Jlc3VsdC50ZW1wbGF0ZVJlZ2lvbnMsXG4gICAgICAgIHRlbXBsYXRlUmVnaW9uc09yZGVyOiByZWdpb25zUmVzdWx0LnRlbXBsYXRlUmVnaW9uc09yZGVyLFxuICAgICAgICB0ZW1wbGF0ZUlkOiBvYmouZGF0YS50ZW1wbGF0ZUlkLFxuICAgICAgICBwcm92aWRlcnM6IHt9LFxuICAgICAgfTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhyZWdpb25zUmVzdWx0LmVudGl0eU1hdGVyaWFscykubGVuZ3RoID4gMCkge1xuICAgICAgICBPYmplY3Qua2V5cyhyZWdpb25zUmVzdWx0LmVudGl0eU1hdGVyaWFscykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgICAgIHJlc3VsdC5lbnRpdHkubWF0ZXJpYWxzQnlSZWdpb25EZWNsW3JlZ2lvbktleV0gPSByZWdpb25zUmVzdWx0LmVudGl0eU1hdGVyaWFsc1tyZWdpb25LZXldO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdFtrZXldLnByb3ZpZGVycyA9IHRoaXMuc2VyaWFsaXplUHJvdmlkZXJzKGtleSk7XG4gICAgfSk7XG4gICAgcmVzdWx0LmVudGl0eS5wcm92aWRlcnMgPSB0aGlzLnNlcmlhbGl6ZVByb3ZpZGVycygnZW50aXR5Jyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNlcmlhbGl6ZVByb3ZpZGVycyh0eXBlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5wcm92aWRlcnNbdHlwZV0pLmZvckVhY2gocHJvdmlkZXJLZXkgPT4ge1xuICAgICAgcmVzdWx0W3Byb3ZpZGVyS2V5XSA9IHRoaXMucHJvdmlkZXJzW3R5cGVdW3Byb3ZpZGVyS2V5XS5zZXJpYWxpemUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGl0ZXJhdGVUZW1wbGF0ZVJlZ2lvbnMoYXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgdGVtcGxhdGVSZWdpb25zOiB7fSxcbiAgICAgIHRlbXBsYXRlUmVnaW9uc09yZGVyOiBbXSxcbiAgICAgIGVudGl0eU1hdGVyaWFsczoge30sXG4gICAgfTtcbiAgICBhcnIuZm9yRWFjaChvYmogPT4ge1xuICAgICAgLy8gY29uc3Qga2V5ID0gb2JqLmRhdGEuaWQucmVwbGFjZSgvXi4qXFwuLywgJycpO1xuICAgICAgY29uc3QgcmVnaW9uS2V5ID0gb2JqLmRhdGEucmVnaW9uS2V5O1xuICAgICAgcmVzdWx0LnRlbXBsYXRlUmVnaW9uc09yZGVyLnB1c2gocmVnaW9uS2V5KTtcbiAgICAgIGNvbnN0IGVudGl0eURlcGVuZGVudCA9IG9iai5kYXRhLmVudGl0eURlcGVuZGVudCB8fCBmYWxzZTtcblxuICAgICAgY29uc3QgcmVnaW9uTWF0ZXJpYWxzID0gVmlzdWFsRnJhbWUuaXRlcmF0ZU1hdGVyaWFscyhvYmouY2hpbGRyZW4sIHJlZ2lvbktleSk7XG5cbiAgICAgIGlmIChlbnRpdHlEZXBlbmRlbnQgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgYW4gZXhhY3QgdGVtcGxhdGUgcmVnaW9uXG4gICAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnNbcmVnaW9uS2V5XSA9IHtcbiAgICAgICAgICByZWdpb25JZDogb2JqLmRhdGEucmVnaW9uSWQsXG4gICAgICAgICAgcmVnaW9uS2V5LFxuICAgICAgICAgIHVuaXF1ZUNvbnRlbnRJZDogb2JqLmRhdGEudW5pcXVlQ29udGVudElkLFxuICAgICAgICAgIG1hdGVyaWFsc0RlY2xzOiByZWdpb25NYXRlcmlhbHMsXG4gICAgICAgICAgZW50aXR5RGVwZW5kZW50LFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnRlbXBsYXRlUmVnaW9uc1tyZWdpb25LZXldID0ge1xuICAgICAgICAgIHJlZ2lvbklkOiBvYmouZGF0YS5yZWdpb25JZCxcbiAgICAgICAgICByZWdpb25LZXksXG4gICAgICAgICAgdW5pcXVlQ29udGVudElkOiBvYmouZGF0YS51bmlxdWVDb250ZW50SWQsXG4gICAgICAgICAgZW50aXR5RGVwZW5kZW50LFxuICAgICAgICB9O1xuICAgICAgICAvLyB0aGlzIGlzIGVudGl0eS1kZXBlbmRlbnQgcmVnaW9uXG4gICAgICAgIHJlc3VsdC5lbnRpdHlNYXRlcmlhbHNbcmVnaW9uS2V5XSA9IHJlZ2lvbk1hdGVyaWFscztcbiAgICAgIH1cblxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgaXRlcmF0ZU1hdGVyaWFscyhhcnIsIHJlZ2lvbktleSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGRlY2w6IHt9LFxuICAgICAgbWF0ZXJpYWxzT3JkZXI6IFtdLFxuICAgIH07XG4gICAgYXJyLmZvckVhY2gob2JqID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IG9iai5kYXRhLm1hdGVyaWFsSW5kZXg7XG4gICAgICByZXN1bHQuZGVjbFtrZXldID0ge1xuICAgICAgICAvLyBlZGl0YWJsZXNLZXlzOiBvYmouZGF0YS5lZGl0YWJsZUtleXMsXG4gICAgICAgIG1hdGVyaWFsOiBvYmouZGF0YS5tYXRlcmlhbFBhdGgsXG4gICAgICB9O1xuICAgICAgcmVzdWx0Lm1hdGVyaWFsc09yZGVyLnB1c2goa2V5KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbEZyYW1lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgV1lTSVdZRyBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gQmFzZUVkaXRhYmxlLmZyYW1lJCgkbm9kZSk7XG4gICAgY29uc3QgZWRpdG9yID0gbm9kZS5kYXRhKCdlZGl0b3InKTtcbiAgICBpZiAoZWRpdG9yKSB7XG4gICAgICByZXR1cm4gZWRpdG9yLmdldERhdGEoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUuaHRtbCgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9ICRub2RlWzBdO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGF1dG9QYXJhZ3JhcGg6IGZhbHNlLFxuICAgICAgZW5hYmxlQ29udGVudEVkaXRhYmxlOiB0cnVlLFxuICAgICAgaWdub3JlRW1wdHlQYXJhZ3JhcGg6IHRydWUsXG4gICAgICBlbnRlck1vZGU6IHdpbmRvdy5DS0VESVRPUi5FTlRFUl9CUixcbiAgICB9O1xuICAgIC8vICQoKCkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gd2luZG93LkFsbG95RWRpdG9yLmVkaXRhYmxlKG5vZGUsIGNvbmZpZykuZ2V0KCduYXRpdmVFZGl0b3InKTtcbiAgICAgICRub2RlLmRhdGEoJ2VkaXRvcicsIGVkaXRvcik7XG4gICAgLy8gfSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBXWVNJV1lHO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL1dZU0lXWUcuanNcbiAqKi8iLCJpbXBvcnQgV1lTSVdZRyBmcm9tICcuL1dZU0lXWUcnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9saW5rJztcbmltcG9ydCBUZXh0U3RyaW5nIGZyb20gJy4vc3RyaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWxsKCkge1xuICBpZiAodHlwZW9mKHdpbmRvdy5NT05TVEVSX0VESVRBQkxFUykgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTID0ge307XG4gIH1cbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWyd3eXNpd3lnJ10gPSBuZXcgV1lTSVdZRygpO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ2xpbmsnXSA9IG5ldyBMaW5rKCk7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snaW1hZ2UnXSA9IG5ldyBJbWFnZSgpO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ3N0cmluZyddID0gbmV3IFRleHRTdHJpbmcoKTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvYWxsLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFZGl0YWJsZSBmcm9tICcuL0Jhc2VFZGl0YWJsZSc7XG5cbmNsYXNzIEltYWdlIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIGNvbnN0ICRpbWcgPSAkbm9kZS5maW5kKCdpbWcnKS5maXJzdCgpO1xuICAgIHJldHVybiB7XG4gICAgICBzcmM6ICRpbWcuYXR0cignc3JjJyksXG4gICAgICBhbHQ6ICRpbWcuYXR0cignYWx0JyksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9pbWFnZS5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiAkbm9kZS5kYXRhKCdvcmlnaW5hbEhyZWYnKSA/ICRub2RlLmRhdGEoJ29yaWdpbmFsSHJlZicpIDogJG5vZGUuYXR0cignaHJlZicpLFxuICAgICAgYW5jaG9yOiAkbm9kZS5odG1sKCksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2xpbmsuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgVGV4dFN0cmluZyBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gQmFzZUVkaXRhYmxlLmZyYW1lJCgkbm9kZSk7XG4gICAgY29uc3QgZWRpdG9yID0gbm9kZS5kYXRhKCdlZGl0b3InKTtcbiAgICBpZiAoZWRpdG9yKSB7XG4gICAgICByZXR1cm4gZWRpdG9yLmdldERhdGEoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUuaHRtbCgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9ICRub2RlWzBdO1xuICAgIC8qIGdsb2JhbCB3aW5kb3c6ZmFsc2UgKi9cblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGFsbG93ZWRDb250ZW50OiAnaSB1JyxcbiAgICAgIHRvb2xiYXJzOiB7XG4gICAgICAgIHN0eWxlczoge1xuICAgICAgICAgIHNlbGVjdGlvbnM6IHdpbmRvdy5BbGxveUVkaXRvci5TZWxlY3Rpb25zLFxuICAgICAgICAgIHRhYkluZGV4OiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGF1dG9QYXJhZ3JhcGg6IGZhbHNlLFxuICAgICAgZW5hYmxlQ29udGVudEVkaXRhYmxlOiB0cnVlLFxuICAgICAgaWdub3JlRW1wdHlQYXJhZ3JhcGg6IHRydWUsXG4gICAgICBibG9ja2xlc3M6IHRydWUsXG4gICAgICBlbnRlck1vZGU6IHdpbmRvdy5DS0VESVRPUi5FTlRFUl9CUixcbiAgICB9O1xuICAgIC8vICQoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB3aW5kb3cuQWxsb3lFZGl0b3IuZWRpdGFibGUobm9kZSwgY29uZmlnKS5nZXQoJ25hdGl2ZUVkaXRvcicpO1xuICAgICAgZWRpdG9yLm9uKCdrZXknLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5kYXRhLmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmRhdGEua2V5Q29kZSA9PT0gd2luZG93LkNLRURJVE9SLlNISUZUICsgMTMpIHtcbiAgICAgICAgICAvLyBhZGQgc2F2aW5nIGZ1bmN0aW9uIGhlcmVcbiAgICAgICAgICBldmVudC5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBlZGl0b3Iub24oJ3Bhc3RlJywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5kYXRhLmRhdGFWYWx1ZSA9IGV2ZW50LmRhdGEuZGF0YVZhbHVlLnJlcGxhY2UoLzxicltcXHNcXC9dKj4vZ21pLCAnICcpO1xuICAgICAgfSk7XG4gICAgICAkbm9kZS5kYXRhKCdlZGl0b3InLCBlZGl0b3IpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCRub2RlLCBub2RlKTtcbiAgICAgIC8vIHRocm93IGU7XG4gICAgfVxuICAgIC8vIH0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dFN0cmluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9zdHJpbmcuanNcbiAqKi8iLCJpbXBvcnQgRGF0YVByb3ZpZGVyIGZyb20gJy4uL0RhdGFQcm92aWRlcic7XG5cbmNsYXNzIFN0YXRpY0NvbnRlbnQgZXh0ZW5kcyBEYXRhUHJvdmlkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm92aWRlZEtleXMpIHtcbiAgICBzdXBlcignRG90UGxhbnRcXFxcTW9uc3RlclxcXFxEYXRhRW50aXR5XFxcXFN0YXRpY0NvbnRlbnRQcm92aWRlcicsIHByb3ZpZGVkS2V5cyk7XG4gIH1cblxuICBmaWxsQ29uZmlnKGRhdGEpIHtcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YTtcbiAgICBuZXdEYXRhLmVudGl0aWVzID0gdGhpcy5zZXJpYWxpemVLZXlzKCk7XG4gICAgcmV0dXJuIG5ld0RhdGE7XG4gIH1cblxuICBzZXJpYWxpemVNYXRlcmlhbChyZWdpb25LZXksIG1hdGVyaWFsS2V5LCBkYXRhS2V5cywgJHJlZ2lvbiwgJG1hdGVyaWFsKSB7XG4gICAgY29uc3QgbWF0ZXJpYWxFZGl0YWJsZUtleXMgPSAkbWF0ZXJpYWwuZGF0YSgnZWRpdGFibGVLZXlzJyk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5yZWN1cnNpdmVTZXJpYWxpemUobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRtYXRlcmlhbCwgZGF0YUtleXMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZWN1cnNpdmVTZXJpYWxpemUobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRyb290LCBkYXRhS2V5cywgcHJlZml4ID0gJycpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcblxuICAgIGRhdGFLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IG9iaiA9IG1hdGVyaWFsRWRpdGFibGVLZXlzW2tleV0gfHwgJ05PX1NVQ0hfS0VZJztcbiAgICAgIGlmIChvYmogPT09ICdOT19TVUNIX0tFWScpIHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvYmogPT09IE9iamVjdChvYmopKSB7XG4gICAgICAgIC8vIGl0J3MgcmVjdXJzaXZlXG4gICAgICAgIC8vIGZpcnN0IC0gZmluZCBhbGwgYmxvY2tzXG4gICAgICAgIGNvbnN0ICRibG9ja3MgPSAkcm9vdC5maW5kKGBbZGF0YS1yZWN1cnNpdmUtaXRlbT1cIiR7a2V5fVwiXWApO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICByZXN1bHRba2V5XSA9IFtdO1xuICAgICAgICAkYmxvY2tzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh0aGF0LnJlY3Vyc2l2ZVNlcmlhbGl6ZShvYmosICR0aGlzLCBPYmplY3Qua2V5cyhvYmopLCAnaXRlbS4nKSk7XG4gICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGl0J3MgcGxhaW4gZmllbGRcbiAgICAgICAgY29uc3QgJG5vZGUgPSAkcm9vdC5maW5kKGBbZGF0YS1lZGl0YWJsZS1rZXk9XCIke3ByZWZpeH0ke2tleX1cIl1gKS5maXJzdCgpO1xuICAgICAgICBpZiAoJG5vZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBTa2lwcGVkIFtkYXRhLWVkaXRhYmxlLWtleT1cIiR7cHJlZml4fSR7a2V5fVwiXSBhcyBub3QgZm91bmRgKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0W2tleV0gPSBEYXRhUHJvdmlkZXIuZWRpdGFibGUuc2VyaWFsaXplRWRpdGFibGUoJG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGljQ29udGVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL3Byb3ZpZGVycy9TdGF0aWNDb250ZW50LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==