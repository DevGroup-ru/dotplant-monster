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
	      var activeModifier = bemElem + '--active';
	      var $resolutionLinks = $('.' + bemElem);
	      $resolutionLinks.click(function callback() {
	        $resolutionLinks.removeClass(activeModifier);
	        $(that.settings['frame-selector']).width($(this).data('resolutionWidth'));
	        $(this).addClass(activeModifier);
	        return false;
	      });
	    }
	  }, {
	    key: 'environmentSelector',
	    value: function environmentSelector() {
	      var that = this;
	      var bemElem = 'monster-environment-selector__environment-link';
	      var activeModifier = bemElem + '--active';
	      var $sectionLinks = $('.' + bemElem);
	      $sectionLinks.click(function callback() {
	        var environmentName = $(this).data('environmentName');
	        if (that.currentEnvironment === environmentName) {
	          $sectionLinks.removeClass(activeModifier);
	          that.environments.get(environmentName).deactivate();
	          that.currentEnvironment = null;
	          return false;
	        }
	
	        $sectionLinks.removeClass(activeModifier);
	        that.switchEnvironment(environmentName);
	        $(this).addClass(activeModifier);
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
	      var modifier = this.$stackable.find('.' + paneClass).length === 0 ? paneClass + '--first' : '';
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
	
	      this.$controls = this.$builder.find('.controls').first();
	      this.$controls.elem('refresh').click(function () {
	        _this.frameContentWindow.location.reload();
	        return false;
	      });
	
	      this.$controls.elem('save').click(function () {
	        _FrameApi2.default.sendMessage(_this.frameContentWindow, 'save');
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
	      $(document).on('click', '.materials-groups__switch-group', function clickHandler() {
	        var $this = $(this);
	        $this.toggleMod('active');
	        var groupPath = $this.data('groupPath');
	        if ($this.mod('active')) {
	          (function () {
	            $('.materials-groups__switch-group').mod('active', false);
	            var materialsListActiveClass = 'materials-list--active';
	
	            $('.materials-list').each(function it() {
	              var $list = $(this);
	              if ($list.hasClass(materialsListActiveClass)) {
	                $list.removeClass(materialsListActiveClass);
	              }
	              if ($list.data('groupPath') === groupPath) {
	                $list.addClass(materialsListActiveClass);
	              }
	            });
	
	            $this.mod('active', true);
	            that.$materialsPane.show();
	          })();
	        } else {
	          // that's just second click on the same group
	          that.$materialsPane.hide();
	        }
	        return false;
	      });
	      $(document).on('click', '.materials-list__item', function clickHandler() {
	        that.sendMessage('newBlock', [$(this).data('materialPath'), 'content']);
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
	    return _this;
	  }
	
	  _createClass(PageStructureEnvironment, [{
	    key: 'initPageStructureElement',
	    value: function initPageStructureElement() {
	      this.$pageStructure = $('<div class="page-structure"></div>');
	    }
	  }, {
	    key: 'activate',
	    value: function activate() {
	      _get(PageStructureEnvironment.prototype.__proto__ || Object.getPrototypeOf(PageStructureEnvironment.prototype), 'activate', this).call(this);
	
	      this.$structurePane = this.visualBuilder.createStackablePane();
	      this.$structurePane.append(this.$pageStructure);
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
	        plugins: ['types'],
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
	      var templateRegions = [];
	
	      // find materials
	      var $layoutMaterials = $layoutRegion.find('>[data-is-material]');
	      $layoutMaterials.each(function iter() {
	        var $layoutMaterial = $(this);
	        var result = PageStructureEnvironment.processLayoutMaterial($layoutMaterial, item.id);
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
	    value: function processLayoutMaterial($layoutMaterial, prefix) {
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
	          node: $layoutMaterial
	        }
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
	
	      var prefix = item.data.entityDependent ? 'template' : 'content';
	      item.data.id = prefix + '.templateRegion.' + item.data.regionKey;
	
	      if (item.data.entityDependent) {
	        item.type = 'contentTemplateRegion';
	      }
	      var $regionMaterials = $templateRegion.find('>[data-is-material]');
	      $regionMaterials.each(function iter() {
	        item.children.push(PageStructureEnvironment.processTemplateRegionMaterial($(this), item.data.id));
	      });
	      return item;
	    }
	  }, {
	    key: 'processTemplateRegionMaterial',
	    value: function processTemplateRegionMaterial($regionMaterial, prefix) {
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
	          node: $regionMaterial
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
	      this.makeItMove();
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
	        this.$selectedMaterial.addClass('m-monster-content__material--active');
	      }
	    }
	  }, {
	    key: 'makeItMove',
	    value: function makeItMove() {
	      this.$handlers = $('\n<div class="monster-block-handlers">\n  <a href="#" class="monster-block-handlers__configure">\n    <i class="fa fa-cog"></i>\n  </a>\n  <span class="monster-block-handlers__block-name">Block name here</span>\n  <a href="#" class="monster-block-handlers__move-up">\n    <i class="fa fa-angle-up"></i>\n  </a>\n  <a href="#" class="monster-block-handlers__move-down">\n    <i class="fa fa-angle-down"></i>\n  </a>\n  <a href="#" class="monster-block-handlers__clone">\n    <i class="fa fa-clone"></i>\n  </a>\n  <a href="#" class="monster-block-handlers__remove">\n    <i class="fa fa-times"></i>\n  </a>\n</div>');
	      $('body').append(this.$handlers);
	      this.$handlers.hide();
	      var that = this;
	      $(this.settings['monster-content-selector']).on({
	        mouseenter: function hoverIn() {
	          var $this = $(this);
	          $this.addClass('m-monster-content__material--highlighted');
	        },
	        mouseleave: function hoverOut() {
	          var $this = $(this);
	          $this.removeClass('m-monster-content__material--highlighted');
	        },
	        click: function clickHandler() {
	          var $this = $(this);
	          that.selectMaterial($this);
	        }
	      }, '[data-is-material]');
	      that.$handlers.on('click', '.monster-block-handlers__move-up', function () {
	        if (that.$selectedMaterial) {
	          var $prev = that.$selectedMaterial.prev('[data-is-material]');
	          if ($prev.length === 1) {
	            that.$selectedMaterial.insertBefore($prev);
	            that.updateHandlers();
	            that.parentBuilder.pageChanged();
	          }
	        }
	        return false;
	      }).on('click', '.monster-block-handlers__move-down', function () {
	        if (that.$selectedMaterial) {
	          var $next = that.$selectedMaterial.next('[data-is-material]');
	          if ($next.length === 1) {
	            that.$selectedMaterial.insertAfter($next);
	            that.updateHandlers();
	            that.parentBuilder.pageChanged();
	          }
	        }
	        return false;
	      }).on('click', '.monster-block-handlers__clone', function () {
	        if (that.$selectedMaterial) {
	          var $clonedMaterial = that.$selectedMaterial.clone();
	          var randomIndex = (0, _uniqid2.default)('mat');
	          $clonedMaterial.insertAfter(that.$selectedMaterial).data('materialIndex', randomIndex).attr('data-material-index', randomIndex);
	          that.selectMaterial($clonedMaterial);
	          that.parentBuilder.pageChanged();
	        }
	        return false;
	      }).on('click', '.monster-block-handlers__remove', function () {
	        if (that.$selectedMaterial) {
	          if (confirm('Are you sure you want to remove this material?')) {
	            that.$selectedMaterial.remove();
	            that.$selectedMaterial = null;
	            that.$handlers.hide(); // it does not work. why? Need to fix!
	            that.parentBuilder.pageChanged();
	          }
	        }
	        return false;
	      });
	    }
	  }, {
	    key: 'selectMaterial',
	    value: function selectMaterial($material) {
	      if (this.$selectedMaterial === $material) {
	        return;
	      }
	      if (this.$selectedMaterial) {
	        this.$selectedMaterial.removeClass('m-monster-content__material--active');
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
	    value: function newBlock(materialName, regionName) {
	      // @todo Add loader here as we are using form post !
	      var randomIndex = (0, _uniqid2.default)('mat');
	      var newData = {
	        template: this.constructTemplateData(),
	        action: 'preview'
	      };
	      if (newData.template.regionsMaterials.hasOwnProperty(regionName) === false) {
	        newData.template.regionsMaterials[regionName] = {};
	      }
	      // we are modifying template data by adding new material into needed region
	      newData.template.regionsMaterials[regionName].decl[randomIndex] = {
	        material: materialName
	      };
	      newData.template.regionsMaterials[regionName].materialsOrder.push(randomIndex);
	      VisualFrame.formSubmit(newData);
	
	      return false;
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      var data = this.iterateTemplateType(this.pageStructureJson);
	      data.action = 'save';
	      debugger;
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
	        entityMaterials: {}
	      };
	      arr.forEach(function (obj) {
	        // const key = obj.data.id.replace(/^.*\./, '');
	        var regionKey = obj.data.regionKey;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWU1ZWFmNDdhZjZlNzAyOTM2MjkiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL0Jhc2VFZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9Gcm9udGVuZE1vbnN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXJGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0VkaXRhYmxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL1dZU0lXWUcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2FsbC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9wcm92aWRlcnMvU3RhdGljQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9idW5kbGUuY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkZyb250ZW5kTW9uc3RlciIsIkJhc2VFbnZpcm9ubWVudCIsInZpc3VhbEJ1aWxkZXIiLCJuYW1lIiwidGFyZ2V0IiwiJCIsInNldHRpbmdzIiwiY29udGVudFdpbmRvdyIsImN1cnJlbnRFbnZpcm9ubWVudCIsImVudmlyb25tZW50cyIsImdldCIsImRlYWN0aXZhdGUiLCJjbGVhclN0YWNrYWJsZSIsImZ1bmMiLCJhcmdzIiwic2VuZE1lc3NhZ2UiLCJCYXNlRWRpdGFibGUiLCIkbm9kZSIsIkZyYW1lQXBpIiwibGlzdGVuZXIiLCJjYWxsYmFjayIsImNhbGxiYWNrSGFuZGxlciIsImV2ZW50IiwibWVzc2FnZSIsImlzSWUiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiYXBwbHkiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJzdHJpbmdpZnkiLCJwb3N0TWVzc2FnZSIsImlzIiwiaWUiLCJwYXJhbXMiLCJ2aXN1YWxCdWxkZXIiLCJoYXNoQXBpIiwicGFyZW50IiwiaGFzQnVpbGRlciIsIlZpc3VhbEZyYW1lIiwic21vb3RoU2Nyb2xsIiwiaW5pdCIsInVzZXJTZXR0aW5ncyIsIkZyb250ZW5kTW9uc3RlclNldHRpbmdzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJidWlsZGVyIiwiJGJ1aWxkZXIiLCJsZW5ndGgiLCJWaXN1YWxCdWlsZGVyIiwicmVzb2x1dGlvblN3aXRjaGVyIiwiTWFwIiwiZW52aXJvbm1lbnRTZWxlY3RvciIsInN3aXRjaEVudmlyb25tZW50IiwiZmlyc3QiLCJtb2QiLCJiaW5kTWVzc2FnZUxpc3RlbmVyIiwiY29udHJvbHMiLCJWaXN1YWxCdWlsZGVyU2V0dGluZ3MiLCJidW5kbGVzIiwiJHN0YWNrYWJsZSIsInRoYXQiLCJiZW1FbGVtIiwiYWN0aXZlTW9kaWZpZXIiLCIkcmVzb2x1dGlvbkxpbmtzIiwiY2xpY2siLCJyZW1vdmVDbGFzcyIsIndpZHRoIiwiYWRkQ2xhc3MiLCIkc2VjdGlvbkxpbmtzIiwiZW52aXJvbm1lbnROYW1lIiwiYWN0aXZhdGUiLCJlbXB0eSIsInBhbmVDbGFzcyIsIm1vZGlmaWVyIiwiZmluZCIsIiRuZXdQYW5lIiwiYXBwZW5kIiwibWF0ZXJpYWxzIiwiaGFzT3duUHJvcGVydHkiLCJyZXN1bHQiLCJzZXJpYWxpemVQYWdlIiwiY29uc29sZSIsImxvZyIsInJlc3VsdEJ5UHJvdmlkZXJzIiwicHJvdmlkZWRLZXlzIiwiZnJhbWVDb250ZW50V2luZG93IiwiTU9OU1RFUl9FRElUX01PREVfREFUQSIsInRlbXBsYXRlIiwicHJvdmlkZXJJbmRleCIsInJlZ2lvbnMiLCJyZWdpb25LZXkiLCJtYXRlcmlhbEluZGV4IiwiZGF0YUtleXMiLCJlbnZpcm9ubWVudCIsInBhZ2VDaGFuZ2VkIiwiJGNvbnRyb2xzIiwiZWxlbSIsImxvY2F0aW9uIiwicmVsb2FkIiwiQWN0aW9uRW52aXJvbm1lbnQiLCJDdXN0b21pemF0aW9uRW52aXJvbm1lbnQiLCJNYXRlcmlhbHNFbnZpcm9ubWVudCIsImluaXRNYXRlcmlhbHNTZWxlY3RvciIsIiRtYXRlcmlhbHNHcm91cHMiLCIkbWF0ZXJpYWxzTGlzdCIsImkxOG5CdW5kbGVOYW1lIiwicG9seWdsb3QiLCJ0IiwiYnVuZGxlIiwiJGJ1bmRsZVRpdGxlIiwiZnVsbFBhdGgiLCJwdXNoIiwiZ3JvdXBzIiwiZ3JvdXBOYW1lIiwiZ3JvdXAiLCJpMThuR3JvdXBOYW1lIiwiJGxpIiwiJGxpc3QiLCJpdGVtcyIsIm1hdGVyaWFsTmFtZSIsIm1hdGVyaWFsIiwiaTE4bk1hdGVyaWFsTmFtZSIsIiRpdGVtIiwiZG9jdW1lbnQiLCJvbiIsImNsaWNrSGFuZGxlciIsIiR0aGlzIiwidG9nZ2xlTW9kIiwiZ3JvdXBQYXRoIiwibWF0ZXJpYWxzTGlzdEFjdGl2ZUNsYXNzIiwiZWFjaCIsIml0IiwiaGFzQ2xhc3MiLCIkbWF0ZXJpYWxzUGFuZSIsInNob3ciLCJoaWRlIiwiJGdyb3Vwc1BhbmUiLCJjcmVhdGVTdGFja2FibGVQYW5lIiwiUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IiwiaW5pdFBhZ2VTdHJ1Y3R1cmVFbGVtZW50IiwiZWRpdE1vZGVEYXRhIiwiJHBhZ2VTdHJ1Y3R1cmUiLCIkc3RydWN0dXJlUGFuZSIsImpzdHJlZSIsImxheW91dCIsImxheW91dEl0ZW0iLCJpZCIsInRlbXBsYXRlSWQiLCJ0ZXh0IiwiaWNvbiIsInN0YXRlIiwib3BlbmVkIiwiY2hpbGRyZW4iLCJ0ZW1wbGF0ZUl0ZW0iLCIkbGF5b3V0UmVnaW9ucyIsInRhcmdldCQiLCJpdGVyIiwicHJvY2Vzc0xheW91dCIsIml0ZW0iLCJ0ZW1wbGF0ZVJlZ2lvbnMiLCJyZWdpb24iLCJwYWdlU3RydWN0dXJlIiwiY29yZSIsInRoZW1lcyIsInBsdWdpbnMiLCJ0eXBlcyIsInRlbXBsYXRlUmVnaW9uIiwiY29udGVudFRlbXBsYXRlUmVnaW9uIiwianN0cmVlT2JqIiwicGFnZVN0cnVjdHVyZUpzb24iLCJnZXRfanNvbiIsIm5vX3N0YXRlIiwibm9faWQiLCJub19saV9hdHRyIiwibm9fYV9hdHRyIiwicmVnaW9uc1N0cnVjdHVyZSIsInNlcmlhbGl6ZSIsIm1hdGVyaWFsc0RlY2wiLCIkbGF5b3V0UmVnaW9uIiwiZXh0cmFjdFJlZ2lvbkRhdGEiLCIkbGF5b3V0TWF0ZXJpYWxzIiwiJGxheW91dE1hdGVyaWFsIiwicHJvY2Vzc0xheW91dE1hdGVyaWFsIiwibGF5b3V0TWF0ZXJpYWxJdGVtIiwibGF5b3V0TWF0ZXJpYWwiLCJwcmVmaXgiLCJtYXRlcmlhbFBhdGgiLCJ0eXBlIiwiZWRpdGFibGVLZXlzIiwibm9kZSIsIiRyZWdpb25zIiwicHJvY2Vzc1RlbXBsYXRlUmVnaW9uIiwiaXNDb250ZW50IiwiJHRlbXBsYXRlUmVnaW9uIiwiZW50aXR5RGVwZW5kZW50IiwiJHJlZ2lvbk1hdGVyaWFscyIsInByb2Nlc3NUZW1wbGF0ZVJlZ2lvbk1hdGVyaWFsIiwiJHJlZ2lvbk1hdGVyaWFsIiwicmVnaW9uSWQiLCJ1bmlxdWVDb250ZW50SWQiLCJTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwidW5pcWlkIiwibW9yZUVudHJvcHkiLCJyZXRJZCIsIl9mb3JtYXRTZWVkIiwic2VlZCIsInJlcVdpZHRoIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsInNsaWNlIiwiQXJyYXkiLCJqb2luIiwiJGdsb2JhbCIsIkdMT0JBTCIsIiRsb2N1dHVzIiwicGhwIiwidW5pcWlkU2VlZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIkRhdGUiLCJnZXRUaW1lIiwidG9GaXhlZCIsIkRhdGFQcm92aWRlciIsImNsYXNzTmFtZSIsImFzc29jaWF0aW9ucyIsImFzc29jaWF0ZSIsIiRyZWdpb24iLCJtYXRlcmlhbEtleSIsIiRtYXRlcmlhbCIsIm1hdGVyaWFsRWRpdGFibGVLZXlzIiwiaW5pdGlhbGl6ZU1hdGVyaWFsRWRpdCIsIiRyb290Iiwib2JqIiwiJGJsb2NrcyIsImNvdW50ZXIiLCJlZGl0YWJsZSIsImluaXRpYWxpemVFZGl0YWJsZSIsInNlcmlhbGl6ZU1hdGVyaWFsIiwiY2xhc3MiLCJmaWxsQ29uZmlnIiwiRGF0YVByb3ZpZGVyRmFjdG9yeSIsInByb3ZpZGVyRGVjbCIsInByb3ZpZGVyIiwiRWRpdGFibGUiLCJlZGl0YWJsZXNCeVR5cGUiLCJNT05TVEVSX0VESVRBQkxFUyIsImV4cG9ydFZhcmlhYmxlIiwic2VyaWFsaXplTm9kZSIsInN0cmluZyIsIkhhc2hBcGkiLCJmdW5jdGlvbkNhbGxzIiwiaGFzaCIsIm1hdGNoZXMiLCJtYXRjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsImluaXRpYWxpemUiLCJwYWdlU3RydWN0dXJlSnNvbkRhdGEiLCJwYXJlbnRXaW5kb3ciLCJwYXJlbnRNb25zdGVyIiwicGFyZW50QnVpbGRlciIsImN1cnJlbnRNb25zdGVyQ29udGVudCIsIm1ha2VJdE1vdmUiLCJyZXNpemUiLCJ1cGRhdGVIYW5kbGVycyIsImluaXRQcm92aWRlcnMiLCJNb25zdGVyRWRpdERhdGEiLCJwcm92aWRlcnMiLCJnZXRQcm92aWRlcnMiLCJlbnRpdHkiLCJhcnIiLCJmYWN0b3J5IiwiJG1vbnN0ZXJDb250ZW50Q2FjaGUiLCIkc2VsZWN0ZWRNYXRlcmlhbCIsIiRoYW5kbGVycyIsImNzcyIsInBvc2l0aW9uIiwidG9wIiwiaGVpZ2h0IiwibW91c2VlbnRlciIsImhvdmVySW4iLCJtb3VzZWxlYXZlIiwiaG92ZXJPdXQiLCJzZWxlY3RNYXRlcmlhbCIsIiRwcmV2IiwicHJldiIsImluc2VydEJlZm9yZSIsIiRuZXh0IiwibmV4dCIsImluc2VydEFmdGVyIiwiJGNsb25lZE1hdGVyaWFsIiwiY2xvbmUiLCJyYW5kb21JbmRleCIsImF0dHIiLCJjb25maXJtIiwicmVtb3ZlIiwiJG1vbnN0ZXJDb250ZW50IiwiJG1vbnN0ZXIiLCJzZXJpYWxpemVVbmlxdWVDb250ZW50Iiwic2VuZFRvQnVpbGRlciIsImJsb2NrIiwiVmlzdWFsRnJhbWVTZXR0aW5ncyIsInByb3ZpZGVyc0VudGl0aWVzIiwicmVnaW9uc01hdGVyaWFscyIsIm1hdGVyaWFsc0J5UmVnaW9ucyIsInJlZ2lvbk5hbWUiLCJuZXdEYXRhIiwiY29uc3RydWN0VGVtcGxhdGVEYXRhIiwiYWN0aW9uIiwiZGVjbCIsIm1hdGVyaWFsc09yZGVyIiwiZm9ybVN1Ym1pdCIsIml0ZXJhdGVUZW1wbGF0ZVR5cGUiLCJtYXRlcmlhbHNCeVJlZ2lvbkRlY2wiLCJyZWdpb25zUmVzdWx0IiwiaXRlcmF0ZVRlbXBsYXRlUmVnaW9ucyIsImVudGl0eU1hdGVyaWFscyIsInNlcmlhbGl6ZVByb3ZpZGVycyIsInByb3ZpZGVyS2V5IiwidmFsdWUiLCJyZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSIsIiRmb3JtIiwiJGlucHV0IiwiJGNzcmYiLCJ2YWwiLCJhcHBlbmRUbyIsInN1Ym1pdCIsInJlZ2lvbk1hdGVyaWFscyIsIml0ZXJhdGVNYXRlcmlhbHMiLCJtYXRlcmlhbHNEZWNscyIsIldZU0lXWUciLCJmcmFtZSQiLCJlZGl0b3IiLCJnZXREYXRhIiwiaHRtbCIsImNvbmZpZyIsImF1dG9QYXJhZ3JhcGgiLCJlbmFibGVDb250ZW50RWRpdGFibGUiLCJpZ25vcmVFbXB0eVBhcmFncmFwaCIsImVudGVyTW9kZSIsIkNLRURJVE9SIiwiRU5URVJfQlIiLCJBbGxveUVkaXRvciIsImFsbCIsIkltYWdlIiwiJGltZyIsInNyYyIsImFsdCIsIkxpbmsiLCJocmVmIiwiYW5jaG9yIiwiVGV4dFN0cmluZyIsImFsbG93ZWRDb250ZW50IiwidG9vbGJhcnMiLCJzdHlsZXMiLCJzZWxlY3Rpb25zIiwiU2VsZWN0aW9ucyIsInRhYkluZGV4IiwiYmxvY2tsZXNzIiwia2V5Q29kZSIsIlNISUZUIiwiY2FuY2VsIiwiZGF0YVZhbHVlIiwicmVwbGFjZSIsImUiLCJTdGF0aWNDb250ZW50IiwiZW50aXRpZXMiLCJzZXJpYWxpemVLZXlzIiwicmVjdXJzaXZlU2VyaWFsaXplIiwid2FybiIsInNlcmlhbGl6ZUVkaXRhYmxlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVBOzs7Ozs7QUFFQUEsUUFBT0MsZUFBUCxHQUF5QiwrQkFBekI7QUFDQSxHOzs7Ozs7Ozs7Ozs7OztBQ0xBOzs7Ozs7OztLQUVNQyxlO0FBQ0osNEJBQVlDLGFBQVosRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQy9CLFVBQUtELGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0MsTUFBTCxHQUFjQyxFQUFFLEtBQUtILGFBQUwsQ0FBbUJJLFFBQW5CLENBQTRCLGdCQUE1QixDQUFGLEVBQWlELENBQWpELEVBQW9EQyxhQUFsRTtBQUNEOzs7O2dDQUVVO0FBQ1Q7QUFDQSxXQUFJLEtBQUtKLElBQUwsS0FBYyxLQUFLRCxhQUFMLENBQW1CTSxrQkFBckMsRUFBeUQ7QUFDdkQ7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cEQsRUFBZDtBQUNBLGVBQUl4QyxNQUFNa0MsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN0QmtDLHFCQUFRa1MsSUFBUixrQ0FBNEMxTCxNQUE1QyxHQUFxRDdJLEdBQXJEO0FBQ0E7QUFDRDtBQUNEbUMsa0JBQU9uQyxHQUFQLElBQWMsdUJBQWFrTSxRQUFiLENBQXNCc0ksaUJBQXRCLENBQXdDdlcsS0FBeEMsQ0FBZDtBQUNEO0FBQ0YsUUEzQkQ7QUE0QkEsY0FBT2tFLE1BQVA7QUFDRDs7Ozs7O21CQUdZZ1MsYTs7Ozs7Ozs7QUN0RGYsMEMiLCJmaWxlIjoidmlzdWFsLWJ1aWxkZXIvc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMWU1ZWFmNDdhZjZlNzAyOTM2MjlcbiAqKi8iLCJpbXBvcnQgJy4vYnVuZGxlLmNzcyc7XG5cbmltcG9ydCBGcm9udGVuZE1vbnN0ZXIgZnJvbSAnLi9Gcm9udGVuZE1vbnN0ZXInO1xuXG53aW5kb3cuRnJvbnRlbmRNb25zdGVyID0gbmV3IEZyb250ZW5kTW9uc3RlcigpO1xuLy9cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5qc1xuICoqLyIsImltcG9ydCBGcmFtZUFwaSBmcm9tICcuLy4uL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaSc7XG5cbmNsYXNzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIgPSB2aXN1YWxCdWlsZGVyO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXJnZXQgPSAkKHRoaXMudmlzdWFsQnVpbGRlci5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSlbMF0uY29udGVudFdpbmRvdztcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIC8vIGRlYWN0aXZhdGUgY3VycmVudCBzZWxlY3RlZCBlbnZpcm9ubWVudFxuICAgIGlmICh0aGlzLm5hbWUgPT09IHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpIHtcbiAgICAgIHRoaXMudmlzdWFsQnVpbGRlci5lbnZpcm9ubWVudHMuZ2V0KHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpLmRlYWN0aXZhdGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdGFyZ2V0JCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQuJDtcbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy52aXN1YWxCdWlsZGVyLmNsZWFyU3RhY2thYmxlKCk7XG4gIH1cblxuICBzZW5kTWVzc2FnZShmdW5jLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMudGFyZ2V0LCBmdW5jLCBhcmdzKTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2VkKCkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUVudmlyb25tZW50O1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJjbGFzcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG5cbiAgfVxuXG4gIGluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSkge1xuXG4gIH1cblxuICBzdGF0aWMgZ2V0IGZyYW1lJCgpIHtcbiAgICByZXR1cm4gd2luZG93LiQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUVkaXRhYmxlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL0Jhc2VFZGl0YWJsZS5qc1xuICoqLyIsImNsYXNzIEZyYW1lQXBpIHtcbiAgc3RhdGljIGdldCBpc0llKCkge1xuICAgIC8qIGdsb2JhbCBpcyAqL1xuICAgIGlmICh0eXBlb2YoaXMpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGlzLmllKCk7Ly8gfHwgaXMuZWRnZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGljIGJpbmRNZXNzYWdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrSGFuZGxlcihldmVudCkge1xuICAgICAgbGV0IG1lc3NhZ2UgPSBudWxsO1xuICAgICAgaWYgKEZyYW1lQXBpLmlzSWUpIHtcbiAgICAgICAgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXNzYWdlID0gZXZlbnQuZGF0YTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxpc3RlbmVyW21lc3NhZ2UuZnVuY10pIHtcbiAgICAgICAgbGlzdGVuZXJbbWVzc2FnZS5mdW5jXS5hcHBseShsaXN0ZW5lciwgbWVzc2FnZS5hcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSUU4XG4gICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29ubWVzc2FnZScsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgc2VuZE1lc3NhZ2UodGFyZ2V0LCBmdW5jLCBhcmdzKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGZ1bmMsXG4gICAgICBhcmdzXG4gICAgfTtcbiAgICBjb25zdCBtZXNzYWdlID0gRnJhbWVBcGkuaXNJZSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogZGF0YTtcblxuICAgIHRhcmdldC5wb3N0TWVzc2FnZShtZXNzYWdlLCAnKicpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyYW1lQXBpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaS5qc1xuICoqLyIsImltcG9ydCBWaXN1YWxCdWlsZGVyIGZyb20gJy4vY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXInO1xuaW1wb3J0IFZpc3VhbEZyYW1lIGZyb20gJy4vY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUnO1xuaW1wb3J0IEhhc2hBcGkgZnJvbSAnLi9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9IYXNoQXBpJztcblxuY2xhc3MgRnJvbnRlbmRNb25zdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLnZpc3VhbEJ1bGRlciA9IG51bGw7XG4gICAgdGhpcy5oYXNoQXBpID0gbmV3IEhhc2hBcGkoKTtcbiAgICBpZiAod2luZG93LnBhcmVudCAhPT0gd2luZG93ICYmIHdpbmRvdy5wYXJlbnQuRnJvbnRlbmRNb25zdGVyKSB7XG4gICAgICBpZiAod2luZG93LnBhcmVudC5Gcm9udGVuZE1vbnN0ZXIuaGFzQnVpbGRlcikge1xuICAgICAgICB0aGlzLlZpc3VhbEZyYW1lID0gbmV3IFZpc3VhbEZyYW1lKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qIGdsb2JhbCBzbW9vdGhTY3JvbGw6IGZhbHNlKi9cbiAgICBpZiAodHlwZW9mKHNtb290aFNjcm9sbCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzbW9vdGhTY3JvbGwuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIFZpc3VhbEJ1aWxkZXIgY2xhc3MgaW5zdGFuY2VcbiAgICogQHJldHVybnMgVmlzdWFsQnVpbGRlclxuICAgKi9cbiAgZ2V0IGJ1aWxkZXIoKSB7XG4gICAgaWYgKHRoaXMudmlzdWFsQnVsZGVyID09PSBudWxsKSB7XG4gICAgICB0aGlzLnZpc3VhbEJ1bGRlciA9IG5ldyBWaXN1YWxCdWlsZGVyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZpc3VhbEJ1bGRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB0aGlzIEZyb250ZW5kTW9uc3RlciBpbnN0YW5jZSBoYXMgVmlzdWFsIEJ1aWxkZXIgb24gcGFnZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBoYXNCdWlsZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkZXIuJGJ1aWxkZXIubGVuZ3RoID09PSAxO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgRnJvbnRlbmRNb25zdGVyIHNldHRpbmdzLlxuICAgKiBVc2VzIEZyb250ZW5kTW9uc3RlclNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAqL1xuICBwYXJhbXMoKSB7XG4gICAgY29uc3QgdXNlclNldHRpbmdzID0gd2luZG93LkZyb250ZW5kTW9uc3RlclNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge307XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyb250ZW5kTW9uc3RlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvRnJvbnRlbmRNb25zdGVyLmpzXG4gKiovIiwiaW1wb3J0IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQnO1xuaW1wb3J0IE1hdGVyaWFsc0Vudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50JztcbmltcG9ydCBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50JztcbmltcG9ydCBBY3Rpb25FbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudCc7XG5pbXBvcnQgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCc7XG5pbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi8uLi92aXN1YWwtZnJhbWUvRnJhbWVBcGknO1xuLy8gaW1wb3J0IEVkaXRhYmxlIGZyb20gJy4vRWRpdGFibGUnO1xuXG5jbGFzcyBWaXN1YWxCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLnJlc29sdXRpb25Td2l0Y2hlcigpO1xuXG4gICAgdGhpcy5lbnZpcm9ubWVudHMgPSBuZXcgTWFwKFtcbiAgICAgIFsnc2l0ZS1zdHJ1Y3R1cmUnLCBuZXcgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdzaXRlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsncGFnZS1zdHJ1Y3R1cmUnLCBuZXcgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdwYWdlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsnbWF0ZXJpYWxzJywgbmV3IE1hdGVyaWFsc0Vudmlyb25tZW50KHRoaXMsICdtYXRlcmlhbHMnKV0sXG4gICAgICBbJ2N1c3RvbWl6YXRpb24nLCBuZXcgQ3VzdG9taXphdGlvbkVudmlyb25tZW50KHRoaXMsICdjdXN0b21pemF0aW9uJyldLFxuICAgICAgWydhY3Rpb24nLCBuZXcgQWN0aW9uRW52aXJvbm1lbnQodGhpcywgJ2FjdGlvbicpXSxcbiAgICBdKTtcblxuICAgIHRoaXMuZW52aXJvbm1lbnRTZWxlY3RvcigpO1xuXG4gICAgLy8gc2VsZWN0IGZpcnN0IGVudmlyb25tZW50IGJ5IGRlZmF1bHRcbiAgICB0aGlzLnN3aXRjaEVudmlyb25tZW50KCdzaXRlLXN0cnVjdHVyZScpO1xuICAgICQoJy5tb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJylcbiAgICAgIC5maXJzdCgpXG4gICAgICAubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICBGcmFtZUFwaS5iaW5kTWVzc2FnZUxpc3RlbmVyKHRoaXMpO1xuXG4gICAgLy8gdGhpcy5lZGl0YWJsZSA9IG5ldyBFZGl0YWJsZSgpO1xuXG4gICAgdGhpcy5jb250cm9scygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgVmlzdWFsQnVpbGRlciBzZXR0aW5ncy5cbiAgICogVXNlcyBWaXN1YWxCdWlsZGVyU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuVmlzdWFsQnVpbGRlclNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgJ2VsZW1lbnQtc2VsZWN0b3InOiAnLm1vbnN0ZXItdmlzdWFsLWJ1aWxkZXInLFxuICAgICAgJ2ZyYW1lLXNlbGVjdG9yJzogJy5tb25zdGVyLXZpc3VhbC1mcmFtZScsXG4gICAgICBidW5kbGVzOiB7fSxcbiAgICAgICdzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJzogJ21vbnN0ZXItc3RhY2thYmxlLWNvbnRhaW5lcicsXG4gICAgICAnbmV3LWJsb2NrLXVybCc6ICcvbW9uc3Rlci92aXN1YWwtYnVpbGRlci9uZXctYmxvY2snLFxuICAgIH07XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuJGJ1aWxkZXIgPSAkKHRoaXMuc2V0dGluZ3NbJ2VsZW1lbnQtc2VsZWN0b3InXSk7XG4gICAgdGhpcy4kc3RhY2thYmxlID0gJChgLiR7dGhpcy5zZXR0aW5nc1snc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyddfWApO1xuICB9XG5cbiAgcmVzb2x1dGlvblN3aXRjaGVyKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGJlbUVsZW0gPSAncmVzb2x1dGlvbi1zd2l0Y2hlcl9fcmVzb2x1dGlvbi1saW5rJztcbiAgICBjb25zdCBhY3RpdmVNb2RpZmllciA9IGAke2JlbUVsZW19LS1hY3RpdmVgO1xuICAgIGNvbnN0ICRyZXNvbHV0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRyZXNvbHV0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAkcmVzb2x1dGlvbkxpbmtzLnJlbW92ZUNsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgICQodGhhdC5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSkud2lkdGgoJCh0aGlzKS5kYXRhKCdyZXNvbHV0aW9uV2lkdGgnKSk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGVudmlyb25tZW50U2VsZWN0b3IoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgYmVtRWxlbSA9ICdtb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJztcbiAgICBjb25zdCBhY3RpdmVNb2RpZmllciA9IGAke2JlbUVsZW19LS1hY3RpdmVgO1xuICAgIGNvbnN0ICRzZWN0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRzZWN0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBjb25zdCBlbnZpcm9ubWVudE5hbWUgPSAkKHRoaXMpLmRhdGEoJ2Vudmlyb25tZW50TmFtZScpO1xuICAgICAgaWYgKHRoYXQuY3VycmVudEVudmlyb25tZW50ID09PSBlbnZpcm9ubWVudE5hbWUpIHtcbiAgICAgICAgJHNlY3Rpb25MaW5rcy5yZW1vdmVDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICAgIHRoYXQuZW52aXJvbm1lbnRzLmdldChlbnZpcm9ubWVudE5hbWUpLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgdGhhdC5jdXJyZW50RW52aXJvbm1lbnQgPSBudWxsO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgICRzZWN0aW9uTGlua3MucmVtb3ZlQ2xhc3MoYWN0aXZlTW9kaWZpZXIpO1xuICAgICAgdGhhdC5zd2l0Y2hFbnZpcm9ubWVudChlbnZpcm9ubWVudE5hbWUpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBzd2l0Y2hFbnZpcm9ubWVudChlbnZpcm9ubWVudE5hbWUpIHtcbiAgICB0aGlzLmVudmlyb25tZW50cy5nZXQoZW52aXJvbm1lbnROYW1lKS5hY3RpdmF0ZSgpO1xuICAgIHRoaXMuY3VycmVudEVudmlyb25tZW50ID0gZW52aXJvbm1lbnROYW1lO1xuICB9XG5cbiAgY2xlYXJTdGFja2FibGUoKSB7XG4gICAgdGhpcy4kc3RhY2thYmxlLmVtcHR5KCk7XG4gIH1cblxuICBjcmVhdGVTdGFja2FibGVQYW5lKCkge1xuICAgIGNvbnN0IHBhbmVDbGFzcyA9IGAke3RoaXMuc2V0dGluZ3NbJ3N0YWNrYWJsZS1jb250YWluZXItY2xhc3MnXX1fX3BhbmVgO1xuICAgIGNvbnN0IG1vZGlmaWVyID0gdGhpcy4kc3RhY2thYmxlLmZpbmQoYC4ke3BhbmVDbGFzc31gKS5sZW5ndGggPT09IDBcbiAgICAgID8gYCR7cGFuZUNsYXNzfS0tZmlyc3RgXG4gICAgICA6ICcnO1xuICAgIGNvbnN0ICRuZXdQYW5lID0gJChgPGRpdiBjbGFzcz1cIiR7cGFuZUNsYXNzfSAke21vZGlmaWVyfVwiPjwvZGl2PmApO1xuICAgIHRoaXMuJHN0YWNrYWJsZS5hcHBlbmQoJG5ld1BhbmUpO1xuICAgIHJldHVybiAkbmV3UGFuZTtcbiAgfVxuXG4gIG1hdGVyaWFsQnlOYW1lKG5hbWUpIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5tYXRlcmlhbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLm1hdGVyaWFsc1tuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXQgZnJhbWVDb250ZW50V2luZG93KCkge1xuICAgIHJldHVybiAkKHRoaXMuc2V0dGluZ3NbJ2ZyYW1lLXNlbGVjdG9yJ10pWzBdLmNvbnRlbnRXaW5kb3c7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgLy8gRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5mcmFtZUNvbnRlbnRXaW5kb3csICdzZXJpYWxpemVDb250ZW50JywgWydsb2cnXSk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5lbnZpcm9ubWVudHMuZ2V0KCdwYWdlLXN0cnVjdHVyZScpLnNlcmlhbGl6ZVBhZ2UoKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgLy8gd2UgaGF2ZSByZXN1bHQgd2hpY2ggaXMgY29udGVudCBpbiBmb3JtYXQ6XG4gICAgLy8gcmVnaW9uXG4gICAgLy8gLS0tIG1hdGVyaWFsIGlkXG4gICAgLy8gLS0tLS0tLSBrZXlzID0+IHZhbHVlc1xuICAgIC8vXG4gICAgLy8gb3VyIFByb3ZpZGVycyBzaG91bGQgZ2V0IG9ubHkgdGhvc2Uga2V5cyB0aGF0IHRoZXkgcHJvdmlkZVxuICAgIC8vIHByb3ZpZGVkIGtleXMgYXJlIHN0b3JlZCBpbiBmcmFtZUNvbnRlbnRXaW5kb3cuTU9OU1RFUl9FRElUX01PREVfREFUQS50ZW1wbGF0ZS5wcm92aWRlZEtleXNcbiAgICBjb25zdCByZXN1bHRCeVByb3ZpZGVycyA9IHt9O1xuICAgIGNvbnN0IHByb3ZpZGVkS2V5cyA9IHRoaXMuZnJhbWVDb250ZW50V2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEudGVtcGxhdGUucHJvdmlkZWRLZXlzO1xuXG4gICAgT2JqZWN0LmtleXMocHJvdmlkZWRLZXlzKS5mb3JFYWNoKHByb3ZpZGVySW5kZXggPT4ge1xuICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF0gPSB7fTtcblxuICAgICAgY29uc3QgcmVnaW9ucyA9IHByb3ZpZGVkS2V5c1twcm92aWRlckluZGV4XTtcblxuICAgICAgT2JqZWN0LmtleXMocmVnaW9ucykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0Lmhhc093blByb3BlcnR5KHJlZ2lvbktleSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdW3JlZ2lvbktleV0gPSB7fTtcblxuICAgICAgICAvLyBnbyBkZWVwIHRvIG1hdGVyaWFsIGluZGVjZXNcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gcmVnaW9uc1tyZWdpb25LZXldO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG1hdGVyaWFscykuZm9yRWFjaChtYXRlcmlhbEluZGV4ID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0W3JlZ2lvbktleV0uaGFzT3duUHJvcGVydHkobWF0ZXJpYWxJbmRleCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdW3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF0gPSB7fTtcblxuICAgICAgICAgIGNvbnN0IGRhdGFLZXlzID0gbWF0ZXJpYWxzW21hdGVyaWFsSW5kZXhdO1xuXG4gICAgICAgICAgZGF0YUtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdFtyZWdpb25LZXldW21hdGVyaWFsSW5kZXhdLmhhc093blByb3BlcnR5KGtleSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzXG4gICAgICAgICAgICAgIFtwcm92aWRlckluZGV4XVxuICAgICAgICAgICAgICBbcmVnaW9uS2V5XVxuICAgICAgICAgICAgICBbbWF0ZXJpYWxJbmRleF1cbiAgICAgICAgICAgICAgW2tleV0gPSByZXN1bHRbcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XVtrZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdEJ5UHJvdmlkZXJzKTtcbiAgICByZXR1cm4gcmVzdWx0QnlQcm92aWRlcnM7XG4gIH1cblxuICBwYWdlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmVudmlyb25tZW50cy5mb3JFYWNoKFxuICAgICAgZW52aXJvbm1lbnQgPT5cbiAgICAgICAgZW52aXJvbm1lbnQucGFnZUNoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICBsb2cocmVzdWx0KSB7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgfVxuXG4gIGNvbnRyb2xzKCkge1xuICAgIHRoaXMuJGNvbnRyb2xzID0gdGhpcy4kYnVpbGRlci5maW5kKCcuY29udHJvbHMnKS5maXJzdCgpO1xuICAgIHRoaXMuJGNvbnRyb2xzLmVsZW0oJ3JlZnJlc2gnKS5jbGljaygoKSA9PiB7XG4gICAgICB0aGlzLmZyYW1lQ29udGVudFdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIHRoaXMuJGNvbnRyb2xzLmVsZW0oJ3NhdmUnKS5jbGljaygoKSA9PiB7XG4gICAgICBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLmZyYW1lQ29udGVudFdpbmRvdywgJ3NhdmUnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaXN1YWxCdWlsZGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlci5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBBY3Rpb25FbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0FjdGlvbkVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9DdXN0b21pemF0aW9uRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgTWF0ZXJpYWxzRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2aXN1YWxCdWlsZGVyLCBuYW1lKSB7XG4gICAgc3VwZXIodmlzdWFsQnVpbGRlciwgbmFtZSk7XG4gICAgdGhpcy5pbml0TWF0ZXJpYWxzU2VsZWN0b3IoKTtcbiAgfVxuXG4gIGluaXRNYXRlcmlhbHNTZWxlY3RvcigpIHtcbiAgICB0aGlzLiRtYXRlcmlhbHNHcm91cHMgPSAkKCc8dWwgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzXCI+PC91bD4nKTtcbiAgICB0aGlzLiRtYXRlcmlhbHNMaXN0ID0gW107XG5cbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIuc2V0dGluZ3MuYnVuZGxlcy5mb3JFYWNoKGJ1bmRsZSA9PiB7XG4gICAgICAvKiBnbG9iYWwgcG9seWdsb3Q6IGZhbHNlICovXG4gICAgICBjb25zdCBpMThuQnVuZGxlTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gcG9seWdsb3QudChidW5kbGUubmFtZSlcbiAgICAgICAgOiBidW5kbGUubmFtZTtcblxuICAgICAgY29uc3QgJGJ1bmRsZVRpdGxlID0gYFxuICAgICAgPGxpIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19faXRlbSBtYXRlcmlhbHMtZ3JvdXBzX19pdGVtLS1idW5kbGUtbGFiZWxcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1idW5kbGVcIiBkYXRhLWJ1bmRsZS1wYXRoPVwiJHtidW5kbGUuZnVsbFBhdGh9XCI+XG4gICAgICAgICAgICAke2kxOG5CdW5kbGVOYW1lfVxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICAgYDtcbiAgICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QucHVzaCgkYnVuZGxlVGl0bGUpO1xuXG4gICAgICBidW5kbGUuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICBjb25zdCBncm91cE5hbWUgPSBncm91cC5uYW1lO1xuICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSBncm91cC5tYXRlcmlhbHM7XG4gICAgICAgIGNvbnN0IGkxOG5Hcm91cE5hbWUgPSB0eXBlb2YocG9seWdsb3QpICE9PSAndW5kZWZpbmVkJyA/IHBvbHlnbG90LnQoZ3JvdXBOYW1lKSA6IGdyb3VwTmFtZTtcbiAgICAgICAgY29uc3QgJGxpID0gJChgXG4gICAgPGxpIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19faXRlbVwiPlxuICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWdyb3VwLXBhdGg9XCIke2dyb3VwLmZ1bGxQYXRofVwiIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwXCI+XG4gICAgICAgICR7aTE4bkdyb3VwTmFtZX0gPHNwYW4gY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19jb3VudFwiPigke21hdGVyaWFscy5sZW5ndGh9KTwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICA8L2xpPmApO1xuICAgICAgICB0aGlzLiRtYXRlcmlhbHNHcm91cHMuYXBwZW5kKCRsaSk7XG4gICAgICAgIGNvbnN0ICRsaXN0ID0gJChgPHVsIGNsYXNzPVwibWF0ZXJpYWxzLWxpc3RcIiBkYXRhLWdyb3VwLXBhdGg9XCIke2dyb3VwLmZ1bGxQYXRofVwiPjwvdWw+YCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG5cbiAgICAgICAgbWF0ZXJpYWxzLmZvckVhY2gobWF0ZXJpYWwgPT4ge1xuICAgICAgICAgIGNvbnN0IG1hdGVyaWFsTmFtZSA9IG1hdGVyaWFsLm5hbWU7XG4gICAgICAgICAgY29uc3QgaTE4bk1hdGVyaWFsTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IHBvbHlnbG90LnQobWF0ZXJpYWxOYW1lKVxuICAgICAgICAgICAgOiBtYXRlcmlhbE5hbWU7XG4gICAgICAgICAgY29uc3QgJGl0ZW0gPSAkKGBcbjxsaT5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1hdGVyaWFscy1saXN0X19pdGVtXCIgZGF0YS1tYXRlcmlhbC1wYXRoPVwiJHttYXRlcmlhbC5mdWxsUGF0aH1cIj5cbiAgICAke2kxOG5NYXRlcmlhbE5hbWV9XG4gIDwvYT5cbjwvbGk+XG5gKTtcbiAgICAgICAgICBpdGVtcy5wdXNoKCRpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgICRsaXN0LmFwcGVuZChpdGVtcyk7XG4gICAgICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QucHVzaCgkbGlzdCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJywgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgJHRoaXMudG9nZ2xlTW9kKCdhY3RpdmUnKTtcbiAgICAgIGNvbnN0IGdyb3VwUGF0aCA9ICR0aGlzLmRhdGEoJ2dyb3VwUGF0aCcpO1xuICAgICAgaWYgKCR0aGlzLm1vZCgnYWN0aXZlJykpIHtcbiAgICAgICAgJCgnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcpLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgICAgICBjb25zdCBtYXRlcmlhbHNMaXN0QWN0aXZlQ2xhc3MgPSAnbWF0ZXJpYWxzLWxpc3QtLWFjdGl2ZSc7XG5cbiAgICAgICAgJCgnLm1hdGVyaWFscy1saXN0JykuZWFjaChmdW5jdGlvbiBpdCgpIHtcbiAgICAgICAgICBjb25zdCAkbGlzdCA9ICQodGhpcyk7XG4gICAgICAgICAgaWYgKCRsaXN0Lmhhc0NsYXNzKG1hdGVyaWFsc0xpc3RBY3RpdmVDbGFzcykpIHtcbiAgICAgICAgICAgICRsaXN0LnJlbW92ZUNsYXNzKG1hdGVyaWFsc0xpc3RBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkbGlzdC5kYXRhKCdncm91cFBhdGgnKSA9PT0gZ3JvdXBQYXRoKSB7XG4gICAgICAgICAgICAkbGlzdC5hZGRDbGFzcyhtYXRlcmlhbHNMaXN0QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHRoaXMubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICAgICAgdGhhdC4kbWF0ZXJpYWxzUGFuZS5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGF0J3MganVzdCBzZWNvbmQgY2xpY2sgb24gdGhlIHNhbWUgZ3JvdXBcbiAgICAgICAgdGhhdC4kbWF0ZXJpYWxzUGFuZS5oaWRlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYXRlcmlhbHMtbGlzdF9faXRlbScsIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgIHRoYXQuc2VuZE1lc3NhZ2UoXG4gICAgICAgICduZXdCbG9jaycsXG4gICAgICAgIFtcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoJ21hdGVyaWFsUGF0aCcpLFxuICAgICAgICAgICdjb250ZW50JyxcbiAgICAgICAgXVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHN1cGVyLmFjdGl2YXRlKCk7XG5cbiAgICB0aGlzLiRncm91cHNQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRncm91cHNQYW5lLmFwcGVuZCh0aGlzLiRtYXRlcmlhbHNHcm91cHMpO1xuXG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZS5hcHBlbmQodGhpcy4kbWF0ZXJpYWxzTGlzdCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZS5oaWRlKCk7XG5cbiAgICAkKCcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJykubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFsc0Vudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICBzdXBlcih2aXN1YWxCdWlsZGVyLCBuYW1lKTtcbiAgICB0aGlzLmluaXRQYWdlU3RydWN0dXJlRWxlbWVudCgpO1xuICAgIHRoaXMuZWRpdE1vZGVEYXRhID0ge307XG4gIH1cblxuICBpbml0UGFnZVN0cnVjdHVyZUVsZW1lbnQoKSB7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZSA9ICQoJzxkaXYgY2xhc3M9XCJwYWdlLXN0cnVjdHVyZVwiPjwvZGl2PicpO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgc3VwZXIuYWN0aXZhdGUoKTtcblxuICAgIHRoaXMuJHN0cnVjdHVyZVBhbmUgPSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3JlYXRlU3RhY2thYmxlUGFuZSgpO1xuICAgIHRoaXMuJHN0cnVjdHVyZVBhbmUuYXBwZW5kKHRoaXMuJHBhZ2VTdHJ1Y3R1cmUpO1xuICB9XG5cbiAgcGFnZUNoYW5nZWQoKSB7XG4gICAgc3VwZXIucGFnZUNoYW5nZWQoKTtcbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlLmpzdHJlZSgnZGVzdHJveScpO1xuICAgIGNvbnN0IGxheW91dCA9IHRoaXMudGFyZ2V0Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEubGF5b3V0O1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy50YXJnZXQuTU9OU1RFUl9FRElUX01PREVfREFUQS50ZW1wbGF0ZTtcblxuICAgIGNvbnN0IGxheW91dEl0ZW0gPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiAnbGF5b3V0JyxcbiAgICAgICAgdGVtcGxhdGVJZDogbGF5b3V0LmlkLFxuICAgICAgfSxcbiAgICAgIHRleHQ6IGBMYXlvdXQgLSAke2xheW91dC5rZXl9ICMke2xheW91dC5pZH1gLFxuICAgICAgaWNvbjogJ2ZhIGZhLWNvbHVtbnMnLFxuICAgICAgc3RhdGU6IHtcbiAgICAgICAgb3BlbmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICB9O1xuICAgIGNvbnN0IHRlbXBsYXRlSXRlbSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6ICd0ZW1wbGF0ZScsXG4gICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgfSxcbiAgICAgIHRleHQ6IGBUZW1wbGF0ZSAtICR7dGVtcGxhdGUua2V5fSAjJHt0ZW1wbGF0ZS5pZH1gLFxuICAgICAgaWNvbjogJ2ZhIGZhLXRoJyxcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIG9wZW5lZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgfTtcblxuICAgIGNvbnN0ICRsYXlvdXRSZWdpb25zID0gdGhpcy50YXJnZXQkKCcubS1tb25zdGVyLWNvbnRlbnRfX2xheW91dCcpO1xuICAgICRsYXlvdXRSZWdpb25zLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5wcm9jZXNzTGF5b3V0KCQodGhpcykpO1xuICAgICAgbGF5b3V0SXRlbS5jaGlsZHJlbi5wdXNoKHJlc3VsdC5pdGVtKTtcbiAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnMuZm9yRWFjaChyZWdpb24gPT4ge1xuICAgICAgICB0ZW1wbGF0ZUl0ZW0uY2hpbGRyZW4ucHVzaChyZWdpb24pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmUgPSBbXG4gICAgICBsYXlvdXRJdGVtLFxuICAgICAgdGVtcGxhdGVJdGVtLFxuICAgIF07XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5qc3RyZWUoe1xuICAgICAgY29yZToge1xuICAgICAgICBkYXRhOiB0aGlzLnBhZ2VTdHJ1Y3R1cmUsXG4gICAgICAgIHRoZW1lczoge1xuICAgICAgICAgIG5hbWU6ICdkZWZhdWx0LWRhcmsnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgJ3R5cGVzJyxcbiAgICAgIF0sXG4gICAgICB0eXBlczoge1xuICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtY29sdW1ucycsXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgaWNvbjogJ2ZhIGZhLXRoJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVSZWdpb246IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtZm9sZGVyLW8nLFxuICAgICAgICB9LFxuICAgICAgICBjb250ZW50VGVtcGxhdGVSZWdpb246IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtZm9sZGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWF0ZXJpYWw6IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtcHV6emxlLXBpZWNlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBqc3RyZWVPYmogPSB0aGlzLiRwYWdlU3RydWN0dXJlLmpzdHJlZSgpO1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUub24oJ2xvYWRlZC5qc3RyZWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uID0ganN0cmVlT2JqLmdldF9qc29uKHRoaXMuJHBhZ2VTdHJ1Y3R1cmUsIHtcbiAgICAgICAgbm9fc3RhdGU6IHRydWUsXG4gICAgICAgIG5vX2lkOiB0cnVlLFxuICAgICAgICBub19saV9hdHRyOiB0cnVlLFxuICAgICAgICBub19hX2F0dHI6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHRoaXMudGFyZ2V0LkZyb250ZW5kTW9uc3Rlci5WaXN1YWxGcmFtZS5wYWdlU3RydWN0dXJlSnNvbiA9IHRoaXMucGFnZVN0cnVjdHVyZUpzb247XG4gICAgfSk7XG5cbiAgICB0aGlzLmVkaXRNb2RlRGF0YSA9IHRoaXMudGFyZ2V0Lk1PTlNURVJfRURJVF9NT0RFX0RBVEE7XG4gIH1cblxuICBzdGF0aWMgcHJvY2Vzc0xheW91dCgkbGF5b3V0UmVnaW9uKSB7XG4gICAgY29uc3QgaXRlbSA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5leHRyYWN0UmVnaW9uRGF0YSgkbGF5b3V0UmVnaW9uKTtcbiAgICBpdGVtLnN0YXRlID0ge1xuICAgICAgb3BlbmVkOiB0cnVlLFxuICAgIH07XG4gICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgIGl0ZW0uZGF0YS5pZCA9IGBsYXlvdXQudGVtcGxhdGVSZWdpb24uJHtpdGVtLmRhdGEucmVnaW9uS2V5fWA7XG4gICAgY29uc3QgdGVtcGxhdGVSZWdpb25zID0gW107XG5cbiAgICAvLyBmaW5kIG1hdGVyaWFsc1xuICAgIGNvbnN0ICRsYXlvdXRNYXRlcmlhbHMgPSAkbGF5b3V0UmVnaW9uLmZpbmQoJz5bZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICAkbGF5b3V0TWF0ZXJpYWxzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0ICRsYXlvdXRNYXRlcmlhbCA9ICQodGhpcyk7XG4gICAgICBjb25zdCByZXN1bHQgPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQucHJvY2Vzc0xheW91dE1hdGVyaWFsKCRsYXlvdXRNYXRlcmlhbCwgaXRlbS5pZCk7XG4gICAgICBjb25zdCBsYXlvdXRNYXRlcmlhbEl0ZW0gPSByZXN1bHQubGF5b3V0TWF0ZXJpYWw7XG4gICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcbiAgICAgICAgdGVtcGxhdGVSZWdpb25zLnB1c2gocmVnaW9uKTtcbiAgICAgIH0pO1xuICAgICAgaXRlbS5jaGlsZHJlbi5wdXNoKGxheW91dE1hdGVyaWFsSXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbSxcbiAgICAgIHRlbXBsYXRlUmVnaW9ucyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHByb2Nlc3NMYXlvdXRNYXRlcmlhbCgkbGF5b3V0TWF0ZXJpYWwsIHByZWZpeCkge1xuICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSAkbGF5b3V0TWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxJbmRleCcpO1xuICAgIGNvbnN0IG1hdGVyaWFsUGF0aCA9ICRsYXlvdXRNYXRlcmlhbC5kYXRhKCdtYXRlcmlhbFBhdGgnKTtcbiAgICBjb25zdCBpdGVtID0ge1xuICAgICAgdGV4dDogYCR7XG4gICAgICAgIG1hdGVyaWFsUGF0aCA9PT0gJ2NvcmUuZnJvbnRlbmQtbW9uc3Rlci1jb3JlLmdlbmVyYWwuY29udGVudC1wbGFjZWhvbGRlcidcbiAgICAgICAgICA/ICdNYWluIEVudGl0eSBDb250ZW50J1xuICAgICAgICAgIDogYE1hdGVyaWFsOiAke21hdGVyaWFsSW5kZXh9YH1cbiAgICAgIGAsXG4gICAgICB0eXBlOiAnbWF0ZXJpYWwnLFxuICAgICAgZGF0YToge1xuICAgICAgICBpZDogYCR7cHJlZml4fS4ke21hdGVyaWFsSW5kZXh9YCxcbiAgICAgICAgbWF0ZXJpYWxJbmRleCxcbiAgICAgICAgbWF0ZXJpYWxQYXRoLFxuICAgICAgICBlZGl0YWJsZUtleXM6ICRsYXlvdXRNYXRlcmlhbC5kYXRhKCdlZGl0YWJsZUtleXMnKSxcbiAgICAgICAgbm9kZTogJGxheW91dE1hdGVyaWFsLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IHRlbXBsYXRlUmVnaW9ucyA9IFtdO1xuICAgIGNvbnN0ICRyZWdpb25zID0gJGxheW91dE1hdGVyaWFsLmZpbmQoJz4gLm0tbW9uc3Rlci1jb250ZW50X19jb250ZW50Jyk7XG4gICAgJHJlZ2lvbnMuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LnByb2Nlc3NUZW1wbGF0ZVJlZ2lvbigkKHRoaXMpKTtcbiAgICAgIHRlbXBsYXRlUmVnaW9ucy5wdXNoKHJlc3VsdCk7XG4gICAgfSk7XG4gICAgaWYgKHRlbXBsYXRlUmVnaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBpdGVtLmRhdGEuaXNDb250ZW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGxheW91dE1hdGVyaWFsOiBpdGVtLFxuICAgICAgdGVtcGxhdGVSZWdpb25zLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgcHJvY2Vzc1RlbXBsYXRlUmVnaW9uKCR0ZW1wbGF0ZVJlZ2lvbikge1xuICAgIGNvbnN0IGl0ZW0gPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQuZXh0cmFjdFJlZ2lvbkRhdGEoJHRlbXBsYXRlUmVnaW9uKTtcbiAgICBpdGVtLnN0YXRlID0ge1xuICAgICAgb3BlbmVkOiB0cnVlLFxuICAgIH07XG4gICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgIGl0ZW0uZGF0YS5lbnRpdHlEZXBlbmRlbnQgPSAkdGVtcGxhdGVSZWdpb24uZGF0YSgncmVnaW9uRW50aXR5RGVwZW5kZW50JykgPT09IDE7XG5cbiAgICBjb25zdCBwcmVmaXggPSBpdGVtLmRhdGEuZW50aXR5RGVwZW5kZW50ID8gJ3RlbXBsYXRlJyA6ICdjb250ZW50JztcbiAgICBpdGVtLmRhdGEuaWQgPSBgJHtwcmVmaXh9LnRlbXBsYXRlUmVnaW9uLiR7aXRlbS5kYXRhLnJlZ2lvbktleX1gO1xuXG4gICAgaWYgKGl0ZW0uZGF0YS5lbnRpdHlEZXBlbmRlbnQpIHtcbiAgICAgIGl0ZW0udHlwZSA9ICdjb250ZW50VGVtcGxhdGVSZWdpb24nO1xuICAgIH1cbiAgICBjb25zdCAkcmVnaW9uTWF0ZXJpYWxzID0gJHRlbXBsYXRlUmVnaW9uLmZpbmQoJz5bZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICAkcmVnaW9uTWF0ZXJpYWxzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGl0ZW0uY2hpbGRyZW4ucHVzaChcbiAgICAgICAgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LnByb2Nlc3NUZW1wbGF0ZVJlZ2lvbk1hdGVyaWFsKFxuICAgICAgICAgICQodGhpcyksXG4gICAgICAgICAgaXRlbS5kYXRhLmlkXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBzdGF0aWMgcHJvY2Vzc1RlbXBsYXRlUmVnaW9uTWF0ZXJpYWwoJHJlZ2lvbk1hdGVyaWFsLCBwcmVmaXgpIHtcbiAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gJHJlZ2lvbk1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsSW5kZXgnKTtcbiAgICBjb25zdCBtYXRlcmlhbFBhdGggPSAkcmVnaW9uTWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxQYXRoJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGBNYXRlcmlhbDogJHttYXRlcmlhbEluZGV4fWAsXG4gICAgICB0eXBlOiAnbWF0ZXJpYWwnLFxuICAgICAgZGF0YToge1xuICAgICAgICBpZDogYCR7cHJlZml4fS4ke21hdGVyaWFsSW5kZXh9YCxcbiAgICAgICAgbWF0ZXJpYWxJbmRleCxcbiAgICAgICAgbWF0ZXJpYWxQYXRoLFxuICAgICAgICBlZGl0YWJsZUtleXM6ICRyZWdpb25NYXRlcmlhbC5kYXRhKCdlZGl0YWJsZUtleXMnKSxcbiAgICAgICAgbm9kZTogJHJlZ2lvbk1hdGVyaWFsLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGV4dHJhY3RSZWdpb25EYXRhKCRub2RlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6ICRub2RlLmRhdGEoJ2NvbnRlbnREZXNjcmlwdGlvbicpLFxuICAgICAgdHlwZTogJ3RlbXBsYXRlUmVnaW9uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcmVnaW9uSWQ6ICRub2RlLmRhdGEoJ3JlZ2lvbklkJyksXG4gICAgICAgIHJlZ2lvbktleTogJG5vZGUuZGF0YSgncmVnaW9uS2V5JyksXG4gICAgICAgIHVuaXF1ZUNvbnRlbnRJZDogJG5vZGUuZGF0YSgndW5pcXVlQ29udGVudElkJyksXG4gICAgICAgIG5vZGU6ICRub2RlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc2VyaWFsaXplUGFnZSgpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMucmVnaW9uc1N0cnVjdHVyZVtyZWdpb25LZXldO1xuICAgICAgcmVzdWx0W3JlZ2lvbi5rZXldID0gcmVnaW9uLnNlcmlhbGl6ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBtYXRlcmlhbHNCeVJlZ2lvbnMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5yZWdpb25zU3RydWN0dXJlKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICBjb25zdCByZWdpb24gPSB0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmVbcmVnaW9uS2V5XTtcbiAgICAgIHJlc3VsdFtyZWdpb24ua2V5XSA9IHJlZ2lvbi5tYXRlcmlhbHNEZWNsKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1bmlxaWQgKHByZWZpeCwgbW9yZUVudHJvcHkpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC91bmlxaWQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgcmV2aXNlZCBieTogS2Fua3JlbHVuZSAoaHR0cDovL3d3dy53ZWJmYWt0b3J5LmluZm8vKVxuICAvLyAgICAgIG5vdGUgMTogVXNlcyBhbiBpbnRlcm5hbCBjb3VudGVyIChpbiBsb2N1dHVzIGdsb2JhbCkgdG8gYXZvaWQgY29sbGlzaW9uXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJGlkID0gdW5pcWlkKClcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gMTNcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IHZhciAkaWQgPSB1bmlxaWQoJ2ZvbycpXG4gIC8vICAgZXhhbXBsZSAyOiB2YXIgJHJlc3VsdCA9ICRpZC5sZW5ndGggPT09ICgxMyArICdmb28nLmxlbmd0aClcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcbiAgLy8gICBleGFtcGxlIDM6IHZhciAkaWQgPSB1bmlxaWQoJ2JhcicsIHRydWUpXG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgJHJlc3VsdCA9ICRpZC5sZW5ndGggPT09ICgyMyArICdiYXInLmxlbmd0aClcbiAgLy8gICByZXR1cm5zIDM6IHRydWVcblxuICBpZiAodHlwZW9mIHByZWZpeCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwcmVmaXggPSAnJ1xuICB9XG5cbiAgdmFyIHJldElkXG4gIHZhciBfZm9ybWF0U2VlZCA9IGZ1bmN0aW9uIChzZWVkLCByZXFXaWR0aCkge1xuICAgIHNlZWQgPSBwYXJzZUludChzZWVkLCAxMCkudG9TdHJpbmcoMTYpIC8vIHRvIGhleCBzdHJcbiAgICBpZiAocmVxV2lkdGggPCBzZWVkLmxlbmd0aCkge1xuICAgICAgLy8gc28gbG9uZyB3ZSBzcGxpdFxuICAgICAgcmV0dXJuIHNlZWQuc2xpY2Uoc2VlZC5sZW5ndGggLSByZXFXaWR0aClcbiAgICB9XG4gICAgaWYgKHJlcVdpZHRoID4gc2VlZC5sZW5ndGgpIHtcbiAgICAgIC8vIHNvIHNob3J0IHdlIHBhZFxuICAgICAgcmV0dXJuIEFycmF5KDEgKyAocmVxV2lkdGggLSBzZWVkLmxlbmd0aCkpLmpvaW4oJzAnKSArIHNlZWRcbiAgICB9XG4gICAgcmV0dXJuIHNlZWRcbiAgfVxuXG4gIHZhciAkZ2xvYmFsID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogR0xPQkFMKVxuICAkZ2xvYmFsLiRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cyB8fCB7fVxuICB2YXIgJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzXG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fVxuXG4gIGlmICghJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQpIHtcbiAgICAvLyBpbml0IHNlZWQgd2l0aCBiaWcgcmFuZG9tIGludFxuICAgICRsb2N1dHVzLnBocC51bmlxaWRTZWVkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMHg3NWJjZDE1KVxuICB9XG4gICRsb2N1dHVzLnBocC51bmlxaWRTZWVkKytcblxuICAvLyBzdGFydCB3aXRoIHByZWZpeCwgYWRkIGN1cnJlbnQgbWlsbGlzZWNvbmRzIGhleCBzdHJpbmdcbiAgcmV0SWQgPSBwcmVmaXhcbiAgcmV0SWQgKz0gX2Zvcm1hdFNlZWQocGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwLCAxMCksIDgpXG4gIC8vIGFkZCBzZWVkIGhleCBzdHJpbmdcbiAgcmV0SWQgKz0gX2Zvcm1hdFNlZWQoJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQsIDUpXG4gIGlmIChtb3JlRW50cm9weSkge1xuICAgIC8vIGZvciBtb3JlIGVudHJvcHkgd2UgYWRkIGEgZmxvYXQgbG93ZXIgdG8gMTBcbiAgICByZXRJZCArPSAoTWF0aC5yYW5kb20oKSAqIDEwKS50b0ZpeGVkKDgpLnRvU3RyaW5nKClcbiAgfVxuXG4gIHJldHVybiByZXRJZFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy91bmlxaWQuanNcbiAqKi8iLCJjbGFzcyBEYXRhUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvcihjbGFzc05hbWUsIHByb3ZpZGVkS2V5cykge1xuICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIHRoaXMucHJvdmlkZWRLZXlzID0gcHJvdmlkZWRLZXlzO1xuICAgIHRoaXMuYXNzb2NpYXRpb25zID0ge307XG4gICAgdGhpcy5hc3NvY2lhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7RWRpdGFibGV9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGVkaXRhYmxlKCkge1xuICAgIHJldHVybiB3aW5kb3cuRnJvbnRlbmRNb25zdGVyLlZpc3VhbEZyYW1lLmVkaXRhYmxlO1xuICB9XG5cbiAgYXNzb2NpYXRlKCkge1xuICAgIHRoaXMuYXNzb2NpYXRpb25zID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5wcm92aWRlZEtleXMpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMucHJvdmlkZWRLZXlzW3JlZ2lvbktleV07XG4gICAgICBjb25zdCAkcmVnaW9uID0gJChgW2RhdGEtcmVnaW9uLWtleT1cIiR7cmVnaW9uS2V5fVwiXWApLmZpcnN0KCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgJWNSZWdpb246ICR7cmVnaW9uS2V5fWAsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogYm9sZDsgYmFja2dyb3VuZDogIzMzMycpO1xuICAgICAgLy8gY29uc29sZS5sb2cocmVnaW9uKTtcbiAgICAgIGNvbnN0IG1hdGVyaWFscyA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMocmVnaW9uKS5mb3JFYWNoKG1hdGVyaWFsS2V5ID0+IHtcbiAgICAgICAgY29uc3QgZGF0YUtleXMgPSByZWdpb25bbWF0ZXJpYWxLZXldO1xuICAgICAgICBjb25zdCAkbWF0ZXJpYWwgPSAkcmVnaW9uLmZpbmQoYFtkYXRhLW1hdGVyaWFsLWluZGV4PVwiJHttYXRlcmlhbEtleX1cIl1gKS5maXJzdCgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgJWNNYXRlcmlhbDogJHttYXRlcmlhbEtleX1gLCAnY29sb3I6ICNmZmY7IGZvbnQtd2VpZ2h0OiBib2xkOyBiYWNrZ3JvdW5kOiAjNjlmJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCRtYXRlcmlhbCk7XG4gICAgICAgIGlmICgkbWF0ZXJpYWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG1hdGVyaWFsc1ttYXRlcmlhbEtleV0gPSB7XG4gICAgICAgICAgZGF0YUtleXMsXG4gICAgICAgICAgJG1hdGVyaWFsLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBtYXRlcmlhbEVkaXRhYmxlS2V5cyA9ICRtYXRlcmlhbC5kYXRhKCdlZGl0YWJsZUtleXMnKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplTWF0ZXJpYWxFZGl0KG1hdGVyaWFsRWRpdGFibGVLZXlzLCAkbWF0ZXJpYWwsIGRhdGFLZXlzKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hc3NvY2lhdGlvbnNbcmVnaW9uS2V5XSA9IHtcbiAgICAgICAgJHJlZ2lvbixcbiAgICAgICAgbWF0ZXJpYWxzLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpemVNYXRlcmlhbEVkaXQobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRyb290LCBkYXRhS2V5cywgcHJlZml4ID0gJycpIHtcbiAgICBkYXRhS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBvYmogPSBtYXRlcmlhbEVkaXRhYmxlS2V5c1trZXldIHx8ICdOT19TVUNIX0tFWSc7XG4gICAgICBpZiAob2JqID09PSAnTk9fU1VDSF9LRVknKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvYmogPT09IE9iamVjdChvYmopKSB7XG4gICAgICAgIC8vIGl0J3MgcmVjdXJzaXZlXG4gICAgICAgIC8vIGZpcnN0IC0gZmluZCBhbGwgYmxvY2tzXG4gICAgICAgIGNvbnN0ICRibG9ja3MgPSAkcm9vdC5maW5kKGBbZGF0YS1yZWN1cnNpdmUtaXRlbT1cIiR7a2V5fVwiXWApO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICAkYmxvY2tzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYCVjIFJlY3Vyc2l2ZSBpdGVtICR7a2V5fSAjJHtjb3VudGVyfWAsICdiYWNrZ3JvdW5kOiAjMjIyOyBjb2xvcjogI2JhZGE1NScpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAgIHRoYXQuaW5pdGlhbGl6ZU1hdGVyaWFsRWRpdChvYmosICR0aGlzLCBPYmplY3Qua2V5cyhvYmopLCAnaXRlbS4nKTtcbiAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaXQncyBwbGFpbiBmaWVsZFxuICAgICAgICBjb25zdCAkbm9kZSA9ICRyb290LmZpbmQoYFtkYXRhLWVkaXRhYmxlLWtleT1cIiR7cHJlZml4fSR7a2V5fVwiXWApLmZpcnN0KCk7XG4gICAgICAgIGlmICgkbm9kZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgRGF0YVByb3ZpZGVyLmVkaXRhYmxlLmluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAlYyBQbGFpbiBmaWVsZCBlZGl0YWJsZSAke3ByZWZpeH0ke2tleX1gLCAnYmFja2dyb3VuZDogIzIyMjsgY29sb3I6ICNiYWRhNTUnKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJG5vZGVbMF0ub3V0ZXJIVE1MKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgc2VyaWFsaXplS2V5cygpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmFzc29jaWF0aW9ucykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgY29uc3QgcmVnaW9uID0gdGhpcy5hc3NvY2lhdGlvbnNbcmVnaW9uS2V5XTtcbiAgICAgIGNvbnN0ICRyZWdpb24gPSByZWdpb24uJHJlZ2lvbjtcbiAgICAgIHJlc3VsdFtyZWdpb25LZXldID0ge307XG4gICAgICBPYmplY3Qua2V5cyhyZWdpb24ubWF0ZXJpYWxzKS5mb3JFYWNoKG1hdGVyaWFsS2V5ID0+IHtcbiAgICAgICAgY29uc3QgZGF0YUtleXMgPSByZWdpb24ubWF0ZXJpYWxzW21hdGVyaWFsS2V5XS5kYXRhS2V5cztcbiAgICAgICAgY29uc3QgJG1hdGVyaWFsID0gcmVnaW9uLm1hdGVyaWFsc1ttYXRlcmlhbEtleV0uJG1hdGVyaWFsO1xuICAgICAgICByZXN1bHRbcmVnaW9uS2V5XVttYXRlcmlhbEtleV0gPSB0aGlzLnNlcmlhbGl6ZU1hdGVyaWFsKFxuICAgICAgICAgIHJlZ2lvbktleSxcbiAgICAgICAgICBtYXRlcmlhbEtleSxcbiAgICAgICAgICBkYXRhS2V5cyxcbiAgICAgICAgICAkcmVnaW9uLFxuICAgICAgICAgICRtYXRlcmlhbFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NOYW1lLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuZmlsbENvbmZpZyhkYXRhKTtcbiAgfVxuXG4gIGZpbGxDb25maWcoZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgc2VyaWFsaXplTWF0ZXJpYWwocmVnaW9uS2V5LCBtYXRlcmlhbEtleSwgZGF0YUtleXMsICRyZWdpb24sICRtYXRlcmlhbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFQcm92aWRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRGF0YVByb3ZpZGVyLmpzXG4gKiovIiwiaW1wb3J0IFN0YXRpY0NvbnRlbnQgZnJvbSAnLi9wcm92aWRlcnMvU3RhdGljQ29udGVudCc7XG5cbmNsYXNzIERhdGFQcm92aWRlckZhY3Rvcnkge1xuICBzdGF0aWMgZmFjdG9yeShwcm92aWRlckRlY2wsIHByb3ZpZGVkS2V5cykge1xuICAgIGxldCBwcm92aWRlciA9IG51bGw7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gcHJvdmlkZXJEZWNsLmNsYXNzTmFtZVxuICAgICAgfHwgJ0RvdFBsYW50XFxcXE1vbnN0ZXJcXFxcRGF0YUVudGl0eVxcXFxTdGF0aWNDb250ZW50UHJvdmlkZXInO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICBjYXNlICdEb3RQbGFudFxcXFxNb25zdGVyXFxcXERhdGFFbnRpdHlcXFxcU3RhdGljQ29udGVudFByb3ZpZGVyJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHByb3ZpZGVyID0gbmV3IFN0YXRpY0NvbnRlbnQocHJvdmlkZWRLZXlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3ZpZGVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFQcm92aWRlckZhY3Rvcnk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlckZhY3RvcnkuanNcbiAqKi8iLCJpbXBvcnQgYWxsRWRpdGFibGVzIGZyb20gJy4vZWRpdGFibGVzL2FsbCc7XG5cbmNsYXNzIEVkaXRhYmxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lZGl0YWJsZXNCeVR5cGUgPSB7fTtcbiAgICAvLyBpbml0aWFsaXplIGJhc2UgYnVpbGQtaW4gZWRpdGFibGVzXG4gICAgYWxsRWRpdGFibGVzKCk7XG4gICAgdGhpcy5lZGl0YWJsZXNCeVR5cGUgPSB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVM7XG4gIH1cblxuICBzZXJpYWxpemVFZGl0YWJsZSgkbm9kZSkge1xuICAgIGNvbnN0IGVkaXRhYmxlID0gJG5vZGUuZGF0YSgnZWRpdGFibGVQYXJhbXMnKTtcbiAgICBpZiAodHlwZW9mKGVkaXRhYmxlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHR5cGUgPSBlZGl0YWJsZS5oYXNPd25Qcm9wZXJ0eSgndHlwZScpID8gZWRpdGFibGUudHlwZSA6ICdzdHJpbmcnO1xuICAgIGlmICh0aGlzLmVkaXRhYmxlc0J5VHlwZS5oYXNPd25Qcm9wZXJ0eSh0eXBlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHR5cGUgPSAnc3RyaW5nJztcbiAgICB9XG5cbiAgICBjb25zdCBleHBvcnRWYXJpYWJsZSA9IGVkaXRhYmxlLmhhc093blByb3BlcnR5KCd0YXJnZXQnKSA/IGVkaXRhYmxlLnRhcmdldCA6ICdkYXRhJztcblxuICAgIHJldHVybiB0aGlzLmVkaXRhYmxlc0J5VHlwZVt0eXBlXS5zZXJpYWxpemVOb2RlKCRub2RlLCBleHBvcnRWYXJpYWJsZSk7XG4gIH1cblxuICBpbml0aWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBjb25zdCB0eXBlID0gJG5vZGUuZGF0YSgnZWRpdGFibGUtdHlwZScpIHx8ICd1bmVkaXRhYmxlJztcbiAgICBpZiAodHlwZSA9PT0gJ3VuZWRpdGFibGUnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0YWJsZSA9IHRoaXMuZWRpdGFibGVzQnlUeXBlW3R5cGVdIHx8IHRoaXMuZWRpdGFibGVzQnlUeXBlLnN0cmluZztcbiAgICByZXR1cm4gZWRpdGFibGUuaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0YWJsZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRWRpdGFibGUuanNcbiAqKi8iLCJjbGFzcyBIYXNoQXBpIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5mdW5jdGlvbkNhbGxzID0ge307XG5cbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaGFzaCkge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGRvY3VtZW50LmxvY2F0aW9uLmhhc2gubWF0Y2goLyNoYXNoQXBpOiguKj8pOlxcL2hhc2hBcGkvKTtcbiAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGNvbnN0IGZ1bmN0aW9uQ2FsbHMgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGZ1bmN0aW9uQ2FsbHMpIHtcbiAgICAgICAgICBpZiAoaXRlbS5mdW5jKSB7XG4gICAgICAgICAgICB0aGlzLmZ1bmN0aW9uQ2FsbHNbaXRlbS5mdW5jXSA9IGl0ZW0uYXJncyB8fCB7fTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzaG91bGRDYWxsKGZ1bmMpIHtcbiAgICByZXR1cm4gdGhpcy5mdW5jdGlvbkNhbGxzW2Z1bmNdIHx8IGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhhc2hBcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanNcbiAqKi8iLCJpbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi9GcmFtZUFwaSc7XG5pbXBvcnQgdW5pcXVlSWQgZnJvbSAnLi8uLi91bmlxaWQnO1xuaW1wb3J0IERhdGFQcm92aWRlckZhY3RvcnkgZnJvbSAnLi9EYXRhUHJvdmlkZXJGYWN0b3J5JztcbmltcG9ydCBFZGl0YWJsZSBmcm9tICcuL0VkaXRhYmxlJztcblxuY2xhc3MgVmlzdWFsRnJhbWVcbntcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgRnJhbWVBcGkuYmluZE1lc3NhZ2VMaXN0ZW5lcih0aGlzKTtcbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YSA9IG51bGw7XG4gICAgLyogZ2xvYmFsIHdpbmRvdzpmYWxzZSAqL1xuICAgIHRoaXMucGFyZW50V2luZG93ID0gd2luZG93LnBhcmVudDtcbiAgICAvKiogQHZhciBGcm9udGVuZE1vbnN0ZXIgKi9cbiAgICB0aGlzLnBhcmVudE1vbnN0ZXIgPSB0aGlzLnBhcmVudFdpbmRvdy5Gcm9udGVuZE1vbnN0ZXI7XG4gICAgdGhpcy5wYXJlbnRCdWlsZGVyID0gdGhpcy5wYXJlbnRNb25zdGVyLmJ1aWxkZXI7XG4gICAgdGhpcy5jdXJyZW50TW9uc3RlckNvbnRlbnQgPSBmYWxzZTtcbiAgICB0aGlzLmVkaXRhYmxlID0gbmV3IEVkaXRhYmxlKCk7XG4gICAgdGhpcy5tYWtlSXRNb3ZlKCk7XG4gICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICAkKCgpID0+IHtcbiAgICAgIHRoaXMucGFyZW50QnVpbGRlci5wYWdlQ2hhbmdlZCgpO1xuICAgICAgdGhpcy5pbml0UHJvdmlkZXJzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5Nb25zdGVyRWRpdERhdGEgPSB3aW5kb3cuTU9OU1RFUl9FRElUX01PREVfREFUQTtcbiAgfVxuXG4gIGluaXRQcm92aWRlcnMoKSB7XG4gICAgdGhpcy5wcm92aWRlcnMgPSB7XG4gICAgICBsYXlvdXQ6IHRoaXMuZ2V0UHJvdmlkZXJzKHRoaXMuTW9uc3RlckVkaXREYXRhLmxheW91dCksXG4gICAgICB0ZW1wbGF0ZTogdGhpcy5nZXRQcm92aWRlcnModGhpcy5Nb25zdGVyRWRpdERhdGEudGVtcGxhdGUpLFxuICAgICAgZW50aXR5OiB0aGlzLmdldFByb3ZpZGVycyh0aGlzLk1vbnN0ZXJFZGl0RGF0YS5lbnRpdHkpLFxuICAgIH07XG4gIH1cblxuICBzZXQgcGFnZVN0cnVjdHVyZUpzb24odmFsdWUpIHtcbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHBhZ2VTdHJ1Y3R1cmVKc29uKCkge1xuICAgIHJldHVybiB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YTtcbiAgfVxuXG4gIGdldFByb3ZpZGVycyhhcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhhcnIucHJvdmlkZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBwcm92aWRlckRlY2wgPSBhcnIucHJvdmlkZXJzW2tleV07XG4gICAgICByZXN1bHRba2V5XSA9IERhdGFQcm92aWRlckZhY3RvcnkuZmFjdG9yeShcbiAgICAgICAgcHJvdmlkZXJEZWNsLFxuICAgICAgICBhcnIucHJvdmlkZWRLZXlzW2tleV0gfHwge31cbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldCAkbW9uc3RlckNvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGUpIHtcbiAgICAgIHJldHVybiB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hNb25zdGVyQ29udGVudENhY2hlKCk7XG4gICAgcmV0dXJuIHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGU7XG4gIH1cblxuICByZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpIHtcbiAgICB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlID0ge307XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgJCh0aGlzLnNldHRpbmdzWydtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InXSkuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgaWYgKCF0aGF0LmN1cnJlbnRNb25zdGVyQ29udGVudCkge1xuICAgICAgICB0aGF0LmN1cnJlbnRNb25zdGVyQ29udGVudCA9ICQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyk7XG4gICAgICB9XG4gICAgICB0aGF0LiRtb25zdGVyQ29udGVudENhY2hlWyQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyldID0gJCh0aGlzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUhhbmRsZXJzKCkge1xuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsICYmIHRoaXMuJGhhbmRsZXJzKSB7XG4gICAgICB0aGlzLiRoYW5kbGVycy5jc3MoXG4gICAgICAgICd0b3AnLFxuICAgICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLnBvc2l0aW9uKCkudG9wXG4gICAgICAgICAgKyB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLmhlaWdodCgpXG4gICAgICAgICAgLSB0aGlzLiRoYW5kbGVycy5oZWlnaHQoKVxuICAgICAgKTtcbiAgICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwuYWRkQ2xhc3MoJ20tbW9uc3Rlci1jb250ZW50X19tYXRlcmlhbC0tYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgbWFrZUl0TW92ZSgpIHtcbiAgICB0aGlzLiRoYW5kbGVycyA9ICQoYFxuPGRpdiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNcIj5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX2NvbmZpZ3VyZVwiPlxuICAgIDxpIGNsYXNzPVwiZmEgZmEtY29nXCI+PC9pPlxuICA8L2E+XG4gIDxzcGFuIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fYmxvY2stbmFtZVwiPkJsb2NrIG5hbWUgaGVyZTwvc3Bhbj5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtdXBcIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXVwXCI+PC9pPlxuICA8L2E+XG4gIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLWRvd25cIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvd25cIj48L2k+XG4gIDwvYT5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX2Nsb25lXCI+XG4gICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9uZVwiPjwvaT5cbiAgPC9hPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fcmVtb3ZlXCI+XG4gICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT5cbiAgPC9hPlxuPC9kaXY+YCk7XG4gICAgJCgnYm9keScpLmFwcGVuZCh0aGlzLiRoYW5kbGVycyk7XG4gICAgdGhpcy4kaGFuZGxlcnMuaGlkZSgpO1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICQodGhpcy5zZXR0aW5nc1snbW9uc3Rlci1jb250ZW50LXNlbGVjdG9yJ10pLm9uKHtcbiAgICAgIG1vdXNlZW50ZXI6IGZ1bmN0aW9uIGhvdmVySW4oKSB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ20tbW9uc3Rlci1jb250ZW50X19tYXRlcmlhbC0taGlnaGxpZ2h0ZWQnKTtcbiAgICAgIH0sXG4gICAgICBtb3VzZWxlYXZlOiBmdW5jdGlvbiBob3Zlck91dCgpIHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1oaWdobGlnaHRlZCcpO1xuICAgICAgfSxcbiAgICAgIGNsaWNrOiBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgdGhhdC5zZWxlY3RNYXRlcmlhbCgkdGhpcyk7XG4gICAgICB9LFxuICAgIH0sICdbZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICB0aGF0LiRoYW5kbGVyc1xuICAgICAgLm9uKCdjbGljaycsICcubW9uc3Rlci1ibG9jay1oYW5kbGVyc19fbW92ZS11cCcsICgpID0+IHtcbiAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICBjb25zdCAkcHJldiA9IHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwucHJldignW2RhdGEtaXMtbWF0ZXJpYWxdJyk7XG4gICAgICAgICAgaWYgKCRwcmV2Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5pbnNlcnRCZWZvcmUoJHByZXYpO1xuICAgICAgICAgICAgdGhhdC51cGRhdGVIYW5kbGVycygpO1xuICAgICAgICAgICAgdGhhdC5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLWRvd24nLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICAgICAgY29uc3QgJG5leHQgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLm5leHQoJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICAgICAgIGlmICgkbmV4dC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwuaW5zZXJ0QWZ0ZXIoJG5leHQpO1xuICAgICAgICAgICAgdGhhdC51cGRhdGVIYW5kbGVycygpO1xuICAgICAgICAgICAgdGhhdC5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19jbG9uZScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICBjb25zdCAkY2xvbmVkTWF0ZXJpYWwgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLmNsb25lKCk7XG4gICAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSB1bmlxdWVJZCgnbWF0Jyk7XG4gICAgICAgICAgJGNsb25lZE1hdGVyaWFsXG4gICAgICAgICAgICAuaW5zZXJ0QWZ0ZXIodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbClcbiAgICAgICAgICAgIC5kYXRhKFxuICAgICAgICAgICAgICAnbWF0ZXJpYWxJbmRleCcsXG4gICAgICAgICAgICAgIHJhbmRvbUluZGV4XG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXR0cignZGF0YS1tYXRlcmlhbC1pbmRleCcsIHJhbmRvbUluZGV4KTtcbiAgICAgICAgICB0aGF0LnNlbGVjdE1hdGVyaWFsKCRjbG9uZWRNYXRlcmlhbCk7XG4gICAgICAgICAgdGhhdC5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIG1hdGVyaWFsPycpKSB7XG4gICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCA9IG51bGw7XG4gICAgICAgICAgICB0aGF0LiRoYW5kbGVycy5oaWRlKCk7IC8vIGl0IGRvZXMgbm90IHdvcmsuIHdoeT8gTmVlZCB0byBmaXghXG4gICAgICAgICAgICB0aGF0LnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBzZWxlY3RNYXRlcmlhbCgkbWF0ZXJpYWwpIHtcbiAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCA9PT0gJG1hdGVyaWFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLnJlbW92ZUNsYXNzKCdtLW1vbnN0ZXItY29udGVudF9fbWF0ZXJpYWwtLWFjdGl2ZScpO1xuICAgIH1cbiAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsID0gJG1hdGVyaWFsO1xuICAgIHRoaXMudXBkYXRlSGFuZGxlcnMoKTtcbiAgICB0aGlzLiRoYW5kbGVycy5zaG93KCk7XG4gIH1cblxuICBzZXJpYWxpemVDb250ZW50KGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgT2JqZWN0LmtleXModGhpcy4kbW9uc3RlckNvbnRlbnQpLmZvckVhY2godW5pcXVlQ29udGVudElkID0+IHtcbiAgICAgIGNvbnN0ICRtb25zdGVyID0gdGhpcy4kbW9uc3RlckNvbnRlbnRbdW5pcXVlQ29udGVudElkXTtcbiAgICAgIHJlc3VsdFskbW9uc3Rlci5kYXRhKCd1bmlxdWVDb250ZW50SWQnKV0gPSB0aGF0LnNlcmlhbGl6ZVVuaXF1ZUNvbnRlbnQoJG1vbnN0ZXIpO1xuICAgIH0pO1xuICAgIHRoaXMuc2VuZFRvQnVpbGRlcihjYWxsYmFjaywgW3Jlc3VsdF0pO1xuICB9XG5cbiAgc2VyaWFsaXplVW5pcXVlQ29udGVudCgkbW9uc3RlckNvbnRlbnQpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICByZXN1bHQudW5pcXVlQ29udGVudElkID0gJG1vbnN0ZXJDb250ZW50LmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpO1xuICAgIHJlc3VsdC5tYXRlcmlhbHMgPSB7fTtcbiAgICAkbW9uc3RlckNvbnRlbnQuZmluZCgnW2RhdGEtaXMtbWF0ZXJpYWw9XFwnMVxcJ10nKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCBtYXRlcmlhbCA9IHt9O1xuICAgICAgbWF0ZXJpYWwuYmxvY2sgPSAkKHRoaXMpLmRhdGEoJ21hdGVyaWFsQmxvY2snKTtcbiAgICAgIHJlc3VsdC5tYXRlcmlhbHNbJCh0aGlzKS5kYXRhKCdtYXRlcmlhbEluZGV4JyldID0gbWF0ZXJpYWw7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIFZpc3VhbEZyYW1lIHNldHRpbmdzLlxuICAgKiBVc2VzIFZpc3VhbEZyYW1lU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuVmlzdWFsRnJhbWVTZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICdtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InOiAnLm0tbW9uc3Rlci1jb250ZW50X19jb250ZW50JyxcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHVzZXJTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgfVxuXG4gIHNlbmRUb0J1aWxkZXIoZnVuYywgYXJncykge1xuICAgIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMucGFyZW50V2luZG93LCBmdW5jLCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JtU3VibWl0KGRhdGEpIHtcbiAgICBjb25zdCAkZm9ybSA9ICQoJzxmb3JtIG1ldGhvZD1cIlBPU1RcIj48L2Zvcm0+Jyk7XG4gICAgY29uc3QgJGlucHV0ID0gJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX19qc29uXCI+Jyk7XG4gICAgY29uc3QgJGNzcmYgPSAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiPicpO1xuXG4gICAgJGNzcmZcbiAgICAgIC5hdHRyKCduYW1lJywgJCgnbWV0YVtuYW1lPWNzcmYtcGFyYW1dJykuYXR0cignY29udGVudCcpKVxuICAgICAgLnZhbCgkKCdtZXRhW25hbWU9Y3NyZi10b2tlbl0nKS5hdHRyKCdjb250ZW50JykpXG4gICAgICAuYXBwZW5kVG8oJGZvcm0pO1xuXG4gICAgJGlucHV0XG4gICAgICAudmFsKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgLmFwcGVuZFRvKCRmb3JtKTtcblxuICAgICRmb3JtWzBdLnN1Ym1pdCgpO1xuICB9XG5cbiAgY29uc3RydWN0VGVtcGxhdGVEYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm92aWRlcnNFbnRpdGllczogdGhpcy5wYXJlbnRCdWlsZGVyLnNlcmlhbGl6ZSgpLFxuICAgICAgcmVnaW9uc01hdGVyaWFsczogdGhpcy5wYXJlbnRCdWlsZGVyXG4gICAgICAgIC5lbnZpcm9ubWVudHMuZ2V0KCdwYWdlLXN0cnVjdHVyZScpLm1hdGVyaWFsc0J5UmVnaW9ucygpLFxuICAgIH07XG4gIH1cblxuICBuZXdCbG9jayhtYXRlcmlhbE5hbWUsIHJlZ2lvbk5hbWUpIHtcbiAgICAvLyBAdG9kbyBBZGQgbG9hZGVyIGhlcmUgYXMgd2UgYXJlIHVzaW5nIGZvcm0gcG9zdCAhXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSB1bmlxdWVJZCgnbWF0Jyk7XG4gICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgIHRlbXBsYXRlOiB0aGlzLmNvbnN0cnVjdFRlbXBsYXRlRGF0YSgpLFxuICAgICAgYWN0aW9uOiAncHJldmlldycsXG4gICAgfTtcbiAgICBpZiAobmV3RGF0YS50ZW1wbGF0ZS5yZWdpb25zTWF0ZXJpYWxzLmhhc093blByb3BlcnR5KHJlZ2lvbk5hbWUpID09PSBmYWxzZSkge1xuICAgICAgbmV3RGF0YS50ZW1wbGF0ZS5yZWdpb25zTWF0ZXJpYWxzW3JlZ2lvbk5hbWVdID0ge307XG4gICAgfVxuICAgIC8vIHdlIGFyZSBtb2RpZnlpbmcgdGVtcGxhdGUgZGF0YSBieSBhZGRpbmcgbmV3IG1hdGVyaWFsIGludG8gbmVlZGVkIHJlZ2lvblxuICAgIG5ld0RhdGEudGVtcGxhdGUucmVnaW9uc01hdGVyaWFsc1tyZWdpb25OYW1lXS5kZWNsW3JhbmRvbUluZGV4XSA9IHtcbiAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbE5hbWUsXG4gICAgfTtcbiAgICBuZXdEYXRhLnRlbXBsYXRlLnJlZ2lvbnNNYXRlcmlhbHNbcmVnaW9uTmFtZV0ubWF0ZXJpYWxzT3JkZXIucHVzaChyYW5kb21JbmRleCk7XG4gICAgVmlzdWFsRnJhbWUuZm9ybVN1Ym1pdChuZXdEYXRhKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuaXRlcmF0ZVRlbXBsYXRlVHlwZSh0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uKTtcbiAgICBkYXRhLmFjdGlvbiA9ICdzYXZlJztcbiAgICBkZWJ1Z2dlcjtcbiAgICBWaXN1YWxGcmFtZS5mb3JtU3VibWl0KGRhdGEpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGl0ZXJhdGVUZW1wbGF0ZVR5cGUoYXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgZW50aXR5OiB7XG4gICAgICAgIG1hdGVyaWFsc0J5UmVnaW9uRGVjbDoge30sXG4gICAgICAgIHByb3ZpZGVyczoge30sXG4gICAgICB9LFxuICAgIH07XG4gICAgYXJyLmZvckVhY2gob2JqID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IG9iai5kYXRhLmlkO1xuICAgICAgY29uc3QgcmVnaW9uc1Jlc3VsdCA9IFZpc3VhbEZyYW1lLml0ZXJhdGVUZW1wbGF0ZVJlZ2lvbnMob2JqLmNoaWxkcmVuKTtcbiAgICAgIC8vIGxheW91dCBvciB0ZW1wbGF0ZVxuICAgICAgcmVzdWx0W2tleV0gPSB7XG4gICAgICAgIHRlbXBsYXRlUmVnaW9uczogcmVnaW9uc1Jlc3VsdC50ZW1wbGF0ZVJlZ2lvbnMsXG4gICAgICAgIHRlbXBsYXRlSWQ6IG9iai5kYXRhLnRlbXBsYXRlSWQsXG4gICAgICAgIHByb3ZpZGVyczoge30sXG4gICAgICB9O1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHJlZ2lvbnNSZXN1bHQuZW50aXR5TWF0ZXJpYWxzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHJlZ2lvbnNSZXN1bHQuZW50aXR5TWF0ZXJpYWxzKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICAgICAgcmVzdWx0LmVudGl0eS5tYXRlcmlhbHNCeVJlZ2lvbkRlY2xbcmVnaW9uS2V5XSA9IHJlZ2lvbnNSZXN1bHQuZW50aXR5TWF0ZXJpYWxzW3JlZ2lvbktleV07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0W2tleV0ucHJvdmlkZXJzID0gdGhpcy5zZXJpYWxpemVQcm92aWRlcnMoa2V5KTtcbiAgICB9KTtcbiAgICByZXN1bHQuZW50aXR5LnByb3ZpZGVycyA9IHRoaXMuc2VyaWFsaXplUHJvdmlkZXJzKCdlbnRpdHknKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2VyaWFsaXplUHJvdmlkZXJzKHR5cGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnByb3ZpZGVyc1t0eXBlXSkuZm9yRWFjaChwcm92aWRlcktleSA9PiB7XG4gICAgICByZXN1bHRbcHJvdmlkZXJLZXldID0gdGhpcy5wcm92aWRlcnNbdHlwZV1bcHJvdmlkZXJLZXldLnNlcmlhbGl6ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgaXRlcmF0ZVRlbXBsYXRlUmVnaW9ucyhhcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnM6IHt9LFxuICAgICAgZW50aXR5TWF0ZXJpYWxzOiB7fSxcbiAgICB9O1xuICAgIGFyci5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAvLyBjb25zdCBrZXkgPSBvYmouZGF0YS5pZC5yZXBsYWNlKC9eLipcXC4vLCAnJyk7XG4gICAgICBjb25zdCByZWdpb25LZXkgPSBvYmouZGF0YS5yZWdpb25LZXk7XG4gICAgICBjb25zdCBlbnRpdHlEZXBlbmRlbnQgPSBvYmouZGF0YS5lbnRpdHlEZXBlbmRlbnQgfHwgZmFsc2U7XG5cbiAgICAgIGNvbnN0IHJlZ2lvbk1hdGVyaWFscyA9IFZpc3VhbEZyYW1lLml0ZXJhdGVNYXRlcmlhbHMob2JqLmNoaWxkcmVuLCByZWdpb25LZXkpO1xuXG4gICAgICBpZiAoZW50aXR5RGVwZW5kZW50ID09PSBmYWxzZSkge1xuICAgICAgICAvLyB0aGlzIGlzIGFuIGV4YWN0IHRlbXBsYXRlIHJlZ2lvblxuICAgICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zW3JlZ2lvbktleV0gPSB7XG4gICAgICAgICAgcmVnaW9uSWQ6IG9iai5kYXRhLnJlZ2lvbklkLFxuICAgICAgICAgIHJlZ2lvbktleSxcbiAgICAgICAgICB1bmlxdWVDb250ZW50SWQ6IG9iai5kYXRhLnVuaXF1ZUNvbnRlbnRJZCxcbiAgICAgICAgICBtYXRlcmlhbHNEZWNsczogcmVnaW9uTWF0ZXJpYWxzLFxuICAgICAgICAgIGVudGl0eURlcGVuZGVudCxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnNbcmVnaW9uS2V5XSA9IHtcbiAgICAgICAgICByZWdpb25JZDogb2JqLmRhdGEucmVnaW9uSWQsXG4gICAgICAgICAgcmVnaW9uS2V5LFxuICAgICAgICAgIHVuaXF1ZUNvbnRlbnRJZDogb2JqLmRhdGEudW5pcXVlQ29udGVudElkLFxuICAgICAgICAgIGVudGl0eURlcGVuZGVudCxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdGhpcyBpcyBlbnRpdHktZGVwZW5kZW50IHJlZ2lvblxuICAgICAgICByZXN1bHQuZW50aXR5TWF0ZXJpYWxzW3JlZ2lvbktleV0gPSByZWdpb25NYXRlcmlhbHM7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGl0ZXJhdGVNYXRlcmlhbHMoYXJyLCByZWdpb25LZXkpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBkZWNsOiB7fSxcbiAgICAgIG1hdGVyaWFsc09yZGVyOiBbXSxcbiAgICB9O1xuICAgIGFyci5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBvYmouZGF0YS5tYXRlcmlhbEluZGV4O1xuICAgICAgcmVzdWx0LmRlY2xba2V5XSA9IHtcbiAgICAgICAgLy8gZWRpdGFibGVzS2V5czogb2JqLmRhdGEuZWRpdGFibGVLZXlzLFxuICAgICAgICBtYXRlcmlhbDogb2JqLmRhdGEubWF0ZXJpYWxQYXRoLFxuICAgICAgfTtcbiAgICAgIHJlc3VsdC5tYXRlcmlhbHNPcmRlci5wdXNoKGtleSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaXN1YWxGcmFtZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgV1lTSVdZRyBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gQmFzZUVkaXRhYmxlLmZyYW1lJCgkbm9kZSk7XG4gICAgY29uc3QgZWRpdG9yID0gbm9kZS5kYXRhKCdlZGl0b3InKTtcbiAgICBpZiAoZWRpdG9yKSB7XG4gICAgICByZXR1cm4gZWRpdG9yLmdldERhdGEoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUuaHRtbCgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9ICRub2RlWzBdO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGF1dG9QYXJhZ3JhcGg6IGZhbHNlLFxuICAgICAgZW5hYmxlQ29udGVudEVkaXRhYmxlOiB0cnVlLFxuICAgICAgaWdub3JlRW1wdHlQYXJhZ3JhcGg6IHRydWUsXG4gICAgICBlbnRlck1vZGU6IHdpbmRvdy5DS0VESVRPUi5FTlRFUl9CUixcbiAgICB9O1xuICAgIC8vICQoKCkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gd2luZG93LkFsbG95RWRpdG9yLmVkaXRhYmxlKG5vZGUsIGNvbmZpZykuZ2V0KCduYXRpdmVFZGl0b3InKTtcbiAgICAgICRub2RlLmRhdGEoJ2VkaXRvcicsIGVkaXRvcik7XG4gICAgLy8gfSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBXWVNJV1lHO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvV1lTSVdZRy5qc1xuICoqLyIsImltcG9ydCBXWVNJV1lHIGZyb20gJy4vV1lTSVdZRyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICcuL2xpbmsnO1xuaW1wb3J0IFRleHRTdHJpbmcgZnJvbSAnLi9zdHJpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbGwoKSB7XG4gIGlmICh0eXBlb2Yod2luZG93Lk1PTlNURVJfRURJVEFCTEVTKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVMgPSB7fTtcbiAgfVxuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ3d5c2l3eWcnXSA9IG5ldyBXWVNJV1lHKCk7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snbGluayddID0gbmV3IExpbmsoKTtcbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWydpbWFnZSddID0gbmV3IEltYWdlKCk7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snc3RyaW5nJ10gPSBuZXcgVGV4dFN0cmluZygpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2FsbC5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBJbWFnZSBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICBjb25zdCAkaW1nID0gJG5vZGUuZmluZCgnaW1nJykuZmlyc3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3JjOiAkaW1nLmF0dHIoJ3NyYycpLFxuICAgICAgYWx0OiAkaW1nLmF0dHIoJ2FsdCcpLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9pbWFnZS5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiAkbm9kZS5kYXRhKCdvcmlnaW5hbEhyZWYnKSA/ICRub2RlLmRhdGEoJ29yaWdpbmFsSHJlZicpIDogJG5vZGUuYXR0cignaHJlZicpLFxuICAgICAgYW5jaG9yOiAkbm9kZS5odG1sKCksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvbGluay5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBUZXh0U3RyaW5nIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBCYXNlRWRpdGFibGUuZnJhbWUkKCRub2RlKTtcbiAgICBjb25zdCBlZGl0b3IgPSBub2RlLmRhdGEoJ2VkaXRvcicpO1xuICAgIGlmIChlZGl0b3IpIHtcbiAgICAgIHJldHVybiBlZGl0b3IuZ2V0RGF0YSgpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZS5odG1sKCk7XG4gIH1cblxuICBpbml0aWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gJG5vZGVbMF07XG4gICAgLyogZ2xvYmFsIHdpbmRvdzpmYWxzZSAqL1xuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgYWxsb3dlZENvbnRlbnQ6ICdpIHUnLFxuICAgICAgdG9vbGJhcnM6IHtcbiAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgc2VsZWN0aW9uczogd2luZG93LkFsbG95RWRpdG9yLlNlbGVjdGlvbnMsXG4gICAgICAgICAgdGFiSW5kZXg6IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYXV0b1BhcmFncmFwaDogZmFsc2UsXG4gICAgICBlbmFibGVDb250ZW50RWRpdGFibGU6IHRydWUsXG4gICAgICBpZ25vcmVFbXB0eVBhcmFncmFwaDogdHJ1ZSxcbiAgICAgIGJsb2NrbGVzczogdHJ1ZSxcbiAgICAgIGVudGVyTW9kZTogd2luZG93LkNLRURJVE9SLkVOVEVSX0JSLFxuICAgIH07XG4gICAgLy8gJCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHdpbmRvdy5BbGxveUVkaXRvci5lZGl0YWJsZShub2RlLCBjb25maWcpLmdldCgnbmF0aXZlRWRpdG9yJyk7XG4gICAgICBlZGl0b3Iub24oJ2tleScsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQuZGF0YS5rZXlDb2RlID09PSB3aW5kb3cuQ0tFRElUT1IuU0hJRlQgKyAxMykge1xuICAgICAgICAgIC8vIGFkZCBzYXZpbmcgZnVuY3Rpb24gaGVyZVxuICAgICAgICAgIGV2ZW50LmNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGVkaXRvci5vbigncGFzdGUnLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LmRhdGEuZGF0YVZhbHVlID0gZXZlbnQuZGF0YS5kYXRhVmFsdWUucmVwbGFjZSgvPGJyW1xcc1xcL10qPi9nbWksICcgJyk7XG4gICAgICB9KTtcbiAgICAgICRub2RlLmRhdGEoJ2VkaXRvcicsIGVkaXRvcik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coJG5vZGUsIG5vZGUpO1xuICAgICAgLy8gdGhyb3cgZTtcbiAgICB9XG4gICAgLy8gfSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0U3RyaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvc3RyaW5nLmpzXG4gKiovIiwiaW1wb3J0IERhdGFQcm92aWRlciBmcm9tICcuLi9EYXRhUHJvdmlkZXInO1xuXG5jbGFzcyBTdGF0aWNDb250ZW50IGV4dGVuZHMgRGF0YVByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IocHJvdmlkZWRLZXlzKSB7XG4gICAgc3VwZXIoJ0RvdFBsYW50XFxcXE1vbnN0ZXJcXFxcRGF0YUVudGl0eVxcXFxTdGF0aWNDb250ZW50UHJvdmlkZXInLCBwcm92aWRlZEtleXMpO1xuICB9XG5cbiAgZmlsbENvbmZpZyhkYXRhKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGE7XG4gICAgbmV3RGF0YS5lbnRpdGllcyA9IHRoaXMuc2VyaWFsaXplS2V5cygpO1xuICAgIHJldHVybiBuZXdEYXRhO1xuICB9XG5cbiAgc2VyaWFsaXplTWF0ZXJpYWwocmVnaW9uS2V5LCBtYXRlcmlhbEtleSwgZGF0YUtleXMsICRyZWdpb24sICRtYXRlcmlhbCkge1xuICAgIGNvbnN0IG1hdGVyaWFsRWRpdGFibGVLZXlzID0gJG1hdGVyaWFsLmRhdGEoJ2VkaXRhYmxlS2V5cycpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucmVjdXJzaXZlU2VyaWFsaXplKG1hdGVyaWFsRWRpdGFibGVLZXlzLCAkbWF0ZXJpYWwsIGRhdGFLZXlzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmVjdXJzaXZlU2VyaWFsaXplKG1hdGVyaWFsRWRpdGFibGVLZXlzLCAkcm9vdCwgZGF0YUtleXMsIHByZWZpeCA9ICcnKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICBkYXRhS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBvYmogPSBtYXRlcmlhbEVkaXRhYmxlS2V5c1trZXldIHx8ICdOT19TVUNIX0tFWSc7XG4gICAgICBpZiAob2JqID09PSAnTk9fU1VDSF9LRVknKSB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob2JqID09PSBPYmplY3Qob2JqKSkge1xuICAgICAgICAvLyBpdCdzIHJlY3Vyc2l2ZVxuICAgICAgICAvLyBmaXJzdCAtIGZpbmQgYWxsIGJsb2Nrc1xuICAgICAgICBjb25zdCAkYmxvY2tzID0gJHJvb3QuZmluZChgW2RhdGEtcmVjdXJzaXZlLWl0ZW09XCIke2tleX1cIl1gKTtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBbXTtcbiAgICAgICAgJGJsb2Nrcy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgIHJlc3VsdFtrZXldLnB1c2godGhhdC5yZWN1cnNpdmVTZXJpYWxpemUob2JqLCAkdGhpcywgT2JqZWN0LmtleXMob2JqKSwgJ2l0ZW0uJykpO1xuICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpdCdzIHBsYWluIGZpZWxkXG4gICAgICAgIGNvbnN0ICRub2RlID0gJHJvb3QuZmluZChgW2RhdGEtZWRpdGFibGUta2V5PVwiJHtwcmVmaXh9JHtrZXl9XCJdYCkuZmlyc3QoKTtcbiAgICAgICAgaWYgKCRub2RlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgU2tpcHBlZCBbZGF0YS1lZGl0YWJsZS1rZXk9XCIke3ByZWZpeH0ke2tleX1cIl0gYXMgbm90IGZvdW5kYCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdFtrZXldID0gRGF0YVByb3ZpZGVyLmVkaXRhYmxlLnNlcmlhbGl6ZUVkaXRhYmxlKCRub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRpY0NvbnRlbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL3Byb3ZpZGVycy9TdGF0aWNDb250ZW50LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9