function addTogether() {
  function isNumber(value) {
    return typeof value === 'number';
  }
  if (arguments.length == 2) {
    return !isNumber(arguments[0]) || !isNumber(arguments[1])
      ? undefined
      : arguments[0] + arguments[1];
  } else if (arguments.length < 2) {
      return !isNumber(input) ? undefined : input => {
          return arguments[0] + input;
      }
}

console.log(addTogether(5)(7));
