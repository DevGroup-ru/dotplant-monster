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
	
	__webpack_require__(29);
	
	var _FrontendMonster = __webpack_require__(9);
	
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
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _VisualBuilder = __webpack_require__(13);
	
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _all = __webpack_require__(15);
	
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
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Material = __webpack_require__(11);
	
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
	  }, {
	    key: 'materialsDecl',
	    value: function materialsDecl() {
	      var result = {};
	      for (var materialKey in this.materials) {
	        if (this.materials.hasOwnProperty(materialKey)) {
	          result[materialKey] = {
	            'material': this.materials[materialKey].materialPath
	          };
	        }
	      }
	      return result;
	    }
	  }]);
	
	  return Region;
	}();
	
	exports.default = Region;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _SiteStructureEnvironment = __webpack_require__(23);
	
	var _SiteStructureEnvironment2 = _interopRequireDefault(_SiteStructureEnvironment);
	
	var _MaterialsEnvironment = __webpack_require__(21);
	
	var _MaterialsEnvironment2 = _interopRequireDefault(_MaterialsEnvironment);
	
	var _CustomizationEnvironment = __webpack_require__(20);
	
	var _CustomizationEnvironment2 = _interopRequireDefault(_CustomizationEnvironment);
	
	var _ActionEnvironment = __webpack_require__(19);
	
	var _ActionEnvironment2 = _interopRequireDefault(_ActionEnvironment);
	
	var _PageStructureEnvironment = __webpack_require__(22);
	
	var _PageStructureEnvironment2 = _interopRequireDefault(_PageStructureEnvironment);
	
	var _FrameApi = __webpack_require__(2);
	
	var _FrameApi2 = _interopRequireDefault(_FrameApi);
	
	var _Editable = __webpack_require__(10);
	
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
	
	      // we have result which is content in format:
	      // region
	      // --- material id
	      // ------- keys => values
	      //
	      // our Providers should get only those keys that they provide
	      // provided keys are stored in frameContentWindow.MONSTER_EDIT_MODE_DATA.template.providedKeys
	      var resultByProviders = {};
	      var providedKeys = this.frameContentWindow.MONSTER_EDIT_MODE_DATA.template.providedKeys;
	
	      for (var providerIndex in providedKeys) {
	        if (providedKeys.hasOwnProperty(providerIndex) === false) {
	          continue;
	        }
	        resultByProviders[providerIndex] = {};
	        var regions = providedKeys[providerIndex];
	        for (var regionKey in regions) {
	          if (regions.hasOwnProperty(regionKey) === false) {
	            continue;
	          }
	          if (result.hasOwnProperty(regionKey) === false) {
	            continue;
	          }
	          resultByProviders[providerIndex][regionKey] = {};
	          // go deep to material indeces
	          var materials = regions[regionKey];
	          for (var materialIndex in materials) {
	            if (materials.hasOwnProperty(materialIndex) === false) {
	              continue;
	            }
	            if (result[regionKey].hasOwnProperty(materialIndex) === false) {
	              continue;
	            }
	            resultByProviders[providerIndex][regionKey][materialIndex] = {};
	            var dataKeys = materials[materialIndex];
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	              for (var _iterator = dataKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var key = _step.value;
	
	                if (result[regionKey][materialIndex].hasOwnProperty(key) === false) {
	                  continue;
	                }
	                resultByProviders[providerIndex][regionKey][materialIndex][key] = result[regionKey][materialIndex][key];
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
	      return resultByProviders;
	    }
	  }, {
	    key: 'pageChanged',
	    value: function pageChanged() {
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = this.environments[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var environment = _step2.value;
	
	          environment[1].pageChanged();
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
	  }, {
	    key: 'log',
	    value: function log(result) {
	      console.log(result);
	    }
	  }, {
	    key: 'controls',
	    value: function controls() {
	      this.$controls = this.$builder.find('.controls');
	      var builder = this;
	      this.$controls.find('.controls__refresh').click(function handler() {
	        builder.frameContentWindow.location.reload();
	        return false;
	      });
	      this.$controls.find('.controls__save').click(function handler() {
	
	        $.ajax({
	          url: builder.frameContentWindow.location,
	          method: 'POST',
	          cache: false,
	          contentType: 'application/json; charset=utf-8',
	          dataType: 'json',
	          data: JSON.stringify({
	            template: {
	              providersEntities: builder.serialize(),
	              regionsMaterials: builder.environments.get('page-structure').materialsByRegions()
	            },
	            action: 'save'
	          }),
	          success: function ok(data, textStatus, jqXHR) {
	            console.log(data);
	          },
	          error: function err(data, textStatus, errorThrown) {
	            console.log(data);
	          }
	        });
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
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = wysiwyg;
	function wysiwyg($node) {
	  return $node.html();
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = all;
	
	var _WYSIWYG = __webpack_require__(14);
	
	var _WYSIWYG2 = _interopRequireDefault(_WYSIWYG);
	
	var _image = __webpack_require__(16);
	
	var _image2 = _interopRequireDefault(_image);
	
	var _link = __webpack_require__(17);
	
	var _link2 = _interopRequireDefault(_link);
	
	var _string = __webpack_require__(18);
	
	var _string2 = _interopRequireDefault(_string);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function all() {
	  if (typeof window.MONSTER_EDITABLES === 'undefined') {
	    window.MONSTER_EDITABLES = {};
	  }
	  window.MONSTER_EDITABLES['wysiwyg'] = _WYSIWYG2.default;
	  window.MONSTER_EDITABLES['link'] = _link2.default;
	  window.MONSTER_EDITABLES['image'] = _image2.default;
	  window.MONSTER_EDITABLES['string'] = _string2.default;
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = image;
	function image($node) {
	  var $img = $node.find('img').first();
	  return {
	    src: $img.attr('src'),
	    alt: $img.attr('alt')
	  };
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = link;
	function link($node) {
	  return {
	    src: $node.attr('href'),
	    anchor: $node.html()
	  };
	}

/***/ },
/* 18 */
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
	
	          var $bundleTitle = '\n      <li class="materials-groups__item materials-groups__item--bundle-label">\n        <a href="#" class="materials-groups__switch-bundle" data-bundle-path=""' + bundle.fullPath + '>\n            ' + i18nBundleName + '\n        </a>\n      </li>\n      ';
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
	
	      $('.materials-groups__switch-group').removeClass('materials-groups__switch-group--active');
	    }
	  }]);
	
	  return MaterialsEnvironment;
	}(_BaseEnvironment3.default);
	
	exports.default = MaterialsEnvironment;

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
	
	var _Region = __webpack_require__(12);
	
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
	  }, {
	    key: 'materialsByRegions',
	    value: function materialsByRegions() {
	      var result = {};
	      for (var regionKey in this.regionsStructure) {
	        if (this.regionsStructure.hasOwnProperty(regionKey)) {
	          var region = this.regionsStructure[regionKey];
	          result[region.key] = region.materialsDecl();
	        }
	      }
	      return result;
	    }
	  }]);
	
	  return PageStructureEnvironment;
	}(_BaseEnvironment3.default);
	
	exports.default = PageStructureEnvironment;

/***/ },
/* 23 */
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
/* 24 */
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
	
	var _FrameApi = __webpack_require__(2);
	
	var _FrameApi2 = _interopRequireDefault(_FrameApi);
	
	var _uniqid = __webpack_require__(24);
	
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
	        value: function newBlock(materialName, regionName) {
	            // @todo Add loader here as we are using form post !
	            var that = this;
	            var randomIndex = (0, _uniqid2.default)('mat');
	            var newData = {
	                template: {
	                    providersEntities: this.parentBuilder.serialize(),
	                    regionsMaterials: this.parentBuilder.environments.get('page-structure').materialsByRegions()
	                },
	                action: 'render-material',
	                materialId: randomIndex,
	                materialRegion: regionName,
	                material: materialName
	            };
	            if (newData.template.regionsMaterials.hasOwnProperty(regionName) === false) {
	                newData.template.regionsMaterials[regionName] = {};
	            }
	
	            newData.template.regionsMaterials[regionName][randomIndex] = { material: materialName };
	            var $form = $('<form method="POST"></form>');
	            var $input = $('<input type="hidden" name="__json">');
	            var $csrf = $('<input type="hidden">');
	
	            $csrf.attr('name', $('meta[name=csrf-param]').attr('content')).val($('meta[name=csrf-token]').attr('content')).appendTo($form);
	
	            $input.val(JSON.stringify(newData)).appendTo($form);
	
	            $form[0].submit();
	
	            return false;
	            // $.ajax({
	            //     url: window.location,
	            //     method: 'POST',
	            //     cache: false,
	            //     contentType: 'application/json; charset=utf-8',
	            //     dataType: 'json',
	            //     data: JSON.stringify(newData),
	            // }).done(function ok(data) {
	            //     const $element = $(data);
	            //     that.$monsterContent[that.currentMonsterContent].append($element);
	            //     this.parentBuilder.pageChanged();
	            //     /* global smoothScroll:false */
	            //     smoothScroll.animateScroll($element[0].offsetTop);
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
	    }]);
	
	    return VisualFrame;
	}();
	
	exports.default = VisualFrame;

