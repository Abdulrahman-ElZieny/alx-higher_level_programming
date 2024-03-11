#!/usr/bin/node
const { argv } = require('process');
if (!argv[2]) {
  console.log('Missing number of occurrences');
}
let z = parseInt(argv[2]);
for (; z > 0; z--) {
  console.log('C is fun');
}
