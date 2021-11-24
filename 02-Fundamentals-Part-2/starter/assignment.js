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
