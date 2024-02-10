'use strict';
let secretNumber = Math.trunc(Math.random()*20+1);
console.log(secretNumber);
let score = 20;
let highscore = 0;

 document.querySelector('.check').addEventListener('click',function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (score > 0) {
        
    
  if (!guess) {
    document.querySelector('.message').textContent = '⛔no number guessed!';
    score--;
    document.querySelector('.score').textContent = score;
  } 
  else if(guess === secretNumber){
    document.querySelector('.message').textContent = 'Congratulations🎉 You have guessed the correct number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#800';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
  } 
  else if(guess > secretNumber){
    document.querySelector('.message').textContent = 'guess is too high 📈';
    score--;
    document.querySelector('.score').textContent= score;
  }
  else if(guess < secretNumber){
    document.querySelector('.message').textContent = 'guess is too low 📉';
    score--;
    document.querySelector('.score').textContent = score;
  }
} else {
   document.querySelector('.message').textContent = 'u lost the game!👎';     
}
 });
 document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20)+1;
    document.querySelector('.message').textContent = 'start guessing...';

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#123';
    document.querySelector('.number').style.width = '15rem';
 });

