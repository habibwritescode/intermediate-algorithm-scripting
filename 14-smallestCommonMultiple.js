// INSTRUCTIONS

// Smallest Common Multiple

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
// as well as by all sequential numbers in the range between these parameters. 
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly 
// divisible by all numbers between 1 and 3. The answer here would be 6.


// SOLUTION

// I couldn't solve this. 
// Copied the solution. (https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-smallest-common-multiple/16075)

function smallestCommons(arr) {
    // Euclidean algorithm for the greatest common divisor.
    // ref: https://en.wikipedia.org/wiki/Euclidean_algorithm
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    // Least Common Multiple for two numbers based on GCD
    const lcm = (a, b) => (a * b) / gcd(a, b);

    // range
    let [min, max] = arr.sort((a, b) => a - b);
    let currentLCM = min;

    while (min < max) {
        currentLCM = lcm(currentLCM, ++min);
    }

    return currentLCM;
}

// test here
smallestCommons([1, 5]); // should return 60.
smallestCommons([5, 1]) // should return 60.
smallestCommons([2, 10]) // should return 2520.

// Code Explanation
// Extract minimum and maximum from provided arr by sorting and grabbing the first and last values.
// Initialise smallestCommon with the LCM of first two numbers.
// Loop through range computing LCM of current LCM and next number in range lcm(a, b, c) = lcm(lcm(a, b), c).