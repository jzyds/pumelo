## Functions

<dl>
<dt><a href="#serveStatic">serveStatic(folder, base_path, req, res)</a> ⇒ <code>void</code></dt>
<dd><p>静态文件服务</p>
</dd>
<dt><a href="#readRecursionFileList">readRecursionFileList()</a> ⇒ <code>function</code></dt>
<dd><p>递归获取文件夹下所有文件</p>
</dd>
</dl>

<a name="serveStatic"></a>

## serveStatic(folder, base_path, req, res) ⇒ <code>void</code>
静态文件服务

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| folder | <code>string</code> | 本地文件夹 |
| base_path | <code>string</code> | 路由基础路径 |
| req | <code>http.IncomingMessage</code> |  |
| res | <code>http.ServerResponse</code> |  |

**Example**  
```js
import http from "http";http.createServer(function (req, res) {  // 假如现在完整的访问url是 https://www.hello.com/other/path/images/icons/media.svg  // 那么，响应的本地文件路径为 /root/static/images/icons/media.svg  serveStatic("/root/static", "/other/path", req, res)}).listen(3000);
```
<a name="readRecursionFileList"></a>

## readRecursionFileList() ⇒ <code>function</code>
递归获取文件夹下所有文件

**Kind**: global function  
**Example**  
```js
readRecursionFileList()("./dir")
```
