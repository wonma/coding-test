// Question: What is the largest sum of the subarray?

// Data Example: 
let arr1 = [-2,3,2,-1]
let arr2 = [-2,1,-3,4,-1,2,1,-5,4]


function findLargestSum(array) {
    let updatedMax = array[0];
    let maxCollections = [];
    
    for (let i = 1; i <= array.length -1; i++) {
        updatedMax = Math.max(array[i], updatedMax + array[i]);
        maxCollections.push(updatedMax);
    }
    return Math.max(...maxCollections); 

}

let answer = findLargestSum(arr1);

console.log(answer);