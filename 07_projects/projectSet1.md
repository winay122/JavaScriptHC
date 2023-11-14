# Projects Related to DOM

## project link

[Click here for reference link](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ColorChanger</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
      <button>Vinay Colour Changer</button>
    </nav>
    <div class="canvas">
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="colorChanger.js"></script>
  </body>
</html>
```

```css
html {
    margin: 0;
  }
  
  span {
    display: block;
  }
  .canvas {
    margin: 100px auto 100px;
    width: 80%;
    text-align: center;
  }
  
  .button {
    width: 100px;
    height: 100px;
    border: solid black 2px;
    display: inline-block;
  }
  
  #grey {
    background: grey;
  }
  
  #white {
    background: white;
  }
  #blue {
    background: blue;
  }
  #yellow {
    background: yellow;
  }
  

button {
    width: 10rem;
    height: 3rem;
    border: solid black 2px;
    background-color: bisque;
    font-weight: bolder;
    border-radius: 2rem;
    display: inline-block;
}

nav {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
}
```

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

## project 2

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