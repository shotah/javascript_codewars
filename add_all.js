let str = '';
let output = '';

// Solution 1: ES5 arguments & for loop
// function addAll() {
//     var args = Array.prototype.slice.call(arguments);
//     var total = 0;
//     for (let i = 0; i < args.length; i++) {
//       total += args[i];
//     }
//     return total;
// }

function addAll(...nums) {
    return nums.reduce((accumulator, currentValue) => accumulator + currentValue);
}

//output = addAll(2,5,6,7)

const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }


function sumAllPrimes(num) {
    // return [...Array(num).keys()].reduce(
    //     (acc, cur) => {
    //         if (isPrime(cur)){
    //             return acc + cur
    //         } else {
    //             return acc
    //         }
    //     }
    // )

    //////////////////
    function checkForPrime(i) {
        for(let j = 2; j < i; j++) {
            if(i % j === 0) {
                return false;
            }
        }
        return true;
    }

    let total = 0;
    for(let i = 2; i <= num; i++) {
        if(checkForPrime(i)) {
            total += i
        }
    }
    return total
}

// output = sumAllPrimes(10)
// console.log(isPrime(9))
// console.log(isPrime(7))

// function seekAndDestory(...arr) {
//     let targetArr = arr.shift()
//     return targetArr.filter( cur => !arr.includes(cur) )
// }

// function seekAndDestory(arr) {
//     const args = Array.from(arguments);
    
//     function filterArr(arr) {
//         return args.indexOf(arr) === -1
//     }

//     return arr.filter(filterArr);
// }

function seekAndDestory(arr, ...rest) {
    return arr.filter(val => !rest.includes(val));
}

// output = seekAndDestory([2, 3, 4 , 6, 6, 'hello'], 2, 6)


// function sortByHeight(arr) {
//     const filteredPplArry = arr.filter(cur => cur > 0).sort()
//     const sortedArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > 0) {
//             sortedArr.push(filteredPplArry.shift());
//         } else {
//             sortedArr.push(arr[i]);
//         }
//     }
//     return sortedArr
// }

function sortByHeight(a) {
    const arr1 = [];
    const arr2 = [];
    a.forEach(
        (val, i) => val === -1 ? arr1.push(i) : arr2.push(val)
    );
    const sortArr = arr2.sort((a,b) => a-b);
    arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1))
    return sortArr
}

const a = [-1, 150, 190, 170, -1, -1, 160, 180]
// output = sortByHeight(a);


// function missingLetters(str) {
//     let nextChar = '';
//     let missingLetters = [];
//     str.split('').forEach(
//         char => {
//             if (nextChar && char !== nextChar){
//                 missingLetters.push( String.fromCharCode(char.charCodeAt() -1))
//             }
//             nextChar = String.fromCharCode(char.charCodeAt() +1);
//         }
//     )
//     return missingLetters
// }

function missingLetters(str) {
    let compare = str.charCodeAt(0);
    let missing;

    str.split('').map(
        (char, i) => {
            if(str.charCodeAt(i) == compare) {
                ++compare;
            } else {
                missing = String.fromCharCode(compare);
            }
        }
    )
    return missing;
}

str = "abce"
str = "abcdefghjklmno"
// output = missingLetters(str);

function evenOddSums(a) {
    let evenSum = 0;
    let oddSum = 0;

    a.forEach(val => val % 2 === 0 ? evenSum += val : oddSum += val)
    
    return [evenSum, oddSum];
}

let arr = [50, 60, 60, 45, 71]
output = evenOddSums(arr)

console.log(output)



