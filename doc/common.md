## Members

<dl>
<dt><a href="#FormatTimestamp">FormatTimestamp</a> ⇒</dt>
<dd><p>FormatTimestamp</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#removeSpace">removeSpace(str)</a> ⇒ <code>String</code></dt>
<dd><p>removeSpace</p>
</dd>
<dt><a href="#hasEmojiInString">hasEmojiInString(str)</a> ⇒ <code>Boolean</code></dt>
<dd><p>hasEmojiInString</p>
</dd>
<dt><a href="#removeEmojis">removeEmojis(str)</a> ⇒ <code>String</code></dt>
<dd><p>removeEmojis</p>
</dd>
<dt><a href="#isVoidNull">isVoidNull(param)</a> ⇒ <code>Boolean</code></dt>
<dd><p>isVoidNull</p>
</dd>
<dt><a href="#isVoidNullEmptyString">isVoidNullEmptyString(param)</a> ⇒ <code>Boolean</code></dt>
<dd><p>isVoidNullEmptyString</p>
</dd>
<dt><a href="#isNullArray">isNullArray(arr)</a> ⇒ <code>Boolean</code></dt>
<dd><p>isNullArray</p>
</dd>
<dt><a href="#calculateDifference">calculateDifference(difference)</a> ⇒ <code>Object</code></dt>
<dd><p>calculateDifference</p>
</dd>
<dt><a href="#updateQueryStringParameter">updateQueryStringParameter(uri, key, value)</a> ⇒ <code>String</code></dt>
<dd><p>Update or create query string</p>
</dd>
<dt><a href="#updateQueryStringParameterByObj">updateQueryStringParameterByObj(uri, obj)</a> ⇒ <code>String</code></dt>
<dd><p>Update or create query string</p>
</dd>
<dt><a href="#flat">flat()</a> ⇒ <code>function</code></dt>
<dd><p>拍平一个多维数组</p>
</dd>
<dt><a href="#timeDown">timeDown(totalSeconds, fn)</a> ⇒ <code>*</code></dt>
<dd><p>timeDown</p>
</dd>
<dt><a href="#isObjectValueEqual">isObjectValueEqual(a, b)</a> ⇒ <code>Boolean</code></dt>
<dd><p>isObjectValueEqual</p>
</dd>
<dt><a href="#findIndex">findIndex(arr, callback)</a> ⇒ <code>Number</code></dt>
<dd><p>findIndex</p>
</dd>
<dt><a href="#rmArrayItem">rmArrayItem(arr, item)</a> ⇒ <code>Boolean</code></dt>
<dd><p>rmArrayItem</p>
</dd>
<dt><a href="#timeFormatWithRule">timeFormatWithRule(timestamp, format)</a> ⇒ <code>String</code></dt>
<dd><p>timeFormatWithRule</p>
</dd>
<dt><a href="#every">every(arr, fn)</a> ⇒ <code>Boolean</code></dt>
<dd><p>every</p>
</dd>
<dt><a href="#some">some(arr, fn)</a> ⇒ <code>Boolean</code></dt>
<dd><p>some</p>
</dd>
<dt><a href="#once">once(fn)</a> ⇒ <code>function</code></dt>
<dd><p>once</p>
</dd>
<dt><a href="#isNumber">isNumber(obj)</a> ⇒ <code>Boolean</code></dt>
<dd><p>isNumber</p>
</dd>
<dt><a href="#isObj">isObj(obj)</a> ⇒ <code>Boolean</code></dt>
<dd><p>isObj</p>
</dd>
<dt><a href="#isArray">isArray(obj)</a> ⇒ <code>Boolean</code></dt>
<dd><p>isArray</p>
</dd>
<dt><a href="#isFunction">isFunction(obj)</a> ⇒ <code>Boolean</code></dt>
<dd><p>isFunction</p>
</dd>
<dt><a href="#deepClone">deepClone(param)</a> ⇒ <code>*</code></dt>
<dd><p>deep clone</p>
</dd>
<dt><a href="#distinctValuesOfArray">distinctValuesOfArray()</a> ⇒ <code>Array</code></dt>
<dd><p>Returns all the distinct values of an array.</p>
</dd>
<dt><a href="#timeTaken">timeTaken()</a> ⇒ <code>*</code></dt>
<dd><p>Measures the time taken by a function to execute.</p>
</dd>
<dt><a href="#randomColor">randomColor()</a> ⇒ <code>String</code></dt>
<dd><p>生成随机颜色</p>
</dd>
<dt><a href="#randomString">randomString()</a> ⇒ <code>String</code></dt>
<dd><p>生成随机字符串</p>
</dd>
<dt><a href="#checkStringType">checkStringType()</a> ⇒ <code>Boolean</code></dt>
<dd></dd>
<dt><a href="#randomNum">randomNum()</a> ⇒ <code>Number</code></dt>
<dd><p>生成随机数.</p>
</dd>
<dt><a href="#getOS_FromAgent">getOS_FromAgent(agent, maxTouchPoints)</a> ⇒ <code>availableOS_Type</code></dt>
<dd><p>通过 User Agent 获取系统类型, 方法可在服务端或浏览器调用
在服务器端传入 req.headers[&#39;user-agent&#39;]
在浏览器传入 navigator.userAgent</p>
<hr>
<p>但是如果想要区分 ipad 和 iphone，需要传入第二个参数，该参数只能在浏览器内获取（navigator.maxTouchPoints），所以只能在浏览器端判断
原因是新版本的 iPadOS(&gt;= 13.1) 和 mac 的 UA 是相同的，所以需要传入 maxTouchPoints 来判断</p>
<p>在浏览器端，可直接调用 dom util 中的 getOS_Type</p>
</dd>
<dt><a href="#isObjKey">isObjKey(key, obj)</a> ⇒ <code>Boolean</code></dt>
<dd></dd>
</dl>

<a name="FormatTimestamp"></a>

## FormatTimestamp ⇒
FormatTimestamp

**Kind**: global variable  
**Returns**: *  

| Param | Type |
| --- | --- |
| timestamp | <code>String</code> | 

<a name="removeSpace"></a>

## removeSpace(str) ⇒ <code>String</code>
removeSpace

**Kind**: global function  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 

<a name="hasEmojiInString"></a>

## hasEmojiInString(str) ⇒ <code>Boolean</code>
hasEmojiInString

**Kind**: global function  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 

<a name="removeEmojis"></a>

## removeEmojis(str) ⇒ <code>String</code>
removeEmojis

**Kind**: global function  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 

<a name="isVoidNull"></a>

## isVoidNull(param) ⇒ <code>Boolean</code>
isVoidNull

**Kind**: global function  

| Param | Type |
| --- | --- |
| param | <code>any</code> | 

<a name="isVoidNullEmptyString"></a>

## isVoidNullEmptyString(param) ⇒ <code>Boolean</code>
isVoidNullEmptyString

**Kind**: global function  

| Param | Type |
| --- | --- |
| param | <code>any</code> | 

<a name="isNullArray"></a>

## isNullArray(arr) ⇒ <code>Boolean</code>
isNullArray

**Kind**: global function  

| Param | Type |
| --- | --- |
| arr | <code>any</code> | 

<a name="calculateDifference"></a>

## calculateDifference(difference) ⇒ <code>Object</code>
calculateDifference

**Kind**: global function  

| Param | Type |
| --- | --- |
| difference | <code>Number</code> | 

<a name="updateQueryStringParameter"></a>

## updateQueryStringParameter(uri, key, value) ⇒ <code>String</code>
Update or create query string

**Kind**: global function  

| Param | Type |
| --- | --- |
| uri | <code>String</code> | 
| key | <code>String</code> | 
| value | <code>String</code> | 

<a name="updateQueryStringParameterByObj"></a>

## updateQueryStringParameterByObj(uri, obj) ⇒ <code>String</code>
Update or create query string

**Kind**: global function  

| Param | Type |
| --- | --- |
| uri | <code>String</code> | 
| obj | <code>Object</code> | 

<a name="flat"></a>

## flat() ⇒ <code>function</code>
拍平一个多维数组

**Kind**: global function  
**Example**  
```js
flat()([ [1], [[2],[3]], [[4,[5]]]])
```
<a name="timeDown"></a>

## timeDown(totalSeconds, fn) ⇒ <code>\*</code>
timeDown

**Kind**: global function  

| Param | Type |
| --- | --- |
| totalSeconds | <code>Number</code> | 
| fn | <code>function</code> | 

<a name="isObjectValueEqual"></a>

## isObjectValueEqual(a, b) ⇒ <code>Boolean</code>
isObjectValueEqual

**Kind**: global function  

| Param | Type |
| --- | --- |
| a | <code>Object</code> | 
| b | <code>Object</code> | 

<a name="findIndex"></a>

## findIndex(arr, callback) ⇒ <code>Number</code>
findIndex

**Kind**: global function  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 
| callback | <code>function</code> | 

<a name="rmArrayItem"></a>

## rmArrayItem(arr, item) ⇒ <code>Boolean</code>
rmArrayItem

**Kind**: global function  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 
| item | <code>\*</code> | 

<a name="timeFormatWithRule"></a>

## timeFormatWithRule(timestamp, format) ⇒ <code>String</code>
timeFormatWithRule

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>Number</code> | 时间戳 |
| format | <code>String</code> | 格式化规则 eg. Y-M-D H:m:S |

<a name="every"></a>

## every(arr, fn) ⇒ <code>Boolean</code>
every

**Kind**: global function  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 
| fn | <code>function</code> | 

<a name="some"></a>

## some(arr, fn) ⇒ <code>Boolean</code>
some

**Kind**: global function  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 
| fn | <code>function</code> | 

<a name="once"></a>

## once(fn) ⇒ <code>function</code>
once

**Kind**: global function  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

<a name="isNumber"></a>

## isNumber(obj) ⇒ <code>Boolean</code>
isNumber

**Kind**: global function  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

<a name="isObj"></a>

## isObj(obj) ⇒ <code>Boolean</code>
isObj

**Kind**: global function  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

<a name="isArray"></a>

## isArray(obj) ⇒ <code>Boolean</code>
isArray

**Kind**: global function  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

<a name="isFunction"></a>

## isFunction(obj) ⇒ <code>Boolean</code>
isFunction

**Kind**: global function  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

<a name="deepClone"></a>

## deepClone(param) ⇒ <code>\*</code>
deep clone

**Kind**: global function  

| Param | Type |
| --- | --- |
| param | <code>Array</code> \| <code>Object</code> | 

<a name="distinctValuesOfArray"></a>

## distinctValuesOfArray() ⇒ <code>Array</code>
Returns all the distinct values of an array.

**Kind**: global function  
**Returns**: <code>Array</code> - - new array  

| Type | Description |
| --- | --- |
| <code>Array</code> | source array |

<a name="timeTaken"></a>

## timeTaken() ⇒ <code>\*</code>
Measures the time taken by a function to execute.

**Kind**: global function  

| Type | Description |
| --- | --- |
| <code>function</code> | callback function |

<a name="randomColor"></a>

## randomColor() ⇒ <code>String</code>
生成随机颜色

**Kind**: global function  
<a name="randomString"></a>

## randomString() ⇒ <code>String</code>
生成随机字符串

**Kind**: global function  

| Type | Description |
| --- | --- |
| <code>Number</code> | 随机字符串长度 |

<a name="checkStringType"></a>

## checkStringType() ⇒ <code>Boolean</code>
**Kind**: global function  

| Type | Description |
| --- | --- |
| <code>String</code> | 被检测的字符串 |
| <code>String</code> | 检测类型 |

**Example**  
```js
URL_START_WITH_HTTP_OR_HTTPS | URL_NOT_REQUIRE_HTTP_OR_HTTPS |email | phone | tel | number | lower | upper | ip
```
<a name="randomNum"></a>

## randomNum() ⇒ <code>Number</code>
生成随机数.

**Kind**: global function  

| Type | Description |
| --- | --- |
| <code>Number</code> | 最小值 |
| <code>Number</code> | 最大值 |

<a name="getOS_FromAgent"></a>

## getOS\_FromAgent(agent, maxTouchPoints) ⇒ <code>availableOS\_Type</code>
通过 User Agent 获取系统类型, 方法可在服务端或浏览器调用在服务器端传入 req.headers['user-agent']在浏览器传入 navigator.userAgent---------但是如果想要区分 ipad 和 iphone，需要传入第二个参数，该参数只能在浏览器内获取（navigator.maxTouchPoints），所以只能在浏览器端判断原因是新版本的 iPadOS(>= 13.1) 和 mac 的 UA 是相同的，所以需要传入 maxTouchPoints 来判断在浏览器端，可直接调用 dom util 中的 getOS_Type

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| agent | <code>string</code> | user agent |
| maxTouchPoints | <code>number</code> | navigator.maxTouchPoints |

<a name="isObjKey"></a>

## isObjKey(key, obj) ⇒ <code>Boolean</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>any</code> | key |
| obj | <code>T</code> | obj |

