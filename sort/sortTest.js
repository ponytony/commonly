/**
 *  Author： homelan
 *  E-mail: pijiu3302@outlook.com
 *  Data: 2018/7/7
 *  Time: 14:27
 */


'use strict';

/*
node sortTest 8ints.txt shellSort true
 */
const fileName = process.argv[2];
const sortFunc = process.argv[3];
const isNumber = process.argv[4];
const path = `../algs4-data/${fileName}`;
const sorts = require('./allSort');
const strToArr = require('../util').stringToArr;


strToArr(path, isNumber, sorts[sortFunc]);
