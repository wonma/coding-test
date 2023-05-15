// Selection Sort
const selectionSort = array => {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    let newMinFound = false; // Swapping Initiator Method 1
    for (let j = i + 1; j < array.length - 1; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
        newMinFound = true;
      }
    }

    // Swapping Initiator Method 2: if(minIndex !== i )

    if (newMinFound) {
      // Swapping Method 1
      let storage = array[i];
      array[i] = array[minIndex];
      array[minIndex] = storage;

      // Swapping Method 2 (Array Destructuring)
      // [array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
  }
  return array;
};
console.time('selection');
console.log(insertionSort([7, 2, 10, 3, 6, 1])); // 0.117ms
console.timeEnd('selection');
