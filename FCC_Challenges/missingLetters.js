function createAtoZ() {
    let alphabetsArr = Array.from(Array(26).keys());
    return AToZ = alphabetsArr.map((el, index) => {
        return String.fromCharCode(index + 65)
    });
}

console.log(createAtoZ())

// function fearNotLetter(str) {
//     return str;
//   }
  
//   fearNotLetter("abce");