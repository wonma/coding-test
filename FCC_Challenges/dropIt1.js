function dropElements(arr, func) {
  let theIndex = arr.findIndex(func);
  if (theIndex > -1) {
    arr = arr.splice(theIndex);
  } else {
    arr = [];
  }
  return arr;
}

// More succint version
// function dropElements(arr, func) {
//   let sliceIndex = arr.findIndex(func);
//   return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
// }

// My Question
// ----------- Does splice modify the original array? or does it return the result?
// Answer: yes. it modifies original array. The remaining items will be in the original array
// and the 'spliced' items will be returned in an array.

console.log(
  dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  })
);
