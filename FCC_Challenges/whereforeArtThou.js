// ---------------- My Own Solution 01 ----------------- //
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


// ---------------- Example Solution 01 ----------------- //
// Using .filter() and Object.keys()
// The point of this solution is to leverage the power of 'return' as a means of stopping 
// the loop for the object that doesn't have the property or doesn't have the property with a matched value.

function whatIsInAName2(collection, source) {

  // Code below didn't work as expected because the loop didn't get broken with return.
  // let sourceKeys = Object.keys(source);
  // return collection.filter(obj => {
  //   sourceKeys.forEach(sourceKey => {
  //     if(obj[sourceKey] !== source[sourceKey]) {
  //       return false;
  //     }
  //   })
  //   return true;
  // })

  // Code below works as expected because the 'return false' is applied to the filter method
  // which consequently discontinue the for loop of the 'obj'.
  let sourceKeys = Object.keys(source);

  return collection.filter(obj => {
    for(let i = 0; i < sourceKeys.length; i++) {
      if(obj[sourceKeys[i]] !== source[sourceKeys[i]]){
        return false;
      }
    }
    return true;
  })

}


// console.log(whatIsInAName([
//     { first: "Romeo", last: "Montague" }, 
//     { first: "Mercutio", last: null }, 
//     { first: "Tybalt", last: "Capulet" }
// ], 
// { last: "Capulet" }))

console.log(whatIsInAName2([
    { middle: "William", last: "Thompson", first: "Josh" }, 
    { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet" }
], 
{ middle:"William", first: "Josh" }))

