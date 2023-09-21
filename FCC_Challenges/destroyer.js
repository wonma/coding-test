function destroyer(arr, ...args) { // initial array를 modify하라는 말인것 같은데. 이부분을 모르겠음.
    let i = 0;
    while(i < arr.length) {
        if(args.includes(arr[i])) {
          arr.splice(i, 1)
        } else {
          i++
        }
    }
    return arr;
  }
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))