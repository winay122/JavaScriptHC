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