function longestWord(sen) {
    // const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    // const wordMap = {};
    // let maxLen = 0;
    // let wordList = [];

    // wordArr.forEach(
    //     word => {
    //         wordMap[word] = word.length
    //         if(word.length > maxLen){maxLen = word.length}
    //     })    
    // for( let word in wordMap){ 
    //     if( wordMap[word] === maxLen ) {
    //         wordList += word
    //     }
    // }
    // return wordList;

    //////////////

    
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    const sorted = wordArr.sort((a,b) => b.length - a. length)
    const longestWordArr = sorted.filter(
        word => word.length === sorted[0].length
    )
    if(longestWordArr.length === 1) {
        return longestWordArr[0]
    }
    return longestWordArr
}

let output = '';
let sen = 'hello there, my name is brad majors. I am pleased to meet you.'
//let output = longestWord(sen);


function chunkArray(arr, len) {
    // let chunkedArray = [];
    // for(let i = 0; i < arr.length; i){
    //     let chunkarr = [];
    //     for(let r =0; r < len; r++) {
    //         chunkarr.push(arr[i])
    //         i++
    //     }
    //     chunkedArray.push(chunkarr)
    // }

    // return chunkedArray;

    ////////////

    // const chunkedArr = [];
    // let i = 0;
    // while(i < arr.length) {
    //     chunkedArr.push(arr.slice(i, i + len));
    //     i += len;
    // }
    // return chunkedArr;

    //////////////////

    const chunkedArr = [];
    arr.forEach(
        val => {
            const last = chunkedArr[chunkedArr.length - 1];
            if(!last || last.length === len) {
                chunkedArr.push([val]);
            }else{
                last.push(val);
            }
            // console.log(last);
        }
    )
    return chunkedArr;
}

let arr = [30, 2, 3, 4, 5, 6, 7]
let len = 3
//output = chunkArray(arr, len)

function flattenArray(arrays) {
    // let flatArr = [];
    // arrays.forEach(
    //     array => {
    //         return array.forEach(
    //             num => flatArr.push(num)
    //         )
    //     }
    // )
    // return flatArr;

    //////////////////

    // return arrays.reduce((a, b) => a.concat(b))

    //////////////////

    // return [].concat.apply([], arrays)

    //////////////////

    return [].concat(...arrays);
}

let arrays = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]
arrays = [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]
// output = flattenArray(arrays)


function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2)
}

function formatStr(str) {
    return str       
        .replace(/[^0-9a-z]/gi, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}

const str1 = 'hello'
const str2 = 'elloh!!!'
// const str2 = 'bad'
// output = isAnagram(str1, str2)

function letterChanges(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

    let newStr = str.toLowerCase().replace(/[a-z]/gi, 
            char => {
                if(char === 'z') {
                    return 'a';
                } else {
                    return String.fromCharCode(char.charCodeAt() +1);
                }
            }
        )
    newStr = newStr.replace(/a|e|i|o|u/gi, 
        vowel => vowel.toUpperCase()
    )

    return newStr
}

str = 'hello therez'
output = letterChanges(str)


console.log(output);