"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTableOfContents = exports.loader = exports.setInputInvalidChars = exports.getBrowserType = exports.getOS_Type = exports.historyGo = exports.historyBackRefresh = exports.redirectHtml = exports.docReferrer = exports.historyLength = exports.requireJs = exports.getUrlParam = exports.setBaseFontSizeByClientWidth = exports.checkWebpSupport = exports.deleteCookie = exports.getCookie = exports.setCookie = exports.getImageSizePromise = exports.getImageSizeCallback = exports.getVideoInfoAsync = exports.loadVideo = void 0;
var tslib_1 = require("tslib");
var js_cookie_1 = tslib_1.__importDefault(require("js-cookie"));
var common_1 = require("../common");
/**
 * load file info from local
 * @param {File} file
 * @returns {Promise}
 */
var loadVideo = function (file) {
    return new Promise(function (resolve, reject) {
        try {
            var video_1;
            video_1 = document.createElement("video");
            video_1.preload = "metadata";
            video_1.onloadedmetadata = function () {
                resolve(video_1);
            };
            video_1.onerror = function () {
                reject("Invalid video. Please select a video file.");
            };
            video_1.src = window.URL.createObjectURL(file);
        }
        catch (e) {
            reject(e);
        }
    });
};
exports.loadVideo = loadVideo;
/**
 * load file info from local
 * @param {File} file
 * @returns {Object}
 */
var getVideoInfoAsync = function (file) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var video, e_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, exports.loadVideo)(file)];
            case 1:
                video = _a.sent();
                return [2 /*return*/, {
                        duration: video.duration,
                    }];
            case 2:
                e_1 = _a.sent();
                return [2 /*return*/, {}];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getVideoInfoAsync = getVideoInfoAsync;
/**
 * get image size in browser
 * @param {String} src
 * @param {function(width,height)} callback
 * @returns {void}
 */
var getImageSizeCallback = function (src, callback) {
    var img = new Image();
    img.onload = function () {
        callback(img.width, img.height);
    };
    img.src = src;
};
exports.getImageSizeCallback = getImageSizeCallback;
/**
 * get image size in browser
 * @param {String} src
 * @returns {void}
 */