/***/ },
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDg3NWI4M2Q5NmRiYjY4MDdjMDciLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvRnJvbnRlbmRNb25zdGVyLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9FZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZUNvbXBvbmVudHMvTWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1BhZ2VTdHJ1Y3R1cmVDb21wb25lbnRzL1JlZ2lvbi5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL1dZU0lXWUcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVB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Q0FBRixDQUFmO0FBQ0EsaUJBQU0sUUFBUSxFQUFFLHVCQUFGLENBQWQ7O0FBRUEsbUJBQ0csSUFESCxDQUNRLE1BRFIsRUFDZ0IsRUFBRSx1QkFBRixFQUEyQixJQUEzQixDQUFnQyxTQUFoQyxDQURoQixFQUVHLEdBRkgsQ0FFTyxFQUFFLHVCQUFGLEVBQTJCLElBQTNCLENBQWdDLFNBQWhDLENBRlAsRUFHRyxRQUhILENBR1ksS0FIWjs7QUFLQSxvQkFDRyxHQURILENBQ08sS0FBSyxTQUFMLENBQWUsT0FBZixDQURQLEVBRUcsUUFGSCxDQUVZLEtBRlo7O0FBSUEsbUJBQU0sQ0FBTixFQUFTLE1BQVQ7O0FBRUEsb0JBQU8sS0FBUDs7Ozs7Ozs7Ozs7Ozs7O0FBZUg7Ozs2QkExT0Q7QUFDSSxpQkFBSSxLQUFLLG9CQUFULEVBQStCO0FBQzNCLHdCQUFPLEtBQUssb0JBQVo7QUFDSDtBQUNELGtCQUFLLDBCQUFMO0FBQ0Esb0JBQU8sS0FBSyxvQkFBWjtBQUNIOzs7Ozs7bUJBdU9VLFc7Ozs7Ozs7O0FDMVFmLDBDIiwiZmlsZSI6InZpc3VhbC1idWlsZGVyL3NjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDA4NzViODNkOTZkYmI2ODA3YzA3XG4gKiovIiwiaW1wb3J0ICcuL2J1bmRsZS5jc3MnO1xuXG5pbXBvcnQgRnJvbnRlbmRNb25zdGVyIGZyb20gJy4vRnJvbnRlbmRNb25zdGVyJztcblxud2luZG93LkZyb250ZW5kTW9uc3RlciA9IG5ldyBGcm9udGVuZE1vbnN0ZXIoKTtcbi8vXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9idW5kbGUuanNcbiAqKi8iLCJpbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi8uLi92aXN1YWwtZnJhbWUvRnJhbWVBcGknO1xuXG5jbGFzcyBCYXNlRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2aXN1YWxCdWlsZGVyLCBuYW1lKSB7XG4gICAgdGhpcy52aXN1YWxCdWlsZGVyID0gdmlzdWFsQnVpbGRlcjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFyZ2V0ID0gJCh0aGlzLnZpc3VhbEJ1aWxkZXIuc2V0dGluZ3NbJ2ZyYW1lLXNlbGVjdG9yJ10pWzBdLmNvbnRlbnRXaW5kb3c7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICAvLyBkZWFjdGl2YXRlIGN1cnJlbnQgc2VsZWN0ZWQgZW52aXJvbm1lbnRcbiAgICBpZiAodGhpcy5uYW1lID09PSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3VycmVudEVudmlyb25tZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnZpc3VhbEJ1aWxkZXIuY3VycmVudEVudmlyb25tZW50KSB7XG4gICAgICB0aGlzLnZpc3VhbEJ1aWxkZXIuZW52aXJvbm1lbnRzLmdldCh0aGlzLnZpc3VhbEJ1aWxkZXIuY3VycmVudEVudmlyb25tZW50KS5kZWFjdGl2YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIuY2xlYXJTdGFja2FibGUoKTtcbiAgfVxuXG4gIHNlbmRNZXNzYWdlKGZ1bmMsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy50YXJnZXQsIGZ1bmMsIGFyZ3MpO1xuICB9XG4gIFxuICBwYWdlQ2hhbmdlZCgpIHtcbiAgICBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlRW52aXJvbm1lbnQ7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL0Jhc2VFbnZpcm9ubWVudC5qc1xuICoqLyIsImNsYXNzIEZyYW1lQXBpIHtcbiAgc3RhdGljIGdldCBpc0llKCkge1xuICAgIC8qIGdsb2JhbCBpcyAqL1xuICAgIGlmICh0eXBlb2YoaXMpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGlzLmllKCk7Ly8gfHwgaXMuZWRnZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGljIGJpbmRNZXNzYWdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrSGFuZGxlcihldmVudCkge1xuICAgICAgbGV0IG1lc3NhZ2UgPSBudWxsO1xuICAgICAgaWYgKEZyYW1lQXBpLmlzSWUpIHtcbiAgICAgICAgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXNzYWdlID0gZXZlbnQuZGF0YTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxpc3RlbmVyW21lc3NhZ2UuZnVuY10pIHtcbiAgICAgICAgbGlzdGVuZXJbbWVzc2FnZS5mdW5jXS5hcHBseShsaXN0ZW5lciwgbWVzc2FnZS5hcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSUU4XG4gICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29ubWVzc2FnZScsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgc2VuZE1lc3NhZ2UodGFyZ2V0LCBmdW5jLCBhcmdzKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICdmdW5jJzogZnVuYyxcbiAgICAgICdhcmdzJzogYXJncyxcbiAgICB9O1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBGcmFtZUFwaS5pc0llID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiBkYXRhO1xuXG4gICAgdGFyZ2V0LnBvc3RNZXNzYWdlKG1lc3NhZ2UsICcqJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJhbWVBcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0ZyYW1lQXBpLmpzXG4gKiovIiwiaW1wb3J0IFZpc3VhbEJ1aWxkZXIgZnJvbSAnLi9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlcic7XG5pbXBvcnQgVmlzdWFsRnJhbWUgZnJvbSAnLi9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZSc7XG5pbXBvcnQgSGFzaEFwaSBmcm9tICcuL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGknO1xuXG5jbGFzcyBGcm9udGVuZE1vbnN0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtcygpO1xuICAgIHRoaXMudmlzdWFsQnVsZGVyID0gbnVsbDtcbiAgICB0aGlzLmhhc2hBcGkgPSBuZXcgSGFzaEFwaSgpO1xuICAgIGlmICh3aW5kb3cucGFyZW50ICE9PSB3aW5kb3cgJiYgd2luZG93LnBhcmVudC5Gcm9udGVuZE1vbnN0ZXIpIHtcbiAgICAgIGlmICh3aW5kb3cucGFyZW50LkZyb250ZW5kTW9uc3Rlci5oYXNCdWlsZGVyKSB7XG4gICAgICAgIHRoaXMuVmlzdWFsRnJhbWUgPSBuZXcgVmlzdWFsRnJhbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqIGdsb2JhbHM6IHNtb290aFNjcm9sbCovXG4gICAgaWYgKHR5cGVvZihzbW9vdGhTY3JvbGwpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc21vb3RoU2Nyb2xsLmluaXQoKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIFZpc3VhbEJ1aWxkZXIgY2xhc3MgaW5zdGFuY2VcbiAgICogQHJldHVybnMgVmlzdWFsQnVpbGRlclxuICAgKi9cbiAgZ2V0IGJ1aWxkZXIoKSB7XG4gICAgaWYgKHRoaXMudmlzdWFsQnVsZGVyID09PSBudWxsKSB7XG4gICAgICB0aGlzLnZpc3VhbEJ1bGRlciA9IG5ldyBWaXN1YWxCdWlsZGVyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZpc3VhbEJ1bGRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB0aGlzIEZyb250ZW5kTW9uc3RlciBpbnN0YW5jZSBoYXMgVmlzdWFsIEJ1aWxkZXIgb24gcGFnZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBoYXNCdWlsZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkZXIuJGJ1aWxkZXIubGVuZ3RoID09PSAxO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgRnJvbnRlbmRNb25zdGVyIHNldHRpbmdzLlxuICAgKiBVc2VzIEZyb250ZW5kTW9uc3RlclNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAqL1xuICBwYXJhbXMoKSB7XG4gICAgY29uc3QgdXNlclNldHRpbmdzID0gd2luZG93LkZyb250ZW5kTW9uc3RlclNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdXNlclNldHRpbmdzKSB7XG4gICAgICBpZiAodXNlclNldHRpbmdzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJvbnRlbmRNb25zdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9Gcm9udGVuZE1vbnN0ZXIuanNcbiAqKi8iLCJpbXBvcnQgQWxsRWRpdGFibGVzIGZyb20gJy4vZWRpdGFibGVzL2FsbCc7XG5cbmNsYXNzIEVkaXRhYmxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lZGl0YWJsZXNCeVR5cGUgPSB7fTtcbiAgICAvLyBpbml0aWFsaXplIGJhc2UgYnVpbGQtaW4gZWRpdGFibGVzXG4gICAgQWxsRWRpdGFibGVzKCk7XG4gICAgdGhpcy5lZGl0YWJsZXNCeVR5cGUgPSB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVM7XG4gIH1cblxuICBzZXJpYWxpemVFZGl0YWJsZSgkbm9kZSkge1xuICAgIGxldCBiZW1EYXRhID0gJG5vZGUuZGF0YSgnYmVtJyk7XG4gICAgY29uc3QgYmVtRW50aXR5ID0gJG5vZGUuZGF0YSgnYmVtTWF0Y2gnKTtcbiAgICBpZiAoYmVtRGF0YS5oYXNPd25Qcm9wZXJ0eShiZW1FbnRpdHkpKSB7XG4gICAgICBiZW1EYXRhID0gYmVtRGF0YVtiZW1FbnRpdHldO1xuICAgIH0gZWxzZSB7XG4gICAgICBiZW1EYXRhID0ge307XG4gICAgfVxuICAgIGlmIChiZW1EYXRhLmhhc093blByb3BlcnR5KCdlZGl0YWJsZScpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGVkaXRhYmxlID0gYmVtRGF0YS5lZGl0YWJsZTtcbiAgICBsZXQgdHlwZSA9IGVkaXRhYmxlLmhhc093blByb3BlcnR5KCd0eXBlJykgPyBlZGl0YWJsZS50eXBlIDogJ3N0cmluZyc7XG4gICAgaWYgKHRoaXMuZWRpdGFibGVzQnlUeXBlLmhhc093blByb3BlcnR5KHR5cGUpID09PSBmYWxzZSkge1xuICAgICAgdHlwZSA9ICdzdHJpbmcnO1xuICAgIH1cblxuICAgIGNvbnN0IGV4cG9ydFZhcmlhYmxlID0gZWRpdGFibGUuaGFzT3duUHJvcGVydHkoJ3RhcmdldCcpID8gZWRpdGFibGUudGFyZ2V0IDogJ2RhdGEnO1xuXG4gICAgcmV0dXJuIHRoaXMuZWRpdGFibGVzQnlUeXBlW3R5cGVdKCRub2RlLCBleHBvcnRWYXJpYWJsZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdGFibGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvRWRpdGFibGUuanNcbiAqKi8iLCJjbGFzcyBNYXRlcmlhbCB7XG4gIGNvbnN0cnVjdG9yKCRub2RlKSB7XG4gICAgdGhpcy4kbm9kZSA9ICRub2RlO1xuICAgIHRoaXMubWF0ZXJpYWxQYXRoID0gdGhpcy4kbm9kZS5kYXRhKCdtYXRlcmlhbFBhdGgnKTtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLm1hdGVyaWFsUGF0aC5yZXBsYWNlKC8uKlxcLiguKikkLywgJyQxJyk7XG4gICAgLy8hQHRvZG8gQ0hBTkdFIFRISVNcbiAgICB0aGlzLmtleSA9IHRoaXMuJG5vZGUuZGF0YSgnbWF0ZXJpYWxJbmRleCcpO1xuICB9XG5cbiAgcHJvY2Vzc01hdGVyaWFsKCkge1xuICAgIGNvbnN0ICRsaSA9ICQoYDxsaSBjbGFzcz1cInBhZ2Utc3RydWN0dXJlX19tYXRlcmlhbFwiPiR7dGhpcy5uYW1lfTwvbGk+YCk7XG4gICAgcmV0dXJuICRsaTtcbiAgfVxuXG4gIHN0YXRpYyBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5Gcm9udGVuZE1vbnN0ZXIuYnVpbGRlci5lZGl0YWJsZS5zZXJpYWxpemVFZGl0YWJsZSgkbm9kZSk7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgLy8gbWF0ZXJpYWwgaGFzIGRhdGEtZWRpdGFibGUta2V5cyB3aXRoIHNjaGVtYVxuICAgIGNvbnN0IGVkaXRhYmxlS2V5cyA9IHRoaXMuJG5vZGUuZGF0YSgnZWRpdGFibGVLZXlzJyk7XG4gICAgY29uc3QgcmVjdXJzaXZlSXRlcmF0b3IgPSBmdW5jdGlvbiBpdGVyKGFyciwgcGF0aCwgJHNjb3BlKSB7XG4gICAgICBjb25zdCBmaW5hbCA9IHt9O1xuICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoYXJyKSkge1xuICAgICAgICBsZXQgZnVsbEtleVBhdGggPSBrZXk7XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgZnVsbEtleVBhdGggPSBgJHtwYXRofS4ke2tleX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YoYXJyW2tleV0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNvbnN0ICRpdGVtcyA9ICRzY29wZS5maW5kKGBbZGF0YS1yZWN1cnNpdmUtaXRlbT1cIiR7ZnVsbEtleVBhdGh9XCJdYCk7XG4gICAgICAgICAgZmluYWxba2V5XSA9IHt9O1xuICAgICAgICAgICRpdGVtcy5lYWNoKGZ1bmN0aW9uIGl0ZW1zUmVjKCkge1xuICAgICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgZmluYWxba2V5XVskdGhpcy5kYXRhKCdyZWN1cnNpdmVJdGVtS2V5JyldID0gcmVjdXJzaXZlSXRlcmF0b3IoXG4gICAgICAgICAgICAgIGFycltrZXldLFxuICAgICAgICAgICAgICAnaXRlbScsXG4gICAgICAgICAgICAgICR0aGlzXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0ICRub2RlID0gJHNjb3BlLmZpbmQoYFtkYXRhLWVkaXRhYmxlLWtleT1cIiR7ZnVsbEtleVBhdGh9XCJdYCk7XG4gICAgICAgICAgZmluYWxba2V5XSA9IE1hdGVyaWFsLnNlcmlhbGl6ZU5vZGUoJG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmluYWw7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCByZXN1bHQgPSByZWN1cnNpdmVJdGVyYXRvcihlZGl0YWJsZUtleXMsICcnLCB0aGlzLiRub2RlKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuLy8gICAgdGhpcy4kbm9kZS5maW5kKCcnKVxuICAgIFxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0ZXJpYWw7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZUNvbXBvbmVudHMvTWF0ZXJpYWwuanNcbiAqKi8iLCJpbXBvcnQgTWF0ZXJpYWwgZnJvbSAnLi9NYXRlcmlhbCc7XG5cbmNsYXNzIFJlZ2lvbiB7XG4gIGNvbnN0cnVjdG9yKCRub2RlKSB7XG4gICAgdGhpcy5tYXRlcmlhbHMgPSB7fTtcbiAgICB0aGlzLiRub2RlID0gJG5vZGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9ICRub2RlLmRhdGEoJ2NvbnRlbnREZXNjcmlwdGlvbicpO1xuICB9XG5cbiAgcHJvY2Vzc1JlZ2lvbigpIHtcbiAgICBjb25zdCAkcmVnaW9uTGkgPSAkKGA8bGkgY2xhc3M9XCJwYWdlLXN0cnVjdHVyZV9fcmVnaW9uXCI+JHt0aGlzLnJlZ2lvbkRlc2NyaXB0aW9ufTwvbGk+YCk7XG4gICAgdGhpcy5rZXkgPSB0aGlzLiRub2RlLmRhdGEoJ3JlZ2lvbktleScpO1xuICAgIHRoaXMuaWQgPSB0aGlzLiRub2RlLmRhdGEoJ3JlZ2lvbklkJyk7XG4gICAgY29uc3QgJHJlZ2lvblVsID0gJCgnPHVsIGNsYXNzPVwicGFnZS1zdHJ1Y3R1cmVfX3JlZ2lvbi1tYXRlcmlhbHNcIj48L3VsPicpO1xuXG4gICAgY29uc3QgJG1hdGVyaWFscyA9IHRoaXMuJG5vZGUuZmluZCgnW2RhdGEtaXMtbWF0ZXJpYWw9MV0nKTtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgICRtYXRlcmlhbHMuZWFjaChmdW5jdGlvbiBtYXRlcmlhbHNJdGVyYXRvcigpIHtcbiAgICAgIGNvbnN0ICRtYXRlcmlhbE5vZGUgPSAkKHRoaXMpO1xuICAgICAgY29uc3QgbWF0ZXJpYWxPYmplY3QgPSBuZXcgTWF0ZXJpYWwoJG1hdGVyaWFsTm9kZSk7XG4gICAgICBjb25zdCAkbGkgPSBtYXRlcmlhbE9iamVjdC5wcm9jZXNzTWF0ZXJpYWwoKTtcbiAgICAgIHRoYXQubWF0ZXJpYWxzW21hdGVyaWFsT2JqZWN0LmtleV0gPSBtYXRlcmlhbE9iamVjdDtcbiAgICAgICRyZWdpb25VbC5hcHBlbmQoJGxpKTtcbiAgICB9KTtcblxuICAgICRyZWdpb25MaS5hcHBlbmQoJHJlZ2lvblVsKTtcbiAgICByZXR1cm4gJHJlZ2lvbkxpO1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IG1hdGVyaWFscyA9IHRoaXMubWF0ZXJpYWxzO1xuICAgIE9iamVjdC5rZXlzKG1hdGVyaWFscykuZm9yRWFjaChmdW5jdGlvbiBpdGVyKG1hdGVyaWFsS2V5KSB7XG4gICAgICByZXN1bHRbbWF0ZXJpYWxLZXldID0gbWF0ZXJpYWxzW21hdGVyaWFsS2V5XS5zZXJpYWxpemUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgbWF0ZXJpYWxzRGVjbCgpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IG1hdGVyaWFsS2V5IGluIHRoaXMubWF0ZXJpYWxzKSB7XG4gICAgICBpZiAodGhpcy5tYXRlcmlhbHMuaGFzT3duUHJvcGVydHkobWF0ZXJpYWxLZXkpKSB7XG4gICAgICAgIHJlc3VsdFttYXRlcmlhbEtleV0gPSB7XG4gICAgICAgICAgJ21hdGVyaWFsJzogdGhpcy5tYXRlcmlhbHNbbWF0ZXJpYWxLZXldLm1hdGVyaWFsUGF0aCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpb247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9QYWdlU3RydWN0dXJlQ29tcG9uZW50cy9SZWdpb24uanNcbiAqKi8iLCJpbXBvcnQgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL1NpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCc7XG5pbXBvcnQgTWF0ZXJpYWxzRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvTWF0ZXJpYWxzRW52aXJvbm1lbnQnO1xuaW1wb3J0IEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9DdXN0b21pemF0aW9uRW52aXJvbm1lbnQnO1xuaW1wb3J0IEFjdGlvbkVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL0FjdGlvbkVudmlyb25tZW50JztcbmltcG9ydCBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50JztcbmltcG9ydCBGcmFtZUFwaSBmcm9tICcuLy4uL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaSc7XG5pbXBvcnQgRWRpdGFibGUgZnJvbSAnLi9FZGl0YWJsZSc7XG5cbmNsYXNzIFZpc3VhbEJ1aWxkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtcygpO1xuICAgIHRoaXMucmVzb2x1dGlvblN3aXRjaGVyKCk7XG5cbiAgICB0aGlzLmVudmlyb25tZW50cyA9IG5ldyBNYXAoW1xuICAgICAgWydzaXRlLXN0cnVjdHVyZScsIG5ldyBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQodGhpcywgJ3NpdGUtc3RydWN0dXJlJyldLFxuICAgICAgWydwYWdlLXN0cnVjdHVyZScsIG5ldyBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQodGhpcywgJ3BhZ2Utc3RydWN0dXJlJyldLFxuICAgICAgWydtYXRlcmlhbHMnLCBuZXcgTWF0ZXJpYWxzRW52aXJvbm1lbnQodGhpcywgJ21hdGVyaWFscycpXSxcbiAgICAgIFsnY3VzdG9taXphdGlvbicsIG5ldyBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQodGhpcywgJ2N1c3RvbWl6YXRpb24nKV0sXG4gICAgICBbJ2FjdGlvbicsIG5ldyBBY3Rpb25FbnZpcm9ubWVudCh0aGlzLCAnYWN0aW9uJyldLFxuICAgIF0pO1xuXG4gICAgdGhpcy5lbnZpcm9ubWVudFNlbGVjdG9yKCk7XG5cbiAgICAvLyBzZWxlY3QgZmlyc3QgZW52aXJvbm1lbnQgYnkgZGVmYXVsdFxuICAgIHRoaXMuc3dpdGNoRW52aXJvbm1lbnQoJ3NpdGUtc3RydWN0dXJlJyk7XG4gICAgJCgnLm1vbnN0ZXItZW52aXJvbm1lbnQtc2VsZWN0b3JfX2Vudmlyb25tZW50LWxpbmsnKVxuICAgICAgLmZpcnN0KClcbiAgICAgIC5hZGRDbGFzcygnbW9uc3Rlci1lbnZpcm9ubWVudC1zZWxlY3Rvcl9fZW52aXJvbm1lbnQtbGluay0tYWN0aXZlJyk7XG4gICAgRnJhbWVBcGkuYmluZE1lc3NhZ2VMaXN0ZW5lcih0aGlzKTtcblxuICAgIHRoaXMuZWRpdGFibGUgPSBuZXcgRWRpdGFibGUoKTtcblxuICAgIHRoaXMuY29udHJvbHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIFZpc3VhbEJ1aWxkZXIgc2V0dGluZ3MuXG4gICAqIFVzZXMgVmlzdWFsQnVpbGRlclNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAqL1xuICBwYXJhbXMoKSB7XG4gICAgY29uc3QgdXNlclNldHRpbmdzID0gd2luZG93LlZpc3VhbEJ1aWxkZXJTZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICdlbGVtZW50LXNlbGVjdG9yJzogJy5tb25zdGVyLXZpc3VhbC1idWlsZGVyJyxcbiAgICAgICdmcmFtZS1zZWxlY3Rvcic6ICcubW9uc3Rlci12aXN1YWwtZnJhbWUnLFxuICAgICAgJ2J1bmRsZXMnOiB7fSxcbiAgICAgICdzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJzogJ21vbnN0ZXItc3RhY2thYmxlLWNvbnRhaW5lcicsXG4gICAgICAnbmV3LWJsb2NrLXVybCc6ICcvbW9uc3Rlci92aXN1YWwtYnVpbGRlci9uZXctYmxvY2snLFxuICAgIH07XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdXNlclNldHRpbmdzKSB7XG4gICAgICBpZiAodXNlclNldHRpbmdzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy4kYnVpbGRlciA9ICQodGhpcy5zZXR0aW5nc1snZWxlbWVudC1zZWxlY3RvciddKTtcbiAgICB0aGlzLiRzdGFja2FibGUgPSAkKCcuJyArIHRoaXMuc2V0dGluZ3NbJ3N0YWNrYWJsZS1jb250YWluZXItY2xhc3MnXSk7XG4gIH1cblxuICByZXNvbHV0aW9uU3dpdGNoZXIoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgYmVtRWxlbSA9ICdyZXNvbHV0aW9uLXN3aXRjaGVyX19yZXNvbHV0aW9uLWxpbmsnO1xuICAgIGNvbnN0IGFjdGl2ZU1vZGlmaWVyID0gYCR7YmVtRWxlbX0tLWFjdGl2ZWA7XG4gICAgY29uc3QgJHJlc29sdXRpb25MaW5rcyA9ICQoYC4ke2JlbUVsZW19YCk7XG4gICAgJHJlc29sdXRpb25MaW5rcy5jbGljayhmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICRyZXNvbHV0aW9uTGlua3MucmVtb3ZlQ2xhc3MoYWN0aXZlTW9kaWZpZXIpO1xuICAgICAgJCh0aGF0LnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKS53aWR0aCgkKHRoaXMpLmRhdGEoJ3Jlc29sdXRpb25XaWR0aCcpKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoYWN0aXZlTW9kaWZpZXIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgZW52aXJvbm1lbnRTZWxlY3RvcigpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBiZW1FbGVtID0gJ21vbnN0ZXItZW52aXJvbm1lbnQtc2VsZWN0b3JfX2Vudmlyb25tZW50LWxpbmsnO1xuICAgIGNvbnN0IGFjdGl2ZU1vZGlmaWVyID0gYCR7YmVtRWxlbX0tLWFjdGl2ZWA7XG4gICAgY29uc3QgJHNlY3Rpb25MaW5rcyA9ICQoYC4ke2JlbUVsZW19YCk7XG4gICAgJHNlY3Rpb25MaW5rcy5jbGljayhmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgIGNvbnN0IGVudmlyb25tZW50TmFtZSA9ICQodGhpcykuZGF0YSgnZW52aXJvbm1lbnROYW1lJyk7XG4gICAgICBpZiAodGhhdC5jdXJyZW50RW52aXJvbm1lbnQgPT09IGVudmlyb25tZW50TmFtZSkge1xuICAgICAgICAkc2VjdGlvbkxpbmtzLnJlbW92ZUNsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgICAgdGhhdC5lbnZpcm9ubWVudHMuZ2V0KGVudmlyb25tZW50TmFtZSkuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB0aGF0LmN1cnJlbnRFbnZpcm9ubWVudCA9IG51bGw7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgJHNlY3Rpb25MaW5rcy5yZW1vdmVDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICB0aGF0LnN3aXRjaEVudmlyb25tZW50KGVudmlyb25tZW50TmFtZSk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHN3aXRjaEVudmlyb25tZW50KGVudmlyb25tZW50TmFtZSkge1xuICAgIHRoaXMuZW52aXJvbm1lbnRzLmdldChlbnZpcm9ubWVudE5hbWUpLmFjdGl2YXRlKCk7XG4gICAgdGhpcy5jdXJyZW50RW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudE5hbWU7XG4gIH1cblxuICBjbGVhclN0YWNrYWJsZSgpIHtcbiAgICB0aGlzLiRzdGFja2FibGUuZW1wdHkoKTtcbiAgfVxuXG4gIGNyZWF0ZVN0YWNrYWJsZVBhbmUoKSB7XG4gICAgY29uc3QgcGFuZUNsYXNzID0gYCR7dGhpcy5zZXR0aW5nc1snc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyddfV9fcGFuZWA7XG4gICAgY29uc3QgbW9kaWZpZXIgPSB0aGlzLiRzdGFja2FibGUuZmluZCgnLicgKyBwYW5lQ2xhc3MpLmxlbmd0aCA9PT0gMCA/IGAke3BhbmVDbGFzc30tLWZpcnN0YCA6ICcnO1xuICAgIGNvbnN0ICRuZXdQYW5lID0gJChgPGRpdiBjbGFzcz1cIiR7cGFuZUNsYXNzfSAke21vZGlmaWVyfVwiPjwvZGl2PmApO1xuICAgIHRoaXMuJHN0YWNrYWJsZS5hcHBlbmQoJG5ld1BhbmUpO1xuICAgIHJldHVybiAkbmV3UGFuZTtcbiAgfVxuXG4gIG1hdGVyaWFsQnlOYW1lKG5hbWUpIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5tYXRlcmlhbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLm1hdGVyaWFsc1tuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXQgZnJhbWVDb250ZW50V2luZG93KCkge1xuICAgIHJldHVybiAkKHRoaXMuc2V0dGluZ3NbJ2ZyYW1lLXNlbGVjdG9yJ10pWzBdLmNvbnRlbnRXaW5kb3c7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgLy8gRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5mcmFtZUNvbnRlbnRXaW5kb3csICdzZXJpYWxpemVDb250ZW50JywgWydsb2cnXSk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5lbnZpcm9ubWVudHMuZ2V0KCdwYWdlLXN0cnVjdHVyZScpLnNlcmlhbGl6ZVBhZ2UoKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgLy8gd2UgaGF2ZSByZXN1bHQgd2hpY2ggaXMgY29udGVudCBpbiBmb3JtYXQ6XG4gICAgLy8gcmVnaW9uXG4gICAgLy8gLS0tIG1hdGVyaWFsIGlkXG4gICAgLy8gLS0tLS0tLSBrZXlzID0+IHZhbHVlc1xuICAgIC8vXG4gICAgLy8gb3VyIFByb3ZpZGVycyBzaG91bGQgZ2V0IG9ubHkgdGhvc2Uga2V5cyB0aGF0IHRoZXkgcHJvdmlkZVxuICAgIC8vIHByb3ZpZGVkIGtleXMgYXJlIHN0b3JlZCBpbiBmcmFtZUNvbnRlbnRXaW5kb3cuTU9OU1RFUl9FRElUX01PREVfREFUQS50ZW1wbGF0ZS5wcm92aWRlZEtleXNcbiAgICBjb25zdCByZXN1bHRCeVByb3ZpZGVycyA9IHt9O1xuICAgIGNvbnN0IHByb3ZpZGVkS2V5cyA9IHRoaXMuZnJhbWVDb250ZW50V2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEudGVtcGxhdGUucHJvdmlkZWRLZXlzO1xuXG4gICAgZm9yIChjb25zdCBwcm92aWRlckluZGV4IGluIHByb3ZpZGVkS2V5cykge1xuICAgICAgaWYgKHByb3ZpZGVkS2V5cy5oYXNPd25Qcm9wZXJ0eShwcm92aWRlckluZGV4KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHRCeVByb3ZpZGVyc1twcm92aWRlckluZGV4XSA9IHt9O1xuICAgICAgY29uc3QgcmVnaW9ucyA9IHByb3ZpZGVkS2V5c1twcm92aWRlckluZGV4XTtcbiAgICAgIGZvciAoY29uc3QgcmVnaW9uS2V5IGluIHJlZ2lvbnMpIHtcbiAgICAgICAgaWYgKHJlZ2lvbnMuaGFzT3duUHJvcGVydHkocmVnaW9uS2V5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0Lmhhc093blByb3BlcnR5KHJlZ2lvbktleSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF1bcmVnaW9uS2V5XSA9IHt9O1xuICAgICAgICAvLyBnbyBkZWVwIHRvIG1hdGVyaWFsIGluZGVjZXNcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gcmVnaW9uc1tyZWdpb25LZXldO1xuICAgICAgICBmb3IgKGNvbnN0IG1hdGVyaWFsSW5kZXggaW4gbWF0ZXJpYWxzKSB7XG4gICAgICAgICAgaWYgKG1hdGVyaWFscy5oYXNPd25Qcm9wZXJ0eShtYXRlcmlhbEluZGV4KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0W3JlZ2lvbktleV0uaGFzT3duUHJvcGVydHkobWF0ZXJpYWxJbmRleCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF1bcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XSA9IHt9O1xuICAgICAgICAgIGNvbnN0IGRhdGFLZXlzID0gbWF0ZXJpYWxzW21hdGVyaWFsSW5kZXhdO1xuICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGRhdGFLZXlzKSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0W3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF0uaGFzT3duUHJvcGVydHkoa2V5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1xuICAgICAgICAgICAgICBbcHJvdmlkZXJJbmRleF1cbiAgICAgICAgICAgICAgW3JlZ2lvbktleV1cbiAgICAgICAgICAgICAgW21hdGVyaWFsSW5kZXhdXG4gICAgICAgICAgICAgIFtrZXldID0gcmVzdWx0W3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF1ba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdEJ5UHJvdmlkZXJzO1xuICB9XG5cbiAgcGFnZUNoYW5nZWQoKSB7XG4gICAgZm9yIChjb25zdCBlbnZpcm9ubWVudCBvZiB0aGlzLmVudmlyb25tZW50cykge1xuICAgICAgZW52aXJvbm1lbnRbMV0ucGFnZUNoYW5nZWQoKTtcbiAgICB9XG4gIH1cblxuICBsb2cocmVzdWx0KSB7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgfVxuXG4gIGNvbnRyb2xzKCkge1xuICAgIHRoaXMuJGNvbnRyb2xzID0gdGhpcy4kYnVpbGRlci5maW5kKCcuY29udHJvbHMnKTtcbiAgICBjb25zdCBidWlsZGVyID0gdGhpcztcbiAgICB0aGlzLiRjb250cm9scy5maW5kKCcuY29udHJvbHNfX3JlZnJlc2gnKS5jbGljayhmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgYnVpbGRlci5mcmFtZUNvbnRlbnRXaW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgdGhpcy4kY29udHJvbHMuZmluZCgnLmNvbnRyb2xzX19zYXZlJykuY2xpY2soZnVuY3Rpb24gaGFuZGxlcigpIHtcblxuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBidWlsZGVyLmZyYW1lQ29udGVudFdpbmRvdy5sb2NhdGlvbixcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICBwcm92aWRlcnNFbnRpdGllczogYnVpbGRlci5zZXJpYWxpemUoKSxcbiAgICAgICAgICAgIHJlZ2lvbnNNYXRlcmlhbHM6IGJ1aWxkZXIuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKS5tYXRlcmlhbHNCeVJlZ2lvbnMoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFjdGlvbjogJ3NhdmUnLFxuICAgICAgICB9KSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gb2soZGF0YSwgdGV4dFN0YXR1cywganFYSFIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycihkYXRhLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaXN1YWxCdWlsZGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHd5c2l3eWcoJG5vZGUpIHtcbiAgcmV0dXJuICRub2RlLmh0bWwoKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9XWVNJV1lHLmpzXG4gKiovIiwiaW1wb3J0IFdZU0lXWUcgZnJvbSAnLi9XWVNJV1lHJztcbmltcG9ydCBpbWFnZSBmcm9tICcuL2ltYWdlJztcbmltcG9ydCBsaW5rIGZyb20gJy4vbGluayc7XG5pbXBvcnQgU3RyaW5nRWRpdGFibGUgZnJvbSAnLi9zdHJpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbGwoKSB7XG4gIGlmICh0eXBlb2Yod2luZG93Lk1PTlNURVJfRURJVEFCTEVTKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVMgPSB7fTtcbiAgfVxuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ3d5c2l3eWcnXSA9IFdZU0lXWUc7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snbGluayddID0gbGluaztcbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWydpbWFnZSddID0gaW1hZ2U7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snc3RyaW5nJ10gPSBTdHJpbmdFZGl0YWJsZTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lZGl0YWJsZXMvYWxsLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW1hZ2UoJG5vZGUpIHtcbiAgY29uc3QgJGltZyA9ICRub2RlLmZpbmQoJ2ltZycpLmZpcnN0KCk7XG4gIHJldHVybiB7XG4gICAgc3JjOiAkaW1nLmF0dHIoJ3NyYycpLFxuICAgIGFsdDogJGltZy5hdHRyKCdhbHQnKSxcbiAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9pbWFnZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpbmsoJG5vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBzcmM6ICRub2RlLmF0dHIoJ2hyZWYnKSxcbiAgICBhbmNob3I6ICRub2RlLmh0bWwoKSxcbiAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9saW5rLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oJG5vZGUpIHtcbiAgcmV0dXJuICRub2RlLnRleHQoKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL3N0cmluZy5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBBY3Rpb25FbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0FjdGlvbkVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9DdXN0b21pemF0aW9uRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgTWF0ZXJpYWxzRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2aXN1YWxCdWlsZGVyLCBuYW1lKSB7XG4gICAgc3VwZXIodmlzdWFsQnVpbGRlciwgbmFtZSk7XG4gICAgdGhpcy5pbml0TWF0ZXJpYWxzU2VsZWN0b3IoKTtcbiAgfVxuXG4gIGluaXRNYXRlcmlhbHNTZWxlY3RvcigpIHtcbiAgICB0aGlzLiRtYXRlcmlhbHNHcm91cHMgPSAkKGA8dWwgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzXCI+PC91bD5gKTtcbiAgICB0aGlzLiRtYXRlcmlhbHNMaXN0ID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGJ1bmRsZSBvZiB0aGlzLnZpc3VhbEJ1aWxkZXIuc2V0dGluZ3MuYnVuZGxlcykge1xuICAgICAgY29uc3QgaTE4bkJ1bmRsZU5hbWUgPSB0eXBlb2YocG9seWdsb3QpICE9PSAndW5kZWZpbmVkJyA/IHBvbHlnbG90LnQoYnVuZGxlLm5hbWUpIDogYnVuZGxlLm5hbWU7XG5cbiAgICAgIGxldCAkYnVuZGxlVGl0bGUgPSBgXG4gICAgICA8bGkgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19pdGVtIG1hdGVyaWFscy1ncm91cHNfX2l0ZW0tLWJ1bmRsZS1sYWJlbFwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWJ1bmRsZVwiIGRhdGEtYnVuZGxlLXBhdGg9XCJcIiR7YnVuZGxlLmZ1bGxQYXRofT5cbiAgICAgICAgICAgICR7aTE4bkJ1bmRsZU5hbWV9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICBgO1xuICAgICAgdGhpcy4kbWF0ZXJpYWxzTGlzdC5wdXNoKCRidW5kbGVUaXRsZSk7XG5cbiAgICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgYnVuZGxlLmdyb3Vwcykge1xuICAgICAgICBjb25zdCBncm91cE5hbWUgPSBncm91cC5uYW1lO1xuICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSBncm91cC5tYXRlcmlhbHM7XG4gICAgICAgIGNvbnN0IGkxOG5Hcm91cE5hbWUgPSB0eXBlb2YocG9seWdsb3QpICE9PSAndW5kZWZpbmVkJyA/IHBvbHlnbG90LnQoZ3JvdXBOYW1lKSA6IGdyb3VwTmFtZTtcbiAgICAgICAgY29uc3QgJGxpID0gJChgXG4gICAgPGxpIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19faXRlbVwiPlxuICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWdyb3VwLXBhdGg9XCIke2dyb3VwLmZ1bGxQYXRofVwiIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwXCI+XG4gICAgICAgICR7aTE4bkdyb3VwTmFtZX0gPHNwYW4gY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19jb3VudFwiPigke21hdGVyaWFscy5sZW5ndGh9KTwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICA8L2xpPmApO1xuICAgICAgICB0aGlzLiRtYXRlcmlhbHNHcm91cHMuYXBwZW5kKCRsaSk7XG4gICAgICAgIGNvbnN0ICRsaXN0ID0gJChgPHVsIGNsYXNzPVwibWF0ZXJpYWxzLWxpc3RcIiBkYXRhLWdyb3VwLXBhdGg9XCIke2dyb3VwLmZ1bGxQYXRofVwiPjwvdWw+YCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgICAgIGZvciAoY29uc3QgbWF0ZXJpYWwgb2YgbWF0ZXJpYWxzKSB7XG4gICAgICAgICAgY29uc3QgbWF0ZXJpYWxOYW1lID0gbWF0ZXJpYWwubmFtZTtcbiAgICAgICAgICBjb25zdCBpMThuTWF0ZXJpYWxOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCcgPyBwb2x5Z2xvdC50KG1hdGVyaWFsTmFtZSkgOiBtYXRlcmlhbE5hbWU7XG4gICAgICAgICAgY29uc3QgJGl0ZW0gPSAkKGBcbjxsaT5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1hdGVyaWFscy1saXN0X19pdGVtXCIgZGF0YS1tYXRlcmlhbC1wYXRoPVwiJHttYXRlcmlhbC5mdWxsUGF0aH1cIj4ke2kxOG5NYXRlcmlhbE5hbWV9PC9hPlxuPC9saT5cbmApO1xuICAgICAgICAgIGl0ZW1zLnB1c2goJGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgICRsaXN0LmFwcGVuZChpdGVtcyk7XG4gICAgICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QucHVzaCgkbGlzdCk7XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcsIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gJ21hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cC0tYWN0aXZlJztcbiAgICAgICR0aGlzLnRvZ2dsZUNsYXNzKGFjdGl2ZUNsYXNzKTtcbiAgICAgIGNvbnN0IGdyb3VwUGF0aCA9ICR0aGlzLmRhdGEoJ2dyb3VwUGF0aCcpO1xuICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKGFjdGl2ZUNsYXNzKSkge1xuICAgICAgICAkKCcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJykucmVtb3ZlQ2xhc3MoYWN0aXZlQ2xhc3MpO1xuICAgICAgICBjb25zdCBtYXRlcmlhbHNMaXN0QWN0aXZlQ2xhc3MgPSAnbWF0ZXJpYWxzLWxpc3QtLWFjdGl2ZSc7XG5cbiAgICAgICAgJCgnLm1hdGVyaWFscy1saXN0JykuZWFjaChmdW5jdGlvbiBpdCgpIHtcbiAgICAgICAgICBjb25zdCAkbGlzdCA9ICQodGhpcyk7XG4gICAgICAgICAgaWYgKCRsaXN0Lmhhc0NsYXNzKG1hdGVyaWFsc0xpc3RBY3RpdmVDbGFzcykpIHtcbiAgICAgICAgICAgICRsaXN0LnJlbW92ZUNsYXNzKG1hdGVyaWFsc0xpc3RBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkbGlzdC5kYXRhKCdncm91cFBhdGgnKSA9PT0gZ3JvdXBQYXRoKSB7XG4gICAgICAgICAgICAkbGlzdC5hZGRDbGFzcyhtYXRlcmlhbHNMaXN0QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoYWN0aXZlQ2xhc3MpO1xuICAgICAgICB0aGF0LiRtYXRlcmlhbHNQYW5lLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoYXQncyBqdXN0IHNlY29uZCBjbGljayBvbiB0aGUgc2FtZSBncm91cFxuICAgICAgICB0aGF0LiRtYXRlcmlhbHNQYW5lLmhpZGUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hdGVyaWFscy1saXN0X19pdGVtJywgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCkge1xuICAgICAgdGhhdC5zZW5kTWVzc2FnZShcbiAgICAgICAgJ25ld0Jsb2NrJyxcbiAgICAgICAgW1xuICAgICAgICAgICQodGhpcykuZGF0YSgnbWF0ZXJpYWxQYXRoJyksXG4gICAgICAgICAgJ2NvbnRlbnQnXG4gICAgICAgIF1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICBzdXBlci5hY3RpdmF0ZSgpO1xuXG4gICAgdGhpcy4kZ3JvdXBzUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kZ3JvdXBzUGFuZS5hcHBlbmQodGhpcy4kbWF0ZXJpYWxzR3JvdXBzKTtcblxuICAgIHRoaXMuJG1hdGVyaWFsc1BhbmUgPSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3JlYXRlU3RhY2thYmxlUGFuZSgpO1xuICAgIHRoaXMuJG1hdGVyaWFsc1BhbmUuYXBwZW5kKHRoaXMuJG1hdGVyaWFsc0xpc3QpO1xuICAgIHRoaXMuJG1hdGVyaWFsc1BhbmUuaGlkZSgpO1xuXG4gICAgJCgnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcpLnJlbW92ZUNsYXNzKCdtYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAtLWFjdGl2ZScpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbHNFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9NYXRlcmlhbHNFbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuaW1wb3J0IFJlZ2lvbiBmcm9tICcuLy4uL1BhZ2VTdHJ1Y3R1cmVDb21wb25lbnRzL1JlZ2lvbic7XG5cbmNsYXNzIFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICBzdXBlcih2aXN1YWxCdWlsZGVyLCBuYW1lKTtcbiAgICB0aGlzLmluaXRQYWdlU3RydWN0dXJlRWxlbWVudCgpO1xuICAgIHRoaXMuZWRpdE1vZGVEYXRhID0ge307XG4gIH1cblxuICBpbml0UGFnZVN0cnVjdHVyZUVsZW1lbnQoKSB7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZSA9ICQoYDx1bCBjbGFzcz1cInBhZ2Utc3RydWN0dXJlXCI+PC91bD5gKVxuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgc3VwZXIuYWN0aXZhdGUoKTtcblxuICAgIHRoaXMuJHN0cnVjdHVyZVBhbmUgPSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3JlYXRlU3RhY2thYmxlUGFuZSgpO1xuICAgIHRoaXMuJHN0cnVjdHVyZVBhbmUuYXBwZW5kKHRoaXMuJHBhZ2VTdHJ1Y3R1cmUpO1xuICB9XG4gIFxuICBwYWdlQ2hhbmdlZCgpIHtcbiAgICBzdXBlci5wYWdlQ2hhbmdlZCgpO1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUuZmluZCgnbGknKS5yZW1vdmUoKTtcbiAgICBjb25zdCByZWdpb25zID0gdGhpcy50YXJnZXQuJCgnLm0tbW9uc3Rlci1jb250ZW50X19jb250ZW50Jyk7XG4gICAgY29uc3QgZW52aXJvbm1lbnQgPSB0aGlzO1xuICAgIHRoaXMucmVnaW9uc1N0cnVjdHVyZSA9IHt9O1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIHJlZ2lvbnMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgY29uc3QgJHJlZ2lvbk5vZGUgPSAkKHRoaXMpO1xuICAgICAgY29uc3QgcmVnaW9uT2JqZWN0ID0gbmV3IFJlZ2lvbigkcmVnaW9uTm9kZSk7XG4gICAgICBjb25zdCAkcmVnaW9uTGkgPSByZWdpb25PYmplY3QucHJvY2Vzc1JlZ2lvbigpO1xuICAgICAgdGhhdC5yZWdpb25zU3RydWN0dXJlW3JlZ2lvbk9iamVjdC5rZXldID0gcmVnaW9uT2JqZWN0O1xuICAgICAgZW52aXJvbm1lbnQuJHBhZ2VTdHJ1Y3R1cmUuYXBwZW5kKCRyZWdpb25MaSk7XG4gICAgfSk7XG4gICAgdGhpcy5lZGl0TW9kZURhdGEgPSB0aGlzLnRhcmdldC5NT05TVEVSX0VESVRfTU9ERV9EQVRBO1xuICB9XG4gIFxuICBzZXJpYWxpemVQYWdlKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgcmVnaW9uS2V5IGluIHRoaXMucmVnaW9uc1N0cnVjdHVyZSkge1xuICAgICAgaWYgKHRoaXMucmVnaW9uc1N0cnVjdHVyZS5oYXNPd25Qcm9wZXJ0eShyZWdpb25LZXkpKSB7XG4gICAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMucmVnaW9uc1N0cnVjdHVyZVtyZWdpb25LZXldO1xuICAgICAgICByZXN1bHRbcmVnaW9uLmtleV0gPSByZWdpb24uc2VyaWFsaXplKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBtYXRlcmlhbHNCeVJlZ2lvbnMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCByZWdpb25LZXkgaW4gdGhpcy5yZWdpb25zU3RydWN0dXJlKSB7XG4gICAgICBpZiAodGhpcy5yZWdpb25zU3RydWN0dXJlLmhhc093blByb3BlcnR5KHJlZ2lvbktleSkpIHtcbiAgICAgICAgY29uc3QgcmVnaW9uID0gdGhpcy5yZWdpb25zU3RydWN0dXJlW3JlZ2lvbktleV07XG4gICAgICAgIHJlc3VsdFtyZWdpb24ua2V5XSA9IHJlZ2lvbi5tYXRlcmlhbHNEZWNsKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9QYWdlU3RydWN0dXJlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcblxufVxuZXhwb3J0IGRlZmF1bHQgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1NpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdW5pcWlkIChwcmVmaXgsIG1vcmVFbnRyb3B5KSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwOi8vbG9jdXR1cy5pby9waHAvdW5pcWlkL1xuICAvLyBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2t2ei5pbylcbiAgLy8gIHJldmlzZWQgYnk6IEthbmtyZWx1bmUgKGh0dHA6Ly93d3cud2ViZmFrdG9yeS5pbmZvLylcbiAgLy8gICAgICBub3RlIDE6IFVzZXMgYW4gaW50ZXJuYWwgY291bnRlciAoaW4gbG9jdXR1cyBnbG9iYWwpIHRvIGF2b2lkIGNvbGxpc2lvblxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRpZCA9IHVuaXFpZCgpXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJHJlc3VsdCA9ICRpZC5sZW5ndGggPT09IDEzXG4gIC8vICAgcmV0dXJucyAxOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAyOiB2YXIgJGlkID0gdW5pcWlkKCdmb28nKVxuICAvLyAgIGV4YW1wbGUgMjogdmFyICRyZXN1bHQgPSAkaWQubGVuZ3RoID09PSAoMTMgKyAnZm9vJy5sZW5ndGgpXG4gIC8vICAgcmV0dXJucyAyOiB0cnVlXG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgJGlkID0gdW5pcWlkKCdiYXInLCB0cnVlKVxuICAvLyAgIGV4YW1wbGUgMzogdmFyICRyZXN1bHQgPSAkaWQubGVuZ3RoID09PSAoMjMgKyAnYmFyJy5sZW5ndGgpXG4gIC8vICAgcmV0dXJucyAzOiB0cnVlXG5cbiAgaWYgKHR5cGVvZiBwcmVmaXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcHJlZml4ID0gJydcbiAgfVxuXG4gIHZhciByZXRJZFxuICB2YXIgX2Zvcm1hdFNlZWQgPSBmdW5jdGlvbiAoc2VlZCwgcmVxV2lkdGgpIHtcbiAgICBzZWVkID0gcGFyc2VJbnQoc2VlZCwgMTApLnRvU3RyaW5nKDE2KSAvLyB0byBoZXggc3RyXG4gICAgaWYgKHJlcVdpZHRoIDwgc2VlZC5sZW5ndGgpIHtcbiAgICAgIC8vIHNvIGxvbmcgd2Ugc3BsaXRcbiAgICAgIHJldHVybiBzZWVkLnNsaWNlKHNlZWQubGVuZ3RoIC0gcmVxV2lkdGgpXG4gICAgfVxuICAgIGlmIChyZXFXaWR0aCA+IHNlZWQubGVuZ3RoKSB7XG4gICAgICAvLyBzbyBzaG9ydCB3ZSBwYWRcbiAgICAgIHJldHVybiBBcnJheSgxICsgKHJlcVdpZHRoIC0gc2VlZC5sZW5ndGgpKS5qb2luKCcwJykgKyBzZWVkXG4gICAgfVxuICAgIHJldHVybiBzZWVkXG4gIH1cblxuICB2YXIgJGdsb2JhbCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IEdMT0JBTClcbiAgJGdsb2JhbC4kbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXMgfHwge31cbiAgdmFyICRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1c1xuICAkbG9jdXR1cy5waHAgPSAkbG9jdXR1cy5waHAgfHwge31cblxuICBpZiAoISRsb2N1dHVzLnBocC51bmlxaWRTZWVkKSB7XG4gICAgLy8gaW5pdCBzZWVkIHdpdGggYmlnIHJhbmRvbSBpbnRcbiAgICAkbG9jdXR1cy5waHAudW5pcWlkU2VlZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDB4NzViY2QxNSlcbiAgfVxuICAkbG9jdXR1cy5waHAudW5pcWlkU2VlZCsrXG5cbiAgLy8gc3RhcnQgd2l0aCBwcmVmaXgsIGFkZCBjdXJyZW50IG1pbGxpc2Vjb25kcyBoZXggc3RyaW5nXG4gIHJldElkID0gcHJlZml4XG4gIHJldElkICs9IF9mb3JtYXRTZWVkKHBhcnNlSW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCwgMTApLCA4KVxuICAvLyBhZGQgc2VlZCBoZXggc3RyaW5nXG4gIHJldElkICs9IF9mb3JtYXRTZWVkKCRsb2N1dHVzLnBocC51bmlxaWRTZWVkLCA1KVxuICBpZiAobW9yZUVudHJvcHkpIHtcbiAgICAvLyBmb3IgbW9yZSBlbnRyb3B5IHdlIGFkZCBhIGZsb2F0IGxvd2VyIHRvIDEwXG4gICAgcmV0SWQgKz0gKE1hdGgucmFuZG9tKCkgKiAxMCkudG9GaXhlZCg4KS50b1N0cmluZygpXG4gIH1cblxuICByZXR1cm4gcmV0SWRcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzXG4gKiovIiwiY2xhc3MgSGFzaEFwaSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZnVuY3Rpb25DYWxscyA9IHt9O1xuXG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBkb2N1bWVudC5sb2NhdGlvbi5oYXNoLm1hdGNoKC8jaGFzaEFwaTooLio/KTpcXC9oYXNoQXBpLyk7XG4gICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBjb25zdCBmdW5jdGlvbkNhbGxzID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQobWF0Y2hlc1sxXSkpO1xuXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBmdW5jdGlvbkNhbGxzKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uZnVuYykge1xuICAgICAgICAgICAgdGhpcy5mdW5jdGlvbkNhbGxzW2l0ZW0uZnVuY10gPSBpdGVtLmFyZ3MgfHwge307XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2hvdWxkQ2FsbChmdW5jKSB7XG4gICAgcmV0dXJuIHRoaXMuZnVuY3Rpb25DYWxsc1tmdW5jXSB8fCBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIYXNoQXBpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9IYXNoQXBpLmpzXG4gKiovIiwiaW1wb3J0IEZyYW1lQXBpIGZyb20gJy4vRnJhbWVBcGknO1xuaW1wb3J0IHVuaXF1ZUlkIGZyb20gJy4vLi4vdW5pcWlkJztcblxuY2xhc3MgVmlzdWFsRnJhbWVcbntcbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICB0aGlzLnBhcmFtcygpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKClcbiAgICB7XG4gICAgICAgIEZyYW1lQXBpLmJpbmRNZXNzYWdlTGlzdGVuZXIodGhpcyk7XG4gICAgICAgIHRoaXMucGFyZW50V2luZG93ID0gd2luZG93LnBhcmVudDtcbiAgICAgICAgLyoqIEB2YXIgRnJvbnRlbmRNb25zdGVyICovXG4gICAgICAgIHRoaXMucGFyZW50TW9uc3RlciA9IHRoaXMucGFyZW50V2luZG93LkZyb250ZW5kTW9uc3RlcjtcbiAgICAgICAgdGhpcy5wYXJlbnRCdWlsZGVyID0gdGhpcy5wYXJlbnRNb25zdGVyLmJ1aWxkZXI7XG4gICAgICAgIHRoaXMuY3VycmVudE1vbnN0ZXJDb250ZW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWFrZUl0TW92ZSgpO1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGF0LnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB0aGlzLnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICB9XG5cbiAgICBnZXQgJG1vbnN0ZXJDb250ZW50KClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLiRtb25zdGVyQ29udGVudENhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZnJlc2hNb25zdGVyQ29udGVudENhY2hlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlO1xuICAgIH1cblxuICAgIHJlZnJlc2hNb25zdGVyQ29udGVudENhY2hlKClcbiAgICB7XG4gICAgICAgIHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGUgPSB7fTtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgICQodGhpcy5zZXR0aW5nc1snbW9uc3Rlci1jb250ZW50LXNlbGVjdG9yJ10pLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgICAgICAgIGlmICghdGhhdC5jdXJyZW50TW9uc3RlckNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGF0LmN1cnJlbnRNb25zdGVyQ29udGVudCA9ICQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGF0LiRtb25zdGVyQ29udGVudENhY2hlWyQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyldID0gJCh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0TmV3TWF0ZXJpYWxJbmRleCgpXG4gICAge1xuICAgICAgICBpZiAoIXRoaXMubGFzdE1hdGVyaWFsSW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBsYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgJCgnW2RhdGEtaXMtbWF0ZXJpYWxdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5kYXRhKCdtYXRlcmlhbC1pbmRleCcpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBsYXN0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubGFzdE1hdGVyaWFsSW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0TWF0ZXJpYWxJbmRleCsrO1xuICAgICAgICByZXR1cm4gdGhpcy5sYXN0TWF0ZXJpYWxJbmRleDtcbiAgICB9XG5cbiAgICB1cGRhdGVIYW5kbGVycygpXG4gICAge1xuICAgICAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCAmJiB0aGlzLiRoYW5kbGVycykge1xuICAgICAgICAgICAgdGhpcy4kaGFuZGxlcnMuY3NzKFxuICAgICAgICAgICAgICAgICd0b3AnLFxuICAgICAgICAgICAgICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwucG9zaXRpb24oKS50b3AgKyB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLmhlaWdodCgpIC0gdGhpcy4kaGFuZGxlcnMuaGVpZ2h0KClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLmFkZENsYXNzKCdtLW1vbnN0ZXItY29udGVudF9fbWF0ZXJpYWwtLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFrZUl0TW92ZSgpXG4gICAge1xuICAgICAgICB0aGlzLiRoYW5kbGVycyA9ICQoYFxuPGRpdiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNcIj5cbiAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fY29uZmlndXJlXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY29nXCI+PC9pPlxuICAgIDwvYT5cbiAgICA8c3BhbiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX2Jsb2NrLW5hbWVcIj5CbG9jayBuYW1lIGhlcmU8L3NwYW4+XG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtdXBcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS11cFwiPjwvaT5cbiAgICA8L2E+XG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtZG93blwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvd25cIj48L2k+XG4gICAgPC9hPlxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19jbG9uZVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNsb25lXCI+PC9pPlxuICAgIDwvYT5cbiAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fcmVtb3ZlXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+XG4gICAgPC9hPlxuPC9kaXY+YCk7XG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQodGhpcy4kaGFuZGxlcnMpO1xuICAgICAgICB0aGlzLiRoYW5kbGVycy5oaWRlKCk7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICAkKHRoaXMuc2V0dGluZ3NbJ21vbnN0ZXItY29udGVudC1zZWxlY3RvciddKS5vbih7XG4gICAgICAgICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbiBob3ZlckluKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1oaWdobGlnaHRlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlbGVhdmU6IGZ1bmN0aW9uIGhvdmVyT3V0KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1oaWdobGlnaHRlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoYXQuc2VsZWN0TWF0ZXJpYWwoJHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAnW2RhdGEtaXMtbWF0ZXJpYWxdJyk7XG4gICAgICAgIHRoYXQuJGhhbmRsZXJzLm9uKCdjbGljaycsICcubW9uc3Rlci1ibG9jay1oYW5kbGVyc19fbW92ZS11cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgJHByZXYgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLnByZXYoJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICAgICAgICAgICAgIGlmICgkcHJldi5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLmluc2VydEJlZm9yZSgkcHJldik7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlSGFuZGxlcnMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pLm9uKCdjbGljaycsICcubW9uc3Rlci1ibG9jay1oYW5kbGVyc19fbW92ZS1kb3duJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgIHZhciAkbmV4dCA9IHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwubmV4dCgnW2RhdGEtaXMtbWF0ZXJpYWxdJyk7XG4gICAgICAgICAgICAgICAgaWYgKCRuZXh0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwuaW5zZXJ0QWZ0ZXIoJG5leHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KS5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX2Nsb25lJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgIHZhciAkY2xvbmVkTWF0ZXJpYWwgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgJGNsb25lZE1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsLWluZGV4JywgdGhhdC5nZXROZXdNYXRlcmlhbEluZGV4KCkpLmluc2VydEFmdGVyKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpO1xuICAgICAgICAgICAgICAgIHRoYXQuc2VsZWN0TWF0ZXJpYWwoJGNsb25lZE1hdGVyaWFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSkub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19yZW1vdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgdGhpcyBtYXRlcmlhbD8nKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kaGFuZGxlcnMuaGlkZSgpOyAvLyBpdCBkb2VzIG5vdCB3b3JrLiB3aHk/IE5lZWQgdG8gZml4IVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VsZWN0TWF0ZXJpYWwoJG1hdGVyaWFsKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwgPT09ICRtYXRlcmlhbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICAgICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLnJlbW92ZUNsYXNzKCdtLW1vbnN0ZXItY29udGVudF9fbWF0ZXJpYWwtLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwgPSAkbWF0ZXJpYWw7XG4gICAgICAgIHRoaXMudXBkYXRlSGFuZGxlcnMoKTtcbiAgICAgICAgdGhpcy4kaGFuZGxlcnMuc2hvdygpO1xuICAgIH1cblxuICAgIHNlcmlhbGl6ZUNvbnRlbnQoY2FsbGJhY2spXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGZvciAoY29uc3QgdW5pcXVlQ29udGVudElkIGluIHRoaXMuJG1vbnN0ZXJDb250ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kbW9uc3RlckNvbnRlbnQuaGFzT3duUHJvcGVydHkodW5pcXVlQ29udGVudElkKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRtb25zdGVyID0gdGhpcy4kbW9uc3RlckNvbnRlbnRbdW5pcXVlQ29udGVudElkXTtcbiAgICAgICAgICAgICAgICByZXN1bHRbJG1vbnN0ZXIuZGF0YSgndW5pcXVlQ29udGVudElkJyldID0gdGhhdC5zZXJpYWxpemVVbmlxdWVDb250ZW50KCRtb25zdGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbmRUb0J1aWxkZXIoY2FsbGJhY2ssIFtyZXN1bHRdKTtcbiAgICB9XG5cbiAgICBzZXJpYWxpemVVbmlxdWVDb250ZW50KCRtb25zdGVyQ29udGVudClcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgICAgICByZXN1bHQudW5pcXVlQ29udGVudElkID0gJG1vbnN0ZXJDb250ZW50LmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpO1xuICAgICAgICByZXN1bHQubWF0ZXJpYWxzID0ge307XG4gICAgICAgICRtb25zdGVyQ29udGVudC5maW5kKCdbZGF0YS1pcy1tYXRlcmlhbD1cXCcxXFwnXScpLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0ge307XG4gICAgICAgICAgICBtYXRlcmlhbC5ibG9jayA9ICQodGhpcykuZGF0YSgnbWF0ZXJpYWxCbG9jaycpO1xuICAgICAgICAgICAgcmVzdWx0Lm1hdGVyaWFsc1skKHRoaXMpLmRhdGEoJ21hdGVyaWFsSW5kZXgnKV0gPSBtYXRlcmlhbDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBWaXN1YWxGcmFtZSBzZXR0aW5ncy5cbiAgICAgKiBVc2VzIFZpc3VhbEZyYW1lU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBwYXJhbXMoKVxuICAgIHtcbiAgICAgICAgY29uc3QgdXNlclNldHRpbmdzID0gd2luZG93LlZpc3VhbEZyYW1lU2V0dGluZ3MgfHwge307XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgICAgICAgJ21vbnN0ZXItY29udGVudC1zZWxlY3Rvcic6ICcubS1tb25zdGVyLWNvbnRlbnRfX2NvbnRlbnQnXG4gICAgICAgIH07XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHVzZXJTZXR0aW5ncykge1xuICAgICAgICAgICAgaWYgKHVzZXJTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB9XG5cbiAgICBzZW5kVG9CdWlsZGVyKGZ1bmMsIGFyZ3MpXG4gICAge1xuICAgICAgICBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLnBhcmVudFdpbmRvdywgZnVuYywgYXJncyk7XG4gICAgfVxuXG4gICAgbmV3QmxvY2sobWF0ZXJpYWxOYW1lLCByZWdpb25OYW1lKVxuICAgIHtcbiAgICAgICAgLy8gQHRvZG8gQWRkIGxvYWRlciBoZXJlIGFzIHdlIGFyZSB1c2luZyBmb3JtIHBvc3QgIVxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSB1bmlxdWVJZCgnbWF0Jyk7XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgIHByb3ZpZGVyc0VudGl0aWVzOiB0aGlzLnBhcmVudEJ1aWxkZXIuc2VyaWFsaXplKCksXG4gICAgICAgICAgICByZWdpb25zTWF0ZXJpYWxzOiB0aGlzLnBhcmVudEJ1aWxkZXIuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKS5tYXRlcmlhbHNCeVJlZ2lvbnMoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFjdGlvbjogJ3JlbmRlci1tYXRlcmlhbCcsXG4gICAgICAgICAgbWF0ZXJpYWxJZDogcmFuZG9tSW5kZXgsXG4gICAgICAgICAgbWF0ZXJpYWxSZWdpb246IHJlZ2lvbk5hbWUsXG4gICAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsTmFtZVxuICAgICAgICB9O1xuICAgICAgICBpZiAobmV3RGF0YS50ZW1wbGF0ZS5yZWdpb25zTWF0ZXJpYWxzLmhhc093blByb3BlcnR5KHJlZ2lvbk5hbWUpID09PSBmYWxzZSkge1xuICAgICAgICAgIG5ld0RhdGEudGVtcGxhdGUucmVnaW9uc01hdGVyaWFsc1tyZWdpb25OYW1lXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3RGF0YS50ZW1wbGF0ZS5yZWdpb25zTWF0ZXJpYWxzW3JlZ2lvbk5hbWVdW3JhbmRvbUluZGV4XSA9IHttYXRlcmlhbDogbWF0ZXJpYWxOYW1lfTtcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCc8Zm9ybSBtZXRob2Q9XCJQT1NUXCI+PC9mb3JtPicpO1xuICAgICAgICBjb25zdCAkaW5wdXQgPSAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfX2pzb25cIj4nKTtcbiAgICAgICAgY29uc3QgJGNzcmYgPSAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiPicpO1xuXG4gICAgICAgICRjc3JmXG4gICAgICAgICAgLmF0dHIoJ25hbWUnLCAkKCdtZXRhW25hbWU9Y3NyZi1wYXJhbV0nKS5hdHRyKCdjb250ZW50JykpXG4gICAgICAgICAgLnZhbCgkKCdtZXRhW25hbWU9Y3NyZi10b2tlbl0nKS5hdHRyKCdjb250ZW50JykpXG4gICAgICAgICAgLmFwcGVuZFRvKCRmb3JtKTtcblxuICAgICAgICAkaW5wdXRcbiAgICAgICAgICAudmFsKEpTT04uc3RyaW5naWZ5KG5ld0RhdGEpKVxuICAgICAgICAgIC5hcHBlbmRUbygkZm9ybSk7XG5cbiAgICAgICAgJGZvcm1bMF0uc3VibWl0KCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyAkLmFqYXgoe1xuICAgICAgICAvLyAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24sXG4gICAgICAgIC8vICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgLy8gICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgLy8gICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgICAgIC8vICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAvLyAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkobmV3RGF0YSksXG4gICAgICAgIC8vIH0pLmRvbmUoZnVuY3Rpb24gb2soZGF0YSkge1xuICAgICAgICAvLyAgICAgY29uc3QgJGVsZW1lbnQgPSAkKGRhdGEpO1xuICAgICAgICAvLyAgICAgdGhhdC4kbW9uc3RlckNvbnRlbnRbdGhhdC5jdXJyZW50TW9uc3RlckNvbnRlbnRdLmFwcGVuZCgkZWxlbWVudCk7XG4gICAgICAgIC8vICAgICB0aGlzLnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAgICAgLy8gICAgIC8qIGdsb2JhbCBzbW9vdGhTY3JvbGw6ZmFsc2UgKi9cbiAgICAgICAgLy8gICAgIHNtb290aFNjcm9sbC5hbmltYXRlU2Nyb2xsKCRlbGVtZW50WzBdLm9mZnNldFRvcCk7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsRnJhbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL1Zpc3VhbEZyYW1lLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9