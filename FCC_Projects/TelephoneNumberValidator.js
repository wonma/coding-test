function telephoneCheck(str) {
    //일단 사전 작업으로 white space지우기
    let trimmed = str.replace(/\s/, '');
  
    let findAllNumbers = /[0-9]/g;
    let lengthOfNums = trimmed.match(findAllNumbers).length;
    console.log(lengthOfNums)
  
    // 특수문자가 있는 경우 바로 false 리턴
    let hasSpecials = /[^0-9\-\s]/g;
    if(hasSpecials.test(trimmed)) return false;
    
    // 숫자가 10미만이거나 12이상인경우 바로 false 리턴
    if(lengthOfNums < 10 || lengthOfNums >= 12 ) {
      console.log('hi')
      return false;
    };
  
   //숫자 11개인데 시작이 '1'이 아니면 바로 false 리턴
  if(lengthOfNums == 11 && trimmed[0] !== '1' ) {
    return false;
  };
  
   //숫자 11개이면 일단 앞에 '1'을 삭제하고 reassign하여 숫자 10개로 만들기
   let cCodeRemoved = ''
   if(lengthOfNums == 11) {
    cCodeRemoved = trimmed.substring(1);
    }
  
    let hasLiner = /[()-]/g
    if(hasLiner.test(cCodeRemoved)) {
      return 'hi'
    }
    // -혹은 괄호를 포함하는 포맷일 경우
      // 우선 마지막 '세자리-네자리'를 지운다 
      // a. 세자리-
      // b. 괄호열기 세자리 괄호닫기               
  }
  
  // telephoneCheck("555-555-5555");
  console.log(telephoneCheck('1 555-555-5555'))