// Quick Sort ---- not in place

// function BasicQuickSort(arr) {
//   let pivot = [arr[0]];
//   let left = [];
//   let right = [];

//   if (arr.length < 2) {
//     return arr;
//   }

//   for (let i = 1; i <= arr.length - 1; i++) {
//     // i < arr.length - 1 이라고 써서 반복적으로 틀림.

//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else if (arr[i] > pivot) {
//       right.push(arr[i]);
//     } else {
//       pivot.push(arr[i]);
//     }
//   }

//   return BasicQuickSort(left).concat(pivot, BasicQuickSort(right));
// }

// console.log(BasicQuickSort([3, 5, 1, 6, 8, 9, 3]));

// [블로거 모범답안] Quick Sort ---- in place
function qs(arr, l, r) {
  return;
}

console.log(qs([3, 5, 1, 6, 8, 4, 0], 0, 7));

// [스스로] 여기에 Quick Sort 를 in-place 방법으로 구현하기
// CS DOJO가 제안한 방법으로 했음. (제일 끝 요소를 pivot으로 지정하면서 좌측->우측으로 요소와 pivot값 비교, 값 교환 진행하는것)

function QuickSort(arr, left, right) {
  //   if (arr.length < 2) {
  //     return;
  //   } // arr는 늘 같은 arr가 recursive call에 쓰이므로 이건 틀린 base case임.

  if (left >= right) {
    return;
  } else {
    let p = partition(arr, left, right);

    QuickSort(arr, left, p - 1); // left half
    QuickSort(arr, p + 1, right); // right half
  }
  return arr;

  function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left - 1;
    for (let j = left; j <= right; j++) {
      if (arr[j] < pivot) {
        // <= 를 쓸지 <를 쓸지 고민됨. 왜 <=를 쓰면 안될까?

        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
  }
}

let array = [3, 5, 1, 6, 8, 4, 0];
console.log(QuickSort([3, 5, 1, 6, 8, 4, 0], 0, 6));
