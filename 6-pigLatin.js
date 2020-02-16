// INSTRUCTIONS

// Pig Latin

// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word,
//  moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// If a word does not contain a vowel, just add "ay" to the end.
// Input strings are guaranteed to be English words in all lowercase.


// SOLUTION

function translatePigLatin(str) {
    // My code
    // We write a regex to search for the occurence of a consonant word or cluster at the start of str.
    let consonantRgx = /^[^aeiou]+/;
    // We check if a consonant word or cluster is found. The .test() method returns a boolean true or false.
    if (consonantRgx.test(str)) {
        // We use the match() method to assign the consonant word or cluster found at the start of str to a variable.
        let consonant = str.match(consonantRgx);
        // We use the replace() method to replace the matched consonant word or cluster with an empty string.
        // Example: 'leaped' becomes 'eaped', and 'them' becomes 'em'.
        let newStr = str.replace(consonantRgx, '');
        // We return newStr concatenated with the removed consonant word or cluster and 'ay'.
        // Example: 'eaped' now becomes 'eaped' += 'l' + 'ay'.
        return newStr += consonant + 'ay';
    }
    // If str doesn't start with a consonant word or cluster , we just concatenate str with 'way'.
    return str + 'way';
    // My code
}

translatePigLatin("consonant"); // Should return 'onsonantcay'
translatePigLatin("algorithm"); // Should return 'algorithmway'
translatePigLatin("rhythm") // Should return 'rhythmay'