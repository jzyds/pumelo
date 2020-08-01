/**
 * load file info from local
 * @param {File} file
 * @returns {Promise}
 */
export declare const loadVideo: (file: any) => Promise<HTMLVideoElement>;
/**
 * load file info from local
 * @param {File} file
 * @returns {Object}
 */
export declare const getVideoInfoAsync: (file: any) => Promise<{
    duration: number;
} | {
    duration?: undefined;
}>;
/**
 * get image size in browser
 * @param {String} src
 * @param {function(width,height)} callback
 * @returns {void}
 */
export declare const getImageSizeCallback: (src: string, callback: Function) => void;
/**
 * get image size in browser
 * @param {String} src
 * @returns {void}
 */
export declare const getImageSizePromise: (src: string) => Promise<unknown>;
/**
 * set browser cookie
 * @param {String} name
 * @param {String} value
 * @returns {void}
 */
export declare const setCookie: (name: string, value: string) => void;
/**
 * get browser cookie
 * @param {String} name
 * @returns {void}
 */
export declare const getCookie: (name: string) => string | null;
/**
 * delete browser cookie
 * @param {String} name
 * @returns {void}
 */
export declare const deleteCookie: (name: string) => void;
/**
 * Check if the browser supports the webp format
 * @returns {boolean}
 */
export declare const checkWebp: () => boolean;
/**
 * Set the page root element font size,
 * usually used in conjunction with rem
 * @returns {void}
 */
export declare const setBaseFontSizeByClientWidth: () => void;
/**
 * Get current url param
 * @returns {object}
 */
export declare const getUrlParam: () => any;
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
 * 判断浏览器环境;
 */
export declare const browserObj: {
    isMobile: () => boolean;
    isAndroid: () => boolean;
    isMobileQQ: () => boolean;
    isIOS: () => boolean;
    isWx: () => boolean;
    isChrome: () => boolean;
    isBaidu: () => boolean;
    isUC: () => boolean;
    isSafari: () => boolean;
    isQQBrowser: () => boolean;
    isWeibo: () => boolean;
    isAlipay: () => boolean;
};
