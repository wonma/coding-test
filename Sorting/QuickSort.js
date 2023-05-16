// Quick Sort ---- not in place

function BasicQuickSort(arr) {
  let pivot = [arr[0]];
  let left = [];
  let right = [];

  if (arr.length < 2) {
    return arr;
  }

  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      pivot.push(arr[i]);
    }
  }

  return BasicQuickSort(left).concat(pivot, BasicQuickSort(right));
}

console.log(BasicQuickSort([3, 5, 1, 6, 8, 9, 3]));

// Quick Sort ---- in place
// We need three arguments:
// 1. the whole array to be sorted,
// 2. the left index of the target section
// 3. the right index of the target section
// 뭐든 하나를 pivot으로 정한 후, 그 녀석을 기준으로 좌, 우로 자리 바꿔주기를 진행한 후,
// pivot이었던 녀석을 좌, 우로 나뉜 두 그룹의 중앙 파티션 위치로 자리바꾸기 함으로써 자리를 픽스함.
// 그리고 이 과정을 recursively 반복함.
// 핵심은 작업 대상 array는 모든 레벨의 Resursive call에서든 같은 array라는 것과
// 다만 left, right로 divide(혹은 partition) 작업이 시행될 구역을 지정해주는 것.
// '자리바꿔주기, in place' 방법을 써서 memory 낭비가 적음.

// 블로거 im-developer의 방법:
// pivot으로 정했던 값을 두 그룹의 중앙으로 데려올 필요가 없는 방법임.
// 중앙 index로 정한 피봇값을 중심으로 좌팀 우팀으로 나눈후,
// left index (좌팀 그룹의 땅따먹기 인덱스가 되었던 녀석)가 right index보다 커지는 순간,
// left index 가 그대로 파티션(p)이됨.
// 파티션이 되고 나서는, 양쪽 덩어리 A와 B에 대해서 또 좌우 나누기를 진행함,
// 좌측 덩어리 A는 left부터 p - 1 인덱스 값까지의 구역이고
// 우측 덩어리 B는 p부터 right 인덱스 값까지의 구역임.

// 내가 한 것 (im-developer.tistory.com/134 코드 참고)
function qs(arr, left, right) {
  if (left >= right) {
    return;
  }

  let p = partition(arr, left, right);

  qs(arr, left, p - 1);
  qs(arr, p, right);

  function partition(arr, left, right) {
    const pivot = Math.floor((left + right) / 2);
    const pivotValue = arr[pivot]; // 미리 pivot값을 뽑아놓아야함.
    // 아래 while블럭 내에서 arr[pivot]을 바로쓰게되면, 이미 그 인덱스자리는
    // swap되어서 전혀다른 value가 pivotValue로 지정될 위험이 있음.

    while (left <= right) {
      while (arr[left] < pivotValue) {
        left++;
      }
      while (arr[right] > pivotValue) {
        right--;
      }
      if (left <= right) {
        let swap = arr[left];
        arr[left] = arr[right];
        arr[right] = swap;
        left++;
        right--;
      }
    }
    return left;
  }

  return arr;
}
console.log(qs([3, 5, 1, 6, 8, 4, 0], 0, 6));

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
