// INSTRUCTIONS

// Search and Replace

// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. 
// For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"


// SOLUTION

function myReplace(str, before, after) {
    // My code
    // We split after into an array of its letters.
    // I did this because strings are immutable (cannot change), and we need a way to change the first letter 
    // of after if needed.
    // Doing that in an array, and using the join() method to join the letters back together was what I could think of.
    let splitAfter = after.split('');
    // We check if the first letter of before is in uppercase, and if it is, we change the first letter of after in 
    // our splitAfter array to uppercase.
    if (before[0] == before[0].toUpperCase()) {
        splitAfter[0] = splitAfter[0].toUpperCase();
        // We join the letters in our array together.
        let joinedSplit = splitAfter.join('');
        // We replace before with our version (joinedSplit) of the after with its first letter now in uppercase.
        return str.replace(before, joinedSplit);
    }
    // If the first letter of before is in lowercase, we just replace it with after.
    // The slice() method is just to copy str, so we don't change its value (one of the rules of functional
    // programming, I think.)
    return str.slice().replace(before, after);
    // My code
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");