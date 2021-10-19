function filter_list(l) {
  return l.filter((n) => typeof n === "number");
}

const chai = require("chai");
const assert = chai.assert;

assert.deepEqual(filter_list([1, 2, "a", "b"]), [1, 2]);
assert.deepEqual(filter_list([1, "a", "b", 0, 15]), [1, 0, 15]);
assert.deepEqual(filter_list([1, 2, "aasf", "1", "123", 123]), [1, 2, 123]);
