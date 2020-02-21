// INSTRUCTIONS

// Binary Agents

// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.


// SOLUTION

function binaryAgent(str) {
    // My code
    // We split the string so we can iterate through each binary grouping.
    let splitStr = str.split(' ');
    // We create an array variabale to store the decimal totals of each binary grouping.
    let arrOfDecimals = [];
    // We use a for loop to iterate through each grouping of binary numbers.
    for (let i = 0; i < splitStr.length; i++) {
        // We create a variable to store the decimal totals of each binary group.
        let totalOfEachGroup = 0;
        // This loop iterates through each individual binary number in a group.
        for (let j = 0; j < splitStr[i].length; j++) {
            // To convert a binary number to decimal, every digit in a binary number is raised to the powers of 2, starting from the 
            // rightmost with 2^0 (2 raise to power 0).
            // Then we add the decimals of all the 1's, but not the 0's.
            if (splitStr[i][j] == 1) {
                let binaryToDecimal = Math.pow(2, splitStr[i].length - 1 - j);
                totalOfEachGroup += binaryToDecimal;
            }
        }
        // We then push the totals of the decimals of binary number 1's in each group.
        arrOfDecimals.push(totalOfEachGroup);
    }
    // We use the String.fromCharCode() method to convert the decimal numbers to a string.
    // we unpacked the arrOfDecimals array with the spread operator.
    let translated = String.fromCharCode(...arrOfDecimals);
    return translated;
    // My code
}

// Test here
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")
// should return "Aren't bonfires fun!?" 


binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")
 // should return "I love FreeCodeCamp!"