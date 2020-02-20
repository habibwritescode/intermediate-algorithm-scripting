// INSTRUCTIONS

// Steamroller

// Flatten a nested array. 
// You must account for varying levels of nesting.
// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.


// SOLUTION

// This was difficult. I was able to hardcode it (below), but I knew there had to be a more efficient way.
// I had an idea that recursion would work, but couldn't figure out a way to write the code (need to 
// learn more about recursion).

// This is a nice and simple solution I copied that uses recursion. 
// https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-steamroller/16079

function steamrollArray(arr) {
    // Recursion is the breakfast of champions. ― Don Stewart
    var steamrolled = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            var subArray = steamrollArray(arr[i]);
            steamrolled = steamrolled.concat(subArray);
        } else {
            steamrolled.push(arr[i]);
        }
    }
    return steamrolled;
}

// Test here
steamrollArray([[["a"]], [["b"]]]) // should return ["a", "b"].
steamrollArray([1, {}, [3, [[4]]]]) // should return [1, {}, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) // should return [1, 3, 4]. 


// This is the hardcoded solution i wrote. :(
function steamrollArray(arr) {
    // I'm a steamroller, baby//
    // My code
    let newArr = [];
    let newArr2 = [];
    let newArr3 = [];
    // 1
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr.push(...arr[i])
        }
        if (!Array.isArray(arr[i])) {
            newArr.push(arr[i])
        }
    }
    // 2
    for (let i = 0; i < newArr.length; i++) {
        if (Array.isArray(newArr[i])) {
            newArr2.push(...newArr[i])
        }
        if (!Array.isArray(newArr[i])) {
            newArr2.push(newArr[i])
        }
    }
    // 3
    for (let i = 0; i < newArr2.length; i++) {
        if (Array.isArray(newArr2[i])) {
            newArr3.push(...newArr2[i])
        }
        if (!Array.isArray(newArr2[i])) {
            newArr3.push(newArr2[i])
        }
    }
    return newArr3
    // My code
}