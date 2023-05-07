// ------------- Search ------------- //

// Binary Search - Iterative Approach

function IterativeBinarySearch(array, target) {
    let leftI = 0;
    let rightI = array.length - 1;

    while (leftI <= rightI) {

        let midI = Math.floor((leftI + rightI)/2);

        if (array[midI] < target) {
            leftI = midI + 1;
        } else if (array[midI] > target) {
            rightI = midI - 1;
        } else if (array[midI] == target) {
            return 'Iterative: The target number is on Index: ' + midI;
        }
    } 
    return 'Could not find the target.';

}

console.log(IterativeBinarySearch([2,5,7,10,15,17,19], 19));


// Binary Search - Recursive Approach

function RecursiveBinarySearch(array, target, left, right) {

    if (left > right) {
        return 'Could not find the target.';
    }

    let mid = Math.floor((left + right)/2);

    if (array[mid] == target) {
        return 'Recursive: The target number is on Index: ' + mid;
    }

    if (array[mid] < target) {
        return RecursiveBinarySearch(array, target, mid + 1, right);
    } else if (array[mid] > target) {
        return RecursiveBinarySearch(array, target, left, mid - 1);
    }
}

let myArr = [2,5,7,10,15,17,19];
console.log(RecursiveBinarySearch(myArr, 19, 0, myArr.length-1));