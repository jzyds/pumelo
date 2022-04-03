import Cookies from "js-cookie";
import { availableOS_Type, getOS_FromAgent } from "../common";

/**
 * load file info from local
 * @param {File} file
 * @returns {Promise}
 */
export const loadVideo = (file: File): Promise<HTMLVideoElement> =>
  new Promise((resolve: (value: HTMLVideoElement) => void, reject) => {
    try {
      let video: HTMLVideoElement;
      video = document.createElement("video");
      video.preload = "metadata";
      video.onloadedmetadata = function () {
        resolve(video);
      };
      video.onerror = function () {
        reject("Invalid video. Please select a video file.");
      };
      video.src = window.URL.createObjectURL(file);
    } catch (e) {
      reject(e);
    }
  });

/**
 * load file info from local
 * @param {File} file
 * @returns {Object}
 */
export const getVideoInfoAsync = async (
  file: File
): Promise<{ duration?: HTMLVideoElement["duration"] }> => {
  try {
    let video = await loadVideo(file);
    return {
      duration: video.duration,
    };
  } catch (e) {
    return {};
  }
};

/**
 * get image size in browser
 * @param {String} src
 * @param {function(width,height)} callback
 * @returns {void}
 */
export const getImageSizeCallback = function (
  src: string,
  callback: (width: number, height: number) => void
): void {
  var img = new Image();
  img.onload = function () {
    callback(img.width, img.height);
  };
  img.src = src;
};

/**
 * get image size in browser
 * @param {String} src
 * @returns {void}
 */
export const getImageSizePromise = (
  src: string
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    var img = new Image();
    img.onload = function () {
      resolve({
        width: img.width,
        height: img.height,
      });
    };
    img.src = src;
  });
};

const cookie_default_attributes: Cookies.CookieAttributes = {
  expires: 7,
  path: "/",
};

/**
 * set browser cookie
 * @param {String} name
 * @param {String} value
 * @returns {void}
 */
export const setCookie = function (
  name: string,
  value: string,
  attributes: Cookies.CookieAttributes = cookie_default_attributes
): void {
  Cookies.set(name, value, attributes);
};

/**
 * get browser cookie
 * @param {String} name
 * @returns {string | undefined}
 */
export const getCookie = function (name: string): string | undefined {
  return Cookies.get(name);
};

/**
 * delete browser cookie
 * @param {String} name
 * @returns {void}
 */
export const deleteCookie = function (
  name: string,
  attributes: Cookies.CookieAttributes = cookie_default_attributes
): void {
  Cookies.remove(name, attributes);
};

/**
 * Check if the browser supports the webp format
 * @returns {boolean}
 */
export const checkWebpSupport = function (): boolean {
  try {
    return (
      document
        .createElement("canvas")
        .toDataURL("image/webp")
        .indexOf("data:image/webp") == 0
    );
  } catch (err) {
    return false;
  }
};

/**
 * Set the page root element font size,
 * usually used in conjunction with rem
 * @returns {void}
 */
export const setBaseFontSizeByClientWidth = (): void => {
  const baseSize = 16;
  const scale = document.documentElement.clientWidth / 375;
  document.documentElement.style.fontSize =
    baseSize * Math.min(scale, 2) + "px";
};

/**
 * Get current url param
 * @returns {object}
 */
export const getUrlParam = (): object => {
  let qs = document.location.search;
  qs = qs.split("+").join(" ");

  var params: any = {};
  var tokens,
    re = /[?&]?([^=]+)=([^&]*)/g;

  while ((tokens = re.exec(qs))) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }

  return params;
};

/**
 * 动态加载JS
 * @param {String} url
 * @param {Function} callback
 */
export const requireJs = function (url: string, callback: Function) {
  var newScript: any = document.createElement("script");
  newScript.type = "text/javascript";
  newScript.src = url;
  document.body.appendChild(newScript);
  if (typeof callback != "undefined") {
    if (newScript.readyState) {
      newScript.onreadystatechange = function () {
        if (
          newScript.readyState == "loaded" ||
          newScript.readyState == "complete"
        ) {
          newScript.onreadystatechange = null;
          callback();
        }
      };
    } else {
      newScript.onload = function () {
        callback();
      };
    }
  }
};

/**
 * 历史列表元素数量
 * @returns {Number}
 */
export const historyLength = function (): number {
  return window.history.length;
};

/**
 * 导航到当前网页的超链接所在网页的URL
 * @returns {String}
 */
export const docReferrer = function (): string {
  return document.referrer;
};

/**
 * 重载页面
 * 不添加新的历史记录
 */
export const redirectHtml = function (url: string) {
  window.location.replace(url);
};

/**
 * 返回上一页
 * 返回后刷新
 */
export const historyBackRefresh = function () {
  redirectHtml(docReferrer());
};

/**
 * 返回历史记录
 * 返回后不刷新
 */
export const historyGo = function (num: number) {
  window.history.go(num);
};

/**
 * @param { string } navigator.userAgent
 * @param { number? } navigator.maxTouchPoints
 * @returns { availableOS_Type }
 */
export const getOS_Type = (): availableOS_Type => {
  return getOS_FromAgent(navigator.userAgent, navigator.maxTouchPoints);
};

type availableBrowserType =
  | "MobileQQ"
  | "Wx"
  | "Chrome"
  | "Baidu"
  | "UC"
  | "Safari"
  | "QQBrowser"
  | "Weibo"
  | "Alipay"
  | "other";

/**
 * 判断浏览器环境
 * @returns { availableBrowserType }
 */
export const getBrowserType = (): availableBrowserType => {
  const UA = navigator.userAgent;
  if (
    /(iPad|iPhone|iPod).*? (IPad)?QQ\/([\d\.]+)/.test(UA) ||
    /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/.test(UA)
  ) {
    return "MobileQQ";
  }
  if (UA.toLowerCase().indexOf("micromessenger") !== -1) {
    return "Wx";
  }
  if (/Chrome\/([\d.]+)/.test(UA) || /CriOS\/([\d.]+)/.test(UA)) {
    return "Chrome";
  }
  if (/baidubrowser/i.test(UA)) {
    return "Baidu";
  }
  if (/UCBrowser/i.test(UA)) {
    return "UC";
  }
  if (/safari/i.test(UA)) {
    return "Safari";
  }
  if (/MQQBrowser/i.test(UA)) {
    return "QQBrowser";
  }
  if (/weibo/i.test(UA)) {
    return "Weibo";
  }
  if (/Alipay/i.test(UA)) {
    return "Alipay";
  }
  return "other";
};

/**
 * 设置输入框的输入字符限制
 * @param { HTMLInputElement } inputDom
 * @param { string[] } invalidChars
 * @param { boolean } isInvalidPaste
 */
export const setInputInvalidChars = (
  inputDom: HTMLInputElement,
  invalidChars: string[],
  isInvalidPaste: boolean = true
) => {
  isInvalidPaste &&
    inputDom.addEventListener("input", function () {
      invalidChars.forEach((char) => {
        this.value = this.value.replace(char, "");
      });
    });

  inputDom.addEventListener("keydown", function (e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  });
};
