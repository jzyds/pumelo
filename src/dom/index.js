/**
 * set browser cookie
 * @returns {void}
 */
module.exports = function setCookie () {
  var Days = 30;
  var exp = new Date ();
  exp.setTime (exp.getTime () + Days * 24 * 60 * 60 * 1000);
  document.cookie =
    name + '=' + escape (value) + ';expires=' + exp.toGMTString ();
};

/**
 * get browser cookie
 * @returns {void}
 */
module.exports = function getCookie () {
  var arr, reg = new RegExp ('(^| )' + name + '=([^;]*)(;|$)');
  return (arr = document.cookie.match (reg)) ? unescape (arr[2]) : null;
};

/**
 * delete browser cookie
 * @returns {void}
 */
module.exports = function deleteCookie () {
  var exp = new Date ();
  exp.setTime (exp.getTime () - 1);
  var cval = getCookie (name);
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString ();
  }
};

/**
 * Check if the browser supports the webp format
 * @returns {boolean}
 */
module.exports.checkWebp = function () {
  try {
    return (
      document
        .createElement ('canvas')
        .toDataURL ('image/webp')
        .indexOf ('data:image/webp') == 0
    );
  } catch (err) {
    return false;
  }
};

/**
 * Set the page root element font size,
 * usually used in conjunction with rem
 * @returns {void}
 */
module.exports.setBaseFontSizeByClientWidth = () => {
  if (process.client) {
    const baseSize = 16;
    const scale = document.documentElement.clientWidth / 375;
    document.documentElement.style.fontSize =
      baseSize * Math.min (scale, 2) + 'px';
  }
};

/**
 * Get current url param
 * @returns {object}
 */
module.exports.getUrlParam = () => {
  let qs = document.location.search;
  qs = qs.split ('+').join (' ');

  var params = {}, tokens, re = /[?&]?([^=]+)=([^&]*)/g;

  while ((tokens = re.exec (qs))) {
    params[decodeURIComponent (tokens[1])] = decodeURIComponent (tokens[2]);
  }

  return params;
};

/**
 * Fetch data in browser use ajax or jsonp
 * @param {Object} __params
 * @example
 * pumeloDom.ajax({
 *
 *  //必填项
 *  url: "url",
 *
 *  // 可选项
 *  // default value : "GET"
 *  // method
 *
 *  type: 'POST',
 *
 *  // 可选项
 *  // default value : {}
 *  // post data
 *  data: {
 *    key1: 'value1',
 *    key2: 'value2'
 *  },
 *
 *  // 可选项
 *  // default value : 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
 *  headers:{
 *    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
 *    'Accept': 'application/json'
 *  }
 *
 *  // 可选项
 *  // default value : null
 *  // jsonp回调函数，回调函数名为"jsonpCallbak"
 *  // 可以设置为合法的字符串。添加此option会使用jsonp请求跨域数据
 *  jsonp: 'jsonpCallbackFunctionName',
 *    success: function (res) {},
 *    error: function (error) {}
 *  });
 */
