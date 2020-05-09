import moment from "moment";
import { EMOJI_REGEX } from "../constants/RegEx";

/**
 * hasEmojiInString
 * @param {String} str
 * @returns {Boolean}
 */
export const hasEmojiInString = (str: string): boolean => {
  return EMOJI_REGEX.test(str);
};

/**
 * removeEmojis
 * @param {String} str
 * @returns {String}
 */
export const removeEmojis = (string: string): string => {
  return string.replace(EMOJI_REGEX, "");
};

/**
 * tinyMoment
 */
export const tinyMoment = moment;

/**
 * isNull
 * @param {any} param
 * @returns {Boolean}
 */
export const isNull = function (param: any) {
  return param === void 0 || param === null || param === undefined;
};

/**
 * isNullArray
 * @param {any} arr
 * @returns {Boolean}
 */
export const isNullArray = function (arr: string | any[]) {
  if (!Array.isArray(arr)) return true;
  if (arr.length === 0) return true;
  return false;
};

/**
 * isNullString
 * @param {String} str
 * @returns {Boolean}
 */
export const isNullString = function (str: string) {
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
export const calculateDifference = function (
  difference: number,
  language: string
) {
  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day; // approximately
  const year = 365 * day; // approximately

  const hashEnCn: any = {
    second: "秒",
    minute: "分钟",
    hour: "小时",
    day: "天",
    month: "月",
    year: "年",
  };

  let obj: any = {};
  const time = [{ year }, { month }, { day }, { hour }, { minute }, { second }]
    .map((item) => {
      const [[unitName, unit]]: any = Object.entries(item);
      const units = (difference / unit) | 0;
      difference -= unit * units;
      const maybePlural = units === 1 ? "" : "s";
      obj[unitName] = units;
      if (units > 0) {
        if (!!language && language === "cn") {
          return units + " " + hashEnCn[unitName];
        } else {
          return units + " " + unitName + maybePlural;
        }
      } else {
        return "";
      }
    })
    .filter((x) => x);
  return { obj, formattedTime: time };
};

/**
 * timeShowFormat
 * @param {Number} timestamp
 * @returns {String}
 */
export const timeShowFormat = (timestamp: any) => {
  let timestampInt = Number(timestamp);

  let startMinuteTimestamp = moment().startOf("minute").valueOf();
  let startDayTimestamp = moment().startOf("day").valueOf();
  let startYearTimestamp = moment().startOf("year").valueOf();

  let formatTimestamp = new FormatTimestamp(timestampInt);
  let timeObj = formatTimestamp.obj();
  let formatStr = "";

  if (timestampInt < startYearTimestamp) {
    // not current year
    formatStr = `${timeObj.year}-${timeObj.month}-${timeObj.day} ${timeObj.hour}:${timeObj.minute}`;
  }

  if (timestampInt >= startYearTimestamp && timestampInt < startDayTimestamp) {
    // is current year and not current day
    formatStr = `${timeObj.month}-${timeObj.day} ${timeObj.hour}:${timeObj.minute}`;
  }

  if (
    timestampInt >= startDayTimestamp &&
    timestampInt < startMinuteTimestamp
  ) {
    // is current day and not current minute
    formatStr = `${timeObj.hour}:${timeObj.minute}`;
  }

  if (timestampInt >= startMinuteTimestamp) {
    // current minute
    formatStr = `1分钟前`;
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
export function updateQueryStringParameter(
  uri: string,
  key: string,
  value: string
) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf("?") !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, "$1" + key + "=" + value + "$2");
  } else {
    return uri + separator + key + "=" + value;
  }
}

/**
 * Update or create query string
 * @param {String} uri
 * @param {Object} obj
 * @returns {String}
 */
