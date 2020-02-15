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
    let newStr = str.slice()
    if (/^[aeiou]/.test(newStr)) {
        newStr += 'way'
    } else if (/^[^aeiou]+/g.test(newStr)) {
        let me = newStr.match(/^[^aeiou]+/g)
        console.log(me)
        let newme = newStr.replace(/^[^aeiou]+/g, '')
        newme += me + 'ay'
        console.log(newme)
        return newme
    }
    // My code
    return newStr;
}

// console.log(/^[^aeiou]+/g.test('consonant'))
// console.log('cgonsonant'.match(/^[^aeiou]+/))

translatePigLatin("consonant");
translatePigLatin("algorithm");
translatePigLatin("rhythm")