/**
 *  Author： homelan
 *  E-mail: pijiu3302@outlook.com
 *  Data: 2018/7/16
 *  Time: 22:13
 */

'use strict';

module.exports = class binarySearch {
  constructor (arr, goal) {
    this.arr = arr;
    this.goal = goal;
  }
  coreSearch (arr, goal, low, high) {
    if (low > high) {
      return undefined;
    }
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] > goal) {
      return this.coreSearch(arr, goal, low, mid - 1)
    } else if ( arr[mid] < goal) {
      return this.coreSearch(arr, goal, mid + 1, high)
    } else {
      return mid
    }
  }
  binarySearchRecur () {
    return this.coreSearch(this.arr, this.goal, 0, this.arr.length - 1)
  }

  binarySearch (arr, goal) {
    let low = 0,
        high = this.arr.length - 1,
        mid;
    while (low <= high) {
      mid = Math.floor((low + high) / 2)
      if (this.goal < this.arr[mid]) {
        high = mid - 1
      }else if (this.goal > this.arr[mid]) {
        low = mid + 1
      }else {
        return mid
      }
    }
    return undefined
  }
}