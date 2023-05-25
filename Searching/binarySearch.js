// ---------------------------- Recursive Approach ------------------------
// 1. 내가 틀린 버젼.
// recursive에서 반복적으로 틀리는 부분임.
// function binaryRecursiveSearch(arr, target, low, high) {
//     if(low > high) return 'Not found';

//     let mid = Math.floor((low + high)/2);
//     if(arr[mid] == target) {
//         return mid;
//     } else if(arr[mid] > target) {
//         binaryRecursiveSearch(arr, target, low, mid - 1)
//     } else {
//         binaryRecursiveSearch(arr, target, mid + 1, high)
//     }
// }

// 2. 바른 버젼.
function binaryRecursiveSearch(arr, target, low, high) {
    if(low > high) return 'Not found';

    let mid = Math.floor((low + high)/2);
    if(arr[mid] == target) {
        return mid;
    } else if(arr[mid] > target) {
        return binaryRecursiveSearch(arr, target, low, mid - 1)
    } else {
        return binaryRecursiveSearch(arr, target, mid + 1, high)
    }
}

let myArr = [2,5,8,10,15,66,100]

console.log(binaryRecursiveSearch(myArr, 5, 0, myArr.length - 1)); 

// ---------------- Iterative Approach - using 'while' loop ---------------
//
// function binarySearch(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;
//     let i = 0; 
//     while(low <= high) {
//         let mid = Math.floor((low+high)/2);
//         let guess = arr[mid]
//         if(guess == target) {
//             return 'The target number is on the index: '+ mid;
//         } else if(guess > target) {
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//         i++;
//     }
//     return 'not found'
// }



// ---------------- Iterative Approach - using 'for' loop ---------------
// 1. 내가 틀린 버젼.
// for 안에 변수 low와 hight를 작성하여 틀린다. 이렇게 되면 변수가 안됨. 조심하자.
// function binarySearch(arr, target) {
//     for(let i = 0; i < Math.floor(arr.length/2); i++) {
//         let low = 0;
//         let high = arr.length - 1;
//         let mid = Math.floor((low + high)/2);
//         if(arr[mid] == target) {
//             return mid;
//         } else if(arr[mid] < target) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
//     return 'not found'
// }


// 2. 수정된 바른 버젼.
// function binarySearch(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;
//     for(let i = 0; i < Math.floor(arr.length/2); i++) {
//         let mid = Math.floor((low + high)/2);
//         if(arr[mid] == target) {
//             return mid;
//         } else if(arr[mid] < target) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
//     return 'not found'
// }

// let myArray = [2,5,8,10,15,66,100]

// console.log(binarySearch(myArray, 5)); 