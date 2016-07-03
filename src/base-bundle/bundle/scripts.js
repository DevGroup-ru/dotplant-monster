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
	
	__webpack_require__(27);
	
	__webpack_require__(4);
	
	__webpack_require__(6);
	
	window.MonsterBem.update();

/***/ },

/***/ 3:
/***/ function(module, exports) {

	"use strict";

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(3);

/***/ },

/***/ 5:
/***/ function(module, exports) {

	'use strict';
	
	window.MonsterBem.blockCallbacks['faq-002'] = function f() {
	  /* global polyglot: false */
	  var settings = this.blockSettings({
	    show: typeof polyglot !== 'undefined' ? polyglot.t('Read more') : 'Read more',
	    hide: typeof polyglot !== 'undefined' ? polyglot.t('Hide') : 'Hide'
	  });
	
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
	
	  // $('.faq__link-show').click(function(){
	  //   if (!$(this).hasClass('faq__link-show--active')) {
	  //     $(this).addClass('faq__link-show--active').text(textHide);
	  //     $(this).prev('.faq__text-hide').fadeIn();
	  //   } else {
	  //     $(this).removeClass('faq__link-show--active').text(textShow);
	  //     $(this).prev('.faq__text-hide').fadeOut();
	  //   }
	  //   return false;
	  // });
	};

/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(5);

/***/ },

