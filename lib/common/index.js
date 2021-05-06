"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = exports.randomNum = exports.checkStringType = exports.randomString = exports.randomColor = exports.timeTaken = exports.distinctValuesOfArray = exports.deepClone = exports.isFunction = exports.isArray = exports.isObj = exports.isNumber = exports.hp = exports.copyArray = exports.once = exports.some = exports.every = exports.timeFormatWithRule = exports.FormatTimestamp = exports.rmArrayItem = exports.findIndex = exports.isObjectValueEqual = exports.timeDown = exports.flat = exports.updateQueryStringParameterByObj = exports.updateQueryStringParameter = exports.timeShowFormat = exports.calculateDifference = exports.isNullString = exports.isNullArray = exports.isNull = exports.tinyMoment = exports.removeEmojis = exports.hasEmojiInString = exports.removeSpace = void 0;
var tslib_1 = require("tslib");
var moment_1 = tslib_1.__importDefault(require("moment"));
var RegEx_1 = require("../constants/RegEx");
/**
 * removeSpace
 * @param {String} str
 * @returns {String}
 */
exports.removeSpace = function (str) { return str.replace(/\s/g, ""); };
/**
 * hasEmojiInString
 * @param {String} str
 * @returns {Boolean}
 */
exports.hasEmojiInString = function (str) {
    return RegEx_1.EMOJI_REGEX.test(str);
};
/**
 * removeEmojis
 * @param {String} str
 * @returns {String}
 */
exports.removeEmojis = function (string) {
    return string.replace(RegEx_1.EMOJI_REGEX, "");
};
/**
 * tinyMoment
 */
exports.tinyMoment = moment_1.default;
/**
 * isNull
 * @param {any} param
 * @returns {Boolean}
 */
exports.isNull = function (param) {
    return param === void 0 || param === null || param === undefined;
};
/**
 * isNullArray
 * @param {any} arr
 * @returns {Boolean}
 */
exports.isNullArray = function (arr) {
    if (!Array.isArray(arr))
        return true;
    if (arr.length === 0)
        return true;
    return false;
};
/**
 * isNullString
 * @param {String} str
 * @returns {Boolean}
 */
exports.isNullString = function (str) {
    if (!str) {
        return true;
    }
    if (str === "") {
        return true;
    }
    var regu = "^[ ]+$";
    var re = new RegExp(regu);
    return re.test(str);
};
/**
 * calculateDifference
 * @param {Number} difference
 * @returns {Object}
 */
exports.calculateDifference = function (difference, language) {
    var second = 1000;
    var minute = 60 * second;
    var hour = 60 * minute;
    var day = 24 * hour;
    var month = 30 * day; // approximately
    var year = 365 * day; // approximately
    var hashEnCn = {
        second: "秒",
        minute: "分钟",
        hour: "小时",
        day: "天",
        month: "月",
        year: "年",
    };
    var obj = {};
    var time = [{ year: year }, { month: month }, { day: day }, { hour: hour }, { minute: minute }, { second: second }]
        .map(function (item) {
        var _a = tslib_1.__read(Object.entries(item), 1), _b = tslib_1.__read(_a[0], 2), unitName = _b[0], unit = _b[1];
        var units = (difference / unit) | 0;
        difference -= unit * units;
        var maybePlural = units === 1 ? "" : "s";
        obj[unitName] = units;
        if (units > 0) {
            if (!!language && language === "cn") {
                return units + " " + hashEnCn[unitName];
            }
            else {
                return units + " " + unitName + maybePlural;
            }
        }
        else {
            return "";
        }
    })
        .filter(function (x) { return x; });
    return { obj: obj, formattedTime: time };
};
/**
 * timeShowFormat
 * @param {Number} timestamp
 * @returns {String}
 */
exports.timeShowFormat = function (timestamp) {
    var timestampInt = Number(timestamp);
    var startMinuteTimestamp = moment_1.default().startOf("minute").valueOf();
    var startDayTimestamp = moment_1.default().startOf("day").valueOf();
    var startYearTimestamp = moment_1.default().startOf("year").valueOf();
    var formatTimestamp = new FormatTimestamp(timestampInt);
    var timeObj = formatTimestamp.obj();
    var formatStr = "";
    if (timestampInt < startYearTimestamp) {
        // not current year
        formatStr = timeObj.year + "-" + timeObj.month + "-" + timeObj.day + " " + timeObj.hour + ":" + timeObj.minute;
    }
    if (timestampInt >= startYearTimestamp && timestampInt < startDayTimestamp) {
        // is current year and not current day
        formatStr = timeObj.month + "-" + timeObj.day + " " + timeObj.hour + ":" + timeObj.minute;
    }
    if (timestampInt >= startDayTimestamp &&
        timestampInt < startMinuteTimestamp) {
        // is current day and not current minute
        formatStr = timeObj.hour + ":" + timeObj.minute;
    }
    if (timestampInt >= startMinuteTimestamp) {
        // current minute
        formatStr = "1\u5206\u949F\u524D";
    }
    return formatStr;
};
/**
 * Update or create query string
 * @param {String} uri
 * @param {String} key
 * @param {String} value
 * @returns {String}
 */
