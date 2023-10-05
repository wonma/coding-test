function uniteUnique(...arr) {
    let unitedArr = []
    arr.forEach(innerArr => {
        unitedArr = unitedArr.concat(innerArr);
    })
    let initial = []
    let result = unitedArr.reduce((acc, item)=>{
        if(!acc.includes(item)) {
            return acc.concat(item);
        } else {
          return acc.concat([])
        }
    }, initial)
    return result;
}
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))