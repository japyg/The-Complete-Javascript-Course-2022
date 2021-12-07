'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

// const flight = 'LH1234';
// const jap = {
//   name: 'Jap de Guzman',
//   passport: 31263213612,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Ms. ' + passenger.name;

//   if (passenger.passport === 31263213612) {
//     alert('Check In');
//   } else {
//     alert('Wrong passport!');
//   }
// };
// checkIn(flight, jap);
// console.log(flight);
// console.log(jap);

// // Is the same as doing ...
// const flightNum = flight;
// const passenger = jap;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };
// newPassport(jap);
// checkIn(flight, jap);

// const oneWord = function (str) {
//   return str.replace(/ /g, ''.toLowerCase());
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// //JS uses callbacks all the time
// const youRock = function () {
//   console.log('🤘');
// };
// document.body.addEventListener('click', youRock);
// ['Jap', 'Chikads', 'Zamay'].forEach(youRock);

//Functions returning function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// const greeterHey = greet('Hey');
// greeterHey('Jap');
// greeterHey('Zamay');

// greet('hello')('Jap');

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hi')('Jap');