function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf("?") !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, "$1" + key + "=" + value + "$2");
    }
    else {
        return uri + separator + key + "=" + value;
    }
}
exports.updateQueryStringParameter = updateQueryStringParameter;
/**
 * Update or create query string
 * @param {String} uri
 * @param {Object} obj
 * @returns {String}
 */
exports.updateQueryStringParameterByObj = function (uri, obj) {
    if (obj === void 0) { obj = {}; }
    var _uri = uri;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            _uri = updateQueryStringParameter(_uri, key, obj[key]);
        }
    }
    return _uri;
};
/**
 * 拍平一个多维数组
 * @returns {Function}
 * @example
 * flat()([
 *  [1],
 *  [[2],[3]],
 *  [[4,[5]]]
 * ])
 */
exports.flat = function () {
    var flatArr = [];
    return function flatten(arr) {
        for (var index = 0; index < arr.length; index++) {
            Array.isArray(arr[index])
                ? flatten(arr[index])
                : flatArr.push(arr[index]);
        }
        return flatArr;
    };
};
function addZero(n) {
    n = String(n);
    if (n.length === 1) {
        return "0" + n;
    }
    else {
        return n;
    }
}
/**
 * timeDown
 * @param {Number} totalSeconds
 * @param {Function} fn
 * @returns {*}
 */
exports.timeDown = function (totalSeconds, fn) {
    var days = Math.floor(totalSeconds / (60 * 60 * 24));
    var modulo = totalSeconds % (60 * 60 * 24);
    var hours = Math.floor(modulo / (60 * 60));
    modulo = modulo % (60 * 60);
    var minutes = Math.floor(modulo / 60);
    var seconds = modulo % 60;
    fn(addZero(days), addZero(hours), addZero(minutes), addZero(seconds));
    setTimeout(function () {
        totalSeconds = totalSeconds - 1;
        if (totalSeconds < 0)
            return;
        exports.timeDown(totalSeconds, fn);
    }, 1000);
};
/**
 * isObjectValueEqual
 * @param {Object} a
 * @param {Object} b
 * @returns {Boolean}
 */
exports.isObjectValueEqual = function (a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    // If we made it this far, objects
    // are considered equivalent
    return true;
};
/**
 * findIndex
 * @param {Array} arr
 * @param {Function} callback
 * @returns {Number}
 */
exports.findIndex = function (arr, callback) {
    if (arr == null || arr.length == 0) {
        console.log("array is null");
        return -1;
    }
    for (var i = 0; i < arr.length; i++) {
        var __boolean__ = callback(arr[i]);
        if (__boolean__) {
            return i;
        }
    }
    return -1;
};
/**
 * rmArrayItem
 * @param {Array} arr
 * @param {*} item
 * @returns {Boolean}
 */
exports.rmArrayItem = function (arr, item) {
    var index = arr.indexOf(item);
    if (index !== -1) {
        arr.splice(index, 1);
        return true;
    }
    else {
        return false;
    }
};
/**
 * FormatTimestamp
 * @param {String} timestamp
 * @returns *
 */
var FormatTimestamp = /** @class */ (function () {
    function FormatTimestamp(timestamp) {
        var time = new Date(timestamp);
        this.y = time.getFullYear();
        this.m = this.add0(time.getMonth() + 1);
        this.d = this.add0(time.getDate());
        this.h = this.add0(time.getHours());
        this.mm = this.add0(time.getMinutes());
        this.s = this.add0(time.getSeconds());
    }
    FormatTimestamp.prototype.add0 = function (num) {
        return Number(num) < 10 ? "0" + String(num) : num;
    };
    FormatTimestamp.prototype.format_dot = function () {
        return this.y + "." + this.m + "." + this.d + " " + (this.h + ":" + this.mm + ":" + this.s);
    };
    FormatTimestamp.prototype.format = function (type) {
        if (type === "M-D") {
            return this.m + "-" + this.d;
        }
    };
    FormatTimestamp.prototype.obj = function () {
        return {
            year: String(this.y),
            month: String(this.m),
            day: String(this.d),
            hour: String(this.h),
            minute: String(this.mm),
            second: String(this.s),
        };
    };
    return FormatTimestamp;
}());
exports.FormatTimestamp = FormatTimestamp;
/**
 * timeFormatWithRule
 * @param {Number} timestamp 时间戳
 * @param {String} format 格式化规则 eg. Y-M-D H:m:S
 * @return {String}
 */
exports.timeFormatWithRule = function (timestamp, format) {
    var formatTimestamp = new FormatTimestamp(timestamp);
    var createTimeObj = formatTimestamp.obj();
    format = format.replace("Y", createTimeObj.year);
    format = format.replace("M", createTimeObj.month);
    format = format.replace("D", createTimeObj.day);
    format = format.replace("H", createTimeObj.hour);
    format = format.replace("m", createTimeObj.minute);
    format = format.replace("S", createTimeObj.second);
    return format;
};
/**
 * every
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Boolean}
 */
