/* 
Your previous Plain Text content is preserved below:

// A magnitude pole in a list of numbers is a value v such that:
//    v is greater than or equal to each number on the left
//    v is less than or equal to each number on the right
//
//    Example: In the list [ 3, 1, 5, 9, 7 ], 5 is a magnitude pole
//
// Create a function that takes a list of numbers as input and returns
// the index of the first pole as the output.
//
*/

// const findPole = (arr) => arr.filter((num, i) => sum(arr[0,i]) <= arr[i] <= sum(arr[i,-1]) );

// [ 0, 3, 3, 1, 5, 9, 7 ]  least is front
// [ 3, 1, 5, 9, 7, 0 ]  least is back
// [ 3, 1, 5, 9, 7 ]  pole is in the middle


function findPole(arr) {
    let leftArr = [];
    let rightArr = [...arr];
    for (let i = 0; i < arr.length; i++) {
        console.log("left: " + leftArr);
        console.log("right: " + rightArr);
        console.log("index: " + i);
        console.log(leftArr.filter(x => x > arr[i]));
        if (leftArr.filter(x => x > arr[i]).length > 0) {
            leftArr.push(rightArr.shift());
            continue
        };
        console.log("filter right" + rightArr.filter(x => x < arr[i]));
        if (rightArr.length > 0 && rightArr.filter(x => x < arr[i]).length > 0) {
            leftArr.push(rightArr.shift());
            continue
        };
        console.log("return " + i);
        return i;
    }
    return -1;
}

const t = [9, 7, 5, 3, 1]
console.log(
    findPole(t)
);

// Problem: Square Spiral
// 
// 
// Timing (ET)
// 2:00 - 2:45 - interview questions
//             - a) box spiral
//             - b) misc
// 2:45 - 3:00 - interviewee questions 
//               a) what do you want to know about gopuff?
//

// inputs number of steps to take. 
// Knowns starting point 0,0. We know the path.
// output: end cords.

const step_left = (cords) => { cords[0]-- };
const step_right = (cords) => { cords[0]++ };
const step_up = (cords) => { cords[1]++ };
const step_down = (cords) => { cords[1]-- };

function square_spiral(step_count) {
    let current_cords = [0, 0];
    let turn_incrementor = 1;
    let current_turn_incrementor = 0;
    let current_step_incrementor = 0;
    let direction = ["right", "down", "left", "up"];
    let direction_index = 0;
    // Walk through steps in step count
    for (let step = 0; step < step_count; step++) {
        console.log(`step: ${step}`)
        console.log(`turn_incrementor: ${turn_incrementor}`)
        console.log(`direction: ${direction[direction_index]}`)

        if (direction[direction_index] === "right") {
            step_right(current_cords);
        } else if (direction[direction_index] === "down") {
            step_down(current_cords);
        } else if (direction[direction_index] === "left") {
            step_left(current_cords);
        } else if (direction[direction_index] === "up") {
            step_up(current_cords);
        };
        console.log(`cur cords ${current_cords}`)
        current_step_incrementor++
        // I'm a corner, I am at the corner change direction
        if (turn_incrementor === current_step_incrementor) {
            console.log('** at corner')
                // Handling when to increment
            if (turn_incrementor === current_turn_incrementor) {
                turn_incrementor++
            } else {
                current_turn_incrementor = turn_incrementor;
            };
            // reset current directions steps
            current_step_incrementor = 0;
            // change direction
            if (direction_index >= 3) {
                direction_index = 0;
            } else {
                direction_index++
            };
        }
    };
    return current_cords;
}

/*
pattern: current_turn_incrementor
  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6,

*/
console.log(
    square_spiral(16)
);



/*
 0 =>  0, 0 
 1 =>  1, 0
 2 =>  1,-1
 3 =>  0,-1
 4 => -1,-1
 5 => -1, 0
 6 => -1, 1
 7 =>  0, 1
16 => -2, -2

*/