module.exports.ajax = function (__params) {
  var params = __params || {};

  //默认GET
  params.type = (params.type || 'GET').toUpperCase ();

  params.data = params.data || {};

  params.headers = params.headers || null;

  var json = params.jsonp ? jsonp (params) : json (params);

  // ajax请求
  function json (params) {
    params.data = formatParams (params.data);

    var xhr = null;

    // 实例化XMLHttpRequest对象
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest ();
    } else {
      // IE6及其以下版本
      xhr = new ActiveXObjcet ('Microsoft.XMLHTTP');
    }

    // 监听事件
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        var status = xhr.status;
        if (status >= 200 && status < 300) {
          var response = '';
          var type = xhr.getResponseHeader ('Content-type');
          if (type.indexOf ('xml') !== -1 && xhr.responseXML) {
            response = xhr.responseXML; //Document对象响应
          } else if (type.indexOf ('application/json') !== -1) {
            response = JSON.parse (xhr.responseText); //JSON响应
          } else {
            response = xhr.responseText; //字符串响应
          }
          // callBack success
          params.success && params.success (response);
        } else {
          //callback error
          params.error && params.error (status);
        }
      }
    };

    // 连接和传输数据
    if (params.type == 'GET') {
      xhr.open (params.type, params.url + '?' + params.data, true);
      __setRequestHeader ();
      xhr.send (null);
    } else if (params.type == 'POST') {
      xhr.open (params.type, params.url, true);
      __setRequestHeader ();
      xhr.send (params.data);
    }

    // set headers
    function __setRequestHeader () {
      if (params.headers === null || params.headers === void 0) {
        //default
        xhr.setRequestHeader (
          'Content-Type',
          'application/x-www-form-urlencoded; charset=UTF-8'
        );
      } else {
        for (var i in params.headers) {
          xhr.setRequestHeader (i, params.headers[i]);
        }
      }
    }
  }

  // JSONP请求
  function jsonp (params) {
    //创建script标签并加入到页面中
    var callbackName = params.jsonp;
    var head = document.getElementsByTagName ('head')[0];
    // 设置传递给后台的回调参数名
    params.data['callback'] = callbackName;
    var data = formatParams (params.data);
    var script = document.createElement ('script');
    head.appendChild (script);
    //创建jsonp回调函数
    window[callbackName] = function (json) {
      head.removeChild (script);
      clearTimeout (script.timer);
      window[callbackName] = null;
      params.success && params.success (json);
    };
    //发送请求
    script.src = params.url + '?' + data;
    //为了得知此次请求是否成功，设置超时处理
    if (params.time) {
      script.timer = setTimeout (function () {
        window[callbackName] = null;
        head.removeChild (script);
        params.error &&
          params.error ({
            message: '超时',
          });
      }, time);
    }
  }

  //格式化参数
  function formatParams (data) {
    var arr = [];
    for (var name in data) {
      arr.push (
        encodeURIComponent (name) + '=' + encodeURIComponent (data[name])
      );
    }
    // 添加一个随机数，防止缓存
    arr.push ('v=' + random ());
    return arr.join ('&');
  }

  // 获取随机数
  function random () {
    return Math.floor (Math.random () * 10000 + 500);
  }
};

/**
 * 动态加载JS
 * @param {String} url
 * @param {Function} callback
 */
module.exports.requireJs = function (url, callback) {
  var newScript = document.createElement ('script');
  newScript.type = 'text/javascript';
  newScript.src = url;
  document.body.appendChild (newScript);
  if (typeof callback != 'undefined') {
    if (newScript.readyState) {
      newScript.onreadystatechange = function () {
        if (
          newScript.readyState == 'loaded' ||
          newScript.readyState == 'complete'
        ) {
          newScript.onreadystatechange = null;
          callback ();
        }
      };
    } else {
      newScript.onload = function () {
        callback ();
      };
    }
  }
};

/**
 * 下拉刷新
 * @param {object} option
 * @example
 * <style>
 *   .pullRefresh__scroller .pullRefresh__loading {
 *     height: 80px;
 *     line-height: 80px;
 *     text-align: center;
 *     width: 100%;
 *     background-color: #fff;
 *     color: blue;
 *   }
 *   .pullRefresh__scroller {
 *     -webkit-overflow-scrolling: touch;
 *   }
 * </style>
 * <div id="scroll_container" class="pullRefresh__scroller">
 *   <!-- loading dom -->
 *   <div class="pullRefresh__loading"></div>
 *   <!-- list dom-->
 *   <ul></ul>
 * </div>
 * <script>
 *   pumeloDom.pullRefresh({
 *     container: "#scroll_container", //外层的容器
 *     next: function (e) {
 *       var that = this;
 *       // callback function could be code there
 *       that.back.call();
 *     }
 *   });
 * </script>
 */
