const fs = require("fs");
const path = require("path");

/**
 * 递归获取文件夹下所有文件
 * @returns {Function}
 * @example
 * readRecursionFileList()("./dir")
 */
export const readRecursionFileList = function () {
  let filesList: any = [];
  return function readFileList(dir: any) {
    let files = fs.readdirSync(dir);
    files.forEach((item: any) => {
      let fullPath = path.join(dir, item);
      let stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        readFileList(path.join(dir, item));
      } else {
        filesList.push(fullPath);
      }
    });
    return filesList;
  };
};
