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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWFkMWEwYTk3YTM1MzdjMDU4OWYiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL0Jhc2VFZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9Gcm9udGVuZE1vbnN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXJGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0VkaXRhYmxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL1dZU0lXWUcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2FsbC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9wcm92aWRlcnMvU3RhdGljQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9idW5kbGUuY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkZyb250ZW5kTW9uc3RlciIsIkJhc2VFbnZpcm9ubWVudCIsInZpc3VhbEJ1aWxkZXIiLCJuYW1lIiwidGFyZ2V0IiwiJCIsInNldHRpbmdzIiwiY29udGVudFdpbmRvdyIsImN1cnJlbnRFbnZpcm9ubWVudCIsImVudmlyb25tZW50cyIsImdldCIsImRlYWN0aXZhdGUiLCJjbGVhclN0YWNrYWJsZSIsImZ1bmMiLCJhcmdzIiwic2VuZE1lc3NhZ2UiLCJCYXNlRWRpdGFibGUiLCIkbm9kZSIsIkZyYW1lQXBpIiwibGlzdGVuZXIiLCJjYWxsYmFjayIsImNhbGxiYWNrSGFuZGxlciIsImV2ZW50IiwibWVzc2FnZSIsImlzSWUiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiYXBwbHkiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJzdHJpbmdpZnkiLCJwb3N0TWVzc2FnZSIsImlzIiwiaWUiLCJwYXJhbXMiLCJ2aXN1YWxCdWxkZXIiLCJoYXNoQXBpIiwicGFyZW50IiwiaGFzQnVpbGRlciIsIlZpc3VhbEZyYW1lIiwic21vb3RoU2Nyb2xsIiwiaW5pdCIsInVzZXJTZXR0aW5ncyIsIkZyb250ZW5kTW9uc3RlclNldHRpbmdzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJidWlsZGVyIiwiJGJ1aWxkZXIiLCJsZW5ndGgiLCJWaXN1YWxCdWlsZGVyIiwicmVzb2x1dGlvblN3aXRjaGVyIiwiTWFwIiwiZW52aXJvbm1lbnRTZWxlY3RvciIsInN3aXRjaEVudmlyb25tZW50IiwiZmlyc3QiLCJtb2QiLCJiaW5kTWVzc2FnZUxpc3RlbmVyIiwiY29udHJvbHMiLCJWaXN1YWxCdWlsZGVyU2V0dGluZ3MiLCJidW5kbGVzIiwiJHN0YWNrYWJsZSIsInRoYXQiLCJiZW1FbGVtIiwiJHJlc29sdXRpb25MaW5rcyIsImNsaWNrIiwid2lkdGgiLCIkc2VjdGlvbkxpbmtzIiwiZW52aXJvbm1lbnROYW1lIiwiYWN0aXZhdGUiLCJlbXB0eSIsInBhbmVDbGFzcyIsIm1vZGlmaWVyIiwiZmluZCIsIiRuZXdQYW5lIiwiYXBwZW5kIiwibWF0ZXJpYWxzIiwiaGFzT3duUHJvcGVydHkiLCJyZXN1bHQiLCJzZXJpYWxpemVQYWdlIiwiY29uc29sZSIsImxvZyIsInJlc3VsdEJ5UHJvdmlkZXJzIiwicHJvdmlkZWRLZXlzIiwiZnJhbWVDb250ZW50V2luZG93IiwiTU9OU1RFUl9FRElUX01PREVfREFUQSIsInRlbXBsYXRlIiwicHJvdmlkZXJJbmRleCIsInJlZ2lvbnMiLCJyZWdpb25LZXkiLCJtYXRlcmlhbEluZGV4IiwiZGF0YUtleXMiLCJlbnZpcm9ubWVudCIsInBhZ2VDaGFuZ2VkIiwiJGNvbnRyb2xzIiwiZWxlbSIsImxvY2F0aW9uIiwicmVsb2FkIiwiQWN0aW9uRW52aXJvbm1lbnQiLCJDdXN0b21pemF0aW9uRW52aXJvbm1lbnQiLCJNYXRlcmlhbHNFbnZpcm9ubWVudCIsImluaXRNYXRlcmlhbHNTZWxlY3RvciIsIiRtYXRlcmlhbHNHcm91cHMiLCIkbWF0ZXJpYWxzTGlzdCIsImkxOG5CdW5kbGVOYW1lIiwicG9seWdsb3QiLCJ0IiwiYnVuZGxlIiwiJGJ1bmRsZVRpdGxlIiwiZnVsbFBhdGgiLCJwdXNoIiwiZ3JvdXBzIiwiZ3JvdXBOYW1lIiwiZ3JvdXAiLCJpMThuR3JvdXBOYW1lIiwiJGxpIiwiJGxpc3QiLCJpdGVtcyIsIm1hdGVyaWFsTmFtZSIsIm1hdGVyaWFsIiwiaTE4bk1hdGVyaWFsTmFtZSIsIiRpdGVtIiwiZG9jdW1lbnQiLCJvbiIsImNsaWNrSGFuZGxlciIsIiR0aGlzIiwidG9nZ2xlTW9kIiwiZ3JvdXBQYXRoIiwiZWFjaCIsIml0IiwiJG1hdGVyaWFsc1BhbmUiLCJzaG93IiwiaGlkZSIsIiRncm91cHNQYW5lIiwiY3JlYXRlU3RhY2thYmxlUGFuZSIsIlBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCIsImluaXRQYWdlU3RydWN0dXJlRWxlbWVudCIsImVkaXRNb2RlRGF0YSIsIiRwYWdlU3RydWN0dXJlIiwiJHN0cnVjdHVyZVBhbmUiLCJqc3RyZWUiLCJsYXlvdXQiLCJsYXlvdXRJdGVtIiwiaWQiLCJ0ZW1wbGF0ZUlkIiwidGV4dCIsImljb24iLCJzdGF0ZSIsIm9wZW5lZCIsImNoaWxkcmVuIiwidGVtcGxhdGVJdGVtIiwiJGxheW91dFJlZ2lvbnMiLCJ0YXJnZXQkIiwiaXRlciIsInByb2Nlc3NMYXlvdXQiLCJpdGVtIiwidGVtcGxhdGVSZWdpb25zIiwicmVnaW9uIiwicGFnZVN0cnVjdHVyZSIsImNvcmUiLCJ0aGVtZXMiLCJwbHVnaW5zIiwidHlwZXMiLCJ0ZW1wbGF0ZVJlZ2lvbiIsImNvbnRlbnRUZW1wbGF0ZVJlZ2lvbiIsImpzdHJlZU9iaiIsInBhZ2VTdHJ1Y3R1cmVKc29uIiwiZ2V0X2pzb24iLCJub19zdGF0ZSIsIm5vX2lkIiwibm9fbGlfYXR0ciIsIm5vX2FfYXR0ciIsInJlZ2lvbnNTdHJ1Y3R1cmUiLCJzZXJpYWxpemUiLCJtYXRlcmlhbHNEZWNsIiwiJGxheW91dFJlZ2lvbiIsImV4dHJhY3RSZWdpb25EYXRhIiwiJGxheW91dE1hdGVyaWFscyIsIiRsYXlvdXRNYXRlcmlhbCIsInByb2Nlc3NMYXlvdXRNYXRlcmlhbCIsImxheW91dE1hdGVyaWFsSXRlbSIsImxheW91dE1hdGVyaWFsIiwicHJlZml4IiwibWF0ZXJpYWxQYXRoIiwidHlwZSIsImVkaXRhYmxlS2V5cyIsIm5vZGUiLCIkcmVnaW9ucyIsInByb2Nlc3NUZW1wbGF0ZVJlZ2lvbiIsImlzQ29udGVudCIsIiR0ZW1wbGF0ZVJlZ2lvbiIsImVudGl0eURlcGVuZGVudCIsIiRyZWdpb25NYXRlcmlhbHMiLCJwcm9jZXNzVGVtcGxhdGVSZWdpb25NYXRlcmlhbCIsIiRyZWdpb25NYXRlcmlhbCIsInJlZ2lvbklkIiwidW5pcXVlQ29udGVudElkIiwiU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsInVuaXFpZCIsIm1vcmVFbnRyb3B5IiwicmV0SWQiLCJfZm9ybWF0U2VlZCIsInNlZWQiLCJyZXFXaWR0aCIsInBhcnNlSW50IiwidG9TdHJpbmciLCJzbGljZSIsIkFycmF5Iiwiam9pbiIsIiRnbG9iYWwiLCJHTE9CQUwiLCIkbG9jdXR1cyIsInBocCIsInVuaXFpZFNlZWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJEYXRlIiwiZ2V0VGltZSIsInRvRml4ZWQiLCJEYXRhUHJvdmlkZXIiLCJjbGFzc05hbWUiLCJhc3NvY2lhdGlvbnMiLCJhc3NvY2lhdGUiLCIkcmVnaW9uIiwibWF0ZXJpYWxLZXkiLCIkbWF0ZXJpYWwiLCJtYXRlcmlhbEVkaXRhYmxlS2V5cyIsImluaXRpYWxpemVNYXRlcmlhbEVkaXQiLCIkcm9vdCIsIm9iaiIsIiRibG9ja3MiLCJjb3VudGVyIiwiZWRpdGFibGUiLCJpbml0aWFsaXplRWRpdGFibGUiLCJzZXJpYWxpemVNYXRlcmlhbCIsImNsYXNzIiwiZmlsbENvbmZpZyIsIkRhdGFQcm92aWRlckZhY3RvcnkiLCJwcm92aWRlckRlY2wiLCJwcm92aWRlciIsIkVkaXRhYmxlIiwiZWRpdGFibGVzQnlUeXBlIiwiTU9OU1RFUl9FRElUQUJMRVMiLCJleHBvcnRWYXJpYWJsZSIsInNlcmlhbGl6ZU5vZGUiLCJzdHJpbmciLCJIYXNoQXBpIiwiZnVuY3Rpb25DYWxscyIsImhhc2giLCJtYXRjaGVzIiwibWF0Y2giLCJkZWNvZGVVUklDb21wb25lbnQiLCJpbml0aWFsaXplIiwicGFnZVN0cnVjdHVyZUpzb25EYXRhIiwicGFyZW50V2luZG93IiwicGFyZW50TW9uc3RlciIsInBhcmVudEJ1aWxkZXIiLCJjdXJyZW50TW9uc3RlckNvbnRlbnQiLCJtYWtlSXRNb3ZlIiwicmVzaXplIiwidXBkYXRlSGFuZGxlcnMiLCJpbml0UHJvdmlkZXJzIiwiTW9uc3RlckVkaXREYXRhIiwicHJvdmlkZXJzIiwiZ2V0UHJvdmlkZXJzIiwiZW50aXR5IiwiYXJyIiwiZmFjdG9yeSIsIiRtb25zdGVyQ29udGVudENhY2hlIiwiJHNlbGVjdGVkTWF0ZXJpYWwiLCIkaGFuZGxlcnMiLCJjc3MiLCJwb3NpdGlvbiIsInRvcCIsImhlaWdodCIsIm1vdXNlZW50ZXIiLCJob3ZlckluIiwiYWRkQ2xhc3MiLCJtb3VzZWxlYXZlIiwiaG92ZXJPdXQiLCJyZW1vdmVDbGFzcyIsInNlbGVjdE1hdGVyaWFsIiwiJHByZXYiLCJwcmV2IiwiaW5zZXJ0QmVmb3JlIiwiJG5leHQiLCJuZXh0IiwiaW5zZXJ0QWZ0ZXIiLCIkY2xvbmVkTWF0ZXJpYWwiLCJjbG9uZSIsInJhbmRvbUluZGV4IiwiYXR0ciIsImNvbmZpcm0iLCJyZW1vdmUiLCIkbW9uc3RlckNvbnRlbnQiLCIkbW9uc3RlciIsInNlcmlhbGl6ZVVuaXF1ZUNvbnRlbnQiLCJzZW5kVG9CdWlsZGVyIiwiYmxvY2siLCJWaXN1YWxGcmFtZVNldHRpbmdzIiwicHJvdmlkZXJzRW50aXRpZXMiLCJyZWdpb25zTWF0ZXJpYWxzIiwibWF0ZXJpYWxzQnlSZWdpb25zIiwicmVnaW9uTmFtZSIsIm5ld0RhdGEiLCJpdGVyYXRlVGVtcGxhdGVUeXBlIiwiZGVjbCIsIm1hdGVyaWFsc09yZGVyIiwiZm9ybVN1Ym1pdCIsImFjdGlvbiIsIm1hdGVyaWFsc0J5UmVnaW9uRGVjbCIsInJlZ2lvbnNSZXN1bHQiLCJpdGVyYXRlVGVtcGxhdGVSZWdpb25zIiwiZW50aXR5TWF0ZXJpYWxzIiwic2VyaWFsaXplUHJvdmlkZXJzIiwicHJvdmlkZXJLZXkiLCJ2YWx1ZSIsInJlZnJlc2hNb25zdGVyQ29udGVudENhY2hlIiwiJGZvcm0iLCIkaW5wdXQiLCIkY3NyZiIsInZhbCIsImFwcGVuZFRvIiwic3VibWl0IiwidGVtcGxhdGVSZWdpb25zT3JkZXIiLCJyZWdpb25NYXRlcmlhbHMiLCJpdGVyYXRlTWF0ZXJpYWxzIiwibWF0ZXJpYWxzRGVjbHMiLCJXWVNJV1lHIiwiZnJhbWUkIiwiZWRpdG9yIiwiZ2V0RGF0YSIsImh0bWwiLCJjb25maWciLCJhdXRvUGFyYWdyYXBoIiwiZW5hYmxlQ29udGVudEVkaXRhYmxlIiwiaWdub3JlRW1wdHlQYXJhZ3JhcGgiLCJlbnRlck1vZGUiLCJDS0VESVRPUiIsIkVOVEVSX0JSIiwiQWxsb3lFZGl0b3IiLCJhbGwiLCJJbWFnZSIsIiRpbWciLCJzcmMiLCJhbHQiLCJMaW5rIiwiaHJlZiIsImFuY2hvciIsIlRleHRTdHJpbmciLCJhbGxvd2VkQ29udGVudCIsInRvb2xiYXJzIiwic3R5bGVzIiwic2VsZWN0aW9ucyIsIlNlbGVjdGlvbnMiLCJ0YWJJbmRleCIsImJsb2NrbGVzcyIsImtleUNvZGUiLCJTSElGVCIsImNhbmNlbCIsImRhdGFWYWx1ZSIsInJlcGxhY2UiLCJlIiwiU3RhdGljQ29udGVudCIsImVudGl0aWVzIiwic2VyaWFsaXplS2V5cyIsInJlY3Vyc2l2ZVNlcmlhbGl6ZSIsIndhcm4iLCJzZXJpYWxpemVFZGl0YWJsZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7QUFFQTs7Ozs7O0FBRUFBLFFBQU9DLGVBQVAsR0FBeUIsK0JBQXpCO0FBQ0EsRzs7Ozs7Ozs7Ozs7Ozs7QUNMQTs7Ozs7Ozs7S0FFTUMsZTtBQUNKLDRCQUFZQyxhQUFaLEVBQTJCQyxJQUEzQixFQUFpQztBQUFBOztBQUMvQixVQUFLRCxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLE1BQUwsR0FBY0MsRUFBRSxLQUFLSCxhQUFMLENBQW1CSSxRQUFuQixDQUE0QixnQkFBNUIsQ0FBRixFQUFpRCxDQUFqRCxFQUFvREMsYUFBbEU7QUFDRDs7OztnQ0FFVTtBQUNUO0FBQ0EsV0FBSSxLQUFLSixJQUFMLEtBQWMsS0FBS0QsYUFBTCxDQUFtQk0sa0JBQXJDLEVBQXlEO0FBQ3ZEO0FBQ0Q7QUFDRCxXQUFJLEtBQUtOLGFBQUwsQ0FBbUJNLGtCQUF2QixFQUEyQztBQUN6QyxjQUFL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QyxNQUFNa0MsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN0QitCLHFCQUFRa1MsSUFBUixrQ0FBNEM1TCxNQUE1QyxHQUFxRHhJLEdBQXJEO0FBQ0E7QUFDRDtBQUNEZ0Msa0JBQU9oQyxHQUFQLElBQWMsdUJBQWE2TCxRQUFiLENBQXNCd0ksaUJBQXRCLENBQXdDcFcsS0FBeEMsQ0FBZDtBQUNEO0FBQ0YsUUEzQkQ7QUE0QkEsY0FBTytELE1BQVA7QUFDRDs7Ozs7O21CQUdZZ1MsYTs7Ozs7Ozs7QUN0RGYsMEMiLCJmaWxlIjoidmlzdWFsLWJ1aWxkZXIvc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZWFkMWEwYTk3YTM1MzdjMDU4OWZcbiAqKi8iLCJpbXBvcnQgJy4vYnVuZGxlLmNzcyc7XG5cbmltcG9ydCBGcm9udGVuZE1vbnN0ZXIgZnJvbSAnLi9Gcm9udGVuZE1vbnN0ZXInO1xuXG53aW5kb3cuRnJvbnRlbmRNb25zdGVyID0gbmV3IEZyb250ZW5kTW9uc3RlcigpO1xuLy9cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5qc1xuICoqLyIsImltcG9ydCBGcmFtZUFwaSBmcm9tICcuLy4uL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaSc7XG5cbmNsYXNzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIgPSB2aXN1YWxCdWlsZGVyO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXJnZXQgPSAkKHRoaXMudmlzdWFsQnVpbGRlci5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSlbMF0uY29udGVudFdpbmRvdztcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIC8vIGRlYWN0aXZhdGUgY3VycmVudCBzZWxlY3RlZCBlbnZpcm9ubWVudFxuICAgIGlmICh0aGlzLm5hbWUgPT09IHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpIHtcbiAgICAgIHRoaXMudmlzdWFsQnVpbGRlci5lbnZpcm9ubWVudHMuZ2V0KHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpLmRlYWN0aXZhdGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdGFyZ2V0JCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQuJDtcbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy52aXN1YWxCdWlsZGVyLmNsZWFyU3RhY2thYmxlKCk7XG4gIH1cblxuICBzZW5kTWVzc2FnZShmdW5jLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMudGFyZ2V0LCBmdW5jLCBhcmdzKTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2VkKCkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUVudmlyb25tZW50O1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJjbGFzcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG5cbiAgfVxuXG4gIGluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSkge1xuXG4gIH1cblxuICBzdGF0aWMgZ2V0IGZyYW1lJCgpIHtcbiAgICByZXR1cm4gd2luZG93LiQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUVkaXRhYmxlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL0Jhc2VFZGl0YWJsZS5qc1xuICoqLyIsImNsYXNzIEZyYW1lQXBpIHtcbiAgc3RhdGljIGdldCBpc0llKCkge1xuICAgIC8qIGdsb2JhbCBpcyAqL1xuICAgIGlmICh0eXBlb2YoaXMpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGlzLmllKCk7Ly8gfHwgaXMuZWRnZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGljIGJpbmRNZXNzYWdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrSGFuZGxlcihldmVudCkge1xuICAgICAgbGV0IG1lc3NhZ2UgPSBudWxsO1xuICAgICAgaWYgKEZyYW1lQXBpLmlzSWUpIHtcbiAgICAgICAgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXNzYWdlID0gZXZlbnQuZGF0YTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxpc3RlbmVyW21lc3NhZ2UuZnVuY10pIHtcbiAgICAgICAgbGlzdGVuZXJbbWVzc2FnZS5mdW5jXS5hcHBseShsaXN0ZW5lciwgbWVzc2FnZS5hcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSUU4XG4gICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29ubWVzc2FnZScsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgc2VuZE1lc3NhZ2UodGFyZ2V0LCBmdW5jLCBhcmdzKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGZ1bmMsXG4gICAgICBhcmdzXG4gICAgfTtcbiAgICBjb25zdCBtZXNzYWdlID0gRnJhbWVBcGkuaXNJZSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogZGF0YTtcblxuICAgIHRhcmdldC5wb3N0TWVzc2FnZShtZXNzYWdlLCAnKicpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyYW1lQXBpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaS5qc1xuICoqLyIsImltcG9ydCBWaXN1YWxCdWlsZGVyIGZyb20gJy4vY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXInO1xuaW1wb3J0IFZpc3VhbEZyYW1lIGZyb20gJy4vY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUnO1xuaW1wb3J0IEhhc2hBcGkgZnJvbSAnLi9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9IYXNoQXBpJztcblxuY2xhc3MgRnJvbnRlbmRNb25zdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLnZpc3VhbEJ1bGRlciA9IG51bGw7XG4gICAgdGhpcy5oYXNoQXBpID0gbmV3IEhhc2hBcGkoKTtcbiAgICBpZiAod2luZG93LnBhcmVudCAhPT0gd2luZG93ICYmIHdpbmRvdy5wYXJlbnQuRnJvbnRlbmRNb25zdGVyKSB7XG4gICAgICBpZiAod2luZG93LnBhcmVudC5Gcm9udGVuZE1vbnN0ZXIuaGFzQnVpbGRlcikge1xuICAgICAgICB0aGlzLlZpc3VhbEZyYW1lID0gbmV3IFZpc3VhbEZyYW1lKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qIGdsb2JhbCBzbW9vdGhTY3JvbGw6IGZhbHNlKi9cbiAgICBpZiAodHlwZW9mKHNtb290aFNjcm9sbCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzbW9vdGhTY3JvbGwuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIFZpc3VhbEJ1aWxkZXIgY2xhc3MgaW5zdGFuY2VcbiAgICogQHJldHVybnMgVmlzdWFsQnVpbGRlclxuICAgKi9cbiAgZ2V0IGJ1aWxkZXIoKSB7XG4gICAgaWYgKHRoaXMudmlzdWFsQnVsZGVyID09PSBudWxsKSB7XG4gICAgICB0aGlzLnZpc3VhbEJ1bGRlciA9IG5ldyBWaXN1YWxCdWlsZGVyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZpc3VhbEJ1bGRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB0aGlzIEZyb250ZW5kTW9uc3RlciBpbnN0YW5jZSBoYXMgVmlzdWFsIEJ1aWxkZXIgb24gcGFnZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBoYXNCdWlsZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkZXIuJGJ1aWxkZXIubGVuZ3RoID09PSAxO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgRnJvbnRlbmRNb25zdGVyIHNldHRpbmdzLlxuICAgKiBVc2VzIEZyb250ZW5kTW9uc3RlclNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAqL1xuICBwYXJhbXMoKSB7XG4gICAgY29uc3QgdXNlclNldHRpbmdzID0gd2luZG93LkZyb250ZW5kTW9uc3RlclNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge307XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyb250ZW5kTW9uc3RlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvRnJvbnRlbmRNb25zdGVyLmpzXG4gKiovIiwiaW1wb3J0IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQnO1xuaW1wb3J0IE1hdGVyaWFsc0Vudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50JztcbmltcG9ydCBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50JztcbmltcG9ydCBBY3Rpb25FbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudCc7XG5pbXBvcnQgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCc7XG5pbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi8uLi92aXN1YWwtZnJhbWUvRnJhbWVBcGknO1xuLy8gaW1wb3J0IEVkaXRhYmxlIGZyb20gJy4vRWRpdGFibGUnO1xuXG5jbGFzcyBWaXN1YWxCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLnJlc29sdXRpb25Td2l0Y2hlcigpO1xuXG4gICAgdGhpcy5lbnZpcm9ubWVudHMgPSBuZXcgTWFwKFtcbiAgICAgIFsnc2l0ZS1zdHJ1Y3R1cmUnLCBuZXcgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdzaXRlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsncGFnZS1zdHJ1Y3R1cmUnLCBuZXcgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdwYWdlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsnbWF0ZXJpYWxzJywgbmV3IE1hdGVyaWFsc0Vudmlyb25tZW50KHRoaXMsICdtYXRlcmlhbHMnKV0sXG4gICAgICBbJ2N1c3RvbWl6YXRpb24nLCBuZXcgQ3VzdG9taXphdGlvbkVudmlyb25tZW50KHRoaXMsICdjdXN0b21pemF0aW9uJyldLFxuICAgICAgWydhY3Rpb24nLCBuZXcgQWN0aW9uRW52aXJvbm1lbnQodGhpcywgJ2FjdGlvbicpXSxcbiAgICBdKTtcblxuICAgIHRoaXMuZW52aXJvbm1lbnRTZWxlY3RvcigpO1xuXG4gICAgLy8gc2VsZWN0IGZpcnN0IGVudmlyb25tZW50IGJ5IGRlZmF1bHRcbiAgICB0aGlzLnN3aXRjaEVudmlyb25tZW50KCdzaXRlLXN0cnVjdHVyZScpO1xuICAgICQoJy5tb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJylcbiAgICAgIC5maXJzdCgpXG4gICAgICAubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICBGcmFtZUFwaS5iaW5kTWVzc2FnZUxpc3RlbmVyKHRoaXMpO1xuXG4gICAgLy8gdGhpcy5lZGl0YWJsZSA9IG5ldyBFZGl0YWJsZSgpO1xuXG4gICAgdGhpcy5jb250cm9scygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgVmlzdWFsQnVpbGRlciBzZXR0aW5ncy5cbiAgICogVXNlcyBWaXN1YWxCdWlsZGVyU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuVmlzdWFsQnVpbGRlclNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgJ2VsZW1lbnQtc2VsZWN0b3InOiAnLm1vbnN0ZXItdmlzdWFsLWJ1aWxkZXInLFxuICAgICAgJ2ZyYW1lLXNlbGVjdG9yJzogJy5tb25zdGVyLXZpc3VhbC1mcmFtZScsXG4gICAgICBidW5kbGVzOiB7fSxcbiAgICAgICdzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJzogJ21vbnN0ZXItc3RhY2thYmxlLWNvbnRhaW5lcicsXG4gICAgICAnbmV3LWJsb2NrLXVybCc6ICcvbW9uc3Rlci92aXN1YWwtYnVpbGRlci9uZXctYmxvY2snLFxuICAgIH07XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuJGJ1aWxkZXIgPSAkKHRoaXMuc2V0dGluZ3NbJ2VsZW1lbnQtc2VsZWN0b3InXSk7XG4gICAgdGhpcy4kc3RhY2thYmxlID0gJChgLiR7dGhpcy5zZXR0aW5nc1snc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyddfWApO1xuICB9XG5cbiAgcmVzb2x1dGlvblN3aXRjaGVyKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGJlbUVsZW0gPSAncmVzb2x1dGlvbi1zd2l0Y2hlcl9fcmVzb2x1dGlvbi1saW5rJztcblxuICAgIGNvbnN0ICRyZXNvbHV0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRyZXNvbHV0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAkcmVzb2x1dGlvbkxpbmtzLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgICAgJCh0aGF0LnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKS53aWR0aCgkKHRoaXMpLmRhdGEoJ3Jlc29sdXRpb25XaWR0aCcpKTtcbiAgICAgICQodGhpcykubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGVudmlyb25tZW50U2VsZWN0b3IoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgYmVtRWxlbSA9ICdtb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJztcblxuICAgIGNvbnN0ICRzZWN0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRzZWN0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBjb25zdCBlbnZpcm9ubWVudE5hbWUgPSAkKHRoaXMpLmRhdGEoJ2Vudmlyb25tZW50TmFtZScpO1xuICAgICAgaWYgKHRoYXQuY3VycmVudEVudmlyb25tZW50ID09PSBlbnZpcm9ubWVudE5hbWUpIHtcbiAgICAgICAgJHNlY3Rpb25MaW5rcy5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgdGhhdC5lbnZpcm9ubWVudHMuZ2V0KGVudmlyb25tZW50TmFtZSkuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB0aGF0LmN1cnJlbnRFbnZpcm9ubWVudCA9IG51bGw7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgJHNlY3Rpb25MaW5rcy5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgIHRoYXQuc3dpdGNoRW52aXJvbm1lbnQoZW52aXJvbm1lbnROYW1lKTtcbiAgICAgICQodGhpcykubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHN3aXRjaEVudmlyb25tZW50KGVudmlyb25tZW50TmFtZSkge1xuICAgIHRoaXMuZW52aXJvbm1lbnRzLmdldChlbnZpcm9ubWVudE5hbWUpLmFjdGl2YXRlKCk7XG4gICAgdGhpcy5jdXJyZW50RW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudE5hbWU7XG4gIH1cblxuICBjbGVhclN0YWNrYWJsZSgpIHtcbiAgICB0aGlzLiRzdGFja2FibGUuZW1wdHkoKTtcbiAgfVxuXG4gIGNyZWF0ZVN0YWNrYWJsZVBhbmUoKSB7XG4gICAgY29uc3QgcGFuZUNsYXNzID0gYCR7dGhpcy5zZXR0aW5nc1snc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyddfV9fcGFuZWA7XG4gICAgY29uc3QgbW9kaWZpZXIgPSB0aGlzLiRzdGFja2FibGUuZmluZChgLiR7cGFuZUNsYXNzfWApLmxlbmd0aCA9PT0gMFxuICAgICAgPyBgJHtwYW5lQ2xhc3N9X2ZpcnN0YFxuICAgICAgOiAnJztcbiAgICBjb25zdCAkbmV3UGFuZSA9ICQoYDxkaXYgY2xhc3M9XCIke3BhbmVDbGFzc30gJHttb2RpZmllcn1cIj48L2Rpdj5gKTtcbiAgICB0aGlzLiRzdGFja2FibGUuYXBwZW5kKCRuZXdQYW5lKTtcbiAgICByZXR1cm4gJG5ld1BhbmU7XG4gIH1cblxuICBtYXRlcmlhbEJ5TmFtZShuYW1lKSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MubWF0ZXJpYWxzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5tYXRlcmlhbHNbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IGZyYW1lQ29udGVudFdpbmRvdygpIHtcbiAgICByZXR1cm4gJCh0aGlzLnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKVswXS5jb250ZW50V2luZG93O1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIC8vIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMuZnJhbWVDb250ZW50V2luZG93LCAnc2VyaWFsaXplQ29udGVudCcsIFsnbG9nJ10pO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKS5zZXJpYWxpemVQYWdlKCk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAgIC8vIHdlIGhhdmUgcmVzdWx0IHdoaWNoIGlzIGNvbnRlbnQgaW4gZm9ybWF0OlxuICAgIC8vIHJlZ2lvblxuICAgIC8vIC0tLSBtYXRlcmlhbCBpZFxuICAgIC8vIC0tLS0tLS0ga2V5cyA9PiB2YWx1ZXNcbiAgICAvL1xuICAgIC8vIG91ciBQcm92aWRlcnMgc2hvdWxkIGdldCBvbmx5IHRob3NlIGtleXMgdGhhdCB0aGV5IHByb3ZpZGVcbiAgICAvLyBwcm92aWRlZCBrZXlzIGFyZSBzdG9yZWQgaW4gZnJhbWVDb250ZW50V2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEudGVtcGxhdGUucHJvdmlkZWRLZXlzXG4gICAgY29uc3QgcmVzdWx0QnlQcm92aWRlcnMgPSB7fTtcbiAgICBjb25zdCBwcm92aWRlZEtleXMgPSB0aGlzLmZyYW1lQ29udGVudFdpbmRvdy5NT05TVEVSX0VESVRfTU9ERV9EQVRBLnRlbXBsYXRlLnByb3ZpZGVkS2V5cztcblxuICAgIE9iamVjdC5rZXlzKHByb3ZpZGVkS2V5cykuZm9yRWFjaChwcm92aWRlckluZGV4ID0+IHtcbiAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdID0ge307XG5cbiAgICAgIGNvbnN0IHJlZ2lvbnMgPSBwcm92aWRlZEtleXNbcHJvdmlkZXJJbmRleF07XG5cbiAgICAgIE9iamVjdC5rZXlzKHJlZ2lvbnMpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5oYXNPd25Qcm9wZXJ0eShyZWdpb25LZXkpID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1twcm92aWRlckluZGV4XVtyZWdpb25LZXldID0ge307XG5cbiAgICAgICAgLy8gZ28gZGVlcCB0byBtYXRlcmlhbCBpbmRlY2VzXG4gICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IHJlZ2lvbnNbcmVnaW9uS2V5XTtcblxuICAgICAgICBPYmplY3Qua2V5cyhtYXRlcmlhbHMpLmZvckVhY2gobWF0ZXJpYWxJbmRleCA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdFtyZWdpb25LZXldLmhhc093blByb3BlcnR5KG1hdGVyaWFsSW5kZXgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1twcm92aWRlckluZGV4XVtyZWdpb25LZXldW21hdGVyaWFsSW5kZXhdID0ge307XG5cbiAgICAgICAgICBjb25zdCBkYXRhS2V5cyA9IG1hdGVyaWFsc1ttYXRlcmlhbEluZGV4XTtcblxuICAgICAgICAgIGRhdGFLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHRbcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XS5oYXNPd25Qcm9wZXJ0eShrZXkpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1xuICAgICAgICAgICAgICBbcHJvdmlkZXJJbmRleF1cbiAgICAgICAgICAgICAgW3JlZ2lvbktleV1cbiAgICAgICAgICAgICAgW21hdGVyaWFsSW5kZXhdXG4gICAgICAgICAgICAgIFtrZXldID0gcmVzdWx0W3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF1ba2V5XTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHRCeVByb3ZpZGVycyk7XG4gICAgcmV0dXJuIHJlc3VsdEJ5UHJvdmlkZXJzO1xuICB9XG5cbiAgcGFnZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5lbnZpcm9ubWVudHMuZm9yRWFjaChcbiAgICAgIGVudmlyb25tZW50ID0+XG4gICAgICAgIGVudmlyb25tZW50LnBhZ2VDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgbG9nKHJlc3VsdCkge1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gIH1cblxuICBjb250cm9scygpIHtcbiAgICB0aGlzLiRjb250cm9scyA9IHRoaXMuJGJ1aWxkZXIuZmluZCgnLmNvbnRyb2xzJykuZmlyc3QoKTtcbiAgICB0aGlzLiRjb250cm9scy5lbGVtKCdyZWZyZXNoJykuY2xpY2soKCkgPT4ge1xuICAgICAgdGhpcy5mcmFtZUNvbnRlbnRXaW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRjb250cm9scy5lbGVtKCdzYXZlJykuY2xpY2soKCkgPT4ge1xuICAgICAgRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5mcmFtZUNvbnRlbnRXaW5kb3csICdzYXZlJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsQnVpbGRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXIuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgQWN0aW9uRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBBY3Rpb25FbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIE1hdGVyaWFsc0Vudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IodmlzdWFsQnVpbGRlciwgbmFtZSkge1xuICAgIHN1cGVyKHZpc3VhbEJ1aWxkZXIsIG5hbWUpO1xuICAgIHRoaXMuaW5pdE1hdGVyaWFsc1NlbGVjdG9yKCk7XG4gIH1cblxuICBpbml0TWF0ZXJpYWxzU2VsZWN0b3IoKSB7XG4gICAgdGhpcy4kbWF0ZXJpYWxzR3JvdXBzID0gJCgnPHVsIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc1wiPjwvdWw+Jyk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzTGlzdCA9IFtdO1xuXG4gICAgdGhpcy52aXN1YWxCdWlsZGVyLnNldHRpbmdzLmJ1bmRsZXMuZm9yRWFjaChidW5kbGUgPT4ge1xuICAgICAgLyogZ2xvYmFsIHBvbHlnbG90OiBmYWxzZSAqL1xuICAgICAgY29uc3QgaTE4bkJ1bmRsZU5hbWUgPSB0eXBlb2YocG9seWdsb3QpICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHBvbHlnbG90LnQoYnVuZGxlLm5hbWUpXG4gICAgICAgIDogYnVuZGxlLm5hbWU7XG5cbiAgICAgIGNvbnN0ICRidW5kbGVUaXRsZSA9IGBcbiAgICAgIDxsaSBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX2l0ZW0gbWF0ZXJpYWxzLWdyb3Vwc19faXRlbS0tYnVuZGxlLWxhYmVsXCI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtYnVuZGxlXCIgZGF0YS1idW5kbGUtcGF0aD1cIiR7YnVuZGxlLmZ1bGxQYXRofVwiPlxuICAgICAgICAgICAgJHtpMThuQnVuZGxlTmFtZX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICAgIGA7XG4gICAgICB0aGlzLiRtYXRlcmlhbHNMaXN0LnB1c2goJGJ1bmRsZVRpdGxlKTtcblxuICAgICAgYnVuZGxlLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBOYW1lID0gZ3JvdXAubmFtZTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gZ3JvdXAubWF0ZXJpYWxzO1xuICAgICAgICBjb25zdCBpMThuR3JvdXBOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCcgPyBwb2x5Z2xvdC50KGdyb3VwTmFtZSkgOiBncm91cE5hbWU7XG4gICAgICAgIGNvbnN0ICRsaSA9ICQoYFxuICAgIDxsaSBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX2l0ZW1cIj5cbiAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS1ncm91cC1wYXRoPVwiJHtncm91cC5mdWxsUGF0aH1cIiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cFwiPlxuICAgICAgICAke2kxOG5Hcm91cE5hbWV9IDxzcGFuIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fY291bnRcIj4oJHttYXRlcmlhbHMubGVuZ3RofSk8L3NwYW4+XG4gICAgICA8L2E+XG4gICAgPC9saT5gKTtcbiAgICAgICAgdGhpcy4kbWF0ZXJpYWxzR3JvdXBzLmFwcGVuZCgkbGkpO1xuICAgICAgICBjb25zdCAkbGlzdCA9ICQoYDx1bCBjbGFzcz1cIm1hdGVyaWFscy1saXN0XCIgZGF0YS1ncm91cC1wYXRoPVwiJHtncm91cC5mdWxsUGF0aH1cIj48L3VsPmApO1xuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuXG4gICAgICAgIG1hdGVyaWFscy5mb3JFYWNoKG1hdGVyaWFsID0+IHtcbiAgICAgICAgICBjb25zdCBtYXRlcmlhbE5hbWUgPSBtYXRlcmlhbC5uYW1lO1xuICAgICAgICAgIGNvbnN0IGkxOG5NYXRlcmlhbE5hbWUgPSB0eXBlb2YocG9seWdsb3QpICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBwb2x5Z2xvdC50KG1hdGVyaWFsTmFtZSlcbiAgICAgICAgICAgIDogbWF0ZXJpYWxOYW1lO1xuICAgICAgICAgIGNvbnN0ICRpdGVtID0gJChgXG48bGk+XG4gIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtYXRlcmlhbHMtbGlzdF9faXRlbVwiIGRhdGEtbWF0ZXJpYWwtcGF0aD1cIiR7bWF0ZXJpYWwuZnVsbFBhdGh9XCI+XG4gICAgJHtpMThuTWF0ZXJpYWxOYW1lfVxuICA8L2E+XG48L2xpPlxuYCk7XG4gICAgICAgICAgaXRlbXMucHVzaCgkaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkbGlzdC5hcHBlbmQoaXRlbXMpO1xuICAgICAgICB0aGlzLiRtYXRlcmlhbHNMaXN0LnB1c2goJGxpc3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcsIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICR0aGlzLnRvZ2dsZU1vZCgnYWN0aXZlJyk7XG4gICAgICBjb25zdCBncm91cFBhdGggPSAkdGhpcy5kYXRhKCdncm91cFBhdGgnKTtcbiAgICAgIGlmICgkdGhpcy5tb2QoJ2FjdGl2ZScpKSB7XG4gICAgICAgICQoJy5tYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAnKS5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcblxuICAgICAgICAkKCcubWF0ZXJpYWxzLWxpc3QnKS5lYWNoKGZ1bmN0aW9uIGl0KCkge1xuICAgICAgICAgIGNvbnN0ICRsaXN0ID0gJCh0aGlzKTtcbiAgICAgICAgICBpZiAoJGxpc3QubW9kKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgJGxpc3QubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkbGlzdC5kYXRhKCdncm91cFBhdGgnKSA9PT0gZ3JvdXBQYXRoKSB7XG4gICAgICAgICAgICAkbGlzdC5tb2QoJ2FjdGl2ZScsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHRoaXMubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICAgICAgdGhhdC4kbWF0ZXJpYWxzUGFuZS5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGF0J3MganVzdCBzZWNvbmQgY2xpY2sgb24gdGhlIHNhbWUgZ3JvdXBcbiAgICAgICAgdGhhdC4kbWF0ZXJpYWxzUGFuZS5oaWRlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYXRlcmlhbHMtbGlzdF9faXRlbScsIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgIHRoYXQuc2VuZE1lc3NhZ2UoXG4gICAgICAgICduZXdCbG9jaycsXG4gICAgICAgIFtcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoJ21hdGVyaWFsUGF0aCcpLFxuICAgICAgICAgICdjb250ZW50JyxcbiAgICAgICAgXVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHN1cGVyLmFjdGl2YXRlKCk7XG5cbiAgICB0aGlzLiRncm91cHNQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRncm91cHNQYW5lLmFwcGVuZCh0aGlzLiRtYXRlcmlhbHNHcm91cHMpO1xuXG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZS5hcHBlbmQodGhpcy4kbWF0ZXJpYWxzTGlzdCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZS5oaWRlKCk7XG5cbiAgICAkKCcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJykubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFsc0Vudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICBzdXBlcih2aXN1YWxCdWlsZGVyLCBuYW1lKTtcbiAgICB0aGlzLmluaXRQYWdlU3RydWN0dXJlRWxlbWVudCgpO1xuICAgIHRoaXMuZWRpdE1vZGVEYXRhID0ge307XG4gIH1cblxuICBpbml0UGFnZVN0cnVjdHVyZUVsZW1lbnQoKSB7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZSA9ICQoJzxkaXYgY2xhc3M9XCJwYWdlLXN0cnVjdHVyZVwiPjwvZGl2PicpO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgc3VwZXIuYWN0aXZhdGUoKTtcblxuICAgIHRoaXMuJHN0cnVjdHVyZVBhbmUgPSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3JlYXRlU3RhY2thYmxlUGFuZSgpO1xuICAgIHRoaXMuJHN0cnVjdHVyZVBhbmUuYXBwZW5kKHRoaXMuJHBhZ2VTdHJ1Y3R1cmUpO1xuICB9XG5cbiAgcGFnZUNoYW5nZWQoKSB7XG4gICAgc3VwZXIucGFnZUNoYW5nZWQoKTtcbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlLmpzdHJlZSgnZGVzdHJveScpO1xuICAgIGNvbnN0IGxheW91dCA9IHRoaXMudGFyZ2V0Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEubGF5b3V0O1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy50YXJnZXQuTU9OU1RFUl9FRElUX01PREVfREFUQS50ZW1wbGF0ZTtcblxuICAgIGNvbnN0IGxheW91dEl0ZW0gPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiAnbGF5b3V0JyxcbiAgICAgICAgdGVtcGxhdGVJZDogbGF5b3V0LmlkLFxuICAgICAgfSxcbiAgICAgIHRleHQ6IGBMYXlvdXQgLSAke2xheW91dC5rZXl9ICMke2xheW91dC5pZH1gLFxuICAgICAgaWNvbjogJ2ZhIGZhLWNvbHVtbnMnLFxuICAgICAgc3RhdGU6IHtcbiAgICAgICAgb3BlbmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICB9O1xuICAgIGNvbnN0IHRlbXBsYXRlSXRlbSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6ICd0ZW1wbGF0ZScsXG4gICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgfSxcbiAgICAgIHRleHQ6IGBUZW1wbGF0ZSAtICR7dGVtcGxhdGUua2V5fSAjJHt0ZW1wbGF0ZS5pZH1gLFxuICAgICAgaWNvbjogJ2ZhIGZhLXRoJyxcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIG9wZW5lZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgfTtcblxuICAgIGNvbnN0ICRsYXlvdXRSZWdpb25zID0gdGhpcy50YXJnZXQkKCcubS1tb25zdGVyLWNvbnRlbnRfX2xheW91dCcpO1xuICAgICRsYXlvdXRSZWdpb25zLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5wcm9jZXNzTGF5b3V0KCQodGhpcykpO1xuICAgICAgbGF5b3V0SXRlbS5jaGlsZHJlbi5wdXNoKHJlc3VsdC5pdGVtKTtcbiAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnMuZm9yRWFjaChyZWdpb24gPT4ge1xuICAgICAgICB0ZW1wbGF0ZUl0ZW0uY2hpbGRyZW4ucHVzaChyZWdpb24pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmUgPSBbXG4gICAgICBsYXlvdXRJdGVtLFxuICAgICAgdGVtcGxhdGVJdGVtLFxuICAgIF07XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5qc3RyZWUoe1xuICAgICAgY29yZToge1xuICAgICAgICBkYXRhOiB0aGlzLnBhZ2VTdHJ1Y3R1cmUsXG4gICAgICAgIHRoZW1lczoge1xuICAgICAgICAgIG5hbWU6ICdkZWZhdWx0LWRhcmsnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgJ3R5cGVzJyxcbiAgICAgIF0sXG4gICAgICB0eXBlczoge1xuICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtY29sdW1ucycsXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgaWNvbjogJ2ZhIGZhLXRoJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVSZWdpb246IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtZm9sZGVyLW8nLFxuICAgICAgICB9LFxuICAgICAgICBjb250ZW50VGVtcGxhdGVSZWdpb246IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtZm9sZGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWF0ZXJpYWw6IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtcHV6emxlLXBpZWNlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBqc3RyZWVPYmogPSB0aGlzLiRwYWdlU3RydWN0dXJlLmpzdHJlZSgpO1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUub24oJ2xvYWRlZC5qc3RyZWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uID0ganN0cmVlT2JqLmdldF9qc29uKHRoaXMuJHBhZ2VTdHJ1Y3R1cmUsIHtcbiAgICAgICAgbm9fc3RhdGU6IHRydWUsXG4gICAgICAgIG5vX2lkOiB0cnVlLFxuICAgICAgICBub19saV9hdHRyOiB0cnVlLFxuICAgICAgICBub19hX2F0dHI6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHRoaXMudGFyZ2V0LkZyb250ZW5kTW9uc3Rlci5WaXN1YWxGcmFtZS5wYWdlU3RydWN0dXJlSnNvbiA9IHRoaXMucGFnZVN0cnVjdHVyZUpzb247XG4gICAgfSk7XG5cbiAgICB0aGlzLmVkaXRNb2RlRGF0YSA9IHRoaXMudGFyZ2V0Lk1PTlNURVJfRURJVF9NT0RFX0RBVEE7XG4gIH1cblxuICBzdGF0aWMgcHJvY2Vzc0xheW91dCgkbGF5b3V0UmVnaW9uKSB7XG4gICAgY29uc3QgaXRlbSA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5leHRyYWN0UmVnaW9uRGF0YSgkbGF5b3V0UmVnaW9uKTtcbiAgICBpdGVtLnN0YXRlID0ge1xuICAgICAgb3BlbmVkOiB0cnVlLFxuICAgIH07XG4gICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgIGl0ZW0uZGF0YS5pZCA9IGBsYXlvdXQudGVtcGxhdGVSZWdpb24uJHtpdGVtLmRhdGEucmVnaW9uS2V5fWA7XG4gICAgY29uc3QgdGVtcGxhdGVSZWdpb25zID0gW107XG5cbiAgICAvLyBmaW5kIG1hdGVyaWFsc1xuICAgIGNvbnN0ICRsYXlvdXRNYXRlcmlhbHMgPSAkbGF5b3V0UmVnaW9uLmZpbmQoJz5bZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICAkbGF5b3V0TWF0ZXJpYWxzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0ICRsYXlvdXRNYXRlcmlhbCA9ICQodGhpcyk7XG4gICAgICBjb25zdCByZXN1bHQgPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQucHJvY2Vzc0xheW91dE1hdGVyaWFsKCRsYXlvdXRNYXRlcmlhbCwgaXRlbS5pZCk7XG4gICAgICBjb25zdCBsYXlvdXRNYXRlcmlhbEl0ZW0gPSByZXN1bHQubGF5b3V0TWF0ZXJpYWw7XG4gICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcbiAgICAgICAgdGVtcGxhdGVSZWdpb25zLnB1c2gocmVnaW9uKTtcbiAgICAgIH0pO1xuICAgICAgaXRlbS5jaGlsZHJlbi5wdXNoKGxheW91dE1hdGVyaWFsSXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbSxcbiAgICAgIHRlbXBsYXRlUmVnaW9ucyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHByb2Nlc3NMYXlvdXRNYXRlcmlhbCgkbGF5b3V0TWF0ZXJpYWwsIHByZWZpeCkge1xuICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSAkbGF5b3V0TWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxJbmRleCcpO1xuICAgIGNvbnN0IG1hdGVyaWFsUGF0aCA9ICRsYXlvdXRNYXRlcmlhbC5kYXRhKCdtYXRlcmlhbFBhdGgnKTtcbiAgICBjb25zdCBpdGVtID0ge1xuICAgICAgdGV4dDogYCR7XG4gICAgICAgIG1hdGVyaWFsUGF0aCA9PT0gJ2NvcmUuZnJvbnRlbmQtbW9uc3Rlci1jb3JlLmdlbmVyYWwuY29udGVudC1wbGFjZWhvbGRlcidcbiAgICAgICAgICA/ICdNYWluIEVudGl0eSBDb250ZW50J1xuICAgICAgICAgIDogYE1hdGVyaWFsOiAke21hdGVyaWFsSW5kZXh9YH1cbiAgICAgIGAsXG4gICAgICB0eXBlOiAnbWF0ZXJpYWwnLFxuICAgICAgZGF0YToge1xuICAgICAgICBpZDogYCR7cHJlZml4fS4ke21hdGVyaWFsSW5kZXh9YCxcbiAgICAgICAgbWF0ZXJpYWxJbmRleCxcbiAgICAgICAgbWF0ZXJpYWxQYXRoLFxuICAgICAgICBlZGl0YWJsZUtleXM6ICRsYXlvdXRNYXRlcmlhbC5kYXRhKCdlZGl0YWJsZUtleXMnKSxcbiAgICAgICAgbm9kZTogJGxheW91dE1hdGVyaWFsLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IHRlbXBsYXRlUmVnaW9ucyA9IFtdO1xuICAgIGNvbnN0ICRyZWdpb25zID0gJGxheW91dE1hdGVyaWFsLmZpbmQoJz4gLm0tbW9uc3Rlci1jb250ZW50X19jb250ZW50Jyk7XG4gICAgJHJlZ2lvbnMuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LnByb2Nlc3NUZW1wbGF0ZVJlZ2lvbigkKHRoaXMpKTtcbiAgICAgIHRlbXBsYXRlUmVnaW9ucy5wdXNoKHJlc3VsdCk7XG4gICAgfSk7XG4gICAgaWYgKHRlbXBsYXRlUmVnaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBpdGVtLmRhdGEuaXNDb250ZW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGxheW91dE1hdGVyaWFsOiBpdGVtLFxuICAgICAgdGVtcGxhdGVSZWdpb25zLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgcHJvY2Vzc1RlbXBsYXRlUmVnaW9uKCR0ZW1wbGF0ZVJlZ2lvbikge1xuICAgIGNvbnN0IGl0ZW0gPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQuZXh0cmFjdFJlZ2lvbkRhdGEoJHRlbXBsYXRlUmVnaW9uKTtcbiAgICBpdGVtLnN0YXRlID0ge1xuICAgICAgb3BlbmVkOiB0cnVlLFxuICAgIH07XG4gICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgIGl0ZW0uZGF0YS5lbnRpdHlEZXBlbmRlbnQgPSAkdGVtcGxhdGVSZWdpb24uZGF0YSgncmVnaW9uRW50aXR5RGVwZW5kZW50JykgPT09IDE7XG5cbiAgICBjb25zdCBwcmVmaXggPSBpdGVtLmRhdGEuZW50aXR5RGVwZW5kZW50ID8gJ3RlbXBsYXRlJyA6ICdjb250ZW50JztcbiAgICBpdGVtLmRhdGEuaWQgPSBgJHtwcmVmaXh9LnRlbXBsYXRlUmVnaW9uLiR7aXRlbS5kYXRhLnJlZ2lvbktleX1gO1xuXG4gICAgaWYgKGl0ZW0uZGF0YS5lbnRpdHlEZXBlbmRlbnQpIHtcbiAgICAgIGl0ZW0udHlwZSA9ICdjb250ZW50VGVtcGxhdGVSZWdpb24nO1xuICAgIH1cbiAgICBjb25zdCAkcmVnaW9uTWF0ZXJpYWxzID0gJHRlbXBsYXRlUmVnaW9uLmZpbmQoJz5bZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICAkcmVnaW9uTWF0ZXJpYWxzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGl0ZW0uY2hpbGRyZW4ucHVzaChcbiAgICAgICAgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LnByb2Nlc3NUZW1wbGF0ZVJlZ2lvbk1hdGVyaWFsKFxuICAgICAgICAgICQodGhpcyksXG4gICAgICAgICAgaXRlbS5kYXRhLmlkXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBzdGF0aWMgcHJvY2Vzc1RlbXBsYXRlUmVnaW9uTWF0ZXJpYWwoJHJlZ2lvbk1hdGVyaWFsLCBwcmVmaXgpIHtcbiAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gJHJlZ2lvbk1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsSW5kZXgnKTtcbiAgICBjb25zdCBtYXRlcmlhbFBhdGggPSAkcmVnaW9uTWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxQYXRoJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGBNYXRlcmlhbDogJHttYXRlcmlhbEluZGV4fWAsXG4gICAgICB0eXBlOiAnbWF0ZXJpYWwnLFxuICAgICAgZGF0YToge1xuICAgICAgICBpZDogYCR7cHJlZml4fS4ke21hdGVyaWFsSW5kZXh9YCxcbiAgICAgICAgbWF0ZXJpYWxJbmRleCxcbiAgICAgICAgbWF0ZXJpYWxQYXRoLFxuICAgICAgICBlZGl0YWJsZUtleXM6ICRyZWdpb25NYXRlcmlhbC5kYXRhKCdlZGl0YWJsZUtleXMnKSxcbiAgICAgICAgbm9kZTogJHJlZ2lvbk1hdGVyaWFsLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGV4dHJhY3RSZWdpb25EYXRhKCRub2RlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6ICRub2RlLmRhdGEoJ2NvbnRlbnREZXNjcmlwdGlvbicpLFxuICAgICAgdHlwZTogJ3RlbXBsYXRlUmVnaW9uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcmVnaW9uSWQ6ICRub2RlLmRhdGEoJ3JlZ2lvbklkJyksXG4gICAgICAgIHJlZ2lvbktleTogJG5vZGUuZGF0YSgncmVnaW9uS2V5JyksXG4gICAgICAgIHVuaXF1ZUNvbnRlbnRJZDogJG5vZGUuZGF0YSgndW5pcXVlQ29udGVudElkJyksXG4gICAgICAgIG5vZGU6ICRub2RlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc2VyaWFsaXplUGFnZSgpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMucmVnaW9uc1N0cnVjdHVyZVtyZWdpb25LZXldO1xuICAgICAgcmVzdWx0W3JlZ2lvbi5rZXldID0gcmVnaW9uLnNlcmlhbGl6ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBtYXRlcmlhbHNCeVJlZ2lvbnMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5yZWdpb25zU3RydWN0dXJlKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICBjb25zdCByZWdpb24gPSB0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmVbcmVnaW9uS2V5XTtcbiAgICAgIHJlc3VsdFtyZWdpb24ua2V5XSA9IHJlZ2lvbi5tYXRlcmlhbHNEZWNsKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1bmlxaWQgKHByZWZpeCwgbW9yZUVudHJvcHkpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC91bmlxaWQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgcmV2aXNlZCBieTogS2Fua3JlbHVuZSAoaHR0cDovL3d3dy53ZWJmYWt0b3J5LmluZm8vKVxuICAvLyAgICAgIG5vdGUgMTogVXNlcyBhbiBpbnRlcm5hbCBjb3VudGVyIChpbiBsb2N1dHVzIGdsb2JhbCkgdG8gYXZvaWQgY29sbGlzaW9uXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJGlkID0gdW5pcWlkKClcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gMTNcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IHZhciAkaWQgPSB1bmlxaWQoJ2ZvbycpXG4gIC8vICAgZXhhbXBsZSAyOiB2YXIgJHJlc3VsdCA9ICRpZC5sZW5ndGggPT09ICgxMyArICdmb28nLmxlbmd0aClcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcbiAgLy8gICBleGFtcGxlIDM6IHZhciAkaWQgPSB1bmlxaWQoJ2JhcicsIHRydWUpXG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgJHJlc3VsdCA9ICRpZC5sZW5ndGggPT09ICgyMyArICdiYXInLmxlbmd0aClcbiAgLy8gICByZXR1cm5zIDM6IHRydWVcblxuICBpZiAodHlwZW9mIHByZWZpeCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwcmVmaXggPSAnJ1xuICB9XG5cbiAgdmFyIHJldElkXG4gIHZhciBfZm9ybWF0U2VlZCA9IGZ1bmN0aW9uIChzZWVkLCByZXFXaWR0aCkge1xuICAgIHNlZWQgPSBwYXJzZUludChzZWVkLCAxMCkudG9TdHJpbmcoMTYpIC8vIHRvIGhleCBzdHJcbiAgICBpZiAocmVxV2lkdGggPCBzZWVkLmxlbmd0aCkge1xuICAgICAgLy8gc28gbG9uZyB3ZSBzcGxpdFxuICAgICAgcmV0dXJuIHNlZWQuc2xpY2Uoc2VlZC5sZW5ndGggLSByZXFXaWR0aClcbiAgICB9XG4gICAgaWYgKHJlcVdpZHRoID4gc2VlZC5sZW5ndGgpIHtcbiAgICAgIC8vIHNvIHNob3J0IHdlIHBhZFxuICAgICAgcmV0dXJuIEFycmF5KDEgKyAocmVxV2lkdGggLSBzZWVkLmxlbmd0aCkpLmpvaW4oJzAnKSArIHNlZWRcbiAgICB9XG4gICAgcmV0dXJuIHNlZWRcbiAgfVxuXG4gIHZhciAkZ2xvYmFsID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogR0xPQkFMKVxuICAkZ2xvYmFsLiRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cyB8fCB7fVxuICB2YXIgJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzXG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fVxuXG4gIGlmICghJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQpIHtcbiAgICAvLyBpbml0IHNlZWQgd2l0aCBiaWcgcmFuZG9tIGludFxuICAgICRsb2N1dHVzLnBocC51bmlxaWRTZWVkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMHg3NWJjZDE1KVxuICB9XG4gICRsb2N1dHVzLnBocC51bmlxaWRTZWVkKytcblxuICAvLyBzdGFydCB3aXRoIHByZWZpeCwgYWRkIGN1cnJlbnQgbWlsbGlzZWNvbmRzIGhleCBzdHJpbmdcbiAgcmV0SWQgPSBwcmVmaXhcbiAgcmV0SWQgKz0gX2Zvcm1hdFNlZWQocGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwLCAxMCksIDgpXG4gIC8vIGFkZCBzZWVkIGhleCBzdHJpbmdcbiAgcmV0SWQgKz0gX2Zvcm1hdFNlZWQoJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQsIDUpXG4gIGlmIChtb3JlRW50cm9weSkge1xuICAgIC8vIGZvciBtb3JlIGVudHJvcHkgd2UgYWRkIGEgZmxvYXQgbG93ZXIgdG8gMTBcbiAgICByZXRJZCArPSAoTWF0aC5yYW5kb20oKSAqIDEwKS50b0ZpeGVkKDgpLnRvU3RyaW5nKClcbiAgfVxuXG4gIHJldHVybiByZXRJZFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy91bmlxaWQuanNcbiAqKi8iLCJjbGFzcyBEYXRhUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvcihjbGFzc05hbWUsIHByb3ZpZGVkS2V5cykge1xuICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIHRoaXMucHJvdmlkZWRLZXlzID0gcHJvdmlkZWRLZXlzO1xuICAgIHRoaXMuYXNzb2NpYXRpb25zID0ge307XG4gICAgdGhpcy5hc3NvY2lhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7RWRpdGFibGV9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGVkaXRhYmxlKCkge1xuICAgIHJldHVybiB3aW5kb3cuRnJvbnRlbmRNb25zdGVyLlZpc3VhbEZyYW1lLmVkaXRhYmxlO1xuICB9XG5cbiAgYXNzb2NpYXRlKCkge1xuICAgIHRoaXMuYXNzb2NpYXRpb25zID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5wcm92aWRlZEtleXMpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMucHJvdmlkZWRLZXlzW3JlZ2lvbktleV07XG4gICAgICBjb25zdCAkcmVnaW9uID0gJChgW2RhdGEtcmVnaW9uLWtleT1cIiR7cmVnaW9uS2V5fVwiXWApLmZpcnN0KCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgJWNSZWdpb246ICR7cmVnaW9uS2V5fWAsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogYm9sZDsgYmFja2dyb3VuZDogIzMzMycpO1xuICAgICAgLy8gY29uc29sZS5sb2cocmVnaW9uKTtcbiAgICAgIGNvbnN0IG1hdGVyaWFscyA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMocmVnaW9uKS5mb3JFYWNoKG1hdGVyaWFsS2V5ID0+IHtcbiAgICAgICAgY29uc3QgZGF0YUtleXMgPSByZWdpb25bbWF0ZXJpYWxLZXldO1xuICAgICAgICBjb25zdCAkbWF0ZXJpYWwgPSAkcmVnaW9uLmZpbmQoYFtkYXRhLW1hdGVyaWFsLWluZGV4PVwiJHttYXRlcmlhbEtleX1cIl1gKS5maXJzdCgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgJWNNYXRlcmlhbDogJHttYXRlcmlhbEtleX1gLCAnY29sb3I6ICNmZmY7IGZvbnQtd2VpZ2h0OiBib2xkOyBiYWNrZ3JvdW5kOiAjNjlmJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCRtYXRlcmlhbCk7XG4gICAgICAgIGlmICgkbWF0ZXJpYWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG1hdGVyaWFsc1ttYXRlcmlhbEtleV0gPSB7XG4gICAgICAgICAgZGF0YUtleXMsXG4gICAgICAgICAgJG1hdGVyaWFsLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBtYXRlcmlhbEVkaXRhYmxlS2V5cyA9ICRtYXRlcmlhbC5kYXRhKCdlZGl0YWJsZUtleXMnKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplTWF0ZXJpYWxFZGl0KG1hdGVyaWFsRWRpdGFibGVLZXlzLCAkbWF0ZXJpYWwsIGRhdGFLZXlzKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hc3NvY2lhdGlvbnNbcmVnaW9uS2V5XSA9IHtcbiAgICAgICAgJHJlZ2lvbixcbiAgICAgICAgbWF0ZXJpYWxzLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpemVNYXRlcmlhbEVkaXQobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRyb290LCBkYXRhS2V5cywgcHJlZml4ID0gJycpIHtcbiAgICBkYXRhS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBvYmogPSBtYXRlcmlhbEVkaXRhYmxlS2V5c1trZXldIHx8ICdOT19TVUNIX0tFWSc7XG4gICAgICBpZiAob2JqID09PSAnTk9fU1VDSF9LRVknKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvYmogPT09IE9iamVjdChvYmopKSB7XG4gICAgICAgIC8vIGl0J3MgcmVjdXJzaXZlXG4gICAgICAgIC8vIGZpcnN0IC0gZmluZCBhbGwgYmxvY2tzXG4gICAgICAgIGNvbnN0ICRibG9ja3MgPSAkcm9vdC5maW5kKGBbZGF0YS1yZWN1cnNpdmUtaXRlbT1cIiR7a2V5fVwiXWApO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICAkYmxvY2tzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYCVjIFJlY3Vyc2l2ZSBpdGVtICR7a2V5fSAjJHtjb3VudGVyfWAsICdiYWNrZ3JvdW5kOiAjMjIyOyBjb2xvcjogI2JhZGE1NScpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAgIHRoYXQuaW5pdGlhbGl6ZU1hdGVyaWFsRWRpdChvYmosICR0aGlzLCBPYmplY3Qua2V5cyhvYmopLCAnaXRlbS4nKTtcbiAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaXQncyBwbGFpbiBmaWVsZFxuICAgICAgICBjb25zdCAkbm9kZSA9ICRyb290LmZpbmQoYFtkYXRhLWVkaXRhYmxlLWtleT1cIiR7cHJlZml4fSR7a2V5fVwiXWApLmZpcnN0KCk7XG4gICAgICAgIGlmICgkbm9kZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgRGF0YVByb3ZpZGVyLmVkaXRhYmxlLmluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAlYyBQbGFpbiBmaWVsZCBlZGl0YWJsZSAke3ByZWZpeH0ke2tleX1gLCAnYmFja2dyb3VuZDogIzIyMjsgY29sb3I6ICNiYWRhNTUnKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJG5vZGVbMF0ub3V0ZXJIVE1MKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgc2VyaWFsaXplS2V5cygpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmFzc29jaWF0aW9ucykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgY29uc3QgcmVnaW9uID0gdGhpcy5hc3NvY2lhdGlvbnNbcmVnaW9uS2V5XTtcbiAgICAgIGNvbnN0ICRyZWdpb24gPSByZWdpb24uJHJlZ2lvbjtcbiAgICAgIHJlc3VsdFtyZWdpb25LZXldID0ge307XG4gICAgICBPYmplY3Qua2V5cyhyZWdpb24ubWF0ZXJpYWxzKS5mb3JFYWNoKG1hdGVyaWFsS2V5ID0+IHtcbiAgICAgICAgY29uc3QgZGF0YUtleXMgPSByZWdpb24ubWF0ZXJpYWxzW21hdGVyaWFsS2V5XS5kYXRhS2V5cztcbiAgICAgICAgY29uc3QgJG1hdGVyaWFsID0gcmVnaW9uLm1hdGVyaWFsc1ttYXRlcmlhbEtleV0uJG1hdGVyaWFsO1xuICAgICAgICByZXN1bHRbcmVnaW9uS2V5XVttYXRlcmlhbEtleV0gPSB0aGlzLnNlcmlhbGl6ZU1hdGVyaWFsKFxuICAgICAgICAgIHJlZ2lvbktleSxcbiAgICAgICAgICBtYXRlcmlhbEtleSxcbiAgICAgICAgICBkYXRhS2V5cyxcbiAgICAgICAgICAkcmVnaW9uLFxuICAgICAgICAgICRtYXRlcmlhbFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NOYW1lLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuZmlsbENvbmZpZyhkYXRhKTtcbiAgfVxuXG4gIGZpbGxDb25maWcoZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgc2VyaWFsaXplTWF0ZXJpYWwocmVnaW9uS2V5LCBtYXRlcmlhbEtleSwgZGF0YUtleXMsICRyZWdpb24sICRtYXRlcmlhbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFQcm92aWRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRGF0YVByb3ZpZGVyLmpzXG4gKiovIiwiaW1wb3J0IFN0YXRpY0NvbnRlbnQgZnJvbSAnLi9wcm92aWRlcnMvU3RhdGljQ29udGVudCc7XG5cbmNsYXNzIERhdGFQcm92aWRlckZhY3Rvcnkge1xuICBzdGF0aWMgZmFjdG9yeShwcm92aWRlckRlY2wsIHByb3ZpZGVkS2V5cykge1xuICAgIGxldCBwcm92aWRlciA9IG51bGw7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gcHJvdmlkZXJEZWNsLmNsYXNzTmFtZVxuICAgICAgfHwgJ0RvdFBsYW50XFxcXE1vbnN0ZXJcXFxcRGF0YUVudGl0eVxcXFxTdGF0aWNDb250ZW50UHJvdmlkZXInO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICBjYXNlICdEb3RQbGFudFxcXFxNb25zdGVyXFxcXERhdGFFbnRpdHlcXFxcU3RhdGljQ29udGVudFByb3ZpZGVyJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHByb3ZpZGVyID0gbmV3IFN0YXRpY0NvbnRlbnQocHJvdmlkZWRLZXlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3ZpZGVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFQcm92aWRlckZhY3Rvcnk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlckZhY3RvcnkuanNcbiAqKi8iLCJpbXBvcnQgYWxsRWRpdGFibGVzIGZyb20gJy4vZWRpdGFibGVzL2FsbCc7XG5cbmNsYXNzIEVkaXRhYmxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lZGl0YWJsZXNCeVR5cGUgPSB7fTtcbiAgICAvLyBpbml0aWFsaXplIGJhc2UgYnVpbGQtaW4gZWRpdGFibGVzXG4gICAgYWxsRWRpdGFibGVzKCk7XG4gICAgdGhpcy5lZGl0YWJsZXNCeVR5cGUgPSB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVM7XG4gIH1cblxuICBzZXJpYWxpemVFZGl0YWJsZSgkbm9kZSkge1xuICAgIGNvbnN0IGVkaXRhYmxlID0gJG5vZGUuZGF0YSgnZWRpdGFibGVQYXJhbXMnKTtcbiAgICBpZiAodHlwZW9mKGVkaXRhYmxlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHR5cGUgPSBlZGl0YWJsZS5oYXNPd25Qcm9wZXJ0eSgndHlwZScpID8gZWRpdGFibGUudHlwZSA6ICdzdHJpbmcnO1xuICAgIGlmICh0aGlzLmVkaXRhYmxlc0J5VHlwZS5oYXNPd25Qcm9wZXJ0eSh0eXBlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHR5cGUgPSAnc3RyaW5nJztcbiAgICB9XG5cbiAgICBjb25zdCBleHBvcnRWYXJpYWJsZSA9IGVkaXRhYmxlLmhhc093blByb3BlcnR5KCd0YXJnZXQnKSA/IGVkaXRhYmxlLnRhcmdldCA6ICdkYXRhJztcblxuICAgIHJldHVybiB0aGlzLmVkaXRhYmxlc0J5VHlwZVt0eXBlXS5zZXJpYWxpemVOb2RlKCRub2RlLCBleHBvcnRWYXJpYWJsZSk7XG4gIH1cblxuICBpbml0aWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBjb25zdCB0eXBlID0gJG5vZGUuZGF0YSgnZWRpdGFibGUtdHlwZScpIHx8ICd1bmVkaXRhYmxlJztcbiAgICBpZiAodHlwZSA9PT0gJ3VuZWRpdGFibGUnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0YWJsZSA9IHRoaXMuZWRpdGFibGVzQnlUeXBlW3R5cGVdIHx8IHRoaXMuZWRpdGFibGVzQnlUeXBlLnN0cmluZztcbiAgICByZXR1cm4gZWRpdGFibGUuaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0YWJsZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRWRpdGFibGUuanNcbiAqKi8iLCJjbGFzcyBIYXNoQXBpIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5mdW5jdGlvbkNhbGxzID0ge307XG5cbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaGFzaCkge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGRvY3VtZW50LmxvY2F0aW9uLmhhc2gubWF0Y2goLyNoYXNoQXBpOiguKj8pOlxcL2hhc2hBcGkvKTtcbiAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGNvbnN0IGZ1bmN0aW9uQ2FsbHMgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGZ1bmN0aW9uQ2FsbHMpIHtcbiAgICAgICAgICBpZiAoaXRlbS5mdW5jKSB7XG4gICAgICAgICAgICB0aGlzLmZ1bmN0aW9uQ2FsbHNbaXRlbS5mdW5jXSA9IGl0ZW0uYXJncyB8fCB7fTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzaG91bGRDYWxsKGZ1bmMpIHtcbiAgICByZXR1cm4gdGhpcy5mdW5jdGlvbkNhbGxzW2Z1bmNdIHx8IGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhhc2hBcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanNcbiAqKi8iLCJpbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi9GcmFtZUFwaSc7XG5pbXBvcnQgdW5pcXVlSWQgZnJvbSAnLi8uLi91bmlxaWQnO1xuaW1wb3J0IERhdGFQcm92aWRlckZhY3RvcnkgZnJvbSAnLi9EYXRhUHJvdmlkZXJGYWN0b3J5JztcbmltcG9ydCBFZGl0YWJsZSBmcm9tICcuL0VkaXRhYmxlJztcblxuY2xhc3MgVmlzdWFsRnJhbWVcbntcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgRnJhbWVBcGkuYmluZE1lc3NhZ2VMaXN0ZW5lcih0aGlzKTtcbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YSA9IG51bGw7XG4gICAgLyogZ2xvYmFsIHdpbmRvdzpmYWxzZSAqL1xuICAgIHRoaXMucGFyZW50V2luZG93ID0gd2luZG93LnBhcmVudDtcbiAgICAvKiogQHZhciBGcm9udGVuZE1vbnN0ZXIgKi9cbiAgICB0aGlzLnBhcmVudE1vbnN0ZXIgPSB0aGlzLnBhcmVudFdpbmRvdy5Gcm9udGVuZE1vbnN0ZXI7XG4gICAgdGhpcy5wYXJlbnRCdWlsZGVyID0gdGhpcy5wYXJlbnRNb25zdGVyLmJ1aWxkZXI7XG4gICAgdGhpcy5jdXJyZW50TW9uc3RlckNvbnRlbnQgPSBmYWxzZTtcbiAgICB0aGlzLmVkaXRhYmxlID0gbmV3IEVkaXRhYmxlKCk7XG4gICAgdGhpcy5tYWtlSXRNb3ZlKCk7XG4gICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICAkKCgpID0+IHtcbiAgICAgIHRoaXMucGFyZW50QnVpbGRlci5wYWdlQ2hhbmdlZCgpO1xuICAgICAgdGhpcy5pbml0UHJvdmlkZXJzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5Nb25zdGVyRWRpdERhdGEgPSB3aW5kb3cuTU9OU1RFUl9FRElUX01PREVfREFUQTtcbiAgfVxuXG4gIGluaXRQcm92aWRlcnMoKSB7XG4gICAgdGhpcy5wcm92aWRlcnMgPSB7XG4gICAgICBsYXlvdXQ6IHRoaXMuZ2V0UHJvdmlkZXJzKHRoaXMuTW9uc3RlckVkaXREYXRhLmxheW91dCksXG4gICAgICB0ZW1wbGF0ZTogdGhpcy5nZXRQcm92aWRlcnModGhpcy5Nb25zdGVyRWRpdERhdGEudGVtcGxhdGUpLFxuICAgICAgZW50aXR5OiB0aGlzLmdldFByb3ZpZGVycyh0aGlzLk1vbnN0ZXJFZGl0RGF0YS5lbnRpdHkpLFxuICAgIH07XG4gIH1cblxuICBzZXQgcGFnZVN0cnVjdHVyZUpzb24odmFsdWUpIHtcbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHBhZ2VTdHJ1Y3R1cmVKc29uKCkge1xuICAgIHJldHVybiB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YTtcbiAgfVxuXG4gIGdldFByb3ZpZGVycyhhcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhhcnIucHJvdmlkZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBwcm92aWRlckRlY2wgPSBhcnIucHJvdmlkZXJzW2tleV07XG4gICAgICByZXN1bHRba2V5XSA9IERhdGFQcm92aWRlckZhY3RvcnkuZmFjdG9yeShcbiAgICAgICAgcHJvdmlkZXJEZWNsLFxuICAgICAgICBhcnIucHJvdmlkZWRLZXlzW2tleV0gfHwge31cbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldCAkbW9uc3RlckNvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGUpIHtcbiAgICAgIHJldHVybiB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hNb25zdGVyQ29udGVudENhY2hlKCk7XG4gICAgcmV0dXJuIHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGU7XG4gIH1cblxuICByZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpIHtcbiAgICB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlID0ge307XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgJCh0aGlzLnNldHRpbmdzWydtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InXSkuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgaWYgKCF0aGF0LmN1cnJlbnRNb25zdGVyQ29udGVudCkge1xuICAgICAgICB0aGF0LmN1cnJlbnRNb25zdGVyQ29udGVudCA9ICQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyk7XG4gICAgICB9XG4gICAgICB0aGF0LiRtb25zdGVyQ29udGVudENhY2hlWyQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyldID0gJCh0aGlzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUhhbmRsZXJzKCkge1xuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsICYmIHRoaXMuJGhhbmRsZXJzKSB7XG4gICAgICB0aGlzLiRoYW5kbGVycy5jc3MoXG4gICAgICAgICd0b3AnLFxuICAgICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLnBvc2l0aW9uKCkudG9wXG4gICAgICAgICAgKyB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLmhlaWdodCgpXG4gICAgICAgICAgLSB0aGlzLiRoYW5kbGVycy5oZWlnaHQoKVxuICAgICAgKTtcbiAgICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBtYWtlSXRNb3ZlKCkge1xuICAgIHRoaXMuJGhhbmRsZXJzID0gJChgXG48ZGl2IGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc1wiPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fY29uZmlndXJlXCI+XG4gICAgPGkgY2xhc3M9XCJmYSBmYS1jb2dcIj48L2k+XG4gIDwvYT5cbiAgPHNwYW4gY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19ibG9jay1uYW1lXCI+QmxvY2sgbmFtZSBoZXJlPC9zcGFuPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fbW92ZS11cFwiPlxuICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtdXBcIj48L2k+XG4gIDwvYT5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtZG93blwiPlxuICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG93blwiPjwvaT5cbiAgPC9hPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fY2xvbmVcIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLWNsb25lXCI+PC9pPlxuICA8L2E+XG4gIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19yZW1vdmVcIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPlxuICA8L2E+XG48L2Rpdj5gKTtcbiAgICAkKCdib2R5JykuYXBwZW5kKHRoaXMuJGhhbmRsZXJzKTtcbiAgICB0aGlzLiRoYW5kbGVycy5oaWRlKCk7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgJCh0aGlzLnNldHRpbmdzWydtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InXSkub24oe1xuICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24gaG92ZXJJbigpIHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAkdGhpcy5hZGRDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1oaWdobGlnaHRlZCcpO1xuICAgICAgfSxcbiAgICAgIG1vdXNlbGVhdmU6IGZ1bmN0aW9uIGhvdmVyT3V0KCkge1xuICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdtLW1vbnN0ZXItY29udGVudF9fbWF0ZXJpYWwtLWhpZ2hsaWdodGVkJyk7XG4gICAgICB9LFxuICAgICAgY2xpY2s6IGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICB0aGF0LnNlbGVjdE1hdGVyaWFsKCR0aGlzKTtcbiAgICAgIH0sXG4gICAgfSwgJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgIHRoYXQuJGhhbmRsZXJzXG4gICAgICAub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLXVwJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgICAgIGNvbnN0ICRwcmV2ID0gdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5wcmV2KCdbZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICAgICAgICBpZiAoJHByZXYubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLmluc2VydEJlZm9yZSgkcHJldik7XG4gICAgICAgICAgICB0aGF0LnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgICAgICB0aGF0LnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtZG93bicsICgpID0+IHtcbiAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICBjb25zdCAkbmV4dCA9IHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwubmV4dCgnW2RhdGEtaXMtbWF0ZXJpYWxdJyk7XG4gICAgICAgICAgaWYgKCRuZXh0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5pbnNlcnRBZnRlcigkbmV4dCk7XG4gICAgICAgICAgICB0aGF0LnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgICAgICB0aGF0LnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX2Nsb25lJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgICAgIGNvbnN0ICRjbG9uZWRNYXRlcmlhbCA9IHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwuY2xvbmUoKTtcbiAgICAgICAgICBjb25zdCByYW5kb21JbmRleCA9IHVuaXF1ZUlkKCdtYXQnKTtcbiAgICAgICAgICAkY2xvbmVkTWF0ZXJpYWxcbiAgICAgICAgICAgIC5pbnNlcnRBZnRlcih0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKVxuICAgICAgICAgICAgLmRhdGEoXG4gICAgICAgICAgICAgICdtYXRlcmlhbEluZGV4JyxcbiAgICAgICAgICAgICAgcmFuZG9tSW5kZXhcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hdHRyKCdkYXRhLW1hdGVyaWFsLWluZGV4JywgcmFuZG9tSW5kZXgpO1xuICAgICAgICAgIHRoYXQuc2VsZWN0TWF0ZXJpYWwoJGNsb25lZE1hdGVyaWFsKTtcbiAgICAgICAgICB0aGF0LnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLm9uKCdjbGljaycsICcubW9uc3Rlci1ibG9jay1oYW5kbGVyc19fcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgbWF0ZXJpYWw/JykpIHtcbiAgICAgICAgICAgIHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsID0gbnVsbDtcbiAgICAgICAgICAgIHRoYXQuJGhhbmRsZXJzLmhpZGUoKTsgLy8gaXQgZG9lcyBub3Qgd29yay4gd2h5PyBOZWVkIHRvIGZpeCFcbiAgICAgICAgICAgIHRoYXQucGFyZW50QnVpbGRlci5wYWdlQ2hhbmdlZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdE1hdGVyaWFsKCRtYXRlcmlhbCkge1xuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsID09PSAkbWF0ZXJpYWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgfVxuICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwgPSAkbWF0ZXJpYWw7XG4gICAgdGhpcy51cGRhdGVIYW5kbGVycygpO1xuICAgIHRoaXMuJGhhbmRsZXJzLnNob3coKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZUNvbnRlbnQoY2FsbGJhY2spIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBPYmplY3Qua2V5cyh0aGlzLiRtb25zdGVyQ29udGVudCkuZm9yRWFjaCh1bmlxdWVDb250ZW50SWQgPT4ge1xuICAgICAgY29uc3QgJG1vbnN0ZXIgPSB0aGlzLiRtb25zdGVyQ29udGVudFt1bmlxdWVDb250ZW50SWRdO1xuICAgICAgcmVzdWx0WyRtb25zdGVyLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpXSA9IHRoYXQuc2VyaWFsaXplVW5pcXVlQ29udGVudCgkbW9uc3Rlcik7XG4gICAgfSk7XG4gICAgdGhpcy5zZW5kVG9CdWlsZGVyKGNhbGxiYWNrLCBbcmVzdWx0XSk7XG4gIH1cblxuICBzZXJpYWxpemVVbmlxdWVDb250ZW50KCRtb25zdGVyQ29udGVudCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIHJlc3VsdC51bmlxdWVDb250ZW50SWQgPSAkbW9uc3RlckNvbnRlbnQuZGF0YSgndW5pcXVlQ29udGVudElkJyk7XG4gICAgcmVzdWx0Lm1hdGVyaWFscyA9IHt9O1xuICAgICRtb25zdGVyQ29udGVudC5maW5kKCdbZGF0YS1pcy1tYXRlcmlhbD1cXCcxXFwnXScpLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0IG1hdGVyaWFsID0ge307XG4gICAgICBtYXRlcmlhbC5ibG9jayA9ICQodGhpcykuZGF0YSgnbWF0ZXJpYWxCbG9jaycpO1xuICAgICAgcmVzdWx0Lm1hdGVyaWFsc1skKHRoaXMpLmRhdGEoJ21hdGVyaWFsSW5kZXgnKV0gPSBtYXRlcmlhbDtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgVmlzdWFsRnJhbWUgc2V0dGluZ3MuXG4gICAqIFVzZXMgVmlzdWFsRnJhbWVTZXR0aW5ncyB2YXJpYWJsZSBpZiBwcm92aWRlZCBvciBkZWZhdWx0IHZhbHVlcyBpbnN0ZWFkLlxuICAgKi9cbiAgcGFyYW1zKCkge1xuICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5WaXN1YWxGcmFtZVNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgJ21vbnN0ZXItY29udGVudC1zZWxlY3Rvcic6ICcubS1tb25zdGVyLWNvbnRlbnRfX2NvbnRlbnQnLFxuICAgIH07XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICB9XG5cbiAgc2VuZFRvQnVpbGRlcihmdW5jLCBhcmdzKSB7XG4gICAgRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5wYXJlbnRXaW5kb3csIGZ1bmMsIGFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIGZvcm1TdWJtaXQoZGF0YSkge1xuICAgIGNvbnN0ICRmb3JtID0gJCgnPGZvcm0gbWV0aG9kPVwiUE9TVFwiPjwvZm9ybT4nKTtcbiAgICBjb25zdCAkaW5wdXQgPSAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfX2pzb25cIj4nKTtcbiAgICBjb25zdCAkY3NyZiA9ICQoJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCI+Jyk7XG5cbiAgICAkY3NyZlxuICAgICAgLmF0dHIoJ25hbWUnLCAkKCdtZXRhW25hbWU9Y3NyZi1wYXJhbV0nKS5hdHRyKCdjb250ZW50JykpXG4gICAgICAudmFsKCQoJ21ldGFbbmFtZT1jc3JmLXRva2VuXScpLmF0dHIoJ2NvbnRlbnQnKSlcbiAgICAgIC5hcHBlbmRUbygkZm9ybSk7XG5cbiAgICAkaW5wdXRcbiAgICAgIC52YWwoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAuYXBwZW5kVG8oJGZvcm0pO1xuXG4gICAgJGZvcm1bMF0uc3VibWl0KCk7XG4gIH1cblxuICBjb25zdHJ1Y3RUZW1wbGF0ZURhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3ZpZGVyc0VudGl0aWVzOiB0aGlzLnBhcmVudEJ1aWxkZXIuc2VyaWFsaXplKCksXG4gICAgICByZWdpb25zTWF0ZXJpYWxzOiB0aGlzLnBhcmVudEJ1aWxkZXJcbiAgICAgICAgLmVudmlyb25tZW50cy5nZXQoJ3BhZ2Utc3RydWN0dXJlJykubWF0ZXJpYWxzQnlSZWdpb25zKCksXG4gICAgfTtcbiAgfVxuXG4gIG5ld0Jsb2NrKG1hdGVyaWFsTmFtZSwgcmVnaW9uTmFtZSkge1xuICAgIC8vIEB0b2RvIEFkZCBsb2FkZXIgaGVyZSBhcyB3ZSBhcmUgdXNpbmcgZm9ybSBwb3N0ICFcbiAgICBjb25zdCByYW5kb21JbmRleCA9IHVuaXF1ZUlkKCdtYXQnKTtcbiAgICBjb25zdCBuZXdEYXRhID0gdGhpcy5pdGVyYXRlVGVtcGxhdGVUeXBlKHRoaXMucGFnZVN0cnVjdHVyZUpzb24pO1xuICAgIGRlYnVnZ2VyO1xuICAgIGlmIChuZXdEYXRhLmVudGl0eS5yZWdpb25zTWF0ZXJpYWxzLmhhc093blByb3BlcnR5KHJlZ2lvbk5hbWUpID09PSBmYWxzZSkge1xuICAgICAgbmV3RGF0YS5lbnRpdHkucmVnaW9uc01hdGVyaWFsc1tyZWdpb25OYW1lXSA9IHt9O1xuICAgIH1cbiAgICAvLyB3ZSBhcmUgbW9kaWZ5aW5nIHRlbXBsYXRlIGRhdGEgYnkgYWRkaW5nIG5ldyBtYXRlcmlhbCBpbnRvIG5lZWRlZCByZWdpb25cbiAgICBuZXdEYXRhLmVudGl0eS5yZWdpb25zTWF0ZXJpYWxzW3JlZ2lvbk5hbWVdLmRlY2xbcmFuZG9tSW5kZXhdID0ge1xuICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsTmFtZSxcbiAgICB9O1xuICAgIG5ld0RhdGEuZW50aXR5LnJlZ2lvbnNNYXRlcmlhbHNbcmVnaW9uTmFtZV0ubWF0ZXJpYWxzT3JkZXIucHVzaChyYW5kb21JbmRleCk7XG4gICAgVmlzdWFsRnJhbWUuZm9ybVN1Ym1pdChuZXdEYXRhKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuaXRlcmF0ZVRlbXBsYXRlVHlwZSh0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uKTtcbiAgICBkYXRhLmFjdGlvbiA9ICdzYXZlJztcbiAgICBkZWJ1Z2dlcjtcbiAgICBWaXN1YWxGcmFtZS5mb3JtU3VibWl0KGRhdGEpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGl0ZXJhdGVUZW1wbGF0ZVR5cGUoYXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgZW50aXR5OiB7XG4gICAgICAgIG1hdGVyaWFsc0J5UmVnaW9uRGVjbDoge30sXG4gICAgICAgIHByb3ZpZGVyczoge30sXG4gICAgICB9LFxuICAgIH07XG4gICAgYXJyLmZvckVhY2gob2JqID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IG9iai5kYXRhLmlkO1xuICAgICAgY29uc3QgcmVnaW9uc1Jlc3VsdCA9IFZpc3VhbEZyYW1lLml0ZXJhdGVUZW1wbGF0ZVJlZ2lvbnMob2JqLmNoaWxkcmVuKTtcbiAgICAgIC8vIGxheW91dCBvciB0ZW1wbGF0ZVxuICAgICAgcmVzdWx0W2tleV0gPSB7XG4gICAgICAgIHRlbXBsYXRlUmVnaW9uczogcmVnaW9uc1Jlc3VsdC50ZW1wbGF0ZVJlZ2lvbnMsXG4gICAgICAgIHRlbXBsYXRlSWQ6IG9iai5kYXRhLnRlbXBsYXRlSWQsXG4gICAgICAgIHByb3ZpZGVyczoge30sXG4gICAgICB9O1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHJlZ2lvbnNSZXN1bHQuZW50aXR5TWF0ZXJpYWxzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHJlZ2lvbnNSZXN1bHQuZW50aXR5TWF0ZXJpYWxzKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICAgICAgcmVzdWx0LmVudGl0eS5tYXRlcmlhbHNCeVJlZ2lvbkRlY2xbcmVnaW9uS2V5XSA9IHJlZ2lvbnNSZXN1bHQuZW50aXR5TWF0ZXJpYWxzW3JlZ2lvbktleV07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0W2tleV0ucHJvdmlkZXJzID0gdGhpcy5zZXJpYWxpemVQcm92aWRlcnMoa2V5KTtcbiAgICB9KTtcbiAgICByZXN1bHQuZW50aXR5LnByb3ZpZGVycyA9IHRoaXMuc2VyaWFsaXplUHJvdmlkZXJzKCdlbnRpdHknKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2VyaWFsaXplUHJvdmlkZXJzKHR5cGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnByb3ZpZGVyc1t0eXBlXSkuZm9yRWFjaChwcm92aWRlcktleSA9PiB7XG4gICAgICByZXN1bHRbcHJvdmlkZXJLZXldID0gdGhpcy5wcm92aWRlcnNbdHlwZV1bcHJvdmlkZXJLZXldLnNlcmlhbGl6ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgaXRlcmF0ZVRlbXBsYXRlUmVnaW9ucyhhcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnM6IHt9LFxuICAgICAgdGVtcGxhdGVSZWdpb25zT3JkZXI6IFtdLFxuICAgICAgZW50aXR5TWF0ZXJpYWxzOiB7fSxcbiAgICB9O1xuICAgIGFyci5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAvLyBjb25zdCBrZXkgPSBvYmouZGF0YS5pZC5yZXBsYWNlKC9eLipcXC4vLCAnJyk7XG4gICAgICBjb25zdCByZWdpb25LZXkgPSBvYmouZGF0YS5yZWdpb25LZXk7XG4gICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zT3JkZXIucHVzaChyZWdpb25LZXkpO1xuICAgICAgY29uc3QgZW50aXR5RGVwZW5kZW50ID0gb2JqLmRhdGEuZW50aXR5RGVwZW5kZW50IHx8IGZhbHNlO1xuXG4gICAgICBjb25zdCByZWdpb25NYXRlcmlhbHMgPSBWaXN1YWxGcmFtZS5pdGVyYXRlTWF0ZXJpYWxzKG9iai5jaGlsZHJlbiwgcmVnaW9uS2V5KTtcblxuICAgICAgaWYgKGVudGl0eURlcGVuZGVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBhbiBleGFjdCB0ZW1wbGF0ZSByZWdpb25cbiAgICAgICAgcmVzdWx0LnRlbXBsYXRlUmVnaW9uc1tyZWdpb25LZXldID0ge1xuICAgICAgICAgIHJlZ2lvbklkOiBvYmouZGF0YS5yZWdpb25JZCxcbiAgICAgICAgICByZWdpb25LZXksXG4gICAgICAgICAgdW5pcXVlQ29udGVudElkOiBvYmouZGF0YS51bmlxdWVDb250ZW50SWQsXG4gICAgICAgICAgbWF0ZXJpYWxzRGVjbHM6IHJlZ2lvbk1hdGVyaWFscyxcbiAgICAgICAgICBlbnRpdHlEZXBlbmRlbnQsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zW3JlZ2lvbktleV0gPSB7XG4gICAgICAgICAgcmVnaW9uSWQ6IG9iai5kYXRhLnJlZ2lvbklkLFxuICAgICAgICAgIHJlZ2lvbktleSxcbiAgICAgICAgICB1bmlxdWVDb250ZW50SWQ6IG9iai5kYXRhLnVuaXF1ZUNvbnRlbnRJZCxcbiAgICAgICAgICBlbnRpdHlEZXBlbmRlbnQsXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRoaXMgaXMgZW50aXR5LWRlcGVuZGVudCByZWdpb25cbiAgICAgICAgcmVzdWx0LmVudGl0eU1hdGVyaWFsc1tyZWdpb25LZXldID0gcmVnaW9uTWF0ZXJpYWxzO1xuICAgICAgfVxuXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBpdGVyYXRlTWF0ZXJpYWxzKGFyciwgcmVnaW9uS2V5KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgZGVjbDoge30sXG4gICAgICBtYXRlcmlhbHNPcmRlcjogW10sXG4gICAgfTtcbiAgICBhcnIuZm9yRWFjaChvYmogPT4ge1xuICAgICAgY29uc3Qga2V5ID0gb2JqLmRhdGEubWF0ZXJpYWxJbmRleDtcbiAgICAgIHJlc3VsdC5kZWNsW2tleV0gPSB7XG4gICAgICAgIC8vIGVkaXRhYmxlc0tleXM6IG9iai5kYXRhLmVkaXRhYmxlS2V5cyxcbiAgICAgICAgbWF0ZXJpYWw6IG9iai5kYXRhLm1hdGVyaWFsUGF0aCxcbiAgICAgIH07XG4gICAgICByZXN1bHQubWF0ZXJpYWxzT3JkZXIucHVzaChrZXkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsRnJhbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL1Zpc3VhbEZyYW1lLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFZGl0YWJsZSBmcm9tICcuL0Jhc2VFZGl0YWJsZSc7XG5cbmNsYXNzIFdZU0lXWUcgZXh0ZW5kcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IEJhc2VFZGl0YWJsZS5mcmFtZSQoJG5vZGUpO1xuICAgIGNvbnN0IGVkaXRvciA9IG5vZGUuZGF0YSgnZWRpdG9yJyk7XG4gICAgaWYgKGVkaXRvcikge1xuICAgICAgcmV0dXJuIGVkaXRvci5nZXREYXRhKCk7XG4gICAgfVxuICAgIHJldHVybiBub2RlLmh0bWwoKTtcbiAgfVxuXG4gIGluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSAkbm9kZVswXTtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBhdXRvUGFyYWdyYXBoOiBmYWxzZSxcbiAgICAgIGVuYWJsZUNvbnRlbnRFZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlnbm9yZUVtcHR5UGFyYWdyYXBoOiB0cnVlLFxuICAgICAgZW50ZXJNb2RlOiB3aW5kb3cuQ0tFRElUT1IuRU5URVJfQlIsXG4gICAgfTtcbiAgICAvLyAkKCgpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHdpbmRvdy5BbGxveUVkaXRvci5lZGl0YWJsZShub2RlLCBjb25maWcpLmdldCgnbmF0aXZlRWRpdG9yJyk7XG4gICAgICAkbm9kZS5kYXRhKCdlZGl0b3InLCBlZGl0b3IpO1xuICAgIC8vIH0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgV1lTSVdZRztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL1dZU0lXWUcuanNcbiAqKi8iLCJpbXBvcnQgV1lTSVdZRyBmcm9tICcuL1dZU0lXWUcnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9saW5rJztcbmltcG9ydCBUZXh0U3RyaW5nIGZyb20gJy4vc3RyaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWxsKCkge1xuICBpZiAodHlwZW9mKHdpbmRvdy5NT05TVEVSX0VESVRBQkxFUykgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTID0ge307XG4gIH1cbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWyd3eXNpd3lnJ10gPSBuZXcgV1lTSVdZRygpO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ2xpbmsnXSA9IG5ldyBMaW5rKCk7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snaW1hZ2UnXSA9IG5ldyBJbWFnZSgpO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ3N0cmluZyddID0gbmV3IFRleHRTdHJpbmcoKTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9hbGwuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgSW1hZ2UgZXh0ZW5kcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG4gICAgY29uc3QgJGltZyA9ICRub2RlLmZpbmQoJ2ltZycpLmZpcnN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNyYzogJGltZy5hdHRyKCdzcmMnKSxcbiAgICAgIGFsdDogJGltZy5hdHRyKCdhbHQnKSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvaW1hZ2UuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgTGluayBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogJG5vZGUuZGF0YSgnb3JpZ2luYWxIcmVmJykgPyAkbm9kZS5kYXRhKCdvcmlnaW5hbEhyZWYnKSA6ICRub2RlLmF0dHIoJ2hyZWYnKSxcbiAgICAgIGFuY2hvcjogJG5vZGUuaHRtbCgpLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGluaztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2xpbmsuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgVGV4dFN0cmluZyBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gQmFzZUVkaXRhYmxlLmZyYW1lJCgkbm9kZSk7XG4gICAgY29uc3QgZWRpdG9yID0gbm9kZS5kYXRhKCdlZGl0b3InKTtcbiAgICBpZiAoZWRpdG9yKSB7XG4gICAgICByZXR1cm4gZWRpdG9yLmdldERhdGEoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUuaHRtbCgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9ICRub2RlWzBdO1xuICAgIC8qIGdsb2JhbCB3aW5kb3c6ZmFsc2UgKi9cblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGFsbG93ZWRDb250ZW50OiAnaSB1JyxcbiAgICAgIHRvb2xiYXJzOiB7XG4gICAgICAgIHN0eWxlczoge1xuICAgICAgICAgIHNlbGVjdGlvbnM6IHdpbmRvdy5BbGxveUVkaXRvci5TZWxlY3Rpb25zLFxuICAgICAgICAgIHRhYkluZGV4OiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGF1dG9QYXJhZ3JhcGg6IGZhbHNlLFxuICAgICAgZW5hYmxlQ29udGVudEVkaXRhYmxlOiB0cnVlLFxuICAgICAgaWdub3JlRW1wdHlQYXJhZ3JhcGg6IHRydWUsXG4gICAgICBibG9ja2xlc3M6IHRydWUsXG4gICAgICBlbnRlck1vZGU6IHdpbmRvdy5DS0VESVRPUi5FTlRFUl9CUixcbiAgICB9O1xuICAgIC8vICQoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB3aW5kb3cuQWxsb3lFZGl0b3IuZWRpdGFibGUobm9kZSwgY29uZmlnKS5nZXQoJ25hdGl2ZUVkaXRvcicpO1xuICAgICAgZWRpdG9yLm9uKCdrZXknLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5kYXRhLmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmRhdGEua2V5Q29kZSA9PT0gd2luZG93LkNLRURJVE9SLlNISUZUICsgMTMpIHtcbiAgICAgICAgICAvLyBhZGQgc2F2aW5nIGZ1bmN0aW9uIGhlcmVcbiAgICAgICAgICBldmVudC5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBlZGl0b3Iub24oJ3Bhc3RlJywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5kYXRhLmRhdGFWYWx1ZSA9IGV2ZW50LmRhdGEuZGF0YVZhbHVlLnJlcGxhY2UoLzxicltcXHNcXC9dKj4vZ21pLCAnICcpO1xuICAgICAgfSk7XG4gICAgICAkbm9kZS5kYXRhKCdlZGl0b3InLCBlZGl0b3IpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCRub2RlLCBub2RlKTtcbiAgICAgIC8vIHRocm93IGU7XG4gICAgfVxuICAgIC8vIH0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dFN0cmluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL3N0cmluZy5qc1xuICoqLyIsImltcG9ydCBEYXRhUHJvdmlkZXIgZnJvbSAnLi4vRGF0YVByb3ZpZGVyJztcblxuY2xhc3MgU3RhdGljQ29udGVudCBleHRlbmRzIERhdGFQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKHByb3ZpZGVkS2V5cykge1xuICAgIHN1cGVyKCdEb3RQbGFudFxcXFxNb25zdGVyXFxcXERhdGFFbnRpdHlcXFxcU3RhdGljQ29udGVudFByb3ZpZGVyJywgcHJvdmlkZWRLZXlzKTtcbiAgfVxuXG4gIGZpbGxDb25maWcoZGF0YSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhO1xuICAgIG5ld0RhdGEuZW50aXRpZXMgPSB0aGlzLnNlcmlhbGl6ZUtleXMoKTtcbiAgICByZXR1cm4gbmV3RGF0YTtcbiAgfVxuXG4gIHNlcmlhbGl6ZU1hdGVyaWFsKHJlZ2lvbktleSwgbWF0ZXJpYWxLZXksIGRhdGFLZXlzLCAkcmVnaW9uLCAkbWF0ZXJpYWwpIHtcbiAgICBjb25zdCBtYXRlcmlhbEVkaXRhYmxlS2V5cyA9ICRtYXRlcmlhbC5kYXRhKCdlZGl0YWJsZUtleXMnKTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnJlY3Vyc2l2ZVNlcmlhbGl6ZShtYXRlcmlhbEVkaXRhYmxlS2V5cywgJG1hdGVyaWFsLCBkYXRhS2V5cyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJlY3Vyc2l2ZVNlcmlhbGl6ZShtYXRlcmlhbEVkaXRhYmxlS2V5cywgJHJvb3QsIGRhdGFLZXlzLCBwcmVmaXggPSAnJykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gICAgZGF0YUtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3Qgb2JqID0gbWF0ZXJpYWxFZGl0YWJsZUtleXNba2V5XSB8fCAnTk9fU1VDSF9LRVknO1xuICAgICAgaWYgKG9iaiA9PT0gJ05PX1NVQ0hfS0VZJykge1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9iaiA9PT0gT2JqZWN0KG9iaikpIHtcbiAgICAgICAgLy8gaXQncyByZWN1cnNpdmVcbiAgICAgICAgLy8gZmlyc3QgLSBmaW5kIGFsbCBibG9ja3NcbiAgICAgICAgY29uc3QgJGJsb2NrcyA9ICRyb290LmZpbmQoYFtkYXRhLXJlY3Vyc2l2ZS1pdGVtPVwiJHtrZXl9XCJdYCk7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIHJlc3VsdFtrZXldID0gW107XG4gICAgICAgICRibG9ja3MuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICByZXN1bHRba2V5XS5wdXNoKHRoYXQucmVjdXJzaXZlU2VyaWFsaXplKG9iaiwgJHRoaXMsIE9iamVjdC5rZXlzKG9iaiksICdpdGVtLicpKTtcbiAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaXQncyBwbGFpbiBmaWVsZFxuICAgICAgICBjb25zdCAkbm9kZSA9ICRyb290LmZpbmQoYFtkYXRhLWVkaXRhYmxlLWtleT1cIiR7cHJlZml4fSR7a2V5fVwiXWApLmZpcnN0KCk7XG4gICAgICAgIGlmICgkbm9kZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFNraXBwZWQgW2RhdGEtZWRpdGFibGUta2V5PVwiJHtwcmVmaXh9JHtrZXl9XCJdIGFzIG5vdCBmb3VuZGApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRba2V5XSA9IERhdGFQcm92aWRlci5lZGl0YWJsZS5zZXJpYWxpemVFZGl0YWJsZSgkbm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0aWNDb250ZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9wcm92aWRlcnMvU3RhdGljQ29udGVudC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==