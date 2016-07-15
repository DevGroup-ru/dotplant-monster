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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
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
	      var editable = $node.data('editableParams');
	      if ((typeof editable === 'undefined' ? 'undefined' : _typeof(editable)) !== 'object') {
	        return false;
	      }
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
	              var $this = $(this);
	              final[key][$this.data('recursiveItemKey')] = recursiveIterator(arr[key], 'item', $this);
	            });
	          } else {
	            var $node = $scope.find('[data-editable-key="' + fullKeyPath + '"]');
	            final[key] = Material.serializeNode($node);
	          }
	        });
	        return final;
	      };
	
	      return recursiveIterator(editableKeys, '', this.$node);
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
	
	            Object.keys(dataKeys).forEach(function (key) {
	              if (result[regionKey][materialIndex].hasOwnProperty(key) === false) {
	                return;
	              }
	              resultByProviders[providerIndex][regionKey][materialIndex][key] = result[regionKey][materialIndex][key];
	            });
	          });
	        });
	      });
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
	      this.$controls = this.$builder.find('.controls');
	      var builder = this;
	      this.$controls.find('.controls__refresh').click(function () {
	        builder.frameContentWindow.location.reload();
	        return false;
	      });
	      this.$controls.find('.controls__save').click(function () {
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
	      regions.each(function iter() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTJkMzUwYTdmYmMwOTY0NTA4NTMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvRnJvbnRlbmRNb25zdGVyLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9FZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZUNvbXBvbmVudHMvTWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1BhZ2VTdHJ1Y3R1cmVDb21wb25lbnRzL1JlZ2lvbi5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL1dZU0lXWUcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVB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QWxDLEVBQThDLFdBQTlDLElBQTZELEVBQUMsVUFBVSxZQUFYLEVBQTdEO0FBQ0EsaUJBQU0sUUFBUSxFQUFFLDZCQUFGLENBQWQ7QUFDQSxpQkFBTSxTQUFTLEVBQUUscUNBQUYsQ0FBZjtBQUNBLGlCQUFNLFFBQVEsRUFBRSx1QkFBRixDQUFkOztBQUVBLG1CQUNHLElBREgsQ0FDUSxNQURSLEVBQ2dCLEVBQUUsdUJBQUYsRUFBMkIsSUFBM0IsQ0FBZ0MsU0FBaEMsQ0FEaEIsRUFFRyxHQUZILENBRU8sRUFBRSx1QkFBRixFQUEyQixJQUEzQixDQUFnQyxTQUFoQyxDQUZQLEVBR0csUUFISCxDQUdZLEtBSFo7O0FBS0Esb0JBQ0csR0FESCxDQUNPLEtBQUssU0FBTCxDQUFlLE9BQWYsQ0FEUCxFQUVHLFFBRkgsQ0FFWSxLQUZaOztBQUlBLG1CQUFNLENBQU4sRUFBUyxNQUFUOztBQUVBLG9CQUFPLEtBQVA7Ozs7Ozs7Ozs7Ozs7OztBQWVIOzs7NkJBMU9EO0FBQ0ksaUJBQUksS0FBSyxvQkFBVCxFQUErQjtBQUMzQix3QkFBTyxLQUFLLG9CQUFaO0FBQ0g7QUFDRCxrQkFBSywwQkFBTDtBQUNBLG9CQUFPLEtBQUssb0JBQVo7QUFDSDs7Ozs7O21CQXVPVSxXOzs7Ozs7OztBQzFRZiwwQyIsImZpbGUiOiJ2aXN1YWwtYnVpbGRlci9zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBlMmQzNTBhN2ZiYzA5NjQ1MDg1M1xuICoqLyIsImltcG9ydCAnLi9idW5kbGUuY3NzJztcblxuaW1wb3J0IEZyb250ZW5kTW9uc3RlciBmcm9tICcuL0Zyb250ZW5kTW9uc3Rlcic7XG5cbndpbmRvdy5Gcm9udGVuZE1vbnN0ZXIgPSBuZXcgRnJvbnRlbmRNb25zdGVyKCk7XG4vL1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzXG4gKiovIiwiaW1wb3J0IEZyYW1lQXBpIGZyb20gJy4vLi4vdmlzdWFsLWZyYW1lL0ZyYW1lQXBpJztcblxuY2xhc3MgQmFzZUVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IodmlzdWFsQnVpbGRlciwgbmFtZSkge1xuICAgIHRoaXMudmlzdWFsQnVpbGRlciA9IHZpc3VhbEJ1aWxkZXI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhcmdldCA9ICQodGhpcy52aXN1YWxCdWlsZGVyLnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKVswXS5jb250ZW50V2luZG93O1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgLy8gZGVhY3RpdmF0ZSBjdXJyZW50IHNlbGVjdGVkIGVudmlyb25tZW50XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gdGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkge1xuICAgICAgdGhpcy52aXN1YWxCdWlsZGVyLmVudmlyb25tZW50cy5nZXQodGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkuZGVhY3RpdmF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy52aXN1YWxCdWlsZGVyLmNsZWFyU3RhY2thYmxlKCk7XG4gIH1cblxuICBzZW5kTWVzc2FnZShmdW5jLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMudGFyZ2V0LCBmdW5jLCBhcmdzKTtcbiAgfVxuICBcbiAgcGFnZUNoYW5nZWQoKSB7XG4gICAgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUVudmlyb25tZW50O1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJjbGFzcyBGcmFtZUFwaSB7XG4gIHN0YXRpYyBnZXQgaXNJZSgpIHtcbiAgICAvKiBnbG9iYWwgaXMgKi9cbiAgICBpZiAodHlwZW9mKGlzKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBpcy5pZSgpOy8vIHx8IGlzLmVkZ2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRpYyBiaW5kTWVzc2FnZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFja0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgIGxldCBtZXNzYWdlID0gbnVsbDtcbiAgICAgIGlmIChGcmFtZUFwaS5pc0llKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZSA9IGV2ZW50LmRhdGE7XG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0ZW5lclttZXNzYWdlLmZ1bmNdKSB7XG4gICAgICAgIGxpc3RlbmVyW21lc3NhZ2UuZnVuY10uYXBwbHkobGlzdGVuZXIsIG1lc3NhZ2UuYXJncyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElFOFxuICAgICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbm1lc3NhZ2UnLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHNlbmRNZXNzYWdlKHRhcmdldCwgZnVuYywgYXJncykge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAnZnVuYyc6IGZ1bmMsXG4gICAgICAnYXJncyc6IGFyZ3MsXG4gICAgfTtcbiAgICBjb25zdCBtZXNzYWdlID0gRnJhbWVBcGkuaXNJZSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogZGF0YTtcblxuICAgIHRhcmdldC5wb3N0TWVzc2FnZShtZXNzYWdlLCAnKicpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyYW1lQXBpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaS5qc1xuICoqLyIsImltcG9ydCBWaXN1YWxCdWlsZGVyIGZyb20gJy4vY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXInO1xuaW1wb3J0IFZpc3VhbEZyYW1lIGZyb20gJy4vY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUnO1xuaW1wb3J0IEhhc2hBcGkgZnJvbSAnLi9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9IYXNoQXBpJztcblxuY2xhc3MgRnJvbnRlbmRNb25zdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLnZpc3VhbEJ1bGRlciA9IG51bGw7XG4gICAgdGhpcy5oYXNoQXBpID0gbmV3IEhhc2hBcGkoKTtcbiAgICBpZiAod2luZG93LnBhcmVudCAhPT0gd2luZG93ICYmIHdpbmRvdy5wYXJlbnQuRnJvbnRlbmRNb25zdGVyKSB7XG4gICAgICBpZiAod2luZG93LnBhcmVudC5Gcm9udGVuZE1vbnN0ZXIuaGFzQnVpbGRlcikge1xuICAgICAgICB0aGlzLlZpc3VhbEZyYW1lID0gbmV3IFZpc3VhbEZyYW1lKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKiBnbG9iYWxzOiBzbW9vdGhTY3JvbGwqL1xuICAgIGlmICh0eXBlb2Yoc21vb3RoU2Nyb2xsKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNtb290aFNjcm9sbC5pbml0KCk7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBWaXN1YWxCdWlsZGVyIGNsYXNzIGluc3RhbmNlXG4gICAqIEByZXR1cm5zIFZpc3VhbEJ1aWxkZXJcbiAgICovXG4gIGdldCBidWlsZGVyKCkge1xuICAgIGlmICh0aGlzLnZpc3VhbEJ1bGRlciA9PT0gbnVsbCkge1xuICAgICAgdGhpcy52aXN1YWxCdWxkZXIgPSBuZXcgVmlzdWFsQnVpbGRlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy52aXN1YWxCdWxkZXI7XG4gIH1cblxuICAvKipcbiAgICogSWYgdGhpcyBGcm9udGVuZE1vbnN0ZXIgaW5zdGFuY2UgaGFzIFZpc3VhbCBCdWlsZGVyIG9uIHBhZ2VcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaGFzQnVpbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZGVyLiRidWlsZGVyLmxlbmd0aCA9PT0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIEZyb250ZW5kTW9uc3RlciBzZXR0aW5ncy5cbiAgICogVXNlcyBGcm9udGVuZE1vbnN0ZXJTZXR0aW5ncyB2YXJpYWJsZSBpZiBwcm92aWRlZCBvciBkZWZhdWx0IHZhbHVlcyBpbnN0ZWFkLlxuICAgKi9cbiAgcGFyYW1zKCkge1xuICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5Gcm9udGVuZE1vbnN0ZXJTZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIHVzZXJTZXR0aW5ncykge1xuICAgICAgaWYgKHVzZXJTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyb250ZW5kTW9uc3RlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvRnJvbnRlbmRNb25zdGVyLmpzXG4gKiovIiwiaW1wb3J0IGFsbEVkaXRhYmxlcyBmcm9tICcuL2VkaXRhYmxlcy9hbGwnO1xuXG5jbGFzcyBFZGl0YWJsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZWRpdGFibGVzQnlUeXBlID0ge307XG4gICAgLy8gaW5pdGlhbGl6ZSBiYXNlIGJ1aWxkLWluIGVkaXRhYmxlc1xuICAgIGFsbEVkaXRhYmxlcygpO1xuICAgIHRoaXMuZWRpdGFibGVzQnlUeXBlID0gd2luZG93Lk1PTlNURVJfRURJVEFCTEVTO1xuICB9XG5cbiAgc2VyaWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBjb25zdCBlZGl0YWJsZSA9ICRub2RlLmRhdGEoJ2VkaXRhYmxlUGFyYW1zJyk7XG4gICAgaWYgKHR5cGVvZihlZGl0YWJsZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCB0eXBlID0gZWRpdGFibGUuaGFzT3duUHJvcGVydHkoJ3R5cGUnKSA/IGVkaXRhYmxlLnR5cGUgOiAnc3RyaW5nJztcbiAgICBpZiAodGhpcy5lZGl0YWJsZXNCeVR5cGUuaGFzT3duUHJvcGVydHkodHlwZSkgPT09IGZhbHNlKSB7XG4gICAgICB0eXBlID0gJ3N0cmluZyc7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwb3J0VmFyaWFibGUgPSBlZGl0YWJsZS5oYXNPd25Qcm9wZXJ0eSgndGFyZ2V0JykgPyBlZGl0YWJsZS50YXJnZXQgOiAnZGF0YSc7XG5cbiAgICByZXR1cm4gdGhpcy5lZGl0YWJsZXNCeVR5cGVbdHlwZV0oJG5vZGUsIGV4cG9ydFZhcmlhYmxlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0YWJsZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL0VkaXRhYmxlLmpzXG4gKiovIiwiY2xhc3MgTWF0ZXJpYWwge1xuICBjb25zdHJ1Y3Rvcigkbm9kZSkge1xuICAgIHRoaXMuJG5vZGUgPSAkbm9kZTtcbiAgICB0aGlzLm1hdGVyaWFsUGF0aCA9IHRoaXMuJG5vZGUuZGF0YSgnbWF0ZXJpYWxQYXRoJyk7XG5cbiAgICB0aGlzLm1hdGVyaWFsTmFtZSA9IHRoaXMubWF0ZXJpYWxQYXRoLnJlcGxhY2UoLy4qXFwuKC4qKSQvLCAnJDEnKTtcbiAgICAvLyBAdG9kbyBDSEFOR0UgVEhJU1xuICAgIHRoaXMua2V5ID0gdGhpcy4kbm9kZS5kYXRhKCdtYXRlcmlhbEluZGV4Jyk7XG4gIH1cblxuICBwcm9jZXNzTWF0ZXJpYWwoKSB7XG4gICAgcmV0dXJuICQoYDxsaSBjbGFzcz1cInBhZ2Utc3RydWN0dXJlX19tYXRlcmlhbFwiPiR7dGhpcy5tYXRlcmlhbE5hbWV9PC9saT5gKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5Gcm9udGVuZE1vbnN0ZXIuYnVpbGRlci5lZGl0YWJsZS5zZXJpYWxpemVFZGl0YWJsZSgkbm9kZSk7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgLy8gbWF0ZXJpYWwgaGFzIGRhdGEtZWRpdGFibGUta2V5cyB3aXRoIHNjaGVtYVxuICAgIGNvbnN0IGVkaXRhYmxlS2V5cyA9IHRoaXMuJG5vZGUuZGF0YSgnZWRpdGFibGVLZXlzJyk7XG4gICAgY29uc3QgcmVjdXJzaXZlSXRlcmF0b3IgPSBmdW5jdGlvbiBpdGVyKGFyciwgcGF0aCwgJHNjb3BlKSB7XG4gICAgICBjb25zdCBmaW5hbCA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMoYXJyKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGxldCBmdWxsS2V5UGF0aCA9IGtleTtcbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICBmdWxsS2V5UGF0aCA9IGAke3BhdGh9LiR7a2V5fWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZihhcnJba2V5XSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY29uc3QgJGl0ZW1zID0gJHNjb3BlLmZpbmQoYFtkYXRhLXJlY3Vyc2l2ZS1pdGVtPVwiJHtmdWxsS2V5UGF0aH1cIl1gKTtcbiAgICAgICAgICBmaW5hbFtrZXldID0ge307XG4gICAgICAgICAgJGl0ZW1zLmVhY2goZnVuY3Rpb24gaXRlbXNSZWMoKSB7XG4gICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICBmaW5hbFtrZXldWyR0aGlzLmRhdGEoJ3JlY3Vyc2l2ZUl0ZW1LZXknKV0gPSByZWN1cnNpdmVJdGVyYXRvcihcbiAgICAgICAgICAgICAgYXJyW2tleV0sXG4gICAgICAgICAgICAgICdpdGVtJyxcbiAgICAgICAgICAgICAgJHRoaXNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgJG5vZGUgPSAkc2NvcGUuZmluZChgW2RhdGEtZWRpdGFibGUta2V5PVwiJHtmdWxsS2V5UGF0aH1cIl1gKTtcbiAgICAgICAgICBmaW5hbFtrZXldID0gTWF0ZXJpYWwuc2VyaWFsaXplTm9kZSgkbm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZpbmFsO1xuICAgIH07XG5cbiAgICByZXR1cm4gcmVjdXJzaXZlSXRlcmF0b3IoZWRpdGFibGVLZXlzLCAnJywgdGhpcy4kbm9kZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0ZXJpYWw7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9QYWdlU3RydWN0dXJlQ29tcG9uZW50cy9NYXRlcmlhbC5qc1xuICoqLyIsImltcG9ydCBNYXRlcmlhbCBmcm9tICcuL01hdGVyaWFsJztcblxuY2xhc3MgUmVnaW9uIHtcbiAgY29uc3RydWN0b3IoJG5vZGUpIHtcbiAgICB0aGlzLm1hdGVyaWFscyA9IHt9O1xuICAgIHRoaXMuJG5vZGUgPSAkbm9kZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gJG5vZGUuZGF0YSgnY29udGVudERlc2NyaXB0aW9uJyk7XG4gIH1cblxuICBwcm9jZXNzUmVnaW9uKCkge1xuICAgIGNvbnN0ICRyZWdpb25MaSA9ICQoYDxsaSBjbGFzcz1cInBhZ2Utc3RydWN0dXJlX19yZWdpb25cIj4ke3RoaXMucmVnaW9uRGVzY3JpcHRpb259PC9saT5gKTtcbiAgICB0aGlzLmtleSA9IHRoaXMuJG5vZGUuZGF0YSgncmVnaW9uS2V5Jyk7XG4gICAgdGhpcy5pZCA9IHRoaXMuJG5vZGUuZGF0YSgncmVnaW9uSWQnKTtcbiAgICBjb25zdCAkcmVnaW9uVWwgPSAkKCc8dWwgY2xhc3M9XCJwYWdlLXN0cnVjdHVyZV9fcmVnaW9uLW1hdGVyaWFsc1wiPjwvdWw+Jyk7XG5cbiAgICBjb25zdCAkbWF0ZXJpYWxzID0gdGhpcy4kbm9kZS5maW5kKCdbZGF0YS1pcy1tYXRlcmlhbD0xXScpO1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgJG1hdGVyaWFscy5lYWNoKGZ1bmN0aW9uIG1hdGVyaWFsc0l0ZXJhdG9yKCkge1xuICAgICAgY29uc3QgJG1hdGVyaWFsTm9kZSA9ICQodGhpcyk7XG4gICAgICBjb25zdCBtYXRlcmlhbE9iamVjdCA9IG5ldyBNYXRlcmlhbCgkbWF0ZXJpYWxOb2RlKTtcbiAgICAgIGNvbnN0ICRsaSA9IG1hdGVyaWFsT2JqZWN0LnByb2Nlc3NNYXRlcmlhbCgpO1xuICAgICAgdGhhdC5tYXRlcmlhbHNbbWF0ZXJpYWxPYmplY3Qua2V5XSA9IG1hdGVyaWFsT2JqZWN0O1xuICAgICAgJHJlZ2lvblVsLmFwcGVuZCgkbGkpO1xuICAgIH0pO1xuXG4gICAgJHJlZ2lvbkxpLmFwcGVuZCgkcmVnaW9uVWwpO1xuICAgIHJldHVybiAkcmVnaW9uTGk7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgbWF0ZXJpYWxzID0gdGhpcy5tYXRlcmlhbHM7XG4gICAgT2JqZWN0LmtleXMobWF0ZXJpYWxzKS5mb3JFYWNoKGZ1bmN0aW9uIGl0ZXIobWF0ZXJpYWxLZXkpIHtcbiAgICAgIHJlc3VsdFttYXRlcmlhbEtleV0gPSBtYXRlcmlhbHNbbWF0ZXJpYWxLZXldLnNlcmlhbGl6ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBtYXRlcmlhbHNEZWNsKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgbWF0ZXJpYWxLZXkgaW4gdGhpcy5tYXRlcmlhbHMpIHtcbiAgICAgIGlmICh0aGlzLm1hdGVyaWFscy5oYXNPd25Qcm9wZXJ0eShtYXRlcmlhbEtleSkpIHtcbiAgICAgICAgcmVzdWx0W21hdGVyaWFsS2V5XSA9IHtcbiAgICAgICAgICAnbWF0ZXJpYWwnOiB0aGlzLm1hdGVyaWFsc1ttYXRlcmlhbEtleV0ubWF0ZXJpYWxQYXRoLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1BhZ2VTdHJ1Y3R1cmVDb21wb25lbnRzL1JlZ2lvbi5qc1xuICoqLyIsImltcG9ydCBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50JztcbmltcG9ydCBNYXRlcmlhbHNFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9NYXRlcmlhbHNFbnZpcm9ubWVudCc7XG5pbXBvcnQgQ3VzdG9taXphdGlvbkVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudCc7XG5pbXBvcnQgQWN0aW9uRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvQWN0aW9uRW52aXJvbm1lbnQnO1xuaW1wb3J0IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9QYWdlU3RydWN0dXJlRW52aXJvbm1lbnQnO1xuaW1wb3J0IEZyYW1lQXBpIGZyb20gJy4vLi4vdmlzdWFsLWZyYW1lL0ZyYW1lQXBpJztcbmltcG9ydCBFZGl0YWJsZSBmcm9tICcuL0VkaXRhYmxlJztcblxuY2xhc3MgVmlzdWFsQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFyYW1zKCk7XG4gICAgdGhpcy5yZXNvbHV0aW9uU3dpdGNoZXIoKTtcblxuICAgIHRoaXMuZW52aXJvbm1lbnRzID0gbmV3IE1hcChbXG4gICAgICBbJ3NpdGUtc3RydWN0dXJlJywgbmV3IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCh0aGlzLCAnc2l0ZS1zdHJ1Y3R1cmUnKV0sXG4gICAgICBbJ3BhZ2Utc3RydWN0dXJlJywgbmV3IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCh0aGlzLCAncGFnZS1zdHJ1Y3R1cmUnKV0sXG4gICAgICBbJ21hdGVyaWFscycsIG5ldyBNYXRlcmlhbHNFbnZpcm9ubWVudCh0aGlzLCAnbWF0ZXJpYWxzJyldLFxuICAgICAgWydjdXN0b21pemF0aW9uJywgbmV3IEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCh0aGlzLCAnY3VzdG9taXphdGlvbicpXSxcbiAgICAgIFsnYWN0aW9uJywgbmV3IEFjdGlvbkVudmlyb25tZW50KHRoaXMsICdhY3Rpb24nKV0sXG4gICAgXSk7XG5cbiAgICB0aGlzLmVudmlyb25tZW50U2VsZWN0b3IoKTtcblxuICAgIC8vIHNlbGVjdCBmaXJzdCBlbnZpcm9ubWVudCBieSBkZWZhdWx0XG4gICAgdGhpcy5zd2l0Y2hFbnZpcm9ubWVudCgnc2l0ZS1zdHJ1Y3R1cmUnKTtcbiAgICAkKCcubW9uc3Rlci1lbnZpcm9ubWVudC1zZWxlY3Rvcl9fZW52aXJvbm1lbnQtbGluaycpXG4gICAgICAuZmlyc3QoKVxuICAgICAgLmFkZENsYXNzKCdtb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rLS1hY3RpdmUnKTtcbiAgICBGcmFtZUFwaS5iaW5kTWVzc2FnZUxpc3RlbmVyKHRoaXMpO1xuXG4gICAgdGhpcy5lZGl0YWJsZSA9IG5ldyBFZGl0YWJsZSgpO1xuXG4gICAgdGhpcy5jb250cm9scygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgVmlzdWFsQnVpbGRlciBzZXR0aW5ncy5cbiAgICogVXNlcyBWaXN1YWxCdWlsZGVyU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuVmlzdWFsQnVpbGRlclNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgJ2VsZW1lbnQtc2VsZWN0b3InOiAnLm1vbnN0ZXItdmlzdWFsLWJ1aWxkZXInLFxuICAgICAgJ2ZyYW1lLXNlbGVjdG9yJzogJy5tb25zdGVyLXZpc3VhbC1mcmFtZScsXG4gICAgICBidW5kbGVzOiB7fSxcbiAgICAgICdzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJzogJ21vbnN0ZXItc3RhY2thYmxlLWNvbnRhaW5lcicsXG4gICAgICAnbmV3LWJsb2NrLXVybCc6ICcvbW9uc3Rlci92aXN1YWwtYnVpbGRlci9uZXctYmxvY2snLFxuICAgIH07XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuJGJ1aWxkZXIgPSAkKHRoaXMuc2V0dGluZ3NbJ2VsZW1lbnQtc2VsZWN0b3InXSk7XG4gICAgdGhpcy4kc3RhY2thYmxlID0gJChgLiR7dGhpcy5zZXR0aW5nc1snc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyddfWApO1xuICB9XG5cbiAgcmVzb2x1dGlvblN3aXRjaGVyKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGJlbUVsZW0gPSAncmVzb2x1dGlvbi1zd2l0Y2hlcl9fcmVzb2x1dGlvbi1saW5rJztcbiAgICBjb25zdCBhY3RpdmVNb2RpZmllciA9IGAke2JlbUVsZW19LS1hY3RpdmVgO1xuICAgIGNvbnN0ICRyZXNvbHV0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRyZXNvbHV0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAkcmVzb2x1dGlvbkxpbmtzLnJlbW92ZUNsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgICQodGhhdC5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSkud2lkdGgoJCh0aGlzKS5kYXRhKCdyZXNvbHV0aW9uV2lkdGgnKSk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGVudmlyb25tZW50U2VsZWN0b3IoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgYmVtRWxlbSA9ICdtb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJztcbiAgICBjb25zdCBhY3RpdmVNb2RpZmllciA9IGAke2JlbUVsZW19LS1hY3RpdmVgO1xuICAgIGNvbnN0ICRzZWN0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRzZWN0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBjb25zdCBlbnZpcm9ubWVudE5hbWUgPSAkKHRoaXMpLmRhdGEoJ2Vudmlyb25tZW50TmFtZScpO1xuICAgICAgaWYgKHRoYXQuY3VycmVudEVudmlyb25tZW50ID09PSBlbnZpcm9ubWVudE5hbWUpIHtcbiAgICAgICAgJHNlY3Rpb25MaW5rcy5yZW1vdmVDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICAgIHRoYXQuZW52aXJvbm1lbnRzLmdldChlbnZpcm9ubWVudE5hbWUpLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgdGhhdC5jdXJyZW50RW52aXJvbm1lbnQgPSBudWxsO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgICRzZWN0aW9uTGlua3MucmVtb3ZlQ2xhc3MoYWN0aXZlTW9kaWZpZXIpO1xuICAgICAgdGhhdC5zd2l0Y2hFbnZpcm9ubWVudChlbnZpcm9ubWVudE5hbWUpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBzd2l0Y2hFbnZpcm9ubWVudChlbnZpcm9ubWVudE5hbWUpIHtcbiAgICB0aGlzLmVudmlyb25tZW50cy5nZXQoZW52aXJvbm1lbnROYW1lKS5hY3RpdmF0ZSgpO1xuICAgIHRoaXMuY3VycmVudEVudmlyb25tZW50ID0gZW52aXJvbm1lbnROYW1lO1xuICB9XG5cbiAgY2xlYXJTdGFja2FibGUoKSB7XG4gICAgdGhpcy4kc3RhY2thYmxlLmVtcHR5KCk7XG4gIH1cblxuICBjcmVhdGVTdGFja2FibGVQYW5lKCkge1xuICAgIGNvbnN0IHBhbmVDbGFzcyA9IGAke3RoaXMuc2V0dGluZ3NbJ3N0YWNrYWJsZS1jb250YWluZXItY2xhc3MnXX1fX3BhbmVgO1xuICAgIGNvbnN0IG1vZGlmaWVyID0gdGhpcy4kc3RhY2thYmxlLmZpbmQoYC4ke3BhbmVDbGFzc31gKS5sZW5ndGggPT09IDBcbiAgICAgID8gYCR7cGFuZUNsYXNzfS0tZmlyc3RgXG4gICAgICA6ICcnO1xuICAgIGNvbnN0ICRuZXdQYW5lID0gJChgPGRpdiBjbGFzcz1cIiR7cGFuZUNsYXNzfSAke21vZGlmaWVyfVwiPjwvZGl2PmApO1xuICAgIHRoaXMuJHN0YWNrYWJsZS5hcHBlbmQoJG5ld1BhbmUpO1xuICAgIHJldHVybiAkbmV3UGFuZTtcbiAgfVxuXG4gIG1hdGVyaWFsQnlOYW1lKG5hbWUpIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5tYXRlcmlhbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLm1hdGVyaWFsc1tuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXQgZnJhbWVDb250ZW50V2luZG93KCkge1xuICAgIHJldHVybiAkKHRoaXMuc2V0dGluZ3NbJ2ZyYW1lLXNlbGVjdG9yJ10pWzBdLmNvbnRlbnRXaW5kb3c7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgLy8gRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5mcmFtZUNvbnRlbnRXaW5kb3csICdzZXJpYWxpemVDb250ZW50JywgWydsb2cnXSk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5lbnZpcm9ubWVudHMuZ2V0KCdwYWdlLXN0cnVjdHVyZScpLnNlcmlhbGl6ZVBhZ2UoKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgLy8gd2UgaGF2ZSByZXN1bHQgd2hpY2ggaXMgY29udGVudCBpbiBmb3JtYXQ6XG4gICAgLy8gcmVnaW9uXG4gICAgLy8gLS0tIG1hdGVyaWFsIGlkXG4gICAgLy8gLS0tLS0tLSBrZXlzID0+IHZhbHVlc1xuICAgIC8vXG4gICAgLy8gb3VyIFByb3ZpZGVycyBzaG91bGQgZ2V0IG9ubHkgdGhvc2Uga2V5cyB0aGF0IHRoZXkgcHJvdmlkZVxuICAgIC8vIHByb3ZpZGVkIGtleXMgYXJlIHN0b3JlZCBpbiBmcmFtZUNvbnRlbnRXaW5kb3cuTU9OU1RFUl9FRElUX01PREVfREFUQS50ZW1wbGF0ZS5wcm92aWRlZEtleXNcbiAgICBjb25zdCByZXN1bHRCeVByb3ZpZGVycyA9IHt9O1xuICAgIGNvbnN0IHByb3ZpZGVkS2V5cyA9IHRoaXMuZnJhbWVDb250ZW50V2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEudGVtcGxhdGUucHJvdmlkZWRLZXlzO1xuXG4gICAgT2JqZWN0LmtleXMocHJvdmlkZWRLZXlzKS5mb3JFYWNoKHByb3ZpZGVySW5kZXggPT4ge1xuICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF0gPSB7fTtcblxuICAgICAgY29uc3QgcmVnaW9ucyA9IHByb3ZpZGVkS2V5c1twcm92aWRlckluZGV4XTtcblxuICAgICAgT2JqZWN0LmtleXMocmVnaW9ucykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0Lmhhc093blByb3BlcnR5KHJlZ2lvbktleSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdW3JlZ2lvbktleV0gPSB7fTtcblxuICAgICAgICAvLyBnbyBkZWVwIHRvIG1hdGVyaWFsIGluZGVjZXNcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gcmVnaW9uc1tyZWdpb25LZXldO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG1hdGVyaWFscykuZm9yRWFjaChtYXRlcmlhbEluZGV4ID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0W3JlZ2lvbktleV0uaGFzT3duUHJvcGVydHkobWF0ZXJpYWxJbmRleCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdW3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF0gPSB7fTtcblxuICAgICAgICAgIGNvbnN0IGRhdGFLZXlzID0gbWF0ZXJpYWxzW21hdGVyaWFsSW5kZXhdO1xuXG4gICAgICAgICAgT2JqZWN0LmtleXMoZGF0YUtleXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHRbcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XS5oYXNPd25Qcm9wZXJ0eShrZXkpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1xuICAgICAgICAgICAgICBbcHJvdmlkZXJJbmRleF1cbiAgICAgICAgICAgICAgW3JlZ2lvbktleV1cbiAgICAgICAgICAgICAgW21hdGVyaWFsSW5kZXhdXG4gICAgICAgICAgICAgIFtrZXldID0gcmVzdWx0W3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF1ba2V5XTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0QnlQcm92aWRlcnM7XG4gIH1cblxuICBwYWdlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmVudmlyb25tZW50cy5mb3JFYWNoKFxuICAgICAgZW52aXJvbm1lbnQgPT5cbiAgICAgICAgZW52aXJvbm1lbnQucGFnZUNoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICBsb2cocmVzdWx0KSB7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgfVxuXG4gIGNvbnRyb2xzKCkge1xuICAgIHRoaXMuJGNvbnRyb2xzID0gdGhpcy4kYnVpbGRlci5maW5kKCcuY29udHJvbHMnKTtcbiAgICBjb25zdCBidWlsZGVyID0gdGhpcztcbiAgICB0aGlzLiRjb250cm9scy5maW5kKCcuY29udHJvbHNfX3JlZnJlc2gnKS5jbGljaygoKSA9PiB7XG4gICAgICBidWlsZGVyLmZyYW1lQ29udGVudFdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLiRjb250cm9scy5maW5kKCcuY29udHJvbHNfX3NhdmUnKS5jbGljaygoKSA9PiB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IGJ1aWxkZXIuZnJhbWVDb250ZW50V2luZG93LmxvY2F0aW9uLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgIHByb3ZpZGVyc0VudGl0aWVzOiBidWlsZGVyLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgcmVnaW9uc01hdGVyaWFsczogYnVpbGRlci5lbnZpcm9ubWVudHMuZ2V0KCdwYWdlLXN0cnVjdHVyZScpLm1hdGVyaWFsc0J5UmVnaW9ucygpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYWN0aW9uOiAnc2F2ZScsXG4gICAgICAgIH0pLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBvayhkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gZXJyKGRhdGEsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaXN1YWxCdWlsZGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHd5c2l3eWcoJG5vZGUpIHtcbiAgcmV0dXJuICRub2RlLmh0bWwoKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9XWVNJV1lHLmpzXG4gKiovIiwiaW1wb3J0IFdZU0lXWUcgZnJvbSAnLi9XWVNJV1lHJztcbmltcG9ydCBpbWFnZSBmcm9tICcuL2ltYWdlJztcbmltcG9ydCBsaW5rIGZyb20gJy4vbGluayc7XG5pbXBvcnQgU3RyaW5nRWRpdGFibGUgZnJvbSAnLi9zdHJpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbGwoKSB7XG4gIGlmICh0eXBlb2Yod2luZG93Lk1PTlNURVJfRURJVEFCTEVTKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVMgPSB7fTtcbiAgfVxuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ3d5c2l3eWcnXSA9IFdZU0lXWUc7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snbGluayddID0gbGluaztcbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWydpbWFnZSddID0gaW1hZ2U7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snc3RyaW5nJ10gPSBTdHJpbmdFZGl0YWJsZTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lZGl0YWJsZXMvYWxsLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW1hZ2UoJG5vZGUpIHtcbiAgY29uc3QgJGltZyA9ICRub2RlLmZpbmQoJ2ltZycpLmZpcnN0KCk7XG4gIHJldHVybiB7XG4gICAgc3JjOiAkaW1nLmF0dHIoJ3NyYycpLFxuICAgIGFsdDogJGltZy5hdHRyKCdhbHQnKSxcbiAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9pbWFnZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpbmsoJG5vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBzcmM6ICRub2RlLmF0dHIoJ2hyZWYnKSxcbiAgICBhbmNob3I6ICRub2RlLmh0bWwoKSxcbiAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9saW5rLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oJG5vZGUpIHtcbiAgcmV0dXJuICRub2RlLnRleHQoKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL3N0cmluZy5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBBY3Rpb25FbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0FjdGlvbkVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9DdXN0b21pemF0aW9uRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgTWF0ZXJpYWxzRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2aXN1YWxCdWlsZGVyLCBuYW1lKSB7XG4gICAgc3VwZXIodmlzdWFsQnVpbGRlciwgbmFtZSk7XG4gICAgdGhpcy5pbml0TWF0ZXJpYWxzU2VsZWN0b3IoKTtcbiAgfVxuXG4gIGluaXRNYXRlcmlhbHNTZWxlY3RvcigpIHtcbiAgICB0aGlzLiRtYXRlcmlhbHNHcm91cHMgPSAkKGA8dWwgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzXCI+PC91bD5gKTtcbiAgICB0aGlzLiRtYXRlcmlhbHNMaXN0ID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGJ1bmRsZSBvZiB0aGlzLnZpc3VhbEJ1aWxkZXIuc2V0dGluZ3MuYnVuZGxlcykge1xuICAgICAgY29uc3QgaTE4bkJ1bmRsZU5hbWUgPSB0eXBlb2YocG9seWdsb3QpICE9PSAndW5kZWZpbmVkJyA/IHBvbHlnbG90LnQoYnVuZGxlLm5hbWUpIDogYnVuZGxlLm5hbWU7XG5cbiAgICAgIGxldCAkYnVuZGxlVGl0bGUgPSBgXG4gICAgICA8bGkgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19pdGVtIG1hdGVyaWFscy1ncm91cHNfX2l0ZW0tLWJ1bmRsZS1sYWJlbFwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWJ1bmRsZVwiIGRhdGEtYnVuZGxlLXBhdGg9XCJcIiR7YnVuZGxlLmZ1bGxQYXRofT5cbiAgICAgICAgICAgICR7aTE4bkJ1bmRsZU5hbWV9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICBgO1xuICAgICAgdGhpcy4kbWF0ZXJpYWxzTGlzdC5wdXNoKCRidW5kbGVUaXRsZSk7XG5cbiAgICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgYnVuZGxlLmdyb3Vwcykge1xuICAgICAgICBjb25zdCBncm91cE5hbWUgPSBncm91cC5uYW1lO1xuICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSBncm91cC5tYXRlcmlhbHM7XG4gICAgICAgIGNvbnN0IGkxOG5Hcm91cE5hbWUgPSB0eXBlb2YocG9seWdsb3QpICE9PSAndW5kZWZpbmVkJyA/IHBvbHlnbG90LnQoZ3JvdXBOYW1lKSA6IGdyb3VwTmFtZTtcbiAgICAgICAgY29uc3QgJGxpID0gJChgXG4gICAgPGxpIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19faXRlbVwiPlxuICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWdyb3VwLXBhdGg9XCIke2dyb3VwLmZ1bGxQYXRofVwiIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwXCI+XG4gICAgICAgICR7aTE4bkdyb3VwTmFtZX0gPHNwYW4gY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19jb3VudFwiPigke21hdGVyaWFscy5sZW5ndGh9KTwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICA8L2xpPmApO1xuICAgICAgICB0aGlzLiRtYXRlcmlhbHNHcm91cHMuYXBwZW5kKCRsaSk7XG4gICAgICAgIGNvbnN0ICRsaXN0ID0gJChgPHVsIGNsYXNzPVwibWF0ZXJpYWxzLWxpc3RcIiBkYXRhLWdyb3VwLXBhdGg9XCIke2dyb3VwLmZ1bGxQYXRofVwiPjwvdWw+YCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgICAgIGZvciAoY29uc3QgbWF0ZXJpYWwgb2YgbWF0ZXJpYWxzKSB7XG4gICAgICAgICAgY29uc3QgbWF0ZXJpYWxOYW1lID0gbWF0ZXJpYWwubmFtZTtcbiAgICAgICAgICBjb25zdCBpMThuTWF0ZXJpYWxOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCcgPyBwb2x5Z2xvdC50KG1hdGVyaWFsTmFtZSkgOiBtYXRlcmlhbE5hbWU7XG4gICAgICAgICAgY29uc3QgJGl0ZW0gPSAkKGBcbjxsaT5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1hdGVyaWFscy1saXN0X19pdGVtXCIgZGF0YS1tYXRlcmlhbC1wYXRoPVwiJHttYXRlcmlhbC5mdWxsUGF0aH1cIj4ke2kxOG5NYXRlcmlhbE5hbWV9PC9hPlxuPC9saT5cbmApO1xuICAgICAgICAgIGl0ZW1zLnB1c2goJGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgICRsaXN0LmFwcGVuZChpdGVtcyk7XG4gICAgICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QucHVzaCgkbGlzdCk7XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcsIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gJ21hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cC0tYWN0aXZlJztcbiAgICAgICR0aGlzLnRvZ2dsZUNsYXNzKGFjdGl2ZUNsYXNzKTtcbiAgICAgIGNvbnN0IGdyb3VwUGF0aCA9ICR0aGlzLmRhdGEoJ2dyb3VwUGF0aCcpO1xuICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKGFjdGl2ZUNsYXNzKSkge1xuICAgICAgICAkKCcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJykucmVtb3ZlQ2xhc3MoYWN0aXZlQ2xhc3MpO1xuICAgICAgICBjb25zdCBtYXRlcmlhbHNMaXN0QWN0aXZlQ2xhc3MgPSAnbWF0ZXJpYWxzLWxpc3QtLWFjdGl2ZSc7XG5cbiAgICAgICAgJCgnLm1hdGVyaWFscy1saXN0JykuZWFjaChmdW5jdGlvbiBpdCgpIHtcbiAgICAgICAgICBjb25zdCAkbGlzdCA9ICQodGhpcyk7XG4gICAgICAgICAgaWYgKCRsaXN0Lmhhc0NsYXNzKG1hdGVyaWFsc0xpc3RBY3RpdmVDbGFzcykpIHtcbiAgICAgICAgICAgICRsaXN0LnJlbW92ZUNsYXNzKG1hdGVyaWFsc0xpc3RBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkbGlzdC5kYXRhKCdncm91cFBhdGgnKSA9PT0gZ3JvdXBQYXRoKSB7XG4gICAgICAgICAgICAkbGlzdC5hZGRDbGFzcyhtYXRlcmlhbHNMaXN0QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoYWN0aXZlQ2xhc3MpO1xuICAgICAgICB0aGF0LiRtYXRlcmlhbHNQYW5lLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoYXQncyBqdXN0IHNlY29uZCBjbGljayBvbiB0aGUgc2FtZSBncm91cFxuICAgICAgICB0aGF0LiRtYXRlcmlhbHNQYW5lLmhpZGUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hdGVyaWFscy1saXN0X19pdGVtJywgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCkge1xuICAgICAgdGhhdC5zZW5kTWVzc2FnZShcbiAgICAgICAgJ25ld0Jsb2NrJyxcbiAgICAgICAgW1xuICAgICAgICAgICQodGhpcykuZGF0YSgnbWF0ZXJpYWxQYXRoJyksXG4gICAgICAgICAgJ2NvbnRlbnQnXG4gICAgICAgIF1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICBzdXBlci5hY3RpdmF0ZSgpO1xuXG4gICAgdGhpcy4kZ3JvdXBzUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kZ3JvdXBzUGFuZS5hcHBlbmQodGhpcy4kbWF0ZXJpYWxzR3JvdXBzKTtcblxuICAgIHRoaXMuJG1hdGVyaWFsc1BhbmUgPSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3JlYXRlU3RhY2thYmxlUGFuZSgpO1xuICAgIHRoaXMuJG1hdGVyaWFsc1BhbmUuYXBwZW5kKHRoaXMuJG1hdGVyaWFsc0xpc3QpO1xuICAgIHRoaXMuJG1hdGVyaWFsc1BhbmUuaGlkZSgpO1xuXG4gICAgJCgnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcpLnJlbW92ZUNsYXNzKCdtYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAtLWFjdGl2ZScpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbHNFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9NYXRlcmlhbHNFbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuaW1wb3J0IFJlZ2lvbiBmcm9tICcuLy4uL1BhZ2VTdHJ1Y3R1cmVDb21wb25lbnRzL1JlZ2lvbic7XG5cbmNsYXNzIFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICBzdXBlcih2aXN1YWxCdWlsZGVyLCBuYW1lKTtcbiAgICB0aGlzLmluaXRQYWdlU3RydWN0dXJlRWxlbWVudCgpO1xuICAgIHRoaXMuZWRpdE1vZGVEYXRhID0ge307XG4gIH1cblxuICBpbml0UGFnZVN0cnVjdHVyZUVsZW1lbnQoKSB7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZSA9ICQoJzx1bCBjbGFzcz1cInBhZ2Utc3RydWN0dXJlXCI+PC91bD4nKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHN1cGVyLmFjdGl2YXRlKCk7XG5cbiAgICB0aGlzLiRzdHJ1Y3R1cmVQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRzdHJ1Y3R1cmVQYW5lLmFwcGVuZCh0aGlzLiRwYWdlU3RydWN0dXJlKTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2VkKCkge1xuICAgIHN1cGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5maW5kKCdsaScpLnJlbW92ZSgpO1xuICAgIGNvbnN0IHJlZ2lvbnMgPSB0aGlzLnRhcmdldC4kKCcubS1tb25zdGVyLWNvbnRlbnRfX2NvbnRlbnQnKTtcbiAgICBjb25zdCBlbnZpcm9ubWVudCA9IHRoaXM7XG4gICAgdGhpcy5yZWdpb25zU3RydWN0dXJlID0ge307XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgcmVnaW9ucy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCAkcmVnaW9uTm9kZSA9ICQodGhpcyk7XG4gICAgICBjb25zdCByZWdpb25PYmplY3QgPSBuZXcgUmVnaW9uKCRyZWdpb25Ob2RlKTtcbiAgICAgIGNvbnN0ICRyZWdpb25MaSA9IHJlZ2lvbk9iamVjdC5wcm9jZXNzUmVnaW9uKCk7XG4gICAgICB0aGF0LnJlZ2lvbnNTdHJ1Y3R1cmVbcmVnaW9uT2JqZWN0LmtleV0gPSByZWdpb25PYmplY3Q7XG4gICAgICBlbnZpcm9ubWVudC4kcGFnZVN0cnVjdHVyZS5hcHBlbmQoJHJlZ2lvbkxpKTtcbiAgICB9KTtcbiAgICB0aGlzLmVkaXRNb2RlRGF0YSA9IHRoaXMudGFyZ2V0Lk1PTlNURVJfRURJVF9NT0RFX0RBVEE7XG4gIH1cblxuICBzZXJpYWxpemVQYWdlKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMucmVnaW9uc1N0cnVjdHVyZSkuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgY29uc3QgcmVnaW9uID0gdGhpcy5yZWdpb25zU3RydWN0dXJlW3JlZ2lvbktleV07XG4gICAgICByZXN1bHRbcmVnaW9uLmtleV0gPSByZWdpb24uc2VyaWFsaXplKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIG1hdGVyaWFsc0J5UmVnaW9ucygpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMucmVnaW9uc1N0cnVjdHVyZVtyZWdpb25LZXldO1xuICAgICAgcmVzdWx0W3JlZ2lvbi5rZXldID0gcmVnaW9uLm1hdGVyaWFsc0RlY2woKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHVuaXFpZCAocHJlZml4LCBtb3JlRW50cm9weSkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3VuaXFpZC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICByZXZpc2VkIGJ5OiBLYW5rcmVsdW5lIChodHRwOi8vd3d3LndlYmZha3RvcnkuaW5mby8pXG4gIC8vICAgICAgbm90ZSAxOiBVc2VzIGFuIGludGVybmFsIGNvdW50ZXIgKGluIGxvY3V0dXMgZ2xvYmFsKSB0byBhdm9pZCBjb2xsaXNpb25cbiAgLy8gICBleGFtcGxlIDE6IHZhciAkaWQgPSB1bmlxaWQoKVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRyZXN1bHQgPSAkaWQubGVuZ3RoID09PSAxM1xuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogdmFyICRpZCA9IHVuaXFpZCgnZm9vJylcbiAgLy8gICBleGFtcGxlIDI6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gKDEzICsgJ2ZvbycubGVuZ3RoKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMzogdmFyICRpZCA9IHVuaXFpZCgnYmFyJywgdHJ1ZSlcbiAgLy8gICBleGFtcGxlIDM6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gKDIzICsgJ2JhcicubGVuZ3RoKVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuXG4gIGlmICh0eXBlb2YgcHJlZml4ID09PSAndW5kZWZpbmVkJykge1xuICAgIHByZWZpeCA9ICcnXG4gIH1cblxuICB2YXIgcmV0SWRcbiAgdmFyIF9mb3JtYXRTZWVkID0gZnVuY3Rpb24gKHNlZWQsIHJlcVdpZHRoKSB7XG4gICAgc2VlZCA9IHBhcnNlSW50KHNlZWQsIDEwKS50b1N0cmluZygxNikgLy8gdG8gaGV4IHN0clxuICAgIGlmIChyZXFXaWR0aCA8IHNlZWQubGVuZ3RoKSB7XG4gICAgICAvLyBzbyBsb25nIHdlIHNwbGl0XG4gICAgICByZXR1cm4gc2VlZC5zbGljZShzZWVkLmxlbmd0aCAtIHJlcVdpZHRoKVxuICAgIH1cbiAgICBpZiAocmVxV2lkdGggPiBzZWVkLmxlbmd0aCkge1xuICAgICAgLy8gc28gc2hvcnQgd2UgcGFkXG4gICAgICByZXR1cm4gQXJyYXkoMSArIChyZXFXaWR0aCAtIHNlZWQubGVuZ3RoKSkuam9pbignMCcpICsgc2VlZFxuICAgIH1cbiAgICByZXR1cm4gc2VlZFxuICB9XG5cbiAgdmFyICRnbG9iYWwgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBHTE9CQUwpXG4gICRnbG9iYWwuJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzIHx8IHt9XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXNcbiAgJGxvY3V0dXMucGhwID0gJGxvY3V0dXMucGhwIHx8IHt9XG5cbiAgaWYgKCEkbG9jdXR1cy5waHAudW5pcWlkU2VlZCkge1xuICAgIC8vIGluaXQgc2VlZCB3aXRoIGJpZyByYW5kb20gaW50XG4gICAgJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAweDc1YmNkMTUpXG4gIH1cbiAgJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQrK1xuXG4gIC8vIHN0YXJ0IHdpdGggcHJlZml4LCBhZGQgY3VycmVudCBtaWxsaXNlY29uZHMgaGV4IHN0cmluZ1xuICByZXRJZCA9IHByZWZpeFxuICByZXRJZCArPSBfZm9ybWF0U2VlZChwYXJzZUludChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDAsIDEwKSwgOClcbiAgLy8gYWRkIHNlZWQgaGV4IHN0cmluZ1xuICByZXRJZCArPSBfZm9ybWF0U2VlZCgkbG9jdXR1cy5waHAudW5pcWlkU2VlZCwgNSlcbiAgaWYgKG1vcmVFbnRyb3B5KSB7XG4gICAgLy8gZm9yIG1vcmUgZW50cm9weSB3ZSBhZGQgYSBmbG9hdCBsb3dlciB0byAxMFxuICAgIHJldElkICs9IChNYXRoLnJhbmRvbSgpICogMTApLnRvRml4ZWQoOCkudG9TdHJpbmcoKVxuICB9XG5cbiAgcmV0dXJuIHJldElkXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3VuaXFpZC5qc1xuICoqLyIsImNsYXNzIEhhc2hBcGkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZ1bmN0aW9uQ2FsbHMgPSB7fTtcblxuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaC5tYXRjaCgvI2hhc2hBcGk6KC4qPyk6XFwvaGFzaEFwaS8pO1xuICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgY29uc3QgZnVuY3Rpb25DYWxscyA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoZXNbMV0pKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZnVuY3Rpb25DYWxscykge1xuICAgICAgICAgIGlmIChpdGVtLmZ1bmMpIHtcbiAgICAgICAgICAgIHRoaXMuZnVuY3Rpb25DYWxsc1tpdGVtLmZ1bmNdID0gaXRlbS5hcmdzIHx8IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNob3VsZENhbGwoZnVuYykge1xuICAgIHJldHVybiB0aGlzLmZ1bmN0aW9uQ2FsbHNbZnVuY10gfHwgZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGFzaEFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvSGFzaEFwaS5qc1xuICoqLyIsImltcG9ydCBGcmFtZUFwaSBmcm9tICcuL0ZyYW1lQXBpJztcbmltcG9ydCB1bmlxdWVJZCBmcm9tICcuLy4uL3VuaXFpZCc7XG5cbmNsYXNzIFZpc3VhbEZyYW1lXG57XG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgdGhpcy5wYXJhbXMoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpXG4gICAge1xuICAgICAgICBGcmFtZUFwaS5iaW5kTWVzc2FnZUxpc3RlbmVyKHRoaXMpO1xuICAgICAgICB0aGlzLnBhcmVudFdpbmRvdyA9IHdpbmRvdy5wYXJlbnQ7XG4gICAgICAgIC8qKiBAdmFyIEZyb250ZW5kTW9uc3RlciAqL1xuICAgICAgICB0aGlzLnBhcmVudE1vbnN0ZXIgPSB0aGlzLnBhcmVudFdpbmRvdy5Gcm9udGVuZE1vbnN0ZXI7XG4gICAgICAgIHRoaXMucGFyZW50QnVpbGRlciA9IHRoaXMucGFyZW50TW9uc3Rlci5idWlsZGVyO1xuICAgICAgICB0aGlzLmN1cnJlbnRNb25zdGVyQ29udGVudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1ha2VJdE1vdmUoKTtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhhdC51cGRhdGVIYW5kbGVycygpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgZ2V0ICRtb25zdGVyQ29udGVudCgpXG4gICAge1xuICAgICAgICBpZiAodGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZTtcbiAgICB9XG5cbiAgICByZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpXG4gICAge1xuICAgICAgICB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlID0ge307XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICAkKHRoaXMuc2V0dGluZ3NbJ21vbnN0ZXItY29udGVudC1zZWxlY3RvciddKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgICAgICBpZiAoIXRoYXQuY3VycmVudE1vbnN0ZXJDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhhdC5jdXJyZW50TW9uc3RlckNvbnRlbnQgPSAkKHRoaXMpLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhhdC4kbW9uc3RlckNvbnRlbnRDYWNoZVskKHRoaXMpLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpXSA9ICQodGhpcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldE5ld01hdGVyaWFsSW5kZXgoKVxuICAgIHtcbiAgICAgICAgaWYgKCF0aGlzLmxhc3RNYXRlcmlhbEluZGV4KSB7XG4gICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgICQoJ1tkYXRhLWlzLW1hdGVyaWFsXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuZGF0YSgnbWF0ZXJpYWwtaW5kZXgnKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmxhc3RNYXRlcmlhbEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdE1hdGVyaWFsSW5kZXgrKztcbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdE1hdGVyaWFsSW5kZXg7XG4gICAgfVxuXG4gICAgdXBkYXRlSGFuZGxlcnMoKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwgJiYgdGhpcy4kaGFuZGxlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuJGhhbmRsZXJzLmNzcyhcbiAgICAgICAgICAgICAgICAndG9wJyxcbiAgICAgICAgICAgICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLnBvc2l0aW9uKCkudG9wICsgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5oZWlnaHQoKSAtIHRoaXMuJGhhbmRsZXJzLmhlaWdodCgpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5hZGRDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ha2VJdE1vdmUoKVxuICAgIHtcbiAgICAgICAgdGhpcy4kaGFuZGxlcnMgPSAkKGBcbjxkaXYgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzXCI+XG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX2NvbmZpZ3VyZVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNvZ1wiPjwvaT5cbiAgICA8L2E+XG4gICAgPHNwYW4gY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19ibG9jay1uYW1lXCI+QmxvY2sgbmFtZSBoZXJlPC9zcGFuPlxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLXVwXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtdXBcIj48L2k+XG4gICAgPC9hPlxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLWRvd25cIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3duXCI+PC9pPlxuICAgIDwvYT5cbiAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fY2xvbmVcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9uZVwiPjwvaT5cbiAgICA8L2E+XG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX3JlbW92ZVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPlxuICAgIDwvYT5cbjwvZGl2PmApO1xuICAgICAgICAkKCdib2R5JykuYXBwZW5kKHRoaXMuJGhhbmRsZXJzKTtcbiAgICAgICAgdGhpcy4kaGFuZGxlcnMuaGlkZSgpO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgJCh0aGlzLnNldHRpbmdzWydtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InXSkub24oe1xuICAgICAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24gaG92ZXJJbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ20tbW9uc3Rlci1jb250ZW50X19tYXRlcmlhbC0taGlnaGxpZ2h0ZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZWxlYXZlOiBmdW5jdGlvbiBob3Zlck91dCgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ20tbW9uc3Rlci1jb250ZW50X19tYXRlcmlhbC0taGlnaGxpZ2h0ZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdE1hdGVyaWFsKCR0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICAgICB0aGF0LiRoYW5kbGVycy5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtdXAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICAgICAgICAgICAgdmFyICRwcmV2ID0gdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5wcmV2KCdbZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICAgICAgICAgICAgICBpZiAoJHByZXYubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5pbnNlcnRCZWZvcmUoJHByZXYpO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KS5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtZG93bicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgJG5leHQgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLm5leHQoJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICAgICAgICAgICAgIGlmICgkbmV4dC5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLmluc2VydEFmdGVyKCRuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGVIYW5kbGVycygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSkub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19jbG9uZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGNsb25lZE1hdGVyaWFsID0gdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5jbG9uZSgpO1xuICAgICAgICAgICAgICAgICRjbG9uZWRNYXRlcmlhbC5kYXRhKCdtYXRlcmlhbC1pbmRleCcsIHRoYXQuZ2V0TmV3TWF0ZXJpYWxJbmRleCgpKS5pbnNlcnRBZnRlcih0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdE1hdGVyaWFsKCRjbG9uZWRNYXRlcmlhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pLm9uKCdjbGljaycsICcubW9uc3Rlci1ibG9jay1oYW5kbGVyc19fcmVtb3ZlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgbWF0ZXJpYWw/JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGhhbmRsZXJzLmhpZGUoKTsgLy8gaXQgZG9lcyBub3Qgd29yay4gd2h5PyBOZWVkIHRvIGZpeCFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbGVjdE1hdGVyaWFsKCRtYXRlcmlhbClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsID09PSAkbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgICAgICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5yZW1vdmVDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsID0gJG1hdGVyaWFsO1xuICAgICAgICB0aGlzLnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgIHRoaXMuJGhhbmRsZXJzLnNob3coKTtcbiAgICB9XG5cbiAgICBzZXJpYWxpemVDb250ZW50KGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBmb3IgKGNvbnN0IHVuaXF1ZUNvbnRlbnRJZCBpbiB0aGlzLiRtb25zdGVyQ29udGVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuJG1vbnN0ZXJDb250ZW50Lmhhc093blByb3BlcnR5KHVuaXF1ZUNvbnRlbnRJZCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkbW9uc3RlciA9IHRoaXMuJG1vbnN0ZXJDb250ZW50W3VuaXF1ZUNvbnRlbnRJZF07XG4gICAgICAgICAgICAgICAgcmVzdWx0WyRtb25zdGVyLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpXSA9IHRoYXQuc2VyaWFsaXplVW5pcXVlQ29udGVudCgkbW9uc3Rlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZW5kVG9CdWlsZGVyKGNhbGxiYWNrLCBbcmVzdWx0XSk7XG4gICAgfVxuXG4gICAgc2VyaWFsaXplVW5pcXVlQ29udGVudCgkbW9uc3RlckNvbnRlbnQpXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgcmVzdWx0LnVuaXF1ZUNvbnRlbnRJZCA9ICRtb25zdGVyQ29udGVudC5kYXRhKCd1bmlxdWVDb250ZW50SWQnKTtcbiAgICAgICAgcmVzdWx0Lm1hdGVyaWFscyA9IHt9O1xuICAgICAgICAkbW9uc3RlckNvbnRlbnQuZmluZCgnW2RhdGEtaXMtbWF0ZXJpYWw9XFwnMVxcJ10nKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHt9O1xuICAgICAgICAgICAgbWF0ZXJpYWwuYmxvY2sgPSAkKHRoaXMpLmRhdGEoJ21hdGVyaWFsQmxvY2snKTtcbiAgICAgICAgICAgIHJlc3VsdC5tYXRlcmlhbHNbJCh0aGlzKS5kYXRhKCdtYXRlcmlhbEluZGV4JyldID0gbWF0ZXJpYWw7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgVmlzdWFsRnJhbWUgc2V0dGluZ3MuXG4gICAgICogVXNlcyBWaXN1YWxGcmFtZVNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAgICovXG4gICAgcGFyYW1zKClcbiAgICB7XG4gICAgICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5WaXN1YWxGcmFtZVNldHRpbmdzIHx8IHt9O1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICAgICAgICdtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InOiAnLm0tbW9uc3Rlci1jb250ZW50X19jb250ZW50J1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB1c2VyU2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGlmICh1c2VyU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgfVxuXG4gICAgc2VuZFRvQnVpbGRlcihmdW5jLCBhcmdzKVxuICAgIHtcbiAgICAgICAgRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5wYXJlbnRXaW5kb3csIGZ1bmMsIGFyZ3MpO1xuICAgIH1cblxuICAgIG5ld0Jsb2NrKG1hdGVyaWFsTmFtZSwgcmVnaW9uTmFtZSlcbiAgICB7XG4gICAgICAgIC8vIEB0b2RvIEFkZCBsb2FkZXIgaGVyZSBhcyB3ZSBhcmUgdXNpbmcgZm9ybSBwb3N0ICFcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gdW5pcXVlSWQoJ21hdCcpO1xuICAgICAgICBjb25zdCBuZXdEYXRhID0ge1xuICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICBwcm92aWRlcnNFbnRpdGllczogdGhpcy5wYXJlbnRCdWlsZGVyLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgcmVnaW9uc01hdGVyaWFsczogdGhpcy5wYXJlbnRCdWlsZGVyLmVudmlyb25tZW50cy5nZXQoJ3BhZ2Utc3RydWN0dXJlJykubWF0ZXJpYWxzQnlSZWdpb25zKCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhY3Rpb246ICdyZW5kZXItbWF0ZXJpYWwnLFxuICAgICAgICAgIG1hdGVyaWFsSWQ6IHJhbmRvbUluZGV4LFxuICAgICAgICAgIG1hdGVyaWFsUmVnaW9uOiByZWdpb25OYW1lLFxuICAgICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbE5hbWVcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG5ld0RhdGEudGVtcGxhdGUucmVnaW9uc01hdGVyaWFscy5oYXNPd25Qcm9wZXJ0eShyZWdpb25OYW1lKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBuZXdEYXRhLnRlbXBsYXRlLnJlZ2lvbnNNYXRlcmlhbHNbcmVnaW9uTmFtZV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0RhdGEudGVtcGxhdGUucmVnaW9uc01hdGVyaWFsc1tyZWdpb25OYW1lXVtyYW5kb21JbmRleF0gPSB7bWF0ZXJpYWw6IG1hdGVyaWFsTmFtZX07XG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnPGZvcm0gbWV0aG9kPVwiUE9TVFwiPjwvZm9ybT4nKTtcbiAgICAgICAgY29uc3QgJGlucHV0ID0gJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX19qc29uXCI+Jyk7XG4gICAgICAgIGNvbnN0ICRjc3JmID0gJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIj4nKTtcblxuICAgICAgICAkY3NyZlxuICAgICAgICAgIC5hdHRyKCduYW1lJywgJCgnbWV0YVtuYW1lPWNzcmYtcGFyYW1dJykuYXR0cignY29udGVudCcpKVxuICAgICAgICAgIC52YWwoJCgnbWV0YVtuYW1lPWNzcmYtdG9rZW5dJykuYXR0cignY29udGVudCcpKVxuICAgICAgICAgIC5hcHBlbmRUbygkZm9ybSk7XG5cbiAgICAgICAgJGlucHV0XG4gICAgICAgICAgLnZhbChKU09OLnN0cmluZ2lmeShuZXdEYXRhKSlcbiAgICAgICAgICAuYXBwZW5kVG8oJGZvcm0pO1xuXG4gICAgICAgICRmb3JtWzBdLnN1Ym1pdCgpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gJC5hamF4KHtcbiAgICAgICAgLy8gICAgIHVybDogd2luZG93LmxvY2F0aW9uLFxuICAgICAgICAvLyAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIC8vICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgIC8vICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgICAvLyAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgLy8gICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG5ld0RhdGEpLFxuICAgICAgICAvLyB9KS5kb25lKGZ1bmN0aW9uIG9rKGRhdGEpIHtcbiAgICAgICAgLy8gICAgIGNvbnN0ICRlbGVtZW50ID0gJChkYXRhKTtcbiAgICAgICAgLy8gICAgIHRoYXQuJG1vbnN0ZXJDb250ZW50W3RoYXQuY3VycmVudE1vbnN0ZXJDb250ZW50XS5hcHBlbmQoJGVsZW1lbnQpO1xuICAgICAgICAvLyAgICAgdGhpcy5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgICAgIC8vICAgICAvKiBnbG9iYWwgc21vb3RoU2Nyb2xsOmZhbHNlICovXG4gICAgICAgIC8vICAgICBzbW9vdGhTY3JvbGwuYW5pbWF0ZVNjcm9sbCgkZWxlbWVudFswXS5vZmZzZXRUb3ApO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbEZyYW1lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZS5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==