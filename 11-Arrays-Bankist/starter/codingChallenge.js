// //Data 1:
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const checkDogs = function () {
//   const dogsJuliaCorrected = dogsJulia.slice(1, 3);
//   const dogsJK = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogsJK);
//   dogsJK.forEach(function (dogAge, i) {
//     if (dogAge >= 3) {
//       console.log(
//         `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
//       );
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy`);
//     }
//   });
// };

// // checkDogs();

// //Data 2:
// const dogsJulia2 = [9, 16, 6, 8, 3];
// const dogsKate2 = [10, 5, 6, 1, 4];

// const checkDogs2 = function () {
//   const dogsJuliaCorrected = dogsJulia2.slice(1, 3);
//   const dogsJK = dogsJuliaCorrected.concat(dogsKate2);
//   console.log(dogsJK);
//   dogsJK.forEach(function (dogAge, i) {
//     if (dogAge >= 3) {
//       console.log(
//         `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
//       );
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy`);
//     }
//   });
// };

// checkDogs2();

// Coding Challenge 2
//Data 1:
// const dogsJulia = [5, 2, 4, 1, 15, 8, 3];
// const dogsKate = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (ages) {
//   // 1 Human Age
//   const humanAge = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
//   console.log(humanAge);

//   // 2 Adult Dogs

//   const adultDogs = humanAge.filter(age => age >= 18);
//   console.log(adultDogs);

//   // 3 Average Age
//   const average = adultDogs.reduce((acc, age) => acc + age, 0);
//   console.log(average / adultDogs.length);
// };

// calcAverageHumanAge(dogsJulia);
// calcAverageHumanAge(dogsKate);

// Coding Challenge 3
// const dogsJulia = [5, 2, 4, 1, 15, 8, 3];
// const dogsKate = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = ages => {
//   const average = ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

//   console.log(average);
// };
// calcAverageHumanAge(dogsJulia);
// calcAverageHumanAge(dogsKate);

// Coding Challenge 4
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// //1
// /*
// Loopoverthe'dogs'arraycontainingdogobjects,andforeachdog,calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// */
// dogs.forEach((dog, _) => {
//   dog.recommendedFood = Math.round(dog.weight ** 0.75 * 28);
//   console.log(dog.recommendedFood);
// });
// console.log(dogs);

// //2
// /* Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky */

// const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));

// console.log(`curFood: ${dogSarah.curFood}`);
// console.log(`recommendedFood: ${dogSarah.recommendedFood}`);

// if (dogSarah.curFood < dogSarah.recommendedFood * 0.9) {
//   console.log('Eats too little');
// }
// if (dogSarah.curFood > dogSarah.recommendedFood * 1.1) {
//   console.log('Eats too much');
// }

// //simpler method
// console.log(
//   `Sarah's dog eats ${
//     dogSarah.curFood < dogSarah.recommendedFood * 0.9 ? 'too litle' : 'too much'
//   }`
// );

// //3
// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recommendedFood * 1.1)
//   .flatMap(dog => dog.owners);

// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recommendedFood * 0.9)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooLittle);

// //4
// console.log(`${ownersEatTooMuch.join(' and ')}'s dog eats too much!`);
// console.log(`${ownersEatTooLittle.join(' and ')}'s dog eats too little!`);

// //5
// console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// //6
// console.log(
//   dogs.some(
//     dog =>
//       dog.curFood >= dog.recommendedFood * 0.9 &&
//       dog.curFood <= dog.recommendedFood * 1.1
//   )
// );

// //7

// const dogsEatOkay = dogs.filter(
//   dog =>
//     dog.curFood >= dog.recommendedFood * 0.9 &&
//     dog.curFood <= dog.recommendedFood * 1.1
// );
// console.log(dogsEatOkay);

// //8
// const dogsSort = dogs
//   .slice()
//   .sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(dogsSort);
