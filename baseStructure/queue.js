/**
 *  Author： homelan
 *  E-mail: pijiu3302@outlook.com
 *  Data: 2018/7/16
 *  Time: 20:37
 */

'use strict';

const Node = require('./chainTable')

class Queue {
  constructor () {
    this.first = null;
    this.last = null;
    this.count = 0;
  }
  isEmpty () {
    return this.count === 0;
  }

  size () {
    return this.count
  }

  enqueue (item) {
    let old = this.last;
    this.last = new Node(item, null)
    if (this.isEmpty()) {
      this.first = this.last//这个是关键，将first的引用指向last
    } else {
      old.next = this.last//old是原来的this.last,因为之前的first和last是同一个引用，那么每次old。next时就是在first链条上添加next
    }
    this.count++
  }
  dequeue () {
    const result = this.first.item;
    this.first = this.first.next;
    if (this.isEmpty()) {
      this.last = null
    }
    this.count--;
    return result;
  }
  [Symbol.iterator] () {
    let current = this.first
    return {
      next() {
        if (!current) {
          return {
            value: undefined,
            done: true
          }
        }
        const item = current.node;
        current = current.next;
        return {
          value:item,
          done: false
        }
      }
    }
  }
}

let a = new Queue();
a.enqueue(1)
a.enqueue(2)
a.enqueue(3)
a.enqueue(4)
a.enqueue(5)

for (let key of a) {
  console.log(key)
}