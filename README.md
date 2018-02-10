# pumelo

常用的JavaScript函数封装

## Installation

The library is the single JavaScript file *pumelo.js*

Browser:

```html
<script src='lib/pumelo.js'></script>
```

[Node.js](http://nodejs.org):

```bash
npm install pumelo --save
```

```js
var pumelo = require('pumelo');
```

ES6 module:

```js
import pumelo from 'pumelo'
```

## Usage

### distinctValuesOfArray

>Returns all the distinct values of an array.

```js
pumelo.distinctValuesOfArray([1, 2, 2, 3, 4, 4, 5]); // [1,2,3,4,5]
```

### timeTaken

>Measures the time taken by a function to execute.

```js
pumelo.timeTaken(() => {Math.pow(2.10)})
```

### isUndefined

>检查是否为undefined

```javascript
pumelo.isUndefined(obj)
// return Boolean
```

### randomColor

>生成随机颜色

```javascript
pumelo.randomColor()
```

### randomString

>生成随机字符串

```javascript
pumelo.randomString(randomFlag, min, max)
```

### checkStringType

>检查字符串类型

```javascript
pumelo.checkStringType(str, type)

// type: email | phone | tel | number | lower | upper | ip
// return Boolean
```

### randomNum

>生成随机数

```javascript
pumelo.randomNum(Min,Max)
```

### quickSort

>快速排序

```javascript
let result = pumelo.quickSort(arr)
```

### base64

>Base64加密

```javascript
let base64 = new pumelo.base64();
//加密
base64.encode("some string");

//解密
base64.decode(base64.encode("some string"));
```

### md5

>MD5加密（Message-Digest Algorithm 5 ／ 消息摘要算法）

```javascript
let md5 = new pumelo.md5()
//加密
md5.hex_md5("some string")
```

### sha1

>sha1加密（Secure Hash Algorithm ／ 安全哈希算法）

```javascript
let sha1 = new pumelo.sha1()
//加密
sha1.hex_sha1("some string")
```