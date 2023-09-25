function spinalCase(str) {
    const isUpperCase = (string) => /^[A-Z]*$/.test(string)
    const isLowerCase = (string) => /^[a-z]*$/.test(string)

    const strArr = str.split('');
    const newStrArr = [];
    for(let i = 0; i < strArr.length; i++) {
        if(strArr[i] === ' ' || '_' || '-') {
            newStrArr.push('-');
        } else if(strArr.indexOf(strArr[i]) !== 0 && isUpperCase(strArr[i])) {
            newStrArr.push(`-${strArr[i].toLowerCase()}`)
        } else {
            newStrArr.push(strArr[i]);
        }
    }

    return newStrArr.join('');
}

console.log(spinalCase('Thsi Is Spinal Tap'));

