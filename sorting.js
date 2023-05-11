// ------------- Sorting ------------- //

// Insertion Sort
// function insertionSort(arr) {
//     for (let i = 1; i <= arr.length - 1; i++) {
//         let curIndex = i - 1; // Index to compare with Target Value
//         let curValue = arr[i]; // Target Value
//         while(curIndex >= 0 && arr[curIndex] > curValue) {
//             arr[curIndex + 1] = arr[curIndex];
//             curIndex --;
//         }
//         arr[curIndex + 1] = curValue;
//     }
//     return arr;
// }
// console.time('insertion');
// console.log(insertionSort([7,2,10,3,6,1])); // 3.893ms
// console.timeEnd('insertion')

// Selection Sort
// const selectionSort = (array) => {
//     for(let i = 0; i < array.length - 1; i++) {

//         let minIndex = i;
//         let newMinFound = false; // Swapping Initiator Method 1
//         for(let j = i+1; j < array.length -1; j++) {
//             if(array[minIndex] > array[j]) {
//                 minIndex = j;
//                 newMinFound = true;
//             }
//         }

//         // Swapping Initiator Method 2: if(minIndex !== i )

//         if(newMinFound) {
//             // Swapping Method 1
//             let storage = array[i];
//             array[i] = array[minIndex];
//             array[minIndex] = storage;

//             // Swapping Method 2 (Array Destructuring)
//             // [array[i], array[minIndex]] = [array[minIndex], array[i]]
//         }
//     }
//     return array;
// }
// console.time('selection');
// console.log(insertionSort([7,2,10,3,6,1])); // 0.117ms
// console.timeEnd('selection')

// Merge Sort

// function mergeSort(array) { // Divide 기능을 주로 하지만, 리턴하는 것은 merge한것이다.

//     //1. base case를 설정한다. 최소값만 남는다면 그것을 리턴. 마지막 회기에서는 이 라인에서 끝난다.
//     if (array.length < 2) return array; // 2개이상이라면 계속 진행.

//     // 쪼개기 프로토콜 시작
//     //2-1. 반으로 나누는 지점을 도출한다.
//     let mid = Math.floor(array.length/2);

//     //2-2. 반으로 나눈다.
//     let left = array.splice(0, mid);

//     //2-3. recursive call을 쪼개진 각 어레이에 적용한다.

//     //3. 쪼개진걸 다시 merge하는 작업이 recursively 수행된다. (한개 요소만 갖고있는 어레이 둘을 합하는 것으로 시작.)
//     return merge(mergeSort(left), mergeSort(array));

//     function merge(left, right) {
//         let arr = [];
//         while (left.length && right.length) {
//             if (left[0] < right[0]) arr.push(left.shift());
//             else arr.push(right.shift());
//         }
//         return [...arr, ...left, ...right]; // 사실은 [...arr, ...left] 혹은
//                                             // [...arr, ...right] 둘 중 하나일 것임.
//     }
// }

// console.time('merge');
// console.log(mergeSort([7,2,10,3,6,1])); // 0.294ms
// console.timeEnd('merge')

// Quick Sort ---- not in place

function QuickSort(array) {
  //base case: 분할할 어레이의 n <= 1 일때.
  //combine방법: left array + pivot item + right array
  let newArr = [];

  if (array.length <= 1) newArr = array;
  if (array.length >= 2) {
    let leftArr = [];
    let rightArr = [];
    let pivot = array[0];

    for (let i = 1; i <= array.length - 1; i++) {
      if (pivot > array[i]) {
        leftArr.push(array[i]);
      } else if (pivot < array[i] || pivot == array[i]) {
        rightArr.push(array[i]);
      }
    }

    console.log(`left: ${leftArr}, pivot: ${pivot}, right: ${rightArr}`);
    newArr = QuickSort(leftArr).concat(pivot, QuickSort(rightArr));
  }
  return newArr;
}

console.log(QuickSort([3, 5, 1, 6, 8, 4, 0]));

// Quick Sort ---- in place
