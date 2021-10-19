
// function minMax(arr){
//   let min = arr[0];
//   let max = arr[0];
//   arr.map(
//     (num) => { 
//       min = num < min ? num : min
//       max = num > max ? num : max
//     }
//   )
//   return [min, max]
// }

let minMax = arr => [Math.min(...arr), Math.max(...arr)];

const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;

var test = function(arr, res){
  assert.sameOrderedMembers(minMax(arr), res, "tested on " + JSON.stringify(arr) + ":");
};

describe("minMax", function(){
  it("should work for some examples", function(){
    var i, r;
    test([1,2,3,4,5], [1,5]);
    test([2334454,5], [5, 2334454]);
    
    for(i = 0; i < 20; ++i){
      r = Math.random();
      test([r], [r,r]);
    }   
  });
});