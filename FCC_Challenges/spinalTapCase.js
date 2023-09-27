function spinalCase(str) {
    let newStr = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    return newStr.toLowerCase().replace(/[_|\s]+/g, '-');
}

console.log(spinalCase('This Is_SpinalCoolTap'));


function spinalCase2(str) {
    let newStr = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    return newStr.toLowerCase().split(/[\s|_]+/).join('-')
}

console.log(spinalCase2('This Is_SpinalCoolTap'));