module.exports.pullRefresh = function (option) {
  var defaults = {
    container: '',
    next: function () {},
  };
  var start,
    end,
    length,
    isLock = false, //是否锁定整个操作
    isCanDo = false, //是否移动滑块
    isTouchPad = /hp-tablet/gi.test (navigator.appVersion),
    hasTouch = 'ontouchstart' in window && !isTouchPad;
  var obj = document.querySelector (option.container);
  var loading = obj.firstElementChild;
  var offset = loading.clientHeight;
  var objparent = obj.parentElement;
  /*操作方法*/
  var fn = {
    //移动容器
    translate: function (diff) {
      obj.style.webkitTransform = 'translate3d(0,' + diff + 'px,0)';
      obj.style.transform = 'translate3d(0,' + diff + 'px,0)';
    },
    //设置效果时间
    setTransition: function (time) {
      obj.style.webkitTransition = 'all ' + time + 's';
      obj.style.transition = 'all ' + time + 's';
    },
    //返回到初始位置
    back: function () {
      fn.translate (0 - offset);
      //标识操作完成
      isLock = false;
    },
    addEvent: function (element, event_name, event_fn) {
      if (element.addEventListener) {
        element.addEventListener (event_name, event_fn, false);
      } else if (element.attachEvent) {
        element.attachEvent ('on' + event_name, event_fn);
      } else {
        element['on' + event_name] = event_fn;
      }
    },
  };

  fn.translate (0 - offset);
  fn.addEvent (obj, 'touchstart', start);
  fn.addEvent (obj, 'touchmove', move);
  fn.addEvent (obj, 'touchend', end);
  fn.addEvent (obj, 'mousedown', start);
  fn.addEvent (obj, 'mousemove', move);
  fn.addEvent (obj, 'mouseup', end);

  //滑动开始
  function start (e) {
    if (objparent.scrollTop <= 0 && !isLock) {
      var even = typeof event == 'undefined' ? e : event;
      //标识操作进行中
      isLock = true;
      isCanDo = true;
      //保存当前鼠标Y坐标
      start = hasTouch ? even.touches[0].pageY : even.pageY;
      //消除滑块动画时间
      fn.setTransition (0);
      loading.innerHTML = '下拉可以刷新...';
    }
    return false;
  }

  //滑动中
  function move (e) {
    if (objparent.scrollTop <= 0 && isCanDo) {
      var even = typeof event == 'undefined' ? e : event;
      //保存当前鼠标Y坐标
      end = hasTouch ? even.touches[0].pageY : even.pageY;
      if (start < end) {
        even.preventDefault ();
        //消除滑块动画时间
        fn.setTransition (0);
        // loading.innerHTML = '加载中...';
        //移动滑块
        if ((end - start - offset) / 2 <= 150) {
          length = (end - start - offset) / 2;
          fn.translate (length);
        } else {
          length += 0.3;
          fn.translate (length);
        }
      }
    }
  }

  //滑动结束
  function end (e) {
    if (isCanDo) {
      isCanDo = false;
      //判断滑动距离是否大于等于指定值
      if (end - start >= offset) {
        //设置滑块回弹时间
        fn.setTransition (1);
        //保留提示部分
        fn.translate (0);
        //执行回调函数
        loading.innerHTML = '加载完成!';
        if (typeof option.next == 'function') {
          option.next.call (fn, e);
        }
      } else {
        //返回初始状态
        fn.back ();
      }
    }
  }
};

/**
 * 上拉加载更多
 * @param {Function} callback
 */
