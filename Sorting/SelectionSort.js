// Selection Sort

// 2차 연습 (스스로 구현한 코드)
function selectionSort_3(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallest = i;
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[smallest] > arr[j]) {
        smallest = j;
      }
    }
    if (smallest !== i) {
      // swap할 필요가 없는 경우가 있기 떄문에 이 조건문을 써주는 것이 logical함. (안그러면 자기가 자기와 바꾸는 겪이 됨.)
      [arr[smallest], arr[i]] = [arr[i], arr[smallest]];
    }
  }

  return arr;
}

// 1차 연습 B: if(minIndex !== i) {...} 라는 더욱 concise한 코드를 이용한 swap시행
const selectionSort_2 = array => {
  for (let i = 0; i < array.length - 1; i++) {
    //첫번째자리의 주인공부터 찾는다.
    let minIndex = i; //일단 현 구간에서의 최소값은 첫번째자리의 값이라고 가정한다.

    for (let j = i + 1; j <= array.length - 1; j++) {
      //현 구간 전체를 둘러보며
      if (array[minIndex] > array[j]) {
        //현재최소값보다 더 적은 녀석이 나타나면
        minIndex = j; //그 녀석의 인덱스값을 최소값인덱스로 업데이트한다.
      }
    }

    // Swapping Initiator (조건: 'i가 아닌 새 최소값이 찾긴 경우라면'=>'스와핑 일어남')
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex]; // '그 자리'로 최소값을 옮기기.
      array[minIndex] = temp;
    }
  }
  return array;
};

// 1차 연습 A: array destructuring을 통한 swap 구현, newMinFound variable의 true/false를 통한 swap여부 결정
const selectionSort_1 = array => {
  for (let i = 0; i < array.length - 1; i++) {
    //첫번째자리의 주인공부터 찾는다.
    let minIndex = i; //일단 현 구간에서의 최소값은 첫번째자리의 값이라고 가정한다.

    let newMinFound = false;

    for (let j = i + 1; j <= array.length - 1; j++) {
      //현 구간 전체를 둘러보며
      if (array[minIndex] > array[j]) {
        //현재최소값보다 더 적은 녀석이 나타나면
        minIndex = j; //그 녀석의 인덱스값을 최소값인덱스로 업데이트한다.
        newMinFound = true;
      }
    }

    if (newMinFound) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
};

console.time('selectionSort_3');
console.log(selectionSort_3([7, 2, 10, 3, 6, 1]));
console.timeEnd('selectionSort_3');

console.time('selectionSort_2');
console.log(selectionSort_2([7, 2, 10, 3, 6, 1]));
console.timeEnd('selectionSort_2');

console.time('selectionSort_1');
console.log(selectionSort_1([7, 2, 10, 3, 6, 1]));
console.timeEnd('selectionSort_1');
