// Different cases of fn

function plusOne (n) {
    return n + 1;
}

function firstIndex(n, i) { return i === 0; }

function greaterThan10(n) { return n > 10; }

function sum(accum, curr) { return accum + curr * curr; }

function sum(accum, curr) { return 0; }

// Array example
let myArr = [-2,-1,0,1,2];


//---------------- Problems ------------------//

// 1. Create a custom array mapping function
// 2. Create a custom array filtering function
// 3. Create a custom array reducing function


//---------------- Solutions to Each Problem ------------------//

// 1. Create a custom array mapping function (using for..in)
var map = function(arr, fn) {
    const newArr = new Array(arr.length); // 문제의 핵심은 이부분. 새 Array를 생성하는 효율적인 방법을 알고있는가?
    for (const i in arr) {
        newArr[i] = fn(arr[i], Number(i));
    }
    return newArr;
};


// 2. Create a custom array filtering function
// Method 1. Using push (pushing elements onto an array can be a slower operation)
//           because the array needs to be resized. 
//           Initializing the array with new Array(size) can avoid these expensive resizing operations.
var filter = function(arr, fn) { // 내가 완전히 잘못 생각한것: 음수가 faulty로 간주된다고 생각함. 그래서 위의 plusOne이라는 fn이 처음에는 이해가 안되었음.
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
    let size = 0; // Initializing the new array's index
    for (let i = 0; i <= arr.length - 1; i++) {
        if(fn(arr[i], i)) {
            newArr[size] = arr[i]; // Assign the value only if the value passed the condition.
            size++; // Preset the next index of the new array
        }
    }

    while(newArr.length > size) { // Due to the unpassed values, there may be empty indexes at the end of the new array. Remove them until 
        newArr.pop();
    }
    
    return newArr;
}


// 3. Create a custom array reducing function

// My Try
var reduce1 = function(nums, fn, init) {
    if (nums.length < 1) return init;
    
     let val = fn(init, nums[0]);
     for(let i = 1; i <= nums.length - 1; i++) {
         val = fn(val, nums[i]);
     }
     return val;
};

// Better 
var reduce2 = function(nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++) { // 이 부분도 nums.length - 1가 아닌 nums.length로 조건을 썼다. 그래야 array길이가 0일때도 자연스러움.
      val = fn(val, nums[i]);
    }
    return val;
  };

console.log(filter(myArr, plusOne));  // [ -2, 0, 1, 2 ]
// console.log(filter(myArr, firstIndex)); // [-2]
// console.log(filter(myArr, greaterThan10)); // []
console.log(filterFaster(myArr, plusOne));  // [ -2, 0, 1, 2 ]
