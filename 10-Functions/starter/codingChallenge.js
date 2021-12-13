// //1
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     const answer = Number(
//       prompt(`${this.question}\n${this.options.join(
//         '\n'
//       )}\n(Write option number)
//       `)
//     );

//     if (answer === 0) {
//       // this.answers.push([0]);
//     }

//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else {
//       //"Poll results are 13, 2, 4, 1".
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };
// // poll.registerNewAnswer();
// // console.log(poll);

// //2
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// //Bonus
// // Data1:[5,2,3]
// // Data2:[1,5,3,9,6,1]

// const pollDR = poll.displayResults;
// pollDR.call({ answers: [5, 2, 3] }, 'string');
// pollDR.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
