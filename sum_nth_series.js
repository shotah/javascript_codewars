function SeriesSum(n)
{
  for(var r = 0, i = 0; i < n; i++) {
    r += (1/(1 + i * 3))
  };
  return r.toFixed(2);
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(SeriesSum(1), "1.00")
    assert.strictEqual(SeriesSum(2), "1.25")
    assert.strictEqual(SeriesSum(3), "1.39")
    assert.strictEqual(SeriesSum(4), "1.49")
  });
});
