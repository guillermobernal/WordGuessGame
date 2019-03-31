var words = ["alpha","bravo","charlie","delta"];

var guessesleft = 12;
var lettersguessed = ""

var guesseslefthtml = document.getElementById("guessesleft");

var wins = document.getElementById("wins");

var losses = document.getElementById("losses");

var lettersguessedhtml = document.getElementById("lettersguessed");



function getword() {
    var guesseslefthtml = document.getElementById("guessesleft");
    guesseslefthtml.textContent = guessesleft;
    var randomNumber = getRandomNumber(0, words.length-1);
    return words[randomNumber];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  document.onkeyup = function(event) {

      
var guesseslefthtml = document.getElementById("guessesleft");
    var userGuess = event.key;
    guessesleft = guessesleft - 1;
    guesseslefthtml.textContent = guessesleft;


    var lettersguessedhtml = document.getElementById("lettersguessed");
    

lettersguessed = lettersguessed + userGuess;
lettersguessedhtml.textContent = lettersguessed;


      alert("User guess: " + userGuess);
      alert("Computer guess: " + computerGuess);

      for (var i = 0; i < words.length; i++)


    };

  