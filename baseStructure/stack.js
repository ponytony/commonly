/**
 *  Author： homelan
 *  E-mail: pijiu3302@outlook.com
 *  Data: 2018/7/15
 *  Time: 21:52
 */

'use strict';

const Node = require('./chainTable');

class Stack {
  constructor () {
    this.first = null;
    this.N = 0;
  }

  [Symbol.iterator] () {
    let current = this.first
    return {
      next () {
        if (!current) {
          return {
            value: undefined,
            done: true
          }
        }
        const item = current.node;
        current = current.next;
        return {
          value: item,
          done: false
        }
      }
    }
  }

  isEmpty () {
    return this.first === null
  }

  size () {
    return this.N
  }

  push (item) {
    const old = this.first;
    this.first = new Node(item, old);
    this.N++
  }

  pop () {
    const item = this.first.node;
    this.first = this.first.next;
    this.N--;
    return item;
  }
}
