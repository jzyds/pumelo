/**
 * calculateDifference
 * @param {Number} difference
 * @returns {Object}
 */
module.exports.calculateDifference = function (difference, language) {
  const second = 1000
  const minute = 60 * second
  const hour = 60 * minute
  const day = 24 * hour
  const month = 30 * day // approximately
  const year = 365 * day // approximately

  const hashEnCn = {
    second: '秒',
    minute: '分钟',
    hour: '小时',
    day: '天',
    month: '月',
    year: '年'
  }


  let obj = {}
  const time = [{ year }, { month }, { day }, { hour }, { minute }, { second }]
    .map((item, i, a) => {
      const [[unitName, unit]] = Object.entries(item)
      const units = (difference / unit) | 0
      difference -= unit * units
      const maybePlural = units === 1 ? '' : 's'
      obj[unitName] = units
      if (units > 0) {
        if (!!language && language === 'cn'){
          return units + ' ' + hashEnCn[unitName]
        }else{
          return units + ' ' + unitName + maybePlural
        }
      }else{
        return ''
      }
    })
    .filter(x => x)
  return {obj, formattedTime: time}
}

/**
 * Update or create query string
 * @param {String} uri
 * @param {String} key
 * @param {String} value
 * @returns {String}
 */
module.exports.updateQueryStringParameter = function (uri, key, value) {
  var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i')
  var separator = uri.indexOf('?') !== -1 ? '&' : '?'
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + '=' + value + '$2')
  } else {
    return uri + separator + key + '=' + value
  }
}

function addZero (n) {
  n = String(n)
  if (n.length === 1) {
    return '0' + n
  } else {
    return n
  }
}

/**
 * timeDown
 * @param {Number} totalSeconds
 * @param {Function} fn
 * @returns {*}
 */
module.exports.timeDown = (totalSeconds, fn) => {
  let days = Math.floor(totalSeconds / (60 * 60 * 24))
  let modulo = totalSeconds % (60 * 60 * 24)
  let hours = Math.floor(modulo / (60 * 60))
  modulo = modulo % (60 * 60)
  let minutes = Math.floor(modulo / 60)
  let seconds = modulo % 60

  fn(addZero(days), addZero(hours), addZero(minutes), addZero(seconds))
  setTimeout(function () {
    totalSeconds = totalSeconds - 1
    if (totalSeconds < 0) return
    timeDown(totalSeconds, fn)
  }, 1000)
}

/**
 * isObjectValueEqual
 * @param {Object} a
 * @param {Object} b
 * @returns {Boolean}
 */
module.exports.isObjectValueEqual = (a, b) => {
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a)
  var bProps = Object.getOwnPropertyNames(b)

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length != bProps.length) {
    return false
  }

  for (let i = 0; i < aProps.length; i++) {
    let propName = aProps[i]

    // If values of same property are not equal,
    // objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false
    }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true
}

/**
 * findIndex
 * @param {Array} arr
 * @param {Function} callback
 * @returns {Number}
 */
module.exports.findIndex = function (arr, callback) {
  if (arr == null || arr.length == 0) {
    console.log('array is null')
    return
  }

  for (var i = 0; i < arr.length; i++) {
    var __boolean__ = callback(arr[i])
    if (__boolean__) {
      return i
    }
  }
}

/**
 * rmArrayItem
 * @param {Array} arr
 * @param {*} item
 * @returns {Boolean}
 */
module.exports.rmArrayItem = function (arr, item) {
  var index = arr.indexOf(item)
  if (index !== -1) {
    array.splice(index, 1)
    return true
  } else {
    return false
  }
}

/**
 * FormatTimestamp
 * @param {String} timestamp
 * @returns *
 */
class FormatTimestamp {
  constructor (timestamp) {
    let time = new Date(timestamp)
    this.y = time.getFullYear()
    this.m = this.add0(time.getMonth() + 1)
    this.d = this.add0(time.getDate())
    this.h = this.add0(time.getHours())
    this.mm = this.add0(time.getMinutes())
    this.s = this.add0(time.getSeconds())
  }

  add0 (num) {
    return Number(num) < 10 ? '0' + String(num) : num
  }

  format_dot (timestamp) {
    return `${this.y}.${this.m}.${this.d} ` + `${this.h}:${this.mm}:${this.s}`
  }

  format (type) {
    if (type === 'M-D') {
      return this.m + '-' + this.d
    }
  }

  obj () {
    return {
      year: this.y,
      month: this.m,
      day: this.d,
      hour: this.h,
      minute: this.mm,
      second: this.s
    }
  }
}

module.exports.FormatTimestamp = FormatTimestamp

