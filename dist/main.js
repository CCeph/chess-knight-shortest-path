/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/commonUtils.js":
/*!****************************!*\
  !*** ./src/commonUtils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mergeSort = {\n  splitArrayInHalf(unsortedArray) {\n    let leftSideMidPoint;\n    let rightSideMidPoint;\n\n    if (unsortedArray.length % 2 === 1) {\n      leftSideMidPoint = Math.floor(unsortedArray.length / 2);\n      rightSideMidPoint = Math.ceil(unsortedArray.length / 2);\n    } else {\n      leftSideMidPoint = unsortedArray.length / 2 - 1;\n      rightSideMidPoint = unsortedArray.length / 2;\n    }\n\n    const leftArray = unsortedArray.slice(0, leftSideMidPoint + 1);\n    const rightArray = unsortedArray.slice(\n      rightSideMidPoint,\n      unsortedArray.length\n    );\n\n    return { leftArray, rightArray };\n  },\n\n  mergeSortedArrays(sortedLeftArray, sortedRightArray) {\n    let sortedArray = [];\n\n    while (sortedLeftArray.length > 0 || sortedRightArray.length > 0) {\n      // Check if either side is empty, then add everything from the other side to save time.\n      if (sortedLeftArray.length === 0) {\n        sortedArray = sortedArray.concat(sortedRightArray);\n        // eslint-disable-next-line no-param-reassign\n        sortedRightArray = [];\n        break;\n      } else if (sortedRightArray.length === 0) {\n        sortedArray = sortedArray.concat(sortedLeftArray);\n        // eslint-disable-next-line no-param-reassign\n        sortedLeftArray = [];\n        break;\n      }\n\n      if (sortedLeftArray[0] < sortedRightArray[0]) {\n        sortedArray.push(sortedLeftArray[0]);\n        sortedLeftArray.shift();\n      } else {\n        sortedArray.push(sortedRightArray[0]);\n        sortedRightArray.shift();\n      }\n    }\n\n    return sortedArray;\n  },\n\n  sort(unsortedArray) {\n    if (unsortedArray.length <= 1) {\n      const sortedArray = unsortedArray;\n      return sortedArray;\n    }\n\n    const halvedArrays = this.splitArrayInHalf(unsortedArray);\n\n    const { leftArray, rightArray } = halvedArrays;\n\n    const sortedLeftArray = this.sort(leftArray);\n    const sortedRightArray = this.sort(rightArray);\n\n    return this.mergeSortedArrays(sortedLeftArray, sortedRightArray);\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mergeSort);\n\n\n//# sourceURL=webpack://webpack_eslint_prettier_template/./src/commonUtils.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _commonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commonUtils.js */ \"./src/commonUtils.js\");\n// eslint-disable-next-line import/extensions\n\n\nconsole.log(_commonUtils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://webpack_eslint_prettier_template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;