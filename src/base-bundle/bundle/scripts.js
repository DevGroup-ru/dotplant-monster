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
	
	__webpack_require__(30);
	
	__webpack_require__(5);
	
	__webpack_require__(7);
	
	window.MonsterBem.update();

/***/ },

/***/ 4:
/***/ function(module, exports) {

	"use strict";

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(4);

/***/ },

/***/ 6:
/***/ function(module, exports) {

	'use strict';
	
	window.MonsterBem.blockCallbacks['faq-002'] = function f() {
	  /* global polyglot: false */
	  var settings = this.blockSettings({
	    show: typeof polyglot !== 'undefined' ? polyglot.t('Read more') : 'Read more',
	    hide: typeof polyglot !== 'undefined' ? polyglot.t('Hide') : 'Hide'
	  });
	
	  // this here is $(this) - jquery object of BEM block
	  var $links = this.elem('link');
	
	  $links.click(function clickHandler() {
	    var $link = $(this);
	    var state = $link.mod('active');
	    $link.mod('active', !state);
	    $link.text(state ? settings.show : settings.hide);
	    return false;
	  }).on('setmod', function setMod(e, modKey) {
	    if (modKey === 'active') {
	      $(this).prev('.faq__text-hide').fadeIn();
	    }
	  }).on('delmod', function delMod(e, modKey) {
	    if (modKey === 'active') {
	      $(this).prev('.faq__text-hide').fadeOut();
	    }
	  });
	};

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(6);

/***/ },

