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
	 *
	 * Another simple usage:
	 * ```
	 * window.DialogHelper
	 *   .builderDialog()
	 *   .onAjaxLoad((data, $target, dialog, dataChanger) => {
	 *       dataChanger(data ? '<div>OK</div>' : '<div>Error</div>');
	 *       return true;
	 *     })
	 *   .ajax({
	 *     url: '/monster/bundles/clear-cache',
	 *     method: 'POST',
	 *     dataType: 'json', // true or false is returned
	 *   })
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
	      this.onAjaxLoadChain = [];
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
	      $ajax.dataType = $ajax.dataType || 'html';
	
	      $.ajax($ajax).fail(function (jqXHR, textStatus, errorThrown) {
	        // @todo: display error somehow
	      }).done(function (data, textStatus, jqXHR) {
	        var ok = true;
	        var ajaxData = data;
	        var changeData = function changeData(newData) {
	          ajaxData = newData;
	        };
	        _this3.onAjaxLoadChain.forEach(function (f) {
	          ok = ok && f(ajaxData, $target, _this3, changeData);
	        });
	        if (ok) {
	          var $data = $(ajaxData);
	          $target.append($data);
	        }
	        _this3.$loader.hide();
	      });
	      /* eslint-enable no-unused-vars, no-param-reassign */
	      return this;
	    }
	
	    /**
	     * Add callback to chain on ajax.
	     *
	     * @param f
	     * @returns {DialogHelper}
	     */
	
	  }, {
	    key: 'onAjaxLoad',
	    value: function onAjaxLoad(f) {
	      this.onAjaxLoadChain.push(f);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzgyNThhZmM0N2YxMjk4MDczNmMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL2NvcmUvYnVuZGxlLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS9jb3JlL2dlbmVyYWwvRGlhbG9nSGVscGVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS9jb3JlL2dlbmVyYWwvTW9uc3RlckJlbS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvY29yZS9saWJzL2pxdWVyeS5iZW0uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL2NvcmUvYnVuZGxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyIkIiwiQkVNIiwic2V0Q29uZmlnIiwibmFtZVBhdHRlcm4iLCJlbGVtUHJlZml4IiwibW9kUHJlZml4IiwibW9kRGxtdHIiLCJ3aW5kb3ciLCJNb25zdGVyQmVtIiwiRGlhbG9nSGVscGVyIiwidXBkYXRlIiwib3B0aW9ucyIsInJlc2V0UGFyYW1zIiwiJG5vZGUiLCJuZXdPcHRpb25zIiwiZXh0ZW5kIiwicGFnZWNvbnRhaW5lciIsImNsb3NldHJhbnNpdGlvbmVuZCIsIm9uQ2xvc2VDaGFpbiIsImZvckVhY2giLCJmIiwiYXV0b0Rlc3Ryb3lPbkNsb3NlIiwiZGVzdHJveSIsInBvcHVwIiwiJGJvZHkiLCJhcHBlbmQiLCJjbG9zZXN0IiwiYWRkQ2xhc3MiLCJvbkFqYXhMb2FkQ2hhaW4iLCIkbG9hZGVyIiwiJHRpdGxlIiwiJGNsb3NlQnV0dG9uIiwiZW5hYmxlZCIsInByZXBlbmQiLCJjbGljayIsInJlbW92ZSIsInRhYmxldCIsImlzIiwibW9iaWxlIiwiY2xvc2VCdXR0b24iLCJ2YWx1ZSIsInRpdGxlIiwicHJlcGVuZFRvIiwiaHRtbCIsImVtcHR5IiwiY3JlYXRlTG9hZGVyIiwiJGFqYXgiLCJ0YXJnZXQiLCJzaG93IiwiJHRhcmdldCIsImRhdGFUeXBlIiwiYWpheCIsImZhaWwiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImRvbmUiLCJkYXRhIiwib2siLCJhamF4RGF0YSIsImNoYW5nZURhdGEiLCJuZXdEYXRhIiwiJGRhdGEiLCJoaWRlIiwicHVzaCIsIiR3cmFwcGVyIiwiaWQiLCJhdHRyIiwiJGJhY2tncm91bmQiLCJkaWFsb2ciLCJub2RlIiwibW9kIiwicGFyYW1zIiwiYmxvY2tDYWxsYmFja3MiLCJ1c2VyU2V0dGluZ3MiLCJNb25zdGVyQmVtU2V0dGluZ3MiLCJzZXR0aW5ncyIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJjYWxsYmFjayIsImJsb2NrTmFtZSIsImVhY2giLCJpdGVyIiwiJHRoaXMiLCJjYWxsIiwicmVtb3ZlQ2xhc3MiLCJyb290IiwiZmFjdG9yeSIsImRlZmluZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwialF1ZXJ5IiwidW5kZWZpbmVkIiwiY29uZmlnIiwicHJvdG90eXBlIiwiYmxvY2tDbGFzc1JlIiwiYnVpbGRCbG9ja0NsYXNzUmUiLCJlbGVtQ2xhc3NSZSIsImJ1aWxkRWxlbUNsYXNzUmUiLCJtb2RDbGFzc1JlIiwiYnVpbGRNb2RDbGFzc1JlIiwiZ2V0QmxvY2siLCJibG9ja0NsYXNzIiwiZ2V0QmxvY2tDbGFzcyIsImJsb2NrIiwic2VsZWN0b3IiLCJzd2l0Y2hCbG9jayIsImVsZW0iLCJidWlsZFNlbGVjdG9yIiwiZmluZEVsZW0iLCJlbGVtS2V5IiwiZWxlbVNlbGVjdG9yIiwiYnVpbGRFbGVtQ2xhc3MiLCJmaW5kIiwiZ2V0TW9kIiwibW9kS2V5IiwibW9kcyIsImV4dHJhY3RNb2RzIiwiZmlyc3QiLCJoYXNNb2QiLCJtb2RWYWwiLCJzZXRNb2QiLCJzZWxmIiwiY3VycmVudCIsImJhc2VOYW1lIiwiZ2V0QmFzZUNsYXNzIiwib2xkTW9kTmFtZSIsImJ1aWxkTW9kQ2xhc3MiLCJuZXdNb2ROYW1lIiwidHJpZ2dlciIsImRlbE1vZCIsIm1vZE5hbWUiLCJieU1vZCIsImludmVyc2UiLCJyZXN1bHQiLCJhZGQiLCJub3QiLCJmaWx0ZXIiLCJleHRyYWN0QmxvY2tzIiwic2VsZWN0b3JzIiwiZ2V0Q2xhc3NlcyIsImkiLCJzZWwiLCJ0eXBlIiwiZ2V0Q2xhc3NUeXBlIiwic3BsaXQiLCJleHRyYWN0RWxlbXMiLCJjbGFzc05hbWUiLCJlbGVtTmFtZSIsInJlIiwiZXhlYyIsImNsYXNzZXMiLCJpbmRleE9mIiwidHJpbSIsIlJlZ0V4cCIsImJ1aWxkQmxvY2tDbGFzcyIsImJhc2VDbGFzcyIsInByZWZpeCIsImluZGV4IiwiYmxvY2tDbGFzc2VzIiwibGVuZ3RoIiwiY2xhc3NUeXBlIiwidGVzdCIsImZuIiwiaXNCZW1CbG9jayIsImlzQmxvY2siLCJibG9ja1NldHRpbmdzIiwiZGVmYXVsdFNldHRpbmdzIiwiY3R4IiwiYnlOb3RNb2QiLCJ0b2dnbGVNb2QiLCJtb2RWYWwxIiwibW9kVmFsMiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUN0Q0E7O0FBTUE7O0FBV0E7Ozs7QUFHQTs7Ozs7O0FBWkE7QUFDQUEsR0FBRUMsR0FBRixDQUFNQyxTQUFOLENBQWdCO0FBQ2RDLGdCQUFhLGlCQURDO0FBRWRDLGVBQVksSUFGRTtBQUdkQyxjQUFXLEdBSEc7QUFJZEMsYUFBVTtBQUpJLEVBQWhC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QWpCLEVBQXlCO0FBQzlCLGNBQU8xSCxFQUFFQyxHQUFGLENBQU1xSSxLQUFOLENBQVksSUFBWixFQUFrQmpCLE1BQWxCLEVBQTBCSyxNQUExQixDQUFQO0FBQ0QsTUF0RVM7O0FBd0VWaUQsZUFBVSxrQkFBU3RELE1BQVQsRUFBaUJLLE1BQWpCLEVBQXlCO0FBQ2pDLGNBQU8xSCxFQUFFQyxHQUFGLENBQU1xSSxLQUFOLENBQVksSUFBWixFQUFrQmpCLE1BQWxCLEVBQTBCSyxNQUExQixFQUFrQyxTQUFsQyxDQUFQO0FBQ0QsTUExRVM7O0FBNEVWOzs7Ozs7O0FBT0FrRCxnQkFBVyxtQkFBVXZELE1BQVYsRUFBa0J3RCxPQUFsQixFQUEyQkMsT0FBM0IsRUFBb0M7QUFDN0MsV0FBSSxLQUFLckQsTUFBTCxDQUFZSixNQUFaLEVBQW9Cd0QsT0FBcEIsQ0FBSixFQUFrQztBQUNoQyxnQkFBTyxLQUNGekMsTUFERSxDQUNLZixNQURMLEVBQ2F3RCxPQURiLEVBRUZsRCxNQUZFLENBRUtOLE1BRkwsRUFFYXlELE9BRmIsQ0FBUDtBQUdELFFBSkQsTUFJTztBQUNMLGdCQUFPLEtBQ0YxQyxNQURFLENBQ0tmLE1BREwsRUFDYXlELE9BRGIsRUFFRm5ELE1BRkUsQ0FFS04sTUFGTCxFQUVhd0QsT0FGYixDQUFQO0FBR0Q7QUFDRjtBQTdGUyxJQUFaO0FBZ0dELEVBcm5CQSxDQUFELEM7Ozs7Ozs7QUNMQSwwQzs7Ozs7OztBQ0FBLHlCIiwiZmlsZSI6ImNvcmUvc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMzgyNThhZmM0N2YxMjk4MDczNmNcbiAqKi8iLCJpbXBvcnQgJy4vYnVuZGxlLmNzcyc7XG4vKlxuIFRoaXMgYnVuZGxlIGlzIGluY2x1ZGVkIGludG8gZXZlcnkgcGFnZVxuICovXG5cbi8vIERvY3VtZW50YXRpb24gaXMgbG9jYXRlZCBhdCBodHRwczovL2dpdGh1Yi5jb20vemVud2Fsa2VyL2pxdWVyeS1iZW0janF1ZXJ5YmVtXG5pbXBvcnQgJy4vbGlicy9qcXVlcnkuYmVtJztcblxuLy8gUmVjb25maWd1cmUgQkVNIG5hbWluZ1xuJC5CRU0uc2V0Q29uZmlnKHtcbiAgbmFtZVBhdHRlcm46ICdbYS16QS1aMC05XFxcXC1dKycsXG4gIGVsZW1QcmVmaXg6ICdfXycsXG4gIG1vZFByZWZpeDogJ18nLFxuICBtb2REbG10cjogJ18nLFxufSk7XG5cblxuaW1wb3J0IE1vbnN0ZXJCZW0gZnJvbSAnLi9nZW5lcmFsL01vbnN0ZXJCZW0nO1xud2luZG93Lk1vbnN0ZXJCZW0gPSBuZXcgTW9uc3RlckJlbSgpO1xuXG5pbXBvcnQgRGlhbG9nSGVscGVyIGZyb20gJy4vZ2VuZXJhbC9EaWFsb2dIZWxwZXInO1xud2luZG93LkRpYWxvZ0hlbHBlciA9IERpYWxvZ0hlbHBlcjtcblxuLyogZ2xvYmFsICQgKi9cbiQoKCkgPT4ge1xuICB3aW5kb3cuTW9uc3RlckJlbS51cGRhdGUoKTtcbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvY29yZS9idW5kbGUuanNcbiAqKi8iLCIvKipcbiAqIERpYWxvZyBoZWxwZXIgY2xhc3MgZm9yIHVzZSB3aXRoIGpxdWVyeS1wb3B1cC1vdmVybGF5LlxuICogRXhhbXBsZSB1c2FnZTpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHZhciBkID0gRGlhbG9nSGVscGVyXG4gKiAgIC5idWlsZGVyRGlhbG9nKClcbiAqICAgLmh0bWwoXCJIQUxPXCIpXG4gKiAgIC5hdXRvRGVzdHJveSgpXG4gKiAgIC5zaG93KCk7XG4gKiBgYGBcbiAqXG4gKiBBbm90aGVyIHNpbXBsZSB1c2FnZTpcbiAqIGBgYFxuICogd2luZG93LkRpYWxvZ0hlbHBlclxuICogICAuYnVpbGRlckRpYWxvZygpXG4gKiAgIC5vbkFqYXhMb2FkKChkYXRhLCAkdGFyZ2V0LCBkaWFsb2csIGRhdGFDaGFuZ2VyKSA9PiB7XG4gKiAgICAgICBkYXRhQ2hhbmdlcihkYXRhID8gJzxkaXY+T0s8L2Rpdj4nIDogJzxkaXY+RXJyb3I8L2Rpdj4nKTtcbiAqICAgICAgIHJldHVybiB0cnVlO1xuICogICAgIH0pXG4gKiAgIC5hamF4KHtcbiAqICAgICB1cmw6ICcvbW9uc3Rlci9idW5kbGVzL2NsZWFyLWNhY2hlJyxcbiAqICAgICBtZXRob2Q6ICdQT1NUJyxcbiAqICAgICBkYXRhVHlwZTogJ2pzb24nLCAvLyB0cnVlIG9yIGZhbHNlIGlzIHJldHVybmVkXG4gKiAgIH0pXG4gKiAgIC5hdXRvRGVzdHJveSgpXG4gKiAgIC5zaG93KCk7XG4gKiBgYGBcbiAqL1xuY2xhc3MgRGlhbG9nSGVscGVyIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yLlxuICAgKiBJbml0aWFsaXplcyBiYXNlIHByb3BlcnRpZXMgYW5kIGNyZWF0ZXMgRE9NIG5vZGUuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5yZXNldFBhcmFtcygpO1xuICAgIHRoaXMuJG5vZGUgPSAkKCc8ZGl2IGNsYXNzPVwibW9uc3Rlci1kaWFsb2dcIj48L2Rpdj4nKTtcbiAgICBjb25zdCBuZXdPcHRpb25zID0gJC5leHRlbmQoXG4gICAgICB7XG4gICAgICAgIHBhZ2Vjb250YWluZXI6ICcubS13cmFwcGVyJyxcbiAgICAgICAgY2xvc2V0cmFuc2l0aW9uZW5kOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkNsb3NlQ2hhaW4uZm9yRWFjaChmID0+IHtcbiAgICAgICAgICAgIGYoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAodGhpcy5hdXRvRGVzdHJveU9uQ2xvc2UpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBvcHRpb25zXG4gICAgKTtcbiAgICB0aGlzLiRub2RlLnBvcHVwKG5ld09wdGlvbnMpO1xuICAgIHRoaXMuJGJvZHkgPSAkKCc8ZGl2IGNsYXNzPVwibW9uc3Rlci1kaWFsb2dfX2JvZHlcIj48L2Rpdj4nKTtcbiAgICB0aGlzLiRub2RlLmFwcGVuZCh0aGlzLiRib2R5KTtcbiAgICB0aGlzLiRub2RlLmNsb3Nlc3QoJy5wb3B1cF93cmFwcGVyJykuYWRkQ2xhc3MoJ20td3JhcHBlcicpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgbmV3IERpYWxvZ0hlbHBlciBhbmQgcmV0dXJucyBpdC5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIHN0YXRpYyBkaWFsb2cob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyBEaWFsb2dIZWxwZXIob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBuZXcgRGlhbG9nSGVscGVyIGluIFZpc3VhbEJ1aWxkZXIgdGhlbWUuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtEaWFsb2dIZWxwZXJ9XG4gICAqL1xuICBzdGF0aWMgYnVpbGRlckRpYWxvZyhvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBkaWFsb2cgPSBEaWFsb2dIZWxwZXIuZGlhbG9nKG9wdGlvbnMpO1xuICAgIHJldHVybiBkaWFsb2cubm9kZSgkbm9kZSA9PiAkbm9kZS5tb2QoJ3RoZW1lJywgJ2J1aWxkZXInKSk7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJuYWwgZnVuY3Rpb24gLSByZXNldHMgY2xhc3MgcGFyYW1zLlxuICAgKi9cbiAgcmVzZXRQYXJhbXMoKSB7XG4gICAgdGhpcy4kbm9kZSA9IG51bGw7XG4gICAgdGhpcy5hdXRvRGVzdHJveU9uQ2xvc2UgPSBmYWxzZTtcbiAgICB0aGlzLm9uQ2xvc2VDaGFpbiA9IFtdO1xuICAgIHRoaXMub25BamF4TG9hZENoYWluID0gW107XG4gICAgdGhpcy4kbG9hZGVyID0gbnVsbDtcbiAgICB0aGlzLiRib2R5ID0gbnVsbDtcbiAgICB0aGlzLiR0aXRsZSA9IG51bGw7XG4gICAgdGhpcy4kY2xvc2VCdXR0b24gPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgb3IgZGlzYWJsZXMgY2xvc2UgYnV0dG9uLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWRcbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIGNsb3NlQnV0dG9uKGVuYWJsZWQgPSB0cnVlKSB7XG4gICAgaWYgKGVuYWJsZWQgJiYgdGhpcy4kY2xvc2VCdXR0b24gPT09IG51bGwpIHtcbiAgICAgIHRoaXMuJGNsb3NlQnV0dG9uID0gJCgnPGRpdiBjbGFzcz1cIm1vbnN0ZXItZGlhbG9nX19jbG9zZVwiPjwvZGl2PicpO1xuICAgICAgdGhpcy4kY2xvc2VCdXR0b24ucHJlcGVuZCh0aGlzLiRub2RlKTtcbiAgICAgIHRoaXMuJGNsb3NlQnV0dG9uLmNsaWNrKCgpID0+IHRoaXMuJG5vZGUucG9wdXAoJ2hpZGUnKSk7XG4gICAgfVxuICAgIGlmICghZW5hYmxlZCAmJiB0aGlzLiRjbG9zZUJ1dHRvbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy4kY2xvc2VCdXR0b24ucmVtb3ZlKCk7XG4gICAgICB0aGlzLiRjbG9zZUJ1dHRvbiA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgY2xvc2Ugb24gbW9iaWxlIGRldmljZXMuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdGFibGV0IFRyZWF0IHRhYmxldCBhcyBtb2JpbGUgZGV2aWNlcyB0b28uXG4gICAqIEByZXR1cm5zIHtEaWFsb2dIZWxwZXJ9XG4gICAqL1xuICBzaG93Q2xvc2VPbk1vYmlsZSh0YWJsZXQgPSBmYWxzZSkge1xuICAgIC8qIGdsb2JhbCBpczpmYWxzZSAqL1xuICAgIGlmIChpcy5tb2JpbGUoKSB8fCAodGFibGV0ICYmIGlzLnRhYmxldCgpKSkge1xuICAgICAgdGhpcy5jbG9zZUJ1dHRvbih0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGF1dG9EZXN0cm95IG9wdGlvbi4gSWYgdHJ1ZSAtIGRlc3Ryb3lzIERPTSBub2RlIG9uIGNsb3NlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gICAqIEByZXR1cm5zIHtEaWFsb2dIZWxwZXJ9XG4gICAqL1xuICBhdXRvRGVzdHJveSh2YWx1ZSA9IHRydWUpIHtcbiAgICB0aGlzLmF1dG9EZXN0cm95T25DbG9zZSA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGlhbG9nIHRpdGxlLiBBZGRzIHRpdGxlIGVsZW1lbnQgaWYgbm90IHNldFxuICAgKiBAcGFyYW0ge3N0cmluZ3wkfGJvb2xlYW59IHRpdGxlXG4gICAqIEByZXR1cm5zIHtEaWFsb2dIZWxwZXJ9XG4gICAqL1xuICB0aXRsZSh0aXRsZSkge1xuICAgIGlmICh0aGlzLiR0aXRsZSA9PT0gbnVsbCAmJiB0aXRsZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuJHRpdGxlLnJlbW92ZSgpO1xuICAgICAgdGhpcy4kdGl0bGUgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGlmICh0aGlzLiR0aXRsZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy4kdGl0bGUgPSAkKCc8ZGl2IGNsYXNzPVwibW9uc3Rlci1kaWFsb2dfX3RpdGxlXCI+PC9kaXY+Jyk7XG4gICAgICB0aGlzLiR0aXRsZS5wcmVwZW5kVG8odGhpcy4kbm9kZSk7XG4gICAgfVxuICAgIGlmICh0aXRsZSBpbnN0YW5jZW9mICQpIHtcbiAgICAgIHRoaXMuJHRpdGxlLmFwcGVuZCh0aXRsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJHRpdGxlLmh0bWwodGl0bGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW4gc29tZSBhY3Rpb25zIG9uICRub2RlIGVsZW1lbnRcbiAgICogQHBhcmFtIHtEaWFsb2dIZWxwZXJ+bm9kZX0gZiBGdW5jdGlvbiB0byBydW4gb24gZWxlbWVudCwgYWNjZXB0cyAkbm9kZSBhcyBhIHBhcmFtXG4gICAqIEByZXR1cm5zIHtEaWFsb2dIZWxwZXJ9XG4gICAqL1xuICBub2RlKGYpIHtcbiAgICBmKHRoaXMuJG5vZGUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1biBzb21lIGFjdGlvbnMgb24gJGJvZHkgZWxlbWVudFxuICAgKiBAcGFyYW0ge0RpYWxvZ0hlbHBlcn5ib2R5fSBmIEZ1bmN0aW9uIHRvIHJ1biBvbiBlbGVtZW50LCBhY2NlcHRzICRib2R5IGFzIGEgcGFyYW1cbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIGJvZHkoZikge1xuICAgIGYodGhpcy4kYm9keSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IEhUTUwgY29udGVudCBvZiBwb3B1cC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8JH0gaHRtbCBTdHJpbmcgb3IgalF1ZXJ5IG5vZGUuXG4gICAqIEByZXR1cm5zIHtEaWFsb2dIZWxwZXJ9XG4gICAqL1xuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCBpbnN0YW5jZW9mICQpIHtcbiAgICAgIHRoaXMuJGJvZHkuZW1wdHkoKTtcbiAgICAgIHRoaXMuJGJvZHkuYXBwZW5kKGh0bWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRib2R5Lmh0bWwoaHRtbCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgbG9hZGVyIGVsZW1lbnRcbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIGNyZWF0ZUxvYWRlcigpIHtcbiAgICBpZiAodGhpcy4kbG9hZGVyID09PSBudWxsKSB7XG4gICAgICB0aGlzLiRsb2FkZXIgPSAkKCc8ZGl2IGNsYXNzPVwibW9uc3Rlci1kaWFsb2dfX2xvYWRlclwiPjwvZGl2PicpO1xuICAgICAgdGhpcy4kbm9kZS5wcmVwZW5kKHRoaXMuJGxvYWRlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1biBzb21lIGFjdGlvbnMgb24gJGxvYWRlciBlbGVtZW50XG4gICAqIEBwYXJhbSB7RGlhbG9nSGVscGVyfmxvYWRlcn0gZiBGdW5jdGlvbiB0byBydW4gb24gZWxlbWVudCwgYWNjZXB0cyAkbG9hZGVyIGFzIGEgcGFyYW1cbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIGxvYWRlcihmKSB7XG4gICAgdGhpcy5jcmVhdGVMb2FkZXIoKTtcbiAgICBmKHRoaXMuJGxvYWRlcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUnVucyBhamF4IHJlcXVlc3QgZm9yIHNvbWUgcG9wdXAgY29udGVudC5cbiAgICogU2hvd3MgbG9hZGVyIHdoaWxlIHJlcXVlc3QgaXMgcHJvY2Vzc2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gJGFqYXggUGxhaW5PYmplY3QgY29uZmlndXJhdGlvbiBmb3IgJC5hamF4IEBzZWUgaHR0cDovL2FwaS5qcXVlcnkuY29tL2pRdWVyeS5hamF4LyNqUXVlcnktYWpheC1zZXR0aW5nc1xuICAgKiBAcGFyYW0geyR8bnVsbH0gdGFyZ2V0IFdoZXJlIHRvIGluc2VydCByZXF1ZXN0ZWQgY29udGVudDogalF1ZXJ5ICRub2RlIG9yIG51bGwgZm9yIGRlZmF1bHQgYm9keS5cbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIGFqYXgoJGFqYXgsIHRhcmdldCA9IG51bGwpIHtcbiAgICAvLyBlbnN1cmUgbG9hZGVyIGlzIGNyZWF0ZWRcbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpO1xuICAgIC8vIHNob3cgbG9hZGVyIGFzIHdlIGFyZSBzdGFydGluZyByZXF1ZXN0IG5vd1xuICAgIHRoaXMuJGxvYWRlci5zaG93KCk7XG5cbiAgICBjb25zdCAkdGFyZ2V0ID0gdGFyZ2V0IGluc3RhbmNlb2YgJCA/IHRhcmdldCA6IHRoaXMuJGJvZHk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMsIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgJGFqYXguZGF0YVR5cGUgPSAkYWpheC5kYXRhVHlwZSB8fCAnaHRtbCc7XG5cbiAgICAkXG4gICAgICAuYWpheCgkYWpheClcbiAgICAgIC5mYWlsKChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgLy8gQHRvZG86IGRpc3BsYXkgZXJyb3Igc29tZWhvd1xuICAgICAgfSlcbiAgICAgIC5kb25lKChkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUikgPT4ge1xuICAgICAgICBsZXQgb2sgPSB0cnVlO1xuICAgICAgICBsZXQgYWpheERhdGEgPSBkYXRhO1xuICAgICAgICBjb25zdCBjaGFuZ2VEYXRhID0gKG5ld0RhdGEpID0+IHtcbiAgICAgICAgICBhamF4RGF0YSA9IG5ld0RhdGE7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25BamF4TG9hZENoYWluLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgb2sgPSBvayAmJiBmKGFqYXhEYXRhLCAkdGFyZ2V0LCB0aGlzLCBjaGFuZ2VEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvaykge1xuICAgICAgICAgIGNvbnN0ICRkYXRhID0gJChhamF4RGF0YSk7XG4gICAgICAgICAgJHRhcmdldC5hcHBlbmQoJGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGxvYWRlci5oaWRlKCk7XG4gICAgICB9KTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzLCBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBjYWxsYmFjayB0byBjaGFpbiBvbiBhamF4LlxuICAgKlxuICAgKiBAcGFyYW0gZlxuICAgKiBAcmV0dXJucyB7RGlhbG9nSGVscGVyfVxuICAgKi9cbiAgb25BamF4TG9hZChmKSB7XG4gICAgdGhpcy5vbkFqYXhMb2FkQ2hhaW4ucHVzaChmKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgY2FsbGJhY2sgdG8gY2hhaW4gb24gY2xvc2UuXG4gICAqXG4gICAqIEBwYXJhbSBmXG4gICAqIEByZXR1cm5zIHtEaWFsb2dIZWxwZXJ9XG4gICAqL1xuICBvbkNsb3NlKGYpIHtcbiAgICB0aGlzLm9uQ2xvc2VDaGFpbi5wdXNoKGYpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIHBvcHVwLlxuICAgKiBAcmV0dXJucyB7RGlhbG9nSGVscGVyfVxuICAgKi9cbiAgc2hvdygpIHtcbiAgICB0aGlzLiRub2RlLmRhdGEoJ2RpYWxvZ0hlbHBlckluc3RhbmNlJywgdGhpcyk7XG4gICAgdGhpcy4kbm9kZS5wb3B1cCgnc2hvdycpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBwb3B1cC5cbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIGhpZGUoKSB7XG4gICAgdGhpcy4kbm9kZS5wb3B1cCgnaGlkZScpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHBvcHVwIERPTSBub2RlLlxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy4kbm9kZSkge1xuICAgICAgY29uc3QgJHdyYXBwZXIgPSB0aGlzLiRub2RlLmNsb3Nlc3QoJy5wb3B1cF93cmFwcGVyJyk7XG4gICAgICBjb25zdCBpZCA9IHRoaXMuJG5vZGUuYXR0cignaWQnKTtcbiAgICAgIGNvbnN0ICRiYWNrZ3JvdW5kID0gJChgIyR7aWR9X2JhY2tncm91bmRgKTtcbiAgICAgICRiYWNrZ3JvdW5kLnJlbW92ZSgpO1xuICAgICAgJHdyYXBwZXIucmVtb3ZlKCk7XG5cbiAgICAgIGlmICh0aGlzLiRsb2FkZXIpIHtcbiAgICAgICAgdGhpcy4kbG9hZGVyLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuJHRpdGxlKSB7XG4gICAgICAgIHRoaXMuJHRpdGxlLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy4kYm9keS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuJG5vZGUucmVtb3ZlKCk7XG4gICAgICB0aGlzLnJlc2V0UGFyYW1zKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDYWxsYmFjayB1c2VkIGJ5IG5vZGUuXG4gICAqIEBjYWxsYmFjayBEaWFsb2dIZWxwZXJ+bm9kZVxuICAgKiBAcGFyYW0ge29iamVjdH0gJG5vZGVcbiAgICovXG4gIC8qKlxuICAgKiBDYWxsYmFjayB1c2VkIGJ5IGxvYWRlci5cbiAgICogQGNhbGxiYWNrIERpYWxvZ0hlbHBlcn5sb2FkZXJcbiAgICogQHBhcmFtIHtvYmplY3R9ICRsb2FkZXJcbiAgICovXG4gIC8qKlxuICAgKiBDYWxsYmFjayB1c2VkIGJ5IGJvZHkuXG4gICAqIEBjYWxsYmFjayBEaWFsb2dIZWxwZXJ+Ym9keVxuICAgKiBAcGFyYW0ge29iamVjdH0gJGJvZHlcbiAgICovXG59XG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZ0hlbHBlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL2NvcmUvZ2VuZXJhbC9EaWFsb2dIZWxwZXIuanNcbiAqKi8iLCJjbGFzcyBNb25zdGVyQmVtIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJhbXMoKTtcbiAgICB0aGlzLmJsb2NrQ2FsbGJhY2tzID0ge307XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBNb25zdGVyQmVtIHNldHRpbmdzLlxuICAgKiBVc2VzIE1vbnN0ZXJCZW1TZXR0aW5ncyB2YXJpYWJsZSBpZiBwcm92aWRlZCBvciBkZWZhdWx0IHZhbHVlcyBpbnN0ZWFkLlxuICAgKi9cbiAgcGFyYW1zKCkge1xuICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHdpbmRvdy5Nb25zdGVyQmVtU2V0dGluZ3MgfHwge307XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh1c2VyU2V0dGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICB9KTtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcy5ibG9ja0NhbGxiYWNrcykuZm9yRWFjaChibG9ja05hbWUgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLmJsb2NrQ2FsbGJhY2tzW2Jsb2NrTmFtZV07XG4gICAgICAkKGAuJHtibG9ja05hbWV9Lm0tanNgKS5lYWNoKGZ1bmN0aW9uIGl0ZXIoKSB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgY2FsbGJhY2suY2FsbCgkdGhpcywgYmxvY2tOYW1lKTtcbiAgICAgICAgJHRoaXNcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ20tanMnKVxuICAgICAgICAgIC5hZGRDbGFzcygnbS1qcy1pbml0aWFsaXplZCcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9uc3RlckJlbTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL2NvcmUvZ2VuZXJhbC9Nb25zdGVyQmVtLmpzXG4gKiovIiwiLyogQHJlcXVpcmVkIGpRdWVyeSAqL1xuLyoqXG4gKiBUaGlzIGlzIG1vZGlmaWVkIHZlcnNpb24gb2YganF1ZXJ5LWJlbSBhZGRpbmcgc29tZSBuZXcgZnVuY3Rpb25zXG4gKi9cblxuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZih0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICB9IGVsc2Uge1xuICAgIGZhY3Rvcnkocm9vdC5qUXVlcnkpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uKCQsIHVuZGVmaW5lZCkge1xuXG4gIC8qKlxuICAgKiBCYXNlIEJFTSBjbGFzcy5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBmdW5jdGlvbiBCRU0oY29uZmlnKSB7XG4gICAgdGhpcy5zZXRDb25maWcoY29uZmlnKTtcbiAgfTtcblxuICAvKipcbiAgICogU2V0IHRoZSBjb25maWcgZm9yIHRoZSBwbHVnaW5cbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAtIGRlZmF1bHRzIGluIGJyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbY29uZmlnLmVsZW1QcmVmaXhdIC0gRWxlbWVudCBwcmVmaXggKGRlZmF1bHQ6ICdfXycpXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbY29uZmlnLm1vZFByZWZpeF0gLSBNb2RpZmllciBwcmVmaXggKGRlZmF1bHQ6ICdfJylcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtjb25maWcubW9kRGxtdHJdIC0gTW9kaWZpZXIgZGVsaW1pdGVyIChkZWZhdWx0OiAnXycpXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbY29uZmlnLm5hbWVQYXR0ZXJuXSAtXG4gICAqICAgUGF0dGVybiB0byBtYXRjaCB2YWxpZCBibG9jayBuYW1lcyAoZGVmYXVsdDogJ1thLXpBLVowLTktXSsnKVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5zZXRDb25maWcgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9ICQuZXh0ZW5kKHt9LCB7XG4gICAgICBuYW1lUGF0dGVybjogJ1thLXpBLVowLTlcXFxcLV0rJyxcbiAgICAgIGVsZW1QcmVmaXg6ICdfXycsXG4gICAgICBtb2RQcmVmaXg6ICctLScsXG4gICAgICBtb2REbG10cjogJ18nLFxuICAgIH0sIGNvbmZpZyk7XG5cbiAgICB0aGlzLmJsb2NrQ2xhc3NSZSA9IHRoaXMuYnVpbGRCbG9ja0NsYXNzUmUoKTtcbiAgICB0aGlzLmVsZW1DbGFzc1JlID0gdGhpcy5idWlsZEVsZW1DbGFzc1JlKCk7XG4gICAgdGhpcy5tb2RDbGFzc1JlID0gdGhpcy5idWlsZE1vZENsYXNzUmUoKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHBhcmVudCBibG9jayBvZiBlbGVtZW50LlxuICAgKiBAcHVibGljXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmdldEJsb2NrID0gZnVuY3Rpb24oJHRoaXMpIHtcbiAgICB2YXIgYmxvY2tDbGFzcyA9IHRoaXMuZ2V0QmxvY2tDbGFzcygkdGhpcylcbiAgICAgICwgYmxvY2sgPSAkdGhpcy5jbG9zZXN0KCcuJyArIGJsb2NrQ2xhc3MpO1xuXG4gICAgYmxvY2suc2VsZWN0b3IgPSBibG9ja0NsYXNzO1xuICAgIHJldHVybiBibG9jaztcbiAgfTtcblxuICAvKipcbiAgICogU3dpdGNoIGJsb2NrIGNvbnRleHQuXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBibG9ja1xuICAgKiBAcGFyYW0ge1N0cmluZ30gW2VsZW1dXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuc3dpdGNoQmxvY2sgPSBmdW5jdGlvbigkdGhpcywgYmxvY2ssIGVsZW0pIHtcbiAgICB2YXIgZWxlbSA9IGVsZW0gfHwgbnVsbDtcblxuICAgIGVsZW1cbiAgICAgID8gJHRoaXMuc2VsZWN0b3IgPSB0aGlzLmJ1aWxkU2VsZWN0b3IoeyBibG9jazogYmxvY2ssIGVsZW06IGVsZW0gfSlcbiAgICAgIDogJHRoaXMuc2VsZWN0b3IgPSB0aGlzLmJ1aWxkU2VsZWN0b3IoeyBibG9jazogYmxvY2sgfSk7XG5cbiAgICByZXR1cm4gJHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbmQgZWxlbWVudCBpbiBibG9jay5cbiAgICogQHB1YmxpY1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICAkdGhpcyAgICBET00gZWxlbWVudFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBlbGVtS2V5ICBFbGVtZW50IG5hbWVcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5maW5kRWxlbSA9IGZ1bmN0aW9uKCR0aGlzLCBlbGVtS2V5KSB7XG4gICAgdmFyIGJsb2NrQ2xhc3MgPSB0aGlzLmdldEJsb2NrQ2xhc3MoJHRoaXMpXG4gICAgICAsIGVsZW1TZWxlY3RvciA9ICcuJyArIHRoaXMuYnVpbGRFbGVtQ2xhc3MoYmxvY2tDbGFzcywgZWxlbUtleSlcbiAgICAgICwgZWxlbSA9ICR0aGlzLmlzKGVsZW1TZWxlY3RvcikgPyAkdGhpcyA6ICR0aGlzLmZpbmQoZWxlbVNlbGVjdG9yKTtcblxuICAgIHJldHVybiBlbGVtO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdmFsdWUgb2YgbW9kaWZpZXIuXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtb2RLZXlcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5nZXRNb2QgPSBmdW5jdGlvbigkdGhpcywgbW9kS2V5KSB7XG4gICAgdmFyIG1vZHMgPSB0aGlzLmV4dHJhY3RNb2RzKCR0aGlzLmZpcnN0KCkpO1xuXG4gICAgaWYgKG1vZHNbbW9kS2V5XSAhPSB1bmRlZmluZWQpIHJldHVybiBtb2RzW21vZEtleV07XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIG1vZGlmaWVyIG9mIGVsZW1lbnQuXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtb2RLZXlcbiAgICogQHBhcmFtIHtTdHJpbmd9IFttb2RWYWxdXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmhhc01vZCA9IGZ1bmN0aW9uKCR0aGlzLCBtb2RLZXksIG1vZFZhbCkge1xuICAgIHZhciBtb2RzID0gdGhpcy5leHRyYWN0TW9kcygkdGhpcy5maXJzdCgpKTtcblxuICAgIGlmIChtb2RWYWwpIHtcbiAgICAgIGlmIChtb2RzW21vZEtleV0gPT0gbW9kVmFsKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAobW9kc1ttb2RLZXldKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCBtb2RpZmllciBvbiBlbGVtZW50LlxuICAgKiBAcHVibGljXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kS2V5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbbW9kVmFsXVxuICAgKiBAcGFyYW0ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuc2V0TW9kID0gZnVuY3Rpb24oJHRoaXMsIG1vZEtleSwgbW9kVmFsKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAsIHNlbGVjdG9yID0gJHRoaXMuc2VsZWN0b3I7XG5cbiAgICAkdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSAkKHRoaXMpO1xuICAgICAgY3VycmVudC5zZWxlY3RvciA9IHNlbGVjdG9yO1xuXG4gICAgICB2YXIgbW9kcyA9IHNlbGYuZXh0cmFjdE1vZHMoY3VycmVudClcbiAgICAgICAgLCBiYXNlTmFtZSA9IHNlbGYuZ2V0QmFzZUNsYXNzKGN1cnJlbnQpO1xuXG4gICAgICBpZiAobW9kc1ttb2RLZXldICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgb2xkTW9kTmFtZSA9IHNlbGYuYnVpbGRNb2RDbGFzcyhiYXNlTmFtZSwgbW9kS2V5LCBtb2RzW21vZEtleV0pO1xuICAgICAgICBjdXJyZW50LnJlbW92ZUNsYXNzKG9sZE1vZE5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobW9kVmFsICE9PSBmYWxzZSkge1xuICAgICAgICB2YXIgbmV3TW9kTmFtZSA9IHNlbGYuYnVpbGRNb2RDbGFzcyhiYXNlTmFtZSwgbW9kS2V5LCBtb2RWYWwpO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50XG4gICAgICAgIC5hZGRDbGFzcyhuZXdNb2ROYW1lKVxuICAgICAgICAudHJpZ2dlcignc2V0bW9kJywgW21vZEtleSwgbW9kVmFsXSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gJHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBtb2RpZmllciBvbiBlbGVtZW50LlxuICAgKiBAcHVibGljXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kS2V5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbbW9kVmFsXVxuICAgKiBAcGFyYW0ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuZGVsTW9kID0gZnVuY3Rpb24oJHRoaXMsIG1vZEtleSwgbW9kVmFsKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAsIHNlbGVjdG9yID0gJHRoaXMuc2VsZWN0b3I7XG5cbiAgICAkdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSAkKHRoaXMpO1xuICAgICAgY3VycmVudC5zZWxlY3RvciA9IHNlbGVjdG9yO1xuXG4gICAgICB2YXIgbW9kcyA9IHNlbGYuZXh0cmFjdE1vZHMoY3VycmVudClcbiAgICAgICAgLCBiYXNlTmFtZSA9IHNlbGYuZ2V0QmFzZUNsYXNzKGN1cnJlbnQpO1xuXG4gICAgICBpZiAobW9kVmFsKSB7XG4gICAgICAgIGlmIChtb2RzW21vZEtleV0gPT0gbW9kVmFsKSB7XG4gICAgICAgICAgdmFyIG1vZE5hbWUgPSBzZWxmLmJ1aWxkTW9kQ2xhc3MoYmFzZU5hbWUsIG1vZEtleSwgbW9kc1ttb2RLZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBtb2ROYW1lID0gc2VsZi5idWlsZE1vZENsYXNzKGJhc2VOYW1lLCBtb2RLZXksIG1vZHNbbW9kS2V5XSk7XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRcbiAgICAgICAgLnJlbW92ZUNsYXNzKG1vZE5hbWUpXG4gICAgICAgIC50cmlnZ2VyKCdkZWxtb2QnLCBbbW9kS2V5LCBtb2RWYWxdKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAkdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRmlsdGVyaW5nIGVsZW1lbnRzIGJ5IG1vZGlmaWVyLlxuICAgKiBAcHVibGljXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kS2V5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbbW9kVmFsXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbnZlcnNlXVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmJ5TW9kID0gZnVuY3Rpb24oJHRoaXMsIG1vZEtleSwgbW9kVmFsLCBpbnZlcnNlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAsIG1vZFZhbCA9IG1vZFZhbCB8fCBudWxsXG4gICAgICAsIGludmVyc2UgPSBpbnZlcnNlIHx8IGZhbHNlXG4gICAgICAsIHNlbGVjdG9yID0gJHRoaXMuc2VsZWN0b3JcbiAgICAgICwgcmVzdWx0ID0gJCgpO1xuXG4gICAgJHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjdXJyZW50ID0gJCh0aGlzKTtcbiAgICAgIGN1cnJlbnQuc2VsZWN0b3IgPSBzZWxlY3RvcjtcblxuICAgICAgdmFyIG1vZHMgPSBzZWxmLmV4dHJhY3RNb2RzKGN1cnJlbnQpXG4gICAgICAgICwgYmFzZU5hbWUgPSBzZWxmLmdldEJhc2VDbGFzcyhjdXJyZW50KTtcblxuICAgICAgaWYgKG1vZFZhbCkge1xuICAgICAgICBpZiAobW9kc1ttb2RLZXldID09IG1vZFZhbCkge1xuICAgICAgICAgIHZhciBtb2ROYW1lID0gc2VsZi5idWlsZE1vZENsYXNzKGJhc2VOYW1lLCBtb2RLZXksIG1vZHNbbW9kS2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAobW9kc1ttb2RLZXldICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBtb2ROYW1lID0gc2VsZi5idWlsZE1vZENsYXNzKGJhc2VOYW1lLCBtb2RLZXksIG1vZHNbbW9kS2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzdWx0ID0gcmVzdWx0LmFkZChpbnZlcnNlXG4gICAgICAgID8gY3VycmVudC5ub3QoJy4nICsgbW9kTmFtZSlcbiAgICAgICAgOiBjdXJyZW50LmZpbHRlcignLicgKyBtb2ROYW1lKSk7XG4gICAgfSk7XG5cbiAgICByZXN1bHQuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYmxvY2sgbmFtZXMgZnJvbSBlbGVtZW50LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gJHRoaXNcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5leHRyYWN0QmxvY2tzID0gZnVuY3Rpb24oJHRoaXMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsIHJlc3VsdCA9IFtdXG4gICAgICAsIHNlbGVjdG9ycyA9IHRoaXMuZ2V0Q2xhc3NlcygkdGhpcyk7XG5cbiAgICAkLmVhY2goc2VsZWN0b3JzLCBmdW5jdGlvbihpLCBzZWwpIHtcbiAgICAgIHZhciB0eXBlID0gc2VsZi5nZXRDbGFzc1R5cGUoc2VsKTtcblxuICAgICAgaWYgKHR5cGUgPT0gJ2Jsb2NrJykge1xuICAgICAgICByZXN1bHQucHVzaChzZWwpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwZSA9PSAnZWxlbScpIHtcbiAgICAgICAgdmFyIGVsZW0gPSBzZWwuc3BsaXQoc2VsZi5jb25maWcuZWxlbVByZWZpeCk7XG4gICAgICAgIHJlc3VsdC5wdXNoKGVsZW1bMF0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGVsZW1lbnQgbmFtZXMgZnJvbSBlbGVtZW50LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmV4dHJhY3RFbGVtcyA9IGZ1bmN0aW9uKCR0aGlzKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLCByZXN1bHQgPSBbXTtcblxuICAgICQuZWFjaChzZWxmLmdldENsYXNzZXMoJHRoaXMpLCBmdW5jdGlvbihpLCBjbGFzc05hbWUpIHtcbiAgICAgIGlmIChzZWxmLmdldENsYXNzVHlwZShjbGFzc05hbWUpID09ICdlbGVtJykge1xuICAgICAgICB2YXIgZWxlbU5hbWUgPSBjbGFzc05hbWUuc3BsaXQoc2VsZi5jb25maWcuZWxlbVByZWZpeCk7XG4gICAgICAgIHJlc3VsdC5wdXNoKGVsZW1OYW1lWzFdKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBtb2RpZmllcnMgZnJvbSBlbGVtZW50LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmV4dHJhY3RNb2RzID0gZnVuY3Rpb24oJHRoaXMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsIHJlc3VsdCA9IHt9O1xuXG4gICAgJHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG5cbiAgICAgICQuZWFjaChzZWxmLmdldENsYXNzZXMoJHRoaXMpLCBmdW5jdGlvbihpLCBjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKHNlbGYuZ2V0Q2xhc3NUeXBlKGNsYXNzTmFtZSkgPT0gJ21vZCcpIHtcbiAgICAgICAgICB2YXIgcmUgPSBzZWxmLmJ1aWxkTW9kQ2xhc3NSZSgpLmV4ZWMoY2xhc3NOYW1lKTtcbiAgICAgICAgICB2YXIgbW9kTmFtZSA9IHJlWzFdLnNwbGl0KHNlbGYuY29uZmlnLm1vZERsbXRyKTtcblxuICAgICAgICAgIGlmIChtb2ROYW1lWzFdICE9PSB1bmRlZmluZWQgJiYgbW9kTmFtZVsxXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciBtb2RWYWwgPSBtb2ROYW1lWzFdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbW9kVmFsID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXN1bHRbIG1vZE5hbWVbMF0gXSA9IG1vZFZhbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgY2xhc3NlcyBuYW1lcyBmcm9tIGVsZW1lbnQuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuZ2V0Q2xhc3NlcyA9IGZ1bmN0aW9uKCR0aGlzKSB7XG4gICAgdmFyIGNsYXNzZXMsIHJlc3VsdCA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiAkdGhpcyA9PSAnb2JqZWN0Jykge1xuXG4gICAgICBpZiAoJHRoaXMuc2VsZWN0b3IuaW5kZXhPZignLicpID09PSAwKSB7XG4gICAgICAgIGNsYXNzZXMgPSAkdGhpcy5zZWxlY3Rvci5zcGxpdCgnLicpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoJHRoaXMuYXR0cignY2xhc3MnKSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2xhc3NlcyA9ICR0aGlzLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNsYXNzZXMgPSAkdGhpcy5zcGxpdCgnLicpO1xuICAgIH1cblxuICAgICQuZWFjaChjbGFzc2VzLCBmdW5jdGlvbihpLCBjbGFzc05hbWUpIHtcbiAgICAgIGlmIChjbGFzc05hbWUgIT0gJycpIHJlc3VsdC5wdXNoKCQudHJpbShjbGFzc05hbWUpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHJlZ2V4cCBmb3IgYmxvY2tzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEByZXR1cm4ge1JlZ0V4cH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuYnVpbGRCbG9ja0NsYXNzUmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICAgICdeKCcgKyB0aGlzLmNvbmZpZy5uYW1lUGF0dGVybiArICcpJCdcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCdWlsZCByZWdleHAgZm9yIGVsZW1lbnRzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEByZXR1cm4ge1JlZ0V4cH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuYnVpbGRFbGVtQ2xhc3NSZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgJ14nICsgdGhpcy5jb25maWcubmFtZVBhdHRlcm4gKyB0aGlzLmNvbmZpZy5lbGVtUHJlZml4ICsgJygnICsgdGhpcy5jb25maWcubmFtZVBhdHRlcm4gKyAnKSQnXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogQnVpbGQgcmVnZXhwIGZvciBtb2RpZmllcnMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHJldHVybiB7UmVnRXhwfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5idWlsZE1vZENsYXNzUmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICAgICdeKD86JyArIHRoaXMuY29uZmlnLm5hbWVQYXR0ZXJuICsgJ3wnICsgdGhpcy5jb25maWcubmFtZVBhdHRlcm4gKyB0aGlzLmNvbmZpZy5lbGVtUHJlZml4ICsgdGhpcy5jb25maWcubmFtZVBhdHRlcm4gKyAnKScgKyB0aGlzLmNvbmZpZy5tb2RQcmVmaXggKyAnKCcgKyB0aGlzLmNvbmZpZy5uYW1lUGF0dGVybiArICcoKCcgKyB0aGlzLmNvbmZpZy5tb2REbG10ciArIHRoaXMuY29uZmlnLm5hbWVQYXR0ZXJuICsgJykkfCQpKSdcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCdWlsZCBjbGFzcyBuYW1lIGZvciBibG9jay5cbiAgICogQHByb3RlY3RlZFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gYmxvY2tOYW1lXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuYnVpbGRCbG9ja0NsYXNzID0gZnVuY3Rpb24oYmxvY2tOYW1lKSB7XG4gICAgcmV0dXJuIGJsb2NrTmFtZTtcbiAgfTtcblxuICAvKipcbiAgICogQnVpbGQgY2xhc3MgbmFtZSBmb3IgZWxlbWVudC5cbiAgICogQHByb3RlY3RlZFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gYmxvY2tOYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbGVtS2V5XG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuYnVpbGRFbGVtQ2xhc3MgPSBmdW5jdGlvbihibG9ja05hbWUsIGVsZW1LZXkpIHtcbiAgICByZXR1cm4gYmxvY2tOYW1lICsgdGhpcy5jb25maWcuZWxlbVByZWZpeCArIGVsZW1LZXk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGNsYXNzIG5hbWUgZm9yIG1vZGlmaWVyLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBibG9ja05hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1vZEtleVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kVmFsXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuYnVpbGRNb2RDbGFzcyA9IGZ1bmN0aW9uKGJhc2VDbGFzcywgbW9kS2V5LCBtb2RWYWwpIHtcbiAgICBpZiAobW9kVmFsICE9PSB1bmRlZmluZWQgJiYgbW9kVmFsICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gYmFzZUNsYXNzICsgdGhpcy5jb25maWcubW9kUHJlZml4ICsgbW9kS2V5ICsgdGhpcy5jb25maWcubW9kRGxtdHIgKyBtb2RWYWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBiYXNlQ2xhc3MgKyB0aGlzLmNvbmZpZy5tb2RQcmVmaXggKyBtb2RLZXk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBCdWlsZCBzZWxlY3RvciBmcm9tIG9iamVjdCBvciBzdHJpbmcuXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH1cbiAgICogQHBhcmFtIHtTdHJpbmd9XG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuYnVpbGRTZWxlY3RvciA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBwcmVmaXgpIHtcbiAgICBpZiAocHJlZml4ICE9PSAnJykge1xuICAgICAgdmFyIHByZWZpeCA9IHByZWZpeCB8fCAnLic7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHNlbGVjdG9yLmJsb2NrICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgYnVpbGRTZWxlY3RvciA9IHRoaXMuYnVpbGRCbG9ja0NsYXNzKHNlbGVjdG9yLmJsb2NrKTtcblxuICAgICAgICBpZiAoc2VsZWN0b3IuZWxlbSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBidWlsZFNlbGVjdG9yID0gdGhpcy5idWlsZEVsZW1DbGFzcyhidWlsZFNlbGVjdG9yLCBzZWxlY3Rvci5lbGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3Rvci5tb2QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIG1vZCA9IHNlbGVjdG9yLm1vZC5zcGxpdCgnOicpO1xuICAgICAgICAgIGJ1aWxkU2VsZWN0b3IgPSB0aGlzLmJ1aWxkTW9kQ2xhc3MoYnVpbGRTZWxlY3RvciwgbW9kWzBdLCBtb2RbMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1aWxkU2VsZWN0b3IgIT0gdW5kZWZpbmVkXG4gICAgICA/IHByZWZpeCArIGJ1aWxkU2VsZWN0b3JcbiAgICAgIDogcHJlZml4ICsgc2VsZWN0b3I7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGNsYXNzIG5hbWUgZm9yIGJsb2NrLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gJHRoaXNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtpbmRleF1cbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5nZXRCbG9ja0NsYXNzID0gZnVuY3Rpb24oJHRoaXMsIGluZGV4KSB7XG4gICAgdmFyIGJsb2NrQ2xhc3NlcyA9IHRoaXMuZXh0cmFjdEJsb2NrcygkdGhpcyk7XG4gICAgdmFyIGluZGV4ID0gaW5kZXggfHwgMDtcblxuICAgIHJldHVybiBpbmRleCA8PSBibG9ja0NsYXNzZXMubGVuZ3RoIC0gMVxuICAgICAgPyBibG9ja0NsYXNzZXNbaW5kZXhdXG4gICAgICA6IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBiYXNlIGNsYXNzIGZyb20gZWxlbWVudC5cbiAgICogQHByb3RlY3RlZFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRoaXNcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5nZXRCYXNlQ2xhc3MgPSBmdW5jdGlvbigkdGhpcykge1xuICAgIHZhciBzZWxmID0gdGhpcywgYmFzZUNsYXNzID0gbnVsbDtcbiAgICB2YXIgc2VsZWN0b3JzID0gdGhpcy5nZXRDbGFzc2VzKCR0aGlzKTtcblxuICAgICQuZWFjaChzZWxlY3RvcnMsIGZ1bmN0aW9uKGksIHNlbCkge1xuICAgICAgdmFyIGNsYXNzVHlwZSA9IHNlbGYuZ2V0Q2xhc3NUeXBlKHNlbCk7XG5cbiAgICAgIGlmIChjbGFzc1R5cGUgJiYgY2xhc3NUeXBlICE9ICdtb2QnKSB7XG4gICAgICAgIGJhc2VDbGFzcyA9IHNlbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBiYXNlQ2xhc3M7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBjbGFzcyB0eXBlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5nZXRDbGFzc1R5cGUgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgICBpZiAodGhpcy5tb2RDbGFzc1JlLnRlc3QoY2xhc3NOYW1lKSkge1xuICAgICAgcmV0dXJuICdtb2QnO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmVsZW1DbGFzc1JlLnRlc3QoY2xhc3NOYW1lKSkge1xuICAgICAgcmV0dXJuICdlbGVtJztcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5ibG9ja0NsYXNzUmUudGVzdChjbGFzc05hbWUpKSB7XG4gICAgICByZXR1cm4gJ2Jsb2NrJztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBCRU0gaW5zdGFuY2UuXG4gICAqL1xuICAkLkJFTSA9IG5ldyBCRU0oKTtcblxuICAvKipcbiAgICogRXh0ZW5kIGpRdWVyeSBvYmplY3QuXG4gICAqL1xuICAkLmZuLmV4dGVuZCh7XG4gICAgYmxvY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICQuQkVNLmdldEJsb2NrKHRoaXMpO1xuICAgIH0sXG5cbiAgICBleHRyYWN0QmxvY2tzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkLkJFTS5leHRyYWN0QmxvY2tzKHRoaXMpO1xuICAgIH0sXG5cbiAgICBpc0JlbUJsb2NrOiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLmF0dHIoJ2NsYXNzJykuc3BsaXQoJyAnKTtcbiAgICAgIGxldCBpc0Jsb2NrID0gZmFsc2U7XG4gICAgICBjbGFzc2VzLmZvckVhY2goY2xhc3NOYW1lID0+IHtcbiAgICAgICAgaWYgKCQuQkVNLmdldENsYXNzVHlwZShjbGFzc05hbWUpID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgaXNCbG9jayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGlzQmxvY2s7XG4gICAgfSxcblxuICAgIGJsb2NrU2V0dGluZ3M6IGZ1bmN0aW9uIChkZWZhdWx0U2V0dGluZ3MpIHtcbiAgICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHRoaXMuZGF0YSgnbUJlbVNldHRpbmdzJykgfHwge307XG4gICAgICBjb25zdCBzZXR0aW5ncyA9IGRlZmF1bHRTZXR0aW5ncyB8fCB7fTtcbiAgICAgIE9iamVjdC5rZXlzKHVzZXJTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBzZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzZXR0aW5ncztcbiAgICB9LFxuXG4gICAgZWxlbTogZnVuY3Rpb24oY3R4LCBlbGVtS2V5KSB7XG4gICAgICBpZiAoIWVsZW1LZXkpIHtcbiAgICAgICAgZWxlbUtleSA9IGN0eDtcbiAgICAgICAgY3R4ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICQuQkVNLmZpbmRFbGVtKGN0eCB8fCB0aGlzLCBlbGVtS2V5KTtcbiAgICB9LFxuXG4gICAgY3R4OiBmdW5jdGlvbihibG9jaywgZWxlbSkge1xuICAgICAgcmV0dXJuICQuQkVNLnN3aXRjaEJsb2NrKHRoaXMsIGJsb2NrLCBlbGVtKTtcbiAgICB9LFxuXG4gICAgbW9kOiBmdW5jdGlvbihtb2RLZXksIG1vZFZhbCkge1xuICAgICAgaWYgKHR5cGVvZiBtb2RWYWwgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbW9kVmFsID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKG1vZFZhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuICQuQkVNLmRlbE1vZCh0aGlzLCBtb2RLZXkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKG1vZFZhbCAhPSBudWxsKVxuICAgICAgICA/ICQuQkVNLnNldE1vZCh0aGlzLCBtb2RLZXksIG1vZFZhbClcbiAgICAgICAgOiAkLkJFTS5nZXRNb2QodGhpcywgbW9kS2V5KTtcbiAgICB9LFxuXG4gICAgc2V0TW9kOiBmdW5jdGlvbihtb2RLZXksIG1vZFZhbCkge1xuICAgICAgcmV0dXJuICQuQkVNLnNldE1vZCh0aGlzLCBtb2RLZXksIG1vZFZhbCk7XG4gICAgfSxcblxuICAgIGRlbE1vZDogZnVuY3Rpb24obW9kS2V5LCBtb2RWYWwpIHtcbiAgICAgIHJldHVybiAkLkJFTS5kZWxNb2QodGhpcywgbW9kS2V5LCBtb2RWYWwpO1xuICAgIH0sXG5cbiAgICBoYXNNb2Q6IGZ1bmN0aW9uKG1vZEtleSwgbW9kVmFsKSB7XG4gICAgICByZXR1cm4gJC5CRU0uaGFzTW9kKHRoaXMsIG1vZEtleSwgbW9kVmFsKTtcbiAgICB9LFxuXG4gICAgYnlNb2Q6IGZ1bmN0aW9uKG1vZEtleSwgbW9kVmFsKSB7XG4gICAgICByZXR1cm4gJC5CRU0uYnlNb2QodGhpcywgbW9kS2V5LCBtb2RWYWwpO1xuICAgIH0sXG5cbiAgICBieU5vdE1vZDogZnVuY3Rpb24obW9kS2V5LCBtb2RWYWwpIHtcbiAgICAgIHJldHVybiAkLkJFTS5ieU1vZCh0aGlzLCBtb2RLZXksIG1vZFZhbCwgJ2ludmVyc2UnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGJsb2NrcydzIG9yIGVsZW0ncyBtb2RpZmllciBgbW9kS2V5YCBiZXR3ZWVuIGBtb2RWYWwxYCBhbmQgYG1vZFZhbDJgXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1vZEtleVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtb2RWYWwxXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1vZFZhbDJcbiAgICAgKiBAcmV0dXJuIHsqfVxuICAgICAqL1xuICAgIHRvZ2dsZU1vZDogZnVuY3Rpb24gKG1vZEtleSwgbW9kVmFsMSwgbW9kVmFsMikge1xuICAgICAgaWYgKHRoaXMuaGFzTW9kKG1vZEtleSwgbW9kVmFsMSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgICAgIC5kZWxNb2QobW9kS2V5LCBtb2RWYWwxKVxuICAgICAgICAgICAgLnNldE1vZChtb2RLZXksIG1vZFZhbDIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgICAgIC5kZWxNb2QobW9kS2V5LCBtb2RWYWwyKVxuICAgICAgICAgICAgLnNldE1vZChtb2RLZXksIG1vZFZhbDEpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbn0pKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL2NvcmUvbGlicy9qcXVlcnkuYmVtLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL2NvcmUvYnVuZGxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwialF1ZXJ5XCJcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==