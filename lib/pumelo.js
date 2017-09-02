module.exports = {
    //生成随机字符串
    randomString: function (randomFlag, min, max) {
        var str = "",
            range = min,
            arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        if (randomFlag) {
            range = Math.round(Math.random() * (max - min)) + min;
        }
        for (var i = 0; i < range; i++) {
            pos = Math.round(Math.random() * (arr.length - 1));
            str += arr[pos];
        }
        return str;
    },

    //检查字符串类型
	checkStringType: function (str, type) {
        switch (type) {
            case 'email':
                return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(str);
            case 'phone':
                return /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(str);
            case 'tel':
                return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
            case 'number':
                return /^[0-9]$/.test(str);
            case 'lower':
                return /^[a-z]+$/.test(str);
            case 'upper':
                return /^[A-Z]+$/.test(str);
            case 'ip':
                return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(str);
            default :
                return true;
        }
    },

    //生成随机数
    randomNum: function (Min,Max){   
        var Range = Max - Min;   
        var Rand = Math.random();   
        return(Min + Math.round(Rand * Range));   
    },
    
    //数组排序
    sortList: function (list,type){
        if(type === 'fromBigToSmall'){
            return list.sort(function(a,b){
                return b-a;
            })
        }
        return list.sort()
    },

    //xmlHttpRequest
    Ajax: function (options){
        var url = options.url || '',
            method = options.method.toLowerCase() || 'get',
            data = options.data || '',
            callback = options.callback || '',
            async = options.async || true,
            header = options.header || ''

        //get请求
        if(method == 'get'){
            if(typeof data == 'object'){
                data = [];
                for (var k in data){
                    data.push(k + '=' + data[k]);
                    data.join('&');
                }
            }
            url += (url.indexOf('?' == -1) ? '?' : '') + data;
        }

        //post请求
        if(method == 'post'){
            if(typeof data == 'object'){
                var arrs = [];
                for (var k in data){
                    arrs.push(k + '=' + data[k]);
                }
                data = arrs.join('&');
            }
        }

        //创建发送请求
        var xhr = window.XMLHttpRequest ?  new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP'); //兼容低版本ie
        xhr.open(method,url,async);
        if(method == 'post'){
            //setRequestHeader
            if(header == ''){
                xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
            }else{
                header(xhr);                
            }
            xhr.send(data);
        }else{
            xhr.send(null);
        }
        //异步请求
        if(async == true){
            xhr.onreadystatechange = function(){
              if(xhr.readyState == 4){
                  callcall();
              }
            }
        }
        //同步请求
        if(async == false){
            callcall();
        }
        //返回状态判断
        function callcall(){
            if(xhr.status == 200){
                return callback(JSON.parse(xhr.responseText));
            }else{
                return callback(xhr.status + xhr.statusText);
            }
        }
    }

};