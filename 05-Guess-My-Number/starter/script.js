'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'DOM Manipulation 😎';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

let score = 20;
let randomNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';

    //When player wins
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🎉!';

    document.querySelector('.number').textContent = randomNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //when guess is too high
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is too low
  } else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('.score').textContent = 0;
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    randomNumber = 'Math.trunc(Math.random() * 20) + 1;';

    document.querySelector('.score').textContent = score;

    document.querySelector('.message').textContent = 'Start guessing...';

    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.number').textContent = '?';
  });
});
