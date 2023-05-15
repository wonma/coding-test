// Merge Sort

function mergeSort(array) {
  // Divide 기능을 주로 하지만, 리턴하는 것은 merge한것이다.

  //1. base case를 설정한다. 최소값만 남는다면 그것을 리턴. 마지막 회기에서는 이 라인에서 끝난다.
  if (array.length < 2) return array; // 2개이상이라면 계속 진행.

  // 쪼개기 프로토콜 시작
  //2-1. 반으로 나누는 지점을 도출한다.
  let mid = Math.floor(array.length / 2);

  //2-2. 반으로 나눈다.
  let left = array.splice(0, mid);

  //2-3. recursive call을 쪼개진 각 어레이에 적용한다.

  //3. 쪼개진걸 다시 merge하는 작업이 recursively 수행된다. (한개 요소만 갖고있는 어레이 둘을 합하는 것으로 시작.)
  return merge(mergeSort(left), mergeSort(array));

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

console.time('merge');
console.log(mergeSort([7, 2, 10, 3, 6, 1])); // 0.294ms
console.timeEnd('merge');
