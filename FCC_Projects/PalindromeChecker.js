function palindrome(str) {
  let trimmed = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let reversed = trimmed
    .split('')
    .reverse()
    .join('');

  return trimmed === reversed;
}

palindrome('_eye'); //true
palindrome('A man, a plan, a canal. Panama'); //true
palindrome('My age is 0, 0 si ega ym.'); //true
palindrome('0_0 (: /- :) 0-0'); //true
palindrome('2_A3*3#A2'); //true
