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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showMenu: () => (/* binding */ showMenu)\n/* harmony export */ });\nclass Food {\r\n    constructor(name, description, price) {\r\n        this.name = name;\r\n        this.description = description;\r\n        this.price = price;\r\n    }\r\n\r\n    renderFoodComponent() {\r\n        let foodComponent = document.createElement('div');\r\n        foodComponent.setAttribute('class', 'food-item');\r\n\r\n        let foodHeading = document.createElement('h3');\r\n        foodHeading.textContent = this.name;\r\n\r\n        let foodDescription = document.createElement('p');\r\n        foodDescription.setAttribute('class', 'description');\r\n        foodDescription.textContent = this.description;\r\n\r\n        let foodPrice = document.createElement('p');\r\n        foodPrice.setAttribute('class', 'price');\r\n        foodPrice.textContent = this.price;\r\n\r\n        foodComponent.appendChild(foodHeading);\r\n        foodComponent.appendChild(foodDescription);\r\n        foodComponent.appendChild(foodPrice);\r\n\r\n        return foodComponent;\r\n    };\r\n}\r\n\r\n// Create Beers store and stock it...\r\nlet beers = ['Beers',];\r\nlet brothersBond = new Food (\r\n    \"Brother's Bond Bourbon\",\r\n    \"A smooth and flavorful bourbon with hints of vanilla and caramel, handcrafted by Brother's Bond Spirits.\",\r\n    \"39.99 USD\",\r\n);\r\n\r\nlet woodFord = new Food (\r\n    \"Woodford Reserve Bourbon\",\r\n    \"A premium bourbon known for its balanced flavor profile and smooth finish, produced by Woodford Reserve Distillery.\",\r\n    \"29.99 USD\",\r\n);\r\n\r\nlet bulletBeer = new Food (\r\n    \"Bulleit Bourbon\",\r\n    \"A distinctive bourbon with a high rye content, offering a bold and spicy flavor profile, crafted by Bulleit Distilling Co.\",\r\n    \"24.99 USD\",\r\n);\r\n\r\nlet makersMark = new Food (\r\n    \"Maker's Mark Bourbon\",\r\n    \"An iconic bourbon with a sweet and mellow taste, featuring a hand-dipped red wax seal, produced by Maker's Mark Distillery.\",\r\n    \"27.99 USD\",\r\n);\r\n\r\nbeers.push(brothersBond, woodFord, bulletBeer, makersMark);\r\n\r\n//  Create beverages\r\nlet beverages = ['Beverages',];\r\nlet honeyTea = new Food (\r\n    \"Honey Tea\",\r\n    \"A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!\",\r\n    \"2.99 USD\",\r\n);\r\n\r\nlet beerPlaceTea = new Food (\r\n    \"Beer Place Tea\",\r\n    \"A comforting, almost filling, tea that is infused with the flavors of several kinds of berries.\\\r\n    Best served cold, but can be served hot on request.\",\r\n    \"3.50 USD\",\r\n);\r\n\r\nbeverages.push(honeyTea, beerPlaceTea);\r\n\r\n// Create Side Dishes\r\nlet sideDishes = ['Sides',];\r\nlet toastAndJam = new Food(\r\n    \"Toast and Jam\",\r\n    \"A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.\",\r\n    \"1.99 USD\",\r\n);\r\n\r\nlet freshFruit = new Food (\r\n    \"Fresh Fruit\",\r\n    \"A small bowl of fresh fruit, whatever we find at the market for the day.\",\r\n    \"3.60 USD\",\r\n);\r\n\r\nsideDishes.push(toastAndJam, freshFruit);\r\n\r\n// Create Main Dishes\r\nlet mainDishes = ['Main Dishes'];\r\n\r\nlet grilledChicken = new Food (\r\n    \"Grilled Chicken Salad\",\r\n    \"A fresh and vibrant salad featuring grilled chicken, mixed greens, cherry tomatoes,\\\r\n    cucumbers, and a light balsamic vinaigrette. Perfect for a healthy and satisfying meal.\",\r\n    \"50.99 USD\",\r\n);\r\n\r\nlet cheeseBurger = new Food (\r\n    \"Classic Cheeseburger\",\r\n    \"A juicy beef patty topped with melted cheddar cheese, lettuce, tomato, onion, and pickles,\\\r\n    all nestled in a toasted sesame seed bun. Served with a side of crispy fries.\",\r\n    \"15.99 USD\",\r\n);\r\n\r\nlet delightPizza = new Food (\r\n    \"Veggie Delight Pizza\",\r\n    \"A colorful pizza topped with a variety of fresh vegetables including bell peppers, onions,\\\r\n    mushrooms, and olives, finished with a sprinkle of mozzarella cheese. Available with a \\\r\n    gluten-free crust upon request.\", \r\n    \"12.99 USD\",\r\n);\r\n\r\nlet spaghettiCarbo = new Food (\r\n    \"Spaghetti Carbonara\",\r\n    \"A rich and creamy pasta dish made with spaghetti, pancetta, eggs, and Parmesan cheese.\\\r\n    Garnished with fresh parsley and black pepper for a comforting and indulgent experience.\",\r\n    \"11.99 USD\",\r\n);\r\n\r\nmainDishes.push(grilledChicken, cheeseBurger, delightPizza, spaghettiCarbo,);\r\n\r\nfunction showMenu () {\r\n    let contentHolder = document.querySelector('#content');\r\n\r\n    // Create a Menu holder.\r\n    let menuContent = document.createElement('div');\r\n    menuContent.setAttribute('class', 'menu-content');\r\n\r\n    // Create a heading and add its content.\r\n    let heading = document.createElement('h1');\r\n    heading.textContent = \"Alchemist Beer Garden Menu\";\r\n    menuContent.appendChild(heading);\r\n\r\n    // Cosolidate all foods in one place and show meal types.\r\n    let availableFoods = [beers, beverages, sideDishes, mainDishes,];\r\n    for (let counter = 0; counter < availableFoods.length; counter++) {\r\n\r\n        // Create a heading for categories.\r\n        let foodTypeHeading = document.createElement('h2');\r\n        foodTypeHeading.textContent = availableFoods[counter][0];\r\n        foodTypeHeading.setAttribute('class', 'menu-heading');\r\n\r\n        // Add heading to content space.\r\n        menuContent.appendChild(foodTypeHeading);\r\n\r\n        // Get individual food components.\r\n        for (let foodCounter = 1; foodCounter < availableFoods[counter].length; foodCounter++) {\r\n            let individualFood = availableFoods[counter][foodCounter];\r\n            let individualFoodContent = individualFood.renderFoodComponent();\r\n            menuContent.appendChild(individualFoodContent);\r\n        }\r\n    }\r\n\r\n    contentHolder.appendChild(menuContent);\r\n    return;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant--page/./src/menu.js?");

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
/******/ 	__webpack_modules__["./src/menu.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;