/**
 * get image size in browser
 * @param {String} src
 * @param {function(width,height)} callback
 * @returns {void}
 */
export const getImageSizeCallback = function (src: string, callback: Function) {
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
export const getImageSizePromise = (src: string) => {
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

/**
 * set browser cookie
 * @param {String} name
 * @param {String} value
 * @returns {void}
 */
export const setCookie = function (name: string, value: string) {
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + escape(value) + ";expires=" + exp.toUTCString();
};

/**
 * get browser cookie
 * @param {String} name
 * @returns {void}
 */
export const getCookie = function (name: string) {
  var arr,
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null;
};

/**
 * delete browser cookie
 * @param {String} name
 * @returns {void}
 */
export const deleteCookie = function (name: string) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null) {
    document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
  }
};

/**
 * Check if the browser supports the webp format
 * @returns {boolean}
 */
export const checkWebp = function () {
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
export const setBaseFontSizeByClientWidth = () => {
  const baseSize = 16;
  const scale = document.documentElement.clientWidth / 375;
  document.documentElement.style.fontSize =
    baseSize * Math.min(scale, 2) + "px";
};

/**
 * Get current url param
 * @returns {object}
 */
export const getUrlParam = () => {
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
export const historyLength = function () {
  return window.history.length;
};

/**
 * 导航到当前网页的超链接所在网页的URL
 * @returns {String}
 */
export const docReferrer = function () {
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
 * 判断浏览器环境;
 */
export const browserObj = {
  isMobile: function () {
    return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
  },
  isAndroid: function () {
    return /Android/i.test(navigator.userAgent);
  },
  isMobileQQ: function () {
    var ua = navigator.userAgent;
    return (
      /(iPad|iPhone|iPod).*? (IPad)?QQ\/([\d\.]+)/.test(ua) ||
      /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/.test(ua)
    );
  },
  isIOS: function () {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  },
  isWx: function () {
    var ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("micromessenger") != -1;
  },
  isChrome: function () {
    return (
      /Chrome\/([\d.]+)/.test(navigator.userAgent) ||
      /CriOS\/([\d.]+)/.test(navigator.userAgent)
    );
  },
  isBaidu: function () {
    return /baidubrowser/i.test(navigator.userAgent);
  },
  isUC: function () {
    return /UCBrowser/i.test(navigator.userAgent);
  },
  isSafari: function () {
    return /safari/i.test(navigator.userAgent);
  },
  isQQBrowser: function () {
    return /MQQBrowser/i.test(navigator.userAgent);
  },
  isWeibo: function () {
    return /weibo/i.test(navigator.userAgent);
  },
  isAlipay: function () {
    return /Alipay/i.test(navigator.userAgent);
  },
};
