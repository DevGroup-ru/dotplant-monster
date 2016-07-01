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
	
	__webpack_require__(23);
	
	__webpack_require__(3);
	
	// Reconfigure BEM naming
	$.BEM.setConfig({
	  namePattern: '[a-zA-Z0-9-]+',
	  elemPrefix: '__',
	  modPrefix: '--',
	  modDlmtr: '_'
	});
	
	// Documentation is located at https://github.com/zenwalker/jquery-bem#jquerybem

/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @required jQuery */
	
	(function(root, factory) {
	  if(true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(25)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if(typeof module === 'object' && module.exports) {
	    factory(require('jquery'));
	  } else {
	    factory(root.jQuery);
	  }
	}(this, function($, undefined) {
	
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
	  BEM.prototype.setConfig = function(config) {
	    this.config = $.extend({}, {
	      namePattern: '[a-zA-Z0-9-]+',
	      elemPrefix: '__',
	      modPrefix: '_',
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
	  BEM.prototype.getBlock = function($this) {
	    var blockClass = this.getBlockClass($this)
	      , block = $this.closest('.' + blockClass);
	
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
	  BEM.prototype.switchBlock = function($this, block, elem) {
	    var elem = elem || null;
	
	    elem
	      ? $this.selector = this.buildSelector({ block: block, elem: elem })
	      : $this.selector = this.buildSelector({ block: block });
	
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
	  BEM.prototype.findElem = function($this, elemKey) {
	    var blockClass = this.getBlockClass($this)
	      , elemSelector = '.' + this.buildElemClass(blockClass, elemKey)
	      , elem = $this.is(elemSelector) ? $this : $this.find(elemSelector);
	
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
	  BEM.prototype.getMod = function($this, modKey) {
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
	  BEM.prototype.hasMod = function($this, modKey, modVal) {
	    var mods = this.extractMods($this.first());
	
	    if (modVal) {
	      if (mods[modKey] == modVal) return true;
	    }
	    else {
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
	  BEM.prototype.setMod = function($this, modKey, modVal) {
	    var self = this
	      , selector = $this.selector;
	
	    $this.each(function() {
	      var current = $(this);
	      current.selector = selector;
	
	      var mods = self.extractMods(current)
	        , baseName = self.getBaseClass(current);
	
	      if (mods[modKey] != undefined) {
	        var oldModName = self.buildModClass(baseName, modKey, mods[modKey]);
	        current.removeClass(oldModName);
	      }
	
	      if (modVal !== false) {
	        var newModName = self.buildModClass(baseName, modKey, modVal);
	      }
	
	      current
	        .addClass(newModName)
	        .trigger('setmod', [modKey, modVal]);
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
	  BEM.prototype.delMod = function($this, modKey, modVal) {
	    var self = this
	      , selector = $this.selector;
	
	    $this.each(function() {
	      var current = $(this);
	      current.selector = selector;
	
	      var mods = self.extractMods(current)
	        , baseName = self.getBaseClass(current);
	
	      if (modVal) {
	        if (mods[modKey] == modVal) {
	          var modName = self.buildModClass(baseName, modKey, mods[modKey]);
	        }
	      }
	      else {
	        var modName = self.buildModClass(baseName, modKey, mods[modKey]);
	      }
	
	      current
	        .removeClass(modName)
	        .trigger('delmod', [modKey, modVal]);
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
	  BEM.prototype.byMod = function($this, modKey, modVal, inverse) {
	    var self = this
	      , modVal = modVal || null
	      , inverse = inverse || false
	      , selector = $this.selector
	      , result = $();
	
	    $this.each(function() {
	      var current = $(this);
	      current.selector = selector;
	
	      var mods = self.extractMods(current)
	        , baseName = self.getBaseClass(current);
	
	      if (modVal) {
	        if (mods[modKey] == modVal) {
	          var modName = self.buildModClass(baseName, modKey, mods[modKey]);
	        }
	      }
	      else {
	        if (mods[modKey] != undefined) {
	          var modName = self.buildModClass(baseName, modKey, mods[modKey]);
	        }
	      }
	
	      result = result.add(inverse
	        ? current.not('.' + modName)
	        : current.filter('.' + modName));
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
	  BEM.prototype.extractBlocks = function($this) {
	    var self = this, result = []
	      , selectors = this.getClasses($this);
	
	    $.each(selectors, function(i, sel) {
	      var type = self.getClassType(sel);
	
	      if (type == 'block') {
	        result.push(sel);
	      }
	      else if (type == 'elem') {
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
	  BEM.prototype.extractElems = function($this) {
	    var self = this, result = [];
	
	    $.each(self.getClasses($this), function(i, className) {
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
	  BEM.prototype.extractMods = function($this) {
	    var self = this, result = {};
	
	    $this.each(function() {
	      var $this = $(this);
	
	      $.each(self.getClasses($this), function(i, className) {
	        if (self.getClassType(className) == 'mod') {
	          var re = self.buildModClassRe().exec(className);
	          var modName = re[1].split(self.config.modDlmtr);
	
	          if (modName[1] !== undefined && modName[1] !== false) {
	            var modVal = modName[1];
	          } else {
	            var modVal = true;
	          }
	
	          result[ modName[0] ] = modVal;
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
	  BEM.prototype.getClasses = function($this) {
	    var classes, result = [];
	
	    if (typeof $this == 'object') {
	
	      if ($this.selector.indexOf('.') === 0) {
	        classes = $this.selector.split('.');
	      }
	      else if ($this.attr('class') != undefined) {
	        classes = $this.attr('class').split(' ');
	      }
	      else {
	        return null;
	      }
	
	    }
	    else {
	      classes = $this.split('.');
	    }
	
	    $.each(classes, function(i, className) {
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
	  BEM.prototype.buildBlockClassRe = function() {
	    return new RegExp(
	      '^(' + this.config.namePattern + ')$'
	    );
	  };
	
	  /**
	   * Build regexp for elements.
	   * @protected
	   *
	   * @return {RegExp}
	   */
	  BEM.prototype.buildElemClassRe = function() {
	    return new RegExp(
	      '^' + this.config.namePattern + this.config.elemPrefix + '(' + this.config.namePattern + ')$'
	    );
	  };
	
	  /**
	   * Build regexp for modifiers.
	   * @protected
	   *
	   * @return {RegExp}
	   */
	  BEM.prototype.buildModClassRe = function() {
	    return new RegExp(
	      '^(?:' + this.config.namePattern + '|' + this.config.namePattern + this.config.elemPrefix + this.config.namePattern + ')' + this.config.modPrefix + '(' + this.config.namePattern + '((' + this.config.modDlmtr + this.config.namePattern + ')$|$))'
	    );
	  };
	
	  /**
	   * Build class name for block.
	   * @protected
	   *
	   * @param {String} blockName
	   * @return {String}
	   */
	  BEM.prototype.buildBlockClass = function(blockName) {
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
	  BEM.prototype.buildElemClass = function(blockName, elemKey) {
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
	  BEM.prototype.buildModClass = function(baseClass, modKey, modVal) {
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
	  BEM.prototype.buildSelector = function(selector, prefix) {
	    if (prefix !== '') {
	      var prefix = prefix || '.';
	    }
	
	    if (typeof selector == 'object') {
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
	
	    return buildSelector != undefined
	      ? prefix + buildSelector
	      : prefix + selector;
	  };
	
	  /**
	   * Build class name for block.
	   * @protected
	   *
	   * @param {Object|String} $this
	   * @param {Number} [index]
	   * @return {String}
	   */
	  BEM.prototype.getBlockClass = function($this, index) {
	    var blockClasses = this.extractBlocks($this);
	    var index = index || 0;
	
	    return index <= blockClasses.length - 1
	      ? blockClasses[index]
	      : null;
	  };
	
	  /**
	   * Get base class from element.
	   * @protected
	   *
	   * @param {Object} $this
	   * @return {String}
	   */
	  BEM.prototype.getBaseClass = function($this) {
	    var self = this, baseClass = null;
	    var selectors = this.getClasses($this);
	
	    $.each(selectors, function(i, sel) {
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
	  BEM.prototype.getClassType = function(className) {
	    if (this.modClassRe.test(className)) {
	      return 'mod';
	    }
	    else if (this.elemClassRe.test(className)) {
	      return 'elem';
	    }
	    else if (this.blockClassRe.test(className)) {
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
	    block: function() {
	      return $.BEM.getBlock(this);
	    },
	
	    elem: function(ctx, elemKey) {
	      if (!elemKey) {
	        elemKey = ctx;
	        ctx = null;
	      }
	
	      return $.BEM.findElem(ctx || this, elemKey);
	    },
	
	    ctx: function(block, elem) {
	      return $.BEM.switchBlock(this, block, elem);
	    },
	
	    mod: function(modKey, modVal) {
	      if (typeof modVal == 'undefined') {
	        modVal = null;
	      }
	
	      if (modVal === false) {
	        return $.BEM.delMod(this, modKey);
	      }
	
	      return (modVal != null)
	        ? $.BEM.setMod(this, modKey, modVal)
	        : $.BEM.getMod(this, modKey);
	    },
	
	    setMod: function(modKey, modVal) {
	      return $.BEM.setMod(this, modKey, modVal);
	    },
	
	    delMod: function(modKey, modVal) {
	      return $.BEM.delMod(this, modKey, modVal);
	    },
	
	    hasMod: function(modKey, modVal) {
	      return $.BEM.hasMod(this, modKey, modVal);
	    },
	
	    byMod: function(modKey, modVal) {
	      return $.BEM.byMod(this, modKey, modVal);
	    },
	
	    byNotMod: function(modKey, modVal) {
	      return $.BEM.byMod(this, modKey, modVal, 'inverse');
	    },
	
	    /**
	     * Toggle blocks's or elem's modifier `modKey` between `modVal1` and `modVal2`
	     * @param {String} modKey
	     * @param {String} modVal1
	     * @param {String} modVal2
	     * @return {*}
	     */
	    toggleMod: function (modKey, modVal1, modVal2) {
	      if (this.hasMod(modKey, modVal1)) {
	        return this
	            .delMod(modKey, modVal1)
	            .setMod(modKey, modVal2);
	      } else {
	        return this
	            .delMod(modKey, modVal2)
	            .setMod(modKey, modVal1);
	      }
	    }
	  });
	
	}));


/***/ },

/***/ 23:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 25:
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWQ3NWI5MjFkMWE0YTM0MWFmNDQ/ZGNlNSIsIndlYnBhY2s6Ly8vLi9jb3JlL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL34vanF1ZXJ5LWJlbS9qcXVlcnkuYmVtLmpzIiwid2VicGFjazovLy8uL2NvcmUvYnVuZGxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3RDQTs7QUFJQTs7O0FBR0EsR0FBRSxHQUFGLENBQU0sU0FBTixDQUFnQjtBQUNkLGdCQUFhLGVBREM7QUFFZCxlQUFZLElBRkU7QUFHZCxjQUFXLElBSEc7QUFJZCxhQUFVO0FBSkksRUFBaEI7Ozs7Ozs7OztBQ1BBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYSxPQUFPO0FBQ3BCLGNBQWEsT0FBTztBQUNwQixjQUFhLE9BQU87QUFDcEIsY0FBYSxPQUFPO0FBQ3BCLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxPQUFPO0FBQ3BCLGVBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLE9BQU87QUFDcEIsZUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxPQUFPO0FBQ3BCLGNBQWEsT0FBTztBQUNwQixlQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLE9BQU87QUFDcEIsY0FBYSxPQUFPO0FBQ3BCLGNBQWEsT0FBTztBQUNwQixlQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLGNBQWE7QUFDYixlQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWEsY0FBYztBQUMzQixjQUFhLE9BQU87QUFDcEIsZUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxPQUFPO0FBQ3BCLGVBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWEsT0FBTztBQUNwQixlQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWUsT0FBTztBQUN0QixnQkFBZSxPQUFPO0FBQ3RCLGdCQUFlLE9BQU87QUFDdEIsaUJBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSCxFQUFDOzs7Ozs7OztBQy9sQkQsMEM7Ozs7Ozs7QUNBQSx5QiIsImZpbGUiOiJjb3JlL3NjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGFkNzViOTIxZDFhNGEzNDFhZjQ0XG4gKiovIiwiaW1wb3J0ICcuL2J1bmRsZS5jc3MnO1xuXG5cbi8vIERvY3VtZW50YXRpb24gaXMgbG9jYXRlZCBhdCBodHRwczovL2dpdGh1Yi5jb20vemVud2Fsa2VyL2pxdWVyeS1iZW0janF1ZXJ5YmVtXG5pbXBvcnQgJy4vbm9kZV9tb2R1bGVzL2pxdWVyeS1iZW0vanF1ZXJ5LmJlbSc7XG5cbi8vIFJlY29uZmlndXJlIEJFTSBuYW1pbmdcbiQuQkVNLnNldENvbmZpZyh7XG4gIG5hbWVQYXR0ZXJuOiAnW2EtekEtWjAtOS1dKycsXG4gIGVsZW1QcmVmaXg6ICdfXycsXG4gIG1vZFByZWZpeDogJy0tJyxcbiAgbW9kRGxtdHI6ICdfJyxcbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb3JlL2J1bmRsZS5qc1xuICoqLyIsIi8qIEByZXF1aXJlZCBqUXVlcnkgKi9cblxuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZih0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICB9IGVsc2Uge1xuICAgIGZhY3Rvcnkocm9vdC5qUXVlcnkpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uKCQsIHVuZGVmaW5lZCkge1xuXG4gIC8qKlxuICAgKiBCYXNlIEJFTSBjbGFzcy5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBmdW5jdGlvbiBCRU0oY29uZmlnKSB7XG4gICAgdGhpcy5zZXRDb25maWcoY29uZmlnKTtcbiAgfTtcblxuICAvKipcbiAgICogU2V0IHRoZSBjb25maWcgZm9yIHRoZSBwbHVnaW5cbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAtIGRlZmF1bHRzIGluIGJyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbY29uZmlnLmVsZW1QcmVmaXhdIC0gRWxlbWVudCBwcmVmaXggKGRlZmF1bHQ6ICdfXycpXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbY29uZmlnLm1vZFByZWZpeF0gLSBNb2RpZmllciBwcmVmaXggKGRlZmF1bHQ6ICdfJylcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtjb25maWcubW9kRGxtdHJdIC0gTW9kaWZpZXIgZGVsaW1pdGVyIChkZWZhdWx0OiAnXycpXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbY29uZmlnLm5hbWVQYXR0ZXJuXSAtXG4gICAqICAgUGF0dGVybiB0byBtYXRjaCB2YWxpZCBibG9jayBuYW1lcyAoZGVmYXVsdDogJ1thLXpBLVowLTktXSsnKVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5zZXRDb25maWcgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9ICQuZXh0ZW5kKHt9LCB7XG4gICAgICBuYW1lUGF0dGVybjogJ1thLXpBLVowLTktXSsnLFxuICAgICAgZWxlbVByZWZpeDogJ19fJyxcbiAgICAgIG1vZFByZWZpeDogJ18nLFxuICAgICAgbW9kRGxtdHI6ICdfJ1xuICAgIH0sIGNvbmZpZyk7XG5cbiAgICB0aGlzLmJsb2NrQ2xhc3NSZSA9IHRoaXMuYnVpbGRCbG9ja0NsYXNzUmUoKTtcbiAgICB0aGlzLmVsZW1DbGFzc1JlID0gdGhpcy5idWlsZEVsZW1DbGFzc1JlKCk7XG4gICAgdGhpcy5tb2RDbGFzc1JlID0gdGhpcy5idWlsZE1vZENsYXNzUmUoKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHBhcmVudCBibG9jayBvZiBlbGVtZW50LlxuICAgKiBAcHVibGljXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmdldEJsb2NrID0gZnVuY3Rpb24oJHRoaXMpIHtcbiAgICB2YXIgYmxvY2tDbGFzcyA9IHRoaXMuZ2V0QmxvY2tDbGFzcygkdGhpcylcbiAgICAgICwgYmxvY2sgPSAkdGhpcy5jbG9zZXN0KCcuJyArIGJsb2NrQ2xhc3MpO1xuXG4gICAgYmxvY2suc2VsZWN0b3IgPSBibG9ja0NsYXNzO1xuICAgIHJldHVybiBibG9jaztcbiAgfTtcblxuICAvKipcbiAgICogU3dpdGNoIGJsb2NrIGNvbnRleHQuXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBibG9ja1xuICAgKiBAcGFyYW0ge1N0cmluZ30gW2VsZW1dXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuc3dpdGNoQmxvY2sgPSBmdW5jdGlvbigkdGhpcywgYmxvY2ssIGVsZW0pIHtcbiAgICB2YXIgZWxlbSA9IGVsZW0gfHwgbnVsbDtcblxuICAgIGVsZW1cbiAgICAgID8gJHRoaXMuc2VsZWN0b3IgPSB0aGlzLmJ1aWxkU2VsZWN0b3IoeyBibG9jazogYmxvY2ssIGVsZW06IGVsZW0gfSlcbiAgICAgIDogJHRoaXMuc2VsZWN0b3IgPSB0aGlzLmJ1aWxkU2VsZWN0b3IoeyBibG9jazogYmxvY2sgfSk7XG5cbiAgICByZXR1cm4gJHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbmQgZWxlbWVudCBpbiBibG9jay5cbiAgICogQHB1YmxpY1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICAkdGhpcyAgICBET00gZWxlbWVudFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBlbGVtS2V5ICBFbGVtZW50IG5hbWVcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5maW5kRWxlbSA9IGZ1bmN0aW9uKCR0aGlzLCBlbGVtS2V5KSB7XG4gICAgdmFyIGJsb2NrQ2xhc3MgPSB0aGlzLmdldEJsb2NrQ2xhc3MoJHRoaXMpXG4gICAgICAsIGVsZW1TZWxlY3RvciA9ICcuJyArIHRoaXMuYnVpbGRFbGVtQ2xhc3MoYmxvY2tDbGFzcywgZWxlbUtleSlcbiAgICAgICwgZWxlbSA9ICR0aGlzLmlzKGVsZW1TZWxlY3RvcikgPyAkdGhpcyA6ICR0aGlzLmZpbmQoZWxlbVNlbGVjdG9yKTtcblxuICAgIHJldHVybiBlbGVtO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdmFsdWUgb2YgbW9kaWZpZXIuXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtb2RLZXlcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5nZXRNb2QgPSBmdW5jdGlvbigkdGhpcywgbW9kS2V5KSB7XG4gICAgdmFyIG1vZHMgPSB0aGlzLmV4dHJhY3RNb2RzKCR0aGlzLmZpcnN0KCkpO1xuXG4gICAgaWYgKG1vZHNbbW9kS2V5XSAhPSB1bmRlZmluZWQpIHJldHVybiBtb2RzW21vZEtleV07XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIG1vZGlmaWVyIG9mIGVsZW1lbnQuXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtb2RLZXlcbiAgICogQHBhcmFtIHtTdHJpbmd9IFttb2RWYWxdXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmhhc01vZCA9IGZ1bmN0aW9uKCR0aGlzLCBtb2RLZXksIG1vZFZhbCkge1xuICAgIHZhciBtb2RzID0gdGhpcy5leHRyYWN0TW9kcygkdGhpcy5maXJzdCgpKTtcblxuICAgIGlmIChtb2RWYWwpIHtcbiAgICAgIGlmIChtb2RzW21vZEtleV0gPT0gbW9kVmFsKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAobW9kc1ttb2RLZXldKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCBtb2RpZmllciBvbiBlbGVtZW50LlxuICAgKiBAcHVibGljXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kS2V5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbbW9kVmFsXVxuICAgKiBAcGFyYW0ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuc2V0TW9kID0gZnVuY3Rpb24oJHRoaXMsIG1vZEtleSwgbW9kVmFsKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAsIHNlbGVjdG9yID0gJHRoaXMuc2VsZWN0b3I7XG5cbiAgICAkdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSAkKHRoaXMpO1xuICAgICAgY3VycmVudC5zZWxlY3RvciA9IHNlbGVjdG9yO1xuXG4gICAgICB2YXIgbW9kcyA9IHNlbGYuZXh0cmFjdE1vZHMoY3VycmVudClcbiAgICAgICAgLCBiYXNlTmFtZSA9IHNlbGYuZ2V0QmFzZUNsYXNzKGN1cnJlbnQpO1xuXG4gICAgICBpZiAobW9kc1ttb2RLZXldICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgb2xkTW9kTmFtZSA9IHNlbGYuYnVpbGRNb2RDbGFzcyhiYXNlTmFtZSwgbW9kS2V5LCBtb2RzW21vZEtleV0pO1xuICAgICAgICBjdXJyZW50LnJlbW92ZUNsYXNzKG9sZE1vZE5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobW9kVmFsICE9PSBmYWxzZSkge1xuICAgICAgICB2YXIgbmV3TW9kTmFtZSA9IHNlbGYuYnVpbGRNb2RDbGFzcyhiYXNlTmFtZSwgbW9kS2V5LCBtb2RWYWwpO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50XG4gICAgICAgIC5hZGRDbGFzcyhuZXdNb2ROYW1lKVxuICAgICAgICAudHJpZ2dlcignc2V0bW9kJywgW21vZEtleSwgbW9kVmFsXSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gJHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBtb2RpZmllciBvbiBlbGVtZW50LlxuICAgKiBAcHVibGljXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kS2V5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbbW9kVmFsXVxuICAgKiBAcGFyYW0ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuZGVsTW9kID0gZnVuY3Rpb24oJHRoaXMsIG1vZEtleSwgbW9kVmFsKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAsIHNlbGVjdG9yID0gJHRoaXMuc2VsZWN0b3I7XG5cbiAgICAkdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSAkKHRoaXMpO1xuICAgICAgY3VycmVudC5zZWxlY3RvciA9IHNlbGVjdG9yO1xuXG4gICAgICB2YXIgbW9kcyA9IHNlbGYuZXh0cmFjdE1vZHMoY3VycmVudClcbiAgICAgICAgLCBiYXNlTmFtZSA9IHNlbGYuZ2V0QmFzZUNsYXNzKGN1cnJlbnQpO1xuXG4gICAgICBpZiAobW9kVmFsKSB7XG4gICAgICAgIGlmIChtb2RzW21vZEtleV0gPT0gbW9kVmFsKSB7XG4gICAgICAgICAgdmFyIG1vZE5hbWUgPSBzZWxmLmJ1aWxkTW9kQ2xhc3MoYmFzZU5hbWUsIG1vZEtleSwgbW9kc1ttb2RLZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBtb2ROYW1lID0gc2VsZi5idWlsZE1vZENsYXNzKGJhc2VOYW1lLCBtb2RLZXksIG1vZHNbbW9kS2V5XSk7XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRcbiAgICAgICAgLnJlbW92ZUNsYXNzKG1vZE5hbWUpXG4gICAgICAgIC50cmlnZ2VyKCdkZWxtb2QnLCBbbW9kS2V5LCBtb2RWYWxdKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAkdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRmlsdGVyaW5nIGVsZW1lbnRzIGJ5IG1vZGlmaWVyLlxuICAgKiBAcHVibGljXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kS2V5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbbW9kVmFsXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbnZlcnNlXVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmJ5TW9kID0gZnVuY3Rpb24oJHRoaXMsIG1vZEtleSwgbW9kVmFsLCBpbnZlcnNlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAsIG1vZFZhbCA9IG1vZFZhbCB8fCBudWxsXG4gICAgICAsIGludmVyc2UgPSBpbnZlcnNlIHx8IGZhbHNlXG4gICAgICAsIHNlbGVjdG9yID0gJHRoaXMuc2VsZWN0b3JcbiAgICAgICwgcmVzdWx0ID0gJCgpO1xuXG4gICAgJHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjdXJyZW50ID0gJCh0aGlzKTtcbiAgICAgIGN1cnJlbnQuc2VsZWN0b3IgPSBzZWxlY3RvcjtcblxuICAgICAgdmFyIG1vZHMgPSBzZWxmLmV4dHJhY3RNb2RzKGN1cnJlbnQpXG4gICAgICAgICwgYmFzZU5hbWUgPSBzZWxmLmdldEJhc2VDbGFzcyhjdXJyZW50KTtcblxuICAgICAgaWYgKG1vZFZhbCkge1xuICAgICAgICBpZiAobW9kc1ttb2RLZXldID09IG1vZFZhbCkge1xuICAgICAgICAgIHZhciBtb2ROYW1lID0gc2VsZi5idWlsZE1vZENsYXNzKGJhc2VOYW1lLCBtb2RLZXksIG1vZHNbbW9kS2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAobW9kc1ttb2RLZXldICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBtb2ROYW1lID0gc2VsZi5idWlsZE1vZENsYXNzKGJhc2VOYW1lLCBtb2RLZXksIG1vZHNbbW9kS2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzdWx0ID0gcmVzdWx0LmFkZChpbnZlcnNlXG4gICAgICAgID8gY3VycmVudC5ub3QoJy4nICsgbW9kTmFtZSlcbiAgICAgICAgOiBjdXJyZW50LmZpbHRlcignLicgKyBtb2ROYW1lKSk7XG4gICAgfSk7XG5cbiAgICByZXN1bHQuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYmxvY2sgbmFtZXMgZnJvbSBlbGVtZW50LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gJHRoaXNcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5leHRyYWN0QmxvY2tzID0gZnVuY3Rpb24oJHRoaXMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsIHJlc3VsdCA9IFtdXG4gICAgICAsIHNlbGVjdG9ycyA9IHRoaXMuZ2V0Q2xhc3NlcygkdGhpcyk7XG5cbiAgICAkLmVhY2goc2VsZWN0b3JzLCBmdW5jdGlvbihpLCBzZWwpIHtcbiAgICAgIHZhciB0eXBlID0gc2VsZi5nZXRDbGFzc1R5cGUoc2VsKTtcblxuICAgICAgaWYgKHR5cGUgPT0gJ2Jsb2NrJykge1xuICAgICAgICByZXN1bHQucHVzaChzZWwpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwZSA9PSAnZWxlbScpIHtcbiAgICAgICAgdmFyIGVsZW0gPSBzZWwuc3BsaXQoc2VsZi5jb25maWcuZWxlbVByZWZpeCk7XG4gICAgICAgIHJlc3VsdC5wdXNoKGVsZW1bMF0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGVsZW1lbnQgbmFtZXMgZnJvbSBlbGVtZW50LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmV4dHJhY3RFbGVtcyA9IGZ1bmN0aW9uKCR0aGlzKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLCByZXN1bHQgPSBbXTtcblxuICAgICQuZWFjaChzZWxmLmdldENsYXNzZXMoJHRoaXMpLCBmdW5jdGlvbihpLCBjbGFzc05hbWUpIHtcbiAgICAgIGlmIChzZWxmLmdldENsYXNzVHlwZShjbGFzc05hbWUpID09ICdlbGVtJykge1xuICAgICAgICB2YXIgZWxlbU5hbWUgPSBjbGFzc05hbWUuc3BsaXQoc2VsZi5jb25maWcuZWxlbVByZWZpeCk7XG4gICAgICAgIHJlc3VsdC5wdXNoKGVsZW1OYW1lWzFdKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBtb2RpZmllcnMgZnJvbSBlbGVtZW50LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmV4dHJhY3RNb2RzID0gZnVuY3Rpb24oJHRoaXMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsIHJlc3VsdCA9IHt9O1xuXG4gICAgJHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG5cbiAgICAgICQuZWFjaChzZWxmLmdldENsYXNzZXMoJHRoaXMpLCBmdW5jdGlvbihpLCBjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKHNlbGYuZ2V0Q2xhc3NUeXBlKGNsYXNzTmFtZSkgPT0gJ21vZCcpIHtcbiAgICAgICAgICB2YXIgcmUgPSBzZWxmLmJ1aWxkTW9kQ2xhc3NSZSgpLmV4ZWMoY2xhc3NOYW1lKTtcbiAgICAgICAgICB2YXIgbW9kTmFtZSA9IHJlWzFdLnNwbGl0KHNlbGYuY29uZmlnLm1vZERsbXRyKTtcblxuICAgICAgICAgIGlmIChtb2ROYW1lWzFdICE9PSB1bmRlZmluZWQgJiYgbW9kTmFtZVsxXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciBtb2RWYWwgPSBtb2ROYW1lWzFdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbW9kVmFsID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXN1bHRbIG1vZE5hbWVbMF0gXSA9IG1vZFZhbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgY2xhc3NlcyBuYW1lcyBmcm9tIGVsZW1lbnQuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuZ2V0Q2xhc3NlcyA9IGZ1bmN0aW9uKCR0aGlzKSB7XG4gICAgdmFyIGNsYXNzZXMsIHJlc3VsdCA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiAkdGhpcyA9PSAnb2JqZWN0Jykge1xuXG4gICAgICBpZiAoJHRoaXMuc2VsZWN0b3IuaW5kZXhPZignLicpID09PSAwKSB7XG4gICAgICAgIGNsYXNzZXMgPSAkdGhpcy5zZWxlY3Rvci5zcGxpdCgnLicpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoJHRoaXMuYXR0cignY2xhc3MnKSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2xhc3NlcyA9ICR0aGlzLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNsYXNzZXMgPSAkdGhpcy5zcGxpdCgnLicpO1xuICAgIH1cblxuICAgICQuZWFjaChjbGFzc2VzLCBmdW5jdGlvbihpLCBjbGFzc05hbWUpIHtcbiAgICAgIGlmIChjbGFzc05hbWUgIT0gJycpIHJlc3VsdC5wdXNoKCQudHJpbShjbGFzc05hbWUpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHJlZ2V4cCBmb3IgYmxvY2tzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEByZXR1cm4ge1JlZ0V4cH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuYnVpbGRCbG9ja0NsYXNzUmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICAgICdeKCcgKyB0aGlzLmNvbmZpZy5uYW1lUGF0dGVybiArICcpJCdcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCdWlsZCByZWdleHAgZm9yIGVsZW1lbnRzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEByZXR1cm4ge1JlZ0V4cH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuYnVpbGRFbGVtQ2xhc3NSZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgJ14nICsgdGhpcy5jb25maWcubmFtZVBhdHRlcm4gKyB0aGlzLmNvbmZpZy5lbGVtUHJlZml4ICsgJygnICsgdGhpcy5jb25maWcubmFtZVBhdHRlcm4gKyAnKSQnXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogQnVpbGQgcmVnZXhwIGZvciBtb2RpZmllcnMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHJldHVybiB7UmVnRXhwfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5idWlsZE1vZENsYXNzUmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICAgICdeKD86JyArIHRoaXMuY29uZmlnLm5hbWVQYXR0ZXJuICsgJ3wnICsgdGhpcy5jb25maWcubmFtZVBhdHRlcm4gKyB0aGlzLmNvbmZpZy5lbGVtUHJlZml4ICsgdGhpcy5jb25maWcubmFtZVBhdHRlcm4gKyAnKScgKyB0aGlzLmNvbmZpZy5tb2RQcmVmaXggKyAnKCcgKyB0aGlzLmNvbmZpZy5uYW1lUGF0dGVybiArICcoKCcgKyB0aGlzLmNvbmZpZy5tb2REbG10ciArIHRoaXMuY29uZmlnLm5hbWVQYXR0ZXJuICsgJykkfCQpKSdcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCdWlsZCBjbGFzcyBuYW1lIGZvciBibG9jay5cbiAgICogQHByb3RlY3RlZFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gYmxvY2tOYW1lXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuYnVpbGRCbG9ja0NsYXNzID0gZnVuY3Rpb24oYmxvY2tOYW1lKSB7XG4gICAgcmV0dXJuIGJsb2NrTmFtZTtcbiAgfTtcblxuICAvKipcbiAgICogQnVpbGQgY2xhc3MgbmFtZSBmb3IgZWxlbWVudC5cbiAgICogQHByb3RlY3RlZFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gYmxvY2tOYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbGVtS2V5XG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuYnVpbGRFbGVtQ2xhc3MgPSBmdW5jdGlvbihibG9ja05hbWUsIGVsZW1LZXkpIHtcbiAgICByZXR1cm4gYmxvY2tOYW1lICsgdGhpcy5jb25maWcuZWxlbVByZWZpeCArIGVsZW1LZXk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGNsYXNzIG5hbWUgZm9yIG1vZGlmaWVyLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBibG9ja05hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1vZEtleVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kVmFsXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuYnVpbGRNb2RDbGFzcyA9IGZ1bmN0aW9uKGJhc2VDbGFzcywgbW9kS2V5LCBtb2RWYWwpIHtcbiAgICBpZiAobW9kVmFsICE9PSB1bmRlZmluZWQgJiYgbW9kVmFsICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gYmFzZUNsYXNzICsgdGhpcy5jb25maWcubW9kUHJlZml4ICsgbW9kS2V5ICsgdGhpcy5jb25maWcubW9kRGxtdHIgKyBtb2RWYWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBiYXNlQ2xhc3MgKyB0aGlzLmNvbmZpZy5tb2RQcmVmaXggKyBtb2RLZXk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBCdWlsZCBzZWxlY3RvciBmcm9tIG9iamVjdCBvciBzdHJpbmcuXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH1cbiAgICogQHBhcmFtIHtTdHJpbmd9XG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuYnVpbGRTZWxlY3RvciA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBwcmVmaXgpIHtcbiAgICBpZiAocHJlZml4ICE9PSAnJykge1xuICAgICAgdmFyIHByZWZpeCA9IHByZWZpeCB8fCAnLic7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHNlbGVjdG9yLmJsb2NrICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgYnVpbGRTZWxlY3RvciA9IHRoaXMuYnVpbGRCbG9ja0NsYXNzKHNlbGVjdG9yLmJsb2NrKTtcblxuICAgICAgICBpZiAoc2VsZWN0b3IuZWxlbSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBidWlsZFNlbGVjdG9yID0gdGhpcy5idWlsZEVsZW1DbGFzcyhidWlsZFNlbGVjdG9yLCBzZWxlY3Rvci5lbGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3Rvci5tb2QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIG1vZCA9IHNlbGVjdG9yLm1vZC5zcGxpdCgnOicpO1xuICAgICAgICAgIGJ1aWxkU2VsZWN0b3IgPSB0aGlzLmJ1aWxkTW9kQ2xhc3MoYnVpbGRTZWxlY3RvciwgbW9kWzBdLCBtb2RbMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1aWxkU2VsZWN0b3IgIT0gdW5kZWZpbmVkXG4gICAgICA/IHByZWZpeCArIGJ1aWxkU2VsZWN0b3JcbiAgICAgIDogcHJlZml4ICsgc2VsZWN0b3I7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGNsYXNzIG5hbWUgZm9yIGJsb2NrLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gJHRoaXNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtpbmRleF1cbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5nZXRCbG9ja0NsYXNzID0gZnVuY3Rpb24oJHRoaXMsIGluZGV4KSB7XG4gICAgdmFyIGJsb2NrQ2xhc3NlcyA9IHRoaXMuZXh0cmFjdEJsb2NrcygkdGhpcyk7XG4gICAgdmFyIGluZGV4ID0gaW5kZXggfHwgMDtcblxuICAgIHJldHVybiBpbmRleCA8PSBibG9ja0NsYXNzZXMubGVuZ3RoIC0gMVxuICAgICAgPyBibG9ja0NsYXNzZXNbaW5kZXhdXG4gICAgICA6IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBiYXNlIGNsYXNzIGZyb20gZWxlbWVudC5cbiAgICogQHByb3RlY3RlZFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRoaXNcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5nZXRCYXNlQ2xhc3MgPSBmdW5jdGlvbigkdGhpcykge1xuICAgIHZhciBzZWxmID0gdGhpcywgYmFzZUNsYXNzID0gbnVsbDtcbiAgICB2YXIgc2VsZWN0b3JzID0gdGhpcy5nZXRDbGFzc2VzKCR0aGlzKTtcblxuICAgICQuZWFjaChzZWxlY3RvcnMsIGZ1bmN0aW9uKGksIHNlbCkge1xuICAgICAgdmFyIGNsYXNzVHlwZSA9IHNlbGYuZ2V0Q2xhc3NUeXBlKHNlbCk7XG5cbiAgICAgIGlmIChjbGFzc1R5cGUgJiYgY2xhc3NUeXBlICE9ICdtb2QnKSB7XG4gICAgICAgIGJhc2VDbGFzcyA9IHNlbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBiYXNlQ2xhc3M7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBjbGFzcyB0eXBlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5nZXRDbGFzc1R5cGUgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgICBpZiAodGhpcy5tb2RDbGFzc1JlLnRlc3QoY2xhc3NOYW1lKSkge1xuICAgICAgcmV0dXJuICdtb2QnO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmVsZW1DbGFzc1JlLnRlc3QoY2xhc3NOYW1lKSkge1xuICAgICAgcmV0dXJuICdlbGVtJztcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5ibG9ja0NsYXNzUmUudGVzdChjbGFzc05hbWUpKSB7XG4gICAgICByZXR1cm4gJ2Jsb2NrJztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBCRU0gaW5zdGFuY2UuXG4gICAqL1xuICAkLkJFTSA9IG5ldyBCRU0oKTtcblxuICAvKipcbiAgICogRXh0ZW5kIGpRdWVyeSBvYmplY3QuXG4gICAqL1xuICAkLmZuLmV4dGVuZCh7XG4gICAgYmxvY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICQuQkVNLmdldEJsb2NrKHRoaXMpO1xuICAgIH0sXG5cbiAgICBlbGVtOiBmdW5jdGlvbihjdHgsIGVsZW1LZXkpIHtcbiAgICAgIGlmICghZWxlbUtleSkge1xuICAgICAgICBlbGVtS2V5ID0gY3R4O1xuICAgICAgICBjdHggPSBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJC5CRU0uZmluZEVsZW0oY3R4IHx8IHRoaXMsIGVsZW1LZXkpO1xuICAgIH0sXG5cbiAgICBjdHg6IGZ1bmN0aW9uKGJsb2NrLCBlbGVtKSB7XG4gICAgICByZXR1cm4gJC5CRU0uc3dpdGNoQmxvY2sodGhpcywgYmxvY2ssIGVsZW0pO1xuICAgIH0sXG5cbiAgICBtb2Q6IGZ1bmN0aW9uKG1vZEtleSwgbW9kVmFsKSB7XG4gICAgICBpZiAodHlwZW9mIG1vZFZhbCA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtb2RWYWwgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAobW9kVmFsID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gJC5CRU0uZGVsTW9kKHRoaXMsIG1vZEtleSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAobW9kVmFsICE9IG51bGwpXG4gICAgICAgID8gJC5CRU0uc2V0TW9kKHRoaXMsIG1vZEtleSwgbW9kVmFsKVxuICAgICAgICA6ICQuQkVNLmdldE1vZCh0aGlzLCBtb2RLZXkpO1xuICAgIH0sXG5cbiAgICBzZXRNb2Q6IGZ1bmN0aW9uKG1vZEtleSwgbW9kVmFsKSB7XG4gICAgICByZXR1cm4gJC5CRU0uc2V0TW9kKHRoaXMsIG1vZEtleSwgbW9kVmFsKTtcbiAgICB9LFxuXG4gICAgZGVsTW9kOiBmdW5jdGlvbihtb2RLZXksIG1vZFZhbCkge1xuICAgICAgcmV0dXJuICQuQkVNLmRlbE1vZCh0aGlzLCBtb2RLZXksIG1vZFZhbCk7XG4gICAgfSxcblxuICAgIGhhc01vZDogZnVuY3Rpb24obW9kS2V5LCBtb2RWYWwpIHtcbiAgICAgIHJldHVybiAkLkJFTS5oYXNNb2QodGhpcywgbW9kS2V5LCBtb2RWYWwpO1xuICAgIH0sXG5cbiAgICBieU1vZDogZnVuY3Rpb24obW9kS2V5LCBtb2RWYWwpIHtcbiAgICAgIHJldHVybiAkLkJFTS5ieU1vZCh0aGlzLCBtb2RLZXksIG1vZFZhbCk7XG4gICAgfSxcblxuICAgIGJ5Tm90TW9kOiBmdW5jdGlvbihtb2RLZXksIG1vZFZhbCkge1xuICAgICAgcmV0dXJuICQuQkVNLmJ5TW9kKHRoaXMsIG1vZEtleSwgbW9kVmFsLCAnaW52ZXJzZScpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgYmxvY2tzJ3Mgb3IgZWxlbSdzIG1vZGlmaWVyIGBtb2RLZXlgIGJldHdlZW4gYG1vZFZhbDFgIGFuZCBgbW9kVmFsMmBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kS2V5XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1vZFZhbDFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kVmFsMlxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgdG9nZ2xlTW9kOiBmdW5jdGlvbiAobW9kS2V5LCBtb2RWYWwxLCBtb2RWYWwyKSB7XG4gICAgICBpZiAodGhpcy5oYXNNb2QobW9kS2V5LCBtb2RWYWwxKSkge1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICAgICAgLmRlbE1vZChtb2RLZXksIG1vZFZhbDEpXG4gICAgICAgICAgICAuc2V0TW9kKG1vZEtleSwgbW9kVmFsMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICAgICAgLmRlbE1vZChtb2RLZXksIG1vZFZhbDIpXG4gICAgICAgICAgICAuc2V0TW9kKG1vZEtleSwgbW9kVmFsMSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxufSkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2NvcmUvfi9qcXVlcnktYmVtL2pxdWVyeS5iZW0uanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9jb3JlL2J1bmRsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImpRdWVyeVwiXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=