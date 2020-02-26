// INSTRUCTIONS

// Make a Person

// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

// Run the tests to see the expected output for each method. 
// The methods that take an argument must accept only one argument and it has to be a string. 
// These methods must be the only available means of interacting with the object.


// SOLUTION

// This looked so easy, but it took such a long time to solve. And this is after numerous looks at the hints page.

var Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly
    // My code
    let fullName = firstAndLast;
    
    this.getFullName = function () {
        return fullName;
    };
    this.getFirstName = function () {
        return fullName.split(' ')[0];
    };
    this.getLastName = function () {
        return fullName.split(' ')[1];
    };
    this.setFirstName = function (first) {
        fullName = first + ' ' + fullName.split(" ")[1];
    };
    this.setLastName = function (last) {
        fullName = fullName.split(" ")[0] + " " + last;
    };
    this.setFullName = function (firstAndLast) {
        fullName = firstAndLast;
    };
    // My code
};

var bob = new Person('Bob Ross');
bob.getFullName();

// Test
Object.keys(bob).length // should return 6.
bob instanceof Person // should return true.
bob.firstName // should return undefined.
bob.lastName // should return undefined.
bob.getFirstName() // should return "Bob".
bob.getLastName() // should return "Ross".
bob.getFullName() // should return "Bob Ross".
bob.getFullName() // should return "Haskell Ross" after bob.setFirstName("Haskell").
bob.getFullName() // should return "Haskell Curry" after bob.setLastName("Curry").
bob.getFullName() // should return "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.getFirstName() // should return "Haskell" after bob.setFullName("Haskell Curry").
bob.getLastName() // should return "Curry" after bob.setFullName("Haskell Curry").