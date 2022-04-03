## Members

<dl>
<dt><a href="#loadVideo">loadVideo</a> ⇒ <code>Object</code></dt>
<dd><p>load file info from local</p></dd>
<dt><a href="#getVideoInfoAsync">getVideoInfoAsync</a> ⇒ <code>void</code></dt>
<dd><p>get image size in browser</p></dd>
<dt><a href="#getImageSizeCallback">getImageSizeCallback</a> ⇒ <code>void</code></dt>
<dd><p>get image size in browser</p></dd>
<dt><a href="#setCookie">setCookie</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>get browser cookie</p></dd>
<dt><a href="#getCookie">getCookie</a> ⇒ <code>void</code></dt>
<dd><p>delete browser cookie</p></dd>
<dt><a href="#deleteCookie">deleteCookie</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the browser supports the webp format</p></dd>
<dt><a href="#checkWebpSupport">checkWebpSupport</a> ⇒ <code>void</code></dt>
<dd><p>Set the page root element font size,
usually used in conjunction with rem</p></dd>
<dt><a href="#setBaseFontSizeByClientWidth">setBaseFontSizeByClientWidth</a> ⇒ <code>object</code></dt>
<dd><p>Get current url param</p></dd>
<dt><a href="#getUrlParam">getUrlParam</a></dt>
<dd><p>动态加载JS</p></dd>
<dt><a href="#requireJs">requireJs</a> ⇒ <code>Number</code></dt>
<dd><p>历史列表元素数量</p></dd>
<dt><a href="#historyLength">historyLength</a> ⇒ <code>String</code></dt>
<dd><p>导航到当前网页的超链接所在网页的URL</p></dd>
<dt><a href="#docReferrer">docReferrer</a></dt>
<dd><p>重载页面
不添加新的历史记录</p></dd>
<dt><a href="#redirectHtml">redirectHtml</a></dt>
<dd><p>返回上一页
返回后刷新</p></dd>
<dt><a href="#historyBackRefresh">historyBackRefresh</a></dt>
<dd><p>返回历史记录
返回后不刷新</p></dd>
<dt><a href="#historyGo">historyGo</a> ⇒ <code>availableOS_Type</code></dt>
<dd></dd>
<dt><a href="#getBrowserType">getBrowserType</a></dt>
<dd><p>设置输入框的输入字符限制</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#loadVideo">loadVideo(file)</a> ⇒ <code>Promise</code></dt>
<dd><p>load file info from local</p></dd>
<dt><a href="#setCookie">setCookie(name, value)</a> ⇒ <code>void</code></dt>
<dd><p>set browser cookie</p></dd>
<dt><a href="#getBrowserType">getBrowserType()</a> ⇒ <code>availableBrowserType</code></dt>
<dd><p>判断浏览器环境</p></dd>
</dl>

<a name="loadVideo"></a>

## loadVideo ⇒ <code>Object</code>
<p>load file info from local</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| file | <code>File</code> | 

<a name="getVideoInfoAsync"></a>

## getVideoInfoAsync ⇒ <code>void</code>
<p>get image size in browser</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| src | <code>String</code> | 
| callback | <code>function</code> | 

<a name="getImageSizeCallback"></a>

## getImageSizeCallback ⇒ <code>void</code>
<p>get image size in browser</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| src | <code>String</code> | 

<a name="setCookie"></a>

## setCookie ⇒ <code>string</code> \| <code>undefined</code>
<p>get browser cookie</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 

<a name="getCookie"></a>

## getCookie ⇒ <code>void</code>
<p>delete browser cookie</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 

<a name="deleteCookie"></a>

## deleteCookie ⇒ <code>boolean</code>
<p>Check if the browser supports the webp format</p>

**Kind**: global variable  
<a name="checkWebpSupport"></a>

## checkWebpSupport ⇒ <code>void</code>
<p>Set the page root element font size,
usually used in conjunction with rem</p>

**Kind**: global variable  
<a name="setBaseFontSizeByClientWidth"></a>

## setBaseFontSizeByClientWidth ⇒ <code>object</code>
<p>Get current url param</p>

**Kind**: global variable  
<a name="getUrlParam"></a>

## getUrlParam
<p>动态加载JS</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| url | <code>String</code> | 
| callback | <code>function</code> | 

<a name="requireJs"></a>

## requireJs ⇒ <code>Number</code>
<p>历史列表元素数量</p>

**Kind**: global variable  
<a name="historyLength"></a>

## historyLength ⇒ <code>String</code>
<p>导航到当前网页的超链接所在网页的URL</p>

**Kind**: global variable  
<a name="docReferrer"></a>

## docReferrer
<p>重载页面
不添加新的历史记录</p>

**Kind**: global variable  
<a name="redirectHtml"></a>

## redirectHtml
<p>返回上一页
返回后刷新</p>

**Kind**: global variable  
<a name="historyBackRefresh"></a>

## historyBackRefresh
<p>返回历史记录
返回后不刷新</p>

**Kind**: global variable  
<a name="historyGo"></a>

## historyGo ⇒ <code>availableOS\_Type</code>
**Kind**: global variable  

| Param | Type |
| --- | --- |
| navigator.userAgent | <code>string</code> | 
| navigator.maxTouchPoints | <code>number</code> | 

<a name="getBrowserType"></a>

## getBrowserType
<p>设置输入框的输入字符限制</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| inputDom | <code>HTMLInputElement</code> | 
| invalidChars | <code>[ &#x27;Array&#x27; ].&lt;string&gt;</code> | 
| isInvalidPaste | <code>boolean</code> | 

<a name="loadVideo"></a>

## loadVideo(file) ⇒ <code>Promise</code>
<p>load file info from local</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| file | <code>File</code> | 

<a name="setCookie"></a>

## setCookie(name, value) ⇒ <code>void</code>
<p>set browser cookie</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 
| value | <code>String</code> | 

<a name="getBrowserType"></a>

## getBrowserType() ⇒ <code>availableBrowserType</code>
<p>判断浏览器环境</p>

**Kind**: global function  
