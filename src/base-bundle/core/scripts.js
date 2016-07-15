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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(28);
	
	__webpack_require__(8);
	
	var _MonsterBem = __webpack_require__(7);
	
	var _MonsterBem2 = _interopRequireDefault(_MonsterBem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Reconfigure BEM naming
	$.BEM.setConfig({
	  namePattern: '[a-zA-Z0-9\\-]+',
	  elemPrefix: '__',
	  modPrefix: '--',
	  modDlmtr: '_'
	});
	
	// Documentation is located at https://github.com/zenwalker/jquery-bem#jquerybem
	
	
	window.MonsterBem = new _MonsterBem2.default();
	
	/* global $ */
	$(function () {
	  window.MonsterBem.update();
	});

/***/ },

/***/ 7:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MonsterBem = function () {
	  function MonsterBem() {
	    _classCallCheck(this, MonsterBem);
	
	    this.params();
	    this.blockCallbacks = {};
	  }
	
	  /**
	   * Sets MonsterBem settings.
	   * Uses MonsterBemSettings variable if provided or default values instead.
	   */
	
	
	  _createClass(MonsterBem, [{
	    key: 'params',
	    value: function params() {
	      var userSettings = window.MonsterBemSettings || {};
	      var settings = {};
	      Object.keys(userSettings).forEach(function (key) {
	        settings[key] = userSettings[key];
	      });
	      this.settings = settings;
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      var _this = this;
	
	      Object.keys(this.blockCallbacks).forEach(function (blockName) {
	        var callback = _this.blockCallbacks[blockName];
	        $('.' + blockName + '.m-js').each(function iter() {
	          var $this = $(this);
	          callback.call($this, blockName);
	          $this.removeClass('m-js').addClass('m-js-initialized');
	        });
	      });
	    }
	  }]);
	
	  return MonsterBem;
	}();
	
	exports.default = MonsterBem;

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/* @required jQuery */
	/**
	 * This is modified version of jquery-bem adding some new functions
	 */
	
	(function (root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(30)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
	    factory(require('jquery'));
	  } else {
	    factory(root.jQuery);
	  }
	})(undefined, function ($, undefined) {
	
	  /**
	   * Base BEM class.
	   * @constructor
	   */
	  function BEM(config) {
	    this.setConfig(config);
	  };
	
	  /**
	   * Set the config for the plugin
	   * @param {Object} config - defaults in br
	   * @param {String} [config.elemPrefix] - Element prefix (default: '__')
	   * @param {String} [config.modPrefix] - Modifier prefix (default: '_')
	   * @param {String} [config.modDlmtr] - Modifier delimiter (default: '_')
	   * @param {String} [config.namePattern] -
	   *   Pattern to match valid block names (default: '[a-zA-Z0-9-]+')
	   */
	  BEM.prototype.setConfig = function (config) {
	    this.config = $.extend({}, {
	      namePattern: '[a-zA-Z0-9\\-]+',
	      elemPrefix: '__',
	      modPrefix: '--',
	      modDlmtr: '_'
	    }, config);
	
	    this.blockClassRe = this.buildBlockClassRe();
	    this.elemClassRe = this.buildElemClassRe();
	    this.modClassRe = this.buildModClassRe();
	  };
	
	  /**
	   * Get parent block of element.
	   * @public
	   *
	   * @param {Object} $this
	   * @return {Object}
	   */
	  BEM.prototype.getBlock = function ($this) {
	    var blockClass = this.getBlockClass($this),
	        block = $this.closest('.' + blockClass);
	
	    block.selector = blockClass;
	    return block;
	  };
	
	  /**
	   * Switch block context.
	   * @public
	   *
	   * @param {Object} $this
	   * @param {String} block
	   * @param {String} [elem]
	   * @return {Object}
	   */
	  BEM.prototype.switchBlock = function ($this, block, elem) {
	    var elem = elem || null;
	
	    elem ? $this.selector = this.buildSelector({ block: block, elem: elem }) : $this.selector = this.buildSelector({ block: block });
	
	    return $this;
	  };
	
	  /**
	   * Find element in block.
	   * @public
	   *
	   * @param  {Object}  $this    DOM element
	   * @param  {String}  elemKey  Element name
	   * @return {Object}
	   */
	  BEM.prototype.findElem = function ($this, elemKey) {
	    var blockClass = this.getBlockClass($this),
	        elemSelector = '.' + this.buildElemClass(blockClass, elemKey),
	        elem = $this.is(elemSelector) ? $this : $this.find(elemSelector);
	
	    return elem;
	  };
	
	  /**
	   * Get value of modifier.
	   * @public
	   *
	   * @param {Object} $this
	   * @param {String} modKey
	   * @return {String}
	   */
	  BEM.prototype.getMod = function ($this, modKey) {
	    var mods = this.extractMods($this.first());
	
	    if (mods[modKey] != undefined) return mods[modKey];
	    return null;
	  };
	
	  /**
	   * Check modifier of element.
	   * @public
	   *
	   * @param {Object} $this
	   * @param {String} modKey
	   * @param {String} [modVal]
	   * @return {Boolean}
	   */
	  BEM.prototype.hasMod = function ($this, modKey, modVal) {
	    var mods = this.extractMods($this.first());
	
	    if (modVal) {
	      if (mods[modKey] == modVal) return true;
	    } else {
	      if (mods[modKey]) return true;
	    }
	
	    return false;
	  };
	
	  /**
	   * Set modifier on element.
	   * @public
	   *
	   * @param {Object} $this
	   * @param {String} modKey
	   * @param {String} [modVal]
	   * @param {Object}
	   */
	  BEM.prototype.setMod = function ($this, modKey, modVal) {
	    var self = this,
	        selector = $this.selector;
	
	    $this.each(function () {
	      var current = $(this);
	      current.selector = selector;
	
	      var mods = self.extractMods(current),
	          baseName = self.getBaseClass(current);
	
	      if (mods[modKey] != undefined) {
	        var oldModName = self.buildModClass(baseName, modKey, mods[modKey]);
	        current.removeClass(oldModName);
	      }
	
	      if (modVal !== false) {
	        var newModName = self.buildModClass(baseName, modKey, modVal);
	      }
	
	      current.addClass(newModName).trigger('setmod', [modKey, modVal]);
	    });
	
	    return $this;
	  };
	
	  /**
	   * Delete modifier on element.
	   * @public
	   *
	   * @param {Object} $this
	   * @param {String} modKey
	   * @param {String} [modVal]
	   * @param {Object}
	   */
	  BEM.prototype.delMod = function ($this, modKey, modVal) {
	    var self = this,
	        selector = $this.selector;
	
	    $this.each(function () {
	      var current = $(this);
	      current.selector = selector;
	
	      var mods = self.extractMods(current),
	          baseName = self.getBaseClass(current);
	
	      if (modVal) {
	        if (mods[modKey] == modVal) {
	          var modName = self.buildModClass(baseName, modKey, mods[modKey]);
	        }
	      } else {
	        var modName = self.buildModClass(baseName, modKey, mods[modKey]);
	      }
	
	      current.removeClass(modName).trigger('delmod', [modKey, modVal]);
	    });
	
	    return $this;
	  };
	
	  /**
	   * Filtering elements by modifier.
	   * @public
	   *
	   * @param {Object} $this
	   * @param {String} modKey
	   * @param {String} [modVal]
	   * @param {Boolean} [inverse]
	   * @return {Object}
	   */
	  BEM.prototype.byMod = function ($this, modKey, modVal, inverse) {
	    var self = this,
	        modVal = modVal || null,
	        inverse = inverse || false,
	        selector = $this.selector,
	        result = $();
	
	    $this.each(function () {
	      var current = $(this);
	      current.selector = selector;
	
	      var mods = self.extractMods(current),
	          baseName = self.getBaseClass(current);
	
	      if (modVal) {
	        if (mods[modKey] == modVal) {
	          var modName = self.buildModClass(baseName, modKey, mods[modKey]);
	        }
	      } else {
	        if (mods[modKey] != undefined) {
	          var modName = self.buildModClass(baseName, modKey, mods[modKey]);
	        }
	      }
	
	      result = result.add(inverse ? current.not('.' + modName) : current.filter('.' + modName));
	    });
	
	    result.selector = selector;
	    return result;
	  };
	
	  /**
	   * Get block names from element.
	   * @protected
	   *
	   * @param {Object|String} $this
	   * @return {Object}
	   */
	  BEM.prototype.extractBlocks = function ($this) {
	    var self = this,
	        result = [],
	        selectors = this.getClasses($this);
	
	    $.each(selectors, function (i, sel) {
	      var type = self.getClassType(sel);
	
	      if (type == 'block') {
	        result.push(sel);
	      } else if (type == 'elem') {
	        var elem = sel.split(self.config.elemPrefix);
	        result.push(elem[0]);
	      }
	    });
	
	    return result;
	  };
	
	  /**
	   * Get element names from element.
	   * @protected
	   *
	   * @param {Object} $this
	   * @return {Object}
	   */
	  BEM.prototype.extractElems = function ($this) {
	    var self = this,
	        result = [];
	
	    $.each(self.getClasses($this), function (i, className) {
	      if (self.getClassType(className) == 'elem') {
	        var elemName = className.split(self.config.elemPrefix);
	        result.push(elemName[1]);
	      }
	    });
	
	    return result;
	  };
	
	  /**
	   * Get modifiers from element.
	   * @protected
	   *
	   * @param {Object} $this
	   * @return {Object}
	   */
	  BEM.prototype.extractMods = function ($this) {
	    var self = this,
	        result = {};
	
	    $this.each(function () {
	      var $this = $(this);
	
	      $.each(self.getClasses($this), function (i, className) {
	        if (self.getClassType(className) == 'mod') {
	          var re = self.buildModClassRe().exec(className);
	          var modName = re[1].split(self.config.modDlmtr);
	
	          if (modName[1] !== undefined && modName[1] !== false) {
	            var modVal = modName[1];
	          } else {
	            var modVal = true;
	          }
	
	          result[modName[0]] = modVal;
	        }
	      });
	    });
	
	    return result;
	  };
	
	  /**
	   * Get classes names from element.
	   * @protected
	   *
	   * @param {Object} $this
	   * @return {Object}
	   */
	  BEM.prototype.getClasses = function ($this) {
	    var classes,
	        result = [];
	
	    if ((typeof $this === 'undefined' ? 'undefined' : _typeof($this)) == 'object') {
	
	      if ($this.selector.indexOf('.') === 0) {
	        classes = $this.selector.split('.');
	      } else if ($this.attr('class') != undefined) {
	        classes = $this.attr('class').split(' ');
	      } else {
	        return null;
	      }
	    } else {
	      classes = $this.split('.');
	    }
	
	    $.each(classes, function (i, className) {
	      if (className != '') result.push($.trim(className));
	    });
	
	    return result;
	  };
	
	  /**
	   * Build regexp for blocks.
	   * @protected
	   *
	   * @return {RegExp}
	   */
	  BEM.prototype.buildBlockClassRe = function () {
	    return new RegExp('^(' + this.config.namePattern + ')$');
	  };
	
	  /**
	   * Build regexp for elements.
	   * @protected
	   *
	   * @return {RegExp}
	   */
	  BEM.prototype.buildElemClassRe = function () {
	    return new RegExp('^' + this.config.namePattern + this.config.elemPrefix + '(' + this.config.namePattern + ')$');
	  };
	
	  /**
	   * Build regexp for modifiers.
	   * @protected
	   *
	   * @return {RegExp}
	   */
	  BEM.prototype.buildModClassRe = function () {
	    return new RegExp('^(?:' + this.config.namePattern + '|' + this.config.namePattern + this.config.elemPrefix + this.config.namePattern + ')' + this.config.modPrefix + '(' + this.config.namePattern + '((' + this.config.modDlmtr + this.config.namePattern + ')$|$))');
	  };
	
	  /**
	   * Build class name for block.
	   * @protected
	   *
	   * @param {String} blockName
	   * @return {String}
	   */
	  BEM.prototype.buildBlockClass = function (blockName) {
	    return blockName;
	  };
	
	  /**
	   * Build class name for element.
	   * @protected
	   *
	   * @param {String} blockName
	   * @param {String} elemKey
	   * @return {String}
	   */
	  BEM.prototype.buildElemClass = function (blockName, elemKey) {
	    return blockName + this.config.elemPrefix + elemKey;
	  };
	
	  /**
	   * Build class name for modifier.
	   * @protected
	   *
	   * @param {String} blockName
	   * @param {String} modKey
	   * @param {String} modVal
	   * @return {String}
	   */
	  BEM.prototype.buildModClass = function (baseClass, modKey, modVal) {
	    if (modVal !== undefined && modVal !== true) {
	      return baseClass + this.config.modPrefix + modKey + this.config.modDlmtr + modVal;
	    } else {
	      return baseClass + this.config.modPrefix + modKey;
	    }
	  };
	
	  /**
	   * Build selector from object or string.
	   * @private
	   *
	   * @param {String|Object}
	   * @param {String}
	   * @return {String}
	   */
	  BEM.prototype.buildSelector = function (selector, prefix) {
	    if (prefix !== '') {
	      var prefix = prefix || '.';
	    }
	
	    if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object') {
	      if (selector.block != undefined) {
	        var buildSelector = this.buildBlockClass(selector.block);
	
	        if (selector.elem != undefined) {
	          buildSelector = this.buildElemClass(buildSelector, selector.elem);
	        }
	
	        if (selector.mod != undefined) {
	          var mod = selector.mod.split(':');
	          buildSelector = this.buildModClass(buildSelector, mod[0], mod[1]);
	        }
	      }
	    }
	
	    return buildSelector != undefined ? prefix + buildSelector : prefix + selector;
	  };
	
	  /**
	   * Build class name for block.
	   * @protected
	   *
	   * @param {Object|String} $this
	   * @param {Number} [index]
	   * @return {String}
	   */
	  BEM.prototype.getBlockClass = function ($this, index) {
	    var blockClasses = this.extractBlocks($this);
	    var index = index || 0;
	
	    return index <= blockClasses.length - 1 ? blockClasses[index] : null;
	  };
	
	  /**
	   * Get base class from element.
	   * @protected
	   *
	   * @param {Object} $this
	   * @return {String}
	   */
	  BEM.prototype.getBaseClass = function ($this) {
	    var self = this,
	        baseClass = null;
	    var selectors = this.getClasses($this);
	
	    $.each(selectors, function (i, sel) {
	      var classType = self.getClassType(sel);
	
	      if (classType && classType != 'mod') {
	        baseClass = sel;
	      }
	    });
	
	    return baseClass;
	  };
	
	  /**
	   * Get class type.
	   * @protected
	   *
	   * @param {String} className
	   * @return {String}
	   */
	  BEM.prototype.getClassType = function (className) {
	    if (this.modClassRe.test(className)) {
	      return 'mod';
	    } else if (this.elemClassRe.test(className)) {
	      return 'elem';
	    } else if (this.blockClassRe.test(className)) {
	      return 'block';
	    }
	    return null;
	  };
	
	  /**
	   * Create BEM instance.
	   */
	  $.BEM = new BEM();
	
	  /**
	   * Extend jQuery object.
	   */
	  $.fn.extend({
	    block: function block() {
	      return $.BEM.getBlock(this);
	    },
	
	    extractBlocks: function extractBlocks() {
	      return $.BEM.extractBlocks(this);
	    },
	
	    isBemBlock: function isBemBlock() {
	      var classes = this.attr('class').split(' ');
	      var isBlock = false;
	      classes.forEach(function (className) {
	        if ($.BEM.getClassType(className) === 'block') {
	          isBlock = true;
	        }
	      });
	      return isBlock;
	    },
	
	    blockSettings: function blockSettings(defaultSettings) {
	      var userSettings = this.data('mBemSettings') || {};
	      var settings = defaultSettings || {};
	      Object.keys(userSettings).forEach(function (key) {
	        settings[key] = userSettings[key];
	      });
	      return settings;
	    },
	
	    elem: function elem(ctx, elemKey) {
	      if (!elemKey) {
	        elemKey = ctx;
	        ctx = null;
	      }
	
	      return $.BEM.findElem(ctx || this, elemKey);
	    },
	
	    ctx: function ctx(block, elem) {
	      return $.BEM.switchBlock(this, block, elem);
	    },
	
	    mod: function mod(modKey, modVal) {
	      if (typeof modVal == 'undefined') {
	        modVal = null;
	      }
	
	      if (modVal === false) {
	        return $.BEM.delMod(this, modKey);
	      }
	
	      return modVal != null ? $.BEM.setMod(this, modKey, modVal) : $.BEM.getMod(this, modKey);
	    },
	
	    setMod: function setMod(modKey, modVal) {
	      return $.BEM.setMod(this, modKey, modVal);
	    },
	
	    delMod: function delMod(modKey, modVal) {
	      return $.BEM.delMod(this, modKey, modVal);
	    },
	
	    hasMod: function hasMod(modKey, modVal) {
	      return $.BEM.hasMod(this, modKey, modVal);
	    },
	
	    byMod: function byMod(modKey, modVal) {
	      return $.BEM.byMod(this, modKey, modVal);
	    },
	
	    byNotMod: function byNotMod(modKey, modVal) {
	      return $.BEM.byMod(this, modKey, modVal, 'inverse');
	    },
	
	    /**
	     * Toggle blocks's or elem's modifier `modKey` between `modVal1` and `modVal2`
	     * @param {String} modKey
	     * @param {String} modVal1
	     * @param {String} modVal2
	     * @return {*}
	     */
	    toggleMod: function toggleMod(modKey, modVal1, modVal2) {
	      if (this.hasMod(modKey, modVal1)) {
	        return this.delMod(modKey, modVal1).setMod(modKey, modVal2);
	      } else {
	        return this.delMod(modKey, modVal2).setMod(modKey, modVal1);
	      }
	    }
	  });
	});

