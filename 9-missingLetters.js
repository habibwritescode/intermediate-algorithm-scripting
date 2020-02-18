// INSTRUCTIONS

// Missing letters

// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.


// SOLUTION

// Tried and tried, but I couldn't solve this with my current knowledge :(
// Had to check the solutions page, and this was the best one that I could understand.
// I'm going to try explain with my own comments.

function fearNotLetter(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let len = str.length;
    // We initialize start to be equal to the index of the first letter of str, but  within the alphabet variable.
    // Example: if str is 'efghj', start = alphabet.indexOf(e). Therefore start = 4.
    let start = alphabet.indexOf(str[0]);

    // We loop through alphabet starting at start and ending at start + len (i.e. index of the 
    // last letter of str in alphabet).
    for (let i = start; i <= start + len; i++) {
        // We use the includes() method to check if str contains the letters being looped through.
        // If false, we return the letter.
        if (!str.includes(alphabet[i])) {
            return alphabet[i];
        }
    }
    // // If all letters are present in the range, return undefined.
    return undefined;
}

fearNotLetter("abce") // should return "d".
fearNotLetter("stvwx") // should return "u".