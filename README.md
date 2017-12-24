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

检查是否为undefined

```javascript
pumelo.isUndefined(obj)
// return Boolean
```

生成随机颜色

```javascript
pumelo.randomColor()
```

生成随机字符串

```javascript
pumelo.randomString(randomFlag, min, max)
```

检查字符串类型

```javascript
pumelo.checkStringType(str, type)

// type: email | phone | tel | number | lower | upper | ip
// return Boolean
```

生成随机数

```javascript
pumelo.randomNum(Min,Max)
```

数组排序

```javascript
pumelo.sort(list,'fromBigToSmall')
// 第二个固定字符串为可选参数，如果带有该字符串，则按照从大到小排序。如果不带有该字符串，则按照从小到大排序。
```

Ajax

```javascript
//调用：get || post
pumelo.Ajax({
    url: "url",
    type: 'POST',   // 请求类型，默认"GET"
    jsonp: 'jsonpCallbak', //jsonp回调函数，回调函数名为"jsonpCallbak"，可以设置为合法的字符串。添加此option会使用jsonp请求跨域数据
    data: {
        key1:'value1',
        key2:'value2'
    },
    success: function (res) {},
    error: function (error) {}
});
```

Base64加密

```javascript
let base64 = new pumelo.base64();
//加密
base64.encode("some string");

//解密
base64.decode(base64.encode("some string"));
```

MD5加密（Message-Digest Algorithm 5 ／ 消息摘要算法）

```javascript
let md5 = new pumelo.md5()
//加密
md5.hex_md5("some string")
```

sha1加密（Secure Hash Algorithm ／ 安全哈希算法）

```javascript
let sha1 = new pumelo.sha1()
//加密
md5.hex_sha1("some string")
```