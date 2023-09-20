function diffArray(arr1, arr2) {
  
    const newArr = [];
    function filterArr(mainArr, compareArr){
      for(let i=0; i < mainArr.length; i++) {
        if(compareArr.indexOf(mainArr[i]) == -1){
          newArr.push(mainArr[i])
        }
      }
    }
    filterArr(arr1, arr2);
    filterArr(arr2, arr1);
    return newArr;
  }
  
console.table(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));