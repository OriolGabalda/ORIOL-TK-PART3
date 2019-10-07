/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: react-lifecycle-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar Component = wp.element.Component; // Import the Component base class from the React.js abstraction\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n/* This section of the code registers a new block, sets an icon and a category, and indicates what type of fields it'll include. */\n\nvar el = wp.element.createElement;\n\nwp.blocks.registerBlockType('new-gutenberg-block/notice-block', {\n   title: 'Notice', // Block name visible to user\n   icon: 'lightbulb', // Toolbar icon can be either using WP Dashicons or custom SVG\n   category: 'common', // Under which category the block would appear\n   attributes: { // The data this block will be storing\n      type: { type: 'string', default: 'default' }, // Notice box type for loading the appropriate CSS class. Default class is 'default'.\n      title: { type: 'string' }, // Notice box title in h4 tag\n      content: { type: 'array', source: 'children', selector: 'p' /// Notice box content in p tag\n      } },\n   edit: function edit(props) {\n\n      function updateTitle(event) {\n         props.setAttributes({ title: event.target.value });\n      }\n      function updateContent(newdata) {\n         props.setAttributes({ content: newdata });\n      }\n      function updateType(event) {\n         props.setAttributes({ type: event.target.value });\n      }\n      return el('div', {\n         className: 'notice-box notice-' + props.attributes.type\n      }, el('select', {\n         onChange: updateType,\n         value: props.attributes.type\n      }, el(\"option\", { value: \"default\" }, \"Default\"), el(\"option\", { value: \"success\" }, \"Success\"), el(\"option\", { value: \"danger\" }, \"Danger\")), el('input', {\n         type: 'text',\n         placeholder: 'Enter title here...',\n         value: props.attributes.title,\n         onChange: updateTitle,\n         style: { width: '100%' }\n      }), el(wp.editor.RichText, {\n         tagName: 'p',\n         onChange: updateContent,\n         value: props.attributes.content,\n         placeholder: 'Enter description here...'\n      })); // End return\n   }, // End edit()\n   save: function save(props) {\n\n      return el('div', {\n         className: 'notice-box notice-' + props.attributes.type\n      }, el('h4', null, props.attributes.title), el(wp.editor.RichText.Content, {\n         tagName: 'p',\n         value: props.attributes.content\n      })); // End return\n   } // End save()\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHJlYWN0LWxpZmVjeWNsZS1ibG9ja1xuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5cbnZhciBDb21wb25lbnQgPSB3cC5lbGVtZW50LkNvbXBvbmVudDsgLy8gSW1wb3J0IHRoZSBDb21wb25lbnQgYmFzZSBjbGFzcyBmcm9tIHRoZSBSZWFjdC5qcyBhYnN0cmFjdGlvblxuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuLyogVGhpcyBzZWN0aW9uIG9mIHRoZSBjb2RlIHJlZ2lzdGVycyBhIG5ldyBibG9jaywgc2V0cyBhbiBpY29uIGFuZCBhIGNhdGVnb3J5LCBhbmQgaW5kaWNhdGVzIHdoYXQgdHlwZSBvZiBmaWVsZHMgaXQnbGwgaW5jbHVkZS4gKi9cblxudmFyIGVsID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50O1xuXG53cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUoJ25ldy1ndXRlbmJlcmctYmxvY2svbm90aWNlLWJsb2NrJywge1xuICAgdGl0bGU6ICdOb3RpY2UnLCAvLyBCbG9jayBuYW1lIHZpc2libGUgdG8gdXNlclxuICAgaWNvbjogJ2xpZ2h0YnVsYicsIC8vIFRvb2xiYXIgaWNvbiBjYW4gYmUgZWl0aGVyIHVzaW5nIFdQIERhc2hpY29ucyBvciBjdXN0b20gU1ZHXG4gICBjYXRlZ29yeTogJ2NvbW1vbicsIC8vIFVuZGVyIHdoaWNoIGNhdGVnb3J5IHRoZSBibG9jayB3b3VsZCBhcHBlYXJcbiAgIGF0dHJpYnV0ZXM6IHsgLy8gVGhlIGRhdGEgdGhpcyBibG9jayB3aWxsIGJlIHN0b3JpbmdcbiAgICAgIHR5cGU6IHsgdHlwZTogJ3N0cmluZycsIGRlZmF1bHQ6ICdkZWZhdWx0JyB9LCAvLyBOb3RpY2UgYm94IHR5cGUgZm9yIGxvYWRpbmcgdGhlIGFwcHJvcHJpYXRlIENTUyBjbGFzcy4gRGVmYXVsdCBjbGFzcyBpcyAnZGVmYXVsdCcuXG4gICAgICB0aXRsZTogeyB0eXBlOiAnc3RyaW5nJyB9LCAvLyBOb3RpY2UgYm94IHRpdGxlIGluIGg0IHRhZ1xuICAgICAgY29udGVudDogeyB0eXBlOiAnYXJyYXknLCBzb3VyY2U6ICdjaGlsZHJlbicsIHNlbGVjdG9yOiAncCcgLy8vIE5vdGljZSBib3ggY29udGVudCBpbiBwIHRhZ1xuICAgICAgfSB9LFxuICAgZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVUaXRsZShldmVudCkge1xuICAgICAgICAgcHJvcHMuc2V0QXR0cmlidXRlcyh7IHRpdGxlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiB1cGRhdGVDb250ZW50KG5ld2RhdGEpIHtcbiAgICAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoeyBjb250ZW50OiBuZXdkYXRhIH0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gdXBkYXRlVHlwZShldmVudCkge1xuICAgICAgICAgcHJvcHMuc2V0QXR0cmlidXRlcyh7IHR5cGU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbCgnZGl2Jywge1xuICAgICAgICAgY2xhc3NOYW1lOiAnbm90aWNlLWJveCBub3RpY2UtJyArIHByb3BzLmF0dHJpYnV0ZXMudHlwZVxuICAgICAgfSwgZWwoJ3NlbGVjdCcsIHtcbiAgICAgICAgIG9uQ2hhbmdlOiB1cGRhdGVUeXBlLFxuICAgICAgICAgdmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMudHlwZVxuICAgICAgfSwgZWwoXCJvcHRpb25cIiwgeyB2YWx1ZTogXCJkZWZhdWx0XCIgfSwgXCJEZWZhdWx0XCIpLCBlbChcIm9wdGlvblwiLCB7IHZhbHVlOiBcInN1Y2Nlc3NcIiB9LCBcIlN1Y2Nlc3NcIiksIGVsKFwib3B0aW9uXCIsIHsgdmFsdWU6IFwiZGFuZ2VyXCIgfSwgXCJEYW5nZXJcIikpLCBlbCgnaW5wdXQnLCB7XG4gICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICBwbGFjZWhvbGRlcjogJ0VudGVyIHRpdGxlIGhlcmUuLi4nLFxuICAgICAgICAgdmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMudGl0bGUsXG4gICAgICAgICBvbkNoYW5nZTogdXBkYXRlVGl0bGUsXG4gICAgICAgICBzdHlsZTogeyB3aWR0aDogJzEwMCUnIH1cbiAgICAgIH0pLCBlbCh3cC5lZGl0b3IuUmljaFRleHQsIHtcbiAgICAgICAgIHRhZ05hbWU6ICdwJyxcbiAgICAgICAgIG9uQ2hhbmdlOiB1cGRhdGVDb250ZW50LFxuICAgICAgICAgdmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMuY29udGVudCxcbiAgICAgICAgIHBsYWNlaG9sZGVyOiAnRW50ZXIgZGVzY3JpcHRpb24gaGVyZS4uLidcbiAgICAgIH0pKTsgLy8gRW5kIHJldHVyblxuICAgfSwgLy8gRW5kIGVkaXQoKVxuICAgc2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXG4gICAgICByZXR1cm4gZWwoJ2RpdicsIHtcbiAgICAgICAgIGNsYXNzTmFtZTogJ25vdGljZS1ib3ggbm90aWNlLScgKyBwcm9wcy5hdHRyaWJ1dGVzLnR5cGVcbiAgICAgIH0sIGVsKCdoNCcsIG51bGwsIHByb3BzLmF0dHJpYnV0ZXMudGl0bGUpLCBlbCh3cC5lZGl0b3IuUmljaFRleHQuQ29udGVudCwge1xuICAgICAgICAgdGFnTmFtZTogJ3AnLFxuICAgICAgICAgdmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMuY29udGVudFxuICAgICAgfSkpOyAvLyBFbmQgcmV0dXJuXG4gICB9IC8vIEVuZCBzYXZlKClcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);