let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const UserInput = document.querySelector('#guessField');
const GuessSlot = document.querySelector('.guesses');
const Remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let NumOfGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(UserInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter A Valid Number');
  } else if (guess <= 0) {
    alert('Please Do not Enter 0 or Below Zero A Valid Number');
  } else if (guess > 100) {
    alert('Please Do not Enter Higher Number');
  } else {
    prevGuess.push(guess);
    if (NumOfGuess === 11) {
      DisplayGuess(guess);
      DisplayMsg(
        `You Have Reached Limit So Game Is Over, Correct Number Was ${randomNumber}`
      );
      endGame();
    } else {
      DisplayGuess(guess);
      CheckGuess(guess);
    }
  }
}
function CheckGuess(guess) {
  if (guess === randomNumber) {
    DisplayMsg(`You Guess It Right`);
    endGame();
  } else if (guess < randomNumber) {
    DisplayMsg(`Number Is Too Low`);
  } else if (guess > randomNumber) {
    DisplayMsg(`Number Is Too High`);
  }
}
function DisplayGuess(guess) {
  UserInput.value = '';
  GuessSlot.innerHTML += `${guess}-`;
  NumOfGuess++;
  Remaining.innerHTML = `${12 - NumOfGuess}`;
}
function DisplayMsg(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  UserInput.value = '';
  UserInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start Game</h2>`;
  StartOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const StartAgain = document.querySelector('#newGame');
  StartAgain.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    NumOfGuess = [];
    GuessSlot.innerHTML = '';
    Remaining.innerHTML = `${10 - NumOfGuess}`;
    UserInput.removeAttribute('disabled');
    StartOver.removeChild(p);
    playGame = true;
  });
}
