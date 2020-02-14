// INSTRUCTIONS

// Wherefore art thou

// Make a function that looks through an array of objects (first argument) and returns an array of all objects
// that have matching name and value pairs (second argument). Each name and value pair of the source object has 
// to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
// { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the 
// third object from the array (the first argument), because it contains the name and its value, that was passed on 
// as the second argument.


// SOLUTION

// Tried and tried and tried, but I couldn't write a workking solution for this.
// I had to check the solution.
// I tried my best to explain the solution with my own comments.

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Do not change code above this line. (by freecodecamp)

    // Object.keys(obj) returns an array of an object's keys/property names.
    // So, here, we check for the keys within the source (2nd argument) object.
    // We then assign the returned array of keys to the sourceKeys variable.
    var sourceKeys = Object.keys(source);
    // We then run a function for every item (objects) in the collection array.
    collection.forEach(obj => {
        // This function uses the every() method to check if an object (obj) from collection (first argument) that
        // has the same key (sourceKeys) as source (second argument) also has the same value as source.
        if (sourceKeys.every(key => { return obj[key] === source[key]; })) {
            // When this evaluates to true, we push the object to our array arr.
            arr.push(obj);
        }
    });
    // We return arr that now contains all objects from collection that have matching key and value pairs of 
    // the source object.
    // Do not change code below this line. (by freecodecamp)
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" });