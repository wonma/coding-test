function rot13(str) {
  let strArr = str.split('')
   
  let convertedArr = strArr.map((letter) => {

    const isLetter = /[A-Za-z]/g

    if(isLetter.test(letter)) {
      let code = letter.charCodeAt(0)
      return code <= 77 ? 
      String.fromCharCode(code+13) 
      : String.fromCharCode(code-13);
    } else {
      return letter
    }
  })
  return convertedArr.join('')
}

console.log(rot13("SERR PBQR PNZC"))