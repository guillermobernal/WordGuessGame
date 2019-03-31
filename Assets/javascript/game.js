var words = ["echo","bravo","charlie","delta", "tango", "whiskey"];

var guessesleft = 12;
var lettersguessed = ""

var guesseslefthtml = document.getElementById("guessesleft");

var wins = 0;
var winsHtml = document.getElementById("wins");

var losses = 0;
var lossesHtml = document.getElementById("losses");

var lettersguessedhtml = document.getElementById("lettersguessed");

var currentword = "";
var currentwordhtml = document.getElementById("currentword");

var currentwordBlank = "";
var correctGuesses = 0;





function getword() {
    correctGuesses = 0;
    lettersguessed = "";
    var lettersguessedhtml = document.getElementById("lettersguessed");
    lettersguessedhtml.textContent = "";

    guessesleft = 12;
    var guesseslefthtml = document.getElementById("guessesleft");    
    guesseslefthtml.textContent = guessesleft;

    var randomNumber = getRandomNumber(0, words.length-1);
    currentword = words[randomNumber];

    currentwordBlank = "";

   
    for (let index = 0; index < currentword.length; index++) {
        currentwordBlank = currentwordBlank + "_" + " ";

        
    }
    currentwordBlankhtml = document.getElementById("currentword"); 
    
    currentwordBlankhtml.textContent = currentwordBlank;
    
    return currentword;
    
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  document.onkeyup = function(event) {
      
    var userGuess = event.key;
    
    if (lettersguessed.indexOf(userGuess) < 0)
    {
        var guesseslefthtml = document.getElementById("guessesleft");
    
    guessesleft = guessesleft - 1;
    guesseslefthtml.textContent = guessesleft;


    var lettersguessedhtml = document.getElementById("lettersguessed");
    

    lettersguessed = lettersguessed + userGuess;
    lettersguessedhtml.textContent = lettersguessed;

     if (currentword.indexOf(userGuess) >= 0)
     {
        correctGuesses = correctGuesses + 1;
        if (correctGuesses == currentword.length){
            //The won
            var winsHtml = document.getElementById("wins");
            wins = wins + 1;
            winsHtml.textContent = wins;
            alert("You Won");
            getword();
        }
        else if (guessesleft == 0)
        {
            //they lost
            losses = losses + 1;
            var lossesHtml = document.getElementById("losses");
            lossesHtml.textContent = losses;
            alert("You Lost");
            getword();
        }
        else
        {
            //keep playing
            var letterIndex = currentword.indexOf(userGuess);
            currentwordBlank[letterIndex] = userGuess;
            var temp = currentwordBlank.split("");
            temp[letterIndex] = userGuess;
            currentwordBlank = temp.join("");
            //currentwordBlank = currentwordBlank.substr(0, letterIndex) + userGuess + currentwordBlank.substr(letterIndex);
            
            
            currentwordBlankhtml = document.getElementById("currentword"); 
            
            currentwordBlankhtml.textContent = currentwordBlank;
        }

     }  
     else
     {
        if (guessesleft == 0)
        {
            //they lost
            losses = losses + 1;
            var lossesHtml = document.getElementById("losses");
            lossesHtml.textContent = losses;
            alert("You Lost");
            getword();
        }
     }   
    }
    
   };

  