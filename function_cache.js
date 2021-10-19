// If you are calculating complex things or execute time-consuming API calls, 
// you sometimes want to cache the results. In this case we want you to 
// create a function wrapper, which takes a function and caches its 
// results depending on the arguments, that were applied to the function.
// Usage example:



const cache = (fn) => {
  if(!fn){return null};
  let localCache = {};
  return (value) => {    
    if (value in localCache) {
      console.log('Fetching from cache');
      return localCache[value];
    }
    else {
      console.log('executing and fetching results');
      let result = fn(value);
      localCache[value] = result;
      return result;
    }
  }
}


var complexFunction = function(arg1, arg2) { /* complex calculation in here */ };
var cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments

// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;

// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

describe("Solution", function() {
  it("should test for something", function() {
    // Test.assertEquals(1 + 1, 2);
    // assert.strictEqual(1 + 1, 2);
  });
});