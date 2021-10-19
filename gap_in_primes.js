const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

function gap(largerThan, startNum, endNum) {
  let r = [];
  let comp = startNum + largerThan - 1;
  for( let i = startNum; i < endNum; i++){
    console.log(`comp: ${comp}`)
    if(isPrime(i)){
      if(comp <= i) {
        r.push(i)
        comp = i + largerThan;
      }
      else if (comp > i){
        r.pop();
      }
    }
    if(r.length >= 2){break}
  }
  console.log(`result: ${r}`)
  if(r.length < 2){return null}
  return r;
}

const { assert } = require("chai")

describe("Gap",function() {
it("Basic tests",function() {  
    // assert.deepEqual  
    assert.deepEqual(gap(2,100,110), [101, 103]);
    assert.deepEqual(gap(4,100,110), [103, 107]);
    assert.deepEqual(gap(6,100,110), null);
    assert.deepEqual(gap(8,300,400), [359, 367]);
    assert.deepEqual(gap(10,300,400), [337, 347]);
})})