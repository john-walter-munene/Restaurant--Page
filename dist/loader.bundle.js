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

/***/ "./src/loader.js":
/*!***********************!*\
  !*** ./src/loader.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeProject: () => (/* binding */ initializeProject)\n/* harmony export */ });\nfunction initializeProject() {\r\n    let contentHolder = document.querySelector('#content');\r\n\r\n    let homePageContent = document.createElement('div');\r\n    homePageContent.setAttribute('class', 'home-content');\r\n    \r\n    // Create a heading and add its content.\r\n    let heading = document.createElement('h1');\r\n    heading.textContent = \"Alchemist Beer Garden\";\r\n\r\n    let introText = createIntro();\r\n    let opsText = createOperationTime();\r\n    let location = createLocation();\r\n\r\n    // Add all sections to my homepage components.\r\n    homePageContent.appendChild(heading);\r\n    homePageContent.appendChild(introText);\r\n    homePageContent.appendChild(opsText);\r\n    homePageContent.appendChild(location);\r\n\r\n    // Add homepage content to content space\r\n    contentHolder.appendChild(homePageContent);\r\n    return;\r\n}\r\n\r\nfunction createIntro() {\r\n    // Create intro section and add its content.\r\n    let intro = document.createElement('div');\r\n    intro.setAttribute('class', 'intro');\r\n    let introParaOne = document.createElement('p');\r\n    introParaOne.textContent = \"In the Alchemist Beer Garden, we provide you with the best meals and drinks. Whether you\\\r\n                                want to enjoy these indoors or outdoor, we have halls and nature parks. If you'd even like \\\r\n                                to take things on the next level, we have plenty of games and recreational activities.\";\r\n    let introParaTwo = document.createElement('p');\r\n    introParaTwo.textContent = \"— Goldstars\";\r\n    intro.appendChild(introParaOne);\r\n    intro.appendChild(introParaTwo);\r\n\r\n    return intro;\r\n}\r\n\r\nfunction createOperationTime() {\r\n    // Create Operation time section.\r\n    let operationTime = document.createElement('div');\r\n    operationTime.setAttribute('class', 'operation-time');\r\n    let operationTimeHead = document.createElement('h3');\r\n    operationTimeHead.textContent = 'Hours';\r\n    let workHours = document.createElement('div');\r\n    workHours.setAttribute('class', 'work-hours');\r\n    let workHoursArray = [\r\n        \"Sunday: 9am - 9pm\",\r\n        \"Monday: 8am - 8pm\",\r\n        \"Tuesday: 8am - 8pm\",\r\n        \"Wednesday: 8am - 8pm\",\r\n        \"Thursday: 8am - 9pm\",\r\n        \"Friday: 8am - 10pm\",\r\n        \"Saturday: 9am - 10pm\",\r\n    ];\r\n\r\n    operationTime.appendChild(operationTimeHead);\r\n\r\n    for (let counter = 0; counter < workHoursArray.length; counter++) {\r\n        let para = document.createElement('p');\r\n        para.textContent = workHoursArray[counter];\r\n        workHours.appendChild(para);\r\n    }\r\n    \r\n    operationTime.appendChild(workHours);\r\n\r\n    return operationTime;\r\n}\r\n\r\nfunction createLocation() {\r\n    // Create location section and add content\r\n    let locationSection = document.createElement('div');\r\n    locationSection.setAttribute('class', 'location');\r\n    let locationHeading = document.createElement('h3');\r\n    locationHeading.textContent = 'Location';\r\n    let loactionPara = document.createElement('p');\r\n    loactionPara.textContent = \"1254, Northland streets, Nairobi, Kenya.\";\r\n    locationSection.appendChild(locationHeading);\r\n    locationSection.appendChild(loactionPara);\r\n\r\n    return locationSection;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant--page/./src/loader.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/loader.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;