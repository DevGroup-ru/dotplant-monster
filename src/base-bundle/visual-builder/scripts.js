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
	
	__webpack_require__(28);
	
	var _FrontendMonster = __webpack_require__(10);
	
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
	    key: "initializeEditables",
	    value: function initializeEditables(w) {}
	  }], [{
	    key: "frame$",
	    get: function get() {
	      return window.FrontendMonster.builder.frameContentWindow.$;
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _VisualBuilder = __webpack_require__(12);
	
	var _VisualBuilder2 = _interopRequireDefault(_VisualBuilder);
	
	var _VisualFrame = __webpack_require__(25);
	
	var _VisualFrame2 = _interopRequireDefault(_VisualFrame);
	
	var _HashApi = __webpack_require__(24);
	
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _all = __webpack_require__(14);
	
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
	    key: 'initializeEditables',
	    value: function initializeEditables(w) {
	      var _this = this;
	
	      Object.keys(this.editablesByType).forEach(function (editableKey) {
	        var editable = _this.editablesByType[editableKey];
	        editable.initializeEditables(w);
	      });
	    }
	  }]);
	
	  return Editable;
	}();
	
	exports.default = Editable;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _SiteStructureEnvironment = __webpack_require__(22);
	
	var _SiteStructureEnvironment2 = _interopRequireDefault(_SiteStructureEnvironment);
	
	var _MaterialsEnvironment = __webpack_require__(20);
	
	var _MaterialsEnvironment2 = _interopRequireDefault(_MaterialsEnvironment);
	
	var _CustomizationEnvironment = __webpack_require__(19);
	
	var _CustomizationEnvironment2 = _interopRequireDefault(_CustomizationEnvironment);
	
	var _ActionEnvironment = __webpack_require__(18);
	
	var _ActionEnvironment2 = _interopRequireDefault(_ActionEnvironment);
	
	var _PageStructureEnvironment = __webpack_require__(21);
	
	var _PageStructureEnvironment2 = _interopRequireDefault(_PageStructureEnvironment);
	
	var _FrameApi = __webpack_require__(3);
	
	var _FrameApi2 = _interopRequireDefault(_FrameApi);
	
	var _Editable = __webpack_require__(11);
	
	var _Editable2 = _interopRequireDefault(_Editable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	
	    this.editable = new _Editable2.default();
	
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
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(WYSIWYG).apply(this, arguments));
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
	    key: 'initializeEditables',
	    value: function initializeEditables(w) {
	      var selector = '[data-editable-type=wysiwyg]';
	      var config = {
	        autoParagraph: false,
	        enableContentEditable: true,
	        ignoreEmptyParagraph: true,
	        enterMode: w.CKEDITOR.ENTER_BR
	      };
	
	      w.$(function () {
	        w.$(selector).each(function iter() {
	          var editor = w.AlloyEditor.editable(this, config).get('nativeEditor');
	          w.$(this).data('editor', editor);
	        });
	      });
	    }
	  }]);
	
	  return WYSIWYG;
	}(_BaseEditable3.default);
	
	exports.default = WYSIWYG;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = all;
	
	var _WYSIWYG = __webpack_require__(13);
	
	var _WYSIWYG2 = _interopRequireDefault(_WYSIWYG);
	
	var _image = __webpack_require__(15);
	
	var _image2 = _interopRequireDefault(_image);
	
	var _link = __webpack_require__(16);
	
	var _link2 = _interopRequireDefault(_link);
	
	var _string = __webpack_require__(17);
	
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
/* 15 */
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
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Image).apply(this, arguments));
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
/* 16 */
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
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Link).apply(this, arguments));
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
/* 17 */
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
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TextString).apply(this, arguments));
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
	    key: 'initializeEditables',
	    value: function initializeEditables(w) {
	      var selector = '[data-editable-type=string],[data-editable-type=text]';
	      var config = {
	        allowedContent: 'i u',
	        toolbars: {
	          styles: {
	            selections: w.AlloyEditor.Selections,
	            tabIndex: 1
	          }
	        },
	        autoParagraph: false,
	        enableContentEditable: true,
	        ignoreEmptyParagraph: true,
	        blockless: true,
	        enterMode: w.CKEDITOR.ENTER_BR
	      };
	
	      w.$(function () {
	        w.$(selector).each(function iter() {
	          var editor = w.AlloyEditor.editable(this, config).get('nativeEditor');
	          editor.on('key', function (event) {
	            if (event.data.keyCode === 13 || event.data.keyCode === w.CKEDITOR.SHIFT + 13) {
	              // add saving function here
	              event.cancel();
	            }
	          });
	          editor.on('paste', function (event) {
	            event.data.dataValue = event.data.dataValue.replace(/<br[\s\/]*>/gmi, ' ');
	          });
	          w.$(this).data('editor', editor);
	        });
	      });
	    }
	  }]);
	
	  return TextString;
	}(_BaseEditable3.default);
	
	exports.default = TextString;

/***/ },
/* 18 */
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
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ActionEnvironment).apply(this, arguments));
	  }
	
	  return ActionEnvironment;
	}(_BaseEnvironment3.default);
	
	exports.default = ActionEnvironment;

/***/ },
/* 19 */
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
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CustomizationEnvironment).apply(this, arguments));
	  }
	
	  return CustomizationEnvironment;
	}(_BaseEnvironment3.default);
	
	exports.default = CustomizationEnvironment;

/***/ },
/* 20 */
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
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MaterialsEnvironment).call(this, visualBuilder, name));
	
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
	      _get(Object.getPrototypeOf(MaterialsEnvironment.prototype), 'activate', this).call(this);
	
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
/* 21 */
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
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PageStructureEnvironment).call(this, visualBuilder, name));
	
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
	      _get(Object.getPrototypeOf(PageStructureEnvironment.prototype), 'activate', this).call(this);
	
	      this.$structurePane = this.visualBuilder.createStackablePane();
	      this.$structurePane.append(this.$pageStructure);
	    }
	  }, {
	    key: 'pageChanged',
	    value: function pageChanged() {
	      var _this2 = this;
	
	      _get(Object.getPrototypeOf(PageStructureEnvironment.prototype), 'pageChanged', this).call(this);
	      this.$pageStructure.jstree('destroy');
	      var layout = this.target.MONSTER_EDIT_MODE_DATA.layout;
	      var template = this.target.MONSTER_EDIT_MODE_DATA.template;
	
	      var layoutItem = {
	        data: {
	          id: 'layout'
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
	          id: 'template'
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
	      var jt = this.$pageStructure.jstree({
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
/* 22 */
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
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SiteStructureEnvironment).apply(this, arguments));
	  }
	
	  return SiteStructureEnvironment;
	}(_BaseEnvironment3.default);
	
	exports.default = SiteStructureEnvironment;

/***/ },
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _FrameApi = __webpack_require__(3);
	
	var _FrameApi2 = _interopRequireDefault(_FrameApi);
	
	var _uniqid = __webpack_require__(23);
	
	var _uniqid2 = _interopRequireDefault(_uniqid);
	
	var _DataProviderFactory = __webpack_require__(36);
	
	var _DataProviderFactory2 = _interopRequireDefault(_DataProviderFactory);
	
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
	      this.pageStructureJson = null;
	      this.parentWindow = window.parent;
	      /** @var FrontendMonster */
	      this.parentMonster = this.parentWindow.FrontendMonster;
	      this.parentBuilder = this.parentMonster.builder;
	      this.currentMonsterContent = false;
	      this.makeItMove();
	      $(window).resize(function () {
	        _this.updateHandlers();
	        return true;
	      });
	      $(function () {
	        _this.parentBuilder.pageChanged();
	        _this.parentBuilder.editable.initializeEditables(window);
	      });
	      this.MonsterEditData = window.MONSTER_EDIT_MODE_DATA;
	      this.initProviders();
	    }
	  }, {
	    key: 'initProviders',
	    value: function initProviders() {
	      this.providers = {
	        layout: this.getProviders(this.MonsterEditData.layout),
	        template: this.getProviders(this.MonsterEditData.template),
	        entity: this.getProviders(this.MonsterEditData.entity)
	      };
	      debugger;
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
	      var data = VisualFrame.iterateTemplateType(this.pageStructureJson);
	      debugger;
	      VisualFrame.formSubmit(data);
	      return false;
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
	    key: 'iterateTemplateType',
	    value: function iterateTemplateType(arr) {
	      var result = {};
	      arr.forEach(function (obj) {
	        var key = obj.data.id;
	        // layout or template
	        result[key] = {
	          templateRegions: VisualFrame.iterateTemplateRegions(obj.children)
	        };
	      });
	      return result;
	    }
	  }, {
	    key: 'iterateTemplateRegions',
	    value: function iterateTemplateRegions(arr) {
	      var result = {};
	      arr.forEach(function (obj) {
	        var key = obj.data.id.replace(/^.*\./, '');
	        // this is an exact template region
	        result[key] = {
	          regionId: obj.data.regionId,
	          regionKey: obj.data.regionKey,
	          uniqueContentId: obj.data.uniqueContentId,
	          materials: VisualFrame.iterateMaterials(obj.children)
	        };
	        if (typeof obj.data.entityDependent !== 'undefined') {
	          result[key].entityDependent = obj.data.entityDependent;
	        }
	      });
	      return result;
	    }
	  }, {
	    key: 'iterateMaterials',
	    value: function iterateMaterials(arr) {
	      var result = {};
	      arr.forEach(function (obj) {
	        var key = obj.data.materialIndex;
	        result[key] = {
	          // editablesKeys: obj.data.editableKeys,
	          material: obj.data.materialPath
	        };
	      });
	      return result;
	    }
	  }]);
	
	  return VisualFrame;
	}();
	
	exports.default = VisualFrame;

