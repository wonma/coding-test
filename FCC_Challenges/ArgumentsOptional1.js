function addTogether() {
  function isNumber(value) {
    return typeof value === 'number';
  }
  if (arguments.length == 2) {
    !isNumber(arguments[0]) || !isNumber(arguments[1])
      ? undefined
      : arguments[0] + arguments[1];
  } else if (arguments.length < 2) {
    return input => {
      return !isNumber(input) ? undefined : arguments[0] + input;
    };
  }
}

console.log(addTogether(5)(7));
