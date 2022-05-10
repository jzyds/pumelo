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
export declare const serveStatic: (folder: string, base_path: string, req: http.IncomingMessage, res: http.ServerResponse) => void;
/**
 * 递归获取文件夹下所有文件
 * @returns {Function}
 * @example
 * readRecursionFileList()("./dir")
 */
export declare const readRecursionFileList: () => Function;
