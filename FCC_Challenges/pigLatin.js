function translatePigLatin(str) {
    if(str.match(/[aeiou]/) == null) {
        return str + 'ay'
    }

    let strArr = str.match(/^[^aeiou]+/);

    if(!strArr) {
        return str + 'way'
    } else {
        let newStr = str.replace(strArr[0], '');
        console.log(newStr)
        return newStr + strArr[0] + 'ay';
    }
}

console.log(translatePigLatin("sssalgorithm"))