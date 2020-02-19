// INSTRUCTIONS

// Drop it

// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until 
// the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as 
// an empty array.


// SOLUTION

function dropElements(arr, func) {
    // Drop them elements.
    // My code
    // Loop through arr (the first argument).
    for (let i = 0; i < arr.length; i++) {
        // Check if an element passed to func returns false.
        if (!func(arr[i])) {
            // if false, we remove that element with the splice() method.
            arr.splice(i, 1);
            // Every time a removal is done, the length of the array is reduced and also the index of the elements change.
            // In order to prevent the for loop from skipping the next element in the array we decrement i every time 
            // a removal is done. 
            // The for loop can then start the search again from the last index it removed an element from. 
            i--;
        } else {
            // If an element passed into func makes it return true, we return the rest of the array starting from that element.
            return arr.slice(i);
        }
    }
    // in a situation where all elements passed into func return false, they have all been removed and 
    // there is now an empty arr, we return arr.
    return arr;
    // My code
}

// Test
dropElements([0, 1, 0, 1], function (n) { return n === 1; }) // should return [1, 0, 1].
dropElements([1, 2, 3], function (n) { return n > 0; }) // should return [1, 2, 3].
dropElements([1, 2, 3, 4], function (n) { return n > 5; }) // should return [].