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
	
	__webpack_require__(30);
	
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
	
	var _VisualBuilder = __webpack_require__(14);
	
	var _VisualBuilder2 = _interopRequireDefault(_VisualBuilder);
	
	var _VisualFrame = __webpack_require__(27);
	
	var _VisualFrame2 = _interopRequireDefault(_VisualFrame);
	
	var _HashApi = __webpack_require__(26);
	
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
	
	var _all = __webpack_require__(16);
	
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
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Material = function () {
	  function Material($node) {
	    _classCallCheck(this, Material);
	
	    this.$node = $node;
	    this.materialPath = this.$node.data('materialPath');
	
	    this.materialName = this.materialPath.replace(/.*\.(.*)$/, '$1');
	    // @todo CHANGE THIS
	    this.key = this.$node.data('materialIndex');
	  }
	
	  _createClass(Material, [{
	    key: 'processMaterial',
	    value: function processMaterial() {
	      return $('<li class="page-structure__material">' + this.materialName + '</li>');
	    }
	  }, {
	    key: 'serialize',
	    value: function serialize() {
	      // material has data-editable-keys with schema
	      var editableKeys = this.$node.data('editableKeys');
	      var recursiveIterator = function iter(arr, path, $scope) {
	        var final = {};
	        Object.keys(arr).forEach(function (key) {
	          var fullKeyPath = key;
	          if (path) {
	            fullKeyPath = path + '.' + key;
	          }
	          if (_typeof(arr[key]) === 'object') {
	            var $items = $scope.find('[data-recursive-item="' + fullKeyPath + '"]');
	            final[key] = {};
	            $items.each(function itemsRec() {
	              var $this = Material.frame$(this);
	              final[key][$this.data('recursiveItemKey')] = recursiveIterator(arr[key], 'item', $this);
	            });
	          } else {
	            var $node = Material.frame$($scope.find('[data-editable-key="' + fullKeyPath + '"]').first());
	            final[key] = Material.serializeNode($node);
	          }
	        });
	        return final;
	      };
	
	      return recursiveIterator(editableKeys, '', Material.frame$(this.$node));
	    }
	  }], [{
	    key: 'serializeNode',
	    value: function serializeNode($node) {
	      return window.FrontendMonster.builder.editable.serializeEditable($node);
	    }
	  }, {
	    key: 'frame$',
	    get: function get() {
	      return window.FrontendMonster.builder.frameContentWindow.$;
	    }
	  }]);
	
	  return Material;
	}();
	
	exports.default = Material;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Material = __webpack_require__(12);
	
	var _Material2 = _interopRequireDefault(_Material);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Region = function () {
	  function Region($node, target$) {
	    _classCallCheck(this, Region);
	
	    this.materials = {};
	    this.$node = $node;
	    this.description = $node.data('contentDescription');
	    this.target$ = target$;
	  }
	
	  _createClass(Region, [{
	    key: 'processRegion',
	    value: function processRegion() {
	      this.key = this.$node.data('regionKey');
	      var description = this.regionDescription ? this.regionDescription : this.key;
	      var $regionLi = $('<li class="page-structure__region">' + description + '</li>');
	
	      this.id = this.$node.data('regionId');
	      var $regionUl = $('<ul class="page-structure__region-materials"></ul>');
	
	      var $materials = this.$node.find('[data-is-material=1]');
	      var that = this;
	
	      $materials.each(function materialsIterator() {
	        var $materialNode = that.target$(this);
	        var materialObject = new _Material2.default($materialNode);
	        var $li = materialObject.processMaterial();
	        that.materials[materialObject.key] = materialObject;
	        $regionUl.append($li);
	      });
	
	      $regionLi.append($regionUl);
	      return $regionLi;
	    }
	  }, {
	    key: 'serialize',
	    value: function serialize() {
	      var result = {};
	      var materials = this.materials;
	      Object.keys(materials).forEach(function iter(materialKey) {
	        result[materialKey] = materials[materialKey].serialize();
	      });
	      return result;
	    }
	  }, {
	    key: 'materialsDecl',
	    value: function materialsDecl() {
	      var result = {};
	      // for (const materialKey in this.materials) {
	      //   if (this.materials.hasOwnProperty(materialKey)) {
	      //     result[materialKey] = {
	      //       'material': this.materials[materialKey].materialPath,
	      //     };
	      //   }
	      // }
	      var $materials = this.$node.find('[data-is-material=1]');
	      var materialsOrder = [];
	      $materials.each(function materialsIterator() {
	        var $this = $(this);
	        var materialIndex = $this.data('materialIndex');
	        materialsOrder.push(materialIndex);
	        result[materialIndex] = {
	          material: $this.data('materialPath')
	        };
	      });
	      return {
	        decl: result,
	        materialsOrder: materialsOrder
	      };
	    }
	  }]);
	
	  return Region;
	}();
	
	exports.default = Region;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _SiteStructureEnvironment = __webpack_require__(24);
	
	var _SiteStructureEnvironment2 = _interopRequireDefault(_SiteStructureEnvironment);
	
	var _MaterialsEnvironment = __webpack_require__(22);
	
	var _MaterialsEnvironment2 = _interopRequireDefault(_MaterialsEnvironment);
	
	var _CustomizationEnvironment = __webpack_require__(21);
	
	var _CustomizationEnvironment2 = _interopRequireDefault(_CustomizationEnvironment);
	
	var _ActionEnvironment = __webpack_require__(20);
	
	var _ActionEnvironment2 = _interopRequireDefault(_ActionEnvironment);
	
	var _PageStructureEnvironment = __webpack_require__(23);
	
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = all;
	
	var _WYSIWYG = __webpack_require__(15);
	
	var _WYSIWYG2 = _interopRequireDefault(_WYSIWYG);
	
	var _image = __webpack_require__(17);
	
	var _image2 = _interopRequireDefault(_image);
	
	var _link = __webpack_require__(18);
	
	var _link2 = _interopRequireDefault(_link);
	
	var _string = __webpack_require__(19);
	
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
/* 18 */
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
/* 19 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _BaseEnvironment2 = __webpack_require__(1);
	
	var _BaseEnvironment3 = _interopRequireDefault(_BaseEnvironment2);
	
	var _Region = __webpack_require__(13);
	
	var _Region2 = _interopRequireDefault(_Region);
	
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
	      _get(Object.getPrototypeOf(PageStructureEnvironment.prototype), 'pageChanged', this).call(this);
	      this.$pageStructure.jstree('destroy');
	      var environment = this;
	      var layout = this.target.MONSTER_EDIT_MODE_DATA.layout;
	      var template = this.target.MONSTER_EDIT_MODE_DATA.template;
	
	      var layoutItem = {
	        text: 'Layout - ' + layout.key + ' #' + layout.id,
	        icon: 'fa fa-columns',
	        state: {
	          opened: true
	        },
	        children: []
	      };
	      var templateItem = {
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
	          data: this.pageStructure
	        }
	      });
	
	      // regions.each(function iter() {
	      //   const $regionNode = that.target.$(this);
	      //   const regionObject = new Region($regionNode, that.target.$);
	      //   const $regionLi = regionObject.processRegion();
	      //   that.regionsStructure[regionObject.key] = regionObject;
	      //   environment.$pageStructure.append($regionLi);
	      // });
	      this.editModeData = this.target.MONSTER_EDIT_MODE_DATA;
	    }
	  }, {
	    key: 'serializePage',
	    value: function serializePage() {
	      var _this2 = this;
	
	      var result = {};
	      Object.keys(this.regionsStructure).forEach(function (regionKey) {
	        var region = _this2.regionsStructure[regionKey];
	        result[region.key] = region.serialize();
	      });
	      return result;
	    }
	  }, {
	    key: 'materialsByRegions',
	    value: function materialsByRegions() {
	      var _this3 = this;
	
	      var result = {};
	      Object.keys(this.regionsStructure).forEach(function (regionKey) {
	        var region = _this3.regionsStructure[regionKey];
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
	      item.id = 'layout.' + item.regionKey;
	      var templateRegions = [];
	
	      // find materials
	      var $layoutMaterials = $layoutRegion.find('>[data-is-material]');
	      $layoutMaterials.each(function iter() {
	        var $layoutMaterial = $(this);
	        var result = PageStructureEnvironment.processLayoutMaterial($layoutMaterial);
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
	    value: function processLayoutMaterial($layoutMaterial) {
	      var materialIndex = $layoutMaterial.data('materialIndex');
	      var materialPath = $layoutMaterial.data('materialPath');
	      var item = {
	        text: (materialPath === 'core.frontend-monster-core.general.content-placeholder' ? 'Main Entity Content' : 'Material: ' + materialIndex) + '\n      ',
	        icon: 'fa fa-puzzle-piece',
	        materialIndex: materialIndex,
	        materialPath: materialPath,
	        editableKeys: $layoutMaterial.data('editableKeys')
	      };
	      var templateRegions = [];
	      var $regions = $layoutMaterial.find('> .m-monster-content__content');
	      $regions.each(function iter() {
	        var result = PageStructureEnvironment.processTemplateRegion($(this));
	        templateRegions.push(result);
	      });
	      if (templateRegions.length > 0) {
	        item.isContent = true;
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
	      var $regionMaterials = $templateRegion.find('>[data-is-material]');
	      $regionMaterials.each(function iter() {
	        item.children.push(PageStructureEnvironment.processTemplateRegionMaterial($(this)));
	      });
	      return item;
	    }
	  }, {
	    key: 'processTemplateRegionMaterial',
	    value: function processTemplateRegionMaterial($regionMaterial) {
	      var materialIndex = $regionMaterial.data('materialIndex');
	      var materialPath = $regionMaterial.data('materialPath');
	      return {
	        text: 'Material: ' + materialIndex,
	        materialIndex: materialIndex,
	        materialPath: materialPath,
	        icon: 'fa fa-puzzle-piece',
	        editableKeys: $regionMaterial.data('editableKeys')
	      };
	    }
	  }, {
	    key: 'extractRegionData',
	    value: function extractRegionData($node) {
	      return {
	        text: $node.data('contentDescription'),
	        icon: 'fa fa-folder-o',
	        regionId: $node.data('regionId'),
	        regionKey: $node.data('regionKey'),
	        uniqueContentId: $node.data('uniqueContentId'),
	        node: $node
	      };
	    }
	  }]);
	
	  return PageStructureEnvironment;
	}(_BaseEnvironment3.default);
	
	exports.default = PageStructureEnvironment;

/***/ },
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _FrameApi = __webpack_require__(3);
	
	var _FrameApi2 = _interopRequireDefault(_FrameApi);
	
	var _uniqid = __webpack_require__(25);
	
	var _uniqid2 = _interopRequireDefault(_uniqid);
	
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
	    key: 'getNewMaterialIndex',
	    value: function getNewMaterialIndex() {
	      var _this2 = this;
	
	      if (!this.lastMaterialIndex) {
	        (function () {
	          var lastIndex = 0;
	          $('[data-is-material]').each(function iter() {
	            var index = $(this).data('material-index');
	            if (index > lastIndex) {
	              lastIndex = index;
	            }
	          });
	          _this2.lastMaterialIndex = lastIndex;
	        })();
	      }
	      this.lastMaterialIndex++;
	      return this.lastMaterialIndex;
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
	          }
	        }
	        return false;
	      }).on('click', '.monster-block-handlers__move-down', function () {
	        if (that.$selectedMaterial) {
	          var $next = that.$selectedMaterial.next('[data-is-material]');
	          if ($next.length === 1) {
	            that.$selectedMaterial.insertAfter($next);
	            that.updateHandlers();
	          }
	        }
	        return false;
	      }).on('click', '.monster-block-handlers__clone', function () {
	        if (that.$selectedMaterial) {
	          var $clonedMaterial = that.$selectedMaterial.clone();
	          $clonedMaterial.data('material-index', that.getNewMaterialIndex()).insertAfter(that.$selectedMaterial);
	          that.selectMaterial($clonedMaterial);
	        }
	        return false;
	      }).on('click', '.monster-block-handlers__remove', function () {
	        if (that.$selectedMaterial) {
	          if (confirm('Are you sure you want to remove this material?')) {
	            that.$selectedMaterial.remove();
	            that.$selectedMaterial = null;
	            that.$handlers.hide(); // it does not work. why? Need to fix!
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
	      var _this3 = this;
	
	      var result = {};
	      var that = this;
	      Object.keys(this.$monsterContent).forEach(function (uniqueContentId) {
	        var $monster = _this3.$monsterContent[uniqueContentId];
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
	      var data = {
	        template: this.constructTemplateData(),
	        action: 'save'
	      };
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
	  }]);
	
	  return VisualFrame;
	}();
	
	exports.default = VisualFrame;

/***/ },
/* 28 */,
/* 29 */,
/* 30 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzA0MmM4MGM0MTkzNWY1ZjcxNzYiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9CYXNlRWRpdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvRnJvbnRlbmRNb25zdGVyLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9FZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZUNvbXBvbmVudHMvTWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1BhZ2VTdHJ1Y3R1cmVDb21wb25lbnRzL1JlZ2lvbi5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL1dZU0lXWUcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVBOzs7Ozs7QUFFQSxRQUFPLGVBQVAsR0FBeUIsK0JBQXpCOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7Ozs7Ozs7S0FFTSxlO0FBQ0osNEJBQVksYUFBWixFQUEyQixJQUEzQixFQUFpQztBQUFBOztBQUMvQixVQUFLLGFBQUwsR0FBcUIsYUFBckI7QUFDQSxVQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsVUFBSyxNQUFMLEdBQWMsRUFBRSxLQUFLLGFBQUwsQ0FBbUIsUUFBbkIsQ0FBNEIsZ0JBQTVCLENBQUYsRUFBaUQsQ0FBakQsRUFBb0QsYUFBbEU7QUFDRDs7OztnQ0FFVTs7QUFFVCxXQUFJLEtBQUssSUFBTCxLQUFjLEtBQUssYUFBTCxDQUFtQixrQkFBckMsRUFBeUQ7QUFDdkQ7QUFDRDtBQUNELFdBQUksS0FBSyxhQUFMLENBQW1CLGtCQUF2QixFQUEyQztBQUN6QyxjQUFLLGFBQUwsQ0FBbUIsWUFBbkIsQ0FBZ0MsR0FBaEMsQ0FBb0MsS0FBSyxhQUFMLENBQW1CLGtCQUF2RCxFQUEyRSxVQUEzRTtBQUNEO0FBQ0Y7OztrQ0FNWTtBQUNYLFlBQUssYUFBTCxDQUFtQixjQUFuQjtBQUNEOzs7aUNBRVcsSSxFQUFNLEksRUFBTTtBQUN0QixjQUFPLG1CQUFTLFdBQVQsQ0FBcUIsS0FBSyxNQUExQixFQUFrQyxJQUFsQyxFQUF3QyxJQUF4QyxDQUFQO0FBQ0Q7OzttQ0FFYSxDQUViOzs7eUJBZGE7QUFDWixjQUFPLEtBQUssTUFBTCxDQUFZLENBQW5CO0FBQ0Q7Ozs7OzttQkFlWSxlOzs7Ozs7Ozs7Ozs7Ozs7O0tDcENULFk7Ozs7Ozs7bUNBQ1UsSyxFQUFPLENBRXBCOzs7eUNBRW1CLEMsRUFBRyxDQUV0Qjs7O3lCQUVtQjtBQUNsQixjQUFPLE9BQU8sZUFBUCxDQUF1QixPQUF2QixDQUErQixrQkFBL0IsQ0FBa0QsQ0FBekQ7QUFDRDs7Ozs7O21CQUdZLFk7Ozs7Ozs7Ozs7Ozs7Ozs7S0NkVCxROzs7Ozs7O3lDQVV1QixRLEVBQVU7QUFDbkMsV0FBTSxXQUFXLFNBQVMsZUFBVCxDQUF5QixLQUF6QixFQUFnQztBQUMvQyxhQUFJLFVBQVUsSUFBZDtBQUNBLGFBQUksU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLHFCQUFVLEtBQUssS0FBTCxDQUFXLE1BQU0sSUFBakIsQ0FBVjtBQUNELFVBRkQsTUFFTztBQUNMLHFCQUFVLE1BQU0sSUFBaEI7QUFDRDs7QUFFRCxhQUFJLFNBQVMsUUFBUSxJQUFqQixDQUFKLEVBQTRCO0FBQzFCLG9CQUFTLFFBQVEsSUFBakIsRUFBdUIsS0FBdkIsQ0FBNkIsUUFBN0IsRUFBdUMsUUFBUSxJQUEvQztBQUNEO0FBQ0YsUUFYRDs7QUFhQSxXQUFJLE9BQU8sZ0JBQVgsRUFBNkI7QUFDM0IsZ0JBQU8sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsUUFBbkM7QUFDRCxRQUZELE1BRU87O0FBRUwsZ0JBQU8sV0FBUCxDQUFtQixXQUFuQixFQUFnQyxRQUFoQztBQUNEO0FBQ0Y7OztpQ0FFa0IsTSxFQUFRLEksRUFBTSxJLEVBQU07QUFDckMsV0FBTSxPQUFPO0FBQ1gsbUJBRFc7QUFFWDtBQUZXLFFBQWI7QUFJQSxXQUFNLFVBQVUsU0FBUyxJQUFULEdBQWdCLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBaEIsR0FBdUMsSUFBdkQ7O0FBRUEsY0FBTyxXQUFQLENBQW1CLE9BQW5CLEVBQTRCLEdBQTVCO0FBQ0Q7Ozt5QkF2Q2lCOztBQUVoQixXQUFJLE9BQU8sRUFBUCxLQUFlLFdBQW5CLEVBQWdDO0FBQzlCLGdCQUFPLEdBQUcsRUFBSCxFQUFQLEM7QUFDRDs7QUFFRCxjQUFPLElBQVA7QUFDRDs7Ozs7O21CQW1DWSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDZjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0tBRU0sZTtBQUNKLDhCQUFjO0FBQUE7O0FBQ1osVUFBSyxNQUFMO0FBQ0EsVUFBSyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsVUFBSyxPQUFMLEdBQWUsdUJBQWY7QUFDQSxTQUFJLE9BQU8sTUFBUCxLQUFrQixNQUFsQixJQUE0QixPQUFPLE1BQVAsQ0FBYyxlQUE5QyxFQUErRDtBQUM3RCxXQUFJLE9BQU8sTUFBUCxDQUFjLGVBQWQsQ0FBOEIsVUFBbEMsRUFBOEM7QUFDNUMsY0FBSyxXQUFMLEdBQW1CLDJCQUFuQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBSSxPQUFPLFlBQVAsS0FBeUIsV0FBN0IsRUFBMEM7QUFDeEMsb0JBQWEsSUFBYjtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBeUJRO0FBQ1AsV0FBTSxlQUFlLE9BQU8sdUJBQVAsSUFBa0MsRUFBdkQ7QUFDQSxXQUFNLFdBQVcsRUFBakI7QUFDQSxjQUFPLElBQVAsQ0FBWSxZQUFaLEVBQTBCLE9BQTFCLENBQWtDLGVBQU87QUFDdkMsa0JBQVMsR0FBVCxJQUFnQixhQUFhLEdBQWIsQ0FBaEI7QUFDRCxRQUZEO0FBR0EsWUFBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0Q7Ozt5QkExQmE7QUFDWixXQUFJLEtBQUssWUFBTCxLQUFzQixJQUExQixFQUFnQztBQUM5QixjQUFLLFlBQUwsR0FBb0IsNkJBQXBCO0FBQ0Q7QUFDRCxjQUFPLEtBQUssWUFBWjtBQUNEOzs7Ozs7Ozs7eUJBTWdCO0FBQ2YsY0FBTyxLQUFLLE9BQUwsQ0FBYSxRQUFiLENBQXNCLE1BQXRCLEtBQWlDLENBQXhDO0FBQ0Q7Ozs7OzttQkFnQlksZTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEZjs7Ozs7Ozs7S0FFTSxRO0FBQ0osdUJBQWM7QUFBQTs7QUFDWixVQUFLLGVBQUwsR0FBdUIsRUFBdkI7O0FBRUE7QUFDQSxVQUFLLGVBQUwsR0FBdUIsT0FBTyxpQkFBOUI7QUFDRDs7Ozt1Q0FFaUIsSyxFQUFPO0FBQ3ZCLFdBQU0sV0FBVyxNQUFNLElBQU4sQ0FBVyxnQkFBWCxDQUFqQjtBQUNBLFdBQUksUUFBTyxRQUFQLHlDQUFPLFFBQVAsT0FBcUIsUUFBekIsRUFBbUM7QUFDakMsZ0JBQU8sS0FBUDtBQUNEO0FBQ0QsV0FBSSxPQUFPLFNBQVMsY0FBVCxDQUF3QixNQUF4QixJQUFrQyxTQUFTLElBQTNDLEdBQWtELFFBQTdEO0FBQ0EsV0FBSSxLQUFLLGVBQUwsQ0FBcUIsY0FBckIsQ0FBb0MsSUFBcEMsTUFBOEMsS0FBbEQsRUFBeUQ7QUFDdkQsZ0JBQU8sUUFBUDtBQUNEOztBQUVELFdBQU0saUJBQWlCLFNBQVMsY0FBVCxDQUF3QixRQUF4QixJQUFvQyxTQUFTLE1BQTdDLEdBQXNELE1BQTdFOztBQUVBLGNBQU8sS0FBSyxlQUFMLENBQXFCLElBQXJCLEVBQTJCLGFBQTNCLENBQXlDLEtBQXpDLEVBQWdELGNBQWhELENBQVA7QUFDRDs7O3lDQUVtQixDLEVBQUc7QUFBQTs7QUFDckIsY0FBTyxJQUFQLENBQVksS0FBSyxlQUFqQixFQUFrQyxPQUFsQyxDQUEwQyx1QkFBZTtBQUN2RCxhQUFNLFdBQVcsTUFBSyxlQUFMLENBQXFCLFdBQXJCLENBQWpCO0FBQ0Esa0JBQVMsbUJBQVQsQ0FBNkIsQ0FBN0I7QUFDRCxRQUhEO0FBSUQ7Ozs7OzttQkFHWSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NqQ1QsUTtBQUNKLHFCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsVUFBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLFVBQUssWUFBTCxHQUFvQixLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLGNBQWhCLENBQXBCOztBQUVBLFVBQUssWUFBTCxHQUFvQixLQUFLLFlBQUwsQ0FBa0IsT0FBbEIsQ0FBMEIsV0FBMUIsRUFBdUMsSUFBdkMsQ0FBcEI7O0FBRUEsVUFBSyxHQUFMLEdBQVcsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixlQUFoQixDQUFYO0FBQ0Q7Ozs7dUNBRWlCO0FBQ2hCLGNBQU8sNENBQTBDLEtBQUssWUFBL0MsV0FBUDtBQUNEOzs7aUNBVVc7O0FBRVYsV0FBTSxlQUFlLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsY0FBaEIsQ0FBckI7QUFDQSxXQUFNLG9CQUFvQixTQUFTLElBQVQsQ0FBYyxHQUFkLEVBQW1CLElBQW5CLEVBQXlCLE1BQXpCLEVBQWlDO0FBQ3pELGFBQU0sUUFBUSxFQUFkO0FBQ0EsZ0JBQU8sSUFBUCxDQUFZLEdBQVosRUFBaUIsT0FBakIsQ0FBeUIsZUFBTztBQUM5QixlQUFJLGNBQWMsR0FBbEI7QUFDQSxlQUFJLElBQUosRUFBVTtBQUNSLDJCQUFpQixJQUFqQixTQUF5QixHQUF6QjtBQUNEO0FBQ0QsZUFBSSxRQUFPLElBQUksR0FBSixDQUFQLE1BQXFCLFFBQXpCLEVBQW1DO0FBQ2pDLGlCQUFNLFNBQVMsT0FBTyxJQUFQLDRCQUFxQyxXQUFyQyxRQUFmO0FBQ0EsbUJBQU0sR0FBTixJQUFhLEVBQWI7QUFDQSxvQkFBTyxJQUFQLENBQVksU0FBUyxRQUFULEdBQW9CO0FBQzlCLG1CQUFNLFFBQVEsU0FBUyxNQUFULENBQWdCLElBQWhCLENBQWQ7QUFDQSxxQkFBTSxHQUFOLEVBQVcsTUFBTSxJQUFOLENBQVcsa0JBQVgsQ0FBWCxJQUE2QyxrQkFDM0MsSUFBSSxHQUFKLENBRDJDLEVBRTNDLE1BRjJDLEVBRzNDLEtBSDJDLENBQTdDO0FBS0QsY0FQRDtBQVFELFlBWEQsTUFXTztBQUNMLGlCQUFNLFFBQVEsU0FBUyxNQUFULENBQ1osT0FBTyxJQUFQLDBCQUFtQyxXQUFuQyxTQUFvRCxLQUFwRCxFQURZLENBQWQ7QUFHQSxtQkFBTSxHQUFOLElBQWEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQWI7QUFDRDtBQUNGLFVBdEJEO0FBdUJBLGdCQUFPLEtBQVA7QUFDRCxRQTFCRDs7QUE0QkEsY0FBTyxrQkFBa0IsWUFBbEIsRUFBZ0MsRUFBaEMsRUFBb0MsU0FBUyxNQUFULENBQWdCLEtBQUssS0FBckIsQ0FBcEMsQ0FBUDtBQUNEOzs7bUNBeENvQixLLEVBQU87QUFDMUIsY0FBTyxPQUFPLGVBQVAsQ0FBdUIsT0FBdkIsQ0FBK0IsUUFBL0IsQ0FBd0MsaUJBQXhDLENBQTBELEtBQTFELENBQVA7QUFDRDs7O3lCQUVtQjtBQUNsQixjQUFPLE9BQU8sZUFBUCxDQUF1QixPQUF2QixDQUErQixrQkFBL0IsQ0FBa0QsQ0FBekQ7QUFDRDs7Ozs7O21CQXFDWSxROzs7Ozs7Ozs7Ozs7OztBQ3pEZjs7Ozs7Ozs7S0FFTSxNO0FBQ0osbUJBQVksS0FBWixFQUFtQixPQUFuQixFQUE0QjtBQUFBOztBQUMxQixVQUFLLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxVQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsVUFBSyxXQUFMLEdBQW1CLE1BQU0sSUFBTixDQUFXLG9CQUFYLENBQW5CO0FBQ0EsVUFBSyxPQUFMLEdBQWUsT0FBZjtBQUNEOzs7O3FDQUVlO0FBQ2QsWUFBSyxHQUFMLEdBQVcsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixXQUFoQixDQUFYO0FBQ0EsV0FBTSxjQUFjLEtBQUssaUJBQUwsR0FBeUIsS0FBSyxpQkFBOUIsR0FBa0QsS0FBSyxHQUEzRTtBQUNBLFdBQU0sWUFBWSwwQ0FBd0MsV0FBeEMsV0FBbEI7O0FBRUEsWUFBSyxFQUFMLEdBQVUsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixVQUFoQixDQUFWO0FBQ0EsV0FBTSxZQUFZLEVBQUUsb0RBQUYsQ0FBbEI7O0FBRUEsV0FBTSxhQUFhLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0Isc0JBQWhCLENBQW5CO0FBQ0EsV0FBTSxPQUFPLElBQWI7O0FBRUEsa0JBQVcsSUFBWCxDQUFnQixTQUFTLGlCQUFULEdBQTZCO0FBQzNDLGFBQU0sZ0JBQWdCLEtBQUssT0FBTCxDQUFhLElBQWIsQ0FBdEI7QUFDQSxhQUFNLGlCQUFpQix1QkFBYSxhQUFiLENBQXZCO0FBQ0EsYUFBTSxNQUFNLGVBQWUsZUFBZixFQUFaO0FBQ0EsY0FBSyxTQUFMLENBQWUsZUFBZSxHQUE5QixJQUFxQyxjQUFyQztBQUNBLG1CQUFVLE1BQVYsQ0FBaUIsR0FBakI7QUFDRCxRQU5EOztBQVFBLGlCQUFVLE1BQVYsQ0FBaUIsU0FBakI7QUFDQSxjQUFPLFNBQVA7QUFDRDs7O2lDQUVXO0FBQ1YsV0FBTSxTQUFTLEVBQWY7QUFDQSxXQUFNLFlBQVksS0FBSyxTQUF2QjtBQUNBLGNBQU8sSUFBUCxDQUFZLFNBQVosRUFBdUIsT0FBdkIsQ0FBK0IsU0FBUyxJQUFULENBQWMsV0FBZCxFQUEyQjtBQUN4RCxnQkFBTyxXQUFQLElBQXNCLFVBQVUsV0FBVixFQUF1QixTQUF2QixFQUF0QjtBQUNELFFBRkQ7QUFHQSxjQUFPLE1BQVA7QUFDRDs7O3FDQUVlO0FBQ2QsV0FBTSxTQUFTLEVBQWY7Ozs7Ozs7O0FBUUEsV0FBTSxhQUFhLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0Isc0JBQWhCLENBQW5CO0FBQ0EsV0FBTSxpQkFBaUIsRUFBdkI7QUFDQSxrQkFBVyxJQUFYLENBQWdCLFNBQVMsaUJBQVQsR0FBNkI7QUFDM0MsYUFBTSxRQUFRLEVBQUUsSUFBRixDQUFkO0FBQ0EsYUFBTSxnQkFBZ0IsTUFBTSxJQUFOLENBQVcsZUFBWCxDQUF0QjtBQUNBLHdCQUFlLElBQWYsQ0FBb0IsYUFBcEI7QUFDQSxnQkFBTyxhQUFQLElBQXdCO0FBQ3RCLHFCQUFVLE1BQU0sSUFBTixDQUFXLGNBQVg7QUFEWSxVQUF4QjtBQUdELFFBUEQ7QUFRQSxjQUFPO0FBQ0wsZUFBTSxNQUREO0FBRUw7QUFGSyxRQUFQO0FBSUQ7Ozs7OzttQkFHWSxNOzs7Ozs7Ozs7Ozs7OztBQ3BFZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7S0FFTSxhO0FBQ0osNEJBQWM7QUFBQTs7QUFDWixVQUFLLE1BQUw7QUFDQSxVQUFLLGtCQUFMOztBQUVBLFVBQUssWUFBTCxHQUFvQixJQUFJLEdBQUosQ0FBUSxDQUMxQixDQUFDLGdCQUFELEVBQW1CLHVDQUE2QixJQUE3QixFQUFtQyxnQkFBbkMsQ0FBbkIsQ0FEMEIsRUFFMUIsQ0FBQyxnQkFBRCxFQUFtQix1Q0FBNkIsSUFBN0IsRUFBbUMsZ0JBQW5DLENBQW5CLENBRjBCLEVBRzFCLENBQUMsV0FBRCxFQUFjLG1DQUF5QixJQUF6QixFQUErQixXQUEvQixDQUFkLENBSDBCLEVBSTFCLENBQUMsZUFBRCxFQUFrQix1Q0FBNkIsSUFBN0IsRUFBbUMsZUFBbkMsQ0FBbEIsQ0FKMEIsRUFLMUIsQ0FBQyxRQUFELEVBQVcsZ0NBQXNCLElBQXRCLEVBQTRCLFFBQTVCLENBQVgsQ0FMMEIsQ0FBUixDQUFwQjs7QUFRQSxVQUFLLG1CQUFMOzs7QUFHQSxVQUFLLGlCQUFMLENBQXVCLGdCQUF2QjtBQUNBLE9BQUUsaURBQUYsRUFDRyxLQURILEdBRUcsR0FGSCxDQUVPLFFBRlAsRUFFaUIsSUFGakI7QUFHQSx3QkFBUyxtQkFBVCxDQUE2QixJQUE3Qjs7QUFFQSxVQUFLLFFBQUwsR0FBZ0Isd0JBQWhCOztBQUVBLFVBQUssUUFBTDtBQUNEOzs7Ozs7Ozs7OzhCQU1RO0FBQ1AsV0FBTSxlQUFlLE9BQU8scUJBQVAsSUFBZ0MsRUFBckQ7QUFDQSxXQUFNLFdBQVc7QUFDZiw2QkFBb0IseUJBREw7QUFFZiwyQkFBa0IsdUJBRkg7QUFHZixrQkFBUyxFQUhNO0FBSWYsc0NBQTZCLDZCQUpkO0FBS2YsMEJBQWlCO0FBTEYsUUFBakI7QUFPQSxjQUFPLElBQVAsQ0FBWSxZQUFaLEVBQTBCLE9BQTFCLENBQWtDLGVBQU87QUFDdkMsa0JBQVMsR0FBVCxJQUFnQixhQUFhLEdBQWIsQ0FBaEI7QUFDRCxRQUZEO0FBR0EsWUFBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0EsWUFBSyxRQUFMLEdBQWdCLEVBQUUsS0FBSyxRQUFMLENBQWMsa0JBQWQsQ0FBRixDQUFoQjtBQUNBLFlBQUssVUFBTCxHQUFrQixRQUFNLEtBQUssUUFBTCxDQUFjLDJCQUFkLENBQU4sQ0FBbEI7QUFDRDs7OzBDQUVvQjtBQUNuQixXQUFNLE9BQU8sSUFBYjtBQUNBLFdBQU0sVUFBVSxzQ0FBaEI7QUFDQSxXQUFNLGlCQUFvQixPQUFwQixhQUFOO0FBQ0EsV0FBTSxtQkFBbUIsUUFBTSxPQUFOLENBQXpCO0FBQ0Esd0JBQWlCLEtBQWpCLENBQXVCLFNBQVMsUUFBVCxHQUFvQjtBQUN6QywwQkFBaUIsV0FBakIsQ0FBNkIsY0FBN0I7QUFDQSxXQUFFLEtBQUssUUFBTCxDQUFjLGdCQUFkLENBQUYsRUFBbUMsS0FBbkMsQ0FBeUMsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLGlCQUFiLENBQXpDO0FBQ0EsV0FBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixjQUFqQjtBQUNBLGdCQUFPLEtBQVA7QUFDRCxRQUxEO0FBTUQ7OzsyQ0FFcUI7QUFDcEIsV0FBTSxPQUFPLElBQWI7QUFDQSxXQUFNLFVBQVUsZ0RBQWhCO0FBQ0EsV0FBTSxpQkFBb0IsT0FBcEIsYUFBTjtBQUNBLFdBQU0sZ0JBQWdCLFFBQU0sT0FBTixDQUF0QjtBQUNBLHFCQUFjLEtBQWQsQ0FBb0IsU0FBUyxRQUFULEdBQW9CO0FBQ3RDLGFBQU0sa0JBQWtCLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxpQkFBYixDQUF4QjtBQUNBLGFBQUksS0FBSyxrQkFBTCxLQUE0QixlQUFoQyxFQUFpRDtBQUMvQyx5QkFBYyxXQUFkLENBQTBCLGNBQTFCO0FBQ0EsZ0JBQUssWUFBTCxDQUFrQixHQUFsQixDQUFzQixlQUF0QixFQUF1QyxVQUF2QztBQUNBLGdCQUFLLGtCQUFMLEdBQTBCLElBQTFCO0FBQ0Esa0JBQU8sS0FBUDtBQUNEOztBQUVELHVCQUFjLFdBQWQsQ0FBMEIsY0FBMUI7QUFDQSxjQUFLLGlCQUFMLENBQXVCLGVBQXZCO0FBQ0EsV0FBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixjQUFqQjtBQUNBLGdCQUFPLEtBQVA7QUFDRCxRQWJEO0FBY0Q7Ozt1Q0FFaUIsZSxFQUFpQjtBQUNqQyxZQUFLLFlBQUwsQ0FBa0IsR0FBbEIsQ0FBc0IsZUFBdEIsRUFBdUMsUUFBdkM7QUFDQSxZQUFLLGtCQUFMLEdBQTBCLGVBQTFCO0FBQ0Q7OztzQ0FFZ0I7QUFDZixZQUFLLFVBQUwsQ0FBZ0IsS0FBaEI7QUFDRDs7OzJDQUVxQjtBQUNwQixXQUFNLFlBQWUsS0FBSyxRQUFMLENBQWMsMkJBQWQsQ0FBZixXQUFOO0FBQ0EsV0FBTSxXQUFXLEtBQUssVUFBTCxDQUFnQixJQUFoQixPQUF5QixTQUF6QixFQUFzQyxNQUF0QyxLQUFpRCxDQUFqRCxHQUNWLFNBRFUsZUFFYixFQUZKO0FBR0EsV0FBTSxXQUFXLG1CQUFpQixTQUFqQixTQUE4QixRQUE5QixjQUFqQjtBQUNBLFlBQUssVUFBTCxDQUFnQixNQUFoQixDQUF1QixRQUF2QjtBQUNBLGNBQU8sUUFBUDtBQUNEOzs7b0NBRWMsSSxFQUFNO0FBQ25CLFdBQUksS0FBSyxRQUFMLENBQWMsU0FBZCxDQUF3QixjQUF4QixDQUF1QyxJQUF2QyxDQUFKLEVBQWtEO0FBQ2hELGdCQUFPLEtBQUssUUFBTCxDQUFjLFNBQWQsQ0FBd0IsSUFBeEIsQ0FBUDtBQUNEO0FBQ0QsY0FBTyxJQUFQO0FBQ0Q7OztpQ0FNVzs7QUFFVixXQUFNLFNBQVMsS0FBSyxZQUFMLENBQWtCLEdBQWxCLENBQXNCLGdCQUF0QixFQUF3QyxhQUF4QyxFQUFmO0FBQ0EsZUFBUSxHQUFSLENBQVksTUFBWjs7Ozs7Ozs7O0FBU0EsV0FBTSxvQkFBb0IsRUFBMUI7QUFDQSxXQUFNLGVBQWUsS0FBSyxrQkFBTCxDQUF3QixzQkFBeEIsQ0FBK0MsUUFBL0MsQ0FBd0QsWUFBN0U7O0FBRUEsY0FBTyxJQUFQLENBQVksWUFBWixFQUEwQixPQUExQixDQUFrQyx5QkFBaUI7QUFDakQsMkJBQWtCLGFBQWxCLElBQW1DLEVBQW5DOztBQUVBLGFBQU0sVUFBVSxhQUFhLGFBQWIsQ0FBaEI7O0FBRUEsZ0JBQU8sSUFBUCxDQUFZLE9BQVosRUFBcUIsT0FBckIsQ0FBNkIscUJBQWE7QUFDeEMsZUFBSSxPQUFPLGNBQVAsQ0FBc0IsU0FBdEIsTUFBcUMsS0FBekMsRUFBZ0Q7QUFDOUM7QUFDRDtBQUNELDZCQUFrQixhQUFsQixFQUFpQyxTQUFqQyxJQUE4QyxFQUE5Qzs7O0FBR0EsZUFBTSxZQUFZLFFBQVEsU0FBUixDQUFsQjs7QUFFQSxrQkFBTyxJQUFQLENBQVksU0FBWixFQUF1QixPQUF2QixDQUErQix5QkFBaUI7QUFDOUMsaUJBQUksT0FBTyxTQUFQLEVBQWtCLGNBQWxCLENBQWlDLGFBQWpDLE1BQW9ELEtBQXhELEVBQStEO0FBQzdEO0FBQ0Q7QUFDRCwrQkFBa0IsYUFBbEIsRUFBaUMsU0FBakMsRUFBNEMsYUFBNUMsSUFBNkQsRUFBN0Q7O0FBRUEsaUJBQU0sV0FBVyxVQUFVLGFBQVYsQ0FBakI7O0FBRUEsc0JBQVMsT0FBVCxDQUFpQixlQUFPO0FBQ3RCLG1CQUFJLE9BQU8sU0FBUCxFQUFrQixhQUFsQixFQUFpQyxjQUFqQyxDQUFnRCxHQUFoRCxNQUF5RCxLQUE3RCxFQUFvRTtBQUNsRTtBQUNEO0FBQ0QsaUNBQ0csYUFESCxFQUVHLFNBRkgsRUFHRyxhQUhILEVBSUcsR0FKSCxJQUlVLE9BQU8sU0FBUCxFQUFrQixhQUFsQixFQUFpQyxHQUFqQyxDQUpWO0FBS0QsY0FURDtBQVVELFlBbEJEO0FBbUJELFVBNUJEO0FBNkJELFFBbENEO0FBbUNBLGVBQVEsR0FBUixDQUFZLGlCQUFaO0FBQ0EsY0FBTyxpQkFBUDtBQUNEOzs7bUNBRWE7QUFDWixZQUFLLFlBQUwsQ0FBa0IsT0FBbEIsQ0FDRTtBQUFBLGdCQUNFLFlBQVksV0FBWixFQURGO0FBQUEsUUFERjtBQUlEOzs7eUJBRUcsTSxFQUFRO0FBQ1YsZUFBUSxHQUFSLENBQVksTUFBWjtBQUNEOzs7Z0NBRVU7QUFBQTs7QUFDVCxZQUFLLFNBQUwsR0FBaUIsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixXQUFuQixFQUFnQyxLQUFoQyxFQUFqQjtBQUNBLFlBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsU0FBcEIsRUFBK0IsS0FBL0IsQ0FBcUMsWUFBTTtBQUN6QyxlQUFLLGtCQUFMLENBQXdCLFFBQXhCLENBQWlDLE1BQWpDO0FBQ0EsZ0JBQU8sS0FBUDtBQUNELFFBSEQ7QUFJQSxZQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLE1BQXBCLEVBQTRCLEtBQTVCLENBQWtDLFlBQU07QUFDdEMsNEJBQVMsV0FBVCxDQUFxQixNQUFLLGtCQUExQixFQUE4QyxNQUE5QztBQUNBLGdCQUFPLEtBQVA7QUFDRCxRQUhEO0FBSUQ7Ozt5QkEvRXdCO0FBQ3ZCLGNBQU8sRUFBRSxLQUFLLFFBQUwsQ0FBYyxnQkFBZCxDQUFGLEVBQW1DLENBQW5DLEVBQXNDLGFBQTdDO0FBQ0Q7Ozs7OzttQkFnRlksYTs7Ozs7Ozs7Ozs7Ozs7QUN0TWY7Ozs7Ozs7Ozs7OztLQUVNLE87Ozs7Ozs7Ozs7O21DQUNVLEssRUFBTztBQUNuQixXQUFNLE9BQU8sdUJBQWEsTUFBYixDQUFvQixLQUFwQixDQUFiO0FBQ0EsV0FBTSxTQUFTLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBZjtBQUNBLFdBQUksTUFBSixFQUFZO0FBQ1YsZ0JBQU8sT0FBTyxPQUFQLEVBQVA7QUFDRDtBQUNELGNBQU8sS0FBSyxJQUFMLEVBQVA7QUFDRDs7O3lDQUVtQixDLEVBQUc7QUFDckIsV0FBTSxXQUFXLDhCQUFqQjtBQUNBLFdBQU0sU0FBUztBQUNiLHdCQUFlLEtBREY7QUFFYixnQ0FBdUIsSUFGVjtBQUdiLCtCQUFzQixJQUhUO0FBSWIsb0JBQVcsRUFBRSxRQUFGLENBQVc7QUFKVCxRQUFmOztBQU9BLFNBQUUsQ0FBRixDQUFJLFlBQU07QUFDUixXQUFFLENBQUYsQ0FBSSxRQUFKLEVBQWMsSUFBZCxDQUFtQixTQUFTLElBQVQsR0FBZ0I7QUFDakMsZUFBTSxTQUFTLEVBQUUsV0FBRixDQUFjLFFBQWQsQ0FBdUIsSUFBdkIsRUFBNkIsTUFBN0IsRUFBcUMsR0FBckMsQ0FBeUMsY0FBekMsQ0FBZjtBQUNBLGFBQUUsQ0FBRixDQUFJLElBQUosRUFBVSxJQUFWLENBQWUsUUFBZixFQUF5QixNQUF6QjtBQUNELFVBSEQ7QUFJRCxRQUxEO0FBTUQ7Ozs7OzttQkFHWSxPOzs7Ozs7Ozs7OzttQkN6QlMsRzs7QUFMeEI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVlLFVBQVMsR0FBVCxHQUFlO0FBQzVCLE9BQUksT0FBTyxPQUFPLGlCQUFkLEtBQXFDLFdBQXpDLEVBQXNEO0FBQ3BELFlBQU8saUJBQVAsR0FBMkIsRUFBM0I7QUFDRDtBQUNELFVBQU8saUJBQVAsQ0FBeUIsU0FBekIsSUFBc0MsdUJBQXRDO0FBQ0EsVUFBTyxpQkFBUCxDQUF5QixNQUF6QixJQUFtQyxvQkFBbkM7QUFDQSxVQUFPLGlCQUFQLENBQXlCLE9BQXpCLElBQW9DLHFCQUFwQztBQUNBLFVBQU8saUJBQVAsQ0FBeUIsUUFBekIsSUFBcUMsc0JBQXJDO0FBQ0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNiRDs7Ozs7Ozs7Ozs7O0tBRU0sSzs7Ozs7Ozs7Ozs7bUNBQ1UsSyxFQUFPO0FBQ25CLFdBQU0sT0FBTyxNQUFNLElBQU4sQ0FBVyxLQUFYLEVBQWtCLEtBQWxCLEVBQWI7QUFDQSxjQUFPO0FBQ0wsY0FBSyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBREE7QUFFTCxjQUFLLEtBQUssSUFBTCxDQUFVLEtBQVY7QUFGQSxRQUFQO0FBSUQ7Ozs7OzttQkFHWSxLOzs7Ozs7Ozs7Ozs7OztBQ1pmOzs7Ozs7Ozs7Ozs7S0FFTSxJOzs7Ozs7Ozs7OzttQ0FDVSxLLEVBQU87QUFDbkIsY0FBTztBQUNMLGVBQU0sTUFBTSxJQUFOLENBQVcsY0FBWCxJQUE2QixNQUFNLElBQU4sQ0FBVyxjQUFYLENBQTdCLEdBQTBELE1BQU0sSUFBTixDQUFXLE1BQVgsQ0FEM0Q7QUFFTCxpQkFBUSxNQUFNLElBQU47QUFGSCxRQUFQO0FBSUQ7Ozs7OzttQkFHWSxJOzs7Ozs7Ozs7Ozs7OztBQ1hmOzs7Ozs7Ozs7Ozs7S0FFTSxVOzs7Ozs7Ozs7OzttQ0FDVSxLLEVBQU87QUFDbkIsV0FBTSxPQUFPLHVCQUFhLE1BQWIsQ0FBb0IsS0FBcEIsQ0FBYjtBQUNBLFdBQU0sU0FBUyxLQUFLLElBQUwsQ0FBVSxRQUFWLENBQWY7QUFDQSxXQUFJLE1BQUosRUFBWTtBQUNWLGdCQUFPLE9BQU8sT0FBUCxFQUFQO0FBQ0Q7QUFDRCxjQUFPLEtBQUssSUFBTCxFQUFQO0FBQ0Q7Ozt5Q0FFbUIsQyxFQUFHO0FBQ3JCLFdBQU0sV0FBVyx1REFBakI7QUFDQSxXQUFNLFNBQVM7QUFDYix5QkFBZ0IsS0FESDtBQUViLG1CQUFVO0FBQ1IsbUJBQVE7QUFDTix5QkFBWSxFQUFFLFdBQUYsQ0FBYyxVQURwQjtBQUVOLHVCQUFVO0FBRko7QUFEQSxVQUZHO0FBUWIsd0JBQWUsS0FSRjtBQVNiLGdDQUF1QixJQVRWO0FBVWIsK0JBQXNCLElBVlQ7QUFXYixvQkFBVyxJQVhFO0FBWWIsb0JBQVcsRUFBRSxRQUFGLENBQVc7QUFaVCxRQUFmOztBQWVBLFNBQUUsQ0FBRixDQUFJLFlBQU07QUFDUixXQUFFLENBQUYsQ0FBSSxRQUFKLEVBQWMsSUFBZCxDQUFtQixTQUFTLElBQVQsR0FBZ0I7QUFDakMsZUFBTSxTQUFTLEVBQUUsV0FBRixDQUFjLFFBQWQsQ0FBdUIsSUFBdkIsRUFBNkIsTUFBN0IsRUFBcUMsR0FBckMsQ0FBeUMsY0FBekMsQ0FBZjtBQUNBLGtCQUFPLEVBQVAsQ0FBVSxLQUFWLEVBQWlCLGlCQUFTO0FBQ3hCLGlCQUFJLE1BQU0sSUFBTixDQUFXLE9BQVgsS0FBdUIsRUFBdkIsSUFBNkIsTUFBTSxJQUFOLENBQVcsT0FBWCxLQUF1QixFQUFFLFFBQUYsQ0FBVyxLQUFYLEdBQW1CLEVBQTNFLEVBQStFOztBQUU3RSxxQkFBTSxNQUFOO0FBQ0Q7QUFDRixZQUxEO0FBTUEsa0JBQU8sRUFBUCxDQUFVLE9BQVYsRUFBbUIsaUJBQVM7QUFDMUIsbUJBQU0sSUFBTixDQUFXLFNBQVgsR0FBdUIsTUFBTSxJQUFOLENBQVcsU0FBWCxDQUFxQixPQUFyQixDQUE2QixnQkFBN0IsRUFBK0MsR0FBL0MsQ0FBdkI7QUFDRCxZQUZEO0FBR0EsYUFBRSxDQUFGLENBQUksSUFBSixFQUFVLElBQVYsQ0FBZSxRQUFmLEVBQXlCLE1BQXpCO0FBQ0QsVUFaRDtBQWFELFFBZEQ7QUFnQkQ7Ozs7OzttQkFHWSxVOzs7Ozs7Ozs7Ozs7QUNoRGY7Ozs7Ozs7Ozs7OztLQUVNLGlCOzs7Ozs7Ozs7Ozs7bUJBR1MsaUI7Ozs7Ozs7Ozs7OztBQ0xmOzs7Ozs7Ozs7Ozs7S0FFTSx3Qjs7Ozs7Ozs7Ozs7O21CQUdTLHdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDTGY7Ozs7Ozs7Ozs7OztLQUVNLG9COzs7QUFDSixpQ0FBWSxhQUFaLEVBQTJCLElBQTNCLEVBQWlDO0FBQUE7O0FBQUEseUdBQ3pCLGFBRHlCLEVBQ1YsSUFEVTs7QUFFL0IsV0FBSyxxQkFBTDtBQUYrQjtBQUdoQzs7Ozs2Q0FFdUI7QUFBQTs7QUFDdEIsWUFBSyxnQkFBTCxHQUF3QixFQUFFLG9DQUFGLENBQXhCO0FBQ0EsWUFBSyxjQUFMLEdBQXNCLEVBQXRCOztBQUVBLFlBQUssYUFBTCxDQUFtQixRQUFuQixDQUE0QixPQUE1QixDQUFvQyxPQUFwQyxDQUE0QyxrQkFBVTs7QUFFcEQsYUFBTSxpQkFBaUIsT0FBTyxRQUFQLEtBQXFCLFdBQXJCLEdBQ25CLFNBQVMsQ0FBVCxDQUFXLE9BQU8sSUFBbEIsQ0FEbUIsR0FFbkIsT0FBTyxJQUZYOztBQUlBLGFBQU0sb0xBRW9FLE9BQU8sUUFGM0Usd0JBR0UsY0FIRix3Q0FBTjtBQU9BLGdCQUFLLGNBQUwsQ0FBb0IsSUFBcEIsQ0FBeUIsWUFBekI7O0FBRUEsZ0JBQU8sTUFBUCxDQUFjLE9BQWQsQ0FBc0IsaUJBQVM7QUFDN0IsZUFBTSxZQUFZLE1BQU0sSUFBeEI7QUFDQSxlQUFNLFlBQVksTUFBTSxTQUF4QjtBQUNBLGVBQU0sZ0JBQWdCLE9BQU8sUUFBUCxLQUFxQixXQUFyQixHQUFtQyxTQUFTLENBQVQsQ0FBVyxTQUFYLENBQW5DLEdBQTJELFNBQWpGO0FBQ0EsZUFBTSxNQUFNLHFGQUVpQixNQUFNLFFBRnZCLDJEQUdWLGFBSFUsZ0RBRzhDLFVBQVUsTUFIeEQscUNBQVo7QUFNQSxrQkFBSyxnQkFBTCxDQUFzQixNQUF0QixDQUE2QixHQUE3QjtBQUNBLGVBQU0sUUFBUSxtREFBaUQsTUFBTSxRQUF2RCxhQUFkO0FBQ0EsZUFBTSxRQUFRLEVBQWQ7O0FBRUEscUJBQVUsT0FBVixDQUFrQixvQkFBWTtBQUM1QixpQkFBTSxlQUFlLFNBQVMsSUFBOUI7QUFDQSxpQkFBTSxtQkFBbUIsT0FBTyxRQUFQLEtBQXFCLFdBQXJCLEdBQ3JCLFNBQVMsQ0FBVCxDQUFXLFlBQVgsQ0FEcUIsR0FFckIsWUFGSjtBQUdBLGlCQUFNLFFBQVEsOEVBRXlDLFNBQVMsUUFGbEQsZ0JBR2xCLGdCQUhrQix1QkFBZDtBQU9BLG1CQUFNLElBQU4sQ0FBVyxLQUFYO0FBQ0QsWUFiRDtBQWNBLGlCQUFNLE1BQU4sQ0FBYSxLQUFiO0FBQ0Esa0JBQUssY0FBTCxDQUFvQixJQUFwQixDQUF5QixLQUF6QjtBQUNELFVBOUJEO0FBK0JELFFBOUNEOztBQWdEQSxXQUFNLE9BQU8sSUFBYjtBQUNBLFNBQUUsUUFBRixFQUFZLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGlDQUF4QixFQUEyRCxTQUFTLFlBQVQsR0FBd0I7QUFDakYsYUFBTSxRQUFRLEVBQUUsSUFBRixDQUFkO0FBQ0EsZUFBTSxTQUFOLENBQWdCLFFBQWhCO0FBQ0EsYUFBTSxZQUFZLE1BQU0sSUFBTixDQUFXLFdBQVgsQ0FBbEI7QUFDQSxhQUFJLE1BQU0sR0FBTixDQUFVLFFBQVYsQ0FBSixFQUF5QjtBQUFBO0FBQ3ZCLGVBQUUsaUNBQUYsRUFBcUMsR0FBckMsQ0FBeUMsUUFBekMsRUFBbUQsS0FBbkQ7QUFDQSxpQkFBTSwyQkFBMkIsd0JBQWpDOztBQUVBLGVBQUUsaUJBQUYsRUFBcUIsSUFBckIsQ0FBMEIsU0FBUyxFQUFULEdBQWM7QUFDdEMsbUJBQU0sUUFBUSxFQUFFLElBQUYsQ0FBZDtBQUNBLG1CQUFJLE1BQU0sUUFBTixDQUFlLHdCQUFmLENBQUosRUFBOEM7QUFDNUMsdUJBQU0sV0FBTixDQUFrQix3QkFBbEI7QUFDRDtBQUNELG1CQUFJLE1BQU0sSUFBTixDQUFXLFdBQVgsTUFBNEIsU0FBaEMsRUFBMkM7QUFDekMsdUJBQU0sUUFBTixDQUFlLHdCQUFmO0FBQ0Q7QUFDRixjQVJEOztBQVVBLG1CQUFNLEdBQU4sQ0FBVSxRQUFWLEVBQW9CLElBQXBCO0FBQ0Esa0JBQUssY0FBTCxDQUFvQixJQUFwQjtBQWZ1QjtBQWdCeEIsVUFoQkQsTUFnQk87O0FBRUwsZ0JBQUssY0FBTCxDQUFvQixJQUFwQjtBQUNEO0FBQ0QsZ0JBQU8sS0FBUDtBQUNELFFBekJEO0FBMEJBLFNBQUUsUUFBRixFQUFZLEVBQVosQ0FBZSxPQUFmLEVBQXdCLHVCQUF4QixFQUFpRCxTQUFTLFlBQVQsR0FBd0I7QUFDdkUsY0FBSyxXQUFMLENBQ0UsVUFERixFQUVFLENBQ0UsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLGNBQWIsQ0FERixFQUVFLFNBRkYsQ0FGRjtBQU9ELFFBUkQ7QUFTRDs7O2dDQUVVO0FBQ1Q7O0FBRUEsWUFBSyxXQUFMLEdBQW1CLEtBQUssYUFBTCxDQUFtQixtQkFBbkIsRUFBbkI7QUFDQSxZQUFLLFdBQUwsQ0FBaUIsTUFBakIsQ0FBd0IsS0FBSyxnQkFBN0I7O0FBRUEsWUFBSyxjQUFMLEdBQXNCLEtBQUssYUFBTCxDQUFtQixtQkFBbkIsRUFBdEI7QUFDQSxZQUFLLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBMkIsS0FBSyxjQUFoQztBQUNBLFlBQUssY0FBTCxDQUFvQixJQUFwQjs7QUFFQSxTQUFFLGlDQUFGLEVBQXFDLEdBQXJDLENBQXlDLFFBQXpDLEVBQW1ELEtBQW5EO0FBQ0Q7Ozs7OzttQkFFWSxvQjs7Ozs7Ozs7Ozs7Ozs7OztBQy9HZjs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTSx3Qjs7O0FBQ0oscUNBQVksYUFBWixFQUEyQixJQUEzQixFQUFpQztBQUFBOztBQUFBLDZHQUN6QixhQUR5QixFQUNWLElBRFU7O0FBRS9CLFdBQUssd0JBQUw7QUFDQSxXQUFLLFlBQUwsR0FBb0IsRUFBcEI7QUFIK0I7QUFJaEM7Ozs7Z0RBRTBCO0FBQ3pCLFlBQUssY0FBTCxHQUFzQixFQUFFLG9DQUFGLENBQXRCO0FBQ0Q7OztnQ0FFVTtBQUNUOztBQUVBLFlBQUssY0FBTCxHQUFzQixLQUFLLGFBQUwsQ0FBbUIsbUJBQW5CLEVBQXRCO0FBQ0EsWUFBSyxjQUFMLENBQW9CLE1BQXBCLENBQTJCLEtBQUssY0FBaEM7QUFDRDs7O21DQUVhO0FBQ1o7QUFDQSxZQUFLLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBMkIsU0FBM0I7QUFDQSxXQUFNLGNBQWMsSUFBcEI7QUFDQSxXQUFNLFNBQVMsS0FBSyxNQUFMLENBQVksc0JBQVosQ0FBbUMsTUFBbEQ7QUFDQSxXQUFNLFdBQVcsS0FBSyxNQUFMLENBQVksc0JBQVosQ0FBbUMsUUFBcEQ7O0FBRUEsV0FBTSxhQUFhO0FBQ2pCLDZCQUFrQixPQUFPLEdBQXpCLFVBQWlDLE9BQU8sRUFEdkI7QUFFakIsZUFBTSxlQUZXO0FBR2pCLGdCQUFPO0FBQ0wsbUJBQVE7QUFESCxVQUhVO0FBTWpCLG1CQUFVO0FBTk8sUUFBbkI7QUFRQSxXQUFNLGVBQWU7QUFDbkIsK0JBQW9CLFNBQVMsR0FBN0IsVUFBcUMsU0FBUyxFQUQzQjtBQUVuQixlQUFNLFVBRmE7QUFHbkIsZ0JBQU87QUFDTCxtQkFBUTtBQURILFVBSFk7QUFNbkIsbUJBQVU7QUFOUyxRQUFyQjs7QUFTQSxXQUFNLGlCQUFpQixLQUFLLE9BQUwsQ0FBYSw0QkFBYixDQUF2QjtBQUNBLHNCQUFlLElBQWYsQ0FBb0IsU0FBUyxJQUFULEdBQWdCO0FBQ2xDLGFBQU0sU0FBUyx5QkFBeUIsYUFBekIsQ0FBdUMsRUFBRSxJQUFGLENBQXZDLENBQWY7QUFDQSxvQkFBVyxRQUFYLENBQW9CLElBQXBCLENBQXlCLE9BQU8sSUFBaEM7QUFDQSxnQkFBTyxlQUFQLENBQXVCLE9BQXZCLENBQStCLGtCQUFVO0FBQ3ZDLHdCQUFhLFFBQWIsQ0FBc0IsSUFBdEIsQ0FBMkIsTUFBM0I7QUFDRCxVQUZEO0FBR0QsUUFORDs7QUFRQSxZQUFLLGFBQUwsR0FBcUIsQ0FDbkIsVUFEbUIsRUFFbkIsWUFGbUIsQ0FBckI7QUFJQSxZQUFLLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBMkI7QUFDekIsZUFBTTtBQUNKLGlCQUFNLEtBQUs7QUFEUDtBQURtQixRQUEzQjs7Ozs7Ozs7O0FBYUEsWUFBSyxZQUFMLEdBQW9CLEtBQUssTUFBTCxDQUFZLHNCQUFoQztBQUNEOzs7cUNBOEZlO0FBQUE7O0FBQ2QsV0FBTSxTQUFTLEVBQWY7QUFDQSxjQUFPLElBQVAsQ0FBWSxLQUFLLGdCQUFqQixFQUFtQyxPQUFuQyxDQUEyQyxxQkFBYTtBQUN0RCxhQUFNLFNBQVMsT0FBSyxnQkFBTCxDQUFzQixTQUF0QixDQUFmO0FBQ0EsZ0JBQU8sT0FBTyxHQUFkLElBQXFCLE9BQU8sU0FBUCxFQUFyQjtBQUNELFFBSEQ7QUFJQSxjQUFPLE1BQVA7QUFDRDs7OzBDQUVvQjtBQUFBOztBQUNuQixXQUFNLFNBQVMsRUFBZjtBQUNBLGNBQU8sSUFBUCxDQUFZLEtBQUssZ0JBQWpCLEVBQW1DLE9BQW5DLENBQTJDLHFCQUFhO0FBQ3RELGFBQU0sU0FBUyxPQUFLLGdCQUFMLENBQXNCLFNBQXRCLENBQWY7QUFDQSxnQkFBTyxPQUFPLEdBQWQsSUFBcUIsT0FBTyxhQUFQLEVBQXJCO0FBQ0QsUUFIRDtBQUlBLGNBQU8sTUFBUDtBQUNEOzs7bUNBNUdvQixhLEVBQWU7QUFDbEMsV0FBTSxPQUFPLHlCQUF5QixpQkFBekIsQ0FBMkMsYUFBM0MsQ0FBYjtBQUNBLFlBQUssS0FBTCxHQUFhO0FBQ1gsaUJBQVE7QUFERyxRQUFiO0FBR0EsWUFBSyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsWUFBSyxFQUFMLGVBQW9CLEtBQUssU0FBekI7QUFDQSxXQUFNLGtCQUFrQixFQUF4Qjs7O0FBR0EsV0FBTSxtQkFBbUIsY0FBYyxJQUFkLENBQW1CLHFCQUFuQixDQUF6QjtBQUNBLHdCQUFpQixJQUFqQixDQUFzQixTQUFTLElBQVQsR0FBZ0I7QUFDcEMsYUFBTSxrQkFBa0IsRUFBRSxJQUFGLENBQXhCO0FBQ0EsYUFBTSxTQUFTLHlCQUF5QixxQkFBekIsQ0FBK0MsZUFBL0MsQ0FBZjtBQUNBLGFBQU0scUJBQXFCLE9BQU8sY0FBbEM7QUFDQSxnQkFBTyxlQUFQLENBQXVCLE9BQXZCLENBQStCLGtCQUFVO0FBQ3ZDLDJCQUFnQixJQUFoQixDQUFxQixNQUFyQjtBQUNELFVBRkQ7QUFHQSxjQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLGtCQUFuQjtBQUNELFFBUkQ7O0FBVUEsY0FBTztBQUNMLG1CQURLO0FBRUw7QUFGSyxRQUFQO0FBSUQ7OzsyQ0FFNEIsZSxFQUFpQjtBQUM1QyxXQUFNLGdCQUFnQixnQkFBZ0IsSUFBaEIsQ0FBcUIsZUFBckIsQ0FBdEI7QUFDQSxXQUFNLGVBQWUsZ0JBQWdCLElBQWhCLENBQXFCLGNBQXJCLENBQXJCO0FBQ0EsV0FBTSxPQUFPO0FBQ1gsZ0JBQ0UsaUJBQWlCLHdEQUFqQixHQUNJLHFCQURKLGtCQUVpQixhQUhuQixjQURXO0FBTVgsZUFBTSxvQkFOSztBQU9YLHFDQVBXO0FBUVgsbUNBUlc7QUFTWCx1QkFBYyxnQkFBZ0IsSUFBaEIsQ0FBcUIsY0FBckI7QUFUSCxRQUFiO0FBV0EsV0FBTSxrQkFBa0IsRUFBeEI7QUFDQSxXQUFNLFdBQVcsZ0JBQWdCLElBQWhCLENBQXFCLCtCQUFyQixDQUFqQjtBQUNBLGdCQUFTLElBQVQsQ0FBYyxTQUFTLElBQVQsR0FBZ0I7QUFDNUIsYUFBTSxTQUFTLHlCQUF5QixxQkFBekIsQ0FBK0MsRUFBRSxJQUFGLENBQS9DLENBQWY7QUFDQSx5QkFBZ0IsSUFBaEIsQ0FBcUIsTUFBckI7QUFDRCxRQUhEO0FBSUEsV0FBSSxnQkFBZ0IsTUFBaEIsR0FBeUIsQ0FBN0IsRUFBZ0M7QUFDOUIsY0FBSyxTQUFMLEdBQWlCLElBQWpCO0FBQ0Q7QUFDRCxjQUFPO0FBQ0wseUJBQWdCLElBRFg7QUFFTDtBQUZLLFFBQVA7QUFJRDs7OzJDQUU0QixlLEVBQWlCO0FBQzVDLFdBQU0sT0FBTyx5QkFBeUIsaUJBQXpCLENBQTJDLGVBQTNDLENBQWI7QUFDQSxZQUFLLEtBQUwsR0FBYTtBQUNYLGlCQUFRO0FBREcsUUFBYjtBQUdBLFlBQUssUUFBTCxHQUFnQixFQUFoQjtBQUNBLFdBQU0sbUJBQW1CLGdCQUFnQixJQUFoQixDQUFxQixxQkFBckIsQ0FBekI7QUFDQSx3QkFBaUIsSUFBakIsQ0FBc0IsU0FBUyxJQUFULEdBQWdCO0FBQ3BDLGNBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIseUJBQXlCLDZCQUF6QixDQUF1RCxFQUFFLElBQUYsQ0FBdkQsQ0FBbkI7QUFDRCxRQUZEO0FBR0EsY0FBTyxJQUFQO0FBQ0Q7OzttREFFb0MsZSxFQUFpQjtBQUNwRCxXQUFNLGdCQUFnQixnQkFBZ0IsSUFBaEIsQ0FBcUIsZUFBckIsQ0FBdEI7QUFDQSxXQUFNLGVBQWUsZ0JBQWdCLElBQWhCLENBQXFCLGNBQXJCLENBQXJCO0FBQ0EsY0FBTztBQUNMLDhCQUFtQixhQURkO0FBRUwscUNBRks7QUFHTCxtQ0FISztBQUlMLGVBQU0sb0JBSkQ7QUFLTCx1QkFBYyxnQkFBZ0IsSUFBaEIsQ0FBcUIsY0FBckI7QUFMVCxRQUFQO0FBT0Q7Ozt1Q0FFd0IsSyxFQUFPO0FBQzlCLGNBQU87QUFDTCxlQUFNLE1BQU0sSUFBTixDQUFXLG9CQUFYLENBREQ7QUFFTCxlQUFNLGdCQUZEO0FBR0wsbUJBQVUsTUFBTSxJQUFOLENBQVcsVUFBWCxDQUhMO0FBSUwsb0JBQVcsTUFBTSxJQUFOLENBQVcsV0FBWCxDQUpOO0FBS0wsMEJBQWlCLE1BQU0sSUFBTixDQUFXLGlCQUFYLENBTFo7QUFNTCxlQUFNO0FBTkQsUUFBUDtBQVFEOzs7Ozs7bUJBb0JZLHdCOzs7Ozs7Ozs7Ozs7QUN4TGY7Ozs7Ozs7Ozs7OztLQUVNLHdCOzs7Ozs7Ozs7Ozs7bUJBR1Msd0I7Ozs7Ozs7O0FDTGYsUUFBTyxPQUFQLEdBQWlCLFNBQVMsTUFBVCxDQUFpQixNQUFqQixFQUF5QixXQUF6QixFQUFzQzs7Ozs7Ozs7Ozs7Ozs7O0FBZXJELE9BQUksT0FBTyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ2pDLGNBQVMsRUFBVDtBQUNEOztBQUVELE9BQUksS0FBSjtBQUNBLE9BQUksY0FBYyxTQUFkLFdBQWMsQ0FBVSxJQUFWLEVBQWdCLFFBQWhCLEVBQTBCO0FBQzFDLFlBQU8sU0FBUyxJQUFULEVBQWUsRUFBZixFQUFtQixRQUFuQixDQUE0QixFQUE1QixDQUFQLEM7QUFDQSxTQUFJLFdBQVcsS0FBSyxNQUFwQixFQUE0Qjs7QUFFMUIsY0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsR0FBYyxRQUF6QixDQUFQO0FBQ0Q7QUFDRCxTQUFJLFdBQVcsS0FBSyxNQUFwQixFQUE0Qjs7QUFFMUIsY0FBTyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQXJCLENBQU4sRUFBb0MsSUFBcEMsQ0FBeUMsR0FBekMsSUFBZ0QsSUFBdkQ7QUFDRDtBQUNELFlBQU8sSUFBUDtBQUNELElBWEQ7O0FBYUEsT0FBSSxVQUFXLE9BQU8sTUFBUCxLQUFrQixXQUFsQixHQUFnQyxNQUFoQyxHQUF5QyxNQUF4RDtBQUNBLFdBQVEsUUFBUixHQUFtQixRQUFRLFFBQVIsSUFBb0IsRUFBdkM7QUFDQSxPQUFJLFdBQVcsUUFBUSxRQUF2QjtBQUNBLFlBQVMsR0FBVCxHQUFlLFNBQVMsR0FBVCxJQUFnQixFQUEvQjs7QUFFQSxPQUFJLENBQUMsU0FBUyxHQUFULENBQWEsVUFBbEIsRUFBOEI7O0FBRTVCLGNBQVMsR0FBVCxDQUFhLFVBQWIsR0FBMEIsS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWdCLFNBQTNCLENBQTFCO0FBQ0Q7QUFDRCxZQUFTLEdBQVQsQ0FBYSxVQUFiOzs7QUFHQSxXQUFRLE1BQVI7QUFDQSxZQUFTLFlBQVksU0FBUyxJQUFJLElBQUosR0FBVyxPQUFYLEtBQXVCLElBQWhDLEVBQXNDLEVBQXRDLENBQVosRUFBdUQsQ0FBdkQsQ0FBVDs7QUFFQSxZQUFTLFlBQVksU0FBUyxHQUFULENBQWEsVUFBekIsRUFBcUMsQ0FBckMsQ0FBVDtBQUNBLE9BQUksV0FBSixFQUFpQjs7QUFFZixjQUFTLENBQUMsS0FBSyxNQUFMLEtBQWdCLEVBQWpCLEVBQXFCLE9BQXJCLENBQTZCLENBQTdCLEVBQWdDLFFBQWhDLEVBQVQ7QUFDRDs7QUFFRCxVQUFPLEtBQVA7QUFDRCxFQXZERCxDOzs7Ozs7Ozs7Ozs7Ozs7O0tDQU0sTztBQUNKLHNCQUFjO0FBQUE7O0FBQ1osVUFBSyxhQUFMLEdBQXFCLEVBQXJCOztBQUVBLFNBQUksU0FBUyxRQUFULENBQWtCLElBQXRCLEVBQTRCO0FBQzFCLFdBQU0sVUFBVSxTQUFTLFFBQVQsQ0FBa0IsSUFBbEIsQ0FBdUIsS0FBdkIsQ0FBNkIsMEJBQTdCLENBQWhCO0FBQ0EsV0FBSSxXQUFXLFFBQVEsTUFBUixLQUFtQixDQUFsQyxFQUFxQztBQUNuQyxhQUFNLGdCQUFnQixLQUFLLEtBQUwsQ0FBVyxtQkFBbUIsUUFBUSxDQUFSLENBQW5CLENBQVgsQ0FBdEI7O0FBRG1DO0FBQUE7QUFBQTs7QUFBQTtBQUduQyxnQ0FBbUIsYUFBbkIsOEhBQWtDO0FBQUEsaUJBQXZCLElBQXVCOztBQUNoQyxpQkFBSSxLQUFLLElBQVQsRUFBZTtBQUNiLG9CQUFLLGFBQUwsQ0FBbUIsS0FBSyxJQUF4QixJQUFnQyxLQUFLLElBQUwsSUFBYSxFQUE3QztBQUNEO0FBQ0Y7QUFQa0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFwQztBQUNGO0FBQ0Y7Ozs7Z0NBRVUsSSxFQUFNO0FBQ2YsY0FBTyxLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsS0FBNEIsS0FBbkM7QUFDRDs7Ozs7O21CQUdZLE87Ozs7Ozs7Ozs7Ozs7O0FDdkJmOzs7O0FBQ0E7Ozs7Ozs7O0tBRU0sVztBQUVKLDBCQUFjO0FBQUE7O0FBQ1osVUFBSyxNQUFMO0FBQ0EsVUFBSyxVQUFMO0FBQ0Q7Ozs7a0NBRVk7QUFBQTs7QUFDWCwwQkFBUyxtQkFBVCxDQUE2QixJQUE3QjtBQUNBLFlBQUssWUFBTCxHQUFvQixPQUFPLE1BQTNCOztBQUVBLFlBQUssYUFBTCxHQUFxQixLQUFLLFlBQUwsQ0FBa0IsZUFBdkM7QUFDQSxZQUFLLGFBQUwsR0FBcUIsS0FBSyxhQUFMLENBQW1CLE9BQXhDO0FBQ0EsWUFBSyxxQkFBTCxHQUE2QixLQUE3QjtBQUNBLFlBQUssVUFBTDtBQUNBLFNBQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsWUFBTTtBQUNyQixlQUFLLGNBQUw7QUFDQSxnQkFBTyxJQUFQO0FBQ0QsUUFIRDtBQUlBLFNBQUUsWUFBTTtBQUNOLGVBQUssYUFBTCxDQUFtQixXQUFuQjtBQUNBLGVBQUssYUFBTCxDQUFtQixRQUFuQixDQUE0QixtQkFBNUIsQ0FBZ0QsTUFBaEQ7QUFDRCxRQUhEO0FBSUQ7OztrREFVNEI7QUFDM0IsWUFBSyxvQkFBTCxHQUE0QixFQUE1QjtBQUNBLFdBQU0sT0FBTyxJQUFiO0FBQ0EsU0FBRSxLQUFLLFFBQUwsQ0FBYywwQkFBZCxDQUFGLEVBQTZDLElBQTdDLENBQWtELFNBQVMsSUFBVCxHQUFnQjtBQUNoRSxhQUFJLENBQUMsS0FBSyxxQkFBVixFQUFpQztBQUMvQixnQkFBSyxxQkFBTCxHQUE2QixFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsaUJBQWIsQ0FBN0I7QUFDRDtBQUNELGNBQUssb0JBQUwsQ0FBMEIsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLGlCQUFiLENBQTFCLElBQTZELEVBQUUsSUFBRixDQUE3RDtBQUNELFFBTEQ7QUFNRDs7OzJDQUVxQjtBQUFBOztBQUNwQixXQUFJLENBQUMsS0FBSyxpQkFBVixFQUE2QjtBQUFBO0FBQzNCLGVBQUksWUFBWSxDQUFoQjtBQUNBLGFBQUUsb0JBQUYsRUFBd0IsSUFBeEIsQ0FBNkIsU0FBUyxJQUFULEdBQWdCO0FBQzNDLGlCQUFNLFFBQVEsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLGdCQUFiLENBQWQ7QUFDQSxpQkFBSSxRQUFRLFNBQVosRUFBdUI7QUFDckIsMkJBQVksS0FBWjtBQUNEO0FBQ0YsWUFMRDtBQU1BLGtCQUFLLGlCQUFMLEdBQXlCLFNBQXpCO0FBUjJCO0FBUzVCO0FBQ0QsWUFBSyxpQkFBTDtBQUNBLGNBQU8sS0FBSyxpQkFBWjtBQUNEOzs7c0NBRWdCO0FBQ2YsV0FBSSxLQUFLLGlCQUFMLElBQTBCLEtBQUssU0FBbkMsRUFBOEM7QUFDNUMsY0FBSyxTQUFMLENBQWUsR0FBZixDQUNFLEtBREYsRUFFRSxLQUFLLGlCQUFMLENBQXVCLFFBQXZCLEdBQWtDLEdBQWxDLEdBQ0ksS0FBSyxpQkFBTCxDQUF1QixNQUF2QixFQURKLEdBRUksS0FBSyxTQUFMLENBQWUsTUFBZixFQUpOO0FBTUEsY0FBSyxpQkFBTCxDQUF1QixRQUF2QixDQUFnQyxxQ0FBaEM7QUFDRDtBQUNGOzs7a0NBRVk7QUFDWCxZQUFLLFNBQUwsR0FBaUIsMG1CQUFqQjtBQW1CQSxTQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLEtBQUssU0FBdEI7QUFDQSxZQUFLLFNBQUwsQ0FBZSxJQUFmO0FBQ0EsV0FBTSxPQUFPLElBQWI7QUFDQSxTQUFFLEtBQUssUUFBTCxDQUFjLDBCQUFkLENBQUYsRUFBNkMsRUFBN0MsQ0FBZ0Q7QUFDOUMscUJBQVksU0FBUyxPQUFULEdBQW1CO0FBQzdCLGVBQU0sUUFBUSxFQUFFLElBQUYsQ0FBZDtBQUNBLGlCQUFNLFFBQU4sQ0FBZSwwQ0FBZjtBQUNELFVBSjZDO0FBSzlDLHFCQUFZLFNBQVMsUUFBVCxHQUFvQjtBQUM5QixlQUFNLFFBQVEsRUFBRSxJQUFGLENBQWQ7QUFDQSxpQkFBTSxXQUFOLENBQWtCLDBDQUFsQjtBQUNELFVBUjZDO0FBUzlDLGdCQUFPLFNBQVMsWUFBVCxHQUF3QjtBQUM3QixlQUFNLFFBQVEsRUFBRSxJQUFGLENBQWQ7QUFDQSxnQkFBSyxjQUFMLENBQW9CLEtBQXBCO0FBQ0Q7QUFaNkMsUUFBaEQsRUFhRyxvQkFiSDtBQWNBLFlBQUssU0FBTCxDQUNHLEVBREgsQ0FDTSxPQUROLEVBQ2Usa0NBRGYsRUFDbUQsWUFBTTtBQUNyRCxhQUFJLEtBQUssaUJBQVQsRUFBNEI7QUFDMUIsZUFBTSxRQUFRLEtBQUssaUJBQUwsQ0FBdUIsSUFBdkIsQ0FBNEIsb0JBQTVCLENBQWQ7QUFDQSxlQUFJLE1BQU0sTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN0QixrQkFBSyxpQkFBTCxDQUF1QixZQUF2QixDQUFvQyxLQUFwQztBQUNBLGtCQUFLLGNBQUw7QUFDRDtBQUNGO0FBQ0QsZ0JBQU8sS0FBUDtBQUNELFFBVkgsRUFXRyxFQVhILENBV00sT0FYTixFQVdlLG9DQVhmLEVBV3FELFlBQU07QUFDdkQsYUFBSSxLQUFLLGlCQUFULEVBQTRCO0FBQzFCLGVBQU0sUUFBUSxLQUFLLGlCQUFMLENBQXVCLElBQXZCLENBQTRCLG9CQUE1QixDQUFkO0FBQ0EsZUFBSSxNQUFNLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIsa0JBQUssaUJBQUwsQ0FBdUIsV0FBdkIsQ0FBbUMsS0FBbkM7QUFDQSxrQkFBSyxjQUFMO0FBQ0Q7QUFDRjtBQUNELGdCQUFPLEtBQVA7QUFDRCxRQXBCSCxFQXFCRyxFQXJCSCxDQXFCTSxPQXJCTixFQXFCZSxnQ0FyQmYsRUFxQmlELFlBQU07QUFDbkQsYUFBSSxLQUFLLGlCQUFULEVBQTRCO0FBQzFCLGVBQU0sa0JBQWtCLEtBQUssaUJBQUwsQ0FBdUIsS0FBdkIsRUFBeEI7QUFDQSwyQkFDRyxJQURILENBRUksZ0JBRkosRUFHSSxLQUFLLG1CQUFMLEVBSEosRUFLRyxXQUxILENBS2UsS0FBSyxpQkFMcEI7QUFNQSxnQkFBSyxjQUFMLENBQW9CLGVBQXBCO0FBQ0Q7QUFDRCxnQkFBTyxLQUFQO0FBQ0QsUUFqQ0gsRUFrQ0csRUFsQ0gsQ0FrQ00sT0FsQ04sRUFrQ2UsaUNBbENmLEVBa0NrRCxZQUFNO0FBQ3BELGFBQUksS0FBSyxpQkFBVCxFQUE0QjtBQUMxQixlQUFJLFFBQVEsZ0RBQVIsQ0FBSixFQUErRDtBQUM3RCxrQkFBSyxpQkFBTCxDQUF1QixNQUF2QjtBQUNBLGtCQUFLLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0Esa0JBQUssU0FBTCxDQUFlLElBQWYsRztBQUNEO0FBQ0Y7QUFDRCxnQkFBTyxLQUFQO0FBQ0QsUUEzQ0g7QUE0Q0Q7OztvQ0FFYyxTLEVBQVc7QUFDeEIsV0FBSSxLQUFLLGlCQUFMLEtBQTJCLFNBQS9CLEVBQTBDO0FBQ3hDO0FBQ0Q7QUFDRCxXQUFJLEtBQUssaUJBQVQsRUFBNEI7QUFDMUIsY0FBSyxpQkFBTCxDQUF1QixXQUF2QixDQUFtQyxxQ0FBbkM7QUFDRDtBQUNELFlBQUssaUJBQUwsR0FBeUIsU0FBekI7QUFDQSxZQUFLLGNBQUw7QUFDQSxZQUFLLFNBQUwsQ0FBZSxJQUFmO0FBQ0Q7OztzQ0FFZ0IsUSxFQUFVO0FBQUE7O0FBQ3pCLFdBQU0sU0FBUyxFQUFmO0FBQ0EsV0FBTSxPQUFPLElBQWI7QUFDQSxjQUFPLElBQVAsQ0FBWSxLQUFLLGVBQWpCLEVBQWtDLE9BQWxDLENBQTBDLDJCQUFtQjtBQUMzRCxhQUFNLFdBQVcsT0FBSyxlQUFMLENBQXFCLGVBQXJCLENBQWpCO0FBQ0EsZ0JBQU8sU0FBUyxJQUFULENBQWMsaUJBQWQsQ0FBUCxJQUEyQyxLQUFLLHNCQUFMLENBQTRCLFFBQTVCLENBQTNDO0FBQ0QsUUFIRDtBQUlBLFlBQUssYUFBTCxDQUFtQixRQUFuQixFQUE2QixDQUFDLE1BQUQsQ0FBN0I7QUFDRDs7OzRDQUVzQixlLEVBQWlCO0FBQ3RDLFdBQU0sU0FBUyxFQUFmO0FBQ0EsY0FBTyxlQUFQLEdBQXlCLGdCQUFnQixJQUFoQixDQUFxQixpQkFBckIsQ0FBekI7QUFDQSxjQUFPLFNBQVAsR0FBbUIsRUFBbkI7QUFDQSx1QkFBZ0IsSUFBaEIsQ0FBcUIsMEJBQXJCLEVBQWlELElBQWpELENBQXNELFNBQVMsSUFBVCxHQUFnQjtBQUNwRSxhQUFNLFdBQVcsRUFBakI7QUFDQSxrQkFBUyxLQUFULEdBQWlCLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxlQUFiLENBQWpCO0FBQ0EsZ0JBQU8sU0FBUCxDQUFpQixFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsZUFBYixDQUFqQixJQUFrRCxRQUFsRDtBQUNELFFBSkQ7QUFLQSxjQUFPLE1BQVA7QUFDRDs7Ozs7Ozs7OzhCQU1RO0FBQ1AsV0FBTSxlQUFlLE9BQU8sbUJBQVAsSUFBOEIsRUFBbkQ7QUFDQSxXQUFNLFdBQVc7QUFDZixxQ0FBNEI7QUFEYixRQUFqQjtBQUdBLGNBQU8sSUFBUCxDQUFZLFlBQVosRUFBMEIsT0FBMUIsQ0FBa0MsZUFBTztBQUN2QyxrQkFBUyxHQUFULElBQWdCLGFBQWEsR0FBYixDQUFoQjtBQUNELFFBRkQ7QUFHQSxZQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDRDs7O21DQUVhLEksRUFBTSxJLEVBQU07QUFDeEIsMEJBQVMsV0FBVCxDQUFxQixLQUFLLFlBQTFCLEVBQXdDLElBQXhDLEVBQThDLElBQTlDO0FBQ0Q7Ozs2Q0FtQnVCO0FBQ3RCLGNBQU87QUFDTCw0QkFBbUIsS0FBSyxhQUFMLENBQW1CLFNBQW5CLEVBRGQ7QUFFTCwyQkFBa0IsS0FBSyxhQUFMLENBQ2YsWUFEZSxDQUNGLEdBREUsQ0FDRSxnQkFERixFQUNvQixrQkFEcEI7QUFGYixRQUFQO0FBS0Q7Ozs4QkFFUSxZLEVBQWMsVSxFQUFZOztBQUVqQyxXQUFNLGNBQWMsc0JBQVMsS0FBVCxDQUFwQjtBQUNBLFdBQU0sVUFBVTtBQUNkLG1CQUFVLEtBQUsscUJBQUwsRUFESTtBQUVkLGlCQUFRO0FBRk0sUUFBaEI7QUFJQSxXQUFJLFFBQVEsUUFBUixDQUFpQixnQkFBakIsQ0FBa0MsY0FBbEMsQ0FBaUQsVUFBakQsTUFBaUUsS0FBckUsRUFBNEU7QUFDMUUsaUJBQVEsUUFBUixDQUFpQixnQkFBakIsQ0FBa0MsVUFBbEMsSUFBZ0QsRUFBaEQ7QUFDRDs7QUFFRCxlQUFRLFFBQVIsQ0FBaUIsZ0JBQWpCLENBQWtDLFVBQWxDLEVBQThDLElBQTlDLENBQW1ELFdBQW5ELElBQWtFO0FBQ2hFLG1CQUFVO0FBRHNELFFBQWxFO0FBR0EsZUFBUSxRQUFSLENBQWlCLGdCQUFqQixDQUFrQyxVQUFsQyxFQUE4QyxjQUE5QyxDQUE2RCxJQUE3RCxDQUFrRSxXQUFsRTtBQUNBLG1CQUFZLFVBQVosQ0FBdUIsT0FBdkI7O0FBRUEsY0FBTyxLQUFQO0FBQ0Q7Ozs0QkFFTTtBQUNMLFdBQU0sT0FBTztBQUNYLG1CQUFVLEtBQUsscUJBQUwsRUFEQztBQUVYLGlCQUFRO0FBRkcsUUFBYjtBQUlBLG1CQUFZLFVBQVosQ0FBdUIsSUFBdkI7QUFDQSxjQUFPLEtBQVA7QUFDRDs7O3lCQTFPcUI7QUFDcEIsV0FBSSxLQUFLLG9CQUFULEVBQStCO0FBQzdCLGdCQUFPLEtBQUssb0JBQVo7QUFDRDtBQUNELFlBQUssMEJBQUw7QUFDQSxjQUFPLEtBQUssb0JBQVo7QUFDRDs7O2dDQWdMaUIsSSxFQUFNO0FBQ3RCLFdBQU0sUUFBUSxFQUFFLDZCQUFGLENBQWQ7QUFDQSxXQUFNLFNBQVMsRUFBRSxxQ0FBRixDQUFmO0FBQ0EsV0FBTSxRQUFRLEVBQUUsdUJBQUYsQ0FBZDs7QUFFQSxhQUNHLElBREgsQ0FDUSxNQURSLEVBQ2dCLEVBQUUsdUJBQUYsRUFBMkIsSUFBM0IsQ0FBZ0MsU0FBaEMsQ0FEaEIsRUFFRyxHQUZILENBRU8sRUFBRSx1QkFBRixFQUEyQixJQUEzQixDQUFnQyxTQUFoQyxDQUZQLEVBR0csUUFISCxDQUdZLEtBSFo7O0FBS0EsY0FDRyxHQURILENBQ08sS0FBSyxTQUFMLENBQWUsSUFBZixDQURQLEVBRUcsUUFGSCxDQUVZLEtBRlo7O0FBSUEsYUFBTSxDQUFOLEVBQVMsTUFBVDtBQUNEOzs7Ozs7bUJBd0NZLFc7Ozs7Ozs7O0FDelFmLDBDIiwiZmlsZSI6InZpc3VhbC1idWlsZGVyL3NjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDMwNDJjODBjNDE5MzVmNWY3MTc2XG4gKiovIiwiaW1wb3J0ICcuL2J1bmRsZS5jc3MnO1xuXG5pbXBvcnQgRnJvbnRlbmRNb25zdGVyIGZyb20gJy4vRnJvbnRlbmRNb25zdGVyJztcblxud2luZG93LkZyb250ZW5kTW9uc3RlciA9IG5ldyBGcm9udGVuZE1vbnN0ZXIoKTtcbi8vXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9idW5kbGUuanNcbiAqKi8iLCJpbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi8uLi92aXN1YWwtZnJhbWUvRnJhbWVBcGknO1xuXG5jbGFzcyBCYXNlRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2aXN1YWxCdWlsZGVyLCBuYW1lKSB7XG4gICAgdGhpcy52aXN1YWxCdWlsZGVyID0gdmlzdWFsQnVpbGRlcjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFyZ2V0ID0gJCh0aGlzLnZpc3VhbEJ1aWxkZXIuc2V0dGluZ3NbJ2ZyYW1lLXNlbGVjdG9yJ10pWzBdLmNvbnRlbnRXaW5kb3c7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICAvLyBkZWFjdGl2YXRlIGN1cnJlbnQgc2VsZWN0ZWQgZW52aXJvbm1lbnRcbiAgICBpZiAodGhpcy5uYW1lID09PSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3VycmVudEVudmlyb25tZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnZpc3VhbEJ1aWxkZXIuY3VycmVudEVudmlyb25tZW50KSB7XG4gICAgICB0aGlzLnZpc3VhbEJ1aWxkZXIuZW52aXJvbm1lbnRzLmdldCh0aGlzLnZpc3VhbEJ1aWxkZXIuY3VycmVudEVudmlyb25tZW50KS5kZWFjdGl2YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRhcmdldCQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0LiQ7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMudmlzdWFsQnVpbGRlci5jbGVhclN0YWNrYWJsZSgpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2UoZnVuYywgYXJncykge1xuICAgIHJldHVybiBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLnRhcmdldCwgZnVuYywgYXJncyk7XG4gIH1cblxuICBwYWdlQ2hhbmdlZCgpIHtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VFbnZpcm9ubWVudDtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvQmFzZUVudmlyb25tZW50LmpzXG4gKiovIiwiY2xhc3MgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuXG4gIH1cblxuICBpbml0aWFsaXplRWRpdGFibGVzKHcpIHtcblxuICB9XG5cbiAgc3RhdGljIGdldCBmcmFtZSQoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5Gcm9udGVuZE1vbnN0ZXIuYnVpbGRlci5mcmFtZUNvbnRlbnRXaW5kb3cuJDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlRWRpdGFibGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL0Jhc2VFZGl0YWJsZS5qc1xuICoqLyIsImNsYXNzIEZyYW1lQXBpIHtcbiAgc3RhdGljIGdldCBpc0llKCkge1xuICAgIC8qIGdsb2JhbCBpcyAqL1xuICAgIGlmICh0eXBlb2YoaXMpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGlzLmllKCk7Ly8gfHwgaXMuZWRnZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGljIGJpbmRNZXNzYWdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrSGFuZGxlcihldmVudCkge1xuICAgICAgbGV0IG1lc3NhZ2UgPSBudWxsO1xuICAgICAgaWYgKEZyYW1lQXBpLmlzSWUpIHtcbiAgICAgICAgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXNzYWdlID0gZXZlbnQuZGF0YTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxpc3RlbmVyW21lc3NhZ2UuZnVuY10pIHtcbiAgICAgICAgbGlzdGVuZXJbbWVzc2FnZS5mdW5jXS5hcHBseShsaXN0ZW5lciwgbWVzc2FnZS5hcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSUU4XG4gICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29ubWVzc2FnZScsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgc2VuZE1lc3NhZ2UodGFyZ2V0LCBmdW5jLCBhcmdzKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGZ1bmMsXG4gICAgICBhcmdzXG4gICAgfTtcbiAgICBjb25zdCBtZXNzYWdlID0gRnJhbWVBcGkuaXNJZSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogZGF0YTtcblxuICAgIHRhcmdldC5wb3N0TWVzc2FnZShtZXNzYWdlLCAnKicpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyYW1lQXBpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaS5qc1xuICoqLyIsImltcG9ydCBWaXN1YWxCdWlsZGVyIGZyb20gJy4vY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXInO1xuaW1wb3J0IFZpc3VhbEZyYW1lIGZyb20gJy4vY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUnO1xuaW1wb3J0IEhhc2hBcGkgZnJvbSAnLi9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9IYXNoQXBpJztcblxuY2xhc3MgRnJvbnRlbmRNb25zdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLnZpc3VhbEJ1bGRlciA9IG51bGw7XG4gICAgdGhpcy5oYXNoQXBpID0gbmV3IEhhc2hBcGkoKTtcbiAgICBpZiAod2luZG93LnBhcmVudCAhPT0gd2luZG93ICYmIHdpbmRvdy5wYXJlbnQuRnJvbnRlbmRNb25zdGVyKSB7XG4gICAgICBpZiAod2luZG93LnBhcmVudC5Gcm9udGVuZE1vbnN0ZXIuaGFzQnVpbGRlcikge1xuICAgICAgICB0aGlzLlZpc3VhbEZyYW1lID0gbmV3IFZpc3VhbEZyYW1lKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qIGdsb2JhbCBzbW9vdGhTY3JvbGw6IGZhbHNlKi9cbiAgICBpZiAodHlwZW9mKHNtb290aFNjcm9sbCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzbW9vdGhTY3JvbGwuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIFZpc3VhbEJ1aWxkZXIgY2xhc3MgaW5zdGFuY2VcbiAgICogQHJldHVybnMgVmlzdWFsQnVpbGRlclxuICAgKi9cbiAgZ2V0IGJ1aWxkZXIoKSB7XG4gICAgaWYgKHRoaXMudmlzdWFsQnVsZGVyID09PSBudWxsKSB7XG4gICAgICB0aGlzLnZpc3VhbEJ1bGRlciA9IG5ldyBWaXN1YWxCdWlsZGVyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZpc3VhbEJ1bGRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB0aGlzIEZyb250ZW5kTW9uc3RlciBpbnN0YW5jZSBoYXMgVmlzdWFsIEJ1aWxkZXIgb24gcGFnZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBoYXNCdWlsZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkZXIuJGJ1aWxkZXIubGVuZ3RoID09PSAxO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgRnJvbnRlbmRNb25zdGVyIHNldHRpbmdzLlxuICAgKiBVc2VzIEZyb250ZW5kTW9uc3RlclNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAqL1xuICBwYXJhbXMoKSB7XG4gICAgY29uc3QgdXNlclNldHRpbmdzID0gd2luZG93LkZyb250ZW5kTW9uc3RlclNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge307XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyb250ZW5kTW9uc3RlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvRnJvbnRlbmRNb25zdGVyLmpzXG4gKiovIiwiaW1wb3J0IGFsbEVkaXRhYmxlcyBmcm9tICcuL2VkaXRhYmxlcy9hbGwnO1xuXG5jbGFzcyBFZGl0YWJsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZWRpdGFibGVzQnlUeXBlID0ge307XG4gICAgLy8gaW5pdGlhbGl6ZSBiYXNlIGJ1aWxkLWluIGVkaXRhYmxlc1xuICAgIGFsbEVkaXRhYmxlcygpO1xuICAgIHRoaXMuZWRpdGFibGVzQnlUeXBlID0gd2luZG93Lk1PTlNURVJfRURJVEFCTEVTO1xuICB9XG5cbiAgc2VyaWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBjb25zdCBlZGl0YWJsZSA9ICRub2RlLmRhdGEoJ2VkaXRhYmxlUGFyYW1zJyk7XG4gICAgaWYgKHR5cGVvZihlZGl0YWJsZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCB0eXBlID0gZWRpdGFibGUuaGFzT3duUHJvcGVydHkoJ3R5cGUnKSA/IGVkaXRhYmxlLnR5cGUgOiAnc3RyaW5nJztcbiAgICBpZiAodGhpcy5lZGl0YWJsZXNCeVR5cGUuaGFzT3duUHJvcGVydHkodHlwZSkgPT09IGZhbHNlKSB7XG4gICAgICB0eXBlID0gJ3N0cmluZyc7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwb3J0VmFyaWFibGUgPSBlZGl0YWJsZS5oYXNPd25Qcm9wZXJ0eSgndGFyZ2V0JykgPyBlZGl0YWJsZS50YXJnZXQgOiAnZGF0YSc7XG5cbiAgICByZXR1cm4gdGhpcy5lZGl0YWJsZXNCeVR5cGVbdHlwZV0uc2VyaWFsaXplTm9kZSgkbm9kZSwgZXhwb3J0VmFyaWFibGUpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlcyh3KSB7XG4gICAgT2JqZWN0LmtleXModGhpcy5lZGl0YWJsZXNCeVR5cGUpLmZvckVhY2goZWRpdGFibGVLZXkgPT4ge1xuICAgICAgY29uc3QgZWRpdGFibGUgPSB0aGlzLmVkaXRhYmxlc0J5VHlwZVtlZGl0YWJsZUtleV07XG4gICAgICBlZGl0YWJsZS5pbml0aWFsaXplRWRpdGFibGVzKHcpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRhYmxlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvRWRpdGFibGUuanNcbiAqKi8iLCJjbGFzcyBNYXRlcmlhbCB7XG4gIGNvbnN0cnVjdG9yKCRub2RlKSB7XG4gICAgdGhpcy4kbm9kZSA9ICRub2RlO1xuICAgIHRoaXMubWF0ZXJpYWxQYXRoID0gdGhpcy4kbm9kZS5kYXRhKCdtYXRlcmlhbFBhdGgnKTtcblxuICAgIHRoaXMubWF0ZXJpYWxOYW1lID0gdGhpcy5tYXRlcmlhbFBhdGgucmVwbGFjZSgvLipcXC4oLiopJC8sICckMScpO1xuICAgIC8vIEB0b2RvIENIQU5HRSBUSElTXG4gICAgdGhpcy5rZXkgPSB0aGlzLiRub2RlLmRhdGEoJ21hdGVyaWFsSW5kZXgnKTtcbiAgfVxuXG4gIHByb2Nlc3NNYXRlcmlhbCgpIHtcbiAgICByZXR1cm4gJChgPGxpIGNsYXNzPVwicGFnZS1zdHJ1Y3R1cmVfX21hdGVyaWFsXCI+JHt0aGlzLm1hdGVyaWFsTmFtZX08L2xpPmApO1xuICB9XG5cbiAgc3RhdGljIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICByZXR1cm4gd2luZG93LkZyb250ZW5kTW9uc3Rlci5idWlsZGVyLmVkaXRhYmxlLnNlcmlhbGl6ZUVkaXRhYmxlKCRub2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZnJhbWUkKCkge1xuICAgIHJldHVybiB3aW5kb3cuRnJvbnRlbmRNb25zdGVyLmJ1aWxkZXIuZnJhbWVDb250ZW50V2luZG93LiQ7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgLy8gbWF0ZXJpYWwgaGFzIGRhdGEtZWRpdGFibGUta2V5cyB3aXRoIHNjaGVtYVxuICAgIGNvbnN0IGVkaXRhYmxlS2V5cyA9IHRoaXMuJG5vZGUuZGF0YSgnZWRpdGFibGVLZXlzJyk7XG4gICAgY29uc3QgcmVjdXJzaXZlSXRlcmF0b3IgPSBmdW5jdGlvbiBpdGVyKGFyciwgcGF0aCwgJHNjb3BlKSB7XG4gICAgICBjb25zdCBmaW5hbCA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMoYXJyKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGxldCBmdWxsS2V5UGF0aCA9IGtleTtcbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICBmdWxsS2V5UGF0aCA9IGAke3BhdGh9LiR7a2V5fWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZihhcnJba2V5XSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY29uc3QgJGl0ZW1zID0gJHNjb3BlLmZpbmQoYFtkYXRhLXJlY3Vyc2l2ZS1pdGVtPVwiJHtmdWxsS2V5UGF0aH1cIl1gKTtcbiAgICAgICAgICBmaW5hbFtrZXldID0ge307XG4gICAgICAgICAgJGl0ZW1zLmVhY2goZnVuY3Rpb24gaXRlbXNSZWMoKSB7XG4gICAgICAgICAgICBjb25zdCAkdGhpcyA9IE1hdGVyaWFsLmZyYW1lJCh0aGlzKTtcbiAgICAgICAgICAgIGZpbmFsW2tleV1bJHRoaXMuZGF0YSgncmVjdXJzaXZlSXRlbUtleScpXSA9IHJlY3Vyc2l2ZUl0ZXJhdG9yKFxuICAgICAgICAgICAgICBhcnJba2V5XSxcbiAgICAgICAgICAgICAgJ2l0ZW0nLFxuICAgICAgICAgICAgICAkdGhpc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCAkbm9kZSA9IE1hdGVyaWFsLmZyYW1lJChcbiAgICAgICAgICAgICRzY29wZS5maW5kKGBbZGF0YS1lZGl0YWJsZS1rZXk9XCIke2Z1bGxLZXlQYXRofVwiXWApLmZpcnN0KClcbiAgICAgICAgICApO1xuICAgICAgICAgIGZpbmFsW2tleV0gPSBNYXRlcmlhbC5zZXJpYWxpemVOb2RlKCRub2RlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmluYWw7XG4gICAgfTtcblxuICAgIHJldHVybiByZWN1cnNpdmVJdGVyYXRvcihlZGl0YWJsZUtleXMsICcnLCBNYXRlcmlhbC5mcmFtZSQodGhpcy4kbm9kZSkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFsO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZUNvbXBvbmVudHMvTWF0ZXJpYWwuanNcbiAqKi8iLCJpbXBvcnQgTWF0ZXJpYWwgZnJvbSAnLi9NYXRlcmlhbCc7XG5cbmNsYXNzIFJlZ2lvbiB7XG4gIGNvbnN0cnVjdG9yKCRub2RlLCB0YXJnZXQkKSB7XG4gICAgdGhpcy5tYXRlcmlhbHMgPSB7fTtcbiAgICB0aGlzLiRub2RlID0gJG5vZGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9ICRub2RlLmRhdGEoJ2NvbnRlbnREZXNjcmlwdGlvbicpO1xuICAgIHRoaXMudGFyZ2V0JCA9IHRhcmdldCQ7XG4gIH1cblxuICBwcm9jZXNzUmVnaW9uKCkge1xuICAgIHRoaXMua2V5ID0gdGhpcy4kbm9kZS5kYXRhKCdyZWdpb25LZXknKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMucmVnaW9uRGVzY3JpcHRpb24gPyB0aGlzLnJlZ2lvbkRlc2NyaXB0aW9uIDogdGhpcy5rZXk7XG4gICAgY29uc3QgJHJlZ2lvbkxpID0gJChgPGxpIGNsYXNzPVwicGFnZS1zdHJ1Y3R1cmVfX3JlZ2lvblwiPiR7ZGVzY3JpcHRpb259PC9saT5gKTtcblxuICAgIHRoaXMuaWQgPSB0aGlzLiRub2RlLmRhdGEoJ3JlZ2lvbklkJyk7XG4gICAgY29uc3QgJHJlZ2lvblVsID0gJCgnPHVsIGNsYXNzPVwicGFnZS1zdHJ1Y3R1cmVfX3JlZ2lvbi1tYXRlcmlhbHNcIj48L3VsPicpO1xuXG4gICAgY29uc3QgJG1hdGVyaWFscyA9IHRoaXMuJG5vZGUuZmluZCgnW2RhdGEtaXMtbWF0ZXJpYWw9MV0nKTtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgICRtYXRlcmlhbHMuZWFjaChmdW5jdGlvbiBtYXRlcmlhbHNJdGVyYXRvcigpIHtcbiAgICAgIGNvbnN0ICRtYXRlcmlhbE5vZGUgPSB0aGF0LnRhcmdldCQodGhpcyk7XG4gICAgICBjb25zdCBtYXRlcmlhbE9iamVjdCA9IG5ldyBNYXRlcmlhbCgkbWF0ZXJpYWxOb2RlKTtcbiAgICAgIGNvbnN0ICRsaSA9IG1hdGVyaWFsT2JqZWN0LnByb2Nlc3NNYXRlcmlhbCgpO1xuICAgICAgdGhhdC5tYXRlcmlhbHNbbWF0ZXJpYWxPYmplY3Qua2V5XSA9IG1hdGVyaWFsT2JqZWN0O1xuICAgICAgJHJlZ2lvblVsLmFwcGVuZCgkbGkpO1xuICAgIH0pO1xuXG4gICAgJHJlZ2lvbkxpLmFwcGVuZCgkcmVnaW9uVWwpO1xuICAgIHJldHVybiAkcmVnaW9uTGk7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgbWF0ZXJpYWxzID0gdGhpcy5tYXRlcmlhbHM7XG4gICAgT2JqZWN0LmtleXMobWF0ZXJpYWxzKS5mb3JFYWNoKGZ1bmN0aW9uIGl0ZXIobWF0ZXJpYWxLZXkpIHtcbiAgICAgIHJlc3VsdFttYXRlcmlhbEtleV0gPSBtYXRlcmlhbHNbbWF0ZXJpYWxLZXldLnNlcmlhbGl6ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBtYXRlcmlhbHNEZWNsKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIC8vIGZvciAoY29uc3QgbWF0ZXJpYWxLZXkgaW4gdGhpcy5tYXRlcmlhbHMpIHtcbiAgICAvLyAgIGlmICh0aGlzLm1hdGVyaWFscy5oYXNPd25Qcm9wZXJ0eShtYXRlcmlhbEtleSkpIHtcbiAgICAvLyAgICAgcmVzdWx0W21hdGVyaWFsS2V5XSA9IHtcbiAgICAvLyAgICAgICAnbWF0ZXJpYWwnOiB0aGlzLm1hdGVyaWFsc1ttYXRlcmlhbEtleV0ubWF0ZXJpYWxQYXRoLFxuICAgIC8vICAgICB9O1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICBjb25zdCAkbWF0ZXJpYWxzID0gdGhpcy4kbm9kZS5maW5kKCdbZGF0YS1pcy1tYXRlcmlhbD0xXScpO1xuICAgIGNvbnN0IG1hdGVyaWFsc09yZGVyID0gW107XG4gICAgJG1hdGVyaWFscy5lYWNoKGZ1bmN0aW9uIG1hdGVyaWFsc0l0ZXJhdG9yKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgY29uc3QgbWF0ZXJpYWxJbmRleCA9ICR0aGlzLmRhdGEoJ21hdGVyaWFsSW5kZXgnKTtcbiAgICAgIG1hdGVyaWFsc09yZGVyLnB1c2gobWF0ZXJpYWxJbmRleCk7XG4gICAgICByZXN1bHRbbWF0ZXJpYWxJbmRleF0gPSB7XG4gICAgICAgIG1hdGVyaWFsOiAkdGhpcy5kYXRhKCdtYXRlcmlhbFBhdGgnKSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlY2w6IHJlc3VsdCxcbiAgICAgIG1hdGVyaWFsc09yZGVyXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpb247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9QYWdlU3RydWN0dXJlQ29tcG9uZW50cy9SZWdpb24uanNcbiAqKi8iLCJpbXBvcnQgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL1NpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCc7XG5pbXBvcnQgTWF0ZXJpYWxzRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvTWF0ZXJpYWxzRW52aXJvbm1lbnQnO1xuaW1wb3J0IEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9DdXN0b21pemF0aW9uRW52aXJvbm1lbnQnO1xuaW1wb3J0IEFjdGlvbkVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL0FjdGlvbkVudmlyb25tZW50JztcbmltcG9ydCBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50JztcbmltcG9ydCBGcmFtZUFwaSBmcm9tICcuLy4uL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaSc7XG5pbXBvcnQgRWRpdGFibGUgZnJvbSAnLi9FZGl0YWJsZSc7XG5cbmNsYXNzIFZpc3VhbEJ1aWxkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtcygpO1xuICAgIHRoaXMucmVzb2x1dGlvblN3aXRjaGVyKCk7XG5cbiAgICB0aGlzLmVudmlyb25tZW50cyA9IG5ldyBNYXAoW1xuICAgICAgWydzaXRlLXN0cnVjdHVyZScsIG5ldyBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQodGhpcywgJ3NpdGUtc3RydWN0dXJlJyldLFxuICAgICAgWydwYWdlLXN0cnVjdHVyZScsIG5ldyBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQodGhpcywgJ3BhZ2Utc3RydWN0dXJlJyldLFxuICAgICAgWydtYXRlcmlhbHMnLCBuZXcgTWF0ZXJpYWxzRW52aXJvbm1lbnQodGhpcywgJ21hdGVyaWFscycpXSxcbiAgICAgIFsnY3VzdG9taXphdGlvbicsIG5ldyBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQodGhpcywgJ2N1c3RvbWl6YXRpb24nKV0sXG4gICAgICBbJ2FjdGlvbicsIG5ldyBBY3Rpb25FbnZpcm9ubWVudCh0aGlzLCAnYWN0aW9uJyldLFxuICAgIF0pO1xuXG4gICAgdGhpcy5lbnZpcm9ubWVudFNlbGVjdG9yKCk7XG5cbiAgICAvLyBzZWxlY3QgZmlyc3QgZW52aXJvbm1lbnQgYnkgZGVmYXVsdFxuICAgIHRoaXMuc3dpdGNoRW52aXJvbm1lbnQoJ3NpdGUtc3RydWN0dXJlJyk7XG4gICAgJCgnLm1vbnN0ZXItZW52aXJvbm1lbnQtc2VsZWN0b3JfX2Vudmlyb25tZW50LWxpbmsnKVxuICAgICAgLmZpcnN0KClcbiAgICAgIC5tb2QoJ2FjdGl2ZScsIHRydWUpO1xuICAgIEZyYW1lQXBpLmJpbmRNZXNzYWdlTGlzdGVuZXIodGhpcyk7XG5cbiAgICB0aGlzLmVkaXRhYmxlID0gbmV3IEVkaXRhYmxlKCk7XG5cbiAgICB0aGlzLmNvbnRyb2xzKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBWaXN1YWxCdWlsZGVyIHNldHRpbmdzLlxuICAgKiBVc2VzIFZpc3VhbEJ1aWxkZXJTZXR0aW5ncyB2YXJpYWJsZSBpZiBwcm92aWRlZCBvciBkZWZhdWx0IHZhbHVlcyBpbnN0ZWFkLlxuICAgKi9cbiAgcGFyYW1zKCkge1xuICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5WaXN1YWxCdWlsZGVyU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICAnZWxlbWVudC1zZWxlY3Rvcic6ICcubW9uc3Rlci12aXN1YWwtYnVpbGRlcicsXG4gICAgICAnZnJhbWUtc2VsZWN0b3InOiAnLm1vbnN0ZXItdmlzdWFsLWZyYW1lJyxcbiAgICAgIGJ1bmRsZXM6IHt9LFxuICAgICAgJ3N0YWNrYWJsZS1jb250YWluZXItY2xhc3MnOiAnbW9uc3Rlci1zdGFja2FibGUtY29udGFpbmVyJyxcbiAgICAgICduZXctYmxvY2stdXJsJzogJy9tb25zdGVyL3Zpc3VhbC1idWlsZGVyL25ldy1ibG9jaycsXG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyh1c2VyU2V0dGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICB9KTtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy4kYnVpbGRlciA9ICQodGhpcy5zZXR0aW5nc1snZWxlbWVudC1zZWxlY3RvciddKTtcbiAgICB0aGlzLiRzdGFja2FibGUgPSAkKGAuJHt0aGlzLnNldHRpbmdzWydzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJ119YCk7XG4gIH1cblxuICByZXNvbHV0aW9uU3dpdGNoZXIoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgYmVtRWxlbSA9ICdyZXNvbHV0aW9uLXN3aXRjaGVyX19yZXNvbHV0aW9uLWxpbmsnO1xuICAgIGNvbnN0IGFjdGl2ZU1vZGlmaWVyID0gYCR7YmVtRWxlbX0tLWFjdGl2ZWA7XG4gICAgY29uc3QgJHJlc29sdXRpb25MaW5rcyA9ICQoYC4ke2JlbUVsZW19YCk7XG4gICAgJHJlc29sdXRpb25MaW5rcy5jbGljayhmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICRyZXNvbHV0aW9uTGlua3MucmVtb3ZlQ2xhc3MoYWN0aXZlTW9kaWZpZXIpO1xuICAgICAgJCh0aGF0LnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKS53aWR0aCgkKHRoaXMpLmRhdGEoJ3Jlc29sdXRpb25XaWR0aCcpKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoYWN0aXZlTW9kaWZpZXIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgZW52aXJvbm1lbnRTZWxlY3RvcigpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBiZW1FbGVtID0gJ21vbnN0ZXItZW52aXJvbm1lbnQtc2VsZWN0b3JfX2Vudmlyb25tZW50LWxpbmsnO1xuICAgIGNvbnN0IGFjdGl2ZU1vZGlmaWVyID0gYCR7YmVtRWxlbX0tLWFjdGl2ZWA7XG4gICAgY29uc3QgJHNlY3Rpb25MaW5rcyA9ICQoYC4ke2JlbUVsZW19YCk7XG4gICAgJHNlY3Rpb25MaW5rcy5jbGljayhmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgIGNvbnN0IGVudmlyb25tZW50TmFtZSA9ICQodGhpcykuZGF0YSgnZW52aXJvbm1lbnROYW1lJyk7XG4gICAgICBpZiAodGhhdC5jdXJyZW50RW52aXJvbm1lbnQgPT09IGVudmlyb25tZW50TmFtZSkge1xuICAgICAgICAkc2VjdGlvbkxpbmtzLnJlbW92ZUNsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgICAgdGhhdC5lbnZpcm9ubWVudHMuZ2V0KGVudmlyb25tZW50TmFtZSkuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB0aGF0LmN1cnJlbnRFbnZpcm9ubWVudCA9IG51bGw7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgJHNlY3Rpb25MaW5rcy5yZW1vdmVDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICB0aGF0LnN3aXRjaEVudmlyb25tZW50KGVudmlyb25tZW50TmFtZSk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHN3aXRjaEVudmlyb25tZW50KGVudmlyb25tZW50TmFtZSkge1xuICAgIHRoaXMuZW52aXJvbm1lbnRzLmdldChlbnZpcm9ubWVudE5hbWUpLmFjdGl2YXRlKCk7XG4gICAgdGhpcy5jdXJyZW50RW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudE5hbWU7XG4gIH1cblxuICBjbGVhclN0YWNrYWJsZSgpIHtcbiAgICB0aGlzLiRzdGFja2FibGUuZW1wdHkoKTtcbiAgfVxuXG4gIGNyZWF0ZVN0YWNrYWJsZVBhbmUoKSB7XG4gICAgY29uc3QgcGFuZUNsYXNzID0gYCR7dGhpcy5zZXR0aW5nc1snc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyddfV9fcGFuZWA7XG4gICAgY29uc3QgbW9kaWZpZXIgPSB0aGlzLiRzdGFja2FibGUuZmluZChgLiR7cGFuZUNsYXNzfWApLmxlbmd0aCA9PT0gMFxuICAgICAgPyBgJHtwYW5lQ2xhc3N9LS1maXJzdGBcbiAgICAgIDogJyc7XG4gICAgY29uc3QgJG5ld1BhbmUgPSAkKGA8ZGl2IGNsYXNzPVwiJHtwYW5lQ2xhc3N9ICR7bW9kaWZpZXJ9XCI+PC9kaXY+YCk7XG4gICAgdGhpcy4kc3RhY2thYmxlLmFwcGVuZCgkbmV3UGFuZSk7XG4gICAgcmV0dXJuICRuZXdQYW5lO1xuICB9XG5cbiAgbWF0ZXJpYWxCeU5hbWUobmFtZSkge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLm1hdGVyaWFscy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MubWF0ZXJpYWxzW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldCBmcmFtZUNvbnRlbnRXaW5kb3coKSB7XG4gICAgcmV0dXJuICQodGhpcy5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSlbMF0uY29udGVudFdpbmRvdztcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICAvLyBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLmZyYW1lQ29udGVudFdpbmRvdywgJ3NlcmlhbGl6ZUNvbnRlbnQnLCBbJ2xvZyddKTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmVudmlyb25tZW50cy5nZXQoJ3BhZ2Utc3RydWN0dXJlJykuc2VyaWFsaXplUGFnZSgpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICAvLyB3ZSBoYXZlIHJlc3VsdCB3aGljaCBpcyBjb250ZW50IGluIGZvcm1hdDpcbiAgICAvLyByZWdpb25cbiAgICAvLyAtLS0gbWF0ZXJpYWwgaWRcbiAgICAvLyAtLS0tLS0tIGtleXMgPT4gdmFsdWVzXG4gICAgLy9cbiAgICAvLyBvdXIgUHJvdmlkZXJzIHNob3VsZCBnZXQgb25seSB0aG9zZSBrZXlzIHRoYXQgdGhleSBwcm92aWRlXG4gICAgLy8gcHJvdmlkZWQga2V5cyBhcmUgc3RvcmVkIGluIGZyYW1lQ29udGVudFdpbmRvdy5NT05TVEVSX0VESVRfTU9ERV9EQVRBLnRlbXBsYXRlLnByb3ZpZGVkS2V5c1xuICAgIGNvbnN0IHJlc3VsdEJ5UHJvdmlkZXJzID0ge307XG4gICAgY29uc3QgcHJvdmlkZWRLZXlzID0gdGhpcy5mcmFtZUNvbnRlbnRXaW5kb3cuTU9OU1RFUl9FRElUX01PREVfREFUQS50ZW1wbGF0ZS5wcm92aWRlZEtleXM7XG5cbiAgICBPYmplY3Qua2V5cyhwcm92aWRlZEtleXMpLmZvckVhY2gocHJvdmlkZXJJbmRleCA9PiB7XG4gICAgICByZXN1bHRCeVByb3ZpZGVyc1twcm92aWRlckluZGV4XSA9IHt9O1xuXG4gICAgICBjb25zdCByZWdpb25zID0gcHJvdmlkZWRLZXlzW3Byb3ZpZGVySW5kZXhdO1xuXG4gICAgICBPYmplY3Qua2V5cyhyZWdpb25zKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQuaGFzT3duUHJvcGVydHkocmVnaW9uS2V5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF1bcmVnaW9uS2V5XSA9IHt9O1xuXG4gICAgICAgIC8vIGdvIGRlZXAgdG8gbWF0ZXJpYWwgaW5kZWNlc1xuICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSByZWdpb25zW3JlZ2lvbktleV07XG5cbiAgICAgICAgT2JqZWN0LmtleXMobWF0ZXJpYWxzKS5mb3JFYWNoKG1hdGVyaWFsSW5kZXggPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHRbcmVnaW9uS2V5XS5oYXNPd25Qcm9wZXJ0eShtYXRlcmlhbEluZGV4KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF1bcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XSA9IHt9O1xuXG4gICAgICAgICAgY29uc3QgZGF0YUtleXMgPSBtYXRlcmlhbHNbbWF0ZXJpYWxJbmRleF07XG5cbiAgICAgICAgICBkYXRhS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0W3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF0uaGFzT3duUHJvcGVydHkoa2V5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0QnlQcm92aWRlcnNcbiAgICAgICAgICAgICAgW3Byb3ZpZGVySW5kZXhdXG4gICAgICAgICAgICAgIFtyZWdpb25LZXldXG4gICAgICAgICAgICAgIFttYXRlcmlhbEluZGV4XVxuICAgICAgICAgICAgICBba2V5XSA9IHJlc3VsdFtyZWdpb25LZXldW21hdGVyaWFsSW5kZXhdW2tleV07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0QnlQcm92aWRlcnMpO1xuICAgIHJldHVybiByZXN1bHRCeVByb3ZpZGVycztcbiAgfVxuXG4gIHBhZ2VDaGFuZ2VkKCkge1xuICAgIHRoaXMuZW52aXJvbm1lbnRzLmZvckVhY2goXG4gICAgICBlbnZpcm9ubWVudCA9PlxuICAgICAgICBlbnZpcm9ubWVudC5wYWdlQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIGxvZyhyZXN1bHQpIHtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICB9XG5cbiAgY29udHJvbHMoKSB7XG4gICAgdGhpcy4kY29udHJvbHMgPSB0aGlzLiRidWlsZGVyLmZpbmQoJy5jb250cm9scycpLmZpcnN0KCk7XG4gICAgdGhpcy4kY29udHJvbHMuZWxlbSgncmVmcmVzaCcpLmNsaWNrKCgpID0+IHtcbiAgICAgIHRoaXMuZnJhbWVDb250ZW50V2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMuJGNvbnRyb2xzLmVsZW0oJ3NhdmUnKS5jbGljaygoKSA9PiB7XG4gICAgICBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLmZyYW1lQ29udGVudFdpbmRvdywgJ3NhdmUnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaXN1YWxCdWlsZGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlci5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBXWVNJV1lHIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBCYXNlRWRpdGFibGUuZnJhbWUkKCRub2RlKTtcbiAgICBjb25zdCBlZGl0b3IgPSBub2RlLmRhdGEoJ2VkaXRvcicpO1xuICAgIGlmIChlZGl0b3IpIHtcbiAgICAgIHJldHVybiBlZGl0b3IuZ2V0RGF0YSgpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZS5odG1sKCk7XG4gIH1cblxuICBpbml0aWFsaXplRWRpdGFibGVzKHcpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9ICdbZGF0YS1lZGl0YWJsZS10eXBlPXd5c2l3eWddJztcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBhdXRvUGFyYWdyYXBoOiBmYWxzZSxcbiAgICAgIGVuYWJsZUNvbnRlbnRFZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlnbm9yZUVtcHR5UGFyYWdyYXBoOiB0cnVlLFxuICAgICAgZW50ZXJNb2RlOiB3LkNLRURJVE9SLkVOVEVSX0JSLFxuICAgIH07XG5cbiAgICB3LiQoKCkgPT4ge1xuICAgICAgdy4kKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgIGNvbnN0IGVkaXRvciA9IHcuQWxsb3lFZGl0b3IuZWRpdGFibGUodGhpcywgY29uZmlnKS5nZXQoJ25hdGl2ZUVkaXRvcicpO1xuICAgICAgICB3LiQodGhpcykuZGF0YSgnZWRpdG9yJywgZWRpdG9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdZU0lXWUc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lZGl0YWJsZXMvV1lTSVdZRy5qc1xuICoqLyIsImltcG9ydCBXWVNJV1lHIGZyb20gJy4vV1lTSVdZRyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICcuL2xpbmsnO1xuaW1wb3J0IFRleHRTdHJpbmcgZnJvbSAnLi9zdHJpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbGwoKSB7XG4gIGlmICh0eXBlb2Yod2luZG93Lk1PTlNURVJfRURJVEFCTEVTKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVMgPSB7fTtcbiAgfVxuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ3d5c2l3eWcnXSA9IG5ldyBXWVNJV1lHKCk7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snbGluayddID0gbmV3IExpbmsoKTtcbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWydpbWFnZSddID0gbmV3IEltYWdlKCk7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snc3RyaW5nJ10gPSBuZXcgVGV4dFN0cmluZygpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9hbGwuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgSW1hZ2UgZXh0ZW5kcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG4gICAgY29uc3QgJGltZyA9ICRub2RlLmZpbmQoJ2ltZycpLmZpcnN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNyYzogJGltZy5hdHRyKCdzcmMnKSxcbiAgICAgIGFsdDogJGltZy5hdHRyKCdhbHQnKSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL2ltYWdlLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFZGl0YWJsZSBmcm9tICcuL0Jhc2VFZGl0YWJsZSc7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6ICRub2RlLmRhdGEoJ29yaWdpbmFsSHJlZicpID8gJG5vZGUuZGF0YSgnb3JpZ2luYWxIcmVmJykgOiAkbm9kZS5hdHRyKCdocmVmJyksXG4gICAgICBhbmNob3I6ICRub2RlLmh0bWwoKSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lZGl0YWJsZXMvbGluay5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBUZXh0U3RyaW5nIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBCYXNlRWRpdGFibGUuZnJhbWUkKCRub2RlKTtcbiAgICBjb25zdCBlZGl0b3IgPSBub2RlLmRhdGEoJ2VkaXRvcicpO1xuICAgIGlmIChlZGl0b3IpIHtcbiAgICAgIHJldHVybiBlZGl0b3IuZ2V0RGF0YSgpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZS5odG1sKCk7XG4gIH1cblxuICBpbml0aWFsaXplRWRpdGFibGVzKHcpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9ICdbZGF0YS1lZGl0YWJsZS10eXBlPXN0cmluZ10sW2RhdGEtZWRpdGFibGUtdHlwZT10ZXh0XSc7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgYWxsb3dlZENvbnRlbnQ6ICdpIHUnLFxuICAgICAgdG9vbGJhcnM6IHtcbiAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgc2VsZWN0aW9uczogdy5BbGxveUVkaXRvci5TZWxlY3Rpb25zLFxuICAgICAgICAgIHRhYkluZGV4OiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGF1dG9QYXJhZ3JhcGg6IGZhbHNlLFxuICAgICAgZW5hYmxlQ29udGVudEVkaXRhYmxlOiB0cnVlLFxuICAgICAgaWdub3JlRW1wdHlQYXJhZ3JhcGg6IHRydWUsXG4gICAgICBibG9ja2xlc3M6IHRydWUsXG4gICAgICBlbnRlck1vZGU6IHcuQ0tFRElUT1IuRU5URVJfQlIsXG4gICAgfTtcblxuICAgIHcuJCgoKSA9PiB7XG4gICAgICB3LiQoc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgICAgY29uc3QgZWRpdG9yID0gdy5BbGxveUVkaXRvci5lZGl0YWJsZSh0aGlzLCBjb25maWcpLmdldCgnbmF0aXZlRWRpdG9yJyk7XG4gICAgICAgIGVkaXRvci5vbigna2V5JywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5kYXRhLmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmRhdGEua2V5Q29kZSA9PT0gdy5DS0VESVRPUi5TSElGVCArIDEzKSB7XG4gICAgICAgICAgICAvLyBhZGQgc2F2aW5nIGZ1bmN0aW9uIGhlcmVcbiAgICAgICAgICAgIGV2ZW50LmNhbmNlbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVkaXRvci5vbigncGFzdGUnLCBldmVudCA9PiB7XG4gICAgICAgICAgZXZlbnQuZGF0YS5kYXRhVmFsdWUgPSBldmVudC5kYXRhLmRhdGFWYWx1ZS5yZXBsYWNlKC88YnJbXFxzXFwvXSo+L2dtaSwgJyAnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHcuJCh0aGlzKS5kYXRhKCdlZGl0b3InLCBlZGl0b3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0U3RyaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL3N0cmluZy5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBBY3Rpb25FbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0FjdGlvbkVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9DdXN0b21pemF0aW9uRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgTWF0ZXJpYWxzRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2aXN1YWxCdWlsZGVyLCBuYW1lKSB7XG4gICAgc3VwZXIodmlzdWFsQnVpbGRlciwgbmFtZSk7XG4gICAgdGhpcy5pbml0TWF0ZXJpYWxzU2VsZWN0b3IoKTtcbiAgfVxuXG4gIGluaXRNYXRlcmlhbHNTZWxlY3RvcigpIHtcbiAgICB0aGlzLiRtYXRlcmlhbHNHcm91cHMgPSAkKCc8dWwgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzXCI+PC91bD4nKTtcbiAgICB0aGlzLiRtYXRlcmlhbHNMaXN0ID0gW107XG5cbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIuc2V0dGluZ3MuYnVuZGxlcy5mb3JFYWNoKGJ1bmRsZSA9PiB7XG4gICAgICAvKiBnbG9iYWwgcG9seWdsb3Q6IGZhbHNlICovXG4gICAgICBjb25zdCBpMThuQnVuZGxlTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gcG9seWdsb3QudChidW5kbGUubmFtZSlcbiAgICAgICAgOiBidW5kbGUubmFtZTtcblxuICAgICAgY29uc3QgJGJ1bmRsZVRpdGxlID0gYFxuICAgICAgPGxpIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19faXRlbSBtYXRlcmlhbHMtZ3JvdXBzX19pdGVtLS1idW5kbGUtbGFiZWxcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1idW5kbGVcIiBkYXRhLWJ1bmRsZS1wYXRoPVwiJHtidW5kbGUuZnVsbFBhdGh9XCI+XG4gICAgICAgICAgICAke2kxOG5CdW5kbGVOYW1lfVxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICAgYDtcbiAgICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QucHVzaCgkYnVuZGxlVGl0bGUpO1xuXG4gICAgICBidW5kbGUuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICBjb25zdCBncm91cE5hbWUgPSBncm91cC5uYW1lO1xuICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSBncm91cC5tYXRlcmlhbHM7XG4gICAgICAgIGNvbnN0IGkxOG5Hcm91cE5hbWUgPSB0eXBlb2YocG9seWdsb3QpICE9PSAndW5kZWZpbmVkJyA/IHBvbHlnbG90LnQoZ3JvdXBOYW1lKSA6IGdyb3VwTmFtZTtcbiAgICAgICAgY29uc3QgJGxpID0gJChgXG4gICAgPGxpIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19faXRlbVwiPlxuICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWdyb3VwLXBhdGg9XCIke2dyb3VwLmZ1bGxQYXRofVwiIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwXCI+XG4gICAgICAgICR7aTE4bkdyb3VwTmFtZX0gPHNwYW4gY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19jb3VudFwiPigke21hdGVyaWFscy5sZW5ndGh9KTwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICA8L2xpPmApO1xuICAgICAgICB0aGlzLiRtYXRlcmlhbHNHcm91cHMuYXBwZW5kKCRsaSk7XG4gICAgICAgIGNvbnN0ICRsaXN0ID0gJChgPHVsIGNsYXNzPVwibWF0ZXJpYWxzLWxpc3RcIiBkYXRhLWdyb3VwLXBhdGg9XCIke2dyb3VwLmZ1bGxQYXRofVwiPjwvdWw+YCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG5cbiAgICAgICAgbWF0ZXJpYWxzLmZvckVhY2gobWF0ZXJpYWwgPT4ge1xuICAgICAgICAgIGNvbnN0IG1hdGVyaWFsTmFtZSA9IG1hdGVyaWFsLm5hbWU7XG4gICAgICAgICAgY29uc3QgaTE4bk1hdGVyaWFsTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IHBvbHlnbG90LnQobWF0ZXJpYWxOYW1lKVxuICAgICAgICAgICAgOiBtYXRlcmlhbE5hbWU7XG4gICAgICAgICAgY29uc3QgJGl0ZW0gPSAkKGBcbjxsaT5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1hdGVyaWFscy1saXN0X19pdGVtXCIgZGF0YS1tYXRlcmlhbC1wYXRoPVwiJHttYXRlcmlhbC5mdWxsUGF0aH1cIj5cbiAgICAke2kxOG5NYXRlcmlhbE5hbWV9XG4gIDwvYT5cbjwvbGk+XG5gKTtcbiAgICAgICAgICBpdGVtcy5wdXNoKCRpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgICRsaXN0LmFwcGVuZChpdGVtcyk7XG4gICAgICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QucHVzaCgkbGlzdCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJywgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgJHRoaXMudG9nZ2xlTW9kKCdhY3RpdmUnKTtcbiAgICAgIGNvbnN0IGdyb3VwUGF0aCA9ICR0aGlzLmRhdGEoJ2dyb3VwUGF0aCcpO1xuICAgICAgaWYgKCR0aGlzLm1vZCgnYWN0aXZlJykpIHtcbiAgICAgICAgJCgnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcpLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgICAgICBjb25zdCBtYXRlcmlhbHNMaXN0QWN0aXZlQ2xhc3MgPSAnbWF0ZXJpYWxzLWxpc3QtLWFjdGl2ZSc7XG5cbiAgICAgICAgJCgnLm1hdGVyaWFscy1saXN0JykuZWFjaChmdW5jdGlvbiBpdCgpIHtcbiAgICAgICAgICBjb25zdCAkbGlzdCA9ICQodGhpcyk7XG4gICAgICAgICAgaWYgKCRsaXN0Lmhhc0NsYXNzKG1hdGVyaWFsc0xpc3RBY3RpdmVDbGFzcykpIHtcbiAgICAgICAgICAgICRsaXN0LnJlbW92ZUNsYXNzKG1hdGVyaWFsc0xpc3RBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkbGlzdC5kYXRhKCdncm91cFBhdGgnKSA9PT0gZ3JvdXBQYXRoKSB7XG4gICAgICAgICAgICAkbGlzdC5hZGRDbGFzcyhtYXRlcmlhbHNMaXN0QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHRoaXMubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICAgICAgdGhhdC4kbWF0ZXJpYWxzUGFuZS5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGF0J3MganVzdCBzZWNvbmQgY2xpY2sgb24gdGhlIHNhbWUgZ3JvdXBcbiAgICAgICAgdGhhdC4kbWF0ZXJpYWxzUGFuZS5oaWRlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYXRlcmlhbHMtbGlzdF9faXRlbScsIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgIHRoYXQuc2VuZE1lc3NhZ2UoXG4gICAgICAgICduZXdCbG9jaycsXG4gICAgICAgIFtcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoJ21hdGVyaWFsUGF0aCcpLFxuICAgICAgICAgICdjb250ZW50JyxcbiAgICAgICAgXVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHN1cGVyLmFjdGl2YXRlKCk7XG5cbiAgICB0aGlzLiRncm91cHNQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRncm91cHNQYW5lLmFwcGVuZCh0aGlzLiRtYXRlcmlhbHNHcm91cHMpO1xuXG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZS5hcHBlbmQodGhpcy4kbWF0ZXJpYWxzTGlzdCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZS5oaWRlKCk7XG5cbiAgICAkKCcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJykubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFsc0Vudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5pbXBvcnQgUmVnaW9uIGZyb20gJy4vLi4vUGFnZVN0cnVjdHVyZUNvbXBvbmVudHMvUmVnaW9uJztcblxuY2xhc3MgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IodmlzdWFsQnVpbGRlciwgbmFtZSkge1xuICAgIHN1cGVyKHZpc3VhbEJ1aWxkZXIsIG5hbWUpO1xuICAgIHRoaXMuaW5pdFBhZ2VTdHJ1Y3R1cmVFbGVtZW50KCk7XG4gICAgdGhpcy5lZGl0TW9kZURhdGEgPSB7fTtcbiAgfVxuXG4gIGluaXRQYWdlU3RydWN0dXJlRWxlbWVudCgpIHtcbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlID0gJCgnPGRpdiBjbGFzcz1cInBhZ2Utc3RydWN0dXJlXCI+PC9kaXY+Jyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICBzdXBlci5hY3RpdmF0ZSgpO1xuXG4gICAgdGhpcy4kc3RydWN0dXJlUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kc3RydWN0dXJlUGFuZS5hcHBlbmQodGhpcy4kcGFnZVN0cnVjdHVyZSk7XG4gIH1cblxuICBwYWdlQ2hhbmdlZCgpIHtcbiAgICBzdXBlci5wYWdlQ2hhbmdlZCgpO1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUuanN0cmVlKCdkZXN0cm95Jyk7XG4gICAgY29uc3QgZW52aXJvbm1lbnQgPSB0aGlzO1xuICAgIGNvbnN0IGxheW91dCA9IHRoaXMudGFyZ2V0Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEubGF5b3V0O1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy50YXJnZXQuTU9OU1RFUl9FRElUX01PREVfREFUQS50ZW1wbGF0ZTtcblxuICAgIGNvbnN0IGxheW91dEl0ZW0gPSB7XG4gICAgICB0ZXh0OiBgTGF5b3V0IC0gJHtsYXlvdXQua2V5fSAjJHtsYXlvdXQuaWR9YCxcbiAgICAgIGljb246ICdmYSBmYS1jb2x1bW5zJyxcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIG9wZW5lZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgfTtcbiAgICBjb25zdCB0ZW1wbGF0ZUl0ZW0gPSB7XG4gICAgICB0ZXh0OiBgVGVtcGxhdGUgLSAke3RlbXBsYXRlLmtleX0gIyR7dGVtcGxhdGUuaWR9YCxcbiAgICAgIGljb246ICdmYSBmYS10aCcsXG4gICAgICBzdGF0ZToge1xuICAgICAgICBvcGVuZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH07XG5cbiAgICBjb25zdCAkbGF5b3V0UmVnaW9ucyA9IHRoaXMudGFyZ2V0JCgnLm0tbW9uc3Rlci1jb250ZW50X19sYXlvdXQnKTtcbiAgICAkbGF5b3V0UmVnaW9ucy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQucHJvY2Vzc0xheW91dCgkKHRoaXMpKTtcbiAgICAgIGxheW91dEl0ZW0uY2hpbGRyZW4ucHVzaChyZXN1bHQuaXRlbSk7XG4gICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcbiAgICAgICAgdGVtcGxhdGVJdGVtLmNoaWxkcmVuLnB1c2gocmVnaW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5wYWdlU3RydWN0dXJlID0gW1xuICAgICAgbGF5b3V0SXRlbSxcbiAgICAgIHRlbXBsYXRlSXRlbSxcbiAgICBdO1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUuanN0cmVlKHtcbiAgICAgIGNvcmU6IHtcbiAgICAgICAgZGF0YTogdGhpcy5wYWdlU3RydWN0dXJlLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIHJlZ2lvbnMuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgIC8vICAgY29uc3QgJHJlZ2lvbk5vZGUgPSB0aGF0LnRhcmdldC4kKHRoaXMpO1xuICAgIC8vICAgY29uc3QgcmVnaW9uT2JqZWN0ID0gbmV3IFJlZ2lvbigkcmVnaW9uTm9kZSwgdGhhdC50YXJnZXQuJCk7XG4gICAgLy8gICBjb25zdCAkcmVnaW9uTGkgPSByZWdpb25PYmplY3QucHJvY2Vzc1JlZ2lvbigpO1xuICAgIC8vICAgdGhhdC5yZWdpb25zU3RydWN0dXJlW3JlZ2lvbk9iamVjdC5rZXldID0gcmVnaW9uT2JqZWN0O1xuICAgIC8vICAgZW52aXJvbm1lbnQuJHBhZ2VTdHJ1Y3R1cmUuYXBwZW5kKCRyZWdpb25MaSk7XG4gICAgLy8gfSk7XG4gICAgdGhpcy5lZGl0TW9kZURhdGEgPSB0aGlzLnRhcmdldC5NT05TVEVSX0VESVRfTU9ERV9EQVRBO1xuICB9XG5cbiAgc3RhdGljIHByb2Nlc3NMYXlvdXQoJGxheW91dFJlZ2lvbikge1xuICAgIGNvbnN0IGl0ZW0gPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQuZXh0cmFjdFJlZ2lvbkRhdGEoJGxheW91dFJlZ2lvbik7XG4gICAgaXRlbS5zdGF0ZSA9IHtcbiAgICAgIG9wZW5lZDogdHJ1ZSxcbiAgICB9O1xuICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICBpdGVtLmlkID0gYGxheW91dC4ke2l0ZW0ucmVnaW9uS2V5fWA7XG4gICAgY29uc3QgdGVtcGxhdGVSZWdpb25zID0gW107XG5cbiAgICAvLyBmaW5kIG1hdGVyaWFsc1xuICAgIGNvbnN0ICRsYXlvdXRNYXRlcmlhbHMgPSAkbGF5b3V0UmVnaW9uLmZpbmQoJz5bZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICAkbGF5b3V0TWF0ZXJpYWxzLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0ICRsYXlvdXRNYXRlcmlhbCA9ICQodGhpcyk7XG4gICAgICBjb25zdCByZXN1bHQgPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQucHJvY2Vzc0xheW91dE1hdGVyaWFsKCRsYXlvdXRNYXRlcmlhbCk7XG4gICAgICBjb25zdCBsYXlvdXRNYXRlcmlhbEl0ZW0gPSByZXN1bHQubGF5b3V0TWF0ZXJpYWw7XG4gICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcbiAgICAgICAgdGVtcGxhdGVSZWdpb25zLnB1c2gocmVnaW9uKTtcbiAgICAgIH0pO1xuICAgICAgaXRlbS5jaGlsZHJlbi5wdXNoKGxheW91dE1hdGVyaWFsSXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbSxcbiAgICAgIHRlbXBsYXRlUmVnaW9ucyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHByb2Nlc3NMYXlvdXRNYXRlcmlhbCgkbGF5b3V0TWF0ZXJpYWwpIHtcbiAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gJGxheW91dE1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsSW5kZXgnKTtcbiAgICBjb25zdCBtYXRlcmlhbFBhdGggPSAkbGF5b3V0TWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxQYXRoJyk7XG4gICAgY29uc3QgaXRlbSA9IHtcbiAgICAgIHRleHQ6IGAke1xuICAgICAgICBtYXRlcmlhbFBhdGggPT09ICdjb3JlLmZyb250ZW5kLW1vbnN0ZXItY29yZS5nZW5lcmFsLmNvbnRlbnQtcGxhY2Vob2xkZXInXG4gICAgICAgICAgPyAnTWFpbiBFbnRpdHkgQ29udGVudCdcbiAgICAgICAgICA6IGBNYXRlcmlhbDogJHttYXRlcmlhbEluZGV4fWB9XG4gICAgICBgLFxuICAgICAgaWNvbjogJ2ZhIGZhLXB1enpsZS1waWVjZScsXG4gICAgICBtYXRlcmlhbEluZGV4LFxuICAgICAgbWF0ZXJpYWxQYXRoLFxuICAgICAgZWRpdGFibGVLZXlzOiAkbGF5b3V0TWF0ZXJpYWwuZGF0YSgnZWRpdGFibGVLZXlzJyksXG4gICAgfTtcbiAgICBjb25zdCB0ZW1wbGF0ZVJlZ2lvbnMgPSBbXTtcbiAgICBjb25zdCAkcmVnaW9ucyA9ICRsYXlvdXRNYXRlcmlhbC5maW5kKCc+IC5tLW1vbnN0ZXItY29udGVudF9fY29udGVudCcpO1xuICAgICRyZWdpb25zLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5wcm9jZXNzVGVtcGxhdGVSZWdpb24oJCh0aGlzKSk7XG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnMucHVzaChyZXN1bHQpO1xuICAgIH0pO1xuICAgIGlmICh0ZW1wbGF0ZVJlZ2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgaXRlbS5pc0NvbnRlbnQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbGF5b3V0TWF0ZXJpYWw6IGl0ZW0sXG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnMsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9jZXNzVGVtcGxhdGVSZWdpb24oJHRlbXBsYXRlUmVnaW9uKSB7XG4gICAgY29uc3QgaXRlbSA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5leHRyYWN0UmVnaW9uRGF0YSgkdGVtcGxhdGVSZWdpb24pO1xuICAgIGl0ZW0uc3RhdGUgPSB7XG4gICAgICBvcGVuZWQ6IHRydWUsXG4gICAgfTtcbiAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgY29uc3QgJHJlZ2lvbk1hdGVyaWFscyA9ICR0ZW1wbGF0ZVJlZ2lvbi5maW5kKCc+W2RhdGEtaXMtbWF0ZXJpYWxdJyk7XG4gICAgJHJlZ2lvbk1hdGVyaWFscy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBpdGVtLmNoaWxkcmVuLnB1c2goUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LnByb2Nlc3NUZW1wbGF0ZVJlZ2lvbk1hdGVyaWFsKCQodGhpcykpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9jZXNzVGVtcGxhdGVSZWdpb25NYXRlcmlhbCgkcmVnaW9uTWF0ZXJpYWwpIHtcbiAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gJHJlZ2lvbk1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsSW5kZXgnKTtcbiAgICBjb25zdCBtYXRlcmlhbFBhdGggPSAkcmVnaW9uTWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxQYXRoJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGBNYXRlcmlhbDogJHttYXRlcmlhbEluZGV4fWAsXG4gICAgICBtYXRlcmlhbEluZGV4LFxuICAgICAgbWF0ZXJpYWxQYXRoLFxuICAgICAgaWNvbjogJ2ZhIGZhLXB1enpsZS1waWVjZScsXG4gICAgICBlZGl0YWJsZUtleXM6ICRyZWdpb25NYXRlcmlhbC5kYXRhKCdlZGl0YWJsZUtleXMnKSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGV4dHJhY3RSZWdpb25EYXRhKCRub2RlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6ICRub2RlLmRhdGEoJ2NvbnRlbnREZXNjcmlwdGlvbicpLFxuICAgICAgaWNvbjogJ2ZhIGZhLWZvbGRlci1vJyxcbiAgICAgIHJlZ2lvbklkOiAkbm9kZS5kYXRhKCdyZWdpb25JZCcpLFxuICAgICAgcmVnaW9uS2V5OiAkbm9kZS5kYXRhKCdyZWdpb25LZXknKSxcbiAgICAgIHVuaXF1ZUNvbnRlbnRJZDogJG5vZGUuZGF0YSgndW5pcXVlQ29udGVudElkJyksXG4gICAgICBub2RlOiAkbm9kZSxcbiAgICB9O1xuICB9XG5cbiAgc2VyaWFsaXplUGFnZSgpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMucmVnaW9uc1N0cnVjdHVyZVtyZWdpb25LZXldO1xuICAgICAgcmVzdWx0W3JlZ2lvbi5rZXldID0gcmVnaW9uLnNlcmlhbGl6ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBtYXRlcmlhbHNCeVJlZ2lvbnMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5yZWdpb25zU3RydWN0dXJlKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICBjb25zdCByZWdpb24gPSB0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmVbcmVnaW9uS2V5XTtcbiAgICAgIHJlc3VsdFtyZWdpb24ua2V5XSA9IHJlZ2lvbi5tYXRlcmlhbHNEZWNsKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1bmlxaWQgKHByZWZpeCwgbW9yZUVudHJvcHkpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC91bmlxaWQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgcmV2aXNlZCBieTogS2Fua3JlbHVuZSAoaHR0cDovL3d3dy53ZWJmYWt0b3J5LmluZm8vKVxuICAvLyAgICAgIG5vdGUgMTogVXNlcyBhbiBpbnRlcm5hbCBjb3VudGVyIChpbiBsb2N1dHVzIGdsb2JhbCkgdG8gYXZvaWQgY29sbGlzaW9uXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJGlkID0gdW5pcWlkKClcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gMTNcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IHZhciAkaWQgPSB1bmlxaWQoJ2ZvbycpXG4gIC8vICAgZXhhbXBsZSAyOiB2YXIgJHJlc3VsdCA9ICRpZC5sZW5ndGggPT09ICgxMyArICdmb28nLmxlbmd0aClcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcbiAgLy8gICBleGFtcGxlIDM6IHZhciAkaWQgPSB1bmlxaWQoJ2JhcicsIHRydWUpXG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgJHJlc3VsdCA9ICRpZC5sZW5ndGggPT09ICgyMyArICdiYXInLmxlbmd0aClcbiAgLy8gICByZXR1cm5zIDM6IHRydWVcblxuICBpZiAodHlwZW9mIHByZWZpeCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwcmVmaXggPSAnJ1xuICB9XG5cbiAgdmFyIHJldElkXG4gIHZhciBfZm9ybWF0U2VlZCA9IGZ1bmN0aW9uIChzZWVkLCByZXFXaWR0aCkge1xuICAgIHNlZWQgPSBwYXJzZUludChzZWVkLCAxMCkudG9TdHJpbmcoMTYpIC8vIHRvIGhleCBzdHJcbiAgICBpZiAocmVxV2lkdGggPCBzZWVkLmxlbmd0aCkge1xuICAgICAgLy8gc28gbG9uZyB3ZSBzcGxpdFxuICAgICAgcmV0dXJuIHNlZWQuc2xpY2Uoc2VlZC5sZW5ndGggLSByZXFXaWR0aClcbiAgICB9XG4gICAgaWYgKHJlcVdpZHRoID4gc2VlZC5sZW5ndGgpIHtcbiAgICAgIC8vIHNvIHNob3J0IHdlIHBhZFxuICAgICAgcmV0dXJuIEFycmF5KDEgKyAocmVxV2lkdGggLSBzZWVkLmxlbmd0aCkpLmpvaW4oJzAnKSArIHNlZWRcbiAgICB9XG4gICAgcmV0dXJuIHNlZWRcbiAgfVxuXG4gIHZhciAkZ2xvYmFsID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogR0xPQkFMKVxuICAkZ2xvYmFsLiRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cyB8fCB7fVxuICB2YXIgJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzXG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fVxuXG4gIGlmICghJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQpIHtcbiAgICAvLyBpbml0IHNlZWQgd2l0aCBiaWcgcmFuZG9tIGludFxuICAgICRsb2N1dHVzLnBocC51bmlxaWRTZWVkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMHg3NWJjZDE1KVxuICB9XG4gICRsb2N1dHVzLnBocC51bmlxaWRTZWVkKytcblxuICAvLyBzdGFydCB3aXRoIHByZWZpeCwgYWRkIGN1cnJlbnQgbWlsbGlzZWNvbmRzIGhleCBzdHJpbmdcbiAgcmV0SWQgPSBwcmVmaXhcbiAgcmV0SWQgKz0gX2Zvcm1hdFNlZWQocGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwLCAxMCksIDgpXG4gIC8vIGFkZCBzZWVkIGhleCBzdHJpbmdcbiAgcmV0SWQgKz0gX2Zvcm1hdFNlZWQoJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQsIDUpXG4gIGlmIChtb3JlRW50cm9weSkge1xuICAgIC8vIGZvciBtb3JlIGVudHJvcHkgd2UgYWRkIGEgZmxvYXQgbG93ZXIgdG8gMTBcbiAgICByZXRJZCArPSAoTWF0aC5yYW5kb20oKSAqIDEwKS50b0ZpeGVkKDgpLnRvU3RyaW5nKClcbiAgfVxuXG4gIHJldHVybiByZXRJZFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy91bmlxaWQuanNcbiAqKi8iLCJjbGFzcyBIYXNoQXBpIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5mdW5jdGlvbkNhbGxzID0ge307XG5cbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaGFzaCkge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGRvY3VtZW50LmxvY2F0aW9uLmhhc2gubWF0Y2goLyNoYXNoQXBpOiguKj8pOlxcL2hhc2hBcGkvKTtcbiAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGNvbnN0IGZ1bmN0aW9uQ2FsbHMgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGZ1bmN0aW9uQ2FsbHMpIHtcbiAgICAgICAgICBpZiAoaXRlbS5mdW5jKSB7XG4gICAgICAgICAgICB0aGlzLmZ1bmN0aW9uQ2FsbHNbaXRlbS5mdW5jXSA9IGl0ZW0uYXJncyB8fCB7fTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzaG91bGRDYWxsKGZ1bmMpIHtcbiAgICByZXR1cm4gdGhpcy5mdW5jdGlvbkNhbGxzW2Z1bmNdIHx8IGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhhc2hBcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanNcbiAqKi8iLCJpbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi9GcmFtZUFwaSc7XG5pbXBvcnQgdW5pcXVlSWQgZnJvbSAnLi8uLi91bmlxaWQnO1xuXG5jbGFzcyBWaXN1YWxGcmFtZVxue1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtcygpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICBGcmFtZUFwaS5iaW5kTWVzc2FnZUxpc3RlbmVyKHRoaXMpO1xuICAgIHRoaXMucGFyZW50V2luZG93ID0gd2luZG93LnBhcmVudDtcbiAgICAvKiogQHZhciBGcm9udGVuZE1vbnN0ZXIgKi9cbiAgICB0aGlzLnBhcmVudE1vbnN0ZXIgPSB0aGlzLnBhcmVudFdpbmRvdy5Gcm9udGVuZE1vbnN0ZXI7XG4gICAgdGhpcy5wYXJlbnRCdWlsZGVyID0gdGhpcy5wYXJlbnRNb25zdGVyLmJ1aWxkZXI7XG4gICAgdGhpcy5jdXJyZW50TW9uc3RlckNvbnRlbnQgPSBmYWxzZTtcbiAgICB0aGlzLm1ha2VJdE1vdmUoKTtcbiAgICAkKHdpbmRvdykucmVzaXplKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlSGFuZGxlcnMoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgICQoKCkgPT4ge1xuICAgICAgdGhpcy5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgICB0aGlzLnBhcmVudEJ1aWxkZXIuZWRpdGFibGUuaW5pdGlhbGl6ZUVkaXRhYmxlcyh3aW5kb3cpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0ICRtb25zdGVyQ29udGVudCgpIHtcbiAgICBpZiAodGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZSkge1xuICAgICAgcmV0dXJuIHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGU7XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaE1vbnN0ZXJDb250ZW50Q2FjaGUoKTtcbiAgICByZXR1cm4gdGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZTtcbiAgfVxuXG4gIHJlZnJlc2hNb25zdGVyQ29udGVudENhY2hlKCkge1xuICAgIHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGUgPSB7fTtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAkKHRoaXMuc2V0dGluZ3NbJ21vbnN0ZXItY29udGVudC1zZWxlY3RvciddKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBpZiAoIXRoYXQuY3VycmVudE1vbnN0ZXJDb250ZW50KSB7XG4gICAgICAgIHRoYXQuY3VycmVudE1vbnN0ZXJDb250ZW50ID0gJCh0aGlzKS5kYXRhKCd1bmlxdWVDb250ZW50SWQnKTtcbiAgICAgIH1cbiAgICAgIHRoYXQuJG1vbnN0ZXJDb250ZW50Q2FjaGVbJCh0aGlzKS5kYXRhKCd1bmlxdWVDb250ZW50SWQnKV0gPSAkKHRoaXMpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0TmV3TWF0ZXJpYWxJbmRleCgpIHtcbiAgICBpZiAoIXRoaXMubGFzdE1hdGVyaWFsSW5kZXgpIHtcbiAgICAgIGxldCBsYXN0SW5kZXggPSAwO1xuICAgICAgJCgnW2RhdGEtaXMtbWF0ZXJpYWxdJykuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgICBjb25zdCBpbmRleCA9ICQodGhpcykuZGF0YSgnbWF0ZXJpYWwtaW5kZXgnKTtcbiAgICAgICAgaWYgKGluZGV4ID4gbGFzdEluZGV4KSB7XG4gICAgICAgICAgbGFzdEluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5sYXN0TWF0ZXJpYWxJbmRleCA9IGxhc3RJbmRleDtcbiAgICB9XG4gICAgdGhpcy5sYXN0TWF0ZXJpYWxJbmRleCsrO1xuICAgIHJldHVybiB0aGlzLmxhc3RNYXRlcmlhbEluZGV4O1xuICB9XG5cbiAgdXBkYXRlSGFuZGxlcnMoKSB7XG4gICAgaWYgKHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwgJiYgdGhpcy4kaGFuZGxlcnMpIHtcbiAgICAgIHRoaXMuJGhhbmRsZXJzLmNzcyhcbiAgICAgICAgJ3RvcCcsXG4gICAgICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwucG9zaXRpb24oKS50b3BcbiAgICAgICAgICArIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwuaGVpZ2h0KClcbiAgICAgICAgICAtIHRoaXMuJGhhbmRsZXJzLmhlaWdodCgpXG4gICAgICApO1xuICAgICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5hZGRDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1hY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICBtYWtlSXRNb3ZlKCkge1xuICAgIHRoaXMuJGhhbmRsZXJzID0gJChgXG48ZGl2IGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc1wiPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fY29uZmlndXJlXCI+XG4gICAgPGkgY2xhc3M9XCJmYSBmYS1jb2dcIj48L2k+XG4gIDwvYT5cbiAgPHNwYW4gY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19ibG9jay1uYW1lXCI+QmxvY2sgbmFtZSBoZXJlPC9zcGFuPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fbW92ZS11cFwiPlxuICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtdXBcIj48L2k+XG4gIDwvYT5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtZG93blwiPlxuICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG93blwiPjwvaT5cbiAgPC9hPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fY2xvbmVcIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLWNsb25lXCI+PC9pPlxuICA8L2E+XG4gIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19yZW1vdmVcIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPlxuICA8L2E+XG48L2Rpdj5gKTtcbiAgICAkKCdib2R5JykuYXBwZW5kKHRoaXMuJGhhbmRsZXJzKTtcbiAgICB0aGlzLiRoYW5kbGVycy5oaWRlKCk7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgJCh0aGlzLnNldHRpbmdzWydtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InXSkub24oe1xuICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24gaG92ZXJJbigpIHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAkdGhpcy5hZGRDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1oaWdobGlnaHRlZCcpO1xuICAgICAgfSxcbiAgICAgIG1vdXNlbGVhdmU6IGZ1bmN0aW9uIGhvdmVyT3V0KCkge1xuICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdtLW1vbnN0ZXItY29udGVudF9fbWF0ZXJpYWwtLWhpZ2hsaWdodGVkJyk7XG4gICAgICB9LFxuICAgICAgY2xpY2s6IGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICB0aGF0LnNlbGVjdE1hdGVyaWFsKCR0aGlzKTtcbiAgICAgIH0sXG4gICAgfSwgJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgIHRoYXQuJGhhbmRsZXJzXG4gICAgICAub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLXVwJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgICAgIGNvbnN0ICRwcmV2ID0gdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5wcmV2KCdbZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICAgICAgICBpZiAoJHByZXYubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLmluc2VydEJlZm9yZSgkcHJldik7XG4gICAgICAgICAgICB0aGF0LnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLWRvd24nLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICAgICAgY29uc3QgJG5leHQgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLm5leHQoJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICAgICAgIGlmICgkbmV4dC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwuaW5zZXJ0QWZ0ZXIoJG5leHQpO1xuICAgICAgICAgICAgdGhhdC51cGRhdGVIYW5kbGVycygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLm9uKCdjbGljaycsICcubW9uc3Rlci1ibG9jay1oYW5kbGVyc19fY2xvbmUnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICAgICAgY29uc3QgJGNsb25lZE1hdGVyaWFsID0gdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5jbG9uZSgpO1xuICAgICAgICAgICRjbG9uZWRNYXRlcmlhbFxuICAgICAgICAgICAgLmRhdGEoXG4gICAgICAgICAgICAgICdtYXRlcmlhbC1pbmRleCcsXG4gICAgICAgICAgICAgIHRoYXQuZ2V0TmV3TWF0ZXJpYWxJbmRleCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuaW5zZXJ0QWZ0ZXIodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCk7XG4gICAgICAgICAgdGhhdC5zZWxlY3RNYXRlcmlhbCgkY2xvbmVkTWF0ZXJpYWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICAgICAgaWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgdGhpcyBtYXRlcmlhbD8nKSkge1xuICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwgPSBudWxsO1xuICAgICAgICAgICAgdGhhdC4kaGFuZGxlcnMuaGlkZSgpOyAvLyBpdCBkb2VzIG5vdCB3b3JrLiB3aHk/IE5lZWQgdG8gZml4IVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdE1hdGVyaWFsKCRtYXRlcmlhbCkge1xuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsID09PSAkbWF0ZXJpYWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwucmVtb3ZlQ2xhc3MoJ20tbW9uc3Rlci1jb250ZW50X19tYXRlcmlhbC0tYWN0aXZlJyk7XG4gICAgfVxuICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwgPSAkbWF0ZXJpYWw7XG4gICAgdGhpcy51cGRhdGVIYW5kbGVycygpO1xuICAgIHRoaXMuJGhhbmRsZXJzLnNob3coKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZUNvbnRlbnQoY2FsbGJhY2spIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBPYmplY3Qua2V5cyh0aGlzLiRtb25zdGVyQ29udGVudCkuZm9yRWFjaCh1bmlxdWVDb250ZW50SWQgPT4ge1xuICAgICAgY29uc3QgJG1vbnN0ZXIgPSB0aGlzLiRtb25zdGVyQ29udGVudFt1bmlxdWVDb250ZW50SWRdO1xuICAgICAgcmVzdWx0WyRtb25zdGVyLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpXSA9IHRoYXQuc2VyaWFsaXplVW5pcXVlQ29udGVudCgkbW9uc3Rlcik7XG4gICAgfSk7XG4gICAgdGhpcy5zZW5kVG9CdWlsZGVyKGNhbGxiYWNrLCBbcmVzdWx0XSk7XG4gIH1cblxuICBzZXJpYWxpemVVbmlxdWVDb250ZW50KCRtb25zdGVyQ29udGVudCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIHJlc3VsdC51bmlxdWVDb250ZW50SWQgPSAkbW9uc3RlckNvbnRlbnQuZGF0YSgndW5pcXVlQ29udGVudElkJyk7XG4gICAgcmVzdWx0Lm1hdGVyaWFscyA9IHt9O1xuICAgICRtb25zdGVyQ29udGVudC5maW5kKCdbZGF0YS1pcy1tYXRlcmlhbD1cXCcxXFwnXScpLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0IG1hdGVyaWFsID0ge307XG4gICAgICBtYXRlcmlhbC5ibG9jayA9ICQodGhpcykuZGF0YSgnbWF0ZXJpYWxCbG9jaycpO1xuICAgICAgcmVzdWx0Lm1hdGVyaWFsc1skKHRoaXMpLmRhdGEoJ21hdGVyaWFsSW5kZXgnKV0gPSBtYXRlcmlhbDtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgVmlzdWFsRnJhbWUgc2V0dGluZ3MuXG4gICAqIFVzZXMgVmlzdWFsRnJhbWVTZXR0aW5ncyB2YXJpYWJsZSBpZiBwcm92aWRlZCBvciBkZWZhdWx0IHZhbHVlcyBpbnN0ZWFkLlxuICAgKi9cbiAgcGFyYW1zKCkge1xuICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5WaXN1YWxGcmFtZVNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgJ21vbnN0ZXItY29udGVudC1zZWxlY3Rvcic6ICcubS1tb25zdGVyLWNvbnRlbnRfX2NvbnRlbnQnLFxuICAgIH07XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICB9XG5cbiAgc2VuZFRvQnVpbGRlcihmdW5jLCBhcmdzKSB7XG4gICAgRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5wYXJlbnRXaW5kb3csIGZ1bmMsIGFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIGZvcm1TdWJtaXQoZGF0YSkge1xuICAgIGNvbnN0ICRmb3JtID0gJCgnPGZvcm0gbWV0aG9kPVwiUE9TVFwiPjwvZm9ybT4nKTtcbiAgICBjb25zdCAkaW5wdXQgPSAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfX2pzb25cIj4nKTtcbiAgICBjb25zdCAkY3NyZiA9ICQoJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCI+Jyk7XG5cbiAgICAkY3NyZlxuICAgICAgLmF0dHIoJ25hbWUnLCAkKCdtZXRhW25hbWU9Y3NyZi1wYXJhbV0nKS5hdHRyKCdjb250ZW50JykpXG4gICAgICAudmFsKCQoJ21ldGFbbmFtZT1jc3JmLXRva2VuXScpLmF0dHIoJ2NvbnRlbnQnKSlcbiAgICAgIC5hcHBlbmRUbygkZm9ybSk7XG5cbiAgICAkaW5wdXRcbiAgICAgIC52YWwoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAuYXBwZW5kVG8oJGZvcm0pO1xuXG4gICAgJGZvcm1bMF0uc3VibWl0KCk7XG4gIH1cblxuICBjb25zdHJ1Y3RUZW1wbGF0ZURhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3ZpZGVyc0VudGl0aWVzOiB0aGlzLnBhcmVudEJ1aWxkZXIuc2VyaWFsaXplKCksXG4gICAgICByZWdpb25zTWF0ZXJpYWxzOiB0aGlzLnBhcmVudEJ1aWxkZXJcbiAgICAgICAgLmVudmlyb25tZW50cy5nZXQoJ3BhZ2Utc3RydWN0dXJlJykubWF0ZXJpYWxzQnlSZWdpb25zKCksXG4gICAgfTtcbiAgfVxuXG4gIG5ld0Jsb2NrKG1hdGVyaWFsTmFtZSwgcmVnaW9uTmFtZSkge1xuICAgIC8vIEB0b2RvIEFkZCBsb2FkZXIgaGVyZSBhcyB3ZSBhcmUgdXNpbmcgZm9ybSBwb3N0ICFcbiAgICBjb25zdCByYW5kb21JbmRleCA9IHVuaXF1ZUlkKCdtYXQnKTtcbiAgICBjb25zdCBuZXdEYXRhID0ge1xuICAgICAgdGVtcGxhdGU6IHRoaXMuY29uc3RydWN0VGVtcGxhdGVEYXRhKCksXG4gICAgICBhY3Rpb246ICdwcmV2aWV3JyxcbiAgICB9O1xuICAgIGlmIChuZXdEYXRhLnRlbXBsYXRlLnJlZ2lvbnNNYXRlcmlhbHMuaGFzT3duUHJvcGVydHkocmVnaW9uTmFtZSkgPT09IGZhbHNlKSB7XG4gICAgICBuZXdEYXRhLnRlbXBsYXRlLnJlZ2lvbnNNYXRlcmlhbHNbcmVnaW9uTmFtZV0gPSB7fTtcbiAgICB9XG4gICAgLy8gd2UgYXJlIG1vZGlmeWluZyB0ZW1wbGF0ZSBkYXRhIGJ5IGFkZGluZyBuZXcgbWF0ZXJpYWwgaW50byBuZWVkZWQgcmVnaW9uXG4gICAgbmV3RGF0YS50ZW1wbGF0ZS5yZWdpb25zTWF0ZXJpYWxzW3JlZ2lvbk5hbWVdLmRlY2xbcmFuZG9tSW5kZXhdID0ge1xuICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsTmFtZSxcbiAgICB9O1xuICAgIG5ld0RhdGEudGVtcGxhdGUucmVnaW9uc01hdGVyaWFsc1tyZWdpb25OYW1lXS5tYXRlcmlhbHNPcmRlci5wdXNoKHJhbmRvbUluZGV4KTtcbiAgICBWaXN1YWxGcmFtZS5mb3JtU3VibWl0KG5ld0RhdGEpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgdGVtcGxhdGU6IHRoaXMuY29uc3RydWN0VGVtcGxhdGVEYXRhKCksXG4gICAgICBhY3Rpb246ICdzYXZlJyxcbiAgICB9O1xuICAgIFZpc3VhbEZyYW1lLmZvcm1TdWJtaXQoZGF0YSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbEZyYW1lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZS5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==