var getImageSizePromise = function (src) {
    return new Promise(function (resolve) {
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
exports.getImageSizePromise = getImageSizePromise;
var cookie_default_attributes = {
    expires: 7,
    path: "/",
};
/**
 * set browser cookie
 * @param {String} name
 * @param {String} value
 * @returns {void}
 */
var setCookie = function (name, value, attributes) {
    if (attributes === void 0) { attributes = cookie_default_attributes; }
    js_cookie_1.default.set(name, value, attributes);
};
exports.setCookie = setCookie;
/**
 * get browser cookie
 * @param {String} name
 * @returns {string | undefined}
 */
var getCookie = function (name) {
    return js_cookie_1.default.get(name);
};
exports.getCookie = getCookie;
/**
 * delete browser cookie
 * @param {String} name
 * @returns {void}
 */
var deleteCookie = function (name, attributes) {
    if (attributes === void 0) { attributes = cookie_default_attributes; }
    js_cookie_1.default.remove(name, attributes);
};
exports.deleteCookie = deleteCookie;
/**
 * Check if the browser supports the webp format
 * @returns {boolean}
 */
var checkWebpSupport = function () {
    try {
        return (document
            .createElement("canvas")
            .toDataURL("image/webp")
            .indexOf("data:image/webp") == 0);
    }
    catch (err) {
        return false;
    }
};
exports.checkWebpSupport = checkWebpSupport;
/**
 * Set the page root element font size,
 * usually used in conjunction with rem
 * @returns {void}
 */
var setBaseFontSizeByClientWidth = function () {
    var baseSize = 16;
    var scale = document.documentElement.clientWidth / 375;
    document.documentElement.style.fontSize =
        baseSize * Math.min(scale, 2) + "px";
};
exports.setBaseFontSizeByClientWidth = setBaseFontSizeByClientWidth;
/**
 * Get current url param
 * @returns {getUrlParamResponse}
 */
var getUrlParam = function () {
    var qs = document.location.search;
    qs = qs.split("+").join(" ");
    var params = {};
    var tokens, re = /[?&]?([^=]+)=([^&]*)/g;
    while ((tokens = re.exec(qs))) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
};
exports.getUrlParam = getUrlParam;
/**
 * 动态加载JS
 * @param {String} url
 * @param {Function} callback
 */
var requireJs = function (url, callback) {
    var newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.src = url;
    document.body.appendChild(newScript);
    if (typeof callback != "undefined") {
        if (newScript.readyState) {
            newScript.onreadystatechange = function () {
                if (newScript.readyState == "loaded" ||
                    newScript.readyState == "complete") {
                    newScript.onreadystatechange = null;
                    callback();
                }
            };
        }
        else {
            newScript.onload = function () {
                callback();
            };
        }
    }
};
exports.requireJs = requireJs;
/**
 * 历史列表元素数量
 * @returns {Number}
 */
var historyLength = function () {
    return window.history.length;
};
exports.historyLength = historyLength;
/**
 * 导航到当前网页的超链接所在网页的URL
 * @returns {String}
 */
var docReferrer = function () {
    return document.referrer;
};
exports.docReferrer = docReferrer;
/**
 * 重载页面
 * 不添加新的历史记录
 */
var redirectHtml = function (url) {
    window.location.replace(url);
};
exports.redirectHtml = redirectHtml;
/**
 * 返回上一页
 * 返回后刷新
 */
var historyBackRefresh = function () {
    (0, exports.redirectHtml)((0, exports.docReferrer)());
};
exports.historyBackRefresh = historyBackRefresh;
/**
 * 返回历史记录
 * 返回后不刷新
 */
var historyGo = function (num) {
    window.history.go(num);
};
exports.historyGo = historyGo;
/**
 * 获取当前系统类型
 * @returns { availableOS_Type }
 */
var getOS_Type = function () {
    return (0, common_1.getOS_FromAgent)(navigator.userAgent, navigator.maxTouchPoints);
};
exports.getOS_Type = getOS_Type;
/**
 * 判断浏览器环境
 * @returns { availableBrowserType }
 */
var getBrowserType = function () {
    var UA = navigator.userAgent;
    if (/(iPad|iPhone|iPod).*? (IPad)?QQ\/([\d\.]+)/.test(UA) ||
        /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/.test(UA)) {
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
exports.getBrowserType = getBrowserType;
/**
 * 设置输入框的输入字符限制
 * @param { HTMLInputElement } inputDom
 * @param { string[] } invalidChars
 * @param { boolean } isInvalidPaste
 */
var setInputInvalidChars = function (inputDom, invalidChars, isInvalidPaste) {
    if (isInvalidPaste === void 0) { isInvalidPaste = true; }
    isInvalidPaste &&
        inputDom.addEventListener("input", function () {
            var _this = this;
            invalidChars.forEach(function (char) {
                _this.value = _this.value.replace(char, "");
            });
        });
    inputDom.addEventListener("keydown", function (e) {
        if (invalidChars.includes(e.key)) {
            e.preventDefault();
        }
    });
};
exports.setInputInvalidChars = setInputInvalidChars;
/**
 * loader
 * @param { loaderParam } param
 * @returns { loaderReturn }
 */
function loader(_a) {
    var _b = _a === void 0 ? {} : _a, zIndex = _b.zIndex, _c = _b.showModal, showModal = _c === void 0 ? true : _c, iconHtml = _b.iconHtml, text = _b.text, _d = _b.color, color = _d === void 0 ? "#fff" : _d;
    var dom = document.createElement("div");
    var style = dom.style;
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
            "\n    <div style=\"width: 100px; height: 100px; display: flex; justify-content:center; align-items: center;\">\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">\n        <circle fill=\"none\" stroke=\"".concat(color, "\" stroke-width=\"6\" stroke-miterlimit=\"15\" stroke-dasharray=\"14.2472,14.2472\" cx=\"50\" cy=\"50\" r=\"47\" >\n          <animateTransform \n            attributeName=\"transform\" \n            attributeType=\"XML\" \n            type=\"rotate\"\n            dur=\"5s\" \n            from=\"0 50 50\"\n            to=\"360 50 50\" \n            repeatCount=\"indefinite\" />\n      </circle>\n      <circle fill=\"none\" stroke=\"").concat(color, "\" stroke-width=\"1\" stroke-miterlimit=\"10\" stroke-dasharray=\"10,10\" cx=\"50\" cy=\"50\" r=\"39\">\n          <animateTransform \n            attributeName=\"transform\" \n            attributeType=\"XML\" \n            type=\"rotate\"\n            dur=\"5s\" \n            from=\"0 50 50\"\n            to=\"-360 50 50\" \n            repeatCount=\"indefinite\" />\n      </circle>\n      <g fill=\"").concat(color, "\">\n      <rect x=\"30\" y=\"35\" width=\"5\" height=\"30\">\n        <animateTransform \n          attributeName=\"transform\" \n          dur=\"1s\" \n          type=\"translate\" \n          values=\"0 5 ; 0 -5; 0 5\" \n          repeatCount=\"indefinite\" \n          begin=\"0.1\"/>\n      </rect>\n      <rect x=\"40\" y=\"35\" width=\"5\" height=\"30\" >\n        <animateTransform \n          attributeName=\"transform\" \n          dur=\"1s\" \n          type=\"translate\" \n          values=\"0 5 ; 0 -5; 0 5\" \n          repeatCount=\"indefinite\" \n          begin=\"0.2\"/>\n      </rect>\n      <rect x=\"50\" y=\"35\" width=\"5\" height=\"30\" >\n        <animateTransform \n          attributeName=\"transform\" \n          dur=\"1s\" \n          type=\"translate\" \n          values=\"0 5 ; 0 -5; 0 5\" \n          repeatCount=\"indefinite\" \n          begin=\"0.3\"/>\n      </rect>\n      <rect x=\"60\" y=\"35\" width=\"5\" height=\"30\" >\n        <animateTransform \n          attributeName=\"transform\" \n          dur=\"1s\" \n          type=\"translate\" \n          values=\"0 5 ; 0 -5; 0 5\"  \n          repeatCount=\"indefinite\" \n          begin=\"0.4\"/>\n      </rect>\n      <rect x=\"70\" y=\"35\" width=\"5\" height=\"30\" >\n        <animateTransform \n          attributeName=\"transform\" \n          dur=\"1s\" \n          type=\"translate\" \n          values=\"0 5 ; 0 -5; 0 5\" \n          repeatCount=\"indefinite\" \n          begin=\"0.5\"/>\n      </rect>\n      </g>\n    </svg>\n  </div>\n  ");
    text &&
        (dom.innerHTML += "\n    <h2 style=\"margin-top: 20px; color: ".concat(color, "; font-size: 20px; font-weight:bold;\">").concat(text, "</h2>\n  "));
    document.body.appendChild(dom);
    return {
        close: function () {
            document.body.removeChild(dom);
        },
    };
}
exports.loader = loader;
/**
 * Generate Table Of Contents(TOC) for document, Return the generated TOC DOM and add IDs to headings without IDs.
 * @param {Document} - contentDom
 * @param {string} - queryTags
 * @param {string} - tocItemPrefix
 * @returns { HTMLDivElement | void }
 */
function generateTableOfContents(contentDom, queryTags, tocItemPrefix) {
    if (queryTags === void 0) { queryTags = "h1, h2, h3, h4, h5, h6"; }
    if (tocItemPrefix === void 0) { tocItemPrefix = "> "; }
    var documentRef = contentDom || document;
    var tocDom = document.createElement("div");
    var headings = documentRef.querySelectorAll(queryTags);
    if (!headings.length) {
        return void 0;
    }
    Array.from(headings).forEach(function (heading, index) {
        var ref = "toc" + index;
        if (heading.hasAttribute("id")) {
            ref = heading.getAttribute("id");
        }
        else {
            heading.setAttribute("id", ref);
        }
        var div = tocDom.appendChild(documentRef.createElement("div"));
        div.setAttribute("class", heading.tagName.toLowerCase());
        var link = div.appendChild(documentRef.createElement("a"));
        link.setAttribute("href", "#" + ref);
        link.textContent = tocItemPrefix + heading.textContent;
    });
    return tocDom;
}
exports.generateTableOfContents = generateTableOfContents;
