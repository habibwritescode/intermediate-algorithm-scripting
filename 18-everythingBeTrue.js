// INSTRUCTIONS

// Everything Be True

// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. 
// The predicate pre will be an object property and you need to return true if its value is truthy. 
// Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// Remember, you can access object properties through either dot notation or [] notation.


// SOLUTION

function truthCheck(collection, pre) {
    // Is everyone being true?
    // My code
    // Loop through all the objects in the array (collection).
    for (let i = 0; i < collection.length; i++) {
        // Use the Boolean() function to check if checking for the the value of the second argument (pre) in all the 
        // objects in collection evaluates to false.
        if (Boolean(collection[i][pre]) == false) {
            return false
        }
    }
    // Return true if there is no object that returns false.
    return true
    // My code
}

// Test here
truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" },
{ "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex") // should return true.

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" },
{ "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex") // should return false.

truthCheck([{ "single": "double" }, { "single": undefined }], "single") // should return false.