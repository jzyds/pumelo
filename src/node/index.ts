import fs from "fs";
import path from "path";
import url from "url";
import type http from "http";

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
export const serveStatic = (
  folder: string,
  base_path: string,
  req: http.IncomingMessage,
  res: http.ServerResponse
): void => {
  // parse URL
  const parsedUrl = url.parse(req.url || "");
  const parsePathName = parsedUrl.pathname?.replace(base_path, "") || "";
  // based on the URL path, extract the file extension. e.g. .js, .doc, ...
  let ext = path.parse(parsePathName).ext;
  // extract URL path
  let pathname = `${folder}${parsePathName}`;
  // maps file extension to MIME typere
  const map = {
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

  const exist = fs.existsSync(pathname);
  if (!exist) {
    // if the file is not found, return 404
    res.statusCode = 404;
    res.end(`File ${pathname} not found!`);
    return;
  }

  // if is a directory search for index file matching the extension
  if (fs.statSync(pathname).isDirectory()) {
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
    const data = fs.readFileSync(pathname);
    // if the file is found, set Content-type and send data
    res.setHeader("Content-type", map[ext] || "text/plain");
    res.end(data);
  } catch (err) {
    res.statusCode = 500;
    res.end(`Error getting the file: ${err}.`);
  }
};

/**
 * 递归获取文件夹下所有文件
 * @returns {Function}
 * @example
 * readRecursionFileList()("./dir")
 */
export const readRecursionFileList = (): Function => {
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
