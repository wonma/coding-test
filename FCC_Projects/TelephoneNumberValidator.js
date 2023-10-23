function telephoneCheck(str) {
  // Remove all white spaces
  let trimmed = str.replace(/\s/g, '');

  // Get how many numbers the string has.
  let findAllNumbers = /[0-9]/g;
  let lengthOfNums = trimmed.match(findAllNumbers).length;

  // Falsy Case 1.
  // Return false if the string contains any characters other than a number, -, (, and ).
  if (/[^0-9\-\(\)]/g.test(trimmed)) return false;

  // Falsy Case 2.
  // Return false if the number of numbers are either less than 10 or more than 11.
  if (lengthOfNums < 10 || lengthOfNums >= 12) return false;

  // Falsy Case 3.
  // If the number of the numbers in the string is 11 and
  // it does not start with '1', return false.
  if (lengthOfNums == 11 && trimmed[0] !== '1') return false;

  // Simplify Step 1.
  // Remove the first number '1' country code if the number of the numbers is 11.
  if (lengthOfNums == 11) {
    trimmed = trimmed.slice(1);
  }

  // Now we have the full phone number without the country code.
  // If it contains '-' or parenthesis, it should start with either '(555)' or '555-'.
  let hasLiner = /[\(\)-]/g;
  if (hasLiner.test(trimmed)) {
    const patternA = /^[0-9]{3}-/;
    const patternB = /^\([0-9]{3}\)/;
    return patternA.test(trimmed) || patternB.test(trimmed) ? true : false;
  } else {
    // If it consists of 10 digits only, there's nothing more to check, so we can return true.
    return true;
  }
}

// telephoneCheck("555-555-5555");
console.log(telephoneCheck('1555-555-5555'));
