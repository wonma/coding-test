function pairElement(str) {
    let dnaArr = str.split("");
    return dnaArr.map(el => {
        switch(el){
            case 'A':
            return ["A", "T"];
            case 'T':
            return ["T", "A"];
            case 'C':
            return ["C", "G"];
            case 'G':
            return ["G", "C"];
        }
    })
  }
  
console.log( pairElement("ATCGA"))