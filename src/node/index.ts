const fs = require("fs");
const path = require("path");

/**
 * 递归获取文件夹下所有文件
 * @returns {Function}
 * @example
 * readRecursionFileList()("./dir")
 */
export const readRecursionFileList = function (): Function {
  let filesList: Array<string> = [];
  return function readFileList(dir: string) {
    let files = fs.readdirSync(dir);
    files.forEach((item: string) => {
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
