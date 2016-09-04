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
	
	__webpack_require__(31);
	
	__webpack_require__(10);
	
	var _MonsterBem = __webpack_require__(9);
	
	var _MonsterBem2 = _interopRequireDefault(_MonsterBem);
	
	var _DialogHelper = __webpack_require__(8);
	
	var _DialogHelper2 = _interopRequireDefault(_DialogHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Reconfigure BEM naming
	$.BEM.setConfig({
	  namePattern: '[a-zA-Z0-9\\-]+',
	  elemPrefix: '__',
	  modPrefix: '_',
	  modDlmtr: '_'
	});
	/*
	 This bundle is included into every page
	 */
	
	// Documentation is located at https://github.com/zenwalker/jquery-bem#jquerybem
	
	window.MonsterBem = new _MonsterBem2.default();
	
	window.DialogHelper = _DialogHelper2.default;
	
	/* global $ */
	$(function () {
	  window.MonsterBem.update();
	});

/***/ },

/***/ 8:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Dialog helper class for use with jquery-popup-overlay.
	 * Example usage:
	 * ```javascript
	 * var d = DialogHelper
	 *   .builderDialog()
	 *   .html("HALO")
	 *   .autoDestroy()
	 *   .show();
	 * ```
	 */
	var DialogHelper = function () {
	  /**
	   * Constructor.
	   * Initializes base properties and creates DOM node.
	   */
	  function DialogHelper(options) {
	    var _this = this;
	
	    _classCallCheck(this, DialogHelper);
	
	    this.resetParams();
	    this.$node = $('<div class="monster-dialog"></div>');
	    var newOptions = $.extend({
	      pagecontainer: '.m-wrapper',
	      closetransitionend: function closetransitionend() {
	        _this.onCloseChain.forEach(function (f) {
	          f();
	        });
	        if (_this.autoDestroyOnClose) {
	          _this.destroy();
	        }
	      }
	    }, options);
	    this.$node.popup(newOptions);
	    this.$body = $('<div class="monster-dialog__body"></div>');
	    this.$node.append(this.$body);
	    this.$node.closest('.popup_wrapper').addClass('m-wrapper');
	  }
	
	  /**
	   * Creates new DialogHelper and returns it.
	   * @param {object} options
	   * @returns {DialogHelper}
	   */
	
	
	  _createClass(DialogHelper, [{
	    key: 'resetParams',
	
	
	    /**
	     * Internal function - resets class params.
	     */
	    value: function resetParams() {
	      this.$node = null;
	      this.autoDestroyOnClose = false;
	      this.onCloseChain = [];
	      this.$loader = null;
	      this.$body = null;
	      this.$title = null;
	      this.$closeButton = null;
	    }
	
	    /**
	     * Enables or disables close button.
	     * @param {boolean} enabled
	     * @returns {DialogHelper}
	     */
	
	  }, {
	    key: 'closeButton',
	    value: function closeButton() {
	      var _this2 = this;
	
	      var enabled = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      if (enabled && this.$closeButton === null) {
	        this.$closeButton = $('<div class="monster-dialog__close"></div>');
	        this.$closeButton.prepend(this.$node);
	        this.$closeButton.click(function () {
	          return _this2.$node.popup('hide');
	        });
	      }
	      if (!enabled && this.$closeButton !== null) {
	        this.$closeButton.remove();
	        this.$closeButton = null;
	      }
	      return this;
	    }
	
	    /**
	     * Show close on mobile devices.
	     * @param {boolean} tablet Treat tablet as mobile devices too.
	     * @returns {DialogHelper}
	     */
	
	  }, {
	    key: 'showCloseOnMobile',
	    value: function showCloseOnMobile() {
	      var tablet = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	
	      /* global is:false */
	      if (is.mobile() || tablet && is.tablet()) {
	        this.closeButton(true);
	      }
	      return this;
	    }
	
	    /**
	     * Set autoDestroy option. If true - destroys DOM node on close.
	     * @param {boolean} value
	     * @returns {DialogHelper}
	     */
	
	  }, {
	    key: 'autoDestroy',
	    value: function autoDestroy() {
	      var value = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      this.autoDestroyOnClose = value;
	      return this;
	    }
	
	    /**
	     * Set the dialog title. Adds title element if not set
	     * @param {string|$|boolean} title
	     * @returns {DialogHelper}
	     */
	
	  }, {
	    key: 'title',
	    value: function title(_title) {
	      if (this.$title === null && _title === false) {
	        this.$title.remove();
	        this.$title = null;
	        return this;
	      }
	      if (this.$title === null) {
	        this.$title = $('<div class="monster-dialog__title"></div>');
	        this.$title.prependTo(this.$node);
	      }
	      if (_title instanceof $) {
	        this.$title.append(_title);
	      } else {
	        this.$title.html(_title);
	      }
	      return this;
	    }
	
	    /**
	     * Run some actions on $node element
	     * @param {DialogHelper~node} f Function to run on element, accepts $node as a param
	     * @returns {DialogHelper}
	     */
	
	  }, {
	    key: 'node',
	    value: function node(f) {
	      f(this.$node);
	      return this;
	    }
	
	    /**
	     * Run some actions on $body element
	     * @param {DialogHelper~body} f Function to run on element, accepts $body as a param
	     * @returns {DialogHelper}
	     */
	
	  }, {
	    key: 'body',
	    value: function body(f) {
	      f(this.$body);
	      return this;
	    }
	
	    /**
	     * Set HTML content of popup.
	     *
	     * @param {string|$} html String or jQuery node.
	     * @returns {DialogHelper}
	     */
	
	  }, {
	    key: 'html',
	    value: function html(_html) {
	      if (_html instanceof $) {
	        this.$body.empty();
	        this.$body.append(_html);
	      } else {
	        this.$body.html(_html);
	      }
	      return this;
	    }
	
	    /**
	     * Creates loader element
	     * @returns {DialogHelper}
	     */
	
	  }, {
	    key: 'createLoader',
	    value: function createLoader() {
	      if (this.$loader === null) {
	        this.$loader = $('<div class="monster-dialog__loader"></div>');
	        this.$node.prepend(this.$loader);
	      }
	      return this;
	    }
	
	    /**
	     * Run some actions on $loader element
	     * @param {DialogHelper~loader} f Function to run on element, accepts $loader as a param
	     * @returns {DialogHelper}
	     */
	
	  }, {
	    key: 'loader',
	    value: function loader(f) {
	      this.createLoader();
	      f(this.$loader);
	      return this;
	    }
	
	    /**
	     * Runs ajax request for some popup content.
	     * Shows loader while request is processed.
	     *
	     * @param {object} $ajax PlainObject configuration for $.ajax @see http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings
	     * @param {$|null} target Where to insert requested content: jQuery $node or null for default body.
	     * @returns {DialogHelper}
	     */
	
	  }, {
	    key: 'ajax',
	    value: function ajax($ajax) {
	      var _this3 = this;
	
	      var target = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	      // ensure loader is created
	      this.createLoader();
	      // show loader as we are starting request now
	      this.$loader.show();
	
	      var $target = target instanceof $ ? target : this.$body;
	      /* eslint-disable no-unused-vars, no-param-reassign */
	      $ajax.dataType = 'html';
	
	      $.ajax($ajax).fail(function (jqXHR, textStatus, errorThrown) {
	        // @todo: display error somehow
	      }).done(function (data, textStatus, jqXHR) {
	        var $data = $(data);
	        $target.append($data);
	        _this3.$loader.hide();
	      });
	      /* eslint-enable no-unused-vars, no-param-reassign */
	      return this;
	    }
	
	    /**
	     * Add callback to chain on close.
	     *
	     * @param f
	     * @returns {DialogHelper}
	     */
	
	  }, {
	    key: 'onClose',
	    value: function onClose(f) {
	      this.onCloseChain.push(f);
	      return this;
	    }
	
	    /**
	     * Shows popup.
	     * @returns {DialogHelper}
	     */
	
	  }, {
	    key: 'show',
	    value: function show() {
	      this.$node.data('dialogHelperInstance', this);
	      this.$node.popup('show');
	      return this;
	    }
	
	    /**
	     * Hides the popup.
	     * @returns {DialogHelper}
	     */
	
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.$node.popup('hide');
	      return this;
	    }
	
	    /**
	     * Destroys popup DOM node.
	     */
	
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      if (this.$node) {
	        var $wrapper = this.$node.closest('.popup_wrapper');
	        var id = this.$node.attr('id');
	        var $background = $('#' + id + '_background');
	        $background.remove();
	        $wrapper.remove();
	
	        if (this.$loader) {
	          this.$loader.remove();
	        }
	        if (this.$title) {
	          this.$title.remove();
	        }
	        this.$body.remove();
	        this.$node.remove();
	        this.resetParams();
	      }
	    }
	    /**
	     * Callback used by node.
	     * @callback DialogHelper~node
	     * @param {object} $node
	     */
	    /**
	     * Callback used by loader.
	     * @callback DialogHelper~loader
	     * @param {object} $loader
	     */
	    /**
	     * Callback used by body.
	     * @callback DialogHelper~body
	     * @param {object} $body
	     */
	
	  }], [{
	    key: 'dialog',
	    value: function dialog() {
	      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      return new DialogHelper(options);
	    }
	
	    /**
	     * Creates new DialogHelper in VisualBuilder theme.
	     * @param {object} options
	     * @returns {DialogHelper}
	     */
	
	  }, {
	    key: 'builderDialog',
	    value: function builderDialog() {
	      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      var dialog = DialogHelper.dialog(options);
	      return dialog.node(function ($node) {
	        return $node.mod('theme', 'builder');
	      });
	    }
	  }]);
	
	  return DialogHelper;
	}();
	
	exports.default = DialogHelper;

