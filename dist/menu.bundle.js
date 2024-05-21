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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showMenu: () => (/* binding */ showMenu)\n/* harmony export */ });\n/* harmony import */ var _Images_beers_brothersBond_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Images/beers/brothersBond.jpeg */ \"./src/Images/beers/brothersBond.jpeg\");\n/* harmony import */ var _Images_beers_woodFord_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Images/beers/woodFord.jpeg */ \"./src/Images/beers/woodFord.jpeg\");\n/* harmony import */ var _Images_beers_bulleitBourbon_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Images/beers/bulleitBourbon.jpeg */ \"./src/Images/beers/bulleitBourbon.jpeg\");\n/* harmony import */ var _Images_beverages_beerPlaceTea_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Images/beverages/beerPlaceTea.jpg */ \"./src/Images/beverages/beerPlaceTea.jpg\");\n/* harmony import */ var _Images_beverages_honeyTea_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Images/beverages/honeyTea.jpeg */ \"./src/Images/beverages/honeyTea.jpeg\");\n/* harmony import */ var _Images_sides_toastAndJam_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Images/sides/toastAndJam.jpeg */ \"./src/Images/sides/toastAndJam.jpeg\");\n/* harmony import */ var _Images_sides_freshFruit_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Images/sides/freshFruit.jpeg */ \"./src/Images/sides/freshFruit.jpeg\");\n/* harmony import */ var _Images_mains_classicCheeseBugger_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Images/mains/classicCheeseBugger.jpg */ \"./src/Images/mains/classicCheeseBugger.jpg\");\n/* harmony import */ var _Images_mains_grilledChicken_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Images/mains/grilledChicken.jpg */ \"./src/Images/mains/grilledChicken.jpg\");\n/* harmony import */ var _Images_mains_spaghettiCarbonara_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Images/mains/spaghettiCarbonara.jpg */ \"./src/Images/mains/spaghettiCarbonara.jpg\");\n/* harmony import */ var _Images_mains_veggieDelightPizza_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Images/mains/veggieDelightPizza.jpg */ \"./src/Images/mains/veggieDelightPizza.jpg\");\n// Import all image assets.\r\n// beers\r\n\r\n\r\n\r\n\r\n// Beverages\r\n\r\n\r\n// Side dishes\r\n\r\n\r\n// Main dishes\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Food {\r\n    constructor(name, description, price, imagePath) {\r\n        this.name = name;\r\n        this.description = description;\r\n        this.price = price;\r\n        this.imagePath = imagePath;\r\n    }\r\n\r\n    renderFoodComponent() {\r\n        let foodComponent = document.createElement('div');\r\n        foodComponent.setAttribute('class', 'food-item');\r\n\r\n        let foodHeading = document.createElement('h3');\r\n        foodHeading.textContent = this.name;\r\n\r\n        let foodDescription = document.createElement('p');\r\n        foodDescription.setAttribute('class', 'description');\r\n        foodDescription.textContent = this.description;\r\n\r\n        let foodPrice = document.createElement('p');\r\n        foodPrice.setAttribute('class', 'price');\r\n        foodPrice.textContent = this.price;\r\n\r\n        foodComponent.appendChild(foodHeading);\r\n        foodComponent.appendChild(foodDescription);\r\n        foodComponent.appendChild(foodPrice);\r\n\r\n        foodComponent.appendChild(this.getImage());\r\n\r\n        return foodComponent;\r\n    }\r\n\r\n    getImage() {\r\n      const myImage = new Image();\r\n      myImage.src = this.imagePath;\r\n      myImage.setAttribute('class', 'menu-img');\r\n     return myImage;   \r\n    }\r\n}\r\n\r\n// Create Beers store and stock it...\r\nlet beers = ['Beers',];\r\nlet brothersBond = new Food (\r\n    \"Brother's Bond Bourbon\",\r\n    \"A smooth and flavorful bourbon with hints of vanilla and caramel, handcrafted by Brother's Bond Spirits.\",\r\n    \"39.99 USD\",\r\n    _Images_beers_brothersBond_jpeg__WEBPACK_IMPORTED_MODULE_0__,\r\n);\r\n\r\nlet woodFord = new Food (\r\n    \"Woodford Reserve Bourbon\",\r\n    \"A premium bourbon known for its balanced flavor profile and smooth finish, produced by Woodford Reserve Distillery.\",\r\n    \"29.99 USD\",\r\n    _Images_beers_woodFord_jpeg__WEBPACK_IMPORTED_MODULE_1__,\r\n);\r\n\r\nlet bulletBeer = new Food (\r\n    \"Bulleit Bourbon\",\r\n    \"A distinctive bourbon with a high rye content, offering a bold and spicy flavor profile, crafted by Bulleit Distilling Co.\",\r\n    \"24.99 USD\",\r\n    _Images_beers_bulleitBourbon_jpeg__WEBPACK_IMPORTED_MODULE_2__,\r\n);\r\n\r\nlet makersMark = new Food (\r\n    \"Maker's Mark Bourbon\",\r\n    \"An iconic bourbon with a sweet and mellow taste, featuring a hand-dipped red wax seal, produced by Maker's Mark Distillery.\",\r\n    \"27.99 USD\",\r\n    _Images_beers_woodFord_jpeg__WEBPACK_IMPORTED_MODULE_1__,\r\n);\r\n\r\nbeers.push(brothersBond, woodFord, bulletBeer, makersMark);\r\n\r\n//  Create beverages\r\nlet beverages = ['Beverages',];\r\nlet honeyTea = new Food (\r\n    \"Honey Tea\",\r\n    \"A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!\",\r\n    \"2.99 USD\",\r\n    _Images_beverages_honeyTea_jpeg__WEBPACK_IMPORTED_MODULE_4__,\r\n);\r\n\r\nlet beerPlaceTea = new Food (\r\n    \"Beer Place Tea\",\r\n    \"A comforting, almost filling, tea that is infused with the flavors of several kinds of berries.\\\r\n    Best served cold, but can be served hot on request.\",\r\n    \"3.50 USD\",\r\n    _Images_beverages_beerPlaceTea_jpg__WEBPACK_IMPORTED_MODULE_3__,\r\n);\r\n\r\nbeverages.push(honeyTea, beerPlaceTea);\r\n\r\n// Create Side Dishes\r\nlet sideDishes = ['Sides',];\r\nlet toastAndJam = new Food(\r\n    \"Toast and Jam\",\r\n    \"A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.\",\r\n    \"1.99 USD\",\r\n    _Images_sides_toastAndJam_jpeg__WEBPACK_IMPORTED_MODULE_5__,\r\n);\r\n\r\nlet freshFruit = new Food (\r\n    \"Fresh Fruit\",\r\n    \"A small bowl of fresh fruit, whatever we find at the market for the day.\",\r\n    \"3.60 USD\",\r\n    _Images_sides_freshFruit_jpeg__WEBPACK_IMPORTED_MODULE_6__,\r\n);\r\n\r\nsideDishes.push(toastAndJam, freshFruit);\r\n\r\n// Create Main Dishes\r\nlet mainDishes = ['Main Dishes'];\r\n\r\nlet grilledChicken = new Food (\r\n    \"Grilled Chicken Salad\",\r\n    \"A fresh and vibrant salad featuring grilled chicken, mixed greens, cherry tomatoes,\\\r\n    cucumbers, and a light balsamic vinaigrette. Perfect for a healthy and satisfying meal.\",\r\n    \"50.99 USD\",\r\n    _Images_mains_grilledChicken_jpg__WEBPACK_IMPORTED_MODULE_8__,\r\n);\r\n\r\nlet cheeseBurger = new Food (\r\n    \"Classic Cheeseburger\",\r\n    \"A juicy beef patty topped with melted cheddar cheese, lettuce, tomato, onion, and pickles,\\\r\n    all nestled in a toasted sesame seed bun. Served with a side of crispy fries.\",\r\n    \"15.99 USD\",\r\n    _Images_mains_classicCheeseBugger_jpg__WEBPACK_IMPORTED_MODULE_7__,\r\n);\r\n\r\nlet delightPizza = new Food (\r\n    \"Veggie Delight Pizza\",\r\n    \"A colorful pizza topped with a variety of fresh vegetables including bell peppers, onions,\\\r\n    mushrooms, and olives, finished with a sprinkle of mozzarella cheese. Available with a \\\r\n    gluten-free crust upon request.\", \r\n    \"12.99 USD\",\r\n    _Images_mains_veggieDelightPizza_jpg__WEBPACK_IMPORTED_MODULE_10__,\r\n);\r\n\r\nlet spaghettiCarbo = new Food (\r\n    \"Spaghetti Carbonara\",\r\n    \"A rich and creamy pasta dish made with spaghetti, pancetta, eggs, and Parmesan cheese.\\\r\n    Garnished with fresh parsley and black pepper for a comforting and indulgent experience.\",\r\n    \"11.99 USD\",\r\n    _Images_mains_spaghettiCarbonara_jpg__WEBPACK_IMPORTED_MODULE_9__,\r\n);\r\n\r\nmainDishes.push(grilledChicken, cheeseBurger, delightPizza, spaghettiCarbo,);\r\n\r\nfunction showMenu () {\r\n    let contentHolder = document.querySelector('#content');\r\n\r\n    // Create a Menu holder.\r\n    let menuContent = document.createElement('div');\r\n    menuContent.setAttribute('class', 'menu-content');\r\n\r\n    // Create a heading and add its content.\r\n    let heading = document.createElement('h1');\r\n    heading.textContent = \"Alchemist Beer Garden Menu\";\r\n    menuContent.appendChild(heading);\r\n\r\n    // Cosolidate all foods in one place and show meal types.\r\n    let availableFoods = [beers, beverages, sideDishes, mainDishes,];\r\n    for (let counter = 0; counter < availableFoods.length; counter++) {\r\n\r\n        // Create a heading for categories.\r\n        let foodTypeHeading = document.createElement('h2');\r\n        foodTypeHeading.textContent = availableFoods[counter][0];\r\n        foodTypeHeading.setAttribute('class', 'menu-heading');\r\n\r\n        // Add heading to content space.\r\n        menuContent.appendChild(foodTypeHeading);\r\n\r\n        // Get individual food components.\r\n        for (let foodCounter = 1; foodCounter < availableFoods[counter].length; foodCounter++) {\r\n            let individualFood = availableFoods[counter][foodCounter];\r\n            let individualFoodContent = individualFood.renderFoodComponent();\r\n            menuContent.appendChild(individualFoodContent);\r\n        }\r\n    }\r\n\r\n    contentHolder.appendChild(menuContent);\r\n    return;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant--page/./src/menu.js?");

