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
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// // const greeterHey = greet('Hey');
// // greeterHey('Jap');
// // greeterHey('Zamay');

// // greet('hello')('Jap');

// const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

// greetArrow('Hi')('Jap');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, passengerName) {
    console.log(
      `${passengerName} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      passengerName,
    });
  },
};
// lufthansa.book(239, 'Jap de Guzman');
// lufthansa.book(635, 'Harry Potter');
// console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does not work
// book(23, 'Sarah Williams');

//Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Ronald Weasley');
// console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
// book.call(swiss, 583, 'Hermione Granger');
// console.log(swiss);

// Apply Method -- not used anymore in JS
// const flightData = [583, 'Albus Dumbledore'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

//Bind Method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

// bookEW(23, 'Severus Snape');
// console.log(eurowings);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Fred Weasley');
// bookEW23('George Weasley');
// console.log(eurowings);

//With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application

// const addTax = (rate, value) => value + value * rate;
// // console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.12);
// addVAT = value => value + value * rate;

// console.log(addVAT(100));
// console.log(addVAT(23));

//Functions returning function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const tax = function (rate) {
//   return function (value) {
//     return rate * value + value;
//   };
// };

// const vat = tax(0.12);
// console.log(vat(100));
// console.log(vat(200));
