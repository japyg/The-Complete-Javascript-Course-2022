'use strict';

//Constructor Function and the New Operator
// const Person = function (firstName, birthYear) {
//   //Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //Never do methods inside a constructor function
//   // this.calcAge = function () {
//   //   console.log(2022 - this.birthYear);
//   // };
// };

// const jap = new Person('Jap', 1992);
// console.log(jap);

// const chikads = new Person('Chikads', 2013);
// console.log(chikads);

// console.log(jap instanceof Person);

// //Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };
// jap.calcAge();
// chikads.calcAge();
// console.log(jap.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jap));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// console.log(jap);
// console.log(jap.hasOwnProperty('firstName'));
// console.log(jap.hasOwnProperty('species'));

// //Prototype Chain
// console.log(jap.__proto__);
// console.log(jap.__proto__.__proto__);
// console.log(jap.__proto__.__proto__.__proto__);

// //Prototypal Inheritance on Built-in Objects
// const arr = [4, 5, 5, 5, 5, 2];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// //setting a new method in the prototype of array
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

//ES6 Clasess

//Class Expression
// const PersonCL = class {}

//Class Declaration
// class PersonCL {
//   //properties
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //methods
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey, ${this.fullName}!`);
//   }
//   get age() {
//     return 2022 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// const jap = new PersonCL('Jap DG', 1992);
// console.log(jap);
// jap.calcAge();
// console.log(jap.__proto__ === PersonCL.prototype);

// // PersonCL.prototype.greet = function () {
// //   console.log(`Hey, ${this.firstName}!`);
// // };
// jap.greet();

//Setters and Getters
// const user = {
//   owner: 'Jap',
//   movement: [150, 500, 200, 600],

//   get latest() {
//     return this.movement.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movement.push(mov);
//   },
// };
// console.log(user.latest);
// user.latest = 50;
// console.log(user.movement);

// Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const jaesuk = Object.create(PersonProto);
// console.log(jaesuk);

// jaesuk.name = 'Jaesuk';
// jaesuk.birthYear = '1969';
// jaesuk.calcAge();
// console.log(jaesuk);

// const jihyo = Object.create(PersonProto);
// jihyo.init('Jihyo', 1982);
// console.log(jihyo);
// jihyo.calcAge();
// console.log(jihyo.__proto__);
