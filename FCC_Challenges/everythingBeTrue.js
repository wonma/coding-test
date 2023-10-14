// My Solution
// function truthCheck(collection, pre) {
//   for (let i = 0; i < collection.length; i++) {
//     if (!collection[i][pre]) {
//       return false;
//     }
//   }
//   return true;
// }

// Another Solution using 'every()'
function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}

truthCheck(
  [
    { name: 'Quincy', role: 'Founder', isBot: false },
    { name: 'Naomi', role: '', isBot: false },
    { name: 'Camperbot', role: 'Bot', isBot: true }
  ],
  'isBot'
);
