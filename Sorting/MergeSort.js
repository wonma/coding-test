// Merge Sort

// mergeSort_1, mergeSort_2는 분할 시 splice를 사용하였고, 병합 시 shift를 사용하였다.
// mergeSort_3은 분할 시 slice를 사용하였다 (im-developer.tistory.com/134 님의 방식 참고)

function mergeSort_3(arr) {
  if(arr.length < 2) return arr; // 마지막 recursive call에서는 최소 규모의 input(즉, array의 요소 값이 1개일때)을 만들어낸 후 종료.
  
  // 나머지 recursive call에서는 주어진 배열을 2등분한 후 combine한 것을 return. 결국 재귀적으로 했을 때 최종 리턴하는 것은 combine된 가장 큰 좌, 우 덩어리임.
  let mid = Math.floor(arr.length/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  
  return combine(mergeSort_3(left), mergeSort_3(right)); //좌측과 우측을 합치되 어떤 로직을 통해서 합칠지를 생각해서 짜야한다.
  
  function combine(leftArr, rightArr){
    let resultArray = [];
    let i = 0; //the index of left Arr
    let j = 0; //the index of right Arr
  
    while (i < left.length && j < right.length) {
      if(leftArr[i] <= rightArr[j]) {
        resultArray.push(leftArr[i]);
        i++;
      } else {
        resultArray.push(rightArr[j]);
        j++;
      }
    }

    return resultArray.concat(leftArr.slice(i), rightArr.slice(j)); 
    //참고1. 좌측이나 우측 둘 중 하나는 '마지막 인덱스+1'이 되므로 [](empty array)일 것이다. 
    //처음에 틀린 코드:
    //return resultArray.concat(leftArr[i], rightArr[j]); 
    //이유: 예를 들어 rightArr[last index + 1]를 레퍼런스하면 undefined가 나오게 된다. 
    //수정: rightArr.slice(last index + 1)를 하면 []가 나오게 된다. 
  }
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


// console.time('mergeSort_2');
// console.log(mergeSort_2([7, 2, 10, 3, 6, 1])); // 0.294ms
// console.timeEnd('mergeSort_2');

console.time('mergeSort_3');
console.log(mergeSort_3([7, 2, 10, 3, 6, 1])); // 0.294ms
console.timeEnd('mergeSort_3');