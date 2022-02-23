function deepCompare(target, ...sources) {
    console.log(target.length, sources.length);
    if (target.length) {
        if (target.length !== sources.length) return false;
    }
    for (let i = 0; i < target.length; i++) {
        console.log(target[i].key, sources[i].key);
        console.log(target[i].value, sources[i].value);
        if (
            target[i].key !== sources[i].key &&
            target[i].value !== sources[i].value
        )
            return false;

        if (typeof target[i] !== typeof sources[i]) return false;
        if (typeof target[i] !== typeof sources[i]) return false;
        if (typeof target[i] === "object") {
            if (!deepCompare(target[i], ...sources[i])) return false;
        }
    }
    return true;
}

Array.prototype.sameStructureAs = function(other) {
    return deepCompare(this, ...other);
};

const chai = require("chai");
const expect = chai.expect;

expect(deepCompare({ name: "Joe" }, { name: "Joe" })).to.equal(true);
expect([1, 1, 1].sameStructureAs([2, 2, 2])).to.equal(true);
expect([1, 1, 1].sameStructureAs([2, 2, 2, 2])).to.equal(false);
expect([1, [1, 1]].sameStructureAs([2, [2, 2]])).to.equal(true);
expect([1, [1, 1]].sameStructureAs([
    [2, 2], 2
])).to.equal(false);
expect([
    [
        [],
        []
    ]
].sameStructureAs([
    [
        [],
        []
    ]
])).to.equal(true);
expect([
    [
        [],
        []
    ]
].sameStructureAs([
    [
        [],
        [
            []
        ]
    ]
])).to.equal(false);