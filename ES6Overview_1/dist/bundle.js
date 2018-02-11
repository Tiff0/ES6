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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calculator__ = __webpack_require__(1);


let a = 5;
let b = 6;
let sum = __WEBPACK_IMPORTED_MODULE_0__calculator__["a" /* default */].sum(a, b);

let name = "Ivan";
const second_name = "Petrov";

for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 500);
} // if we use var, with that will init to 10 and after func will start => 10

for (let y = 0; y < 10; y++) {
    setTimeout(function () {
        console.log(y);
    }, 500);
} // if we use let, with that will init to 10 and after func will start => 1,2,3..

//second_name = "Ivanov";  never be done, error cause const

const animal = {
    name: "Vaska",
    age: 10
};

function doMethod(options) {
    let { name, age } = options;

    console.log("Method name is doMethod and here is name = " + name + " and age is here is " + age);
};

// create the same method
function doMethod1({ name, age }) {
    console.log("Method name is doMethod1 and here is name = " + name + " and age is here is " + age);
};

console.log("Now animal name is " + animal.name + " and age is " + animal.age);

animal.name = "Murka"; // const only to object
animal.age = 7;

const dataPrice = [12, 23, 54];

const { price, count, weight } = dataPrice;
const { name: animalName, age: animalAge } = animal;

console.log(animalName, animalAge);
console.log("Now animal name is " + animal.name + " and age is " + animal.age);
console.log("Name is " + name + " second name is" + second_name);
console.log("Sum result is " + sum);
doMethod(animal);
doMethod1(animal);
console.log("Price " + price);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var calculator = {
    sum: function (a, b) {
        return a + b;
    },

    dif: function (a, b) {
        return a - b;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (calculator);

/***/ })
/******/ ]);