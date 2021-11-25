// Lecture: Values and Variables

// let country = "Philippines";
// let continent = "Asia";
// let population = 15;

// console.log(country);
// console.log(continent);
// console.log(population);

// Lecture: Data Types

// let isIsland = true;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// let, const and var
// language = "warayWaray";
// const country = "Philippines";
// const continent = "Asia";
// country = "South Korea";

//Lecture: Basic Operators
//1.
// countryInHalf = population / 2;
// console.log(countryInHalf);

//2.
// population += 1;
// console.log(population);

// //3.
// let finlandPopulation = 6000000;
// let isMorePopulation = population > finlandPopulation;
// console.log(isMorePopulation);

//4.
// let averagePopulation = 33;
// let compareAveragePopulation = population < averagePopulation;
// console.log(compareAveragePopulation);

//5.
// let description =
//   country +
//   " is" +
//   " in " +
//   continent +
//   " and" +
//   " its " +
//   population +
//   " people" +
//   " speak " +
//   language;
// console.log(description);

//Lecture: Template Literals
// let description = `${country} is in ${continent} and its ${population} people speak ${language}`;
// console.log(description);

//Lecture: If/Else Statement
// if (population > averagePopulation) {
//   console.log(`${country}' population is above average'`);
// } else {
//   console.log(
//     `${country}' population is ${
//       averagePopulation - population
//     } million below average`
//   );
// }

// Lecture: Type Conversion and Coercion
// "9" - "5"; 4
// "19" - "13" + "17"; 617
// "19" - "13" + 17; 23
// "123" < 57; false
// 5 + 6 + "4" + 9 - 4 - 2; 1143

// Lecture: Equality Operator
// const numNeighbors = Number(
//   prompt(`How many neighbour countries does your country have?`)
// );

// if (numNeighbors === 1) {
//   console.log(`Only 1 border!`);
// } else if (numNeighbors > 1) {
//   console.log(`More than 1 border`);
// } else {
//   console.log(`No borders`);
// }

//Lecture: Logical Operators
// if (language === "english" && population < 50 && !isIsland) {
//   console.log(`You should live in the ${country}`);
// } else {
//   console.log(`${country} does not meet your criteria :(`);
// }

//Lecture: Switch Statement
// const language = "chinese";

// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log(`MOST number of native speakers!`);
//     break;
//   case "spanish":
//     console.log(`2nd place in number of native speakers`);
//     break;
//   case "english":
//     console.log(`3rd place`);
//     break;
//   case "hindi":
//     console.log(`Number 4`);
//     break;
//   case "arabic":
//     console.log(`5th most spoken language`);
//     break;
//   default:
//     console.log(`Great language too :D`);
// }

//Lecture: Ternary Operator
// population > averagePopulation
//   ? console.log(`${country}' population is above average.'`)
//   : console.log(`${country}' population is below average.'`);

//Lecture: Basic Array Methods
// const neighbours = ["South Korea", "Japan", "Thailand"];

// neighbours.push("Utopia");
// console.log(neighbours);

// neighbours.pop();
// if (!neighbours.includes("Germany")) {
//   console.log(`Probably not an Asian country :D`);
// }
// console.log(neighbours);

// neighbours[neighbours.indexOf("Thailand")] = "Philippines";
// console.log(neighbours);

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