export const updateQueryStringParameterByObj = function (
  uri: any,
  obj: any = {}
) {
  let _uri = uri;
  for (let key in obj) {
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
export const flat = function () {
  let flatArr: any[] = [];
  return function flatten(arr: string | any[]) {
    for (let index = 0; index < arr.length; index++) {
      Array.isArray(arr[index])
        ? flatten(arr[index])
        : flatArr.push(arr[index]);
    }
    return flatArr;
  };
};

function addZero(n: string | number | any[]) {
  n = String(n);
  if (n.length === 1) {
    return "0" + n;
  } else {
    return n;
  }
}

/**
 * timeDown
 * @param {Number} totalSeconds
 * @param {Function} fn
 * @returns {*}
 */
export const timeDown = (
  totalSeconds: number,
  fn: (arg0: any, arg1: any, arg2: any, arg3: any) => void
) => {
  let days = Math.floor(totalSeconds / (60 * 60 * 24));
  let modulo = totalSeconds % (60 * 60 * 24);
  let hours = Math.floor(modulo / (60 * 60));
  modulo = modulo % (60 * 60);
  let minutes = Math.floor(modulo / 60);
  let seconds = modulo % 60;

  fn(addZero(days), addZero(hours), addZero(minutes), addZero(seconds));
  setTimeout(function () {
    totalSeconds = totalSeconds - 1;
    if (totalSeconds < 0) return;
    timeDown(totalSeconds, fn);
  }, 1000);
};

/**
 * isObjectValueEqual
 * @param {Object} a
 * @param {Object} b
 * @returns {Boolean}
 */
export const isObjectValueEqual = (
  a: { [x: string]: any },
  b: { [x: string]: any }
) => {
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length != bProps.length) {
    return false;
  }

  for (let i = 0; i < aProps.length; i++) {
    let propName = aProps[i];

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
export const findIndex = function (
  arr: string | any[],
  callback: (arg0: any) => any
): number {
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
export const rmArrayItem = function (arr: any[], item: any) {
  var index = arr.indexOf(item);
  if (index !== -1) {
    arr.splice(index, 1);
    return true;
  } else {
    return false;
  }
};

/**
 * FormatTimestamp
 * @param {String} timestamp
 * @returns *
 */
export class FormatTimestamp {
  y: number;
  m: string | number;
  d: string | number;
  h: string | number;
  mm: string | number;
  s: string | number;
  constructor(timestamp: any) {
    let time = new Date(timestamp);
    this.y = time.getFullYear();
    this.m = this.add0(time.getMonth() + 1);
    this.d = this.add0(time.getDate());
    this.h = this.add0(time.getHours());
    this.mm = this.add0(time.getMinutes());
    this.s = this.add0(time.getSeconds());
  }

  add0(num: number) {
    return Number(num) < 10 ? "0" + String(num) : num;
  }

  format_dot() {
    return `${this.y}.${this.m}.${this.d} ` + `${this.h}:${this.mm}:${this.s}`;
  }

  format(type: string): any {
    if (type === "M-D") {
      return this.m + "-" + this.d;
    }
  }

  obj() {
    return {
      year: String(this.y),
      month: String(this.m),
      day: String(this.d),
      hour: String(this.h),
      minute: String(this.mm),
      second: String(this.s),
    };
  }
}

/**
 * timeFormatWithRule
 * @param {Number} timestamp 时间戳
 * @param {String} format 格式化规则 eg. Y-M-D H:m:S
 * @return {String}
 */
export const timeFormatWithRule = (timestamp, format) => {
  let formatTimestamp = new FormatTimestamp(Number(timestamp));
  let createTimeObj = formatTimestamp.obj();
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
export const every = function (arr: any, fn: Function) {
  var result = true;
  for (var i = 0; i < arr.length; i++) {
    result = result && fn(arr[i]);

    // 遇到第一个不匹配条件的元素时就停止遍历数组
    if (result === false) return false;
  }
  return result;
};

/**
 * some
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Boolean}
 */
export const some = function (arr: any, fn: Function) {
  var result = false;
  for (var i = 0; i < arr.length; i++) {
    result = fn(arr[i]);
    if (result) return true;
  }
  return result;
};

/**
 * once
 * @param {Function} fn
 * @returns {Function}
 */
export const once = function (fn: Function) {
  var done = false;

  return function () {
    return done ? void 0 : ((done = true), fn(arguments));
  };
};

/**
 * deep clone
 * @param {Array | Object} a
 * @returns {*}
 */
export const deepClone = function (a: any) {
  let n: any;
  let t = Object.prototype.toString;
  if (t.call(a) === "[object Array]") {
    n = [];
  } else if (t.call(a) === "[object Object]") {
    n = {};
  } else {
    return a;
  }
  for (let i in a) {
    if (a.hasOwnProperty(i)) {
      if (
        t.call(a[i]) === "[object Array]" ||
        t.call(a[i]) === "[object Object]"
      ) {
        n[i] = deepClone(a[i]);
      } else {
        n[i] = a[i];
      }
    }
  }
  return n;
};

export const copyArray = function (arr: any) {
  return arr.concat();
};

export const hp = function (obj: any, key: any) {
  return obj.hasOwnProperty(key);
};

/**
 * isNumber
 * @param {*} obj
 * @returns {Boolean}
 */
export const isNumber = function (obj: any) {
  return obj === +obj;
};

/**
 * isObj
 * @param {*} obj
 * @returns {Boolean}
 */
export const isObj = function (obj: any) {
  let type = Object.prototype.toString.call(obj);
  return type === "[object Object]";
};

/**
 * isArray
 * @param {*} obj
 * @returns {Boolean}
 */
export const isArray = function (obj: any) {
  let type = Object.prototype.toString.call(obj);
  return type === "[object Array]";
};

/**
 * isFunction
 * @param {*} obj
 * @returns {Boolean}
 */
export const isFunction = function (obj: any) {
  let type = Object.prototype.toString.call(obj);
  return type === "[object Function]";
};

/**
 * Returns all the distinct values of an array.
 * @param {Array} - source array
 * @returns {Array} - new array
 */
export const distinctValuesOfArray = (arr: any) => [...new Set(arr)];

/**
 * Measures the time taken by a function to execute.
 * @param {Function} - callback function
 * @returns {*}
 */
export const timeTaken = function (callback: Function) {
  console.time("timeTaken");
  const r = callback();
  console.timeEnd("timeTaken");
  return r;
};

/**
 * 生成随机颜色
 * @returns {String}
 */
export const randomColor = function () {
  let n = ((Math.random() * 0xfffff) | 0).toString(16);
  return (
    "#" + (n.length !== 6 ? ((Math.random() * 0xf) | 0).toString(16) + n : n)
  );
};

/**
 * 生成随机字符串
 * @param {Number} - 随机字符串长度
 * @returns {String}
 */
export const randomString = function (length: number) {
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
export const checkStringType = function (str: string, type: string) {
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
      return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(
        str
      );
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
export const randomNum = function (Min: number, Max: number) {
  var Range = Max - Min;
  var Rand = Math.random();
  return Min + Math.round(Rand * Range);
};

/**
 * 数组排序.
 * @param {Array} - source array
 * @returns {Array} - new array
 */
export const quickSort = function (arr: []) {
  if (arr.length <= 1) return arr;
  let middle_number = Math.floor(arr.length / 2);
  let pivot = arr.splice(middle_number, 1)[0];
  let leftList: [] = [];
  let rightList: [] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftList.push(arr[i]);
    } else {
      rightList.push(arr[i]);
    }
  }
  return quickSort(leftList).concat([pivot], quickSort(rightList));
};
