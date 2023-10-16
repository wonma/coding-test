// Any additional variables you declare have to be
// in the closure of the object and not properties.

const Person = function(first, last) {
  let firstName = first;
  let lastName = last;

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return this.getFirstName() + ' ' + this.getLastName();
  };

  this.setFirstName = function(first) {
    return (firstName = first);
  };

  this.setLastName = function(last) {
    return (lastName = last);
  };

  this.setFullName = function(first, last) {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  };
};

const bob = new Person('Bob', 'Ross');
console.log(bob.getFullName());
