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
	
	__webpack_require__(35);
	
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
	
	var _VisualBuilder = __webpack_require__(15);
	
	var _VisualBuilder2 = _interopRequireDefault(_VisualBuilder);
	
	var _VisualFrame = __webpack_require__(26);
	
	var _VisualFrame2 = _interopRequireDefault(_VisualFrame);
	
	var _HashApi = __webpack_require__(25);
	
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _BaseControls2 = __webpack_require__(12);
	
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
/* 14 */
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

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _SiteStructureEnvironment = __webpack_require__(20);
	
	var _SiteStructureEnvironment2 = _interopRequireDefault(_SiteStructureEnvironment);
	
	var _MaterialsEnvironment = __webpack_require__(18);
	
	var _MaterialsEnvironment2 = _interopRequireDefault(_MaterialsEnvironment);
	
	var _CustomizationEnvironment = __webpack_require__(17);
	
	var _CustomizationEnvironment2 = _interopRequireDefault(_CustomizationEnvironment);
	
	var _ActionEnvironment = __webpack_require__(16);
	
	var _ActionEnvironment2 = _interopRequireDefault(_ActionEnvironment);
	
	var _PageStructureEnvironment = __webpack_require__(19);
	
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
	      this.$controlsRight.elem('debug-serialize').click(function () {
	        /* global window: false */
	        /* eslint-disable no-param-reassign, no-unused-vars */
	
	        var serializedData = _FrameApi2.default.sendMessage(_this.frameContentWindow, 'serializeDebug');
	        console.log(serializedData);
	
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
/* 16 */
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
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _BaseEnvironment2 = __webpack_require__(1);
	
	var _BaseEnvironment3 = _interopRequireDefault(_BaseEnvironment2);
	
	var _MaterialControls = __webpack_require__(13);
	
	var _MaterialControls2 = _interopRequireDefault(_MaterialControls);
	
	var _PageIterator = __webpack_require__(14);
	
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _StaticContent = __webpack_require__(32);
	
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _all = __webpack_require__(28);
	
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
/* 25 */
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _FrameApi = __webpack_require__(3);
	
	var _FrameApi2 = _interopRequireDefault(_FrameApi);
	
	var _uniqid = __webpack_require__(21);
	
	var _uniqid2 = _interopRequireDefault(_uniqid);
	
	var _DataProviderFactory = __webpack_require__(23);
	
	var _DataProviderFactory2 = _interopRequireDefault(_DataProviderFactory);
	
	var _Editable = __webpack_require__(24);
	
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
	    key: 'serializeDebug',
	    value: function serializeDebug() {
	      var data = this.iterateTemplateType(this.pageStructureJson);
	      var $obj = $('<div class="m-json-editor"></div>');
	      this.parentWindow.DialogHelper.builderDialog().html($obj).autoDestroy().show();
	      var editor = new JSONEditor($obj[0], {
	        mode: 'tree'
	      });
	      editor.set(data);
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = all;
	
	var _WYSIWYG = __webpack_require__(27);
	
	var _WYSIWYG2 = _interopRequireDefault(_WYSIWYG);
	
	var _image = __webpack_require__(29);
	
	var _image2 = _interopRequireDefault(_image);
	
	var _link = __webpack_require__(30);
	
	var _link2 = _interopRequireDefault(_link);
	
	var _string = __webpack_require__(31);
	
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _DataProvider2 = __webpack_require__(22);
	
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
	          // debugger;
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
/* 33 */,
/* 34 */,
/* 35 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDM2ZTBiNjc0MmM5ZDA0NTkxYzQiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL0Jhc2VFbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL0Jhc2VFZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL0Zyb250ZW5kTW9uc3Rlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1BhZ2VTdHJ1Y3R1cmUvQmFzZUNvbnRyb2xzLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZS9NYXRlcmlhbENvbnRyb2xzLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZS9QYWdlSXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9WaXN1YWxCdWlsZGVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0FjdGlvbkVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9NYXRlcmlhbHNFbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9QYWdlU3RydWN0dXJlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3VuaXFpZC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRGF0YVByb3ZpZGVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXJGYWN0b3J5LmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9FZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvSGFzaEFwaS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9XWVNJV1lHLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvYWxsLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9saW5rLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvc3RyaW5nLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9wcm92aWRlcnMvU3RhdGljQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmNzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJGcm9udGVuZE1vbnN0ZXIiLCJCYXNlRW52aXJvbm1lbnQiLCJ2aXN1YWxCdWlsZGVyIiwibmFtZSIsInRhcmdldCIsIiQiLCJzZXR0aW5ncyIsImNvbnRlbnRXaW5kb3ciLCJjdXJyZW50RW52aXJvbm1lbnQiLCJlbnZpcm9ubWVudHMiLCJnZXQiLCJkZWFjdGl2YXRlIiwiY2xlYXJTdGFja2FibGUiLCJmdW5jIiwiYXJncyIsInNlbmRNZXNzYWdlIiwiQmFzZUVkaXRhYmxlIiwiJG5vZGUiLCJGcmFtZUFwaSIsImxpc3RlbmVyIiwiY2FsbGJhY2siLCJjYWxsYmFja0hhbmRsZXIiLCJldmVudCIsIm1lc3NhZ2UiLCJpc0llIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsImFwcGx5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50Iiwic3RyaW5naWZ5IiwicG9zdE1lc3NhZ2UiLCJpcyIsImllIiwicGFyYW1zIiwidmlzdWFsQnVsZGVyIiwiaGFzaEFwaSIsInBhcmVudCIsImhhc0J1aWxkZXIiLCJWaXN1YWxGcmFtZSIsInNtb290aFNjcm9sbCIsImluaXQiLCJ1c2VyU2V0dGluZ3MiLCJGcm9udGVuZE1vbnN0ZXJTZXR0aW5ncyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiYnVpbGRlciIsIiRidWlsZGVyIiwibGVuZ3RoIiwiQmFzZUNvbnRyb2xzIiwiZW52IiwiY29udHJvbEJ1dHRvbnMiLCJwcmVJbml0IiwidGhhdEVudiIsImJ1dHRvbnNBcnJheSIsIiRidXR0b24iLCJjb25mIiwiaWNvbiIsImNsaWNrIiwiY2xpY2tIYW5kbGVyIiwianN0cmVlT2JqIiwiZ2V0X25vZGUiLCJhcHBlbmQiLCJNYXRlcmlhbENvbnRyb2xzIiwianNUcmVlTm9kZSIsInNlbGVjdE1hdGVyaWFsIiwibWF0ZXJpYWxJbmRleCIsImRlbGV0ZV9ub2RlIiwiZ2V0X3NlbGVjdGVkIiwidXBkYXRlUGFnZVN0cnVjdHVyZUpzb24iLCJwcmV2aWV3IiwiUGFnZUl0ZXJhdG9yIiwiJGxheW91dFJlZ2lvbiIsIml0ZW0iLCJleHRyYWN0UmVnaW9uRGF0YSIsInN0YXRlIiwib3BlbmVkIiwiY2hpbGRyZW4iLCJpZCIsInJlZ2lvbktleSIsInJlcGxhY2UiLCJlbnRpdHlUeXBlIiwidGVtcGxhdGVSZWdpb25zIiwiJGxheW91dE1hdGVyaWFscyIsImZpbmQiLCJlYWNoIiwiaXRlciIsIiRsYXlvdXRNYXRlcmlhbCIsInJlc3VsdCIsInByb2Nlc3NMYXlvdXRNYXRlcmlhbCIsImxheW91dE1hdGVyaWFsSXRlbSIsImxheW91dE1hdGVyaWFsIiwicHVzaCIsInJlZ2lvbiIsInByZWZpeCIsIm1hdGVyaWFsUGF0aCIsInRleHQiLCJ0eXBlIiwiZWRpdGFibGVLZXlzIiwibm9kZSIsIiRyZWdpb25zIiwicHJvY2Vzc1RlbXBsYXRlUmVnaW9uIiwiaXNDb250ZW50IiwiJHRlbXBsYXRlUmVnaW9uIiwiZW50aXR5RGVwZW5kZW50IiwiJHJlZ2lvbk1hdGVyaWFscyIsIm1hdGVyaWFsIiwicHJvY2Vzc1RlbXBsYXRlUmVnaW9uTWF0ZXJpYWwiLCIkcmVnaW9uTWF0ZXJpYWwiLCJyZWdpb25JZCIsInVuaXF1ZUNvbnRlbnRJZCIsIlZpc3VhbEJ1aWxkZXIiLCJyZXNvbHV0aW9uU3dpdGNoZXIiLCJNYXAiLCJlbnZpcm9ubWVudFNlbGVjdG9yIiwic3dpdGNoRW52aXJvbm1lbnQiLCJmaXJzdCIsIm1vZCIsImJpbmRNZXNzYWdlTGlzdGVuZXIiLCJjb250cm9scyIsIlZpc3VhbEJ1aWxkZXJTZXR0aW5ncyIsImJ1bmRsZXMiLCIkc3RhY2thYmxlIiwidGhhdCIsImJlbUVsZW0iLCIkcmVzb2x1dGlvbkxpbmtzIiwid2lkdGgiLCIkc2VjdGlvbkxpbmtzIiwiZW52aXJvbm1lbnROYW1lIiwiYWN0aXZhdGUiLCJlbXB0eSIsInBhbmVDbGFzcyIsIm1vZGlmaWVyIiwiJG5ld1BhbmUiLCJtYXRlcmlhbHMiLCJoYXNPd25Qcm9wZXJ0eSIsInNlcmlhbGl6ZVBhZ2UiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0QnlQcm92aWRlcnMiLCJwcm92aWRlZEtleXMiLCJmcmFtZUNvbnRlbnRXaW5kb3ciLCJNT05TVEVSX0VESVRfTU9ERV9EQVRBIiwidGVtcGxhdGUiLCJwcm92aWRlckluZGV4IiwicmVnaW9ucyIsImRhdGFLZXlzIiwiZW52aXJvbm1lbnQiLCJwYWdlQ2hhbmdlZCIsIiRjb250cm9scyIsImVsZW0iLCJsb2NhdGlvbiIsInJlbG9hZCIsIiRjb250cm9sc1JpZ2h0IiwiRGlhbG9nSGVscGVyIiwiYnVpbGRlckRpYWxvZyIsIm9uQWpheExvYWQiLCIkdGFyZ2V0IiwiZGlhbG9nIiwiZGF0YUNoYW5nZXIiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJhdXRvRGVzdHJveSIsInNob3ciLCJzZXJpYWxpemVkRGF0YSIsIkFjdGlvbkVudmlyb25tZW50IiwiQ3VzdG9taXphdGlvbkVudmlyb25tZW50IiwiTWF0ZXJpYWxzRW52aXJvbm1lbnQiLCJpbml0TWF0ZXJpYWxzU2VsZWN0b3IiLCIkbWF0ZXJpYWxzR3JvdXBzIiwiJG1hdGVyaWFsc0xpc3QiLCJpMThuQnVuZGxlTmFtZSIsInBvbHlnbG90IiwidCIsImJ1bmRsZSIsIiRidW5kbGVUaXRsZSIsImZ1bGxQYXRoIiwiZ3JvdXBzIiwiZ3JvdXBOYW1lIiwiZ3JvdXAiLCJpMThuR3JvdXBOYW1lIiwiJGxpIiwiJGxpc3QiLCJpdGVtcyIsIm1hdGVyaWFsTmFtZSIsImkxOG5NYXRlcmlhbE5hbWUiLCIkaXRlbSIsImRvY3VtZW50Iiwib24iLCIkdGhpcyIsInRvZ2dsZU1vZCIsImdyb3VwUGF0aCIsIml0IiwiJG1hdGVyaWFsc1BhbmUiLCJoaWRlIiwiUGFnZVN0cnVjdHVyZUVudiIsInNlbGVjdGVkUmVnaW9uS2V5Iiwic2VsZWN0ZWRFbnRpdHkiLCIkZ3JvdXBzUGFuZSIsImNyZWF0ZVN0YWNrYWJsZVBhbmUiLCJQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQiLCJpbml0UGFnZVN0cnVjdHVyZUVsZW1lbnQiLCIkaGVhZGVyIiwiJHBhZ2VTdHJ1Y3R1cmUiLCIkc3RydWN0dXJlUGFuZSIsImRldGFjaCIsImpzdHJlZSIsImxheW91dCIsImxheW91dEl0ZW0iLCJ0ZW1wbGF0ZUlkIiwidGVtcGxhdGVJdGVtIiwiJGxheW91dFJlZ2lvbnMiLCJ0YXJnZXQkIiwicHJvY2Vzc0xheW91dCIsInBhZ2VTdHJ1Y3R1cmUiLCJjb3JlIiwiY2hlY2tfY2FsbGJhY2siLCJvcGVyYXRpb24iLCJub2RlX3BhcmVudCIsInRoZW1lcyIsInBsdWdpbnMiLCJkbmQiLCJvcGVuX3RpbWVvdXQiLCJsYXJnZV9kcm9wX3RhcmdldCIsImxhcmdlX2RyYWdfdGFyZ2V0IiwiY2hlY2tfd2hpbGVfZHJhZ2dpbmciLCJjb3B5IiwiaXNfZHJhZ2dhYmxlIiwibm9kZXMiLCJ1bmRlZmluZWQiLCJ0eXBlcyIsInRlbXBsYXRlUmVnaW9uIiwiY29udGVudFRlbXBsYXRlUmVnaW9uIiwiaXNDb250ZW50UmVnaW9uRm91bmQiLCJzZWxlY3Rfbm9kZSIsImUiLCJvYmoiLCIkYW5jaG9yIiwicHJlcGVuZCIsInNjcm9sbFRhcmdldCIsImluZGV4IiwiJHRhcmdldE1hdGVyaWFsIiwicmVtb3ZlQ2xhc3MiLCJvZmZzZXRXaWR0aCIsImFkZENsYXNzIiwicGFnZVN0cnVjdHVyZUpzb24iLCJnZXRfanNvbiIsIm5vX3N0YXRlIiwibm9faWQiLCJub19saV9hdHRyIiwibm9fYV9hdHRyIiwiU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsInVuaXFpZCIsIm1vcmVFbnRyb3B5IiwicmV0SWQiLCJfZm9ybWF0U2VlZCIsInNlZWQiLCJyZXFXaWR0aCIsInBhcnNlSW50IiwidG9TdHJpbmciLCJzbGljZSIsIkFycmF5Iiwiam9pbiIsIiRnbG9iYWwiLCJHTE9CQUwiLCIkbG9jdXR1cyIsInBocCIsInVuaXFpZFNlZWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJEYXRlIiwiZ2V0VGltZSIsInRvRml4ZWQiLCJEYXRhUHJvdmlkZXIiLCJjbGFzc05hbWUiLCJhc3NvY2lhdGlvbnMiLCJhc3NvY2lhdGUiLCIkcmVnaW9uIiwibWF0ZXJpYWxLZXkiLCIkbWF0ZXJpYWwiLCJtYXRlcmlhbEVkaXRhYmxlS2V5cyIsImluaXRpYWxpemVNYXRlcmlhbEVkaXQiLCIkcm9vdCIsIiRibG9ja3MiLCJjb3VudGVyIiwiZWRpdGFibGUiLCJpbml0aWFsaXplRWRpdGFibGUiLCJzZXJpYWxpemVNYXRlcmlhbCIsImNsYXNzIiwiZmlsbENvbmZpZyIsIkRhdGFQcm92aWRlckZhY3RvcnkiLCJwcm92aWRlckRlY2wiLCJwcm92aWRlciIsIkVkaXRhYmxlIiwiZWRpdGFibGVzQnlUeXBlIiwiTU9OU1RFUl9FRElUQUJMRVMiLCJleHBvcnRWYXJpYWJsZSIsInNlcmlhbGl6ZU5vZGUiLCJzdHJpbmciLCJIYXNoQXBpIiwiZnVuY3Rpb25DYWxscyIsImhhc2giLCJtYXRjaGVzIiwibWF0Y2giLCJkZWNvZGVVUklDb21wb25lbnQiLCJpbml0aWFsaXplIiwicGFnZVN0cnVjdHVyZUpzb25EYXRhIiwicGFyZW50V2luZG93IiwicGFyZW50TW9uc3RlciIsInBhcmVudEJ1aWxkZXIiLCJjdXJyZW50TW9uc3RlckNvbnRlbnQiLCJyZXNpemUiLCJ1cGRhdGVIYW5kbGVycyIsImluaXRQcm92aWRlcnMiLCJNb25zdGVyRWRpdERhdGEiLCJwcm92aWRlcnMiLCJnZXRQcm92aWRlcnMiLCJlbnRpdHkiLCJhcnIiLCJmYWN0b3J5IiwiJG1vbnN0ZXJDb250ZW50Q2FjaGUiLCIkc2VsZWN0ZWRNYXRlcmlhbCIsIiRoYW5kbGVycyIsImNzcyIsInBvc2l0aW9uIiwidG9wIiwiaGVpZ2h0IiwiJG1vbnN0ZXJDb250ZW50IiwiJG1vbnN0ZXIiLCJzZXJpYWxpemVVbmlxdWVDb250ZW50Iiwic2VuZFRvQnVpbGRlciIsImJsb2NrIiwiVmlzdWFsRnJhbWVTZXR0aW5ncyIsInJlZ2lvbk5hbWUiLCJyYW5kb21JbmRleCIsIml0ZXJhdGVUZW1wbGF0ZVR5cGUiLCJtYXRlcmlhbHNCeVJlZ2lvbkRlY2wiLCJkZWNsIiwibWF0ZXJpYWxzT3JkZXIiLCJtYXRlcmlhbHNEZWNscyIsIm5ld0RhdGEiLCJhY3Rpb24iLCJmb3JtU3VibWl0IiwiJG9iaiIsImh0bWwiLCJlZGl0b3IiLCJKU09ORWRpdG9yIiwibW9kZSIsInNldCIsInJlZ2lvbnNSZXN1bHQiLCJpdGVyYXRlVGVtcGxhdGVSZWdpb25zIiwidGVtcGxhdGVSZWdpb25zT3JkZXIiLCJlbnRpdHlNYXRlcmlhbHMiLCJzZXJpYWxpemVQcm92aWRlcnMiLCJwcm92aWRlcktleSIsInNlcmlhbGl6ZSIsInZhbHVlIiwicmVmcmVzaE1vbnN0ZXJDb250ZW50Q2FjaGUiLCIkZm9ybSIsIiRpbnB1dCIsIiRjc3JmIiwiYXR0ciIsInZhbCIsImFwcGVuZFRvIiwic3VibWl0IiwicmVnaW9uTWF0ZXJpYWxzIiwiaXRlcmF0ZU1hdGVyaWFscyIsIldZU0lXWUciLCJmcmFtZSQiLCJnZXREYXRhIiwiY29uZmlnIiwiYXV0b1BhcmFncmFwaCIsImVuYWJsZUNvbnRlbnRFZGl0YWJsZSIsImlnbm9yZUVtcHR5UGFyYWdyYXBoIiwiZW50ZXJNb2RlIiwiQ0tFRElUT1IiLCJFTlRFUl9CUiIsIkFsbG95RWRpdG9yIiwiYWxsIiwiSW1hZ2UiLCIkaW1nIiwic3JjIiwiYWx0IiwiTGluayIsImhyZWYiLCJhbmNob3IiLCJUZXh0U3RyaW5nIiwiYWxsb3dlZENvbnRlbnQiLCJ0b29sYmFycyIsInN0eWxlcyIsInNlbGVjdGlvbnMiLCJTZWxlY3Rpb25zIiwidGFiSW5kZXgiLCJibG9ja2xlc3MiLCJrZXlDb2RlIiwiU0hJRlQiLCJjYW5jZWwiLCJkYXRhVmFsdWUiLCJTdGF0aWNDb250ZW50IiwiZW50aXRpZXMiLCJzZXJpYWxpemVLZXlzIiwicmVjdXJzaXZlU2VyaWFsaXplIiwid2FybiIsInNlcmlhbGl6ZUVkaXRhYmxlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVBOzs7Ozs7QUFFQUEsUUFBT0MsZUFBUCxHQUF5QiwrQkFBekI7QUFDQSxHOzs7Ozs7Ozs7Ozs7OztBQ0xBOzs7Ozs7OztLQUVNQyxlO0FBQ0osNEJBQVlDLGFBQVosRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQy9CLFVBQUtELGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0MsTUFBTCxHQUFjQyxFQUFFLEtBQUtILGFBQUwsQ0FBbUJJLFFBQW5C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QUFSLGtDQUE0Q3pULE1BQTVDLEdBQXFEakQsR0FBckQ7QUFDQTtBQUNEO0FBQ0QyQyxrQkFBTzNDLEdBQVAsSUFBYyx1QkFBYXFQLFFBQWIsQ0FBc0JzSCxpQkFBdEIsQ0FBd0MxWSxLQUF4QyxDQUFkO0FBQ0Q7QUFDRixRQTNCRDtBQTRCQSxjQUFPMEUsTUFBUDtBQUNEOzs7Ozs7bUJBR1kyVCxhOzs7Ozs7OztBQ3REZiwwQyIsImZpbGUiOiJ2aXN1YWwtYnVpbGRlci9zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0MzZlMGI2NzQyYzlkMDQ1OTFjNFxuICoqLyIsImltcG9ydCAnLi9idW5kbGUuY3NzJztcblxuaW1wb3J0IEZyb250ZW5kTW9uc3RlciBmcm9tICcuL0Zyb250ZW5kTW9uc3Rlcic7XG5cbndpbmRvdy5Gcm9udGVuZE1vbnN0ZXIgPSBuZXcgRnJvbnRlbmRNb25zdGVyKCk7XG4vL1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5qc1xuICoqLyIsImltcG9ydCBGcmFtZUFwaSBmcm9tICcuLy4uL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaSc7XG5cbmNsYXNzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIgPSB2aXN1YWxCdWlsZGVyO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXJnZXQgPSAkKHRoaXMudmlzdWFsQnVpbGRlci5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSlbMF0uY29udGVudFdpbmRvdztcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIC8vIGRlYWN0aXZhdGUgY3VycmVudCBzZWxlY3RlZCBlbnZpcm9ubWVudFxuICAgIGlmICh0aGlzLm5hbWUgPT09IHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpIHtcbiAgICAgIHRoaXMudmlzdWFsQnVpbGRlci5lbnZpcm9ubWVudHMuZ2V0KHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpLmRlYWN0aXZhdGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdGFyZ2V0JCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQuJDtcbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy52aXN1YWxCdWlsZGVyLmNsZWFyU3RhY2thYmxlKCk7XG4gIH1cblxuICBzZW5kTWVzc2FnZShmdW5jLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMudGFyZ2V0LCBmdW5jLCBhcmdzKTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2VkKCkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUVudmlyb25tZW50O1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvQmFzZUVudmlyb25tZW50LmpzXG4gKiovIiwiY2xhc3MgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuXG4gIH1cblxuICBpbml0aWFsaXplRWRpdGFibGUoJG5vZGUpIHtcblxuICB9XG5cbiAgc3RhdGljIGdldCBmcmFtZSQoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy4kO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VFZGl0YWJsZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvQmFzZUVkaXRhYmxlLmpzXG4gKiovIiwiY2xhc3MgRnJhbWVBcGkge1xuICBzdGF0aWMgZ2V0IGlzSWUoKSB7XG4gICAgLyogZ2xvYmFsIGlzICovXG4gICAgaWYgKHR5cGVvZihpcykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gaXMuaWUoKTsvLyB8fCBpcy5lZGdlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgYmluZE1lc3NhZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgICBsZXQgbWVzc2FnZSA9IG51bGw7XG4gICAgICBpZiAoRnJhbWVBcGkuaXNJZSkge1xuICAgICAgICBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lc3NhZ2UgPSBldmVudC5kYXRhO1xuICAgICAgfVxuXG4gICAgICBpZiAobGlzdGVuZXJbbWVzc2FnZS5mdW5jXSkge1xuICAgICAgICBsaXN0ZW5lclttZXNzYWdlLmZ1bmNdLmFwcGx5KGxpc3RlbmVyLCBtZXNzYWdlLmFyZ3MpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJRThcbiAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25tZXNzYWdlJywgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzZW5kTWVzc2FnZSh0YXJnZXQsIGZ1bmMsIGFyZ3MpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZnVuYyxcbiAgICAgIGFyZ3NcbiAgICB9O1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBGcmFtZUFwaS5pc0llID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiBkYXRhO1xuXG4gICAgdGFyZ2V0LnBvc3RNZXNzYWdlKG1lc3NhZ2UsICcqJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJhbWVBcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaS5qc1xuICoqLyIsImltcG9ydCBWaXN1YWxCdWlsZGVyIGZyb20gJy4vY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXInO1xuaW1wb3J0IFZpc3VhbEZyYW1lIGZyb20gJy4vY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUnO1xuaW1wb3J0IEhhc2hBcGkgZnJvbSAnLi9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9IYXNoQXBpJztcblxuY2xhc3MgRnJvbnRlbmRNb25zdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLnZpc3VhbEJ1bGRlciA9IG51bGw7XG4gICAgdGhpcy5oYXNoQXBpID0gbmV3IEhhc2hBcGkoKTtcbiAgICBpZiAod2luZG93LnBhcmVudCAhPT0gd2luZG93ICYmIHdpbmRvdy5wYXJlbnQuRnJvbnRlbmRNb25zdGVyKSB7XG4gICAgICBpZiAod2luZG93LnBhcmVudC5Gcm9udGVuZE1vbnN0ZXIuaGFzQnVpbGRlcikge1xuICAgICAgICB0aGlzLlZpc3VhbEZyYW1lID0gbmV3IFZpc3VhbEZyYW1lKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qIGdsb2JhbCBzbW9vdGhTY3JvbGw6IGZhbHNlKi9cbiAgICBpZiAodHlwZW9mKHNtb290aFNjcm9sbCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzbW9vdGhTY3JvbGwuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIFZpc3VhbEJ1aWxkZXIgY2xhc3MgaW5zdGFuY2VcbiAgICogQHJldHVybnMgVmlzdWFsQnVpbGRlclxuICAgKi9cbiAgZ2V0IGJ1aWxkZXIoKSB7XG4gICAgaWYgKHRoaXMudmlzdWFsQnVsZGVyID09PSBudWxsKSB7XG4gICAgICB0aGlzLnZpc3VhbEJ1bGRlciA9IG5ldyBWaXN1YWxCdWlsZGVyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZpc3VhbEJ1bGRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB0aGlzIEZyb250ZW5kTW9uc3RlciBpbnN0YW5jZSBoYXMgVmlzdWFsIEJ1aWxkZXIgb24gcGFnZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBoYXNCdWlsZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkZXIuJGJ1aWxkZXIubGVuZ3RoID09PSAxO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgRnJvbnRlbmRNb25zdGVyIHNldHRpbmdzLlxuICAgKiBVc2VzIEZyb250ZW5kTW9uc3RlclNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAqL1xuICBwYXJhbXMoKSB7XG4gICAgY29uc3QgdXNlclNldHRpbmdzID0gd2luZG93LkZyb250ZW5kTW9uc3RlclNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge307XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyb250ZW5kTW9uc3RlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL0Zyb250ZW5kTW9uc3Rlci5qc1xuICoqLyIsImNsYXNzIEJhc2VDb250cm9scyB7XG4gIGNvbnN0cnVjdG9yKGVudikge1xuICAgIHRoaXMuZW52ID0gZW52O1xuICAgIHRoaXMuY29udHJvbEJ1dHRvbnMgPSAkKCc8ZGl2IGNsYXNzPVwidHJlZS1jb250cm9sLWJ1dHRvbnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+PC9kaXY+Jyk7XG5cbiAgICB0aGlzLnByZUluaXQoKTtcblxuICAgIGNvbnN0IHRoYXRFbnYgPSB0aGlzLmVudjtcbiAgICB0aGlzLmJ1dHRvbnNBcnJheS5mb3JFYWNoKGNvbmYgPT4ge1xuICAgICAgY29uc3QgJGJ1dHRvbiA9ICQoYDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0cmVlLWNvbnRyb2wtYnV0dG9uc19fYnV0dG9uXCIgdGl0bGU9XCIke2NvbmYubmFtZX1cIj5cbiAgPGkgY2xhc3M9XCIke2NvbmYuaWNvbn1cIj48L2k+XG48L2E+YCk7XG4gICAgICAkYnV0dG9uLmNsaWNrKGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpe1xuICAgICAgICBjb25zdCAkbm9kZSA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbmYuY2xpY2sodGhhdEVudi5qc3RyZWVPYmouZ2V0X25vZGUoJG5vZGUpLCAkbm9kZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY29udHJvbEJ1dHRvbnMuYXBwZW5kKCRidXR0b24pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGJ1dHRvbnNBcnJheSgpIHtcbiAgICB0aHJvdyBcIllvdSBtdXN0IGltcGxlbWVudCBidXR0b25zQXJyYXlcIjtcbiAgfVxuXG4gIHByZUluaXQoKSB7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlQ29udHJvbHM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1BhZ2VTdHJ1Y3R1cmUvQmFzZUNvbnRyb2xzLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VDb250cm9scyBmcm9tICcuL0Jhc2VDb250cm9scyc7XG5cbmNsYXNzIE1hdGVyaWFsQ29udHJvbHMgZXh0ZW5kcyBCYXNlQ29udHJvbHMge1xuICBnZXQgYnV0dG9uc0FycmF5KCkge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGljb246ICdmYSBmYS1hcnJvdy1yaWdodCcsXG4gICAgICAgIG5hbWU6ICdTZWxlY3QnLFxuICAgICAgICBjbGljazogKGpzVHJlZU5vZGUvKiwgJG5vZGUqLykgPT4ge1xuICAgICAgICAgIHRoaXMuZW52LnNlbGVjdE1hdGVyaWFsKGpzVHJlZU5vZGUuZGF0YS5tYXRlcmlhbEluZGV4KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246ICdmYSBmYS10cmFzaC1vJyxcbiAgICAgICAgbmFtZTogJ1JlbW92ZScsXG4gICAgICAgIGNsaWNrOiAoLypqc1RyZWVOb2RlLCAkbm9kZSovKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbnYuanN0cmVlT2JqLmRlbGV0ZV9ub2RlKHRoaXMuZW52LmpzdHJlZU9iai5nZXRfc2VsZWN0ZWQoKSk7XG4gICAgICAgICAgdGhpcy5lbnYudXBkYXRlUGFnZVN0cnVjdHVyZUpzb24oKTtcbiAgICAgICAgICB0aGlzLmVudi50YXJnZXQuRnJvbnRlbmRNb25zdGVyLlZpc3VhbEZyYW1lLnByZXZpZXcoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFsQ29udHJvbHM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1BhZ2VTdHJ1Y3R1cmUvTWF0ZXJpYWxDb250cm9scy5qc1xuICoqLyIsImNsYXNzIFBhZ2VJdGVyYXRvciB7XG5cbiAgc3RhdGljIHByb2Nlc3NMYXlvdXQoJGxheW91dFJlZ2lvbikge1xuICAgIGNvbnN0IGl0ZW0gPSBQYWdlSXRlcmF0b3IuZXh0cmFjdFJlZ2lvbkRhdGEoJGxheW91dFJlZ2lvbik7XG4gICAgaXRlbS5zdGF0ZSA9IHtcbiAgICAgIG9wZW5lZDogdHJ1ZSxcbiAgICB9O1xuICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICBpdGVtLmRhdGEuaWQgPSBgbGF5b3V0LnRlbXBsYXRlUmVnaW9uLiR7aXRlbS5kYXRhLnJlZ2lvbktleX1gO1xuICAgIGl0ZW0uaWQgPSBgcHNqXyR7aXRlbS5kYXRhLmlkfWAucmVwbGFjZSgvXFwuL2csICdfJyk7XG4gICAgaXRlbS5kYXRhLmVudGl0eVR5cGUgPSAnbGF5b3V0JztcbiAgICBjb25zdCB0ZW1wbGF0ZVJlZ2lvbnMgPSBbXTtcblxuICAgIC8vIGZpbmQgbWF0ZXJpYWxzXG4gICAgY29uc3QgJGxheW91dE1hdGVyaWFscyA9ICRsYXlvdXRSZWdpb24uZmluZCgnPltkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICRsYXlvdXRNYXRlcmlhbHMuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgY29uc3QgJGxheW91dE1hdGVyaWFsID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFBhZ2VJdGVyYXRvci5wcm9jZXNzTGF5b3V0TWF0ZXJpYWwoJGxheW91dE1hdGVyaWFsLCBpdGVtLmlkLCBpdGVtLmRhdGEucmVnaW9uS2V5KTtcbiAgICAgIGNvbnN0IGxheW91dE1hdGVyaWFsSXRlbSA9IHJlc3VsdC5sYXlvdXRNYXRlcmlhbDtcbiAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnMuZm9yRWFjaChyZWdpb24gPT4ge1xuICAgICAgICB0ZW1wbGF0ZVJlZ2lvbnMucHVzaChyZWdpb24pO1xuICAgICAgfSk7XG4gICAgICBpdGVtLmNoaWxkcmVuLnB1c2gobGF5b3V0TWF0ZXJpYWxJdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBpdGVtLFxuICAgICAgdGVtcGxhdGVSZWdpb25zLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgcHJvY2Vzc0xheW91dE1hdGVyaWFsKCRsYXlvdXRNYXRlcmlhbCwgcHJlZml4LCByZWdpb25LZXkpIHtcbiAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gJGxheW91dE1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsSW5kZXgnKTtcbiAgICBjb25zdCBtYXRlcmlhbFBhdGggPSAkbGF5b3V0TWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxQYXRoJyk7XG4gICAgY29uc3QgaXRlbSA9IHtcbiAgICAgIHRleHQ6IGAke1xuICAgICAgICBtYXRlcmlhbFBhdGggPT09ICdjb3JlLmZyb250ZW5kLW1vbnN0ZXItY29yZS5nZW5lcmFsLmNvbnRlbnQtcGxhY2Vob2xkZXInXG4gICAgICAgICAgPyAnTWFpbiBFbnRpdHkgQ29udGVudCdcbiAgICAgICAgICA6IGBNYXRlcmlhbDogJHttYXRlcmlhbEluZGV4fWB9XG4gICAgICBgLFxuICAgICAgdHlwZTogJ21hdGVyaWFsJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6IGAke3ByZWZpeH0uJHttYXRlcmlhbEluZGV4fWAsXG4gICAgICAgIG1hdGVyaWFsSW5kZXgsXG4gICAgICAgIG1hdGVyaWFsUGF0aCxcbiAgICAgICAgZWRpdGFibGVLZXlzOiAkbGF5b3V0TWF0ZXJpYWwuZGF0YSgnZWRpdGFibGVLZXlzJyksXG4gICAgICAgIG5vZGU6ICRsYXlvdXRNYXRlcmlhbCxcbiAgICAgICAgcmVnaW9uS2V5LFxuICAgICAgICBlbnRpdHlUeXBlOiAnbGF5b3V0JyxcbiAgICAgIH0sXG4gICAgICBpZDogYHBzal8ke3ByZWZpeH1fJHttYXRlcmlhbEluZGV4fWAsXG4gICAgfTtcbiAgICBjb25zdCB0ZW1wbGF0ZVJlZ2lvbnMgPSBbXTtcbiAgICBjb25zdCAkcmVnaW9ucyA9ICRsYXlvdXRNYXRlcmlhbC5maW5kKCc+IC5tLW1vbnN0ZXItY29udGVudF9fY29udGVudCcpO1xuICAgICRyZWdpb25zLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFBhZ2VJdGVyYXRvci5wcm9jZXNzVGVtcGxhdGVSZWdpb24oJCh0aGlzKSk7XG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnMucHVzaChyZXN1bHQpO1xuICAgIH0pO1xuICAgIGlmICh0ZW1wbGF0ZVJlZ2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgaXRlbS5kYXRhLmlzQ29udGVudCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBsYXlvdXRNYXRlcmlhbDogaXRlbSxcbiAgICAgIHRlbXBsYXRlUmVnaW9ucyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHByb2Nlc3NUZW1wbGF0ZVJlZ2lvbigkdGVtcGxhdGVSZWdpb24pIHtcbiAgICBjb25zdCBpdGVtID0gUGFnZUl0ZXJhdG9yLmV4dHJhY3RSZWdpb25EYXRhKCR0ZW1wbGF0ZVJlZ2lvbik7XG4gICAgaXRlbS5zdGF0ZSA9IHtcbiAgICAgIG9wZW5lZDogdHJ1ZSxcbiAgICB9O1xuICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICBpdGVtLmRhdGEuZW50aXR5RGVwZW5kZW50ID0gJHRlbXBsYXRlUmVnaW9uLmRhdGEoJ3JlZ2lvbkVudGl0eURlcGVuZGVudCcpID09PSAxO1xuXG4gICAgY29uc3QgcHJlZml4ID0gaXRlbS5kYXRhLmVudGl0eURlcGVuZGVudCA/ICdjb250ZW50JyA6ICd0ZW1wbGF0ZSc7XG4gICAgaXRlbS5kYXRhLmVudGl0eVR5cGUgPSBpdGVtLmRhdGEuZW50aXR5RGVwZW5kZW50ID8gJ2VudGl0eScgOiAndGVtcGxhdGUnO1xuICAgIGl0ZW0uZGF0YS5pZCA9IGAke3ByZWZpeH0udGVtcGxhdGVSZWdpb24uJHtpdGVtLmRhdGEucmVnaW9uS2V5fWA7XG4gICAgaXRlbS5pZCA9IGBwc2pfJHtpdGVtLmRhdGEuaWR9YC5yZXBsYWNlKC9cXC4vZywgJ18nKTtcblxuICAgIGlmIChpdGVtLmRhdGEuZW50aXR5RGVwZW5kZW50KSB7XG4gICAgICBpdGVtLnR5cGUgPSAnY29udGVudFRlbXBsYXRlUmVnaW9uJztcbiAgICB9XG4gICAgY29uc3QgJHJlZ2lvbk1hdGVyaWFscyA9ICR0ZW1wbGF0ZVJlZ2lvbi5maW5kKCc+W2RhdGEtaXMtbWF0ZXJpYWxdJyk7XG4gICAgJHJlZ2lvbk1hdGVyaWFscy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCBtYXRlcmlhbCA9IFBhZ2VJdGVyYXRvci5wcm9jZXNzVGVtcGxhdGVSZWdpb25NYXRlcmlhbChcbiAgICAgICAgJCh0aGlzKSxcbiAgICAgICAgaXRlbS5kYXRhLmlkLFxuICAgICAgICBwcmVmaXhcbiAgICAgICk7XG4gICAgICBtYXRlcmlhbC5kYXRhLnJlZ2lvbktleSA9IGl0ZW0uZGF0YS5yZWdpb25LZXk7XG4gICAgICBtYXRlcmlhbC5pZCA9IGBwc2pfJHttYXRlcmlhbC5kYXRhLmlkfWAucmVwbGFjZSgvXFwuL2csICdfJyk7XG4gICAgICBpdGVtLmNoaWxkcmVuLnB1c2gobWF0ZXJpYWwpO1xuICAgIH0pO1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgc3RhdGljIHByb2Nlc3NUZW1wbGF0ZVJlZ2lvbk1hdGVyaWFsKCRyZWdpb25NYXRlcmlhbCwgcHJlZml4LCBlbnRpdHlUeXBlKSB7XG4gICAgY29uc3QgbWF0ZXJpYWxJbmRleCA9ICRyZWdpb25NYXRlcmlhbC5kYXRhKCdtYXRlcmlhbEluZGV4Jyk7XG4gICAgY29uc3QgbWF0ZXJpYWxQYXRoID0gJHJlZ2lvbk1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsUGF0aCcpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBgTWF0ZXJpYWw6ICR7bWF0ZXJpYWxJbmRleH1gLFxuICAgICAgdHlwZTogJ21hdGVyaWFsJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6IGAke3ByZWZpeH0uJHttYXRlcmlhbEluZGV4fWAsXG4gICAgICAgIG1hdGVyaWFsSW5kZXgsXG4gICAgICAgIG1hdGVyaWFsUGF0aCxcbiAgICAgICAgZWRpdGFibGVLZXlzOiAkcmVnaW9uTWF0ZXJpYWwuZGF0YSgnZWRpdGFibGVLZXlzJyksXG4gICAgICAgIG5vZGU6ICRyZWdpb25NYXRlcmlhbCxcbiAgICAgICAgZW50aXR5VHlwZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBleHRyYWN0UmVnaW9uRGF0YSgkbm9kZSkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiAkbm9kZS5kYXRhKCdjb250ZW50RGVzY3JpcHRpb24nKSxcbiAgICAgIHR5cGU6ICd0ZW1wbGF0ZVJlZ2lvbicsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHJlZ2lvbklkOiAkbm9kZS5kYXRhKCdyZWdpb25JZCcpLFxuICAgICAgICByZWdpb25LZXk6ICRub2RlLmRhdGEoJ3JlZ2lvbktleScpLFxuICAgICAgICB1bmlxdWVDb250ZW50SWQ6ICRub2RlLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpLFxuICAgICAgICBub2RlOiAkbm9kZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlSXRlcmF0b3I7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1BhZ2VTdHJ1Y3R1cmUvUGFnZUl0ZXJhdG9yLmpzXG4gKiovIiwiaW1wb3J0IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQnO1xuaW1wb3J0IE1hdGVyaWFsc0Vudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50JztcbmltcG9ydCBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50JztcbmltcG9ydCBBY3Rpb25FbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudCc7XG5pbXBvcnQgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCc7XG5pbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi8uLi92aXN1YWwtZnJhbWUvRnJhbWVBcGknO1xuLy8gaW1wb3J0IEVkaXRhYmxlIGZyb20gJy4vRWRpdGFibGUnO1xuXG5jbGFzcyBWaXN1YWxCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLnJlc29sdXRpb25Td2l0Y2hlcigpO1xuXG4gICAgdGhpcy5lbnZpcm9ubWVudHMgPSBuZXcgTWFwKFtcbiAgICAgIFsnc2l0ZS1zdHJ1Y3R1cmUnLCBuZXcgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdzaXRlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsncGFnZS1zdHJ1Y3R1cmUnLCBuZXcgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdwYWdlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsnbWF0ZXJpYWxzJywgbmV3IE1hdGVyaWFsc0Vudmlyb25tZW50KHRoaXMsICdtYXRlcmlhbHMnKV0sXG4gICAgICBbJ2N1c3RvbWl6YXRpb24nLCBuZXcgQ3VzdG9taXphdGlvbkVudmlyb25tZW50KHRoaXMsICdjdXN0b21pemF0aW9uJyldLFxuICAgICAgWydhY3Rpb24nLCBuZXcgQWN0aW9uRW52aXJvbm1lbnQodGhpcywgJ2FjdGlvbicpXSxcbiAgICBdKTtcblxuICAgIHRoaXMuZW52aXJvbm1lbnRTZWxlY3RvcigpO1xuXG4gICAgLy8gc2VsZWN0IGZpcnN0IGVudmlyb25tZW50IGJ5IGRlZmF1bHRcbiAgICB0aGlzLnN3aXRjaEVudmlyb25tZW50KCdzaXRlLXN0cnVjdHVyZScpO1xuICAgICQoJy5tb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJylcbiAgICAgIC5maXJzdCgpXG4gICAgICAubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICBGcmFtZUFwaS5iaW5kTWVzc2FnZUxpc3RlbmVyKHRoaXMpO1xuXG4gICAgLy8gdGhpcy5lZGl0YWJsZSA9IG5ldyBFZGl0YWJsZSgpO1xuXG4gICAgdGhpcy5jb250cm9scygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgVmlzdWFsQnVpbGRlciBzZXR0aW5ncy5cbiAgICogVXNlcyBWaXN1YWxCdWlsZGVyU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuVmlzdWFsQnVpbGRlclNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgJ2VsZW1lbnQtc2VsZWN0b3InOiAnLm1vbnN0ZXItdmlzdWFsLWJ1aWxkZXInLFxuICAgICAgJ2ZyYW1lLXNlbGVjdG9yJzogJy5tb25zdGVyLXZpc3VhbC1mcmFtZScsXG4gICAgICBidW5kbGVzOiB7fSxcbiAgICAgICdzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJzogJ21vbnN0ZXItc3RhY2thYmxlLWNvbnRhaW5lcicsXG4gICAgICAnbmV3LWJsb2NrLXVybCc6ICcvbW9uc3Rlci92aXN1YWwtYnVpbGRlci9uZXctYmxvY2snLFxuICAgIH07XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuJGJ1aWxkZXIgPSAkKHRoaXMuc2V0dGluZ3NbJ2VsZW1lbnQtc2VsZWN0b3InXSk7XG4gICAgdGhpcy4kc3RhY2thYmxlID0gJChgLiR7dGhpcy5zZXR0aW5nc1snc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyddfWApO1xuICB9XG5cbiAgcmVzb2x1dGlvblN3aXRjaGVyKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGJlbUVsZW0gPSAncmVzb2x1dGlvbi1zd2l0Y2hlcl9fcmVzb2x1dGlvbi1saW5rJztcblxuICAgIGNvbnN0ICRyZXNvbHV0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRyZXNvbHV0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAkcmVzb2x1dGlvbkxpbmtzLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgICAgJCh0aGF0LnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKS53aWR0aCgkKHRoaXMpLmRhdGEoJ3Jlc29sdXRpb25XaWR0aCcpKTtcbiAgICAgICQodGhpcykubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGVudmlyb25tZW50U2VsZWN0b3IoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgYmVtRWxlbSA9ICdtb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJztcblxuICAgIGNvbnN0ICRzZWN0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRzZWN0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBjb25zdCBlbnZpcm9ubWVudE5hbWUgPSAkKHRoaXMpLmRhdGEoJ2Vudmlyb25tZW50TmFtZScpO1xuICAgICAgaWYgKHRoYXQuY3VycmVudEVudmlyb25tZW50ID09PSBlbnZpcm9ubWVudE5hbWUpIHtcbiAgICAgICAgJHNlY3Rpb25MaW5rcy5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgdGhhdC5lbnZpcm9ubWVudHMuZ2V0KGVudmlyb25tZW50TmFtZSkuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB0aGF0LmN1cnJlbnRFbnZpcm9ubWVudCA9IG51bGw7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgJHNlY3Rpb25MaW5rcy5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgIHRoYXQuc3dpdGNoRW52aXJvbm1lbnQoZW52aXJvbm1lbnROYW1lKTtcbiAgICAgICQodGhpcykubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHN3aXRjaEVudmlyb25tZW50KGVudmlyb25tZW50TmFtZSkge1xuICAgIHRoaXMuZW52aXJvbm1lbnRzLmdldChlbnZpcm9ubWVudE5hbWUpLmFjdGl2YXRlKCk7XG4gICAgdGhpcy5jdXJyZW50RW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudE5hbWU7XG4gIH1cblxuICBjbGVhclN0YWNrYWJsZSgpIHtcbiAgICB0aGlzLiRzdGFja2FibGUuZW1wdHkoKTtcbiAgfVxuXG4gIGNyZWF0ZVN0YWNrYWJsZVBhbmUoKSB7XG4gICAgY29uc3QgcGFuZUNsYXNzID0gYCR7dGhpcy5zZXR0aW5nc1snc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyddfV9fcGFuZWA7XG4gICAgY29uc3QgbW9kaWZpZXIgPSB0aGlzLiRzdGFja2FibGUuZmluZChgLiR7cGFuZUNsYXNzfWApLmxlbmd0aCA9PT0gMFxuICAgICAgPyBgJHtwYW5lQ2xhc3N9X2ZpcnN0YFxuICAgICAgOiAnJztcbiAgICBjb25zdCAkbmV3UGFuZSA9ICQoYDxkaXYgY2xhc3M9XCIke3BhbmVDbGFzc30gJHttb2RpZmllcn1cIj48L2Rpdj5gKTtcbiAgICB0aGlzLiRzdGFja2FibGUuYXBwZW5kKCRuZXdQYW5lKTtcbiAgICByZXR1cm4gJG5ld1BhbmU7XG4gIH1cblxuICBtYXRlcmlhbEJ5TmFtZShuYW1lKSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MubWF0ZXJpYWxzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5tYXRlcmlhbHNbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IGZyYW1lQ29udGVudFdpbmRvdygpIHtcbiAgICByZXR1cm4gJCh0aGlzLnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKVswXS5jb250ZW50V2luZG93O1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIC8vIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMuZnJhbWVDb250ZW50V2luZG93LCAnc2VyaWFsaXplQ29udGVudCcsIFsnbG9nJ10pO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKS5zZXJpYWxpemVQYWdlKCk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAgIC8vIHdlIGhhdmUgcmVzdWx0IHdoaWNoIGlzIGNvbnRlbnQgaW4gZm9ybWF0OlxuICAgIC8vIHJlZ2lvblxuICAgIC8vIC0tLSBtYXRlcmlhbCBpZFxuICAgIC8vIC0tLS0tLS0ga2V5cyA9PiB2YWx1ZXNcbiAgICAvL1xuICAgIC8vIG91ciBQcm92aWRlcnMgc2hvdWxkIGdldCBvbmx5IHRob3NlIGtleXMgdGhhdCB0aGV5IHByb3ZpZGVcbiAgICAvLyBwcm92aWRlZCBrZXlzIGFyZSBzdG9yZWQgaW4gZnJhbWVDb250ZW50V2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEudGVtcGxhdGUucHJvdmlkZWRLZXlzXG4gICAgY29uc3QgcmVzdWx0QnlQcm92aWRlcnMgPSB7fTtcbiAgICBjb25zdCBwcm92aWRlZEtleXMgPSB0aGlzLmZyYW1lQ29udGVudFdpbmRvdy5NT05TVEVSX0VESVRfTU9ERV9EQVRBLnRlbXBsYXRlLnByb3ZpZGVkS2V5cztcblxuICAgIE9iamVjdC5rZXlzKHByb3ZpZGVkS2V5cykuZm9yRWFjaChwcm92aWRlckluZGV4ID0+IHtcbiAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdID0ge307XG5cbiAgICAgIGNvbnN0IHJlZ2lvbnMgPSBwcm92aWRlZEtleXNbcHJvdmlkZXJJbmRleF07XG5cbiAgICAgIE9iamVjdC5rZXlzKHJlZ2lvbnMpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5oYXNPd25Qcm9wZXJ0eShyZWdpb25LZXkpID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1twcm92aWRlckluZGV4XVtyZWdpb25LZXldID0ge307XG5cbiAgICAgICAgLy8gZ28gZGVlcCB0byBtYXRlcmlhbCBpbmRlY2VzXG4gICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IHJlZ2lvbnNbcmVnaW9uS2V5XTtcblxuICAgICAgICBPYmplY3Qua2V5cyhtYXRlcmlhbHMpLmZvckVhY2gobWF0ZXJpYWxJbmRleCA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdFtyZWdpb25LZXldLmhhc093blByb3BlcnR5KG1hdGVyaWFsSW5kZXgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1twcm92aWRlckluZGV4XVtyZWdpb25LZXldW21hdGVyaWFsSW5kZXhdID0ge307XG5cbiAgICAgICAgICBjb25zdCBkYXRhS2V5cyA9IG1hdGVyaWFsc1ttYXRlcmlhbEluZGV4XTtcblxuICAgICAgICAgIGRhdGFLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHRbcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XS5oYXNPd25Qcm9wZXJ0eShrZXkpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1xuICAgICAgICAgICAgICBbcHJvdmlkZXJJbmRleF1cbiAgICAgICAgICAgICAgW3JlZ2lvbktleV1cbiAgICAgICAgICAgICAgW21hdGVyaWFsSW5kZXhdXG4gICAgICAgICAgICAgIFtrZXldID0gcmVzdWx0W3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF1ba2V5XTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHRCeVByb3ZpZGVycyk7XG4gICAgcmV0dXJuIHJlc3VsdEJ5UHJvdmlkZXJzO1xuICB9XG5cbiAgcGFnZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5lbnZpcm9ubWVudHMuZm9yRWFjaChcbiAgICAgIGVudmlyb25tZW50ID0+XG4gICAgICAgIGVudmlyb25tZW50LnBhZ2VDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgbG9nKHJlc3VsdCkge1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gIH1cblxuICBjb250cm9scygpIHtcbiAgICB0aGlzLiRjb250cm9scyA9IHRoaXMuJGJ1aWxkZXIuZmluZCgnLmNvbnRyb2xzX2xlZnQnKS5maXJzdCgpO1xuICAgIHRoaXMuJGNvbnRyb2xzLmVsZW0oJ3JlZnJlc2gnKS5jbGljaygoKSA9PiB7XG4gICAgICB0aGlzLmZyYW1lQ29udGVudFdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIHRoaXMuJGNvbnRyb2xzLmVsZW0oJ3NhdmUnKS5jbGljaygoKSA9PiB7XG4gICAgICBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLmZyYW1lQ29udGVudFdpbmRvdywgJ3NhdmUnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLiRjb250cm9sc1JpZ2h0ID0gdGhpcy4kYnVpbGRlci5maW5kKCcuY29udHJvbHNfcmlnaHQnKS5maXJzdCgpO1xuICAgIHRoaXMuJGNvbnRyb2xzUmlnaHQuZWxlbSgnY2xlYXItY2FjaGUnKS5jbGljaygoKSA9PiB7XG4gICAgICAvKiBnbG9iYWwgd2luZG93OiBmYWxzZSAqL1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24sIG5vLXVudXNlZC12YXJzICovXG4gICAgICB3aW5kb3cuRGlhbG9nSGVscGVyXG4gICAgICAgIC5idWlsZGVyRGlhbG9nKClcbiAgICAgICAgLm9uQWpheExvYWQoKGRhdGEsICR0YXJnZXQsIGRpYWxvZywgZGF0YUNoYW5nZXIpID0+IHtcbiAgICAgICAgICBkYXRhQ2hhbmdlcihkYXRhID8gJzxkaXY+T0s8L2Rpdj4nIDogJzxkaXY+RXJyb3I8L2Rpdj4nKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmFqYXgoe1xuICAgICAgICAgIHVybDogJy9tb25zdGVyL2J1bmRsZXMvY2xlYXItY2FjaGUnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIH0pXG4gICAgICAgIC5hdXRvRGVzdHJveSgpXG4gICAgICAgIC5zaG93KCk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduLCBuby11bnVzZWQtdmFycyAqL1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMuJGNvbnRyb2xzUmlnaHQuZWxlbSgnZGVidWctc2VyaWFsaXplJykuY2xpY2soKCkgPT4ge1xuICAgICAgLyogZ2xvYmFsIHdpbmRvdzogZmFsc2UgKi9cbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduLCBuby11bnVzZWQtdmFycyAqL1xuXG4gICAgICBjb25zdCBzZXJpYWxpemVkRGF0YSA9IEZyYW1lQXBpLnNlbmRNZXNzYWdlKFxuICAgICAgICB0aGlzLmZyYW1lQ29udGVudFdpbmRvdyxcbiAgICAgICAgJ3NlcmlhbGl6ZURlYnVnJ1xuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKHNlcmlhbGl6ZWREYXRhKTtcblxuXG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduLCBuby11bnVzZWQtdmFycyAqL1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbEJ1aWxkZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlci5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBBY3Rpb25FbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBNYXRlcmlhbHNFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICBzdXBlcih2aXN1YWxCdWlsZGVyLCBuYW1lKTtcbiAgICB0aGlzLmluaXRNYXRlcmlhbHNTZWxlY3RvcigpO1xuICB9XG5cbiAgaW5pdE1hdGVyaWFsc1NlbGVjdG9yKCkge1xuICAgIHRoaXMuJG1hdGVyaWFsc0dyb3VwcyA9ICQoJzx1bCBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNcIj48L3VsPicpO1xuICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QgPSBbXTtcblxuICAgIHRoaXMudmlzdWFsQnVpbGRlci5zZXR0aW5ncy5idW5kbGVzLmZvckVhY2goYnVuZGxlID0+IHtcbiAgICAgIC8qIGdsb2JhbCBwb2x5Z2xvdDogZmFsc2UgKi9cbiAgICAgIGNvbnN0IGkxOG5CdW5kbGVOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBwb2x5Z2xvdC50KGJ1bmRsZS5uYW1lKVxuICAgICAgICA6IGJ1bmRsZS5uYW1lO1xuXG4gICAgICBjb25zdCAkYnVuZGxlVGl0bGUgPSBgXG4gICAgICA8bGkgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19pdGVtIG1hdGVyaWFscy1ncm91cHNfX2l0ZW0tLWJ1bmRsZS1sYWJlbFwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWJ1bmRsZVwiIGRhdGEtYnVuZGxlLXBhdGg9XCIke2J1bmRsZS5mdWxsUGF0aH1cIj5cbiAgICAgICAgICAgICR7aTE4bkJ1bmRsZU5hbWV9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICBgO1xuICAgICAgdGhpcy4kbWF0ZXJpYWxzTGlzdC5wdXNoKCRidW5kbGVUaXRsZSk7XG5cbiAgICAgIGJ1bmRsZS5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwTmFtZSA9IGdyb3VwLm5hbWU7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IGdyb3VwLm1hdGVyaWFscztcbiAgICAgICAgY29uc3QgaTE4bkdyb3VwTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnID8gcG9seWdsb3QudChncm91cE5hbWUpIDogZ3JvdXBOYW1lO1xuICAgICAgICBjb25zdCAkbGkgPSAkKGBcbiAgICA8bGkgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19pdGVtXCI+XG4gICAgICA8YSBocmVmPVwiI1wiIGRhdGEtZ3JvdXAtcGF0aD1cIiR7Z3JvdXAuZnVsbFBhdGh9XCIgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXBcIj5cbiAgICAgICAgJHtpMThuR3JvdXBOYW1lfSA8c3BhbiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX2NvdW50XCI+KCR7bWF0ZXJpYWxzLmxlbmd0aH0pPC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvbGk+YCk7XG4gICAgICAgIHRoaXMuJG1hdGVyaWFsc0dyb3Vwcy5hcHBlbmQoJGxpKTtcbiAgICAgICAgY29uc3QgJGxpc3QgPSAkKGA8dWwgY2xhc3M9XCJtYXRlcmlhbHMtbGlzdFwiIGRhdGEtZ3JvdXAtcGF0aD1cIiR7Z3JvdXAuZnVsbFBhdGh9XCI+PC91bD5gKTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcblxuICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaChtYXRlcmlhbCA9PiB7XG4gICAgICAgICAgY29uc3QgbWF0ZXJpYWxOYW1lID0gbWF0ZXJpYWwubmFtZTtcbiAgICAgICAgICBjb25zdCBpMThuTWF0ZXJpYWxOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gcG9seWdsb3QudChtYXRlcmlhbE5hbWUpXG4gICAgICAgICAgICA6IG1hdGVyaWFsTmFtZTtcbiAgICAgICAgICBjb25zdCAkaXRlbSA9ICQoYFxuPGxpPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWF0ZXJpYWxzLWxpc3RfX2l0ZW1cIiBkYXRhLW1hdGVyaWFsLXBhdGg9XCIke21hdGVyaWFsLmZ1bGxQYXRofVwiPlxuICAgICR7aTE4bk1hdGVyaWFsTmFtZX1cbiAgPC9hPlxuPC9saT5cbmApO1xuICAgICAgICAgIGl0ZW1zLnB1c2goJGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgJGxpc3QuYXBwZW5kKGl0ZW1zKTtcbiAgICAgICAgdGhpcy4kbWF0ZXJpYWxzTGlzdC5wdXNoKCRsaXN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgLyogZ2xvYmFsIGRvY3VtZW50OiBmYWxzZSAqL1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJywgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgJHRoaXMudG9nZ2xlTW9kKCdhY3RpdmUnKTtcbiAgICAgIGNvbnN0IGdyb3VwUGF0aCA9ICR0aGlzLmRhdGEoJ2dyb3VwUGF0aCcpO1xuICAgICAgaWYgKCR0aGlzLm1vZCgnYWN0aXZlJykpIHtcbiAgICAgICAgJCgnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcpLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuXG4gICAgICAgICQoJy5tYXRlcmlhbHMtbGlzdCcpLmVhY2goZnVuY3Rpb24gaXQoKSB7XG4gICAgICAgICAgY29uc3QgJGxpc3QgPSAkKHRoaXMpO1xuICAgICAgICAgIGlmICgkbGlzdC5tb2QoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAkbGlzdC5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCRsaXN0LmRhdGEoJ2dyb3VwUGF0aCcpID09PSBncm91cFBhdGgpIHtcbiAgICAgICAgICAgICRsaXN0Lm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkdGhpcy5tb2QoJ2FjdGl2ZScsIHRydWUpO1xuICAgICAgICB0aGF0LiRtYXRlcmlhbHNQYW5lLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoYXQncyBqdXN0IHNlY29uZCBjbGljayBvbiB0aGUgc2FtZSBncm91cFxuICAgICAgICB0aGF0LiRtYXRlcmlhbHNQYW5lLmhpZGUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYXRlcmlhbHMtbGlzdF9faXRlbScsIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgIGNvbnN0IFBhZ2VTdHJ1Y3R1cmVFbnYgPSB0aGF0LnZpc3VhbEJ1aWxkZXIuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRSZWdpb25LZXkgPSBQYWdlU3RydWN0dXJlRW52LnNlbGVjdGVkUmVnaW9uS2V5O1xuICAgICAgY29uc3Qgc2VsZWN0ZWRFbnRpdHkgPSBQYWdlU3RydWN0dXJlRW52LnNlbGVjdGVkRW50aXR5O1xuXG4gICAgICBpZiAoc2VsZWN0ZWRSZWdpb25LZXkgIT09IG51bGwgJiYgc2VsZWN0ZWRFbnRpdHkgIT09IG51bGwpIHtcbiAgICAgICAgdGhhdC5zZW5kTWVzc2FnZShcbiAgICAgICAgICAnbmV3QmxvY2snLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgICQodGhpcykuZGF0YSgnbWF0ZXJpYWxQYXRoJyksXG4gICAgICAgICAgICBzZWxlY3RlZEVudGl0eSxcbiAgICAgICAgICAgIHNlbGVjdGVkUmVnaW9uS2V5LFxuICAgICAgICAgIF1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHN1cGVyLmFjdGl2YXRlKCk7XG5cbiAgICB0aGlzLiRncm91cHNQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRncm91cHNQYW5lLmFwcGVuZCh0aGlzLiRtYXRlcmlhbHNHcm91cHMpO1xuXG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZS5hcHBlbmQodGhpcy4kbWF0ZXJpYWxzTGlzdCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZS5oaWRlKCk7XG5cbiAgICAvKlxuICAgIGNvbnN0IFBhZ2VTdHJ1Y3R1cmVFbnYgPSB0aGF0LnZpc3VhbEJ1aWxkZXIuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkUmVnaW9uS2V5ID0gUGFnZVN0cnVjdHVyZUVudi5zZWxlY3RlZFJlZ2lvbktleTtcbiAgICBjb25zdCBzZWxlY3RlZEVudGl0eSA9IFBhZ2VTdHJ1Y3R1cmVFbnYuc2VsZWN0ZWRFbnRpdHk7XG5cbiAgICBAdG9kbyBjaGVjayBmb3Igc2VsZWN0ZWRSZWdpb24gaWYgbm90IC0gd2UgbXVzdCBub3QgYWRkIGJsb2NrIGhlcmVcbiAgICAqL1xuXG4gICAgJCgnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcpLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbHNFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvTWF0ZXJpYWxzRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcbmltcG9ydCBNYXRlcmlhbENvbnRyb2xzIGZyb20gJy4vLi4vUGFnZVN0cnVjdHVyZS9NYXRlcmlhbENvbnRyb2xzJztcbmltcG9ydCBQYWdlSXRlcmF0b3IgZnJvbSAnLi8uLi9QYWdlU3RydWN0dXJlL1BhZ2VJdGVyYXRvcic7XG5cbmNsYXNzIFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICBzdXBlcih2aXN1YWxCdWlsZGVyLCBuYW1lKTtcbiAgICB0aGlzLmluaXRQYWdlU3RydWN0dXJlRWxlbWVudCgpO1xuICAgIHRoaXMuc2VsZWN0ZWRSZWdpb25LZXkgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0ZWRFbnRpdHkgPSBudWxsO1xuICB9XG5cbiAgaW5pdFBhZ2VTdHJ1Y3R1cmVFbGVtZW50KCkge1xuICAgIHRoaXMuJGhlYWRlciA9ICQoJzxkaXYgY2xhc3M9XCJtb25zdGVyLXN0YWNrYWJsZS1jb250YWluZXJfX3BhbmUtaGVhZGVyXCI+UGFnZSBzdHJ1Y3R1cmU8L2Rpdj4nKTtcbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlID0gJCgnPGRpdiBjbGFzcz1cInBhZ2Utc3RydWN0dXJlXCI+PC9kaXY+Jyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICBzdXBlci5hY3RpdmF0ZSgpO1xuXG4gICAgdGhpcy4kc3RydWN0dXJlUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kc3RydWN0dXJlUGFuZS5hcHBlbmQodGhpcy4kaGVhZGVyKTtcbiAgICB0aGlzLiRzdHJ1Y3R1cmVQYW5lLmFwcGVuZCh0aGlzLiRwYWdlU3RydWN0dXJlKTtcbiAgfVxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUuZGV0YWNoKCk7XG4gICAgdGhpcy4kaGVhZGVyLmRldGFjaCgpO1xuICAgIHN1cGVyLmRlYWN0aXZhdGUoKTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2VkKCkge1xuICAgIHN1cGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5qc3RyZWUoJ2Rlc3Ryb3knKTtcbiAgICBjb25zdCBsYXlvdXQgPSB0aGlzLnRhcmdldC5NT05TVEVSX0VESVRfTU9ERV9EQVRBLmxheW91dDtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudGFyZ2V0Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEudGVtcGxhdGU7XG5cbiAgICBjb25zdCBsYXlvdXRJdGVtID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBpZDogJ2xheW91dCcsXG4gICAgICAgIHRlbXBsYXRlSWQ6IGxheW91dC5pZCxcbiAgICAgIH0sXG4gICAgICB0ZXh0OiBgTGF5b3V0IC0gJHtsYXlvdXQua2V5fSAjJHtsYXlvdXQuaWR9YCxcbiAgICAgIGljb246ICdmYSBmYS1jb2x1bW5zJyxcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIG9wZW5lZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgfTtcbiAgICBjb25zdCB0ZW1wbGF0ZUl0ZW0gPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiAndGVtcGxhdGUnLFxuICAgICAgICB0ZW1wbGF0ZUlkOiB0ZW1wbGF0ZS5pZCxcbiAgICAgIH0sXG4gICAgICB0ZXh0OiBgVGVtcGxhdGUgLSAke3RlbXBsYXRlLmtleX0gIyR7dGVtcGxhdGUuaWR9YCxcbiAgICAgIGljb246ICdmYSBmYS10aCcsXG4gICAgICBzdGF0ZToge1xuICAgICAgICBvcGVuZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH07XG5cbiAgICBjb25zdCAkbGF5b3V0UmVnaW9ucyA9IHRoaXMudGFyZ2V0JCgnLm0tbW9uc3Rlci1jb250ZW50X19sYXlvdXQnKTtcblxuICAgICRsYXlvdXRSZWdpb25zLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFBhZ2VJdGVyYXRvci5wcm9jZXNzTGF5b3V0KCQodGhpcykpO1xuICAgICAgbGF5b3V0SXRlbS5jaGlsZHJlbi5wdXNoKHJlc3VsdC5pdGVtKTtcbiAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnMuZm9yRWFjaChyZWdpb24gPT4ge1xuICAgICAgICB0ZW1wbGF0ZUl0ZW0uY2hpbGRyZW4ucHVzaChyZWdpb24pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmUgPSBbXG4gICAgICBsYXlvdXRJdGVtLFxuICAgICAgdGVtcGxhdGVJdGVtLFxuICAgIF07XG5cbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlLmpzdHJlZSh7XG4gICAgICBjb3JlOiB7XG4gICAgICAgIGNoZWNrX2NhbGxiYWNrOiAob3BlcmF0aW9uLCBub2RlLCBub2RlX3BhcmVudC8qLCBub2RlX3Bvc2l0aW9uLCBtb3JlKi8pID0+IHtcbiAgICAgICAgICBpZiAob3BlcmF0aW9uID09PSAnbW92ZV9ub2RlJykge1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ21hdGVyaWFsJykge1xuICAgICAgICAgICAgICByZXR1cm4gbm9kZV9wYXJlbnQudHlwZSA9PT0gJ3RlbXBsYXRlUmVnaW9uJyB8fCBub2RlX3BhcmVudC50eXBlID09PSAnY29udGVudFRlbXBsYXRlUmVnaW9uJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS50eXBlID09PSAndGVtcGxhdGVSZWdpb24nIHx8IG5vZGUudHlwZSA9PT0gJ2NvbnRlbnRUZW1wbGF0ZVJlZ2lvbicpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5vZGVfcGFyZW50LnR5cGUgPT09ICdkZWZhdWx0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHRoaXMucGFnZVN0cnVjdHVyZSxcbiAgICAgICAgdGhlbWVzOiB7XG4gICAgICAgICAgbmFtZTogJ2RlZmF1bHQtZGFyaycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcGx1Z2luczogW1xuICAgICAgICAndHlwZXMnLFxuICAgICAgICAnd2hvbGVyb3cnLFxuICAgICAgICAnZG5kJyxcbiAgICAgIF0sXG4gICAgICBkbmQ6IHtcbiAgICAgICAgb3Blbl90aW1lb3V0OiAyMDAsXG4gICAgICAgIGxhcmdlX2Ryb3BfdGFyZ2V0OiB0cnVlLFxuICAgICAgICBsYXJnZV9kcmFnX3RhcmdldDogdHJ1ZSxcbiAgICAgICAgY2hlY2tfd2hpbGVfZHJhZ2dpbmc6IHRydWUsXG4gICAgICAgIGNvcHk6IGZhbHNlLFxuICAgICAgICBpc19kcmFnZ2FibGU6IGZ1bmN0aW9uKG5vZGVzKSB7XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzWzBdIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdtYXRlcmlhbCdcbiAgICAgICAgICAgIHx8IG5vZGUudHlwZSA9PT0gJ2NvbnRlbnRUZW1wbGF0ZVJlZ2lvbidcbiAgICAgICAgICAgIHx8IG5vZGUudHlwZSA9PT0gJ3RlbXBsYXRlUmVnaW9uJztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIGxheW91dDoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1jb2x1bW5zJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtdGgnLFxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVJlZ2lvbjoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1mb2xkZXItbycsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnRUZW1wbGF0ZVJlZ2lvbjoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1mb2xkZXInLFxuICAgICAgICB9LFxuICAgICAgICBtYXRlcmlhbDoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1wdXp6bGUtcGllY2UnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuanN0cmVlT2JqID0gdGhpcy4kcGFnZVN0cnVjdHVyZS5qc3RyZWUoKTtcblxuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmVcbiAgICAgIC5vbignbG9hZGVkLmpzdHJlZScsICgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlU3RydWN0dXJlSnNvbigpO1xuXG4gICAgICAgIGxldCBpc0NvbnRlbnRSZWdpb25Gb3VuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVbMV0uY2hpbGRyZW4uZm9yRWFjaCgocmVnaW9uKSA9PiB7XG4gICAgICAgICAgaWYgKHJlZ2lvbi5kYXRhLmVudGl0eURlcGVuZGVudCAmJiBpc0NvbnRlbnRSZWdpb25Gb3VuZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlzQ29udGVudFJlZ2lvbkZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuanN0cmVlT2JqLnNlbGVjdF9ub2RlKHJlZ2lvbi5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pXG5cbiAgICAgIC5vbignbW92ZV9ub2RlLmpzdHJlZScsICgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlU3RydWN0dXJlSnNvbigpO1xuICAgICAgICB0aGlzLnRhcmdldC5Gcm9udGVuZE1vbnN0ZXIuVmlzdWFsRnJhbWUucHJldmlldygpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5jb250cm9sQnV0dG9ucyA9IHtcbiAgICAgIG1hdGVyaWFsOiBuZXcgTWF0ZXJpYWxDb250cm9scyh0aGlzKSxcblxuICAgIH07XG4gICAgY29uc29sZS5sb2codGhpcy5jb250cm9sQnV0dG9ucyk7XG5cbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlLm9uKCdzZWxlY3Rfbm9kZS5qc3RyZWUnLCAoZSwgb2JqKSA9PiB7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSBvYmoubm9kZS50eXBlO1xuICAgICAgdGhpcy5zZWxlY3RlZEVudGl0eSA9IG9iai5ub2RlLmRhdGEuZW50aXR5VHlwZSB8fCBudWxsO1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21hdGVyaWFsJzpcbiAgICAgICAgICBjb25zdCAkYW5jaG9yID0gJChgIyR7b2JqLm5vZGUuaWR9YCk7XG4gICAgICAgICAgJGFuY2hvci5wcmVwZW5kKHRoaXMuY29udHJvbEJ1dHRvbnNbdHlwZV0uY29udHJvbEJ1dHRvbnMpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0TWF0ZXJpYWwob2JqLm5vZGUuZGF0YS5tYXRlcmlhbEluZGV4KTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUmVnaW9uS2V5ID0gb2JqLm5vZGUuZGF0YS5yZWdpb25LZXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RlbXBsYXRlUmVnaW9uJzpcbiAgICAgICAgY2FzZSAnY29udGVudFRlbXBsYXRlUmVnaW9uJzpcbiAgICAgICAgICB0aGlzLnRhcmdldCQuc21vb3RoU2Nyb2xsKHtcbiAgICAgICAgICAgIHNjcm9sbFRhcmdldDogdGhpcy50YXJnZXQkKGBbZGF0YS1yZWdpb24ta2V5PVwiJHtvYmoubm9kZS5kYXRhLnJlZ2lvbktleX1cIl1gKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUmVnaW9uS2V5ID0gb2JqLm5vZGUuZGF0YS5yZWdpb25LZXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJlZ2lvbktleSA9IG51bGw7XG4gICAgICAgICAgY29uc29sZS5sb2cob2JqLm5vZGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0TWF0ZXJpYWwoaW5kZXgpIHtcbiAgICBjb25zdCAkdGFyZ2V0TWF0ZXJpYWwgPSB0aGlzLnRhcmdldCQoYFtkYXRhLW1hdGVyaWFsLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcbiAgICAkKCcubS1tb25zdGVyLW1hdGVyaWFsX3NlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ20tbW9uc3Rlci1tYXRlcmlhbF9zZWxlY3RlZCcpO1xuICAgIHRoaXMudGFyZ2V0JC5zbW9vdGhTY3JvbGwoe1xuICAgICAgc2Nyb2xsVGFyZ2V0OiAkdGFyZ2V0TWF0ZXJpYWwsXG4gICAgfSk7XG4gICAgLy8gcmVzdGFydCBhbmltYXRpb24gbWFnaWMuIHNlZSBodHRwczovL2Nzcy10cmlja3MuY29tL3Jlc3RhcnQtY3NzLWFuaW1hdGlvbi9cbiAgICAkdGFyZ2V0TWF0ZXJpYWxcbiAgICAgIC5yZW1vdmVDbGFzcygnbS1tb25zdGVyLW1hdGVyaWFsX3NlbGVjdGVkJyk7XG5cbiAgICB2b2lkICR0YXJnZXRNYXRlcmlhbFswXS5vZmZzZXRXaWR0aDtcblxuICAgICR0YXJnZXRNYXRlcmlhbFxuICAgICAgLmFkZENsYXNzKCdtLW1vbnN0ZXItbWF0ZXJpYWxfc2VsZWN0ZWQnKTtcbiAgfVxuXG4gIHVwZGF0ZVBhZ2VTdHJ1Y3R1cmVKc29uKCkge1xuICAgIHRoaXMucGFnZVN0cnVjdHVyZUpzb24gPSB0aGlzLmpzdHJlZU9iai5nZXRfanNvbih0aGlzLiRwYWdlU3RydWN0dXJlLCB7XG4gICAgICBub19zdGF0ZTogdHJ1ZSxcbiAgICAgIG5vX2lkOiB0cnVlLFxuICAgICAgbm9fbGlfYXR0cjogdHJ1ZSxcbiAgICAgIG5vX2FfYXR0cjogdHJ1ZSxcbiAgICB9KTtcbiAgICB0aGlzLnRhcmdldC5Gcm9udGVuZE1vbnN0ZXIuVmlzdWFsRnJhbWUucGFnZVN0cnVjdHVyZUpzb24gPSB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uO1xuICB9XG5cblxuXG5cblxufVxuZXhwb3J0IGRlZmF1bHQgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9QYWdlU3RydWN0dXJlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcblxufVxuZXhwb3J0IGRlZmF1bHQgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHVuaXFpZCAocHJlZml4LCBtb3JlRW50cm9weSkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3VuaXFpZC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICByZXZpc2VkIGJ5OiBLYW5rcmVsdW5lIChodHRwOi8vd3d3LndlYmZha3RvcnkuaW5mby8pXG4gIC8vICAgICAgbm90ZSAxOiBVc2VzIGFuIGludGVybmFsIGNvdW50ZXIgKGluIGxvY3V0dXMgZ2xvYmFsKSB0byBhdm9pZCBjb2xsaXNpb25cbiAgLy8gICBleGFtcGxlIDE6IHZhciAkaWQgPSB1bmlxaWQoKVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRyZXN1bHQgPSAkaWQubGVuZ3RoID09PSAxM1xuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogdmFyICRpZCA9IHVuaXFpZCgnZm9vJylcbiAgLy8gICBleGFtcGxlIDI6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gKDEzICsgJ2ZvbycubGVuZ3RoKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMzogdmFyICRpZCA9IHVuaXFpZCgnYmFyJywgdHJ1ZSlcbiAgLy8gICBleGFtcGxlIDM6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gKDIzICsgJ2JhcicubGVuZ3RoKVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuXG4gIGlmICh0eXBlb2YgcHJlZml4ID09PSAndW5kZWZpbmVkJykge1xuICAgIHByZWZpeCA9ICcnXG4gIH1cblxuICB2YXIgcmV0SWRcbiAgdmFyIF9mb3JtYXRTZWVkID0gZnVuY3Rpb24gKHNlZWQsIHJlcVdpZHRoKSB7XG4gICAgc2VlZCA9IHBhcnNlSW50KHNlZWQsIDEwKS50b1N0cmluZygxNikgLy8gdG8gaGV4IHN0clxuICAgIGlmIChyZXFXaWR0aCA8IHNlZWQubGVuZ3RoKSB7XG4gICAgICAvLyBzbyBsb25nIHdlIHNwbGl0XG4gICAgICByZXR1cm4gc2VlZC5zbGljZShzZWVkLmxlbmd0aCAtIHJlcVdpZHRoKVxuICAgIH1cbiAgICBpZiAocmVxV2lkdGggPiBzZWVkLmxlbmd0aCkge1xuICAgICAgLy8gc28gc2hvcnQgd2UgcGFkXG4gICAgICByZXR1cm4gQXJyYXkoMSArIChyZXFXaWR0aCAtIHNlZWQubGVuZ3RoKSkuam9pbignMCcpICsgc2VlZFxuICAgIH1cbiAgICByZXR1cm4gc2VlZFxuICB9XG5cbiAgdmFyICRnbG9iYWwgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBHTE9CQUwpXG4gICRnbG9iYWwuJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzIHx8IHt9XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXNcbiAgJGxvY3V0dXMucGhwID0gJGxvY3V0dXMucGhwIHx8IHt9XG5cbiAgaWYgKCEkbG9jdXR1cy5waHAudW5pcWlkU2VlZCkge1xuICAgIC8vIGluaXQgc2VlZCB3aXRoIGJpZyByYW5kb20gaW50XG4gICAgJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAweDc1YmNkMTUpXG4gIH1cbiAgJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQrK1xuXG4gIC8vIHN0YXJ0IHdpdGggcHJlZml4LCBhZGQgY3VycmVudCBtaWxsaXNlY29uZHMgaGV4IHN0cmluZ1xuICByZXRJZCA9IHByZWZpeFxuICByZXRJZCArPSBfZm9ybWF0U2VlZChwYXJzZUludChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDAsIDEwKSwgOClcbiAgLy8gYWRkIHNlZWQgaGV4IHN0cmluZ1xuICByZXRJZCArPSBfZm9ybWF0U2VlZCgkbG9jdXR1cy5waHAudW5pcWlkU2VlZCwgNSlcbiAgaWYgKG1vcmVFbnRyb3B5KSB7XG4gICAgLy8gZm9yIG1vcmUgZW50cm9weSB3ZSBhZGQgYSBmbG9hdCBsb3dlciB0byAxMFxuICAgIHJldElkICs9IChNYXRoLnJhbmRvbSgpICogMTApLnRvRml4ZWQoOCkudG9TdHJpbmcoKVxuICB9XG5cbiAgcmV0dXJuIHJldElkXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy91bmlxaWQuanNcbiAqKi8iLCJjbGFzcyBEYXRhUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvcihjbGFzc05hbWUsIHByb3ZpZGVkS2V5cykge1xuICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIHRoaXMucHJvdmlkZWRLZXlzID0gcHJvdmlkZWRLZXlzO1xuICAgIHRoaXMuYXNzb2NpYXRpb25zID0ge307XG4gICAgdGhpcy5hc3NvY2lhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7RWRpdGFibGV9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGVkaXRhYmxlKCkge1xuICAgIHJldHVybiB3aW5kb3cuRnJvbnRlbmRNb25zdGVyLlZpc3VhbEZyYW1lLmVkaXRhYmxlO1xuICB9XG5cbiAgYXNzb2NpYXRlKCkge1xuICAgIHRoaXMuYXNzb2NpYXRpb25zID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5wcm92aWRlZEtleXMpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMucHJvdmlkZWRLZXlzW3JlZ2lvbktleV07XG4gICAgICBjb25zdCAkcmVnaW9uID0gJChgW2RhdGEtcmVnaW9uLWtleT1cIiR7cmVnaW9uS2V5fVwiXWApLmZpcnN0KCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgJWNSZWdpb246ICR7cmVnaW9uS2V5fWAsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogYm9sZDsgYmFja2dyb3VuZDogIzMzMycpO1xuICAgICAgLy8gY29uc29sZS5sb2cocmVnaW9uKTtcbiAgICAgIGNvbnN0IG1hdGVyaWFscyA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMocmVnaW9uKS5mb3JFYWNoKG1hdGVyaWFsS2V5ID0+IHtcbiAgICAgICAgY29uc3QgZGF0YUtleXMgPSByZWdpb25bbWF0ZXJpYWxLZXldO1xuICAgICAgICBjb25zdCAkbWF0ZXJpYWwgPSAkcmVnaW9uLmZpbmQoYFtkYXRhLW1hdGVyaWFsLWluZGV4PVwiJHttYXRlcmlhbEtleX1cIl1gKS5maXJzdCgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgJWNNYXRlcmlhbDogJHttYXRlcmlhbEtleX1gLCAnY29sb3I6ICNmZmY7IGZvbnQtd2VpZ2h0OiBib2xkOyBiYWNrZ3JvdW5kOiAjNjlmJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCRtYXRlcmlhbCk7XG4gICAgICAgIGlmICgkbWF0ZXJpYWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG1hdGVyaWFsc1ttYXRlcmlhbEtleV0gPSB7XG4gICAgICAgICAgZGF0YUtleXMsXG4gICAgICAgICAgJG1hdGVyaWFsLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBtYXRlcmlhbEVkaXRhYmxlS2V5cyA9ICRtYXRlcmlhbC5kYXRhKCdlZGl0YWJsZUtleXMnKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplTWF0ZXJpYWxFZGl0KG1hdGVyaWFsRWRpdGFibGVLZXlzLCAkbWF0ZXJpYWwsIGRhdGFLZXlzKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hc3NvY2lhdGlvbnNbcmVnaW9uS2V5XSA9IHtcbiAgICAgICAgJHJlZ2lvbixcbiAgICAgICAgbWF0ZXJpYWxzLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpemVNYXRlcmlhbEVkaXQobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRyb290LCBkYXRhS2V5cywgcHJlZml4ID0gJycpIHtcbiAgICBkYXRhS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBvYmogPSBtYXRlcmlhbEVkaXRhYmxlS2V5c1trZXldIHx8ICdOT19TVUNIX0tFWSc7XG4gICAgICBpZiAob2JqID09PSAnTk9fU1VDSF9LRVknKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvYmogPT09IE9iamVjdChvYmopKSB7XG4gICAgICAgIC8vIGl0J3MgcmVjdXJzaXZlXG4gICAgICAgIC8vIGZpcnN0IC0gZmluZCBhbGwgYmxvY2tzXG4gICAgICAgIGNvbnN0ICRibG9ja3MgPSAkcm9vdC5maW5kKGBbZGF0YS1yZWN1cnNpdmUtaXRlbT1cIiR7a2V5fVwiXWApO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICAkYmxvY2tzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYCVjIFJlY3Vyc2l2ZSBpdGVtICR7a2V5fSAjJHtjb3VudGVyfWAsICdiYWNrZ3JvdW5kOiAjMjIyOyBjb2xvcjogI2JhZGE1NScpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAgIHRoYXQuaW5pdGlhbGl6ZU1hdGVyaWFsRWRpdChvYmosICR0aGlzLCBPYmplY3Qua2V5cyhvYmopLCAnaXRlbS4nKTtcbiAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaXQncyBwbGFpbiBmaWVsZFxuICAgICAgICBjb25zdCAkbm9kZSA9ICRyb290LmZpbmQoYFtkYXRhLWVkaXRhYmxlLWtleT1cIiR7cHJlZml4fSR7a2V5fVwiXWApLmZpcnN0KCk7XG4gICAgICAgIGlmICgkbm9kZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgRGF0YVByb3ZpZGVyLmVkaXRhYmxlLmluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAlYyBQbGFpbiBmaWVsZCBlZGl0YWJsZSAke3ByZWZpeH0ke2tleX1gLCAnYmFja2dyb3VuZDogIzIyMjsgY29sb3I6ICNiYWRhNTUnKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJG5vZGVbMF0ub3V0ZXJIVE1MKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgc2VyaWFsaXplS2V5cygpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmFzc29jaWF0aW9ucykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgY29uc3QgcmVnaW9uID0gdGhpcy5hc3NvY2lhdGlvbnNbcmVnaW9uS2V5XTtcbiAgICAgIGNvbnN0ICRyZWdpb24gPSByZWdpb24uJHJlZ2lvbjtcbiAgICAgIHJlc3VsdFtyZWdpb25LZXldID0ge307XG4gICAgICBPYmplY3Qua2V5cyhyZWdpb24ubWF0ZXJpYWxzKS5mb3JFYWNoKG1hdGVyaWFsS2V5ID0+IHtcbiAgICAgICAgY29uc3QgZGF0YUtleXMgPSByZWdpb24ubWF0ZXJpYWxzW21hdGVyaWFsS2V5XS5kYXRhS2V5cztcbiAgICAgICAgY29uc3QgJG1hdGVyaWFsID0gcmVnaW9uLm1hdGVyaWFsc1ttYXRlcmlhbEtleV0uJG1hdGVyaWFsO1xuICAgICAgICByZXN1bHRbcmVnaW9uS2V5XVttYXRlcmlhbEtleV0gPSB0aGlzLnNlcmlhbGl6ZU1hdGVyaWFsKFxuICAgICAgICAgIHJlZ2lvbktleSxcbiAgICAgICAgICBtYXRlcmlhbEtleSxcbiAgICAgICAgICBkYXRhS2V5cyxcbiAgICAgICAgICAkcmVnaW9uLFxuICAgICAgICAgICRtYXRlcmlhbFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgY2xhc3M6IHRoaXMuY2xhc3NOYW1lLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuZmlsbENvbmZpZyhkYXRhKTtcbiAgfVxuXG4gIGZpbGxDb25maWcoZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgc2VyaWFsaXplTWF0ZXJpYWwocmVnaW9uS2V5LCBtYXRlcmlhbEtleSwgZGF0YUtleXMsICRyZWdpb24sICRtYXRlcmlhbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFQcm92aWRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlci5qc1xuICoqLyIsImltcG9ydCBTdGF0aWNDb250ZW50IGZyb20gJy4vcHJvdmlkZXJzL1N0YXRpY0NvbnRlbnQnO1xuXG5jbGFzcyBEYXRhUHJvdmlkZXJGYWN0b3J5IHtcbiAgc3RhdGljIGZhY3RvcnkocHJvdmlkZXJEZWNsLCBwcm92aWRlZEtleXMpIHtcbiAgICBsZXQgcHJvdmlkZXIgPSBudWxsO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHByb3ZpZGVyRGVjbC5jbGFzc05hbWVcbiAgICAgIHx8ICdEb3RQbGFudFxcXFxNb25zdGVyXFxcXERhdGFFbnRpdHlcXFxcU3RhdGljQ29udGVudFByb3ZpZGVyJztcbiAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuICAgICAgY2FzZSAnRG90UGxhbnRcXFxcTW9uc3RlclxcXFxEYXRhRW50aXR5XFxcXFN0YXRpY0NvbnRlbnRQcm92aWRlcic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBwcm92aWRlciA9IG5ldyBTdGF0aWNDb250ZW50KHByb3ZpZGVkS2V5cyk7XG4gICAgfVxuICAgIHJldHVybiBwcm92aWRlcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhUHJvdmlkZXJGYWN0b3J5O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRGF0YVByb3ZpZGVyRmFjdG9yeS5qc1xuICoqLyIsImltcG9ydCBhbGxFZGl0YWJsZXMgZnJvbSAnLi9lZGl0YWJsZXMvYWxsJztcblxuY2xhc3MgRWRpdGFibGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVkaXRhYmxlc0J5VHlwZSA9IHt9O1xuICAgIC8vIGluaXRpYWxpemUgYmFzZSBidWlsZC1pbiBlZGl0YWJsZXNcbiAgICBhbGxFZGl0YWJsZXMoKTtcbiAgICB0aGlzLmVkaXRhYmxlc0J5VHlwZSA9IHdpbmRvdy5NT05TVEVSX0VESVRBQkxFUztcbiAgfVxuXG4gIHNlcmlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3QgZWRpdGFibGUgPSAkbm9kZS5kYXRhKCdlZGl0YWJsZVBhcmFtcycpO1xuICAgIGlmICh0eXBlb2YoZWRpdGFibGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgdHlwZSA9IGVkaXRhYmxlLmhhc093blByb3BlcnR5KCd0eXBlJykgPyBlZGl0YWJsZS50eXBlIDogJ3N0cmluZyc7XG4gICAgaWYgKHRoaXMuZWRpdGFibGVzQnlUeXBlLmhhc093blByb3BlcnR5KHR5cGUpID09PSBmYWxzZSkge1xuICAgICAgdHlwZSA9ICdzdHJpbmcnO1xuICAgIH1cblxuICAgIGNvbnN0IGV4cG9ydFZhcmlhYmxlID0gZWRpdGFibGUuaGFzT3duUHJvcGVydHkoJ3RhcmdldCcpID8gZWRpdGFibGUudGFyZ2V0IDogJ2RhdGEnO1xuXG4gICAgcmV0dXJuIHRoaXMuZWRpdGFibGVzQnlUeXBlW3R5cGVdLnNlcmlhbGl6ZU5vZGUoJG5vZGUsIGV4cG9ydFZhcmlhYmxlKTtcbiAgfVxuXG4gIGluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSkge1xuICAgIGNvbnN0IHR5cGUgPSAkbm9kZS5kYXRhKCdlZGl0YWJsZS10eXBlJykgfHwgJ3VuZWRpdGFibGUnO1xuICAgIGlmICh0eXBlID09PSAndW5lZGl0YWJsZScpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGVkaXRhYmxlID0gdGhpcy5lZGl0YWJsZXNCeVR5cGVbdHlwZV0gfHwgdGhpcy5lZGl0YWJsZXNCeVR5cGUuc3RyaW5nO1xuICAgIHJldHVybiBlZGl0YWJsZS5pbml0aWFsaXplRWRpdGFibGUoJG5vZGUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRhYmxlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRWRpdGFibGUuanNcbiAqKi8iLCJjbGFzcyBIYXNoQXBpIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5mdW5jdGlvbkNhbGxzID0ge307XG5cbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaGFzaCkge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGRvY3VtZW50LmxvY2F0aW9uLmhhc2gubWF0Y2goLyNoYXNoQXBpOiguKj8pOlxcL2hhc2hBcGkvKTtcbiAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGNvbnN0IGZ1bmN0aW9uQ2FsbHMgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGZ1bmN0aW9uQ2FsbHMpIHtcbiAgICAgICAgICBpZiAoaXRlbS5mdW5jKSB7XG4gICAgICAgICAgICB0aGlzLmZ1bmN0aW9uQ2FsbHNbaXRlbS5mdW5jXSA9IGl0ZW0uYXJncyB8fCB7fTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzaG91bGRDYWxsKGZ1bmMpIHtcbiAgICByZXR1cm4gdGhpcy5mdW5jdGlvbkNhbGxzW2Z1bmNdIHx8IGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhhc2hBcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9IYXNoQXBpLmpzXG4gKiovIiwiaW1wb3J0IEZyYW1lQXBpIGZyb20gJy4vRnJhbWVBcGknO1xuaW1wb3J0IHVuaXF1ZUlkIGZyb20gJy4vLi4vdW5pcWlkJztcbmltcG9ydCBEYXRhUHJvdmlkZXJGYWN0b3J5IGZyb20gJy4vRGF0YVByb3ZpZGVyRmFjdG9yeSc7XG5pbXBvcnQgRWRpdGFibGUgZnJvbSAnLi9FZGl0YWJsZSc7XG5cbmNsYXNzIFZpc3VhbEZyYW1lXG57XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFyYW1zKCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIEZyYW1lQXBpLmJpbmRNZXNzYWdlTGlzdGVuZXIodGhpcyk7XG4gICAgdGhpcy5wYWdlU3RydWN0dXJlSnNvbkRhdGEgPSBudWxsO1xuICAgIC8qIGdsb2JhbCB3aW5kb3c6ZmFsc2UgKi9cbiAgICB0aGlzLnBhcmVudFdpbmRvdyA9IHdpbmRvdy5wYXJlbnQ7XG4gICAgLyoqIEB2YXIgRnJvbnRlbmRNb25zdGVyICovXG4gICAgdGhpcy5wYXJlbnRNb25zdGVyID0gdGhpcy5wYXJlbnRXaW5kb3cuRnJvbnRlbmRNb25zdGVyO1xuICAgIHRoaXMucGFyZW50QnVpbGRlciA9IHRoaXMucGFyZW50TW9uc3Rlci5idWlsZGVyO1xuICAgIHRoaXMuY3VycmVudE1vbnN0ZXJDb250ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5lZGl0YWJsZSA9IG5ldyBFZGl0YWJsZSgpO1xuICAgIC8vIHRoaXMubWFrZUl0TW92ZSgpO1xuICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVIYW5kbGVycygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgJCgoKSA9PiB7XG4gICAgICB0aGlzLnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAgIHRoaXMuaW5pdFByb3ZpZGVycygpO1xuICAgIH0pO1xuICAgIHRoaXMuTW9uc3RlckVkaXREYXRhID0gd2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEE7XG4gIH1cblxuICBpbml0UHJvdmlkZXJzKCkge1xuICAgIHRoaXMucHJvdmlkZXJzID0ge1xuICAgICAgbGF5b3V0OiB0aGlzLmdldFByb3ZpZGVycyh0aGlzLk1vbnN0ZXJFZGl0RGF0YS5sYXlvdXQpLFxuICAgICAgdGVtcGxhdGU6IHRoaXMuZ2V0UHJvdmlkZXJzKHRoaXMuTW9uc3RlckVkaXREYXRhLnRlbXBsYXRlKSxcbiAgICAgIGVudGl0eTogdGhpcy5nZXRQcm92aWRlcnModGhpcy5Nb25zdGVyRWRpdERhdGEuZW50aXR5KSxcbiAgICB9O1xuICB9XG5cbiAgc2V0IHBhZ2VTdHJ1Y3R1cmVKc29uKHZhbHVlKSB7XG4gICAgdGhpcy5wYWdlU3RydWN0dXJlSnNvbkRhdGEgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBwYWdlU3RydWN0dXJlSnNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlU3RydWN0dXJlSnNvbkRhdGE7XG4gIH1cblxuICBnZXRQcm92aWRlcnMoYXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXMoYXJyLnByb3ZpZGVycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3QgcHJvdmlkZXJEZWNsID0gYXJyLnByb3ZpZGVyc1trZXldO1xuICAgICAgcmVzdWx0W2tleV0gPSBEYXRhUHJvdmlkZXJGYWN0b3J5LmZhY3RvcnkoXG4gICAgICAgIHByb3ZpZGVyRGVjbCxcbiAgICAgICAgYXJyLnByb3ZpZGVkS2V5c1trZXldIHx8IHt9XG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXQgJG1vbnN0ZXJDb250ZW50KCkge1xuICAgIGlmICh0aGlzLiRtb25zdGVyQ29udGVudENhY2hlKSB7XG4gICAgICByZXR1cm4gdGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZTtcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpO1xuICAgIHJldHVybiB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlO1xuICB9XG5cbiAgcmVmcmVzaE1vbnN0ZXJDb250ZW50Q2FjaGUoKSB7XG4gICAgdGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZSA9IHt9O1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICQodGhpcy5zZXR0aW5nc1snbW9uc3Rlci1jb250ZW50LXNlbGVjdG9yJ10pLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGlmICghdGhhdC5jdXJyZW50TW9uc3RlckNvbnRlbnQpIHtcbiAgICAgICAgdGhhdC5jdXJyZW50TW9uc3RlckNvbnRlbnQgPSAkKHRoaXMpLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpO1xuICAgICAgfVxuICAgICAgdGhhdC4kbW9uc3RlckNvbnRlbnRDYWNoZVskKHRoaXMpLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpXSA9ICQodGhpcyk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVIYW5kbGVycygpIHtcbiAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCAmJiB0aGlzLiRoYW5kbGVycykge1xuICAgICAgdGhpcy4kaGFuZGxlcnMuY3NzKFxuICAgICAgICAndG9wJyxcbiAgICAgICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5wb3NpdGlvbigpLnRvcFxuICAgICAgICAgICsgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5oZWlnaHQoKVxuICAgICAgICAgIC0gdGhpcy4kaGFuZGxlcnMuaGVpZ2h0KClcbiAgICAgICk7XG4gICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0TWF0ZXJpYWwoJG1hdGVyaWFsKSB7XG4gICAgaWYgKHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwgPT09ICRtYXRlcmlhbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICB9XG4gICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCA9ICRtYXRlcmlhbDtcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgdGhpcy4kaGFuZGxlcnMuc2hvdygpO1xuICB9XG5cbiAgc2VyaWFsaXplQ29udGVudChjYWxsYmFjaykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuJG1vbnN0ZXJDb250ZW50KS5mb3JFYWNoKHVuaXF1ZUNvbnRlbnRJZCA9PiB7XG4gICAgICBjb25zdCAkbW9uc3RlciA9IHRoaXMuJG1vbnN0ZXJDb250ZW50W3VuaXF1ZUNvbnRlbnRJZF07XG4gICAgICByZXN1bHRbJG1vbnN0ZXIuZGF0YSgndW5pcXVlQ29udGVudElkJyldID0gdGhhdC5zZXJpYWxpemVVbmlxdWVDb250ZW50KCRtb25zdGVyKTtcbiAgICB9KTtcbiAgICB0aGlzLnNlbmRUb0J1aWxkZXIoY2FsbGJhY2ssIFtyZXN1bHRdKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZVVuaXF1ZUNvbnRlbnQoJG1vbnN0ZXJDb250ZW50KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgcmVzdWx0LnVuaXF1ZUNvbnRlbnRJZCA9ICRtb25zdGVyQ29udGVudC5kYXRhKCd1bmlxdWVDb250ZW50SWQnKTtcbiAgICByZXN1bHQubWF0ZXJpYWxzID0ge307XG4gICAgJG1vbnN0ZXJDb250ZW50LmZpbmQoJ1tkYXRhLWlzLW1hdGVyaWFsPVxcJzFcXCddJykuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgY29uc3QgbWF0ZXJpYWwgPSB7fTtcbiAgICAgIG1hdGVyaWFsLmJsb2NrID0gJCh0aGlzKS5kYXRhKCdtYXRlcmlhbEJsb2NrJyk7XG4gICAgICByZXN1bHQubWF0ZXJpYWxzWyQodGhpcykuZGF0YSgnbWF0ZXJpYWxJbmRleCcpXSA9IG1hdGVyaWFsO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBWaXN1YWxGcmFtZSBzZXR0aW5ncy5cbiAgICogVXNlcyBWaXN1YWxGcmFtZVNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAqL1xuICBwYXJhbXMoKSB7XG4gICAgY29uc3QgdXNlclNldHRpbmdzID0gd2luZG93LlZpc3VhbEZyYW1lU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICAnbW9uc3Rlci1jb250ZW50LXNlbGVjdG9yJzogJy5tLW1vbnN0ZXItY29udGVudF9fY29udGVudCcsXG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyh1c2VyU2V0dGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICB9KTtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIH1cblxuICBzZW5kVG9CdWlsZGVyKGZ1bmMsIGFyZ3MpIHtcbiAgICBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLnBhcmVudFdpbmRvdywgZnVuYywgYXJncyk7XG4gIH1cblxuICBzdGF0aWMgZm9ybVN1Ym1pdChkYXRhKSB7XG4gICAgY29uc3QgJGZvcm0gPSAkKCc8Zm9ybSBtZXRob2Q9XCJQT1NUXCI+PC9mb3JtPicpO1xuICAgIGNvbnN0ICRpbnB1dCA9ICQoJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9fanNvblwiPicpO1xuICAgIGNvbnN0ICRjc3JmID0gJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIj4nKTtcblxuICAgICRjc3JmXG4gICAgICAuYXR0cignbmFtZScsICQoJ21ldGFbbmFtZT1jc3JmLXBhcmFtXScpLmF0dHIoJ2NvbnRlbnQnKSlcbiAgICAgIC52YWwoJCgnbWV0YVtuYW1lPWNzcmYtdG9rZW5dJykuYXR0cignY29udGVudCcpKVxuICAgICAgLmFwcGVuZFRvKCRmb3JtKTtcblxuICAgICRpbnB1dFxuICAgICAgLnZhbChKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICAgIC5hcHBlbmRUbygkZm9ybSk7XG5cbiAgICAkZm9ybVswXS5zdWJtaXQoKTtcbiAgfVxuXG4gIG5ld0Jsb2NrKG1hdGVyaWFsTmFtZSwgc2VsZWN0ZWRFbnRpdHksIHJlZ2lvbk5hbWUpIHtcbiAgICAvLyBAdG9kbyBBZGQgbG9hZGVyIGhlcmUgYXMgd2UgYXJlIHVzaW5nIGZvcm0gcG9zdCAhXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSB1bmlxdWVJZCgnbWF0Jyk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuaXRlcmF0ZVRlbXBsYXRlVHlwZSh0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uKTtcbiAgICBpZiAoc2VsZWN0ZWRFbnRpdHkgPT09ICdlbnRpdHknKSB7XG4gICAgICBkYXRhLmVudGl0eS5tYXRlcmlhbHNCeVJlZ2lvbkRlY2xbcmVnaW9uTmFtZV0uZGVjbFtyYW5kb21JbmRleF0gPSB7XG4gICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbE5hbWUsXG4gICAgICB9O1xuICAgICAgZGF0YS5lbnRpdHkubWF0ZXJpYWxzQnlSZWdpb25EZWNsW3JlZ2lvbk5hbWVdLm1hdGVyaWFsc09yZGVyLnB1c2gocmFuZG9tSW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhW3NlbGVjdGVkRW50aXR5XS50ZW1wbGF0ZVJlZ2lvbnNbcmVnaW9uTmFtZV0ubWF0ZXJpYWxzRGVjbHMuZGVjbFtyYW5kb21JbmRleF0gPSB7XG4gICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbE5hbWUsXG4gICAgICB9O1xuICAgICAgZGF0YVtzZWxlY3RlZEVudGl0eV0udGVtcGxhdGVSZWdpb25zW3JlZ2lvbk5hbWVdLm1hdGVyaWFsc0RlY2xzLm1hdGVyaWFsc09yZGVyLnB1c2gocmFuZG9tSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcmV2aWV3KGRhdGEpO1xuICB9XG5cbiAgcHJldmlldyhkYXRhID0gbnVsbCkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhIHx8IHRoaXMuaXRlcmF0ZVRlbXBsYXRlVHlwZSh0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uKTtcbiAgICBuZXdEYXRhLmFjdGlvbiA9ICdwcmV2aWV3JztcbiAgICBWaXN1YWxGcmFtZS5mb3JtU3VibWl0KG5ld0RhdGEpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuaXRlcmF0ZVRlbXBsYXRlVHlwZSh0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uKTtcbiAgICBkYXRhLmFjdGlvbiA9ICdzYXZlJztcbiAgICBWaXN1YWxGcmFtZS5mb3JtU3VibWl0KGRhdGEpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNlcmlhbGl6ZURlYnVnKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLml0ZXJhdGVUZW1wbGF0ZVR5cGUodGhpcy5wYWdlU3RydWN0dXJlSnNvbik7XG4gICAgY29uc3QgJG9iaiA9ICQoYDxkaXYgY2xhc3M9XCJtLWpzb24tZWRpdG9yXCI+PC9kaXY+YCk7XG4gICAgdGhpcy5wYXJlbnRXaW5kb3cuRGlhbG9nSGVscGVyXG4gICAgICAuYnVpbGRlckRpYWxvZygpXG4gICAgICAuaHRtbCgkb2JqKVxuICAgICAgLmF1dG9EZXN0cm95KClcbiAgICAgIC5zaG93KCk7XG4gICAgY29uc3QgZWRpdG9yID0gbmV3IEpTT05FZGl0b3IoJG9ialswXSwge1xuICAgICAgbW9kZTogJ3RyZWUnXG4gICAgfSk7XG4gICAgZWRpdG9yLnNldChkYXRhKTtcbiAgfVxuXG4gIGl0ZXJhdGVUZW1wbGF0ZVR5cGUoYXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgZW50aXR5OiB7XG4gICAgICAgIG1hdGVyaWFsc0J5UmVnaW9uRGVjbDoge30sXG4gICAgICAgIHByb3ZpZGVyczoge30sXG4gICAgICB9LFxuICAgIH07XG4gICAgYXJyLmZvckVhY2gob2JqID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IG9iai5kYXRhLmlkO1xuICAgICAgY29uc3QgcmVnaW9uc1Jlc3VsdCA9IFZpc3VhbEZyYW1lLml0ZXJhdGVUZW1wbGF0ZVJlZ2lvbnMob2JqLmNoaWxkcmVuKTtcbiAgICAgIC8vIGxheW91dCBvciB0ZW1wbGF0ZVxuICAgICAgcmVzdWx0W2tleV0gPSB7XG4gICAgICAgIHRlbXBsYXRlUmVnaW9uczogcmVnaW9uc1Jlc3VsdC50ZW1wbGF0ZVJlZ2lvbnMsXG4gICAgICAgIHRlbXBsYXRlUmVnaW9uc09yZGVyOiByZWdpb25zUmVzdWx0LnRlbXBsYXRlUmVnaW9uc09yZGVyLFxuICAgICAgICB0ZW1wbGF0ZUlkOiBvYmouZGF0YS50ZW1wbGF0ZUlkLFxuICAgICAgICBwcm92aWRlcnM6IHt9LFxuICAgICAgfTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhyZWdpb25zUmVzdWx0LmVudGl0eU1hdGVyaWFscykubGVuZ3RoID4gMCkge1xuICAgICAgICBPYmplY3Qua2V5cyhyZWdpb25zUmVzdWx0LmVudGl0eU1hdGVyaWFscykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgICAgIHJlc3VsdC5lbnRpdHkubWF0ZXJpYWxzQnlSZWdpb25EZWNsW3JlZ2lvbktleV0gPSByZWdpb25zUmVzdWx0LmVudGl0eU1hdGVyaWFsc1tyZWdpb25LZXldO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdFtrZXldLnByb3ZpZGVycyA9IHRoaXMuc2VyaWFsaXplUHJvdmlkZXJzKGtleSk7XG4gICAgfSk7XG4gICAgcmVzdWx0LmVudGl0eS5wcm92aWRlcnMgPSB0aGlzLnNlcmlhbGl6ZVByb3ZpZGVycygnZW50aXR5Jyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNlcmlhbGl6ZVByb3ZpZGVycyh0eXBlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5wcm92aWRlcnNbdHlwZV0pLmZvckVhY2gocHJvdmlkZXJLZXkgPT4ge1xuICAgICAgcmVzdWx0W3Byb3ZpZGVyS2V5XSA9IHRoaXMucHJvdmlkZXJzW3R5cGVdW3Byb3ZpZGVyS2V5XS5zZXJpYWxpemUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGl0ZXJhdGVUZW1wbGF0ZVJlZ2lvbnMoYXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgdGVtcGxhdGVSZWdpb25zOiB7fSxcbiAgICAgIHRlbXBsYXRlUmVnaW9uc09yZGVyOiBbXSxcbiAgICAgIGVudGl0eU1hdGVyaWFsczoge30sXG4gICAgfTtcbiAgICBhcnIuZm9yRWFjaChvYmogPT4ge1xuICAgICAgLy8gY29uc3Qga2V5ID0gb2JqLmRhdGEuaWQucmVwbGFjZSgvXi4qXFwuLywgJycpO1xuICAgICAgY29uc3QgcmVnaW9uS2V5ID0gb2JqLmRhdGEucmVnaW9uS2V5O1xuICAgICAgcmVzdWx0LnRlbXBsYXRlUmVnaW9uc09yZGVyLnB1c2gocmVnaW9uS2V5KTtcbiAgICAgIGNvbnN0IGVudGl0eURlcGVuZGVudCA9IG9iai5kYXRhLmVudGl0eURlcGVuZGVudCB8fCBmYWxzZTtcblxuICAgICAgY29uc3QgcmVnaW9uTWF0ZXJpYWxzID0gVmlzdWFsRnJhbWUuaXRlcmF0ZU1hdGVyaWFscyhvYmouY2hpbGRyZW4sIHJlZ2lvbktleSk7XG5cbiAgICAgIGlmIChlbnRpdHlEZXBlbmRlbnQgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgYW4gZXhhY3QgdGVtcGxhdGUgcmVnaW9uXG4gICAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnNbcmVnaW9uS2V5XSA9IHtcbiAgICAgICAgICByZWdpb25JZDogb2JqLmRhdGEucmVnaW9uSWQsXG4gICAgICAgICAgcmVnaW9uS2V5LFxuICAgICAgICAgIHVuaXF1ZUNvbnRlbnRJZDogb2JqLmRhdGEudW5pcXVlQ29udGVudElkLFxuICAgICAgICAgIG1hdGVyaWFsc0RlY2xzOiByZWdpb25NYXRlcmlhbHMsXG4gICAgICAgICAgZW50aXR5RGVwZW5kZW50LFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnRlbXBsYXRlUmVnaW9uc1tyZWdpb25LZXldID0ge1xuICAgICAgICAgIHJlZ2lvbklkOiBvYmouZGF0YS5yZWdpb25JZCxcbiAgICAgICAgICByZWdpb25LZXksXG4gICAgICAgICAgdW5pcXVlQ29udGVudElkOiBvYmouZGF0YS51bmlxdWVDb250ZW50SWQsXG4gICAgICAgICAgZW50aXR5RGVwZW5kZW50LFxuICAgICAgICB9O1xuICAgICAgICAvLyB0aGlzIGlzIGVudGl0eS1kZXBlbmRlbnQgcmVnaW9uXG4gICAgICAgIHJlc3VsdC5lbnRpdHlNYXRlcmlhbHNbcmVnaW9uS2V5XSA9IHJlZ2lvbk1hdGVyaWFscztcbiAgICAgIH1cblxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgaXRlcmF0ZU1hdGVyaWFscyhhcnIsIHJlZ2lvbktleSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGRlY2w6IHt9LFxuICAgICAgbWF0ZXJpYWxzT3JkZXI6IFtdLFxuICAgIH07XG4gICAgYXJyLmZvckVhY2gob2JqID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IG9iai5kYXRhLm1hdGVyaWFsSW5kZXg7XG4gICAgICByZXN1bHQuZGVjbFtrZXldID0ge1xuICAgICAgICAvLyBlZGl0YWJsZXNLZXlzOiBvYmouZGF0YS5lZGl0YWJsZUtleXMsXG4gICAgICAgIG1hdGVyaWFsOiBvYmouZGF0YS5tYXRlcmlhbFBhdGgsXG4gICAgICB9O1xuICAgICAgcmVzdWx0Lm1hdGVyaWFsc09yZGVyLnB1c2goa2V5KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbEZyYW1lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgV1lTSVdZRyBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gQmFzZUVkaXRhYmxlLmZyYW1lJCgkbm9kZSk7XG4gICAgY29uc3QgZWRpdG9yID0gbm9kZS5kYXRhKCdlZGl0b3InKTtcbiAgICBpZiAoZWRpdG9yKSB7XG4gICAgICByZXR1cm4gZWRpdG9yLmdldERhdGEoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUuaHRtbCgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9ICRub2RlWzBdO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGF1dG9QYXJhZ3JhcGg6IGZhbHNlLFxuICAgICAgZW5hYmxlQ29udGVudEVkaXRhYmxlOiB0cnVlLFxuICAgICAgaWdub3JlRW1wdHlQYXJhZ3JhcGg6IHRydWUsXG4gICAgICBlbnRlck1vZGU6IHdpbmRvdy5DS0VESVRPUi5FTlRFUl9CUixcbiAgICB9O1xuICAgIC8vICQoKCkgPT4ge1xuICAgICAgY29uc3QgZWRpdG9yID0gd2luZG93LkFsbG95RWRpdG9yLmVkaXRhYmxlKG5vZGUsIGNvbmZpZykuZ2V0KCduYXRpdmVFZGl0b3InKTtcbiAgICAgICRub2RlLmRhdGEoJ2VkaXRvcicsIGVkaXRvcik7XG4gICAgLy8gfSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBXWVNJV1lHO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL1dZU0lXWUcuanNcbiAqKi8iLCJpbXBvcnQgV1lTSVdZRyBmcm9tICcuL1dZU0lXWUcnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9saW5rJztcbmltcG9ydCBUZXh0U3RyaW5nIGZyb20gJy4vc3RyaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWxsKCkge1xuICBpZiAodHlwZW9mKHdpbmRvdy5NT05TVEVSX0VESVRBQkxFUykgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTID0ge307XG4gIH1cbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWyd3eXNpd3lnJ10gPSBuZXcgV1lTSVdZRygpO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ2xpbmsnXSA9IG5ldyBMaW5rKCk7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snaW1hZ2UnXSA9IG5ldyBJbWFnZSgpO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ3N0cmluZyddID0gbmV3IFRleHRTdHJpbmcoKTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvYWxsLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFZGl0YWJsZSBmcm9tICcuL0Jhc2VFZGl0YWJsZSc7XG5cbmNsYXNzIEltYWdlIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIGNvbnN0ICRpbWcgPSAkbm9kZS5maW5kKCdpbWcnKS5maXJzdCgpO1xuICAgIHJldHVybiB7XG4gICAgICBzcmM6ICRpbWcuYXR0cignc3JjJyksXG4gICAgICBhbHQ6ICRpbWcuYXR0cignYWx0JyksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9pbWFnZS5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiAkbm9kZS5kYXRhKCdvcmlnaW5hbEhyZWYnKSA/ICRub2RlLmRhdGEoJ29yaWdpbmFsSHJlZicpIDogJG5vZGUuYXR0cignaHJlZicpLFxuICAgICAgYW5jaG9yOiAkbm9kZS5odG1sKCksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2xpbmsuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgVGV4dFN0cmluZyBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gQmFzZUVkaXRhYmxlLmZyYW1lJCgkbm9kZSk7XG4gICAgY29uc3QgZWRpdG9yID0gbm9kZS5kYXRhKCdlZGl0b3InKTtcbiAgICBpZiAoZWRpdG9yKSB7XG4gICAgICByZXR1cm4gZWRpdG9yLmdldERhdGEoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUuaHRtbCgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9ICRub2RlWzBdO1xuICAgIC8qIGdsb2JhbCB3aW5kb3c6ZmFsc2UgKi9cblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGFsbG93ZWRDb250ZW50OiAnaSB1JyxcbiAgICAgIHRvb2xiYXJzOiB7XG4gICAgICAgIHN0eWxlczoge1xuICAgICAgICAgIHNlbGVjdGlvbnM6IHdpbmRvdy5BbGxveUVkaXRvci5TZWxlY3Rpb25zLFxuICAgICAgICAgIHRhYkluZGV4OiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGF1dG9QYXJhZ3JhcGg6IGZhbHNlLFxuICAgICAgZW5hYmxlQ29udGVudEVkaXRhYmxlOiB0cnVlLFxuICAgICAgaWdub3JlRW1wdHlQYXJhZ3JhcGg6IHRydWUsXG4gICAgICBibG9ja2xlc3M6IHRydWUsXG4gICAgICBlbnRlck1vZGU6IHdpbmRvdy5DS0VESVRPUi5FTlRFUl9CUixcbiAgICB9O1xuICAgIC8vICQoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBlZGl0b3IgPSB3aW5kb3cuQWxsb3lFZGl0b3IuZWRpdGFibGUobm9kZSwgY29uZmlnKS5nZXQoJ25hdGl2ZUVkaXRvcicpO1xuICAgICAgZWRpdG9yLm9uKCdrZXknLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5kYXRhLmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmRhdGEua2V5Q29kZSA9PT0gd2luZG93LkNLRURJVE9SLlNISUZUICsgMTMpIHtcbiAgICAgICAgICAvLyBhZGQgc2F2aW5nIGZ1bmN0aW9uIGhlcmVcbiAgICAgICAgICBldmVudC5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBlZGl0b3Iub24oJ3Bhc3RlJywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5kYXRhLmRhdGFWYWx1ZSA9IGV2ZW50LmRhdGEuZGF0YVZhbHVlLnJlcGxhY2UoLzxicltcXHNcXC9dKj4vZ21pLCAnICcpO1xuICAgICAgfSk7XG4gICAgICAkbm9kZS5kYXRhKCdlZGl0b3InLCBlZGl0b3IpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCRub2RlLCBub2RlKTtcbiAgICAgIC8vIHRocm93IGU7XG4gICAgfVxuICAgIC8vIH0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dFN0cmluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9zdHJpbmcuanNcbiAqKi8iLCJpbXBvcnQgRGF0YVByb3ZpZGVyIGZyb20gJy4uL0RhdGFQcm92aWRlcic7XG5cbmNsYXNzIFN0YXRpY0NvbnRlbnQgZXh0ZW5kcyBEYXRhUHJvdmlkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm92aWRlZEtleXMpIHtcbiAgICBzdXBlcignRG90UGxhbnRcXFxcTW9uc3RlclxcXFxEYXRhRW50aXR5XFxcXFN0YXRpY0NvbnRlbnRQcm92aWRlcicsIHByb3ZpZGVkS2V5cyk7XG4gIH1cblxuICBmaWxsQ29uZmlnKGRhdGEpIHtcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YTtcbiAgICBuZXdEYXRhLmVudGl0aWVzID0gdGhpcy5zZXJpYWxpemVLZXlzKCk7XG4gICAgcmV0dXJuIG5ld0RhdGE7XG4gIH1cblxuICBzZXJpYWxpemVNYXRlcmlhbChyZWdpb25LZXksIG1hdGVyaWFsS2V5LCBkYXRhS2V5cywgJHJlZ2lvbiwgJG1hdGVyaWFsKSB7XG4gICAgY29uc3QgbWF0ZXJpYWxFZGl0YWJsZUtleXMgPSAkbWF0ZXJpYWwuZGF0YSgnZWRpdGFibGVLZXlzJyk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5yZWN1cnNpdmVTZXJpYWxpemUobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRtYXRlcmlhbCwgZGF0YUtleXMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZWN1cnNpdmVTZXJpYWxpemUobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRyb290LCBkYXRhS2V5cywgcHJlZml4ID0gJycpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcblxuICAgIGRhdGFLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IG9iaiA9IG1hdGVyaWFsRWRpdGFibGVLZXlzW2tleV0gfHwgJ05PX1NVQ0hfS0VZJztcbiAgICAgIGlmIChvYmogPT09ICdOT19TVUNIX0tFWScpIHtcbiAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvYmogPT09IE9iamVjdChvYmopKSB7XG4gICAgICAgIC8vIGl0J3MgcmVjdXJzaXZlXG4gICAgICAgIC8vIGZpcnN0IC0gZmluZCBhbGwgYmxvY2tzXG4gICAgICAgIGNvbnN0ICRibG9ja3MgPSAkcm9vdC5maW5kKGBbZGF0YS1yZWN1cnNpdmUtaXRlbT1cIiR7a2V5fVwiXWApO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICByZXN1bHRba2V5XSA9IFtdO1xuICAgICAgICAkYmxvY2tzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh0aGF0LnJlY3Vyc2l2ZVNlcmlhbGl6ZShvYmosICR0aGlzLCBPYmplY3Qua2V5cyhvYmopLCAnaXRlbS4nKSk7XG4gICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGl0J3MgcGxhaW4gZmllbGRcbiAgICAgICAgY29uc3QgJG5vZGUgPSAkcm9vdC5maW5kKGBbZGF0YS1lZGl0YWJsZS1rZXk9XCIke3ByZWZpeH0ke2tleX1cIl1gKS5maXJzdCgpO1xuICAgICAgICBpZiAoJG5vZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBTa2lwcGVkIFtkYXRhLWVkaXRhYmxlLWtleT1cIiR7cHJlZml4fSR7a2V5fVwiXSBhcyBub3QgZm91bmRgKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0W2tleV0gPSBEYXRhUHJvdmlkZXIuZWRpdGFibGUuc2VyaWFsaXplRWRpdGFibGUoJG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGljQ29udGVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL3Byb3ZpZGVycy9TdGF0aWNDb250ZW50LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==