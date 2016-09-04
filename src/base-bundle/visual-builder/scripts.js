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
	      item.id = 'psj_' + item.data.id;
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
	        id: 'psj_' + prefix + '.' + materialIndex
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
	      item.id = 'psj_' + item.data.id;
	
	      if (item.data.entityDependent) {
	        item.type = 'contentTemplateRegion';
	      }
	      var $regionMaterials = $templateRegion.find('>[data-is-material]');
	      $regionMaterials.each(function iter() {
	        var material = PageStructureEnvironment.processTemplateRegionMaterial($(this), item.data.id, prefix);
	        material.data.regionKey = item.data.regionKey;
	        material.id = 'psj_' + material.data.id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDc3NGQ4YjliZTdmZWE3ZWRhYTkiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL0Jhc2VFZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9Gcm9udGVuZE1vbnN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXJGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0VkaXRhYmxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL1dZU0lXWUcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2FsbC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9wcm92aWRlcnMvU3RhdGljQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9idW5kbGUuY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkZyb250ZW5kTW9uc3RlciIsIkJhc2VFbnZpcm9ubWVudCIsInZpc3VhbEJ1aWxkZXIiLCJuYW1lIiwidGFyZ2V0IiwiJCIsInNldHRpbmdzIiwiY29udGVudFdpbmRvdyIsImN1cnJlbnRFbnZpcm9ubWVudCIsImVudmlyb25tZW50cyIsImdldCIsImRlYWN0aXZhdGUiLCJjbGVhclN0YWNrYWJsZSIsImZ1bmMiLCJhcmdzIiwic2VuZE1lc3NhZ2UiLCJCYXNlRWRpdGFibGUiLCIkbm9kZSIsIkZyYW1lQXBpIiwibGlzdGVuZXIiLCJjYWxsYmFjayIsImNhbGxiYWNrSGFuZGxlciIsImV2ZW50IiwibWVzc2FnZSIsImlzSWUiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiYXBwbHkiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJzdHJpbmdpZnkiLCJwb3N0TWVzc2FnZSIsImlzIiwiaWUiLCJwYXJhbXMiLCJ2aXN1YWxCdWxkZXIiLCJoYXNoQXBpIiwicGFyZW50IiwiaGFzQnVpbGRlciIsIlZpc3VhbEZyYW1lIiwic21vb3RoU2Nyb2xsIiwiaW5pdCIsInVzZXJTZXR0aW5ncyIsIkZyb250ZW5kTW9uc3RlclNldHRpbmdzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJidWlsZGVyIiwiJGJ1aWxkZXIiLCJsZW5ndGgiLCJWaXN1YWxCdWlsZGVyIiwicmVzb2x1dGlvblN3aXRjaGVyIiwiTWFwIiwiZW52aXJvbm1lbnRTZWxlY3RvciIsInN3aXRjaEVudmlyb25tZW50IiwiZmlyc3QiLCJtb2QiLCJiaW5kTWVzc2FnZUxpc3RlbmVyIiwiY29udHJvbHMiLCJWaXN1YWxCdWlsZGVyU2V0dGluZ3MiLCJidW5kbGVzIiwiJHN0YWNrYWJsZSIsInRoYXQiLCJiZW1FbGVtIiwiJHJlc29sdXRpb25MaW5rcyIsImNsaWNrIiwid2lkdGgiLCIkc2VjdGlvbkxpbmtzIiwiZW52aXJvbm1lbnROYW1lIiwiYWN0aXZhdGUiLCJlbXB0eSIsInBhbmVDbGFzcyIsIm1vZGlmaWVyIiwiZmluZCIsIiRuZXdQYW5lIiwiYXBwZW5kIiwibWF0ZXJpYWxzIiwiaGFzT3duUHJvcGVydHkiLCJyZXN1bHQiLCJzZXJpYWxpemVQYWdlIiwiY29uc29sZSIsImxvZyIsInJlc3VsdEJ5UHJvdmlkZXJzIiwicHJvdmlkZWRLZXlzIiwiZnJhbWVDb250ZW50V2luZG93IiwiTU9OU1RFUl9FRElUX01PREVfREFUQSIsInRlbXBsYXRlIiwicHJvdmlkZXJJbmRleCIsInJlZ2lvbnMiLCJyZWdpb25LZXkiLCJtYXRlcmlhbEluZGV4IiwiZGF0YUtleXMiLCJlbnZpcm9ubWVudCIsInBhZ2VDaGFuZ2VkIiwiJGNvbnRyb2xzIiwiZWxlbSIsImxvY2F0aW9uIiwicmVsb2FkIiwiQWN0aW9uRW52aXJvbm1lbnQiLCJDdXN0b21pemF0aW9uRW52aXJvbm1lbnQiLCJNYXRlcmlhbHNFbnZpcm9ubWVudCIsImluaXRNYXRlcmlhbHNTZWxlY3RvciIsIiRtYXRlcmlhbHNHcm91cHMiLCIkbWF0ZXJpYWxzTGlzdCIsImkxOG5CdW5kbGVOYW1lIiwicG9seWdsb3QiLCJ0IiwiYnVuZGxlIiwiJGJ1bmRsZVRpdGxlIiwiZnVsbFBhdGgiLCJwdXNoIiwiZ3JvdXBzIiwiZ3JvdXBOYW1lIiwiZ3JvdXAiLCJpMThuR3JvdXBOYW1lIiwiJGxpIiwiJGxpc3QiLCJpdGVtcyIsIm1hdGVyaWFsTmFtZSIsIm1hdGVyaWFsIiwiaTE4bk1hdGVyaWFsTmFtZSIsIiRpdGVtIiwiZG9jdW1lbnQiLCJvbiIsImNsaWNrSGFuZGxlciIsIiR0aGlzIiwidG9nZ2xlTW9kIiwiZ3JvdXBQYXRoIiwiZWFjaCIsIml0IiwiJG1hdGVyaWFsc1BhbmUiLCJzaG93IiwiaGlkZSIsIlBhZ2VTdHJ1Y3R1cmVFbnYiLCJzZWxlY3RlZFJlZ2lvbktleSIsInNlbGVjdGVkRW50aXR5IiwiJGdyb3Vwc1BhbmUiLCJjcmVhdGVTdGFja2FibGVQYW5lIiwiUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IiwiaW5pdFBhZ2VTdHJ1Y3R1cmVFbGVtZW50IiwiZWRpdE1vZGVEYXRhIiwiJGhlYWRlciIsIiRwYWdlU3RydWN0dXJlIiwiJHN0cnVjdHVyZVBhbmUiLCJkZXRhY2giLCJqc3RyZWUiLCJsYXlvdXQiLCJsYXlvdXRJdGVtIiwiaWQiLCJ0ZW1wbGF0ZUlkIiwidGV4dCIsImljb24iLCJzdGF0ZSIsIm9wZW5lZCIsImNoaWxkcmVuIiwidGVtcGxhdGVJdGVtIiwiJGxheW91dFJlZ2lvbnMiLCJ0YXJnZXQkIiwiaXRlciIsInByb2Nlc3NMYXlvdXQiLCJpdGVtIiwidGVtcGxhdGVSZWdpb25zIiwicmVnaW9uIiwicGFnZVN0cnVjdHVyZSIsImNvcmUiLCJ0aGVtZXMiLCJwbHVnaW5zIiwidHlwZXMiLCJ0ZW1wbGF0ZVJlZ2lvbiIsImNvbnRlbnRUZW1wbGF0ZVJlZ2lvbiIsImpzdHJlZU9iaiIsInBhZ2VTdHJ1Y3R1cmVKc29uIiwiZ2V0X2pzb24iLCJub19zdGF0ZSIsIm5vX2lkIiwibm9fbGlfYXR0ciIsIm5vX2FfYXR0ciIsImlzQ29udGVudFJlZ2lvbkZvdW5kIiwiZW50aXR5RGVwZW5kZW50Iiwic2VsZWN0X25vZGUiLCJjb250cm9sQnV0dG9ucyIsImUiLCJvYmoiLCIkYW5jaG9yIiwibm9kZSIsInByZXBlbmQiLCJ0eXBlIiwiZW50aXR5VHlwZSIsInNjcm9sbFRhcmdldCIsIm1hdGVyaWFsUGF0aCIsInJlZ2lvbnNTdHJ1Y3R1cmUiLCJzZXJpYWxpemUiLCJtYXRlcmlhbHNEZWNsIiwiJGxheW91dFJlZ2lvbiIsImV4dHJhY3RSZWdpb25EYXRhIiwiJGxheW91dE1hdGVyaWFscyIsIiRsYXlvdXRNYXRlcmlhbCIsInByb2Nlc3NMYXlvdXRNYXRlcmlhbCIsImxheW91dE1hdGVyaWFsSXRlbSIsImxheW91dE1hdGVyaWFsIiwicHJlZml4IiwiZWRpdGFibGVLZXlzIiwiJHJlZ2lvbnMiLCJwcm9jZXNzVGVtcGxhdGVSZWdpb24iLCJpc0NvbnRlbnQiLCIkdGVtcGxhdGVSZWdpb24iLCIkcmVnaW9uTWF0ZXJpYWxzIiwicHJvY2Vzc1RlbXBsYXRlUmVnaW9uTWF0ZXJpYWwiLCIkcmVnaW9uTWF0ZXJpYWwiLCJyZWdpb25JZCIsInVuaXF1ZUNvbnRlbnRJZCIsIlNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmlxaWQiLCJtb3JlRW50cm9weSIsInJldElkIiwiX2Zvcm1hdFNlZWQiLCJzZWVkIiwicmVxV2lkdGgiLCJwYXJzZUludCIsInRvU3RyaW5nIiwic2xpY2UiLCJBcnJheSIsImpvaW4iLCIkZ2xvYmFsIiwiR0xPQkFMIiwiJGxvY3V0dXMiLCJwaHAiLCJ1bmlxaWRTZWVkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiRGF0ZSIsImdldFRpbWUiLCJ0b0ZpeGVkIiwiRGF0YVByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiYXNzb2NpYXRpb25zIiwiYXNzb2NpYXRlIiwiJHJlZ2lvbiIsIm1hdGVyaWFsS2V5IiwiJG1hdGVyaWFsIiwibWF0ZXJpYWxFZGl0YWJsZUtleXMiLCJpbml0aWFsaXplTWF0ZXJpYWxFZGl0IiwiJHJvb3QiLCIkYmxvY2tzIiwiY291bnRlciIsImVkaXRhYmxlIiwiaW5pdGlhbGl6ZUVkaXRhYmxlIiwic2VyaWFsaXplTWF0ZXJpYWwiLCJjbGFzcyIsImZpbGxDb25maWciLCJEYXRhUHJvdmlkZXJGYWN0b3J5IiwicHJvdmlkZXJEZWNsIiwicHJvdmlkZXIiLCJFZGl0YWJsZSIsImVkaXRhYmxlc0J5VHlwZSIsIk1PTlNURVJfRURJVEFCTEVTIiwiZXhwb3J0VmFyaWFibGUiLCJzZXJpYWxpemVOb2RlIiwic3RyaW5nIiwiSGFzaEFwaSIsImZ1bmN0aW9uQ2FsbHMiLCJoYXNoIiwibWF0Y2hlcyIsIm1hdGNoIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiaW5pdGlhbGl6ZSIsInBhZ2VTdHJ1Y3R1cmVKc29uRGF0YSIsInBhcmVudFdpbmRvdyIsInBhcmVudE1vbnN0ZXIiLCJwYXJlbnRCdWlsZGVyIiwiY3VycmVudE1vbnN0ZXJDb250ZW50IiwicmVzaXplIiwidXBkYXRlSGFuZGxlcnMiLCJpbml0UHJvdmlkZXJzIiwiTW9uc3RlckVkaXREYXRhIiwicHJvdmlkZXJzIiwiZ2V0UHJvdmlkZXJzIiwiZW50aXR5IiwiYXJyIiwiZmFjdG9yeSIsIiRtb25zdGVyQ29udGVudENhY2hlIiwiJHNlbGVjdGVkTWF0ZXJpYWwiLCIkaGFuZGxlcnMiLCJjc3MiLCJwb3NpdGlvbiIsInRvcCIsImhlaWdodCIsIiRtb25zdGVyQ29udGVudCIsIiRtb25zdGVyIiwic2VyaWFsaXplVW5pcXVlQ29udGVudCIsInNlbmRUb0J1aWxkZXIiLCJibG9jayIsIlZpc3VhbEZyYW1lU2V0dGluZ3MiLCJwcm92aWRlcnNFbnRpdGllcyIsInJlZ2lvbnNNYXRlcmlhbHMiLCJtYXRlcmlhbHNCeVJlZ2lvbnMiLCJyZWdpb25OYW1lIiwicmFuZG9tSW5kZXgiLCJpdGVyYXRlVGVtcGxhdGVUeXBlIiwibWF0ZXJpYWxzQnlSZWdpb25EZWNsIiwiZGVjbCIsIm1hdGVyaWFsc09yZGVyIiwibWF0ZXJpYWxzRGVjbHMiLCJhY3Rpb24iLCJmb3JtU3VibWl0IiwicmVnaW9uc1Jlc3VsdCIsIml0ZXJhdGVUZW1wbGF0ZVJlZ2lvbnMiLCJ0ZW1wbGF0ZVJlZ2lvbnNPcmRlciIsImVudGl0eU1hdGVyaWFscyIsInNlcmlhbGl6ZVByb3ZpZGVycyIsInByb3ZpZGVyS2V5IiwidmFsdWUiLCJyZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSIsIiRmb3JtIiwiJGlucHV0IiwiJGNzcmYiLCJhdHRyIiwidmFsIiwiYXBwZW5kVG8iLCJzdWJtaXQiLCJyZWdpb25NYXRlcmlhbHMiLCJpdGVyYXRlTWF0ZXJpYWxzIiwiV1lTSVdZRyIsImZyYW1lJCIsImVkaXRvciIsImdldERhdGEiLCJodG1sIiwiY29uZmlnIiwiYXV0b1BhcmFncmFwaCIsImVuYWJsZUNvbnRlbnRFZGl0YWJsZSIsImlnbm9yZUVtcHR5UGFyYWdyYXBoIiwiZW50ZXJNb2RlIiwiQ0tFRElUT1IiLCJFTlRFUl9CUiIsIkFsbG95RWRpdG9yIiwiYWxsIiwiSW1hZ2UiLCIkaW1nIiwic3JjIiwiYWx0IiwiTGluayIsImhyZWYiLCJhbmNob3IiLCJUZXh0U3RyaW5nIiwiYWxsb3dlZENvbnRlbnQiLCJ0b29sYmFycyIsInN0eWxlcyIsInNlbGVjdGlvbnMiLCJTZWxlY3Rpb25zIiwidGFiSW5kZXgiLCJibG9ja2xlc3MiLCJrZXlDb2RlIiwiU0hJRlQiLCJjYW5jZWwiLCJkYXRhVmFsdWUiLCJyZXBsYWNlIiwiU3RhdGljQ29udGVudCIsIm5ld0RhdGEiLCJlbnRpdGllcyIsInNlcmlhbGl6ZUtleXMiLCJyZWN1cnNpdmVTZXJpYWxpemUiLCJ3YXJuIiwic2VyaWFsaXplRWRpdGFibGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7O0FBRUE7Ozs7OztBQUVBQSxRQUFPQyxlQUFQLEdBQXlCLCtCQUF6QjtBQUNBLEc7Ozs7Ozs7Ozs7Ozs7O0FDTEE7Ozs7Ozs7O0tBRU1DLGU7QUFDSiw0QkFBWUMsYUFBWixFQUEyQkMsSUFBM0IsRUFBaUM7QUFBQTs7QUFDL0IsVUFBS0QsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxNQUFMLEdBQWNDLEVBQUUsS0FBS0gsYUFBTCxDQUFtQkksUUFBbkIsQ0FBNEIsZ0JBQTVCLENBQUYsRUFBaUQsQ0FBakQsRUFBb0RDLGFBQWxFO0FBQ0Q7Ozs7Z0NBRVU7QUFDVDtBQUNBLFdBQUksS0FBS0osSUFBTCxLQUFjLEtBQUtELGFBQUwsQ0FBbUJNLGtCQUFyQyxFQUF5RDtBQUN2RDtBQUNEO0FBQ0QsV0FBSSxLQUFLTixhQUFMLENBQW1CTSxrQkFBdkIsRUFBMkM7QUFDekMsY0FBS04sYUFBTCxDQUFtQk8sWUFBbkIsQ0FBZ0NDLEdB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QyxRQUFRMUgsRUFBRSxJQUFGLENBQWQ7QUFDQTJFLHNCQUFPaEMsR0FBUCxFQUFZZ0UsSUFBWixDQUFpQmhELEtBQUs2UyxrQkFBTCxDQUF3QnJMLEdBQXhCLEVBQTZCekQsS0FBN0IsRUFBb0NsRixPQUFPQyxJQUFQLENBQVkwSSxHQUFaLENBQXBDLEVBQXNELE9BQXRELENBQWpCO0FBQ0FpRTtBQUNELGNBSkQ7QUFQdUI7QUFZeEIsVUFaRCxNQVlPO0FBQ0w7QUFDQSxlQUFNeE8sUUFBUXNPLE1BQU01SyxJQUFOLDBCQUFrQytILE1BQWxDLEdBQTJDMUosR0FBM0MsU0FBb0RTLEtBQXBELEVBQWQ7QUFDQSxlQUFJeEMsTUFBTWtDLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIrQixxQkFBUTRSLElBQVIsa0NBQTRDcEssTUFBNUMsR0FBcUQxSixHQUFyRDtBQUNBO0FBQ0Q7QUFDRGdDLGtCQUFPaEMsR0FBUCxJQUFjLHVCQUFhME0sUUFBYixDQUFzQnFILGlCQUF0QixDQUF3QzlWLEtBQXhDLENBQWQ7QUFDRDtBQUNGLFFBM0JEO0FBNEJBLGNBQU8rRCxNQUFQO0FBQ0Q7Ozs7OzttQkFHWXlSLGE7Ozs7Ozs7O0FDdERmLDBDIiwiZmlsZSI6InZpc3VhbC1idWlsZGVyL3NjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDA3NzRkOGI5YmU3ZmVhN2VkYWE5XG4gKiovIiwiaW1wb3J0ICcuL2J1bmRsZS5jc3MnO1xuXG5pbXBvcnQgRnJvbnRlbmRNb25zdGVyIGZyb20gJy4vRnJvbnRlbmRNb25zdGVyJztcblxud2luZG93LkZyb250ZW5kTW9uc3RlciA9IG5ldyBGcm9udGVuZE1vbnN0ZXIoKTtcbi8vXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9idW5kbGUuanNcbiAqKi8iLCJpbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi8uLi92aXN1YWwtZnJhbWUvRnJhbWVBcGknO1xuXG5jbGFzcyBCYXNlRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2aXN1YWxCdWlsZGVyLCBuYW1lKSB7XG4gICAgdGhpcy52aXN1YWxCdWlsZGVyID0gdmlzdWFsQnVpbGRlcjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFyZ2V0ID0gJCh0aGlzLnZpc3VhbEJ1aWxkZXIuc2V0dGluZ3NbJ2ZyYW1lLXNlbGVjdG9yJ10pWzBdLmNvbnRlbnRXaW5kb3c7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICAvLyBkZWFjdGl2YXRlIGN1cnJlbnQgc2VsZWN0ZWQgZW52aXJvbm1lbnRcbiAgICBpZiAodGhpcy5uYW1lID09PSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3VycmVudEVudmlyb25tZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnZpc3VhbEJ1aWxkZXIuY3VycmVudEVudmlyb25tZW50KSB7XG4gICAgICB0aGlzLnZpc3VhbEJ1aWxkZXIuZW52aXJvbm1lbnRzLmdldCh0aGlzLnZpc3VhbEJ1aWxkZXIuY3VycmVudEVudmlyb25tZW50KS5kZWFjdGl2YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRhcmdldCQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0LiQ7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMudmlzdWFsQnVpbGRlci5jbGVhclN0YWNrYWJsZSgpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2UoZnVuYywgYXJncykge1xuICAgIHJldHVybiBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLnRhcmdldCwgZnVuYywgYXJncyk7XG4gIH1cblxuICBwYWdlQ2hhbmdlZCgpIHtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VFbnZpcm9ubWVudDtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvQmFzZUVudmlyb25tZW50LmpzXG4gKiovIiwiY2xhc3MgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuXG4gIH1cblxuICBpbml0aWFsaXplRWRpdGFibGUoJG5vZGUpIHtcblxuICB9XG5cbiAgc3RhdGljIGdldCBmcmFtZSQoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy4kO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VFZGl0YWJsZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9CYXNlRWRpdGFibGUuanNcbiAqKi8iLCJjbGFzcyBGcmFtZUFwaSB7XG4gIHN0YXRpYyBnZXQgaXNJZSgpIHtcbiAgICAvKiBnbG9iYWwgaXMgKi9cbiAgICBpZiAodHlwZW9mKGlzKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBpcy5pZSgpOy8vIHx8IGlzLmVkZ2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRpYyBiaW5kTWVzc2FnZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFja0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgIGxldCBtZXNzYWdlID0gbnVsbDtcbiAgICAgIGlmIChGcmFtZUFwaS5pc0llKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZSA9IGV2ZW50LmRhdGE7XG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0ZW5lclttZXNzYWdlLmZ1bmNdKSB7XG4gICAgICAgIGxpc3RlbmVyW21lc3NhZ2UuZnVuY10uYXBwbHkobGlzdGVuZXIsIG1lc3NhZ2UuYXJncyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElFOFxuICAgICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbm1lc3NhZ2UnLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHNlbmRNZXNzYWdlKHRhcmdldCwgZnVuYywgYXJncykge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBmdW5jLFxuICAgICAgYXJnc1xuICAgIH07XG4gICAgY29uc3QgbWVzc2FnZSA9IEZyYW1lQXBpLmlzSWUgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IGRhdGE7XG5cbiAgICB0YXJnZXQucG9zdE1lc3NhZ2UobWVzc2FnZSwgJyonKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcmFtZUFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanNcbiAqKi8iLCJpbXBvcnQgVmlzdWFsQnVpbGRlciBmcm9tICcuL2NvbXBvbmVudHMvYnVpbGRlci9WaXN1YWxCdWlsZGVyJztcbmltcG9ydCBWaXN1YWxGcmFtZSBmcm9tICcuL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL1Zpc3VhbEZyYW1lJztcbmltcG9ydCBIYXNoQXBpIGZyb20gJy4vY29tcG9uZW50cy92aXN1YWwtZnJhbWUvSGFzaEFwaSc7XG5cbmNsYXNzIEZyb250ZW5kTW9uc3RlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFyYW1zKCk7XG4gICAgdGhpcy52aXN1YWxCdWxkZXIgPSBudWxsO1xuICAgIHRoaXMuaGFzaEFwaSA9IG5ldyBIYXNoQXBpKCk7XG4gICAgaWYgKHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdyAmJiB3aW5kb3cucGFyZW50LkZyb250ZW5kTW9uc3Rlcikge1xuICAgICAgaWYgKHdpbmRvdy5wYXJlbnQuRnJvbnRlbmRNb25zdGVyLmhhc0J1aWxkZXIpIHtcbiAgICAgICAgdGhpcy5WaXN1YWxGcmFtZSA9IG5ldyBWaXN1YWxGcmFtZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiBnbG9iYWwgc21vb3RoU2Nyb2xsOiBmYWxzZSovXG4gICAgaWYgKHR5cGVvZihzbW9vdGhTY3JvbGwpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc21vb3RoU2Nyb2xsLmluaXQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBWaXN1YWxCdWlsZGVyIGNsYXNzIGluc3RhbmNlXG4gICAqIEByZXR1cm5zIFZpc3VhbEJ1aWxkZXJcbiAgICovXG4gIGdldCBidWlsZGVyKCkge1xuICAgIGlmICh0aGlzLnZpc3VhbEJ1bGRlciA9PT0gbnVsbCkge1xuICAgICAgdGhpcy52aXN1YWxCdWxkZXIgPSBuZXcgVmlzdWFsQnVpbGRlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy52aXN1YWxCdWxkZXI7XG4gIH1cblxuICAvKipcbiAgICogSWYgdGhpcyBGcm9udGVuZE1vbnN0ZXIgaW5zdGFuY2UgaGFzIFZpc3VhbCBCdWlsZGVyIG9uIHBhZ2VcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaGFzQnVpbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZGVyLiRidWlsZGVyLmxlbmd0aCA9PT0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIEZyb250ZW5kTW9uc3RlciBzZXR0aW5ncy5cbiAgICogVXNlcyBGcm9udGVuZE1vbnN0ZXJTZXR0aW5ncyB2YXJpYWJsZSBpZiBwcm92aWRlZCBvciBkZWZhdWx0IHZhbHVlcyBpbnN0ZWFkLlxuICAgKi9cbiAgcGFyYW1zKCkge1xuICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5Gcm9udGVuZE1vbnN0ZXJTZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHVzZXJTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcm9udGVuZE1vbnN0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL0Zyb250ZW5kTW9uc3Rlci5qc1xuICoqLyIsImltcG9ydCBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50JztcbmltcG9ydCBNYXRlcmlhbHNFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9NYXRlcmlhbHNFbnZpcm9ubWVudCc7XG5pbXBvcnQgQ3VzdG9taXphdGlvbkVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudCc7XG5pbXBvcnQgQWN0aW9uRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvQWN0aW9uRW52aXJvbm1lbnQnO1xuaW1wb3J0IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9QYWdlU3RydWN0dXJlRW52aXJvbm1lbnQnO1xuaW1wb3J0IEZyYW1lQXBpIGZyb20gJy4vLi4vdmlzdWFsLWZyYW1lL0ZyYW1lQXBpJztcbi8vIGltcG9ydCBFZGl0YWJsZSBmcm9tICcuL0VkaXRhYmxlJztcblxuY2xhc3MgVmlzdWFsQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFyYW1zKCk7XG4gICAgdGhpcy5yZXNvbHV0aW9uU3dpdGNoZXIoKTtcblxuICAgIHRoaXMuZW52aXJvbm1lbnRzID0gbmV3IE1hcChbXG4gICAgICBbJ3NpdGUtc3RydWN0dXJlJywgbmV3IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCh0aGlzLCAnc2l0ZS1zdHJ1Y3R1cmUnKV0sXG4gICAgICBbJ3BhZ2Utc3RydWN0dXJlJywgbmV3IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCh0aGlzLCAncGFnZS1zdHJ1Y3R1cmUnKV0sXG4gICAgICBbJ21hdGVyaWFscycsIG5ldyBNYXRlcmlhbHNFbnZpcm9ubWVudCh0aGlzLCAnbWF0ZXJpYWxzJyldLFxuICAgICAgWydjdXN0b21pemF0aW9uJywgbmV3IEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCh0aGlzLCAnY3VzdG9taXphdGlvbicpXSxcbiAgICAgIFsnYWN0aW9uJywgbmV3IEFjdGlvbkVudmlyb25tZW50KHRoaXMsICdhY3Rpb24nKV0sXG4gICAgXSk7XG5cbiAgICB0aGlzLmVudmlyb25tZW50U2VsZWN0b3IoKTtcblxuICAgIC8vIHNlbGVjdCBmaXJzdCBlbnZpcm9ubWVudCBieSBkZWZhdWx0XG4gICAgdGhpcy5zd2l0Y2hFbnZpcm9ubWVudCgnc2l0ZS1zdHJ1Y3R1cmUnKTtcbiAgICAkKCcubW9uc3Rlci1lbnZpcm9ubWVudC1zZWxlY3Rvcl9fZW52aXJvbm1lbnQtbGluaycpXG4gICAgICAuZmlyc3QoKVxuICAgICAgLm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgRnJhbWVBcGkuYmluZE1lc3NhZ2VMaXN0ZW5lcih0aGlzKTtcblxuICAgIC8vIHRoaXMuZWRpdGFibGUgPSBuZXcgRWRpdGFibGUoKTtcblxuICAgIHRoaXMuY29udHJvbHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIFZpc3VhbEJ1aWxkZXIgc2V0dGluZ3MuXG4gICAqIFVzZXMgVmlzdWFsQnVpbGRlclNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAqL1xuICBwYXJhbXMoKSB7XG4gICAgY29uc3QgdXNlclNldHRpbmdzID0gd2luZG93LlZpc3VhbEJ1aWxkZXJTZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICdlbGVtZW50LXNlbGVjdG9yJzogJy5tb25zdGVyLXZpc3VhbC1idWlsZGVyJyxcbiAgICAgICdmcmFtZS1zZWxlY3Rvcic6ICcubW9uc3Rlci12aXN1YWwtZnJhbWUnLFxuICAgICAgYnVuZGxlczoge30sXG4gICAgICAnc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyc6ICdtb25zdGVyLXN0YWNrYWJsZS1jb250YWluZXInLFxuICAgICAgJ25ldy1ibG9jay11cmwnOiAnL21vbnN0ZXIvdmlzdWFsLWJ1aWxkZXIvbmV3LWJsb2NrJyxcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHVzZXJTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLiRidWlsZGVyID0gJCh0aGlzLnNldHRpbmdzWydlbGVtZW50LXNlbGVjdG9yJ10pO1xuICAgIHRoaXMuJHN0YWNrYWJsZSA9ICQoYC4ke3RoaXMuc2V0dGluZ3NbJ3N0YWNrYWJsZS1jb250YWluZXItY2xhc3MnXX1gKTtcbiAgfVxuXG4gIHJlc29sdXRpb25Td2l0Y2hlcigpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBiZW1FbGVtID0gJ3Jlc29sdXRpb24tc3dpdGNoZXJfX3Jlc29sdXRpb24tbGluayc7XG5cbiAgICBjb25zdCAkcmVzb2x1dGlvbkxpbmtzID0gJChgLiR7YmVtRWxlbX1gKTtcbiAgICAkcmVzb2x1dGlvbkxpbmtzLmNsaWNrKGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgJHJlc29sdXRpb25MaW5rcy5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgICQodGhhdC5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSkud2lkdGgoJCh0aGlzKS5kYXRhKCdyZXNvbHV0aW9uV2lkdGgnKSk7XG4gICAgICAkKHRoaXMpLm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBlbnZpcm9ubWVudFNlbGVjdG9yKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGJlbUVsZW0gPSAnbW9uc3Rlci1lbnZpcm9ubWVudC1zZWxlY3Rvcl9fZW52aXJvbm1lbnQtbGluayc7XG5cbiAgICBjb25zdCAkc2VjdGlvbkxpbmtzID0gJChgLiR7YmVtRWxlbX1gKTtcbiAgICAkc2VjdGlvbkxpbmtzLmNsaWNrKGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgY29uc3QgZW52aXJvbm1lbnROYW1lID0gJCh0aGlzKS5kYXRhKCdlbnZpcm9ubWVudE5hbWUnKTtcbiAgICAgIGlmICh0aGF0LmN1cnJlbnRFbnZpcm9ubWVudCA9PT0gZW52aXJvbm1lbnROYW1lKSB7XG4gICAgICAgICRzZWN0aW9uTGlua3MubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgICAgIHRoYXQuZW52aXJvbm1lbnRzLmdldChlbnZpcm9ubWVudE5hbWUpLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgdGhhdC5jdXJyZW50RW52aXJvbm1lbnQgPSBudWxsO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgICRzZWN0aW9uTGlua3MubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgICB0aGF0LnN3aXRjaEVudmlyb25tZW50KGVudmlyb25tZW50TmFtZSk7XG4gICAgICAkKHRoaXMpLm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBzd2l0Y2hFbnZpcm9ubWVudChlbnZpcm9ubWVudE5hbWUpIHtcbiAgICB0aGlzLmVudmlyb25tZW50cy5nZXQoZW52aXJvbm1lbnROYW1lKS5hY3RpdmF0ZSgpO1xuICAgIHRoaXMuY3VycmVudEVudmlyb25tZW50ID0gZW52aXJvbm1lbnROYW1lO1xuICB9XG5cbiAgY2xlYXJTdGFja2FibGUoKSB7XG4gICAgdGhpcy4kc3RhY2thYmxlLmVtcHR5KCk7XG4gIH1cblxuICBjcmVhdGVTdGFja2FibGVQYW5lKCkge1xuICAgIGNvbnN0IHBhbmVDbGFzcyA9IGAke3RoaXMuc2V0dGluZ3NbJ3N0YWNrYWJsZS1jb250YWluZXItY2xhc3MnXX1fX3BhbmVgO1xuICAgIGNvbnN0IG1vZGlmaWVyID0gdGhpcy4kc3RhY2thYmxlLmZpbmQoYC4ke3BhbmVDbGFzc31gKS5sZW5ndGggPT09IDBcbiAgICAgID8gYCR7cGFuZUNsYXNzfV9maXJzdGBcbiAgICAgIDogJyc7XG4gICAgY29uc3QgJG5ld1BhbmUgPSAkKGA8ZGl2IGNsYXNzPVwiJHtwYW5lQ2xhc3N9ICR7bW9kaWZpZXJ9XCI+PC9kaXY+YCk7XG4gICAgdGhpcy4kc3RhY2thYmxlLmFwcGVuZCgkbmV3UGFuZSk7XG4gICAgcmV0dXJuICRuZXdQYW5lO1xuICB9XG5cbiAgbWF0ZXJpYWxCeU5hbWUobmFtZSkge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLm1hdGVyaWFscy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MubWF0ZXJpYWxzW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldCBmcmFtZUNvbnRlbnRXaW5kb3coKSB7XG4gICAgcmV0dXJuICQodGhpcy5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSlbMF0uY29udGVudFdpbmRvdztcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICAvLyBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLmZyYW1lQ29udGVudFdpbmRvdywgJ3NlcmlhbGl6ZUNvbnRlbnQnLCBbJ2xvZyddKTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmVudmlyb25tZW50cy5nZXQoJ3BhZ2Utc3RydWN0dXJlJykuc2VyaWFsaXplUGFnZSgpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICAvLyB3ZSBoYXZlIHJlc3VsdCB3aGljaCBpcyBjb250ZW50IGluIGZvcm1hdDpcbiAgICAvLyByZWdpb25cbiAgICAvLyAtLS0gbWF0ZXJpYWwgaWRcbiAgICAvLyAtLS0tLS0tIGtleXMgPT4gdmFsdWVzXG4gICAgLy9cbiAgICAvLyBvdXIgUHJvdmlkZXJzIHNob3VsZCBnZXQgb25seSB0aG9zZSBrZXlzIHRoYXQgdGhleSBwcm92aWRlXG4gICAgLy8gcHJvdmlkZWQga2V5cyBhcmUgc3RvcmVkIGluIGZyYW1lQ29udGVudFdpbmRvdy5NT05TVEVSX0VESVRfTU9ERV9EQVRBLnRlbXBsYXRlLnByb3ZpZGVkS2V5c1xuICAgIGNvbnN0IHJlc3VsdEJ5UHJvdmlkZXJzID0ge307XG4gICAgY29uc3QgcHJvdmlkZWRLZXlzID0gdGhpcy5mcmFtZUNvbnRlbnRXaW5kb3cuTU9OU1RFUl9FRElUX01PREVfREFUQS50ZW1wbGF0ZS5wcm92aWRlZEtleXM7XG5cbiAgICBPYmplY3Qua2V5cyhwcm92aWRlZEtleXMpLmZvckVhY2gocHJvdmlkZXJJbmRleCA9PiB7XG4gICAgICByZXN1bHRCeVByb3ZpZGVyc1twcm92aWRlckluZGV4XSA9IHt9O1xuXG4gICAgICBjb25zdCByZWdpb25zID0gcHJvdmlkZWRLZXlzW3Byb3ZpZGVySW5kZXhdO1xuXG4gICAgICBPYmplY3Qua2V5cyhyZWdpb25zKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQuaGFzT3duUHJvcGVydHkocmVnaW9uS2V5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF1bcmVnaW9uS2V5XSA9IHt9O1xuXG4gICAgICAgIC8vIGdvIGRlZXAgdG8gbWF0ZXJpYWwgaW5kZWNlc1xuICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSByZWdpb25zW3JlZ2lvbktleV07XG5cbiAgICAgICAgT2JqZWN0LmtleXMobWF0ZXJpYWxzKS5mb3JFYWNoKG1hdGVyaWFsSW5kZXggPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHRbcmVnaW9uS2V5XS5oYXNPd25Qcm9wZXJ0eShtYXRlcmlhbEluZGV4KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF1bcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XSA9IHt9O1xuXG4gICAgICAgICAgY29uc3QgZGF0YUtleXMgPSBtYXRlcmlhbHNbbWF0ZXJpYWxJbmRleF07XG5cbiAgICAgICAgICBkYXRhS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0W3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF0uaGFzT3duUHJvcGVydHkoa2V5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0QnlQcm92aWRlcnNcbiAgICAgICAgICAgICAgW3Byb3ZpZGVySW5kZXhdXG4gICAgICAgICAgICAgIFtyZWdpb25LZXldXG4gICAgICAgICAgICAgIFttYXRlcmlhbEluZGV4XVxuICAgICAgICAgICAgICBba2V5XSA9IHJlc3VsdFtyZWdpb25LZXldW21hdGVyaWFsSW5kZXhdW2tleV07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0QnlQcm92aWRlcnMpO1xuICAgIHJldHVybiByZXN1bHRCeVByb3ZpZGVycztcbiAgfVxuXG4gIHBhZ2VDaGFuZ2VkKCkge1xuICAgIHRoaXMuZW52aXJvbm1lbnRzLmZvckVhY2goXG4gICAgICBlbnZpcm9ubWVudCA9PlxuICAgICAgICBlbnZpcm9ubWVudC5wYWdlQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIGxvZyhyZXN1bHQpIHtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICB9XG5cbiAgY29udHJvbHMoKSB7XG4gICAgdGhpcy4kY29udHJvbHMgPSB0aGlzLiRidWlsZGVyLmZpbmQoJy5jb250cm9scycpLmZpcnN0KCk7XG4gICAgdGhpcy4kY29udHJvbHMuZWxlbSgncmVmcmVzaCcpLmNsaWNrKCgpID0+IHtcbiAgICAgIHRoaXMuZnJhbWVDb250ZW50V2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kY29udHJvbHMuZWxlbSgnc2F2ZScpLmNsaWNrKCgpID0+IHtcbiAgICAgIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMuZnJhbWVDb250ZW50V2luZG93LCAnc2F2ZScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbEJ1aWxkZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9WaXN1YWxCdWlsZGVyLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIEFjdGlvbkVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcblxufVxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQWN0aW9uRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgQ3VzdG9taXphdGlvbkVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcblxufVxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9taXphdGlvbkVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBNYXRlcmlhbHNFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICBzdXBlcih2aXN1YWxCdWlsZGVyLCBuYW1lKTtcbiAgICB0aGlzLmluaXRNYXRlcmlhbHNTZWxlY3RvcigpO1xuICB9XG5cbiAgaW5pdE1hdGVyaWFsc1NlbGVjdG9yKCkge1xuICAgIHRoaXMuJG1hdGVyaWFsc0dyb3VwcyA9ICQoJzx1bCBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNcIj48L3VsPicpO1xuICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QgPSBbXTtcblxuICAgIHRoaXMudmlzdWFsQnVpbGRlci5zZXR0aW5ncy5idW5kbGVzLmZvckVhY2goYnVuZGxlID0+IHtcbiAgICAgIC8qIGdsb2JhbCBwb2x5Z2xvdDogZmFsc2UgKi9cbiAgICAgIGNvbnN0IGkxOG5CdW5kbGVOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBwb2x5Z2xvdC50KGJ1bmRsZS5uYW1lKVxuICAgICAgICA6IGJ1bmRsZS5uYW1lO1xuXG4gICAgICBjb25zdCAkYnVuZGxlVGl0bGUgPSBgXG4gICAgICA8bGkgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19pdGVtIG1hdGVyaWFscy1ncm91cHNfX2l0ZW0tLWJ1bmRsZS1sYWJlbFwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWJ1bmRsZVwiIGRhdGEtYnVuZGxlLXBhdGg9XCIke2J1bmRsZS5mdWxsUGF0aH1cIj5cbiAgICAgICAgICAgICR7aTE4bkJ1bmRsZU5hbWV9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICBgO1xuICAgICAgdGhpcy4kbWF0ZXJpYWxzTGlzdC5wdXNoKCRidW5kbGVUaXRsZSk7XG5cbiAgICAgIGJ1bmRsZS5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwTmFtZSA9IGdyb3VwLm5hbWU7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IGdyb3VwLm1hdGVyaWFscztcbiAgICAgICAgY29uc3QgaTE4bkdyb3VwTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnID8gcG9seWdsb3QudChncm91cE5hbWUpIDogZ3JvdXBOYW1lO1xuICAgICAgICBjb25zdCAkbGkgPSAkKGBcbiAgICA8bGkgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19pdGVtXCI+XG4gICAgICA8YSBocmVmPVwiI1wiIGRhdGEtZ3JvdXAtcGF0aD1cIiR7Z3JvdXAuZnVsbFBhdGh9XCIgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXBcIj5cbiAgICAgICAgJHtpMThuR3JvdXBOYW1lfSA8c3BhbiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX2NvdW50XCI+KCR7bWF0ZXJpYWxzLmxlbmd0aH0pPC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvbGk+YCk7XG4gICAgICAgIHRoaXMuJG1hdGVyaWFsc0dyb3Vwcy5hcHBlbmQoJGxpKTtcbiAgICAgICAgY29uc3QgJGxpc3QgPSAkKGA8dWwgY2xhc3M9XCJtYXRlcmlhbHMtbGlzdFwiIGRhdGEtZ3JvdXAtcGF0aD1cIiR7Z3JvdXAuZnVsbFBhdGh9XCI+PC91bD5gKTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcblxuICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaChtYXRlcmlhbCA9PiB7XG4gICAgICAgICAgY29uc3QgbWF0ZXJpYWxOYW1lID0gbWF0ZXJpYWwubmFtZTtcbiAgICAgICAgICBjb25zdCBpMThuTWF0ZXJpYWxOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gcG9seWdsb3QudChtYXRlcmlhbE5hbWUpXG4gICAgICAgICAgICA6IG1hdGVyaWFsTmFtZTtcbiAgICAgICAgICBjb25zdCAkaXRlbSA9ICQoYFxuPGxpPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWF0ZXJpYWxzLWxpc3RfX2l0ZW1cIiBkYXRhLW1hdGVyaWFsLXBhdGg9XCIke21hdGVyaWFsLmZ1bGxQYXRofVwiPlxuICAgICR7aTE4bk1hdGVyaWFsTmFtZX1cbiAgPC9hPlxuPC9saT5cbmApO1xuICAgICAgICAgIGl0ZW1zLnB1c2goJGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgJGxpc3QuYXBwZW5kKGl0ZW1zKTtcbiAgICAgICAgdGhpcy4kbWF0ZXJpYWxzTGlzdC5wdXNoKCRsaXN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgLyogZ2xvYmFsIGRvY3VtZW50OiBmYWxzZSAqL1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJywgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgJHRoaXMudG9nZ2xlTW9kKCdhY3RpdmUnKTtcbiAgICAgIGNvbnN0IGdyb3VwUGF0aCA9ICR0aGlzLmRhdGEoJ2dyb3VwUGF0aCcpO1xuICAgICAgaWYgKCR0aGlzLm1vZCgnYWN0aXZlJykpIHtcbiAgICAgICAgJCgnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcpLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuXG4gICAgICAgICQoJy5tYXRlcmlhbHMtbGlzdCcpLmVhY2goZnVuY3Rpb24gaXQoKSB7XG4gICAgICAgICAgY29uc3QgJGxpc3QgPSAkKHRoaXMpO1xuICAgICAgICAgIGlmICgkbGlzdC5tb2QoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAkbGlzdC5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCRsaXN0LmRhdGEoJ2dyb3VwUGF0aCcpID09PSBncm91cFBhdGgpIHtcbiAgICAgICAgICAgICRsaXN0Lm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkdGhpcy5tb2QoJ2FjdGl2ZScsIHRydWUpO1xuICAgICAgICB0aGF0LiRtYXRlcmlhbHNQYW5lLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoYXQncyBqdXN0IHNlY29uZCBjbGljayBvbiB0aGUgc2FtZSBncm91cFxuICAgICAgICB0aGF0LiRtYXRlcmlhbHNQYW5lLmhpZGUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYXRlcmlhbHMtbGlzdF9faXRlbScsIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgIGNvbnN0IFBhZ2VTdHJ1Y3R1cmVFbnYgPSB0aGF0LnZpc3VhbEJ1aWxkZXIuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRSZWdpb25LZXkgPSBQYWdlU3RydWN0dXJlRW52LnNlbGVjdGVkUmVnaW9uS2V5O1xuICAgICAgY29uc3Qgc2VsZWN0ZWRFbnRpdHkgPSBQYWdlU3RydWN0dXJlRW52LnNlbGVjdGVkRW50aXR5O1xuXG4gICAgICBpZiAoc2VsZWN0ZWRSZWdpb25LZXkgIT09IG51bGwgJiYgc2VsZWN0ZWRFbnRpdHkgIT09IG51bGwpIHtcbiAgICAgICAgdGhhdC5zZW5kTWVzc2FnZShcbiAgICAgICAgICAnbmV3QmxvY2snLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgICQodGhpcykuZGF0YSgnbWF0ZXJpYWxQYXRoJyksXG4gICAgICAgICAgICBzZWxlY3RlZEVudGl0eSxcbiAgICAgICAgICAgIHNlbGVjdGVkUmVnaW9uS2V5LFxuICAgICAgICAgIF1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHN1cGVyLmFjdGl2YXRlKCk7XG5cbiAgICB0aGlzLiRncm91cHNQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRncm91cHNQYW5lLmFwcGVuZCh0aGlzLiRtYXRlcmlhbHNHcm91cHMpO1xuXG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZS5hcHBlbmQodGhpcy4kbWF0ZXJpYWxzTGlzdCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZS5oaWRlKCk7XG5cbiAgICAvKlxuICAgIGNvbnN0IFBhZ2VTdHJ1Y3R1cmVFbnYgPSB0aGF0LnZpc3VhbEJ1aWxkZXIuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkUmVnaW9uS2V5ID0gUGFnZVN0cnVjdHVyZUVudi5zZWxlY3RlZFJlZ2lvbktleTtcbiAgICBjb25zdCBzZWxlY3RlZEVudGl0eSA9IFBhZ2VTdHJ1Y3R1cmVFbnYuc2VsZWN0ZWRFbnRpdHk7XG5cbiAgICBAdG9kbyBjaGVjayBmb3Igc2VsZWN0ZWRSZWdpb24gaWYgbm90IC0gd2UgbXVzdCBub3QgYWRkIGJsb2NrIGhlcmVcbiAgICAqL1xuXG4gICAgJCgnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcpLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbHNFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9NYXRlcmlhbHNFbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2aXN1YWxCdWlsZGVyLCBuYW1lKSB7XG4gICAgc3VwZXIodmlzdWFsQnVpbGRlciwgbmFtZSk7XG4gICAgdGhpcy5pbml0UGFnZVN0cnVjdHVyZUVsZW1lbnQoKTtcbiAgICB0aGlzLmVkaXRNb2RlRGF0YSA9IHt9O1xuICAgIHRoaXMuc2VsZWN0ZWRSZWdpb25LZXkgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0ZWRFbnRpdHkgPSBudWxsO1xuICB9XG5cbiAgaW5pdFBhZ2VTdHJ1Y3R1cmVFbGVtZW50KCkge1xuICAgIHRoaXMuJGhlYWRlciA9ICQoJzxkaXYgY2xhc3M9XCJtb25zdGVyLXN0YWNrYWJsZS1jb250YWluZXJfX3BhbmUtaGVhZGVyXCI+UGFnZSBzdHJ1Y3R1cmU8L2Rpdj4nKTtcbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlID0gJCgnPGRpdiBjbGFzcz1cInBhZ2Utc3RydWN0dXJlXCI+PC9kaXY+Jyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICBzdXBlci5hY3RpdmF0ZSgpO1xuXG4gICAgdGhpcy4kc3RydWN0dXJlUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kc3RydWN0dXJlUGFuZS5hcHBlbmQodGhpcy4kaGVhZGVyKTtcbiAgICB0aGlzLiRzdHJ1Y3R1cmVQYW5lLmFwcGVuZCh0aGlzLiRwYWdlU3RydWN0dXJlKTtcbiAgfVxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUuZGV0YWNoKCk7XG4gICAgdGhpcy4kaGVhZGVyLmRldGFjaCgpO1xuICAgIHN1cGVyLmRlYWN0aXZhdGUoKTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2VkKCkge1xuICAgIHN1cGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5qc3RyZWUoJ2Rlc3Ryb3knKTtcbiAgICBjb25zdCBsYXlvdXQgPSB0aGlzLnRhcmdldC5NT05TVEVSX0VESVRfTU9ERV9EQVRBLmxheW91dDtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudGFyZ2V0Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEudGVtcGxhdGU7XG5cbiAgICBjb25zdCBsYXlvdXRJdGVtID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBpZDogJ2xheW91dCcsXG4gICAgICAgIHRlbXBsYXRlSWQ6IGxheW91dC5pZCxcbiAgICAgIH0sXG4gICAgICB0ZXh0OiBgTGF5b3V0IC0gJHtsYXlvdXQua2V5fSAjJHtsYXlvdXQuaWR9YCxcbiAgICAgIGljb246ICdmYSBmYS1jb2x1bW5zJyxcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIG9wZW5lZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgfTtcbiAgICBjb25zdCB0ZW1wbGF0ZUl0ZW0gPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiAndGVtcGxhdGUnLFxuICAgICAgICB0ZW1wbGF0ZUlkOiB0ZW1wbGF0ZS5pZCxcbiAgICAgIH0sXG4gICAgICB0ZXh0OiBgVGVtcGxhdGUgLSAke3RlbXBsYXRlLmtleX0gIyR7dGVtcGxhdGUuaWR9YCxcbiAgICAgIGljb246ICdmYSBmYS10aCcsXG4gICAgICBzdGF0ZToge1xuICAgICAgICBvcGVuZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH07XG5cbiAgICBjb25zdCAkbGF5b3V0UmVnaW9ucyA9IHRoaXMudGFyZ2V0JCgnLm0tbW9uc3Rlci1jb250ZW50X19sYXlvdXQnKTtcblxuICAgICRsYXlvdXRSZWdpb25zLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5wcm9jZXNzTGF5b3V0KCQodGhpcykpO1xuICAgICAgbGF5b3V0SXRlbS5jaGlsZHJlbi5wdXNoKHJlc3VsdC5pdGVtKTtcbiAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnMuZm9yRWFjaChyZWdpb24gPT4ge1xuICAgICAgICB0ZW1wbGF0ZUl0ZW0uY2hpbGRyZW4ucHVzaChyZWdpb24pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmUgPSBbXG4gICAgICBsYXlvdXRJdGVtLFxuICAgICAgdGVtcGxhdGVJdGVtLFxuICAgIF07XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5qc3RyZWUoe1xuICAgICAgY29yZToge1xuICAgICAgICBkYXRhOiB0aGlzLnBhZ2VTdHJ1Y3R1cmUsXG4gICAgICAgIHRoZW1lczoge1xuICAgICAgICAgIG5hbWU6ICdkZWZhdWx0LWRhcmsnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgJ3R5cGVzJyxcbiAgICAgICAgJ3dob2xlcm93JyxcbiAgICAgIF0sXG4gICAgICB0eXBlczoge1xuICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtY29sdW1ucycsXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgaWNvbjogJ2ZhIGZhLXRoJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVSZWdpb246IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtZm9sZGVyLW8nLFxuICAgICAgICB9LFxuICAgICAgICBjb250ZW50VGVtcGxhdGVSZWdpb246IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtZm9sZGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWF0ZXJpYWw6IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtcHV6emxlLXBpZWNlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBqc3RyZWVPYmogPSB0aGlzLiRwYWdlU3RydWN0dXJlLmpzdHJlZSgpO1xuXG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5vbignbG9hZGVkLmpzdHJlZScsICgpID0+IHtcbiAgICAgIHRoaXMucGFnZVN0cnVjdHVyZUpzb24gPSBqc3RyZWVPYmouZ2V0X2pzb24odGhpcy4kcGFnZVN0cnVjdHVyZSwge1xuICAgICAgICBub19zdGF0ZTogdHJ1ZSxcbiAgICAgICAgbm9faWQ6IHRydWUsXG4gICAgICAgIG5vX2xpX2F0dHI6IHRydWUsXG4gICAgICAgIG5vX2FfYXR0cjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy50YXJnZXQuRnJvbnRlbmRNb25zdGVyLlZpc3VhbEZyYW1lLnBhZ2VTdHJ1Y3R1cmVKc29uID0gdGhpcy5wYWdlU3RydWN0dXJlSnNvbjtcbiAgICAgIGxldCBpc0NvbnRlbnRSZWdpb25Gb3VuZCA9IGZhbHNlO1xuICAgICAgdGhpcy5wYWdlU3RydWN0dXJlWzFdLmNoaWxkcmVuLmZvckVhY2goKHJlZ2lvbikgPT4ge1xuICAgICAgICBpZiAocmVnaW9uLmRhdGEuZW50aXR5RGVwZW5kZW50ICYmIGlzQ29udGVudFJlZ2lvbkZvdW5kID09PSBmYWxzZSkge1xuICAgICAgICAgIGlzQ29udGVudFJlZ2lvbkZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICBqc3RyZWVPYmouc2VsZWN0X25vZGUocmVnaW9uLmlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc3QgY29udHJvbEJ1dHRvbnMgPSAkKCc8ZGl2IGNsYXNzPVwidHJlZS1jb250cm9sLWJ1dHRvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+IEVESVQgYW5kIGV0Yy48L2Rpdj4nKTtcbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlLm9uKCdzZWxlY3Rfbm9kZS5qc3RyZWUnLCAoZSwgb2JqKSA9PiB7XG4gICAgICBjb25zdCAkYW5jaG9yID0gJChgIyR7b2JqLm5vZGUuaWR9YCk7XG4gICAgICAkYW5jaG9yLnByZXBlbmQoY29udHJvbEJ1dHRvbnMpO1xuICAgICAgY29uc3QgdHlwZSA9IG9iai5ub2RlLnR5cGU7XG4gICAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gb2JqLm5vZGUuZGF0YS5lbnRpdHlUeXBlIHx8IG51bGw7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbWF0ZXJpYWwnOlxuICAgICAgICAgIHRoaXMudGFyZ2V0JC5zbW9vdGhTY3JvbGwoe1xuICAgICAgICAgICAgc2Nyb2xsVGFyZ2V0OiB0aGlzLnRhcmdldCQoYFtkYXRhLW1hdGVyaWFsLXBhdGg9XCIke29iai5ub2RlLmRhdGEubWF0ZXJpYWxQYXRofVwiXWApLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSZWdpb25LZXkgPSBvYmoubm9kZS5kYXRhLnJlZ2lvbktleTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndGVtcGxhdGVSZWdpb24nOlxuICAgICAgICBjYXNlICdjb250ZW50VGVtcGxhdGVSZWdpb24nOlxuICAgICAgICAgIHRoaXMudGFyZ2V0JC5zbW9vdGhTY3JvbGwoe1xuICAgICAgICAgICAgc2Nyb2xsVGFyZ2V0OiB0aGlzLnRhcmdldCQoYFtkYXRhLXJlZ2lvbi1rZXk9XCIke29iai5ub2RlLmRhdGEucmVnaW9uS2V5fVwiXWApLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSZWdpb25LZXkgPSBvYmoubm9kZS5kYXRhLnJlZ2lvbktleTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUmVnaW9uS2V5ID0gbnVsbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgdGhpcy5lZGl0TW9kZURhdGEgPSB0aGlzLnRhcmdldC5NT05TVEVSX0VESVRfTU9ERV9EQVRBO1xuICB9XG5cbiAgc3RhdGljIHByb2Nlc3NMYXlvdXQoJGxheW91dFJlZ2lvbikge1xuICAgIGNvbnN0IGl0ZW0gPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQuZXh0cmFjdFJlZ2lvbkRhdGEoJGxheW91dFJlZ2lvbik7XG4gICAgaXRlbS5zdGF0ZSA9IHtcbiAgICAgIG9wZW5lZDogdHJ1ZSxcbiAgICB9O1xuICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICBpdGVtLmRhdGEuaWQgPSBgbGF5b3V0LnRlbXBsYXRlUmVnaW9uLiR7aXRlbS5kYXRhLnJlZ2lvbktleX1gO1xuICAgIGl0ZW0uaWQgPSBgcHNqXyR7aXRlbS5kYXRhLmlkfWA7XG4gICAgaXRlbS5kYXRhLmVudGl0eVR5cGUgPSAnbGF5b3V0JztcbiAgICBjb25zdCB0ZW1wbGF0ZVJlZ2lvbnMgPSBbXTtcblxuICAgIC8vIGZpbmQgbWF0ZXJpYWxzXG4gICAgY29uc3QgJGxheW91dE1hdGVyaWFscyA9ICRsYXlvdXRSZWdpb24uZmluZCgnPltkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICRsYXlvdXRNYXRlcmlhbHMuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgY29uc3QgJGxheW91dE1hdGVyaWFsID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5wcm9jZXNzTGF5b3V0TWF0ZXJpYWwoJGxheW91dE1hdGVyaWFsLCBpdGVtLmlkLCBpdGVtLmRhdGEucmVnaW9uS2V5KTtcbiAgICAgIGNvbnN0IGxheW91dE1hdGVyaWFsSXRlbSA9IHJlc3VsdC5sYXlvdXRNYXRlcmlhbDtcbiAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnMuZm9yRWFjaChyZWdpb24gPT4ge1xuICAgICAgICB0ZW1wbGF0ZVJlZ2lvbnMucHVzaChyZWdpb24pO1xuICAgICAgfSk7XG4gICAgICBpdGVtLmNoaWxkcmVuLnB1c2gobGF5b3V0TWF0ZXJpYWxJdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBpdGVtLFxuICAgICAgdGVtcGxhdGVSZWdpb25zLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgcHJvY2Vzc0xheW91dE1hdGVyaWFsKCRsYXlvdXRNYXRlcmlhbCwgcHJlZml4LCByZWdpb25LZXkpIHtcbiAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gJGxheW91dE1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsSW5kZXgnKTtcbiAgICBjb25zdCBtYXRlcmlhbFBhdGggPSAkbGF5b3V0TWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxQYXRoJyk7XG4gICAgY29uc3QgaXRlbSA9IHtcbiAgICAgIHRleHQ6IGAke1xuICAgICAgICBtYXRlcmlhbFBhdGggPT09ICdjb3JlLmZyb250ZW5kLW1vbnN0ZXItY29yZS5nZW5lcmFsLmNvbnRlbnQtcGxhY2Vob2xkZXInXG4gICAgICAgICAgPyAnTWFpbiBFbnRpdHkgQ29udGVudCdcbiAgICAgICAgICA6IGBNYXRlcmlhbDogJHttYXRlcmlhbEluZGV4fWB9XG4gICAgICBgLFxuICAgICAgdHlwZTogJ21hdGVyaWFsJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6IGAke3ByZWZpeH0uJHttYXRlcmlhbEluZGV4fWAsXG4gICAgICAgIG1hdGVyaWFsSW5kZXgsXG4gICAgICAgIG1hdGVyaWFsUGF0aCxcbiAgICAgICAgZWRpdGFibGVLZXlzOiAkbGF5b3V0TWF0ZXJpYWwuZGF0YSgnZWRpdGFibGVLZXlzJyksXG4gICAgICAgIG5vZGU6ICRsYXlvdXRNYXRlcmlhbCxcbiAgICAgICAgcmVnaW9uS2V5LFxuICAgICAgICBlbnRpdHlUeXBlOiAnbGF5b3V0JyxcbiAgICAgIH0sXG4gICAgICBpZDogYHBzal8ke3ByZWZpeH0uJHttYXRlcmlhbEluZGV4fWAsXG4gICAgfTtcbiAgICBjb25zdCB0ZW1wbGF0ZVJlZ2lvbnMgPSBbXTtcbiAgICBjb25zdCAkcmVnaW9ucyA9ICRsYXlvdXRNYXRlcmlhbC5maW5kKCc+IC5tLW1vbnN0ZXItY29udGVudF9fY29udGVudCcpO1xuICAgICRyZWdpb25zLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5wcm9jZXNzVGVtcGxhdGVSZWdpb24oJCh0aGlzKSk7XG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnMucHVzaChyZXN1bHQpO1xuICAgIH0pO1xuICAgIGlmICh0ZW1wbGF0ZVJlZ2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgaXRlbS5kYXRhLmlzQ29udGVudCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBsYXlvdXRNYXRlcmlhbDogaXRlbSxcbiAgICAgIHRlbXBsYXRlUmVnaW9ucyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHByb2Nlc3NUZW1wbGF0ZVJlZ2lvbigkdGVtcGxhdGVSZWdpb24pIHtcbiAgICBjb25zdCBpdGVtID0gUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmV4dHJhY3RSZWdpb25EYXRhKCR0ZW1wbGF0ZVJlZ2lvbik7XG4gICAgaXRlbS5zdGF0ZSA9IHtcbiAgICAgIG9wZW5lZDogdHJ1ZSxcbiAgICB9O1xuICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICBpdGVtLmRhdGEuZW50aXR5RGVwZW5kZW50ID0gJHRlbXBsYXRlUmVnaW9uLmRhdGEoJ3JlZ2lvbkVudGl0eURlcGVuZGVudCcpID09PSAxO1xuXG4gICAgY29uc3QgcHJlZml4ID0gaXRlbS5kYXRhLmVudGl0eURlcGVuZGVudCA/ICdjb250ZW50JyA6ICd0ZW1wbGF0ZSc7XG4gICAgaXRlbS5kYXRhLmVudGl0eVR5cGUgPSBpdGVtLmRhdGEuZW50aXR5RGVwZW5kZW50ID8gJ2VudGl0eScgOiAndGVtcGxhdGUnO1xuICAgIGl0ZW0uZGF0YS5pZCA9IGAke3ByZWZpeH0udGVtcGxhdGVSZWdpb24uJHtpdGVtLmRhdGEucmVnaW9uS2V5fWA7XG4gICAgaXRlbS5pZCA9IGBwc2pfJHtpdGVtLmRhdGEuaWR9YDtcblxuICAgIGlmIChpdGVtLmRhdGEuZW50aXR5RGVwZW5kZW50KSB7XG4gICAgICBpdGVtLnR5cGUgPSAnY29udGVudFRlbXBsYXRlUmVnaW9uJztcbiAgICB9XG4gICAgY29uc3QgJHJlZ2lvbk1hdGVyaWFscyA9ICR0ZW1wbGF0ZVJlZ2lvbi5maW5kKCc+W2RhdGEtaXMtbWF0ZXJpYWxdJyk7XG4gICAgJHJlZ2lvbk1hdGVyaWFscy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCBtYXRlcmlhbCA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5wcm9jZXNzVGVtcGxhdGVSZWdpb25NYXRlcmlhbChcbiAgICAgICAgJCh0aGlzKSxcbiAgICAgICAgaXRlbS5kYXRhLmlkLFxuICAgICAgICBwcmVmaXhcbiAgICAgICk7XG4gICAgICBtYXRlcmlhbC5kYXRhLnJlZ2lvbktleSA9IGl0ZW0uZGF0YS5yZWdpb25LZXk7XG4gICAgICBtYXRlcmlhbC5pZCA9IGBwc2pfJHttYXRlcmlhbC5kYXRhLmlkfWA7XG4gICAgICBpdGVtLmNoaWxkcmVuLnB1c2gobWF0ZXJpYWwpO1xuICAgIH0pO1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgc3RhdGljIHByb2Nlc3NUZW1wbGF0ZVJlZ2lvbk1hdGVyaWFsKCRyZWdpb25NYXRlcmlhbCwgcHJlZml4LCBlbnRpdHlUeXBlKSB7XG4gICAgY29uc3QgbWF0ZXJpYWxJbmRleCA9ICRyZWdpb25NYXRlcmlhbC5kYXRhKCdtYXRlcmlhbEluZGV4Jyk7XG4gICAgY29uc3QgbWF0ZXJpYWxQYXRoID0gJHJlZ2lvbk1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsUGF0aCcpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBgTWF0ZXJpYWw6ICR7bWF0ZXJpYWxJbmRleH1gLFxuICAgICAgdHlwZTogJ21hdGVyaWFsJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6IGAke3ByZWZpeH0uJHttYXRlcmlhbEluZGV4fWAsXG4gICAgICAgIG1hdGVyaWFsSW5kZXgsXG4gICAgICAgIG1hdGVyaWFsUGF0aCxcbiAgICAgICAgZWRpdGFibGVLZXlzOiAkcmVnaW9uTWF0ZXJpYWwuZGF0YSgnZWRpdGFibGVLZXlzJyksXG4gICAgICAgIG5vZGU6ICRyZWdpb25NYXRlcmlhbCxcbiAgICAgICAgZW50aXR5VHlwZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBleHRyYWN0UmVnaW9uRGF0YSgkbm9kZSkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiAkbm9kZS5kYXRhKCdjb250ZW50RGVzY3JpcHRpb24nKSxcbiAgICAgIHR5cGU6ICd0ZW1wbGF0ZVJlZ2lvbicsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHJlZ2lvbklkOiAkbm9kZS5kYXRhKCdyZWdpb25JZCcpLFxuICAgICAgICByZWdpb25LZXk6ICRub2RlLmRhdGEoJ3JlZ2lvbktleScpLFxuICAgICAgICB1bmlxdWVDb250ZW50SWQ6ICRub2RlLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpLFxuICAgICAgICBub2RlOiAkbm9kZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHNlcmlhbGl6ZVBhZ2UoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5yZWdpb25zU3RydWN0dXJlKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICBjb25zdCByZWdpb24gPSB0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmVbcmVnaW9uS2V5XTtcbiAgICAgIHJlc3VsdFtyZWdpb24ua2V5XSA9IHJlZ2lvbi5zZXJpYWxpemUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgbWF0ZXJpYWxzQnlSZWdpb25zKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMucmVnaW9uc1N0cnVjdHVyZSkuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgY29uc3QgcmVnaW9uID0gdGhpcy5yZWdpb25zU3RydWN0dXJlW3JlZ2lvbktleV07XG4gICAgICByZXN1bHRbcmVnaW9uLmtleV0gPSByZWdpb24ubWF0ZXJpYWxzRGVjbCgpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9QYWdlU3RydWN0dXJlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcblxufVxuZXhwb3J0IGRlZmF1bHQgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1NpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdW5pcWlkIChwcmVmaXgsIG1vcmVFbnRyb3B5KSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvdW5pcWlkL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gIHJldmlzZWQgYnk6IEthbmtyZWx1bmUgKGh0dHA6Ly93d3cud2ViZmFrdG9yeS5pbmZvLylcbiAgLy8gICAgICBub3RlIDE6IFVzZXMgYW4gaW50ZXJuYWwgY291bnRlciAoaW4gbG9jdXR1cyBnbG9iYWwpIHRvIGF2b2lkIGNvbGxpc2lvblxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRpZCA9IHVuaXFpZCgpXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJHJlc3VsdCA9ICRpZC5sZW5ndGggPT09IDEzXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiB2YXIgJGlkID0gdW5pcWlkKCdmb28nKVxuICAvLyAgIGV4YW1wbGUgMjogdmFyICRyZXN1bHQgPSAkaWQubGVuZ3RoID09PSAoMTMgKyAnZm9vJy5sZW5ndGgpXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgJGlkID0gdW5pcWlkKCdiYXInLCB0cnVlKVxuICAvLyAgIGV4YW1wbGUgMzogdmFyICRyZXN1bHQgPSAkaWQubGVuZ3RoID09PSAoMjMgKyAnYmFyJy5sZW5ndGgpXG4gIC8vICAgcmV0dXJucyAzOiB0cnVlXG5cbiAgaWYgKHR5cGVvZiBwcmVmaXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcHJlZml4ID0gJydcbiAgfVxuXG4gIHZhciByZXRJZFxuICB2YXIgX2Zvcm1hdFNlZWQgPSBmdW5jdGlvbiAoc2VlZCwgcmVxV2lkdGgpIHtcbiAgICBzZWVkID0gcGFyc2VJbnQoc2VlZCwgMTApLnRvU3RyaW5nKDE2KSAvLyB0byBoZXggc3RyXG4gICAgaWYgKHJlcVdpZHRoIDwgc2VlZC5sZW5ndGgpIHtcbiAgICAgIC8vIHNvIGxvbmcgd2Ugc3BsaXRcbiAgICAgIHJldHVybiBzZWVkLnNsaWNlKHNlZWQubGVuZ3RoIC0gcmVxV2lkdGgpXG4gICAgfVxuICAgIGlmIChyZXFXaWR0aCA+IHNlZWQubGVuZ3RoKSB7XG4gICAgICAvLyBzbyBzaG9ydCB3ZSBwYWRcbiAgICAgIHJldHVybiBBcnJheSgxICsgKHJlcVdpZHRoIC0gc2VlZC5sZW5ndGgpKS5qb2luKCcwJykgKyBzZWVkXG4gICAgfVxuICAgIHJldHVybiBzZWVkXG4gIH1cblxuICB2YXIgJGdsb2JhbCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IEdMT0JBTClcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge31cbiAgdmFyICRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1c1xuICAkbG9jdXR1cy5waHAgPSAkbG9jdXR1cy5waHAgfHwge31cblxuICBpZiAoISRsb2N1dHVzLnBocC51bmlxaWRTZWVkKSB7XG4gICAgLy8gaW5pdCBzZWVkIHdpdGggYmlnIHJhbmRvbSBpbnRcbiAgICAkbG9jdXR1cy5waHAudW5pcWlkU2VlZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDB4NzViY2QxNSlcbiAgfVxuICAkbG9jdXR1cy5waHAudW5pcWlkU2VlZCsrXG5cbiAgLy8gc3RhcnQgd2l0aCBwcmVmaXgsIGFkZCBjdXJyZW50IG1pbGxpc2Vjb25kcyBoZXggc3RyaW5nXG4gIHJldElkID0gcHJlZml4XG4gIHJldElkICs9IF9mb3JtYXRTZWVkKHBhcnNlSW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCwgMTApLCA4KVxuICAvLyBhZGQgc2VlZCBoZXggc3RyaW5nXG4gIHJldElkICs9IF9mb3JtYXRTZWVkKCRsb2N1dHVzLnBocC51bmlxaWRTZWVkLCA1KVxuICBpZiAobW9yZUVudHJvcHkpIHtcbiAgICAvLyBmb3IgbW9yZSBlbnRyb3B5IHdlIGFkZCBhIGZsb2F0IGxvd2VyIHRvIDEwXG4gICAgcmV0SWQgKz0gKE1hdGgucmFuZG9tKCkgKiAxMCkudG9GaXhlZCg4KS50b1N0cmluZygpXG4gIH1cblxuICByZXR1cm4gcmV0SWRcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzXG4gKiovIiwiY2xhc3MgRGF0YVByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IoY2xhc3NOYW1lLCBwcm92aWRlZEtleXMpIHtcbiAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB0aGlzLnByb3ZpZGVkS2V5cyA9IHByb3ZpZGVkS2V5cztcbiAgICB0aGlzLmFzc29jaWF0aW9ucyA9IHt9O1xuICAgIHRoaXMuYXNzb2NpYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge0VkaXRhYmxlfVxuICAgKi9cbiAgc3RhdGljIGdldCBlZGl0YWJsZSgpIHtcbiAgICByZXR1cm4gd2luZG93LkZyb250ZW5kTW9uc3Rlci5WaXN1YWxGcmFtZS5lZGl0YWJsZTtcbiAgfVxuXG4gIGFzc29jaWF0ZSgpIHtcbiAgICB0aGlzLmFzc29jaWF0aW9ucyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMucHJvdmlkZWRLZXlzKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICBjb25zdCByZWdpb24gPSB0aGlzLnByb3ZpZGVkS2V5c1tyZWdpb25LZXldO1xuICAgICAgY29uc3QgJHJlZ2lvbiA9ICQoYFtkYXRhLXJlZ2lvbi1rZXk9XCIke3JlZ2lvbktleX1cIl1gKS5maXJzdCgpO1xuICAgICAgLy8gY29uc29sZS5sb2coYCVjUmVnaW9uOiAke3JlZ2lvbktleX1gLCAnY29sb3I6IHJlZDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGJhY2tncm91bmQ6ICMzMzMnKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlZ2lvbik7XG4gICAgICBjb25zdCBtYXRlcmlhbHMgPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKHJlZ2lvbikuZm9yRWFjaChtYXRlcmlhbEtleSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFLZXlzID0gcmVnaW9uW21hdGVyaWFsS2V5XTtcbiAgICAgICAgY29uc3QgJG1hdGVyaWFsID0gJHJlZ2lvbi5maW5kKGBbZGF0YS1tYXRlcmlhbC1pbmRleD1cIiR7bWF0ZXJpYWxLZXl9XCJdYCkuZmlyc3QoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCVjTWF0ZXJpYWw6ICR7bWF0ZXJpYWxLZXl9YCwgJ2NvbG9yOiAjZmZmOyBmb250LXdlaWdodDogYm9sZDsgYmFja2dyb3VuZDogIzY5ZicpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygkbWF0ZXJpYWwpO1xuICAgICAgICBpZiAoJG1hdGVyaWFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBtYXRlcmlhbHNbbWF0ZXJpYWxLZXldID0ge1xuICAgICAgICAgIGRhdGFLZXlzLFxuICAgICAgICAgICRtYXRlcmlhbCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxFZGl0YWJsZUtleXMgPSAkbWF0ZXJpYWwuZGF0YSgnZWRpdGFibGVLZXlzJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZU1hdGVyaWFsRWRpdChtYXRlcmlhbEVkaXRhYmxlS2V5cywgJG1hdGVyaWFsLCBkYXRhS2V5cyk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYXNzb2NpYXRpb25zW3JlZ2lvbktleV0gPSB7XG4gICAgICAgICRyZWdpb24sXG4gICAgICAgIG1hdGVyaWFscyxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXplTWF0ZXJpYWxFZGl0KG1hdGVyaWFsRWRpdGFibGVLZXlzLCAkcm9vdCwgZGF0YUtleXMsIHByZWZpeCA9ICcnKSB7XG4gICAgZGF0YUtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3Qgb2JqID0gbWF0ZXJpYWxFZGl0YWJsZUtleXNba2V5XSB8fCAnTk9fU1VDSF9LRVknO1xuICAgICAgaWYgKG9iaiA9PT0gJ05PX1NVQ0hfS0VZJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob2JqID09PSBPYmplY3Qob2JqKSkge1xuICAgICAgICAvLyBpdCdzIHJlY3Vyc2l2ZVxuICAgICAgICAvLyBmaXJzdCAtIGZpbmQgYWxsIGJsb2Nrc1xuICAgICAgICBjb25zdCAkYmxvY2tzID0gJHJvb3QuZmluZChgW2RhdGEtcmVjdXJzaXZlLWl0ZW09XCIke2tleX1cIl1gKTtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgJGJsb2Nrcy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAlYyBSZWN1cnNpdmUgaXRlbSAke2tleX0gIyR7Y291bnRlcn1gLCAnYmFja2dyb3VuZDogIzIyMjsgY29sb3I6ICNiYWRhNTUnKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgICAgICB0aGF0LmluaXRpYWxpemVNYXRlcmlhbEVkaXQob2JqLCAkdGhpcywgT2JqZWN0LmtleXMob2JqKSwgJ2l0ZW0uJyk7XG4gICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGl0J3MgcGxhaW4gZmllbGRcbiAgICAgICAgY29uc3QgJG5vZGUgPSAkcm9vdC5maW5kKGBbZGF0YS1lZGl0YWJsZS1rZXk9XCIke3ByZWZpeH0ke2tleX1cIl1gKS5maXJzdCgpO1xuICAgICAgICBpZiAoJG5vZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIERhdGFQcm92aWRlci5lZGl0YWJsZS5pbml0aWFsaXplRWRpdGFibGUoJG5vZGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgJWMgUGxhaW4gZmllbGQgZWRpdGFibGUgJHtwcmVmaXh9JHtrZXl9YCwgJ2JhY2tncm91bmQ6ICMyMjI7IGNvbG9yOiAjYmFkYTU1Jyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCRub2RlWzBdLm91dGVySFRNTCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIHNlcmlhbGl6ZUtleXMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5hc3NvY2lhdGlvbnMpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMuYXNzb2NpYXRpb25zW3JlZ2lvbktleV07XG4gICAgICBjb25zdCAkcmVnaW9uID0gcmVnaW9uLiRyZWdpb247XG4gICAgICByZXN1bHRbcmVnaW9uS2V5XSA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMocmVnaW9uLm1hdGVyaWFscykuZm9yRWFjaChtYXRlcmlhbEtleSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFLZXlzID0gcmVnaW9uLm1hdGVyaWFsc1ttYXRlcmlhbEtleV0uZGF0YUtleXM7XG4gICAgICAgIGNvbnN0ICRtYXRlcmlhbCA9IHJlZ2lvbi5tYXRlcmlhbHNbbWF0ZXJpYWxLZXldLiRtYXRlcmlhbDtcbiAgICAgICAgcmVzdWx0W3JlZ2lvbktleV1bbWF0ZXJpYWxLZXldID0gdGhpcy5zZXJpYWxpemVNYXRlcmlhbChcbiAgICAgICAgICByZWdpb25LZXksXG4gICAgICAgICAgbWF0ZXJpYWxLZXksXG4gICAgICAgICAgZGF0YUtleXMsXG4gICAgICAgICAgJHJlZ2lvbixcbiAgICAgICAgICAkbWF0ZXJpYWxcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzTmFtZSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmZpbGxDb25maWcoZGF0YSk7XG4gIH1cblxuICBmaWxsQ29uZmlnKGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHNlcmlhbGl6ZU1hdGVyaWFsKHJlZ2lvbktleSwgbWF0ZXJpYWxLZXksIGRhdGFLZXlzLCAkcmVnaW9uLCAkbWF0ZXJpYWwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhUHJvdmlkZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlci5qc1xuICoqLyIsImltcG9ydCBTdGF0aWNDb250ZW50IGZyb20gJy4vcHJvdmlkZXJzL1N0YXRpY0NvbnRlbnQnO1xuXG5jbGFzcyBEYXRhUHJvdmlkZXJGYWN0b3J5IHtcbiAgc3RhdGljIGZhY3RvcnkocHJvdmlkZXJEZWNsLCBwcm92aWRlZEtleXMpIHtcbiAgICBsZXQgcHJvdmlkZXIgPSBudWxsO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHByb3ZpZGVyRGVjbC5jbGFzc05hbWVcbiAgICAgIHx8ICdEb3RQbGFudFxcXFxNb25zdGVyXFxcXERhdGFFbnRpdHlcXFxcU3RhdGljQ29udGVudFByb3ZpZGVyJztcbiAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuICAgICAgY2FzZSAnRG90UGxhbnRcXFxcTW9uc3RlclxcXFxEYXRhRW50aXR5XFxcXFN0YXRpY0NvbnRlbnRQcm92aWRlcic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBwcm92aWRlciA9IG5ldyBTdGF0aWNDb250ZW50KHByb3ZpZGVkS2V5cyk7XG4gICAgfVxuICAgIHJldHVybiBwcm92aWRlcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhUHJvdmlkZXJGYWN0b3J5O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXJGYWN0b3J5LmpzXG4gKiovIiwiaW1wb3J0IGFsbEVkaXRhYmxlcyBmcm9tICcuL2VkaXRhYmxlcy9hbGwnO1xuXG5jbGFzcyBFZGl0YWJsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZWRpdGFibGVzQnlUeXBlID0ge307XG4gICAgLy8gaW5pdGlhbGl6ZSBiYXNlIGJ1aWxkLWluIGVkaXRhYmxlc1xuICAgIGFsbEVkaXRhYmxlcygpO1xuICAgIHRoaXMuZWRpdGFibGVzQnlUeXBlID0gd2luZG93Lk1PTlNURVJfRURJVEFCTEVTO1xuICB9XG5cbiAgc2VyaWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBjb25zdCBlZGl0YWJsZSA9ICRub2RlLmRhdGEoJ2VkaXRhYmxlUGFyYW1zJyk7XG4gICAgaWYgKHR5cGVvZihlZGl0YWJsZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCB0eXBlID0gZWRpdGFibGUuaGFzT3duUHJvcGVydHkoJ3R5cGUnKSA/IGVkaXRhYmxlLnR5cGUgOiAnc3RyaW5nJztcbiAgICBpZiAodGhpcy5lZGl0YWJsZXNCeVR5cGUuaGFzT3duUHJvcGVydHkodHlwZSkgPT09IGZhbHNlKSB7XG4gICAgICB0eXBlID0gJ3N0cmluZyc7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwb3J0VmFyaWFibGUgPSBlZGl0YWJsZS5oYXNPd25Qcm9wZXJ0eSgndGFyZ2V0JykgPyBlZGl0YWJsZS50YXJnZXQgOiAnZGF0YSc7XG5cbiAgICByZXR1cm4gdGhpcy5lZGl0YWJsZXNCeVR5cGVbdHlwZV0uc2VyaWFsaXplTm9kZSgkbm9kZSwgZXhwb3J0VmFyaWFibGUpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3QgdHlwZSA9ICRub2RlLmRhdGEoJ2VkaXRhYmxlLXR5cGUnKSB8fCAndW5lZGl0YWJsZSc7XG4gICAgaWYgKHR5cGUgPT09ICd1bmVkaXRhYmxlJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdGFibGUgPSB0aGlzLmVkaXRhYmxlc0J5VHlwZVt0eXBlXSB8fCB0aGlzLmVkaXRhYmxlc0J5VHlwZS5zdHJpbmc7XG4gICAgcmV0dXJuIGVkaXRhYmxlLmluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdGFibGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0VkaXRhYmxlLmpzXG4gKiovIiwiY2xhc3MgSGFzaEFwaSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZnVuY3Rpb25DYWxscyA9IHt9O1xuXG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBkb2N1bWVudC5sb2NhdGlvbi5oYXNoLm1hdGNoKC8jaGFzaEFwaTooLio/KTpcXC9oYXNoQXBpLyk7XG4gICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBjb25zdCBmdW5jdGlvbkNhbGxzID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQobWF0Y2hlc1sxXSkpO1xuXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBmdW5jdGlvbkNhbGxzKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uZnVuYykge1xuICAgICAgICAgICAgdGhpcy5mdW5jdGlvbkNhbGxzW2l0ZW0uZnVuY10gPSBpdGVtLmFyZ3MgfHwge307XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2hvdWxkQ2FsbChmdW5jKSB7XG4gICAgcmV0dXJuIHRoaXMuZnVuY3Rpb25DYWxsc1tmdW5jXSB8fCBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIYXNoQXBpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9IYXNoQXBpLmpzXG4gKiovIiwiaW1wb3J0IEZyYW1lQXBpIGZyb20gJy4vRnJhbWVBcGknO1xuaW1wb3J0IHVuaXF1ZUlkIGZyb20gJy4vLi4vdW5pcWlkJztcbmltcG9ydCBEYXRhUHJvdmlkZXJGYWN0b3J5IGZyb20gJy4vRGF0YVByb3ZpZGVyRmFjdG9yeSc7XG5pbXBvcnQgRWRpdGFibGUgZnJvbSAnLi9FZGl0YWJsZSc7XG5cbmNsYXNzIFZpc3VhbEZyYW1lXG57XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFyYW1zKCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIEZyYW1lQXBpLmJpbmRNZXNzYWdlTGlzdGVuZXIodGhpcyk7XG4gICAgdGhpcy5wYWdlU3RydWN0dXJlSnNvbkRhdGEgPSBudWxsO1xuICAgIC8qIGdsb2JhbCB3aW5kb3c6ZmFsc2UgKi9cbiAgICB0aGlzLnBhcmVudFdpbmRvdyA9IHdpbmRvdy5wYXJlbnQ7XG4gICAgLyoqIEB2YXIgRnJvbnRlbmRNb25zdGVyICovXG4gICAgdGhpcy5wYXJlbnRNb25zdGVyID0gdGhpcy5wYXJlbnRXaW5kb3cuRnJvbnRlbmRNb25zdGVyO1xuICAgIHRoaXMucGFyZW50QnVpbGRlciA9IHRoaXMucGFyZW50TW9uc3Rlci5idWlsZGVyO1xuICAgIHRoaXMuY3VycmVudE1vbnN0ZXJDb250ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5lZGl0YWJsZSA9IG5ldyBFZGl0YWJsZSgpO1xuICAgIC8vIHRoaXMubWFrZUl0TW92ZSgpO1xuICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVIYW5kbGVycygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgJCgoKSA9PiB7XG4gICAgICB0aGlzLnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAgIHRoaXMuaW5pdFByb3ZpZGVycygpO1xuICAgIH0pO1xuICAgIHRoaXMuTW9uc3RlckVkaXREYXRhID0gd2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEE7XG4gIH1cblxuICBpbml0UHJvdmlkZXJzKCkge1xuICAgIHRoaXMucHJvdmlkZXJzID0ge1xuICAgICAgbGF5b3V0OiB0aGlzLmdldFByb3ZpZGVycyh0aGlzLk1vbnN0ZXJFZGl0RGF0YS5sYXlvdXQpLFxuICAgICAgdGVtcGxhdGU6IHRoaXMuZ2V0UHJvdmlkZXJzKHRoaXMuTW9uc3RlckVkaXREYXRhLnRlbXBsYXRlKSxcbiAgICAgIGVudGl0eTogdGhpcy5nZXRQcm92aWRlcnModGhpcy5Nb25zdGVyRWRpdERhdGEuZW50aXR5KSxcbiAgICB9O1xuICB9XG5cbiAgc2V0IHBhZ2VTdHJ1Y3R1cmVKc29uKHZhbHVlKSB7XG4gICAgdGhpcy5wYWdlU3RydWN0dXJlSnNvbkRhdGEgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBwYWdlU3RydWN0dXJlSnNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlU3RydWN0dXJlSnNvbkRhdGE7XG4gIH1cblxuICBnZXRQcm92aWRlcnMoYXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXMoYXJyLnByb3ZpZGVycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3QgcHJvdmlkZXJEZWNsID0gYXJyLnByb3ZpZGVyc1trZXldO1xuICAgICAgcmVzdWx0W2tleV0gPSBEYXRhUHJvdmlkZXJGYWN0b3J5LmZhY3RvcnkoXG4gICAgICAgIHByb3ZpZGVyRGVjbCxcbiAgICAgICAgYXJyLnByb3ZpZGVkS2V5c1trZXldIHx8IHt9XG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXQgJG1vbnN0ZXJDb250ZW50KCkge1xuICAgIGlmICh0aGlzLiRtb25zdGVyQ29udGVudENhY2hlKSB7XG4gICAgICByZXR1cm4gdGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZTtcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpO1xuICAgIHJldHVybiB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlO1xuICB9XG5cbiAgcmVmcmVzaE1vbnN0ZXJDb250ZW50Q2FjaGUoKSB7XG4gICAgdGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZSA9IHt9O1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICQodGhpcy5zZXR0aW5nc1snbW9uc3Rlci1jb250ZW50LXNlbGVjdG9yJ10pLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGlmICghdGhhdC5jdXJyZW50TW9uc3RlckNvbnRlbnQpIHtcbiAgICAgICAgdGhhdC5jdXJyZW50TW9uc3RlckNvbnRlbnQgPSAkKHRoaXMpLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpO1xuICAgICAgfVxuICAgICAgdGhhdC4kbW9uc3RlckNvbnRlbnRDYWNoZVskKHRoaXMpLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpXSA9ICQodGhpcyk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVIYW5kbGVycygpIHtcbiAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCAmJiB0aGlzLiRoYW5kbGVycykge1xuICAgICAgdGhpcy4kaGFuZGxlcnMuY3NzKFxuICAgICAgICAndG9wJyxcbiAgICAgICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5wb3NpdGlvbigpLnRvcFxuICAgICAgICAgICsgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5oZWlnaHQoKVxuICAgICAgICAgIC0gdGhpcy4kaGFuZGxlcnMuaGVpZ2h0KClcbiAgICAgICk7XG4gICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0TWF0ZXJpYWwoJG1hdGVyaWFsKSB7XG4gICAgaWYgKHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwgPT09ICRtYXRlcmlhbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICB9XG4gICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCA9ICRtYXRlcmlhbDtcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgdGhpcy4kaGFuZGxlcnMuc2hvdygpO1xuICB9XG5cbiAgc2VyaWFsaXplQ29udGVudChjYWxsYmFjaykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuJG1vbnN0ZXJDb250ZW50KS5mb3JFYWNoKHVuaXF1ZUNvbnRlbnRJZCA9PiB7XG4gICAgICBjb25zdCAkbW9uc3RlciA9IHRoaXMuJG1vbnN0ZXJDb250ZW50W3VuaXF1ZUNvbnRlbnRJZF07XG4gICAgICByZXN1bHRbJG1vbnN0ZXIuZGF0YSgndW5pcXVlQ29udGVudElkJyldID0gdGhhdC5zZXJpYWxpemVVbmlxdWVDb250ZW50KCRtb25zdGVyKTtcbiAgICB9KTtcbiAgICB0aGlzLnNlbmRUb0J1aWxkZXIoY2FsbGJhY2ssIFtyZXN1bHRdKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZVVuaXF1ZUNvbnRlbnQoJG1vbnN0ZXJDb250ZW50KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgcmVzdWx0LnVuaXF1ZUNvbnRlbnRJZCA9ICRtb25zdGVyQ29udGVudC5kYXRhKCd1bmlxdWVDb250ZW50SWQnKTtcbiAgICByZXN1bHQubWF0ZXJpYWxzID0ge307XG4gICAgJG1vbnN0ZXJDb250ZW50LmZpbmQoJ1tkYXRhLWlzLW1hdGVyaWFsPVxcJzFcXCddJykuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgY29uc3QgbWF0ZXJpYWwgPSB7fTtcbiAgICAgIG1hdGVyaWFsLmJsb2NrID0gJCh0aGlzKS5kYXRhKCdtYXRlcmlhbEJsb2NrJyk7XG4gICAgICByZXN1bHQubWF0ZXJpYWxzWyQodGhpcykuZGF0YSgnbWF0ZXJpYWxJbmRleCcpXSA9IG1hdGVyaWFsO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBWaXN1YWxGcmFtZSBzZXR0aW5ncy5cbiAgICogVXNlcyBWaXN1YWxGcmFtZVNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAqL1xuICBwYXJhbXMoKSB7XG4gICAgY29uc3QgdXNlclNldHRpbmdzID0gd2luZG93LlZpc3VhbEZyYW1lU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICAnbW9uc3Rlci1jb250ZW50LXNlbGVjdG9yJzogJy5tLW1vbnN0ZXItY29udGVudF9fY29udGVudCcsXG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyh1c2VyU2V0dGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICB9KTtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIH1cblxuICBzZW5kVG9CdWlsZGVyKGZ1bmMsIGFyZ3MpIHtcbiAgICBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLnBhcmVudFdpbmRvdywgZnVuYywgYXJncyk7XG4gIH1cblxuICBzdGF0aWMgZm9ybVN1Ym1pdChkYXRhKSB7XG4gICAgY29uc3QgJGZvcm0gPSAkKCc8Zm9ybSBtZXRob2Q9XCJQT1NUXCI+PC9mb3JtPicpO1xuICAgIGNvbnN0ICRpbnB1dCA9ICQoJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9fanNvblwiPicpO1xuICAgIGNvbnN0ICRjc3JmID0gJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIj4nKTtcblxuICAgICRjc3JmXG4gICAgICAuYXR0cignbmFtZScsICQoJ21ldGFbbmFtZT1jc3JmLXBhcmFtXScpLmF0dHIoJ2NvbnRlbnQnKSlcbiAgICAgIC52YWwoJCgnbWV0YVtuYW1lPWNzcmYtdG9rZW5dJykuYXR0cignY29udGVudCcpKVxuICAgICAgLmFwcGVuZFRvKCRmb3JtKTtcblxuICAgICRpbnB1dFxuICAgICAgLnZhbChKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICAgIC5hcHBlbmRUbygkZm9ybSk7XG5cbiAgICAkZm9ybVswXS5zdWJtaXQoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdFRlbXBsYXRlRGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvdmlkZXJzRW50aXRpZXM6IHRoaXMucGFyZW50QnVpbGRlci5zZXJpYWxpemUoKSxcbiAgICAgIHJlZ2lvbnNNYXRlcmlhbHM6IHRoaXMucGFyZW50QnVpbGRlclxuICAgICAgICAuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKS5tYXRlcmlhbHNCeVJlZ2lvbnMoKSxcbiAgICB9O1xuICB9XG5cbiAgbmV3QmxvY2sobWF0ZXJpYWxOYW1lLCBzZWxlY3RlZEVudGl0eSwgcmVnaW9uTmFtZSkge1xuICAgIC8vIEB0b2RvIEFkZCBsb2FkZXIgaGVyZSBhcyB3ZSBhcmUgdXNpbmcgZm9ybSBwb3N0ICFcbiAgICBjb25zdCByYW5kb21JbmRleCA9IHVuaXF1ZUlkKCdtYXQnKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5pdGVyYXRlVGVtcGxhdGVUeXBlKHRoaXMucGFnZVN0cnVjdHVyZUpzb24pO1xuICAgIGlmIChzZWxlY3RlZEVudGl0eSA9PT0gJ2VudGl0eScpIHtcbiAgICAgIGRhdGEuZW50aXR5Lm1hdGVyaWFsc0J5UmVnaW9uRGVjbFtyZWdpb25OYW1lXS5kZWNsW3JhbmRvbUluZGV4XSA9IHtcbiAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsTmFtZSxcbiAgICAgIH07XG4gICAgICBkYXRhLmVudGl0eS5tYXRlcmlhbHNCeVJlZ2lvbkRlY2xbcmVnaW9uTmFtZV0ubWF0ZXJpYWxzT3JkZXIucHVzaChyYW5kb21JbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGFbc2VsZWN0ZWRFbnRpdHldLnRlbXBsYXRlUmVnaW9uc1tyZWdpb25OYW1lXS5tYXRlcmlhbHNEZWNscy5kZWNsW3JhbmRvbUluZGV4XSA9IHtcbiAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsTmFtZSxcbiAgICAgIH07XG4gICAgICBkYXRhW3NlbGVjdGVkRW50aXR5XS50ZW1wbGF0ZVJlZ2lvbnNbcmVnaW9uTmFtZV0ubWF0ZXJpYWxzRGVjbHMubWF0ZXJpYWxzT3JkZXIucHVzaChyYW5kb21JbmRleCk7XG4gICAgfVxuICAgIGRhdGEuYWN0aW9uID0gJ3ByZXZpZXcnO1xuICAgIFZpc3VhbEZyYW1lLmZvcm1TdWJtaXQoZGF0YSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLml0ZXJhdGVUZW1wbGF0ZVR5cGUodGhpcy5wYWdlU3RydWN0dXJlSnNvbik7XG4gICAgZGF0YS5hY3Rpb24gPSAnc2F2ZSc7XG4gICAgVmlzdWFsRnJhbWUuZm9ybVN1Ym1pdChkYXRhKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpdGVyYXRlVGVtcGxhdGVUeXBlKGFycikge1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGVudGl0eToge1xuICAgICAgICBtYXRlcmlhbHNCeVJlZ2lvbkRlY2w6IHt9LFxuICAgICAgICBwcm92aWRlcnM6IHt9LFxuICAgICAgfSxcbiAgICB9O1xuICAgIGFyci5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBvYmouZGF0YS5pZDtcbiAgICAgIGNvbnN0IHJlZ2lvbnNSZXN1bHQgPSBWaXN1YWxGcmFtZS5pdGVyYXRlVGVtcGxhdGVSZWdpb25zKG9iai5jaGlsZHJlbik7XG4gICAgICAvLyBsYXlvdXQgb3IgdGVtcGxhdGVcbiAgICAgIHJlc3VsdFtrZXldID0ge1xuICAgICAgICB0ZW1wbGF0ZVJlZ2lvbnM6IHJlZ2lvbnNSZXN1bHQudGVtcGxhdGVSZWdpb25zLFxuICAgICAgICB0ZW1wbGF0ZVJlZ2lvbnNPcmRlcjogcmVnaW9uc1Jlc3VsdC50ZW1wbGF0ZVJlZ2lvbnNPcmRlcixcbiAgICAgICAgdGVtcGxhdGVJZDogb2JqLmRhdGEudGVtcGxhdGVJZCxcbiAgICAgICAgcHJvdmlkZXJzOiB7fSxcbiAgICAgIH07XG4gICAgICBpZiAoT2JqZWN0LmtleXMocmVnaW9uc1Jlc3VsdC5lbnRpdHlNYXRlcmlhbHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgT2JqZWN0LmtleXMocmVnaW9uc1Jlc3VsdC5lbnRpdHlNYXRlcmlhbHMpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgICAgICByZXN1bHQuZW50aXR5Lm1hdGVyaWFsc0J5UmVnaW9uRGVjbFtyZWdpb25LZXldID0gcmVnaW9uc1Jlc3VsdC5lbnRpdHlNYXRlcmlhbHNbcmVnaW9uS2V5XTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXN1bHRba2V5XS5wcm92aWRlcnMgPSB0aGlzLnNlcmlhbGl6ZVByb3ZpZGVycyhrZXkpO1xuICAgIH0pO1xuICAgIHJlc3VsdC5lbnRpdHkucHJvdmlkZXJzID0gdGhpcy5zZXJpYWxpemVQcm92aWRlcnMoJ2VudGl0eScpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzZXJpYWxpemVQcm92aWRlcnModHlwZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMucHJvdmlkZXJzW3R5cGVdKS5mb3JFYWNoKHByb3ZpZGVyS2V5ID0+IHtcbiAgICAgIHJlc3VsdFtwcm92aWRlcktleV0gPSB0aGlzLnByb3ZpZGVyc1t0eXBlXVtwcm92aWRlcktleV0uc2VyaWFsaXplKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBpdGVyYXRlVGVtcGxhdGVSZWdpb25zKGFycikge1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIHRlbXBsYXRlUmVnaW9uczoge30sXG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnNPcmRlcjogW10sXG4gICAgICBlbnRpdHlNYXRlcmlhbHM6IHt9LFxuICAgIH07XG4gICAgYXJyLmZvckVhY2gob2JqID0+IHtcbiAgICAgIC8vIGNvbnN0IGtleSA9IG9iai5kYXRhLmlkLnJlcGxhY2UoL14uKlxcLi8sICcnKTtcbiAgICAgIGNvbnN0IHJlZ2lvbktleSA9IG9iai5kYXRhLnJlZ2lvbktleTtcbiAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnNPcmRlci5wdXNoKHJlZ2lvbktleSk7XG4gICAgICBjb25zdCBlbnRpdHlEZXBlbmRlbnQgPSBvYmouZGF0YS5lbnRpdHlEZXBlbmRlbnQgfHwgZmFsc2U7XG5cbiAgICAgIGNvbnN0IHJlZ2lvbk1hdGVyaWFscyA9IFZpc3VhbEZyYW1lLml0ZXJhdGVNYXRlcmlhbHMob2JqLmNoaWxkcmVuLCByZWdpb25LZXkpO1xuXG4gICAgICBpZiAoZW50aXR5RGVwZW5kZW50ID09PSBmYWxzZSkge1xuICAgICAgICAvLyB0aGlzIGlzIGFuIGV4YWN0IHRlbXBsYXRlIHJlZ2lvblxuICAgICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zW3JlZ2lvbktleV0gPSB7XG4gICAgICAgICAgcmVnaW9uSWQ6IG9iai5kYXRhLnJlZ2lvbklkLFxuICAgICAgICAgIHJlZ2lvbktleSxcbiAgICAgICAgICB1bmlxdWVDb250ZW50SWQ6IG9iai5kYXRhLnVuaXF1ZUNvbnRlbnRJZCxcbiAgICAgICAgICBtYXRlcmlhbHNEZWNsczogcmVnaW9uTWF0ZXJpYWxzLFxuICAgICAgICAgIGVudGl0eURlcGVuZGVudCxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnNbcmVnaW9uS2V5XSA9IHtcbiAgICAgICAgICByZWdpb25JZDogb2JqLmRhdGEucmVnaW9uSWQsXG4gICAgICAgICAgcmVnaW9uS2V5LFxuICAgICAgICAgIHVuaXF1ZUNvbnRlbnRJZDogb2JqLmRhdGEudW5pcXVlQ29udGVudElkLFxuICAgICAgICAgIGVudGl0eURlcGVuZGVudCxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdGhpcyBpcyBlbnRpdHktZGVwZW5kZW50IHJlZ2lvblxuICAgICAgICByZXN1bHQuZW50aXR5TWF0ZXJpYWxzW3JlZ2lvbktleV0gPSByZWdpb25NYXRlcmlhbHM7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGl0ZXJhdGVNYXRlcmlhbHMoYXJyLCByZWdpb25LZXkpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBkZWNsOiB7fSxcbiAgICAgIG1hdGVyaWFsc09yZGVyOiBbXSxcbiAgICB9O1xuICAgIGFyci5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBvYmouZGF0YS5tYXRlcmlhbEluZGV4O1xuICAgICAgcmVzdWx0LmRlY2xba2V5XSA9IHtcbiAgICAgICAgLy8gZWRpdGFibGVzS2V5czogb2JqLmRhdGEuZWRpdGFibGVLZXlzLFxuICAgICAgICBtYXRlcmlhbDogb2JqLmRhdGEubWF0ZXJpYWxQYXRoLFxuICAgICAgfTtcbiAgICAgIHJlc3VsdC5tYXRlcmlhbHNPcmRlci5wdXNoKGtleSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaXN1YWxGcmFtZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgV1lTSVdZRyBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gQmFzZUVkaXRhYmxlLmZyYW1lJCgkbm9kZSk7XG4gICAgY29uc3QgZWRpdG9yID0gbm9kZS5kYXRhKCdlZGl0b3InKTtcbiAgICBpZiAoZWRpdG9yKSB7XG4gICAgICByZXR1cm4gZWRpdG9yLmdldERhdGEoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUuaHRtbCgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9ICRub2RlWzBdO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGF1dG9QYXJhZ3JhcGg6IGZhbHNlLFxuICAgICAgZW5hYmxlQ29udGVudEVkaXRhYmxlOiB0cnVlLFxuICAgICAgaWdub3JlRW1wdHlQYXJhZ3JhcGg6IHRydWUsXG4gICAgICBlbnRlck1vZGU6IHdpbmRvdy5DS0VESVRPUi5FTlRFUl9CUixcbiAgICB9O1xuICAgIC8vICQoKCkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gd2luZG93LkFsbG95RWRpdG9yLmVkaXRhYmxlKG5vZGUsIGNvbmZpZykuZ2V0KCduYXRpdmVFZGl0b3InKTtcbiAgICAgICRub2RlLmRhdGEoJ2VkaXRvcicsIGVkaXRvcik7XG4gICAgLy8gfSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBXWVNJV1lHO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvV1lTSVdZRy5qc1xuICoqLyIsImltcG9ydCBXWVNJV1lHIGZyb20gJy4vV1lTSVdZRyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICcuL2xpbmsnO1xuaW1wb3J0IFRleHRTdHJpbmcgZnJvbSAnLi9zdHJpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbGwoKSB7XG4gIGlmICh0eXBlb2Yod2luZG93Lk1PTlNURVJfRURJVEFCTEVTKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVMgPSB7fTtcbiAgfVxuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ3d5c2l3eWcnXSA9IG5ldyBXWVNJV1lHKCk7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snbGluayddID0gbmV3IExpbmsoKTtcbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWydpbWFnZSddID0gbmV3IEltYWdlKCk7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snc3RyaW5nJ10gPSBuZXcgVGV4dFN0cmluZygpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2FsbC5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBJbWFnZSBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICBjb25zdCAkaW1nID0gJG5vZGUuZmluZCgnaW1nJykuZmlyc3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3JjOiAkaW1nLmF0dHIoJ3NyYycpLFxuICAgICAgYWx0OiAkaW1nLmF0dHIoJ2FsdCcpLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9pbWFnZS5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiAkbm9kZS5kYXRhKCdvcmlnaW5hbEhyZWYnKSA/ICRub2RlLmRhdGEoJ29yaWdpbmFsSHJlZicpIDogJG5vZGUuYXR0cignaHJlZicpLFxuICAgICAgYW5jaG9yOiAkbm9kZS5odG1sKCksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvbGluay5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBUZXh0U3RyaW5nIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBCYXNlRWRpdGFibGUuZnJhbWUkKCRub2RlKTtcbiAgICBjb25zdCBlZGl0b3IgPSBub2RlLmRhdGEoJ2VkaXRvcicpO1xuICAgIGlmIChlZGl0b3IpIHtcbiAgICAgIHJldHVybiBlZGl0b3IuZ2V0RGF0YSgpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZS5odG1sKCk7XG4gIH1cblxuICBpbml0aWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gJG5vZGVbMF07XG4gICAgLyogZ2xvYmFsIHdpbmRvdzpmYWxzZSAqL1xuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgYWxsb3dlZENvbnRlbnQ6ICdpIHUnLFxuICAgICAgdG9vbGJhcnM6IHtcbiAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgc2VsZWN0aW9uczogd2luZG93LkFsbG95RWRpdG9yLlNlbGVjdGlvbnMsXG4gICAgICAgICAgdGFiSW5kZXg6IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYXV0b1BhcmFncmFwaDogZmFsc2UsXG4gICAgICBlbmFibGVDb250ZW50RWRpdGFibGU6IHRydWUsXG4gICAgICBpZ25vcmVFbXB0eVBhcmFncmFwaDogdHJ1ZSxcbiAgICAgIGJsb2NrbGVzczogdHJ1ZSxcbiAgICAgIGVudGVyTW9kZTogd2luZG93LkNLRURJVE9SLkVOVEVSX0JSLFxuICAgIH07XG4gICAgLy8gJCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHdpbmRvdy5BbGxveUVkaXRvci5lZGl0YWJsZShub2RlLCBjb25maWcpLmdldCgnbmF0aXZlRWRpdG9yJyk7XG4gICAgICBlZGl0b3Iub24oJ2tleScsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQuZGF0YS5rZXlDb2RlID09PSB3aW5kb3cuQ0tFRElUT1IuU0hJRlQgKyAxMykge1xuICAgICAgICAgIC8vIGFkZCBzYXZpbmcgZnVuY3Rpb24gaGVyZVxuICAgICAgICAgIGV2ZW50LmNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGVkaXRvci5vbigncGFzdGUnLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LmRhdGEuZGF0YVZhbHVlID0gZXZlbnQuZGF0YS5kYXRhVmFsdWUucmVwbGFjZSgvPGJyW1xcc1xcL10qPi9nbWksICcgJyk7XG4gICAgICB9KTtcbiAgICAgICRub2RlLmRhdGEoJ2VkaXRvcicsIGVkaXRvcik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coJG5vZGUsIG5vZGUpO1xuICAgICAgLy8gdGhyb3cgZTtcbiAgICB9XG4gICAgLy8gfSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0U3RyaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvc3RyaW5nLmpzXG4gKiovIiwiaW1wb3J0IERhdGFQcm92aWRlciBmcm9tICcuLi9EYXRhUHJvdmlkZXInO1xuXG5jbGFzcyBTdGF0aWNDb250ZW50IGV4dGVuZHMgRGF0YVByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IocHJvdmlkZWRLZXlzKSB7XG4gICAgc3VwZXIoJ0RvdFBsYW50XFxcXE1vbnN0ZXJcXFxcRGF0YUVudGl0eVxcXFxTdGF0aWNDb250ZW50UHJvdmlkZXInLCBwcm92aWRlZEtleXMpO1xuICB9XG5cbiAgZmlsbENvbmZpZyhkYXRhKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGE7XG4gICAgbmV3RGF0YS5lbnRpdGllcyA9IHRoaXMuc2VyaWFsaXplS2V5cygpO1xuICAgIHJldHVybiBuZXdEYXRhO1xuICB9XG5cbiAgc2VyaWFsaXplTWF0ZXJpYWwocmVnaW9uS2V5LCBtYXRlcmlhbEtleSwgZGF0YUtleXMsICRyZWdpb24sICRtYXRlcmlhbCkge1xuICAgIGNvbnN0IG1hdGVyaWFsRWRpdGFibGVLZXlzID0gJG1hdGVyaWFsLmRhdGEoJ2VkaXRhYmxlS2V5cycpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucmVjdXJzaXZlU2VyaWFsaXplKG1hdGVyaWFsRWRpdGFibGVLZXlzLCAkbWF0ZXJpYWwsIGRhdGFLZXlzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmVjdXJzaXZlU2VyaWFsaXplKG1hdGVyaWFsRWRpdGFibGVLZXlzLCAkcm9vdCwgZGF0YUtleXMsIHByZWZpeCA9ICcnKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICBkYXRhS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBvYmogPSBtYXRlcmlhbEVkaXRhYmxlS2V5c1trZXldIHx8ICdOT19TVUNIX0tFWSc7XG4gICAgICBpZiAob2JqID09PSAnTk9fU1VDSF9LRVknKSB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob2JqID09PSBPYmplY3Qob2JqKSkge1xuICAgICAgICAvLyBpdCdzIHJlY3Vyc2l2ZVxuICAgICAgICAvLyBmaXJzdCAtIGZpbmQgYWxsIGJsb2Nrc1xuICAgICAgICBjb25zdCAkYmxvY2tzID0gJHJvb3QuZmluZChgW2RhdGEtcmVjdXJzaXZlLWl0ZW09XCIke2tleX1cIl1gKTtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBbXTtcbiAgICAgICAgJGJsb2Nrcy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgIHJlc3VsdFtrZXldLnB1c2godGhhdC5yZWN1cnNpdmVTZXJpYWxpemUob2JqLCAkdGhpcywgT2JqZWN0LmtleXMob2JqKSwgJ2l0ZW0uJykpO1xuICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpdCdzIHBsYWluIGZpZWxkXG4gICAgICAgIGNvbnN0ICRub2RlID0gJHJvb3QuZmluZChgW2RhdGEtZWRpdGFibGUta2V5PVwiJHtwcmVmaXh9JHtrZXl9XCJdYCkuZmlyc3QoKTtcbiAgICAgICAgaWYgKCRub2RlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgU2tpcHBlZCBbZGF0YS1lZGl0YWJsZS1rZXk9XCIke3ByZWZpeH0ke2tleX1cIl0gYXMgbm90IGZvdW5kYCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdFtrZXldID0gRGF0YVByb3ZpZGVyLmVkaXRhYmxlLnNlcmlhbGl6ZUVkaXRhYmxlKCRub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRpY0NvbnRlbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL3Byb3ZpZGVycy9TdGF0aWNDb250ZW50LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9