var words = ["alpha","bravo","charlie","delta"];
function getword() {
    var rondomNumber = getRandomNumber(0, words.length-1);
    return words[randomNumber];
}
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
