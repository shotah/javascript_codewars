const postfix ={
  "hundred": 3,
  "thousand": 4,
  "hundred": 6,
  "million": 7,
};

const tensTranslation = {
  "ten": 1,
  "twenty": 2,
  "thirty": 3,
  "forty": 4,
  "fifty": 5,
  "sixty": 6,
  "seventy": 7,
  "eighty": 8,
  "ninety": 9,
};

const singlesTranslation = {
  "zero": 0,
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9,
  "ten": 10,
  "eleven": 11,
  "twelve": 12,
  "thirteen": 13,
  "fourteen": 14,
  "fifteen": 15,
  "sixteen": 16,
  "seventeen": 17,
  "eighteen": 18,
  "nineteen": 19
};


function parseInt(string) {
  console.log(string);
  let modificationFlag = false;
  let wordResultArr = [];
  if(string == 'zero'){ return 0};
  
  // works for numbers between 0 and 999999
  let arr = string.split('');
}

// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require("chai");
const expect = chai.expect;
// const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

describe("Solution", function() {
  it("should test if the words given are an anagram of the original word", function() {
    expect(parseInt('one'), 1);
    expect(parseInt('twenty'), 20);
    expect(parseInt('two hundred forty-six'), 246);
  });
});