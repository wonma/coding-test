// Solution using '.charCodeAt(index)'

function fearNotLetter(str) {
    let j = 0; // for each letter in the string provided

    for(let i = str.charCodeAt(0); i < str.charCodeAt(str.length - 1); i++) {
    // for iterating from the first index's character to the last character 
        
      if(str.charCodeAt(j) !== i) {
        return String.fromCharCode(i)
      } else {
        j++
      }
    }
    return undefined;
  }
  
console.log(  fearNotLetter("abce"))