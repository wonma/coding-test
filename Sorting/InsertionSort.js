// Insertion Sort
// 참고 블로그: im-developer.tistory.com/133

// 2차 연습
function insertionSort(arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    let left = i - 1;
    let current = arr[i]; //examine할 때 기준값이 되는 것. 인덱스가 아닌 인덱스에 위치한 값을 변수에 넣어놓는 것이 핵심이다.

    while (current < arr[left] && left >= 0) {
      arr[left + 1] = arr[left];
      left--; //섹션 안에서, current값과의 비교 대상을 재지정하기 위한 부분. (왼쪽으로 이동하며 하나씩 점검)
    }
    arr[left + 1] = current; // 직전에 while구문내에서 'left--'가 적용되어 마쳐진 것을 다시 전환한다.
  }
  return arr;
}

// 1차 연습
// function insertionSort(arr) {
//   for (let i = 1; i <= arr.length - 1; i++) {
//     let curIndex = i - 1; // Index to compare with Target Value
//     let curValue = arr[i]; // Target Value
//     while (curIndex >= 0 && arr[curIndex] > curValue) {
//       arr[curIndex + 1] = arr[curIndex];
//       curIndex--;
//     }
//     arr[curIndex + 1] = curValue;
//   }
//   return arr;
// }
console.time('insertion');
console.log(insertionSort([7, 2, 10, 3, 6, 1])); // 3.893ms
console.timeEnd('insertion');
