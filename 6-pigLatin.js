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
    let consonantRgx = /^[^aeiou]+/;
    if (consonantRgx.test(str)) {
        let consonant = str.match(consonantRgx);
        let newStr = str.replace(consonantRgx, '');
        return newStr += consonant + 'ay';
    }
    return str + 'way';
    // My code
    return newStr;
}

translatePigLatin("consonant"); // Should return 'onsonantcay'
translatePigLatin("algorithm"); // Should return 'algorithmway'
translatePigLatin("rhythm") // Should return 'rhythmay'