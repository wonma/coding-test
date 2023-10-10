function smallestCommons(arr){
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);
    let multiple = max;
    
    function isCommonMultiple(multiple, min, max) {
        for(let i = min; i < max; i++) {
            if(multiple % i !== 0) {
                return false;
            }
        }
        return true;
    }

    while(!isCommonMultiple(multiple, min, max)) {
        multiple += max;
    }

    return multiple;
}

console.log(smallestCommons([5,1]))