/**
 *  Author： homelan
 *  E-mail: pijiu3302@outlook.com
 *  Data: 2018/7/23
 *  Time: 14:41
 */

'use strict';

export const makeId = () => {
  let date = new Date()
  return ~~(String(date.getTime()) + String(Math.random() * 999))
}

export const trim = (str) => {
  return str.replace(/^\s*/, '').replace(/\s*$/, '')
}

export const QueryString = (name) => {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let r = window.location.search.substr(1).match(reg)
  let context = ''
  if (r !== null) {
    context = r[2]
  }
  reg = null
  r = null
  return context === null || context === '' || context === 'undefined' ? '' : context
}

export const isArray = (data) => {
  return Object.prototype.toString().call(data) === '[object Array]'
}

export const isArrayBuffer = (data) => {
  return Object.prototype.toString().call(data) === '[object ArrayBuffer]'
}

export const isFormData = (val) => {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

export const isURLSearchParams = (val) => {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

export const isArrayBufferView = (val) => {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

export const isString = (val) => {
  return typeof val === 'string';
}

export const isNumber = (val) => {
  return typeof val === 'number';
}

export const isUndefined = (val) => {
  return typeof val === 'undefined';
}

export const isObject = (val) => {
  return val !== null && typeof val === 'object'
}

export const isNan = (val) => {
  return typeof val === 'number' && isNaN(val)
}

export const isDate = (val) => {
  return Object.prototype.toString().call(val) === '[object Date]';
}

export const isFile = (val) => {
  return Object.prototype.toString().call(val) === '[object File]';
}

export const isBlob = (val) => {
  return Object.prototype.toString().call(val) === '[object Blob]';
}

export const isFunction = (val) => {
  return Object.prototype.toString().call(val) === '[object Function]';
}

export const isStream = (val) => {
  return isObject(val) && isFunction(val.pipe);
}

export const isStandardBrowserEnv = () => {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
          navigator.product === 'NativeScript' ||
          navigator.product === 'NS')) {
    return false;
  }
  return (
      typeof window !== 'undefined' &&
      typeof document !== 'undefined'
  );
}

/**
 * 检查对象是否为空
 * @param obj
 * @returns {boolean}
 */
export const isEmptyObject = (obj) => {
  for (let key in obj) {
    return false
  }
  return true
}

/**
 * 检查手机号码格式，仅限没有区号
 * @param tel
 * @returns {boolean}
 */
export const checkTel = (tel) => {
  const rePhone = /^1[3|4|5|7|8][0-9]\d{8}$/
  return rePhone.test(tel)
}

/**
 * 如果str的长度超过限定，返回false
 * @param str
 * @param maxLen
 * @returns {boolean}
 */
export const validDataLen = (str, maxLen) => {
  str = trim(str)
  if (str.length > maxLen || str.length === 0) {
    return false
  } else {
    return str // 这里不做escape了
  }
}

/**
 * 同上一个函数的区别在于返回值不同，不需要escape函数
 * @param str
 * @param maxLen
 * @returns {boolean}
 */
export const validDataLenUnescape = (str, maxLen) => {
  str = trim(str)
  return str.length < maxLen
}

export const unescapeString = (str) => {
  str = trim(str)
  return str
      .replace(str ? /&(?!#?\w+;)/g : /&/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '\"')
      .replace(/&#39;/g, '\'')
      .replace(/<\s*script\s*>/g, 'script')
      .replace(/<\s*\/\s*script\s*>/g, 'script')
      .replace(/&amp;/g, '&')
}

/**
 * 用于重新计算图片大小
 * @param imgWidth
 * @param imgHeight
 * @param containerWidth
 * @param containerHeight
 * @param imgRatio
 * @param containerRatio
 * @returns {{width: *, height: *}}
 */
export const calculateImageSize = (imgWidth, imgHeight, containerWidth, containerHeight, imgRatio, containerRatio) => {
  let newWidth, newHeight
  if (imgRatio >= containerRatio) {
    newWidth = containerWidth
    newHeight = Math.floor(containerWidth / imgWidth * imgHeight)
  } else if (imgRatio < containerRatio) {
    newHeight = containerHeight
    newWidth = Math.floor(containerHeight / imgHeight * imgWidth)
  }
  return {
    width: newWidth,
    height: newHeight
  }
}

/**
 * 传入 ‘2012-12-12’，传出2012/12/12,供date对象使用
 * @param date
 */
export const parseDateToString = (date) => {
  return date.replace(/-/g, '/')
}

/**
 * 传入的是date对象，未过期就是正值或者0
 * @param startTime
 * @param endTime
 */
export const twoDateGap = (startTime, endTime) => {
  return parseInt((endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60 * 24))
}

/**
 * 测量角度
 * @param startX
 * @param startY
 * @param endX
 * @param endY
 * @returns {number}
 */
export const getAngel = (startX, startY, endX, endY) => {
  let diffX = endX - startX
  let diffY = endY - startY
  return 360 * Math.atan(diffY / diffX) / (2 * Math.PI)
}
/**
 * 输入数字，n确定取小数点几位，同时可以补零
 * @param num
 * @param n
 * @returns {string}
 */
export const prefixInteger = (num, n) => {
  return (Array(n).join(0) + num).slice(-n)
}

export const forEach = (obj, fn) => {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (let i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

export const merge = (/* obj1, obj2, obj3, ... */) => {
  let result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

export const deepMerge = (/* obj1, obj2, obj3, ... */) => {
  let result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

export const bind = (fn, thisArg) => {
  return function wrap() {
    let args = new Array(arguments.length);
    for (let i = 0; i < args.length; i++) {//可以用解构函数来简化函数
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

export const extend = (a, b, thisArg) => {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}



/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * 扒来的一个库
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

function safeAdd (x, y) {
  let lsw = (x & 0xffff) + (y & 0xffff)
  let msw = (x >> 16) + (y >> 16) + (lsw >> 16)
  return (msw << 16) | (lsw & 0xffff)
}

/*
* Bitwise rotate a 32-bit number to the left.
*/
function bitRotateLeft (num, cnt) {
  return (num << cnt) | (num >>> (32 - cnt))
}

/*
* These functions implement the four basic operations the algorithm uses.
*/
function md5cmn (q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b)
}
function md5ff (a, b, c, d, x, s, t) {
  return md5cmn((b & c) | (~b & d), a, b, x, s, t)
}
function md5gg (a, b, c, d, x, s, t) {
  return md5cmn((b & d) | (c & ~d), a, b, x, s, t)
}
function md5hh (a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t)
}
function md5ii (a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t)
}

/*
* Calculate the MD5 of an array of little-endian words, and a bit length.
*/
function binlMD5 (x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << (len % 32)
  x[((len + 64) >>> 9 << 4) + 14] = len

  let i
  let olda
  let oldb
  let oldc
  let oldd
  let a = 1732584193
  let b = -271733879
  let c = -1732584194
  let d = 271733878

  for (i = 0; i < x.length; i += 16) {
    olda = a
    oldb = b
    oldc = c
    oldd = d

    a = md5ff(a, b, c, d, x[i], 7, -680876936)
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586)
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819)
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330)
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897)
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426)
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341)
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983)
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416)
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417)
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063)
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162)
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682)
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101)
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290)
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329)

    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510)
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632)
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713)
    b = md5gg(b, c, d, a, x[i], 20, -373897302)
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691)
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083)
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335)
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848)
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438)
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690)
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961)
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501)
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467)
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784)
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473)
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734)

    a = md5hh(a, b, c, d, x[i + 5], 4, -378558)
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463)
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562)
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556)
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060)
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353)
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632)
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640)
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174)
    d = md5hh(d, a, b, c, x[i], 11, -358537222)
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979)
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189)
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487)
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835)
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520)
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651)

    a = md5ii(a, b, c, d, x[i], 6, -198630844)
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415)
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905)
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055)
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571)
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606)
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523)
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799)
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359)
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744)
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380)
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649)
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070)
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379)
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259)
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551)

    a = safeAdd(a, olda)
    b = safeAdd(b, oldb)
    c = safeAdd(c, oldc)
    d = safeAdd(d, oldd)
  }
  return [a, b, c, d]
}

