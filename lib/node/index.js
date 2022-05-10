"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readRecursionFileList = exports.serveStatic = void 0;
var tslib_1 = require("tslib");
var fs_1 = tslib_1.__importDefault(require("fs"));
var path_1 = tslib_1.__importDefault(require("path"));
var url_1 = tslib_1.__importDefault(require("url"));
/**
 * 静态文件服务
 * @param {string} folder 本地文件夹
 * @param {string} base_path 路由基础路径
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 * @returns {void}
 *
 * @example
 * import http from "http";
 *
 * http.createServer(function (req, res) {
 *   // 假如现在完整的访问url是 https://www.hello.com/other/path/images/icons/media.svg
 *   // 那么，响应的本地文件路径为 /root/static/images/icons/media.svg
 *   serveStatic("/root/static", "/other/path", req, res)
 * }).listen(3000);
 */
var serveStatic = function (folder, base_path, req, res) {
    var _a;
    // parse URL
    var parsedUrl = url_1.default.parse(req.url || "");
    var parsePathName = ((_a = parsedUrl.pathname) === null || _a === void 0 ? void 0 : _a.replace(base_path, "")) || "";
    // based on the URL path, extract the file extension. e.g. .js, .doc, ...
    var ext = path_1.default.parse(parsePathName).ext;
    // extract URL path
    var pathname = "".concat(folder).concat(parsePathName);
    // maps file extension to MIME typere
    var map = {
        ".ico": "image/x-icon",
        ".html": "text/html",
        ".js": "text/javascript",
        ".json": "application/json",
        ".css": "text/css",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".wav": "audio/wav",
        ".mp3": "audio/mpeg",
        ".svg": "image/svg+xml",
        ".pdf": "application/pdf",
        ".doc": "application/msword",
    };
    var exist = fs_1.default.existsSync(pathname);
    if (!exist) {
        // if the file is not found, return 404
        res.statusCode = 404;
        res.end("File ".concat(pathname, " not found!"));
        return;
    }
    // if is a directory search for index file matching the extension
    if (fs_1.default.statSync(pathname).isDirectory()) {
        if (!pathname.endsWith("/")) {
            pathname += "/";
        }
        if (!ext) {
            ext = ".html";
        }
        pathname += "index" + ext;
    }
    // read file from file system
    try {
        var data = fs_1.default.readFileSync(pathname);
        // if the file is found, set Content-type and send data
        res.setHeader("Content-type", map[ext] || "text/plain");
        res.end(data);
    }
    catch (err) {
        res.statusCode = 500;
        res.end("Error getting the file: ".concat(err, "."));
    }
};
exports.serveStatic = serveStatic;
/**
 * 递归获取文件夹下所有文件
 * @returns {Function}
 * @example
 * readRecursionFileList()("./dir")
 */
var readRecursionFileList = function () {
    var filesList = [];
    return function readFileList(dir) {
        var files = fs_1.default.readdirSync(dir);
        files.forEach(function (item) {
            var fullPath = path_1.default.join(dir, item);
            var stat = fs_1.default.statSync(fullPath);
            if (stat.isDirectory()) {
                readFileList(path_1.default.join(dir, item));
            }
            else {
                filesList.push(fullPath);
            }
        });
        return filesList;
    };
};
exports.readRecursionFileList = readRecursionFileList;
