function factorialize(n) {
  let num = BigInt(n);
  let result = BigInt(num);
  if (num === 0 || num === 1) return 0;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}

function zeros(n) {
  if (n <= 0) return 0;
  const numArr = factorialize(n).toString().split("").reverse();
  console.log(numArr);
  let result = 0;
  while (numArr.length > 0) {
    let currentNum = numArr.shift();
    console.log(currentNum);
    if (currentNum !== "0") {
      break;
    }
    result++;
  }
  return result;
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
