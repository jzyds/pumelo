## Functions

<dl>
<dt><a href="#loadVideo">loadVideo(file)</a> ⇒ <code>Promise</code></dt>
<dd><p>load file info from local</p>
</dd>
<dt><a href="#getVideoInfoAsync">getVideoInfoAsync(file)</a> ⇒ <code>Object</code></dt>
<dd><p>load file info from local</p>
</dd>
<dt><a href="#getImageSizeCallback">getImageSizeCallback(src, callback)</a> ⇒ <code>void</code></dt>
<dd><p>get image size in browser</p>
</dd>
<dt><a href="#getImageSizePromise">getImageSizePromise(src)</a> ⇒ <code>void</code></dt>
<dd><p>get image size in browser</p>
</dd>
<dt><a href="#setCookie">setCookie(name, value)</a> ⇒ <code>void</code></dt>
<dd><p>set browser cookie</p>
</dd>
<dt><a href="#getCookie">getCookie(name)</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>get browser cookie</p>
</dd>
<dt><a href="#deleteCookie">deleteCookie(name)</a> ⇒ <code>void</code></dt>
<dd><p>delete browser cookie</p>
</dd>
<dt><a href="#checkWebpSupport">checkWebpSupport()</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the browser supports the webp format</p>
</dd>
<dt><a href="#setBaseFontSizeByClientWidth">setBaseFontSizeByClientWidth()</a> ⇒ <code>void</code></dt>
<dd><p>Set the page root element font size,
usually used in conjunction with rem</p>
</dd>
<dt><a href="#getUrlParam">getUrlParam()</a> ⇒ <code>getUrlParamResponse</code></dt>
<dd><p>Get current url param</p>
</dd>
<dt><a href="#requireJs">requireJs(url, callback)</a></dt>
<dd><p>动态加载JS</p>
</dd>
<dt><a href="#historyLength">historyLength()</a> ⇒ <code>Number</code></dt>
<dd><p>历史列表元素数量</p>
</dd>
<dt><a href="#docReferrer">docReferrer()</a> ⇒ <code>String</code></dt>
<dd><p>导航到当前网页的超链接所在网页的URL</p>
</dd>
<dt><a href="#redirectHtml">redirectHtml()</a></dt>
<dd><p>重载页面
不添加新的历史记录</p>
</dd>
<dt><a href="#historyBackRefresh">historyBackRefresh()</a></dt>
<dd><p>返回上一页
返回后刷新</p>
</dd>
<dt><a href="#historyGo">historyGo()</a></dt>
<dd><p>返回历史记录
返回后不刷新</p>
</dd>
<dt><a href="#getOS_Type">getOS_Type()</a> ⇒ <code>availableOS_Type</code></dt>
<dd><p>获取当前系统类型</p>
</dd>
<dt><a href="#getBrowserType">getBrowserType()</a> ⇒ <code>availableBrowserType</code></dt>
<dd><p>判断浏览器环境</p>
</dd>
<dt><a href="#setInputInvalidChars">setInputInvalidChars(inputDom, invalidChars, isInvalidPaste)</a></dt>
<dd><p>设置输入框的输入字符限制</p>
</dd>
<dt><a href="#loader">loader(param)</a> ⇒ <code>loaderReturn</code></dt>
<dd><p>loader</p>
</dd>
<dt><a href="#generateTableOfContents">generateTableOfContents(contentDom, queryTags, tocItemPrefix)</a> ⇒ <code>HTMLDivElement</code> | <code>void</code></dt>
<dd><p>Generate Table Of Contents(TOC) for document, Return the generated TOC DOM and add IDs to headings without IDs.</p>
</dd>
<dt><a href="#blobToFile">blobToFile(blob, fileName)</a> ⇒ <code>File</code></dt>
<dd><p>Convert Blob To File</p>
</dd>
<dt><a href="#dataURLtoBlob">dataURLtoBlob(dataurl)</a> ⇒ <code>Blob</code></dt>
<dd><p>Convert dataURL To Blob</p>
</dd>
<dt><a href="#blobToDataURL">blobToDataURL(blob, callback)</a> ⇒ <code>void</code></dt>
<dd><p>Convert Blob To dataURL</p>
</dd>
</dl>

<a name="loadVideo"></a>

## loadVideo(file) ⇒ <code>Promise</code>
load file info from local

**Kind**: global function  

| Param | Type |
| --- | --- |
| file | <code>File</code> | 

<a name="getVideoInfoAsync"></a>

## getVideoInfoAsync(file) ⇒ <code>Object</code>
load file info from local

