// INSTRUCTIONS

// Diff Two Arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.

// Note:  You can return the array with its elements in any order.


// SOLUTION

function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    // My code
    // We loop through arr1 and use includes() to check if arr2 contains any element from arr1.
    // If an element in arr1 is not in arr2, we push it to newArr.
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            newArr.push(arr1[i])
        }
    }
    // We loop through arr2 and use includes() to check if arr1 contains any element from arr2.
    // If an element of arr2 is not in arr1, we push it to newArr.
    for (let j = 0; j < arr2.length; j++) {
        if (!arr1.includes(arr2[j])) {
            newArr.push(arr2[j])
        }
    }

    // We return newArr which now contains the elements that are not present in both arrays.
    return newArr;
    // My code
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);