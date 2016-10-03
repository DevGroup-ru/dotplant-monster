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
	      var that = this;
	
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
	          check_callback: true,
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
	      });
	      var controlButtons = $('<div class="tree-control-buttons" role="presentation"></div>');
	
	      var buttonsArray = [{
	        icon: 'fa fa-arrow-right',
	        name: 'Select',
	        click: function click(jsTreeNode, $node) {
	          _this2.target$.smoothScroll({
	            scrollTarget: _this2.target$('[data-material-path="' + jsTreeNode.data.materialPath + '"]')
	          });
	          return false;
	        }
	      }, {
	        icon: 'fa fa-trash-o',
	        name: 'Remove',
	        click: function click(jsTreeNode, $node) {
	          _this2.jstreeObj.delete_node(_this2.jstreeObj.get_selected());
	          _this2.updatePageStructureJson();
	          _this2.target.FrontendMonster.VisualFrame.preview();
	          return false;
	        }
	      }];
	
	      buttonsArray.forEach(function (conf) {
	        var $button = $('<a href="#" class="tree-control-buttons__button" title="' + conf.name + '">\n  <i class="' + conf.icon + '"></i>\n</a>');
	        $button.click(function clickHandler() {
	          var $node = $(this).parent().parent();
	
	          return conf.click(that.jstreeObj.get_node($node), $node);
	        });
	        controlButtons.append($button);
	      });
	
	      this.$pageStructure.on('select_node.jstree', function (e, obj) {
	
	        var type = obj.node.type;
	        _this2.selectedEntity = obj.node.data.entityType || null;
	        switch (type) {
	          case 'material':
	            var $anchor = $('#' + obj.node.id);
	            $anchor.prepend(controlButtons);
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmUwNjAwZGE0MjBiMjhlOWUxYzMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL0Jhc2VFbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL0Jhc2VFZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL0Zyb250ZW5kTW9uc3Rlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQWN0aW9uRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0VkaXRhYmxlLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9IYXNoQXBpLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL1dZU0lXWUcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9hbGwuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL3Byb3ZpZGVycy9TdGF0aWNDb250ZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9idW5kbGUuY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkZyb250ZW5kTW9uc3RlciIsIkJhc2VFbnZpcm9ubWVudCIsInZpc3VhbEJ1aWxkZXIiLCJuYW1lIiwidGFyZ2V0IiwiJCIsInNldHRpbmdzIiwiY29udGVudFdpbmRvdyIsImN1cnJlbnRFbnZpcm9ubWVudCIsImVudmlyb25tZW50cyIsImdldCIsImRlYWN0aXZhdGUiLCJjbGVhclN0YWNrYWJsZSIsImZ1bmMiLCJhcmdzIiwic2VuZE1lc3NhZ2UiLCJCYXNlRWRpdGFibGUiLCIkbm9kZSIsIkZyYW1lQXBpIiwibGlzdGVuZXIiLCJjYWxsYmFjayIsImNhbGxiYWNrSGFuZGxlciIsImV2ZW50IiwibWVzc2FnZSIsImlzSWUiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiYXBwbHkiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJzdHJpbmdpZnkiLCJwb3N0TWVzc2FnZSIsImlzIiwiaWUiLCJwYXJhbXMiLCJ2aXN1YWxCdWxkZXIiLCJoYXNoQXBpIiwicGFyZW50IiwiaGFzQnVpbGRlciIsIlZpc3VhbEZyYW1lIiwic21vb3RoU2Nyb2xsIiwiaW5pdCIsInVzZXJTZXR0aW5ncyIsIkZyb250ZW5kTW9uc3RlclNldHRpbmdzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJidWlsZGVyIiwiJGJ1aWxkZXIiLCJsZW5ndGgiLCJWaXN1YWxCdWlsZGVyIiwicmVzb2x1dGlvblN3aXRjaGVyIiwiTWFwIiwiZW52aXJvbm1lbnRTZWxlY3RvciIsInN3aXRjaEVudmlyb25tZW50IiwiZmlyc3QiLCJtb2QiLCJiaW5kTWVzc2FnZUxpc3RlbmVyIiwiY29udHJvbHMiLCJWaXN1YWxCdWlsZGVyU2V0dGluZ3MiLCJidW5kbGVzIiwiJHN0YWNrYWJsZSIsInRoYXQiLCJiZW1FbGVtIiwiJHJlc29sdXRpb25MaW5rcyIsImNsaWNrIiwid2lkdGgiLCIkc2VjdGlvbkxpbmtzIiwiZW52aXJvbm1lbnROYW1lIiwiYWN0aXZhdGUiLCJlbXB0eSIsInBhbmVDbGFzcyIsIm1vZGlmaWVyIiwiZmluZCIsIiRuZXdQYW5lIiwiYXBwZW5kIiwibWF0ZXJpYWxzIiwiaGFzT3duUHJvcGVydHkiLCJyZXN1bHQiLCJzZXJpYWxpemVQYWdlIiwiY29uc29sZSIsImxvZyIsInJlc3VsdEJ5UHJvdmlkZXJzIiwicHJvdmlkZWRLZXlzIiwiZnJhbWVDb250ZW50V2luZG93IiwiTU9OU1RFUl9FRElUX01PREVfREFUQSIsInRlbXBsYXRlIiwicHJvdmlkZXJJbmRleCIsInJlZ2lvbnMiLCJyZWdpb25LZXkiLCJtYXRlcmlhbEluZGV4IiwiZGF0YUtleXMiLCJlbnZpcm9ubWVudCIsInBhZ2VDaGFuZ2VkIiwiJGNvbnRyb2xzIiwiZWxlbSIsImxvY2F0aW9uIiwicmVsb2FkIiwiJGNvbnRyb2xzUmlnaHQiLCJEaWFsb2dIZWxwZXIiLCJidWlsZGVyRGlhbG9nIiwib25BamF4TG9hZCIsIiR0YXJnZXQiLCJkaWFsb2ciLCJkYXRhQ2hhbmdlciIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhVHlwZSIsImF1dG9EZXN0cm95Iiwic2hvdyIsIkFjdGlvbkVudmlyb25tZW50IiwiQ3VzdG9taXphdGlvbkVudmlyb25tZW50IiwiTWF0ZXJpYWxzRW52aXJvbm1lbnQiLCJpbml0TWF0ZXJpYWxzU2VsZWN0b3IiLCIkbWF0ZXJpYWxzR3JvdXBzIiwiJG1hdGVyaWFsc0xpc3QiLCJpMThuQnVuZGxlTmFtZSIsInBvbHlnbG90IiwidCIsImJ1bmRsZSIsIiRidW5kbGVUaXRsZSIsImZ1bGxQYXRoIiwicHVzaCIsImdyb3VwcyIsImdyb3VwTmFtZSIsImdyb3VwIiwiaTE4bkdyb3VwTmFtZSIsIiRsaSIsIiRsaXN0IiwiaXRlbXMiLCJtYXRlcmlhbE5hbWUiLCJtYXRlcmlhbCIsImkxOG5NYXRlcmlhbE5hbWUiLCIkaXRlbSIsImRvY3VtZW50Iiwib24iLCJjbGlja0hhbmRsZXIiLCIkdGhpcyIsInRvZ2dsZU1vZCIsImdyb3VwUGF0aCIsImVhY2giLCJpdCIsIiRtYXRlcmlhbHNQYW5lIiwiaGlkZSIsIlBhZ2VTdHJ1Y3R1cmVFbnYiLCJzZWxlY3RlZFJlZ2lvbktleSIsInNlbGVjdGVkRW50aXR5IiwiJGdyb3Vwc1BhbmUiLCJjcmVhdGVTdGFja2FibGVQYW5lIiwiUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IiwiaW5pdFBhZ2VTdHJ1Y3R1cmVFbGVtZW50IiwiZWRpdE1vZGVEYXRhIiwiJGhlYWRlciIsIiRwYWdlU3RydWN0dXJlIiwiJHN0cnVjdHVyZVBhbmUiLCJkZXRhY2giLCJqc3RyZWUiLCJsYXlvdXQiLCJsYXlvdXRJdGVtIiwiaWQiLCJ0ZW1wbGF0ZUlkIiwidGV4dCIsImljb24iLCJzdGF0ZSIsIm9wZW5lZCIsImNoaWxkcmVuIiwidGVtcGxhdGVJdGVtIiwiJGxheW91dFJlZ2lvbnMiLCJ0YXJnZXQkIiwiaXRlciIsInByb2Nlc3NMYXlvdXQiLCJpdGVtIiwidGVtcGxhdGVSZWdpb25zIiwicmVnaW9uIiwicGFnZVN0cnVjdHVyZSIsImNvcmUiLCJjaGVja19jYWxsYmFjayIsInRoZW1lcyIsInBsdWdpbnMiLCJ0eXBlcyIsInRlbXBsYXRlUmVnaW9uIiwiY29udGVudFRlbXBsYXRlUmVnaW9uIiwianN0cmVlT2JqIiwidXBkYXRlUGFnZVN0cnVjdHVyZUpzb24iLCJpc0NvbnRlbnRSZWdpb25Gb3VuZCIsImVudGl0eURlcGVuZGVudCIsInNlbGVjdF9ub2RlIiwiY29udHJvbEJ1dHRvbnMiLCJidXR0b25zQXJyYXkiLCJqc1RyZWVOb2RlIiwic2Nyb2xsVGFyZ2V0IiwibWF0ZXJpYWxQYXRoIiwiZGVsZXRlX25vZGUiLCJnZXRfc2VsZWN0ZWQiLCJwcmV2aWV3IiwiJGJ1dHRvbiIsImNvbmYiLCJnZXRfbm9kZSIsImUiLCJvYmoiLCJ0eXBlIiwibm9kZSIsImVudGl0eVR5cGUiLCIkYW5jaG9yIiwicHJlcGVuZCIsInBhZ2VTdHJ1Y3R1cmVKc29uIiwiZ2V0X2pzb24iLCJub19zdGF0ZSIsIm5vX2lkIiwibm9fbGlfYXR0ciIsIm5vX2FfYXR0ciIsInJlZ2lvbnNTdHJ1Y3R1cmUiLCJzZXJpYWxpemUiLCJtYXRlcmlhbHNEZWNsIiwiJGxheW91dFJlZ2lvbiIsImV4dHJhY3RSZWdpb25EYXRhIiwicmVwbGFjZSIsIiRsYXlvdXRNYXRlcmlhbHMiLCIkbGF5b3V0TWF0ZXJpYWwiLCJwcm9jZXNzTGF5b3V0TWF0ZXJpYWwiLCJsYXlvdXRNYXRlcmlhbEl0ZW0iLCJsYXlvdXRNYXRlcmlhbCIsInByZWZpeCIsImVkaXRhYmxlS2V5cyIsIiRyZWdpb25zIiwicHJvY2Vzc1RlbXBsYXRlUmVnaW9uIiwiaXNDb250ZW50IiwiJHRlbXBsYXRlUmVnaW9uIiwiJHJlZ2lvbk1hdGVyaWFscyIsInByb2Nlc3NUZW1wbGF0ZVJlZ2lvbk1hdGVyaWFsIiwiJHJlZ2lvbk1hdGVyaWFsIiwicmVnaW9uSWQiLCJ1bmlxdWVDb250ZW50SWQiLCJTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwidW5pcWlkIiwibW9yZUVudHJvcHkiLCJyZXRJZCIsIl9mb3JtYXRTZWVkIiwic2VlZCIsInJlcVdpZHRoIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsInNsaWNlIiwiQXJyYXkiLCJqb2luIiwiJGdsb2JhbCIsIkdMT0JBTCIsIiRsb2N1dHVzIiwicGhwIiwidW5pcWlkU2VlZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIkRhdGUiLCJnZXRUaW1lIiwidG9GaXhlZCIsIkRhdGFQcm92aWRlciIsImNsYXNzTmFtZSIsImFzc29jaWF0aW9ucyIsImFzc29jaWF0ZSIsIiRyZWdpb24iLCJtYXRlcmlhbEtleSIsIiRtYXRlcmlhbCIsIm1hdGVyaWFsRWRpdGFibGVLZXlzIiwiaW5pdGlhbGl6ZU1hdGVyaWFsRWRpdCIsIiRyb290IiwiJGJsb2NrcyIsImNvdW50ZXIiLCJlZGl0YWJsZSIsImluaXRpYWxpemVFZGl0YWJsZSIsInNlcmlhbGl6ZU1hdGVyaWFsIiwiY2xhc3MiLCJmaWxsQ29uZmlnIiwiRGF0YVByb3ZpZGVyRmFjdG9yeSIsInByb3ZpZGVyRGVjbCIsInByb3ZpZGVyIiwiRWRpdGFibGUiLCJlZGl0YWJsZXNCeVR5cGUiLCJNT05TVEVSX0VESVRBQkxFUyIsImV4cG9ydFZhcmlhYmxlIiwic2VyaWFsaXplTm9kZSIsInN0cmluZyIsIkhhc2hBcGkiLCJmdW5jdGlvbkNhbGxzIiwiaGFzaCIsIm1hdGNoZXMiLCJtYXRjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsImluaXRpYWxpemUiLCJwYWdlU3RydWN0dXJlSnNvbkRhdGEiLCJwYXJlbnRXaW5kb3ciLCJwYXJlbnRNb25zdGVyIiwicGFyZW50QnVpbGRlciIsImN1cnJlbnRNb25zdGVyQ29udGVudCIsInJlc2l6ZSIsInVwZGF0ZUhhbmRsZXJzIiwiaW5pdFByb3ZpZGVycyIsIk1vbnN0ZXJFZGl0RGF0YSIsInByb3ZpZGVycyIsImdldFByb3ZpZGVycyIsImVudGl0eSIsImFyciIsImZhY3RvcnkiLCIkbW9uc3RlckNvbnRlbnRDYWNoZSIsIiRzZWxlY3RlZE1hdGVyaWFsIiwiJGhhbmRsZXJzIiwiY3NzIiwicG9zaXRpb24iLCJ0b3AiLCJoZWlnaHQiLCIkbW9uc3RlckNvbnRlbnQiLCIkbW9uc3RlciIsInNlcmlhbGl6ZVVuaXF1ZUNvbnRlbnQiLCJzZW5kVG9CdWlsZGVyIiwiYmxvY2siLCJWaXN1YWxGcmFtZVNldHRpbmdzIiwicmVnaW9uTmFtZSIsInJhbmRvbUluZGV4IiwiaXRlcmF0ZVRlbXBsYXRlVHlwZSIsIm1hdGVyaWFsc0J5UmVnaW9uRGVjbCIsImRlY2wiLCJtYXRlcmlhbHNPcmRlciIsIm1hdGVyaWFsc0RlY2xzIiwibmV3RGF0YSIsImFjdGlvbiIsImZvcm1TdWJtaXQiLCJyZWdpb25zUmVzdWx0IiwiaXRlcmF0ZVRlbXBsYXRlUmVnaW9ucyIsInRlbXBsYXRlUmVnaW9uc09yZGVyIiwiZW50aXR5TWF0ZXJpYWxzIiwic2VyaWFsaXplUHJvdmlkZXJzIiwicHJvdmlkZXJLZXkiLCJ2YWx1ZSIsInJlZnJlc2hNb25zdGVyQ29udGVudENhY2hlIiwiJGZvcm0iLCIkaW5wdXQiLCIkY3NyZiIsImF0dHIiLCJ2YWwiLCJhcHBlbmRUbyIsInN1Ym1pdCIsInJlZ2lvbk1hdGVyaWFscyIsIml0ZXJhdGVNYXRlcmlhbHMiLCJXWVNJV1lHIiwiZnJhbWUkIiwiZWRpdG9yIiwiZ2V0RGF0YSIsImh0bWwiLCJjb25maWciLCJhdXRvUGFyYWdyYXBoIiwiZW5hYmxlQ29udGVudEVkaXRhYmxlIiwiaWdub3JlRW1wdHlQYXJhZ3JhcGgiLCJlbnRlck1vZGUiLCJDS0VESVRPUiIsIkVOVEVSX0JSIiwiQWxsb3lFZGl0b3IiLCJhbGwiLCJJbWFnZSIsIiRpbWciLCJzcmMiLCJhbHQiLCJMaW5rIiwiaHJlZiIsImFuY2hvciIsIlRleHRTdHJpbmciLCJhbGxvd2VkQ29udGVudCIsInRvb2xiYXJzIiwic3R5bGVzIiwic2VsZWN0aW9ucyIsIlNlbGVjdGlvbnMiLCJ0YWJJbmRleCIsImJsb2NrbGVzcyIsImtleUNvZGUiLCJTSElGVCIsImNhbmNlbCIsImRhdGFWYWx1ZSIsIlN0YXRpY0NvbnRlbnQiLCJlbnRpdGllcyIsInNlcmlhbGl6ZUtleXMiLCJyZWN1cnNpdmVTZXJpYWxpemUiLCJ3YXJuIiwic2VyaWFsaXplRWRpdGFibGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7O0FBRUE7Ozs7OztBQUVBQSxR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LGlCQUFNcUUsVUFBVUQsTUFBTW5NLElBQU4sNEJBQW9DM0IsR0FBcEMsUUFBaEI7QUFDQSxpQkFBTWdCLGFBQU47QUFDQSxpQkFBSWdOLFVBQVUsQ0FBZDtBQUNBaE0sb0JBQU9oQyxHQUFQLElBQWMsRUFBZDtBQUNBK04scUJBQVFoSSxJQUFSLENBQWEsU0FBUzZCLElBQVQsR0FBZ0I7QUFDM0IsbUJBQU1oQyxRQUFRdkksRUFBRSxJQUFGLENBQWQ7QUFDQTJFLHNCQUFPaEMsR0FBUCxFQUFZNkUsSUFBWixDQUFpQjdELEtBQUtnVSxrQkFBTCxDQUF3QnRMLEdBQXhCLEVBQTZCOUQsS0FBN0IsRUFBb0MvRixPQUFPQyxJQUFQLENBQVk0SixHQUFaLENBQXBDLEVBQXNELE9BQXRELENBQWpCO0FBQ0FzRTtBQUNELGNBSkQ7QUFQdUI7QUFZeEIsVUFaRCxNQVlPO0FBQ0w7QUFDQSxlQUFNL1AsUUFBUTZQLE1BQU1uTSxJQUFOLDBCQUFrQ3NKLE1BQWxDLEdBQTJDakwsR0FBM0MsU0FBb0RTLEtBQXBELEVBQWQ7QUFDQSxlQUFJeEMsTUFBTWtDLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIrQixxQkFBUStTLElBQVIsa0NBQTRDaEssTUFBNUMsR0FBcURqTCxHQUFyRDtBQUNBO0FBQ0Q7QUFDRGdDLGtCQUFPaEMsR0FBUCxJQUFjLHVCQUFhaU8sUUFBYixDQUFzQmlILGlCQUF0QixDQUF3Q2pYLEtBQXhDLENBQWQ7QUFDRDtBQUNGLFFBM0JEO0FBNEJBLGNBQU8rRCxNQUFQO0FBQ0Q7Ozs7OzttQkFHWTZTLGE7Ozs7Ozs7O0FDdERmLDBDIiwiZmlsZSI6InZpc3VhbC1idWlsZGVyL3NjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGJlMDYwMGRhNDIwYjI4ZTllMWMzXG4gKiovIiwiaW1wb3J0ICcuL2J1bmRsZS5jc3MnO1xuXG5pbXBvcnQgRnJvbnRlbmRNb25zdGVyIGZyb20gJy4vRnJvbnRlbmRNb25zdGVyJztcblxud2luZG93LkZyb250ZW5kTW9uc3RlciA9IG5ldyBGcm9udGVuZE1vbnN0ZXIoKTtcbi8vXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzXG4gKiovIiwiaW1wb3J0IEZyYW1lQXBpIGZyb20gJy4vLi4vdmlzdWFsLWZyYW1lL0ZyYW1lQXBpJztcblxuY2xhc3MgQmFzZUVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IodmlzdWFsQnVpbGRlciwgbmFtZSkge1xuICAgIHRoaXMudmlzdWFsQnVpbGRlciA9IHZpc3VhbEJ1aWxkZXI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhcmdldCA9ICQodGhpcy52aXN1YWxCdWlsZGVyLnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKVswXS5jb250ZW50V2luZG93O1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgLy8gZGVhY3RpdmF0ZSBjdXJyZW50IHNlbGVjdGVkIGVudmlyb25tZW50XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gdGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkge1xuICAgICAgdGhpcy52aXN1YWxCdWlsZGVyLmVudmlyb25tZW50cy5nZXQodGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkuZGVhY3RpdmF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0YXJnZXQkKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldC4kO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIuY2xlYXJTdGFja2FibGUoKTtcbiAgfVxuXG4gIHNlbmRNZXNzYWdlKGZ1bmMsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy50YXJnZXQsIGZ1bmMsIGFyZ3MpO1xuICB9XG5cbiAgcGFnZUNoYW5nZWQoKSB7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlRW52aXJvbm1lbnQ7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJjbGFzcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG5cbiAgfVxuXG4gIGluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSkge1xuXG4gIH1cblxuICBzdGF0aWMgZ2V0IGZyYW1lJCgpIHtcbiAgICByZXR1cm4gd2luZG93LiQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUVkaXRhYmxlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9CYXNlRWRpdGFibGUuanNcbiAqKi8iLCJjbGFzcyBGcmFtZUFwaSB7XG4gIHN0YXRpYyBnZXQgaXNJZSgpIHtcbiAgICAvKiBnbG9iYWwgaXMgKi9cbiAgICBpZiAodHlwZW9mKGlzKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBpcy5pZSgpOy8vIHx8IGlzLmVkZ2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRpYyBiaW5kTWVzc2FnZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFja0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgIGxldCBtZXNzYWdlID0gbnVsbDtcbiAgICAgIGlmIChGcmFtZUFwaS5pc0llKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZSA9IGV2ZW50LmRhdGE7XG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0ZW5lclttZXNzYWdlLmZ1bmNdKSB7XG4gICAgICAgIGxpc3RlbmVyW21lc3NhZ2UuZnVuY10uYXBwbHkobGlzdGVuZXIsIG1lc3NhZ2UuYXJncyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElFOFxuICAgICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbm1lc3NhZ2UnLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHNlbmRNZXNzYWdlKHRhcmdldCwgZnVuYywgYXJncykge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBmdW5jLFxuICAgICAgYXJnc1xuICAgIH07XG4gICAgY29uc3QgbWVzc2FnZSA9IEZyYW1lQXBpLmlzSWUgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IGRhdGE7XG5cbiAgICB0YXJnZXQucG9zdE1lc3NhZ2UobWVzc2FnZSwgJyonKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcmFtZUFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0ZyYW1lQXBpLmpzXG4gKiovIiwiaW1wb3J0IFZpc3VhbEJ1aWxkZXIgZnJvbSAnLi9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlcic7XG5pbXBvcnQgVmlzdWFsRnJhbWUgZnJvbSAnLi9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZSc7XG5pbXBvcnQgSGFzaEFwaSBmcm9tICcuL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGknO1xuXG5jbGFzcyBGcm9udGVuZE1vbnN0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtcygpO1xuICAgIHRoaXMudmlzdWFsQnVsZGVyID0gbnVsbDtcbiAgICB0aGlzLmhhc2hBcGkgPSBuZXcgSGFzaEFwaSgpO1xuICAgIGlmICh3aW5kb3cucGFyZW50ICE9PSB3aW5kb3cgJiYgd2luZG93LnBhcmVudC5Gcm9udGVuZE1vbnN0ZXIpIHtcbiAgICAgIGlmICh3aW5kb3cucGFyZW50LkZyb250ZW5kTW9uc3Rlci5oYXNCdWlsZGVyKSB7XG4gICAgICAgIHRoaXMuVmlzdWFsRnJhbWUgPSBuZXcgVmlzdWFsRnJhbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogZ2xvYmFsIHNtb290aFNjcm9sbDogZmFsc2UqL1xuICAgIGlmICh0eXBlb2Yoc21vb3RoU2Nyb2xsKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNtb290aFNjcm9sbC5pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgVmlzdWFsQnVpbGRlciBjbGFzcyBpbnN0YW5jZVxuICAgKiBAcmV0dXJucyBWaXN1YWxCdWlsZGVyXG4gICAqL1xuICBnZXQgYnVpbGRlcigpIHtcbiAgICBpZiAodGhpcy52aXN1YWxCdWxkZXIgPT09IG51bGwpIHtcbiAgICAgIHRoaXMudmlzdWFsQnVsZGVyID0gbmV3IFZpc3VhbEJ1aWxkZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmlzdWFsQnVsZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgRnJvbnRlbmRNb25zdGVyIGluc3RhbmNlIGhhcyBWaXN1YWwgQnVpbGRlciBvbiBwYWdlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGhhc0J1aWxkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRlci4kYnVpbGRlci5sZW5ndGggPT09IDE7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBGcm9udGVuZE1vbnN0ZXIgc2V0dGluZ3MuXG4gICAqIFVzZXMgRnJvbnRlbmRNb25zdGVyU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuRnJvbnRlbmRNb25zdGVyU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh1c2VyU2V0dGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICB9KTtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJvbnRlbmRNb25zdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvRnJvbnRlbmRNb25zdGVyLmpzXG4gKiovIiwiaW1wb3J0IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQnO1xuaW1wb3J0IE1hdGVyaWFsc0Vudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50JztcbmltcG9ydCBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50JztcbmltcG9ydCBBY3Rpb25FbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudCc7XG5pbXBvcnQgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCc7XG5pbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi8uLi92aXN1YWwtZnJhbWUvRnJhbWVBcGknO1xuLy8gaW1wb3J0IEVkaXRhYmxlIGZyb20gJy4vRWRpdGFibGUnO1xuXG5jbGFzcyBWaXN1YWxCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLnJlc29sdXRpb25Td2l0Y2hlcigpO1xuXG4gICAgdGhpcy5lbnZpcm9ubWVudHMgPSBuZXcgTWFwKFtcbiAgICAgIFsnc2l0ZS1zdHJ1Y3R1cmUnLCBuZXcgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdzaXRlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsncGFnZS1zdHJ1Y3R1cmUnLCBuZXcgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdwYWdlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsnbWF0ZXJpYWxzJywgbmV3IE1hdGVyaWFsc0Vudmlyb25tZW50KHRoaXMsICdtYXRlcmlhbHMnKV0sXG4gICAgICBbJ2N1c3RvbWl6YXRpb24nLCBuZXcgQ3VzdG9taXphdGlvbkVudmlyb25tZW50KHRoaXMsICdjdXN0b21pemF0aW9uJyldLFxuICAgICAgWydhY3Rpb24nLCBuZXcgQWN0aW9uRW52aXJvbm1lbnQodGhpcywgJ2FjdGlvbicpXSxcbiAgICBdKTtcblxuICAgIHRoaXMuZW52aXJvbm1lbnRTZWxlY3RvcigpO1xuXG4gICAgLy8gc2VsZWN0IGZpcnN0IGVudmlyb25tZW50IGJ5IGRlZmF1bHRcbiAgICB0aGlzLnN3aXRjaEVudmlyb25tZW50KCdzaXRlLXN0cnVjdHVyZScpO1xuICAgICQoJy5tb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJylcbiAgICAgIC5maXJzdCgpXG4gICAgICAubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICBGcmFtZUFwaS5iaW5kTWVzc2FnZUxpc3RlbmVyKHRoaXMpO1xuXG4gICAgLy8gdGhpcy5lZGl0YWJsZSA9IG5ldyBFZGl0YWJsZSgpO1xuXG4gICAgdGhpcy5jb250cm9scygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgVmlzdWFsQnVpbGRlciBzZXR0aW5ncy5cbiAgICogVXNlcyBWaXN1YWxCdWlsZGVyU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuVmlzdWFsQnVpbGRlclNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgJ2VsZW1lbnQtc2VsZWN0b3InOiAnLm1vbnN0ZXItdmlzdWFsLWJ1aWxkZXInLFxuICAgICAgJ2ZyYW1lLXNlbGVjdG9yJzogJy5tb25zdGVyLXZpc3VhbC1mcmFtZScsXG4gICAgICBidW5kbGVzOiB7fSxcbiAgICAgICdzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJzogJ21vbnN0ZXItc3RhY2thYmxlLWNvbnRhaW5lcicsXG4gICAgICAnbmV3LWJsb2NrLXVybCc6ICcvbW9uc3Rlci92aXN1YWwtYnVpbGRlci9uZXctYmxvY2snLFxuICAgIH07XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuJGJ1aWxkZXIgPSAkKHRoaXMuc2V0dGluZ3NbJ2VsZW1lbnQtc2VsZWN0b3InXSk7XG4gICAgdGhpcy4kc3RhY2thYmxlID0gJChgLiR7dGhpcy5zZXR0aW5nc1snc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyddfWApO1xuICB9XG5cbiAgcmVzb2x1dGlvblN3aXRjaGVyKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGJlbUVsZW0gPSAncmVzb2x1dGlvbi1zd2l0Y2hlcl9fcmVzb2x1dGlvbi1saW5rJztcblxuICAgIGNvbnN0ICRyZXNvbHV0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRyZXNvbHV0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAkcmVzb2x1dGlvbkxpbmtzLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgICAgJCh0aGF0LnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKS53aWR0aCgkKHRoaXMpLmRhdGEoJ3Jlc29sdXRpb25XaWR0aCcpKTtcbiAgICAgICQodGhpcykubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGVudmlyb25tZW50U2VsZWN0b3IoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgYmVtRWxlbSA9ICdtb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJztcblxuICAgIGNvbnN0ICRzZWN0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRzZWN0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBjb25zdCBlbnZpcm9ubWVudE5hbWUgPSAkKHRoaXMpLmRhdGEoJ2Vudmlyb25tZW50TmFtZScpO1xuICAgICAgaWYgKHRoYXQuY3VycmVudEVudmlyb25tZW50ID09PSBlbnZpcm9ubWVudE5hbWUpIHtcbiAgICAgICAgJHNlY3Rpb25MaW5rcy5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgdGhhdC5lbnZpcm9ubWVudHMuZ2V0KGVudmlyb25tZW50TmFtZSkuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB0aGF0LmN1cnJlbnRFbnZpcm9ubWVudCA9IG51bGw7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgJHNlY3Rpb25MaW5rcy5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgIHRoYXQuc3dpdGNoRW52aXJvbm1lbnQoZW52aXJvbm1lbnROYW1lKTtcbiAgICAgICQodGhpcykubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHN3aXRjaEVudmlyb25tZW50KGVudmlyb25tZW50TmFtZSkge1xuICAgIHRoaXMuZW52aXJvbm1lbnRzLmdldChlbnZpcm9ubWVudE5hbWUpLmFjdGl2YXRlKCk7XG4gICAgdGhpcy5jdXJyZW50RW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudE5hbWU7XG4gIH1cblxuICBjbGVhclN0YWNrYWJsZSgpIHtcbiAgICB0aGlzLiRzdGFja2FibGUuZW1wdHkoKTtcbiAgfVxuXG4gIGNyZWF0ZVN0YWNrYWJsZVBhbmUoKSB7XG4gICAgY29uc3QgcGFuZUNsYXNzID0gYCR7dGhpcy5zZXR0aW5nc1snc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyddfV9fcGFuZWA7XG4gICAgY29uc3QgbW9kaWZpZXIgPSB0aGlzLiRzdGFja2FibGUuZmluZChgLiR7cGFuZUNsYXNzfWApLmxlbmd0aCA9PT0gMFxuICAgICAgPyBgJHtwYW5lQ2xhc3N9X2ZpcnN0YFxuICAgICAgOiAnJztcbiAgICBjb25zdCAkbmV3UGFuZSA9ICQoYDxkaXYgY2xhc3M9XCIke3BhbmVDbGFzc30gJHttb2RpZmllcn1cIj48L2Rpdj5gKTtcbiAgICB0aGlzLiRzdGFja2FibGUuYXBwZW5kKCRuZXdQYW5lKTtcbiAgICByZXR1cm4gJG5ld1BhbmU7XG4gIH1cblxuICBtYXRlcmlhbEJ5TmFtZShuYW1lKSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MubWF0ZXJpYWxzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5tYXRlcmlhbHNbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IGZyYW1lQ29udGVudFdpbmRvdygpIHtcbiAgICByZXR1cm4gJCh0aGlzLnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKVswXS5jb250ZW50V2luZG93O1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIC8vIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMuZnJhbWVDb250ZW50V2luZG93LCAnc2VyaWFsaXplQ29udGVudCcsIFsnbG9nJ10pO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKS5zZXJpYWxpemVQYWdlKCk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAgIC8vIHdlIGhhdmUgcmVzdWx0IHdoaWNoIGlzIGNvbnRlbnQgaW4gZm9ybWF0OlxuICAgIC8vIHJlZ2lvblxuICAgIC8vIC0tLSBtYXRlcmlhbCBpZFxuICAgIC8vIC0tLS0tLS0ga2V5cyA9PiB2YWx1ZXNcbiAgICAvL1xuICAgIC8vIG91ciBQcm92aWRlcnMgc2hvdWxkIGdldCBvbmx5IHRob3NlIGtleXMgdGhhdCB0aGV5IHByb3ZpZGVcbiAgICAvLyBwcm92aWRlZCBrZXlzIGFyZSBzdG9yZWQgaW4gZnJhbWVDb250ZW50V2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEudGVtcGxhdGUucHJvdmlkZWRLZXlzXG4gICAgY29uc3QgcmVzdWx0QnlQcm92aWRlcnMgPSB7fTtcbiAgICBjb25zdCBwcm92aWRlZEtleXMgPSB0aGlzLmZyYW1lQ29udGVudFdpbmRvdy5NT05TVEVSX0VESVRfTU9ERV9EQVRBLnRlbXBsYXRlLnByb3ZpZGVkS2V5cztcblxuICAgIE9iamVjdC5rZXlzKHByb3ZpZGVkS2V5cykuZm9yRWFjaChwcm92aWRlckluZGV4ID0+IHtcbiAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdID0ge307XG5cbiAgICAgIGNvbnN0IHJlZ2lvbnMgPSBwcm92aWRlZEtleXNbcHJvdmlkZXJJbmRleF07XG5cbiAgICAgIE9iamVjdC5rZXlzKHJlZ2lvbnMpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5oYXNPd25Qcm9wZXJ0eShyZWdpb25LZXkpID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1twcm92aWRlckluZGV4XVtyZWdpb25LZXldID0ge307XG5cbiAgICAgICAgLy8gZ28gZGVlcCB0byBtYXRlcmlhbCBpbmRlY2VzXG4gICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IHJlZ2lvbnNbcmVnaW9uS2V5XTtcblxuICAgICAgICBPYmplY3Qua2V5cyhtYXRlcmlhbHMpLmZvckVhY2gobWF0ZXJpYWxJbmRleCA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdFtyZWdpb25LZXldLmhhc093blByb3BlcnR5KG1hdGVyaWFsSW5kZXgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1twcm92aWRlckluZGV4XVtyZWdpb25LZXldW21hdGVyaWFsSW5kZXhdID0ge307XG5cbiAgICAgICAgICBjb25zdCBkYXRhS2V5cyA9IG1hdGVyaWFsc1ttYXRlcmlhbEluZGV4XTtcblxuICAgICAgICAgIGRhdGFLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHRbcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XS5oYXNPd25Qcm9wZXJ0eShrZXkpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1xuICAgICAgICAgICAgICBbcHJvdmlkZXJJbmRleF1cbiAgICAgICAgICAgICAgW3JlZ2lvbktleV1cbiAgICAgICAgICAgICAgW21hdGVyaWFsSW5kZXhdXG4gICAgICAgICAgICAgIFtrZXldID0gcmVzdWx0W3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF1ba2V5XTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHRCeVByb3ZpZGVycyk7XG4gICAgcmV0dXJuIHJlc3VsdEJ5UHJvdmlkZXJzO1xuICB9XG5cbiAgcGFnZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5lbnZpcm9ubWVudHMuZm9yRWFjaChcbiAgICAgIGVudmlyb25tZW50ID0+XG4gICAgICAgIGVudmlyb25tZW50LnBhZ2VDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgbG9nKHJlc3VsdCkge1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gIH1cblxuICBjb250cm9scygpIHtcbiAgICB0aGlzLiRjb250cm9scyA9IHRoaXMuJGJ1aWxkZXIuZmluZCgnLmNvbnRyb2xzX2xlZnQnKS5maXJzdCgpO1xuICAgIHRoaXMuJGNvbnRyb2xzLmVsZW0oJ3JlZnJlc2gnKS5jbGljaygoKSA9PiB7XG4gICAgICB0aGlzLmZyYW1lQ29udGVudFdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIHRoaXMuJGNvbnRyb2xzLmVsZW0oJ3NhdmUnKS5jbGljaygoKSA9PiB7XG4gICAgICBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLmZyYW1lQ29udGVudFdpbmRvdywgJ3NhdmUnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLiRjb250cm9sc1JpZ2h0ID0gdGhpcy4kYnVpbGRlci5maW5kKCcuY29udHJvbHNfcmlnaHQnKS5maXJzdCgpO1xuICAgIHRoaXMuJGNvbnRyb2xzUmlnaHQuZWxlbSgnY2xlYXItY2FjaGUnKS5jbGljaygoKSA9PiB7XG4gICAgICAvKiBnbG9iYWwgd2luZG93OiBmYWxzZSAqL1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24sIG5vLXVudXNlZC12YXJzICovXG4gICAgICB3aW5kb3cuRGlhbG9nSGVscGVyXG4gICAgICAgIC5idWlsZGVyRGlhbG9nKClcbiAgICAgICAgLm9uQWpheExvYWQoKGRhdGEsICR0YXJnZXQsIGRpYWxvZywgZGF0YUNoYW5nZXIpID0+IHtcbiAgICAgICAgICBkYXRhQ2hhbmdlcihkYXRhID8gJzxkaXY+T0s8L2Rpdj4nIDogJzxkaXY+RXJyb3I8L2Rpdj4nKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmFqYXgoe1xuICAgICAgICAgIHVybDogJy9tb25zdGVyL2J1bmRsZXMvY2xlYXItY2FjaGUnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIH0pXG4gICAgICAgIC5hdXRvRGVzdHJveSgpXG4gICAgICAgIC5zaG93KCk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduLCBuby11bnVzZWQtdmFycyAqL1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbEJ1aWxkZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlci5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBBY3Rpb25FbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBNYXRlcmlhbHNFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICBzdXBlcih2aXN1YWxCdWlsZGVyLCBuYW1lKTtcbiAgICB0aGlzLmluaXRNYXRlcmlhbHNTZWxlY3RvcigpO1xuICB9XG5cbiAgaW5pdE1hdGVyaWFsc1NlbGVjdG9yKCkge1xuICAgIHRoaXMuJG1hdGVyaWFsc0dyb3VwcyA9ICQoJzx1bCBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNcIj48L3VsPicpO1xuICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QgPSBbXTtcblxuICAgIHRoaXMudmlzdWFsQnVpbGRlci5zZXR0aW5ncy5idW5kbGVzLmZvckVhY2goYnVuZGxlID0+IHtcbiAgICAgIC8qIGdsb2JhbCBwb2x5Z2xvdDogZmFsc2UgKi9cbiAgICAgIGNvbnN0IGkxOG5CdW5kbGVOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBwb2x5Z2xvdC50KGJ1bmRsZS5uYW1lKVxuICAgICAgICA6IGJ1bmRsZS5uYW1lO1xuXG4gICAgICBjb25zdCAkYnVuZGxlVGl0bGUgPSBgXG4gICAgICA8bGkgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19pdGVtIG1hdGVyaWFscy1ncm91cHNfX2l0ZW0tLWJ1bmRsZS1sYWJlbFwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWJ1bmRsZVwiIGRhdGEtYnVuZGxlLXBhdGg9XCIke2J1bmRsZS5mdWxsUGF0aH1cIj5cbiAgICAgICAgICAgICR7aTE4bkJ1bmRsZU5hbWV9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICBgO1xuICAgICAgdGhpcy4kbWF0ZXJpYWxzTGlzdC5wdXNoKCRidW5kbGVUaXRsZSk7XG5cbiAgICAgIGJ1bmRsZS5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwTmFtZSA9IGdyb3VwLm5hbWU7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IGdyb3VwLm1hdGVyaWFscztcbiAgICAgICAgY29uc3QgaTE4bkdyb3VwTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnID8gcG9seWdsb3QudChncm91cE5hbWUpIDogZ3JvdXBOYW1lO1xuICAgICAgICBjb25zdCAkbGkgPSAkKGBcbiAgICA8bGkgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19pdGVtXCI+XG4gICAgICA8YSBocmVmPVwiI1wiIGRhdGEtZ3JvdXAtcGF0aD1cIiR7Z3JvdXAuZnVsbFBhdGh9XCIgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXBcIj5cbiAgICAgICAgJHtpMThuR3JvdXBOYW1lfSA8c3BhbiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX2NvdW50XCI+KCR7bWF0ZXJpYWxzLmxlbmd0aH0pPC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvbGk+YCk7XG4gICAgICAgIHRoaXMuJG1hdGVyaWFsc0dyb3Vwcy5hcHBlbmQoJGxpKTtcbiAgICAgICAgY29uc3QgJGxpc3QgPSAkKGA8dWwgY2xhc3M9XCJtYXRlcmlhbHMtbGlzdFwiIGRhdGEtZ3JvdXAtcGF0aD1cIiR7Z3JvdXAuZnVsbFBhdGh9XCI+PC91bD5gKTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcblxuICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaChtYXRlcmlhbCA9PiB7XG4gICAgICAgICAgY29uc3QgbWF0ZXJpYWxOYW1lID0gbWF0ZXJpYWwubmFtZTtcbiAgICAgICAgICBjb25zdCBpMThuTWF0ZXJpYWxOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gcG9seWdsb3QudChtYXRlcmlhbE5hbWUpXG4gICAgICAgICAgICA6IG1hdGVyaWFsTmFtZTtcbiAgICAgICAgICBjb25zdCAkaXRlbSA9ICQoYFxuPGxpPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWF0ZXJpYWxzLWxpc3RfX2l0ZW1cIiBkYXRhLW1hdGVyaWFsLXBhdGg9XCIke21hdGVyaWFsLmZ1bGxQYXRofVwiPlxuICAgICR7aTE4bk1hdGVyaWFsTmFtZX1cbiAgPC9hPlxuPC9saT5cbmApO1xuICAgICAgICAgIGl0ZW1zLnB1c2goJGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgJGxpc3QuYXBwZW5kKGl0ZW1zKTtcbiAgICAgICAgdGhpcy4kbWF0ZXJpYWxzTGlzdC5wdXNoKCRsaXN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgLyogZ2xvYmFsIGRvY3VtZW50OiBmYWxzZSAqL1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJywgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgJHRoaXMudG9nZ2xlTW9kKCdhY3RpdmUnKTtcbiAgICAgIGNvbnN0IGdyb3VwUGF0aCA9ICR0aGlzLmRhdGEoJ2dyb3VwUGF0aCcpO1xuICAgICAgaWYgKCR0aGlzLm1vZCgnYWN0aXZlJykpIHtcbiAgICAgICAgJCgnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcpLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuXG4gICAgICAgICQoJy5tYXRlcmlhbHMtbGlzdCcpLmVhY2goZnVuY3Rpb24gaXQoKSB7XG4gICAgICAgICAgY29uc3QgJGxpc3QgPSAkKHRoaXMpO1xuICAgICAgICAgIGlmICgkbGlzdC5tb2QoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAkbGlzdC5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCRsaXN0LmRhdGEoJ2dyb3VwUGF0aCcpID09PSBncm91cFBhdGgpIHtcbiAgICAgICAgICAgICRsaXN0Lm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkdGhpcy5tb2QoJ2FjdGl2ZScsIHRydWUpO1xuICAgICAgICB0aGF0LiRtYXRlcmlhbHNQYW5lLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoYXQncyBqdXN0IHNlY29uZCBjbGljayBvbiB0aGUgc2FtZSBncm91cFxuICAgICAgICB0aGF0LiRtYXRlcmlhbHNQYW5lLmhpZGUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYXRlcmlhbHMtbGlzdF9faXRlbScsIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgIGNvbnN0IFBhZ2VTdHJ1Y3R1cmVFbnYgPSB0aGF0LnZpc3VhbEJ1aWxkZXIuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRSZWdpb25LZXkgPSBQYWdlU3RydWN0dXJlRW52LnNlbGVjdGVkUmVnaW9uS2V5O1xuICAgICAgY29uc3Qgc2VsZWN0ZWRFbnRpdHkgPSBQYWdlU3RydWN0dXJlRW52LnNlbGVjdGVkRW50aXR5O1xuXG4gICAgICBpZiAoc2VsZWN0ZWRSZWdpb25LZXkgIT09IG51bGwgJiYgc2VsZWN0ZWRFbnRpdHkgIT09IG51bGwpIHtcbiAgICAgICAgdGhhdC5zZW5kTWVzc2FnZShcbiAgICAgICAgICAnbmV3QmxvY2snLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgICQodGhpcykuZGF0YSgnbWF0ZXJpYWxQYXRoJyksXG4gICAgICAgICAgICBzZWxlY3RlZEVudGl0eSxcbiAgICAgICAgICAgIHNlbGVjdGVkUmVnaW9uS2V5LFxuICAgICAgICAgIF1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHN1cGVyLmFjdGl2YXRlKCk7XG5cbiAgICB0aGlzLiRncm91cHNQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRncm91cHNQYW5lLmFwcGVuZCh0aGlzLiRtYXRlcmlhbHNHcm91cHMpO1xuXG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZS5hcHBlbmQodGhpcy4kbWF0ZXJpYWxzTGlzdCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZS5oaWRlKCk7XG5cbiAgICAvKlxuICAgIGNvbnN0IFBhZ2VTdHJ1Y3R1cmVFbnYgPSB0aGF0LnZpc3VhbEJ1aWxkZXIuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkUmVnaW9uS2V5ID0gUGFnZVN0cnVjdHVyZUVudi5zZWxlY3RlZFJlZ2lvbktleTtcbiAgICBjb25zdCBzZWxlY3RlZEVudGl0eSA9IFBhZ2VTdHJ1Y3R1cmVFbnYuc2VsZWN0ZWRFbnRpdHk7XG5cbiAgICBAdG9kbyBjaGVjayBmb3Igc2VsZWN0ZWRSZWdpb24gaWYgbm90IC0gd2UgbXVzdCBub3QgYWRkIGJsb2NrIGhlcmVcbiAgICAqL1xuXG4gICAgJCgnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcpLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbHNFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvTWF0ZXJpYWxzRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IodmlzdWFsQnVpbGRlciwgbmFtZSkge1xuICAgIHN1cGVyKHZpc3VhbEJ1aWxkZXIsIG5hbWUpO1xuICAgIHRoaXMuaW5pdFBhZ2VTdHJ1Y3R1cmVFbGVtZW50KCk7XG4gICAgdGhpcy5lZGl0TW9kZURhdGEgPSB7fTtcbiAgICB0aGlzLnNlbGVjdGVkUmVnaW9uS2V5ID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gbnVsbDtcbiAgfVxuXG4gIGluaXRQYWdlU3RydWN0dXJlRWxlbWVudCgpIHtcbiAgICB0aGlzLiRoZWFkZXIgPSAkKCc8ZGl2IGNsYXNzPVwibW9uc3Rlci1zdGFja2FibGUtY29udGFpbmVyX19wYW5lLWhlYWRlclwiPlBhZ2Ugc3RydWN0dXJlPC9kaXY+Jyk7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZSA9ICQoJzxkaXYgY2xhc3M9XCJwYWdlLXN0cnVjdHVyZVwiPjwvZGl2PicpO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgc3VwZXIuYWN0aXZhdGUoKTtcblxuICAgIHRoaXMuJHN0cnVjdHVyZVBhbmUgPSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3JlYXRlU3RhY2thYmxlUGFuZSgpO1xuICAgIHRoaXMuJHN0cnVjdHVyZVBhbmUuYXBwZW5kKHRoaXMuJGhlYWRlcik7XG4gICAgdGhpcy4kc3RydWN0dXJlUGFuZS5hcHBlbmQodGhpcy4kcGFnZVN0cnVjdHVyZSk7XG4gIH1cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlLmRldGFjaCgpO1xuICAgIHRoaXMuJGhlYWRlci5kZXRhY2goKTtcbiAgICBzdXBlci5kZWFjdGl2YXRlKCk7XG4gIH1cblxuICBwYWdlQ2hhbmdlZCgpIHtcbiAgICBzdXBlci5wYWdlQ2hhbmdlZCgpO1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUuanN0cmVlKCdkZXN0cm95Jyk7XG4gICAgY29uc3QgbGF5b3V0ID0gdGhpcy50YXJnZXQuTU9OU1RFUl9FRElUX01PREVfREFUQS5sYXlvdXQ7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLnRhcmdldC5NT05TVEVSX0VESVRfTU9ERV9EQVRBLnRlbXBsYXRlO1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgY29uc3QgbGF5b3V0SXRlbSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6ICdsYXlvdXQnLFxuICAgICAgICB0ZW1wbGF0ZUlkOiBsYXlvdXQuaWQsXG4gICAgICB9LFxuICAgICAgdGV4dDogYExheW91dCAtICR7bGF5b3V0LmtleX0gIyR7bGF5b3V0LmlkfWAsXG4gICAgICBpY29uOiAnZmEgZmEtY29sdW1ucycsXG4gICAgICBzdGF0ZToge1xuICAgICAgICBvcGVuZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH07XG4gICAgY29uc3QgdGVtcGxhdGVJdGVtID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBpZDogJ3RlbXBsYXRlJyxcbiAgICAgICAgdGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICB9LFxuICAgICAgdGV4dDogYFRlbXBsYXRlIC0gJHt0ZW1wbGF0ZS5rZXl9ICMke3RlbXBsYXRlLmlkfWAsXG4gICAgICBpY29uOiAnZmEgZmEtdGgnLFxuICAgICAgc3RhdGU6IHtcbiAgICAgICAgb3BlbmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICB9O1xuXG4gICAgY29uc3QgJGxheW91dFJlZ2lvbnMgPSB0aGlzLnRhcmdldCQoJy5tLW1vbnN0ZXItY29udGVudF9fbGF5b3V0Jyk7XG5cbiAgICAkbGF5b3V0UmVnaW9ucy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQucHJvY2Vzc0xheW91dCgkKHRoaXMpKTtcbiAgICAgIGxheW91dEl0ZW0uY2hpbGRyZW4ucHVzaChyZXN1bHQuaXRlbSk7XG4gICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcbiAgICAgICAgdGVtcGxhdGVJdGVtLmNoaWxkcmVuLnB1c2gocmVnaW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5wYWdlU3RydWN0dXJlID0gW1xuICAgICAgbGF5b3V0SXRlbSxcbiAgICAgIHRlbXBsYXRlSXRlbSxcbiAgICBdO1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUuanN0cmVlKHtcbiAgICAgIGNvcmU6IHtcbiAgICAgICAgY2hlY2tfY2FsbGJhY2s6IHRydWUsXG4gICAgICAgIGRhdGE6IHRoaXMucGFnZVN0cnVjdHVyZSxcbiAgICAgICAgdGhlbWVzOiB7XG4gICAgICAgICAgbmFtZTogJ2RlZmF1bHQtZGFyaycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcGx1Z2luczogW1xuICAgICAgICAndHlwZXMnLFxuICAgICAgICAnd2hvbGVyb3cnLFxuICAgICAgXSxcbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIGxheW91dDoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1jb2x1bW5zJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtdGgnLFxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVJlZ2lvbjoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1mb2xkZXItbycsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnRUZW1wbGF0ZVJlZ2lvbjoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1mb2xkZXInLFxuICAgICAgICB9LFxuICAgICAgICBtYXRlcmlhbDoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1wdXp6bGUtcGllY2UnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuanN0cmVlT2JqID0gdGhpcy4kcGFnZVN0cnVjdHVyZS5qc3RyZWUoKTtcblxuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUub24oJ2xvYWRlZC5qc3RyZWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVBhZ2VTdHJ1Y3R1cmVKc29uKCk7XG5cbiAgICAgIGxldCBpc0NvbnRlbnRSZWdpb25Gb3VuZCA9IGZhbHNlO1xuICAgICAgdGhpcy5wYWdlU3RydWN0dXJlWzFdLmNoaWxkcmVuLmZvckVhY2goKHJlZ2lvbikgPT4ge1xuICAgICAgICBpZiAocmVnaW9uLmRhdGEuZW50aXR5RGVwZW5kZW50ICYmIGlzQ29udGVudFJlZ2lvbkZvdW5kID09PSBmYWxzZSkge1xuICAgICAgICAgIGlzQ29udGVudFJlZ2lvbkZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmpzdHJlZU9iai5zZWxlY3Rfbm9kZShyZWdpb24uaWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zdCBjb250cm9sQnV0dG9ucyA9ICQoJzxkaXYgY2xhc3M9XCJ0cmVlLWNvbnRyb2wtYnV0dG9uc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj48L2Rpdj4nKTtcblxuICAgIGNvbnN0IGJ1dHRvbnNBcnJheSA9IFtcbiAgICAgIHtcbiAgICAgICAgaWNvbjogJ2ZhIGZhLWFycm93LXJpZ2h0JyxcbiAgICAgICAgbmFtZTogJ1NlbGVjdCcsXG4gICAgICAgIGNsaWNrOiAoanNUcmVlTm9kZSwgJG5vZGUpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldCQuc21vb3RoU2Nyb2xsKHtcbiAgICAgICAgICAgIHNjcm9sbFRhcmdldDogdGhpcy50YXJnZXQkKGBbZGF0YS1tYXRlcmlhbC1wYXRoPVwiJHtqc1RyZWVOb2RlLmRhdGEubWF0ZXJpYWxQYXRofVwiXWApLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogJ2ZhIGZhLXRyYXNoLW8nLFxuICAgICAgICBuYW1lOiAnUmVtb3ZlJyxcbiAgICAgICAgY2xpY2s6IChqc1RyZWVOb2RlLCAkbm9kZSkgPT4ge1xuICAgICAgICAgIHRoaXMuanN0cmVlT2JqLmRlbGV0ZV9ub2RlKHRoaXMuanN0cmVlT2JqLmdldF9zZWxlY3RlZCgpKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VTdHJ1Y3R1cmVKc29uKCk7XG4gICAgICAgICAgdGhpcy50YXJnZXQuRnJvbnRlbmRNb25zdGVyLlZpc3VhbEZyYW1lLnByZXZpZXcoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdO1xuXG4gICAgYnV0dG9uc0FycmF5LmZvckVhY2goY29uZiA9PiB7XG4gICAgICBjb25zdCAkYnV0dG9uID0gJChgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRyZWUtY29udHJvbC1idXR0b25zX19idXR0b25cIiB0aXRsZT1cIiR7Y29uZi5uYW1lfVwiPlxuICA8aSBjbGFzcz1cIiR7Y29uZi5pY29ufVwiPjwvaT5cbjwvYT5gKTtcbiAgICAgICRidXR0b24uY2xpY2soZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCl7XG4gICAgICAgIGNvbnN0ICRub2RlID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKTtcblxuICAgICAgICByZXR1cm4gY29uZi5jbGljayh0aGF0LmpzdHJlZU9iai5nZXRfbm9kZSgkbm9kZSksICRub2RlKTtcbiAgICAgIH0pO1xuICAgICAgY29udHJvbEJ1dHRvbnMuYXBwZW5kKCRidXR0b24pO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5vbignc2VsZWN0X25vZGUuanN0cmVlJywgKGUsIG9iaikgPT4ge1xuXG4gICAgICBjb25zdCB0eXBlID0gb2JqLm5vZGUudHlwZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRFbnRpdHkgPSBvYmoubm9kZS5kYXRhLmVudGl0eVR5cGUgfHwgbnVsbDtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtYXRlcmlhbCc6XG4gICAgICAgICAgY29uc3QgJGFuY2hvciA9ICQoYCMke29iai5ub2RlLmlkfWApO1xuICAgICAgICAgICRhbmNob3IucHJlcGVuZChjb250cm9sQnV0dG9ucyk7XG4gICAgICAgICAgdGhpcy50YXJnZXQkLnNtb290aFNjcm9sbCh7XG4gICAgICAgICAgICBzY3JvbGxUYXJnZXQ6IHRoaXMudGFyZ2V0JChgW2RhdGEtbWF0ZXJpYWwtcGF0aD1cIiR7b2JqLm5vZGUuZGF0YS5tYXRlcmlhbFBhdGh9XCJdYCksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJlZ2lvbktleSA9IG9iai5ub2RlLmRhdGEucmVnaW9uS2V5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0ZW1wbGF0ZVJlZ2lvbic6XG4gICAgICAgIGNhc2UgJ2NvbnRlbnRUZW1wbGF0ZVJlZ2lvbic6XG4gICAgICAgICAgdGhpcy50YXJnZXQkLnNtb290aFNjcm9sbCh7XG4gICAgICAgICAgICBzY3JvbGxUYXJnZXQ6IHRoaXMudGFyZ2V0JChgW2RhdGEtcmVnaW9uLWtleT1cIiR7b2JqLm5vZGUuZGF0YS5yZWdpb25LZXl9XCJdYCksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJlZ2lvbktleSA9IG9iai5ub2RlLmRhdGEucmVnaW9uS2V5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSZWdpb25LZXkgPSBudWxsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICB0aGlzLmVkaXRNb2RlRGF0YSA9IHRoaXMudGFyZ2V0Lk1PTlNURVJfRURJVF9NT0RFX0RBVEE7XG4gIH1cblxuICB1cGRhdGVQYWdlU3RydWN0dXJlSnNvbigpIHtcbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uID0gdGhpcy5qc3RyZWVPYmouZ2V0X2pzb24odGhpcy4kcGFnZVN0cnVjdHVyZSwge1xuICAgICAgbm9fc3RhdGU6IHRydWUsXG4gICAgICBub19pZDogdHJ1ZSxcbiAgICAgIG5vX2xpX2F0dHI6IHRydWUsXG4gICAgICBub19hX2F0dHI6IHRydWUsXG4gICAgfSk7XG4gICAgdGhpcy50YXJnZXQuRnJvbnRlbmRNb25zdGVyLlZpc3VhbEZyYW1lLnBhZ2VTdHJ1Y3R1cmVKc29uID0gdGhpcy5wYWdlU3RydWN0dXJlSnNvbjtcbiAgfVxuXG4gIHN0YXRpYyBwcm9jZXNzTGF5b3V0KCRsYXlvdXRSZWdpb24pIHtcbiAgICBjb25zdCBpdGVtID0gUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmV4dHJhY3RSZWdpb25EYXRhKCRsYXlvdXRSZWdpb24pO1xuICAgIGl0ZW0uc3RhdGUgPSB7XG4gICAgICBvcGVuZWQ6IHRydWUsXG4gICAgfTtcbiAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgaXRlbS5kYXRhLmlkID0gYGxheW91dC50ZW1wbGF0ZVJlZ2lvbi4ke2l0ZW0uZGF0YS5yZWdpb25LZXl9YDtcbiAgICBpdGVtLmlkID0gYHBzal8ke2l0ZW0uZGF0YS5pZH1gLnJlcGxhY2UoL1xcLi9nLCAnXycpO1xuICAgIGl0ZW0uZGF0YS5lbnRpdHlUeXBlID0gJ2xheW91dCc7XG4gICAgY29uc3QgdGVtcGxhdGVSZWdpb25zID0gW107XG5cbiAgICAvLyBmaW5kIG1hdGVyaWFsc1xuICAgIGNvbnN0ICRsYXlvdXRNYXRlcmlhbHMgPSAkbGF5b3V0UmVnaW9uLmZpbmQoJz5bZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICAkbGF5b3V0TWF0ZXJpYWxzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0ICRsYXlvdXRNYXRlcmlhbCA9ICQodGhpcyk7XG4gICAgICBjb25zdCByZXN1bHQgPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQucHJvY2Vzc0xheW91dE1hdGVyaWFsKCRsYXlvdXRNYXRlcmlhbCwgaXRlbS5pZCwgaXRlbS5kYXRhLnJlZ2lvbktleSk7XG4gICAgICBjb25zdCBsYXlvdXRNYXRlcmlhbEl0ZW0gPSByZXN1bHQubGF5b3V0TWF0ZXJpYWw7XG4gICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcbiAgICAgICAgdGVtcGxhdGVSZWdpb25zLnB1c2gocmVnaW9uKTtcbiAgICAgIH0pO1xuICAgICAgaXRlbS5jaGlsZHJlbi5wdXNoKGxheW91dE1hdGVyaWFsSXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbSxcbiAgICAgIHRlbXBsYXRlUmVnaW9ucyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHByb2Nlc3NMYXlvdXRNYXRlcmlhbCgkbGF5b3V0TWF0ZXJpYWwsIHByZWZpeCwgcmVnaW9uS2V5KSB7XG4gICAgY29uc3QgbWF0ZXJpYWxJbmRleCA9ICRsYXlvdXRNYXRlcmlhbC5kYXRhKCdtYXRlcmlhbEluZGV4Jyk7XG4gICAgY29uc3QgbWF0ZXJpYWxQYXRoID0gJGxheW91dE1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsUGF0aCcpO1xuICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICB0ZXh0OiBgJHtcbiAgICAgICAgbWF0ZXJpYWxQYXRoID09PSAnY29yZS5mcm9udGVuZC1tb25zdGVyLWNvcmUuZ2VuZXJhbC5jb250ZW50LXBsYWNlaG9sZGVyJ1xuICAgICAgICAgID8gJ01haW4gRW50aXR5IENvbnRlbnQnXG4gICAgICAgICAgOiBgTWF0ZXJpYWw6ICR7bWF0ZXJpYWxJbmRleH1gfVxuICAgICAgYCxcbiAgICAgIHR5cGU6ICdtYXRlcmlhbCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiBgJHtwcmVmaXh9LiR7bWF0ZXJpYWxJbmRleH1gLFxuICAgICAgICBtYXRlcmlhbEluZGV4LFxuICAgICAgICBtYXRlcmlhbFBhdGgsXG4gICAgICAgIGVkaXRhYmxlS2V5czogJGxheW91dE1hdGVyaWFsLmRhdGEoJ2VkaXRhYmxlS2V5cycpLFxuICAgICAgICBub2RlOiAkbGF5b3V0TWF0ZXJpYWwsXG4gICAgICAgIHJlZ2lvbktleSxcbiAgICAgICAgZW50aXR5VHlwZTogJ2xheW91dCcsXG4gICAgICB9LFxuICAgICAgaWQ6IGBwc2pfJHtwcmVmaXh9XyR7bWF0ZXJpYWxJbmRleH1gLFxuICAgIH07XG4gICAgY29uc3QgdGVtcGxhdGVSZWdpb25zID0gW107XG4gICAgY29uc3QgJHJlZ2lvbnMgPSAkbGF5b3V0TWF0ZXJpYWwuZmluZCgnPiAubS1tb25zdGVyLWNvbnRlbnRfX2NvbnRlbnQnKTtcbiAgICAkcmVnaW9ucy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQucHJvY2Vzc1RlbXBsYXRlUmVnaW9uKCQodGhpcykpO1xuICAgICAgdGVtcGxhdGVSZWdpb25zLnB1c2gocmVzdWx0KTtcbiAgICB9KTtcbiAgICBpZiAodGVtcGxhdGVSZWdpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGl0ZW0uZGF0YS5pc0NvbnRlbnQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbGF5b3V0TWF0ZXJpYWw6IGl0ZW0sXG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnMsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9jZXNzVGVtcGxhdGVSZWdpb24oJHRlbXBsYXRlUmVnaW9uKSB7XG4gICAgY29uc3QgaXRlbSA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5leHRyYWN0UmVnaW9uRGF0YSgkdGVtcGxhdGVSZWdpb24pO1xuICAgIGl0ZW0uc3RhdGUgPSB7XG4gICAgICBvcGVuZWQ6IHRydWUsXG4gICAgfTtcbiAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgaXRlbS5kYXRhLmVudGl0eURlcGVuZGVudCA9ICR0ZW1wbGF0ZVJlZ2lvbi5kYXRhKCdyZWdpb25FbnRpdHlEZXBlbmRlbnQnKSA9PT0gMTtcblxuICAgIGNvbnN0IHByZWZpeCA9IGl0ZW0uZGF0YS5lbnRpdHlEZXBlbmRlbnQgPyAnY29udGVudCcgOiAndGVtcGxhdGUnO1xuICAgIGl0ZW0uZGF0YS5lbnRpdHlUeXBlID0gaXRlbS5kYXRhLmVudGl0eURlcGVuZGVudCA/ICdlbnRpdHknIDogJ3RlbXBsYXRlJztcbiAgICBpdGVtLmRhdGEuaWQgPSBgJHtwcmVmaXh9LnRlbXBsYXRlUmVnaW9uLiR7aXRlbS5kYXRhLnJlZ2lvbktleX1gO1xuICAgIGl0ZW0uaWQgPSBgcHNqXyR7aXRlbS5kYXRhLmlkfWAucmVwbGFjZSgvXFwuL2csICdfJyk7XG5cbiAgICBpZiAoaXRlbS5kYXRhLmVudGl0eURlcGVuZGVudCkge1xuICAgICAgaXRlbS50eXBlID0gJ2NvbnRlbnRUZW1wbGF0ZVJlZ2lvbic7XG4gICAgfVxuICAgIGNvbnN0ICRyZWdpb25NYXRlcmlhbHMgPSAkdGVtcGxhdGVSZWdpb24uZmluZCgnPltkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICRyZWdpb25NYXRlcmlhbHMuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgY29uc3QgbWF0ZXJpYWwgPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQucHJvY2Vzc1RlbXBsYXRlUmVnaW9uTWF0ZXJpYWwoXG4gICAgICAgICQodGhpcyksXG4gICAgICAgIGl0ZW0uZGF0YS5pZCxcbiAgICAgICAgcHJlZml4XG4gICAgICApO1xuICAgICAgbWF0ZXJpYWwuZGF0YS5yZWdpb25LZXkgPSBpdGVtLmRhdGEucmVnaW9uS2V5O1xuICAgICAgbWF0ZXJpYWwuaWQgPSBgcHNqXyR7bWF0ZXJpYWwuZGF0YS5pZH1gLnJlcGxhY2UoL1xcLi9nLCAnXycpO1xuICAgICAgaXRlbS5jaGlsZHJlbi5wdXNoKG1hdGVyaWFsKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9jZXNzVGVtcGxhdGVSZWdpb25NYXRlcmlhbCgkcmVnaW9uTWF0ZXJpYWwsIHByZWZpeCwgZW50aXR5VHlwZSkge1xuICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSAkcmVnaW9uTWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxJbmRleCcpO1xuICAgIGNvbnN0IG1hdGVyaWFsUGF0aCA9ICRyZWdpb25NYXRlcmlhbC5kYXRhKCdtYXRlcmlhbFBhdGgnKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogYE1hdGVyaWFsOiAke21hdGVyaWFsSW5kZXh9YCxcbiAgICAgIHR5cGU6ICdtYXRlcmlhbCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiBgJHtwcmVmaXh9LiR7bWF0ZXJpYWxJbmRleH1gLFxuICAgICAgICBtYXRlcmlhbEluZGV4LFxuICAgICAgICBtYXRlcmlhbFBhdGgsXG4gICAgICAgIGVkaXRhYmxlS2V5czogJHJlZ2lvbk1hdGVyaWFsLmRhdGEoJ2VkaXRhYmxlS2V5cycpLFxuICAgICAgICBub2RlOiAkcmVnaW9uTWF0ZXJpYWwsXG4gICAgICAgIGVudGl0eVR5cGUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZXh0cmFjdFJlZ2lvbkRhdGEoJG5vZGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogJG5vZGUuZGF0YSgnY29udGVudERlc2NyaXB0aW9uJyksXG4gICAgICB0eXBlOiAndGVtcGxhdGVSZWdpb24nLFxuICAgICAgZGF0YToge1xuICAgICAgICByZWdpb25JZDogJG5vZGUuZGF0YSgncmVnaW9uSWQnKSxcbiAgICAgICAgcmVnaW9uS2V5OiAkbm9kZS5kYXRhKCdyZWdpb25LZXknKSxcbiAgICAgICAgdW5pcXVlQ29udGVudElkOiAkbm9kZS5kYXRhKCd1bmlxdWVDb250ZW50SWQnKSxcbiAgICAgICAgbm9kZTogJG5vZGUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzZXJpYWxpemVQYWdlKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMucmVnaW9uc1N0cnVjdHVyZSkuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgY29uc3QgcmVnaW9uID0gdGhpcy5yZWdpb25zU3RydWN0dXJlW3JlZ2lvbktleV07XG4gICAgICByZXN1bHRbcmVnaW9uLmtleV0gPSByZWdpb24uc2VyaWFsaXplKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIG1hdGVyaWFsc0J5UmVnaW9ucygpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMucmVnaW9uc1N0cnVjdHVyZVtyZWdpb25LZXldO1xuICAgICAgcmVzdWx0W3JlZ2lvbi5rZXldID0gcmVnaW9uLm1hdGVyaWFsc0RlY2woKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1NpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdW5pcWlkIChwcmVmaXgsIG1vcmVFbnRyb3B5KSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvdW5pcWlkL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gIHJldmlzZWQgYnk6IEthbmtyZWx1bmUgKGh0dHA6Ly93d3cud2ViZmFrdG9yeS5pbmZvLylcbiAgLy8gICAgICBub3RlIDE6IFVzZXMgYW4gaW50ZXJuYWwgY291bnRlciAoaW4gbG9jdXR1cyBnbG9iYWwpIHRvIGF2b2lkIGNvbGxpc2lvblxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRpZCA9IHVuaXFpZCgpXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJHJlc3VsdCA9ICRpZC5sZW5ndGggPT09IDEzXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiB2YXIgJGlkID0gdW5pcWlkKCdmb28nKVxuICAvLyAgIGV4YW1wbGUgMjogdmFyICRyZXN1bHQgPSAkaWQubGVuZ3RoID09PSAoMTMgKyAnZm9vJy5sZW5ndGgpXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgJGlkID0gdW5pcWlkKCdiYXInLCB0cnVlKVxuICAvLyAgIGV4YW1wbGUgMzogdmFyICRyZXN1bHQgPSAkaWQubGVuZ3RoID09PSAoMjMgKyAnYmFyJy5sZW5ndGgpXG4gIC8vICAgcmV0dXJucyAzOiB0cnVlXG5cbiAgaWYgKHR5cGVvZiBwcmVmaXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcHJlZml4ID0gJydcbiAgfVxuXG4gIHZhciByZXRJZFxuICB2YXIgX2Zvcm1hdFNlZWQgPSBmdW5jdGlvbiAoc2VlZCwgcmVxV2lkdGgpIHtcbiAgICBzZWVkID0gcGFyc2VJbnQoc2VlZCwgMTApLnRvU3RyaW5nKDE2KSAvLyB0byBoZXggc3RyXG4gICAgaWYgKHJlcVdpZHRoIDwgc2VlZC5sZW5ndGgpIHtcbiAgICAgIC8vIHNvIGxvbmcgd2Ugc3BsaXRcbiAgICAgIHJldHVybiBzZWVkLnNsaWNlKHNlZWQubGVuZ3RoIC0gcmVxV2lkdGgpXG4gICAgfVxuICAgIGlmIChyZXFXaWR0aCA+IHNlZWQubGVuZ3RoKSB7XG4gICAgICAvLyBzbyBzaG9ydCB3ZSBwYWRcbiAgICAgIHJldHVybiBBcnJheSgxICsgKHJlcVdpZHRoIC0gc2VlZC5sZW5ndGgpKS5qb2luKCcwJykgKyBzZWVkXG4gICAgfVxuICAgIHJldHVybiBzZWVkXG4gIH1cblxuICB2YXIgJGdsb2JhbCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IEdMT0JBTClcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge31cbiAgdmFyICRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1c1xuICAkbG9jdXR1cy5waHAgPSAkbG9jdXR1cy5waHAgfHwge31cblxuICBpZiAoISRsb2N1dHVzLnBocC51bmlxaWRTZWVkKSB7XG4gICAgLy8gaW5pdCBzZWVkIHdpdGggYmlnIHJhbmRvbSBpbnRcbiAgICAkbG9jdXR1cy5waHAudW5pcWlkU2VlZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDB4NzViY2QxNSlcbiAgfVxuICAkbG9jdXR1cy5waHAudW5pcWlkU2VlZCsrXG5cbiAgLy8gc3RhcnQgd2l0aCBwcmVmaXgsIGFkZCBjdXJyZW50IG1pbGxpc2Vjb25kcyBoZXggc3RyaW5nXG4gIHJldElkID0gcHJlZml4XG4gIHJldElkICs9IF9mb3JtYXRTZWVkKHBhcnNlSW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCwgMTApLCA4KVxuICAvLyBhZGQgc2VlZCBoZXggc3RyaW5nXG4gIHJldElkICs9IF9mb3JtYXRTZWVkKCRsb2N1dHVzLnBocC51bmlxaWRTZWVkLCA1KVxuICBpZiAobW9yZUVudHJvcHkpIHtcbiAgICAvLyBmb3IgbW9yZSBlbnRyb3B5IHdlIGFkZCBhIGZsb2F0IGxvd2VyIHRvIDEwXG4gICAgcmV0SWQgKz0gKE1hdGgucmFuZG9tKCkgKiAxMCkudG9GaXhlZCg4KS50b1N0cmluZygpXG4gIH1cblxuICByZXR1cm4gcmV0SWRcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3VuaXFpZC5qc1xuICoqLyIsImNsYXNzIERhdGFQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSwgcHJvdmlkZWRLZXlzKSB7XG4gICAgdGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgdGhpcy5wcm92aWRlZEtleXMgPSBwcm92aWRlZEtleXM7XG4gICAgdGhpcy5hc3NvY2lhdGlvbnMgPSB7fTtcbiAgICB0aGlzLmFzc29jaWF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHtFZGl0YWJsZX1cbiAgICovXG4gIHN0YXRpYyBnZXQgZWRpdGFibGUoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5Gcm9udGVuZE1vbnN0ZXIuVmlzdWFsRnJhbWUuZWRpdGFibGU7XG4gIH1cblxuICBhc3NvY2lhdGUoKSB7XG4gICAgdGhpcy5hc3NvY2lhdGlvbnMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnByb3ZpZGVkS2V5cykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgY29uc3QgcmVnaW9uID0gdGhpcy5wcm92aWRlZEtleXNbcmVnaW9uS2V5XTtcbiAgICAgIGNvbnN0ICRyZWdpb24gPSAkKGBbZGF0YS1yZWdpb24ta2V5PVwiJHtyZWdpb25LZXl9XCJdYCkuZmlyc3QoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGAlY1JlZ2lvbjogJHtyZWdpb25LZXl9YCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkOyBiYWNrZ3JvdW5kOiAjMzMzJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZWdpb24pO1xuICAgICAgY29uc3QgbWF0ZXJpYWxzID0ge307XG4gICAgICBPYmplY3Qua2V5cyhyZWdpb24pLmZvckVhY2gobWF0ZXJpYWxLZXkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhS2V5cyA9IHJlZ2lvblttYXRlcmlhbEtleV07XG4gICAgICAgIGNvbnN0ICRtYXRlcmlhbCA9ICRyZWdpb24uZmluZChgW2RhdGEtbWF0ZXJpYWwtaW5kZXg9XCIke21hdGVyaWFsS2V5fVwiXWApLmZpcnN0KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAlY01hdGVyaWFsOiAke21hdGVyaWFsS2V5fWAsICdjb2xvcjogI2ZmZjsgZm9udC13ZWlnaHQ6IGJvbGQ7IGJhY2tncm91bmQ6ICM2OWYnKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJG1hdGVyaWFsKTtcbiAgICAgICAgaWYgKCRtYXRlcmlhbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbWF0ZXJpYWxzW21hdGVyaWFsS2V5XSA9IHtcbiAgICAgICAgICBkYXRhS2V5cyxcbiAgICAgICAgICAkbWF0ZXJpYWwsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsRWRpdGFibGVLZXlzID0gJG1hdGVyaWFsLmRhdGEoJ2VkaXRhYmxlS2V5cycpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVNYXRlcmlhbEVkaXQobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRtYXRlcmlhbCwgZGF0YUtleXMpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFzc29jaWF0aW9uc1tyZWdpb25LZXldID0ge1xuICAgICAgICAkcmVnaW9uLFxuICAgICAgICBtYXRlcmlhbHMsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGl6ZU1hdGVyaWFsRWRpdChtYXRlcmlhbEVkaXRhYmxlS2V5cywgJHJvb3QsIGRhdGFLZXlzLCBwcmVmaXggPSAnJykge1xuICAgIGRhdGFLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IG9iaiA9IG1hdGVyaWFsRWRpdGFibGVLZXlzW2tleV0gfHwgJ05PX1NVQ0hfS0VZJztcbiAgICAgIGlmIChvYmogPT09ICdOT19TVUNIX0tFWScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9iaiA9PT0gT2JqZWN0KG9iaikpIHtcbiAgICAgICAgLy8gaXQncyByZWN1cnNpdmVcbiAgICAgICAgLy8gZmlyc3QgLSBmaW5kIGFsbCBibG9ja3NcbiAgICAgICAgY29uc3QgJGJsb2NrcyA9ICRyb290LmZpbmQoYFtkYXRhLXJlY3Vyc2l2ZS1pdGVtPVwiJHtrZXl9XCJdYCk7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgICRibG9ja3MuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJWMgUmVjdXJzaXZlIGl0ZW0gJHtrZXl9ICMke2NvdW50ZXJ9YCwgJ2JhY2tncm91bmQ6ICMyMjI7IGNvbG9yOiAjYmFkYTU1Jyk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgICAgdGhhdC5pbml0aWFsaXplTWF0ZXJpYWxFZGl0KG9iaiwgJHRoaXMsIE9iamVjdC5rZXlzKG9iaiksICdpdGVtLicpO1xuICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpdCdzIHBsYWluIGZpZWxkXG4gICAgICAgIGNvbnN0ICRub2RlID0gJHJvb3QuZmluZChgW2RhdGEtZWRpdGFibGUta2V5PVwiJHtwcmVmaXh9JHtrZXl9XCJdYCkuZmlyc3QoKTtcbiAgICAgICAgaWYgKCRub2RlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBEYXRhUHJvdmlkZXIuZWRpdGFibGUuaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCVjIFBsYWluIGZpZWxkIGVkaXRhYmxlICR7cHJlZml4fSR7a2V5fWAsICdiYWNrZ3JvdW5kOiAjMjIyOyBjb2xvcjogI2JhZGE1NScpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygkbm9kZVswXS5vdXRlckhUTUwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICBzZXJpYWxpemVLZXlzKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMuYXNzb2NpYXRpb25zKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICBjb25zdCByZWdpb24gPSB0aGlzLmFzc29jaWF0aW9uc1tyZWdpb25LZXldO1xuICAgICAgY29uc3QgJHJlZ2lvbiA9IHJlZ2lvbi4kcmVnaW9uO1xuICAgICAgcmVzdWx0W3JlZ2lvbktleV0gPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKHJlZ2lvbi5tYXRlcmlhbHMpLmZvckVhY2gobWF0ZXJpYWxLZXkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhS2V5cyA9IHJlZ2lvbi5tYXRlcmlhbHNbbWF0ZXJpYWxLZXldLmRhdGFLZXlzO1xuICAgICAgICBjb25zdCAkbWF0ZXJpYWwgPSByZWdpb24ubWF0ZXJpYWxzW21hdGVyaWFsS2V5XS4kbWF0ZXJpYWw7XG4gICAgICAgIHJlc3VsdFtyZWdpb25LZXldW21hdGVyaWFsS2V5XSA9IHRoaXMuc2VyaWFsaXplTWF0ZXJpYWwoXG4gICAgICAgICAgcmVnaW9uS2V5LFxuICAgICAgICAgIG1hdGVyaWFsS2V5LFxuICAgICAgICAgIGRhdGFLZXlzLFxuICAgICAgICAgICRyZWdpb24sXG4gICAgICAgICAgJG1hdGVyaWFsXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBjbGFzczogdGhpcy5jbGFzc05hbWUsXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5maWxsQ29uZmlnKGRhdGEpO1xuICB9XG5cbiAgZmlsbENvbmZpZyhkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBzZXJpYWxpemVNYXRlcmlhbChyZWdpb25LZXksIG1hdGVyaWFsS2V5LCBkYXRhS2V5cywgJHJlZ2lvbiwgJG1hdGVyaWFsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YVByb3ZpZGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRGF0YVByb3ZpZGVyLmpzXG4gKiovIiwiaW1wb3J0IFN0YXRpY0NvbnRlbnQgZnJvbSAnLi9wcm92aWRlcnMvU3RhdGljQ29udGVudCc7XG5cbmNsYXNzIERhdGFQcm92aWRlckZhY3Rvcnkge1xuICBzdGF0aWMgZmFjdG9yeShwcm92aWRlckRlY2wsIHByb3ZpZGVkS2V5cykge1xuICAgIGxldCBwcm92aWRlciA9IG51bGw7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gcHJvdmlkZXJEZWNsLmNsYXNzTmFtZVxuICAgICAgfHwgJ0RvdFBsYW50XFxcXE1vbnN0ZXJcXFxcRGF0YUVudGl0eVxcXFxTdGF0aWNDb250ZW50UHJvdmlkZXInO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICBjYXNlICdEb3RQbGFudFxcXFxNb25zdGVyXFxcXERhdGFFbnRpdHlcXFxcU3RhdGljQ29udGVudFByb3ZpZGVyJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHByb3ZpZGVyID0gbmV3IFN0YXRpY0NvbnRlbnQocHJvdmlkZWRLZXlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3ZpZGVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFQcm92aWRlckZhY3Rvcnk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXJGYWN0b3J5LmpzXG4gKiovIiwiaW1wb3J0IGFsbEVkaXRhYmxlcyBmcm9tICcuL2VkaXRhYmxlcy9hbGwnO1xuXG5jbGFzcyBFZGl0YWJsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZWRpdGFibGVzQnlUeXBlID0ge307XG4gICAgLy8gaW5pdGlhbGl6ZSBiYXNlIGJ1aWxkLWluIGVkaXRhYmxlc1xuICAgIGFsbEVkaXRhYmxlcygpO1xuICAgIHRoaXMuZWRpdGFibGVzQnlUeXBlID0gd2luZG93Lk1PTlNURVJfRURJVEFCTEVTO1xuICB9XG5cbiAgc2VyaWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBjb25zdCBlZGl0YWJsZSA9ICRub2RlLmRhdGEoJ2VkaXRhYmxlUGFyYW1zJyk7XG4gICAgaWYgKHR5cGVvZihlZGl0YWJsZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCB0eXBlID0gZWRpdGFibGUuaGFzT3duUHJvcGVydHkoJ3R5cGUnKSA/IGVkaXRhYmxlLnR5cGUgOiAnc3RyaW5nJztcbiAgICBpZiAodGhpcy5lZGl0YWJsZXNCeVR5cGUuaGFzT3duUHJvcGVydHkodHlwZSkgPT09IGZhbHNlKSB7XG4gICAgICB0eXBlID0gJ3N0cmluZyc7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwb3J0VmFyaWFibGUgPSBlZGl0YWJsZS5oYXNPd25Qcm9wZXJ0eSgndGFyZ2V0JykgPyBlZGl0YWJsZS50YXJnZXQgOiAnZGF0YSc7XG5cbiAgICByZXR1cm4gdGhpcy5lZGl0YWJsZXNCeVR5cGVbdHlwZV0uc2VyaWFsaXplTm9kZSgkbm9kZSwgZXhwb3J0VmFyaWFibGUpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3QgdHlwZSA9ICRub2RlLmRhdGEoJ2VkaXRhYmxlLXR5cGUnKSB8fCAndW5lZGl0YWJsZSc7XG4gICAgaWYgKHR5cGUgPT09ICd1bmVkaXRhYmxlJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdGFibGUgPSB0aGlzLmVkaXRhYmxlc0J5VHlwZVt0eXBlXSB8fCB0aGlzLmVkaXRhYmxlc0J5VHlwZS5zdHJpbmc7XG4gICAgcmV0dXJuIGVkaXRhYmxlLmluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdGFibGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9FZGl0YWJsZS5qc1xuICoqLyIsImNsYXNzIEhhc2hBcGkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZ1bmN0aW9uQ2FsbHMgPSB7fTtcblxuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaC5tYXRjaCgvI2hhc2hBcGk6KC4qPyk6XFwvaGFzaEFwaS8pO1xuICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgY29uc3QgZnVuY3Rpb25DYWxscyA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoZXNbMV0pKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZnVuY3Rpb25DYWxscykge1xuICAgICAgICAgIGlmIChpdGVtLmZ1bmMpIHtcbiAgICAgICAgICAgIHRoaXMuZnVuY3Rpb25DYWxsc1tpdGVtLmZ1bmNdID0gaXRlbS5hcmdzIHx8IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNob3VsZENhbGwoZnVuYykge1xuICAgIHJldHVybiB0aGlzLmZ1bmN0aW9uQ2FsbHNbZnVuY10gfHwgZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGFzaEFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanNcbiAqKi8iLCJpbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi9GcmFtZUFwaSc7XG5pbXBvcnQgdW5pcXVlSWQgZnJvbSAnLi8uLi91bmlxaWQnO1xuaW1wb3J0IERhdGFQcm92aWRlckZhY3RvcnkgZnJvbSAnLi9EYXRhUHJvdmlkZXJGYWN0b3J5JztcbmltcG9ydCBFZGl0YWJsZSBmcm9tICcuL0VkaXRhYmxlJztcblxuY2xhc3MgVmlzdWFsRnJhbWVcbntcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgRnJhbWVBcGkuYmluZE1lc3NhZ2VMaXN0ZW5lcih0aGlzKTtcbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YSA9IG51bGw7XG4gICAgLyogZ2xvYmFsIHdpbmRvdzpmYWxzZSAqL1xuICAgIHRoaXMucGFyZW50V2luZG93ID0gd2luZG93LnBhcmVudDtcbiAgICAvKiogQHZhciBGcm9udGVuZE1vbnN0ZXIgKi9cbiAgICB0aGlzLnBhcmVudE1vbnN0ZXIgPSB0aGlzLnBhcmVudFdpbmRvdy5Gcm9udGVuZE1vbnN0ZXI7XG4gICAgdGhpcy5wYXJlbnRCdWlsZGVyID0gdGhpcy5wYXJlbnRNb25zdGVyLmJ1aWxkZXI7XG4gICAgdGhpcy5jdXJyZW50TW9uc3RlckNvbnRlbnQgPSBmYWxzZTtcbiAgICB0aGlzLmVkaXRhYmxlID0gbmV3IEVkaXRhYmxlKCk7XG4gICAgLy8gdGhpcy5tYWtlSXRNb3ZlKCk7XG4gICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICAkKCgpID0+IHtcbiAgICAgIHRoaXMucGFyZW50QnVpbGRlci5wYWdlQ2hhbmdlZCgpO1xuICAgICAgdGhpcy5pbml0UHJvdmlkZXJzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5Nb25zdGVyRWRpdERhdGEgPSB3aW5kb3cuTU9OU1RFUl9FRElUX01PREVfREFUQTtcbiAgfVxuXG4gIGluaXRQcm92aWRlcnMoKSB7XG4gICAgdGhpcy5wcm92aWRlcnMgPSB7XG4gICAgICBsYXlvdXQ6IHRoaXMuZ2V0UHJvdmlkZXJzKHRoaXMuTW9uc3RlckVkaXREYXRhLmxheW91dCksXG4gICAgICB0ZW1wbGF0ZTogdGhpcy5nZXRQcm92aWRlcnModGhpcy5Nb25zdGVyRWRpdERhdGEudGVtcGxhdGUpLFxuICAgICAgZW50aXR5OiB0aGlzLmdldFByb3ZpZGVycyh0aGlzLk1vbnN0ZXJFZGl0RGF0YS5lbnRpdHkpLFxuICAgIH07XG4gIH1cblxuICBzZXQgcGFnZVN0cnVjdHVyZUpzb24odmFsdWUpIHtcbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHBhZ2VTdHJ1Y3R1cmVKc29uKCkge1xuICAgIHJldHVybiB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YTtcbiAgfVxuXG4gIGdldFByb3ZpZGVycyhhcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhhcnIucHJvdmlkZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBwcm92aWRlckRlY2wgPSBhcnIucHJvdmlkZXJzW2tleV07XG4gICAgICByZXN1bHRba2V5XSA9IERhdGFQcm92aWRlckZhY3RvcnkuZmFjdG9yeShcbiAgICAgICAgcHJvdmlkZXJEZWNsLFxuICAgICAgICBhcnIucHJvdmlkZWRLZXlzW2tleV0gfHwge31cbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldCAkbW9uc3RlckNvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGUpIHtcbiAgICAgIHJldHVybiB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hNb25zdGVyQ29udGVudENhY2hlKCk7XG4gICAgcmV0dXJuIHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGU7XG4gIH1cblxuICByZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpIHtcbiAgICB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlID0ge307XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgJCh0aGlzLnNldHRpbmdzWydtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InXSkuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgaWYgKCF0aGF0LmN1cnJlbnRNb25zdGVyQ29udGVudCkge1xuICAgICAgICB0aGF0LmN1cnJlbnRNb25zdGVyQ29udGVudCA9ICQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyk7XG4gICAgICB9XG4gICAgICB0aGF0LiRtb25zdGVyQ29udGVudENhY2hlWyQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyldID0gJCh0aGlzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUhhbmRsZXJzKCkge1xuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsICYmIHRoaXMuJGhhbmRsZXJzKSB7XG4gICAgICB0aGlzLiRoYW5kbGVycy5jc3MoXG4gICAgICAgICd0b3AnLFxuICAgICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLnBvc2l0aW9uKCkudG9wXG4gICAgICAgICAgKyB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLmhlaWdodCgpXG4gICAgICAgICAgLSB0aGlzLiRoYW5kbGVycy5oZWlnaHQoKVxuICAgICAgKTtcbiAgICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RNYXRlcmlhbCgkbWF0ZXJpYWwpIHtcbiAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCA9PT0gJG1hdGVyaWFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgIH1cbiAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsID0gJG1hdGVyaWFsO1xuICAgIHRoaXMudXBkYXRlSGFuZGxlcnMoKTtcbiAgICB0aGlzLiRoYW5kbGVycy5zaG93KCk7XG4gIH1cblxuICBzZXJpYWxpemVDb250ZW50KGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgT2JqZWN0LmtleXModGhpcy4kbW9uc3RlckNvbnRlbnQpLmZvckVhY2godW5pcXVlQ29udGVudElkID0+IHtcbiAgICAgIGNvbnN0ICRtb25zdGVyID0gdGhpcy4kbW9uc3RlckNvbnRlbnRbdW5pcXVlQ29udGVudElkXTtcbiAgICAgIHJlc3VsdFskbW9uc3Rlci5kYXRhKCd1bmlxdWVDb250ZW50SWQnKV0gPSB0aGF0LnNlcmlhbGl6ZVVuaXF1ZUNvbnRlbnQoJG1vbnN0ZXIpO1xuICAgIH0pO1xuICAgIHRoaXMuc2VuZFRvQnVpbGRlcihjYWxsYmFjaywgW3Jlc3VsdF0pO1xuICB9XG5cbiAgc2VyaWFsaXplVW5pcXVlQ29udGVudCgkbW9uc3RlckNvbnRlbnQpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICByZXN1bHQudW5pcXVlQ29udGVudElkID0gJG1vbnN0ZXJDb250ZW50LmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpO1xuICAgIHJlc3VsdC5tYXRlcmlhbHMgPSB7fTtcbiAgICAkbW9uc3RlckNvbnRlbnQuZmluZCgnW2RhdGEtaXMtbWF0ZXJpYWw9XFwnMVxcJ10nKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCBtYXRlcmlhbCA9IHt9O1xuICAgICAgbWF0ZXJpYWwuYmxvY2sgPSAkKHRoaXMpLmRhdGEoJ21hdGVyaWFsQmxvY2snKTtcbiAgICAgIHJlc3VsdC5tYXRlcmlhbHNbJCh0aGlzKS5kYXRhKCdtYXRlcmlhbEluZGV4JyldID0gbWF0ZXJpYWw7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIFZpc3VhbEZyYW1lIHNldHRpbmdzLlxuICAgKiBVc2VzIFZpc3VhbEZyYW1lU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuVmlzdWFsRnJhbWVTZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICdtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InOiAnLm0tbW9uc3Rlci1jb250ZW50X19jb250ZW50JyxcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHVzZXJTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgfVxuXG4gIHNlbmRUb0J1aWxkZXIoZnVuYywgYXJncykge1xuICAgIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMucGFyZW50V2luZG93LCBmdW5jLCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JtU3VibWl0KGRhdGEpIHtcbiAgICBjb25zdCAkZm9ybSA9ICQoJzxmb3JtIG1ldGhvZD1cIlBPU1RcIj48L2Zvcm0+Jyk7XG4gICAgY29uc3QgJGlucHV0ID0gJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX19qc29uXCI+Jyk7XG4gICAgY29uc3QgJGNzcmYgPSAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiPicpO1xuXG4gICAgJGNzcmZcbiAgICAgIC5hdHRyKCduYW1lJywgJCgnbWV0YVtuYW1lPWNzcmYtcGFyYW1dJykuYXR0cignY29udGVudCcpKVxuICAgICAgLnZhbCgkKCdtZXRhW25hbWU9Y3NyZi10b2tlbl0nKS5hdHRyKCdjb250ZW50JykpXG4gICAgICAuYXBwZW5kVG8oJGZvcm0pO1xuXG4gICAgJGlucHV0XG4gICAgICAudmFsKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgLmFwcGVuZFRvKCRmb3JtKTtcblxuICAgICRmb3JtWzBdLnN1Ym1pdCgpO1xuICB9XG5cbiAgbmV3QmxvY2sobWF0ZXJpYWxOYW1lLCBzZWxlY3RlZEVudGl0eSwgcmVnaW9uTmFtZSkge1xuICAgIC8vIEB0b2RvIEFkZCBsb2FkZXIgaGVyZSBhcyB3ZSBhcmUgdXNpbmcgZm9ybSBwb3N0ICFcbiAgICBjb25zdCByYW5kb21JbmRleCA9IHVuaXF1ZUlkKCdtYXQnKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5pdGVyYXRlVGVtcGxhdGVUeXBlKHRoaXMucGFnZVN0cnVjdHVyZUpzb24pO1xuICAgIGlmIChzZWxlY3RlZEVudGl0eSA9PT0gJ2VudGl0eScpIHtcbiAgICAgIGRhdGEuZW50aXR5Lm1hdGVyaWFsc0J5UmVnaW9uRGVjbFtyZWdpb25OYW1lXS5kZWNsW3JhbmRvbUluZGV4XSA9IHtcbiAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsTmFtZSxcbiAgICAgIH07XG4gICAgICBkYXRhLmVudGl0eS5tYXRlcmlhbHNCeVJlZ2lvbkRlY2xbcmVnaW9uTmFtZV0ubWF0ZXJpYWxzT3JkZXIucHVzaChyYW5kb21JbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGFbc2VsZWN0ZWRFbnRpdHldLnRlbXBsYXRlUmVnaW9uc1tyZWdpb25OYW1lXS5tYXRlcmlhbHNEZWNscy5kZWNsW3JhbmRvbUluZGV4XSA9IHtcbiAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsTmFtZSxcbiAgICAgIH07XG4gICAgICBkYXRhW3NlbGVjdGVkRW50aXR5XS50ZW1wbGF0ZVJlZ2lvbnNbcmVnaW9uTmFtZV0ubWF0ZXJpYWxzRGVjbHMubWF0ZXJpYWxzT3JkZXIucHVzaChyYW5kb21JbmRleCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByZXZpZXcoZGF0YSk7XG4gIH1cblxuICBwcmV2aWV3KGRhdGEgPSBudWxsKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEgfHwgdGhpcy5pdGVyYXRlVGVtcGxhdGVUeXBlKHRoaXMucGFnZVN0cnVjdHVyZUpzb24pO1xuICAgIG5ld0RhdGEuYWN0aW9uID0gJ3ByZXZpZXcnO1xuICAgIFZpc3VhbEZyYW1lLmZvcm1TdWJtaXQobmV3RGF0YSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5pdGVyYXRlVGVtcGxhdGVUeXBlKHRoaXMucGFnZVN0cnVjdHVyZUpzb24pO1xuICAgIGRhdGEuYWN0aW9uID0gJ3NhdmUnO1xuICAgIFZpc3VhbEZyYW1lLmZvcm1TdWJtaXQoZGF0YSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXRlcmF0ZVRlbXBsYXRlVHlwZShhcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBlbnRpdHk6IHtcbiAgICAgICAgbWF0ZXJpYWxzQnlSZWdpb25EZWNsOiB7fSxcbiAgICAgICAgcHJvdmlkZXJzOiB7fSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBhcnIuZm9yRWFjaChvYmogPT4ge1xuICAgICAgY29uc3Qga2V5ID0gb2JqLmRhdGEuaWQ7XG4gICAgICBjb25zdCByZWdpb25zUmVzdWx0ID0gVmlzdWFsRnJhbWUuaXRlcmF0ZVRlbXBsYXRlUmVnaW9ucyhvYmouY2hpbGRyZW4pO1xuICAgICAgLy8gbGF5b3V0IG9yIHRlbXBsYXRlXG4gICAgICByZXN1bHRba2V5XSA9IHtcbiAgICAgICAgdGVtcGxhdGVSZWdpb25zOiByZWdpb25zUmVzdWx0LnRlbXBsYXRlUmVnaW9ucyxcbiAgICAgICAgdGVtcGxhdGVSZWdpb25zT3JkZXI6IHJlZ2lvbnNSZXN1bHQudGVtcGxhdGVSZWdpb25zT3JkZXIsXG4gICAgICAgIHRlbXBsYXRlSWQ6IG9iai5kYXRhLnRlbXBsYXRlSWQsXG4gICAgICAgIHByb3ZpZGVyczoge30sXG4gICAgICB9O1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHJlZ2lvbnNSZXN1bHQuZW50aXR5TWF0ZXJpYWxzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHJlZ2lvbnNSZXN1bHQuZW50aXR5TWF0ZXJpYWxzKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICAgICAgcmVzdWx0LmVudGl0eS5tYXRlcmlhbHNCeVJlZ2lvbkRlY2xbcmVnaW9uS2V5XSA9IHJlZ2lvbnNSZXN1bHQuZW50aXR5TWF0ZXJpYWxzW3JlZ2lvbktleV07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0W2tleV0ucHJvdmlkZXJzID0gdGhpcy5zZXJpYWxpemVQcm92aWRlcnMoa2V5KTtcbiAgICB9KTtcbiAgICByZXN1bHQuZW50aXR5LnByb3ZpZGVycyA9IHRoaXMuc2VyaWFsaXplUHJvdmlkZXJzKCdlbnRpdHknKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2VyaWFsaXplUHJvdmlkZXJzKHR5cGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnByb3ZpZGVyc1t0eXBlXSkuZm9yRWFjaChwcm92aWRlcktleSA9PiB7XG4gICAgICByZXN1bHRbcHJvdmlkZXJLZXldID0gdGhpcy5wcm92aWRlcnNbdHlwZV1bcHJvdmlkZXJLZXldLnNlcmlhbGl6ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgaXRlcmF0ZVRlbXBsYXRlUmVnaW9ucyhhcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnM6IHt9LFxuICAgICAgdGVtcGxhdGVSZWdpb25zT3JkZXI6IFtdLFxuICAgICAgZW50aXR5TWF0ZXJpYWxzOiB7fSxcbiAgICB9O1xuICAgIGFyci5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAvLyBjb25zdCBrZXkgPSBvYmouZGF0YS5pZC5yZXBsYWNlKC9eLipcXC4vLCAnJyk7XG4gICAgICBjb25zdCByZWdpb25LZXkgPSBvYmouZGF0YS5yZWdpb25LZXk7XG4gICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zT3JkZXIucHVzaChyZWdpb25LZXkpO1xuICAgICAgY29uc3QgZW50aXR5RGVwZW5kZW50ID0gb2JqLmRhdGEuZW50aXR5RGVwZW5kZW50IHx8IGZhbHNlO1xuXG4gICAgICBjb25zdCByZWdpb25NYXRlcmlhbHMgPSBWaXN1YWxGcmFtZS5pdGVyYXRlTWF0ZXJpYWxzKG9iai5jaGlsZHJlbiwgcmVnaW9uS2V5KTtcblxuICAgICAgaWYgKGVudGl0eURlcGVuZGVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBhbiBleGFjdCB0ZW1wbGF0ZSByZWdpb25cbiAgICAgICAgcmVzdWx0LnRlbXBsYXRlUmVnaW9uc1tyZWdpb25LZXldID0ge1xuICAgICAgICAgIHJlZ2lvbklkOiBvYmouZGF0YS5yZWdpb25JZCxcbiAgICAgICAgICByZWdpb25LZXksXG4gICAgICAgICAgdW5pcXVlQ29udGVudElkOiBvYmouZGF0YS51bmlxdWVDb250ZW50SWQsXG4gICAgICAgICAgbWF0ZXJpYWxzRGVjbHM6IHJlZ2lvbk1hdGVyaWFscyxcbiAgICAgICAgICBlbnRpdHlEZXBlbmRlbnQsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zW3JlZ2lvbktleV0gPSB7XG4gICAgICAgICAgcmVnaW9uSWQ6IG9iai5kYXRhLnJlZ2lvbklkLFxuICAgICAgICAgIHJlZ2lvbktleSxcbiAgICAgICAgICB1bmlxdWVDb250ZW50SWQ6IG9iai5kYXRhLnVuaXF1ZUNvbnRlbnRJZCxcbiAgICAgICAgICBlbnRpdHlEZXBlbmRlbnQsXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRoaXMgaXMgZW50aXR5LWRlcGVuZGVudCByZWdpb25cbiAgICAgICAgcmVzdWx0LmVudGl0eU1hdGVyaWFsc1tyZWdpb25LZXldID0gcmVnaW9uTWF0ZXJpYWxzO1xuICAgICAgfVxuXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBpdGVyYXRlTWF0ZXJpYWxzKGFyciwgcmVnaW9uS2V5KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgZGVjbDoge30sXG4gICAgICBtYXRlcmlhbHNPcmRlcjogW10sXG4gICAgfTtcbiAgICBhcnIuZm9yRWFjaChvYmogPT4ge1xuICAgICAgY29uc3Qga2V5ID0gb2JqLmRhdGEubWF0ZXJpYWxJbmRleDtcbiAgICAgIHJlc3VsdC5kZWNsW2tleV0gPSB7XG4gICAgICAgIC8vIGVkaXRhYmxlc0tleXM6IG9iai5kYXRhLmVkaXRhYmxlS2V5cyxcbiAgICAgICAgbWF0ZXJpYWw6IG9iai5kYXRhLm1hdGVyaWFsUGF0aCxcbiAgICAgIH07XG4gICAgICByZXN1bHQubWF0ZXJpYWxzT3JkZXIucHVzaChrZXkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsRnJhbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZS5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBXWVNJV1lHIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBCYXNlRWRpdGFibGUuZnJhbWUkKCRub2RlKTtcbiAgICBjb25zdCBlZGl0b3IgPSBub2RlLmRhdGEoJ2VkaXRvcicpO1xuICAgIGlmIChlZGl0b3IpIHtcbiAgICAgIHJldHVybiBlZGl0b3IuZ2V0RGF0YSgpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZS5odG1sKCk7XG4gIH1cblxuICBpbml0aWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gJG5vZGVbMF07XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgYXV0b1BhcmFncmFwaDogZmFsc2UsXG4gICAgICBlbmFibGVDb250ZW50RWRpdGFibGU6IHRydWUsXG4gICAgICBpZ25vcmVFbXB0eVBhcmFncmFwaDogdHJ1ZSxcbiAgICAgIGVudGVyTW9kZTogd2luZG93LkNLRURJVE9SLkVOVEVSX0JSLFxuICAgIH07XG4gICAgLy8gJCgoKSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB3aW5kb3cuQWxsb3lFZGl0b3IuZWRpdGFibGUobm9kZSwgY29uZmlnKS5nZXQoJ25hdGl2ZUVkaXRvcicpO1xuICAgICAgJG5vZGUuZGF0YSgnZWRpdG9yJywgZWRpdG9yKTtcbiAgICAvLyB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdZU0lXWUc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvV1lTSVdZRy5qc1xuICoqLyIsImltcG9ydCBXWVNJV1lHIGZyb20gJy4vV1lTSVdZRyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICcuL2xpbmsnO1xuaW1wb3J0IFRleHRTdHJpbmcgZnJvbSAnLi9zdHJpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbGwoKSB7XG4gIGlmICh0eXBlb2Yod2luZG93Lk1PTlNURVJfRURJVEFCTEVTKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVMgPSB7fTtcbiAgfVxuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ3d5c2l3eWcnXSA9IG5ldyBXWVNJV1lHKCk7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snbGluayddID0gbmV3IExpbmsoKTtcbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWydpbWFnZSddID0gbmV3IEltYWdlKCk7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snc3RyaW5nJ10gPSBuZXcgVGV4dFN0cmluZygpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9hbGwuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgSW1hZ2UgZXh0ZW5kcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG4gICAgY29uc3QgJGltZyA9ICRub2RlLmZpbmQoJ2ltZycpLmZpcnN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNyYzogJGltZy5hdHRyKCdzcmMnKSxcbiAgICAgIGFsdDogJGltZy5hdHRyKCdhbHQnKSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2ltYWdlLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFZGl0YWJsZSBmcm9tICcuL0Jhc2VFZGl0YWJsZSc7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6ICRub2RlLmRhdGEoJ29yaWdpbmFsSHJlZicpID8gJG5vZGUuZGF0YSgnb3JpZ2luYWxIcmVmJykgOiAkbm9kZS5hdHRyKCdocmVmJyksXG4gICAgICBhbmNob3I6ICRub2RlLmh0bWwoKSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvbGluay5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBUZXh0U3RyaW5nIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBCYXNlRWRpdGFibGUuZnJhbWUkKCRub2RlKTtcbiAgICBjb25zdCBlZGl0b3IgPSBub2RlLmRhdGEoJ2VkaXRvcicpO1xuICAgIGlmIChlZGl0b3IpIHtcbiAgICAgIHJldHVybiBlZGl0b3IuZ2V0RGF0YSgpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZS5odG1sKCk7XG4gIH1cblxuICBpbml0aWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gJG5vZGVbMF07XG4gICAgLyogZ2xvYmFsIHdpbmRvdzpmYWxzZSAqL1xuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgYWxsb3dlZENvbnRlbnQ6ICdpIHUnLFxuICAgICAgdG9vbGJhcnM6IHtcbiAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgc2VsZWN0aW9uczogd2luZG93LkFsbG95RWRpdG9yLlNlbGVjdGlvbnMsXG4gICAgICAgICAgdGFiSW5kZXg6IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYXV0b1BhcmFncmFwaDogZmFsc2UsXG4gICAgICBlbmFibGVDb250ZW50RWRpdGFibGU6IHRydWUsXG4gICAgICBpZ25vcmVFbXB0eVBhcmFncmFwaDogdHJ1ZSxcbiAgICAgIGJsb2NrbGVzczogdHJ1ZSxcbiAgICAgIGVudGVyTW9kZTogd2luZG93LkNLRURJVE9SLkVOVEVSX0JSLFxuICAgIH07XG4gICAgLy8gJCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHdpbmRvdy5BbGxveUVkaXRvci5lZGl0YWJsZShub2RlLCBjb25maWcpLmdldCgnbmF0aXZlRWRpdG9yJyk7XG4gICAgICBlZGl0b3Iub24oJ2tleScsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQuZGF0YS5rZXlDb2RlID09PSB3aW5kb3cuQ0tFRElUT1IuU0hJRlQgKyAxMykge1xuICAgICAgICAgIC8vIGFkZCBzYXZpbmcgZnVuY3Rpb24gaGVyZVxuICAgICAgICAgIGV2ZW50LmNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGVkaXRvci5vbigncGFzdGUnLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LmRhdGEuZGF0YVZhbHVlID0gZXZlbnQuZGF0YS5kYXRhVmFsdWUucmVwbGFjZSgvPGJyW1xcc1xcL10qPi9nbWksICcgJyk7XG4gICAgICB9KTtcbiAgICAgICRub2RlLmRhdGEoJ2VkaXRvcicsIGVkaXRvcik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coJG5vZGUsIG5vZGUpO1xuICAgICAgLy8gdGhyb3cgZTtcbiAgICB9XG4gICAgLy8gfSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0U3RyaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL3N0cmluZy5qc1xuICoqLyIsImltcG9ydCBEYXRhUHJvdmlkZXIgZnJvbSAnLi4vRGF0YVByb3ZpZGVyJztcblxuY2xhc3MgU3RhdGljQ29udGVudCBleHRlbmRzIERhdGFQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKHByb3ZpZGVkS2V5cykge1xuICAgIHN1cGVyKCdEb3RQbGFudFxcXFxNb25zdGVyXFxcXERhdGFFbnRpdHlcXFxcU3RhdGljQ29udGVudFByb3ZpZGVyJywgcHJvdmlkZWRLZXlzKTtcbiAgfVxuXG4gIGZpbGxDb25maWcoZGF0YSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhO1xuICAgIG5ld0RhdGEuZW50aXRpZXMgPSB0aGlzLnNlcmlhbGl6ZUtleXMoKTtcbiAgICByZXR1cm4gbmV3RGF0YTtcbiAgfVxuXG4gIHNlcmlhbGl6ZU1hdGVyaWFsKHJlZ2lvbktleSwgbWF0ZXJpYWxLZXksIGRhdGFLZXlzLCAkcmVnaW9uLCAkbWF0ZXJpYWwpIHtcbiAgICBjb25zdCBtYXRlcmlhbEVkaXRhYmxlS2V5cyA9ICRtYXRlcmlhbC5kYXRhKCdlZGl0YWJsZUtleXMnKTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnJlY3Vyc2l2ZVNlcmlhbGl6ZShtYXRlcmlhbEVkaXRhYmxlS2V5cywgJG1hdGVyaWFsLCBkYXRhS2V5cyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJlY3Vyc2l2ZVNlcmlhbGl6ZShtYXRlcmlhbEVkaXRhYmxlS2V5cywgJHJvb3QsIGRhdGFLZXlzLCBwcmVmaXggPSAnJykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gICAgZGF0YUtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3Qgb2JqID0gbWF0ZXJpYWxFZGl0YWJsZUtleXNba2V5XSB8fCAnTk9fU1VDSF9LRVknO1xuICAgICAgaWYgKG9iaiA9PT0gJ05PX1NVQ0hfS0VZJykge1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9iaiA9PT0gT2JqZWN0KG9iaikpIHtcbiAgICAgICAgLy8gaXQncyByZWN1cnNpdmVcbiAgICAgICAgLy8gZmlyc3QgLSBmaW5kIGFsbCBibG9ja3NcbiAgICAgICAgY29uc3QgJGJsb2NrcyA9ICRyb290LmZpbmQoYFtkYXRhLXJlY3Vyc2l2ZS1pdGVtPVwiJHtrZXl9XCJdYCk7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIHJlc3VsdFtrZXldID0gW107XG4gICAgICAgICRibG9ja3MuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICByZXN1bHRba2V5XS5wdXNoKHRoYXQucmVjdXJzaXZlU2VyaWFsaXplKG9iaiwgJHRoaXMsIE9iamVjdC5rZXlzKG9iaiksICdpdGVtLicpKTtcbiAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaXQncyBwbGFpbiBmaWVsZFxuICAgICAgICBjb25zdCAkbm9kZSA9ICRyb290LmZpbmQoYFtkYXRhLWVkaXRhYmxlLWtleT1cIiR7cHJlZml4fSR7a2V5fVwiXWApLmZpcnN0KCk7XG4gICAgICAgIGlmICgkbm9kZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFNraXBwZWQgW2RhdGEtZWRpdGFibGUta2V5PVwiJHtwcmVmaXh9JHtrZXl9XCJdIGFzIG5vdCBmb3VuZGApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRba2V5XSA9IERhdGFQcm92aWRlci5lZGl0YWJsZS5zZXJpYWxpemVFZGl0YWJsZSgkbm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0aWNDb250ZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvcHJvdmlkZXJzL1N0YXRpY0NvbnRlbnQuanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9