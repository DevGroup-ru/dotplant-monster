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
	        this.$selectedMaterial.mod('active', true);
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
	    value: function newBlock(materialName, regionName) {
	      // @todo Add loader here as we are using form post !
	      var randomIndex = (0, _uniqid2.default)('mat');
	      var newData = this.iterateTemplateType(this.pageStructureJson);
	      debugger;
	      if (newData.entity.regionsMaterials.hasOwnProperty(regionName) === false) {
	        newData.entity.regionsMaterials[regionName] = {};
	      }
	      // we are modifying template data by adding new material into needed region
	      newData.entity.regionsMaterials[regionName].decl[randomIndex] = {
	        material: materialName
	      };
	      newData.entity.regionsMaterials[regionName].materialsOrder.push(randomIndex);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjhhOTdiNzViNWYyZjBlMGRjOGUiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL0Jhc2VFZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9Gcm9udGVuZE1vbnN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXJGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0VkaXRhYmxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL1dZU0lXWUcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2FsbC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9wcm92aWRlcnMvU3RhdGljQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9idW5kbGUuY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkZyb250ZW5kTW9uc3RlciIsIkJhc2VFbnZpcm9ubWVudCIsInZpc3VhbEJ1aWxkZXIiLCJuYW1lIiwidGFyZ2V0IiwiJCIsInNldHRpbmdzIiwiY29udGVudFdpbmRvdyIsImN1cnJlbnRFbnZpcm9ubWVudCIsImVudmlyb25tZW50cyIsImdldCIsImRlYWN0aXZhdGUiLCJjbGVhclN0YWNrYWJsZSIsImZ1bmMiLCJhcmdzIiwic2VuZE1lc3NhZ2UiLCJCYXNlRWRpdGFibGUiLCIkbm9kZSIsIkZyYW1lQXBpIiwibGlzdGVuZXIiLCJjYWxsYmFjayIsImNhbGxiYWNrSGFuZGxlciIsImV2ZW50IiwibWVzc2FnZSIsImlzSWUiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiYXBwbHkiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJzdHJpbmdpZnkiLCJwb3N0TWVzc2FnZSIsImlzIiwiaWUiLCJwYXJhbXMiLCJ2aXN1YWxCdWxkZXIiLCJoYXNoQXBpIiwicGFyZW50IiwiaGFzQnVpbGRlciIsIlZpc3VhbEZyYW1lIiwic21vb3RoU2Nyb2xsIiwiaW5pdCIsInVzZXJTZXR0aW5ncyIsIkZyb250ZW5kTW9uc3RlclNldHRpbmdzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJidWlsZGVyIiwiJGJ1aWxkZXIiLCJsZW5ndGgiLCJWaXN1YWxCdWlsZGVyIiwicmVzb2x1dGlvblN3aXRjaGVyIiwiTWFwIiwiZW52aXJvbm1lbnRTZWxlY3RvciIsInN3aXRjaEVudmlyb25tZW50IiwiZmlyc3QiLCJtb2QiLCJiaW5kTWVzc2FnZUxpc3RlbmVyIiwiY29udHJvbHMiLCJWaXN1YWxCdWlsZGVyU2V0dGluZ3MiLCJidW5kbGVzIiwiJHN0YWNrYWJsZSIsInRoYXQiLCJiZW1FbGVtIiwiJHJlc29sdXRpb25MaW5rcyIsImNsaWNrIiwid2lkdGgiLCIkc2VjdGlvbkxpbmtzIiwiZW52aXJvbm1lbnROYW1lIiwiYWN0aXZhdGUiLCJlbXB0eSIsInBhbmVDbGFzcyIsIm1vZGlmaWVyIiwiZmluZCIsIiRuZXdQYW5lIiwiYXBwZW5kIiwibWF0ZXJpYWxzIiwiaGFzT3duUHJvcGVydHkiLCJyZXN1bHQiLCJzZXJpYWxpemVQYWdlIiwiY29uc29sZSIsImxvZyIsInJlc3VsdEJ5UHJvdmlkZXJzIiwicHJvdmlkZWRLZXlzIiwiZnJhbWVDb250ZW50V2luZG93IiwiTU9OU1RFUl9FRElUX01PREVfREFUQSIsInRlbXBsYXRlIiwicHJvdmlkZXJJbmRleCIsInJlZ2lvbnMiLCJyZWdpb25LZXkiLCJtYXRlcmlhbEluZGV4IiwiZGF0YUtleXMiLCJlbnZpcm9ubWVudCIsInBhZ2VDaGFuZ2VkIiwiJGNvbnRyb2xzIiwiZWxlbSIsImxvY2F0aW9uIiwicmVsb2FkIiwiQWN0aW9uRW52aXJvbm1lbnQiLCJDdXN0b21pemF0aW9uRW52aXJvbm1lbnQiLCJNYXRlcmlhbHNFbnZpcm9ubWVudCIsImluaXRNYXRlcmlhbHNTZWxlY3RvciIsIiRtYXRlcmlhbHNHcm91cHMiLCIkbWF0ZXJpYWxzTGlzdCIsImkxOG5CdW5kbGVOYW1lIiwicG9seWdsb3QiLCJ0IiwiYnVuZGxlIiwiJGJ1bmRsZVRpdGxlIiwiZnVsbFBhdGgiLCJwdXNoIiwiZ3JvdXBzIiwiZ3JvdXBOYW1lIiwiZ3JvdXAiLCJpMThuR3JvdXBOYW1lIiwiJGxpIiwiJGxpc3QiLCJpdGVtcyIsIm1hdGVyaWFsTmFtZSIsIm1hdGVyaWFsIiwiaTE4bk1hdGVyaWFsTmFtZSIsIiRpdGVtIiwiZG9jdW1lbnQiLCJvbiIsImNsaWNrSGFuZGxlciIsIiR0aGlzIiwidG9nZ2xlTW9kIiwiZ3JvdXBQYXRoIiwiZWFjaCIsIml0IiwiJG1hdGVyaWFsc1BhbmUiLCJzaG93IiwiaGlkZSIsIiRncm91cHNQYW5lIiwiY3JlYXRlU3RhY2thYmxlUGFuZSIsIlBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCIsImluaXRQYWdlU3RydWN0dXJlRWxlbWVudCIsImVkaXRNb2RlRGF0YSIsIiRwYWdlU3RydWN0dXJlIiwiJHN0cnVjdHVyZVBhbmUiLCJqc3RyZWUiLCJsYXlvdXQiLCJsYXlvdXRJdGVtIiwiaWQiLCJ0ZW1wbGF0ZUlkIiwidGV4dCIsImljb24iLCJzdGF0ZSIsIm9wZW5lZCIsImNoaWxkcmVuIiwidGVtcGxhdGVJdGVtIiwiJGxheW91dFJlZ2lvbnMiLCJ0YXJnZXQkIiwiaXRlciIsInByb2Nlc3NMYXlvdXQiLCJpdGVtIiwidGVtcGxhdGVSZWdpb25zIiwicmVnaW9uIiwicGFnZVN0cnVjdHVyZSIsImNvcmUiLCJ0aGVtZXMiLCJwbHVnaW5zIiwidHlwZXMiLCJ0ZW1wbGF0ZVJlZ2lvbiIsImNvbnRlbnRUZW1wbGF0ZVJlZ2lvbiIsImpzdHJlZU9iaiIsInBhZ2VTdHJ1Y3R1cmVKc29uIiwiZ2V0X2pzb24iLCJub19zdGF0ZSIsIm5vX2lkIiwibm9fbGlfYXR0ciIsIm5vX2FfYXR0ciIsInJlZ2lvbnNTdHJ1Y3R1cmUiLCJzZXJpYWxpemUiLCJtYXRlcmlhbHNEZWNsIiwiJGxheW91dFJlZ2lvbiIsImV4dHJhY3RSZWdpb25EYXRhIiwiJGxheW91dE1hdGVyaWFscyIsIiRsYXlvdXRNYXRlcmlhbCIsInByb2Nlc3NMYXlvdXRNYXRlcmlhbCIsImxheW91dE1hdGVyaWFsSXRlbSIsImxheW91dE1hdGVyaWFsIiwicHJlZml4IiwibWF0ZXJpYWxQYXRoIiwidHlwZSIsImVkaXRhYmxlS2V5cyIsIm5vZGUiLCIkcmVnaW9ucyIsInByb2Nlc3NUZW1wbGF0ZVJlZ2lvbiIsImlzQ29udGVudCIsIiR0ZW1wbGF0ZVJlZ2lvbiIsImVudGl0eURlcGVuZGVudCIsIiRyZWdpb25NYXRlcmlhbHMiLCJwcm9jZXNzVGVtcGxhdGVSZWdpb25NYXRlcmlhbCIsIiRyZWdpb25NYXRlcmlhbCIsInJlZ2lvbklkIiwidW5pcXVlQ29udGVudElkIiwiU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsInVuaXFpZCIsIm1vcmVFbnRyb3B5IiwicmV0SWQiLCJfZm9ybWF0U2VlZCIsInNlZWQiLCJyZXFXaWR0aCIsInBhcnNlSW50IiwidG9TdHJpbmciLCJzbGljZSIsIkFycmF5Iiwiam9pbiIsIiRnbG9iYWwiLCJHTE9CQUwiLCIkbG9jdXR1cyIsInBocCIsInVuaXFpZFNlZWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJEYXRlIiwiZ2V0VGltZSIsInRvRml4ZWQiLCJEYXRhUHJvdmlkZXIiLCJjbGFzc05hbWUiLCJhc3NvY2lhdGlvbnMiLCJhc3NvY2lhdGUiLCIkcmVnaW9uIiwibWF0ZXJpYWxLZXkiLCIkbWF0ZXJpYWwiLCJtYXRlcmlhbEVkaXRhYmxlS2V5cyIsImluaXRpYWxpemVNYXRlcmlhbEVkaXQiLCIkcm9vdCIsIm9iaiIsIiRibG9ja3MiLCJjb3VudGVyIiwiZWRpdGFibGUiLCJpbml0aWFsaXplRWRpdGFibGUiLCJzZXJpYWxpemVNYXRlcmlhbCIsImNsYXNzIiwiZmlsbENvbmZpZyIsIkRhdGFQcm92aWRlckZhY3RvcnkiLCJwcm92aWRlckRlY2wiLCJwcm92aWRlciIsIkVkaXRhYmxlIiwiZWRpdGFibGVzQnlUeXBlIiwiTU9OU1RFUl9FRElUQUJMRVMiLCJleHBvcnRWYXJpYWJsZSIsInNlcmlhbGl6ZU5vZGUiLCJzdHJpbmciLCJIYXNoQXBpIiwiZnVuY3Rpb25DYWxscyIsImhhc2giLCJtYXRjaGVzIiwibWF0Y2giLCJkZWNvZGVVUklDb21wb25lbnQiLCJpbml0aWFsaXplIiwicGFnZVN0cnVjdHVyZUpzb25EYXRhIiwicGFyZW50V2luZG93IiwicGFyZW50TW9uc3RlciIsInBhcmVudEJ1aWxkZXIiLCJjdXJyZW50TW9uc3RlckNvbnRlbnQiLCJtYWtlSXRNb3ZlIiwicmVzaXplIiwidXBkYXRlSGFuZGxlcnMiLCJpbml0UHJvdmlkZXJzIiwiTW9uc3RlckVkaXREYXRhIiwicHJvdmlkZXJzIiwiZ2V0UHJvdmlkZXJzIiwiZW50aXR5IiwiYXJyIiwiZmFjdG9yeSIsIiRtb25zdGVyQ29udGVudENhY2hlIiwiJHNlbGVjdGVkTWF0ZXJpYWwiLCIkaGFuZGxlcnMiLCJjc3MiLCJwb3NpdGlvbiIsInRvcCIsImhlaWdodCIsIm1vdXNlZW50ZXIiLCJob3ZlckluIiwiYWRkQ2xhc3MiLCJtb3VzZWxlYXZlIiwiaG92ZXJPdXQiLCJyZW1vdmVDbGFzcyIsInNlbGVjdE1hdGVyaWFsIiwiJHByZXYiLCJwcmV2IiwiaW5zZXJ0QmVmb3JlIiwiJG5leHQiLCJuZXh0IiwiaW5zZXJ0QWZ0ZXIiLCIkY2xvbmVkTWF0ZXJpYWwiLCJjbG9uZSIsInJhbmRvbUluZGV4IiwiYXR0ciIsImNvbmZpcm0iLCJyZW1vdmUiLCIkbW9uc3RlckNvbnRlbnQiLCIkbW9uc3RlciIsInNlcmlhbGl6ZVVuaXF1ZUNvbnRlbnQiLCJzZW5kVG9CdWlsZGVyIiwiYmxvY2siLCJWaXN1YWxGcmFtZVNldHRpbmdzIiwicHJvdmlkZXJzRW50aXRpZXMiLCJyZWdpb25zTWF0ZXJpYWxzIiwibWF0ZXJpYWxzQnlSZWdpb25zIiwicmVnaW9uTmFtZSIsIm5ld0RhdGEiLCJpdGVyYXRlVGVtcGxhdGVUeXBlIiwiZGVjbCIsIm1hdGVyaWFsc09yZGVyIiwiZm9ybVN1Ym1pdCIsImFjdGlvbiIsIm1hdGVyaWFsc0J5UmVnaW9uRGVjbCIsInJlZ2lvbnNSZXN1bHQiLCJpdGVyYXRlVGVtcGxhdGVSZWdpb25zIiwiZW50aXR5TWF0ZXJpYWxzIiwic2VyaWFsaXplUHJvdmlkZXJzIiwicHJvdmlkZXJLZXkiLCJ2YWx1ZSIsInJlZnJlc2hNb25zdGVyQ29udGVudENhY2hlIiwiJGZvcm0iLCIkaW5wdXQiLCIkY3NyZiIsInZhbCIsImFwcGVuZFRvIiwic3VibWl0IiwidGVtcGxhdGVSZWdpb25zT3JkZXIiLCJyZWdpb25NYXRlcmlhbHMiLCJpdGVyYXRlTWF0ZXJpYWxzIiwibWF0ZXJpYWxzRGVjbHMiLCJXWVNJV1lHIiwiZnJhbWUkIiwiZWRpdG9yIiwiZ2V0RGF0YSIsImh0bWwiLCJjb25maWciLCJhdXRvUGFyYWdyYXBoIiwiZW5hYmxlQ29udGVudEVkaXRhYmxlIiwiaWdub3JlRW1wdHlQYXJhZ3JhcGgiLCJlbnRlck1vZGUiLCJDS0VESVRPUiIsIkVOVEVSX0JSIiwiQWxsb3lFZGl0b3IiLCJhbGwiLCJJbWFnZSIsIiRpbWciLCJzcmMiLCJhbHQiLCJMaW5rIiwiaHJlZiIsImFuY2hvciIsIlRleHRTdHJpbmciLCJhbGxvd2VkQ29udGVudCIsInRvb2xiYXJzIiwic3R5bGVzIiwic2VsZWN0aW9ucyIsIlNlbGVjdGlvbnMiLCJ0YWJJbmRleCIsImJsb2NrbGVzcyIsImtleUNvZGUiLCJTSElGVCIsImNhbmNlbCIsImRhdGFWYWx1ZSIsInJlcGxhY2UiLCJlIiwiU3RhdGljQ29udGVudCIsImVudGl0aWVzIiwic2VyaWFsaXplS2V5cyIsInJlY3Vyc2l2ZVNlcmlhbGl6ZSIsIndhcm4iLCJzZXJpYWxpemVFZGl0YWJsZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7QUFFQTs7Ozs7O0FBRUFBLFFBQU9DLGVBQVAsR0FBeUIsK0JBQXpCO0FBQ0EsRzs7Ozs7Ozs7Ozs7Ozs7QUNMQTs7Ozs7Ozs7S0FFTUMsZTtBQUNKLDRCQUFZQyxhQUFaLEVBQTJCQyxJQUEzQixFQUFpQztBQUFBOztBQUMvQixVQUFLRCxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLE1BQUwsR0FBY0MsRUFBRSxLQUFLSCxhQUFMLENBQW1CSSxRQUFuQixDQUE0QixnQkFBNUIsQ0FBRixFQUFpRCxDQUFqRCxFQUFvREMsYUFBbEU7QUFDRDs7OztnQ0FFVTtBQUNUO0FBQ0EsV0FBSSxLQUFLSixJQUFMLEtBQWMsS0FBS0QsYUFBTCxDQUFtQk0sa0JBQXJDLEVBQXlEO0FBQ3ZEO0FBQ0Q7QUFDRCxXQUFJLEtBQUtOLGFBQUwsQ0FBbUJNLGtCQUF2QixFQUEyQztBQUN6QyxjQUFL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QUFDQSxlQUFJeEMsTUFBTWtDLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIrQixxQkFBUWtTLElBQVIsa0NBQTRDNUwsTUFBNUMsR0FBcUR4SSxHQUFyRDtBQUNBO0FBQ0Q7QUFDRGdDLGtCQUFPaEMsR0FBUCxJQUFjLHVCQUFhNkwsUUFBYixDQUFzQndJLGlCQUF0QixDQUF3Q3BXLEtBQXhDLENBQWQ7QUFDRDtBQUNGLFFBM0JEO0FBNEJBLGNBQU8rRCxNQUFQO0FBQ0Q7Ozs7OzttQkFHWWdTLGE7Ozs7Ozs7O0FDdERmLDBDIiwiZmlsZSI6InZpc3VhbC1idWlsZGVyL3NjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGI4YTk3Yjc1YjVmMmYwZTBkYzhlXG4gKiovIiwiaW1wb3J0ICcuL2J1bmRsZS5jc3MnO1xuXG5pbXBvcnQgRnJvbnRlbmRNb25zdGVyIGZyb20gJy4vRnJvbnRlbmRNb25zdGVyJztcblxud2luZG93LkZyb250ZW5kTW9uc3RlciA9IG5ldyBGcm9udGVuZE1vbnN0ZXIoKTtcbi8vXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9idW5kbGUuanNcbiAqKi8iLCJpbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi8uLi92aXN1YWwtZnJhbWUvRnJhbWVBcGknO1xuXG5jbGFzcyBCYXNlRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2aXN1YWxCdWlsZGVyLCBuYW1lKSB7XG4gICAgdGhpcy52aXN1YWxCdWlsZGVyID0gdmlzdWFsQnVpbGRlcjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFyZ2V0ID0gJCh0aGlzLnZpc3VhbEJ1aWxkZXIuc2V0dGluZ3NbJ2ZyYW1lLXNlbGVjdG9yJ10pWzBdLmNvbnRlbnRXaW5kb3c7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICAvLyBkZWFjdGl2YXRlIGN1cnJlbnQgc2VsZWN0ZWQgZW52aXJvbm1lbnRcbiAgICBpZiAodGhpcy5uYW1lID09PSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3VycmVudEVudmlyb25tZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnZpc3VhbEJ1aWxkZXIuY3VycmVudEVudmlyb25tZW50KSB7XG4gICAgICB0aGlzLnZpc3VhbEJ1aWxkZXIuZW52aXJvbm1lbnRzLmdldCh0aGlzLnZpc3VhbEJ1aWxkZXIuY3VycmVudEVudmlyb25tZW50KS5kZWFjdGl2YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRhcmdldCQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0LiQ7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMudmlzdWFsQnVpbGRlci5jbGVhclN0YWNrYWJsZSgpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2UoZnVuYywgYXJncykge1xuICAgIHJldHVybiBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLnRhcmdldCwgZnVuYywgYXJncyk7XG4gIH1cblxuICBwYWdlQ2hhbmdlZCgpIHtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VFbnZpcm9ubWVudDtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvQmFzZUVudmlyb25tZW50LmpzXG4gKiovIiwiY2xhc3MgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuXG4gIH1cblxuICBpbml0aWFsaXplRWRpdGFibGUoJG5vZGUpIHtcblxuICB9XG5cbiAgc3RhdGljIGdldCBmcmFtZSQoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy4kO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VFZGl0YWJsZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9CYXNlRWRpdGFibGUuanNcbiAqKi8iLCJjbGFzcyBGcmFtZUFwaSB7XG4gIHN0YXRpYyBnZXQgaXNJZSgpIHtcbiAgICAvKiBnbG9iYWwgaXMgKi9cbiAgICBpZiAodHlwZW9mKGlzKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBpcy5pZSgpOy8vIHx8IGlzLmVkZ2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRpYyBiaW5kTWVzc2FnZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFja0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgIGxldCBtZXNzYWdlID0gbnVsbDtcbiAgICAgIGlmIChGcmFtZUFwaS5pc0llKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZSA9IGV2ZW50LmRhdGE7XG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0ZW5lclttZXNzYWdlLmZ1bmNdKSB7XG4gICAgICAgIGxpc3RlbmVyW21lc3NhZ2UuZnVuY10uYXBwbHkobGlzdGVuZXIsIG1lc3NhZ2UuYXJncyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElFOFxuICAgICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbm1lc3NhZ2UnLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHNlbmRNZXNzYWdlKHRhcmdldCwgZnVuYywgYXJncykge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBmdW5jLFxuICAgICAgYXJnc1xuICAgIH07XG4gICAgY29uc3QgbWVzc2FnZSA9IEZyYW1lQXBpLmlzSWUgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IGRhdGE7XG5cbiAgICB0YXJnZXQucG9zdE1lc3NhZ2UobWVzc2FnZSwgJyonKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcmFtZUFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanNcbiAqKi8iLCJpbXBvcnQgVmlzdWFsQnVpbGRlciBmcm9tICcuL2NvbXBvbmVudHMvYnVpbGRlci9WaXN1YWxCdWlsZGVyJztcbmltcG9ydCBWaXN1YWxGcmFtZSBmcm9tICcuL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL1Zpc3VhbEZyYW1lJztcbmltcG9ydCBIYXNoQXBpIGZyb20gJy4vY29tcG9uZW50cy92aXN1YWwtZnJhbWUvSGFzaEFwaSc7XG5cbmNsYXNzIEZyb250ZW5kTW9uc3RlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFyYW1zKCk7XG4gICAgdGhpcy52aXN1YWxCdWxkZXIgPSBudWxsO1xuICAgIHRoaXMuaGFzaEFwaSA9IG5ldyBIYXNoQXBpKCk7XG4gICAgaWYgKHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdyAmJiB3aW5kb3cucGFyZW50LkZyb250ZW5kTW9uc3Rlcikge1xuICAgICAgaWYgKHdpbmRvdy5wYXJlbnQuRnJvbnRlbmRNb25zdGVyLmhhc0J1aWxkZXIpIHtcbiAgICAgICAgdGhpcy5WaXN1YWxGcmFtZSA9IG5ldyBWaXN1YWxGcmFtZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiBnbG9iYWwgc21vb3RoU2Nyb2xsOiBmYWxzZSovXG4gICAgaWYgKHR5cGVvZihzbW9vdGhTY3JvbGwpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc21vb3RoU2Nyb2xsLmluaXQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBWaXN1YWxCdWlsZGVyIGNsYXNzIGluc3RhbmNlXG4gICAqIEByZXR1cm5zIFZpc3VhbEJ1aWxkZXJcbiAgICovXG4gIGdldCBidWlsZGVyKCkge1xuICAgIGlmICh0aGlzLnZpc3VhbEJ1bGRlciA9PT0gbnVsbCkge1xuICAgICAgdGhpcy52aXN1YWxCdWxkZXIgPSBuZXcgVmlzdWFsQnVpbGRlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy52aXN1YWxCdWxkZXI7XG4gIH1cblxuICAvKipcbiAgICogSWYgdGhpcyBGcm9udGVuZE1vbnN0ZXIgaW5zdGFuY2UgaGFzIFZpc3VhbCBCdWlsZGVyIG9uIHBhZ2VcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaGFzQnVpbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZGVyLiRidWlsZGVyLmxlbmd0aCA9PT0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIEZyb250ZW5kTW9uc3RlciBzZXR0aW5ncy5cbiAgICogVXNlcyBGcm9udGVuZE1vbnN0ZXJTZXR0aW5ncyB2YXJpYWJsZSBpZiBwcm92aWRlZCBvciBkZWZhdWx0IHZhbHVlcyBpbnN0ZWFkLlxuICAgKi9cbiAgcGFyYW1zKCkge1xuICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5Gcm9udGVuZE1vbnN0ZXJTZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHVzZXJTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcm9udGVuZE1vbnN0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL0Zyb250ZW5kTW9uc3Rlci5qc1xuICoqLyIsImltcG9ydCBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50JztcbmltcG9ydCBNYXRlcmlhbHNFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9NYXRlcmlhbHNFbnZpcm9ubWVudCc7XG5pbXBvcnQgQ3VzdG9taXphdGlvbkVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudCc7XG5pbXBvcnQgQWN0aW9uRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvQWN0aW9uRW52aXJvbm1lbnQnO1xuaW1wb3J0IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9QYWdlU3RydWN0dXJlRW52aXJvbm1lbnQnO1xuaW1wb3J0IEZyYW1lQXBpIGZyb20gJy4vLi4vdmlzdWFsLWZyYW1lL0ZyYW1lQXBpJztcbi8vIGltcG9ydCBFZGl0YWJsZSBmcm9tICcuL0VkaXRhYmxlJztcblxuY2xhc3MgVmlzdWFsQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFyYW1zKCk7XG4gICAgdGhpcy5yZXNvbHV0aW9uU3dpdGNoZXIoKTtcblxuICAgIHRoaXMuZW52aXJvbm1lbnRzID0gbmV3IE1hcChbXG4gICAgICBbJ3NpdGUtc3RydWN0dXJlJywgbmV3IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCh0aGlzLCAnc2l0ZS1zdHJ1Y3R1cmUnKV0sXG4gICAgICBbJ3BhZ2Utc3RydWN0dXJlJywgbmV3IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCh0aGlzLCAncGFnZS1zdHJ1Y3R1cmUnKV0sXG4gICAgICBbJ21hdGVyaWFscycsIG5ldyBNYXRlcmlhbHNFbnZpcm9ubWVudCh0aGlzLCAnbWF0ZXJpYWxzJyldLFxuICAgICAgWydjdXN0b21pemF0aW9uJywgbmV3IEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCh0aGlzLCAnY3VzdG9taXphdGlvbicpXSxcbiAgICAgIFsnYWN0aW9uJywgbmV3IEFjdGlvbkVudmlyb25tZW50KHRoaXMsICdhY3Rpb24nKV0sXG4gICAgXSk7XG5cbiAgICB0aGlzLmVudmlyb25tZW50U2VsZWN0b3IoKTtcblxuICAgIC8vIHNlbGVjdCBmaXJzdCBlbnZpcm9ubWVudCBieSBkZWZhdWx0XG4gICAgdGhpcy5zd2l0Y2hFbnZpcm9ubWVudCgnc2l0ZS1zdHJ1Y3R1cmUnKTtcbiAgICAkKCcubW9uc3Rlci1lbnZpcm9ubWVudC1zZWxlY3Rvcl9fZW52aXJvbm1lbnQtbGluaycpXG4gICAgICAuZmlyc3QoKVxuICAgICAgLm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgRnJhbWVBcGkuYmluZE1lc3NhZ2VMaXN0ZW5lcih0aGlzKTtcblxuICAgIC8vIHRoaXMuZWRpdGFibGUgPSBuZXcgRWRpdGFibGUoKTtcblxuICAgIHRoaXMuY29udHJvbHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIFZpc3VhbEJ1aWxkZXIgc2V0dGluZ3MuXG4gICAqIFVzZXMgVmlzdWFsQnVpbGRlclNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAqL1xuICBwYXJhbXMoKSB7XG4gICAgY29uc3QgdXNlclNldHRpbmdzID0gd2luZG93LlZpc3VhbEJ1aWxkZXJTZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICdlbGVtZW50LXNlbGVjdG9yJzogJy5tb25zdGVyLXZpc3VhbC1idWlsZGVyJyxcbiAgICAgICdmcmFtZS1zZWxlY3Rvcic6ICcubW9uc3Rlci12aXN1YWwtZnJhbWUnLFxuICAgICAgYnVuZGxlczoge30sXG4gICAgICAnc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyc6ICdtb25zdGVyLXN0YWNrYWJsZS1jb250YWluZXInLFxuICAgICAgJ25ldy1ibG9jay11cmwnOiAnL21vbnN0ZXIvdmlzdWFsLWJ1aWxkZXIvbmV3LWJsb2NrJyxcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHVzZXJTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLiRidWlsZGVyID0gJCh0aGlzLnNldHRpbmdzWydlbGVtZW50LXNlbGVjdG9yJ10pO1xuICAgIHRoaXMuJHN0YWNrYWJsZSA9ICQoYC4ke3RoaXMuc2V0dGluZ3NbJ3N0YWNrYWJsZS1jb250YWluZXItY2xhc3MnXX1gKTtcbiAgfVxuXG4gIHJlc29sdXRpb25Td2l0Y2hlcigpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBiZW1FbGVtID0gJ3Jlc29sdXRpb24tc3dpdGNoZXJfX3Jlc29sdXRpb24tbGluayc7XG5cbiAgICBjb25zdCAkcmVzb2x1dGlvbkxpbmtzID0gJChgLiR7YmVtRWxlbX1gKTtcbiAgICAkcmVzb2x1dGlvbkxpbmtzLmNsaWNrKGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgJHJlc29sdXRpb25MaW5rcy5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgICQodGhhdC5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSkud2lkdGgoJCh0aGlzKS5kYXRhKCdyZXNvbHV0aW9uV2lkdGgnKSk7XG4gICAgICAkKHRoaXMpLm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBlbnZpcm9ubWVudFNlbGVjdG9yKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGJlbUVsZW0gPSAnbW9uc3Rlci1lbnZpcm9ubWVudC1zZWxlY3Rvcl9fZW52aXJvbm1lbnQtbGluayc7XG5cbiAgICBjb25zdCAkc2VjdGlvbkxpbmtzID0gJChgLiR7YmVtRWxlbX1gKTtcbiAgICAkc2VjdGlvbkxpbmtzLmNsaWNrKGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgY29uc3QgZW52aXJvbm1lbnROYW1lID0gJCh0aGlzKS5kYXRhKCdlbnZpcm9ubWVudE5hbWUnKTtcbiAgICAgIGlmICh0aGF0LmN1cnJlbnRFbnZpcm9ubWVudCA9PT0gZW52aXJvbm1lbnROYW1lKSB7XG4gICAgICAgICRzZWN0aW9uTGlua3MubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgICAgIHRoYXQuZW52aXJvbm1lbnRzLmdldChlbnZpcm9ubWVudE5hbWUpLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgdGhhdC5jdXJyZW50RW52aXJvbm1lbnQgPSBudWxsO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgICRzZWN0aW9uTGlua3MubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgICB0aGF0LnN3aXRjaEVudmlyb25tZW50KGVudmlyb25tZW50TmFtZSk7XG4gICAgICAkKHRoaXMpLm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBzd2l0Y2hFbnZpcm9ubWVudChlbnZpcm9ubWVudE5hbWUpIHtcbiAgICB0aGlzLmVudmlyb25tZW50cy5nZXQoZW52aXJvbm1lbnROYW1lKS5hY3RpdmF0ZSgpO1xuICAgIHRoaXMuY3VycmVudEVudmlyb25tZW50ID0gZW52aXJvbm1lbnROYW1lO1xuICB9XG5cbiAgY2xlYXJTdGFja2FibGUoKSB7XG4gICAgdGhpcy4kc3RhY2thYmxlLmVtcHR5KCk7XG4gIH1cblxuICBjcmVhdGVTdGFja2FibGVQYW5lKCkge1xuICAgIGNvbnN0IHBhbmVDbGFzcyA9IGAke3RoaXMuc2V0dGluZ3NbJ3N0YWNrYWJsZS1jb250YWluZXItY2xhc3MnXX1fX3BhbmVgO1xuICAgIGNvbnN0IG1vZGlmaWVyID0gdGhpcy4kc3RhY2thYmxlLmZpbmQoYC4ke3BhbmVDbGFzc31gKS5sZW5ndGggPT09IDBcbiAgICAgID8gYCR7cGFuZUNsYXNzfV9maXJzdGBcbiAgICAgIDogJyc7XG4gICAgY29uc3QgJG5ld1BhbmUgPSAkKGA8ZGl2IGNsYXNzPVwiJHtwYW5lQ2xhc3N9ICR7bW9kaWZpZXJ9XCI+PC9kaXY+YCk7XG4gICAgdGhpcy4kc3RhY2thYmxlLmFwcGVuZCgkbmV3UGFuZSk7XG4gICAgcmV0dXJuICRuZXdQYW5lO1xuICB9XG5cbiAgbWF0ZXJpYWxCeU5hbWUobmFtZSkge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLm1hdGVyaWFscy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MubWF0ZXJpYWxzW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldCBmcmFtZUNvbnRlbnRXaW5kb3coKSB7XG4gICAgcmV0dXJuICQodGhpcy5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSlbMF0uY29udGVudFdpbmRvdztcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICAvLyBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLmZyYW1lQ29udGVudFdpbmRvdywgJ3NlcmlhbGl6ZUNvbnRlbnQnLCBbJ2xvZyddKTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmVudmlyb25tZW50cy5nZXQoJ3BhZ2Utc3RydWN0dXJlJykuc2VyaWFsaXplUGFnZSgpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICAvLyB3ZSBoYXZlIHJlc3VsdCB3aGljaCBpcyBjb250ZW50IGluIGZvcm1hdDpcbiAgICAvLyByZWdpb25cbiAgICAvLyAtLS0gbWF0ZXJpYWwgaWRcbiAgICAvLyAtLS0tLS0tIGtleXMgPT4gdmFsdWVzXG4gICAgLy9cbiAgICAvLyBvdXIgUHJvdmlkZXJzIHNob3VsZCBnZXQgb25seSB0aG9zZSBrZXlzIHRoYXQgdGhleSBwcm92aWRlXG4gICAgLy8gcHJvdmlkZWQga2V5cyBhcmUgc3RvcmVkIGluIGZyYW1lQ29udGVudFdpbmRvdy5NT05TVEVSX0VESVRfTU9ERV9EQVRBLnRlbXBsYXRlLnByb3ZpZGVkS2V5c1xuICAgIGNvbnN0IHJlc3VsdEJ5UHJvdmlkZXJzID0ge307XG4gICAgY29uc3QgcHJvdmlkZWRLZXlzID0gdGhpcy5mcmFtZUNvbnRlbnRXaW5kb3cuTU9OU1RFUl9FRElUX01PREVfREFUQS50ZW1wbGF0ZS5wcm92aWRlZEtleXM7XG5cbiAgICBPYmplY3Qua2V5cyhwcm92aWRlZEtleXMpLmZvckVhY2gocHJvdmlkZXJJbmRleCA9PiB7XG4gICAgICByZXN1bHRCeVByb3ZpZGVyc1twcm92aWRlckluZGV4XSA9IHt9O1xuXG4gICAgICBjb25zdCByZWdpb25zID0gcHJvdmlkZWRLZXlzW3Byb3ZpZGVySW5kZXhdO1xuXG4gICAgICBPYmplY3Qua2V5cyhyZWdpb25zKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQuaGFzT3duUHJvcGVydHkocmVnaW9uS2V5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF1bcmVnaW9uS2V5XSA9IHt9O1xuXG4gICAgICAgIC8vIGdvIGRlZXAgdG8gbWF0ZXJpYWwgaW5kZWNlc1xuICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSByZWdpb25zW3JlZ2lvbktleV07XG5cbiAgICAgICAgT2JqZWN0LmtleXMobWF0ZXJpYWxzKS5mb3JFYWNoKG1hdGVyaWFsSW5kZXggPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHRbcmVnaW9uS2V5XS5oYXNPd25Qcm9wZXJ0eShtYXRlcmlhbEluZGV4KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF1bcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XSA9IHt9O1xuXG4gICAgICAgICAgY29uc3QgZGF0YUtleXMgPSBtYXRlcmlhbHNbbWF0ZXJpYWxJbmRleF07XG5cbiAgICAgICAgICBkYXRhS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0W3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF0uaGFzT3duUHJvcGVydHkoa2V5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0QnlQcm92aWRlcnNcbiAgICAgICAgICAgICAgW3Byb3ZpZGVySW5kZXhdXG4gICAgICAgICAgICAgIFtyZWdpb25LZXldXG4gICAgICAgICAgICAgIFttYXRlcmlhbEluZGV4XVxuICAgICAgICAgICAgICBba2V5XSA9IHJlc3VsdFtyZWdpb25LZXldW21hdGVyaWFsSW5kZXhdW2tleV07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0QnlQcm92aWRlcnMpO1xuICAgIHJldHVybiByZXN1bHRCeVByb3ZpZGVycztcbiAgfVxuXG4gIHBhZ2VDaGFuZ2VkKCkge1xuICAgIHRoaXMuZW52aXJvbm1lbnRzLmZvckVhY2goXG4gICAgICBlbnZpcm9ubWVudCA9PlxuICAgICAgICBlbnZpcm9ubWVudC5wYWdlQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIGxvZyhyZXN1bHQpIHtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICB9XG5cbiAgY29udHJvbHMoKSB7XG4gICAgdGhpcy4kY29udHJvbHMgPSB0aGlzLiRidWlsZGVyLmZpbmQoJy5jb250cm9scycpLmZpcnN0KCk7XG4gICAgdGhpcy4kY29udHJvbHMuZWxlbSgncmVmcmVzaCcpLmNsaWNrKCgpID0+IHtcbiAgICAgIHRoaXMuZnJhbWVDb250ZW50V2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kY29udHJvbHMuZWxlbSgnc2F2ZScpLmNsaWNrKCgpID0+IHtcbiAgICAgIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMuZnJhbWVDb250ZW50V2luZG93LCAnc2F2ZScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbEJ1aWxkZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9WaXN1YWxCdWlsZGVyLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIEFjdGlvbkVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcblxufVxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQWN0aW9uRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgQ3VzdG9taXphdGlvbkVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcblxufVxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9taXphdGlvbkVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBNYXRlcmlhbHNFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICBzdXBlcih2aXN1YWxCdWlsZGVyLCBuYW1lKTtcbiAgICB0aGlzLmluaXRNYXRlcmlhbHNTZWxlY3RvcigpO1xuICB9XG5cbiAgaW5pdE1hdGVyaWFsc1NlbGVjdG9yKCkge1xuICAgIHRoaXMuJG1hdGVyaWFsc0dyb3VwcyA9ICQoJzx1bCBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNcIj48L3VsPicpO1xuICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QgPSBbXTtcblxuICAgIHRoaXMudmlzdWFsQnVpbGRlci5zZXR0aW5ncy5idW5kbGVzLmZvckVhY2goYnVuZGxlID0+IHtcbiAgICAgIC8qIGdsb2JhbCBwb2x5Z2xvdDogZmFsc2UgKi9cbiAgICAgIGNvbnN0IGkxOG5CdW5kbGVOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBwb2x5Z2xvdC50KGJ1bmRsZS5uYW1lKVxuICAgICAgICA6IGJ1bmRsZS5uYW1lO1xuXG4gICAgICBjb25zdCAkYnVuZGxlVGl0bGUgPSBgXG4gICAgICA8bGkgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19pdGVtIG1hdGVyaWFscy1ncm91cHNfX2l0ZW0tLWJ1bmRsZS1sYWJlbFwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWJ1bmRsZVwiIGRhdGEtYnVuZGxlLXBhdGg9XCIke2J1bmRsZS5mdWxsUGF0aH1cIj5cbiAgICAgICAgICAgICR7aTE4bkJ1bmRsZU5hbWV9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICBgO1xuICAgICAgdGhpcy4kbWF0ZXJpYWxzTGlzdC5wdXNoKCRidW5kbGVUaXRsZSk7XG5cbiAgICAgIGJ1bmRsZS5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwTmFtZSA9IGdyb3VwLm5hbWU7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IGdyb3VwLm1hdGVyaWFscztcbiAgICAgICAgY29uc3QgaTE4bkdyb3VwTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnID8gcG9seWdsb3QudChncm91cE5hbWUpIDogZ3JvdXBOYW1lO1xuICAgICAgICBjb25zdCAkbGkgPSAkKGBcbiAgICA8bGkgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19pdGVtXCI+XG4gICAgICA8YSBocmVmPVwiI1wiIGRhdGEtZ3JvdXAtcGF0aD1cIiR7Z3JvdXAuZnVsbFBhdGh9XCIgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXBcIj5cbiAgICAgICAgJHtpMThuR3JvdXBOYW1lfSA8c3BhbiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX2NvdW50XCI+KCR7bWF0ZXJpYWxzLmxlbmd0aH0pPC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvbGk+YCk7XG4gICAgICAgIHRoaXMuJG1hdGVyaWFsc0dyb3Vwcy5hcHBlbmQoJGxpKTtcbiAgICAgICAgY29uc3QgJGxpc3QgPSAkKGA8dWwgY2xhc3M9XCJtYXRlcmlhbHMtbGlzdFwiIGRhdGEtZ3JvdXAtcGF0aD1cIiR7Z3JvdXAuZnVsbFBhdGh9XCI+PC91bD5gKTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcblxuICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaChtYXRlcmlhbCA9PiB7XG4gICAgICAgICAgY29uc3QgbWF0ZXJpYWxOYW1lID0gbWF0ZXJpYWwubmFtZTtcbiAgICAgICAgICBjb25zdCBpMThuTWF0ZXJpYWxOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gcG9seWdsb3QudChtYXRlcmlhbE5hbWUpXG4gICAgICAgICAgICA6IG1hdGVyaWFsTmFtZTtcbiAgICAgICAgICBjb25zdCAkaXRlbSA9ICQoYFxuPGxpPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWF0ZXJpYWxzLWxpc3RfX2l0ZW1cIiBkYXRhLW1hdGVyaWFsLXBhdGg9XCIke21hdGVyaWFsLmZ1bGxQYXRofVwiPlxuICAgICR7aTE4bk1hdGVyaWFsTmFtZX1cbiAgPC9hPlxuPC9saT5cbmApO1xuICAgICAgICAgIGl0ZW1zLnB1c2goJGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgJGxpc3QuYXBwZW5kKGl0ZW1zKTtcbiAgICAgICAgdGhpcy4kbWF0ZXJpYWxzTGlzdC5wdXNoKCRsaXN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAnLCBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAkdGhpcy50b2dnbGVNb2QoJ2FjdGl2ZScpO1xuICAgICAgY29uc3QgZ3JvdXBQYXRoID0gJHRoaXMuZGF0YSgnZ3JvdXBQYXRoJyk7XG4gICAgICBpZiAoJHRoaXMubW9kKCdhY3RpdmUnKSkge1xuICAgICAgICAkKCcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJykubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG5cbiAgICAgICAgJCgnLm1hdGVyaWFscy1saXN0JykuZWFjaChmdW5jdGlvbiBpdCgpIHtcbiAgICAgICAgICBjb25zdCAkbGlzdCA9ICQodGhpcyk7XG4gICAgICAgICAgaWYgKCRsaXN0Lm1vZCgnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICRsaXN0Lm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoJGxpc3QuZGF0YSgnZ3JvdXBQYXRoJykgPT09IGdyb3VwUGF0aCkge1xuICAgICAgICAgICAgJGxpc3QubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICR0aGlzLm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgICAgIHRoYXQuJG1hdGVyaWFsc1BhbmUuc2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhhdCdzIGp1c3Qgc2Vjb25kIGNsaWNrIG9uIHRoZSBzYW1lIGdyb3VwXG4gICAgICAgIHRoYXQuJG1hdGVyaWFsc1BhbmUuaGlkZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWF0ZXJpYWxzLWxpc3RfX2l0ZW0nLCBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICB0aGF0LnNlbmRNZXNzYWdlKFxuICAgICAgICAnbmV3QmxvY2snLFxuICAgICAgICBbXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKCdtYXRlcmlhbFBhdGgnKSxcbiAgICAgICAgICAnY29udGVudCcsXG4gICAgICAgIF1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICBzdXBlci5hY3RpdmF0ZSgpO1xuXG4gICAgdGhpcy4kZ3JvdXBzUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kZ3JvdXBzUGFuZS5hcHBlbmQodGhpcy4kbWF0ZXJpYWxzR3JvdXBzKTtcblxuICAgIHRoaXMuJG1hdGVyaWFsc1BhbmUgPSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3JlYXRlU3RhY2thYmxlUGFuZSgpO1xuICAgIHRoaXMuJG1hdGVyaWFsc1BhbmUuYXBwZW5kKHRoaXMuJG1hdGVyaWFsc0xpc3QpO1xuICAgIHRoaXMuJG1hdGVyaWFsc1BhbmUuaGlkZSgpO1xuXG4gICAgJCgnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcpLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbHNFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9NYXRlcmlhbHNFbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2aXN1YWxCdWlsZGVyLCBuYW1lKSB7XG4gICAgc3VwZXIodmlzdWFsQnVpbGRlciwgbmFtZSk7XG4gICAgdGhpcy5pbml0UGFnZVN0cnVjdHVyZUVsZW1lbnQoKTtcbiAgICB0aGlzLmVkaXRNb2RlRGF0YSA9IHt9O1xuICB9XG5cbiAgaW5pdFBhZ2VTdHJ1Y3R1cmVFbGVtZW50KCkge1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUgPSAkKCc8ZGl2IGNsYXNzPVwicGFnZS1zdHJ1Y3R1cmVcIj48L2Rpdj4nKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHN1cGVyLmFjdGl2YXRlKCk7XG5cbiAgICB0aGlzLiRzdHJ1Y3R1cmVQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRzdHJ1Y3R1cmVQYW5lLmFwcGVuZCh0aGlzLiRwYWdlU3RydWN0dXJlKTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2VkKCkge1xuICAgIHN1cGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5qc3RyZWUoJ2Rlc3Ryb3knKTtcbiAgICBjb25zdCBsYXlvdXQgPSB0aGlzLnRhcmdldC5NT05TVEVSX0VESVRfTU9ERV9EQVRBLmxheW91dDtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudGFyZ2V0Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEudGVtcGxhdGU7XG5cbiAgICBjb25zdCBsYXlvdXRJdGVtID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBpZDogJ2xheW91dCcsXG4gICAgICAgIHRlbXBsYXRlSWQ6IGxheW91dC5pZCxcbiAgICAgIH0sXG4gICAgICB0ZXh0OiBgTGF5b3V0IC0gJHtsYXlvdXQua2V5fSAjJHtsYXlvdXQuaWR9YCxcbiAgICAgIGljb246ICdmYSBmYS1jb2x1bW5zJyxcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIG9wZW5lZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgfTtcbiAgICBjb25zdCB0ZW1wbGF0ZUl0ZW0gPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiAndGVtcGxhdGUnLFxuICAgICAgICB0ZW1wbGF0ZUlkOiB0ZW1wbGF0ZS5pZCxcbiAgICAgIH0sXG4gICAgICB0ZXh0OiBgVGVtcGxhdGUgLSAke3RlbXBsYXRlLmtleX0gIyR7dGVtcGxhdGUuaWR9YCxcbiAgICAgIGljb246ICdmYSBmYS10aCcsXG4gICAgICBzdGF0ZToge1xuICAgICAgICBvcGVuZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH07XG5cbiAgICBjb25zdCAkbGF5b3V0UmVnaW9ucyA9IHRoaXMudGFyZ2V0JCgnLm0tbW9uc3Rlci1jb250ZW50X19sYXlvdXQnKTtcbiAgICAkbGF5b3V0UmVnaW9ucy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQucHJvY2Vzc0xheW91dCgkKHRoaXMpKTtcbiAgICAgIGxheW91dEl0ZW0uY2hpbGRyZW4ucHVzaChyZXN1bHQuaXRlbSk7XG4gICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcbiAgICAgICAgdGVtcGxhdGVJdGVtLmNoaWxkcmVuLnB1c2gocmVnaW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5wYWdlU3RydWN0dXJlID0gW1xuICAgICAgbGF5b3V0SXRlbSxcbiAgICAgIHRlbXBsYXRlSXRlbSxcbiAgICBdO1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUuanN0cmVlKHtcbiAgICAgIGNvcmU6IHtcbiAgICAgICAgZGF0YTogdGhpcy5wYWdlU3RydWN0dXJlLFxuICAgICAgICB0aGVtZXM6IHtcbiAgICAgICAgICBuYW1lOiAnZGVmYXVsdC1kYXJrJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgICd0eXBlcycsXG4gICAgICAgICd3aG9sZXJvdycsXG4gICAgICBdLFxuICAgICAgdHlwZXM6IHtcbiAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgaWNvbjogJ2ZhIGZhLWNvbHVtbnMnLFxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgIGljb246ICdmYSBmYS10aCcsXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlUmVnaW9uOiB7XG4gICAgICAgICAgaWNvbjogJ2ZhIGZhLWZvbGRlci1vJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudFRlbXBsYXRlUmVnaW9uOiB7XG4gICAgICAgICAgaWNvbjogJ2ZhIGZhLWZvbGRlcicsXG4gICAgICAgIH0sXG4gICAgICAgIG1hdGVyaWFsOiB7XG4gICAgICAgICAgaWNvbjogJ2ZhIGZhLXB1enpsZS1waWVjZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QganN0cmVlT2JqID0gdGhpcy4kcGFnZVN0cnVjdHVyZS5qc3RyZWUoKTtcbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlLm9uKCdsb2FkZWQuanN0cmVlJywgKCkgPT4ge1xuICAgICAgdGhpcy5wYWdlU3RydWN0dXJlSnNvbiA9IGpzdHJlZU9iai5nZXRfanNvbih0aGlzLiRwYWdlU3RydWN0dXJlLCB7XG4gICAgICAgIG5vX3N0YXRlOiB0cnVlLFxuICAgICAgICBub19pZDogdHJ1ZSxcbiAgICAgICAgbm9fbGlfYXR0cjogdHJ1ZSxcbiAgICAgICAgbm9fYV9hdHRyOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnRhcmdldC5Gcm9udGVuZE1vbnN0ZXIuVmlzdWFsRnJhbWUucGFnZVN0cnVjdHVyZUpzb24gPSB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uO1xuICAgIH0pO1xuXG4gICAgdGhpcy5lZGl0TW9kZURhdGEgPSB0aGlzLnRhcmdldC5NT05TVEVSX0VESVRfTU9ERV9EQVRBO1xuICB9XG5cbiAgc3RhdGljIHByb2Nlc3NMYXlvdXQoJGxheW91dFJlZ2lvbikge1xuICAgIGNvbnN0IGl0ZW0gPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQuZXh0cmFjdFJlZ2lvbkRhdGEoJGxheW91dFJlZ2lvbik7XG4gICAgaXRlbS5zdGF0ZSA9IHtcbiAgICAgIG9wZW5lZDogdHJ1ZSxcbiAgICB9O1xuICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICBpdGVtLmRhdGEuaWQgPSBgbGF5b3V0LnRlbXBsYXRlUmVnaW9uLiR7aXRlbS5kYXRhLnJlZ2lvbktleX1gO1xuICAgIGNvbnN0IHRlbXBsYXRlUmVnaW9ucyA9IFtdO1xuXG4gICAgLy8gZmluZCBtYXRlcmlhbHNcbiAgICBjb25zdCAkbGF5b3V0TWF0ZXJpYWxzID0gJGxheW91dFJlZ2lvbi5maW5kKCc+W2RhdGEtaXMtbWF0ZXJpYWxdJyk7XG4gICAgJGxheW91dE1hdGVyaWFscy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCAkbGF5b3V0TWF0ZXJpYWwgPSAkKHRoaXMpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LnByb2Nlc3NMYXlvdXRNYXRlcmlhbCgkbGF5b3V0TWF0ZXJpYWwsIGl0ZW0uaWQpO1xuICAgICAgY29uc3QgbGF5b3V0TWF0ZXJpYWxJdGVtID0gcmVzdWx0LmxheW91dE1hdGVyaWFsO1xuICAgICAgcmVzdWx0LnRlbXBsYXRlUmVnaW9ucy5mb3JFYWNoKHJlZ2lvbiA9PiB7XG4gICAgICAgIHRlbXBsYXRlUmVnaW9ucy5wdXNoKHJlZ2lvbik7XG4gICAgICB9KTtcbiAgICAgIGl0ZW0uY2hpbGRyZW4ucHVzaChsYXlvdXRNYXRlcmlhbEl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW0sXG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnMsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9jZXNzTGF5b3V0TWF0ZXJpYWwoJGxheW91dE1hdGVyaWFsLCBwcmVmaXgpIHtcbiAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gJGxheW91dE1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsSW5kZXgnKTtcbiAgICBjb25zdCBtYXRlcmlhbFBhdGggPSAkbGF5b3V0TWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxQYXRoJyk7XG4gICAgY29uc3QgaXRlbSA9IHtcbiAgICAgIHRleHQ6IGAke1xuICAgICAgICBtYXRlcmlhbFBhdGggPT09ICdjb3JlLmZyb250ZW5kLW1vbnN0ZXItY29yZS5nZW5lcmFsLmNvbnRlbnQtcGxhY2Vob2xkZXInXG4gICAgICAgICAgPyAnTWFpbiBFbnRpdHkgQ29udGVudCdcbiAgICAgICAgICA6IGBNYXRlcmlhbDogJHttYXRlcmlhbEluZGV4fWB9XG4gICAgICBgLFxuICAgICAgdHlwZTogJ21hdGVyaWFsJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6IGAke3ByZWZpeH0uJHttYXRlcmlhbEluZGV4fWAsXG4gICAgICAgIG1hdGVyaWFsSW5kZXgsXG4gICAgICAgIG1hdGVyaWFsUGF0aCxcbiAgICAgICAgZWRpdGFibGVLZXlzOiAkbGF5b3V0TWF0ZXJpYWwuZGF0YSgnZWRpdGFibGVLZXlzJyksXG4gICAgICAgIG5vZGU6ICRsYXlvdXRNYXRlcmlhbCxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCB0ZW1wbGF0ZVJlZ2lvbnMgPSBbXTtcbiAgICBjb25zdCAkcmVnaW9ucyA9ICRsYXlvdXRNYXRlcmlhbC5maW5kKCc+IC5tLW1vbnN0ZXItY29udGVudF9fY29udGVudCcpO1xuICAgICRyZWdpb25zLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5wcm9jZXNzVGVtcGxhdGVSZWdpb24oJCh0aGlzKSk7XG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnMucHVzaChyZXN1bHQpO1xuICAgIH0pO1xuICAgIGlmICh0ZW1wbGF0ZVJlZ2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgaXRlbS5kYXRhLmlzQ29udGVudCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBsYXlvdXRNYXRlcmlhbDogaXRlbSxcbiAgICAgIHRlbXBsYXRlUmVnaW9ucyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHByb2Nlc3NUZW1wbGF0ZVJlZ2lvbigkdGVtcGxhdGVSZWdpb24pIHtcbiAgICBjb25zdCBpdGVtID0gUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmV4dHJhY3RSZWdpb25EYXRhKCR0ZW1wbGF0ZVJlZ2lvbik7XG4gICAgaXRlbS5zdGF0ZSA9IHtcbiAgICAgIG9wZW5lZDogdHJ1ZSxcbiAgICB9O1xuICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICBpdGVtLmRhdGEuZW50aXR5RGVwZW5kZW50ID0gJHRlbXBsYXRlUmVnaW9uLmRhdGEoJ3JlZ2lvbkVudGl0eURlcGVuZGVudCcpID09PSAxO1xuXG4gICAgY29uc3QgcHJlZml4ID0gaXRlbS5kYXRhLmVudGl0eURlcGVuZGVudCA/ICd0ZW1wbGF0ZScgOiAnY29udGVudCc7XG4gICAgaXRlbS5kYXRhLmlkID0gYCR7cHJlZml4fS50ZW1wbGF0ZVJlZ2lvbi4ke2l0ZW0uZGF0YS5yZWdpb25LZXl9YDtcblxuICAgIGlmIChpdGVtLmRhdGEuZW50aXR5RGVwZW5kZW50KSB7XG4gICAgICBpdGVtLnR5cGUgPSAnY29udGVudFRlbXBsYXRlUmVnaW9uJztcbiAgICB9XG4gICAgY29uc3QgJHJlZ2lvbk1hdGVyaWFscyA9ICR0ZW1wbGF0ZVJlZ2lvbi5maW5kKCc+W2RhdGEtaXMtbWF0ZXJpYWxdJyk7XG4gICAgJHJlZ2lvbk1hdGVyaWFscy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBpdGVtLmNoaWxkcmVuLnB1c2goXG4gICAgICAgIFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5wcm9jZXNzVGVtcGxhdGVSZWdpb25NYXRlcmlhbChcbiAgICAgICAgICAkKHRoaXMpLFxuICAgICAgICAgIGl0ZW0uZGF0YS5pZFxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgc3RhdGljIHByb2Nlc3NUZW1wbGF0ZVJlZ2lvbk1hdGVyaWFsKCRyZWdpb25NYXRlcmlhbCwgcHJlZml4KSB7XG4gICAgY29uc3QgbWF0ZXJpYWxJbmRleCA9ICRyZWdpb25NYXRlcmlhbC5kYXRhKCdtYXRlcmlhbEluZGV4Jyk7XG4gICAgY29uc3QgbWF0ZXJpYWxQYXRoID0gJHJlZ2lvbk1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsUGF0aCcpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBgTWF0ZXJpYWw6ICR7bWF0ZXJpYWxJbmRleH1gLFxuICAgICAgdHlwZTogJ21hdGVyaWFsJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6IGAke3ByZWZpeH0uJHttYXRlcmlhbEluZGV4fWAsXG4gICAgICAgIG1hdGVyaWFsSW5kZXgsXG4gICAgICAgIG1hdGVyaWFsUGF0aCxcbiAgICAgICAgZWRpdGFibGVLZXlzOiAkcmVnaW9uTWF0ZXJpYWwuZGF0YSgnZWRpdGFibGVLZXlzJyksXG4gICAgICAgIG5vZGU6ICRyZWdpb25NYXRlcmlhbCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBleHRyYWN0UmVnaW9uRGF0YSgkbm9kZSkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiAkbm9kZS5kYXRhKCdjb250ZW50RGVzY3JpcHRpb24nKSxcbiAgICAgIHR5cGU6ICd0ZW1wbGF0ZVJlZ2lvbicsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHJlZ2lvbklkOiAkbm9kZS5kYXRhKCdyZWdpb25JZCcpLFxuICAgICAgICByZWdpb25LZXk6ICRub2RlLmRhdGEoJ3JlZ2lvbktleScpLFxuICAgICAgICB1bmlxdWVDb250ZW50SWQ6ICRub2RlLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpLFxuICAgICAgICBub2RlOiAkbm9kZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHNlcmlhbGl6ZVBhZ2UoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5yZWdpb25zU3RydWN0dXJlKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICBjb25zdCByZWdpb24gPSB0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmVbcmVnaW9uS2V5XTtcbiAgICAgIHJlc3VsdFtyZWdpb24ua2V5XSA9IHJlZ2lvbi5zZXJpYWxpemUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgbWF0ZXJpYWxzQnlSZWdpb25zKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMucmVnaW9uc1N0cnVjdHVyZSkuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgY29uc3QgcmVnaW9uID0gdGhpcy5yZWdpb25zU3RydWN0dXJlW3JlZ2lvbktleV07XG4gICAgICByZXN1bHRbcmVnaW9uLmtleV0gPSByZWdpb24ubWF0ZXJpYWxzRGVjbCgpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9QYWdlU3RydWN0dXJlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcblxufVxuZXhwb3J0IGRlZmF1bHQgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1NpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdW5pcWlkIChwcmVmaXgsIG1vcmVFbnRyb3B5KSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvdW5pcWlkL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gIHJldmlzZWQgYnk6IEthbmtyZWx1bmUgKGh0dHA6Ly93d3cud2ViZmFrdG9yeS5pbmZvLylcbiAgLy8gICAgICBub3RlIDE6IFVzZXMgYW4gaW50ZXJuYWwgY291bnRlciAoaW4gbG9jdXR1cyBnbG9iYWwpIHRvIGF2b2lkIGNvbGxpc2lvblxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRpZCA9IHVuaXFpZCgpXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJHJlc3VsdCA9ICRpZC5sZW5ndGggPT09IDEzXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiB2YXIgJGlkID0gdW5pcWlkKCdmb28nKVxuICAvLyAgIGV4YW1wbGUgMjogdmFyICRyZXN1bHQgPSAkaWQubGVuZ3RoID09PSAoMTMgKyAnZm9vJy5sZW5ndGgpXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgJGlkID0gdW5pcWlkKCdiYXInLCB0cnVlKVxuICAvLyAgIGV4YW1wbGUgMzogdmFyICRyZXN1bHQgPSAkaWQubGVuZ3RoID09PSAoMjMgKyAnYmFyJy5sZW5ndGgpXG4gIC8vICAgcmV0dXJucyAzOiB0cnVlXG5cbiAgaWYgKHR5cGVvZiBwcmVmaXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcHJlZml4ID0gJydcbiAgfVxuXG4gIHZhciByZXRJZFxuICB2YXIgX2Zvcm1hdFNlZWQgPSBmdW5jdGlvbiAoc2VlZCwgcmVxV2lkdGgpIHtcbiAgICBzZWVkID0gcGFyc2VJbnQoc2VlZCwgMTApLnRvU3RyaW5nKDE2KSAvLyB0byBoZXggc3RyXG4gICAgaWYgKHJlcVdpZHRoIDwgc2VlZC5sZW5ndGgpIHtcbiAgICAgIC8vIHNvIGxvbmcgd2Ugc3BsaXRcbiAgICAgIHJldHVybiBzZWVkLnNsaWNlKHNlZWQubGVuZ3RoIC0gcmVxV2lkdGgpXG4gICAgfVxuICAgIGlmIChyZXFXaWR0aCA+IHNlZWQubGVuZ3RoKSB7XG4gICAgICAvLyBzbyBzaG9ydCB3ZSBwYWRcbiAgICAgIHJldHVybiBBcnJheSgxICsgKHJlcVdpZHRoIC0gc2VlZC5sZW5ndGgpKS5qb2luKCcwJykgKyBzZWVkXG4gICAgfVxuICAgIHJldHVybiBzZWVkXG4gIH1cblxuICB2YXIgJGdsb2JhbCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IEdMT0JBTClcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge31cbiAgdmFyICRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1c1xuICAkbG9jdXR1cy5waHAgPSAkbG9jdXR1cy5waHAgfHwge31cblxuICBpZiAoISRsb2N1dHVzLnBocC51bmlxaWRTZWVkKSB7XG4gICAgLy8gaW5pdCBzZWVkIHdpdGggYmlnIHJhbmRvbSBpbnRcbiAgICAkbG9jdXR1cy5waHAudW5pcWlkU2VlZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDB4NzViY2QxNSlcbiAgfVxuICAkbG9jdXR1cy5waHAudW5pcWlkU2VlZCsrXG5cbiAgLy8gc3RhcnQgd2l0aCBwcmVmaXgsIGFkZCBjdXJyZW50IG1pbGxpc2Vjb25kcyBoZXggc3RyaW5nXG4gIHJldElkID0gcHJlZml4XG4gIHJldElkICs9IF9mb3JtYXRTZWVkKHBhcnNlSW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCwgMTApLCA4KVxuICAvLyBhZGQgc2VlZCBoZXggc3RyaW5nXG4gIHJldElkICs9IF9mb3JtYXRTZWVkKCRsb2N1dHVzLnBocC51bmlxaWRTZWVkLCA1KVxuICBpZiAobW9yZUVudHJvcHkpIHtcbiAgICAvLyBmb3IgbW9yZSBlbnRyb3B5IHdlIGFkZCBhIGZsb2F0IGxvd2VyIHRvIDEwXG4gICAgcmV0SWQgKz0gKE1hdGgucmFuZG9tKCkgKiAxMCkudG9GaXhlZCg4KS50b1N0cmluZygpXG4gIH1cblxuICByZXR1cm4gcmV0SWRcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzXG4gKiovIiwiY2xhc3MgRGF0YVByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IoY2xhc3NOYW1lLCBwcm92aWRlZEtleXMpIHtcbiAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB0aGlzLnByb3ZpZGVkS2V5cyA9IHByb3ZpZGVkS2V5cztcbiAgICB0aGlzLmFzc29jaWF0aW9ucyA9IHt9O1xuICAgIHRoaXMuYXNzb2NpYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge0VkaXRhYmxlfVxuICAgKi9cbiAgc3RhdGljIGdldCBlZGl0YWJsZSgpIHtcbiAgICByZXR1cm4gd2luZG93LkZyb250ZW5kTW9uc3Rlci5WaXN1YWxGcmFtZS5lZGl0YWJsZTtcbiAgfVxuXG4gIGFzc29jaWF0ZSgpIHtcbiAgICB0aGlzLmFzc29jaWF0aW9ucyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMucHJvdmlkZWRLZXlzKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICBjb25zdCByZWdpb24gPSB0aGlzLnByb3ZpZGVkS2V5c1tyZWdpb25LZXldO1xuICAgICAgY29uc3QgJHJlZ2lvbiA9ICQoYFtkYXRhLXJlZ2lvbi1rZXk9XCIke3JlZ2lvbktleX1cIl1gKS5maXJzdCgpO1xuICAgICAgLy8gY29uc29sZS5sb2coYCVjUmVnaW9uOiAke3JlZ2lvbktleX1gLCAnY29sb3I6IHJlZDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGJhY2tncm91bmQ6ICMzMzMnKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlZ2lvbik7XG4gICAgICBjb25zdCBtYXRlcmlhbHMgPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKHJlZ2lvbikuZm9yRWFjaChtYXRlcmlhbEtleSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFLZXlzID0gcmVnaW9uW21hdGVyaWFsS2V5XTtcbiAgICAgICAgY29uc3QgJG1hdGVyaWFsID0gJHJlZ2lvbi5maW5kKGBbZGF0YS1tYXRlcmlhbC1pbmRleD1cIiR7bWF0ZXJpYWxLZXl9XCJdYCkuZmlyc3QoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCVjTWF0ZXJpYWw6ICR7bWF0ZXJpYWxLZXl9YCwgJ2NvbG9yOiAjZmZmOyBmb250LXdlaWdodDogYm9sZDsgYmFja2dyb3VuZDogIzY5ZicpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygkbWF0ZXJpYWwpO1xuICAgICAgICBpZiAoJG1hdGVyaWFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBtYXRlcmlhbHNbbWF0ZXJpYWxLZXldID0ge1xuICAgICAgICAgIGRhdGFLZXlzLFxuICAgICAgICAgICRtYXRlcmlhbCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxFZGl0YWJsZUtleXMgPSAkbWF0ZXJpYWwuZGF0YSgnZWRpdGFibGVLZXlzJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZU1hdGVyaWFsRWRpdChtYXRlcmlhbEVkaXRhYmxlS2V5cywgJG1hdGVyaWFsLCBkYXRhS2V5cyk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYXNzb2NpYXRpb25zW3JlZ2lvbktleV0gPSB7XG4gICAgICAgICRyZWdpb24sXG4gICAgICAgIG1hdGVyaWFscyxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXplTWF0ZXJpYWxFZGl0KG1hdGVyaWFsRWRpdGFibGVLZXlzLCAkcm9vdCwgZGF0YUtleXMsIHByZWZpeCA9ICcnKSB7XG4gICAgZGF0YUtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3Qgb2JqID0gbWF0ZXJpYWxFZGl0YWJsZUtleXNba2V5XSB8fCAnTk9fU1VDSF9LRVknO1xuICAgICAgaWYgKG9iaiA9PT0gJ05PX1NVQ0hfS0VZJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob2JqID09PSBPYmplY3Qob2JqKSkge1xuICAgICAgICAvLyBpdCdzIHJlY3Vyc2l2ZVxuICAgICAgICAvLyBmaXJzdCAtIGZpbmQgYWxsIGJsb2Nrc1xuICAgICAgICBjb25zdCAkYmxvY2tzID0gJHJvb3QuZmluZChgW2RhdGEtcmVjdXJzaXZlLWl0ZW09XCIke2tleX1cIl1gKTtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgJGJsb2Nrcy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAlYyBSZWN1cnNpdmUgaXRlbSAke2tleX0gIyR7Y291bnRlcn1gLCAnYmFja2dyb3VuZDogIzIyMjsgY29sb3I6ICNiYWRhNTUnKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgICAgICB0aGF0LmluaXRpYWxpemVNYXRlcmlhbEVkaXQob2JqLCAkdGhpcywgT2JqZWN0LmtleXMob2JqKSwgJ2l0ZW0uJyk7XG4gICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGl0J3MgcGxhaW4gZmllbGRcbiAgICAgICAgY29uc3QgJG5vZGUgPSAkcm9vdC5maW5kKGBbZGF0YS1lZGl0YWJsZS1rZXk9XCIke3ByZWZpeH0ke2tleX1cIl1gKS5maXJzdCgpO1xuICAgICAgICBpZiAoJG5vZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIERhdGFQcm92aWRlci5lZGl0YWJsZS5pbml0aWFsaXplRWRpdGFibGUoJG5vZGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgJWMgUGxhaW4gZmllbGQgZWRpdGFibGUgJHtwcmVmaXh9JHtrZXl9YCwgJ2JhY2tncm91bmQ6ICMyMjI7IGNvbG9yOiAjYmFkYTU1Jyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCRub2RlWzBdLm91dGVySFRNTCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIHNlcmlhbGl6ZUtleXMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5hc3NvY2lhdGlvbnMpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMuYXNzb2NpYXRpb25zW3JlZ2lvbktleV07XG4gICAgICBjb25zdCAkcmVnaW9uID0gcmVnaW9uLiRyZWdpb247XG4gICAgICByZXN1bHRbcmVnaW9uS2V5XSA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMocmVnaW9uLm1hdGVyaWFscykuZm9yRWFjaChtYXRlcmlhbEtleSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFLZXlzID0gcmVnaW9uLm1hdGVyaWFsc1ttYXRlcmlhbEtleV0uZGF0YUtleXM7XG4gICAgICAgIGNvbnN0ICRtYXRlcmlhbCA9IHJlZ2lvbi5tYXRlcmlhbHNbbWF0ZXJpYWxLZXldLiRtYXRlcmlhbDtcbiAgICAgICAgcmVzdWx0W3JlZ2lvbktleV1bbWF0ZXJpYWxLZXldID0gdGhpcy5zZXJpYWxpemVNYXRlcmlhbChcbiAgICAgICAgICByZWdpb25LZXksXG4gICAgICAgICAgbWF0ZXJpYWxLZXksXG4gICAgICAgICAgZGF0YUtleXMsXG4gICAgICAgICAgJHJlZ2lvbixcbiAgICAgICAgICAkbWF0ZXJpYWxcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzTmFtZSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmZpbGxDb25maWcoZGF0YSk7XG4gIH1cblxuICBmaWxsQ29uZmlnKGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHNlcmlhbGl6ZU1hdGVyaWFsKHJlZ2lvbktleSwgbWF0ZXJpYWxLZXksIGRhdGFLZXlzLCAkcmVnaW9uLCAkbWF0ZXJpYWwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhUHJvdmlkZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlci5qc1xuICoqLyIsImltcG9ydCBTdGF0aWNDb250ZW50IGZyb20gJy4vcHJvdmlkZXJzL1N0YXRpY0NvbnRlbnQnO1xuXG5jbGFzcyBEYXRhUHJvdmlkZXJGYWN0b3J5IHtcbiAgc3RhdGljIGZhY3RvcnkocHJvdmlkZXJEZWNsLCBwcm92aWRlZEtleXMpIHtcbiAgICBsZXQgcHJvdmlkZXIgPSBudWxsO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHByb3ZpZGVyRGVjbC5jbGFzc05hbWVcbiAgICAgIHx8ICdEb3RQbGFudFxcXFxNb25zdGVyXFxcXERhdGFFbnRpdHlcXFxcU3RhdGljQ29udGVudFByb3ZpZGVyJztcbiAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuICAgICAgY2FzZSAnRG90UGxhbnRcXFxcTW9uc3RlclxcXFxEYXRhRW50aXR5XFxcXFN0YXRpY0NvbnRlbnRQcm92aWRlcic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBwcm92aWRlciA9IG5ldyBTdGF0aWNDb250ZW50KHByb3ZpZGVkS2V5cyk7XG4gICAgfVxuICAgIHJldHVybiBwcm92aWRlcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhUHJvdmlkZXJGYWN0b3J5O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXJGYWN0b3J5LmpzXG4gKiovIiwiaW1wb3J0IGFsbEVkaXRhYmxlcyBmcm9tICcuL2VkaXRhYmxlcy9hbGwnO1xuXG5jbGFzcyBFZGl0YWJsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZWRpdGFibGVzQnlUeXBlID0ge307XG4gICAgLy8gaW5pdGlhbGl6ZSBiYXNlIGJ1aWxkLWluIGVkaXRhYmxlc1xuICAgIGFsbEVkaXRhYmxlcygpO1xuICAgIHRoaXMuZWRpdGFibGVzQnlUeXBlID0gd2luZG93Lk1PTlNURVJfRURJVEFCTEVTO1xuICB9XG5cbiAgc2VyaWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBjb25zdCBlZGl0YWJsZSA9ICRub2RlLmRhdGEoJ2VkaXRhYmxlUGFyYW1zJyk7XG4gICAgaWYgKHR5cGVvZihlZGl0YWJsZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCB0eXBlID0gZWRpdGFibGUuaGFzT3duUHJvcGVydHkoJ3R5cGUnKSA/IGVkaXRhYmxlLnR5cGUgOiAnc3RyaW5nJztcbiAgICBpZiAodGhpcy5lZGl0YWJsZXNCeVR5cGUuaGFzT3duUHJvcGVydHkodHlwZSkgPT09IGZhbHNlKSB7XG4gICAgICB0eXBlID0gJ3N0cmluZyc7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwb3J0VmFyaWFibGUgPSBlZGl0YWJsZS5oYXNPd25Qcm9wZXJ0eSgndGFyZ2V0JykgPyBlZGl0YWJsZS50YXJnZXQgOiAnZGF0YSc7XG5cbiAgICByZXR1cm4gdGhpcy5lZGl0YWJsZXNCeVR5cGVbdHlwZV0uc2VyaWFsaXplTm9kZSgkbm9kZSwgZXhwb3J0VmFyaWFibGUpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3QgdHlwZSA9ICRub2RlLmRhdGEoJ2VkaXRhYmxlLXR5cGUnKSB8fCAndW5lZGl0YWJsZSc7XG4gICAgaWYgKHR5cGUgPT09ICd1bmVkaXRhYmxlJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdGFibGUgPSB0aGlzLmVkaXRhYmxlc0J5VHlwZVt0eXBlXSB8fCB0aGlzLmVkaXRhYmxlc0J5VHlwZS5zdHJpbmc7XG4gICAgcmV0dXJuIGVkaXRhYmxlLmluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdGFibGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0VkaXRhYmxlLmpzXG4gKiovIiwiY2xhc3MgSGFzaEFwaSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZnVuY3Rpb25DYWxscyA9IHt9O1xuXG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBkb2N1bWVudC5sb2NhdGlvbi5oYXNoLm1hdGNoKC8jaGFzaEFwaTooLio/KTpcXC9oYXNoQXBpLyk7XG4gICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBjb25zdCBmdW5jdGlvbkNhbGxzID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQobWF0Y2hlc1sxXSkpO1xuXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBmdW5jdGlvbkNhbGxzKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uZnVuYykge1xuICAgICAgICAgICAgdGhpcy5mdW5jdGlvbkNhbGxzW2l0ZW0uZnVuY10gPSBpdGVtLmFyZ3MgfHwge307XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2hvdWxkQ2FsbChmdW5jKSB7XG4gICAgcmV0dXJuIHRoaXMuZnVuY3Rpb25DYWxsc1tmdW5jXSB8fCBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIYXNoQXBpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9IYXNoQXBpLmpzXG4gKiovIiwiaW1wb3J0IEZyYW1lQXBpIGZyb20gJy4vRnJhbWVBcGknO1xuaW1wb3J0IHVuaXF1ZUlkIGZyb20gJy4vLi4vdW5pcWlkJztcbmltcG9ydCBEYXRhUHJvdmlkZXJGYWN0b3J5IGZyb20gJy4vRGF0YVByb3ZpZGVyRmFjdG9yeSc7XG5pbXBvcnQgRWRpdGFibGUgZnJvbSAnLi9FZGl0YWJsZSc7XG5cbmNsYXNzIFZpc3VhbEZyYW1lXG57XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFyYW1zKCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIEZyYW1lQXBpLmJpbmRNZXNzYWdlTGlzdGVuZXIodGhpcyk7XG4gICAgdGhpcy5wYWdlU3RydWN0dXJlSnNvbkRhdGEgPSBudWxsO1xuICAgIC8qIGdsb2JhbCB3aW5kb3c6ZmFsc2UgKi9cbiAgICB0aGlzLnBhcmVudFdpbmRvdyA9IHdpbmRvdy5wYXJlbnQ7XG4gICAgLyoqIEB2YXIgRnJvbnRlbmRNb25zdGVyICovXG4gICAgdGhpcy5wYXJlbnRNb25zdGVyID0gdGhpcy5wYXJlbnRXaW5kb3cuRnJvbnRlbmRNb25zdGVyO1xuICAgIHRoaXMucGFyZW50QnVpbGRlciA9IHRoaXMucGFyZW50TW9uc3Rlci5idWlsZGVyO1xuICAgIHRoaXMuY3VycmVudE1vbnN0ZXJDb250ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5lZGl0YWJsZSA9IG5ldyBFZGl0YWJsZSgpO1xuICAgIHRoaXMubWFrZUl0TW92ZSgpO1xuICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVIYW5kbGVycygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgJCgoKSA9PiB7XG4gICAgICB0aGlzLnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAgIHRoaXMuaW5pdFByb3ZpZGVycygpO1xuICAgIH0pO1xuICAgIHRoaXMuTW9uc3RlckVkaXREYXRhID0gd2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEE7XG4gIH1cblxuICBpbml0UHJvdmlkZXJzKCkge1xuICAgIHRoaXMucHJvdmlkZXJzID0ge1xuICAgICAgbGF5b3V0OiB0aGlzLmdldFByb3ZpZGVycyh0aGlzLk1vbnN0ZXJFZGl0RGF0YS5sYXlvdXQpLFxuICAgICAgdGVtcGxhdGU6IHRoaXMuZ2V0UHJvdmlkZXJzKHRoaXMuTW9uc3RlckVkaXREYXRhLnRlbXBsYXRlKSxcbiAgICAgIGVudGl0eTogdGhpcy5nZXRQcm92aWRlcnModGhpcy5Nb25zdGVyRWRpdERhdGEuZW50aXR5KSxcbiAgICB9O1xuICB9XG5cbiAgc2V0IHBhZ2VTdHJ1Y3R1cmVKc29uKHZhbHVlKSB7XG4gICAgdGhpcy5wYWdlU3RydWN0dXJlSnNvbkRhdGEgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBwYWdlU3RydWN0dXJlSnNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlU3RydWN0dXJlSnNvbkRhdGE7XG4gIH1cblxuICBnZXRQcm92aWRlcnMoYXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXMoYXJyLnByb3ZpZGVycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3QgcHJvdmlkZXJEZWNsID0gYXJyLnByb3ZpZGVyc1trZXldO1xuICAgICAgcmVzdWx0W2tleV0gPSBEYXRhUHJvdmlkZXJGYWN0b3J5LmZhY3RvcnkoXG4gICAgICAgIHByb3ZpZGVyRGVjbCxcbiAgICAgICAgYXJyLnByb3ZpZGVkS2V5c1trZXldIHx8IHt9XG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXQgJG1vbnN0ZXJDb250ZW50KCkge1xuICAgIGlmICh0aGlzLiRtb25zdGVyQ29udGVudENhY2hlKSB7XG4gICAgICByZXR1cm4gdGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZTtcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpO1xuICAgIHJldHVybiB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlO1xuICB9XG5cbiAgcmVmcmVzaE1vbnN0ZXJDb250ZW50Q2FjaGUoKSB7XG4gICAgdGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZSA9IHt9O1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICQodGhpcy5zZXR0aW5nc1snbW9uc3Rlci1jb250ZW50LXNlbGVjdG9yJ10pLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGlmICghdGhhdC5jdXJyZW50TW9uc3RlckNvbnRlbnQpIHtcbiAgICAgICAgdGhhdC5jdXJyZW50TW9uc3RlckNvbnRlbnQgPSAkKHRoaXMpLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpO1xuICAgICAgfVxuICAgICAgdGhhdC4kbW9uc3RlckNvbnRlbnRDYWNoZVskKHRoaXMpLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpXSA9ICQodGhpcyk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVIYW5kbGVycygpIHtcbiAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCAmJiB0aGlzLiRoYW5kbGVycykge1xuICAgICAgdGhpcy4kaGFuZGxlcnMuY3NzKFxuICAgICAgICAndG9wJyxcbiAgICAgICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5wb3NpdGlvbigpLnRvcFxuICAgICAgICAgICsgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5oZWlnaHQoKVxuICAgICAgICAgIC0gdGhpcy4kaGFuZGxlcnMuaGVpZ2h0KClcbiAgICAgICk7XG4gICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgbWFrZUl0TW92ZSgpIHtcbiAgICB0aGlzLiRoYW5kbGVycyA9ICQoYFxuPGRpdiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNcIj5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX2NvbmZpZ3VyZVwiPlxuICAgIDxpIGNsYXNzPVwiZmEgZmEtY29nXCI+PC9pPlxuICA8L2E+XG4gIDxzcGFuIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fYmxvY2stbmFtZVwiPkJsb2NrIG5hbWUgaGVyZTwvc3Bhbj5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtdXBcIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXVwXCI+PC9pPlxuICA8L2E+XG4gIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLWRvd25cIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvd25cIj48L2k+XG4gIDwvYT5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX2Nsb25lXCI+XG4gICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9uZVwiPjwvaT5cbiAgPC9hPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fcmVtb3ZlXCI+XG4gICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT5cbiAgPC9hPlxuPC9kaXY+YCk7XG4gICAgJCgnYm9keScpLmFwcGVuZCh0aGlzLiRoYW5kbGVycyk7XG4gICAgdGhpcy4kaGFuZGxlcnMuaGlkZSgpO1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICQodGhpcy5zZXR0aW5nc1snbW9uc3Rlci1jb250ZW50LXNlbGVjdG9yJ10pLm9uKHtcbiAgICAgIG1vdXNlZW50ZXI6IGZ1bmN0aW9uIGhvdmVySW4oKSB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ20tbW9uc3Rlci1jb250ZW50X19tYXRlcmlhbC0taGlnaGxpZ2h0ZWQnKTtcbiAgICAgIH0sXG4gICAgICBtb3VzZWxlYXZlOiBmdW5jdGlvbiBob3Zlck91dCgpIHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1oaWdobGlnaHRlZCcpO1xuICAgICAgfSxcbiAgICAgIGNsaWNrOiBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgdGhhdC5zZWxlY3RNYXRlcmlhbCgkdGhpcyk7XG4gICAgICB9LFxuICAgIH0sICdbZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICB0aGF0LiRoYW5kbGVyc1xuICAgICAgLm9uKCdjbGljaycsICcubW9uc3Rlci1ibG9jay1oYW5kbGVyc19fbW92ZS11cCcsICgpID0+IHtcbiAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICBjb25zdCAkcHJldiA9IHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwucHJldignW2RhdGEtaXMtbWF0ZXJpYWxdJyk7XG4gICAgICAgICAgaWYgKCRwcmV2Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5pbnNlcnRCZWZvcmUoJHByZXYpO1xuICAgICAgICAgICAgdGhhdC51cGRhdGVIYW5kbGVycygpO1xuICAgICAgICAgICAgdGhhdC5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLWRvd24nLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICAgICAgY29uc3QgJG5leHQgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLm5leHQoJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICAgICAgIGlmICgkbmV4dC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwuaW5zZXJ0QWZ0ZXIoJG5leHQpO1xuICAgICAgICAgICAgdGhhdC51cGRhdGVIYW5kbGVycygpO1xuICAgICAgICAgICAgdGhhdC5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19jbG9uZScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICBjb25zdCAkY2xvbmVkTWF0ZXJpYWwgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLmNsb25lKCk7XG4gICAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSB1bmlxdWVJZCgnbWF0Jyk7XG4gICAgICAgICAgJGNsb25lZE1hdGVyaWFsXG4gICAgICAgICAgICAuaW5zZXJ0QWZ0ZXIodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbClcbiAgICAgICAgICAgIC5kYXRhKFxuICAgICAgICAgICAgICAnbWF0ZXJpYWxJbmRleCcsXG4gICAgICAgICAgICAgIHJhbmRvbUluZGV4XG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXR0cignZGF0YS1tYXRlcmlhbC1pbmRleCcsIHJhbmRvbUluZGV4KTtcbiAgICAgICAgICB0aGF0LnNlbGVjdE1hdGVyaWFsKCRjbG9uZWRNYXRlcmlhbCk7XG4gICAgICAgICAgdGhhdC5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIG1hdGVyaWFsPycpKSB7XG4gICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCA9IG51bGw7XG4gICAgICAgICAgICB0aGF0LiRoYW5kbGVycy5oaWRlKCk7IC8vIGl0IGRvZXMgbm90IHdvcmsuIHdoeT8gTmVlZCB0byBmaXghXG4gICAgICAgICAgICB0aGF0LnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBzZWxlY3RNYXRlcmlhbCgkbWF0ZXJpYWwpIHtcbiAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCA9PT0gJG1hdGVyaWFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgIH1cbiAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsID0gJG1hdGVyaWFsO1xuICAgIHRoaXMudXBkYXRlSGFuZGxlcnMoKTtcbiAgICB0aGlzLiRoYW5kbGVycy5zaG93KCk7XG4gIH1cblxuICBzZXJpYWxpemVDb250ZW50KGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgT2JqZWN0LmtleXModGhpcy4kbW9uc3RlckNvbnRlbnQpLmZvckVhY2godW5pcXVlQ29udGVudElkID0+IHtcbiAgICAgIGNvbnN0ICRtb25zdGVyID0gdGhpcy4kbW9uc3RlckNvbnRlbnRbdW5pcXVlQ29udGVudElkXTtcbiAgICAgIHJlc3VsdFskbW9uc3Rlci5kYXRhKCd1bmlxdWVDb250ZW50SWQnKV0gPSB0aGF0LnNlcmlhbGl6ZVVuaXF1ZUNvbnRlbnQoJG1vbnN0ZXIpO1xuICAgIH0pO1xuICAgIHRoaXMuc2VuZFRvQnVpbGRlcihjYWxsYmFjaywgW3Jlc3VsdF0pO1xuICB9XG5cbiAgc2VyaWFsaXplVW5pcXVlQ29udGVudCgkbW9uc3RlckNvbnRlbnQpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICByZXN1bHQudW5pcXVlQ29udGVudElkID0gJG1vbnN0ZXJDb250ZW50LmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpO1xuICAgIHJlc3VsdC5tYXRlcmlhbHMgPSB7fTtcbiAgICAkbW9uc3RlckNvbnRlbnQuZmluZCgnW2RhdGEtaXMtbWF0ZXJpYWw9XFwnMVxcJ10nKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCBtYXRlcmlhbCA9IHt9O1xuICAgICAgbWF0ZXJpYWwuYmxvY2sgPSAkKHRoaXMpLmRhdGEoJ21hdGVyaWFsQmxvY2snKTtcbiAgICAgIHJlc3VsdC5tYXRlcmlhbHNbJCh0aGlzKS5kYXRhKCdtYXRlcmlhbEluZGV4JyldID0gbWF0ZXJpYWw7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIFZpc3VhbEZyYW1lIHNldHRpbmdzLlxuICAgKiBVc2VzIFZpc3VhbEZyYW1lU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuVmlzdWFsRnJhbWVTZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICdtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InOiAnLm0tbW9uc3Rlci1jb250ZW50X19jb250ZW50JyxcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHVzZXJTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgfVxuXG4gIHNlbmRUb0J1aWxkZXIoZnVuYywgYXJncykge1xuICAgIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMucGFyZW50V2luZG93LCBmdW5jLCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JtU3VibWl0KGRhdGEpIHtcbiAgICBjb25zdCAkZm9ybSA9ICQoJzxmb3JtIG1ldGhvZD1cIlBPU1RcIj48L2Zvcm0+Jyk7XG4gICAgY29uc3QgJGlucHV0ID0gJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX19qc29uXCI+Jyk7XG4gICAgY29uc3QgJGNzcmYgPSAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiPicpO1xuXG4gICAgJGNzcmZcbiAgICAgIC5hdHRyKCduYW1lJywgJCgnbWV0YVtuYW1lPWNzcmYtcGFyYW1dJykuYXR0cignY29udGVudCcpKVxuICAgICAgLnZhbCgkKCdtZXRhW25hbWU9Y3NyZi10b2tlbl0nKS5hdHRyKCdjb250ZW50JykpXG4gICAgICAuYXBwZW5kVG8oJGZvcm0pO1xuXG4gICAgJGlucHV0XG4gICAgICAudmFsKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgLmFwcGVuZFRvKCRmb3JtKTtcblxuICAgICRmb3JtWzBdLnN1Ym1pdCgpO1xuICB9XG5cbiAgY29uc3RydWN0VGVtcGxhdGVEYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm92aWRlcnNFbnRpdGllczogdGhpcy5wYXJlbnRCdWlsZGVyLnNlcmlhbGl6ZSgpLFxuICAgICAgcmVnaW9uc01hdGVyaWFsczogdGhpcy5wYXJlbnRCdWlsZGVyXG4gICAgICAgIC5lbnZpcm9ubWVudHMuZ2V0KCdwYWdlLXN0cnVjdHVyZScpLm1hdGVyaWFsc0J5UmVnaW9ucygpLFxuICAgIH07XG4gIH1cblxuICBuZXdCbG9jayhtYXRlcmlhbE5hbWUsIHJlZ2lvbk5hbWUpIHtcbiAgICAvLyBAdG9kbyBBZGQgbG9hZGVyIGhlcmUgYXMgd2UgYXJlIHVzaW5nIGZvcm0gcG9zdCAhXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSB1bmlxdWVJZCgnbWF0Jyk7XG4gICAgY29uc3QgbmV3RGF0YSA9IHRoaXMuaXRlcmF0ZVRlbXBsYXRlVHlwZSh0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uKTtcbiAgICBkZWJ1Z2dlcjtcbiAgICBpZiAobmV3RGF0YS5lbnRpdHkucmVnaW9uc01hdGVyaWFscy5oYXNPd25Qcm9wZXJ0eShyZWdpb25OYW1lKSA9PT0gZmFsc2UpIHtcbiAgICAgIG5ld0RhdGEuZW50aXR5LnJlZ2lvbnNNYXRlcmlhbHNbcmVnaW9uTmFtZV0gPSB7fTtcbiAgICB9XG4gICAgLy8gd2UgYXJlIG1vZGlmeWluZyB0ZW1wbGF0ZSBkYXRhIGJ5IGFkZGluZyBuZXcgbWF0ZXJpYWwgaW50byBuZWVkZWQgcmVnaW9uXG4gICAgbmV3RGF0YS5lbnRpdHkucmVnaW9uc01hdGVyaWFsc1tyZWdpb25OYW1lXS5kZWNsW3JhbmRvbUluZGV4XSA9IHtcbiAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbE5hbWUsXG4gICAgfTtcbiAgICBuZXdEYXRhLmVudGl0eS5yZWdpb25zTWF0ZXJpYWxzW3JlZ2lvbk5hbWVdLm1hdGVyaWFsc09yZGVyLnB1c2gocmFuZG9tSW5kZXgpO1xuICAgIFZpc3VhbEZyYW1lLmZvcm1TdWJtaXQobmV3RGF0YSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLml0ZXJhdGVUZW1wbGF0ZVR5cGUodGhpcy5wYWdlU3RydWN0dXJlSnNvbik7XG4gICAgZGF0YS5hY3Rpb24gPSAnc2F2ZSc7XG4gICAgZGVidWdnZXI7XG4gICAgVmlzdWFsRnJhbWUuZm9ybVN1Ym1pdChkYXRhKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpdGVyYXRlVGVtcGxhdGVUeXBlKGFycikge1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGVudGl0eToge1xuICAgICAgICBtYXRlcmlhbHNCeVJlZ2lvbkRlY2w6IHt9LFxuICAgICAgICBwcm92aWRlcnM6IHt9LFxuICAgICAgfSxcbiAgICB9O1xuICAgIGFyci5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBvYmouZGF0YS5pZDtcbiAgICAgIGNvbnN0IHJlZ2lvbnNSZXN1bHQgPSBWaXN1YWxGcmFtZS5pdGVyYXRlVGVtcGxhdGVSZWdpb25zKG9iai5jaGlsZHJlbik7XG4gICAgICAvLyBsYXlvdXQgb3IgdGVtcGxhdGVcbiAgICAgIHJlc3VsdFtrZXldID0ge1xuICAgICAgICB0ZW1wbGF0ZVJlZ2lvbnM6IHJlZ2lvbnNSZXN1bHQudGVtcGxhdGVSZWdpb25zLFxuICAgICAgICB0ZW1wbGF0ZUlkOiBvYmouZGF0YS50ZW1wbGF0ZUlkLFxuICAgICAgICBwcm92aWRlcnM6IHt9LFxuICAgICAgfTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhyZWdpb25zUmVzdWx0LmVudGl0eU1hdGVyaWFscykubGVuZ3RoID4gMCkge1xuICAgICAgICBPYmplY3Qua2V5cyhyZWdpb25zUmVzdWx0LmVudGl0eU1hdGVyaWFscykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgICAgIHJlc3VsdC5lbnRpdHkubWF0ZXJpYWxzQnlSZWdpb25EZWNsW3JlZ2lvbktleV0gPSByZWdpb25zUmVzdWx0LmVudGl0eU1hdGVyaWFsc1tyZWdpb25LZXldO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdFtrZXldLnByb3ZpZGVycyA9IHRoaXMuc2VyaWFsaXplUHJvdmlkZXJzKGtleSk7XG4gICAgfSk7XG4gICAgcmVzdWx0LmVudGl0eS5wcm92aWRlcnMgPSB0aGlzLnNlcmlhbGl6ZVByb3ZpZGVycygnZW50aXR5Jyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNlcmlhbGl6ZVByb3ZpZGVycyh0eXBlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5wcm92aWRlcnNbdHlwZV0pLmZvckVhY2gocHJvdmlkZXJLZXkgPT4ge1xuICAgICAgcmVzdWx0W3Byb3ZpZGVyS2V5XSA9IHRoaXMucHJvdmlkZXJzW3R5cGVdW3Byb3ZpZGVyS2V5XS5zZXJpYWxpemUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGl0ZXJhdGVUZW1wbGF0ZVJlZ2lvbnMoYXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgdGVtcGxhdGVSZWdpb25zOiB7fSxcbiAgICAgIHRlbXBsYXRlUmVnaW9uc09yZGVyOiBbXSxcbiAgICAgIGVudGl0eU1hdGVyaWFsczoge30sXG4gICAgfTtcbiAgICBhcnIuZm9yRWFjaChvYmogPT4ge1xuICAgICAgLy8gY29uc3Qga2V5ID0gb2JqLmRhdGEuaWQucmVwbGFjZSgvXi4qXFwuLywgJycpO1xuICAgICAgY29uc3QgcmVnaW9uS2V5ID0gb2JqLmRhdGEucmVnaW9uS2V5O1xuICAgICAgcmVzdWx0LnRlbXBsYXRlUmVnaW9uc09yZGVyLnB1c2gocmVnaW9uS2V5KTtcbiAgICAgIGNvbnN0IGVudGl0eURlcGVuZGVudCA9IG9iai5kYXRhLmVudGl0eURlcGVuZGVudCB8fCBmYWxzZTtcblxuICAgICAgY29uc3QgcmVnaW9uTWF0ZXJpYWxzID0gVmlzdWFsRnJhbWUuaXRlcmF0ZU1hdGVyaWFscyhvYmouY2hpbGRyZW4sIHJlZ2lvbktleSk7XG5cbiAgICAgIGlmIChlbnRpdHlEZXBlbmRlbnQgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgYW4gZXhhY3QgdGVtcGxhdGUgcmVnaW9uXG4gICAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnNbcmVnaW9uS2V5XSA9IHtcbiAgICAgICAgICByZWdpb25JZDogb2JqLmRhdGEucmVnaW9uSWQsXG4gICAgICAgICAgcmVnaW9uS2V5LFxuICAgICAgICAgIHVuaXF1ZUNvbnRlbnRJZDogb2JqLmRhdGEudW5pcXVlQ29udGVudElkLFxuICAgICAgICAgIG1hdGVyaWFsc0RlY2xzOiByZWdpb25NYXRlcmlhbHMsXG4gICAgICAgICAgZW50aXR5RGVwZW5kZW50LFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnRlbXBsYXRlUmVnaW9uc1tyZWdpb25LZXldID0ge1xuICAgICAgICAgIHJlZ2lvbklkOiBvYmouZGF0YS5yZWdpb25JZCxcbiAgICAgICAgICByZWdpb25LZXksXG4gICAgICAgICAgdW5pcXVlQ29udGVudElkOiBvYmouZGF0YS51bmlxdWVDb250ZW50SWQsXG4gICAgICAgICAgZW50aXR5RGVwZW5kZW50LFxuICAgICAgICB9O1xuICAgICAgICAvLyB0aGlzIGlzIGVudGl0eS1kZXBlbmRlbnQgcmVnaW9uXG4gICAgICAgIHJlc3VsdC5lbnRpdHlNYXRlcmlhbHNbcmVnaW9uS2V5XSA9IHJlZ2lvbk1hdGVyaWFscztcbiAgICAgIH1cblxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgaXRlcmF0ZU1hdGVyaWFscyhhcnIsIHJlZ2lvbktleSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGRlY2w6IHt9LFxuICAgICAgbWF0ZXJpYWxzT3JkZXI6IFtdLFxuICAgIH07XG4gICAgYXJyLmZvckVhY2gob2JqID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IG9iai5kYXRhLm1hdGVyaWFsSW5kZXg7XG4gICAgICByZXN1bHQuZGVjbFtrZXldID0ge1xuICAgICAgICAvLyBlZGl0YWJsZXNLZXlzOiBvYmouZGF0YS5lZGl0YWJsZUtleXMsXG4gICAgICAgIG1hdGVyaWFsOiBvYmouZGF0YS5tYXRlcmlhbFBhdGgsXG4gICAgICB9O1xuICAgICAgcmVzdWx0Lm1hdGVyaWFsc09yZGVyLnB1c2goa2V5KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbEZyYW1lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZS5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBXWVNJV1lHIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBCYXNlRWRpdGFibGUuZnJhbWUkKCRub2RlKTtcbiAgICBjb25zdCBlZGl0b3IgPSBub2RlLmRhdGEoJ2VkaXRvcicpO1xuICAgIGlmIChlZGl0b3IpIHtcbiAgICAgIHJldHVybiBlZGl0b3IuZ2V0RGF0YSgpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZS5odG1sKCk7XG4gIH1cblxuICBpbml0aWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gJG5vZGVbMF07XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgYXV0b1BhcmFncmFwaDogZmFsc2UsXG4gICAgICBlbmFibGVDb250ZW50RWRpdGFibGU6IHRydWUsXG4gICAgICBpZ25vcmVFbXB0eVBhcmFncmFwaDogdHJ1ZSxcbiAgICAgIGVudGVyTW9kZTogd2luZG93LkNLRURJVE9SLkVOVEVSX0JSLFxuICAgIH07XG4gICAgLy8gJCgoKSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB3aW5kb3cuQWxsb3lFZGl0b3IuZWRpdGFibGUobm9kZSwgY29uZmlnKS5nZXQoJ25hdGl2ZUVkaXRvcicpO1xuICAgICAgJG5vZGUuZGF0YSgnZWRpdG9yJywgZWRpdG9yKTtcbiAgICAvLyB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdZU0lXWUc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9XWVNJV1lHLmpzXG4gKiovIiwiaW1wb3J0IFdZU0lXWUcgZnJvbSAnLi9XWVNJV1lHJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJy4vbGluayc7XG5pbXBvcnQgVGV4dFN0cmluZyBmcm9tICcuL3N0cmluZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFsbCgpIHtcbiAgaWYgKHR5cGVvZih3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVMpID09PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFUyA9IHt9O1xuICB9XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snd3lzaXd5ZyddID0gbmV3IFdZU0lXWUcoKTtcbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWydsaW5rJ10gPSBuZXcgTGluaygpO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ2ltYWdlJ10gPSBuZXcgSW1hZ2UoKTtcbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWydzdHJpbmcnXSA9IG5ldyBUZXh0U3RyaW5nKCk7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvYWxsLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFZGl0YWJsZSBmcm9tICcuL0Jhc2VFZGl0YWJsZSc7XG5cbmNsYXNzIEltYWdlIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIGNvbnN0ICRpbWcgPSAkbm9kZS5maW5kKCdpbWcnKS5maXJzdCgpO1xuICAgIHJldHVybiB7XG4gICAgICBzcmM6ICRpbWcuYXR0cignc3JjJyksXG4gICAgICBhbHQ6ICRpbWcuYXR0cignYWx0JyksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2ltYWdlLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFZGl0YWJsZSBmcm9tICcuL0Jhc2VFZGl0YWJsZSc7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6ICRub2RlLmRhdGEoJ29yaWdpbmFsSHJlZicpID8gJG5vZGUuZGF0YSgnb3JpZ2luYWxIcmVmJykgOiAkbm9kZS5hdHRyKCdocmVmJyksXG4gICAgICBhbmNob3I6ICRub2RlLmh0bWwoKSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9saW5rLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFZGl0YWJsZSBmcm9tICcuL0Jhc2VFZGl0YWJsZSc7XG5cbmNsYXNzIFRleHRTdHJpbmcgZXh0ZW5kcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IEJhc2VFZGl0YWJsZS5mcmFtZSQoJG5vZGUpO1xuICAgIGNvbnN0IGVkaXRvciA9IG5vZGUuZGF0YSgnZWRpdG9yJyk7XG4gICAgaWYgKGVkaXRvcikge1xuICAgICAgcmV0dXJuIGVkaXRvci5nZXREYXRhKCk7XG4gICAgfVxuICAgIHJldHVybiBub2RlLmh0bWwoKTtcbiAgfVxuXG4gIGluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSAkbm9kZVswXTtcbiAgICAvKiBnbG9iYWwgd2luZG93OmZhbHNlICovXG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBhbGxvd2VkQ29udGVudDogJ2kgdScsXG4gICAgICB0b29sYmFyczoge1xuICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICBzZWxlY3Rpb25zOiB3aW5kb3cuQWxsb3lFZGl0b3IuU2VsZWN0aW9ucyxcbiAgICAgICAgICB0YWJJbmRleDogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhdXRvUGFyYWdyYXBoOiBmYWxzZSxcbiAgICAgIGVuYWJsZUNvbnRlbnRFZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlnbm9yZUVtcHR5UGFyYWdyYXBoOiB0cnVlLFxuICAgICAgYmxvY2tsZXNzOiB0cnVlLFxuICAgICAgZW50ZXJNb2RlOiB3aW5kb3cuQ0tFRElUT1IuRU5URVJfQlIsXG4gICAgfTtcbiAgICAvLyAkKCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZWRpdG9yID0gd2luZG93LkFsbG95RWRpdG9yLmVkaXRhYmxlKG5vZGUsIGNvbmZpZykuZ2V0KCduYXRpdmVFZGl0b3InKTtcbiAgICAgIGVkaXRvci5vbigna2V5JywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQuZGF0YS5rZXlDb2RlID09PSAxMyB8fCBldmVudC5kYXRhLmtleUNvZGUgPT09IHdpbmRvdy5DS0VESVRPUi5TSElGVCArIDEzKSB7XG4gICAgICAgICAgLy8gYWRkIHNhdmluZyBmdW5jdGlvbiBoZXJlXG4gICAgICAgICAgZXZlbnQuY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZWRpdG9yLm9uKCdwYXN0ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQuZGF0YS5kYXRhVmFsdWUgPSBldmVudC5kYXRhLmRhdGFWYWx1ZS5yZXBsYWNlKC88YnJbXFxzXFwvXSo+L2dtaSwgJyAnKTtcbiAgICAgIH0pO1xuICAgICAgJG5vZGUuZGF0YSgnZWRpdG9yJywgZWRpdG9yKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZygkbm9kZSwgbm9kZSk7XG4gICAgICAvLyB0aHJvdyBlO1xuICAgIH1cbiAgICAvLyB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRTdHJpbmc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9zdHJpbmcuanNcbiAqKi8iLCJpbXBvcnQgRGF0YVByb3ZpZGVyIGZyb20gJy4uL0RhdGFQcm92aWRlcic7XG5cbmNsYXNzIFN0YXRpY0NvbnRlbnQgZXh0ZW5kcyBEYXRhUHJvdmlkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm92aWRlZEtleXMpIHtcbiAgICBzdXBlcignRG90UGxhbnRcXFxcTW9uc3RlclxcXFxEYXRhRW50aXR5XFxcXFN0YXRpY0NvbnRlbnRQcm92aWRlcicsIHByb3ZpZGVkS2V5cyk7XG4gIH1cblxuICBmaWxsQ29uZmlnKGRhdGEpIHtcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YTtcbiAgICBuZXdEYXRhLmVudGl0aWVzID0gdGhpcy5zZXJpYWxpemVLZXlzKCk7XG4gICAgcmV0dXJuIG5ld0RhdGE7XG4gIH1cblxuICBzZXJpYWxpemVNYXRlcmlhbChyZWdpb25LZXksIG1hdGVyaWFsS2V5LCBkYXRhS2V5cywgJHJlZ2lvbiwgJG1hdGVyaWFsKSB7XG4gICAgY29uc3QgbWF0ZXJpYWxFZGl0YWJsZUtleXMgPSAkbWF0ZXJpYWwuZGF0YSgnZWRpdGFibGVLZXlzJyk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5yZWN1cnNpdmVTZXJpYWxpemUobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRtYXRlcmlhbCwgZGF0YUtleXMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZWN1cnNpdmVTZXJpYWxpemUobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRyb290LCBkYXRhS2V5cywgcHJlZml4ID0gJycpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcblxuICAgIGRhdGFLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IG9iaiA9IG1hdGVyaWFsRWRpdGFibGVLZXlzW2tleV0gfHwgJ05PX1NVQ0hfS0VZJztcbiAgICAgIGlmIChvYmogPT09ICdOT19TVUNIX0tFWScpIHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvYmogPT09IE9iamVjdChvYmopKSB7XG4gICAgICAgIC8vIGl0J3MgcmVjdXJzaXZlXG4gICAgICAgIC8vIGZpcnN0IC0gZmluZCBhbGwgYmxvY2tzXG4gICAgICAgIGNvbnN0ICRibG9ja3MgPSAkcm9vdC5maW5kKGBbZGF0YS1yZWN1cnNpdmUtaXRlbT1cIiR7a2V5fVwiXWApO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICByZXN1bHRba2V5XSA9IFtdO1xuICAgICAgICAkYmxvY2tzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh0aGF0LnJlY3Vyc2l2ZVNlcmlhbGl6ZShvYmosICR0aGlzLCBPYmplY3Qua2V5cyhvYmopLCAnaXRlbS4nKSk7XG4gICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGl0J3MgcGxhaW4gZmllbGRcbiAgICAgICAgY29uc3QgJG5vZGUgPSAkcm9vdC5maW5kKGBbZGF0YS1lZGl0YWJsZS1rZXk9XCIke3ByZWZpeH0ke2tleX1cIl1gKS5maXJzdCgpO1xuICAgICAgICBpZiAoJG5vZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBTa2lwcGVkIFtkYXRhLWVkaXRhYmxlLWtleT1cIiR7cHJlZml4fSR7a2V5fVwiXSBhcyBub3QgZm91bmRgKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0W2tleV0gPSBEYXRhUHJvdmlkZXIuZWRpdGFibGUuc2VyaWFsaXplRWRpdGFibGUoJG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGljQ29udGVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvcHJvdmlkZXJzL1N0YXRpY0NvbnRlbnQuanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi92aXN1YWwtYnVpbGRlci9idW5kbGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=