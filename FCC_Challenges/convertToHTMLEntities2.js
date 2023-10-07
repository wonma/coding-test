// const htmlEntities = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&apos;"
//   };

// Questions that have arisen
//
// 1. Can I use for loop for a string?
// ===> Yes, I can. 
// 2. Can a letter in a string be modified by reassigning?
// ===> No, it can't.

// Solution 1 - Using 'for loop' and 'switch statement'

function convertHTML1(str) {
    let strArr = str.split("");
    for (let i = 0; i < strArr.length; i++) {
        switch(strArr[i]){
            case "&":
                strArr[i] = "&amp;";
                break;

            case "<":
                strArr[i] = "&lt;";
                break;

            case ">":
                strArr[i] = "&gt;";
                break;
            
            case '"':
                strArr[i] = "&quot;";
                break;

            case "'":
                strArr[i] = "&apos;";
                break;
        }
    }
    return strArr.join("")
}

// console.log(convertHTML1("Dolce & Gabbana"))


// Solution 2 - Using 'Object Lookup' and 'str.replace()'

function convertHTML2(str) {
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    return str.replace(/[&<>"']/g,(match) => htmlEntities[match]);
}

// console.log(convertHTML2("Dolce & Gabbana"))


// Solution 3 - Using 'Object lookup' and 'map()'

function convertHTML3(str) {
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    return str
    .split("")
    .map((letter) => htmlEntities[letter] || letter)
    .join("") 
}

console.log(convertHTML3("Dolce & Gabbana"))