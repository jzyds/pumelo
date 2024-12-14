"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExtensionFromImageMimeType = exports.extractImages = exports.uuidv4 = exports.isObjKey = exports.getOS_FromAgent = exports.randomNum = exports.checkStringType = exports.randomString = exports.randomColor = exports.timeTaken = exports.distinctValuesOfArray = exports.deepClone = exports.isFunction = exports.isArray = exports.isObj = exports.isNumber = exports.hp = exports.once = exports.some = exports.every = exports.timeFormatWithRule = exports.FormatTimestamp = exports.rmArrayItem = exports.findIndex = exports.isObjectValueEqual = exports.timeDown = exports.flat = exports.updateQueryStringParameterByObj = exports.updateQueryStringParameter = exports.calculateDifference = exports.isNullArray = exports.isVoidNullEmptyString = exports.isVoidNull = exports.removeEmojis = exports.hasEmojiInString = exports.removeSpace = void 0;
var tslib_1 = require("tslib");
var RegEx = tslib_1.__importStar(require("../constants/RegEx"));
/**
 * removeSpace
 * @param {String} str
 * @returns {String}
 */
var removeSpace = function (str) { return str.replace(/\s/g, ""); };
exports.removeSpace = removeSpace;
/**
 * hasEmojiInString
 * @param {String} str
 * @returns {Boolean}
 */
var hasEmojiInString = function (str) {
    return RegEx.EMOJI_REGEX.test(str);
};
exports.hasEmojiInString = hasEmojiInString;
/**
 * removeEmojis
 * @param {String} str
 * @returns {String}
 */
var removeEmojis = function (string) {
    return string.replace(RegEx.EMOJI_REGEX, "");
};
exports.removeEmojis = removeEmojis;
/**
 * isVoidNull
 * @param {any} param
 * @returns {Boolean}
 */
var isVoidNull = function (param) {
    return typeof param === "undefined" || param === null || param === undefined;
};
exports.isVoidNull = isVoidNull;
/**
 * isVoidNullEmptyString
 * @param {any} param
 * @returns {Boolean}
 */
var isVoidNullEmptyString = function (param) {
    return (0, exports.isVoidNull)(param) || param === "";
};
exports.isVoidNullEmptyString = isVoidNullEmptyString;
/**
 * isNullArray
 * @param {any} arr
 * @returns {Boolean}
 */
var isNullArray = function (arr) {
    if (!Array.isArray(arr))
        return true;
    if (arr.length === 0)
        return true;
    return false;
};
exports.isNullArray = isNullArray;
/**
 * calculateDifference
 * @param {Number} difference
 * @returns {Object}
 */
var calculateDifference = function (difference, language) {
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
            if (!!language) {
                if (language === "cn") {
                    return units + " " + hashEnCn[unitName];
                }
                if (language === "en") {
                    return (units +
                        {
                            second: "s",
                            minute: "m",
                            hour: "h",
                            day: "D",
                            month: "M",
                            year: "Y",
                        }[unitName]);
                }
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
exports.calculateDifference = calculateDifference;
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
var updateQueryStringParameterByObj = function (uri, obj) {
    if (obj === void 0) { obj = {}; }
    var _uri = uri;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            _uri = updateQueryStringParameter(_uri, key, obj[key]);
        }
    }
    return _uri;
};
exports.updateQueryStringParameterByObj = updateQueryStringParameterByObj;
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
var flat = function () {
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
exports.flat = flat;
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
var timeDown = function (totalSeconds, fn) {
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
        (0, exports.timeDown)(totalSeconds, fn);
    }, 1000);
};
exports.timeDown = timeDown;
/**
 * isObjectValueEqual
 * @param {Object} a
 * @param {Object} b
 * @returns {Boolean}
 */
