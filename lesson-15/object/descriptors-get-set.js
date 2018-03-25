/*
 * 2 ways of adding getters and setters for object properties
 * in descriptors
 *
 */

var user = {
  firstName: 'Alex',
  secondName: 'Mask',
  gender: 'male',
  profession: 'engineer',
  salary: 2000,

  set name(value) {
    this.firstName = value.trim();
  }
};

Object.defineProperty(user, "fullName", {
  get: function() {
    return this.firstName + ' ' + this.secondName;
  }
});

user.name = ' Oleg ';

console.log('Setter for name: ', user.firstName);
console.log('Getter for name: ', user.fullName);
