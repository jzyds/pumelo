"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readRecursionFileList = void 0;
var fs = require("fs");
var path = require("path");
/**
 * 递归获取文件夹下所有文件
 * @returns {Function}
 * @example
 * readRecursionFileList()("./dir")
 */
exports.readRecursionFileList = function () {
    var filesList = [];
    return function readFileList(dir) {
        var files = fs.readdirSync(dir);
        files.forEach(function (item) {
            var fullPath = path.join(dir, item);
            var stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                readFileList(path.join(dir, item));
            }
            else {
                filesList.push(fullPath);
            }
        });
        return filesList;
    };
};
