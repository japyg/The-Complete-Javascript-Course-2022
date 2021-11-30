'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      //Creating NEW variable with the same name as outer scope's variable
      const firstName = 'Kris';

      //Reassigning outer scopes variable
      output = `NEW OUTPUT!`;

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));
    }
    console.log(millenial);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jap';
calcAge(1992);