/***/ }),

/***/ "./src/Images/beers/brothersBond.jpeg":
/*!********************************************!*\
  !*** ./src/Images/beers/brothersBond.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"886ca9f4119ee25bf160.jpeg\";\n\n//# sourceURL=webpack://restaurant--page/./src/Images/beers/brothersBond.jpeg?");

/***/ }),

/***/ "./src/Images/beers/bulleitBourbon.jpeg":
/*!**********************************************!*\
  !*** ./src/Images/beers/bulleitBourbon.jpeg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d6b9a0dc1e032a38aff2.jpeg\";\n\n//# sourceURL=webpack://restaurant--page/./src/Images/beers/bulleitBourbon.jpeg?");

/***/ }),

/***/ "./src/Images/beers/woodFord.jpeg":
/*!****************************************!*\
  !*** ./src/Images/beers/woodFord.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a479fd18398a23583bcf.jpeg\";\n\n//# sourceURL=webpack://restaurant--page/./src/Images/beers/woodFord.jpeg?");

/***/ }),

/***/ "./src/Images/beverages/beerPlaceTea.jpg":
/*!***********************************************!*\
  !*** ./src/Images/beverages/beerPlaceTea.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8fb0198774e95232711c.jpg\";\n\n//# sourceURL=webpack://restaurant--page/./src/Images/beverages/beerPlaceTea.jpg?");

/***/ }),

