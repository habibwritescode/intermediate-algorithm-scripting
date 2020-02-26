// INSTRUCTIONS

// Map the Debris

// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// You can read about orbital periods on Wikipedia.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.


// SOLUTION

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    // My code
    // We create a new variable to store our new object values.
    let newArr = [];
    // We loop through the keys of the object(s) in arr.
    for (let item in arr) {
        // Implement the formula for getting orbital period. (Did a google search for formula.)
        let orbPerInSeconds = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[item].avgAlt, 3) / GM));
        // Delete this property so we can replace it with the new one.
        delete arr[item].avgAlt;
        // Add new property to the object and give it a value of the orbital period we got.
        arr[item].orbitalPeriod = orbPerInSeconds;
        // We push to our new array.
        newArr.push(arr[item])
    }
    // My code
    return newArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]); // should return [{name: "sputnik", orbitalPeriod: 86400}].

orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }])
  // should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734},
  // {name: "moon", orbitalPeriod: 2377399}].