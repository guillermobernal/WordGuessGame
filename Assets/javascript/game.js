var words = ["alpha","bravo","charlie","delta"];

var guessesleft = 10;
var lettersguessed = ""

var guesseslefthtml = document.getElementById("guessesleft");

var wins = document.getElementById("wins");

var losses = document.getElementById("losses");

var lettersguessedhtml = document.getElementById("lettersguessed");

var currentword = "";
var currentwordhtml = document.getElementById("currentword");

var currentwordBlank = "";




function getword() {
    var guesseslefthtml = document.getElementById("guessesleft");
    guesseslefthtml.textContent = guessesleft;
    var randomNumber = getRandomNumber(0, words.length-1);
    currentword = words[randomNumber];

   
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
      
    var guesseslefthtml = document.getElementById("guessesleft");
    var userGuess = event.key;
    guessesleft = guessesleft - 1;
    guesseslefthtml.textContent = guessesleft;


    var lettersguessedhtml = document.getElementById("lettersguessed");
    

    lettersguessed = lettersguessed + userGuess;
    lettersguessedhtml.textContent = lettersguessed;

     if (currentword.indexOf(userGuess) >= 0)
     {
        var letterIndex = currentword.indexOf(userGuess);
        currentwordBlank[letterIndex] = userGuess;
        var temp = currentwordBlank.split("");
        temp[letterIndex] = userGuess;
        currentwordBlank = temp.join("");
        //currentwordBlank = currentwordBlank.substr(0, letterIndex) + userGuess + currentwordBlank.substr(letterIndex);
        
        
        currentwordBlankhtml = document.getElementById("currentword"); 
        
        currentwordBlankhtml.textContent = currentwordBlank;

     }
     else
     {
         //letter not in word
     }
    
   };

  