var words = ["alpha","bravo","charlie","delta"];
function getword() {
    var randomNumber = getRandomNumber(0, words.length-1);
    return words[randomNumber];
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
