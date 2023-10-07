//////////////////  Fibonacci program
//
// function fibonacci(num) {
//     let num1 = 0;
//     let num2 = 1;
//     let sum;
//     let i = 0;
//     for (i = 0; i < num; i++) {
//         sum = num1 + num2;
//         num1 = num2;
//         num2 = sum;
//     }
//     return sum;
// }


function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while(currNumber <= num) {
        if(currNumber % 2 !== 0) {
            result += currNumber;
        }
        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }
    return result;
}

console.log(sumFibs(10))