function BubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let j = 0; 
        while(j < arr.length - 1 - i) { // 여기가 완전히 새로웠음. j는 계속 0부터 시작임.
            //loop해야할 길이가 i만큼씩 줄어드는 것임. 
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
            j++;
        }

    }
    return arr;
}

console.time('Bubble');
console.log(BubbleSort([7, 2, 10, 3, 7, 1, 0, 2, 6])); // 
console.timeEnd('Bubble');