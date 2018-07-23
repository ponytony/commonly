/**
 *  Author： homelan
 *  E-mail: pijiu3302@outlook.com
 *  Data: 2018/7/7
 *  Time: 15:50
 */

'use strict';

const fs = require('fs');
const readline = require('readline');
exports.stringToArr = (path, isNumber, callback) => {
  const data = [];
  const rl = readline.createInterface({
    input: fs.createReadStream(path)
  });
  rl.on('line', (line) => {
    const word = line.trim();
    if (word && isNumber) {
      data.push(Number(word));
    } else {
      data.push(word);
    }
  }).on('close', () => {
    let result;
    result = callback(data);
    console.log(result)
  });
}

exports.shuffle = (array) => {
  let currentIndex = array.length
      , temporaryValue
      , randomIndex;
// While there remain elements to shuffle...
  while (0 !== currentIndex) {
// Pick a remaining element...
    randomIndex = ~~(Math.random() * currentIndex);
    currentIndex -= 1;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }
  return array;
}
