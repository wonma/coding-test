// Helper functions
function createAtoZ() {
  let alphabetsArr = Array.from(Array(26).keys());
  return alphabetsArr.map((el, index) => {
    return String.fromCharCode(index + 65).toLowerCase();
  });
}

function toNumberedObj(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i + 1;
  }
  return obj;
}

function toLetteredObj(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i + 1] = arr[i];
  }
  return obj;
}

let letterNumPair = toNumberedObj(createAtoZ());
let numLetterPair = toLetteredObj(createAtoZ());

// My suggested solution to the problem (finding one or more missing letters)
function fearNotLetters(str) {
  let strArr = Array.from(str);
  let missingNums = [];

  for (
    let i = letterNumPair[strArr[0]];
    i < letterNumPair[strArr[strArr.length - 1]];
    i++
  ) {
    if (!strArr.includes(numLetterPair[i])) {
      missingNums.push(numLetterPair[i]);
    }
  }
  return missingNums;
}

// My solution for the problem (finding one missing letter)
function fearNotLetter(str) {
  let strArr = Array.from(str);
  let missingNum = undefined;

  for (
    let i = letterNumPair[strArr[0]];
    i < letterNumPair[strArr[strArr.length - 1]];
    i++
  ) {
    if (!strArr.includes(numLetterPair[i])) {
      missingNum = numLetterPair[i];
    }
  }
  return missingNum;
}

console.log(fearNotLetters('cdegi'));
console.log(fearNotLetter('abce'));
