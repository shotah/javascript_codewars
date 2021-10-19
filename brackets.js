// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

//Given a string containing brackets determine if the input string is valid.


let inputSting = '[([]{()})]';

let brackets = {
  'open': '\\[\\{\\(',
  'closed': '\\]\\}\\)',
  'square': {
    'open': '\\[',
    'closed': '\\]'
  },
  'curly': {
    'open': '{',
    'closed': '}'
  },
  'pern': {
    'open': '\\(',
    'closed': '\\)'
  }
};

function getMatchIndex(char, bracketSet){
  try { 
    matchIndex = bracketSet.match('\\'+char)['index'] 
  } catch {
    matchIndex = undefined;
  };
  return matchIndex;
}

function bracketValidation(input) {
  // TODO: Move through string to validate match order aka ( and then ).
  // [(){()}]
  // [((){()})]
  // ([((){()}))]
  let bracketsStack = [];
  let arr = input.split('');
  let charOpenMatchIndex = null;
  let wasSuccessful = true;

  arr.forEach(
    char => {
      charOpenMatchIndex = getMatchIndex(char, brackets['open'])
      if (charOpenMatchIndex){ bracketsStack.push(charOpenMatchIndex) }; 

      closeMatchStringIndex = getMatchIndex(char, brackets['closed'])
      if(closeMatchStringIndex){
        let lastBracketIndex = bracketsStack.pop()
        console.log(closeMatchStringIndex, lastBracketIndex)
        if (closeMatchStringIndex !== lastBracketIndex) { wasSuccessful = false };
      }
    }
  )
  return bracketsStack.length === 0 && wasSuccessful;
  
  // for(let bracket in brackets) {
  //   let hasClosingBracket;
  //   let openMatchString = new RegExp(brackets[bracket]['open'], 'g');
  //   console.log(input.match(openMatchString));
  //   let hasOpenBracket = input.match(openMatchString).length !== 0;
  //   if ( hasOpenBracket ) {
  //     let closeMatchString = new RegExp(brackets[bracket]['closed'], 'g');
  //     hasClosingBracket = input.match(closeMatchString).length !== 0;
  //   }
  //   if (!hasClosingBracket) {
  //     return hasClosingBracket;
  //   }
  // }
  // return true
};


console.log(bracketValidation(inputSting));

