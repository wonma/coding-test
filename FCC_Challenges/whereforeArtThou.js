function whatIsInAName(collection, source) {
    const newArr = [];
    for (let i = 0; i < collection.length; i++) {
        // Check if the source's property exists in the collection item
        let foundMismatch = false;
        for (const prop in source) {
            if (collection[i].hasOwnProperty[prop]) {
                let isMatched = collection[i][prop] === source[prop];
                if (!isMatched) {
                    foundMismatch = true;
                }
            }
        }
        if(!foundMismatch) {
            newArr.push(collection[i]);
        }
    }
    return newArr;
}

console.log(whatIsInAName([
    { first: "Romeo", last: "Montague" }, 
    { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet" }
], 
{ last: "Capulet" }))


