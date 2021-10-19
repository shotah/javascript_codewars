const isAllTrailingZeros = (num) => {
  console.log("isAllTrailingZeros", num);
  return parseInt(num.toString().substring(1)) === 0;
};

const isAllTheSame = (num) => {
  console.log("isAllTheSame", num);
  let first = parseInt(num.toString().substring(0, 1));
  return num
    .toString()
    .substring(1)
    .split("")
    .map(Number)
    .every((i) => i === first);
};

const isDecrementing = (num) => {
  console.log("isDecrementing", num);
  let first = parseInt(num.toString().substring(0, 1));
  return num
    .toString()
    .split("")
    .map(Number)
    .every((i) => i === first--);
};

const isIncrementing = (num) => {
  console.log("isIncrementing", num);
  let first = parseInt(num.toString().substring(0, 1));
  return num
    .toString()
    .substring(1)
    .split("")
    .map(Number)
    .every((i) => {
      first = (first + 1) % 10;
      return i === (first === 10 ? 0 : first);
    });
};

const isPalindrome = (num) => {
  console.log("isPalindrome", num);
  return num.toString() === num.toString().split("").reverse().join("");
};

const isAwesomePhrase = (num, awesomePhrases) => {
  console.log("isAwesomePhrase", num, awesomePhrases);
  return awesomePhrases.toString("").includes(num.toString());
};

const allTests = (num, awesomePhrases) => {
  return (
    isAwesomePhrase(num, awesomePhrases) ||
    isPalindrome(num) ||
    isIncrementing(num) ||
    isDecrementing(num) ||
    isAllTheSame(num) ||
    isAllTrailingZeros(num)
  );
};

function isInteresting(num, awesomePhrases) {
  // console.log(num, awesomePhrases);
  if (num < 98) return 0;
  console.log("pass 1");
  if (num > 99 && allTests(num, awesomePhrases)) return 2;
  num++;
  console.log("pass 2");
  if (allTests(num, awesomePhrases)) return 1;
  num++;
  console.log("pass 3");
  if (allTests(num, awesomePhrases)) return 1;
  console.log("nothing");
  return 0;
}

require("inline-mocha")(module);
var expect = require("chai").expect;
const { assert } = require("chai");

assert.strictEqual(isInteresting(3, [1337, 256]), 0);
assert.strictEqual(isInteresting(98, [1337, 256]), 1);
assert.strictEqual(isInteresting(1336, [1337, 256]), 1);
assert.strictEqual(isInteresting(1337, [1337, 256]), 2);
assert.strictEqual(isInteresting(11208, [1337, 256]), 0);
assert.strictEqual(isInteresting(11209, [1337, 256]), 1);
assert.strictEqual(isInteresting(11211, [1337, 256]), 2);

describe("isAwesomePhrase", function () {
  it("Should return true for values like 1337", function () {
    expect(isAwesomePhrase(1337, [1337, 256])).to.be.true;
  });

  it("Should return false for values like 1331", function () {
    expect(isAwesomePhrase(1331, [1337, 256])).to.be.false;
  });
});

describe("isPalindrome", function () {
  it("Should return true for values like 1221", function () {
    expect(isPalindrome(1221)).to.be.true;
  });

  it("Should return false for values like 1234", function () {
    expect(isPalindrome(1234)).to.be.false;
  });
});

describe("isIncrementing", function () {
  it("Should return true for values like 1234", function () {
    expect(isIncrementing(1234)).to.be.true;
  });
  it("Should return true for values like 7890", function () {
    expect(isIncrementing(7890)).to.be.true;
  });
  it("Should return true for values like 123456789012", function () {
    expect(isIncrementing(123456789012)).to.be.true;
  });
  it("Should return false for values like 123543", function () {
    expect(isIncrementing(123543)).to.be.false;
  });
});

describe("isDecrementing", function () {
  it("Should return true for values like 543210", function () {
    expect(isDecrementing(543210)).to.be.true;
  });

  it("Should return false for values like 123543", function () {
    expect(isDecrementing(123543)).to.be.false;
  });
});

describe("isAllTrailingZeros", function () {
  it("Should return true for values like 100", function () {
    expect(isAllTrailingZeros(100)).to.be.true;
  });
  it("Should return true for values like 1000", function () {
    expect(isAllTrailingZeros(1000)).to.be.true;
  });
  it("Should return false for values like 1001", function () {
    expect(isAllTrailingZeros(1001)).to.be.false;
  });
  it("Should return false for values like 1336", function () {
    expect(isAllTrailingZeros(1336)).to.be.false;
  });
});

describe("isAllTheSame", function () {
  it("Should return true for values like 1111", function () {
    expect(isAllTheSame(1111)).to.be.true;
  });

  it("Should return false for values like 1001", function () {
    expect(isAllTheSame(1001)).to.be.false;
  });

  it("Should return false for values like 1336", function () {
    expect(isAllTheSame(1336)).to.be.false;
  });
});
