function reverseString(str){
    // return str
    //     .split("")
    //     .reverse()
    //     .join("")

    //////////////////

    // let reverseStr = "";
    // for(let i = str.length -1; i >= 0 ; i--){
    //     reverseStr = reverseStr + str[i]
    // }
    // return reverseStr;

    //////////////////

    // let reverseStr = "";
    // for(let i = 0; i <= str.length -1 ; i++){
    //     reverseStr = str[i] + reverseStr
    // }
    // return reverseStr;

    ///////////////////

    // let revString = '';
    // for(let char of str) {revString = char +revString; }
    // return revString

    /////////////////

    // let revString = '';
    // str.split('').forEach(char => revString = char + revString );
    // return revString

    /////////////////

    return str.split('').reduce((revString, char) => char + revString );
};

let str = 'hello'
// console.log(reverseString(str));

function isPalindrome(str){
    const revString = str.split('').reduce((revString, char) => char + revString);
    return str === revString;
}

str = 'hello'
str = 'racecar'
//console.log(isPalindrome(str));


function reverseInt(int){
    let revString = int
        .toString()
        .split('')
        .reverse()
        .join('')

    // return Number(revString);
    // return parseInt(revString);
    console.log(Math.sign(int))
    return parseInt(revString) * Math.sign(int);
}


let int = -1234
// let reversedInt = reverseInt(int)
// console.log(typeof reversedInt);
// console.log(reversedInt);


function capitalizeLetters(str) {
    // const strArr = str.toLowerCase().split(' ');
    // for(let i = 0; i < strArr.length; i++) {
    //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    // }

    ///////////

    // return str.split(' ').map(
    //     word => {
    //         return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
    // }).join(' ')

    ////////////

    return str.replace(/\b[a-z]/gi, (char) => char.toUpperCase());
}

str = 'I love javaScript!';
// console.log(capitalizeLetters(str));

function maxCharacter(str) {
    // str = str.replace(/\s+/g, '').toLowerCase();
    // console.log(str)
    // let charArray = str.split('');
    // let letterWithHighestCount = '';
    // let highestCount = 0;
    // charArray.forEach(
    //     letter => {
    //         console.log(letter)
    //         let count = charArray.filter(char => char === letter).length
    //         console.log(count)
    //         if( count > highestCount){
    //             highestCount = count
    //             letterWithHighestCount = letter
    //         }
    //         console.log(letterWithHighestCount)
    //     }
    // )
    // return letterWithHighestCount

    ////////////////

    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(
        char => {
            if(charMap[char]) {
                charMap[char]++;
            } else{
                charMap[char] = 1;
            }
        }
    )
    console.log(charMap);
    
    for(let char in charMap) {
        // debugger;
        if (charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

str = 'I love javaScript!';
str = 'javascript'
// console.log(maxCharacter(str));

function fizzBuzz(){
    [...Array(100).keys()].map(
        num => {
            let output = '';
            if(num % 3 === 0){
                output = 'Fizz';
            }
            if(num % 5 === 0){
                output += 'Buzz';
            }
            if(output.length === 0){
                output = num;
            }
            console.log(output)
        }
    )
}

console.log(fizzBuzz())