**Kind**: global function  

| Param | Type |
| --- | --- |
| file | <code>File</code> | 

<a name="getImageSizeCallback"></a>

## getImageSizeCallback(src, callback) ⇒ <code>void</code>
get image size in browser

**Kind**: global function  

| Param | Type |
| --- | --- |
| src | <code>String</code> | 
| callback | <code>function</code> | 

<a name="getImageSizePromise"></a>

## getImageSizePromise(src) ⇒ <code>void</code>
get image size in browser

**Kind**: global function  

| Param | Type |
| --- | --- |
| src | <code>String</code> | 

<a name="setCookie"></a>

## setCookie(name, value) ⇒ <code>void</code>
set browser cookie

**Kind**: global function  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 
| value | <code>String</code> | 

<a name="getCookie"></a>

## getCookie(name) ⇒ <code>string</code> \| <code>undefined</code>
get browser cookie

**Kind**: global function  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 

<a name="deleteCookie"></a>

## deleteCookie(name) ⇒ <code>void</code>
delete browser cookie

**Kind**: global function  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 

<a name="checkWebpSupport"></a>

## checkWebpSupport() ⇒ <code>boolean</code>
Check if the browser supports the webp format

**Kind**: global function  
<a name="setBaseFontSizeByClientWidth"></a>

## setBaseFontSizeByClientWidth() ⇒ <code>void</code>
Set the page root element font size,
usually used in conjunction with rem

**Kind**: global function  
<a name="getUrlParam"></a>

## getUrlParam() ⇒ <code>getUrlParamResponse</code>
Get current url param

**Kind**: global function  
<a name="requireJs"></a>

## requireJs(url, callback)
动态加载JS

**Kind**: global function  

| Param | Type |
| --- | --- |
| url | <code>String</code> | 
| callback | <code>function</code> | 

<a name="historyLength"></a>

## historyLength() ⇒ <code>Number</code>
历史列表元素数量

**Kind**: global function  
<a name="docReferrer"></a>

## docReferrer() ⇒ <code>String</code>
导航到当前网页的超链接所在网页的URL

**Kind**: global function  
<a name="redirectHtml"></a>

## redirectHtml()
重载页面
不添加新的历史记录

**Kind**: global function  
<a name="historyBackRefresh"></a>

## historyBackRefresh()
返回上一页
返回后刷新

**Kind**: global function  
<a name="historyGo"></a>

## historyGo()
返回历史记录
返回后不刷新

**Kind**: global function  
<a name="getOS_Type"></a>

## getOS\_Type() ⇒ <code>availableOS\_Type</code>
获取当前系统类型

**Kind**: global function  
<a name="getBrowserType"></a>

## getBrowserType() ⇒ <code>availableBrowserType</code>
判断浏览器环境

**Kind**: global function  
<a name="setInputInvalidChars"></a>

## setInputInvalidChars(inputDom, invalidChars, isInvalidPaste)
设置输入框的输入字符限制

**Kind**: global function  

| Param | Type |
| --- | --- |
| inputDom | <code>HTMLInputElement</code> | 
| invalidChars | <code>Array.&lt;string&gt;</code> | 
| isInvalidPaste | <code>boolean</code> | 

<a name="loader"></a>

## loader(param) ⇒ <code>loaderReturn</code>
loader

**Kind**: global function  

| Param | Type |
| --- | --- |
| param | <code>loaderParam</code> | 

<a name="generateTableOfContents"></a>

## generateTableOfContents(contentDom, queryTags, tocItemPrefix) ⇒ <code>HTMLDivElement</code> \| <code>void</code>
Generate Table Of Contents(TOC) for document, Return the generated TOC DOM and add IDs to headings without IDs.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| contentDom | <code>Document</code> | contentDom |
| queryTags | <code>string</code> | queryTags |
| tocItemPrefix | <code>string</code> | tocItemPrefix |

<a name="blobToFile"></a>

## blobToFile(blob, fileName) ⇒ <code>File</code>
Convert Blob To File

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| blob | <code>Blob</code> | blob |
| fileName | <code>string</code> | fileName |

<a name="dataURLtoBlob"></a>

## dataURLtoBlob(dataurl) ⇒ <code>Blob</code>
Convert dataURL To Blob

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| dataurl | <code>string</code> | dataurl |

<a name="blobToDataURL"></a>

## blobToDataURL(blob, callback) ⇒ <code>void</code>
Convert Blob To dataURL

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| blob | <code>Blob</code> | blob |
| callback | <code>function</code> | callback |