/***/ "./src/Images/beverages/honeyTea.jpeg":
/*!********************************************!*\
  !*** ./src/Images/beverages/honeyTea.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1c0295555c628ef00ad2.jpeg\";\n\n//# sourceURL=webpack://restaurant--page/./src/Images/beverages/honeyTea.jpeg?");

/***/ }),

/***/ "./src/Images/mains/classicCheeseBugger.jpg":
/*!**************************************************!*\
  !*** ./src/Images/mains/classicCheeseBugger.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ac1c491952c58f261b39.jpg\";\n\n//# sourceURL=webpack://restaurant--page/./src/Images/mains/classicCheeseBugger.jpg?");

/***/ }),

/***/ "./src/Images/mains/grilledChicken.jpg":
/*!*********************************************!*\
  !*** ./src/Images/mains/grilledChicken.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e0a2c5272027016a2359.jpg\";\n\n//# sourceURL=webpack://restaurant--page/./src/Images/mains/grilledChicken.jpg?");

/***/ }),

/***/ "./src/Images/mains/spaghettiCarbonara.jpg":
/*!*************************************************!*\
  !*** ./src/Images/mains/spaghettiCarbonara.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3d1b81364f51503424be.jpg\";\n\n//# sourceURL=webpack://restaurant--page/./src/Images/mains/spaghettiCarbonara.jpg?");

/***/ }),

/***/ "./src/Images/mains/veggieDelightPizza.jpg":
/*!*************************************************!*\
  !*** ./src/Images/mains/veggieDelightPizza.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"875dae6e9cd727a80e30.jpg\";\n\n//# sourceURL=webpack://restaurant--page/./src/Images/mains/veggieDelightPizza.jpg?");

/***/ }),

/***/ "./src/Images/sides/freshFruit.jpeg":
/*!******************************************!*\
  !*** ./src/Images/sides/freshFruit.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e7678e571296e3611049.jpeg\";\n\n//# sourceURL=webpack://restaurant--page/./src/Images/sides/freshFruit.jpeg?");

/***/ }),

/***/ "./src/Images/sides/toastAndJam.jpeg":
/*!*******************************************!*\
  !*** ./src/Images/sides/toastAndJam.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bd3cf19a693f87a8c7ce.jpeg\";\n\n//# sourceURL=webpack://restaurant--page/./src/Images/sides/toastAndJam.jpeg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;