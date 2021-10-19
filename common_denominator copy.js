const range = (min, max) => {
  return Array.from({ length: max - min + 1 }, (_, i) => min + i);
};

const gcd = (a, b) => {
  return !b ? a : gcd(b, a % b);
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

function leastCommonMultiple(arr) {
  let min = Math.min(...(arr || 0));
  let max = Math.max(...(arr || 0));
  var multiple = min.toLocaleString("fullwide", { useGrouping: false });
  range(min, max).forEach((n) => {
    console.log(multiple);
    multiple = lcm(multiple, n);
  });
  return multiple;
}

const convertFrac = (list) => {
  let lcd = leastCommonMultiple(Array.from(list, (pair) => pair[1]));
  return Array.from(
    list,
    (pair) =>
      `(${((lcd / pair[1]) * pair[0]).toLocaleString("fullwide", {
        useGrouping: false,
      })},${lcd})`
  ).join("");
};

const chai = require("chai");
const assert = chai.assert;

var lst = [
  [1, 2],
  [1, 3],
  [1, 4],
];
assert.strictEqual(convertFrac(lst), "(6,12)(4,12)(3,12)");
console.log(leastCommonMultiple(range(18078, 34060)));
console.log(range(18078, 34060));
var lst = [
  [18078, 34060],
  [2262, 34060],
  [25545, 34060],
];
assert.strictEqual(convertFrac(lst), "(18078,34060)(2262,34060)(25545,34060)");
