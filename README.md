# orange.js

>常用的函数封装

***

### 生成随机字符串
```javascript
orange.randomString(randomFlag, min, max)
```

### 检查字符串类型
```javascript
orange.checkStringType(str, type)

// type: email | phone | tel | number | lower | upper | ip

```

### 生成随机数
```javascript
orange.randomNum(Min,Max)
```

### 数组排序
```javascript
orange.sort(list,'fromBigToSmall')
// 第二个固定字符串为可选参数，如果带有该字符串，则按照从大到小排序。如果不带有该字符串，则按照从小到大排序。
```

### Ajax
```javascript
//调用：get || post
orange.Ajax({
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