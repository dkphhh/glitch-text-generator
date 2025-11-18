import * as z from 'zero-width-lib';

// 0. six different zwc
const dict = z.zeroWidthDict;
// console.log(dict.zeroWidthSpace); // '*' U+200B
// console.log(dict.zeroWidthNonJoiner); // '*' U+200C
// console.log(dict.zeroWidthJoiner); // '*' U+200D
// console.log(dict.leftToRightMark); // '*' U+200E
// console.log(dict.rightToLeftMark); // '*' U+200F
// console.log(dict.zeroWidthNoBreakSpace); // '*' U+FEFF

// 1. convert text
const text = '你好';
const zwc = z.t2z(text); // '********'
const back = z.z2t(zwc); // 'text'

// 2. embed hidden text
const visble = '**********';
const hidden = '我真棒';
const encoded = z.encode(visble, hidden); // 'h*********ello world'
console.log(encoded);
const decoded = z.decode(encoded); // 'inpired by @umpox'
console.log(decoded);

// 3. extract ZWC from text
const extracted = z.extract(encoded);
const vis = extracted.vis; // 'hello world'
const hid = extracted.hid; // '*********'

// 4. escape from string matching
const forbidden = 'forbidden';
const escaped = z.split(forbidden); // 'f*o*r*b*i*d*d*e*n*'
