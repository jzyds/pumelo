## Members

<dl>
<dt><a href="#removeSpace">removeSpace</a> ⇒ <code>Boolean</code></dt>
<dd><p>hasEmojiInString</p></dd>
<dt><a href="#hasEmojiInString">hasEmojiInString</a> ⇒ <code>String</code></dt>
<dd><p>removeEmojis</p></dd>
<dt><a href="#removeEmojis">removeEmojis</a> ⇒ <code>Boolean</code></dt>
<dd><p>isVoidNull</p></dd>
<dt><a href="#isVoidNull">isVoidNull</a> ⇒ <code>Boolean</code></dt>
<dd><p>isVoidNullEmptyString</p></dd>
<dt><a href="#isVoidNullEmptyString">isVoidNullEmptyString</a> ⇒ <code>Boolean</code></dt>
<dd><p>isNullArray</p></dd>
<dt><a href="#isNullArray">isNullArray</a> ⇒ <code>Object</code></dt>
<dd><p>calculateDifference</p></dd>
<dt><a href="#calculateDifference">calculateDifference</a> ⇒ <code>String</code></dt>
<dd><p>Update or create query string</p></dd>
<dt><a href="#updateQueryStringParameterByObj">updateQueryStringParameterByObj</a> ⇒ <code>function</code></dt>
<dd><p>拍平一个多维数组</p></dd>
<dt><a href="#timeDown">timeDown</a> ⇒ <code>Boolean</code></dt>
<dd><p>isObjectValueEqual</p></dd>
<dt><a href="#isObjectValueEqual">isObjectValueEqual</a> ⇒ <code>Number</code></dt>
<dd><p>findIndex</p></dd>
<dt><a href="#findIndex">findIndex</a> ⇒ <code>Boolean</code></dt>
<dd><p>rmArrayItem</p></dd>
<dt><a href="#rmArrayItem">rmArrayItem</a> ⇒</dt>
<dd><p>FormatTimestamp</p></dd>
<dt><a href="#FormatTimestamp">FormatTimestamp</a> ⇒ <code>String</code></dt>
<dd><p>timeFormatWithRule</p></dd>
<dt><a href="#timeFormatWithRule">timeFormatWithRule</a> ⇒ <code>Boolean</code></dt>
<dd><p>every</p></dd>
<dt><a href="#every">every</a> ⇒ <code>Boolean</code></dt>
<dd><p>some</p></dd>
<dt><a href="#some">some</a> ⇒ <code>function</code></dt>
<dd><p>once</p></dd>
<dt><a href="#hp">hp</a> ⇒ <code>Boolean</code></dt>
<dd><p>isNumber</p></dd>
<dt><a href="#isNumber">isNumber</a> ⇒ <code>Boolean</code></dt>
<dd><p>isObj</p></dd>
<dt><a href="#isObj">isObj</a> ⇒ <code>Boolean</code></dt>
<dd><p>isArray</p></dd>
<dt><a href="#isArray">isArray</a> ⇒ <code>Boolean</code></dt>
<dd><p>isFunction</p></dd>
<dt><a href="#isFunction">isFunction</a> ⇒ <code>*</code></dt>
<dd><p>deep clone</p></dd>
<dt><a href="#deepClone">deepClone</a> ⇒ <code>Array</code></dt>
<dd><p>Returns all the distinct values of an array.</p></dd>
<dt><a href="#distinctValuesOfArray">distinctValuesOfArray</a> ⇒ <code>*</code></dt>
<dd><p>Measures the time taken by a function to execute.</p></dd>
<dt><a href="#timeTaken">timeTaken</a> ⇒ <code>String</code></dt>
<dd><p>生成随机颜色</p></dd>
<dt><a href="#randomColor">randomColor</a> ⇒ <code>String</code></dt>
<dd><p>生成随机字符串</p></dd>
<dt><a href="#randomString">randomString</a> ⇒ <code>Boolean</code></dt>
<dd></dd>
<dt><a href="#checkStringType">checkStringType</a> ⇒ <code>Number</code></dt>
<dd><p>生成随机数.</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#removeSpace">removeSpace(str)</a> ⇒ <code>String</code></dt>
<dd><p>removeSpace</p></dd>
<dt><a href="#updateQueryStringParameterByObj">updateQueryStringParameterByObj(uri, obj)</a> ⇒ <code>String</code></dt>
<dd><p>Update or create query string</p></dd>
<dt><a href="#timeDown">timeDown(totalSeconds, fn)</a> ⇒ <code>*</code></dt>
<dd><p>timeDown</p></dd>
<dt><a href="#getOS_FromAgent">getOS_FromAgent(agent, maxTouchPoints)</a> ⇒ <code>availableOS_Type</code></dt>
<dd><p>通过 User Agent 获取系统类型, 方法可在服务端或浏览器调用
在服务器端传入 req.headers[&#39;user-agent&#39;]</p>
<h2>在浏览器传入 navigator.userAgent</h2><p>但是如果想要区分 ipad 和 iphone，需要传入第二个参数，该参数只能在浏览器内获取（navigator.maxTouchPoints），所以只能在浏览器端判断
原因是新版本的 iPadOS(&gt;= 13.1) 和 mac 的 UA 是相同的，所以需要传入 maxTouchPoints 来判断</p>
<p>在浏览器端，可直接调用 dom util 中的 getOS_Type</p></dd>
</dl>

<a name="removeSpace"></a>

## removeSpace ⇒ <code>Boolean</code>
<p>hasEmojiInString</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 

<a name="hasEmojiInString"></a>

## hasEmojiInString ⇒ <code>String</code>
<p>removeEmojis</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 

<a name="removeEmojis"></a>

## removeEmojis ⇒ <code>Boolean</code>
<p>isVoidNull</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| param | <code>any</code> | 

<a name="isVoidNull"></a>

## isVoidNull ⇒ <code>Boolean</code>
<p>isVoidNullEmptyString</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| param | <code>any</code> | 

<a name="isVoidNullEmptyString"></a>

## isVoidNullEmptyString ⇒ <code>Boolean</code>
<p>isNullArray</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| arr | <code>any</code> | 

<a name="isNullArray"></a>

## isNullArray ⇒ <code>Object</code>
<p>calculateDifference</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| difference | <code>Number</code> | 

<a name="calculateDifference"></a>

## calculateDifference ⇒ <code>String</code>
<p>Update or create query string</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| uri | <code>String</code> | 
| key | <code>String</code> | 
| value | <code>String</code> | 

<a name="updateQueryStringParameterByObj"></a>

## updateQueryStringParameterByObj ⇒ <code>function</code>
<p>拍平一个多维数组</p>

**Kind**: global variable  
**Example**  
```js
flat()([
 [1],
 [[2],[3]],
 [[4,[5]]]
])
```
<a name="timeDown"></a>

## timeDown ⇒ <code>Boolean</code>
<p>isObjectValueEqual</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| a | <code>Object</code> | 
| b | <code>Object</code> | 

<a name="isObjectValueEqual"></a>

## isObjectValueEqual ⇒ <code>Number</code>
<p>findIndex</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 
| callback | <code>function</code> | 

<a name="findIndex"></a>

## findIndex ⇒ <code>Boolean</code>
<p>rmArrayItem</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 
| item | <code>\*</code> | 

<a name="rmArrayItem"></a>

## rmArrayItem ⇒
<p>FormatTimestamp</p>

**Kind**: global variable  
**Returns**: <p>*</p>  

| Param | Type |
| --- | --- |
| timestamp | <code>String</code> | 

<a name="FormatTimestamp"></a>

## FormatTimestamp ⇒ <code>String</code>
<p>timeFormatWithRule</p>

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>Number</code> | <p>时间戳</p> |
| format | <code>String</code> | <p>格式化规则 eg. Y-M-D H:m:S</p> |

<a name="timeFormatWithRule"></a>

## timeFormatWithRule ⇒ <code>Boolean</code>
<p>every</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 
| fn | <code>function</code> | 

<a name="every"></a>

## every ⇒ <code>Boolean</code>
<p>some</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 
| fn | <code>function</code> | 

<a name="some"></a>

## some ⇒ <code>function</code>
<p>once</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

<a name="hp"></a>

## hp ⇒ <code>Boolean</code>
<p>isNumber</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

<a name="isNumber"></a>

## isNumber ⇒ <code>Boolean</code>
<p>isObj</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

<a name="isObj"></a>

## isObj ⇒ <code>Boolean</code>
<p>isArray</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

<a name="isArray"></a>

## isArray ⇒ <code>Boolean</code>
<p>isFunction</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

<a name="isFunction"></a>

## isFunction ⇒ <code>\*</code>
<p>deep clone</p>

**Kind**: global variable  

| Param | Type |
| --- | --- |
| param | <code>Array</code> \| <code>Object</code> | 

<a name="deepClone"></a>

## deepClone ⇒ <code>Array</code>
<p>Returns all the distinct values of an array.</p>

**Kind**: global variable  
**Returns**: <code>Array</code> - <ul>
<li>new array</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
|  | <code>Array</code> | <p>source array</p> |

<a name="distinctValuesOfArray"></a>

## distinctValuesOfArray ⇒ <code>\*</code>
<p>Measures the time taken by a function to execute.</p>

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
|  | <code>function</code> | <p>callback function</p> |

<a name="timeTaken"></a>

## timeTaken ⇒ <code>String</code>
<p>生成随机颜色</p>

**Kind**: global variable  
<a name="randomColor"></a>

## randomColor ⇒ <code>String</code>
<p>生成随机字符串</p>

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
|  | <code>Number</code> | <p>随机字符串长度</p> |

<a name="randomString"></a>

## randomString ⇒ <code>Boolean</code>
**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
|  | <code>String</code> | <p>被检测的字符串</p> |
|  | <code>String</code> | <p>检测类型</p> |

**Example**  
```js
URL_START_WITH_HTTP_OR_HTTPS | URL_NOT_REQUIRE_HTTP_OR_HTTPS |
email | phone | tel | number | lower | upper | ip
```
<a name="checkStringType"></a>

## checkStringType ⇒ <code>Number</code>
<p>生成随机数.</p>

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
|  | <code>Number</code> | <p>最小值</p> |
|  | <code>Number</code> | <p>最大值</p> |

<a name="removeSpace"></a>

## removeSpace(str) ⇒ <code>String</code>
<p>removeSpace</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 

<a name="updateQueryStringParameterByObj"></a>

## updateQueryStringParameterByObj(uri, obj) ⇒ <code>String</code>
<p>Update or create query string</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| uri | <code>String</code> | 
| obj | <code>Object</code> | 

<a name="timeDown"></a>

## timeDown(totalSeconds, fn) ⇒ <code>\*</code>
<p>timeDown</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| totalSeconds | <code>Number</code> | 
| fn | <code>function</code> | 

<a name="getOS_FromAgent"></a>

## getOS\_FromAgent(agent, maxTouchPoints) ⇒ <code>availableOS\_Type</code>
<p>通过 User Agent 获取系统类型, 方法可在服务端或浏览器调用
在服务器端传入 req.headers['user-agent']</p>
<h2>在浏览器传入 navigator.userAgent</h2><p>但是如果想要区分 ipad 和 iphone，需要传入第二个参数，该参数只能在浏览器内获取（navigator.maxTouchPoints），所以只能在浏览器端判断
原因是新版本的 iPadOS(&gt;= 13.1) 和 mac 的 UA 是相同的，所以需要传入 maxTouchPoints 来判断</p>
<p>在浏览器端，可直接调用 dom util 中的 getOS_Type</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| agent | <code>string</code> | <p>user agent</p> |
| maxTouchPoints | <code>number</code> | <p>navigator.maxTouchPoints</p> |

