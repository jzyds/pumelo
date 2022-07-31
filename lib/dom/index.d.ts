import Cookies from "js-cookie";
import { availableOS_Type } from "../common";
/**
 * load file info from local
 * @param {File} file
 * @returns {Promise}
 */
export declare const loadVideo: (file: File) => Promise<HTMLVideoElement>;
/**
 * load file info from local
 * @param {File} file
 * @returns {Object}
 */
export declare const getVideoInfoAsync: (file: File) => Promise<{
    duration?: HTMLVideoElement["duration"];
}>;
/**
 * get image size in browser
 * @param {String} src
 * @param {function(width,height)} callback
 * @returns {void}
 */
export declare const getImageSizeCallback: (src: string, callback: (width: number, height: number) => void) => void;
/**
 * get image size in browser
 * @param {String} src
 * @returns {void}
 */
export declare const getImageSizePromise: (src: string) => Promise<{
    width: number;
    height: number;
}>;
/**
 * set browser cookie
 * @param {String} name
 * @param {String} value
 * @returns {void}
 */
export declare const setCookie: (name: string, value: string, attributes?: Cookies.CookieAttributes) => void;
/**
 * get browser cookie
 * @param {String} name
 * @returns {string | undefined}
 */
export declare const getCookie: (name: string) => string | undefined;
/**
 * delete browser cookie
 * @param {String} name
 * @returns {void}
 */
export declare const deleteCookie: (name: string, attributes?: Cookies.CookieAttributes) => void;
/**
 * Check if the browser supports the webp format
 * @returns {boolean}
 */
export declare const checkWebpSupport: () => boolean;
/**
 * Set the page root element font size,
 * usually used in conjunction with rem
 * @returns {void}
 */
export declare const setBaseFontSizeByClientWidth: () => void;
declare type getUrlParamResponse = {
    [key: string]: string | string[] | void;
};
/**
 * Get current url param
 * @returns {getUrlParamResponse}
 */
export declare const getUrlParam: () => getUrlParamResponse;
/**
 * 动态加载JS
 * @param {String} url
 * @param {Function} callback
 */
export declare const requireJs: (url: string, callback: Function) => void;
/**
 * 历史列表元素数量
 * @returns {Number}
 */
export declare const historyLength: () => number;
/**
 * 导航到当前网页的超链接所在网页的URL
 * @returns {String}
 */
export declare const docReferrer: () => string;
/**
 * 重载页面
 * 不添加新的历史记录
 */
export declare const redirectHtml: (url: string) => void;
/**
 * 返回上一页
 * 返回后刷新
 */
export declare const historyBackRefresh: () => void;
/**
 * 返回历史记录
 * 返回后不刷新
 */
export declare const historyGo: (num: number) => void;
/**
 * 获取当前系统类型
 * @returns { availableOS_Type }
 */
export declare const getOS_Type: () => availableOS_Type;
declare type availableBrowserType = "MobileQQ" | "Wx" | "Chrome" | "Baidu" | "UC" | "Safari" | "QQBrowser" | "Weibo" | "Alipay" | "other";
/**
 * 判断浏览器环境
 * @returns { availableBrowserType }
 */
export declare const getBrowserType: () => availableBrowserType;
/**
 * 设置输入框的输入字符限制
 * @param { HTMLInputElement } inputDom
 * @param { string[] } invalidChars
 * @param { boolean } isInvalidPaste
 */
export declare const setInputInvalidChars: (inputDom: HTMLInputElement, invalidChars: string[], isInvalidPaste?: boolean) => void;
declare type loaderParam = {
    zIndex?: string;
    showModal?: boolean;
    iconHtml?: string;
    text?: string;
    color?: string;
};
declare type loaderReturn = {
    close: Function;
};
/**
 * loader
 * @param { loaderParam } param
 * @returns { loaderReturn }
 */
export declare function loader({ zIndex, showModal, iconHtml, text, color, }?: loaderParam): loaderReturn;
export {};
