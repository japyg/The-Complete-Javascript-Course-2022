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
