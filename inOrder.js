"use strict";

const assert = require("assert");
const sinon = require("sinon");
const expect = require("expect");

class Node {
  constructor(value, parentNode = null, leftNode = null, rightNode = null) {
    this.value = value;
    this.parentNode = parentNode;
    this.rightNode = rightNode;
    this.leftNode = leftNode;
  }
}

// Starting with Tree:
// Thought process
//        0 < parent node
//       / \
//      1   2 < current node
//     /\   /\
//    3  4 5  6
//  LNR=>  3, 1, 4, 0, 5, 2, 6, null

const findNextNode = (node) => {
  if (!node) return;
  if (!node.parentNode) return node.rightNode;
  // check if node is left return right node as next in order node.
  if (node.parentNode.leftNode.value === node.value)
    return node.parentNode.rightNode;
  // check for grandparent
  if (node.parentNode.parentNode) return node.parentNode.parentNode;
  // return right node for in order
  return node.rightNode;
};

describe("test in order traversal", function () {
  let parentNode = new Node(0);
  parentNode.leftNode = new Node(1, parentNode);
  parentNode.leftNode.leftNode = new Node(4, parentNode.leftNode);
  parentNode.leftNode.rightNode = new Node(3, parentNode.leftNode);
  parentNode.rightNode = new Node(2, parentNode);
  parentNode.rightNode.leftNode = new Node(6, parentNode.rightNode);
  parentNode.rightNode.rightNode = new Node(5, parentNode.rightNode);

  it("should find right node with no grandparent", function () {
    let testNode = parentNode.rightNode;
    let expectedNode = parentNode.rightNode.rightNode;
    assert(findNextNode(testNode) === expectedNode);
  });

  it("should return right node if no parent", function () {
    let testNode = parentNode;
    let expectedNode = parentNode.rightNode;
    assert(findNextNode(testNode) === expectedNode);
  });

  it("should return grandparent node when right node has grandparent", function () {
    let testNode = parentNode.leftNode.rightNode;
    let expectedNode = parentNode;
    assert(findNextNode(testNode) === expectedNode);
  });
});
