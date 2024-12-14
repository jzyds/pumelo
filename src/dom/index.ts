import Cookies from "js-cookie";
import { availableOS_Type, getOS_FromAgent, uuidv4 } from "../common";

type CreateProgressPopupReturn = {
  updateProgress: (percent: number) => void;
  closeProgressPopup: () => void;
};

/**
 * Displays a progress bar popup.
 * @param {String} titleText - The text to display as the popup title.
 * @returns {CreateProgressPopupReturn} Includes the `updateProgress` function to update the progress bar and the `closeProgressPopup` function to close the popup.
 */
export function createProgressPopup(
  titleText = "Downloading..."
): CreateProgressPopupReturn {
  const progressPopupId = `progressPopup-${uuidv4()}`; // 随机生成ID

  // 动态创建进度弹出框
  const popup = document.createElement("div");
  popup.id = progressPopupId;
  Object.assign(popup.style, {
    position: "fixed",
    top: "10px",
    right: "10px",
    width: "300px",
    background: "#fff",
    border: "1px solid #ccc",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    borderRadius: "5px",
    padding: "15px",
    zIndex: "1000",
  });

  // 添加标题
  const title = document.createElement("h3");
  title.innerText = titleText;
  title.style.margin = "0";
  title.style.fontSize = "16px";
  popup.appendChild(title);

  // 添加关闭按钮
  const closeButton = document.createElement("button");
  closeButton.innerText = "×";
  Object.assign(closeButton.style, {
    position: "absolute",
    top: "5px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  });
  closeButton.addEventListener("click", () => {
    document.body.removeChild(popup);
  });
  popup.appendChild(closeButton);

  // 添加进度条
  const progressBar = document.createElement("progress");
  progressBar.value = 0;
  progressBar.max = 100;
  Object.assign(progressBar.style, {
    width: "100%",
    height: "10px",
    marginTop: "10px",
  });
  popup.appendChild(progressBar);

  // 将弹出框添加到页面
  document.body.appendChild(popup);

  // 返回更新和销毁方法
  return {
    updateProgress: (percent: number) => {
      progressBar.value = percent;
    },
    closeProgressPopup: () => {
      document.body.removeChild(popup);
    },
  };
}

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

type getUrlParamResponse = { [key: string]: string | string[] | void };

/**
 * Get current url param
 * @returns {getUrlParamResponse}
 */
export const getUrlParam = (): getUrlParamResponse => {
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
 * 获取当前系统类型
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

type loaderParam = {
  zIndex?: string;
  showModal?: boolean;
  iconHtml?: string;
  text?: string;
  color?: string;
};

type loaderReturn = { close: Function };

/**
 * loader
 * @param { loaderParam } param
 * @returns { loaderReturn }
 */
export function loader({
  zIndex,
  showModal = true,
  iconHtml,
  text,
  color = "#fff",
}: loaderParam = {}): loaderReturn {
  const dom = document.createElement("div");
  const { style } = dom;
  style.width = "100%";
  style.height = "100%";
  style.zIndex = zIndex || "1000";
  style.position = "fixed";
  style.left = "0";
  style.top = "0";
  style.display = "flex";
  style.flexDirection = "column";
  style.justifyContent = "center";
  style.alignItems = "center";
  showModal && (style.backgroundColor = "rgba(0,0,0,0.2)");
  dom.innerHTML =
    iconHtml ||
    `
    <div style="width: 100px; height: 100px; display: flex; justify-content:center; align-items: center;">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
        <circle fill="none" stroke="${color}" stroke-width="6" stroke-miterlimit="15" stroke-dasharray="14.2472,14.2472" cx="50" cy="50" r="47" >
          <animateTransform 
            attributeName="transform" 
            attributeType="XML" 
            type="rotate"
            dur="5s" 
            from="0 50 50"
            to="360 50 50" 
            repeatCount="indefinite" />
      </circle>
      <circle fill="none" stroke="${color}" stroke-width="1" stroke-miterlimit="10" stroke-dasharray="10,10" cx="50" cy="50" r="39">
          <animateTransform 
            attributeName="transform" 
            attributeType="XML" 
            type="rotate"
            dur="5s" 
            from="0 50 50"
            to="-360 50 50" 
            repeatCount="indefinite" />
      </circle>
      <g fill="${color}">
      <rect x="30" y="35" width="5" height="30">
        <animateTransform 
          attributeName="transform" 
          dur="1s" 
          type="translate" 
          values="0 5 ; 0 -5; 0 5" 
          repeatCount="indefinite" 
          begin="0.1"/>
      </rect>
      <rect x="40" y="35" width="5" height="30" >
        <animateTransform 
          attributeName="transform" 
          dur="1s" 
          type="translate" 
          values="0 5 ; 0 -5; 0 5" 
          repeatCount="indefinite" 
          begin="0.2"/>
      </rect>
      <rect x="50" y="35" width="5" height="30" >
        <animateTransform 
          attributeName="transform" 
          dur="1s" 
          type="translate" 
          values="0 5 ; 0 -5; 0 5" 
          repeatCount="indefinite" 
          begin="0.3"/>
      </rect>
      <rect x="60" y="35" width="5" height="30" >
        <animateTransform 
          attributeName="transform" 
          dur="1s" 
          type="translate" 
          values="0 5 ; 0 -5; 0 5"  
          repeatCount="indefinite" 
          begin="0.4"/>
      </rect>
      <rect x="70" y="35" width="5" height="30" >
        <animateTransform 
          attributeName="transform" 
          dur="1s" 
          type="translate" 
          values="0 5 ; 0 -5; 0 5" 
          repeatCount="indefinite" 
          begin="0.5"/>
      </rect>
      </g>
    </svg>
  </div>
  `;

  text &&
    (dom.innerHTML += `
    <h2 style="margin-top: 20px; color: ${color}; font-size: 20px; font-weight:bold;">${text}</h2>
  `);
  document.body.appendChild(dom);

  return {
    close: function () {
      document.body.removeChild(dom);
    },
  };
}

/**
 * Generate Table Of Contents(TOC) for document, Return the generated TOC DOM and add IDs to headings without IDs.
 * @param {Document} - contentDom
 * @param {string} - queryTags
 * @param {string} - tocItemPrefix
 * @returns { HTMLDivElement | void }
 */
export function generateTableOfContents(
  contentDom?: Document,
  queryTags = "h1, h2, h3, h4, h5, h6",
  tocItemPrefix = `> `
): HTMLDivElement | void {
  const documentRef = contentDom || document;
  const tocDom = document.createElement("div");
  const headings = documentRef.querySelectorAll(queryTags);
  if (!headings.length) {
    return void 0;
  }
  Array.from(headings).forEach(function (heading, index) {
    let ref = "toc" + index;
    if (heading.hasAttribute("id")) {
      ref = heading.getAttribute("id") as string;
    } else {
      heading.setAttribute("id", ref);
    }

    const div = tocDom.appendChild(documentRef.createElement("div"));
    div.setAttribute("class", heading.tagName.toLowerCase());

    const link = div.appendChild(documentRef.createElement("a"));
    link.setAttribute("href", "#" + ref);
    link.textContent = tocItemPrefix + heading.textContent;
  });

  return tocDom;
}

/**
 * Convert Blob To File
 * @param {Blob} - blob
 * @param {string} - fileName
 * @returns { File}
 */
export function blobToFile(blob: Blob, fileName: string): File {
  return new File([blob], fileName, {
    lastModified: new Date().getTime(),
    type: blob.type,
  });
}

/**
 * Convert dataURL To Blob
 * @param {string} - dataurl
 * @returns { Blob }
 */
export function dataURLtoBlob(dataurl: string): Blob | void {
  const arr = dataurl.split(",");
  if (arr.length > 0 && typeof arr[0] === "string") {
    const mimeArray = arr[0].match(/:(.*?);/);
    if (mimeArray && mimeArray.length > 0) {
      const mime = mimeArray[1];
      const bstr = window.atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    }
  }
}

/**
 * Convert Blob To dataURL
 * @param {Blob} - blob
 * @param {Function} - callback
 * @returns { void }
 */
export function blobToDataURL(blob: Blob, callback: Function): void {
  var a = new FileReader();
  a.onload = function (e) {
    e.target && callback(e.target.result);
  };
  a.readAsDataURL(blob);
}
