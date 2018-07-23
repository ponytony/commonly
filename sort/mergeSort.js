/**
 *  Author： homelan
 *  E-mail: pijiu3302@outlook.com
 *  Data: 2018/7/8
 *  Time: 0:00
 */

'use strict';

module.exports = class mergeSort {
  constructor (arr) {
    this.aux = [];
    this.arr = arr;
  }

  /**
   * 比如len=9的时候，
   * size  low mid high
   * 1     0    0   min(1,8)
   * 1     2    2   min(3,8)
   * 1     4    4   min(5,8)
   * 1     6    6   min(7,8)
   * 2     0    1   min(3,8)
   * 2     4    5   min(7,8)
   * 4     0    3   min(7,8)
   * 8     0    7   min(15,8) 看到索引为8的位置是在最后才合并的
   *
   * @returns {*}
   */
  botToTopMergeSort () {
    const length = this.arr.length;
    for (let sz = 1; sz < length; sz *= 2) {//这里的sz相当于一次合并数据长度的一半，（1，2，4，8.。。）
      for (let low = 0; low < length - sz; low += 2 * sz) { //low<length-sz 如果写成low+sz<length就明显多了，当sz=1，length=13时，low必须小于12，最大11，然而因为low+=2*sz，low初始值为0，那么low实际上最大可能是10，index为12的值以后处理吧
        /*
        根据low<length-sz和length-1<low+2*sz-1(math.min选取length-1时)，
        得出low+sz<length<low+2*sz;

        就是意味着，从开始点low数起来有sz个数据作为左半边，
        还有从low+sz到length-1的数据作为右半边，右半边的数据量虽然少于sz，但大于0，
        然后双边merge

        将length = 9，low=0，sz=8带入，8<9<16,这个时候就是合并多余数据（超出2^N但没达到2^N+1的那部分数据）

        当length = 15，low = 8， sz = 4的时候会触发min（8+2*4-1=15，15-1=14），
        这时候合并merge（8，11，14）那么8到14的数据就是有序的了，
        下一轮进行merge（0，7，min（15，14）），这样合并完成后数据就是有序的了
         */
        this.inplaceMerge(this.arr, low, low + sz - 1, Math.min(low + 2 * sz -1, length - 1))//这里的min是为了合并超出2^N时候的多余数据的
      }
    }
    return this.arr
  }

  topToBotMergeSort () {
    this.mergeSort1(this.arr, 0, this.arr.length - 1);
    return this.arr
  }

  /**
   * 原地归并
   * 四个判断条件
   * 左半边用尽，取右边的元素
   * 右半边用尽，取左边元素
   * 右半边当前元素小于左半边当前元素，取右半边当前元素
   * 右半边当前元素大于等于左半边当前元素，取左半边当前元素
   * 如果左边和右边的数组都为有序的，那么函数的结果也是有序的
   * @param arr
   * @param low
   * @param mid
   * @param high
   * @returns {*}
   */
  inplaceMerge (arr, low, mid, high) {
    let i = low, j = mid + 1;
    for (let k = low; k <= high; k++) {
      this.aux[k] = arr[k]
    }
    for(let k = low; k <= high; k++) {
      if (i > mid)                         arr[k] = this.aux[j++];
      else if (j > high)                   arr[k] = this.aux[i++];
      else if (this.aux[j] < this.aux[i]) arr[k] = this.aux[j++];
      else                                 arr[k] = this.aux[i++];
    }
  }

  /**
   * 自顶向下的归并
   * 假如arr的长度不为2的指数，比如9，那么数组的最左侧会先进行0，1的归并，然后进行0，1，2的归并
   * 这样处理之后0到2就是有序的了，可以和3，4继续归并和排序
   * @param arr
   * @param low
   * @param high
   */
  mergeSort1 (arr, low, high) {
    if (low >= high) return;
    const mid = Math.floor((low + high) / 2);
    this.mergeSort1(arr, low, mid)
    this.mergeSort1(arr, mid + 1, high)
    this.inplaceMerge(arr, low, mid, high)
  }
}
