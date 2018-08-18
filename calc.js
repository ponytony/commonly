/**
 *  Author： homelan
 *  E-mail: pijiu3302@outlook.com
 *  Data: 2018/8/12
 *  Time: 21:23
 */

'use strict';
const isnan = (val) => {
  return typeof val === 'number' && isNaN(val)
}

const parseString = (str, index, length) => {
  let array = [];
  for (let i = index; i < length; i++) {
    switch (str[i]) {
      case '(' :
        let a = parseString(str, ++i, length);
        array.push(a['array']);
        i = a['i'];
        break;
      case ')':
        array = calc(array)
        return {array, i};
      default:
        array.push(str[i])
        break;
    }
  }
  return calc(array)
}

const calc = (arr) => {
  let index = 0;
  let obj;
  while (index !== -1) {
    index = arr.indexOf('*')
    if (index === -1) break
    obj = getTwoGap(arr, index)
    arr.splice(index - obj.lLen, obj.lLen+ obj.rLen + 1, obj.lNum * obj.rNum)
  }
  index = 0;
  while (index !== -1) {
    index = arr.indexOf('/')
    if (index === -1) break
    obj = getTwoGap(arr, index)
    arr.splice(index - obj.lLen, obj.lLen+ obj.rLen + 1, obj.lNum / obj.rNum)
  }

  index = 0;
  while (index !== -1) {
    index = arr.indexOf('-')
    if (index === -1) break
    obj = getTwoGap(arr, index)
    console.log('1', obj)
    arr.splice(index - obj.lLen, obj.lLen+ obj.rLen + 1, obj.lNum - obj.rNum)
  }

  index = 0;
  while (index !== -1) {
    index = arr.indexOf('+')
    if (index === -1) break
    obj = getTwoGap(arr, index)
    arr.splice(index - obj.lLen, obj.lLen+ obj.rLen + 1, obj.lNum + obj.rNum)
  }
  return arr[0]
}

const getTwoGap = (arr, i) => {
  let left = '';
  let right = '';
  let lLen,rLen;
  let j = i;
  while (!isnan(Number(arr[++i]))) {
    if (typeof arr[i] === 'number') {
      right = arr[i];
      rLen = 1;
      break
    }
    right += arr[i]
    rLen = right.length
  }
  while(!isnan(Number(arr[--j]))) {
    if (typeof arr[j] === 'number') {
      left = arr[j]
      lLen = 1;
      break
    }
    left = arr[j] + left
    lLen = left.length
  }
  if (left === '') {
    lLen = 0;
    left = 0
  }
  if (right === '') {
    rLen = 0;
    right = 0
  }
  return {
    lNum: Number(left),
    rNum: Number(right),
    lLen,
    rLen
  }
}

let str = '-1+(12+3)+(4+(5+6))*7-1';
console.log(parseString(str, 0, str.length));