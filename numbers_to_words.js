const postfix ={
  3: "hundred",
  4: "thousand",
  6: "hundred",
  7: "million",
};

const tensTranslation = {
  1: "ten",
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninety",
};

const singlesTranslation = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen"
};


function number2words(n){
  console.log(n);
  let modificationFlag = false;
  let wordResultArr = [];
  if(n == 0){ return 'zero'};
  
  // works for numbers between 0 and 999999
  let arr = n.toString().split('');
  for(i = 0; i < arr.length; i++){
    numLength = arr.length - i;
    hundredths = numLength % 3;
    console.log(`hundredths: ${hundredths} - num: ${arr[i]} - i: ${i} - numLength: ${numLength}`)
    // escaping any zero entries.
    if (arr[i] != 0){
      // dealing with the last single digit in number
      if(hundredths != 2){
        let word = singlesTranslation[( arr[i] )]
        if(modificationFlag){
          let previousNum = arr[i-1];
          let previousWord = wordResultArr.pop();
          let multiNumber = [previousNum, arr[i]].join('')
          console.log(multiNumber);
          if(multiNumber in singlesTranslation){ 
            wordResultArr.push(singlesTranslation[( multiNumber )]);
          } else {
            wordResultArr.push([previousWord, word].join('-'));
          }
          modificationFlag = false;
        } else {
          wordResultArr.push(word);  
        }
      }
      if(hundredths == 2){
        wordResultArr.push(tensTranslation[( arr[i] )]);
        modificationFlag = true;
      }
    }
    if(numLength in postfix){
      if(wordResultArr.slice(-1) != 'thousand'){
        wordResultArr.push(postfix[numLength]);
        modificationFlag = false;
      }
    }
  }
  return wordResultArr.join(" ");
}




describe("Tests", () => {
  it("test", () => {
Test.assertEquals(number2words(0),"zero");
Test.assertEquals(number2words(1),"one");
Test.assertEquals(number2words(8),"eight");
Test.assertEquals(number2words(10),"ten");
Test.assertEquals(number2words(19),"nineteen");
Test.assertEquals(number2words(20),"twenty");
Test.assertEquals(number2words(22),"twenty-two");
Test.assertEquals(number2words(54),"fifty-four");
Test.assertEquals(number2words(80),"eighty");
Test.assertEquals(number2words(98),"ninety-eight");
Test.assertEquals(number2words(100),"one hundred");
Test.assertEquals(number2words(301),"three hundred one");
Test.assertEquals(number2words(793),"seven hundred ninety-three");
Test.assertEquals(number2words(800),"eight hundred");
Test.assertEquals(number2words(650),"six hundred fifty");
Test.assertEquals(number2words(1000),"one thousand");
Test.assertEquals(number2words(1003),"one thousand three");
Test.assertEquals(number2words(10000),"ten thousand");
Test.assertEquals(number2words(18000),"eighteen thousand");
Test.assertEquals(number2words(888887),"eight hundred eighty-eight thousand eight hundred eighty-seven");
  });
});
