'use strict';

//Constructor Function and the New Operator
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do methods inside a constructor function
  // this.calcAge = function () {
  //   console.log(2022 - this.birthYear);
  // };
};

const jap = new Person('Jap', 1992);
console.log(jap);

const chikads = new Person('Chikads', 2013);
console.log(chikads);

console.log(jap instanceof Person);

//Prototypes
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};
jap.calcAge();
chikads.calcAge();
console.log(jap.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jap));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jap);
console.log(jap.hasOwnProperty('firstName'));
console.log(jap.hasOwnProperty('species'));

//Prototype Chain
console.log(jap.__proto__);
console.log(jap.__proto__.__proto__);
console.log(jap.__proto__.__proto__.__proto__);

//Prototypal Inheritance on Built-in Objects
const arr = [4, 5, 5, 5, 5, 2];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

//setting a new method in the prototype of array
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
