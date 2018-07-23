/**
 *  Author： homelan
 *  E-mail: pijiu3302@outlook.com
 *  Data: 2018/7/7
 *  Time: 14:13
 */

'use strict';

const mergeSort = require('./mergeSort')
const quickSort = require('./quickSort')

/**
 * 冒泡和选择的区别是，冒泡是相邻数比较和交换，选择是选定值比较，最小的值放在锁定的index上
 * @param arr
 * @returns {*}
 */
exports.bubbleSort = (arr) => {
  const length = arr.length;
  for (let i = 0; i < length - 1 ; i++) { // 这里的length-1是因为index从0数起
    for (let j = 0; j < length - i -1; j++) { // 每一次循环都会将最大的一个值移动到末尾（不一定只移动这一个值）
      if (arr[j] > arr[j + 1]) {　//这儿最后一次循环是j=0， i=7
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
};

/**
 * 按照循环顺序，找出i和i之后的数据中最小的一个，然后交换位置
 * @param arr
 * @returns {*}
 */
exports.selectionSort = (arr) => {
  const length = arr.length
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

/**
 * 同冒泡的区别是，冒泡是每次将最大的数移动到末尾，插入是将index指向的数移动到选定范围内的合适位置
 * @param arr
 * @returns {*}
 */
exports.insertSort = (arr) => {
  const length = arr.length
  for (let i = 1; i < length; i++) {
    console.log(arr)
    for (let j = i;j > 0 && arr[j] < arr[j - 1]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
    }
  }
  return arr
}

/**
 * 根据插入排序的特点，先将index（1，4，13.。。）和index*N ++的数据排序，使之部分有序，当
 * index = 1 的时候相当于一次插入排序，因为部分有序的缘故，总体的消耗时间略小于插入排序
 * @param arr
 * @returns {*}
 */
exports.shellSort = (arr) => {
  const length = arr.length;
  let index = 1;
  while (index < length/3) {
    index = 3 * index + 1
  }
  while (index > 1) {
    index = Math.floor(index)
    for (let i = index; i < length; i++) {
      for (let j = i; j >= index && arr[j] < arr[j - index]; j -= index) {
        [arr[j], arr[j - index]] = [arr[j - index], arr[j]]
      }
    }
    index = index / 3
  }
  return arr
}
// 从上到下的归并排序
exports.topToBotMergeSort = (arr) => {
  const sort = new mergeSort(arr)
  return sort.topToBotMergeSort()
}
// 从下到上的归并排序
exports.botToTopMergeSort = (arr) => {
  const sort = new mergeSort(arr);
  return sort.botToTopMergeSort()
}
// 递归的最简单的快速排序
exports.quickSort1 = (arr) => {
  const sort = new quickSort(arr);
  return sort.simpleQuickSort();
}

// 快速排序，三向切分
exports.quickSort3Way = (arr) => {
  const sort = new quickSort(arr);
  return sort.quickSort3Way();
}