var isObjectValueEqual = function (a, b) {
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
exports.isObjectValueEqual = isObjectValueEqual;
/**
 * findIndex
 * @param {Array} arr
 * @param {Function} callback
 * @returns {Number}
 */
var findIndex = function (arr, callback) {
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
exports.findIndex = findIndex;
/**
 * rmArrayItem
 * @param {Array} arr
 * @param {*} item
 * @returns {Boolean}
 */
var rmArrayItem = function (arr, item) {
    var index = arr.indexOf(item);
    if (index !== -1) {
        arr.splice(index, 1);
        return true;
    }
    else {
        return false;
    }
};
exports.rmArrayItem = rmArrayItem;
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
        return "".concat(this.y, ".").concat(this.m, ".").concat(this.d, " ") + "".concat(this.h, ":").concat(this.mm, ":").concat(this.s);
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
var timeFormatWithRule = function (timestamp, format) {
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
exports.timeFormatWithRule = timeFormatWithRule;
/**
 * every
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Boolean}
 */
var every = function (arr, fn) {
    var result = true;
    for (var i = 0; i < arr.length; i++) {
        result = result && fn(arr[i]);
        // 遇到第一个不匹配条件的元素时就停止遍历数组
        if (result === false)
            return false;
    }
    return result;
};
exports.every = every;
/**
 * some
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Boolean}
 */
var some = function (arr, fn) {
    var result = false;
    for (var i = 0; i < arr.length; i++) {
        result = fn(arr[i]);
        if (result)
            return true;
    }
    return result;
};
exports.some = some;
/**
 * once
 * @param {Function} fn
 * @returns {Function}
 */
var once = function (fn) {
    var done = false;
    return function () {
        return done ? void 0 : ((done = true), fn(arguments));
    };
};
exports.once = once;
var hp = function (obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
};
exports.hp = hp;
/**
 * isNumber
 * @param {*} obj
 * @returns {Boolean}
 */
var isNumber = function (obj) {
    return obj === +obj;
};
exports.isNumber = isNumber;
/**
 * isObj
 * @param {*} obj
 * @returns {Boolean}
 */
var isObj = function (obj) {
    var type = Object.prototype.toString.call(obj);
    return type === "[object Object]";
};
exports.isObj = isObj;
/**
 * isArray
 * @param {*} obj
 * @returns {Boolean}
 */
var isArray = function (obj) {
    var type = Object.prototype.toString.call(obj);
    return type === "[object Array]";
};
exports.isArray = isArray;
/**
 * isFunction
 * @param {*} obj
 * @returns {Boolean}
 */
var isFunction = function (obj) {
    var type = Object.prototype.toString.call(obj);
    return type === "[object Function]";
};
exports.isFunction = isFunction;
/**
 * deep clone
 * @param {Array | Object} param
 * @returns {*}
 */
var deepClone = function (param) {
    var n;
    var a = param;
    if ((0, exports.isArray)(a)) {
        n = [];
    }
    else if ((0, exports.isObj)(a)) {
        n = {};
    }
    else {
        return a;
    }
    for (var i in a) {
        if (a.hasOwnProperty(i)) {
            if ((0, exports.isArray)(a[i]) || (0, exports.isObj)(a[i])) {
                n[i] = (0, exports.deepClone)(a[i]);
            }
            else {
                n[i] = a[i];
            }
        }
    }
    return n;
};
exports.deepClone = deepClone;
/**
 * Returns all the distinct values of an array.
 * @param {Array} - source array
 * @returns {Array} - new array
 */
var distinctValuesOfArray = function (arr) { return tslib_1.__spreadArray([], tslib_1.__read(new Set(arr)), false); };
exports.distinctValuesOfArray = distinctValuesOfArray;
/**
 * Measures the time taken by a function to execute.
 * @param {Function} - callback function
 * @returns {*}
 */
var timeTaken = function (callback) {
    console.time("timeTaken");
    var r = callback();
    console.timeEnd("timeTaken");
    return r;
};
exports.timeTaken = timeTaken;
/**
 * 生成随机颜色
 * @returns {String}
 */
var randomColor = function () {
    var n = ((Math.random() * 0xfffff) | 0).toString(16);
    return ("#" + (n.length !== 6 ? ((Math.random() * 0xf) | 0).toString(16) + n : n));
};
exports.randomColor = randomColor;
/**
 * 生成随机字符串
 * @param {Number} - 随机字符串长度
 * @returns {String}
 */
var randomString = function (length) {
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
exports.randomString = randomString;
/**
 * @param {String} - 被检测的字符串
 * @param {String} - 检测类型
 * @returns {Boolean}
 * @example
 * URL_START_WITH_HTTP_OR_HTTPS | URL_NOT_REQUIRE_HTTP_OR_HTTPS |
 * email | phone | tel | number | lower | upper | ip
 */
var checkStringType = function (str, type) {
    switch (type) {
        case "URL_START_WITH_HTTP_OR_HTTPS":
            return !!str.match(new RegExp(RegEx.URL_START_WITH_HTTP_OR_HTTPS));
        case "URL_NOT_REQUIRE_HTTP_OR_HTTPS":
            return !!str.match(new RegExp(RegEx.URL_NOT_REQUIRE_HTTP_OR_HTTPS));
        case "email":
            return RegEx.EMAIL.test(str);
        case "phone":
            return RegEx.PHONE.test(str);
        case "tel":
            return RegEx.TEL.test(str);
        case "number":
            return RegEx.NUMBER.test(str);
        case "lower":
            return RegEx.LOWER.test(str);
        case "upper":
            return RegEx.UPPER.test(str);
        case "ip":
            return RegEx.IP.test(str);
        default:
            return false;
    }
};
exports.checkStringType = checkStringType;
/**
 * 生成随机数.
 * @param {Number} - 最小值
 * @param {Number} - 最大值
 * @returns {Number}
 */
var randomNum = function (Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return Min + Math.round(Rand * Range);
};
exports.randomNum = randomNum;
/**
 * 通过 User Agent 获取系统类型, 方法可在服务端或浏览器调用
 * 在服务器端传入 req.headers['user-agent']
 * 在浏览器传入 navigator.userAgent
 * ---------
 * 但是如果想要区分 ipad 和 iphone，需要传入第二个参数，该参数只能在浏览器内获取（navigator.maxTouchPoints），所以只能在浏览器端判断
 * 原因是新版本的 iPadOS(>= 13.1) 和 mac 的 UA 是相同的，所以需要传入 maxTouchPoints 来判断
 *
 * 在浏览器端，可直接调用 dom util 中的 getOS_Type
 * @param { string } agent - user agent
 * @param { number? } maxTouchPoints - navigator.maxTouchPoints
 * @returns { availableOS_Type }
 */
function getOS_FromAgent(agent, maxTouchPoints) {
    agent = agent.toLowerCase();
    if (/windows/.test(agent)) {
        return "windows";
    }
    else if (/iphone|ipod/.test(agent) && /mobile/.test(agent)) {
        return "iphone";
    }
    else if (agent.includes("mac") && maxTouchPoints && maxTouchPoints > 2) {
        return "ipad";
    }
    else if (/android/.test(agent)) {
        return "android";
    }
    else if (/linux/.test(agent)) {
        return "linux pc";
    }
    else if (/mac/.test(agent)) {
        return "mac";
    }
    else {
        return "other";
    }
}
exports.getOS_FromAgent = getOS_FromAgent;
/**
 * @param {any} - key
 * @param {T} - obj
 * @returns {Boolean}
 */
function isObjKey(key, obj) {
    return key in obj;
}
exports.isObjKey = isObjKey;
/**
 * Universally Unique IDentifier (RFC 4122 https://www.ietf.org/rfc/rfc4122.txt)
 * @returns {String}
 */
function uuidv4() {
    var u = "", m = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", i = 0, rb = (Math.random() * 0xffffffff) | 0;
    while (i++ < 36) {
        var c = m[i - 1], r = rb & 0xf, v = c == "x" ? r : (r & 0x3) | 0x8;
        u += c == "-" || c == "4" ? c : v.toString(16);
        rb = i % 8 == 0 ? (Math.random() * 0xffffffff) | 0 : rb >> 4;
    }
    return u;
}
exports.uuidv4 = uuidv4;
/**
 * Extracts image sources (`src`) and alternate texts (`alt`) from the given content.
 *
 * This function supports the following formats:
 * 1. Markdown image syntax: `![alt](src)`
 * 2. HTML image tag with `src` first: `<img src="src" alt="alt" />`
 * 3. HTML image tag with `alt` first: `<img alt="alt" src="src" />`
 *
 * @param {string} content - The input string containing Markdown or HTML with images.
 * @returns {Array<{ src: string, alt: string }>} An array of objects, each containing:
 * - `src` (string): The image source URL.
 * - `alt` (string): The alternate text for the image.
 *
 * @example
 * // Import the module and call the function
 * import * as pumelo from 'pumelo';
 *
 * const content = `
 *   ![Alt text](image1.jpg)
 *   <img src="image2.jpg" alt="Alt text 2" />
 *   <img alt="Alt text 3" src="image3.jpg" />
 * `;
 *
 * const images = pumelo.extractImages(content);
 * console.log(images);
 * // Output:
 * // [
 * //   { src: "image1.jpg", alt: "Alt text" },
 * //   { src: "image2.jpg", alt: "Alt text 2" },
 * //   { src: "image3.jpg", alt: "Alt text 3" }
 * // ]
 */
function extractImages(content) {
    var regex = /!\[(.*)\]\s*\((.+)\)|img\s*src="([^"]*)"\s*alt="([^"]*)" \/>|img\s*alt="([^"]*)"\s*src="([^"]*)" \/>/gm;
    var list;
    var images = [];
    while ((list = regex.exec(content)) !== null) {
        if (list.index === regex.lastIndex)
            regex.lastIndex++;
        if (list[1] && list[2]) {
            images.push({ alt: list[1], src: list[2] });
        }
        else if (list[3] && list[4]) {
            images.push({ alt: list[4], src: list[3] });
        }
        else if (list[5] && list[6]) {
            images.push({ alt: list[5], src: list[6] });
        }
    }
    return images;
}
exports.extractImages = extractImages;
var ImageExtension;
(function (ImageExtension) {
    ImageExtension["JPG"] = "jpg";
    ImageExtension["PNG"] = "png";
    ImageExtension["GIF"] = "gif";
    ImageExtension["WEBP"] = "webp";
    ImageExtension["BMP"] = "bmp";
    ImageExtension["TIFF"] = "tiff";
    ImageExtension["SVG"] = "svg";
    ImageExtension["AVIF"] = "avif";
    ImageExtension["HEIC"] = "heic";
    ImageExtension["HEIF"] = "heif";
    ImageExtension["UNKNOWN"] = "unknown";
})(ImageExtension || (ImageExtension = {}));
/**
 * Returns the file extension corresponding to a given image MIME type.
 * The return value is an enum representing the image extension.
 *
 * This function maps common image MIME types to their respective file extensions.
 * If the MIME type is not recognized, it returns `ImageExtension.UNKNOWN`.
 *
 * @param {string} mimeType - The MIME type of the image (e.g., "image/jpeg", "image/png").
 * @returns {ImageExtension} - The corresponding file extension enum value (e.g., `ImageExtension.JPG`, `ImageExtension.PNG`) or `ImageExtension.UNKNOWN` if the MIME type is unrecognized.
 *
 * @example
 * // Returns ImageExtension.JPG
 * import * as pumelo from 'pumelo';
 * pumelo.getExtensionFromImageMimeType("image/jpeg");
 *
 * @example
 * // Returns ImageExtension.PNG
 * import * as pumelo from 'pumelo';
 * pumelo.getExtensionFromImageMimeType("image/png");
 *
 * @example
 * // Returns ImageExtension.UNKNOWN for unrecognized MIME type
 * import * as pumelo from 'pumelo';
 * pumelo.getExtensionFromImageMimeType("image/unknown");
 */
function getExtensionFromImageMimeType(mimeType) {
    // Define a MIME Type to Extension enum mapping
    var mimeToExtensionMap = {
        "image/jpeg": ImageExtension.JPG,
        "image/png": ImageExtension.PNG,
        "image/gif": ImageExtension.GIF,
        "image/webp": ImageExtension.WEBP,
        "image/bmp": ImageExtension.BMP,
        "image/tiff": ImageExtension.TIFF,
        "image/svg+xml": ImageExtension.SVG,
        "image/avif": ImageExtension.AVIF,
        "image/heic": ImageExtension.HEIC,
        "image/heif": ImageExtension.HEIF,
    };
    // Return the corresponding enum value or ImageExtension.UNKNOWN if not found
    return mimeToExtensionMap[mimeType] || ImageExtension.UNKNOWN;
}
exports.getExtensionFromImageMimeType = getExtensionFromImageMimeType;
