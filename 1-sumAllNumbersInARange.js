// INSTRUCTIONS

// Sum All Numbers in a Range

// We'll pass you an array of two numbers. 
// Return the sum of those two numbers plus the sum of all the numbers between them. 
// The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.


// SOLUTION

function sumAll(arr) {
    // My code
    // We sort arr numerically, from smallest number to biggest.
    // We use slice() so as not to mutate the original array arr.
    // We use a compare function inside sort(), because its default is to sort by string Unicode point value.
    let sortArr = arr.slice().sort((a, b) => a - b);
    // We create sum to serve as an accumulator.
    let sum = 0;
    // We use a for loop to find the numbers between the first number and the second number in sortArr.
    // We then add all numberm, inluding the first number and the second number in sortArr, using sum as our accumulator.
    for (let i = sortArr[0]; i <= sortArr[1]; i++) {
        sum += i;
    }
    // We return sum which now contains the addition of all numbers from the for loop.
    return sum;
    // My code
}

sumAll([1, 4])
sumAll([4, 1])