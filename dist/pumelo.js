var pumelo =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 *
 * @name pumelo.js
 * @description JavaScript工具箱
 * @author xqLi
 */

module.exports = Object.assign(
  __webpack_require__(1),
  __webpack_require__(2)
);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 *
 * @param {Array} arr
 * @param {Function} callback
 * @returns {*}
 */
module.exports.find = function (arr, callback) {
	if (arr == null || arr.length == 0) {
		this.print('array is null');
		return;
	}

	for (var i = 0; i < arr.length; i++) {
		var __boolean__ = callback(arr[i]);
		if (__boolean__) {
			return arr[i]
		}
	}
}


/**
 *
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Boolean}
 */
module.exports.every = function (arr, fn) {
	var result = true;
	for (var i = 0; i < arr.length; i++) {
		result = result && fn(arr[i]);

		// 遇到第一个不匹配条件的元素时就停止遍历数组
		if (result === false) return false;
	}
	return result;
}

/**
 *
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Boolean}
 */
module.exports.some = function (arr, fn) {
	var result = false;
	for (var i = 0; i < arr.length; i++) {
		result = fn(arr[i]);
		if (result) return true;
	}
	return result;
}

/**
 *
 * @param {Function} fn
 * @returns {Function}
 */
module.exports.once = function (fn) {
	var done = false;

	return function () {
		return done ? void 0 : ((done = true), fn.apply(this, arguments));
	}
}

module.exports.copyArray = function (arr) {
	return arr.concat()
}

module.exports.hp = function (obj, key) {
	return obj.hasOwnProperty(key)
}

module.exports.typeof = function (obj) {
	let type = Object.prototype.toString.call(obj);
	if(type == '[object Array]') return 'array';
	if(type == '[object Object]') return 'object';
	return 'not object type';
}

/**
 * @param {*} obj
 * @returns {Boolean}
 */
module.exports.isObj = function (obj) {
	return this.typeof(obj) === 'object';
}

/**
 * @param {*} obj
 * @returns {Boolean}
 */
module.exports.isArray = function (obj) {
	return this.typeof(obj) === 'array';
}

module.exports.distinctValuesOfArray = (arr) => [...new Set(arr)];

module.exports.timeTaken = function (callback) {
	console.time('timeTaken');
	const r = callback();
	console.timeEnd('timeTaken');
	return r;
}

// random color
module.exports.randomColor = function () {
	let n = ((Math.random() * 0xfffff) | 0).toString(16);
	return '#' + (n.length !== 6 ? ((Math.random() * 0xf) | 0).toString(16) + n : n);
}

/**
 *
 * @param {Number} length 随机字符串长度
 * @returns {String}
 */
module.exports.randomString = function (length) {
	var str = "";
	var length = length;
	var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	for (var i = 0; i < length; i++) {
		var pos = Math.round(Math.random() * (arr.length - 1));
		str += arr[pos];
	}
	return str;
}

/**
 *
 * @param {*} str
 * @param {*} type
 * @returns {Boolean}
 */
module.exports.checkStringType = function (str, type) {
	switch (type) {
		case 'email':
			return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(str);
		case 'phone':
			return /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(str);
		case 'tel':
			return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
		case 'number':
			return /^[0-9]$/.test(str);
		case 'lower':
			return /^[a-z]+$/.test(str);
		case 'upper':
			return /^[A-Z]+$/.test(str);
		case 'ip':
			return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(str);
		default:
			return true;
	}
};

module.exports.randomNum = function (Min, Max) {
	var Range = Max - Min;
	var Rand = Math.random();
	return (Min + Math.round(Rand * Range));
}

//数组排序
module.exports.quickSort = function (arr) {
	if (arr.length <= 1) return arr;
	let middle_number = Math.floor(arr.length / 2);
	let pivot = arr.splice(middle_number, 1)[0];
	let leftList = [];
	let rightList = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < pivot) {
			leftList.push(arr[i])
		} else {
			rightList.push(arr[i])
		}
	}
	return this.quickSort(leftList).concat([pivot], this.quickSort(rightList));
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);