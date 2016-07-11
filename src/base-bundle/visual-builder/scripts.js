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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWMzY2NiZmFhNWZhZTZjNDQ0MWIiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvRnJvbnRlbmRNb25zdGVyLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9FZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZUNvbXBvbmVudHMvTWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL1BhZ2VTdHJ1Y3R1cmVDb21wb25lbnRzL1JlZ2lvbi5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL1dZU0lXWUcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0N1c3RvbWl6YXRpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdW5pcWlkLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0hhc2hBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVB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QUFaO0FBQ0g7Ozs7OzttQkF1T1UsVzs7Ozs7Ozs7QUMxUWYsMEMiLCJmaWxlIjoidmlzdWFsLWJ1aWxkZXIvc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYWMzY2NiZmFhNWZhZTZjNDQ0MWJcbiAqKi8iLCJpbXBvcnQgJy4vYnVuZGxlLmNzcyc7XG5cbmltcG9ydCBGcm9udGVuZE1vbnN0ZXIgZnJvbSAnLi9Gcm9udGVuZE1vbnN0ZXInO1xuXG53aW5kb3cuRnJvbnRlbmRNb25zdGVyID0gbmV3IEZyb250ZW5kTW9uc3RlcigpO1xuLy9cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5qc1xuICoqLyIsImltcG9ydCBGcmFtZUFwaSBmcm9tICcuLy4uL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaSc7XG5cbmNsYXNzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIgPSB2aXN1YWxCdWlsZGVyO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXJnZXQgPSAkKHRoaXMudmlzdWFsQnVpbGRlci5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSlbMF0uY29udGVudFdpbmRvdztcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIC8vIGRlYWN0aXZhdGUgY3VycmVudCBzZWxlY3RlZCBlbnZpcm9ubWVudFxuICAgIGlmICh0aGlzLm5hbWUgPT09IHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpIHtcbiAgICAgIHRoaXMudmlzdWFsQnVpbGRlci5lbnZpcm9ubWVudHMuZ2V0KHRoaXMudmlzdWFsQnVpbGRlci5jdXJyZW50RW52aXJvbm1lbnQpLmRlYWN0aXZhdGUoKTtcbiAgICB9XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMudmlzdWFsQnVpbGRlci5jbGVhclN0YWNrYWJsZSgpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2UoZnVuYywgYXJncykge1xuICAgIHJldHVybiBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLnRhcmdldCwgZnVuYywgYXJncyk7XG4gIH1cbiAgXG4gIHBhZ2VDaGFuZ2VkKCkge1xuICAgIFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VFbnZpcm9ubWVudDtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvQmFzZUVudmlyb25tZW50LmpzXG4gKiovIiwiY2xhc3MgRnJhbWVBcGkge1xuICBzdGF0aWMgZ2V0IGlzSWUoKSB7XG4gICAgLyogZ2xvYmFsIGlzICovXG4gICAgaWYgKHR5cGVvZihpcykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gaXMuaWUoKTsvLyB8fCBpcy5lZGdlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgYmluZE1lc3NhZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgICBsZXQgbWVzc2FnZSA9IG51bGw7XG4gICAgICBpZiAoRnJhbWVBcGkuaXNJZSkge1xuICAgICAgICBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lc3NhZ2UgPSBldmVudC5kYXRhO1xuICAgICAgfVxuXG4gICAgICBpZiAobGlzdGVuZXJbbWVzc2FnZS5mdW5jXSkge1xuICAgICAgICBsaXN0ZW5lclttZXNzYWdlLmZ1bmNdLmFwcGx5KGxpc3RlbmVyLCBtZXNzYWdlLmFyZ3MpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJRThcbiAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25tZXNzYWdlJywgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzZW5kTWVzc2FnZSh0YXJnZXQsIGZ1bmMsIGFyZ3MpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgJ2Z1bmMnOiBmdW5jLFxuICAgICAgJ2FyZ3MnOiBhcmdzLFxuICAgIH07XG4gICAgY29uc3QgbWVzc2FnZSA9IEZyYW1lQXBpLmlzSWUgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IGRhdGE7XG5cbiAgICB0YXJnZXQucG9zdE1lc3NhZ2UobWVzc2FnZSwgJyonKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcmFtZUFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanNcbiAqKi8iLCJpbXBvcnQgVmlzdWFsQnVpbGRlciBmcm9tICcuL2NvbXBvbmVudHMvYnVpbGRlci9WaXN1YWxCdWlsZGVyJztcbmltcG9ydCBWaXN1YWxGcmFtZSBmcm9tICcuL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL1Zpc3VhbEZyYW1lJztcbmltcG9ydCBIYXNoQXBpIGZyb20gJy4vY29tcG9uZW50cy92aXN1YWwtZnJhbWUvSGFzaEFwaSc7XG5cbmNsYXNzIEZyb250ZW5kTW9uc3RlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFyYW1zKCk7XG4gICAgdGhpcy52aXN1YWxCdWxkZXIgPSBudWxsO1xuICAgIHRoaXMuaGFzaEFwaSA9IG5ldyBIYXNoQXBpKCk7XG4gICAgaWYgKHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdyAmJiB3aW5kb3cucGFyZW50LkZyb250ZW5kTW9uc3Rlcikge1xuICAgICAgaWYgKHdpbmRvdy5wYXJlbnQuRnJvbnRlbmRNb25zdGVyLmhhc0J1aWxkZXIpIHtcbiAgICAgICAgdGhpcy5WaXN1YWxGcmFtZSA9IG5ldyBWaXN1YWxGcmFtZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiogZ2xvYmFsczogc21vb3RoU2Nyb2xsKi9cbiAgICBpZiAodHlwZW9mKHNtb290aFNjcm9sbCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzbW9vdGhTY3JvbGwuaW5pdCgpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgVmlzdWFsQnVpbGRlciBjbGFzcyBpbnN0YW5jZVxuICAgKiBAcmV0dXJucyBWaXN1YWxCdWlsZGVyXG4gICAqL1xuICBnZXQgYnVpbGRlcigpIHtcbiAgICBpZiAodGhpcy52aXN1YWxCdWxkZXIgPT09IG51bGwpIHtcbiAgICAgIHRoaXMudmlzdWFsQnVsZGVyID0gbmV3IFZpc3VhbEJ1aWxkZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmlzdWFsQnVsZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgRnJvbnRlbmRNb25zdGVyIGluc3RhbmNlIGhhcyBWaXN1YWwgQnVpbGRlciBvbiBwYWdlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGhhc0J1aWxkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRlci4kYnVpbGRlci5sZW5ndGggPT09IDE7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBGcm9udGVuZE1vbnN0ZXIgc2V0dGluZ3MuXG4gICAqIFVzZXMgRnJvbnRlbmRNb25zdGVyU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuRnJvbnRlbmRNb25zdGVyU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB1c2VyU2V0dGluZ3MpIHtcbiAgICAgIGlmICh1c2VyU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcm9udGVuZE1vbnN0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL0Zyb250ZW5kTW9uc3Rlci5qc1xuICoqLyIsImltcG9ydCBhbGxFZGl0YWJsZXMgZnJvbSAnLi9lZGl0YWJsZXMvYWxsJztcblxuY2xhc3MgRWRpdGFibGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVkaXRhYmxlc0J5VHlwZSA9IHt9O1xuICAgIC8vIGluaXRpYWxpemUgYmFzZSBidWlsZC1pbiBlZGl0YWJsZXNcbiAgICBhbGxFZGl0YWJsZXMoKTtcbiAgICB0aGlzLmVkaXRhYmxlc0J5VHlwZSA9IHdpbmRvdy5NT05TVEVSX0VESVRBQkxFUztcbiAgfVxuXG4gIHNlcmlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3QgZWRpdGFibGUgPSAkbm9kZS5kYXRhKCdlZGl0YWJsZVBhcmFtcycpO1xuICAgIGlmICh0eXBlb2YoZWRpdGFibGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgdHlwZSA9IGVkaXRhYmxlLmhhc093blByb3BlcnR5KCd0eXBlJykgPyBlZGl0YWJsZS50eXBlIDogJ3N0cmluZyc7XG4gICAgaWYgKHRoaXMuZWRpdGFibGVzQnlUeXBlLmhhc093blByb3BlcnR5KHR5cGUpID09PSBmYWxzZSkge1xuICAgICAgdHlwZSA9ICdzdHJpbmcnO1xuICAgIH1cblxuICAgIGNvbnN0IGV4cG9ydFZhcmlhYmxlID0gZWRpdGFibGUuaGFzT3duUHJvcGVydHkoJ3RhcmdldCcpID8gZWRpdGFibGUudGFyZ2V0IDogJ2RhdGEnO1xuXG4gICAgcmV0dXJuIHRoaXMuZWRpdGFibGVzQnlUeXBlW3R5cGVdKCRub2RlLCBleHBvcnRWYXJpYWJsZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdGFibGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9FZGl0YWJsZS5qc1xuICoqLyIsImNsYXNzIE1hdGVyaWFsIHtcbiAgY29uc3RydWN0b3IoJG5vZGUpIHtcbiAgICB0aGlzLiRub2RlID0gJG5vZGU7XG4gICAgdGhpcy5tYXRlcmlhbFBhdGggPSB0aGlzLiRub2RlLmRhdGEoJ21hdGVyaWFsUGF0aCcpO1xuXG4gICAgdGhpcy5tYXRlcmlhbE5hbWUgPSB0aGlzLm1hdGVyaWFsUGF0aC5yZXBsYWNlKC8uKlxcLiguKikkLywgJyQxJyk7XG4gICAgLy8gQHRvZG8gQ0hBTkdFIFRISVNcbiAgICB0aGlzLmtleSA9IHRoaXMuJG5vZGUuZGF0YSgnbWF0ZXJpYWxJbmRleCcpO1xuICB9XG5cbiAgcHJvY2Vzc01hdGVyaWFsKCkge1xuICAgIHJldHVybiAkKGA8bGkgY2xhc3M9XCJwYWdlLXN0cnVjdHVyZV9fbWF0ZXJpYWxcIj4ke3RoaXMubWF0ZXJpYWxOYW1lfTwvbGk+YCk7XG4gIH1cblxuICBzdGF0aWMgc2VyaWFsaXplTm9kZSgkbm9kZSkge1xuICAgIHJldHVybiB3aW5kb3cuRnJvbnRlbmRNb25zdGVyLmJ1aWxkZXIuZWRpdGFibGUuc2VyaWFsaXplRWRpdGFibGUoJG5vZGUpO1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIC8vIG1hdGVyaWFsIGhhcyBkYXRhLWVkaXRhYmxlLWtleXMgd2l0aCBzY2hlbWFcbiAgICBjb25zdCBlZGl0YWJsZUtleXMgPSB0aGlzLiRub2RlLmRhdGEoJ2VkaXRhYmxlS2V5cycpO1xuICAgIGNvbnN0IHJlY3Vyc2l2ZUl0ZXJhdG9yID0gZnVuY3Rpb24gaXRlcihhcnIsIHBhdGgsICRzY29wZSkge1xuICAgICAgY29uc3QgZmluYWwgPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKGFycikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBsZXQgZnVsbEtleVBhdGggPSBrZXk7XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgZnVsbEtleVBhdGggPSBgJHtwYXRofS4ke2tleX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YoYXJyW2tleV0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNvbnN0ICRpdGVtcyA9ICRzY29wZS5maW5kKGBbZGF0YS1yZWN1cnNpdmUtaXRlbT1cIiR7ZnVsbEtleVBhdGh9XCJdYCk7XG4gICAgICAgICAgZmluYWxba2V5XSA9IHt9O1xuICAgICAgICAgICRpdGVtcy5lYWNoKGZ1bmN0aW9uIGl0ZW1zUmVjKCkge1xuICAgICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgZmluYWxba2V5XVskdGhpcy5kYXRhKCdyZWN1cnNpdmVJdGVtS2V5JyldID0gcmVjdXJzaXZlSXRlcmF0b3IoXG4gICAgICAgICAgICAgIGFycltrZXldLFxuICAgICAgICAgICAgICAnaXRlbScsXG4gICAgICAgICAgICAgICR0aGlzXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0ICRub2RlID0gJHNjb3BlLmZpbmQoYFtkYXRhLWVkaXRhYmxlLWtleT1cIiR7ZnVsbEtleVBhdGh9XCJdYCk7XG4gICAgICAgICAgZmluYWxba2V5XSA9IE1hdGVyaWFsLnNlcmlhbGl6ZU5vZGUoJG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmaW5hbDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJlY3Vyc2l2ZUl0ZXJhdG9yKGVkaXRhYmxlS2V5cywgJycsIHRoaXMuJG5vZGUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFsO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvUGFnZVN0cnVjdHVyZUNvbXBvbmVudHMvTWF0ZXJpYWwuanNcbiAqKi8iLCJpbXBvcnQgTWF0ZXJpYWwgZnJvbSAnLi9NYXRlcmlhbCc7XG5cbmNsYXNzIFJlZ2lvbiB7XG4gIGNvbnN0cnVjdG9yKCRub2RlKSB7XG4gICAgdGhpcy5tYXRlcmlhbHMgPSB7fTtcbiAgICB0aGlzLiRub2RlID0gJG5vZGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9ICRub2RlLmRhdGEoJ2NvbnRlbnREZXNjcmlwdGlvbicpO1xuICB9XG5cbiAgcHJvY2Vzc1JlZ2lvbigpIHtcbiAgICBjb25zdCAkcmVnaW9uTGkgPSAkKGA8bGkgY2xhc3M9XCJwYWdlLXN0cnVjdHVyZV9fcmVnaW9uXCI+JHt0aGlzLnJlZ2lvbkRlc2NyaXB0aW9ufTwvbGk+YCk7XG4gICAgdGhpcy5rZXkgPSB0aGlzLiRub2RlLmRhdGEoJ3JlZ2lvbktleScpO1xuICAgIHRoaXMuaWQgPSB0aGlzLiRub2RlLmRhdGEoJ3JlZ2lvbklkJyk7XG4gICAgY29uc3QgJHJlZ2lvblVsID0gJCgnPHVsIGNsYXNzPVwicGFnZS1zdHJ1Y3R1cmVfX3JlZ2lvbi1tYXRlcmlhbHNcIj48L3VsPicpO1xuXG4gICAgY29uc3QgJG1hdGVyaWFscyA9IHRoaXMuJG5vZGUuZmluZCgnW2RhdGEtaXMtbWF0ZXJpYWw9MV0nKTtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgICRtYXRlcmlhbHMuZWFjaChmdW5jdGlvbiBtYXRlcmlhbHNJdGVyYXRvcigpIHtcbiAgICAgIGNvbnN0ICRtYXRlcmlhbE5vZGUgPSAkKHRoaXMpO1xuICAgICAgY29uc3QgbWF0ZXJpYWxPYmplY3QgPSBuZXcgTWF0ZXJpYWwoJG1hdGVyaWFsTm9kZSk7XG4gICAgICBjb25zdCAkbGkgPSBtYXRlcmlhbE9iamVjdC5wcm9jZXNzTWF0ZXJpYWwoKTtcbiAgICAgIHRoYXQubWF0ZXJpYWxzW21hdGVyaWFsT2JqZWN0LmtleV0gPSBtYXRlcmlhbE9iamVjdDtcbiAgICAgICRyZWdpb25VbC5hcHBlbmQoJGxpKTtcbiAgICB9KTtcblxuICAgICRyZWdpb25MaS5hcHBlbmQoJHJlZ2lvblVsKTtcbiAgICByZXR1cm4gJHJlZ2lvbkxpO1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IG1hdGVyaWFscyA9IHRoaXMubWF0ZXJpYWxzO1xuICAgIE9iamVjdC5rZXlzKG1hdGVyaWFscykuZm9yRWFjaChmdW5jdGlvbiBpdGVyKG1hdGVyaWFsS2V5KSB7XG4gICAgICByZXN1bHRbbWF0ZXJpYWxLZXldID0gbWF0ZXJpYWxzW21hdGVyaWFsS2V5XS5zZXJpYWxpemUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgbWF0ZXJpYWxzRGVjbCgpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IG1hdGVyaWFsS2V5IGluIHRoaXMubWF0ZXJpYWxzKSB7XG4gICAgICBpZiAodGhpcy5tYXRlcmlhbHMuaGFzT3duUHJvcGVydHkobWF0ZXJpYWxLZXkpKSB7XG4gICAgICAgIHJlc3VsdFttYXRlcmlhbEtleV0gPSB7XG4gICAgICAgICAgJ21hdGVyaWFsJzogdGhpcy5tYXRlcmlhbHNbbWF0ZXJpYWxLZXldLm1hdGVyaWFsUGF0aCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpb247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9QYWdlU3RydWN0dXJlQ29tcG9uZW50cy9SZWdpb24uanNcbiAqKi8iLCJpbXBvcnQgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL1NpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCc7XG5pbXBvcnQgTWF0ZXJpYWxzRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvTWF0ZXJpYWxzRW52aXJvbm1lbnQnO1xuaW1wb3J0IEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9DdXN0b21pemF0aW9uRW52aXJvbm1lbnQnO1xuaW1wb3J0IEFjdGlvbkVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL0FjdGlvbkVudmlyb25tZW50JztcbmltcG9ydCBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50JztcbmltcG9ydCBGcmFtZUFwaSBmcm9tICcuLy4uL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaSc7XG5pbXBvcnQgRWRpdGFibGUgZnJvbSAnLi9FZGl0YWJsZSc7XG5cbmNsYXNzIFZpc3VhbEJ1aWxkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtcygpO1xuICAgIHRoaXMucmVzb2x1dGlvblN3aXRjaGVyKCk7XG5cbiAgICB0aGlzLmVudmlyb25tZW50cyA9IG5ldyBNYXAoW1xuICAgICAgWydzaXRlLXN0cnVjdHVyZScsIG5ldyBTaXRlU3RydWN0dXJlRW52aXJvbm1lbnQodGhpcywgJ3NpdGUtc3RydWN0dXJlJyldLFxuICAgICAgWydwYWdlLXN0cnVjdHVyZScsIG5ldyBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQodGhpcywgJ3BhZ2Utc3RydWN0dXJlJyldLFxuICAgICAgWydtYXRlcmlhbHMnLCBuZXcgTWF0ZXJpYWxzRW52aXJvbm1lbnQodGhpcywgJ21hdGVyaWFscycpXSxcbiAgICAgIFsnY3VzdG9taXphdGlvbicsIG5ldyBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQodGhpcywgJ2N1c3RvbWl6YXRpb24nKV0sXG4gICAgICBbJ2FjdGlvbicsIG5ldyBBY3Rpb25FbnZpcm9ubWVudCh0aGlzLCAnYWN0aW9uJyldLFxuICAgIF0pO1xuXG4gICAgdGhpcy5lbnZpcm9ubWVudFNlbGVjdG9yKCk7XG5cbiAgICAvLyBzZWxlY3QgZmlyc3QgZW52aXJvbm1lbnQgYnkgZGVmYXVsdFxuICAgIHRoaXMuc3dpdGNoRW52aXJvbm1lbnQoJ3NpdGUtc3RydWN0dXJlJyk7XG4gICAgJCgnLm1vbnN0ZXItZW52aXJvbm1lbnQtc2VsZWN0b3JfX2Vudmlyb25tZW50LWxpbmsnKVxuICAgICAgLmZpcnN0KClcbiAgICAgIC5hZGRDbGFzcygnbW9uc3Rlci1lbnZpcm9ubWVudC1zZWxlY3Rvcl9fZW52aXJvbm1lbnQtbGluay0tYWN0aXZlJyk7XG4gICAgRnJhbWVBcGkuYmluZE1lc3NhZ2VMaXN0ZW5lcih0aGlzKTtcblxuICAgIHRoaXMuZWRpdGFibGUgPSBuZXcgRWRpdGFibGUoKTtcblxuICAgIHRoaXMuY29udHJvbHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIFZpc3VhbEJ1aWxkZXIgc2V0dGluZ3MuXG4gICAqIFVzZXMgVmlzdWFsQnVpbGRlclNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAqL1xuICBwYXJhbXMoKSB7XG4gICAgY29uc3QgdXNlclNldHRpbmdzID0gd2luZG93LlZpc3VhbEJ1aWxkZXJTZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICdlbGVtZW50LXNlbGVjdG9yJzogJy5tb25zdGVyLXZpc3VhbC1idWlsZGVyJyxcbiAgICAgICdmcmFtZS1zZWxlY3Rvcic6ICcubW9uc3Rlci12aXN1YWwtZnJhbWUnLFxuICAgICAgJ2J1bmRsZXMnOiB7fSxcbiAgICAgICdzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJzogJ21vbnN0ZXItc3RhY2thYmxlLWNvbnRhaW5lcicsXG4gICAgICAnbmV3LWJsb2NrLXVybCc6ICcvbW9uc3Rlci92aXN1YWwtYnVpbGRlci9uZXctYmxvY2snLFxuICAgIH07XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdXNlclNldHRpbmdzKSB7XG4gICAgICBpZiAodXNlclNldHRpbmdzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy4kYnVpbGRlciA9ICQodGhpcy5zZXR0aW5nc1snZWxlbWVudC1zZWxlY3RvciddKTtcbiAgICB0aGlzLiRzdGFja2FibGUgPSAkKCcuJyArIHRoaXMuc2V0dGluZ3NbJ3N0YWNrYWJsZS1jb250YWluZXItY2xhc3MnXSk7XG4gIH1cblxuICByZXNvbHV0aW9uU3dpdGNoZXIoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgYmVtRWxlbSA9ICdyZXNvbHV0aW9uLXN3aXRjaGVyX19yZXNvbHV0aW9uLWxpbmsnO1xuICAgIGNvbnN0IGFjdGl2ZU1vZGlmaWVyID0gYCR7YmVtRWxlbX0tLWFjdGl2ZWA7XG4gICAgY29uc3QgJHJlc29sdXRpb25MaW5rcyA9ICQoYC4ke2JlbUVsZW19YCk7XG4gICAgJHJlc29sdXRpb25MaW5rcy5jbGljayhmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICRyZXNvbHV0aW9uTGlua3MucmVtb3ZlQ2xhc3MoYWN0aXZlTW9kaWZpZXIpO1xuICAgICAgJCh0aGF0LnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKS53aWR0aCgkKHRoaXMpLmRhdGEoJ3Jlc29sdXRpb25XaWR0aCcpKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoYWN0aXZlTW9kaWZpZXIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgZW52aXJvbm1lbnRTZWxlY3RvcigpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBiZW1FbGVtID0gJ21vbnN0ZXItZW52aXJvbm1lbnQtc2VsZWN0b3JfX2Vudmlyb25tZW50LWxpbmsnO1xuICAgIGNvbnN0IGFjdGl2ZU1vZGlmaWVyID0gYCR7YmVtRWxlbX0tLWFjdGl2ZWA7XG4gICAgY29uc3QgJHNlY3Rpb25MaW5rcyA9ICQoYC4ke2JlbUVsZW19YCk7XG4gICAgJHNlY3Rpb25MaW5rcy5jbGljayhmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgIGNvbnN0IGVudmlyb25tZW50TmFtZSA9ICQodGhpcykuZGF0YSgnZW52aXJvbm1lbnROYW1lJyk7XG4gICAgICBpZiAodGhhdC5jdXJyZW50RW52aXJvbm1lbnQgPT09IGVudmlyb25tZW50TmFtZSkge1xuICAgICAgICAkc2VjdGlvbkxpbmtzLnJlbW92ZUNsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgICAgdGhhdC5lbnZpcm9ubWVudHMuZ2V0KGVudmlyb25tZW50TmFtZSkuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB0aGF0LmN1cnJlbnRFbnZpcm9ubWVudCA9IG51bGw7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgJHNlY3Rpb25MaW5rcy5yZW1vdmVDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICB0aGF0LnN3aXRjaEVudmlyb25tZW50KGVudmlyb25tZW50TmFtZSk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHN3aXRjaEVudmlyb25tZW50KGVudmlyb25tZW50TmFtZSkge1xuICAgIHRoaXMuZW52aXJvbm1lbnRzLmdldChlbnZpcm9ubWVudE5hbWUpLmFjdGl2YXRlKCk7XG4gICAgdGhpcy5jdXJyZW50RW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudE5hbWU7XG4gIH1cblxuICBjbGVhclN0YWNrYWJsZSgpIHtcbiAgICB0aGlzLiRzdGFja2FibGUuZW1wdHkoKTtcbiAgfVxuXG4gIGNyZWF0ZVN0YWNrYWJsZVBhbmUoKSB7XG4gICAgY29uc3QgcGFuZUNsYXNzID0gYCR7dGhpcy5zZXR0aW5nc1snc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyddfV9fcGFuZWA7XG4gICAgY29uc3QgbW9kaWZpZXIgPSB0aGlzLiRzdGFja2FibGUuZmluZCgnLicgKyBwYW5lQ2xhc3MpLmxlbmd0aCA9PT0gMCA/IGAke3BhbmVDbGFzc30tLWZpcnN0YCA6ICcnO1xuICAgIGNvbnN0ICRuZXdQYW5lID0gJChgPGRpdiBjbGFzcz1cIiR7cGFuZUNsYXNzfSAke21vZGlmaWVyfVwiPjwvZGl2PmApO1xuICAgIHRoaXMuJHN0YWNrYWJsZS5hcHBlbmQoJG5ld1BhbmUpO1xuICAgIHJldHVybiAkbmV3UGFuZTtcbiAgfVxuXG4gIG1hdGVyaWFsQnlOYW1lKG5hbWUpIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5tYXRlcmlhbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLm1hdGVyaWFsc1tuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXQgZnJhbWVDb250ZW50V2luZG93KCkge1xuICAgIHJldHVybiAkKHRoaXMuc2V0dGluZ3NbJ2ZyYW1lLXNlbGVjdG9yJ10pWzBdLmNvbnRlbnRXaW5kb3c7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgLy8gRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5mcmFtZUNvbnRlbnRXaW5kb3csICdzZXJpYWxpemVDb250ZW50JywgWydsb2cnXSk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5lbnZpcm9ubWVudHMuZ2V0KCdwYWdlLXN0cnVjdHVyZScpLnNlcmlhbGl6ZVBhZ2UoKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgLy8gd2UgaGF2ZSByZXN1bHQgd2hpY2ggaXMgY29udGVudCBpbiBmb3JtYXQ6XG4gICAgLy8gcmVnaW9uXG4gICAgLy8gLS0tIG1hdGVyaWFsIGlkXG4gICAgLy8gLS0tLS0tLSBrZXlzID0+IHZhbHVlc1xuICAgIC8vXG4gICAgLy8gb3VyIFByb3ZpZGVycyBzaG91bGQgZ2V0IG9ubHkgdGhvc2Uga2V5cyB0aGF0IHRoZXkgcHJvdmlkZVxuICAgIC8vIHByb3ZpZGVkIGtleXMgYXJlIHN0b3JlZCBpbiBmcmFtZUNvbnRlbnRXaW5kb3cuTU9OU1RFUl9FRElUX01PREVfREFUQS50ZW1wbGF0ZS5wcm92aWRlZEtleXNcbiAgICBjb25zdCByZXN1bHRCeVByb3ZpZGVycyA9IHt9O1xuICAgIGNvbnN0IHByb3ZpZGVkS2V5cyA9IHRoaXMuZnJhbWVDb250ZW50V2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEudGVtcGxhdGUucHJvdmlkZWRLZXlzO1xuXG4gICAgZm9yIChjb25zdCBwcm92aWRlckluZGV4IGluIHByb3ZpZGVkS2V5cykge1xuICAgICAgaWYgKHByb3ZpZGVkS2V5cy5oYXNPd25Qcm9wZXJ0eShwcm92aWRlckluZGV4KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHRCeVByb3ZpZGVyc1twcm92aWRlckluZGV4XSA9IHt9O1xuICAgICAgY29uc3QgcmVnaW9ucyA9IHByb3ZpZGVkS2V5c1twcm92aWRlckluZGV4XTtcbiAgICAgIGZvciAoY29uc3QgcmVnaW9uS2V5IGluIHJlZ2lvbnMpIHtcbiAgICAgICAgaWYgKHJlZ2lvbnMuaGFzT3duUHJvcGVydHkocmVnaW9uS2V5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0Lmhhc093blByb3BlcnR5KHJlZ2lvbktleSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF1bcmVnaW9uS2V5XSA9IHt9O1xuICAgICAgICAvLyBnbyBkZWVwIHRvIG1hdGVyaWFsIGluZGVjZXNcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gcmVnaW9uc1tyZWdpb25LZXldO1xuICAgICAgICBmb3IgKGNvbnN0IG1hdGVyaWFsSW5kZXggaW4gbWF0ZXJpYWxzKSB7XG4gICAgICAgICAgaWYgKG1hdGVyaWFscy5oYXNPd25Qcm9wZXJ0eShtYXRlcmlhbEluZGV4KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0W3JlZ2lvbktleV0uaGFzT3duUHJvcGVydHkobWF0ZXJpYWxJbmRleCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF1bcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XSA9IHt9O1xuICAgICAgICAgIGNvbnN0IGRhdGFLZXlzID0gbWF0ZXJpYWxzW21hdGVyaWFsSW5kZXhdO1xuICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGRhdGFLZXlzKSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0W3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF0uaGFzT3duUHJvcGVydHkoa2V5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRCeVByb3ZpZGVyc1xuICAgICAgICAgICAgICBbcHJvdmlkZXJJbmRleF1cbiAgICAgICAgICAgICAgW3JlZ2lvbktleV1cbiAgICAgICAgICAgICAgW21hdGVyaWFsSW5kZXhdXG4gICAgICAgICAgICAgIFtrZXldID0gcmVzdWx0W3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF1ba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdEJ5UHJvdmlkZXJzO1xuICB9XG5cbiAgcGFnZUNoYW5nZWQoKSB7XG4gICAgZm9yIChjb25zdCBlbnZpcm9ubWVudCBvZiB0aGlzLmVudmlyb25tZW50cykge1xuICAgICAgZW52aXJvbm1lbnRbMV0ucGFnZUNoYW5nZWQoKTtcbiAgICB9XG4gIH1cblxuICBsb2cocmVzdWx0KSB7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgfVxuXG4gIGNvbnRyb2xzKCkge1xuICAgIHRoaXMuJGNvbnRyb2xzID0gdGhpcy4kYnVpbGRlci5maW5kKCcuY29udHJvbHMnKTtcbiAgICBjb25zdCBidWlsZGVyID0gdGhpcztcbiAgICB0aGlzLiRjb250cm9scy5maW5kKCcuY29udHJvbHNfX3JlZnJlc2gnKS5jbGljayhmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgYnVpbGRlci5mcmFtZUNvbnRlbnRXaW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgdGhpcy4kY29udHJvbHMuZmluZCgnLmNvbnRyb2xzX19zYXZlJykuY2xpY2soZnVuY3Rpb24gaGFuZGxlcigpIHtcblxuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBidWlsZGVyLmZyYW1lQ29udGVudFdpbmRvdy5sb2NhdGlvbixcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICBwcm92aWRlcnNFbnRpdGllczogYnVpbGRlci5zZXJpYWxpemUoKSxcbiAgICAgICAgICAgIHJlZ2lvbnNNYXRlcmlhbHM6IGJ1aWxkZXIuZW52aXJvbm1lbnRzLmdldCgncGFnZS1zdHJ1Y3R1cmUnKS5tYXRlcmlhbHNCeVJlZ2lvbnMoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFjdGlvbjogJ3NhdmUnLFxuICAgICAgICB9KSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gb2soZGF0YSwgdGV4dFN0YXR1cywganFYSFIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycihkYXRhLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaXN1YWxCdWlsZGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHd5c2l3eWcoJG5vZGUpIHtcbiAgcmV0dXJuICRub2RlLmh0bWwoKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9XWVNJV1lHLmpzXG4gKiovIiwiaW1wb3J0IFdZU0lXWUcgZnJvbSAnLi9XWVNJV1lHJztcbmltcG9ydCBpbWFnZSBmcm9tICcuL2ltYWdlJztcbmltcG9ydCBsaW5rIGZyb20gJy4vbGluayc7XG5pbXBvcnQgU3RyaW5nRWRpdGFibGUgZnJvbSAnLi9zdHJpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbGwoKSB7XG4gIGlmICh0eXBlb2Yod2luZG93Lk1PTlNURVJfRURJVEFCTEVTKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVMgPSB7fTtcbiAgfVxuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ3d5c2l3eWcnXSA9IFdZU0lXWUc7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snbGluayddID0gbGluaztcbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWydpbWFnZSddID0gaW1hZ2U7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snc3RyaW5nJ10gPSBTdHJpbmdFZGl0YWJsZTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lZGl0YWJsZXMvYWxsLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW1hZ2UoJG5vZGUpIHtcbiAgY29uc3QgJGltZyA9ICRub2RlLmZpbmQoJ2ltZycpLmZpcnN0KCk7XG4gIHJldHVybiB7XG4gICAgc3JjOiAkaW1nLmF0dHIoJ3NyYycpLFxuICAgIGFsdDogJGltZy5hdHRyKCdhbHQnKSxcbiAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9pbWFnZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpbmsoJG5vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBzcmM6ICRub2RlLmF0dHIoJ2hyZWYnKSxcbiAgICBhbmNob3I6ICRub2RlLmh0bWwoKSxcbiAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2VkaXRhYmxlcy9saW5rLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oJG5vZGUpIHtcbiAgcmV0dXJuICRub2RlLnRleHQoKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZWRpdGFibGVzL3N0cmluZy5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBBY3Rpb25FbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0FjdGlvbkVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9DdXN0b21pemF0aW9uRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgTWF0ZXJpYWxzRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2aXN1YWxCdWlsZGVyLCBuYW1lKSB7XG4gICAgc3VwZXIodmlzdWFsQnVpbGRlciwgbmFtZSk7XG4gICAgdGhpcy5pbml0TWF0ZXJpYWxzU2VsZWN0b3IoKTtcbiAgfVxuXG4gIGluaXRNYXRlcmlhbHNTZWxlY3RvcigpIHtcbiAgICB0aGlzLiRtYXRlcmlhbHNHcm91cHMgPSAkKGA8dWwgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzXCI+PC91bD5gKTtcbiAgICB0aGlzLiRtYXRlcmlhbHNMaXN0ID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGJ1bmRsZSBvZiB0aGlzLnZpc3VhbEJ1aWxkZXIuc2V0dGluZ3MuYnVuZGxlcykge1xuICAgICAgY29uc3QgaTE4bkJ1bmRsZU5hbWUgPSB0eXBlb2YocG9seWdsb3QpICE9PSAndW5kZWZpbmVkJyA/IHBvbHlnbG90LnQoYnVuZGxlLm5hbWUpIDogYnVuZGxlLm5hbWU7XG5cbiAgICAgIGxldCAkYnVuZGxlVGl0bGUgPSBgXG4gICAgICA8bGkgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19pdGVtIG1hdGVyaWFscy1ncm91cHNfX2l0ZW0tLWJ1bmRsZS1sYWJlbFwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWJ1bmRsZVwiIGRhdGEtYnVuZGxlLXBhdGg9XCJcIiR7YnVuZGxlLmZ1bGxQYXRofT5cbiAgICAgICAgICAgICR7aTE4bkJ1bmRsZU5hbWV9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICBgO1xuICAgICAgdGhpcy4kbWF0ZXJpYWxzTGlzdC5wdXNoKCRidW5kbGVUaXRsZSk7XG5cbiAgICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgYnVuZGxlLmdyb3Vwcykge1xuICAgICAgICBjb25zdCBncm91cE5hbWUgPSBncm91cC5uYW1lO1xuICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSBncm91cC5tYXRlcmlhbHM7XG4gICAgICAgIGNvbnN0IGkxOG5Hcm91cE5hbWUgPSB0eXBlb2YocG9seWdsb3QpICE9PSAndW5kZWZpbmVkJyA/IHBvbHlnbG90LnQoZ3JvdXBOYW1lKSA6IGdyb3VwTmFtZTtcbiAgICAgICAgY29uc3QgJGxpID0gJChgXG4gICAgPGxpIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19faXRlbVwiPlxuICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWdyb3VwLXBhdGg9XCIke2dyb3VwLmZ1bGxQYXRofVwiIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwXCI+XG4gICAgICAgICR7aTE4bkdyb3VwTmFtZX0gPHNwYW4gY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19jb3VudFwiPigke21hdGVyaWFscy5sZW5ndGh9KTwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICA8L2xpPmApO1xuICAgICAgICB0aGlzLiRtYXRlcmlhbHNHcm91cHMuYXBwZW5kKCRsaSk7XG4gICAgICAgIGNvbnN0ICRsaXN0ID0gJChgPHVsIGNsYXNzPVwibWF0ZXJpYWxzLWxpc3RcIiBkYXRhLWdyb3VwLXBhdGg9XCIke2dyb3VwLmZ1bGxQYXRofVwiPjwvdWw+YCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgICAgIGZvciAoY29uc3QgbWF0ZXJpYWwgb2YgbWF0ZXJpYWxzKSB7XG4gICAgICAgICAgY29uc3QgbWF0ZXJpYWxOYW1lID0gbWF0ZXJpYWwubmFtZTtcbiAgICAgICAgICBjb25zdCBpMThuTWF0ZXJpYWxOYW1lID0gdHlwZW9mKHBvbHlnbG90KSAhPT0gJ3VuZGVmaW5lZCcgPyBwb2x5Z2xvdC50KG1hdGVyaWFsTmFtZSkgOiBtYXRlcmlhbE5hbWU7XG4gICAgICAgICAgY29uc3QgJGl0ZW0gPSAkKGBcbjxsaT5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1hdGVyaWFscy1saXN0X19pdGVtXCIgZGF0YS1tYXRlcmlhbC1wYXRoPVwiJHttYXRlcmlhbC5mdWxsUGF0aH1cIj4ke2kxOG5NYXRlcmlhbE5hbWV9PC9hPlxuPC9saT5cbmApO1xuICAgICAgICAgIGl0ZW1zLnB1c2goJGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgICRsaXN0LmFwcGVuZChpdGVtcyk7XG4gICAgICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QucHVzaCgkbGlzdCk7XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcsIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gJ21hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cC0tYWN0aXZlJztcbiAgICAgICR0aGlzLnRvZ2dsZUNsYXNzKGFjdGl2ZUNsYXNzKTtcbiAgICAgIGNvbnN0IGdyb3VwUGF0aCA9ICR0aGlzLmRhdGEoJ2dyb3VwUGF0aCcpO1xuICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKGFjdGl2ZUNsYXNzKSkge1xuICAgICAgICAkKCcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJykucmVtb3ZlQ2xhc3MoYWN0aXZlQ2xhc3MpO1xuICAgICAgICBjb25zdCBtYXRlcmlhbHNMaXN0QWN0aXZlQ2xhc3MgPSAnbWF0ZXJpYWxzLWxpc3QtLWFjdGl2ZSc7XG5cbiAgICAgICAgJCgnLm1hdGVyaWFscy1saXN0JykuZWFjaChmdW5jdGlvbiBpdCgpIHtcbiAgICAgICAgICBjb25zdCAkbGlzdCA9ICQodGhpcyk7XG4gICAgICAgICAgaWYgKCRsaXN0Lmhhc0NsYXNzKG1hdGVyaWFsc0xpc3RBY3RpdmVDbGFzcykpIHtcbiAgICAgICAgICAgICRsaXN0LnJlbW92ZUNsYXNzKG1hdGVyaWFsc0xpc3RBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkbGlzdC5kYXRhKCdncm91cFBhdGgnKSA9PT0gZ3JvdXBQYXRoKSB7XG4gICAgICAgICAgICAkbGlzdC5hZGRDbGFzcyhtYXRlcmlhbHNMaXN0QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoYWN0aXZlQ2xhc3MpO1xuICAgICAgICB0aGF0LiRtYXRlcmlhbHNQYW5lLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoYXQncyBqdXN0IHNlY29uZCBjbGljayBvbiB0aGUgc2FtZSBncm91cFxuICAgICAgICB0aGF0LiRtYXRlcmlhbHNQYW5lLmhpZGUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hdGVyaWFscy1saXN0X19pdGVtJywgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCkge1xuICAgICAgdGhhdC5zZW5kTWVzc2FnZShcbiAgICAgICAgJ25ld0Jsb2NrJyxcbiAgICAgICAgW1xuICAgICAgICAgICQodGhpcykuZGF0YSgnbWF0ZXJpYWxQYXRoJyksXG4gICAgICAgICAgJ2NvbnRlbnQnXG4gICAgICAgIF1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICBzdXBlci5hY3RpdmF0ZSgpO1xuXG4gICAgdGhpcy4kZ3JvdXBzUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kZ3JvdXBzUGFuZS5hcHBlbmQodGhpcy4kbWF0ZXJpYWxzR3JvdXBzKTtcblxuICAgIHRoaXMuJG1hdGVyaWFsc1BhbmUgPSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3JlYXRlU3RhY2thYmxlUGFuZSgpO1xuICAgIHRoaXMuJG1hdGVyaWFsc1BhbmUuYXBwZW5kKHRoaXMuJG1hdGVyaWFsc0xpc3QpO1xuICAgIHRoaXMuJG1hdGVyaWFsc1BhbmUuaGlkZSgpO1xuXG4gICAgJCgnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcpLnJlbW92ZUNsYXNzKCdtYXRlcmlhbHMtZ3JvdXBzX19zd2l0Y2gtZ3JvdXAtLWFjdGl2ZScpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbHNFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9NYXRlcmlhbHNFbnZpcm9ubWVudC5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuaW1wb3J0IFJlZ2lvbiBmcm9tICcuLy4uL1BhZ2VTdHJ1Y3R1cmVDb21wb25lbnRzL1JlZ2lvbic7XG5cbmNsYXNzIFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICBzdXBlcih2aXN1YWxCdWlsZGVyLCBuYW1lKTtcbiAgICB0aGlzLmluaXRQYWdlU3RydWN0dXJlRWxlbWVudCgpO1xuICAgIHRoaXMuZWRpdE1vZGVEYXRhID0ge307XG4gIH1cblxuICBpbml0UGFnZVN0cnVjdHVyZUVsZW1lbnQoKSB7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZSA9ICQoJzx1bCBjbGFzcz1cInBhZ2Utc3RydWN0dXJlXCI+PC91bD4nKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHN1cGVyLmFjdGl2YXRlKCk7XG5cbiAgICB0aGlzLiRzdHJ1Y3R1cmVQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRzdHJ1Y3R1cmVQYW5lLmFwcGVuZCh0aGlzLiRwYWdlU3RydWN0dXJlKTtcbiAgfVxuXG4gIHBhZ2VDaGFuZ2VkKCkge1xuICAgIHN1cGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5maW5kKCdsaScpLnJlbW92ZSgpO1xuICAgIGNvbnN0IHJlZ2lvbnMgPSB0aGlzLnRhcmdldC4kKCcubS1tb25zdGVyLWNvbnRlbnRfX2NvbnRlbnQnKTtcbiAgICBjb25zdCBlbnZpcm9ubWVudCA9IHRoaXM7XG4gICAgdGhpcy5yZWdpb25zU3RydWN0dXJlID0ge307XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgcmVnaW9ucy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCAkcmVnaW9uTm9kZSA9ICQodGhpcyk7XG4gICAgICBjb25zdCByZWdpb25PYmplY3QgPSBuZXcgUmVnaW9uKCRyZWdpb25Ob2RlKTtcbiAgICAgIGNvbnN0ICRyZWdpb25MaSA9IHJlZ2lvbk9iamVjdC5wcm9jZXNzUmVnaW9uKCk7XG4gICAgICB0aGF0LnJlZ2lvbnNTdHJ1Y3R1cmVbcmVnaW9uT2JqZWN0LmtleV0gPSByZWdpb25PYmplY3Q7XG4gICAgICBlbnZpcm9ubWVudC4kcGFnZVN0cnVjdHVyZS5hcHBlbmQoJHJlZ2lvbkxpKTtcbiAgICB9KTtcbiAgICB0aGlzLmVkaXRNb2RlRGF0YSA9IHRoaXMudGFyZ2V0Lk1PTlNURVJfRURJVF9NT0RFX0RBVEE7XG4gIH1cblxuICBzZXJpYWxpemVQYWdlKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMucmVnaW9uc1N0cnVjdHVyZSkuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgY29uc3QgcmVnaW9uID0gdGhpcy5yZWdpb25zU3RydWN0dXJlW3JlZ2lvbktleV07XG4gICAgICByZXN1bHRbcmVnaW9uLmtleV0gPSByZWdpb24uc2VyaWFsaXplKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIG1hdGVyaWFsc0J5UmVnaW9ucygpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMucmVnaW9uc1N0cnVjdHVyZVtyZWdpb25LZXldO1xuICAgICAgcmVzdWx0W3JlZ2lvbi5rZXldID0gcmVnaW9uLm1hdGVyaWFsc0RlY2woKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHVuaXFpZCAocHJlZml4LCBtb3JlRW50cm9weSkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3VuaXFpZC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICByZXZpc2VkIGJ5OiBLYW5rcmVsdW5lIChodHRwOi8vd3d3LndlYmZha3RvcnkuaW5mby8pXG4gIC8vICAgICAgbm90ZSAxOiBVc2VzIGFuIGludGVybmFsIGNvdW50ZXIgKGluIGxvY3V0dXMgZ2xvYmFsKSB0byBhdm9pZCBjb2xsaXNpb25cbiAgLy8gICBleGFtcGxlIDE6IHZhciAkaWQgPSB1bmlxaWQoKVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRyZXN1bHQgPSAkaWQubGVuZ3RoID09PSAxM1xuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogdmFyICRpZCA9IHVuaXFpZCgnZm9vJylcbiAgLy8gICBleGFtcGxlIDI6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gKDEzICsgJ2ZvbycubGVuZ3RoKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMzogdmFyICRpZCA9IHVuaXFpZCgnYmFyJywgdHJ1ZSlcbiAgLy8gICBleGFtcGxlIDM6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gKDIzICsgJ2JhcicubGVuZ3RoKVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuXG4gIGlmICh0eXBlb2YgcHJlZml4ID09PSAndW5kZWZpbmVkJykge1xuICAgIHByZWZpeCA9ICcnXG4gIH1cblxuICB2YXIgcmV0SWRcbiAgdmFyIF9mb3JtYXRTZWVkID0gZnVuY3Rpb24gKHNlZWQsIHJlcVdpZHRoKSB7XG4gICAgc2VlZCA9IHBhcnNlSW50KHNlZWQsIDEwKS50b1N0cmluZygxNikgLy8gdG8gaGV4IHN0clxuICAgIGlmIChyZXFXaWR0aCA8IHNlZWQubGVuZ3RoKSB7XG4gICAgICAvLyBzbyBsb25nIHdlIHNwbGl0XG4gICAgICByZXR1cm4gc2VlZC5zbGljZShzZWVkLmxlbmd0aCAtIHJlcVdpZHRoKVxuICAgIH1cbiAgICBpZiAocmVxV2lkdGggPiBzZWVkLmxlbmd0aCkge1xuICAgICAgLy8gc28gc2hvcnQgd2UgcGFkXG4gICAgICByZXR1cm4gQXJyYXkoMSArIChyZXFXaWR0aCAtIHNlZWQubGVuZ3RoKSkuam9pbignMCcpICsgc2VlZFxuICAgIH1cbiAgICByZXR1cm4gc2VlZFxuICB9XG5cbiAgdmFyICRnbG9iYWwgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBHTE9CQUwpXG4gICRnbG9iYWwuJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzIHx8IHt9XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXNcbiAgJGxvY3V0dXMucGhwID0gJGxvY3V0dXMucGhwIHx8IHt9XG5cbiAgaWYgKCEkbG9jdXR1cy5waHAudW5pcWlkU2VlZCkge1xuICAgIC8vIGluaXQgc2VlZCB3aXRoIGJpZyByYW5kb20gaW50XG4gICAgJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAweDc1YmNkMTUpXG4gIH1cbiAgJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQrK1xuXG4gIC8vIHN0YXJ0IHdpdGggcHJlZml4LCBhZGQgY3VycmVudCBtaWxsaXNlY29uZHMgaGV4IHN0cmluZ1xuICByZXRJZCA9IHByZWZpeFxuICByZXRJZCArPSBfZm9ybWF0U2VlZChwYXJzZUludChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDAsIDEwKSwgOClcbiAgLy8gYWRkIHNlZWQgaGV4IHN0cmluZ1xuICByZXRJZCArPSBfZm9ybWF0U2VlZCgkbG9jdXR1cy5waHAudW5pcWlkU2VlZCwgNSlcbiAgaWYgKG1vcmVFbnRyb3B5KSB7XG4gICAgLy8gZm9yIG1vcmUgZW50cm9weSB3ZSBhZGQgYSBmbG9hdCBsb3dlciB0byAxMFxuICAgIHJldElkICs9IChNYXRoLnJhbmRvbSgpICogMTApLnRvRml4ZWQoOCkudG9TdHJpbmcoKVxuICB9XG5cbiAgcmV0dXJuIHJldElkXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3VuaXFpZC5qc1xuICoqLyIsImNsYXNzIEhhc2hBcGkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZ1bmN0aW9uQ2FsbHMgPSB7fTtcblxuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaC5tYXRjaCgvI2hhc2hBcGk6KC4qPyk6XFwvaGFzaEFwaS8pO1xuICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgY29uc3QgZnVuY3Rpb25DYWxscyA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoZXNbMV0pKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZnVuY3Rpb25DYWxscykge1xuICAgICAgICAgIGlmIChpdGVtLmZ1bmMpIHtcbiAgICAgICAgICAgIHRoaXMuZnVuY3Rpb25DYWxsc1tpdGVtLmZ1bmNdID0gaXRlbS5hcmdzIHx8IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNob3VsZENhbGwoZnVuYykge1xuICAgIHJldHVybiB0aGlzLmZ1bmN0aW9uQ2FsbHNbZnVuY10gfHwgZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGFzaEFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvSGFzaEFwaS5qc1xuICoqLyIsImltcG9ydCBGcmFtZUFwaSBmcm9tICcuL0ZyYW1lQXBpJztcbmltcG9ydCB1bmlxdWVJZCBmcm9tICcuLy4uL3VuaXFpZCc7XG5cbmNsYXNzIFZpc3VhbEZyYW1lXG57XG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgdGhpcy5wYXJhbXMoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpXG4gICAge1xuICAgICAgICBGcmFtZUFwaS5iaW5kTWVzc2FnZUxpc3RlbmVyKHRoaXMpO1xuICAgICAgICB0aGlzLnBhcmVudFdpbmRvdyA9IHdpbmRvdy5wYXJlbnQ7XG4gICAgICAgIC8qKiBAdmFyIEZyb250ZW5kTW9uc3RlciAqL1xuICAgICAgICB0aGlzLnBhcmVudE1vbnN0ZXIgPSB0aGlzLnBhcmVudFdpbmRvdy5Gcm9udGVuZE1vbnN0ZXI7XG4gICAgICAgIHRoaXMucGFyZW50QnVpbGRlciA9IHRoaXMucGFyZW50TW9uc3Rlci5idWlsZGVyO1xuICAgICAgICB0aGlzLmN1cnJlbnRNb25zdGVyQ29udGVudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1ha2VJdE1vdmUoKTtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhhdC51cGRhdGVIYW5kbGVycygpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgZ2V0ICRtb25zdGVyQ29udGVudCgpXG4gICAge1xuICAgICAgICBpZiAodGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy4kbW9uc3RlckNvbnRlbnRDYWNoZTtcbiAgICB9XG5cbiAgICByZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpXG4gICAge1xuICAgICAgICB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlID0ge307XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICAkKHRoaXMuc2V0dGluZ3NbJ21vbnN0ZXItY29udGVudC1zZWxlY3RvciddKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgICAgICBpZiAoIXRoYXQuY3VycmVudE1vbnN0ZXJDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhhdC5jdXJyZW50TW9uc3RlckNvbnRlbnQgPSAkKHRoaXMpLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhhdC4kbW9uc3RlckNvbnRlbnRDYWNoZVskKHRoaXMpLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpXSA9ICQodGhpcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldE5ld01hdGVyaWFsSW5kZXgoKVxuICAgIHtcbiAgICAgICAgaWYgKCF0aGlzLmxhc3RNYXRlcmlhbEluZGV4KSB7XG4gICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgICQoJ1tkYXRhLWlzLW1hdGVyaWFsXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuZGF0YSgnbWF0ZXJpYWwtaW5kZXgnKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmxhc3RNYXRlcmlhbEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdE1hdGVyaWFsSW5kZXgrKztcbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdE1hdGVyaWFsSW5kZXg7XG4gICAgfVxuXG4gICAgdXBkYXRlSGFuZGxlcnMoKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwgJiYgdGhpcy4kaGFuZGxlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuJGhhbmRsZXJzLmNzcyhcbiAgICAgICAgICAgICAgICAndG9wJyxcbiAgICAgICAgICAgICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLnBvc2l0aW9uKCkudG9wICsgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5oZWlnaHQoKSAtIHRoaXMuJGhhbmRsZXJzLmhlaWdodCgpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5hZGRDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ha2VJdE1vdmUoKVxuICAgIHtcbiAgICAgICAgdGhpcy4kaGFuZGxlcnMgPSAkKGBcbjxkaXYgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzXCI+XG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX2NvbmZpZ3VyZVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNvZ1wiPjwvaT5cbiAgICA8L2E+XG4gICAgPHNwYW4gY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19ibG9jay1uYW1lXCI+QmxvY2sgbmFtZSBoZXJlPC9zcGFuPlxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLXVwXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtdXBcIj48L2k+XG4gICAgPC9hPlxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLWRvd25cIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3duXCI+PC9pPlxuICAgIDwvYT5cbiAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fY2xvbmVcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9uZVwiPjwvaT5cbiAgICA8L2E+XG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX3JlbW92ZVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPlxuICAgIDwvYT5cbjwvZGl2PmApO1xuICAgICAgICAkKCdib2R5JykuYXBwZW5kKHRoaXMuJGhhbmRsZXJzKTtcbiAgICAgICAgdGhpcy4kaGFuZGxlcnMuaGlkZSgpO1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgJCh0aGlzLnNldHRpbmdzWydtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InXSkub24oe1xuICAgICAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24gaG92ZXJJbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ20tbW9uc3Rlci1jb250ZW50X19tYXRlcmlhbC0taGlnaGxpZ2h0ZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZWxlYXZlOiBmdW5jdGlvbiBob3Zlck91dCgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ20tbW9uc3Rlci1jb250ZW50X19tYXRlcmlhbC0taGlnaGxpZ2h0ZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdE1hdGVyaWFsKCR0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICAgICB0aGF0LiRoYW5kbGVycy5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtdXAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICAgICAgICAgICAgdmFyICRwcmV2ID0gdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5wcmV2KCdbZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICAgICAgICAgICAgICBpZiAoJHByZXYubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5pbnNlcnRCZWZvcmUoJHByZXYpO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KS5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtZG93bicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgJG5leHQgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLm5leHQoJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICAgICAgICAgICAgIGlmICgkbmV4dC5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLmluc2VydEFmdGVyKCRuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC51cGRhdGVIYW5kbGVycygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSkub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19jbG9uZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGNsb25lZE1hdGVyaWFsID0gdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5jbG9uZSgpO1xuICAgICAgICAgICAgICAgICRjbG9uZWRNYXRlcmlhbC5kYXRhKCdtYXRlcmlhbC1pbmRleCcsIHRoYXQuZ2V0TmV3TWF0ZXJpYWxJbmRleCgpKS5pbnNlcnRBZnRlcih0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdE1hdGVyaWFsKCRjbG9uZWRNYXRlcmlhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pLm9uKCdjbGljaycsICcubW9uc3Rlci1ibG9jay1oYW5kbGVyc19fcmVtb3ZlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgICAgICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgbWF0ZXJpYWw/JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGhhbmRsZXJzLmhpZGUoKTsgLy8gaXQgZG9lcyBub3Qgd29yay4gd2h5PyBOZWVkIHRvIGZpeCFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbGVjdE1hdGVyaWFsKCRtYXRlcmlhbClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsID09PSAkbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCkge1xuICAgICAgICAgICAgdGhpcy4kc2VsZWN0ZWRNYXRlcmlhbC5yZW1vdmVDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsID0gJG1hdGVyaWFsO1xuICAgICAgICB0aGlzLnVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgIHRoaXMuJGhhbmRsZXJzLnNob3coKTtcbiAgICB9XG5cbiAgICBzZXJpYWxpemVDb250ZW50KGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBmb3IgKGNvbnN0IHVuaXF1ZUNvbnRlbnRJZCBpbiB0aGlzLiRtb25zdGVyQ29udGVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuJG1vbnN0ZXJDb250ZW50Lmhhc093blByb3BlcnR5KHVuaXF1ZUNvbnRlbnRJZCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkbW9uc3RlciA9IHRoaXMuJG1vbnN0ZXJDb250ZW50W3VuaXF1ZUNvbnRlbnRJZF07XG4gICAgICAgICAgICAgICAgcmVzdWx0WyRtb25zdGVyLmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpXSA9IHRoYXQuc2VyaWFsaXplVW5pcXVlQ29udGVudCgkbW9uc3Rlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZW5kVG9CdWlsZGVyKGNhbGxiYWNrLCBbcmVzdWx0XSk7XG4gICAgfVxuXG4gICAgc2VyaWFsaXplVW5pcXVlQ29udGVudCgkbW9uc3RlckNvbnRlbnQpXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgcmVzdWx0LnVuaXF1ZUNvbnRlbnRJZCA9ICRtb25zdGVyQ29udGVudC5kYXRhKCd1bmlxdWVDb250ZW50SWQnKTtcbiAgICAgICAgcmVzdWx0Lm1hdGVyaWFscyA9IHt9O1xuICAgICAgICAkbW9uc3RlckNvbnRlbnQuZmluZCgnW2RhdGEtaXMtbWF0ZXJpYWw9XFwnMVxcJ10nKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHt9O1xuICAgICAgICAgICAgbWF0ZXJpYWwuYmxvY2sgPSAkKHRoaXMpLmRhdGEoJ21hdGVyaWFsQmxvY2snKTtcbiAgICAgICAgICAgIHJlc3VsdC5tYXRlcmlhbHNbJCh0aGlzKS5kYXRhKCdtYXRlcmlhbEluZGV4JyldID0gbWF0ZXJpYWw7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgVmlzdWFsRnJhbWUgc2V0dGluZ3MuXG4gICAgICogVXNlcyBWaXN1YWxGcmFtZVNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAgICovXG4gICAgcGFyYW1zKClcbiAgICB7XG4gICAgICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5WaXN1YWxGcmFtZVNldHRpbmdzIHx8IHt9O1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICAgICAgICdtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InOiAnLm0tbW9uc3Rlci1jb250ZW50X19jb250ZW50J1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB1c2VyU2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGlmICh1c2VyU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgfVxuXG4gICAgc2VuZFRvQnVpbGRlcihmdW5jLCBhcmdzKVxuICAgIHtcbiAgICAgICAgRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5wYXJlbnRXaW5kb3csIGZ1bmMsIGFyZ3MpO1xuICAgIH1cblxuICAgIG5ld0Jsb2NrKG1hdGVyaWFsTmFtZSwgcmVnaW9uTmFtZSlcbiAgICB7XG4gICAgICAgIC8vIEB0b2RvIEFkZCBsb2FkZXIgaGVyZSBhcyB3ZSBhcmUgdXNpbmcgZm9ybSBwb3N0ICFcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gdW5pcXVlSWQoJ21hdCcpO1xuICAgICAgICBjb25zdCBuZXdEYXRhID0ge1xuICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICBwcm92aWRlcnNFbnRpdGllczogdGhpcy5wYXJlbnRCdWlsZGVyLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgcmVnaW9uc01hdGVyaWFsczogdGhpcy5wYXJlbnRCdWlsZGVyLmVudmlyb25tZW50cy5nZXQoJ3BhZ2Utc3RydWN0dXJlJykubWF0ZXJpYWxzQnlSZWdpb25zKCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhY3Rpb246ICdyZW5kZXItbWF0ZXJpYWwnLFxuICAgICAgICAgIG1hdGVyaWFsSWQ6IHJhbmRvbUluZGV4LFxuICAgICAgICAgIG1hdGVyaWFsUmVnaW9uOiByZWdpb25OYW1lLFxuICAgICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbE5hbWVcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG5ld0RhdGEudGVtcGxhdGUucmVnaW9uc01hdGVyaWFscy5oYXNPd25Qcm9wZXJ0eShyZWdpb25OYW1lKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBuZXdEYXRhLnRlbXBsYXRlLnJlZ2lvbnNNYXRlcmlhbHNbcmVnaW9uTmFtZV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0RhdGEudGVtcGxhdGUucmVnaW9uc01hdGVyaWFsc1tyZWdpb25OYW1lXVtyYW5kb21JbmRleF0gPSB7bWF0ZXJpYWw6IG1hdGVyaWFsTmFtZX07XG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnPGZvcm0gbWV0aG9kPVwiUE9TVFwiPjwvZm9ybT4nKTtcbiAgICAgICAgY29uc3QgJGlucHV0ID0gJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX19qc29uXCI+Jyk7XG4gICAgICAgIGNvbnN0ICRjc3JmID0gJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIj4nKTtcblxuICAgICAgICAkY3NyZlxuICAgICAgICAgIC5hdHRyKCduYW1lJywgJCgnbWV0YVtuYW1lPWNzcmYtcGFyYW1dJykuYXR0cignY29udGVudCcpKVxuICAgICAgICAgIC52YWwoJCgnbWV0YVtuYW1lPWNzcmYtdG9rZW5dJykuYXR0cignY29udGVudCcpKVxuICAgICAgICAgIC5hcHBlbmRUbygkZm9ybSk7XG5cbiAgICAgICAgJGlucHV0XG4gICAgICAgICAgLnZhbChKU09OLnN0cmluZ2lmeShuZXdEYXRhKSlcbiAgICAgICAgICAuYXBwZW5kVG8oJGZvcm0pO1xuXG4gICAgICAgICRmb3JtWzBdLnN1Ym1pdCgpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gJC5hamF4KHtcbiAgICAgICAgLy8gICAgIHVybDogd2luZG93LmxvY2F0aW9uLFxuICAgICAgICAvLyAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIC8vICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgIC8vICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgICAvLyAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgLy8gICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG5ld0RhdGEpLFxuICAgICAgICAvLyB9KS5kb25lKGZ1bmN0aW9uIG9rKGRhdGEpIHtcbiAgICAgICAgLy8gICAgIGNvbnN0ICRlbGVtZW50ID0gJChkYXRhKTtcbiAgICAgICAgLy8gICAgIHRoYXQuJG1vbnN0ZXJDb250ZW50W3RoYXQuY3VycmVudE1vbnN0ZXJDb250ZW50XS5hcHBlbmQoJGVsZW1lbnQpO1xuICAgICAgICAvLyAgICAgdGhpcy5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgICAgIC8vICAgICAvKiBnbG9iYWwgc21vb3RoU2Nyb2xsOmZhbHNlICovXG4gICAgICAgIC8vICAgICBzbW9vdGhTY3JvbGwuYW5pbWF0ZVNjcm9sbCgkZWxlbWVudFswXS5vZmZzZXRUb3ApO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbEZyYW1lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9WaXN1YWxGcmFtZS5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==