/***/ 30:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWFkMWEwYTk3YTM1MzdjMDU4OWY/M2ZiYioiLCJ3ZWJwYWNrOi8vLy4vYnVuZGxlL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9idW5kbGUvY29udGVudC1ibG9ja3MvZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vYnVuZGxlL2ZhcS9mYXEtMDAyL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2J1bmRsZS9mYXEvZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vYnVuZGxlL2J1bmRsZS5jc3MiXSwibmFtZXMiOlsid2luZG93IiwiTW9uc3RlckJlbSIsInVwZGF0ZSIsImJsb2NrQ2FsbGJhY2tzIiwiZiIsInNldHRpbmdzIiwiYmxvY2tTZXR0aW5ncyIsInNob3ciLCJwb2x5Z2xvdCIsInQiLCJoaWRlIiwiJGxpbmtzIiwiZWxlbSIsImNsaWNrIiwiY2xpY2tIYW5kbGVyIiwiJGxpbmsiLCIkIiwic3RhdGUiLCJtb2QiLCJ0ZXh0Iiwib24iLCJzZXRNb2QiLCJlIiwibW9kS2V5IiwicHJldiIsImZhZGVJbiIsImRlbE1vZCIsImZhZGVPdXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDdENBOztBQUdBOztBQUNBOztBQUVBQSxRQUFPQyxVQUFQLENBQWtCQyxNQUFsQixHOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsd0I7Ozs7Ozs7OztBQ0FBRixRQUFPQyxVQUFQLENBQWtCRSxjQUFsQixDQUFpQyxTQUFqQyxJQUE4QyxTQUFTQyxDQUFULEdBQWE7QUFDekQ7QUFDQSxPQUFNQyxXQUFXLEtBQUtDLGFBQUwsQ0FBbUI7QUFDbENDLFdBQU0sT0FBT0MsUUFBUCxLQUFvQixXQUFwQixHQUFrQ0EsU0FBU0MsQ0FBVCxDQUFXLFdBQVgsQ0FBbEMsR0FBNEQsV0FEaEM7QUFFbENDLFdBQU0sT0FBT0YsUUFBUCxLQUFvQixXQUFwQixHQUFrQ0EsU0FBU0MsQ0FBVCxDQUFXLE1BQVgsQ0FBbEMsR0FBdUQ7QUFGM0IsSUFBbkIsQ0FBakI7O0FBS0E7QUFDQSxPQUFNRSxTQUFTLEtBQUtDLElBQUwsQ0FBVSxNQUFWLENBQWY7O0FBRUFELFVBQ0dFLEtBREgsQ0FDUyxTQUFTQyxZQUFULEdBQXdCO0FBQzdCLFNBQU1DLFFBQVFDLEVBQUUsSUFBRixDQUFkO0FBQ0EsU0FBTUMsUUFBUUYsTUFBTUcsR0FBTixDQUFVLFFBQVYsQ0FBZDtBQUNBSCxXQUFNRyxHQUFOLENBQVUsUUFBVixFQUFvQixDQUFDRCxLQUFyQjtBQUNBRixXQUFNSSxJQUFOLENBQVdGLFFBQVFaLFNBQVNFLElBQWpCLEdBQXdCRixTQUFTSyxJQUE1QztBQUNBLFlBQU8sS0FBUDtBQUNELElBUEgsRUFRR1UsRUFSSCxDQVFNLFFBUk4sRUFRZ0IsU0FBU0MsTUFBVCxDQUFnQkMsQ0FBaEIsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQ3ZDLFNBQUlBLFdBQVcsUUFBZixFQUF5QjtBQUN2QlAsU0FBRSxJQUFGLEVBQVFRLElBQVIsQ0FBYSxpQkFBYixFQUFnQ0MsTUFBaEM7QUFDRDtBQUNGLElBWkgsRUFhR0wsRUFiSCxDQWFNLFFBYk4sRUFhZ0IsU0FBU00sTUFBVCxDQUFnQkosQ0FBaEIsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQ3ZDLFNBQUlBLFdBQVcsUUFBZixFQUF5QjtBQUN2QlAsU0FBRSxJQUFGLEVBQVFRLElBQVIsQ0FBYSxpQkFBYixFQUFnQ0csT0FBaEM7QUFDRDtBQUNGLElBakJIO0FBa0JELEVBNUJELEM7Ozs7Ozs7OztBQ0FBLHdCOzs7Ozs7O0FDQUEsMEMiLCJmaWxlIjoiYnVuZGxlL3NjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGVhZDFhMGE5N2EzNTM3YzA1ODlmXG4gKiovIiwiaW1wb3J0ICcuL2J1bmRsZS5jc3MnO1xuXG5cbmltcG9ydCAnLi9jb250ZW50LWJsb2Nrcy9ncm91cCc7XG5pbXBvcnQgJy4vZmFxL2dyb3VwJztcblxud2luZG93Lk1vbnN0ZXJCZW0udXBkYXRlKCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1bmRsZS9idW5kbGUuanNcbiAqKi8iLCJpbXBvcnQgJy4vY29udGVudC1ibG9jay0wMDEvYmxvY2snO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVuZGxlL2NvbnRlbnQtYmxvY2tzL2dyb3VwLmpzXG4gKiovIiwid2luZG93Lk1vbnN0ZXJCZW0uYmxvY2tDYWxsYmFja3NbJ2ZhcS0wMDInXSA9IGZ1bmN0aW9uIGYoKSB7XG4gIC8qIGdsb2JhbCBwb2x5Z2xvdDogZmFsc2UgKi9cbiAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLmJsb2NrU2V0dGluZ3Moe1xuICAgIHNob3c6IHR5cGVvZiBwb2x5Z2xvdCAhPT0gJ3VuZGVmaW5lZCcgPyBwb2x5Z2xvdC50KCdSZWFkIG1vcmUnKSA6ICdSZWFkIG1vcmUnLFxuICAgIGhpZGU6IHR5cGVvZiBwb2x5Z2xvdCAhPT0gJ3VuZGVmaW5lZCcgPyBwb2x5Z2xvdC50KCdIaWRlJykgOiAnSGlkZScsXG4gIH0pO1xuXG4gIC8vIHRoaXMgaGVyZSBpcyAkKHRoaXMpIC0ganF1ZXJ5IG9iamVjdCBvZiBCRU0gYmxvY2tcbiAgY29uc3QgJGxpbmtzID0gdGhpcy5lbGVtKCdsaW5rJyk7XG5cbiAgJGxpbmtzXG4gICAgLmNsaWNrKGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgIGNvbnN0ICRsaW5rID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IHN0YXRlID0gJGxpbmsubW9kKCdhY3RpdmUnKTtcbiAgICAgICRsaW5rLm1vZCgnYWN0aXZlJywgIXN0YXRlKTtcbiAgICAgICRsaW5rLnRleHQoc3RhdGUgPyBzZXR0aW5ncy5zaG93IDogc2V0dGluZ3MuaGlkZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbiAgICAub24oJ3NldG1vZCcsIGZ1bmN0aW9uIHNldE1vZChlLCBtb2RLZXkpIHtcbiAgICAgIGlmIChtb2RLZXkgPT09ICdhY3RpdmUnKSB7XG4gICAgICAgICQodGhpcykucHJldignLmZhcV9fdGV4dC1oaWRlJykuZmFkZUluKCk7XG4gICAgICB9XG4gICAgfSlcbiAgICAub24oJ2RlbG1vZCcsIGZ1bmN0aW9uIGRlbE1vZChlLCBtb2RLZXkpIHtcbiAgICAgIGlmIChtb2RLZXkgPT09ICdhY3RpdmUnKSB7XG4gICAgICAgICQodGhpcykucHJldignLmZhcV9fdGV4dC1oaWRlJykuZmFkZU91dCgpO1xuICAgICAgfVxuICAgIH0pO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVuZGxlL2ZhcS9mYXEtMDAyL2Jsb2NrLmpzXG4gKiovIiwiaW1wb3J0ICcuL2ZhcS0wMDIvYmxvY2snO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYnVuZGxlL2ZhcS9ncm91cC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2J1bmRsZS9idW5kbGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=