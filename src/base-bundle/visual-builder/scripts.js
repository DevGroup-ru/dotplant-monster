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
	
	__webpack_require__(24);
	
	var _FrontendMonster = __webpack_require__(4);
	
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _VisualBuilder = __webpack_require__(8);
	
	var _VisualBuilder2 = _interopRequireDefault(_VisualBuilder);
	
	var _VisualFrame = __webpack_require__(21);
	
	var _VisualFrame2 = _interopRequireDefault(_VisualFrame);
	
	var _HashApi = __webpack_require__(20);
	
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _all = __webpack_require__(10);
	
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
/* 6 */
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Material = __webpack_require__(6);
	
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _SiteStructureEnvironment = __webpack_require__(18);
	
	var _SiteStructureEnvironment2 = _interopRequireDefault(_SiteStructureEnvironment);
	
	var _MaterialsEnvironment = __webpack_require__(16);
	
	var _MaterialsEnvironment2 = _interopRequireDefault(_MaterialsEnvironment);
	
	var _CustomizationEnvironment = __webpack_require__(15);
	
	var _CustomizationEnvironment2 = _interopRequireDefault(_CustomizationEnvironment);
	
	var _ActionEnvironment = __webpack_require__(14);
	
	var _ActionEnvironment2 = _interopRequireDefault(_ActionEnvironment);
	
	var _PageStructureEnvironment = __webpack_require__(17);
	
	var _PageStructureEnvironment2 = _interopRequireDefault(_PageStructureEnvironment);
	
	var _FrameApi = __webpack_require__(2);
	
	var _FrameApi2 = _interopRequireDefault(_FrameApi);
	
	var _Editable = __webpack_require__(5);
	
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
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = all;
	
	var _WYSIWYG = __webpack_require__(9);
	
	var _WYSIWYG2 = _interopRequireDefault(_WYSIWYG);
	
	var _image = __webpack_require__(11);
	
	var _image2 = _interopRequireDefault(_image);
	
	var _link = __webpack_require__(12);
	
	var _link2 = _interopRequireDefault(_link);
	
	var _string = __webpack_require__(13);
	
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _BaseEnvironment2 = __webpack_require__(1);
	
	var _BaseEnvironment3 = _interopRequireDefault(_BaseEnvironment2);
	
	var _Region = __webpack_require__(7);
	
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
/* 19 */
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
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _FrameApi = __webpack_require__(2);
	
	var _FrameApi2 = _interopRequireDefault(_FrameApi);
	
	var _uniqid = __webpack_require__(19);
	
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
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWQ3NWI5MjFkMWE0YTM0MWFmNDQiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvRnJvbnRlbmRNb25zdGVyLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9FZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZUNvbXBvbmVudHMvTWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1BhZ2VTdHJ1Y3R1cmVDb21wb25lbnRzL1JlZ2lvbi5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL1dZU0lXWUcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVB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Q0FBZjtBQUNBLGlCQUFNLFFBQVEsRUFBRSx1QkFBRixDQUFkOztBQUVBLG1CQUNHLElBREgsQ0FDUSxNQURSLEVBQ2dCLEVBQUUsdUJBQUYsRUFBMkIsSUFBM0IsQ0FBZ0MsU0FBaEMsQ0FEaEIsRUFFRyxHQUZILENBRU8sRUFBRSx1QkFBRixFQUEyQixJQUEzQixDQUFnQyxTQUFoQyxDQUZQLEVBR0csUUFISCxDQUdZLEtBSFo7O0FBS0Esb0JBQ0csR0FESCxDQUNPLEtBQUssU0FBTCxDQUFlLE9BQWYsQ0FEUCxFQUVHLFFBRkgsQ0FFWSxLQUZaOztBQUlBLG1CQUFNLENBQU4sRUFBUyxNQUFUOztBQUVBLG9CQUFPLEtBQVA7Ozs7Ozs7Ozs7Ozs7OztBQWVIOzs7NkJBMU9EO0FBQ0ksaUJBQUksS0FBSyxvQkFBVCxFQUErQjtBQUMzQix3QkFBTyxLQUFLLG9CQUFaO0FBQ0g7QUFDRCxrQkFBSywwQkFBTDtBQUNBLG9CQUFPLEtBQUssb0JBQVo7QUFDSDs7Ozs7O21CQXVPVSxXOzs7Ozs7OztBQzFRZiwwQyIsImZpbGUiOiJ2aXN1YWwtYnVpbGRlci9zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBhZDc1YjkyMWQxYTRhMzQxYWY0NFxuICoqLyIsImltcG9ydCAnLi9idW5kbGUuY3NzJztcblxuaW1wb3J0IEZyb250ZW5kTW9uc3RlciBmcm9tICcuL0Zyb250ZW5kTW9uc3Rlcic7XG5cbndpbmRvdy5Gcm9udGVuZE1vbnN0ZXIgPSBuZXcgRnJvbnRlbmRNb25zdGVyKCk7XG4vL1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzXG4gKiovIiwiaW1wb3J0IEZyYW1lQXBpIGZyb20gJy4vLi4vdmlzdWFsLWZyYW1lL0ZyYW1lQXBpJztcblxuY2xhc3MgQmFzZUVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IodmlzdWFsQnVpbGRlciwgbmFtZSkge1xuICAgIHRoaXMudmlzdWFsQnVpbGRlciA9IHZpc3VhbEJ1aWxkZXI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhcmdldCA9ICQodGhpcy52aXN1YWxCdWlsZGVyLnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKVswXS5jb250ZW50V2luZG93O1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgLy8gZGVhY3RpdmF0ZSBjdXJyZW50IHNlbGVjdGVkIGVudmlyb25tZW50XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gdGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkge1xuICAgICAgdGhpcy52aXN1YWxCdWlsZGVyLmVudmlyb25tZW50cy5nZXQodGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkuZGVhY3RpdmF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy52aXN1YWxCdWlsZGVyLmNsZWFyU3RhY2thYmxlKCk7XG4gIH1cblxuICBzZW5kTWVzc2FnZShmdW5jLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMudGFyZ2V0LCBmdW5jLCBhcmdzKTtcbiAgfVxuICBcbiAgcGFnZUNoYW5nZWQoKSB7XG4gICAgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUVudmlyb25tZW50O1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJjbGFzcyBGcmFtZUFwaSB7XG4gIHN0YXRpYyBnZXQgaXNJZSgpIHtcbiAgICAvKiBnbG9iYWwgaXMgKi9cbiAgICBpZiAodHlwZW9mKGlzKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBpcy5pZSgpOy8vIHx8IGlzLmVkZ2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRpYyBiaW5kTWVzc2FnZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFja0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgIGxldCBtZXNzYWdlID0gbnVsbDtcbiAgICAgIGlmIChGcmFtZUFwaS5pc0llKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZSA9IGV2ZW50LmRhdGE7XG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0ZW5lclttZXNzYWdlLmZ1bmNdKSB7XG4gICAgICAgIGxpc3RlbmVyW21lc3NhZ2UuZnVuY10uYXBwbHkobGlzdGVuZXIsIG1lc3NhZ2UuYXJncyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElFOFxuICAgICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbm1lc3NhZ2UnLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHNlbmRNZXNzYWdlKHRhcmdldCwgZnVuYywgYXJncykge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAnZnVuYyc6IGZ1bmMsXG4gICAgICAnYXJncyc6IGFyZ3MsXG4gICAgfTtcbiAgICBjb25zdCBtZXNzYWdlID0gRnJhbWVBcGkuaXNJZSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogZGF0YTtcblxuICAgIHRhcmdldC5wb3N0TWVzc2FnZShtZXNzYWdlLCAnKicpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyYW1lQXBpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaS5qc1xuICoqLyIsImltcG9ydCBWaXN1YWxCdWlsZGVyIGZyb20gJy4vY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXInO1xuaW1wb3J0IFZpc3VhbEZyYW1lIGZyb20gJy4vY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUnO1xuaW1wb3J0IEhhc2hBcGkgZnJvbSAnLi9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9IYXNoQXBpJztcblxuY2xhc3MgRnJvbnRlbmRNb25zdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLnZpc3VhbEJ1bGRlciA9IG51bGw7XG4gICAgdGhpcy5oYXNoQXBpID0gbmV3IEhhc2hBcGkoKTtcbiAgICBpZiAod2luZG93LnBhcmVudCAhPT0gd2luZG93ICYmIHdpbmRvdy5wYXJlbnQuRnJvbnRlbmRNb25zdGVyKSB7XG4gICAgICBpZiAod2luZG93LnBhcmVudC5Gcm9udGVuZE1vbnN0ZXIuaGFzQnVpbGRlcikge1xuICAgICAgICB0aGlzLlZpc3VhbEZyYW1lID0gbmV3IFZpc3VhbEZyYW1lKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKiBnbG9iYWxzOiBzbW9vdGhTY3JvbGwqL1xuICAgIGlmICh0eXBlb2Yoc21vb3RoU2Nyb2xsKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNtb290aFNjcm9sbC5pbml0KCk7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBWaXN1YWxCdWlsZGVyIGNsYXNzIGluc3RhbmNlXG4gICAqIEByZXR1cm5zIFZpc3VhbEJ1aWxkZXJcbiAgICovXG4gIGdldCBidWlsZGVyKCkge1xuICAgIGlmICh0aGlzLnZpc3VhbEJ1bGRlciA9PT0gbnVsbCkge1xuICAgICAgdGhpcy52aXN1YWxCdWxkZXIgPSBuZXcgVmlzdWFsQnVpbGRlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy52aXN1YWxCdWxkZXI7XG4gIH1cblxuICAvKipcbiAgICogSWYgdGhpcyBGcm9udGVuZE1vbnN0ZXIgaW5zdGFuY2UgaGFzIFZpc3VhbCBCdWlsZGVyIG9uIHBhZ2VcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaGFzQnVpbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZGVyLiRidWlsZGVyLmxlbmd0aCA9PT0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIEZyb250ZW5kTW9uc3RlciBzZXR0aW5ncy5cbiAgICogVXNlcyBGcm9udGVuZE1vbnN0ZXJTZXR0aW5ncyB2YXJpYWJsZSBpZiBwcm92aWRlZCBvciBkZWZhdWx0IHZhbHVlcyBpbnN0ZWFkLlxuICAgKi9cbiAgcGFyYW1zKCkge1xuICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5Gcm9udGVuZE1vbnN0ZXJTZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIHVzZXJTZXR0aW5ncykge1xuICAgICAgaWYgKHVzZXJTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyb250ZW5kTW9uc3RlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvRnJvbnRlbmRNb25zdGVyLmpzXG4gKiovIiwiaW1wb3J0IEFsbEVkaXRhYmxlcyBmcm9tICcuL2VkaXRhYmxlcy9hbGwnO1xuXG5jbGFzcyBFZGl0YWJsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZWRpdGFibGVzQnlUeXBlID0ge307XG4gICAgLy8gaW5pdGlhbGl6ZSBiYXNlIGJ1aWxkLWluIGVkaXRhYmxlc1xuICAgIEFsbEVkaXRhYmxlcygpO1xuICAgIHRoaXMuZWRpdGFibGVzQnlUeXBlID0gd2luZG93Lk1PTlNURVJfRURJVEFCTEVTO1xuICB9XG5cbiAgc2VyaWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBsZXQgYmVtRGF0YSA9ICRub2RlLmRhdGEoJ2JlbScpO1xuICAgIGNvbnN0IGJlbUVudGl0eSA9ICRub2RlLmRhdGEoJ2JlbU1hdGNoJyk7XG4gICAgaWYgKGJlbURhdGEuaGFzT3duUHJvcGVydHkoYmVtRW50aXR5KSkge1xuICAgICAgYmVtRGF0YSA9IGJlbURhdGFbYmVtRW50aXR5XTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmVtRGF0YSA9IHt9O1xuICAgIH1cbiAgICBpZiAoYmVtRGF0YS5oYXNPd25Qcm9wZXJ0eSgnZWRpdGFibGUnKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBlZGl0YWJsZSA9IGJlbURhdGEuZWRpdGFibGU7XG4gICAgbGV0IHR5cGUgPSBlZGl0YWJsZS5oYXNPd25Qcm9wZXJ0eSgndHlwZScpID8gZWRpdGFibGUudHlwZSA6ICdzdHJpbmcnO1xuICAgIGlmICh0aGlzLmVkaXRhYmxlc0J5VHlwZS5oYXNPd25Qcm9wZXJ0eSh0eXBlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHR5cGUgPSAnc3RyaW5nJztcbiAgICB9XG5cbiAgICBjb25zdCBleHBvcnRWYXJpYWJsZSA9IGVkaXRhYmxlLmhhc093blByb3BlcnR5KCd0YXJnZXQnKSA/IGVkaXRhYmxlLnRhcmdldCA6ICdkYXRhJztcblxuICAgIHJldHVybiB0aGlzLmVkaXRhYmxlc0J5VHlwZVt0eXBlXSgkbm9kZSwgZXhwb3J0VmFyaWFibGUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRhYmxlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL0VkaXRhYmxlLmpzXG4gKiovIiwiY2xhc3MgTWF0ZXJpYWwge1xuICBjb25zdHJ1Y3Rvcigkbm9kZSkge1xuICAgIHRoaXMuJG5vZGUgPSAkbm9kZTtcbiAgICB0aGlzLm1hdGVyaWFsUGF0aCA9IHRoaXMuJG5vZGUuZGF0YSgnbWF0ZXJpYWxQYXRoJyk7XG4gICAgdGhpcy5uYW1lID0gdGhpcy5tYXRlcmlhbFBhdGgucmVwbGFjZSgvLipcXC4oLiopJC8sICckMScpO1xuICAgIC8vIUB0b2RvIENIQU5HRSBUSElTXG4gICAgdGhpcy5rZXkgPSB0aGlzLiRub2RlLmRhdGEoJ21hdGVyaWFsSW5kZXgnKTtcbiAgfVxuXG4gIHByb2Nlc3NNYXRlcmlhbCgpIHtcbiAgICBjb25zdCAkbGkgPSAkKGA8bGkgY2xhc3M9XCJwYWdlLXN0cnVjdHVyZV9fbWF0ZXJpYWxcIj4ke3RoaXMubmFtZX08L2xpPmApO1xuICAgIHJldHVybiAkbGk7XG4gIH1cblxuICBzdGF0aWMgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIHJldHVybiB3aW5kb3cuRnJvbnRlbmRNb25zdGVyLmJ1aWxkZXIuZWRpdGFibGUuc2VyaWFsaXplRWRpdGFibGUoJG5vZGUpO1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIC8vIG1hdGVyaWFsIGhhcyBkYXRhLWVkaXRhYmxlLWtleXMgd2l0aCBzY2hlbWFcbiAgICBjb25zdCBlZGl0YWJsZUtleXMgPSB0aGlzLiRub2RlLmRhdGEoJ2VkaXRhYmxlS2V5cycpO1xuICAgIGNvbnN0IHJlY3Vyc2l2ZUl0ZXJhdG9yID0gZnVuY3Rpb24gaXRlcihhcnIsIHBhdGgsICRzY29wZSkge1xuICAgICAgY29uc3QgZmluYWwgPSB7fTtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGFycikpIHtcbiAgICAgICAgbGV0IGZ1bGxLZXlQYXRoID0ga2V5O1xuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgIGZ1bGxLZXlQYXRoID0gYCR7cGF0aH0uJHtrZXl9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mKGFycltrZXldKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjb25zdCAkaXRlbXMgPSAkc2NvcGUuZmluZChgW2RhdGEtcmVjdXJzaXZlLWl0ZW09XCIke2Z1bGxLZXlQYXRofVwiXWApO1xuICAgICAgICAgIGZpbmFsW2tleV0gPSB7fTtcbiAgICAgICAgICAkaXRlbXMuZWFjaChmdW5jdGlvbiBpdGVtc1JlYygpIHtcbiAgICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGZpbmFsW2tleV1bJHRoaXMuZGF0YSgncmVjdXJzaXZlSXRlbUtleScpXSA9IHJlY3Vyc2l2ZUl0ZXJhdG9yKFxuICAgICAgICAgICAgICBhcnJba2V5XSxcbiAgICAgICAgICAgICAgJ2l0ZW0nLFxuICAgICAgICAgICAgICAkdGhpc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCAkbm9kZSA9ICRzY29wZS5maW5kKGBbZGF0YS1lZGl0YWJsZS1rZXk9XCIke2Z1bGxLZXlQYXRofVwiXWApO1xuICAgICAgICAgIGZpbmFsW2tleV0gPSBNYXRlcmlhbC5zZXJpYWxpemVOb2RlKCRub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZpbmFsO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgcmVzdWx0ID0gcmVjdXJzaXZlSXRlcmF0b3IoZWRpdGFibGVLZXlzLCAnJywgdGhpcy4kbm9kZSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbi8vICAgIHRoaXMuJG5vZGUuZmluZCgnJylcbiAgICBcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFsO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1BhZ2VTdHJ1Y3R1cmVDb21wb25lbnRzL01hdGVyaWFsLmpzXG4gKiovIiwiaW1wb3J0IE1hdGVyaWFsIGZyb20gJy4vTWF0ZXJpYWwnO1xuXG5jbGFzcyBSZWdpb24ge1xuICBjb25zdHJ1Y3Rvcigkbm9kZSkge1xuICAgIHRoaXMubWF0ZXJpYWxzID0ge307XG4gICAgdGhpcy4kbm9kZSA9ICRub2RlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSAkbm9kZS5kYXRhKCdjb250ZW50RGVzY3JpcHRpb24nKTtcbiAgfVxuXG4gIHByb2Nlc3NSZWdpb24oKSB7XG4gICAgY29uc3QgJHJlZ2lvbkxpID0gJChgPGxpIGNsYXNzPVwicGFnZS1zdHJ1Y3R1cmVfX3JlZ2lvblwiPiR7dGhpcy5yZWdpb25EZXNjcmlwdGlvbn08L2xpPmApO1xuICAgIHRoaXMua2V5ID0gdGhpcy4kbm9kZS5kYXRhKCdyZWdpb25LZXknKTtcbiAgICB0aGlzLmlkID0gdGhpcy4kbm9kZS5kYXRhKCdyZWdpb25JZCcpO1xuICAgIGNvbnN0ICRyZWdpb25VbCA9ICQoJzx1bCBjbGFzcz1cInBhZ2Utc3RydWN0dXJlX19yZWdpb24tbWF0ZXJpYWxzXCI+PC91bD4nKTtcblxuICAgIGNvbnN0ICRtYXRlcmlhbHMgPSB0aGlzLiRub2RlLmZpbmQoJ1tkYXRhLWlzLW1hdGVyaWFsPTFdJyk7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAkbWF0ZXJpYWxzLmVhY2goZnVuY3Rpb24gbWF0ZXJpYWxzSXRlcmF0b3IoKSB7XG4gICAgICBjb25zdCAkbWF0ZXJpYWxOb2RlID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IG1hdGVyaWFsT2JqZWN0ID0gbmV3IE1hdGVyaWFsKCRtYXRlcmlhbE5vZGUpO1xuICAgICAgY29uc3QgJGxpID0gbWF0ZXJpYWxPYmplY3QucHJvY2Vzc01hdGVyaWFsKCk7XG4gICAgICB0aGF0Lm1hdGVyaWFsc1ttYXRlcmlhbE9iamVjdC5rZXldID0gbWF0ZXJpYWxPYmplY3Q7XG4gICAgICAkcmVnaW9uVWwuYXBwZW5kKCRsaSk7XG4gICAgfSk7XG5cbiAgICAkcmVnaW9uTGkuYXBwZW5kKCRyZWdpb25VbCk7XG4gICAgcmV0dXJuICRyZWdpb25MaTtcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBjb25zdCBtYXRlcmlhbHMgPSB0aGlzLm1hdGVyaWFscztcbiAgICBPYmplY3Qua2V5cyhtYXRlcmlhbHMpLmZvckVhY2goZnVuY3Rpb24gaXRlcihtYXRlcmlhbEtleSkge1xuICAgICAgcmVzdWx0W21hdGVyaWFsS2V5XSA9IG1hdGVyaWFsc1ttYXRlcmlhbEtleV0uc2VyaWFsaXplKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIG1hdGVyaWFsc0RlY2woKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBtYXRlcmlhbEtleSBpbiB0aGlzLm1hdGVyaWFscykge1xuICAgICAgaWYgKHRoaXMubWF0ZXJpYWxzLmhhc093blByb3BlcnR5KG1hdGVyaWFsS2V5KSkge1xuICAgICAgICByZXN1bHRbbWF0ZXJpYWxLZXldID0ge1xuICAgICAgICAgICdtYXRlcmlhbCc6IHRoaXMubWF0ZXJpYWxzW21hdGVyaWFsS2V5XS5tYXRlcmlhbFBhdGgsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaW9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZUNvbXBvbmVudHMvUmVnaW9uLmpzXG4gKiovIiwiaW1wb3J0IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQnO1xuaW1wb3J0IE1hdGVyaWFsc0Vudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50JztcbmltcG9ydCBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50JztcbmltcG9ydCBBY3Rpb25FbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudCc7XG5pbXBvcnQgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCc7XG5pbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi8uLi92aXN1YWwtZnJhbWUvRnJhbWVBcGknO1xuaW1wb3J0IEVkaXRhYmxlIGZyb20gJy4vRWRpdGFibGUnO1xuXG5jbGFzcyBWaXN1YWxCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLnJlc29sdXRpb25Td2l0Y2hlcigpO1xuXG4gICAgdGhpcy5lbnZpcm9ubWVudHMgPSBuZXcgTWFwKFtcbiAgICAgIFsnc2l0ZS1zdHJ1Y3R1cmUnLCBuZXcgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdzaXRlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsncGFnZS1zdHJ1Y3R1cmUnLCBuZXcgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdwYWdlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsnbWF0ZXJpYWxzJywgbmV3IE1hdGVyaWFsc0Vudmlyb25tZW50KHRoaXMsICdtYXRlcmlhbHMnKV0sXG4gICAgICBbJ2N1c3RvbWl6YXRpb24nLCBuZXcgQ3VzdG9taXphdGlvbkVudmlyb25tZW50KHRoaXMsICdjdXN0b21pemF0aW9uJyldLFxuICAgICAgWydhY3Rpb24nLCBuZXcgQWN0aW9uRW52aXJvbm1lbnQodGhpcywgJ2FjdGlvbicpXSxcbiAgICBdKTtcblxuICAgIHRoaXMuZW52aXJvbm1lbnRTZWxlY3RvcigpO1xuXG4gICAgLy8gc2VsZWN0IGZpcnN0IGVudmlyb25tZW50IGJ5IGRlZmF1bHRcbiAgICB0aGlzLnN3aXRjaEVudmlyb25tZW50KCdzaXRlLXN0cnVjdHVyZScpO1xuICAgICQoJy5tb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJylcbiAgICAgIC5maXJzdCgpXG4gICAgICAuYWRkQ2xhc3MoJ21vbnN0ZXItZW52aXJvbm1lbnQtc2VsZWN0b3JfX2Vudmlyb25tZW50LWxpbmstLWFjdGl2ZScpO1xuICAgIEZyYW1lQXBpLmJpbmRNZXNzYWdlTGlzdGVuZXIodGhpcyk7XG5cbiAgICB0aGlzLmVkaXRhYmxlID0gbmV3IEVkaXRhYmxlKCk7XG5cbiAgICB0aGlzLmNvbnRyb2xzKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBWaXN1YWxCdWlsZGVyIHNldHRpbmdzLlxuICAgKiBVc2VzIFZpc3VhbEJ1aWxkZXJTZXR0aW5ncyB2YXJpYWJsZSBpZiBwcm92aWRlZCBvciBkZWZhdWx0IHZhbHVlcyBpbnN0ZWFkLlxuICAgKi9cbiAgcGFyYW1zKCkge1xuICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5WaXN1YWxCdWlsZGVyU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICAnZWxlbWVudC1zZWxlY3Rvcic6ICcubW9uc3Rlci12aXN1YWwtYnVpbGRlcicsXG4gICAgICAnZnJhbWUtc2VsZWN0b3InOiAnLm1vbnN0ZXItdmlzdWFsLWZyYW1lJyxcbiAgICAgICdidW5kbGVzJzoge30sXG4gICAgICAnc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyc6ICdtb25zdGVyLXN0YWNrYWJsZS1jb250YWluZXInLFxuICAgICAgJ25ldy1ibG9jay11cmwnOiAnL21vbnN0ZXIvdmlzdWFsLWJ1aWxkZXIvbmV3LWJsb2NrJyxcbiAgICB9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIHVzZXJTZXR0aW5ncykge1xuICAgICAgaWYgKHVzZXJTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuJGJ1aWxkZXIgPSAkKHRoaXMuc2V0dGluZ3NbJ2VsZW1lbnQtc2VsZWN0b3InXSk7XG4gICAgdGhpcy4kc3RhY2thYmxlID0gJCgnLicgKyB0aGlzLnNldHRpbmdzWydzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJ10pO1xuICB9XG5cbiAgcmVzb2x1dGlvblN3aXRjaGVyKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGJlbUVsZW0gPSAncmVzb2x1dGlvbi1zd2l0Y2hlcl9fcmVzb2x1dGlvbi1saW5rJztcbiAgICBjb25zdCBhY3RpdmVNb2RpZmllciA9IGAke2JlbUVsZW19LS1hY3RpdmVgO1xuICAgIGNvbnN0ICRyZXNvbHV0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRyZXNvbHV0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAkcmVzb2x1dGlvbkxpbmtzLnJlbW92ZUNsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgICQodGhhdC5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSkud2lkdGgoJCh0aGlzKS5kYXRhKCdyZXNvbHV0aW9uV2lkdGgnKSk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGVudmlyb25tZW50U2VsZWN0b3IoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgYmVtRWxlbSA9ICdtb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJztcbiAgICBjb25zdCBhY3RpdmVNb2RpZmllciA9IGAke2JlbUVsZW19LS1hY3RpdmVgO1xuICAgIGNvbnN0ICRzZWN0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRzZWN0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBjb25zdCBlbnZpcm9ubWVudE5hbWUgPSAkKHRoaXMpLmRhdGEoJ2Vudmlyb25tZW50TmFtZScpO1xuICAgICAgaWYgKHRoYXQuY3VycmVudEVudmlyb25tZW50ID09PSBlbnZpcm9ubWVudE5hbWUpIHtcbiAgICAgICAgJHNlY3Rpb25MaW5rcy5yZW1vdmVDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICAgIHRoYXQuZW52aXJvbm1lbnRzLmdldChlbnZpcm9ubWVudE5hbWUpLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgdGhhdC5jdXJyZW50RW52aXJvbm1lbnQgPSBudWxsO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgICRzZWN0aW9uTGlua3MucmVtb3ZlQ2xhc3MoYWN0aXZlTW9kaWZpZXIpO1xuICAgICAgdGhhdC5zd2l0Y2hFbnZpcm9ubWVudChlbnZpcm9ubWVudE5hbWUpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBzd2l0Y2hFbnZpcm9ubWVudChlbnZpcm9ubWVudE5hbWUpIHtcbiAgICB0aGlzLmVudmlyb25tZW50cy5nZXQoZW52aXJvbm1lbnROYW1lKS5hY3RpdmF0ZSgpO1xuICAgIHRoaXMuY3VycmVudEVudmlyb25tZW50ID0gZW52aXJvbm1lbnROYW1lO1xuICB9XG5cbiAgY2xlYXJTdGFja2FibGUoKSB7XG4gICAgdGhpcy4kc3RhY2thYmxlLmVtcHR5KCk7XG4gIH1cblxuICBjcmVhdGVTdGFja2FibGVQYW5lKCkge1xuICAgIGNvbnN0IHBhbmVDbGFzcyA9IGAke3RoaXMuc2V0dGluZ3NbJ3N0YWNrYWJsZS1jb250YWluZXItY2xhc3MnXX1fX3BhbmVgO1xuICAgIGNvbnN0IG1vZGlmaWVyID0gdGhpcy4kc3RhY2thYmxlLmZpbmQoJy4nICsgcGFuZUNsYXNzKS5sZW5ndGggPT09IDAgPyBgJHtwYW5lQ2xhc3N9LS1maXJzdGAgOiAnJztcbiAgICBjb25zdCAkbmV3UGFuZSA9ICQoYDxkaXYgY2xhc3M9XCIke3BhbmVDbGFzc30gJHttb2RpZmllcn1cIj48L2Rpdj5gKTtcbiAgICB0aGlzLiRzdGFja2FibGUuYXBwZW5kKCRuZXdQYW5lKTtcbiAgICByZXR1cm4gJG5ld1BhbmU7XG4gIH1cblxuICBtYXRlcmlhbEJ5TmFtZShuYW1lKSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MubWF0ZXJpYWxzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5tYXRlcmlhbHNbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IGZyYW1lQ29udGVudFdpbmRvdygpIHtcbiAgICByZXR1cm4gJCh0aGlzLnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKVswXS5jb250ZW50V2luZG93O1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIC8vIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMuZnJhbWVDb250ZW50V2luZG93LCAnc2VyaWFsaXplQ29udGVudCcsIFsnbG9nJ10pO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKS5zZXJpYWxpemVQYWdlKCk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAgIC8vIHdlIGhhdmUgcmVzdWx0IHdoaWNoIGlzIGNvbnRlbnQgaW4gZm9ybWF0OlxuICAgIC8vIHJlZ2lvblxuICAgIC8vIC0tLSBtYXRlcmlhbCBpZFxuICAgIC8vIC0tLS0tLS0ga2V5cyA9PiB2YWx1ZXNcbiAgICAvL1xuICAgIC8vIG91ciBQcm92aWRlcnMgc2hvdWxkIGdldCBvbmx5IHRob3NlIGtleXMgdGhhdCB0aGV5IHByb3ZpZGVcbiAgICAvLyBwcm92aWRlZCBrZXlzIGFyZSBzdG9yZWQgaW4gZnJhbWVDb250ZW50V2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEudGVtcGxhdGUucHJvdmlkZWRLZXlzXG4gICAgY29uc3QgcmVzdWx0QnlQcm92aWRlcnMgPSB7fTtcbiAgICBjb25zdCBwcm92aWRlZEtleXMgPSB0aGlzLmZyYW1lQ29udGVudFdpbmRvdy5NT05TVEVSX0VESVRfTU9ERV9EQVRBLnRlbXBsYXRlLnByb3ZpZGVkS2V5cztcblxuICAgIGZvciAoY29uc3QgcHJvdmlkZXJJbmRleCBpbiBwcm92aWRlZEtleXMpIHtcbiAgICAgIGlmIChwcm92aWRlZEtleXMuaGFzT3duUHJvcGVydHkocHJvdmlkZXJJbmRleCkgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF0gPSB7fTtcbiAgICAgIGNvbnN0IHJlZ2lvbnMgPSBwcm92aWRlZEtleXNbcHJvdmlkZXJJbmRleF07XG4gICAgICBmb3IgKGNvbnN0IHJlZ2lvbktleSBpbiByZWdpb25zKSB7XG4gICAgICAgIGlmIChyZWdpb25zLmhhc093blByb3BlcnR5KHJlZ2lvbktleSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5oYXNPd25Qcm9wZXJ0eShyZWdpb25LZXkpID09PSBmYWxzZSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdW3JlZ2lvbktleV0gPSB7fTtcbiAgICAgICAgLy8gZ28gZGVlcCB0byBtYXRlcmlhbCBpbmRlY2VzXG4gICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IHJlZ2lvbnNbcmVnaW9uS2V5XTtcbiAgICAgICAgZm9yIChjb25zdCBtYXRlcmlhbEluZGV4IGluIG1hdGVyaWFscykge1xuICAgICAgICAgIGlmIChtYXRlcmlhbHMuaGFzT3duUHJvcGVydHkobWF0ZXJpYWxJbmRleCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdFtyZWdpb25LZXldLmhhc093blByb3BlcnR5KG1hdGVyaWFsSW5kZXgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdW3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF0gPSB7fTtcbiAgICAgICAgICBjb25zdCBkYXRhS2V5cyA9IG1hdGVyaWFsc1ttYXRlcmlhbEluZGV4XTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBkYXRhS2V5cykge1xuICAgICAgICAgICAgaWYgKHJlc3VsdFtyZWdpb25LZXldW21hdGVyaWFsSW5kZXhdLmhhc093blByb3BlcnR5KGtleSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0QnlQcm92aWRlcnNcbiAgICAgICAgICAgICAgW3Byb3ZpZGVySW5kZXhdXG4gICAgICAgICAgICAgIFtyZWdpb25LZXldXG4gICAgICAgICAgICAgIFttYXRlcmlhbEluZGV4XVxuICAgICAgICAgICAgICBba2V5XSA9IHJlc3VsdFtyZWdpb25LZXldW21hdGVyaWFsSW5kZXhdW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRCeVByb3ZpZGVycztcbiAgfVxuXG4gIHBhZ2VDaGFuZ2VkKCkge1xuICAgIGZvciAoY29uc3QgZW52aXJvbm1lbnQgb2YgdGhpcy5lbnZpcm9ubWVudHMpIHtcbiAgICAgIGVudmlyb25tZW50WzFdLnBhZ2VDaGFuZ2VkKCk7XG4gICAgfVxuICB9XG5cbiAgbG9nKHJlc3VsdCkge1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gIH1cblxuICBjb250cm9scygpIHtcbiAgICB0aGlzLiRjb250cm9scyA9IHRoaXMuJGJ1aWxkZXIuZmluZCgnLmNvbnRyb2xzJyk7XG4gICAgY29uc3QgYnVpbGRlciA9IHRoaXM7XG4gICAgdGhpcy4kY29udHJvbHMuZmluZCgnLmNvbnRyb2xzX19yZWZyZXNoJykuY2xpY2soZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgIGJ1aWxkZXIuZnJhbWVDb250ZW50V2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMuJGNvbnRyb2xzLmZpbmQoJy5jb250cm9sc19fc2F2ZScpLmNsaWNrKGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG5cbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogYnVpbGRlci5mcmFtZUNvbnRlbnRXaW5kb3cubG9jYXRpb24sXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgcHJvdmlkZXJzRW50aXRpZXM6IGJ1aWxkZXIuc2VyaWFsaXplKCksXG4gICAgICAgICAgICByZWdpb25zTWF0ZXJpYWxzOiBidWlsZGVyLmVudmlyb25tZW50cy5nZXQoJ3BhZ2Utc3RydWN0dXJlJykubWF0ZXJpYWxzQnlSZWdpb25zKCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhY3Rpb246ICdzYXZlJyxcbiAgICAgICAgfSksXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIG9rKGRhdGEsIHRleHRTdGF0dXMsIGpxWEhSKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiBlcnIoZGF0YSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsQnVpbGRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXIuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3eXNpd3lnKCRub2RlKSB7XG4gIHJldHVybiAkbm9kZS5odG1sKCk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lZGl0YWJsZXMvV1lTSVdZRy5qc1xuICoqLyIsImltcG9ydCBXWVNJV1lHIGZyb20gJy4vV1lTSVdZRyc7XG5pbXBvcnQgaW1hZ2UgZnJvbSAnLi9pbWFnZSc7XG5pbXBvcnQgbGluayBmcm9tICcuL2xpbmsnO1xuaW1wb3J0IFN0cmluZ0VkaXRhYmxlIGZyb20gJy4vc3RyaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWxsKCkge1xuICBpZiAodHlwZW9mKHdpbmRvdy5NT05TVEVSX0VESVRBQkxFUykgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTID0ge307XG4gIH1cbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWyd3eXNpd3lnJ10gPSBXWVNJV1lHO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ2xpbmsnXSA9IGxpbms7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snaW1hZ2UnXSA9IGltYWdlO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ3N0cmluZyddID0gU3RyaW5nRWRpdGFibGU7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL2FsbC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGltYWdlKCRub2RlKSB7XG4gIGNvbnN0ICRpbWcgPSAkbm9kZS5maW5kKCdpbWcnKS5maXJzdCgpO1xuICByZXR1cm4ge1xuICAgIHNyYzogJGltZy5hdHRyKCdzcmMnKSxcbiAgICBhbHQ6ICRpbWcuYXR0cignYWx0JyksXG4gIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lZGl0YWJsZXMvaW1hZ2UuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaW5rKCRub2RlKSB7XG4gIHJldHVybiB7XG4gICAgc3JjOiAkbm9kZS5hdHRyKCdocmVmJyksXG4gICAgYW5jaG9yOiAkbm9kZS5odG1sKCksXG4gIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lZGl0YWJsZXMvbGluay5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCRub2RlKSB7XG4gIHJldHVybiAkbm9kZS50ZXh0KCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9zdHJpbmcuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgQWN0aW9uRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBBY3Rpb25FbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIE1hdGVyaWFsc0Vudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IodmlzdWFsQnVpbGRlciwgbmFtZSkge1xuICAgIHN1cGVyKHZpc3VhbEJ1aWxkZXIsIG5hbWUpO1xuICAgIHRoaXMuaW5pdE1hdGVyaWFsc1NlbGVjdG9yKCk7XG4gIH1cblxuICBpbml0TWF0ZXJpYWxzU2VsZWN0b3IoKSB7XG4gICAgdGhpcy4kbWF0ZXJpYWxzR3JvdXBzID0gJChgPHVsIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc1wiPjwvdWw+YCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzTGlzdCA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBidW5kbGUgb2YgdGhpcy52aXN1YWxCdWlsZGVyLnNldHRpbmdzLmJ1bmRsZXMpIHtcbiAgICAgIGNvbnN0IGkxOG5CdW5kbGVOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCcgPyBwb2x5Z2xvdC50KGJ1bmRsZS5uYW1lKSA6IGJ1bmRsZS5uYW1lO1xuXG4gICAgICBsZXQgJGJ1bmRsZVRpdGxlID0gYFxuICAgICAgPGxpIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19faXRlbSBtYXRlcmlhbHMtZ3JvdXBzX19pdGVtLS1idW5kbGUtbGFiZWxcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1idW5kbGVcIiBkYXRhLWJ1bmRsZS1wYXRoPVwiXCIke2J1bmRsZS5mdWxsUGF0aH0+XG4gICAgICAgICAgICAke2kxOG5CdW5kbGVOYW1lfVxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICAgYDtcbiAgICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QucHVzaCgkYnVuZGxlVGl0bGUpO1xuXG4gICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIGJ1bmRsZS5ncm91cHMpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBOYW1lID0gZ3JvdXAubmFtZTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gZ3JvdXAubWF0ZXJpYWxzO1xuICAgICAgICBjb25zdCBpMThuR3JvdXBOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCcgPyBwb2x5Z2xvdC50KGdyb3VwTmFtZSkgOiBncm91cE5hbWU7XG4gICAgICAgIGNvbnN0ICRsaSA9ICQoYFxuICAgIDxsaSBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX2l0ZW1cIj5cbiAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS1ncm91cC1wYXRoPVwiJHtncm91cC5mdWxsUGF0aH1cIiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cFwiPlxuICAgICAgICAke2kxOG5Hcm91cE5hbWV9IDxzcGFuIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fY291bnRcIj4oJHttYXRlcmlhbHMubGVuZ3RofSk8L3NwYW4+XG4gICAgICA8L2E+XG4gICAgPC9saT5gKTtcbiAgICAgICAgdGhpcy4kbWF0ZXJpYWxzR3JvdXBzLmFwcGVuZCgkbGkpO1xuICAgICAgICBjb25zdCAkbGlzdCA9ICQoYDx1bCBjbGFzcz1cIm1hdGVyaWFscy1saXN0XCIgZGF0YS1ncm91cC1wYXRoPVwiJHtncm91cC5mdWxsUGF0aH1cIj48L3VsPmApO1xuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IG1hdGVyaWFsIG9mIG1hdGVyaWFscykge1xuICAgICAgICAgIGNvbnN0IG1hdGVyaWFsTmFtZSA9IG1hdGVyaWFsLm5hbWU7XG4gICAgICAgICAgY29uc3QgaTE4bk1hdGVyaWFsTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnID8gcG9seWdsb3QudChtYXRlcmlhbE5hbWUpIDogbWF0ZXJpYWxOYW1lO1xuICAgICAgICAgIGNvbnN0ICRpdGVtID0gJChgXG48bGk+XG4gIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtYXRlcmlhbHMtbGlzdF9faXRlbVwiIGRhdGEtbWF0ZXJpYWwtcGF0aD1cIiR7bWF0ZXJpYWwuZnVsbFBhdGh9XCI+JHtpMThuTWF0ZXJpYWxOYW1lfTwvYT5cbjwvbGk+XG5gKTtcbiAgICAgICAgICBpdGVtcy5wdXNoKCRpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICAkbGlzdC5hcHBlbmQoaXRlbXMpO1xuICAgICAgICB0aGlzLiRtYXRlcmlhbHNMaXN0LnB1c2goJGxpc3QpO1xuXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAnLCBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICBjb25zdCBhY3RpdmVDbGFzcyA9ICdtYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAtLWFjdGl2ZSc7XG4gICAgICAkdGhpcy50b2dnbGVDbGFzcyhhY3RpdmVDbGFzcyk7XG4gICAgICBjb25zdCBncm91cFBhdGggPSAkdGhpcy5kYXRhKCdncm91cFBhdGgnKTtcbiAgICAgIGlmICgkdGhpcy5oYXNDbGFzcyhhY3RpdmVDbGFzcykpIHtcbiAgICAgICAgJCgnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcpLnJlbW92ZUNsYXNzKGFjdGl2ZUNsYXNzKTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzTGlzdEFjdGl2ZUNsYXNzID0gJ21hdGVyaWFscy1saXN0LS1hY3RpdmUnO1xuXG4gICAgICAgICQoJy5tYXRlcmlhbHMtbGlzdCcpLmVhY2goZnVuY3Rpb24gaXQoKSB7XG4gICAgICAgICAgY29uc3QgJGxpc3QgPSAkKHRoaXMpO1xuICAgICAgICAgIGlmICgkbGlzdC5oYXNDbGFzcyhtYXRlcmlhbHNMaXN0QWN0aXZlQ2xhc3MpKSB7XG4gICAgICAgICAgICAkbGlzdC5yZW1vdmVDbGFzcyhtYXRlcmlhbHNMaXN0QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoJGxpc3QuZGF0YSgnZ3JvdXBQYXRoJykgPT09IGdyb3VwUGF0aCkge1xuICAgICAgICAgICAgJGxpc3QuYWRkQ2xhc3MobWF0ZXJpYWxzTGlzdEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICR0aGlzLmFkZENsYXNzKGFjdGl2ZUNsYXNzKTtcbiAgICAgICAgdGhhdC4kbWF0ZXJpYWxzUGFuZS5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGF0J3MganVzdCBzZWNvbmQgY2xpY2sgb24gdGhlIHNhbWUgZ3JvdXBcbiAgICAgICAgdGhhdC4kbWF0ZXJpYWxzUGFuZS5oaWRlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYXRlcmlhbHMtbGlzdF9faXRlbScsIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgIHRoYXQuc2VuZE1lc3NhZ2UoXG4gICAgICAgICduZXdCbG9jaycsXG4gICAgICAgIFtcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoJ21hdGVyaWFsUGF0aCcpLFxuICAgICAgICAgICdjb250ZW50J1xuICAgICAgICBdXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgc3VwZXIuYWN0aXZhdGUoKTtcblxuICAgIHRoaXMuJGdyb3Vwc1BhbmUgPSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3JlYXRlU3RhY2thYmxlUGFuZSgpO1xuICAgIHRoaXMuJGdyb3Vwc1BhbmUuYXBwZW5kKHRoaXMuJG1hdGVyaWFsc0dyb3Vwcyk7XG5cbiAgICB0aGlzLiRtYXRlcmlhbHNQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRtYXRlcmlhbHNQYW5lLmFwcGVuZCh0aGlzLiRtYXRlcmlhbHNMaXN0KTtcbiAgICB0aGlzLiRtYXRlcmlhbHNQYW5lLmhpZGUoKTtcblxuICAgICQoJy5tYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAnKS5yZW1vdmVDbGFzcygnbWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwLS1hY3RpdmUnKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTWF0ZXJpYWxzRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvTWF0ZXJpYWxzRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcbmltcG9ydCBSZWdpb24gZnJvbSAnLi8uLi9QYWdlU3RydWN0dXJlQ29tcG9uZW50cy9SZWdpb24nO1xuXG5jbGFzcyBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2aXN1YWxCdWlsZGVyLCBuYW1lKSB7XG4gICAgc3VwZXIodmlzdWFsQnVpbGRlciwgbmFtZSk7XG4gICAgdGhpcy5pbml0UGFnZVN0cnVjdHVyZUVsZW1lbnQoKTtcbiAgICB0aGlzLmVkaXRNb2RlRGF0YSA9IHt9O1xuICB9XG5cbiAgaW5pdFBhZ2VTdHJ1Y3R1cmVFbGVtZW50KCkge1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUgPSAkKGA8dWwgY2xhc3M9XCJwYWdlLXN0cnVjdHVyZVwiPjwvdWw+YClcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHN1cGVyLmFjdGl2YXRlKCk7XG5cbiAgICB0aGlzLiRzdHJ1Y3R1cmVQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRzdHJ1Y3R1cmVQYW5lLmFwcGVuZCh0aGlzLiRwYWdlU3RydWN0dXJlKTtcbiAgfVxuICBcbiAgcGFnZUNoYW5nZWQoKSB7XG4gICAgc3VwZXIucGFnZUNoYW5nZWQoKTtcbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlLmZpbmQoJ2xpJykucmVtb3ZlKCk7XG4gICAgY29uc3QgcmVnaW9ucyA9IHRoaXMudGFyZ2V0LiQoJy5tLW1vbnN0ZXItY29udGVudF9fY29udGVudCcpO1xuICAgIGNvbnN0IGVudmlyb25tZW50ID0gdGhpcztcbiAgICB0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUgPSB7fTtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICByZWdpb25zLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0ICRyZWdpb25Ob2RlID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IHJlZ2lvbk9iamVjdCA9IG5ldyBSZWdpb24oJHJlZ2lvbk5vZGUpO1xuICAgICAgY29uc3QgJHJlZ2lvbkxpID0gcmVnaW9uT2JqZWN0LnByb2Nlc3NSZWdpb24oKTtcbiAgICAgIHRoYXQucmVnaW9uc1N0cnVjdHVyZVtyZWdpb25PYmplY3Qua2V5XSA9IHJlZ2lvbk9iamVjdDtcbiAgICAgIGVudmlyb25tZW50LiRwYWdlU3RydWN0dXJlLmFwcGVuZCgkcmVnaW9uTGkpO1xuICAgIH0pO1xuICAgIHRoaXMuZWRpdE1vZGVEYXRhID0gdGhpcy50YXJnZXQuTU9OU1RFUl9FRElUX01PREVfREFUQTtcbiAgfVxuICBcbiAgc2VyaWFsaXplUGFnZSgpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IHJlZ2lvbktleSBpbiB0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUpIHtcbiAgICAgIGlmICh0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUuaGFzT3duUHJvcGVydHkocmVnaW9uS2V5KSkge1xuICAgICAgICBjb25zdCByZWdpb24gPSB0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmVbcmVnaW9uS2V5XTtcbiAgICAgICAgcmVzdWx0W3JlZ2lvbi5rZXldID0gcmVnaW9uLnNlcmlhbGl6ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgbWF0ZXJpYWxzQnlSZWdpb25zKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgcmVnaW9uS2V5IGluIHRoaXMucmVnaW9uc1N0cnVjdHVyZSkge1xuICAgICAgaWYgKHRoaXMucmVnaW9uc1N0cnVjdHVyZS5oYXNPd25Qcm9wZXJ0eShyZWdpb25LZXkpKSB7XG4gICAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMucmVnaW9uc1N0cnVjdHVyZVtyZWdpb25LZXldO1xuICAgICAgICByZXN1bHRbcmVnaW9uLmtleV0gPSByZWdpb24ubWF0ZXJpYWxzRGVjbCgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHVuaXFpZCAocHJlZml4LCBtb3JlRW50cm9weSkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3VuaXFpZC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICByZXZpc2VkIGJ5OiBLYW5rcmVsdW5lIChodHRwOi8vd3d3LndlYmZha3RvcnkuaW5mby8pXG4gIC8vICAgICAgbm90ZSAxOiBVc2VzIGFuIGludGVybmFsIGNvdW50ZXIgKGluIGxvY3V0dXMgZ2xvYmFsKSB0byBhdm9pZCBjb2xsaXNpb25cbiAgLy8gICBleGFtcGxlIDE6IHZhciAkaWQgPSB1bmlxaWQoKVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRyZXN1bHQgPSAkaWQubGVuZ3RoID09PSAxM1xuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogdmFyICRpZCA9IHVuaXFpZCgnZm9vJylcbiAgLy8gICBleGFtcGxlIDI6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gKDEzICsgJ2ZvbycubGVuZ3RoKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMzogdmFyICRpZCA9IHVuaXFpZCgnYmFyJywgdHJ1ZSlcbiAgLy8gICBleGFtcGxlIDM6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gKDIzICsgJ2JhcicubGVuZ3RoKVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuXG4gIGlmICh0eXBlb2YgcHJlZml4ID09PSAndW5kZWZpbmVkJykge1xuICAgIHByZWZpeCA9ICcnXG4gIH1cblxuICB2YXIgcmV0SWRcbiAgdmFyIF9mb3JtYXRTZWVkID0gZnVuY3Rpb24gKHNlZWQsIHJlcVdpZHRoKSB7XG4gICAgc2VlZCA9IHBhcnNlSW50KHNlZWQsIDEwKS50b1N0cmluZygxNikgLy8gdG8gaGV4IHN0clxuICAgIGlmIChyZXFXaWR0aCA8IHNlZWQubGVuZ3RoKSB7XG4gICAgICAvLyBzbyBsb25nIHdlIHNwbGl0XG4gICAgICByZXR1cm4gc2VlZC5zbGljZShzZWVkLmxlbmd0aCAtIHJlcVdpZHRoKVxuICAgIH1cbiAgICBpZiAocmVxV2lkdGggPiBzZWVkLmxlbmd0aCkge1xuICAgICAgLy8gc28gc2hvcnQgd2UgcGFkXG4gICAgICByZXR1cm4gQXJyYXkoMSArIChyZXFXaWR0aCAtIHNlZWQubGVuZ3RoKSkuam9pbignMCcpICsgc2VlZFxuICAgIH1cbiAgICByZXR1cm4gc2VlZFxuICB9XG5cbiAgdmFyICRnbG9iYWwgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBHTE9CQUwpXG4gICRnbG9iYWwuJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzIHx8IHt9XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXNcbiAgJGxvY3V0dXMucGhwID0gJGxvY3V0dXMucGhwIHx8IHt9XG5cbiAgaWYgKCEkbG9jdXR1cy5waHAudW5pcWlkU2VlZCkge1xuICAgIC8vIGluaXQgc2VlZCB3aXRoIGJpZyByYW5kb20gaW50XG4gICAgJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAweDc1YmNkMTUpXG4gIH1cbiAgJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQrK1xuXG4gIC8vIHN0YXJ0IHdpdGggcHJlZml4LCBhZGQgY3VycmVudCBtaWxsaXNlY29uZHMgaGV4IHN0cmluZ1xuICByZXRJZCA9IHByZWZpeFxuICByZXRJZCArPSBfZm9ybWF0U2VlZChwYXJzZUludChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDAsIDEwKSwgOClcbiAgLy8gYWRkIHNlZWQgaGV4IHN0cmluZ1xuICByZXRJZCArPSBfZm9ybWF0U2VlZCgkbG9jdXR1cy5waHAudW5pcWlkU2VlZCwgNSlcbiAgaWYgKG1vcmVFbnRyb3B5KSB7XG4gICAgLy8gZm9yIG1vcmUgZW50cm9weSB3ZSBhZGQgYSBmbG9hdCBsb3dlciB0byAxMFxuICAgIHJldElkICs9IChNYXRoLnJhbmRvbSgpICogMTApLnRvRml4ZWQoOCkudG9TdHJpbmcoKVxuICB9XG5cbiAgcmV0dXJuIHJldElkXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3VuaXFpZC5qc1xuICoqLyIsImNsYXNzIEhhc2hBcGkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZ1bmN0aW9uQ2FsbHMgPSB7fTtcblxuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaC5tYXRjaCgvI2hhc2hBcGk6KC4qPyk6XFwvaGFzaEFwaS8pO1xuICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgY29uc3QgZnVuY3Rpb25DYWxscyA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoZXNbMV0pKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZnVuY3Rpb25DYWxscykge1xuICAgICAgICAgIGlmIChpdGVtLmZ1bmMpIHtcbiAgICAgICAgICAgIHRoaXMuZnVuY3Rpb25DYWxsc1tpdGVtLmZ1bmNdID0gaXRlbS5hcmdzIHx8IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNob3VsZENhbGwoZnVuYykge1xuICAgIHJldHVybiB0aGlzLmZ1bmN0aW9uQ2FsbHNbZnVuY10gfHwgZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGFzaEFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvSGFzaEFwaS5qc1xuICoqLyIsImltcG9ydCBGcmFtZUFwaSBmcm9tICcuL0ZyYW1lQXBpJztcbmltcG9ydCB1bmlxdWVJZCBmcm9tICcuLy4uL3VuaXFpZCc7XG5cbmNsYXNzIFZpc3VhbEZyYW1lXG57XG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgdGhpcy5wYXJhbXMoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpXG4gICAge1xuICAgICAgICBGcmFtZUFwaS5iaW5kTWVzc2FnZUxpc3RlbmVyKHRoaXMpO1xuICAgICAgICB0aGlzLnBhcmVudFdpbmRvdyA9IHdpbmRvdy5wYXJlbnQ7XG4gICAgICAgIC8qKiBAdmFyIEZyb250ZW5kTW9uc3RlciAqL1xuICAgICAgICB0aGlzLnBhcmVudE1vbnN0ZXIgPSB0aGlzLnBhcmVudFdpbmRvdy5Gcm9udGVuZE1vbnN0ZXI7XG4gICAgICAgIHRoaXMucGFyZW50QnVpbGRlciA9IHRoaXMucGFyZW50TW9uc3Rlci5idWlsZGVyO1xuICAgICAgICB0aGlzLmN1cnJlbnRNb25zdGVyQ29udGVudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1ha2VJdE1vdmUoKTtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhhdC51cGRhdGVIYW5kbGVycygpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgZ2V0ICRtb25zdGVyQ29udGVudCgpXG4gICAge1xuICAgICAgICBpZiAodGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZTtcbiAgICB9XG5cbiAgICByZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpXG4gICAge1xuICAgICAgICB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlID0ge307XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICAkKHRoaXMuc2V0dGluZ3NbJ21vbnN0ZXItY29udGVudC1zZWxlY3RvciddKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgICAgICBpZiAoIXRoYXQuY3VycmVudE1vbnN0ZXJDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhhdC5jdXJyZW50TW9uc3RlckNvbnRlbnQgPSAkKHRoaXMpLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhhdC4kbW9uc3RlckNvbnRlbnRDYWNoZVskKHRoaXMpLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpXSA9ICQodGhpcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldE5ld01hdGVyaWFsSW5kZXgoKVxuICAgIHtcbiAgICAgICAgaWYgKCF0aGlzLmxhc3RNYXRlcmlhbEluZGV4KSB7XG4gICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgICQoJ1tkYXRhLWlzLW1hdGVyaWFsXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuZGF0YSgnbWF0ZXJpYWwtaW5kZXgnKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmxhc3RNYXRlcmlhbEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdE1hdGVyaWFsSW5kZXgrKztcbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdE1hdGVyaWFsSW5kZXg7XG4gICAgfVxuXG4gICAgdXBkYXRlSGFuZGxlcnMoKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwgJiYgdGhpcy4kaGFuZGxlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuJGhhbmRsZXJzLmNzcyhcbiAgICAgICAgICAgICAgICAndG9wJyxcbiAgICAgICAgICAgICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLnBvc2l0aW9uKCkudG9wICsgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5oZWlnaHQoKSAtIHRoaXMuJGhhbmRsZXJzLmhlaWdodCgpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5hZGRDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ha2VJdE1vdmUoKVxuICAgIHtcbiAgICAgICAgdGhpcy4kaGFuZGxlcnMgPSAkKGBcbjxkaXYgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzXCI+XG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX2NvbmZpZ3VyZVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNvZ1wiPjwvaT5cbiAgICA8L2E+XG4gICAgPHNwYW4gY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19ibG9jay1uYW1lXCI+QmxvY2sgbmFtZSBoZXJlPC9zcGFuPlxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLXVwXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtdXBcIj48L2k+XG4gICAgPC9hPlxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLWRvd25cIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3duXCI+PC9pPlxuICAgIDwvYT5cbiAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fY2xvbmVcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9uZVwiPjwvaT5cbiAgICA8L2E+XG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX3JlbW92ZVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPlxuICAgIDwvYT5cbjwvZGl2PmApO1xuICAgICAgICAkKCdib2R5JykuYXBwZW5kKHRoaXMuJGhhbmRsZXJzKTtcbiAgICAgICAgdGhpcy4kaGFuZGxlcnMuaGlkZSgpO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgJCh0aGlzLnNldHRpbmdzWydtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InXSkub24oe1xuICAgICAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24gaG92ZXJJbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ20tbW9uc3Rlci1jb250ZW50X19tYXRlcmlhbC0taGlnaGxpZ2h0ZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZWxlYXZlOiBmdW5jdGlvbiBob3Zlck91dCgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ20tbW9uc3Rlci1jb250ZW50X19tYXRlcmlhbC0taGlnaGxpZ2h0ZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdE1hdGVyaWFsKCR0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICAgICB0aGF0LiRoYW5kbGVycy5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtdXAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICAgICAgICAgICAgdmFyICRwcmV2ID0gdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5wcmV2KCdbZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICAgICAgICAgICAgICBpZiAoJHByZXYubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5pbnNlcnRCZWZvcmUoJHByZXYpO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KS5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtZG93bicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgJG5leHQgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLm5leHQoJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICAgICAgICAgICAgIGlmICgkbmV4dC5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLmluc2VydEFmdGVyKCRuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGVIYW5kbGVycygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSkub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19jbG9uZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGNsb25lZE1hdGVyaWFsID0gdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5jbG9uZSgpO1xuICAgICAgICAgICAgICAgICRjbG9uZWRNYXRlcmlhbC5kYXRhKCdtYXRlcmlhbC1pbmRleCcsIHRoYXQuZ2V0TmV3TWF0ZXJpYWxJbmRleCgpKS5pbnNlcnRBZnRlcih0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdE1hdGVyaWFsKCRjbG9uZWRNYXRlcmlhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pLm9uKCdjbGljaycsICcubW9uc3Rlci1ibG9jay1oYW5kbGVyc19fcmVtb3ZlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgbWF0ZXJpYWw/JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGhhbmRsZXJzLmhpZGUoKTsgLy8gaXQgZG9lcyBub3Qgd29yay4gd2h5PyBOZWVkIHRvIGZpeCFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbGVjdE1hdGVyaWFsKCRtYXRlcmlhbClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsID09PSAkbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgICAgICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5yZW1vdmVDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsID0gJG1hdGVyaWFsO1xuICAgICAgICB0aGlzLnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgIHRoaXMuJGhhbmRsZXJzLnNob3coKTtcbiAgICB9XG5cbiAgICBzZXJpYWxpemVDb250ZW50KGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBmb3IgKGNvbnN0IHVuaXF1ZUNvbnRlbnRJZCBpbiB0aGlzLiRtb25zdGVyQ29udGVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuJG1vbnN0ZXJDb250ZW50Lmhhc093blByb3BlcnR5KHVuaXF1ZUNvbnRlbnRJZCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkbW9uc3RlciA9IHRoaXMuJG1vbnN0ZXJDb250ZW50W3VuaXF1ZUNvbnRlbnRJZF07XG4gICAgICAgICAgICAgICAgcmVzdWx0WyRtb25zdGVyLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpXSA9IHRoYXQuc2VyaWFsaXplVW5pcXVlQ29udGVudCgkbW9uc3Rlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZW5kVG9CdWlsZGVyKGNhbGxiYWNrLCBbcmVzdWx0XSk7XG4gICAgfVxuXG4gICAgc2VyaWFsaXplVW5pcXVlQ29udGVudCgkbW9uc3RlckNvbnRlbnQpXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgcmVzdWx0LnVuaXF1ZUNvbnRlbnRJZCA9ICRtb25zdGVyQ29udGVudC5kYXRhKCd1bmlxdWVDb250ZW50SWQnKTtcbiAgICAgICAgcmVzdWx0Lm1hdGVyaWFscyA9IHt9O1xuICAgICAgICAkbW9uc3RlckNvbnRlbnQuZmluZCgnW2RhdGEtaXMtbWF0ZXJpYWw9XFwnMVxcJ10nKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHt9O1xuICAgICAgICAgICAgbWF0ZXJpYWwuYmxvY2sgPSAkKHRoaXMpLmRhdGEoJ21hdGVyaWFsQmxvY2snKTtcbiAgICAgICAgICAgIHJlc3VsdC5tYXRlcmlhbHNbJCh0aGlzKS5kYXRhKCdtYXRlcmlhbEluZGV4JyldID0gbWF0ZXJpYWw7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgVmlzdWFsRnJhbWUgc2V0dGluZ3MuXG4gICAgICogVXNlcyBWaXN1YWxGcmFtZVNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAgICovXG4gICAgcGFyYW1zKClcbiAgICB7XG4gICAgICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5WaXN1YWxGcmFtZVNldHRpbmdzIHx8IHt9O1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICAgICAgICdtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InOiAnLm0tbW9uc3Rlci1jb250ZW50X19jb250ZW50J1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB1c2VyU2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGlmICh1c2VyU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgfVxuXG4gICAgc2VuZFRvQnVpbGRlcihmdW5jLCBhcmdzKVxuICAgIHtcbiAgICAgICAgRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5wYXJlbnRXaW5kb3csIGZ1bmMsIGFyZ3MpO1xuICAgIH1cblxuICAgIG5ld0Jsb2NrKG1hdGVyaWFsTmFtZSwgcmVnaW9uTmFtZSlcbiAgICB7XG4gICAgICAgIC8vIEB0b2RvIEFkZCBsb2FkZXIgaGVyZSBhcyB3ZSBhcmUgdXNpbmcgZm9ybSBwb3N0ICFcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gdW5pcXVlSWQoJ21hdCcpO1xuICAgICAgICBjb25zdCBuZXdEYXRhID0ge1xuICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICBwcm92aWRlcnNFbnRpdGllczogdGhpcy5wYXJlbnRCdWlsZGVyLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgcmVnaW9uc01hdGVyaWFsczogdGhpcy5wYXJlbnRCdWlsZGVyLmVudmlyb25tZW50cy5nZXQoJ3BhZ2Utc3RydWN0dXJlJykubWF0ZXJpYWxzQnlSZWdpb25zKCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhY3Rpb246ICdyZW5kZXItbWF0ZXJpYWwnLFxuICAgICAgICAgIG1hdGVyaWFsSWQ6IHJhbmRvbUluZGV4LFxuICAgICAgICAgIG1hdGVyaWFsUmVnaW9uOiByZWdpb25OYW1lLFxuICAgICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbE5hbWVcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG5ld0RhdGEudGVtcGxhdGUucmVnaW9uc01hdGVyaWFscy5oYXNPd25Qcm9wZXJ0eShyZWdpb25OYW1lKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBuZXdEYXRhLnRlbXBsYXRlLnJlZ2lvbnNNYXRlcmlhbHNbcmVnaW9uTmFtZV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0RhdGEudGVtcGxhdGUucmVnaW9uc01hdGVyaWFsc1tyZWdpb25OYW1lXVtyYW5kb21JbmRleF0gPSB7bWF0ZXJpYWw6IG1hdGVyaWFsTmFtZX07XG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnPGZvcm0gbWV0aG9kPVwiUE9TVFwiPjwvZm9ybT4nKTtcbiAgICAgICAgY29uc3QgJGlucHV0ID0gJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX19qc29uXCI+Jyk7XG4gICAgICAgIGNvbnN0ICRjc3JmID0gJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIj4nKTtcblxuICAgICAgICAkY3NyZlxuICAgICAgICAgIC5hdHRyKCduYW1lJywgJCgnbWV0YVtuYW1lPWNzcmYtcGFyYW1dJykuYXR0cignY29udGVudCcpKVxuICAgICAgICAgIC52YWwoJCgnbWV0YVtuYW1lPWNzcmYtdG9rZW5dJykuYXR0cignY29udGVudCcpKVxuICAgICAgICAgIC5hcHBlbmRUbygkZm9ybSk7XG5cbiAgICAgICAgJGlucHV0XG4gICAgICAgICAgLnZhbChKU09OLnN0cmluZ2lmeShuZXdEYXRhKSlcbiAgICAgICAgICAuYXBwZW5kVG8oJGZvcm0pO1xuXG4gICAgICAgICRmb3JtWzBdLnN1Ym1pdCgpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gJC5hamF4KHtcbiAgICAgICAgLy8gICAgIHVybDogd2luZG93LmxvY2F0aW9uLFxuICAgICAgICAvLyAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIC8vICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgIC8vICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgICAvLyAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgLy8gICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG5ld0RhdGEpLFxuICAgICAgICAvLyB9KS5kb25lKGZ1bmN0aW9uIG9rKGRhdGEpIHtcbiAgICAgICAgLy8gICAgIGNvbnN0ICRlbGVtZW50ID0gJChkYXRhKTtcbiAgICAgICAgLy8gICAgIHRoYXQuJG1vbnN0ZXJDb250ZW50W3RoYXQuY3VycmVudE1vbnN0ZXJDb250ZW50XS5hcHBlbmQoJGVsZW1lbnQpO1xuICAgICAgICAvLyAgICAgdGhpcy5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgICAgIC8vICAgICAvKiBnbG9iYWwgc21vb3RoU2Nyb2xsOmZhbHNlICovXG4gICAgICAgIC8vICAgICBzbW9vdGhTY3JvbGwuYW5pbWF0ZVNjcm9sbCgkZWxlbWVudFswXS5vZmZzZXRUb3ApO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbEZyYW1lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZS5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==