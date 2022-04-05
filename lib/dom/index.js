"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setInputInvalidChars = exports.getBrowserType = exports.getOS_Type = exports.historyGo = exports.historyBackRefresh = exports.redirectHtml = exports.docReferrer = exports.historyLength = exports.requireJs = exports.getUrlParam = exports.setBaseFontSizeByClientWidth = exports.checkWebpSupport = exports.deleteCookie = exports.getCookie = exports.setCookie = exports.getImageSizePromise = exports.getImageSizeCallback = exports.getVideoInfoAsync = exports.loadVideo = void 0;
var tslib_1 = require("tslib");
var js_cookie_1 = tslib_1.__importDefault(require("js-cookie"));
var common_1 = require("../common");
/**
 * load file info from local
 * @param {File} file
 * @returns {Promise}
 */
exports.loadVideo = function (file) {
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
/**
 * load file info from local
 * @param {File} file
 * @returns {Object}
 */
exports.getVideoInfoAsync = function (file) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var video, e_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, exports.loadVideo(file)];
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
/**
 * get image size in browser
 * @param {String} src
 * @param {function(width,height)} callback
 * @returns {void}
 */
exports.getImageSizeCallback = function (src, callback) {
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
exports.getImageSizePromise = function (src) {
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
exports.setCookie = function (name, value, attributes) {
    if (attributes === void 0) { attributes = cookie_default_attributes; }
    js_cookie_1.default.set(name, value, attributes);
};
/**
 * get browser cookie
 * @param {String} name
 * @returns {string | undefined}
 */
exports.getCookie = function (name) {
    return js_cookie_1.default.get(name);
};
/**
 * delete browser cookie
 * @param {String} name
 * @returns {void}
 */
exports.deleteCookie = function (name, attributes) {
    if (attributes === void 0) { attributes = cookie_default_attributes; }
    js_cookie_1.default.remove(name, attributes);
};
/**
 * Check if the browser supports the webp format
 * @returns {boolean}
 */
exports.checkWebpSupport = function () {
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
/**
 * Set the page root element font size,
 * usually used in conjunction with rem
 * @returns {void}
 */
exports.setBaseFontSizeByClientWidth = function () {
    var baseSize = 16;
    var scale = document.documentElement.clientWidth / 375;
    document.documentElement.style.fontSize =
        baseSize * Math.min(scale, 2) + "px";
};
/**
 * Get current url param
 * @returns {{ [key: string]: string | string[] | void }}
 */
exports.getUrlParam = function () {
    var qs = document.location.search;
    qs = qs.split("+").join(" ");
    var params = {};
    var tokens, re = /[?&]?([^=]+)=([^&]*)/g;
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
exports.requireJs = function (url, callback) {
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
/**
 * 历史列表元素数量
 * @returns {Number}
 */
exports.historyLength = function () {
    return window.history.length;
};
/**
 * 导航到当前网页的超链接所在网页的URL
 * @returns {String}
 */
exports.docReferrer = function () {
    return document.referrer;
};
/**
 * 重载页面
 * 不添加新的历史记录
 */
exports.redirectHtml = function (url) {
    window.location.replace(url);
};
/**
 * 返回上一页
 * 返回后刷新
 */
exports.historyBackRefresh = function () {
    exports.redirectHtml(exports.docReferrer());
};
/**
 * 返回历史记录
 * 返回后不刷新
 */
exports.historyGo = function (num) {
    window.history.go(num);
};
/**
 * @param { string } navigator.userAgent
 * @param { number? } navigator.maxTouchPoints
 * @returns { availableOS_Type }
 */
exports.getOS_Type = function () {
    return common_1.getOS_FromAgent(navigator.userAgent, navigator.maxTouchPoints);
};
/**
 * 判断浏览器环境
 * @returns { availableBrowserType }
 */
exports.getBrowserType = function () {
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
/**
 * 设置输入框的输入字符限制
 * @param { HTMLInputElement } inputDom
 * @param { string[] } invalidChars
 * @param { boolean } isInvalidPaste
 */
exports.setInputInvalidChars = function (inputDom, invalidChars, isInvalidPaste) {
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
