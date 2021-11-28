'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'DOM Manipulation 😎';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

let score = 20;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const style = function (backgroundColor, width) {
  document.querySelector('body').style.backgroundColor = backgroundColor;

  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  console.log(guess);

  //There is no number
  if (!guess) {
    displayMessage('No number!');

    //Correct number
  } else if (guess === randomNumber) {
    displayMessage('Correct Number!');

    document.querySelector('.number').textContent = randomNumber;

    style('#60b347', '30rem');

    // document.querySelector('body').style.backgroundColor = '#60b347';

    // document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }

    //Number is wrong
  } else if (guess !== randomNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;

      displayMessage(guess > randomNumber ? 'Too High!' : 'Too Low!');
    } else {
      displayMessage('Game Over!');
    }

    // Number is too high
    // } else if (guess > randomNumber) {
    //   document.querySelector('.message').textContent = 'Too high!';

    //   if (score > 1) {
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'Game Over!';
    //   }

    //   //Number is too low
    // } else if (guess < randomNumber) {
    //   document.querySelector('.message').textContent = 'Too low!';

    //   if (score > 1) {
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'Game Over!';
    //   }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;

  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';

  displayMessage('Start Guessing');

  document.querySelector('.guess').value = '';

  style('#222', '15rem');

  // document.querySelector('body').style.backgroundColor = '#222';

  // document.querySelector('.number').style.width = '15rem';
});
