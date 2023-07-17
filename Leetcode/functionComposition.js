//---------------- Problems ------------------//

// Create a function named 'compose' that is the function composition of the array of multiple functions.
// 'compose' will be a function that returns a function that takes one integer 'x'.

// Example
// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// hint: evalutating from right to left


//--------------- Solutions ----------------//

// My Try ---- 84ms
var compose1 = function(functions) {
	return function(x) {
        let integer = x;
        for(let i = functions.length - 1; i >= 0; i--) {
            integer = functions[i](integer)
        }
        return integer
    }
};

// Other approaches

// Using reserve() and forEach ---- 64ms
var compose2 = function(functions) {
	return function(x){
        if(functions.length === 0) return x;
        functions.reverse().forEach(fn => {
            x = fn(x);
        })
        return x;
    }
};

// Input Cases;

// Case1
let fns1 = [x => x + 1, x => x * x, x => 2 * x]; // x = 4, expected output = 65
// Case2
let fns2 = [x => 10 * x, x => 10 * x, x => 10 * x]; // x = 1, expected output = 1000
// Case3
let fns3 = []; // x = 42, expected output = 42;

console.log(compose1(fns1)(4));