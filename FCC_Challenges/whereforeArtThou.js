// ---------------- My Own Solution ----------------- //
// 09/22/2023

function whatIsInAName(collection, source) {
    const newArr = [];
    for (let i = 0; i < collection.length; i++) { // Investigate all the objects in the collection
      let foundMismatch = false; // Prepare a dropout checker
  
      for (const sourceProp in source) { // Set a loop for all properties
        if(!foundMismatch) { // Move on to comparision only if the source's property exists in collection
          if(collection[i][sourceProp] !== source[sourceProp]) {
            foundMismatch = true; // Mark a dropout for the property
          }
        }
      }
      if(!foundMismatch){ // Allow the object to pass if it didn't get any dropout markups
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

console.log(whatIsInAName([
    { middle: "William", last: "Thompson", first: "Josh" }, 
    { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet" }
], 
{ middle:"William", first: "Josh" }))

