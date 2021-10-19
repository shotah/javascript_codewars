function descendingOrder(n) {
  // let nArr = String(n).split('').sort();
  // nArr.sort();
  // nArr.reverse();
  return parseInt(String(n).split("").sort().reverse().join(""));
}

const { assert } = require("chai");

assert.strictEqual(descendingOrder(0), 0);
assert.strictEqual(descendingOrder(1), 1);
assert.strictEqual(descendingOrder(111), 111);
assert.strictEqual(descendingOrder(15), 51);
assert.strictEqual(descendingOrder(1021), 2110);
assert.strictEqual(descendingOrder(123456789), 987654321);
