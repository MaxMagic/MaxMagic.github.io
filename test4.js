var words = ["delorean", "marty", "jigowatts", "biff", "doc", "skateboard",
"lorraine", "george", "zemekis", "jennifer"];
var gameWord;
var baseSet;
var userGuess;
var displaySet = [];
var turnCount = 0;
var winCount = 0;
var lossCount = 0;

function startGame(){
    var gameWord = words[Math.floor((Math.random() * 9) + 1)];
    var baseSet = gameWord.split('');
    for (var i = 0; i < baseSet.length; i++){
        displaySet.push("___");
        var dElement = document.getElementById("guess_area");
        dElement.innerText = displaySet;
        playGame(baseSet);
    }
}

function playGame(word){
    document.onkeyup = function(event) {
        turnCount++;
        console.log('turn:', turnCount);
        if (turnCount >= 10){
            return;
        } else { 
            var cElement  = document.getElementById("turns");
            cElement.innerText = turnCount;
            var userGuess = event.key;
            console.log('user guess: ', userGuess);
            console.log(word);
            console.log(word[0])
            newFunction(word, userGuess);
        }
    }
}

function newFunction(word, guess){
    if (word.includes(guess)){
        var position = word.indexOf(guess);
        displaySet.splice(position, 1, guess);
        var dElement = document.getElementById("guess_area");
        dElement.innerText = displaySet;
        check_game(word, displaySet);
        if (word.indexOf(guess, position + 1)){
            var position2 = word.indexOf(guess,position + 1);
            displaySet.splice(position2, 1, guess);
            var dElement = document.getElementById("guess_area");
            dElement.innerText = displaySet;
            check_game(word, displaySet);
        } else {
            return;
        }
    } else {
        var wElement = document.getElementById("text_box");
        wElement.innerText = "Try Again!"; 
}}

function checkGame (word, dSet){
    for (var j = 0; j < dSet.length; j++){
        if (dSet[j] === word[j] && turnCount <= 10){
            winCount++;
            var winElement = document.getElementById("wins");
            winElement.innerText = winCount;
            var wElement = document.getElementById("text_box");
            wElement.innerText = "You Win!";
        } else if (dSet[j] !== word[j] && turnCount >= 10){
            lossCount++;
            var lossElement = document.getElementById("losses");
            lossElement.innerText = lossCount;
            var wElement = document.getElementById("text_box");
            wElement.innerText = "You Lose! Refresh page to play Again!";
        } else {
            return;
        }
    }
}

function check_game (word, dSet){
    if (word.toString() == dSet.toString()){
        winCount++;
        var winElement = document.getElementById("wins");
        winElement.innerText = winCount;
        var wElement = document.getElementById("text_box");
        wElement.innerText = "You Win!";
    } else if (word.toString() != dSet.toString() && turnCount >= 10){
        lossCount++;
        var lossElement = document.getElementById("losses");
        lossElement.innerText = lossCount;
        var wElement = document.getElementById("text_box");
        wElement.innerText = "You Lose! Press Start Game to play Again!";
    } else {
        return;
    }
}

function arraysEqual(word, dSet) {
    if (word === dSet) return true;
    if (word == null || dSet == null) return false;
    if (word.length != dSet.length) return false;
  
    for (var i = 0; i < word.length; ++i) {
      if (word[i] !== dSet[i]) {
        lossCount++;
        var lossElement = document.getElementById("losses");
        lossElement.innerText = lossCount;
        var wElement = document.getElementById("text_box");
        wElement.innerText = "You Lose! Press Start Game to play Again!";
        return false;
    } else {
        winCount++;
        var winElement = document.getElementById("wins");
        winElement.innerText = winCount;
        var wElement = document.getElementById("text_box");
        wElement.innerText = "You Win!";
        return true;
    }
    } 
}

function winGame (word, dSet){
    if (_.isEqual(word, dSet)){
    winCount++;
    var winElement = document.getElementById("wins");
    winElement.innerText = winCount;
    var wElement = document.getElementById("text_box");
    wElement.innerText = "You Win!";
    }
    if (_.isEqual(word, dSet) = false && turnCount >= 10){
    lossCount++;
    var lossElement = document.getElementById("losses");
    lossElement.innerText = lossCount;
    var wElement = document.getElementById("text_box");
    wElement.innerText = "You Lose! Press Start Game to play Again!"; 
    } else {
        return;
    }
}