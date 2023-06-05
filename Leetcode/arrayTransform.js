// Different cases of fn

function plusOne (n) {
    return n + 1;
}

function firstIndex(n, i) { return i === 0; }

function greaterThan10(n) { return n > 10; }

// Array example
let myArr = [-2,-1,0,1,2];


//---------------- Problems ------------------//

// 1. Create a custom array mapping function
// 2. Create a custom array filtering function
// 3. Create a custom array reducing function


//---------------- Solutions to Each Problem ------------------//

// 1. Create a custom array mapping function (using for..in)

var map = function(arr, fn) {
    const newArr = new Array(arr.length);
    for (const i in arr) {
        newArr[i] = fn(arr[i], Number(i));
    }
    return newArr;
};


// 2. Create a custom array filtering function
// Method 1. Using push (pushing elements onto an array can be a slower operation)
//           because the array needs to be resized. 
//           Initializing the array with new Array(size) can avoid these expensive resizing operations.
var filter = function(arr, fn) { // 내가 완전히 잘못 생각한것: 음수가 faulty로 간주된다고 생각함. 
    let newArr = [];
    for(let i=0; i <= arr.length - 1; i++) {
        if(fn(arr[i], i)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// Method 2. Using Pre-allocate Memory
var filterFaster = function(arr, fn) {
    let newArr = new Array(arr.length); // with new Array(size), pushing elements to the array is not possible.
    let size = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        if(fn(arr[i], i)) {
            newArr[size] = arr[i];
            size++;
        }
    }

    while(newArr.length > size) { // This is a very important step!!
        newArr.pop();
    }
    
    return newArr;
}

console.log(filter(myArr, plusOne));  // [ -2, 0, 1, 2 ]
// console.log(filter(myArr, firstIndex)); // [-2]
// console.log(filter(myArr, greaterThan10)); // []
console.log(filterFaster(myArr, plusOne));  // [ -2, 0, 1, 2 ]
