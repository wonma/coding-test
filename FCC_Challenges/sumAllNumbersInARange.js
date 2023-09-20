function sumAll(arr) {

    if(arr[0] === arr[1]) arr[0] + arr[1];
    let min = arr[0] > arr[1] ? arr[1] : arr[0];
    let max = arr[1] > arr[0] ? arr[1] : arr[0];
  
    let sum = 0;
    for(let i = min; i <= max; i++) {
        sum = sum + i;
        console.log(`min: ${min}, sum: ${sum}`);
    }
    return sum;
  }
  
  sumAll([1, 4]);