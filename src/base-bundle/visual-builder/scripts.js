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
	
	__webpack_require__(28);
	
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
/* 2 */,
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
	
	var _VisualBuilder = __webpack_require__(12);
	
	var _VisualBuilder2 = _interopRequireDefault(_VisualBuilder);
	
	var _VisualFrame = __webpack_require__(25);
	
	var _VisualFrame2 = _interopRequireDefault(_VisualFrame);
	
	var _HashApi = __webpack_require__(24);
	
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
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _SiteStructureEnvironment = __webpack_require__(22);
	
	var _SiteStructureEnvironment2 = _interopRequireDefault(_SiteStructureEnvironment);
	
	var _MaterialsEnvironment = __webpack_require__(20);
	
	var _MaterialsEnvironment2 = _interopRequireDefault(_MaterialsEnvironment);
	
	var _CustomizationEnvironment = __webpack_require__(19);
	
	var _CustomizationEnvironment2 = _interopRequireDefault(_CustomizationEnvironment);
	
	var _ActionEnvironment = __webpack_require__(18);
	
	var _ActionEnvironment2 = _interopRequireDefault(_ActionEnvironment);
	
	var _PageStructureEnvironment = __webpack_require__(21);
	
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
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
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
/* 20 */
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
	      var _this2 = this;
	
	      _get(Object.getPrototypeOf(PageStructureEnvironment.prototype), 'pageChanged', this).call(this);
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
	        var result = PageStructureEnvironment.processLayout($(this));
	        layoutItem.children.push(result.item);
	        result.templateRegions.forEach(function (region) {
	          templateItem.children.push(region);
	        });
	      });
	
	      this.pageStructure = [layoutItem, templateItem];
	      var jt = this.$pageStructure.jstree({
	        core: {
	          data: this.pageStructure,
	          themes: {
	            name: 'default-dark'
	          }
	        },
	        plugins: ['types'],
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
	
	      var jstreeObj = this.$pageStructure.jstree();
	      this.$pageStructure.on('loaded.jstree', function () {
	        _this2.pageStructureJson = jstreeObj.get_json(_this2.$pageStructure, {
	          no_state: true,
	          no_id: true,
	          no_li_attr: true,
	          no_a_attr: true
	        });
	        _this2.target.FrontendMonster.VisualFrame.pageStructureJson = _this2.pageStructureJson;
	      });
	
	      this.editModeData = this.target.MONSTER_EDIT_MODE_DATA;
	    }
	  }, {
	    key: 'serializePage',
	    value: function serializePage() {
	      var _this3 = this;
	
	      var result = {};
	      Object.keys(this.regionsStructure).forEach(function (regionKey) {
	        var region = _this3.regionsStructure[regionKey];
	        result[region.key] = region.serialize();
	      });
	      return result;
	    }
	  }, {
	    key: 'materialsByRegions',
	    value: function materialsByRegions() {
	      var _this4 = this;
	
	      var result = {};
	      Object.keys(this.regionsStructure).forEach(function (regionKey) {
	        var region = _this4.regionsStructure[regionKey];
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
	      item.data.id = 'layout.templateRegion.' + item.data.regionKey;
	      var templateRegions = [];
	
	      // find materials
	      var $layoutMaterials = $layoutRegion.find('>[data-is-material]');
	      $layoutMaterials.each(function iter() {
	        var $layoutMaterial = $(this);
	        var result = PageStructureEnvironment.processLayoutMaterial($layoutMaterial, item.id);
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
	    value: function processLayoutMaterial($layoutMaterial, prefix) {
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
	          node: $layoutMaterial
	        }
	      };
	      var templateRegions = [];
	      var $regions = $layoutMaterial.find('> .m-monster-content__content');
	      $regions.each(function iter() {
	        var result = PageStructureEnvironment.processTemplateRegion($(this));
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
	      var item = PageStructureEnvironment.extractRegionData($templateRegion);
	      item.state = {
	        opened: true
	      };
	      item.children = [];
	      item.data.entityDependent = $templateRegion.data('regionEntityDependent') === 1;
	
	      var prefix = item.data.entityDependent ? 'template' : 'content';
	      item.data.id = prefix + '.templateRegion.' + item.data.regionKey;
	
	      if (item.data.entityDependent) {
	        item.type = 'contentTemplateRegion';
	      }
	      var $regionMaterials = $templateRegion.find('>[data-is-material]');
	      $regionMaterials.each(function iter() {
	        item.children.push(PageStructureEnvironment.processTemplateRegionMaterial($(this), item.data.id));
	      });
	      return item;
	    }
	  }, {
	    key: 'processTemplateRegionMaterial',
	    value: function processTemplateRegionMaterial($regionMaterial, prefix) {
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
	          node: $regionMaterial
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
	
	  return PageStructureEnvironment;
	}(_BaseEnvironment3.default);
	
	exports.default = PageStructureEnvironment;

/***/ },
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _FrameApi = __webpack_require__(3);
	
	var _FrameApi2 = _interopRequireDefault(_FrameApi);
	
	var _uniqid = __webpack_require__(23);
	
	var _uniqid2 = _interopRequireDefault(_uniqid);
	
	var _DataProviderFactory = __webpack_require__(36);
	
	var _DataProviderFactory2 = _interopRequireDefault(_DataProviderFactory);
	
	var _Editable = __webpack_require__(39);
	
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
	      this.parentWindow = window.parent;
	      /** @var FrontendMonster */
	      this.parentMonster = this.parentWindow.FrontendMonster;
	      this.parentBuilder = this.parentMonster.builder;
	      this.currentMonsterContent = false;
	      this.editable = new _Editable2.default();
	      this.makeItMove();
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
	            that.parentBuilder.pageChanged();
	          }
	        }
	        return false;
	      }).on('click', '.monster-block-handlers__move-down', function () {
	        if (that.$selectedMaterial) {
	          var $next = that.$selectedMaterial.next('[data-is-material]');
	          if ($next.length === 1) {
	            that.$selectedMaterial.insertAfter($next);
	            that.updateHandlers();
	            that.parentBuilder.pageChanged();
	          }
	        }
	        return false;
	      }).on('click', '.monster-block-handlers__clone', function () {
	        if (that.$selectedMaterial) {
	          var $clonedMaterial = that.$selectedMaterial.clone();
	          var randomIndex = (0, _uniqid2.default)('mat');
	          $clonedMaterial.insertAfter(that.$selectedMaterial).data('materialIndex', randomIndex).attr('data-material-index', randomIndex);
	          that.selectMaterial($clonedMaterial);
	          that.parentBuilder.pageChanged();
	        }
	        return false;
	      }).on('click', '.monster-block-handlers__remove', function () {
	        if (that.$selectedMaterial) {
	          if (confirm('Are you sure you want to remove this material?')) {
	            that.$selectedMaterial.remove();
	            that.$selectedMaterial = null;
	            that.$handlers.hide(); // it does not work. why? Need to fix!
	            that.parentBuilder.pageChanged();
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
	      var data = this.iterateTemplateType(this.pageStructureJson);
	      console.log(data);
	      debugger;
	      VisualFrame.formSubmit(data);
	      return false;
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
	        entityMaterials: {}
	      };
	      arr.forEach(function (obj) {
	        // const key = obj.data.id.replace(/^.*\./, '');
	        var regionKey = obj.data.regionKey;
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
/* 26 */,
/* 27 */,
/* 28 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
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
	
	      var prefix = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];
	
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _StaticContent = __webpack_require__(37);
	
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _DataProvider2 = __webpack_require__(35);
	
	var _DataProvider3 = _interopRequireDefault(_DataProvider2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StaticContent = function (_DataProvider) {
	  _inherits(StaticContent, _DataProvider);
	
	  function StaticContent(providedKeys) {
	    _classCallCheck(this, StaticContent);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(StaticContent).call(this, 'DotPlant\\Monster\\DataEntity\\StaticContentProvider', providedKeys));
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
	
	      var prefix = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];
	
	      var result = {};
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
/* 38 */
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _all = __webpack_require__(41);
	
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _BaseEditable2 = __webpack_require__(38);
	
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = all;
	
	var _WYSIWYG = __webpack_require__(40);
	
	var _WYSIWYG2 = _interopRequireDefault(_WYSIWYG);
	
	var _image = __webpack_require__(42);
	
	var _image2 = _interopRequireDefault(_image);
	
	var _link = __webpack_require__(43);
	
	var _link2 = _interopRequireDefault(_link);
	
	var _string = __webpack_require__(44);
	
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _BaseEditable2 = __webpack_require__(38);
	
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _BaseEditable2 = __webpack_require__(38);
	
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _BaseEditable2 = __webpack_require__(38);
	
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
	    key: 'initializeEditable',
	    value: function initializeEditable($node) {
	      var node = $node[0];
	
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
	        throw e;
	      }
	      // });
	    }
	  }]);
	
	  return TextString;
	}(_BaseEditable3.default);
	
	exports.default = TextString;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTM1Zjk3Yjk4YmI0MTM1YjUzYjgiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9CYXNlRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRnJhbWVBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvRnJvbnRlbmRNb25zdGVyLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9WaXN1YWxCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvQWN0aW9uRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9DdXN0b21pemF0aW9uRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9NYXRlcmlhbHNFbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL1NpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3VuaXFpZC5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9IYXNoQXBpLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL1Zpc3VhbEZyYW1lLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2J1bmRsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvRGF0YVByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvcHJvdmlkZXJzL1N0YXRpY0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL0Jhc2VFZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9FZGl0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvV1lTSVdZRy5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvYWxsLmpzIiwid2VicGFjazovLy8uL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvbGluay5qcyIsIndlYnBhY2s6Ly8vLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtB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USxHQUFSLENBQVksS0FBWixFQUFtQixJQUFuQjtBQUNBLGVBQU0sQ0FBTjtBQUNEOztBQUVGOzs7Ozs7bUJBSVksVSIsImZpbGUiOiJ2aXN1YWwtYnVpbGRlci9zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBlMzVmOTdiOThiYjQxMzViNTNiOFxuICoqLyIsImltcG9ydCAnLi9idW5kbGUuY3NzJztcblxuaW1wb3J0IEZyb250ZW5kTW9uc3RlciBmcm9tICcuL0Zyb250ZW5kTW9uc3Rlcic7XG5cbndpbmRvdy5Gcm9udGVuZE1vbnN0ZXIgPSBuZXcgRnJvbnRlbmRNb25zdGVyKCk7XG4vL1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvYnVuZGxlLmpzXG4gKiovIiwiaW1wb3J0IEZyYW1lQXBpIGZyb20gJy4vLi4vdmlzdWFsLWZyYW1lL0ZyYW1lQXBpJztcblxuY2xhc3MgQmFzZUVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IodmlzdWFsQnVpbGRlciwgbmFtZSkge1xuICAgIHRoaXMudmlzdWFsQnVpbGRlciA9IHZpc3VhbEJ1aWxkZXI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhcmdldCA9ICQodGhpcy52aXN1YWxCdWlsZGVyLnNldHRpbmdzWydmcmFtZS1zZWxlY3RvciddKVswXS5jb250ZW50V2luZG93O1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgLy8gZGVhY3RpdmF0ZSBjdXJyZW50IHNlbGVjdGVkIGVudmlyb25tZW50XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gdGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkge1xuICAgICAgdGhpcy52aXN1YWxCdWlsZGVyLmVudmlyb25tZW50cy5nZXQodGhpcy52aXN1YWxCdWlsZGVyLmN1cnJlbnRFbnZpcm9ubWVudCkuZGVhY3RpdmF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0YXJnZXQkKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldC4kO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIuY2xlYXJTdGFja2FibGUoKTtcbiAgfVxuXG4gIHNlbmRNZXNzYWdlKGZ1bmMsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy50YXJnZXQsIGZ1bmMsIGFyZ3MpO1xuICB9XG5cbiAgcGFnZUNoYW5nZWQoKSB7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlRW52aXJvbm1lbnQ7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL0Jhc2VFbnZpcm9ubWVudC5qc1xuICoqLyIsImNsYXNzIEZyYW1lQXBpIHtcbiAgc3RhdGljIGdldCBpc0llKCkge1xuICAgIC8qIGdsb2JhbCBpcyAqL1xuICAgIGlmICh0eXBlb2YoaXMpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGlzLmllKCk7Ly8gfHwgaXMuZWRnZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGljIGJpbmRNZXNzYWdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrSGFuZGxlcihldmVudCkge1xuICAgICAgbGV0IG1lc3NhZ2UgPSBudWxsO1xuICAgICAgaWYgKEZyYW1lQXBpLmlzSWUpIHtcbiAgICAgICAgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXNzYWdlID0gZXZlbnQuZGF0YTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxpc3RlbmVyW21lc3NhZ2UuZnVuY10pIHtcbiAgICAgICAgbGlzdGVuZXJbbWVzc2FnZS5mdW5jXS5hcHBseShsaXN0ZW5lciwgbWVzc2FnZS5hcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSUU4XG4gICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29ubWVzc2FnZScsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgc2VuZE1lc3NhZ2UodGFyZ2V0LCBmdW5jLCBhcmdzKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGZ1bmMsXG4gICAgICBhcmdzXG4gICAgfTtcbiAgICBjb25zdCBtZXNzYWdlID0gRnJhbWVBcGkuaXNJZSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogZGF0YTtcblxuICAgIHRhcmdldC5wb3N0TWVzc2FnZShtZXNzYWdlLCAnKicpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyYW1lQXBpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9GcmFtZUFwaS5qc1xuICoqLyIsImltcG9ydCBWaXN1YWxCdWlsZGVyIGZyb20gJy4vY29tcG9uZW50cy9idWlsZGVyL1Zpc3VhbEJ1aWxkZXInO1xuaW1wb3J0IFZpc3VhbEZyYW1lIGZyb20gJy4vY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUnO1xuaW1wb3J0IEhhc2hBcGkgZnJvbSAnLi9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9IYXNoQXBpJztcblxuY2xhc3MgRnJvbnRlbmRNb25zdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLnZpc3VhbEJ1bGRlciA9IG51bGw7XG4gICAgdGhpcy5oYXNoQXBpID0gbmV3IEhhc2hBcGkoKTtcbiAgICBpZiAod2luZG93LnBhcmVudCAhPT0gd2luZG93ICYmIHdpbmRvdy5wYXJlbnQuRnJvbnRlbmRNb25zdGVyKSB7XG4gICAgICBpZiAod2luZG93LnBhcmVudC5Gcm9udGVuZE1vbnN0ZXIuaGFzQnVpbGRlcikge1xuICAgICAgICB0aGlzLlZpc3VhbEZyYW1lID0gbmV3IFZpc3VhbEZyYW1lKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qIGdsb2JhbCBzbW9vdGhTY3JvbGw6IGZhbHNlKi9cbiAgICBpZiAodHlwZW9mKHNtb290aFNjcm9sbCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzbW9vdGhTY3JvbGwuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIFZpc3VhbEJ1aWxkZXIgY2xhc3MgaW5zdGFuY2VcbiAgICogQHJldHVybnMgVmlzdWFsQnVpbGRlclxuICAgKi9cbiAgZ2V0IGJ1aWxkZXIoKSB7XG4gICAgaWYgKHRoaXMudmlzdWFsQnVsZGVyID09PSBudWxsKSB7XG4gICAgICB0aGlzLnZpc3VhbEJ1bGRlciA9IG5ldyBWaXN1YWxCdWlsZGVyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZpc3VhbEJ1bGRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB0aGlzIEZyb250ZW5kTW9uc3RlciBpbnN0YW5jZSBoYXMgVmlzdWFsIEJ1aWxkZXIgb24gcGFnZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBoYXNCdWlsZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkZXIuJGJ1aWxkZXIubGVuZ3RoID09PSAxO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgRnJvbnRlbmRNb25zdGVyIHNldHRpbmdzLlxuICAgKiBVc2VzIEZyb250ZW5kTW9uc3RlclNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAqL1xuICBwYXJhbXMoKSB7XG4gICAgY29uc3QgdXNlclNldHRpbmdzID0gd2luZG93LkZyb250ZW5kTW9uc3RlclNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge307XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyb250ZW5kTW9uc3RlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvRnJvbnRlbmRNb25zdGVyLmpzXG4gKiovIiwiaW1wb3J0IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQnO1xuaW1wb3J0IE1hdGVyaWFsc0Vudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50JztcbmltcG9ydCBDdXN0b21pemF0aW9uRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudHMvQ3VzdG9taXphdGlvbkVudmlyb25tZW50JztcbmltcG9ydCBBY3Rpb25FbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50cy9BY3Rpb25FbnZpcm9ubWVudCc7XG5pbXBvcnQgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnRzL1BhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCc7XG5pbXBvcnQgRnJhbWVBcGkgZnJvbSAnLi8uLi92aXN1YWwtZnJhbWUvRnJhbWVBcGknO1xuLy8gaW1wb3J0IEVkaXRhYmxlIGZyb20gJy4vRWRpdGFibGUnO1xuXG5jbGFzcyBWaXN1YWxCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLnJlc29sdXRpb25Td2l0Y2hlcigpO1xuXG4gICAgdGhpcy5lbnZpcm9ubWVudHMgPSBuZXcgTWFwKFtcbiAgICAgIFsnc2l0ZS1zdHJ1Y3R1cmUnLCBuZXcgU2l0ZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdzaXRlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsncGFnZS1zdHJ1Y3R1cmUnLCBuZXcgUGFnZVN0cnVjdHVyZUVudmlyb25tZW50KHRoaXMsICdwYWdlLXN0cnVjdHVyZScpXSxcbiAgICAgIFsnbWF0ZXJpYWxzJywgbmV3IE1hdGVyaWFsc0Vudmlyb25tZW50KHRoaXMsICdtYXRlcmlhbHMnKV0sXG4gICAgICBbJ2N1c3RvbWl6YXRpb24nLCBuZXcgQ3VzdG9taXphdGlvbkVudmlyb25tZW50KHRoaXMsICdjdXN0b21pemF0aW9uJyldLFxuICAgICAgWydhY3Rpb24nLCBuZXcgQWN0aW9uRW52aXJvbm1lbnQodGhpcywgJ2FjdGlvbicpXSxcbiAgICBdKTtcblxuICAgIHRoaXMuZW52aXJvbm1lbnRTZWxlY3RvcigpO1xuXG4gICAgLy8gc2VsZWN0IGZpcnN0IGVudmlyb25tZW50IGJ5IGRlZmF1bHRcbiAgICB0aGlzLnN3aXRjaEVudmlyb25tZW50KCdzaXRlLXN0cnVjdHVyZScpO1xuICAgICQoJy5tb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJylcbiAgICAgIC5maXJzdCgpXG4gICAgICAubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICBGcmFtZUFwaS5iaW5kTWVzc2FnZUxpc3RlbmVyKHRoaXMpO1xuXG4gICAgLy8gdGhpcy5lZGl0YWJsZSA9IG5ldyBFZGl0YWJsZSgpO1xuXG4gICAgdGhpcy5jb250cm9scygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgVmlzdWFsQnVpbGRlciBzZXR0aW5ncy5cbiAgICogVXNlcyBWaXN1YWxCdWlsZGVyU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuVmlzdWFsQnVpbGRlclNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgJ2VsZW1lbnQtc2VsZWN0b3InOiAnLm1vbnN0ZXItdmlzdWFsLWJ1aWxkZXInLFxuICAgICAgJ2ZyYW1lLXNlbGVjdG9yJzogJy5tb25zdGVyLXZpc3VhbC1mcmFtZScsXG4gICAgICBidW5kbGVzOiB7fSxcbiAgICAgICdzdGFja2FibGUtY29udGFpbmVyLWNsYXNzJzogJ21vbnN0ZXItc3RhY2thYmxlLWNvbnRhaW5lcicsXG4gICAgICAnbmV3LWJsb2NrLXVybCc6ICcvbW9uc3Rlci92aXN1YWwtYnVpbGRlci9uZXctYmxvY2snLFxuICAgIH07XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuJGJ1aWxkZXIgPSAkKHRoaXMuc2V0dGluZ3NbJ2VsZW1lbnQtc2VsZWN0b3InXSk7XG4gICAgdGhpcy4kc3RhY2thYmxlID0gJChgLiR7dGhpcy5zZXR0aW5nc1snc3RhY2thYmxlLWNvbnRhaW5lci1jbGFzcyddfWApO1xuICB9XG5cbiAgcmVzb2x1dGlvblN3aXRjaGVyKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGJlbUVsZW0gPSAncmVzb2x1dGlvbi1zd2l0Y2hlcl9fcmVzb2x1dGlvbi1saW5rJztcbiAgICBjb25zdCBhY3RpdmVNb2RpZmllciA9IGAke2JlbUVsZW19LS1hY3RpdmVgO1xuICAgIGNvbnN0ICRyZXNvbHV0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRyZXNvbHV0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAkcmVzb2x1dGlvbkxpbmtzLnJlbW92ZUNsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgICQodGhhdC5zZXR0aW5nc1snZnJhbWUtc2VsZWN0b3InXSkud2lkdGgoJCh0aGlzKS5kYXRhKCdyZXNvbHV0aW9uV2lkdGgnKSk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKGFjdGl2ZU1vZGlmaWVyKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGVudmlyb25tZW50U2VsZWN0b3IoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3QgYmVtRWxlbSA9ICdtb25zdGVyLWVudmlyb25tZW50LXNlbGVjdG9yX19lbnZpcm9ubWVudC1saW5rJztcbiAgICBjb25zdCBhY3RpdmVNb2RpZmllciA9IGAke2JlbUVsZW19LS1hY3RpdmVgO1xuICAgIGNvbnN0ICRzZWN0aW9uTGlua3MgPSAkKGAuJHtiZW1FbGVtfWApO1xuICAgICRzZWN0aW9uTGlua3MuY2xpY2soZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBjb25zdCBlbnZpcm9ubWVudE5hbWUgPSAkKHRoaXMpLmRhdGEoJ2Vudmlyb25tZW50TmFtZScpO1xuICAgICAgaWYgKHRoYXQuY3VycmVudEVudmlyb25tZW50ID09PSBlbnZpcm9ubWVudE5hbWUpIHtcbiAgICAgICAgJHNlY3Rpb25MaW5rcy5yZW1vdmVDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICAgIHRoYXQuZW52aXJvbm1lbnRzLmdldChlbnZpcm9ubWVudE5hbWUpLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgdGhhdC5jdXJyZW50RW52aXJvbm1lbnQgPSBudWxsO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgICRzZWN0aW9uTGlua3MucmVtb3ZlQ2xhc3MoYWN0aXZlTW9kaWZpZXIpO1xuICAgICAgdGhhdC5zd2l0Y2hFbnZpcm9ubWVudChlbnZpcm9ubWVudE5hbWUpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhhY3RpdmVNb2RpZmllcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBzd2l0Y2hFbnZpcm9ubWVudChlbnZpcm9ubWVudE5hbWUpIHtcbiAgICB0aGlzLmVudmlyb25tZW50cy5nZXQoZW52aXJvbm1lbnROYW1lKS5hY3RpdmF0ZSgpO1xuICAgIHRoaXMuY3VycmVudEVudmlyb25tZW50ID0gZW52aXJvbm1lbnROYW1lO1xuICB9XG5cbiAgY2xlYXJTdGFja2FibGUoKSB7XG4gICAgdGhpcy4kc3RhY2thYmxlLmVtcHR5KCk7XG4gIH1cblxuICBjcmVhdGVTdGFja2FibGVQYW5lKCkge1xuICAgIGNvbnN0IHBhbmVDbGFzcyA9IGAke3RoaXMuc2V0dGluZ3NbJ3N0YWNrYWJsZS1jb250YWluZXItY2xhc3MnXX1fX3BhbmVgO1xuICAgIGNvbnN0IG1vZGlmaWVyID0gdGhpcy4kc3RhY2thYmxlLmZpbmQoYC4ke3BhbmVDbGFzc31gKS5sZW5ndGggPT09IDBcbiAgICAgID8gYCR7cGFuZUNsYXNzfS0tZmlyc3RgXG4gICAgICA6ICcnO1xuICAgIGNvbnN0ICRuZXdQYW5lID0gJChgPGRpdiBjbGFzcz1cIiR7cGFuZUNsYXNzfSAke21vZGlmaWVyfVwiPjwvZGl2PmApO1xuICAgIHRoaXMuJHN0YWNrYWJsZS5hcHBlbmQoJG5ld1BhbmUpO1xuICAgIHJldHVybiAkbmV3UGFuZTtcbiAgfVxuXG4gIG1hdGVyaWFsQnlOYW1lKG5hbWUpIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5tYXRlcmlhbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLm1hdGVyaWFsc1tuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXQgZnJhbWVDb250ZW50V2luZG93KCkge1xuICAgIHJldHVybiAkKHRoaXMuc2V0dGluZ3NbJ2ZyYW1lLXNlbGVjdG9yJ10pWzBdLmNvbnRlbnRXaW5kb3c7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgLy8gRnJhbWVBcGkuc2VuZE1lc3NhZ2UodGhpcy5mcmFtZUNvbnRlbnRXaW5kb3csICdzZXJpYWxpemVDb250ZW50JywgWydsb2cnXSk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5lbnZpcm9ubWVudHMuZ2V0KCdwYWdlLXN0cnVjdHVyZScpLnNlcmlhbGl6ZVBhZ2UoKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgLy8gd2UgaGF2ZSByZXN1bHQgd2hpY2ggaXMgY29udGVudCBpbiBmb3JtYXQ6XG4gICAgLy8gcmVnaW9uXG4gICAgLy8gLS0tIG1hdGVyaWFsIGlkXG4gICAgLy8gLS0tLS0tLSBrZXlzID0+IHZhbHVlc1xuICAgIC8vXG4gICAgLy8gb3VyIFByb3ZpZGVycyBzaG91bGQgZ2V0IG9ubHkgdGhvc2Uga2V5cyB0aGF0IHRoZXkgcHJvdmlkZVxuICAgIC8vIHByb3ZpZGVkIGtleXMgYXJlIHN0b3JlZCBpbiBmcmFtZUNvbnRlbnRXaW5kb3cuTU9OU1RFUl9FRElUX01PREVfREFUQS50ZW1wbGF0ZS5wcm92aWRlZEtleXNcbiAgICBjb25zdCByZXN1bHRCeVByb3ZpZGVycyA9IHt9O1xuICAgIGNvbnN0IHByb3ZpZGVkS2V5cyA9IHRoaXMuZnJhbWVDb250ZW50V2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEudGVtcGxhdGUucHJvdmlkZWRLZXlzO1xuXG4gICAgT2JqZWN0LmtleXMocHJvdmlkZWRLZXlzKS5mb3JFYWNoKHByb3ZpZGVySW5kZXggPT4ge1xuICAgICAgcmVzdWx0QnlQcm92aWRlcnNbcHJvdmlkZXJJbmRleF0gPSB7fTtcblxuICAgICAgY29uc3QgcmVnaW9ucyA9IHByb3ZpZGVkS2V5c1twcm92aWRlckluZGV4XTtcblxuICAgICAgT2JqZWN0LmtleXMocmVnaW9ucykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0Lmhhc093blByb3BlcnR5KHJlZ2lvbktleSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdW3JlZ2lvbktleV0gPSB7fTtcblxuICAgICAgICAvLyBnbyBkZWVwIHRvIG1hdGVyaWFsIGluZGVjZXNcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gcmVnaW9uc1tyZWdpb25LZXldO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG1hdGVyaWFscykuZm9yRWFjaChtYXRlcmlhbEluZGV4ID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0W3JlZ2lvbktleV0uaGFzT3duUHJvcGVydHkobWF0ZXJpYWxJbmRleCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzW3Byb3ZpZGVySW5kZXhdW3JlZ2lvbktleV1bbWF0ZXJpYWxJbmRleF0gPSB7fTtcblxuICAgICAgICAgIGNvbnN0IGRhdGFLZXlzID0gbWF0ZXJpYWxzW21hdGVyaWFsSW5kZXhdO1xuXG4gICAgICAgICAgZGF0YUtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdFtyZWdpb25LZXldW21hdGVyaWFsSW5kZXhdLmhhc093blByb3BlcnR5KGtleSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdEJ5UHJvdmlkZXJzXG4gICAgICAgICAgICAgIFtwcm92aWRlckluZGV4XVxuICAgICAgICAgICAgICBbcmVnaW9uS2V5XVxuICAgICAgICAgICAgICBbbWF0ZXJpYWxJbmRleF1cbiAgICAgICAgICAgICAgW2tleV0gPSByZXN1bHRbcmVnaW9uS2V5XVttYXRlcmlhbEluZGV4XVtrZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdEJ5UHJvdmlkZXJzKTtcbiAgICByZXR1cm4gcmVzdWx0QnlQcm92aWRlcnM7XG4gIH1cblxuICBwYWdlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmVudmlyb25tZW50cy5mb3JFYWNoKFxuICAgICAgZW52aXJvbm1lbnQgPT5cbiAgICAgICAgZW52aXJvbm1lbnQucGFnZUNoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICBsb2cocmVzdWx0KSB7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgfVxuXG4gIGNvbnRyb2xzKCkge1xuICAgIHRoaXMuJGNvbnRyb2xzID0gdGhpcy4kYnVpbGRlci5maW5kKCcuY29udHJvbHMnKS5maXJzdCgpO1xuICAgIHRoaXMuJGNvbnRyb2xzLmVsZW0oJ3JlZnJlc2gnKS5jbGljaygoKSA9PiB7XG4gICAgICB0aGlzLmZyYW1lQ29udGVudFdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIHRoaXMuJGNvbnRyb2xzLmVsZW0oJ3NhdmUnKS5jbGljaygoKSA9PiB7XG4gICAgICBGcmFtZUFwaS5zZW5kTWVzc2FnZSh0aGlzLmZyYW1lQ29udGVudFdpbmRvdywgJ3NhdmUnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaXN1YWxCdWlsZGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvVmlzdWFsQnVpbGRlci5qc1xuICoqLyIsImltcG9ydCBCYXNlRW52aXJvbm1lbnQgZnJvbSAnLi8uLi9CYXNlRW52aXJvbm1lbnQnO1xuXG5jbGFzcyBBY3Rpb25FbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkVudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL0FjdGlvbkVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWl6YXRpb25FbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9DdXN0b21pemF0aW9uRW52aXJvbm1lbnQuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVudmlyb25tZW50IGZyb20gJy4vLi4vQmFzZUVudmlyb25tZW50JztcblxuY2xhc3MgTWF0ZXJpYWxzRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3Rvcih2aXN1YWxCdWlsZGVyLCBuYW1lKSB7XG4gICAgc3VwZXIodmlzdWFsQnVpbGRlciwgbmFtZSk7XG4gICAgdGhpcy5pbml0TWF0ZXJpYWxzU2VsZWN0b3IoKTtcbiAgfVxuXG4gIGluaXRNYXRlcmlhbHNTZWxlY3RvcigpIHtcbiAgICB0aGlzLiRtYXRlcmlhbHNHcm91cHMgPSAkKCc8dWwgY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzXCI+PC91bD4nKTtcbiAgICB0aGlzLiRtYXRlcmlhbHNMaXN0ID0gW107XG5cbiAgICB0aGlzLnZpc3VhbEJ1aWxkZXIuc2V0dGluZ3MuYnVuZGxlcy5mb3JFYWNoKGJ1bmRsZSA9PiB7XG4gICAgICAvKiBnbG9iYWwgcG9seWdsb3Q6IGZhbHNlICovXG4gICAgICBjb25zdCBpMThuQnVuZGxlTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gcG9seWdsb3QudChidW5kbGUubmFtZSlcbiAgICAgICAgOiBidW5kbGUubmFtZTtcblxuICAgICAgY29uc3QgJGJ1bmRsZVRpdGxlID0gYFxuICAgICAgPGxpIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19faXRlbSBtYXRlcmlhbHMtZ3JvdXBzX19pdGVtLS1idW5kbGUtbGFiZWxcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1idW5kbGVcIiBkYXRhLWJ1bmRsZS1wYXRoPVwiJHtidW5kbGUuZnVsbFBhdGh9XCI+XG4gICAgICAgICAgICAke2kxOG5CdW5kbGVOYW1lfVxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICAgYDtcbiAgICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QucHVzaCgkYnVuZGxlVGl0bGUpO1xuXG4gICAgICBidW5kbGUuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICBjb25zdCBncm91cE5hbWUgPSBncm91cC5uYW1lO1xuICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSBncm91cC5tYXRlcmlhbHM7XG4gICAgICAgIGNvbnN0IGkxOG5Hcm91cE5hbWUgPSB0eXBlb2YocG9seWdsb3QpICE9PSAndW5kZWZpbmVkJyA/IHBvbHlnbG90LnQoZ3JvdXBOYW1lKSA6IGdyb3VwTmFtZTtcbiAgICAgICAgY29uc3QgJGxpID0gJChgXG4gICAgPGxpIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19faXRlbVwiPlxuICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWdyb3VwLXBhdGg9XCIke2dyb3VwLmZ1bGxQYXRofVwiIGNsYXNzPVwibWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwXCI+XG4gICAgICAgICR7aTE4bkdyb3VwTmFtZX0gPHNwYW4gY2xhc3M9XCJtYXRlcmlhbHMtZ3JvdXBzX19jb3VudFwiPigke21hdGVyaWFscy5sZW5ndGh9KTwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICA8L2xpPmApO1xuICAgICAgICB0aGlzLiRtYXRlcmlhbHNHcm91cHMuYXBwZW5kKCRsaSk7XG4gICAgICAgIGNvbnN0ICRsaXN0ID0gJChgPHVsIGNsYXNzPVwibWF0ZXJpYWxzLWxpc3RcIiBkYXRhLWdyb3VwLXBhdGg9XCIke2dyb3VwLmZ1bGxQYXRofVwiPjwvdWw+YCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG5cbiAgICAgICAgbWF0ZXJpYWxzLmZvckVhY2gobWF0ZXJpYWwgPT4ge1xuICAgICAgICAgIGNvbnN0IG1hdGVyaWFsTmFtZSA9IG1hdGVyaWFsLm5hbWU7XG4gICAgICAgICAgY29uc3QgaTE4bk1hdGVyaWFsTmFtZSA9IHR5cGVvZihwb2x5Z2xvdCkgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IHBvbHlnbG90LnQobWF0ZXJpYWxOYW1lKVxuICAgICAgICAgICAgOiBtYXRlcmlhbE5hbWU7XG4gICAgICAgICAgY29uc3QgJGl0ZW0gPSAkKGBcbjxsaT5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1hdGVyaWFscy1saXN0X19pdGVtXCIgZGF0YS1tYXRlcmlhbC1wYXRoPVwiJHttYXRlcmlhbC5mdWxsUGF0aH1cIj5cbiAgICAke2kxOG5NYXRlcmlhbE5hbWV9XG4gIDwvYT5cbjwvbGk+XG5gKTtcbiAgICAgICAgICBpdGVtcy5wdXNoKCRpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgICRsaXN0LmFwcGVuZChpdGVtcyk7XG4gICAgICAgIHRoaXMuJG1hdGVyaWFsc0xpc3QucHVzaCgkbGlzdCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJywgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgJHRoaXMudG9nZ2xlTW9kKCdhY3RpdmUnKTtcbiAgICAgIGNvbnN0IGdyb3VwUGF0aCA9ICR0aGlzLmRhdGEoJ2dyb3VwUGF0aCcpO1xuICAgICAgaWYgKCR0aGlzLm1vZCgnYWN0aXZlJykpIHtcbiAgICAgICAgJCgnLm1hdGVyaWFscy1ncm91cHNfX3N3aXRjaC1ncm91cCcpLm1vZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgICAgICBjb25zdCBtYXRlcmlhbHNMaXN0QWN0aXZlQ2xhc3MgPSAnbWF0ZXJpYWxzLWxpc3QtLWFjdGl2ZSc7XG5cbiAgICAgICAgJCgnLm1hdGVyaWFscy1saXN0JykuZWFjaChmdW5jdGlvbiBpdCgpIHtcbiAgICAgICAgICBjb25zdCAkbGlzdCA9ICQodGhpcyk7XG4gICAgICAgICAgaWYgKCRsaXN0Lmhhc0NsYXNzKG1hdGVyaWFsc0xpc3RBY3RpdmVDbGFzcykpIHtcbiAgICAgICAgICAgICRsaXN0LnJlbW92ZUNsYXNzKG1hdGVyaWFsc0xpc3RBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkbGlzdC5kYXRhKCdncm91cFBhdGgnKSA9PT0gZ3JvdXBQYXRoKSB7XG4gICAgICAgICAgICAkbGlzdC5hZGRDbGFzcyhtYXRlcmlhbHNMaXN0QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHRoaXMubW9kKCdhY3RpdmUnLCB0cnVlKTtcbiAgICAgICAgdGhhdC4kbWF0ZXJpYWxzUGFuZS5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGF0J3MganVzdCBzZWNvbmQgY2xpY2sgb24gdGhlIHNhbWUgZ3JvdXBcbiAgICAgICAgdGhhdC4kbWF0ZXJpYWxzUGFuZS5oaWRlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYXRlcmlhbHMtbGlzdF9faXRlbScsIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgIHRoYXQuc2VuZE1lc3NhZ2UoXG4gICAgICAgICduZXdCbG9jaycsXG4gICAgICAgIFtcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoJ21hdGVyaWFsUGF0aCcpLFxuICAgICAgICAgICdjb250ZW50JyxcbiAgICAgICAgXVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHN1cGVyLmFjdGl2YXRlKCk7XG5cbiAgICB0aGlzLiRncm91cHNQYW5lID0gdGhpcy52aXN1YWxCdWlsZGVyLmNyZWF0ZVN0YWNrYWJsZVBhbmUoKTtcbiAgICB0aGlzLiRncm91cHNQYW5lLmFwcGVuZCh0aGlzLiRtYXRlcmlhbHNHcm91cHMpO1xuXG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZSA9IHRoaXMudmlzdWFsQnVpbGRlci5jcmVhdGVTdGFja2FibGVQYW5lKCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZS5hcHBlbmQodGhpcy4kbWF0ZXJpYWxzTGlzdCk7XG4gICAgdGhpcy4kbWF0ZXJpYWxzUGFuZS5oaWRlKCk7XG5cbiAgICAkKCcubWF0ZXJpYWxzLWdyb3Vwc19fc3dpdGNoLWdyb3VwJykubW9kKCdhY3RpdmUnLCBmYWxzZSk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFsc0Vudmlyb25tZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL2J1aWxkZXIvZW52aXJvbm1lbnRzL01hdGVyaWFsc0Vudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKHZpc3VhbEJ1aWxkZXIsIG5hbWUpIHtcbiAgICBzdXBlcih2aXN1YWxCdWlsZGVyLCBuYW1lKTtcbiAgICB0aGlzLmluaXRQYWdlU3RydWN0dXJlRWxlbWVudCgpO1xuICAgIHRoaXMuZWRpdE1vZGVEYXRhID0ge307XG4gIH1cblxuICBpbml0UGFnZVN0cnVjdHVyZUVsZW1lbnQoKSB7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZSA9ICQoJzxkaXYgY2xhc3M9XCJwYWdlLXN0cnVjdHVyZVwiPjwvZGl2PicpO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgc3VwZXIuYWN0aXZhdGUoKTtcblxuICAgIHRoaXMuJHN0cnVjdHVyZVBhbmUgPSB0aGlzLnZpc3VhbEJ1aWxkZXIuY3JlYXRlU3RhY2thYmxlUGFuZSgpO1xuICAgIHRoaXMuJHN0cnVjdHVyZVBhbmUuYXBwZW5kKHRoaXMuJHBhZ2VTdHJ1Y3R1cmUpO1xuICB9XG5cbiAgcGFnZUNoYW5nZWQoKSB7XG4gICAgc3VwZXIucGFnZUNoYW5nZWQoKTtcbiAgICB0aGlzLiRwYWdlU3RydWN0dXJlLmpzdHJlZSgnZGVzdHJveScpO1xuICAgIGNvbnN0IGxheW91dCA9IHRoaXMudGFyZ2V0Lk1PTlNURVJfRURJVF9NT0RFX0RBVEEubGF5b3V0O1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy50YXJnZXQuTU9OU1RFUl9FRElUX01PREVfREFUQS50ZW1wbGF0ZTtcblxuICAgIGNvbnN0IGxheW91dEl0ZW0gPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiAnbGF5b3V0JyxcbiAgICAgICAgdGVtcGxhdGVJZDogbGF5b3V0LmlkLFxuICAgICAgfSxcbiAgICAgIHRleHQ6IGBMYXlvdXQgLSAke2xheW91dC5rZXl9ICMke2xheW91dC5pZH1gLFxuICAgICAgaWNvbjogJ2ZhIGZhLWNvbHVtbnMnLFxuICAgICAgc3RhdGU6IHtcbiAgICAgICAgb3BlbmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICB9O1xuICAgIGNvbnN0IHRlbXBsYXRlSXRlbSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6ICd0ZW1wbGF0ZScsXG4gICAgICAgIHRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgfSxcbiAgICAgIHRleHQ6IGBUZW1wbGF0ZSAtICR7dGVtcGxhdGUua2V5fSAjJHt0ZW1wbGF0ZS5pZH1gLFxuICAgICAgaWNvbjogJ2ZhIGZhLXRoJyxcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIG9wZW5lZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgfTtcblxuICAgIGNvbnN0ICRsYXlvdXRSZWdpb25zID0gdGhpcy50YXJnZXQkKCcubS1tb25zdGVyLWNvbnRlbnRfX2xheW91dCcpO1xuICAgICRsYXlvdXRSZWdpb25zLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5wcm9jZXNzTGF5b3V0KCQodGhpcykpO1xuICAgICAgbGF5b3V0SXRlbS5jaGlsZHJlbi5wdXNoKHJlc3VsdC5pdGVtKTtcbiAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnMuZm9yRWFjaChyZWdpb24gPT4ge1xuICAgICAgICB0ZW1wbGF0ZUl0ZW0uY2hpbGRyZW4ucHVzaChyZWdpb24pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmUgPSBbXG4gICAgICBsYXlvdXRJdGVtLFxuICAgICAgdGVtcGxhdGVJdGVtLFxuICAgIF07XG4gICAgY29uc3QganQgPSB0aGlzLiRwYWdlU3RydWN0dXJlLmpzdHJlZSh7XG4gICAgICBjb3JlOiB7XG4gICAgICAgIGRhdGE6IHRoaXMucGFnZVN0cnVjdHVyZSxcbiAgICAgICAgdGhlbWVzOiB7XG4gICAgICAgICAgbmFtZTogJ2RlZmF1bHQtZGFyaycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcGx1Z2luczogW1xuICAgICAgICAndHlwZXMnLFxuICAgICAgXSxcbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIGxheW91dDoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1jb2x1bW5zJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICBpY29uOiAnZmEgZmEtdGgnLFxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVJlZ2lvbjoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1mb2xkZXItbycsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnRUZW1wbGF0ZVJlZ2lvbjoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1mb2xkZXInLFxuICAgICAgICB9LFxuICAgICAgICBtYXRlcmlhbDoge1xuICAgICAgICAgIGljb246ICdmYSBmYS1wdXp6bGUtcGllY2UnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGpzdHJlZU9iaiA9IHRoaXMuJHBhZ2VTdHJ1Y3R1cmUuanN0cmVlKCk7XG4gICAgdGhpcy4kcGFnZVN0cnVjdHVyZS5vbignbG9hZGVkLmpzdHJlZScsICgpID0+IHtcbiAgICAgIHRoaXMucGFnZVN0cnVjdHVyZUpzb24gPSBqc3RyZWVPYmouZ2V0X2pzb24odGhpcy4kcGFnZVN0cnVjdHVyZSwge1xuICAgICAgICBub19zdGF0ZTogdHJ1ZSxcbiAgICAgICAgbm9faWQ6IHRydWUsXG4gICAgICAgIG5vX2xpX2F0dHI6IHRydWUsXG4gICAgICAgIG5vX2FfYXR0cjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy50YXJnZXQuRnJvbnRlbmRNb25zdGVyLlZpc3VhbEZyYW1lLnBhZ2VTdHJ1Y3R1cmVKc29uID0gdGhpcy5wYWdlU3RydWN0dXJlSnNvbjtcbiAgICB9KTtcblxuICAgIHRoaXMuZWRpdE1vZGVEYXRhID0gdGhpcy50YXJnZXQuTU9OU1RFUl9FRElUX01PREVfREFUQTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9jZXNzTGF5b3V0KCRsYXlvdXRSZWdpb24pIHtcbiAgICBjb25zdCBpdGVtID0gUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmV4dHJhY3RSZWdpb25EYXRhKCRsYXlvdXRSZWdpb24pO1xuICAgIGl0ZW0uc3RhdGUgPSB7XG4gICAgICBvcGVuZWQ6IHRydWUsXG4gICAgfTtcbiAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgaXRlbS5kYXRhLmlkID0gYGxheW91dC50ZW1wbGF0ZVJlZ2lvbi4ke2l0ZW0uZGF0YS5yZWdpb25LZXl9YDtcbiAgICBjb25zdCB0ZW1wbGF0ZVJlZ2lvbnMgPSBbXTtcblxuICAgIC8vIGZpbmQgbWF0ZXJpYWxzXG4gICAgY29uc3QgJGxheW91dE1hdGVyaWFscyA9ICRsYXlvdXRSZWdpb24uZmluZCgnPltkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICRsYXlvdXRNYXRlcmlhbHMuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgY29uc3QgJGxheW91dE1hdGVyaWFsID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5wcm9jZXNzTGF5b3V0TWF0ZXJpYWwoJGxheW91dE1hdGVyaWFsLCBpdGVtLmlkKTtcbiAgICAgIGNvbnN0IGxheW91dE1hdGVyaWFsSXRlbSA9IHJlc3VsdC5sYXlvdXRNYXRlcmlhbDtcbiAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnMuZm9yRWFjaChyZWdpb24gPT4ge1xuICAgICAgICB0ZW1wbGF0ZVJlZ2lvbnMucHVzaChyZWdpb24pO1xuICAgICAgfSk7XG4gICAgICBpdGVtLmNoaWxkcmVuLnB1c2gobGF5b3V0TWF0ZXJpYWxJdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBpdGVtLFxuICAgICAgdGVtcGxhdGVSZWdpb25zLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgcHJvY2Vzc0xheW91dE1hdGVyaWFsKCRsYXlvdXRNYXRlcmlhbCwgcHJlZml4KSB7XG4gICAgY29uc3QgbWF0ZXJpYWxJbmRleCA9ICRsYXlvdXRNYXRlcmlhbC5kYXRhKCdtYXRlcmlhbEluZGV4Jyk7XG4gICAgY29uc3QgbWF0ZXJpYWxQYXRoID0gJGxheW91dE1hdGVyaWFsLmRhdGEoJ21hdGVyaWFsUGF0aCcpO1xuICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICB0ZXh0OiBgJHtcbiAgICAgICAgbWF0ZXJpYWxQYXRoID09PSAnY29yZS5mcm9udGVuZC1tb25zdGVyLWNvcmUuZ2VuZXJhbC5jb250ZW50LXBsYWNlaG9sZGVyJ1xuICAgICAgICAgID8gJ01haW4gRW50aXR5IENvbnRlbnQnXG4gICAgICAgICAgOiBgTWF0ZXJpYWw6ICR7bWF0ZXJpYWxJbmRleH1gfVxuICAgICAgYCxcbiAgICAgIHR5cGU6ICdtYXRlcmlhbCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiBgJHtwcmVmaXh9LiR7bWF0ZXJpYWxJbmRleH1gLFxuICAgICAgICBtYXRlcmlhbEluZGV4LFxuICAgICAgICBtYXRlcmlhbFBhdGgsXG4gICAgICAgIGVkaXRhYmxlS2V5czogJGxheW91dE1hdGVyaWFsLmRhdGEoJ2VkaXRhYmxlS2V5cycpLFxuICAgICAgICBub2RlOiAkbGF5b3V0TWF0ZXJpYWwsXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgdGVtcGxhdGVSZWdpb25zID0gW107XG4gICAgY29uc3QgJHJlZ2lvbnMgPSAkbGF5b3V0TWF0ZXJpYWwuZmluZCgnPiAubS1tb25zdGVyLWNvbnRlbnRfX2NvbnRlbnQnKTtcbiAgICAkcmVnaW9ucy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQucHJvY2Vzc1RlbXBsYXRlUmVnaW9uKCQodGhpcykpO1xuICAgICAgdGVtcGxhdGVSZWdpb25zLnB1c2gocmVzdWx0KTtcbiAgICB9KTtcbiAgICBpZiAodGVtcGxhdGVSZWdpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGl0ZW0uZGF0YS5pc0NvbnRlbnQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbGF5b3V0TWF0ZXJpYWw6IGl0ZW0sXG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnMsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9jZXNzVGVtcGxhdGVSZWdpb24oJHRlbXBsYXRlUmVnaW9uKSB7XG4gICAgY29uc3QgaXRlbSA9IFBhZ2VTdHJ1Y3R1cmVFbnZpcm9ubWVudC5leHRyYWN0UmVnaW9uRGF0YSgkdGVtcGxhdGVSZWdpb24pO1xuICAgIGl0ZW0uc3RhdGUgPSB7XG4gICAgICBvcGVuZWQ6IHRydWUsXG4gICAgfTtcbiAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgaXRlbS5kYXRhLmVudGl0eURlcGVuZGVudCA9ICR0ZW1wbGF0ZVJlZ2lvbi5kYXRhKCdyZWdpb25FbnRpdHlEZXBlbmRlbnQnKSA9PT0gMTtcblxuICAgIGNvbnN0IHByZWZpeCA9IGl0ZW0uZGF0YS5lbnRpdHlEZXBlbmRlbnQgPyAndGVtcGxhdGUnIDogJ2NvbnRlbnQnO1xuICAgIGl0ZW0uZGF0YS5pZCA9IGAke3ByZWZpeH0udGVtcGxhdGVSZWdpb24uJHtpdGVtLmRhdGEucmVnaW9uS2V5fWA7XG5cbiAgICBpZiAoaXRlbS5kYXRhLmVudGl0eURlcGVuZGVudCkge1xuICAgICAgaXRlbS50eXBlID0gJ2NvbnRlbnRUZW1wbGF0ZVJlZ2lvbic7XG4gICAgfVxuICAgIGNvbnN0ICRyZWdpb25NYXRlcmlhbHMgPSAkdGVtcGxhdGVSZWdpb24uZmluZCgnPltkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICRyZWdpb25NYXRlcmlhbHMuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgaXRlbS5jaGlsZHJlbi5wdXNoKFxuICAgICAgICBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQucHJvY2Vzc1RlbXBsYXRlUmVnaW9uTWF0ZXJpYWwoXG4gICAgICAgICAgJCh0aGlzKSxcbiAgICAgICAgICBpdGVtLmRhdGEuaWRcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9jZXNzVGVtcGxhdGVSZWdpb25NYXRlcmlhbCgkcmVnaW9uTWF0ZXJpYWwsIHByZWZpeCkge1xuICAgIGNvbnN0IG1hdGVyaWFsSW5kZXggPSAkcmVnaW9uTWF0ZXJpYWwuZGF0YSgnbWF0ZXJpYWxJbmRleCcpO1xuICAgIGNvbnN0IG1hdGVyaWFsUGF0aCA9ICRyZWdpb25NYXRlcmlhbC5kYXRhKCdtYXRlcmlhbFBhdGgnKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogYE1hdGVyaWFsOiAke21hdGVyaWFsSW5kZXh9YCxcbiAgICAgIHR5cGU6ICdtYXRlcmlhbCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiBgJHtwcmVmaXh9LiR7bWF0ZXJpYWxJbmRleH1gLFxuICAgICAgICBtYXRlcmlhbEluZGV4LFxuICAgICAgICBtYXRlcmlhbFBhdGgsXG4gICAgICAgIGVkaXRhYmxlS2V5czogJHJlZ2lvbk1hdGVyaWFsLmRhdGEoJ2VkaXRhYmxlS2V5cycpLFxuICAgICAgICBub2RlOiAkcmVnaW9uTWF0ZXJpYWwsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZXh0cmFjdFJlZ2lvbkRhdGEoJG5vZGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogJG5vZGUuZGF0YSgnY29udGVudERlc2NyaXB0aW9uJyksXG4gICAgICB0eXBlOiAndGVtcGxhdGVSZWdpb24nLFxuICAgICAgZGF0YToge1xuICAgICAgICByZWdpb25JZDogJG5vZGUuZGF0YSgncmVnaW9uSWQnKSxcbiAgICAgICAgcmVnaW9uS2V5OiAkbm9kZS5kYXRhKCdyZWdpb25LZXknKSxcbiAgICAgICAgdW5pcXVlQ29udGVudElkOiAkbm9kZS5kYXRhKCd1bmlxdWVDb250ZW50SWQnKSxcbiAgICAgICAgbm9kZTogJG5vZGUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzZXJpYWxpemVQYWdlKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMucmVnaW9uc1N0cnVjdHVyZSkuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgY29uc3QgcmVnaW9uID0gdGhpcy5yZWdpb25zU3RydWN0dXJlW3JlZ2lvbktleV07XG4gICAgICByZXN1bHRbcmVnaW9uLmtleV0gPSByZWdpb24uc2VyaWFsaXplKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIG1hdGVyaWFsc0J5UmVnaW9ucygpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnJlZ2lvbnNTdHJ1Y3R1cmUpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMucmVnaW9uc1N0cnVjdHVyZVtyZWdpb25LZXldO1xuICAgICAgcmVzdWx0W3JlZ2lvbi5rZXldID0gcmVnaW9uLm1hdGVyaWFsc0RlY2woKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQYWdlU3RydWN0dXJlRW52aXJvbm1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvYnVpbGRlci9lbnZpcm9ubWVudHMvUGFnZVN0cnVjdHVyZUVudmlyb25tZW50LmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFbnZpcm9ubWVudCBmcm9tICcuLy4uL0Jhc2VFbnZpcm9ubWVudCc7XG5cbmNsYXNzIFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudCBleHRlbmRzIEJhc2VFbnZpcm9ubWVudCB7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFNpdGVTdHJ1Y3R1cmVFbnZpcm9ubWVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy9idWlsZGVyL2Vudmlyb25tZW50cy9TaXRlU3RydWN0dXJlRW52aXJvbm1lbnQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHVuaXFpZCAocHJlZml4LCBtb3JlRW50cm9weSkge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cDovL2xvY3V0dXMuaW8vcGhwL3VuaXFpZC9cbiAgLy8gb3JpZ2luYWwgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHA6Ly9rdnouaW8pXG4gIC8vICByZXZpc2VkIGJ5OiBLYW5rcmVsdW5lIChodHRwOi8vd3d3LndlYmZha3RvcnkuaW5mby8pXG4gIC8vICAgICAgbm90ZSAxOiBVc2VzIGFuIGludGVybmFsIGNvdW50ZXIgKGluIGxvY3V0dXMgZ2xvYmFsKSB0byBhdm9pZCBjb2xsaXNpb25cbiAgLy8gICBleGFtcGxlIDE6IHZhciAkaWQgPSB1bmlxaWQoKVxuICAvLyAgIGV4YW1wbGUgMTogdmFyICRyZXN1bHQgPSAkaWQubGVuZ3RoID09PSAxM1xuICAvLyAgIHJldHVybnMgMTogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMjogdmFyICRpZCA9IHVuaXFpZCgnZm9vJylcbiAgLy8gICBleGFtcGxlIDI6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gKDEzICsgJ2ZvbycubGVuZ3RoKVxuICAvLyAgIHJldHVybnMgMjogdHJ1ZVxuICAvLyAgIGV4YW1wbGUgMzogdmFyICRpZCA9IHVuaXFpZCgnYmFyJywgdHJ1ZSlcbiAgLy8gICBleGFtcGxlIDM6IHZhciAkcmVzdWx0ID0gJGlkLmxlbmd0aCA9PT0gKDIzICsgJ2JhcicubGVuZ3RoKVxuICAvLyAgIHJldHVybnMgMzogdHJ1ZVxuXG4gIGlmICh0eXBlb2YgcHJlZml4ID09PSAndW5kZWZpbmVkJykge1xuICAgIHByZWZpeCA9ICcnXG4gIH1cblxuICB2YXIgcmV0SWRcbiAgdmFyIF9mb3JtYXRTZWVkID0gZnVuY3Rpb24gKHNlZWQsIHJlcVdpZHRoKSB7XG4gICAgc2VlZCA9IHBhcnNlSW50KHNlZWQsIDEwKS50b1N0cmluZygxNikgLy8gdG8gaGV4IHN0clxuICAgIGlmIChyZXFXaWR0aCA8IHNlZWQubGVuZ3RoKSB7XG4gICAgICAvLyBzbyBsb25nIHdlIHNwbGl0XG4gICAgICByZXR1cm4gc2VlZC5zbGljZShzZWVkLmxlbmd0aCAtIHJlcVdpZHRoKVxuICAgIH1cbiAgICBpZiAocmVxV2lkdGggPiBzZWVkLmxlbmd0aCkge1xuICAgICAgLy8gc28gc2hvcnQgd2UgcGFkXG4gICAgICByZXR1cm4gQXJyYXkoMSArIChyZXFXaWR0aCAtIHNlZWQubGVuZ3RoKSkuam9pbignMCcpICsgc2VlZFxuICAgIH1cbiAgICByZXR1cm4gc2VlZFxuICB9XG5cbiAgdmFyICRnbG9iYWwgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBHTE9CQUwpXG4gICRnbG9iYWwuJGxvY3V0dXMgPSAkZ2xvYmFsLiRsb2N1dHVzIHx8IHt9XG4gIHZhciAkbG9jdXR1cyA9ICRnbG9iYWwuJGxvY3V0dXNcbiAgJGxvY3V0dXMucGhwID0gJGxvY3V0dXMucGhwIHx8IHt9XG5cbiAgaWYgKCEkbG9jdXR1cy5waHAudW5pcWlkU2VlZCkge1xuICAgIC8vIGluaXQgc2VlZCB3aXRoIGJpZyByYW5kb20gaW50XG4gICAgJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAweDc1YmNkMTUpXG4gIH1cbiAgJGxvY3V0dXMucGhwLnVuaXFpZFNlZWQrK1xuXG4gIC8vIHN0YXJ0IHdpdGggcHJlZml4LCBhZGQgY3VycmVudCBtaWxsaXNlY29uZHMgaGV4IHN0cmluZ1xuICByZXRJZCA9IHByZWZpeFxuICByZXRJZCArPSBfZm9ybWF0U2VlZChwYXJzZUludChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDAsIDEwKSwgOClcbiAgLy8gYWRkIHNlZWQgaGV4IHN0cmluZ1xuICByZXRJZCArPSBfZm9ybWF0U2VlZCgkbG9jdXR1cy5waHAudW5pcWlkU2VlZCwgNSlcbiAgaWYgKG1vcmVFbnRyb3B5KSB7XG4gICAgLy8gZm9yIG1vcmUgZW50cm9weSB3ZSBhZGQgYSBmbG9hdCBsb3dlciB0byAxMFxuICAgIHJldElkICs9IChNYXRoLnJhbmRvbSgpICogMTApLnRvRml4ZWQoOCkudG9TdHJpbmcoKVxuICB9XG5cbiAgcmV0dXJuIHJldElkXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3VuaXFpZC5qc1xuICoqLyIsImNsYXNzIEhhc2hBcGkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZ1bmN0aW9uQ2FsbHMgPSB7fTtcblxuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaC5tYXRjaCgvI2hhc2hBcGk6KC4qPyk6XFwvaGFzaEFwaS8pO1xuICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgY29uc3QgZnVuY3Rpb25DYWxscyA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoZXNbMV0pKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZnVuY3Rpb25DYWxscykge1xuICAgICAgICAgIGlmIChpdGVtLmZ1bmMpIHtcbiAgICAgICAgICAgIHRoaXMuZnVuY3Rpb25DYWxsc1tpdGVtLmZ1bmNdID0gaXRlbS5hcmdzIHx8IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNob3VsZENhbGwoZnVuYykge1xuICAgIHJldHVybiB0aGlzLmZ1bmN0aW9uQ2FsbHNbZnVuY10gfHwgZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGFzaEFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvSGFzaEFwaS5qc1xuICoqLyIsImltcG9ydCBGcmFtZUFwaSBmcm9tICcuL0ZyYW1lQXBpJztcbmltcG9ydCB1bmlxdWVJZCBmcm9tICcuLy4uL3VuaXFpZCc7XG5pbXBvcnQgRGF0YVByb3ZpZGVyRmFjdG9yeSBmcm9tICcuL0RhdGFQcm92aWRlckZhY3RvcnknO1xuaW1wb3J0IEVkaXRhYmxlIGZyb20gJy4vRWRpdGFibGUnO1xuXG5jbGFzcyBWaXN1YWxGcmFtZVxue1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtcygpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICBGcmFtZUFwaS5iaW5kTWVzc2FnZUxpc3RlbmVyKHRoaXMpO1xuICAgIHRoaXMucGFnZVN0cnVjdHVyZUpzb25EYXRhID0gbnVsbDtcbiAgICB0aGlzLnBhcmVudFdpbmRvdyA9IHdpbmRvdy5wYXJlbnQ7XG4gICAgLyoqIEB2YXIgRnJvbnRlbmRNb25zdGVyICovXG4gICAgdGhpcy5wYXJlbnRNb25zdGVyID0gdGhpcy5wYXJlbnRXaW5kb3cuRnJvbnRlbmRNb25zdGVyO1xuICAgIHRoaXMucGFyZW50QnVpbGRlciA9IHRoaXMucGFyZW50TW9uc3Rlci5idWlsZGVyO1xuICAgIHRoaXMuY3VycmVudE1vbnN0ZXJDb250ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5lZGl0YWJsZSA9IG5ldyBFZGl0YWJsZSgpO1xuICAgIHRoaXMubWFrZUl0TW92ZSgpO1xuICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVIYW5kbGVycygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgJCgoKSA9PiB7XG4gICAgICB0aGlzLnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAgIHRoaXMuaW5pdFByb3ZpZGVycygpO1xuICAgIH0pO1xuICAgIHRoaXMuTW9uc3RlckVkaXREYXRhID0gd2luZG93Lk1PTlNURVJfRURJVF9NT0RFX0RBVEE7XG5cbiAgfVxuXG4gIGluaXRQcm92aWRlcnMoKSB7XG4gICAgdGhpcy5wcm92aWRlcnMgPSB7XG4gICAgICBsYXlvdXQ6IHRoaXMuZ2V0UHJvdmlkZXJzKHRoaXMuTW9uc3RlckVkaXREYXRhLmxheW91dCksXG4gICAgICB0ZW1wbGF0ZTogdGhpcy5nZXRQcm92aWRlcnModGhpcy5Nb25zdGVyRWRpdERhdGEudGVtcGxhdGUpLFxuICAgICAgZW50aXR5OiB0aGlzLmdldFByb3ZpZGVycyh0aGlzLk1vbnN0ZXJFZGl0RGF0YS5lbnRpdHkpLFxuICAgIH07XG4gIH1cblxuICBzZXQgcGFnZVN0cnVjdHVyZUpzb24odmFsdWUpIHtcbiAgICB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHBhZ2VTdHJ1Y3R1cmVKc29uKCkge1xuICAgIHJldHVybiB0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uRGF0YTtcbiAgfVxuXG4gIGdldFByb3ZpZGVycyhhcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhhcnIucHJvdmlkZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBwcm92aWRlckRlY2wgPSBhcnIucHJvdmlkZXJzW2tleV07XG4gICAgICByZXN1bHRba2V5XSA9IERhdGFQcm92aWRlckZhY3RvcnkuZmFjdG9yeShcbiAgICAgICAgcHJvdmlkZXJEZWNsLFxuICAgICAgICBhcnIucHJvdmlkZWRLZXlzW2tleV0gfHwge31cbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldCAkbW9uc3RlckNvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGUpIHtcbiAgICAgIHJldHVybiB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hNb25zdGVyQ29udGVudENhY2hlKCk7XG4gICAgcmV0dXJuIHRoaXMuJG1vbnN0ZXJDb250ZW50Q2FjaGU7XG4gIH1cblxuICByZWZyZXNoTW9uc3RlckNvbnRlbnRDYWNoZSgpIHtcbiAgICB0aGlzLiRtb25zdGVyQ29udGVudENhY2hlID0ge307XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgJCh0aGlzLnNldHRpbmdzWydtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InXSkuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgaWYgKCF0aGF0LmN1cnJlbnRNb25zdGVyQ29udGVudCkge1xuICAgICAgICB0aGF0LmN1cnJlbnRNb25zdGVyQ29udGVudCA9ICQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyk7XG4gICAgICB9XG4gICAgICB0aGF0LiRtb25zdGVyQ29udGVudENhY2hlWyQodGhpcykuZGF0YSgndW5pcXVlQ29udGVudElkJyldID0gJCh0aGlzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUhhbmRsZXJzKCkge1xuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsICYmIHRoaXMuJGhhbmRsZXJzKSB7XG4gICAgICB0aGlzLiRoYW5kbGVycy5jc3MoXG4gICAgICAgICd0b3AnLFxuICAgICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLnBvc2l0aW9uKCkudG9wXG4gICAgICAgICAgKyB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLmhlaWdodCgpXG4gICAgICAgICAgLSB0aGlzLiRoYW5kbGVycy5oZWlnaHQoKVxuICAgICAgKTtcbiAgICAgIHRoaXMuJHNlbGVjdGVkTWF0ZXJpYWwuYWRkQ2xhc3MoJ20tbW9uc3Rlci1jb250ZW50X19tYXRlcmlhbC0tYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgbWFrZUl0TW92ZSgpIHtcbiAgICB0aGlzLiRoYW5kbGVycyA9ICQoYFxuPGRpdiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNcIj5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX2NvbmZpZ3VyZVwiPlxuICAgIDxpIGNsYXNzPVwiZmEgZmEtY29nXCI+PC9pPlxuICA8L2E+XG4gIDxzcGFuIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fYmxvY2stbmFtZVwiPkJsb2NrIG5hbWUgaGVyZTwvc3Bhbj5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX21vdmUtdXBcIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXVwXCI+PC9pPlxuICA8L2E+XG4gIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLWRvd25cIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvd25cIj48L2k+XG4gIDwvYT5cbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX2Nsb25lXCI+XG4gICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9uZVwiPjwvaT5cbiAgPC9hPlxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9uc3Rlci1ibG9jay1oYW5kbGVyc19fcmVtb3ZlXCI+XG4gICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT5cbiAgPC9hPlxuPC9kaXY+YCk7XG4gICAgJCgnYm9keScpLmFwcGVuZCh0aGlzLiRoYW5kbGVycyk7XG4gICAgdGhpcy4kaGFuZGxlcnMuaGlkZSgpO1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICQodGhpcy5zZXR0aW5nc1snbW9uc3Rlci1jb250ZW50LXNlbGVjdG9yJ10pLm9uKHtcbiAgICAgIG1vdXNlZW50ZXI6IGZ1bmN0aW9uIGhvdmVySW4oKSB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ20tbW9uc3Rlci1jb250ZW50X19tYXRlcmlhbC0taGlnaGxpZ2h0ZWQnKTtcbiAgICAgIH0sXG4gICAgICBtb3VzZWxlYXZlOiBmdW5jdGlvbiBob3Zlck91dCgpIHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnbS1tb25zdGVyLWNvbnRlbnRfX21hdGVyaWFsLS1oaWdobGlnaHRlZCcpO1xuICAgICAgfSxcbiAgICAgIGNsaWNrOiBmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgdGhhdC5zZWxlY3RNYXRlcmlhbCgkdGhpcyk7XG4gICAgICB9LFxuICAgIH0sICdbZGF0YS1pcy1tYXRlcmlhbF0nKTtcbiAgICB0aGF0LiRoYW5kbGVyc1xuICAgICAgLm9uKCdjbGljaycsICcubW9uc3Rlci1ibG9jay1oYW5kbGVyc19fbW92ZS11cCcsICgpID0+IHtcbiAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICBjb25zdCAkcHJldiA9IHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwucHJldignW2RhdGEtaXMtbWF0ZXJpYWxdJyk7XG4gICAgICAgICAgaWYgKCRwcmV2Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbC5pbnNlcnRCZWZvcmUoJHByZXYpO1xuICAgICAgICAgICAgdGhhdC51cGRhdGVIYW5kbGVycygpO1xuICAgICAgICAgICAgdGhhdC5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19tb3ZlLWRvd24nLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGF0LiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICAgICAgY29uc3QgJG5leHQgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLm5leHQoJ1tkYXRhLWlzLW1hdGVyaWFsXScpO1xuICAgICAgICAgIGlmICgkbmV4dC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwuaW5zZXJ0QWZ0ZXIoJG5leHQpO1xuICAgICAgICAgICAgdGhhdC51cGRhdGVIYW5kbGVycygpO1xuICAgICAgICAgICAgdGhhdC5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgJy5tb25zdGVyLWJsb2NrLWhhbmRsZXJzX19jbG9uZScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICBjb25zdCAkY2xvbmVkTWF0ZXJpYWwgPSB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLmNsb25lKCk7XG4gICAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSB1bmlxdWVJZCgnbWF0Jyk7XG4gICAgICAgICAgJGNsb25lZE1hdGVyaWFsXG4gICAgICAgICAgICAuaW5zZXJ0QWZ0ZXIodGhhdC4kc2VsZWN0ZWRNYXRlcmlhbClcbiAgICAgICAgICAgIC5kYXRhKFxuICAgICAgICAgICAgICAnbWF0ZXJpYWxJbmRleCcsXG4gICAgICAgICAgICAgIHJhbmRvbUluZGV4XG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYXR0cignZGF0YS1tYXRlcmlhbC1pbmRleCcsIHJhbmRvbUluZGV4KTtcbiAgICAgICAgICB0aGF0LnNlbGVjdE1hdGVyaWFsKCRjbG9uZWRNYXRlcmlhbCk7XG4gICAgICAgICAgdGhhdC5wYXJlbnRCdWlsZGVyLnBhZ2VDaGFuZ2VkKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCAnLm1vbnN0ZXItYmxvY2staGFuZGxlcnNfX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoYXQuJHNlbGVjdGVkTWF0ZXJpYWwpIHtcbiAgICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIG1hdGVyaWFsPycpKSB7XG4gICAgICAgICAgICB0aGF0LiRzZWxlY3RlZE1hdGVyaWFsLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhhdC4kc2VsZWN0ZWRNYXRlcmlhbCA9IG51bGw7XG4gICAgICAgICAgICB0aGF0LiRoYW5kbGVycy5oaWRlKCk7IC8vIGl0IGRvZXMgbm90IHdvcmsuIHdoeT8gTmVlZCB0byBmaXghXG4gICAgICAgICAgICB0aGF0LnBhcmVudEJ1aWxkZXIucGFnZUNoYW5nZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBzZWxlY3RNYXRlcmlhbCgkbWF0ZXJpYWwpIHtcbiAgICBpZiAodGhpcy4kc2VsZWN0ZWRNYXRlcmlhbCA9PT0gJG1hdGVyaWFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLiRzZWxlY3RlZE1hdGVyaWFsKSB7XG4gICAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsLnJlbW92ZUNsYXNzKCdtLW1vbnN0ZXItY29udGVudF9fbWF0ZXJpYWwtLWFjdGl2ZScpO1xuICAgIH1cbiAgICB0aGlzLiRzZWxlY3RlZE1hdGVyaWFsID0gJG1hdGVyaWFsO1xuICAgIHRoaXMudXBkYXRlSGFuZGxlcnMoKTtcbiAgICB0aGlzLiRoYW5kbGVycy5zaG93KCk7XG4gIH1cblxuICBzZXJpYWxpemVDb250ZW50KGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgT2JqZWN0LmtleXModGhpcy4kbW9uc3RlckNvbnRlbnQpLmZvckVhY2godW5pcXVlQ29udGVudElkID0+IHtcbiAgICAgIGNvbnN0ICRtb25zdGVyID0gdGhpcy4kbW9uc3RlckNvbnRlbnRbdW5pcXVlQ29udGVudElkXTtcbiAgICAgIHJlc3VsdFskbW9uc3Rlci5kYXRhKCd1bmlxdWVDb250ZW50SWQnKV0gPSB0aGF0LnNlcmlhbGl6ZVVuaXF1ZUNvbnRlbnQoJG1vbnN0ZXIpO1xuICAgIH0pO1xuICAgIHRoaXMuc2VuZFRvQnVpbGRlcihjYWxsYmFjaywgW3Jlc3VsdF0pO1xuICB9XG5cbiAgc2VyaWFsaXplVW5pcXVlQ29udGVudCgkbW9uc3RlckNvbnRlbnQpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICByZXN1bHQudW5pcXVlQ29udGVudElkID0gJG1vbnN0ZXJDb250ZW50LmRhdGEoJ3VuaXF1ZUNvbnRlbnRJZCcpO1xuICAgIHJlc3VsdC5tYXRlcmlhbHMgPSB7fTtcbiAgICAkbW9uc3RlckNvbnRlbnQuZmluZCgnW2RhdGEtaXMtbWF0ZXJpYWw9XFwnMVxcJ10nKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICBjb25zdCBtYXRlcmlhbCA9IHt9O1xuICAgICAgbWF0ZXJpYWwuYmxvY2sgPSAkKHRoaXMpLmRhdGEoJ21hdGVyaWFsQmxvY2snKTtcbiAgICAgIHJlc3VsdC5tYXRlcmlhbHNbJCh0aGlzKS5kYXRhKCdtYXRlcmlhbEluZGV4JyldID0gbWF0ZXJpYWw7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIFZpc3VhbEZyYW1lIHNldHRpbmdzLlxuICAgKiBVc2VzIFZpc3VhbEZyYW1lU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuVmlzdWFsRnJhbWVTZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICdtb25zdGVyLWNvbnRlbnQtc2VsZWN0b3InOiAnLm0tbW9uc3Rlci1jb250ZW50X19jb250ZW50JyxcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHVzZXJTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgfVxuXG4gIHNlbmRUb0J1aWxkZXIoZnVuYywgYXJncykge1xuICAgIEZyYW1lQXBpLnNlbmRNZXNzYWdlKHRoaXMucGFyZW50V2luZG93LCBmdW5jLCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JtU3VibWl0KGRhdGEpIHtcbiAgICBjb25zdCAkZm9ybSA9ICQoJzxmb3JtIG1ldGhvZD1cIlBPU1RcIj48L2Zvcm0+Jyk7XG4gICAgY29uc3QgJGlucHV0ID0gJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX19qc29uXCI+Jyk7XG4gICAgY29uc3QgJGNzcmYgPSAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiPicpO1xuXG4gICAgJGNzcmZcbiAgICAgIC5hdHRyKCduYW1lJywgJCgnbWV0YVtuYW1lPWNzcmYtcGFyYW1dJykuYXR0cignY29udGVudCcpKVxuICAgICAgLnZhbCgkKCdtZXRhW25hbWU9Y3NyZi10b2tlbl0nKS5hdHRyKCdjb250ZW50JykpXG4gICAgICAuYXBwZW5kVG8oJGZvcm0pO1xuXG4gICAgJGlucHV0XG4gICAgICAudmFsKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgLmFwcGVuZFRvKCRmb3JtKTtcblxuICAgICRmb3JtWzBdLnN1Ym1pdCgpO1xuICB9XG5cbiAgY29uc3RydWN0VGVtcGxhdGVEYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm92aWRlcnNFbnRpdGllczogdGhpcy5wYXJlbnRCdWlsZGVyLnNlcmlhbGl6ZSgpLFxuICAgICAgcmVnaW9uc01hdGVyaWFsczogdGhpcy5wYXJlbnRCdWlsZGVyXG4gICAgICAgIC5lbnZpcm9ubWVudHMuZ2V0KCdwYWdlLXN0cnVjdHVyZScpLm1hdGVyaWFsc0J5UmVnaW9ucygpLFxuICAgIH07XG4gIH1cblxuICBuZXdCbG9jayhtYXRlcmlhbE5hbWUsIHJlZ2lvbk5hbWUpIHtcbiAgICAvLyBAdG9kbyBBZGQgbG9hZGVyIGhlcmUgYXMgd2UgYXJlIHVzaW5nIGZvcm0gcG9zdCAhXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSB1bmlxdWVJZCgnbWF0Jyk7XG4gICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgIHRlbXBsYXRlOiB0aGlzLmNvbnN0cnVjdFRlbXBsYXRlRGF0YSgpLFxuICAgICAgYWN0aW9uOiAncHJldmlldycsXG4gICAgfTtcbiAgICBpZiAobmV3RGF0YS50ZW1wbGF0ZS5yZWdpb25zTWF0ZXJpYWxzLmhhc093blByb3BlcnR5KHJlZ2lvbk5hbWUpID09PSBmYWxzZSkge1xuICAgICAgbmV3RGF0YS50ZW1wbGF0ZS5yZWdpb25zTWF0ZXJpYWxzW3JlZ2lvbk5hbWVdID0ge307XG4gICAgfVxuICAgIC8vIHdlIGFyZSBtb2RpZnlpbmcgdGVtcGxhdGUgZGF0YSBieSBhZGRpbmcgbmV3IG1hdGVyaWFsIGludG8gbmVlZGVkIHJlZ2lvblxuICAgIG5ld0RhdGEudGVtcGxhdGUucmVnaW9uc01hdGVyaWFsc1tyZWdpb25OYW1lXS5kZWNsW3JhbmRvbUluZGV4XSA9IHtcbiAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbE5hbWUsXG4gICAgfTtcbiAgICBuZXdEYXRhLnRlbXBsYXRlLnJlZ2lvbnNNYXRlcmlhbHNbcmVnaW9uTmFtZV0ubWF0ZXJpYWxzT3JkZXIucHVzaChyYW5kb21JbmRleCk7XG4gICAgVmlzdWFsRnJhbWUuZm9ybVN1Ym1pdChuZXdEYXRhKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuaXRlcmF0ZVRlbXBsYXRlVHlwZSh0aGlzLnBhZ2VTdHJ1Y3R1cmVKc29uKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBkZWJ1Z2dlcjtcbiAgICBWaXN1YWxGcmFtZS5mb3JtU3VibWl0KGRhdGEpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGl0ZXJhdGVUZW1wbGF0ZVR5cGUoYXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgZW50aXR5OiB7XG4gICAgICAgIG1hdGVyaWFsc0J5UmVnaW9uRGVjbDoge30sXG4gICAgICAgIHByb3ZpZGVyczoge30sXG4gICAgICB9LFxuICAgIH07XG4gICAgYXJyLmZvckVhY2gob2JqID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IG9iai5kYXRhLmlkO1xuICAgICAgY29uc3QgcmVnaW9uc1Jlc3VsdCA9IFZpc3VhbEZyYW1lLml0ZXJhdGVUZW1wbGF0ZVJlZ2lvbnMob2JqLmNoaWxkcmVuKTtcbiAgICAgIC8vIGxheW91dCBvciB0ZW1wbGF0ZVxuICAgICAgcmVzdWx0W2tleV0gPSB7XG4gICAgICAgIHRlbXBsYXRlUmVnaW9uczogcmVnaW9uc1Jlc3VsdC50ZW1wbGF0ZVJlZ2lvbnMsXG4gICAgICAgIHRlbXBsYXRlSWQ6IG9iai5kYXRhLnRlbXBsYXRlSWQsXG4gICAgICAgIHByb3ZpZGVyczoge30sXG4gICAgICB9O1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHJlZ2lvbnNSZXN1bHQuZW50aXR5TWF0ZXJpYWxzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHJlZ2lvbnNSZXN1bHQuZW50aXR5TWF0ZXJpYWxzKS5mb3JFYWNoKHJlZ2lvbktleSA9PiB7XG4gICAgICAgICAgcmVzdWx0LmVudGl0eS5tYXRlcmlhbHNCeVJlZ2lvbkRlY2xbcmVnaW9uS2V5XSA9IHJlZ2lvbnNSZXN1bHQuZW50aXR5TWF0ZXJpYWxzW3JlZ2lvbktleV07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0W2tleV0ucHJvdmlkZXJzID0gdGhpcy5zZXJpYWxpemVQcm92aWRlcnMoa2V5KTtcbiAgICB9KTtcbiAgICByZXN1bHQuZW50aXR5LnByb3ZpZGVycyA9IHRoaXMuc2VyaWFsaXplUHJvdmlkZXJzKCdlbnRpdHknKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2VyaWFsaXplUHJvdmlkZXJzKHR5cGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnByb3ZpZGVyc1t0eXBlXSkuZm9yRWFjaChwcm92aWRlcktleSA9PiB7XG4gICAgICByZXN1bHRbcHJvdmlkZXJLZXldID0gdGhpcy5wcm92aWRlcnNbdHlwZV1bcHJvdmlkZXJLZXldLnNlcmlhbGl6ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgaXRlcmF0ZVRlbXBsYXRlUmVnaW9ucyhhcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICB0ZW1wbGF0ZVJlZ2lvbnM6IHt9LFxuICAgICAgZW50aXR5TWF0ZXJpYWxzOiB7fSxcbiAgICB9O1xuICAgIGFyci5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAvLyBjb25zdCBrZXkgPSBvYmouZGF0YS5pZC5yZXBsYWNlKC9eLipcXC4vLCAnJyk7XG4gICAgICBjb25zdCByZWdpb25LZXkgPSBvYmouZGF0YS5yZWdpb25LZXk7XG4gICAgICBjb25zdCBlbnRpdHlEZXBlbmRlbnQgPSBvYmouZGF0YS5lbnRpdHlEZXBlbmRlbnQgfHwgZmFsc2U7XG5cbiAgICAgIGNvbnN0IHJlZ2lvbk1hdGVyaWFscyA9IFZpc3VhbEZyYW1lLml0ZXJhdGVNYXRlcmlhbHMob2JqLmNoaWxkcmVuLCByZWdpb25LZXkpO1xuXG4gICAgICBpZiAoZW50aXR5RGVwZW5kZW50ID09PSBmYWxzZSkge1xuICAgICAgICAvLyB0aGlzIGlzIGFuIGV4YWN0IHRlbXBsYXRlIHJlZ2lvblxuICAgICAgICByZXN1bHQudGVtcGxhdGVSZWdpb25zW3JlZ2lvbktleV0gPSB7XG4gICAgICAgICAgcmVnaW9uSWQ6IG9iai5kYXRhLnJlZ2lvbklkLFxuICAgICAgICAgIHJlZ2lvbktleSxcbiAgICAgICAgICB1bmlxdWVDb250ZW50SWQ6IG9iai5kYXRhLnVuaXF1ZUNvbnRlbnRJZCxcbiAgICAgICAgICBtYXRlcmlhbHNEZWNsczogcmVnaW9uTWF0ZXJpYWxzLFxuICAgICAgICAgIGVudGl0eURlcGVuZGVudCxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC50ZW1wbGF0ZVJlZ2lvbnNbcmVnaW9uS2V5XSA9IHtcbiAgICAgICAgICByZWdpb25JZDogb2JqLmRhdGEucmVnaW9uSWQsXG4gICAgICAgICAgcmVnaW9uS2V5LFxuICAgICAgICAgIHVuaXF1ZUNvbnRlbnRJZDogb2JqLmRhdGEudW5pcXVlQ29udGVudElkLFxuICAgICAgICAgIGVudGl0eURlcGVuZGVudCxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdGhpcyBpcyBlbnRpdHktZGVwZW5kZW50IHJlZ2lvblxuICAgICAgICByZXN1bHQuZW50aXR5TWF0ZXJpYWxzW3JlZ2lvbktleV0gPSByZWdpb25NYXRlcmlhbHM7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGl0ZXJhdGVNYXRlcmlhbHMoYXJyLCByZWdpb25LZXkpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBkZWNsOiB7fSxcbiAgICAgIG1hdGVyaWFsc09yZGVyOiBbXSxcbiAgICB9O1xuICAgIGFyci5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBvYmouZGF0YS5tYXRlcmlhbEluZGV4O1xuICAgICAgcmVzdWx0LmRlY2xba2V5XSA9IHtcbiAgICAgICAgLy8gZWRpdGFibGVzS2V5czogb2JqLmRhdGEuZWRpdGFibGVLZXlzLFxuICAgICAgICBtYXRlcmlhbDogb2JqLmRhdGEubWF0ZXJpYWxQYXRoLFxuICAgICAgfTtcbiAgICAgIHJlc3VsdC5tYXRlcmlhbHNPcmRlci5wdXNoKGtleSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaXN1YWxGcmFtZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvVmlzdWFsRnJhbWUuanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi92aXN1YWwtYnVpbGRlci9idW5kbGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImNsYXNzIERhdGFQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSwgcHJvdmlkZWRLZXlzKSB7XG4gICAgdGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgdGhpcy5wcm92aWRlZEtleXMgPSBwcm92aWRlZEtleXM7XG4gICAgdGhpcy5hc3NvY2lhdGlvbnMgPSB7fTtcbiAgICB0aGlzLmFzc29jaWF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHtFZGl0YWJsZX1cbiAgICovXG4gIHN0YXRpYyBnZXQgZWRpdGFibGUoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5Gcm9udGVuZE1vbnN0ZXIuVmlzdWFsRnJhbWUuZWRpdGFibGU7XG4gIH1cblxuICBhc3NvY2lhdGUoKSB7XG4gICAgdGhpcy5hc3NvY2lhdGlvbnMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnByb3ZpZGVkS2V5cykuZm9yRWFjaChyZWdpb25LZXkgPT4ge1xuICAgICAgY29uc3QgcmVnaW9uID0gdGhpcy5wcm92aWRlZEtleXNbcmVnaW9uS2V5XTtcbiAgICAgIGNvbnN0ICRyZWdpb24gPSAkKGBbZGF0YS1yZWdpb24ta2V5PVwiJHtyZWdpb25LZXl9XCJdYCkuZmlyc3QoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGAlY1JlZ2lvbjogJHtyZWdpb25LZXl9YCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkOyBiYWNrZ3JvdW5kOiAjMzMzJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZWdpb24pO1xuICAgICAgY29uc3QgbWF0ZXJpYWxzID0ge307XG4gICAgICBPYmplY3Qua2V5cyhyZWdpb24pLmZvckVhY2gobWF0ZXJpYWxLZXkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhS2V5cyA9IHJlZ2lvblttYXRlcmlhbEtleV07XG4gICAgICAgIGNvbnN0ICRtYXRlcmlhbCA9ICRyZWdpb24uZmluZChgW2RhdGEtbWF0ZXJpYWwtaW5kZXg9XCIke21hdGVyaWFsS2V5fVwiXWApLmZpcnN0KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAlY01hdGVyaWFsOiAke21hdGVyaWFsS2V5fWAsICdjb2xvcjogI2ZmZjsgZm9udC13ZWlnaHQ6IGJvbGQ7IGJhY2tncm91bmQ6ICM2OWYnKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJG1hdGVyaWFsKTtcbiAgICAgICAgaWYgKCRtYXRlcmlhbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbWF0ZXJpYWxzW21hdGVyaWFsS2V5XSA9IHtcbiAgICAgICAgICBkYXRhS2V5cyxcbiAgICAgICAgICAkbWF0ZXJpYWwsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsRWRpdGFibGVLZXlzID0gJG1hdGVyaWFsLmRhdGEoJ2VkaXRhYmxlS2V5cycpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVNYXRlcmlhbEVkaXQobWF0ZXJpYWxFZGl0YWJsZUtleXMsICRtYXRlcmlhbCwgZGF0YUtleXMpO1xuXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYXNzb2NpYXRpb25zW3JlZ2lvbktleV0gPSB7XG4gICAgICAgICRyZWdpb24sXG4gICAgICAgIG1hdGVyaWFscyxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXplTWF0ZXJpYWxFZGl0KG1hdGVyaWFsRWRpdGFibGVLZXlzLCAkcm9vdCwgZGF0YUtleXMsIHByZWZpeCA9ICcnKSB7XG4gICAgZGF0YUtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3Qgb2JqID0gbWF0ZXJpYWxFZGl0YWJsZUtleXNba2V5XSB8fCAnTk9fU1VDSF9LRVknO1xuICAgICAgaWYgKG9iaiA9PT0gJ05PX1NVQ0hfS0VZJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob2JqID09PSBPYmplY3Qob2JqKSkge1xuICAgICAgICAvLyBpdCdzIHJlY3Vyc2l2ZVxuICAgICAgICAvLyBmaXJzdCAtIGZpbmQgYWxsIGJsb2Nrc1xuICAgICAgICBjb25zdCAkYmxvY2tzID0gJHJvb3QuZmluZChgW2RhdGEtcmVjdXJzaXZlLWl0ZW09XCIke2tleX1cIl1gKTtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgJGJsb2Nrcy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAlYyBSZWN1cnNpdmUgaXRlbSAke2tleX0gIyR7Y291bnRlcn1gLCAnYmFja2dyb3VuZDogIzIyMjsgY29sb3I6ICNiYWRhNTUnKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgICAgICB0aGF0LmluaXRpYWxpemVNYXRlcmlhbEVkaXQob2JqLCAkdGhpcywgT2JqZWN0LmtleXMob2JqKSwgJ2l0ZW0uJyk7XG4gICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGl0J3MgcGxhaW4gZmllbGRcbiAgICAgICAgY29uc3QgJG5vZGUgPSAkcm9vdC5maW5kKGBbZGF0YS1lZGl0YWJsZS1rZXk9XCIke3ByZWZpeH0ke2tleX1cIl1gKS5maXJzdCgpO1xuICAgICAgICBpZiAoJG5vZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIERhdGFQcm92aWRlci5lZGl0YWJsZS5pbml0aWFsaXplRWRpdGFibGUoJG5vZGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgJWMgUGxhaW4gZmllbGQgZWRpdGFibGUgJHtwcmVmaXh9JHtrZXl9YCwgJ2JhY2tncm91bmQ6ICMyMjI7IGNvbG9yOiAjYmFkYTU1Jyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCRub2RlWzBdLm91dGVySFRNTCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIHNlcmlhbGl6ZUtleXMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5hc3NvY2lhdGlvbnMpLmZvckVhY2gocmVnaW9uS2V5ID0+IHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHRoaXMuYXNzb2NpYXRpb25zW3JlZ2lvbktleV07XG4gICAgICBjb25zdCAkcmVnaW9uID0gcmVnaW9uLiRyZWdpb247XG4gICAgICByZXN1bHRbcmVnaW9uS2V5XSA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMocmVnaW9uLm1hdGVyaWFscykuZm9yRWFjaChtYXRlcmlhbEtleSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFLZXlzID0gcmVnaW9uLm1hdGVyaWFsc1ttYXRlcmlhbEtleV0uZGF0YUtleXM7XG4gICAgICAgIGNvbnN0ICRtYXRlcmlhbCA9IHJlZ2lvbi5tYXRlcmlhbHNbbWF0ZXJpYWxLZXldLiRtYXRlcmlhbDtcbiAgICAgICAgcmVzdWx0W3JlZ2lvbktleV1bbWF0ZXJpYWxLZXldID0gdGhpcy5zZXJpYWxpemVNYXRlcmlhbChcbiAgICAgICAgICByZWdpb25LZXksXG4gICAgICAgICAgbWF0ZXJpYWxLZXksXG4gICAgICAgICAgZGF0YUtleXMsXG4gICAgICAgICAgJHJlZ2lvbixcbiAgICAgICAgICAkbWF0ZXJpYWxcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGNsYXNzOiB0aGlzLmNsYXNzTmFtZSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmZpbGxDb25maWcoZGF0YSk7XG4gIH1cblxuICBmaWxsQ29uZmlnKGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHNlcmlhbGl6ZU1hdGVyaWFsKHJlZ2lvbktleSwgbWF0ZXJpYWxLZXksIGRhdGFLZXlzLCAkcmVnaW9uLCAkbWF0ZXJpYWwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhUHJvdmlkZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0RhdGFQcm92aWRlci5qc1xuICoqLyIsImltcG9ydCBTdGF0aWNDb250ZW50IGZyb20gJy4vcHJvdmlkZXJzL1N0YXRpY0NvbnRlbnQnO1xuXG5jbGFzcyBEYXRhUHJvdmlkZXJGYWN0b3J5IHtcbiAgc3RhdGljIGZhY3RvcnkocHJvdmlkZXJEZWNsLCBwcm92aWRlZEtleXMpIHtcbiAgICBsZXQgcHJvdmlkZXIgPSBudWxsO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHByb3ZpZGVyRGVjbC5jbGFzc05hbWVcbiAgICAgIHx8ICdEb3RQbGFudFxcXFxNb25zdGVyXFxcXERhdGFFbnRpdHlcXFxcU3RhdGljQ29udGVudFByb3ZpZGVyJztcbiAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuICAgICAgY2FzZSAnRG90UGxhbnRcXFxcTW9uc3RlclxcXFxEYXRhRW50aXR5XFxcXFN0YXRpY0NvbnRlbnRQcm92aWRlcic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBwcm92aWRlciA9IG5ldyBTdGF0aWNDb250ZW50KHByb3ZpZGVkS2V5cyk7XG4gICAgfVxuICAgIHJldHVybiBwcm92aWRlcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhUHJvdmlkZXJGYWN0b3J5O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9EYXRhUHJvdmlkZXJGYWN0b3J5LmpzXG4gKiovIiwiaW1wb3J0IERhdGFQcm92aWRlciBmcm9tICcuLi9EYXRhUHJvdmlkZXInO1xuXG5jbGFzcyBTdGF0aWNDb250ZW50IGV4dGVuZHMgRGF0YVByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IocHJvdmlkZWRLZXlzKSB7XG4gICAgc3VwZXIoJ0RvdFBsYW50XFxcXE1vbnN0ZXJcXFxcRGF0YUVudGl0eVxcXFxTdGF0aWNDb250ZW50UHJvdmlkZXInLCBwcm92aWRlZEtleXMpO1xuICB9XG5cbiAgZmlsbENvbmZpZyhkYXRhKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGE7XG4gICAgbmV3RGF0YS5lbnRpdGllcyA9IHRoaXMuc2VyaWFsaXplS2V5cygpO1xuICAgIHJldHVybiBuZXdEYXRhO1xuICB9XG5cbiAgc2VyaWFsaXplTWF0ZXJpYWwocmVnaW9uS2V5LCBtYXRlcmlhbEtleSwgZGF0YUtleXMsICRyZWdpb24sICRtYXRlcmlhbCkge1xuICAgIGNvbnN0IG1hdGVyaWFsRWRpdGFibGVLZXlzID0gJG1hdGVyaWFsLmRhdGEoJ2VkaXRhYmxlS2V5cycpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucmVjdXJzaXZlU2VyaWFsaXplKG1hdGVyaWFsRWRpdGFibGVLZXlzLCAkbWF0ZXJpYWwsIGRhdGFLZXlzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmVjdXJzaXZlU2VyaWFsaXplKG1hdGVyaWFsRWRpdGFibGVLZXlzLCAkcm9vdCwgZGF0YUtleXMsIHByZWZpeCA9ICcnKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZGF0YUtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3Qgb2JqID0gbWF0ZXJpYWxFZGl0YWJsZUtleXNba2V5XSB8fCAnTk9fU1VDSF9LRVknO1xuICAgICAgaWYgKG9iaiA9PT0gJ05PX1NVQ0hfS0VZJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob2JqID09PSBPYmplY3Qob2JqKSkge1xuICAgICAgICAvLyBpdCdzIHJlY3Vyc2l2ZVxuICAgICAgICAvLyBmaXJzdCAtIGZpbmQgYWxsIGJsb2Nrc1xuICAgICAgICBjb25zdCAkYmxvY2tzID0gJHJvb3QuZmluZChgW2RhdGEtcmVjdXJzaXZlLWl0ZW09XCIke2tleX1cIl1gKTtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBbXTtcbiAgICAgICAgJGJsb2Nrcy5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgIHJlc3VsdFtrZXldLnB1c2godGhhdC5yZWN1cnNpdmVTZXJpYWxpemUob2JqLCAkdGhpcywgT2JqZWN0LmtleXMob2JqKSwgJ2l0ZW0uJykpO1xuICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpdCdzIHBsYWluIGZpZWxkXG4gICAgICAgIGNvbnN0ICRub2RlID0gJHJvb3QuZmluZChgW2RhdGEtZWRpdGFibGUta2V5PVwiJHtwcmVmaXh9JHtrZXl9XCJdYCkuZmlyc3QoKTtcbiAgICAgICAgaWYgKCRub2RlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRba2V5XSA9IERhdGFQcm92aWRlci5lZGl0YWJsZS5zZXJpYWxpemVFZGl0YWJsZSgkbm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0aWNDb250ZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9wcm92aWRlcnMvU3RhdGljQ29udGVudC5qc1xuICoqLyIsImNsYXNzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcblxuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBnZXQgZnJhbWUkKCkge1xuICAgIHJldHVybiB3aW5kb3cuJDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlRWRpdGFibGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvQmFzZUVkaXRhYmxlLmpzXG4gKiovIiwiaW1wb3J0IGFsbEVkaXRhYmxlcyBmcm9tICcuL2VkaXRhYmxlcy9hbGwnO1xuXG5jbGFzcyBFZGl0YWJsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZWRpdGFibGVzQnlUeXBlID0ge307XG4gICAgLy8gaW5pdGlhbGl6ZSBiYXNlIGJ1aWxkLWluIGVkaXRhYmxlc1xuICAgIGFsbEVkaXRhYmxlcygpO1xuICAgIHRoaXMuZWRpdGFibGVzQnlUeXBlID0gd2luZG93Lk1PTlNURVJfRURJVEFCTEVTO1xuICB9XG5cbiAgc2VyaWFsaXplRWRpdGFibGUoJG5vZGUpIHtcbiAgICBjb25zdCBlZGl0YWJsZSA9ICRub2RlLmRhdGEoJ2VkaXRhYmxlUGFyYW1zJyk7XG4gICAgaWYgKHR5cGVvZihlZGl0YWJsZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCB0eXBlID0gZWRpdGFibGUuaGFzT3duUHJvcGVydHkoJ3R5cGUnKSA/IGVkaXRhYmxlLnR5cGUgOiAnc3RyaW5nJztcbiAgICBpZiAodGhpcy5lZGl0YWJsZXNCeVR5cGUuaGFzT3duUHJvcGVydHkodHlwZSkgPT09IGZhbHNlKSB7XG4gICAgICB0eXBlID0gJ3N0cmluZyc7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwb3J0VmFyaWFibGUgPSBlZGl0YWJsZS5oYXNPd25Qcm9wZXJ0eSgndGFyZ2V0JykgPyBlZGl0YWJsZS50YXJnZXQgOiAnZGF0YSc7XG5cbiAgICByZXR1cm4gdGhpcy5lZGl0YWJsZXNCeVR5cGVbdHlwZV0uc2VyaWFsaXplTm9kZSgkbm9kZSwgZXhwb3J0VmFyaWFibGUpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3QgdHlwZSA9ICRub2RlLmRhdGEoJ2VkaXRhYmxlLXR5cGUnKSB8fCAndW5lZGl0YWJsZSc7XG4gICAgaWYgKHR5cGUgPT09ICd1bmVkaXRhYmxlJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdGFibGUgPSB0aGlzLmVkaXRhYmxlc0J5VHlwZVt0eXBlXSB8fCB0aGlzLmVkaXRhYmxlc0J5VHlwZS5zdHJpbmc7XG4gICAgcmV0dXJuIGVkaXRhYmxlLmluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdGFibGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL0VkaXRhYmxlLmpzXG4gKiovIiwiaW1wb3J0IEJhc2VFZGl0YWJsZSBmcm9tICcuL0Jhc2VFZGl0YWJsZSc7XG5cbmNsYXNzIFdZU0lXWUcgZXh0ZW5kcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IEJhc2VFZGl0YWJsZS5mcmFtZSQoJG5vZGUpO1xuICAgIGNvbnN0IGVkaXRvciA9IG5vZGUuZGF0YSgnZWRpdG9yJyk7XG4gICAgaWYgKGVkaXRvcikge1xuICAgICAgcmV0dXJuIGVkaXRvci5nZXREYXRhKCk7XG4gICAgfVxuICAgIHJldHVybiBub2RlLmh0bWwoKTtcbiAgfVxuXG4gIGluaXRpYWxpemVFZGl0YWJsZSgkbm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSAkbm9kZVswXTtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBhdXRvUGFyYWdyYXBoOiBmYWxzZSxcbiAgICAgIGVuYWJsZUNvbnRlbnRFZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGlnbm9yZUVtcHR5UGFyYWdyYXBoOiB0cnVlLFxuICAgICAgZW50ZXJNb2RlOiB3aW5kb3cuQ0tFRElUT1IuRU5URVJfQlIsXG4gICAgfTtcbiAgICAvLyAkKCgpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHdpbmRvdy5BbGxveUVkaXRvci5lZGl0YWJsZShub2RlLCBjb25maWcpLmdldCgnbmF0aXZlRWRpdG9yJyk7XG4gICAgICAkbm9kZS5kYXRhKCdlZGl0b3InLCBlZGl0b3IpO1xuICAgIC8vIH0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgV1lTSVdZRztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL1dZU0lXWUcuanNcbiAqKi8iLCJpbXBvcnQgV1lTSVdZRyBmcm9tICcuL1dZU0lXWUcnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9saW5rJztcbmltcG9ydCBUZXh0U3RyaW5nIGZyb20gJy4vc3RyaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWxsKCkge1xuICBpZiAodHlwZW9mKHdpbmRvdy5NT05TVEVSX0VESVRBQkxFUykgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTID0ge307XG4gIH1cbiAgd2luZG93Lk1PTlNURVJfRURJVEFCTEVTWyd3eXNpd3lnJ10gPSBuZXcgV1lTSVdZRygpO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ2xpbmsnXSA9IG5ldyBMaW5rKCk7XG4gIHdpbmRvdy5NT05TVEVSX0VESVRBQkxFU1snaW1hZ2UnXSA9IG5ldyBJbWFnZSgpO1xuICB3aW5kb3cuTU9OU1RFUl9FRElUQUJMRVNbJ3N0cmluZyddID0gbmV3IFRleHRTdHJpbmcoKTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zpc3VhbC1idWlsZGVyL2NvbXBvbmVudHMvdmlzdWFsLWZyYW1lL2VkaXRhYmxlcy9hbGwuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgSW1hZ2UgZXh0ZW5kcyBCYXNlRWRpdGFibGUge1xuICBzZXJpYWxpemVOb2RlKCRub2RlKSB7XG4gICAgY29uc3QgJGltZyA9ICRub2RlLmZpbmQoJ2ltZycpLmZpcnN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNyYzogJGltZy5hdHRyKCdzcmMnKSxcbiAgICAgIGFsdDogJGltZy5hdHRyKCdhbHQnKSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvaW1hZ2UuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgTGluayBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogJG5vZGUuZGF0YSgnb3JpZ2luYWxIcmVmJykgPyAkbm9kZS5kYXRhKCdvcmlnaW5hbEhyZWYnKSA6ICRub2RlLmF0dHIoJ2hyZWYnKSxcbiAgICAgIGFuY2hvcjogJG5vZGUuaHRtbCgpLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGluaztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdmlzdWFsLWJ1aWxkZXIvY29tcG9uZW50cy92aXN1YWwtZnJhbWUvZWRpdGFibGVzL2xpbmsuanNcbiAqKi8iLCJpbXBvcnQgQmFzZUVkaXRhYmxlIGZyb20gJy4vQmFzZUVkaXRhYmxlJztcblxuY2xhc3MgVGV4dFN0cmluZyBleHRlbmRzIEJhc2VFZGl0YWJsZSB7XG4gIHNlcmlhbGl6ZU5vZGUoJG5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gQmFzZUVkaXRhYmxlLmZyYW1lJCgkbm9kZSk7XG4gICAgY29uc3QgZWRpdG9yID0gbm9kZS5kYXRhKCdlZGl0b3InKTtcbiAgICBpZiAoZWRpdG9yKSB7XG4gICAgICByZXR1cm4gZWRpdG9yLmdldERhdGEoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUuaHRtbCgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVkaXRhYmxlKCRub2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9ICRub2RlWzBdO1xuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgYWxsb3dlZENvbnRlbnQ6ICdpIHUnLFxuICAgICAgdG9vbGJhcnM6IHtcbiAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgc2VsZWN0aW9uczogd2luZG93LkFsbG95RWRpdG9yLlNlbGVjdGlvbnMsXG4gICAgICAgICAgdGFiSW5kZXg6IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYXV0b1BhcmFncmFwaDogZmFsc2UsXG4gICAgICBlbmFibGVDb250ZW50RWRpdGFibGU6IHRydWUsXG4gICAgICBpZ25vcmVFbXB0eVBhcmFncmFwaDogdHJ1ZSxcbiAgICAgIGJsb2NrbGVzczogdHJ1ZSxcbiAgICAgIGVudGVyTW9kZTogd2luZG93LkNLRURJVE9SLkVOVEVSX0JSLFxuICAgIH07XG4gICAgLy8gJCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IHdpbmRvdy5BbGxveUVkaXRvci5lZGl0YWJsZShub2RlLCBjb25maWcpLmdldCgnbmF0aXZlRWRpdG9yJyk7XG4gICAgICBlZGl0b3Iub24oJ2tleScsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQuZGF0YS5rZXlDb2RlID09PSB3aW5kb3cuQ0tFRElUT1IuU0hJRlQgKyAxMykge1xuICAgICAgICAgIC8vIGFkZCBzYXZpbmcgZnVuY3Rpb24gaGVyZVxuICAgICAgICAgIGV2ZW50LmNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGVkaXRvci5vbigncGFzdGUnLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LmRhdGEuZGF0YVZhbHVlID0gZXZlbnQuZGF0YS5kYXRhVmFsdWUucmVwbGFjZSgvPGJyW1xcc1xcL10qPi9nbWksICcgJyk7XG4gICAgICB9KTtcbiAgICAgICRub2RlLmRhdGEoJ2VkaXRvcicsIGVkaXRvcik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coJG5vZGUsIG5vZGUpO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gICAgLy8gfSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0U3RyaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92aXN1YWwtYnVpbGRlci9jb21wb25lbnRzL3Zpc3VhbC1mcmFtZS9lZGl0YWJsZXMvc3RyaW5nLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==