/**
 *  Author： homelan
 *  E-mail: pijiu3302@outlook.com
 *  Data: 2018/7/8
 *  Time: 22:42
 */

'use strict';

const shuffle = require('../util').shuffle

module.exports = class quickSort {
  constructor (arr) {
    this.arr = shuffle(arr)
  }

  simpleQuickSort () {
    this.quickSort1(this.arr,0,this.arr.length - 1)
    return this.arr
  }

  quickSort3Way () {
    this.quickSort2(this.arr, 0, this.arr.length - 1)
    return this.arr
  }
  quickSort1 (arr, low, high) {
    if (low > high) {//只要high-low>= 1,也就是至少索引范围内至少两个数，就可以排序
      return
    }
    let j = this.partition(arr, low, high)//返回值用来确定中位数
    this.quickSort1(arr, low, j - 1)
    this.quickSort1(arr, j + 1, high)
  }


  /**
   * [low..lt-1]是小于ｖ，不包含arr[lt]，下同
   * [lt..mid-1]是等于ｖ，包括lt，不包括mid
   * [mid-rt]是未检查的数，包含mid，包含rt
   * [rt+1-high]是大于v的数，包含rt
   * @param arr
   * @param low
   * @param high
   */
  quickSort2 (arr, low, high) {
    if (low > high) {
      return
    }
    let lt = low,
        rt = high,
        mid = low + 1;
    const v = arr[low];//这个数会在第一次检测到arr[mid]<v时进行交换
    while (mid <= rt) { // mid指向的是一个即将要进行处理的数
      if (arr[mid] < v) {
        [arr[lt++],arr[mid++]] = [arr[mid],arr[lt]]
      } else if (arr[mid] > v) {
        [arr[mid],arr[rt--]] = [arr[rt],arr[mid]]//需要注意的是这里的mid不需要--，因为[mid-rt]之间的数并未处理，这里rt和mid互换之后，还需要再和v对比一次
      } else {
        mid++
      }
    }
    this.quickSort2(arr, low, lt - 1);
    this.quickSort2(arr, rt + 1, high);
  }
  /**
   *
   * 原数组[5,7,1,8,9,1,2,1,2,0,1]
   * arr[0]的值是5
   * 1 10(i,j)
   * [ 5, 1, 1, 8, 9, 1, 2, 1, 2, 0, 7 ]
   * 3 9
   * [ 5, 1, 1, 0, 9, 1, 2, 1, 2, 8, 7 ]
   * 4 8
   * [ 5, 1, 1, 0, 2, 1, 2, 1, 9, 8, 7 ]
   * 0 8 7(0,i,j)
   * [ 1, 1, 1, 0, 2, 1, 2, *5*, 9, 8, 7 ]
   * 如果arr中大于arr[0]的值的个数和小于arr[0]的值的个数越接近，排完之后arr[0]所处的索引越接近数组中间值
   * @param arr
   * @param low
   * @param high
   * @returns {*}
   */
  partition (arr, low, high) {
    let i = low, j = high + 1;
    const v = arr[low];
    while (true) {
      while (arr[++i] < v) {
        if (i === high) break;//防止所有数都小于v
      }
      while (arr[--j] > v) {
        if (j === low) break;//防止所有的数都大于v
      }
      if (i >= j) break;
      [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    [arr[low],arr[j]] = [arr[j],arr[low]]
    return j
  }
}
