#!/usr/bin/node
const { argv } = require('process');
const x = parseInt(argv[2]);
if (isNaN(x)) {
  console.log('Missing size');
} else if (x > 0) {
  for (let z = 0; z < x; z++) {
    console.log('X'.repeat(x));
  }
}
