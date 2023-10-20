function convertToRoman(num) {
  const lookUp = {
    '1': 'I',
    '2': 'II',
    '3': 'III',
    '4': 'IV',
    '5': 'V',
    '6': 'VI',
    '7': 'VII',
    '8': 'VIII',
    '9': 'IX',
    '10': 'X',
    '20': 'XX',
    '30': 'XXX',
    '40': 'XL',
    '50': 'L',
    '60': 'LX',
    '70': 'LXX',
    '80': 'LXXX',
    '90': 'XC',
    '100': 'C',
    '200': 'CC',
    '300': 'CCC',
    '400': 'CD',
    '500': 'D',
    '600': 'DC',
    '700': 'DCC',
    '800': 'DCCC',
    '900': 'CM',
    '1000': 'M'
  };

  //일의자리-(십의자리-천의자리-백의자리) 순서로 재정렬
  let splitNumArr = Array.from(String(num)).reverse();

  let romanUnits = '';
  let romanTens = '';
  let romanHundreds = '';
  let romanThousands = '';

  //일의자리
  if (Number(splitNumArr[0])) {
    romanUnits = lookUp[splitNumArr[0] * 1];
  }

  //십의자리
  if (Number(splitNumArr[1])) {
    romanTens = lookUp[splitNumArr[1] * 10];
  }

  //백의자리
  if (Number(splitNumArr[2])) {
    romanHundreds = lookUp[splitNumArr[2] * 100];
  }

  //천의자리
  if (Number(splitNumArr[3])) {
    for (let i = 0; i < splitNumArr[3]; i++) {
      romanThousands += lookUp['1000'];
    }
  }

  return romanThousands + romanHundreds + romanTens + romanUnits;
}

console.log(convertToRoman(505));
