class Node {
  constructor(data, leftNode = null, rightNode = null) {
    this.data = data;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }
}

class BinaryTree {
  constructor() {
    this.head = null;
    this.current = null;
    this.size = 0;
  }

  insertHead(data) {
    this.head = new Node(data);
    this.current = this.head;
  }

  insertLeft(data) {
    this.current.leftNode = new Node(data);
  }

  insertRight(data) {
    this.current.rightNode = new Node(data);
  }

  moveLeft() {
    // if (!this.current.leftNode) {
    //   return;
    // }
    this.current = this.current.leftNode;
  }

  moveRight() {
    if (!this.current.rightNode) {
      return;
    }
    this.current = this.current.rightNode;
  }

  getCurrent() {
    return this.current.data;
  }

  getLeft() {
    if (!this.current.leftNode) return "";
    return this.current.leftNode.data;
  }

  getRight() {
    if (!this.current.rightNode) return "";
    return this.current.rightNode.data;
  }

  printLeftTree() {
    this.current = this.head;
    console.log(this.current.data);
    while (this.current) {
      console.log(this.getLeft());
      console.log(this.getRight());
      this.moveLeft();
    }
    return;
  }

  bfsSearch(data = null) {
    if (!data) return;

    function findData(data, current) {
      console.log(current);
      if (current === null || current.data === null) {
        return;
      }
      while (current.data !== data) {
        current = current.leftNode ? current.leftNode : current.rightNode;
        findData(data, current);
      }
      return this.current;
    }

    return findData(data, this.head);
  }

  clearTree() {
    this.head = null;
  }
}

let bt = new BinaryTree();
bt.insertHead(1);
bt.insertRight(2);
bt.insertLeft(3);
bt.moveRight();
bt.insertRight(4);
bt.insertLeft(5);
// bt.printLeftTree();
let a = bt.bfsSearch(4);
console.log(a);

// BFS Node search:
//    o <-
//   / \
//  o<- o <-
// / \ / \
//
// get node,
// get right node?
// get left node?
// check right node?
// check left node?
//
