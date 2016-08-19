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
	      this.$pageStructure = $('<ul class="page-structure"></ul>');
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
	      this.$pageStructure.find('li').remove();
	      var regions = this.target.$('.m-monster-content__content');
	      var environment = this;
	      this.regionsStructure = {};
	      var that = this;
	      regions.each(function iter() {
	        var $regionNode = that.target.$(this);
	        var regionObject = new _Region2.default($regionNode, that.target.$);
	        var $regionLi = regionObject.processRegion();
	        that.regionsStructure[regionObject.key] = regionObject;
	        environment.$pageStructure.append($regionLi);
	      });
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
	        action: 'render-material',
	        materialId: randomIndex,
	        materialRegion: regionName,
	        material: materialName
	      };
	      if (newData.template.regionsMaterials.hasOwnProperty(regionName) === false) {
	        newData.template.regionsMaterials[regionName] = {};
	      }
	
	      newData.template.regionsMaterials[regionName].decl[randomIndex] = {
	        material: materialName
	      };
	      newData.template.regionsMaterials[regionName].materialsOrder.push(randomIndex);
	      VisualFrame.formSubmit(newData);
	
	      return false;
	      // $.ajax({
	      //   url: window.location,
	      //   method: 'POST',
	      //   cache: false,
	      //   contentType: 'application/json; charset=utf-8',
	      //   dataType: 'json',
	      //   data: JSON.stringify(newData),
	      // }).done(function ok(data) {
	      //   const $element = $(data);
	      //   that.$monsterContent[that.currentMonsterContent].append($element);
	      //   this.parentBuilder.pageChanged();
	      //   /* global smoothScroll:false */
	      //   smoothScroll.animateScroll($element[0].offsetTop);
	      // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTYxZjBlMDM2OGFmMGYwOGU1NDEiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9CYXNlRWRpdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvRnJvbnRlbmRNb25zdGVyLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9FZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZUNvbXBvbmVudHMvTWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1BhZ2VTdHJ1Y3R1cmVDb21wb25lbnRzL1JlZ2lvbi5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL1dZU0lXWUcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVB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bEMsSUFBZ0QsRUFBaEQ7QUFDRDs7QUFFRCxlQUFRLFFBQVIsQ0FBaUIsZ0JBQWpCLENBQWtDLFVBQWxDLEVBQThDLElBQTlDLENBQW1ELFdBQW5ELElBQWtFO0FBQ2hFLG1CQUFVO0FBRHNELFFBQWxFO0FBR0EsZUFBUSxRQUFSLENBQWlCLGdCQUFqQixDQUFrQyxVQUFsQyxFQUE4QyxjQUE5QyxDQUE2RCxJQUE3RCxDQUFrRSxXQUFsRTtBQUNBLG1CQUFZLFVBQVosQ0FBdUIsT0FBdkI7O0FBRUEsY0FBTyxLQUFQOzs7Ozs7Ozs7Ozs7Ozs7QUFlRDs7O3lCQTNQcUI7QUFDcEIsV0FBSSxLQUFLLG9CQUFULEVBQStCO0FBQzdCLGdCQUFPLEtBQUssb0JBQVo7QUFDRDtBQUNELFlBQUssMEJBQUw7QUFDQSxjQUFPLEtBQUssb0JBQVo7QUFDRDs7O2dDQXlMaUIsSSxFQUFNO0FBQ3RCLFdBQU0sUUFBUSxFQUFFLDZCQUFGLENBQWQ7QUFDQSxXQUFNLFNBQVMsRUFBRSxxQ0FBRixDQUFmO0FBQ0EsV0FBTSxRQUFRLEVBQUUsdUJBQUYsQ0FBZDs7QUFFQSxhQUNHLElBREgsQ0FDUSxNQURSLEVBQ2dCLEVBQUUsdUJBQUYsRUFBMkIsSUFBM0IsQ0FBZ0MsU0FBaEMsQ0FEaEIsRUFFRyxHQUZILENBRU8sRUFBRSx1QkFBRixFQUEyQixJQUEzQixDQUFnQyxTQUFoQyxDQUZQLEVBR0csUUFISCxDQUdZLEtBSFo7O0FBS0EsY0FDRyxHQURILENBQ08sS0FBSyxTQUFMLENBQWUsSUFBZixDQURQLEVBRUcsUUFGSCxDQUVZLEtBRlo7O0FBSUEsYUFBTSxDQUFOLEVBQVMsTUFBVDtBQUNEOzs7Ozs7bUJBZ0RZLFc7Ozs7Ozs7O0FDMVJmLDBDIiwiZmlsZSI6InZpc3VhbC1idWlsZGVyL3NjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGE2MWYwZTAzNjhhZjBmMDhlNTQxXG4gKiovIiwiaW1wb3J0ICcuL2J1bmRsZS5jc3MnO1xuXG5pbXBvcnQgRnJvbnRlbmRNb25zdGVyIGZyb20gJy4vRnJvbnRlbmRNb25zdGVyJztcblxud2luZG93LkZyb250ZW5kTW9uc3RlciA9IG5ldyBGcm9udGVuZE1vbnN0ZXIoKTtcbi8vXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9idW5kbGUuanNcbiAqKi8iLCJpbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi8uLi92aXN1YWwtZnJhbWUvRnJhbWVBcGknO1xuXG5jbGFzcyBCYXNlRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2aXN1YWxCdWlsZGVyLCBuYW1lKSB7XG4gICAgdGhpcy52aXN1YWxCdWlsZGVyID0gdmlzdWFsQnVpbGRlcjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFyZ2V0ID0gJCh0aGlzLnZpc3VhbEJ1aWxkZXIuc2V0dGluZ3NbJ2ZyYW1lLXNlbGVjdG9yJ10pWzBdLmNvbnRlbnRXaW5kb3c7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICAvLyBkZWFjdGl2YXRlIGN1cnJlbnQgc2VsZWN0ZWQgZW52aXJvbm1lbnRcbiAgICBpZiAodGhpcy5uYW1lID09PSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3VycmVudEVudmlyb25tZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnZpc3VhbEJ1aWxkZXIuY3VycmVudEVudmlyb25tZW50KSB7XG4gICAgICB0aGlzLnZpc3VhbEJ1aWxkZXIuZW52aXJvbm1lbnRzLmdldCh0aGlzLnZpc3VhbEJ1aWxkZXIuY3VycmVudEVudmlyb25tZW50KS5kZWFjdGl2YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIuY2xlYXJTdGFja2FibGUoKTtcbiAgfVxuXG4gIHNlbmRNZXNzYWdlKGZ1bmMsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy50YXJnZXQsIGZ1bmMsIGFyZ3MpO1xuICB9XG5cbiAgcGFnZUNoYW5nZWQoKSB7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlRW52aXJvbm1lbnQ7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL0Jhc2VFbnZpcm9ubWVudC5qc1xuICoqLyIsImNsYXNzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcblxuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlcyh3KSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBnZXQgZnJhbWUkKCkge1xuICAgIHJldHVybiB3aW5kb3cuRnJvbnRlbmRNb25zdGVyLmJ1aWxkZXIuZnJhbWVDb250ZW50V2luZG93LiQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUVkaXRhYmxlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9CYXNlRWRpdGFibGUuanNcbiAqKi8iLCJjbGFzcyBGcmFtZUFwaSB7XG4gIHN0YXRpYyBnZXQgaXNJZSgpIHtcbiAgICAvKiBnbG9iYWwgaXMgKi9cbiAgICBpZiAodHlwZW9mKGlzKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBpcy5pZSgpOy8vIHx8IGlzLmVkZ2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRpYyBiaW5kTWVzc2FnZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFja0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgIGxldCBtZXNzYWdlID0gbnVsbDtcbiAgICAgIGlmIChGcmFtZUFwaS5pc0llKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZSA9IGV2ZW50LmRhdGE7XG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0ZW5lclttZXNzYWdlLmZ1bmNdKSB7XG4gICAgICAgIGxpc3RlbmVyW21lc3NhZ2UuZnVuY10uYXBwbHkobGlzdGVuZXIsIG1lc3NhZ2UuYXJncyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElFOFxuICAgICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbm1lc3NhZ2UnLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHNlbmRNZXNzYWdlKHRhcmdldCwgZnVuYywgYXJncykge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBmdW5jLFxuICAgICAgYXJnc1xuICAgIH07XG4gICAgY29uc3QgbWVzc2FnZSA9IEZyYW1lQXBpLmlzSWUgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IGRhdGE7XG5cbiAgICB0YXJnZXQucG9zdE1lc3NhZ2UobWVzc2FnZSwgJyonKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcmFtZUFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanNcbiAqKi8iLCJpbXBvcnQgVmlzdWFsQnVpbGRlciBmcm9tICcuL2NvbXBvbmVudHMvYnVpbGRlci9WaXN1YWxCdWlsZGVyJztcbmltcG9ydCBWaXN1YWxGcmFtZSBmcm9tICcuL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL1Zpc3VhbEZyYW1lJztcbmltcG9ydCBIYXNoQXBpIGZyb20gJy4vY29tcG9uZW50cy92aXN1YWwtZnJhbWUvSGFzaEFwaSc7XG5cbmNsYXNzIEZyb250ZW5kTW9uc3RlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFyYW1zKCk7XG4gICAgdGhpcy52aXN1YWxCdWxkZXIgPSBudWxsO1xuICAgIHRoaXMuaGFzaEFwaSA9IG5ldyBIYXNoQXBpKCk7XG4gICAgaWYgKHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdyAmJiB3aW5kb3cucGFyZW50LkZyb250ZW5kTW9uc3Rlcikge1xuICAgICAgaWYgKHdpbmRvdy5wYXJlbnQuRnJvbnRlbmRNb25zdGVyLmhhc0J1aWxkZXIpIHtcbiAgICAgICAgdGhpcy5WaXN1YWxGcmFtZSA9IG5ldyBWaXN1YWxGcmFtZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiBnbG9iYWwgc21vb3RoU2Nyb2xsOiBmYWxzZSovXG4gICAgaWYgKHR5cGVvZihzbW9vdGhTY3JvbGwpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc21vb3RoU2Nyb2xsLmluaXQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBWaXN1YWxCdWlsZGVyIGNsYXNzIGluc3RhbmNlXG4gICAqIEByZXR1cm5zIFZpc3VhbEJ1aWxkZXJcbiAgICovXG4gIGdldCBidWlsZGVyKCkge1xuICAgIGlmICh0aGlzLnZpc3VhbEJ1bGRlciA9PT0gbnVsbCkge1xuICAgICAgdGhpcy52aXN1YWxCdWxkZXIgPSBuZXcgVmlzdWFsQnVpbGRlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy52aXN1YWxCdWxkZXI7XG4gIH1cblxuICAvKipcbiAgICogSWYgdGhpcyBGcm9udGVuZE1vbnN0ZXIgaW5zdGFuY2UgaGFzIFZpc3VhbCBCdWlsZGVyIG9uIHBhZ2VcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaGFzQnVpbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZGVyLiRidWlsZGVyLmxlbmd0aCA9PT0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIEZyb250ZW5kTW9uc3RlciBzZXR0aW5ncy5cbiAgICogVXNlcyBGcm9udGVuZE1vbnN0ZXJTZXR0aW5ncyB2YXJpYWJsZSBpZiBwcm92aWRlZCBvciBkZWZhdWx0IHZhbHVlcyBpbnN0ZWFkLlxuICAgKi9cbiAgcGFyYW1zKCkge1xuICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5Gcm9udGVuZE1vbnN0ZXJTZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHVzZXJTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcm9udGVuZE1vbnN0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL0Zyb250ZW5kTW9uc3Rlci5qc1xuICoqLyIsImltcG9ydCBhbGxFZGl0YWJsZXMgZnJvbSAnLi9lZGl0YWJsZXMvYWxsJztcblxuY2xhc3MgRWRpdGFibGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVkaXRhYmxlc0J5VHlwZSA9IHt9O1xuICAgIC8vIGluaXRpYWxpemUgYmFzZSBidWlsZC1pbiBlZGl0YWJsZXNcbiAgICBhbGxFZGl0YWJsZXMoKTtcbiAgICB0aGlzLmVkaXRhYmxlc0J5VHlwZSA9IHdpbmRvdy5NT05TVEVSX0VESVRBQkxFUztcbiAgfVxuXG4gIHNlcmlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3QgZWRpdGFibGUgPSAkbm9kZS5kYXRhKCdlZGl0YWJsZVBhcmFtcycpO1xuICAgIGlmICh0eXBlb2YoZWRpdGFibGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgdHlwZSA9IGVkaXRhYmxlLmhhc093blByb3BlcnR5KCd0eXBlJykgPyBlZGl0YWJsZS50eXBlIDogJ3N0cmluZyc7XG4gICAgaWYgKHRoaXMuZWRpdGFibGVzQnlUeXBlLmhhc093blByb3BlcnR5KHR5cGUpID09PSBmYWxzZSkge1xuICAgICAgdHlwZSA9ICdzdHJpbmcnO1xuICAgIH1cblxuICAgIGNvbnN0IGV4cG9ydFZhcmlhYmxlID0gZWRpdGFibGUuaGFzT3duUHJvcGVydHkoJ3RhcmdldCcpID8gZWRpdGFibGUudGFyZ2V0IDogJ2RhdGEnO1xuXG4gICAgcmV0dXJuIHRoaXMuZWRpdGFibGVzQnlUeXBlW3R5cGVdLnNlcmlhbGl6ZU5vZGUoJG5vZGUsIGV4cG9ydFZhcmlhYmxlKTtcbiAgfVxuXG4gIGluaXRpYWxpemVFZGl0YWJsZXModykge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZWRpdGFibGVzQnlUeXBlKS5mb3JFYWNoKGVkaXRhYmxlS2V5ID0+IHtcbiAgICAgIGNvbnN0IGVkaXRhYmxlID0gdGhpcy5lZGl0YWJsZXNCeVR5cGVbZWRpdGFibGVLZXldO1xuICAgICAgZWRpdGFibGUuaW5pdGlhbGl6ZUVkaXRhYmxlcyh3KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0YWJsZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL0VkaXRhYmxlLmpzXG4gKiovIiwiY2xhc3MgTWF0ZXJpYWwge1xuICBjb25zdHJ1Y3Rvcigkbm9kZSkge1xuICAgIHRoaXMuJG5vZGUgPSAkbm9kZTtcbiAgICB0aGlzLm1hdGVyaWFsUGF0aCA9IHRoaXMuJG5vZGUuZGF0YSgnbWF0ZXJpYWxQYXRoJyk7XG5cbiAgICB0aGlzLm1hdGVyaWFsTmFtZSA9IHRoaXMubWF0ZXJpYWxQYXRoLnJlcGxhY2UoLy4qXFwuKC4qKSQvLCAnJDEnKTtcbiAgICAvLyBAdG9kbyBDSEFOR0UgVEhJU1xuICAgIHRoaXMua2V5ID0gdGhpcy4kbm9kZS5kYXRhKCdtYXRlcmlhbEluZGV4Jyk7XG4gIH1cblxuICBwcm9jZXNzTWF0ZXJpYWwoKSB7XG4gICAgcmV0dXJuICQoYDxsaSBjbGFzcz1cInBhZ2Utc3RydWN0dXJlX19tYXRlcmlhbFwiPiR7dGhpcy5tYXRlcmlhbE5hbWV9PC9saT5gKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5Gcm9udGVuZE1vbnN0ZXIuYnVpbGRlci5lZGl0YWJsZS5zZXJpYWxpemVFZGl0YWJsZSgkbm9kZSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGZyYW1lJCgpIHtcbiAgICByZXR1cm4gd2luZG93LkZyb250ZW5kTW9uc3Rlci5idWlsZGVyLmZyYW1lQ29udGVudFdpbmRvdy4kO1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIC8vIG1hdGVyaWFsIGhhcyBkYXRhLWVkaXRhYmxlLWtleXMgd2l0aCBzY2hlbWFcbiAgICBjb25zdCBlZGl0YWJsZUtleXMgPSB0aGlzLiRub2RlLmRhdGEoJ2VkaXRhYmxlS2V5cycpO1xuICAgIGNvbnN0IHJlY3Vyc2l2ZUl0ZXJhdG9yID0gZnVuY3Rpb24gaXRlcihhcnIsIHBhdGgsICRzY29wZSkge1xuICAgICAgY29uc3QgZmluYWwgPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKGFycikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBsZXQgZnVsbEtleVBhdGggPSBrZXk7XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgZnVsbEtleVBhdGggPSBgJHtwYXRofS4ke2tleX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YoYXJyW2tleV0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNvbnN0ICRpdGVtcyA9ICRzY29wZS5maW5kKGBbZGF0YS1yZWN1cnNpdmUtaXRlbT1cIiR7ZnVsbEtleVBhdGh9XCJdYCk7XG4gICAgICAgICAgZmluYWxba2V5XSA9IHt9O1xuICAgICAgICAgICRpdGVtcy5lYWNoKGZ1bmN0aW9uIGl0ZW1zUmVjKCkge1xuICAgICAgICAgICAgY29uc3QgJHRoaXMgPSBNYXRlcmlhbC5mcmFtZSQodGhpcyk7XG4gICAgICAgICAgICBmaW5hbFtrZXldWyR0aGlzLmRhdGEoJ3JlY3Vyc2l2ZUl0ZW1LZXknKV0gPSByZWN1cnNpdmVJdGVyYXRvcihcbiAgICAgICAgICAgICAgYXJyW2tleV0sXG4gICAgICAgICAgICAgICdpdGVtJyxcbiAgICAgICAgICAgICAgJHRoaXNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgJG5vZGUgPSBNYXRlcmlhbC5mcmFtZSQoXG4gICAgICAgICAgICAkc2NvcGUuZmluZChgW2RhdGEtZWRpdGFibGUta2V5PVwiJHtmdWxsS2V5UGF0aH1cIl1gKS5maXJzdCgpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmaW5hbFtrZXldID0gTWF0ZXJpYWwuc2VyaWFsaXplTm9kZSgkbm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZpbmFsO1xuICAgIH07XG5cbiAgICByZXR1cm4gcmVjdXJzaXZlSXRlcmF0b3IoZWRpdGFibGVLZXlzLCAnJywgTWF0ZXJpYWwuZnJhbWUkKHRoaXMuJG5vZGUpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1BhZ2VTdHJ1Y3R1cmVDb21wb25lbnRzL01hdGVyaWFsLmpzXG4gKiovIiwiaW1wb3J0IE1hdGVyaWFsIGZyb20gJy4vTWF0ZXJpYWwnO1xuXG5jbGFzcyBSZWdpb24ge1xuICBjb25zdHJ1Y3Rvcigkbm9kZSwgdGFyZ2V0JCkge1xuICAgIHRoaXMubWF0ZXJpYWxzID0ge307XG4gICAgdGhpcy4kbm9kZSA9ICRub2RlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSAkbm9kZS5kYXRhKCdjb250ZW50RGVzY3JpcHRpb24nKTtcbiAgICB0aGlzLnRhcmdldCQgPSB0YXJnZXQkO1xuICB9XG5cbiAgcHJvY2Vzc1JlZ2lvbigpIHtcbiAgICB0aGlzLmtleSA9IHRoaXMuJG5vZGUuZGF0YSgncmVnaW9uS2V5Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLnJlZ2lvbkRlc2NyaXB0aW9uID8gdGhpcy5yZWdpb25EZXNjcmlwdGlvbiA6IHRoaXMua2V5O1xuICAgIGNvbnN0ICRyZWdpb25MaSA9ICQoYDxsaSBjbGFzcz1cInBhZ2Utc3RydWN0dXJlX19yZWdpb25cIj4ke2Rlc2NyaXB0aW9ufTwvbGk+YCk7XG5cbiAgICB0aGlzLmlkID0gdGhpcy4kbm9kZS5kYXRhKCdyZWdpb25JZCcpO1xuICAgIGNvbnN0ICRyZWdpb25VbCA9ICQoJzx1bCBjbGFzcz1cInBhZ2Utc3RydWN0dXJlX19yZWdpb24tbWF0ZXJpYWxzXCI+PC91bD4nKTtcblxuICAgIGNvbnN0ICRtYXRlcmlhbHMgPSB0aGlzLiRub2RlLmZpbmQoJ1tkYXRhLWlzLW1hdGVyaWFsPTFdJyk7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAkbWF0ZXJpYWxzLmVhY2goZnVuY3Rpb24gbWF0ZXJpYWxzSXRlcmF0b3IoKSB7XG4gICAgICBjb25zdCAkbWF0ZXJpYWxOb2RlID0gdGhhdC50YXJnZXQkKHRoaXMpO1xuICAgICAgY29uc3QgbWF0ZXJpYWxPYmplY3QgPSBuZXcgTWF0ZXJpYWwoJG1hdGVyaWFsTm9kZSk7XG4gICAgICBjb25zdCAkbGkgPSBtYXRlcmlhbE9iamVjdC5wcm9jZXNzTWF0ZXJpYWwoKTtcbiAgICAgIHRoYXQubWF0ZXJpYWxzW21hdGVyaWFsT2JqZWN0LmtleV0gPSBtYXRlcmlhbE9iamVjdDtcbiAgICAgICRyZWdpb25VbC5hcHBlbmQoJGxpKTtcbiAgICB9KTtcblxuICAgICRyZWdpb25MaS5hcHBlbmQoJHJlZ2lvblVsKTtcbiAgICByZXR1cm4gJHJlZ2lvbkxpO1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IG1hdGVyaWFscyA9IHRoaXMubWF0ZXJpYWxzO1xuICAgIE9iamVjdC5rZXlzKG1hdGVyaWFscykuZm9yRWFjaChmdW5jdGlvbiBpdGVyKG1hdGVyaWFsS2V5KSB7XG4gICAgICByZXN1bHRbbWF0ZXJpYWxLZXldID0gbWF0ZXJpYWxzW21hdGVyaWFsS2V5XS5zZXJpYWxpemUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgbWF0ZXJpYWxzRGVjbCgpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAvLyBmb3IgKGNvbnN0IG1hdGVyaWFsS2V5IGluIHRoaXMubWF0ZXJpYWxzKSB7XG4gICAgLy8gICBpZiAodGhpcy5tYXRlcmlhbHMuaGFzT3duUHJvcGVydHkobWF0ZXJpYWxLZXkpKSB7XG4gICAgLy8gICAgIHJlc3VsdFttYXRlcmlhbEtleV0gPSB7XG4gICAgLy8gICAgICAgJ21hdGVyaWFsJzogdGhpcy5tYXRlcmlhbHNbbWF0ZXJpYWxLZXldLm1hdGVyaWFsUGF0aCxcbiAgICAvLyAgICAgfTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgY29uc3QgJG1hdGVyaWFscyA9IHRoaXMuJG5vZGUuZmluZCgnW2RhdGEtaXMtbWF0ZXJpYWw9MV0nKTtcbiAgICBjb25zdCBtYXRlcmlhbHNPcmRlciA9IFtdO1xuICAgICRtYXRlcmlhbHMuZWFjaChmdW5jdGlvbiBtYXRlcmlhbHNJdGVyYXRvcigpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSAkdGhpcy5kYXRhKCdtYXRlcmlhbEluZGV4Jyk7XG4gICAgICBtYXRlcmlhbHNPcmRlci5wdXNoKG1hdGVyaWFsSW5kZXgpO1xuICAgICAgcmVzdWx0W21hdGVyaWFsSW5kZXhdID0ge1xuICAgICAgICBtYXRlcmlhbDogJHRoaXMuZGF0YSgnbWF0ZXJpYWxQYXRoJyksXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBkZWNsOiByZXN1bHQsXG4gICAgICBtYXRlcmlhbHNPcmRlclxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaW9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZUNvbXBvbmVudHMvUmVnaW9uLmpzXG4gKiovIiwiaW1wb3J0IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQnO1xuaW1wb3J0IE1hdGVyaWFsc0Vudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50JztcbmltcG9ydCBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50JztcbmltcG9ydCBBY3Rpb25FbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudCc7XG5pbXBvcnQgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCc7XG5pbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi8uLi92aXN1YWwtZnJhbWUvRnJhbWVBcGknO1xuaW1wb3J0IEVkaXRhYmxlIGZyb20gJy4vRWRpdGFibGUnO1xuXG5jbGFzcyBWaXN1YWxCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLnJlc29sdXRpb25Td2l0Y2hlcigpO1xuXG4gICAgdGhpcy5lbnZpcm9ubWVudHMgPSBuZXcgTWFwKFtcbiAgICAgIFsnc2l0ZS1zdHJ1Y3R1cmUnLCBuZXcgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdzaXRlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsncGFnZS1zdHJ1Y3R1cmUnLCBuZXcgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdwYWdlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsnbWF0ZXJpYWxzJywgbmV3IE1hdGVyaWFsc0Vudmlyb25tZW50KHRoaXMsICdtYXRlcmlhbHMnKV0sXG4gICAgICBbJ2N1c3RvbWl6YXRpb24nLCBuZXcgQ3VzdG9taXphdGlvbkVudmlyb25tZW50KHRoaXMsICdjdXN0b21pemF0aW9uJyldLFxuICAgICAgWydhY3Rpb24nLCBuZXcgQWN0aW9uRW52aXJvbm1lbnQodGhpcywgJ2FjdGlvbicpXSxcbiAgICBdKTtcblxuICAgIHRoaXMuZW52aXJvbm1lbnRTZWxlY3RvcigpO1xuXG4gICAgLy8gc2VsZWN0IGZpcnN0IGVudmlyb25tZW50IGJ5IGRlZmF1bHRcbiAgICB0aGlzLnN3aXRjaEVudmlyb25tZW50KCdzaXRlLXN0cnVjdHVyZScpO1xuICAgICQoJy5tb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJylcbiAgICAgIC5maXJzdCgpXG4gICAgICAubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICBGcmFtZUFwaS5iaW5kTWVzc2FnZUxpc3RlbmVyKHRoaXMpO1xuXG4gICAgdGhpcy5lZGl0YWJsZSA9IG5ldyBFZGl0YWJsZSgpO1xuXG4gICAgdGhpcy5jb250cm9scygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgVmlzdWFsQnVpbGRlciBzZXR0aW5ncy5cbiAgICogVXNlcyBWaXN1YWxCdWlsZGVyU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuVmlzdWFsQnVpbGRlclNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgJ2VsZW1lbnQtc2VsZWN0b3InOiAnLm1vbnN0ZXItdmlzdWFsLWJ1aWxkZXInLFxuICAgICAgJ2ZyYW1lLXNlbGVjdG9yJzogJy5tb25zdGVyLXZpc3VhbC1mcmFtZScsXG4gICAgICBidW5kbGVzOiB7fSxcbiAgICAgICdzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJzogJ21vbnN0ZXItc3RhY2thYmxlLWNvbnRhaW5lcicsXG4gICAgICAnbmV3LWJsb2NrLXVybCc6ICcvbW9uc3Rlci92aXN1YWwtYnVpbGRlci9uZXctYmxvY2snLFxuICAgIH07XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuJGJ1aWxkZXIgPSAkKHRoaXMuc2V0dGluZ3NbJ2VsZW1lbnQtc2VsZWN0b3InXSk7XG4gICAgdGhpcy4kc3RhY2thYmxlID0gJChgLiR7dGhpcy5zZXR0aW5nc1snc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyddfWApO1xuICB9XG5cbiAgcmVzb2x1dGlvblN3aXRjaGVyKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGJlbUVsZW0gPSAncmVzb2x1dGlvbi1zd2l0Y2hlcl9fcmVzb2x1dGlvbi1saW5rJztcbiAgICBjb25zdCBhY3RpdmVNb2RpZmllciA9IGAke2JlbUVsZW19LS1hY3RpdmVgO1xuICAgIGNvbnN0ICRyZXNvbHV0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRyZXNvbHV0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAkcmVzb2x1dGlvbkxpbmtzLnJlbW92ZUNsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgICQodGhhdC5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSkud2lkdGgoJCh0aGlzKS5kYXRhKCdyZXNvbHV0aW9uV2lkdGgnKSk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGVudmlyb25tZW50U2VsZWN0b3IoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgYmVtRWxlbSA9ICdtb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJztcbiAgICBjb25zdCBhY3RpdmVNb2RpZmllciA9IGAke2JlbUVsZW19LS1hY3RpdmVgO1xuICAgIGNvbnN0ICRzZWN0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRzZWN0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBjb25zdCBlbnZpcm9ubWVudE5hbWUgPSAkKHRoaXMpLmRhdGEoJ2Vudmlyb25tZW50TmFtZScpO1xuICAgICAgaWYgKHRoYXQuY3VycmVudEVudmlyb25tZW50ID09PSBlbnZpcm9ubWVudE5hbWUpIHtcbiAgICAgICAgJHNlY3Rpb25MaW5rcy5yZW1vdmVDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICAgIHRoYXQuZW52aXJvbm1lbnRzLmdldChlbnZpcm9ubWVudE5hbWUpLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgdGhhdC5jdXJyZW50RW52aXJvbm1lbnQgPSBudWxsO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgICRzZWN0aW9uTGlua3MucmVtb3ZlQ2xhc3MoYWN0aXZlTW9kaWZpZXIpO1xuICAgICAgdGhhdC5zd2l0Y2hFbnZpcm9ubWVudChlbnZpcm9ubWVudE5hbWUpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBzd2l0Y2hFbnZpcm9ubWVudChlbnZpcm9ubWVudE5hbWUpIHtcbiAgICB0aGlzLmVudmlyb25tZW50cy5nZXQoZW52aXJvbm1lbnROYW1lKS5hY3RpdmF0ZSgpO1xuICAgIHRoaXMuY3VycmVudEVudmlyb25tZW50ID0gZW52aXJvbm1lbnROYW1lO1xuICB9XG5cbiAgY2xlYXJTdGFja2FibGUoKSB7XG4gICAgdGhpcy4kc3RhY2thYmxlLmVtcHR5KCk7XG4gIH1cblxuICBjcmVhdGVTdGFja2FibGVQYW5lKCkge1xuICAgIGNvbnN0IHBhbmVDbGFzcyA9IGAke3RoaXMuc2V0dGluZ3NbJ3N0YWNrYWJsZS1jb250YWluZXItY2xhc3MnXX1fX3BhbmVgO1xuICAgIGNvbnN0IG1vZGlmaWVyID0gdGhpcy4kc3RhY2thYmxlLmZpbmQoYC4ke3BhbmVDbGFzc31gKS5sZW5ndGggPT09IDBcbiAgICAgID8gYCR7cGFuZUNsYXNzfS0tZmlyc3RgXG4gICAgICA6ICcnO1xuICAgIGNvbnN0ICRuZXdQYW5lID0gJChgPGRpdiBjbGFzcz1cIiR7cGFuZUNsYXNzfSAke21vZGlmaWVyfVwiPjwvZGl2PmApO1xuICAgIHRoaXMuJHN0YWNrYWJsZS5hcHBlbmQoJG5ld1BhbmUpO1xuICAgIHJldHVybiAkbmV3UGFuZTtcbiAgfVxuXG4gIG1hdGVyaWFsQnlOYW1lKG5hbWUpIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5tYXRlcmlhbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLm1hdGVyaWFsc1tuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXQgZnJhbWVDb250ZW50V2luZG93KCkge1xuICAgIHJldHVybiAkKHRoaXMuc2V0dGluZ3NbJ2ZyYW1lLXNlbGVjdG9yJ10pWzBdLmNvbnRlbnRXaW5kb3c7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgLy8gRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5mcmFtZUNvbnRlbnRXaW5kb3csICdzZXJpYWxpemVDb250ZW50JywgWydsb2cnXSk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5lbnZpcm9ubWVudHMuZ2V0KCdwYWdlLXN0cnVjdHVyZScpLnNlcmlhbGl6ZVBhZ2UoKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgLy8gd2UgaGF2ZSByZXN1bHQgd2hpY2ggaXMgY29udGVudCBpbiBmb3JtYXQ6XG4gICAgLy8gcmVnaW9uXG4gICAgLy8gLS0tIG1hdGVyaWFsIGlkXG4gICAgLy8gLS0tLS0tLSBrZXlzID0+IHZhbHVlc1xuICAgIC8vXG4gICAgLy8gb3VyIFByb3ZpZGVycyBzaG91bGQgZ2V0IG9ubHkgdGhvc2Uga2V5cyB0aGF0IHRoZXkgcHJvdmlkZVxuICAgIC8vIHByb3ZpZGVkIGtleXMgYXJlIHN0b3JlZCBpbiBmcmFtZUNvbnRlbnRXaW5kb3cuTU9OU1RFUl9FRElUX01PREVfREFUQS50ZW1wbGF0ZS5wcm92aWRlZEtleXNcbiAgICBjb25zdCByZXN1bHRCeVByb3ZpZGVycyA9IHt9O1xuICAgIGNvbnN0IHByb3ZpZGVkS2V5cyA9IHRoaXMuZnJhbWVDb250ZW50V2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEudGVtcGxhdGUucHJvdmlkZWRLZXlzO1xuXG4gICAgT2JqZWN0LmtleXMocHJvdmlkZWRLZXlzKS5mb3JFYWNoKHByb3ZpZGVySW5kZXggPT4ge1xuICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF0gPSB7fTtcblxuICAgICAgY29uc3QgcmVnaW9ucyA9IHByb3ZpZGVkS2V5c1twcm92aWRlckluZGV4XTtcblxuICAgICAgT2JqZWN0LmtleXMocmVnaW9ucykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0Lmhhc093blByb3BlcnR5KHJlZ2lvbktleSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdW3JlZ2lvbktleV0gPSB7fTtcblxuICAgICAgICAvLyBnbyBkZWVwIHRvIG1hdGVyaWFsIGluZGVjZXNcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gcmVnaW9uc1tyZWdpb25LZXldO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG1hdGVyaWFscykuZm9yRWFjaChtYXRlcmlhbEluZGV4ID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0W3JlZ2lvbktleV0uaGFzT3duUHJvcGVydHkobWF0ZXJpYWxJbmRleCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdW3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF0gPSB7fTtcblxuICAgICAgICAgIGNvbnN0IGRhdGFLZXlzID0gbWF0ZXJpYWxzW21hdGVyaWFsSW5kZXhdO1xuXG4gICAgICAgICAgZGF0YUtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdFtyZWdpb25LZXldW21hdGVyaWFsSW5kZXhdLmhhc093blByb3BlcnR5KGtleSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzXG4gICAgICAgICAgICAgIFtwcm92aWRlckluZGV4XVxuICAgICAgICAgICAgICBbcmVnaW9uS2V5XVxuICAgICAgICAgICAgICBbbWF0ZXJpYWxJbmRleF1cbiAgICAgICAgICAgICAgW2tleV0gPSByZXN1bHRbcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XVtrZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdEJ5UHJvdmlkZXJzKTtcbiAgICByZXR1cm4gcmVzdWx0QnlQcm92aWRlcnM7XG4gIH1cblxuICBwYWdlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmVudmlyb25tZW50cy5mb3JFYWNoKFxuICAgICAgZW52aXJvbm1lbnQgPT5cbiAgICAgICAgZW52aXJvbm1lbnQucGFnZUNoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICBsb2cocmVzdWx0KSB7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgfVxuXG4gIGNvbnRyb2xzKCkge1xuICAgIHRoaXMuJGNvbnRyb2xzID0gdGhpcy4kYnVpbGRlci5maW5kKCcuY29udHJvbHMnKS5maXJzdCgpO1xuICAgIHRoaXMuJGNvbnRyb2xzLmVsZW0oJ3JlZnJlc2gnKS5jbGljaygoKSA9PiB7XG4gICAgICB0aGlzLmZyYW1lQ29udGVudFdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLiRjb250cm9scy5lbGVtKCdzYXZlJykuY2xpY2soKCkgPT4ge1xuICAgICAgRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5mcmFtZUNvbnRlbnRXaW5kb3csICdzYXZlJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsQnVpbGRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXIuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgV1lTSVdZRyBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gQmFzZUVkaXRhYmxlLmZyYW1lJCgkbm9kZSk7XG4gICAgY29uc3QgZWRpdG9yID0gbm9kZS5kYXRhKCdlZGl0b3InKTtcbiAgICBpZiAoZWRpdG9yKSB7XG4gICAgICByZXR1cm4gZWRpdG9yLmdldERhdGEoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUuaHRtbCgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlcyh3KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSAnW2RhdGEtZWRpdGFibGUtdHlwZT13eXNpd3lnXSc7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgYXV0b1BhcmFncmFwaDogZmFsc2UsXG4gICAgICBlbmFibGVDb250ZW50RWRpdGFibGU6IHRydWUsXG4gICAgICBpZ25vcmVFbXB0eVBhcmFncmFwaDogdHJ1ZSxcbiAgICAgIGVudGVyTW9kZTogdy5DS0VESVRPUi5FTlRFUl9CUixcbiAgICB9O1xuXG4gICAgdy4kKCgpID0+IHtcbiAgICAgIHcuJChzZWxlY3RvcikuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgICBjb25zdCBlZGl0b3IgPSB3LkFsbG95RWRpdG9yLmVkaXRhYmxlKHRoaXMsIGNvbmZpZykuZ2V0KCduYXRpdmVFZGl0b3InKTtcbiAgICAgICAgdy4kKHRoaXMpLmRhdGEoJ2VkaXRvcicsIGVkaXRvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXWVNJV1lHO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL1dZU0lXWUcuanNcbiAqKi8iLCJpbXBvcnQgV1lTSVdZRyBmcm9tICcuL1dZU0lXWUcnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9saW5rJztcbmltcG9ydCBUZXh0U3RyaW5nIGZyb20gJy4vc3RyaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWxsKCkge1xuICBpZiAodHlwZW9mKHdpbmRvdy5NT05TVEVSX0VESVRBQkxFUykgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTID0ge307XG4gIH1cbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWyd3eXNpd3lnJ10gPSBuZXcgV1lTSVdZRygpO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ2xpbmsnXSA9IG5ldyBMaW5rKCk7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snaW1hZ2UnXSA9IG5ldyBJbWFnZSgpO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ3N0cmluZyddID0gbmV3IFRleHRTdHJpbmcoKTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lZGl0YWJsZXMvYWxsLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFZGl0YWJsZSBmcm9tICcuL0Jhc2VFZGl0YWJsZSc7XG5cbmNsYXNzIEltYWdlIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIGNvbnN0ICRpbWcgPSAkbm9kZS5maW5kKCdpbWcnKS5maXJzdCgpO1xuICAgIHJldHVybiB7XG4gICAgICBzcmM6ICRpbWcuYXR0cignc3JjJyksXG4gICAgICBhbHQ6ICRpbWcuYXR0cignYWx0JyksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9pbWFnZS5qc1xuICoqLyIsImltcG9ydCBCYXNlRWRpdGFibGUgZnJvbSAnLi9CYXNlRWRpdGFibGUnO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQmFzZUVkaXRhYmxlIHtcbiAgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiAkbm9kZS5kYXRhKCdvcmlnaW5hbEhyZWYnKSA/ICRub2RlLmRhdGEoJ29yaWdpbmFsSHJlZicpIDogJG5vZGUuYXR0cignaHJlZicpLFxuICAgICAgYW5jaG9yOiAkbm9kZS5odG1sKCksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL2xpbmsuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgVGV4dFN0cmluZyBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gQmFzZUVkaXRhYmxlLmZyYW1lJCgkbm9kZSk7XG4gICAgY29uc3QgZWRpdG9yID0gbm9kZS5kYXRhKCdlZGl0b3InKTtcbiAgICBpZiAoZWRpdG9yKSB7XG4gICAgICByZXR1cm4gZWRpdG9yLmdldERhdGEoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUuaHRtbCgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlcyh3KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSAnW2RhdGEtZWRpdGFibGUtdHlwZT1zdHJpbmddLFtkYXRhLWVkaXRhYmxlLXR5cGU9dGV4dF0nO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGFsbG93ZWRDb250ZW50OiAnaSB1JyxcbiAgICAgIHRvb2xiYXJzOiB7XG4gICAgICAgIHN0eWxlczoge1xuICAgICAgICAgIHNlbGVjdGlvbnM6IHcuQWxsb3lFZGl0b3IuU2VsZWN0aW9ucyxcbiAgICAgICAgICB0YWJJbmRleDogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhdXRvUGFyYWdyYXBoOiBmYWxzZSxcbiAgICAgIGVuYWJsZUNvbnRlbnRFZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlnbm9yZUVtcHR5UGFyYWdyYXBoOiB0cnVlLFxuICAgICAgYmxvY2tsZXNzOiB0cnVlLFxuICAgICAgZW50ZXJNb2RlOiB3LkNLRURJVE9SLkVOVEVSX0JSLFxuICAgIH07XG5cbiAgICB3LiQoKCkgPT4ge1xuICAgICAgdy4kKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgIGNvbnN0IGVkaXRvciA9IHcuQWxsb3lFZGl0b3IuZWRpdGFibGUodGhpcywgY29uZmlnKS5nZXQoJ25hdGl2ZUVkaXRvcicpO1xuICAgICAgICBlZGl0b3Iub24oJ2tleScsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5rZXlDb2RlID09PSAxMyB8fCBldmVudC5kYXRhLmtleUNvZGUgPT09IHcuQ0tFRElUT1IuU0hJRlQgKyAxMykge1xuICAgICAgICAgICAgLy8gYWRkIHNhdmluZyBmdW5jdGlvbiBoZXJlXG4gICAgICAgICAgICBldmVudC5jYW5jZWwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlZGl0b3Iub24oJ3Bhc3RlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LmRhdGEuZGF0YVZhbHVlID0gZXZlbnQuZGF0YS5kYXRhVmFsdWUucmVwbGFjZSgvPGJyW1xcc1xcL10qPi9nbWksICcgJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB3LiQodGhpcykuZGF0YSgnZWRpdG9yJywgZWRpdG9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dFN0cmluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9zdHJpbmcuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgQWN0aW9uRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBBY3Rpb25FbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIE1hdGVyaWFsc0Vudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IodmlzdWFsQnVpbGRlciwgbmFtZSkge1xuICAgIHN1cGVyKHZpc3VhbEJ1aWxkZXIsIG5hbWUpO1xuICAgIHRoaXMuaW5pdE1hdGVyaWFsc1NlbGVjdG9yKCk7XG4gIH1cblxuICBpbml0TWF0ZXJpYWxzU2VsZWN0b3IoKSB7XG4gICAgdGhpcy4kbWF0ZXJpYWxzR3JvdXBzID0gJCgnPHVsIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc1wiPjwvdWw+Jyk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzTGlzdCA9IFtdO1xuXG4gICAgdGhpcy52aXN1YWxCdWlsZGVyLnNldHRpbmdzLmJ1bmRsZXMuZm9yRWFjaChidW5kbGUgPT4ge1xuICAgICAgLyogZ2xvYmFsIHBvbHlnbG90OiBmYWxzZSAqL1xuICAgICAgY29uc3QgaTE4bkJ1bmRsZU5hbWUgPSB0eXBlb2YocG9seWdsb3QpICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHBvbHlnbG90LnQoYnVuZGxlLm5hbWUpXG4gICAgICAgIDogYnVuZGxlLm5hbWU7XG5cbiAgICAgIGNvbnN0ICRidW5kbGVUaXRsZSA9IGBcbiAgICAgIDxsaSBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX2l0ZW0gbWF0ZXJpYWxzLWdyb3Vwc19faXRlbS0tYnVuZGxlLWxhYmVsXCI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtYnVuZGxlXCIgZGF0YS1idW5kbGUtcGF0aD1cIiR7YnVuZGxlLmZ1bGxQYXRofVwiPlxuICAgICAgICAgICAgJHtpMThuQnVuZGxlTmFtZX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICAgIGA7XG4gICAgICB0aGlzLiRtYXRlcmlhbHNMaXN0LnB1c2goJGJ1bmRsZVRpdGxlKTtcblxuICAgICAgYnVuZGxlLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBOYW1lID0gZ3JvdXAubmFtZTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gZ3JvdXAubWF0ZXJpYWxzO1xuICAgICAgICBjb25zdCBpMThuR3JvdXBOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCcgPyBwb2x5Z2xvdC50KGdyb3VwTmFtZSkgOiBncm91cE5hbWU7XG4gICAgICAgIGNvbnN0ICRsaSA9ICQoYFxuICAgIDxsaSBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX2l0ZW1cIj5cbiAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS1ncm91cC1wYXRoPVwiJHtncm91cC5mdWxsUGF0aH1cIiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cFwiPlxuICAgICAgICAke2kxOG5Hcm91cE5hbWV9IDxzcGFuIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fY291bnRcIj4oJHttYXRlcmlhbHMubGVuZ3RofSk8L3NwYW4+XG4gICAgICA8L2E+XG4gICAgPC9saT5gKTtcbiAgICAgICAgdGhpcy4kbWF0ZXJpYWxzR3JvdXBzLmFwcGVuZCgkbGkpO1xuICAgICAgICBjb25zdCAkbGlzdCA9ICQoYDx1bCBjbGFzcz1cIm1hdGVyaWFscy1saXN0XCIgZGF0YS1ncm91cC1wYXRoPVwiJHtncm91cC5mdWxsUGF0aH1cIj48L3VsPmApO1xuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuXG4gICAgICAgIG1hdGVyaWFscy5mb3JFYWNoKG1hdGVyaWFsID0+IHtcbiAgICAgICAgICBjb25zdCBtYXRlcmlhbE5hbWUgPSBtYXRlcmlhbC5uYW1lO1xuICAgICAgICAgIGNvbnN0IGkxOG5NYXRlcmlhbE5hbWUgPSB0eXBlb2YocG9seWdsb3QpICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBwb2x5Z2xvdC50KG1hdGVyaWFsTmFtZSlcbiAgICAgICAgICAgIDogbWF0ZXJpYWxOYW1lO1xuICAgICAgICAgIGNvbnN0ICRpdGVtID0gJChgXG48bGk+XG4gIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtYXRlcmlhbHMtbGlzdF9faXRlbVwiIGRhdGEtbWF0ZXJpYWwtcGF0aD1cIiR7bWF0ZXJpYWwuZnVsbFBhdGh9XCI+XG4gICAgJHtpMThuTWF0ZXJpYWxOYW1lfVxuICA8L2E+XG48L2xpPlxuYCk7XG4gICAgICAgICAgaXRlbXMucHVzaCgkaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkbGlzdC5hcHBlbmQoaXRlbXMpO1xuICAgICAgICB0aGlzLiRtYXRlcmlhbHNMaXN0LnB1c2goJGxpc3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcsIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICR0aGlzLnRvZ2dsZU1vZCgnYWN0aXZlJyk7XG4gICAgICBjb25zdCBncm91cFBhdGggPSAkdGhpcy5kYXRhKCdncm91cFBhdGgnKTtcbiAgICAgIGlmICgkdGhpcy5tb2QoJ2FjdGl2ZScpKSB7XG4gICAgICAgICQoJy5tYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAnKS5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzTGlzdEFjdGl2ZUNsYXNzID0gJ21hdGVyaWFscy1saXN0LS1hY3RpdmUnO1xuXG4gICAgICAgICQoJy5tYXRlcmlhbHMtbGlzdCcpLmVhY2goZnVuY3Rpb24gaXQoKSB7XG4gICAgICAgICAgY29uc3QgJGxpc3QgPSAkKHRoaXMpO1xuICAgICAgICAgIGlmICgkbGlzdC5oYXNDbGFzcyhtYXRlcmlhbHNMaXN0QWN0aXZlQ2xhc3MpKSB7XG4gICAgICAgICAgICAkbGlzdC5yZW1vdmVDbGFzcyhtYXRlcmlhbHNMaXN0QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoJGxpc3QuZGF0YSgnZ3JvdXBQYXRoJykgPT09IGdyb3VwUGF0aCkge1xuICAgICAgICAgICAgJGxpc3QuYWRkQ2xhc3MobWF0ZXJpYWxzTGlzdEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICR0aGlzLm1vZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgICAgIHRoYXQuJG1hdGVyaWFsc1BhbmUuc2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhhdCdzIGp1c3Qgc2Vjb25kIGNsaWNrIG9uIHRoZSBzYW1lIGdyb3VwXG4gICAgICAgIHRoYXQuJG1hdGVyaWFsc1BhbmUuaGlkZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWF0ZXJpYWxzLWxpc3RfX2l0ZW0nLCBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICB0aGF0LnNlbmRNZXNzYWdlKFxuICAgICAgICAnbmV3QmxvY2snLFxuICAgICAgICBbXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKCdtYXRlcmlhbFBhdGgnKSxcbiAgICAgICAgICAnY29udGVudCcsXG4gICAgICAgIF1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICBzdXBlci5hY3RpdmF0ZSgpO1xuXG4gICAgdGhpcy4kZ3JvdXBzUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kZ3JvdXBzUGFuZS5hcHBlbmQodGhpcy4kbWF0ZXJpYWxzR3JvdXBzKTtcblxuICAgIHRoaXMuJG1hdGVyaWFsc1BhbmUgPSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3JlYXRlU3RhY2thYmxlUGFuZSgpO1xuICAgIHRoaXMuJG1hdGVyaWFsc1BhbmUuYXBwZW5kKHRoaXMuJG1hdGVyaWFsc0xpc3QpO1xuICAgIHRoaXMuJG1hdGVyaWFsc1BhbmUuaGlkZSgpO1xuXG4gICAgJCgnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcpLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbHNFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9NYXRlcmlhbHNFbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuaW1wb3J0IFJlZ2lvbiBmcm9tICcuLy4uL1BhZ2VTdHJ1Y3R1cmVDb21wb25lbnRzL1JlZ2lvbic7XG5cbmNsYXNzIFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICBzdXBlcih2aXN1YWxCdWlsZGVyLCBuYW1lKTtcbiAgICB0aGlzLmluaXRQYWdlU3RydWN0dXJlRWxlbWVudCgpO1xuICAgIHRoaXMuZWRpdE1vZGVEYXRhID0ge307XG4gIH1cblxuICBpbml0UGFnZVN0cnVjdHVyZUVsZW1lbnQoKSB7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZSA9ICQoJzx1bCBjbGFzcz1cInBhZ2Utc3RydWN0dXJlXCI+PC91bD4nKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHN1cGVyLmFjdGl2YXRlKCk7XG5cbiAgICB0aGlzLiRzdHJ1Y3R1cmVQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRzdHJ1Y3R1cmVQYW5lLmFwcGVuZCh0aGlzLiRwYWdlU3RydWN0dXJlKTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2VkKCkge1xuICAgIHN1cGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5maW5kKCdsaScpLnJlbW92ZSgpO1xuICAgIGNvbnN0IHJlZ2lvbnMgPSB0aGlzLnRhcmdldC4kKCcubS1tb25zdGVyLWNvbnRlbnRfX2NvbnRlbnQnKTtcbiAgICBjb25zdCBlbnZpcm9ubWVudCA9IHRoaXM7XG4gICAgdGhpcy5yZWdpb25zU3RydWN0dXJlID0ge307XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgcmVnaW9ucy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCAkcmVnaW9uTm9kZSA9IHRoYXQudGFyZ2V0LiQodGhpcyk7XG4gICAgICBjb25zdCByZWdpb25PYmplY3QgPSBuZXcgUmVnaW9uKCRyZWdpb25Ob2RlLCB0aGF0LnRhcmdldC4kKTtcbiAgICAgIGNvbnN0ICRyZWdpb25MaSA9IHJlZ2lvbk9iamVjdC5wcm9jZXNzUmVnaW9uKCk7XG4gICAgICB0aGF0LnJlZ2lvbnNTdHJ1Y3R1cmVbcmVnaW9uT2JqZWN0LmtleV0gPSByZWdpb25PYmplY3Q7XG4gICAgICBlbnZpcm9ubWVudC4kcGFnZVN0cnVjdHVyZS5hcHBlbmQoJHJlZ2lvbkxpKTtcbiAgICB9KTtcbiAgICB0aGlzLmVkaXRNb2RlRGF0YSA9IHRoaXMudGFyZ2V0Lk1PTlNURVJfRURJVF9NT0RFX0RBVEE7XG4gIH1cblxuICBzZXJpYWxpemVQYWdlKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMucmVnaW9uc1N0cnVjdHVyZSkuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgY29uc3QgcmVnaW9uID0gdGhpcy5yZWdpb25zU3RydWN0dXJlW3JlZ2lvbktleV07XG4gICAgICByZXN1bHRbcmVnaW9uLmtleV0gPSByZWdpb24uc2VyaWFsaXplKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIG1hdGVyaWFsc0J5UmVnaW9ucygpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMucmVnaW9uc1N0cnVjdHVyZVtyZWdpb25LZXldO1xuICAgICAgcmVzdWx0W3JlZ2lvbi5rZXldID0gcmVnaW9uLm1hdGVyaWFsc0RlY2woKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHVuaXFpZCAocHJlZml4LCBtb3JlRW50cm9weSkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3VuaXFpZC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICByZXZpc2VkIGJ5OiBLYW5rcmVsdW5lIChodHRwOi8vd3d3LndlYmZha3RvcnkuaW5mby8pXG4gIC8vICAgICAgbm90ZSAxOiBVc2VzIGFuIGludGVybmFsIGNvdW50ZXIgKGluIGxvY3V0dXMgZ2xvYmFsKSB0byBhdm9pZCBjb2xsaXNpb25cbiAgLy8gICBleGFtcGxlIDE6IHZhciAkaWQgPSB1bmlxaWQoKVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRyZXN1bHQgPSAkaWQubGVuZ3RoID09PSAxM1xuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogdmFyICRpZCA9IHVuaXFpZCgnZm9vJylcbiAgLy8gICBleGFtcGxlIDI6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gKDEzICsgJ2ZvbycubGVuZ3RoKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMzogdmFyICRpZCA9IHVuaXFpZCgnYmFyJywgdHJ1ZSlcbiAgLy8gICBleGFtcGxlIDM6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gKDIzICsgJ2JhcicubGVuZ3RoKVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuXG4gIGlmICh0eXBlb2YgcHJlZml4ID09PSAndW5kZWZpbmVkJykge1xuICAgIHByZWZpeCA9ICcnXG4gIH1cblxuICB2YXIgcmV0SWRcbiAgdmFyIF9mb3JtYXRTZWVkID0gZnVuY3Rpb24gKHNlZWQsIHJlcVdpZHRoKSB7XG4gICAgc2VlZCA9IHBhcnNlSW50KHNlZWQsIDEwKS50b1N0cmluZygxNikgLy8gdG8gaGV4IHN0clxuICAgIGlmIChyZXFXaWR0aCA8IHNlZWQubGVuZ3RoKSB7XG4gICAgICAvLyBzbyBsb25nIHdlIHNwbGl0XG4gICAgICByZXR1cm4gc2VlZC5zbGljZShzZWVkLmxlbmd0aCAtIHJlcVdpZHRoKVxuICAgIH1cbiAgICBpZiAocmVxV2lkdGggPiBzZWVkLmxlbmd0aCkge1xuICAgICAgLy8gc28gc2hvcnQgd2UgcGFkXG4gICAgICByZXR1cm4gQXJyYXkoMSArIChyZXFXaWR0aCAtIHNlZWQubGVuZ3RoKSkuam9pbignMCcpICsgc2VlZFxuICAgIH1cbiAgICByZXR1cm4gc2VlZFxuICB9XG5cbiAgdmFyICRnbG9iYWwgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBHTE9CQUwpXG4gICRnbG9iYWwuJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzIHx8IHt9XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXNcbiAgJGxvY3V0dXMucGhwID0gJGxvY3V0dXMucGhwIHx8IHt9XG5cbiAgaWYgKCEkbG9jdXR1cy5waHAudW5pcWlkU2VlZCkge1xuICAgIC8vIGluaXQgc2VlZCB3aXRoIGJpZyByYW5kb20gaW50XG4gICAgJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAweDc1YmNkMTUpXG4gIH1cbiAgJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQrK1xuXG4gIC8vIHN0YXJ0IHdpdGggcHJlZml4LCBhZGQgY3VycmVudCBtaWxsaXNlY29uZHMgaGV4IHN0cmluZ1xuICByZXRJZCA9IHByZWZpeFxuICByZXRJZCArPSBfZm9ybWF0U2VlZChwYXJzZUludChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDAsIDEwKSwgOClcbiAgLy8gYWRkIHNlZWQgaGV4IHN0cmluZ1xuICByZXRJZCArPSBfZm9ybWF0U2VlZCgkbG9jdXR1cy5waHAudW5pcWlkU2VlZCwgNSlcbiAgaWYgKG1vcmVFbnRyb3B5KSB7XG4gICAgLy8gZm9yIG1vcmUgZW50cm9weSB3ZSBhZGQgYSBmbG9hdCBsb3dlciB0byAxMFxuICAgIHJldElkICs9IChNYXRoLnJhbmRvbSgpICogMTApLnRvRml4ZWQoOCkudG9TdHJpbmcoKVxuICB9XG5cbiAgcmV0dXJuIHJldElkXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3VuaXFpZC5qc1xuICoqLyIsImNsYXNzIEhhc2hBcGkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZ1bmN0aW9uQ2FsbHMgPSB7fTtcblxuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaC5tYXRjaCgvI2hhc2hBcGk6KC4qPyk6XFwvaGFzaEFwaS8pO1xuICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgY29uc3QgZnVuY3Rpb25DYWxscyA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoZXNbMV0pKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZnVuY3Rpb25DYWxscykge1xuICAgICAgICAgIGlmIChpdGVtLmZ1bmMpIHtcbiAgICAgICAgICAgIHRoaXMuZnVuY3Rpb25DYWxsc1tpdGVtLmZ1bmNdID0gaXRlbS5hcmdzIHx8IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNob3VsZENhbGwoZnVuYykge1xuICAgIHJldHVybiB0aGlzLmZ1bmN0aW9uQ2FsbHNbZnVuY10gfHwgZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGFzaEFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvSGFzaEFwaS5qc1xuICoqLyIsImltcG9ydCBGcmFtZUFwaSBmcm9tICcuL0ZyYW1lQXBpJztcbmltcG9ydCB1bmlxdWVJZCBmcm9tICcuLy4uL3VuaXFpZCc7XG5cbmNsYXNzIFZpc3VhbEZyYW1lXG57XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFyYW1zKCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIEZyYW1lQXBpLmJpbmRNZXNzYWdlTGlzdGVuZXIodGhpcyk7XG4gICAgdGhpcy5wYXJlbnRXaW5kb3cgPSB3aW5kb3cucGFyZW50O1xuICAgIC8qKiBAdmFyIEZyb250ZW5kTW9uc3RlciAqL1xuICAgIHRoaXMucGFyZW50TW9uc3RlciA9IHRoaXMucGFyZW50V2luZG93LkZyb250ZW5kTW9uc3RlcjtcbiAgICB0aGlzLnBhcmVudEJ1aWxkZXIgPSB0aGlzLnBhcmVudE1vbnN0ZXIuYnVpbGRlcjtcbiAgICB0aGlzLmN1cnJlbnRNb25zdGVyQ29udGVudCA9IGZhbHNlO1xuICAgIHRoaXMubWFrZUl0TW92ZSgpO1xuICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVIYW5kbGVycygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgJCgoKSA9PiB7XG4gICAgICB0aGlzLnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAgIHRoaXMucGFyZW50QnVpbGRlci5lZGl0YWJsZS5pbml0aWFsaXplRWRpdGFibGVzKHdpbmRvdyk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgJG1vbnN0ZXJDb250ZW50KCkge1xuICAgIGlmICh0aGlzLiRtb25zdGVyQ29udGVudENhY2hlKSB7XG4gICAgICByZXR1cm4gdGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZTtcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpO1xuICAgIHJldHVybiB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlO1xuICB9XG5cbiAgcmVmcmVzaE1vbnN0ZXJDb250ZW50Q2FjaGUoKSB7XG4gICAgdGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZSA9IHt9O1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICQodGhpcy5zZXR0aW5nc1snbW9uc3Rlci1jb250ZW50LXNlbGVjdG9yJ10pLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGlmICghdGhhdC5jdXJyZW50TW9uc3RlckNvbnRlbnQpIHtcbiAgICAgICAgdGhhdC5jdXJyZW50TW9uc3RlckNvbnRlbnQgPSAkKHRoaXMpLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpO1xuICAgICAgfVxuICAgICAgdGhhdC4kbW9uc3RlckNvbnRlbnRDYWNoZVskKHRoaXMpLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpXSA9ICQodGhpcyk7XG4gICAgfSk7XG4gIH1cblxuICBnZXROZXdNYXRlcmlhbEluZGV4KCkge1xuICAgIGlmICghdGhpcy5sYXN0TWF0ZXJpYWxJbmRleCkge1xuICAgICAgbGV0IGxhc3RJbmRleCA9IDA7XG4gICAgICAkKCdbZGF0YS1pcy1tYXRlcmlhbF0nKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gJCh0aGlzKS5kYXRhKCdtYXRlcmlhbC1pbmRleCcpO1xuICAgICAgICBpZiAoaW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgICBsYXN0SW5kZXggPSBpbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxhc3RNYXRlcmlhbEluZGV4ID0gbGFzdEluZGV4O1xuICAgIH1cbiAgICB0aGlzLmxhc3RNYXRlcmlhbEluZGV4Kys7XG4gICAgcmV0dXJuIHRoaXMubGFzdE1hdGVyaWFsSW5kZXg7XG4gIH1cblxuICB1cGRhdGVIYW5kbGVycygpIHtcbiAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCAmJiB0aGlzLiRoYW5kbGVycykge1xuICAgICAgdGhpcy4kaGFuZGxlcnMuY3NzKFxuICAgICAgICAndG9wJyxcbiAgICAgICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5wb3NpdGlvbigpLnRvcFxuICAgICAgICAgICsgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5oZWlnaHQoKVxuICAgICAgICAgIC0gdGhpcy4kaGFuZGxlcnMuaGVpZ2h0KClcbiAgICAgICk7XG4gICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLmFkZENsYXNzKCdtLW1vbnN0ZXItY29udGVudF9fbWF0ZXJpYWwtLWFjdGl2ZScpO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VJdE1vdmUoKSB7XG4gICAgdGhpcy4kaGFuZGxlcnMgPSAkKGBcbjxkaXYgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzXCI+XG4gIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19jb25maWd1cmVcIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLWNvZ1wiPjwvaT5cbiAgPC9hPlxuICA8c3BhbiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX2Jsb2NrLW5hbWVcIj5CbG9jayBuYW1lIGhlcmU8L3NwYW4+XG4gIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLXVwXCI+XG4gICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS11cFwiPjwvaT5cbiAgPC9hPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fbW92ZS1kb3duXCI+XG4gICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3duXCI+PC9pPlxuICA8L2E+XG4gIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19jbG9uZVwiPlxuICAgIDxpIGNsYXNzPVwiZmEgZmEtY2xvbmVcIj48L2k+XG4gIDwvYT5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX3JlbW92ZVwiPlxuICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+XG4gIDwvYT5cbjwvZGl2PmApO1xuICAgICQoJ2JvZHknKS5hcHBlbmQodGhpcy4kaGFuZGxlcnMpO1xuICAgIHRoaXMuJGhhbmRsZXJzLmhpZGUoKTtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAkKHRoaXMuc2V0dGluZ3NbJ21vbnN0ZXItY29udGVudC1zZWxlY3RvciddKS5vbih7XG4gICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbiBob3ZlckluKCkge1xuICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdtLW1vbnN0ZXItY29udGVudF9fbWF0ZXJpYWwtLWhpZ2hsaWdodGVkJyk7XG4gICAgICB9LFxuICAgICAgbW91c2VsZWF2ZTogZnVuY3Rpb24gaG92ZXJPdXQoKSB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ20tbW9uc3Rlci1jb250ZW50X19tYXRlcmlhbC0taGlnaGxpZ2h0ZWQnKTtcbiAgICAgIH0sXG4gICAgICBjbGljazogZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCkge1xuICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgIHRoYXQuc2VsZWN0TWF0ZXJpYWwoJHRoaXMpO1xuICAgICAgfSxcbiAgICB9LCAnW2RhdGEtaXMtbWF0ZXJpYWxdJyk7XG4gICAgdGhhdC4kaGFuZGxlcnNcbiAgICAgIC5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtdXAnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICAgICAgY29uc3QgJHByZXYgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLnByZXYoJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICAgICAgIGlmICgkcHJldi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwuaW5zZXJ0QmVmb3JlKCRwcmV2KTtcbiAgICAgICAgICAgIHRoYXQudXBkYXRlSGFuZGxlcnMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtZG93bicsICgpID0+IHtcbiAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICBjb25zdCAkbmV4dCA9IHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwubmV4dCgnW2RhdGEtaXMtbWF0ZXJpYWxdJyk7XG4gICAgICAgICAgaWYgKCRuZXh0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5pbnNlcnRBZnRlcigkbmV4dCk7XG4gICAgICAgICAgICB0aGF0LnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19jbG9uZScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICBjb25zdCAkY2xvbmVkTWF0ZXJpYWwgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLmNsb25lKCk7XG4gICAgICAgICAgJGNsb25lZE1hdGVyaWFsXG4gICAgICAgICAgICAuZGF0YShcbiAgICAgICAgICAgICAgJ21hdGVyaWFsLWluZGV4JyxcbiAgICAgICAgICAgICAgdGhhdC5nZXROZXdNYXRlcmlhbEluZGV4KClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5pbnNlcnRBZnRlcih0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKTtcbiAgICAgICAgICB0aGF0LnNlbGVjdE1hdGVyaWFsKCRjbG9uZWRNYXRlcmlhbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIG1hdGVyaWFsPycpKSB7XG4gICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCA9IG51bGw7XG4gICAgICAgICAgICB0aGF0LiRoYW5kbGVycy5oaWRlKCk7IC8vIGl0IGRvZXMgbm90IHdvcmsuIHdoeT8gTmVlZCB0byBmaXghXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0TWF0ZXJpYWwoJG1hdGVyaWFsKSB7XG4gICAgaWYgKHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwgPT09ICRtYXRlcmlhbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5yZW1vdmVDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1hY3RpdmUnKTtcbiAgICB9XG4gICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCA9ICRtYXRlcmlhbDtcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgdGhpcy4kaGFuZGxlcnMuc2hvdygpO1xuICB9XG5cbiAgc2VyaWFsaXplQ29udGVudChjYWxsYmFjaykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuJG1vbnN0ZXJDb250ZW50KS5mb3JFYWNoKHVuaXF1ZUNvbnRlbnRJZCA9PiB7XG4gICAgICBjb25zdCAkbW9uc3RlciA9IHRoaXMuJG1vbnN0ZXJDb250ZW50W3VuaXF1ZUNvbnRlbnRJZF07XG4gICAgICByZXN1bHRbJG1vbnN0ZXIuZGF0YSgndW5pcXVlQ29udGVudElkJyldID0gdGhhdC5zZXJpYWxpemVVbmlxdWVDb250ZW50KCRtb25zdGVyKTtcbiAgICB9KTtcbiAgICB0aGlzLnNlbmRUb0J1aWxkZXIoY2FsbGJhY2ssIFtyZXN1bHRdKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZVVuaXF1ZUNvbnRlbnQoJG1vbnN0ZXJDb250ZW50KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgcmVzdWx0LnVuaXF1ZUNvbnRlbnRJZCA9ICRtb25zdGVyQ29udGVudC5kYXRhKCd1bmlxdWVDb250ZW50SWQnKTtcbiAgICByZXN1bHQubWF0ZXJpYWxzID0ge307XG4gICAgJG1vbnN0ZXJDb250ZW50LmZpbmQoJ1tkYXRhLWlzLW1hdGVyaWFsPVxcJzFcXCddJykuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgY29uc3QgbWF0ZXJpYWwgPSB7fTtcbiAgICAgIG1hdGVyaWFsLmJsb2NrID0gJCh0aGlzKS5kYXRhKCdtYXRlcmlhbEJsb2NrJyk7XG4gICAgICByZXN1bHQubWF0ZXJpYWxzWyQodGhpcykuZGF0YSgnbWF0ZXJpYWxJbmRleCcpXSA9IG1hdGVyaWFsO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBWaXN1YWxGcmFtZSBzZXR0aW5ncy5cbiAgICogVXNlcyBWaXN1YWxGcmFtZVNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAqL1xuICBwYXJhbXMoKSB7XG4gICAgY29uc3QgdXNlclNldHRpbmdzID0gd2luZG93LlZpc3VhbEZyYW1lU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICAnbW9uc3Rlci1jb250ZW50LXNlbGVjdG9yJzogJy5tLW1vbnN0ZXItY29udGVudF9fY29udGVudCcsXG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyh1c2VyU2V0dGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICB9KTtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIH1cblxuICBzZW5kVG9CdWlsZGVyKGZ1bmMsIGFyZ3MpIHtcbiAgICBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLnBhcmVudFdpbmRvdywgZnVuYywgYXJncyk7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICB0ZW1wbGF0ZTogdGhpcy5jb25zdHJ1Y3RUZW1wbGF0ZURhdGEoKSxcbiAgICAgIGFjdGlvbjogJ3NhdmUnLFxuICAgIH07XG4gICAgVmlzdWFsRnJhbWUuZm9ybVN1Ym1pdChkYXRhKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZm9ybVN1Ym1pdChkYXRhKSB7XG4gICAgY29uc3QgJGZvcm0gPSAkKCc8Zm9ybSBtZXRob2Q9XCJQT1NUXCI+PC9mb3JtPicpO1xuICAgIGNvbnN0ICRpbnB1dCA9ICQoJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9fanNvblwiPicpO1xuICAgIGNvbnN0ICRjc3JmID0gJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIj4nKTtcblxuICAgICRjc3JmXG4gICAgICAuYXR0cignbmFtZScsICQoJ21ldGFbbmFtZT1jc3JmLXBhcmFtXScpLmF0dHIoJ2NvbnRlbnQnKSlcbiAgICAgIC52YWwoJCgnbWV0YVtuYW1lPWNzcmYtdG9rZW5dJykuYXR0cignY29udGVudCcpKVxuICAgICAgLmFwcGVuZFRvKCRmb3JtKTtcblxuICAgICRpbnB1dFxuICAgICAgLnZhbChKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICAgIC5hcHBlbmRUbygkZm9ybSk7XG5cbiAgICAkZm9ybVswXS5zdWJtaXQoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdFRlbXBsYXRlRGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvdmlkZXJzRW50aXRpZXM6IHRoaXMucGFyZW50QnVpbGRlci5zZXJpYWxpemUoKSxcbiAgICAgIHJlZ2lvbnNNYXRlcmlhbHM6IHRoaXMucGFyZW50QnVpbGRlclxuICAgICAgICAuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKS5tYXRlcmlhbHNCeVJlZ2lvbnMoKSxcbiAgICB9O1xuICB9XG5cbiAgbmV3QmxvY2sobWF0ZXJpYWxOYW1lLCByZWdpb25OYW1lKSB7XG4gICAgLy8gQHRvZG8gQWRkIGxvYWRlciBoZXJlIGFzIHdlIGFyZSB1c2luZyBmb3JtIHBvc3QgIVxuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gdW5pcXVlSWQoJ21hdCcpO1xuICAgIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgICB0ZW1wbGF0ZTogdGhpcy5jb25zdHJ1Y3RUZW1wbGF0ZURhdGEoKSxcbiAgICAgIGFjdGlvbjogJ3JlbmRlci1tYXRlcmlhbCcsXG4gICAgICBtYXRlcmlhbElkOiByYW5kb21JbmRleCxcbiAgICAgIG1hdGVyaWFsUmVnaW9uOiByZWdpb25OYW1lLFxuICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsTmFtZSxcbiAgICB9O1xuICAgIGlmIChuZXdEYXRhLnRlbXBsYXRlLnJlZ2lvbnNNYXRlcmlhbHMuaGFzT3duUHJvcGVydHkocmVnaW9uTmFtZSkgPT09IGZhbHNlKSB7XG4gICAgICBuZXdEYXRhLnRlbXBsYXRlLnJlZ2lvbnNNYXRlcmlhbHNbcmVnaW9uTmFtZV0gPSB7fTtcbiAgICB9XG5cbiAgICBuZXdEYXRhLnRlbXBsYXRlLnJlZ2lvbnNNYXRlcmlhbHNbcmVnaW9uTmFtZV0uZGVjbFtyYW5kb21JbmRleF0gPSB7XG4gICAgICBtYXRlcmlhbDogbWF0ZXJpYWxOYW1lLFxuICAgIH07XG4gICAgbmV3RGF0YS50ZW1wbGF0ZS5yZWdpb25zTWF0ZXJpYWxzW3JlZ2lvbk5hbWVdLm1hdGVyaWFsc09yZGVyLnB1c2gocmFuZG9tSW5kZXgpO1xuICAgIFZpc3VhbEZyYW1lLmZvcm1TdWJtaXQobmV3RGF0YSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gICAgLy8gJC5hamF4KHtcbiAgICAvLyAgIHVybDogd2luZG93LmxvY2F0aW9uLFxuICAgIC8vICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgLy8gICBjYWNoZTogZmFsc2UsXG4gICAgLy8gICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgIC8vICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAvLyAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG5ld0RhdGEpLFxuICAgIC8vIH0pLmRvbmUoZnVuY3Rpb24gb2soZGF0YSkge1xuICAgIC8vICAgY29uc3QgJGVsZW1lbnQgPSAkKGRhdGEpO1xuICAgIC8vICAgdGhhdC4kbW9uc3RlckNvbnRlbnRbdGhhdC5jdXJyZW50TW9uc3RlckNvbnRlbnRdLmFwcGVuZCgkZWxlbWVudCk7XG4gICAgLy8gICB0aGlzLnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAvLyAgIC8qIGdsb2JhbCBzbW9vdGhTY3JvbGw6ZmFsc2UgKi9cbiAgICAvLyAgIHNtb290aFNjcm9sbC5hbmltYXRlU2Nyb2xsKCRlbGVtZW50WzBdLm9mZnNldFRvcCk7XG4gICAgLy8gfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsRnJhbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL1Zpc3VhbEZyYW1lLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9