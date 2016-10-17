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
	
	      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
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
	      var tablet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
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
	      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
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
	
	      var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
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
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
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
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGMzZjQzNDk0NWI5NWFkMTk1ODM/MmRiOSIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvY29yZS9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL2NvcmUvZ2VuZXJhbC9EaWFsb2dIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL2NvcmUvZ2VuZXJhbC9Nb25zdGVyQmVtLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS9jb3JlL2xpYnMvanF1ZXJ5LmJlbS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvY29yZS9idW5kbGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbIiQiLCJCRU0iLCJzZXRDb25maWciLCJuYW1lUGF0dGVybiIsImVsZW1QcmVmaXgiLCJtb2RQcmVmaXgiLCJtb2REbG10ciIsIndpbmRvdyIsIk1vbnN0ZXJCZW0iLCJEaWFsb2dIZWxwZXIiLCJ1cGRhdGUiLCJvcHRpb25zIiwicmVzZXRQYXJhbXMiLCIkbm9kZSIsIm5ld09wdGlvbnMiLCJleHRlbmQiLCJwYWdlY29udGFpbmVyIiwiY2xvc2V0cmFuc2l0aW9uZW5kIiwib25DbG9zZUNoYWluIiwiZm9yRWFjaCIsImYiLCJhdXRvRGVzdHJveU9uQ2xvc2UiLCJkZXN0cm95IiwicG9wdXAiLCIkYm9keSIsImFwcGVuZCIsImNsb3Nlc3QiLCJhZGRDbGFzcyIsIm9uQWpheExvYWRDaGFpbiIsIiRsb2FkZXIiLCIkdGl0bGUiLCIkY2xvc2VCdXR0b24iLCJlbmFibGVkIiwicHJlcGVuZCIsImNsaWNrIiwicmVtb3ZlIiwidGFibGV0IiwiaXMiLCJtb2JpbGUiLCJjbG9zZUJ1dHRvbiIsInZhbHVlIiwidGl0bGUiLCJwcmVwZW5kVG8iLCJodG1sIiwiZW1wdHkiLCJjcmVhdGVMb2FkZXIiLCIkYWpheCIsInRhcmdldCIsInNob3ciLCIkdGFyZ2V0IiwiZGF0YVR5cGUiLCJhamF4IiwiZmFpbCIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiZG9uZSIsImRhdGEiLCJvayIsImFqYXhEYXRhIiwiY2hhbmdlRGF0YSIsIm5ld0RhdGEiLCIkZGF0YSIsImhpZGUiLCJwdXNoIiwiJHdyYXBwZXIiLCJpZCIsImF0dHIiLCIkYmFja2dyb3VuZCIsImRpYWxvZyIsIm5vZGUiLCJtb2QiLCJwYXJhbXMiLCJibG9ja0NhbGxiYWNrcyIsInVzZXJTZXR0aW5ncyIsIk1vbnN0ZXJCZW1TZXR0aW5ncyIsInNldHRpbmdzIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImNhbGxiYWNrIiwiYmxvY2tOYW1lIiwiZWFjaCIsIml0ZXIiLCIkdGhpcyIsImNhbGwiLCJyZW1vdmVDbGFzcyIsInJvb3QiLCJmYWN0b3J5IiwiZGVmaW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJqUXVlcnkiLCJ1bmRlZmluZWQiLCJjb25maWciLCJwcm90b3R5cGUiLCJibG9ja0NsYXNzUmUiLCJidWlsZEJsb2NrQ2xhc3NSZSIsImVsZW1DbGFzc1JlIiwiYnVpbGRFbGVtQ2xhc3NSZSIsIm1vZENsYXNzUmUiLCJidWlsZE1vZENsYXNzUmUiLCJnZXRCbG9jayIsImJsb2NrQ2xhc3MiLCJnZXRCbG9ja0NsYXNzIiwiYmxvY2siLCJzZWxlY3RvciIsInN3aXRjaEJsb2NrIiwiZWxlbSIsImJ1aWxkU2VsZWN0b3IiLCJmaW5kRWxlbSIsImVsZW1LZXkiLCJlbGVtU2VsZWN0b3IiLCJidWlsZEVsZW1DbGFzcyIsImZpbmQiLCJnZXRNb2QiLCJtb2RLZXkiLCJtb2RzIiwiZXh0cmFjdE1vZHMiLCJmaXJzdCIsImhhc01vZCIsIm1vZFZhbCIsInNldE1vZCIsInNlbGYiLCJjdXJyZW50IiwiYmFzZU5hbWUiLCJnZXRCYXNlQ2xhc3MiLCJvbGRNb2ROYW1lIiwiYnVpbGRNb2RDbGFzcyIsIm5ld01vZE5hbWUiLCJ0cmlnZ2VyIiwiZGVsTW9kIiwibW9kTmFtZSIsImJ5TW9kIiwiaW52ZXJzZSIsInJlc3VsdCIsImFkZCIsIm5vdCIsImZpbHRlciIsImV4dHJhY3RCbG9ja3MiLCJzZWxlY3RvcnMiLCJnZXRDbGFzc2VzIiwiaSIsInNlbCIsInR5cGUiLCJnZXRDbGFzc1R5cGUiLCJzcGxpdCIsImV4dHJhY3RFbGVtcyIsImNsYXNzTmFtZSIsImVsZW1OYW1lIiwicmUiLCJleGVjIiwiY2xhc3NlcyIsImluZGV4T2YiLCJ0cmltIiwiUmVnRXhwIiwiYnVpbGRCbG9ja0NsYXNzIiwiYmFzZUNsYXNzIiwicHJlZml4IiwiaW5kZXgiLCJibG9ja0NsYXNzZXMiLCJsZW5ndGgiLCJjbGFzc1R5cGUiLCJ0ZXN0IiwiZm4iLCJpc0JlbUJsb2NrIiwiaXNCbG9jayIsImJsb2NrU2V0dGluZ3MiLCJkZWZhdWx0U2V0dGluZ3MiLCJjdHgiLCJieU5vdE1vZCIsInRvZ2dsZU1vZCIsIm1vZFZhbDEiLCJtb2RWYWwyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3RDQTs7QUFNQTs7QUFXQTs7OztBQUdBOzs7Ozs7QUFaQTtBQUNBQSxHQUFFQyxHQUFGLENBQU1DLFNBQU4sQ0FBZ0I7QUFDZEMsZ0JBQWEsaUJBREM7QUFFZEMsZUFBWSxJQUZFO0FBR2RDLGNBQVcsR0FIRztBQUlkQyxhQUFVO0FBSkks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QkssTUFBakIsRUFBeUI7QUFDOUIsY0FBTzFILEVBQUVDLEdBQUYsQ0FBTXFJLEtBQU4sQ0FBWSxJQUFaLEVBQWtCakIsTUFBbEIsRUFBMEJLLE1BQTFCLENBQVA7QUFDRCxNQXRFUzs7QUF3RVZpRCxlQUFVLGtCQUFTdEQsTUFBVCxFQUFpQkssTUFBakIsRUFBeUI7QUFDakMsY0FBTzFILEVBQUVDLEdBQUYsQ0FBTXFJLEtBQU4sQ0FBWSxJQUFaLEVBQWtCakIsTUFBbEIsRUFBMEJLLE1BQTFCLEVBQWtDLFNBQWxDLENBQVA7QUFDRCxNQTFFUzs7QUE0RVY7Ozs7Ozs7QUFPQWtELGdCQUFXLG1CQUFVdkQsTUFBVixFQUFrQndELE9BQWxCLEVBQTJCQyxPQUEzQixFQUFvQztBQUM3QyxXQUFJLEtBQUtyRCxNQUFMLENBQVlKLE1BQVosRUFBb0J3RCxPQUFwQixDQUFKLEVBQWtDO0FBQ2hDLGdCQUFPLEtBQ0Z6QyxNQURFLENBQ0tmLE1BREwsRUFDYXdELE9BRGIsRUFFRmxELE1BRkUsQ0FFS04sTUFGTCxFQUVheUQsT0FGYixDQUFQO0FBR0QsUUFKRCxNQUlPO0FBQ0wsZ0JBQU8sS0FDRjFDLE1BREUsQ0FDS2YsTUFETCxFQUNheUQsT0FEYixFQUVGbkQsTUFGRSxDQUVLTixNQUZMLEVBRWF3RCxPQUZiLENBQVA7QUFHRDtBQUNGO0FBN0ZTLElBQVo7QUFnR0QsRUFybkJBLENBQUQsQzs7Ozs7OztBQ0xBLDBDOzs7Ozs7O0FDQUEseUIiLCJmaWxlIjoiY29yZS9zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA4YzNmNDM0OTQ1Yjk1YWQxOTU4M1xuICoqLyIsImltcG9ydCAnLi9idW5kbGUuY3NzJztcbi8qXG4gVGhpcyBidW5kbGUgaXMgaW5jbHVkZWQgaW50byBldmVyeSBwYWdlXG4gKi9cblxuLy8gRG9jdW1lbnRhdGlvbiBpcyBsb2NhdGVkIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS96ZW53YWxrZXIvanF1ZXJ5LWJlbSNqcXVlcnliZW1cbmltcG9ydCAnLi9saWJzL2pxdWVyeS5iZW0nO1xuXG4vLyBSZWNvbmZpZ3VyZSBCRU0gbmFtaW5nXG4kLkJFTS5zZXRDb25maWcoe1xuICBuYW1lUGF0dGVybjogJ1thLXpBLVowLTlcXFxcLV0rJyxcbiAgZWxlbVByZWZpeDogJ19fJyxcbiAgbW9kUHJlZml4OiAnXycsXG4gIG1vZERsbXRyOiAnXycsXG59KTtcblxuXG5pbXBvcnQgTW9uc3RlckJlbSBmcm9tICcuL2dlbmVyYWwvTW9uc3RlckJlbSc7XG53aW5kb3cuTW9uc3RlckJlbSA9IG5ldyBNb25zdGVyQmVtKCk7XG5cbmltcG9ydCBEaWFsb2dIZWxwZXIgZnJvbSAnLi9nZW5lcmFsL0RpYWxvZ0hlbHBlcic7XG53aW5kb3cuRGlhbG9nSGVscGVyID0gRGlhbG9nSGVscGVyO1xuXG4vKiBnbG9iYWwgJCAqL1xuJCgoKSA9PiB7XG4gIHdpbmRvdy5Nb25zdGVyQmVtLnVwZGF0ZSgpO1xufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS9jb3JlL2J1bmRsZS5qc1xuICoqLyIsIi8qKlxuICogRGlhbG9nIGhlbHBlciBjbGFzcyBmb3IgdXNlIHdpdGgganF1ZXJ5LXBvcHVwLW92ZXJsYXkuXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIGQgPSBEaWFsb2dIZWxwZXJcbiAqICAgLmJ1aWxkZXJEaWFsb2coKVxuICogICAuaHRtbChcIkhBTE9cIilcbiAqICAgLmF1dG9EZXN0cm95KClcbiAqICAgLnNob3coKTtcbiAqIGBgYFxuICpcbiAqIEFub3RoZXIgc2ltcGxlIHVzYWdlOlxuICogYGBgXG4gKiB3aW5kb3cuRGlhbG9nSGVscGVyXG4gKiAgIC5idWlsZGVyRGlhbG9nKClcbiAqICAgLm9uQWpheExvYWQoKGRhdGEsICR0YXJnZXQsIGRpYWxvZywgZGF0YUNoYW5nZXIpID0+IHtcbiAqICAgICAgIGRhdGFDaGFuZ2VyKGRhdGEgPyAnPGRpdj5PSzwvZGl2PicgOiAnPGRpdj5FcnJvcjwvZGl2PicpO1xuICogICAgICAgcmV0dXJuIHRydWU7XG4gKiAgICAgfSlcbiAqICAgLmFqYXgoe1xuICogICAgIHVybDogJy9tb25zdGVyL2J1bmRsZXMvY2xlYXItY2FjaGUnLFxuICogICAgIG1ldGhvZDogJ1BPU1QnLFxuICogICAgIGRhdGFUeXBlOiAnanNvbicsIC8vIHRydWUgb3IgZmFsc2UgaXMgcmV0dXJuZWRcbiAqICAgfSlcbiAqICAgLmF1dG9EZXN0cm95KClcbiAqICAgLnNob3coKTtcbiAqIGBgYFxuICovXG5jbGFzcyBEaWFsb2dIZWxwZXIge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IuXG4gICAqIEluaXRpYWxpemVzIGJhc2UgcHJvcGVydGllcyBhbmQgY3JlYXRlcyBET00gbm9kZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLnJlc2V0UGFyYW1zKCk7XG4gICAgdGhpcy4kbm9kZSA9ICQoJzxkaXYgY2xhc3M9XCJtb25zdGVyLWRpYWxvZ1wiPjwvZGl2PicpO1xuICAgIGNvbnN0IG5ld09wdGlvbnMgPSAkLmV4dGVuZChcbiAgICAgIHtcbiAgICAgICAgcGFnZWNvbnRhaW5lcjogJy5tLXdyYXBwZXInLFxuICAgICAgICBjbG9zZXRyYW5zaXRpb25lbmQ6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uQ2xvc2VDaGFpbi5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgZigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICh0aGlzLmF1dG9EZXN0cm95T25DbG9zZSkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuICAgIHRoaXMuJG5vZGUucG9wdXAobmV3T3B0aW9ucyk7XG4gICAgdGhpcy4kYm9keSA9ICQoJzxkaXYgY2xhc3M9XCJtb25zdGVyLWRpYWxvZ19fYm9keVwiPjwvZGl2PicpO1xuICAgIHRoaXMuJG5vZGUuYXBwZW5kKHRoaXMuJGJvZHkpO1xuICAgIHRoaXMuJG5vZGUuY2xvc2VzdCgnLnBvcHVwX3dyYXBwZXInKS5hZGRDbGFzcygnbS13cmFwcGVyJyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBuZXcgRGlhbG9nSGVscGVyIGFuZCByZXR1cm5zIGl0LlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7RGlhbG9nSGVscGVyfVxuICAgKi9cbiAgc3RhdGljIGRpYWxvZyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gbmV3IERpYWxvZ0hlbHBlcihvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIG5ldyBEaWFsb2dIZWxwZXIgaW4gVmlzdWFsQnVpbGRlciB0aGVtZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIHN0YXRpYyBidWlsZGVyRGlhbG9nKG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGRpYWxvZyA9IERpYWxvZ0hlbHBlci5kaWFsb2cob3B0aW9ucyk7XG4gICAgcmV0dXJuIGRpYWxvZy5ub2RlKCRub2RlID0+ICRub2RlLm1vZCgndGhlbWUnLCAnYnVpbGRlcicpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm5hbCBmdW5jdGlvbiAtIHJlc2V0cyBjbGFzcyBwYXJhbXMuXG4gICAqL1xuICByZXNldFBhcmFtcygpIHtcbiAgICB0aGlzLiRub2RlID0gbnVsbDtcbiAgICB0aGlzLmF1dG9EZXN0cm95T25DbG9zZSA9IGZhbHNlO1xuICAgIHRoaXMub25DbG9zZUNoYWluID0gW107XG4gICAgdGhpcy5vbkFqYXhMb2FkQ2hhaW4gPSBbXTtcbiAgICB0aGlzLiRsb2FkZXIgPSBudWxsO1xuICAgIHRoaXMuJGJvZHkgPSBudWxsO1xuICAgIHRoaXMuJHRpdGxlID0gbnVsbDtcbiAgICB0aGlzLiRjbG9zZUJ1dHRvbiA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyBvciBkaXNhYmxlcyBjbG9zZSBidXR0b24uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZFxuICAgKiBAcmV0dXJucyB7RGlhbG9nSGVscGVyfVxuICAgKi9cbiAgY2xvc2VCdXR0b24oZW5hYmxlZCA9IHRydWUpIHtcbiAgICBpZiAoZW5hYmxlZCAmJiB0aGlzLiRjbG9zZUJ1dHRvbiA9PT0gbnVsbCkge1xuICAgICAgdGhpcy4kY2xvc2VCdXR0b24gPSAkKCc8ZGl2IGNsYXNzPVwibW9uc3Rlci1kaWFsb2dfX2Nsb3NlXCI+PC9kaXY+Jyk7XG4gICAgICB0aGlzLiRjbG9zZUJ1dHRvbi5wcmVwZW5kKHRoaXMuJG5vZGUpO1xuICAgICAgdGhpcy4kY2xvc2VCdXR0b24uY2xpY2soKCkgPT4gdGhpcy4kbm9kZS5wb3B1cCgnaGlkZScpKTtcbiAgICB9XG4gICAgaWYgKCFlbmFibGVkICYmIHRoaXMuJGNsb3NlQnV0dG9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLiRjbG9zZUJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgIHRoaXMuJGNsb3NlQnV0dG9uID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBjbG9zZSBvbiBtb2JpbGUgZGV2aWNlcy5cbiAgICogQHBhcmFtIHtib29sZWFufSB0YWJsZXQgVHJlYXQgdGFibGV0IGFzIG1vYmlsZSBkZXZpY2VzIHRvby5cbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIHNob3dDbG9zZU9uTW9iaWxlKHRhYmxldCA9IGZhbHNlKSB7XG4gICAgLyogZ2xvYmFsIGlzOmZhbHNlICovXG4gICAgaWYgKGlzLm1vYmlsZSgpIHx8ICh0YWJsZXQgJiYgaXMudGFibGV0KCkpKSB7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uKHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYXV0b0Rlc3Ryb3kgb3B0aW9uLiBJZiB0cnVlIC0gZGVzdHJveXMgRE9NIG5vZGUgb24gY2xvc2UuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIGF1dG9EZXN0cm95KHZhbHVlID0gdHJ1ZSkge1xuICAgIHRoaXMuYXV0b0Rlc3Ryb3lPbkNsb3NlID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkaWFsb2cgdGl0bGUuIEFkZHMgdGl0bGUgZWxlbWVudCBpZiBub3Qgc2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfCR8Ym9vbGVhbn0gdGl0bGVcbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIHRpdGxlKHRpdGxlKSB7XG4gICAgaWYgKHRoaXMuJHRpdGxlID09PSBudWxsICYmIHRpdGxlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy4kdGl0bGUucmVtb3ZlKCk7XG4gICAgICB0aGlzLiR0aXRsZSA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaWYgKHRoaXMuJHRpdGxlID09PSBudWxsKSB7XG4gICAgICB0aGlzLiR0aXRsZSA9ICQoJzxkaXYgY2xhc3M9XCJtb25zdGVyLWRpYWxvZ19fdGl0bGVcIj48L2Rpdj4nKTtcbiAgICAgIHRoaXMuJHRpdGxlLnByZXBlbmRUbyh0aGlzLiRub2RlKTtcbiAgICB9XG4gICAgaWYgKHRpdGxlIGluc3RhbmNlb2YgJCkge1xuICAgICAgdGhpcy4kdGl0bGUuYXBwZW5kKHRpdGxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kdGl0bGUuaHRtbCh0aXRsZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1biBzb21lIGFjdGlvbnMgb24gJG5vZGUgZWxlbWVudFxuICAgKiBAcGFyYW0ge0RpYWxvZ0hlbHBlcn5ub2RlfSBmIEZ1bmN0aW9uIHRvIHJ1biBvbiBlbGVtZW50LCBhY2NlcHRzICRub2RlIGFzIGEgcGFyYW1cbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIG5vZGUoZikge1xuICAgIGYodGhpcy4kbm9kZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUnVuIHNvbWUgYWN0aW9ucyBvbiAkYm9keSBlbGVtZW50XG4gICAqIEBwYXJhbSB7RGlhbG9nSGVscGVyfmJvZHl9IGYgRnVuY3Rpb24gdG8gcnVuIG9uIGVsZW1lbnQsIGFjY2VwdHMgJGJvZHkgYXMgYSBwYXJhbVxuICAgKiBAcmV0dXJucyB7RGlhbG9nSGVscGVyfVxuICAgKi9cbiAgYm9keShmKSB7XG4gICAgZih0aGlzLiRib2R5KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgSFRNTCBjb250ZW50IG9mIHBvcHVwLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3wkfSBodG1sIFN0cmluZyBvciBqUXVlcnkgbm9kZS5cbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sIGluc3RhbmNlb2YgJCkge1xuICAgICAgdGhpcy4kYm9keS5lbXB0eSgpO1xuICAgICAgdGhpcy4kYm9keS5hcHBlbmQoaHRtbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGJvZHkuaHRtbChodG1sKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBsb2FkZXIgZWxlbWVudFxuICAgKiBAcmV0dXJucyB7RGlhbG9nSGVscGVyfVxuICAgKi9cbiAgY3JlYXRlTG9hZGVyKCkge1xuICAgIGlmICh0aGlzLiRsb2FkZXIgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuJGxvYWRlciA9ICQoJzxkaXYgY2xhc3M9XCJtb25zdGVyLWRpYWxvZ19fbG9hZGVyXCI+PC9kaXY+Jyk7XG4gICAgICB0aGlzLiRub2RlLnByZXBlbmQodGhpcy4kbG9hZGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUnVuIHNvbWUgYWN0aW9ucyBvbiAkbG9hZGVyIGVsZW1lbnRcbiAgICogQHBhcmFtIHtEaWFsb2dIZWxwZXJ+bG9hZGVyfSBmIEZ1bmN0aW9uIHRvIHJ1biBvbiBlbGVtZW50LCBhY2NlcHRzICRsb2FkZXIgYXMgYSBwYXJhbVxuICAgKiBAcmV0dXJucyB7RGlhbG9nSGVscGVyfVxuICAgKi9cbiAgbG9hZGVyKGYpIHtcbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpO1xuICAgIGYodGhpcy4kbG9hZGVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW5zIGFqYXggcmVxdWVzdCBmb3Igc29tZSBwb3B1cCBjb250ZW50LlxuICAgKiBTaG93cyBsb2FkZXIgd2hpbGUgcmVxdWVzdCBpcyBwcm9jZXNzZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSAkYWpheCBQbGFpbk9iamVjdCBjb25maWd1cmF0aW9uIGZvciAkLmFqYXggQHNlZSBodHRwOi8vYXBpLmpxdWVyeS5jb20valF1ZXJ5LmFqYXgvI2pRdWVyeS1hamF4LXNldHRpbmdzXG4gICAqIEBwYXJhbSB7JHxudWxsfSB0YXJnZXQgV2hlcmUgdG8gaW5zZXJ0IHJlcXVlc3RlZCBjb250ZW50OiBqUXVlcnkgJG5vZGUgb3IgbnVsbCBmb3IgZGVmYXVsdCBib2R5LlxuICAgKiBAcmV0dXJucyB7RGlhbG9nSGVscGVyfVxuICAgKi9cbiAgYWpheCgkYWpheCwgdGFyZ2V0ID0gbnVsbCkge1xuICAgIC8vIGVuc3VyZSBsb2FkZXIgaXMgY3JlYXRlZFxuICAgIHRoaXMuY3JlYXRlTG9hZGVyKCk7XG4gICAgLy8gc2hvdyBsb2FkZXIgYXMgd2UgYXJlIHN0YXJ0aW5nIHJlcXVlc3Qgbm93XG4gICAgdGhpcy4kbG9hZGVyLnNob3coKTtcblxuICAgIGNvbnN0ICR0YXJnZXQgPSB0YXJnZXQgaW5zdGFuY2VvZiAkID8gdGFyZ2V0IDogdGhpcy4kYm9keTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycywgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgICAkYWpheC5kYXRhVHlwZSA9ICRhamF4LmRhdGFUeXBlIHx8ICdodG1sJztcblxuICAgICRcbiAgICAgIC5hamF4KCRhamF4KVxuICAgICAgLmZhaWwoKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAvLyBAdG9kbzogZGlzcGxheSBlcnJvciBzb21laG93XG4gICAgICB9KVxuICAgICAgLmRvbmUoKGRhdGEsIHRleHRTdGF0dXMsIGpxWEhSKSA9PiB7XG4gICAgICAgIGxldCBvayA9IHRydWU7XG4gICAgICAgIGxldCBhamF4RGF0YSA9IGRhdGE7XG4gICAgICAgIGNvbnN0IGNoYW5nZURhdGEgPSAobmV3RGF0YSkgPT4ge1xuICAgICAgICAgIGFqYXhEYXRhID0gbmV3RGF0YTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkFqYXhMb2FkQ2hhaW4uZm9yRWFjaChmID0+IHtcbiAgICAgICAgICBvayA9IG9rICYmIGYoYWpheERhdGEsICR0YXJnZXQsIHRoaXMsIGNoYW5nZURhdGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9rKSB7XG4gICAgICAgICAgY29uc3QgJGRhdGEgPSAkKGFqYXhEYXRhKTtcbiAgICAgICAgICAkdGFyZ2V0LmFwcGVuZCgkZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kbG9hZGVyLmhpZGUoKTtcbiAgICAgIH0pO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMsIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNhbGxiYWNrIHRvIGNoYWluIG9uIGFqYXguXG4gICAqXG4gICAqIEBwYXJhbSBmXG4gICAqIEByZXR1cm5zIHtEaWFsb2dIZWxwZXJ9XG4gICAqL1xuICBvbkFqYXhMb2FkKGYpIHtcbiAgICB0aGlzLm9uQWpheExvYWRDaGFpbi5wdXNoKGYpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBjYWxsYmFjayB0byBjaGFpbiBvbiBjbG9zZS5cbiAgICpcbiAgICogQHBhcmFtIGZcbiAgICogQHJldHVybnMge0RpYWxvZ0hlbHBlcn1cbiAgICovXG4gIG9uQ2xvc2UoZikge1xuICAgIHRoaXMub25DbG9zZUNoYWluLnB1c2goZik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgcG9wdXAuXG4gICAqIEByZXR1cm5zIHtEaWFsb2dIZWxwZXJ9XG4gICAqL1xuICBzaG93KCkge1xuICAgIHRoaXMuJG5vZGUuZGF0YSgnZGlhbG9nSGVscGVySW5zdGFuY2UnLCB0aGlzKTtcbiAgICB0aGlzLiRub2RlLnBvcHVwKCdzaG93Jyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgdGhlIHBvcHVwLlxuICAgKiBAcmV0dXJucyB7RGlhbG9nSGVscGVyfVxuICAgKi9cbiAgaGlkZSgpIHtcbiAgICB0aGlzLiRub2RlLnBvcHVwKCdoaWRlJyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgcG9wdXAgRE9NIG5vZGUuXG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLiRub2RlKSB7XG4gICAgICBjb25zdCAkd3JhcHBlciA9IHRoaXMuJG5vZGUuY2xvc2VzdCgnLnBvcHVwX3dyYXBwZXInKTtcbiAgICAgIGNvbnN0IGlkID0gdGhpcy4kbm9kZS5hdHRyKCdpZCcpO1xuICAgICAgY29uc3QgJGJhY2tncm91bmQgPSAkKGAjJHtpZH1fYmFja2dyb3VuZGApO1xuICAgICAgJGJhY2tncm91bmQucmVtb3ZlKCk7XG4gICAgICAkd3JhcHBlci5yZW1vdmUoKTtcblxuICAgICAgaWYgKHRoaXMuJGxvYWRlcikge1xuICAgICAgICB0aGlzLiRsb2FkZXIucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy4kdGl0bGUpIHtcbiAgICAgICAgdGhpcy4kdGl0bGUucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLiRib2R5LnJlbW92ZSgpO1xuICAgICAgdGhpcy4kbm9kZS5yZW1vdmUoKTtcbiAgICAgIHRoaXMucmVzZXRQYXJhbXMoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENhbGxiYWNrIHVzZWQgYnkgbm9kZS5cbiAgICogQGNhbGxiYWNrIERpYWxvZ0hlbHBlcn5ub2RlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSAkbm9kZVxuICAgKi9cbiAgLyoqXG4gICAqIENhbGxiYWNrIHVzZWQgYnkgbG9hZGVyLlxuICAgKiBAY2FsbGJhY2sgRGlhbG9nSGVscGVyfmxvYWRlclxuICAgKiBAcGFyYW0ge29iamVjdH0gJGxvYWRlclxuICAgKi9cbiAgLyoqXG4gICAqIENhbGxiYWNrIHVzZWQgYnkgYm9keS5cbiAgICogQGNhbGxiYWNrIERpYWxvZ0hlbHBlcn5ib2R5XG4gICAqIEBwYXJhbSB7b2JqZWN0fSAkYm9keVxuICAgKi9cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nSGVscGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvY29yZS9nZW5lcmFsL0RpYWxvZ0hlbHBlci5qc1xuICoqLyIsImNsYXNzIE1vbnN0ZXJCZW0ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtcygpO1xuICAgIHRoaXMuYmxvY2tDYWxsYmFja3MgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIE1vbnN0ZXJCZW0gc2V0dGluZ3MuXG4gICAqIFVzZXMgTW9uc3RlckJlbVNldHRpbmdzIHZhcmlhYmxlIGlmIHByb3ZpZGVkIG9yIGRlZmF1bHQgdmFsdWVzIGluc3RlYWQuXG4gICAqL1xuICBwYXJhbXMoKSB7XG4gICAgY29uc3QgdXNlclNldHRpbmdzID0gd2luZG93Lk1vbnN0ZXJCZW1TZXR0aW5ncyB8fCB7fTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHVzZXJTZXR0aW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmJsb2NrQ2FsbGJhY2tzKS5mb3JFYWNoKGJsb2NrTmFtZSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMuYmxvY2tDYWxsYmFja3NbYmxvY2tOYW1lXTtcbiAgICAgICQoYC4ke2Jsb2NrTmFtZX0ubS1qc2ApLmVhY2goZnVuY3Rpb24gaXRlcigpIHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICBjYWxsYmFjay5jYWxsKCR0aGlzLCBibG9ja05hbWUpO1xuICAgICAgICAkdGhpc1xuICAgICAgICAgIC5yZW1vdmVDbGFzcygnbS1qcycpXG4gICAgICAgICAgLmFkZENsYXNzKCdtLWpzLWluaXRpYWxpemVkJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb25zdGVyQmVtO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvY29yZS9nZW5lcmFsL01vbnN0ZXJCZW0uanNcbiAqKi8iLCIvKiBAcmVxdWlyZWQgalF1ZXJ5ICovXG4vKipcbiAqIFRoaXMgaXMgbW9kaWZpZWQgdmVyc2lvbiBvZiBqcXVlcnktYmVtIGFkZGluZyBzb21lIG5ldyBmdW5jdGlvbnNcbiAqL1xuXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICBpZih0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gIH0gZWxzZSB7XG4gICAgZmFjdG9yeShyb290LmpRdWVyeSk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24oJCwgdW5kZWZpbmVkKSB7XG5cbiAgLyoqXG4gICAqIEJhc2UgQkVNIGNsYXNzLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIEJFTShjb25maWcpIHtcbiAgICB0aGlzLnNldENvbmZpZyhjb25maWcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGNvbmZpZyBmb3IgdGhlIHBsdWdpblxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0gZGVmYXVsdHMgaW4gYnJcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtjb25maWcuZWxlbVByZWZpeF0gLSBFbGVtZW50IHByZWZpeCAoZGVmYXVsdDogJ19fJylcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtjb25maWcubW9kUHJlZml4XSAtIE1vZGlmaWVyIHByZWZpeCAoZGVmYXVsdDogJ18nKVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2NvbmZpZy5tb2REbG10cl0gLSBNb2RpZmllciBkZWxpbWl0ZXIgKGRlZmF1bHQ6ICdfJylcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtjb25maWcubmFtZVBhdHRlcm5dIC1cbiAgICogICBQYXR0ZXJuIHRvIG1hdGNoIHZhbGlkIGJsb2NrIG5hbWVzIChkZWZhdWx0OiAnW2EtekEtWjAtOS1dKycpXG4gICAqL1xuICBCRU0ucHJvdG90eXBlLnNldENvbmZpZyA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gJC5leHRlbmQoe30sIHtcbiAgICAgIG5hbWVQYXR0ZXJuOiAnW2EtekEtWjAtOVxcXFwtXSsnLFxuICAgICAgZWxlbVByZWZpeDogJ19fJyxcbiAgICAgIG1vZFByZWZpeDogJy0tJyxcbiAgICAgIG1vZERsbXRyOiAnXycsXG4gICAgfSwgY29uZmlnKTtcblxuICAgIHRoaXMuYmxvY2tDbGFzc1JlID0gdGhpcy5idWlsZEJsb2NrQ2xhc3NSZSgpO1xuICAgIHRoaXMuZWxlbUNsYXNzUmUgPSB0aGlzLmJ1aWxkRWxlbUNsYXNzUmUoKTtcbiAgICB0aGlzLm1vZENsYXNzUmUgPSB0aGlzLmJ1aWxkTW9kQ2xhc3NSZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgcGFyZW50IGJsb2NrIG9mIGVsZW1lbnQuXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuZ2V0QmxvY2sgPSBmdW5jdGlvbigkdGhpcykge1xuICAgIHZhciBibG9ja0NsYXNzID0gdGhpcy5nZXRCbG9ja0NsYXNzKCR0aGlzKVxuICAgICAgLCBibG9jayA9ICR0aGlzLmNsb3Nlc3QoJy4nICsgYmxvY2tDbGFzcyk7XG5cbiAgICBibG9jay5zZWxlY3RvciA9IGJsb2NrQ2xhc3M7XG4gICAgcmV0dXJuIGJsb2NrO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTd2l0Y2ggYmxvY2sgY29udGV4dC5cbiAgICogQHB1YmxpY1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRoaXNcbiAgICogQHBhcmFtIHtTdHJpbmd9IGJsb2NrXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbZWxlbV1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5zd2l0Y2hCbG9jayA9IGZ1bmN0aW9uKCR0aGlzLCBibG9jaywgZWxlbSkge1xuICAgIHZhciBlbGVtID0gZWxlbSB8fCBudWxsO1xuXG4gICAgZWxlbVxuICAgICAgPyAkdGhpcy5zZWxlY3RvciA9IHRoaXMuYnVpbGRTZWxlY3Rvcih7IGJsb2NrOiBibG9jaywgZWxlbTogZWxlbSB9KVxuICAgICAgOiAkdGhpcy5zZWxlY3RvciA9IHRoaXMuYnVpbGRTZWxlY3Rvcih7IGJsb2NrOiBibG9jayB9KTtcblxuICAgIHJldHVybiAkdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRmluZCBlbGVtZW50IGluIGJsb2NrLlxuICAgKiBAcHVibGljXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gICR0aGlzICAgIERPTSBlbGVtZW50XG4gICAqIEBwYXJhbSAge1N0cmluZ30gIGVsZW1LZXkgIEVsZW1lbnQgbmFtZVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmZpbmRFbGVtID0gZnVuY3Rpb24oJHRoaXMsIGVsZW1LZXkpIHtcbiAgICB2YXIgYmxvY2tDbGFzcyA9IHRoaXMuZ2V0QmxvY2tDbGFzcygkdGhpcylcbiAgICAgICwgZWxlbVNlbGVjdG9yID0gJy4nICsgdGhpcy5idWlsZEVsZW1DbGFzcyhibG9ja0NsYXNzLCBlbGVtS2V5KVxuICAgICAgLCBlbGVtID0gJHRoaXMuaXMoZWxlbVNlbGVjdG9yKSA/ICR0aGlzIDogJHRoaXMuZmluZChlbGVtU2VsZWN0b3IpO1xuXG4gICAgcmV0dXJuIGVsZW07XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB2YWx1ZSBvZiBtb2RpZmllci5cbiAgICogQHB1YmxpY1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRoaXNcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1vZEtleVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmdldE1vZCA9IGZ1bmN0aW9uKCR0aGlzLCBtb2RLZXkpIHtcbiAgICB2YXIgbW9kcyA9IHRoaXMuZXh0cmFjdE1vZHMoJHRoaXMuZmlyc3QoKSk7XG5cbiAgICBpZiAobW9kc1ttb2RLZXldICE9IHVuZGVmaW5lZCkgcmV0dXJuIG1vZHNbbW9kS2V5XTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgbW9kaWZpZXIgb2YgZWxlbWVudC5cbiAgICogQHB1YmxpY1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRoaXNcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1vZEtleVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW21vZFZhbF1cbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuaGFzTW9kID0gZnVuY3Rpb24oJHRoaXMsIG1vZEtleSwgbW9kVmFsKSB7XG4gICAgdmFyIG1vZHMgPSB0aGlzLmV4dHJhY3RNb2RzKCR0aGlzLmZpcnN0KCkpO1xuXG4gICAgaWYgKG1vZFZhbCkge1xuICAgICAgaWYgKG1vZHNbbW9kS2V5XSA9PSBtb2RWYWwpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChtb2RzW21vZEtleV0pIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogU2V0IG1vZGlmaWVyIG9uIGVsZW1lbnQuXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtb2RLZXlcbiAgICogQHBhcmFtIHtTdHJpbmd9IFttb2RWYWxdXG4gICAqIEBwYXJhbSB7T2JqZWN0fVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5zZXRNb2QgPSBmdW5jdGlvbigkdGhpcywgbW9kS2V5LCBtb2RWYWwpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgICwgc2VsZWN0b3IgPSAkdGhpcy5zZWxlY3RvcjtcblxuICAgICR0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY3VycmVudCA9ICQodGhpcyk7XG4gICAgICBjdXJyZW50LnNlbGVjdG9yID0gc2VsZWN0b3I7XG5cbiAgICAgIHZhciBtb2RzID0gc2VsZi5leHRyYWN0TW9kcyhjdXJyZW50KVxuICAgICAgICAsIGJhc2VOYW1lID0gc2VsZi5nZXRCYXNlQ2xhc3MoY3VycmVudCk7XG5cbiAgICAgIGlmIChtb2RzW21vZEtleV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBvbGRNb2ROYW1lID0gc2VsZi5idWlsZE1vZENsYXNzKGJhc2VOYW1lLCBtb2RLZXksIG1vZHNbbW9kS2V5XSk7XG4gICAgICAgIGN1cnJlbnQucmVtb3ZlQ2xhc3Mob2xkTW9kTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtb2RWYWwgIT09IGZhbHNlKSB7XG4gICAgICAgIHZhciBuZXdNb2ROYW1lID0gc2VsZi5idWlsZE1vZENsYXNzKGJhc2VOYW1lLCBtb2RLZXksIG1vZFZhbCk7XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRcbiAgICAgICAgLmFkZENsYXNzKG5ld01vZE5hbWUpXG4gICAgICAgIC50cmlnZ2VyKCdzZXRtb2QnLCBbbW9kS2V5LCBtb2RWYWxdKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAkdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRGVsZXRlIG1vZGlmaWVyIG9uIGVsZW1lbnQuXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtb2RLZXlcbiAgICogQHBhcmFtIHtTdHJpbmd9IFttb2RWYWxdXG4gICAqIEBwYXJhbSB7T2JqZWN0fVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5kZWxNb2QgPSBmdW5jdGlvbigkdGhpcywgbW9kS2V5LCBtb2RWYWwpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgICwgc2VsZWN0b3IgPSAkdGhpcy5zZWxlY3RvcjtcblxuICAgICR0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY3VycmVudCA9ICQodGhpcyk7XG4gICAgICBjdXJyZW50LnNlbGVjdG9yID0gc2VsZWN0b3I7XG5cbiAgICAgIHZhciBtb2RzID0gc2VsZi5leHRyYWN0TW9kcyhjdXJyZW50KVxuICAgICAgICAsIGJhc2VOYW1lID0gc2VsZi5nZXRCYXNlQ2xhc3MoY3VycmVudCk7XG5cbiAgICAgIGlmIChtb2RWYWwpIHtcbiAgICAgICAgaWYgKG1vZHNbbW9kS2V5XSA9PSBtb2RWYWwpIHtcbiAgICAgICAgICB2YXIgbW9kTmFtZSA9IHNlbGYuYnVpbGRNb2RDbGFzcyhiYXNlTmFtZSwgbW9kS2V5LCBtb2RzW21vZEtleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIG1vZE5hbWUgPSBzZWxmLmJ1aWxkTW9kQ2xhc3MoYmFzZU5hbWUsIG1vZEtleSwgbW9kc1ttb2RLZXldKTtcbiAgICAgIH1cblxuICAgICAgY3VycmVudFxuICAgICAgICAucmVtb3ZlQ2xhc3MobW9kTmFtZSlcbiAgICAgICAgLnRyaWdnZXIoJ2RlbG1vZCcsIFttb2RLZXksIG1vZFZhbF0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICR0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaWx0ZXJpbmcgZWxlbWVudHMgYnkgbW9kaWZpZXIuXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtb2RLZXlcbiAgICogQHBhcmFtIHtTdHJpbmd9IFttb2RWYWxdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2ludmVyc2VdXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuYnlNb2QgPSBmdW5jdGlvbigkdGhpcywgbW9kS2V5LCBtb2RWYWwsIGludmVyc2UpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgICwgbW9kVmFsID0gbW9kVmFsIHx8IG51bGxcbiAgICAgICwgaW52ZXJzZSA9IGludmVyc2UgfHwgZmFsc2VcbiAgICAgICwgc2VsZWN0b3IgPSAkdGhpcy5zZWxlY3RvclxuICAgICAgLCByZXN1bHQgPSAkKCk7XG5cbiAgICAkdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSAkKHRoaXMpO1xuICAgICAgY3VycmVudC5zZWxlY3RvciA9IHNlbGVjdG9yO1xuXG4gICAgICB2YXIgbW9kcyA9IHNlbGYuZXh0cmFjdE1vZHMoY3VycmVudClcbiAgICAgICAgLCBiYXNlTmFtZSA9IHNlbGYuZ2V0QmFzZUNsYXNzKGN1cnJlbnQpO1xuXG4gICAgICBpZiAobW9kVmFsKSB7XG4gICAgICAgIGlmIChtb2RzW21vZEtleV0gPT0gbW9kVmFsKSB7XG4gICAgICAgICAgdmFyIG1vZE5hbWUgPSBzZWxmLmJ1aWxkTW9kQ2xhc3MoYmFzZU5hbWUsIG1vZEtleSwgbW9kc1ttb2RLZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChtb2RzW21vZEtleV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIG1vZE5hbWUgPSBzZWxmLmJ1aWxkTW9kQ2xhc3MoYmFzZU5hbWUsIG1vZEtleSwgbW9kc1ttb2RLZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXN1bHQgPSByZXN1bHQuYWRkKGludmVyc2VcbiAgICAgICAgPyBjdXJyZW50Lm5vdCgnLicgKyBtb2ROYW1lKVxuICAgICAgICA6IGN1cnJlbnQuZmlsdGVyKCcuJyArIG1vZE5hbWUpKTtcbiAgICB9KTtcblxuICAgIHJlc3VsdC5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBibG9jayBuYW1lcyBmcm9tIGVsZW1lbnQuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSAkdGhpc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmV4dHJhY3RCbG9ja3MgPSBmdW5jdGlvbigkdGhpcykge1xuICAgIHZhciBzZWxmID0gdGhpcywgcmVzdWx0ID0gW11cbiAgICAgICwgc2VsZWN0b3JzID0gdGhpcy5nZXRDbGFzc2VzKCR0aGlzKTtcblxuICAgICQuZWFjaChzZWxlY3RvcnMsIGZ1bmN0aW9uKGksIHNlbCkge1xuICAgICAgdmFyIHR5cGUgPSBzZWxmLmdldENsYXNzVHlwZShzZWwpO1xuXG4gICAgICBpZiAodHlwZSA9PSAnYmxvY2snKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHNlbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBlID09ICdlbGVtJykge1xuICAgICAgICB2YXIgZWxlbSA9IHNlbC5zcGxpdChzZWxmLmNvbmZpZy5lbGVtUHJlZml4KTtcbiAgICAgICAgcmVzdWx0LnB1c2goZWxlbVswXSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgZWxlbWVudCBuYW1lcyBmcm9tIGVsZW1lbnQuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuZXh0cmFjdEVsZW1zID0gZnVuY3Rpb24oJHRoaXMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsIHJlc3VsdCA9IFtdO1xuXG4gICAgJC5lYWNoKHNlbGYuZ2V0Q2xhc3NlcygkdGhpcyksIGZ1bmN0aW9uKGksIGNsYXNzTmFtZSkge1xuICAgICAgaWYgKHNlbGYuZ2V0Q2xhc3NUeXBlKGNsYXNzTmFtZSkgPT0gJ2VsZW0nKSB7XG4gICAgICAgIHZhciBlbGVtTmFtZSA9IGNsYXNzTmFtZS5zcGxpdChzZWxmLmNvbmZpZy5lbGVtUHJlZml4KTtcbiAgICAgICAgcmVzdWx0LnB1c2goZWxlbU5hbWVbMV0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IG1vZGlmaWVycyBmcm9tIGVsZW1lbnQuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICR0aGlzXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEJFTS5wcm90b3R5cGUuZXh0cmFjdE1vZHMgPSBmdW5jdGlvbigkdGhpcykge1xuICAgIHZhciBzZWxmID0gdGhpcywgcmVzdWx0ID0ge307XG5cbiAgICAkdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcblxuICAgICAgJC5lYWNoKHNlbGYuZ2V0Q2xhc3NlcygkdGhpcyksIGZ1bmN0aW9uKGksIGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAoc2VsZi5nZXRDbGFzc1R5cGUoY2xhc3NOYW1lKSA9PSAnbW9kJykge1xuICAgICAgICAgIHZhciByZSA9IHNlbGYuYnVpbGRNb2RDbGFzc1JlKCkuZXhlYyhjbGFzc05hbWUpO1xuICAgICAgICAgIHZhciBtb2ROYW1lID0gcmVbMV0uc3BsaXQoc2VsZi5jb25maWcubW9kRGxtdHIpO1xuXG4gICAgICAgICAgaWYgKG1vZE5hbWVbMV0gIT09IHVuZGVmaW5lZCAmJiBtb2ROYW1lWzFdICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIG1vZFZhbCA9IG1vZE5hbWVbMV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtb2RWYWwgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc3VsdFsgbW9kTmFtZVswXSBdID0gbW9kVmFsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBjbGFzc2VzIG5hbWVzIGZyb20gZWxlbWVudC5cbiAgICogQHByb3RlY3RlZFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJHRoaXNcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5nZXRDbGFzc2VzID0gZnVuY3Rpb24oJHRoaXMpIHtcbiAgICB2YXIgY2xhc3NlcywgcmVzdWx0ID0gW107XG5cbiAgICBpZiAodHlwZW9mICR0aGlzID09ICdvYmplY3QnKSB7XG5cbiAgICAgIGlmICgkdGhpcy5zZWxlY3Rvci5pbmRleE9mKCcuJykgPT09IDApIHtcbiAgICAgICAgY2xhc3NlcyA9ICR0aGlzLnNlbGVjdG9yLnNwbGl0KCcuJyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICgkdGhpcy5hdHRyKCdjbGFzcycpICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBjbGFzc2VzID0gJHRoaXMuYXR0cignY2xhc3MnKS5zcGxpdCgnICcpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY2xhc3NlcyA9ICR0aGlzLnNwbGl0KCcuJyk7XG4gICAgfVxuXG4gICAgJC5lYWNoKGNsYXNzZXMsIGZ1bmN0aW9uKGksIGNsYXNzTmFtZSkge1xuICAgICAgaWYgKGNsYXNzTmFtZSAhPSAnJykgcmVzdWx0LnB1c2goJC50cmltKGNsYXNzTmFtZSkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQnVpbGQgcmVnZXhwIGZvciBibG9ja3MuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHJldHVybiB7UmVnRXhwfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5idWlsZEJsb2NrQ2xhc3NSZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgJ14oJyArIHRoaXMuY29uZmlnLm5hbWVQYXR0ZXJuICsgJykkJ1xuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHJlZ2V4cCBmb3IgZWxlbWVudHMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHJldHVybiB7UmVnRXhwfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5idWlsZEVsZW1DbGFzc1JlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgICAnXicgKyB0aGlzLmNvbmZpZy5uYW1lUGF0dGVybiArIHRoaXMuY29uZmlnLmVsZW1QcmVmaXggKyAnKCcgKyB0aGlzLmNvbmZpZy5uYW1lUGF0dGVybiArICcpJCdcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCdWlsZCByZWdleHAgZm9yIG1vZGlmaWVycy5cbiAgICogQHByb3RlY3RlZFxuICAgKlxuICAgKiBAcmV0dXJuIHtSZWdFeHB9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmJ1aWxkTW9kQ2xhc3NSZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgJ14oPzonICsgdGhpcy5jb25maWcubmFtZVBhdHRlcm4gKyAnfCcgKyB0aGlzLmNvbmZpZy5uYW1lUGF0dGVybiArIHRoaXMuY29uZmlnLmVsZW1QcmVmaXggKyB0aGlzLmNvbmZpZy5uYW1lUGF0dGVybiArICcpJyArIHRoaXMuY29uZmlnLm1vZFByZWZpeCArICcoJyArIHRoaXMuY29uZmlnLm5hbWVQYXR0ZXJuICsgJygoJyArIHRoaXMuY29uZmlnLm1vZERsbXRyICsgdGhpcy5jb25maWcubmFtZVBhdHRlcm4gKyAnKSR8JCkpJ1xuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGNsYXNzIG5hbWUgZm9yIGJsb2NrLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBibG9ja05hbWVcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5idWlsZEJsb2NrQ2xhc3MgPSBmdW5jdGlvbihibG9ja05hbWUpIHtcbiAgICByZXR1cm4gYmxvY2tOYW1lO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCdWlsZCBjbGFzcyBuYW1lIGZvciBlbGVtZW50LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBibG9ja05hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVsZW1LZXlcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5idWlsZEVsZW1DbGFzcyA9IGZ1bmN0aW9uKGJsb2NrTmFtZSwgZWxlbUtleSkge1xuICAgIHJldHVybiBibG9ja05hbWUgKyB0aGlzLmNvbmZpZy5lbGVtUHJlZml4ICsgZWxlbUtleTtcbiAgfTtcblxuICAvKipcbiAgICogQnVpbGQgY2xhc3MgbmFtZSBmb3IgbW9kaWZpZXIuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGJsb2NrTmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kS2V5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtb2RWYWxcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5idWlsZE1vZENsYXNzID0gZnVuY3Rpb24oYmFzZUNsYXNzLCBtb2RLZXksIG1vZFZhbCkge1xuICAgIGlmIChtb2RWYWwgIT09IHVuZGVmaW5lZCAmJiBtb2RWYWwgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBiYXNlQ2xhc3MgKyB0aGlzLmNvbmZpZy5tb2RQcmVmaXggKyBtb2RLZXkgKyB0aGlzLmNvbmZpZy5tb2REbG10ciArIG1vZFZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJhc2VDbGFzcyArIHRoaXMuY29uZmlnLm1vZFByZWZpeCArIG1vZEtleTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHNlbGVjdG9yIGZyb20gb2JqZWN0IG9yIHN0cmluZy5cbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fVxuICAgKiBAcGFyYW0ge1N0cmluZ31cbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgQkVNLnByb3RvdHlwZS5idWlsZFNlbGVjdG9yID0gZnVuY3Rpb24oc2VsZWN0b3IsIHByZWZpeCkge1xuICAgIGlmIChwcmVmaXggIT09ICcnKSB7XG4gICAgICB2YXIgcHJlZml4ID0gcHJlZml4IHx8ICcuJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoc2VsZWN0b3IuYmxvY2sgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBidWlsZFNlbGVjdG9yID0gdGhpcy5idWlsZEJsb2NrQ2xhc3Moc2VsZWN0b3IuYmxvY2spO1xuXG4gICAgICAgIGlmIChzZWxlY3Rvci5lbGVtICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGJ1aWxkU2VsZWN0b3IgPSB0aGlzLmJ1aWxkRWxlbUNsYXNzKGJ1aWxkU2VsZWN0b3IsIHNlbGVjdG9yLmVsZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yLm1vZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgbW9kID0gc2VsZWN0b3IubW9kLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgYnVpbGRTZWxlY3RvciA9IHRoaXMuYnVpbGRNb2RDbGFzcyhidWlsZFNlbGVjdG9yLCBtb2RbMF0sIG1vZFsxXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYnVpbGRTZWxlY3RvciAhPSB1bmRlZmluZWRcbiAgICAgID8gcHJlZml4ICsgYnVpbGRTZWxlY3RvclxuICAgICAgOiBwcmVmaXggKyBzZWxlY3RvcjtcbiAgfTtcblxuICAvKipcbiAgICogQnVpbGQgY2xhc3MgbmFtZSBmb3IgYmxvY2suXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSAkdGhpc1xuICAgKiBAcGFyYW0ge051bWJlcn0gW2luZGV4XVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmdldEJsb2NrQ2xhc3MgPSBmdW5jdGlvbigkdGhpcywgaW5kZXgpIHtcbiAgICB2YXIgYmxvY2tDbGFzc2VzID0gdGhpcy5leHRyYWN0QmxvY2tzKCR0aGlzKTtcbiAgICB2YXIgaW5kZXggPSBpbmRleCB8fCAwO1xuXG4gICAgcmV0dXJuIGluZGV4IDw9IGJsb2NrQ2xhc3Nlcy5sZW5ndGggLSAxXG4gICAgICA/IGJsb2NrQ2xhc3Nlc1tpbmRleF1cbiAgICAgIDogbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGJhc2UgY2xhc3MgZnJvbSBlbGVtZW50LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkdGhpc1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmdldEJhc2VDbGFzcyA9IGZ1bmN0aW9uKCR0aGlzKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLCBiYXNlQ2xhc3MgPSBudWxsO1xuICAgIHZhciBzZWxlY3RvcnMgPSB0aGlzLmdldENsYXNzZXMoJHRoaXMpO1xuXG4gICAgJC5lYWNoKHNlbGVjdG9ycywgZnVuY3Rpb24oaSwgc2VsKSB7XG4gICAgICB2YXIgY2xhc3NUeXBlID0gc2VsZi5nZXRDbGFzc1R5cGUoc2VsKTtcblxuICAgICAgaWYgKGNsYXNzVHlwZSAmJiBjbGFzc1R5cGUgIT0gJ21vZCcpIHtcbiAgICAgICAgYmFzZUNsYXNzID0gc2VsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJhc2VDbGFzcztcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGNsYXNzIHR5cGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBCRU0ucHJvdG90eXBlLmdldENsYXNzVHlwZSA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgIGlmICh0aGlzLm1vZENsYXNzUmUudGVzdChjbGFzc05hbWUpKSB7XG4gICAgICByZXR1cm4gJ21vZCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuZWxlbUNsYXNzUmUudGVzdChjbGFzc05hbWUpKSB7XG4gICAgICByZXR1cm4gJ2VsZW0nO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmJsb2NrQ2xhc3NSZS50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgIHJldHVybiAnYmxvY2snO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIEJFTSBpbnN0YW5jZS5cbiAgICovXG4gICQuQkVNID0gbmV3IEJFTSgpO1xuXG4gIC8qKlxuICAgKiBFeHRlbmQgalF1ZXJ5IG9iamVjdC5cbiAgICovXG4gICQuZm4uZXh0ZW5kKHtcbiAgICBibG9jazogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJC5CRU0uZ2V0QmxvY2sodGhpcyk7XG4gICAgfSxcblxuICAgIGV4dHJhY3RCbG9ja3M6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICQuQkVNLmV4dHJhY3RCbG9ja3ModGhpcyk7XG4gICAgfSxcblxuICAgIGlzQmVtQmxvY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgY2xhc3NlcyA9IHRoaXMuYXR0cignY2xhc3MnKS5zcGxpdCgnICcpO1xuICAgICAgbGV0IGlzQmxvY2sgPSBmYWxzZTtcbiAgICAgIGNsYXNzZXMuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xuICAgICAgICBpZiAoJC5CRU0uZ2V0Q2xhc3NUeXBlKGNsYXNzTmFtZSkgPT09ICdibG9jaycpIHtcbiAgICAgICAgICBpc0Jsb2NrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaXNCbG9jaztcbiAgICB9LFxuXG4gICAgYmxvY2tTZXR0aW5nczogZnVuY3Rpb24gKGRlZmF1bHRTZXR0aW5ncykge1xuICAgICAgY29uc3QgdXNlclNldHRpbmdzID0gdGhpcy5kYXRhKCdtQmVtU2V0dGluZ3MnKSB8fCB7fTtcbiAgICAgIGNvbnN0IHNldHRpbmdzID0gZGVmYXVsdFNldHRpbmdzIHx8IHt9O1xuICAgICAgT2JqZWN0LmtleXModXNlclNldHRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIHNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHNldHRpbmdzO1xuICAgIH0sXG5cbiAgICBlbGVtOiBmdW5jdGlvbihjdHgsIGVsZW1LZXkpIHtcbiAgICAgIGlmICghZWxlbUtleSkge1xuICAgICAgICBlbGVtS2V5ID0gY3R4O1xuICAgICAgICBjdHggPSBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJC5CRU0uZmluZEVsZW0oY3R4IHx8IHRoaXMsIGVsZW1LZXkpO1xuICAgIH0sXG5cbiAgICBjdHg6IGZ1bmN0aW9uKGJsb2NrLCBlbGVtKSB7XG4gICAgICByZXR1cm4gJC5CRU0uc3dpdGNoQmxvY2sodGhpcywgYmxvY2ssIGVsZW0pO1xuICAgIH0sXG5cbiAgICBtb2Q6IGZ1bmN0aW9uKG1vZEtleSwgbW9kVmFsKSB7XG4gICAgICBpZiAodHlwZW9mIG1vZFZhbCA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtb2RWYWwgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAobW9kVmFsID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gJC5CRU0uZGVsTW9kKHRoaXMsIG1vZEtleSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAobW9kVmFsICE9IG51bGwpXG4gICAgICAgID8gJC5CRU0uc2V0TW9kKHRoaXMsIG1vZEtleSwgbW9kVmFsKVxuICAgICAgICA6ICQuQkVNLmdldE1vZCh0aGlzLCBtb2RLZXkpO1xuICAgIH0sXG5cbiAgICBzZXRNb2Q6IGZ1bmN0aW9uKG1vZEtleSwgbW9kVmFsKSB7XG4gICAgICByZXR1cm4gJC5CRU0uc2V0TW9kKHRoaXMsIG1vZEtleSwgbW9kVmFsKTtcbiAgICB9LFxuXG4gICAgZGVsTW9kOiBmdW5jdGlvbihtb2RLZXksIG1vZFZhbCkge1xuICAgICAgcmV0dXJuICQuQkVNLmRlbE1vZCh0aGlzLCBtb2RLZXksIG1vZFZhbCk7XG4gICAgfSxcblxuICAgIGhhc01vZDogZnVuY3Rpb24obW9kS2V5LCBtb2RWYWwpIHtcbiAgICAgIHJldHVybiAkLkJFTS5oYXNNb2QodGhpcywgbW9kS2V5LCBtb2RWYWwpO1xuICAgIH0sXG5cbiAgICBieU1vZDogZnVuY3Rpb24obW9kS2V5LCBtb2RWYWwpIHtcbiAgICAgIHJldHVybiAkLkJFTS5ieU1vZCh0aGlzLCBtb2RLZXksIG1vZFZhbCk7XG4gICAgfSxcblxuICAgIGJ5Tm90TW9kOiBmdW5jdGlvbihtb2RLZXksIG1vZFZhbCkge1xuICAgICAgcmV0dXJuICQuQkVNLmJ5TW9kKHRoaXMsIG1vZEtleSwgbW9kVmFsLCAnaW52ZXJzZScpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgYmxvY2tzJ3Mgb3IgZWxlbSdzIG1vZGlmaWVyIGBtb2RLZXlgIGJldHdlZW4gYG1vZFZhbDFgIGFuZCBgbW9kVmFsMmBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kS2V5XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1vZFZhbDFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kVmFsMlxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgdG9nZ2xlTW9kOiBmdW5jdGlvbiAobW9kS2V5LCBtb2RWYWwxLCBtb2RWYWwyKSB7XG4gICAgICBpZiAodGhpcy5oYXNNb2QobW9kS2V5LCBtb2RWYWwxKSkge1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICAgICAgLmRlbE1vZChtb2RLZXksIG1vZFZhbDEpXG4gICAgICAgICAgICAuc2V0TW9kKG1vZEtleSwgbW9kVmFsMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICAgICAgLmRlbE1vZChtb2RLZXksIG1vZFZhbDIpXG4gICAgICAgICAgICAuc2V0TW9kKG1vZEtleSwgbW9kVmFsMSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxufSkpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvY29yZS9saWJzL2pxdWVyeS5iZW0uanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvY29yZS9idW5kbGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJqUXVlcnlcIlxuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9