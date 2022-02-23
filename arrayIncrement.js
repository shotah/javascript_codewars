// const baseHourglassPattern = [
//     [0, 1, 2],
//     [1],
//     [0, 1, 2]
// ]

// const hourglassPattern = [...baseHourglassPattern];

// hourglassPattern.forEach((a, i) => {
//     hourglassPattern[i] = a.map((x) => ++x)
// });


// console.log(hourglassPattern, baseHourglassPattern);
// n: 2
// queries: [ [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ]
function dynamicArray(n, queries) {
    let lastAnswer;
    const arrays = [...Array(n)].map((_) => Array());
    console.log(arrays.toString());
    let results = [];

    queries.map((query) => {
        let [queryType, x, y] = query;
        let idx = ((x ^ lastAnswer) % n);
        if (queryType === 1) {
            arrays[idx] = y;
        } else {
            console.log(y);
            console.log(arrays[idx]);
            lastAnswer = arrays[idx][y];
            console.log(lastAnswer);
        }
    });
}

n = 2;
queries = '1 0 5'
dynamicArray(n, queries);
// let [qrytype, x, y] = queries.split(' ');
// console.log(x)