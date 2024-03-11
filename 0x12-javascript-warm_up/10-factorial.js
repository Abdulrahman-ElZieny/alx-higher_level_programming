#!/usr/bin/node
const { argv } = require('process');
function factorial (num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
const x = parseInt(argv[2]);
if (isNaN(x)) {
  console.log(1);
} else {
  console.log(factorial(parseInt(argv[2])));
}
