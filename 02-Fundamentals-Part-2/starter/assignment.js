//Lecture: Functions
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const pinas = describeCountry("Philippines", 15, "Manila");
// const sokor = describeCountry("South Korea", 10, "Seoul");
// const france = describeCountry("France", 8, "Paris");
// console.log(pinas, sokor, france);

//Lecture: Function Declaration vs Expression

//function declaration
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// const pinas = percentageOfWorld1(30);
// const sokor = percentageOfWorld1(20);
// const china = percentageOfWorld1(1441);
// console.log(pinas, sokor, china);

//function expression
// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };
// const pinas = percentageOfWorld2(30);
// const sokor = percentageOfWorld2(20);
// const china = percentageOfWorld2(1441);
// console.log(pinas, sokor, china);

//Lecture: Arrow Functions
// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// const pinas = percentageOfWorld3(30);
// const sokor = percentageOfWorld3(20);
// const china = percentageOfWorld3(1441);
// console.log(pinas, sokor, china);

//Lecture: Functions calling other functions

// const describePopulation = (country, population) => {
//   const perc = percentageOfWorld3(population).toFixed(2);
//   return `${country} has ${population} million people,  which is about ${perc}% of the world`;
// };
// console.log(describePopulation("Philippines", 1441));

//Lecture: Introduction to Arrays
// const populations = [15, 20, 25, 30];
// console.log(populations === 4);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// const pop1 = percentageOfWorld1(populations[0]);
// const pop2 = percentageOfWorld1(populations[1]);
// const pop3 = percentageOfWorld1(populations[2]);
// const pop4 = percentageOfWorld1(populations[3]);

// const percentages = [pop1, pop2, pop3, pop4];
// console.log(percentages);

//Lecture: Intro to Objects
// const myCountry = {
//   country: "Philippines",
//   capital: "Manila",
//   language: "Filipino",
//   population: 15,
//   neighbours: ["South Korea", "Japan", "Thailand"],
// };

//Lecture: Dot Notation vs Bracket Notation

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );
// myCountry.population += 2;
// console.log(myCountry);

// myCountry["population"] -= 2;
// console.log(myCountry);

//Lecture: Object Methods

// const myCountry = {
//   country: "Philippines",
//   capital: "Manila",
//   language: "Filipino",
//   population: 15,
//   neighbours: ["South Korea", "Japan", "Thailand"],

//   describe: function () {
//     console.log(
//       ` ${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//     );
//   },

//   checkIsland: function () {
//     this.isIsland = this.neighbours.length === 0 ? true : false;
//     return this.isIsland;
//   },
// };
// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry.isIsland);

//Lecture: The For Loop
// for (let voter = 1; voter <= 50; voter++) {
//   console.log(`Voter number ${voter} is currently voting`);
// }

//Lecture: Looping Arrays
// const populations2 = [15, 20, 25, 30];
// const percentages2 = [];

// for (let i = 0; i < populations2.length; i++) {
//   percentages2.push((populations2[i] / 7900) * 100);
// }
// console.log(percentages2);

//Lecture: Looping Backwards and Loops in Loops

// const listOfNeighbors = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (i = 0; i < listOfNeighbors.length; i++) {
//   for (j = 0; j < listOfNeighbors[i].length; j++) {
//     // console.log();
//     console.log(`Neighbor: ${listOfNeighbors[i][j]}`);
//   }
// }
