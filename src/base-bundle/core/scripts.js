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
	  modPrefix: '--',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDJkMjliMGQxZDI0MGU0OTkxYjgiLCJ3ZWJwYWNrOi8vLy4vY29yZS9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9nZW5lcmFsL0RpYWxvZ0hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL2dlbmVyYWwvTW9uc3RlckJlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL2xpYnMvanF1ZXJ5LmJlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL2J1bmRsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiJCIsIkJFTSIsInNldENvbmZpZyIsIm5hbWVQYXR0ZXJuIiwiZWxlbVByZWZpeCIsIm1vZFByZWZpeCIsIm1vZERsbXRyIiwid2luZG93IiwiTW9uc3RlckJlbSIsIkRpYWxvZ0hlbHBlciIsInVwZGF0ZSIsIm9wdGlvbnMiLCJyZXNldFBhcmFtcyIsIiRub2RlIiwibmV3T3B0aW9ucyIsImV4dGVuZCIsInBhZ2Vjb250YWluZXIiLCJjbG9zZXRyYW5zaXRpb25lbmQiLCJvbkNsb3NlQ2hhaW4iLCJmb3JFYWNoIiwiZiIsImF1dG9EZXN0cm95T25DbG9zZSIsImRlc3Ryb3kiLCJwb3B1cCIsIiRib2R5IiwiYXBwZW5kIiwiY2xvc2VzdCIsImFkZENsYXNzIiwiJGxvYWRlciIsIiR0aXRsZSIsIiRjbG9zZUJ1dHRvbiIsImVuYWJsZWQiLCJwcmVwZW5kIiwiY2xpY2siLCJyZW1vdmUiLCJ0YWJsZXQiLCJpcyIsIm1vYmlsZSIsImNsb3NlQnV0dG9uIiwidmFsdWUiLCJ0aXRsZSIsInByZXBlbmRUbyIsImh0bWwiLCJlbXB0eSIsImNyZWF0ZUxvYWRlciIsIiRhamF4IiwidGFyZ2V0Iiwic2hvdyIsIiR0YXJnZXQiLCJkYXRhVHlwZSIsImFqYXgiLCJmYWlsIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJkb25lIiwiZGF0YSIsIiRkYXRhIiwiaGlkZSIsInB1c2giLCIkd3JhcHBlciIsImlkIiwiYXR0ciIsIiRiYWNrZ3JvdW5kIiwiZGlhbG9nIiwibm9kZSIsIm1vZCIsInBhcmFtcyIsImJsb2NrQ2FsbGJhY2tzIiwidXNlclNldHRpbmdzIiwiTW9uc3RlckJlbVNldHRpbmdzIiwic2V0dGluZ3MiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiY2FsbGJhY2siLCJibG9ja05hbWUiLCJlYWNoIiwiaXRlciIsIiR0aGlzIiwiY2FsbCIsInJlbW92ZUNsYXNzIiwicm9vdCIsImZhY3RvcnkiLCJkZWZpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsImpRdWVyeSIsInVuZGVmaW5lZCIsImNvbmZpZyIsInByb3RvdHlwZSIsImJsb2NrQ2xhc3NSZSIsImJ1aWxkQmxvY2tDbGFzc1JlIiwiZWxlbUNsYXNzUmUiLCJidWlsZEVsZW1DbGFzc1JlIiwibW9kQ2xhc3NSZSIsImJ1aWxkTW9kQ2xhc3NSZSIsImdldEJsb2NrIiwiYmxvY2tDbGFzcyIsImdldEJsb2NrQ2xhc3MiLCJibG9jayIsInNlbGVjdG9yIiwic3dpdGNoQmxvY2siLCJlbGVtIiwiYnVpbGRTZWxlY3RvciIsImZpbmRFbGVtIiwiZWxlbUtleSIsImVsZW1TZWxlY3RvciIsImJ1aWxkRWxlbUNsYXNzIiwiZmluZCIsImdldE1vZCIsIm1vZEtleSIsIm1vZHMiLCJleHRyYWN0TW9kcyIsImZpcnN0IiwiaGFzTW9kIiwibW9kVmFsIiwic2V0TW9kIiwic2VsZiIsImN1cnJlbnQiLCJiYXNlTmFtZSIsImdldEJhc2VDbGFzcyIsIm9sZE1vZE5hbWUiLCJidWlsZE1vZENsYXNzIiwibmV3TW9kTmFtZSIsInRyaWdnZXIiLCJkZWxNb2QiLCJtb2ROYW1lIiwiYnlNb2QiLCJpbnZlcnNlIiwicmVzdWx0IiwiYWRkIiwibm90IiwiZmlsdGVyIiwiZXh0cmFjdEJsb2NrcyIsInNlbGVjdG9ycyIsImdldENsYXNzZXMiLCJpIiwic2VsIiwidHlwZSIsImdldENsYXNzVHlwZSIsInNwbGl0IiwiZXh0cmFjdEVsZW1zIiwiY2xhc3NOYW1lIiwiZWxlbU5hbWUiLCJyZSIsImV4ZWMiLCJjbGFzc2VzIiwiaW5kZXhPZiIsInRyaW0iLCJSZWdFeHAiLCJidWlsZEJsb2NrQ2xhc3MiLCJiYXNlQ2xhc3MiLCJwcmVmaXgiLCJpbmRleCIsImJsb2NrQ2xhc3NlcyIsImxlbmd0aCIsImNsYXNzVHlwZSIsInRlc3QiLCJmbiIsImlzQmVtQmxvY2siLCJpc0Jsb2NrIiwiYmxvY2tTZXR0aW5ncyIsImRlZmF1bHRTZXR0aW5ncyIsImN0eCIsImJ5Tm90TW9kIiwidG9nZ2xlTW9kIiwibW9kVmFsMSIsIm1vZFZhbDIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDdENBOztBQU1BOztBQVdBOzs7O0FBR0E7Ozs7OztBQVpBO0FBQ0FBLEdBQUVDLEdBQUYsQ0FBTUMsU0FBTixDQUFnQjtBQUNkQyxnQkFBYSxpQkFEQztBQUVkQyxlQUFZLElBRkU7QUFHZEMsY0FBVyxJQUhHO0FBSWRDLGFBQVU7QUFKSSxFQUFoQjtBQVJBOzs7O0FBSUE7O0FBYUFDLFFBQU9DLFVBQVAsR0FBb0IsMEJBQXBCOztBQUdBRCxRQUFPRSxZQUFQOztBQUVBO0FBQ0FULEdBQUUsWUFBTTtBQUNOTyxVQUFPQyxVQUFQLENBQWtCRSxNQUFsQjtBQUNELEVBRkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7Ozs7Ozs7Ozs7O0tBV01ELFk7QUFDSjs7OztBQUlBLHlCQUFZRSxPQUFaLEVBQXFCO0FBQUE7O0FBQUE7O0FBQ25CLFVBQUtDLFdBQUw7QUFDQSxVQUFLQyxLQUFMLEdBQWFiLEVBQUUsb0NBQUYsQ0FBYjtBQUNBLFNBQU1jLGFBQWFkLEVBQUVl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XHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGQyZDI5YjBkMWQyNDBlNDk5MWI4XG4gKiovIiwiaW1wb3J0ICcuL2J1bmRsZS5jc3MnO1xuLypcbiBUaGlzIGJ1bmRsZSBpcyBpbmNsdWRlZCBpbnRvIGV2ZXJ5IHBhZ2VcbiAqL1xuXG4vLyBEb2N1bWVudGF0aW9uIGlzIGxvY2F0ZWQgYXQgaHR0cHM6Ly9naXRodWIuY29tL3plbndhbGtlci9qcXVlcnktYmVtI2pxdWVyeWJlbVxuaW1wb3J0ICcuL2xpYnMvanF1ZXJ5LmJlbSc7XG5cbi8vIFJlY29uZmlndXJlIEJFTSBuYW1pbmdcbiQuQkVNLnNldENvbmZpZyh7XG4gIG5hbWVQYXR0ZXJuOiAnW2EtekEtWjAtOVxcXFwtXSsnLFxuICBlbGVtUHJlZml4OiAnX18nLFxuICBtb2RQcmVmaXg6ICctLScsXG4gIG1vZERsbXRyOiAnXycsXG59KTtcblxuXG5pbXBvcnQgTW9uc3RlckJlbSBmcm9tICcuL2dlbmVyYWwvTW9uc3RlckJlbSc7XG53aW5kb3cuTW9uc3RlckJlbSA9IG5ldyBNb25zdGVyQmVtKCk7XG5cbmltcG9ydCBEaWFsb2dIZWxwZXIgZnJvbSAnLi9nZW5lcmFsL0RpYWxvZ0hlbHBlcic7XG53aW5kb3cuRGlhbG9nSGVscGVyID0gRGlhbG9nSGVscGVyO1xuXG4vKiBnbG9iYWwgJCAqL1xuJCgoKSA9PiB7XG4gIHdpbmRvdy5Nb25zdGVyQmVtLnVwZGF0ZSgpO1xufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvcmUvYnVuZGxlLmpzXG4gKiovIiwiLyoqXG4gKiBEaWFsb2cgaGVscGVyIGNsYXNzIGZvciB1c2Ugd2l0aCBqcXVlcnktcG9wdXAtb3ZlcmxheS5cbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgZCA9IERpYWxvZ0hlbHBlclxuICogICAuYnVpbGRlckRpYWxvZygpXG4gKiAgIC5odG1sKFwiSEFMT1wiKVxuICogICAuYXV0b0Rlc3Ryb3koKVxuICogICAuc2hvdygpO1xuICogYGBgXG4gKi9cbmNsYXNzIERpYWxvZ0hlbHBlciB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3Rvci5cbiAgICogSW5pdGlhbGl6ZXMgYmFzZSBwcm9wZXJ0aWVzIGFuZCBjcmVhdGVzIERPTSBub2RlLlxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMucmVzZXRQYXJhbXMoKTtcbiAgICB0aGlzLiRub2RlID0gJCgnPGRpdiBjbGFzcz1cIm1vbnN0ZXItZGlhbG9nXCI+PC9kaXY+Jyk7XG4gICAgY29uc3QgbmV3T3B0aW9ucyA9ICQuZXh0ZW5kKFxuICAgICAge1xuICAgICAgICBwYWdlY29udGFpbmVyOiAnLm0td3JhcHBlcicsXG4gICAgICAgIGNsb3NldHJhbnNpdGlvbmVuZDogKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25DbG9zZUNoYWluLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgICBmKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHRoaXMuYXV0b0Rlc3Ryb3lPbkNsb3NlKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgb3B0aW9uc1xuICAgICk7XG4gICAgdGhpcy4kbm9kZS5wb3B1cChuZXdPcHRpb25zKTtcbiAgICB0aGlzLiRib2R5ID0gJCgnPGRpdiBjbGFzcz1cIm1vbnN0ZXItZGlhbG9nX19ib2R5XCI+PC9kaXY+Jyk7XG4gICAgdGhpcy4kbm9kZS5hcHBlbmQodGhpcy4kYm9keSk7XG4gICAgdGhpcy4kbm9kZS5jbG9zZXN0KCcucG9wdXBfd3JhcHBlcicpLmFkZENsYXNzKCdtLXdyYXBwZXInKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIG5ldyBEaWFsb2dIZWxwZXIgYW5kIHJldHVybnMgaXQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtEaWFsb2dIZWxwZXJ9XG4gICAqL1xuICBzdGF0aWMgZGlhbG9nKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgRGlhbG9nSGVscGVyKG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgbmV3IERpYWxvZ0hlbHBlciBpbiBWaXN1YWxCdWlsZGVyIHRoZW1lLlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7RGlhbG9nSGVscGVyfVxuICAgKi9cbiAgc3RhdGljIGJ1aWxkZXJEaWFsb2cob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgZGlhbG9nID0gRGlhbG9nSGVscGVyLmRpYWxvZyhvcHRpb25zKTtcbiAgICByZXR1cm4gZGlhbG9nLm5vZGUoJG5vZGUgPT4gJG5vZGUubW9kKCd0aGVtZScsICdidWlsZGVyJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVybmFsIGZ1bmN0aW9uIC0gcmVzZXRzIGNsYXNzIHBhcmFtcy5cbiAgICovXG4gIHJlc2V0UGFyYW1zKCkge1xuICAgIHRoaXMuJG5vZGUgPSBudWxsO1xuICAgIHRoaXMuYXV0b0Rlc3Ryb3lPbkNsb3NlID0gZmFsc2U7XG4gICAgdGhpcy5vbkNsb3NlQ2hhaW4gPSBbXTtcbiAgICB0aGlzLiRsb2FkZXIgPSBudWxsO1xuICAgIHRoaXMuJGJvZHkgPSBudWxsO1xuICAgIHRoaXMuJHRpdGxlID0gbnVsbDtcbiAgICB0aGlzLiRjbG9zZUJ1dHRvbiA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyBvciBkaXNhYmxlcyBjbG9zZSBidXR0b24uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZFxuICAgKiBAcmV0dXJucyB7RGlhbG9nSGVscGVyfVxuICAgKi9cbiAgY2xvc2VCdXR0b24oZW5hYmxlZCA9IHRydWUpIHtcbiAgICBpZiAoZW5hYmxlZCAmJiB0aGlzLiRjbG9zZUJ1dHRvbiA9PT0gbnVsbCkge1xuICAgICAgdGhpcy4kY2xvc2VCdXR0b24gPSAkKCc8ZGl2IGNsYXNzPVwibW9uc3Rlci1kaWFsb2dfX2Nsb3NlXCI+PC9kaXY+Jyk7XG4gICAgICB0aGlzLiRjbG9zZUJ1dHRvbi5wcmVwZW5kKHRoaXMuJG5vZGUpO1xuICAgICAgdGhpcy4kY2xvc2VCdXR0b24uY2xpY2soKCkgPT4gdGhpcy4kbm9kZS5wb3B1cCgnaGlkZScpKTtcbiAgICB9XG4gICAgaWYgKCFlbmFibGVkICYmIHRoaXMuJGNsb3NlQnV0dG9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLiRjbG9zZUJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgIHRoaXMuJGNsb3NlQnV0dG9uID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBjbG9zZSBvbiBtb2JpbGUgZGV2aWNlcy5cbiAgICogQHBhcmFtIHtib29sZWFufSB0YWJsZXQgVHJlYXQgdGFibGV0IGFzIG1vYmlsZSBkZXZpY2VzIHRvby5cbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIHNob3dDbG9zZU9uTW9iaWxlKHRhYmxldCA9IGZhbHNlKSB7XG4gICAgLyogZ2xvYmFsIGlzOmZhbHNlICovXG4gICAgaWYgKGlzLm1vYmlsZSgpIHx8ICh0YWJsZXQgJiYgaXMudGFibGV0KCkpKSB7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uKHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYXV0b0Rlc3Ryb3kgb3B0aW9uLiBJZiB0cnVlIC0gZGVzdHJveXMgRE9NIG5vZGUgb24gY2xvc2UuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIGF1dG9EZXN0cm95KHZhbHVlID0gdHJ1ZSkge1xuICAgIHRoaXMuYXV0b0Rlc3Ryb3lPbkNsb3NlID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkaWFsb2cgdGl0bGUuIEFkZHMgdGl0bGUgZWxlbWVudCBpZiBub3Qgc2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfCR8Ym9vbGVhbn0gdGl0bGVcbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIHRpdGxlKHRpdGxlKSB7XG4gICAgaWYgKHRoaXMuJHRpdGxlID09PSBudWxsICYmIHRpdGxlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy4kdGl0bGUucmVtb3ZlKCk7XG4gICAgICB0aGlzLiR0aXRsZSA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaWYgKHRoaXMuJHRpdGxlID09PSBudWxsKSB7XG4gICAgICB0aGlzLiR0aXRsZSA9ICQoJzxkaXYgY2xhc3M9XCJtb25zdGVyLWRpYWxvZ19fdGl0bGVcIj48L2Rpdj4nKTtcbiAgICAgIHRoaXMuJHRpdGxlLnByZXBlbmRUbyh0aGlzLiRub2RlKTtcbiAgICB9XG4gICAgaWYgKHRpdGxlIGluc3RhbmNlb2YgJCkge1xuICAgICAgdGhpcy4kdGl0bGUuYXBwZW5kKHRpdGxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kdGl0bGUuaHRtbCh0aXRsZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1biBzb21lIGFjdGlvbnMgb24gJG5vZGUgZWxlbWVudFxuICAgKiBAcGFyYW0ge0RpYWxvZ0hlbHBlcn5ub2RlfSBmIEZ1bmN0aW9uIHRvIHJ1biBvbiBlbGVtZW50LCBhY2NlcHRzICRub2RlIGFzIGEgcGFyYW1cbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIG5vZGUoZikge1xuICAgIGYodGhpcy4kbm9kZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUnVuIHNvbWUgYWN0aW9ucyBvbiAkYm9keSBlbGVtZW50XG4gICAqIEBwYXJhbSB7RGlhbG9nSGVscGVyfmJvZHl9IGYgRnVuY3Rpb24gdG8gcnVuIG9uIGVsZW1lbnQsIGFjY2VwdHMgJGJvZHkgYXMgYSBwYXJhbVxuICAgKiBAcmV0dXJucyB7RGlhbG9nSGVscGVyfVxuICAgKi9cbiAgYm9keShmKSB7XG4gICAgZih0aGlzLiRib2R5KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgSFRNTCBjb250ZW50IG9mIHBvcHVwLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3wkfSBodG1sIFN0cmluZyBvciBqUXVlcnkgbm9kZS5cbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sIGluc3RhbmNlb2YgJCkge1xuICAgICAgdGhpcy4kYm9keS5lbXB0eSgpO1xuICAgICAgdGhpcy4kYm9keS5hcHBlbmQoaHRtbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGJvZHkuaHRtbChodG1sKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBsb2FkZXIgZWxlbWVudFxuICAgKiBAcmV0dXJucyB7RGlhbG9nSGVscGVyfVxuICAgKi9cbiAgY3JlYXRlTG9hZGVyKCkge1xuICAgIGlmICh0aGlzLiRsb2FkZXIgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuJGxvYWRlciA9ICQoJzxkaXYgY2xhc3M9XCJtb25zdGVyLWRpYWxvZ19fbG9hZGVyXCI+PC9kaXY+Jyk7XG4gICAgICB0aGlzLiRub2RlLnByZXBlbmQodGhpcy4kbG9hZGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUnVuIHNvbWUgYWN0aW9ucyBvbiAkbG9hZGVyIGVsZW1lbnRcbiAgICogQHBhcmFtIHtEaWFsb2dIZWxwZXJ+bG9hZGVyfSBmIEZ1bmN0aW9uIHRvIHJ1biBvbiBlbGVtZW50LCBhY2NlcHRzICRsb2FkZXIgYXMgYSBwYXJhbVxuICAgKiBAcmV0dXJucyB7RGlhbG9nSGVscGVyfVxuICAgKi9cbiAgbG9hZGVyKGYpIHtcbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpO1xuICAgIGYodGhpcy4kbG9hZGVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW5zIGFqYXggcmVxdWVzdCBmb3Igc29tZSBwb3B1cCBjb250ZW50LlxuICAgKiBTaG93cyBsb2FkZXIgd2hpbGUgcmVxdWVzdCBpcyBwcm9jZXNzZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSAkYWpheCBQbGFpbk9iamVjdCBjb25maWd1cmF0aW9uIGZvciAkLmFqYXggQHNlZSBodHRwOi8vYXBpLmpxdWVyeS5jb20valF1ZXJ5LmFqYXgvI2pRdWVyeS1hamF4LXNldHRpbmdzXG4gICAqIEBwYXJhbSB7JHxudWxsfSB0YXJnZXQgV2hlcmUgdG8gaW5zZXJ0IHJlcXVlc3RlZCBjb250ZW50OiBqUXVlcnkgJG5vZGUgb3IgbnVsbCBmb3IgZGVmYXVsdCBib2R5LlxuICAgKiBAcmV0dXJucyB7RGlhbG9nSGVscGVyfVxuICAgKi9cbiAgYWpheCgkYWpheCwgdGFyZ2V0ID0gbnVsbCkge1xuICAgIC8vIGVuc3VyZSBsb2FkZXIgaXMgY3JlYXRlZFxuICAgIHRoaXMuY3JlYXRlTG9hZGVyKCk7XG4gICAgLy8gc2hvdyBsb2FkZXIgYXMgd2UgYXJlIHN0YXJ0aW5nIHJlcXVlc3Qgbm93XG4gICAgdGhpcy4kbG9hZGVyLnNob3coKTtcblxuICAgIGNvbnN0ICR0YXJnZXQgPSB0YXJnZXQgaW5zdGFuY2VvZiAkID8gdGFyZ2V0IDogdGhpcy4kYm9keTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycywgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgICAkYWpheC5kYXRhVHlwZSA9ICdodG1sJztcblxuICAgICRcbiAgICAgIC5hamF4KCRhamF4KVxuICAgICAgLmZhaWwoKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAvLyBAdG9kbzogZGlzcGxheSBlcnJvciBzb21laG93XG4gICAgICB9KVxuICAgICAgLmRvbmUoKGRhdGEsIHRleHRTdGF0dXMsIGpxWEhSKSA9PiB7XG4gICAgICAgIGNvbnN0ICRkYXRhID0gJChkYXRhKTtcbiAgICAgICAgJHRhcmdldC5hcHBlbmQoJGRhdGEpO1xuICAgICAgICB0aGlzLiRsb2FkZXIuaGlkZSgpO1xuICAgICAgfSk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycywgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgY2FsbGJhY2sgdG8gY2hhaW4gb24gY2xvc2UuXG4gICAqXG4gICAqIEBwYXJhbSBmXG4gICAqIEByZXR1cm5zIHtEaWFsb2dIZWxwZXJ9XG4gICAqL1xuICBvbkNsb3NlKGYpIHtcbiAgICB0aGlzLm9uQ2xvc2VDaGFpbi5wdXNoKGYpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIHBvcHVwLlxuICAgKiBAcmV0dXJucyB7RGlhbG9nSGVscGVyfVxuICAgKi9cbiAgc2hvdygpIHtcbiAgICB0aGlzLiRub2RlLmRhdGEoJ2RpYWxvZ0hlbHBlckluc3RhbmNlJywgdGhpcyk7XG4gICAgdGhpcy4kbm9kZS5wb3B1cCgnc2hvdycpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBwb3B1cC5cbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIGhpZGUoKSB7XG4gICAgdGhpcy4kbm9kZS5wb3B1cCgnaGlkZScpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHBvcHVwIERPTSBub2RlLlxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy4kbm9kZSkge1xuICAgICAgY29uc3QgJHdyYXBwZXIgPSB0aGlzLiRub2RlLmNsb3Nlc3QoJy5wb3B1cF93cmFwcGVyJyk7XG4gICAgICBjb25zdCBpZCA9IHRoaXMuJG5vZGUuYXR0cignaWQnKTtcbiAgICAgIGNvbnN0ICRiYWNrZ3JvdW5kID0gJChgIyR7aWR9X2JhY2tncm91bmRgKTtcbiAgICAgICRiYWNrZ3JvdW5kLnJlbW92ZSgpO1xuICAgICAgJHdyYXBwZXIucmVtb3ZlKCk7XG5cbiAgICAgIGlmICh0aGlzLiRsb2FkZXIpIHtcbiAgICAgICAgdGhpcy4kbG9hZGVyLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuJHRpdGxlKSB7XG4gICAgICAgIHRoaXMuJHRpdGxlLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy4kYm9keS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuJG5vZGUucmVtb3ZlKCk7XG4gICAgICB0aGlzLnJlc2V0UGFyYW1zKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDYWxsYmFjayB1c2VkIGJ5IG5vZGUuXG4gICAqIEBjYWxsYmFjayBEaWFsb2dIZWxwZXJ+bm9kZVxuICAgKiBAcGFyYW0ge29iamVjdH0gJG5vZGVcbiAgICovXG4gIC8qKlxuICAgKiBDYWxsYmFjayB1c2VkIGJ5IGxvYWRlci5cbiAgICogQGNhbGxiYWNrIERpYWxvZ0hlbHBlcn5sb2FkZXJcbiAgICogQHBhcmFtIHtvYmplY3R9ICRsb2FkZXJcbiAgICovXG4gIC8qKlxuICAgKiBDYWxsYmFjayB1c2VkIGJ5IGJvZHkuXG4gICAqIEBjYWxsYmFjayBEaWFsb2dIZWxwZXJ+Ym9keVxuICAgKiBAcGFyYW0ge29iamVjdH0gJGJvZHlcbiAgICovXG59XG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZ0hlbHBlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29yZS9nZW5lcmFsL0RpYWxvZ0hlbHBlci5qc1xuICoqLyIsImNsYXNzIE1vbnN0ZXJCZW0ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtcygpO1xuICAgIHRoaXMuYmxvY2tDYWxsYmFja3MgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIE1vbnN0ZXJCZW0gc2V0dGluZ3MuXG4gICAqIFVzZXMgTW9uc3RlckJlbVNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAqL1xuICBwYXJhbXMoKSB7XG4gICAgY29uc3QgdXNlclNldHRpbmdzID0gd2luZG93Lk1vbnN0ZXJCZW1TZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHVzZXJTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmJsb2NrQ2FsbGJhY2tzKS5mb3JFYWNoKGJsb2NrTmFtZSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMuYmxvY2tDYWxsYmFja3NbYmxvY2tOYW1lXTtcbiAgICAgICQoYC4ke2Jsb2NrTmFtZX0ubS1qc2ApLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICBjYWxsYmFjay5jYWxsKCR0aGlzLCBibG9ja05hbWUpO1xuICAgICAgICAkdGhpc1xuICAgICAgICAgIC5yZW1vdmVDbGFzcygnbS1qcycpXG4gICAgICAgICAgLmFkZENsYXNzKCdtLWpzLWluaXRpYWxpemVkJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb25zdGVyQmVtO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb3JlL2dlbmVyYWwvTW9uc3RlckJlbS5qc1xuICoqLyIsIi8qIEByZXF1aXJlZCBqUXVlcnkgKi9cbi8qKlxuICogVGhpcyBpcyBtb2RpZmllZCB2ZXJzaW9uIG9mIGpxdWVyeS1iZW0gYWRkaW5nIHNvbWUgbmV3IGZ1bmN0aW9uc1xuICovXG5cbihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gIGlmKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgfSBlbHNlIHtcbiAgICBmYWN0b3J5KHJvb3QualF1ZXJ5KTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbigkLCB1bmRlZmluZWQpIHtcblxuICAvKipcbiAgICogQmFzZSBCRU0gY2xhc3MuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgZnVuY3Rpb24gQkVNKGNvbmZpZykge1xuICAgIHRoaXMuc2V0Q29uZmlnKGNvbmZpZyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY29uZmlnIGZvciB0aGUgcGx1Z2luXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSBkZWZhdWx0cyBpbiBiclxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2NvbmZpZy5lbGVtUHJlZml4XSAtIEVsZW1lbnQgcHJlZml4IChkZWZhdWx0OiAnX18nKVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2NvbmZpZy5tb2RQcmVmaXhdIC0gTW9kaWZpZXIgcHJlZml4IChkZWZhdWx0OiAnXycpXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbY29uZmlnLm1vZERsbXRyXSAtIE1vZGlmaWVyIGRlbGltaXRlciAoZGVmYXVsdDogJ18nKVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2NvbmZpZy5uYW1lUGF0dGVybl0gLVxuICAgKiAgIFBhdHRlcm4gdG8gbWF0Y2ggdmFsaWQgYmxvY2sgbmFtZXMgKGRlZmF1bHQ6ICdbYS16QS1aMC05LV0rJylcbiAgICovXG4gIEJFTS5wcm90b3R5cGUuc2V0Q29uZmlnID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSAkLmV4dGVuZCh7fSwge1xuICAgICAgbmFtZVBhdHRlcm46ICdbYS16QS1aMC05XFxcXC1dKycsXG4gICAgICBlbGVtUHJlZml4OiAnX18nLFxuICAgICAgbW9kUHJlZml4OiAnLS0nLFxuICAgICAgbW9kRGxtdHI6ICdfJyxcbiAgICB9LCBjb25maWcpO1xuXG4gICAgdGhpcy5ibG9ja0NsYXNzUmUgPSB0aGlzLmJ1aWxkQmxvY2tDbGFzc1JlKCk7XG4gICAgdGhpcy5lbGVtQ2xhc3NSZSA9IHRoaXMuYnVpbGRFbGVtQ2xhc3NSZSgpO1xuICAgIHRoaXMubW9kQ2xhc3NSZSA9IHRoaXMuYnVpbGRNb2RDbGFzc1JlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBwYXJlbnQgYmxvY2sgb2YgZWxlbWVudC5cbiAgICogQHB1YmxpY1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRoaXNcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5nZXRCbG9jayA9IGZ1bmN0aW9uKCR0aGlzKSB7XG4gICAgdmFyIGJsb2NrQ2xhc3MgPSB0aGlzLmdldEJsb2NrQ2xhc3MoJHRoaXMpXG4gICAgICAsIGJsb2NrID0gJHRoaXMuY2xvc2VzdCgnLicgKyBibG9ja0NsYXNzKTtcblxuICAgIGJsb2NrLnNlbGVjdG9yID0gYmxvY2tDbGFzcztcbiAgICByZXR1cm4gYmxvY2s7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN3aXRjaCBibG9jayBjb250ZXh0LlxuICAgKiBAcHVibGljXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gYmxvY2tcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtlbGVtXVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLnN3aXRjaEJsb2NrID0gZnVuY3Rpb24oJHRoaXMsIGJsb2NrLCBlbGVtKSB7XG4gICAgdmFyIGVsZW0gPSBlbGVtIHx8IG51bGw7XG5cbiAgICBlbGVtXG4gICAgICA/ICR0aGlzLnNlbGVjdG9yID0gdGhpcy5idWlsZFNlbGVjdG9yKHsgYmxvY2s6IGJsb2NrLCBlbGVtOiBlbGVtIH0pXG4gICAgICA6ICR0aGlzLnNlbGVjdG9yID0gdGhpcy5idWlsZFNlbGVjdG9yKHsgYmxvY2s6IGJsb2NrIH0pO1xuXG4gICAgcmV0dXJuICR0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaW5kIGVsZW1lbnQgaW4gYmxvY2suXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgJHRoaXMgICAgRE9NIGVsZW1lbnRcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgZWxlbUtleSAgRWxlbWVudCBuYW1lXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuZmluZEVsZW0gPSBmdW5jdGlvbigkdGhpcywgZWxlbUtleSkge1xuICAgIHZhciBibG9ja0NsYXNzID0gdGhpcy5nZXRCbG9ja0NsYXNzKCR0aGlzKVxuICAgICAgLCBlbGVtU2VsZWN0b3IgPSAnLicgKyB0aGlzLmJ1aWxkRWxlbUNsYXNzKGJsb2NrQ2xhc3MsIGVsZW1LZXkpXG4gICAgICAsIGVsZW0gPSAkdGhpcy5pcyhlbGVtU2VsZWN0b3IpID8gJHRoaXMgOiAkdGhpcy5maW5kKGVsZW1TZWxlY3Rvcik7XG5cbiAgICByZXR1cm4gZWxlbTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHZhbHVlIG9mIG1vZGlmaWVyLlxuICAgKiBAcHVibGljXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kS2V5XG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuZ2V0TW9kID0gZnVuY3Rpb24oJHRoaXMsIG1vZEtleSkge1xuICAgIHZhciBtb2RzID0gdGhpcy5leHRyYWN0TW9kcygkdGhpcy5maXJzdCgpKTtcblxuICAgIGlmIChtb2RzW21vZEtleV0gIT0gdW5kZWZpbmVkKSByZXR1cm4gbW9kc1ttb2RLZXldO1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBtb2RpZmllciBvZiBlbGVtZW50LlxuICAgKiBAcHVibGljXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kS2V5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbbW9kVmFsXVxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5oYXNNb2QgPSBmdW5jdGlvbigkdGhpcywgbW9kS2V5LCBtb2RWYWwpIHtcbiAgICB2YXIgbW9kcyA9IHRoaXMuZXh0cmFjdE1vZHMoJHRoaXMuZmlyc3QoKSk7XG5cbiAgICBpZiAobW9kVmFsKSB7XG4gICAgICBpZiAobW9kc1ttb2RLZXldID09IG1vZFZhbCkgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKG1vZHNbbW9kS2V5XSkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgbW9kaWZpZXIgb24gZWxlbWVudC5cbiAgICogQHB1YmxpY1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRoaXNcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1vZEtleVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW21vZFZhbF1cbiAgICogQHBhcmFtIHtPYmplY3R9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLnNldE1vZCA9IGZ1bmN0aW9uKCR0aGlzLCBtb2RLZXksIG1vZFZhbCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgLCBzZWxlY3RvciA9ICR0aGlzLnNlbGVjdG9yO1xuXG4gICAgJHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjdXJyZW50ID0gJCh0aGlzKTtcbiAgICAgIGN1cnJlbnQuc2VsZWN0b3IgPSBzZWxlY3RvcjtcblxuICAgICAgdmFyIG1vZHMgPSBzZWxmLmV4dHJhY3RNb2RzKGN1cnJlbnQpXG4gICAgICAgICwgYmFzZU5hbWUgPSBzZWxmLmdldEJhc2VDbGFzcyhjdXJyZW50KTtcblxuICAgICAgaWYgKG1vZHNbbW9kS2V5XSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIG9sZE1vZE5hbWUgPSBzZWxmLmJ1aWxkTW9kQ2xhc3MoYmFzZU5hbWUsIG1vZEtleSwgbW9kc1ttb2RLZXldKTtcbiAgICAgICAgY3VycmVudC5yZW1vdmVDbGFzcyhvbGRNb2ROYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1vZFZhbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgdmFyIG5ld01vZE5hbWUgPSBzZWxmLmJ1aWxkTW9kQ2xhc3MoYmFzZU5hbWUsIG1vZEtleSwgbW9kVmFsKTtcbiAgICAgIH1cblxuICAgICAgY3VycmVudFxuICAgICAgICAuYWRkQ2xhc3MobmV3TW9kTmFtZSlcbiAgICAgICAgLnRyaWdnZXIoJ3NldG1vZCcsIFttb2RLZXksIG1vZFZhbF0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICR0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZWxldGUgbW9kaWZpZXIgb24gZWxlbWVudC5cbiAgICogQHB1YmxpY1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRoaXNcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1vZEtleVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW21vZFZhbF1cbiAgICogQHBhcmFtIHtPYmplY3R9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmRlbE1vZCA9IGZ1bmN0aW9uKCR0aGlzLCBtb2RLZXksIG1vZFZhbCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgLCBzZWxlY3RvciA9ICR0aGlzLnNlbGVjdG9yO1xuXG4gICAgJHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjdXJyZW50ID0gJCh0aGlzKTtcbiAgICAgIGN1cnJlbnQuc2VsZWN0b3IgPSBzZWxlY3RvcjtcblxuICAgICAgdmFyIG1vZHMgPSBzZWxmLmV4dHJhY3RNb2RzKGN1cnJlbnQpXG4gICAgICAgICwgYmFzZU5hbWUgPSBzZWxmLmdldEJhc2VDbGFzcyhjdXJyZW50KTtcblxuICAgICAgaWYgKG1vZFZhbCkge1xuICAgICAgICBpZiAobW9kc1ttb2RLZXldID09IG1vZFZhbCkge1xuICAgICAgICAgIHZhciBtb2ROYW1lID0gc2VsZi5idWlsZE1vZENsYXNzKGJhc2VOYW1lLCBtb2RLZXksIG1vZHNbbW9kS2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgbW9kTmFtZSA9IHNlbGYuYnVpbGRNb2RDbGFzcyhiYXNlTmFtZSwgbW9kS2V5LCBtb2RzW21vZEtleV0pO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50XG4gICAgICAgIC5yZW1vdmVDbGFzcyhtb2ROYW1lKVxuICAgICAgICAudHJpZ2dlcignZGVsbW9kJywgW21vZEtleSwgbW9kVmFsXSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gJHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbHRlcmluZyBlbGVtZW50cyBieSBtb2RpZmllci5cbiAgICogQHB1YmxpY1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRoaXNcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1vZEtleVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW21vZFZhbF1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbaW52ZXJzZV1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5ieU1vZCA9IGZ1bmN0aW9uKCR0aGlzLCBtb2RLZXksIG1vZFZhbCwgaW52ZXJzZSkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgLCBtb2RWYWwgPSBtb2RWYWwgfHwgbnVsbFxuICAgICAgLCBpbnZlcnNlID0gaW52ZXJzZSB8fCBmYWxzZVxuICAgICAgLCBzZWxlY3RvciA9ICR0aGlzLnNlbGVjdG9yXG4gICAgICAsIHJlc3VsdCA9ICQoKTtcblxuICAgICR0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY3VycmVudCA9ICQodGhpcyk7XG4gICAgICBjdXJyZW50LnNlbGVjdG9yID0gc2VsZWN0b3I7XG5cbiAgICAgIHZhciBtb2RzID0gc2VsZi5leHRyYWN0TW9kcyhjdXJyZW50KVxuICAgICAgICAsIGJhc2VOYW1lID0gc2VsZi5nZXRCYXNlQ2xhc3MoY3VycmVudCk7XG5cbiAgICAgIGlmIChtb2RWYWwpIHtcbiAgICAgICAgaWYgKG1vZHNbbW9kS2V5XSA9PSBtb2RWYWwpIHtcbiAgICAgICAgICB2YXIgbW9kTmFtZSA9IHNlbGYuYnVpbGRNb2RDbGFzcyhiYXNlTmFtZSwgbW9kS2V5LCBtb2RzW21vZEtleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKG1vZHNbbW9kS2V5XSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgbW9kTmFtZSA9IHNlbGYuYnVpbGRNb2RDbGFzcyhiYXNlTmFtZSwgbW9kS2V5LCBtb2RzW21vZEtleV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5hZGQoaW52ZXJzZVxuICAgICAgICA/IGN1cnJlbnQubm90KCcuJyArIG1vZE5hbWUpXG4gICAgICAgIDogY3VycmVudC5maWx0ZXIoJy4nICsgbW9kTmFtZSkpO1xuICAgIH0pO1xuXG4gICAgcmVzdWx0LnNlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGJsb2NrIG5hbWVzIGZyb20gZWxlbWVudC5cbiAgICogQHByb3RlY3RlZFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9ICR0aGlzXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuZXh0cmFjdEJsb2NrcyA9IGZ1bmN0aW9uKCR0aGlzKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLCByZXN1bHQgPSBbXVxuICAgICAgLCBzZWxlY3RvcnMgPSB0aGlzLmdldENsYXNzZXMoJHRoaXMpO1xuXG4gICAgJC5lYWNoKHNlbGVjdG9ycywgZnVuY3Rpb24oaSwgc2VsKSB7XG4gICAgICB2YXIgdHlwZSA9IHNlbGYuZ2V0Q2xhc3NUeXBlKHNlbCk7XG5cbiAgICAgIGlmICh0eXBlID09ICdibG9jaycpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goc2VsKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cGUgPT0gJ2VsZW0nKSB7XG4gICAgICAgIHZhciBlbGVtID0gc2VsLnNwbGl0KHNlbGYuY29uZmlnLmVsZW1QcmVmaXgpO1xuICAgICAgICByZXN1bHQucHVzaChlbGVtWzBdKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBlbGVtZW50IG5hbWVzIGZyb20gZWxlbWVudC5cbiAgICogQHByb3RlY3RlZFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRoaXNcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5leHRyYWN0RWxlbXMgPSBmdW5jdGlvbigkdGhpcykge1xuICAgIHZhciBzZWxmID0gdGhpcywgcmVzdWx0ID0gW107XG5cbiAgICAkLmVhY2goc2VsZi5nZXRDbGFzc2VzKCR0aGlzKSwgZnVuY3Rpb24oaSwgY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoc2VsZi5nZXRDbGFzc1R5cGUoY2xhc3NOYW1lKSA9PSAnZWxlbScpIHtcbiAgICAgICAgdmFyIGVsZW1OYW1lID0gY2xhc3NOYW1lLnNwbGl0KHNlbGYuY29uZmlnLmVsZW1QcmVmaXgpO1xuICAgICAgICByZXN1bHQucHVzaChlbGVtTmFtZVsxXSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgbW9kaWZpZXJzIGZyb20gZWxlbWVudC5cbiAgICogQHByb3RlY3RlZFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRoaXNcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5leHRyYWN0TW9kcyA9IGZ1bmN0aW9uKCR0aGlzKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLCByZXN1bHQgPSB7fTtcblxuICAgICR0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXG4gICAgICAkLmVhY2goc2VsZi5nZXRDbGFzc2VzKCR0aGlzKSwgZnVuY3Rpb24oaSwgY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmIChzZWxmLmdldENsYXNzVHlwZShjbGFzc05hbWUpID09ICdtb2QnKSB7XG4gICAgICAgICAgdmFyIHJlID0gc2VsZi5idWlsZE1vZENsYXNzUmUoKS5leGVjKGNsYXNzTmFtZSk7XG4gICAgICAgICAgdmFyIG1vZE5hbWUgPSByZVsxXS5zcGxpdChzZWxmLmNvbmZpZy5tb2REbG10cik7XG5cbiAgICAgICAgICBpZiAobW9kTmFtZVsxXSAhPT0gdW5kZWZpbmVkICYmIG1vZE5hbWVbMV0gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgbW9kVmFsID0gbW9kTmFtZVsxXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG1vZFZhbCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzdWx0WyBtb2ROYW1lWzBdIF0gPSBtb2RWYWw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGNsYXNzZXMgbmFtZXMgZnJvbSBlbGVtZW50LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmdldENsYXNzZXMgPSBmdW5jdGlvbigkdGhpcykge1xuICAgIHZhciBjbGFzc2VzLCByZXN1bHQgPSBbXTtcblxuICAgIGlmICh0eXBlb2YgJHRoaXMgPT0gJ29iamVjdCcpIHtcblxuICAgICAgaWYgKCR0aGlzLnNlbGVjdG9yLmluZGV4T2YoJy4nKSA9PT0gMCkge1xuICAgICAgICBjbGFzc2VzID0gJHRoaXMuc2VsZWN0b3Iuc3BsaXQoJy4nKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCR0aGlzLmF0dHIoJ2NsYXNzJykgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNsYXNzZXMgPSAkdGhpcy5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjbGFzc2VzID0gJHRoaXMuc3BsaXQoJy4nKTtcbiAgICB9XG5cbiAgICAkLmVhY2goY2xhc3NlcywgZnVuY3Rpb24oaSwgY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoY2xhc3NOYW1lICE9ICcnKSByZXN1bHQucHVzaCgkLnRyaW0oY2xhc3NOYW1lKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBCdWlsZCByZWdleHAgZm9yIGJsb2Nrcy5cbiAgICogQHByb3RlY3RlZFxuICAgKlxuICAgKiBAcmV0dXJuIHtSZWdFeHB9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmJ1aWxkQmxvY2tDbGFzc1JlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgICAnXignICsgdGhpcy5jb25maWcubmFtZVBhdHRlcm4gKyAnKSQnXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogQnVpbGQgcmVnZXhwIGZvciBlbGVtZW50cy5cbiAgICogQHByb3RlY3RlZFxuICAgKlxuICAgKiBAcmV0dXJuIHtSZWdFeHB9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmJ1aWxkRWxlbUNsYXNzUmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICAgICdeJyArIHRoaXMuY29uZmlnLm5hbWVQYXR0ZXJuICsgdGhpcy5jb25maWcuZWxlbVByZWZpeCArICcoJyArIHRoaXMuY29uZmlnLm5hbWVQYXR0ZXJuICsgJykkJ1xuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHJlZ2V4cCBmb3IgbW9kaWZpZXJzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEByZXR1cm4ge1JlZ0V4cH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuYnVpbGRNb2RDbGFzc1JlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgICAnXig/OicgKyB0aGlzLmNvbmZpZy5uYW1lUGF0dGVybiArICd8JyArIHRoaXMuY29uZmlnLm5hbWVQYXR0ZXJuICsgdGhpcy5jb25maWcuZWxlbVByZWZpeCArIHRoaXMuY29uZmlnLm5hbWVQYXR0ZXJuICsgJyknICsgdGhpcy5jb25maWcubW9kUHJlZml4ICsgJygnICsgdGhpcy5jb25maWcubmFtZVBhdHRlcm4gKyAnKCgnICsgdGhpcy5jb25maWcubW9kRGxtdHIgKyB0aGlzLmNvbmZpZy5uYW1lUGF0dGVybiArICcpJHwkKSknXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogQnVpbGQgY2xhc3MgbmFtZSBmb3IgYmxvY2suXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGJsb2NrTmFtZVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmJ1aWxkQmxvY2tDbGFzcyA9IGZ1bmN0aW9uKGJsb2NrTmFtZSkge1xuICAgIHJldHVybiBibG9ja05hbWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGNsYXNzIG5hbWUgZm9yIGVsZW1lbnQuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGJsb2NrTmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWxlbUtleVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmJ1aWxkRWxlbUNsYXNzID0gZnVuY3Rpb24oYmxvY2tOYW1lLCBlbGVtS2V5KSB7XG4gICAgcmV0dXJuIGJsb2NrTmFtZSArIHRoaXMuY29uZmlnLmVsZW1QcmVmaXggKyBlbGVtS2V5O1xuICB9O1xuXG4gIC8qKlxuICAgKiBCdWlsZCBjbGFzcyBuYW1lIGZvciBtb2RpZmllci5cbiAgICogQHByb3RlY3RlZFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gYmxvY2tOYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtb2RLZXlcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1vZFZhbFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmJ1aWxkTW9kQ2xhc3MgPSBmdW5jdGlvbihiYXNlQ2xhc3MsIG1vZEtleSwgbW9kVmFsKSB7XG4gICAgaWYgKG1vZFZhbCAhPT0gdW5kZWZpbmVkICYmIG1vZFZhbCAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGJhc2VDbGFzcyArIHRoaXMuY29uZmlnLm1vZFByZWZpeCArIG1vZEtleSArIHRoaXMuY29uZmlnLm1vZERsbXRyICsgbW9kVmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYmFzZUNsYXNzICsgdGhpcy5jb25maWcubW9kUHJlZml4ICsgbW9kS2V5O1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQnVpbGQgc2VsZWN0b3IgZnJvbSBvYmplY3Qgb3Igc3RyaW5nLlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9XG4gICAqIEBwYXJhbSB7U3RyaW5nfVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmJ1aWxkU2VsZWN0b3IgPSBmdW5jdGlvbihzZWxlY3RvciwgcHJlZml4KSB7XG4gICAgaWYgKHByZWZpeCAhPT0gJycpIHtcbiAgICAgIHZhciBwcmVmaXggPSBwcmVmaXggfHwgJy4nO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChzZWxlY3Rvci5ibG9jayAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGJ1aWxkU2VsZWN0b3IgPSB0aGlzLmJ1aWxkQmxvY2tDbGFzcyhzZWxlY3Rvci5ibG9jayk7XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yLmVsZW0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYnVpbGRTZWxlY3RvciA9IHRoaXMuYnVpbGRFbGVtQ2xhc3MoYnVpbGRTZWxlY3Rvciwgc2VsZWN0b3IuZWxlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0b3IubW9kICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBtb2QgPSBzZWxlY3Rvci5tb2Quc3BsaXQoJzonKTtcbiAgICAgICAgICBidWlsZFNlbGVjdG9yID0gdGhpcy5idWlsZE1vZENsYXNzKGJ1aWxkU2VsZWN0b3IsIG1vZFswXSwgbW9kWzFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBidWlsZFNlbGVjdG9yICE9IHVuZGVmaW5lZFxuICAgICAgPyBwcmVmaXggKyBidWlsZFNlbGVjdG9yXG4gICAgICA6IHByZWZpeCArIHNlbGVjdG9yO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCdWlsZCBjbGFzcyBuYW1lIGZvciBibG9jay5cbiAgICogQHByb3RlY3RlZFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9ICR0aGlzXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbaW5kZXhdXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuZ2V0QmxvY2tDbGFzcyA9IGZ1bmN0aW9uKCR0aGlzLCBpbmRleCkge1xuICAgIHZhciBibG9ja0NsYXNzZXMgPSB0aGlzLmV4dHJhY3RCbG9ja3MoJHRoaXMpO1xuICAgIHZhciBpbmRleCA9IGluZGV4IHx8IDA7XG5cbiAgICByZXR1cm4gaW5kZXggPD0gYmxvY2tDbGFzc2VzLmxlbmd0aCAtIDFcbiAgICAgID8gYmxvY2tDbGFzc2VzW2luZGV4XVxuICAgICAgOiBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYmFzZSBjbGFzcyBmcm9tIGVsZW1lbnQuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuZ2V0QmFzZUNsYXNzID0gZnVuY3Rpb24oJHRoaXMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsIGJhc2VDbGFzcyA9IG51bGw7XG4gICAgdmFyIHNlbGVjdG9ycyA9IHRoaXMuZ2V0Q2xhc3NlcygkdGhpcyk7XG5cbiAgICAkLmVhY2goc2VsZWN0b3JzLCBmdW5jdGlvbihpLCBzZWwpIHtcbiAgICAgIHZhciBjbGFzc1R5cGUgPSBzZWxmLmdldENsYXNzVHlwZShzZWwpO1xuXG4gICAgICBpZiAoY2xhc3NUeXBlICYmIGNsYXNzVHlwZSAhPSAnbW9kJykge1xuICAgICAgICBiYXNlQ2xhc3MgPSBzZWw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYmFzZUNsYXNzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgY2xhc3MgdHlwZS5cbiAgICogQHByb3RlY3RlZFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuZ2V0Q2xhc3NUeXBlID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gICAgaWYgKHRoaXMubW9kQ2xhc3NSZS50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgIHJldHVybiAnbW9kJztcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5lbGVtQ2xhc3NSZS50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgIHJldHVybiAnZWxlbSc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuYmxvY2tDbGFzc1JlLnRlc3QoY2xhc3NOYW1lKSkge1xuICAgICAgcmV0dXJuICdibG9jayc7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgQkVNIGluc3RhbmNlLlxuICAgKi9cbiAgJC5CRU0gPSBuZXcgQkVNKCk7XG5cbiAgLyoqXG4gICAqIEV4dGVuZCBqUXVlcnkgb2JqZWN0LlxuICAgKi9cbiAgJC5mbi5leHRlbmQoe1xuICAgIGJsb2NrOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkLkJFTS5nZXRCbG9jayh0aGlzKTtcbiAgICB9LFxuXG4gICAgZXh0cmFjdEJsb2NrczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJC5CRU0uZXh0cmFjdEJsb2Nrcyh0aGlzKTtcbiAgICB9LFxuXG4gICAgaXNCZW1CbG9jazogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJyk7XG4gICAgICBsZXQgaXNCbG9jayA9IGZhbHNlO1xuICAgICAgY2xhc3Nlcy5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgICAgIGlmICgkLkJFTS5nZXRDbGFzc1R5cGUoY2xhc3NOYW1lKSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgIGlzQmxvY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpc0Jsb2NrO1xuICAgIH0sXG5cbiAgICBibG9ja1NldHRpbmdzOiBmdW5jdGlvbiAoZGVmYXVsdFNldHRpbmdzKSB7XG4gICAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB0aGlzLmRhdGEoJ21CZW1TZXR0aW5ncycpIHx8IHt9O1xuICAgICAgY29uc3Qgc2V0dGluZ3MgPSBkZWZhdWx0U2V0dGluZ3MgfHwge307XG4gICAgICBPYmplY3Qua2V5cyh1c2VyU2V0dGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc2V0dGluZ3M7XG4gICAgfSxcblxuICAgIGVsZW06IGZ1bmN0aW9uKGN0eCwgZWxlbUtleSkge1xuICAgICAgaWYgKCFlbGVtS2V5KSB7XG4gICAgICAgIGVsZW1LZXkgPSBjdHg7XG4gICAgICAgIGN0eCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAkLkJFTS5maW5kRWxlbShjdHggfHwgdGhpcywgZWxlbUtleSk7XG4gICAgfSxcblxuICAgIGN0eDogZnVuY3Rpb24oYmxvY2ssIGVsZW0pIHtcbiAgICAgIHJldHVybiAkLkJFTS5zd2l0Y2hCbG9jayh0aGlzLCBibG9jaywgZWxlbSk7XG4gICAgfSxcblxuICAgIG1vZDogZnVuY3Rpb24obW9kS2V5LCBtb2RWYWwpIHtcbiAgICAgIGlmICh0eXBlb2YgbW9kVmFsID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG1vZFZhbCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChtb2RWYWwgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiAkLkJFTS5kZWxNb2QodGhpcywgbW9kS2V5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChtb2RWYWwgIT0gbnVsbClcbiAgICAgICAgPyAkLkJFTS5zZXRNb2QodGhpcywgbW9kS2V5LCBtb2RWYWwpXG4gICAgICAgIDogJC5CRU0uZ2V0TW9kKHRoaXMsIG1vZEtleSk7XG4gICAgfSxcblxuICAgIHNldE1vZDogZnVuY3Rpb24obW9kS2V5LCBtb2RWYWwpIHtcbiAgICAgIHJldHVybiAkLkJFTS5zZXRNb2QodGhpcywgbW9kS2V5LCBtb2RWYWwpO1xuICAgIH0sXG5cbiAgICBkZWxNb2Q6IGZ1bmN0aW9uKG1vZEtleSwgbW9kVmFsKSB7XG4gICAgICByZXR1cm4gJC5CRU0uZGVsTW9kKHRoaXMsIG1vZEtleSwgbW9kVmFsKTtcbiAgICB9LFxuXG4gICAgaGFzTW9kOiBmdW5jdGlvbihtb2RLZXksIG1vZFZhbCkge1xuICAgICAgcmV0dXJuICQuQkVNLmhhc01vZCh0aGlzLCBtb2RLZXksIG1vZFZhbCk7XG4gICAgfSxcblxuICAgIGJ5TW9kOiBmdW5jdGlvbihtb2RLZXksIG1vZFZhbCkge1xuICAgICAgcmV0dXJuICQuQkVNLmJ5TW9kKHRoaXMsIG1vZEtleSwgbW9kVmFsKTtcbiAgICB9LFxuXG4gICAgYnlOb3RNb2Q6IGZ1bmN0aW9uKG1vZEtleSwgbW9kVmFsKSB7XG4gICAgICByZXR1cm4gJC5CRU0uYnlNb2QodGhpcywgbW9kS2V5LCBtb2RWYWwsICdpbnZlcnNlJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBibG9ja3MncyBvciBlbGVtJ3MgbW9kaWZpZXIgYG1vZEtleWAgYmV0d2VlbiBgbW9kVmFsMWAgYW5kIGBtb2RWYWwyYFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtb2RLZXlcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kVmFsMVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtb2RWYWwyXG4gICAgICogQHJldHVybiB7Kn1cbiAgICAgKi9cbiAgICB0b2dnbGVNb2Q6IGZ1bmN0aW9uIChtb2RLZXksIG1vZFZhbDEsIG1vZFZhbDIpIHtcbiAgICAgIGlmICh0aGlzLmhhc01vZChtb2RLZXksIG1vZFZhbDEpKSB7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgICAgICAuZGVsTW9kKG1vZEtleSwgbW9kVmFsMSlcbiAgICAgICAgICAgIC5zZXRNb2QobW9kS2V5LCBtb2RWYWwyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgICAgICAuZGVsTW9kKG1vZEtleSwgbW9kVmFsMilcbiAgICAgICAgICAgIC5zZXRNb2QobW9kS2V5LCBtb2RWYWwxKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG59KSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvcmUvbGlicy9qcXVlcnkuYmVtLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vY29yZS9idW5kbGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJqUXVlcnlcIlxuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9