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
	
	__webpack_require__(20);
	
	var _FrontendMonster = __webpack_require__(3);
	
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
	
	var _FrameApi = __webpack_require__(2);
	
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
	        'func': func,
	        'args': args
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _VisualBuilder = __webpack_require__(7);
	
	var _VisualBuilder2 = _interopRequireDefault(_VisualBuilder);
	
	var _VisualFrame = __webpack_require__(17);
	
	var _VisualFrame2 = _interopRequireDefault(_VisualFrame);
	
	var _HashApi = __webpack_require__(16);
	
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
	    /** globals: smoothScroll*/
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
	      for (var key in userSettings) {
	        if (userSettings.hasOwnProperty(key)) {
	          settings[key] = userSettings[key];
	        }
	      }
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _all = __webpack_require__(9);
	
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
	      var bemData = $node.data('bem');
	      var bemEntity = $node.data('bemMatch');
	      if (bemData.hasOwnProperty(bemEntity)) {
	        bemData = bemData[bemEntity];
	      } else {
	        bemData = {};
	      }
	      if (bemData.hasOwnProperty('editable') === false) {
	        return null;
	      }
	      var editable = bemData.editable;
	      var type = editable.hasOwnProperty('type') ? editable.type : 'string';
	      if (this.editablesByType.hasOwnProperty(type) === false) {
	        type = 'string';
	      }
	
	      var exportVariable = editable.hasOwnProperty('target') ? editable.target : 'data';
	
	      return this.editablesByType[type]($node, exportVariable);
	    }
	  }]);
	
	  return Editable;
	}();
	
	exports.default = Editable;

/***/ },
/* 5 */
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
	    this.name = this.materialPath.replace(/.*\.(.*)$/, '$1');
	    //!@todo CHANGE THIS
	    this.key = this.$node.data('materialIndex');
	  }
	
	  _createClass(Material, [{
	    key: 'processMaterial',
	    value: function processMaterial() {
	      var $li = $('<li class="page-structure__material">' + this.name + '</li>');
	      return $li;
	    }
	  }, {
	    key: 'serialize',
	    value: function serialize() {
	      // material has data-editable-keys with schema
	      var editableKeys = this.$node.data('editableKeys');
	      var recursiveIterator = function iter(arr, path, $scope) {
	        var final = {};
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          var _loop = function _loop() {
	            var key = _step.value;
	
	            var fullKeyPath = key;
	            if (path) {
	              fullKeyPath = path + '.' + key;
	            }
	            if (_typeof(arr[key]) === 'object') {
	              var $items = $scope.find('[data-recursive-item="' + fullKeyPath + '"]');
	              final[key] = {};
	              $items.each(function itemsRec() {
	                var $this = $(this);
	                final[key][$this.data('recursiveItemKey')] = recursiveIterator(arr[key], 'item', $this);
	              });
	            } else {
	              var $node = $scope.find('[data-editable-key="' + fullKeyPath + '"]');
	              final[key] = Material.serializeNode($node);
	            }
	          };
	
	          for (var _iterator = Object.keys(arr)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            _loop();
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
	
	        return final;
	      };
	
	      var result = recursiveIterator(editableKeys, '', this.$node);
	      console.log(result);
	      //    this.$node.find('')
	
	      return result;
	    }
	  }], [{
	    key: 'serializeNode',
	    value: function serializeNode($node) {
	      return window.FrontendMonster.builder.editable.serializeEditable($node);
	    }
	  }]);
	
	  return Material;
	}();
	
	exports.default = Material;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Material = __webpack_require__(5);
	
	var _Material2 = _interopRequireDefault(_Material);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Region = function () {
	  function Region($node) {
	    _classCallCheck(this, Region);
	
	    this.materials = {};
	    this.$node = $node;
	    this.description = $node.data('contentDescription');
	  }
	
	  _createClass(Region, [{
	    key: 'processRegion',
	    value: function processRegion() {
	      var $regionLi = $('<li class="page-structure__region">' + this.regionDescription + '</li>');
	      this.key = this.$node.data('regionKey');
	      this.id = this.$node.data('regionId');
	      var $regionUl = $('<ul class="page-structure__region-materials"></ul>');
	
	      var $materials = this.$node.find('[data-is-material=1]');
	      var that = this;
	
	      $materials.each(function materialsIterator() {
	        var $materialNode = $(this);
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
	  }]);
	
	  return Region;
	}();
	
	exports.default = Region;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _SiteStructureEnvironment = __webpack_require__(15);
	
	var _SiteStructureEnvironment2 = _interopRequireDefault(_SiteStructureEnvironment);
	
	var _MaterialsEnvironment = __webpack_require__(13);
	
	var _MaterialsEnvironment2 = _interopRequireDefault(_MaterialsEnvironment);
	
	var _CustomizationEnvironment = __webpack_require__(12);
	
	var _CustomizationEnvironment2 = _interopRequireDefault(_CustomizationEnvironment);
	
	var _ActionEnvironment = __webpack_require__(11);
	
	var _ActionEnvironment2 = _interopRequireDefault(_ActionEnvironment);
	
	var _PageStructureEnvironment = __webpack_require__(14);
	
	var _PageStructureEnvironment2 = _interopRequireDefault(_PageStructureEnvironment);
	
	var _FrameApi = __webpack_require__(2);
	
	var _FrameApi2 = _interopRequireDefault(_FrameApi);
	
	var _Editable = __webpack_require__(4);
	
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
	    $('.monster-environment-selector__environment-link').first().addClass('monster-environment-selector__environment-link--active');
	    _FrameApi2.default.bindMessageListener(this);
	
	    this.editable = new _Editable2.default();
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
	        'bundles': {},
	        'stackable-container-class': 'monster-stackable-container',
	        'new-block-url': '/monster/visual-builder/new-block'
	      };
	      for (var key in userSettings) {
	        if (userSettings.hasOwnProperty(key)) {
	          settings[key] = userSettings[key];
	        }
	      }
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
	    }
	  }, {
	    key: 'pageChanged',
	    value: function pageChanged() {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = this.environments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var environment = _step.value;
	
	          environment[1].pageChanged();
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
	  }, {
	    key: 'log',
	    value: function log(result) {
	      console.log(result);
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
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($node) {
	  return $node.html();
	};
	
	;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  if (typeof window.MONSTER_EDITABLES === 'undefined') {
	    window.MONSTER_EDITABLES = {};
	  }
	  window.MONSTER_EDITABLES['wysiwyg'] = _WYSIWYG2.default;
	  window.MONSTER_EDITABLES['string'] = _string2.default;
	};
	
	var _WYSIWYG = __webpack_require__(8);
	
	var _WYSIWYG2 = _interopRequireDefault(_WYSIWYG);
	
	var _string = __webpack_require__(10);
	
	var _string2 = _interopRequireDefault(_string);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($node) {
	  return $node.text();
	};
	
	;

/***/ },
/* 11 */
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
/* 12 */
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
/* 13 */
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
	      this.$materialsGroups = $('<ul class="materials-groups"></ul>');
	      this.$materialsList = [];
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = this.visualBuilder.settings.bundles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var bundle = _step.value;
	
	          var i18nBundleName = typeof polyglot !== 'undefined' ? polyglot.t(bundle.name) : bundle.name;
	
	          var $bundleTitle = '\n      <li class="materials-groups__item materials-groups__item--bundle-label">\n        <a href="#" class="materials-groups__switch-bundle" data-bundle-path=""' + bundle.fullPath + '>\n            ' + i18nBundleName + '      \n        </a>\n      </li>\n      ';
	          this.$materialsList.push($bundleTitle);
	
	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;
	
	          try {
	            for (var _iterator2 = bundle.groups[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var group = _step2.value;
	
	              var groupName = group.name;
	              var materials = group.materials;
	              var i18nGroupName = typeof polyglot !== 'undefined' ? polyglot.t(groupName) : groupName;
	              var $li = $('\n    <li class="materials-groups__item">\n      <a href="#" data-group-path="' + group.fullPath + '" class="materials-groups__switch-group">\n        ' + i18nGroupName + ' <span class="materials-groups__count">(' + materials.length + ')</span>\n      </a>\n    </li>');
	              this.$materialsGroups.append($li);
	              var $list = $('<ul class="materials-list" data-group-path="' + group.fullPath + '"></ul>');
	              var items = [];
	              var _iteratorNormalCompletion3 = true;
	              var _didIteratorError3 = false;
	              var _iteratorError3 = undefined;
	
	              try {
	                for (var _iterator3 = materials[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                  var material = _step3.value;
	
	                  var materialName = material.name;
	                  var i18nMaterialName = typeof polyglot !== 'undefined' ? polyglot.t(materialName) : materialName;
	                  var $item = $('\n<li>\n  <a href="#" class="materials-list__item" data-material-path="' + material.fullPath + '">' + i18nMaterialName + '</a>\n</li>\n');
	                  items.push($item);
	                }
	              } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	              } finally {
	                try {
	                  if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                    _iterator3.return();
	                  }
	                } finally {
	                  if (_didIteratorError3) {
	                    throw _iteratorError3;
	                  }
	                }
	              }
	
	              $list.append(items);
	              this.$materialsList.push($list);
	            }
	          } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	              }
	            } finally {
	              if (_didIteratorError2) {
	                throw _iteratorError2;
	              }
	            }
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
	
	      var that = this;
	      $(document).on('click', '.materials-groups__switch-group', function clickHandler() {
	        var $this = $(this);
	        var activeClass = 'materials-groups__switch-group--active';
	        $this.toggleClass(activeClass);
	        var groupPath = $this.data('groupPath');
	        if ($this.hasClass(activeClass)) {
	          (function () {
	            $('.materials-groups__switch-group').removeClass(activeClass);
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
	
	            $this.addClass(activeClass);
	            that.$materialsPane.show();
	          })();
	        } else {
	          // that's just second click on the same group
	          that.$materialsPane.hide();
	        }
	        return false;
	      });
	      $(document).on('click', '.materials-list__item', function clickHandler() {
	        that.sendMessage('newBlock', [$(this).data('materialPath'), that.visualBuilder.settings['new-block-url']]);
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
	
	      $('.materials-groups__switch-group').removeClass('materials-groups__switch-group--active');
	    }
	  }]);
	
	  return MaterialsEnvironment;
	}(_BaseEnvironment3.default);
	
	exports.default = MaterialsEnvironment;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _BaseEnvironment2 = __webpack_require__(1);
	
	var _BaseEnvironment3 = _interopRequireDefault(_BaseEnvironment2);
	
	var _Region = __webpack_require__(6);
	
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
	      regions.each(function () {
	        var $regionNode = $(this);
	        var regionObject = new _Region2.default($regionNode);
	        var $regionLi = regionObject.processRegion();
	        that.regionsStructure[regionObject.key] = regionObject;
	        environment.$pageStructure.append($regionLi);
	      });
	      this.editModeData = this.target.MONSTER_EDIT_MODE_DATA;
	    }
	  }, {
	    key: 'serializePage',
	    value: function serializePage() {
	      var result = {};
	      for (var regionKey in this.regionsStructure) {
	        if (this.regionsStructure.hasOwnProperty(regionKey)) {
	          var region = this.regionsStructure[regionKey];
	          result[region.key] = region.serialize();
	        }
	      }
	      return result;
	    }
	  }]);
	
	  return PageStructureEnvironment;
	}(_BaseEnvironment3.default);
	
	exports.default = PageStructureEnvironment;

/***/ },
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _FrameApi = __webpack_require__(2);
	
	var _FrameApi2 = _interopRequireDefault(_FrameApi);
	
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
	            _FrameApi2.default.bindMessageListener(this);
	            this.parentWindow = window.parent;
	            /** @var FrontendMonster */
	            this.parentMonster = this.parentWindow.FrontendMonster;
	            this.parentBuilder = this.parentMonster.builder;
	            this.currentMonsterContent = false;
	            this.makeItMove();
	            var that = this;
	            $(window).resize(function () {
	                that.updateHandlers();
	                return true;
	            });
	            this.parentBuilder.pageChanged();
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
	            if (!this.lastMaterialIndex) {
	                var lastIndex = 0;
	                $('[data-is-material]').each(function () {
	                    var index = $(this).data('material-index');
	                    if (index > lastIndex) {
	                        lastIndex = index;
	                    }
	                });
	                this.lastMaterialIndex = lastIndex;
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
	            this.$handlers = $('\n<div class="monster-block-handlers">\n    <a href="#" class="monster-block-handlers__configure">\n        <i class="fa fa-cog"></i>\n    </a>\n    <span class="monster-block-handlers__block-name">Block name here</span>\n    <a href="#" class="monster-block-handlers__move-up">\n        <i class="fa fa-angle-up"></i>\n    </a>\n    <a href="#" class="monster-block-handlers__move-down">\n        <i class="fa fa-angle-down"></i>\n    </a>\n    <a href="#" class="monster-block-handlers__clone">\n        <i class="fa fa-clone"></i>\n    </a>\n    <a href="#" class="monster-block-handlers__remove">\n        <i class="fa fa-times"></i>\n    </a>\n</div>');
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
	                    if ($prev.length == 1) {
	                        that.$selectedMaterial.insertBefore($prev);
	                        that.updateHandlers();
	                    }
	                }
	                return false;
	            }).on('click', '.monster-block-handlers__move-down', function () {
	                if (that.$selectedMaterial) {
	                    var $next = that.$selectedMaterial.next('[data-is-material]');
	                    if ($next.length == 1) {
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
	            var result = {};
	            var that = this;
	            for (var uniqueContentId in this.$monsterContent) {
	                if (this.$monsterContent.hasOwnProperty(uniqueContentId)) {
	                    var $monster = this.$monsterContent[uniqueContentId];
	                    result[$monster.data('uniqueContentId')] = that.serializeUniqueContent($monster);
	                }
	            }
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
	            for (var key in userSettings) {
	                if (userSettings.hasOwnProperty(key)) {
	                    settings[key] = userSettings[key];
	                }
	            }
	            this.settings = settings;
	        }
	    }, {
	        key: 'sendToBuilder',
	        value: function sendToBuilder(func, args) {
	            _FrameApi2.default.sendMessage(this.parentWindow, func, args);
	        }
	    }, {
	        key: 'newBlock',
	        value: function newBlock(blockName, newBlockUrl) {
	            /*
	            @todo
	               Переписать. В билдере у нас также будет настройка дата флоу и всё это нужно передавать в текущий экшен
	              там нас будет слушать специальный под-экшен, который будет переписывать нужную нам инфу типа материалов
	              и провайдеровских конфигов.
	              Таким образом, нам не нужно будет делать никакого пермаментного стораджа.
	              Также нужно предусмотреть возможность отдавать только нужный материал, имитируя среду его региона и пр.
	               Ключ materialIndex нужно получать из контроллера.
	              В контроллере будет генерироваться через uniqid, при этом, после отдачи материала -
	              php-template file нужно будет удалить, а то наплодится тьма всякого дерьма в теммплейтах.
	               При сохранении мы по сути переписываем у mainentity и templateregion наши materials + providers тем,
	              что пришло из билдера.
	             */
	            var that = this;
	            $.ajax({
	                url: '#',
	                method: 'POST',
	                cache: false,
	                data: {
	                    monsterAction: 'new-block',
	                    block: blockName,
	                    editModeData: window.MONSTER_EDIT_MODE_DATA
	                }
	            }).done(function ok(data) {
	                var $element = $(data);
	                that.$monsterContent[that.currentMonsterContent].append($element);
	                this.parentBuilder.pageChanged();
	                /* global smoothScroll:false */
	                smoothScroll.animateScroll($element[0].offsetTop);
	            });
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
	    }]);
	
	    return VisualFrame;
	}();
	
	exports.default = VisualFrame;

