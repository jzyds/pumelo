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
 * isVoidNull
 * @param {any} param
 * @returns {Boolean}
 */
export declare const isVoidNull: (param: any) => boolean;
/**
 * isVoidNullEmptyString
 * @param {any} param
 * @returns {Boolean}
 */
export declare const isVoidNullEmptyString: (param: any) => boolean;
/**
 * isNullArray
 * @param {any} arr
 * @returns {Boolean}
 */
export declare const isNullArray: (arr: string | any[]) => boolean;
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
export declare const updateQueryStringParameterByObj: (uri: string, obj?: any) => string;
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
export declare const flat: () => Function;
/**
 * timeDown
 * @param {Number} totalSeconds
 * @param {Function} fn
 * @returns {*}
 */
export declare const timeDown: (totalSeconds: number, fn: (arg0: string, arg1: string, arg2: string, arg3: string) => void) => void;
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
export declare const timeFormatWithRule: (timestamp: number, format: string) => string;
/**
 * every
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Boolean}
 */
export declare const every: (arr: Array<any>, fn: Function) => boolean;
/**
 * some
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Boolean}
 */
export declare const some: (arr: Array<any>, fn: Function) => boolean;
/**
 * once
 * @param {Function} fn
 * @returns {Function}
 */
export declare const once: (fn: Function) => () => any;
export declare const hp: (obj: Object, key: string) => boolean;
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
 * deep clone
 * @param {Array | Object} param
 * @returns {*}
 */
export declare const deepClone: <T>(param: T) => T;
/**
 * Returns all the distinct values of an array.
 * @param {Array} - source array
 * @returns {Array} - new array
 */
export declare const distinctValuesOfArray: (arr: Array<any>) => any[];
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
export declare const checkStringType: (str: string, type: "URL_START_WITH_HTTP_OR_HTTPS" | "URL_NOT_REQUIRE_HTTP_OR_HTTPS" | "email" | "phone" | "tel" | "number" | "lower" | "upper" | "ip") => boolean;
/**
 * 生成随机数.
 * @param {Number} - 最小值
 * @param {Number} - 最大值
 * @returns {Number}
 */
export declare const randomNum: (Min: number, Max: number) => number;
export declare type availableOS_Type = "windows" | "iphone" | "ipad" | "android" | "linux pc" | "mac" | "other";
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
export declare function getOS_FromAgent(agent: string, maxTouchPoints?: number): availableOS_Type;
/**
 * @param {any} - key
 * @param {T} - obj
 * @returns {Boolean}
 */
export declare function isObjKey<T>(key: any, obj: T): key is keyof T;
