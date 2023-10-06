// Solution 1 - Using 'arguments'
function uniteUnique(arr) {
    // const args = [...arguments];
    const result = [];
    for (let i = 0; i < arguments.length; i++) {
      for (let j = 0; j < arguments[i].length; j++) {
        if (!result.includes(arguments[i][j])) {
          result.push(arguments[i][j]);
        }
      }
    }
    return result;
  }
  
// console.log(  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))


// Solution 2 - Using 'new Set() and array.flat()'
function uniteUnique2(...arr){
    let flattenedArr = arr.flat();
    let removedDuplicate = new Set(flattenedArr)
    let finalResult = [...removedDuplicate]
    return finalResult;

    //  return [...new Set(arr.flat())]
}

console.log(  uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1]))


// Solution 3 - Using filter() and indexOf()'
// I don't think I would come up with this solution although it used
// the characteristic of indexOf() cleverly, which only returns
// the first index.
 
