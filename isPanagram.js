// A pangram is a sentence that contains every single letter of the 
// alphabet at least once. For example, the sentence "The quick brown 
// fox jumps over the lazy dog" is a pangram, because it uses the 
// letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True 
// if it is, False if not. Ignore numbers and punctuation.

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
// console.log(alphabet);

function isPangram(string){
  return alphabet.every((c) => string.toUpperCase().includes(c))
}

const { assert } = require("chai")

describe("Tests", () => {
  it("test", () => {
    var string = "The quick brown fox jumps over the lazy dog."
    assert.strictEqual(isPangram(string), true)
    var string = "This is not a pangram."
    assert.strictEqual(isPangram(string), false)
  });
});