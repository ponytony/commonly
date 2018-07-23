/**
 *  Author： homelan
 *  E-mail: pijiu3302@outlook.com
 *  Data: 2018/7/4
 *  Time: 22:12
 */

'use strict';

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf1 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);

// 输出: <Buffer 01 02 03 04 05 06 07 08>
console.log(buf1);
