'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
    const addLong = (A, B) => {
        const AL = A.length
        const BL = B.length
        const ML = Math.max(AL, BL)

        let carry = 0,
            sum = ''

        for (let i = 1; i <= ML; i++) {
            let a = +A.charAt(AL - i)
            let b = +B.charAt(BL - i)

            let t = carry + a + b
            carry = t / 10 | 0
            t %= 10

            sum = (i === ML && carry) ?
                carry * 10 + t + sum :
                t + sum
        }
        return sum
    }

    return ar.reduce((a, x) => {
        return a.length > 0 ? addLong(a.toString(), x.toString()) : x.toString()
    }, '')
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = aVeryBigSum(ar);

    ws.write(result + '\n');

    ws.end();
}