/***/ 27:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDg3NWI4M2Q5NmRiYjY4MDdjMDc/ODE2NCIsIndlYnBhY2s6Ly8vLi9idW5kbGUvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL2J1bmRsZS9jb250ZW50LWJsb2Nrcy9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9idW5kbGUvZmFxL2ZhcS0wMDIvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vYnVuZGxlL2ZhcS9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9idW5kbGUvYnVuZGxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3RDQTs7QUFHQTs7QUFDQTs7QUFFQSxRQUFPLFVBQVAsQ0FBa0IsTUFBbEIsRzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLHdCOzs7Ozs7Ozs7QUNBQSxRQUFPLFVBQVAsQ0FBa0IsY0FBbEIsQ0FBaUMsU0FBakMsSUFBOEMsU0FBUyxDQUFULEdBQWE7O0FBRXpELE9BQU0sV0FBVyxLQUFLLGFBQUwsQ0FBbUI7QUFDbEMsV0FBTSxPQUFPLFFBQVAsS0FBb0IsV0FBcEIsR0FBa0MsU0FBUyxDQUFULENBQVcsV0FBWCxDQUFsQyxHQUE0RCxXQURoQztBQUVsQyxXQUFNLE9BQU8sUUFBUCxLQUFvQixXQUFwQixHQUFrQyxTQUFTLENBQVQsQ0FBVyxNQUFYLENBQWxDLEdBQXVEO0FBRjNCLElBQW5CLENBQWpCOztBQUtBLE9BQU0sU0FBUyxLQUFLLElBQUwsQ0FBVSxNQUFWLENBQWY7O0FBRUEsVUFDRyxLQURILENBQ1MsU0FBUyxZQUFULEdBQXdCO0FBQzdCLFNBQU0sUUFBUSxFQUFFLElBQUYsQ0FBZDtBQUNBLFNBQU0sUUFBUSxNQUFNLEdBQU4sQ0FBVSxRQUFWLENBQWQ7QUFDQSxXQUFNLEdBQU4sQ0FBVSxRQUFWLEVBQW9CLENBQUMsS0FBckI7QUFDQSxXQUFNLElBQU4sQ0FBVyxRQUFRLFNBQVMsSUFBakIsR0FBd0IsU0FBUyxJQUE1QztBQUNBLFlBQU8sS0FBUDtBQUNELElBUEgsRUFRRyxFQVJILENBUU0sUUFSTixFQVFnQixTQUFTLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsTUFBbkIsRUFBMkI7QUFDdkMsU0FBSSxXQUFXLFFBQWYsRUFBeUI7QUFDdkIsU0FBRSxJQUFGLEVBQVEsSUFBUixDQUFhLGlCQUFiLEVBQWdDLE1BQWhDO0FBQ0Q7QUFDRixJQVpILEVBYUcsRUFiSCxDQWFNLFFBYk4sRUFhZ0IsU0FBUyxNQUFULENBQWdCLENBQWhCLEVBQW1CLE1BQW5CLEVBQTJCO0FBQ3ZDLFNBQUksV0FBVyxRQUFmLEVBQXlCO0FBQ3ZCLFNBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxpQkFBYixFQUFnQyxPQUFoQztBQUNEO0FBQ0YsSUFqQkg7Ozs7Ozs7Ozs7OztBQTZCRCxFQXRDRCxDOzs7Ozs7Ozs7QUNBQSx3Qjs7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6ImJ1bmRsZS9zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAwODc1YjgzZDk2ZGJiNjgwN2MwN1xuICoqLyIsImltcG9ydCAnLi9idW5kbGUuY3NzJztcblxuXG5pbXBvcnQgJy4vY29udGVudC1ibG9ja3MvZ3JvdXAnO1xuaW1wb3J0ICcuL2ZhcS9ncm91cCc7XG5cbndpbmRvdy5Nb25zdGVyQmVtLnVwZGF0ZSgpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idW5kbGUvYnVuZGxlLmpzXG4gKiovIiwiaW1wb3J0ICcuL2NvbnRlbnQtYmxvY2stMDAxL2Jsb2NrJztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2J1bmRsZS9jb250ZW50LWJsb2Nrcy9ncm91cC5qc1xuICoqLyIsIndpbmRvdy5Nb25zdGVyQmVtLmJsb2NrQ2FsbGJhY2tzWydmYXEtMDAyJ10gPSBmdW5jdGlvbiBmKCkge1xuICAvKiBnbG9iYWwgcG9seWdsb3Q6IGZhbHNlICovXG4gIGNvbnN0IHNldHRpbmdzID0gdGhpcy5ibG9ja1NldHRpbmdzKHtcbiAgICBzaG93OiB0eXBlb2YgcG9seWdsb3QgIT09ICd1bmRlZmluZWQnID8gcG9seWdsb3QudCgnUmVhZCBtb3JlJykgOiAnUmVhZCBtb3JlJyxcbiAgICBoaWRlOiB0eXBlb2YgcG9seWdsb3QgIT09ICd1bmRlZmluZWQnID8gcG9seWdsb3QudCgnSGlkZScpIDogJ0hpZGUnLFxuICB9KTtcblxuICBjb25zdCAkbGlua3MgPSB0aGlzLmVsZW0oJ2xpbmsnKTtcblxuICAkbGlua3NcbiAgICAuY2xpY2soZnVuY3Rpb24gY2xpY2tIYW5kbGVyKCkge1xuICAgICAgY29uc3QgJGxpbmsgPSAkKHRoaXMpO1xuICAgICAgY29uc3Qgc3RhdGUgPSAkbGluay5tb2QoJ2FjdGl2ZScpO1xuICAgICAgJGxpbmsubW9kKCdhY3RpdmUnLCAhc3RhdGUpO1xuICAgICAgJGxpbmsudGV4dChzdGF0ZSA/IHNldHRpbmdzLnNob3cgOiBzZXR0aW5ncy5oaWRlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICAgIC5vbignc2V0bW9kJywgZnVuY3Rpb24gc2V0TW9kKGUsIG1vZEtleSkge1xuICAgICAgaWYgKG1vZEtleSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgICAgJCh0aGlzKS5wcmV2KCcuZmFxX190ZXh0LWhpZGUnKS5mYWRlSW4oKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5vbignZGVsbW9kJywgZnVuY3Rpb24gZGVsTW9kKGUsIG1vZEtleSkge1xuICAgICAgaWYgKG1vZEtleSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgICAgJCh0aGlzKS5wcmV2KCcuZmFxX190ZXh0LWhpZGUnKS5mYWRlT3V0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgLy8gJCgnLmZhcV9fbGluay1zaG93JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgLy8gICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2ZhcV9fbGluay1zaG93LS1hY3RpdmUnKSkge1xuICAvLyAgICAgJCh0aGlzKS5hZGRDbGFzcygnZmFxX19saW5rLXNob3ctLWFjdGl2ZScpLnRleHQodGV4dEhpZGUpO1xuICAvLyAgICAgJCh0aGlzKS5wcmV2KCcuZmFxX190ZXh0LWhpZGUnKS5mYWRlSW4oKTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZmFxX19saW5rLXNob3ctLWFjdGl2ZScpLnRleHQodGV4dFNob3cpO1xuICAvLyAgICAgJCh0aGlzKS5wcmV2KCcuZmFxX190ZXh0LWhpZGUnKS5mYWRlT3V0KCk7XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiBmYWxzZTtcbiAgLy8gfSk7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idW5kbGUvZmFxL2ZhcS0wMDIvYmxvY2suanNcbiAqKi8iLCJpbXBvcnQgJy4vZmFxLTAwMi9ibG9jayc7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idW5kbGUvZmFxL2dyb3VwLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYnVuZGxlL2J1bmRsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==