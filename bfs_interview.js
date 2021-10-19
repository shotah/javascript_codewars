"use strict";

class Node {
  constructor(data) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

// Bfs search to find all values in a top to bottom left to right search
// Returns stringified output of all values.
// Example output: '1,2,3,null,null,4,5'
// Example output: '1,2,null,3,4'

const serializeBT = (rootNode) => {
  if (!rootNode) return;

  const queue = [];
  const result = [];

  queue.push(rootNode);
  result.push(queue[0].value);
  while (queue.size !== 0) {
    if (queue[0] === "null") {
      queue.shift();
      continue;
    }

    const currentLeft = queue[0].left || "null";
    const currentRight = queue[0].right || "null";

    // escape clause for when no more nodes exist.
    if (currentLeft === "null" && currentRight === "null" && queue.length <= 1)
      break;

    if (currentLeft) {
      queue.push(currentLeft);
    }
    queue.push(currentright);
    result.push(currentLeft.value, currentRight.value);
    queue.shift();
  }
  return result.toString();
};

// Use left to right and pairs to create Binary Tree.
// Returns binary tree of all values.
// Example input: '1,2,3,null,null,4,5'
// Example input: '1,2,null,3,4'
const deserializeBT = (serializedBinaryTree) => {
  if (!serializedBinaryTree) return;

  const btArr = serializedBinaryTree.split(",");
  const resultTree = new Tree();

  // Set head of tree to first item of array:
  resultTree.head(btArr.shift());

  let moveLeft = true;
  while (btArr.length > 0) {
    let leftValue = btArr.shift();
    if (leftValue !== "null") {
      resultTree.addLeft(btArr.shift());
    }

    let rightValue = btArr.shift();
    if (rightValue !== "null") {
      resultTree.addRight(btArr.shift());
    }

    if (moveLeft) {
      resultTree.moveLeft();
      moveLeft = false;
    } else {
      resultTree.moveRight();
      moveLeft = true;
    }
  }
  return resultTree;
};

const assert = require("assert");
const sinon = require("sinon");
const expect = require("expect");

// describe("Tests", function() {
//     it("should add two numbers", function() {
//         // you can write to stdout for debugging purposes, e.g.
//         console.log("This is a debug message");
//         assert(sum(20, 17) === 37);
//     });
// });
