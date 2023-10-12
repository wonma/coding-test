// 1. Use toString method

// function steamrollArray(arr) {
//     let flattenedArr = arr
//         .toString()
//         .replace(',,', ',')
//         .split(',')
//         .map(el => {
//             if (el == '[object Object]') {
//                 return {};
//             } else if (isNaN(el)) {
//                 return el;
//             } else {
//                 return parseInt(el);
//             }
//         });
//     return flattenedArr;
// }

// 2. Compare the two different solutions that use a recursive approach.

////// Recursive method 1
// function steamrollArray1(val, flatArr = []) {
//   val.forEach(item => {
//     if (Array.isArray(item)) steamrollArray(item, flatArr);
//     else flatArr.push(item);
//   });
//   return flatArr;
// }

////// Recursive method 2
function steamrollArray2(val) {
  let flatArr = [];
  val.forEach(item => {
    if (Array.isArray(item)) flatArr.push(...steamrollArray2(item));
    else flatArr.push(item);
  });
  return flatArr;
}
console.log(steamrollArray2([1, [2], [3, [[4]]]]));
