## Classes

<dl>
<dt><a href="#FormatTimestamp">FormatTimestamp</a></dt>
<dd><p>FormatTimestamp</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#isNull">isNull(param)</a> ⇒ <code>Boolean</code></dt>
<dd><p>isNull</p>
</dd>
<dt><a href="#isNullArray">isNullArray(arr)</a> ⇒ <code>Boolean</code></dt>
<dd><p>isNullArray</p>
</dd>
<dt><a href="#isNullString">isNullString(str)</a> ⇒ <code>Boolean</code></dt>
<dd><p>isNullString</p>
</dd>
<dt><a href="#calculateDifference">calculateDifference(difference)</a> ⇒ <code>Object</code></dt>
<dd><p>calculateDifference</p>
</dd>
<dt><a href="#timeShowFormat">timeShowFormat(timestamp)</a> ⇒ <code>String</code></dt>
<dd><p>timeShowFormat</p>
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
<dt><a href="#every">every(arr, fn)</a> ⇒ <code>Boolean</code></dt>
<dd><p>every</p>
</dd>
<dt><a href="#some">some(arr, fn)</a> ⇒ <code>Boolean</code></dt>
<dd><p>some</p>
</dd>
<dt><a href="#once">once(fn)</a> ⇒ <code>function</code></dt>
<dd><p>once</p>
</dd>
<dt><a href="#deepClone">deepClone(a)</a> ⇒ <code>*</code></dt>
<dd><p>deep clone</p>
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
<dt><a href="#distinctValuesOfArray">distinctValuesOfArray(arr)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns all the distinct values of an array.</p>
</dd>
<dt><a href="#timeTaken">timeTaken(callback)</a> ⇒ <code>*</code></dt>
<dd><p>Measures the time taken by a function to execute.</p>
</dd>
<dt><a href="#randomColor">randomColor()</a> ⇒ <code>String</code></dt>
<dd><p>生成随机颜色</p>
</dd>
<dt><a href="#randomString">randomString(length)</a> ⇒ <code>String</code></dt>
<dd><p>生成随机字符串</p>
</dd>
<dt><a href="#checkStringType">checkStringType(str, type)</a> ⇒ <code>Boolean</code></dt>
<dd></dd>
<dt><a href="#randomNum">randomNum(Min, Max)</a> ⇒ <code>Number</code></dt>
<dd><p>生成随机数.</p>
</dd>
<dt><a href="#quickSort">quickSort(arr)</a> ⇒ <code>Array</code></dt>
<dd><p>数组排序.</p>
</dd>
</dl>

<a name="FormatTimestamp"></a>

## FormatTimestamp
FormatTimestamp

**Kind**: global class  
<a name="new_FormatTimestamp_new"></a>

### new FormatTimestamp(timestamp)
**Returns**: *  

| Param | Type |
| --- | --- |
| timestamp | <code>String</code> | 

<a name="isNull"></a>

## isNull(param) ⇒ <code>Boolean</code>
isNull

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

<a name="isNullString"></a>

## isNullString(str) ⇒ <code>Boolean</code>
isNullString

**Kind**: global function  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 

<a name="calculateDifference"></a>

## calculateDifference(difference) ⇒ <code>Object</code>
calculateDifference

**Kind**: global function  

| Param | Type |
| --- | --- |
| difference | <code>Number</code> | 

<a name="timeShowFormat"></a>

## timeShowFormat(timestamp) ⇒ <code>String</code>
timeShowFormat

**Kind**: global function  

| Param | Type |
| --- | --- |
| timestamp | <code>Number</code> | 

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
flat()([
 [1],
 [[2],[3]],
 [[4,[5]]]
])
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

<a name="deepClone"></a>

## deepClone(a) ⇒ <code>\*</code>
deep clone

**Kind**: global function  

| Param | Type |
| --- | --- |
| a | <code>Array</code> \| <code>Object</code> | 

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

<a name="distinctValuesOfArray"></a>

## distinctValuesOfArray(arr) ⇒ <code>Array</code>
Returns all the distinct values of an array.

**Kind**: global function  
**Returns**: <code>Array</code> - - new array  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | source array |

<a name="timeTaken"></a>

## timeTaken(callback) ⇒ <code>\*</code>
Measures the time taken by a function to execute.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | callback function |

<a name="randomColor"></a>

## randomColor() ⇒ <code>String</code>
生成随机颜色

**Kind**: global function  
<a name="randomString"></a>

## randomString(length) ⇒ <code>String</code>
生成随机字符串

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>Number</code> | 随机字符串长度 |

<a name="checkStringType"></a>

## checkStringType(str, type) ⇒ <code>Boolean</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | 被检测的字符串 |
| type | <code>String</code> | 检测类型 |

**Example**  
```js
URL_START_WITH_HTTP_OR_HTTPS | URL_NOT_REQUIRE_HTTP_OR_HTTPS |
email | phone | tel | number | lower | upper | ip
```
<a name="randomNum"></a>

## randomNum(Min, Max) ⇒ <code>Number</code>
生成随机数.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| Min | <code>Number</code> | 最小值 |
| Max | <code>Number</code> | 最大值 |

<a name="quickSort"></a>

## quickSort(arr) ⇒ <code>Array</code>
数组排序.

**Kind**: global function  
**Returns**: <code>Array</code> - - new array  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | source array |

