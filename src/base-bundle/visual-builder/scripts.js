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
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = all;
	
	var _WYSIWYG = __webpack_require__(8);
	
	var _WYSIWYG2 = _interopRequireDefault(_WYSIWYG);
	
	var _image = __webpack_require__(27);
	
	var _image2 = _interopRequireDefault(_image);
	
	var _link = __webpack_require__(28);
	
	var _link2 = _interopRequireDefault(_link);
	
	var _string = __webpack_require__(10);
	
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
	
	var _uniqid = __webpack_require__(26);
	
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
/* 18 */,
/* 19 */,
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
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
/* 27 */
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
/* 28 */
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzJlY2RmZmNlMDE3ZWVjMzc3MWMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvRnJvbnRlbmRNb25zdGVyLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9FZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZUNvbXBvbmVudHMvTWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1BhZ2VTdHJ1Y3R1cmVDb21wb25lbnRzL1JlZ2lvbi5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL1dZU0lXWUcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmNzcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3VuaXFpZC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL2ltYWdlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lZGl0YWJsZXMvbGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVB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QSxPQUFJLFdBQUosRUFBaUI7O0FBRWYsY0FBUyxDQUFDLEtBQUssTUFBTCxLQUFnQixFQUFqQixFQUFxQixPQUFyQixDQUE2QixDQUE3QixFQUFnQyxRQUFoQyxFQUFUO0FBQ0Q7O0FBRUQsVUFBTyxLQUFQO0FBQ0QsRUF2REQsQzs7Ozs7Ozs7Ozs7bUJDQXdCLEs7QUFBVCxVQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCO0FBQ25DLE9BQU0sT0FBTyxNQUFNLElBQU4sQ0FBVyxLQUFYLEVBQWtCLEtBQWxCLEVBQWI7QUFDQSxVQUFPO0FBQ0wsVUFBSyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBREE7QUFFTCxVQUFLLEtBQUssSUFBTCxDQUFVLEtBQVY7QUFGQSxJQUFQO0FBSUQsRTs7Ozs7Ozs7Ozs7bUJDTnVCLEk7QUFBVCxVQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQ2xDLFVBQU87QUFDTCxVQUFLLE1BQU0sSUFBTixDQUFXLE1BQVgsQ0FEQTtBQUVMLGFBQVEsTUFBTSxJQUFOO0FBRkgsSUFBUDtBQUlELEUiLCJmaWxlIjoidmlzdWFsLWJ1aWxkZXIvc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYzJlY2RmZmNlMDE3ZWVjMzc3MWNcbiAqKi8iLCJpbXBvcnQgJy4vYnVuZGxlLmNzcyc7XG5cbmltcG9ydCBGcm9udGVuZE1vbnN0ZXIgZnJvbSAnLi9Gcm9udGVuZE1vbnN0ZXInO1xuXG53aW5kb3cuRnJvbnRlbmRNb25zdGVyID0gbmV3IEZyb250ZW5kTW9uc3RlcigpO1xuLy9cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5qc1xuICoqLyIsImltcG9ydCBGcmFtZUFwaSBmcm9tICcuLy4uL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaSc7XG5cbmNsYXNzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIgPSB2aXN1YWxCdWlsZGVyO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXJnZXQgPSAkKHRoaXMudmlzdWFsQnVpbGRlci5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSlbMF0uY29udGVudFdpbmRvdztcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIC8vIGRlYWN0aXZhdGUgY3VycmVudCBzZWxlY3RlZCBlbnZpcm9ubWVudFxuICAgIGlmICh0aGlzLm5hbWUgPT09IHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpIHtcbiAgICAgIHRoaXMudmlzdWFsQnVpbGRlci5lbnZpcm9ubWVudHMuZ2V0KHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpLmRlYWN0aXZhdGUoKTtcbiAgICB9XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMudmlzdWFsQnVpbGRlci5jbGVhclN0YWNrYWJsZSgpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2UoZnVuYywgYXJncykge1xuICAgIHJldHVybiBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLnRhcmdldCwgZnVuYywgYXJncyk7XG4gIH1cbiAgXG4gIHBhZ2VDaGFuZ2VkKCkge1xuICAgIFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VFbnZpcm9ubWVudDtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvQmFzZUVudmlyb25tZW50LmpzXG4gKiovIiwiY2xhc3MgRnJhbWVBcGkge1xuICBzdGF0aWMgZ2V0IGlzSWUoKSB7XG4gICAgLyogZ2xvYmFsIGlzICovXG4gICAgaWYgKHR5cGVvZihpcykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gaXMuaWUoKTsvLyB8fCBpcy5lZGdlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgYmluZE1lc3NhZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgICBsZXQgbWVzc2FnZSA9IG51bGw7XG4gICAgICBpZiAoRnJhbWVBcGkuaXNJZSkge1xuICAgICAgICBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lc3NhZ2UgPSBldmVudC5kYXRhO1xuICAgICAgfVxuXG4gICAgICBpZiAobGlzdGVuZXJbbWVzc2FnZS5mdW5jXSkge1xuICAgICAgICBsaXN0ZW5lclttZXNzYWdlLmZ1bmNdLmFwcGx5KGxpc3RlbmVyLCBtZXNzYWdlLmFyZ3MpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJRThcbiAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25tZXNzYWdlJywgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzZW5kTWVzc2FnZSh0YXJnZXQsIGZ1bmMsIGFyZ3MpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgJ2Z1bmMnOiBmdW5jLFxuICAgICAgJ2FyZ3MnOiBhcmdzLFxuICAgIH07XG4gICAgY29uc3QgbWVzc2FnZSA9IEZyYW1lQXBpLmlzSWUgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IGRhdGE7XG5cbiAgICB0YXJnZXQucG9zdE1lc3NhZ2UobWVzc2FnZSwgJyonKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcmFtZUFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanNcbiAqKi8iLCJpbXBvcnQgVmlzdWFsQnVpbGRlciBmcm9tICcuL2NvbXBvbmVudHMvYnVpbGRlci9WaXN1YWxCdWlsZGVyJztcbmltcG9ydCBWaXN1YWxGcmFtZSBmcm9tICcuL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL1Zpc3VhbEZyYW1lJztcbmltcG9ydCBIYXNoQXBpIGZyb20gJy4vY29tcG9uZW50cy92aXN1YWwtZnJhbWUvSGFzaEFwaSc7XG5cbmNsYXNzIEZyb250ZW5kTW9uc3RlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFyYW1zKCk7XG4gICAgdGhpcy52aXN1YWxCdWxkZXIgPSBudWxsO1xuICAgIHRoaXMuaGFzaEFwaSA9IG5ldyBIYXNoQXBpKCk7XG4gICAgaWYgKHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdyAmJiB3aW5kb3cucGFyZW50LkZyb250ZW5kTW9uc3Rlcikge1xuICAgICAgaWYgKHdpbmRvdy5wYXJlbnQuRnJvbnRlbmRNb25zdGVyLmhhc0J1aWxkZXIpIHtcbiAgICAgICAgdGhpcy5WaXN1YWxGcmFtZSA9IG5ldyBWaXN1YWxGcmFtZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiogZ2xvYmFsczogc21vb3RoU2Nyb2xsKi9cbiAgICBpZiAodHlwZW9mKHNtb290aFNjcm9sbCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzbW9vdGhTY3JvbGwuaW5pdCgpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgVmlzdWFsQnVpbGRlciBjbGFzcyBpbnN0YW5jZVxuICAgKiBAcmV0dXJucyBWaXN1YWxCdWlsZGVyXG4gICAqL1xuICBnZXQgYnVpbGRlcigpIHtcbiAgICBpZiAodGhpcy52aXN1YWxCdWxkZXIgPT09IG51bGwpIHtcbiAgICAgIHRoaXMudmlzdWFsQnVsZGVyID0gbmV3IFZpc3VhbEJ1aWxkZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmlzdWFsQnVsZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgRnJvbnRlbmRNb25zdGVyIGluc3RhbmNlIGhhcyBWaXN1YWwgQnVpbGRlciBvbiBwYWdlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGhhc0J1aWxkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRlci4kYnVpbGRlci5sZW5ndGggPT09IDE7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBGcm9udGVuZE1vbnN0ZXIgc2V0dGluZ3MuXG4gICAqIFVzZXMgRnJvbnRlbmRNb25zdGVyU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuRnJvbnRlbmRNb25zdGVyU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB1c2VyU2V0dGluZ3MpIHtcbiAgICAgIGlmICh1c2VyU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcm9udGVuZE1vbnN0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL0Zyb250ZW5kTW9uc3Rlci5qc1xuICoqLyIsImltcG9ydCBBbGxFZGl0YWJsZXMgZnJvbSAnLi9lZGl0YWJsZXMvYWxsJztcblxuY2xhc3MgRWRpdGFibGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVkaXRhYmxlc0J5VHlwZSA9IHt9O1xuICAgIC8vIGluaXRpYWxpemUgYmFzZSBidWlsZC1pbiBlZGl0YWJsZXNcbiAgICBBbGxFZGl0YWJsZXMoKTtcbiAgICB0aGlzLmVkaXRhYmxlc0J5VHlwZSA9IHdpbmRvdy5NT05TVEVSX0VESVRBQkxFUztcbiAgfVxuXG4gIHNlcmlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgbGV0IGJlbURhdGEgPSAkbm9kZS5kYXRhKCdiZW0nKTtcbiAgICBjb25zdCBiZW1FbnRpdHkgPSAkbm9kZS5kYXRhKCdiZW1NYXRjaCcpO1xuICAgIGlmIChiZW1EYXRhLmhhc093blByb3BlcnR5KGJlbUVudGl0eSkpIHtcbiAgICAgIGJlbURhdGEgPSBiZW1EYXRhW2JlbUVudGl0eV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGJlbURhdGEgPSB7fTtcbiAgICB9XG4gICAgaWYgKGJlbURhdGEuaGFzT3duUHJvcGVydHkoJ2VkaXRhYmxlJykgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgZWRpdGFibGUgPSBiZW1EYXRhLmVkaXRhYmxlO1xuICAgIGxldCB0eXBlID0gZWRpdGFibGUuaGFzT3duUHJvcGVydHkoJ3R5cGUnKSA/IGVkaXRhYmxlLnR5cGUgOiAnc3RyaW5nJztcbiAgICBpZiAodGhpcy5lZGl0YWJsZXNCeVR5cGUuaGFzT3duUHJvcGVydHkodHlwZSkgPT09IGZhbHNlKSB7XG4gICAgICB0eXBlID0gJ3N0cmluZyc7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwb3J0VmFyaWFibGUgPSBlZGl0YWJsZS5oYXNPd25Qcm9wZXJ0eSgndGFyZ2V0JykgPyBlZGl0YWJsZS50YXJnZXQgOiAnZGF0YSc7XG5cbiAgICByZXR1cm4gdGhpcy5lZGl0YWJsZXNCeVR5cGVbdHlwZV0oJG5vZGUsIGV4cG9ydFZhcmlhYmxlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0YWJsZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9FZGl0YWJsZS5qc1xuICoqLyIsImNsYXNzIE1hdGVyaWFsIHtcbiAgY29uc3RydWN0b3IoJG5vZGUpIHtcbiAgICB0aGlzLiRub2RlID0gJG5vZGU7XG4gICAgdGhpcy5tYXRlcmlhbFBhdGggPSB0aGlzLiRub2RlLmRhdGEoJ21hdGVyaWFsUGF0aCcpO1xuICAgIHRoaXMubmFtZSA9IHRoaXMubWF0ZXJpYWxQYXRoLnJlcGxhY2UoLy4qXFwuKC4qKSQvLCAnJDEnKTtcbiAgICAvLyFAdG9kbyBDSEFOR0UgVEhJU1xuICAgIHRoaXMua2V5ID0gdGhpcy4kbm9kZS5kYXRhKCdtYXRlcmlhbEluZGV4Jyk7XG4gIH1cblxuICBwcm9jZXNzTWF0ZXJpYWwoKSB7XG4gICAgY29uc3QgJGxpID0gJChgPGxpIGNsYXNzPVwicGFnZS1zdHJ1Y3R1cmVfX21hdGVyaWFsXCI+JHt0aGlzLm5hbWV9PC9saT5gKTtcbiAgICByZXR1cm4gJGxpO1xuICB9XG5cbiAgc3RhdGljIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICByZXR1cm4gd2luZG93LkZyb250ZW5kTW9uc3Rlci5idWlsZGVyLmVkaXRhYmxlLnNlcmlhbGl6ZUVkaXRhYmxlKCRub2RlKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICAvLyBtYXRlcmlhbCBoYXMgZGF0YS1lZGl0YWJsZS1rZXlzIHdpdGggc2NoZW1hXG4gICAgY29uc3QgZWRpdGFibGVLZXlzID0gdGhpcy4kbm9kZS5kYXRhKCdlZGl0YWJsZUtleXMnKTtcbiAgICBjb25zdCByZWN1cnNpdmVJdGVyYXRvciA9IGZ1bmN0aW9uIGl0ZXIoYXJyLCBwYXRoLCAkc2NvcGUpIHtcbiAgICAgIGNvbnN0IGZpbmFsID0ge307XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhhcnIpKSB7XG4gICAgICAgIGxldCBmdWxsS2V5UGF0aCA9IGtleTtcbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICBmdWxsS2V5UGF0aCA9IGAke3BhdGh9LiR7a2V5fWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZihhcnJba2V5XSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY29uc3QgJGl0ZW1zID0gJHNjb3BlLmZpbmQoYFtkYXRhLXJlY3Vyc2l2ZS1pdGVtPVwiJHtmdWxsS2V5UGF0aH1cIl1gKTtcbiAgICAgICAgICBmaW5hbFtrZXldID0ge307XG4gICAgICAgICAgJGl0ZW1zLmVhY2goZnVuY3Rpb24gaXRlbXNSZWMoKSB7XG4gICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICBmaW5hbFtrZXldWyR0aGlzLmRhdGEoJ3JlY3Vyc2l2ZUl0ZW1LZXknKV0gPSByZWN1cnNpdmVJdGVyYXRvcihcbiAgICAgICAgICAgICAgYXJyW2tleV0sXG4gICAgICAgICAgICAgICdpdGVtJyxcbiAgICAgICAgICAgICAgJHRoaXNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgJG5vZGUgPSAkc2NvcGUuZmluZChgW2RhdGEtZWRpdGFibGUta2V5PVwiJHtmdWxsS2V5UGF0aH1cIl1gKTtcbiAgICAgICAgICBmaW5hbFtrZXldID0gTWF0ZXJpYWwuc2VyaWFsaXplTm9kZSgkbm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmaW5hbDtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IHJlc3VsdCA9IHJlY3Vyc2l2ZUl0ZXJhdG9yKGVkaXRhYmxlS2V5cywgJycsIHRoaXMuJG5vZGUpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4vLyAgICB0aGlzLiRub2RlLmZpbmQoJycpXG4gICAgXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9QYWdlU3RydWN0dXJlQ29tcG9uZW50cy9NYXRlcmlhbC5qc1xuICoqLyIsImltcG9ydCBNYXRlcmlhbCBmcm9tICcuL01hdGVyaWFsJztcblxuY2xhc3MgUmVnaW9uIHtcbiAgY29uc3RydWN0b3IoJG5vZGUpIHtcbiAgICB0aGlzLm1hdGVyaWFscyA9IHt9O1xuICAgIHRoaXMuJG5vZGUgPSAkbm9kZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gJG5vZGUuZGF0YSgnY29udGVudERlc2NyaXB0aW9uJyk7XG4gIH1cblxuICBwcm9jZXNzUmVnaW9uKCkge1xuICAgIGNvbnN0ICRyZWdpb25MaSA9ICQoYDxsaSBjbGFzcz1cInBhZ2Utc3RydWN0dXJlX19yZWdpb25cIj4ke3RoaXMucmVnaW9uRGVzY3JpcHRpb259PC9saT5gKTtcbiAgICB0aGlzLmtleSA9IHRoaXMuJG5vZGUuZGF0YSgncmVnaW9uS2V5Jyk7XG4gICAgdGhpcy5pZCA9IHRoaXMuJG5vZGUuZGF0YSgncmVnaW9uSWQnKTtcbiAgICBjb25zdCAkcmVnaW9uVWwgPSAkKCc8dWwgY2xhc3M9XCJwYWdlLXN0cnVjdHVyZV9fcmVnaW9uLW1hdGVyaWFsc1wiPjwvdWw+Jyk7XG5cbiAgICBjb25zdCAkbWF0ZXJpYWxzID0gdGhpcy4kbm9kZS5maW5kKCdbZGF0YS1pcy1tYXRlcmlhbD0xXScpO1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgJG1hdGVyaWFscy5lYWNoKGZ1bmN0aW9uIG1hdGVyaWFsc0l0ZXJhdG9yKCkge1xuICAgICAgY29uc3QgJG1hdGVyaWFsTm9kZSA9ICQodGhpcyk7XG4gICAgICBjb25zdCBtYXRlcmlhbE9iamVjdCA9IG5ldyBNYXRlcmlhbCgkbWF0ZXJpYWxOb2RlKTtcbiAgICAgIGNvbnN0ICRsaSA9IG1hdGVyaWFsT2JqZWN0LnByb2Nlc3NNYXRlcmlhbCgpO1xuICAgICAgdGhhdC5tYXRlcmlhbHNbbWF0ZXJpYWxPYmplY3Qua2V5XSA9IG1hdGVyaWFsT2JqZWN0O1xuICAgICAgJHJlZ2lvblVsLmFwcGVuZCgkbGkpO1xuICAgIH0pO1xuXG4gICAgJHJlZ2lvbkxpLmFwcGVuZCgkcmVnaW9uVWwpO1xuICAgIHJldHVybiAkcmVnaW9uTGk7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgbWF0ZXJpYWxzID0gdGhpcy5tYXRlcmlhbHM7XG4gICAgT2JqZWN0LmtleXMobWF0ZXJpYWxzKS5mb3JFYWNoKGZ1bmN0aW9uIGl0ZXIobWF0ZXJpYWxLZXkpIHtcbiAgICAgIHJlc3VsdFttYXRlcmlhbEtleV0gPSBtYXRlcmlhbHNbbWF0ZXJpYWxLZXldLnNlcmlhbGl6ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBtYXRlcmlhbHNEZWNsKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgbWF0ZXJpYWxLZXkgaW4gdGhpcy5tYXRlcmlhbHMpIHtcbiAgICAgIGlmICh0aGlzLm1hdGVyaWFscy5oYXNPd25Qcm9wZXJ0eShtYXRlcmlhbEtleSkpIHtcbiAgICAgICAgcmVzdWx0W21hdGVyaWFsS2V5XSA9IHtcbiAgICAgICAgICAnbWF0ZXJpYWwnOiB0aGlzLm1hdGVyaWFsc1ttYXRlcmlhbEtleV0ubWF0ZXJpYWxQYXRoLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1BhZ2VTdHJ1Y3R1cmVDb21wb25lbnRzL1JlZ2lvbi5qc1xuICoqLyIsImltcG9ydCBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50JztcbmltcG9ydCBNYXRlcmlhbHNFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9NYXRlcmlhbHNFbnZpcm9ubWVudCc7XG5pbXBvcnQgQ3VzdG9taXphdGlvbkVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudCc7XG5pbXBvcnQgQWN0aW9uRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvQWN0aW9uRW52aXJvbm1lbnQnO1xuaW1wb3J0IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9QYWdlU3RydWN0dXJlRW52aXJvbm1lbnQnO1xuaW1wb3J0IEZyYW1lQXBpIGZyb20gJy4vLi4vdmlzdWFsLWZyYW1lL0ZyYW1lQXBpJztcbmltcG9ydCBFZGl0YWJsZSBmcm9tICcuL0VkaXRhYmxlJztcblxuY2xhc3MgVmlzdWFsQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFyYW1zKCk7XG4gICAgdGhpcy5yZXNvbHV0aW9uU3dpdGNoZXIoKTtcblxuICAgIHRoaXMuZW52aXJvbm1lbnRzID0gbmV3IE1hcChbXG4gICAgICBbJ3NpdGUtc3RydWN0dXJlJywgbmV3IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCh0aGlzLCAnc2l0ZS1zdHJ1Y3R1cmUnKV0sXG4gICAgICBbJ3BhZ2Utc3RydWN0dXJlJywgbmV3IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCh0aGlzLCAncGFnZS1zdHJ1Y3R1cmUnKV0sXG4gICAgICBbJ21hdGVyaWFscycsIG5ldyBNYXRlcmlhbHNFbnZpcm9ubWVudCh0aGlzLCAnbWF0ZXJpYWxzJyldLFxuICAgICAgWydjdXN0b21pemF0aW9uJywgbmV3IEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCh0aGlzLCAnY3VzdG9taXphdGlvbicpXSxcbiAgICAgIFsnYWN0aW9uJywgbmV3IEFjdGlvbkVudmlyb25tZW50KHRoaXMsICdhY3Rpb24nKV0sXG4gICAgXSk7XG5cbiAgICB0aGlzLmVudmlyb25tZW50U2VsZWN0b3IoKTtcblxuICAgIC8vIHNlbGVjdCBmaXJzdCBlbnZpcm9ubWVudCBieSBkZWZhdWx0XG4gICAgdGhpcy5zd2l0Y2hFbnZpcm9ubWVudCgnc2l0ZS1zdHJ1Y3R1cmUnKTtcbiAgICAkKCcubW9uc3Rlci1lbnZpcm9ubWVudC1zZWxlY3Rvcl9fZW52aXJvbm1lbnQtbGluaycpXG4gICAgICAuZmlyc3QoKVxuICAgICAgLmFkZENsYXNzKCdtb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rLS1hY3RpdmUnKTtcbiAgICBGcmFtZUFwaS5iaW5kTWVzc2FnZUxpc3RlbmVyKHRoaXMpO1xuXG4gICAgdGhpcy5lZGl0YWJsZSA9IG5ldyBFZGl0YWJsZSgpO1xuXG4gICAgdGhpcy5jb250cm9scygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgVmlzdWFsQnVpbGRlciBzZXR0aW5ncy5cbiAgICogVXNlcyBWaXN1YWxCdWlsZGVyU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuVmlzdWFsQnVpbGRlclNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgJ2VsZW1lbnQtc2VsZWN0b3InOiAnLm1vbnN0ZXItdmlzdWFsLWJ1aWxkZXInLFxuICAgICAgJ2ZyYW1lLXNlbGVjdG9yJzogJy5tb25zdGVyLXZpc3VhbC1mcmFtZScsXG4gICAgICAnYnVuZGxlcyc6IHt9LFxuICAgICAgJ3N0YWNrYWJsZS1jb250YWluZXItY2xhc3MnOiAnbW9uc3Rlci1zdGFja2FibGUtY29udGFpbmVyJyxcbiAgICAgICduZXctYmxvY2stdXJsJzogJy9tb25zdGVyL3Zpc3VhbC1idWlsZGVyL25ldy1ibG9jaycsXG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB1c2VyU2V0dGluZ3MpIHtcbiAgICAgIGlmICh1c2VyU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLiRidWlsZGVyID0gJCh0aGlzLnNldHRpbmdzWydlbGVtZW50LXNlbGVjdG9yJ10pO1xuICAgIHRoaXMuJHN0YWNrYWJsZSA9ICQoJy4nICsgdGhpcy5zZXR0aW5nc1snc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyddKTtcbiAgfVxuXG4gIHJlc29sdXRpb25Td2l0Y2hlcigpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBiZW1FbGVtID0gJ3Jlc29sdXRpb24tc3dpdGNoZXJfX3Jlc29sdXRpb24tbGluayc7XG4gICAgY29uc3QgYWN0aXZlTW9kaWZpZXIgPSBgJHtiZW1FbGVtfS0tYWN0aXZlYDtcbiAgICBjb25zdCAkcmVzb2x1dGlvbkxpbmtzID0gJChgLiR7YmVtRWxlbX1gKTtcbiAgICAkcmVzb2x1dGlvbkxpbmtzLmNsaWNrKGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgJHJlc29sdXRpb25MaW5rcy5yZW1vdmVDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICAkKHRoYXQuc2V0dGluZ3NbJ2ZyYW1lLXNlbGVjdG9yJ10pLndpZHRoKCQodGhpcykuZGF0YSgncmVzb2x1dGlvbldpZHRoJykpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBlbnZpcm9ubWVudFNlbGVjdG9yKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGJlbUVsZW0gPSAnbW9uc3Rlci1lbnZpcm9ubWVudC1zZWxlY3Rvcl9fZW52aXJvbm1lbnQtbGluayc7XG4gICAgY29uc3QgYWN0aXZlTW9kaWZpZXIgPSBgJHtiZW1FbGVtfS0tYWN0aXZlYDtcbiAgICBjb25zdCAkc2VjdGlvbkxpbmtzID0gJChgLiR7YmVtRWxlbX1gKTtcbiAgICAkc2VjdGlvbkxpbmtzLmNsaWNrKGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgY29uc3QgZW52aXJvbm1lbnROYW1lID0gJCh0aGlzKS5kYXRhKCdlbnZpcm9ubWVudE5hbWUnKTtcbiAgICAgIGlmICh0aGF0LmN1cnJlbnRFbnZpcm9ubWVudCA9PT0gZW52aXJvbm1lbnROYW1lKSB7XG4gICAgICAgICRzZWN0aW9uTGlua3MucmVtb3ZlQ2xhc3MoYWN0aXZlTW9kaWZpZXIpO1xuICAgICAgICB0aGF0LmVudmlyb25tZW50cy5nZXQoZW52aXJvbm1lbnROYW1lKS5kZWFjdGl2YXRlKCk7XG4gICAgICAgIHRoYXQuY3VycmVudEVudmlyb25tZW50ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAkc2VjdGlvbkxpbmtzLnJlbW92ZUNsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgIHRoYXQuc3dpdGNoRW52aXJvbm1lbnQoZW52aXJvbm1lbnROYW1lKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoYWN0aXZlTW9kaWZpZXIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgc3dpdGNoRW52aXJvbm1lbnQoZW52aXJvbm1lbnROYW1lKSB7XG4gICAgdGhpcy5lbnZpcm9ubWVudHMuZ2V0KGVudmlyb25tZW50TmFtZSkuYWN0aXZhdGUoKTtcbiAgICB0aGlzLmN1cnJlbnRFbnZpcm9ubWVudCA9IGVudmlyb25tZW50TmFtZTtcbiAgfVxuXG4gIGNsZWFyU3RhY2thYmxlKCkge1xuICAgIHRoaXMuJHN0YWNrYWJsZS5lbXB0eSgpO1xuICB9XG5cbiAgY3JlYXRlU3RhY2thYmxlUGFuZSgpIHtcbiAgICBjb25zdCBwYW5lQ2xhc3MgPSBgJHt0aGlzLnNldHRpbmdzWydzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJ119X19wYW5lYDtcbiAgICBjb25zdCBtb2RpZmllciA9IHRoaXMuJHN0YWNrYWJsZS5maW5kKCcuJyArIHBhbmVDbGFzcykubGVuZ3RoID09PSAwID8gYCR7cGFuZUNsYXNzfS0tZmlyc3RgIDogJyc7XG4gICAgY29uc3QgJG5ld1BhbmUgPSAkKGA8ZGl2IGNsYXNzPVwiJHtwYW5lQ2xhc3N9ICR7bW9kaWZpZXJ9XCI+PC9kaXY+YCk7XG4gICAgdGhpcy4kc3RhY2thYmxlLmFwcGVuZCgkbmV3UGFuZSk7XG4gICAgcmV0dXJuICRuZXdQYW5lO1xuICB9XG5cbiAgbWF0ZXJpYWxCeU5hbWUobmFtZSkge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLm1hdGVyaWFscy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MubWF0ZXJpYWxzW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldCBmcmFtZUNvbnRlbnRXaW5kb3coKSB7XG4gICAgcmV0dXJuICQodGhpcy5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSlbMF0uY29udGVudFdpbmRvdztcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICAvLyBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLmZyYW1lQ29udGVudFdpbmRvdywgJ3NlcmlhbGl6ZUNvbnRlbnQnLCBbJ2xvZyddKTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmVudmlyb25tZW50cy5nZXQoJ3BhZ2Utc3RydWN0dXJlJykuc2VyaWFsaXplUGFnZSgpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICAvLyB3ZSBoYXZlIHJlc3VsdCB3aGljaCBpcyBjb250ZW50IGluIGZvcm1hdDpcbiAgICAvLyByZWdpb25cbiAgICAvLyAtLS0gbWF0ZXJpYWwgaWRcbiAgICAvLyAtLS0tLS0tIGtleXMgPT4gdmFsdWVzXG4gICAgLy9cbiAgICAvLyBvdXIgUHJvdmlkZXJzIHNob3VsZCBnZXQgb25seSB0aG9zZSBrZXlzIHRoYXQgdGhleSBwcm92aWRlXG4gICAgLy8gcHJvdmlkZWQga2V5cyBhcmUgc3RvcmVkIGluIGZyYW1lQ29udGVudFdpbmRvdy5NT05TVEVSX0VESVRfTU9ERV9EQVRBLnRlbXBsYXRlLnByb3ZpZGVkS2V5c1xuICAgIGNvbnN0IHJlc3VsdEJ5UHJvdmlkZXJzID0ge307XG4gICAgY29uc3QgcHJvdmlkZWRLZXlzID0gdGhpcy5mcmFtZUNvbnRlbnRXaW5kb3cuTU9OU1RFUl9FRElUX01PREVfREFUQS50ZW1wbGF0ZS5wcm92aWRlZEtleXM7XG5cbiAgICBmb3IgKGNvbnN0IHByb3ZpZGVySW5kZXggaW4gcHJvdmlkZWRLZXlzKSB7XG4gICAgICBpZiAocHJvdmlkZWRLZXlzLmhhc093blByb3BlcnR5KHByb3ZpZGVySW5kZXgpID09PSBmYWxzZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdID0ge307XG4gICAgICBjb25zdCByZWdpb25zID0gcHJvdmlkZWRLZXlzW3Byb3ZpZGVySW5kZXhdO1xuICAgICAgZm9yIChjb25zdCByZWdpb25LZXkgaW4gcmVnaW9ucykge1xuICAgICAgICBpZiAocmVnaW9ucy5oYXNPd25Qcm9wZXJ0eShyZWdpb25LZXkpID09PSBmYWxzZSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQuaGFzT3duUHJvcGVydHkocmVnaW9uS2V5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1twcm92aWRlckluZGV4XVtyZWdpb25LZXldID0ge307XG4gICAgICAgIC8vIGdvIGRlZXAgdG8gbWF0ZXJpYWwgaW5kZWNlc1xuICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSByZWdpb25zW3JlZ2lvbktleV07XG4gICAgICAgIGZvciAoY29uc3QgbWF0ZXJpYWxJbmRleCBpbiBtYXRlcmlhbHMpIHtcbiAgICAgICAgICBpZiAobWF0ZXJpYWxzLmhhc093blByb3BlcnR5KG1hdGVyaWFsSW5kZXgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHRbcmVnaW9uS2V5XS5oYXNPd25Qcm9wZXJ0eShtYXRlcmlhbEluZGV4KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1twcm92aWRlckluZGV4XVtyZWdpb25LZXldW21hdGVyaWFsSW5kZXhdID0ge307XG4gICAgICAgICAgY29uc3QgZGF0YUtleXMgPSBtYXRlcmlhbHNbbWF0ZXJpYWxJbmRleF07XG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgZGF0YUtleXMpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHRbcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XS5oYXNPd25Qcm9wZXJ0eShrZXkpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzXG4gICAgICAgICAgICAgIFtwcm92aWRlckluZGV4XVxuICAgICAgICAgICAgICBbcmVnaW9uS2V5XVxuICAgICAgICAgICAgICBbbWF0ZXJpYWxJbmRleF1cbiAgICAgICAgICAgICAgW2tleV0gPSByZXN1bHRbcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0QnlQcm92aWRlcnM7XG4gIH1cblxuICBwYWdlQ2hhbmdlZCgpIHtcbiAgICBmb3IgKGNvbnN0IGVudmlyb25tZW50IG9mIHRoaXMuZW52aXJvbm1lbnRzKSB7XG4gICAgICBlbnZpcm9ubWVudFsxXS5wYWdlQ2hhbmdlZCgpO1xuICAgIH1cbiAgfVxuXG4gIGxvZyhyZXN1bHQpIHtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICB9XG5cbiAgY29udHJvbHMoKSB7XG4gICAgdGhpcy4kY29udHJvbHMgPSB0aGlzLiRidWlsZGVyLmZpbmQoJy5jb250cm9scycpO1xuICAgIGNvbnN0IGJ1aWxkZXIgPSB0aGlzO1xuICAgIHRoaXMuJGNvbnRyb2xzLmZpbmQoJy5jb250cm9sc19fcmVmcmVzaCcpLmNsaWNrKGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICBidWlsZGVyLmZyYW1lQ29udGVudFdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLiRjb250cm9scy5maW5kKCcuY29udHJvbHNfX3NhdmUnKS5jbGljayhmdW5jdGlvbiBoYW5kbGVyKCkge1xuXG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IGJ1aWxkZXIuZnJhbWVDb250ZW50V2luZG93LmxvY2F0aW9uLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgIHByb3ZpZGVyc0VudGl0aWVzOiBidWlsZGVyLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgcmVnaW9uc01hdGVyaWFsczogYnVpbGRlci5lbnZpcm9ubWVudHMuZ2V0KCdwYWdlLXN0cnVjdHVyZScpLm1hdGVyaWFsc0J5UmVnaW9ucygpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYWN0aW9uOiAnc2F2ZScsXG4gICAgICAgIH0pLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBvayhkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gZXJyKGRhdGEsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbEJ1aWxkZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9WaXN1YWxCdWlsZGVyLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd3lzaXd5Zygkbm9kZSkge1xuICByZXR1cm4gJG5vZGUuaHRtbCgpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL1dZU0lXWUcuanNcbiAqKi8iLCJpbXBvcnQgV1lTSVdZRyBmcm9tICcuL1dZU0lXWUcnO1xuaW1wb3J0IGltYWdlIGZyb20gJy4vaW1hZ2UnO1xuaW1wb3J0IGxpbmsgZnJvbSAnLi9saW5rJztcbmltcG9ydCBTdHJpbmdFZGl0YWJsZSBmcm9tICcuL3N0cmluZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFsbCgpIHtcbiAgaWYgKHR5cGVvZih3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVMpID09PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFUyA9IHt9O1xuICB9XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snd3lzaXd5ZyddID0gV1lTSVdZRztcbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWydsaW5rJ10gPSBsaW5rO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ2ltYWdlJ10gPSBpbWFnZTtcbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWydzdHJpbmcnXSA9IFN0cmluZ0VkaXRhYmxlO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9hbGwuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigkbm9kZSkge1xuICByZXR1cm4gJG5vZGUudGV4dCgpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lZGl0YWJsZXMvc3RyaW5nLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIEFjdGlvbkVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcblxufVxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQWN0aW9uRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgQ3VzdG9taXphdGlvbkVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcblxufVxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9taXphdGlvbkVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBNYXRlcmlhbHNFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICBzdXBlcih2aXN1YWxCdWlsZGVyLCBuYW1lKTtcbiAgICB0aGlzLmluaXRNYXRlcmlhbHNTZWxlY3RvcigpO1xuICB9XG5cbiAgaW5pdE1hdGVyaWFsc1NlbGVjdG9yKCkge1xuICAgIHRoaXMuJG1hdGVyaWFsc0dyb3VwcyA9ICQoYDx1bCBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNcIj48L3VsPmApO1xuICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QgPSBbXTtcblxuICAgIGZvciAoY29uc3QgYnVuZGxlIG9mIHRoaXMudmlzdWFsQnVpbGRlci5zZXR0aW5ncy5idW5kbGVzKSB7XG4gICAgICBjb25zdCBpMThuQnVuZGxlTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnID8gcG9seWdsb3QudChidW5kbGUubmFtZSkgOiBidW5kbGUubmFtZTtcblxuICAgICAgbGV0ICRidW5kbGVUaXRsZSA9IGBcbiAgICAgIDxsaSBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX2l0ZW0gbWF0ZXJpYWxzLWdyb3Vwc19faXRlbS0tYnVuZGxlLWxhYmVsXCI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtYnVuZGxlXCIgZGF0YS1idW5kbGUtcGF0aD1cIlwiJHtidW5kbGUuZnVsbFBhdGh9PlxuICAgICAgICAgICAgJHtpMThuQnVuZGxlTmFtZX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICAgIGA7XG4gICAgICB0aGlzLiRtYXRlcmlhbHNMaXN0LnB1c2goJGJ1bmRsZVRpdGxlKTtcblxuICAgICAgZm9yIChjb25zdCBncm91cCBvZiBidW5kbGUuZ3JvdXBzKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwTmFtZSA9IGdyb3VwLm5hbWU7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IGdyb3VwLm1hdGVyaWFscztcbiAgICAgICAgY29uc3QgaTE4bkdyb3VwTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnID8gcG9seWdsb3QudChncm91cE5hbWUpIDogZ3JvdXBOYW1lO1xuICAgICAgICBjb25zdCAkbGkgPSAkKGBcbiAgICA8bGkgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19pdGVtXCI+XG4gICAgICA8YSBocmVmPVwiI1wiIGRhdGEtZ3JvdXAtcGF0aD1cIiR7Z3JvdXAuZnVsbFBhdGh9XCIgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXBcIj5cbiAgICAgICAgJHtpMThuR3JvdXBOYW1lfSA8c3BhbiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX2NvdW50XCI+KCR7bWF0ZXJpYWxzLmxlbmd0aH0pPC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvbGk+YCk7XG4gICAgICAgIHRoaXMuJG1hdGVyaWFsc0dyb3Vwcy5hcHBlbmQoJGxpKTtcbiAgICAgICAgY29uc3QgJGxpc3QgPSAkKGA8dWwgY2xhc3M9XCJtYXRlcmlhbHMtbGlzdFwiIGRhdGEtZ3JvdXAtcGF0aD1cIiR7Z3JvdXAuZnVsbFBhdGh9XCI+PC91bD5gKTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBtYXRlcmlhbCBvZiBtYXRlcmlhbHMpIHtcbiAgICAgICAgICBjb25zdCBtYXRlcmlhbE5hbWUgPSBtYXRlcmlhbC5uYW1lO1xuICAgICAgICAgIGNvbnN0IGkxOG5NYXRlcmlhbE5hbWUgPSB0eXBlb2YocG9seWdsb3QpICE9PSAndW5kZWZpbmVkJyA/IHBvbHlnbG90LnQobWF0ZXJpYWxOYW1lKSA6IG1hdGVyaWFsTmFtZTtcbiAgICAgICAgICBjb25zdCAkaXRlbSA9ICQoYFxuPGxpPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWF0ZXJpYWxzLWxpc3RfX2l0ZW1cIiBkYXRhLW1hdGVyaWFsLXBhdGg9XCIke21hdGVyaWFsLmZ1bGxQYXRofVwiPiR7aTE4bk1hdGVyaWFsTmFtZX08L2E+XG48L2xpPlxuYCk7XG4gICAgICAgICAgaXRlbXMucHVzaCgkaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgJGxpc3QuYXBwZW5kKGl0ZW1zKTtcbiAgICAgICAgdGhpcy4kbWF0ZXJpYWxzTGlzdC5wdXNoKCRsaXN0KTtcblxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJywgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgY29uc3QgYWN0aXZlQ2xhc3MgPSAnbWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwLS1hY3RpdmUnO1xuICAgICAgJHRoaXMudG9nZ2xlQ2xhc3MoYWN0aXZlQ2xhc3MpO1xuICAgICAgY29uc3QgZ3JvdXBQYXRoID0gJHRoaXMuZGF0YSgnZ3JvdXBQYXRoJyk7XG4gICAgICBpZiAoJHRoaXMuaGFzQ2xhc3MoYWN0aXZlQ2xhc3MpKSB7XG4gICAgICAgICQoJy5tYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAnKS5yZW1vdmVDbGFzcyhhY3RpdmVDbGFzcyk7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsc0xpc3RBY3RpdmVDbGFzcyA9ICdtYXRlcmlhbHMtbGlzdC0tYWN0aXZlJztcblxuICAgICAgICAkKCcubWF0ZXJpYWxzLWxpc3QnKS5lYWNoKGZ1bmN0aW9uIGl0KCkge1xuICAgICAgICAgIGNvbnN0ICRsaXN0ID0gJCh0aGlzKTtcbiAgICAgICAgICBpZiAoJGxpc3QuaGFzQ2xhc3MobWF0ZXJpYWxzTGlzdEFjdGl2ZUNsYXNzKSkge1xuICAgICAgICAgICAgJGxpc3QucmVtb3ZlQ2xhc3MobWF0ZXJpYWxzTGlzdEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCRsaXN0LmRhdGEoJ2dyb3VwUGF0aCcpID09PSBncm91cFBhdGgpIHtcbiAgICAgICAgICAgICRsaXN0LmFkZENsYXNzKG1hdGVyaWFsc0xpc3RBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkdGhpcy5hZGRDbGFzcyhhY3RpdmVDbGFzcyk7XG4gICAgICAgIHRoYXQuJG1hdGVyaWFsc1BhbmUuc2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhhdCdzIGp1c3Qgc2Vjb25kIGNsaWNrIG9uIHRoZSBzYW1lIGdyb3VwXG4gICAgICAgIHRoYXQuJG1hdGVyaWFsc1BhbmUuaGlkZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWF0ZXJpYWxzLWxpc3RfX2l0ZW0nLCBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICB0aGF0LnNlbmRNZXNzYWdlKFxuICAgICAgICAnbmV3QmxvY2snLFxuICAgICAgICBbXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKCdtYXRlcmlhbFBhdGgnKSxcbiAgICAgICAgICAnY29udGVudCdcbiAgICAgICAgXVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHN1cGVyLmFjdGl2YXRlKCk7XG5cbiAgICB0aGlzLiRncm91cHNQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRncm91cHNQYW5lLmFwcGVuZCh0aGlzLiRtYXRlcmlhbHNHcm91cHMpO1xuXG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZS5hcHBlbmQodGhpcy4kbWF0ZXJpYWxzTGlzdCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZS5oaWRlKCk7XG5cbiAgICAkKCcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ21hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cC0tYWN0aXZlJyk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFsc0Vudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5pbXBvcnQgUmVnaW9uIGZyb20gJy4vLi4vUGFnZVN0cnVjdHVyZUNvbXBvbmVudHMvUmVnaW9uJztcblxuY2xhc3MgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IodmlzdWFsQnVpbGRlciwgbmFtZSkge1xuICAgIHN1cGVyKHZpc3VhbEJ1aWxkZXIsIG5hbWUpO1xuICAgIHRoaXMuaW5pdFBhZ2VTdHJ1Y3R1cmVFbGVtZW50KCk7XG4gICAgdGhpcy5lZGl0TW9kZURhdGEgPSB7fTtcbiAgfVxuXG4gIGluaXRQYWdlU3RydWN0dXJlRWxlbWVudCgpIHtcbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlID0gJChgPHVsIGNsYXNzPVwicGFnZS1zdHJ1Y3R1cmVcIj48L3VsPmApXG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICBzdXBlci5hY3RpdmF0ZSgpO1xuXG4gICAgdGhpcy4kc3RydWN0dXJlUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kc3RydWN0dXJlUGFuZS5hcHBlbmQodGhpcy4kcGFnZVN0cnVjdHVyZSk7XG4gIH1cbiAgXG4gIHBhZ2VDaGFuZ2VkKCkge1xuICAgIHN1cGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5maW5kKCdsaScpLnJlbW92ZSgpO1xuICAgIGNvbnN0IHJlZ2lvbnMgPSB0aGlzLnRhcmdldC4kKCcubS1tb25zdGVyLWNvbnRlbnRfX2NvbnRlbnQnKTtcbiAgICBjb25zdCBlbnZpcm9ubWVudCA9IHRoaXM7XG4gICAgdGhpcy5yZWdpb25zU3RydWN0dXJlID0ge307XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgcmVnaW9ucy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCAkcmVnaW9uTm9kZSA9ICQodGhpcyk7XG4gICAgICBjb25zdCByZWdpb25PYmplY3QgPSBuZXcgUmVnaW9uKCRyZWdpb25Ob2RlKTtcbiAgICAgIGNvbnN0ICRyZWdpb25MaSA9IHJlZ2lvbk9iamVjdC5wcm9jZXNzUmVnaW9uKCk7XG4gICAgICB0aGF0LnJlZ2lvbnNTdHJ1Y3R1cmVbcmVnaW9uT2JqZWN0LmtleV0gPSByZWdpb25PYmplY3Q7XG4gICAgICBlbnZpcm9ubWVudC4kcGFnZVN0cnVjdHVyZS5hcHBlbmQoJHJlZ2lvbkxpKTtcbiAgICB9KTtcbiAgICB0aGlzLmVkaXRNb2RlRGF0YSA9IHRoaXMudGFyZ2V0Lk1PTlNURVJfRURJVF9NT0RFX0RBVEE7XG4gIH1cbiAgXG4gIHNlcmlhbGl6ZVBhZ2UoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCByZWdpb25LZXkgaW4gdGhpcy5yZWdpb25zU3RydWN0dXJlKSB7XG4gICAgICBpZiAodGhpcy5yZWdpb25zU3RydWN0dXJlLmhhc093blByb3BlcnR5KHJlZ2lvbktleSkpIHtcbiAgICAgICAgY29uc3QgcmVnaW9uID0gdGhpcy5yZWdpb25zU3RydWN0dXJlW3JlZ2lvbktleV07XG4gICAgICAgIHJlc3VsdFtyZWdpb24ua2V5XSA9IHJlZ2lvbi5zZXJpYWxpemUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIG1hdGVyaWFsc0J5UmVnaW9ucygpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IHJlZ2lvbktleSBpbiB0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUpIHtcbiAgICAgIGlmICh0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUuaGFzT3duUHJvcGVydHkocmVnaW9uS2V5KSkge1xuICAgICAgICBjb25zdCByZWdpb24gPSB0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmVbcmVnaW9uS2V5XTtcbiAgICAgICAgcmVzdWx0W3JlZ2lvbi5rZXldID0gcmVnaW9uLm1hdGVyaWFsc0RlY2woKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzXG4gKiovIiwiY2xhc3MgSGFzaEFwaSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZnVuY3Rpb25DYWxscyA9IHt9O1xuXG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBkb2N1bWVudC5sb2NhdGlvbi5oYXNoLm1hdGNoKC8jaGFzaEFwaTooLio/KTpcXC9oYXNoQXBpLyk7XG4gICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBjb25zdCBmdW5jdGlvbkNhbGxzID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQobWF0Y2hlc1sxXSkpO1xuXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBmdW5jdGlvbkNhbGxzKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uZnVuYykge1xuICAgICAgICAgICAgdGhpcy5mdW5jdGlvbkNhbGxzW2l0ZW0uZnVuY10gPSBpdGVtLmFyZ3MgfHwge307XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2hvdWxkQ2FsbChmdW5jKSB7XG4gICAgcmV0dXJuIHRoaXMuZnVuY3Rpb25DYWxsc1tmdW5jXSB8fCBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIYXNoQXBpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9IYXNoQXBpLmpzXG4gKiovIiwiaW1wb3J0IEZyYW1lQXBpIGZyb20gJy4vRnJhbWVBcGknO1xuaW1wb3J0IHVuaXF1ZUlkIGZyb20gJy4vLi4vdW5pcWlkJztcblxuY2xhc3MgVmlzdWFsRnJhbWVcbntcbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICB0aGlzLnBhcmFtcygpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKClcbiAgICB7XG4gICAgICAgIEZyYW1lQXBpLmJpbmRNZXNzYWdlTGlzdGVuZXIodGhpcyk7XG4gICAgICAgIHRoaXMucGFyZW50V2luZG93ID0gd2luZG93LnBhcmVudDtcbiAgICAgICAgLyoqIEB2YXIgRnJvbnRlbmRNb25zdGVyICovXG4gICAgICAgIHRoaXMucGFyZW50TW9uc3RlciA9IHRoaXMucGFyZW50V2luZG93LkZyb250ZW5kTW9uc3RlcjtcbiAgICAgICAgdGhpcy5wYXJlbnRCdWlsZGVyID0gdGhpcy5wYXJlbnRNb25zdGVyLmJ1aWxkZXI7XG4gICAgICAgIHRoaXMuY3VycmVudE1vbnN0ZXJDb250ZW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWFrZUl0TW92ZSgpO1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGF0LnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB0aGlzLnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICB9XG5cbiAgICBnZXQgJG1vbnN0ZXJDb250ZW50KClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLiRtb25zdGVyQ29udGVudENhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZnJlc2hNb25zdGVyQ29udGVudENhY2hlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlO1xuICAgIH1cblxuICAgIHJlZnJlc2hNb25zdGVyQ29udGVudENhY2hlKClcbiAgICB7XG4gICAgICAgIHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGUgPSB7fTtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgICQodGhpcy5zZXR0aW5nc1snbW9uc3Rlci1jb250ZW50LXNlbGVjdG9yJ10pLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgICAgICAgIGlmICghdGhhdC5jdXJyZW50TW9uc3RlckNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGF0LmN1cnJlbnRNb25zdGVyQ29udGVudCA9ICQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGF0LiRtb25zdGVyQ29udGVudENhY2hlWyQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyldID0gJCh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0TmV3TWF0ZXJpYWxJbmRleCgpXG4gICAge1xuICAgICAgICBpZiAoIXRoaXMubGFzdE1hdGVyaWFsSW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBsYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgJCgnW2RhdGEtaXMtbWF0ZXJpYWxdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5kYXRhKCdtYXRlcmlhbC1pbmRleCcpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBsYXN0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubGFzdE1hdGVyaWFsSW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0TWF0ZXJpYWxJbmRleCsrO1xuICAgICAgICByZXR1cm4gdGhpcy5sYXN0TWF0ZXJpYWxJbmRleDtcbiAgICB9XG5cbiAgICB1cGRhdGVIYW5kbGVycygpXG4gICAge1xuICAgICAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCAmJiB0aGlzLiRoYW5kbGVycykge1xuICAgICAgICAgICAgdGhpcy4kaGFuZGxlcnMuY3NzKFxuICAgICAgICAgICAgICAgICd0b3AnLFxuICAgICAgICAgICAgICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwucG9zaXRpb24oKS50b3AgKyB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLmhlaWdodCgpIC0gdGhpcy4kaGFuZGxlcnMuaGVpZ2h0KClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLmFkZENsYXNzKCdtLW1vbnN0ZXItY29udGVudF9fbWF0ZXJpYWwtLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFrZUl0TW92ZSgpXG4gICAge1xuICAgICAgICB0aGlzLiRoYW5kbGVycyA9ICQoYFxuPGRpdiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNcIj5cbiAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fY29uZmlndXJlXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY29nXCI+PC9pPlxuICAgIDwvYT5cbiAgICA8c3BhbiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX2Jsb2NrLW5hbWVcIj5CbG9jayBuYW1lIGhlcmU8L3NwYW4+XG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtdXBcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS11cFwiPjwvaT5cbiAgICA8L2E+XG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtZG93blwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvd25cIj48L2k+XG4gICAgPC9hPlxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19jbG9uZVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNsb25lXCI+PC9pPlxuICAgIDwvYT5cbiAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fcmVtb3ZlXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+XG4gICAgPC9hPlxuPC9kaXY+YCk7XG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQodGhpcy4kaGFuZGxlcnMpO1xuICAgICAgICB0aGlzLiRoYW5kbGVycy5oaWRlKCk7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICAkKHRoaXMuc2V0dGluZ3NbJ21vbnN0ZXItY29udGVudC1zZWxlY3RvciddKS5vbih7XG4gICAgICAgICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbiBob3ZlckluKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1oaWdobGlnaHRlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlbGVhdmU6IGZ1bmN0aW9uIGhvdmVyT3V0KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1oaWdobGlnaHRlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoYXQuc2VsZWN0TWF0ZXJpYWwoJHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAnW2RhdGEtaXMtbWF0ZXJpYWxdJyk7XG4gICAgICAgIHRoYXQuJGhhbmRsZXJzLm9uKCdjbGljaycsICcubW9uc3Rlci1ibG9jay1oYW5kbGVyc19fbW92ZS11cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgJHByZXYgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLnByZXYoJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICAgICAgICAgICAgIGlmICgkcHJldi5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLmluc2VydEJlZm9yZSgkcHJldik7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlSGFuZGxlcnMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pLm9uKCdjbGljaycsICcubW9uc3Rlci1ibG9jay1oYW5kbGVyc19fbW92ZS1kb3duJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgIHZhciAkbmV4dCA9IHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwubmV4dCgnW2RhdGEtaXMtbWF0ZXJpYWxdJyk7XG4gICAgICAgICAgICAgICAgaWYgKCRuZXh0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwuaW5zZXJ0QWZ0ZXIoJG5leHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KS5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX2Nsb25lJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgIHZhciAkY2xvbmVkTWF0ZXJpYWwgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgJGNsb25lZE1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsLWluZGV4JywgdGhhdC5nZXROZXdNYXRlcmlhbEluZGV4KCkpLmluc2VydEFmdGVyKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpO1xuICAgICAgICAgICAgICAgIHRoYXQuc2VsZWN0TWF0ZXJpYWwoJGNsb25lZE1hdGVyaWFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSkub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19yZW1vdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgdGhpcyBtYXRlcmlhbD8nKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kaGFuZGxlcnMuaGlkZSgpOyAvLyBpdCBkb2VzIG5vdCB3b3JrLiB3aHk/IE5lZWQgdG8gZml4IVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VsZWN0TWF0ZXJpYWwoJG1hdGVyaWFsKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwgPT09ICRtYXRlcmlhbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICAgICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLnJlbW92ZUNsYXNzKCdtLW1vbnN0ZXItY29udGVudF9fbWF0ZXJpYWwtLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwgPSAkbWF0ZXJpYWw7XG4gICAgICAgIHRoaXMudXBkYXRlSGFuZGxlcnMoKTtcbiAgICAgICAgdGhpcy4kaGFuZGxlcnMuc2hvdygpO1xuICAgIH1cblxuICAgIHNlcmlhbGl6ZUNvbnRlbnQoY2FsbGJhY2spXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGZvciAoY29uc3QgdW5pcXVlQ29udGVudElkIGluIHRoaXMuJG1vbnN0ZXJDb250ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kbW9uc3RlckNvbnRlbnQuaGFzT3duUHJvcGVydHkodW5pcXVlQ29udGVudElkKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRtb25zdGVyID0gdGhpcy4kbW9uc3RlckNvbnRlbnRbdW5pcXVlQ29udGVudElkXTtcbiAgICAgICAgICAgICAgICByZXN1bHRbJG1vbnN0ZXIuZGF0YSgndW5pcXVlQ29udGVudElkJyldID0gdGhhdC5zZXJpYWxpemVVbmlxdWVDb250ZW50KCRtb25zdGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbmRUb0J1aWxkZXIoY2FsbGJhY2ssIFtyZXN1bHRdKTtcbiAgICB9XG5cbiAgICBzZXJpYWxpemVVbmlxdWVDb250ZW50KCRtb25zdGVyQ29udGVudClcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgICAgICByZXN1bHQudW5pcXVlQ29udGVudElkID0gJG1vbnN0ZXJDb250ZW50LmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpO1xuICAgICAgICByZXN1bHQubWF0ZXJpYWxzID0ge307XG4gICAgICAgICRtb25zdGVyQ29udGVudC5maW5kKCdbZGF0YS1pcy1tYXRlcmlhbD1cXCcxXFwnXScpLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0ge307XG4gICAgICAgICAgICBtYXRlcmlhbC5ibG9jayA9ICQodGhpcykuZGF0YSgnbWF0ZXJpYWxCbG9jaycpO1xuICAgICAgICAgICAgcmVzdWx0Lm1hdGVyaWFsc1skKHRoaXMpLmRhdGEoJ21hdGVyaWFsSW5kZXgnKV0gPSBtYXRlcmlhbDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBWaXN1YWxGcmFtZSBzZXR0aW5ncy5cbiAgICAgKiBVc2VzIFZpc3VhbEZyYW1lU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBwYXJhbXMoKVxuICAgIHtcbiAgICAgICAgY29uc3QgdXNlclNldHRpbmdzID0gd2luZG93LlZpc3VhbEZyYW1lU2V0dGluZ3MgfHwge307XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgICAgICAgJ21vbnN0ZXItY29udGVudC1zZWxlY3Rvcic6ICcubS1tb25zdGVyLWNvbnRlbnRfX2NvbnRlbnQnXG4gICAgICAgIH07XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHVzZXJTZXR0aW5ncykge1xuICAgICAgICAgICAgaWYgKHVzZXJTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB9XG5cbiAgICBzZW5kVG9CdWlsZGVyKGZ1bmMsIGFyZ3MpXG4gICAge1xuICAgICAgICBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLnBhcmVudFdpbmRvdywgZnVuYywgYXJncyk7XG4gICAgfVxuXG4gICAgbmV3QmxvY2sobWF0ZXJpYWxOYW1lLCByZWdpb25OYW1lKVxuICAgIHtcbiAgICAgICAgLy8gQHRvZG8gQWRkIGxvYWRlciBoZXJlIGFzIHdlIGFyZSB1c2luZyBmb3JtIHBvc3QgIVxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSB1bmlxdWVJZCgnbWF0Jyk7XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgIHByb3ZpZGVyc0VudGl0aWVzOiB0aGlzLnBhcmVudEJ1aWxkZXIuc2VyaWFsaXplKCksXG4gICAgICAgICAgICByZWdpb25zTWF0ZXJpYWxzOiB0aGlzLnBhcmVudEJ1aWxkZXIuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKS5tYXRlcmlhbHNCeVJlZ2lvbnMoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFjdGlvbjogJ3JlbmRlci1tYXRlcmlhbCcsXG4gICAgICAgICAgbWF0ZXJpYWxJZDogcmFuZG9tSW5kZXgsXG4gICAgICAgICAgbWF0ZXJpYWxSZWdpb246IHJlZ2lvbk5hbWUsXG4gICAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsTmFtZVxuICAgICAgICB9O1xuICAgICAgICBpZiAobmV3RGF0YS50ZW1wbGF0ZS5yZWdpb25zTWF0ZXJpYWxzLmhhc093blByb3BlcnR5KHJlZ2lvbk5hbWUpID09PSBmYWxzZSkge1xuICAgICAgICAgIG5ld0RhdGEudGVtcGxhdGUucmVnaW9uc01hdGVyaWFsc1tyZWdpb25OYW1lXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3RGF0YS50ZW1wbGF0ZS5yZWdpb25zTWF0ZXJpYWxzW3JlZ2lvbk5hbWVdW3JhbmRvbUluZGV4XSA9IHttYXRlcmlhbDogbWF0ZXJpYWxOYW1lfTtcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCc8Zm9ybSBtZXRob2Q9XCJQT1NUXCI+PC9mb3JtPicpO1xuICAgICAgICBjb25zdCAkaW5wdXQgPSAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfX2pzb25cIj4nKTtcbiAgICAgICAgY29uc3QgJGNzcmYgPSAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiPicpO1xuXG4gICAgICAgICRjc3JmXG4gICAgICAgICAgLmF0dHIoJ25hbWUnLCAkKCdtZXRhW25hbWU9Y3NyZi1wYXJhbV0nKS5hdHRyKCdjb250ZW50JykpXG4gICAgICAgICAgLnZhbCgkKCdtZXRhW25hbWU9Y3NyZi10b2tlbl0nKS5hdHRyKCdjb250ZW50JykpXG4gICAgICAgICAgLmFwcGVuZFRvKCRmb3JtKTtcblxuICAgICAgICAkaW5wdXRcbiAgICAgICAgICAudmFsKEpTT04uc3RyaW5naWZ5KG5ld0RhdGEpKVxuICAgICAgICAgIC5hcHBlbmRUbygkZm9ybSk7XG5cbiAgICAgICAgJGZvcm1bMF0uc3VibWl0KCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyAkLmFqYXgoe1xuICAgICAgICAvLyAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24sXG4gICAgICAgIC8vICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgLy8gICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgLy8gICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgICAgIC8vICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAvLyAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkobmV3RGF0YSksXG4gICAgICAgIC8vIH0pLmRvbmUoZnVuY3Rpb24gb2soZGF0YSkge1xuICAgICAgICAvLyAgICAgY29uc3QgJGVsZW1lbnQgPSAkKGRhdGEpO1xuICAgICAgICAvLyAgICAgdGhhdC4kbW9uc3RlckNvbnRlbnRbdGhhdC5jdXJyZW50TW9uc3RlckNvbnRlbnRdLmFwcGVuZCgkZWxlbWVudCk7XG4gICAgICAgIC8vICAgICB0aGlzLnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAgICAgLy8gICAgIC8qIGdsb2JhbCBzbW9vdGhTY3JvbGw6ZmFsc2UgKi9cbiAgICAgICAgLy8gICAgIHNtb290aFNjcm9sbC5hbmltYXRlU2Nyb2xsKCRlbGVtZW50WzBdLm9mZnNldFRvcCk7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsRnJhbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL1Zpc3VhbEZyYW1lLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHVuaXFpZCAocHJlZml4LCBtb3JlRW50cm9weSkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3VuaXFpZC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICByZXZpc2VkIGJ5OiBLYW5rcmVsdW5lIChodHRwOi8vd3d3LndlYmZha3RvcnkuaW5mby8pXG4gIC8vICAgICAgbm90ZSAxOiBVc2VzIGFuIGludGVybmFsIGNvdW50ZXIgKGluIGxvY3V0dXMgZ2xvYmFsKSB0byBhdm9pZCBjb2xsaXNpb25cbiAgLy8gICBleGFtcGxlIDE6IHZhciAkaWQgPSB1bmlxaWQoKVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRyZXN1bHQgPSAkaWQubGVuZ3RoID09PSAxM1xuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogdmFyICRpZCA9IHVuaXFpZCgnZm9vJylcbiAgLy8gICBleGFtcGxlIDI6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gKDEzICsgJ2ZvbycubGVuZ3RoKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMzogdmFyICRpZCA9IHVuaXFpZCgnYmFyJywgdHJ1ZSlcbiAgLy8gICBleGFtcGxlIDM6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gKDIzICsgJ2JhcicubGVuZ3RoKVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuXG4gIGlmICh0eXBlb2YgcHJlZml4ID09PSAndW5kZWZpbmVkJykge1xuICAgIHByZWZpeCA9ICcnXG4gIH1cblxuICB2YXIgcmV0SWRcbiAgdmFyIF9mb3JtYXRTZWVkID0gZnVuY3Rpb24gKHNlZWQsIHJlcVdpZHRoKSB7XG4gICAgc2VlZCA9IHBhcnNlSW50KHNlZWQsIDEwKS50b1N0cmluZygxNikgLy8gdG8gaGV4IHN0clxuICAgIGlmIChyZXFXaWR0aCA8IHNlZWQubGVuZ3RoKSB7XG4gICAgICAvLyBzbyBsb25nIHdlIHNwbGl0XG4gICAgICByZXR1cm4gc2VlZC5zbGljZShzZWVkLmxlbmd0aCAtIHJlcVdpZHRoKVxuICAgIH1cbiAgICBpZiAocmVxV2lkdGggPiBzZWVkLmxlbmd0aCkge1xuICAgICAgLy8gc28gc2hvcnQgd2UgcGFkXG4gICAgICByZXR1cm4gQXJyYXkoMSArIChyZXFXaWR0aCAtIHNlZWQubGVuZ3RoKSkuam9pbignMCcpICsgc2VlZFxuICAgIH1cbiAgICByZXR1cm4gc2VlZFxuICB9XG5cbiAgdmFyICRnbG9iYWwgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBHTE9CQUwpXG4gICRnbG9iYWwuJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzIHx8IHt9XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXNcbiAgJGxvY3V0dXMucGhwID0gJGxvY3V0dXMucGhwIHx8IHt9XG5cbiAgaWYgKCEkbG9jdXR1cy5waHAudW5pcWlkU2VlZCkge1xuICAgIC8vIGluaXQgc2VlZCB3aXRoIGJpZyByYW5kb20gaW50XG4gICAgJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAweDc1YmNkMTUpXG4gIH1cbiAgJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQrK1xuXG4gIC8vIHN0YXJ0IHdpdGggcHJlZml4LCBhZGQgY3VycmVudCBtaWxsaXNlY29uZHMgaGV4IHN0cmluZ1xuICByZXRJZCA9IHByZWZpeFxuICByZXRJZCArPSBfZm9ybWF0U2VlZChwYXJzZUludChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDAsIDEwKSwgOClcbiAgLy8gYWRkIHNlZWQgaGV4IHN0cmluZ1xuICByZXRJZCArPSBfZm9ybWF0U2VlZCgkbG9jdXR1cy5waHAudW5pcWlkU2VlZCwgNSlcbiAgaWYgKG1vcmVFbnRyb3B5KSB7XG4gICAgLy8gZm9yIG1vcmUgZW50cm9weSB3ZSBhZGQgYSBmbG9hdCBsb3dlciB0byAxMFxuICAgIHJldElkICs9IChNYXRoLnJhbmRvbSgpICogMTApLnRvRml4ZWQoOCkudG9TdHJpbmcoKVxuICB9XG5cbiAgcmV0dXJuIHJldElkXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3VuaXFpZC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGltYWdlKCRub2RlKSB7XG4gIGNvbnN0ICRpbWcgPSAkbm9kZS5maW5kKCdpbWcnKS5maXJzdCgpO1xuICByZXR1cm4ge1xuICAgIHNyYzogJGltZy5hdHRyKCdzcmMnKSxcbiAgICBhbHQ6ICRpbWcuYXR0cignYWx0JyksXG4gIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lZGl0YWJsZXMvaW1hZ2UuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaW5rKCRub2RlKSB7XG4gIHJldHVybiB7XG4gICAgc3JjOiAkbm9kZS5hdHRyKCdocmVmJyksXG4gICAgYW5jaG9yOiAkbm9kZS5odG1sKCksXG4gIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lZGl0YWJsZXMvbGluay5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=