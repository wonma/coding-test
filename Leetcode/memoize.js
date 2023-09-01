// Different cases of fn
let sum = (a, b) => (a + b)
let fib = (n) => (n - 1) + fib(n - 2);
let factorial = (n) => factorial(n - 1) * n;

//---------------- Problems ------------------//

// Given a function fn, return a memoized version of that function
// that will never be called twice with the same inputs.
// Instead, it will return a cached value.

// My understanding
// 1. 오리지널 fn을 Memoized 기능이 추가된 새 fn으로 만들어내는 higher-order function을 쓰는 문제다. 
// 2. cached data를 저장하는 방법에는 여러가지가 있으나 object를 사용해본다.
// 3. array상태로 있는 argument들을 string으로 바꾼 후 object의 key로 저장해주어야한다.
 

//--------------- Solutions ----------------//

// My Trial
let memoize = (fn) => {
    let cache = {};
    return function(...args){
        let key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        } else {
            cache[key] = fn(...args);
            return cache[key];
        }
    }
}

let memoizedSum = memoize(sum);
console.time('firstCall');
console.log(memoizedSum(1,3));
console.timeEnd('firstCall');

console.time('secondCall');
console.log(memoizedSum(1,3));
console.timeEnd('secondCall');

