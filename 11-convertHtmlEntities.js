// INSTRUCTIONS

// Convert HTML Entities

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
// in a string to their corresponding HTML entities.


// SOLUTION

function convertHTML(str) {
    // &colon;&rpar;
    // My code
    // We split str into an array containing its individual characters, and use a for loop to iterate through them.
    let split = str.split('')
    for (let i = 0; i < split.length; i++) {
        // We use if statements to check for the presence of the characters,
        // and change them to their corresponding Html entities.
        if (split[i] == '&') {
            split[i] = '&amp;';
        }
        if (split[i] == '<') {
            split[i] = '&lt;';
        }
        if (split[i] == '>') {
            split[i] = '&gt;';
        }
        if (split[i] == '"') {
            split[i] = '&quot;';
        }
        if (split[i] == '\'') {
            split[i] = '&apos;';
        }
    }
    // We join back the split array with the present characters changed to their corresponding Html entities.
    return split.join('');
    // My code
}

convertHTML("Dolce & Gabbana"); //  should return Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") // should return Hamburgers &lt; Pizza &lt; Tacos.