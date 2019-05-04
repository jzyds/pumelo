/**
 * find
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
 * every
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
 * some
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
 * once
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
 * isObj
 * @param {*} obj
 * @returns {Boolean}
 */
module.exports.isObj = function (obj) {
	return this.typeof(obj) === 'object';
}

/**
 * isArray
 * @param {*} obj
 * @returns {Boolean}
 */
module.exports.isArray = function (obj) {
	return this.typeof(obj) === 'array';
}

/**
 * Returns all the distinct values of an array.
 * @param {Array} - source array
 * @returns {Array} - new array
 */
module.exports.distinctValuesOfArray = (arr) => [...new Set(arr)];

/**
 * Measures the time taken by a function to execute.
 * @param {Function} - callback function
 * @returns {*}
 */
module.exports.timeTaken = function (callback) {
	console.time('timeTaken');
	const r = callback();
	console.timeEnd('timeTaken');
	return r;
}

/**
 * 生成随机颜色
 * @returns {String}
 */
module.exports.randomColor = function () {
	let n = ((Math.random() * 0xfffff) | 0).toString(16);
	return '#' + (n.length !== 6 ? ((Math.random() * 0xf) | 0).toString(16) + n : n);
}

/**
 * 生成随机字符串
 * @param {Number} - 随机字符串长度
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
 * @param {String} - 被检测的字符串
 * @param {String} - 检测类型
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

/**
 * 生成随机数.
 * @param {Number} - 最小值
 * @param {Number} - 最大值
 * @returns {Number}
 */
module.exports.randomNum = function (Min, Max) {
	var Range = Max - Min;
	var Rand = Math.random();
	return (Min + Math.round(Rand * Range));
}

/**
 * 数组排序.
 * @param {Array} - source array
 * @returns {Array} - new array
 */
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