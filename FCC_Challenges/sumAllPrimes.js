function sumPrimes(num) {
  // Create a helper function to check primality
  function isPrime(num) {
    // Get the square foot of the number
    let sqrt = Math.sqrt(num);

    // Starting from 2 (3, 4, ...) until the natural number smaller than the sqrt,
    // check if the number has any remainder.
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  let result = 0;
  // Using the helper function and starting from 2,
  // Check if the number is prime.
  // If it's prime, update the 'result' variable by adding the number to it.

  for (let j = 2; j <= num; j++) {
    if (isPrime(j)) {
      result += j;
    }
  }
  return result;
}

console.log(sumPrimes(10));
