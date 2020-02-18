// INSTRUCTIONS

// Sum All Odd Fibonacci Numbers

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1.
// Every additional number in the sequence is the sum of the two previous numbers.
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


// SOLUTIONS

function sumFibs(num) {
    // My code
    // Create an array that will contain our fibonacci numbers.
    // Initialize the array with the first two numbers of a fibonnaci sequence, so that we can use them
    // to create the next sequence of numbers, in our for loop.
    let fiboNum = [1, 1];
    // Create a variable sum to serve as our accumulator for when we add the odd fibonacci numbers together.
    let sum = 0;

    // Use a for loop to create the next sequence of numbers. It imitates the fact that Every additional number in 
    // the sequence is the sum of the two previous numbers.
    // Our stopping condition prevents an infinite loop from happening.
    for (let i = 1; fiboNum[i] <= num; i++) {
        fiboNum.push(fiboNum[i] + fiboNum[i - 1]);
    }
    // We iterate through our array of fibonacci numbers fiboNum, we check if a number is odd by using the modulo 
    // operator to check if it'll have a remainder.
    // We also check if the number is less than or equal (part of instructions given) to num.
    fiboNum.map(value => {
        if (value % 2 == 1 && value <= num) {
            // We then add all numbers that meet the above criteria.
            sum += value;
        }
    })
    // We return the value of sum which is now the addition of all odd Fibonacci numbers less than or equal to num.
    return sum;
    // My code
}

sumFibs(4); // should return 10.
sumFibs(75025); // should return 135721.
sumFibs(4000000); // should return 4613732.