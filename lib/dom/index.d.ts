import Cookies from "js-cookie";
import { availableOS_Type } from "../common";
type CreateProgressPopupReturn = {
    updateProgress: (percent: number) => void;
    closeProgressPopup: () => void;
};
/**
 * Displays a progress bar popup.
 * @param {String} titleText - The text to display as the popup title.
 * @returns {CreateProgressPopupReturn} Includes the `updateProgress` function to update the progress bar and the `closeProgressPopup` function to close the popup.
 */
export declare function createProgressPopup(titleText?: string): CreateProgressPopupReturn;
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
type getUrlParamResponse = {
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
type availableBrowserType = "MobileQQ" | "Wx" | "Chrome" | "Baidu" | "UC" | "Safari" | "QQBrowser" | "Weibo" | "Alipay" | "other";
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
type loaderParam = {
    zIndex?: string;
    showModal?: boolean;
    iconHtml?: string;
    text?: string;
    color?: string;
};
type loaderReturn = {
    close: Function;
};
/**
 * loader
 * @param { loaderParam } param
 * @returns { loaderReturn }
 */
export declare function loader({ zIndex, showModal, iconHtml, text, color, }?: loaderParam): loaderReturn;
/**
 * Generate Table Of Contents(TOC) for document, Return the generated TOC DOM and add IDs to headings without IDs.
 * @param {Document} - contentDom
 * @param {string} - queryTags
 * @param {string} - tocItemPrefix
 * @returns { HTMLDivElement | void }
 */
export declare function generateTableOfContents(contentDom?: Document, queryTags?: string, tocItemPrefix?: string): HTMLDivElement | void;
/**
 * Convert Blob To File
 * @param {Blob} - blob
 * @param {string} - fileName
 * @returns { File}
 */
export declare function blobToFile(blob: Blob, fileName: string): File;
/**
 * Convert dataURL To Blob
 * @param {string} - dataurl
 * @returns { Blob }
 */
export declare function dataURLtoBlob(dataurl: string): Blob | void;
/**
 * Convert Blob To dataURL
 * @param {Blob} - blob
 * @param {Function} - callback
 * @returns { void }
 */
export declare function blobToDataURL(blob: Blob, callback: Function): void;
export {};
