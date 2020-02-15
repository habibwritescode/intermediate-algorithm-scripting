// INSTRUCTIONS

// Spinal Tap Case

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


// SOLUTION

function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    //My code
    return str
    // We search for all capitalised characters using a regex pattern, and insert a space before them.
        .replace(/([A-Z])/g, ' $1')
        // We split the string into an array of words, with anything that is not an alphanumeric (A-Za-z0-9_), 
        // but include an underscore (_), to pass one of the tests.
        .split(/\W|_/)
        // We use the filter() method to return elements from the split array that is not a space.
        .filter(obj => obj !== '')
        // We join all words from the array with a dash (-), into a single string.
        .join('-')
        // We turn the string into all lowercase letters.
        .toLowerCase()
    //My code
}

spinalCase("AllThe-small Things")
spinalCase(' This Is Spinal Tap');
spinalCase("The_Andy_Griffith_Show")
spinalCase("thisIsSpinalTap")