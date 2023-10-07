function convertHTML(str) {
    return str.replace(/[&<>\"']/g,(letter) => {
        switch(letter) {
          case "&":
          return "&amp;";
          break;
    
          case "<":
              return "&lt;";
          break;
    
          case">":
          return  "&gt;";
          break;
    
          case'"':
          return "&quot;";
          break;  
    
          case"'":
          return "&apos;";
          break;    
        }
      })
  }
  
  console.log(  convertHTML("Dolce & Gabbana"))