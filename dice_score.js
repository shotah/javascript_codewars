function diceCount( dice ) {
  let count = {};
  for(let i = 0; i < dice.length; i++) {
    count[dice[i]] ? count[dice[i]]++ : count[dice[i]] = 1
  }
  console.log(count);
  return count;
}

function score( dice ) {
  let countedDice = diceCount(dice);
  let score = 0;

  for(let die in countedDice) {
    console.log(countedDice[die]);
    if(countedDice[die] < 3){
      if(die === '1') { score += countedDice[die] * 100 };
      if(die === '5') { score += countedDice[die] * 50 };
    } 
    if(countedDice[die] > 3){
      if(die === '1') { score += (countedDice[die] -3) * 100 };
      if(die === '5') { score += (countedDice[die] -3) * 50 };
    }
    if(countedDice[die] >= 3){
      if(die === '1') { score += 1000 };
      if(die === '6') { score += 600 };
      if(die === '5') { score += 500 };
      if(die === '4') { score += 400 };
      if(die === '3') { score += 300 };
      if(die === '2') { score += 200 };
    }
  };
  
  console.log(score);
  return score;
}

describe( "Scorer Function", function() {
  it( "should value this as worthless", function() {
    Test.expect( score( [2, 3, 4, 6, 2] ) == 0,   "Should be 0 :-(" );
  });
  
  it( "should value this triplet correctly", function() {
    Test.expect( score( [4, 4, 4, 3, 3] ) == 400, "Should be 400" );
  });
  
  it( "should value this mixed set correctly", function() {
    Test.expect( score( [2, 4, 4, 5, 4] ) == 450, "Should be 450" );
  });
});