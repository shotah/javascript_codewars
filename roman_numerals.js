class RomanNumerals {
  constructor() {}

  static numerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  static toRoman(number) {
    let output = "";
    for (var i in this.numerals) {
      while (number >= this.numerals[i]) {
        output += i;
        number -= this.numerals[i];
      }
    }
    return output;
  }

  static fromRoman(roman) {
    return roman
      .match(/CM|CD|XC|XL|IX|IV|\w/g)
      .reduce((accum, roman) => accum + this.numerals[roman], 0);
  }
}

const chai = require("chai");
const assert = chai.assert;

assert.strictEqual(RomanNumerals.toRoman(1000), "M");
assert.strictEqual(RomanNumerals.toRoman(999), "CMXCIX");
assert.strictEqual(RomanNumerals.toRoman(4), "IV");
assert.strictEqual(RomanNumerals.toRoman(1), "I");
assert.strictEqual(RomanNumerals.toRoman(1991), "MCMXCI");
assert.strictEqual(RomanNumerals.toRoman(2006), "MMVI");
assert.strictEqual(RomanNumerals.toRoman(2020), "MMXX");

assert.strictEqual(RomanNumerals.fromRoman("XXI"), 21);
assert.strictEqual(RomanNumerals.fromRoman("I"), 1);
assert.strictEqual(RomanNumerals.fromRoman("III"), 3);
assert.strictEqual(RomanNumerals.fromRoman("IV"), 4);
assert.strictEqual(RomanNumerals.fromRoman("MMVII"), 2007);
assert.strictEqual(RomanNumerals.fromRoman("MDCLXIX"), 1669);
