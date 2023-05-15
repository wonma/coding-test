// Insertion Sort
function insertionSort(arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    let curIndex = i - 1; // Index to compare with Target Value
    let curValue = arr[i]; // Target Value
    while (curIndex >= 0 && arr[curIndex] > curValue) {
      arr[curIndex + 1] = arr[curIndex];
      curIndex--;
    }
    arr[curIndex + 1] = curValue;
  }
  return arr;
}
console.time('insertion');
console.log(insertionSort([7, 2, 10, 3, 6, 1])); // 3.893ms
console.timeEnd('insertion');
