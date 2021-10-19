function deepCheck(target, ...sources) {
  if (target.length !== sources.length) return false;
  for (let i = 0; i < target.length; i++) {
    if (typeof target[i] !== typeof sources[i]) return false;
    if (typeof target[i] === "object") {
      if (!deepCheck(target[i], ...sources[i])) return false;
    }
  }
  return true;
}

Array.prototype.sameStructureAs = function (other) {
  return deepCheck(this, ...other);
};

const chai = require("chai");
const expect = chai.expect;

expect([1, 1, 1].sameStructureAs([2, 2, 2])).to.equal(true);
expect([1, 1, 1].sameStructureAs([2, 2, 2, 2])).to.equal(false);
expect([1, [1, 1]].sameStructureAs([2, [2, 2]])).to.equal(true);
expect([1, [1, 1]].sameStructureAs([[2, 2], 2])).to.equal(false);
expect([[[], []]].sameStructureAs([[[], []]])).to.equal(true);
expect([[[], []]].sameStructureAs([[[], [[]]]])).to.equal(false);
