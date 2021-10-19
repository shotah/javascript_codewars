function anagrams(word, words) {
  let validationArray = word.split('').sort()
  let result = [];
  
  for(let testWord of words){
    console.log(testWord)
    let testArray  = testWord.split('').sort()
    console.log(validationArray.join(''), testArray.join(''))
    if(validationArray.join('') === testArray.join('')) {
      result.push(testWord);
    }
  }
  return result;
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
    expect(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).to.deep.equal(['aabb', 'bbaa']);
    expect(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])).to.deep.equal( ['carer', 'racer']);
    expect(anagrams('laser', ['lazing', 'lazy',  'lacer'])).to.deep.equal( []);
  });
});