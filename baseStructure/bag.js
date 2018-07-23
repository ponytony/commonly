/**
 *  Author： homelan
 *  E-mail: pijiu3302@outlook.com
 *  Data: 2018/7/16
 *  Time: 21:41
 */

'use strict';
const Node = require('./chainTable');

class Bag {
  constructor() {
    this.first = null
    this.count = 0
  }
  add (item) {
    const old = this.first;
    this.first = new Node(item, old)
  }
  [Symbol.iterator] () {
    let current = this.first;
    return {
      next () {
        if (!current) {
          return {
            value: undefined,
            done: true
          }
        }
        let item = current.node;
        current = current.next;
        return {
          value:item,
          done: false
        }
      }
    }
  }
}