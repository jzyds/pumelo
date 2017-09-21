# pumelo

常用的函数封装

***

## Installation
```bash
$ npm install pumelo --save
```

***

## Usage
```javascript
var pumelo = require('pumelo')
```

### 生成随机字符串
```javascript
pumelo.randomString(randomFlag, min, max)
```

### 检查字符串类型
```javascript
pumelo.checkStringType(str, type)

// type: email | phone | tel | number | lower | upper | ip

```

### 生成随机数
```javascript
pumelo.randomNum(Min,Max)
```

### 数组排序
```javascript
pumelo.sort(list,'fromBigToSmall')
// 第二个固定字符串为可选参数，如果带有该字符串，则按照从大到小排序。如果不带有该字符串，则按照从小到大排序。
```

### Ajax
```javascript
//调用：get || post
pumelo.Ajax({
    method:'post', // or 'get'
    url:'http://localhost:3000/api/notes',
    header: function(req){
        req.setRequestHeader('Content-Type','application/json');
        req.setRequestHeader('Accept', 'application/json');  
    },
    data:JSON.stringify({
        //key : value
    }),
    callback:function(res){
        console.log(res)
    }
})
```

### Base64加密
```javascript
let base64 = new pumelo.base64();
//加密
base64.encode("some string");

//解密
base64.decode(base64.encode("some string"));
```

### MD5加密
```javascript
let md5 = new pumelo.md5()
//加密
md5.hex_md5("some string")
```

### sha1加密
```javascript
let sha1 = new pumelo.sha1()
//加密
md5.hex_sha1("some string")
```