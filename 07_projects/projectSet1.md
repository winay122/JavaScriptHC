# Projects Related to DOM

## project link

[Click here for reference link](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 (Background Color Changer)

### Javascript code

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        body.style.backgroundColor = e.target.id
    })
})
```

# Solution code

## project 2 (BMI Calculator)

#### JavaScript code

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let bmiMessage;
    if (bmi < 18.6) {
      bmiMessage = 'Under weight';
    } else if (bmi > 24.9) {
      bmiMessage = 'Over Weight';
    } else {
      bmiMessage = 'Normal';
    }
    results.innerHTML = `<span>Your BMI = ${bmi} and You are ${bmiMessage}</span>`;
  }
});
```

# Solutio code

## Project-3 (Digital Clock)

### JavaScript code

```JavaScript
const time = document.getElementById('clock')


setInterval(function(){
  let date = new Date().toLocaleTimeString()
  time.innerHTML = date
}, 1000)
```

# Solution code

## Project-4 (Guess The Number)

### JavaScript code

```javascript
  let randomNumber = parseInt(Math.random() * 10 + 1);
console.log(randomNumber);

const userInput = document.getElementById('guessField');
const submit = document.querySelector('#sub');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter Nuber in Given Range');
  } else if (guess < 1) {
    alert('Please Enter number greater than 0');
  } else if (guess > 10) {
    alert('Please Enter number less than 11');
  } else {
    prevGuess.push(guess);
    if (numGuess === 3) {
      displayGuess(guess);
      displayMessage(`Game is Over , random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Your Guess is Right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Guess higher`);
  } else if (guess > randomNumber) {
    displayMessage(`Guess lower`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${4 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 10 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${4 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```