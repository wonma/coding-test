// 1. Use 'for loop', 'break', and shift()

// My trial (failed)
// function dropElements(arr, func) {

//   for(let i = 0; i < arr.length; i++) {
//     if(!func(arr[0])){
//       arr.shift();  // <------- This changes the length of the original array.
//     } else {
//       break;
//     }
//   }

//   return arr.length ? arr : []; // <------- Unnecessary ternary operator
// }

// Solution
// function dropElements(arr, func) {
//   let originalLength = arr.length
//   for(let i = 0; i < originalLength; i++) {
//     if(!func(arr[0])){
//       arr.shift();
//     } else {
//       break;
//     }
//   }

//   return arr;
// }


// 2. Use 'while loop'

// My trial (failed due to infinite loop)
// function dropElements(arr, func) {
//   while(!func(arr[0])) { // <-------- arr[0] of an empty array returns undefined,  
//     arr.shift();         //           which makes func(arr[0]) false,
//   }                      //           which makes the loop keep going infinitely.
//   return arr;
// }


// 2. Use a recursive function

// My trial (failed)
// function dropElements(arr, func) {
//   return arr.length > 0 && !func(arr[0])
//   ? dropElements(arr.slice(1), func) : []; // <----- the result of arr.slice(1) 
// }                                          //        is used as a new arr

function dropElements(arr, func) {
  return arr.length > 0 && !func(arr[0])
  ? dropElements(arr.slice(1), func) : arr;
}

console.log(
  dropElements([0, 1, 0, 1], function(n) {return n === 1;})
);
