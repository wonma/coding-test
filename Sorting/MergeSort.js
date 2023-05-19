// Merge Sort

// mergeSort_1, mergeSort_2는 내가 연습한 것
// mergeSort_3은 im-developer.tistory.com/134 님의 방식으로 다시해본것

function mergeSort_3() {

}

function mergeSort_2(array) {
  if(array.length < 2) return array;

  let mid = Math.floor(array.length/2);
  let left = array.splice(0, mid);

  return combine(mergeSort_2(left), mergeSort_2(array));
  
  function combine(leftArr, rightArr) {
    let combinedArr = [];
    
    while (leftArr.length > 0 && rightArr.length > 0) {
      if(leftArr[0] <= rightArr[0]) {
        combinedArr.push(leftArr.shift())
      } else {
        combinedArr.push(rightArr.shift())
      }
    }
    return [...combinedArr, ...leftArr, ...rightArr]
  }

}

function mergeSort_1(array) {

  //base case를 설정한다. 최소값만 남는다면 그것을 리턴. 마지막 회기에서는 이 라인에서 끝난다.
  if (array.length < 2) return array;

  let mid = Math.floor(array.length / 2);
  let left = array.splice(0, mid);

  //한개 요소만 갖고있는 어레이 둘을 합하는 것으로 시작.
  return merge(mergeSort_1(left), mergeSort_1(array));

  function merge(left, right) {
    let arr = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) arr.push(left.shift());
      else arr.push(right.shift());
    }
    return [...arr, ...left, ...right]; // 사실은 [...arr, ...left] 혹은
    // [...arr, ...right] 둘 중 하나일 것임.
  }
}

// console.time('mergeSort_1');
// console.log(mergeSort_1([7, 2, 10, 3, 6, 1])); // 0.294ms
// console.timeEnd('mergeSort_1');


console.time('mergeSort_2');
console.log(mergeSort_2([7, 2, 10, 3, 6, 1])); // 0.294ms
console.timeEnd('mergeSort_2');