

function tipCalc1(userInput) {
  var userInput = parseInt(document.getElementById('user_input').value);
  var ourAnswer = userInput * .20;
  var ourTotalAnswer = ourAnswer + userInput;
  console.log(ourAnswer);
  document.getElementById('tip').innerHTML = "Your Tip Amount is: " + ourAnswer;
  document.getElementById('total').innerHTML = "Your Total Amount is: " + ourTotalAnswer;
}

function tipCalc2(userInput) {
  var userInput = parseInt(document.getElementById('user_input').value);
  var ourAnswer = userInput * .18;
  var ourTotalAnswer = ourAnswer + userInput;
  console.log(ourAnswer);
  document.getElementById('tip').innerHTML = "Your Tip Amount is: " + ourAnswer;
  document.getElementById('total').innerHTML = "Your Total Amount is: " + ourTotalAnswer;
}

function tipCalc3(userInput) {
  var userInput = parseInt(document.getElementById('user_input').value);
  var ourAnswer = userInput * .15;
  var ourTotalAnswer = ourAnswer + userInput;
  console.log(ourAnswer);
  document.getElementById('tip').innerHTML = "Your Tip Amount is: " + ourAnswer;
  document.getElementById('total').innerHTML = "Your Total Amount is: " + ourTotalAnswer;
}