/***/ },
/* 18 */,
/* 19 */,
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzYzYWQ5Mjc2NTNmNjVjNzU0NDEiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvRnJvbnRlbmRNb25zdGVyLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9FZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZUNvbXBvbmVudHMvTWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1BhZ2VTdHJ1Y3R1cmVDb21wb25lbnRzL1JlZ2lvbi5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL1dZU0lXWUcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVBOzs7Ozs7QUFFQSxRQUFPLGVBQVAsR0FBeUIsK0JBQXpCOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7Ozs7Ozs7S0FFTSxlO0FBQ0osNEJBQVksYUFBWixFQUEyQixJQUEzQixFQUFpQztBQUFBOztBQUMvQixVQUFLLGFBQUwsR0FBcUIsYUFBckI7QUFDQSxVQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsVUFBSyxNQUFMLEdBQWMsRUFBRSxLQUFLLGFBQUwsQ0FBbUIsUUFBbkIsQ0FBNEIsZ0JBQTVCLENBQUYsRUFBaUQsQ0FBakQsRUFBb0QsYUFBbEU7QUFDRDs7OztnQ0FFVTs7QUFFVCxXQUFJLEtBQUssSUFBTCxLQUFjLEtBQUssYUFBTCxDQUFtQixrQkFBckMsRUFBeUQ7QUFDdkQ7QUFDRDtBQUNELFdBQUksS0FBSyxhQUFMLENBQW1CLGtCQUF2QixFQUEyQztBQUN6QyxjQUFLLGFBQUwsQ0FBbUIsWUFBbkIsQ0FBZ0MsR0FBaEMsQ0FBb0MsS0FBSyxhQUFMLENBQW1CLGtCQUF2RCxFQUEyRSxVQUEzRTtBQUNEO0FBQ0Y7OztrQ0FFWTtBQUNYLFlBQUssYUFBTCxDQUFtQixjQUFuQjtBQUNEOzs7aUNBRVcsSSxFQUFNLEksRUFBTTtBQUN0QixjQUFPLG1CQUFTLFdBQVQsQ0FBcUIsS0FBSyxNQUExQixFQUFrQyxJQUFsQyxFQUF3QyxJQUF4QyxDQUFQO0FBQ0Q7OzttQ0FFYSxDQUViOzs7Ozs7bUJBR1ksZTs7Ozs7Ozs7Ozs7Ozs7OztLQ2hDVCxROzs7Ozs7O3lDQVV1QixRLEVBQVU7QUFDbkMsV0FBTSxXQUFXLFNBQVMsZUFBVCxDQUF5QixLQUF6QixFQUFnQztBQUMvQyxhQUFJLFVBQVUsSUFBZDtBQUNBLGFBQUksU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLHFCQUFVLEtBQUssS0FBTCxDQUFXLE1BQU0sSUFBakIsQ0FBVjtBQUNELFVBRkQsTUFFTztBQUNMLHFCQUFVLE1BQU0sSUFBaEI7QUFDRDs7QUFFRCxhQUFJLFNBQVMsUUFBUSxJQUFqQixDQUFKLEVBQTRCO0FBQzFCLG9CQUFTLFFBQVEsSUFBakIsRUFBdUIsS0FBdkIsQ0FBNkIsUUFBN0IsRUFBdUMsUUFBUSxJQUEvQztBQUNEO0FBQ0YsUUFYRDs7QUFhQSxXQUFJLE9BQU8sZ0JBQVgsRUFBNkI7QUFDM0IsZ0JBQU8sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsUUFBbkM7QUFDRCxRQUZELE1BRU87O0FBRUwsZ0JBQU8sV0FBUCxDQUFtQixXQUFuQixFQUFnQyxRQUFoQztBQUNEO0FBQ0Y7OztpQ0FFa0IsTSxFQUFRLEksRUFBTSxJLEVBQU07QUFDckMsV0FBTSxPQUFPO0FBQ1gsaUJBQVEsSUFERztBQUVYLGlCQUFRO0FBRkcsUUFBYjtBQUlBLFdBQU0sVUFBVSxTQUFTLElBQVQsR0FBZ0IsS0FBSyxTQUFMLENBQWUsSUFBZixDQUFoQixHQUF1QyxJQUF2RDs7QUFFQSxjQUFPLFdBQVAsQ0FBbUIsT0FBbkIsRUFBNEIsR0FBNUI7QUFDRDs7O3lCQXZDaUI7O0FBRWhCLFdBQUksT0FBTyxFQUFQLEtBQWUsV0FBbkIsRUFBZ0M7QUFDOUIsZ0JBQU8sR0FBRyxFQUFILEVBQVAsQztBQUNEOztBQUVELGNBQU8sSUFBUDtBQUNEOzs7Ozs7bUJBbUNZLFE7Ozs7Ozs7Ozs7Ozs7O0FDM0NmOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7S0FFTSxlO0FBQ0osOEJBQWM7QUFBQTs7QUFDWixVQUFLLE1BQUw7QUFDQSxVQUFLLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxVQUFLLE9BQUwsR0FBZSx1QkFBZjtBQUNBLFNBQUksT0FBTyxNQUFQLEtBQWtCLE1BQWxCLElBQTRCLE9BQU8sTUFBUCxDQUFjLGVBQTlDLEVBQStEO0FBQzdELFdBQUksT0FBTyxNQUFQLENBQWMsZUFBZCxDQUE4QixVQUFsQyxFQUE4QztBQUM1QyxjQUFLLFdBQUwsR0FBbUIsMkJBQW5CO0FBQ0Q7QUFDRjs7QUFFRCxTQUFJLE9BQU8sWUFBUCxLQUF5QixXQUE3QixFQUEwQztBQUN4QyxvQkFBYSxJQUFiO0FBQ0Q7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs4QkF5QlE7QUFDUCxXQUFNLGVBQWUsT0FBTyx1QkFBUCxJQUFrQyxFQUF2RDtBQUNBLFdBQU0sV0FBVyxFQUFqQjtBQUNBLFlBQUssSUFBTSxHQUFYLElBQWtCLFlBQWxCLEVBQWdDO0FBQzlCLGFBQUksYUFBYSxjQUFiLENBQTRCLEdBQTVCLENBQUosRUFBc0M7QUFDcEMsb0JBQVMsR0FBVCxJQUFnQixhQUFhLEdBQWIsQ0FBaEI7QUFDRDtBQUNGO0FBQ0QsWUFBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0Q7Ozt5QkE1QmE7QUFDWixXQUFJLEtBQUssWUFBTCxLQUFzQixJQUExQixFQUFnQztBQUM5QixjQUFLLFlBQUwsR0FBb0IsNkJBQXBCO0FBQ0Q7QUFDRCxjQUFPLEtBQUssWUFBWjtBQUNEOzs7Ozs7Ozs7eUJBTWdCO0FBQ2YsY0FBTyxLQUFLLE9BQUwsQ0FBYSxRQUFiLENBQXNCLE1BQXRCLEtBQWlDLENBQXhDO0FBQ0Q7Ozs7OzttQkFrQlksZTs7Ozs7Ozs7Ozs7Ozs7QUN4RGY7Ozs7Ozs7O0tBRU0sUTtBQUNKLHVCQUFjO0FBQUE7O0FBQ1osVUFBSyxlQUFMLEdBQXVCLEVBQXZCOztBQUVBO0FBQ0EsVUFBSyxlQUFMLEdBQXVCLE9BQU8saUJBQTlCO0FBQ0Q7Ozs7dUNBRWlCLEssRUFBTztBQUN2QixXQUFJLFVBQVUsTUFBTSxJQUFOLENBQVcsS0FBWCxDQUFkO0FBQ0EsV0FBTSxZQUFZLE1BQU0sSUFBTixDQUFXLFVBQVgsQ0FBbEI7QUFDQSxXQUFJLFFBQVEsY0FBUixDQUF1QixTQUF2QixDQUFKLEVBQXVDO0FBQ3JDLG1CQUFVLFFBQVEsU0FBUixDQUFWO0FBQ0QsUUFGRCxNQUVPO0FBQ0wsbUJBQVUsRUFBVjtBQUNEO0FBQ0QsV0FBSSxRQUFRLGNBQVIsQ0FBdUIsVUFBdkIsTUFBdUMsS0FBM0MsRUFBa0Q7QUFDaEQsZ0JBQU8sSUFBUDtBQUNEO0FBQ0QsV0FBTSxXQUFXLFFBQVEsUUFBekI7QUFDQSxXQUFJLE9BQU8sU0FBUyxjQUFULENBQXdCLE1BQXhCLElBQWtDLFNBQVMsSUFBM0MsR0FBa0QsUUFBN0Q7QUFDQSxXQUFJLEtBQUssZUFBTCxDQUFxQixjQUFyQixDQUFvQyxJQUFwQyxNQUE4QyxLQUFsRCxFQUF5RDtBQUN2RCxnQkFBTyxRQUFQO0FBQ0Q7O0FBRUQsV0FBTSxpQkFBaUIsU0FBUyxjQUFULENBQXdCLFFBQXhCLElBQW9DLFNBQVMsTUFBN0MsR0FBc0QsTUFBN0U7O0FBRUEsY0FBTyxLQUFLLGVBQUwsQ0FBcUIsSUFBckIsRUFBMkIsS0FBM0IsRUFBa0MsY0FBbEMsQ0FBUDtBQUNEOzs7Ozs7bUJBR1ksUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDakNULFE7QUFDSixxQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFVBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxVQUFLLFlBQUwsR0FBb0IsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixjQUFoQixDQUFwQjtBQUNBLFVBQUssSUFBTCxHQUFZLEtBQUssWUFBTCxDQUFrQixPQUFsQixDQUEwQixXQUExQixFQUF1QyxJQUF2QyxDQUFaOztBQUVBLFVBQUssR0FBTCxHQUFXLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsZUFBaEIsQ0FBWDtBQUNEOzs7O3VDQUVpQjtBQUNoQixXQUFNLE1BQU0sNENBQTBDLEtBQUssSUFBL0MsV0FBWjtBQUNBLGNBQU8sR0FBUDtBQUNEOzs7aUNBTVc7O0FBRVYsV0FBTSxlQUFlLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsY0FBaEIsQ0FBckI7QUFDQSxXQUFNLG9CQUFvQixTQUFTLElBQVQsQ0FBYyxHQUFkLEVBQW1CLElBQW5CLEVBQXlCLE1BQXpCLEVBQWlDO0FBQ3pELGFBQU0sUUFBUSxFQUFkO0FBRHlEO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsaUJBRTlDLEdBRjhDOztBQUd2RCxpQkFBSSxjQUFjLEdBQWxCO0FBQ0EsaUJBQUksSUFBSixFQUFVO0FBQ1IsNkJBQWlCLElBQWpCLFNBQXlCLEdBQXpCO0FBQ0Q7QUFDRCxpQkFBSSxRQUFPLElBQUksR0FBSixDQUFQLE1BQXFCLFFBQXpCLEVBQW1DO0FBQ2pDLG1CQUFNLFNBQVMsT0FBTyxJQUFQLDRCQUFxQyxXQUFyQyxRQUFmO0FBQ0EscUJBQU0sR0FBTixJQUFhLEVBQWI7QUFDQSxzQkFBTyxJQUFQLENBQVksU0FBUyxRQUFULEdBQW9CO0FBQzlCLHFCQUFNLFFBQVEsRUFBRSxJQUFGLENBQWQ7QUFDQSx1QkFBTSxHQUFOLEVBQVcsTUFBTSxJQUFOLENBQVcsa0JBQVgsQ0FBWCxJQUE2QyxrQkFDM0MsSUFBSSxHQUFKLENBRDJDLEVBRTNDLE1BRjJDLEVBRzNDLEtBSDJDLENBQTdDO0FBS0QsZ0JBUEQ7QUFRRCxjQVhELE1BV087QUFDTCxtQkFBTSxRQUFRLE9BQU8sSUFBUCwwQkFBbUMsV0FBbkMsUUFBZDtBQUNBLHFCQUFNLEdBQU4sSUFBYSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNEO0FBckJzRDs7QUFFekQsZ0NBQWtCLE9BQU8sSUFBUCxDQUFZLEdBQVosQ0FBbEIsOEhBQW9DO0FBQUE7QUFvQm5DO0FBdEJ3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXVCekQsZ0JBQU8sS0FBUDtBQUNELFFBeEJEOztBQTBCQSxXQUFNLFNBQVMsa0JBQWtCLFlBQWxCLEVBQWdDLEVBQWhDLEVBQW9DLEtBQUssS0FBekMsQ0FBZjtBQUNBLGVBQVEsR0FBUixDQUFZLE1BQVo7OztBQUdBLGNBQU8sTUFBUDtBQUNEOzs7bUNBdENvQixLLEVBQU87QUFDMUIsY0FBTyxPQUFPLGVBQVAsQ0FBdUIsT0FBdkIsQ0FBK0IsUUFBL0IsQ0FBd0MsaUJBQXhDLENBQTBELEtBQTFELENBQVA7QUFDRDs7Ozs7O21CQXVDWSxROzs7Ozs7Ozs7Ozs7OztBQ3ZEZjs7Ozs7Ozs7S0FFTSxNO0FBQ0osbUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUNqQixVQUFLLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxVQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsVUFBSyxXQUFMLEdBQW1CLE1BQU0sSUFBTixDQUFXLG9CQUFYLENBQW5CO0FBQ0Q7Ozs7cUNBRWU7QUFDZCxXQUFNLFlBQVksMENBQXdDLEtBQUssaUJBQTdDLFdBQWxCO0FBQ0EsWUFBSyxHQUFMLEdBQVcsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixXQUFoQixDQUFYO0FBQ0EsWUFBSyxFQUFMLEdBQVUsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixVQUFoQixDQUFWO0FBQ0EsV0FBTSxZQUFZLEVBQUUsb0RBQUYsQ0FBbEI7O0FBRUEsV0FBTSxhQUFhLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0Isc0JBQWhCLENBQW5CO0FBQ0EsV0FBTSxPQUFPLElBQWI7O0FBRUEsa0JBQVcsSUFBWCxDQUFnQixTQUFTLGlCQUFULEdBQTZCO0FBQzNDLGFBQU0sZ0JBQWdCLEVBQUUsSUFBRixDQUF0QjtBQUNBLGFBQU0saUJBQWlCLHVCQUFhLGFBQWIsQ0FBdkI7QUFDQSxhQUFNLE1BQU0sZUFBZSxlQUFmLEVBQVo7QUFDQSxjQUFLLFNBQUwsQ0FBZSxlQUFlLEdBQTlCLElBQXFDLGNBQXJDO0FBQ0EsbUJBQVUsTUFBVixDQUFpQixHQUFqQjtBQUNELFFBTkQ7O0FBUUEsaUJBQVUsTUFBVixDQUFpQixTQUFqQjtBQUNBLGNBQU8sU0FBUDtBQUNEOzs7aUNBRVc7QUFDVixXQUFNLFNBQVMsRUFBZjtBQUNBLFdBQU0sWUFBWSxLQUFLLFNBQXZCO0FBQ0EsY0FBTyxJQUFQLENBQVksU0FBWixFQUF1QixPQUF2QixDQUErQixTQUFTLElBQVQsQ0FBYyxXQUFkLEVBQTJCO0FBQ3hELGdCQUFPLFdBQVAsSUFBc0IsVUFBVSxXQUFWLEVBQXVCLFNBQXZCLEVBQXRCO0FBQ0QsUUFGRDtBQUdBLGNBQU8sTUFBUDtBQUNEOzs7Ozs7bUJBR1ksTTs7Ozs7Ozs7Ozs7Ozs7QUN4Q2Y7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0tBRU0sYTtBQUNKLDRCQUFjO0FBQUE7O0FBQ1osVUFBSyxNQUFMO0FBQ0EsVUFBSyxrQkFBTDs7QUFFQSxVQUFLLFlBQUwsR0FBb0IsSUFBSSxHQUFKLENBQVEsQ0FDMUIsQ0FBQyxnQkFBRCxFQUFtQix1Q0FBNkIsSUFBN0IsRUFBbUMsZ0JBQW5DLENBQW5CLENBRDBCLEVBRTFCLENBQUMsZ0JBQUQsRUFBbUIsdUNBQTZCLElBQTdCLEVBQW1DLGdCQUFuQyxDQUFuQixDQUYwQixFQUcxQixDQUFDLFdBQUQsRUFBYyxtQ0FBeUIsSUFBekIsRUFBK0IsV0FBL0IsQ0FBZCxDQUgwQixFQUkxQixDQUFDLGVBQUQsRUFBa0IsdUNBQTZCLElBQTdCLEVBQW1DLGVBQW5DLENBQWxCLENBSjBCLEVBSzFCLENBQUMsUUFBRCxFQUFXLGdDQUFzQixJQUF0QixFQUE0QixRQUE1QixDQUFYLENBTDBCLENBQVIsQ0FBcEI7O0FBUUEsVUFBSyxtQkFBTDs7O0FBR0EsVUFBSyxpQkFBTCxDQUF1QixnQkFBdkI7QUFDQSxPQUFFLGlEQUFGLEVBQ0csS0FESCxHQUVHLFFBRkgsQ0FFWSx3REFGWjtBQUdBLHdCQUFTLG1CQUFULENBQTZCLElBQTdCOztBQUVBLFVBQUssUUFBTCxHQUFnQix3QkFBaEI7QUFDRDs7Ozs7Ozs7Ozs4QkFNUTtBQUNQLFdBQU0sZUFBZSxPQUFPLHFCQUFQLElBQWdDLEVBQXJEO0FBQ0EsV0FBTSxXQUFXO0FBQ2YsNkJBQW9CLHlCQURMO0FBRWYsMkJBQWtCLHVCQUZIO0FBR2Ysb0JBQVcsRUFISTtBQUlmLHNDQUE2Qiw2QkFKZDtBQUtmLDBCQUFpQjtBQUxGLFFBQWpCO0FBT0EsWUFBSyxJQUFNLEdBQVgsSUFBa0IsWUFBbEIsRUFBZ0M7QUFDOUIsYUFBSSxhQUFhLGNBQWIsQ0FBNEIsR0FBNUIsQ0FBSixFQUFzQztBQUNwQyxvQkFBUyxHQUFULElBQWdCLGFBQWEsR0FBYixDQUFoQjtBQUNEO0FBQ0Y7QUFDRCxZQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSxZQUFLLFFBQUwsR0FBZ0IsRUFBRSxLQUFLLFFBQUwsQ0FBYyxrQkFBZCxDQUFGLENBQWhCO0FBQ0EsWUFBSyxVQUFMLEdBQWtCLEVBQUUsTUFBTSxLQUFLLFFBQUwsQ0FBYywyQkFBZCxDQUFSLENBQWxCO0FBQ0Q7OzswQ0FFb0I7QUFDbkIsV0FBTSxPQUFPLElBQWI7QUFDQSxXQUFNLFVBQVUsc0NBQWhCO0FBQ0EsV0FBTSxpQkFBb0IsT0FBcEIsYUFBTjtBQUNBLFdBQU0sbUJBQW1CLFFBQU0sT0FBTixDQUF6QjtBQUNBLHdCQUFpQixLQUFqQixDQUF1QixTQUFTLFFBQVQsR0FBb0I7QUFDekMsMEJBQWlCLFdBQWpCLENBQTZCLGNBQTdCO0FBQ0EsV0FBRSxLQUFLLFFBQUwsQ0FBYyxnQkFBZCxDQUFGLEVBQW1DLEtBQW5DLENBQXlDLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxpQkFBYixDQUF6QztBQUNBLFdBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsY0FBakI7QUFDQSxnQkFBTyxLQUFQO0FBQ0QsUUFMRDtBQU1EOzs7MkNBRXFCO0FBQ3BCLFdBQU0sT0FBTyxJQUFiO0FBQ0EsV0FBTSxVQUFVLGdEQUFoQjtBQUNBLFdBQU0saUJBQW9CLE9BQXBCLGFBQU47QUFDQSxXQUFNLGdCQUFnQixRQUFNLE9BQU4sQ0FBdEI7QUFDQSxxQkFBYyxLQUFkLENBQW9CLFNBQVMsUUFBVCxHQUFvQjtBQUN0QyxhQUFNLGtCQUFrQixFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsaUJBQWIsQ0FBeEI7QUFDQSxhQUFJLEtBQUssa0JBQUwsS0FBNEIsZUFBaEMsRUFBaUQ7QUFDL0MseUJBQWMsV0FBZCxDQUEwQixjQUExQjtBQUNBLGdCQUFLLFlBQUwsQ0FBa0IsR0FBbEIsQ0FBc0IsZUFBdEIsRUFBdUMsVUFBdkM7QUFDQSxnQkFBSyxrQkFBTCxHQUEwQixJQUExQjtBQUNBLGtCQUFPLEtBQVA7QUFDRDs7QUFFRCx1QkFBYyxXQUFkLENBQTBCLGNBQTFCO0FBQ0EsY0FBSyxpQkFBTCxDQUF1QixlQUF2QjtBQUNBLFdBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsY0FBakI7QUFDQSxnQkFBTyxLQUFQO0FBQ0QsUUFiRDtBQWNEOzs7dUNBRWlCLGUsRUFBaUI7QUFDakMsWUFBSyxZQUFMLENBQWtCLEdBQWxCLENBQXNCLGVBQXRCLEVBQXVDLFFBQXZDO0FBQ0EsWUFBSyxrQkFBTCxHQUEwQixlQUExQjtBQUNEOzs7c0NBRWdCO0FBQ2YsWUFBSyxVQUFMLENBQWdCLEtBQWhCO0FBQ0Q7OzsyQ0FFcUI7QUFDcEIsV0FBTSxZQUFlLEtBQUssUUFBTCxDQUFjLDJCQUFkLENBQWYsV0FBTjtBQUNBLFdBQU0sV0FBVyxLQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsTUFBTSxTQUEzQixFQUFzQyxNQUF0QyxLQUFpRCxDQUFqRCxHQUF3RCxTQUF4RCxlQUE2RSxFQUE5RjtBQUNBLFdBQU0sV0FBVyxtQkFBaUIsU0FBakIsU0FBOEIsUUFBOUIsY0FBakI7QUFDQSxZQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsQ0FBdUIsUUFBdkI7QUFDQSxjQUFPLFFBQVA7QUFDRDs7O29DQUVjLEksRUFBTTtBQUNuQixXQUFJLEtBQUssUUFBTCxDQUFjLFNBQWQsQ0FBd0IsY0FBeEIsQ0FBdUMsSUFBdkMsQ0FBSixFQUFrRDtBQUNoRCxnQkFBTyxLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQXdCLElBQXhCLENBQVA7QUFDRDtBQUNELGNBQU8sSUFBUDtBQUNEOzs7aUNBTVc7O0FBRVYsV0FBTSxTQUFTLEtBQUssWUFBTCxDQUFrQixHQUFsQixDQUFzQixnQkFBdEIsRUFBd0MsYUFBeEMsRUFBZjtBQUNBLGVBQVEsR0FBUixDQUFZLE1BQVo7QUFDRDs7O21DQUVhO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ1osOEJBQTBCLEtBQUssWUFBL0IsOEhBQTZDO0FBQUEsZUFBbEMsV0FBa0M7O0FBQzNDLHVCQUFZLENBQVosRUFBZSxXQUFmO0FBQ0Q7QUFIVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSWI7Ozt5QkFFRyxNLEVBQVE7QUFDVixlQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0Q7Ozt5QkFsQndCO0FBQ3ZCLGNBQU8sRUFBRSxLQUFLLFFBQUwsQ0FBYyxnQkFBZCxDQUFGLEVBQW1DLENBQW5DLEVBQXNDLGFBQTdDO0FBQ0Q7Ozs7OzttQkFtQlksYTs7Ozs7Ozs7Ozs7O21CQ3ZJQSxVQUFTLEtBQVQsRUFBZ0I7QUFDN0IsVUFBTyxNQUFNLElBQU4sRUFBUDtBQUNELEU7O0FBQUEsRTs7Ozs7Ozs7Ozs7O21CQ0NjLFlBQVU7QUFDdkIsT0FBSSxPQUFPLE9BQU8saUJBQWQsS0FBcUMsV0FBekMsRUFBc0Q7QUFDcEQsWUFBTyxpQkFBUCxHQUEyQixFQUEzQjtBQUNEO0FBQ0QsVUFBTyxpQkFBUCxDQUF5QixTQUF6QjtBQUNBLFVBQU8saUJBQVAsQ0FBeUIsUUFBekI7QUFDRCxFOztBQVREOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7bUJDRGUsVUFBUyxLQUFULEVBQWdCO0FBQzdCLFVBQU8sTUFBTSxJQUFOLEVBQVA7QUFDRCxFOztBQUFBLEU7Ozs7Ozs7Ozs7OztBQ0ZEOzs7Ozs7Ozs7Ozs7S0FFTSxpQjs7Ozs7Ozs7Ozs7O21CQUdTLGlCOzs7Ozs7Ozs7Ozs7QUNMZjs7Ozs7Ozs7Ozs7O0tBRU0sd0I7Ozs7Ozs7Ozs7OzttQkFHUyx3Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ0xmOzs7Ozs7Ozs7Ozs7S0FFTSxvQjs7O0FBQ0osaUNBQVksYUFBWixFQUEyQixJQUEzQixFQUFpQztBQUFBOztBQUFBLHlHQUN6QixhQUR5QixFQUNWLElBRFU7O0FBRS9CLFdBQUsscUJBQUw7QUFGK0I7QUFHaEM7Ozs7NkNBRXVCO0FBQ3RCLFlBQUssZ0JBQUwsR0FBd0IsdUNBQXhCO0FBQ0EsWUFBSyxjQUFMLEdBQXNCLEVBQXRCOztBQUZzQjtBQUFBO0FBQUE7O0FBQUE7QUFJdEIsOEJBQXFCLEtBQUssYUFBTCxDQUFtQixRQUFuQixDQUE0QixPQUFqRCw4SEFBMEQ7QUFBQSxlQUEvQyxNQUErQzs7QUFDeEQsZUFBTSxpQkFBaUIsT0FBTyxRQUFQLEtBQXFCLFdBQXJCLEdBQW1DLFNBQVMsQ0FBVCxDQUFXLE9BQU8sSUFBbEIsQ0FBbkMsR0FBNkQsT0FBTyxJQUEzRjs7QUFFQSxlQUFJLHFMQUV1RSxPQUFPLFFBRjlFLHVCQUdJLGNBSEosOENBQUo7QUFPQSxnQkFBSyxjQUFMLENBQW9CLElBQXBCLENBQXlCLFlBQXpCOztBQVZ3RDtBQUFBO0FBQUE7O0FBQUE7QUFZeEQsbUNBQW9CLE9BQU8sTUFBM0IsbUlBQW1DO0FBQUEsbUJBQXhCLEtBQXdCOztBQUNqQyxtQkFBTSxZQUFZLE1BQU0sSUFBeEI7QUFDQSxtQkFBTSxZQUFZLE1BQU0sU0FBeEI7QUFDQSxtQkFBTSxnQkFBZ0IsT0FBTyxRQUFQLEtBQXFCLFdBQXJCLEdBQW1DLFNBQVMsQ0FBVCxDQUFXLFNBQVgsQ0FBbkMsR0FBMkQsU0FBakY7QUFDQSxtQkFBTSxNQUFNLHFGQUVpQixNQUFNLFFBRnZCLDJEQUdWLGFBSFUsZ0RBRzhDLFVBQVUsTUFIeEQscUNBQVo7QUFNQSxvQkFBSyxnQkFBTCxDQUFzQixNQUF0QixDQUE2QixHQUE3QjtBQUNBLG1CQUFNLFFBQVEsbURBQWlELE1BQU0sUUFBdkQsYUFBZDtBQUNBLG1CQUFNLFFBQVEsRUFBZDtBQVppQztBQUFBO0FBQUE7O0FBQUE7QUFhakMsdUNBQXVCLFNBQXZCLG1JQUFrQztBQUFBLHVCQUF2QixRQUF1Qjs7QUFDaEMsdUJBQU0sZUFBZSxTQUFTLElBQTlCO0FBQ0EsdUJBQU0sbUJBQW1CLE9BQU8sUUFBUCxLQUFxQixXQUFyQixHQUFtQyxTQUFTLENBQVQsQ0FBVyxZQUFYLENBQW5DLEdBQThELFlBQXZGO0FBQ0EsdUJBQU0sUUFBUSw4RUFFeUMsU0FBUyxRQUZsRCxVQUUrRCxnQkFGL0QsbUJBQWQ7QUFLQSx5QkFBTSxJQUFOLENBQVcsS0FBWDtBQUNEO0FBdEJnQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXVCakMscUJBQU0sTUFBTixDQUFhLEtBQWI7QUFDQSxvQkFBSyxjQUFMLENBQW9CLElBQXBCLENBQXlCLEtBQXpCO0FBRUQ7QUF0Q3VEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF1Q3pEO0FBM0NxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQTZDdEIsV0FBTSxPQUFPLElBQWI7QUFDQSxTQUFFLFFBQUYsRUFBWSxFQUFaLENBQWUsT0FBZixFQUF3QixpQ0FBeEIsRUFBMkQsU0FBUyxZQUFULEdBQXdCO0FBQ2pGLGFBQU0sUUFBUSxFQUFFLElBQUYsQ0FBZDtBQUNBLGFBQU0sY0FBYyx3Q0FBcEI7QUFDQSxlQUFNLFdBQU4sQ0FBa0IsV0FBbEI7QUFDQSxhQUFNLFlBQVksTUFBTSxJQUFOLENBQVcsV0FBWCxDQUFsQjtBQUNBLGFBQUksTUFBTSxRQUFOLENBQWUsV0FBZixDQUFKLEVBQWlDO0FBQUE7QUFDL0IsZUFBRSxpQ0FBRixFQUFxQyxXQUFyQyxDQUFpRCxXQUFqRDtBQUNBLGlCQUFNLDJCQUEyQix3QkFBakM7O0FBRUEsZUFBRSxpQkFBRixFQUFxQixJQUFyQixDQUEwQixTQUFTLEVBQVQsR0FBYztBQUN0QyxtQkFBTSxRQUFRLEVBQUUsSUFBRixDQUFkO0FBQ0EsbUJBQUksTUFBTSxRQUFOLENBQWUsd0JBQWYsQ0FBSixFQUE4QztBQUM1Qyx1QkFBTSxXQUFOLENBQWtCLHdCQUFsQjtBQUNEO0FBQ0QsbUJBQUksTUFBTSxJQUFOLENBQVcsV0FBWCxNQUE0QixTQUFoQyxFQUEyQztBQUN6Qyx1QkFBTSxRQUFOLENBQWUsd0JBQWY7QUFDRDtBQUNGLGNBUkQ7O0FBVUEsbUJBQU0sUUFBTixDQUFlLFdBQWY7QUFDQSxrQkFBSyxjQUFMLENBQW9CLElBQXBCO0FBZitCO0FBZ0JoQyxVQWhCRCxNQWdCTzs7QUFFTCxnQkFBSyxjQUFMLENBQW9CLElBQXBCO0FBQ0Q7QUFDRCxnQkFBTyxLQUFQO0FBQ0QsUUExQkQ7QUEyQkEsU0FBRSxRQUFGLEVBQVksRUFBWixDQUFlLE9BQWYsRUFBd0IsdUJBQXhCLEVBQWlELFNBQVMsWUFBVCxHQUF3QjtBQUN2RSxjQUFLLFdBQUwsQ0FDRSxVQURGLEVBRUUsQ0FDRSxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsY0FBYixDQURGLEVBRUUsS0FBSyxhQUFMLENBQW1CLFFBQW5CLENBQTRCLGVBQTVCLENBRkYsQ0FGRjtBQU9ELFFBUkQ7QUFTRDs7O2dDQUVVO0FBQ1Q7O0FBRUEsWUFBSyxXQUFMLEdBQW1CLEtBQUssYUFBTCxDQUFtQixtQkFBbkIsRUFBbkI7QUFDQSxZQUFLLFdBQUwsQ0FBaUIsTUFBakIsQ0FBd0IsS0FBSyxnQkFBN0I7O0FBRUEsWUFBSyxjQUFMLEdBQXNCLEtBQUssYUFBTCxDQUFtQixtQkFBbkIsRUFBdEI7QUFDQSxZQUFLLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBMkIsS0FBSyxjQUFoQztBQUNBLFlBQUssY0FBTCxDQUFvQixJQUFwQjs7QUFFQSxTQUFFLGlDQUFGLEVBQXFDLFdBQXJDLENBQWlELHdDQUFqRDtBQUNEOzs7Ozs7bUJBRVksb0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6R2Y7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU0sd0I7OztBQUNKLHFDQUFZLGFBQVosRUFBMkIsSUFBM0IsRUFBaUM7QUFBQTs7QUFBQSw2R0FDekIsYUFEeUIsRUFDVixJQURVOztBQUUvQixXQUFLLHdCQUFMO0FBQ0EsV0FBSyxZQUFMLEdBQW9CLEVBQXBCO0FBSCtCO0FBSWhDOzs7O2dEQUUwQjtBQUN6QixZQUFLLGNBQUwsR0FBc0IscUNBQXRCO0FBQ0Q7OztnQ0FFVTtBQUNUOztBQUVBLFlBQUssY0FBTCxHQUFzQixLQUFLLGFBQUwsQ0FBbUIsbUJBQW5CLEVBQXRCO0FBQ0EsWUFBSyxjQUFMLENBQW9CLE1BQXBCLENBQTJCLEtBQUssY0FBaEM7QUFDRDs7O21DQUVhO0FBQ1o7QUFDQSxZQUFLLGNBQUwsQ0FBb0IsSUFBcEIsQ0FBeUIsSUFBekIsRUFBK0IsTUFBL0I7QUFDQSxXQUFNLFVBQVUsS0FBSyxNQUFMLENBQVksQ0FBWixDQUFjLDZCQUFkLENBQWhCO0FBQ0EsV0FBTSxjQUFjLElBQXBCO0FBQ0EsWUFBSyxnQkFBTCxHQUF3QixFQUF4QjtBQUNBLFdBQU0sT0FBTyxJQUFiO0FBQ0EsZUFBUSxJQUFSLENBQWEsWUFBVTtBQUNyQixhQUFNLGNBQWMsRUFBRSxJQUFGLENBQXBCO0FBQ0EsYUFBTSxlQUFlLHFCQUFXLFdBQVgsQ0FBckI7QUFDQSxhQUFNLFlBQVksYUFBYSxhQUFiLEVBQWxCO0FBQ0EsY0FBSyxnQkFBTCxDQUFzQixhQUFhLEdBQW5DLElBQTBDLFlBQTFDO0FBQ0EscUJBQVksY0FBWixDQUEyQixNQUEzQixDQUFrQyxTQUFsQztBQUNELFFBTkQ7QUFPQSxZQUFLLFlBQUwsR0FBb0IsS0FBSyxNQUFMLENBQVksc0JBQWhDO0FBQ0Q7OztxQ0FFZTtBQUNkLFdBQU0sU0FBUyxFQUFmO0FBQ0EsWUFBSyxJQUFNLFNBQVgsSUFBd0IsS0FBSyxnQkFBN0IsRUFBK0M7QUFDN0MsYUFBSSxLQUFLLGdCQUFMLENBQXNCLGNBQXRCLENBQXFDLFNBQXJDLENBQUosRUFBcUQ7QUFDbkQsZUFBTSxTQUFTLEtBQUssZ0JBQUwsQ0FBc0IsU0FBdEIsQ0FBZjtBQUNBLGtCQUFPLE9BQU8sR0FBZCxJQUFxQixPQUFPLFNBQVAsRUFBckI7QUFDRDtBQUNGO0FBQ0QsY0FBTyxNQUFQO0FBQ0Q7Ozs7OzttQkFFWSx3Qjs7Ozs7Ozs7Ozs7O0FDakRmOzs7Ozs7Ozs7Ozs7S0FFTSx3Qjs7Ozs7Ozs7Ozs7O21CQUdTLHdCOzs7Ozs7Ozs7Ozs7Ozs7O0tDTFQsTztBQUNKLHNCQUFjO0FBQUE7O0FBQ1osVUFBSyxhQUFMLEdBQXFCLEVBQXJCOztBQUVBLFNBQUksU0FBUyxRQUFULENBQWtCLElBQXRCLEVBQTRCO0FBQzFCLFdBQU0sVUFBVSxTQUFTLFFBQVQsQ0FBa0IsSUFBbEIsQ0FBdUIsS0FBdkIsQ0FBNkIsMEJBQTdCLENBQWhCO0FBQ0EsV0FBSSxXQUFXLFFBQVEsTUFBUixLQUFtQixDQUFsQyxFQUFxQztBQUNuQyxhQUFNLGdCQUFnQixLQUFLLEtBQUwsQ0FBVyxtQkFBbUIsUUFBUSxDQUFSLENBQW5CLENBQVgsQ0FBdEI7O0FBRG1DO0FBQUE7QUFBQTs7QUFBQTtBQUduQyxnQ0FBbUIsYUFBbkIsOEhBQWtDO0FBQUEsaUJBQXZCLElBQXVCOztBQUNoQyxpQkFBSSxLQUFLLElBQVQsRUFBZTtBQUNiLG9CQUFLLGFBQUwsQ0FBbUIsS0FBSyxJQUF4QixJQUFnQyxLQUFLLElBQUwsSUFBYSxFQUE3QztBQUNEO0FBQ0Y7QUFQa0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFwQztBQUNGO0FBQ0Y7Ozs7Z0NBRVUsSSxFQUFNO0FBQ2YsY0FBTyxLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsS0FBNEIsS0FBbkM7QUFDRDs7Ozs7O21CQUdZLE87Ozs7Ozs7Ozs7Ozs7O0FDdkJmOzs7Ozs7OztLQUVNLFc7QUFFRiw0QkFDQTtBQUFBOztBQUNJLGNBQUssTUFBTDtBQUNBLGNBQUssVUFBTDtBQUNIOzs7O3NDQUdEO0FBQ0ksZ0NBQVMsbUJBQVQsQ0FBNkIsSUFBN0I7QUFDQSxrQkFBSyxZQUFMLEdBQW9CLE9BQU8sTUFBM0I7O0FBRUEsa0JBQUssYUFBTCxHQUFxQixLQUFLLFlBQUwsQ0FBa0IsZUFBdkM7QUFDQSxrQkFBSyxhQUFMLEdBQXFCLEtBQUssYUFBTCxDQUFtQixPQUF4QztBQUNBLGtCQUFLLHFCQUFMLEdBQTZCLEtBQTdCO0FBQ0Esa0JBQUssVUFBTDtBQUNBLGlCQUFJLE9BQU8sSUFBWDtBQUNBLGVBQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsWUFBVztBQUN4QixzQkFBSyxjQUFMO0FBQ0Esd0JBQU8sSUFBUDtBQUNILGNBSEQ7QUFJRixrQkFBSyxhQUFMLENBQW1CLFdBQW5CO0FBQ0Q7OztzREFZRDtBQUNJLGtCQUFLLG9CQUFMLEdBQTRCLEVBQTVCO0FBQ0EsaUJBQU0sT0FBTyxJQUFiO0FBQ0EsZUFBRSxLQUFLLFFBQUwsQ0FBYywwQkFBZCxDQUFGLEVBQTZDLElBQTdDLENBQWtELFNBQVMsSUFBVCxHQUFnQjtBQUM5RCxxQkFBSSxDQUFDLEtBQUsscUJBQVYsRUFBaUM7QUFDN0IsMEJBQUsscUJBQUwsR0FBNkIsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLGlCQUFiLENBQTdCO0FBQ0g7QUFDRCxzQkFBSyxvQkFBTCxDQUEwQixFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsaUJBQWIsQ0FBMUIsSUFBNkQsRUFBRSxJQUFGLENBQTdEO0FBQ0gsY0FMRDtBQU1IOzs7K0NBR0Q7QUFDSSxpQkFBSSxDQUFDLEtBQUssaUJBQVYsRUFBNkI7QUFDekIscUJBQUksWUFBWSxDQUFoQjtBQUNBLG1CQUFFLG9CQUFGLEVBQXdCLElBQXhCLENBQTZCLFlBQVk7QUFDckMseUJBQUksUUFBUSxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsZ0JBQWIsQ0FBWjtBQUNBLHlCQUFJLFFBQVEsU0FBWixFQUF1QjtBQUNuQixxQ0FBWSxLQUFaO0FBQ0g7QUFDSixrQkFMRDtBQU1BLHNCQUFLLGlCQUFMLEdBQXlCLFNBQXpCO0FBQ0g7QUFDRCxrQkFBSyxpQkFBTDtBQUNBLG9CQUFPLEtBQUssaUJBQVo7QUFDSDs7OzBDQUdEO0FBQ0ksaUJBQUksS0FBSyxpQkFBTCxJQUEwQixLQUFLLFNBQW5DLEVBQThDO0FBQzFDLHNCQUFLLFNBQUwsQ0FBZSxHQUFmLENBQ0ksS0FESixFQUVJLEtBQUssaUJBQUwsQ0FBdUIsUUFBdkIsR0FBa0MsR0FBbEMsR0FBd0MsS0FBSyxpQkFBTCxDQUF1QixNQUF2QixFQUF4QyxHQUEwRSxLQUFLLFNBQUwsQ0FBZSxNQUFmLEVBRjlFO0FBSUEsc0JBQUssaUJBQUwsQ0FBdUIsUUFBdkIsQ0FBZ0MscUNBQWhDO0FBQ0g7QUFDSjs7O3NDQUdEO0FBQ0ksa0JBQUssU0FBTCxHQUFpQixvcEJBQWpCO0FBbUJBLGVBQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsS0FBSyxTQUF0QjtBQUNBLGtCQUFLLFNBQUwsQ0FBZSxJQUFmO0FBQ0EsaUJBQU0sT0FBTyxJQUFiO0FBQ0EsZUFBRSxLQUFLLFFBQUwsQ0FBYywwQkFBZCxDQUFGLEVBQTZDLEVBQTdDLENBQWdEO0FBQzVDLDZCQUFZLFNBQVMsT0FBVCxHQUFtQjtBQUMzQix5QkFBTSxRQUFRLEVBQUUsSUFBRixDQUFkO0FBQ0EsMkJBQU0sUUFBTixDQUFlLDBDQUFmO0FBQ0gsa0JBSjJDO0FBSzVDLDZCQUFZLFNBQVMsUUFBVCxHQUFvQjtBQUM1Qix5QkFBTSxRQUFRLEVBQUUsSUFBRixDQUFkO0FBQ0EsMkJBQU0sV0FBTixDQUFrQiwwQ0FBbEI7QUFDSCxrQkFSMkM7QUFTNUMsd0JBQU8sU0FBUyxZQUFULEdBQXdCO0FBQzNCLHlCQUFNLFFBQVEsRUFBRSxJQUFGLENBQWQ7QUFDQSwwQkFBSyxjQUFMLENBQW9CLEtBQXBCO0FBQ0g7QUFaMkMsY0FBaEQsRUFhRyxvQkFiSDtBQWNBLGtCQUFLLFNBQUwsQ0FBZSxFQUFmLENBQWtCLE9BQWxCLEVBQTJCLGtDQUEzQixFQUErRCxZQUFXO0FBQ3RFLHFCQUFJLEtBQUssaUJBQVQsRUFBNEI7QUFDeEIseUJBQUksUUFBUSxLQUFLLGlCQUFMLENBQXVCLElBQXZCLENBQTRCLG9CQUE1QixDQUFaO0FBQ0EseUJBQUksTUFBTSxNQUFOLElBQWdCLENBQXBCLEVBQXVCO0FBQ25CLDhCQUFLLGlCQUFMLENBQXVCLFlBQXZCLENBQW9DLEtBQXBDO0FBQ0EsOEJBQUssY0FBTDtBQUNIO0FBQ0o7QUFDRCx3QkFBTyxLQUFQO0FBQ0gsY0FURCxFQVNHLEVBVEgsQ0FTTSxPQVROLEVBU2Usb0NBVGYsRUFTcUQsWUFBVztBQUM1RCxxQkFBSSxLQUFLLGlCQUFULEVBQTRCO0FBQ3hCLHlCQUFJLFFBQVEsS0FBSyxpQkFBTCxDQUF1QixJQUF2QixDQUE0QixvQkFBNUIsQ0FBWjtBQUNBLHlCQUFJLE1BQU0sTUFBTixJQUFnQixDQUFwQixFQUF1QjtBQUNuQiw4QkFBSyxpQkFBTCxDQUF1QixXQUF2QixDQUFtQyxLQUFuQztBQUNBLDhCQUFLLGNBQUw7QUFDSDtBQUNKO0FBQ0Qsd0JBQU8sS0FBUDtBQUNILGNBbEJELEVBa0JHLEVBbEJILENBa0JNLE9BbEJOLEVBa0JlLGdDQWxCZixFQWtCaUQsWUFBVztBQUN4RCxxQkFBSSxLQUFLLGlCQUFULEVBQTRCO0FBQ3hCLHlCQUFJLGtCQUFrQixLQUFLLGlCQUFMLENBQXVCLEtBQXZCLEVBQXRCO0FBQ0EscUNBQWdCLElBQWhCLENBQXFCLGdCQUFyQixFQUF1QyxLQUFLLG1CQUFMLEVBQXZDLEVBQW1FLFdBQW5FLENBQStFLEtBQUssaUJBQXBGO0FBQ0EsMEJBQUssY0FBTCxDQUFvQixlQUFwQjtBQUNIO0FBQ0Qsd0JBQU8sS0FBUDtBQUNILGNBekJELEVBeUJHLEVBekJILENBeUJNLE9BekJOLEVBeUJlLGlDQXpCZixFQXlCa0QsWUFBVztBQUN6RCxxQkFBSSxLQUFLLGlCQUFULEVBQTRCO0FBQ3hCLHlCQUFJLFFBQVEsZ0RBQVIsQ0FBSixFQUErRDtBQUMzRCw4QkFBSyxpQkFBTCxDQUF1QixNQUF2QjtBQUNBLDhCQUFLLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsOEJBQUssU0FBTCxDQUFlLElBQWYsRztBQUNIO0FBQ0o7QUFDRCx3QkFBTyxLQUFQO0FBQ0gsY0FsQ0Q7QUFtQ0g7Ozt3Q0FFYyxTLEVBQ2Y7QUFDSSxpQkFBSSxLQUFLLGlCQUFMLEtBQTJCLFNBQS9CLEVBQTBDO0FBQ3RDO0FBQ0g7QUFDRCxpQkFBSSxLQUFLLGlCQUFULEVBQTRCO0FBQ3hCLHNCQUFLLGlCQUFMLENBQXVCLFdBQXZCLENBQW1DLHFDQUFuQztBQUNIO0FBQ0Qsa0JBQUssaUJBQUwsR0FBeUIsU0FBekI7QUFDQSxrQkFBSyxjQUFMO0FBQ0Esa0JBQUssU0FBTCxDQUFlLElBQWY7QUFDSDs7OzBDQUVnQixRLEVBQ2pCO0FBQ0ksaUJBQU0sU0FBUyxFQUFmO0FBQ0EsaUJBQU0sT0FBTyxJQUFiO0FBQ0Esa0JBQUssSUFBTSxlQUFYLElBQThCLEtBQUssZUFBbkMsRUFBb0Q7QUFDaEQscUJBQUksS0FBSyxlQUFMLENBQXFCLGNBQXJCLENBQW9DLGVBQXBDLENBQUosRUFBMEQ7QUFDdEQseUJBQU0sV0FBVyxLQUFLLGVBQUwsQ0FBcUIsZUFBckIsQ0FBakI7QUFDQSw0QkFBTyxTQUFTLElBQVQsQ0FBYyxpQkFBZCxDQUFQLElBQTJDLEtBQUssc0JBQUwsQ0FBNEIsUUFBNUIsQ0FBM0M7QUFDSDtBQUNKO0FBQ0Qsa0JBQUssYUFBTCxDQUFtQixRQUFuQixFQUE2QixDQUFDLE1BQUQsQ0FBN0I7QUFDSDs7O2dEQUVzQixlLEVBQ3ZCO0FBQ0ksaUJBQU0sU0FBUyxFQUFmO0FBQ0Esb0JBQU8sZUFBUCxHQUF5QixnQkFBZ0IsSUFBaEIsQ0FBcUIsaUJBQXJCLENBQXpCO0FBQ0Esb0JBQU8sU0FBUCxHQUFtQixFQUFuQjtBQUNBLDZCQUFnQixJQUFoQixDQUFxQiwwQkFBckIsRUFBaUQsSUFBakQsQ0FBc0QsU0FBUyxJQUFULEdBQWdCO0FBQ2xFLHFCQUFNLFdBQVcsRUFBakI7QUFDQSwwQkFBUyxLQUFULEdBQWlCLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxlQUFiLENBQWpCO0FBQ0Esd0JBQU8sU0FBUCxDQUFpQixFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsZUFBYixDQUFqQixJQUFrRCxRQUFsRDtBQUNILGNBSkQ7QUFLQSxvQkFBTyxNQUFQO0FBQ0g7Ozs7Ozs7OztrQ0FPRDtBQUNJLGlCQUFNLGVBQWUsT0FBTyxtQkFBUCxJQUE4QixFQUFuRDtBQUNBLGlCQUFNLFdBQVc7QUFDYiw2Q0FBNEI7QUFEZixjQUFqQjtBQUdBLGtCQUFLLElBQU0sR0FBWCxJQUFrQixZQUFsQixFQUFnQztBQUM1QixxQkFBSSxhQUFhLGNBQWIsQ0FBNEIsR0FBNUIsQ0FBSixFQUFzQztBQUNsQyw4QkFBUyxHQUFULElBQWdCLGFBQWEsR0FBYixDQUFoQjtBQUNIO0FBQ0o7QUFDRCxrQkFBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0g7Ozt1Q0FFYSxJLEVBQU0sSSxFQUNwQjtBQUNJLGdDQUFTLFdBQVQsQ0FBcUIsS0FBSyxZQUExQixFQUF3QyxJQUF4QyxFQUE4QyxJQUE5QztBQUNIOzs7a0NBRVEsUyxFQUFXLFcsRUFDcEI7Ozs7Ozs7Ozs7Ozs7O0FBaUJJLGlCQUFNLE9BQU8sSUFBYjtBQUNBLGVBQUUsSUFBRixDQUFPO0FBQ0gsc0JBQUssR0FERjtBQUVILHlCQUFRLE1BRkw7QUFHSCx3QkFBTyxLQUhKO0FBSUgsdUJBQU07QUFDRixvQ0FBZSxXQURiO0FBRUYsNEJBQU8sU0FGTDtBQUdGLG1DQUFjLE9BQU87QUFIbkI7QUFKSCxjQUFQLEVBU0csSUFUSCxDQVNRLFNBQVMsRUFBVCxDQUFZLElBQVosRUFBa0I7QUFDdEIscUJBQU0sV0FBVyxFQUFFLElBQUYsQ0FBakI7QUFDQSxzQkFBSyxlQUFMLENBQXFCLEtBQUsscUJBQTFCLEVBQWlELE1BQWpELENBQXdELFFBQXhEO0FBQ0Esc0JBQUssYUFBTCxDQUFtQixXQUFuQjs7QUFFQSw4QkFBYSxhQUFiLENBQTJCLFNBQVMsQ0FBVCxFQUFZLFNBQXZDO0FBQ0gsY0FmRDtBQWdCSDs7OzZCQTNORDtBQUNJLGlCQUFJLEtBQUssb0JBQVQsRUFBK0I7QUFDM0Isd0JBQU8sS0FBSyxvQkFBWjtBQUNIO0FBQ0Qsa0JBQUssMEJBQUw7QUFDQSxvQkFBTyxLQUFLLG9CQUFaO0FBQ0g7Ozs7OzttQkF3TlUsVzs7Ozs7Ozs7QUMxUGYsMEMiLCJmaWxlIjoidmlzdWFsLWJ1aWxkZXIvc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNzYzYWQ5Mjc2NTNmNjVjNzU0NDFcbiAqKi8iLCJpbXBvcnQgJy4vYnVuZGxlLmNzcyc7XG5cbmltcG9ydCBGcm9udGVuZE1vbnN0ZXIgZnJvbSAnLi9Gcm9udGVuZE1vbnN0ZXInO1xuXG53aW5kb3cuRnJvbnRlbmRNb25zdGVyID0gbmV3IEZyb250ZW5kTW9uc3RlcigpO1xuLy9cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5qc1xuICoqLyIsImltcG9ydCBGcmFtZUFwaSBmcm9tICcuLy4uL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaSc7XG5cbmNsYXNzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIgPSB2aXN1YWxCdWlsZGVyO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXJnZXQgPSAkKHRoaXMudmlzdWFsQnVpbGRlci5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSlbMF0uY29udGVudFdpbmRvdztcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIC8vIGRlYWN0aXZhdGUgY3VycmVudCBzZWxlY3RlZCBlbnZpcm9ubWVudFxuICAgIGlmICh0aGlzLm5hbWUgPT09IHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpIHtcbiAgICAgIHRoaXMudmlzdWFsQnVpbGRlci5lbnZpcm9ubWVudHMuZ2V0KHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpLmRlYWN0aXZhdGUoKTtcbiAgICB9XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMudmlzdWFsQnVpbGRlci5jbGVhclN0YWNrYWJsZSgpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2UoZnVuYywgYXJncykge1xuICAgIHJldHVybiBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLnRhcmdldCwgZnVuYywgYXJncyk7XG4gIH1cbiAgXG4gIHBhZ2VDaGFuZ2VkKCkge1xuICAgIFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VFbnZpcm9ubWVudDtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvQmFzZUVudmlyb25tZW50LmpzXG4gKiovIiwiY2xhc3MgRnJhbWVBcGkge1xuICBzdGF0aWMgZ2V0IGlzSWUoKSB7XG4gICAgLyogZ2xvYmFsIGlzICovXG4gICAgaWYgKHR5cGVvZihpcykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gaXMuaWUoKTsvLyB8fCBpcy5lZGdlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgYmluZE1lc3NhZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgICBsZXQgbWVzc2FnZSA9IG51bGw7XG4gICAgICBpZiAoRnJhbWVBcGkuaXNJZSkge1xuICAgICAgICBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lc3NhZ2UgPSBldmVudC5kYXRhO1xuICAgICAgfVxuXG4gICAgICBpZiAobGlzdGVuZXJbbWVzc2FnZS5mdW5jXSkge1xuICAgICAgICBsaXN0ZW5lclttZXNzYWdlLmZ1bmNdLmFwcGx5KGxpc3RlbmVyLCBtZXNzYWdlLmFyZ3MpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJRThcbiAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25tZXNzYWdlJywgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzZW5kTWVzc2FnZSh0YXJnZXQsIGZ1bmMsIGFyZ3MpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgJ2Z1bmMnOiBmdW5jLFxuICAgICAgJ2FyZ3MnOiBhcmdzLFxuICAgIH07XG4gICAgY29uc3QgbWVzc2FnZSA9IEZyYW1lQXBpLmlzSWUgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IGRhdGE7XG5cbiAgICB0YXJnZXQucG9zdE1lc3NhZ2UobWVzc2FnZSwgJyonKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcmFtZUFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanNcbiAqKi8iLCJpbXBvcnQgVmlzdWFsQnVpbGRlciBmcm9tICcuL2NvbXBvbmVudHMvYnVpbGRlci9WaXN1YWxCdWlsZGVyJztcbmltcG9ydCBWaXN1YWxGcmFtZSBmcm9tICcuL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL1Zpc3VhbEZyYW1lJztcbmltcG9ydCBIYXNoQXBpIGZyb20gJy4vY29tcG9uZW50cy92aXN1YWwtZnJhbWUvSGFzaEFwaSc7XG5cbmNsYXNzIEZyb250ZW5kTW9uc3RlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFyYW1zKCk7XG4gICAgdGhpcy52aXN1YWxCdWxkZXIgPSBudWxsO1xuICAgIHRoaXMuaGFzaEFwaSA9IG5ldyBIYXNoQXBpKCk7XG4gICAgaWYgKHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdyAmJiB3aW5kb3cucGFyZW50LkZyb250ZW5kTW9uc3Rlcikge1xuICAgICAgaWYgKHdpbmRvdy5wYXJlbnQuRnJvbnRlbmRNb25zdGVyLmhhc0J1aWxkZXIpIHtcbiAgICAgICAgdGhpcy5WaXN1YWxGcmFtZSA9IG5ldyBWaXN1YWxGcmFtZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiogZ2xvYmFsczogc21vb3RoU2Nyb2xsKi9cbiAgICBpZiAodHlwZW9mKHNtb290aFNjcm9sbCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzbW9vdGhTY3JvbGwuaW5pdCgpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgVmlzdWFsQnVpbGRlciBjbGFzcyBpbnN0YW5jZVxuICAgKiBAcmV0dXJucyBWaXN1YWxCdWlsZGVyXG4gICAqL1xuICBnZXQgYnVpbGRlcigpIHtcbiAgICBpZiAodGhpcy52aXN1YWxCdWxkZXIgPT09IG51bGwpIHtcbiAgICAgIHRoaXMudmlzdWFsQnVsZGVyID0gbmV3IFZpc3VhbEJ1aWxkZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmlzdWFsQnVsZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgRnJvbnRlbmRNb25zdGVyIGluc3RhbmNlIGhhcyBWaXN1YWwgQnVpbGRlciBvbiBwYWdlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGhhc0J1aWxkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRlci4kYnVpbGRlci5sZW5ndGggPT09IDE7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBGcm9udGVuZE1vbnN0ZXIgc2V0dGluZ3MuXG4gICAqIFVzZXMgRnJvbnRlbmRNb25zdGVyU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuRnJvbnRlbmRNb25zdGVyU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB1c2VyU2V0dGluZ3MpIHtcbiAgICAgIGlmICh1c2VyU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcm9udGVuZE1vbnN0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL0Zyb250ZW5kTW9uc3Rlci5qc1xuICoqLyIsImltcG9ydCBBbGxFZGl0YWJsZXMgZnJvbSAnLi9lZGl0YWJsZXMvYWxsJztcblxuY2xhc3MgRWRpdGFibGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVkaXRhYmxlc0J5VHlwZSA9IHt9O1xuICAgIC8vIGluaXRpYWxpemUgYmFzZSBidWlsZC1pbiBlZGl0YWJsZXNcbiAgICBBbGxFZGl0YWJsZXMoKTtcbiAgICB0aGlzLmVkaXRhYmxlc0J5VHlwZSA9IHdpbmRvdy5NT05TVEVSX0VESVRBQkxFUztcbiAgfVxuXG4gIHNlcmlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgbGV0IGJlbURhdGEgPSAkbm9kZS5kYXRhKCdiZW0nKTtcbiAgICBjb25zdCBiZW1FbnRpdHkgPSAkbm9kZS5kYXRhKCdiZW1NYXRjaCcpO1xuICAgIGlmIChiZW1EYXRhLmhhc093blByb3BlcnR5KGJlbUVudGl0eSkpIHtcbiAgICAgIGJlbURhdGEgPSBiZW1EYXRhW2JlbUVudGl0eV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGJlbURhdGEgPSB7fTtcbiAgICB9XG4gICAgaWYgKGJlbURhdGEuaGFzT3duUHJvcGVydHkoJ2VkaXRhYmxlJykgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgZWRpdGFibGUgPSBiZW1EYXRhLmVkaXRhYmxlO1xuICAgIGxldCB0eXBlID0gZWRpdGFibGUuaGFzT3duUHJvcGVydHkoJ3R5cGUnKSA/IGVkaXRhYmxlLnR5cGUgOiAnc3RyaW5nJztcbiAgICBpZiAodGhpcy5lZGl0YWJsZXNCeVR5cGUuaGFzT3duUHJvcGVydHkodHlwZSkgPT09IGZhbHNlKSB7XG4gICAgICB0eXBlID0gJ3N0cmluZyc7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwb3J0VmFyaWFibGUgPSBlZGl0YWJsZS5oYXNPd25Qcm9wZXJ0eSgndGFyZ2V0JykgPyBlZGl0YWJsZS50YXJnZXQgOiAnZGF0YSc7XG5cbiAgICByZXR1cm4gdGhpcy5lZGl0YWJsZXNCeVR5cGVbdHlwZV0oJG5vZGUsIGV4cG9ydFZhcmlhYmxlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0YWJsZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9FZGl0YWJsZS5qc1xuICoqLyIsImNsYXNzIE1hdGVyaWFsIHtcbiAgY29uc3RydWN0b3IoJG5vZGUpIHtcbiAgICB0aGlzLiRub2RlID0gJG5vZGU7XG4gICAgdGhpcy5tYXRlcmlhbFBhdGggPSB0aGlzLiRub2RlLmRhdGEoJ21hdGVyaWFsUGF0aCcpO1xuICAgIHRoaXMubmFtZSA9IHRoaXMubWF0ZXJpYWxQYXRoLnJlcGxhY2UoLy4qXFwuKC4qKSQvLCAnJDEnKTtcbiAgICAvLyFAdG9kbyBDSEFOR0UgVEhJU1xuICAgIHRoaXMua2V5ID0gdGhpcy4kbm9kZS5kYXRhKCdtYXRlcmlhbEluZGV4Jyk7XG4gIH1cblxuICBwcm9jZXNzTWF0ZXJpYWwoKSB7XG4gICAgY29uc3QgJGxpID0gJChgPGxpIGNsYXNzPVwicGFnZS1zdHJ1Y3R1cmVfX21hdGVyaWFsXCI+JHt0aGlzLm5hbWV9PC9saT5gKTtcbiAgICByZXR1cm4gJGxpO1xuICB9XG5cbiAgc3RhdGljIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICByZXR1cm4gd2luZG93LkZyb250ZW5kTW9uc3Rlci5idWlsZGVyLmVkaXRhYmxlLnNlcmlhbGl6ZUVkaXRhYmxlKCRub2RlKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICAvLyBtYXRlcmlhbCBoYXMgZGF0YS1lZGl0YWJsZS1rZXlzIHdpdGggc2NoZW1hXG4gICAgY29uc3QgZWRpdGFibGVLZXlzID0gdGhpcy4kbm9kZS5kYXRhKCdlZGl0YWJsZUtleXMnKTtcbiAgICBjb25zdCByZWN1cnNpdmVJdGVyYXRvciA9IGZ1bmN0aW9uIGl0ZXIoYXJyLCBwYXRoLCAkc2NvcGUpIHtcbiAgICAgIGNvbnN0IGZpbmFsID0ge307XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhhcnIpKSB7XG4gICAgICAgIGxldCBmdWxsS2V5UGF0aCA9IGtleTtcbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICBmdWxsS2V5UGF0aCA9IGAke3BhdGh9LiR7a2V5fWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZihhcnJba2V5XSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY29uc3QgJGl0ZW1zID0gJHNjb3BlLmZpbmQoYFtkYXRhLXJlY3Vyc2l2ZS1pdGVtPVwiJHtmdWxsS2V5UGF0aH1cIl1gKTtcbiAgICAgICAgICBmaW5hbFtrZXldID0ge307XG4gICAgICAgICAgJGl0ZW1zLmVhY2goZnVuY3Rpb24gaXRlbXNSZWMoKSB7XG4gICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICBmaW5hbFtrZXldWyR0aGlzLmRhdGEoJ3JlY3Vyc2l2ZUl0ZW1LZXknKV0gPSByZWN1cnNpdmVJdGVyYXRvcihcbiAgICAgICAgICAgICAgYXJyW2tleV0sXG4gICAgICAgICAgICAgICdpdGVtJyxcbiAgICAgICAgICAgICAgJHRoaXNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgJG5vZGUgPSAkc2NvcGUuZmluZChgW2RhdGEtZWRpdGFibGUta2V5PVwiJHtmdWxsS2V5UGF0aH1cIl1gKTtcbiAgICAgICAgICBmaW5hbFtrZXldID0gTWF0ZXJpYWwuc2VyaWFsaXplTm9kZSgkbm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmaW5hbDtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IHJlc3VsdCA9IHJlY3Vyc2l2ZUl0ZXJhdG9yKGVkaXRhYmxlS2V5cywgJycsIHRoaXMuJG5vZGUpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4vLyAgICB0aGlzLiRub2RlLmZpbmQoJycpXG4gICAgXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9QYWdlU3RydWN0dXJlQ29tcG9uZW50cy9NYXRlcmlhbC5qc1xuICoqLyIsImltcG9ydCBNYXRlcmlhbCBmcm9tICcuL01hdGVyaWFsJztcblxuY2xhc3MgUmVnaW9uIHtcbiAgY29uc3RydWN0b3IoJG5vZGUpIHtcbiAgICB0aGlzLm1hdGVyaWFscyA9IHt9O1xuICAgIHRoaXMuJG5vZGUgPSAkbm9kZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gJG5vZGUuZGF0YSgnY29udGVudERlc2NyaXB0aW9uJyk7XG4gIH1cblxuICBwcm9jZXNzUmVnaW9uKCkge1xuICAgIGNvbnN0ICRyZWdpb25MaSA9ICQoYDxsaSBjbGFzcz1cInBhZ2Utc3RydWN0dXJlX19yZWdpb25cIj4ke3RoaXMucmVnaW9uRGVzY3JpcHRpb259PC9saT5gKTtcbiAgICB0aGlzLmtleSA9IHRoaXMuJG5vZGUuZGF0YSgncmVnaW9uS2V5Jyk7XG4gICAgdGhpcy5pZCA9IHRoaXMuJG5vZGUuZGF0YSgncmVnaW9uSWQnKTtcbiAgICBjb25zdCAkcmVnaW9uVWwgPSAkKCc8dWwgY2xhc3M9XCJwYWdlLXN0cnVjdHVyZV9fcmVnaW9uLW1hdGVyaWFsc1wiPjwvdWw+Jyk7XG5cbiAgICBjb25zdCAkbWF0ZXJpYWxzID0gdGhpcy4kbm9kZS5maW5kKCdbZGF0YS1pcy1tYXRlcmlhbD0xXScpO1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgJG1hdGVyaWFscy5lYWNoKGZ1bmN0aW9uIG1hdGVyaWFsc0l0ZXJhdG9yKCkge1xuICAgICAgY29uc3QgJG1hdGVyaWFsTm9kZSA9ICQodGhpcyk7XG4gICAgICBjb25zdCBtYXRlcmlhbE9iamVjdCA9IG5ldyBNYXRlcmlhbCgkbWF0ZXJpYWxOb2RlKTtcbiAgICAgIGNvbnN0ICRsaSA9IG1hdGVyaWFsT2JqZWN0LnByb2Nlc3NNYXRlcmlhbCgpO1xuICAgICAgdGhhdC5tYXRlcmlhbHNbbWF0ZXJpYWxPYmplY3Qua2V5XSA9IG1hdGVyaWFsT2JqZWN0O1xuICAgICAgJHJlZ2lvblVsLmFwcGVuZCgkbGkpO1xuICAgIH0pO1xuXG4gICAgJHJlZ2lvbkxpLmFwcGVuZCgkcmVnaW9uVWwpO1xuICAgIHJldHVybiAkcmVnaW9uTGk7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgbWF0ZXJpYWxzID0gdGhpcy5tYXRlcmlhbHM7XG4gICAgT2JqZWN0LmtleXMobWF0ZXJpYWxzKS5mb3JFYWNoKGZ1bmN0aW9uIGl0ZXIobWF0ZXJpYWxLZXkpIHtcbiAgICAgIHJlc3VsdFttYXRlcmlhbEtleV0gPSBtYXRlcmlhbHNbbWF0ZXJpYWxLZXldLnNlcmlhbGl6ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaW9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZUNvbXBvbmVudHMvUmVnaW9uLmpzXG4gKiovIiwiaW1wb3J0IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQnO1xuaW1wb3J0IE1hdGVyaWFsc0Vudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50JztcbmltcG9ydCBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50JztcbmltcG9ydCBBY3Rpb25FbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudCc7XG5pbXBvcnQgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCc7XG5pbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi8uLi92aXN1YWwtZnJhbWUvRnJhbWVBcGknO1xuaW1wb3J0IEVkaXRhYmxlIGZyb20gJy4vRWRpdGFibGUnO1xuXG5jbGFzcyBWaXN1YWxCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLnJlc29sdXRpb25Td2l0Y2hlcigpO1xuXG4gICAgdGhpcy5lbnZpcm9ubWVudHMgPSBuZXcgTWFwKFtcbiAgICAgIFsnc2l0ZS1zdHJ1Y3R1cmUnLCBuZXcgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdzaXRlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsncGFnZS1zdHJ1Y3R1cmUnLCBuZXcgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdwYWdlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsnbWF0ZXJpYWxzJywgbmV3IE1hdGVyaWFsc0Vudmlyb25tZW50KHRoaXMsICdtYXRlcmlhbHMnKV0sXG4gICAgICBbJ2N1c3RvbWl6YXRpb24nLCBuZXcgQ3VzdG9taXphdGlvbkVudmlyb25tZW50KHRoaXMsICdjdXN0b21pemF0aW9uJyldLFxuICAgICAgWydhY3Rpb24nLCBuZXcgQWN0aW9uRW52aXJvbm1lbnQodGhpcywgJ2FjdGlvbicpXSxcbiAgICBdKTtcblxuICAgIHRoaXMuZW52aXJvbm1lbnRTZWxlY3RvcigpO1xuXG4gICAgLy8gc2VsZWN0IGZpcnN0IGVudmlyb25tZW50IGJ5IGRlZmF1bHRcbiAgICB0aGlzLnN3aXRjaEVudmlyb25tZW50KCdzaXRlLXN0cnVjdHVyZScpO1xuICAgICQoJy5tb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJylcbiAgICAgIC5maXJzdCgpXG4gICAgICAuYWRkQ2xhc3MoJ21vbnN0ZXItZW52aXJvbm1lbnQtc2VsZWN0b3JfX2Vudmlyb25tZW50LWxpbmstLWFjdGl2ZScpO1xuICAgIEZyYW1lQXBpLmJpbmRNZXNzYWdlTGlzdGVuZXIodGhpcyk7XG5cbiAgICB0aGlzLmVkaXRhYmxlID0gbmV3IEVkaXRhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBWaXN1YWxCdWlsZGVyIHNldHRpbmdzLlxuICAgKiBVc2VzIFZpc3VhbEJ1aWxkZXJTZXR0aW5ncyB2YXJpYWJsZSBpZiBwcm92aWRlZCBvciBkZWZhdWx0IHZhbHVlcyBpbnN0ZWFkLlxuICAgKi9cbiAgcGFyYW1zKCkge1xuICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5WaXN1YWxCdWlsZGVyU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICAnZWxlbWVudC1zZWxlY3Rvcic6ICcubW9uc3Rlci12aXN1YWwtYnVpbGRlcicsXG4gICAgICAnZnJhbWUtc2VsZWN0b3InOiAnLm1vbnN0ZXItdmlzdWFsLWZyYW1lJyxcbiAgICAgICdidW5kbGVzJzoge30sXG4gICAgICAnc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyc6ICdtb25zdGVyLXN0YWNrYWJsZS1jb250YWluZXInLFxuICAgICAgJ25ldy1ibG9jay11cmwnOiAnL21vbnN0ZXIvdmlzdWFsLWJ1aWxkZXIvbmV3LWJsb2NrJyxcbiAgICB9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIHVzZXJTZXR0aW5ncykge1xuICAgICAgaWYgKHVzZXJTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuJGJ1aWxkZXIgPSAkKHRoaXMuc2V0dGluZ3NbJ2VsZW1lbnQtc2VsZWN0b3InXSk7XG4gICAgdGhpcy4kc3RhY2thYmxlID0gJCgnLicgKyB0aGlzLnNldHRpbmdzWydzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJ10pO1xuICB9XG5cbiAgcmVzb2x1dGlvblN3aXRjaGVyKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGJlbUVsZW0gPSAncmVzb2x1dGlvbi1zd2l0Y2hlcl9fcmVzb2x1dGlvbi1saW5rJztcbiAgICBjb25zdCBhY3RpdmVNb2RpZmllciA9IGAke2JlbUVsZW19LS1hY3RpdmVgO1xuICAgIGNvbnN0ICRyZXNvbHV0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRyZXNvbHV0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAkcmVzb2x1dGlvbkxpbmtzLnJlbW92ZUNsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgICQodGhhdC5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSkud2lkdGgoJCh0aGlzKS5kYXRhKCdyZXNvbHV0aW9uV2lkdGgnKSk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGVudmlyb25tZW50U2VsZWN0b3IoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgYmVtRWxlbSA9ICdtb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJztcbiAgICBjb25zdCBhY3RpdmVNb2RpZmllciA9IGAke2JlbUVsZW19LS1hY3RpdmVgO1xuICAgIGNvbnN0ICRzZWN0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRzZWN0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBjb25zdCBlbnZpcm9ubWVudE5hbWUgPSAkKHRoaXMpLmRhdGEoJ2Vudmlyb25tZW50TmFtZScpO1xuICAgICAgaWYgKHRoYXQuY3VycmVudEVudmlyb25tZW50ID09PSBlbnZpcm9ubWVudE5hbWUpIHtcbiAgICAgICAgJHNlY3Rpb25MaW5rcy5yZW1vdmVDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICAgIHRoYXQuZW52aXJvbm1lbnRzLmdldChlbnZpcm9ubWVudE5hbWUpLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgdGhhdC5jdXJyZW50RW52aXJvbm1lbnQgPSBudWxsO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgICRzZWN0aW9uTGlua3MucmVtb3ZlQ2xhc3MoYWN0aXZlTW9kaWZpZXIpO1xuICAgICAgdGhhdC5zd2l0Y2hFbnZpcm9ubWVudChlbnZpcm9ubWVudE5hbWUpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBzd2l0Y2hFbnZpcm9ubWVudChlbnZpcm9ubWVudE5hbWUpIHtcbiAgICB0aGlzLmVudmlyb25tZW50cy5nZXQoZW52aXJvbm1lbnROYW1lKS5hY3RpdmF0ZSgpO1xuICAgIHRoaXMuY3VycmVudEVudmlyb25tZW50ID0gZW52aXJvbm1lbnROYW1lO1xuICB9XG5cbiAgY2xlYXJTdGFja2FibGUoKSB7XG4gICAgdGhpcy4kc3RhY2thYmxlLmVtcHR5KCk7XG4gIH1cblxuICBjcmVhdGVTdGFja2FibGVQYW5lKCkge1xuICAgIGNvbnN0IHBhbmVDbGFzcyA9IGAke3RoaXMuc2V0dGluZ3NbJ3N0YWNrYWJsZS1jb250YWluZXItY2xhc3MnXX1fX3BhbmVgO1xuICAgIGNvbnN0IG1vZGlmaWVyID0gdGhpcy4kc3RhY2thYmxlLmZpbmQoJy4nICsgcGFuZUNsYXNzKS5sZW5ndGggPT09IDAgPyBgJHtwYW5lQ2xhc3N9LS1maXJzdGAgOiAnJztcbiAgICBjb25zdCAkbmV3UGFuZSA9ICQoYDxkaXYgY2xhc3M9XCIke3BhbmVDbGFzc30gJHttb2RpZmllcn1cIj48L2Rpdj5gKTtcbiAgICB0aGlzLiRzdGFja2FibGUuYXBwZW5kKCRuZXdQYW5lKTtcbiAgICByZXR1cm4gJG5ld1BhbmU7XG4gIH1cblxuICBtYXRlcmlhbEJ5TmFtZShuYW1lKSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MubWF0ZXJpYWxzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5tYXRlcmlhbHNbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IGZyYW1lQ29udGVudFdpbmRvdygpIHtcbiAgICByZXR1cm4gJCh0aGlzLnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKVswXS5jb250ZW50V2luZG93O1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIC8vIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMuZnJhbWVDb250ZW50V2luZG93LCAnc2VyaWFsaXplQ29udGVudCcsIFsnbG9nJ10pO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKS5zZXJpYWxpemVQYWdlKCk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2VkKCkge1xuICAgIGZvciAoY29uc3QgZW52aXJvbm1lbnQgb2YgdGhpcy5lbnZpcm9ubWVudHMpIHtcbiAgICAgIGVudmlyb25tZW50WzFdLnBhZ2VDaGFuZ2VkKCk7XG4gICAgfVxuICB9XG5cbiAgbG9nKHJlc3VsdCkge1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsQnVpbGRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXIuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigkbm9kZSkge1xuICByZXR1cm4gJG5vZGUuaHRtbCgpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lZGl0YWJsZXMvV1lTSVdZRy5qc1xuICoqLyIsImltcG9ydCBXWVNJV1lHIGZyb20gJy4vV1lTSVdZRyc7XG5pbXBvcnQgU3RyaW5nRWRpdGFibGUgZnJvbSAnLi9zdHJpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xuICBpZiAodHlwZW9mKHdpbmRvdy5NT05TVEVSX0VESVRBQkxFUykgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTID0ge307XG4gIH1cbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWyd3eXNpd3lnJ10gPSBXWVNJV1lHO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ3N0cmluZyddID0gU3RyaW5nRWRpdGFibGU7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL2FsbC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCRub2RlKSB7XG4gIHJldHVybiAkbm9kZS50ZXh0KCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9zdHJpbmcuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgQWN0aW9uRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBBY3Rpb25FbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIE1hdGVyaWFsc0Vudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IodmlzdWFsQnVpbGRlciwgbmFtZSkge1xuICAgIHN1cGVyKHZpc3VhbEJ1aWxkZXIsIG5hbWUpO1xuICAgIHRoaXMuaW5pdE1hdGVyaWFsc1NlbGVjdG9yKCk7XG4gIH1cblxuICBpbml0TWF0ZXJpYWxzU2VsZWN0b3IoKSB7XG4gICAgdGhpcy4kbWF0ZXJpYWxzR3JvdXBzID0gJChgPHVsIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc1wiPjwvdWw+YCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzTGlzdCA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBidW5kbGUgb2YgdGhpcy52aXN1YWxCdWlsZGVyLnNldHRpbmdzLmJ1bmRsZXMpIHtcbiAgICAgIGNvbnN0IGkxOG5CdW5kbGVOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCcgPyBwb2x5Z2xvdC50KGJ1bmRsZS5uYW1lKSA6IGJ1bmRsZS5uYW1lO1xuXG4gICAgICBsZXQgJGJ1bmRsZVRpdGxlID0gYFxuICAgICAgPGxpIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19faXRlbSBtYXRlcmlhbHMtZ3JvdXBzX19pdGVtLS1idW5kbGUtbGFiZWxcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1idW5kbGVcIiBkYXRhLWJ1bmRsZS1wYXRoPVwiXCIke2J1bmRsZS5mdWxsUGF0aH0+XG4gICAgICAgICAgICAke2kxOG5CdW5kbGVOYW1lfSAgICAgIFxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICAgYDtcbiAgICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QucHVzaCgkYnVuZGxlVGl0bGUpO1xuXG4gICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIGJ1bmRsZS5ncm91cHMpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBOYW1lID0gZ3JvdXAubmFtZTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gZ3JvdXAubWF0ZXJpYWxzO1xuICAgICAgICBjb25zdCBpMThuR3JvdXBOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCcgPyBwb2x5Z2xvdC50KGdyb3VwTmFtZSkgOiBncm91cE5hbWU7XG4gICAgICAgIGNvbnN0ICRsaSA9ICQoYFxuICAgIDxsaSBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX2l0ZW1cIj5cbiAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS1ncm91cC1wYXRoPVwiJHtncm91cC5mdWxsUGF0aH1cIiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cFwiPlxuICAgICAgICAke2kxOG5Hcm91cE5hbWV9IDxzcGFuIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fY291bnRcIj4oJHttYXRlcmlhbHMubGVuZ3RofSk8L3NwYW4+XG4gICAgICA8L2E+XG4gICAgPC9saT5gKTtcbiAgICAgICAgdGhpcy4kbWF0ZXJpYWxzR3JvdXBzLmFwcGVuZCgkbGkpO1xuICAgICAgICBjb25zdCAkbGlzdCA9ICQoYDx1bCBjbGFzcz1cIm1hdGVyaWFscy1saXN0XCIgZGF0YS1ncm91cC1wYXRoPVwiJHtncm91cC5mdWxsUGF0aH1cIj48L3VsPmApO1xuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IG1hdGVyaWFsIG9mIG1hdGVyaWFscykge1xuICAgICAgICAgIGNvbnN0IG1hdGVyaWFsTmFtZSA9IG1hdGVyaWFsLm5hbWU7XG4gICAgICAgICAgY29uc3QgaTE4bk1hdGVyaWFsTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnID8gcG9seWdsb3QudChtYXRlcmlhbE5hbWUpIDogbWF0ZXJpYWxOYW1lO1xuICAgICAgICAgIGNvbnN0ICRpdGVtID0gJChgXG48bGk+XG4gIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtYXRlcmlhbHMtbGlzdF9faXRlbVwiIGRhdGEtbWF0ZXJpYWwtcGF0aD1cIiR7bWF0ZXJpYWwuZnVsbFBhdGh9XCI+JHtpMThuTWF0ZXJpYWxOYW1lfTwvYT5cbjwvbGk+XG5gKTtcbiAgICAgICAgICBpdGVtcy5wdXNoKCRpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICAkbGlzdC5hcHBlbmQoaXRlbXMpO1xuICAgICAgICB0aGlzLiRtYXRlcmlhbHNMaXN0LnB1c2goJGxpc3QpO1xuXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAnLCBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICBjb25zdCBhY3RpdmVDbGFzcyA9ICdtYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAtLWFjdGl2ZSc7XG4gICAgICAkdGhpcy50b2dnbGVDbGFzcyhhY3RpdmVDbGFzcyk7XG4gICAgICBjb25zdCBncm91cFBhdGggPSAkdGhpcy5kYXRhKCdncm91cFBhdGgnKTtcbiAgICAgIGlmICgkdGhpcy5oYXNDbGFzcyhhY3RpdmVDbGFzcykpIHtcbiAgICAgICAgJCgnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcpLnJlbW92ZUNsYXNzKGFjdGl2ZUNsYXNzKTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzTGlzdEFjdGl2ZUNsYXNzID0gJ21hdGVyaWFscy1saXN0LS1hY3RpdmUnO1xuXG4gICAgICAgICQoJy5tYXRlcmlhbHMtbGlzdCcpLmVhY2goZnVuY3Rpb24gaXQoKSB7XG4gICAgICAgICAgY29uc3QgJGxpc3QgPSAkKHRoaXMpO1xuICAgICAgICAgIGlmICgkbGlzdC5oYXNDbGFzcyhtYXRlcmlhbHNMaXN0QWN0aXZlQ2xhc3MpKSB7XG4gICAgICAgICAgICAkbGlzdC5yZW1vdmVDbGFzcyhtYXRlcmlhbHNMaXN0QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoJGxpc3QuZGF0YSgnZ3JvdXBQYXRoJykgPT09IGdyb3VwUGF0aCkge1xuICAgICAgICAgICAgJGxpc3QuYWRkQ2xhc3MobWF0ZXJpYWxzTGlzdEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICR0aGlzLmFkZENsYXNzKGFjdGl2ZUNsYXNzKTtcbiAgICAgICAgdGhhdC4kbWF0ZXJpYWxzUGFuZS5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGF0J3MganVzdCBzZWNvbmQgY2xpY2sgb24gdGhlIHNhbWUgZ3JvdXBcbiAgICAgICAgdGhhdC4kbWF0ZXJpYWxzUGFuZS5oaWRlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYXRlcmlhbHMtbGlzdF9faXRlbScsIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgIHRoYXQuc2VuZE1lc3NhZ2UoXG4gICAgICAgICduZXdCbG9jaycsXG4gICAgICAgIFtcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoJ21hdGVyaWFsUGF0aCcpLFxuICAgICAgICAgIHRoYXQudmlzdWFsQnVpbGRlci5zZXR0aW5nc1snbmV3LWJsb2NrLXVybCddLFxuICAgICAgICBdXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgc3VwZXIuYWN0aXZhdGUoKTtcblxuICAgIHRoaXMuJGdyb3Vwc1BhbmUgPSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3JlYXRlU3RhY2thYmxlUGFuZSgpO1xuICAgIHRoaXMuJGdyb3Vwc1BhbmUuYXBwZW5kKHRoaXMuJG1hdGVyaWFsc0dyb3Vwcyk7XG5cbiAgICB0aGlzLiRtYXRlcmlhbHNQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRtYXRlcmlhbHNQYW5lLmFwcGVuZCh0aGlzLiRtYXRlcmlhbHNMaXN0KTtcbiAgICB0aGlzLiRtYXRlcmlhbHNQYW5lLmhpZGUoKTtcblxuICAgICQoJy5tYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAnKS5yZW1vdmVDbGFzcygnbWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwLS1hY3RpdmUnKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTWF0ZXJpYWxzRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvTWF0ZXJpYWxzRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcbmltcG9ydCBSZWdpb24gZnJvbSAnLi8uLi9QYWdlU3RydWN0dXJlQ29tcG9uZW50cy9SZWdpb24nO1xuXG5jbGFzcyBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2aXN1YWxCdWlsZGVyLCBuYW1lKSB7XG4gICAgc3VwZXIodmlzdWFsQnVpbGRlciwgbmFtZSk7XG4gICAgdGhpcy5pbml0UGFnZVN0cnVjdHVyZUVsZW1lbnQoKTtcbiAgICB0aGlzLmVkaXRNb2RlRGF0YSA9IHt9O1xuICB9XG5cbiAgaW5pdFBhZ2VTdHJ1Y3R1cmVFbGVtZW50KCkge1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUgPSAkKGA8dWwgY2xhc3M9XCJwYWdlLXN0cnVjdHVyZVwiPjwvdWw+YClcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHN1cGVyLmFjdGl2YXRlKCk7XG5cbiAgICB0aGlzLiRzdHJ1Y3R1cmVQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRzdHJ1Y3R1cmVQYW5lLmFwcGVuZCh0aGlzLiRwYWdlU3RydWN0dXJlKTtcbiAgfVxuICBcbiAgcGFnZUNoYW5nZWQoKSB7XG4gICAgc3VwZXIucGFnZUNoYW5nZWQoKTtcbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlLmZpbmQoJ2xpJykucmVtb3ZlKCk7XG4gICAgY29uc3QgcmVnaW9ucyA9IHRoaXMudGFyZ2V0LiQoJy5tLW1vbnN0ZXItY29udGVudF9fY29udGVudCcpO1xuICAgIGNvbnN0IGVudmlyb25tZW50ID0gdGhpcztcbiAgICB0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUgPSB7fTtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICByZWdpb25zLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0ICRyZWdpb25Ob2RlID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IHJlZ2lvbk9iamVjdCA9IG5ldyBSZWdpb24oJHJlZ2lvbk5vZGUpO1xuICAgICAgY29uc3QgJHJlZ2lvbkxpID0gcmVnaW9uT2JqZWN0LnByb2Nlc3NSZWdpb24oKTtcbiAgICAgIHRoYXQucmVnaW9uc1N0cnVjdHVyZVtyZWdpb25PYmplY3Qua2V5XSA9IHJlZ2lvbk9iamVjdDtcbiAgICAgIGVudmlyb25tZW50LiRwYWdlU3RydWN0dXJlLmFwcGVuZCgkcmVnaW9uTGkpO1xuICAgIH0pO1xuICAgIHRoaXMuZWRpdE1vZGVEYXRhID0gdGhpcy50YXJnZXQuTU9OU1RFUl9FRElUX01PREVfREFUQTtcbiAgfVxuICBcbiAgc2VyaWFsaXplUGFnZSgpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IHJlZ2lvbktleSBpbiB0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUpIHtcbiAgICAgIGlmICh0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUuaGFzT3duUHJvcGVydHkocmVnaW9uS2V5KSkge1xuICAgICAgICBjb25zdCByZWdpb24gPSB0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmVbcmVnaW9uS2V5XTtcbiAgICAgICAgcmVzdWx0W3JlZ2lvbi5rZXldID0gcmVnaW9uLnNlcmlhbGl6ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJjbGFzcyBIYXNoQXBpIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5mdW5jdGlvbkNhbGxzID0ge307XG5cbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaGFzaCkge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGRvY3VtZW50LmxvY2F0aW9uLmhhc2gubWF0Y2goLyNoYXNoQXBpOiguKj8pOlxcL2hhc2hBcGkvKTtcbiAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGNvbnN0IGZ1bmN0aW9uQ2FsbHMgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGZ1bmN0aW9uQ2FsbHMpIHtcbiAgICAgICAgICBpZiAoaXRlbS5mdW5jKSB7XG4gICAgICAgICAgICB0aGlzLmZ1bmN0aW9uQ2FsbHNbaXRlbS5mdW5jXSA9IGl0ZW0uYXJncyB8fCB7fTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzaG91bGRDYWxsKGZ1bmMpIHtcbiAgICByZXR1cm4gdGhpcy5mdW5jdGlvbkNhbGxzW2Z1bmNdIHx8IGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhhc2hBcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanNcbiAqKi8iLCJpbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi9GcmFtZUFwaSc7XG5cbmNsYXNzIFZpc3VhbEZyYW1lXG57XG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgdGhpcy5wYXJhbXMoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpXG4gICAge1xuICAgICAgICBGcmFtZUFwaS5iaW5kTWVzc2FnZUxpc3RlbmVyKHRoaXMpO1xuICAgICAgICB0aGlzLnBhcmVudFdpbmRvdyA9IHdpbmRvdy5wYXJlbnQ7XG4gICAgICAgIC8qKiBAdmFyIEZyb250ZW5kTW9uc3RlciAqL1xuICAgICAgICB0aGlzLnBhcmVudE1vbnN0ZXIgPSB0aGlzLnBhcmVudFdpbmRvdy5Gcm9udGVuZE1vbnN0ZXI7XG4gICAgICAgIHRoaXMucGFyZW50QnVpbGRlciA9IHRoaXMucGFyZW50TW9uc3Rlci5idWlsZGVyO1xuICAgICAgICB0aGlzLmN1cnJlbnRNb25zdGVyQ29udGVudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1ha2VJdE1vdmUoKTtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhhdC51cGRhdGVIYW5kbGVycygpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgZ2V0ICRtb25zdGVyQ29udGVudCgpXG4gICAge1xuICAgICAgICBpZiAodGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZTtcbiAgICB9XG5cbiAgICByZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpXG4gICAge1xuICAgICAgICB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlID0ge307XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICAkKHRoaXMuc2V0dGluZ3NbJ21vbnN0ZXItY29udGVudC1zZWxlY3RvciddKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgICAgICBpZiAoIXRoYXQuY3VycmVudE1vbnN0ZXJDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhhdC5jdXJyZW50TW9uc3RlckNvbnRlbnQgPSAkKHRoaXMpLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhhdC4kbW9uc3RlckNvbnRlbnRDYWNoZVskKHRoaXMpLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpXSA9ICQodGhpcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldE5ld01hdGVyaWFsSW5kZXgoKVxuICAgIHtcbiAgICAgICAgaWYgKCF0aGlzLmxhc3RNYXRlcmlhbEluZGV4KSB7XG4gICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgICQoJ1tkYXRhLWlzLW1hdGVyaWFsXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuZGF0YSgnbWF0ZXJpYWwtaW5kZXgnKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmxhc3RNYXRlcmlhbEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdE1hdGVyaWFsSW5kZXgrKztcbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdE1hdGVyaWFsSW5kZXg7XG4gICAgfVxuXG4gICAgdXBkYXRlSGFuZGxlcnMoKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwgJiYgdGhpcy4kaGFuZGxlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuJGhhbmRsZXJzLmNzcyhcbiAgICAgICAgICAgICAgICAndG9wJyxcbiAgICAgICAgICAgICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLnBvc2l0aW9uKCkudG9wICsgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5oZWlnaHQoKSAtIHRoaXMuJGhhbmRsZXJzLmhlaWdodCgpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5hZGRDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ha2VJdE1vdmUoKVxuICAgIHtcbiAgICAgICAgdGhpcy4kaGFuZGxlcnMgPSAkKGBcbjxkaXYgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzXCI+XG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX2NvbmZpZ3VyZVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNvZ1wiPjwvaT5cbiAgICA8L2E+XG4gICAgPHNwYW4gY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19ibG9jay1uYW1lXCI+QmxvY2sgbmFtZSBoZXJlPC9zcGFuPlxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLXVwXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtdXBcIj48L2k+XG4gICAgPC9hPlxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLWRvd25cIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3duXCI+PC9pPlxuICAgIDwvYT5cbiAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fY2xvbmVcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9uZVwiPjwvaT5cbiAgICA8L2E+XG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX3JlbW92ZVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPlxuICAgIDwvYT5cbjwvZGl2PmApO1xuICAgICAgICAkKCdib2R5JykuYXBwZW5kKHRoaXMuJGhhbmRsZXJzKTtcbiAgICAgICAgdGhpcy4kaGFuZGxlcnMuaGlkZSgpO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgJCh0aGlzLnNldHRpbmdzWydtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InXSkub24oe1xuICAgICAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24gaG92ZXJJbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ20tbW9uc3Rlci1jb250ZW50X19tYXRlcmlhbC0taGlnaGxpZ2h0ZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZWxlYXZlOiBmdW5jdGlvbiBob3Zlck91dCgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ20tbW9uc3Rlci1jb250ZW50X19tYXRlcmlhbC0taGlnaGxpZ2h0ZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdE1hdGVyaWFsKCR0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICAgICB0aGF0LiRoYW5kbGVycy5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtdXAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICAgICAgICAgICAgdmFyICRwcmV2ID0gdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5wcmV2KCdbZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICAgICAgICAgICAgICBpZiAoJHByZXYubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5pbnNlcnRCZWZvcmUoJHByZXYpO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KS5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtZG93bicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgJG5leHQgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLm5leHQoJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICAgICAgICAgICAgIGlmICgkbmV4dC5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLmluc2VydEFmdGVyKCRuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGVIYW5kbGVycygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSkub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19jbG9uZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGNsb25lZE1hdGVyaWFsID0gdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5jbG9uZSgpO1xuICAgICAgICAgICAgICAgICRjbG9uZWRNYXRlcmlhbC5kYXRhKCdtYXRlcmlhbC1pbmRleCcsIHRoYXQuZ2V0TmV3TWF0ZXJpYWxJbmRleCgpKS5pbnNlcnRBZnRlcih0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdE1hdGVyaWFsKCRjbG9uZWRNYXRlcmlhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pLm9uKCdjbGljaycsICcubW9uc3Rlci1ibG9jay1oYW5kbGVyc19fcmVtb3ZlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgbWF0ZXJpYWw/JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGhhbmRsZXJzLmhpZGUoKTsgLy8gaXQgZG9lcyBub3Qgd29yay4gd2h5PyBOZWVkIHRvIGZpeCFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbGVjdE1hdGVyaWFsKCRtYXRlcmlhbClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsID09PSAkbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgICAgICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5yZW1vdmVDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsID0gJG1hdGVyaWFsO1xuICAgICAgICB0aGlzLnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgIHRoaXMuJGhhbmRsZXJzLnNob3coKTtcbiAgICB9XG5cbiAgICBzZXJpYWxpemVDb250ZW50KGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBmb3IgKGNvbnN0IHVuaXF1ZUNvbnRlbnRJZCBpbiB0aGlzLiRtb25zdGVyQ29udGVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuJG1vbnN0ZXJDb250ZW50Lmhhc093blByb3BlcnR5KHVuaXF1ZUNvbnRlbnRJZCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkbW9uc3RlciA9IHRoaXMuJG1vbnN0ZXJDb250ZW50W3VuaXF1ZUNvbnRlbnRJZF07XG4gICAgICAgICAgICAgICAgcmVzdWx0WyRtb25zdGVyLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpXSA9IHRoYXQuc2VyaWFsaXplVW5pcXVlQ29udGVudCgkbW9uc3Rlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZW5kVG9CdWlsZGVyKGNhbGxiYWNrLCBbcmVzdWx0XSk7XG4gICAgfVxuXG4gICAgc2VyaWFsaXplVW5pcXVlQ29udGVudCgkbW9uc3RlckNvbnRlbnQpXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgcmVzdWx0LnVuaXF1ZUNvbnRlbnRJZCA9ICRtb25zdGVyQ29udGVudC5kYXRhKCd1bmlxdWVDb250ZW50SWQnKTtcbiAgICAgICAgcmVzdWx0Lm1hdGVyaWFscyA9IHt9O1xuICAgICAgICAkbW9uc3RlckNvbnRlbnQuZmluZCgnW2RhdGEtaXMtbWF0ZXJpYWw9XFwnMVxcJ10nKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHt9O1xuICAgICAgICAgICAgbWF0ZXJpYWwuYmxvY2sgPSAkKHRoaXMpLmRhdGEoJ21hdGVyaWFsQmxvY2snKTtcbiAgICAgICAgICAgIHJlc3VsdC5tYXRlcmlhbHNbJCh0aGlzKS5kYXRhKCdtYXRlcmlhbEluZGV4JyldID0gbWF0ZXJpYWw7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgVmlzdWFsRnJhbWUgc2V0dGluZ3MuXG4gICAgICogVXNlcyBWaXN1YWxGcmFtZVNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAgICovXG4gICAgcGFyYW1zKClcbiAgICB7XG4gICAgICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5WaXN1YWxGcmFtZVNldHRpbmdzIHx8IHt9O1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICAgICAgICdtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InOiAnLm0tbW9uc3Rlci1jb250ZW50X19jb250ZW50J1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB1c2VyU2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGlmICh1c2VyU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgfVxuXG4gICAgc2VuZFRvQnVpbGRlcihmdW5jLCBhcmdzKVxuICAgIHtcbiAgICAgICAgRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5wYXJlbnRXaW5kb3csIGZ1bmMsIGFyZ3MpO1xuICAgIH1cblxuICAgIG5ld0Jsb2NrKGJsb2NrTmFtZSwgbmV3QmxvY2tVcmwpXG4gICAge1xuICAgICAgLypcbiAgICAgIEB0b2RvXG5cbiAgICAgICAg0J/QtdGA0LXQv9C40YHQsNGC0YwuINCSINCx0LjQu9C00LXRgNC1INGDINC90LDRgSDRgtCw0LrQttC1INCx0YPQtNC10YIg0L3QsNGB0YLRgNC+0LnQutCwINC00LDRgtCwINGE0LvQvtGDINC4INCy0YHRkSDRjdGC0L4g0L3Rg9C20L3QviDQv9C10YDQtdC00LDQstCw0YLRjCDQsiDRgtC10LrRg9GJ0LjQuSDRjdC60YjQtdC9XG4gICAgICAgINGC0LDQvCDQvdCw0YEg0LHRg9C00LXRgiDRgdC70YPRiNCw0YLRjCDRgdC/0LXRhtC40LDQu9GM0L3Ri9C5INC/0L7QtC3RjdC60YjQtdC9LCDQutC+0YLQvtGA0YvQuSDQsdGD0LTQtdGCINC/0LXRgNC10L/QuNGB0YvQstCw0YLRjCDQvdGD0LbQvdGD0Y4g0L3QsNC8INC40L3RhNGDINGC0LjQv9CwINC80LDRgtC10YDQuNCw0LvQvtCyXG4gICAgICAgINC4INC/0YDQvtCy0LDQudC00LXRgNC+0LLRgdC60LjRhSDQutC+0L3RhNC40LPQvtCyLlxuICAgICAgICDQotCw0LrQuNC8INC+0LHRgNCw0LfQvtC8LCDQvdCw0Lwg0L3QtSDQvdGD0LbQvdC+INCx0YPQtNC10YIg0LTQtdC70LDRgtGMINC90LjQutCw0LrQvtCz0L4g0L/QtdGA0LzQsNC80LXQvdGC0L3QvtCz0L4g0YHRgtC+0YDQsNC00LbQsC5cbiAgICAgICAg0KLQsNC60LbQtSDQvdGD0LbQvdC+INC/0YDQtdC00YPRgdC80L7RgtGA0LXRgtGMINCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0L7RgtC00LDQstCw0YLRjCDRgtC+0LvRjNC60L4g0L3Rg9C20L3Ri9C5INC80LDRgtC10YDQuNCw0LssINC40LzQuNGC0LjRgNGD0Y8g0YHRgNC10LTRgyDQtdCz0L4g0YDQtdCz0LjQvtC90LAg0Lgg0L/RgC5cblxuICAgICAgICDQmtC70Y7RhyBtYXRlcmlhbEluZGV4INC90YPQttC90L4g0L/QvtC70YPRh9Cw0YLRjCDQuNC3INC60L7QvdGC0YDQvtC70LvQtdGA0LAuXG4gICAgICAgINCSINC60L7QvdGC0YDQvtC70LvQtdGA0LUg0LHRg9C00LXRgiDQs9C10L3QtdGA0LjRgNC+0LLQsNGC0YzRgdGPINGH0LXRgNC10LcgdW5pcWlkLCDQv9GA0Lgg0Y3RgtC+0LwsINC/0L7RgdC70LUg0L7RgtC00LDRh9C4INC80LDRgtC10YDQuNCw0LvQsCAtXG4gICAgICAgIHBocC10ZW1wbGF0ZSBmaWxlINC90YPQttC90L4g0LHRg9C00LXRgiDRg9C00LDQu9C40YLRjCwg0LAg0YLQviDQvdCw0L/Qu9C+0LTQuNGC0YHRjyDRgtGM0LzQsCDQstGB0Y/QutC+0LPQviDQtNC10YDRjNC80LAg0LIg0YLQtdC80LzQv9C70LXQudGC0LDRhS5cblxuICAgICAgICDQn9GA0Lgg0YHQvtGF0YDQsNC90LXQvdC40Lgg0LzRiyDQv9C+INGB0YPRgtC4INC/0LXRgNC10L/QuNGB0YvQstCw0LXQvCDRgyBtYWluZW50aXR5INC4IHRlbXBsYXRlcmVnaW9uINC90LDRiNC4IG1hdGVyaWFscyArIHByb3ZpZGVycyDRgtC10LwsXG4gICAgICAgINGH0YLQviDQv9GA0LjRiNC70L4g0LjQtyDQsdC40LvQtNC10YDQsC5cbiAgICAgICAqL1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJyMnLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbW9uc3RlckFjdGlvbjogJ25ldy1ibG9jaycsXG4gICAgICAgICAgICAgICAgYmxvY2s6IGJsb2NrTmFtZSxcbiAgICAgICAgICAgICAgICBlZGl0TW9kZURhdGE6IHdpbmRvdy5NT05TVEVSX0VESVRfTU9ERV9EQVRBXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gb2soZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgJGVsZW1lbnQgPSAkKGRhdGEpO1xuICAgICAgICAgICAgdGhhdC4kbW9uc3RlckNvbnRlbnRbdGhhdC5jdXJyZW50TW9uc3RlckNvbnRlbnRdLmFwcGVuZCgkZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAgICAgICAgIC8qIGdsb2JhbCBzbW9vdGhTY3JvbGw6ZmFsc2UgKi9cbiAgICAgICAgICAgIHNtb290aFNjcm9sbC5hbmltYXRlU2Nyb2xsKCRlbGVtZW50WzBdLm9mZnNldFRvcCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsRnJhbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL1Zpc3VhbEZyYW1lLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9