'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getcode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from ${getcode(from)} to ${getcode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(36);
  console.log(output);
}

// console.log('a+very+nice+string'.split('+'));
// console.log('Jap de Guzman'.split(' '));

// const [firstName, l, lastName] = 'Jap de Guzman'.split(' ');
// console.log(firstName, l, lastName);

// const newName = [
//   'Ms.',
//   firstName,
//   l.toUpperCase(),
//   lastName.toUpperCase(),
// ].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   // console.log(names);
//   const namesUpper = [];

//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   // console.log(namesUpper);

//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica and smith davis');
// capitalizeName('jonas schmedtmann');

// // Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '-').padEnd(35, '+'));

// //Real Life Application
// const maskCreditcard = function (number) {
//   // const str = number + '';
//   const str = String(number);
//   const last = str.slice(-4);
//   // console.log(last);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditcard(1234567823));
// console.log(maskCreditcard('4321567354'));

// // Repeat Method
// const message2 = 'Bad Weather... All Departures... Delayed... ';
// // console.log(message2.repeat(3));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛫'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(10);

////////////////
//Working with strings part II
// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //Fix capitalization in name
// const passenger = 'jOnas'; //Jonas
// const passengerLower = passenger.toLocaleLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //Comparing emails
// const email = 'hello@jap.io';
// const loginEmail = ' Hello@Jap.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// //easier version
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// //replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo'))
//   console.log('Part of the new Airbus family');

// //Practice Exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };
// checkBaggage('I have a laptop, some food and a pocket  Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

/////////////
//Working with Strings Part I
// const plane = 'A320';
// console.log(plane[0]);
// console.log(airline.length);

// //Index
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf('')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('You got lucky!');
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');
// // Data needed for first part of the section

// const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri'];

// const openingHours = {
//   [weekDays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   //ES6 enhanced object literals
//   openingHours,

//   //ES6 feature where functions can be shortened below
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient, otherIngredients);
//   },
// };

// //Map Iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try Again!'],
// ]);
// console.log(question);

// //Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //Quiz App
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// //my solution
// answer === question.get('correct')
//   ? console.log(question.get(true))
//   : console.log(question.get(false));

// //Jonas' solution
// console.log(question.get(question.get('correct') === answer));

// //Convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

//Maps
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

//Sets
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = new Set(staff);
// console.log(staffUnique);

// console.log(staffUnique.size);
// const arr = [...staffUnique];
// console.log(arr);

// staffUnique.add('Driver');
// console.log(staffUnique);

// staffUnique.delete('Driver');
// console.log(staffUnique);

// staffUnique.clear();
// console.log(staffUnique);

//Looping Objects

//Property Names
// const properties = Object.keys(openingHours);
// // console.log(properties);
// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// // console.log(openStr);

// //Values
// const values = Object.values(openingHours);
// // console.log(values);

// //Entries
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   // console.log(key, open, close);
//   console.log(`On ${key}, we open at ${open} and close at ${close}`);
// }

//Optional Chaining

// console.log(restaurant.openingHours.mon?.close);
// console.log(restaurant.openingHours?.mon?.close);

//Example application
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, the restaurant opens at ${open}`);
// }

// //Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderFood?.(0, 1) ?? 'Method does not exist');

// //Arrays
// const users = [
//   {
//     name: 'Jap',
//     email: 'sample@mail.com',
//   },
// ];
// console.log(users[0]?.name ?? 'User array empty');

//For-of Loop
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// for (const item of menu) console.log(item);

//displaying the index
// for (const item of menu.entries()) {
//   console.log(item);
// }

//destructuring the items
// for (const [item, index] of menu.entries()) {
//   console.log(`${item + 1}: ${index}`);
// }

//another method
// console.log(...menu.entries());

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// //Rest Pattern Destructuring
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// // const [pizza, , risotto, ...otherFood] = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu,
// // ];

// // console.log(pizza, risotto, otherFood);

// //Objects
// // const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(sat, weekdays);

// // //Rest Pattern Functions
// const add = function (...num) {
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) sum += num[i];
//   console.log(sum);
// // };
// // add(2, 3);
// // add(5, 3, 7, 2);

// // const x = [23, 5, 7];
// // add(...x);

// //Spread Operator
// // const arr = [7, 8, 9];
// // const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badNewArr);

// // const goodArr = [1, 2, ...arr];
// // console.log(goodArr);

// // console.log(...goodArr);

// // const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // console.log(newMenu);

// // //Copy Array
// // const mainMenuCopy = [...restaurant.mainMenu];

// // //Join 2 arrays
// // const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(menu);

// //Iterables: arrays, strings, maps, sets but NOT objects
// // const str = 'Jap';
// // const letters = [...str, '', 'S'];
// // console.log(letters);
// // console.log(...str);

// //Real-world example
// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1?"),
// //   prompt('Ingredient 2?'),
// //   prompt('Ingredient 3?'),
// // ];
// // console.log(ingredients);

// // restaurant.orderPasta(...ingredients);

// //Objects
// // const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
// // console.log(newRestaurant);

// // const restaurantCopy = { ...restaurant };
// // restaurantCopy.name = 'Ristorante Roma';
// // console.log(restaurantCopy.name, restaurant.name);

// // restaurant.orderDelivery({
// //   time: '22:30',
// //   address: 'Via del Sole, 21',
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });

// // restaurant.orderDelivery({
// //   address: 'Via del Sole, 21',
// //   starterIndex: 1,
// // });

// // //Destructuring Objects
// // const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// // const {
// //   name: restaurantName,
// //   openingHours: hours,
// //   categories: tags,
// // } = restaurant;
// // console.log(restaurantName, hours, tags);

// // //Default values
// // const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);

// // //Mutating variables
// // let a = 111;
// // let b = 999;
// // const obj = { a: 23, b: 7, c: 14 };

// // ({ a, b } = obj);
// // console.log(a, b);

// // //Nested Objects
// // const {
// //   fri: { open: o, close: c },
// // } = openingHours;
// // console.log(o, c);

// // let [main, , secondary] = restaurant.categories;
// // console.log([main, secondary]);

// // //Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // [main, secondary] = [secondary, main];
// // console.log([main, secondary]);

// //Old way
// // const arr = [1, 2, 3];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // //Destructuring Arrays
// // const [x, y, z] = arr;
// // console.log([x, y, z]);

// // console.log(restaurant.order(2, 0));

// // //Receive 2 return values from a function
// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // //Nested destructuring
// // const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log([i, j]);

// // const [i, , [j, k]] = nested;
// // console.log([i, j, k]);

// // //Default values
// // const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log([p, q, r]);
