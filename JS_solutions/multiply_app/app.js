// getting the elements from our HTML
const calculateButton = document.getElementById("calculateButton");
const resultElement = document.getElementById("restult");

// adding our event listener
// the button click triggers our function
calculateButton.addEventListener("click", function () {
  const number1 = document.getElementById("number1").value;
  const number2 = document.getElementById("number2").value;

  // if / else statement to check whether either of the numbers entered is empty / isn't a number! This is what Nan means.
  if (isNaN(number1) || isNaN(number2)) {
    resultElement.textContent = "Please enter valid numbers!";
    // else, multiply the two numbers.
  } else {
    let result = number1 * number2;
    resultElement.textContent = "Answer: " + "✨" + result + "✨";
  }
});

// const clearResult = document.getElementById("clearButton");

// clearResult.addEventListener('click', function() {
//     resultElement.textContent = '';
// });
