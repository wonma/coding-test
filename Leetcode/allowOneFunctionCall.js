// Different cases of fn
let add = (a,b,c) => (a + b + c)
let multiply = (a,b,c) => (a * b * c)

//---------------- Problems ------------------//

// Given a function fn, return a new function that is identical to the original function
// except that it ensures fn is called at most once.

// My understanding
// 1. 업데이트된 fn을 만들어내는 higher-order function을 쓰는 문제다. 
// 2. 즉, higer-order function이 return하는 것은 function이다.
// 3. higer-order function은 fn을 argument로 받아들이므로, 
// 리턴되는 function의 parameter자리에는 ...args가 오도록한다.

// My Mistake
// Right: let add = (a,b,c) => (a + b + c) 를 작성하는 과정에서
// Wrong: let add = (a,b,c) => {a + b + c} 로 잘못 작성함. 위는 자동 리턴되는데, 이것은 자동 리턴이 안됨. 

//--------------- Solutions ----------------//

// My Trial
 function once(fn){
    let hasBeenCalled = false;

    return function(...args){
        if(!hasBeenCalled) {
            hasBeenCalled = true;
            return fn(...args);
        } else{
            return undefined;
        }
    }
 }


// Others' code

// var once = function(fn) {

//     let hasBeenCalled = false;
//     let result;
  
//     return function(...args) {
//       if (!hasBeenCalled) {
//         result = fn(...args);
//         hasBeenCalled = true;
//         return result;
//       } else {
//         return undefined;
//       }
//     }
  
//   };

let onceAdd = once(add);
console.log(onceAdd(1,2,3));
console.log(onceAdd(2,3,6));