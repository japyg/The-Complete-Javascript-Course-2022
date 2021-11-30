'use strict';

//SCOPING PRACTICE
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;

//       //Creating NEW variable with the same name as outer scope's variable
//       const firstName = 'Kris';

//       //Reassigning outer scopes variable
//       output = `NEW OUTPUT!`;

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       console.log(add(2, 3));
//     }
//     console.log(millenial);
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jap';
// calcAge(1992);

//HOISTING AND TDZ PRACTICE

//Variables
// console.log(me);
// console.log(job);
// console.log(year);
// var me = 'Jap';
// let job = 'accountant';
// const year = 1992;

// //Functions

// //function declaration
// console.log(addDecl(1, 2));
// // console.log(addExp(1, 2));
// // console.log(addArrow);
// // console.log(addArrow(2,3));

// function addDecl(a, b) {
//   return a + b;
// }

// //function expression
// //if var, the error would be undefined
// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

//The THIS Keyword in Practice
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1992);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1992);

// const jap = {
//   year: 1992,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// jap.calcAge();

// const matilda = {
//   year: 2000,
// };

// matilda.calcAge = jap.calcAge;
// console.log(matilda);
// matilda.calcAge();

// const f = jap.calcAge;
// f();

//Regular Functions vs Arrow Functions
var firstName = `Matilda`;
const jap = {
  firstName: 'Jap',
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //Solution 2
    const isMillenial = () => {
      console.log(this);
      // console.log(this.year >= 1981 && this.year <= 1996);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

jap.greet();
jap.calcAge();
//the var created a property in the global window
//arrow functions do not have their own this keyword but will access its surrounding function which is the window

//Arguments Keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
// addExpr(2, 5);
// addExpr(2, 5, 3);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 3);
