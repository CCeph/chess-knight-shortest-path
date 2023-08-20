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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _commonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commonUtils.js */ \"./src/commonUtils.js\");\n// eslint-disable-next-line import/extensions\n\n\nconsole.log(_commonUtils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nconst gameBoard = {\n  prettyPrint(node, prefix = \"\", isLeft = true) {\n    if (node === null) {\n      return;\n    }\n    if (node.right !== null) {\n      this.prettyPrint(\n        node.right,\n        `${prefix}${isLeft ? \"│   \" : \"    \"}`,\n        false\n      );\n    }\n    console.log(`${prefix}${isLeft ? \"└── \" : \"┌── \"}${node.data}`);\n    if (node.left !== null) {\n      this.prettyPrint(node.left, `${prefix}${isLeft ? \"    \" : \"│   \"}`, true);\n    }\n  },\n\n  createKnightNode(position, parentNode) {\n    const possibleMoves = [\n      { x: position.x + 1, y: position.y + 2 },\n      { x: position.x + 2, y: position.y + 1 },\n      { x: position.x + 2, y: position.y - 1 },\n      { x: position.x + 1, y: position.y - 2 },\n      { x: position.x - 1, y: position.y - 2 },\n      { x: position.x - 2, y: position.y - 1 },\n      { x: position.x - 2, y: position.y + 1 },\n      { x: position.x - 1, y: position.y + 2 },\n    ];\n\n    return { position, possibleMoves, parentNode };\n  },\n\n  createGameBoardTree(knightPosition) {\n    return { root: this.createKnightNode(knightPosition, null) };\n  },\n\n  depth(node) {\n    let currentNode = node;\n    let depth = 0;\n\n    while (currentNode !== null) {\n      depth += 1;\n      currentNode = currentNode.parentNode;\n    }\n    return depth;\n  },\n\n  storePathToNode(node) {\n    const pathArray = [];\n    let currentNode = node;\n\n    while (currentNode !== null) {\n      pathArray.push(currentNode.position);\n      currentNode = currentNode.parentNode;\n    }\n    pathArray.reverse();\n    return pathArray;\n  },\n\n  createBranch(\n    branchRoot,\n    moveSet,\n    moveIndex,\n    currentShortestPath,\n    targetPosition\n  ) {\n    // Base case 1\n    const branchRootDepth = this.depth(branchRoot);\n    const moveName = `move${moveIndex}`;\n    let shortestPath = {\n      length: currentShortestPath.length,\n      path: currentShortestPath.path,\n    };\n    if (branchRootDepth >= shortestPath.length || branchRootDepth > 6) {\n      // eslint-disable-next-line no-param-reassign\n      branchRoot[moveName] = \"Branch too long\";\n      return shortestPath;\n    }\n\n    // Base case 2\n    const newPosition = moveSet;\n    if (newPosition.x > 8 || newPosition.y > 8) {\n      // eslint-disable-next-line no-param-reassign\n      branchRoot[moveName] = \"Off of board\";\n      return shortestPath;\n    }\n\n    // eslint-disable-next-line no-param-reassign\n    const newChild = this.createKnightNode(newPosition, branchRoot);\n    // eslint-disable-next-line no-param-reassign\n    branchRoot[moveName] = newChild;\n\n    // Base case 3\n    if (\n      newPosition.x === targetPosition.x &&\n      newPosition.y === targetPosition.y\n    ) {\n      shortestPath.length = branchRootDepth + 1;\n      shortestPath.path = this.storePathToNode(newChild);\n      return shortestPath;\n    }\n\n    newChild.possibleMoves.forEach((move, childMoveIndex) => {\n      // eslint-disable-next-line no-param-reassign\n      shortestPath = this.createBranch(\n        newChild,\n        move,\n        childMoveIndex,\n        shortestPath,\n        targetPosition\n      );\n    });\n    return shortestPath;\n  },\n\n  findShortestPath(currentBoard, targetPosition) {\n    let currentShortestPath = { length: 7, path: [] };\n\n    currentBoard.root.possibleMoves.forEach((move, moveIndex) => {\n      currentShortestPath = this.createBranch(\n        currentBoard.root,\n        move,\n        moveIndex,\n        currentShortestPath,\n        targetPosition\n      );\n      console.log(currentShortestPath);\n    });\n\n    console.log(currentBoard);\n    console.log(currentShortestPath);\n    // Create branch 1\n\n    // Create branch 2\n\n    // Create branch 3\n\n    // Create branch 4\n\n    // Create branch 5\n\n    // Create branch 6\n\n    // Create branch 7\n\n    // Create branch 8\n  },\n\n  knightMoves(startPosition, endPosition) {\n    const currentBoard = this.createGameBoardTree(startPosition);\n    this.findShortestPath(currentBoard, endPosition);\n  },\n};\n\ngameBoard.knightMoves({ x: 4, y: 4 }, { x: 1, y: 8 });\n\n// 1,8\n\n\n//# sourceURL=webpack://webpack_eslint_prettier_template/./src/index.js?");

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