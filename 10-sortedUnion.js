// INSTRUCTIONS

// Sorted Union

// Write a function that takes two or more arrays and returns a new array of unique values in the order of the
// original provided arrays.
// In other words, all values present from all arrays should be included in their original order, 
// but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in 
// numerical order.
// Check the assertion tests for examples.


// SOLUTION

function uniteUnique(arr) {
    // My code
    // We initialize an empty array to store our unique values.
    let uniqueArr = [];
    // Using the arguments object, we loop through the number of arrays passed to our function.
    for (let i = 0; i < arguments.length; i++) {
        // We then loop through each array's elements.
        for (let j = 0; j < arguments[i].length; j++) {
            // If a value is not present in our empty (first iteration) array uniqueArr we push it in.
            if (!uniqueArr.includes(arguments[i][j])) {
                uniqueArr.push(arguments[i][j]);
            }
        }
    }
    // We return uniqueArr which now contains all unique values from the array arguments passed to our function.
    return uniqueArr;
    // My code
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // should return [1, 3, 2, 5, 4].

uniteUnique([1, 2, 3], [5, 2, 1]); // should return [1, 2, 3, 5].