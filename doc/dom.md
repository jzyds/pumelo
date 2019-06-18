## Functions

<dl>
<dt><a href="#checkWebp">checkWebp()</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the browser supports the webp format</p>
</dd>
<dt><a href="#setBaseFontSizeByClientWidth">setBaseFontSizeByClientWidth()</a> ⇒ <code>void</code></dt>
<dd><p>Set the page root element font size,
usually used in conjunction with rem</p>
</dd>
<dt><a href="#getUrlParam">getUrlParam()</a> ⇒ <code>object</code></dt>
<dd><p>Get current url param</p>
</dd>
<dt><a href="#ajax">ajax(__params)</a></dt>
<dd><p>Fetch data in browser use ajax or jsonp</p>
</dd>
<dt><a href="#requireJs">requireJs(url, callback)</a></dt>
<dd><p>动态加载JS</p>
</dd>
<dt><a href="#pullRefresh">pullRefresh(option)</a></dt>
<dd><p>下拉刷新</p>
</dd>
<dt><a href="#scrolltobottom">scrolltobottom(callback)</a></dt>
<dd><p>上拉加载更多</p>
</dd>
<dt><a href="#historyLength">historyLength()</a> ⇒ <code>Number</code></dt>
<dd><p>历史列表元素数量</p>
</dd>
<dt><a href="#docReferrer">docReferrer()</a> ⇒ <code>String</code></dt>
<dd><p>导航到当前网页的超链接所在网页的URL</p>
</dd>
<dt><a href="#historyBackRefresh">historyBackRefresh()</a></dt>
<dd><p>返回上一页
返回后刷新</p>
</dd>
<dt><a href="#redirectHtml">redirectHtml()</a></dt>
<dd><p>重载页面
不添加新的历史记录</p>
</dd>
<dt><a href="#historyGo">historyGo()</a></dt>
<dd><p>返回历史记录
返回后不刷新</p>
</dd>
</dl>

<a name="checkWebp"></a>

## checkWebp() ⇒ <code>boolean</code>
Check if the browser supports the webp format

**Kind**: global function  
<a name="setBaseFontSizeByClientWidth"></a>

## setBaseFontSizeByClientWidth() ⇒ <code>void</code>
Set the page root element font size,
usually used in conjunction with rem

**Kind**: global function  
<a name="getUrlParam"></a>

## getUrlParam() ⇒ <code>object</code>
Get current url param

**Kind**: global function  
<a name="ajax"></a>

## ajax(__params)
Fetch data in browser use ajax or jsonp

**Kind**: global function  

| Param | Type |
| --- | --- |
| __params | <code>Object</code> | 

**Example**  
```js
pumeloDom.ajax({

 //必填项
 url: "url",

 // 可选项
 // default value : "GET"
 // method

 type: 'POST',

 // 可选项
 // default value : {}
 // post data
 data: {
   key1: 'value1',
   key2: 'value2'
 },

 // 可选项
 // default value : 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
 headers:{
   'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
   'Accept': 'application/json'
 }

 // 可选项
 // default value : null
 // jsonp回调函数，回调函数名为"jsonpCallbak"
 // 可以设置为合法的字符串。添加此option会使用jsonp请求跨域数据
 jsonp: 'jsonpCallbackFunctionName',
   success: function (res) {},
   error: function (error) {}
 });
```
<a name="requireJs"></a>

## requireJs(url, callback)
动态加载JS

**Kind**: global function  

| Param | Type |
| --- | --- |
| url | <code>String</code> | 
| callback | <code>function</code> | 

<a name="pullRefresh"></a>

## pullRefresh(option)
下拉刷新

**Kind**: global function  

| Param | Type |
| --- | --- |
| option | <code>object</code> | 

**Example**  
```js
<style>
  .pullRefresh__scroller .pullRefresh__loading {
    height: 80px;
    line-height: 80px;
    text-align: center;
    width: 100%;
    background-color: #fff;
    color: blue;
  }
  .pullRefresh__scroller {
    -webkit-overflow-scrolling: touch;
  }
</style>
<div id="scroll_container" class="pullRefresh__scroller">
  <!-- loading dom -->
  <div class="pullRefresh__loading"></div>
  <!-- list dom-->
  <ul></ul>
</div>
<script>
  pumeloDom.pullRefresh({
    container: "#scroll_container", //外层的容器
    next: function (e) {
      var that = this;
      // callback function could be code there
      that.back.call();
    }
  });
</script>
```
<a name="scrolltobottom"></a>

## scrolltobottom(callback)
上拉加载更多

**Kind**: global function  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 

<a name="historyLength"></a>

## historyLength() ⇒ <code>Number</code>
历史列表元素数量

**Kind**: global function  
<a name="docReferrer"></a>

## docReferrer() ⇒ <code>String</code>
导航到当前网页的超链接所在网页的URL

**Kind**: global function  
<a name="historyBackRefresh"></a>

## historyBackRefresh()
返回上一页
返回后刷新

**Kind**: global function  
<a name="redirectHtml"></a>

## redirectHtml()
重载页面
不添加新的历史记录

**Kind**: global function  
<a name="historyGo"></a>

## historyGo()
返回历史记录
返回后不刷新

**Kind**: global function  
