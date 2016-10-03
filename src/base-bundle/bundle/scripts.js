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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWRlOWIyZjgzNmMwYjU3YmQ2ZjA/ZmE5NSoiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL2J1bmRsZS9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL2J1bmRsZS9jb250ZW50LWJsb2Nrcy9ncm91cC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvYnVuZGxlL2ZhcS9mYXEtMDAyL2Jsb2NrLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS9idW5kbGUvZmFxL2dyb3VwLmpzIiwid2VicGFjazovLy8vVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS9idW5kbGUvYnVuZGxlLmNzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJNb25zdGVyQmVtIiwidXBkYXRlIiwiYmxvY2tDYWxsYmFja3MiLCJmIiwic2V0dGluZ3MiLCJibG9ja1NldHRpbmdzIiwic2hvdyIsInBvbHlnbG90IiwidCIsImhpZGUiLCIkbGlua3MiLCJlbGVtIiwiY2xpY2siLCJjbGlja0hhbmRsZXIiLCIkbGluayIsIiQiLCJzdGF0ZSIsIm1vZCIsInRleHQiLCJvbiIsInNldE1vZCIsImUiLCJtb2RLZXkiLCJwcmV2IiwiZmFkZUluIiwiZGVsTW9kIiwiZmFkZU91dCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUN0Q0E7O0FBR0E7O0FBQ0E7O0FBRUFBLFFBQU9DLFVBQVAsQ0FBa0JDLE1BQWxCLEc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQSx3Qjs7Ozs7Ozs7O0FDQUFGLFFBQU9DLFVBQVAsQ0FBa0JFLGNBQWxCLENBQWlDLFNBQWpDLElBQThDLFNBQVNDLENBQVQsR0FBYTtBQUN6RDtBQUNBLE9BQU1DLFdBQVcsS0FBS0MsYUFBTCxDQUFtQjtBQUNsQ0MsV0FBTSxPQUFPQyxRQUFQLEtBQW9CLFdBQXBCLEdBQWtDQSxTQUFTQyxDQUFULENBQVcsV0FBWCxDQUFsQyxHQUE0RCxXQURoQztBQUVsQ0MsV0FBTSxPQUFPRixRQUFQLEtBQW9CLFdBQXBCLEdBQWtDQSxTQUFTQyxDQUFULENBQVcsTUFBWCxDQUFsQyxHQUF1RDtBQUYzQixJQUFuQixDQUFqQjs7QUFLQTtBQUNBLE9BQU1FLFNBQVMsS0FBS0MsSUFBTCxDQUFVLE1BQVYsQ0FBZjs7QUFFQUQsVUFDR0UsS0FESCxDQUNTLFNBQVNDLFlBQVQsR0FBd0I7QUFDN0IsU0FBTUMsUUFBUUMsRUFBRSxJQUFGLENBQWQ7QUFDQSxTQUFNQyxRQUFRRixNQUFNRyxHQUFOLENBQVUsUUFBVixDQUFkO0FBQ0FILFdBQU1HLEdBQU4sQ0FBVSxRQUFWLEVBQW9CLENBQUNELEtBQXJCO0FBQ0FGLFdBQU1JLElBQU4sQ0FBV0YsUUFBUVosU0FBU0UsSUFBakIsR0FBd0JGLFNBQVNLLElBQTVDO0FBQ0EsWUFBTyxLQUFQO0FBQ0QsSUFQSCxFQVFHVSxFQVJILENBUU0sUUFSTixFQVFnQixTQUFTQyxNQUFULENBQWdCQyxDQUFoQixFQUFtQkMsTUFBbkIsRUFBMkI7QUFDdkMsU0FBSUEsV0FBVyxRQUFmLEVBQXlCO0FBQ3ZCUCxTQUFFLElBQUYsRUFBUVEsSUFBUixDQUFhLGlCQUFiLEVBQWdDQyxNQUFoQztBQUNEO0FBQ0YsSUFaSCxFQWFHTCxFQWJILENBYU0sUUFiTixFQWFnQixTQUFTTSxNQUFULENBQWdCSixDQUFoQixFQUFtQkMsTUFBbkIsRUFBMkI7QUFDdkMsU0FBSUEsV0FBVyxRQUFmLEVBQXlCO0FBQ3ZCUCxTQUFFLElBQUYsRUFBUVEsSUFBUixDQUFhLGlCQUFiLEVBQWdDRyxPQUFoQztBQUNEO0FBQ0YsSUFqQkg7QUFrQkQsRUE1QkQsQzs7Ozs7Ozs7O0FDQUEsd0I7Ozs7Ozs7QUNBQSwwQyIsImZpbGUiOiJidW5kbGUvc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNWRlOWIyZjgzNmMwYjU3YmQ2ZjBcbiAqKi8iLCJpbXBvcnQgJy4vYnVuZGxlLmNzcyc7XG5cblxuaW1wb3J0ICcuL2NvbnRlbnQtYmxvY2tzL2dyb3VwJztcbmltcG9ydCAnLi9mYXEvZ3JvdXAnO1xuXG53aW5kb3cuTW9uc3RlckJlbS51cGRhdGUoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL2J1bmRsZS9idW5kbGUuanNcbiAqKi8iLCJpbXBvcnQgJy4vY29udGVudC1ibG9jay0wMDEvYmxvY2snO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC9Vc2Vycy9iZXRocmV6ZW4vZ2l0LW15L21vbnN0ZXIvc3JjL2Jhc2UtYnVuZGxlL2J1bmRsZS9jb250ZW50LWJsb2Nrcy9ncm91cC5qc1xuICoqLyIsIndpbmRvdy5Nb25zdGVyQmVtLmJsb2NrQ2FsbGJhY2tzWydmYXEtMDAyJ10gPSBmdW5jdGlvbiBmKCkge1xuICAvKiBnbG9iYWwgcG9seWdsb3Q6IGZhbHNlICovXG4gIGNvbnN0IHNldHRpbmdzID0gdGhpcy5ibG9ja1NldHRpbmdzKHtcbiAgICBzaG93OiB0eXBlb2YgcG9seWdsb3QgIT09ICd1bmRlZmluZWQnID8gcG9seWdsb3QudCgnUmVhZCBtb3JlJykgOiAnUmVhZCBtb3JlJyxcbiAgICBoaWRlOiB0eXBlb2YgcG9seWdsb3QgIT09ICd1bmRlZmluZWQnID8gcG9seWdsb3QudCgnSGlkZScpIDogJ0hpZGUnLFxuICB9KTtcblxuICAvLyB0aGlzIGhlcmUgaXMgJCh0aGlzKSAtIGpxdWVyeSBvYmplY3Qgb2YgQkVNIGJsb2NrXG4gIGNvbnN0ICRsaW5rcyA9IHRoaXMuZWxlbSgnbGluaycpO1xuXG4gICRsaW5rc1xuICAgIC5jbGljayhmdW5jdGlvbiBjbGlja0hhbmRsZXIoKSB7XG4gICAgICBjb25zdCAkbGluayA9ICQodGhpcyk7XG4gICAgICBjb25zdCBzdGF0ZSA9ICRsaW5rLm1vZCgnYWN0aXZlJyk7XG4gICAgICAkbGluay5tb2QoJ2FjdGl2ZScsICFzdGF0ZSk7XG4gICAgICAkbGluay50ZXh0KHN0YXRlID8gc2V0dGluZ3Muc2hvdyA6IHNldHRpbmdzLmhpZGUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gICAgLm9uKCdzZXRtb2QnLCBmdW5jdGlvbiBzZXRNb2QoZSwgbW9kS2V5KSB7XG4gICAgICBpZiAobW9kS2V5ID09PSAnYWN0aXZlJykge1xuICAgICAgICAkKHRoaXMpLnByZXYoJy5mYXFfX3RleHQtaGlkZScpLmZhZGVJbigpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLm9uKCdkZWxtb2QnLCBmdW5jdGlvbiBkZWxNb2QoZSwgbW9kS2V5KSB7XG4gICAgICBpZiAobW9kS2V5ID09PSAnYWN0aXZlJykge1xuICAgICAgICAkKHRoaXMpLnByZXYoJy5mYXFfX3RleHQtaGlkZScpLmZhZGVPdXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS9idW5kbGUvZmFxL2ZhcS0wMDIvYmxvY2suanNcbiAqKi8iLCJpbXBvcnQgJy4vZmFxLTAwMi9ibG9jayc7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogL1VzZXJzL2JldGhyZXplbi9naXQtbXkvbW9uc3Rlci9zcmMvYmFzZS1idW5kbGUvYnVuZGxlL2ZhcS9ncm91cC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYmV0aHJlemVuL2dpdC1teS9tb25zdGVyL3NyYy9iYXNlLWJ1bmRsZS9idW5kbGUvYnVuZGxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9