#!/usr/bin/node
const { argv } = require('process');
function factorial(num) {
  if (num === 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
}
const x = parseInt(argv[2]);
if (!isNaN(x)){
  console.log(factorial(parseInt(argv[2])));
}
