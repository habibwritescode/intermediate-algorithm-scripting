// INSTRUCTIONS

// Sum All Primes

// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
// For example, 2 is a prime number because it is only divisible by 1 and 2. 
// In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.


// SOLUTION

// This was tough. 
// I couldn't figure out a way to find prime numbers. Tried and tried, but had to give up and do a google search.
// Getting the sum of the prime numbers was easy after that.

function sumPrimes(num) {
    // Copied (https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100)
    let sieve = [1];
    let i;
    let j;
    let primes = [];
    for (i = 2; i <= num; i++) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= num; j += i) {
                sieve[j] = true;
            }
        }
    }
    // Copied

    // My code
    return primes.reduce((sum, val) => sum + val, 0);
    // My code
}

sumPrimes(10); // should return 17.
sumPrimes(977) // should return 73156.