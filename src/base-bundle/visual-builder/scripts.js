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
	
	        alert(selectedRegionKey + ' of ' + selectedEntity);
	        if (selectedRegionKey !== null && selectedEntity !== null) {
	          return;
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
	      item.data.entityType = prefix;
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
	    value: function newBlock(materialName, selectedEntity, regionName) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGNkMDRiYmE1ZTUzZTYyM2VmZGUiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL0Jhc2VFZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9Gcm9udGVuZE1vbnN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXJGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0VkaXRhYmxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL1dZU0lXWUcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2FsbC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9wcm92aWRlcnMvU3RhdGljQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9idW5kbGUuY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkZyb250ZW5kTW9uc3RlciIsIkJhc2VFbnZpcm9ubWVudCIsInZpc3VhbEJ1aWxkZXIiLCJuYW1lIiwidGFyZ2V0IiwiJCIsInNldHRpbmdzIiwiY29udGVudFdpbmRvdyIsImN1cnJlbnRFbnZpcm9ubWVudCIsImVudmlyb25tZW50cyIsImdldCIsImRlYWN0aXZhdGUiLCJjbGVhclN0YWNrYWJsZSIsImZ1bmMiLCJhcmdzIiwic2VuZE1lc3NhZ2UiLCJCYXNlRWRpdGFibGUiLCIkbm9kZSIsIkZyYW1lQXBpIiwibGlzdGVuZXIiLCJjYWxsYmFjayIsImNhbGxiYWNrSGFuZGxlciIsImV2ZW50IiwibWVzc2FnZSIsImlzSWUiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiYXBwbHkiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJzdHJpbmdpZnkiLCJwb3N0TWVzc2FnZSIsImlzIiwiaWUiLCJwYXJhbXMiLCJ2aXN1YWxCdWxkZXIiLCJoYXNoQXBpIiwicGFyZW50IiwiaGFzQnVpbGRlciIsIlZpc3VhbEZyYW1lIiwic21vb3RoU2Nyb2xsIiwiaW5pdCIsInVzZXJTZXR0aW5ncyIsIkZyb250ZW5kTW9uc3RlclNldHRpbmdzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJidWlsZGVyIiwiJGJ1aWxkZXIiLCJsZW5ndGgiLCJWaXN1YWxCdWlsZGVyIiwicmVzb2x1dGlvblN3aXRjaGVyIiwiTWFwIiwiZW52aXJvbm1lbnRTZWxlY3RvciIsInN3aXRjaEVudmlyb25tZW50IiwiZmlyc3QiLCJtb2QiLCJiaW5kTWVzc2FnZUxpc3RlbmVyIiwiY29udHJvbHMiLCJWaXN1YWxCdWlsZGVyU2V0dGluZ3MiLCJidW5kbGVzIiwiJHN0YWNrYWJsZSIsInRoYXQiLCJiZW1FbGVtIiwiJHJlc29sdXRpb25MaW5rcyIsImNsaWNrIiwid2lkdGgiLCIkc2VjdGlvbkxpbmtzIiwiZW52aXJvbm1lbnROYW1lIiwiYWN0aXZhdGUiLCJlbXB0eSIsInBhbmVDbGFzcyIsIm1vZGlmaWVyIiwiZmluZCIsIiRuZXdQYW5lIiwiYXBwZW5kIiwibWF0ZXJpYWxzIiwiaGFzT3duUHJvcGVydHkiLCJyZXN1bHQiLCJzZXJpYWxpemVQYWdlIiwiY29uc29sZSIsImxvZyIsInJlc3VsdEJ5UHJvdmlkZXJzIiwicHJvdmlkZWRLZXlzIiwiZnJhbWVDb250ZW50V2luZG93IiwiTU9OU1RFUl9FRElUX01PREVfREFUQSIsInRlbXBsYXRlIiwicHJvdmlkZXJJbmRleCIsInJlZ2lvbnMiLCJyZWdpb25LZXkiLCJtYXRlcmlhbEluZGV4IiwiZGF0YUtleXMiLCJlbnZpcm9ubWVudCIsInBhZ2VDaGFuZ2VkIiwiJGNvbnRyb2xzIiwiZWxlbSIsImxvY2F0aW9uIiwicmVsb2FkIiwiQWN0aW9uRW52aXJvbm1lbnQiLCJDdXN0b21pemF0aW9uRW52aXJvbm1lbnQiLCJNYXRlcmlhbHNFbnZpcm9ubWVudCIsImluaXRNYXRlcmlhbHNTZWxlY3RvciIsIiRtYXRlcmlhbHNHcm91cHMiLCIkbWF0ZXJpYWxzTGlzdCIsImkxOG5CdW5kbGVOYW1lIiwicG9seWdsb3QiLCJ0IiwiYnVuZGxlIiwiJGJ1bmRsZVRpdGxlIiwiZnVsbFBhdGgiLCJwdXNoIiwiZ3JvdXBzIiwiZ3JvdXBOYW1lIiwiZ3JvdXAiLCJpMThuR3JvdXBOYW1lIiwiJGxpIiwiJGxpc3QiLCJpdGVtcyIsIm1hdGVyaWFsTmFtZSIsIm1hdGVyaWFsIiwiaTE4bk1hdGVyaWFsTmFtZSIsIiRpdGVtIiwiZG9jdW1lbnQiLCJvbiIsImNsaWNrSGFuZGxlciIsIiR0aGlzIiwidG9nZ2xlTW9kIiwiZ3JvdXBQYXRoIiwiZWFjaCIsIml0IiwiJG1hdGVyaWFsc1BhbmUiLCJzaG93IiwiaGlkZSIsIlBhZ2VTdHJ1Y3R1cmVFbnYiLCJzZWxlY3RlZFJlZ2lvbktleSIsInNlbGVjdGVkRW50aXR5IiwiYWxlcnQiLCIkZ3JvdXBzUGFuZSIsImNyZWF0ZVN0YWNrYWJsZVBhbmUiLCJQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQiLCJpbml0UGFnZVN0cnVjdHVyZUVsZW1lbnQiLCJlZGl0TW9kZURhdGEiLCIkaGVhZGVyIiwiJHBhZ2VTdHJ1Y3R1cmUiLCIkc3RydWN0dXJlUGFuZSIsImRldGFjaCIsImpzdHJlZSIsImxheW91dCIsImxheW91dEl0ZW0iLCJpZCIsInRlbXBsYXRlSWQiLCJ0ZXh0IiwiaWNvbiIsInN0YXRlIiwib3BlbmVkIiwiY2hpbGRyZW4iLCJ0ZW1wbGF0ZUl0ZW0iLCIkbGF5b3V0UmVnaW9ucyIsInRhcmdldCQiLCJpdGVyIiwicHJvY2Vzc0xheW91dCIsIml0ZW0iLCJ0ZW1wbGF0ZVJlZ2lvbnMiLCJyZWdpb24iLCJwYWdlU3RydWN0dXJlIiwiY29yZSIsInRoZW1lcyIsInBsdWdpbnMiLCJ0eXBlcyIsInRlbXBsYXRlUmVnaW9uIiwiY29udGVudFRlbXBsYXRlUmVnaW9uIiwianN0cmVlT2JqIiwicGFnZVN0cnVjdHVyZUpzb24iLCJnZXRfanNvbiIsIm5vX3N0YXRlIiwibm9faWQiLCJub19saV9hdHRyIiwibm9fYV9hdHRyIiwiaXNDb250ZW50UmVnaW9uRm91bmQiLCJlbnRpdHlEZXBlbmRlbnQiLCJzZWxlY3Rfbm9kZSIsImNvbnRyb2xCdXR0b25zIiwiZSIsIm9iaiIsIiRhbmNob3IiLCJub2RlIiwicHJlcGVuZCIsInR5cGUiLCJlbnRpdHlUeXBlIiwic2Nyb2xsVGFyZ2V0IiwibWF0ZXJpYWxQYXRoIiwicmVnaW9uc1N0cnVjdHVyZSIsInNlcmlhbGl6ZSIsIm1hdGVyaWFsc0RlY2wiLCIkbGF5b3V0UmVnaW9uIiwiZXh0cmFjdFJlZ2lvbkRhdGEiLCIkbGF5b3V0TWF0ZXJpYWxzIiwiJGxheW91dE1hdGVyaWFsIiwicHJvY2Vzc0xheW91dE1hdGVyaWFsIiwibGF5b3V0TWF0ZXJpYWxJdGVtIiwibGF5b3V0TWF0ZXJpYWwiLCJwcmVmaXgiLCJlZGl0YWJsZUtleXMiLCIkcmVnaW9ucyIsInByb2Nlc3NUZW1wbGF0ZVJlZ2lvbiIsImlzQ29udGVudCIsIiR0ZW1wbGF0ZVJlZ2lvbiIsIiRyZWdpb25NYXRlcmlhbHMiLCJwcm9jZXNzVGVtcGxhdGVSZWdpb25NYXRlcmlhbCIsIiRyZWdpb25NYXRlcmlhbCIsInJlZ2lvbklkIiwidW5pcXVlQ29udGVudElkIiwiU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsInVuaXFpZCIsIm1vcmVFbnRyb3B5IiwicmV0SWQiLCJfZm9ybWF0U2VlZCIsInNlZWQiLCJyZXFXaWR0aCIsInBhcnNlSW50IiwidG9TdHJpbmciLCJzbGljZSIsIkFycmF5Iiwiam9pbiIsIiRnbG9iYWwiLCJHTE9CQUwiLCIkbG9jdXR1cyIsInBocCIsInVuaXFpZFNlZWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJEYXRlIiwiZ2V0VGltZSIsInRvRml4ZWQiLCJEYXRhUHJvdmlkZXIiLCJjbGFzc05hbWUiLCJhc3NvY2lhdGlvbnMiLCJhc3NvY2lhdGUiLCIkcmVnaW9uIiwibWF0ZXJpYWxLZXkiLCIkbWF0ZXJpYWwiLCJtYXRlcmlhbEVkaXRhYmxlS2V5cyIsImluaXRpYWxpemVNYXRlcmlhbEVkaXQiLCIkcm9vdCIsIiRibG9ja3MiLCJjb3VudGVyIiwiZWRpdGFibGUiLCJpbml0aWFsaXplRWRpdGFibGUiLCJzZXJpYWxpemVNYXRlcmlhbCIsImNsYXNzIiwiZmlsbENvbmZpZyIsIkRhdGFQcm92aWRlckZhY3RvcnkiLCJwcm92aWRlckRlY2wiLCJwcm92aWRlciIsIkVkaXRhYmxlIiwiZWRpdGFibGVzQnlUeXBlIiwiTU9OU1RFUl9FRElUQUJMRVMiLCJleHBvcnRWYXJpYWJsZSIsInNlcmlhbGl6ZU5vZGUiLCJzdHJpbmciLCJIYXNoQXBpIiwiZnVuY3Rpb25DYWxscyIsImhhc2giLCJtYXRjaGVzIiwibWF0Y2giLCJkZWNvZGVVUklDb21wb25lbnQiLCJpbml0aWFsaXplIiwicGFnZVN0cnVjdHVyZUpzb25EYXRhIiwicGFyZW50V2luZG93IiwicGFyZW50TW9uc3RlciIsInBhcmVudEJ1aWxkZXIiLCJjdXJyZW50TW9uc3RlckNvbnRlbnQiLCJtYWtlSXRNb3ZlIiwicmVzaXplIiwidXBkYXRlSGFuZGxlcnMiLCJpbml0UHJvdmlkZXJzIiwiTW9uc3RlckVkaXREYXRhIiwicHJvdmlkZXJzIiwiZ2V0UHJvdmlkZXJzIiwiZW50aXR5IiwiYXJyIiwiZmFjdG9yeSIsIiRtb25zdGVyQ29udGVudENhY2hlIiwiJHNlbGVjdGVkTWF0ZXJpYWwiLCIkaGFuZGxlcnMiLCJjc3MiLCJwb3NpdGlvbiIsInRvcCIsImhlaWdodCIsIm1vdXNlZW50ZXIiLCJob3ZlckluIiwiYWRkQ2xhc3MiLCJtb3VzZWxlYXZlIiwiaG92ZXJPdXQiLCJyZW1vdmVDbGFzcyIsInNlbGVjdE1hdGVyaWFsIiwiJHByZXYiLCJwcmV2IiwiaW5zZXJ0QmVmb3JlIiwiJG5leHQiLCJuZXh0IiwiaW5zZXJ0QWZ0ZXIiLCIkY2xvbmVkTWF0ZXJpYWwiLCJjbG9uZSIsInJhbmRvbUluZGV4IiwiYXR0ciIsImNvbmZpcm0iLCJyZW1vdmUiLCIkbW9uc3RlckNvbnRlbnQiLCIkbW9uc3RlciIsInNlcmlhbGl6ZVVuaXF1ZUNvbnRlbnQiLCJzZW5kVG9CdWlsZGVyIiwiYmxvY2siLCJWaXN1YWxGcmFtZVNldHRpbmdzIiwicHJvdmlkZXJzRW50aXRpZXMiLCJyZWdpb25zTWF0ZXJpYWxzIiwibWF0ZXJpYWxzQnlSZWdpb25zIiwicmVnaW9uTmFtZSIsIm5ld0RhdGEiLCJpdGVyYXRlVGVtcGxhdGVUeXBlIiwiZGVjbCIsIm1hdGVyaWFsc09yZGVyIiwiZm9ybVN1Ym1pdCIsImFjdGlvbiIsIm1hdGVyaWFsc0J5UmVnaW9uRGVjbCIsInJlZ2lvbnNSZXN1bHQiLCJpdGVyYXRlVGVtcGxhdGVSZWdpb25zIiwiZW50aXR5TWF0ZXJpYWxzIiwic2VyaWFsaXplUHJvdmlkZXJzIiwicHJvdmlkZXJLZXkiLCJ2YWx1ZSIsInJlZnJlc2hNb25zdGVyQ29udGVudENhY2hlIiwiJGZvcm0iLCIkaW5wdXQiLCIkY3NyZiIsInZhbCIsImFwcGVuZFRvIiwic3VibWl0IiwidGVtcGxhdGVSZWdpb25zT3JkZXIiLCJyZWdpb25NYXRlcmlhbHMiLCJpdGVyYXRlTWF0ZXJpYWxzIiwibWF0ZXJpYWxzRGVjbHMiLCJXWVNJV1lHIiwiZnJhbWUkIiwiZWRpdG9yIiwiZ2V0RGF0YSIsImh0bWwiLCJjb25maWciLCJhdXRvUGFyYWdyYXBoIiwiZW5hYmxlQ29udGVudEVkaXRhYmxlIiwiaWdub3JlRW1wdHlQYXJhZ3JhcGgiLCJlbnRlck1vZGUiLCJDS0VESVRPUiIsIkVOVEVSX0JSIiwiQWxsb3lFZGl0b3IiLCJhbGwiLCJJbWFnZSIsIiRpbWciLCJzcmMiLCJhbHQiLCJMaW5rIiwiaHJlZiIsImFuY2hvciIsIlRleHRTdHJpbmciLCJhbGxvd2VkQ29udGVudCIsInRvb2xiYXJzIiwic3R5bGVzIiwic2VsZWN0aW9ucyIsIlNlbGVjdGlvbnMiLCJ0YWJJbmRleCIsImJsb2NrbGVzcyIsImtleUNvZGUiLCJTSElGVCIsImNhbmNlbCIsImRhdGFWYWx1ZSIsInJlcGxhY2UiLCJTdGF0aWNDb250ZW50IiwiZW50aXRpZXMiLCJzZXJpYWxpemVLZXlzIiwicmVjdXJzaXZlU2VyaWFsaXplIiwid2FybiIsInNlcmlhbGl6ZUVkaXRhYmxlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVBOzs7Ozs7QUFFQUEsUUFBT0MsZUFBUCxHQUF5QiwrQkFBekI7QUFDQSxHOzs7Ozs7Ozs7Ozs7OztBQ0xBOzs7Ozs7OztLQUVNQyxlO0FBQ0osNEJBQVlDLGFBQVosRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQy9CLFVBQUtELGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0MsTUFBTCxHQUFjQyxFQUFFLEtBQUtILGFBQUwsQ0FBbUJJLFFB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LEdBQXBDLFFBQWhCO0FBQ0EsaUJBQU1nQixhQUFOO0FBQ0EsaUJBQUkwTCxVQUFVLENBQWQ7QUFDQTFLLG9CQUFPaEMsR0FBUCxJQUFjLEVBQWQ7QUFDQXlNLHFCQUFRdkgsSUFBUixDQUFhLFNBQVMrQixJQUFULEdBQWdCO0FBQzNCLG1CQUFNbEMsUUFBUTFILEVBQUUsSUFBRixDQUFkO0FBQ0EyRSxzQkFBT2hDLEdBQVAsRUFBWWdFLElBQVosQ0FBaUJoRCxLQUFLZ1Usa0JBQUwsQ0FBd0J2TSxHQUF4QixFQUE2QjFELEtBQTdCLEVBQW9DbEYsT0FBT0MsSUFBUCxDQUFZMkksR0FBWixDQUFwQyxFQUFzRCxPQUF0RCxDQUFqQjtBQUNBaUU7QUFDRCxjQUpEO0FBUHVCO0FBWXhCLFVBWkQsTUFZTztBQUNMO0FBQ0EsZUFBTXpPLFFBQVF1TyxNQUFNN0ssSUFBTiwwQkFBa0NnSSxNQUFsQyxHQUEyQzNKLEdBQTNDLFNBQW9EUyxLQUFwRCxFQUFkO0FBQ0EsZUFBSXhDLE1BQU1rQyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCK0IscUJBQVErUyxJQUFSLGtDQUE0Q3RMLE1BQTVDLEdBQXFEM0osR0FBckQ7QUFDQTtBQUNEO0FBQ0RnQyxrQkFBT2hDLEdBQVAsSUFBYyx1QkFBYTJNLFFBQWIsQ0FBc0J1SSxpQkFBdEIsQ0FBd0NqWCxLQUF4QyxDQUFkO0FBQ0Q7QUFDRixRQTNCRDtBQTRCQSxjQUFPK0QsTUFBUDtBQUNEOzs7Ozs7bUJBR1k2UyxhOzs7Ozs7OztBQ3REZiwwQyIsImZpbGUiOiJ2aXN1YWwtYnVpbGRlci9zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA4Y2QwNGJiYTVlNTNlNjIzZWZkZVxuICoqLyIsImltcG9ydCAnLi9idW5kbGUuY3NzJztcblxuaW1wb3J0IEZyb250ZW5kTW9uc3RlciBmcm9tICcuL0Zyb250ZW5kTW9uc3Rlcic7XG5cbndpbmRvdy5Gcm9udGVuZE1vbnN0ZXIgPSBuZXcgRnJvbnRlbmRNb25zdGVyKCk7XG4vL1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzXG4gKiovIiwiaW1wb3J0IEZyYW1lQXBpIGZyb20gJy4vLi4vdmlzdWFsLWZyYW1lL0ZyYW1lQXBpJztcblxuY2xhc3MgQmFzZUVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IodmlzdWFsQnVpbGRlciwgbmFtZSkge1xuICAgIHRoaXMudmlzdWFsQnVpbGRlciA9IHZpc3VhbEJ1aWxkZXI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhcmdldCA9ICQodGhpcy52aXN1YWxCdWlsZGVyLnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKVswXS5jb250ZW50V2luZG93O1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgLy8gZGVhY3RpdmF0ZSBjdXJyZW50IHNlbGVjdGVkIGVudmlyb25tZW50XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gdGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkge1xuICAgICAgdGhpcy52aXN1YWxCdWlsZGVyLmVudmlyb25tZW50cy5nZXQodGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkuZGVhY3RpdmF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0YXJnZXQkKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldC4kO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIuY2xlYXJTdGFja2FibGUoKTtcbiAgfVxuXG4gIHNlbmRNZXNzYWdlKGZ1bmMsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy50YXJnZXQsIGZ1bmMsIGFyZ3MpO1xuICB9XG5cbiAgcGFnZUNoYW5nZWQoKSB7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlRW52aXJvbm1lbnQ7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL0Jhc2VFbnZpcm9ubWVudC5qc1xuICoqLyIsImNsYXNzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcblxuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBnZXQgZnJhbWUkKCkge1xuICAgIHJldHVybiB3aW5kb3cuJDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlRWRpdGFibGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvQmFzZUVkaXRhYmxlLmpzXG4gKiovIiwiY2xhc3MgRnJhbWVBcGkge1xuICBzdGF0aWMgZ2V0IGlzSWUoKSB7XG4gICAgLyogZ2xvYmFsIGlzICovXG4gICAgaWYgKHR5cGVvZihpcykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gaXMuaWUoKTsvLyB8fCBpcy5lZGdlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgYmluZE1lc3NhZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgICBsZXQgbWVzc2FnZSA9IG51bGw7XG4gICAgICBpZiAoRnJhbWVBcGkuaXNJZSkge1xuICAgICAgICBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lc3NhZ2UgPSBldmVudC5kYXRhO1xuICAgICAgfVxuXG4gICAgICBpZiAobGlzdGVuZXJbbWVzc2FnZS5mdW5jXSkge1xuICAgICAgICBsaXN0ZW5lclttZXNzYWdlLmZ1bmNdLmFwcGx5KGxpc3RlbmVyLCBtZXNzYWdlLmFyZ3MpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJRThcbiAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25tZXNzYWdlJywgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzZW5kTWVzc2FnZSh0YXJnZXQsIGZ1bmMsIGFyZ3MpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZnVuYyxcbiAgICAgIGFyZ3NcbiAgICB9O1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBGcmFtZUFwaS5pc0llID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiBkYXRhO1xuXG4gICAgdGFyZ2V0LnBvc3RNZXNzYWdlKG1lc3NhZ2UsICcqJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJhbWVBcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0ZyYW1lQXBpLmpzXG4gKiovIiwiaW1wb3J0IFZpc3VhbEJ1aWxkZXIgZnJvbSAnLi9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlcic7XG5pbXBvcnQgVmlzdWFsRnJhbWUgZnJvbSAnLi9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZSc7XG5pbXBvcnQgSGFzaEFwaSBmcm9tICcuL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGknO1xuXG5jbGFzcyBGcm9udGVuZE1vbnN0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtcygpO1xuICAgIHRoaXMudmlzdWFsQnVsZGVyID0gbnVsbDtcbiAgICB0aGlzLmhhc2hBcGkgPSBuZXcgSGFzaEFwaSgpO1xuICAgIGlmICh3aW5kb3cucGFyZW50ICE9PSB3aW5kb3cgJiYgd2luZG93LnBhcmVudC5Gcm9udGVuZE1vbnN0ZXIpIHtcbiAgICAgIGlmICh3aW5kb3cucGFyZW50LkZyb250ZW5kTW9uc3Rlci5oYXNCdWlsZGVyKSB7XG4gICAgICAgIHRoaXMuVmlzdWFsRnJhbWUgPSBuZXcgVmlzdWFsRnJhbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogZ2xvYmFsIHNtb290aFNjcm9sbDogZmFsc2UqL1xuICAgIGlmICh0eXBlb2Yoc21vb3RoU2Nyb2xsKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNtb290aFNjcm9sbC5pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgVmlzdWFsQnVpbGRlciBjbGFzcyBpbnN0YW5jZVxuICAgKiBAcmV0dXJucyBWaXN1YWxCdWlsZGVyXG4gICAqL1xuICBnZXQgYnVpbGRlcigpIHtcbiAgICBpZiAodGhpcy52aXN1YWxCdWxkZXIgPT09IG51bGwpIHtcbiAgICAgIHRoaXMudmlzdWFsQnVsZGVyID0gbmV3IFZpc3VhbEJ1aWxkZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmlzdWFsQnVsZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgRnJvbnRlbmRNb25zdGVyIGluc3RhbmNlIGhhcyBWaXN1YWwgQnVpbGRlciBvbiBwYWdlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGhhc0J1aWxkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRlci4kYnVpbGRlci5sZW5ndGggPT09IDE7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBGcm9udGVuZE1vbnN0ZXIgc2V0dGluZ3MuXG4gICAqIFVzZXMgRnJvbnRlbmRNb25zdGVyU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuRnJvbnRlbmRNb25zdGVyU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh1c2VyU2V0dGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICB9KTtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJvbnRlbmRNb25zdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9Gcm9udGVuZE1vbnN0ZXIuanNcbiAqKi8iLCJpbXBvcnQgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL1NpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCc7XG5pbXBvcnQgTWF0ZXJpYWxzRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvTWF0ZXJpYWxzRW52aXJvbm1lbnQnO1xuaW1wb3J0IEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9DdXN0b21pemF0aW9uRW52aXJvbm1lbnQnO1xuaW1wb3J0IEFjdGlvbkVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL0FjdGlvbkVudmlyb25tZW50JztcbmltcG9ydCBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50JztcbmltcG9ydCBGcmFtZUFwaSBmcm9tICcuLy4uL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaSc7XG4vLyBpbXBvcnQgRWRpdGFibGUgZnJvbSAnLi9FZGl0YWJsZSc7XG5cbmNsYXNzIFZpc3VhbEJ1aWxkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtcygpO1xuICAgIHRoaXMucmVzb2x1dGlvblN3aXRjaGVyKCk7XG5cbiAgICB0aGlzLmVudmlyb25tZW50cyA9IG5ldyBNYXAoW1xuICAgICAgWydzaXRlLXN0cnVjdHVyZScsIG5ldyBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQodGhpcywgJ3NpdGUtc3RydWN0dXJlJyldLFxuICAgICAgWydwYWdlLXN0cnVjdHVyZScsIG5ldyBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQodGhpcywgJ3BhZ2Utc3RydWN0dXJlJyldLFxuICAgICAgWydtYXRlcmlhbHMnLCBuZXcgTWF0ZXJpYWxzRW52aXJvbm1lbnQodGhpcywgJ21hdGVyaWFscycpXSxcbiAgICAgIFsnY3VzdG9taXphdGlvbicsIG5ldyBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQodGhpcywgJ2N1c3RvbWl6YXRpb24nKV0sXG4gICAgICBbJ2FjdGlvbicsIG5ldyBBY3Rpb25FbnZpcm9ubWVudCh0aGlzLCAnYWN0aW9uJyldLFxuICAgIF0pO1xuXG4gICAgdGhpcy5lbnZpcm9ubWVudFNlbGVjdG9yKCk7XG5cbiAgICAvLyBzZWxlY3QgZmlyc3QgZW52aXJvbm1lbnQgYnkgZGVmYXVsdFxuICAgIHRoaXMuc3dpdGNoRW52aXJvbm1lbnQoJ3NpdGUtc3RydWN0dXJlJyk7XG4gICAgJCgnLm1vbnN0ZXItZW52aXJvbm1lbnQtc2VsZWN0b3JfX2Vudmlyb25tZW50LWxpbmsnKVxuICAgICAgLmZpcnN0KClcbiAgICAgIC5tb2QoJ2FjdGl2ZScsIHRydWUpO1xuICAgIEZyYW1lQXBpLmJpbmRNZXNzYWdlTGlzdGVuZXIodGhpcyk7XG5cbiAgICAvLyB0aGlzLmVkaXRhYmxlID0gbmV3IEVkaXRhYmxlKCk7XG5cbiAgICB0aGlzLmNvbnRyb2xzKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBWaXN1YWxCdWlsZGVyIHNldHRpbmdzLlxuICAgKiBVc2VzIFZpc3VhbEJ1aWxkZXJTZXR0aW5ncyB2YXJpYWJsZSBpZiBwcm92aWRlZCBvciBkZWZhdWx0IHZhbHVlcyBpbnN0ZWFkLlxuICAgKi9cbiAgcGFyYW1zKCkge1xuICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5WaXN1YWxCdWlsZGVyU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICAnZWxlbWVudC1zZWxlY3Rvcic6ICcubW9uc3Rlci12aXN1YWwtYnVpbGRlcicsXG4gICAgICAnZnJhbWUtc2VsZWN0b3InOiAnLm1vbnN0ZXItdmlzdWFsLWZyYW1lJyxcbiAgICAgIGJ1bmRsZXM6IHt9LFxuICAgICAgJ3N0YWNrYWJsZS1jb250YWluZXItY2xhc3MnOiAnbW9uc3Rlci1zdGFja2FibGUtY29udGFpbmVyJyxcbiAgICAgICduZXctYmxvY2stdXJsJzogJy9tb25zdGVyL3Zpc3VhbC1idWlsZGVyL25ldy1ibG9jaycsXG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyh1c2VyU2V0dGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICB9KTtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy4kYnVpbGRlciA9ICQodGhpcy5zZXR0aW5nc1snZWxlbWVudC1zZWxlY3RvciddKTtcbiAgICB0aGlzLiRzdGFja2FibGUgPSAkKGAuJHt0aGlzLnNldHRpbmdzWydzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJ119YCk7XG4gIH1cblxuICByZXNvbHV0aW9uU3dpdGNoZXIoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgYmVtRWxlbSA9ICdyZXNvbHV0aW9uLXN3aXRjaGVyX19yZXNvbHV0aW9uLWxpbmsnO1xuXG4gICAgY29uc3QgJHJlc29sdXRpb25MaW5rcyA9ICQoYC4ke2JlbUVsZW19YCk7XG4gICAgJHJlc29sdXRpb25MaW5rcy5jbGljayhmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICRyZXNvbHV0aW9uTGlua3MubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgICAkKHRoYXQuc2V0dGluZ3NbJ2ZyYW1lLXNlbGVjdG9yJ10pLndpZHRoKCQodGhpcykuZGF0YSgncmVzb2x1dGlvbldpZHRoJykpO1xuICAgICAgJCh0aGlzKS5tb2QoJ2FjdGl2ZScsIHRydWUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgZW52aXJvbm1lbnRTZWxlY3RvcigpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBiZW1FbGVtID0gJ21vbnN0ZXItZW52aXJvbm1lbnQtc2VsZWN0b3JfX2Vudmlyb25tZW50LWxpbmsnO1xuXG4gICAgY29uc3QgJHNlY3Rpb25MaW5rcyA9ICQoYC4ke2JlbUVsZW19YCk7XG4gICAgJHNlY3Rpb25MaW5rcy5jbGljayhmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgIGNvbnN0IGVudmlyb25tZW50TmFtZSA9ICQodGhpcykuZGF0YSgnZW52aXJvbm1lbnROYW1lJyk7XG4gICAgICBpZiAodGhhdC5jdXJyZW50RW52aXJvbm1lbnQgPT09IGVudmlyb25tZW50TmFtZSkge1xuICAgICAgICAkc2VjdGlvbkxpbmtzLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgICAgICB0aGF0LmVudmlyb25tZW50cy5nZXQoZW52aXJvbm1lbnROYW1lKS5kZWFjdGl2YXRlKCk7XG4gICAgICAgIHRoYXQuY3VycmVudEVudmlyb25tZW50ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAkc2VjdGlvbkxpbmtzLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgICAgdGhhdC5zd2l0Y2hFbnZpcm9ubWVudChlbnZpcm9ubWVudE5hbWUpO1xuICAgICAgJCh0aGlzKS5tb2QoJ2FjdGl2ZScsIHRydWUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgc3dpdGNoRW52aXJvbm1lbnQoZW52aXJvbm1lbnROYW1lKSB7XG4gICAgdGhpcy5lbnZpcm9ubWVudHMuZ2V0KGVudmlyb25tZW50TmFtZSkuYWN0aXZhdGUoKTtcbiAgICB0aGlzLmN1cnJlbnRFbnZpcm9ubWVudCA9IGVudmlyb25tZW50TmFtZTtcbiAgfVxuXG4gIGNsZWFyU3RhY2thYmxlKCkge1xuICAgIHRoaXMuJHN0YWNrYWJsZS5lbXB0eSgpO1xuICB9XG5cbiAgY3JlYXRlU3RhY2thYmxlUGFuZSgpIHtcbiAgICBjb25zdCBwYW5lQ2xhc3MgPSBgJHt0aGlzLnNldHRpbmdzWydzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJ119X19wYW5lYDtcbiAgICBjb25zdCBtb2RpZmllciA9IHRoaXMuJHN0YWNrYWJsZS5maW5kKGAuJHtwYW5lQ2xhc3N9YCkubGVuZ3RoID09PSAwXG4gICAgICA/IGAke3BhbmVDbGFzc31fZmlyc3RgXG4gICAgICA6ICcnO1xuICAgIGNvbnN0ICRuZXdQYW5lID0gJChgPGRpdiBjbGFzcz1cIiR7cGFuZUNsYXNzfSAke21vZGlmaWVyfVwiPjwvZGl2PmApO1xuICAgIHRoaXMuJHN0YWNrYWJsZS5hcHBlbmQoJG5ld1BhbmUpO1xuICAgIHJldHVybiAkbmV3UGFuZTtcbiAgfVxuXG4gIG1hdGVyaWFsQnlOYW1lKG5hbWUpIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5tYXRlcmlhbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLm1hdGVyaWFsc1tuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXQgZnJhbWVDb250ZW50V2luZG93KCkge1xuICAgIHJldHVybiAkKHRoaXMuc2V0dGluZ3NbJ2ZyYW1lLXNlbGVjdG9yJ10pWzBdLmNvbnRlbnRXaW5kb3c7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgLy8gRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5mcmFtZUNvbnRlbnRXaW5kb3csICdzZXJpYWxpemVDb250ZW50JywgWydsb2cnXSk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5lbnZpcm9ubWVudHMuZ2V0KCdwYWdlLXN0cnVjdHVyZScpLnNlcmlhbGl6ZVBhZ2UoKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgLy8gd2UgaGF2ZSByZXN1bHQgd2hpY2ggaXMgY29udGVudCBpbiBmb3JtYXQ6XG4gICAgLy8gcmVnaW9uXG4gICAgLy8gLS0tIG1hdGVyaWFsIGlkXG4gICAgLy8gLS0tLS0tLSBrZXlzID0+IHZhbHVlc1xuICAgIC8vXG4gICAgLy8gb3VyIFByb3ZpZGVycyBzaG91bGQgZ2V0IG9ubHkgdGhvc2Uga2V5cyB0aGF0IHRoZXkgcHJvdmlkZVxuICAgIC8vIHByb3ZpZGVkIGtleXMgYXJlIHN0b3JlZCBpbiBmcmFtZUNvbnRlbnRXaW5kb3cuTU9OU1RFUl9FRElUX01PREVfREFUQS50ZW1wbGF0ZS5wcm92aWRlZEtleXNcbiAgICBjb25zdCByZXN1bHRCeVByb3ZpZGVycyA9IHt9O1xuICAgIGNvbnN0IHByb3ZpZGVkS2V5cyA9IHRoaXMuZnJhbWVDb250ZW50V2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEudGVtcGxhdGUucHJvdmlkZWRLZXlzO1xuXG4gICAgT2JqZWN0LmtleXMocHJvdmlkZWRLZXlzKS5mb3JFYWNoKHByb3ZpZGVySW5kZXggPT4ge1xuICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF0gPSB7fTtcblxuICAgICAgY29uc3QgcmVnaW9ucyA9IHByb3ZpZGVkS2V5c1twcm92aWRlckluZGV4XTtcblxuICAgICAgT2JqZWN0LmtleXMocmVnaW9ucykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0Lmhhc093blByb3BlcnR5KHJlZ2lvbktleSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdW3JlZ2lvbktleV0gPSB7fTtcblxuICAgICAgICAvLyBnbyBkZWVwIHRvIG1hdGVyaWFsIGluZGVjZXNcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gcmVnaW9uc1tyZWdpb25LZXldO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG1hdGVyaWFscykuZm9yRWFjaChtYXRlcmlhbEluZGV4ID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0W3JlZ2lvbktleV0uaGFzT3duUHJvcGVydHkobWF0ZXJpYWxJbmRleCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdW3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF0gPSB7fTtcblxuICAgICAgICAgIGNvbnN0IGRhdGFLZXlzID0gbWF0ZXJpYWxzW21hdGVyaWFsSW5kZXhdO1xuXG4gICAgICAgICAgZGF0YUtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdFtyZWdpb25LZXldW21hdGVyaWFsSW5kZXhdLmhhc093blByb3BlcnR5KGtleSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzXG4gICAgICAgICAgICAgIFtwcm92aWRlckluZGV4XVxuICAgICAgICAgICAgICBbcmVnaW9uS2V5XVxuICAgICAgICAgICAgICBbbWF0ZXJpYWxJbmRleF1cbiAgICAgICAgICAgICAgW2tleV0gPSByZXN1bHRbcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XVtrZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdEJ5UHJvdmlkZXJzKTtcbiAgICByZXR1cm4gcmVzdWx0QnlQcm92aWRlcnM7XG4gIH1cblxuICBwYWdlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmVudmlyb25tZW50cy5mb3JFYWNoKFxuICAgICAgZW52aXJvbm1lbnQgPT5cbiAgICAgICAgZW52aXJvbm1lbnQucGFnZUNoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICBsb2cocmVzdWx0KSB7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgfVxuXG4gIGNvbnRyb2xzKCkge1xuICAgIHRoaXMuJGNvbnRyb2xzID0gdGhpcy4kYnVpbGRlci5maW5kKCcuY29udHJvbHMnKS5maXJzdCgpO1xuICAgIHRoaXMuJGNvbnRyb2xzLmVsZW0oJ3JlZnJlc2gnKS5jbGljaygoKSA9PiB7XG4gICAgICB0aGlzLmZyYW1lQ29udGVudFdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIHRoaXMuJGNvbnRyb2xzLmVsZW0oJ3NhdmUnKS5jbGljaygoKSA9PiB7XG4gICAgICBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLmZyYW1lQ29udGVudFdpbmRvdywgJ3NhdmUnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaXN1YWxCdWlsZGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlci5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBBY3Rpb25FbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0FjdGlvbkVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9DdXN0b21pemF0aW9uRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgTWF0ZXJpYWxzRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2aXN1YWxCdWlsZGVyLCBuYW1lKSB7XG4gICAgc3VwZXIodmlzdWFsQnVpbGRlciwgbmFtZSk7XG4gICAgdGhpcy5pbml0TWF0ZXJpYWxzU2VsZWN0b3IoKTtcbiAgfVxuXG4gIGluaXRNYXRlcmlhbHNTZWxlY3RvcigpIHtcbiAgICB0aGlzLiRtYXRlcmlhbHNHcm91cHMgPSAkKCc8dWwgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzXCI+PC91bD4nKTtcbiAgICB0aGlzLiRtYXRlcmlhbHNMaXN0ID0gW107XG5cbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIuc2V0dGluZ3MuYnVuZGxlcy5mb3JFYWNoKGJ1bmRsZSA9PiB7XG4gICAgICAvKiBnbG9iYWwgcG9seWdsb3Q6IGZhbHNlICovXG4gICAgICBjb25zdCBpMThuQnVuZGxlTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gcG9seWdsb3QudChidW5kbGUubmFtZSlcbiAgICAgICAgOiBidW5kbGUubmFtZTtcblxuICAgICAgY29uc3QgJGJ1bmRsZVRpdGxlID0gYFxuICAgICAgPGxpIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19faXRlbSBtYXRlcmlhbHMtZ3JvdXBzX19pdGVtLS1idW5kbGUtbGFiZWxcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1idW5kbGVcIiBkYXRhLWJ1bmRsZS1wYXRoPVwiJHtidW5kbGUuZnVsbFBhdGh9XCI+XG4gICAgICAgICAgICAke2kxOG5CdW5kbGVOYW1lfVxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICAgYDtcbiAgICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QucHVzaCgkYnVuZGxlVGl0bGUpO1xuXG4gICAgICBidW5kbGUuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICBjb25zdCBncm91cE5hbWUgPSBncm91cC5uYW1lO1xuICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSBncm91cC5tYXRlcmlhbHM7XG4gICAgICAgIGNvbnN0IGkxOG5Hcm91cE5hbWUgPSB0eXBlb2YocG9seWdsb3QpICE9PSAndW5kZWZpbmVkJyA/IHBvbHlnbG90LnQoZ3JvdXBOYW1lKSA6IGdyb3VwTmFtZTtcbiAgICAgICAgY29uc3QgJGxpID0gJChgXG4gICAgPGxpIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19faXRlbVwiPlxuICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWdyb3VwLXBhdGg9XCIke2dyb3VwLmZ1bGxQYXRofVwiIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwXCI+XG4gICAgICAgICR7aTE4bkdyb3VwTmFtZX0gPHNwYW4gY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19jb3VudFwiPigke21hdGVyaWFscy5sZW5ndGh9KTwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICA8L2xpPmApO1xuICAgICAgICB0aGlzLiRtYXRlcmlhbHNHcm91cHMuYXBwZW5kKCRsaSk7XG4gICAgICAgIGNvbnN0ICRsaXN0ID0gJChgPHVsIGNsYXNzPVwibWF0ZXJpYWxzLWxpc3RcIiBkYXRhLWdyb3VwLXBhdGg9XCIke2dyb3VwLmZ1bGxQYXRofVwiPjwvdWw+YCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG5cbiAgICAgICAgbWF0ZXJpYWxzLmZvckVhY2gobWF0ZXJpYWwgPT4ge1xuICAgICAgICAgIGNvbnN0IG1hdGVyaWFsTmFtZSA9IG1hdGVyaWFsLm5hbWU7XG4gICAgICAgICAgY29uc3QgaTE4bk1hdGVyaWFsTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IHBvbHlnbG90LnQobWF0ZXJpYWxOYW1lKVxuICAgICAgICAgICAgOiBtYXRlcmlhbE5hbWU7XG4gICAgICAgICAgY29uc3QgJGl0ZW0gPSAkKGBcbjxsaT5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1hdGVyaWFscy1saXN0X19pdGVtXCIgZGF0YS1tYXRlcmlhbC1wYXRoPVwiJHttYXRlcmlhbC5mdWxsUGF0aH1cIj5cbiAgICAke2kxOG5NYXRlcmlhbE5hbWV9XG4gIDwvYT5cbjwvbGk+XG5gKTtcbiAgICAgICAgICBpdGVtcy5wdXNoKCRpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgICRsaXN0LmFwcGVuZChpdGVtcyk7XG4gICAgICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QucHVzaCgkbGlzdCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIC8qIGdsb2JhbCBkb2N1bWVudDogZmFsc2UgKi9cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcsIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICR0aGlzLnRvZ2dsZU1vZCgnYWN0aXZlJyk7XG4gICAgICBjb25zdCBncm91cFBhdGggPSAkdGhpcy5kYXRhKCdncm91cFBhdGgnKTtcbiAgICAgIGlmICgkdGhpcy5tb2QoJ2FjdGl2ZScpKSB7XG4gICAgICAgICQoJy5tYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAnKS5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcblxuICAgICAgICAkKCcubWF0ZXJpYWxzLWxpc3QnKS5lYWNoKGZ1bmN0aW9uIGl0KCkge1xuICAgICAgICAgIGNvbnN0ICRsaXN0ID0gJCh0aGlzKTtcbiAgICAgICAgICBpZiAoJGxpc3QubW9kKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgJGxpc3QubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkbGlzdC5kYXRhKCdncm91cFBhdGgnKSA9PT0gZ3JvdXBQYXRoKSB7XG4gICAgICAgICAgICAkbGlzdC5tb2QoJ2FjdGl2ZScsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHRoaXMubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICAgICAgdGhhdC4kbWF0ZXJpYWxzUGFuZS5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGF0J3MganVzdCBzZWNvbmQgY2xpY2sgb24gdGhlIHNhbWUgZ3JvdXBcbiAgICAgICAgdGhhdC4kbWF0ZXJpYWxzUGFuZS5oaWRlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWF0ZXJpYWxzLWxpc3RfX2l0ZW0nLCBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICBjb25zdCBQYWdlU3RydWN0dXJlRW52ID0gdGhhdC52aXN1YWxCdWlsZGVyLmVudmlyb25tZW50cy5nZXQoJ3BhZ2Utc3RydWN0dXJlJyk7XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkUmVnaW9uS2V5ID0gUGFnZVN0cnVjdHVyZUVudi5zZWxlY3RlZFJlZ2lvbktleTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRW50aXR5ID0gUGFnZVN0cnVjdHVyZUVudi5zZWxlY3RlZEVudGl0eTtcblxuICAgICAgYWxlcnQoYCR7c2VsZWN0ZWRSZWdpb25LZXl9IG9mICR7c2VsZWN0ZWRFbnRpdHl9YCk7XG4gICAgICBpZiAoc2VsZWN0ZWRSZWdpb25LZXkgIT09IG51bGwgJiYgc2VsZWN0ZWRFbnRpdHkgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGF0LnNlbmRNZXNzYWdlKFxuICAgICAgICAgICduZXdCbG9jaycsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKCdtYXRlcmlhbFBhdGgnKSxcbiAgICAgICAgICAgIHNlbGVjdGVkRW50aXR5LFxuICAgICAgICAgICAgc2VsZWN0ZWRSZWdpb25LZXksXG4gICAgICAgICAgXVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgc3VwZXIuYWN0aXZhdGUoKTtcblxuICAgIHRoaXMuJGdyb3Vwc1BhbmUgPSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3JlYXRlU3RhY2thYmxlUGFuZSgpO1xuICAgIHRoaXMuJGdyb3Vwc1BhbmUuYXBwZW5kKHRoaXMuJG1hdGVyaWFsc0dyb3Vwcyk7XG5cbiAgICB0aGlzLiRtYXRlcmlhbHNQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRtYXRlcmlhbHNQYW5lLmFwcGVuZCh0aGlzLiRtYXRlcmlhbHNMaXN0KTtcbiAgICB0aGlzLiRtYXRlcmlhbHNQYW5lLmhpZGUoKTtcblxuICAgIC8qXG4gICAgY29uc3QgUGFnZVN0cnVjdHVyZUVudiA9IHRoYXQudmlzdWFsQnVpbGRlci5lbnZpcm9ubWVudHMuZ2V0KCdwYWdlLXN0cnVjdHVyZScpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRSZWdpb25LZXkgPSBQYWdlU3RydWN0dXJlRW52LnNlbGVjdGVkUmVnaW9uS2V5O1xuICAgIGNvbnN0IHNlbGVjdGVkRW50aXR5ID0gUGFnZVN0cnVjdHVyZUVudi5zZWxlY3RlZEVudGl0eTtcblxuICAgIEB0b2RvIGNoZWNrIGZvciBzZWxlY3RlZFJlZ2lvbiBpZiBub3QgLSB3ZSBtdXN0IG5vdCBhZGQgYmxvY2sgaGVyZVxuICAgICovXG5cbiAgICAkKCcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJykubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFsc0Vudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICBzdXBlcih2aXN1YWxCdWlsZGVyLCBuYW1lKTtcbiAgICB0aGlzLmluaXRQYWdlU3RydWN0dXJlRWxlbWVudCgpO1xuICAgIHRoaXMuZWRpdE1vZGVEYXRhID0ge307XG4gICAgdGhpcy5zZWxlY3RlZFJlZ2lvbktleSA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RlZEVudGl0eSA9IG51bGw7XG4gIH1cblxuICBpbml0UGFnZVN0cnVjdHVyZUVsZW1lbnQoKSB7XG4gICAgdGhpcy4kaGVhZGVyID0gJCgnPGRpdiBjbGFzcz1cIm1vbnN0ZXItc3RhY2thYmxlLWNvbnRhaW5lcl9fcGFuZS1oZWFkZXJcIj5QYWdlIHN0cnVjdHVyZTwvZGl2PicpO1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUgPSAkKCc8ZGl2IGNsYXNzPVwicGFnZS1zdHJ1Y3R1cmVcIj48L2Rpdj4nKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHN1cGVyLmFjdGl2YXRlKCk7XG5cbiAgICB0aGlzLiRzdHJ1Y3R1cmVQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRzdHJ1Y3R1cmVQYW5lLmFwcGVuZCh0aGlzLiRoZWFkZXIpO1xuICAgIHRoaXMuJHN0cnVjdHVyZVBhbmUuYXBwZW5kKHRoaXMuJHBhZ2VTdHJ1Y3R1cmUpO1xuICB9XG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5kZXRhY2goKTtcbiAgICB0aGlzLiRoZWFkZXIuZGV0YWNoKCk7XG4gICAgc3VwZXIuZGVhY3RpdmF0ZSgpO1xuICB9XG5cbiAgcGFnZUNoYW5nZWQoKSB7XG4gICAgc3VwZXIucGFnZUNoYW5nZWQoKTtcbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlLmpzdHJlZSgnZGVzdHJveScpO1xuICAgIGNvbnN0IGxheW91dCA9IHRoaXMudGFyZ2V0Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEubGF5b3V0O1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy50YXJnZXQuTU9OU1RFUl9FRElUX01PREVfREFUQS50ZW1wbGF0ZTtcblxuICAgIGNvbnN0IGxheW91dEl0ZW0gPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiAnbGF5b3V0JyxcbiAgICAgICAgdGVtcGxhdGVJZDogbGF5b3V0LmlkLFxuICAgICAgfSxcbiAgICAgIHRleHQ6IGBMYXlvdXQgLSAke2xheW91dC5rZXl9ICMke2xheW91dC5pZH1gLFxuICAgICAgaWNvbjogJ2ZhIGZhLWNvbHVtbnMnLFxuICAgICAgc3RhdGU6IHtcbiAgICAgICAgb3BlbmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICB9O1xuICAgIGNvbnN0IHRlbXBsYXRlSXRlbSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6ICd0ZW1wbGF0ZScsXG4gICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgfSxcbiAgICAgIHRleHQ6IGBUZW1wbGF0ZSAtICR7dGVtcGxhdGUua2V5fSAjJHt0ZW1wbGF0ZS5pZH1gLFxuICAgICAgaWNvbjogJ2ZhIGZhLXRoJyxcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIG9wZW5lZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgfTtcblxuICAgIGNvbnN0ICRsYXlvdXRSZWdpb25zID0gdGhpcy50YXJnZXQkKCcubS1tb25zdGVyLWNvbnRlbnRfX2xheW91dCcpO1xuXG4gICAgJGxheW91dFJlZ2lvbnMuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LnByb2Nlc3NMYXlvdXQoJCh0aGlzKSk7XG4gICAgICBsYXlvdXRJdGVtLmNoaWxkcmVuLnB1c2gocmVzdWx0Lml0ZW0pO1xuICAgICAgcmVzdWx0LnRlbXBsYXRlUmVnaW9ucy5mb3JFYWNoKHJlZ2lvbiA9PiB7XG4gICAgICAgIHRlbXBsYXRlSXRlbS5jaGlsZHJlbi5wdXNoKHJlZ2lvbik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMucGFnZVN0cnVjdHVyZSA9IFtcbiAgICAgIGxheW91dEl0ZW0sXG4gICAgICB0ZW1wbGF0ZUl0ZW0sXG4gICAgXTtcbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlLmpzdHJlZSh7XG4gICAgICBjb3JlOiB7XG4gICAgICAgIGRhdGE6IHRoaXMucGFnZVN0cnVjdHVyZSxcbiAgICAgICAgdGhlbWVzOiB7XG4gICAgICAgICAgbmFtZTogJ2RlZmF1bHQtZGFyaycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcGx1Z2luczogW1xuICAgICAgICAndHlwZXMnLFxuICAgICAgICAnd2hvbGVyb3cnLFxuICAgICAgXSxcbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIGxheW91dDoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1jb2x1bW5zJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtdGgnLFxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVJlZ2lvbjoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1mb2xkZXItbycsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnRUZW1wbGF0ZVJlZ2lvbjoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1mb2xkZXInLFxuICAgICAgICB9LFxuICAgICAgICBtYXRlcmlhbDoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1wdXp6bGUtcGllY2UnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGpzdHJlZU9iaiA9IHRoaXMuJHBhZ2VTdHJ1Y3R1cmUuanN0cmVlKCk7XG4gICAgXG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5vbignbG9hZGVkLmpzdHJlZScsICgpID0+IHtcbiAgICAgIHRoaXMucGFnZVN0cnVjdHVyZUpzb24gPSBqc3RyZWVPYmouZ2V0X2pzb24odGhpcy4kcGFnZVN0cnVjdHVyZSwge1xuICAgICAgICBub19zdGF0ZTogdHJ1ZSxcbiAgICAgICAgbm9faWQ6IHRydWUsXG4gICAgICAgIG5vX2xpX2F0dHI6IHRydWUsXG4gICAgICAgIG5vX2FfYXR0cjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy50YXJnZXQuRnJvbnRlbmRNb25zdGVyLlZpc3VhbEZyYW1lLnBhZ2VTdHJ1Y3R1cmVKc29uID0gdGhpcy5wYWdlU3RydWN0dXJlSnNvbjtcbiAgICAgIGxldCBpc0NvbnRlbnRSZWdpb25Gb3VuZCA9IGZhbHNlO1xuICAgICAgdGhpcy5wYWdlU3RydWN0dXJlWzFdLmNoaWxkcmVuLmZvckVhY2goKHJlZ2lvbikgPT4ge1xuICAgICAgICBpZiAocmVnaW9uLmRhdGEuZW50aXR5RGVwZW5kZW50ICYmIGlzQ29udGVudFJlZ2lvbkZvdW5kID09PSBmYWxzZSkge1xuICAgICAgICAgIGlzQ29udGVudFJlZ2lvbkZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICBqc3RyZWVPYmouc2VsZWN0X25vZGUocmVnaW9uLmlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc3QgY29udHJvbEJ1dHRvbnMgPSAkKCc8ZGl2IGNsYXNzPVwidHJlZS1jb250cm9sLWJ1dHRvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+IEVESVQgYW5kIGV0Yy48L2Rpdj4nKTtcbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlLm9uKCdzZWxlY3Rfbm9kZS5qc3RyZWUnLCAoZSwgb2JqKSA9PiB7XG4gICAgICBjb25zdCAkYW5jaG9yID0gJChgIyR7b2JqLm5vZGUuaWR9YCk7XG4gICAgICAkYW5jaG9yLnByZXBlbmQoY29udHJvbEJ1dHRvbnMpO1xuICAgICAgY29uc3QgdHlwZSA9IG9iai5ub2RlLnR5cGU7XG4gICAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gb2JqLm5vZGUuZGF0YS5lbnRpdHlUeXBlIHx8IG51bGw7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbWF0ZXJpYWwnOlxuICAgICAgICAgIHRoaXMudGFyZ2V0JC5zbW9vdGhTY3JvbGwoe1xuICAgICAgICAgICAgc2Nyb2xsVGFyZ2V0OiB0aGlzLnRhcmdldCQoYFtkYXRhLW1hdGVyaWFsLXBhdGg9XCIke29iai5ub2RlLmRhdGEubWF0ZXJpYWxQYXRofVwiXWApLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSZWdpb25LZXkgPSBvYmoubm9kZS5kYXRhLnJlZ2lvbktleTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndGVtcGxhdGVSZWdpb24nOlxuICAgICAgICBjYXNlICdjb250ZW50VGVtcGxhdGVSZWdpb24nOlxuICAgICAgICAgIHRoaXMudGFyZ2V0JC5zbW9vdGhTY3JvbGwoe1xuICAgICAgICAgICAgc2Nyb2xsVGFyZ2V0OiB0aGlzLnRhcmdldCQoYFtkYXRhLXJlZ2lvbi1rZXk9XCIke29iai5ub2RlLmRhdGEucmVnaW9uS2V5fVwiXWApLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSZWdpb25LZXkgPSBvYmoubm9kZS5kYXRhLnJlZ2lvbktleTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUmVnaW9uS2V5ID0gbnVsbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgdGhpcy5lZGl0TW9kZURhdGEgPSB0aGlzLnRhcmdldC5NT05TVEVSX0VESVRfTU9ERV9EQVRBO1xuICB9XG5cbiAgc3RhdGljIHByb2Nlc3NMYXlvdXQoJGxheW91dFJlZ2lvbikge1xuICAgIGNvbnN0IGl0ZW0gPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQuZXh0cmFjdFJlZ2lvbkRhdGEoJGxheW91dFJlZ2lvbik7XG4gICAgaXRlbS5zdGF0ZSA9IHtcbiAgICAgIG9wZW5lZDogdHJ1ZSxcbiAgICB9O1xuICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICBpdGVtLmRhdGEuaWQgPSBgbGF5b3V0LnRlbXBsYXRlUmVnaW9uLiR7aXRlbS5kYXRhLnJlZ2lvbktleX1gO1xuICAgIGl0ZW0uaWQgPSBgcHNqXyR7aXRlbS5kYXRhLmlkfWA7XG4gICAgaXRlbS5kYXRhLmVudGl0eVR5cGUgPSAnbGF5b3V0JztcbiAgICBjb25zdCB0ZW1wbGF0ZVJlZ2lvbnMgPSBbXTtcblxuICAgIC8vIGZpbmQgbWF0ZXJpYWxzXG4gICAgY29uc3QgJGxheW91dE1hdGVyaWFscyA9ICRsYXlvdXRSZWdpb24uZmluZCgnPltkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICRsYXlvdXRNYXRlcmlhbHMuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgY29uc3QgJGxheW91dE1hdGVyaWFsID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5wcm9jZXNzTGF5b3V0TWF0ZXJpYWwoJGxheW91dE1hdGVyaWFsLCBpdGVtLmlkLCBpdGVtLmRhdGEucmVnaW9uS2V5KTtcbiAgICAgIGNvbnN0IGxheW91dE1hdGVyaWFsSXRlbSA9IHJlc3VsdC5sYXlvdXRNYXRlcmlhbDtcbiAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnMuZm9yRWFjaChyZWdpb24gPT4ge1xuICAgICAgICB0ZW1wbGF0ZVJlZ2lvbnMucHVzaChyZWdpb24pO1xuICAgICAgfSk7XG4gICAgICBpdGVtLmNoaWxkcmVuLnB1c2gobGF5b3V0TWF0ZXJpYWxJdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBpdGVtLFxuICAgICAgdGVtcGxhdGVSZWdpb25zLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgcHJvY2Vzc0xheW91dE1hdGVyaWFsKCRsYXlvdXRNYXRlcmlhbCwgcHJlZml4LCByZWdpb25LZXkpIHtcbiAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gJGxheW91dE1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsSW5kZXgnKTtcbiAgICBjb25zdCBtYXRlcmlhbFBhdGggPSAkbGF5b3V0TWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxQYXRoJyk7XG4gICAgY29uc3QgaXRlbSA9IHtcbiAgICAgIHRleHQ6IGAke1xuICAgICAgICBtYXRlcmlhbFBhdGggPT09ICdjb3JlLmZyb250ZW5kLW1vbnN0ZXItY29yZS5nZW5lcmFsLmNvbnRlbnQtcGxhY2Vob2xkZXInXG4gICAgICAgICAgPyAnTWFpbiBFbnRpdHkgQ29udGVudCdcbiAgICAgICAgICA6IGBNYXRlcmlhbDogJHttYXRlcmlhbEluZGV4fWB9XG4gICAgICBgLFxuICAgICAgdHlwZTogJ21hdGVyaWFsJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6IGAke3ByZWZpeH0uJHttYXRlcmlhbEluZGV4fWAsXG4gICAgICAgIG1hdGVyaWFsSW5kZXgsXG4gICAgICAgIG1hdGVyaWFsUGF0aCxcbiAgICAgICAgZWRpdGFibGVLZXlzOiAkbGF5b3V0TWF0ZXJpYWwuZGF0YSgnZWRpdGFibGVLZXlzJyksXG4gICAgICAgIG5vZGU6ICRsYXlvdXRNYXRlcmlhbCxcbiAgICAgICAgcmVnaW9uS2V5LFxuICAgICAgICBlbnRpdHlUeXBlOiAnbGF5b3V0JyxcbiAgICAgIH0sXG4gICAgICBpZDogYHBzal8ke3ByZWZpeH0uJHttYXRlcmlhbEluZGV4fWAsXG4gICAgfTtcbiAgICBjb25zdCB0ZW1wbGF0ZVJlZ2lvbnMgPSBbXTtcbiAgICBjb25zdCAkcmVnaW9ucyA9ICRsYXlvdXRNYXRlcmlhbC5maW5kKCc+IC5tLW1vbnN0ZXItY29udGVudF9fY29udGVudCcpO1xuICAgICRyZWdpb25zLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5wcm9jZXNzVGVtcGxhdGVSZWdpb24oJCh0aGlzKSk7XG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnMucHVzaChyZXN1bHQpO1xuICAgIH0pO1xuICAgIGlmICh0ZW1wbGF0ZVJlZ2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgaXRlbS5kYXRhLmlzQ29udGVudCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBsYXlvdXRNYXRlcmlhbDogaXRlbSxcbiAgICAgIHRlbXBsYXRlUmVnaW9ucyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHByb2Nlc3NUZW1wbGF0ZVJlZ2lvbigkdGVtcGxhdGVSZWdpb24pIHtcbiAgICBjb25zdCBpdGVtID0gUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmV4dHJhY3RSZWdpb25EYXRhKCR0ZW1wbGF0ZVJlZ2lvbik7XG4gICAgaXRlbS5zdGF0ZSA9IHtcbiAgICAgIG9wZW5lZDogdHJ1ZSxcbiAgICB9O1xuICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICBpdGVtLmRhdGEuZW50aXR5RGVwZW5kZW50ID0gJHRlbXBsYXRlUmVnaW9uLmRhdGEoJ3JlZ2lvbkVudGl0eURlcGVuZGVudCcpID09PSAxO1xuXG4gICAgY29uc3QgcHJlZml4ID0gaXRlbS5kYXRhLmVudGl0eURlcGVuZGVudCA/ICdjb250ZW50JyA6ICd0ZW1wbGF0ZSc7XG4gICAgaXRlbS5kYXRhLmVudGl0eVR5cGUgPSBwcmVmaXg7XG4gICAgaXRlbS5kYXRhLmlkID0gYCR7cHJlZml4fS50ZW1wbGF0ZVJlZ2lvbi4ke2l0ZW0uZGF0YS5yZWdpb25LZXl9YDtcbiAgICBpdGVtLmlkID0gYHBzal8ke2l0ZW0uZGF0YS5pZH1gO1xuXG4gICAgaWYgKGl0ZW0uZGF0YS5lbnRpdHlEZXBlbmRlbnQpIHtcbiAgICAgIGl0ZW0udHlwZSA9ICdjb250ZW50VGVtcGxhdGVSZWdpb24nO1xuICAgIH1cbiAgICBjb25zdCAkcmVnaW9uTWF0ZXJpYWxzID0gJHRlbXBsYXRlUmVnaW9uLmZpbmQoJz5bZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICAkcmVnaW9uTWF0ZXJpYWxzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0IG1hdGVyaWFsID0gUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LnByb2Nlc3NUZW1wbGF0ZVJlZ2lvbk1hdGVyaWFsKFxuICAgICAgICAkKHRoaXMpLFxuICAgICAgICBpdGVtLmRhdGEuaWQsXG4gICAgICAgIHByZWZpeFxuICAgICAgKTtcbiAgICAgIG1hdGVyaWFsLmRhdGEucmVnaW9uS2V5ID0gaXRlbS5kYXRhLnJlZ2lvbktleTtcbiAgICAgIG1hdGVyaWFsLmlkID0gYHBzal8ke21hdGVyaWFsLmRhdGEuaWR9YDtcbiAgICAgIGl0ZW0uY2hpbGRyZW4ucHVzaChtYXRlcmlhbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBzdGF0aWMgcHJvY2Vzc1RlbXBsYXRlUmVnaW9uTWF0ZXJpYWwoJHJlZ2lvbk1hdGVyaWFsLCBwcmVmaXgsIGVudGl0eVR5cGUpIHtcbiAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gJHJlZ2lvbk1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsSW5kZXgnKTtcbiAgICBjb25zdCBtYXRlcmlhbFBhdGggPSAkcmVnaW9uTWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxQYXRoJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGBNYXRlcmlhbDogJHttYXRlcmlhbEluZGV4fWAsXG4gICAgICB0eXBlOiAnbWF0ZXJpYWwnLFxuICAgICAgZGF0YToge1xuICAgICAgICBpZDogYCR7cHJlZml4fS4ke21hdGVyaWFsSW5kZXh9YCxcbiAgICAgICAgbWF0ZXJpYWxJbmRleCxcbiAgICAgICAgbWF0ZXJpYWxQYXRoLFxuICAgICAgICBlZGl0YWJsZUtleXM6ICRyZWdpb25NYXRlcmlhbC5kYXRhKCdlZGl0YWJsZUtleXMnKSxcbiAgICAgICAgbm9kZTogJHJlZ2lvbk1hdGVyaWFsLFxuICAgICAgICBlbnRpdHlUeXBlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGV4dHJhY3RSZWdpb25EYXRhKCRub2RlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6ICRub2RlLmRhdGEoJ2NvbnRlbnREZXNjcmlwdGlvbicpLFxuICAgICAgdHlwZTogJ3RlbXBsYXRlUmVnaW9uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcmVnaW9uSWQ6ICRub2RlLmRhdGEoJ3JlZ2lvbklkJyksXG4gICAgICAgIHJlZ2lvbktleTogJG5vZGUuZGF0YSgncmVnaW9uS2V5JyksXG4gICAgICAgIHVuaXF1ZUNvbnRlbnRJZDogJG5vZGUuZGF0YSgndW5pcXVlQ29udGVudElkJyksXG4gICAgICAgIG5vZGU6ICRub2RlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc2VyaWFsaXplUGFnZSgpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMucmVnaW9uc1N0cnVjdHVyZVtyZWdpb25LZXldO1xuICAgICAgcmVzdWx0W3JlZ2lvbi5rZXldID0gcmVnaW9uLnNlcmlhbGl6ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBtYXRlcmlhbHNCeVJlZ2lvbnMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5yZWdpb25zU3RydWN0dXJlKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICBjb25zdCByZWdpb24gPSB0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmVbcmVnaW9uS2V5XTtcbiAgICAgIHJlc3VsdFtyZWdpb24ua2V5XSA9IHJlZ2lvbi5tYXRlcmlhbHNEZWNsKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1bmlxaWQgKHByZWZpeCwgbW9yZUVudHJvcHkpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC91bmlxaWQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgcmV2aXNlZCBieTogS2Fua3JlbHVuZSAoaHR0cDovL3d3dy53ZWJmYWt0b3J5LmluZm8vKVxuICAvLyAgICAgIG5vdGUgMTogVXNlcyBhbiBpbnRlcm5hbCBjb3VudGVyIChpbiBsb2N1dHVzIGdsb2JhbCkgdG8gYXZvaWQgY29sbGlzaW9uXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJGlkID0gdW5pcWlkKClcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gMTNcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IHZhciAkaWQgPSB1bmlxaWQoJ2ZvbycpXG4gIC8vICAgZXhhbXBsZSAyOiB2YXIgJHJlc3VsdCA9ICRpZC5sZW5ndGggPT09ICgxMyArICdmb28nLmxlbmd0aClcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcbiAgLy8gICBleGFtcGxlIDM6IHZhciAkaWQgPSB1bmlxaWQoJ2JhcicsIHRydWUpXG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgJHJlc3VsdCA9ICRpZC5sZW5ndGggPT09ICgyMyArICdiYXInLmxlbmd0aClcbiAgLy8gICByZXR1cm5zIDM6IHRydWVcblxuICBpZiAodHlwZW9mIHByZWZpeCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwcmVmaXggPSAnJ1xuICB9XG5cbiAgdmFyIHJldElkXG4gIHZhciBfZm9ybWF0U2VlZCA9IGZ1bmN0aW9uIChzZWVkLCByZXFXaWR0aCkge1xuICAgIHNlZWQgPSBwYXJzZUludChzZWVkLCAxMCkudG9TdHJpbmcoMTYpIC8vIHRvIGhleCBzdHJcbiAgICBpZiAocmVxV2lkdGggPCBzZWVkLmxlbmd0aCkge1xuICAgICAgLy8gc28gbG9uZyB3ZSBzcGxpdFxuICAgICAgcmV0dXJuIHNlZWQuc2xpY2Uoc2VlZC5sZW5ndGggLSByZXFXaWR0aClcbiAgICB9XG4gICAgaWYgKHJlcVdpZHRoID4gc2VlZC5sZW5ndGgpIHtcbiAgICAgIC8vIHNvIHNob3J0IHdlIHBhZFxuICAgICAgcmV0dXJuIEFycmF5KDEgKyAocmVxV2lkdGggLSBzZWVkLmxlbmd0aCkpLmpvaW4oJzAnKSArIHNlZWRcbiAgICB9XG4gICAgcmV0dXJuIHNlZWRcbiAgfVxuXG4gIHZhciAkZ2xvYmFsID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogR0xPQkFMKVxuICAkZ2xvYmFsLiRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cyB8fCB7fVxuICB2YXIgJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzXG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fVxuXG4gIGlmICghJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQpIHtcbiAgICAvLyBpbml0IHNlZWQgd2l0aCBiaWcgcmFuZG9tIGludFxuICAgICRsb2N1dHVzLnBocC51bmlxaWRTZWVkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMHg3NWJjZDE1KVxuICB9XG4gICRsb2N1dHVzLnBocC51bmlxaWRTZWVkKytcblxuICAvLyBzdGFydCB3aXRoIHByZWZpeCwgYWRkIGN1cnJlbnQgbWlsbGlzZWNvbmRzIGhleCBzdHJpbmdcbiAgcmV0SWQgPSBwcmVmaXhcbiAgcmV0SWQgKz0gX2Zvcm1hdFNlZWQocGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwLCAxMCksIDgpXG4gIC8vIGFkZCBzZWVkIGhleCBzdHJpbmdcbiAgcmV0SWQgKz0gX2Zvcm1hdFNlZWQoJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQsIDUpXG4gIGlmIChtb3JlRW50cm9weSkge1xuICAgIC8vIGZvciBtb3JlIGVudHJvcHkgd2UgYWRkIGEgZmxvYXQgbG93ZXIgdG8gMTBcbiAgICByZXRJZCArPSAoTWF0aC5yYW5kb20oKSAqIDEwKS50b0ZpeGVkKDgpLnRvU3RyaW5nKClcbiAgfVxuXG4gIHJldHVybiByZXRJZFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy91bmlxaWQuanNcbiAqKi8iLCJjbGFzcyBEYXRhUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvcihjbGFzc05hbWUsIHByb3ZpZGVkS2V5cykge1xuICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIHRoaXMucHJvdmlkZWRLZXlzID0gcHJvdmlkZWRLZXlzO1xuICAgIHRoaXMuYXNzb2NpYXRpb25zID0ge307XG4gICAgdGhpcy5hc3NvY2lhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7RWRpdGFibGV9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGVkaXRhYmxlKCkge1xuICAgIHJldHVybiB3aW5kb3cuRnJvbnRlbmRNb25zdGVyLlZpc3VhbEZyYW1lLmVkaXRhYmxlO1xuICB9XG5cbiAgYXNzb2NpYXRlKCkge1xuICAgIHRoaXMuYXNzb2NpYXRpb25zID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5wcm92aWRlZEtleXMpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMucHJvdmlkZWRLZXlzW3JlZ2lvbktleV07XG4gICAgICBjb25zdCAkcmVnaW9uID0gJChgW2RhdGEtcmVnaW9uLWtleT1cIiR7cmVnaW9uS2V5fVwiXWApLmZpcnN0KCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgJWNSZWdpb246ICR7cmVnaW9uS2V5fWAsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogYm9sZDsgYmFja2dyb3VuZDogIzMzMycpO1xuICAgICAgLy8gY29uc29sZS5sb2cocmVnaW9uKTtcbiAgICAgIGNvbnN0IG1hdGVyaWFscyA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMocmVnaW9uKS5mb3JFYWNoKG1hdGVyaWFsS2V5ID0+IHtcbiAgICAgICAgY29uc3QgZGF0YUtleXMgPSByZWdpb25bbWF0ZXJpYWxLZXldO1xuICAgICAgICBjb25zdCAkbWF0ZXJpYWwgPSAkcmVnaW9uLmZpbmQoYFtkYXRhLW1hdGVyaWFsLWluZGV4PVwiJHttYXRlcmlhbEtleX1cIl1gKS5maXJzdCgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgJWNNYXRlcmlhbDogJHttYXRlcmlhbEtleX1gLCAnY29sb3I6ICNmZmY7IGZvbnQtd2VpZ2h0OiBib2xkOyBiYWNrZ3JvdW5kOiAjNjlmJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCRtYXRlcmlhbCk7XG4gICAgICAgIGlmICgkbWF0ZXJpYWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG1hdGVyaWFsc1ttYXRlcmlhbEtleV0gPSB7XG4gICAgICAgICAgZGF0YUtleXMsXG4gICAgICAgICAgJG1hdGVyaWFsLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBtYXRlcmlhbEVkaXRhYmxlS2V5cyA9ICRtYXRlcmlhbC5kYXRhKCdlZGl0YWJsZUtleXMnKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplTWF0ZXJpYWxFZGl0KG1hdGVyaWFsRWRpdGFibGVLZXlzLCAkbWF0ZXJpYWwsIGRhdGFLZXlzKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hc3NvY2lhdGlvbnNbcmVnaW9uS2V5XSA9IHtcbiAgICAgICAgJHJlZ2lvbixcbiAgICAgICAgbWF0ZXJpYWxzLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpemVNYXRlcmlhbEVkaXQobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRyb290LCBkYXRhS2V5cywgcHJlZml4ID0gJycpIHtcbiAgICBkYXRhS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBvYmogPSBtYXRlcmlhbEVkaXRhYmxlS2V5c1trZXldIHx8ICdOT19TVUNIX0tFWSc7XG4gICAgICBpZiAob2JqID09PSAnTk9fU1VDSF9LRVknKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvYmogPT09IE9iamVjdChvYmopKSB7XG4gICAgICAgIC8vIGl0J3MgcmVjdXJzaXZlXG4gICAgICAgIC8vIGZpcnN0IC0gZmluZCBhbGwgYmxvY2tzXG4gICAgICAgIGNvbnN0ICRibG9ja3MgPSAkcm9vdC5maW5kKGBbZGF0YS1yZWN1cnNpdmUtaXRlbT1cIiR7a2V5fVwiXWApO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICAkYmxvY2tzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYCVjIFJlY3Vyc2l2ZSBpdGVtICR7a2V5fSAjJHtjb3VudGVyfWAsICdiYWNrZ3JvdW5kOiAjMjIyOyBjb2xvcjogI2JhZGE1NScpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAgIHRoYXQuaW5pdGlhbGl6ZU1hdGVyaWFsRWRpdChvYmosICR0aGlzLCBPYmplY3Qua2V5cyhvYmopLCAnaXRlbS4nKTtcbiAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaXQncyBwbGFpbiBmaWVsZFxuICAgICAgICBjb25zdCAkbm9kZSA9ICRyb290LmZpbmQoYFtkYXRhLWVkaXRhYmxlLWtleT1cIiR7cHJlZml4fSR7a2V5fVwiXWApLmZpcnN0KCk7XG4gICAgICAgIGlmICgkbm9kZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgRGF0YVByb3ZpZGVyLmVkaXRhYmxlLmluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAlYyBQbGFpbiBmaWVsZCBlZGl0YWJsZSAke3ByZWZpeH0ke2tleX1gLCAnYmFja2dyb3VuZDogIzIyMjsgY29sb3I6ICNiYWRhNTUnKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJG5vZGVbMF0ub3V0ZXJIVE1MKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgc2VyaWFsaXplS2V5cygpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmFzc29jaWF0aW9ucykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgY29uc3QgcmVnaW9uID0gdGhpcy5hc3NvY2lhdGlvbnNbcmVnaW9uS2V5XTtcbiAgICAgIGNvbnN0ICRyZWdpb24gPSByZWdpb24uJHJlZ2lvbjtcbiAgICAgIHJlc3VsdFtyZWdpb25LZXldID0ge307XG4gICAgICBPYmplY3Qua2V5cyhyZWdpb24ubWF0ZXJpYWxzKS5mb3JFYWNoKG1hdGVyaWFsS2V5ID0+IHtcbiAgICAgICAgY29uc3QgZGF0YUtleXMgPSByZWdpb24ubWF0ZXJpYWxzW21hdGVyaWFsS2V5XS5kYXRhS2V5cztcbiAgICAgICAgY29uc3QgJG1hdGVyaWFsID0gcmVnaW9uLm1hdGVyaWFsc1ttYXRlcmlhbEtleV0uJG1hdGVyaWFsO1xuICAgICAgICByZXN1bHRbcmVnaW9uS2V5XVttYXRlcmlhbEtleV0gPSB0aGlzLnNlcmlhbGl6ZU1hdGVyaWFsKFxuICAgICAgICAgIHJlZ2lvbktleSxcbiAgICAgICAgICBtYXRlcmlhbEtleSxcbiAgICAgICAgICBkYXRhS2V5cyxcbiAgICAgICAgICAkcmVnaW9uLFxuICAgICAgICAgICRtYXRlcmlhbFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NOYW1lLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuZmlsbENvbmZpZyhkYXRhKTtcbiAgfVxuXG4gIGZpbGxDb25maWcoZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgc2VyaWFsaXplTWF0ZXJpYWwocmVnaW9uS2V5LCBtYXRlcmlhbEtleSwgZGF0YUtleXMsICRyZWdpb24sICRtYXRlcmlhbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFQcm92aWRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRGF0YVByb3ZpZGVyLmpzXG4gKiovIiwiaW1wb3J0IFN0YXRpY0NvbnRlbnQgZnJvbSAnLi9wcm92aWRlcnMvU3RhdGljQ29udGVudCc7XG5cbmNsYXNzIERhdGFQcm92aWRlckZhY3Rvcnkge1xuICBzdGF0aWMgZmFjdG9yeShwcm92aWRlckRlY2wsIHByb3ZpZGVkS2V5cykge1xuICAgIGxldCBwcm92aWRlciA9IG51bGw7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gcHJvdmlkZXJEZWNsLmNsYXNzTmFtZVxuICAgICAgfHwgJ0RvdFBsYW50XFxcXE1vbnN0ZXJcXFxcRGF0YUVudGl0eVxcXFxTdGF0aWNDb250ZW50UHJvdmlkZXInO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICBjYXNlICdEb3RQbGFudFxcXFxNb25zdGVyXFxcXERhdGFFbnRpdHlcXFxcU3RhdGljQ29udGVudFByb3ZpZGVyJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHByb3ZpZGVyID0gbmV3IFN0YXRpY0NvbnRlbnQocHJvdmlkZWRLZXlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3ZpZGVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFQcm92aWRlckZhY3Rvcnk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlckZhY3RvcnkuanNcbiAqKi8iLCJpbXBvcnQgYWxsRWRpdGFibGVzIGZyb20gJy4vZWRpdGFibGVzL2FsbCc7XG5cbmNsYXNzIEVkaXRhYmxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lZGl0YWJsZXNCeVR5cGUgPSB7fTtcbiAgICAvLyBpbml0aWFsaXplIGJhc2UgYnVpbGQtaW4gZWRpdGFibGVzXG4gICAgYWxsRWRpdGFibGVzKCk7XG4gICAgdGhpcy5lZGl0YWJsZXNCeVR5cGUgPSB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVM7XG4gIH1cblxuICBzZXJpYWxpemVFZGl0YWJsZSgkbm9kZSkge1xuICAgIGNvbnN0IGVkaXRhYmxlID0gJG5vZGUuZGF0YSgnZWRpdGFibGVQYXJhbXMnKTtcbiAgICBpZiAodHlwZW9mKGVkaXRhYmxlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHR5cGUgPSBlZGl0YWJsZS5oYXNPd25Qcm9wZXJ0eSgndHlwZScpID8gZWRpdGFibGUudHlwZSA6ICdzdHJpbmcnO1xuICAgIGlmICh0aGlzLmVkaXRhYmxlc0J5VHlwZS5oYXNPd25Qcm9wZXJ0eSh0eXBlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHR5cGUgPSAnc3RyaW5nJztcbiAgICB9XG5cbiAgICBjb25zdCBleHBvcnRWYXJpYWJsZSA9IGVkaXRhYmxlLmhhc093blByb3BlcnR5KCd0YXJnZXQnKSA/IGVkaXRhYmxlLnRhcmdldCA6ICdkYXRhJztcblxuICAgIHJldHVybiB0aGlzLmVkaXRhYmxlc0J5VHlwZVt0eXBlXS5zZXJpYWxpemVOb2RlKCRub2RlLCBleHBvcnRWYXJpYWJsZSk7XG4gIH1cblxuICBpbml0aWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBjb25zdCB0eXBlID0gJG5vZGUuZGF0YSgnZWRpdGFibGUtdHlwZScpIHx8ICd1bmVkaXRhYmxlJztcbiAgICBpZiAodHlwZSA9PT0gJ3VuZWRpdGFibGUnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0YWJsZSA9IHRoaXMuZWRpdGFibGVzQnlUeXBlW3R5cGVdIHx8IHRoaXMuZWRpdGFibGVzQnlUeXBlLnN0cmluZztcbiAgICByZXR1cm4gZWRpdGFibGUuaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0YWJsZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRWRpdGFibGUuanNcbiAqKi8iLCJjbGFzcyBIYXNoQXBpIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5mdW5jdGlvbkNhbGxzID0ge307XG5cbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaGFzaCkge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGRvY3VtZW50LmxvY2F0aW9uLmhhc2gubWF0Y2goLyNoYXNoQXBpOiguKj8pOlxcL2hhc2hBcGkvKTtcbiAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGNvbnN0IGZ1bmN0aW9uQ2FsbHMgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGZ1bmN0aW9uQ2FsbHMpIHtcbiAgICAgICAgICBpZiAoaXRlbS5mdW5jKSB7XG4gICAgICAgICAgICB0aGlzLmZ1bmN0aW9uQ2FsbHNbaXRlbS5mdW5jXSA9IGl0ZW0uYXJncyB8fCB7fTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzaG91bGRDYWxsKGZ1bmMpIHtcbiAgICByZXR1cm4gdGhpcy5mdW5jdGlvbkNhbGxzW2Z1bmNdIHx8IGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhhc2hBcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanNcbiAqKi8iLCJpbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi9GcmFtZUFwaSc7XG5pbXBvcnQgdW5pcXVlSWQgZnJvbSAnLi8uLi91bmlxaWQnO1xuaW1wb3J0IERhdGFQcm92aWRlckZhY3RvcnkgZnJvbSAnLi9EYXRhUHJvdmlkZXJGYWN0b3J5JztcbmltcG9ydCBFZGl0YWJsZSBmcm9tICcuL0VkaXRhYmxlJztcblxuY2xhc3MgVmlzdWFsRnJhbWVcbntcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgRnJhbWVBcGkuYmluZE1lc3NhZ2VMaXN0ZW5lcih0aGlzKTtcbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YSA9IG51bGw7XG4gICAgLyogZ2xvYmFsIHdpbmRvdzpmYWxzZSAqL1xuICAgIHRoaXMucGFyZW50V2luZG93ID0gd2luZG93LnBhcmVudDtcbiAgICAvKiogQHZhciBGcm9udGVuZE1vbnN0ZXIgKi9cbiAgICB0aGlzLnBhcmVudE1vbnN0ZXIgPSB0aGlzLnBhcmVudFdpbmRvdy5Gcm9udGVuZE1vbnN0ZXI7XG4gICAgdGhpcy5wYXJlbnRCdWlsZGVyID0gdGhpcy5wYXJlbnRNb25zdGVyLmJ1aWxkZXI7XG4gICAgdGhpcy5jdXJyZW50TW9uc3RlckNvbnRlbnQgPSBmYWxzZTtcbiAgICB0aGlzLmVkaXRhYmxlID0gbmV3IEVkaXRhYmxlKCk7XG4gICAgdGhpcy5tYWtlSXRNb3ZlKCk7XG4gICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICAkKCgpID0+IHtcbiAgICAgIHRoaXMucGFyZW50QnVpbGRlci5wYWdlQ2hhbmdlZCgpO1xuICAgICAgdGhpcy5pbml0UHJvdmlkZXJzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5Nb25zdGVyRWRpdERhdGEgPSB3aW5kb3cuTU9OU1RFUl9FRElUX01PREVfREFUQTtcbiAgfVxuXG4gIGluaXRQcm92aWRlcnMoKSB7XG4gICAgdGhpcy5wcm92aWRlcnMgPSB7XG4gICAgICBsYXlvdXQ6IHRoaXMuZ2V0UHJvdmlkZXJzKHRoaXMuTW9uc3RlckVkaXREYXRhLmxheW91dCksXG4gICAgICB0ZW1wbGF0ZTogdGhpcy5nZXRQcm92aWRlcnModGhpcy5Nb25zdGVyRWRpdERhdGEudGVtcGxhdGUpLFxuICAgICAgZW50aXR5OiB0aGlzLmdldFByb3ZpZGVycyh0aGlzLk1vbnN0ZXJFZGl0RGF0YS5lbnRpdHkpLFxuICAgIH07XG4gIH1cblxuICBzZXQgcGFnZVN0cnVjdHVyZUpzb24odmFsdWUpIHtcbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHBhZ2VTdHJ1Y3R1cmVKc29uKCkge1xuICAgIHJldHVybiB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YTtcbiAgfVxuXG4gIGdldFByb3ZpZGVycyhhcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhhcnIucHJvdmlkZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBwcm92aWRlckRlY2wgPSBhcnIucHJvdmlkZXJzW2tleV07XG4gICAgICByZXN1bHRba2V5XSA9IERhdGFQcm92aWRlckZhY3RvcnkuZmFjdG9yeShcbiAgICAgICAgcHJvdmlkZXJEZWNsLFxuICAgICAgICBhcnIucHJvdmlkZWRLZXlzW2tleV0gfHwge31cbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldCAkbW9uc3RlckNvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGUpIHtcbiAgICAgIHJldHVybiB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hNb25zdGVyQ29udGVudENhY2hlKCk7XG4gICAgcmV0dXJuIHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGU7XG4gIH1cblxuICByZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpIHtcbiAgICB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlID0ge307XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgJCh0aGlzLnNldHRpbmdzWydtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InXSkuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgaWYgKCF0aGF0LmN1cnJlbnRNb25zdGVyQ29udGVudCkge1xuICAgICAgICB0aGF0LmN1cnJlbnRNb25zdGVyQ29udGVudCA9ICQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyk7XG4gICAgICB9XG4gICAgICB0aGF0LiRtb25zdGVyQ29udGVudENhY2hlWyQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyldID0gJCh0aGlzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUhhbmRsZXJzKCkge1xuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsICYmIHRoaXMuJGhhbmRsZXJzKSB7XG4gICAgICB0aGlzLiRoYW5kbGVycy5jc3MoXG4gICAgICAgICd0b3AnLFxuICAgICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLnBvc2l0aW9uKCkudG9wXG4gICAgICAgICAgKyB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLmhlaWdodCgpXG4gICAgICAgICAgLSB0aGlzLiRoYW5kbGVycy5oZWlnaHQoKVxuICAgICAgKTtcbiAgICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBtYWtlSXRNb3ZlKCkge1xuICAgIHRoaXMuJGhhbmRsZXJzID0gJChgXG48ZGl2IGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc1wiPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fY29uZmlndXJlXCI+XG4gICAgPGkgY2xhc3M9XCJmYSBmYS1jb2dcIj48L2k+XG4gIDwvYT5cbiAgPHNwYW4gY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19ibG9jay1uYW1lXCI+QmxvY2sgbmFtZSBoZXJlPC9zcGFuPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fbW92ZS11cFwiPlxuICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtdXBcIj48L2k+XG4gIDwvYT5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtZG93blwiPlxuICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG93blwiPjwvaT5cbiAgPC9hPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fY2xvbmVcIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLWNsb25lXCI+PC9pPlxuICA8L2E+XG4gIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19yZW1vdmVcIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPlxuICA8L2E+XG48L2Rpdj5gKTtcbiAgICAkKCdib2R5JykuYXBwZW5kKHRoaXMuJGhhbmRsZXJzKTtcbiAgICB0aGlzLiRoYW5kbGVycy5oaWRlKCk7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgJCh0aGlzLnNldHRpbmdzWydtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InXSkub24oe1xuICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24gaG92ZXJJbigpIHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAkdGhpcy5hZGRDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1oaWdobGlnaHRlZCcpO1xuICAgICAgfSxcbiAgICAgIG1vdXNlbGVhdmU6IGZ1bmN0aW9uIGhvdmVyT3V0KCkge1xuICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdtLW1vbnN0ZXItY29udGVudF9fbWF0ZXJpYWwtLWhpZ2hsaWdodGVkJyk7XG4gICAgICB9LFxuICAgICAgY2xpY2s6IGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICB0aGF0LnNlbGVjdE1hdGVyaWFsKCR0aGlzKTtcbiAgICAgIH0sXG4gICAgfSwgJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgIHRoYXQuJGhhbmRsZXJzXG4gICAgICAub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLXVwJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgICAgIGNvbnN0ICRwcmV2ID0gdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5wcmV2KCdbZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICAgICAgICBpZiAoJHByZXYubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLmluc2VydEJlZm9yZSgkcHJldik7XG4gICAgICAgICAgICB0aGF0LnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgICAgICB0aGF0LnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtZG93bicsICgpID0+IHtcbiAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICBjb25zdCAkbmV4dCA9IHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwubmV4dCgnW2RhdGEtaXMtbWF0ZXJpYWxdJyk7XG4gICAgICAgICAgaWYgKCRuZXh0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5pbnNlcnRBZnRlcigkbmV4dCk7XG4gICAgICAgICAgICB0aGF0LnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgICAgICB0aGF0LnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX2Nsb25lJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgICAgIGNvbnN0ICRjbG9uZWRNYXRlcmlhbCA9IHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwuY2xvbmUoKTtcbiAgICAgICAgICBjb25zdCByYW5kb21JbmRleCA9IHVuaXF1ZUlkKCdtYXQnKTtcbiAgICAgICAgICAkY2xvbmVkTWF0ZXJpYWxcbiAgICAgICAgICAgIC5pbnNlcnRBZnRlcih0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKVxuICAgICAgICAgICAgLmRhdGEoXG4gICAgICAgICAgICAgICdtYXRlcmlhbEluZGV4JyxcbiAgICAgICAgICAgICAgcmFuZG9tSW5kZXhcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hdHRyKCdkYXRhLW1hdGVyaWFsLWluZGV4JywgcmFuZG9tSW5kZXgpO1xuICAgICAgICAgIHRoYXQuc2VsZWN0TWF0ZXJpYWwoJGNsb25lZE1hdGVyaWFsKTtcbiAgICAgICAgICB0aGF0LnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLm9uKCdjbGljaycsICcubW9uc3Rlci1ibG9jay1oYW5kbGVyc19fcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgbWF0ZXJpYWw/JykpIHtcbiAgICAgICAgICAgIHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsID0gbnVsbDtcbiAgICAgICAgICAgIHRoYXQuJGhhbmRsZXJzLmhpZGUoKTsgLy8gaXQgZG9lcyBub3Qgd29yay4gd2h5PyBOZWVkIHRvIGZpeCFcbiAgICAgICAgICAgIHRoYXQucGFyZW50QnVpbGRlci5wYWdlQ2hhbmdlZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdE1hdGVyaWFsKCRtYXRlcmlhbCkge1xuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsID09PSAkbWF0ZXJpYWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgfVxuICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwgPSAkbWF0ZXJpYWw7XG4gICAgdGhpcy51cGRhdGVIYW5kbGVycygpO1xuICAgIHRoaXMuJGhhbmRsZXJzLnNob3coKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZUNvbnRlbnQoY2FsbGJhY2spIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBPYmplY3Qua2V5cyh0aGlzLiRtb25zdGVyQ29udGVudCkuZm9yRWFjaCh1bmlxdWVDb250ZW50SWQgPT4ge1xuICAgICAgY29uc3QgJG1vbnN0ZXIgPSB0aGlzLiRtb25zdGVyQ29udGVudFt1bmlxdWVDb250ZW50SWRdO1xuICAgICAgcmVzdWx0WyRtb25zdGVyLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpXSA9IHRoYXQuc2VyaWFsaXplVW5pcXVlQ29udGVudCgkbW9uc3Rlcik7XG4gICAgfSk7XG4gICAgdGhpcy5zZW5kVG9CdWlsZGVyKGNhbGxiYWNrLCBbcmVzdWx0XSk7XG4gIH1cblxuICBzZXJpYWxpemVVbmlxdWVDb250ZW50KCRtb25zdGVyQ29udGVudCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIHJlc3VsdC51bmlxdWVDb250ZW50SWQgPSAkbW9uc3RlckNvbnRlbnQuZGF0YSgndW5pcXVlQ29udGVudElkJyk7XG4gICAgcmVzdWx0Lm1hdGVyaWFscyA9IHt9O1xuICAgICRtb25zdGVyQ29udGVudC5maW5kKCdbZGF0YS1pcy1tYXRlcmlhbD1cXCcxXFwnXScpLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0IG1hdGVyaWFsID0ge307XG4gICAgICBtYXRlcmlhbC5ibG9jayA9ICQodGhpcykuZGF0YSgnbWF0ZXJpYWxCbG9jaycpO1xuICAgICAgcmVzdWx0Lm1hdGVyaWFsc1skKHRoaXMpLmRhdGEoJ21hdGVyaWFsSW5kZXgnKV0gPSBtYXRlcmlhbDtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgVmlzdWFsRnJhbWUgc2V0dGluZ3MuXG4gICAqIFVzZXMgVmlzdWFsRnJhbWVTZXR0aW5ncyB2YXJpYWJsZSBpZiBwcm92aWRlZCBvciBkZWZhdWx0IHZhbHVlcyBpbnN0ZWFkLlxuICAgKi9cbiAgcGFyYW1zKCkge1xuICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5WaXN1YWxGcmFtZVNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgJ21vbnN0ZXItY29udGVudC1zZWxlY3Rvcic6ICcubS1tb25zdGVyLWNvbnRlbnRfX2NvbnRlbnQnLFxuICAgIH07XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICB9XG5cbiAgc2VuZFRvQnVpbGRlcihmdW5jLCBhcmdzKSB7XG4gICAgRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5wYXJlbnRXaW5kb3csIGZ1bmMsIGFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIGZvcm1TdWJtaXQoZGF0YSkge1xuICAgIGNvbnN0ICRmb3JtID0gJCgnPGZvcm0gbWV0aG9kPVwiUE9TVFwiPjwvZm9ybT4nKTtcbiAgICBjb25zdCAkaW5wdXQgPSAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfX2pzb25cIj4nKTtcbiAgICBjb25zdCAkY3NyZiA9ICQoJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCI+Jyk7XG5cbiAgICAkY3NyZlxuICAgICAgLmF0dHIoJ25hbWUnLCAkKCdtZXRhW25hbWU9Y3NyZi1wYXJhbV0nKS5hdHRyKCdjb250ZW50JykpXG4gICAgICAudmFsKCQoJ21ldGFbbmFtZT1jc3JmLXRva2VuXScpLmF0dHIoJ2NvbnRlbnQnKSlcbiAgICAgIC5hcHBlbmRUbygkZm9ybSk7XG5cbiAgICAkaW5wdXRcbiAgICAgIC52YWwoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAuYXBwZW5kVG8oJGZvcm0pO1xuXG4gICAgJGZvcm1bMF0uc3VibWl0KCk7XG4gIH1cblxuICBjb25zdHJ1Y3RUZW1wbGF0ZURhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3ZpZGVyc0VudGl0aWVzOiB0aGlzLnBhcmVudEJ1aWxkZXIuc2VyaWFsaXplKCksXG4gICAgICByZWdpb25zTWF0ZXJpYWxzOiB0aGlzLnBhcmVudEJ1aWxkZXJcbiAgICAgICAgLmVudmlyb25tZW50cy5nZXQoJ3BhZ2Utc3RydWN0dXJlJykubWF0ZXJpYWxzQnlSZWdpb25zKCksXG4gICAgfTtcbiAgfVxuXG4gIG5ld0Jsb2NrKG1hdGVyaWFsTmFtZSwgc2VsZWN0ZWRFbnRpdHksIHJlZ2lvbk5hbWUpIHtcbiAgICAvLyBAdG9kbyBBZGQgbG9hZGVyIGhlcmUgYXMgd2UgYXJlIHVzaW5nIGZvcm0gcG9zdCAhXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSB1bmlxdWVJZCgnbWF0Jyk7XG4gICAgY29uc3QgbmV3RGF0YSA9IHRoaXMuaXRlcmF0ZVRlbXBsYXRlVHlwZSh0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uKTtcbiAgICBkZWJ1Z2dlcjtcbiAgICBpZiAobmV3RGF0YS5lbnRpdHkucmVnaW9uc01hdGVyaWFscy5oYXNPd25Qcm9wZXJ0eShyZWdpb25OYW1lKSA9PT0gZmFsc2UpIHtcbiAgICAgIG5ld0RhdGEuZW50aXR5LnJlZ2lvbnNNYXRlcmlhbHNbcmVnaW9uTmFtZV0gPSB7fTtcbiAgICB9XG4gICAgLy8gd2UgYXJlIG1vZGlmeWluZyB0ZW1wbGF0ZSBkYXRhIGJ5IGFkZGluZyBuZXcgbWF0ZXJpYWwgaW50byBuZWVkZWQgcmVnaW9uXG4gICAgbmV3RGF0YS5lbnRpdHkucmVnaW9uc01hdGVyaWFsc1tyZWdpb25OYW1lXS5kZWNsW3JhbmRvbUluZGV4XSA9IHtcbiAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbE5hbWUsXG4gICAgfTtcbiAgICBuZXdEYXRhLmVudGl0eS5yZWdpb25zTWF0ZXJpYWxzW3JlZ2lvbk5hbWVdLm1hdGVyaWFsc09yZGVyLnB1c2gocmFuZG9tSW5kZXgpO1xuICAgIFZpc3VhbEZyYW1lLmZvcm1TdWJtaXQobmV3RGF0YSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLml0ZXJhdGVUZW1wbGF0ZVR5cGUodGhpcy5wYWdlU3RydWN0dXJlSnNvbik7XG4gICAgZGF0YS5hY3Rpb24gPSAnc2F2ZSc7XG4gICAgZGVidWdnZXI7XG4gICAgVmlzdWFsRnJhbWUuZm9ybVN1Ym1pdChkYXRhKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpdGVyYXRlVGVtcGxhdGVUeXBlKGFycikge1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGVudGl0eToge1xuICAgICAgICBtYXRlcmlhbHNCeVJlZ2lvbkRlY2w6IHt9LFxuICAgICAgICBwcm92aWRlcnM6IHt9LFxuICAgICAgfSxcbiAgICB9O1xuICAgIGFyci5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBvYmouZGF0YS5pZDtcbiAgICAgIGNvbnN0IHJlZ2lvbnNSZXN1bHQgPSBWaXN1YWxGcmFtZS5pdGVyYXRlVGVtcGxhdGVSZWdpb25zKG9iai5jaGlsZHJlbik7XG4gICAgICAvLyBsYXlvdXQgb3IgdGVtcGxhdGVcbiAgICAgIHJlc3VsdFtrZXldID0ge1xuICAgICAgICB0ZW1wbGF0ZVJlZ2lvbnM6IHJlZ2lvbnNSZXN1bHQudGVtcGxhdGVSZWdpb25zLFxuICAgICAgICB0ZW1wbGF0ZUlkOiBvYmouZGF0YS50ZW1wbGF0ZUlkLFxuICAgICAgICBwcm92aWRlcnM6IHt9LFxuICAgICAgfTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhyZWdpb25zUmVzdWx0LmVudGl0eU1hdGVyaWFscykubGVuZ3RoID4gMCkge1xuICAgICAgICBPYmplY3Qua2V5cyhyZWdpb25zUmVzdWx0LmVudGl0eU1hdGVyaWFscykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgICAgIHJlc3VsdC5lbnRpdHkubWF0ZXJpYWxzQnlSZWdpb25EZWNsW3JlZ2lvbktleV0gPSByZWdpb25zUmVzdWx0LmVudGl0eU1hdGVyaWFsc1tyZWdpb25LZXldO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdFtrZXldLnByb3ZpZGVycyA9IHRoaXMuc2VyaWFsaXplUHJvdmlkZXJzKGtleSk7XG4gICAgfSk7XG4gICAgcmVzdWx0LmVudGl0eS5wcm92aWRlcnMgPSB0aGlzLnNlcmlhbGl6ZVByb3ZpZGVycygnZW50aXR5Jyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNlcmlhbGl6ZVByb3ZpZGVycyh0eXBlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5wcm92aWRlcnNbdHlwZV0pLmZvckVhY2gocHJvdmlkZXJLZXkgPT4ge1xuICAgICAgcmVzdWx0W3Byb3ZpZGVyS2V5XSA9IHRoaXMucHJvdmlkZXJzW3R5cGVdW3Byb3ZpZGVyS2V5XS5zZXJpYWxpemUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGl0ZXJhdGVUZW1wbGF0ZVJlZ2lvbnMoYXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgdGVtcGxhdGVSZWdpb25zOiB7fSxcbiAgICAgIHRlbXBsYXRlUmVnaW9uc09yZGVyOiBbXSxcbiAgICAgIGVudGl0eU1hdGVyaWFsczoge30sXG4gICAgfTtcbiAgICBhcnIuZm9yRWFjaChvYmogPT4ge1xuICAgICAgLy8gY29uc3Qga2V5ID0gb2JqLmRhdGEuaWQucmVwbGFjZSgvXi4qXFwuLywgJycpO1xuICAgICAgY29uc3QgcmVnaW9uS2V5ID0gb2JqLmRhdGEucmVnaW9uS2V5O1xuICAgICAgcmVzdWx0LnRlbXBsYXRlUmVnaW9uc09yZGVyLnB1c2gocmVnaW9uS2V5KTtcbiAgICAgIGNvbnN0IGVudGl0eURlcGVuZGVudCA9IG9iai5kYXRhLmVudGl0eURlcGVuZGVudCB8fCBmYWxzZTtcblxuICAgICAgY29uc3QgcmVnaW9uTWF0ZXJpYWxzID0gVmlzdWFsRnJhbWUuaXRlcmF0ZU1hdGVyaWFscyhvYmouY2hpbGRyZW4sIHJlZ2lvbktleSk7XG5cbiAgICAgIGlmIChlbnRpdHlEZXBlbmRlbnQgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgYW4gZXhhY3QgdGVtcGxhdGUgcmVnaW9uXG4gICAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnNbcmVnaW9uS2V5XSA9IHtcbiAgICAgICAgICByZWdpb25JZDogb2JqLmRhdGEucmVnaW9uSWQsXG4gICAgICAgICAgcmVnaW9uS2V5LFxuICAgICAgICAgIHVuaXF1ZUNvbnRlbnRJZDogb2JqLmRhdGEudW5pcXVlQ29udGVudElkLFxuICAgICAgICAgIG1hdGVyaWFsc0RlY2xzOiByZWdpb25NYXRlcmlhbHMsXG4gICAgICAgICAgZW50aXR5RGVwZW5kZW50LFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnRlbXBsYXRlUmVnaW9uc1tyZWdpb25LZXldID0ge1xuICAgICAgICAgIHJlZ2lvbklkOiBvYmouZGF0YS5yZWdpb25JZCxcbiAgICAgICAgICByZWdpb25LZXksXG4gICAgICAgICAgdW5pcXVlQ29udGVudElkOiBvYmouZGF0YS51bmlxdWVDb250ZW50SWQsXG4gICAgICAgICAgZW50aXR5RGVwZW5kZW50LFxuICAgICAgICB9O1xuICAgICAgICAvLyB0aGlzIGlzIGVudGl0eS1kZXBlbmRlbnQgcmVnaW9uXG4gICAgICAgIHJlc3VsdC5lbnRpdHlNYXRlcmlhbHNbcmVnaW9uS2V5XSA9IHJlZ2lvbk1hdGVyaWFscztcbiAgICAgIH1cblxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgaXRlcmF0ZU1hdGVyaWFscyhhcnIsIHJlZ2lvbktleSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGRlY2w6IHt9LFxuICAgICAgbWF0ZXJpYWxzT3JkZXI6IFtdLFxuICAgIH07XG4gICAgYXJyLmZvckVhY2gob2JqID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IG9iai5kYXRhLm1hdGVyaWFsSW5kZXg7XG4gICAgICByZXN1bHQuZGVjbFtrZXldID0ge1xuICAgICAgICAvLyBlZGl0YWJsZXNLZXlzOiBvYmouZGF0YS5lZGl0YWJsZUtleXMsXG4gICAgICAgIG1hdGVyaWFsOiBvYmouZGF0YS5tYXRlcmlhbFBhdGgsXG4gICAgICB9O1xuICAgICAgcmVzdWx0Lm1hdGVyaWFsc09yZGVyLnB1c2goa2V5KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbEZyYW1lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZS5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBXWVNJV1lHIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBCYXNlRWRpdGFibGUuZnJhbWUkKCRub2RlKTtcbiAgICBjb25zdCBlZGl0b3IgPSBub2RlLmRhdGEoJ2VkaXRvcicpO1xuICAgIGlmIChlZGl0b3IpIHtcbiAgICAgIHJldHVybiBlZGl0b3IuZ2V0RGF0YSgpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZS5odG1sKCk7XG4gIH1cblxuICBpbml0aWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gJG5vZGVbMF07XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgYXV0b1BhcmFncmFwaDogZmFsc2UsXG4gICAgICBlbmFibGVDb250ZW50RWRpdGFibGU6IHRydWUsXG4gICAgICBpZ25vcmVFbXB0eVBhcmFncmFwaDogdHJ1ZSxcbiAgICAgIGVudGVyTW9kZTogd2luZG93LkNLRURJVE9SLkVOVEVSX0JSLFxuICAgIH07XG4gICAgLy8gJCgoKSA9PiB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB3aW5kb3cuQWxsb3lFZGl0b3IuZWRpdGFibGUobm9kZSwgY29uZmlnKS5nZXQoJ25hdGl2ZUVkaXRvcicpO1xuICAgICAgJG5vZGUuZGF0YSgnZWRpdG9yJywgZWRpdG9yKTtcbiAgICAvLyB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdZU0lXWUc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9XWVNJV1lHLmpzXG4gKiovIiwiaW1wb3J0IFdZU0lXWUcgZnJvbSAnLi9XWVNJV1lHJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJy4vbGluayc7XG5pbXBvcnQgVGV4dFN0cmluZyBmcm9tICcuL3N0cmluZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFsbCgpIHtcbiAgaWYgKHR5cGVvZih3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVMpID09PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFUyA9IHt9O1xuICB9XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snd3lzaXd5ZyddID0gbmV3IFdZU0lXWUcoKTtcbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWydsaW5rJ10gPSBuZXcgTGluaygpO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ2ltYWdlJ10gPSBuZXcgSW1hZ2UoKTtcbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWydzdHJpbmcnXSA9IG5ldyBUZXh0U3RyaW5nKCk7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvYWxsLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFZGl0YWJsZSBmcm9tICcuL0Jhc2VFZGl0YWJsZSc7XG5cbmNsYXNzIEltYWdlIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIGNvbnN0ICRpbWcgPSAkbm9kZS5maW5kKCdpbWcnKS5maXJzdCgpO1xuICAgIHJldHVybiB7XG4gICAgICBzcmM6ICRpbWcuYXR0cignc3JjJyksXG4gICAgICBhbHQ6ICRpbWcuYXR0cignYWx0JyksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2ltYWdlLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFZGl0YWJsZSBmcm9tICcuL0Jhc2VFZGl0YWJsZSc7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6ICRub2RlLmRhdGEoJ29yaWdpbmFsSHJlZicpID8gJG5vZGUuZGF0YSgnb3JpZ2luYWxIcmVmJykgOiAkbm9kZS5hdHRyKCdocmVmJyksXG4gICAgICBhbmNob3I6ICRub2RlLmh0bWwoKSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9saW5rLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFZGl0YWJsZSBmcm9tICcuL0Jhc2VFZGl0YWJsZSc7XG5cbmNsYXNzIFRleHRTdHJpbmcgZXh0ZW5kcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IEJhc2VFZGl0YWJsZS5mcmFtZSQoJG5vZGUpO1xuICAgIGNvbnN0IGVkaXRvciA9IG5vZGUuZGF0YSgnZWRpdG9yJyk7XG4gICAgaWYgKGVkaXRvcikge1xuICAgICAgcmV0dXJuIGVkaXRvci5nZXREYXRhKCk7XG4gICAgfVxuICAgIHJldHVybiBub2RlLmh0bWwoKTtcbiAgfVxuXG4gIGluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSAkbm9kZVswXTtcbiAgICAvKiBnbG9iYWwgd2luZG93OmZhbHNlICovXG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBhbGxvd2VkQ29udGVudDogJ2kgdScsXG4gICAgICB0b29sYmFyczoge1xuICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICBzZWxlY3Rpb25zOiB3aW5kb3cuQWxsb3lFZGl0b3IuU2VsZWN0aW9ucyxcbiAgICAgICAgICB0YWJJbmRleDogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhdXRvUGFyYWdyYXBoOiBmYWxzZSxcbiAgICAgIGVuYWJsZUNvbnRlbnRFZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlnbm9yZUVtcHR5UGFyYWdyYXBoOiB0cnVlLFxuICAgICAgYmxvY2tsZXNzOiB0cnVlLFxuICAgICAgZW50ZXJNb2RlOiB3aW5kb3cuQ0tFRElUT1IuRU5URVJfQlIsXG4gICAgfTtcbiAgICAvLyAkKCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZWRpdG9yID0gd2luZG93LkFsbG95RWRpdG9yLmVkaXRhYmxlKG5vZGUsIGNvbmZpZykuZ2V0KCduYXRpdmVFZGl0b3InKTtcbiAgICAgIGVkaXRvci5vbigna2V5JywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQuZGF0YS5rZXlDb2RlID09PSAxMyB8fCBldmVudC5kYXRhLmtleUNvZGUgPT09IHdpbmRvdy5DS0VESVRPUi5TSElGVCArIDEzKSB7XG4gICAgICAgICAgLy8gYWRkIHNhdmluZyBmdW5jdGlvbiBoZXJlXG4gICAgICAgICAgZXZlbnQuY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZWRpdG9yLm9uKCdwYXN0ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQuZGF0YS5kYXRhVmFsdWUgPSBldmVudC5kYXRhLmRhdGFWYWx1ZS5yZXBsYWNlKC88YnJbXFxzXFwvXSo+L2dtaSwgJyAnKTtcbiAgICAgIH0pO1xuICAgICAgJG5vZGUuZGF0YSgnZWRpdG9yJywgZWRpdG9yKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZygkbm9kZSwgbm9kZSk7XG4gICAgICAvLyB0aHJvdyBlO1xuICAgIH1cbiAgICAvLyB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRTdHJpbmc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9zdHJpbmcuanNcbiAqKi8iLCJpbXBvcnQgRGF0YVByb3ZpZGVyIGZyb20gJy4uL0RhdGFQcm92aWRlcic7XG5cbmNsYXNzIFN0YXRpY0NvbnRlbnQgZXh0ZW5kcyBEYXRhUHJvdmlkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm92aWRlZEtleXMpIHtcbiAgICBzdXBlcignRG90UGxhbnRcXFxcTW9uc3RlclxcXFxEYXRhRW50aXR5XFxcXFN0YXRpY0NvbnRlbnRQcm92aWRlcicsIHByb3ZpZGVkS2V5cyk7XG4gIH1cblxuICBmaWxsQ29uZmlnKGRhdGEpIHtcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YTtcbiAgICBuZXdEYXRhLmVudGl0aWVzID0gdGhpcy5zZXJpYWxpemVLZXlzKCk7XG4gICAgcmV0dXJuIG5ld0RhdGE7XG4gIH1cblxuICBzZXJpYWxpemVNYXRlcmlhbChyZWdpb25LZXksIG1hdGVyaWFsS2V5LCBkYXRhS2V5cywgJHJlZ2lvbiwgJG1hdGVyaWFsKSB7XG4gICAgY29uc3QgbWF0ZXJpYWxFZGl0YWJsZUtleXMgPSAkbWF0ZXJpYWwuZGF0YSgnZWRpdGFibGVLZXlzJyk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5yZWN1cnNpdmVTZXJpYWxpemUobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRtYXRlcmlhbCwgZGF0YUtleXMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZWN1cnNpdmVTZXJpYWxpemUobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRyb290LCBkYXRhS2V5cywgcHJlZml4ID0gJycpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcblxuICAgIGRhdGFLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IG9iaiA9IG1hdGVyaWFsRWRpdGFibGVLZXlzW2tleV0gfHwgJ05PX1NVQ0hfS0VZJztcbiAgICAgIGlmIChvYmogPT09ICdOT19TVUNIX0tFWScpIHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvYmogPT09IE9iamVjdChvYmopKSB7XG4gICAgICAgIC8vIGl0J3MgcmVjdXJzaXZlXG4gICAgICAgIC8vIGZpcnN0IC0gZmluZCBhbGwgYmxvY2tzXG4gICAgICAgIGNvbnN0ICRibG9ja3MgPSAkcm9vdC5maW5kKGBbZGF0YS1yZWN1cnNpdmUtaXRlbT1cIiR7a2V5fVwiXWApO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICByZXN1bHRba2V5XSA9IFtdO1xuICAgICAgICAkYmxvY2tzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh0aGF0LnJlY3Vyc2l2ZVNlcmlhbGl6ZShvYmosICR0aGlzLCBPYmplY3Qua2V5cyhvYmopLCAnaXRlbS4nKSk7XG4gICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGl0J3MgcGxhaW4gZmllbGRcbiAgICAgICAgY29uc3QgJG5vZGUgPSAkcm9vdC5maW5kKGBbZGF0YS1lZGl0YWJsZS1rZXk9XCIke3ByZWZpeH0ke2tleX1cIl1gKS5maXJzdCgpO1xuICAgICAgICBpZiAoJG5vZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBTa2lwcGVkIFtkYXRhLWVkaXRhYmxlLWtleT1cIiR7cHJlZml4fSR7a2V5fVwiXSBhcyBub3QgZm91bmRgKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0W2tleV0gPSBEYXRhUHJvdmlkZXIuZWRpdGFibGUuc2VyaWFsaXplRWRpdGFibGUoJG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGljQ29udGVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvcHJvdmlkZXJzL1N0YXRpY0NvbnRlbnQuanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi92aXN1YWwtYnVpbGRlci9idW5kbGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=