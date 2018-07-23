/**
 *  Author： homelan
 *  E-mail: pijiu3302@outlook.com
 *  Data: 2018/7/4
 *  Time: 22:12
 */

'use strict';

const readline = require('readline');
const fs = require('fs');
const filename = process.argv[2];

const data = fs.createReadStream(filename)
const rl = readline.createInterface({
  input: data,
});
rl.on('line', (line) => {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`你输入的是：'${line.trim()}'`);
      break;
  }
}).on('close', () => {
  console.log('再见!');
  process.exit(0);
});