// All solutions below implemented recursion.

// 1. Use the Spread Operator and .push() to flatten the array
// function steamrollArray(arr) {
//     let flattenedArr = [];
//     arr.forEach(el => {
//       if(Array.isArray(el)) {
//         flattenedArr.push(...steamrollArray(el)) 
//         // The key point is here. Before pushing the element, 
//         // we use spread operator to flatten the array that 
//         // has been returned from recursive steamrollArray function. 
//       } else {
//         flattenedArr.push(el) 
//         // This is the base condition. 
//         // That is, if the element is not an array, 
//         // it will be pushed to the flattenedArry variable.
//       }
//     })
//     return flattenedArr;
//   }
  
// 2. Use the Spread Operator, .concat() method to flatten the array
//    and use .some() method to find if there's any inner array
function steamrollArray(arr) {
    let flattenedArr = [].concat(...arr);
    return flattenedArr.some(Array.isArray) ? steamrollArray(flattenedArr) : flattenedArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]))

