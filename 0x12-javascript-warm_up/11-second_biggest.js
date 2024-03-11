#!/usr/bin/node
const { argv } = require('process');
const argNum = argv.length;
const arr = [];
for (let x = 2; x < argNum; x++) {
  arr.push(argv[x]);
}
arr.sort((a, b) => b - a);
if (arr[1]) {
  console.log(arr[1]);
} else {
  console.log(0);
}
