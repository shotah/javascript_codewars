function zeros(n) {
  if (n === 0) {
    return 0;
  }
  let calcResult = 1;
  for (let i = 1; i <= n; i++) {
    calcResult *= i;
  }
  console.log(calcResult.toLocaleString("fullwide", { useGrouping: false }));
  let zeroCount;
  calcResult
    .toLocaleString("fullwide", { useGrouping: false })
    .toString()
    .split("")
    .forEach((num) => (num === "0" ? zeroCount++ : (zeroCount = 0)));
  console.log(zeroCount);
  return zeroCount;
}

function zeros(n) {
  if (n < 0) {
    return -1;
  }
  let count = 0;
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

function zeros(n) {
  return n / 5 < 1 ? 0 : Math.floor(n / 5) + zeros(n / 5);
}

const chai = require("chai");
const assert = chai.assert;

// describe("Sample Tests", function () {
// it("Should pass sample tests", function () {
assert.strictEqual(zeros(0), 0, "Testing with n = 0");
assert.strictEqual(zeros(5), 1, "Testing with n = 5");
assert.strictEqual(zeros(6), 1, "Testing with n = 6");
assert.strictEqual(zeros(30), 7, "Testing with n = 30");
// });
//});
