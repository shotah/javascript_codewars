const ships = {
  battleship: {
    qty: 1,
    pattern: [1, 1, 1, 1],
  },
  cruiser: {
    qty: 2,
    pattern: [1, 1, 1],
  },
  destroyer: {
    qty: 3,
    pattern: [1, 1],
  },
  sub: {
    qty: 4,
    pattern: [1],
  },
};

function flipBoard(board) {
  let flippedArray = [[], [], [], [], [], [], [], [], [], []];
  board.forEach((row) =>
    row.forEach((item, index) => {
      flippedArray[index].push(item);
    })
  );
  return flippedArray;
}

function testRow(ship, board, i) {
  const result = board[i].join(",").includes(ships[ship].pattern.join(","));
  if (result === true) {
    board[i] = board[i]
      .join(",")
      .replace(ships[ship].pattern.join(","), 0)
      .split(",")
      .map(Number);
  }
  return result;
}

function findAndRemoveShips(board) {
  for (let ship in ships) {
    for (let _ in ["horizontal", "vertical"]) {
      for (let i = 0; i < board.length; i++) {
        shipFound = testRow(ship, board, i);
        if (shipFound) {
          ships[ship].qty--;
        }
      }
      board = flipBoard(board);
    }
  }
}

function validateBattlefield(board) {
  findAndRemoveShips(board);
  let shipQty = 0;
  Object.keys(ships).forEach((ship) => {
    shipQty += ships[ship].qty;
  });
  return shipQty === 0;
}

const { assert } = require("chai");
assert.strictEqual(
  validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]),
  true
);

// Missing Ship
console.log("Missing Ship");
assert.strictEqual(
  validateBattlefield([
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]),
  false
);

// Unwanted Ship
console.log("Unwanted Ship");
assert.strictEqual(
  validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ]),
  false
);
