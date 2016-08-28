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
	      console.log(data);
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
	        throw e;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTM2ZGM3ZDkxODA0MzVhZGQ2NzYiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL0Jhc2VFZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9Gcm9udGVuZE1vbnN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXJGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0VkaXRhYmxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL1dZU0lXWUcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2FsbC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9wcm92aWRlcnMvU3RhdGljQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9idW5kbGUuY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkZyb250ZW5kTW9uc3RlciIsIkJhc2VFbnZpcm9ubWVudCIsInZpc3VhbEJ1aWxkZXIiLCJuYW1lIiwidGFyZ2V0IiwiJCIsInNldHRpbmdzIiwiY29udGVudFdpbmRvdyIsImN1cnJlbnRFbnZpcm9ubWVudCIsImVudmlyb25tZW50cyIsImdldCIsImRlYWN0aXZhdGUiLCJjbGVhclN0YWNrYWJsZSIsImZ1bmMiLCJhcmdzIiwic2VuZE1lc3NhZ2UiLCJCYXNlRWRpdGFibGUiLCIkbm9kZSIsIkZyYW1lQXBpIiwibGlzdGVuZXIiLCJjYWxsYmFjayIsImNhbGxiYWNrSGFuZGxlciIsImV2ZW50IiwibWVzc2FnZSIsImlzSWUiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiYXBwbHkiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJzdHJpbmdpZnkiLCJwb3N0TWVzc2FnZSIsImlzIiwiaWUiLCJwYXJhbXMiLCJ2aXN1YWxCdWxkZXIiLCJoYXNoQXBpIiwicGFyZW50IiwiaGFzQnVpbGRlciIsIlZpc3VhbEZyYW1lIiwic21vb3RoU2Nyb2xsIiwiaW5pdCIsInVzZXJTZXR0aW5ncyIsIkZyb250ZW5kTW9uc3RlclNldHRpbmdzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJidWlsZGVyIiwiJGJ1aWxkZXIiLCJsZW5ndGgiLCJWaXN1YWxCdWlsZGVyIiwicmVzb2x1dGlvblN3aXRjaGVyIiwiTWFwIiwiZW52aXJvbm1lbnRTZWxlY3RvciIsInN3aXRjaEVudmlyb25tZW50IiwiZmlyc3QiLCJtb2QiLCJiaW5kTWVzc2FnZUxpc3RlbmVyIiwiY29udHJvbHMiLCJWaXN1YWxCdWlsZGVyU2V0dGluZ3MiLCJidW5kbGVzIiwiJHN0YWNrYWJsZSIsInRoYXQiLCJiZW1FbGVtIiwiYWN0aXZlTW9kaWZpZXIiLCIkcmVzb2x1dGlvbkxpbmtzIiwiY2xpY2siLCJyZW1vdmVDbGFzcyIsIndpZHRoIiwiYWRkQ2xhc3MiLCIkc2VjdGlvbkxpbmtzIiwiZW52aXJvbm1lbnROYW1lIiwiYWN0aXZhdGUiLCJlbXB0eSIsInBhbmVDbGFzcyIsIm1vZGlmaWVyIiwiZmluZCIsIiRuZXdQYW5lIiwiYXBwZW5kIiwibWF0ZXJpYWxzIiwiaGFzT3duUHJvcGVydHkiLCJyZXN1bHQiLCJzZXJpYWxpemVQYWdlIiwiY29uc29sZSIsImxvZyIsInJlc3VsdEJ5UHJvdmlkZXJzIiwicHJvdmlkZWRLZXlzIiwiZnJhbWVDb250ZW50V2luZG93IiwiTU9OU1RFUl9FRElUX01PREVfREFUQSIsInRlbXBsYXRlIiwicHJvdmlkZXJJbmRleCIsInJlZ2lvbnMiLCJyZWdpb25LZXkiLCJtYXRlcmlhbEluZGV4IiwiZGF0YUtleXMiLCJlbnZpcm9ubWVudCIsInBhZ2VDaGFuZ2VkIiwiJGNvbnRyb2xzIiwiZWxlbSIsImxvY2F0aW9uIiwicmVsb2FkIiwiQWN0aW9uRW52aXJvbm1lbnQiLCJDdXN0b21pemF0aW9uRW52aXJvbm1lbnQiLCJNYXRlcmlhbHNFbnZpcm9ubWVudCIsImluaXRNYXRlcmlhbHNTZWxlY3RvciIsIiRtYXRlcmlhbHNHcm91cHMiLCIkbWF0ZXJpYWxzTGlzdCIsImkxOG5CdW5kbGVOYW1lIiwicG9seWdsb3QiLCJ0IiwiYnVuZGxlIiwiJGJ1bmRsZVRpdGxlIiwiZnVsbFBhdGgiLCJwdXNoIiwiZ3JvdXBzIiwiZ3JvdXBOYW1lIiwiZ3JvdXAiLCJpMThuR3JvdXBOYW1lIiwiJGxpIiwiJGxpc3QiLCJpdGVtcyIsIm1hdGVyaWFsTmFtZSIsIm1hdGVyaWFsIiwiaTE4bk1hdGVyaWFsTmFtZSIsIiRpdGVtIiwiZG9jdW1lbnQiLCJvbiIsImNsaWNrSGFuZGxlciIsIiR0aGlzIiwidG9nZ2xlTW9kIiwiZ3JvdXBQYXRoIiwibWF0ZXJpYWxzTGlzdEFjdGl2ZUNsYXNzIiwiZWFjaCIsIml0IiwiaGFzQ2xhc3MiLCIkbWF0ZXJpYWxzUGFuZSIsInNob3ciLCJoaWRlIiwiJGdyb3Vwc1BhbmUiLCJjcmVhdGVTdGFja2FibGVQYW5lIiwiUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IiwiaW5pdFBhZ2VTdHJ1Y3R1cmVFbGVtZW50IiwiZWRpdE1vZGVEYXRhIiwiJHBhZ2VTdHJ1Y3R1cmUiLCIkc3RydWN0dXJlUGFuZSIsImpzdHJlZSIsImxheW91dCIsImxheW91dEl0ZW0iLCJpZCIsInRlbXBsYXRlSWQiLCJ0ZXh0IiwiaWNvbiIsInN0YXRlIiwib3BlbmVkIiwiY2hpbGRyZW4iLCJ0ZW1wbGF0ZUl0ZW0iLCIkbGF5b3V0UmVnaW9ucyIsInRhcmdldCQiLCJpdGVyIiwicHJvY2Vzc0xheW91dCIsIml0ZW0iLCJ0ZW1wbGF0ZVJlZ2lvbnMiLCJyZWdpb24iLCJwYWdlU3RydWN0dXJlIiwiY29yZSIsInRoZW1lcyIsInBsdWdpbnMiLCJ0eXBlcyIsInRlbXBsYXRlUmVnaW9uIiwiY29udGVudFRlbXBsYXRlUmVnaW9uIiwianN0cmVlT2JqIiwicGFnZVN0cnVjdHVyZUpzb24iLCJnZXRfanNvbiIsIm5vX3N0YXRlIiwibm9faWQiLCJub19saV9hdHRyIiwibm9fYV9hdHRyIiwicmVnaW9uc1N0cnVjdHVyZSIsInNlcmlhbGl6ZSIsIm1hdGVyaWFsc0RlY2wiLCIkbGF5b3V0UmVnaW9uIiwiZXh0cmFjdFJlZ2lvbkRhdGEiLCIkbGF5b3V0TWF0ZXJpYWxzIiwiJGxheW91dE1hdGVyaWFsIiwicHJvY2Vzc0xheW91dE1hdGVyaWFsIiwibGF5b3V0TWF0ZXJpYWxJdGVtIiwibGF5b3V0TWF0ZXJpYWwiLCJwcmVmaXgiLCJtYXRlcmlhbFBhdGgiLCJ0eXBlIiwiZWRpdGFibGVLZXlzIiwibm9kZSIsIiRyZWdpb25zIiwicHJvY2Vzc1RlbXBsYXRlUmVnaW9uIiwiaXNDb250ZW50IiwiJHRlbXBsYXRlUmVnaW9uIiwiZW50aXR5RGVwZW5kZW50IiwiJHJlZ2lvbk1hdGVyaWFscyIsInByb2Nlc3NUZW1wbGF0ZVJlZ2lvbk1hdGVyaWFsIiwiJHJlZ2lvbk1hdGVyaWFsIiwicmVnaW9uSWQiLCJ1bmlxdWVDb250ZW50SWQiLCJTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwidW5pcWlkIiwibW9yZUVudHJvcHkiLCJyZXRJZCIsIl9mb3JtYXRTZWVkIiwic2VlZCIsInJlcVdpZHRoIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsInNsaWNlIiwiQXJyYXkiLCJqb2luIiwiJGdsb2JhbCIsIkdMT0JBTCIsIiRsb2N1dHVzIiwicGhwIiwidW5pcWlkU2VlZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIkRhdGUiLCJnZXRUaW1lIiwidG9GaXhlZCIsIkRhdGFQcm92aWRlciIsImNsYXNzTmFtZSIsImFzc29jaWF0aW9ucyIsImFzc29jaWF0ZSIsIiRyZWdpb24iLCJtYXRlcmlhbEtleSIsIiRtYXRlcmlhbCIsIm1hdGVyaWFsRWRpdGFibGVLZXlzIiwiaW5pdGlhbGl6ZU1hdGVyaWFsRWRpdCIsIiRyb290Iiwib2JqIiwiJGJsb2NrcyIsImNvdW50ZXIiLCJlZGl0YWJsZSIsImluaXRpYWxpemVFZGl0YWJsZSIsInNlcmlhbGl6ZU1hdGVyaWFsIiwiY2xhc3MiLCJmaWxsQ29uZmlnIiwiRGF0YVByb3ZpZGVyRmFjdG9yeSIsInByb3ZpZGVyRGVjbCIsInByb3ZpZGVyIiwiRWRpdGFibGUiLCJlZGl0YWJsZXNCeVR5cGUiLCJNT05TVEVSX0VESVRBQkxFUyIsImV4cG9ydFZhcmlhYmxlIiwic2VyaWFsaXplTm9kZSIsInN0cmluZyIsIkhhc2hBcGkiLCJmdW5jdGlvbkNhbGxzIiwiaGFzaCIsIm1hdGNoZXMiLCJtYXRjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsImluaXRpYWxpemUiLCJwYWdlU3RydWN0dXJlSnNvbkRhdGEiLCJwYXJlbnRXaW5kb3ciLCJwYXJlbnRNb25zdGVyIiwicGFyZW50QnVpbGRlciIsImN1cnJlbnRNb25zdGVyQ29udGVudCIsIm1ha2VJdE1vdmUiLCJyZXNpemUiLCJ1cGRhdGVIYW5kbGVycyIsImluaXRQcm92aWRlcnMiLCJNb25zdGVyRWRpdERhdGEiLCJwcm92aWRlcnMiLCJnZXRQcm92aWRlcnMiLCJlbnRpdHkiLCJhcnIiLCJmYWN0b3J5IiwiJG1vbnN0ZXJDb250ZW50Q2FjaGUiLCIkc2VsZWN0ZWRNYXRlcmlhbCIsIiRoYW5kbGVycyIsImNzcyIsInBvc2l0aW9uIiwidG9wIiwiaGVpZ2h0IiwibW91c2VlbnRlciIsImhvdmVySW4iLCJtb3VzZWxlYXZlIiwiaG92ZXJPdXQiLCJzZWxlY3RNYXRlcmlhbCIsIiRwcmV2IiwicHJldiIsImluc2VydEJlZm9yZSIsIiRuZXh0IiwibmV4dCIsImluc2VydEFmdGVyIiwiJGNsb25lZE1hdGVyaWFsIiwiY2xvbmUiLCJyYW5kb21JbmRleCIsImF0dHIiLCJjb25maXJtIiwicmVtb3ZlIiwiJG1vbnN0ZXJDb250ZW50IiwiJG1vbnN0ZXIiLCJzZXJpYWxpemVVbmlxdWVDb250ZW50Iiwic2VuZFRvQnVpbGRlciIsImJsb2NrIiwiVmlzdWFsRnJhbWVTZXR0aW5ncyIsInByb3ZpZGVyc0VudGl0aWVzIiwicmVnaW9uc01hdGVyaWFscyIsIm1hdGVyaWFsc0J5UmVnaW9ucyIsInJlZ2lvbk5hbWUiLCJuZXdEYXRhIiwiY29uc3RydWN0VGVtcGxhdGVEYXRhIiwiYWN0aW9uIiwiZGVjbCIsIm1hdGVyaWFsc09yZGVyIiwiZm9ybVN1Ym1pdCIsIml0ZXJhdGVUZW1wbGF0ZVR5cGUiLCJtYXRlcmlhbHNCeVJlZ2lvbkRlY2wiLCJyZWdpb25zUmVzdWx0IiwiaXRlcmF0ZVRlbXBsYXRlUmVnaW9ucyIsImVudGl0eU1hdGVyaWFscyIsInNlcmlhbGl6ZVByb3ZpZGVycyIsInByb3ZpZGVyS2V5IiwidmFsdWUiLCJyZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSIsIiRmb3JtIiwiJGlucHV0IiwiJGNzcmYiLCJ2YWwiLCJhcHBlbmRUbyIsInN1Ym1pdCIsInJlZ2lvbk1hdGVyaWFscyIsIml0ZXJhdGVNYXRlcmlhbHMiLCJtYXRlcmlhbHNEZWNscyIsIldZU0lXWUciLCJmcmFtZSQiLCJlZGl0b3IiLCJnZXREYXRhIiwiaHRtbCIsImNvbmZpZyIsImF1dG9QYXJhZ3JhcGgiLCJlbmFibGVDb250ZW50RWRpdGFibGUiLCJpZ25vcmVFbXB0eVBhcmFncmFwaCIsImVudGVyTW9kZSIsIkNLRURJVE9SIiwiRU5URVJfQlIiLCJBbGxveUVkaXRvciIsImFsbCIsIkltYWdlIiwiJGltZyIsInNyYyIsImFsdCIsIkxpbmsiLCJocmVmIiwiYW5jaG9yIiwiVGV4dFN0cmluZyIsImFsbG93ZWRDb250ZW50IiwidG9vbGJhcnMiLCJzdHlsZXMiLCJzZWxlY3Rpb25zIiwiU2VsZWN0aW9ucyIsInRhYkluZGV4IiwiYmxvY2tsZXNzIiwia2V5Q29kZSIsIlNISUZUIiwiY2FuY2VsIiwiZGF0YVZhbHVlIiwicmVwbGFjZSIsImUiLCJTdGF0aWNDb250ZW50IiwiZW50aXRpZXMiLCJzZXJpYWxpemVLZXlzIiwicmVjdXJzaXZlU2VyaWFsaXplIiwic2VyaWFsaXplRWRpdGFibGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7O0FBRUE7Ozs7OztBQUVBQSxRQUFPQyxlQUFQLEdBQXlCLCtCQUF6QjtBQUNBLEc7Ozs7Ozs7Ozs7Ozs7O0FDTEE7Ozs7Ozs7O0tBRU1DLGU7QUFDSiw0QkFBWUMsYUFBWixFQUEyQkMsSUFBM0IsRUFBaUM7QUFBQTs7QUFDL0IsVUFBS0QsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxNQUFMLEdBQWNDLEVBQUUsS0FBS0gsYUFBTCxDQUFtQkksUUFBbkIsQ0FBNEIsZ0JBQTVCLENBQUYsRUFBaUQsQ0FBakQsRUFBb0RDLGFBQWxFO0FBQ0Q7Ozs7Z0NBRVU7QUFDVDtBQUNBLFdBQUksS0FBS0osSUFBTCxLQUFjLEtBQUtELGFBQUwsQ0FBbUJNLGtCQUFyQyxFQUF5RDtBQUN2RDtBQUNEO0FB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LGVBQUl4QyxNQUFNa0MsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN0QjtBQUNEO0FBQ0RnQyxrQkFBT25DLEdBQVAsSUFBYyx1QkFBYWtNLFFBQWIsQ0FBc0JxSSxpQkFBdEIsQ0FBd0N0VyxLQUF4QyxDQUFkO0FBQ0Q7QUFDRixRQXpCRDtBQTBCQSxjQUFPa0UsTUFBUDtBQUNEOzs7Ozs7bUJBR1lnUyxhOzs7Ozs7OztBQ25EZiwwQyIsImZpbGUiOiJ2aXN1YWwtYnVpbGRlci9zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA1MzZkYzdkOTE4MDQzNWFkZDY3NlxuICoqLyIsImltcG9ydCAnLi9idW5kbGUuY3NzJztcblxuaW1wb3J0IEZyb250ZW5kTW9uc3RlciBmcm9tICcuL0Zyb250ZW5kTW9uc3Rlcic7XG5cbndpbmRvdy5Gcm9udGVuZE1vbnN0ZXIgPSBuZXcgRnJvbnRlbmRNb25zdGVyKCk7XG4vL1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzXG4gKiovIiwiaW1wb3J0IEZyYW1lQXBpIGZyb20gJy4vLi4vdmlzdWFsLWZyYW1lL0ZyYW1lQXBpJztcblxuY2xhc3MgQmFzZUVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IodmlzdWFsQnVpbGRlciwgbmFtZSkge1xuICAgIHRoaXMudmlzdWFsQnVpbGRlciA9IHZpc3VhbEJ1aWxkZXI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhcmdldCA9ICQodGhpcy52aXN1YWxCdWlsZGVyLnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKVswXS5jb250ZW50V2luZG93O1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgLy8gZGVhY3RpdmF0ZSBjdXJyZW50IHNlbGVjdGVkIGVudmlyb25tZW50XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gdGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkge1xuICAgICAgdGhpcy52aXN1YWxCdWlsZGVyLmVudmlyb25tZW50cy5nZXQodGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkuZGVhY3RpdmF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0YXJnZXQkKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldC4kO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIuY2xlYXJTdGFja2FibGUoKTtcbiAgfVxuXG4gIHNlbmRNZXNzYWdlKGZ1bmMsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy50YXJnZXQsIGZ1bmMsIGFyZ3MpO1xuICB9XG5cbiAgcGFnZUNoYW5nZWQoKSB7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlRW52aXJvbm1lbnQ7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL0Jhc2VFbnZpcm9ubWVudC5qc1xuICoqLyIsImNsYXNzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcblxuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBnZXQgZnJhbWUkKCkge1xuICAgIHJldHVybiB3aW5kb3cuJDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlRWRpdGFibGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvQmFzZUVkaXRhYmxlLmpzXG4gKiovIiwiY2xhc3MgRnJhbWVBcGkge1xuICBzdGF0aWMgZ2V0IGlzSWUoKSB7XG4gICAgLyogZ2xvYmFsIGlzICovXG4gICAgaWYgKHR5cGVvZihpcykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gaXMuaWUoKTsvLyB8fCBpcy5lZGdlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgYmluZE1lc3NhZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgICBsZXQgbWVzc2FnZSA9IG51bGw7XG4gICAgICBpZiAoRnJhbWVBcGkuaXNJZSkge1xuICAgICAgICBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lc3NhZ2UgPSBldmVudC5kYXRhO1xuICAgICAgfVxuXG4gICAgICBpZiAobGlzdGVuZXJbbWVzc2FnZS5mdW5jXSkge1xuICAgICAgICBsaXN0ZW5lclttZXNzYWdlLmZ1bmNdLmFwcGx5KGxpc3RlbmVyLCBtZXNzYWdlLmFyZ3MpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJRThcbiAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25tZXNzYWdlJywgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzZW5kTWVzc2FnZSh0YXJnZXQsIGZ1bmMsIGFyZ3MpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZnVuYyxcbiAgICAgIGFyZ3NcbiAgICB9O1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBGcmFtZUFwaS5pc0llID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiBkYXRhO1xuXG4gICAgdGFyZ2V0LnBvc3RNZXNzYWdlKG1lc3NhZ2UsICcqJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJhbWVBcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0ZyYW1lQXBpLmpzXG4gKiovIiwiaW1wb3J0IFZpc3VhbEJ1aWxkZXIgZnJvbSAnLi9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlcic7XG5pbXBvcnQgVmlzdWFsRnJhbWUgZnJvbSAnLi9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZSc7XG5pbXBvcnQgSGFzaEFwaSBmcm9tICcuL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGknO1xuXG5jbGFzcyBGcm9udGVuZE1vbnN0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtcygpO1xuICAgIHRoaXMudmlzdWFsQnVsZGVyID0gbnVsbDtcbiAgICB0aGlzLmhhc2hBcGkgPSBuZXcgSGFzaEFwaSgpO1xuICAgIGlmICh3aW5kb3cucGFyZW50ICE9PSB3aW5kb3cgJiYgd2luZG93LnBhcmVudC5Gcm9udGVuZE1vbnN0ZXIpIHtcbiAgICAgIGlmICh3aW5kb3cucGFyZW50LkZyb250ZW5kTW9uc3Rlci5oYXNCdWlsZGVyKSB7XG4gICAgICAgIHRoaXMuVmlzdWFsRnJhbWUgPSBuZXcgVmlzdWFsRnJhbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogZ2xvYmFsIHNtb290aFNjcm9sbDogZmFsc2UqL1xuICAgIGlmICh0eXBlb2Yoc21vb3RoU2Nyb2xsKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNtb290aFNjcm9sbC5pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgVmlzdWFsQnVpbGRlciBjbGFzcyBpbnN0YW5jZVxuICAgKiBAcmV0dXJucyBWaXN1YWxCdWlsZGVyXG4gICAqL1xuICBnZXQgYnVpbGRlcigpIHtcbiAgICBpZiAodGhpcy52aXN1YWxCdWxkZXIgPT09IG51bGwpIHtcbiAgICAgIHRoaXMudmlzdWFsQnVsZGVyID0gbmV3IFZpc3VhbEJ1aWxkZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmlzdWFsQnVsZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgRnJvbnRlbmRNb25zdGVyIGluc3RhbmNlIGhhcyBWaXN1YWwgQnVpbGRlciBvbiBwYWdlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGhhc0J1aWxkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRlci4kYnVpbGRlci5sZW5ndGggPT09IDE7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBGcm9udGVuZE1vbnN0ZXIgc2V0dGluZ3MuXG4gICAqIFVzZXMgRnJvbnRlbmRNb25zdGVyU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuRnJvbnRlbmRNb25zdGVyU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh1c2VyU2V0dGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICB9KTtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJvbnRlbmRNb25zdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9Gcm9udGVuZE1vbnN0ZXIuanNcbiAqKi8iLCJpbXBvcnQgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL1NpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCc7XG5pbXBvcnQgTWF0ZXJpYWxzRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvTWF0ZXJpYWxzRW52aXJvbm1lbnQnO1xuaW1wb3J0IEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9DdXN0b21pemF0aW9uRW52aXJvbm1lbnQnO1xuaW1wb3J0IEFjdGlvbkVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL0FjdGlvbkVudmlyb25tZW50JztcbmltcG9ydCBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50JztcbmltcG9ydCBGcmFtZUFwaSBmcm9tICcuLy4uL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaSc7XG4vLyBpbXBvcnQgRWRpdGFibGUgZnJvbSAnLi9FZGl0YWJsZSc7XG5cbmNsYXNzIFZpc3VhbEJ1aWxkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtcygpO1xuICAgIHRoaXMucmVzb2x1dGlvblN3aXRjaGVyKCk7XG5cbiAgICB0aGlzLmVudmlyb25tZW50cyA9IG5ldyBNYXAoW1xuICAgICAgWydzaXRlLXN0cnVjdHVyZScsIG5ldyBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQodGhpcywgJ3NpdGUtc3RydWN0dXJlJyldLFxuICAgICAgWydwYWdlLXN0cnVjdHVyZScsIG5ldyBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQodGhpcywgJ3BhZ2Utc3RydWN0dXJlJyldLFxuICAgICAgWydtYXRlcmlhbHMnLCBuZXcgTWF0ZXJpYWxzRW52aXJvbm1lbnQodGhpcywgJ21hdGVyaWFscycpXSxcbiAgICAgIFsnY3VzdG9taXphdGlvbicsIG5ldyBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQodGhpcywgJ2N1c3RvbWl6YXRpb24nKV0sXG4gICAgICBbJ2FjdGlvbicsIG5ldyBBY3Rpb25FbnZpcm9ubWVudCh0aGlzLCAnYWN0aW9uJyldLFxuICAgIF0pO1xuXG4gICAgdGhpcy5lbnZpcm9ubWVudFNlbGVjdG9yKCk7XG5cbiAgICAvLyBzZWxlY3QgZmlyc3QgZW52aXJvbm1lbnQgYnkgZGVmYXVsdFxuICAgIHRoaXMuc3dpdGNoRW52aXJvbm1lbnQoJ3NpdGUtc3RydWN0dXJlJyk7XG4gICAgJCgnLm1vbnN0ZXItZW52aXJvbm1lbnQtc2VsZWN0b3JfX2Vudmlyb25tZW50LWxpbmsnKVxuICAgICAgLmZpcnN0KClcbiAgICAgIC5tb2QoJ2FjdGl2ZScsIHRydWUpO1xuICAgIEZyYW1lQXBpLmJpbmRNZXNzYWdlTGlzdGVuZXIodGhpcyk7XG5cbiAgICAvLyB0aGlzLmVkaXRhYmxlID0gbmV3IEVkaXRhYmxlKCk7XG5cbiAgICB0aGlzLmNvbnRyb2xzKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBWaXN1YWxCdWlsZGVyIHNldHRpbmdzLlxuICAgKiBVc2VzIFZpc3VhbEJ1aWxkZXJTZXR0aW5ncyB2YXJpYWJsZSBpZiBwcm92aWRlZCBvciBkZWZhdWx0IHZhbHVlcyBpbnN0ZWFkLlxuICAgKi9cbiAgcGFyYW1zKCkge1xuICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5WaXN1YWxCdWlsZGVyU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICAnZWxlbWVudC1zZWxlY3Rvcic6ICcubW9uc3Rlci12aXN1YWwtYnVpbGRlcicsXG4gICAgICAnZnJhbWUtc2VsZWN0b3InOiAnLm1vbnN0ZXItdmlzdWFsLWZyYW1lJyxcbiAgICAgIGJ1bmRsZXM6IHt9LFxuICAgICAgJ3N0YWNrYWJsZS1jb250YWluZXItY2xhc3MnOiAnbW9uc3Rlci1zdGFja2FibGUtY29udGFpbmVyJyxcbiAgICAgICduZXctYmxvY2stdXJsJzogJy9tb25zdGVyL3Zpc3VhbC1idWlsZGVyL25ldy1ibG9jaycsXG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyh1c2VyU2V0dGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICB9KTtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy4kYnVpbGRlciA9ICQodGhpcy5zZXR0aW5nc1snZWxlbWVudC1zZWxlY3RvciddKTtcbiAgICB0aGlzLiRzdGFja2FibGUgPSAkKGAuJHt0aGlzLnNldHRpbmdzWydzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJ119YCk7XG4gIH1cblxuICByZXNvbHV0aW9uU3dpdGNoZXIoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgYmVtRWxlbSA9ICdyZXNvbHV0aW9uLXN3aXRjaGVyX19yZXNvbHV0aW9uLWxpbmsnO1xuICAgIGNvbnN0IGFjdGl2ZU1vZGlmaWVyID0gYCR7YmVtRWxlbX0tLWFjdGl2ZWA7XG4gICAgY29uc3QgJHJlc29sdXRpb25MaW5rcyA9ICQoYC4ke2JlbUVsZW19YCk7XG4gICAgJHJlc29sdXRpb25MaW5rcy5jbGljayhmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICRyZXNvbHV0aW9uTGlua3MucmVtb3ZlQ2xhc3MoYWN0aXZlTW9kaWZpZXIpO1xuICAgICAgJCh0aGF0LnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKS53aWR0aCgkKHRoaXMpLmRhdGEoJ3Jlc29sdXRpb25XaWR0aCcpKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoYWN0aXZlTW9kaWZpZXIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgZW52aXJvbm1lbnRTZWxlY3RvcigpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBiZW1FbGVtID0gJ21vbnN0ZXItZW52aXJvbm1lbnQtc2VsZWN0b3JfX2Vudmlyb25tZW50LWxpbmsnO1xuICAgIGNvbnN0IGFjdGl2ZU1vZGlmaWVyID0gYCR7YmVtRWxlbX0tLWFjdGl2ZWA7XG4gICAgY29uc3QgJHNlY3Rpb25MaW5rcyA9ICQoYC4ke2JlbUVsZW19YCk7XG4gICAgJHNlY3Rpb25MaW5rcy5jbGljayhmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgIGNvbnN0IGVudmlyb25tZW50TmFtZSA9ICQodGhpcykuZGF0YSgnZW52aXJvbm1lbnROYW1lJyk7XG4gICAgICBpZiAodGhhdC5jdXJyZW50RW52aXJvbm1lbnQgPT09IGVudmlyb25tZW50TmFtZSkge1xuICAgICAgICAkc2VjdGlvbkxpbmtzLnJlbW92ZUNsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgICAgdGhhdC5lbnZpcm9ubWVudHMuZ2V0KGVudmlyb25tZW50TmFtZSkuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB0aGF0LmN1cnJlbnRFbnZpcm9ubWVudCA9IG51bGw7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgJHNlY3Rpb25MaW5rcy5yZW1vdmVDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICB0aGF0LnN3aXRjaEVudmlyb25tZW50KGVudmlyb25tZW50TmFtZSk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHN3aXRjaEVudmlyb25tZW50KGVudmlyb25tZW50TmFtZSkge1xuICAgIHRoaXMuZW52aXJvbm1lbnRzLmdldChlbnZpcm9ubWVudE5hbWUpLmFjdGl2YXRlKCk7XG4gICAgdGhpcy5jdXJyZW50RW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudE5hbWU7XG4gIH1cblxuICBjbGVhclN0YWNrYWJsZSgpIHtcbiAgICB0aGlzLiRzdGFja2FibGUuZW1wdHkoKTtcbiAgfVxuXG4gIGNyZWF0ZVN0YWNrYWJsZVBhbmUoKSB7XG4gICAgY29uc3QgcGFuZUNsYXNzID0gYCR7dGhpcy5zZXR0aW5nc1snc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyddfV9fcGFuZWA7XG4gICAgY29uc3QgbW9kaWZpZXIgPSB0aGlzLiRzdGFja2FibGUuZmluZChgLiR7cGFuZUNsYXNzfWApLmxlbmd0aCA9PT0gMFxuICAgICAgPyBgJHtwYW5lQ2xhc3N9LS1maXJzdGBcbiAgICAgIDogJyc7XG4gICAgY29uc3QgJG5ld1BhbmUgPSAkKGA8ZGl2IGNsYXNzPVwiJHtwYW5lQ2xhc3N9ICR7bW9kaWZpZXJ9XCI+PC9kaXY+YCk7XG4gICAgdGhpcy4kc3RhY2thYmxlLmFwcGVuZCgkbmV3UGFuZSk7XG4gICAgcmV0dXJuICRuZXdQYW5lO1xuICB9XG5cbiAgbWF0ZXJpYWxCeU5hbWUobmFtZSkge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLm1hdGVyaWFscy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MubWF0ZXJpYWxzW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldCBmcmFtZUNvbnRlbnRXaW5kb3coKSB7XG4gICAgcmV0dXJuICQodGhpcy5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSlbMF0uY29udGVudFdpbmRvdztcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICAvLyBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLmZyYW1lQ29udGVudFdpbmRvdywgJ3NlcmlhbGl6ZUNvbnRlbnQnLCBbJ2xvZyddKTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmVudmlyb25tZW50cy5nZXQoJ3BhZ2Utc3RydWN0dXJlJykuc2VyaWFsaXplUGFnZSgpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICAvLyB3ZSBoYXZlIHJlc3VsdCB3aGljaCBpcyBjb250ZW50IGluIGZvcm1hdDpcbiAgICAvLyByZWdpb25cbiAgICAvLyAtLS0gbWF0ZXJpYWwgaWRcbiAgICAvLyAtLS0tLS0tIGtleXMgPT4gdmFsdWVzXG4gICAgLy9cbiAgICAvLyBvdXIgUHJvdmlkZXJzIHNob3VsZCBnZXQgb25seSB0aG9zZSBrZXlzIHRoYXQgdGhleSBwcm92aWRlXG4gICAgLy8gcHJvdmlkZWQga2V5cyBhcmUgc3RvcmVkIGluIGZyYW1lQ29udGVudFdpbmRvdy5NT05TVEVSX0VESVRfTU9ERV9EQVRBLnRlbXBsYXRlLnByb3ZpZGVkS2V5c1xuICAgIGNvbnN0IHJlc3VsdEJ5UHJvdmlkZXJzID0ge307XG4gICAgY29uc3QgcHJvdmlkZWRLZXlzID0gdGhpcy5mcmFtZUNvbnRlbnRXaW5kb3cuTU9OU1RFUl9FRElUX01PREVfREFUQS50ZW1wbGF0ZS5wcm92aWRlZEtleXM7XG5cbiAgICBPYmplY3Qua2V5cyhwcm92aWRlZEtleXMpLmZvckVhY2gocHJvdmlkZXJJbmRleCA9PiB7XG4gICAgICByZXN1bHRCeVByb3ZpZGVyc1twcm92aWRlckluZGV4XSA9IHt9O1xuXG4gICAgICBjb25zdCByZWdpb25zID0gcHJvdmlkZWRLZXlzW3Byb3ZpZGVySW5kZXhdO1xuXG4gICAgICBPYmplY3Qua2V5cyhyZWdpb25zKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQuaGFzT3duUHJvcGVydHkocmVnaW9uS2V5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF1bcmVnaW9uS2V5XSA9IHt9O1xuXG4gICAgICAgIC8vIGdvIGRlZXAgdG8gbWF0ZXJpYWwgaW5kZWNlc1xuICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSByZWdpb25zW3JlZ2lvbktleV07XG5cbiAgICAgICAgT2JqZWN0LmtleXMobWF0ZXJpYWxzKS5mb3JFYWNoKG1hdGVyaWFsSW5kZXggPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHRbcmVnaW9uS2V5XS5oYXNPd25Qcm9wZXJ0eShtYXRlcmlhbEluZGV4KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF1bcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XSA9IHt9O1xuXG4gICAgICAgICAgY29uc3QgZGF0YUtleXMgPSBtYXRlcmlhbHNbbWF0ZXJpYWxJbmRleF07XG5cbiAgICAgICAgICBkYXRhS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0W3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF0uaGFzT3duUHJvcGVydHkoa2V5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0QnlQcm92aWRlcnNcbiAgICAgICAgICAgICAgW3Byb3ZpZGVySW5kZXhdXG4gICAgICAgICAgICAgIFtyZWdpb25LZXldXG4gICAgICAgICAgICAgIFttYXRlcmlhbEluZGV4XVxuICAgICAgICAgICAgICBba2V5XSA9IHJlc3VsdFtyZWdpb25LZXldW21hdGVyaWFsSW5kZXhdW2tleV07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0QnlQcm92aWRlcnMpO1xuICAgIHJldHVybiByZXN1bHRCeVByb3ZpZGVycztcbiAgfVxuXG4gIHBhZ2VDaGFuZ2VkKCkge1xuICAgIHRoaXMuZW52aXJvbm1lbnRzLmZvckVhY2goXG4gICAgICBlbnZpcm9ubWVudCA9PlxuICAgICAgICBlbnZpcm9ubWVudC5wYWdlQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIGxvZyhyZXN1bHQpIHtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICB9XG5cbiAgY29udHJvbHMoKSB7XG4gICAgdGhpcy4kY29udHJvbHMgPSB0aGlzLiRidWlsZGVyLmZpbmQoJy5jb250cm9scycpLmZpcnN0KCk7XG4gICAgdGhpcy4kY29udHJvbHMuZWxlbSgncmVmcmVzaCcpLmNsaWNrKCgpID0+IHtcbiAgICAgIHRoaXMuZnJhbWVDb250ZW50V2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kY29udHJvbHMuZWxlbSgnc2F2ZScpLmNsaWNrKCgpID0+IHtcbiAgICAgIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMuZnJhbWVDb250ZW50V2luZG93LCAnc2F2ZScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbEJ1aWxkZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9WaXN1YWxCdWlsZGVyLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIEFjdGlvbkVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcblxufVxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQWN0aW9uRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgQ3VzdG9taXphdGlvbkVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcblxufVxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9taXphdGlvbkVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBNYXRlcmlhbHNFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICBzdXBlcih2aXN1YWxCdWlsZGVyLCBuYW1lKTtcbiAgICB0aGlzLmluaXRNYXRlcmlhbHNTZWxlY3RvcigpO1xuICB9XG5cbiAgaW5pdE1hdGVyaWFsc1NlbGVjdG9yKCkge1xuICAgIHRoaXMuJG1hdGVyaWFsc0dyb3VwcyA9ICQoJzx1bCBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNcIj48L3VsPicpO1xuICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QgPSBbXTtcblxuICAgIHRoaXMudmlzdWFsQnVpbGRlci5zZXR0aW5ncy5idW5kbGVzLmZvckVhY2goYnVuZGxlID0+IHtcbiAgICAgIC8qIGdsb2JhbCBwb2x5Z2xvdDogZmFsc2UgKi9cbiAgICAgIGNvbnN0IGkxOG5CdW5kbGVOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBwb2x5Z2xvdC50KGJ1bmRsZS5uYW1lKVxuICAgICAgICA6IGJ1bmRsZS5uYW1lO1xuXG4gICAgICBjb25zdCAkYnVuZGxlVGl0bGUgPSBgXG4gICAgICA8bGkgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19pdGVtIG1hdGVyaWFscy1ncm91cHNfX2l0ZW0tLWJ1bmRsZS1sYWJlbFwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWJ1bmRsZVwiIGRhdGEtYnVuZGxlLXBhdGg9XCIke2J1bmRsZS5mdWxsUGF0aH1cIj5cbiAgICAgICAgICAgICR7aTE4bkJ1bmRsZU5hbWV9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICBgO1xuICAgICAgdGhpcy4kbWF0ZXJpYWxzTGlzdC5wdXNoKCRidW5kbGVUaXRsZSk7XG5cbiAgICAgIGJ1bmRsZS5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwTmFtZSA9IGdyb3VwLm5hbWU7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IGdyb3VwLm1hdGVyaWFscztcbiAgICAgICAgY29uc3QgaTE4bkdyb3VwTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnID8gcG9seWdsb3QudChncm91cE5hbWUpIDogZ3JvdXBOYW1lO1xuICAgICAgICBjb25zdCAkbGkgPSAkKGBcbiAgICA8bGkgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19pdGVtXCI+XG4gICAgICA8YSBocmVmPVwiI1wiIGRhdGEtZ3JvdXAtcGF0aD1cIiR7Z3JvdXAuZnVsbFBhdGh9XCIgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXBcIj5cbiAgICAgICAgJHtpMThuR3JvdXBOYW1lfSA8c3BhbiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX2NvdW50XCI+KCR7bWF0ZXJpYWxzLmxlbmd0aH0pPC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvbGk+YCk7XG4gICAgICAgIHRoaXMuJG1hdGVyaWFsc0dyb3Vwcy5hcHBlbmQoJGxpKTtcbiAgICAgICAgY29uc3QgJGxpc3QgPSAkKGA8dWwgY2xhc3M9XCJtYXRlcmlhbHMtbGlzdFwiIGRhdGEtZ3JvdXAtcGF0aD1cIiR7Z3JvdXAuZnVsbFBhdGh9XCI+PC91bD5gKTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcblxuICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaChtYXRlcmlhbCA9PiB7XG4gICAgICAgICAgY29uc3QgbWF0ZXJpYWxOYW1lID0gbWF0ZXJpYWwubmFtZTtcbiAgICAgICAgICBjb25zdCBpMThuTWF0ZXJpYWxOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gcG9seWdsb3QudChtYXRlcmlhbE5hbWUpXG4gICAgICAgICAgICA6IG1hdGVyaWFsTmFtZTtcbiAgICAgICAgICBjb25zdCAkaXRlbSA9ICQoYFxuPGxpPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWF0ZXJpYWxzLWxpc3RfX2l0ZW1cIiBkYXRhLW1hdGVyaWFsLXBhdGg9XCIke21hdGVyaWFsLmZ1bGxQYXRofVwiPlxuICAgICR7aTE4bk1hdGVyaWFsTmFtZX1cbiAgPC9hPlxuPC9saT5cbmApO1xuICAgICAgICAgIGl0ZW1zLnB1c2goJGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgJGxpc3QuYXBwZW5kKGl0ZW1zKTtcbiAgICAgICAgdGhpcy4kbWF0ZXJpYWxzTGlzdC5wdXNoKCRsaXN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAnLCBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAkdGhpcy50b2dnbGVNb2QoJ2FjdGl2ZScpO1xuICAgICAgY29uc3QgZ3JvdXBQYXRoID0gJHRoaXMuZGF0YSgnZ3JvdXBQYXRoJyk7XG4gICAgICBpZiAoJHRoaXMubW9kKCdhY3RpdmUnKSkge1xuICAgICAgICAkKCcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJykubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsc0xpc3RBY3RpdmVDbGFzcyA9ICdtYXRlcmlhbHMtbGlzdC0tYWN0aXZlJztcblxuICAgICAgICAkKCcubWF0ZXJpYWxzLWxpc3QnKS5lYWNoKGZ1bmN0aW9uIGl0KCkge1xuICAgICAgICAgIGNvbnN0ICRsaXN0ID0gJCh0aGlzKTtcbiAgICAgICAgICBpZiAoJGxpc3QuaGFzQ2xhc3MobWF0ZXJpYWxzTGlzdEFjdGl2ZUNsYXNzKSkge1xuICAgICAgICAgICAgJGxpc3QucmVtb3ZlQ2xhc3MobWF0ZXJpYWxzTGlzdEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCRsaXN0LmRhdGEoJ2dyb3VwUGF0aCcpID09PSBncm91cFBhdGgpIHtcbiAgICAgICAgICAgICRsaXN0LmFkZENsYXNzKG1hdGVyaWFsc0xpc3RBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkdGhpcy5tb2QoJ2FjdGl2ZScsIHRydWUpO1xuICAgICAgICB0aGF0LiRtYXRlcmlhbHNQYW5lLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoYXQncyBqdXN0IHNlY29uZCBjbGljayBvbiB0aGUgc2FtZSBncm91cFxuICAgICAgICB0aGF0LiRtYXRlcmlhbHNQYW5lLmhpZGUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hdGVyaWFscy1saXN0X19pdGVtJywgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCkge1xuICAgICAgdGhhdC5zZW5kTWVzc2FnZShcbiAgICAgICAgJ25ld0Jsb2NrJyxcbiAgICAgICAgW1xuICAgICAgICAgICQodGhpcykuZGF0YSgnbWF0ZXJpYWxQYXRoJyksXG4gICAgICAgICAgJ2NvbnRlbnQnLFxuICAgICAgICBdXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgc3VwZXIuYWN0aXZhdGUoKTtcblxuICAgIHRoaXMuJGdyb3Vwc1BhbmUgPSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3JlYXRlU3RhY2thYmxlUGFuZSgpO1xuICAgIHRoaXMuJGdyb3Vwc1BhbmUuYXBwZW5kKHRoaXMuJG1hdGVyaWFsc0dyb3Vwcyk7XG5cbiAgICB0aGlzLiRtYXRlcmlhbHNQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRtYXRlcmlhbHNQYW5lLmFwcGVuZCh0aGlzLiRtYXRlcmlhbHNMaXN0KTtcbiAgICB0aGlzLiRtYXRlcmlhbHNQYW5lLmhpZGUoKTtcblxuICAgICQoJy5tYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAnKS5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTWF0ZXJpYWxzRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvTWF0ZXJpYWxzRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IodmlzdWFsQnVpbGRlciwgbmFtZSkge1xuICAgIHN1cGVyKHZpc3VhbEJ1aWxkZXIsIG5hbWUpO1xuICAgIHRoaXMuaW5pdFBhZ2VTdHJ1Y3R1cmVFbGVtZW50KCk7XG4gICAgdGhpcy5lZGl0TW9kZURhdGEgPSB7fTtcbiAgfVxuXG4gIGluaXRQYWdlU3RydWN0dXJlRWxlbWVudCgpIHtcbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlID0gJCgnPGRpdiBjbGFzcz1cInBhZ2Utc3RydWN0dXJlXCI+PC9kaXY+Jyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICBzdXBlci5hY3RpdmF0ZSgpO1xuXG4gICAgdGhpcy4kc3RydWN0dXJlUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kc3RydWN0dXJlUGFuZS5hcHBlbmQodGhpcy4kcGFnZVN0cnVjdHVyZSk7XG4gIH1cblxuICBwYWdlQ2hhbmdlZCgpIHtcbiAgICBzdXBlci5wYWdlQ2hhbmdlZCgpO1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUuanN0cmVlKCdkZXN0cm95Jyk7XG4gICAgY29uc3QgbGF5b3V0ID0gdGhpcy50YXJnZXQuTU9OU1RFUl9FRElUX01PREVfREFUQS5sYXlvdXQ7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLnRhcmdldC5NT05TVEVSX0VESVRfTU9ERV9EQVRBLnRlbXBsYXRlO1xuXG4gICAgY29uc3QgbGF5b3V0SXRlbSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6ICdsYXlvdXQnLFxuICAgICAgICB0ZW1wbGF0ZUlkOiBsYXlvdXQuaWQsXG4gICAgICB9LFxuICAgICAgdGV4dDogYExheW91dCAtICR7bGF5b3V0LmtleX0gIyR7bGF5b3V0LmlkfWAsXG4gICAgICBpY29uOiAnZmEgZmEtY29sdW1ucycsXG4gICAgICBzdGF0ZToge1xuICAgICAgICBvcGVuZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH07XG4gICAgY29uc3QgdGVtcGxhdGVJdGVtID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBpZDogJ3RlbXBsYXRlJyxcbiAgICAgICAgdGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICB9LFxuICAgICAgdGV4dDogYFRlbXBsYXRlIC0gJHt0ZW1wbGF0ZS5rZXl9ICMke3RlbXBsYXRlLmlkfWAsXG4gICAgICBpY29uOiAnZmEgZmEtdGgnLFxuICAgICAgc3RhdGU6IHtcbiAgICAgICAgb3BlbmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICB9O1xuXG4gICAgY29uc3QgJGxheW91dFJlZ2lvbnMgPSB0aGlzLnRhcmdldCQoJy5tLW1vbnN0ZXItY29udGVudF9fbGF5b3V0Jyk7XG4gICAgJGxheW91dFJlZ2lvbnMuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LnByb2Nlc3NMYXlvdXQoJCh0aGlzKSk7XG4gICAgICBsYXlvdXRJdGVtLmNoaWxkcmVuLnB1c2gocmVzdWx0Lml0ZW0pO1xuICAgICAgcmVzdWx0LnRlbXBsYXRlUmVnaW9ucy5mb3JFYWNoKHJlZ2lvbiA9PiB7XG4gICAgICAgIHRlbXBsYXRlSXRlbS5jaGlsZHJlbi5wdXNoKHJlZ2lvbik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMucGFnZVN0cnVjdHVyZSA9IFtcbiAgICAgIGxheW91dEl0ZW0sXG4gICAgICB0ZW1wbGF0ZUl0ZW0sXG4gICAgXTtcbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlLmpzdHJlZSh7XG4gICAgICBjb3JlOiB7XG4gICAgICAgIGRhdGE6IHRoaXMucGFnZVN0cnVjdHVyZSxcbiAgICAgICAgdGhlbWVzOiB7XG4gICAgICAgICAgbmFtZTogJ2RlZmF1bHQtZGFyaycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcGx1Z2luczogW1xuICAgICAgICAndHlwZXMnLFxuICAgICAgXSxcbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIGxheW91dDoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1jb2x1bW5zJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtdGgnLFxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVJlZ2lvbjoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1mb2xkZXItbycsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnRUZW1wbGF0ZVJlZ2lvbjoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1mb2xkZXInLFxuICAgICAgICB9LFxuICAgICAgICBtYXRlcmlhbDoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1wdXp6bGUtcGllY2UnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGpzdHJlZU9iaiA9IHRoaXMuJHBhZ2VTdHJ1Y3R1cmUuanN0cmVlKCk7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5vbignbG9hZGVkLmpzdHJlZScsICgpID0+IHtcbiAgICAgIHRoaXMucGFnZVN0cnVjdHVyZUpzb24gPSBqc3RyZWVPYmouZ2V0X2pzb24odGhpcy4kcGFnZVN0cnVjdHVyZSwge1xuICAgICAgICBub19zdGF0ZTogdHJ1ZSxcbiAgICAgICAgbm9faWQ6IHRydWUsXG4gICAgICAgIG5vX2xpX2F0dHI6IHRydWUsXG4gICAgICAgIG5vX2FfYXR0cjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy50YXJnZXQuRnJvbnRlbmRNb25zdGVyLlZpc3VhbEZyYW1lLnBhZ2VTdHJ1Y3R1cmVKc29uID0gdGhpcy5wYWdlU3RydWN0dXJlSnNvbjtcbiAgICB9KTtcblxuICAgIHRoaXMuZWRpdE1vZGVEYXRhID0gdGhpcy50YXJnZXQuTU9OU1RFUl9FRElUX01PREVfREFUQTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9jZXNzTGF5b3V0KCRsYXlvdXRSZWdpb24pIHtcbiAgICBjb25zdCBpdGVtID0gUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmV4dHJhY3RSZWdpb25EYXRhKCRsYXlvdXRSZWdpb24pO1xuICAgIGl0ZW0uc3RhdGUgPSB7XG4gICAgICBvcGVuZWQ6IHRydWUsXG4gICAgfTtcbiAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgaXRlbS5kYXRhLmlkID0gYGxheW91dC50ZW1wbGF0ZVJlZ2lvbi4ke2l0ZW0uZGF0YS5yZWdpb25LZXl9YDtcbiAgICBjb25zdCB0ZW1wbGF0ZVJlZ2lvbnMgPSBbXTtcblxuICAgIC8vIGZpbmQgbWF0ZXJpYWxzXG4gICAgY29uc3QgJGxheW91dE1hdGVyaWFscyA9ICRsYXlvdXRSZWdpb24uZmluZCgnPltkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICRsYXlvdXRNYXRlcmlhbHMuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgY29uc3QgJGxheW91dE1hdGVyaWFsID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5wcm9jZXNzTGF5b3V0TWF0ZXJpYWwoJGxheW91dE1hdGVyaWFsLCBpdGVtLmlkKTtcbiAgICAgIGNvbnN0IGxheW91dE1hdGVyaWFsSXRlbSA9IHJlc3VsdC5sYXlvdXRNYXRlcmlhbDtcbiAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnMuZm9yRWFjaChyZWdpb24gPT4ge1xuICAgICAgICB0ZW1wbGF0ZVJlZ2lvbnMucHVzaChyZWdpb24pO1xuICAgICAgfSk7XG4gICAgICBpdGVtLmNoaWxkcmVuLnB1c2gobGF5b3V0TWF0ZXJpYWxJdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBpdGVtLFxuICAgICAgdGVtcGxhdGVSZWdpb25zLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgcHJvY2Vzc0xheW91dE1hdGVyaWFsKCRsYXlvdXRNYXRlcmlhbCwgcHJlZml4KSB7XG4gICAgY29uc3QgbWF0ZXJpYWxJbmRleCA9ICRsYXlvdXRNYXRlcmlhbC5kYXRhKCdtYXRlcmlhbEluZGV4Jyk7XG4gICAgY29uc3QgbWF0ZXJpYWxQYXRoID0gJGxheW91dE1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsUGF0aCcpO1xuICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICB0ZXh0OiBgJHtcbiAgICAgICAgbWF0ZXJpYWxQYXRoID09PSAnY29yZS5mcm9udGVuZC1tb25zdGVyLWNvcmUuZ2VuZXJhbC5jb250ZW50LXBsYWNlaG9sZGVyJ1xuICAgICAgICAgID8gJ01haW4gRW50aXR5IENvbnRlbnQnXG4gICAgICAgICAgOiBgTWF0ZXJpYWw6ICR7bWF0ZXJpYWxJbmRleH1gfVxuICAgICAgYCxcbiAgICAgIHR5cGU6ICdtYXRlcmlhbCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiBgJHtwcmVmaXh9LiR7bWF0ZXJpYWxJbmRleH1gLFxuICAgICAgICBtYXRlcmlhbEluZGV4LFxuICAgICAgICBtYXRlcmlhbFBhdGgsXG4gICAgICAgIGVkaXRhYmxlS2V5czogJGxheW91dE1hdGVyaWFsLmRhdGEoJ2VkaXRhYmxlS2V5cycpLFxuICAgICAgICBub2RlOiAkbGF5b3V0TWF0ZXJpYWwsXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgdGVtcGxhdGVSZWdpb25zID0gW107XG4gICAgY29uc3QgJHJlZ2lvbnMgPSAkbGF5b3V0TWF0ZXJpYWwuZmluZCgnPiAubS1tb25zdGVyLWNvbnRlbnRfX2NvbnRlbnQnKTtcbiAgICAkcmVnaW9ucy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQucHJvY2Vzc1RlbXBsYXRlUmVnaW9uKCQodGhpcykpO1xuICAgICAgdGVtcGxhdGVSZWdpb25zLnB1c2gocmVzdWx0KTtcbiAgICB9KTtcbiAgICBpZiAodGVtcGxhdGVSZWdpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGl0ZW0uZGF0YS5pc0NvbnRlbnQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbGF5b3V0TWF0ZXJpYWw6IGl0ZW0sXG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnMsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9jZXNzVGVtcGxhdGVSZWdpb24oJHRlbXBsYXRlUmVnaW9uKSB7XG4gICAgY29uc3QgaXRlbSA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5leHRyYWN0UmVnaW9uRGF0YSgkdGVtcGxhdGVSZWdpb24pO1xuICAgIGl0ZW0uc3RhdGUgPSB7XG4gICAgICBvcGVuZWQ6IHRydWUsXG4gICAgfTtcbiAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgaXRlbS5kYXRhLmVudGl0eURlcGVuZGVudCA9ICR0ZW1wbGF0ZVJlZ2lvbi5kYXRhKCdyZWdpb25FbnRpdHlEZXBlbmRlbnQnKSA9PT0gMTtcblxuICAgIGNvbnN0IHByZWZpeCA9IGl0ZW0uZGF0YS5lbnRpdHlEZXBlbmRlbnQgPyAndGVtcGxhdGUnIDogJ2NvbnRlbnQnO1xuICAgIGl0ZW0uZGF0YS5pZCA9IGAke3ByZWZpeH0udGVtcGxhdGVSZWdpb24uJHtpdGVtLmRhdGEucmVnaW9uS2V5fWA7XG5cbiAgICBpZiAoaXRlbS5kYXRhLmVudGl0eURlcGVuZGVudCkge1xuICAgICAgaXRlbS50eXBlID0gJ2NvbnRlbnRUZW1wbGF0ZVJlZ2lvbic7XG4gICAgfVxuICAgIGNvbnN0ICRyZWdpb25NYXRlcmlhbHMgPSAkdGVtcGxhdGVSZWdpb24uZmluZCgnPltkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICRyZWdpb25NYXRlcmlhbHMuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgaXRlbS5jaGlsZHJlbi5wdXNoKFxuICAgICAgICBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQucHJvY2Vzc1RlbXBsYXRlUmVnaW9uTWF0ZXJpYWwoXG4gICAgICAgICAgJCh0aGlzKSxcbiAgICAgICAgICBpdGVtLmRhdGEuaWRcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9jZXNzVGVtcGxhdGVSZWdpb25NYXRlcmlhbCgkcmVnaW9uTWF0ZXJpYWwsIHByZWZpeCkge1xuICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSAkcmVnaW9uTWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxJbmRleCcpO1xuICAgIGNvbnN0IG1hdGVyaWFsUGF0aCA9ICRyZWdpb25NYXRlcmlhbC5kYXRhKCdtYXRlcmlhbFBhdGgnKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogYE1hdGVyaWFsOiAke21hdGVyaWFsSW5kZXh9YCxcbiAgICAgIHR5cGU6ICdtYXRlcmlhbCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiBgJHtwcmVmaXh9LiR7bWF0ZXJpYWxJbmRleH1gLFxuICAgICAgICBtYXRlcmlhbEluZGV4LFxuICAgICAgICBtYXRlcmlhbFBhdGgsXG4gICAgICAgIGVkaXRhYmxlS2V5czogJHJlZ2lvbk1hdGVyaWFsLmRhdGEoJ2VkaXRhYmxlS2V5cycpLFxuICAgICAgICBub2RlOiAkcmVnaW9uTWF0ZXJpYWwsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZXh0cmFjdFJlZ2lvbkRhdGEoJG5vZGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogJG5vZGUuZGF0YSgnY29udGVudERlc2NyaXB0aW9uJyksXG4gICAgICB0eXBlOiAndGVtcGxhdGVSZWdpb24nLFxuICAgICAgZGF0YToge1xuICAgICAgICByZWdpb25JZDogJG5vZGUuZGF0YSgncmVnaW9uSWQnKSxcbiAgICAgICAgcmVnaW9uS2V5OiAkbm9kZS5kYXRhKCdyZWdpb25LZXknKSxcbiAgICAgICAgdW5pcXVlQ29udGVudElkOiAkbm9kZS5kYXRhKCd1bmlxdWVDb250ZW50SWQnKSxcbiAgICAgICAgbm9kZTogJG5vZGUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzZXJpYWxpemVQYWdlKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMucmVnaW9uc1N0cnVjdHVyZSkuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgY29uc3QgcmVnaW9uID0gdGhpcy5yZWdpb25zU3RydWN0dXJlW3JlZ2lvbktleV07XG4gICAgICByZXN1bHRbcmVnaW9uLmtleV0gPSByZWdpb24uc2VyaWFsaXplKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIG1hdGVyaWFsc0J5UmVnaW9ucygpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMucmVnaW9uc1N0cnVjdHVyZVtyZWdpb25LZXldO1xuICAgICAgcmVzdWx0W3JlZ2lvbi5rZXldID0gcmVnaW9uLm1hdGVyaWFsc0RlY2woKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHVuaXFpZCAocHJlZml4LCBtb3JlRW50cm9weSkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3VuaXFpZC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICByZXZpc2VkIGJ5OiBLYW5rcmVsdW5lIChodHRwOi8vd3d3LndlYmZha3RvcnkuaW5mby8pXG4gIC8vICAgICAgbm90ZSAxOiBVc2VzIGFuIGludGVybmFsIGNvdW50ZXIgKGluIGxvY3V0dXMgZ2xvYmFsKSB0byBhdm9pZCBjb2xsaXNpb25cbiAgLy8gICBleGFtcGxlIDE6IHZhciAkaWQgPSB1bmlxaWQoKVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRyZXN1bHQgPSAkaWQubGVuZ3RoID09PSAxM1xuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogdmFyICRpZCA9IHVuaXFpZCgnZm9vJylcbiAgLy8gICBleGFtcGxlIDI6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gKDEzICsgJ2ZvbycubGVuZ3RoKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMzogdmFyICRpZCA9IHVuaXFpZCgnYmFyJywgdHJ1ZSlcbiAgLy8gICBleGFtcGxlIDM6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gKDIzICsgJ2JhcicubGVuZ3RoKVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuXG4gIGlmICh0eXBlb2YgcHJlZml4ID09PSAndW5kZWZpbmVkJykge1xuICAgIHByZWZpeCA9ICcnXG4gIH1cblxuICB2YXIgcmV0SWRcbiAgdmFyIF9mb3JtYXRTZWVkID0gZnVuY3Rpb24gKHNlZWQsIHJlcVdpZHRoKSB7XG4gICAgc2VlZCA9IHBhcnNlSW50KHNlZWQsIDEwKS50b1N0cmluZygxNikgLy8gdG8gaGV4IHN0clxuICAgIGlmIChyZXFXaWR0aCA8IHNlZWQubGVuZ3RoKSB7XG4gICAgICAvLyBzbyBsb25nIHdlIHNwbGl0XG4gICAgICByZXR1cm4gc2VlZC5zbGljZShzZWVkLmxlbmd0aCAtIHJlcVdpZHRoKVxuICAgIH1cbiAgICBpZiAocmVxV2lkdGggPiBzZWVkLmxlbmd0aCkge1xuICAgICAgLy8gc28gc2hvcnQgd2UgcGFkXG4gICAgICByZXR1cm4gQXJyYXkoMSArIChyZXFXaWR0aCAtIHNlZWQubGVuZ3RoKSkuam9pbignMCcpICsgc2VlZFxuICAgIH1cbiAgICByZXR1cm4gc2VlZFxuICB9XG5cbiAgdmFyICRnbG9iYWwgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBHTE9CQUwpXG4gICRnbG9iYWwuJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzIHx8IHt9XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXNcbiAgJGxvY3V0dXMucGhwID0gJGxvY3V0dXMucGhwIHx8IHt9XG5cbiAgaWYgKCEkbG9jdXR1cy5waHAudW5pcWlkU2VlZCkge1xuICAgIC8vIGluaXQgc2VlZCB3aXRoIGJpZyByYW5kb20gaW50XG4gICAgJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAweDc1YmNkMTUpXG4gIH1cbiAgJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQrK1xuXG4gIC8vIHN0YXJ0IHdpdGggcHJlZml4LCBhZGQgY3VycmVudCBtaWxsaXNlY29uZHMgaGV4IHN0cmluZ1xuICByZXRJZCA9IHByZWZpeFxuICByZXRJZCArPSBfZm9ybWF0U2VlZChwYXJzZUludChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDAsIDEwKSwgOClcbiAgLy8gYWRkIHNlZWQgaGV4IHN0cmluZ1xuICByZXRJZCArPSBfZm9ybWF0U2VlZCgkbG9jdXR1cy5waHAudW5pcWlkU2VlZCwgNSlcbiAgaWYgKG1vcmVFbnRyb3B5KSB7XG4gICAgLy8gZm9yIG1vcmUgZW50cm9weSB3ZSBhZGQgYSBmbG9hdCBsb3dlciB0byAxMFxuICAgIHJldElkICs9IChNYXRoLnJhbmRvbSgpICogMTApLnRvRml4ZWQoOCkudG9TdHJpbmcoKVxuICB9XG5cbiAgcmV0dXJuIHJldElkXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3VuaXFpZC5qc1xuICoqLyIsImNsYXNzIERhdGFQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSwgcHJvdmlkZWRLZXlzKSB7XG4gICAgdGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgdGhpcy5wcm92aWRlZEtleXMgPSBwcm92aWRlZEtleXM7XG4gICAgdGhpcy5hc3NvY2lhdGlvbnMgPSB7fTtcbiAgICB0aGlzLmFzc29jaWF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHtFZGl0YWJsZX1cbiAgICovXG4gIHN0YXRpYyBnZXQgZWRpdGFibGUoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5Gcm9udGVuZE1vbnN0ZXIuVmlzdWFsRnJhbWUuZWRpdGFibGU7XG4gIH1cblxuICBhc3NvY2lhdGUoKSB7XG4gICAgdGhpcy5hc3NvY2lhdGlvbnMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnByb3ZpZGVkS2V5cykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgY29uc3QgcmVnaW9uID0gdGhpcy5wcm92aWRlZEtleXNbcmVnaW9uS2V5XTtcbiAgICAgIGNvbnN0ICRyZWdpb24gPSAkKGBbZGF0YS1yZWdpb24ta2V5PVwiJHtyZWdpb25LZXl9XCJdYCkuZmlyc3QoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGAlY1JlZ2lvbjogJHtyZWdpb25LZXl9YCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkOyBiYWNrZ3JvdW5kOiAjMzMzJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZWdpb24pO1xuICAgICAgY29uc3QgbWF0ZXJpYWxzID0ge307XG4gICAgICBPYmplY3Qua2V5cyhyZWdpb24pLmZvckVhY2gobWF0ZXJpYWxLZXkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhS2V5cyA9IHJlZ2lvblttYXRlcmlhbEtleV07XG4gICAgICAgIGNvbnN0ICRtYXRlcmlhbCA9ICRyZWdpb24uZmluZChgW2RhdGEtbWF0ZXJpYWwtaW5kZXg9XCIke21hdGVyaWFsS2V5fVwiXWApLmZpcnN0KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAlY01hdGVyaWFsOiAke21hdGVyaWFsS2V5fWAsICdjb2xvcjogI2ZmZjsgZm9udC13ZWlnaHQ6IGJvbGQ7IGJhY2tncm91bmQ6ICM2OWYnKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJG1hdGVyaWFsKTtcbiAgICAgICAgaWYgKCRtYXRlcmlhbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbWF0ZXJpYWxzW21hdGVyaWFsS2V5XSA9IHtcbiAgICAgICAgICBkYXRhS2V5cyxcbiAgICAgICAgICAkbWF0ZXJpYWwsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsRWRpdGFibGVLZXlzID0gJG1hdGVyaWFsLmRhdGEoJ2VkaXRhYmxlS2V5cycpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVNYXRlcmlhbEVkaXQobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRtYXRlcmlhbCwgZGF0YUtleXMpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFzc29jaWF0aW9uc1tyZWdpb25LZXldID0ge1xuICAgICAgICAkcmVnaW9uLFxuICAgICAgICBtYXRlcmlhbHMsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGl6ZU1hdGVyaWFsRWRpdChtYXRlcmlhbEVkaXRhYmxlS2V5cywgJHJvb3QsIGRhdGFLZXlzLCBwcmVmaXggPSAnJykge1xuICAgIGRhdGFLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IG9iaiA9IG1hdGVyaWFsRWRpdGFibGVLZXlzW2tleV0gfHwgJ05PX1NVQ0hfS0VZJztcbiAgICAgIGlmIChvYmogPT09ICdOT19TVUNIX0tFWScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9iaiA9PT0gT2JqZWN0KG9iaikpIHtcbiAgICAgICAgLy8gaXQncyByZWN1cnNpdmVcbiAgICAgICAgLy8gZmlyc3QgLSBmaW5kIGFsbCBibG9ja3NcbiAgICAgICAgY29uc3QgJGJsb2NrcyA9ICRyb290LmZpbmQoYFtkYXRhLXJlY3Vyc2l2ZS1pdGVtPVwiJHtrZXl9XCJdYCk7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgICRibG9ja3MuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJWMgUmVjdXJzaXZlIGl0ZW0gJHtrZXl9ICMke2NvdW50ZXJ9YCwgJ2JhY2tncm91bmQ6ICMyMjI7IGNvbG9yOiAjYmFkYTU1Jyk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgICAgdGhhdC5pbml0aWFsaXplTWF0ZXJpYWxFZGl0KG9iaiwgJHRoaXMsIE9iamVjdC5rZXlzKG9iaiksICdpdGVtLicpO1xuICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpdCdzIHBsYWluIGZpZWxkXG4gICAgICAgIGNvbnN0ICRub2RlID0gJHJvb3QuZmluZChgW2RhdGEtZWRpdGFibGUta2V5PVwiJHtwcmVmaXh9JHtrZXl9XCJdYCkuZmlyc3QoKTtcbiAgICAgICAgaWYgKCRub2RlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBEYXRhUHJvdmlkZXIuZWRpdGFibGUuaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCVjIFBsYWluIGZpZWxkIGVkaXRhYmxlICR7cHJlZml4fSR7a2V5fWAsICdiYWNrZ3JvdW5kOiAjMjIyOyBjb2xvcjogI2JhZGE1NScpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygkbm9kZVswXS5vdXRlckhUTUwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICBzZXJpYWxpemVLZXlzKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMuYXNzb2NpYXRpb25zKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICBjb25zdCByZWdpb24gPSB0aGlzLmFzc29jaWF0aW9uc1tyZWdpb25LZXldO1xuICAgICAgY29uc3QgJHJlZ2lvbiA9IHJlZ2lvbi4kcmVnaW9uO1xuICAgICAgcmVzdWx0W3JlZ2lvbktleV0gPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKHJlZ2lvbi5tYXRlcmlhbHMpLmZvckVhY2gobWF0ZXJpYWxLZXkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhS2V5cyA9IHJlZ2lvbi5tYXRlcmlhbHNbbWF0ZXJpYWxLZXldLmRhdGFLZXlzO1xuICAgICAgICBjb25zdCAkbWF0ZXJpYWwgPSByZWdpb24ubWF0ZXJpYWxzW21hdGVyaWFsS2V5XS4kbWF0ZXJpYWw7XG4gICAgICAgIHJlc3VsdFtyZWdpb25LZXldW21hdGVyaWFsS2V5XSA9IHRoaXMuc2VyaWFsaXplTWF0ZXJpYWwoXG4gICAgICAgICAgcmVnaW9uS2V5LFxuICAgICAgICAgIG1hdGVyaWFsS2V5LFxuICAgICAgICAgIGRhdGFLZXlzLFxuICAgICAgICAgICRyZWdpb24sXG4gICAgICAgICAgJG1hdGVyaWFsXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBjbGFzczogdGhpcy5jbGFzc05hbWUsXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5maWxsQ29uZmlnKGRhdGEpO1xuICB9XG5cbiAgZmlsbENvbmZpZyhkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBzZXJpYWxpemVNYXRlcmlhbChyZWdpb25LZXksIG1hdGVyaWFsS2V5LCBkYXRhS2V5cywgJHJlZ2lvbiwgJG1hdGVyaWFsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YVByb3ZpZGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXIuanNcbiAqKi8iLCJpbXBvcnQgU3RhdGljQ29udGVudCBmcm9tICcuL3Byb3ZpZGVycy9TdGF0aWNDb250ZW50JztcblxuY2xhc3MgRGF0YVByb3ZpZGVyRmFjdG9yeSB7XG4gIHN0YXRpYyBmYWN0b3J5KHByb3ZpZGVyRGVjbCwgcHJvdmlkZWRLZXlzKSB7XG4gICAgbGV0IHByb3ZpZGVyID0gbnVsbDtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBwcm92aWRlckRlY2wuY2xhc3NOYW1lXG4gICAgICB8fCAnRG90UGxhbnRcXFxcTW9uc3RlclxcXFxEYXRhRW50aXR5XFxcXFN0YXRpY0NvbnRlbnRQcm92aWRlcic7XG4gICAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAgIGNhc2UgJ0RvdFBsYW50XFxcXE1vbnN0ZXJcXFxcRGF0YUVudGl0eVxcXFxTdGF0aWNDb250ZW50UHJvdmlkZXInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcHJvdmlkZXIgPSBuZXcgU3RhdGljQ29udGVudChwcm92aWRlZEtleXMpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvdmlkZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YVByb3ZpZGVyRmFjdG9yeTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRGF0YVByb3ZpZGVyRmFjdG9yeS5qc1xuICoqLyIsImltcG9ydCBhbGxFZGl0YWJsZXMgZnJvbSAnLi9lZGl0YWJsZXMvYWxsJztcblxuY2xhc3MgRWRpdGFibGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVkaXRhYmxlc0J5VHlwZSA9IHt9O1xuICAgIC8vIGluaXRpYWxpemUgYmFzZSBidWlsZC1pbiBlZGl0YWJsZXNcbiAgICBhbGxFZGl0YWJsZXMoKTtcbiAgICB0aGlzLmVkaXRhYmxlc0J5VHlwZSA9IHdpbmRvdy5NT05TVEVSX0VESVRBQkxFUztcbiAgfVxuXG4gIHNlcmlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3QgZWRpdGFibGUgPSAkbm9kZS5kYXRhKCdlZGl0YWJsZVBhcmFtcycpO1xuICAgIGlmICh0eXBlb2YoZWRpdGFibGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgdHlwZSA9IGVkaXRhYmxlLmhhc093blByb3BlcnR5KCd0eXBlJykgPyBlZGl0YWJsZS50eXBlIDogJ3N0cmluZyc7XG4gICAgaWYgKHRoaXMuZWRpdGFibGVzQnlUeXBlLmhhc093blByb3BlcnR5KHR5cGUpID09PSBmYWxzZSkge1xuICAgICAgdHlwZSA9ICdzdHJpbmcnO1xuICAgIH1cblxuICAgIGNvbnN0IGV4cG9ydFZhcmlhYmxlID0gZWRpdGFibGUuaGFzT3duUHJvcGVydHkoJ3RhcmdldCcpID8gZWRpdGFibGUudGFyZ2V0IDogJ2RhdGEnO1xuXG4gICAgcmV0dXJuIHRoaXMuZWRpdGFibGVzQnlUeXBlW3R5cGVdLnNlcmlhbGl6ZU5vZGUoJG5vZGUsIGV4cG9ydFZhcmlhYmxlKTtcbiAgfVxuXG4gIGluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSkge1xuICAgIGNvbnN0IHR5cGUgPSAkbm9kZS5kYXRhKCdlZGl0YWJsZS10eXBlJykgfHwgJ3VuZWRpdGFibGUnO1xuICAgIGlmICh0eXBlID09PSAndW5lZGl0YWJsZScpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGVkaXRhYmxlID0gdGhpcy5lZGl0YWJsZXNCeVR5cGVbdHlwZV0gfHwgdGhpcy5lZGl0YWJsZXNCeVR5cGUuc3RyaW5nO1xuICAgIHJldHVybiBlZGl0YWJsZS5pbml0aWFsaXplRWRpdGFibGUoJG5vZGUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRhYmxlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9FZGl0YWJsZS5qc1xuICoqLyIsImNsYXNzIEhhc2hBcGkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZ1bmN0aW9uQ2FsbHMgPSB7fTtcblxuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaC5tYXRjaCgvI2hhc2hBcGk6KC4qPyk6XFwvaGFzaEFwaS8pO1xuICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgY29uc3QgZnVuY3Rpb25DYWxscyA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoZXNbMV0pKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZnVuY3Rpb25DYWxscykge1xuICAgICAgICAgIGlmIChpdGVtLmZ1bmMpIHtcbiAgICAgICAgICAgIHRoaXMuZnVuY3Rpb25DYWxsc1tpdGVtLmZ1bmNdID0gaXRlbS5hcmdzIHx8IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNob3VsZENhbGwoZnVuYykge1xuICAgIHJldHVybiB0aGlzLmZ1bmN0aW9uQ2FsbHNbZnVuY10gfHwgZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGFzaEFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvSGFzaEFwaS5qc1xuICoqLyIsImltcG9ydCBGcmFtZUFwaSBmcm9tICcuL0ZyYW1lQXBpJztcbmltcG9ydCB1bmlxdWVJZCBmcm9tICcuLy4uL3VuaXFpZCc7XG5pbXBvcnQgRGF0YVByb3ZpZGVyRmFjdG9yeSBmcm9tICcuL0RhdGFQcm92aWRlckZhY3RvcnknO1xuaW1wb3J0IEVkaXRhYmxlIGZyb20gJy4vRWRpdGFibGUnO1xuXG5jbGFzcyBWaXN1YWxGcmFtZVxue1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtcygpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICBGcmFtZUFwaS5iaW5kTWVzc2FnZUxpc3RlbmVyKHRoaXMpO1xuICAgIHRoaXMucGFnZVN0cnVjdHVyZUpzb25EYXRhID0gbnVsbDtcbiAgICB0aGlzLnBhcmVudFdpbmRvdyA9IHdpbmRvdy5wYXJlbnQ7XG4gICAgLyoqIEB2YXIgRnJvbnRlbmRNb25zdGVyICovXG4gICAgdGhpcy5wYXJlbnRNb25zdGVyID0gdGhpcy5wYXJlbnRXaW5kb3cuRnJvbnRlbmRNb25zdGVyO1xuICAgIHRoaXMucGFyZW50QnVpbGRlciA9IHRoaXMucGFyZW50TW9uc3Rlci5idWlsZGVyO1xuICAgIHRoaXMuY3VycmVudE1vbnN0ZXJDb250ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5lZGl0YWJsZSA9IG5ldyBFZGl0YWJsZSgpO1xuICAgIHRoaXMubWFrZUl0TW92ZSgpO1xuICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVIYW5kbGVycygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgJCgoKSA9PiB7XG4gICAgICB0aGlzLnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAgIHRoaXMuaW5pdFByb3ZpZGVycygpO1xuICAgIH0pO1xuICAgIHRoaXMuTW9uc3RlckVkaXREYXRhID0gd2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEE7XG5cbiAgfVxuXG4gIGluaXRQcm92aWRlcnMoKSB7XG4gICAgdGhpcy5wcm92aWRlcnMgPSB7XG4gICAgICBsYXlvdXQ6IHRoaXMuZ2V0UHJvdmlkZXJzKHRoaXMuTW9uc3RlckVkaXREYXRhLmxheW91dCksXG4gICAgICB0ZW1wbGF0ZTogdGhpcy5nZXRQcm92aWRlcnModGhpcy5Nb25zdGVyRWRpdERhdGEudGVtcGxhdGUpLFxuICAgICAgZW50aXR5OiB0aGlzLmdldFByb3ZpZGVycyh0aGlzLk1vbnN0ZXJFZGl0RGF0YS5lbnRpdHkpLFxuICAgIH07XG4gIH1cblxuICBzZXQgcGFnZVN0cnVjdHVyZUpzb24odmFsdWUpIHtcbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHBhZ2VTdHJ1Y3R1cmVKc29uKCkge1xuICAgIHJldHVybiB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YTtcbiAgfVxuXG4gIGdldFByb3ZpZGVycyhhcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhhcnIucHJvdmlkZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBwcm92aWRlckRlY2wgPSBhcnIucHJvdmlkZXJzW2tleV07XG4gICAgICByZXN1bHRba2V5XSA9IERhdGFQcm92aWRlckZhY3RvcnkuZmFjdG9yeShcbiAgICAgICAgcHJvdmlkZXJEZWNsLFxuICAgICAgICBhcnIucHJvdmlkZWRLZXlzW2tleV0gfHwge31cbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldCAkbW9uc3RlckNvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGUpIHtcbiAgICAgIHJldHVybiB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hNb25zdGVyQ29udGVudENhY2hlKCk7XG4gICAgcmV0dXJuIHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGU7XG4gIH1cblxuICByZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpIHtcbiAgICB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlID0ge307XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgJCh0aGlzLnNldHRpbmdzWydtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InXSkuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgaWYgKCF0aGF0LmN1cnJlbnRNb25zdGVyQ29udGVudCkge1xuICAgICAgICB0aGF0LmN1cnJlbnRNb25zdGVyQ29udGVudCA9ICQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyk7XG4gICAgICB9XG4gICAgICB0aGF0LiRtb25zdGVyQ29udGVudENhY2hlWyQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyldID0gJCh0aGlzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUhhbmRsZXJzKCkge1xuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsICYmIHRoaXMuJGhhbmRsZXJzKSB7XG4gICAgICB0aGlzLiRoYW5kbGVycy5jc3MoXG4gICAgICAgICd0b3AnLFxuICAgICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLnBvc2l0aW9uKCkudG9wXG4gICAgICAgICAgKyB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLmhlaWdodCgpXG4gICAgICAgICAgLSB0aGlzLiRoYW5kbGVycy5oZWlnaHQoKVxuICAgICAgKTtcbiAgICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwuYWRkQ2xhc3MoJ20tbW9uc3Rlci1jb250ZW50X19tYXRlcmlhbC0tYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgbWFrZUl0TW92ZSgpIHtcbiAgICB0aGlzLiRoYW5kbGVycyA9ICQoYFxuPGRpdiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNcIj5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX2NvbmZpZ3VyZVwiPlxuICAgIDxpIGNsYXNzPVwiZmEgZmEtY29nXCI+PC9pPlxuICA8L2E+XG4gIDxzcGFuIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fYmxvY2stbmFtZVwiPkJsb2NrIG5hbWUgaGVyZTwvc3Bhbj5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtdXBcIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXVwXCI+PC9pPlxuICA8L2E+XG4gIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLWRvd25cIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvd25cIj48L2k+XG4gIDwvYT5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX2Nsb25lXCI+XG4gICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9uZVwiPjwvaT5cbiAgPC9hPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fcmVtb3ZlXCI+XG4gICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT5cbiAgPC9hPlxuPC9kaXY+YCk7XG4gICAgJCgnYm9keScpLmFwcGVuZCh0aGlzLiRoYW5kbGVycyk7XG4gICAgdGhpcy4kaGFuZGxlcnMuaGlkZSgpO1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICQodGhpcy5zZXR0aW5nc1snbW9uc3Rlci1jb250ZW50LXNlbGVjdG9yJ10pLm9uKHtcbiAgICAgIG1vdXNlZW50ZXI6IGZ1bmN0aW9uIGhvdmVySW4oKSB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ20tbW9uc3Rlci1jb250ZW50X19tYXRlcmlhbC0taGlnaGxpZ2h0ZWQnKTtcbiAgICAgIH0sXG4gICAgICBtb3VzZWxlYXZlOiBmdW5jdGlvbiBob3Zlck91dCgpIHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1oaWdobGlnaHRlZCcpO1xuICAgICAgfSxcbiAgICAgIGNsaWNrOiBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgdGhhdC5zZWxlY3RNYXRlcmlhbCgkdGhpcyk7XG4gICAgICB9LFxuICAgIH0sICdbZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICB0aGF0LiRoYW5kbGVyc1xuICAgICAgLm9uKCdjbGljaycsICcubW9uc3Rlci1ibG9jay1oYW5kbGVyc19fbW92ZS11cCcsICgpID0+IHtcbiAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICBjb25zdCAkcHJldiA9IHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwucHJldignW2RhdGEtaXMtbWF0ZXJpYWxdJyk7XG4gICAgICAgICAgaWYgKCRwcmV2Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5pbnNlcnRCZWZvcmUoJHByZXYpO1xuICAgICAgICAgICAgdGhhdC51cGRhdGVIYW5kbGVycygpO1xuICAgICAgICAgICAgdGhhdC5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLWRvd24nLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICAgICAgY29uc3QgJG5leHQgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLm5leHQoJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICAgICAgIGlmICgkbmV4dC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwuaW5zZXJ0QWZ0ZXIoJG5leHQpO1xuICAgICAgICAgICAgdGhhdC51cGRhdGVIYW5kbGVycygpO1xuICAgICAgICAgICAgdGhhdC5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19jbG9uZScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICBjb25zdCAkY2xvbmVkTWF0ZXJpYWwgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLmNsb25lKCk7XG4gICAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSB1bmlxdWVJZCgnbWF0Jyk7XG4gICAgICAgICAgJGNsb25lZE1hdGVyaWFsXG4gICAgICAgICAgICAuaW5zZXJ0QWZ0ZXIodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbClcbiAgICAgICAgICAgIC5kYXRhKFxuICAgICAgICAgICAgICAnbWF0ZXJpYWxJbmRleCcsXG4gICAgICAgICAgICAgIHJhbmRvbUluZGV4XG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXR0cignZGF0YS1tYXRlcmlhbC1pbmRleCcsIHJhbmRvbUluZGV4KTtcbiAgICAgICAgICB0aGF0LnNlbGVjdE1hdGVyaWFsKCRjbG9uZWRNYXRlcmlhbCk7XG4gICAgICAgICAgdGhhdC5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIG1hdGVyaWFsPycpKSB7XG4gICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCA9IG51bGw7XG4gICAgICAgICAgICB0aGF0LiRoYW5kbGVycy5oaWRlKCk7IC8vIGl0IGRvZXMgbm90IHdvcmsuIHdoeT8gTmVlZCB0byBmaXghXG4gICAgICAgICAgICB0aGF0LnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBzZWxlY3RNYXRlcmlhbCgkbWF0ZXJpYWwpIHtcbiAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCA9PT0gJG1hdGVyaWFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLnJlbW92ZUNsYXNzKCdtLW1vbnN0ZXItY29udGVudF9fbWF0ZXJpYWwtLWFjdGl2ZScpO1xuICAgIH1cbiAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsID0gJG1hdGVyaWFsO1xuICAgIHRoaXMudXBkYXRlSGFuZGxlcnMoKTtcbiAgICB0aGlzLiRoYW5kbGVycy5zaG93KCk7XG4gIH1cblxuICBzZXJpYWxpemVDb250ZW50KGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgT2JqZWN0LmtleXModGhpcy4kbW9uc3RlckNvbnRlbnQpLmZvckVhY2godW5pcXVlQ29udGVudElkID0+IHtcbiAgICAgIGNvbnN0ICRtb25zdGVyID0gdGhpcy4kbW9uc3RlckNvbnRlbnRbdW5pcXVlQ29udGVudElkXTtcbiAgICAgIHJlc3VsdFskbW9uc3Rlci5kYXRhKCd1bmlxdWVDb250ZW50SWQnKV0gPSB0aGF0LnNlcmlhbGl6ZVVuaXF1ZUNvbnRlbnQoJG1vbnN0ZXIpO1xuICAgIH0pO1xuICAgIHRoaXMuc2VuZFRvQnVpbGRlcihjYWxsYmFjaywgW3Jlc3VsdF0pO1xuICB9XG5cbiAgc2VyaWFsaXplVW5pcXVlQ29udGVudCgkbW9uc3RlckNvbnRlbnQpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICByZXN1bHQudW5pcXVlQ29udGVudElkID0gJG1vbnN0ZXJDb250ZW50LmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpO1xuICAgIHJlc3VsdC5tYXRlcmlhbHMgPSB7fTtcbiAgICAkbW9uc3RlckNvbnRlbnQuZmluZCgnW2RhdGEtaXMtbWF0ZXJpYWw9XFwnMVxcJ10nKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCBtYXRlcmlhbCA9IHt9O1xuICAgICAgbWF0ZXJpYWwuYmxvY2sgPSAkKHRoaXMpLmRhdGEoJ21hdGVyaWFsQmxvY2snKTtcbiAgICAgIHJlc3VsdC5tYXRlcmlhbHNbJCh0aGlzKS5kYXRhKCdtYXRlcmlhbEluZGV4JyldID0gbWF0ZXJpYWw7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIFZpc3VhbEZyYW1lIHNldHRpbmdzLlxuICAgKiBVc2VzIFZpc3VhbEZyYW1lU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuVmlzdWFsRnJhbWVTZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICdtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InOiAnLm0tbW9uc3Rlci1jb250ZW50X19jb250ZW50JyxcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHVzZXJTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgfVxuXG4gIHNlbmRUb0J1aWxkZXIoZnVuYywgYXJncykge1xuICAgIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMucGFyZW50V2luZG93LCBmdW5jLCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JtU3VibWl0KGRhdGEpIHtcbiAgICBjb25zdCAkZm9ybSA9ICQoJzxmb3JtIG1ldGhvZD1cIlBPU1RcIj48L2Zvcm0+Jyk7XG4gICAgY29uc3QgJGlucHV0ID0gJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX19qc29uXCI+Jyk7XG4gICAgY29uc3QgJGNzcmYgPSAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiPicpO1xuXG4gICAgJGNzcmZcbiAgICAgIC5hdHRyKCduYW1lJywgJCgnbWV0YVtuYW1lPWNzcmYtcGFyYW1dJykuYXR0cignY29udGVudCcpKVxuICAgICAgLnZhbCgkKCdtZXRhW25hbWU9Y3NyZi10b2tlbl0nKS5hdHRyKCdjb250ZW50JykpXG4gICAgICAuYXBwZW5kVG8oJGZvcm0pO1xuXG4gICAgJGlucHV0XG4gICAgICAudmFsKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgLmFwcGVuZFRvKCRmb3JtKTtcblxuICAgICRmb3JtWzBdLnN1Ym1pdCgpO1xuICB9XG5cbiAgY29uc3RydWN0VGVtcGxhdGVEYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm92aWRlcnNFbnRpdGllczogdGhpcy5wYXJlbnRCdWlsZGVyLnNlcmlhbGl6ZSgpLFxuICAgICAgcmVnaW9uc01hdGVyaWFsczogdGhpcy5wYXJlbnRCdWlsZGVyXG4gICAgICAgIC5lbnZpcm9ubWVudHMuZ2V0KCdwYWdlLXN0cnVjdHVyZScpLm1hdGVyaWFsc0J5UmVnaW9ucygpLFxuICAgIH07XG4gIH1cblxuICBuZXdCbG9jayhtYXRlcmlhbE5hbWUsIHJlZ2lvbk5hbWUpIHtcbiAgICAvLyBAdG9kbyBBZGQgbG9hZGVyIGhlcmUgYXMgd2UgYXJlIHVzaW5nIGZvcm0gcG9zdCAhXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSB1bmlxdWVJZCgnbWF0Jyk7XG4gICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgIHRlbXBsYXRlOiB0aGlzLmNvbnN0cnVjdFRlbXBsYXRlRGF0YSgpLFxuICAgICAgYWN0aW9uOiAncHJldmlldycsXG4gICAgfTtcbiAgICBpZiAobmV3RGF0YS50ZW1wbGF0ZS5yZWdpb25zTWF0ZXJpYWxzLmhhc093blByb3BlcnR5KHJlZ2lvbk5hbWUpID09PSBmYWxzZSkge1xuICAgICAgbmV3RGF0YS50ZW1wbGF0ZS5yZWdpb25zTWF0ZXJpYWxzW3JlZ2lvbk5hbWVdID0ge307XG4gICAgfVxuICAgIC8vIHdlIGFyZSBtb2RpZnlpbmcgdGVtcGxhdGUgZGF0YSBieSBhZGRpbmcgbmV3IG1hdGVyaWFsIGludG8gbmVlZGVkIHJlZ2lvblxuICAgIG5ld0RhdGEudGVtcGxhdGUucmVnaW9uc01hdGVyaWFsc1tyZWdpb25OYW1lXS5kZWNsW3JhbmRvbUluZGV4XSA9IHtcbiAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbE5hbWUsXG4gICAgfTtcbiAgICBuZXdEYXRhLnRlbXBsYXRlLnJlZ2lvbnNNYXRlcmlhbHNbcmVnaW9uTmFtZV0ubWF0ZXJpYWxzT3JkZXIucHVzaChyYW5kb21JbmRleCk7XG4gICAgVmlzdWFsRnJhbWUuZm9ybVN1Ym1pdChuZXdEYXRhKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuaXRlcmF0ZVRlbXBsYXRlVHlwZSh0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBkZWJ1Z2dlcjtcbiAgICBWaXN1YWxGcmFtZS5mb3JtU3VibWl0KGRhdGEpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGl0ZXJhdGVUZW1wbGF0ZVR5cGUoYXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgZW50aXR5OiB7XG4gICAgICAgIG1hdGVyaWFsc0J5UmVnaW9uRGVjbDoge30sXG4gICAgICAgIHByb3ZpZGVyczoge30sXG4gICAgICB9LFxuICAgIH07XG4gICAgYXJyLmZvckVhY2gob2JqID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IG9iai5kYXRhLmlkO1xuICAgICAgY29uc3QgcmVnaW9uc1Jlc3VsdCA9IFZpc3VhbEZyYW1lLml0ZXJhdGVUZW1wbGF0ZVJlZ2lvbnMob2JqLmNoaWxkcmVuKTtcbiAgICAgIC8vIGxheW91dCBvciB0ZW1wbGF0ZVxuICAgICAgcmVzdWx0W2tleV0gPSB7XG4gICAgICAgIHRlbXBsYXRlUmVnaW9uczogcmVnaW9uc1Jlc3VsdC50ZW1wbGF0ZVJlZ2lvbnMsXG4gICAgICAgIHRlbXBsYXRlSWQ6IG9iai5kYXRhLnRlbXBsYXRlSWQsXG4gICAgICAgIHByb3ZpZGVyczoge30sXG4gICAgICB9O1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHJlZ2lvbnNSZXN1bHQuZW50aXR5TWF0ZXJpYWxzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHJlZ2lvbnNSZXN1bHQuZW50aXR5TWF0ZXJpYWxzKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICAgICAgcmVzdWx0LmVudGl0eS5tYXRlcmlhbHNCeVJlZ2lvbkRlY2xbcmVnaW9uS2V5XSA9IHJlZ2lvbnNSZXN1bHQuZW50aXR5TWF0ZXJpYWxzW3JlZ2lvbktleV07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0W2tleV0ucHJvdmlkZXJzID0gdGhpcy5zZXJpYWxpemVQcm92aWRlcnMoa2V5KTtcbiAgICB9KTtcbiAgICByZXN1bHQuZW50aXR5LnByb3ZpZGVycyA9IHRoaXMuc2VyaWFsaXplUHJvdmlkZXJzKCdlbnRpdHknKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2VyaWFsaXplUHJvdmlkZXJzKHR5cGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnByb3ZpZGVyc1t0eXBlXSkuZm9yRWFjaChwcm92aWRlcktleSA9PiB7XG4gICAgICByZXN1bHRbcHJvdmlkZXJLZXldID0gdGhpcy5wcm92aWRlcnNbdHlwZV1bcHJvdmlkZXJLZXldLnNlcmlhbGl6ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgaXRlcmF0ZVRlbXBsYXRlUmVnaW9ucyhhcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnM6IHt9LFxuICAgICAgZW50aXR5TWF0ZXJpYWxzOiB7fSxcbiAgICB9O1xuICAgIGFyci5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAvLyBjb25zdCBrZXkgPSBvYmouZGF0YS5pZC5yZXBsYWNlKC9eLipcXC4vLCAnJyk7XG4gICAgICBjb25zdCByZWdpb25LZXkgPSBvYmouZGF0YS5yZWdpb25LZXk7XG4gICAgICBjb25zdCBlbnRpdHlEZXBlbmRlbnQgPSBvYmouZGF0YS5lbnRpdHlEZXBlbmRlbnQgfHwgZmFsc2U7XG5cbiAgICAgIGNvbnN0IHJlZ2lvbk1hdGVyaWFscyA9IFZpc3VhbEZyYW1lLml0ZXJhdGVNYXRlcmlhbHMob2JqLmNoaWxkcmVuLCByZWdpb25LZXkpO1xuXG4gICAgICBpZiAoZW50aXR5RGVwZW5kZW50ID09PSBmYWxzZSkge1xuICAgICAgICAvLyB0aGlzIGlzIGFuIGV4YWN0IHRlbXBsYXRlIHJlZ2lvblxuICAgICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zW3JlZ2lvbktleV0gPSB7XG4gICAgICAgICAgcmVnaW9uSWQ6IG9iai5kYXRhLnJlZ2lvbklkLFxuICAgICAgICAgIHJlZ2lvbktleSxcbiAgICAgICAgICB1bmlxdWVDb250ZW50SWQ6IG9iai5kYXRhLnVuaXF1ZUNvbnRlbnRJZCxcbiAgICAgICAgICBtYXRlcmlhbHNEZWNsczogcmVnaW9uTWF0ZXJpYWxzLFxuICAgICAgICAgIGVudGl0eURlcGVuZGVudCxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnNbcmVnaW9uS2V5XSA9IHtcbiAgICAgICAgICByZWdpb25JZDogb2JqLmRhdGEucmVnaW9uSWQsXG4gICAgICAgICAgcmVnaW9uS2V5LFxuICAgICAgICAgIHVuaXF1ZUNvbnRlbnRJZDogb2JqLmRhdGEudW5pcXVlQ29udGVudElkLFxuICAgICAgICAgIGVudGl0eURlcGVuZGVudCxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdGhpcyBpcyBlbnRpdHktZGVwZW5kZW50IHJlZ2lvblxuICAgICAgICByZXN1bHQuZW50aXR5TWF0ZXJpYWxzW3JlZ2lvbktleV0gPSByZWdpb25NYXRlcmlhbHM7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGl0ZXJhdGVNYXRlcmlhbHMoYXJyLCByZWdpb25LZXkpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBkZWNsOiB7fSxcbiAgICAgIG1hdGVyaWFsc09yZGVyOiBbXSxcbiAgICB9O1xuICAgIGFyci5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBvYmouZGF0YS5tYXRlcmlhbEluZGV4O1xuICAgICAgcmVzdWx0LmRlY2xba2V5XSA9IHtcbiAgICAgICAgLy8gZWRpdGFibGVzS2V5czogb2JqLmRhdGEuZWRpdGFibGVLZXlzLFxuICAgICAgICBtYXRlcmlhbDogb2JqLmRhdGEubWF0ZXJpYWxQYXRoLFxuICAgICAgfTtcbiAgICAgIHJlc3VsdC5tYXRlcmlhbHNPcmRlci5wdXNoKGtleSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaXN1YWxGcmFtZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgV1lTSVdZRyBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gQmFzZUVkaXRhYmxlLmZyYW1lJCgkbm9kZSk7XG4gICAgY29uc3QgZWRpdG9yID0gbm9kZS5kYXRhKCdlZGl0b3InKTtcbiAgICBpZiAoZWRpdG9yKSB7XG4gICAgICByZXR1cm4gZWRpdG9yLmdldERhdGEoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUuaHRtbCgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9ICRub2RlWzBdO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGF1dG9QYXJhZ3JhcGg6IGZhbHNlLFxuICAgICAgZW5hYmxlQ29udGVudEVkaXRhYmxlOiB0cnVlLFxuICAgICAgaWdub3JlRW1wdHlQYXJhZ3JhcGg6IHRydWUsXG4gICAgICBlbnRlck1vZGU6IHdpbmRvdy5DS0VESVRPUi5FTlRFUl9CUixcbiAgICB9O1xuICAgIC8vICQoKCkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gd2luZG93LkFsbG95RWRpdG9yLmVkaXRhYmxlKG5vZGUsIGNvbmZpZykuZ2V0KCduYXRpdmVFZGl0b3InKTtcbiAgICAgICRub2RlLmRhdGEoJ2VkaXRvcicsIGVkaXRvcik7XG4gICAgLy8gfSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBXWVNJV1lHO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvV1lTSVdZRy5qc1xuICoqLyIsImltcG9ydCBXWVNJV1lHIGZyb20gJy4vV1lTSVdZRyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICcuL2xpbmsnO1xuaW1wb3J0IFRleHRTdHJpbmcgZnJvbSAnLi9zdHJpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbGwoKSB7XG4gIGlmICh0eXBlb2Yod2luZG93Lk1PTlNURVJfRURJVEFCTEVTKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVMgPSB7fTtcbiAgfVxuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ3d5c2l3eWcnXSA9IG5ldyBXWVNJV1lHKCk7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snbGluayddID0gbmV3IExpbmsoKTtcbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWydpbWFnZSddID0gbmV3IEltYWdlKCk7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snc3RyaW5nJ10gPSBuZXcgVGV4dFN0cmluZygpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2FsbC5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBJbWFnZSBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICBjb25zdCAkaW1nID0gJG5vZGUuZmluZCgnaW1nJykuZmlyc3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3JjOiAkaW1nLmF0dHIoJ3NyYycpLFxuICAgICAgYWx0OiAkaW1nLmF0dHIoJ2FsdCcpLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9pbWFnZS5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiAkbm9kZS5kYXRhKCdvcmlnaW5hbEhyZWYnKSA/ICRub2RlLmRhdGEoJ29yaWdpbmFsSHJlZicpIDogJG5vZGUuYXR0cignaHJlZicpLFxuICAgICAgYW5jaG9yOiAkbm9kZS5odG1sKCksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvbGluay5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBUZXh0U3RyaW5nIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBCYXNlRWRpdGFibGUuZnJhbWUkKCRub2RlKTtcbiAgICBjb25zdCBlZGl0b3IgPSBub2RlLmRhdGEoJ2VkaXRvcicpO1xuICAgIGlmIChlZGl0b3IpIHtcbiAgICAgIHJldHVybiBlZGl0b3IuZ2V0RGF0YSgpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZS5odG1sKCk7XG4gIH1cblxuICBpbml0aWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gJG5vZGVbMF07XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBhbGxvd2VkQ29udGVudDogJ2kgdScsXG4gICAgICB0b29sYmFyczoge1xuICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICBzZWxlY3Rpb25zOiB3aW5kb3cuQWxsb3lFZGl0b3IuU2VsZWN0aW9ucyxcbiAgICAgICAgICB0YWJJbmRleDogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhdXRvUGFyYWdyYXBoOiBmYWxzZSxcbiAgICAgIGVuYWJsZUNvbnRlbnRFZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlnbm9yZUVtcHR5UGFyYWdyYXBoOiB0cnVlLFxuICAgICAgYmxvY2tsZXNzOiB0cnVlLFxuICAgICAgZW50ZXJNb2RlOiB3aW5kb3cuQ0tFRElUT1IuRU5URVJfQlIsXG4gICAgfTtcbiAgICAvLyAkKCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZWRpdG9yID0gd2luZG93LkFsbG95RWRpdG9yLmVkaXRhYmxlKG5vZGUsIGNvbmZpZykuZ2V0KCduYXRpdmVFZGl0b3InKTtcbiAgICAgIGVkaXRvci5vbigna2V5JywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQuZGF0YS5rZXlDb2RlID09PSAxMyB8fCBldmVudC5kYXRhLmtleUNvZGUgPT09IHdpbmRvdy5DS0VESVRPUi5TSElGVCArIDEzKSB7XG4gICAgICAgICAgLy8gYWRkIHNhdmluZyBmdW5jdGlvbiBoZXJlXG4gICAgICAgICAgZXZlbnQuY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZWRpdG9yLm9uKCdwYXN0ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQuZGF0YS5kYXRhVmFsdWUgPSBldmVudC5kYXRhLmRhdGFWYWx1ZS5yZXBsYWNlKC88YnJbXFxzXFwvXSo+L2dtaSwgJyAnKTtcbiAgICAgIH0pO1xuICAgICAgJG5vZGUuZGF0YSgnZWRpdG9yJywgZWRpdG9yKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZygkbm9kZSwgbm9kZSk7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgICAvLyB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRTdHJpbmc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9zdHJpbmcuanNcbiAqKi8iLCJpbXBvcnQgRGF0YVByb3ZpZGVyIGZyb20gJy4uL0RhdGFQcm92aWRlcic7XG5cbmNsYXNzIFN0YXRpY0NvbnRlbnQgZXh0ZW5kcyBEYXRhUHJvdmlkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm92aWRlZEtleXMpIHtcbiAgICBzdXBlcignRG90UGxhbnRcXFxcTW9uc3RlclxcXFxEYXRhRW50aXR5XFxcXFN0YXRpY0NvbnRlbnRQcm92aWRlcicsIHByb3ZpZGVkS2V5cyk7XG4gIH1cblxuICBmaWxsQ29uZmlnKGRhdGEpIHtcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YTtcbiAgICBuZXdEYXRhLmVudGl0aWVzID0gdGhpcy5zZXJpYWxpemVLZXlzKCk7XG4gICAgcmV0dXJuIG5ld0RhdGE7XG4gIH1cblxuICBzZXJpYWxpemVNYXRlcmlhbChyZWdpb25LZXksIG1hdGVyaWFsS2V5LCBkYXRhS2V5cywgJHJlZ2lvbiwgJG1hdGVyaWFsKSB7XG4gICAgY29uc3QgbWF0ZXJpYWxFZGl0YWJsZUtleXMgPSAkbWF0ZXJpYWwuZGF0YSgnZWRpdGFibGVLZXlzJyk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5yZWN1cnNpdmVTZXJpYWxpemUobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRtYXRlcmlhbCwgZGF0YUtleXMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZWN1cnNpdmVTZXJpYWxpemUobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRyb290LCBkYXRhS2V5cywgcHJlZml4ID0gJycpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBkYXRhS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBvYmogPSBtYXRlcmlhbEVkaXRhYmxlS2V5c1trZXldIHx8ICdOT19TVUNIX0tFWSc7XG4gICAgICBpZiAob2JqID09PSAnTk9fU1VDSF9LRVknKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvYmogPT09IE9iamVjdChvYmopKSB7XG4gICAgICAgIC8vIGl0J3MgcmVjdXJzaXZlXG4gICAgICAgIC8vIGZpcnN0IC0gZmluZCBhbGwgYmxvY2tzXG4gICAgICAgIGNvbnN0ICRibG9ja3MgPSAkcm9vdC5maW5kKGBbZGF0YS1yZWN1cnNpdmUtaXRlbT1cIiR7a2V5fVwiXWApO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICByZXN1bHRba2V5XSA9IFtdO1xuICAgICAgICAkYmxvY2tzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh0aGF0LnJlY3Vyc2l2ZVNlcmlhbGl6ZShvYmosICR0aGlzLCBPYmplY3Qua2V5cyhvYmopLCAnaXRlbS4nKSk7XG4gICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGl0J3MgcGxhaW4gZmllbGRcbiAgICAgICAgY29uc3QgJG5vZGUgPSAkcm9vdC5maW5kKGBbZGF0YS1lZGl0YWJsZS1rZXk9XCIke3ByZWZpeH0ke2tleX1cIl1gKS5maXJzdCgpO1xuICAgICAgICBpZiAoJG5vZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdFtrZXldID0gRGF0YVByb3ZpZGVyLmVkaXRhYmxlLnNlcmlhbGl6ZUVkaXRhYmxlKCRub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRpY0NvbnRlbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL3Byb3ZpZGVycy9TdGF0aWNDb250ZW50LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9