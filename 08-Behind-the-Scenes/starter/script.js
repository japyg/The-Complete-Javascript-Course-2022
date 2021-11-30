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
var me = 'Jap';
let job = 'accountant';
const year = 1992;

//Functions

//function declaration
console.log(addDecl(1, 2));
// console.log(addExp(1, 2));
// console.log(addArrow);
// console.log(addArrow(2,3));

function addDecl(a, b) {
  return a + b;
}

//function expression
//if var, the error would be undefined
const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;
