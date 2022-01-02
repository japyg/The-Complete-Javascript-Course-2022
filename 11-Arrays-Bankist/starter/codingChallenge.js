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
