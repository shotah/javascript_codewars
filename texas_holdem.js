const checkFlush = (cards) => {
    console.log(cards)
    const result = cards.reduce((acc, card) => {
        acc[card.split('')[1]] = acc[card.split('')[1]] ? acc[card.split('')[1]] + 1 : 1
        return acc;
    }, []);
    const test = result.sort((a, b) => a[1] - b[1])
    console.log(test)
    return result // result.sort((a, b) => a.value - b.value);
};

function hand(holeCards, communityCards) {
    checkFlush([...holeCards, ...communityCards])
    return { type: "TODO", ranks: [] };
}

const { assert } = require("chai")

assert.strictEqual({ type: 'flush', ranks: ['Q', 'J', '10', '5', '3'] }, hand(['A♠', 'K♦'], ['J♥', '5♥', '10♥', 'Q♥', '3♥']));
assert.strictEqual({ type: 'straight', ranks: ['K', 'Q', 'J', '10', '9'] }, hand(['Q♠', '2♦'], ['J♣', '10♥', '9♥', 'K♥', '3♦']));
assert.strictEqual({ type: 'straight-flush', ranks: ['J', '10', '9', '8', '7'] }, hand(['8♠', '6♠'], ['7♠', '5♠', '9♠', 'J♠', '10♠']));


assert.strictEqual({ type: 'pair', ranks: ['Q', 'K', 'J', '9'] }, hand(['K♠', 'Q♦'], ['J♣', 'Q♥', '9♥', '2♥', '3♦']));
assert.strictEqual({ type: 'two pair', ranks: ['K', 'J', '9'] }, hand(['K♠', 'J♦'], ['J♣', 'K♥', '9♥', '2♥', '3♦']));
assert.strictEqual({ type: 'three-of-a-kind', ranks: ['Q', 'J', '9'] }, hand(['4♠', '9♦'], ['J♣', 'Q♥', 'Q♠', '2♥', 'Q♦']));
assert.strictEqual({ type: 'full house', ranks: ['A', 'K'] }, hand(['A♠', 'A♦'], ['K♣', 'K♥', 'A♥', 'Q♥', '3♦']));
assert.strictEqual({ type: 'four-of-a-kind', ranks: ['2', '3'] }, hand(['2♠', '3♦'], ['2♣', '2♥', '3♠', '3♥', '2♦']));


assert.strictEqual({ type: 'nothing', ranks: ['A', 'K', 'Q', 'J', '9'] }, hand(['K♠', 'A♦'], ['J♣', 'Q♥', '9♥', '2♥', '3♦']));