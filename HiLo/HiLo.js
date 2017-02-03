var name = prompt("Welcome to the Hi Lo Game! Please Enter Your Name");
var randomNum = Math.floor(Math.random() *100)+1;
console.log(randomNum);
var keepTrack = 0;
console.log("Number of guesses: " + keepTrack);

function onkey(x) {
  if (x.keyCode == 13) {
    hiloGame();
  }
}

function hiloGame () {
  var userInput = parseInt(document.getElementById('user_input').value);
    if (isNaN(userInput)){
    document.getElementById('response').innerHTML="That's not a number, enter a valid number between 0-100"
    }
    else if (userInput < randomNum && keepTrack <= 7){
      document.getElementById('response').innerHTML="Your Guess is Too Low. Try Again!";
      keepTrack++;
      console.log("Number of guesses: " + keepTrack);
    }
    else if (userInput > randomNum && keepTrack <= 7){
      document.getElementById('response').innerHTML="Your Guess is Too High. Try Again!";
      keepTrack++;
      console.log("Number of guesses: " + keepTrack);
    }
    else if (userInput === randomNum){
        document.getElementById('response').innerHTML=("You Win" + "," + " " + name + "!");
    }
    else if (keepTrack > 6) {
        document.getElementById('response').innerHTML="You ran out of tries, YOU LOSE!"
    }
    document.getElementById('user_input').value=""
  }
