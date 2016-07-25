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
	        $.ajax({
	          url: _this.frameContentWindow.location,
	          method: 'POST',
	          cache: false,
	          contentType: 'application/json; charset=utf-8',
	          dataType: 'json',
	          data: JSON.stringify({
	            template: {
	              providersEntities: _this.serialize(),
	              regionsMaterials: _this.environments.get('page-structure').materialsByRegions()
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
	  console.log($node.data());
	  console.log($node.data('originalHref'));
	  return {
	    href: $node.data('originalHref') ? $node.data('originalHref') : $node.attr('href'),
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
	    key: 'newBlock',
	    value: function newBlock(materialName, regionName) {
	      // @todo Add loader here as we are using form post !
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
	
	      newData.template.regionsMaterials[regionName][randomIndex] = {
	        material: materialName
	      };
	      var $form = $('<form method="POST"></form>');
	      var $input = $('<input type="hidden" name="__json">');
	      var $csrf = $('<input type="hidden">');
	
	      $csrf.attr('name', $('meta[name=csrf-param]').attr('content')).val($('meta[name=csrf-token]').attr('content')).appendTo($form);
	
	      $input.val(JSON.stringify(newData)).appendTo($form);
	
	      $form[0].submit();
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjQ2OWQzZDlmYTc0NjUxODRhMTAiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvRnJvbnRlbmRNb25zdGVyLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9FZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZUNvbXBvbmVudHMvTWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1BhZ2VTdHJ1Y3R1cmVDb21wb25lbnRzL1JlZ2lvbi5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL1dZU0lXWUcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVB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QUFoQyxDQURoQixFQUVHLEdBRkgsQ0FFTyxFQUFFLHVCQUFGLEVBQTJCLElBQTNCLENBQWdDLFNBQWhDLENBRlAsRUFHRyxRQUhILENBR1ksS0FIWjs7QUFLQSxjQUNHLEdBREgsQ0FDTyxLQUFLLFNBQUwsQ0FBZSxPQUFmLENBRFAsRUFFRyxRQUZILENBRVksS0FGWjs7QUFJQSxhQUFNLENBQU4sRUFBUyxNQUFUOztBQUVBLGNBQU8sS0FBUDs7Ozs7Ozs7Ozs7Ozs7O0FBZUQ7Ozt5QkF6T3FCO0FBQ3BCLFdBQUksS0FBSyxvQkFBVCxFQUErQjtBQUM3QixnQkFBTyxLQUFLLG9CQUFaO0FBQ0Q7QUFDRCxZQUFLLDBCQUFMO0FBQ0EsY0FBTyxLQUFLLG9CQUFaO0FBQ0Q7Ozs7OzttQkFzT1ksVzs7Ozs7Ozs7QUNyUWYsMEMiLCJmaWxlIjoidmlzdWFsLWJ1aWxkZXIvc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMjQ2OWQzZDlmYTc0NjUxODRhMTBcbiAqKi8iLCJpbXBvcnQgJy4vYnVuZGxlLmNzcyc7XG5cbmltcG9ydCBGcm9udGVuZE1vbnN0ZXIgZnJvbSAnLi9Gcm9udGVuZE1vbnN0ZXInO1xuXG53aW5kb3cuRnJvbnRlbmRNb25zdGVyID0gbmV3IEZyb250ZW5kTW9uc3RlcigpO1xuLy9cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5qc1xuICoqLyIsImltcG9ydCBGcmFtZUFwaSBmcm9tICcuLy4uL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaSc7XG5cbmNsYXNzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIgPSB2aXN1YWxCdWlsZGVyO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXJnZXQgPSAkKHRoaXMudmlzdWFsQnVpbGRlci5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSlbMF0uY29udGVudFdpbmRvdztcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIC8vIGRlYWN0aXZhdGUgY3VycmVudCBzZWxlY3RlZCBlbnZpcm9ubWVudFxuICAgIGlmICh0aGlzLm5hbWUgPT09IHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpIHtcbiAgICAgIHRoaXMudmlzdWFsQnVpbGRlci5lbnZpcm9ubWVudHMuZ2V0KHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpLmRlYWN0aXZhdGUoKTtcbiAgICB9XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMudmlzdWFsQnVpbGRlci5jbGVhclN0YWNrYWJsZSgpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2UoZnVuYywgYXJncykge1xuICAgIHJldHVybiBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLnRhcmdldCwgZnVuYywgYXJncyk7XG4gIH1cblxuICBwYWdlQ2hhbmdlZCgpIHtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VFbnZpcm9ubWVudDtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvQmFzZUVudmlyb25tZW50LmpzXG4gKiovIiwiY2xhc3MgRnJhbWVBcGkge1xuICBzdGF0aWMgZ2V0IGlzSWUoKSB7XG4gICAgLyogZ2xvYmFsIGlzICovXG4gICAgaWYgKHR5cGVvZihpcykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gaXMuaWUoKTsvLyB8fCBpcy5lZGdlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgYmluZE1lc3NhZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgICBsZXQgbWVzc2FnZSA9IG51bGw7XG4gICAgICBpZiAoRnJhbWVBcGkuaXNJZSkge1xuICAgICAgICBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lc3NhZ2UgPSBldmVudC5kYXRhO1xuICAgICAgfVxuXG4gICAgICBpZiAobGlzdGVuZXJbbWVzc2FnZS5mdW5jXSkge1xuICAgICAgICBsaXN0ZW5lclttZXNzYWdlLmZ1bmNdLmFwcGx5KGxpc3RlbmVyLCBtZXNzYWdlLmFyZ3MpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJRThcbiAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25tZXNzYWdlJywgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzZW5kTWVzc2FnZSh0YXJnZXQsIGZ1bmMsIGFyZ3MpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZnVuYyxcbiAgICAgIGFyZ3NcbiAgICB9O1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBGcmFtZUFwaS5pc0llID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiBkYXRhO1xuXG4gICAgdGFyZ2V0LnBvc3RNZXNzYWdlKG1lc3NhZ2UsICcqJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJhbWVBcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0ZyYW1lQXBpLmpzXG4gKiovIiwiaW1wb3J0IFZpc3VhbEJ1aWxkZXIgZnJvbSAnLi9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlcic7XG5pbXBvcnQgVmlzdWFsRnJhbWUgZnJvbSAnLi9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZSc7XG5pbXBvcnQgSGFzaEFwaSBmcm9tICcuL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGknO1xuXG5jbGFzcyBGcm9udGVuZE1vbnN0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtcygpO1xuICAgIHRoaXMudmlzdWFsQnVsZGVyID0gbnVsbDtcbiAgICB0aGlzLmhhc2hBcGkgPSBuZXcgSGFzaEFwaSgpO1xuICAgIGlmICh3aW5kb3cucGFyZW50ICE9PSB3aW5kb3cgJiYgd2luZG93LnBhcmVudC5Gcm9udGVuZE1vbnN0ZXIpIHtcbiAgICAgIGlmICh3aW5kb3cucGFyZW50LkZyb250ZW5kTW9uc3Rlci5oYXNCdWlsZGVyKSB7XG4gICAgICAgIHRoaXMuVmlzdWFsRnJhbWUgPSBuZXcgVmlzdWFsRnJhbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogZ2xvYmFsIHNtb290aFNjcm9sbDogZmFsc2UqL1xuICAgIGlmICh0eXBlb2Yoc21vb3RoU2Nyb2xsKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNtb290aFNjcm9sbC5pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgVmlzdWFsQnVpbGRlciBjbGFzcyBpbnN0YW5jZVxuICAgKiBAcmV0dXJucyBWaXN1YWxCdWlsZGVyXG4gICAqL1xuICBnZXQgYnVpbGRlcigpIHtcbiAgICBpZiAodGhpcy52aXN1YWxCdWxkZXIgPT09IG51bGwpIHtcbiAgICAgIHRoaXMudmlzdWFsQnVsZGVyID0gbmV3IFZpc3VhbEJ1aWxkZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmlzdWFsQnVsZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgRnJvbnRlbmRNb25zdGVyIGluc3RhbmNlIGhhcyBWaXN1YWwgQnVpbGRlciBvbiBwYWdlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGhhc0J1aWxkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRlci4kYnVpbGRlci5sZW5ndGggPT09IDE7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBGcm9udGVuZE1vbnN0ZXIgc2V0dGluZ3MuXG4gICAqIFVzZXMgRnJvbnRlbmRNb25zdGVyU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuRnJvbnRlbmRNb25zdGVyU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh1c2VyU2V0dGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICB9KTtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJvbnRlbmRNb25zdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9Gcm9udGVuZE1vbnN0ZXIuanNcbiAqKi8iLCJpbXBvcnQgYWxsRWRpdGFibGVzIGZyb20gJy4vZWRpdGFibGVzL2FsbCc7XG5cbmNsYXNzIEVkaXRhYmxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lZGl0YWJsZXNCeVR5cGUgPSB7fTtcbiAgICAvLyBpbml0aWFsaXplIGJhc2UgYnVpbGQtaW4gZWRpdGFibGVzXG4gICAgYWxsRWRpdGFibGVzKCk7XG4gICAgdGhpcy5lZGl0YWJsZXNCeVR5cGUgPSB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVM7XG4gIH1cblxuICBzZXJpYWxpemVFZGl0YWJsZSgkbm9kZSkge1xuICAgIGNvbnN0IGVkaXRhYmxlID0gJG5vZGUuZGF0YSgnZWRpdGFibGVQYXJhbXMnKTtcbiAgICBpZiAodHlwZW9mKGVkaXRhYmxlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHR5cGUgPSBlZGl0YWJsZS5oYXNPd25Qcm9wZXJ0eSgndHlwZScpID8gZWRpdGFibGUudHlwZSA6ICdzdHJpbmcnO1xuICAgIGlmICh0aGlzLmVkaXRhYmxlc0J5VHlwZS5oYXNPd25Qcm9wZXJ0eSh0eXBlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHR5cGUgPSAnc3RyaW5nJztcbiAgICB9XG5cbiAgICBjb25zdCBleHBvcnRWYXJpYWJsZSA9IGVkaXRhYmxlLmhhc093blByb3BlcnR5KCd0YXJnZXQnKSA/IGVkaXRhYmxlLnRhcmdldCA6ICdkYXRhJztcblxuICAgIHJldHVybiB0aGlzLmVkaXRhYmxlc0J5VHlwZVt0eXBlXSgkbm9kZSwgZXhwb3J0VmFyaWFibGUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRhYmxlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvRWRpdGFibGUuanNcbiAqKi8iLCJjbGFzcyBNYXRlcmlhbCB7XG4gIGNvbnN0cnVjdG9yKCRub2RlKSB7XG4gICAgdGhpcy4kbm9kZSA9ICRub2RlO1xuICAgIHRoaXMubWF0ZXJpYWxQYXRoID0gdGhpcy4kbm9kZS5kYXRhKCdtYXRlcmlhbFBhdGgnKTtcblxuICAgIHRoaXMubWF0ZXJpYWxOYW1lID0gdGhpcy5tYXRlcmlhbFBhdGgucmVwbGFjZSgvLipcXC4oLiopJC8sICckMScpO1xuICAgIC8vIEB0b2RvIENIQU5HRSBUSElTXG4gICAgdGhpcy5rZXkgPSB0aGlzLiRub2RlLmRhdGEoJ21hdGVyaWFsSW5kZXgnKTtcbiAgfVxuXG4gIHByb2Nlc3NNYXRlcmlhbCgpIHtcbiAgICByZXR1cm4gJChgPGxpIGNsYXNzPVwicGFnZS1zdHJ1Y3R1cmVfX21hdGVyaWFsXCI+JHt0aGlzLm1hdGVyaWFsTmFtZX08L2xpPmApO1xuICB9XG5cbiAgc3RhdGljIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICByZXR1cm4gd2luZG93LkZyb250ZW5kTW9uc3Rlci5idWlsZGVyLmVkaXRhYmxlLnNlcmlhbGl6ZUVkaXRhYmxlKCRub2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZnJhbWUkKCkge1xuICAgIHJldHVybiB3aW5kb3cuRnJvbnRlbmRNb25zdGVyLmJ1aWxkZXIuZnJhbWVDb250ZW50V2luZG93LiQ7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgLy8gbWF0ZXJpYWwgaGFzIGRhdGEtZWRpdGFibGUta2V5cyB3aXRoIHNjaGVtYVxuICAgIGNvbnN0IGVkaXRhYmxlS2V5cyA9IHRoaXMuJG5vZGUuZGF0YSgnZWRpdGFibGVLZXlzJyk7XG4gICAgY29uc3QgcmVjdXJzaXZlSXRlcmF0b3IgPSBmdW5jdGlvbiBpdGVyKGFyciwgcGF0aCwgJHNjb3BlKSB7XG4gICAgICBjb25zdCBmaW5hbCA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMoYXJyKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGxldCBmdWxsS2V5UGF0aCA9IGtleTtcbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICBmdWxsS2V5UGF0aCA9IGAke3BhdGh9LiR7a2V5fWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZihhcnJba2V5XSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY29uc3QgJGl0ZW1zID0gJHNjb3BlLmZpbmQoYFtkYXRhLXJlY3Vyc2l2ZS1pdGVtPVwiJHtmdWxsS2V5UGF0aH1cIl1gKTtcbiAgICAgICAgICBmaW5hbFtrZXldID0ge307XG4gICAgICAgICAgJGl0ZW1zLmVhY2goZnVuY3Rpb24gaXRlbXNSZWMoKSB7XG4gICAgICAgICAgICBjb25zdCAkdGhpcyA9IE1hdGVyaWFsLmZyYW1lJCh0aGlzKTtcbiAgICAgICAgICAgIGZpbmFsW2tleV1bJHRoaXMuZGF0YSgncmVjdXJzaXZlSXRlbUtleScpXSA9IHJlY3Vyc2l2ZUl0ZXJhdG9yKFxuICAgICAgICAgICAgICBhcnJba2V5XSxcbiAgICAgICAgICAgICAgJ2l0ZW0nLFxuICAgICAgICAgICAgICAkdGhpc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCAkbm9kZSA9IE1hdGVyaWFsLmZyYW1lJCgkc2NvcGUuZmluZChgW2RhdGEtZWRpdGFibGUta2V5PVwiJHtmdWxsS2V5UGF0aH1cIl1gKS5maXJzdCgpKTtcbiAgICAgICAgICBmaW5hbFtrZXldID0gTWF0ZXJpYWwuc2VyaWFsaXplTm9kZSgkbm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZpbmFsO1xuICAgIH07XG5cbiAgICByZXR1cm4gcmVjdXJzaXZlSXRlcmF0b3IoZWRpdGFibGVLZXlzLCAnJywgTWF0ZXJpYWwuZnJhbWUkKHRoaXMuJG5vZGUpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1BhZ2VTdHJ1Y3R1cmVDb21wb25lbnRzL01hdGVyaWFsLmpzXG4gKiovIiwiaW1wb3J0IE1hdGVyaWFsIGZyb20gJy4vTWF0ZXJpYWwnO1xuXG5jbGFzcyBSZWdpb24ge1xuICBjb25zdHJ1Y3Rvcigkbm9kZSkge1xuICAgIHRoaXMubWF0ZXJpYWxzID0ge307XG4gICAgdGhpcy4kbm9kZSA9ICRub2RlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSAkbm9kZS5kYXRhKCdjb250ZW50RGVzY3JpcHRpb24nKTtcbiAgfVxuXG4gIHByb2Nlc3NSZWdpb24oKSB7XG4gICAgY29uc3QgJHJlZ2lvbkxpID0gJChgPGxpIGNsYXNzPVwicGFnZS1zdHJ1Y3R1cmVfX3JlZ2lvblwiPiR7dGhpcy5yZWdpb25EZXNjcmlwdGlvbn08L2xpPmApO1xuICAgIHRoaXMua2V5ID0gdGhpcy4kbm9kZS5kYXRhKCdyZWdpb25LZXknKTtcbiAgICB0aGlzLmlkID0gdGhpcy4kbm9kZS5kYXRhKCdyZWdpb25JZCcpO1xuICAgIGNvbnN0ICRyZWdpb25VbCA9ICQoJzx1bCBjbGFzcz1cInBhZ2Utc3RydWN0dXJlX19yZWdpb24tbWF0ZXJpYWxzXCI+PC91bD4nKTtcblxuICAgIGNvbnN0ICRtYXRlcmlhbHMgPSB0aGlzLiRub2RlLmZpbmQoJ1tkYXRhLWlzLW1hdGVyaWFsPTFdJyk7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAkbWF0ZXJpYWxzLmVhY2goZnVuY3Rpb24gbWF0ZXJpYWxzSXRlcmF0b3IoKSB7XG4gICAgICBjb25zdCAkbWF0ZXJpYWxOb2RlID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IG1hdGVyaWFsT2JqZWN0ID0gbmV3IE1hdGVyaWFsKCRtYXRlcmlhbE5vZGUpO1xuICAgICAgY29uc3QgJGxpID0gbWF0ZXJpYWxPYmplY3QucHJvY2Vzc01hdGVyaWFsKCk7XG4gICAgICB0aGF0Lm1hdGVyaWFsc1ttYXRlcmlhbE9iamVjdC5rZXldID0gbWF0ZXJpYWxPYmplY3Q7XG4gICAgICAkcmVnaW9uVWwuYXBwZW5kKCRsaSk7XG4gICAgfSk7XG5cbiAgICAkcmVnaW9uTGkuYXBwZW5kKCRyZWdpb25VbCk7XG4gICAgcmV0dXJuICRyZWdpb25MaTtcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBjb25zdCBtYXRlcmlhbHMgPSB0aGlzLm1hdGVyaWFscztcbiAgICBPYmplY3Qua2V5cyhtYXRlcmlhbHMpLmZvckVhY2goZnVuY3Rpb24gaXRlcihtYXRlcmlhbEtleSkge1xuICAgICAgcmVzdWx0W21hdGVyaWFsS2V5XSA9IG1hdGVyaWFsc1ttYXRlcmlhbEtleV0uc2VyaWFsaXplKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIG1hdGVyaWFsc0RlY2woKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBtYXRlcmlhbEtleSBpbiB0aGlzLm1hdGVyaWFscykge1xuICAgICAgaWYgKHRoaXMubWF0ZXJpYWxzLmhhc093blByb3BlcnR5KG1hdGVyaWFsS2V5KSkge1xuICAgICAgICByZXN1bHRbbWF0ZXJpYWxLZXldID0ge1xuICAgICAgICAgICdtYXRlcmlhbCc6IHRoaXMubWF0ZXJpYWxzW21hdGVyaWFsS2V5XS5tYXRlcmlhbFBhdGgsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaW9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZUNvbXBvbmVudHMvUmVnaW9uLmpzXG4gKiovIiwiaW1wb3J0IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQnO1xuaW1wb3J0IE1hdGVyaWFsc0Vudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50JztcbmltcG9ydCBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50JztcbmltcG9ydCBBY3Rpb25FbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudCc7XG5pbXBvcnQgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCc7XG5pbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi8uLi92aXN1YWwtZnJhbWUvRnJhbWVBcGknO1xuaW1wb3J0IEVkaXRhYmxlIGZyb20gJy4vRWRpdGFibGUnO1xuXG5jbGFzcyBWaXN1YWxCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLnJlc29sdXRpb25Td2l0Y2hlcigpO1xuXG4gICAgdGhpcy5lbnZpcm9ubWVudHMgPSBuZXcgTWFwKFtcbiAgICAgIFsnc2l0ZS1zdHJ1Y3R1cmUnLCBuZXcgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdzaXRlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsncGFnZS1zdHJ1Y3R1cmUnLCBuZXcgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdwYWdlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsnbWF0ZXJpYWxzJywgbmV3IE1hdGVyaWFsc0Vudmlyb25tZW50KHRoaXMsICdtYXRlcmlhbHMnKV0sXG4gICAgICBbJ2N1c3RvbWl6YXRpb24nLCBuZXcgQ3VzdG9taXphdGlvbkVudmlyb25tZW50KHRoaXMsICdjdXN0b21pemF0aW9uJyldLFxuICAgICAgWydhY3Rpb24nLCBuZXcgQWN0aW9uRW52aXJvbm1lbnQodGhpcywgJ2FjdGlvbicpXSxcbiAgICBdKTtcblxuICAgIHRoaXMuZW52aXJvbm1lbnRTZWxlY3RvcigpO1xuXG4gICAgLy8gc2VsZWN0IGZpcnN0IGVudmlyb25tZW50IGJ5IGRlZmF1bHRcbiAgICB0aGlzLnN3aXRjaEVudmlyb25tZW50KCdzaXRlLXN0cnVjdHVyZScpO1xuICAgICQoJy5tb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJylcbiAgICAgIC5maXJzdCgpXG4gICAgICAubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICBGcmFtZUFwaS5iaW5kTWVzc2FnZUxpc3RlbmVyKHRoaXMpO1xuXG4gICAgdGhpcy5lZGl0YWJsZSA9IG5ldyBFZGl0YWJsZSgpO1xuXG4gICAgdGhpcy5jb250cm9scygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgVmlzdWFsQnVpbGRlciBzZXR0aW5ncy5cbiAgICogVXNlcyBWaXN1YWxCdWlsZGVyU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuVmlzdWFsQnVpbGRlclNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgJ2VsZW1lbnQtc2VsZWN0b3InOiAnLm1vbnN0ZXItdmlzdWFsLWJ1aWxkZXInLFxuICAgICAgJ2ZyYW1lLXNlbGVjdG9yJzogJy5tb25zdGVyLXZpc3VhbC1mcmFtZScsXG4gICAgICBidW5kbGVzOiB7fSxcbiAgICAgICdzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJzogJ21vbnN0ZXItc3RhY2thYmxlLWNvbnRhaW5lcicsXG4gICAgICAnbmV3LWJsb2NrLXVybCc6ICcvbW9uc3Rlci92aXN1YWwtYnVpbGRlci9uZXctYmxvY2snLFxuICAgIH07XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuJGJ1aWxkZXIgPSAkKHRoaXMuc2V0dGluZ3NbJ2VsZW1lbnQtc2VsZWN0b3InXSk7XG4gICAgdGhpcy4kc3RhY2thYmxlID0gJChgLiR7dGhpcy5zZXR0aW5nc1snc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyddfWApO1xuICB9XG5cbiAgcmVzb2x1dGlvblN3aXRjaGVyKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGJlbUVsZW0gPSAncmVzb2x1dGlvbi1zd2l0Y2hlcl9fcmVzb2x1dGlvbi1saW5rJztcbiAgICBjb25zdCBhY3RpdmVNb2RpZmllciA9IGAke2JlbUVsZW19LS1hY3RpdmVgO1xuICAgIGNvbnN0ICRyZXNvbHV0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRyZXNvbHV0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAkcmVzb2x1dGlvbkxpbmtzLnJlbW92ZUNsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgICQodGhhdC5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSkud2lkdGgoJCh0aGlzKS5kYXRhKCdyZXNvbHV0aW9uV2lkdGgnKSk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGVudmlyb25tZW50U2VsZWN0b3IoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgYmVtRWxlbSA9ICdtb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJztcbiAgICBjb25zdCBhY3RpdmVNb2RpZmllciA9IGAke2JlbUVsZW19LS1hY3RpdmVgO1xuICAgIGNvbnN0ICRzZWN0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRzZWN0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBjb25zdCBlbnZpcm9ubWVudE5hbWUgPSAkKHRoaXMpLmRhdGEoJ2Vudmlyb25tZW50TmFtZScpO1xuICAgICAgaWYgKHRoYXQuY3VycmVudEVudmlyb25tZW50ID09PSBlbnZpcm9ubWVudE5hbWUpIHtcbiAgICAgICAgJHNlY3Rpb25MaW5rcy5yZW1vdmVDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICAgIHRoYXQuZW52aXJvbm1lbnRzLmdldChlbnZpcm9ubWVudE5hbWUpLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgdGhhdC5jdXJyZW50RW52aXJvbm1lbnQgPSBudWxsO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgICRzZWN0aW9uTGlua3MucmVtb3ZlQ2xhc3MoYWN0aXZlTW9kaWZpZXIpO1xuICAgICAgdGhhdC5zd2l0Y2hFbnZpcm9ubWVudChlbnZpcm9ubWVudE5hbWUpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBzd2l0Y2hFbnZpcm9ubWVudChlbnZpcm9ubWVudE5hbWUpIHtcbiAgICB0aGlzLmVudmlyb25tZW50cy5nZXQoZW52aXJvbm1lbnROYW1lKS5hY3RpdmF0ZSgpO1xuICAgIHRoaXMuY3VycmVudEVudmlyb25tZW50ID0gZW52aXJvbm1lbnROYW1lO1xuICB9XG5cbiAgY2xlYXJTdGFja2FibGUoKSB7XG4gICAgdGhpcy4kc3RhY2thYmxlLmVtcHR5KCk7XG4gIH1cblxuICBjcmVhdGVTdGFja2FibGVQYW5lKCkge1xuICAgIGNvbnN0IHBhbmVDbGFzcyA9IGAke3RoaXMuc2V0dGluZ3NbJ3N0YWNrYWJsZS1jb250YWluZXItY2xhc3MnXX1fX3BhbmVgO1xuICAgIGNvbnN0IG1vZGlmaWVyID0gdGhpcy4kc3RhY2thYmxlLmZpbmQoYC4ke3BhbmVDbGFzc31gKS5sZW5ndGggPT09IDBcbiAgICAgID8gYCR7cGFuZUNsYXNzfS0tZmlyc3RgXG4gICAgICA6ICcnO1xuICAgIGNvbnN0ICRuZXdQYW5lID0gJChgPGRpdiBjbGFzcz1cIiR7cGFuZUNsYXNzfSAke21vZGlmaWVyfVwiPjwvZGl2PmApO1xuICAgIHRoaXMuJHN0YWNrYWJsZS5hcHBlbmQoJG5ld1BhbmUpO1xuICAgIHJldHVybiAkbmV3UGFuZTtcbiAgfVxuXG4gIG1hdGVyaWFsQnlOYW1lKG5hbWUpIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5tYXRlcmlhbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLm1hdGVyaWFsc1tuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXQgZnJhbWVDb250ZW50V2luZG93KCkge1xuICAgIHJldHVybiAkKHRoaXMuc2V0dGluZ3NbJ2ZyYW1lLXNlbGVjdG9yJ10pWzBdLmNvbnRlbnRXaW5kb3c7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgLy8gRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5mcmFtZUNvbnRlbnRXaW5kb3csICdzZXJpYWxpemVDb250ZW50JywgWydsb2cnXSk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5lbnZpcm9ubWVudHMuZ2V0KCdwYWdlLXN0cnVjdHVyZScpLnNlcmlhbGl6ZVBhZ2UoKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgLy8gd2UgaGF2ZSByZXN1bHQgd2hpY2ggaXMgY29udGVudCBpbiBmb3JtYXQ6XG4gICAgLy8gcmVnaW9uXG4gICAgLy8gLS0tIG1hdGVyaWFsIGlkXG4gICAgLy8gLS0tLS0tLSBrZXlzID0+IHZhbHVlc1xuICAgIC8vXG4gICAgLy8gb3VyIFByb3ZpZGVycyBzaG91bGQgZ2V0IG9ubHkgdGhvc2Uga2V5cyB0aGF0IHRoZXkgcHJvdmlkZVxuICAgIC8vIHByb3ZpZGVkIGtleXMgYXJlIHN0b3JlZCBpbiBmcmFtZUNvbnRlbnRXaW5kb3cuTU9OU1RFUl9FRElUX01PREVfREFUQS50ZW1wbGF0ZS5wcm92aWRlZEtleXNcbiAgICBjb25zdCByZXN1bHRCeVByb3ZpZGVycyA9IHt9O1xuICAgIGNvbnN0IHByb3ZpZGVkS2V5cyA9IHRoaXMuZnJhbWVDb250ZW50V2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEudGVtcGxhdGUucHJvdmlkZWRLZXlzO1xuXG4gICAgT2JqZWN0LmtleXMocHJvdmlkZWRLZXlzKS5mb3JFYWNoKHByb3ZpZGVySW5kZXggPT4ge1xuICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF0gPSB7fTtcblxuICAgICAgY29uc3QgcmVnaW9ucyA9IHByb3ZpZGVkS2V5c1twcm92aWRlckluZGV4XTtcblxuICAgICAgT2JqZWN0LmtleXMocmVnaW9ucykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0Lmhhc093blByb3BlcnR5KHJlZ2lvbktleSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdW3JlZ2lvbktleV0gPSB7fTtcblxuICAgICAgICAvLyBnbyBkZWVwIHRvIG1hdGVyaWFsIGluZGVjZXNcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gcmVnaW9uc1tyZWdpb25LZXldO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG1hdGVyaWFscykuZm9yRWFjaChtYXRlcmlhbEluZGV4ID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0W3JlZ2lvbktleV0uaGFzT3duUHJvcGVydHkobWF0ZXJpYWxJbmRleCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdW3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF0gPSB7fTtcblxuICAgICAgICAgIGNvbnN0IGRhdGFLZXlzID0gbWF0ZXJpYWxzW21hdGVyaWFsSW5kZXhdO1xuXG4gICAgICAgICAgZGF0YUtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdFtyZWdpb25LZXldW21hdGVyaWFsSW5kZXhdLmhhc093blByb3BlcnR5KGtleSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzXG4gICAgICAgICAgICAgIFtwcm92aWRlckluZGV4XVxuICAgICAgICAgICAgICBbcmVnaW9uS2V5XVxuICAgICAgICAgICAgICBbbWF0ZXJpYWxJbmRleF1cbiAgICAgICAgICAgICAgW2tleV0gPSByZXN1bHRbcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XVtrZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdEJ5UHJvdmlkZXJzKTtcbiAgICByZXR1cm4gcmVzdWx0QnlQcm92aWRlcnM7XG4gIH1cblxuICBwYWdlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmVudmlyb25tZW50cy5mb3JFYWNoKFxuICAgICAgZW52aXJvbm1lbnQgPT5cbiAgICAgICAgZW52aXJvbm1lbnQucGFnZUNoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICBsb2cocmVzdWx0KSB7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgfVxuXG4gIGNvbnRyb2xzKCkge1xuICAgIHRoaXMuJGNvbnRyb2xzID0gdGhpcy4kYnVpbGRlci5maW5kKCcuY29udHJvbHMnKS5maXJzdCgpO1xuICAgIHRoaXMuJGNvbnRyb2xzLmVsZW0oJ3JlZnJlc2gnKS5jbGljaygoKSA9PiB7XG4gICAgICB0aGlzLmZyYW1lQ29udGVudFdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLiRjb250cm9scy5lbGVtKCdzYXZlJykuY2xpY2soKCkgPT4ge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiB0aGlzLmZyYW1lQ29udGVudFdpbmRvdy5sb2NhdGlvbixcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICBwcm92aWRlcnNFbnRpdGllczogdGhpcy5zZXJpYWxpemUoKSxcbiAgICAgICAgICAgIHJlZ2lvbnNNYXRlcmlhbHM6IHRoaXMuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKS5tYXRlcmlhbHNCeVJlZ2lvbnMoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFjdGlvbjogJ3NhdmUnLFxuICAgICAgICB9KSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gb2soZGF0YSwgdGV4dFN0YXR1cywganFYSFIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycihkYXRhLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzdWFsQnVpbGRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXIuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3eXNpd3lnKCRub2RlKSB7XG4gIHJldHVybiAkbm9kZS5odG1sKCk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lZGl0YWJsZXMvV1lTSVdZRy5qc1xuICoqLyIsImltcG9ydCBXWVNJV1lHIGZyb20gJy4vV1lTSVdZRyc7XG5pbXBvcnQgaW1hZ2UgZnJvbSAnLi9pbWFnZSc7XG5pbXBvcnQgbGluayBmcm9tICcuL2xpbmsnO1xuaW1wb3J0IFN0cmluZ0VkaXRhYmxlIGZyb20gJy4vc3RyaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWxsKCkge1xuICBpZiAodHlwZW9mKHdpbmRvdy5NT05TVEVSX0VESVRBQkxFUykgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTID0ge307XG4gIH1cbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWyd3eXNpd3lnJ10gPSBXWVNJV1lHO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ2xpbmsnXSA9IGxpbms7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snaW1hZ2UnXSA9IGltYWdlO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ3N0cmluZyddID0gU3RyaW5nRWRpdGFibGU7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL2FsbC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGltYWdlKCRub2RlKSB7XG4gIGNvbnN0ICRpbWcgPSAkbm9kZS5maW5kKCdpbWcnKS5maXJzdCgpO1xuICByZXR1cm4ge1xuICAgIHNyYzogJGltZy5hdHRyKCdzcmMnKSxcbiAgICBhbHQ6ICRpbWcuYXR0cignYWx0JyksXG4gIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lZGl0YWJsZXMvaW1hZ2UuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaW5rKCRub2RlKSB7XG4gIGNvbnNvbGUubG9nKCRub2RlLmRhdGEoKSk7XG4gIGNvbnNvbGUubG9nKCRub2RlLmRhdGEoJ29yaWdpbmFsSHJlZicpKTtcbiAgcmV0dXJuIHtcbiAgICBocmVmOiAkbm9kZS5kYXRhKCdvcmlnaW5hbEhyZWYnKSA/ICRub2RlLmRhdGEoJ29yaWdpbmFsSHJlZicpIDogJG5vZGUuYXR0cignaHJlZicpLFxuICAgIGFuY2hvcjogJG5vZGUuaHRtbCgpLFxuICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL2xpbmsuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigkbm9kZSkge1xuICByZXR1cm4gJG5vZGUudGV4dCgpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lZGl0YWJsZXMvc3RyaW5nLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIEFjdGlvbkVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcblxufVxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQWN0aW9uRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgQ3VzdG9taXphdGlvbkVudmlyb25tZW50IGV4dGVuZHMgQmFzZUVudmlyb25tZW50IHtcblxufVxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9taXphdGlvbkVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBNYXRlcmlhbHNFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICBzdXBlcih2aXN1YWxCdWlsZGVyLCBuYW1lKTtcbiAgICB0aGlzLmluaXRNYXRlcmlhbHNTZWxlY3RvcigpO1xuICB9XG5cbiAgaW5pdE1hdGVyaWFsc1NlbGVjdG9yKCkge1xuICAgIHRoaXMuJG1hdGVyaWFsc0dyb3VwcyA9ICQoJzx1bCBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNcIj48L3VsPicpO1xuICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QgPSBbXTtcblxuICAgIHRoaXMudmlzdWFsQnVpbGRlci5zZXR0aW5ncy5idW5kbGVzLmZvckVhY2goYnVuZGxlID0+IHtcbiAgICAgIC8qIGdsb2JhbCBwb2x5Z2xvdDogZmFsc2UgKi9cbiAgICAgIGNvbnN0IGkxOG5CdW5kbGVOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBwb2x5Z2xvdC50KGJ1bmRsZS5uYW1lKVxuICAgICAgICA6IGJ1bmRsZS5uYW1lO1xuXG4gICAgICBjb25zdCAkYnVuZGxlVGl0bGUgPSBgXG4gICAgICA8bGkgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19pdGVtIG1hdGVyaWFscy1ncm91cHNfX2l0ZW0tLWJ1bmRsZS1sYWJlbFwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWJ1bmRsZVwiIGRhdGEtYnVuZGxlLXBhdGg9XCIke2J1bmRsZS5mdWxsUGF0aH1cIj5cbiAgICAgICAgICAgICR7aTE4bkJ1bmRsZU5hbWV9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICBgO1xuICAgICAgdGhpcy4kbWF0ZXJpYWxzTGlzdC5wdXNoKCRidW5kbGVUaXRsZSk7XG5cbiAgICAgIGJ1bmRsZS5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwTmFtZSA9IGdyb3VwLm5hbWU7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IGdyb3VwLm1hdGVyaWFscztcbiAgICAgICAgY29uc3QgaTE4bkdyb3VwTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnID8gcG9seWdsb3QudChncm91cE5hbWUpIDogZ3JvdXBOYW1lO1xuICAgICAgICBjb25zdCAkbGkgPSAkKGBcbiAgICA8bGkgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19pdGVtXCI+XG4gICAgICA8YSBocmVmPVwiI1wiIGRhdGEtZ3JvdXAtcGF0aD1cIiR7Z3JvdXAuZnVsbFBhdGh9XCIgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXBcIj5cbiAgICAgICAgJHtpMThuR3JvdXBOYW1lfSA8c3BhbiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX2NvdW50XCI+KCR7bWF0ZXJpYWxzLmxlbmd0aH0pPC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvbGk+YCk7XG4gICAgICAgIHRoaXMuJG1hdGVyaWFsc0dyb3Vwcy5hcHBlbmQoJGxpKTtcbiAgICAgICAgY29uc3QgJGxpc3QgPSAkKGA8dWwgY2xhc3M9XCJtYXRlcmlhbHMtbGlzdFwiIGRhdGEtZ3JvdXAtcGF0aD1cIiR7Z3JvdXAuZnVsbFBhdGh9XCI+PC91bD5gKTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcblxuICAgICAgICBtYXRlcmlhbHMuZm9yRWFjaChtYXRlcmlhbCA9PiB7XG4gICAgICAgICAgY29uc3QgbWF0ZXJpYWxOYW1lID0gbWF0ZXJpYWwubmFtZTtcbiAgICAgICAgICBjb25zdCBpMThuTWF0ZXJpYWxOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gcG9seWdsb3QudChtYXRlcmlhbE5hbWUpXG4gICAgICAgICAgICA6IG1hdGVyaWFsTmFtZTtcbiAgICAgICAgICBjb25zdCAkaXRlbSA9ICQoYFxuPGxpPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWF0ZXJpYWxzLWxpc3RfX2l0ZW1cIiBkYXRhLW1hdGVyaWFsLXBhdGg9XCIke21hdGVyaWFsLmZ1bGxQYXRofVwiPlxuICAgICR7aTE4bk1hdGVyaWFsTmFtZX1cbiAgPC9hPlxuPC9saT5cbmApO1xuICAgICAgICAgIGl0ZW1zLnB1c2goJGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgJGxpc3QuYXBwZW5kKGl0ZW1zKTtcbiAgICAgICAgdGhpcy4kbWF0ZXJpYWxzTGlzdC5wdXNoKCRsaXN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAnLCBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAkdGhpcy50b2dnbGVNb2QoJ2FjdGl2ZScpO1xuICAgICAgY29uc3QgZ3JvdXBQYXRoID0gJHRoaXMuZGF0YSgnZ3JvdXBQYXRoJyk7XG4gICAgICBpZiAoJHRoaXMubW9kKCdhY3RpdmUnKSkge1xuICAgICAgICAkKCcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJykubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsc0xpc3RBY3RpdmVDbGFzcyA9ICdtYXRlcmlhbHMtbGlzdC0tYWN0aXZlJztcblxuICAgICAgICAkKCcubWF0ZXJpYWxzLWxpc3QnKS5lYWNoKGZ1bmN0aW9uIGl0KCkge1xuICAgICAgICAgIGNvbnN0ICRsaXN0ID0gJCh0aGlzKTtcbiAgICAgICAgICBpZiAoJGxpc3QuaGFzQ2xhc3MobWF0ZXJpYWxzTGlzdEFjdGl2ZUNsYXNzKSkge1xuICAgICAgICAgICAgJGxpc3QucmVtb3ZlQ2xhc3MobWF0ZXJpYWxzTGlzdEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCRsaXN0LmRhdGEoJ2dyb3VwUGF0aCcpID09PSBncm91cFBhdGgpIHtcbiAgICAgICAgICAgICRsaXN0LmFkZENsYXNzKG1hdGVyaWFsc0xpc3RBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkdGhpcy5tb2QoJ2FjdGl2ZScsIHRydWUpO1xuICAgICAgICB0aGF0LiRtYXRlcmlhbHNQYW5lLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoYXQncyBqdXN0IHNlY29uZCBjbGljayBvbiB0aGUgc2FtZSBncm91cFxuICAgICAgICB0aGF0LiRtYXRlcmlhbHNQYW5lLmhpZGUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hdGVyaWFscy1saXN0X19pdGVtJywgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCkge1xuICAgICAgdGhhdC5zZW5kTWVzc2FnZShcbiAgICAgICAgJ25ld0Jsb2NrJyxcbiAgICAgICAgW1xuICAgICAgICAgICQodGhpcykuZGF0YSgnbWF0ZXJpYWxQYXRoJyksXG4gICAgICAgICAgJ2NvbnRlbnQnLFxuICAgICAgICBdXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgc3VwZXIuYWN0aXZhdGUoKTtcblxuICAgIHRoaXMuJGdyb3Vwc1BhbmUgPSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3JlYXRlU3RhY2thYmxlUGFuZSgpO1xuICAgIHRoaXMuJGdyb3Vwc1BhbmUuYXBwZW5kKHRoaXMuJG1hdGVyaWFsc0dyb3Vwcyk7XG5cbiAgICB0aGlzLiRtYXRlcmlhbHNQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRtYXRlcmlhbHNQYW5lLmFwcGVuZCh0aGlzLiRtYXRlcmlhbHNMaXN0KTtcbiAgICB0aGlzLiRtYXRlcmlhbHNQYW5lLmhpZGUoKTtcblxuICAgICQoJy5tYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAnKS5tb2QoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTWF0ZXJpYWxzRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvTWF0ZXJpYWxzRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcbmltcG9ydCBSZWdpb24gZnJvbSAnLi8uLi9QYWdlU3RydWN0dXJlQ29tcG9uZW50cy9SZWdpb24nO1xuXG5jbGFzcyBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2aXN1YWxCdWlsZGVyLCBuYW1lKSB7XG4gICAgc3VwZXIodmlzdWFsQnVpbGRlciwgbmFtZSk7XG4gICAgdGhpcy5pbml0UGFnZVN0cnVjdHVyZUVsZW1lbnQoKTtcbiAgICB0aGlzLmVkaXRNb2RlRGF0YSA9IHt9O1xuICB9XG5cbiAgaW5pdFBhZ2VTdHJ1Y3R1cmVFbGVtZW50KCkge1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUgPSAkKCc8dWwgY2xhc3M9XCJwYWdlLXN0cnVjdHVyZVwiPjwvdWw+Jyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICBzdXBlci5hY3RpdmF0ZSgpO1xuXG4gICAgdGhpcy4kc3RydWN0dXJlUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kc3RydWN0dXJlUGFuZS5hcHBlbmQodGhpcy4kcGFnZVN0cnVjdHVyZSk7XG4gIH1cblxuICBwYWdlQ2hhbmdlZCgpIHtcbiAgICBzdXBlci5wYWdlQ2hhbmdlZCgpO1xuICAgIHRoaXMuJHBhZ2VTdHJ1Y3R1cmUuZmluZCgnbGknKS5yZW1vdmUoKTtcbiAgICBjb25zdCByZWdpb25zID0gdGhpcy50YXJnZXQuJCgnLm0tbW9uc3Rlci1jb250ZW50X19jb250ZW50Jyk7XG4gICAgY29uc3QgZW52aXJvbm1lbnQgPSB0aGlzO1xuICAgIHRoaXMucmVnaW9uc1N0cnVjdHVyZSA9IHt9O1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIHJlZ2lvbnMuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgY29uc3QgJHJlZ2lvbk5vZGUgPSAkKHRoaXMpO1xuICAgICAgY29uc3QgcmVnaW9uT2JqZWN0ID0gbmV3IFJlZ2lvbigkcmVnaW9uTm9kZSk7XG4gICAgICBjb25zdCAkcmVnaW9uTGkgPSByZWdpb25PYmplY3QucHJvY2Vzc1JlZ2lvbigpO1xuICAgICAgdGhhdC5yZWdpb25zU3RydWN0dXJlW3JlZ2lvbk9iamVjdC5rZXldID0gcmVnaW9uT2JqZWN0O1xuICAgICAgZW52aXJvbm1lbnQuJHBhZ2VTdHJ1Y3R1cmUuYXBwZW5kKCRyZWdpb25MaSk7XG4gICAgfSk7XG4gICAgdGhpcy5lZGl0TW9kZURhdGEgPSB0aGlzLnRhcmdldC5NT05TVEVSX0VESVRfTU9ERV9EQVRBO1xuICB9XG5cbiAgc2VyaWFsaXplUGFnZSgpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMucmVnaW9uc1N0cnVjdHVyZVtyZWdpb25LZXldO1xuICAgICAgcmVzdWx0W3JlZ2lvbi5rZXldID0gcmVnaW9uLnNlcmlhbGl6ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBtYXRlcmlhbHNCeVJlZ2lvbnMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5yZWdpb25zU3RydWN0dXJlKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICBjb25zdCByZWdpb24gPSB0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmVbcmVnaW9uS2V5XTtcbiAgICAgIHJlc3VsdFtyZWdpb24ua2V5XSA9IHJlZ2lvbi5tYXRlcmlhbHNEZWNsKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuXG59XG5leHBvcnQgZGVmYXVsdCBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1bmlxaWQgKHByZWZpeCwgbW9yZUVudHJvcHkpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHA6Ly9sb2N1dHVzLmlvL3BocC91bmlxaWQvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va3Z6LmlvKVxuICAvLyAgcmV2aXNlZCBieTogS2Fua3JlbHVuZSAoaHR0cDovL3d3dy53ZWJmYWt0b3J5LmluZm8vKVxuICAvLyAgICAgIG5vdGUgMTogVXNlcyBhbiBpbnRlcm5hbCBjb3VudGVyIChpbiBsb2N1dHVzIGdsb2JhbCkgdG8gYXZvaWQgY29sbGlzaW9uXG4gIC8vICAgZXhhbXBsZSAxOiB2YXIgJGlkID0gdW5pcWlkKClcbiAgLy8gICBleGFtcGxlIDE6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gMTNcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IHZhciAkaWQgPSB1bmlxaWQoJ2ZvbycpXG4gIC8vICAgZXhhbXBsZSAyOiB2YXIgJHJlc3VsdCA9ICRpZC5sZW5ndGggPT09ICgxMyArICdmb28nLmxlbmd0aClcbiAgLy8gICByZXR1cm5zIDI6IHRydWVcbiAgLy8gICBleGFtcGxlIDM6IHZhciAkaWQgPSB1bmlxaWQoJ2JhcicsIHRydWUpXG4gIC8vICAgZXhhbXBsZSAzOiB2YXIgJHJlc3VsdCA9ICRpZC5sZW5ndGggPT09ICgyMyArICdiYXInLmxlbmd0aClcbiAgLy8gICByZXR1cm5zIDM6IHRydWVcblxuICBpZiAodHlwZW9mIHByZWZpeCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwcmVmaXggPSAnJ1xuICB9XG5cbiAgdmFyIHJldElkXG4gIHZhciBfZm9ybWF0U2VlZCA9IGZ1bmN0aW9uIChzZWVkLCByZXFXaWR0aCkge1xuICAgIHNlZWQgPSBwYXJzZUludChzZWVkLCAxMCkudG9TdHJpbmcoMTYpIC8vIHRvIGhleCBzdHJcbiAgICBpZiAocmVxV2lkdGggPCBzZWVkLmxlbmd0aCkge1xuICAgICAgLy8gc28gbG9uZyB3ZSBzcGxpdFxuICAgICAgcmV0dXJuIHNlZWQuc2xpY2Uoc2VlZC5sZW5ndGggLSByZXFXaWR0aClcbiAgICB9XG4gICAgaWYgKHJlcVdpZHRoID4gc2VlZC5sZW5ndGgpIHtcbiAgICAgIC8vIHNvIHNob3J0IHdlIHBhZFxuICAgICAgcmV0dXJuIEFycmF5KDEgKyAocmVxV2lkdGggLSBzZWVkLmxlbmd0aCkpLmpvaW4oJzAnKSArIHNlZWRcbiAgICB9XG4gICAgcmV0dXJuIHNlZWRcbiAgfVxuXG4gIHZhciAkZ2xvYmFsID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogR0xPQkFMKVxuICAkZ2xvYmFsLiRsb2N1dHVzID0gJGdsb2JhbC4kbG9jdXR1cyB8fCB7fVxuICB2YXIgJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzXG4gICRsb2N1dHVzLnBocCA9ICRsb2N1dHVzLnBocCB8fCB7fVxuXG4gIGlmICghJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQpIHtcbiAgICAvLyBpbml0IHNlZWQgd2l0aCBiaWcgcmFuZG9tIGludFxuICAgICRsb2N1dHVzLnBocC51bmlxaWRTZWVkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMHg3NWJjZDE1KVxuICB9XG4gICRsb2N1dHVzLnBocC51bmlxaWRTZWVkKytcblxuICAvLyBzdGFydCB3aXRoIHByZWZpeCwgYWRkIGN1cnJlbnQgbWlsbGlzZWNvbmRzIGhleCBzdHJpbmdcbiAgcmV0SWQgPSBwcmVmaXhcbiAgcmV0SWQgKz0gX2Zvcm1hdFNlZWQocGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwLCAxMCksIDgpXG4gIC8vIGFkZCBzZWVkIGhleCBzdHJpbmdcbiAgcmV0SWQgKz0gX2Zvcm1hdFNlZWQoJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQsIDUpXG4gIGlmIChtb3JlRW50cm9weSkge1xuICAgIC8vIGZvciBtb3JlIGVudHJvcHkgd2UgYWRkIGEgZmxvYXQgbG93ZXIgdG8gMTBcbiAgICByZXRJZCArPSAoTWF0aC5yYW5kb20oKSAqIDEwKS50b0ZpeGVkKDgpLnRvU3RyaW5nKClcbiAgfVxuXG4gIHJldHVybiByZXRJZFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy91bmlxaWQuanNcbiAqKi8iLCJjbGFzcyBIYXNoQXBpIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5mdW5jdGlvbkNhbGxzID0ge307XG5cbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaGFzaCkge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGRvY3VtZW50LmxvY2F0aW9uLmhhc2gubWF0Y2goLyNoYXNoQXBpOiguKj8pOlxcL2hhc2hBcGkvKTtcbiAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGNvbnN0IGZ1bmN0aW9uQ2FsbHMgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGZ1bmN0aW9uQ2FsbHMpIHtcbiAgICAgICAgICBpZiAoaXRlbS5mdW5jKSB7XG4gICAgICAgICAgICB0aGlzLmZ1bmN0aW9uQ2FsbHNbaXRlbS5mdW5jXSA9IGl0ZW0uYXJncyB8fCB7fTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzaG91bGRDYWxsKGZ1bmMpIHtcbiAgICByZXR1cm4gdGhpcy5mdW5jdGlvbkNhbGxzW2Z1bmNdIHx8IGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhhc2hBcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanNcbiAqKi8iLCJpbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi9GcmFtZUFwaSc7XG5pbXBvcnQgdW5pcXVlSWQgZnJvbSAnLi8uLi91bmlxaWQnO1xuXG5jbGFzcyBWaXN1YWxGcmFtZVxue1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtcygpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICBGcmFtZUFwaS5iaW5kTWVzc2FnZUxpc3RlbmVyKHRoaXMpO1xuICAgIHRoaXMucGFyZW50V2luZG93ID0gd2luZG93LnBhcmVudDtcbiAgICAvKiogQHZhciBGcm9udGVuZE1vbnN0ZXIgKi9cbiAgICB0aGlzLnBhcmVudE1vbnN0ZXIgPSB0aGlzLnBhcmVudFdpbmRvdy5Gcm9udGVuZE1vbnN0ZXI7XG4gICAgdGhpcy5wYXJlbnRCdWlsZGVyID0gdGhpcy5wYXJlbnRNb25zdGVyLmJ1aWxkZXI7XG4gICAgdGhpcy5jdXJyZW50TW9uc3RlckNvbnRlbnQgPSBmYWxzZTtcbiAgICB0aGlzLm1ha2VJdE1vdmUoKTtcbiAgICAkKHdpbmRvdykucmVzaXplKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlSGFuZGxlcnMoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIHRoaXMucGFyZW50QnVpbGRlci5wYWdlQ2hhbmdlZCgpO1xuICB9XG5cbiAgZ2V0ICRtb25zdGVyQ29udGVudCgpIHtcbiAgICBpZiAodGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZSkge1xuICAgICAgcmV0dXJuIHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGU7XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaE1vbnN0ZXJDb250ZW50Q2FjaGUoKTtcbiAgICByZXR1cm4gdGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZTtcbiAgfVxuXG4gIHJlZnJlc2hNb25zdGVyQ29udGVudENhY2hlKCkge1xuICAgIHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGUgPSB7fTtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAkKHRoaXMuc2V0dGluZ3NbJ21vbnN0ZXItY29udGVudC1zZWxlY3RvciddKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBpZiAoIXRoYXQuY3VycmVudE1vbnN0ZXJDb250ZW50KSB7XG4gICAgICAgIHRoYXQuY3VycmVudE1vbnN0ZXJDb250ZW50ID0gJCh0aGlzKS5kYXRhKCd1bmlxdWVDb250ZW50SWQnKTtcbiAgICAgIH1cbiAgICAgIHRoYXQuJG1vbnN0ZXJDb250ZW50Q2FjaGVbJCh0aGlzKS5kYXRhKCd1bmlxdWVDb250ZW50SWQnKV0gPSAkKHRoaXMpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0TmV3TWF0ZXJpYWxJbmRleCgpIHtcbiAgICBpZiAoIXRoaXMubGFzdE1hdGVyaWFsSW5kZXgpIHtcbiAgICAgIGxldCBsYXN0SW5kZXggPSAwO1xuICAgICAgJCgnW2RhdGEtaXMtbWF0ZXJpYWxdJykuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgICBjb25zdCBpbmRleCA9ICQodGhpcykuZGF0YSgnbWF0ZXJpYWwtaW5kZXgnKTtcbiAgICAgICAgaWYgKGluZGV4ID4gbGFzdEluZGV4KSB7XG4gICAgICAgICAgbGFzdEluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5sYXN0TWF0ZXJpYWxJbmRleCA9IGxhc3RJbmRleDtcbiAgICB9XG4gICAgdGhpcy5sYXN0TWF0ZXJpYWxJbmRleCsrO1xuICAgIHJldHVybiB0aGlzLmxhc3RNYXRlcmlhbEluZGV4O1xuICB9XG5cbiAgdXBkYXRlSGFuZGxlcnMoKSB7XG4gICAgaWYgKHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwgJiYgdGhpcy4kaGFuZGxlcnMpIHtcbiAgICAgIHRoaXMuJGhhbmRsZXJzLmNzcyhcbiAgICAgICAgJ3RvcCcsXG4gICAgICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwucG9zaXRpb24oKS50b3BcbiAgICAgICAgICArIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwuaGVpZ2h0KClcbiAgICAgICAgICAtIHRoaXMuJGhhbmRsZXJzLmhlaWdodCgpXG4gICAgICApO1xuICAgICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5hZGRDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1hY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICBtYWtlSXRNb3ZlKCkge1xuICAgIHRoaXMuJGhhbmRsZXJzID0gJChgXG48ZGl2IGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc1wiPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fY29uZmlndXJlXCI+XG4gICAgPGkgY2xhc3M9XCJmYSBmYS1jb2dcIj48L2k+XG4gIDwvYT5cbiAgPHNwYW4gY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19ibG9jay1uYW1lXCI+QmxvY2sgbmFtZSBoZXJlPC9zcGFuPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fbW92ZS11cFwiPlxuICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtdXBcIj48L2k+XG4gIDwvYT5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtZG93blwiPlxuICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG93blwiPjwvaT5cbiAgPC9hPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fY2xvbmVcIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLWNsb25lXCI+PC9pPlxuICA8L2E+XG4gIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19yZW1vdmVcIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPlxuICA8L2E+XG48L2Rpdj5gKTtcbiAgICAkKCdib2R5JykuYXBwZW5kKHRoaXMuJGhhbmRsZXJzKTtcbiAgICB0aGlzLiRoYW5kbGVycy5oaWRlKCk7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgJCh0aGlzLnNldHRpbmdzWydtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InXSkub24oe1xuICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24gaG92ZXJJbigpIHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAkdGhpcy5hZGRDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1oaWdobGlnaHRlZCcpO1xuICAgICAgfSxcbiAgICAgIG1vdXNlbGVhdmU6IGZ1bmN0aW9uIGhvdmVyT3V0KCkge1xuICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdtLW1vbnN0ZXItY29udGVudF9fbWF0ZXJpYWwtLWhpZ2hsaWdodGVkJyk7XG4gICAgICB9LFxuICAgICAgY2xpY2s6IGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICB0aGF0LnNlbGVjdE1hdGVyaWFsKCR0aGlzKTtcbiAgICAgIH0sXG4gICAgfSwgJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgIHRoYXQuJGhhbmRsZXJzXG4gICAgICAub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLXVwJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgICAgIGNvbnN0ICRwcmV2ID0gdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5wcmV2KCdbZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICAgICAgICBpZiAoJHByZXYubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLmluc2VydEJlZm9yZSgkcHJldik7XG4gICAgICAgICAgICB0aGF0LnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLWRvd24nLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICAgICAgY29uc3QgJG5leHQgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLm5leHQoJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICAgICAgIGlmICgkbmV4dC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwuaW5zZXJ0QWZ0ZXIoJG5leHQpO1xuICAgICAgICAgICAgdGhhdC51cGRhdGVIYW5kbGVycygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLm9uKCdjbGljaycsICcubW9uc3Rlci1ibG9jay1oYW5kbGVyc19fY2xvbmUnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICAgICAgY29uc3QgJGNsb25lZE1hdGVyaWFsID0gdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5jbG9uZSgpO1xuICAgICAgICAgICRjbG9uZWRNYXRlcmlhbFxuICAgICAgICAgICAgLmRhdGEoXG4gICAgICAgICAgICAgICdtYXRlcmlhbC1pbmRleCcsXG4gICAgICAgICAgICAgIHRoYXQuZ2V0TmV3TWF0ZXJpYWxJbmRleCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuaW5zZXJ0QWZ0ZXIodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCk7XG4gICAgICAgICAgdGhhdC5zZWxlY3RNYXRlcmlhbCgkY2xvbmVkTWF0ZXJpYWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICAgICAgaWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgdGhpcyBtYXRlcmlhbD8nKSkge1xuICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwgPSBudWxsO1xuICAgICAgICAgICAgdGhhdC4kaGFuZGxlcnMuaGlkZSgpOyAvLyBpdCBkb2VzIG5vdCB3b3JrLiB3aHk/IE5lZWQgdG8gZml4IVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdE1hdGVyaWFsKCRtYXRlcmlhbCkge1xuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsID09PSAkbWF0ZXJpYWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwucmVtb3ZlQ2xhc3MoJ20tbW9uc3Rlci1jb250ZW50X19tYXRlcmlhbC0tYWN0aXZlJyk7XG4gICAgfVxuICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwgPSAkbWF0ZXJpYWw7XG4gICAgdGhpcy51cGRhdGVIYW5kbGVycygpO1xuICAgIHRoaXMuJGhhbmRsZXJzLnNob3coKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZUNvbnRlbnQoY2FsbGJhY2spIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBPYmplY3Qua2V5cyh0aGlzLiRtb25zdGVyQ29udGVudCkuZm9yRWFjaCh1bmlxdWVDb250ZW50SWQgPT4ge1xuICAgICAgY29uc3QgJG1vbnN0ZXIgPSB0aGlzLiRtb25zdGVyQ29udGVudFt1bmlxdWVDb250ZW50SWRdO1xuICAgICAgcmVzdWx0WyRtb25zdGVyLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpXSA9IHRoYXQuc2VyaWFsaXplVW5pcXVlQ29udGVudCgkbW9uc3Rlcik7XG4gICAgfSk7XG4gICAgdGhpcy5zZW5kVG9CdWlsZGVyKGNhbGxiYWNrLCBbcmVzdWx0XSk7XG4gIH1cblxuICBzZXJpYWxpemVVbmlxdWVDb250ZW50KCRtb25zdGVyQ29udGVudCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIHJlc3VsdC51bmlxdWVDb250ZW50SWQgPSAkbW9uc3RlckNvbnRlbnQuZGF0YSgndW5pcXVlQ29udGVudElkJyk7XG4gICAgcmVzdWx0Lm1hdGVyaWFscyA9IHt9O1xuICAgICRtb25zdGVyQ29udGVudC5maW5kKCdbZGF0YS1pcy1tYXRlcmlhbD1cXCcxXFwnXScpLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0IG1hdGVyaWFsID0ge307XG4gICAgICBtYXRlcmlhbC5ibG9jayA9ICQodGhpcykuZGF0YSgnbWF0ZXJpYWxCbG9jaycpO1xuICAgICAgcmVzdWx0Lm1hdGVyaWFsc1skKHRoaXMpLmRhdGEoJ21hdGVyaWFsSW5kZXgnKV0gPSBtYXRlcmlhbDtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgVmlzdWFsRnJhbWUgc2V0dGluZ3MuXG4gICAqIFVzZXMgVmlzdWFsRnJhbWVTZXR0aW5ncyB2YXJpYWJsZSBpZiBwcm92aWRlZCBvciBkZWZhdWx0IHZhbHVlcyBpbnN0ZWFkLlxuICAgKi9cbiAgcGFyYW1zKCkge1xuICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5WaXN1YWxGcmFtZVNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgJ21vbnN0ZXItY29udGVudC1zZWxlY3Rvcic6ICcubS1tb25zdGVyLWNvbnRlbnRfX2NvbnRlbnQnLFxuICAgIH07XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICB9XG5cbiAgc2VuZFRvQnVpbGRlcihmdW5jLCBhcmdzKSB7XG4gICAgRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5wYXJlbnRXaW5kb3csIGZ1bmMsIGFyZ3MpO1xuICB9XG5cbiAgbmV3QmxvY2sobWF0ZXJpYWxOYW1lLCByZWdpb25OYW1lKSB7XG4gICAgLy8gQHRvZG8gQWRkIGxvYWRlciBoZXJlIGFzIHdlIGFyZSB1c2luZyBmb3JtIHBvc3QgIVxuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gdW5pcXVlSWQoJ21hdCcpO1xuICAgIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgICB0ZW1wbGF0ZToge1xuICAgICAgICBwcm92aWRlcnNFbnRpdGllczogdGhpcy5wYXJlbnRCdWlsZGVyLnNlcmlhbGl6ZSgpLFxuICAgICAgICByZWdpb25zTWF0ZXJpYWxzOiB0aGlzLnBhcmVudEJ1aWxkZXJcbiAgICAgICAgICAuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKS5tYXRlcmlhbHNCeVJlZ2lvbnMoKSxcbiAgICAgIH0sXG4gICAgICBhY3Rpb246ICdyZW5kZXItbWF0ZXJpYWwnLFxuICAgICAgbWF0ZXJpYWxJZDogcmFuZG9tSW5kZXgsXG4gICAgICBtYXRlcmlhbFJlZ2lvbjogcmVnaW9uTmFtZSxcbiAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbE5hbWUsXG4gICAgfTtcbiAgICBpZiAobmV3RGF0YS50ZW1wbGF0ZS5yZWdpb25zTWF0ZXJpYWxzLmhhc093blByb3BlcnR5KHJlZ2lvbk5hbWUpID09PSBmYWxzZSkge1xuICAgICAgbmV3RGF0YS50ZW1wbGF0ZS5yZWdpb25zTWF0ZXJpYWxzW3JlZ2lvbk5hbWVdID0ge307XG4gICAgfVxuXG4gICAgbmV3RGF0YS50ZW1wbGF0ZS5yZWdpb25zTWF0ZXJpYWxzW3JlZ2lvbk5hbWVdW3JhbmRvbUluZGV4XSA9IHtcbiAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbE5hbWUsXG4gICAgfTtcbiAgICBjb25zdCAkZm9ybSA9ICQoJzxmb3JtIG1ldGhvZD1cIlBPU1RcIj48L2Zvcm0+Jyk7XG4gICAgY29uc3QgJGlucHV0ID0gJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX19qc29uXCI+Jyk7XG4gICAgY29uc3QgJGNzcmYgPSAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiPicpO1xuXG4gICAgJGNzcmZcbiAgICAgIC5hdHRyKCduYW1lJywgJCgnbWV0YVtuYW1lPWNzcmYtcGFyYW1dJykuYXR0cignY29udGVudCcpKVxuICAgICAgLnZhbCgkKCdtZXRhW25hbWU9Y3NyZi10b2tlbl0nKS5hdHRyKCdjb250ZW50JykpXG4gICAgICAuYXBwZW5kVG8oJGZvcm0pO1xuXG4gICAgJGlucHV0XG4gICAgICAudmFsKEpTT04uc3RyaW5naWZ5KG5ld0RhdGEpKVxuICAgICAgLmFwcGVuZFRvKCRmb3JtKTtcblxuICAgICRmb3JtWzBdLnN1Ym1pdCgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vICQuYWpheCh7XG4gICAgLy8gICB1cmw6IHdpbmRvdy5sb2NhdGlvbixcbiAgICAvLyAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIC8vICAgY2FjaGU6IGZhbHNlLFxuICAgIC8vICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAvLyAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgLy8gICBkYXRhOiBKU09OLnN0cmluZ2lmeShuZXdEYXRhKSxcbiAgICAvLyB9KS5kb25lKGZ1bmN0aW9uIG9rKGRhdGEpIHtcbiAgICAvLyAgIGNvbnN0ICRlbGVtZW50ID0gJChkYXRhKTtcbiAgICAvLyAgIHRoYXQuJG1vbnN0ZXJDb250ZW50W3RoYXQuY3VycmVudE1vbnN0ZXJDb250ZW50XS5hcHBlbmQoJGVsZW1lbnQpO1xuICAgIC8vICAgdGhpcy5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgLy8gICAvKiBnbG9iYWwgc21vb3RoU2Nyb2xsOmZhbHNlICovXG4gICAgLy8gICBzbW9vdGhTY3JvbGwuYW5pbWF0ZVNjcm9sbCgkZWxlbWVudFswXS5vZmZzZXRUb3ApO1xuICAgIC8vIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbEZyYW1lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZS5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==