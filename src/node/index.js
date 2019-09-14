const fs = require ('fs');
const path = require ('path');

/**
 * 递归获取文件夹下所有文件
 * @returns {Function}
 * @example
 * readRecursionFileList()("./dir")
 */
module.exports.readRecursionFileList = function () {
  let filesList = [];
  return function readFileList (dir) {
    let files = fs.readdirSync (dir);
    files.forEach (item => {
      let fullPath = path.join (dir, item);
      let stat = fs.statSync (fullPath);
      if (stat.isDirectory ()) {
        readFileList (path.join (dir, item));
      } else {
        filesList.push (fullPath);
      }
    });
    return filesList;
  };
};
