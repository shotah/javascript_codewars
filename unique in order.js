// function uniqueInOrder(iterable) {
//   let lastValue;
//   return iterable.toString().replace(/[^0-9a-z]/gi, '').split('').reduce(
//     (acc, val) => {
//       if(!isNaN(val)){
//         val = Number(val)
//       }
      
//       if(val !== lastValue) {
//         lastValue = val;
//         acc.push(val)
//       }
//       return acc
//     }, 
//   []);  
// }

const uniqueInOrder = itr => [...itr].filter((chr, inc) => chr != itr[inc + 1])
//['A','B','C','D','A','B']
let output = uniqueInOrder('AAAABBBCCDAABBB')
console.log(output)


const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;

describe("Tests", () => {
  it("test", () => {
    assert.sameOrderedMembers(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
  });
});