/***/ },

/***/ 9:
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

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/* @required jQuery */
	/**
	 * This is modified version of jquery-bem adding some new functions
	 */
	
	(function (root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(33)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
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

/***/ 31:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 33:
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjg5Nzg4MjcyMjQwMGY2Y2RhMzA/N2UxNCIsIndlYnBhY2s6Ly8vLi9jb3JlL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL2dlbmVyYWwvRGlhbG9nSGVscGVyLmpzIiwid2VicGFjazovLy8uL2NvcmUvZ2VuZXJhbC9Nb25zdGVyQmVtLmpzIiwid2VicGFjazovLy8uL2NvcmUvbGlicy9qcXVlcnkuYmVtLmpzIiwid2VicGFjazovLy8uL2NvcmUvYnVuZGxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyIkIiwiQkVNIiwic2V0Q29uZmlnIiwibmFtZVBhdHRlcm4iLCJlbGVtUHJlZml4IiwibW9kUHJlZml4IiwibW9kRGxtdHIiLCJ3aW5kb3ciLCJNb25zdGVyQmVtIiwiRGlhbG9nSGVscGVyIiwidXBkYXRlIiwib3B0aW9ucyIsInJlc2V0UGFyYW1zIiwiJG5vZGUiLCJuZXdPcHRpb25zIiwiZXh0ZW5kIiwicGFnZWNvbnRhaW5lciIsImNsb3NldHJhbnNpdGlvbmVuZCIsIm9uQ2xvc2VDaGFpbiIsImZvckVhY2giLCJmIiwiYXV0b0Rlc3Ryb3lPbkNsb3NlIiwiZGVzdHJveSIsInBvcHVwIiwiJGJvZHkiLCJhcHBlbmQiLCJjbG9zZXN0IiwiYWRkQ2xhc3MiLCIkbG9hZGVyIiwiJHRpdGxlIiwiJGNsb3NlQnV0dG9uIiwiZW5hYmxlZCIsInByZXBlbmQiLCJjbGljayIsInJlbW92ZSIsInRhYmxldCIsImlzIiwibW9iaWxlIiwiY2xvc2VCdXR0b24iLCJ2YWx1ZSIsInRpdGxlIiwicHJlcGVuZFRvIiwiaHRtbCIsImVtcHR5IiwiY3JlYXRlTG9hZGVyIiwiJGFqYXgiLCJ0YXJnZXQiLCJzaG93IiwiJHRhcmdldCIsImRhdGFUeXBlIiwiYWpheCIsImZhaWwiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImRvbmUiLCJkYXRhIiwiJGRhdGEiLCJoaWRlIiwicHVzaCIsIiR3cmFwcGVyIiwiaWQiLCJhdHRyIiwiJGJhY2tncm91bmQiLCJkaWFsb2ciLCJub2RlIiwibW9kIiwicGFyYW1zIiwiYmxvY2tDYWxsYmFja3MiLCJ1c2VyU2V0dGluZ3MiLCJNb25zdGVyQmVtU2V0dGluZ3MiLCJzZXR0aW5ncyIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJjYWxsYmFjayIsImJsb2NrTmFtZSIsImVhY2giLCJpdGVyIiwiJHRoaXMiLCJjYWxsIiwicmVtb3ZlQ2xhc3MiLCJyb290IiwiZmFjdG9yeSIsImRlZmluZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwialF1ZXJ5IiwidW5kZWZpbmVkIiwiY29uZmlnIiwicHJvdG90eXBlIiwiYmxvY2tDbGFzc1JlIiwiYnVpbGRCbG9ja0NsYXNzUmUiLCJlbGVtQ2xhc3NSZSIsImJ1aWxkRWxlbUNsYXNzUmUiLCJtb2RDbGFzc1JlIiwiYnVpbGRNb2RDbGFzc1JlIiwiZ2V0QmxvY2siLCJibG9ja0NsYXNzIiwiZ2V0QmxvY2tDbGFzcyIsImJsb2NrIiwic2VsZWN0b3IiLCJzd2l0Y2hCbG9jayIsImVsZW0iLCJidWlsZFNlbGVjdG9yIiwiZmluZEVsZW0iLCJlbGVtS2V5IiwiZWxlbVNlbGVjdG9yIiwiYnVpbGRFbGVtQ2xhc3MiLCJmaW5kIiwiZ2V0TW9kIiwibW9kS2V5IiwibW9kcyIsImV4dHJhY3RNb2RzIiwiZmlyc3QiLCJoYXNNb2QiLCJtb2RWYWwiLCJzZXRNb2QiLCJzZWxmIiwiY3VycmVudCIsImJhc2VOYW1lIiwiZ2V0QmFzZUNsYXNzIiwib2xkTW9kTmFtZSIsImJ1aWxkTW9kQ2xhc3MiLCJuZXdNb2ROYW1lIiwidHJpZ2dlciIsImRlbE1vZCIsIm1vZE5hbWUiLCJieU1vZCIsImludmVyc2UiLCJyZXN1bHQiLCJhZGQiLCJub3QiLCJmaWx0ZXIiLCJleHRyYWN0QmxvY2tzIiwic2VsZWN0b3JzIiwiZ2V0Q2xhc3NlcyIsImkiLCJzZWwiLCJ0eXBlIiwiZ2V0Q2xhc3NUeXBlIiwic3BsaXQiLCJleHRyYWN0RWxlbXMiLCJjbGFzc05hbWUiLCJlbGVtTmFtZSIsInJlIiwiZXhlYyIsImNsYXNzZXMiLCJpbmRleE9mIiwidHJpbSIsIlJlZ0V4cCIsImJ1aWxkQmxvY2tDbGFzcyIsImJhc2VDbGFzcyIsInByZWZpeCIsImluZGV4IiwiYmxvY2tDbGFzc2VzIiwibGVuZ3RoIiwiY2xhc3NUeXBlIiwidGVzdCIsImZuIiwiaXNCZW1CbG9jayIsImlzQmxvY2siLCJibG9ja1NldHRpbmdzIiwiZGVmYXVsdFNldHRpbmdzIiwiY3R4IiwiYnlOb3RNb2QiLCJ0b2dnbGVNb2QiLCJtb2RWYWwxIiwibW9kVmFsMiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUN0Q0E7O0FBTUE7O0FBV0E7Ozs7QUFHQTs7Ozs7O0FBWkE7QUFDQUEsR0FBRUMsR0FBRixDQUFNQyxTQUFOLENBQWdCO0FBQ2RDLGdCQUFhLGlCQURDO0FBRWRDLGVBQVksSUFGRTtBQUdkQyxjQUFXLEdBSEc7QUFJZEMsYUFBVTtBQUpJLEVBQWhCO0FBUkE7Ozs7QUFJQTs7QUFhQUMsUUFBT0MsVUFBUCxHQUFvQiwwQkFBcEI7O0FBR0FELFFBQU9FLFlBQVA7O0FBRUE7QUFDQVQsR0FBRSxZQUFNO0FBQ05PLFVBQU9DLFVBQVAsQ0FBa0JFLE1BQWxCO0FBQ0QsRUFGRCxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTs7Ozs7Ozs7Ozs7S0FXTUQsWTtBQUNKOzs7O0FBSUEseUJBQVlFLE9BQVosRUFBcUI7QUFBQTs7QUFBQTs7QUFDbkIsVUFBS0MsV0FBTDtBQUNBLFVBQUtDLEtBQUwsR0FBYWIsRUFBRSxvQ0FBRixDQUFiO0FBQ0EsU0FBTWMsYUFBYWQs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aGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMjg5Nzg4MjcyMjQwMGY2Y2RhMzBcbiAqKi8iLCJpbXBvcnQgJy4vYnVuZGxlLmNzcyc7XG4vKlxuIFRoaXMgYnVuZGxlIGlzIGluY2x1ZGVkIGludG8gZXZlcnkgcGFnZVxuICovXG5cbi8vIERvY3VtZW50YXRpb24gaXMgbG9jYXRlZCBhdCBodHRwczovL2dpdGh1Yi5jb20vemVud2Fsa2VyL2pxdWVyeS1iZW0janF1ZXJ5YmVtXG5pbXBvcnQgJy4vbGlicy9qcXVlcnkuYmVtJztcblxuLy8gUmVjb25maWd1cmUgQkVNIG5hbWluZ1xuJC5CRU0uc2V0Q29uZmlnKHtcbiAgbmFtZVBhdHRlcm46ICdbYS16QS1aMC05XFxcXC1dKycsXG4gIGVsZW1QcmVmaXg6ICdfXycsXG4gIG1vZFByZWZpeDogJ18nLFxuICBtb2REbG10cjogJ18nLFxufSk7XG5cblxuaW1wb3J0IE1vbnN0ZXJCZW0gZnJvbSAnLi9nZW5lcmFsL01vbnN0ZXJCZW0nO1xud2luZG93Lk1vbnN0ZXJCZW0gPSBuZXcgTW9uc3RlckJlbSgpO1xuXG5pbXBvcnQgRGlhbG9nSGVscGVyIGZyb20gJy4vZ2VuZXJhbC9EaWFsb2dIZWxwZXInO1xud2luZG93LkRpYWxvZ0hlbHBlciA9IERpYWxvZ0hlbHBlcjtcblxuLyogZ2xvYmFsICQgKi9cbiQoKCkgPT4ge1xuICB3aW5kb3cuTW9uc3RlckJlbS51cGRhdGUoKTtcbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb3JlL2J1bmRsZS5qc1xuICoqLyIsIi8qKlxuICogRGlhbG9nIGhlbHBlciBjbGFzcyBmb3IgdXNlIHdpdGgganF1ZXJ5LXBvcHVwLW92ZXJsYXkuXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIGQgPSBEaWFsb2dIZWxwZXJcbiAqICAgLmJ1aWxkZXJEaWFsb2coKVxuICogICAuaHRtbChcIkhBTE9cIilcbiAqICAgLmF1dG9EZXN0cm95KClcbiAqICAgLnNob3coKTtcbiAqIGBgYFxuICovXG5jbGFzcyBEaWFsb2dIZWxwZXIge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IuXG4gICAqIEluaXRpYWxpemVzIGJhc2UgcHJvcGVydGllcyBhbmQgY3JlYXRlcyBET00gbm9kZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLnJlc2V0UGFyYW1zKCk7XG4gICAgdGhpcy4kbm9kZSA9ICQoJzxkaXYgY2xhc3M9XCJtb25zdGVyLWRpYWxvZ1wiPjwvZGl2PicpO1xuICAgIGNvbnN0IG5ld09wdGlvbnMgPSAkLmV4dGVuZChcbiAgICAgIHtcbiAgICAgICAgcGFnZWNvbnRhaW5lcjogJy5tLXdyYXBwZXInLFxuICAgICAgICBjbG9zZXRyYW5zaXRpb25lbmQ6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uQ2xvc2VDaGFpbi5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgZigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICh0aGlzLmF1dG9EZXN0cm95T25DbG9zZSkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuICAgIHRoaXMuJG5vZGUucG9wdXAobmV3T3B0aW9ucyk7XG4gICAgdGhpcy4kYm9keSA9ICQoJzxkaXYgY2xhc3M9XCJtb25zdGVyLWRpYWxvZ19fYm9keVwiPjwvZGl2PicpO1xuICAgIHRoaXMuJG5vZGUuYXBwZW5kKHRoaXMuJGJvZHkpO1xuICAgIHRoaXMuJG5vZGUuY2xvc2VzdCgnLnBvcHVwX3dyYXBwZXInKS5hZGRDbGFzcygnbS13cmFwcGVyJyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBuZXcgRGlhbG9nSGVscGVyIGFuZCByZXR1cm5zIGl0LlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7RGlhbG9nSGVscGVyfVxuICAgKi9cbiAgc3RhdGljIGRpYWxvZyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gbmV3IERpYWxvZ0hlbHBlcihvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIG5ldyBEaWFsb2dIZWxwZXIgaW4gVmlzdWFsQnVpbGRlciB0aGVtZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIHN0YXRpYyBidWlsZGVyRGlhbG9nKG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGRpYWxvZyA9IERpYWxvZ0hlbHBlci5kaWFsb2cob3B0aW9ucyk7XG4gICAgcmV0dXJuIGRpYWxvZy5ub2RlKCRub2RlID0+ICRub2RlLm1vZCgndGhlbWUnLCAnYnVpbGRlcicpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm5hbCBmdW5jdGlvbiAtIHJlc2V0cyBjbGFzcyBwYXJhbXMuXG4gICAqL1xuICByZXNldFBhcmFtcygpIHtcbiAgICB0aGlzLiRub2RlID0gbnVsbDtcbiAgICB0aGlzLmF1dG9EZXN0cm95T25DbG9zZSA9IGZhbHNlO1xuICAgIHRoaXMub25DbG9zZUNoYWluID0gW107XG4gICAgdGhpcy4kbG9hZGVyID0gbnVsbDtcbiAgICB0aGlzLiRib2R5ID0gbnVsbDtcbiAgICB0aGlzLiR0aXRsZSA9IG51bGw7XG4gICAgdGhpcy4kY2xvc2VCdXR0b24gPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgb3IgZGlzYWJsZXMgY2xvc2UgYnV0dG9uLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWRcbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIGNsb3NlQnV0dG9uKGVuYWJsZWQgPSB0cnVlKSB7XG4gICAgaWYgKGVuYWJsZWQgJiYgdGhpcy4kY2xvc2VCdXR0b24gPT09IG51bGwpIHtcbiAgICAgIHRoaXMuJGNsb3NlQnV0dG9uID0gJCgnPGRpdiBjbGFzcz1cIm1vbnN0ZXItZGlhbG9nX19jbG9zZVwiPjwvZGl2PicpO1xuICAgICAgdGhpcy4kY2xvc2VCdXR0b24ucHJlcGVuZCh0aGlzLiRub2RlKTtcbiAgICAgIHRoaXMuJGNsb3NlQnV0dG9uLmNsaWNrKCgpID0+IHRoaXMuJG5vZGUucG9wdXAoJ2hpZGUnKSk7XG4gICAgfVxuICAgIGlmICghZW5hYmxlZCAmJiB0aGlzLiRjbG9zZUJ1dHRvbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy4kY2xvc2VCdXR0b24ucmVtb3ZlKCk7XG4gICAgICB0aGlzLiRjbG9zZUJ1dHRvbiA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgY2xvc2Ugb24gbW9iaWxlIGRldmljZXMuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdGFibGV0IFRyZWF0IHRhYmxldCBhcyBtb2JpbGUgZGV2aWNlcyB0b28uXG4gICAqIEByZXR1cm5zIHtEaWFsb2dIZWxwZXJ9XG4gICAqL1xuICBzaG93Q2xvc2VPbk1vYmlsZSh0YWJsZXQgPSBmYWxzZSkge1xuICAgIC8qIGdsb2JhbCBpczpmYWxzZSAqL1xuICAgIGlmIChpcy5tb2JpbGUoKSB8fCAodGFibGV0ICYmIGlzLnRhYmxldCgpKSkge1xuICAgICAgdGhpcy5jbG9zZUJ1dHRvbih0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGF1dG9EZXN0cm95IG9wdGlvbi4gSWYgdHJ1ZSAtIGRlc3Ryb3lzIERPTSBub2RlIG9uIGNsb3NlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gICAqIEByZXR1cm5zIHtEaWFsb2dIZWxwZXJ9XG4gICAqL1xuICBhdXRvRGVzdHJveSh2YWx1ZSA9IHRydWUpIHtcbiAgICB0aGlzLmF1dG9EZXN0cm95T25DbG9zZSA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGlhbG9nIHRpdGxlLiBBZGRzIHRpdGxlIGVsZW1lbnQgaWYgbm90IHNldFxuICAgKiBAcGFyYW0ge3N0cmluZ3wkfGJvb2xlYW59IHRpdGxlXG4gICAqIEByZXR1cm5zIHtEaWFsb2dIZWxwZXJ9XG4gICAqL1xuICB0aXRsZSh0aXRsZSkge1xuICAgIGlmICh0aGlzLiR0aXRsZSA9PT0gbnVsbCAmJiB0aXRsZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuJHRpdGxlLnJlbW92ZSgpO1xuICAgICAgdGhpcy4kdGl0bGUgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGlmICh0aGlzLiR0aXRsZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy4kdGl0bGUgPSAkKCc8ZGl2IGNsYXNzPVwibW9uc3Rlci1kaWFsb2dfX3RpdGxlXCI+PC9kaXY+Jyk7XG4gICAgICB0aGlzLiR0aXRsZS5wcmVwZW5kVG8odGhpcy4kbm9kZSk7XG4gICAgfVxuICAgIGlmICh0aXRsZSBpbnN0YW5jZW9mICQpIHtcbiAgICAgIHRoaXMuJHRpdGxlLmFwcGVuZCh0aXRsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJHRpdGxlLmh0bWwodGl0bGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW4gc29tZSBhY3Rpb25zIG9uICRub2RlIGVsZW1lbnRcbiAgICogQHBhcmFtIHtEaWFsb2dIZWxwZXJ+bm9kZX0gZiBGdW5jdGlvbiB0byBydW4gb24gZWxlbWVudCwgYWNjZXB0cyAkbm9kZSBhcyBhIHBhcmFtXG4gICAqIEByZXR1cm5zIHtEaWFsb2dIZWxwZXJ9XG4gICAqL1xuICBub2RlKGYpIHtcbiAgICBmKHRoaXMuJG5vZGUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1biBzb21lIGFjdGlvbnMgb24gJGJvZHkgZWxlbWVudFxuICAgKiBAcGFyYW0ge0RpYWxvZ0hlbHBlcn5ib2R5fSBmIEZ1bmN0aW9uIHRvIHJ1biBvbiBlbGVtZW50LCBhY2NlcHRzICRib2R5IGFzIGEgcGFyYW1cbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIGJvZHkoZikge1xuICAgIGYodGhpcy4kYm9keSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IEhUTUwgY29udGVudCBvZiBwb3B1cC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8JH0gaHRtbCBTdHJpbmcgb3IgalF1ZXJ5IG5vZGUuXG4gICAqIEByZXR1cm5zIHtEaWFsb2dIZWxwZXJ9XG4gICAqL1xuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCBpbnN0YW5jZW9mICQpIHtcbiAgICAgIHRoaXMuJGJvZHkuZW1wdHkoKTtcbiAgICAgIHRoaXMuJGJvZHkuYXBwZW5kKGh0bWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRib2R5Lmh0bWwoaHRtbCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgbG9hZGVyIGVsZW1lbnRcbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIGNyZWF0ZUxvYWRlcigpIHtcbiAgICBpZiAodGhpcy4kbG9hZGVyID09PSBudWxsKSB7XG4gICAgICB0aGlzLiRsb2FkZXIgPSAkKCc8ZGl2IGNsYXNzPVwibW9uc3Rlci1kaWFsb2dfX2xvYWRlclwiPjwvZGl2PicpO1xuICAgICAgdGhpcy4kbm9kZS5wcmVwZW5kKHRoaXMuJGxvYWRlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1biBzb21lIGFjdGlvbnMgb24gJGxvYWRlciBlbGVtZW50XG4gICAqIEBwYXJhbSB7RGlhbG9nSGVscGVyfmxvYWRlcn0gZiBGdW5jdGlvbiB0byBydW4gb24gZWxlbWVudCwgYWNjZXB0cyAkbG9hZGVyIGFzIGEgcGFyYW1cbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIGxvYWRlcihmKSB7XG4gICAgdGhpcy5jcmVhdGVMb2FkZXIoKTtcbiAgICBmKHRoaXMuJGxvYWRlcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUnVucyBhamF4IHJlcXVlc3QgZm9yIHNvbWUgcG9wdXAgY29udGVudC5cbiAgICogU2hvd3MgbG9hZGVyIHdoaWxlIHJlcXVlc3QgaXMgcHJvY2Vzc2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gJGFqYXggUGxhaW5PYmplY3QgY29uZmlndXJhdGlvbiBmb3IgJC5hamF4IEBzZWUgaHR0cDovL2FwaS5qcXVlcnkuY29tL2pRdWVyeS5hamF4LyNqUXVlcnktYWpheC1zZXR0aW5nc1xuICAgKiBAcGFyYW0geyR8bnVsbH0gdGFyZ2V0IFdoZXJlIHRvIGluc2VydCByZXF1ZXN0ZWQgY29udGVudDogalF1ZXJ5ICRub2RlIG9yIG51bGwgZm9yIGRlZmF1bHQgYm9keS5cbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIGFqYXgoJGFqYXgsIHRhcmdldCA9IG51bGwpIHtcbiAgICAvLyBlbnN1cmUgbG9hZGVyIGlzIGNyZWF0ZWRcbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpO1xuICAgIC8vIHNob3cgbG9hZGVyIGFzIHdlIGFyZSBzdGFydGluZyByZXF1ZXN0IG5vd1xuICAgIHRoaXMuJGxvYWRlci5zaG93KCk7XG5cbiAgICBjb25zdCAkdGFyZ2V0ID0gdGFyZ2V0IGluc3RhbmNlb2YgJCA/IHRhcmdldCA6IHRoaXMuJGJvZHk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMsIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgJGFqYXguZGF0YVR5cGUgPSAnaHRtbCc7XG5cbiAgICAkXG4gICAgICAuYWpheCgkYWpheClcbiAgICAgIC5mYWlsKChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgLy8gQHRvZG86IGRpc3BsYXkgZXJyb3Igc29tZWhvd1xuICAgICAgfSlcbiAgICAgIC5kb25lKChkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUikgPT4ge1xuICAgICAgICBjb25zdCAkZGF0YSA9ICQoZGF0YSk7XG4gICAgICAgICR0YXJnZXQuYXBwZW5kKCRkYXRhKTtcbiAgICAgICAgdGhpcy4kbG9hZGVyLmhpZGUoKTtcbiAgICAgIH0pO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMsIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNhbGxiYWNrIHRvIGNoYWluIG9uIGNsb3NlLlxuICAgKlxuICAgKiBAcGFyYW0gZlxuICAgKiBAcmV0dXJucyB7RGlhbG9nSGVscGVyfVxuICAgKi9cbiAgb25DbG9zZShmKSB7XG4gICAgdGhpcy5vbkNsb3NlQ2hhaW4ucHVzaChmKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBwb3B1cC5cbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIHNob3coKSB7XG4gICAgdGhpcy4kbm9kZS5kYXRhKCdkaWFsb2dIZWxwZXJJbnN0YW5jZScsIHRoaXMpO1xuICAgIHRoaXMuJG5vZGUucG9wdXAoJ3Nob3cnKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyB0aGUgcG9wdXAuXG4gICAqIEByZXR1cm5zIHtEaWFsb2dIZWxwZXJ9XG4gICAqL1xuICBoaWRlKCkge1xuICAgIHRoaXMuJG5vZGUucG9wdXAoJ2hpZGUnKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyBwb3B1cCBET00gbm9kZS5cbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuJG5vZGUpIHtcbiAgICAgIGNvbnN0ICR3cmFwcGVyID0gdGhpcy4kbm9kZS5jbG9zZXN0KCcucG9wdXBfd3JhcHBlcicpO1xuICAgICAgY29uc3QgaWQgPSB0aGlzLiRub2RlLmF0dHIoJ2lkJyk7XG4gICAgICBjb25zdCAkYmFja2dyb3VuZCA9ICQoYCMke2lkfV9iYWNrZ3JvdW5kYCk7XG4gICAgICAkYmFja2dyb3VuZC5yZW1vdmUoKTtcbiAgICAgICR3cmFwcGVyLnJlbW92ZSgpO1xuXG4gICAgICBpZiAodGhpcy4kbG9hZGVyKSB7XG4gICAgICAgIHRoaXMuJGxvYWRlci5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLiR0aXRsZSkge1xuICAgICAgICB0aGlzLiR0aXRsZS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuJGJvZHkucmVtb3ZlKCk7XG4gICAgICB0aGlzLiRub2RlLnJlbW92ZSgpO1xuICAgICAgdGhpcy5yZXNldFBhcmFtcygpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ2FsbGJhY2sgdXNlZCBieSBub2RlLlxuICAgKiBAY2FsbGJhY2sgRGlhbG9nSGVscGVyfm5vZGVcbiAgICogQHBhcmFtIHtvYmplY3R9ICRub2RlXG4gICAqL1xuICAvKipcbiAgICogQ2FsbGJhY2sgdXNlZCBieSBsb2FkZXIuXG4gICAqIEBjYWxsYmFjayBEaWFsb2dIZWxwZXJ+bG9hZGVyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSAkbG9hZGVyXG4gICAqL1xuICAvKipcbiAgICogQ2FsbGJhY2sgdXNlZCBieSBib2R5LlxuICAgKiBAY2FsbGJhY2sgRGlhbG9nSGVscGVyfmJvZHlcbiAgICogQHBhcmFtIHtvYmplY3R9ICRib2R5XG4gICAqL1xufVxuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2dIZWxwZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvcmUvZ2VuZXJhbC9EaWFsb2dIZWxwZXIuanNcbiAqKi8iLCJjbGFzcyBNb25zdGVyQmVtIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLmJsb2NrQ2FsbGJhY2tzID0ge307XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBNb25zdGVyQmVtIHNldHRpbmdzLlxuICAgKiBVc2VzIE1vbnN0ZXJCZW1TZXR0aW5ncyB2YXJpYWJsZSBpZiBwcm92aWRlZCBvciBkZWZhdWx0IHZhbHVlcyBpbnN0ZWFkLlxuICAgKi9cbiAgcGFyYW1zKCkge1xuICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5Nb25zdGVyQmVtU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh1c2VyU2V0dGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICB9KTtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcy5ibG9ja0NhbGxiYWNrcykuZm9yRWFjaChibG9ja05hbWUgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLmJsb2NrQ2FsbGJhY2tzW2Jsb2NrTmFtZV07XG4gICAgICAkKGAuJHtibG9ja05hbWV9Lm0tanNgKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgY2FsbGJhY2suY2FsbCgkdGhpcywgYmxvY2tOYW1lKTtcbiAgICAgICAgJHRoaXNcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ20tanMnKVxuICAgICAgICAgIC5hZGRDbGFzcygnbS1qcy1pbml0aWFsaXplZCcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9uc3RlckJlbTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29yZS9nZW5lcmFsL01vbnN0ZXJCZW0uanNcbiAqKi8iLCIvKiBAcmVxdWlyZWQgalF1ZXJ5ICovXG4vKipcbiAqIFRoaXMgaXMgbW9kaWZpZWQgdmVyc2lvbiBvZiBqcXVlcnktYmVtIGFkZGluZyBzb21lIG5ldyBmdW5jdGlvbnNcbiAqL1xuXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICBpZih0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gIH0gZWxzZSB7XG4gICAgZmFjdG9yeShyb290LmpRdWVyeSk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24oJCwgdW5kZWZpbmVkKSB7XG5cbiAgLyoqXG4gICAqIEJhc2UgQkVNIGNsYXNzLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIEJFTShjb25maWcpIHtcbiAgICB0aGlzLnNldENvbmZpZyhjb25maWcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGNvbmZpZyBmb3IgdGhlIHBsdWdpblxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0gZGVmYXVsdHMgaW4gYnJcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtjb25maWcuZWxlbVByZWZpeF0gLSBFbGVtZW50IHByZWZpeCAoZGVmYXVsdDogJ19fJylcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtjb25maWcubW9kUHJlZml4XSAtIE1vZGlmaWVyIHByZWZpeCAoZGVmYXVsdDogJ18nKVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2NvbmZpZy5tb2REbG10cl0gLSBNb2RpZmllciBkZWxpbWl0ZXIgKGRlZmF1bHQ6ICdfJylcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtjb25maWcubmFtZVBhdHRlcm5dIC1cbiAgICogICBQYXR0ZXJuIHRvIG1hdGNoIHZhbGlkIGJsb2NrIG5hbWVzIChkZWZhdWx0OiAnW2EtekEtWjAtOS1dKycpXG4gICAqL1xuICBCRU0ucHJvdG90eXBlLnNldENvbmZpZyA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gJC5leHRlbmQoe30sIHtcbiAgICAgIG5hbWVQYXR0ZXJuOiAnW2EtekEtWjAtOVxcXFwtXSsnLFxuICAgICAgZWxlbVByZWZpeDogJ19fJyxcbiAgICAgIG1vZFByZWZpeDogJy0tJyxcbiAgICAgIG1vZERsbXRyOiAnXycsXG4gICAgfSwgY29uZmlnKTtcblxuICAgIHRoaXMuYmxvY2tDbGFzc1JlID0gdGhpcy5idWlsZEJsb2NrQ2xhc3NSZSgpO1xuICAgIHRoaXMuZWxlbUNsYXNzUmUgPSB0aGlzLmJ1aWxkRWxlbUNsYXNzUmUoKTtcbiAgICB0aGlzLm1vZENsYXNzUmUgPSB0aGlzLmJ1aWxkTW9kQ2xhc3NSZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgcGFyZW50IGJsb2NrIG9mIGVsZW1lbnQuXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuZ2V0QmxvY2sgPSBmdW5jdGlvbigkdGhpcykge1xuICAgIHZhciBibG9ja0NsYXNzID0gdGhpcy5nZXRCbG9ja0NsYXNzKCR0aGlzKVxuICAgICAgLCBibG9jayA9ICR0aGlzLmNsb3Nlc3QoJy4nICsgYmxvY2tDbGFzcyk7XG5cbiAgICBibG9jay5zZWxlY3RvciA9IGJsb2NrQ2xhc3M7XG4gICAgcmV0dXJuIGJsb2NrO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTd2l0Y2ggYmxvY2sgY29udGV4dC5cbiAgICogQHB1YmxpY1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRoaXNcbiAgICogQHBhcmFtIHtTdHJpbmd9IGJsb2NrXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbZWxlbV1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5zd2l0Y2hCbG9jayA9IGZ1bmN0aW9uKCR0aGlzLCBibG9jaywgZWxlbSkge1xuICAgIHZhciBlbGVtID0gZWxlbSB8fCBudWxsO1xuXG4gICAgZWxlbVxuICAgICAgPyAkdGhpcy5zZWxlY3RvciA9IHRoaXMuYnVpbGRTZWxlY3Rvcih7IGJsb2NrOiBibG9jaywgZWxlbTogZWxlbSB9KVxuICAgICAgOiAkdGhpcy5zZWxlY3RvciA9IHRoaXMuYnVpbGRTZWxlY3Rvcih7IGJsb2NrOiBibG9jayB9KTtcblxuICAgIHJldHVybiAkdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRmluZCBlbGVtZW50IGluIGJsb2NrLlxuICAgKiBAcHVibGljXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gICR0aGlzICAgIERPTSBlbGVtZW50XG4gICAqIEBwYXJhbSAge1N0cmluZ30gIGVsZW1LZXkgIEVsZW1lbnQgbmFtZVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmZpbmRFbGVtID0gZnVuY3Rpb24oJHRoaXMsIGVsZW1LZXkpIHtcbiAgICB2YXIgYmxvY2tDbGFzcyA9IHRoaXMuZ2V0QmxvY2tDbGFzcygkdGhpcylcbiAgICAgICwgZWxlbVNlbGVjdG9yID0gJy4nICsgdGhpcy5idWlsZEVsZW1DbGFzcyhibG9ja0NsYXNzLCBlbGVtS2V5KVxuICAgICAgLCBlbGVtID0gJHRoaXMuaXMoZWxlbVNlbGVjdG9yKSA/ICR0aGlzIDogJHRoaXMuZmluZChlbGVtU2VsZWN0b3IpO1xuXG4gICAgcmV0dXJuIGVsZW07XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB2YWx1ZSBvZiBtb2RpZmllci5cbiAgICogQHB1YmxpY1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRoaXNcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1vZEtleVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmdldE1vZCA9IGZ1bmN0aW9uKCR0aGlzLCBtb2RLZXkpIHtcbiAgICB2YXIgbW9kcyA9IHRoaXMuZXh0cmFjdE1vZHMoJHRoaXMuZmlyc3QoKSk7XG5cbiAgICBpZiAobW9kc1ttb2RLZXldICE9IHVuZGVmaW5lZCkgcmV0dXJuIG1vZHNbbW9kS2V5XTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgbW9kaWZpZXIgb2YgZWxlbWVudC5cbiAgICogQHB1YmxpY1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRoaXNcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1vZEtleVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW21vZFZhbF1cbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuaGFzTW9kID0gZnVuY3Rpb24oJHRoaXMsIG1vZEtleSwgbW9kVmFsKSB7XG4gICAgdmFyIG1vZHMgPSB0aGlzLmV4dHJhY3RNb2RzKCR0aGlzLmZpcnN0KCkpO1xuXG4gICAgaWYgKG1vZFZhbCkge1xuICAgICAgaWYgKG1vZHNbbW9kS2V5XSA9PSBtb2RWYWwpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChtb2RzW21vZEtleV0pIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogU2V0IG1vZGlmaWVyIG9uIGVsZW1lbnQuXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtb2RLZXlcbiAgICogQHBhcmFtIHtTdHJpbmd9IFttb2RWYWxdXG4gICAqIEBwYXJhbSB7T2JqZWN0fVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5zZXRNb2QgPSBmdW5jdGlvbigkdGhpcywgbW9kS2V5LCBtb2RWYWwpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgICwgc2VsZWN0b3IgPSAkdGhpcy5zZWxlY3RvcjtcblxuICAgICR0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY3VycmVudCA9ICQodGhpcyk7XG4gICAgICBjdXJyZW50LnNlbGVjdG9yID0gc2VsZWN0b3I7XG5cbiAgICAgIHZhciBtb2RzID0gc2VsZi5leHRyYWN0TW9kcyhjdXJyZW50KVxuICAgICAgICAsIGJhc2VOYW1lID0gc2VsZi5nZXRCYXNlQ2xhc3MoY3VycmVudCk7XG5cbiAgICAgIGlmIChtb2RzW21vZEtleV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBvbGRNb2ROYW1lID0gc2VsZi5idWlsZE1vZENsYXNzKGJhc2VOYW1lLCBtb2RLZXksIG1vZHNbbW9kS2V5XSk7XG4gICAgICAgIGN1cnJlbnQucmVtb3ZlQ2xhc3Mob2xkTW9kTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtb2RWYWwgIT09IGZhbHNlKSB7XG4gICAgICAgIHZhciBuZXdNb2ROYW1lID0gc2VsZi5idWlsZE1vZENsYXNzKGJhc2VOYW1lLCBtb2RLZXksIG1vZFZhbCk7XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRcbiAgICAgICAgLmFkZENsYXNzKG5ld01vZE5hbWUpXG4gICAgICAgIC50cmlnZ2VyKCdzZXRtb2QnLCBbbW9kS2V5LCBtb2RWYWxdKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAkdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVsZXRlIG1vZGlmaWVyIG9uIGVsZW1lbnQuXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtb2RLZXlcbiAgICogQHBhcmFtIHtTdHJpbmd9IFttb2RWYWxdXG4gICAqIEBwYXJhbSB7T2JqZWN0fVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5kZWxNb2QgPSBmdW5jdGlvbigkdGhpcywgbW9kS2V5LCBtb2RWYWwpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgICwgc2VsZWN0b3IgPSAkdGhpcy5zZWxlY3RvcjtcblxuICAgICR0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY3VycmVudCA9ICQodGhpcyk7XG4gICAgICBjdXJyZW50LnNlbGVjdG9yID0gc2VsZWN0b3I7XG5cbiAgICAgIHZhciBtb2RzID0gc2VsZi5leHRyYWN0TW9kcyhjdXJyZW50KVxuICAgICAgICAsIGJhc2VOYW1lID0gc2VsZi5nZXRCYXNlQ2xhc3MoY3VycmVudCk7XG5cbiAgICAgIGlmIChtb2RWYWwpIHtcbiAgICAgICAgaWYgKG1vZHNbbW9kS2V5XSA9PSBtb2RWYWwpIHtcbiAgICAgICAgICB2YXIgbW9kTmFtZSA9IHNlbGYuYnVpbGRNb2RDbGFzcyhiYXNlTmFtZSwgbW9kS2V5LCBtb2RzW21vZEtleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIG1vZE5hbWUgPSBzZWxmLmJ1aWxkTW9kQ2xhc3MoYmFzZU5hbWUsIG1vZEtleSwgbW9kc1ttb2RLZXldKTtcbiAgICAgIH1cblxuICAgICAgY3VycmVudFxuICAgICAgICAucmVtb3ZlQ2xhc3MobW9kTmFtZSlcbiAgICAgICAgLnRyaWdnZXIoJ2RlbG1vZCcsIFttb2RLZXksIG1vZFZhbF0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICR0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaWx0ZXJpbmcgZWxlbWVudHMgYnkgbW9kaWZpZXIuXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtb2RLZXlcbiAgICogQHBhcmFtIHtTdHJpbmd9IFttb2RWYWxdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2ludmVyc2VdXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuYnlNb2QgPSBmdW5jdGlvbigkdGhpcywgbW9kS2V5LCBtb2RWYWwsIGludmVyc2UpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgICwgbW9kVmFsID0gbW9kVmFsIHx8IG51bGxcbiAgICAgICwgaW52ZXJzZSA9IGludmVyc2UgfHwgZmFsc2VcbiAgICAgICwgc2VsZWN0b3IgPSAkdGhpcy5zZWxlY3RvclxuICAgICAgLCByZXN1bHQgPSAkKCk7XG5cbiAgICAkdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSAkKHRoaXMpO1xuICAgICAgY3VycmVudC5zZWxlY3RvciA9IHNlbGVjdG9yO1xuXG4gICAgICB2YXIgbW9kcyA9IHNlbGYuZXh0cmFjdE1vZHMoY3VycmVudClcbiAgICAgICAgLCBiYXNlTmFtZSA9IHNlbGYuZ2V0QmFzZUNsYXNzKGN1cnJlbnQpO1xuXG4gICAgICBpZiAobW9kVmFsKSB7XG4gICAgICAgIGlmIChtb2RzW21vZEtleV0gPT0gbW9kVmFsKSB7XG4gICAgICAgICAgdmFyIG1vZE5hbWUgPSBzZWxmLmJ1aWxkTW9kQ2xhc3MoYmFzZU5hbWUsIG1vZEtleSwgbW9kc1ttb2RLZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChtb2RzW21vZEtleV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIG1vZE5hbWUgPSBzZWxmLmJ1aWxkTW9kQ2xhc3MoYmFzZU5hbWUsIG1vZEtleSwgbW9kc1ttb2RLZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXN1bHQgPSByZXN1bHQuYWRkKGludmVyc2VcbiAgICAgICAgPyBjdXJyZW50Lm5vdCgnLicgKyBtb2ROYW1lKVxuICAgICAgICA6IGN1cnJlbnQuZmlsdGVyKCcuJyArIG1vZE5hbWUpKTtcbiAgICB9KTtcblxuICAgIHJlc3VsdC5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBibG9jayBuYW1lcyBmcm9tIGVsZW1lbnQuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSAkdGhpc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmV4dHJhY3RCbG9ja3MgPSBmdW5jdGlvbigkdGhpcykge1xuICAgIHZhciBzZWxmID0gdGhpcywgcmVzdWx0ID0gW11cbiAgICAgICwgc2VsZWN0b3JzID0gdGhpcy5nZXRDbGFzc2VzKCR0aGlzKTtcblxuICAgICQuZWFjaChzZWxlY3RvcnMsIGZ1bmN0aW9uKGksIHNlbCkge1xuICAgICAgdmFyIHR5cGUgPSBzZWxmLmdldENsYXNzVHlwZShzZWwpO1xuXG4gICAgICBpZiAodHlwZSA9PSAnYmxvY2snKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHNlbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBlID09ICdlbGVtJykge1xuICAgICAgICB2YXIgZWxlbSA9IHNlbC5zcGxpdChzZWxmLmNvbmZpZy5lbGVtUHJlZml4KTtcbiAgICAgICAgcmVzdWx0LnB1c2goZWxlbVswXSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgZWxlbWVudCBuYW1lcyBmcm9tIGVsZW1lbnQuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuZXh0cmFjdEVsZW1zID0gZnVuY3Rpb24oJHRoaXMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsIHJlc3VsdCA9IFtdO1xuXG4gICAgJC5lYWNoKHNlbGYuZ2V0Q2xhc3NlcygkdGhpcyksIGZ1bmN0aW9uKGksIGNsYXNzTmFtZSkge1xuICAgICAgaWYgKHNlbGYuZ2V0Q2xhc3NUeXBlKGNsYXNzTmFtZSkgPT0gJ2VsZW0nKSB7XG4gICAgICAgIHZhciBlbGVtTmFtZSA9IGNsYXNzTmFtZS5zcGxpdChzZWxmLmNvbmZpZy5lbGVtUHJlZml4KTtcbiAgICAgICAgcmVzdWx0LnB1c2goZWxlbU5hbWVbMV0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IG1vZGlmaWVycyBmcm9tIGVsZW1lbnQuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuZXh0cmFjdE1vZHMgPSBmdW5jdGlvbigkdGhpcykge1xuICAgIHZhciBzZWxmID0gdGhpcywgcmVzdWx0ID0ge307XG5cbiAgICAkdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcblxuICAgICAgJC5lYWNoKHNlbGYuZ2V0Q2xhc3NlcygkdGhpcyksIGZ1bmN0aW9uKGksIGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAoc2VsZi5nZXRDbGFzc1R5cGUoY2xhc3NOYW1lKSA9PSAnbW9kJykge1xuICAgICAgICAgIHZhciByZSA9IHNlbGYuYnVpbGRNb2RDbGFzc1JlKCkuZXhlYyhjbGFzc05hbWUpO1xuICAgICAgICAgIHZhciBtb2ROYW1lID0gcmVbMV0uc3BsaXQoc2VsZi5jb25maWcubW9kRGxtdHIpO1xuXG4gICAgICAgICAgaWYgKG1vZE5hbWVbMV0gIT09IHVuZGVmaW5lZCAmJiBtb2ROYW1lWzFdICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIG1vZFZhbCA9IG1vZE5hbWVbMV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtb2RWYWwgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc3VsdFsgbW9kTmFtZVswXSBdID0gbW9kVmFsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBjbGFzc2VzIG5hbWVzIGZyb20gZWxlbWVudC5cbiAgICogQHByb3RlY3RlZFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRoaXNcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5nZXRDbGFzc2VzID0gZnVuY3Rpb24oJHRoaXMpIHtcbiAgICB2YXIgY2xhc3NlcywgcmVzdWx0ID0gW107XG5cbiAgICBpZiAodHlwZW9mICR0aGlzID09ICdvYmplY3QnKSB7XG5cbiAgICAgIGlmICgkdGhpcy5zZWxlY3Rvci5pbmRleE9mKCcuJykgPT09IDApIHtcbiAgICAgICAgY2xhc3NlcyA9ICR0aGlzLnNlbGVjdG9yLnNwbGl0KCcuJyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICgkdGhpcy5hdHRyKCdjbGFzcycpICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBjbGFzc2VzID0gJHRoaXMuYXR0cignY2xhc3MnKS5zcGxpdCgnICcpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY2xhc3NlcyA9ICR0aGlzLnNwbGl0KCcuJyk7XG4gICAgfVxuXG4gICAgJC5lYWNoKGNsYXNzZXMsIGZ1bmN0aW9uKGksIGNsYXNzTmFtZSkge1xuICAgICAgaWYgKGNsYXNzTmFtZSAhPSAnJykgcmVzdWx0LnB1c2goJC50cmltKGNsYXNzTmFtZSkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQnVpbGQgcmVnZXhwIGZvciBibG9ja3MuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHJldHVybiB7UmVnRXhwfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5idWlsZEJsb2NrQ2xhc3NSZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgJ14oJyArIHRoaXMuY29uZmlnLm5hbWVQYXR0ZXJuICsgJykkJ1xuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHJlZ2V4cCBmb3IgZWxlbWVudHMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHJldHVybiB7UmVnRXhwfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5idWlsZEVsZW1DbGFzc1JlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgICAnXicgKyB0aGlzLmNvbmZpZy5uYW1lUGF0dGVybiArIHRoaXMuY29uZmlnLmVsZW1QcmVmaXggKyAnKCcgKyB0aGlzLmNvbmZpZy5uYW1lUGF0dGVybiArICcpJCdcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCdWlsZCByZWdleHAgZm9yIG1vZGlmaWVycy5cbiAgICogQHByb3RlY3RlZFxuICAgKlxuICAgKiBAcmV0dXJuIHtSZWdFeHB9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmJ1aWxkTW9kQ2xhc3NSZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgJ14oPzonICsgdGhpcy5jb25maWcubmFtZVBhdHRlcm4gKyAnfCcgKyB0aGlzLmNvbmZpZy5uYW1lUGF0dGVybiArIHRoaXMuY29uZmlnLmVsZW1QcmVmaXggKyB0aGlzLmNvbmZpZy5uYW1lUGF0dGVybiArICcpJyArIHRoaXMuY29uZmlnLm1vZFByZWZpeCArICcoJyArIHRoaXMuY29uZmlnLm5hbWVQYXR0ZXJuICsgJygoJyArIHRoaXMuY29uZmlnLm1vZERsbXRyICsgdGhpcy5jb25maWcubmFtZVBhdHRlcm4gKyAnKSR8JCkpJ1xuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGNsYXNzIG5hbWUgZm9yIGJsb2NrLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBibG9ja05hbWVcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5idWlsZEJsb2NrQ2xhc3MgPSBmdW5jdGlvbihibG9ja05hbWUpIHtcbiAgICByZXR1cm4gYmxvY2tOYW1lO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCdWlsZCBjbGFzcyBuYW1lIGZvciBlbGVtZW50LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBibG9ja05hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVsZW1LZXlcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5idWlsZEVsZW1DbGFzcyA9IGZ1bmN0aW9uKGJsb2NrTmFtZSwgZWxlbUtleSkge1xuICAgIHJldHVybiBibG9ja05hbWUgKyB0aGlzLmNvbmZpZy5lbGVtUHJlZml4ICsgZWxlbUtleTtcbiAgfTtcblxuICAvKipcbiAgICogQnVpbGQgY2xhc3MgbmFtZSBmb3IgbW9kaWZpZXIuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGJsb2NrTmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kS2V5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtb2RWYWxcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5idWlsZE1vZENsYXNzID0gZnVuY3Rpb24oYmFzZUNsYXNzLCBtb2RLZXksIG1vZFZhbCkge1xuICAgIGlmIChtb2RWYWwgIT09IHVuZGVmaW5lZCAmJiBtb2RWYWwgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBiYXNlQ2xhc3MgKyB0aGlzLmNvbmZpZy5tb2RQcmVmaXggKyBtb2RLZXkgKyB0aGlzLmNvbmZpZy5tb2REbG10ciArIG1vZFZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJhc2VDbGFzcyArIHRoaXMuY29uZmlnLm1vZFByZWZpeCArIG1vZEtleTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHNlbGVjdG9yIGZyb20gb2JqZWN0IG9yIHN0cmluZy5cbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fVxuICAgKiBAcGFyYW0ge1N0cmluZ31cbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5idWlsZFNlbGVjdG9yID0gZnVuY3Rpb24oc2VsZWN0b3IsIHByZWZpeCkge1xuICAgIGlmIChwcmVmaXggIT09ICcnKSB7XG4gICAgICB2YXIgcHJlZml4ID0gcHJlZml4IHx8ICcuJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoc2VsZWN0b3IuYmxvY2sgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBidWlsZFNlbGVjdG9yID0gdGhpcy5idWlsZEJsb2NrQ2xhc3Moc2VsZWN0b3IuYmxvY2spO1xuXG4gICAgICAgIGlmIChzZWxlY3Rvci5lbGVtICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGJ1aWxkU2VsZWN0b3IgPSB0aGlzLmJ1aWxkRWxlbUNsYXNzKGJ1aWxkU2VsZWN0b3IsIHNlbGVjdG9yLmVsZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yLm1vZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgbW9kID0gc2VsZWN0b3IubW9kLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgYnVpbGRTZWxlY3RvciA9IHRoaXMuYnVpbGRNb2RDbGFzcyhidWlsZFNlbGVjdG9yLCBtb2RbMF0sIG1vZFsxXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYnVpbGRTZWxlY3RvciAhPSB1bmRlZmluZWRcbiAgICAgID8gcHJlZml4ICsgYnVpbGRTZWxlY3RvclxuICAgICAgOiBwcmVmaXggKyBzZWxlY3RvcjtcbiAgfTtcblxuICAvKipcbiAgICogQnVpbGQgY2xhc3MgbmFtZSBmb3IgYmxvY2suXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSAkdGhpc1xuICAgKiBAcGFyYW0ge051bWJlcn0gW2luZGV4XVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmdldEJsb2NrQ2xhc3MgPSBmdW5jdGlvbigkdGhpcywgaW5kZXgpIHtcbiAgICB2YXIgYmxvY2tDbGFzc2VzID0gdGhpcy5leHRyYWN0QmxvY2tzKCR0aGlzKTtcbiAgICB2YXIgaW5kZXggPSBpbmRleCB8fCAwO1xuXG4gICAgcmV0dXJuIGluZGV4IDw9IGJsb2NrQ2xhc3Nlcy5sZW5ndGggLSAxXG4gICAgICA/IGJsb2NrQ2xhc3Nlc1tpbmRleF1cbiAgICAgIDogbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGJhc2UgY2xhc3MgZnJvbSBlbGVtZW50LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmdldEJhc2VDbGFzcyA9IGZ1bmN0aW9uKCR0aGlzKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLCBiYXNlQ2xhc3MgPSBudWxsO1xuICAgIHZhciBzZWxlY3RvcnMgPSB0aGlzLmdldENsYXNzZXMoJHRoaXMpO1xuXG4gICAgJC5lYWNoKHNlbGVjdG9ycywgZnVuY3Rpb24oaSwgc2VsKSB7XG4gICAgICB2YXIgY2xhc3NUeXBlID0gc2VsZi5nZXRDbGFzc1R5cGUoc2VsKTtcblxuICAgICAgaWYgKGNsYXNzVHlwZSAmJiBjbGFzc1R5cGUgIT0gJ21vZCcpIHtcbiAgICAgICAgYmFzZUNsYXNzID0gc2VsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJhc2VDbGFzcztcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGNsYXNzIHR5cGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmdldENsYXNzVHlwZSA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgIGlmICh0aGlzLm1vZENsYXNzUmUudGVzdChjbGFzc05hbWUpKSB7XG4gICAgICByZXR1cm4gJ21vZCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuZWxlbUNsYXNzUmUudGVzdChjbGFzc05hbWUpKSB7XG4gICAgICByZXR1cm4gJ2VsZW0nO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmJsb2NrQ2xhc3NSZS50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgIHJldHVybiAnYmxvY2snO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIEJFTSBpbnN0YW5jZS5cbiAgICovXG4gICQuQkVNID0gbmV3IEJFTSgpO1xuXG4gIC8qKlxuICAgKiBFeHRlbmQgalF1ZXJ5IG9iamVjdC5cbiAgICovXG4gICQuZm4uZXh0ZW5kKHtcbiAgICBibG9jazogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJC5CRU0uZ2V0QmxvY2sodGhpcyk7XG4gICAgfSxcblxuICAgIGV4dHJhY3RCbG9ja3M6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICQuQkVNLmV4dHJhY3RCbG9ja3ModGhpcyk7XG4gICAgfSxcblxuICAgIGlzQmVtQmxvY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgY2xhc3NlcyA9IHRoaXMuYXR0cignY2xhc3MnKS5zcGxpdCgnICcpO1xuICAgICAgbGV0IGlzQmxvY2sgPSBmYWxzZTtcbiAgICAgIGNsYXNzZXMuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xuICAgICAgICBpZiAoJC5CRU0uZ2V0Q2xhc3NUeXBlKGNsYXNzTmFtZSkgPT09ICdibG9jaycpIHtcbiAgICAgICAgICBpc0Jsb2NrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaXNCbG9jaztcbiAgICB9LFxuXG4gICAgYmxvY2tTZXR0aW5nczogZnVuY3Rpb24gKGRlZmF1bHRTZXR0aW5ncykge1xuICAgICAgY29uc3QgdXNlclNldHRpbmdzID0gdGhpcy5kYXRhKCdtQmVtU2V0dGluZ3MnKSB8fCB7fTtcbiAgICAgIGNvbnN0IHNldHRpbmdzID0gZGVmYXVsdFNldHRpbmdzIHx8IHt9O1xuICAgICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHNldHRpbmdzO1xuICAgIH0sXG5cbiAgICBlbGVtOiBmdW5jdGlvbihjdHgsIGVsZW1LZXkpIHtcbiAgICAgIGlmICghZWxlbUtleSkge1xuICAgICAgICBlbGVtS2V5ID0gY3R4O1xuICAgICAgICBjdHggPSBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJC5CRU0uZmluZEVsZW0oY3R4IHx8IHRoaXMsIGVsZW1LZXkpO1xuICAgIH0sXG5cbiAgICBjdHg6IGZ1bmN0aW9uKGJsb2NrLCBlbGVtKSB7XG4gICAgICByZXR1cm4gJC5CRU0uc3dpdGNoQmxvY2sodGhpcywgYmxvY2ssIGVsZW0pO1xuICAgIH0sXG5cbiAgICBtb2Q6IGZ1bmN0aW9uKG1vZEtleSwgbW9kVmFsKSB7XG4gICAgICBpZiAodHlwZW9mIG1vZFZhbCA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtb2RWYWwgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAobW9kVmFsID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gJC5CRU0uZGVsTW9kKHRoaXMsIG1vZEtleSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAobW9kVmFsICE9IG51bGwpXG4gICAgICAgID8gJC5CRU0uc2V0TW9kKHRoaXMsIG1vZEtleSwgbW9kVmFsKVxuICAgICAgICA6ICQuQkVNLmdldE1vZCh0aGlzLCBtb2RLZXkpO1xuICAgIH0sXG5cbiAgICBzZXRNb2Q6IGZ1bmN0aW9uKG1vZEtleSwgbW9kVmFsKSB7XG4gICAgICByZXR1cm4gJC5CRU0uc2V0TW9kKHRoaXMsIG1vZEtleSwgbW9kVmFsKTtcbiAgICB9LFxuXG4gICAgZGVsTW9kOiBmdW5jdGlvbihtb2RLZXksIG1vZFZhbCkge1xuICAgICAgcmV0dXJuICQuQkVNLmRlbE1vZCh0aGlzLCBtb2RLZXksIG1vZFZhbCk7XG4gICAgfSxcblxuICAgIGhhc01vZDogZnVuY3Rpb24obW9kS2V5LCBtb2RWYWwpIHtcbiAgICAgIHJldHVybiAkLkJFTS5oYXNNb2QodGhpcywgbW9kS2V5LCBtb2RWYWwpO1xuICAgIH0sXG5cbiAgICBieU1vZDogZnVuY3Rpb24obW9kS2V5LCBtb2RWYWwpIHtcbiAgICAgIHJldHVybiAkLkJFTS5ieU1vZCh0aGlzLCBtb2RLZXksIG1vZFZhbCk7XG4gICAgfSxcblxuICAgIGJ5Tm90TW9kOiBmdW5jdGlvbihtb2RLZXksIG1vZFZhbCkge1xuICAgICAgcmV0dXJuICQuQkVNLmJ5TW9kKHRoaXMsIG1vZEtleSwgbW9kVmFsLCAnaW52ZXJzZScpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgYmxvY2tzJ3Mgb3IgZWxlbSdzIG1vZGlmaWVyIGBtb2RLZXlgIGJldHdlZW4gYG1vZFZhbDFgIGFuZCBgbW9kVmFsMmBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kS2V5XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1vZFZhbDFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kVmFsMlxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgdG9nZ2xlTW9kOiBmdW5jdGlvbiAobW9kS2V5LCBtb2RWYWwxLCBtb2RWYWwyKSB7XG4gICAgICBpZiAodGhpcy5oYXNNb2QobW9kS2V5LCBtb2RWYWwxKSkge1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICAgICAgLmRlbE1vZChtb2RLZXksIG1vZFZhbDEpXG4gICAgICAgICAgICAuc2V0TW9kKG1vZEtleSwgbW9kVmFsMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICAgICAgLmRlbE1vZChtb2RLZXksIG1vZFZhbDIpXG4gICAgICAgICAgICAuc2V0TW9kKG1vZEtleSwgbW9kVmFsMSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxufSkpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb3JlL2xpYnMvanF1ZXJ5LmJlbS5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2NvcmUvYnVuZGxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwialF1ZXJ5XCJcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==