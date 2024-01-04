const inputWeight = document.getElementById("weight");
const inputHeight = document.getElementById("height");
const btn = document.querySelector("button");
const result = document.getElementById("bmi-result");
const resultText = document.getElementById("bmi-text");

function calculate() {
  var weight = parseFloat(inputWeight.value);
  var height = parseFloat(inputHeight.value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter valid values");
    return;
  }

  var bmi = (weight / (height * height)).toFixed(2);

  if (bmi < 18.5) {
    resultText.textContent = "Under Weight"
  } else if (bmi < 25) {
    resultText.textContent = "Ideal Weight"
  } else if (bmi < 30) {
    resultText.textContent = "Slightly Overweight"
  } else if (bmi < 35) {
    resultText.textContent = "Obesity 1"
  } else if (bmi < 40) {
    resultText.textContent = "Obesity 2"
  } else {
    resultText.textContent = "Obesity 3"
  }

  result.textContent = bmi;
}

btn.addEventListener("click", calculate);