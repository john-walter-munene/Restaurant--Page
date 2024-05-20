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

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showContact: () => (/* binding */ showContact)\n/* harmony export */ });\nclass Contact {\r\n    constructor (name, role, number, email) {\r\n        this.name = name;\r\n        this.role = role; \r\n        this.number= number;\r\n        this.email = email;\r\n    }\r\n\r\n    renderContactComponent() {\r\n        let contactCompnent = document.createElement('div');\r\n        contactCompnent.setAttribute('class', 'contact-item');\r\n\r\n        let contactHeading = document.createElement('h3');\r\n        contactHeading.textContent = this.name;\r\n\r\n        let contactRole = document.createElement('p');\r\n        contactRole.textContent = this.role;\r\n\r\n        let contactDigits = document.createElement('p');\r\n        contactDigits.textContent = this.number;\r\n\r\n        let contactEmail = document.createElement('p');\r\n        contactEmail.textContent = this.email;\r\n\r\n        contactCompnent.appendChild(contactHeading);\r\n        contactCompnent.appendChild(contactRole);\r\n        contactCompnent.appendChild(contactDigits);\r\n        contactCompnent.appendChild(contactEmail);\r\n\r\n        return contactCompnent;\r\n    }\r\n}\r\n\r\nlet alchemistCeo = new Contact('Pikk Better', 'CEO', '0726723013', 'alchemistceo@gmail.com');\r\nlet alchemistChef = new Contact('Midway Master', 'Chef', '0726723013', 'alchemistchef@gmail.com');\r\nlet alchemistManager = new Contact('Goldenstar921', 'Manager', '0726723013', 'alchemistmanager@gmail.com');\r\n\r\nlet alchemistContacts = [alchemistCeo, alchemistChef, alchemistManager];\r\n\r\nfunction showContact() {\r\n    let contentHolder = document.querySelector('#content');\r\n\r\n    // Contact content holder\r\n    let contactContent = document.createElement('div');\r\n    contactContent.setAttribute('class', 'contact-content');\r\n\r\n    //  Create a contacts heading and its content\r\n    let heading = document.createElement('h1');\r\n    heading.textContent = \"Contact Us\";\r\n    contactContent.appendChild(heading);\r\n\r\n    // Add all contacts to contact content holder\r\n    for (let counter = 0; counter < alchemistContacts.length; counter++) {\r\n        let individualContact = alchemistContacts[counter];\r\n        let individualContactContent = individualContact.renderContactComponent();\r\n        contactContent.appendChild(individualContactContent);\r\n    }\r\n\r\n    contentHolder.appendChild(contactContent);\r\n    return;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant--page/./src/contacts.js?");

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
/******/ 	__webpack_modules__["./src/contacts.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;