/***/ },
/* 26 */,
/* 27 */,
/* 28 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DataProvider = function DataProvider(className, providedKeys) {
	  _classCallCheck(this, DataProvider);
	
	  this.className = className;
	  this.providedKeys = providedKeys;
	};
	
	exports.default = DataProvider;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _StaticContent = __webpack_require__(37);
	
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DataProvider2 = __webpack_require__(35);
	
	var _DataProvider3 = _interopRequireDefault(_DataProvider2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StaticContent = function (_DataProvider) {
	  _inherits(StaticContent, _DataProvider);
	
	  function StaticContent(providedKeys) {
	    _classCallCheck(this, StaticContent);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(StaticContent).call(this, 'DotPlant\\Monster\\DataEntity\\StaticContentProvider', providedKeys));
	  }
	
	  return StaticContent;
	}(_DataProvider3.default);
	
	exports.default = StaticContent;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTdmZTA3OTg3OWUwMjZiMjJjOTkiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9CYXNlRWRpdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvRnJvbnRlbmRNb25zdGVyLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9FZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL1dZU0lXWUcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmNzcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRGF0YVByb3ZpZGVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9wcm92aWRlcnMvU3RhdGljQ29udGVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVBOzs7Ozs7QUFFQSxRQUFPLGVBQVAsR0FBeUIsK0JBQXpCOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7Ozs7Ozs7S0FFTSxlO0FBQ0osNEJBQVksYUFBWixFQUEyQixJQUEzQixFQUFpQztBQUFBOztBQUMvQixVQUFLLGFBQUwsR0FBcUIsYUFBckI7QUFDQSxVQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsVUFBSyxNQUFMLEdBQWMsRUFBRSxLQUFLLGFBQUwsQ0FBbUIsUUFBbkIsQ0FBNEIsZ0JBQTVCLENBQUYsRUFBaUQsQ0FBakQsRUFBb0QsYUFBbEU7QUFDRDs7OztnQ0FFVTs7QUFFVCxXQUFJLEtBQUssSUFBTCxLQUFjLEtBQUssYUFBTCxDQUFtQixrQkFBckMsRUFBeUQ7QUFDdkQ7QUFDRDtBQUNELFdBQUksS0FBSyxhQUFMLENBQW1CLGtCQUF2QixFQUEyQztBQUN6QyxjQUFLLGFBQUwsQ0FBbUIsWUFBbkIsQ0FBZ0MsR0FBaEMsQ0FBb0MsS0FBSyxhQUFMLENBQW1CLGtCQUF2RCxFQUEyRSxVQUEzRTtBQUNEO0FBQ0Y7OztrQ0FNWTtBQUNYLFlBQUssYUFBTCxDQUFtQixjQUFuQjtBQUNEOzs7aUNBRVcsSSxFQUFNLEksRUFBTTtBQUN0QixjQUFPLG1CQUFTLFdBQVQsQ0FBcUIsS0FBSyxNQUExQixFQUFrQyxJQUFsQyxFQUF3QyxJQUF4QyxDQUFQO0FBQ0Q7OzttQ0FFYSxDQUViOzs7eUJBZGE7QUFDWixjQUFPLEtBQUssTUFBTCxDQUFZLENBQW5CO0FBQ0Q7Ozs7OzttQkFlWSxlOzs7Ozs7Ozs7Ozs7Ozs7O0tDcENULFk7Ozs7Ozs7bUNBQ1UsSyxFQUFPLENBRXBCOzs7eUNBRW1CLEMsRUFBRyxDQUV0Qjs7O3lCQUVtQjtBQUNsQixjQUFPLE9BQU8sZUFBUCxDQUF1QixPQUF2QixDQUErQixrQkFBL0IsQ0FBa0QsQ0FBekQ7QUFDRDs7Ozs7O21CQUdZLFk7Ozs7Ozs7Ozs7Ozs7Ozs7S0NkVCxROzs7Ozs7O3lDQVV1QixRLEVBQVU7QUFDbkMsV0FBTSxXQUFXLFNBQVMsZUFBVCxDQUF5QixLQUF6QixFQUFnQztBQUMvQyxhQUFJLFVBQVUsSUFBZDtBQUNBLGFBQUksU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLHFCQUFVLEtBQUssS0FBTCxDQUFXLE1BQU0sSUFBakIsQ0FBVjtBQUNELFVBRkQsTUFFTztBQUNMLHFCQUFVLE1BQU0sSUFBaEI7QUFDRDs7QUFFRCxhQUFJLFNBQVMsUUFBUSxJQUFqQixDQUFKLEVBQTRCO0FBQzFCLG9CQUFTLFFBQVEsSUFBakIsRUFBdUIsS0FBdkIsQ0FBNkIsUUFBN0IsRUFBdUMsUUFBUSxJQUEvQztBQUNEO0FBQ0YsUUFYRDs7QUFhQSxXQUFJLE9BQU8sZ0JBQVgsRUFBNkI7QUFDM0IsZ0JBQU8sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsUUFBbkM7QUFDRCxRQUZELE1BRU87O0FBRUwsZ0JBQU8sV0FBUCxDQUFtQixXQUFuQixFQUFnQyxRQUFoQztBQUNEO0FBQ0Y7OztpQ0FFa0IsTSxFQUFRLEksRUFBTSxJLEVBQU07QUFDckMsV0FBTSxPQUFPO0FBQ1gsbUJBRFc7QUFFWDtBQUZXLFFBQWI7QUFJQSxXQUFNLFVBQVUsU0FBUyxJQUFULEdBQWdCLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBaEIsR0FBdUMsSUFBdkQ7O0FBRUEsY0FBTyxXQUFQLENBQW1CLE9BQW5CLEVBQTRCLEdBQTVCO0FBQ0Q7Ozt5QkF2Q2lCOztBQUVoQixXQUFJLE9BQU8sRUFBUCxLQUFlLFdBQW5CLEVBQWdDO0FBQzlCLGdCQUFPLEdBQUcsRUFBSCxFQUFQLEM7QUFDRDs7QUFFRCxjQUFPLElBQVA7QUFDRDs7Ozs7O21CQW1DWSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDZjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0tBRU0sZTtBQUNKLDhCQUFjO0FBQUE7O0FBQ1osVUFBSyxNQUFMO0FBQ0EsVUFBSyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsVUFBSyxPQUFMLEdBQWUsdUJBQWY7QUFDQSxTQUFJLE9BQU8sTUFBUCxLQUFrQixNQUFsQixJQUE0QixPQUFPLE1BQVAsQ0FBYyxlQUE5QyxFQUErRDtBQUM3RCxXQUFJLE9BQU8sTUFBUCxDQUFjLGVBQWQsQ0FBOEIsVUFBbEMsRUFBOEM7QUFDNUMsY0FBSyxXQUFMLEdBQW1CLDJCQUFuQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBSSxPQUFPLFlBQVAsS0FBeUIsV0FBN0IsRUFBMEM7QUFDeEMsb0JBQWEsSUFBYjtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBeUJRO0FBQ1AsV0FBTSxlQUFlLE9BQU8sdUJBQVAsSUFBa0MsRUFBdkQ7QUFDQSxXQUFNLFdBQVcsRUFBakI7QUFDQSxjQUFPLElBQVAsQ0FBWSxZQUFaLEVBQTBCLE9BQTFCLENBQWtDLGVBQU87QUFDdkMsa0JBQVMsR0FBVCxJQUFnQixhQUFhLEdBQWIsQ0FBaEI7QUFDRCxRQUZEO0FBR0EsWUFBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0Q7Ozt5QkExQmE7QUFDWixXQUFJLEtBQUssWUFBTCxLQUFzQixJQUExQixFQUFnQztBQUM5QixjQUFLLFlBQUwsR0FBb0IsNkJBQXBCO0FBQ0Q7QUFDRCxjQUFPLEtBQUssWUFBWjtBQUNEOzs7Ozs7Ozs7eUJBTWdCO0FBQ2YsY0FBTyxLQUFLLE9BQUwsQ0FBYSxRQUFiLENBQXNCLE1BQXRCLEtBQWlDLENBQXhDO0FBQ0Q7Ozs7OzttQkFnQlksZTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEZjs7Ozs7Ozs7S0FFTSxRO0FBQ0osdUJBQWM7QUFBQTs7QUFDWixVQUFLLGVBQUwsR0FBdUIsRUFBdkI7O0FBRUE7QUFDQSxVQUFLLGVBQUwsR0FBdUIsT0FBTyxpQkFBOUI7QUFDRDs7Ozt1Q0FFaUIsSyxFQUFPO0FBQ3ZCLFdBQU0sV0FBVyxNQUFNLElBQU4sQ0FBVyxnQkFBWCxDQUFqQjtBQUNBLFdBQUksUUFBTyxRQUFQLHlDQUFPLFFBQVAsT0FBcUIsUUFBekIsRUFBbUM7QUFDakMsZ0JBQU8sS0FBUDtBQUNEO0FBQ0QsV0FBSSxPQUFPLFNBQVMsY0FBVCxDQUF3QixNQUF4QixJQUFrQyxTQUFTLElBQTNDLEdBQWtELFFBQTdEO0FBQ0EsV0FBSSxLQUFLLGVBQUwsQ0FBcUIsY0FBckIsQ0FBb0MsSUFBcEMsTUFBOEMsS0FBbEQsRUFBeUQ7QUFDdkQsZ0JBQU8sUUFBUDtBQUNEOztBQUVELFdBQU0saUJBQWlCLFNBQVMsY0FBVCxDQUF3QixRQUF4QixJQUFvQyxTQUFTLE1BQTdDLEdBQXNELE1BQTdFOztBQUVBLGNBQU8sS0FBSyxlQUFMLENBQXFCLElBQXJCLEVBQTJCLGFBQTNCLENBQXlDLEtBQXpDLEVBQWdELGNBQWhELENBQVA7QUFDRDs7O3lDQUVtQixDLEVBQUc7QUFBQTs7QUFDckIsY0FBTyxJQUFQLENBQVksS0FBSyxlQUFqQixFQUFrQyxPQUFsQyxDQUEwQyx1QkFBZTtBQUN2RCxhQUFNLFdBQVcsTUFBSyxlQUFMLENBQXFCLFdBQXJCLENBQWpCO0FBQ0Esa0JBQVMsbUJBQVQsQ0FBNkIsQ0FBN0I7QUFDRCxRQUhEO0FBSUQ7Ozs7OzttQkFHWSxROzs7Ozs7Ozs7Ozs7OztBQ2pDZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7S0FFTSxhO0FBQ0osNEJBQWM7QUFBQTs7QUFDWixVQUFLLE1BQUw7QUFDQSxVQUFLLGtCQUFMOztBQUVBLFVBQUssWUFBTCxHQUFvQixJQUFJLEdBQUosQ0FBUSxDQUMxQixDQUFDLGdCQUFELEVBQW1CLHVDQUE2QixJQUE3QixFQUFtQyxnQkFBbkMsQ0FBbkIsQ0FEMEIsRUFFMUIsQ0FBQyxnQkFBRCxFQUFtQix1Q0FBNkIsSUFBN0IsRUFBbUMsZ0JBQW5DLENBQW5CLENBRjBCLEVBRzFCLENBQUMsV0FBRCxFQUFjLG1DQUF5QixJQUF6QixFQUErQixXQUEvQixDQUFkLENBSDBCLEVBSTFCLENBQUMsZUFBRCxFQUFrQix1Q0FBNkIsSUFBN0IsRUFBbUMsZUFBbkMsQ0FBbEIsQ0FKMEIsRUFLMUIsQ0FBQyxRQUFELEVBQVcsZ0NBQXNCLElBQXRCLEVBQTRCLFFBQTVCLENBQVgsQ0FMMEIsQ0FBUixDQUFwQjs7QUFRQSxVQUFLLG1CQUFMOzs7QUFHQSxVQUFLLGlCQUFMLENBQXVCLGdCQUF2QjtBQUNBLE9BQUUsaURBQUYsRUFDRyxLQURILEdBRUcsR0FGSCxDQUVPLFFBRlAsRUFFaUIsSUFGakI7QUFHQSx3QkFBUyxtQkFBVCxDQUE2QixJQUE3Qjs7QUFFQSxVQUFLLFFBQUwsR0FBZ0Isd0JBQWhCOztBQUVBLFVBQUssUUFBTDtBQUNEOzs7Ozs7Ozs7OzhCQU1RO0FBQ1AsV0FBTSxlQUFlLE9BQU8scUJBQVAsSUFBZ0MsRUFBckQ7QUFDQSxXQUFNLFdBQVc7QUFDZiw2QkFBb0IseUJBREw7QUFFZiwyQkFBa0IsdUJBRkg7QUFHZixrQkFBUyxFQUhNO0FBSWYsc0NBQTZCLDZCQUpkO0FBS2YsMEJBQWlCO0FBTEYsUUFBakI7QUFPQSxjQUFPLElBQVAsQ0FBWSxZQUFaLEVBQTBCLE9BQTFCLENBQWtDLGVBQU87QUFDdkMsa0JBQVMsR0FBVCxJQUFnQixhQUFhLEdBQWIsQ0FBaEI7QUFDRCxRQUZEO0FBR0EsWUFBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0EsWUFBSyxRQUFMLEdBQWdCLEVBQUUsS0FBSyxRQUFMLENBQWMsa0JBQWQsQ0FBRixDQUFoQjtBQUNBLFlBQUssVUFBTCxHQUFrQixRQUFNLEtBQUssUUFBTCxDQUFjLDJCQUFkLENBQU4sQ0FBbEI7QUFDRDs7OzBDQUVvQjtBQUNuQixXQUFNLE9BQU8sSUFBYjtBQUNBLFdBQU0sVUFBVSxzQ0FBaEI7QUFDQSxXQUFNLGlCQUFvQixPQUFwQixhQUFOO0FBQ0EsV0FBTSxtQkFBbUIsUUFBTSxPQUFOLENBQXpCO0FBQ0Esd0JBQWlCLEtBQWpCLENBQXVCLFNBQVMsUUFBVCxHQUFvQjtBQUN6QywwQkFBaUIsV0FBakIsQ0FBNkIsY0FBN0I7QUFDQSxXQUFFLEtBQUssUUFBTCxDQUFjLGdCQUFkLENBQUYsRUFBbUMsS0FBbkMsQ0FBeUMsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLGlCQUFiLENBQXpDO0FBQ0EsV0FBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixjQUFqQjtBQUNBLGdCQUFPLEtBQVA7QUFDRCxRQUxEO0FBTUQ7OzsyQ0FFcUI7QUFDcEIsV0FBTSxPQUFPLElBQWI7QUFDQSxXQUFNLFVBQVUsZ0RBQWhCO0FBQ0EsV0FBTSxpQkFBb0IsT0FBcEIsYUFBTjtBQUNBLFdBQU0sZ0JBQWdCLFFBQU0sT0FBTixDQUF0QjtBQUNBLHFCQUFjLEtBQWQsQ0FBb0IsU0FBUyxRQUFULEdBQW9CO0FBQ3RDLGFBQU0sa0JBQWtCLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxpQkFBYixDQUF4QjtBQUNBLGFBQUksS0FBSyxrQkFBTCxLQUE0QixlQUFoQyxFQUFpRDtBQUMvQyx5QkFBYyxXQUFkLENBQTBCLGNBQTFCO0FBQ0EsZ0JBQUssWUFBTCxDQUFrQixHQUFsQixDQUFzQixlQUF0QixFQUF1QyxVQUF2QztBQUNBLGdCQUFLLGtCQUFMLEdBQTBCLElBQTFCO0FBQ0Esa0JBQU8sS0FBUDtBQUNEOztBQUVELHVCQUFjLFdBQWQsQ0FBMEIsY0FBMUI7QUFDQSxjQUFLLGlCQUFMLENBQXVCLGVBQXZCO0FBQ0EsV0FBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixjQUFqQjtBQUNBLGdCQUFPLEtBQVA7QUFDRCxRQWJEO0FBY0Q7Ozt1Q0FFaUIsZSxFQUFpQjtBQUNqQyxZQUFLLFlBQUwsQ0FBa0IsR0FBbEIsQ0FBc0IsZUFBdEIsRUFBdUMsUUFBdkM7QUFDQSxZQUFLLGtCQUFMLEdBQTBCLGVBQTFCO0FBQ0Q7OztzQ0FFZ0I7QUFDZixZQUFLLFVBQUwsQ0FBZ0IsS0FBaEI7QUFDRDs7OzJDQUVxQjtBQUNwQixXQUFNLFlBQWUsS0FBSyxRQUFMLENBQWMsMkJBQWQsQ0FBZixXQUFOO0FBQ0EsV0FBTSxXQUFXLEtBQUssVUFBTCxDQUFnQixJQUFoQixPQUF5QixTQUF6QixFQUFzQyxNQUF0QyxLQUFpRCxDQUFqRCxHQUNWLFNBRFUsZUFFYixFQUZKO0FBR0EsV0FBTSxXQUFXLG1CQUFpQixTQUFqQixTQUE4QixRQUE5QixjQUFqQjtBQUNBLFlBQUssVUFBTCxDQUFnQixNQUFoQixDQUF1QixRQUF2QjtBQUNBLGNBQU8sUUFBUDtBQUNEOzs7b0NBRWMsSSxFQUFNO0FBQ25CLFdBQUksS0FBSyxRQUFMLENBQWMsU0FBZCxDQUF3QixjQUF4QixDQUF1QyxJQUF2QyxDQUFKLEVBQWtEO0FBQ2hELGdCQUFPLEtBQUssUUFBTCxDQUFjLFNBQWQsQ0FBd0IsSUFBeEIsQ0FBUDtBQUNEO0FBQ0QsY0FBTyxJQUFQO0FBQ0Q7OztpQ0FNVzs7QUFFVixXQUFNLFNBQVMsS0FBSyxZQUFMLENBQWtCLEdBQWxCLENBQXNCLGdCQUF0QixFQUF3QyxhQUF4QyxFQUFmO0FBQ0EsZUFBUSxHQUFSLENBQVksTUFBWjs7Ozs7Ozs7O0FBU0EsV0FBTSxvQkFBb0IsRUFBMUI7QUFDQSxXQUFNLGVBQWUsS0FBSyxrQkFBTCxDQUF3QixzQkFBeEIsQ0FBK0MsUUFBL0MsQ0FBd0QsWUFBN0U7O0FBRUEsY0FBTyxJQUFQLENBQVksWUFBWixFQUEwQixPQUExQixDQUFrQyx5QkFBaUI7QUFDakQsMkJBQWtCLGFBQWxCLElBQW1DLEVBQW5DOztBQUVBLGFBQU0sVUFBVSxhQUFhLGFBQWIsQ0FBaEI7O0FBRUEsZ0JBQU8sSUFBUCxDQUFZLE9BQVosRUFBcUIsT0FBckIsQ0FBNkIscUJBQWE7QUFDeEMsZUFBSSxPQUFPLGNBQVAsQ0FBc0IsU0FBdEIsTUFBcUMsS0FBekMsRUFBZ0Q7QUFDOUM7QUFDRDtBQUNELDZCQUFrQixhQUFsQixFQUFpQyxTQUFqQyxJQUE4QyxFQUE5Qzs7O0FBR0EsZUFBTSxZQUFZLFFBQVEsU0FBUixDQUFsQjs7QUFFQSxrQkFBTyxJQUFQLENBQVksU0FBWixFQUF1QixPQUF2QixDQUErQix5QkFBaUI7QUFDOUMsaUJBQUksT0FBTyxTQUFQLEVBQWtCLGNBQWxCLENBQWlDLGFBQWpDLE1BQW9ELEtBQXhELEVBQStEO0FBQzdEO0FBQ0Q7QUFDRCwrQkFBa0IsYUFBbEIsRUFBaUMsU0FBakMsRUFBNEMsYUFBNUMsSUFBNkQsRUFBN0Q7O0FBRUEsaUJBQU0sV0FBVyxVQUFVLGFBQVYsQ0FBakI7O0FBRUEsc0JBQVMsT0FBVCxDQUFpQixlQUFPO0FBQ3RCLG1CQUFJLE9BQU8sU0FBUCxFQUFrQixhQUFsQixFQUFpQyxjQUFqQyxDQUFnRCxHQUFoRCxNQUF5RCxLQUE3RCxFQUFvRTtBQUNsRTtBQUNEO0FBQ0QsaUNBQ0csYUFESCxFQUVHLFNBRkgsRUFHRyxhQUhILEVBSUcsR0FKSCxJQUlVLE9BQU8sU0FBUCxFQUFrQixhQUFsQixFQUFpQyxHQUFqQyxDQUpWO0FBS0QsY0FURDtBQVVELFlBbEJEO0FBbUJELFVBNUJEO0FBNkJELFFBbENEO0FBbUNBLGVBQVEsR0FBUixDQUFZLGlCQUFaO0FBQ0EsY0FBTyxpQkFBUDtBQUNEOzs7bUNBRWE7QUFDWixZQUFLLFlBQUwsQ0FBa0IsT0FBbEIsQ0FDRTtBQUFBLGdCQUNFLFlBQVksV0FBWixFQURGO0FBQUEsUUFERjtBQUlEOzs7eUJBRUcsTSxFQUFRO0FBQ1YsZUFBUSxHQUFSLENBQVksTUFBWjtBQUNEOzs7Z0NBRVU7QUFBQTs7QUFDVCxZQUFLLFNBQUwsR0FBaUIsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixXQUFuQixFQUFnQyxLQUFoQyxFQUFqQjtBQUNBLFlBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsU0FBcEIsRUFBK0IsS0FBL0IsQ0FBcUMsWUFBTTtBQUN6QyxlQUFLLGtCQUFMLENBQXdCLFFBQXhCLENBQWlDLE1BQWpDO0FBQ0EsZ0JBQU8sS0FBUDtBQUNELFFBSEQ7O0FBS0EsWUFBSyxTQUFMLENBQWUsSUFBZixDQUFvQixNQUFwQixFQUE0QixLQUE1QixDQUFrQyxZQUFNO0FBQ3RDLDRCQUFTLFdBQVQsQ0FBcUIsTUFBSyxrQkFBMUIsRUFBOEMsTUFBOUM7QUFDQSxnQkFBTyxLQUFQO0FBQ0QsUUFIRDtBQUlEOzs7eUJBaEZ3QjtBQUN2QixjQUFPLEVBQUUsS0FBSyxRQUFMLENBQWMsZ0JBQWQsQ0FBRixFQUFtQyxDQUFuQyxFQUFzQyxhQUE3QztBQUNEOzs7Ozs7bUJBaUZZLGE7Ozs7Ozs7Ozs7Ozs7O0FDdk1mOzs7Ozs7Ozs7Ozs7S0FFTSxPOzs7Ozs7Ozs7OzttQ0FDVSxLLEVBQU87QUFDbkIsV0FBTSxPQUFPLHVCQUFhLE1BQWIsQ0FBb0IsS0FBcEIsQ0FBYjtBQUNBLFdBQU0sU0FBUyxLQUFLLElBQUwsQ0FBVSxRQUFWLENBQWY7QUFDQSxXQUFJLE1BQUosRUFBWTtBQUNWLGdCQUFPLE9BQU8sT0FBUCxFQUFQO0FBQ0Q7QUFDRCxjQUFPLEtBQUssSUFBTCxFQUFQO0FBQ0Q7Ozt5Q0FFbUIsQyxFQUFHO0FBQ3JCLFdBQU0sV0FBVyw4QkFBakI7QUFDQSxXQUFNLFNBQVM7QUFDYix3QkFBZSxLQURGO0FBRWIsZ0NBQXVCLElBRlY7QUFHYiwrQkFBc0IsSUFIVDtBQUliLG9CQUFXLEVBQUUsUUFBRixDQUFXO0FBSlQsUUFBZjs7QUFPQSxTQUFFLENBQUYsQ0FBSSxZQUFNO0FBQ1IsV0FBRSxDQUFGLENBQUksUUFBSixFQUFjLElBQWQsQ0FBbUIsU0FBUyxJQUFULEdBQWdCO0FBQ2pDLGVBQU0sU0FBUyxFQUFFLFdBQUYsQ0FBYyxRQUFkLENBQXVCLElBQXZCLEVBQTZCLE1BQTdCLEVBQXFDLEdBQXJDLENBQXlDLGNBQXpDLENBQWY7QUFDQSxhQUFFLENBQUYsQ0FBSSxJQUFKLEVBQVUsSUFBVixDQUFlLFFBQWYsRUFBeUIsTUFBekI7QUFDRCxVQUhEO0FBSUQsUUFMRDtBQU1EOzs7Ozs7bUJBR1ksTzs7Ozs7Ozs7Ozs7bUJDekJTLEc7O0FBTHhCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFZSxVQUFTLEdBQVQsR0FBZTtBQUM1QixPQUFJLE9BQU8sT0FBTyxpQkFBZCxLQUFxQyxXQUF6QyxFQUFzRDtBQUNwRCxZQUFPLGlCQUFQLEdBQTJCLEVBQTNCO0FBQ0Q7QUFDRCxVQUFPLGlCQUFQLENBQXlCLFNBQXpCLElBQXNDLHVCQUF0QztBQUNBLFVBQU8saUJBQVAsQ0FBeUIsTUFBekIsSUFBbUMsb0JBQW5DO0FBQ0EsVUFBTyxpQkFBUCxDQUF5QixPQUF6QixJQUFvQyxxQkFBcEM7QUFDQSxVQUFPLGlCQUFQLENBQXlCLFFBQXpCLElBQXFDLHNCQUFyQztBQUNELEU7Ozs7Ozs7Ozs7Ozs7O0FDYkQ7Ozs7Ozs7Ozs7OztLQUVNLEs7Ozs7Ozs7Ozs7O21DQUNVLEssRUFBTztBQUNuQixXQUFNLE9BQU8sTUFBTSxJQUFOLENBQVcsS0FBWCxFQUFrQixLQUFsQixFQUFiO0FBQ0EsY0FBTztBQUNMLGNBQUssS0FBSyxJQUFMLENBQVUsS0FBVixDQURBO0FBRUwsY0FBSyxLQUFLLElBQUwsQ0FBVSxLQUFWO0FBRkEsUUFBUDtBQUlEOzs7Ozs7bUJBR1ksSzs7Ozs7Ozs7Ozs7Ozs7QUNaZjs7Ozs7Ozs7Ozs7O0tBRU0sSTs7Ozs7Ozs7Ozs7bUNBQ1UsSyxFQUFPO0FBQ25CLGNBQU87QUFDTCxlQUFNLE1BQU0sSUFBTixDQUFXLGNBQVgsSUFBNkIsTUFBTSxJQUFOLENBQVcsY0FBWCxDQUE3QixHQUEwRCxNQUFNLElBQU4sQ0FBVyxNQUFYLENBRDNEO0FBRUwsaUJBQVEsTUFBTSxJQUFOO0FBRkgsUUFBUDtBQUlEOzs7Ozs7bUJBR1ksSTs7Ozs7Ozs7Ozs7Ozs7QUNYZjs7Ozs7Ozs7Ozs7O0tBRU0sVTs7Ozs7Ozs7Ozs7bUNBQ1UsSyxFQUFPO0FBQ25CLFdBQU0sT0FBTyx1QkFBYSxNQUFiLENBQW9CLEtBQXBCLENBQWI7QUFDQSxXQUFNLFNBQVMsS0FBSyxJQUFMLENBQVUsUUFBVixDQUFmO0FBQ0EsV0FBSSxNQUFKLEVBQVk7QUFDVixnQkFBTyxPQUFPLE9BQVAsRUFBUDtBQUNEO0FBQ0QsY0FBTyxLQUFLLElBQUwsRUFBUDtBQUNEOzs7eUNBRW1CLEMsRUFBRztBQUNyQixXQUFNLFdBQVcsdURBQWpCO0FBQ0EsV0FBTSxTQUFTO0FBQ2IseUJBQWdCLEtBREg7QUFFYixtQkFBVTtBQUNSLG1CQUFRO0FBQ04seUJBQVksRUFBRSxXQUFGLENBQWMsVUFEcEI7QUFFTix1QkFBVTtBQUZKO0FBREEsVUFGRztBQVFiLHdCQUFlLEtBUkY7QUFTYixnQ0FBdUIsSUFUVjtBQVViLCtCQUFzQixJQVZUO0FBV2Isb0JBQVcsSUFYRTtBQVliLG9CQUFXLEVBQUUsUUFBRixDQUFXO0FBWlQsUUFBZjs7QUFlQSxTQUFFLENBQUYsQ0FBSSxZQUFNO0FBQ1IsV0FBRSxDQUFGLENBQUksUUFBSixFQUFjLElBQWQsQ0FBbUIsU0FBUyxJQUFULEdBQWdCO0FBQ2pDLGVBQU0sU0FBUyxFQUFFLFdBQUYsQ0FBYyxRQUFkLENBQXVCLElBQXZCLEVBQTZCLE1BQTdCLEVBQXFDLEdBQXJDLENBQXlDLGNBQXpDLENBQWY7QUFDQSxrQkFBTyxFQUFQLENBQVUsS0FBVixFQUFpQixpQkFBUztBQUN4QixpQkFBSSxNQUFNLElBQU4sQ0FBVyxPQUFYLEtBQXVCLEVBQXZCLElBQTZCLE1BQU0sSUFBTixDQUFXLE9BQVgsS0FBdUIsRUFBRSxRQUFGLENBQVcsS0FBWCxHQUFtQixFQUEzRSxFQUErRTs7QUFFN0UscUJBQU0sTUFBTjtBQUNEO0FBQ0YsWUFMRDtBQU1BLGtCQUFPLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLGlCQUFTO0FBQzFCLG1CQUFNLElBQU4sQ0FBVyxTQUFYLEdBQXVCLE1BQU0sSUFBTixDQUFXLFNBQVgsQ0FBcUIsT0FBckIsQ0FBNkIsZ0JBQTdCLEVBQStDLEdBQS9DLENBQXZCO0FBQ0QsWUFGRDtBQUdBLGFBQUUsQ0FBRixDQUFJLElBQUosRUFBVSxJQUFWLENBQWUsUUFBZixFQUF5QixNQUF6QjtBQUNELFVBWkQ7QUFhRCxRQWREO0FBZ0JEOzs7Ozs7bUJBR1ksVTs7Ozs7Ozs7Ozs7O0FDaERmOzs7Ozs7Ozs7Ozs7S0FFTSxpQjs7Ozs7Ozs7Ozs7O21CQUdTLGlCOzs7Ozs7Ozs7Ozs7QUNMZjs7Ozs7Ozs7Ozs7O0tBRU0sd0I7Ozs7Ozs7Ozs7OzttQkFHUyx3Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ0xmOzs7Ozs7Ozs7Ozs7S0FFTSxvQjs7O0FBQ0osaUNBQVksYUFBWixFQUEyQixJQUEzQixFQUFpQztBQUFBOztBQUFBLHlHQUN6QixhQUR5QixFQUNWLElBRFU7O0FBRS9CLFdBQUsscUJBQUw7QUFGK0I7QUFHaEM7Ozs7NkNBRXVCO0FBQUE7O0FBQ3RCLFlBQUssZ0JBQUwsR0FBd0IsRUFBRSxvQ0FBRixDQUF4QjtBQUNBLFlBQUssY0FBTCxHQUFzQixFQUF0Qjs7QUFFQSxZQUFLLGFBQUwsQ0FBbUIsUUFBbkIsQ0FBNEIsT0FBNUIsQ0FBb0MsT0FBcEMsQ0FBNEMsa0JBQVU7O0FBRXBELGFBQU0saUJBQWlCLE9BQU8sUUFBUCxLQUFxQixXQUFyQixHQUNuQixTQUFTLENBQVQsQ0FBVyxPQUFPLElBQWxCLENBRG1CLEdBRW5CLE9BQU8sSUFGWDs7QUFJQSxhQUFNLG9MQUVvRSxPQUFPLFFBRjNFLHdCQUdFLGNBSEYsd0NBQU47QUFPQSxnQkFBSyxjQUFMLENBQW9CLElBQXBCLENBQXlCLFlBQXpCOztBQUVBLGdCQUFPLE1BQVAsQ0FBYyxPQUFkLENBQXNCLGlCQUFTO0FBQzdCLGVBQU0sWUFBWSxNQUFNLElBQXhCO0FBQ0EsZUFBTSxZQUFZLE1BQU0sU0FBeEI7QUFDQSxlQUFNLGdCQUFnQixPQUFPLFFBQVAsS0FBcUIsV0FBckIsR0FBbUMsU0FBUyxDQUFULENBQVcsU0FBWCxDQUFuQyxHQUEyRCxTQUFqRjtBQUNBLGVBQU0sTUFBTSxxRkFFaUIsTUFBTSxRQUZ2QiwyREFHVixhQUhVLGdEQUc4QyxVQUFVLE1BSHhELHFDQUFaO0FBTUEsa0JBQUssZ0JBQUwsQ0FBc0IsTUFBdEIsQ0FBNkIsR0FBN0I7QUFDQSxlQUFNLFFBQVEsbURBQWlELE1BQU0sUUFBdkQsYUFBZDtBQUNBLGVBQU0sUUFBUSxFQUFkOztBQUVBLHFCQUFVLE9BQVYsQ0FBa0Isb0JBQVk7QUFDNUIsaUJBQU0sZUFBZSxTQUFTLElBQTlCO0FBQ0EsaUJBQU0sbUJBQW1CLE9BQU8sUUFBUCxLQUFxQixXQUFyQixHQUNyQixTQUFTLENBQVQsQ0FBVyxZQUFYLENBRHFCLEdBRXJCLFlBRko7QUFHQSxpQkFBTSxRQUFRLDhFQUV5QyxTQUFTLFFBRmxELGdCQUdsQixnQkFIa0IsdUJBQWQ7QUFPQSxtQkFBTSxJQUFOLENBQVcsS0FBWDtBQUNELFlBYkQ7QUFjQSxpQkFBTSxNQUFOLENBQWEsS0FBYjtBQUNBLGtCQUFLLGNBQUwsQ0FBb0IsSUFBcEIsQ0FBeUIsS0FBekI7QUFDRCxVQTlCRDtBQStCRCxRQTlDRDs7QUFnREEsV0FBTSxPQUFPLElBQWI7QUFDQSxTQUFFLFFBQUYsRUFBWSxFQUFaLENBQWUsT0FBZixFQUF3QixpQ0FBeEIsRUFBMkQsU0FBUyxZQUFULEdBQXdCO0FBQ2pGLGFBQU0sUUFBUSxFQUFFLElBQUYsQ0FBZDtBQUNBLGVBQU0sU0FBTixDQUFnQixRQUFoQjtBQUNBLGFBQU0sWUFBWSxNQUFNLElBQU4sQ0FBVyxXQUFYLENBQWxCO0FBQ0EsYUFBSSxNQUFNLEdBQU4sQ0FBVSxRQUFWLENBQUosRUFBeUI7QUFBQTtBQUN2QixlQUFFLGlDQUFGLEVBQXFDLEdBQXJDLENBQXlDLFFBQXpDLEVBQW1ELEtBQW5EO0FBQ0EsaUJBQU0sMkJBQTJCLHdCQUFqQzs7QUFFQSxlQUFFLGlCQUFGLEVBQXFCLElBQXJCLENBQTBCLFNBQVMsRUFBVCxHQUFjO0FBQ3RDLG1CQUFNLFFBQVEsRUFBRSxJQUFGLENBQWQ7QUFDQSxtQkFBSSxNQUFNLFFBQU4sQ0FBZSx3QkFBZixDQUFKLEVBQThDO0FBQzVDLHVCQUFNLFdBQU4sQ0FBa0Isd0JBQWxCO0FBQ0Q7QUFDRCxtQkFBSSxNQUFNLElBQU4sQ0FBVyxXQUFYLE1BQTRCLFNBQWhDLEVBQTJDO0FBQ3pDLHVCQUFNLFFBQU4sQ0FBZSx3QkFBZjtBQUNEO0FBQ0YsY0FSRDs7QUFVQSxtQkFBTSxHQUFOLENBQVUsUUFBVixFQUFvQixJQUFwQjtBQUNBLGtCQUFLLGNBQUwsQ0FBb0IsSUFBcEI7QUFmdUI7QUFnQnhCLFVBaEJELE1BZ0JPOztBQUVMLGdCQUFLLGNBQUwsQ0FBb0IsSUFBcEI7QUFDRDtBQUNELGdCQUFPLEtBQVA7QUFDRCxRQXpCRDtBQTBCQSxTQUFFLFFBQUYsRUFBWSxFQUFaLENBQWUsT0FBZixFQUF3Qix1QkFBeEIsRUFBaUQsU0FBUyxZQUFULEdBQXdCO0FBQ3ZFLGNBQUssV0FBTCxDQUNFLFVBREYsRUFFRSxDQUNFLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxjQUFiLENBREYsRUFFRSxTQUZGLENBRkY7QUFPRCxRQVJEO0FBU0Q7OztnQ0FFVTtBQUNUOztBQUVBLFlBQUssV0FBTCxHQUFtQixLQUFLLGFBQUwsQ0FBbUIsbUJBQW5CLEVBQW5CO0FBQ0EsWUFBSyxXQUFMLENBQWlCLE1BQWpCLENBQXdCLEtBQUssZ0JBQTdCOztBQUVBLFlBQUssY0FBTCxHQUFzQixLQUFLLGFBQUwsQ0FBbUIsbUJBQW5CLEVBQXRCO0FBQ0EsWUFBSyxjQUFMLENBQW9CLE1BQXBCLENBQTJCLEtBQUssY0FBaEM7QUFDQSxZQUFLLGNBQUwsQ0FBb0IsSUFBcEI7O0FBRUEsU0FBRSxpQ0FBRixFQUFxQyxHQUFyQyxDQUF5QyxRQUF6QyxFQUFtRCxLQUFuRDtBQUNEOzs7Ozs7bUJBRVksb0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvR2Y7Ozs7Ozs7Ozs7OztLQUVNLHdCOzs7QUFDSixxQ0FBWSxhQUFaLEVBQTJCLElBQTNCLEVBQWlDO0FBQUE7O0FBQUEsNkdBQ3pCLGFBRHlCLEVBQ1YsSUFEVTs7QUFFL0IsV0FBSyx3QkFBTDtBQUNBLFdBQUssWUFBTCxHQUFvQixFQUFwQjtBQUgrQjtBQUloQzs7OztnREFFMEI7QUFDekIsWUFBSyxjQUFMLEdBQXNCLEVBQUUsb0NBQUYsQ0FBdEI7QUFDRDs7O2dDQUVVO0FBQ1Q7O0FBRUEsWUFBSyxjQUFMLEdBQXNCLEtBQUssYUFBTCxDQUFtQixtQkFBbkIsRUFBdEI7QUFDQSxZQUFLLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBMkIsS0FBSyxjQUFoQztBQUNEOzs7bUNBRWE7QUFBQTs7QUFDWjtBQUNBLFlBQUssY0FBTCxDQUFvQixNQUFwQixDQUEyQixTQUEzQjtBQUNBLFdBQU0sU0FBUyxLQUFLLE1BQUwsQ0FBWSxzQkFBWixDQUFtQyxNQUFsRDtBQUNBLFdBQU0sV0FBVyxLQUFLLE1BQUwsQ0FBWSxzQkFBWixDQUFtQyxRQUFwRDs7QUFFQSxXQUFNLGFBQWE7QUFDakIsZUFBTTtBQUNKLGVBQUk7QUFEQSxVQURXO0FBSWpCLDZCQUFrQixPQUFPLEdBQXpCLFVBQWlDLE9BQU8sRUFKdkI7QUFLakIsZUFBTSxlQUxXO0FBTWpCLGdCQUFPO0FBQ0wsbUJBQVE7QUFESCxVQU5VO0FBU2pCLG1CQUFVO0FBVE8sUUFBbkI7QUFXQSxXQUFNLGVBQWU7QUFDbkIsZUFBTTtBQUNKLGVBQUk7QUFEQSxVQURhO0FBSW5CLCtCQUFvQixTQUFTLEdBQTdCLFVBQXFDLFNBQVMsRUFKM0I7QUFLbkIsZUFBTSxVQUxhO0FBTW5CLGdCQUFPO0FBQ0wsbUJBQVE7QUFESCxVQU5ZO0FBU25CLG1CQUFVO0FBVFMsUUFBckI7O0FBWUEsV0FBTSxpQkFBaUIsS0FBSyxPQUFMLENBQWEsNEJBQWIsQ0FBdkI7QUFDQSxzQkFBZSxJQUFmLENBQW9CLFNBQVMsSUFBVCxHQUFnQjtBQUNsQyxhQUFNLFNBQVMseUJBQXlCLGFBQXpCLENBQXVDLEVBQUUsSUFBRixDQUF2QyxDQUFmO0FBQ0Esb0JBQVcsUUFBWCxDQUFvQixJQUFwQixDQUF5QixPQUFPLElBQWhDO0FBQ0EsZ0JBQU8sZUFBUCxDQUF1QixPQUF2QixDQUErQixrQkFBVTtBQUN2Qyx3QkFBYSxRQUFiLENBQXNCLElBQXRCLENBQTJCLE1BQTNCO0FBQ0QsVUFGRDtBQUdELFFBTkQ7O0FBUUEsWUFBSyxhQUFMLEdBQXFCLENBQ25CLFVBRG1CLEVBRW5CLFlBRm1CLENBQXJCO0FBSUEsV0FBTSxLQUFLLEtBQUssY0FBTCxDQUFvQixNQUFwQixDQUEyQjtBQUNwQyxlQUFNO0FBQ0osaUJBQU0sS0FBSyxhQURQO0FBRUosbUJBQVE7QUFDTixtQkFBTTtBQURBO0FBRkosVUFEOEI7QUFPcEMsa0JBQVMsQ0FDUCxPQURPLENBUDJCO0FBVXBDLGdCQUFPO0FBQ0wsbUJBQVE7QUFDTixtQkFBTTtBQURBLFlBREg7QUFJTCxxQkFBVTtBQUNSLG1CQUFNO0FBREUsWUFKTDtBQU9MLDJCQUFnQjtBQUNkLG1CQUFNO0FBRFEsWUFQWDtBQVVMLGtDQUF1QjtBQUNyQixtQkFBTTtBQURlLFlBVmxCO0FBYUwscUJBQVU7QUFDUixtQkFBTTtBQURFO0FBYkw7QUFWNkIsUUFBM0IsQ0FBWDs7QUE2QkEsV0FBTSxZQUFZLEtBQUssY0FBTCxDQUFvQixNQUFwQixFQUFsQjtBQUNBLFlBQUssY0FBTCxDQUFvQixFQUFwQixDQUF1QixlQUF2QixFQUF3QyxZQUFNO0FBQzVDLGdCQUFLLGlCQUFMLEdBQXlCLFVBQVUsUUFBVixDQUFtQixPQUFLLGNBQXhCLEVBQXdDO0FBQy9ELHFCQUFVLElBRHFEO0FBRS9ELGtCQUFPLElBRndEO0FBRy9ELHVCQUFZLElBSG1EO0FBSS9ELHNCQUFXO0FBSm9ELFVBQXhDLENBQXpCO0FBTUEsZ0JBQUssTUFBTCxDQUFZLGVBQVosQ0FBNEIsV0FBNUIsQ0FBd0MsaUJBQXhDLEdBQTRELE9BQUssaUJBQWpFO0FBQ0QsUUFSRDs7QUFVQSxZQUFLLFlBQUwsR0FBb0IsS0FBSyxNQUFMLENBQVksc0JBQWhDO0FBQ0Q7OztxQ0FxSGU7QUFBQTs7QUFDZCxXQUFNLFNBQVMsRUFBZjtBQUNBLGNBQU8sSUFBUCxDQUFZLEtBQUssZ0JBQWpCLEVBQW1DLE9BQW5DLENBQTJDLHFCQUFhO0FBQ3RELGFBQU0sU0FBUyxPQUFLLGdCQUFMLENBQXNCLFNBQXRCLENBQWY7QUFDQSxnQkFBTyxPQUFPLEdBQWQsSUFBcUIsT0FBTyxTQUFQLEVBQXJCO0FBQ0QsUUFIRDtBQUlBLGNBQU8sTUFBUDtBQUNEOzs7MENBRW9CO0FBQUE7O0FBQ25CLFdBQU0sU0FBUyxFQUFmO0FBQ0EsY0FBTyxJQUFQLENBQVksS0FBSyxnQkFBakIsRUFBbUMsT0FBbkMsQ0FBMkMscUJBQWE7QUFDdEQsYUFBTSxTQUFTLE9BQUssZ0JBQUwsQ0FBc0IsU0FBdEIsQ0FBZjtBQUNBLGdCQUFPLE9BQU8sR0FBZCxJQUFxQixPQUFPLGFBQVAsRUFBckI7QUFDRCxRQUhEO0FBSUEsY0FBTyxNQUFQO0FBQ0Q7OzttQ0FuSW9CLGEsRUFBZTtBQUNsQyxXQUFNLE9BQU8seUJBQXlCLGlCQUF6QixDQUEyQyxhQUEzQyxDQUFiO0FBQ0EsWUFBSyxLQUFMLEdBQWE7QUFDWCxpQkFBUTtBQURHLFFBQWI7QUFHQSxZQUFLLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxZQUFLLElBQUwsQ0FBVSxFQUFWLDhCQUF3QyxLQUFLLElBQUwsQ0FBVSxTQUFsRDtBQUNBLFdBQU0sa0JBQWtCLEVBQXhCOzs7QUFHQSxXQUFNLG1CQUFtQixjQUFjLElBQWQsQ0FBbUIscUJBQW5CLENBQXpCO0FBQ0Esd0JBQWlCLElBQWpCLENBQXNCLFNBQVMsSUFBVCxHQUFnQjtBQUNwQyxhQUFNLGtCQUFrQixFQUFFLElBQUYsQ0FBeEI7QUFDQSxhQUFNLFNBQVMseUJBQXlCLHFCQUF6QixDQUErQyxlQUEvQyxFQUFnRSxLQUFLLEVBQXJFLENBQWY7QUFDQSxhQUFNLHFCQUFxQixPQUFPLGNBQWxDO0FBQ0EsZ0JBQU8sZUFBUCxDQUF1QixPQUF2QixDQUErQixrQkFBVTtBQUN2QywyQkFBZ0IsSUFBaEIsQ0FBcUIsTUFBckI7QUFDRCxVQUZEO0FBR0EsY0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixrQkFBbkI7QUFDRCxRQVJEOztBQVVBLGNBQU87QUFDTCxtQkFESztBQUVMO0FBRkssUUFBUDtBQUlEOzs7MkNBRTRCLGUsRUFBaUIsTSxFQUFRO0FBQ3BELFdBQU0sZ0JBQWdCLGdCQUFnQixJQUFoQixDQUFxQixlQUFyQixDQUF0QjtBQUNBLFdBQU0sZUFBZSxnQkFBZ0IsSUFBaEIsQ0FBcUIsY0FBckIsQ0FBckI7QUFDQSxXQUFNLE9BQU87QUFDWCxnQkFDRSxpQkFBaUIsd0RBQWpCLEdBQ0kscUJBREosa0JBRWlCLGFBSG5CLGNBRFc7QUFNWCxlQUFNLFVBTks7QUFPWCxlQUFNO0FBQ0osZUFBTyxNQUFQLFNBQWlCLGFBRGI7QUFFSix1Q0FGSTtBQUdKLHFDQUhJO0FBSUoseUJBQWMsZ0JBQWdCLElBQWhCLENBQXFCLGNBQXJCLENBSlY7QUFLSixpQkFBTTtBQUxGO0FBUEssUUFBYjtBQWVBLFdBQU0sa0JBQWtCLEVBQXhCO0FBQ0EsV0FBTSxXQUFXLGdCQUFnQixJQUFoQixDQUFxQiwrQkFBckIsQ0FBakI7QUFDQSxnQkFBUyxJQUFULENBQWMsU0FBUyxJQUFULEdBQWdCO0FBQzVCLGFBQU0sU0FBUyx5QkFBeUIscUJBQXpCLENBQStDLEVBQUUsSUFBRixDQUEvQyxDQUFmO0FBQ0EseUJBQWdCLElBQWhCLENBQXFCLE1BQXJCO0FBQ0QsUUFIRDtBQUlBLFdBQUksZ0JBQWdCLE1BQWhCLEdBQXlCLENBQTdCLEVBQWdDO0FBQzlCLGNBQUssSUFBTCxDQUFVLFNBQVYsR0FBc0IsSUFBdEI7QUFDRDtBQUNELGNBQU87QUFDTCx5QkFBZ0IsSUFEWDtBQUVMO0FBRkssUUFBUDtBQUlEOzs7MkNBRTRCLGUsRUFBaUI7QUFDNUMsV0FBTSxPQUFPLHlCQUF5QixpQkFBekIsQ0FBMkMsZUFBM0MsQ0FBYjtBQUNBLFlBQUssS0FBTCxHQUFhO0FBQ1gsaUJBQVE7QUFERyxRQUFiO0FBR0EsWUFBSyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsWUFBSyxJQUFMLENBQVUsZUFBVixHQUE0QixnQkFBZ0IsSUFBaEIsQ0FBcUIsdUJBQXJCLE1BQWtELENBQTlFOztBQUVBLFdBQU0sU0FBUyxLQUFLLElBQUwsQ0FBVSxlQUFWLEdBQTRCLFVBQTVCLEdBQXlDLFNBQXhEO0FBQ0EsWUFBSyxJQUFMLENBQVUsRUFBVixHQUFrQixNQUFsQix3QkFBMkMsS0FBSyxJQUFMLENBQVUsU0FBckQ7O0FBRUEsV0FBSSxLQUFLLElBQUwsQ0FBVSxlQUFkLEVBQStCO0FBQzdCLGNBQUssSUFBTCxHQUFZLHVCQUFaO0FBQ0Q7QUFDRCxXQUFNLG1CQUFtQixnQkFBZ0IsSUFBaEIsQ0FBcUIscUJBQXJCLENBQXpCO0FBQ0Esd0JBQWlCLElBQWpCLENBQXNCLFNBQVMsSUFBVCxHQUFnQjtBQUNwQyxjQUFLLFFBQUwsQ0FBYyxJQUFkLENBQ0UseUJBQXlCLDZCQUF6QixDQUNFLEVBQUUsSUFBRixDQURGLEVBRUUsS0FBSyxJQUFMLENBQVUsRUFGWixDQURGO0FBTUQsUUFQRDtBQVFBLGNBQU8sSUFBUDtBQUNEOzs7bURBRW9DLGUsRUFBaUIsTSxFQUFRO0FBQzVELFdBQU0sZ0JBQWdCLGdCQUFnQixJQUFoQixDQUFxQixlQUFyQixDQUF0QjtBQUNBLFdBQU0sZUFBZSxnQkFBZ0IsSUFBaEIsQ0FBcUIsY0FBckIsQ0FBckI7QUFDQSxjQUFPO0FBQ0wsOEJBQW1CLGFBRGQ7QUFFTCxlQUFNLFVBRkQ7QUFHTCxlQUFNO0FBQ0osZUFBTyxNQUFQLFNBQWlCLGFBRGI7QUFFSix1Q0FGSTtBQUdKLHFDQUhJO0FBSUoseUJBQWMsZ0JBQWdCLElBQWhCLENBQXFCLGNBQXJCLENBSlY7QUFLSixpQkFBTTtBQUxGO0FBSEQsUUFBUDtBQVdEOzs7dUNBRXdCLEssRUFBTztBQUM5QixjQUFPO0FBQ0wsZUFBTSxNQUFNLElBQU4sQ0FBVyxvQkFBWCxDQUREO0FBRUwsZUFBTSxnQkFGRDtBQUdMLGVBQU07QUFDSixxQkFBVSxNQUFNLElBQU4sQ0FBVyxVQUFYLENBRE47QUFFSixzQkFBVyxNQUFNLElBQU4sQ0FBVyxXQUFYLENBRlA7QUFHSiw0QkFBaUIsTUFBTSxJQUFOLENBQVcsaUJBQVgsQ0FIYjtBQUlKLGlCQUFNO0FBSkY7QUFIRCxRQUFQO0FBVUQ7Ozs7OzttQkFvQlksd0I7Ozs7Ozs7Ozs7OztBQzlPZjs7Ozs7Ozs7Ozs7O0tBRU0sd0I7Ozs7Ozs7Ozs7OzttQkFHUyx3Qjs7Ozs7Ozs7QUNMZixRQUFPLE9BQVAsR0FBaUIsU0FBUyxNQUFULENBQWlCLE1BQWpCLEVBQXlCLFdBQXpCLEVBQXNDOzs7Ozs7Ozs7Ozs7Ozs7QUFlckQsT0FBSSxPQUFPLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakMsY0FBUyxFQUFUO0FBQ0Q7O0FBRUQsT0FBSSxLQUFKO0FBQ0EsT0FBSSxjQUFjLFNBQWQsV0FBYyxDQUFVLElBQVYsRUFBZ0IsUUFBaEIsRUFBMEI7QUFDMUMsWUFBTyxTQUFTLElBQVQsRUFBZSxFQUFmLEVBQW1CLFFBQW5CLENBQTRCLEVBQTVCLENBQVAsQztBQUNBLFNBQUksV0FBVyxLQUFLLE1BQXBCLEVBQTRCOztBQUUxQixjQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxHQUFjLFFBQXpCLENBQVA7QUFDRDtBQUNELFNBQUksV0FBVyxLQUFLLE1BQXBCLEVBQTRCOztBQUUxQixjQUFPLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBckIsQ0FBTixFQUFvQyxJQUFwQyxDQUF5QyxHQUF6QyxJQUFnRCxJQUF2RDtBQUNEO0FBQ0QsWUFBTyxJQUFQO0FBQ0QsSUFYRDs7QUFhQSxPQUFJLFVBQVcsT0FBTyxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDLE1BQWhDLEdBQXlDLE1BQXhEO0FBQ0EsV0FBUSxRQUFSLEdBQW1CLFFBQVEsUUFBUixJQUFvQixFQUF2QztBQUNBLE9BQUksV0FBVyxRQUFRLFFBQXZCO0FBQ0EsWUFBUyxHQUFULEdBQWUsU0FBUyxHQUFULElBQWdCLEVBQS9COztBQUVBLE9BQUksQ0FBQyxTQUFTLEdBQVQsQ0FBYSxVQUFsQixFQUE4Qjs7QUFFNUIsY0FBUyxHQUFULENBQWEsVUFBYixHQUEwQixLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBZ0IsU0FBM0IsQ0FBMUI7QUFDRDtBQUNELFlBQVMsR0FBVCxDQUFhLFVBQWI7OztBQUdBLFdBQVEsTUFBUjtBQUNBLFlBQVMsWUFBWSxTQUFTLElBQUksSUFBSixHQUFXLE9BQVgsS0FBdUIsSUFBaEMsRUFBc0MsRUFBdEMsQ0FBWixFQUF1RCxDQUF2RCxDQUFUOztBQUVBLFlBQVMsWUFBWSxTQUFTLEdBQVQsQ0FBYSxVQUF6QixFQUFxQyxDQUFyQyxDQUFUO0FBQ0EsT0FBSSxXQUFKLEVBQWlCOztBQUVmLGNBQVMsQ0FBQyxLQUFLLE1BQUwsS0FBZ0IsRUFBakIsRUFBcUIsT0FBckIsQ0FBNkIsQ0FBN0IsRUFBZ0MsUUFBaEMsRUFBVDtBQUNEOztBQUVELFVBQU8sS0FBUDtBQUNELEVBdkRELEM7Ozs7Ozs7Ozs7Ozs7Ozs7S0NBTSxPO0FBQ0osc0JBQWM7QUFBQTs7QUFDWixVQUFLLGFBQUwsR0FBcUIsRUFBckI7O0FBRUEsU0FBSSxTQUFTLFFBQVQsQ0FBa0IsSUFBdEIsRUFBNEI7QUFDMUIsV0FBTSxVQUFVLFNBQVMsUUFBVCxDQUFrQixJQUFsQixDQUF1QixLQUF2QixDQUE2QiwwQkFBN0IsQ0FBaEI7QUFDQSxXQUFJLFdBQVcsUUFBUSxNQUFSLEtBQW1CLENBQWxDLEVBQXFDO0FBQ25DLGFBQU0sZ0JBQWdCLEtBQUssS0FBTCxDQUFXLG1CQUFtQixRQUFRLENBQVIsQ0FBbkIsQ0FBWCxDQUF0Qjs7QUFEbUM7QUFBQTtBQUFBOztBQUFBO0FBR25DLGdDQUFtQixhQUFuQiw4SEFBa0M7QUFBQSxpQkFBdkIsSUFBdUI7O0FBQ2hDLGlCQUFJLEtBQUssSUFBVCxFQUFlO0FBQ2Isb0JBQUssYUFBTCxDQUFtQixLQUFLLElBQXhCLElBQWdDLEtBQUssSUFBTCxJQUFhLEVBQTdDO0FBQ0Q7QUFDRjtBQVBrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUXBDO0FBQ0Y7QUFDRjs7OztnQ0FFVSxJLEVBQU07QUFDZixjQUFPLEtBQUssYUFBTCxDQUFtQixJQUFuQixLQUE0QixLQUFuQztBQUNEOzs7Ozs7bUJBR1ksTzs7Ozs7Ozs7Ozs7Ozs7QUN2QmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztLQUVNLFc7QUFFSiwwQkFBYztBQUFBOztBQUNaLFVBQUssTUFBTDtBQUNBLFVBQUssVUFBTDtBQUNEOzs7O2tDQUVZO0FBQUE7O0FBQ1gsMEJBQVMsbUJBQVQsQ0FBNkIsSUFBN0I7QUFDQSxZQUFLLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsWUFBSyxZQUFMLEdBQW9CLE9BQU8sTUFBM0I7O0FBRUEsWUFBSyxhQUFMLEdBQXFCLEtBQUssWUFBTCxDQUFrQixlQUF2QztBQUNBLFlBQUssYUFBTCxHQUFxQixLQUFLLGFBQUwsQ0FBbUIsT0FBeEM7QUFDQSxZQUFLLHFCQUFMLEdBQTZCLEtBQTdCO0FBQ0EsWUFBSyxVQUFMO0FBQ0EsU0FBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFNO0FBQ3JCLGVBQUssY0FBTDtBQUNBLGdCQUFPLElBQVA7QUFDRCxRQUhEO0FBSUEsU0FBRSxZQUFNO0FBQ04sZUFBSyxhQUFMLENBQW1CLFdBQW5CO0FBQ0EsZUFBSyxhQUFMLENBQW1CLFFBQW5CLENBQTRCLG1CQUE1QixDQUFnRCxNQUFoRDtBQUNELFFBSEQ7QUFJQSxZQUFLLGVBQUwsR0FBdUIsT0FBTyxzQkFBOUI7QUFDQSxZQUFLLGFBQUw7QUFDRDs7O3FDQUVlO0FBQ2QsWUFBSyxTQUFMLEdBQWlCO0FBQ2YsaUJBQVEsS0FBSyxZQUFMLENBQWtCLEtBQUssZUFBTCxDQUFxQixNQUF2QyxDQURPO0FBRWYsbUJBQVUsS0FBSyxZQUFMLENBQWtCLEtBQUssZUFBTCxDQUFxQixRQUF2QyxDQUZLO0FBR2YsaUJBQVEsS0FBSyxZQUFMLENBQWtCLEtBQUssZUFBTCxDQUFxQixNQUF2QztBQUhPLFFBQWpCO0FBS0E7QUFDRDs7O2tDQUVZLEcsRUFBSztBQUNoQixXQUFNLFNBQVMsRUFBZjtBQUNBLGNBQU8sSUFBUCxDQUFZLElBQUksU0FBaEIsRUFBMkIsT0FBM0IsQ0FBbUMsZUFBTztBQUN4QyxhQUFNLGVBQWUsSUFBSSxTQUFKLENBQWMsR0FBZCxDQUFyQjtBQUNBLGdCQUFPLEdBQVAsSUFBYyw4QkFBb0IsT0FBcEIsQ0FDWixZQURZLEVBRVosSUFBSSxZQUFKLENBQWlCLEdBQWpCLEtBQXlCLEVBRmIsQ0FBZDtBQUlELFFBTkQ7QUFPQSxjQUFPLE1BQVA7QUFDRDs7O2tEQVU0QjtBQUMzQixZQUFLLG9CQUFMLEdBQTRCLEVBQTVCO0FBQ0EsV0FBTSxPQUFPLElBQWI7QUFDQSxTQUFFLEtBQUssUUFBTCxDQUFjLDBCQUFkLENBQUYsRUFBNkMsSUFBN0MsQ0FBa0QsU0FBUyxJQUFULEdBQWdCO0FBQ2hFLGFBQUksQ0FBQyxLQUFLLHFCQUFWLEVBQWlDO0FBQy9CLGdCQUFLLHFCQUFMLEdBQTZCLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxpQkFBYixDQUE3QjtBQUNEO0FBQ0QsY0FBSyxvQkFBTCxDQUEwQixFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsaUJBQWIsQ0FBMUIsSUFBNkQsRUFBRSxJQUFGLENBQTdEO0FBQ0QsUUFMRDtBQU1EOzs7c0NBRWdCO0FBQ2YsV0FBSSxLQUFLLGlCQUFMLElBQTBCLEtBQUssU0FBbkMsRUFBOEM7QUFDNUMsY0FBSyxTQUFMLENBQWUsR0FBZixDQUNFLEtBREYsRUFFRSxLQUFLLGlCQUFMLENBQXVCLFFBQXZCLEdBQWtDLEdBQWxDLEdBQ0ksS0FBSyxpQkFBTCxDQUF1QixNQUF2QixFQURKLEdBRUksS0FBSyxTQUFMLENBQWUsTUFBZixFQUpOO0FBTUEsY0FBSyxpQkFBTCxDQUF1QixRQUF2QixDQUFnQyxxQ0FBaEM7QUFDRDtBQUNGOzs7a0NBRVk7QUFDWCxZQUFLLFNBQUwsR0FBaUIsMG1CQUFqQjtBQW1CQSxTQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLEtBQUssU0FBdEI7QUFDQSxZQUFLLFNBQUwsQ0FBZSxJQUFmO0FBQ0EsV0FBTSxPQUFPLElBQWI7QUFDQSxTQUFFLEtBQUssUUFBTCxDQUFjLDBCQUFkLENBQUYsRUFBNkMsRUFBN0MsQ0FBZ0Q7QUFDOUMscUJBQVksU0FBUyxPQUFULEdBQW1CO0FBQzdCLGVBQU0sUUFBUSxFQUFFLElBQUYsQ0FBZDtBQUNBLGlCQUFNLFFBQU4sQ0FBZSwwQ0FBZjtBQUNELFVBSjZDO0FBSzlDLHFCQUFZLFNBQVMsUUFBVCxHQUFvQjtBQUM5QixlQUFNLFFBQVEsRUFBRSxJQUFGLENBQWQ7QUFDQSxpQkFBTSxXQUFOLENBQWtCLDBDQUFsQjtBQUNELFVBUjZDO0FBUzlDLGdCQUFPLFNBQVMsWUFBVCxHQUF3QjtBQUM3QixlQUFNLFFBQVEsRUFBRSxJQUFGLENBQWQ7QUFDQSxnQkFBSyxjQUFMLENBQW9CLEtBQXBCO0FBQ0Q7QUFaNkMsUUFBaEQsRUFhRyxvQkFiSDtBQWNBLFlBQUssU0FBTCxDQUNHLEVBREgsQ0FDTSxPQUROLEVBQ2Usa0NBRGYsRUFDbUQsWUFBTTtBQUNyRCxhQUFJLEtBQUssaUJBQVQsRUFBNEI7QUFDMUIsZUFBTSxRQUFRLEtBQUssaUJBQUwsQ0FBdUIsSUFBdkIsQ0FBNEIsb0JBQTVCLENBQWQ7QUFDQSxlQUFJLE1BQU0sTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN0QixrQkFBSyxpQkFBTCxDQUF1QixZQUF2QixDQUFvQyxLQUFwQztBQUNBLGtCQUFLLGNBQUw7QUFDQSxrQkFBSyxhQUFMLENBQW1CLFdBQW5CO0FBQ0Q7QUFDRjtBQUNELGdCQUFPLEtBQVA7QUFDRCxRQVhILEVBWUcsRUFaSCxDQVlNLE9BWk4sRUFZZSxvQ0FaZixFQVlxRCxZQUFNO0FBQ3ZELGFBQUksS0FBSyxpQkFBVCxFQUE0QjtBQUMxQixlQUFNLFFBQVEsS0FBSyxpQkFBTCxDQUF1QixJQUF2QixDQUE0QixvQkFBNUIsQ0FBZDtBQUNBLGVBQUksTUFBTSxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLGtCQUFLLGlCQUFMLENBQXVCLFdBQXZCLENBQW1DLEtBQW5DO0FBQ0Esa0JBQUssY0FBTDtBQUNBLGtCQUFLLGFBQUwsQ0FBbUIsV0FBbkI7QUFDRDtBQUNGO0FBQ0QsZ0JBQU8sS0FBUDtBQUNELFFBdEJILEVBdUJHLEVBdkJILENBdUJNLE9BdkJOLEVBdUJlLGdDQXZCZixFQXVCaUQsWUFBTTtBQUNuRCxhQUFJLEtBQUssaUJBQVQsRUFBNEI7QUFDMUIsZUFBTSxrQkFBa0IsS0FBSyxpQkFBTCxDQUF1QixLQUF2QixFQUF4QjtBQUNBLGVBQU0sY0FBYyxzQkFBUyxLQUFULENBQXBCO0FBQ0EsMkJBQ0csV0FESCxDQUNlLEtBQUssaUJBRHBCLEVBRUcsSUFGSCxDQUdJLGVBSEosRUFJSSxXQUpKLEVBTUcsSUFOSCxDQU1RLHFCQU5SLEVBTStCLFdBTi9CO0FBT0EsZ0JBQUssY0FBTCxDQUFvQixlQUFwQjtBQUNBLGdCQUFLLGFBQUwsQ0FBbUIsV0FBbkI7QUFDRDtBQUNELGdCQUFPLEtBQVA7QUFDRCxRQXRDSCxFQXVDRyxFQXZDSCxDQXVDTSxPQXZDTixFQXVDZSxpQ0F2Q2YsRUF1Q2tELFlBQU07QUFDcEQsYUFBSSxLQUFLLGlCQUFULEVBQTRCO0FBQzFCLGVBQUksUUFBUSxnREFBUixDQUFKLEVBQStEO0FBQzdELGtCQUFLLGlCQUFMLENBQXVCLE1BQXZCO0FBQ0Esa0JBQUssaUJBQUwsR0FBeUIsSUFBekI7QUFDQSxrQkFBSyxTQUFMLENBQWUsSUFBZixHO0FBQ0Esa0JBQUssYUFBTCxDQUFtQixXQUFuQjtBQUNEO0FBQ0Y7QUFDRCxnQkFBTyxLQUFQO0FBQ0QsUUFqREg7QUFrREQ7OztvQ0FFYyxTLEVBQVc7QUFDeEIsV0FBSSxLQUFLLGlCQUFMLEtBQTJCLFNBQS9CLEVBQTBDO0FBQ3hDO0FBQ0Q7QUFDRCxXQUFJLEtBQUssaUJBQVQsRUFBNEI7QUFDMUIsY0FBSyxpQkFBTCxDQUF1QixXQUF2QixDQUFtQyxxQ0FBbkM7QUFDRDtBQUNELFlBQUssaUJBQUwsR0FBeUIsU0FBekI7QUFDQSxZQUFLLGNBQUw7QUFDQSxZQUFLLFNBQUwsQ0FBZSxJQUFmO0FBQ0Q7OztzQ0FFZ0IsUSxFQUFVO0FBQUE7O0FBQ3pCLFdBQU0sU0FBUyxFQUFmO0FBQ0EsV0FBTSxPQUFPLElBQWI7QUFDQSxjQUFPLElBQVAsQ0FBWSxLQUFLLGVBQWpCLEVBQWtDLE9BQWxDLENBQTBDLDJCQUFtQjtBQUMzRCxhQUFNLFdBQVcsT0FBSyxlQUFMLENBQXFCLGVBQXJCLENBQWpCO0FBQ0EsZ0JBQU8sU0FBUyxJQUFULENBQWMsaUJBQWQsQ0FBUCxJQUEyQyxLQUFLLHNCQUFMLENBQTRCLFFBQTVCLENBQTNDO0FBQ0QsUUFIRDtBQUlBLFlBQUssYUFBTCxDQUFtQixRQUFuQixFQUE2QixDQUFDLE1BQUQsQ0FBN0I7QUFDRDs7OzRDQUVzQixlLEVBQWlCO0FBQ3RDLFdBQU0sU0FBUyxFQUFmO0FBQ0EsY0FBTyxlQUFQLEdBQXlCLGdCQUFnQixJQUFoQixDQUFxQixpQkFBckIsQ0FBekI7QUFDQSxjQUFPLFNBQVAsR0FBbUIsRUFBbkI7QUFDQSx1QkFBZ0IsSUFBaEIsQ0FBcUIsMEJBQXJCLEVBQWlELElBQWpELENBQXNELFNBQVMsSUFBVCxHQUFnQjtBQUNwRSxhQUFNLFdBQVcsRUFBakI7QUFDQSxrQkFBUyxLQUFULEdBQWlCLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxlQUFiLENBQWpCO0FBQ0EsZ0JBQU8sU0FBUCxDQUFpQixFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsZUFBYixDQUFqQixJQUFrRCxRQUFsRDtBQUNELFFBSkQ7QUFLQSxjQUFPLE1BQVA7QUFDRDs7Ozs7Ozs7OzhCQU1RO0FBQ1AsV0FBTSxlQUFlLE9BQU8sbUJBQVAsSUFBOEIsRUFBbkQ7QUFDQSxXQUFNLFdBQVc7QUFDZixxQ0FBNEI7QUFEYixRQUFqQjtBQUdBLGNBQU8sSUFBUCxDQUFZLFlBQVosRUFBMEIsT0FBMUIsQ0FBa0MsZUFBTztBQUN2QyxrQkFBUyxHQUFULElBQWdCLGFBQWEsR0FBYixDQUFoQjtBQUNELFFBRkQ7QUFHQSxZQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDRDs7O21DQUVhLEksRUFBTSxJLEVBQU07QUFDeEIsMEJBQVMsV0FBVCxDQUFxQixLQUFLLFlBQTFCLEVBQXdDLElBQXhDLEVBQThDLElBQTlDO0FBQ0Q7Ozs2Q0FtQnVCO0FBQ3RCLGNBQU87QUFDTCw0QkFBbUIsS0FBSyxhQUFMLENBQW1CLFNBQW5CLEVBRGQ7QUFFTCwyQkFBa0IsS0FBSyxhQUFMLENBQ2YsWUFEZSxDQUNGLEdBREUsQ0FDRSxnQkFERixFQUNvQixrQkFEcEI7QUFGYixRQUFQO0FBS0Q7Ozs4QkFFUSxZLEVBQWMsVSxFQUFZOztBQUVqQyxXQUFNLGNBQWMsc0JBQVMsS0FBVCxDQUFwQjtBQUNBLFdBQU0sVUFBVTtBQUNkLG1CQUFVLEtBQUsscUJBQUwsRUFESTtBQUVkLGlCQUFRO0FBRk0sUUFBaEI7QUFJQSxXQUFJLFFBQVEsUUFBUixDQUFpQixnQkFBakIsQ0FBa0MsY0FBbEMsQ0FBaUQsVUFBakQsTUFBaUUsS0FBckUsRUFBNEU7QUFDMUUsaUJBQVEsUUFBUixDQUFpQixnQkFBakIsQ0FBa0MsVUFBbEMsSUFBZ0QsRUFBaEQ7QUFDRDs7QUFFRCxlQUFRLFFBQVIsQ0FBaUIsZ0JBQWpCLENBQWtDLFVBQWxDLEVBQThDLElBQTlDLENBQW1ELFdBQW5ELElBQWtFO0FBQ2hFLG1CQUFVO0FBRHNELFFBQWxFO0FBR0EsZUFBUSxRQUFSLENBQWlCLGdCQUFqQixDQUFrQyxVQUFsQyxFQUE4QyxjQUE5QyxDQUE2RCxJQUE3RCxDQUFrRSxXQUFsRTtBQUNBLG1CQUFZLFVBQVosQ0FBdUIsT0FBdkI7O0FBRUEsY0FBTyxLQUFQO0FBQ0Q7Ozs0QkFFTTtBQUNMLFdBQU0sT0FBTyxZQUFZLG1CQUFaLENBQWdDLEtBQUssaUJBQXJDLENBQWI7QUFDQTtBQUNBLG1CQUFZLFVBQVosQ0FBdUIsSUFBdkI7QUFDQSxjQUFPLEtBQVA7QUFDRDs7O3lCQS9OcUI7QUFDcEIsV0FBSSxLQUFLLG9CQUFULEVBQStCO0FBQzdCLGdCQUFPLEtBQUssb0JBQVo7QUFDRDtBQUNELFlBQUssMEJBQUw7QUFDQSxjQUFPLEtBQUssb0JBQVo7QUFDRDs7O2dDQXVLaUIsSSxFQUFNO0FBQ3RCLFdBQU0sUUFBUSxFQUFFLDZCQUFGLENBQWQ7QUFDQSxXQUFNLFNBQVMsRUFBRSxxQ0FBRixDQUFmO0FBQ0EsV0FBTSxRQUFRLEVBQUUsdUJBQUYsQ0FBZDs7QUFFQSxhQUNHLElBREgsQ0FDUSxNQURSLEVBQ2dCLEVBQUUsdUJBQUYsRUFBMkIsSUFBM0IsQ0FBZ0MsU0FBaEMsQ0FEaEIsRUFFRyxHQUZILENBRU8sRUFBRSx1QkFBRixFQUEyQixJQUEzQixDQUFnQyxTQUFoQyxDQUZQLEVBR0csUUFISCxDQUdZLEtBSFo7O0FBS0EsY0FDRyxHQURILENBQ08sS0FBSyxTQUFMLENBQWUsSUFBZixDQURQLEVBRUcsUUFGSCxDQUVZLEtBRlo7O0FBSUEsYUFBTSxDQUFOLEVBQVMsTUFBVDtBQUNEOzs7eUNBcUMwQixHLEVBQUs7QUFDOUIsV0FBTSxTQUFTLEVBQWY7QUFDQSxXQUFJLE9BQUosQ0FBWSxlQUFPO0FBQ2pCLGFBQU0sTUFBTSxJQUFJLElBQUosQ0FBUyxFQUFyQjs7QUFFQSxnQkFBTyxHQUFQLElBQWM7QUFDWiw0QkFBaUIsWUFBWSxzQkFBWixDQUFtQyxJQUFJLFFBQXZDO0FBREwsVUFBZDtBQUdELFFBTkQ7QUFPQSxjQUFPLE1BQVA7QUFDRDs7OzRDQUU2QixHLEVBQUs7QUFDakMsV0FBTSxTQUFTLEVBQWY7QUFDQSxXQUFJLE9BQUosQ0FBWSxlQUFPO0FBQ2pCLGFBQU0sTUFBTSxJQUFJLElBQUosQ0FBUyxFQUFULENBQVksT0FBWixDQUFvQixPQUFwQixFQUE2QixFQUE3QixDQUFaOztBQUVBLGdCQUFPLEdBQVAsSUFBYztBQUNaLHFCQUFVLElBQUksSUFBSixDQUFTLFFBRFA7QUFFWixzQkFBVyxJQUFJLElBQUosQ0FBUyxTQUZSO0FBR1osNEJBQWlCLElBQUksSUFBSixDQUFTLGVBSGQ7QUFJWixzQkFBVyxZQUFZLGdCQUFaLENBQTZCLElBQUksUUFBakM7QUFKQyxVQUFkO0FBTUEsYUFBSSxPQUFPLElBQUksSUFBSixDQUFTLGVBQWhCLEtBQXFDLFdBQXpDLEVBQXNEO0FBQ3BELGtCQUFPLEdBQVAsRUFBWSxlQUFaLEdBQThCLElBQUksSUFBSixDQUFTLGVBQXZDO0FBQ0Q7QUFDRixRQVpEO0FBYUEsY0FBTyxNQUFQO0FBQ0Q7OztzQ0FFdUIsRyxFQUFLO0FBQzNCLFdBQU0sU0FBUyxFQUFmO0FBQ0EsV0FBSSxPQUFKLENBQVksZUFBTztBQUNqQixhQUFNLE1BQU0sSUFBSSxJQUFKLENBQVMsYUFBckI7QUFDQSxnQkFBTyxHQUFQLElBQWM7O0FBRVoscUJBQVUsSUFBSSxJQUFKLENBQVM7QUFGUCxVQUFkO0FBSUQsUUFORDtBQU9BLGNBQU8sTUFBUDtBQUNEOzs7Ozs7bUJBR1ksVzs7Ozs7Ozs7QUNqVWYsMEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDQU0sWSxHQUNKLHNCQUFZLFNBQVosRUFBdUIsWUFBdkIsRUFBcUM7QUFBQTs7QUFDbkMsUUFBSyxTQUFMLEdBQWlCLFNBQWpCO0FBQ0EsUUFBSyxZQUFMLEdBQW9CLFlBQXBCO0FBQ0QsRTs7bUJBR1ksWTs7Ozs7Ozs7Ozs7Ozs7QUNQZjs7Ozs7Ozs7S0FFTSxtQjs7Ozs7Ozs2QkFDVyxZLEVBQWMsWSxFQUFjO0FBQ3pDLFdBQUksV0FBVyxJQUFmO0FBQ0EsV0FBTSxZQUFZLGFBQWEsU0FBYixJQUNiLHNEQURMO0FBRUEsZUFBUSxTQUFSO0FBQ0UsY0FBSyxzREFBTDtBQUNBO0FBQ0Usc0JBQVcsNEJBQWtCLFlBQWxCLENBQVg7QUFISjtBQUtBLGNBQU8sUUFBUDtBQUNEOzs7Ozs7bUJBR1ksbUI7Ozs7Ozs7Ozs7OztBQ2hCZjs7Ozs7Ozs7Ozs7O0tBRU0sYTs7O0FBQ0osMEJBQVksWUFBWixFQUEwQjtBQUFBOztBQUFBLDZGQUNsQixzREFEa0IsRUFDc0MsWUFEdEM7QUFFekI7Ozs7O21CQUdZLGEiLCJmaWxlIjoidmlzdWFsLWJ1aWxkZXIvc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYTdmZTA3OTg3OWUwMjZiMjJjOTlcbiAqKi8iLCJpbXBvcnQgJy4vYnVuZGxlLmNzcyc7XG5cbmltcG9ydCBGcm9udGVuZE1vbnN0ZXIgZnJvbSAnLi9Gcm9udGVuZE1vbnN0ZXInO1xuXG53aW5kb3cuRnJvbnRlbmRNb25zdGVyID0gbmV3IEZyb250ZW5kTW9uc3RlcigpO1xuLy9cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5qc1xuICoqLyIsImltcG9ydCBGcmFtZUFwaSBmcm9tICcuLy4uL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaSc7XG5cbmNsYXNzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIgPSB2aXN1YWxCdWlsZGVyO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXJnZXQgPSAkKHRoaXMudmlzdWFsQnVpbGRlci5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSlbMF0uY29udGVudFdpbmRvdztcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIC8vIGRlYWN0aXZhdGUgY3VycmVudCBzZWxlY3RlZCBlbnZpcm9ubWVudFxuICAgIGlmICh0aGlzLm5hbWUgPT09IHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpIHtcbiAgICAgIHRoaXMudmlzdWFsQnVpbGRlci5lbnZpcm9ubWVudHMuZ2V0KHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpLmRlYWN0aXZhdGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdGFyZ2V0JCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQuJDtcbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy52aXN1YWxCdWlsZGVyLmNsZWFyU3RhY2thYmxlKCk7XG4gIH1cblxuICBzZW5kTWVzc2FnZShmdW5jLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMudGFyZ2V0LCBmdW5jLCBhcmdzKTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2VkKCkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUVudmlyb25tZW50O1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJjbGFzcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG5cbiAgfVxuXG4gIGluaXRpYWxpemVFZGl0YWJsZXModykge1xuXG4gIH1cblxuICBzdGF0aWMgZ2V0IGZyYW1lJCgpIHtcbiAgICByZXR1cm4gd2luZG93LkZyb250ZW5kTW9uc3Rlci5idWlsZGVyLmZyYW1lQ29udGVudFdpbmRvdy4kO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VFZGl0YWJsZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lZGl0YWJsZXMvQmFzZUVkaXRhYmxlLmpzXG4gKiovIiwiY2xhc3MgRnJhbWVBcGkge1xuICBzdGF0aWMgZ2V0IGlzSWUoKSB7XG4gICAgLyogZ2xvYmFsIGlzICovXG4gICAgaWYgKHR5cGVvZihpcykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gaXMuaWUoKTsvLyB8fCBpcy5lZGdlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgYmluZE1lc3NhZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgICBsZXQgbWVzc2FnZSA9IG51bGw7XG4gICAgICBpZiAoRnJhbWVBcGkuaXNJZSkge1xuICAgICAgICBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lc3NhZ2UgPSBldmVudC5kYXRhO1xuICAgICAgfVxuXG4gICAgICBpZiAobGlzdGVuZXJbbWVzc2FnZS5mdW5jXSkge1xuICAgICAgICBsaXN0ZW5lclttZXNzYWdlLmZ1bmNdLmFwcGx5KGxpc3RlbmVyLCBtZXNzYWdlLmFyZ3MpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJRThcbiAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25tZXNzYWdlJywgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzZW5kTWVzc2FnZSh0YXJnZXQsIGZ1bmMsIGFyZ3MpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZnVuYyxcbiAgICAgIGFyZ3NcbiAgICB9O1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBGcmFtZUFwaS5pc0llID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiBkYXRhO1xuXG4gICAgdGFyZ2V0LnBvc3RNZXNzYWdlKG1lc3NhZ2UsICcqJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJhbWVBcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0ZyYW1lQXBpLmpzXG4gKiovIiwiaW1wb3J0IFZpc3VhbEJ1aWxkZXIgZnJvbSAnLi9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlcic7XG5pbXBvcnQgVmlzdWFsRnJhbWUgZnJvbSAnLi9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZSc7XG5pbXBvcnQgSGFzaEFwaSBmcm9tICcuL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGknO1xuXG5jbGFzcyBGcm9udGVuZE1vbnN0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtcygpO1xuICAgIHRoaXMudmlzdWFsQnVsZGVyID0gbnVsbDtcbiAgICB0aGlzLmhhc2hBcGkgPSBuZXcgSGFzaEFwaSgpO1xuICAgIGlmICh3aW5kb3cucGFyZW50ICE9PSB3aW5kb3cgJiYgd2luZG93LnBhcmVudC5Gcm9udGVuZE1vbnN0ZXIpIHtcbiAgICAgIGlmICh3aW5kb3cucGFyZW50LkZyb250ZW5kTW9uc3Rlci5oYXNCdWlsZGVyKSB7XG4gICAgICAgIHRoaXMuVmlzdWFsRnJhbWUgPSBuZXcgVmlzdWFsRnJhbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogZ2xvYmFsIHNtb290aFNjcm9sbDogZmFsc2UqL1xuICAgIGlmICh0eXBlb2Yoc21vb3RoU2Nyb2xsKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNtb290aFNjcm9sbC5pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgVmlzdWFsQnVpbGRlciBjbGFzcyBpbnN0YW5jZVxuICAgKiBAcmV0dXJucyBWaXN1YWxCdWlsZGVyXG4gICAqL1xuICBnZXQgYnVpbGRlcigpIHtcbiAgICBpZiAodGhpcy52aXN1YWxCdWxkZXIgPT09IG51bGwpIHtcbiAgICAgIHRoaXMudmlzdWFsQnVsZGVyID0gbmV3IFZpc3VhbEJ1aWxkZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmlzdWFsQnVsZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgRnJvbnRlbmRNb25zdGVyIGluc3RhbmNlIGhhcyBWaXN1YWwgQnVpbGRlciBvbiBwYWdlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGhhc0J1aWxkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRlci4kYnVpbGRlci5sZW5ndGggPT09IDE7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBGcm9udGVuZE1vbnN0ZXIgc2V0dGluZ3MuXG4gICAqIFVzZXMgRnJvbnRlbmRNb25zdGVyU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuRnJvbnRlbmRNb25zdGVyU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh1c2VyU2V0dGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICB9KTtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJvbnRlbmRNb25zdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9Gcm9udGVuZE1vbnN0ZXIuanNcbiAqKi8iLCJpbXBvcnQgYWxsRWRpdGFibGVzIGZyb20gJy4vZWRpdGFibGVzL2FsbCc7XG5cbmNsYXNzIEVkaXRhYmxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lZGl0YWJsZXNCeVR5cGUgPSB7fTtcbiAgICAvLyBpbml0aWFsaXplIGJhc2UgYnVpbGQtaW4gZWRpdGFibGVzXG4gICAgYWxsRWRpdGFibGVzKCk7XG4gICAgdGhpcy5lZGl0YWJsZXNCeVR5cGUgPSB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVM7XG4gIH1cblxuICBzZXJpYWxpemVFZGl0YWJsZSgkbm9kZSkge1xuICAgIGNvbnN0IGVkaXRhYmxlID0gJG5vZGUuZGF0YSgnZWRpdGFibGVQYXJhbXMnKTtcbiAgICBpZiAodHlwZW9mKGVkaXRhYmxlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHR5cGUgPSBlZGl0YWJsZS5oYXNPd25Qcm9wZXJ0eSgndHlwZScpID8gZWRpdGFibGUudHlwZSA6ICdzdHJpbmcnO1xuICAgIGlmICh0aGlzLmVkaXRhYmxlc0J5VHlwZS5oYXNPd25Qcm9wZXJ0eSh0eXBlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHR5cGUgPSAnc3RyaW5nJztcbiAgICB9XG5cbiAgICBjb25zdCBleHBvcnRWYXJpYWJsZSA9IGVkaXRhYmxlLmhhc093blByb3BlcnR5KCd0YXJnZXQnKSA/IGVkaXRhYmxlLnRhcmdldCA6ICdkYXRhJztcblxuICAgIHJldHVybiB0aGlzLmVkaXRhYmxlc0J5VHlwZVt0eXBlXS5zZXJpYWxpemVOb2RlKCRub2RlLCBleHBvcnRWYXJpYWJsZSk7XG4gIH1cblxuICBpbml0aWFsaXplRWRpdGFibGVzKHcpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmVkaXRhYmxlc0J5VHlwZSkuZm9yRWFjaChlZGl0YWJsZUtleSA9PiB7XG4gICAgICBjb25zdCBlZGl0YWJsZSA9IHRoaXMuZWRpdGFibGVzQnlUeXBlW2VkaXRhYmxlS2V5XTtcbiAgICAgIGVkaXRhYmxlLmluaXRpYWxpemVFZGl0YWJsZXModyk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdGFibGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9FZGl0YWJsZS5qc1xuICoqLyIsImltcG9ydCBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50JztcbmltcG9ydCBNYXRlcmlhbHNFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9NYXRlcmlhbHNFbnZpcm9ubWVudCc7XG5pbXBvcnQgQ3VzdG9taXphdGlvbkVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudCc7XG5pbXBvcnQgQWN0aW9uRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvQWN0aW9uRW52aXJvbm1lbnQnO1xuaW1wb3J0IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9QYWdlU3RydWN0dXJlRW52aXJvbm1lbnQnO1xuaW1wb3J0IEZyYW1lQXBpIGZyb20gJy4vLi4vdmlzdWFsLWZyYW1lL0ZyYW1lQXBpJztcbmltcG9ydCBFZGl0YWJsZSBmcm9tICcuL0VkaXRhYmxlJztcblxuY2xhc3MgVmlzdWFsQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFyYW1zKCk7XG4gICAgdGhpcy5yZXNvbHV0aW9uU3dpdGNoZXIoKTtcblxuICAgIHRoaXMuZW52aXJvbm1lbnRzID0gbmV3IE1hcChbXG4gICAgICBbJ3NpdGUtc3RydWN0dXJlJywgbmV3IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCh0aGlzLCAnc2l0ZS1zdHJ1Y3R1cmUnKV0sXG4gICAgICBbJ3BhZ2Utc3RydWN0dXJlJywgbmV3IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCh0aGlzLCAncGFnZS1zdHJ1Y3R1cmUnKV0sXG4gICAgICBbJ21hdGVyaWFscycsIG5ldyBNYXRlcmlhbHNFbnZpcm9ubWVudCh0aGlzLCAnbWF0ZXJpYWxzJyldLFxuICAgICAgWydjdXN0b21pemF0aW9uJywgbmV3IEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCh0aGlzLCAnY3VzdG9taXphdGlvbicpXSxcbiAgICAgIFsnYWN0aW9uJywgbmV3IEFjdGlvbkVudmlyb25tZW50KHRoaXMsICdhY3Rpb24nKV0sXG4gICAgXSk7XG5cbiAgICB0aGlzLmVudmlyb25tZW50U2VsZWN0b3IoKTtcblxuICAgIC8vIHNlbGVjdCBmaXJzdCBlbnZpcm9ubWVudCBieSBkZWZhdWx0XG4gICAgdGhpcy5zd2l0Y2hFbnZpcm9ubWVudCgnc2l0ZS1zdHJ1Y3R1cmUnKTtcbiAgICAkKCcubW9uc3Rlci1lbnZpcm9ubWVudC1zZWxlY3Rvcl9fZW52aXJvbm1lbnQtbGluaycpXG4gICAgICAuZmlyc3QoKVxuICAgICAgLm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgRnJhbWVBcGkuYmluZE1lc3NhZ2VMaXN0ZW5lcih0aGlzKTtcblxuICAgIHRoaXMuZWRpdGFibGUgPSBuZXcgRWRpdGFibGUoKTtcblxuICAgIHRoaXMuY29udHJvbHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIFZpc3VhbEJ1aWxkZXIgc2V0dGluZ3MuXG4gICAqIFVzZXMgVmlzdWFsQnVpbGRlclNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAqL1xuICBwYXJhbXMoKSB7XG4gICAgY29uc3QgdXNlclNldHRpbmdzID0gd2luZG93LlZpc3VhbEJ1aWxkZXJTZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICdlbGVtZW50LXNlbGVjdG9yJzogJy5tb25zdGVyLXZpc3VhbC1idWlsZGVyJyxcbiAgICAgICdmcmFtZS1zZWxlY3Rvcic6ICcubW9uc3Rlci12aXN1YWwtZnJhbWUnLFxuICAgICAgYnVuZGxlczoge30sXG4gICAgICAnc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyc6ICdtb25zdGVyLXN0YWNrYWJsZS1jb250YWluZXInLFxuICAgICAgJ25ldy1ibG9jay11cmwnOiAnL21vbnN0ZXIvdmlzdWFsLWJ1aWxkZXIvbmV3LWJsb2NrJyxcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHVzZXJTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLiRidWlsZGVyID0gJCh0aGlzLnNldHRpbmdzWydlbGVtZW50LXNlbGVjdG9yJ10pO1xuICAgIHRoaXMuJHN0YWNrYWJsZSA9ICQoYC4ke3RoaXMuc2V0dGluZ3NbJ3N0YWNrYWJsZS1jb250YWluZXItY2xhc3MnXX1gKTtcbiAgfVxuXG4gIHJlc29sdXRpb25Td2l0Y2hlcigpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBiZW1FbGVtID0gJ3Jlc29sdXRpb24tc3dpdGNoZXJfX3Jlc29sdXRpb24tbGluayc7XG4gICAgY29uc3QgYWN0aXZlTW9kaWZpZXIgPSBgJHtiZW1FbGVtfS0tYWN0aXZlYDtcbiAgICBjb25zdCAkcmVzb2x1dGlvbkxpbmtzID0gJChgLiR7YmVtRWxlbX1gKTtcbiAgICAkcmVzb2x1dGlvbkxpbmtzLmNsaWNrKGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgJHJlc29sdXRpb25MaW5rcy5yZW1vdmVDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICAkKHRoYXQuc2V0dGluZ3NbJ2ZyYW1lLXNlbGVjdG9yJ10pLndpZHRoKCQodGhpcykuZGF0YSgncmVzb2x1dGlvbldpZHRoJykpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBlbnZpcm9ubWVudFNlbGVjdG9yKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGJlbUVsZW0gPSAnbW9uc3Rlci1lbnZpcm9ubWVudC1zZWxlY3Rvcl9fZW52aXJvbm1lbnQtbGluayc7XG4gICAgY29uc3QgYWN0aXZlTW9kaWZpZXIgPSBgJHtiZW1FbGVtfS0tYWN0aXZlYDtcbiAgICBjb25zdCAkc2VjdGlvbkxpbmtzID0gJChgLiR7YmVtRWxlbX1gKTtcbiAgICAkc2VjdGlvbkxpbmtzLmNsaWNrKGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgY29uc3QgZW52aXJvbm1lbnROYW1lID0gJCh0aGlzKS5kYXRhKCdlbnZpcm9ubWVudE5hbWUnKTtcbiAgICAgIGlmICh0aGF0LmN1cnJlbnRFbnZpcm9ubWVudCA9PT0gZW52aXJvbm1lbnROYW1lKSB7XG4gICAgICAgICRzZWN0aW9uTGlua3MucmVtb3ZlQ2xhc3MoYWN0aXZlTW9kaWZpZXIpO1xuICAgICAgICB0aGF0LmVudmlyb25tZW50cy5nZXQoZW52aXJvbm1lbnROYW1lKS5kZWFjdGl2YXRlKCk7XG4gICAgICAgIHRoYXQuY3VycmVudEVudmlyb25tZW50ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAkc2VjdGlvbkxpbmtzLnJlbW92ZUNsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgIHRoYXQuc3dpdGNoRW52aXJvbm1lbnQoZW52aXJvbm1lbnROYW1lKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoYWN0aXZlTW9kaWZpZXIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgc3dpdGNoRW52aXJvbm1lbnQoZW52aXJvbm1lbnROYW1lKSB7XG4gICAgdGhpcy5lbnZpcm9ubWVudHMuZ2V0KGVudmlyb25tZW50TmFtZSkuYWN0aXZhdGUoKTtcbiAgICB0aGlzLmN1cnJlbnRFbnZpcm9ubWVudCA9IGVudmlyb25tZW50TmFtZTtcbiAgfVxuXG4gIGNsZWFyU3RhY2thYmxlKCkge1xuICAgIHRoaXMuJHN0YWNrYWJsZS5lbXB0eSgpO1xuICB9XG5cbiAgY3JlYXRlU3RhY2thYmxlUGFuZSgpIHtcbiAgICBjb25zdCBwYW5lQ2xhc3MgPSBgJHt0aGlzLnNldHRpbmdzWydzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJ119X19wYW5lYDtcbiAgICBjb25zdCBtb2RpZmllciA9IHRoaXMuJHN0YWNrYWJsZS5maW5kKGAuJHtwYW5lQ2xhc3N9YCkubGVuZ3RoID09PSAwXG4gICAgICA/IGAke3BhbmVDbGFzc30tLWZpcnN0YFxuICAgICAgOiAnJztcbiAgICBjb25zdCAkbmV3UGFuZSA9ICQoYDxkaXYgY2xhc3M9XCIke3BhbmVDbGFzc30gJHttb2RpZmllcn1cIj48L2Rpdj5gKTtcbiAgICB0aGlzLiRzdGFja2FibGUuYXBwZW5kKCRuZXdQYW5lKTtcbiAgICByZXR1cm4gJG5ld1BhbmU7XG4gIH1cblxuICBtYXRlcmlhbEJ5TmFtZShuYW1lKSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MubWF0ZXJpYWxzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5tYXRlcmlhbHNbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IGZyYW1lQ29udGVudFdpbmRvdygpIHtcbiAgICByZXR1cm4gJCh0aGlzLnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKVswXS5jb250ZW50V2luZG93O1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIC8vIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMuZnJhbWVDb250ZW50V2luZG93LCAnc2VyaWFsaXplQ29udGVudCcsIFsnbG9nJ10pO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKS5zZXJpYWxpemVQYWdlKCk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAgIC8vIHdlIGhhdmUgcmVzdWx0IHdoaWNoIGlzIGNvbnRlbnQgaW4gZm9ybWF0OlxuICAgIC8vIHJlZ2lvblxuICAgIC8vIC0tLSBtYXRlcmlhbCBpZFxuICAgIC8vIC0tLS0tLS0ga2V5cyA9PiB2YWx1ZXNcbiAgICAvL1xuICAgIC8vIG91ciBQcm92aWRlcnMgc2hvdWxkIGdldCBvbmx5IHRob3NlIGtleXMgdGhhdCB0aGV5IHByb3ZpZGVcbiAgICAvLyBwcm92aWRlZCBrZXlzIGFyZSBzdG9yZWQgaW4gZnJhbWVDb250ZW50V2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEudGVtcGxhdGUucHJvdmlkZWRLZXlzXG4gICAgY29uc3QgcmVzdWx0QnlQcm92aWRlcnMgPSB7fTtcbiAgICBjb25zdCBwcm92aWRlZEtleXMgPSB0aGlzLmZyYW1lQ29udGVudFdpbmRvdy5NT05TVEVSX0VESVRfTU9ERV9EQVRBLnRlbXBsYXRlLnByb3ZpZGVkS2V5cztcblxuICAgIE9iamVjdC5rZXlzKHByb3ZpZGVkS2V5cykuZm9yRWFjaChwcm92aWRlckluZGV4ID0+IHtcbiAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdID0ge307XG5cbiAgICAgIGNvbnN0IHJlZ2lvbnMgPSBwcm92aWRlZEtleXNbcHJvdmlkZXJJbmRleF07XG5cbiAgICAgIE9iamVjdC5rZXlzKHJlZ2lvbnMpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5oYXNPd25Qcm9wZXJ0eShyZWdpb25LZXkpID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1twcm92aWRlckluZGV4XVtyZWdpb25LZXldID0ge307XG5cbiAgICAgICAgLy8gZ28gZGVlcCB0byBtYXRlcmlhbCBpbmRlY2VzXG4gICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IHJlZ2lvbnNbcmVnaW9uS2V5XTtcblxuICAgICAgICBPYmplY3Qua2V5cyhtYXRlcmlhbHMpLmZvckVhY2gobWF0ZXJpYWxJbmRleCA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdFtyZWdpb25LZXldLmhhc093blByb3BlcnR5KG1hdGVyaWFsSW5kZXgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1twcm92aWRlckluZGV4XVtyZWdpb25LZXldW21hdGVyaWFsSW5kZXhdID0ge307XG5cbiAgICAgICAgICBjb25zdCBkYXRhS2V5cyA9IG1hdGVyaWFsc1ttYXRlcmlhbEluZGV4XTtcblxuICAgICAgICAgIGRhdGFLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHRbcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XS5oYXNPd25Qcm9wZXJ0eShrZXkpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1xuICAgICAgICAgICAgICBbcHJvdmlkZXJJbmRleF1cbiAgICAgICAgICAgICAgW3JlZ2lvbktleV1cbiAgICAgICAgICAgICAgW21hdGVyaWFsSW5kZXhdXG4gICAgICAgICAgICAgIFtrZXldID0gcmVzdWx0W3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF1ba2V5XTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHRCeVByb3ZpZGVycyk7XG4gICAgcmV0dXJuIHJlc3VsdEJ5UHJvdmlkZXJzO1xuICB9XG5cbiAgcGFnZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5lbnZpcm9ubWVudHMuZm9yRWFjaChcbiAgICAgIGVudmlyb25tZW50ID0+XG4gICAgICAgIGVudmlyb25tZW50LnBhZ2VDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgbG9nKHJlc3VsdCkge1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gIH1cblxuICBjb250cm9scygpIHtcbiAgICB0aGlzLiRjb250cm9scyA9IHRoaXMuJGJ1aWxkZXIuZmluZCgnLmNvbnRyb2xzJykuZmlyc3QoKTtcbiAgICB0aGlzLiRjb250cm9scy5lbGVtKCdyZWZyZXNoJykuY2xpY2soKCkgPT4ge1xuICAgICAgdGhpcy5mcmFtZUNvbnRlbnRXaW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRjb250cm9scy5lbGVtKCdzYXZlJykuY2xpY2soKCkgPT4ge1xuICAgICAgRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5mcmFtZUNvbnRlbnRXaW5kb3csICdzYXZlJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsQnVpbGRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXIuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgV1lTSVdZRyBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gQmFzZUVkaXRhYmxlLmZyYW1lJCgkbm9kZSk7XG4gICAgY29uc3QgZWRpdG9yID0gbm9kZS5kYXRhKCdlZGl0b3InKTtcbiAgICBpZiAoZWRpdG9yKSB7XG4gICAgICByZXR1cm4gZWRpdG9yLmdldERhdGEoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUuaHRtbCgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlcyh3KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSAnW2RhdGEtZWRpdGFibGUtdHlwZT13eXNpd3lnXSc7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgYXV0b1BhcmFncmFwaDogZmFsc2UsXG4gICAgICBlbmFibGVDb250ZW50RWRpdGFibGU6IHRydWUsXG4gICAgICBpZ25vcmVFbXB0eVBhcmFncmFwaDogdHJ1ZSxcbiAgICAgIGVudGVyTW9kZTogdy5DS0VESVRPUi5FTlRFUl9CUixcbiAgICB9O1xuXG4gICAgdy4kKCgpID0+IHtcbiAgICAgIHcuJChzZWxlY3RvcikuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgICBjb25zdCBlZGl0b3IgPSB3LkFsbG95RWRpdG9yLmVkaXRhYmxlKHRoaXMsIGNvbmZpZykuZ2V0KCduYXRpdmVFZGl0b3InKTtcbiAgICAgICAgdy4kKHRoaXMpLmRhdGEoJ2VkaXRvcicsIGVkaXRvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXWVNJV1lHO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL1dZU0lXWUcuanNcbiAqKi8iLCJpbXBvcnQgV1lTSVdZRyBmcm9tICcuL1dZU0lXWUcnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9saW5rJztcbmltcG9ydCBUZXh0U3RyaW5nIGZyb20gJy4vc3RyaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWxsKCkge1xuICBpZiAodHlwZW9mKHdpbmRvdy5NT05TVEVSX0VESVRBQkxFUykgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTID0ge307XG4gIH1cbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWyd3eXNpd3lnJ10gPSBuZXcgV1lTSVdZRygpO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ2xpbmsnXSA9IG5ldyBMaW5rKCk7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snaW1hZ2UnXSA9IG5ldyBJbWFnZSgpO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ3N0cmluZyddID0gbmV3IFRleHRTdHJpbmcoKTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lZGl0YWJsZXMvYWxsLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFZGl0YWJsZSBmcm9tICcuL0Jhc2VFZGl0YWJsZSc7XG5cbmNsYXNzIEltYWdlIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIGNvbnN0ICRpbWcgPSAkbm9kZS5maW5kKCdpbWcnKS5maXJzdCgpO1xuICAgIHJldHVybiB7XG4gICAgICBzcmM6ICRpbWcuYXR0cignc3JjJyksXG4gICAgICBhbHQ6ICRpbWcuYXR0cignYWx0JyksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9pbWFnZS5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiAkbm9kZS5kYXRhKCdvcmlnaW5hbEhyZWYnKSA/ICRub2RlLmRhdGEoJ29yaWdpbmFsSHJlZicpIDogJG5vZGUuYXR0cignaHJlZicpLFxuICAgICAgYW5jaG9yOiAkbm9kZS5odG1sKCksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL2xpbmsuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgVGV4dFN0cmluZyBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gQmFzZUVkaXRhYmxlLmZyYW1lJCgkbm9kZSk7XG4gICAgY29uc3QgZWRpdG9yID0gbm9kZS5kYXRhKCdlZGl0b3InKTtcbiAgICBpZiAoZWRpdG9yKSB7XG4gICAgICByZXR1cm4gZWRpdG9yLmdldERhdGEoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUuaHRtbCgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlcyh3KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSAnW2RhdGEtZWRpdGFibGUtdHlwZT1zdHJpbmddLFtkYXRhLWVkaXRhYmxlLXR5cGU9dGV4dF0nO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGFsbG93ZWRDb250ZW50OiAnaSB1JyxcbiAgICAgIHRvb2xiYXJzOiB7XG4gICAgICAgIHN0eWxlczoge1xuICAgICAgICAgIHNlbGVjdGlvbnM6IHcuQWxsb3lFZGl0b3IuU2VsZWN0aW9ucyxcbiAgICAgICAgICB0YWJJbmRleDogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhdXRvUGFyYWdyYXBoOiBmYWxzZSxcbiAgICAgIGVuYWJsZUNvbnRlbnRFZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlnbm9yZUVtcHR5UGFyYWdyYXBoOiB0cnVlLFxuICAgICAgYmxvY2tsZXNzOiB0cnVlLFxuICAgICAgZW50ZXJNb2RlOiB3LkNLRURJVE9SLkVOVEVSX0JSLFxuICAgIH07XG5cbiAgICB3LiQoKCkgPT4ge1xuICAgICAgdy4kKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgIGNvbnN0IGVkaXRvciA9IHcuQWxsb3lFZGl0b3IuZWRpdGFibGUodGhpcywgY29uZmlnKS5nZXQoJ25hdGl2ZUVkaXRvcicpO1xuICAgICAgICBlZGl0b3Iub24oJ2tleScsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5rZXlDb2RlID09PSAxMyB8fCBldmVudC5kYXRhLmtleUNvZGUgPT09IHcuQ0tFRElUT1IuU0hJRlQgKyAxMykge1xuICAgICAgICAgICAgLy8gYWRkIHNhdmluZyBmdW5jdGlvbiBoZXJlXG4gICAgICAgICAgICBldmVudC5jYW5jZWwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlZGl0b3Iub24oJ3Bhc3RlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LmRhdGEuZGF0YVZhbHVlID0gZXZlbnQuZGF0YS5kYXRhVmFsdWUucmVwbGFjZSgvPGJyW1xcc1xcL10qPi9nbWksICcgJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB3LiQodGhpcykuZGF0YSgnZWRpdG9yJywgZWRpdG9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dFN0cmluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9zdHJpbmcuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgQWN0aW9uRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBBY3Rpb25FbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIE1hdGVyaWFsc0Vudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IodmlzdWFsQnVpbGRlciwgbmFtZSkge1xuICAgIHN1cGVyKHZpc3VhbEJ1aWxkZXIsIG5hbWUpO1xuICAgIHRoaXMuaW5pdE1hdGVyaWFsc1NlbGVjdG9yKCk7XG4gIH1cblxuICBpbml0TWF0ZXJpYWxzU2VsZWN0b3IoKSB7XG4gICAgdGhpcy4kbWF0ZXJpYWxzR3JvdXBzID0gJCgnPHVsIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc1wiPjwvdWw+Jyk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzTGlzdCA9IFtdO1xuXG4gICAgdGhpcy52aXN1YWxCdWlsZGVyLnNldHRpbmdzLmJ1bmRsZXMuZm9yRWFjaChidW5kbGUgPT4ge1xuICAgICAgLyogZ2xvYmFsIHBvbHlnbG90OiBmYWxzZSAqL1xuICAgICAgY29uc3QgaTE4bkJ1bmRsZU5hbWUgPSB0eXBlb2YocG9seWdsb3QpICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHBvbHlnbG90LnQoYnVuZGxlLm5hbWUpXG4gICAgICAgIDogYnVuZGxlLm5hbWU7XG5cbiAgICAgIGNvbnN0ICRidW5kbGVUaXRsZSA9IGBcbiAgICAgIDxsaSBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX2l0ZW0gbWF0ZXJpYWxzLWdyb3Vwc19faXRlbS0tYnVuZGxlLWxhYmVsXCI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtYnVuZGxlXCIgZGF0YS1idW5kbGUtcGF0aD1cIiR7YnVuZGxlLmZ1bGxQYXRofVwiPlxuICAgICAgICAgICAgJHtpMThuQnVuZGxlTmFtZX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICAgIGA7XG4gICAgICB0aGlzLiRtYXRlcmlhbHNMaXN0LnB1c2goJGJ1bmRsZVRpdGxlKTtcblxuICAgICAgYnVuZGxlLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBOYW1lID0gZ3JvdXAubmFtZTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gZ3JvdXAubWF0ZXJpYWxzO1xuICAgICAgICBjb25zdCBpMThuR3JvdXBOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCcgPyBwb2x5Z2xvdC50KGdyb3VwTmFtZSkgOiBncm91cE5hbWU7XG4gICAgICAgIGNvbnN0ICRsaSA9ICQoYFxuICAgIDxsaSBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX2l0ZW1cIj5cbiAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS1ncm91cC1wYXRoPVwiJHtncm91cC5mdWxsUGF0aH1cIiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cFwiPlxuICAgICAgICAke2kxOG5Hcm91cE5hbWV9IDxzcGFuIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fY291bnRcIj4oJHttYXRlcmlhbHMubGVuZ3RofSk8L3NwYW4+XG4gICAgICA8L2E+XG4gICAgPC9saT5gKTtcbiAgICAgICAgdGhpcy4kbWF0ZXJpYWxzR3JvdXBzLmFwcGVuZCgkbGkpO1xuICAgICAgICBjb25zdCAkbGlzdCA9ICQoYDx1bCBjbGFzcz1cIm1hdGVyaWFscy1saXN0XCIgZGF0YS1ncm91cC1wYXRoPVwiJHtncm91cC5mdWxsUGF0aH1cIj48L3VsPmApO1xuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuXG4gICAgICAgIG1hdGVyaWFscy5mb3JFYWNoKG1hdGVyaWFsID0+IHtcbiAgICAgICAgICBjb25zdCBtYXRlcmlhbE5hbWUgPSBtYXRlcmlhbC5uYW1lO1xuICAgICAgICAgIGNvbnN0IGkxOG5NYXRlcmlhbE5hbWUgPSB0eXBlb2YocG9seWdsb3QpICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBwb2x5Z2xvdC50KG1hdGVyaWFsTmFtZSlcbiAgICAgICAgICAgIDogbWF0ZXJpYWxOYW1lO1xuICAgICAgICAgIGNvbnN0ICRpdGVtID0gJChgXG48bGk+XG4gIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtYXRlcmlhbHMtbGlzdF9faXRlbVwiIGRhdGEtbWF0ZXJpYWwtcGF0aD1cIiR7bWF0ZXJpYWwuZnVsbFBhdGh9XCI+XG4gICAgJHtpMThuTWF0ZXJpYWxOYW1lfVxuICA8L2E+XG48L2xpPlxuYCk7XG4gICAgICAgICAgaXRlbXMucHVzaCgkaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkbGlzdC5hcHBlbmQoaXRlbXMpO1xuICAgICAgICB0aGlzLiRtYXRlcmlhbHNMaXN0LnB1c2goJGxpc3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcsIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICR0aGlzLnRvZ2dsZU1vZCgnYWN0aXZlJyk7XG4gICAgICBjb25zdCBncm91cFBhdGggPSAkdGhpcy5kYXRhKCdncm91cFBhdGgnKTtcbiAgICAgIGlmICgkdGhpcy5tb2QoJ2FjdGl2ZScpKSB7XG4gICAgICAgICQoJy5tYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAnKS5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzTGlzdEFjdGl2ZUNsYXNzID0gJ21hdGVyaWFscy1saXN0LS1hY3RpdmUnO1xuXG4gICAgICAgICQoJy5tYXRlcmlhbHMtbGlzdCcpLmVhY2goZnVuY3Rpb24gaXQoKSB7XG4gICAgICAgICAgY29uc3QgJGxpc3QgPSAkKHRoaXMpO1xuICAgICAgICAgIGlmICgkbGlzdC5oYXNDbGFzcyhtYXRlcmlhbHNMaXN0QWN0aXZlQ2xhc3MpKSB7XG4gICAgICAgICAgICAkbGlzdC5yZW1vdmVDbGFzcyhtYXRlcmlhbHNMaXN0QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoJGxpc3QuZGF0YSgnZ3JvdXBQYXRoJykgPT09IGdyb3VwUGF0aCkge1xuICAgICAgICAgICAgJGxpc3QuYWRkQ2xhc3MobWF0ZXJpYWxzTGlzdEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICR0aGlzLm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgICAgIHRoYXQuJG1hdGVyaWFsc1BhbmUuc2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhhdCdzIGp1c3Qgc2Vjb25kIGNsaWNrIG9uIHRoZSBzYW1lIGdyb3VwXG4gICAgICAgIHRoYXQuJG1hdGVyaWFsc1BhbmUuaGlkZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWF0ZXJpYWxzLWxpc3RfX2l0ZW0nLCBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICB0aGF0LnNlbmRNZXNzYWdlKFxuICAgICAgICAnbmV3QmxvY2snLFxuICAgICAgICBbXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKCdtYXRlcmlhbFBhdGgnKSxcbiAgICAgICAgICAnY29udGVudCcsXG4gICAgICAgIF1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICBzdXBlci5hY3RpdmF0ZSgpO1xuXG4gICAgdGhpcy4kZ3JvdXBzUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kZ3JvdXBzUGFuZS5hcHBlbmQodGhpcy4kbWF0ZXJpYWxzR3JvdXBzKTtcblxuICAgIHRoaXMuJG1hdGVyaWFsc1BhbmUgPSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3JlYXRlU3RhY2thYmxlUGFuZSgpO1xuICAgIHRoaXMuJG1hdGVyaWFsc1BhbmUuYXBwZW5kKHRoaXMuJG1hdGVyaWFsc0xpc3QpO1xuICAgIHRoaXMuJG1hdGVyaWFsc1BhbmUuaGlkZSgpO1xuXG4gICAgJCgnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcpLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbHNFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9NYXRlcmlhbHNFbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2aXN1YWxCdWlsZGVyLCBuYW1lKSB7XG4gICAgc3VwZXIodmlzdWFsQnVpbGRlciwgbmFtZSk7XG4gICAgdGhpcy5pbml0UGFnZVN0cnVjdHVyZUVsZW1lbnQoKTtcbiAgICB0aGlzLmVkaXRNb2RlRGF0YSA9IHt9O1xuICB9XG5cbiAgaW5pdFBhZ2VTdHJ1Y3R1cmVFbGVtZW50KCkge1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUgPSAkKCc8ZGl2IGNsYXNzPVwicGFnZS1zdHJ1Y3R1cmVcIj48L2Rpdj4nKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHN1cGVyLmFjdGl2YXRlKCk7XG5cbiAgICB0aGlzLiRzdHJ1Y3R1cmVQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRzdHJ1Y3R1cmVQYW5lLmFwcGVuZCh0aGlzLiRwYWdlU3RydWN0dXJlKTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2VkKCkge1xuICAgIHN1cGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5qc3RyZWUoJ2Rlc3Ryb3knKTtcbiAgICBjb25zdCBsYXlvdXQgPSB0aGlzLnRhcmdldC5NT05TVEVSX0VESVRfTU9ERV9EQVRBLmxheW91dDtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudGFyZ2V0Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEudGVtcGxhdGU7XG5cbiAgICBjb25zdCBsYXlvdXRJdGVtID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBpZDogJ2xheW91dCcsXG4gICAgICB9LFxuICAgICAgdGV4dDogYExheW91dCAtICR7bGF5b3V0LmtleX0gIyR7bGF5b3V0LmlkfWAsXG4gICAgICBpY29uOiAnZmEgZmEtY29sdW1ucycsXG4gICAgICBzdGF0ZToge1xuICAgICAgICBvcGVuZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH07XG4gICAgY29uc3QgdGVtcGxhdGVJdGVtID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBpZDogJ3RlbXBsYXRlJyxcbiAgICAgIH0sXG4gICAgICB0ZXh0OiBgVGVtcGxhdGUgLSAke3RlbXBsYXRlLmtleX0gIyR7dGVtcGxhdGUuaWR9YCxcbiAgICAgIGljb246ICdmYSBmYS10aCcsXG4gICAgICBzdGF0ZToge1xuICAgICAgICBvcGVuZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH07XG5cbiAgICBjb25zdCAkbGF5b3V0UmVnaW9ucyA9IHRoaXMudGFyZ2V0JCgnLm0tbW9uc3Rlci1jb250ZW50X19sYXlvdXQnKTtcbiAgICAkbGF5b3V0UmVnaW9ucy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQucHJvY2Vzc0xheW91dCgkKHRoaXMpKTtcbiAgICAgIGxheW91dEl0ZW0uY2hpbGRyZW4ucHVzaChyZXN1bHQuaXRlbSk7XG4gICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcbiAgICAgICAgdGVtcGxhdGVJdGVtLmNoaWxkcmVuLnB1c2gocmVnaW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5wYWdlU3RydWN0dXJlID0gW1xuICAgICAgbGF5b3V0SXRlbSxcbiAgICAgIHRlbXBsYXRlSXRlbSxcbiAgICBdO1xuICAgIGNvbnN0IGp0ID0gdGhpcy4kcGFnZVN0cnVjdHVyZS5qc3RyZWUoe1xuICAgICAgY29yZToge1xuICAgICAgICBkYXRhOiB0aGlzLnBhZ2VTdHJ1Y3R1cmUsXG4gICAgICAgIHRoZW1lczoge1xuICAgICAgICAgIG5hbWU6ICdkZWZhdWx0LWRhcmsnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgJ3R5cGVzJyxcbiAgICAgIF0sXG4gICAgICB0eXBlczoge1xuICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtY29sdW1ucycsXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgaWNvbjogJ2ZhIGZhLXRoJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVSZWdpb246IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtZm9sZGVyLW8nLFxuICAgICAgICB9LFxuICAgICAgICBjb250ZW50VGVtcGxhdGVSZWdpb246IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtZm9sZGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWF0ZXJpYWw6IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtcHV6emxlLXBpZWNlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBqc3RyZWVPYmogPSB0aGlzLiRwYWdlU3RydWN0dXJlLmpzdHJlZSgpO1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUub24oJ2xvYWRlZC5qc3RyZWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uID0ganN0cmVlT2JqLmdldF9qc29uKHRoaXMuJHBhZ2VTdHJ1Y3R1cmUsIHtcbiAgICAgICAgbm9fc3RhdGU6IHRydWUsXG4gICAgICAgIG5vX2lkOiB0cnVlLFxuICAgICAgICBub19saV9hdHRyOiB0cnVlLFxuICAgICAgICBub19hX2F0dHI6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHRoaXMudGFyZ2V0LkZyb250ZW5kTW9uc3Rlci5WaXN1YWxGcmFtZS5wYWdlU3RydWN0dXJlSnNvbiA9IHRoaXMucGFnZVN0cnVjdHVyZUpzb247XG4gICAgfSk7XG5cbiAgICB0aGlzLmVkaXRNb2RlRGF0YSA9IHRoaXMudGFyZ2V0Lk1PTlNURVJfRURJVF9NT0RFX0RBVEE7XG4gIH1cblxuICBzdGF0aWMgcHJvY2Vzc0xheW91dCgkbGF5b3V0UmVnaW9uKSB7XG4gICAgY29uc3QgaXRlbSA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5leHRyYWN0UmVnaW9uRGF0YSgkbGF5b3V0UmVnaW9uKTtcbiAgICBpdGVtLnN0YXRlID0ge1xuICAgICAgb3BlbmVkOiB0cnVlLFxuICAgIH07XG4gICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgIGl0ZW0uZGF0YS5pZCA9IGBsYXlvdXQudGVtcGxhdGVSZWdpb24uJHtpdGVtLmRhdGEucmVnaW9uS2V5fWA7XG4gICAgY29uc3QgdGVtcGxhdGVSZWdpb25zID0gW107XG5cbiAgICAvLyBmaW5kIG1hdGVyaWFsc1xuICAgIGNvbnN0ICRsYXlvdXRNYXRlcmlhbHMgPSAkbGF5b3V0UmVnaW9uLmZpbmQoJz5bZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICAkbGF5b3V0TWF0ZXJpYWxzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0ICRsYXlvdXRNYXRlcmlhbCA9ICQodGhpcyk7XG4gICAgICBjb25zdCByZXN1bHQgPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQucHJvY2Vzc0xheW91dE1hdGVyaWFsKCRsYXlvdXRNYXRlcmlhbCwgaXRlbS5pZCk7XG4gICAgICBjb25zdCBsYXlvdXRNYXRlcmlhbEl0ZW0gPSByZXN1bHQubGF5b3V0TWF0ZXJpYWw7XG4gICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcbiAgICAgICAgdGVtcGxhdGVSZWdpb25zLnB1c2gocmVnaW9uKTtcbiAgICAgIH0pO1xuICAgICAgaXRlbS5jaGlsZHJlbi5wdXNoKGxheW91dE1hdGVyaWFsSXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbSxcbiAgICAgIHRlbXBsYXRlUmVnaW9ucyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHByb2Nlc3NMYXlvdXRNYXRlcmlhbCgkbGF5b3V0TWF0ZXJpYWwsIHByZWZpeCkge1xuICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSAkbGF5b3V0TWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxJbmRleCcpO1xuICAgIGNvbnN0IG1hdGVyaWFsUGF0aCA9ICRsYXlvdXRNYXRlcmlhbC5kYXRhKCdtYXRlcmlhbFBhdGgnKTtcbiAgICBjb25zdCBpdGVtID0ge1xuICAgICAgdGV4dDogYCR7XG4gICAgICAgIG1hdGVyaWFsUGF0aCA9PT0gJ2NvcmUuZnJvbnRlbmQtbW9uc3Rlci1jb3JlLmdlbmVyYWwuY29udGVudC1wbGFjZWhvbGRlcidcbiAgICAgICAgICA/ICdNYWluIEVudGl0eSBDb250ZW50J1xuICAgICAgICAgIDogYE1hdGVyaWFsOiAke21hdGVyaWFsSW5kZXh9YH1cbiAgICAgIGAsXG4gICAgICB0eXBlOiAnbWF0ZXJpYWwnLFxuICAgICAgZGF0YToge1xuICAgICAgICBpZDogYCR7cHJlZml4fS4ke21hdGVyaWFsSW5kZXh9YCxcbiAgICAgICAgbWF0ZXJpYWxJbmRleCxcbiAgICAgICAgbWF0ZXJpYWxQYXRoLFxuICAgICAgICBlZGl0YWJsZUtleXM6ICRsYXlvdXRNYXRlcmlhbC5kYXRhKCdlZGl0YWJsZUtleXMnKSxcbiAgICAgICAgbm9kZTogJGxheW91dE1hdGVyaWFsLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IHRlbXBsYXRlUmVnaW9ucyA9IFtdO1xuICAgIGNvbnN0ICRyZWdpb25zID0gJGxheW91dE1hdGVyaWFsLmZpbmQoJz4gLm0tbW9uc3Rlci1jb250ZW50X19jb250ZW50Jyk7XG4gICAgJHJlZ2lvbnMuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LnByb2Nlc3NUZW1wbGF0ZVJlZ2lvbigkKHRoaXMpKTtcbiAgICAgIHRlbXBsYXRlUmVnaW9ucy5wdXNoKHJlc3VsdCk7XG4gICAgfSk7XG4gICAgaWYgKHRlbXBsYXRlUmVnaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBpdGVtLmRhdGEuaXNDb250ZW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGxheW91dE1hdGVyaWFsOiBpdGVtLFxuICAgICAgdGVtcGxhdGVSZWdpb25zLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgcHJvY2Vzc1RlbXBsYXRlUmVnaW9uKCR0ZW1wbGF0ZVJlZ2lvbikge1xuICAgIGNvbnN0IGl0ZW0gPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQuZXh0cmFjdFJlZ2lvbkRhdGEoJHRlbXBsYXRlUmVnaW9uKTtcbiAgICBpdGVtLnN0YXRlID0ge1xuICAgICAgb3BlbmVkOiB0cnVlLFxuICAgIH07XG4gICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgIGl0ZW0uZGF0YS5lbnRpdHlEZXBlbmRlbnQgPSAkdGVtcGxhdGVSZWdpb24uZGF0YSgncmVnaW9uRW50aXR5RGVwZW5kZW50JykgPT09IDE7XG5cbiAgICBjb25zdCBwcmVmaXggPSBpdGVtLmRhdGEuZW50aXR5RGVwZW5kZW50ID8gJ3RlbXBsYXRlJyA6ICdjb250ZW50JztcbiAgICBpdGVtLmRhdGEuaWQgPSBgJHtwcmVmaXh9LnRlbXBsYXRlUmVnaW9uLiR7aXRlbS5kYXRhLnJlZ2lvbktleX1gO1xuXG4gICAgaWYgKGl0ZW0uZGF0YS5lbnRpdHlEZXBlbmRlbnQpIHtcbiAgICAgIGl0ZW0udHlwZSA9ICdjb250ZW50VGVtcGxhdGVSZWdpb24nO1xuICAgIH1cbiAgICBjb25zdCAkcmVnaW9uTWF0ZXJpYWxzID0gJHRlbXBsYXRlUmVnaW9uLmZpbmQoJz5bZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICAkcmVnaW9uTWF0ZXJpYWxzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGl0ZW0uY2hpbGRyZW4ucHVzaChcbiAgICAgICAgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LnByb2Nlc3NUZW1wbGF0ZVJlZ2lvbk1hdGVyaWFsKFxuICAgICAgICAgICQodGhpcyksXG4gICAgICAgICAgaXRlbS5kYXRhLmlkXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBzdGF0aWMgcHJvY2Vzc1RlbXBsYXRlUmVnaW9uTWF0ZXJpYWwoJHJlZ2lvbk1hdGVyaWFsLCBwcmVmaXgpIHtcbiAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gJHJlZ2lvbk1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsSW5kZXgnKTtcbiAgICBjb25zdCBtYXRlcmlhbFBhdGggPSAkcmVnaW9uTWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxQYXRoJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGBNYXRlcmlhbDogJHttYXRlcmlhbEluZGV4fWAsXG4gICAgICB0eXBlOiAnbWF0ZXJpYWwnLFxuICAgICAgZGF0YToge1xuICAgICAgICBpZDogYCR7cHJlZml4fS4ke21hdGVyaWFsSW5kZXh9YCxcbiAgICAgICAgbWF0ZXJpYWxJbmRleCxcbiAgICAgICAgbWF0ZXJpYWxQYXRoLFxuICAgICAgICBlZGl0YWJsZUtleXM6ICRyZWdpb25NYXRlcmlhbC5kYXRhKCdlZGl0YWJsZUtleXMnKSxcbiAgICAgICAgbm9kZTogJHJlZ2lvbk1hdGVyaWFsLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGV4dHJhY3RSZWdpb25EYXRhKCRub2RlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6ICRub2RlLmRhdGEoJ2NvbnRlbnREZXNjcmlwdGlvbicpLFxuICAgICAgdHlwZTogJ3RlbXBsYXRlUmVnaW9uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcmVnaW9uSWQ6ICRub2RlLmRhdGEoJ3JlZ2lvbklkJyksXG4gICAgICAgIHJlZ2lvbktleTogJG5vZGUuZGF0YSgncmVnaW9uS2V5JyksXG4gICAgICAgIHVuaXF1ZUNvbnRlbnRJZDogJG5vZGUuZGF0YSgndW5pcXVlQ29udGVudElkJyksXG4gICAgICAgIG5vZGU6ICRub2RlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc2VyaWFsaXplUGFnZSgpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMucmVnaW9uc1N0cnVjdHVyZVtyZWdpb25LZXldO1xuICAgICAgcmVzdWx0W3JlZ2lvbi5rZXldID0gcmVnaW9uLnNlcmlhbGl6ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBtYXRlcmlhbHNCeVJlZ2lvbnMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5yZWdpb25zU3RydWN0dXJlKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICBjb25zdCByZWdpb24gPSB0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmVbcmVnaW9uS2V5XTtcbiAgICAgIHJlc3VsdFtyZWdpb24ua2V5XSA9IHJlZ2lvbi5tYXRlcmlhbHNEZWNsKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1bmlxaWQgKHByZWZpeCwgbW9yZUVudHJvcHkpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC91bmlxaWQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgcmV2aXNlZCBieTogS2Fua3JlbHVuZSAoaHR0cDovL3d3dy53ZWJmYWt0b3J5LmluZm8vKVxuICAvLyAgICAgIG5vdGUgMTogVXNlcyBhbiBpbnRlcm5hbCBjb3VudGVyIChpbiBsb2N1dHVzIGdsb2JhbCkgdG8gYXZvaWQgY29sbGlzaW9uXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJGlkID0gdW5pcWlkKClcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gMTNcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IHZhciAkaWQgPSB1bmlxaWQoJ2ZvbycpXG4gIC8vICAgZXhhbXBsZSAyOiB2YXIgJHJlc3VsdCA9ICRpZC5sZW5ndGggPT09ICgxMyArICdmb28nLmxlbmd0aClcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcbiAgLy8gICBleGFtcGxlIDM6IHZhciAkaWQgPSB1bmlxaWQoJ2JhcicsIHRydWUpXG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgJHJlc3VsdCA9ICRpZC5sZW5ndGggPT09ICgyMyArICdiYXInLmxlbmd0aClcbiAgLy8gICByZXR1cm5zIDM6IHRydWVcblxuICBpZiAodHlwZW9mIHByZWZpeCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwcmVmaXggPSAnJ1xuICB9XG5cbiAgdmFyIHJldElkXG4gIHZhciBfZm9ybWF0U2VlZCA9IGZ1bmN0aW9uIChzZWVkLCByZXFXaWR0aCkge1xuICAgIHNlZWQgPSBwYXJzZUludChzZWVkLCAxMCkudG9TdHJpbmcoMTYpIC8vIHRvIGhleCBzdHJcbiAgICBpZiAocmVxV2lkdGggPCBzZWVkLmxlbmd0aCkge1xuICAgICAgLy8gc28gbG9uZyB3ZSBzcGxpdFxuICAgICAgcmV0dXJuIHNlZWQuc2xpY2Uoc2VlZC5sZW5ndGggLSByZXFXaWR0aClcbiAgICB9XG4gICAgaWYgKHJlcVdpZHRoID4gc2VlZC5sZW5ndGgpIHtcbiAgICAgIC8vIHNvIHNob3J0IHdlIHBhZFxuICAgICAgcmV0dXJuIEFycmF5KDEgKyAocmVxV2lkdGggLSBzZWVkLmxlbmd0aCkpLmpvaW4oJzAnKSArIHNlZWRcbiAgICB9XG4gICAgcmV0dXJuIHNlZWRcbiAgfVxuXG4gIHZhciAkZ2xvYmFsID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogR0xPQkFMKVxuICAkZ2xvYmFsLiRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cyB8fCB7fVxuICB2YXIgJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzXG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fVxuXG4gIGlmICghJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQpIHtcbiAgICAvLyBpbml0IHNlZWQgd2l0aCBiaWcgcmFuZG9tIGludFxuICAgICRsb2N1dHVzLnBocC51bmlxaWRTZWVkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMHg3NWJjZDE1KVxuICB9XG4gICRsb2N1dHVzLnBocC51bmlxaWRTZWVkKytcblxuICAvLyBzdGFydCB3aXRoIHByZWZpeCwgYWRkIGN1cnJlbnQgbWlsbGlzZWNvbmRzIGhleCBzdHJpbmdcbiAgcmV0SWQgPSBwcmVmaXhcbiAgcmV0SWQgKz0gX2Zvcm1hdFNlZWQocGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwLCAxMCksIDgpXG4gIC8vIGFkZCBzZWVkIGhleCBzdHJpbmdcbiAgcmV0SWQgKz0gX2Zvcm1hdFNlZWQoJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQsIDUpXG4gIGlmIChtb3JlRW50cm9weSkge1xuICAgIC8vIGZvciBtb3JlIGVudHJvcHkgd2UgYWRkIGEgZmxvYXQgbG93ZXIgdG8gMTBcbiAgICByZXRJZCArPSAoTWF0aC5yYW5kb20oKSAqIDEwKS50b0ZpeGVkKDgpLnRvU3RyaW5nKClcbiAgfVxuXG4gIHJldHVybiByZXRJZFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy91bmlxaWQuanNcbiAqKi8iLCJjbGFzcyBIYXNoQXBpIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5mdW5jdGlvbkNhbGxzID0ge307XG5cbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaGFzaCkge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGRvY3VtZW50LmxvY2F0aW9uLmhhc2gubWF0Y2goLyNoYXNoQXBpOiguKj8pOlxcL2hhc2hBcGkvKTtcbiAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGNvbnN0IGZ1bmN0aW9uQ2FsbHMgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGZ1bmN0aW9uQ2FsbHMpIHtcbiAgICAgICAgICBpZiAoaXRlbS5mdW5jKSB7XG4gICAgICAgICAgICB0aGlzLmZ1bmN0aW9uQ2FsbHNbaXRlbS5mdW5jXSA9IGl0ZW0uYXJncyB8fCB7fTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzaG91bGRDYWxsKGZ1bmMpIHtcbiAgICByZXR1cm4gdGhpcy5mdW5jdGlvbkNhbGxzW2Z1bmNdIHx8IGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhhc2hBcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanNcbiAqKi8iLCJpbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi9GcmFtZUFwaSc7XG5pbXBvcnQgdW5pcXVlSWQgZnJvbSAnLi8uLi91bmlxaWQnO1xuaW1wb3J0IERhdGFQcm92aWRlckZhY3RvcnkgZnJvbSAnLi9EYXRhUHJvdmlkZXJGYWN0b3J5JztcblxuY2xhc3MgVmlzdWFsRnJhbWVcbntcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgRnJhbWVBcGkuYmluZE1lc3NhZ2VMaXN0ZW5lcih0aGlzKTtcbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uID0gbnVsbDtcbiAgICB0aGlzLnBhcmVudFdpbmRvdyA9IHdpbmRvdy5wYXJlbnQ7XG4gICAgLyoqIEB2YXIgRnJvbnRlbmRNb25zdGVyICovXG4gICAgdGhpcy5wYXJlbnRNb25zdGVyID0gdGhpcy5wYXJlbnRXaW5kb3cuRnJvbnRlbmRNb25zdGVyO1xuICAgIHRoaXMucGFyZW50QnVpbGRlciA9IHRoaXMucGFyZW50TW9uc3Rlci5idWlsZGVyO1xuICAgIHRoaXMuY3VycmVudE1vbnN0ZXJDb250ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5tYWtlSXRNb3ZlKCk7XG4gICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICAkKCgpID0+IHtcbiAgICAgIHRoaXMucGFyZW50QnVpbGRlci5wYWdlQ2hhbmdlZCgpO1xuICAgICAgdGhpcy5wYXJlbnRCdWlsZGVyLmVkaXRhYmxlLmluaXRpYWxpemVFZGl0YWJsZXMod2luZG93KTtcbiAgICB9KTtcbiAgICB0aGlzLk1vbnN0ZXJFZGl0RGF0YSA9IHdpbmRvdy5NT05TVEVSX0VESVRfTU9ERV9EQVRBO1xuICAgIHRoaXMuaW5pdFByb3ZpZGVycygpO1xuICB9XG5cbiAgaW5pdFByb3ZpZGVycygpIHtcbiAgICB0aGlzLnByb3ZpZGVycyA9IHtcbiAgICAgIGxheW91dDogdGhpcy5nZXRQcm92aWRlcnModGhpcy5Nb25zdGVyRWRpdERhdGEubGF5b3V0KSxcbiAgICAgIHRlbXBsYXRlOiB0aGlzLmdldFByb3ZpZGVycyh0aGlzLk1vbnN0ZXJFZGl0RGF0YS50ZW1wbGF0ZSksXG4gICAgICBlbnRpdHk6IHRoaXMuZ2V0UHJvdmlkZXJzKHRoaXMuTW9uc3RlckVkaXREYXRhLmVudGl0eSksXG4gICAgfTtcbiAgICBkZWJ1Z2dlcjtcbiAgfVxuXG4gIGdldFByb3ZpZGVycyhhcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhhcnIucHJvdmlkZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBwcm92aWRlckRlY2wgPSBhcnIucHJvdmlkZXJzW2tleV07XG4gICAgICByZXN1bHRba2V5XSA9IERhdGFQcm92aWRlckZhY3RvcnkuZmFjdG9yeShcbiAgICAgICAgcHJvdmlkZXJEZWNsLFxuICAgICAgICBhcnIucHJvdmlkZWRLZXlzW2tleV0gfHwge31cbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldCAkbW9uc3RlckNvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGUpIHtcbiAgICAgIHJldHVybiB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hNb25zdGVyQ29udGVudENhY2hlKCk7XG4gICAgcmV0dXJuIHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGU7XG4gIH1cblxuICByZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpIHtcbiAgICB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlID0ge307XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgJCh0aGlzLnNldHRpbmdzWydtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InXSkuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgaWYgKCF0aGF0LmN1cnJlbnRNb25zdGVyQ29udGVudCkge1xuICAgICAgICB0aGF0LmN1cnJlbnRNb25zdGVyQ29udGVudCA9ICQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyk7XG4gICAgICB9XG4gICAgICB0aGF0LiRtb25zdGVyQ29udGVudENhY2hlWyQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyldID0gJCh0aGlzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUhhbmRsZXJzKCkge1xuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsICYmIHRoaXMuJGhhbmRsZXJzKSB7XG4gICAgICB0aGlzLiRoYW5kbGVycy5jc3MoXG4gICAgICAgICd0b3AnLFxuICAgICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLnBvc2l0aW9uKCkudG9wXG4gICAgICAgICAgKyB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLmhlaWdodCgpXG4gICAgICAgICAgLSB0aGlzLiRoYW5kbGVycy5oZWlnaHQoKVxuICAgICAgKTtcbiAgICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwuYWRkQ2xhc3MoJ20tbW9uc3Rlci1jb250ZW50X19tYXRlcmlhbC0tYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgbWFrZUl0TW92ZSgpIHtcbiAgICB0aGlzLiRoYW5kbGVycyA9ICQoYFxuPGRpdiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNcIj5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX2NvbmZpZ3VyZVwiPlxuICAgIDxpIGNsYXNzPVwiZmEgZmEtY29nXCI+PC9pPlxuICA8L2E+XG4gIDxzcGFuIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fYmxvY2stbmFtZVwiPkJsb2NrIG5hbWUgaGVyZTwvc3Bhbj5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtdXBcIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXVwXCI+PC9pPlxuICA8L2E+XG4gIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLWRvd25cIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvd25cIj48L2k+XG4gIDwvYT5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX2Nsb25lXCI+XG4gICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9uZVwiPjwvaT5cbiAgPC9hPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fcmVtb3ZlXCI+XG4gICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT5cbiAgPC9hPlxuPC9kaXY+YCk7XG4gICAgJCgnYm9keScpLmFwcGVuZCh0aGlzLiRoYW5kbGVycyk7XG4gICAgdGhpcy4kaGFuZGxlcnMuaGlkZSgpO1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICQodGhpcy5zZXR0aW5nc1snbW9uc3Rlci1jb250ZW50LXNlbGVjdG9yJ10pLm9uKHtcbiAgICAgIG1vdXNlZW50ZXI6IGZ1bmN0aW9uIGhvdmVySW4oKSB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ20tbW9uc3Rlci1jb250ZW50X19tYXRlcmlhbC0taGlnaGxpZ2h0ZWQnKTtcbiAgICAgIH0sXG4gICAgICBtb3VzZWxlYXZlOiBmdW5jdGlvbiBob3Zlck91dCgpIHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1oaWdobGlnaHRlZCcpO1xuICAgICAgfSxcbiAgICAgIGNsaWNrOiBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgdGhhdC5zZWxlY3RNYXRlcmlhbCgkdGhpcyk7XG4gICAgICB9LFxuICAgIH0sICdbZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICB0aGF0LiRoYW5kbGVyc1xuICAgICAgLm9uKCdjbGljaycsICcubW9uc3Rlci1ibG9jay1oYW5kbGVyc19fbW92ZS11cCcsICgpID0+IHtcbiAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICBjb25zdCAkcHJldiA9IHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwucHJldignW2RhdGEtaXMtbWF0ZXJpYWxdJyk7XG4gICAgICAgICAgaWYgKCRwcmV2Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5pbnNlcnRCZWZvcmUoJHByZXYpO1xuICAgICAgICAgICAgdGhhdC51cGRhdGVIYW5kbGVycygpO1xuICAgICAgICAgICAgdGhhdC5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLWRvd24nLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICAgICAgY29uc3QgJG5leHQgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLm5leHQoJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICAgICAgIGlmICgkbmV4dC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwuaW5zZXJ0QWZ0ZXIoJG5leHQpO1xuICAgICAgICAgICAgdGhhdC51cGRhdGVIYW5kbGVycygpO1xuICAgICAgICAgICAgdGhhdC5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19jbG9uZScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICBjb25zdCAkY2xvbmVkTWF0ZXJpYWwgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLmNsb25lKCk7XG4gICAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSB1bmlxdWVJZCgnbWF0Jyk7XG4gICAgICAgICAgJGNsb25lZE1hdGVyaWFsXG4gICAgICAgICAgICAuaW5zZXJ0QWZ0ZXIodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbClcbiAgICAgICAgICAgIC5kYXRhKFxuICAgICAgICAgICAgICAnbWF0ZXJpYWxJbmRleCcsXG4gICAgICAgICAgICAgIHJhbmRvbUluZGV4XG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXR0cignZGF0YS1tYXRlcmlhbC1pbmRleCcsIHJhbmRvbUluZGV4KTtcbiAgICAgICAgICB0aGF0LnNlbGVjdE1hdGVyaWFsKCRjbG9uZWRNYXRlcmlhbCk7XG4gICAgICAgICAgdGhhdC5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIG1hdGVyaWFsPycpKSB7XG4gICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCA9IG51bGw7XG4gICAgICAgICAgICB0aGF0LiRoYW5kbGVycy5oaWRlKCk7IC8vIGl0IGRvZXMgbm90IHdvcmsuIHdoeT8gTmVlZCB0byBmaXghXG4gICAgICAgICAgICB0aGF0LnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBzZWxlY3RNYXRlcmlhbCgkbWF0ZXJpYWwpIHtcbiAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCA9PT0gJG1hdGVyaWFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLnJlbW92ZUNsYXNzKCdtLW1vbnN0ZXItY29udGVudF9fbWF0ZXJpYWwtLWFjdGl2ZScpO1xuICAgIH1cbiAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsID0gJG1hdGVyaWFsO1xuICAgIHRoaXMudXBkYXRlSGFuZGxlcnMoKTtcbiAgICB0aGlzLiRoYW5kbGVycy5zaG93KCk7XG4gIH1cblxuICBzZXJpYWxpemVDb250ZW50KGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgT2JqZWN0LmtleXModGhpcy4kbW9uc3RlckNvbnRlbnQpLmZvckVhY2godW5pcXVlQ29udGVudElkID0+IHtcbiAgICAgIGNvbnN0ICRtb25zdGVyID0gdGhpcy4kbW9uc3RlckNvbnRlbnRbdW5pcXVlQ29udGVudElkXTtcbiAgICAgIHJlc3VsdFskbW9uc3Rlci5kYXRhKCd1bmlxdWVDb250ZW50SWQnKV0gPSB0aGF0LnNlcmlhbGl6ZVVuaXF1ZUNvbnRlbnQoJG1vbnN0ZXIpO1xuICAgIH0pO1xuICAgIHRoaXMuc2VuZFRvQnVpbGRlcihjYWxsYmFjaywgW3Jlc3VsdF0pO1xuICB9XG5cbiAgc2VyaWFsaXplVW5pcXVlQ29udGVudCgkbW9uc3RlckNvbnRlbnQpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICByZXN1bHQudW5pcXVlQ29udGVudElkID0gJG1vbnN0ZXJDb250ZW50LmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpO1xuICAgIHJlc3VsdC5tYXRlcmlhbHMgPSB7fTtcbiAgICAkbW9uc3RlckNvbnRlbnQuZmluZCgnW2RhdGEtaXMtbWF0ZXJpYWw9XFwnMVxcJ10nKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCBtYXRlcmlhbCA9IHt9O1xuICAgICAgbWF0ZXJpYWwuYmxvY2sgPSAkKHRoaXMpLmRhdGEoJ21hdGVyaWFsQmxvY2snKTtcbiAgICAgIHJlc3VsdC5tYXRlcmlhbHNbJCh0aGlzKS5kYXRhKCdtYXRlcmlhbEluZGV4JyldID0gbWF0ZXJpYWw7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIFZpc3VhbEZyYW1lIHNldHRpbmdzLlxuICAgKiBVc2VzIFZpc3VhbEZyYW1lU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuVmlzdWFsRnJhbWVTZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICdtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InOiAnLm0tbW9uc3Rlci1jb250ZW50X19jb250ZW50JyxcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHVzZXJTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgfVxuXG4gIHNlbmRUb0J1aWxkZXIoZnVuYywgYXJncykge1xuICAgIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMucGFyZW50V2luZG93LCBmdW5jLCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JtU3VibWl0KGRhdGEpIHtcbiAgICBjb25zdCAkZm9ybSA9ICQoJzxmb3JtIG1ldGhvZD1cIlBPU1RcIj48L2Zvcm0+Jyk7XG4gICAgY29uc3QgJGlucHV0ID0gJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX19qc29uXCI+Jyk7XG4gICAgY29uc3QgJGNzcmYgPSAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiPicpO1xuXG4gICAgJGNzcmZcbiAgICAgIC5hdHRyKCduYW1lJywgJCgnbWV0YVtuYW1lPWNzcmYtcGFyYW1dJykuYXR0cignY29udGVudCcpKVxuICAgICAgLnZhbCgkKCdtZXRhW25hbWU9Y3NyZi10b2tlbl0nKS5hdHRyKCdjb250ZW50JykpXG4gICAgICAuYXBwZW5kVG8oJGZvcm0pO1xuXG4gICAgJGlucHV0XG4gICAgICAudmFsKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgLmFwcGVuZFRvKCRmb3JtKTtcblxuICAgICRmb3JtWzBdLnN1Ym1pdCgpO1xuICB9XG5cbiAgY29uc3RydWN0VGVtcGxhdGVEYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm92aWRlcnNFbnRpdGllczogdGhpcy5wYXJlbnRCdWlsZGVyLnNlcmlhbGl6ZSgpLFxuICAgICAgcmVnaW9uc01hdGVyaWFsczogdGhpcy5wYXJlbnRCdWlsZGVyXG4gICAgICAgIC5lbnZpcm9ubWVudHMuZ2V0KCdwYWdlLXN0cnVjdHVyZScpLm1hdGVyaWFsc0J5UmVnaW9ucygpLFxuICAgIH07XG4gIH1cblxuICBuZXdCbG9jayhtYXRlcmlhbE5hbWUsIHJlZ2lvbk5hbWUpIHtcbiAgICAvLyBAdG9kbyBBZGQgbG9hZGVyIGhlcmUgYXMgd2UgYXJlIHVzaW5nIGZvcm0gcG9zdCAhXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSB1bmlxdWVJZCgnbWF0Jyk7XG4gICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgIHRlbXBsYXRlOiB0aGlzLmNvbnN0cnVjdFRlbXBsYXRlRGF0YSgpLFxuICAgICAgYWN0aW9uOiAncHJldmlldycsXG4gICAgfTtcbiAgICBpZiAobmV3RGF0YS50ZW1wbGF0ZS5yZWdpb25zTWF0ZXJpYWxzLmhhc093blByb3BlcnR5KHJlZ2lvbk5hbWUpID09PSBmYWxzZSkge1xuICAgICAgbmV3RGF0YS50ZW1wbGF0ZS5yZWdpb25zTWF0ZXJpYWxzW3JlZ2lvbk5hbWVdID0ge307XG4gICAgfVxuICAgIC8vIHdlIGFyZSBtb2RpZnlpbmcgdGVtcGxhdGUgZGF0YSBieSBhZGRpbmcgbmV3IG1hdGVyaWFsIGludG8gbmVlZGVkIHJlZ2lvblxuICAgIG5ld0RhdGEudGVtcGxhdGUucmVnaW9uc01hdGVyaWFsc1tyZWdpb25OYW1lXS5kZWNsW3JhbmRvbUluZGV4XSA9IHtcbiAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbE5hbWUsXG4gICAgfTtcbiAgICBuZXdEYXRhLnRlbXBsYXRlLnJlZ2lvbnNNYXRlcmlhbHNbcmVnaW9uTmFtZV0ubWF0ZXJpYWxzT3JkZXIucHVzaChyYW5kb21JbmRleCk7XG4gICAgVmlzdWFsRnJhbWUuZm9ybVN1Ym1pdChuZXdEYXRhKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgY29uc3QgZGF0YSA9IFZpc3VhbEZyYW1lLml0ZXJhdGVUZW1wbGF0ZVR5cGUodGhpcy5wYWdlU3RydWN0dXJlSnNvbik7XG4gICAgZGVidWdnZXI7XG4gICAgVmlzdWFsRnJhbWUuZm9ybVN1Ym1pdChkYXRhKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgaXRlcmF0ZVRlbXBsYXRlVHlwZShhcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBhcnIuZm9yRWFjaChvYmogPT4ge1xuICAgICAgY29uc3Qga2V5ID0gb2JqLmRhdGEuaWQ7XG4gICAgICAvLyBsYXlvdXQgb3IgdGVtcGxhdGVcbiAgICAgIHJlc3VsdFtrZXldID0ge1xuICAgICAgICB0ZW1wbGF0ZVJlZ2lvbnM6IFZpc3VhbEZyYW1lLml0ZXJhdGVUZW1wbGF0ZVJlZ2lvbnMob2JqLmNoaWxkcmVuKSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBpdGVyYXRlVGVtcGxhdGVSZWdpb25zKGFycikge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGFyci5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBvYmouZGF0YS5pZC5yZXBsYWNlKC9eLipcXC4vLCAnJyk7XG4gICAgICAvLyB0aGlzIGlzIGFuIGV4YWN0IHRlbXBsYXRlIHJlZ2lvblxuICAgICAgcmVzdWx0W2tleV0gPSB7XG4gICAgICAgIHJlZ2lvbklkOiBvYmouZGF0YS5yZWdpb25JZCxcbiAgICAgICAgcmVnaW9uS2V5OiBvYmouZGF0YS5yZWdpb25LZXksXG4gICAgICAgIHVuaXF1ZUNvbnRlbnRJZDogb2JqLmRhdGEudW5pcXVlQ29udGVudElkLFxuICAgICAgICBtYXRlcmlhbHM6IFZpc3VhbEZyYW1lLml0ZXJhdGVNYXRlcmlhbHMob2JqLmNoaWxkcmVuKSxcbiAgICAgIH07XG4gICAgICBpZiAodHlwZW9mKG9iai5kYXRhLmVudGl0eURlcGVuZGVudCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJlc3VsdFtrZXldLmVudGl0eURlcGVuZGVudCA9IG9iai5kYXRhLmVudGl0eURlcGVuZGVudDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGl0ZXJhdGVNYXRlcmlhbHMoYXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgYXJyLmZvckVhY2gob2JqID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IG9iai5kYXRhLm1hdGVyaWFsSW5kZXg7XG4gICAgICByZXN1bHRba2V5XSA9IHtcbiAgICAgICAgLy8gZWRpdGFibGVzS2V5czogb2JqLmRhdGEuZWRpdGFibGVLZXlzLFxuICAgICAgICBtYXRlcmlhbDogb2JqLmRhdGEubWF0ZXJpYWxQYXRoLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbEZyYW1lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZS5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiY2xhc3MgRGF0YVByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IoY2xhc3NOYW1lLCBwcm92aWRlZEtleXMpIHtcbiAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB0aGlzLnByb3ZpZGVkS2V5cyA9IHByb3ZpZGVkS2V5cztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhUHJvdmlkZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlci5qc1xuICoqLyIsImltcG9ydCBTdGF0aWNDb250ZW50IGZyb20gJy4vcHJvdmlkZXJzL1N0YXRpY0NvbnRlbnQnO1xuXG5jbGFzcyBEYXRhUHJvdmlkZXJGYWN0b3J5IHtcbiAgc3RhdGljIGZhY3RvcnkocHJvdmlkZXJEZWNsLCBwcm92aWRlZEtleXMpIHtcbiAgICBsZXQgcHJvdmlkZXIgPSBudWxsO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHByb3ZpZGVyRGVjbC5jbGFzc05hbWVcbiAgICAgIHx8ICdEb3RQbGFudFxcXFxNb25zdGVyXFxcXERhdGFFbnRpdHlcXFxcU3RhdGljQ29udGVudFByb3ZpZGVyJztcbiAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuICAgICAgY2FzZSAnRG90UGxhbnRcXFxcTW9uc3RlclxcXFxEYXRhRW50aXR5XFxcXFN0YXRpY0NvbnRlbnRQcm92aWRlcic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBwcm92aWRlciA9IG5ldyBTdGF0aWNDb250ZW50KHByb3ZpZGVkS2V5cyk7XG4gICAgfVxuICAgIHJldHVybiBwcm92aWRlcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhUHJvdmlkZXJGYWN0b3J5O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXJGYWN0b3J5LmpzXG4gKiovIiwiaW1wb3J0IERhdGFQcm92aWRlciBmcm9tICcuLi9EYXRhUHJvdmlkZXInO1xuXG5jbGFzcyBTdGF0aWNDb250ZW50IGV4dGVuZHMgRGF0YVByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IocHJvdmlkZWRLZXlzKSB7XG4gICAgc3VwZXIoJ0RvdFBsYW50XFxcXE1vbnN0ZXJcXFxcRGF0YUVudGl0eVxcXFxTdGF0aWNDb250ZW50UHJvdmlkZXInLCBwcm92aWRlZEtleXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRpY0NvbnRlbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL3Byb3ZpZGVycy9TdGF0aWNDb250ZW50LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==