/***/ },

/***/ 28:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 30:
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzBlYzY1NWY1MzJmM2E4NWVjMDc/YzIzMSoiLCJ3ZWJwYWNrOi8vLy4vY29yZS9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9nZW5lcmFsL01vbnN0ZXJCZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9saWJzL2pxdWVyeS5iZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9idW5kbGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDdENBOztBQUlBOztBQVdBOzs7Ozs7O0FBUkEsR0FBRSxHQUFGLENBQU0sU0FBTixDQUFnQjtBQUNkLGdCQUFhLGlCQURDO0FBRWQsZUFBWSxJQUZFO0FBR2QsY0FBVyxJQUhHO0FBSWQsYUFBVTtBQUpJLEVBQWhCOzs7OztBQVNBLFFBQU8sVUFBUCxHQUFvQiwwQkFBcEI7OztBQUdBLEdBQUUsWUFBTTtBQUNOLFVBQU8sVUFBUCxDQUFrQixNQUFsQjtBQUNELEVBRkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NuQk0sVTtBQUNKLHlCQUFjO0FBQUE7O0FBQ1osVUFBSyxNQUFMO0FBQ0EsVUFBSyxjQUFMLEdBQXNCLEVBQXRCO0FBQ0Q7Ozs7Ozs7Ozs7OEJBTVE7QUFDUCxXQUFNLGVBQWUsT0FBTyxrQkFBUCxJQUE2QixFQUFsRDtBQUNBLFdBQU0sV0FBVyxFQUFqQjtBQUNBLGNBQU8sSUFBUCxDQUFZLFlBQVosRUFBMEIsT0FBMUIsQ0FBa0MsZUFBTztBQUN2QyxrQkFBUyxHQUFULElBQWdCLGFBQWEsR0FB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UDtBQUNELE1BOURTOztBQWdFVixhQUFRLGdCQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUI7QUFDL0IsY0FBTyxFQUFFLEdBQUYsQ0FBTSxNQUFOLENBQWEsSUFBYixFQUFtQixNQUFuQixFQUEyQixNQUEzQixDQUFQO0FBQ0QsTUFsRVM7O0FBb0VWLFlBQU8sZUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCO0FBQzlCLGNBQU8sRUFBRSxHQUFGLENBQU0sS0FBTixDQUFZLElBQVosRUFBa0IsTUFBbEIsRUFBMEIsTUFBMUIsQ0FBUDtBQUNELE1BdEVTOztBQXdFVixlQUFVLGtCQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUI7QUFDakMsY0FBTyxFQUFFLEdBQUYsQ0FBTSxLQUFOLENBQVksSUFBWixFQUFrQixNQUFsQixFQUEwQixNQUExQixFQUFrQyxTQUFsQyxDQUFQO0FBQ0QsTUExRVM7Ozs7Ozs7OztBQW1GVixnQkFBVyxtQkFBVSxNQUFWLEVBQWtCLE9BQWxCLEVBQTJCLE9BQTNCLEVBQW9DO0FBQzdDLFdBQUksS0FBSyxNQUFMLENBQVksTUFBWixFQUFvQixPQUFwQixDQUFKLEVBQWtDO0FBQ2hDLGdCQUFPLEtBQ0YsTUFERSxDQUNLLE1BREwsRUFDYSxPQURiLEVBRUYsTUFGRSxDQUVLLE1BRkwsRUFFYSxPQUZiLENBQVA7QUFHRCxRQUpELE1BSU87QUFDTCxnQkFBTyxLQUNGLE1BREUsQ0FDSyxNQURMLEVBQ2EsT0FEYixFQUVGLE1BRkUsQ0FFSyxNQUZMLEVBRWEsT0FGYixDQUFQO0FBR0Q7QUFDRjtBQTdGUyxJQUFaO0FBZ0dELEVBcm5CQSxDQUFELEM7Ozs7Ozs7QUNMQSwwQzs7Ozs7OztBQ0FBLHlCIiwiZmlsZSI6ImNvcmUvc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYzBlYzY1NWY1MzJmM2E4NWVjMDdcbiAqKi8iLCJpbXBvcnQgJy4vYnVuZGxlLmNzcyc7XG5cblxuLy8gRG9jdW1lbnRhdGlvbiBpcyBsb2NhdGVkIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS96ZW53YWxrZXIvanF1ZXJ5LWJlbSNqcXVlcnliZW1cbmltcG9ydCAnLi9saWJzL2pxdWVyeS5iZW0nO1xuXG4vLyBSZWNvbmZpZ3VyZSBCRU0gbmFtaW5nXG4kLkJFTS5zZXRDb25maWcoe1xuICBuYW1lUGF0dGVybjogJ1thLXpBLVowLTlcXFxcLV0rJyxcbiAgZWxlbVByZWZpeDogJ19fJyxcbiAgbW9kUHJlZml4OiAnLS0nLFxuICBtb2REbG10cjogJ18nLFxufSk7XG5cblxuaW1wb3J0IE1vbnN0ZXJCZW0gZnJvbSAnLi9nZW5lcmFsL01vbnN0ZXJCZW0nO1xud2luZG93Lk1vbnN0ZXJCZW0gPSBuZXcgTW9uc3RlckJlbSgpO1xuXG4vKiBnbG9iYWwgJCAqL1xuJCgoKSA9PiB7XG4gIHdpbmRvdy5Nb25zdGVyQmVtLnVwZGF0ZSgpO1xufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvcmUvYnVuZGxlLmpzXG4gKiovIiwiY2xhc3MgTW9uc3RlckJlbSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFyYW1zKCk7XG4gICAgdGhpcy5ibG9ja0NhbGxiYWNrcyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgTW9uc3RlckJlbSBzZXR0aW5ncy5cbiAgICogVXNlcyBNb25zdGVyQmVtU2V0dGluZ3MgdmFyaWFibGUgaWYgcHJvdmlkZWQgb3IgZGVmYXVsdCB2YWx1ZXMgaW5zdGVhZC5cbiAgICovXG4gIHBhcmFtcygpIHtcbiAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB3aW5kb3cuTW9uc3RlckJlbVNldHRpbmdzIHx8IHt9O1xuICAgIGNvbnN0IHNldHRpbmdzID0ge307XG4gICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgfSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuYmxvY2tDYWxsYmFja3MpLmZvckVhY2goYmxvY2tOYW1lID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5ibG9ja0NhbGxiYWNrc1tibG9ja05hbWVdO1xuICAgICAgJChgLiR7YmxvY2tOYW1lfS5tLWpzYCkuZWFjaChmdW5jdGlvbiBpdGVyKCkge1xuICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwoJHRoaXMsIGJsb2NrTmFtZSk7XG4gICAgICAgICR0aGlzXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdtLWpzJylcbiAgICAgICAgICAuYWRkQ2xhc3MoJ20tanMtaW5pdGlhbGl6ZWQnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnN0ZXJCZW07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvcmUvZ2VuZXJhbC9Nb25zdGVyQmVtLmpzXG4gKiovIiwiLyogQHJlcXVpcmVkIGpRdWVyeSAqL1xuLyoqXG4gKiBUaGlzIGlzIG1vZGlmaWVkIHZlcnNpb24gb2YganF1ZXJ5LWJlbSBhZGRpbmcgc29tZSBuZXcgZnVuY3Rpb25zXG4gKi9cblxuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZih0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICB9IGVsc2Uge1xuICAgIGZhY3Rvcnkocm9vdC5qUXVlcnkpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uKCQsIHVuZGVmaW5lZCkge1xuXG4gIC8qKlxuICAgKiBCYXNlIEJFTSBjbGFzcy5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBmdW5jdGlvbiBCRU0oY29uZmlnKSB7XG4gICAgdGhpcy5zZXRDb25maWcoY29uZmlnKTtcbiAgfTtcblxuICAvKipcbiAgICogU2V0IHRoZSBjb25maWcgZm9yIHRoZSBwbHVnaW5cbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAtIGRlZmF1bHRzIGluIGJyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbY29uZmlnLmVsZW1QcmVmaXhdIC0gRWxlbWVudCBwcmVmaXggKGRlZmF1bHQ6ICdfXycpXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbY29uZmlnLm1vZFByZWZpeF0gLSBNb2RpZmllciBwcmVmaXggKGRlZmF1bHQ6ICdfJylcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtjb25maWcubW9kRGxtdHJdIC0gTW9kaWZpZXIgZGVsaW1pdGVyIChkZWZhdWx0OiAnXycpXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbY29uZmlnLm5hbWVQYXR0ZXJuXSAtXG4gICAqICAgUGF0dGVybiB0byBtYXRjaCB2YWxpZCBibG9jayBuYW1lcyAoZGVmYXVsdDogJ1thLXpBLVowLTktXSsnKVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5zZXRDb25maWcgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9ICQuZXh0ZW5kKHt9LCB7XG4gICAgICBuYW1lUGF0dGVybjogJ1thLXpBLVowLTlcXFxcLV0rJyxcbiAgICAgIGVsZW1QcmVmaXg6ICdfXycsXG4gICAgICBtb2RQcmVmaXg6ICctLScsXG4gICAgICBtb2REbG10cjogJ18nLFxuICAgIH0sIGNvbmZpZyk7XG5cbiAgICB0aGlzLmJsb2NrQ2xhc3NSZSA9IHRoaXMuYnVpbGRCbG9ja0NsYXNzUmUoKTtcbiAgICB0aGlzLmVsZW1DbGFzc1JlID0gdGhpcy5idWlsZEVsZW1DbGFzc1JlKCk7XG4gICAgdGhpcy5tb2RDbGFzc1JlID0gdGhpcy5idWlsZE1vZENsYXNzUmUoKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHBhcmVudCBibG9jayBvZiBlbGVtZW50LlxuICAgKiBAcHVibGljXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmdldEJsb2NrID0gZnVuY3Rpb24oJHRoaXMpIHtcbiAgICB2YXIgYmxvY2tDbGFzcyA9IHRoaXMuZ2V0QmxvY2tDbGFzcygkdGhpcylcbiAgICAgICwgYmxvY2sgPSAkdGhpcy5jbG9zZXN0KCcuJyArIGJsb2NrQ2xhc3MpO1xuXG4gICAgYmxvY2suc2VsZWN0b3IgPSBibG9ja0NsYXNzO1xuICAgIHJldHVybiBibG9jaztcbiAgfTtcblxuICAvKipcbiAgICogU3dpdGNoIGJsb2NrIGNvbnRleHQuXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBibG9ja1xuICAgKiBAcGFyYW0ge1N0cmluZ30gW2VsZW1dXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuc3dpdGNoQmxvY2sgPSBmdW5jdGlvbigkdGhpcywgYmxvY2ssIGVsZW0pIHtcbiAgICB2YXIgZWxlbSA9IGVsZW0gfHwgbnVsbDtcblxuICAgIGVsZW1cbiAgICAgID8gJHRoaXMuc2VsZWN0b3IgPSB0aGlzLmJ1aWxkU2VsZWN0b3IoeyBibG9jazogYmxvY2ssIGVsZW06IGVsZW0gfSlcbiAgICAgIDogJHRoaXMuc2VsZWN0b3IgPSB0aGlzLmJ1aWxkU2VsZWN0b3IoeyBibG9jazogYmxvY2sgfSk7XG5cbiAgICByZXR1cm4gJHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbmQgZWxlbWVudCBpbiBibG9jay5cbiAgICogQHB1YmxpY1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICAkdGhpcyAgICBET00gZWxlbWVudFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBlbGVtS2V5ICBFbGVtZW50IG5hbWVcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5maW5kRWxlbSA9IGZ1bmN0aW9uKCR0aGlzLCBlbGVtS2V5KSB7XG4gICAgdmFyIGJsb2NrQ2xhc3MgPSB0aGlzLmdldEJsb2NrQ2xhc3MoJHRoaXMpXG4gICAgICAsIGVsZW1TZWxlY3RvciA9ICcuJyArIHRoaXMuYnVpbGRFbGVtQ2xhc3MoYmxvY2tDbGFzcywgZWxlbUtleSlcbiAgICAgICwgZWxlbSA9ICR0aGlzLmlzKGVsZW1TZWxlY3RvcikgPyAkdGhpcyA6ICR0aGlzLmZpbmQoZWxlbVNlbGVjdG9yKTtcblxuICAgIHJldHVybiBlbGVtO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdmFsdWUgb2YgbW9kaWZpZXIuXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtb2RLZXlcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5nZXRNb2QgPSBmdW5jdGlvbigkdGhpcywgbW9kS2V5KSB7XG4gICAgdmFyIG1vZHMgPSB0aGlzLmV4dHJhY3RNb2RzKCR0aGlzLmZpcnN0KCkpO1xuXG4gICAgaWYgKG1vZHNbbW9kS2V5XSAhPSB1bmRlZmluZWQpIHJldHVybiBtb2RzW21vZEtleV07XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIG1vZGlmaWVyIG9mIGVsZW1lbnQuXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtb2RLZXlcbiAgICogQHBhcmFtIHtTdHJpbmd9IFttb2RWYWxdXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmhhc01vZCA9IGZ1bmN0aW9uKCR0aGlzLCBtb2RLZXksIG1vZFZhbCkge1xuICAgIHZhciBtb2RzID0gdGhpcy5leHRyYWN0TW9kcygkdGhpcy5maXJzdCgpKTtcblxuICAgIGlmIChtb2RWYWwpIHtcbiAgICAgIGlmIChtb2RzW21vZEtleV0gPT0gbW9kVmFsKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAobW9kc1ttb2RLZXldKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCBtb2RpZmllciBvbiBlbGVtZW50LlxuICAgKiBAcHVibGljXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kS2V5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbbW9kVmFsXVxuICAgKiBAcGFyYW0ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuc2V0TW9kID0gZnVuY3Rpb24oJHRoaXMsIG1vZEtleSwgbW9kVmFsKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAsIHNlbGVjdG9yID0gJHRoaXMuc2VsZWN0b3I7XG5cbiAgICAkdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSAkKHRoaXMpO1xuICAgICAgY3VycmVudC5zZWxlY3RvciA9IHNlbGVjdG9yO1xuXG4gICAgICB2YXIgbW9kcyA9IHNlbGYuZXh0cmFjdE1vZHMoY3VycmVudClcbiAgICAgICAgLCBiYXNlTmFtZSA9IHNlbGYuZ2V0QmFzZUNsYXNzKGN1cnJlbnQpO1xuXG4gICAgICBpZiAobW9kc1ttb2RLZXldICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgb2xkTW9kTmFtZSA9IHNlbGYuYnVpbGRNb2RDbGFzcyhiYXNlTmFtZSwgbW9kS2V5LCBtb2RzW21vZEtleV0pO1xuICAgICAgICBjdXJyZW50LnJlbW92ZUNsYXNzKG9sZE1vZE5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobW9kVmFsICE9PSBmYWxzZSkge1xuICAgICAgICB2YXIgbmV3TW9kTmFtZSA9IHNlbGYuYnVpbGRNb2RDbGFzcyhiYXNlTmFtZSwgbW9kS2V5LCBtb2RWYWwpO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50XG4gICAgICAgIC5hZGRDbGFzcyhuZXdNb2ROYW1lKVxuICAgICAgICAudHJpZ2dlcignc2V0bW9kJywgW21vZEtleSwgbW9kVmFsXSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gJHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBtb2RpZmllciBvbiBlbGVtZW50LlxuICAgKiBAcHVibGljXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kS2V5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbbW9kVmFsXVxuICAgKiBAcGFyYW0ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuZGVsTW9kID0gZnVuY3Rpb24oJHRoaXMsIG1vZEtleSwgbW9kVmFsKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAsIHNlbGVjdG9yID0gJHRoaXMuc2VsZWN0b3I7XG5cbiAgICAkdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSAkKHRoaXMpO1xuICAgICAgY3VycmVudC5zZWxlY3RvciA9IHNlbGVjdG9yO1xuXG4gICAgICB2YXIgbW9kcyA9IHNlbGYuZXh0cmFjdE1vZHMoY3VycmVudClcbiAgICAgICAgLCBiYXNlTmFtZSA9IHNlbGYuZ2V0QmFzZUNsYXNzKGN1cnJlbnQpO1xuXG4gICAgICBpZiAobW9kVmFsKSB7XG4gICAgICAgIGlmIChtb2RzW21vZEtleV0gPT0gbW9kVmFsKSB7XG4gICAgICAgICAgdmFyIG1vZE5hbWUgPSBzZWxmLmJ1aWxkTW9kQ2xhc3MoYmFzZU5hbWUsIG1vZEtleSwgbW9kc1ttb2RLZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBtb2ROYW1lID0gc2VsZi5idWlsZE1vZENsYXNzKGJhc2VOYW1lLCBtb2RLZXksIG1vZHNbbW9kS2V5XSk7XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRcbiAgICAgICAgLnJlbW92ZUNsYXNzKG1vZE5hbWUpXG4gICAgICAgIC50cmlnZ2VyKCdkZWxtb2QnLCBbbW9kS2V5LCBtb2RWYWxdKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAkdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRmlsdGVyaW5nIGVsZW1lbnRzIGJ5IG1vZGlmaWVyLlxuICAgKiBAcHVibGljXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kS2V5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbbW9kVmFsXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbnZlcnNlXVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmJ5TW9kID0gZnVuY3Rpb24oJHRoaXMsIG1vZEtleSwgbW9kVmFsLCBpbnZlcnNlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAsIG1vZFZhbCA9IG1vZFZhbCB8fCBudWxsXG4gICAgICAsIGludmVyc2UgPSBpbnZlcnNlIHx8IGZhbHNlXG4gICAgICAsIHNlbGVjdG9yID0gJHRoaXMuc2VsZWN0b3JcbiAgICAgICwgcmVzdWx0ID0gJCgpO1xuXG4gICAgJHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjdXJyZW50ID0gJCh0aGlzKTtcbiAgICAgIGN1cnJlbnQuc2VsZWN0b3IgPSBzZWxlY3RvcjtcblxuICAgICAgdmFyIG1vZHMgPSBzZWxmLmV4dHJhY3RNb2RzKGN1cnJlbnQpXG4gICAgICAgICwgYmFzZU5hbWUgPSBzZWxmLmdldEJhc2VDbGFzcyhjdXJyZW50KTtcblxuICAgICAgaWYgKG1vZFZhbCkge1xuICAgICAgICBpZiAobW9kc1ttb2RLZXldID09IG1vZFZhbCkge1xuICAgICAgICAgIHZhciBtb2ROYW1lID0gc2VsZi5idWlsZE1vZENsYXNzKGJhc2VOYW1lLCBtb2RLZXksIG1vZHNbbW9kS2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAobW9kc1ttb2RLZXldICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBtb2ROYW1lID0gc2VsZi5idWlsZE1vZENsYXNzKGJhc2VOYW1lLCBtb2RLZXksIG1vZHNbbW9kS2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzdWx0ID0gcmVzdWx0LmFkZChpbnZlcnNlXG4gICAgICAgID8gY3VycmVudC5ub3QoJy4nICsgbW9kTmFtZSlcbiAgICAgICAgOiBjdXJyZW50LmZpbHRlcignLicgKyBtb2ROYW1lKSk7XG4gICAgfSk7XG5cbiAgICByZXN1bHQuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYmxvY2sgbmFtZXMgZnJvbSBlbGVtZW50LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gJHRoaXNcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5leHRyYWN0QmxvY2tzID0gZnVuY3Rpb24oJHRoaXMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsIHJlc3VsdCA9IFtdXG4gICAgICAsIHNlbGVjdG9ycyA9IHRoaXMuZ2V0Q2xhc3NlcygkdGhpcyk7XG5cbiAgICAkLmVhY2goc2VsZWN0b3JzLCBmdW5jdGlvbihpLCBzZWwpIHtcbiAgICAgIHZhciB0eXBlID0gc2VsZi5nZXRDbGFzc1R5cGUoc2VsKTtcblxuICAgICAgaWYgKHR5cGUgPT0gJ2Jsb2NrJykge1xuICAgICAgICByZXN1bHQucHVzaChzZWwpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwZSA9PSAnZWxlbScpIHtcbiAgICAgICAgdmFyIGVsZW0gPSBzZWwuc3BsaXQoc2VsZi5jb25maWcuZWxlbVByZWZpeCk7XG4gICAgICAgIHJlc3VsdC5wdXNoKGVsZW1bMF0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGVsZW1lbnQgbmFtZXMgZnJvbSBlbGVtZW50LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmV4dHJhY3RFbGVtcyA9IGZ1bmN0aW9uKCR0aGlzKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLCByZXN1bHQgPSBbXTtcblxuICAgICQuZWFjaChzZWxmLmdldENsYXNzZXMoJHRoaXMpLCBmdW5jdGlvbihpLCBjbGFzc05hbWUpIHtcbiAgICAgIGlmIChzZWxmLmdldENsYXNzVHlwZShjbGFzc05hbWUpID09ICdlbGVtJykge1xuICAgICAgICB2YXIgZWxlbU5hbWUgPSBjbGFzc05hbWUuc3BsaXQoc2VsZi5jb25maWcuZWxlbVByZWZpeCk7XG4gICAgICAgIHJlc3VsdC5wdXNoKGVsZW1OYW1lWzFdKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBtb2RpZmllcnMgZnJvbSBlbGVtZW50LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmV4dHJhY3RNb2RzID0gZnVuY3Rpb24oJHRoaXMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsIHJlc3VsdCA9IHt9O1xuXG4gICAgJHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG5cbiAgICAgICQuZWFjaChzZWxmLmdldENsYXNzZXMoJHRoaXMpLCBmdW5jdGlvbihpLCBjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKHNlbGYuZ2V0Q2xhc3NUeXBlKGNsYXNzTmFtZSkgPT0gJ21vZCcpIHtcbiAgICAgICAgICB2YXIgcmUgPSBzZWxmLmJ1aWxkTW9kQ2xhc3NSZSgpLmV4ZWMoY2xhc3NOYW1lKTtcbiAgICAgICAgICB2YXIgbW9kTmFtZSA9IHJlWzFdLnNwbGl0KHNlbGYuY29uZmlnLm1vZERsbXRyKTtcblxuICAgICAgICAgIGlmIChtb2ROYW1lWzFdICE9PSB1bmRlZmluZWQgJiYgbW9kTmFtZVsxXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciBtb2RWYWwgPSBtb2ROYW1lWzFdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbW9kVmFsID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXN1bHRbIG1vZE5hbWVbMF0gXSA9IG1vZFZhbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgY2xhc3NlcyBuYW1lcyBmcm9tIGVsZW1lbnQuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuZ2V0Q2xhc3NlcyA9IGZ1bmN0aW9uKCR0aGlzKSB7XG4gICAgdmFyIGNsYXNzZXMsIHJlc3VsdCA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiAkdGhpcyA9PSAnb2JqZWN0Jykge1xuXG4gICAgICBpZiAoJHRoaXMuc2VsZWN0b3IuaW5kZXhPZignLicpID09PSAwKSB7XG4gICAgICAgIGNsYXNzZXMgPSAkdGhpcy5zZWxlY3Rvci5zcGxpdCgnLicpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoJHRoaXMuYXR0cignY2xhc3MnKSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2xhc3NlcyA9ICR0aGlzLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNsYXNzZXMgPSAkdGhpcy5zcGxpdCgnLicpO1xuICAgIH1cblxuICAgICQuZWFjaChjbGFzc2VzLCBmdW5jdGlvbihpLCBjbGFzc05hbWUpIHtcbiAgICAgIGlmIChjbGFzc05hbWUgIT0gJycpIHJlc3VsdC5wdXNoKCQudHJpbShjbGFzc05hbWUpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHJlZ2V4cCBmb3IgYmxvY2tzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEByZXR1cm4ge1JlZ0V4cH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuYnVpbGRCbG9ja0NsYXNzUmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICAgICdeKCcgKyB0aGlzLmNvbmZpZy5uYW1lUGF0dGVybiArICcpJCdcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCdWlsZCByZWdleHAgZm9yIGVsZW1lbnRzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEByZXR1cm4ge1JlZ0V4cH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuYnVpbGRFbGVtQ2xhc3NSZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgJ14nICsgdGhpcy5jb25maWcubmFtZVBhdHRlcm4gKyB0aGlzLmNvbmZpZy5lbGVtUHJlZml4ICsgJygnICsgdGhpcy5jb25maWcubmFtZVBhdHRlcm4gKyAnKSQnXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogQnVpbGQgcmVnZXhwIGZvciBtb2RpZmllcnMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHJldHVybiB7UmVnRXhwfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5idWlsZE1vZENsYXNzUmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICAgICdeKD86JyArIHRoaXMuY29uZmlnLm5hbWVQYXR0ZXJuICsgJ3wnICsgdGhpcy5jb25maWcubmFtZVBhdHRlcm4gKyB0aGlzLmNvbmZpZy5lbGVtUHJlZml4ICsgdGhpcy5jb25maWcubmFtZVBhdHRlcm4gKyAnKScgKyB0aGlzLmNvbmZpZy5tb2RQcmVmaXggKyAnKCcgKyB0aGlzLmNvbmZpZy5uYW1lUGF0dGVybiArICcoKCcgKyB0aGlzLmNvbmZpZy5tb2REbG10ciArIHRoaXMuY29uZmlnLm5hbWVQYXR0ZXJuICsgJykkfCQpKSdcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCdWlsZCBjbGFzcyBuYW1lIGZvciBibG9jay5cbiAgICogQHByb3RlY3RlZFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gYmxvY2tOYW1lXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuYnVpbGRCbG9ja0NsYXNzID0gZnVuY3Rpb24oYmxvY2tOYW1lKSB7XG4gICAgcmV0dXJuIGJsb2NrTmFtZTtcbiAgfTtcblxuICAvKipcbiAgICogQnVpbGQgY2xhc3MgbmFtZSBmb3IgZWxlbWVudC5cbiAgICogQHByb3RlY3RlZFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gYmxvY2tOYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbGVtS2V5XG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuYnVpbGRFbGVtQ2xhc3MgPSBmdW5jdGlvbihibG9ja05hbWUsIGVsZW1LZXkpIHtcbiAgICByZXR1cm4gYmxvY2tOYW1lICsgdGhpcy5jb25maWcuZWxlbVByZWZpeCArIGVsZW1LZXk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGNsYXNzIG5hbWUgZm9yIG1vZGlmaWVyLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBibG9ja05hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1vZEtleVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kVmFsXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuYnVpbGRNb2RDbGFzcyA9IGZ1bmN0aW9uKGJhc2VDbGFzcywgbW9kS2V5LCBtb2RWYWwpIHtcbiAgICBpZiAobW9kVmFsICE9PSB1bmRlZmluZWQgJiYgbW9kVmFsICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gYmFzZUNsYXNzICsgdGhpcy5jb25maWcubW9kUHJlZml4ICsgbW9kS2V5ICsgdGhpcy5jb25maWcubW9kRGxtdHIgKyBtb2RWYWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBiYXNlQ2xhc3MgKyB0aGlzLmNvbmZpZy5tb2RQcmVmaXggKyBtb2RLZXk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBCdWlsZCBzZWxlY3RvciBmcm9tIG9iamVjdCBvciBzdHJpbmcuXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH1cbiAgICogQHBhcmFtIHtTdHJpbmd9XG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuYnVpbGRTZWxlY3RvciA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBwcmVmaXgpIHtcbiAgICBpZiAocHJlZml4ICE9PSAnJykge1xuICAgICAgdmFyIHByZWZpeCA9IHByZWZpeCB8fCAnLic7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHNlbGVjdG9yLmJsb2NrICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgYnVpbGRTZWxlY3RvciA9IHRoaXMuYnVpbGRCbG9ja0NsYXNzKHNlbGVjdG9yLmJsb2NrKTtcblxuICAgICAgICBpZiAoc2VsZWN0b3IuZWxlbSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBidWlsZFNlbGVjdG9yID0gdGhpcy5idWlsZEVsZW1DbGFzcyhidWlsZFNlbGVjdG9yLCBzZWxlY3Rvci5lbGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3Rvci5tb2QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIG1vZCA9IHNlbGVjdG9yLm1vZC5zcGxpdCgnOicpO1xuICAgICAgICAgIGJ1aWxkU2VsZWN0b3IgPSB0aGlzLmJ1aWxkTW9kQ2xhc3MoYnVpbGRTZWxlY3RvciwgbW9kWzBdLCBtb2RbMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1aWxkU2VsZWN0b3IgIT0gdW5kZWZpbmVkXG4gICAgICA/IHByZWZpeCArIGJ1aWxkU2VsZWN0b3JcbiAgICAgIDogcHJlZml4ICsgc2VsZWN0b3I7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGNsYXNzIG5hbWUgZm9yIGJsb2NrLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gJHRoaXNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtpbmRleF1cbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5nZXRCbG9ja0NsYXNzID0gZnVuY3Rpb24oJHRoaXMsIGluZGV4KSB7XG4gICAgdmFyIGJsb2NrQ2xhc3NlcyA9IHRoaXMuZXh0cmFjdEJsb2NrcygkdGhpcyk7XG4gICAgdmFyIGluZGV4ID0gaW5kZXggfHwgMDtcblxuICAgIHJldHVybiBpbmRleCA8PSBibG9ja0NsYXNzZXMubGVuZ3RoIC0gMVxuICAgICAgPyBibG9ja0NsYXNzZXNbaW5kZXhdXG4gICAgICA6IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBiYXNlIGNsYXNzIGZyb20gZWxlbWVudC5cbiAgICogQHByb3RlY3RlZFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRoaXNcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5nZXRCYXNlQ2xhc3MgPSBmdW5jdGlvbigkdGhpcykge1xuICAgIHZhciBzZWxmID0gdGhpcywgYmFzZUNsYXNzID0gbnVsbDtcbiAgICB2YXIgc2VsZWN0b3JzID0gdGhpcy5nZXRDbGFzc2VzKCR0aGlzKTtcblxuICAgICQuZWFjaChzZWxlY3RvcnMsIGZ1bmN0aW9uKGksIHNlbCkge1xuICAgICAgdmFyIGNsYXNzVHlwZSA9IHNlbGYuZ2V0Q2xhc3NUeXBlKHNlbCk7XG5cbiAgICAgIGlmIChjbGFzc1R5cGUgJiYgY2xhc3NUeXBlICE9ICdtb2QnKSB7XG4gICAgICAgIGJhc2VDbGFzcyA9IHNlbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBiYXNlQ2xhc3M7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBjbGFzcyB0eXBlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5nZXRDbGFzc1R5cGUgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgICBpZiAodGhpcy5tb2RDbGFzc1JlLnRlc3QoY2xhc3NOYW1lKSkge1xuICAgICAgcmV0dXJuICdtb2QnO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmVsZW1DbGFzc1JlLnRlc3QoY2xhc3NOYW1lKSkge1xuICAgICAgcmV0dXJuICdlbGVtJztcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5ibG9ja0NsYXNzUmUudGVzdChjbGFzc05hbWUpKSB7XG4gICAgICByZXR1cm4gJ2Jsb2NrJztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBCRU0gaW5zdGFuY2UuXG4gICAqL1xuICAkLkJFTSA9IG5ldyBCRU0oKTtcblxuICAvKipcbiAgICogRXh0ZW5kIGpRdWVyeSBvYmplY3QuXG4gICAqL1xuICAkLmZuLmV4dGVuZCh7XG4gICAgYmxvY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICQuQkVNLmdldEJsb2NrKHRoaXMpO1xuICAgIH0sXG5cbiAgICBleHRyYWN0QmxvY2tzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkLkJFTS5leHRyYWN0QmxvY2tzKHRoaXMpO1xuICAgIH0sXG5cbiAgICBpc0JlbUJsb2NrOiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKTtcbiAgICAgIGxldCBpc0Jsb2NrID0gZmFsc2U7XG4gICAgICBjbGFzc2VzLmZvckVhY2goY2xhc3NOYW1lID0+IHtcbiAgICAgICAgaWYgKCQuQkVNLmdldENsYXNzVHlwZShjbGFzc05hbWUpID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgaXNCbG9jayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGlzQmxvY2s7XG4gICAgfSxcblxuICAgIGJsb2NrU2V0dGluZ3M6IGZ1bmN0aW9uIChkZWZhdWx0U2V0dGluZ3MpIHtcbiAgICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHRoaXMuZGF0YSgnbUJlbVNldHRpbmdzJykgfHwge307XG4gICAgICBjb25zdCBzZXR0aW5ncyA9IGRlZmF1bHRTZXR0aW5ncyB8fCB7fTtcbiAgICAgIE9iamVjdC5rZXlzKHVzZXJTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzZXR0aW5ncztcbiAgICB9LFxuXG4gICAgZWxlbTogZnVuY3Rpb24oY3R4LCBlbGVtS2V5KSB7XG4gICAgICBpZiAoIWVsZW1LZXkpIHtcbiAgICAgICAgZWxlbUtleSA9IGN0eDtcbiAgICAgICAgY3R4ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICQuQkVNLmZpbmRFbGVtKGN0eCB8fCB0aGlzLCBlbGVtS2V5KTtcbiAgICB9LFxuXG4gICAgY3R4OiBmdW5jdGlvbihibG9jaywgZWxlbSkge1xuICAgICAgcmV0dXJuICQuQkVNLnN3aXRjaEJsb2NrKHRoaXMsIGJsb2NrLCBlbGVtKTtcbiAgICB9LFxuXG4gICAgbW9kOiBmdW5jdGlvbihtb2RLZXksIG1vZFZhbCkge1xuICAgICAgaWYgKHR5cGVvZiBtb2RWYWwgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbW9kVmFsID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKG1vZFZhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuICQuQkVNLmRlbE1vZCh0aGlzLCBtb2RLZXkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKG1vZFZhbCAhPSBudWxsKVxuICAgICAgICA/ICQuQkVNLnNldE1vZCh0aGlzLCBtb2RLZXksIG1vZFZhbClcbiAgICAgICAgOiAkLkJFTS5nZXRNb2QodGhpcywgbW9kS2V5KTtcbiAgICB9LFxuXG4gICAgc2V0TW9kOiBmdW5jdGlvbihtb2RLZXksIG1vZFZhbCkge1xuICAgICAgcmV0dXJuICQuQkVNLnNldE1vZCh0aGlzLCBtb2RLZXksIG1vZFZhbCk7XG4gICAgfSxcblxuICAgIGRlbE1vZDogZnVuY3Rpb24obW9kS2V5LCBtb2RWYWwpIHtcbiAgICAgIHJldHVybiAkLkJFTS5kZWxNb2QodGhpcywgbW9kS2V5LCBtb2RWYWwpO1xuICAgIH0sXG5cbiAgICBoYXNNb2Q6IGZ1bmN0aW9uKG1vZEtleSwgbW9kVmFsKSB7XG4gICAgICByZXR1cm4gJC5CRU0uaGFzTW9kKHRoaXMsIG1vZEtleSwgbW9kVmFsKTtcbiAgICB9LFxuXG4gICAgYnlNb2Q6IGZ1bmN0aW9uKG1vZEtleSwgbW9kVmFsKSB7XG4gICAgICByZXR1cm4gJC5CRU0uYnlNb2QodGhpcywgbW9kS2V5LCBtb2RWYWwpO1xuICAgIH0sXG5cbiAgICBieU5vdE1vZDogZnVuY3Rpb24obW9kS2V5LCBtb2RWYWwpIHtcbiAgICAgIHJldHVybiAkLkJFTS5ieU1vZCh0aGlzLCBtb2RLZXksIG1vZFZhbCwgJ2ludmVyc2UnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGJsb2NrcydzIG9yIGVsZW0ncyBtb2RpZmllciBgbW9kS2V5YCBiZXR3ZWVuIGBtb2RWYWwxYCBhbmQgYG1vZFZhbDJgXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1vZEtleVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtb2RWYWwxXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1vZFZhbDJcbiAgICAgKiBAcmV0dXJuIHsqfVxuICAgICAqL1xuICAgIHRvZ2dsZU1vZDogZnVuY3Rpb24gKG1vZEtleSwgbW9kVmFsMSwgbW9kVmFsMikge1xuICAgICAgaWYgKHRoaXMuaGFzTW9kKG1vZEtleSwgbW9kVmFsMSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgICAgIC5kZWxNb2QobW9kS2V5LCBtb2RWYWwxKVxuICAgICAgICAgICAgLnNldE1vZChtb2RLZXksIG1vZFZhbDIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgICAgIC5kZWxNb2QobW9kS2V5LCBtb2RWYWwyKVxuICAgICAgICAgICAgLnNldE1vZChtb2RLZXksIG1vZFZhbDEpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbn0pKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29yZS9saWJzL2pxdWVyeS5iZW0uanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9jb3JlL2J1bmRsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImpRdWVyeVwiXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=