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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort */ \"./src/sort.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\r\n\r\nconst menubar = document.querySelector('.menusvg');\r\nconst sidebar = document.querySelector('.sidebar');\r\nconst maincontent = document.querySelector('.maincontent');\r\nconst sidebarbuttons = document.querySelectorAll('.buttons>button');\r\nconst plusbutton = document.querySelector('.addicondiv');\r\nconst dialog = document.querySelector('dialog');\r\nconst cancel = document.querySelector('.cancelbtn');\r\nconst addform = document.querySelector('.addbtn');\r\nlet listarray = [];\r\nlet titleinput = document.querySelector('#title');\r\nlet duedateinput = document.querySelector('#duedate');\r\nlet desrciptioninput = document.querySelector('#description');\r\nconst renderdiv = document.querySelector(\".todolist\");\r\n\r\n\r\nclass listobj{\r\n    constructor(title,due_date){\r\n        this.title = title;\r\n        this.due_date = due_date;\r\n    }\r\n}\r\n\r\n// To make sidebar open and collapse when menu button is pressed\r\nmenubar.addEventListener('click',function(){\r\n    sidebar.classList.toggle('visible')\r\n    maincontent.classList.toggle('adjustmaincontent')\r\n})\r\n\r\n\r\n// To make the button that was recently clicked change font and bg color\r\nfor (let button of sidebarbuttons){\r\n    button.addEventListener('click',function(e){\r\n        if (this.classList[1][1]=='0'){\r\n            sidebarbuttons[2].classList.remove('active');\r\n            sidebarbuttons[1].classList.remove('active');\r\n        }\r\n        if (this.classList[1][1]=='1'){\r\n            sidebarbuttons[0].classList.remove('active');\r\n            sidebarbuttons[2].classList.remove('active');\r\n        } \r\n        if (this.classList[1][1]=='2'){\r\n            sidebarbuttons[0].classList.remove('active');\r\n            sidebarbuttons[1].classList.remove('active');\r\n        }\r\n        button.classList.add('active');\r\n    })\r\n}\r\n\r\n// To add Todo's\r\nplusbutton.addEventListener('click',()=>dialog.showModal());\r\n\r\n// To close form\r\n\r\ncancel.addEventListener('click',()=>dialog.close());\r\n\r\n// To retrieve data entered submitted to the form\r\n\r\naddform.addEventListener('click',function(event){\r\n    event.preventDefault();\r\n    let obj = new listobj(titleinput.value,duedateinput.value);\r\n    listarray.push(obj);\r\n    dialog.close();\r\n    listarray = (0,_sort__WEBPACK_IMPORTED_MODULE_0__.sortarray)(listarray);\r\n    titleinput.value = '';\r\n    duedateinput.value = '';\r\n    desrciptioninput.value= '';\r\n    (0,_render__WEBPACK_IMPORTED_MODULE_1__.render)(listarray);\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://gotodo/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\nfunction render(arrays){\r\n    const renderdiv = document.querySelector('.todolist');\r\n    while (renderdiv.firstElementChild){\r\n        renderdiv.removeChild(renderdiv.firstElementChild);\r\n    }\r\n    for (let array of arrays){\r\n        const divlistitem = document.createElement('div');\r\n        divlistitem.classList.add('listitem');\r\n        divlistitem.innerHTML += `\r\n        <span> ${array.title}</span>\r\n        <span> ${array.due_date} </span>\r\n        <span><svg class='trash' xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"25\" height=\"25\" viewBox=\"0 0 64 64\" fill=rgb(255,255,255)>\r\n        <path d=\"M 28 6 C 25.791 6 24 7.791 24 10 L 24 12 L 23.599609 12 L 10 14 L 10 17 L 54 17 L 54 14 L 40.400391 12 L 40 12 L 40 10 C 40 7.791 38.209 6 36 6 L 28 6 z M 28 10 L 36 10 L 36 12 L 28 12 L 28 10 z M 12 19 L 14.701172 52.322266 C 14.869172 54.399266 16.605453 56 18.689453 56 L 45.3125 56 C 47.3965 56 49.129828 54.401219 49.298828 52.324219 L 51.923828 20 L 12 19 z M 20 26 C 21.105 26 22 26.895 22 28 L 22 51 L 19 51 L 18 28 C 18 26.895 18.895 26 20 26 z M 32 26 C 33.657 26 35 27.343 35 29 L 35 51 L 29 51 L 29 29 C 29 27.343 30.343 26 32 26 z M 44 26 C 45.105 26 46 26.895 46 28 L 45 51 L 42 51 L 42 28 C 42 26.895 42.895 26 44 26 z\"></path>\r\n        </svg>\r\n        </span>\r\n        `\r\n        renderdiv.append(divlistitem);\r\n    }\r\n}\n\n//# sourceURL=webpack://gotodo/./src/render.js?");

/***/ }),

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sortarray: () => (/* binding */ sortarray)\n/* harmony export */ });\nfunction sortarray(arrays){\r\n    let placeholder;\r\n    for (let i=0;i<arrays.length;i++){\r\n        for (let j=i+1;j<arrays.length;j++){\r\n            if (arrays[i].due_date > arrays[j].due_date){\r\n                placeholder = arrays[i];\r\n                arrays[i] = arrays[j];\r\n                arrays[j] = placeholder\r\n            }\r\n            else{\r\n                continue;\r\n            }\r\n        }\r\n    }\r\n    return arrays;\r\n}\n\n//# sourceURL=webpack://gotodo/./src/sort.js?");

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