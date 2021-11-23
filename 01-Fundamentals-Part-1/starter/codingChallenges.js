// //Coding Challenge 1

// // BMI = mass / height ** 2 .. formula 1
// // BMI = mass / (height * height) .. formula 2

// //Test Data 1
// let markMass1 = 78;
// let markHeight1 = 1.69;
// let johnMass1 = 92;
// let johnHeight1 = 1.95;

// //Mark and John BMI
// let markBMI = (markMass1 / (markHeight1 * markHeight1)).toFixed(2);
// let johnBMI = (johnMass1 / johnHeight1 ** 2).toFixed(2);
// console.log(markBMI, johnBMI);

// //Whether Mark has higher BMI than John
// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// //Test Data 2
// let markMass2 = 95;
// let markHeight2 = 1.88;
// let johnMass2 = 85;
// let johnHeight2 = 1.76;

// //Mark and John BMI
// let markBMI2 = (markMass2 / markHeight2 ** 2).toFixed(2);
// let johnBMI2 = (johnMass2 / johnHeight2 ** 2).toFixed(2);
// console.log(markBMI2, johnBMI2);

// let markHigherBMI2 = markBMI2 > johnBMI2;
// console.log(markHigherBMI2);

//Coding Challenge 2: If/Else Statement
// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
// } else {
//   console.log(
//     `John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})!`
//   );
// }

// if (markBMI2 > johnBMI2) {
//   console.log(
//     `Mark's BMI (${markBMI2}) is higher than John's BMI (${johnBMI2})`
//   );
// } else {
//   console.log(
//     `John's BMI (${johnBMI2}) is higher than Mark's BMI (${markBMI2})!`
//   );
// }

//Coding Challenge 3
// const dolphinesAverageScore = ((96 + 108 + 89) / 3).toFixed(2);
// const koalasAverageScore = ((88 + 91 + 110) / 3).toFixed(2);
// console.log(dolphinesAverageScore, koalasAverageScore);

// if (dolphinesAverageScore > koalasAverageScore) {
//   console.log(`Dolphines team is the winner!`);
// } else if (koalasAverageScore === dolphinesAverageScore) {
//   console.log(`It's a draw!`);
// } else {
//   console.log(`Koalas team is the winner!`);
// }

//Bonus 1
// const dolphinesAverageScore = ((97 + 112 + 101) / 3).toFixed(2);
// const koalasAverageScore = ((109 + 95 + 123) / 3).toFixed(2);
// console.log(dolphinesAverageScore, koalasAverageScore);

// const minScore = 100;
// if (
//   dolphinesAverageScore >= minScore &&
//   dolphinesAverageScore > koalasAverageScore
// ) {
//   console.log(`Dolphines team is the winner`);
// } else if (
//   koalasAverageScore >= 100 &&
//   koalasAverageScore > dolphinesAverageScore
// ) {
//   console.log(`Koala's team is the winner`);
// } else {
//   console.log(`No winner`);
// }

//Bonus 2
// const dolphinesAverageScore = ((97 + 112 + 101) / 3).toFixed(2);
// const koalasAverageScore = ((109 + 95 + 106) / 3).toFixed(2);
// console.log(dolphinesAverageScore, koalasAverageScore);

// const minScore = 100;
// if (
//   dolphinesAverageScore >= minScore &&
//   dolphinesAverageScore > koalasAverageScore
// ) {
//   console.log(`Dolphines team is the winner`);
// } else if (
//   koalasAverageScore >= 100 &&
//   koalasAverageScore > dolphinesAverageScore
// ) {
//   console.log(`Koala's team is the winner`);
// } else if (
//   dolphinesAverageScore === koalasAverageScore &&
//   dolphinesAverageScore &&
//   koalasAverageScore >= minScore
// ) {
//   console.log(`It's a draw!`);
// } else {
//   console.log(`No winner`);
// }

//Coding Challenge 4: Ternary Operator

//Data 1: Test for bill values 275, 40 and 430
// const billValue = 430;

// const tip =
//   billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

// console.log(
//   `The bill was ${billValue}, the tip was ${tip}, and the total value ${
//     billValue + tip
//   } `
// );