exports.every = function (arr, fn) {
    var result = true;
    for (var i = 0; i < arr.length; i++) {
        result = result && fn(arr[i]);
        // 遇到第一个不匹配条件的元素时就停止遍历数组
        if (result === false)
            return false;
    }
    return result;
};
/**
 * some
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Boolean}
 */
exports.some = function (arr, fn) {
    var result = false;
    for (var i = 0; i < arr.length; i++) {
        result = fn(arr[i]);
        if (result)
            return true;
    }
    return result;
};
/**
 * once
 * @param {Function} fn
 * @returns {Function}
 */
exports.once = function (fn) {
    var done = false;
    return function () {
        return done ? void 0 : ((done = true), fn(arguments));
    };
};
exports.copyArray = function (arr) {
    return arr.concat();
};
exports.hp = function (obj, key) {
    return obj.hasOwnProperty(key);
};
/**
 * isNumber
 * @param {*} obj
 * @returns {Boolean}
 */
exports.isNumber = function (obj) {
    return obj === +obj;
};
/**
 * isObj
 * @param {*} obj
 * @returns {Boolean}
 */
exports.isObj = function (obj) {
    var type = Object.prototype.toString.call(obj);
    return type === "[object Object]";
};
/**
 * isArray
 * @param {*} obj
 * @returns {Boolean}
 */
exports.isArray = function (obj) {
    var type = Object.prototype.toString.call(obj);
    return type === "[object Array]";
};
/**
 * isFunction
 * @param {*} obj
 * @returns {Boolean}
 */
exports.isFunction = function (obj) {
    var type = Object.prototype.toString.call(obj);
    return type === "[object Function]";
};
/**
 * deep clone
 * @param {Array | Object} param
 * @returns {*}
 */
exports.deepClone = function (param) {
    var n;
    var a = param;
    if (exports.isArray(a)) {
        n = [];
    }
    else if (exports.isObj(a)) {
        n = {};
    }
    else {
        return a;
    }
    for (var i in a) {
        if (a.hasOwnProperty(i)) {
            if (exports.isArray(a[i]) || exports.isObj(a[i])) {
                n[i] = exports.deepClone(a[i]);
            }
            else {
                n[i] = a[i];
            }
        }
    }
    return n;
};
/**
 * Returns all the distinct values of an array.
 * @param {Array} - source array
 * @returns {Array} - new array
 */
exports.distinctValuesOfArray = function (arr) { return tslib_1.__spread(new Set(arr)); };
/**
 * Measures the time taken by a function to execute.
 * @param {Function} - callback function
 * @returns {*}
 */
exports.timeTaken = function (callback) {
    console.time("timeTaken");
    var r = callback();
    console.timeEnd("timeTaken");
    return r;
};
/**
 * 生成随机颜色
 * @returns {String}
 */
exports.randomColor = function () {
    var n = ((Math.random() * 0xfffff) | 0).toString(16);
    return ("#" + (n.length !== 6 ? ((Math.random() * 0xf) | 0).toString(16) + n : n));
};
/**
 * 生成随机字符串
 * @param {Number} - 随机字符串长度
 * @returns {String}
 */
exports.randomString = function (length) {
    var str = "";
    var length = length;
    var arr = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    for (var i = 0; i < length; i++) {
        var pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
    }
    return str;
};
/**
 * @param {String} - 被检测的字符串
 * @param {String} - 检测类型
 * @returns {Boolean}
 * @example
 * URL_START_WITH_HTTP_OR_HTTPS | URL_NOT_REQUIRE_HTTP_OR_HTTPS |
 * email | phone | tel | number | lower | upper | ip
 */
exports.checkStringType = function (str, type) {
    switch (type) {
        case "URL_START_WITH_HTTP_OR_HTTPS":
            var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
            var regex = new RegExp(expression);
            return !!str.match(regex);
        case "URL_NOT_REQUIRE_HTTP_OR_HTTPS":
            var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
            var regex = new RegExp(expression);
            return !!str.match(regex);
        case "email":
            return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(str);
        case "phone":
            return /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(str);
        case "tel":
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
        case "number":
            return /^[0-9]$/.test(str);
        case "lower":
            return /^[a-z]+$/.test(str);
        case "upper":
            return /^[A-Z]+$/.test(str);
        case "ip":
            return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(str);
        default:
            return false;
    }
};
/**
 * 生成随机数.
 * @param {Number} - 最小值
 * @param {Number} - 最大值
 * @returns {Number}
 */
exports.randomNum = function (Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return Min + Math.round(Rand * Range);
};
/**
 * 数组排序.
 * @param {Array} - source array
 * @returns {Array} - new array
 */
exports.quickSort = function (arr) {
    if (arr.length <= 1)
        return arr;
    var middle_number = Math.floor(arr.length / 2);
    var pivot = arr.splice(middle_number, 1)[0];
    var leftList = [];
    var rightList = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftList.push(arr[i]);
        }
        else {
            rightList.push(arr[i]);
        }
    }
    return exports.quickSort(leftList).concat([pivot], exports.quickSort(rightList));
};
