const range = (start, stop) => {
  return Array.from({ length: stop - start }, (_, i) => start + i);
};

const smallestCommons = (arr) => {
  let max = Math.max(...arr);
  let array = range(Math.min(...arr), max);
  let n = max * 2 - 1;
  while (!array.every((v) => n % v === 0)) {
    n++;
  }
  return n;
};

const convertFrac = (l) => {
  let lcd = smallestCommons(Array.from(l, (pair) => pair[1]));
  return Array.from(l, (pair) => `(${(lcd / pair[1]) * pair[0]},${lcd})`).join(
    ""
  );
};

const chai = require("chai");
const assert = chai.assert;

var lst = [
  [1, 2],
  [1, 3],
  [1, 4],
];
assert.strictEqual(convertFrac(lst), "(6,12)(4,12)(3,12)");
