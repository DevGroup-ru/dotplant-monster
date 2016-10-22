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
	            console.log(obj.node);
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
	
	    this.preInit();
	
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
	    key: "preInit",
	    value: function preInit() {}
	  }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWI5MzJjY2I2ZDMzNDYyMzAxNzYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL0Jhc2VFbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL0Jhc2VFZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL0Zyb250ZW5kTW9uc3Rlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQWN0aW9uRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0VkaXRhYmxlLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9IYXNoQXBpLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL1dZU0lXWUcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9hbGwuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL3Byb3ZpZGVycy9TdGF0aWNDb250ZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9idW5kbGUuY3NzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZS9CYXNlQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9QYWdlU3RydWN0dXJlL01hdGVyaWFsQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9QYWdlU3RydWN0dXJlL1BhZ2VJdGVyYXRvci5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJGcm9udGVuZE1vbnN0ZXIiLCJCYXNlRW52aXJvbm1lbnQiLCJ2aXN1YWxCdWlsZGVyIiwibmFtZSIsInRhcmdldCIsIiQiLCJzZXR0aW5ncyIsImNvbnRlbnRXaW5kb3ciLCJjdXJyZW50RW52aXJvbm1lbnQiLCJlbnZpcm9ubWVudHMiLCJnZXQiLCJkZWFjdGl2YXRlIiwiY2xlYXJTdGFja2FibGUiLCJmdW5jIiwiYXJncyIsInNlbmRNZXNzYWdlIiwiQmFzZUVkaXRhYmxlIiwiJG5vZGUiLCJGcmFtZUFwaSIsImxpc3RlbmVyIiwiY2FsbGJhY2siLCJjYWxsYmFja0hhbmRsZXIiLCJldmVudCIsIm1lc3NhZ2UiLCJpc0llIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsImFwcGx5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50Iiwic3RyaW5naWZ5IiwicG9zdE1lc3NhZ2UiLCJpcyIsImllIiwicGFyYW1zIiwidmlzdWFsQnVsZGVyIiwiaGFzaEFwaSIsInBhcmVudCIsImhhc0J1aWxkZXIiLCJWaXN1YWxGcmFtZSIsInNtb290aFNjcm9sbCIsImluaXQiLCJ1c2VyU2V0dGluZ3MiLCJGcm9udGVuZE1vbnN0ZXJTZXR0aW5ncyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiYnVpbGRlciIsIiRidWlsZGVyIiwibGVuZ3RoIiwiVmlzdWFsQnVpbGRlciIsInJlc29sdXRpb25Td2l0Y2hlciIsIk1hcCIsImVudmlyb25tZW50U2VsZWN0b3IiLCJzd2l0Y2hFbnZpcm9ubWVudCIsImZpcnN0IiwibW9kIiwiYmluZE1lc3NhZ2VMaXN0ZW5lciIsImNvbnRyb2xzIiwiVmlzdWFsQnVpbGRlclNldHRpbmdzIiwiYnVuZGxlcyIsIiRzdGFja2FibGUiLCJ0aGF0IiwiYmVtRWxlbSIsIiRyZXNvbHV0aW9uTGlua3MiLCJjbGljayIsIndpZHRoIiwiJHNlY3Rpb25MaW5rcyIsImVudmlyb25tZW50TmFtZSIsImFjdGl2YXRlIiwiZW1wdHkiLCJwYW5lQ2xhc3MiLCJtb2RpZmllciIsImZpbmQiLCIkbmV3UGFuZSIsImFwcGVuZCIsIm1hdGVyaWFscyIsImhhc093blByb3BlcnR5IiwicmVzdWx0Iiwic2VyaWFsaXplUGFnZSIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRCeVByb3ZpZGVycyIsInByb3ZpZGVkS2V5cyIsImZyYW1lQ29udGVudFdpbmRvdyIsIk1PTlNURVJfRURJVF9NT0RFX0RBVEEiLCJ0ZW1wbGF0ZSIsInByb3ZpZGVySW5kZXgiLCJyZWdpb25zIiwicmVnaW9uS2V5IiwibWF0ZXJpYWxJbmRleCIsImRhdGFLZXlzIiwiZW52aXJvbm1lbnQiLCJwYWdlQ2hhbmdlZCIsIiRjb250cm9scyIsImVsZW0iLCJsb2NhdGlvbiIsInJlbG9hZCIsIiRjb250cm9sc1JpZ2h0IiwiRGlhbG9nSGVscGVyIiwiYnVpbGRlckRpYWxvZyIsIm9uQWpheExvYWQiLCIkdGFyZ2V0IiwiZGlhbG9nIiwiZGF0YUNoYW5nZXIiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJhdXRvRGVzdHJveSIsInNob3ciLCJBY3Rpb25FbnZpcm9ubWVudCIsIkN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCIsIk1hdGVyaWFsc0Vudmlyb25tZW50IiwiaW5pdE1hdGVyaWFsc1NlbGVjdG9yIiwiJG1hdGVyaWFsc0dyb3VwcyIsIiRtYXRlcmlhbHNMaXN0IiwiaTE4bkJ1bmRsZU5hbWUiLCJwb2x5Z2xvdCIsInQiLCJidW5kbGUiLCIkYnVuZGxlVGl0bGUiLCJmdWxsUGF0aCIsInB1c2giLCJncm91cHMiLCJncm91cE5hbWUiLCJncm91cCIsImkxOG5Hcm91cE5hbWUiLCIkbGkiLCIkbGlzdCIsIml0ZW1zIiwibWF0ZXJpYWxOYW1lIiwibWF0ZXJpYWwiLCJpMThuTWF0ZXJpYWxOYW1lIiwiJGl0ZW0iLCJkb2N1bWVudCIsIm9uIiwiY2xpY2tIYW5kbGVyIiwiJHRoaXMiLCJ0b2dnbGVNb2QiLCJncm91cFBhdGgiLCJlYWNoIiwiaXQiLCIkbWF0ZXJpYWxzUGFuZSIsImhpZGUiLCJQYWdlU3RydWN0dXJlRW52Iiwic2VsZWN0ZWRSZWdpb25LZXkiLCJzZWxlY3RlZEVudGl0eSIsIiRncm91cHNQYW5lIiwiY3JlYXRlU3RhY2thYmxlUGFuZSIsIlBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCIsImluaXRQYWdlU3RydWN0dXJlRWxlbWVudCIsIiRoZWFkZXIiLCIkcGFnZVN0cnVjdHVyZSIsIiRzdHJ1Y3R1cmVQYW5lIiwiZGV0YWNoIiwianN0cmVlIiwibGF5b3V0IiwibGF5b3V0SXRlbSIsImlkIiwidGVtcGxhdGVJZCIsInRleHQiLCJpY29uIiwic3RhdGUiLCJvcGVuZWQiLCJjaGlsZHJlbiIsInRlbXBsYXRlSXRlbSIsIiRsYXlvdXRSZWdpb25zIiwidGFyZ2V0JCIsIml0ZXIiLCJwcm9jZXNzTGF5b3V0IiwiaXRlbSIsInRlbXBsYXRlUmVnaW9ucyIsInJlZ2lvbiIsInBhZ2VTdHJ1Y3R1cmUiLCJjb3JlIiwiY2hlY2tfY2FsbGJhY2siLCJvcGVyYXRpb24iLCJub2RlIiwibm9kZV9wYXJlbnQiLCJ0eXBlIiwidGhlbWVzIiwicGx1Z2lucyIsImRuZCIsIm9wZW5fdGltZW91dCIsImxhcmdlX2Ryb3BfdGFyZ2V0IiwibGFyZ2VfZHJhZ190YXJnZXQiLCJjaGVja193aGlsZV9kcmFnZ2luZyIsImNvcHkiLCJpc19kcmFnZ2FibGUiLCJub2RlcyIsInVuZGVmaW5lZCIsInR5cGVzIiwidGVtcGxhdGVSZWdpb24iLCJjb250ZW50VGVtcGxhdGVSZWdpb24iLCJqc3RyZWVPYmoiLCJ1cGRhdGVQYWdlU3RydWN0dXJlSnNvbiIsImlzQ29udGVudFJlZ2lvbkZvdW5kIiwiZW50aXR5RGVwZW5kZW50Iiwic2VsZWN0X25vZGUiLCJwcmV2aWV3IiwiY29udHJvbEJ1dHRvbnMiLCJlIiwib2JqIiwiZW50aXR5VHlwZSIsIiRhbmNob3IiLCJwcmVwZW5kIiwic2VsZWN0TWF0ZXJpYWwiLCJzY3JvbGxUYXJnZXQiLCJpbmRleCIsIiR0YXJnZXRNYXRlcmlhbCIsInJlbW92ZUNsYXNzIiwib2Zmc2V0V2lkdGgiLCJhZGRDbGFzcyIsInBhZ2VTdHJ1Y3R1cmVKc29uIiwiZ2V0X2pzb24iLCJub19zdGF0ZSIsIm5vX2lkIiwibm9fbGlfYXR0ciIsIm5vX2FfYXR0ciIsIlNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmlxaWQiLCJwcmVmaXgiLCJtb3JlRW50cm9weSIsInJldElkIiwiX2Zvcm1hdFNlZWQiLCJzZWVkIiwicmVxV2lkdGgiLCJwYXJzZUludCIsInRvU3RyaW5nIiwic2xpY2UiLCJBcnJheSIsImpvaW4iLCIkZ2xvYmFsIiwiR0xPQkFMIiwiJGxvY3V0dXMiLCJwaHAiLCJ1bmlxaWRTZWVkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiRGF0ZSIsImdldFRpbWUiLCJ0b0ZpeGVkIiwiRGF0YVByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiYXNzb2NpYXRpb25zIiwiYXNzb2NpYXRlIiwiJHJlZ2lvbiIsIm1hdGVyaWFsS2V5IiwiJG1hdGVyaWFsIiwibWF0ZXJpYWxFZGl0YWJsZUtleXMiLCJpbml0aWFsaXplTWF0ZXJpYWxFZGl0IiwiJHJvb3QiLCIkYmxvY2tzIiwiY291bnRlciIsImVkaXRhYmxlIiwiaW5pdGlhbGl6ZUVkaXRhYmxlIiwic2VyaWFsaXplTWF0ZXJpYWwiLCJjbGFzcyIsImZpbGxDb25maWciLCJEYXRhUHJvdmlkZXJGYWN0b3J5IiwicHJvdmlkZXJEZWNsIiwicHJvdmlkZXIiLCJFZGl0YWJsZSIsImVkaXRhYmxlc0J5VHlwZSIsIk1PTlNURVJfRURJVEFCTEVTIiwiZXhwb3J0VmFyaWFibGUiLCJzZXJpYWxpemVOb2RlIiwic3RyaW5nIiwiSGFzaEFwaSIsImZ1bmN0aW9uQ2FsbHMiLCJoYXNoIiwibWF0Y2hlcyIsIm1hdGNoIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiaW5pdGlhbGl6ZSIsInBhZ2VTdHJ1Y3R1cmVKc29uRGF0YSIsInBhcmVudFdpbmRvdyIsInBhcmVudE1vbnN0ZXIiLCJwYXJlbnRCdWlsZGVyIiwiY3VycmVudE1vbnN0ZXJDb250ZW50IiwicmVzaXplIiwidXBkYXRlSGFuZGxlcnMiLCJpbml0UHJvdmlkZXJzIiwiTW9uc3RlckVkaXREYXRhIiwicHJvdmlkZXJzIiwiZ2V0UHJvdmlkZXJzIiwiZW50aXR5IiwiYXJyIiwiZmFjdG9yeSIsIiRtb25zdGVyQ29udGVudENhY2hlIiwiJHNlbGVjdGVkTWF0ZXJpYWwiLCIkaGFuZGxlcnMiLCJjc3MiLCJwb3NpdGlvbiIsInRvcCIsImhlaWdodCIsIiRtb25zdGVyQ29udGVudCIsIiRtb25zdGVyIiwidW5pcXVlQ29udGVudElkIiwic2VyaWFsaXplVW5pcXVlQ29udGVudCIsInNlbmRUb0J1aWxkZXIiLCJibG9jayIsIlZpc3VhbEZyYW1lU2V0dGluZ3MiLCJyZWdpb25OYW1lIiwicmFuZG9tSW5kZXgiLCJpdGVyYXRlVGVtcGxhdGVUeXBlIiwibWF0ZXJpYWxzQnlSZWdpb25EZWNsIiwiZGVjbCIsIm1hdGVyaWFsc09yZGVyIiwibWF0ZXJpYWxzRGVjbHMiLCJuZXdEYXRhIiwiYWN0aW9uIiwiZm9ybVN1Ym1pdCIsInJlZ2lvbnNSZXN1bHQiLCJpdGVyYXRlVGVtcGxhdGVSZWdpb25zIiwidGVtcGxhdGVSZWdpb25zT3JkZXIiLCJlbnRpdHlNYXRlcmlhbHMiLCJzZXJpYWxpemVQcm92aWRlcnMiLCJwcm92aWRlcktleSIsInNlcmlhbGl6ZSIsInZhbHVlIiwicmVmcmVzaE1vbnN0ZXJDb250ZW50Q2FjaGUiLCIkZm9ybSIsIiRpbnB1dCIsIiRjc3JmIiwiYXR0ciIsInZhbCIsImFwcGVuZFRvIiwic3VibWl0IiwicmVnaW9uTWF0ZXJpYWxzIiwiaXRlcmF0ZU1hdGVyaWFscyIsInJlZ2lvbklkIiwibWF0ZXJpYWxQYXRoIiwiV1lTSVdZRyIsImZyYW1lJCIsImVkaXRvciIsImdldERhdGEiLCJodG1sIiwiY29uZmlnIiwiYXV0b1BhcmFncmFwaCIsImVuYWJsZUNvbnRlbnRFZGl0YWJsZSIsImlnbm9yZUVtcHR5UGFyYWdyYXBoIiwiZW50ZXJNb2RlIiwiQ0tFRElUT1IiLCJFTlRFUl9CUiIsIkFsbG95RWRpdG9yIiwiYWxsIiwiSW1hZ2UiLCIkaW1nIiwic3JjIiwiYWx0IiwiTGluayIsImhyZWYiLCJhbmNob3IiLCJUZXh0U3RyaW5nIiwiYWxsb3dlZENvbnRlbnQiLCJ0b29sYmFycyIsInN0eWxlcyIsInNlbGVjdGlvbnMiLCJTZWxlY3Rpb25zIiwidGFiSW5kZXgiLCJibG9ja2xlc3MiLCJrZXlDb2RlIiwiU0hJRlQiLCJjYW5jZWwiLCJkYXRhVmFsdWUiLCJyZXBsYWNlIiwiU3RhdGljQ29udGVudCIsImVudGl0aWVzIiwic2VyaWFsaXplS2V5cyIsInJlY3Vyc2l2ZVNlcmlhbGl6ZSIsIndhcm4iLCJzZXJpYWxpemVFZGl0YWJsZSIsIkJhc2VDb250cm9scyIsImVudiIsInByZUluaXQiLCJ0aGF0RW52IiwiYnV0dG9uc0FycmF5IiwiJGJ1dHRvbiIsImNvbmYiLCJnZXRfbm9kZSIsIk1hdGVyaWFsQ29udHJvbHMiLCJqc1RyZWVOb2RlIiwiZGVsZXRlX25vZGUiLCJnZXRfc2VsZWN0ZWQiLCJQYWdlSXRlcmF0b3IiLCIkbGF5b3V0UmVnaW9uIiwiZXh0cmFjdFJlZ2lvbkRhdGEiLCIkbGF5b3V0TWF0ZXJpYWxzIiwiJGxheW91dE1hdGVyaWFsIiwicHJvY2Vzc0xheW91dE1hdGVyaWFsIiwibGF5b3V0TWF0ZXJpYWxJdGVtIiwibGF5b3V0TWF0ZXJpYWwiLCJlZGl0YWJsZUtleXMiLCIkcmVnaW9ucyIsInByb2Nlc3NUZW1wbGF0ZVJlZ2lvbiIsImlzQ29udGVudCIsIiR0ZW1wbGF0ZVJlZ2lvbiIsIiRyZWdpb25NYXRlcmlhbHMiLCJwcm9jZXNzVGVtcGxhdGVSZWdpb25NYXRlcmlhbCIsIiRyZWdpb25NYXRlcmlhbCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7QUFFQTs7Ozs7O0FBRUFBLFFBQU9DLGVBQVAsR0FBeUIsK0JBQXpCO0FBQ0EsRzs7Ozs7Ozs7Ozs7Ozs7QUNMQTs7Ozs7Ozs7S0FFTUMsZTtBQUNKLDRCQUFZQyxhQUFaLEVBQTJCQyxJQUEzQixFQUFpQztBQUFBOztBQUMvQixVQUFLRCxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLE1BQUwsR0FBY0MsRUFBRSxLQUFLSCxhQUFMLENBQW1CSSxRQUFuQixDQUE0QixnQkFBNUIsQ0FBRixFQUFpRCxDQUFqRCxFQUFvREMsYUFBbEU7QUFDRDs7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QUNBLFdBQU11VCxlQUFlb0UsZ0JBQWdCM1gsSUFBaEIsQ0FBcUIsY0FBckIsQ0FBckI7QUFDQSxjQUFPO0FBQ0x3SSw4QkFBbUJ2RSxhQURkO0FBRUwwRixlQUFNLFVBRkQ7QUFHTDNKLGVBQU07QUFDSnNJLGVBQU9pRSxNQUFQLFNBQWlCdEksYUFEYjtBQUVKQSx1Q0FGSTtBQUdKc1AscUNBSEk7QUFJSjZELHlCQUFjTyxnQkFBZ0IzWCxJQUFoQixDQUFxQixjQUFyQixDQUpWO0FBS0p5SixpQkFBTWtPLGVBTEY7QUFNSnhNO0FBTkk7QUFIRCxRQUFQO0FBWUQ7Ozt1Q0FFd0I3TCxLLEVBQU87QUFDOUIsY0FBTztBQUNMa0osZUFBTWxKLE1BQU1VLElBQU4sQ0FBVyxvQkFBWCxDQUREO0FBRUwySixlQUFNLGdCQUZEO0FBR0wzSixlQUFNO0FBQ0pzVCxxQkFBVWhVLE1BQU1VLElBQU4sQ0FBVyxVQUFYLENBRE47QUFFSmdFLHNCQUFXMUUsTUFBTVUsSUFBTixDQUFXLFdBQVgsQ0FGUDtBQUdKcVIsNEJBQWlCL1IsTUFBTVUsSUFBTixDQUFXLGlCQUFYLENBSGI7QUFJSnlKLGlCQUFNbks7QUFKRjtBQUhELFFBQVA7QUFVRDs7Ozs7O21CQUdZc1gsWSIsImZpbGUiOiJ2aXN1YWwtYnVpbGRlci9zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAxYjkzMmNjYjZkMzM0NjIzMDE3NlxuICoqLyIsImltcG9ydCAnLi9idW5kbGUuY3NzJztcblxuaW1wb3J0IEZyb250ZW5kTW9uc3RlciBmcm9tICcuL0Zyb250ZW5kTW9uc3Rlcic7XG5cbndpbmRvdy5Gcm9udGVuZE1vbnN0ZXIgPSBuZXcgRnJvbnRlbmRNb25zdGVyKCk7XG4vL1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5qc1xuICoqLyIsImltcG9ydCBGcmFtZUFwaSBmcm9tICcuLy4uL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaSc7XG5cbmNsYXNzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIgPSB2aXN1YWxCdWlsZGVyO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXJnZXQgPSAkKHRoaXMudmlzdWFsQnVpbGRlci5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSlbMF0uY29udGVudFdpbmRvdztcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIC8vIGRlYWN0aXZhdGUgY3VycmVudCBzZWxlY3RlZCBlbnZpcm9ubWVudFxuICAgIGlmICh0aGlzLm5hbWUgPT09IHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpIHtcbiAgICAgIHRoaXMudmlzdWFsQnVpbGRlci5lbnZpcm9ubWVudHMuZ2V0KHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpLmRlYWN0aXZhdGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdGFyZ2V0JCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQuJDtcbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy52aXN1YWxCdWlsZGVyLmNsZWFyU3RhY2thYmxlKCk7XG4gIH1cblxuICBzZW5kTWVzc2FnZShmdW5jLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMudGFyZ2V0LCBmdW5jLCBhcmdzKTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2VkKCkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUVudmlyb25tZW50O1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvQmFzZUVudmlyb25tZW50LmpzXG4gKiovIiwiY2xhc3MgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuXG4gIH1cblxuICBpbml0aWFsaXplRWRpdGFibGUoJG5vZGUpIHtcblxuICB9XG5cbiAgc3RhdGljIGdldCBmcmFtZSQoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy4kO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VFZGl0YWJsZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvQmFzZUVkaXRhYmxlLmpzXG4gKiovIiwiY2xhc3MgRnJhbWVBcGkge1xuICBzdGF0aWMgZ2V0IGlzSWUoKSB7XG4gICAgLyogZ2xvYmFsIGlzICovXG4gICAgaWYgKHR5cGVvZihpcykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gaXMuaWUoKTsvLyB8fCBpcy5lZGdlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgYmluZE1lc3NhZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgICBsZXQgbWVzc2FnZSA9IG51bGw7XG4gICAgICBpZiAoRnJhbWVBcGkuaXNJZSkge1xuICAgICAgICBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lc3NhZ2UgPSBldmVudC5kYXRhO1xuICAgICAgfVxuXG4gICAgICBpZiAobGlzdGVuZXJbbWVzc2FnZS5mdW5jXSkge1xuICAgICAgICBsaXN0ZW5lclttZXNzYWdlLmZ1bmNdLmFwcGx5KGxpc3RlbmVyLCBtZXNzYWdlLmFyZ3MpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJRThcbiAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25tZXNzYWdlJywgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzZW5kTWVzc2FnZSh0YXJnZXQsIGZ1bmMsIGFyZ3MpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZnVuYyxcbiAgICAgIGFyZ3NcbiAgICB9O1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBGcmFtZUFwaS5pc0llID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiBkYXRhO1xuXG4gICAgdGFyZ2V0LnBvc3RNZXNzYWdlKG1lc3NhZ2UsICcqJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJhbWVBcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaS5qc1xuICoqLyIsImltcG9ydCBWaXN1YWxCdWlsZGVyIGZyb20gJy4vY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXInO1xuaW1wb3J0IFZpc3VhbEZyYW1lIGZyb20gJy4vY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUnO1xuaW1wb3J0IEhhc2hBcGkgZnJvbSAnLi9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9IYXNoQXBpJztcblxuY2xhc3MgRnJvbnRlbmRNb25zdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLnZpc3VhbEJ1bGRlciA9IG51bGw7XG4gICAgdGhpcy5oYXNoQXBpID0gbmV3IEhhc2hBcGkoKTtcbiAgICBpZiAod2luZG93LnBhcmVudCAhPT0gd2luZG93ICYmIHdpbmRvdy5wYXJlbnQuRnJvbnRlbmRNb25zdGVyKSB7XG4gICAgICBpZiAod2luZG93LnBhcmVudC5Gcm9udGVuZE1vbnN0ZXIuaGFzQnVpbGRlcikge1xuICAgICAgICB0aGlzLlZpc3VhbEZyYW1lID0gbmV3IFZpc3VhbEZyYW1lKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qIGdsb2JhbCBzbW9vdGhTY3JvbGw6IGZhbHNlKi9cbiAgICBpZiAodHlwZW9mKHNtb290aFNjcm9sbCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzbW9vdGhTY3JvbGwuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIFZpc3VhbEJ1aWxkZXIgY2xhc3MgaW5zdGFuY2VcbiAgICogQHJldHVybnMgVmlzdWFsQnVpbGRlclxuICAgKi9cbiAgZ2V0IGJ1aWxkZXIoKSB7XG4gICAgaWYgKHRoaXMudmlzdWFsQnVsZGVyID09PSBudWxsKSB7XG4gICAgICB0aGlzLnZpc3VhbEJ1bGRlciA9IG5ldyBWaXN1YWxCdWlsZGVyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZpc3VhbEJ1bGRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB0aGlzIEZyb250ZW5kTW9uc3RlciBpbnN0YW5jZSBoYXMgVmlzdWFsIEJ1aWxkZXIgb24gcGFnZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBoYXNCdWlsZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkZXIuJGJ1aWxkZXIubGVuZ3RoID09PSAxO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgRnJvbnRlbmRNb25zdGVyIHNldHRpbmdzLlxuICAgKiBVc2VzIEZyb250ZW5kTW9uc3RlclNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAqL1xuICBwYXJhbXMoKSB7XG4gICAgY29uc3QgdXNlclNldHRpbmdzID0gd2luZG93LkZyb250ZW5kTW9uc3RlclNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge307XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyb250ZW5kTW9uc3RlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL0Zyb250ZW5kTW9uc3Rlci5qc1xuICoqLyIsImltcG9ydCBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50JztcbmltcG9ydCBNYXRlcmlhbHNFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9NYXRlcmlhbHNFbnZpcm9ubWVudCc7XG5pbXBvcnQgQ3VzdG9taXphdGlvbkVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudCc7XG5pbXBvcnQgQWN0aW9uRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvQWN0aW9uRW52aXJvbm1lbnQnO1xuaW1wb3J0IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9QYWdlU3RydWN0dXJlRW52aXJvbm1lbnQnO1xuaW1wb3J0IEZyYW1lQXBpIGZyb20gJy4vLi4vdmlzdWFsLWZyYW1lL0ZyYW1lQXBpJztcbi8vIGltcG9ydCBFZGl0YWJsZSBmcm9tICcuL0VkaXRhYmxlJztcblxuY2xhc3MgVmlzdWFsQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFyYW1zKCk7XG4gICAgdGhpcy5yZXNvbHV0aW9uU3dpdGNoZXIoKTtcblxuICAgIHRoaXMuZW52aXJvbm1lbnRzID0gbmV3IE1hcChbXG4gICAgICBbJ3NpdGUtc3RydWN0dXJlJywgbmV3IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCh0aGlzLCAnc2l0ZS1zdHJ1Y3R1cmUnKV0sXG4gICAgICBbJ3BhZ2Utc3RydWN0dXJlJywgbmV3IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCh0aGlzLCAncGFnZS1zdHJ1Y3R1cmUnKV0sXG4gICAgICBbJ21hdGVyaWFscycsIG5ldyBNYXRlcmlhbHNFbnZpcm9ubWVudCh0aGlzLCAnbWF0ZXJpYWxzJyldLFxuICAgICAgWydjdXN0b21pemF0aW9uJywgbmV3IEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCh0aGlzLCAnY3VzdG9taXphdGlvbicpXSxcbiAgICAgIFsnYWN0aW9uJywgbmV3IEFjdGlvbkVudmlyb25tZW50KHRoaXMsICdhY3Rpb24nKV0sXG4gICAgXSk7XG5cbiAgICB0aGlzLmVudmlyb25tZW50U2VsZWN0b3IoKTtcblxuICAgIC8vIHNlbGVjdCBmaXJzdCBlbnZpcm9ubWVudCBieSBkZWZhdWx0XG4gICAgdGhpcy5zd2l0Y2hFbnZpcm9ubWVudCgnc2l0ZS1zdHJ1Y3R1cmUnKTtcbiAgICAkKCcubW9uc3Rlci1lbnZpcm9ubWVudC1zZWxlY3Rvcl9fZW52aXJvbm1lbnQtbGluaycpXG4gICAgICAuZmlyc3QoKVxuICAgICAgLm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgRnJhbWVBcGkuYmluZE1lc3NhZ2VMaXN0ZW5lcih0aGlzKTtcblxuICAgIC8vIHRoaXMuZWRpdGFibGUgPSBuZXcgRWRpdGFibGUoKTtcblxuICAgIHRoaXMuY29udHJvbHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIFZpc3VhbEJ1aWxkZXIgc2V0dGluZ3MuXG4gICAqIFVzZXMgVmlzdWFsQnVpbGRlclNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAqL1xuICBwYXJhbXMoKSB7XG4gICAgY29uc3QgdXNlclNldHRpbmdzID0gd2luZG93LlZpc3VhbEJ1aWxkZXJTZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICdlbGVtZW50LXNlbGVjdG9yJzogJy5tb25zdGVyLXZpc3VhbC1idWlsZGVyJyxcbiAgICAgICdmcmFtZS1zZWxlY3Rvcic6ICcubW9uc3Rlci12aXN1YWwtZnJhbWUnLFxuICAgICAgYnVuZGxlczoge30sXG4gICAgICAnc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyc6ICdtb25zdGVyLXN0YWNrYWJsZS1jb250YWluZXInLFxuICAgICAgJ25ldy1ibG9jay11cmwnOiAnL21vbnN0ZXIvdmlzdWFsLWJ1aWxkZXIvbmV3LWJsb2NrJyxcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHVzZXJTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLiRidWlsZGVyID0gJCh0aGlzLnNldHRpbmdzWydlbGVtZW50LXNlbGVjdG9yJ10pO1xuICAgIHRoaXMuJHN0YWNrYWJsZSA9ICQoYC4ke3RoaXMuc2V0dGluZ3NbJ3N0YWNrYWJsZS1jb250YWluZXItY2xhc3MnXX1gKTtcbiAgfVxuXG4gIHJlc29sdXRpb25Td2l0Y2hlcigpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBiZW1FbGVtID0gJ3Jlc29sdXRpb24tc3dpdGNoZXJfX3Jlc29sdXRpb24tbGluayc7XG5cbiAgICBjb25zdCAkcmVzb2x1dGlvbkxpbmtzID0gJChgLiR7YmVtRWxlbX1gKTtcbiAgICAkcmVzb2x1dGlvbkxpbmtzLmNsaWNrKGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgJHJlc29sdXRpb25MaW5rcy5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgICQodGhhdC5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSkud2lkdGgoJCh0aGlzKS5kYXRhKCdyZXNvbHV0aW9uV2lkdGgnKSk7XG4gICAgICAkKHRoaXMpLm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBlbnZpcm9ubWVudFNlbGVjdG9yKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGJlbUVsZW0gPSAnbW9uc3Rlci1lbnZpcm9ubWVudC1zZWxlY3Rvcl9fZW52aXJvbm1lbnQtbGluayc7XG5cbiAgICBjb25zdCAkc2VjdGlvbkxpbmtzID0gJChgLiR7YmVtRWxlbX1gKTtcbiAgICAkc2VjdGlvbkxpbmtzLmNsaWNrKGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgY29uc3QgZW52aXJvbm1lbnROYW1lID0gJCh0aGlzKS5kYXRhKCdlbnZpcm9ubWVudE5hbWUnKTtcbiAgICAgIGlmICh0aGF0LmN1cnJlbnRFbnZpcm9ubWVudCA9PT0gZW52aXJvbm1lbnROYW1lKSB7XG4gICAgICAgICRzZWN0aW9uTGlua3MubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgICAgIHRoYXQuZW52aXJvbm1lbnRzLmdldChlbnZpcm9ubWVudE5hbWUpLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgdGhhdC5jdXJyZW50RW52aXJvbm1lbnQgPSBudWxsO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgICRzZWN0aW9uTGlua3MubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgICB0aGF0LnN3aXRjaEVudmlyb25tZW50KGVudmlyb25tZW50TmFtZSk7XG4gICAgICAkKHRoaXMpLm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBzd2l0Y2hFbnZpcm9ubWVudChlbnZpcm9ubWVudE5hbWUpIHtcbiAgICB0aGlzLmVudmlyb25tZW50cy5nZXQoZW52aXJvbm1lbnROYW1lKS5hY3RpdmF0ZSgpO1xuICAgIHRoaXMuY3VycmVudEVudmlyb25tZW50ID0gZW52aXJvbm1lbnROYW1lO1xuICB9XG5cbiAgY2xlYXJTdGFja2FibGUoKSB7XG4gICAgdGhpcy4kc3RhY2thYmxlLmVtcHR5KCk7XG4gIH1cblxuICBjcmVhdGVTdGFja2FibGVQYW5lKCkge1xuICAgIGNvbnN0IHBhbmVDbGFzcyA9IGAke3RoaXMuc2V0dGluZ3NbJ3N0YWNrYWJsZS1jb250YWluZXItY2xhc3MnXX1fX3BhbmVgO1xuICAgIGNvbnN0IG1vZGlmaWVyID0gdGhpcy4kc3RhY2thYmxlLmZpbmQoYC4ke3BhbmVDbGFzc31gKS5sZW5ndGggPT09IDBcbiAgICAgID8gYCR7cGFuZUNsYXNzfV9maXJzdGBcbiAgICAgIDogJyc7XG4gICAgY29uc3QgJG5ld1BhbmUgPSAkKGA8ZGl2IGNsYXNzPVwiJHtwYW5lQ2xhc3N9ICR7bW9kaWZpZXJ9XCI+PC9kaXY+YCk7XG4gICAgdGhpcy4kc3RhY2thYmxlLmFwcGVuZCgkbmV3UGFuZSk7XG4gICAgcmV0dXJuICRuZXdQYW5lO1xuICB9XG5cbiAgbWF0ZXJpYWxCeU5hbWUobmFtZSkge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLm1hdGVyaWFscy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MubWF0ZXJpYWxzW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldCBmcmFtZUNvbnRlbnRXaW5kb3coKSB7XG4gICAgcmV0dXJuICQodGhpcy5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSlbMF0uY29udGVudFdpbmRvdztcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICAvLyBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLmZyYW1lQ29udGVudFdpbmRvdywgJ3NlcmlhbGl6ZUNvbnRlbnQnLCBbJ2xvZyddKTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmVudmlyb25tZW50cy5nZXQoJ3BhZ2Utc3RydWN0dXJlJykuc2VyaWFsaXplUGFnZSgpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICAvLyB3ZSBoYXZlIHJlc3VsdCB3aGljaCBpcyBjb250ZW50IGluIGZvcm1hdDpcbiAgICAvLyByZWdpb25cbiAgICAvLyAtLS0gbWF0ZXJpYWwgaWRcbiAgICAvLyAtLS0tLS0tIGtleXMgPT4gdmFsdWVzXG4gICAgLy9cbiAgICAvLyBvdXIgUHJvdmlkZXJzIHNob3VsZCBnZXQgb25seSB0aG9zZSBrZXlzIHRoYXQgdGhleSBwcm92aWRlXG4gICAgLy8gcHJvdmlkZWQga2V5cyBhcmUgc3RvcmVkIGluIGZyYW1lQ29udGVudFdpbmRvdy5NT05TVEVSX0VESVRfTU9ERV9EQVRBLnRlbXBsYXRlLnByb3ZpZGVkS2V5c1xuICAgIGNvbnN0IHJlc3VsdEJ5UHJvdmlkZXJzID0ge307XG4gICAgY29uc3QgcHJvdmlkZWRLZXlzID0gdGhpcy5mcmFtZUNvbnRlbnRXaW5kb3cuTU9OU1RFUl9FRElUX01PREVfREFUQS50ZW1wbGF0ZS5wcm92aWRlZEtleXM7XG5cbiAgICBPYmplY3Qua2V5cyhwcm92aWRlZEtleXMpLmZvckVhY2gocHJvdmlkZXJJbmRleCA9PiB7XG4gICAgICByZXN1bHRCeVByb3ZpZGVyc1twcm92aWRlckluZGV4XSA9IHt9O1xuXG4gICAgICBjb25zdCByZWdpb25zID0gcHJvdmlkZWRLZXlzW3Byb3ZpZGVySW5kZXhdO1xuXG4gICAgICBPYmplY3Qua2V5cyhyZWdpb25zKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQuaGFzT3duUHJvcGVydHkocmVnaW9uS2V5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF1bcmVnaW9uS2V5XSA9IHt9O1xuXG4gICAgICAgIC8vIGdvIGRlZXAgdG8gbWF0ZXJpYWwgaW5kZWNlc1xuICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSByZWdpb25zW3JlZ2lvbktleV07XG5cbiAgICAgICAgT2JqZWN0LmtleXMobWF0ZXJpYWxzKS5mb3JFYWNoKG1hdGVyaWFsSW5kZXggPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHRbcmVnaW9uS2V5XS5oYXNPd25Qcm9wZXJ0eShtYXRlcmlhbEluZGV4KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF1bcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XSA9IHt9O1xuXG4gICAgICAgICAgY29uc3QgZGF0YUtleXMgPSBtYXRlcmlhbHNbbWF0ZXJpYWxJbmRleF07XG5cbiAgICAgICAgICBkYXRhS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0W3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF0uaGFzT3duUHJvcGVydHkoa2V5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0QnlQcm92aWRlcnNcbiAgICAgICAgICAgICAgW3Byb3ZpZGVySW5kZXhdXG4gICAgICAgICAgICAgIFtyZWdpb25LZXldXG4gICAgICAgICAgICAgIFttYXRlcmlhbEluZGV4XVxuICAgICAgICAgICAgICBba2V5XSA9IHJlc3VsdFtyZWdpb25LZXldW21hdGVyaWFsSW5kZXhdW2tleV07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0QnlQcm92aWRlcnMpO1xuICAgIHJldHVybiByZXN1bHRCeVByb3ZpZGVycztcbiAgfVxuXG4gIHBhZ2VDaGFuZ2VkKCkge1xuICAgIHRoaXMuZW52aXJvbm1lbnRzLmZvckVhY2goXG4gICAgICBlbnZpcm9ubWVudCA9PlxuICAgICAgICBlbnZpcm9ubWVudC5wYWdlQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIGxvZyhyZXN1bHQpIHtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICB9XG5cbiAgY29udHJvbHMoKSB7XG4gICAgdGhpcy4kY29udHJvbHMgPSB0aGlzLiRidWlsZGVyLmZpbmQoJy5jb250cm9sc19sZWZ0JykuZmlyc3QoKTtcbiAgICB0aGlzLiRjb250cm9scy5lbGVtKCdyZWZyZXNoJykuY2xpY2soKCkgPT4ge1xuICAgICAgdGhpcy5mcmFtZUNvbnRlbnRXaW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRjb250cm9scy5lbGVtKCdzYXZlJykuY2xpY2soKCkgPT4ge1xuICAgICAgRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5mcmFtZUNvbnRlbnRXaW5kb3csICdzYXZlJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgdGhpcy4kY29udHJvbHNSaWdodCA9IHRoaXMuJGJ1aWxkZXIuZmluZCgnLmNvbnRyb2xzX3JpZ2h0JykuZmlyc3QoKTtcbiAgICB0aGlzLiRjb250cm9sc1JpZ2h0LmVsZW0oJ2NsZWFyLWNhY2hlJykuY2xpY2soKCkgPT4ge1xuICAgICAgLyogZ2xvYmFsIHdpbmRvdzogZmFsc2UgKi9cbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduLCBuby11bnVzZWQtdmFycyAqL1xuICAgICAgd2luZG93LkRpYWxvZ0hlbHBlclxuICAgICAgICAuYnVpbGRlckRpYWxvZygpXG4gICAgICAgIC5vbkFqYXhMb2FkKChkYXRhLCAkdGFyZ2V0LCBkaWFsb2csIGRhdGFDaGFuZ2VyKSA9PiB7XG4gICAgICAgICAgZGF0YUNoYW5nZXIoZGF0YSA/ICc8ZGl2Pk9LPC9kaXY+JyA6ICc8ZGl2PkVycm9yPC9kaXY+Jyk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pXG4gICAgICAgIC5hamF4KHtcbiAgICAgICAgICB1cmw6ICcvbW9uc3Rlci9idW5kbGVzL2NsZWFyLWNhY2hlJyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICB9KVxuICAgICAgICAuYXV0b0Rlc3Ryb3koKVxuICAgICAgICAuc2hvdygpO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiwgbm8tdW51c2VkLXZhcnMgKi9cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaXN1YWxCdWlsZGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXIuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgQWN0aW9uRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBBY3Rpb25FbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQWN0aW9uRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgQ3VzdG9taXphdGlvbkVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcblxufVxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9taXphdGlvbkVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9DdXN0b21pemF0aW9uRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgTWF0ZXJpYWxzRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2aXN1YWxCdWlsZGVyLCBuYW1lKSB7XG4gICAgc3VwZXIodmlzdWFsQnVpbGRlciwgbmFtZSk7XG4gICAgdGhpcy5pbml0TWF0ZXJpYWxzU2VsZWN0b3IoKTtcbiAgfVxuXG4gIGluaXRNYXRlcmlhbHNTZWxlY3RvcigpIHtcbiAgICB0aGlzLiRtYXRlcmlhbHNHcm91cHMgPSAkKCc8dWwgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzXCI+PC91bD4nKTtcbiAgICB0aGlzLiRtYXRlcmlhbHNMaXN0ID0gW107XG5cbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIuc2V0dGluZ3MuYnVuZGxlcy5mb3JFYWNoKGJ1bmRsZSA9PiB7XG4gICAgICAvKiBnbG9iYWwgcG9seWdsb3Q6IGZhbHNlICovXG4gICAgICBjb25zdCBpMThuQnVuZGxlTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gcG9seWdsb3QudChidW5kbGUubmFtZSlcbiAgICAgICAgOiBidW5kbGUubmFtZTtcblxuICAgICAgY29uc3QgJGJ1bmRsZVRpdGxlID0gYFxuICAgICAgPGxpIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19faXRlbSBtYXRlcmlhbHMtZ3JvdXBzX19pdGVtLS1idW5kbGUtbGFiZWxcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1idW5kbGVcIiBkYXRhLWJ1bmRsZS1wYXRoPVwiJHtidW5kbGUuZnVsbFBhdGh9XCI+XG4gICAgICAgICAgICAke2kxOG5CdW5kbGVOYW1lfVxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICAgYDtcbiAgICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QucHVzaCgkYnVuZGxlVGl0bGUpO1xuXG4gICAgICBidW5kbGUuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICBjb25zdCBncm91cE5hbWUgPSBncm91cC5uYW1lO1xuICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSBncm91cC5tYXRlcmlhbHM7XG4gICAgICAgIGNvbnN0IGkxOG5Hcm91cE5hbWUgPSB0eXBlb2YocG9seWdsb3QpICE9PSAndW5kZWZpbmVkJyA/IHBvbHlnbG90LnQoZ3JvdXBOYW1lKSA6IGdyb3VwTmFtZTtcbiAgICAgICAgY29uc3QgJGxpID0gJChgXG4gICAgPGxpIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19faXRlbVwiPlxuICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWdyb3VwLXBhdGg9XCIke2dyb3VwLmZ1bGxQYXRofVwiIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwXCI+XG4gICAgICAgICR7aTE4bkdyb3VwTmFtZX0gPHNwYW4gY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19jb3VudFwiPigke21hdGVyaWFscy5sZW5ndGh9KTwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICA8L2xpPmApO1xuICAgICAgICB0aGlzLiRtYXRlcmlhbHNHcm91cHMuYXBwZW5kKCRsaSk7XG4gICAgICAgIGNvbnN0ICRsaXN0ID0gJChgPHVsIGNsYXNzPVwibWF0ZXJpYWxzLWxpc3RcIiBkYXRhLWdyb3VwLXBhdGg9XCIke2dyb3VwLmZ1bGxQYXRofVwiPjwvdWw+YCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG5cbiAgICAgICAgbWF0ZXJpYWxzLmZvckVhY2gobWF0ZXJpYWwgPT4ge1xuICAgICAgICAgIGNvbnN0IG1hdGVyaWFsTmFtZSA9IG1hdGVyaWFsLm5hbWU7XG4gICAgICAgICAgY29uc3QgaTE4bk1hdGVyaWFsTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IHBvbHlnbG90LnQobWF0ZXJpYWxOYW1lKVxuICAgICAgICAgICAgOiBtYXRlcmlhbE5hbWU7XG4gICAgICAgICAgY29uc3QgJGl0ZW0gPSAkKGBcbjxsaT5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1hdGVyaWFscy1saXN0X19pdGVtXCIgZGF0YS1tYXRlcmlhbC1wYXRoPVwiJHttYXRlcmlhbC5mdWxsUGF0aH1cIj5cbiAgICAke2kxOG5NYXRlcmlhbE5hbWV9XG4gIDwvYT5cbjwvbGk+XG5gKTtcbiAgICAgICAgICBpdGVtcy5wdXNoKCRpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgICRsaXN0LmFwcGVuZChpdGVtcyk7XG4gICAgICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QucHVzaCgkbGlzdCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIC8qIGdsb2JhbCBkb2N1bWVudDogZmFsc2UgKi9cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcsIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICR0aGlzLnRvZ2dsZU1vZCgnYWN0aXZlJyk7XG4gICAgICBjb25zdCBncm91cFBhdGggPSAkdGhpcy5kYXRhKCdncm91cFBhdGgnKTtcbiAgICAgIGlmICgkdGhpcy5tb2QoJ2FjdGl2ZScpKSB7XG4gICAgICAgICQoJy5tYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAnKS5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcblxuICAgICAgICAkKCcubWF0ZXJpYWxzLWxpc3QnKS5lYWNoKGZ1bmN0aW9uIGl0KCkge1xuICAgICAgICAgIGNvbnN0ICRsaXN0ID0gJCh0aGlzKTtcbiAgICAgICAgICBpZiAoJGxpc3QubW9kKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgJGxpc3QubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkbGlzdC5kYXRhKCdncm91cFBhdGgnKSA9PT0gZ3JvdXBQYXRoKSB7XG4gICAgICAgICAgICAkbGlzdC5tb2QoJ2FjdGl2ZScsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHRoaXMubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICAgICAgdGhhdC4kbWF0ZXJpYWxzUGFuZS5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGF0J3MganVzdCBzZWNvbmQgY2xpY2sgb24gdGhlIHNhbWUgZ3JvdXBcbiAgICAgICAgdGhhdC4kbWF0ZXJpYWxzUGFuZS5oaWRlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWF0ZXJpYWxzLWxpc3RfX2l0ZW0nLCBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICBjb25zdCBQYWdlU3RydWN0dXJlRW52ID0gdGhhdC52aXN1YWxCdWlsZGVyLmVudmlyb25tZW50cy5nZXQoJ3BhZ2Utc3RydWN0dXJlJyk7XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkUmVnaW9uS2V5ID0gUGFnZVN0cnVjdHVyZUVudi5zZWxlY3RlZFJlZ2lvbktleTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRW50aXR5ID0gUGFnZVN0cnVjdHVyZUVudi5zZWxlY3RlZEVudGl0eTtcblxuICAgICAgaWYgKHNlbGVjdGVkUmVnaW9uS2V5ICE9PSBudWxsICYmIHNlbGVjdGVkRW50aXR5ICE9PSBudWxsKSB7XG4gICAgICAgIHRoYXQuc2VuZE1lc3NhZ2UoXG4gICAgICAgICAgJ25ld0Jsb2NrJyxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoJ21hdGVyaWFsUGF0aCcpLFxuICAgICAgICAgICAgc2VsZWN0ZWRFbnRpdHksXG4gICAgICAgICAgICBzZWxlY3RlZFJlZ2lvbktleSxcbiAgICAgICAgICBdXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICBzdXBlci5hY3RpdmF0ZSgpO1xuXG4gICAgdGhpcy4kZ3JvdXBzUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kZ3JvdXBzUGFuZS5hcHBlbmQodGhpcy4kbWF0ZXJpYWxzR3JvdXBzKTtcblxuICAgIHRoaXMuJG1hdGVyaWFsc1BhbmUgPSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3JlYXRlU3RhY2thYmxlUGFuZSgpO1xuICAgIHRoaXMuJG1hdGVyaWFsc1BhbmUuYXBwZW5kKHRoaXMuJG1hdGVyaWFsc0xpc3QpO1xuICAgIHRoaXMuJG1hdGVyaWFsc1BhbmUuaGlkZSgpO1xuXG4gICAgLypcbiAgICBjb25zdCBQYWdlU3RydWN0dXJlRW52ID0gdGhhdC52aXN1YWxCdWlsZGVyLmVudmlyb25tZW50cy5nZXQoJ3BhZ2Utc3RydWN0dXJlJyk7XG5cbiAgICBjb25zdCBzZWxlY3RlZFJlZ2lvbktleSA9IFBhZ2VTdHJ1Y3R1cmVFbnYuc2VsZWN0ZWRSZWdpb25LZXk7XG4gICAgY29uc3Qgc2VsZWN0ZWRFbnRpdHkgPSBQYWdlU3RydWN0dXJlRW52LnNlbGVjdGVkRW50aXR5O1xuXG4gICAgQHRvZG8gY2hlY2sgZm9yIHNlbGVjdGVkUmVnaW9uIGlmIG5vdCAtIHdlIG11c3Qgbm90IGFkZCBibG9jayBoZXJlXG4gICAgKi9cblxuICAgICQoJy5tYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAnKS5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTWF0ZXJpYWxzRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5pbXBvcnQgTWF0ZXJpYWxDb250cm9scyBmcm9tICcuLy4uL1BhZ2VTdHJ1Y3R1cmUvTWF0ZXJpYWxDb250cm9scyc7XG5pbXBvcnQgUGFnZUl0ZXJhdG9yIGZyb20gJy4vLi4vUGFnZVN0cnVjdHVyZS9QYWdlSXRlcmF0b3InO1xuXG5jbGFzcyBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2aXN1YWxCdWlsZGVyLCBuYW1lKSB7XG4gICAgc3VwZXIodmlzdWFsQnVpbGRlciwgbmFtZSk7XG4gICAgdGhpcy5pbml0UGFnZVN0cnVjdHVyZUVsZW1lbnQoKTtcbiAgICB0aGlzLnNlbGVjdGVkUmVnaW9uS2V5ID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gbnVsbDtcbiAgfVxuXG4gIGluaXRQYWdlU3RydWN0dXJlRWxlbWVudCgpIHtcbiAgICB0aGlzLiRoZWFkZXIgPSAkKCc8ZGl2IGNsYXNzPVwibW9uc3Rlci1zdGFja2FibGUtY29udGFpbmVyX19wYW5lLWhlYWRlclwiPlBhZ2Ugc3RydWN0dXJlPC9kaXY+Jyk7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZSA9ICQoJzxkaXYgY2xhc3M9XCJwYWdlLXN0cnVjdHVyZVwiPjwvZGl2PicpO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgc3VwZXIuYWN0aXZhdGUoKTtcblxuICAgIHRoaXMuJHN0cnVjdHVyZVBhbmUgPSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3JlYXRlU3RhY2thYmxlUGFuZSgpO1xuICAgIHRoaXMuJHN0cnVjdHVyZVBhbmUuYXBwZW5kKHRoaXMuJGhlYWRlcik7XG4gICAgdGhpcy4kc3RydWN0dXJlUGFuZS5hcHBlbmQodGhpcy4kcGFnZVN0cnVjdHVyZSk7XG4gIH1cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlLmRldGFjaCgpO1xuICAgIHRoaXMuJGhlYWRlci5kZXRhY2goKTtcbiAgICBzdXBlci5kZWFjdGl2YXRlKCk7XG4gIH1cblxuICBwYWdlQ2hhbmdlZCgpIHtcbiAgICBzdXBlci5wYWdlQ2hhbmdlZCgpO1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUuanN0cmVlKCdkZXN0cm95Jyk7XG4gICAgY29uc3QgbGF5b3V0ID0gdGhpcy50YXJnZXQuTU9OU1RFUl9FRElUX01PREVfREFUQS5sYXlvdXQ7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLnRhcmdldC5NT05TVEVSX0VESVRfTU9ERV9EQVRBLnRlbXBsYXRlO1xuXG4gICAgY29uc3QgbGF5b3V0SXRlbSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6ICdsYXlvdXQnLFxuICAgICAgICB0ZW1wbGF0ZUlkOiBsYXlvdXQuaWQsXG4gICAgICB9LFxuICAgICAgdGV4dDogYExheW91dCAtICR7bGF5b3V0LmtleX0gIyR7bGF5b3V0LmlkfWAsXG4gICAgICBpY29uOiAnZmEgZmEtY29sdW1ucycsXG4gICAgICBzdGF0ZToge1xuICAgICAgICBvcGVuZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH07XG4gICAgY29uc3QgdGVtcGxhdGVJdGVtID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBpZDogJ3RlbXBsYXRlJyxcbiAgICAgICAgdGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICB9LFxuICAgICAgdGV4dDogYFRlbXBsYXRlIC0gJHt0ZW1wbGF0ZS5rZXl9ICMke3RlbXBsYXRlLmlkfWAsXG4gICAgICBpY29uOiAnZmEgZmEtdGgnLFxuICAgICAgc3RhdGU6IHtcbiAgICAgICAgb3BlbmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICB9O1xuXG4gICAgY29uc3QgJGxheW91dFJlZ2lvbnMgPSB0aGlzLnRhcmdldCQoJy5tLW1vbnN0ZXItY29udGVudF9fbGF5b3V0Jyk7XG5cbiAgICAkbGF5b3V0UmVnaW9ucy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBQYWdlSXRlcmF0b3IucHJvY2Vzc0xheW91dCgkKHRoaXMpKTtcbiAgICAgIGxheW91dEl0ZW0uY2hpbGRyZW4ucHVzaChyZXN1bHQuaXRlbSk7XG4gICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcbiAgICAgICAgdGVtcGxhdGVJdGVtLmNoaWxkcmVuLnB1c2gocmVnaW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5wYWdlU3RydWN0dXJlID0gW1xuICAgICAgbGF5b3V0SXRlbSxcbiAgICAgIHRlbXBsYXRlSXRlbSxcbiAgICBdO1xuXG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5qc3RyZWUoe1xuICAgICAgY29yZToge1xuICAgICAgICBjaGVja19jYWxsYmFjazogKG9wZXJhdGlvbiwgbm9kZSwgbm9kZV9wYXJlbnQvKiwgbm9kZV9wb3NpdGlvbiwgbW9yZSovKSA9PiB7XG4gICAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJ21vdmVfbm9kZScpIHtcbiAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdtYXRlcmlhbCcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5vZGVfcGFyZW50LnR5cGUgPT09ICd0ZW1wbGF0ZVJlZ2lvbicgfHwgbm9kZV9wYXJlbnQudHlwZSA9PT0gJ2NvbnRlbnRUZW1wbGF0ZVJlZ2lvbic7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gJ3RlbXBsYXRlUmVnaW9uJyB8fCBub2RlLnR5cGUgPT09ICdjb250ZW50VGVtcGxhdGVSZWdpb24nKSB7XG4gICAgICAgICAgICAgIHJldHVybiBub2RlX3BhcmVudC50eXBlID09PSAnZGVmYXVsdCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB0aGlzLnBhZ2VTdHJ1Y3R1cmUsXG4gICAgICAgIHRoZW1lczoge1xuICAgICAgICAgIG5hbWU6ICdkZWZhdWx0LWRhcmsnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgJ3R5cGVzJyxcbiAgICAgICAgJ3dob2xlcm93JyxcbiAgICAgICAgJ2RuZCcsXG4gICAgICBdLFxuICAgICAgZG5kOiB7XG4gICAgICAgIG9wZW5fdGltZW91dDogMjAwLFxuICAgICAgICBsYXJnZV9kcm9wX3RhcmdldDogdHJ1ZSxcbiAgICAgICAgbGFyZ2VfZHJhZ190YXJnZXQ6IHRydWUsXG4gICAgICAgIGNoZWNrX3doaWxlX2RyYWdnaW5nOiB0cnVlLFxuICAgICAgICBjb3B5OiBmYWxzZSxcbiAgICAgICAgaXNfZHJhZ2dhYmxlOiBmdW5jdGlvbihub2Rlcykge1xuICAgICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1swXSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbm9kZS50eXBlID09PSAnbWF0ZXJpYWwnXG4gICAgICAgICAgICB8fCBub2RlLnR5cGUgPT09ICdjb250ZW50VGVtcGxhdGVSZWdpb24nXG4gICAgICAgICAgICB8fCBub2RlLnR5cGUgPT09ICd0ZW1wbGF0ZVJlZ2lvbic7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0eXBlczoge1xuICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtY29sdW1ucycsXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgaWNvbjogJ2ZhIGZhLXRoJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVSZWdpb246IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtZm9sZGVyLW8nLFxuICAgICAgICB9LFxuICAgICAgICBjb250ZW50VGVtcGxhdGVSZWdpb246IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtZm9sZGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWF0ZXJpYWw6IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtcHV6emxlLXBpZWNlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLmpzdHJlZU9iaiA9IHRoaXMuJHBhZ2VTdHJ1Y3R1cmUuanN0cmVlKCk7XG5cbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlXG4gICAgICAub24oJ2xvYWRlZC5qc3RyZWUnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFnZVN0cnVjdHVyZUpzb24oKTtcblxuICAgICAgICBsZXQgaXNDb250ZW50UmVnaW9uRm91bmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYWdlU3RydWN0dXJlWzFdLmNoaWxkcmVuLmZvckVhY2goKHJlZ2lvbikgPT4ge1xuICAgICAgICAgIGlmIChyZWdpb24uZGF0YS5lbnRpdHlEZXBlbmRlbnQgJiYgaXNDb250ZW50UmVnaW9uRm91bmQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpc0NvbnRlbnRSZWdpb25Gb3VuZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmpzdHJlZU9iai5zZWxlY3Rfbm9kZShyZWdpb24uaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KVxuXG4gICAgICAub24oJ21vdmVfbm9kZS5qc3RyZWUnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFnZVN0cnVjdHVyZUpzb24oKTtcbiAgICAgICAgdGhpcy50YXJnZXQuRnJvbnRlbmRNb25zdGVyLlZpc3VhbEZyYW1lLnByZXZpZXcoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcblxuICAgIHRoaXMuY29udHJvbEJ1dHRvbnMgPSB7XG4gICAgICBtYXRlcmlhbDogbmV3IE1hdGVyaWFsQ29udHJvbHModGhpcyksXG5cbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29udHJvbEJ1dHRvbnMpO1xuXG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5vbignc2VsZWN0X25vZGUuanN0cmVlJywgKGUsIG9iaikgPT4ge1xuXG4gICAgICBjb25zdCB0eXBlID0gb2JqLm5vZGUudHlwZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRFbnRpdHkgPSBvYmoubm9kZS5kYXRhLmVudGl0eVR5cGUgfHwgbnVsbDtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtYXRlcmlhbCc6XG4gICAgICAgICAgY29uc3QgJGFuY2hvciA9ICQoYCMke29iai5ub2RlLmlkfWApO1xuICAgICAgICAgICRhbmNob3IucHJlcGVuZCh0aGlzLmNvbnRyb2xCdXR0b25zW3R5cGVdLmNvbnRyb2xCdXR0b25zKTtcbiAgICAgICAgICB0aGlzLnNlbGVjdE1hdGVyaWFsKG9iai5ub2RlLmRhdGEubWF0ZXJpYWxJbmRleCk7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJlZ2lvbktleSA9IG9iai5ub2RlLmRhdGEucmVnaW9uS2V5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0ZW1wbGF0ZVJlZ2lvbic6XG4gICAgICAgIGNhc2UgJ2NvbnRlbnRUZW1wbGF0ZVJlZ2lvbic6XG4gICAgICAgICAgdGhpcy50YXJnZXQkLnNtb290aFNjcm9sbCh7XG4gICAgICAgICAgICBzY3JvbGxUYXJnZXQ6IHRoaXMudGFyZ2V0JChgW2RhdGEtcmVnaW9uLWtleT1cIiR7b2JqLm5vZGUuZGF0YS5yZWdpb25LZXl9XCJdYCksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJlZ2lvbktleSA9IG9iai5ub2RlLmRhdGEucmVnaW9uS2V5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSZWdpb25LZXkgPSBudWxsO1xuICAgICAgICAgIGNvbnNvbGUubG9nKG9iai5ub2RlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdE1hdGVyaWFsKGluZGV4KSB7XG4gICAgY29uc3QgJHRhcmdldE1hdGVyaWFsID0gdGhpcy50YXJnZXQkKGBbZGF0YS1tYXRlcmlhbC1pbmRleD1cIiR7aW5kZXh9XCJdYCk7XG4gICAgJCgnLm0tbW9uc3Rlci1tYXRlcmlhbF9zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdtLW1vbnN0ZXItbWF0ZXJpYWxfc2VsZWN0ZWQnKTtcbiAgICB0aGlzLnRhcmdldCQuc21vb3RoU2Nyb2xsKHtcbiAgICAgIHNjcm9sbFRhcmdldDogJHRhcmdldE1hdGVyaWFsLFxuICAgIH0pO1xuICAgIC8vIHJlc3RhcnQgYW5pbWF0aW9uIG1hZ2ljLiBzZWUgaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9yZXN0YXJ0LWNzcy1hbmltYXRpb24vXG4gICAgJHRhcmdldE1hdGVyaWFsXG4gICAgICAucmVtb3ZlQ2xhc3MoJ20tbW9uc3Rlci1tYXRlcmlhbF9zZWxlY3RlZCcpO1xuXG4gICAgdm9pZCAkdGFyZ2V0TWF0ZXJpYWxbMF0ub2Zmc2V0V2lkdGg7XG5cbiAgICAkdGFyZ2V0TWF0ZXJpYWxcbiAgICAgIC5hZGRDbGFzcygnbS1tb25zdGVyLW1hdGVyaWFsX3NlbGVjdGVkJyk7XG4gIH1cblxuICB1cGRhdGVQYWdlU3RydWN0dXJlSnNvbigpIHtcbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uID0gdGhpcy5qc3RyZWVPYmouZ2V0X2pzb24odGhpcy4kcGFnZVN0cnVjdHVyZSwge1xuICAgICAgbm9fc3RhdGU6IHRydWUsXG4gICAgICBub19pZDogdHJ1ZSxcbiAgICAgIG5vX2xpX2F0dHI6IHRydWUsXG4gICAgICBub19hX2F0dHI6IHRydWUsXG4gICAgfSk7XG4gICAgdGhpcy50YXJnZXQuRnJvbnRlbmRNb25zdGVyLlZpc3VhbEZyYW1lLnBhZ2VTdHJ1Y3R1cmVKc29uID0gdGhpcy5wYWdlU3RydWN0dXJlSnNvbjtcbiAgfVxuXG5cblxuXG5cbn1cbmV4cG9ydCBkZWZhdWx0IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1bmlxaWQgKHByZWZpeCwgbW9yZUVudHJvcHkpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC91bmlxaWQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgcmV2aXNlZCBieTogS2Fua3JlbHVuZSAoaHR0cDovL3d3dy53ZWJmYWt0b3J5LmluZm8vKVxuICAvLyAgICAgIG5vdGUgMTogVXNlcyBhbiBpbnRlcm5hbCBjb3VudGVyIChpbiBsb2N1dHVzIGdsb2JhbCkgdG8gYXZvaWQgY29sbGlzaW9uXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJGlkID0gdW5pcWlkKClcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gMTNcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IHZhciAkaWQgPSB1bmlxaWQoJ2ZvbycpXG4gIC8vICAgZXhhbXBsZSAyOiB2YXIgJHJlc3VsdCA9ICRpZC5sZW5ndGggPT09ICgxMyArICdmb28nLmxlbmd0aClcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcbiAgLy8gICBleGFtcGxlIDM6IHZhciAkaWQgPSB1bmlxaWQoJ2JhcicsIHRydWUpXG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgJHJlc3VsdCA9ICRpZC5sZW5ndGggPT09ICgyMyArICdiYXInLmxlbmd0aClcbiAgLy8gICByZXR1cm5zIDM6IHRydWVcblxuICBpZiAodHlwZW9mIHByZWZpeCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwcmVmaXggPSAnJ1xuICB9XG5cbiAgdmFyIHJldElkXG4gIHZhciBfZm9ybWF0U2VlZCA9IGZ1bmN0aW9uIChzZWVkLCByZXFXaWR0aCkge1xuICAgIHNlZWQgPSBwYXJzZUludChzZWVkLCAxMCkudG9TdHJpbmcoMTYpIC8vIHRvIGhleCBzdHJcbiAgICBpZiAocmVxV2lkdGggPCBzZWVkLmxlbmd0aCkge1xuICAgICAgLy8gc28gbG9uZyB3ZSBzcGxpdFxuICAgICAgcmV0dXJuIHNlZWQuc2xpY2Uoc2VlZC5sZW5ndGggLSByZXFXaWR0aClcbiAgICB9XG4gICAgaWYgKHJlcVdpZHRoID4gc2VlZC5sZW5ndGgpIHtcbiAgICAgIC8vIHNvIHNob3J0IHdlIHBhZFxuICAgICAgcmV0dXJuIEFycmF5KDEgKyAocmVxV2lkdGggLSBzZWVkLmxlbmd0aCkpLmpvaW4oJzAnKSArIHNlZWRcbiAgICB9XG4gICAgcmV0dXJuIHNlZWRcbiAgfVxuXG4gIHZhciAkZ2xvYmFsID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogR0xPQkFMKVxuICAkZ2xvYmFsLiRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cyB8fCB7fVxuICB2YXIgJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzXG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fVxuXG4gIGlmICghJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQpIHtcbiAgICAvLyBpbml0IHNlZWQgd2l0aCBiaWcgcmFuZG9tIGludFxuICAgICRsb2N1dHVzLnBocC51bmlxaWRTZWVkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMHg3NWJjZDE1KVxuICB9XG4gICRsb2N1dHVzLnBocC51bmlxaWRTZWVkKytcblxuICAvLyBzdGFydCB3aXRoIHByZWZpeCwgYWRkIGN1cnJlbnQgbWlsbGlzZWNvbmRzIGhleCBzdHJpbmdcbiAgcmV0SWQgPSBwcmVmaXhcbiAgcmV0SWQgKz0gX2Zvcm1hdFNlZWQocGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwLCAxMCksIDgpXG4gIC8vIGFkZCBzZWVkIGhleCBzdHJpbmdcbiAgcmV0SWQgKz0gX2Zvcm1hdFNlZWQoJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQsIDUpXG4gIGlmIChtb3JlRW50cm9weSkge1xuICAgIC8vIGZvciBtb3JlIGVudHJvcHkgd2UgYWRkIGEgZmxvYXQgbG93ZXIgdG8gMTBcbiAgICByZXRJZCArPSAoTWF0aC5yYW5kb20oKSAqIDEwKS50b0ZpeGVkKDgpLnRvU3RyaW5nKClcbiAgfVxuXG4gIHJldHVybiByZXRJZFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzXG4gKiovIiwiY2xhc3MgRGF0YVByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IoY2xhc3NOYW1lLCBwcm92aWRlZEtleXMpIHtcbiAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB0aGlzLnByb3ZpZGVkS2V5cyA9IHByb3ZpZGVkS2V5cztcbiAgICB0aGlzLmFzc29jaWF0aW9ucyA9IHt9O1xuICAgIHRoaXMuYXNzb2NpYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge0VkaXRhYmxlfVxuICAgKi9cbiAgc3RhdGljIGdldCBlZGl0YWJsZSgpIHtcbiAgICByZXR1cm4gd2luZG93LkZyb250ZW5kTW9uc3Rlci5WaXN1YWxGcmFtZS5lZGl0YWJsZTtcbiAgfVxuXG4gIGFzc29jaWF0ZSgpIHtcbiAgICB0aGlzLmFzc29jaWF0aW9ucyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMucHJvdmlkZWRLZXlzKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICBjb25zdCByZWdpb24gPSB0aGlzLnByb3ZpZGVkS2V5c1tyZWdpb25LZXldO1xuICAgICAgY29uc3QgJHJlZ2lvbiA9ICQoYFtkYXRhLXJlZ2lvbi1rZXk9XCIke3JlZ2lvbktleX1cIl1gKS5maXJzdCgpO1xuICAgICAgLy8gY29uc29sZS5sb2coYCVjUmVnaW9uOiAke3JlZ2lvbktleX1gLCAnY29sb3I6IHJlZDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGJhY2tncm91bmQ6ICMzMzMnKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlZ2lvbik7XG4gICAgICBjb25zdCBtYXRlcmlhbHMgPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKHJlZ2lvbikuZm9yRWFjaChtYXRlcmlhbEtleSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFLZXlzID0gcmVnaW9uW21hdGVyaWFsS2V5XTtcbiAgICAgICAgY29uc3QgJG1hdGVyaWFsID0gJHJlZ2lvbi5maW5kKGBbZGF0YS1tYXRlcmlhbC1pbmRleD1cIiR7bWF0ZXJpYWxLZXl9XCJdYCkuZmlyc3QoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCVjTWF0ZXJpYWw6ICR7bWF0ZXJpYWxLZXl9YCwgJ2NvbG9yOiAjZmZmOyBmb250LXdlaWdodDogYm9sZDsgYmFja2dyb3VuZDogIzY5ZicpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygkbWF0ZXJpYWwpO1xuICAgICAgICBpZiAoJG1hdGVyaWFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBtYXRlcmlhbHNbbWF0ZXJpYWxLZXldID0ge1xuICAgICAgICAgIGRhdGFLZXlzLFxuICAgICAgICAgICRtYXRlcmlhbCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxFZGl0YWJsZUtleXMgPSAkbWF0ZXJpYWwuZGF0YSgnZWRpdGFibGVLZXlzJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZU1hdGVyaWFsRWRpdChtYXRlcmlhbEVkaXRhYmxlS2V5cywgJG1hdGVyaWFsLCBkYXRhS2V5cyk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYXNzb2NpYXRpb25zW3JlZ2lvbktleV0gPSB7XG4gICAgICAgICRyZWdpb24sXG4gICAgICAgIG1hdGVyaWFscyxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXplTWF0ZXJpYWxFZGl0KG1hdGVyaWFsRWRpdGFibGVLZXlzLCAkcm9vdCwgZGF0YUtleXMsIHByZWZpeCA9ICcnKSB7XG4gICAgZGF0YUtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3Qgb2JqID0gbWF0ZXJpYWxFZGl0YWJsZUtleXNba2V5XSB8fCAnTk9fU1VDSF9LRVknO1xuICAgICAgaWYgKG9iaiA9PT0gJ05PX1NVQ0hfS0VZJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob2JqID09PSBPYmplY3Qob2JqKSkge1xuICAgICAgICAvLyBpdCdzIHJlY3Vyc2l2ZVxuICAgICAgICAvLyBmaXJzdCAtIGZpbmQgYWxsIGJsb2Nrc1xuICAgICAgICBjb25zdCAkYmxvY2tzID0gJHJvb3QuZmluZChgW2RhdGEtcmVjdXJzaXZlLWl0ZW09XCIke2tleX1cIl1gKTtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgJGJsb2Nrcy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAlYyBSZWN1cnNpdmUgaXRlbSAke2tleX0gIyR7Y291bnRlcn1gLCAnYmFja2dyb3VuZDogIzIyMjsgY29sb3I6ICNiYWRhNTUnKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgICAgICB0aGF0LmluaXRpYWxpemVNYXRlcmlhbEVkaXQob2JqLCAkdGhpcywgT2JqZWN0LmtleXMob2JqKSwgJ2l0ZW0uJyk7XG4gICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGl0J3MgcGxhaW4gZmllbGRcbiAgICAgICAgY29uc3QgJG5vZGUgPSAkcm9vdC5maW5kKGBbZGF0YS1lZGl0YWJsZS1rZXk9XCIke3ByZWZpeH0ke2tleX1cIl1gKS5maXJzdCgpO1xuICAgICAgICBpZiAoJG5vZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIERhdGFQcm92aWRlci5lZGl0YWJsZS5pbml0aWFsaXplRWRpdGFibGUoJG5vZGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgJWMgUGxhaW4gZmllbGQgZWRpdGFibGUgJHtwcmVmaXh9JHtrZXl9YCwgJ2JhY2tncm91bmQ6ICMyMjI7IGNvbG9yOiAjYmFkYTU1Jyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCRub2RlWzBdLm91dGVySFRNTCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIHNlcmlhbGl6ZUtleXMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5hc3NvY2lhdGlvbnMpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMuYXNzb2NpYXRpb25zW3JlZ2lvbktleV07XG4gICAgICBjb25zdCAkcmVnaW9uID0gcmVnaW9uLiRyZWdpb247XG4gICAgICByZXN1bHRbcmVnaW9uS2V5XSA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMocmVnaW9uLm1hdGVyaWFscykuZm9yRWFjaChtYXRlcmlhbEtleSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFLZXlzID0gcmVnaW9uLm1hdGVyaWFsc1ttYXRlcmlhbEtleV0uZGF0YUtleXM7XG4gICAgICAgIGNvbnN0ICRtYXRlcmlhbCA9IHJlZ2lvbi5tYXRlcmlhbHNbbWF0ZXJpYWxLZXldLiRtYXRlcmlhbDtcbiAgICAgICAgcmVzdWx0W3JlZ2lvbktleV1bbWF0ZXJpYWxLZXldID0gdGhpcy5zZXJpYWxpemVNYXRlcmlhbChcbiAgICAgICAgICByZWdpb25LZXksXG4gICAgICAgICAgbWF0ZXJpYWxLZXksXG4gICAgICAgICAgZGF0YUtleXMsXG4gICAgICAgICAgJHJlZ2lvbixcbiAgICAgICAgICAkbWF0ZXJpYWxcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzTmFtZSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmZpbGxDb25maWcoZGF0YSk7XG4gIH1cblxuICBmaWxsQ29uZmlnKGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHNlcmlhbGl6ZU1hdGVyaWFsKHJlZ2lvbktleSwgbWF0ZXJpYWxLZXksIGRhdGFLZXlzLCAkcmVnaW9uLCAkbWF0ZXJpYWwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhUHJvdmlkZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXIuanNcbiAqKi8iLCJpbXBvcnQgU3RhdGljQ29udGVudCBmcm9tICcuL3Byb3ZpZGVycy9TdGF0aWNDb250ZW50JztcblxuY2xhc3MgRGF0YVByb3ZpZGVyRmFjdG9yeSB7XG4gIHN0YXRpYyBmYWN0b3J5KHByb3ZpZGVyRGVjbCwgcHJvdmlkZWRLZXlzKSB7XG4gICAgbGV0IHByb3ZpZGVyID0gbnVsbDtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBwcm92aWRlckRlY2wuY2xhc3NOYW1lXG4gICAgICB8fCAnRG90UGxhbnRcXFxcTW9uc3RlclxcXFxEYXRhRW50aXR5XFxcXFN0YXRpY0NvbnRlbnRQcm92aWRlcic7XG4gICAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAgIGNhc2UgJ0RvdFBsYW50XFxcXE1vbnN0ZXJcXFxcRGF0YUVudGl0eVxcXFxTdGF0aWNDb250ZW50UHJvdmlkZXInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcHJvdmlkZXIgPSBuZXcgU3RhdGljQ29udGVudChwcm92aWRlZEtleXMpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvdmlkZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YVByb3ZpZGVyRmFjdG9yeTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlckZhY3RvcnkuanNcbiAqKi8iLCJpbXBvcnQgYWxsRWRpdGFibGVzIGZyb20gJy4vZWRpdGFibGVzL2FsbCc7XG5cbmNsYXNzIEVkaXRhYmxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lZGl0YWJsZXNCeVR5cGUgPSB7fTtcbiAgICAvLyBpbml0aWFsaXplIGJhc2UgYnVpbGQtaW4gZWRpdGFibGVzXG4gICAgYWxsRWRpdGFibGVzKCk7XG4gICAgdGhpcy5lZGl0YWJsZXNCeVR5cGUgPSB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVM7XG4gIH1cblxuICBzZXJpYWxpemVFZGl0YWJsZSgkbm9kZSkge1xuICAgIGNvbnN0IGVkaXRhYmxlID0gJG5vZGUuZGF0YSgnZWRpdGFibGVQYXJhbXMnKTtcbiAgICBpZiAodHlwZW9mKGVkaXRhYmxlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHR5cGUgPSBlZGl0YWJsZS5oYXNPd25Qcm9wZXJ0eSgndHlwZScpID8gZWRpdGFibGUudHlwZSA6ICdzdHJpbmcnO1xuICAgIGlmICh0aGlzLmVkaXRhYmxlc0J5VHlwZS5oYXNPd25Qcm9wZXJ0eSh0eXBlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHR5cGUgPSAnc3RyaW5nJztcbiAgICB9XG5cbiAgICBjb25zdCBleHBvcnRWYXJpYWJsZSA9IGVkaXRhYmxlLmhhc093blByb3BlcnR5KCd0YXJnZXQnKSA/IGVkaXRhYmxlLnRhcmdldCA6ICdkYXRhJztcblxuICAgIHJldHVybiB0aGlzLmVkaXRhYmxlc0J5VHlwZVt0eXBlXS5zZXJpYWxpemVOb2RlKCRub2RlLCBleHBvcnRWYXJpYWJsZSk7XG4gIH1cblxuICBpbml0aWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBjb25zdCB0eXBlID0gJG5vZGUuZGF0YSgnZWRpdGFibGUtdHlwZScpIHx8ICd1bmVkaXRhYmxlJztcbiAgICBpZiAodHlwZSA9PT0gJ3VuZWRpdGFibGUnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0YWJsZSA9IHRoaXMuZWRpdGFibGVzQnlUeXBlW3R5cGVdIHx8IHRoaXMuZWRpdGFibGVzQnlUeXBlLnN0cmluZztcbiAgICByZXR1cm4gZWRpdGFibGUuaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0YWJsZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0VkaXRhYmxlLmpzXG4gKiovIiwiY2xhc3MgSGFzaEFwaSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZnVuY3Rpb25DYWxscyA9IHt9O1xuXG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBkb2N1bWVudC5sb2NhdGlvbi5oYXNoLm1hdGNoKC8jaGFzaEFwaTooLio/KTpcXC9oYXNoQXBpLyk7XG4gICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBjb25zdCBmdW5jdGlvbkNhbGxzID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQobWF0Y2hlc1sxXSkpO1xuXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBmdW5jdGlvbkNhbGxzKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uZnVuYykge1xuICAgICAgICAgICAgdGhpcy5mdW5jdGlvbkNhbGxzW2l0ZW0uZnVuY10gPSBpdGVtLmFyZ3MgfHwge307XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2hvdWxkQ2FsbChmdW5jKSB7XG4gICAgcmV0dXJuIHRoaXMuZnVuY3Rpb25DYWxsc1tmdW5jXSB8fCBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIYXNoQXBpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvSGFzaEFwaS5qc1xuICoqLyIsImltcG9ydCBGcmFtZUFwaSBmcm9tICcuL0ZyYW1lQXBpJztcbmltcG9ydCB1bmlxdWVJZCBmcm9tICcuLy4uL3VuaXFpZCc7XG5pbXBvcnQgRGF0YVByb3ZpZGVyRmFjdG9yeSBmcm9tICcuL0RhdGFQcm92aWRlckZhY3RvcnknO1xuaW1wb3J0IEVkaXRhYmxlIGZyb20gJy4vRWRpdGFibGUnO1xuXG5jbGFzcyBWaXN1YWxGcmFtZVxue1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtcygpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICBGcmFtZUFwaS5iaW5kTWVzc2FnZUxpc3RlbmVyKHRoaXMpO1xuICAgIHRoaXMucGFnZVN0cnVjdHVyZUpzb25EYXRhID0gbnVsbDtcbiAgICAvKiBnbG9iYWwgd2luZG93OmZhbHNlICovXG4gICAgdGhpcy5wYXJlbnRXaW5kb3cgPSB3aW5kb3cucGFyZW50O1xuICAgIC8qKiBAdmFyIEZyb250ZW5kTW9uc3RlciAqL1xuICAgIHRoaXMucGFyZW50TW9uc3RlciA9IHRoaXMucGFyZW50V2luZG93LkZyb250ZW5kTW9uc3RlcjtcbiAgICB0aGlzLnBhcmVudEJ1aWxkZXIgPSB0aGlzLnBhcmVudE1vbnN0ZXIuYnVpbGRlcjtcbiAgICB0aGlzLmN1cnJlbnRNb25zdGVyQ29udGVudCA9IGZhbHNlO1xuICAgIHRoaXMuZWRpdGFibGUgPSBuZXcgRWRpdGFibGUoKTtcbiAgICAvLyB0aGlzLm1ha2VJdE1vdmUoKTtcbiAgICAkKHdpbmRvdykucmVzaXplKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlSGFuZGxlcnMoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgICQoKCkgPT4ge1xuICAgICAgdGhpcy5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgICB0aGlzLmluaXRQcm92aWRlcnMoKTtcbiAgICB9KTtcbiAgICB0aGlzLk1vbnN0ZXJFZGl0RGF0YSA9IHdpbmRvdy5NT05TVEVSX0VESVRfTU9ERV9EQVRBO1xuICB9XG5cbiAgaW5pdFByb3ZpZGVycygpIHtcbiAgICB0aGlzLnByb3ZpZGVycyA9IHtcbiAgICAgIGxheW91dDogdGhpcy5nZXRQcm92aWRlcnModGhpcy5Nb25zdGVyRWRpdERhdGEubGF5b3V0KSxcbiAgICAgIHRlbXBsYXRlOiB0aGlzLmdldFByb3ZpZGVycyh0aGlzLk1vbnN0ZXJFZGl0RGF0YS50ZW1wbGF0ZSksXG4gICAgICBlbnRpdHk6IHRoaXMuZ2V0UHJvdmlkZXJzKHRoaXMuTW9uc3RlckVkaXREYXRhLmVudGl0eSksXG4gICAgfTtcbiAgfVxuXG4gIHNldCBwYWdlU3RydWN0dXJlSnNvbih2YWx1ZSkge1xuICAgIHRoaXMucGFnZVN0cnVjdHVyZUpzb25EYXRhID0gdmFsdWU7XG4gIH1cblxuICBnZXQgcGFnZVN0cnVjdHVyZUpzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFnZVN0cnVjdHVyZUpzb25EYXRhO1xuICB9XG5cbiAgZ2V0UHJvdmlkZXJzKGFycikge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGFyci5wcm92aWRlcnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IHByb3ZpZGVyRGVjbCA9IGFyci5wcm92aWRlcnNba2V5XTtcbiAgICAgIHJlc3VsdFtrZXldID0gRGF0YVByb3ZpZGVyRmFjdG9yeS5mYWN0b3J5KFxuICAgICAgICBwcm92aWRlckRlY2wsXG4gICAgICAgIGFyci5wcm92aWRlZEtleXNba2V5XSB8fCB7fVxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0ICRtb25zdGVyQ29udGVudCgpIHtcbiAgICBpZiAodGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZSkge1xuICAgICAgcmV0dXJuIHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGU7XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaE1vbnN0ZXJDb250ZW50Q2FjaGUoKTtcbiAgICByZXR1cm4gdGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZTtcbiAgfVxuXG4gIHJlZnJlc2hNb25zdGVyQ29udGVudENhY2hlKCkge1xuICAgIHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGUgPSB7fTtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAkKHRoaXMuc2V0dGluZ3NbJ21vbnN0ZXItY29udGVudC1zZWxlY3RvciddKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBpZiAoIXRoYXQuY3VycmVudE1vbnN0ZXJDb250ZW50KSB7XG4gICAgICAgIHRoYXQuY3VycmVudE1vbnN0ZXJDb250ZW50ID0gJCh0aGlzKS5kYXRhKCd1bmlxdWVDb250ZW50SWQnKTtcbiAgICAgIH1cbiAgICAgIHRoYXQuJG1vbnN0ZXJDb250ZW50Q2FjaGVbJCh0aGlzKS5kYXRhKCd1bmlxdWVDb250ZW50SWQnKV0gPSAkKHRoaXMpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlSGFuZGxlcnMoKSB7XG4gICAgaWYgKHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwgJiYgdGhpcy4kaGFuZGxlcnMpIHtcbiAgICAgIHRoaXMuJGhhbmRsZXJzLmNzcyhcbiAgICAgICAgJ3RvcCcsXG4gICAgICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwucG9zaXRpb24oKS50b3BcbiAgICAgICAgICArIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwuaGVpZ2h0KClcbiAgICAgICAgICAtIHRoaXMuJGhhbmRsZXJzLmhlaWdodCgpXG4gICAgICApO1xuICAgICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5tb2QoJ2FjdGl2ZScsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdE1hdGVyaWFsKCRtYXRlcmlhbCkge1xuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsID09PSAkbWF0ZXJpYWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgfVxuICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwgPSAkbWF0ZXJpYWw7XG4gICAgdGhpcy51cGRhdGVIYW5kbGVycygpO1xuICAgIHRoaXMuJGhhbmRsZXJzLnNob3coKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZUNvbnRlbnQoY2FsbGJhY2spIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBPYmplY3Qua2V5cyh0aGlzLiRtb25zdGVyQ29udGVudCkuZm9yRWFjaCh1bmlxdWVDb250ZW50SWQgPT4ge1xuICAgICAgY29uc3QgJG1vbnN0ZXIgPSB0aGlzLiRtb25zdGVyQ29udGVudFt1bmlxdWVDb250ZW50SWRdO1xuICAgICAgcmVzdWx0WyRtb25zdGVyLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpXSA9IHRoYXQuc2VyaWFsaXplVW5pcXVlQ29udGVudCgkbW9uc3Rlcik7XG4gICAgfSk7XG4gICAgdGhpcy5zZW5kVG9CdWlsZGVyKGNhbGxiYWNrLCBbcmVzdWx0XSk7XG4gIH1cblxuICBzZXJpYWxpemVVbmlxdWVDb250ZW50KCRtb25zdGVyQ29udGVudCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIHJlc3VsdC51bmlxdWVDb250ZW50SWQgPSAkbW9uc3RlckNvbnRlbnQuZGF0YSgndW5pcXVlQ29udGVudElkJyk7XG4gICAgcmVzdWx0Lm1hdGVyaWFscyA9IHt9O1xuICAgICRtb25zdGVyQ29udGVudC5maW5kKCdbZGF0YS1pcy1tYXRlcmlhbD1cXCcxXFwnXScpLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0IG1hdGVyaWFsID0ge307XG4gICAgICBtYXRlcmlhbC5ibG9jayA9ICQodGhpcykuZGF0YSgnbWF0ZXJpYWxCbG9jaycpO1xuICAgICAgcmVzdWx0Lm1hdGVyaWFsc1skKHRoaXMpLmRhdGEoJ21hdGVyaWFsSW5kZXgnKV0gPSBtYXRlcmlhbDtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgVmlzdWFsRnJhbWUgc2V0dGluZ3MuXG4gICAqIFVzZXMgVmlzdWFsRnJhbWVTZXR0aW5ncyB2YXJpYWJsZSBpZiBwcm92aWRlZCBvciBkZWZhdWx0IHZhbHVlcyBpbnN0ZWFkLlxuICAgKi9cbiAgcGFyYW1zKCkge1xuICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5WaXN1YWxGcmFtZVNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgJ21vbnN0ZXItY29udGVudC1zZWxlY3Rvcic6ICcubS1tb25zdGVyLWNvbnRlbnRfX2NvbnRlbnQnLFxuICAgIH07XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICB9XG5cbiAgc2VuZFRvQnVpbGRlcihmdW5jLCBhcmdzKSB7XG4gICAgRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5wYXJlbnRXaW5kb3csIGZ1bmMsIGFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIGZvcm1TdWJtaXQoZGF0YSkge1xuICAgIGNvbnN0ICRmb3JtID0gJCgnPGZvcm0gbWV0aG9kPVwiUE9TVFwiPjwvZm9ybT4nKTtcbiAgICBjb25zdCAkaW5wdXQgPSAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfX2pzb25cIj4nKTtcbiAgICBjb25zdCAkY3NyZiA9ICQoJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCI+Jyk7XG5cbiAgICAkY3NyZlxuICAgICAgLmF0dHIoJ25hbWUnLCAkKCdtZXRhW25hbWU9Y3NyZi1wYXJhbV0nKS5hdHRyKCdjb250ZW50JykpXG4gICAgICAudmFsKCQoJ21ldGFbbmFtZT1jc3JmLXRva2VuXScpLmF0dHIoJ2NvbnRlbnQnKSlcbiAgICAgIC5hcHBlbmRUbygkZm9ybSk7XG5cbiAgICAkaW5wdXRcbiAgICAgIC52YWwoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAuYXBwZW5kVG8oJGZvcm0pO1xuXG4gICAgJGZvcm1bMF0uc3VibWl0KCk7XG4gIH1cblxuICBuZXdCbG9jayhtYXRlcmlhbE5hbWUsIHNlbGVjdGVkRW50aXR5LCByZWdpb25OYW1lKSB7XG4gICAgLy8gQHRvZG8gQWRkIGxvYWRlciBoZXJlIGFzIHdlIGFyZSB1c2luZyBmb3JtIHBvc3QgIVxuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gdW5pcXVlSWQoJ21hdCcpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLml0ZXJhdGVUZW1wbGF0ZVR5cGUodGhpcy5wYWdlU3RydWN0dXJlSnNvbik7XG4gICAgaWYgKHNlbGVjdGVkRW50aXR5ID09PSAnZW50aXR5Jykge1xuICAgICAgZGF0YS5lbnRpdHkubWF0ZXJpYWxzQnlSZWdpb25EZWNsW3JlZ2lvbk5hbWVdLmRlY2xbcmFuZG9tSW5kZXhdID0ge1xuICAgICAgICBtYXRlcmlhbDogbWF0ZXJpYWxOYW1lLFxuICAgICAgfTtcbiAgICAgIGRhdGEuZW50aXR5Lm1hdGVyaWFsc0J5UmVnaW9uRGVjbFtyZWdpb25OYW1lXS5tYXRlcmlhbHNPcmRlci5wdXNoKHJhbmRvbUluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YVtzZWxlY3RlZEVudGl0eV0udGVtcGxhdGVSZWdpb25zW3JlZ2lvbk5hbWVdLm1hdGVyaWFsc0RlY2xzLmRlY2xbcmFuZG9tSW5kZXhdID0ge1xuICAgICAgICBtYXRlcmlhbDogbWF0ZXJpYWxOYW1lLFxuICAgICAgfTtcbiAgICAgIGRhdGFbc2VsZWN0ZWRFbnRpdHldLnRlbXBsYXRlUmVnaW9uc1tyZWdpb25OYW1lXS5tYXRlcmlhbHNEZWNscy5tYXRlcmlhbHNPcmRlci5wdXNoKHJhbmRvbUluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJldmlldyhkYXRhKTtcbiAgfVxuXG4gIHByZXZpZXcoZGF0YSA9IG51bGwpIHtcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YSB8fCB0aGlzLml0ZXJhdGVUZW1wbGF0ZVR5cGUodGhpcy5wYWdlU3RydWN0dXJlSnNvbik7XG4gICAgbmV3RGF0YS5hY3Rpb24gPSAncHJldmlldyc7XG4gICAgVmlzdWFsRnJhbWUuZm9ybVN1Ym1pdChuZXdEYXRhKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLml0ZXJhdGVUZW1wbGF0ZVR5cGUodGhpcy5wYWdlU3RydWN0dXJlSnNvbik7XG4gICAgZGF0YS5hY3Rpb24gPSAnc2F2ZSc7XG4gICAgVmlzdWFsRnJhbWUuZm9ybVN1Ym1pdChkYXRhKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpdGVyYXRlVGVtcGxhdGVUeXBlKGFycikge1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGVudGl0eToge1xuICAgICAgICBtYXRlcmlhbHNCeVJlZ2lvbkRlY2w6IHt9LFxuICAgICAgICBwcm92aWRlcnM6IHt9LFxuICAgICAgfSxcbiAgICB9O1xuICAgIGFyci5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBvYmouZGF0YS5pZDtcbiAgICAgIGNvbnN0IHJlZ2lvbnNSZXN1bHQgPSBWaXN1YWxGcmFtZS5pdGVyYXRlVGVtcGxhdGVSZWdpb25zKG9iai5jaGlsZHJlbik7XG4gICAgICAvLyBsYXlvdXQgb3IgdGVtcGxhdGVcbiAgICAgIHJlc3VsdFtrZXldID0ge1xuICAgICAgICB0ZW1wbGF0ZVJlZ2lvbnM6IHJlZ2lvbnNSZXN1bHQudGVtcGxhdGVSZWdpb25zLFxuICAgICAgICB0ZW1wbGF0ZVJlZ2lvbnNPcmRlcjogcmVnaW9uc1Jlc3VsdC50ZW1wbGF0ZVJlZ2lvbnNPcmRlcixcbiAgICAgICAgdGVtcGxhdGVJZDogb2JqLmRhdGEudGVtcGxhdGVJZCxcbiAgICAgICAgcHJvdmlkZXJzOiB7fSxcbiAgICAgIH07XG4gICAgICBpZiAoT2JqZWN0LmtleXMocmVnaW9uc1Jlc3VsdC5lbnRpdHlNYXRlcmlhbHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgT2JqZWN0LmtleXMocmVnaW9uc1Jlc3VsdC5lbnRpdHlNYXRlcmlhbHMpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgICAgICByZXN1bHQuZW50aXR5Lm1hdGVyaWFsc0J5UmVnaW9uRGVjbFtyZWdpb25LZXldID0gcmVnaW9uc1Jlc3VsdC5lbnRpdHlNYXRlcmlhbHNbcmVnaW9uS2V5XTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXN1bHRba2V5XS5wcm92aWRlcnMgPSB0aGlzLnNlcmlhbGl6ZVByb3ZpZGVycyhrZXkpO1xuICAgIH0pO1xuICAgIHJlc3VsdC5lbnRpdHkucHJvdmlkZXJzID0gdGhpcy5zZXJpYWxpemVQcm92aWRlcnMoJ2VudGl0eScpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzZXJpYWxpemVQcm92aWRlcnModHlwZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMucHJvdmlkZXJzW3R5cGVdKS5mb3JFYWNoKHByb3ZpZGVyS2V5ID0+IHtcbiAgICAgIHJlc3VsdFtwcm92aWRlcktleV0gPSB0aGlzLnByb3ZpZGVyc1t0eXBlXVtwcm92aWRlcktleV0uc2VyaWFsaXplKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBpdGVyYXRlVGVtcGxhdGVSZWdpb25zKGFycikge1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIHRlbXBsYXRlUmVnaW9uczoge30sXG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnNPcmRlcjogW10sXG4gICAgICBlbnRpdHlNYXRlcmlhbHM6IHt9LFxuICAgIH07XG4gICAgYXJyLmZvckVhY2gob2JqID0+IHtcbiAgICAgIC8vIGNvbnN0IGtleSA9IG9iai5kYXRhLmlkLnJlcGxhY2UoL14uKlxcLi8sICcnKTtcbiAgICAgIGNvbnN0IHJlZ2lvbktleSA9IG9iai5kYXRhLnJlZ2lvbktleTtcbiAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnNPcmRlci5wdXNoKHJlZ2lvbktleSk7XG4gICAgICBjb25zdCBlbnRpdHlEZXBlbmRlbnQgPSBvYmouZGF0YS5lbnRpdHlEZXBlbmRlbnQgfHwgZmFsc2U7XG5cbiAgICAgIGNvbnN0IHJlZ2lvbk1hdGVyaWFscyA9IFZpc3VhbEZyYW1lLml0ZXJhdGVNYXRlcmlhbHMob2JqLmNoaWxkcmVuLCByZWdpb25LZXkpO1xuXG4gICAgICBpZiAoZW50aXR5RGVwZW5kZW50ID09PSBmYWxzZSkge1xuICAgICAgICAvLyB0aGlzIGlzIGFuIGV4YWN0IHRlbXBsYXRlIHJlZ2lvblxuICAgICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zW3JlZ2lvbktleV0gPSB7XG4gICAgICAgICAgcmVnaW9uSWQ6IG9iai5kYXRhLnJlZ2lvbklkLFxuICAgICAgICAgIHJlZ2lvbktleSxcbiAgICAgICAgICB1bmlxdWVDb250ZW50SWQ6IG9iai5kYXRhLnVuaXF1ZUNvbnRlbnRJZCxcbiAgICAgICAgICBtYXRlcmlhbHNEZWNsczogcmVnaW9uTWF0ZXJpYWxzLFxuICAgICAgICAgIGVudGl0eURlcGVuZGVudCxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnNbcmVnaW9uS2V5XSA9IHtcbiAgICAgICAgICByZWdpb25JZDogb2JqLmRhdGEucmVnaW9uSWQsXG4gICAgICAgICAgcmVnaW9uS2V5LFxuICAgICAgICAgIHVuaXF1ZUNvbnRlbnRJZDogb2JqLmRhdGEudW5pcXVlQ29udGVudElkLFxuICAgICAgICAgIGVudGl0eURlcGVuZGVudCxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdGhpcyBpcyBlbnRpdHktZGVwZW5kZW50IHJlZ2lvblxuICAgICAgICByZXN1bHQuZW50aXR5TWF0ZXJpYWxzW3JlZ2lvbktleV0gPSByZWdpb25NYXRlcmlhbHM7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGl0ZXJhdGVNYXRlcmlhbHMoYXJyLCByZWdpb25LZXkpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBkZWNsOiB7fSxcbiAgICAgIG1hdGVyaWFsc09yZGVyOiBbXSxcbiAgICB9O1xuICAgIGFyci5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBvYmouZGF0YS5tYXRlcmlhbEluZGV4O1xuICAgICAgcmVzdWx0LmRlY2xba2V5XSA9IHtcbiAgICAgICAgLy8gZWRpdGFibGVzS2V5czogb2JqLmRhdGEuZWRpdGFibGVLZXlzLFxuICAgICAgICBtYXRlcmlhbDogb2JqLmRhdGEubWF0ZXJpYWxQYXRoLFxuICAgICAgfTtcbiAgICAgIHJlc3VsdC5tYXRlcmlhbHNPcmRlci5wdXNoKGtleSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaXN1YWxGcmFtZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL1Zpc3VhbEZyYW1lLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFZGl0YWJsZSBmcm9tICcuL0Jhc2VFZGl0YWJsZSc7XG5cbmNsYXNzIFdZU0lXWUcgZXh0ZW5kcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IEJhc2VFZGl0YWJsZS5mcmFtZSQoJG5vZGUpO1xuICAgIGNvbnN0IGVkaXRvciA9IG5vZGUuZGF0YSgnZWRpdG9yJyk7XG4gICAgaWYgKGVkaXRvcikge1xuICAgICAgcmV0dXJuIGVkaXRvci5nZXREYXRhKCk7XG4gICAgfVxuICAgIHJldHVybiBub2RlLmh0bWwoKTtcbiAgfVxuXG4gIGluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSAkbm9kZVswXTtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBhdXRvUGFyYWdyYXBoOiBmYWxzZSxcbiAgICAgIGVuYWJsZUNvbnRlbnRFZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlnbm9yZUVtcHR5UGFyYWdyYXBoOiB0cnVlLFxuICAgICAgZW50ZXJNb2RlOiB3aW5kb3cuQ0tFRElUT1IuRU5URVJfQlIsXG4gICAgfTtcbiAgICAvLyAkKCgpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHdpbmRvdy5BbGxveUVkaXRvci5lZGl0YWJsZShub2RlLCBjb25maWcpLmdldCgnbmF0aXZlRWRpdG9yJyk7XG4gICAgICAkbm9kZS5kYXRhKCdlZGl0b3InLCBlZGl0b3IpO1xuICAgIC8vIH0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgV1lTSVdZRztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9XWVNJV1lHLmpzXG4gKiovIiwiaW1wb3J0IFdZU0lXWUcgZnJvbSAnLi9XWVNJV1lHJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJy4vbGluayc7XG5pbXBvcnQgVGV4dFN0cmluZyBmcm9tICcuL3N0cmluZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFsbCgpIHtcbiAgaWYgKHR5cGVvZih3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVMpID09PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFUyA9IHt9O1xuICB9XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snd3lzaXd5ZyddID0gbmV3IFdZU0lXWUcoKTtcbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWydsaW5rJ10gPSBuZXcgTGluaygpO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ2ltYWdlJ10gPSBuZXcgSW1hZ2UoKTtcbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWydzdHJpbmcnXSA9IG5ldyBUZXh0U3RyaW5nKCk7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2FsbC5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBJbWFnZSBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICBjb25zdCAkaW1nID0gJG5vZGUuZmluZCgnaW1nJykuZmlyc3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3JjOiAkaW1nLmF0dHIoJ3NyYycpLFxuICAgICAgYWx0OiAkaW1nLmF0dHIoJ2FsdCcpLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvaW1hZ2UuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgTGluayBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogJG5vZGUuZGF0YSgnb3JpZ2luYWxIcmVmJykgPyAkbm9kZS5kYXRhKCdvcmlnaW5hbEhyZWYnKSA6ICRub2RlLmF0dHIoJ2hyZWYnKSxcbiAgICAgIGFuY2hvcjogJG5vZGUuaHRtbCgpLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGluaztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9saW5rLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFZGl0YWJsZSBmcm9tICcuL0Jhc2VFZGl0YWJsZSc7XG5cbmNsYXNzIFRleHRTdHJpbmcgZXh0ZW5kcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IEJhc2VFZGl0YWJsZS5mcmFtZSQoJG5vZGUpO1xuICAgIGNvbnN0IGVkaXRvciA9IG5vZGUuZGF0YSgnZWRpdG9yJyk7XG4gICAgaWYgKGVkaXRvcikge1xuICAgICAgcmV0dXJuIGVkaXRvci5nZXREYXRhKCk7XG4gICAgfVxuICAgIHJldHVybiBub2RlLmh0bWwoKTtcbiAgfVxuXG4gIGluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSAkbm9kZVswXTtcbiAgICAvKiBnbG9iYWwgd2luZG93OmZhbHNlICovXG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBhbGxvd2VkQ29udGVudDogJ2kgdScsXG4gICAgICB0b29sYmFyczoge1xuICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICBzZWxlY3Rpb25zOiB3aW5kb3cuQWxsb3lFZGl0b3IuU2VsZWN0aW9ucyxcbiAgICAgICAgICB0YWJJbmRleDogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhdXRvUGFyYWdyYXBoOiBmYWxzZSxcbiAgICAgIGVuYWJsZUNvbnRlbnRFZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlnbm9yZUVtcHR5UGFyYWdyYXBoOiB0cnVlLFxuICAgICAgYmxvY2tsZXNzOiB0cnVlLFxuICAgICAgZW50ZXJNb2RlOiB3aW5kb3cuQ0tFRElUT1IuRU5URVJfQlIsXG4gICAgfTtcbiAgICAvLyAkKCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZWRpdG9yID0gd2luZG93LkFsbG95RWRpdG9yLmVkaXRhYmxlKG5vZGUsIGNvbmZpZykuZ2V0KCduYXRpdmVFZGl0b3InKTtcbiAgICAgIGVkaXRvci5vbigna2V5JywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQuZGF0YS5rZXlDb2RlID09PSAxMyB8fCBldmVudC5kYXRhLmtleUNvZGUgPT09IHdpbmRvdy5DS0VESVRPUi5TSElGVCArIDEzKSB7XG4gICAgICAgICAgLy8gYWRkIHNhdmluZyBmdW5jdGlvbiBoZXJlXG4gICAgICAgICAgZXZlbnQuY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZWRpdG9yLm9uKCdwYXN0ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQuZGF0YS5kYXRhVmFsdWUgPSBldmVudC5kYXRhLmRhdGFWYWx1ZS5yZXBsYWNlKC88YnJbXFxzXFwvXSo+L2dtaSwgJyAnKTtcbiAgICAgIH0pO1xuICAgICAgJG5vZGUuZGF0YSgnZWRpdG9yJywgZWRpdG9yKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZygkbm9kZSwgbm9kZSk7XG4gICAgICAvLyB0aHJvdyBlO1xuICAgIH1cbiAgICAvLyB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRTdHJpbmc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvc3RyaW5nLmpzXG4gKiovIiwiaW1wb3J0IERhdGFQcm92aWRlciBmcm9tICcuLi9EYXRhUHJvdmlkZXInO1xuXG5jbGFzcyBTdGF0aWNDb250ZW50IGV4dGVuZHMgRGF0YVByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IocHJvdmlkZWRLZXlzKSB7XG4gICAgc3VwZXIoJ0RvdFBsYW50XFxcXE1vbnN0ZXJcXFxcRGF0YUVudGl0eVxcXFxTdGF0aWNDb250ZW50UHJvdmlkZXInLCBwcm92aWRlZEtleXMpO1xuICB9XG5cbiAgZmlsbENvbmZpZyhkYXRhKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGE7XG4gICAgbmV3RGF0YS5lbnRpdGllcyA9IHRoaXMuc2VyaWFsaXplS2V5cygpO1xuICAgIHJldHVybiBuZXdEYXRhO1xuICB9XG5cbiAgc2VyaWFsaXplTWF0ZXJpYWwocmVnaW9uS2V5LCBtYXRlcmlhbEtleSwgZGF0YUtleXMsICRyZWdpb24sICRtYXRlcmlhbCkge1xuICAgIGNvbnN0IG1hdGVyaWFsRWRpdGFibGVLZXlzID0gJG1hdGVyaWFsLmRhdGEoJ2VkaXRhYmxlS2V5cycpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucmVjdXJzaXZlU2VyaWFsaXplKG1hdGVyaWFsRWRpdGFibGVLZXlzLCAkbWF0ZXJpYWwsIGRhdGFLZXlzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmVjdXJzaXZlU2VyaWFsaXplKG1hdGVyaWFsRWRpdGFibGVLZXlzLCAkcm9vdCwgZGF0YUtleXMsIHByZWZpeCA9ICcnKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICBkYXRhS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBvYmogPSBtYXRlcmlhbEVkaXRhYmxlS2V5c1trZXldIHx8ICdOT19TVUNIX0tFWSc7XG4gICAgICBpZiAob2JqID09PSAnTk9fU1VDSF9LRVknKSB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob2JqID09PSBPYmplY3Qob2JqKSkge1xuICAgICAgICAvLyBpdCdzIHJlY3Vyc2l2ZVxuICAgICAgICAvLyBmaXJzdCAtIGZpbmQgYWxsIGJsb2Nrc1xuICAgICAgICBjb25zdCAkYmxvY2tzID0gJHJvb3QuZmluZChgW2RhdGEtcmVjdXJzaXZlLWl0ZW09XCIke2tleX1cIl1gKTtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBbXTtcbiAgICAgICAgJGJsb2Nrcy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgIHJlc3VsdFtrZXldLnB1c2godGhhdC5yZWN1cnNpdmVTZXJpYWxpemUob2JqLCAkdGhpcywgT2JqZWN0LmtleXMob2JqKSwgJ2l0ZW0uJykpO1xuICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpdCdzIHBsYWluIGZpZWxkXG4gICAgICAgIGNvbnN0ICRub2RlID0gJHJvb3QuZmluZChgW2RhdGEtZWRpdGFibGUta2V5PVwiJHtwcmVmaXh9JHtrZXl9XCJdYCkuZmlyc3QoKTtcbiAgICAgICAgaWYgKCRub2RlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgU2tpcHBlZCBbZGF0YS1lZGl0YWJsZS1rZXk9XCIke3ByZWZpeH0ke2tleX1cIl0gYXMgbm90IGZvdW5kYCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdFtrZXldID0gRGF0YVByb3ZpZGVyLmVkaXRhYmxlLnNlcmlhbGl6ZUVkaXRhYmxlKCRub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRpY0NvbnRlbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9wcm92aWRlcnMvU3RhdGljQ29udGVudC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9idW5kbGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImNsYXNzIEJhc2VDb250cm9scyB7XG4gIGNvbnN0cnVjdG9yKGVudikge1xuICAgIHRoaXMuZW52ID0gZW52O1xuICAgIHRoaXMuY29udHJvbEJ1dHRvbnMgPSAkKCc8ZGl2IGNsYXNzPVwidHJlZS1jb250cm9sLWJ1dHRvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+PC9kaXY+Jyk7XG5cbiAgICB0aGlzLnByZUluaXQoKTtcblxuICAgIGNvbnN0IHRoYXRFbnYgPSB0aGlzLmVudjtcbiAgICB0aGlzLmJ1dHRvbnNBcnJheS5mb3JFYWNoKGNvbmYgPT4ge1xuICAgICAgY29uc3QgJGJ1dHRvbiA9ICQoYDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0cmVlLWNvbnRyb2wtYnV0dG9uc19fYnV0dG9uXCIgdGl0bGU9XCIke2NvbmYubmFtZX1cIj5cbiAgPGkgY2xhc3M9XCIke2NvbmYuaWNvbn1cIj48L2k+XG48L2E+YCk7XG4gICAgICAkYnV0dG9uLmNsaWNrKGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpe1xuICAgICAgICBjb25zdCAkbm9kZSA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbmYuY2xpY2sodGhhdEVudi5qc3RyZWVPYmouZ2V0X25vZGUoJG5vZGUpLCAkbm9kZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY29udHJvbEJ1dHRvbnMuYXBwZW5kKCRidXR0b24pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGJ1dHRvbnNBcnJheSgpIHtcbiAgICB0aHJvdyBcIllvdSBtdXN0IGltcGxlbWVudCBidXR0b25zQXJyYXlcIjtcbiAgfVxuXG4gIHByZUluaXQoKSB7XG4gICAgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUNvbnRyb2xzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9QYWdlU3RydWN0dXJlL0Jhc2VDb250cm9scy5qc1xuICoqLyIsImltcG9ydCBCYXNlQ29udHJvbHMgZnJvbSAnLi9CYXNlQ29udHJvbHMnO1xuXG5jbGFzcyBNYXRlcmlhbENvbnRyb2xzIGV4dGVuZHMgQmFzZUNvbnRyb2xzIHtcbiAgZ2V0IGJ1dHRvbnNBcnJheSgpIHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBpY29uOiAnZmEgZmEtYXJyb3ctcmlnaHQnLFxuICAgICAgICBuYW1lOiAnU2VsZWN0JyxcbiAgICAgICAgY2xpY2s6IChqc1RyZWVOb2RlLyosICRub2RlKi8pID0+IHtcbiAgICAgICAgICB0aGlzLmVudi5zZWxlY3RNYXRlcmlhbChqc1RyZWVOb2RlLmRhdGEubWF0ZXJpYWxJbmRleCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiAnZmEgZmEtdHJhc2gtbycsXG4gICAgICAgIG5hbWU6ICdSZW1vdmUnLFxuICAgICAgICBjbGljazogKC8qanNUcmVlTm9kZSwgJG5vZGUqLykgPT4ge1xuICAgICAgICAgIHRoaXMuZW52LmpzdHJlZU9iai5kZWxldGVfbm9kZSh0aGlzLmVudi5qc3RyZWVPYmouZ2V0X3NlbGVjdGVkKCkpO1xuICAgICAgICAgIHRoaXMuZW52LnVwZGF0ZVBhZ2VTdHJ1Y3R1cmVKc29uKCk7XG4gICAgICAgICAgdGhpcy5lbnYudGFyZ2V0LkZyb250ZW5kTW9uc3Rlci5WaXN1YWxGcmFtZS5wcmV2aWV3KCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbENvbnRyb2xzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9QYWdlU3RydWN0dXJlL01hdGVyaWFsQ29udHJvbHMuanNcbiAqKi8iLCJjbGFzcyBQYWdlSXRlcmF0b3Ige1xuXG4gIHN0YXRpYyBwcm9jZXNzTGF5b3V0KCRsYXlvdXRSZWdpb24pIHtcbiAgICBjb25zdCBpdGVtID0gUGFnZUl0ZXJhdG9yLmV4dHJhY3RSZWdpb25EYXRhKCRsYXlvdXRSZWdpb24pO1xuICAgIGl0ZW0uc3RhdGUgPSB7XG4gICAgICBvcGVuZWQ6IHRydWUsXG4gICAgfTtcbiAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgaXRlbS5kYXRhLmlkID0gYGxheW91dC50ZW1wbGF0ZVJlZ2lvbi4ke2l0ZW0uZGF0YS5yZWdpb25LZXl9YDtcbiAgICBpdGVtLmlkID0gYHBzal8ke2l0ZW0uZGF0YS5pZH1gLnJlcGxhY2UoL1xcLi9nLCAnXycpO1xuICAgIGl0ZW0uZGF0YS5lbnRpdHlUeXBlID0gJ2xheW91dCc7XG4gICAgY29uc3QgdGVtcGxhdGVSZWdpb25zID0gW107XG5cbiAgICAvLyBmaW5kIG1hdGVyaWFsc1xuICAgIGNvbnN0ICRsYXlvdXRNYXRlcmlhbHMgPSAkbGF5b3V0UmVnaW9uLmZpbmQoJz5bZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICAkbGF5b3V0TWF0ZXJpYWxzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0ICRsYXlvdXRNYXRlcmlhbCA9ICQodGhpcyk7XG4gICAgICBjb25zdCByZXN1bHQgPSBQYWdlSXRlcmF0b3IucHJvY2Vzc0xheW91dE1hdGVyaWFsKCRsYXlvdXRNYXRlcmlhbCwgaXRlbS5pZCwgaXRlbS5kYXRhLnJlZ2lvbktleSk7XG4gICAgICBjb25zdCBsYXlvdXRNYXRlcmlhbEl0ZW0gPSByZXN1bHQubGF5b3V0TWF0ZXJpYWw7XG4gICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcbiAgICAgICAgdGVtcGxhdGVSZWdpb25zLnB1c2gocmVnaW9uKTtcbiAgICAgIH0pO1xuICAgICAgaXRlbS5jaGlsZHJlbi5wdXNoKGxheW91dE1hdGVyaWFsSXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbSxcbiAgICAgIHRlbXBsYXRlUmVnaW9ucyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHByb2Nlc3NMYXlvdXRNYXRlcmlhbCgkbGF5b3V0TWF0ZXJpYWwsIHByZWZpeCwgcmVnaW9uS2V5KSB7XG4gICAgY29uc3QgbWF0ZXJpYWxJbmRleCA9ICRsYXlvdXRNYXRlcmlhbC5kYXRhKCdtYXRlcmlhbEluZGV4Jyk7XG4gICAgY29uc3QgbWF0ZXJpYWxQYXRoID0gJGxheW91dE1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsUGF0aCcpO1xuICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICB0ZXh0OiBgJHtcbiAgICAgICAgbWF0ZXJpYWxQYXRoID09PSAnY29yZS5mcm9udGVuZC1tb25zdGVyLWNvcmUuZ2VuZXJhbC5jb250ZW50LXBsYWNlaG9sZGVyJ1xuICAgICAgICAgID8gJ01haW4gRW50aXR5IENvbnRlbnQnXG4gICAgICAgICAgOiBgTWF0ZXJpYWw6ICR7bWF0ZXJpYWxJbmRleH1gfVxuICAgICAgYCxcbiAgICAgIHR5cGU6ICdtYXRlcmlhbCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiBgJHtwcmVmaXh9LiR7bWF0ZXJpYWxJbmRleH1gLFxuICAgICAgICBtYXRlcmlhbEluZGV4LFxuICAgICAgICBtYXRlcmlhbFBhdGgsXG4gICAgICAgIGVkaXRhYmxlS2V5czogJGxheW91dE1hdGVyaWFsLmRhdGEoJ2VkaXRhYmxlS2V5cycpLFxuICAgICAgICBub2RlOiAkbGF5b3V0TWF0ZXJpYWwsXG4gICAgICAgIHJlZ2lvbktleSxcbiAgICAgICAgZW50aXR5VHlwZTogJ2xheW91dCcsXG4gICAgICB9LFxuICAgICAgaWQ6IGBwc2pfJHtwcmVmaXh9XyR7bWF0ZXJpYWxJbmRleH1gLFxuICAgIH07XG4gICAgY29uc3QgdGVtcGxhdGVSZWdpb25zID0gW107XG4gICAgY29uc3QgJHJlZ2lvbnMgPSAkbGF5b3V0TWF0ZXJpYWwuZmluZCgnPiAubS1tb25zdGVyLWNvbnRlbnRfX2NvbnRlbnQnKTtcbiAgICAkcmVnaW9ucy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBQYWdlSXRlcmF0b3IucHJvY2Vzc1RlbXBsYXRlUmVnaW9uKCQodGhpcykpO1xuICAgICAgdGVtcGxhdGVSZWdpb25zLnB1c2gocmVzdWx0KTtcbiAgICB9KTtcbiAgICBpZiAodGVtcGxhdGVSZWdpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGl0ZW0uZGF0YS5pc0NvbnRlbnQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbGF5b3V0TWF0ZXJpYWw6IGl0ZW0sXG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnMsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9jZXNzVGVtcGxhdGVSZWdpb24oJHRlbXBsYXRlUmVnaW9uKSB7XG4gICAgY29uc3QgaXRlbSA9IFBhZ2VJdGVyYXRvci5leHRyYWN0UmVnaW9uRGF0YSgkdGVtcGxhdGVSZWdpb24pO1xuICAgIGl0ZW0uc3RhdGUgPSB7XG4gICAgICBvcGVuZWQ6IHRydWUsXG4gICAgfTtcbiAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgaXRlbS5kYXRhLmVudGl0eURlcGVuZGVudCA9ICR0ZW1wbGF0ZVJlZ2lvbi5kYXRhKCdyZWdpb25FbnRpdHlEZXBlbmRlbnQnKSA9PT0gMTtcblxuICAgIGNvbnN0IHByZWZpeCA9IGl0ZW0uZGF0YS5lbnRpdHlEZXBlbmRlbnQgPyAnY29udGVudCcgOiAndGVtcGxhdGUnO1xuICAgIGl0ZW0uZGF0YS5lbnRpdHlUeXBlID0gaXRlbS5kYXRhLmVudGl0eURlcGVuZGVudCA/ICdlbnRpdHknIDogJ3RlbXBsYXRlJztcbiAgICBpdGVtLmRhdGEuaWQgPSBgJHtwcmVmaXh9LnRlbXBsYXRlUmVnaW9uLiR7aXRlbS5kYXRhLnJlZ2lvbktleX1gO1xuICAgIGl0ZW0uaWQgPSBgcHNqXyR7aXRlbS5kYXRhLmlkfWAucmVwbGFjZSgvXFwuL2csICdfJyk7XG5cbiAgICBpZiAoaXRlbS5kYXRhLmVudGl0eURlcGVuZGVudCkge1xuICAgICAgaXRlbS50eXBlID0gJ2NvbnRlbnRUZW1wbGF0ZVJlZ2lvbic7XG4gICAgfVxuICAgIGNvbnN0ICRyZWdpb25NYXRlcmlhbHMgPSAkdGVtcGxhdGVSZWdpb24uZmluZCgnPltkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICRyZWdpb25NYXRlcmlhbHMuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgY29uc3QgbWF0ZXJpYWwgPSBQYWdlSXRlcmF0b3IucHJvY2Vzc1RlbXBsYXRlUmVnaW9uTWF0ZXJpYWwoXG4gICAgICAgICQodGhpcyksXG4gICAgICAgIGl0ZW0uZGF0YS5pZCxcbiAgICAgICAgcHJlZml4XG4gICAgICApO1xuICAgICAgbWF0ZXJpYWwuZGF0YS5yZWdpb25LZXkgPSBpdGVtLmRhdGEucmVnaW9uS2V5O1xuICAgICAgbWF0ZXJpYWwuaWQgPSBgcHNqXyR7bWF0ZXJpYWwuZGF0YS5pZH1gLnJlcGxhY2UoL1xcLi9nLCAnXycpO1xuICAgICAgaXRlbS5jaGlsZHJlbi5wdXNoKG1hdGVyaWFsKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9jZXNzVGVtcGxhdGVSZWdpb25NYXRlcmlhbCgkcmVnaW9uTWF0ZXJpYWwsIHByZWZpeCwgZW50aXR5VHlwZSkge1xuICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSAkcmVnaW9uTWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxJbmRleCcpO1xuICAgIGNvbnN0IG1hdGVyaWFsUGF0aCA9ICRyZWdpb25NYXRlcmlhbC5kYXRhKCdtYXRlcmlhbFBhdGgnKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogYE1hdGVyaWFsOiAke21hdGVyaWFsSW5kZXh9YCxcbiAgICAgIHR5cGU6ICdtYXRlcmlhbCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiBgJHtwcmVmaXh9LiR7bWF0ZXJpYWxJbmRleH1gLFxuICAgICAgICBtYXRlcmlhbEluZGV4LFxuICAgICAgICBtYXRlcmlhbFBhdGgsXG4gICAgICAgIGVkaXRhYmxlS2V5czogJHJlZ2lvbk1hdGVyaWFsLmRhdGEoJ2VkaXRhYmxlS2V5cycpLFxuICAgICAgICBub2RlOiAkcmVnaW9uTWF0ZXJpYWwsXG4gICAgICAgIGVudGl0eVR5cGUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZXh0cmFjdFJlZ2lvbkRhdGEoJG5vZGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogJG5vZGUuZGF0YSgnY29udGVudERlc2NyaXB0aW9uJyksXG4gICAgICB0eXBlOiAndGVtcGxhdGVSZWdpb24nLFxuICAgICAgZGF0YToge1xuICAgICAgICByZWdpb25JZDogJG5vZGUuZGF0YSgncmVnaW9uSWQnKSxcbiAgICAgICAgcmVnaW9uS2V5OiAkbm9kZS5kYXRhKCdyZWdpb25LZXknKSxcbiAgICAgICAgdW5pcXVlQ29udGVudElkOiAkbm9kZS5kYXRhKCd1bmlxdWVDb250ZW50SWQnKSxcbiAgICAgICAgbm9kZTogJG5vZGUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZUl0ZXJhdG9yO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9QYWdlU3RydWN0dXJlL1BhZ2VJdGVyYXRvci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=