/**
 * every
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Boolean}
 */
module.exports.every = function (arr, fn) {
  var result = true
  for (var i = 0; i < arr.length; i++) {
    result = result && fn(arr[i])

    // 遇到第一个不匹配条件的元素时就停止遍历数组
    if (result === false) return false
  }
  return result
}

/**
 * some
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Boolean}
 */
module.exports.some = function (arr, fn) {
  var result = false
  for (var i = 0; i < arr.length; i++) {
    result = fn(arr[i])
    if (result) return true
  }
  return result
}

/**
 * once
 * @param {Function} fn
 * @returns {Function}
 */
module.exports.once = function (fn) {
  var done = false

  return function () {
    return done ? void 0 : ((done = true), fn.apply(this, arguments))
  }
}

/**
 * deep clone
 * @param {Array | Object} a
 * @returns {*}
 */
module.exports.deepClone = function (a) {
  let n
  let t = Object.prototype.toString
  if (t.call(a) === '[object Array]') {
    n = []
  } else if (t.call(a) === '[object Object]') {
    n = {}
  } else {
    return a
  }
  for (let i in a) {
    if (a.hasOwnProperty(i)) {
      if (
        t.call(a[i]) === '[object Array]' ||
        t.call(a[i]) === '[object Object]'
      ) {
        n[i] = this.deepClone(a[i])
      } else {
        n[i] = a[i]
      }
    }
  }
  return n
}

module.exports.copyArray = function (arr) {
  return arr.concat()
}

module.exports.hp = function (obj, key) {
  return obj.hasOwnProperty(key)
}

module.exports.typeof = function (obj) {
  let type = Object.prototype.toString.call(obj)
  if (type == '[object Array]') return 'array'
  if (type == '[object Object]') return 'object'
  return 'not object type'
}

/**
 * isObj
 * @param {*} obj
 * @returns {Boolean}
 */
module.exports.isObj = function (obj) {
  return this.typeof(obj) === 'object'
}

/**
 * isArray
 * @param {*} obj
 * @returns {Boolean}
 */
module.exports.isArray = function (obj) {
  return this.typeof(obj) === 'array'
}

/**
 * Returns all the distinct values of an array.
 * @param {Array} - source array
 * @returns {Array} - new array
 */
module.exports.distinctValuesOfArray = arr => [...new Set(arr)]

/**
 * Measures the time taken by a function to execute.
 * @param {Function} - callback function
 * @returns {*}
 */
module.exports.timeTaken = function (callback) {
  console.time('timeTaken')
  const r = callback()
  console.timeEnd('timeTaken')
  return r
}

/**
 * 生成随机颜色
 * @returns {String}
 */
module.exports.randomColor = function () {
  let n = ((Math.random() * 0xfffff) | 0).toString(16)
  return (
    '#' + (n.length !== 6 ? ((Math.random() * 0xf) | 0).toString(16) + n : n)
  )
}

/**
 * 生成随机字符串
 * @param {Number} - 随机字符串长度
 * @returns {String}
 */
module.exports.randomString = function (length) {
  var str = ''
  var length = length
  var arr = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ]

  for (var i = 0; i < length; i++) {
    var pos = Math.round(Math.random() * (arr.length - 1))
    str += arr[pos]
  }
  return str
}

/**
 * @param {String} - 被检测的字符串
 * @param {String} - 检测类型
 * @returns {Boolean}
 */
module.exports.checkStringType = function (str, type) {
  switch (type) {
    case 'email':
      return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(str)
    case 'phone':
      return /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(str)
    case 'tel':
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
    case 'number':
      return /^[0-9]$/.test(str)
    case 'lower':
      return /^[a-z]+$/.test(str)
    case 'upper':
      return /^[A-Z]+$/.test(str)
    case 'ip':
      return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(
        str
      )
    default:
      return true
  }
}

/**
 * 生成随机数.
 * @param {Number} - 最小值
 * @param {Number} - 最大值
 * @returns {Number}
 */
module.exports.randomNum = function (Min, Max) {
  var Range = Max - Min
  var Rand = Math.random()
  return Min + Math.round(Rand * Range)
}

/**
 * 数组排序.
 * @param {Array} - source array
 * @returns {Array} - new array
 */
module.exports.quickSort = function (arr) {
  if (arr.length <= 1) return arr
  let middle_number = Math.floor(arr.length / 2)
  let pivot = arr.splice(middle_number, 1)[0]
  let leftList = []
  let rightList = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftList.push(arr[i])
    } else {
      rightList.push(arr[i])
    }
  }
  return this.quickSort(leftList).concat([pivot], this.quickSort(rightList))
}
