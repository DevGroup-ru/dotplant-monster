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
	          check_callback: function check_callback(operation, node, node_parent, node_position, more) {
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
	        console.log('move node');
	        return false;
	      });
	      $(document).on('dnd_stop.vakata.jstree', function () {
	        console.log('dnd_stop.vakata.jstree');
	        return false;
	      }).on('dnd_stop', function () {
	        console.log('dnd_stop');
	        return false;
	      }).on('dnd_stop.jstree', function () {
	        console.log('asd');
	      }).on('dnd_stop.vakata', function () {
	        console.log('dnd_stop');
	        _this2.updatePageStructureJson();
	        _this2.target.FrontendMonster.VisualFrame.preview();
	        return true;
	      });
	      var controlButtons = $('<div class="tree-control-buttons" role="presentation"></div>');
	
	      var buttonsArray = [{
	        icon: 'fa fa-arrow-right',
	        name: 'Select',
	        click: function click(jsTreeNode, $node) {
	          _this2.selectMaterial(jsTreeNode.data.materialIndex);
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
	
	      this.editModeData = this.target.MONSTER_EDIT_MODE_DATA;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGMzZjQzNDk0NWI5NWFkMTk1ODMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL0Jhc2VFbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL0Jhc2VFZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL0Zyb250ZW5kTW9uc3Rlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQWN0aW9uRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0VkaXRhYmxlLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9IYXNoQXBpLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL1dZU0lXWUcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9hbGwuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL3Byb3ZpZGVycy9TdGF0aWNDb250ZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9idW5kbGUuY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkZyb250ZW5kTW9uc3RlciIsIkJhc2VFbnZpcm9ubWVudCIsInZpc3VhbEJ1aWxkZXIiLCJuYW1lIiwidGFyZ2V0IiwiJCIsInNldHRpbmdzIiwiY29udGVudFdpbmRvdyIsImN1cnJlbnRFbnZpcm9ubWVudCIsImVudmlyb25tZW50cyIsImdldCIsImRlYWN0aXZhdGUiLCJjbGVhclN0YWNrYWJsZSIsImZ1bmMiLCJhcmdzIiwic2VuZE1lc3NhZ2UiLCJCYXNlRWRpdGFibGUiLCIkbm9kZSIsIkZyYW1lQXBpIiwibGlzdGVuZXIiLCJjYWxsYmFjayIsImNhbGxiYWNrSGFuZGxlciIsImV2ZW50IiwibWVzc2FnZSIsImlzSWUiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiYXBwbHkiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJzdHJpbmdpZnkiLCJwb3N0TWVzc2FnZSIsImlzIiwiaWUiLCJwYXJhbXMiLCJ2aXN1YWxCdWxkZXIiLCJoYXNoQXBpIiwicGFyZW50IiwiaGFzQnVpbGRlciIsIlZpc3VhbEZyYW1lIiwic21vb3RoU2Nyb2xsIiwiaW5pdCIsInVzZXJTZXR0aW5ncyIsIkZyb250ZW5kTW9uc3RlclNldHRpbmdzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJidWlsZGVyIiwiJGJ1aWxkZXIiLCJsZW5ndGgiLCJWaXN1YWxCdWlsZGVyIiwicmVzb2x1dGlvblN3aXRjaGVyIiwiTWFwIiwiZW52aXJvbm1lbnRTZWxlY3RvciIsInN3aXRjaEVudmlyb25tZW50IiwiZmlyc3QiLCJtb2QiLCJiaW5kTWVzc2FnZUxpc3RlbmVyIiwiY29udHJvbHMiLCJWaXN1YWxCdWlsZGVyU2V0dGluZ3MiLCJidW5kbGVzIiwiJHN0YWNrYWJsZSIsInRoYXQiLCJiZW1FbGVtIiwiJHJlc29sdXRpb25MaW5rcyIsImNsaWNrIiwid2lkdGgiLCIkc2VjdGlvbkxpbmtzIiwiZW52aXJvbm1lbnROYW1lIiwiYWN0aXZhdGUiLCJlbXB0eSIsInBhbmVDbGFzcyIsIm1vZGlmaWVyIiwiZmluZCIsIiRuZXdQYW5lIiwiYXBwZW5kIiwibWF0ZXJpYWxzIiwiaGFzT3duUHJvcGVydHkiLCJyZXN1bHQiLCJzZXJpYWxpemVQYWdlIiwiY29uc29sZSIsImxvZyIsInJlc3VsdEJ5UHJvdmlkZXJzIiwicHJvdmlkZWRLZXlzIiwiZnJhbWVDb250ZW50V2luZG93IiwiTU9OU1RFUl9FRElUX01PREVfREFUQSIsInRlbXBsYXRlIiwicHJvdmlkZXJJbmRleCIsInJlZ2lvbnMiLCJyZWdpb25LZXkiLCJtYXRlcmlhbEluZGV4IiwiZGF0YUtleXMiLCJlbnZpcm9ubWVudCIsInBhZ2VDaGFuZ2VkIiwiJGNvbnRyb2xzIiwiZWxlbSIsImxvY2F0aW9uIiwicmVsb2FkIiwiJGNvbnRyb2xzUmlnaHQiLCJEaWFsb2dIZWxwZXIiLCJidWlsZGVyRGlhbG9nIiwib25BamF4TG9hZCIsIiR0YXJnZXQiLCJkaWFsb2ciLCJkYXRhQ2hhbmdlciIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhVHlwZSIsImF1dG9EZXN0cm95Iiwic2hvdyIsIkFjdGlvbkVudmlyb25tZW50IiwiQ3VzdG9taXphdGlvbkVudmlyb25tZW50IiwiTWF0ZXJpYWxzRW52aXJvbm1lbnQiLCJpbml0TWF0ZXJpYWxzU2VsZWN0b3IiLCIkbWF0ZXJpYWxzR3JvdXBzIiwiJG1hdGVyaWFsc0xpc3QiLCJpMThuQnVuZGxlTmFtZSIsInBvbHlnbG90IiwidCIsImJ1bmRsZSIsIiRidW5kbGVUaXRsZSIsImZ1bGxQYXRoIiwicHVzaCIsImdyb3VwcyIsImdyb3VwTmFtZSIsImdyb3VwIiwiaTE4bkdyb3VwTmFtZSIsIiRsaSIsIiRsaXN0IiwiaXRlbXMiLCJtYXRlcmlhbE5hbWUiLCJtYXRlcmlhbCIsImkxOG5NYXRlcmlhbE5hbWUiLCIkaXRlbSIsImRvY3VtZW50Iiwib24iLCJjbGlja0hhbmRsZXIiLCIkdGhpcyIsInRvZ2dsZU1vZCIsImdyb3VwUGF0aCIsImVhY2giLCJpdCIsIiRtYXRlcmlhbHNQYW5lIiwiaGlkZSIsIlBhZ2VTdHJ1Y3R1cmVFbnYiLCJzZWxlY3RlZFJlZ2lvbktleSIsInNlbGVjdGVkRW50aXR5IiwiJGdyb3Vwc1BhbmUiLCJjcmVhdGVTdGFja2FibGVQYW5lIiwiUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IiwiaW5pdFBhZ2VTdHJ1Y3R1cmVFbGVtZW50IiwiZWRpdE1vZGVEYXRhIiwiJGhlYWRlciIsIiRwYWdlU3RydWN0dXJlIiwiJHN0cnVjdHVyZVBhbmUiLCJkZXRhY2giLCJqc3RyZWUiLCJsYXlvdXQiLCJsYXlvdXRJdGVtIiwiaWQiLCJ0ZW1wbGF0ZUlkIiwidGV4dCIsImljb24iLCJzdGF0ZSIsIm9wZW5lZCIsImNoaWxkcmVuIiwidGVtcGxhdGVJdGVtIiwiJGxheW91dFJlZ2lvbnMiLCJ0YXJnZXQkIiwiaXRlciIsInByb2Nlc3NMYXlvdXQiLCJpdGVtIiwidGVtcGxhdGVSZWdpb25zIiwicmVnaW9uIiwicGFnZVN0cnVjdHVyZSIsImNvcmUiLCJjaGVja19jYWxsYmFjayIsIm9wZXJhdGlvbiIsIm5vZGUiLCJub2RlX3BhcmVudCIsIm5vZGVfcG9zaXRpb24iLCJtb3JlIiwidHlwZSIsInRoZW1lcyIsInBsdWdpbnMiLCJkbmQiLCJvcGVuX3RpbWVvdXQiLCJsYXJnZV9kcm9wX3RhcmdldCIsImxhcmdlX2RyYWdfdGFyZ2V0IiwiY2hlY2tfd2hpbGVfZHJhZ2dpbmciLCJjb3B5IiwiaXNfZHJhZ2dhYmxlIiwibm9kZXMiLCJ1bmRlZmluZWQiLCJ0eXBlcyIsInRlbXBsYXRlUmVnaW9uIiwiY29udGVudFRlbXBsYXRlUmVnaW9uIiwianN0cmVlT2JqIiwidXBkYXRlUGFnZVN0cnVjdHVyZUpzb24iLCJpc0NvbnRlbnRSZWdpb25Gb3VuZCIsImVudGl0eURlcGVuZGVudCIsInNlbGVjdF9ub2RlIiwicHJldmlldyIsImNvbnRyb2xCdXR0b25zIiwiYnV0dG9uc0FycmF5IiwianNUcmVlTm9kZSIsInNlbGVjdE1hdGVyaWFsIiwiZGVsZXRlX25vZGUiLCJnZXRfc2VsZWN0ZWQiLCIkYnV0dG9uIiwiY29uZiIsImdldF9ub2RlIiwiZSIsIm9iaiIsImVudGl0eVR5cGUiLCIkYW5jaG9yIiwicHJlcGVuZCIsInNjcm9sbFRhcmdldCIsImluZGV4IiwiJHRhcmdldE1hdGVyaWFsIiwicmVtb3ZlQ2xhc3MiLCJvZmZzZXRXaWR0aCIsImFkZENsYXNzIiwicGFnZVN0cnVjdHVyZUpzb24iLCJnZXRfanNvbiIsIm5vX3N0YXRlIiwibm9faWQiLCJub19saV9hdHRyIiwibm9fYV9hdHRyIiwicmVnaW9uc1N0cnVjdHVyZSIsInNlcmlhbGl6ZSIsIm1hdGVyaWFsc0RlY2wiLCIkbGF5b3V0UmVnaW9uIiwiZXh0cmFjdFJlZ2lvbkRhdGEiLCJyZXBsYWNlIiwiJGxheW91dE1hdGVyaWFscyIsIiRsYXlvdXRNYXRlcmlhbCIsInByb2Nlc3NMYXlvdXRNYXRlcmlhbCIsImxheW91dE1hdGVyaWFsSXRlbSIsImxheW91dE1hdGVyaWFsIiwicHJlZml4IiwibWF0ZXJpYWxQYXRoIiwiZWRpdGFibGVLZXlzIiwiJHJlZ2lvbnMiLCJwcm9jZXNzVGVtcGxhdGVSZWdpb24iLCJpc0NvbnRlbnQiLCIkdGVtcGxhdGVSZWdpb24iLCIkcmVnaW9uTWF0ZXJpYWxzIiwicHJvY2Vzc1RlbXBsYXRlUmVnaW9uTWF0ZXJpYWwiLCIkcmVnaW9uTWF0ZXJpYWwiLCJyZWdpb25JZCIsInVuaXF1ZUNvbnRlbnRJZCIsIlNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmlxaWQiLCJtb3JlRW50cm9weSIsInJldElkIiwiX2Zvcm1hdFNlZWQiLCJzZWVkIiwicmVxV2lkdGgiLCJwYXJzZUludCIsInRvU3RyaW5nIiwic2xpY2UiLCJBcnJheSIsImpvaW4iLCIkZ2xvYmFsIiwiR0xPQkFMIiwiJGxvY3V0dXMiLCJwaHAiLCJ1bmlxaWRTZWVkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiRGF0ZSIsImdldFRpbWUiLCJ0b0ZpeGVkIiwiRGF0YVByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiYXNzb2NpYXRpb25zIiwiYXNzb2NpYXRlIiwiJHJlZ2lvbiIsIm1hdGVyaWFsS2V5IiwiJG1hdGVyaWFsIiwibWF0ZXJpYWxFZGl0YWJsZUtleXMiLCJpbml0aWFsaXplTWF0ZXJpYWxFZGl0IiwiJHJvb3QiLCIkYmxvY2tzIiwiY291bnRlciIsImVkaXRhYmxlIiwiaW5pdGlhbGl6ZUVkaXRhYmxlIiwic2VyaWFsaXplTWF0ZXJpYWwiLCJjbGFzcyIsImZpbGxDb25maWciLCJEYXRhUHJvdmlkZXJGYWN0b3J5IiwicHJvdmlkZXJEZWNsIiwicHJvdmlkZXIiLCJFZGl0YWJsZSIsImVkaXRhYmxlc0J5VHlwZSIsIk1PTlNURVJfRURJVEFCTEVTIiwiZXhwb3J0VmFyaWFibGUiLCJzZXJpYWxpemVOb2RlIiwic3RyaW5nIiwiSGFzaEFwaSIsImZ1bmN0aW9uQ2FsbHMiLCJoYXNoIiwibWF0Y2hlcyIsIm1hdGNoIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiaW5pdGlhbGl6ZSIsInBhZ2VTdHJ1Y3R1cmVKc29uRGF0YSIsInBhcmVudFdpbmRvdyIsInBhcmVudE1vbnN0ZXIiLCJwYXJlbnRCdWlsZGVyIiwiY3VycmVudE1vbnN0ZXJDb250ZW50IiwicmVzaXplIiwidXBkYXRlSGFuZGxlcnMiLCJpbml0UHJvdmlkZXJzIiwiTW9uc3RlckVkaXREYXRhIiwicHJvdmlkZXJzIiwiZ2V0UHJvdmlkZXJzIiwiZW50aXR5IiwiYXJyIiwiZmFjdG9yeSIsIiRtb25zdGVyQ29udGVudENhY2hlIiwiJHNlbGVjdGVkTWF0ZXJpYWwiLCIkaGFuZGxlcnMiLCJjc3MiLCJwb3NpdGlvbiIsInRvcCIsImhlaWdodCIsIiRtb25zdGVyQ29udGVudCIsIiRtb25zdGVyIiwic2VyaWFsaXplVW5pcXVlQ29udGVudCIsInNlbmRUb0J1aWxkZXIiLCJibG9jayIsIlZpc3VhbEZyYW1lU2V0dGluZ3MiLCJyZWdpb25OYW1lIiwicmFuZG9tSW5kZXgiLCJpdGVyYXRlVGVtcGxhdGVUeXBlIiwibWF0ZXJpYWxzQnlSZWdpb25EZWNsIiwiZGVjbCIsIm1hdGVyaWFsc09yZGVyIiwibWF0ZXJpYWxzRGVjbHMiLCJuZXdEYXRhIiwiYWN0aW9uIiwiZm9ybVN1Ym1pdCIsInJlZ2lvbnNSZXN1bHQiLCJpdGVyYXRlVGVtcGxhdGVSZWdpb25zIiwidGVtcGxhdGVSZWdpb25zT3JkZXIiLCJlbnRpdHlNYXRlcmlhbHMiLCJzZXJpYWxpemVQcm92aWRlcnMiLCJwcm92aWRlcktleSIsInZhbHVlIiwicmVmcmVzaE1vbnN0ZXJDb250ZW50Q2FjaGUiLCIkZm9ybSIsIiRpbnB1dCIsIiRjc3JmIiwiYXR0ciIsInZhbCIsImFwcGVuZFRvIiwic3VibWl0IiwicmVnaW9uTWF0ZXJpYWxzIiwiaXRlcmF0ZU1hdGVyaWFscyIsIldZU0lXWUciLCJmcmFtZSQiLCJlZGl0b3IiLCJnZXREYXRhIiwiaHRtbCIsImNvbmZpZyIsImF1dG9QYXJhZ3JhcGgiLCJlbmFibGVDb250ZW50RWRpdGFibGUiLCJpZ25vcmVFbXB0eVBhcmFncmFwaCIsImVudGVyTW9kZSIsIkNLRURJVE9SIiwiRU5URVJfQlIiLCJBbGxveUVkaXRvciIsImFsbCIsIkltYWdlIiwiJGltZyIsInNyYyIsImFsdCIsIkxpbmsiLCJocmVmIiwiYW5jaG9yIiwiVGV4dFN0cmluZyIsImFsbG93ZWRDb250ZW50IiwidG9vbGJhcnMiLCJzdHlsZXMiLCJzZWxlY3Rpb25zIiwiU2VsZWN0aW9ucyIsInRhYkluZGV4IiwiYmxvY2tsZXNzIiwia2V5Q29kZSIsIlNISUZUIiwiY2FuY2VsIiwiZGF0YVZhbHVlIiwiU3RhdGljQ29udGVudCIsImVudGl0aWVzIiwic2VyaWFsaXplS2V5cyIsInJlY3Vyc2l2ZVNlcmlhbGl6ZSIsIndhcm4iLCJzZXJpYWxpemVFZGl0YWJsZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7QUFFQTs7Ozs7O0FBRUFBLFFBQU9DLGVBQVAsR0FBeUIsK0JBQXpCO0FBQ0EsRzs7Ozs7Ozs7Ozs7Ozs7QUNMQTs7Ozs7Ozs7S0FFTUMsZTtBQUNKLDRCQUFZQyxhQUFaLEVBQTJCQyxJQUEzQixFQUFpQztBQUFBOztBQUMvQixVQUFLRCxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLE1BQUwsR0FBY0MsRUFBRSxLQUFLSCxhQUFMLENBQW1CSSxRQUFuQixDQUE0QixnQkFBNUIsQ0FBRixFQUFpRCxDQUFqRCxFQUFvREMsYUFBbEU7QUFDRDs7OztnQ0FFVTtBQUNUO0FBQ0EsV0FBSSxLQUFLSixJQUFMLEtBQWMsS0FBS0QsYUFBTCxDQUFtQk0sa0JBQXJDLEVBQXlEO0FBQ3ZEO0FBQ0Q7QUFDRCxXQUFJLEtBQUtOLGFBQUwsQ0FBbUJNLGtCQUF2QixFQUEyQztBQUN6QyxjQUFLTixhQUFMLENBQW1CTyxZQUFuQixDQUFnQ0MsR0FBaEMsQ0FBb0MsS0FBS1IsYUFBTCxDQUFtQk0sa0JBQXZELEVBQTJFRyxVQUEzRTtBQUNEO0FBQ0Y7OztrQ0FNWTtBQUNYLFlBQUtULGFBQUwsQ0FBbUJVLGNBQW5CO0FBQ0Q7OztpQ0FFV0MsSSxFQUFNQyxJLEVBQU07QUFDdEIsY0FBTyxtQkFBU0MsV0FBVCxDQUFxQixLQUFLWCxNQUExQixFQUFrQ1MsSUFBbEMsRUFBd0NDLElBQXhDLENBQVA7QUFDRDs7O21DQUVhLENBRWI7Ozt5QkFkYTtBQUNaLGNBQU8sS0FBS1YsTUFBTCxDQUFZQyxDQUFuQjtBQUNEOzs7Ozs7bUJBZVlKLGU7Ozs7Ozs7Ozs7Ozs7Ozs7S0NwQ1RlLFk7Ozs7Ozs7bUNBQ1VDLEssRUFBTyxDQUVwQjs7O3dDQUVrQkEsSyxFQUFPLENBRXpCOzs7eUJBRW1CO0FBQ2xCLGNBQU9sQixPQUFPTSxDQUFkO0FBQ0Q7Ozs7OzttQkFHWVcsWTs7Ozs7Ozs7Ozs7Ozs7OztLQ2RURSxROzs7Ozs7O3lDQVV1QkMsUSxFQUFVO0FBQ25DLFdBQU1DLFdBQVcsU0FBU0MsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDL0MsYUFBSUMsVUFBVSxJQUFkO0FBQ0EsYUFBSUwsU0FBU00sSUFBYixFQUFtQjtBQUNqQkQscUJBQVVFLEtBQUtDLEtBQUwsQ0FBV0osTUFBTUssSUFBakIsQ0FBVjtBQUNELFVBRkQsTUFFTztBQUNMSixxQkFBVUQsTUFBTUssSUFBaEI7QUFDRDs7QUFFRCxhQUFJUixTQUFTSSxRQUFRVixJQUFqQixDQUFKLEVBQTRCO0FBQzFCTSxvQkFBU0ksUUFBUVYsSUFBakIsRUFBdUJlLEtBQXZCLENBQTZCVCxRQUE3QixFQUF1Q0ksUUFBUVQsSUFBL0M7QUFDRDtBQUNGLFFBWEQ7O0FBYUEsV0FBSWYsT0FBTzhCLGdCQUFYLEVBQTZCO0FBQzNCOUIsZ0JBQU84QixnQkFBUCxDQUF3QixTQUF4QixFQUFtQ1QsUUFBbkM7QUFDRCxRQUZELE1BRU87QUFDTDtBQUNBckIsZ0JBQU8rQixXQUFQLENBQW1CLFdBQW5CLEVBQWdDVixRQUFoQztBQUNEO0FBQ0Y7OztpQ0FFa0JoQixNLEVBQVFTLEksRUFBTUMsSSxFQUFNO0FBQ3JDLFdBQU1hLE9BQU87QUFDWGQsbUJBRFc7QUFFWEM7QUFGVyxRQUFiO0FBSUEsV0FBTVMsVUFBVUwsU0FBU00sSUFBVCxHQUFnQkMsS0FBS00sU0FBTCxDQUFlSixJQUFmLENBQWhCLEdBQXVDQSxJQUF2RDs7QUFFQXZCLGNBQU80QixXQUFQLENBQW1CVCxPQUFuQixFQUE0QixHQUE1QjtBQUNEOzs7eUJBdkNpQjtBQUNoQjtBQUNBLFdBQUksT0FBT1UsRUFBUCxLQUFlLFdBQW5CLEVBQWdDO0FBQzlCLGdCQUFPQSxHQUFHQyxFQUFILEVBQVAsQ0FEOEIsQ0FDZjtBQUNoQjs7QUFFRCxjQUFPLElBQVA7QUFDRDs7Ozs7O21CQW1DWWhCLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDZjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0tBRU1sQixlO0FBQ0osOEJBQWM7QUFBQTs7QUFDWixVQUFLbUMsTUFBTDtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsdUJBQWY7QUFDQSxTQUFJdEMsT0FBT3VDLE1BQVAsS0FBa0J2QyxNQUFsQixJQUE0QkEsT0FBT3VDLE1BQVAsQ0FBY3RDLGVBQTlDLEVBQStEO0FBQzdELFdBQUlELE9BQU91QyxNQUFQLENBQWN0QyxlQUFkLENBQThCdUMsVUFBbEMsRUFBOEM7QUFDNUMsY0FBS0MsV0FBTCxHQUFtQiwyQkFBbkI7QUFDRDtBQUNGO0FBQ0Q7QUFDQSxTQUFJLE9BQU9DLFlBQVAsS0FBeUIsV0FBN0IsRUFBMEM7QUFDeENBLG9CQUFhQyxJQUFiO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7OztBQW1CQTs7Ozs4QkFJUztBQUNQLFdBQU1DLGVBQWU1QyxPQUFPNkMsdUJBQVAsSUFBa0MsRUFBdkQ7QUFDQSxXQUFNdEMsV0FBVyxFQUFqQjtBQUNBdUMsY0FBT0MsSUFBUCxDQUFZSCxZQUFaLEVBQTBCSSxPQUExQixDQUFrQyxlQUFPO0FBQ3ZDekMsa0JBQVMwQyxHQUFULElBQWdCTCxhQUFhSyxHQUFiLENBQWhCO0FBQ0QsUUFGRDtBQUdBLFlBQUsxQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7eUJBMUJhO0FBQ1osV0FBSSxLQUFLOEIsWUFBTCxLQUFzQixJQUExQixFQUFnQztBQUM5QixjQUFLQSxZQUFMLEdBQW9CLDZCQUFwQjtBQUNEO0FBQ0QsY0FBTyxLQUFLQSxZQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7eUJBSWlCO0FBQ2YsY0FBTyxLQUFLYSxPQUFMLENBQWFDLFFBQWIsQ0FBc0JDLE1BQXRCLEtBQWlDLENBQXhDO0FBQ0Q7Ozs7OzttQkFnQlluRCxlOzs7Ozs7Ozs7Ozs7OztBQ3JEZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0E7O0tBRU1vRCxhO0FBQ0osNEJBQWM7QUFBQTs7QUFDWixVQUFLakIsTUFBTDtBQUNBLFVBQUtrQixrQkFBTDs7QUFFQSxVQUFLNUMsWUFBTCxHQUFvQixJQUFJNkMsR0FBSixDQUFRLENBQzFCLENBQUMsZ0JBQUQsRUFBbUIsdUNBQTZCLElBQTdCLEVBQW1DLGdCQUFuQyxDQUFuQixDQUQwQixFQUUxQixDQUFDLGdCQUFELEVBQW1CLHVDQUE2QixJQUE3QixFQUFtQyxnQkFBbkMsQ0FBbkIsQ0FGMEIsRUFHMUIsQ0FBQyxXQUFELEVBQWMsbUNBQXlCLElBQXpCLEVBQStCLFdBQS9CLENBQWQsQ0FIMEIsRUFJMUIsQ0FBQyxlQUFELEVBQWtCLHVDQUE2QixJQUE3QixFQUFtQyxlQUFuQyxDQUFsQixDQUowQixFQUsxQixDQUFDLFFBQUQsRUFBVyxnQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsQ0FBWCxDQUwwQixDQUFSLENBQXBCOztBQVFBLFVBQUtDLG1CQUFMOztBQUVBO0FBQ0EsVUFBS0MsaUJBQUwsQ0FBdUIsZ0JBQXZCO0FBQ0FuRCxPQUFFLGlEQUFGLEVBQ0dvRCxLQURILEdBRUdDLEdBRkgsQ0FFTyxRQUZQLEVBRWlCLElBRmpCO0FBR0Esd0JBQVNDLG1CQUFULENBQTZCLElBQTdCOztBQUVBOztBQUVBLFVBQUtDLFFBQUw7QUFDRDs7QUFFRDs7Ozs7Ozs7OEJBSVM7QUFDUCxXQUFNakIsZUFBZTVDLE9BQU84RCxxQkFBUCxJQUFnQyxFQUFyRDtBQUNBLFdBQU12RCxXQUFXO0FBQ2YsNkJBQW9CLHlCQURMO0FBRWYsMkJBQWtCLHVCQUZIO0FBR2Z3RCxrQkFBUyxFQUhNO0FBSWYsc0NBQTZCLDZCQUpkO0FBS2YsMEJBQWlCO0FBTEYsUUFBakI7QUFPQWpCLGNBQU9DLElBQVAsQ0FBWUgsWUFBWixFQUEwQkksT0FBMUIsQ0FBa0MsZUFBTztBQUN2Q3pDLGtCQUFTMEMsR0FBVCxJQUFnQkwsYUFBYUssR0FBYixDQUFoQjtBQUNELFFBRkQ7QUFHQSxZQUFLMUMsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxZQUFLNEMsUUFBTCxHQUFnQjdDLEVBQUUsS0FBS0MsUUFBTCxDQUFjLGtCQUFkLENBQUYsQ0FBaEI7QUFDQSxZQUFLeUQsVUFBTCxHQUFrQjFELFFBQU0sS0FBS0MsUUFBTCxDQUFjLDJCQUFkLENBQU4sQ0FBbEI7QUFDRDs7OzBDQUVvQjtBQUNuQixXQUFNMEQsT0FBTyxJQUFiO0FBQ0EsV0FBTUMsVUFBVSxzQ0FBaEI7O0FBRUEsV0FBTUMsbUJBQW1CN0QsUUFBTTRELE9BQU4sQ0FBekI7QUFDQUMsd0JBQWlCQyxLQUFqQixDQUF1QixTQUFTL0MsUUFBVCxHQUFvQjtBQUN6QzhDLDBCQUFpQlIsR0FBakIsQ0FBcUIsUUFBckIsRUFBK0IsS0FBL0I7QUFDQXJELFdBQUUyRCxLQUFLMUQsUUFBTCxDQUFjLGdCQUFkLENBQUYsRUFBbUM4RCxLQUFuQyxDQUF5Qy9ELEVBQUUsSUFBRixFQUFRc0IsSUFBUixDQUFhLGlCQUFiLENBQXpDO0FBQ0F0QixXQUFFLElBQUYsRUFBUXFELEdBQVIsQ0FBWSxRQUFaLEVBQXNCLElBQXRCO0FBQ0EsZ0JBQU8sS0FBUDtBQUNELFFBTEQ7QUFNRDs7OzJDQUVxQjtBQUNwQixXQUFNTSxPQUFPLElBQWI7QUFDQSxXQUFNQyxVQUFVLGdEQUFoQjs7QUFFQSxXQUFNSSxnQkFBZ0JoRSxRQUFNNEQsT0FBTixDQUF0QjtBQUNBSSxxQkFBY0YsS0FBZCxDQUFvQixTQUFTL0MsUUFBVCxHQUFvQjtBQUN0QyxhQUFNa0Qsa0JBQWtCakUsRUFBRSxJQUFGLEVBQVFzQixJQUFSLENBQWEsaUJBQWIsQ0FBeEI7QUFDQSxhQUFJcUMsS0FBS3hELGtCQUFMLEtBQTRCOEQsZUFBaEMsRUFBaUQ7QUFDL0NELHlCQUFjWCxHQUFkLENBQWtCLFFBQWxCLEVBQTRCLEtBQTVCO0FBQ0FNLGdCQUFLdkQsWUFBTCxDQUFrQkMsR0FBbEIsQ0FBc0I0RCxlQUF0QixFQUF1QzNELFVBQXZDO0FBQ0FxRCxnQkFBS3hELGtCQUFMLEdBQTBCLElBQTFCO0FBQ0Esa0JBQU8sS0FBUDtBQUNEOztBQUVENkQsdUJBQWNYLEdBQWQsQ0FBa0IsUUFBbEIsRUFBNEIsS0FBNUI7QUFDQU0sY0FBS1IsaUJBQUwsQ0FBdUJjLGVBQXZCO0FBQ0FqRSxXQUFFLElBQUYsRUFBUXFELEdBQVIsQ0FBWSxRQUFaLEVBQXNCLElBQXRCO0FBQ0EsZ0JBQU8sS0FBUDtBQUNELFFBYkQ7QUFjRDs7O3VDQUVpQlksZSxFQUFpQjtBQUNqQyxZQUFLN0QsWUFBTCxDQUFrQkMsR0FBbEIsQ0FBc0I0RCxlQUF0QixFQUF1Q0MsUUFBdkM7QUFDQSxZQUFLL0Qsa0JBQUwsR0FBMEI4RCxlQUExQjtBQUNEOzs7c0NBRWdCO0FBQ2YsWUFBS1AsVUFBTCxDQUFnQlMsS0FBaEI7QUFDRDs7OzJDQUVxQjtBQUNwQixXQUFNQyxZQUFlLEtBQUtuRSxRQUFMLENBQWMsMkJBQWQsQ0FBZixXQUFOO0FBQ0EsV0FBTW9FLFdBQVcsS0FBS1gsVUFBTCxDQUFnQlksSUFBaEIsT0FBeUJGLFNBQXpCLEVBQXNDdEIsTUFBdEMsS0FBaUQsQ0FBakQsR0FDVnNCLFNBRFUsY0FFYixFQUZKO0FBR0EsV0FBTUcsV0FBV3ZFLG1CQUFpQm9FLFNBQWpCLFNBQThCQyxRQUE5QixjQUFqQjtBQUNBLFlBQUtYLFVBQUwsQ0FBZ0JjLE1BQWhCLENBQXVCRCxRQUF2QjtBQUNBLGNBQU9BLFFBQVA7QUFDRDs7O29DQUVjekUsSSxFQUFNO0FBQ25CLFdBQUksS0FBS0csUUFBTCxDQUFjd0UsU0FBZCxDQUF3QkMsY0FBeEIsQ0FBdUM1RSxJQUF2QyxDQUFKLEVBQWtEO0FBQ2hELGdCQUFPLEtBQUtHLFFBQUwsQ0FBY3dFLFNBQWQsQ0FBd0IzRSxJQUF4QixDQUFQO0FBQ0Q7QUFDRCxjQUFPLElBQVA7QUFDRDs7O2lDQU1XO0FBQ1Y7QUFDQSxXQUFNNkUsU0FBUyxLQUFLdkUsWUFBTCxDQUFrQkMsR0FBbEIsQ0FBc0IsZ0JBQXRCLEVBQXdDdUUsYUFBeEMsRUFBZjtBQUNBQyxlQUFRQyxHQUFSLENBQVlILE1BQVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFNSSxvQkFBb0IsRUFBMUI7QUFDQSxXQUFNQyxlQUFlLEtBQUtDLGtCQUFMLENBQXdCQyxzQkFBeEIsQ0FBK0NDLFFBQS9DLENBQXdESCxZQUE3RTs7QUFFQXhDLGNBQU9DLElBQVAsQ0FBWXVDLFlBQVosRUFBMEJ0QyxPQUExQixDQUFrQyx5QkFBaUI7QUFDakRxQywyQkFBa0JLLGFBQWxCLElBQW1DLEVBQW5DOztBQUVBLGFBQU1DLFVBQVVMLGFBQWFJLGFBQWIsQ0FBaEI7O0FBRUE1QyxnQkFBT0MsSUFBUCxDQUFZNEMsT0FBWixFQUFxQjNDLE9BQXJCLENBQTZCLHFCQUFhO0FBQ3hDLGVBQUlpQyxPQUFPRCxjQUFQLENBQXNCWSxTQUF0QixNQUFxQyxLQUF6QyxFQUFnRDtBQUM5QztBQUNEO0FBQ0RQLDZCQUFrQkssYUFBbEIsRUFBaUNFLFNBQWpDLElBQThDLEVBQTlDOztBQUVBO0FBQ0EsZUFBTWIsWUFBWVksUUFBUUMsU0FBUixDQUFsQjs7QUFFQTlDLGtCQUFPQyxJQUFQLENBQVlnQyxTQUFaLEVBQXVCL0IsT0FBdkIsQ0FBK0IseUJBQWlCO0FBQzlDLGlCQUFJaUMsT0FBT1csU0FBUCxFQUFrQlosY0FBbEIsQ0FBaUNhLGFBQWpDLE1BQW9ELEtBQXhELEVBQStEO0FBQzdEO0FBQ0Q7QUFDRFIsK0JBQWtCSyxhQUFsQixFQUFpQ0UsU0FBakMsRUFBNENDLGFBQTVDLElBQTZELEVBQTdEOztBQUVBLGlCQUFNQyxXQUFXZixVQUFVYyxhQUFWLENBQWpCOztBQUVBQyxzQkFBUzlDLE9BQVQsQ0FBaUIsZUFBTztBQUN0QixtQkFBSWlDLE9BQU9XLFNBQVAsRUFBa0JDLGFBQWxCLEVBQWlDYixjQUFqQyxDQUFnRC9CLEdBQWhELE1BQXlELEtBQTdELEVBQW9FO0FBQ2xFO0FBQ0Q7QUFDRG9DLGlDQUNHSyxhQURILEVBRUdFLFNBRkgsRUFHR0MsYUFISCxFQUlHNUMsR0FKSCxJQUlVZ0MsT0FBT1csU0FBUCxFQUFrQkMsYUFBbEIsRUFBaUM1QyxHQUFqQyxDQUpWO0FBS0QsY0FURDtBQVVELFlBbEJEO0FBbUJELFVBNUJEO0FBNkJELFFBbENEO0FBbUNBa0MsZUFBUUMsR0FBUixDQUFZQyxpQkFBWjtBQUNBLGNBQU9BLGlCQUFQO0FBQ0Q7OzttQ0FFYTtBQUNaLFlBQUszRSxZQUFMLENBQWtCc0MsT0FBbEIsQ0FDRTtBQUFBLGdCQUNFK0MsWUFBWUMsV0FBWixFQURGO0FBQUEsUUFERjtBQUlEOzs7eUJBRUdmLE0sRUFBUTtBQUNWRSxlQUFRQyxHQUFSLENBQVlILE1BQVo7QUFDRDs7O2dDQUVVO0FBQUE7O0FBQ1QsWUFBS2dCLFNBQUwsR0FBaUIsS0FBSzlDLFFBQUwsQ0FBY3lCLElBQWQsQ0FBbUIsZ0JBQW5CLEVBQXFDbEIsS0FBckMsRUFBakI7QUFDQSxZQUFLdUMsU0FBTCxDQUFlQyxJQUFmLENBQW9CLFNBQXBCLEVBQStCOUIsS0FBL0IsQ0FBcUMsWUFBTTtBQUN6QyxlQUFLbUIsa0JBQUwsQ0FBd0JZLFFBQXhCLENBQWlDQyxNQUFqQztBQUNBLGdCQUFPLEtBQVA7QUFDRCxRQUhEOztBQUtBLFlBQUtILFNBQUwsQ0FBZUMsSUFBZixDQUFvQixNQUFwQixFQUE0QjlCLEtBQTVCLENBQWtDLFlBQU07QUFDdEMsNEJBQVNwRCxXQUFULENBQXFCLE1BQUt1RSxrQkFBMUIsRUFBOEMsTUFBOUM7QUFDQSxnQkFBTyxLQUFQO0FBQ0QsUUFIRDtBQUlBLFlBQUtjLGNBQUwsR0FBc0IsS0FBS2xELFFBQUwsQ0FBY3lCLElBQWQsQ0FBbUIsaUJBQW5CLEVBQXNDbEIsS0FBdEMsRUFBdEI7QUFDQSxZQUFLMkMsY0FBTCxDQUFvQkgsSUFBcEIsQ0FBeUIsYUFBekIsRUFBd0M5QixLQUF4QyxDQUE4QyxZQUFNO0FBQ2xEO0FBQ0E7QUFDQXBFLGdCQUFPc0csWUFBUCxDQUNHQyxhQURILEdBRUdDLFVBRkgsQ0FFYyxVQUFDNUUsSUFBRCxFQUFPNkUsT0FBUCxFQUFnQkMsTUFBaEIsRUFBd0JDLFdBQXhCLEVBQXdDO0FBQ2xEQSx1QkFBWS9FLE9BQU8sZUFBUCxHQUF5QixrQkFBckM7QUFDQSxrQkFBTyxJQUFQO0FBQ0QsVUFMSCxFQU1HZ0YsSUFOSCxDQU1RO0FBQ0pDLGdCQUFLLDhCQUREO0FBRUpDLG1CQUFRLE1BRko7QUFHSkMscUJBQVU7QUFITixVQU5SLEVBV0dDLFdBWEgsR0FZR0MsSUFaSDtBQWFBO0FBQ0EsZ0JBQU8sS0FBUDtBQUNELFFBbEJEO0FBbUJEOzs7eUJBcEd3QjtBQUN2QixjQUFPM0csRUFBRSxLQUFLQyxRQUFMLENBQWMsZ0JBQWQsQ0FBRixFQUFtQyxDQUFuQyxFQUFzQ0MsYUFBN0M7QUFDRDs7Ozs7O21CQXFHWTZDLGE7Ozs7Ozs7Ozs7OztBQzNOZjs7Ozs7Ozs7Ozs7O0tBRU02RCxpQjs7Ozs7Ozs7Ozs7O21CQUdTQSxpQjs7Ozs7Ozs7Ozs7O0FDTGY7Ozs7Ozs7Ozs7OztLQUVNQyx3Qjs7Ozs7Ozs7Ozs7O21CQUdTQSx3Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ0xmOzs7Ozs7Ozs7Ozs7S0FFTUMsb0I7OztBQUNKLGlDQUFZakgsYUFBWixFQUEyQkMsSUFBM0IsRUFBaUM7QUFBQTs7QUFBQSw2SUFDekJELGFBRHlCLEVBQ1ZDLElBRFU7O0FBRS9CLFdBQUtpSCxxQkFBTDtBQUYrQjtBQUdoQzs7Ozs2Q0FFdUI7QUFBQTs7QUFDdEIsWUFBS0MsZ0JBQUwsR0FBd0JoSCxFQUFFLG9DQUFGLENBQXhCO0FBQ0EsWUFBS2lILGNBQUwsR0FBc0IsRUFBdEI7O0FBRUEsWUFBS3BILGFBQUwsQ0FBbUJJLFFBQW5CLENBQTRCd0QsT0FBNUIsQ0FBb0NmLE9BQXBDLENBQTRDLGtCQUFVO0FBQ3BEO0FBQ0EsYUFBTXdFLGlCQUFpQixPQUFPQyxRQUFQLEtBQXFCLFdBQXJCLEdBQ25CQSxTQUFTQyxDQUFULENBQVdDLE9BQU92SCxJQUFsQixDQURtQixHQUVuQnVILE9BQU92SCxJQUZYOztBQUlBLGFBQU13SCxvTEFFb0VELE9BQU9FLFFBRjNFLHdCQUdFTCxjQUhGLHdDQUFOO0FBT0EsZ0JBQUtELGNBQUwsQ0FBb0JPLElBQXBCLENBQXlCRixZQUF6Qjs7QUFFQUQsZ0JBQU9JLE1BQVAsQ0FBYy9FLE9BQWQsQ0FBc0IsaUJBQVM7QUFDN0IsZUFBTWdGLFlBQVlDLE1BQU03SCxJQUF4QjtBQUNBLGVBQU0yRSxZQUFZa0QsTUFBTWxELFNBQXhCO0FBQ0EsZUFBTW1ELGdCQUFnQixPQUFPVCxRQUFQLEtBQXFCLFdBQXJCLEdBQW1DQSxTQUFTQyxDQUFULENBQVdNLFNBQVgsQ0FBbkMsR0FBMkRBLFNBQWpGO0FBQ0EsZUFBTUcsTUFBTTdILHFGQUVpQjJILE1BQU1KLFFBRnZCLDJEQUdWSyxhQUhVLGdEQUc4Q25ELFVBQVUzQixNQUh4RCxxQ0FBWjtBQU1BLGtCQUFLa0UsZ0JBQUwsQ0FBc0J4QyxNQUF0QixDQUE2QnFELEdBQTdCO0FBQ0EsZUFBTUMsUUFBUTlILG1EQUFpRDJILE1BQU1KLFFBQXZELGFBQWQ7QUFDQSxlQUFNUSxRQUFRLEVBQWQ7O0FBRUF0RCxxQkFBVS9CLE9BQVYsQ0FBa0Isb0JBQVk7QUFDNUIsaUJBQU1zRixlQUFlQyxTQUFTbkksSUFBOUI7QUFDQSxpQkFBTW9JLG1CQUFtQixPQUFPZixRQUFQLEtBQXFCLFdBQXJCLEdBQ3JCQSxTQUFTQyxDQUFULENBQVdZLFlBQVgsQ0FEcUIsR0FFckJBLFlBRko7QUFHQSxpQkFBTUcsUUFBUW5JLDhFQUV5Q2lJLFNBQVNWLFFBRmxELGdCQUdsQlcsZ0JBSGtCLHVCQUFkO0FBT0FILG1CQUFNUCxJQUFOLENBQVdXLEtBQVg7QUFDRCxZQWJEO0FBY0FMLGlCQUFNdEQsTUFBTixDQUFhdUQsS0FBYjtBQUNBLGtCQUFLZCxjQUFMLENBQW9CTyxJQUFwQixDQUF5Qk0sS0FBekI7QUFDRCxVQTlCRDtBQStCRCxRQTlDRDs7QUFnREEsV0FBTW5FLE9BQU8sSUFBYjtBQUNBO0FBQ0EzRCxTQUFFb0ksUUFBRixFQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixpQ0FBeEIsRUFBMkQsU0FBU0MsWUFBVCxHQUF3QjtBQUNqRixhQUFNQyxRQUFRdkksRUFBRSxJQUFGLENBQWQ7QUFDQXVJLGVBQU1DLFNBQU4sQ0FBZ0IsUUFBaEI7QUFDQSxhQUFNQyxZQUFZRixNQUFNakgsSUFBTixDQUFXLFdBQVgsQ0FBbEI7QUFDQSxhQUFJaUgsTUFBTWxGLEdBQU4sQ0FBVSxRQUFWLENBQUosRUFBeUI7QUFDdkJyRCxhQUFFLGlDQUFGLEVBQXFDcUQsR0FBckMsQ0FBeUMsUUFBekMsRUFBbUQsS0FBbkQ7O0FBRUFyRCxhQUFFLGlCQUFGLEVBQXFCMEksSUFBckIsQ0FBMEIsU0FBU0MsRUFBVCxHQUFjO0FBQ3RDLGlCQUFNYixRQUFROUgsRUFBRSxJQUFGLENBQWQ7QUFDQSxpQkFBSThILE1BQU16RSxHQUFOLENBQVUsUUFBVixDQUFKLEVBQXlCO0FBQ3ZCeUUscUJBQU16RSxHQUFOLENBQVUsUUFBVixFQUFvQixLQUFwQjtBQUNEO0FBQ0QsaUJBQUl5RSxNQUFNeEcsSUFBTixDQUFXLFdBQVgsTUFBNEJtSCxTQUFoQyxFQUEyQztBQUN6Q1gscUJBQU16RSxHQUFOLENBQVUsUUFBVixFQUFvQixJQUFwQjtBQUNEO0FBQ0YsWUFSRDs7QUFVQWtGLGlCQUFNbEYsR0FBTixDQUFVLFFBQVYsRUFBb0IsSUFBcEI7QUFDQU0sZ0JBQUtpRixjQUFMLENBQW9CakMsSUFBcEI7QUFDRCxVQWZELE1BZU87QUFDTDtBQUNBaEQsZ0JBQUtpRixjQUFMLENBQW9CQyxJQUFwQjtBQUNEO0FBQ0QsZ0JBQU8sS0FBUDtBQUNELFFBeEJEOztBQTJCQTdJLFNBQUVvSSxRQUFGLEVBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLHVCQUF4QixFQUFpRCxTQUFTQyxZQUFULEdBQXdCO0FBQ3ZFLGFBQU1RLG1CQUFtQm5GLEtBQUs5RCxhQUFMLENBQW1CTyxZQUFuQixDQUFnQ0MsR0FBaEMsQ0FBb0MsZ0JBQXBDLENBQXpCOztBQUVBLGFBQU0wSSxvQkFBb0JELGlCQUFpQkMsaUJBQTNDO0FBQ0EsYUFBTUMsaUJBQWlCRixpQkFBaUJFLGNBQXhDOztBQUVBLGFBQUlELHNCQUFzQixJQUF0QixJQUE4QkMsbUJBQW1CLElBQXJELEVBQTJEO0FBQ3pEckYsZ0JBQUtqRCxXQUFMLENBQ0UsVUFERixFQUVFLENBQ0VWLEVBQUUsSUFBRixFQUFRc0IsSUFBUixDQUFhLGNBQWIsQ0FERixFQUVFMEgsY0FGRixFQUdFRCxpQkFIRixDQUZGO0FBUUQ7QUFDRixRQWhCRDtBQWlCRDs7O2dDQUVVO0FBQ1Q7O0FBRUEsWUFBS0UsV0FBTCxHQUFtQixLQUFLcEosYUFBTCxDQUFtQnFKLG1CQUFuQixFQUFuQjtBQUNBLFlBQUtELFdBQUwsQ0FBaUJ6RSxNQUFqQixDQUF3QixLQUFLd0MsZ0JBQTdCOztBQUVBLFlBQUs0QixjQUFMLEdBQXNCLEtBQUsvSSxhQUFMLENBQW1CcUosbUJBQW5CLEVBQXRCO0FBQ0EsWUFBS04sY0FBTCxDQUFvQnBFLE1BQXBCLENBQTJCLEtBQUt5QyxjQUFoQztBQUNBLFlBQUsyQixjQUFMLENBQW9CQyxJQUFwQjs7QUFFQTs7Ozs7OztBQVNBN0ksU0FBRSxpQ0FBRixFQUFxQ3FELEdBQXJDLENBQXlDLFFBQXpDLEVBQW1ELEtBQW5EO0FBQ0Q7Ozs7OzttQkFFWXlELG9COzs7Ozs7Ozs7Ozs7Ozs7O0FDbElmOzs7Ozs7Ozs7Ozs7S0FFTXFDLHdCOzs7QUFDSixxQ0FBWXRKLGFBQVosRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQUEscUpBQ3pCRCxhQUR5QixFQUNWQyxJQURVOztBQUUvQixXQUFLc0osd0JBQUw7QUFDQSxXQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsV0FBS04saUJBQUwsR0FBeUIsSUFBekI7QUFDQSxXQUFLQyxjQUFMLEdBQXNCLElBQXRCO0FBTCtCO0FBTWhDOzs7O2dEQUUwQjtBQUN6QixZQUFLTSxPQUFMLEdBQWV0SixFQUFFLDRFQUFGLENBQWY7QUFDQSxZQUFLdUosY0FBTCxHQUFzQnZKLEVBQUUsb0NBQUYsQ0FBdEI7QUFDRDs7O2dDQUVVO0FBQ1Q7O0FBRUEsWUFBS3dKLGNBQUwsR0FBc0IsS0FBSzNKLGFBQUwsQ0FBbUJxSixtQkFBbkIsRUFBdEI7QUFDQSxZQUFLTSxjQUFMLENBQW9CaEYsTUFBcEIsQ0FBMkIsS0FBSzhFLE9BQWhDO0FBQ0EsWUFBS0UsY0FBTCxDQUFvQmhGLE1BQXBCLENBQTJCLEtBQUsrRSxjQUFoQztBQUNEOzs7a0NBQ1k7QUFDWCxZQUFLQSxjQUFMLENBQW9CRSxNQUFwQjtBQUNBLFlBQUtILE9BQUwsQ0FBYUcsTUFBYjtBQUNBO0FBQ0Q7OzttQ0FFYTtBQUFBOztBQUNaO0FBQ0EsWUFBS0YsY0FBTCxDQUFvQkcsTUFBcEIsQ0FBMkIsU0FBM0I7QUFDQSxXQUFNQyxTQUFTLEtBQUs1SixNQUFMLENBQVltRixzQkFBWixDQUFtQ3lFLE1BQWxEO0FBQ0EsV0FBTXhFLFdBQVcsS0FBS3BGLE1BQUwsQ0FBWW1GLHNCQUFaLENBQW1DQyxRQUFwRDtBQUNBLFdBQU14QixPQUFPLElBQWI7O0FBRUEsV0FBTWlHLGFBQWE7QUFDakJ0SSxlQUFNO0FBQ0p1SSxlQUFJLFFBREE7QUFFSkMsdUJBQVlILE9BQU9FO0FBRmYsVUFEVztBQUtqQkUsNkJBQWtCSixPQUFPaEgsR0FBekIsVUFBaUNnSCxPQUFPRSxFQUx2QjtBQU1qQkcsZUFBTSxlQU5XO0FBT2pCQyxnQkFBTztBQUNMQyxtQkFBUTtBQURILFVBUFU7QUFVakJDLG1CQUFVO0FBVk8sUUFBbkI7QUFZQSxXQUFNQyxlQUFlO0FBQ25COUksZUFBTTtBQUNKdUksZUFBSSxVQURBO0FBRUpDLHVCQUFZM0UsU0FBUzBFO0FBRmpCLFVBRGE7QUFLbkJFLCtCQUFvQjVFLFNBQVN4QyxHQUE3QixVQUFxQ3dDLFNBQVMwRSxFQUwzQjtBQU1uQkcsZUFBTSxVQU5hO0FBT25CQyxnQkFBTztBQUNMQyxtQkFBUTtBQURILFVBUFk7QUFVbkJDLG1CQUFVO0FBVlMsUUFBckI7O0FBYUEsV0FBTUUsaUJBQWlCLEtBQUtDLE9BQUwsQ0FBYSw0QkFBYixDQUF2Qjs7QUFFQUQsc0JBQWUzQixJQUFmLENBQW9CLFNBQVM2QixJQUFULEdBQWdCO0FBQ2xDLGFBQU01RixTQUFTd0UseUJBQXlCcUIsYUFBekIsQ0FBdUN4SyxFQUFFLElBQUYsQ0FBdkMsQ0FBZjtBQUNBNEosb0JBQVdPLFFBQVgsQ0FBb0IzQyxJQUFwQixDQUF5QjdDLE9BQU84RixJQUFoQztBQUNBOUYsZ0JBQU8rRixlQUFQLENBQXVCaEksT0FBdkIsQ0FBK0Isa0JBQVU7QUFDdkMwSCx3QkFBYUQsUUFBYixDQUFzQjNDLElBQXRCLENBQTJCbUQsTUFBM0I7QUFDRCxVQUZEO0FBR0QsUUFORDs7QUFRQSxZQUFLQyxhQUFMLEdBQXFCLENBQ25CaEIsVUFEbUIsRUFFbkJRLFlBRm1CLENBQXJCOztBQUtBLFlBQUtiLGNBQUwsQ0FBb0JHLE1BQXBCLENBQTJCO0FBQ3pCbUIsZUFBTTtBQUNKQywyQkFBZ0Isd0JBQUNDLFNBQUQsRUFBWUMsSUFBWixFQUFrQkMsV0FBbEIsRUFBK0JDLGFBQS9CLEVBQThDQyxJQUE5QyxFQUF1RDtBQUNyRSxpQkFBSUosY0FBYyxXQUFsQixFQUErQjtBQUM3QixtQkFBSUMsS0FBS0ksSUFBTCxLQUFjLFVBQWxCLEVBQThCO0FBQzVCLHdCQUFPSCxZQUFZRyxJQUFaLEtBQXFCLGdCQUFyQixJQUF5Q0gsWUFBWUcsSUFBWixLQUFxQix1QkFBckU7QUFDRCxnQkFGRCxNQUVPLElBQUlKLEtBQUtJLElBQUwsS0FBYyxnQkFBZCxJQUFrQ0osS0FBS0ksSUFBTCxLQUFjLHVCQUFwRCxFQUE2RTtBQUNsRix3QkFBT0gsWUFBWUcsSUFBWixLQUFxQixTQUE1QjtBQUNEO0FBQ0Qsc0JBQU8sS0FBUDtBQUNEO0FBQ0Qsb0JBQU8sSUFBUDtBQUNELFlBWEc7QUFZSjlKLGlCQUFNLEtBQUtzSixhQVpQO0FBYUpTLG1CQUFRO0FBQ052TCxtQkFBTTtBQURBO0FBYkosVUFEbUI7QUFrQnpCd0wsa0JBQVMsQ0FDUCxPQURPLEVBRVAsVUFGTyxFQUdQLEtBSE8sQ0FsQmdCO0FBdUJ6QkMsY0FBSztBQUNIQyx5QkFBYyxHQURYO0FBRUhDLDhCQUFtQixJQUZoQjtBQUdIQyw4QkFBbUIsSUFIaEI7QUFJSEMsaUNBQXNCLElBSm5CO0FBS0hDLGlCQUFNLEtBTEg7QUFNSEMseUJBQWMsc0JBQVNDLEtBQVQsRUFBZ0I7QUFDNUIsaUJBQU1kLE9BQU9jLE1BQU0sQ0FBTixLQUFZQyxTQUF6QjtBQUNBLGlCQUFJZixTQUFTZSxTQUFiLEVBQXdCO0FBQ3RCLHNCQUFPLEtBQVA7QUFDRDtBQUNELG9CQUFPZixLQUFLSSxJQUFMLEtBQWMsVUFBZCxJQUNGSixLQUFLSSxJQUFMLEtBQWMsdUJBRFosSUFFRkosS0FBS0ksSUFBTCxLQUFjLGdCQUZuQjtBQUdEO0FBZEUsVUF2Qm9CO0FBdUN6QlksZ0JBQU87QUFDTHJDLG1CQUFRO0FBQ05LLG1CQUFNO0FBREEsWUFESDtBQUlMN0UscUJBQVU7QUFDUjZFLG1CQUFNO0FBREUsWUFKTDtBQU9MaUMsMkJBQWdCO0FBQ2RqQyxtQkFBTTtBQURRLFlBUFg7QUFVTGtDLGtDQUF1QjtBQUNyQmxDLG1CQUFNO0FBRGUsWUFWbEI7QUFhTC9CLHFCQUFVO0FBQ1IrQixtQkFBTTtBQURFO0FBYkw7QUF2Q2tCLFFBQTNCOztBQTBEQSxZQUFLbUMsU0FBTCxHQUFpQixLQUFLNUMsY0FBTCxDQUFvQkcsTUFBcEIsRUFBakI7O0FBRUEsWUFBS0gsY0FBTCxDQUNHbEIsRUFESCxDQUNNLGVBRE4sRUFDdUIsWUFBTTtBQUN6QixnQkFBSytELHVCQUFMOztBQUVBLGFBQUlDLHVCQUF1QixLQUEzQjtBQUNBLGdCQUFLekIsYUFBTCxDQUFtQixDQUFuQixFQUFzQlQsUUFBdEIsQ0FBK0J6SCxPQUEvQixDQUF1QyxVQUFDaUksTUFBRCxFQUFZO0FBQ2pELGVBQUlBLE9BQU9ySixJQUFQLENBQVlnTCxlQUFaLElBQStCRCx5QkFBeUIsS0FBNUQsRUFBbUU7QUFDakVBLG9DQUF1QixJQUF2QjtBQUNBLG9CQUFLRixTQUFMLENBQWVJLFdBQWYsQ0FBMkI1QixPQUFPZCxFQUFsQztBQUNEO0FBQ0YsVUFMRDtBQU1ELFFBWEgsRUFhR3hCLEVBYkgsQ0FhTSxrQkFiTixFQWEwQixZQUFNO0FBQzVCeEQsaUJBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsZ0JBQU8sS0FBUDtBQUNELFFBaEJIO0FBaUJBOUUsU0FBRW9JLFFBQUYsRUFDR0MsRUFESCxDQUNNLHdCQUROLEVBQ2dDLFlBQU07QUFDbEN4RCxpQkFBUUMsR0FBUixDQUFZLHdCQUFaO0FBQ0EsZ0JBQU8sS0FBUDtBQUNELFFBSkgsRUFLR3VELEVBTEgsQ0FLTSxVQUxOLEVBS2tCLFlBQU07QUFDcEJ4RCxpQkFBUUMsR0FBUixDQUFZLFVBQVo7QUFDQSxnQkFBTyxLQUFQO0FBQ0QsUUFSSCxFQVNHdUQsRUFUSCxDQVNNLGlCQVROLEVBU3lCLFlBQU07QUFDM0J4RCxpQkFBUUMsR0FBUixDQUFZLEtBQVo7QUFDRCxRQVhILEVBWUd1RCxFQVpILENBWU0saUJBWk4sRUFZeUIsWUFBTTtBQUMzQnhELGlCQUFRQyxHQUFSLENBQVksVUFBWjtBQUNBLGdCQUFLc0gsdUJBQUw7QUFDQSxnQkFBS3JNLE1BQUwsQ0FBWUosZUFBWixDQUE0QndDLFdBQTVCLENBQXdDcUssT0FBeEM7QUFDQSxnQkFBTyxJQUFQO0FBQ0QsUUFqQkg7QUFrQkEsV0FBTUMsaUJBQWlCek0sRUFBRSw4REFBRixDQUF2Qjs7QUFFQSxXQUFNME0sZUFBZSxDQUNuQjtBQUNFMUMsZUFBTSxtQkFEUjtBQUVFbEssZUFBTSxRQUZSO0FBR0VnRSxnQkFBTyxlQUFDNkksVUFBRCxFQUFhL0wsS0FBYixFQUF1QjtBQUM1QixrQkFBS2dNLGNBQUwsQ0FBb0JELFdBQVdyTCxJQUFYLENBQWdCaUUsYUFBcEM7QUFDQSxrQkFBTyxLQUFQO0FBQ0Q7QUFOSCxRQURtQixFQVNuQjtBQUNFeUUsZUFBTSxlQURSO0FBRUVsSyxlQUFNLFFBRlI7QUFHRWdFLGdCQUFPLGVBQUM2SSxVQUFELEVBQWEvTCxLQUFiLEVBQXVCO0FBQzVCLGtCQUFLdUwsU0FBTCxDQUFlVSxXQUFmLENBQTJCLE9BQUtWLFNBQUwsQ0FBZVcsWUFBZixFQUEzQjtBQUNBLGtCQUFLVix1QkFBTDtBQUNBLGtCQUFLck0sTUFBTCxDQUFZSixlQUFaLENBQTRCd0MsV0FBNUIsQ0FBd0NxSyxPQUF4QztBQUNBLGtCQUFPLEtBQVA7QUFDRDtBQVJILFFBVG1CLENBQXJCOztBQXFCQUUsb0JBQWFoSyxPQUFiLENBQXFCLGdCQUFRO0FBQzNCLGFBQU1xSyxVQUFVL00sK0RBQTZEZ04sS0FBS2xOLElBQWxFLHdCQUNSa04sS0FBS2hELElBREcsa0JBQWhCO0FBR0ErQyxpQkFBUWpKLEtBQVIsQ0FBYyxTQUFTd0UsWUFBVCxHQUF1QjtBQUNuQyxlQUFNMUgsUUFBUVosRUFBRSxJQUFGLEVBQVFpQyxNQUFSLEdBQWlCQSxNQUFqQixFQUFkOztBQUVBLGtCQUFPK0ssS0FBS2xKLEtBQUwsQ0FBV0gsS0FBS3dJLFNBQUwsQ0FBZWMsUUFBZixDQUF3QnJNLEtBQXhCLENBQVgsRUFBMkNBLEtBQTNDLENBQVA7QUFDRCxVQUpEO0FBS0E2TCx3QkFBZWpJLE1BQWYsQ0FBc0J1SSxPQUF0QjtBQUNELFFBVkQ7O0FBWUEsWUFBS3hELGNBQUwsQ0FBb0JsQixFQUFwQixDQUF1QixvQkFBdkIsRUFBNkMsVUFBQzZFLENBQUQsRUFBSUMsR0FBSixFQUFZOztBQUV2RCxhQUFNL0IsT0FBTytCLElBQUluQyxJQUFKLENBQVNJLElBQXRCO0FBQ0EsZ0JBQUtwQyxjQUFMLEdBQXNCbUUsSUFBSW5DLElBQUosQ0FBUzFKLElBQVQsQ0FBYzhMLFVBQWQsSUFBNEIsSUFBbEQ7QUFDQSxpQkFBUWhDLElBQVI7QUFDRSxnQkFBSyxVQUFMO0FBQ0UsaUJBQU1pQyxVQUFVck4sUUFBTW1OLElBQUluQyxJQUFKLENBQVNuQixFQUFmLENBQWhCO0FBQ0F3RCxxQkFBUUMsT0FBUixDQUFnQmIsY0FBaEI7QUFDQSxvQkFBS0csY0FBTCxDQUFvQk8sSUFBSW5DLElBQUosQ0FBUzFKLElBQVQsQ0FBY2lFLGFBQWxDO0FBQ0Esb0JBQUt3RCxpQkFBTCxHQUF5Qm9FLElBQUluQyxJQUFKLENBQVMxSixJQUFULENBQWNnRSxTQUF2QztBQUNBO0FBQ0YsZ0JBQUssZ0JBQUw7QUFDQSxnQkFBSyx1QkFBTDtBQUNFLG9CQUFLZ0YsT0FBTCxDQUFhbEksWUFBYixDQUEwQjtBQUN4Qm1MLDZCQUFjLE9BQUtqRCxPQUFMLHdCQUFrQzZDLElBQUluQyxJQUFKLENBQVMxSixJQUFULENBQWNnRSxTQUFoRDtBQURVLGNBQTFCO0FBR0Esb0JBQUt5RCxpQkFBTCxHQUF5Qm9FLElBQUluQyxJQUFKLENBQVMxSixJQUFULENBQWNnRSxTQUF2QztBQUNBO0FBQ0Y7QUFDRSxvQkFBS3lELGlCQUFMLEdBQXlCLElBQXpCO0FBQ0E7QUFoQko7QUFrQkQsUUF0QkQ7O0FBeUJBLFlBQUtNLFlBQUwsR0FBb0IsS0FBS3RKLE1BQUwsQ0FBWW1GLHNCQUFoQztBQUNEOzs7b0NBRWNzSSxLLEVBQU87QUFDcEIsV0FBTUMsa0JBQWtCLEtBQUtuRCxPQUFMLDRCQUFzQ2tELEtBQXRDLFFBQXhCO0FBQ0F4TixTQUFFLDhCQUFGLEVBQWtDME4sV0FBbEMsQ0FBOEMsNkJBQTlDO0FBQ0EsWUFBS3BELE9BQUwsQ0FBYWxJLFlBQWIsQ0FBMEI7QUFDeEJtTCx1QkFBY0U7QUFEVSxRQUExQjtBQUdBO0FBQ0FBLHVCQUNHQyxXQURILENBQ2UsNkJBRGY7O0FBR0EsWUFBS0QsZ0JBQWdCLENBQWhCLEVBQW1CRSxXQUF4Qjs7QUFFQUYsdUJBQ0dHLFFBREgsQ0FDWSw2QkFEWjtBQUVEOzs7K0NBRXlCO0FBQ3hCLFlBQUtDLGlCQUFMLEdBQXlCLEtBQUsxQixTQUFMLENBQWUyQixRQUFmLENBQXdCLEtBQUt2RSxjQUE3QixFQUE2QztBQUNwRXdFLG1CQUFVLElBRDBEO0FBRXBFQyxnQkFBTyxJQUY2RDtBQUdwRUMscUJBQVksSUFId0Q7QUFJcEVDLG9CQUFXO0FBSnlELFFBQTdDLENBQXpCO0FBTUEsWUFBS25PLE1BQUwsQ0FBWUosZUFBWixDQUE0QndDLFdBQTVCLENBQXdDMEwsaUJBQXhDLEdBQTRELEtBQUtBLGlCQUFqRTtBQUNEOzs7cUNBK0hlO0FBQUE7O0FBQ2QsV0FBTWxKLFNBQVMsRUFBZjtBQUNBbkMsY0FBT0MsSUFBUCxDQUFZLEtBQUswTCxnQkFBakIsRUFBbUN6TCxPQUFuQyxDQUEyQyxxQkFBYTtBQUN0RCxhQUFNaUksU0FBUyxPQUFLd0QsZ0JBQUwsQ0FBc0I3SSxTQUF0QixDQUFmO0FBQ0FYLGdCQUFPZ0csT0FBT2hJLEdBQWQsSUFBcUJnSSxPQUFPeUQsU0FBUCxFQUFyQjtBQUNELFFBSEQ7QUFJQSxjQUFPekosTUFBUDtBQUNEOzs7MENBRW9CO0FBQUE7O0FBQ25CLFdBQU1BLFNBQVMsRUFBZjtBQUNBbkMsY0FBT0MsSUFBUCxDQUFZLEtBQUswTCxnQkFBakIsRUFBbUN6TCxPQUFuQyxDQUEyQyxxQkFBYTtBQUN0RCxhQUFNaUksU0FBUyxPQUFLd0QsZ0JBQUwsQ0FBc0I3SSxTQUF0QixDQUFmO0FBQ0FYLGdCQUFPZ0csT0FBT2hJLEdBQWQsSUFBcUJnSSxPQUFPMEQsYUFBUCxFQUFyQjtBQUNELFFBSEQ7QUFJQSxjQUFPMUosTUFBUDtBQUNEOzs7bUNBN0lvQjJKLGEsRUFBZTtBQUNsQyxXQUFNN0QsT0FBT3RCLHlCQUF5Qm9GLGlCQUF6QixDQUEyQ0QsYUFBM0MsQ0FBYjtBQUNBN0QsWUFBS1IsS0FBTCxHQUFhO0FBQ1hDLGlCQUFRO0FBREcsUUFBYjtBQUdBTyxZQUFLTixRQUFMLEdBQWdCLEVBQWhCO0FBQ0FNLFlBQUtuSixJQUFMLENBQVV1SSxFQUFWLDhCQUF3Q1ksS0FBS25KLElBQUwsQ0FBVWdFLFNBQWxEO0FBQ0FtRixZQUFLWixFQUFMLEdBQVUsVUFBT1ksS0FBS25KLElBQUwsQ0FBVXVJLEVBQWpCLEVBQXNCMkUsT0FBdEIsQ0FBOEIsS0FBOUIsRUFBcUMsR0FBckMsQ0FBVjtBQUNBL0QsWUFBS25KLElBQUwsQ0FBVThMLFVBQVYsR0FBdUIsUUFBdkI7QUFDQSxXQUFNMUMsa0JBQWtCLEVBQXhCOztBQUVBO0FBQ0EsV0FBTStELG1CQUFtQkgsY0FBY2hLLElBQWQsQ0FBbUIscUJBQW5CLENBQXpCO0FBQ0FtSyx3QkFBaUIvRixJQUFqQixDQUFzQixTQUFTNkIsSUFBVCxHQUFnQjtBQUNwQyxhQUFNbUUsa0JBQWtCMU8sRUFBRSxJQUFGLENBQXhCO0FBQ0EsYUFBTTJFLFNBQVN3RSx5QkFBeUJ3RixxQkFBekIsQ0FBK0NELGVBQS9DLEVBQWdFakUsS0FBS1osRUFBckUsRUFBeUVZLEtBQUtuSixJQUFMLENBQVVnRSxTQUFuRixDQUFmO0FBQ0EsYUFBTXNKLHFCQUFxQmpLLE9BQU9rSyxjQUFsQztBQUNBbEssZ0JBQU8rRixlQUFQLENBQXVCaEksT0FBdkIsQ0FBK0Isa0JBQVU7QUFDdkNnSSwyQkFBZ0JsRCxJQUFoQixDQUFxQm1ELE1BQXJCO0FBQ0QsVUFGRDtBQUdBRixjQUFLTixRQUFMLENBQWMzQyxJQUFkLENBQW1Cb0gsa0JBQW5CO0FBQ0QsUUFSRDs7QUFVQSxjQUFPO0FBQ0xuRSxtQkFESztBQUVMQztBQUZLLFFBQVA7QUFJRDs7OzJDQUU0QmdFLGUsRUFBaUJJLE0sRUFBUXhKLFMsRUFBVztBQUMvRCxXQUFNQyxnQkFBZ0JtSixnQkFBZ0JwTixJQUFoQixDQUFxQixlQUFyQixDQUF0QjtBQUNBLFdBQU15TixlQUFlTCxnQkFBZ0JwTixJQUFoQixDQUFxQixjQUFyQixDQUFyQjtBQUNBLFdBQU1tSixPQUFPO0FBQ1hWLGdCQUNFZ0YsaUJBQWlCLHdEQUFqQixHQUNJLHFCQURKLGtCQUVpQnhKLGFBSG5CLGNBRFc7QUFNWDZGLGVBQU0sVUFOSztBQU9YOUosZUFBTTtBQUNKdUksZUFBT2lGLE1BQVAsU0FBaUJ2SixhQURiO0FBRUpBLHVDQUZJO0FBR0p3SixxQ0FISTtBQUlKQyx5QkFBY04sZ0JBQWdCcE4sSUFBaEIsQ0FBcUIsY0FBckIsQ0FKVjtBQUtKMEosaUJBQU0wRCxlQUxGO0FBTUpwSiwrQkFOSTtBQU9KOEgsdUJBQVk7QUFQUixVQVBLO0FBZ0JYdkQsc0JBQVdpRixNQUFYLFNBQXFCdko7QUFoQlYsUUFBYjtBQWtCQSxXQUFNbUYsa0JBQWtCLEVBQXhCO0FBQ0EsV0FBTXVFLFdBQVdQLGdCQUFnQnBLLElBQWhCLENBQXFCLCtCQUFyQixDQUFqQjtBQUNBMkssZ0JBQVN2RyxJQUFULENBQWMsU0FBUzZCLElBQVQsR0FBZ0I7QUFDNUIsYUFBTTVGLFNBQVN3RSx5QkFBeUIrRixxQkFBekIsQ0FBK0NsUCxFQUFFLElBQUYsQ0FBL0MsQ0FBZjtBQUNBMEsseUJBQWdCbEQsSUFBaEIsQ0FBcUI3QyxNQUFyQjtBQUNELFFBSEQ7QUFJQSxXQUFJK0YsZ0JBQWdCNUgsTUFBaEIsR0FBeUIsQ0FBN0IsRUFBZ0M7QUFDOUIySCxjQUFLbkosSUFBTCxDQUFVNk4sU0FBVixHQUFzQixJQUF0QjtBQUNEO0FBQ0QsY0FBTztBQUNMTix5QkFBZ0JwRSxJQURYO0FBRUxDO0FBRkssUUFBUDtBQUlEOzs7MkNBRTRCMEUsZSxFQUFpQjtBQUM1QyxXQUFNM0UsT0FBT3RCLHlCQUF5Qm9GLGlCQUF6QixDQUEyQ2EsZUFBM0MsQ0FBYjtBQUNBM0UsWUFBS1IsS0FBTCxHQUFhO0FBQ1hDLGlCQUFRO0FBREcsUUFBYjtBQUdBTyxZQUFLTixRQUFMLEdBQWdCLEVBQWhCO0FBQ0FNLFlBQUtuSixJQUFMLENBQVVnTCxlQUFWLEdBQTRCOEMsZ0JBQWdCOU4sSUFBaEIsQ0FBcUIsdUJBQXJCLE1BQWtELENBQTlFOztBQUVBLFdBQU13TixTQUFTckUsS0FBS25KLElBQUwsQ0FBVWdMLGVBQVYsR0FBNEIsU0FBNUIsR0FBd0MsVUFBdkQ7QUFDQTdCLFlBQUtuSixJQUFMLENBQVU4TCxVQUFWLEdBQXVCM0MsS0FBS25KLElBQUwsQ0FBVWdMLGVBQVYsR0FBNEIsUUFBNUIsR0FBdUMsVUFBOUQ7QUFDQTdCLFlBQUtuSixJQUFMLENBQVV1SSxFQUFWLEdBQWtCaUYsTUFBbEIsd0JBQTJDckUsS0FBS25KLElBQUwsQ0FBVWdFLFNBQXJEO0FBQ0FtRixZQUFLWixFQUFMLEdBQVUsVUFBT1ksS0FBS25KLElBQUwsQ0FBVXVJLEVBQWpCLEVBQXNCMkUsT0FBdEIsQ0FBOEIsS0FBOUIsRUFBcUMsR0FBckMsQ0FBVjs7QUFFQSxXQUFJL0QsS0FBS25KLElBQUwsQ0FBVWdMLGVBQWQsRUFBK0I7QUFDN0I3QixjQUFLVyxJQUFMLEdBQVksdUJBQVo7QUFDRDtBQUNELFdBQU1pRSxtQkFBbUJELGdCQUFnQjlLLElBQWhCLENBQXFCLHFCQUFyQixDQUF6QjtBQUNBK0ssd0JBQWlCM0csSUFBakIsQ0FBc0IsU0FBUzZCLElBQVQsR0FBZ0I7QUFDcEMsYUFBTXRDLFdBQVdrQix5QkFBeUJtRyw2QkFBekIsQ0FDZnRQLEVBQUUsSUFBRixDQURlLEVBRWZ5SyxLQUFLbkosSUFBTCxDQUFVdUksRUFGSyxFQUdmaUYsTUFIZSxDQUFqQjtBQUtBN0csa0JBQVMzRyxJQUFULENBQWNnRSxTQUFkLEdBQTBCbUYsS0FBS25KLElBQUwsQ0FBVWdFLFNBQXBDO0FBQ0EyQyxrQkFBUzRCLEVBQVQsR0FBYyxVQUFPNUIsU0FBUzNHLElBQVQsQ0FBY3VJLEVBQXJCLEVBQTBCMkUsT0FBMUIsQ0FBa0MsS0FBbEMsRUFBeUMsR0FBekMsQ0FBZDtBQUNBL0QsY0FBS04sUUFBTCxDQUFjM0MsSUFBZCxDQUFtQlMsUUFBbkI7QUFDRCxRQVREO0FBVUEsY0FBT3dDLElBQVA7QUFDRDs7O21EQUVvQzhFLGUsRUFBaUJULE0sRUFBUTFCLFUsRUFBWTtBQUN4RSxXQUFNN0gsZ0JBQWdCZ0ssZ0JBQWdCak8sSUFBaEIsQ0FBcUIsZUFBckIsQ0FBdEI7QUFDQSxXQUFNeU4sZUFBZVEsZ0JBQWdCak8sSUFBaEIsQ0FBcUIsY0FBckIsQ0FBckI7QUFDQSxjQUFPO0FBQ0x5SSw4QkFBbUJ4RSxhQURkO0FBRUw2RixlQUFNLFVBRkQ7QUFHTDlKLGVBQU07QUFDSnVJLGVBQU9pRixNQUFQLFNBQWlCdkosYUFEYjtBQUVKQSx1Q0FGSTtBQUdKd0oscUNBSEk7QUFJSkMseUJBQWNPLGdCQUFnQmpPLElBQWhCLENBQXFCLGNBQXJCLENBSlY7QUFLSjBKLGlCQUFNdUUsZUFMRjtBQU1KbkM7QUFOSTtBQUhELFFBQVA7QUFZRDs7O3VDQUV3QnhNLEssRUFBTztBQUM5QixjQUFPO0FBQ0xtSixlQUFNbkosTUFBTVUsSUFBTixDQUFXLG9CQUFYLENBREQ7QUFFTDhKLGVBQU0sZ0JBRkQ7QUFHTDlKLGVBQU07QUFDSmtPLHFCQUFVNU8sTUFBTVUsSUFBTixDQUFXLFVBQVgsQ0FETjtBQUVKZ0Usc0JBQVcxRSxNQUFNVSxJQUFOLENBQVcsV0FBWCxDQUZQO0FBR0ptTyw0QkFBaUI3TyxNQUFNVSxJQUFOLENBQVcsaUJBQVgsQ0FIYjtBQUlKMEosaUJBQU1wSztBQUpGO0FBSEQsUUFBUDtBQVVEOzs7Ozs7bUJBb0JZdUksd0I7Ozs7Ozs7Ozs7OztBQ25aZjs7Ozs7Ozs7Ozs7O0tBRU11Ryx3Qjs7Ozs7Ozs7Ozs7O21CQUdTQSx3Qjs7Ozs7Ozs7QUNMZkMsUUFBT0MsT0FBUCxHQUFpQixTQUFTQyxNQUFULENBQWlCZixNQUFqQixFQUF5QmdCLFdBQXpCLEVBQXNDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQUksT0FBT2hCLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakNBLGNBQVMsRUFBVDtBQUNEOztBQUVELE9BQUlpQixLQUFKO0FBQ0EsT0FBSUMsY0FBYyxTQUFkQSxXQUFjLENBQVVDLElBQVYsRUFBZ0JDLFFBQWhCLEVBQTBCO0FBQzFDRCxZQUFPRSxTQUFTRixJQUFULEVBQWUsRUFBZixFQUFtQkcsUUFBbkIsQ0FBNEIsRUFBNUIsQ0FBUCxDQUQwQyxDQUNIO0FBQ3ZDLFNBQUlGLFdBQVdELEtBQUtuTixNQUFwQixFQUE0QjtBQUMxQjtBQUNBLGNBQU9tTixLQUFLSSxLQUFMLENBQVdKLEtBQUtuTixNQUFMLEdBQWNvTixRQUF6QixDQUFQO0FBQ0Q7QUFDRCxTQUFJQSxXQUFXRCxLQUFLbk4sTUFBcEIsRUFBNEI7QUFDMUI7QUFDQSxjQUFPd04sTUFBTSxLQUFLSixXQUFXRCxLQUFLbk4sTUFBckIsQ0FBTixFQUFvQ3lOLElBQXBDLENBQXlDLEdBQXpDLElBQWdETixJQUF2RDtBQUNEO0FBQ0QsWUFBT0EsSUFBUDtBQUNELElBWEQ7O0FBYUEsT0FBSU8sVUFBVyxPQUFPOVEsTUFBUCxLQUFrQixXQUFsQixHQUFnQ0EsTUFBaEMsR0FBeUMrUSxNQUF4RDtBQUNBRCxXQUFRRSxRQUFSLEdBQW1CRixRQUFRRSxRQUFSLElBQW9CLEVBQXZDO0FBQ0EsT0FBSUEsV0FBV0YsUUFBUUUsUUFBdkI7QUFDQUEsWUFBU0MsR0FBVCxHQUFlRCxTQUFTQyxHQUFULElBQWdCLEVBQS9COztBQUVBLE9BQUksQ0FBQ0QsU0FBU0MsR0FBVCxDQUFhQyxVQUFsQixFQUE4QjtBQUM1QjtBQUNBRixjQUFTQyxHQUFULENBQWFDLFVBQWIsR0FBMEJDLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQixTQUEzQixDQUExQjtBQUNEO0FBQ0RMLFlBQVNDLEdBQVQsQ0FBYUMsVUFBYjs7QUFFQTtBQUNBYixXQUFRakIsTUFBUjtBQUNBaUIsWUFBU0MsWUFBWUcsU0FBUyxJQUFJYSxJQUFKLEdBQVdDLE9BQVgsS0FBdUIsSUFBaEMsRUFBc0MsRUFBdEMsQ0FBWixFQUF1RCxDQUF2RCxDQUFUO0FBQ0E7QUFDQWxCLFlBQVNDLFlBQVlVLFNBQVNDLEdBQVQsQ0FBYUMsVUFBekIsRUFBcUMsQ0FBckMsQ0FBVDtBQUNBLE9BQUlkLFdBQUosRUFBaUI7QUFDZjtBQUNBQyxjQUFTLENBQUNjLEtBQUtFLE1BQUwsS0FBZ0IsRUFBakIsRUFBcUJHLE9BQXJCLENBQTZCLENBQTdCLEVBQWdDZCxRQUFoQyxFQUFUO0FBQ0Q7O0FBRUQsVUFBT0wsS0FBUDtBQUNELEVBdkRELEM7Ozs7Ozs7Ozs7Ozs7Ozs7S0NBTW9CLFk7QUFDSix5QkFBWUMsU0FBWixFQUF1QnBNLFlBQXZCLEVBQXFDO0FBQUE7O0FBQ25DLFVBQUtvTSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFVBQUtwTSxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFVBQUtxTSxZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsVUFBS0MsU0FBTDtBQUNEOztBQUVEOzs7Ozs7OztpQ0FRWTtBQUFBOztBQUNWLFlBQUtELFlBQUwsR0FBb0IsRUFBcEI7QUFDQTdPLGNBQU9DLElBQVAsQ0FBWSxLQUFLdUMsWUFBakIsRUFBK0J0QyxPQUEvQixDQUF1QyxxQkFBYTtBQUNsRCxhQUFNaUksU0FBUyxNQUFLM0YsWUFBTCxDQUFrQk0sU0FBbEIsQ0FBZjtBQUNBLGFBQU1pTSxVQUFVdlIseUJBQXVCc0YsU0FBdkIsU0FBc0NsQyxLQUF0QyxFQUFoQjtBQUNBO0FBQ0E7QUFDQSxhQUFNcUIsWUFBWSxFQUFsQjtBQUNBakMsZ0JBQU9DLElBQVAsQ0FBWWtJLE1BQVosRUFBb0JqSSxPQUFwQixDQUE0Qix1QkFBZTtBQUN6QyxlQUFNOEMsV0FBV21GLE9BQU82RyxXQUFQLENBQWpCO0FBQ0EsZUFBTUMsWUFBWUYsUUFBUWpOLElBQVIsNEJBQXNDa04sV0FBdEMsU0FBdURwTyxLQUF2RCxFQUFsQjtBQUNBO0FBQ0E7QUFDQSxlQUFJcU8sVUFBVTNPLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDMUI7QUFDRDtBQUNEMkIscUJBQVUrTSxXQUFWLElBQXlCO0FBQ3ZCaE0sK0JBRHVCO0FBRXZCaU07QUFGdUIsWUFBekI7QUFJQSxlQUFNQyx1QkFBdUJELFVBQVVuUSxJQUFWLENBQWUsY0FBZixDQUE3QjtBQUNBLGlCQUFLcVEsc0JBQUwsQ0FBNEJELG9CQUE1QixFQUFrREQsU0FBbEQsRUFBNkRqTSxRQUE3RDtBQUNELFVBZEQ7QUFlQSxlQUFLNkwsWUFBTCxDQUFrQi9MLFNBQWxCLElBQStCO0FBQzdCaU0sMkJBRDZCO0FBRTdCOU07QUFGNkIsVUFBL0I7QUFJRCxRQXpCRDtBQTBCRDs7OzRDQUVzQmlOLG9CLEVBQXNCRSxLLEVBQU9wTSxRLEVBQXVCO0FBQUE7O0FBQUEsV0FBYnNKLE1BQWEsdUVBQUosRUFBSTs7QUFDekV0SixnQkFBUzlDLE9BQVQsQ0FBaUIsZUFBTztBQUN0QixhQUFNeUssTUFBTXVFLHFCQUFxQi9PLEdBQXJCLEtBQTZCLGFBQXpDO0FBQ0EsYUFBSXdLLFFBQVEsYUFBWixFQUEyQjtBQUN6QjtBQUNEO0FBQ0QsYUFBSUEsUUFBUTNLLE9BQU8ySyxHQUFQLENBQVosRUFBeUI7QUFBQTtBQUN2QjtBQUNBO0FBQ0EsaUJBQU0wRSxVQUFVRCxNQUFNdE4sSUFBTiw0QkFBb0MzQixHQUFwQyxRQUFoQjtBQUNBLGlCQUFNZ0IsYUFBTjtBQUNBLGlCQUFJbU8sVUFBVSxDQUFkO0FBQ0FELHFCQUFRbkosSUFBUixDQUFhLFNBQVM2QixJQUFULEdBQWdCO0FBQzNCLG1CQUFNaEMsUUFBUXZJLEVBQUUsSUFBRixDQUFkO0FBQ0E7QUFDQTtBQUNBMkQsb0JBQUtnTyxzQkFBTCxDQUE0QnhFLEdBQTVCLEVBQWlDNUUsS0FBakMsRUFBd0MvRixPQUFPQyxJQUFQLENBQVkwSyxHQUFaLENBQXhDLEVBQTBELE9BQTFEO0FBQ0EyRTtBQUNELGNBTkQ7QUFOdUI7QUFheEIsVUFiRCxNQWFPO0FBQ0w7QUFDQSxlQUFNbFIsUUFBUWdSLE1BQU10TixJQUFOLDBCQUFrQ3dLLE1BQWxDLEdBQTJDbk0sR0FBM0MsU0FBb0RTLEtBQXBELEVBQWQ7QUFDQSxlQUFJeEMsTUFBTWtDLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEI7QUFDRDtBQUNEcU8sd0JBQWFZLFFBQWIsQ0FBc0JDLGtCQUF0QixDQUF5Q3BSLEtBQXpDO0FBQ0E7QUFDQTtBQUNEO0FBQ0YsUUE1QkQ7QUE2QkQ7OztxQ0FHZTtBQUFBOztBQUNkLFdBQU0rRCxTQUFTLEVBQWY7QUFDQW5DLGNBQU9DLElBQVAsQ0FBWSxLQUFLNE8sWUFBakIsRUFBK0IzTyxPQUEvQixDQUF1QyxxQkFBYTtBQUNsRCxhQUFNaUksU0FBUyxPQUFLMEcsWUFBTCxDQUFrQi9MLFNBQWxCLENBQWY7QUFDQSxhQUFNaU0sVUFBVTVHLE9BQU80RyxPQUF2QjtBQUNBNU0sZ0JBQU9XLFNBQVAsSUFBb0IsRUFBcEI7QUFDQTlDLGdCQUFPQyxJQUFQLENBQVlrSSxPQUFPbEcsU0FBbkIsRUFBOEIvQixPQUE5QixDQUFzQyx1QkFBZTtBQUNuRCxlQUFNOEMsV0FBV21GLE9BQU9sRyxTQUFQLENBQWlCK00sV0FBakIsRUFBOEJoTSxRQUEvQztBQUNBLGVBQU1pTSxZQUFZOUcsT0FBT2xHLFNBQVAsQ0FBaUIrTSxXQUFqQixFQUE4QkMsU0FBaEQ7QUFDQTlNLGtCQUFPVyxTQUFQLEVBQWtCa00sV0FBbEIsSUFBaUMsT0FBS1MsaUJBQUwsQ0FDL0IzTSxTQUQrQixFQUUvQmtNLFdBRitCLEVBRy9CaE0sUUFIK0IsRUFJL0IrTCxPQUorQixFQUsvQkUsU0FMK0IsQ0FBakM7QUFPRCxVQVZEO0FBV0QsUUFmRDtBQWdCQSxjQUFPOU0sTUFBUDtBQUNEOzs7aUNBRVc7QUFDVixXQUFNckQsT0FBTztBQUNYNFEsZ0JBQU8sS0FBS2Q7QUFERCxRQUFiO0FBR0EsY0FBTyxLQUFLZSxVQUFMLENBQWdCN1EsSUFBaEIsQ0FBUDtBQUNEOzs7Z0NBRVVBLEksRUFBTTtBQUNmLGNBQU9BLElBQVA7QUFDRDs7O3VDQUVpQmdFLFMsRUFBV2tNLFcsRUFBYWhNLFEsRUFBVStMLE8sRUFBU0UsUyxFQUFXO0FBQ3RFLGNBQU8sSUFBUDtBQUNEOzs7eUJBckdxQjtBQUNwQixjQUFPL1IsT0FBT0MsZUFBUCxDQUF1QndDLFdBQXZCLENBQW1DNFAsUUFBMUM7QUFDRDs7Ozs7O21CQXNHWVosWTs7Ozs7Ozs7Ozs7Ozs7QUNwSGY7Ozs7Ozs7O0tBRU1pQixtQjs7Ozs7Ozs2QkFDV0MsWSxFQUFjck4sWSxFQUFjO0FBQ3pDLFdBQUlzTixXQUFXLElBQWY7QUFDQSxXQUFNbEIsWUFBWWlCLGFBQWFqQixTQUFiLElBQ2Isc0RBREw7QUFFQSxlQUFRQSxTQUFSO0FBQ0UsY0FBSyxzREFBTDtBQUNBO0FBQ0VrQixzQkFBVyw0QkFBa0J0TixZQUFsQixDQUFYO0FBSEo7QUFLQSxjQUFPc04sUUFBUDtBQUNEOzs7Ozs7bUJBR1lGLG1COzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJmOzs7Ozs7OztLQUVNRyxRO0FBQ0osdUJBQWM7QUFBQTs7QUFDWixVQUFLQyxlQUFMLEdBQXVCLEVBQXZCO0FBQ0E7QUFDQTtBQUNBLFVBQUtBLGVBQUwsR0FBdUI5UyxPQUFPK1MsaUJBQTlCO0FBQ0Q7Ozs7dUNBRWlCN1IsSyxFQUFPO0FBQ3ZCLFdBQU1tUixXQUFXblIsTUFBTVUsSUFBTixDQUFXLGdCQUFYLENBQWpCO0FBQ0EsV0FBSSxRQUFPeVEsUUFBUCx5Q0FBT0EsUUFBUCxPQUFxQixRQUF6QixFQUFtQztBQUNqQyxnQkFBTyxLQUFQO0FBQ0Q7QUFDRCxXQUFJM0csT0FBTzJHLFNBQVNyTixjQUFULENBQXdCLE1BQXhCLElBQWtDcU4sU0FBUzNHLElBQTNDLEdBQWtELFFBQTdEO0FBQ0EsV0FBSSxLQUFLb0gsZUFBTCxDQUFxQjlOLGNBQXJCLENBQW9DMEcsSUFBcEMsTUFBOEMsS0FBbEQsRUFBeUQ7QUFDdkRBLGdCQUFPLFFBQVA7QUFDRDs7QUFFRCxXQUFNc0gsaUJBQWlCWCxTQUFTck4sY0FBVCxDQUF3QixRQUF4QixJQUFvQ3FOLFNBQVNoUyxNQUE3QyxHQUFzRCxNQUE3RTs7QUFFQSxjQUFPLEtBQUt5UyxlQUFMLENBQXFCcEgsSUFBckIsRUFBMkJ1SCxhQUEzQixDQUF5Qy9SLEtBQXpDLEVBQWdEOFIsY0FBaEQsQ0FBUDtBQUNEOzs7d0NBRWtCOVIsSyxFQUFPO0FBQ3hCLFdBQU13SyxPQUFPeEssTUFBTVUsSUFBTixDQUFXLGVBQVgsS0FBK0IsWUFBNUM7QUFDQSxXQUFJOEosU0FBUyxZQUFiLEVBQTJCO0FBQ3pCLGdCQUFPLElBQVA7QUFDRDs7QUFFRCxXQUFNMkcsV0FBVyxLQUFLUyxlQUFMLENBQXFCcEgsSUFBckIsS0FBOEIsS0FBS29ILGVBQUwsQ0FBcUJJLE1BQXBFO0FBQ0EsY0FBT2IsU0FBU0Msa0JBQVQsQ0FBNEJwUixLQUE1QixDQUFQO0FBQ0Q7Ozs7OzttQkFHWTJSLFE7Ozs7Ozs7Ozs7Ozs7Ozs7S0NwQ1RNLE87QUFDSixzQkFBYztBQUFBOztBQUNaLFVBQUtDLGFBQUwsR0FBcUIsRUFBckI7O0FBRUEsU0FBSTFLLFNBQVN2QyxRQUFULENBQWtCa04sSUFBdEIsRUFBNEI7QUFDMUIsV0FBTUMsVUFBVTVLLFNBQVN2QyxRQUFULENBQWtCa04sSUFBbEIsQ0FBdUJFLEtBQXZCLENBQTZCLDBCQUE3QixDQUFoQjtBQUNBLFdBQUlELFdBQVdBLFFBQVFsUSxNQUFSLEtBQW1CLENBQWxDLEVBQXFDO0FBQ25DLGFBQU1nUSxnQkFBZ0IxUixLQUFLQyxLQUFMLENBQVc2UixtQkFBbUJGLFFBQVEsQ0FBUixDQUFuQixDQUFYLENBQXRCOztBQURtQztBQUFBO0FBQUE7O0FBQUE7QUFHbkMsZ0NBQW1CRixhQUFuQiw4SEFBa0M7QUFBQSxpQkFBdkJySSxJQUF1Qjs7QUFDaEMsaUJBQUlBLEtBQUtqSyxJQUFULEVBQWU7QUFDYixvQkFBS3NTLGFBQUwsQ0FBbUJySSxLQUFLakssSUFBeEIsSUFBZ0NpSyxLQUFLaEssSUFBTCxJQUFhLEVBQTdDO0FBQ0Q7QUFDRjtBQVBrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUXBDO0FBQ0Y7QUFDRjs7OztnQ0FFVUQsSSxFQUFNO0FBQ2YsY0FBTyxLQUFLc1MsYUFBTCxDQUFtQnRTLElBQW5CLEtBQTRCLEtBQW5DO0FBQ0Q7Ozs7OzttQkFHWXFTLE87Ozs7Ozs7Ozs7Ozs7O0FDdkJmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztLQUVNMVEsVztBQUVKLDBCQUFjO0FBQUE7O0FBQ1osVUFBS0wsTUFBTDtBQUNBLFVBQUtxUixVQUFMO0FBQ0Q7Ozs7a0NBRVk7QUFBQTs7QUFDWCwwQkFBUzdQLG1CQUFULENBQTZCLElBQTdCO0FBQ0EsWUFBSzhQLHFCQUFMLEdBQTZCLElBQTdCO0FBQ0E7QUFDQSxZQUFLQyxZQUFMLEdBQW9CM1QsT0FBT3VDLE1BQTNCO0FBQ0E7QUFDQSxZQUFLcVIsYUFBTCxHQUFxQixLQUFLRCxZQUFMLENBQWtCMVQsZUFBdkM7QUFDQSxZQUFLNFQsYUFBTCxHQUFxQixLQUFLRCxhQUFMLENBQW1CMVEsT0FBeEM7QUFDQSxZQUFLNFEscUJBQUwsR0FBNkIsS0FBN0I7QUFDQSxZQUFLekIsUUFBTCxHQUFnQix3QkFBaEI7QUFDQTtBQUNBL1IsU0FBRU4sTUFBRixFQUFVK1QsTUFBVixDQUFpQixZQUFNO0FBQ3JCLGVBQUtDLGNBQUw7QUFDQSxnQkFBTyxJQUFQO0FBQ0QsUUFIRDtBQUlBMVQsU0FBRSxZQUFNO0FBQ04sZUFBS3VULGFBQUwsQ0FBbUI3TixXQUFuQjtBQUNBLGVBQUtpTyxhQUFMO0FBQ0QsUUFIRDtBQUlBLFlBQUtDLGVBQUwsR0FBdUJsVSxPQUFPd0Ysc0JBQTlCO0FBQ0Q7OztxQ0FFZTtBQUNkLFlBQUsyTyxTQUFMLEdBQWlCO0FBQ2ZsSyxpQkFBUSxLQUFLbUssWUFBTCxDQUFrQixLQUFLRixlQUFMLENBQXFCakssTUFBdkMsQ0FETztBQUVmeEUsbUJBQVUsS0FBSzJPLFlBQUwsQ0FBa0IsS0FBS0YsZUFBTCxDQUFxQnpPLFFBQXZDLENBRks7QUFHZjRPLGlCQUFRLEtBQUtELFlBQUwsQ0FBa0IsS0FBS0YsZUFBTCxDQUFxQkcsTUFBdkM7QUFITyxRQUFqQjtBQUtEOzs7a0NBVVlDLEcsRUFBSztBQUNoQixXQUFNclAsU0FBUyxFQUFmO0FBQ0FuQyxjQUFPQyxJQUFQLENBQVl1UixJQUFJSCxTQUFoQixFQUEyQm5SLE9BQTNCLENBQW1DLGVBQU87QUFDeEMsYUFBTTJQLGVBQWUyQixJQUFJSCxTQUFKLENBQWNsUixHQUFkLENBQXJCO0FBQ0FnQyxnQkFBT2hDLEdBQVAsSUFBYyw4QkFBb0JzUixPQUFwQixDQUNaNUIsWUFEWSxFQUVaMkIsSUFBSWhQLFlBQUosQ0FBaUJyQyxHQUFqQixLQUF5QixFQUZiLENBQWQ7QUFJRCxRQU5EO0FBT0EsY0FBT2dDLE1BQVA7QUFDRDs7O2tEQVU0QjtBQUMzQixZQUFLdVAsb0JBQUwsR0FBNEIsRUFBNUI7QUFDQSxXQUFNdlEsT0FBTyxJQUFiO0FBQ0EzRCxTQUFFLEtBQUtDLFFBQUwsQ0FBYywwQkFBZCxDQUFGLEVBQTZDeUksSUFBN0MsQ0FBa0QsU0FBUzZCLElBQVQsR0FBZ0I7QUFDaEUsYUFBSSxDQUFDNUcsS0FBSzZQLHFCQUFWLEVBQWlDO0FBQy9CN1AsZ0JBQUs2UCxxQkFBTCxHQUE2QnhULEVBQUUsSUFBRixFQUFRc0IsSUFBUixDQUFhLGlCQUFiLENBQTdCO0FBQ0Q7QUFDRHFDLGNBQUt1USxvQkFBTCxDQUEwQmxVLEVBQUUsSUFBRixFQUFRc0IsSUFBUixDQUFhLGlCQUFiLENBQTFCLElBQTZEdEIsRUFBRSxJQUFGLENBQTdEO0FBQ0QsUUFMRDtBQU1EOzs7c0NBRWdCO0FBQ2YsV0FBSSxLQUFLbVUsaUJBQUwsSUFBMEIsS0FBS0MsU0FBbkMsRUFBOEM7QUFDNUMsY0FBS0EsU0FBTCxDQUFlQyxHQUFmLENBQ0UsS0FERixFQUVFLEtBQUtGLGlCQUFMLENBQXVCRyxRQUF2QixHQUFrQ0MsR0FBbEMsR0FDSSxLQUFLSixpQkFBTCxDQUF1QkssTUFBdkIsRUFESixHQUVJLEtBQUtKLFNBQUwsQ0FBZUksTUFBZixFQUpOO0FBTUEsY0FBS0wsaUJBQUwsQ0FBdUI5USxHQUF2QixDQUEyQixRQUEzQixFQUFxQyxJQUFyQztBQUNEO0FBQ0Y7OztvQ0FFY29PLFMsRUFBVztBQUN4QixXQUFJLEtBQUswQyxpQkFBTCxLQUEyQjFDLFNBQS9CLEVBQTBDO0FBQ3hDO0FBQ0Q7QUFDRCxXQUFJLEtBQUswQyxpQkFBVCxFQUE0QjtBQUMxQixjQUFLQSxpQkFBTCxDQUF1QjlRLEdBQXZCLENBQTJCLFFBQTNCLEVBQXFDLEtBQXJDO0FBQ0Q7QUFDRCxZQUFLOFEsaUJBQUwsR0FBeUIxQyxTQUF6QjtBQUNBLFlBQUtpQyxjQUFMO0FBQ0EsWUFBS1UsU0FBTCxDQUFlek4sSUFBZjtBQUNEOzs7c0NBRWdCNUYsUSxFQUFVO0FBQUE7O0FBQ3pCLFdBQU00RCxTQUFTLEVBQWY7QUFDQSxXQUFNaEIsT0FBTyxJQUFiO0FBQ0FuQixjQUFPQyxJQUFQLENBQVksS0FBS2dTLGVBQWpCLEVBQWtDL1IsT0FBbEMsQ0FBMEMsMkJBQW1CO0FBQzNELGFBQU1nUyxXQUFXLE9BQUtELGVBQUwsQ0FBcUJoRixlQUFyQixDQUFqQjtBQUNBOUssZ0JBQU8rUCxTQUFTcFQsSUFBVCxDQUFjLGlCQUFkLENBQVAsSUFBMkNxQyxLQUFLZ1Isc0JBQUwsQ0FBNEJELFFBQTVCLENBQTNDO0FBQ0QsUUFIRDtBQUlBLFlBQUtFLGFBQUwsQ0FBbUI3VCxRQUFuQixFQUE2QixDQUFDNEQsTUFBRCxDQUE3QjtBQUNEOzs7NENBRXNCOFAsZSxFQUFpQjtBQUN0QyxXQUFNOVAsU0FBUyxFQUFmO0FBQ0FBLGNBQU84SyxlQUFQLEdBQXlCZ0YsZ0JBQWdCblQsSUFBaEIsQ0FBcUIsaUJBQXJCLENBQXpCO0FBQ0FxRCxjQUFPRixTQUFQLEdBQW1CLEVBQW5CO0FBQ0FnUSx1QkFBZ0JuUSxJQUFoQixDQUFxQiwwQkFBckIsRUFBaURvRSxJQUFqRCxDQUFzRCxTQUFTNkIsSUFBVCxHQUFnQjtBQUNwRSxhQUFNdEMsV0FBVyxFQUFqQjtBQUNBQSxrQkFBUzRNLEtBQVQsR0FBaUI3VSxFQUFFLElBQUYsRUFBUXNCLElBQVIsQ0FBYSxlQUFiLENBQWpCO0FBQ0FxRCxnQkFBT0YsU0FBUCxDQUFpQnpFLEVBQUUsSUFBRixFQUFRc0IsSUFBUixDQUFhLGVBQWIsQ0FBakIsSUFBa0QyRyxRQUFsRDtBQUNELFFBSkQ7QUFLQSxjQUFPdEQsTUFBUDtBQUNEOztBQUVEOzs7Ozs7OzhCQUlTO0FBQ1AsV0FBTXJDLGVBQWU1QyxPQUFPb1YsbUJBQVAsSUFBOEIsRUFBbkQ7QUFDQSxXQUFNN1UsV0FBVztBQUNmLHFDQUE0QjtBQURiLFFBQWpCO0FBR0F1QyxjQUFPQyxJQUFQLENBQVlILFlBQVosRUFBMEJJLE9BQTFCLENBQWtDLGVBQU87QUFDdkN6QyxrQkFBUzBDLEdBQVQsSUFBZ0JMLGFBQWFLLEdBQWIsQ0FBaEI7QUFDRCxRQUZEO0FBR0EsWUFBSzFDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7OzttQ0FFYU8sSSxFQUFNQyxJLEVBQU07QUFDeEIsMEJBQVNDLFdBQVQsQ0FBcUIsS0FBSzJTLFlBQTFCLEVBQXdDN1MsSUFBeEMsRUFBOENDLElBQTlDO0FBQ0Q7Ozs4QkFtQlF1SCxZLEVBQWNnQixjLEVBQWdCK0wsVSxFQUFZO0FBQ2pEO0FBQ0EsV0FBTUMsY0FBYyxzQkFBUyxLQUFULENBQXBCO0FBQ0EsV0FBTTFULE9BQU8sS0FBSzJULG1CQUFMLENBQXlCLEtBQUtwSCxpQkFBOUIsQ0FBYjtBQUNBLFdBQUk3RSxtQkFBbUIsUUFBdkIsRUFBaUM7QUFDL0IxSCxjQUFLeVMsTUFBTCxDQUFZbUIscUJBQVosQ0FBa0NILFVBQWxDLEVBQThDSSxJQUE5QyxDQUFtREgsV0FBbkQsSUFBa0U7QUFDaEUvTSxxQkFBVUQ7QUFEc0QsVUFBbEU7QUFHQTFHLGNBQUt5UyxNQUFMLENBQVltQixxQkFBWixDQUFrQ0gsVUFBbEMsRUFBOENLLGNBQTlDLENBQTZENU4sSUFBN0QsQ0FBa0V3TixXQUFsRTtBQUNELFFBTEQsTUFLTztBQUNMMVQsY0FBSzBILGNBQUwsRUFBcUIwQixlQUFyQixDQUFxQ3FLLFVBQXJDLEVBQWlETSxjQUFqRCxDQUFnRUYsSUFBaEUsQ0FBcUVILFdBQXJFLElBQW9GO0FBQ2xGL00scUJBQVVEO0FBRHdFLFVBQXBGO0FBR0ExRyxjQUFLMEgsY0FBTCxFQUFxQjBCLGVBQXJCLENBQXFDcUssVUFBckMsRUFBaURNLGNBQWpELENBQWdFRCxjQUFoRSxDQUErRTVOLElBQS9FLENBQW9Gd04sV0FBcEY7QUFDRDtBQUNELGNBQU8sS0FBS3hJLE9BQUwsQ0FBYWxMLElBQWIsQ0FBUDtBQUNEOzs7K0JBRW9CO0FBQUEsV0FBYkEsSUFBYSx1RUFBTixJQUFNOztBQUNuQixXQUFNZ1UsVUFBVWhVLFFBQVEsS0FBSzJULG1CQUFMLENBQXlCLEtBQUtwSCxpQkFBOUIsQ0FBeEI7QUFDQXlILGVBQVFDLE1BQVIsR0FBaUIsU0FBakI7QUFDQXBULG1CQUFZcVQsVUFBWixDQUF1QkYsT0FBdkI7QUFDQSxjQUFPLEtBQVA7QUFDRDs7OzRCQUVNO0FBQ0wsV0FBTWhVLE9BQU8sS0FBSzJULG1CQUFMLENBQXlCLEtBQUtwSCxpQkFBOUIsQ0FBYjtBQUNBdk0sWUFBS2lVLE1BQUwsR0FBYyxNQUFkO0FBQ0FwVCxtQkFBWXFULFVBQVosQ0FBdUJsVSxJQUF2QjtBQUNBLGNBQU8sS0FBUDtBQUNEOzs7eUNBRW1CMFMsRyxFQUFLO0FBQUE7O0FBQ3ZCLFdBQU1yUCxTQUFTO0FBQ2JvUCxpQkFBUTtBQUNObUIsa0NBQXVCLEVBRGpCO0FBRU5yQixzQkFBVztBQUZMO0FBREssUUFBZjtBQU1BRyxXQUFJdFIsT0FBSixDQUFZLGVBQU87QUFDakIsYUFBTUMsTUFBTXdLLElBQUk3TCxJQUFKLENBQVN1SSxFQUFyQjtBQUNBLGFBQU00TCxnQkFBZ0J0VCxZQUFZdVQsc0JBQVosQ0FBbUN2SSxJQUFJaEQsUUFBdkMsQ0FBdEI7QUFDQTtBQUNBeEYsZ0JBQU9oQyxHQUFQLElBQWM7QUFDWitILDRCQUFpQitLLGNBQWMvSyxlQURuQjtBQUVaaUwsaUNBQXNCRixjQUFjRSxvQkFGeEI7QUFHWjdMLHVCQUFZcUQsSUFBSTdMLElBQUosQ0FBU3dJLFVBSFQ7QUFJWitKLHNCQUFXO0FBSkMsVUFBZDtBQU1BLGFBQUlyUixPQUFPQyxJQUFQLENBQVlnVCxjQUFjRyxlQUExQixFQUEyQzlTLE1BQTNDLEdBQW9ELENBQXhELEVBQTJEO0FBQ3pETixrQkFBT0MsSUFBUCxDQUFZZ1QsY0FBY0csZUFBMUIsRUFBMkNsVCxPQUEzQyxDQUFtRCxxQkFBYTtBQUM5RGlDLG9CQUFPb1AsTUFBUCxDQUFjbUIscUJBQWQsQ0FBb0M1UCxTQUFwQyxJQUFpRG1RLGNBQWNHLGVBQWQsQ0FBOEJ0USxTQUE5QixDQUFqRDtBQUNELFlBRkQ7QUFHRDtBQUNEWCxnQkFBT2hDLEdBQVAsRUFBWWtSLFNBQVosR0FBd0IsT0FBS2dDLGtCQUFMLENBQXdCbFQsR0FBeEIsQ0FBeEI7QUFDRCxRQWhCRDtBQWlCQWdDLGNBQU9vUCxNQUFQLENBQWNGLFNBQWQsR0FBMEIsS0FBS2dDLGtCQUFMLENBQXdCLFFBQXhCLENBQTFCO0FBQ0EsY0FBT2xSLE1BQVA7QUFDRDs7O3dDQUVrQnlHLEksRUFBTTtBQUFBOztBQUN2QixXQUFNekcsU0FBUyxFQUFmO0FBQ0FuQyxjQUFPQyxJQUFQLENBQVksS0FBS29SLFNBQUwsQ0FBZXpJLElBQWYsQ0FBWixFQUFrQzFJLE9BQWxDLENBQTBDLHVCQUFlO0FBQ3ZEaUMsZ0JBQU9tUixXQUFQLElBQXNCLE9BQUtqQyxTQUFMLENBQWV6SSxJQUFmLEVBQXFCMEssV0FBckIsRUFBa0MxSCxTQUFsQyxFQUF0QjtBQUNELFFBRkQ7QUFHQSxjQUFPekosTUFBUDtBQUNEOzs7dUJBM0xxQm9SLEssRUFBTztBQUMzQixZQUFLM0MscUJBQUwsR0FBNkIyQyxLQUE3QjtBQUNELE07eUJBRXVCO0FBQ3RCLGNBQU8sS0FBSzNDLHFCQUFaO0FBQ0Q7Ozt5QkFjcUI7QUFDcEIsV0FBSSxLQUFLYyxvQkFBVCxFQUErQjtBQUM3QixnQkFBTyxLQUFLQSxvQkFBWjtBQUNEO0FBQ0QsWUFBSzhCLDBCQUFMO0FBQ0EsY0FBTyxLQUFLOUIsb0JBQVo7QUFDRDs7O2dDQThFaUI1UyxJLEVBQU07QUFDdEIsV0FBTTJVLFFBQVFqVyxFQUFFLDZCQUFGLENBQWQ7QUFDQSxXQUFNa1csU0FBU2xXLEVBQUUscUNBQUYsQ0FBZjtBQUNBLFdBQU1tVyxRQUFRblcsRUFBRSx1QkFBRixDQUFkOztBQUVBbVcsYUFDR0MsSUFESCxDQUNRLE1BRFIsRUFDZ0JwVyxFQUFFLHVCQUFGLEVBQTJCb1csSUFBM0IsQ0FBZ0MsU0FBaEMsQ0FEaEIsRUFFR0MsR0FGSCxDQUVPclcsRUFBRSx1QkFBRixFQUEyQm9XLElBQTNCLENBQWdDLFNBQWhDLENBRlAsRUFHR0UsUUFISCxDQUdZTCxLQUhaOztBQUtBQyxjQUNHRyxHQURILENBQ09qVixLQUFLTSxTQUFMLENBQWVKLElBQWYsQ0FEUCxFQUVHZ1YsUUFGSCxDQUVZTCxLQUZaOztBQUlBQSxhQUFNLENBQU4sRUFBU00sTUFBVDtBQUNEOzs7NENBc0U2QnZDLEcsRUFBSztBQUNqQyxXQUFNclAsU0FBUztBQUNiK0YsMEJBQWlCLEVBREo7QUFFYmlMLCtCQUFzQixFQUZUO0FBR2JDLDBCQUFpQjtBQUhKLFFBQWY7QUFLQTVCLFdBQUl0UixPQUFKLENBQVksZUFBTztBQUNqQjtBQUNBLGFBQU00QyxZQUFZNkgsSUFBSTdMLElBQUosQ0FBU2dFLFNBQTNCO0FBQ0FYLGdCQUFPZ1Isb0JBQVAsQ0FBNEJuTyxJQUE1QixDQUFpQ2xDLFNBQWpDO0FBQ0EsYUFBTWdILGtCQUFrQmEsSUFBSTdMLElBQUosQ0FBU2dMLGVBQVQsSUFBNEIsS0FBcEQ7O0FBRUEsYUFBTWtLLGtCQUFrQnJVLFlBQVlzVSxnQkFBWixDQUE2QnRKLElBQUloRCxRQUFqQyxFQUEyQzdFLFNBQTNDLENBQXhCOztBQUVBLGFBQUlnSCxvQkFBb0IsS0FBeEIsRUFBK0I7QUFDN0I7QUFDQTNILGtCQUFPK0YsZUFBUCxDQUF1QnBGLFNBQXZCLElBQW9DO0FBQ2xDa0ssdUJBQVVyQyxJQUFJN0wsSUFBSixDQUFTa08sUUFEZTtBQUVsQ2xLLGlDQUZrQztBQUdsQ21LLDhCQUFpQnRDLElBQUk3TCxJQUFKLENBQVNtTyxlQUhRO0FBSWxDNEYsNkJBQWdCbUIsZUFKa0I7QUFLbENsSztBQUxrQyxZQUFwQztBQU9ELFVBVEQsTUFTTztBQUNMM0gsa0JBQU8rRixlQUFQLENBQXVCcEYsU0FBdkIsSUFBb0M7QUFDbENrSyx1QkFBVXJDLElBQUk3TCxJQUFKLENBQVNrTyxRQURlO0FBRWxDbEssaUNBRmtDO0FBR2xDbUssOEJBQWlCdEMsSUFBSTdMLElBQUosQ0FBU21PLGVBSFE7QUFJbENuRDtBQUprQyxZQUFwQztBQU1BO0FBQ0EzSCxrQkFBT2lSLGVBQVAsQ0FBdUJ0USxTQUF2QixJQUFvQ2tSLGVBQXBDO0FBQ0Q7QUFFRixRQTVCRDtBQTZCQSxjQUFPN1IsTUFBUDtBQUNEOzs7c0NBRXVCcVAsRyxFQUFLMU8sUyxFQUFXO0FBQ3RDLFdBQU1YLFNBQVM7QUFDYndRLGVBQU0sRUFETztBQUViQyx5QkFBZ0I7QUFGSCxRQUFmO0FBSUFwQixXQUFJdFIsT0FBSixDQUFZLGVBQU87QUFDakIsYUFBTUMsTUFBTXdLLElBQUk3TCxJQUFKLENBQVNpRSxhQUFyQjtBQUNBWixnQkFBT3dRLElBQVAsQ0FBWXhTLEdBQVosSUFBbUI7QUFDakI7QUFDQXNGLHFCQUFVa0YsSUFBSTdMLElBQUosQ0FBU3lOO0FBRkYsVUFBbkI7QUFJQXBLLGdCQUFPeVEsY0FBUCxDQUFzQjVOLElBQXRCLENBQTJCN0UsR0FBM0I7QUFDRCxRQVBEO0FBUUEsY0FBT2dDLE1BQVA7QUFDRDs7Ozs7O21CQUdZeEMsVzs7Ozs7Ozs7Ozs7Ozs7QUM5UmY7Ozs7Ozs7Ozs7OztLQUVNdVUsTzs7Ozs7Ozs7Ozs7bUNBQ1U5VixLLEVBQU87QUFDbkIsV0FBTW9LLE9BQU8sdUJBQWEyTCxNQUFiLENBQW9CL1YsS0FBcEIsQ0FBYjtBQUNBLFdBQU1nVyxTQUFTNUwsS0FBSzFKLElBQUwsQ0FBVSxRQUFWLENBQWY7QUFDQSxXQUFJc1YsTUFBSixFQUFZO0FBQ1YsZ0JBQU9BLE9BQU9DLE9BQVAsRUFBUDtBQUNEO0FBQ0QsY0FBTzdMLEtBQUs4TCxJQUFMLEVBQVA7QUFDRDs7O3dDQUVrQmxXLEssRUFBTztBQUN4QixXQUFNb0ssT0FBT3BLLE1BQU0sQ0FBTixDQUFiO0FBQ0EsV0FBTW1XLFNBQVM7QUFDYkMsd0JBQWUsS0FERjtBQUViQyxnQ0FBdUIsSUFGVjtBQUdiQywrQkFBc0IsSUFIVDtBQUliQyxvQkFBV3pYLE9BQU8wWCxRQUFQLENBQWdCQztBQUpkLFFBQWY7QUFNQTtBQUNFLFdBQU1ULFNBQVNsWCxPQUFPNFgsV0FBUCxDQUFtQnZGLFFBQW5CLENBQTRCL0csSUFBNUIsRUFBa0MrTCxNQUFsQyxFQUEwQzFXLEdBQTFDLENBQThDLGNBQTlDLENBQWY7QUFDQU8sYUFBTVUsSUFBTixDQUFXLFFBQVgsRUFBcUJzVixNQUFyQjtBQUNGO0FBQ0Q7Ozs7OzttQkFJWUYsTzs7Ozs7Ozs7Ozs7bUJDdkJTYSxHOztBQUx4Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRWUsVUFBU0EsR0FBVCxHQUFlO0FBQzVCLE9BQUksT0FBTzdYLE9BQU8rUyxpQkFBZCxLQUFxQyxXQUF6QyxFQUFzRDtBQUNwRC9TLFlBQU8rUyxpQkFBUCxHQUEyQixFQUEzQjtBQUNEO0FBQ0QvUyxVQUFPK1MsaUJBQVAsQ0FBeUIsU0FBekIsSUFBc0MsdUJBQXRDO0FBQ0EvUyxVQUFPK1MsaUJBQVAsQ0FBeUIsTUFBekIsSUFBbUMsb0JBQW5DO0FBQ0EvUyxVQUFPK1MsaUJBQVAsQ0FBeUIsT0FBekIsSUFBb0MscUJBQXBDO0FBQ0EvUyxVQUFPK1MsaUJBQVAsQ0FBeUIsUUFBekIsSUFBcUMsc0JBQXJDO0FBQ0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNiRDs7Ozs7Ozs7Ozs7O0tBRU0rRSxLOzs7Ozs7Ozs7OzttQ0FDVTVXLEssRUFBTztBQUNuQixXQUFNNlcsT0FBTzdXLE1BQU0wRCxJQUFOLENBQVcsS0FBWCxFQUFrQmxCLEtBQWxCLEVBQWI7QUFDQSxjQUFPO0FBQ0xzVSxjQUFLRCxLQUFLckIsSUFBTCxDQUFVLEtBQVYsQ0FEQTtBQUVMdUIsY0FBS0YsS0FBS3JCLElBQUwsQ0FBVSxLQUFWO0FBRkEsUUFBUDtBQUlEOzs7Ozs7bUJBR1lvQixLOzs7Ozs7Ozs7Ozs7OztBQ1pmOzs7Ozs7Ozs7Ozs7S0FFTUksSTs7Ozs7Ozs7Ozs7bUNBQ1VoWCxLLEVBQU87QUFDbkIsY0FBTztBQUNMaVgsZUFBTWpYLE1BQU1VLElBQU4sQ0FBVyxjQUFYLElBQTZCVixNQUFNVSxJQUFOLENBQVcsY0FBWCxDQUE3QixHQUEwRFYsTUFBTXdWLElBQU4sQ0FBVyxNQUFYLENBRDNEO0FBRUwwQixpQkFBUWxYLE1BQU1rVyxJQUFOO0FBRkgsUUFBUDtBQUlEOzs7Ozs7bUJBR1ljLEk7Ozs7Ozs7Ozs7Ozs7O0FDWGY7Ozs7Ozs7Ozs7OztLQUVNRyxVOzs7Ozs7Ozs7OzttQ0FDVW5YLEssRUFBTztBQUNuQixXQUFNb0ssT0FBTyx1QkFBYTJMLE1BQWIsQ0FBb0IvVixLQUFwQixDQUFiO0FBQ0EsV0FBTWdXLFNBQVM1TCxLQUFLMUosSUFBTCxDQUFVLFFBQVYsQ0FBZjtBQUNBLFdBQUlzVixNQUFKLEVBQVk7QUFDVixnQkFBT0EsT0FBT0MsT0FBUCxFQUFQO0FBQ0Q7QUFDRCxjQUFPN0wsS0FBSzhMLElBQUwsRUFBUDtBQUNEOzs7d0NBRWtCbFcsSyxFQUFPO0FBQ3hCLFdBQU1vSyxPQUFPcEssTUFBTSxDQUFOLENBQWI7QUFDQTs7QUFFQSxXQUFNbVcsU0FBUztBQUNiaUIseUJBQWdCLEtBREg7QUFFYkMsbUJBQVU7QUFDUkMsbUJBQVE7QUFDTkMseUJBQVl6WSxPQUFPNFgsV0FBUCxDQUFtQmMsVUFEekI7QUFFTkMsdUJBQVU7QUFGSjtBQURBLFVBRkc7QUFRYnJCLHdCQUFlLEtBUkY7QUFTYkMsZ0NBQXVCLElBVFY7QUFVYkMsK0JBQXNCLElBVlQ7QUFXYm9CLG9CQUFXLElBWEU7QUFZYm5CLG9CQUFXelgsT0FBTzBYLFFBQVAsQ0FBZ0JDO0FBWmQsUUFBZjtBQWNBO0FBQ0EsV0FBSTtBQUNGLGFBQU1ULFNBQVNsWCxPQUFPNFgsV0FBUCxDQUFtQnZGLFFBQW5CLENBQTRCL0csSUFBNUIsRUFBa0MrTCxNQUFsQyxFQUEwQzFXLEdBQTFDLENBQThDLGNBQTlDLENBQWY7QUFDQXVXLGdCQUFPdk8sRUFBUCxDQUFVLEtBQVYsRUFBaUIsaUJBQVM7QUFDeEIsZUFBSXBILE1BQU1LLElBQU4sQ0FBV2lYLE9BQVgsS0FBdUIsRUFBdkIsSUFBNkJ0WCxNQUFNSyxJQUFOLENBQVdpWCxPQUFYLEtBQXVCN1ksT0FBTzBYLFFBQVAsQ0FBZ0JvQixLQUFoQixHQUF3QixFQUFoRixFQUFvRjtBQUNsRjtBQUNBdlgsbUJBQU13WCxNQUFOO0FBQ0Q7QUFDRixVQUxEO0FBTUE3QixnQkFBT3ZPLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLGlCQUFTO0FBQzFCcEgsaUJBQU1LLElBQU4sQ0FBV29YLFNBQVgsR0FBdUJ6WCxNQUFNSyxJQUFOLENBQVdvWCxTQUFYLENBQXFCbEssT0FBckIsQ0FBNkIsZ0JBQTdCLEVBQStDLEdBQS9DLENBQXZCO0FBQ0QsVUFGRDtBQUdBNU4sZUFBTVUsSUFBTixDQUFXLFFBQVgsRUFBcUJzVixNQUFyQjtBQUNELFFBWkQsQ0FZRSxPQUFPMUosQ0FBUCxFQUFVO0FBQ1ZySSxpQkFBUUMsR0FBUixDQUFZbEUsS0FBWixFQUFtQm9LLElBQW5CO0FBQ0E7QUFDRDtBQUNEO0FBQ0Q7Ozs7OzttQkFJWStNLFU7Ozs7Ozs7Ozs7Ozs7O0FDcERmOzs7Ozs7Ozs7Ozs7S0FFTVksYTs7O0FBQ0osMEJBQVkzVCxZQUFaLEVBQTBCO0FBQUE7O0FBQUEsMEhBQ2xCLHNEQURrQixFQUNzQ0EsWUFEdEM7QUFFekI7Ozs7Z0NBRVUxRCxJLEVBQU07QUFDZixXQUFNZ1UsVUFBVWhVLElBQWhCO0FBQ0FnVSxlQUFRc0QsUUFBUixHQUFtQixLQUFLQyxhQUFMLEVBQW5CO0FBQ0EsY0FBT3ZELE9BQVA7QUFDRDs7O3VDQUVpQmhRLFMsRUFBV2tNLFcsRUFBYWhNLFEsRUFBVStMLE8sRUFBU0UsUyxFQUFXO0FBQ3RFLFdBQU1DLHVCQUF1QkQsVUFBVW5RLElBQVYsQ0FBZSxjQUFmLENBQTdCO0FBQ0EsV0FBTXFELFNBQVMsS0FBS21VLGtCQUFMLENBQXdCcEgsb0JBQXhCLEVBQThDRCxTQUE5QyxFQUF5RGpNLFFBQXpELENBQWY7QUFDQSxjQUFPYixNQUFQO0FBQ0Q7Ozt3Q0FFa0IrTSxvQixFQUFzQkUsSyxFQUFPcE0sUSxFQUF1QjtBQUFBOztBQUFBLFdBQWJzSixNQUFhLHVFQUFKLEVBQUk7O0FBQ3JFLFdBQU1uSyxTQUFTLEVBQWY7O0FBRUFhLGdCQUFTOUMsT0FBVCxDQUFpQixlQUFPO0FBQ3RCLGFBQU15SyxNQUFNdUUscUJBQXFCL08sR0FBckIsS0FBNkIsYUFBekM7QUFDQSxhQUFJd0ssUUFBUSxhQUFaLEVBQTJCO0FBQ3pCO0FBQ0E7QUFDRDtBQUNELGFBQUlBLFFBQVEzSyxPQUFPMkssR0FBUCxDQUFaLEVBQXlCO0FBQUE7QUFDdkI7QUFDQTtBQUNBLGlCQUFNMEUsVUFBVUQsTUFBTXROLElBQU4sNEJBQW9DM0IsR0FBcEMsUUFBaEI7QUFDQSxpQkFBTWdCLGFBQU47QUFDQSxpQkFBSW1PLFVBQVUsQ0FBZDtBQUNBbk4sb0JBQU9oQyxHQUFQLElBQWMsRUFBZDtBQUNBa1AscUJBQVFuSixJQUFSLENBQWEsU0FBUzZCLElBQVQsR0FBZ0I7QUFDM0IsbUJBQU1oQyxRQUFRdkksRUFBRSxJQUFGLENBQWQ7QUFDQTJFLHNCQUFPaEMsR0FBUCxFQUFZNkUsSUFBWixDQUFpQjdELEtBQUttVixrQkFBTCxDQUF3QjNMLEdBQXhCLEVBQTZCNUUsS0FBN0IsRUFBb0MvRixPQUFPQyxJQUFQLENBQVkwSyxHQUFaLENBQXBDLEVBQXNELE9BQXRELENBQWpCO0FBQ0EyRTtBQUNELGNBSkQ7QUFQdUI7QUFZeEIsVUFaRCxNQVlPO0FBQ0w7QUFDQSxlQUFNbFIsUUFBUWdSLE1BQU10TixJQUFOLDBCQUFrQ3dLLE1BQWxDLEdBQTJDbk0sR0FBM0MsU0FBb0RTLEtBQXBELEVBQWQ7QUFDQSxlQUFJeEMsTUFBTWtDLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIrQixxQkFBUWtVLElBQVIsa0NBQTRDakssTUFBNUMsR0FBcURuTSxHQUFyRDtBQUNBO0FBQ0Q7QUFDRGdDLGtCQUFPaEMsR0FBUCxJQUFjLHVCQUFhb1AsUUFBYixDQUFzQmlILGlCQUF0QixDQUF3Q3BZLEtBQXhDLENBQWQ7QUFDRDtBQUNGLFFBM0JEO0FBNEJBLGNBQU8rRCxNQUFQO0FBQ0Q7Ozs7OzttQkFHWWdVLGE7Ozs7Ozs7O0FDdERmLDBDIiwiZmlsZSI6InZpc3VhbC1idWlsZGVyL3NjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDhjM2Y0MzQ5NDViOTVhZDE5NTgzXG4gKiovIiwiaW1wb3J0ICcuL2J1bmRsZS5jc3MnO1xuXG5pbXBvcnQgRnJvbnRlbmRNb25zdGVyIGZyb20gJy4vRnJvbnRlbmRNb25zdGVyJztcblxud2luZG93LkZyb250ZW5kTW9uc3RlciA9IG5ldyBGcm9udGVuZE1vbnN0ZXIoKTtcbi8vXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzXG4gKiovIiwiaW1wb3J0IEZyYW1lQXBpIGZyb20gJy4vLi4vdmlzdWFsLWZyYW1lL0ZyYW1lQXBpJztcblxuY2xhc3MgQmFzZUVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IodmlzdWFsQnVpbGRlciwgbmFtZSkge1xuICAgIHRoaXMudmlzdWFsQnVpbGRlciA9IHZpc3VhbEJ1aWxkZXI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhcmdldCA9ICQodGhpcy52aXN1YWxCdWlsZGVyLnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKVswXS5jb250ZW50V2luZG93O1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgLy8gZGVhY3RpdmF0ZSBjdXJyZW50IHNlbGVjdGVkIGVudmlyb25tZW50XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gdGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkge1xuICAgICAgdGhpcy52aXN1YWxCdWlsZGVyLmVudmlyb25tZW50cy5nZXQodGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkuZGVhY3RpdmF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0YXJnZXQkKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldC4kO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIuY2xlYXJTdGFja2FibGUoKTtcbiAgfVxuXG4gIHNlbmRNZXNzYWdlKGZ1bmMsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy50YXJnZXQsIGZ1bmMsIGFyZ3MpO1xuICB9XG5cbiAgcGFnZUNoYW5nZWQoKSB7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlRW52aXJvbm1lbnQ7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJjbGFzcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG5cbiAgfVxuXG4gIGluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSkge1xuXG4gIH1cblxuICBzdGF0aWMgZ2V0IGZyYW1lJCgpIHtcbiAgICByZXR1cm4gd2luZG93LiQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUVkaXRhYmxlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9CYXNlRWRpdGFibGUuanNcbiAqKi8iLCJjbGFzcyBGcmFtZUFwaSB7XG4gIHN0YXRpYyBnZXQgaXNJZSgpIHtcbiAgICAvKiBnbG9iYWwgaXMgKi9cbiAgICBpZiAodHlwZW9mKGlzKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBpcy5pZSgpOy8vIHx8IGlzLmVkZ2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRpYyBiaW5kTWVzc2FnZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFja0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgIGxldCBtZXNzYWdlID0gbnVsbDtcbiAgICAgIGlmIChGcmFtZUFwaS5pc0llKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZSA9IGV2ZW50LmRhdGE7XG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0ZW5lclttZXNzYWdlLmZ1bmNdKSB7XG4gICAgICAgIGxpc3RlbmVyW21lc3NhZ2UuZnVuY10uYXBwbHkobGlzdGVuZXIsIG1lc3NhZ2UuYXJncyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElFOFxuICAgICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbm1lc3NhZ2UnLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHNlbmRNZXNzYWdlKHRhcmdldCwgZnVuYywgYXJncykge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBmdW5jLFxuICAgICAgYXJnc1xuICAgIH07XG4gICAgY29uc3QgbWVzc2FnZSA9IEZyYW1lQXBpLmlzSWUgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IGRhdGE7XG5cbiAgICB0YXJnZXQucG9zdE1lc3NhZ2UobWVzc2FnZSwgJyonKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcmFtZUFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0ZyYW1lQXBpLmpzXG4gKiovIiwiaW1wb3J0IFZpc3VhbEJ1aWxkZXIgZnJvbSAnLi9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlcic7XG5pbXBvcnQgVmlzdWFsRnJhbWUgZnJvbSAnLi9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZSc7XG5pbXBvcnQgSGFzaEFwaSBmcm9tICcuL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGknO1xuXG5jbGFzcyBGcm9udGVuZE1vbnN0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtcygpO1xuICAgIHRoaXMudmlzdWFsQnVsZGVyID0gbnVsbDtcbiAgICB0aGlzLmhhc2hBcGkgPSBuZXcgSGFzaEFwaSgpO1xuICAgIGlmICh3aW5kb3cucGFyZW50ICE9PSB3aW5kb3cgJiYgd2luZG93LnBhcmVudC5Gcm9udGVuZE1vbnN0ZXIpIHtcbiAgICAgIGlmICh3aW5kb3cucGFyZW50LkZyb250ZW5kTW9uc3Rlci5oYXNCdWlsZGVyKSB7XG4gICAgICAgIHRoaXMuVmlzdWFsRnJhbWUgPSBuZXcgVmlzdWFsRnJhbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogZ2xvYmFsIHNtb290aFNjcm9sbDogZmFsc2UqL1xuICAgIGlmICh0eXBlb2Yoc21vb3RoU2Nyb2xsKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNtb290aFNjcm9sbC5pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgVmlzdWFsQnVpbGRlciBjbGFzcyBpbnN0YW5jZVxuICAgKiBAcmV0dXJucyBWaXN1YWxCdWlsZGVyXG4gICAqL1xuICBnZXQgYnVpbGRlcigpIHtcbiAgICBpZiAodGhpcy52aXN1YWxCdWxkZXIgPT09IG51bGwpIHtcbiAgICAgIHRoaXMudmlzdWFsQnVsZGVyID0gbmV3IFZpc3VhbEJ1aWxkZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmlzdWFsQnVsZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgRnJvbnRlbmRNb25zdGVyIGluc3RhbmNlIGhhcyBWaXN1YWwgQnVpbGRlciBvbiBwYWdlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGhhc0J1aWxkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRlci4kYnVpbGRlci5sZW5ndGggPT09IDE7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBGcm9udGVuZE1vbnN0ZXIgc2V0dGluZ3MuXG4gICAqIFVzZXMgRnJvbnRlbmRNb25zdGVyU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuRnJvbnRlbmRNb25zdGVyU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh1c2VyU2V0dGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICB9KTtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJvbnRlbmRNb25zdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvRnJvbnRlbmRNb25zdGVyLmpzXG4gKiovIiwiaW1wb3J0IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQnO1xuaW1wb3J0IE1hdGVyaWFsc0Vudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50JztcbmltcG9ydCBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50JztcbmltcG9ydCBBY3Rpb25FbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudCc7XG5pbXBvcnQgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCc7XG5pbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi8uLi92aXN1YWwtZnJhbWUvRnJhbWVBcGknO1xuLy8gaW1wb3J0IEVkaXRhYmxlIGZyb20gJy4vRWRpdGFibGUnO1xuXG5jbGFzcyBWaXN1YWxCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLnJlc29sdXRpb25Td2l0Y2hlcigpO1xuXG4gICAgdGhpcy5lbnZpcm9ubWVudHMgPSBuZXcgTWFwKFtcbiAgICAgIFsnc2l0ZS1zdHJ1Y3R1cmUnLCBuZXcgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdzaXRlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsncGFnZS1zdHJ1Y3R1cmUnLCBuZXcgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdwYWdlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsnbWF0ZXJpYWxzJywgbmV3IE1hdGVyaWFsc0Vudmlyb25tZW50KHRoaXMsICdtYXRlcmlhbHMnKV0sXG4gICAgICBbJ2N1c3RvbWl6YXRpb24nLCBuZXcgQ3VzdG9taXphdGlvbkVudmlyb25tZW50KHRoaXMsICdjdXN0b21pemF0aW9uJyldLFxuICAgICAgWydhY3Rpb24nLCBuZXcgQWN0aW9uRW52aXJvbm1lbnQodGhpcywgJ2FjdGlvbicpXSxcbiAgICBdKTtcblxuICAgIHRoaXMuZW52aXJvbm1lbnRTZWxlY3RvcigpO1xuXG4gICAgLy8gc2VsZWN0IGZpcnN0IGVudmlyb25tZW50IGJ5IGRlZmF1bHRcbiAgICB0aGlzLnN3aXRjaEVudmlyb25tZW50KCdzaXRlLXN0cnVjdHVyZScpO1xuICAgICQoJy5tb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJylcbiAgICAgIC5maXJzdCgpXG4gICAgICAubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICBGcmFtZUFwaS5iaW5kTWVzc2FnZUxpc3RlbmVyKHRoaXMpO1xuXG4gICAgLy8gdGhpcy5lZGl0YWJsZSA9IG5ldyBFZGl0YWJsZSgpO1xuXG4gICAgdGhpcy5jb250cm9scygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgVmlzdWFsQnVpbGRlciBzZXR0aW5ncy5cbiAgICogVXNlcyBWaXN1YWxCdWlsZGVyU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuVmlzdWFsQnVpbGRlclNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgJ2VsZW1lbnQtc2VsZWN0b3InOiAnLm1vbnN0ZXItdmlzdWFsLWJ1aWxkZXInLFxuICAgICAgJ2ZyYW1lLXNlbGVjdG9yJzogJy5tb25zdGVyLXZpc3VhbC1mcmFtZScsXG4gICAgICBidW5kbGVzOiB7fSxcbiAgICAgICdzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJzogJ21vbnN0ZXItc3RhY2thYmxlLWNvbnRhaW5lcicsXG4gICAgICAnbmV3LWJsb2NrLXVybCc6ICcvbW9uc3Rlci92aXN1YWwtYnVpbGRlci9uZXctYmxvY2snLFxuICAgIH07XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuJGJ1aWxkZXIgPSAkKHRoaXMuc2V0dGluZ3NbJ2VsZW1lbnQtc2VsZWN0b3InXSk7XG4gICAgdGhpcy4kc3RhY2thYmxlID0gJChgLiR7dGhpcy5zZXR0aW5nc1snc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyddfWApO1xuICB9XG5cbiAgcmVzb2x1dGlvblN3aXRjaGVyKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGJlbUVsZW0gPSAncmVzb2x1dGlvbi1zd2l0Y2hlcl9fcmVzb2x1dGlvbi1saW5rJztcblxuICAgIGNvbnN0ICRyZXNvbHV0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRyZXNvbHV0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAkcmVzb2x1dGlvbkxpbmtzLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgICAgJCh0aGF0LnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKS53aWR0aCgkKHRoaXMpLmRhdGEoJ3Jlc29sdXRpb25XaWR0aCcpKTtcbiAgICAgICQodGhpcykubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGVudmlyb25tZW50U2VsZWN0b3IoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgYmVtRWxlbSA9ICdtb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJztcblxuICAgIGNvbnN0ICRzZWN0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRzZWN0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBjb25zdCBlbnZpcm9ubWVudE5hbWUgPSAkKHRoaXMpLmRhdGEoJ2Vudmlyb25tZW50TmFtZScpO1xuICAgICAgaWYgKHRoYXQuY3VycmVudEVudmlyb25tZW50ID09PSBlbnZpcm9ubWVudE5hbWUpIHtcbiAgICAgICAgJHNlY3Rpb25MaW5rcy5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgdGhhdC5lbnZpcm9ubWVudHMuZ2V0KGVudmlyb25tZW50TmFtZSkuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB0aGF0LmN1cnJlbnRFbnZpcm9ubWVudCA9IG51bGw7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgJHNlY3Rpb25MaW5rcy5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgIHRoYXQuc3dpdGNoRW52aXJvbm1lbnQoZW52aXJvbm1lbnROYW1lKTtcbiAgICAgICQodGhpcykubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHN3aXRjaEVudmlyb25tZW50KGVudmlyb25tZW50TmFtZSkge1xuICAgIHRoaXMuZW52aXJvbm1lbnRzLmdldChlbnZpcm9ubWVudE5hbWUpLmFjdGl2YXRlKCk7XG4gICAgdGhpcy5jdXJyZW50RW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudE5hbWU7XG4gIH1cblxuICBjbGVhclN0YWNrYWJsZSgpIHtcbiAgICB0aGlzLiRzdGFja2FibGUuZW1wdHkoKTtcbiAgfVxuXG4gIGNyZWF0ZVN0YWNrYWJsZVBhbmUoKSB7XG4gICAgY29uc3QgcGFuZUNsYXNzID0gYCR7dGhpcy5zZXR0aW5nc1snc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyddfV9fcGFuZWA7XG4gICAgY29uc3QgbW9kaWZpZXIgPSB0aGlzLiRzdGFja2FibGUuZmluZChgLiR7cGFuZUNsYXNzfWApLmxlbmd0aCA9PT0gMFxuICAgICAgPyBgJHtwYW5lQ2xhc3N9X2ZpcnN0YFxuICAgICAgOiAnJztcbiAgICBjb25zdCAkbmV3UGFuZSA9ICQoYDxkaXYgY2xhc3M9XCIke3BhbmVDbGFzc30gJHttb2RpZmllcn1cIj48L2Rpdj5gKTtcbiAgICB0aGlzLiRzdGFja2FibGUuYXBwZW5kKCRuZXdQYW5lKTtcbiAgICByZXR1cm4gJG5ld1BhbmU7XG4gIH1cblxuICBtYXRlcmlhbEJ5TmFtZShuYW1lKSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MubWF0ZXJpYWxzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5tYXRlcmlhbHNbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IGZyYW1lQ29udGVudFdpbmRvdygpIHtcbiAgICByZXR1cm4gJCh0aGlzLnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKVswXS5jb250ZW50V2luZG93O1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIC8vIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMuZnJhbWVDb250ZW50V2luZG93LCAnc2VyaWFsaXplQ29udGVudCcsIFsnbG9nJ10pO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKS5zZXJpYWxpemVQYWdlKCk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAgIC8vIHdlIGhhdmUgcmVzdWx0IHdoaWNoIGlzIGNvbnRlbnQgaW4gZm9ybWF0OlxuICAgIC8vIHJlZ2lvblxuICAgIC8vIC0tLSBtYXRlcmlhbCBpZFxuICAgIC8vIC0tLS0tLS0ga2V5cyA9PiB2YWx1ZXNcbiAgICAvL1xuICAgIC8vIG91ciBQcm92aWRlcnMgc2hvdWxkIGdldCBvbmx5IHRob3NlIGtleXMgdGhhdCB0aGV5IHByb3ZpZGVcbiAgICAvLyBwcm92aWRlZCBrZXlzIGFyZSBzdG9yZWQgaW4gZnJhbWVDb250ZW50V2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEudGVtcGxhdGUucHJvdmlkZWRLZXlzXG4gICAgY29uc3QgcmVzdWx0QnlQcm92aWRlcnMgPSB7fTtcbiAgICBjb25zdCBwcm92aWRlZEtleXMgPSB0aGlzLmZyYW1lQ29udGVudFdpbmRvdy5NT05TVEVSX0VESVRfTU9ERV9EQVRBLnRlbXBsYXRlLnByb3ZpZGVkS2V5cztcblxuICAgIE9iamVjdC5rZXlzKHByb3ZpZGVkS2V5cykuZm9yRWFjaChwcm92aWRlckluZGV4ID0+IHtcbiAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdID0ge307XG5cbiAgICAgIGNvbnN0IHJlZ2lvbnMgPSBwcm92aWRlZEtleXNbcHJvdmlkZXJJbmRleF07XG5cbiAgICAgIE9iamVjdC5rZXlzKHJlZ2lvbnMpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5oYXNPd25Qcm9wZXJ0eShyZWdpb25LZXkpID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1twcm92aWRlckluZGV4XVtyZWdpb25LZXldID0ge307XG5cbiAgICAgICAgLy8gZ28gZGVlcCB0byBtYXRlcmlhbCBpbmRlY2VzXG4gICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IHJlZ2lvbnNbcmVnaW9uS2V5XTtcblxuICAgICAgICBPYmplY3Qua2V5cyhtYXRlcmlhbHMpLmZvckVhY2gobWF0ZXJpYWxJbmRleCA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdFtyZWdpb25LZXldLmhhc093blByb3BlcnR5KG1hdGVyaWFsSW5kZXgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1twcm92aWRlckluZGV4XVtyZWdpb25LZXldW21hdGVyaWFsSW5kZXhdID0ge307XG5cbiAgICAgICAgICBjb25zdCBkYXRhS2V5cyA9IG1hdGVyaWFsc1ttYXRlcmlhbEluZGV4XTtcblxuICAgICAgICAgIGRhdGFLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHRbcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XS5oYXNPd25Qcm9wZXJ0eShrZXkpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1xuICAgICAgICAgICAgICBbcHJvdmlkZXJJbmRleF1cbiAgICAgICAgICAgICAgW3JlZ2lvbktleV1cbiAgICAgICAgICAgICAgW21hdGVyaWFsSW5kZXhdXG4gICAgICAgICAgICAgIFtrZXldID0gcmVzdWx0W3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF1ba2V5XTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHRCeVByb3ZpZGVycyk7XG4gICAgcmV0dXJuIHJlc3VsdEJ5UHJvdmlkZXJzO1xuICB9XG5cbiAgcGFnZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5lbnZpcm9ubWVudHMuZm9yRWFjaChcbiAgICAgIGVudmlyb25tZW50ID0+XG4gICAgICAgIGVudmlyb25tZW50LnBhZ2VDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgbG9nKHJlc3VsdCkge1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gIH1cblxuICBjb250cm9scygpIHtcbiAgICB0aGlzLiRjb250cm9scyA9IHRoaXMuJGJ1aWxkZXIuZmluZCgnLmNvbnRyb2xzX2xlZnQnKS5maXJzdCgpO1xuICAgIHRoaXMuJGNvbnRyb2xzLmVsZW0oJ3JlZnJlc2gnKS5jbGljaygoKSA9PiB7XG4gICAgICB0aGlzLmZyYW1lQ29udGVudFdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIHRoaXMuJGNvbnRyb2xzLmVsZW0oJ3NhdmUnKS5jbGljaygoKSA9PiB7XG4gICAgICBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLmZyYW1lQ29udGVudFdpbmRvdywgJ3NhdmUnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLiRjb250cm9sc1JpZ2h0ID0gdGhpcy4kYnVpbGRlci5maW5kKCcuY29udHJvbHNfcmlnaHQnKS5maXJzdCgpO1xuICAgIHRoaXMuJGNvbnRyb2xzUmlnaHQuZWxlbSgnY2xlYXItY2FjaGUnKS5jbGljaygoKSA9PiB7XG4gICAgICAvKiBnbG9iYWwgd2luZG93OiBmYWxzZSAqL1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24sIG5vLXVudXNlZC12YXJzICovXG4gICAgICB3aW5kb3cuRGlhbG9nSGVscGVyXG4gICAgICAgIC5idWlsZGVyRGlhbG9nKClcbiAgICAgICAgLm9uQWpheExvYWQoKGRhdGEsICR0YXJnZXQsIGRpYWxvZywgZGF0YUNoYW5nZXIpID0+IHtcbiAgICAgICAgICBkYXRhQ2hhbmdlcihkYXRhID8gJzxkaXY+T0s8L2Rpdj4nIDogJzxkaXY+RXJyb3I8L2Rpdj4nKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmFqYXgoe1xuICAgICAgICAgIHVybDogJy9tb25zdGVyL2J1bmRsZXMvY2xlYXItY2FjaGUnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIH0pXG4gICAgICAgIC5hdXRvRGVzdHJveSgpXG4gICAgICAgIC5zaG93KCk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduLCBuby11bnVzZWQtdmFycyAqL1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbEJ1aWxkZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlci5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBBY3Rpb25FbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBNYXRlcmlhbHNFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICBzdXBlcih2aXN1YWxCdWlsZGVyLCBuYW1lKTtcbiAgICB0aGlzLmluaXRNYXRlcmlhbHNTZWxlY3RvcigpO1xuICB9XG5cbiAgaW5pdE1hdGVyaWFsc1NlbGVjdG9yKCkge1xuICAgIHRoaXMuJG1hdGVyaWFsc0dyb3VwcyA9ICQoJzx1bCBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNcIj48L3VsPicpO1xuICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QgPSBbXTtcblxuICAgIHRoaXMudmlzdWFsQnVpbGRlci5zZXR0aW5ncy5idW5kbGVzLmZvckVhY2goYnVuZGxlID0+IHtcbiAgICAgIC8qIGdsb2JhbCBwb2x5Z2xvdDogZmFsc2UgKi9cbiAgICAgIGNvbnN0IGkxOG5CdW5kbGVOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBwb2x5Z2xvdC50KGJ1bmRsZS5uYW1lKVxuICAgICAgICA6IGJ1bmRsZS5uYW1lO1xuXG4gICAgICBjb25zdCAkYnVuZGxlVGl0bGUgPSBgXG4gICAgICA8bGkgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19pdGVtIG1hdGVyaWFscy1ncm91cHNfX2l0ZW0tLWJ1bmRsZS1sYWJlbFwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWJ1bmRsZVwiIGRhdGEtYnVuZGxlLXBhdGg9XCIke2J1bmRsZS5mdWxsUGF0aH1cIj5cbiAgICAgICAgICAgICR7aTE4bkJ1bmRsZU5hbWV9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICBgO1xuICAgICAgdGhpcy4kbWF0ZXJpYWxzTGlzdC5wdXNoKCRidW5kbGVUaXRsZSk7XG5cbiAgICAgIGJ1bmRsZS5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwTmFtZSA9IGdyb3VwLm5hbWU7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IGdyb3VwLm1hdGVyaWFscztcbiAgICAgICAgY29uc3QgaTE4bkdyb3VwTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnID8gcG9seWdsb3QudChncm91cE5hbWUpIDogZ3JvdXBOYW1lO1xuICAgICAgICBjb25zdCAkbGkgPSAkKGBcbiAgICA8bGkgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19pdGVtXCI+XG4gICAgICA8YSBocmVmPVwiI1wiIGRhdGEtZ3JvdXAtcGF0aD1cIiR7Z3JvdXAuZnVsbFBhdGh9XCIgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXBcIj5cbiAgICAgICAgJHtpMThuR3JvdXBOYW1lfSA8c3BhbiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX2NvdW50XCI+KCR7bWF0ZXJpYWxzLmxlbmd0aH0pPC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvbGk+YCk7XG4gICAgICAgIHRoaXMuJG1hdGVyaWFsc0dyb3Vwcy5hcHBlbmQoJGxpKTtcbiAgICAgICAgY29uc3QgJGxpc3QgPSAkKGA8dWwgY2xhc3M9XCJtYXRlcmlhbHMtbGlzdFwiIGRhdGEtZ3JvdXAtcGF0aD1cIiR7Z3JvdXAuZnVsbFBhdGh9XCI+PC91bD5gKTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcblxuICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaChtYXRlcmlhbCA9PiB7XG4gICAgICAgICAgY29uc3QgbWF0ZXJpYWxOYW1lID0gbWF0ZXJpYWwubmFtZTtcbiAgICAgICAgICBjb25zdCBpMThuTWF0ZXJpYWxOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gcG9seWdsb3QudChtYXRlcmlhbE5hbWUpXG4gICAgICAgICAgICA6IG1hdGVyaWFsTmFtZTtcbiAgICAgICAgICBjb25zdCAkaXRlbSA9ICQoYFxuPGxpPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWF0ZXJpYWxzLWxpc3RfX2l0ZW1cIiBkYXRhLW1hdGVyaWFsLXBhdGg9XCIke21hdGVyaWFsLmZ1bGxQYXRofVwiPlxuICAgICR7aTE4bk1hdGVyaWFsTmFtZX1cbiAgPC9hPlxuPC9saT5cbmApO1xuICAgICAgICAgIGl0ZW1zLnB1c2goJGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgJGxpc3QuYXBwZW5kKGl0ZW1zKTtcbiAgICAgICAgdGhpcy4kbWF0ZXJpYWxzTGlzdC5wdXNoKCRsaXN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgLyogZ2xvYmFsIGRvY3VtZW50OiBmYWxzZSAqL1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJywgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgJHRoaXMudG9nZ2xlTW9kKCdhY3RpdmUnKTtcbiAgICAgIGNvbnN0IGdyb3VwUGF0aCA9ICR0aGlzLmRhdGEoJ2dyb3VwUGF0aCcpO1xuICAgICAgaWYgKCR0aGlzLm1vZCgnYWN0aXZlJykpIHtcbiAgICAgICAgJCgnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcpLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuXG4gICAgICAgICQoJy5tYXRlcmlhbHMtbGlzdCcpLmVhY2goZnVuY3Rpb24gaXQoKSB7XG4gICAgICAgICAgY29uc3QgJGxpc3QgPSAkKHRoaXMpO1xuICAgICAgICAgIGlmICgkbGlzdC5tb2QoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAkbGlzdC5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCRsaXN0LmRhdGEoJ2dyb3VwUGF0aCcpID09PSBncm91cFBhdGgpIHtcbiAgICAgICAgICAgICRsaXN0Lm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkdGhpcy5tb2QoJ2FjdGl2ZScsIHRydWUpO1xuICAgICAgICB0aGF0LiRtYXRlcmlhbHNQYW5lLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoYXQncyBqdXN0IHNlY29uZCBjbGljayBvbiB0aGUgc2FtZSBncm91cFxuICAgICAgICB0aGF0LiRtYXRlcmlhbHNQYW5lLmhpZGUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYXRlcmlhbHMtbGlzdF9faXRlbScsIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgIGNvbnN0IFBhZ2VTdHJ1Y3R1cmVFbnYgPSB0aGF0LnZpc3VhbEJ1aWxkZXIuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRSZWdpb25LZXkgPSBQYWdlU3RydWN0dXJlRW52LnNlbGVjdGVkUmVnaW9uS2V5O1xuICAgICAgY29uc3Qgc2VsZWN0ZWRFbnRpdHkgPSBQYWdlU3RydWN0dXJlRW52LnNlbGVjdGVkRW50aXR5O1xuXG4gICAgICBpZiAoc2VsZWN0ZWRSZWdpb25LZXkgIT09IG51bGwgJiYgc2VsZWN0ZWRFbnRpdHkgIT09IG51bGwpIHtcbiAgICAgICAgdGhhdC5zZW5kTWVzc2FnZShcbiAgICAgICAgICAnbmV3QmxvY2snLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgICQodGhpcykuZGF0YSgnbWF0ZXJpYWxQYXRoJyksXG4gICAgICAgICAgICBzZWxlY3RlZEVudGl0eSxcbiAgICAgICAgICAgIHNlbGVjdGVkUmVnaW9uS2V5LFxuICAgICAgICAgIF1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHN1cGVyLmFjdGl2YXRlKCk7XG5cbiAgICB0aGlzLiRncm91cHNQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRncm91cHNQYW5lLmFwcGVuZCh0aGlzLiRtYXRlcmlhbHNHcm91cHMpO1xuXG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZS5hcHBlbmQodGhpcy4kbWF0ZXJpYWxzTGlzdCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZS5oaWRlKCk7XG5cbiAgICAvKlxuICAgIGNvbnN0IFBhZ2VTdHJ1Y3R1cmVFbnYgPSB0aGF0LnZpc3VhbEJ1aWxkZXIuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkUmVnaW9uS2V5ID0gUGFnZVN0cnVjdHVyZUVudi5zZWxlY3RlZFJlZ2lvbktleTtcbiAgICBjb25zdCBzZWxlY3RlZEVudGl0eSA9IFBhZ2VTdHJ1Y3R1cmVFbnYuc2VsZWN0ZWRFbnRpdHk7XG5cbiAgICBAdG9kbyBjaGVjayBmb3Igc2VsZWN0ZWRSZWdpb24gaWYgbm90IC0gd2UgbXVzdCBub3QgYWRkIGJsb2NrIGhlcmVcbiAgICAqL1xuXG4gICAgJCgnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcpLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbHNFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvTWF0ZXJpYWxzRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IodmlzdWFsQnVpbGRlciwgbmFtZSkge1xuICAgIHN1cGVyKHZpc3VhbEJ1aWxkZXIsIG5hbWUpO1xuICAgIHRoaXMuaW5pdFBhZ2VTdHJ1Y3R1cmVFbGVtZW50KCk7XG4gICAgdGhpcy5lZGl0TW9kZURhdGEgPSB7fTtcbiAgICB0aGlzLnNlbGVjdGVkUmVnaW9uS2V5ID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gbnVsbDtcbiAgfVxuXG4gIGluaXRQYWdlU3RydWN0dXJlRWxlbWVudCgpIHtcbiAgICB0aGlzLiRoZWFkZXIgPSAkKCc8ZGl2IGNsYXNzPVwibW9uc3Rlci1zdGFja2FibGUtY29udGFpbmVyX19wYW5lLWhlYWRlclwiPlBhZ2Ugc3RydWN0dXJlPC9kaXY+Jyk7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZSA9ICQoJzxkaXYgY2xhc3M9XCJwYWdlLXN0cnVjdHVyZVwiPjwvZGl2PicpO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgc3VwZXIuYWN0aXZhdGUoKTtcblxuICAgIHRoaXMuJHN0cnVjdHVyZVBhbmUgPSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3JlYXRlU3RhY2thYmxlUGFuZSgpO1xuICAgIHRoaXMuJHN0cnVjdHVyZVBhbmUuYXBwZW5kKHRoaXMuJGhlYWRlcik7XG4gICAgdGhpcy4kc3RydWN0dXJlUGFuZS5hcHBlbmQodGhpcy4kcGFnZVN0cnVjdHVyZSk7XG4gIH1cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlLmRldGFjaCgpO1xuICAgIHRoaXMuJGhlYWRlci5kZXRhY2goKTtcbiAgICBzdXBlci5kZWFjdGl2YXRlKCk7XG4gIH1cblxuICBwYWdlQ2hhbmdlZCgpIHtcbiAgICBzdXBlci5wYWdlQ2hhbmdlZCgpO1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUuanN0cmVlKCdkZXN0cm95Jyk7XG4gICAgY29uc3QgbGF5b3V0ID0gdGhpcy50YXJnZXQuTU9OU1RFUl9FRElUX01PREVfREFUQS5sYXlvdXQ7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLnRhcmdldC5NT05TVEVSX0VESVRfTU9ERV9EQVRBLnRlbXBsYXRlO1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgY29uc3QgbGF5b3V0SXRlbSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6ICdsYXlvdXQnLFxuICAgICAgICB0ZW1wbGF0ZUlkOiBsYXlvdXQuaWQsXG4gICAgICB9LFxuICAgICAgdGV4dDogYExheW91dCAtICR7bGF5b3V0LmtleX0gIyR7bGF5b3V0LmlkfWAsXG4gICAgICBpY29uOiAnZmEgZmEtY29sdW1ucycsXG4gICAgICBzdGF0ZToge1xuICAgICAgICBvcGVuZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH07XG4gICAgY29uc3QgdGVtcGxhdGVJdGVtID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBpZDogJ3RlbXBsYXRlJyxcbiAgICAgICAgdGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICB9LFxuICAgICAgdGV4dDogYFRlbXBsYXRlIC0gJHt0ZW1wbGF0ZS5rZXl9ICMke3RlbXBsYXRlLmlkfWAsXG4gICAgICBpY29uOiAnZmEgZmEtdGgnLFxuICAgICAgc3RhdGU6IHtcbiAgICAgICAgb3BlbmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICB9O1xuXG4gICAgY29uc3QgJGxheW91dFJlZ2lvbnMgPSB0aGlzLnRhcmdldCQoJy5tLW1vbnN0ZXItY29udGVudF9fbGF5b3V0Jyk7XG5cbiAgICAkbGF5b3V0UmVnaW9ucy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQucHJvY2Vzc0xheW91dCgkKHRoaXMpKTtcbiAgICAgIGxheW91dEl0ZW0uY2hpbGRyZW4ucHVzaChyZXN1bHQuaXRlbSk7XG4gICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcbiAgICAgICAgdGVtcGxhdGVJdGVtLmNoaWxkcmVuLnB1c2gocmVnaW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5wYWdlU3RydWN0dXJlID0gW1xuICAgICAgbGF5b3V0SXRlbSxcbiAgICAgIHRlbXBsYXRlSXRlbSxcbiAgICBdO1xuXG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5qc3RyZWUoe1xuICAgICAgY29yZToge1xuICAgICAgICBjaGVja19jYWxsYmFjazogKG9wZXJhdGlvbiwgbm9kZSwgbm9kZV9wYXJlbnQsIG5vZGVfcG9zaXRpb24sIG1vcmUpID0+IHtcbiAgICAgICAgICBpZiAob3BlcmF0aW9uID09PSAnbW92ZV9ub2RlJykge1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ21hdGVyaWFsJykge1xuICAgICAgICAgICAgICByZXR1cm4gbm9kZV9wYXJlbnQudHlwZSA9PT0gJ3RlbXBsYXRlUmVnaW9uJyB8fCBub2RlX3BhcmVudC50eXBlID09PSAnY29udGVudFRlbXBsYXRlUmVnaW9uJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS50eXBlID09PSAndGVtcGxhdGVSZWdpb24nIHx8IG5vZGUudHlwZSA9PT0gJ2NvbnRlbnRUZW1wbGF0ZVJlZ2lvbicpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5vZGVfcGFyZW50LnR5cGUgPT09ICdkZWZhdWx0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHRoaXMucGFnZVN0cnVjdHVyZSxcbiAgICAgICAgdGhlbWVzOiB7XG4gICAgICAgICAgbmFtZTogJ2RlZmF1bHQtZGFyaycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcGx1Z2luczogW1xuICAgICAgICAndHlwZXMnLFxuICAgICAgICAnd2hvbGVyb3cnLFxuICAgICAgICAnZG5kJyxcbiAgICAgIF0sXG4gICAgICBkbmQ6IHtcbiAgICAgICAgb3Blbl90aW1lb3V0OiAyMDAsXG4gICAgICAgIGxhcmdlX2Ryb3BfdGFyZ2V0OiB0cnVlLFxuICAgICAgICBsYXJnZV9kcmFnX3RhcmdldDogdHJ1ZSxcbiAgICAgICAgY2hlY2tfd2hpbGVfZHJhZ2dpbmc6IHRydWUsXG4gICAgICAgIGNvcHk6IGZhbHNlLFxuICAgICAgICBpc19kcmFnZ2FibGU6IGZ1bmN0aW9uKG5vZGVzKSB7XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzWzBdIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdtYXRlcmlhbCdcbiAgICAgICAgICAgIHx8IG5vZGUudHlwZSA9PT0gJ2NvbnRlbnRUZW1wbGF0ZVJlZ2lvbidcbiAgICAgICAgICAgIHx8IG5vZGUudHlwZSA9PT0gJ3RlbXBsYXRlUmVnaW9uJztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIGxheW91dDoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1jb2x1bW5zJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtdGgnLFxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVJlZ2lvbjoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1mb2xkZXItbycsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnRUZW1wbGF0ZVJlZ2lvbjoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1mb2xkZXInLFxuICAgICAgICB9LFxuICAgICAgICBtYXRlcmlhbDoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1wdXp6bGUtcGllY2UnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuanN0cmVlT2JqID0gdGhpcy4kcGFnZVN0cnVjdHVyZS5qc3RyZWUoKTtcblxuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmVcbiAgICAgIC5vbignbG9hZGVkLmpzdHJlZScsICgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlU3RydWN0dXJlSnNvbigpO1xuXG4gICAgICAgIGxldCBpc0NvbnRlbnRSZWdpb25Gb3VuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVbMV0uY2hpbGRyZW4uZm9yRWFjaCgocmVnaW9uKSA9PiB7XG4gICAgICAgICAgaWYgKHJlZ2lvbi5kYXRhLmVudGl0eURlcGVuZGVudCAmJiBpc0NvbnRlbnRSZWdpb25Gb3VuZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlzQ29udGVudFJlZ2lvbkZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuanN0cmVlT2JqLnNlbGVjdF9ub2RlKHJlZ2lvbi5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pXG5cbiAgICAgIC5vbignbW92ZV9ub2RlLmpzdHJlZScsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ21vdmUgbm9kZScpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICAkKGRvY3VtZW50KVxuICAgICAgLm9uKCdkbmRfc3RvcC52YWthdGEuanN0cmVlJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZG5kX3N0b3AudmFrYXRhLmpzdHJlZScpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAub24oJ2RuZF9zdG9wJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZG5kX3N0b3AnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5vbignZG5kX3N0b3AuanN0cmVlJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnYXNkJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdkbmRfc3RvcC52YWthdGEnLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkbmRfc3RvcCcpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VTdHJ1Y3R1cmVKc29uKCk7XG4gICAgICAgIHRoaXMudGFyZ2V0LkZyb250ZW5kTW9uc3Rlci5WaXN1YWxGcmFtZS5wcmV2aWV3KCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgY29uc3QgY29udHJvbEJ1dHRvbnMgPSAkKCc8ZGl2IGNsYXNzPVwidHJlZS1jb250cm9sLWJ1dHRvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+PC9kaXY+Jyk7XG5cbiAgICBjb25zdCBidXR0b25zQXJyYXkgPSBbXG4gICAgICB7XG4gICAgICAgIGljb246ICdmYSBmYS1hcnJvdy1yaWdodCcsXG4gICAgICAgIG5hbWU6ICdTZWxlY3QnLFxuICAgICAgICBjbGljazogKGpzVHJlZU5vZGUsICRub2RlKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RNYXRlcmlhbChqc1RyZWVOb2RlLmRhdGEubWF0ZXJpYWxJbmRleCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiAnZmEgZmEtdHJhc2gtbycsXG4gICAgICAgIG5hbWU6ICdSZW1vdmUnLFxuICAgICAgICBjbGljazogKGpzVHJlZU5vZGUsICRub2RlKSA9PiB7XG4gICAgICAgICAgdGhpcy5qc3RyZWVPYmouZGVsZXRlX25vZGUodGhpcy5qc3RyZWVPYmouZ2V0X3NlbGVjdGVkKCkpO1xuICAgICAgICAgIHRoaXMudXBkYXRlUGFnZVN0cnVjdHVyZUpzb24oKTtcbiAgICAgICAgICB0aGlzLnRhcmdldC5Gcm9udGVuZE1vbnN0ZXIuVmlzdWFsRnJhbWUucHJldmlldygpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICBidXR0b25zQXJyYXkuZm9yRWFjaChjb25mID0+IHtcbiAgICAgIGNvbnN0ICRidXR0b24gPSAkKGA8YSBocmVmPVwiI1wiIGNsYXNzPVwidHJlZS1jb250cm9sLWJ1dHRvbnNfX2J1dHRvblwiIHRpdGxlPVwiJHtjb25mLm5hbWV9XCI+XG4gIDxpIGNsYXNzPVwiJHtjb25mLmljb259XCI+PC9pPlxuPC9hPmApO1xuICAgICAgJGJ1dHRvbi5jbGljayhmdW5jdGlvbiBjbGlja0hhbmRsZXIoKXtcbiAgICAgICAgY29uc3QgJG5vZGUgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpO1xuXG4gICAgICAgIHJldHVybiBjb25mLmNsaWNrKHRoYXQuanN0cmVlT2JqLmdldF9ub2RlKCRub2RlKSwgJG5vZGUpO1xuICAgICAgfSk7XG4gICAgICBjb250cm9sQnV0dG9ucy5hcHBlbmQoJGJ1dHRvbik7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlLm9uKCdzZWxlY3Rfbm9kZS5qc3RyZWUnLCAoZSwgb2JqKSA9PiB7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSBvYmoubm9kZS50eXBlO1xuICAgICAgdGhpcy5zZWxlY3RlZEVudGl0eSA9IG9iai5ub2RlLmRhdGEuZW50aXR5VHlwZSB8fCBudWxsO1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21hdGVyaWFsJzpcbiAgICAgICAgICBjb25zdCAkYW5jaG9yID0gJChgIyR7b2JqLm5vZGUuaWR9YCk7XG4gICAgICAgICAgJGFuY2hvci5wcmVwZW5kKGNvbnRyb2xCdXR0b25zKTtcbiAgICAgICAgICB0aGlzLnNlbGVjdE1hdGVyaWFsKG9iai5ub2RlLmRhdGEubWF0ZXJpYWxJbmRleCk7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJlZ2lvbktleSA9IG9iai5ub2RlLmRhdGEucmVnaW9uS2V5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0ZW1wbGF0ZVJlZ2lvbic6XG4gICAgICAgIGNhc2UgJ2NvbnRlbnRUZW1wbGF0ZVJlZ2lvbic6XG4gICAgICAgICAgdGhpcy50YXJnZXQkLnNtb290aFNjcm9sbCh7XG4gICAgICAgICAgICBzY3JvbGxUYXJnZXQ6IHRoaXMudGFyZ2V0JChgW2RhdGEtcmVnaW9uLWtleT1cIiR7b2JqLm5vZGUuZGF0YS5yZWdpb25LZXl9XCJdYCksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJlZ2lvbktleSA9IG9iai5ub2RlLmRhdGEucmVnaW9uS2V5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSZWdpb25LZXkgPSBudWxsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICB0aGlzLmVkaXRNb2RlRGF0YSA9IHRoaXMudGFyZ2V0Lk1PTlNURVJfRURJVF9NT0RFX0RBVEE7XG4gIH1cblxuICBzZWxlY3RNYXRlcmlhbChpbmRleCkge1xuICAgIGNvbnN0ICR0YXJnZXRNYXRlcmlhbCA9IHRoaXMudGFyZ2V0JChgW2RhdGEtbWF0ZXJpYWwtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuICAgICQoJy5tLW1vbnN0ZXItbWF0ZXJpYWxfc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnbS1tb25zdGVyLW1hdGVyaWFsX3NlbGVjdGVkJyk7XG4gICAgdGhpcy50YXJnZXQkLnNtb290aFNjcm9sbCh7XG4gICAgICBzY3JvbGxUYXJnZXQ6ICR0YXJnZXRNYXRlcmlhbCxcbiAgICB9KTtcbiAgICAvLyByZXN0YXJ0IGFuaW1hdGlvbiBtYWdpYy4gc2VlIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vcmVzdGFydC1jc3MtYW5pbWF0aW9uL1xuICAgICR0YXJnZXRNYXRlcmlhbFxuICAgICAgLnJlbW92ZUNsYXNzKCdtLW1vbnN0ZXItbWF0ZXJpYWxfc2VsZWN0ZWQnKTtcblxuICAgIHZvaWQgJHRhcmdldE1hdGVyaWFsWzBdLm9mZnNldFdpZHRoO1xuXG4gICAgJHRhcmdldE1hdGVyaWFsXG4gICAgICAuYWRkQ2xhc3MoJ20tbW9uc3Rlci1tYXRlcmlhbF9zZWxlY3RlZCcpO1xuICB9XG5cbiAgdXBkYXRlUGFnZVN0cnVjdHVyZUpzb24oKSB7XG4gICAgdGhpcy5wYWdlU3RydWN0dXJlSnNvbiA9IHRoaXMuanN0cmVlT2JqLmdldF9qc29uKHRoaXMuJHBhZ2VTdHJ1Y3R1cmUsIHtcbiAgICAgIG5vX3N0YXRlOiB0cnVlLFxuICAgICAgbm9faWQ6IHRydWUsXG4gICAgICBub19saV9hdHRyOiB0cnVlLFxuICAgICAgbm9fYV9hdHRyOiB0cnVlLFxuICAgIH0pO1xuICAgIHRoaXMudGFyZ2V0LkZyb250ZW5kTW9uc3Rlci5WaXN1YWxGcmFtZS5wYWdlU3RydWN0dXJlSnNvbiA9IHRoaXMucGFnZVN0cnVjdHVyZUpzb247XG4gIH1cblxuICBzdGF0aWMgcHJvY2Vzc0xheW91dCgkbGF5b3V0UmVnaW9uKSB7XG4gICAgY29uc3QgaXRlbSA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5leHRyYWN0UmVnaW9uRGF0YSgkbGF5b3V0UmVnaW9uKTtcbiAgICBpdGVtLnN0YXRlID0ge1xuICAgICAgb3BlbmVkOiB0cnVlLFxuICAgIH07XG4gICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgIGl0ZW0uZGF0YS5pZCA9IGBsYXlvdXQudGVtcGxhdGVSZWdpb24uJHtpdGVtLmRhdGEucmVnaW9uS2V5fWA7XG4gICAgaXRlbS5pZCA9IGBwc2pfJHtpdGVtLmRhdGEuaWR9YC5yZXBsYWNlKC9cXC4vZywgJ18nKTtcbiAgICBpdGVtLmRhdGEuZW50aXR5VHlwZSA9ICdsYXlvdXQnO1xuICAgIGNvbnN0IHRlbXBsYXRlUmVnaW9ucyA9IFtdO1xuXG4gICAgLy8gZmluZCBtYXRlcmlhbHNcbiAgICBjb25zdCAkbGF5b3V0TWF0ZXJpYWxzID0gJGxheW91dFJlZ2lvbi5maW5kKCc+W2RhdGEtaXMtbWF0ZXJpYWxdJyk7XG4gICAgJGxheW91dE1hdGVyaWFscy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCAkbGF5b3V0TWF0ZXJpYWwgPSAkKHRoaXMpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LnByb2Nlc3NMYXlvdXRNYXRlcmlhbCgkbGF5b3V0TWF0ZXJpYWwsIGl0ZW0uaWQsIGl0ZW0uZGF0YS5yZWdpb25LZXkpO1xuICAgICAgY29uc3QgbGF5b3V0TWF0ZXJpYWxJdGVtID0gcmVzdWx0LmxheW91dE1hdGVyaWFsO1xuICAgICAgcmVzdWx0LnRlbXBsYXRlUmVnaW9ucy5mb3JFYWNoKHJlZ2lvbiA9PiB7XG4gICAgICAgIHRlbXBsYXRlUmVnaW9ucy5wdXNoKHJlZ2lvbik7XG4gICAgICB9KTtcbiAgICAgIGl0ZW0uY2hpbGRyZW4ucHVzaChsYXlvdXRNYXRlcmlhbEl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW0sXG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnMsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9jZXNzTGF5b3V0TWF0ZXJpYWwoJGxheW91dE1hdGVyaWFsLCBwcmVmaXgsIHJlZ2lvbktleSkge1xuICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSAkbGF5b3V0TWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxJbmRleCcpO1xuICAgIGNvbnN0IG1hdGVyaWFsUGF0aCA9ICRsYXlvdXRNYXRlcmlhbC5kYXRhKCdtYXRlcmlhbFBhdGgnKTtcbiAgICBjb25zdCBpdGVtID0ge1xuICAgICAgdGV4dDogYCR7XG4gICAgICAgIG1hdGVyaWFsUGF0aCA9PT0gJ2NvcmUuZnJvbnRlbmQtbW9uc3Rlci1jb3JlLmdlbmVyYWwuY29udGVudC1wbGFjZWhvbGRlcidcbiAgICAgICAgICA/ICdNYWluIEVudGl0eSBDb250ZW50J1xuICAgICAgICAgIDogYE1hdGVyaWFsOiAke21hdGVyaWFsSW5kZXh9YH1cbiAgICAgIGAsXG4gICAgICB0eXBlOiAnbWF0ZXJpYWwnLFxuICAgICAgZGF0YToge1xuICAgICAgICBpZDogYCR7cHJlZml4fS4ke21hdGVyaWFsSW5kZXh9YCxcbiAgICAgICAgbWF0ZXJpYWxJbmRleCxcbiAgICAgICAgbWF0ZXJpYWxQYXRoLFxuICAgICAgICBlZGl0YWJsZUtleXM6ICRsYXlvdXRNYXRlcmlhbC5kYXRhKCdlZGl0YWJsZUtleXMnKSxcbiAgICAgICAgbm9kZTogJGxheW91dE1hdGVyaWFsLFxuICAgICAgICByZWdpb25LZXksXG4gICAgICAgIGVudGl0eVR5cGU6ICdsYXlvdXQnLFxuICAgICAgfSxcbiAgICAgIGlkOiBgcHNqXyR7cHJlZml4fV8ke21hdGVyaWFsSW5kZXh9YCxcbiAgICB9O1xuICAgIGNvbnN0IHRlbXBsYXRlUmVnaW9ucyA9IFtdO1xuICAgIGNvbnN0ICRyZWdpb25zID0gJGxheW91dE1hdGVyaWFsLmZpbmQoJz4gLm0tbW9uc3Rlci1jb250ZW50X19jb250ZW50Jyk7XG4gICAgJHJlZ2lvbnMuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LnByb2Nlc3NUZW1wbGF0ZVJlZ2lvbigkKHRoaXMpKTtcbiAgICAgIHRlbXBsYXRlUmVnaW9ucy5wdXNoKHJlc3VsdCk7XG4gICAgfSk7XG4gICAgaWYgKHRlbXBsYXRlUmVnaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBpdGVtLmRhdGEuaXNDb250ZW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGxheW91dE1hdGVyaWFsOiBpdGVtLFxuICAgICAgdGVtcGxhdGVSZWdpb25zLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgcHJvY2Vzc1RlbXBsYXRlUmVnaW9uKCR0ZW1wbGF0ZVJlZ2lvbikge1xuICAgIGNvbnN0IGl0ZW0gPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQuZXh0cmFjdFJlZ2lvbkRhdGEoJHRlbXBsYXRlUmVnaW9uKTtcbiAgICBpdGVtLnN0YXRlID0ge1xuICAgICAgb3BlbmVkOiB0cnVlLFxuICAgIH07XG4gICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgIGl0ZW0uZGF0YS5lbnRpdHlEZXBlbmRlbnQgPSAkdGVtcGxhdGVSZWdpb24uZGF0YSgncmVnaW9uRW50aXR5RGVwZW5kZW50JykgPT09IDE7XG5cbiAgICBjb25zdCBwcmVmaXggPSBpdGVtLmRhdGEuZW50aXR5RGVwZW5kZW50ID8gJ2NvbnRlbnQnIDogJ3RlbXBsYXRlJztcbiAgICBpdGVtLmRhdGEuZW50aXR5VHlwZSA9IGl0ZW0uZGF0YS5lbnRpdHlEZXBlbmRlbnQgPyAnZW50aXR5JyA6ICd0ZW1wbGF0ZSc7XG4gICAgaXRlbS5kYXRhLmlkID0gYCR7cHJlZml4fS50ZW1wbGF0ZVJlZ2lvbi4ke2l0ZW0uZGF0YS5yZWdpb25LZXl9YDtcbiAgICBpdGVtLmlkID0gYHBzal8ke2l0ZW0uZGF0YS5pZH1gLnJlcGxhY2UoL1xcLi9nLCAnXycpO1xuXG4gICAgaWYgKGl0ZW0uZGF0YS5lbnRpdHlEZXBlbmRlbnQpIHtcbiAgICAgIGl0ZW0udHlwZSA9ICdjb250ZW50VGVtcGxhdGVSZWdpb24nO1xuICAgIH1cbiAgICBjb25zdCAkcmVnaW9uTWF0ZXJpYWxzID0gJHRlbXBsYXRlUmVnaW9uLmZpbmQoJz5bZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICAkcmVnaW9uTWF0ZXJpYWxzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0IG1hdGVyaWFsID0gUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LnByb2Nlc3NUZW1wbGF0ZVJlZ2lvbk1hdGVyaWFsKFxuICAgICAgICAkKHRoaXMpLFxuICAgICAgICBpdGVtLmRhdGEuaWQsXG4gICAgICAgIHByZWZpeFxuICAgICAgKTtcbiAgICAgIG1hdGVyaWFsLmRhdGEucmVnaW9uS2V5ID0gaXRlbS5kYXRhLnJlZ2lvbktleTtcbiAgICAgIG1hdGVyaWFsLmlkID0gYHBzal8ke21hdGVyaWFsLmRhdGEuaWR9YC5yZXBsYWNlKC9cXC4vZywgJ18nKTtcbiAgICAgIGl0ZW0uY2hpbGRyZW4ucHVzaChtYXRlcmlhbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBzdGF0aWMgcHJvY2Vzc1RlbXBsYXRlUmVnaW9uTWF0ZXJpYWwoJHJlZ2lvbk1hdGVyaWFsLCBwcmVmaXgsIGVudGl0eVR5cGUpIHtcbiAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gJHJlZ2lvbk1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsSW5kZXgnKTtcbiAgICBjb25zdCBtYXRlcmlhbFBhdGggPSAkcmVnaW9uTWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxQYXRoJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGBNYXRlcmlhbDogJHttYXRlcmlhbEluZGV4fWAsXG4gICAgICB0eXBlOiAnbWF0ZXJpYWwnLFxuICAgICAgZGF0YToge1xuICAgICAgICBpZDogYCR7cHJlZml4fS4ke21hdGVyaWFsSW5kZXh9YCxcbiAgICAgICAgbWF0ZXJpYWxJbmRleCxcbiAgICAgICAgbWF0ZXJpYWxQYXRoLFxuICAgICAgICBlZGl0YWJsZUtleXM6ICRyZWdpb25NYXRlcmlhbC5kYXRhKCdlZGl0YWJsZUtleXMnKSxcbiAgICAgICAgbm9kZTogJHJlZ2lvbk1hdGVyaWFsLFxuICAgICAgICBlbnRpdHlUeXBlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGV4dHJhY3RSZWdpb25EYXRhKCRub2RlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6ICRub2RlLmRhdGEoJ2NvbnRlbnREZXNjcmlwdGlvbicpLFxuICAgICAgdHlwZTogJ3RlbXBsYXRlUmVnaW9uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcmVnaW9uSWQ6ICRub2RlLmRhdGEoJ3JlZ2lvbklkJyksXG4gICAgICAgIHJlZ2lvbktleTogJG5vZGUuZGF0YSgncmVnaW9uS2V5JyksXG4gICAgICAgIHVuaXF1ZUNvbnRlbnRJZDogJG5vZGUuZGF0YSgndW5pcXVlQ29udGVudElkJyksXG4gICAgICAgIG5vZGU6ICRub2RlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc2VyaWFsaXplUGFnZSgpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMucmVnaW9uc1N0cnVjdHVyZVtyZWdpb25LZXldO1xuICAgICAgcmVzdWx0W3JlZ2lvbi5rZXldID0gcmVnaW9uLnNlcmlhbGl6ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBtYXRlcmlhbHNCeVJlZ2lvbnMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5yZWdpb25zU3RydWN0dXJlKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICBjb25zdCByZWdpb24gPSB0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmVbcmVnaW9uS2V5XTtcbiAgICAgIHJlc3VsdFtyZWdpb24ua2V5XSA9IHJlZ2lvbi5tYXRlcmlhbHNEZWNsKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9QYWdlU3RydWN0dXJlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcblxufVxuZXhwb3J0IGRlZmF1bHQgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHVuaXFpZCAocHJlZml4LCBtb3JlRW50cm9weSkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3VuaXFpZC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICByZXZpc2VkIGJ5OiBLYW5rcmVsdW5lIChodHRwOi8vd3d3LndlYmZha3RvcnkuaW5mby8pXG4gIC8vICAgICAgbm90ZSAxOiBVc2VzIGFuIGludGVybmFsIGNvdW50ZXIgKGluIGxvY3V0dXMgZ2xvYmFsKSB0byBhdm9pZCBjb2xsaXNpb25cbiAgLy8gICBleGFtcGxlIDE6IHZhciAkaWQgPSB1bmlxaWQoKVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRyZXN1bHQgPSAkaWQubGVuZ3RoID09PSAxM1xuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogdmFyICRpZCA9IHVuaXFpZCgnZm9vJylcbiAgLy8gICBleGFtcGxlIDI6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gKDEzICsgJ2ZvbycubGVuZ3RoKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMzogdmFyICRpZCA9IHVuaXFpZCgnYmFyJywgdHJ1ZSlcbiAgLy8gICBleGFtcGxlIDM6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gKDIzICsgJ2JhcicubGVuZ3RoKVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuXG4gIGlmICh0eXBlb2YgcHJlZml4ID09PSAndW5kZWZpbmVkJykge1xuICAgIHByZWZpeCA9ICcnXG4gIH1cblxuICB2YXIgcmV0SWRcbiAgdmFyIF9mb3JtYXRTZWVkID0gZnVuY3Rpb24gKHNlZWQsIHJlcVdpZHRoKSB7XG4gICAgc2VlZCA9IHBhcnNlSW50KHNlZWQsIDEwKS50b1N0cmluZygxNikgLy8gdG8gaGV4IHN0clxuICAgIGlmIChyZXFXaWR0aCA8IHNlZWQubGVuZ3RoKSB7XG4gICAgICAvLyBzbyBsb25nIHdlIHNwbGl0XG4gICAgICByZXR1cm4gc2VlZC5zbGljZShzZWVkLmxlbmd0aCAtIHJlcVdpZHRoKVxuICAgIH1cbiAgICBpZiAocmVxV2lkdGggPiBzZWVkLmxlbmd0aCkge1xuICAgICAgLy8gc28gc2hvcnQgd2UgcGFkXG4gICAgICByZXR1cm4gQXJyYXkoMSArIChyZXFXaWR0aCAtIHNlZWQubGVuZ3RoKSkuam9pbignMCcpICsgc2VlZFxuICAgIH1cbiAgICByZXR1cm4gc2VlZFxuICB9XG5cbiAgdmFyICRnbG9iYWwgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBHTE9CQUwpXG4gICRnbG9iYWwuJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzIHx8IHt9XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXNcbiAgJGxvY3V0dXMucGhwID0gJGxvY3V0dXMucGhwIHx8IHt9XG5cbiAgaWYgKCEkbG9jdXR1cy5waHAudW5pcWlkU2VlZCkge1xuICAgIC8vIGluaXQgc2VlZCB3aXRoIGJpZyByYW5kb20gaW50XG4gICAgJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAweDc1YmNkMTUpXG4gIH1cbiAgJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQrK1xuXG4gIC8vIHN0YXJ0IHdpdGggcHJlZml4LCBhZGQgY3VycmVudCBtaWxsaXNlY29uZHMgaGV4IHN0cmluZ1xuICByZXRJZCA9IHByZWZpeFxuICByZXRJZCArPSBfZm9ybWF0U2VlZChwYXJzZUludChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDAsIDEwKSwgOClcbiAgLy8gYWRkIHNlZWQgaGV4IHN0cmluZ1xuICByZXRJZCArPSBfZm9ybWF0U2VlZCgkbG9jdXR1cy5waHAudW5pcWlkU2VlZCwgNSlcbiAgaWYgKG1vcmVFbnRyb3B5KSB7XG4gICAgLy8gZm9yIG1vcmUgZW50cm9weSB3ZSBhZGQgYSBmbG9hdCBsb3dlciB0byAxMFxuICAgIHJldElkICs9IChNYXRoLnJhbmRvbSgpICogMTApLnRvRml4ZWQoOCkudG9TdHJpbmcoKVxuICB9XG5cbiAgcmV0dXJuIHJldElkXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy91bmlxaWQuanNcbiAqKi8iLCJjbGFzcyBEYXRhUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvcihjbGFzc05hbWUsIHByb3ZpZGVkS2V5cykge1xuICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIHRoaXMucHJvdmlkZWRLZXlzID0gcHJvdmlkZWRLZXlzO1xuICAgIHRoaXMuYXNzb2NpYXRpb25zID0ge307XG4gICAgdGhpcy5hc3NvY2lhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7RWRpdGFibGV9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGVkaXRhYmxlKCkge1xuICAgIHJldHVybiB3aW5kb3cuRnJvbnRlbmRNb25zdGVyLlZpc3VhbEZyYW1lLmVkaXRhYmxlO1xuICB9XG5cbiAgYXNzb2NpYXRlKCkge1xuICAgIHRoaXMuYXNzb2NpYXRpb25zID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5wcm92aWRlZEtleXMpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMucHJvdmlkZWRLZXlzW3JlZ2lvbktleV07XG4gICAgICBjb25zdCAkcmVnaW9uID0gJChgW2RhdGEtcmVnaW9uLWtleT1cIiR7cmVnaW9uS2V5fVwiXWApLmZpcnN0KCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgJWNSZWdpb246ICR7cmVnaW9uS2V5fWAsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogYm9sZDsgYmFja2dyb3VuZDogIzMzMycpO1xuICAgICAgLy8gY29uc29sZS5sb2cocmVnaW9uKTtcbiAgICAgIGNvbnN0IG1hdGVyaWFscyA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMocmVnaW9uKS5mb3JFYWNoKG1hdGVyaWFsS2V5ID0+IHtcbiAgICAgICAgY29uc3QgZGF0YUtleXMgPSByZWdpb25bbWF0ZXJpYWxLZXldO1xuICAgICAgICBjb25zdCAkbWF0ZXJpYWwgPSAkcmVnaW9uLmZpbmQoYFtkYXRhLW1hdGVyaWFsLWluZGV4PVwiJHttYXRlcmlhbEtleX1cIl1gKS5maXJzdCgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgJWNNYXRlcmlhbDogJHttYXRlcmlhbEtleX1gLCAnY29sb3I6ICNmZmY7IGZvbnQtd2VpZ2h0OiBib2xkOyBiYWNrZ3JvdW5kOiAjNjlmJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCRtYXRlcmlhbCk7XG4gICAgICAgIGlmICgkbWF0ZXJpYWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG1hdGVyaWFsc1ttYXRlcmlhbEtleV0gPSB7XG4gICAgICAgICAgZGF0YUtleXMsXG4gICAgICAgICAgJG1hdGVyaWFsLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBtYXRlcmlhbEVkaXRhYmxlS2V5cyA9ICRtYXRlcmlhbC5kYXRhKCdlZGl0YWJsZUtleXMnKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplTWF0ZXJpYWxFZGl0KG1hdGVyaWFsRWRpdGFibGVLZXlzLCAkbWF0ZXJpYWwsIGRhdGFLZXlzKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hc3NvY2lhdGlvbnNbcmVnaW9uS2V5XSA9IHtcbiAgICAgICAgJHJlZ2lvbixcbiAgICAgICAgbWF0ZXJpYWxzLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpemVNYXRlcmlhbEVkaXQobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRyb290LCBkYXRhS2V5cywgcHJlZml4ID0gJycpIHtcbiAgICBkYXRhS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBvYmogPSBtYXRlcmlhbEVkaXRhYmxlS2V5c1trZXldIHx8ICdOT19TVUNIX0tFWSc7XG4gICAgICBpZiAob2JqID09PSAnTk9fU1VDSF9LRVknKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvYmogPT09IE9iamVjdChvYmopKSB7XG4gICAgICAgIC8vIGl0J3MgcmVjdXJzaXZlXG4gICAgICAgIC8vIGZpcnN0IC0gZmluZCBhbGwgYmxvY2tzXG4gICAgICAgIGNvbnN0ICRibG9ja3MgPSAkcm9vdC5maW5kKGBbZGF0YS1yZWN1cnNpdmUtaXRlbT1cIiR7a2V5fVwiXWApO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICAkYmxvY2tzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYCVjIFJlY3Vyc2l2ZSBpdGVtICR7a2V5fSAjJHtjb3VudGVyfWAsICdiYWNrZ3JvdW5kOiAjMjIyOyBjb2xvcjogI2JhZGE1NScpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAgIHRoYXQuaW5pdGlhbGl6ZU1hdGVyaWFsRWRpdChvYmosICR0aGlzLCBPYmplY3Qua2V5cyhvYmopLCAnaXRlbS4nKTtcbiAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaXQncyBwbGFpbiBmaWVsZFxuICAgICAgICBjb25zdCAkbm9kZSA9ICRyb290LmZpbmQoYFtkYXRhLWVkaXRhYmxlLWtleT1cIiR7cHJlZml4fSR7a2V5fVwiXWApLmZpcnN0KCk7XG4gICAgICAgIGlmICgkbm9kZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgRGF0YVByb3ZpZGVyLmVkaXRhYmxlLmluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAlYyBQbGFpbiBmaWVsZCBlZGl0YWJsZSAke3ByZWZpeH0ke2tleX1gLCAnYmFja2dyb3VuZDogIzIyMjsgY29sb3I6ICNiYWRhNTUnKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJG5vZGVbMF0ub3V0ZXJIVE1MKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgc2VyaWFsaXplS2V5cygpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmFzc29jaWF0aW9ucykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgY29uc3QgcmVnaW9uID0gdGhpcy5hc3NvY2lhdGlvbnNbcmVnaW9uS2V5XTtcbiAgICAgIGNvbnN0ICRyZWdpb24gPSByZWdpb24uJHJlZ2lvbjtcbiAgICAgIHJlc3VsdFtyZWdpb25LZXldID0ge307XG4gICAgICBPYmplY3Qua2V5cyhyZWdpb24ubWF0ZXJpYWxzKS5mb3JFYWNoKG1hdGVyaWFsS2V5ID0+IHtcbiAgICAgICAgY29uc3QgZGF0YUtleXMgPSByZWdpb24ubWF0ZXJpYWxzW21hdGVyaWFsS2V5XS5kYXRhS2V5cztcbiAgICAgICAgY29uc3QgJG1hdGVyaWFsID0gcmVnaW9uLm1hdGVyaWFsc1ttYXRlcmlhbEtleV0uJG1hdGVyaWFsO1xuICAgICAgICByZXN1bHRbcmVnaW9uS2V5XVttYXRlcmlhbEtleV0gPSB0aGlzLnNlcmlhbGl6ZU1hdGVyaWFsKFxuICAgICAgICAgIHJlZ2lvbktleSxcbiAgICAgICAgICBtYXRlcmlhbEtleSxcbiAgICAgICAgICBkYXRhS2V5cyxcbiAgICAgICAgICAkcmVnaW9uLFxuICAgICAgICAgICRtYXRlcmlhbFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NOYW1lLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuZmlsbENvbmZpZyhkYXRhKTtcbiAgfVxuXG4gIGZpbGxDb25maWcoZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgc2VyaWFsaXplTWF0ZXJpYWwocmVnaW9uS2V5LCBtYXRlcmlhbEtleSwgZGF0YUtleXMsICRyZWdpb24sICRtYXRlcmlhbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFQcm92aWRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlci5qc1xuICoqLyIsImltcG9ydCBTdGF0aWNDb250ZW50IGZyb20gJy4vcHJvdmlkZXJzL1N0YXRpY0NvbnRlbnQnO1xuXG5jbGFzcyBEYXRhUHJvdmlkZXJGYWN0b3J5IHtcbiAgc3RhdGljIGZhY3RvcnkocHJvdmlkZXJEZWNsLCBwcm92aWRlZEtleXMpIHtcbiAgICBsZXQgcHJvdmlkZXIgPSBudWxsO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHByb3ZpZGVyRGVjbC5jbGFzc05hbWVcbiAgICAgIHx8ICdEb3RQbGFudFxcXFxNb25zdGVyXFxcXERhdGFFbnRpdHlcXFxcU3RhdGljQ29udGVudFByb3ZpZGVyJztcbiAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuICAgICAgY2FzZSAnRG90UGxhbnRcXFxcTW9uc3RlclxcXFxEYXRhRW50aXR5XFxcXFN0YXRpY0NvbnRlbnRQcm92aWRlcic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBwcm92aWRlciA9IG5ldyBTdGF0aWNDb250ZW50KHByb3ZpZGVkS2V5cyk7XG4gICAgfVxuICAgIHJldHVybiBwcm92aWRlcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhUHJvdmlkZXJGYWN0b3J5O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRGF0YVByb3ZpZGVyRmFjdG9yeS5qc1xuICoqLyIsImltcG9ydCBhbGxFZGl0YWJsZXMgZnJvbSAnLi9lZGl0YWJsZXMvYWxsJztcblxuY2xhc3MgRWRpdGFibGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVkaXRhYmxlc0J5VHlwZSA9IHt9O1xuICAgIC8vIGluaXRpYWxpemUgYmFzZSBidWlsZC1pbiBlZGl0YWJsZXNcbiAgICBhbGxFZGl0YWJsZXMoKTtcbiAgICB0aGlzLmVkaXRhYmxlc0J5VHlwZSA9IHdpbmRvdy5NT05TVEVSX0VESVRBQkxFUztcbiAgfVxuXG4gIHNlcmlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3QgZWRpdGFibGUgPSAkbm9kZS5kYXRhKCdlZGl0YWJsZVBhcmFtcycpO1xuICAgIGlmICh0eXBlb2YoZWRpdGFibGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgdHlwZSA9IGVkaXRhYmxlLmhhc093blByb3BlcnR5KCd0eXBlJykgPyBlZGl0YWJsZS50eXBlIDogJ3N0cmluZyc7XG4gICAgaWYgKHRoaXMuZWRpdGFibGVzQnlUeXBlLmhhc093blByb3BlcnR5KHR5cGUpID09PSBmYWxzZSkge1xuICAgICAgdHlwZSA9ICdzdHJpbmcnO1xuICAgIH1cblxuICAgIGNvbnN0IGV4cG9ydFZhcmlhYmxlID0gZWRpdGFibGUuaGFzT3duUHJvcGVydHkoJ3RhcmdldCcpID8gZWRpdGFibGUudGFyZ2V0IDogJ2RhdGEnO1xuXG4gICAgcmV0dXJuIHRoaXMuZWRpdGFibGVzQnlUeXBlW3R5cGVdLnNlcmlhbGl6ZU5vZGUoJG5vZGUsIGV4cG9ydFZhcmlhYmxlKTtcbiAgfVxuXG4gIGluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSkge1xuICAgIGNvbnN0IHR5cGUgPSAkbm9kZS5kYXRhKCdlZGl0YWJsZS10eXBlJykgfHwgJ3VuZWRpdGFibGUnO1xuICAgIGlmICh0eXBlID09PSAndW5lZGl0YWJsZScpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGVkaXRhYmxlID0gdGhpcy5lZGl0YWJsZXNCeVR5cGVbdHlwZV0gfHwgdGhpcy5lZGl0YWJsZXNCeVR5cGUuc3RyaW5nO1xuICAgIHJldHVybiBlZGl0YWJsZS5pbml0aWFsaXplRWRpdGFibGUoJG5vZGUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRhYmxlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRWRpdGFibGUuanNcbiAqKi8iLCJjbGFzcyBIYXNoQXBpIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5mdW5jdGlvbkNhbGxzID0ge307XG5cbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaGFzaCkge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGRvY3VtZW50LmxvY2F0aW9uLmhhc2gubWF0Y2goLyNoYXNoQXBpOiguKj8pOlxcL2hhc2hBcGkvKTtcbiAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGNvbnN0IGZ1bmN0aW9uQ2FsbHMgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGZ1bmN0aW9uQ2FsbHMpIHtcbiAgICAgICAgICBpZiAoaXRlbS5mdW5jKSB7XG4gICAgICAgICAgICB0aGlzLmZ1bmN0aW9uQ2FsbHNbaXRlbS5mdW5jXSA9IGl0ZW0uYXJncyB8fCB7fTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzaG91bGRDYWxsKGZ1bmMpIHtcbiAgICByZXR1cm4gdGhpcy5mdW5jdGlvbkNhbGxzW2Z1bmNdIHx8IGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhhc2hBcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9IYXNoQXBpLmpzXG4gKiovIiwiaW1wb3J0IEZyYW1lQXBpIGZyb20gJy4vRnJhbWVBcGknO1xuaW1wb3J0IHVuaXF1ZUlkIGZyb20gJy4vLi4vdW5pcWlkJztcbmltcG9ydCBEYXRhUHJvdmlkZXJGYWN0b3J5IGZyb20gJy4vRGF0YVByb3ZpZGVyRmFjdG9yeSc7XG5pbXBvcnQgRWRpdGFibGUgZnJvbSAnLi9FZGl0YWJsZSc7XG5cbmNsYXNzIFZpc3VhbEZyYW1lXG57XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFyYW1zKCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIEZyYW1lQXBpLmJpbmRNZXNzYWdlTGlzdGVuZXIodGhpcyk7XG4gICAgdGhpcy5wYWdlU3RydWN0dXJlSnNvbkRhdGEgPSBudWxsO1xuICAgIC8qIGdsb2JhbCB3aW5kb3c6ZmFsc2UgKi9cbiAgICB0aGlzLnBhcmVudFdpbmRvdyA9IHdpbmRvdy5wYXJlbnQ7XG4gICAgLyoqIEB2YXIgRnJvbnRlbmRNb25zdGVyICovXG4gICAgdGhpcy5wYXJlbnRNb25zdGVyID0gdGhpcy5wYXJlbnRXaW5kb3cuRnJvbnRlbmRNb25zdGVyO1xuICAgIHRoaXMucGFyZW50QnVpbGRlciA9IHRoaXMucGFyZW50TW9uc3Rlci5idWlsZGVyO1xuICAgIHRoaXMuY3VycmVudE1vbnN0ZXJDb250ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5lZGl0YWJsZSA9IG5ldyBFZGl0YWJsZSgpO1xuICAgIC8vIHRoaXMubWFrZUl0TW92ZSgpO1xuICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVIYW5kbGVycygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgJCgoKSA9PiB7XG4gICAgICB0aGlzLnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAgIHRoaXMuaW5pdFByb3ZpZGVycygpO1xuICAgIH0pO1xuICAgIHRoaXMuTW9uc3RlckVkaXREYXRhID0gd2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEE7XG4gIH1cblxuICBpbml0UHJvdmlkZXJzKCkge1xuICAgIHRoaXMucHJvdmlkZXJzID0ge1xuICAgICAgbGF5b3V0OiB0aGlzLmdldFByb3ZpZGVycyh0aGlzLk1vbnN0ZXJFZGl0RGF0YS5sYXlvdXQpLFxuICAgICAgdGVtcGxhdGU6IHRoaXMuZ2V0UHJvdmlkZXJzKHRoaXMuTW9uc3RlckVkaXREYXRhLnRlbXBsYXRlKSxcbiAgICAgIGVudGl0eTogdGhpcy5nZXRQcm92aWRlcnModGhpcy5Nb25zdGVyRWRpdERhdGEuZW50aXR5KSxcbiAgICB9O1xuICB9XG5cbiAgc2V0IHBhZ2VTdHJ1Y3R1cmVKc29uKHZhbHVlKSB7XG4gICAgdGhpcy5wYWdlU3RydWN0dXJlSnNvbkRhdGEgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBwYWdlU3RydWN0dXJlSnNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlU3RydWN0dXJlSnNvbkRhdGE7XG4gIH1cblxuICBnZXRQcm92aWRlcnMoYXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXMoYXJyLnByb3ZpZGVycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3QgcHJvdmlkZXJEZWNsID0gYXJyLnByb3ZpZGVyc1trZXldO1xuICAgICAgcmVzdWx0W2tleV0gPSBEYXRhUHJvdmlkZXJGYWN0b3J5LmZhY3RvcnkoXG4gICAgICAgIHByb3ZpZGVyRGVjbCxcbiAgICAgICAgYXJyLnByb3ZpZGVkS2V5c1trZXldIHx8IHt9XG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXQgJG1vbnN0ZXJDb250ZW50KCkge1xuICAgIGlmICh0aGlzLiRtb25zdGVyQ29udGVudENhY2hlKSB7XG4gICAgICByZXR1cm4gdGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZTtcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpO1xuICAgIHJldHVybiB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlO1xuICB9XG5cbiAgcmVmcmVzaE1vbnN0ZXJDb250ZW50Q2FjaGUoKSB7XG4gICAgdGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZSA9IHt9O1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICQodGhpcy5zZXR0aW5nc1snbW9uc3Rlci1jb250ZW50LXNlbGVjdG9yJ10pLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGlmICghdGhhdC5jdXJyZW50TW9uc3RlckNvbnRlbnQpIHtcbiAgICAgICAgdGhhdC5jdXJyZW50TW9uc3RlckNvbnRlbnQgPSAkKHRoaXMpLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpO1xuICAgICAgfVxuICAgICAgdGhhdC4kbW9uc3RlckNvbnRlbnRDYWNoZVskKHRoaXMpLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpXSA9ICQodGhpcyk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVIYW5kbGVycygpIHtcbiAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCAmJiB0aGlzLiRoYW5kbGVycykge1xuICAgICAgdGhpcy4kaGFuZGxlcnMuY3NzKFxuICAgICAgICAndG9wJyxcbiAgICAgICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5wb3NpdGlvbigpLnRvcFxuICAgICAgICAgICsgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5oZWlnaHQoKVxuICAgICAgICAgIC0gdGhpcy4kaGFuZGxlcnMuaGVpZ2h0KClcbiAgICAgICk7XG4gICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0TWF0ZXJpYWwoJG1hdGVyaWFsKSB7XG4gICAgaWYgKHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwgPT09ICRtYXRlcmlhbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICB9XG4gICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCA9ICRtYXRlcmlhbDtcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgdGhpcy4kaGFuZGxlcnMuc2hvdygpO1xuICB9XG5cbiAgc2VyaWFsaXplQ29udGVudChjYWxsYmFjaykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuJG1vbnN0ZXJDb250ZW50KS5mb3JFYWNoKHVuaXF1ZUNvbnRlbnRJZCA9PiB7XG4gICAgICBjb25zdCAkbW9uc3RlciA9IHRoaXMuJG1vbnN0ZXJDb250ZW50W3VuaXF1ZUNvbnRlbnRJZF07XG4gICAgICByZXN1bHRbJG1vbnN0ZXIuZGF0YSgndW5pcXVlQ29udGVudElkJyldID0gdGhhdC5zZXJpYWxpemVVbmlxdWVDb250ZW50KCRtb25zdGVyKTtcbiAgICB9KTtcbiAgICB0aGlzLnNlbmRUb0J1aWxkZXIoY2FsbGJhY2ssIFtyZXN1bHRdKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZVVuaXF1ZUNvbnRlbnQoJG1vbnN0ZXJDb250ZW50KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgcmVzdWx0LnVuaXF1ZUNvbnRlbnRJZCA9ICRtb25zdGVyQ29udGVudC5kYXRhKCd1bmlxdWVDb250ZW50SWQnKTtcbiAgICByZXN1bHQubWF0ZXJpYWxzID0ge307XG4gICAgJG1vbnN0ZXJDb250ZW50LmZpbmQoJ1tkYXRhLWlzLW1hdGVyaWFsPVxcJzFcXCddJykuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgY29uc3QgbWF0ZXJpYWwgPSB7fTtcbiAgICAgIG1hdGVyaWFsLmJsb2NrID0gJCh0aGlzKS5kYXRhKCdtYXRlcmlhbEJsb2NrJyk7XG4gICAgICByZXN1bHQubWF0ZXJpYWxzWyQodGhpcykuZGF0YSgnbWF0ZXJpYWxJbmRleCcpXSA9IG1hdGVyaWFsO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBWaXN1YWxGcmFtZSBzZXR0aW5ncy5cbiAgICogVXNlcyBWaXN1YWxGcmFtZVNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAqL1xuICBwYXJhbXMoKSB7XG4gICAgY29uc3QgdXNlclNldHRpbmdzID0gd2luZG93LlZpc3VhbEZyYW1lU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICAnbW9uc3Rlci1jb250ZW50LXNlbGVjdG9yJzogJy5tLW1vbnN0ZXItY29udGVudF9fY29udGVudCcsXG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyh1c2VyU2V0dGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICB9KTtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIH1cblxuICBzZW5kVG9CdWlsZGVyKGZ1bmMsIGFyZ3MpIHtcbiAgICBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLnBhcmVudFdpbmRvdywgZnVuYywgYXJncyk7XG4gIH1cblxuICBzdGF0aWMgZm9ybVN1Ym1pdChkYXRhKSB7XG4gICAgY29uc3QgJGZvcm0gPSAkKCc8Zm9ybSBtZXRob2Q9XCJQT1NUXCI+PC9mb3JtPicpO1xuICAgIGNvbnN0ICRpbnB1dCA9ICQoJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9fanNvblwiPicpO1xuICAgIGNvbnN0ICRjc3JmID0gJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIj4nKTtcblxuICAgICRjc3JmXG4gICAgICAuYXR0cignbmFtZScsICQoJ21ldGFbbmFtZT1jc3JmLXBhcmFtXScpLmF0dHIoJ2NvbnRlbnQnKSlcbiAgICAgIC52YWwoJCgnbWV0YVtuYW1lPWNzcmYtdG9rZW5dJykuYXR0cignY29udGVudCcpKVxuICAgICAgLmFwcGVuZFRvKCRmb3JtKTtcblxuICAgICRpbnB1dFxuICAgICAgLnZhbChKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICAgIC5hcHBlbmRUbygkZm9ybSk7XG5cbiAgICAkZm9ybVswXS5zdWJtaXQoKTtcbiAgfVxuXG4gIG5ld0Jsb2NrKG1hdGVyaWFsTmFtZSwgc2VsZWN0ZWRFbnRpdHksIHJlZ2lvbk5hbWUpIHtcbiAgICAvLyBAdG9kbyBBZGQgbG9hZGVyIGhlcmUgYXMgd2UgYXJlIHVzaW5nIGZvcm0gcG9zdCAhXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSB1bmlxdWVJZCgnbWF0Jyk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuaXRlcmF0ZVRlbXBsYXRlVHlwZSh0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uKTtcbiAgICBpZiAoc2VsZWN0ZWRFbnRpdHkgPT09ICdlbnRpdHknKSB7XG4gICAgICBkYXRhLmVudGl0eS5tYXRlcmlhbHNCeVJlZ2lvbkRlY2xbcmVnaW9uTmFtZV0uZGVjbFtyYW5kb21JbmRleF0gPSB7XG4gICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbE5hbWUsXG4gICAgICB9O1xuICAgICAgZGF0YS5lbnRpdHkubWF0ZXJpYWxzQnlSZWdpb25EZWNsW3JlZ2lvbk5hbWVdLm1hdGVyaWFsc09yZGVyLnB1c2gocmFuZG9tSW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhW3NlbGVjdGVkRW50aXR5XS50ZW1wbGF0ZVJlZ2lvbnNbcmVnaW9uTmFtZV0ubWF0ZXJpYWxzRGVjbHMuZGVjbFtyYW5kb21JbmRleF0gPSB7XG4gICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbE5hbWUsXG4gICAgICB9O1xuICAgICAgZGF0YVtzZWxlY3RlZEVudGl0eV0udGVtcGxhdGVSZWdpb25zW3JlZ2lvbk5hbWVdLm1hdGVyaWFsc0RlY2xzLm1hdGVyaWFsc09yZGVyLnB1c2gocmFuZG9tSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcmV2aWV3KGRhdGEpO1xuICB9XG5cbiAgcHJldmlldyhkYXRhID0gbnVsbCkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhIHx8IHRoaXMuaXRlcmF0ZVRlbXBsYXRlVHlwZSh0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uKTtcbiAgICBuZXdEYXRhLmFjdGlvbiA9ICdwcmV2aWV3JztcbiAgICBWaXN1YWxGcmFtZS5mb3JtU3VibWl0KG5ld0RhdGEpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuaXRlcmF0ZVRlbXBsYXRlVHlwZSh0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uKTtcbiAgICBkYXRhLmFjdGlvbiA9ICdzYXZlJztcbiAgICBWaXN1YWxGcmFtZS5mb3JtU3VibWl0KGRhdGEpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGl0ZXJhdGVUZW1wbGF0ZVR5cGUoYXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgZW50aXR5OiB7XG4gICAgICAgIG1hdGVyaWFsc0J5UmVnaW9uRGVjbDoge30sXG4gICAgICAgIHByb3ZpZGVyczoge30sXG4gICAgICB9LFxuICAgIH07XG4gICAgYXJyLmZvckVhY2gob2JqID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IG9iai5kYXRhLmlkO1xuICAgICAgY29uc3QgcmVnaW9uc1Jlc3VsdCA9IFZpc3VhbEZyYW1lLml0ZXJhdGVUZW1wbGF0ZVJlZ2lvbnMob2JqLmNoaWxkcmVuKTtcbiAgICAgIC8vIGxheW91dCBvciB0ZW1wbGF0ZVxuICAgICAgcmVzdWx0W2tleV0gPSB7XG4gICAgICAgIHRlbXBsYXRlUmVnaW9uczogcmVnaW9uc1Jlc3VsdC50ZW1wbGF0ZVJlZ2lvbnMsXG4gICAgICAgIHRlbXBsYXRlUmVnaW9uc09yZGVyOiByZWdpb25zUmVzdWx0LnRlbXBsYXRlUmVnaW9uc09yZGVyLFxuICAgICAgICB0ZW1wbGF0ZUlkOiBvYmouZGF0YS50ZW1wbGF0ZUlkLFxuICAgICAgICBwcm92aWRlcnM6IHt9LFxuICAgICAgfTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhyZWdpb25zUmVzdWx0LmVudGl0eU1hdGVyaWFscykubGVuZ3RoID4gMCkge1xuICAgICAgICBPYmplY3Qua2V5cyhyZWdpb25zUmVzdWx0LmVudGl0eU1hdGVyaWFscykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgICAgIHJlc3VsdC5lbnRpdHkubWF0ZXJpYWxzQnlSZWdpb25EZWNsW3JlZ2lvbktleV0gPSByZWdpb25zUmVzdWx0LmVudGl0eU1hdGVyaWFsc1tyZWdpb25LZXldO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdFtrZXldLnByb3ZpZGVycyA9IHRoaXMuc2VyaWFsaXplUHJvdmlkZXJzKGtleSk7XG4gICAgfSk7XG4gICAgcmVzdWx0LmVudGl0eS5wcm92aWRlcnMgPSB0aGlzLnNlcmlhbGl6ZVByb3ZpZGVycygnZW50aXR5Jyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNlcmlhbGl6ZVByb3ZpZGVycyh0eXBlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5wcm92aWRlcnNbdHlwZV0pLmZvckVhY2gocHJvdmlkZXJLZXkgPT4ge1xuICAgICAgcmVzdWx0W3Byb3ZpZGVyS2V5XSA9IHRoaXMucHJvdmlkZXJzW3R5cGVdW3Byb3ZpZGVyS2V5XS5zZXJpYWxpemUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGl0ZXJhdGVUZW1wbGF0ZVJlZ2lvbnMoYXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgdGVtcGxhdGVSZWdpb25zOiB7fSxcbiAgICAgIHRlbXBsYXRlUmVnaW9uc09yZGVyOiBbXSxcbiAgICAgIGVudGl0eU1hdGVyaWFsczoge30sXG4gICAgfTtcbiAgICBhcnIuZm9yRWFjaChvYmogPT4ge1xuICAgICAgLy8gY29uc3Qga2V5ID0gb2JqLmRhdGEuaWQucmVwbGFjZSgvXi4qXFwuLywgJycpO1xuICAgICAgY29uc3QgcmVnaW9uS2V5ID0gb2JqLmRhdGEucmVnaW9uS2V5O1xuICAgICAgcmVzdWx0LnRlbXBsYXRlUmVnaW9uc09yZGVyLnB1c2gocmVnaW9uS2V5KTtcbiAgICAgIGNvbnN0IGVudGl0eURlcGVuZGVudCA9IG9iai5kYXRhLmVudGl0eURlcGVuZGVudCB8fCBmYWxzZTtcblxuICAgICAgY29uc3QgcmVnaW9uTWF0ZXJpYWxzID0gVmlzdWFsRnJhbWUuaXRlcmF0ZU1hdGVyaWFscyhvYmouY2hpbGRyZW4sIHJlZ2lvbktleSk7XG5cbiAgICAgIGlmIChlbnRpdHlEZXBlbmRlbnQgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgYW4gZXhhY3QgdGVtcGxhdGUgcmVnaW9uXG4gICAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnNbcmVnaW9uS2V5XSA9IHtcbiAgICAgICAgICByZWdpb25JZDogb2JqLmRhdGEucmVnaW9uSWQsXG4gICAgICAgICAgcmVnaW9uS2V5LFxuICAgICAgICAgIHVuaXF1ZUNvbnRlbnRJZDogb2JqLmRhdGEudW5pcXVlQ29udGVudElkLFxuICAgICAgICAgIG1hdGVyaWFsc0RlY2xzOiByZWdpb25NYXRlcmlhbHMsXG4gICAgICAgICAgZW50aXR5RGVwZW5kZW50LFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnRlbXBsYXRlUmVnaW9uc1tyZWdpb25LZXldID0ge1xuICAgICAgICAgIHJlZ2lvbklkOiBvYmouZGF0YS5yZWdpb25JZCxcbiAgICAgICAgICByZWdpb25LZXksXG4gICAgICAgICAgdW5pcXVlQ29udGVudElkOiBvYmouZGF0YS51bmlxdWVDb250ZW50SWQsXG4gICAgICAgICAgZW50aXR5RGVwZW5kZW50LFxuICAgICAgICB9O1xuICAgICAgICAvLyB0aGlzIGlzIGVudGl0eS1kZXBlbmRlbnQgcmVnaW9uXG4gICAgICAgIHJlc3VsdC5lbnRpdHlNYXRlcmlhbHNbcmVnaW9uS2V5XSA9IHJlZ2lvbk1hdGVyaWFscztcbiAgICAgIH1cblxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgaXRlcmF0ZU1hdGVyaWFscyhhcnIsIHJlZ2lvbktleSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGRlY2w6IHt9LFxuICAgICAgbWF0ZXJpYWxzT3JkZXI6IFtdLFxuICAgIH07XG4gICAgYXJyLmZvckVhY2gob2JqID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IG9iai5kYXRhLm1hdGVyaWFsSW5kZXg7XG4gICAgICByZXN1bHQuZGVjbFtrZXldID0ge1xuICAgICAgICAvLyBlZGl0YWJsZXNLZXlzOiBvYmouZGF0YS5lZGl0YWJsZUtleXMsXG4gICAgICAgIG1hdGVyaWFsOiBvYmouZGF0YS5tYXRlcmlhbFBhdGgsXG4gICAgICB9O1xuICAgICAgcmVzdWx0Lm1hdGVyaWFsc09yZGVyLnB1c2goa2V5KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbEZyYW1lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgV1lTSVdZRyBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gQmFzZUVkaXRhYmxlLmZyYW1lJCgkbm9kZSk7XG4gICAgY29uc3QgZWRpdG9yID0gbm9kZS5kYXRhKCdlZGl0b3InKTtcbiAgICBpZiAoZWRpdG9yKSB7XG4gICAgICByZXR1cm4gZWRpdG9yLmdldERhdGEoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUuaHRtbCgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9ICRub2RlWzBdO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGF1dG9QYXJhZ3JhcGg6IGZhbHNlLFxuICAgICAgZW5hYmxlQ29udGVudEVkaXRhYmxlOiB0cnVlLFxuICAgICAgaWdub3JlRW1wdHlQYXJhZ3JhcGg6IHRydWUsXG4gICAgICBlbnRlck1vZGU6IHdpbmRvdy5DS0VESVRPUi5FTlRFUl9CUixcbiAgICB9O1xuICAgIC8vICQoKCkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gd2luZG93LkFsbG95RWRpdG9yLmVkaXRhYmxlKG5vZGUsIGNvbmZpZykuZ2V0KCduYXRpdmVFZGl0b3InKTtcbiAgICAgICRub2RlLmRhdGEoJ2VkaXRvcicsIGVkaXRvcik7XG4gICAgLy8gfSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBXWVNJV1lHO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL1dZU0lXWUcuanNcbiAqKi8iLCJpbXBvcnQgV1lTSVdZRyBmcm9tICcuL1dZU0lXWUcnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9saW5rJztcbmltcG9ydCBUZXh0U3RyaW5nIGZyb20gJy4vc3RyaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWxsKCkge1xuICBpZiAodHlwZW9mKHdpbmRvdy5NT05TVEVSX0VESVRBQkxFUykgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTID0ge307XG4gIH1cbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWyd3eXNpd3lnJ10gPSBuZXcgV1lTSVdZRygpO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ2xpbmsnXSA9IG5ldyBMaW5rKCk7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snaW1hZ2UnXSA9IG5ldyBJbWFnZSgpO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ3N0cmluZyddID0gbmV3IFRleHRTdHJpbmcoKTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvYWxsLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFZGl0YWJsZSBmcm9tICcuL0Jhc2VFZGl0YWJsZSc7XG5cbmNsYXNzIEltYWdlIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIGNvbnN0ICRpbWcgPSAkbm9kZS5maW5kKCdpbWcnKS5maXJzdCgpO1xuICAgIHJldHVybiB7XG4gICAgICBzcmM6ICRpbWcuYXR0cignc3JjJyksXG4gICAgICBhbHQ6ICRpbWcuYXR0cignYWx0JyksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9pbWFnZS5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiAkbm9kZS5kYXRhKCdvcmlnaW5hbEhyZWYnKSA/ICRub2RlLmRhdGEoJ29yaWdpbmFsSHJlZicpIDogJG5vZGUuYXR0cignaHJlZicpLFxuICAgICAgYW5jaG9yOiAkbm9kZS5odG1sKCksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2xpbmsuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgVGV4dFN0cmluZyBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gQmFzZUVkaXRhYmxlLmZyYW1lJCgkbm9kZSk7XG4gICAgY29uc3QgZWRpdG9yID0gbm9kZS5kYXRhKCdlZGl0b3InKTtcbiAgICBpZiAoZWRpdG9yKSB7XG4gICAgICByZXR1cm4gZWRpdG9yLmdldERhdGEoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUuaHRtbCgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9ICRub2RlWzBdO1xuICAgIC8qIGdsb2JhbCB3aW5kb3c6ZmFsc2UgKi9cblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGFsbG93ZWRDb250ZW50OiAnaSB1JyxcbiAgICAgIHRvb2xiYXJzOiB7XG4gICAgICAgIHN0eWxlczoge1xuICAgICAgICAgIHNlbGVjdGlvbnM6IHdpbmRvdy5BbGxveUVkaXRvci5TZWxlY3Rpb25zLFxuICAgICAgICAgIHRhYkluZGV4OiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGF1dG9QYXJhZ3JhcGg6IGZhbHNlLFxuICAgICAgZW5hYmxlQ29udGVudEVkaXRhYmxlOiB0cnVlLFxuICAgICAgaWdub3JlRW1wdHlQYXJhZ3JhcGg6IHRydWUsXG4gICAgICBibG9ja2xlc3M6IHRydWUsXG4gICAgICBlbnRlck1vZGU6IHdpbmRvdy5DS0VESVRPUi5FTlRFUl9CUixcbiAgICB9O1xuICAgIC8vICQoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB3aW5kb3cuQWxsb3lFZGl0b3IuZWRpdGFibGUobm9kZSwgY29uZmlnKS5nZXQoJ25hdGl2ZUVkaXRvcicpO1xuICAgICAgZWRpdG9yLm9uKCdrZXknLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5kYXRhLmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmRhdGEua2V5Q29kZSA9PT0gd2luZG93LkNLRURJVE9SLlNISUZUICsgMTMpIHtcbiAgICAgICAgICAvLyBhZGQgc2F2aW5nIGZ1bmN0aW9uIGhlcmVcbiAgICAgICAgICBldmVudC5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBlZGl0b3Iub24oJ3Bhc3RlJywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5kYXRhLmRhdGFWYWx1ZSA9IGV2ZW50LmRhdGEuZGF0YVZhbHVlLnJlcGxhY2UoLzxicltcXHNcXC9dKj4vZ21pLCAnICcpO1xuICAgICAgfSk7XG4gICAgICAkbm9kZS5kYXRhKCdlZGl0b3InLCBlZGl0b3IpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCRub2RlLCBub2RlKTtcbiAgICAgIC8vIHRocm93IGU7XG4gICAgfVxuICAgIC8vIH0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dFN0cmluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9zdHJpbmcuanNcbiAqKi8iLCJpbXBvcnQgRGF0YVByb3ZpZGVyIGZyb20gJy4uL0RhdGFQcm92aWRlcic7XG5cbmNsYXNzIFN0YXRpY0NvbnRlbnQgZXh0ZW5kcyBEYXRhUHJvdmlkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm92aWRlZEtleXMpIHtcbiAgICBzdXBlcignRG90UGxhbnRcXFxcTW9uc3RlclxcXFxEYXRhRW50aXR5XFxcXFN0YXRpY0NvbnRlbnRQcm92aWRlcicsIHByb3ZpZGVkS2V5cyk7XG4gIH1cblxuICBmaWxsQ29uZmlnKGRhdGEpIHtcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YTtcbiAgICBuZXdEYXRhLmVudGl0aWVzID0gdGhpcy5zZXJpYWxpemVLZXlzKCk7XG4gICAgcmV0dXJuIG5ld0RhdGE7XG4gIH1cblxuICBzZXJpYWxpemVNYXRlcmlhbChyZWdpb25LZXksIG1hdGVyaWFsS2V5LCBkYXRhS2V5cywgJHJlZ2lvbiwgJG1hdGVyaWFsKSB7XG4gICAgY29uc3QgbWF0ZXJpYWxFZGl0YWJsZUtleXMgPSAkbWF0ZXJpYWwuZGF0YSgnZWRpdGFibGVLZXlzJyk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5yZWN1cnNpdmVTZXJpYWxpemUobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRtYXRlcmlhbCwgZGF0YUtleXMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZWN1cnNpdmVTZXJpYWxpemUobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRyb290LCBkYXRhS2V5cywgcHJlZml4ID0gJycpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcblxuICAgIGRhdGFLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IG9iaiA9IG1hdGVyaWFsRWRpdGFibGVLZXlzW2tleV0gfHwgJ05PX1NVQ0hfS0VZJztcbiAgICAgIGlmIChvYmogPT09ICdOT19TVUNIX0tFWScpIHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvYmogPT09IE9iamVjdChvYmopKSB7XG4gICAgICAgIC8vIGl0J3MgcmVjdXJzaXZlXG4gICAgICAgIC8vIGZpcnN0IC0gZmluZCBhbGwgYmxvY2tzXG4gICAgICAgIGNvbnN0ICRibG9ja3MgPSAkcm9vdC5maW5kKGBbZGF0YS1yZWN1cnNpdmUtaXRlbT1cIiR7a2V5fVwiXWApO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICByZXN1bHRba2V5XSA9IFtdO1xuICAgICAgICAkYmxvY2tzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh0aGF0LnJlY3Vyc2l2ZVNlcmlhbGl6ZShvYmosICR0aGlzLCBPYmplY3Qua2V5cyhvYmopLCAnaXRlbS4nKSk7XG4gICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGl0J3MgcGxhaW4gZmllbGRcbiAgICAgICAgY29uc3QgJG5vZGUgPSAkcm9vdC5maW5kKGBbZGF0YS1lZGl0YWJsZS1rZXk9XCIke3ByZWZpeH0ke2tleX1cIl1gKS5maXJzdCgpO1xuICAgICAgICBpZiAoJG5vZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBTa2lwcGVkIFtkYXRhLWVkaXRhYmxlLWtleT1cIiR7cHJlZml4fSR7a2V5fVwiXSBhcyBub3QgZm91bmRgKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0W2tleV0gPSBEYXRhUHJvdmlkZXIuZWRpdGFibGUuc2VyaWFsaXplRWRpdGFibGUoJG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGljQ29udGVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL3Byb3ZpZGVycy9TdGF0aWNDb250ZW50LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==