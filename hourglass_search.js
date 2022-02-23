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
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
// takes in 6 arrays of 6.
function hourglassSum(arr) {
    // defining max length and depth
    const maxLength = arr[0].length;
    const maxDepth = arr.length;
    // define current length and depth
    let currLength = 0;
    let currDepth = 0;
    // define returning results to get the max from
    const results = [];

    // Defining the pattern to look for.
    const baseHourglassPattern = [
        [0, 1, 2],
        [1],
        [0, 1, 2]
    ]
    let hourglassPattern = [...baseHourglassPattern];

    // return the value of the pattern
    const patternCheckValue = (pattern, arrays, startRow) => {
        const val = pattern.reduce((a, x, i) => {
            a += x.reduce((c, y) => {
                // needs current depth to validate next set of rows. 
                return c += arrays[i + startRow][y]
            }, 0)
            return a;
        }, 0)
        return val;
    }

    while (currDepth + 3 <= maxDepth) {
        while (currLength + 3 <= maxLength) {
            results.push(patternCheckValue(hourglassPattern, arr, currDepth));
            hourglassPattern.forEach((a, i) => {
                hourglassPattern[i] = a.map((x) => ++x)
            });
            // Increment length to check next set
            ++currLength;
        }
        // reset length to check next set of rows
        currLength = 0;
        // reset pattern to start back at the left hand side.
        hourglassPattern = [...baseHourglassPattern];
        ++currDepth;
    }
    return Math.max(...results);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    const result = hourglassSum(arr);
    ws.write(result + '\n');
    ws.end();
}