// function onkey(x) {
//   if (x.keyCode == 13)
//   magicEight();
// }
var a = [ "Yup!", "Fuhgeddaboudit", "Maybe", "what would your mother do?", "what would an Australian do?", "Then do the opposite", "Your answer here"]
//
// var a = [ "Yup!", "Fuhgeddaboudit", "Maybe", "what would your mother do?", "what would an Australian do?", "Then do the opposite", "Your answer here"]
// var userInput = document.getElementById('user_input');
// var answer = a[randomNum]

function magicEight() {
  var userInput = document.getElementById('user_input').value;
  console.log(userInput);
  var randomNum =  Math.floor(Math.random() * 6);
  var ourAnswer = a[randomNum];
  console.log(ourAnswer);
  document.getElementById('response').innerHTML = ourAnswer;
  document.getElementById('input').innerHTML = userInput;
}
