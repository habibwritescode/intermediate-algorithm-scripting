// INSTRUCTIONS

// Seek and Destroy

// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.


// SOLUTIONS

// Wrote this, but it wasn't passing some tests.

function destroyer(arr) {
    // Remove all the values
    // My code
    // We copy arr into a new variable so that it isn't mutated.
    let newArr = arr.slice();
    // We use a nested for loop to check if an element present in newArr has the same value as any 
    // of the arguments after the first argument, arr.
    // We then use the splice() method to remove the element(s).
    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < newArr.length; j++) {
            if (newArr[j] == arguments[i]) {
                newArr.splice(j, 1)
            }
        }
    }
    // We return newArr which now contains elements that are left after we've removed the required elements.
    return newArr;
    // My code
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([3, 3], 3)

// I noticed that the function didn't remove elements that it should when they occured next to each other.
// E.g destroyer([3, 3], 3); returned [3] instead of [].
// And destroyer([1, 4, 4, 2, 3, 1,], 2, 3, 4); returned [1,4,1] intead of [1,1]

// After some time of being unable to figure out why, I did a google search to check if there is an explanation.

// Found out that, as the items are removed from the array the index still increments, so it skips the next 
// element in the array because it would have occupied the index the previous removed value was on.
// So when an element that matches our criteria occurs next to each other, the second element is skipped.

// A solution is to modify the above code to decrement the index variable so the for loop starts the search 
// again from the last index it removed an element from, so it does not skip the next item in the array.

function destroyer(arr) {
    // Remove all the values
    // My code
    let newArr = arr.slice();
    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < newArr.length; j++) {
            if (newArr[j] == arguments[i]) {
                newArr.splice(j, 1)
                i--; // The problem!
            }
        }
    }
    return newArr;
    // My code
}
destroyer([1, 4, 4, 2, 3, 1,], 2, 3, 4);
destroyer([3, 3], 3)


// So close!