//Coding Challenge #1

// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

//Average score function
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// //Each team's average score
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// //checkwinner function
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(`No winner`);
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

//Coding Challenge #2

// const calcTip = (num) => {
//   return num >= 50 && num <= 300 ? num * 0.15 : num * 0.2;
// };

// //test data
// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

//Coding Challenge #3
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI.toFixed(2);
//   },
// };
// console.log(mark.calcBMI());

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI.toFixed(2);
//   },
// };
// console.log(john.calcBMI());

// //log the results
// console.log(
//   `${mark.BMI > john.BMI ? "Mark" : "John"}'s BMI (${
//     mark.BMI > john.BMI ? mark.BMI : john.BMI
//   }) is higher than ${mark.BMI < john.BMI ? "Mark" : "John"}'s BMI (${
//     mark.BMI < john.BMI ? mark.BMI : john.BMI
//   })`
// );

//Coding Challenge 4
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = (num) => {
//   return num >= 50 && num <= 300 ? num * 0.15 : num * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));

//   totals.push(bills[i] + tips[i]);
// }
// console.log(bills, tips, totals);

//Bonus

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage(totals));