/*
* Convert an array of little-endian words to a string
*/
function binl2rstr (input) {
  let i
  let output = ''
  let length32 = input.length * 32
  for (i = 0; i < length32; i += 8) {
    output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xff)
  }
  return output
}

/*
* Convert a raw string to an array of little-endian words
* Characters >255 have their high-byte silently ignored.
*/
function rstr2binl (input) {
  let i
  let output = []
  output[(input.length >> 2) - 1] = undefined
  for (i = 0; i < output.length; i += 1) {
    output[i] = 0
  }
  let length8 = input.length * 8
  for (i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << (i % 32)
  }
  return output
}

/*
* Calculate the MD5 of a raw string
*/
function rstrMD5 (s) {
  return binl2rstr(binlMD5(rstr2binl(s), s.length * 8))
}

/*
* Calculate the HMAC-MD5, of a key and some data (raw strings)
*/
function rstrHMACMD5 (key, data) {
  let i
  let bkey = rstr2binl(key)
  let ipad = []
  let opad = []
  let hash
  ipad[15] = opad[15] = undefined
  if (bkey.length > 16) {
    bkey = binlMD5(bkey, key.length * 8)
  }
  for (i = 0; i < 16; i += 1) {
    ipad[i] = bkey[i] ^ 0x36363636
    opad[i] = bkey[i] ^ 0x5c5c5c5c
  }
  hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8)
  return binl2rstr(binlMD5(opad.concat(hash), 512 + 128))
}

/*
* Convert a raw string to a hex string
*/
function rstr2hex (input) {
  let hexTab = '0123456789abcdef'
  let output = ''
  let x
  let i
  for (i = 0; i < input.length; i += 1) {
    x = input.charCodeAt(i)
    output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f)
  }
  return output
}

/*
* Encode a string as utf-8
*/
function str2rstrUTF8 (input) {
  return unescape(encodeURIComponent(input))
}

/*
* Take string arguments and return either raw or hex encoded strings
*/
function rawMD5 (s) {
  return rstrMD5(str2rstrUTF8(s))
}
function hexMD5 (s) {
  return rstr2hex(rawMD5(s))
}
function rawHMACMD5 (k, d) {
  return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d))
}
function hexHMACMD5 (k, d) {
  return rstr2hex(rawHMACMD5(k, d))
}

export const md5 = (string, key, raw) => {
  if (!key) {
    if (!raw) {
      return hexMD5(string)
    }
    return rawMD5(string)
  }
  if (!raw) {
    return hexHMACMD5(key, string)
  }
  return rawHMACMD5(key, string)
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 *
 * 一个接一个执行参数
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

export const compose = (...funcs) => {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}