module.exports.scrolltobottom = function (callback) {
  //获取滚动条当前的位置
  function getScrollTop () {
    var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
      scrollTop = document.body.scrollTop;
    }
    return scrollTop;
  }

  //获取当前可视范围的高度
  function getClientHeight () {
    var clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      clientHeight = Math.min (
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
    } else {
      clientHeight = Math.max (
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
    }
    return clientHeight;
  }

  //获取文档完整的高度
  function getScrollHeight () {
    return Math.max (
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
  }

  window.onscroll = function () {
    if (getScrollTop () + getClientHeight () == getScrollHeight ()) {
      callback ();
    }
  };
};

/**
 * 历史列表元素数量
 * @returns {Number}
 */
module.exports.historyLength = function () {
  return window.history.length;
};

/**
 * 导航到当前网页的超链接所在网页的URL
 * @returns {String}
 */
module.exports.docReferrer = function () {
  return document.referrer;
};

/**
 * 返回上一页
 * 返回后刷新
 */
module.exports.historyBackRefresh = function () {
  window.location.href = docReferrer ();
};

/**
 * 重载页面
 * 不添加新的历史记录
 */
module.exports.redirectHtml = function (url) {
  window.location.replace (url);
};

/**
 * 返回历史记录
 * 返回后不刷新
 */
module.exports.historyGo = function (num) {
  window.history.go (num);
};

/**
 * 判断浏览器环境;
 */
module.exports.browserObj = {
  isMobile: function () {
    return /Android|webOS|iPhone|iPod|BlackBerry/i.test (navigator.userAgent);
  },
  isAndroid: function () {
    return navigator.userAgent.match (/Android/i);
  },
  isMobileQQ: function () {
    var ua = navigator.userAgent;
    return (
      /(iPad|iPhone|iPod).*? (IPad)?QQ\/([\d\.]+)/.test (ua) ||
      /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/.test (ua)
    );
  },
  isIOS: function () {
    return navigator.userAgent.match (/iPhone|iPad|iPod/i);
  },
  isWx: function () {
    var ua = navigator.userAgent.toLowerCase ();
    return ua.indexOf ('micromessenger') != -1;
  },
  isChrome: function () {
    return (
      navigator.userAgent.match (/Chrome\/([\d.]+)/) ||
      navigator.userAgent.match (/CriOS\/([\d.]+)/)
    );
  },
  isBaidu: function () {
    return navigator.userAgent.match (/baidubrowser/i);
  },
  isUC: function () {
    return navigator.userAgent.match (/UCBrowser/i);
  },
  isSafari: function () {
    return navigator.userAgent.match (/safari/i);
  },
  isQQBrowser: function () {
    return navigator.userAgent.match (/MQQBrowser/i);
  },
  isWeibo: function () {
    return navigator.userAgent.match (/weibo/i);
  },
  isAlipay: function () {
    return navigator.userAgent.match (/Alipay/i);
  },
};

// TODO:
// node_walk: walk the element tree, stop when func(node) returns false
function node_walk (node, func) {
  var result = func (node);
  for (
    node = node.firstChild;
    result !== false && node;
    node = node.nextSibling
  )
    result = node_walk (node, func);
  return result;
}

// getCaretPosition: return [start, end] as offsets to elem.textContent that
//   correspond to the selected portion of text
//   (if start == end, caret is at given position and no text is selected)
function getCaretPosition (elem) {
  var sel = window.getSelection ();
  var cum_length = [0, 0];

  if (sel.anchorNode == elem) cum_length = [sel.anchorOffset, sel.extentOffset];
  else {
    var nodes_to_find = [sel.anchorNode, sel.extentNode];
    if (!elem.contains (sel.anchorNode) || !elem.contains (sel.extentNode))
      return undefined;
    else {
      var found = [0, 0];
      var i;
      node_walk (elem, function (node) {
        for (i = 0; i < 2; i++) {
          if (node == nodes_to_find[i]) {
            found[i] = true;
            if (found[i == 0 ? 1 : 0]) return false; // all done
          }
        }

        if (node.textContent && !node.firstChild) {
          for (i = 0; i < 2; i++) {
            if (!found[i]) cum_length[i] += node.textContent.length;
          }
        }
      });
      cum_length[0] += sel.anchorOffset;
      cum_length[1] += sel.extentOffset;
    }
  }
  if (cum_length[0] <= cum_length[1]) return cum_length;
  return [cum_length[1], cum_length[0]];
}
