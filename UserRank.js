// TODO: create the User class/object
// it must support rank, progress and the incProgress(rank) method

class User {
  constructor() {
    this.currProgress = 0;
    this.currLevel = -8;
  }
  
  get progress(){
    return this.currProgress;
  }
  
  get level(){
    return this.currLevel;
  }
  
  incProgress(completedLevel) {
    if(-8 > completedLevel || completedLevel > 8){ throw 'Invalid Rank!'}
    
    let rankDifference = Math.abs(this.currLevel - completedLevel)
    let newProgress = 10 * rankDifference * rankDifference
    
    if(completedLevel === this.currLevel){newProgress = 3};
    if(completedLevel < this.currLevel){newProgress = 1};
    
    this.currProgress += newProgress

    while(this.currProgress >= 100) {
      if(this.currLevel === 8){ this.currProgress = 0; return };
      this.currProgress -= 100;
      this.currLevel += 1;
      if( this.currLevel === 0 ){ this.currLevel = 1 }
    }
  }
}




// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require("chai");
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

describe("User Class methods", function() {
  it("should test that the user has level -8", function() {
    let newUser = new User();
    assert.strictEqual(newUser.level, -8); 
  });
  it("should test that the user has level -8 and progress is 90", function() {
    let newUser = new User();
    newUser.incProgress(-5);
    assert.strictEqual(newUser.level, -8); 
    assert.strictEqual(newUser.progress, 90); 
  });
  it("should test that the user has level -7 and progress is 0", function() {
    let newUser = new User();
    newUser.incProgress(-7);
    newUser.incProgress(-5);
    assert.strictEqual(newUser.level, -7); 
    assert.strictEqual(newUser.progress, 0); 
  });
  it("should test a user that does the same rank level and receives 3 points", function() {
    let newUser = new User();
    newUser.incProgress(-8);
    assert.strictEqual(newUser.level, -8); 
    assert.strictEqual(newUser.progress, 3); 
  });
  it("should test a user that does the same rank level and receives 3 points", function() {
    let newUser = new User();
    newUser.incProgress(8);
    assert.strictEqual(newUser.level, 8); 
    assert.strictEqual(newUser.progress, 0); 
  });
  it("should test a user thows an error if not between -8 and 8", function() {
    let newUser = new User();
    assert.throws(() => newUser.incProgress(10), /Invalid Rank!/);
  });
});
