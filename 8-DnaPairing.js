// INSTRUCTIONS

// DNA Pairing

// The DNA strand is missing the pairing element. 
// Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


// SOLUTION

function pairElement(str) {
    // My code
    // We initialize an empty array where we can store our sub arrays.
    let outerArr = [];
    // We loop through str, and we use an if statement to check for the current character.
    // We then push the current character with its pair into a sub array innerArr.
    for (let i = 0; i < str.length; i++) {
        let innerArr = [];
        if (str[i] == 'G') {
            innerArr.push(str[i], 'C');
        }
        if (str[i] == 'C') {
            innerArr.push(str[i], 'G');
        }
        if (str[i] == 'T') {
            innerArr.push(str[i], 'A');
        }
        if (str[i] == 'A') {
            innerArr.push(str[i], 'T');
        }
        // We push the sub array innerArr into an encapsulating array outerArr.
        outerArr.push(innerArr);
    }
    // We return our encapsulating array which now contains our sub arrays of characters and their pairs.
    return outerArr;
    // My code
}

pairElement("GCG"); // should return [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
pairElement("ATCGA") // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].