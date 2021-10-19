"use strict";

const assert = require("assert");
// const sinon: SinonStatic = require("sinon");
// const sinon = require("sinon");
const expect = require("expect");

interface LocalNode {
  value: string | number;
  parentNode?: LocalNode;
  rightNode?: LocalNode;
  leftNode?: LocalNode;
}

class LocalNode {
  constructor(
    value: string | number,
    parentNode?: LocalNode,
    leftNode?: LocalNode,
    rightNode?: LocalNode
  ) {
    this.value = value;
    this.parentNode = parentNode;
    this.rightNode = rightNode;
    this.leftNode = leftNode;
  }
}

// Starting w// ith Tree:
// Thought process
//        0 < parent node
//       / \
//      1   2 < current node
//     /\   /\
//    3  4 5  6
//  LNR=>  3, 1, 4, 0, 5, 2, 6, null

const findNextNode = (node: LocalNode) => {
  if (!node) return;
  if (!node.parentNode) return node.rightNode;
  // check if node is left return right node as next in order node.
  if (node.parentNode.leftNode === node) return node.parentNode.rightNode;
  // check for grandparent
  if (node.parentNode.parentNode) return node.parentNode.parentNode;
  // return right node for in order
  return node.rightNode;
};

// describe("test in order traversal", function () {
let parentNode = new LocalNode(0);
parentNode.leftNode = new LocalNode(1, parentNode);
parentNode.leftNode.leftNode = new LocalNode(4, parentNode.leftNode);
parentNode.leftNode.rightNode = new LocalNode(3, parentNode.leftNode);
parentNode.rightNode = new LocalNode(2, parentNode);
parentNode.rightNode.leftNode = new LocalNode(6, parentNode.rightNode);
parentNode.rightNode.rightNode = new LocalNode(5, parentNode.rightNode);

// it("should find right node w// ith no grandparent", function () {
let testNode = parentNode.rightNode;
let expectedNode = parentNode.rightNode.rightNode;
assert(findNextNode(testNode) === expectedNode);
//});

// it("should return right node if no parent", function () {
testNode = parentNode;
expectedNode = parentNode.rightNode;
assert(findNextNode(testNode) === expectedNode);
//});

// it("should return grandparent node when right node has grandparent", function () {
testNode = parentNode.leftNode.rightNode;
expectedNode = parentNode;
assert(findNextNode(testNode) === expectedNode);
//});
// });
