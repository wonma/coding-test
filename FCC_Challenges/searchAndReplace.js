function myReplace(str, before, after) {
    let regex = /^[A-Z]/
    if(regex.test(before)){
      after = after.replace(after[0], after[0].toUpperCase())
    } else {
    after = after.replace(after[0], after[0].toLowerCase())
    }
    return str.replace(before, after);
  }
  
console.log(  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))