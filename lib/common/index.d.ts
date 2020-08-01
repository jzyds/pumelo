import moment from 'moment';
/**
 * removeSpace
 * @param {String} str
 * @returns {String}
 */
export declare const removeSpace: (str: string) => string;
/**
 * hasEmojiInString
 * @param {String} str
 * @returns {Boolean}
 */
export declare const hasEmojiInString: (str: string) => boolean;
/**
 * removeEmojis
 * @param {String} str
 * @returns {String}
 */
export declare const removeEmojis: (string: string) => string;
/**
 * tinyMoment
 */
export declare const tinyMoment: typeof moment;
/**
 * isNull
 * @param {any} param
 * @returns {Boolean}
 */
export declare const isNull: (param: any) => boolean;
/**
 * isNullArray
 * @param {any} arr
 * @returns {Boolean}
 */
export declare const isNullArray: (arr: string | any[]) => boolean;
/**
 * isNullString
 * @param {String} str
 * @returns {Boolean}
 */
export declare const isNullString: (str: string) => boolean;
/**
 * calculateDifference
 * @param {Number} difference
 * @returns {Object}
 */
export declare const calculateDifference: (difference: number, language: string) => {
    obj: any;
    formattedTime: string[];
};
/**
 * timeShowFormat
 * @param {Number} timestamp
 * @returns {String}
 */
export declare const timeShowFormat: (timestamp: any) => string;
/**
 * Update or create query string
 * @param {String} uri
 * @param {String} key
 * @param {String} value
 * @returns {String}
 */
export declare function updateQueryStringParameter(uri: string, key: string, value: string): string;
/**
 * Update or create query string
 * @param {String} uri
 * @param {Object} obj
 * @returns {String}
 */
export declare const updateQueryStringParameterByObj: (uri: any, obj?: any) => any;
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
export declare const flat: () => (arr: string | any[]) => any[];
/**
 * timeDown
 * @param {Number} totalSeconds
 * @param {Function} fn
 * @returns {*}
 */
export declare const timeDown: (totalSeconds: number, fn: (arg0: any, arg1: any, arg2: any, arg3: any) => void) => void;
/**
 * isObjectValueEqual
 * @param {Object} a
 * @param {Object} b
 * @returns {Boolean}
 */
export declare const isObjectValueEqual: (a: {
    [x: string]: any;
}, b: {
    [x: string]: any;
}) => boolean;
/**
 * findIndex
 * @param {Array} arr
 * @param {Function} callback
 * @returns {Number}
 */
export declare const findIndex: (arr: string | any[], callback: (arg0: any) => any) => number;
/**
 * rmArrayItem
 * @param {Array} arr
 * @param {*} item
 * @returns {Boolean}
 */
export declare const rmArrayItem: (arr: any[], item: any) => boolean;
/**
 * FormatTimestamp
 * @param {String} timestamp
 * @returns *
 */
export declare class FormatTimestamp {
    y: number;
    m: string | number;
    d: string | number;
    h: string | number;
    mm: string | number;
    s: string | number;
    constructor(timestamp: any);
    add0(num: number): string | number;
    format_dot(): string;
    format(type: string): any;
    obj(): {
        year: string;
        month: string;
        day: string;
        hour: string;
        minute: string;
        second: string;
    };
}
/**
 * timeFormatWithRule
 * @param {Number} timestamp 时间戳
 * @param {String} format 格式化规则 eg. Y-M-D H:m:S
 * @return {String}
 */
export declare const timeFormatWithRule: (timestamp: any, format: any) => any;
/**
 * every
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Boolean}
 */
export declare const every: (arr: any, fn: Function) => boolean;
/**
 * some
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Boolean}
 */
export declare const some: (arr: any, fn: Function) => boolean;
/**
 * once
 * @param {Function} fn
 * @returns {Function}
 */
export declare const once: (fn: Function) => () => any;
/**
 * deep clone
 * @param {Array | Object} a
 * @returns {*}
 */
export declare const deepClone: (a: any) => any;
export declare const copyArray: (arr: any) => any;
export declare const hp: (obj: any, key: any) => any;
/**
 * isNumber
 * @param {*} obj
 * @returns {Boolean}
 */
export declare const isNumber: (obj: any) => boolean;
/**
 * isObj
 * @param {*} obj
 * @returns {Boolean}
 */
export declare const isObj: (obj: any) => boolean;
/**
 * isArray
 * @param {*} obj
 * @returns {Boolean}
 */
export declare const isArray: (obj: any) => boolean;
/**
 * isFunction
 * @param {*} obj
 * @returns {Boolean}
 */
export declare const isFunction: (obj: any) => boolean;
/**
 * Returns all the distinct values of an array.
 * @param {Array} - source array
 * @returns {Array} - new array
 */
export declare const distinctValuesOfArray: (arr: any) => unknown[];
/**
 * Measures the time taken by a function to execute.
 * @param {Function} - callback function
 * @returns {*}
 */
export declare const timeTaken: (callback: Function) => any;
/**
 * 生成随机颜色
 * @returns {String}
 */
export declare const randomColor: () => string;
/**
 * 生成随机字符串
 * @param {Number} - 随机字符串长度
 * @returns {String}
 */
export declare const randomString: (length: number) => string;
/**
 * @param {String} - 被检测的字符串
 * @param {String} - 检测类型
 * @returns {Boolean}
 * @example
 * URL_START_WITH_HTTP_OR_HTTPS | URL_NOT_REQUIRE_HTTP_OR_HTTPS |
 * email | phone | tel | number | lower | upper | ip
 */
export declare const checkStringType: (str: string, type: string) => boolean;
/**
 * 生成随机数.
 * @param {Number} - 最小值
 * @param {Number} - 最大值
 * @returns {Number}
 */
export declare const randomNum: (Min: number, Max: number) => number;
/**
 * 数组排序.
 * @param {Array} - source array
 * @returns {Array} - new array
 */
export declare const quickSort: (arr: []) => any;
