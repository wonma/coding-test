// Other Solution 1.
function addTogether() {
  const [first, second] = arguments;
  // Requisite 1: The first argument must be a number. Whether there is the second argument or not is optional.
  // Requisite 2: If it has two arguments, the second argument must be a number so that it can return the sum of the two arguments.
  if (typeof first === 'number') {
    // if the first argument is not a number,
    // it will automatiically return undefined.
    if (typeof second === 'number') return first + second;
    // if the second argument is not a number,
    // it will automatiically return undefined.
    if (arguments.length === 1) return second => addTogether(first, second);
    // If it has one argument that is a number, it will return a function that takes a new argument and sum it up with the previously taken argument, using 'closure'.
  }
}

// Other Solution 2.
function addTogether() {
    const [first, second] = arguments;

    function sumAandB(second) {
        // return typeof second == 'number'
        //     ? first + second
        //     : undefined;
        if (typeof second == 'number') return first + second;
    }

    if (typeof first == 'number') {
        if (arguments.length == 1) return sumAandB;
        if (arguments.length == 2) return sumAandB(second);
    }
}
addTogether(2, 3);
}
