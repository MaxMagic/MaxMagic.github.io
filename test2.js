/* Themes:
70's?
90's?
NBA?
Back to the Future???? - This would be very cool
- Back to the future background
- Maybe include motion
Outline:
- Text will need to be written in divs
- Will need to look up fonts for Back to the Future
Steps:
- Press button to start game will start function
- 10 guesses
- Start with dashes equal to letters in word
    var s = "overpopulation";
    for (var i = 0; i < s.length; i++) {
    console.log(s.charAt(i));
}
and
    var s = "overpopulation";
    console.log(s[3]);
then get length of array - will need to start with an array with items and then empty array
- For each letter in word, print "_"
- Append "__" to array for each letter in word
- May need to format underscore
- Every wrong guess - sound is played
- Every correct solve - "Great Scott!"
- Words like: DeLorean, Marty McFly, Doc Brown
- Document KeyPress and save to variable
- If key press matches any letter in the array, replace dash with letter
    document.onkeyup = function(event) {
        var userGuess = event.key;
- If guess is incorrect, or correct, append letter to div below "_" and add 1 to turns
- Remove item from array using splice() method
- Will need 4 arrays: empty - for guesses, one with "__" for the display, one with the answers spelled out,
and one with the amnswers in whole-word form. 
- Random number generator will choose word to guess
- Decide how and if function will end
Variables:
- turnCount - Number of turns
- winCount - Number of wins
*/


var words = ["delorean", "marty", "jigowatts", "biff", "doc", "skateboard",
"lorraine", "george", "zemekis", "jennifer"];
var gameWord;
var baseSet;
var userGuess;
var displaySet = [];
var turnCount = 0;
var winCount = 0;
var lossCount = 0;

    // Start game function
    function start_game(){

    
        // Click button to start game
        // Enter your guess will print in text_box
        // Random word will be selected from array of words
            var wordChoice = Math.floor((Math.random() * 9) + 1);
            var gameWord = words[wordChoice];
        

        // Split function will separate random word into letters in array
            var baseSet = gameWord.split('');
            console.log(baseSet);

        // Append "__" to empty array for length of selected word and display "__" array to guess_area
            for (var i = 0; i < baseSet.length; i++){
                displaySet.push("___");
                var dElement = document.getElementById("guess_area");
                dElement.innerText = displaySet;
                document.onkeyup = function(event) {
                    if (turnCount > 10) {
                        return;
                    }
                    var userGuess = event.key;
                    // turnCount++;
                    var cElement  = document.getElementById("turns");
                    cElement.innerText = turnCount;
                    console.log(userGuess);
                    if (baseSet.includes(userGuess)){
                        var position = baseSet.indexOf(userGuess);
                        var dElement = document.getElementById("guess_area");
                        dElement.innerText = displaySet;
                        
                        // checkGame();
                        // console.log('displaySet? ', displaySet)
                        // console.log('baseSet? ', baseSet)
                        // console.log(typeof displaySet)
                        // console.log(typeof baseSet)
                        // console.log(displaySet === baseSet);
                        // console.log(displaySet.includes("___"))
                        // console.log(displaySet)
                    }
                    if (baseSet.includes(userGuess, position + 1)){
                        turnCount++;
                        console.log('position after? ', position)
                        var newPosition = baseSet.indexOf(userGuess,position + 1);
                        console.log('newPosition? ', newPosition)
                        displaySet.splice(newPosition, 1, userGuess);
                        var dElement = document.getElementById("guess_area");
                        dElement.innerText = displaySet;
                        }
                    else {
                        turnCount++;
                        var cElement  = document.getElementById("turns");
                        cElement.innerText = turnCount;
                    }
                    }
            } 
        

    // Guessing function

        // Listen for key entered
            // document.onkeyup = function(event) {
            //     var userGuess = event.key;
            //     var cElement  = document.getElementById("turns");
            //     cElement.innerText = turnCount;
            //     console.log(userGuess);
            //     if (baseSet.includes(userGuess)){
            //         var position = baseSet.indexOf(userGuess);
            //         displaySet.splice(position, 1, userGuess);
            //         var dElement = document.getElementById("guess_area");
            //         dElement.innerText = displaySet;
            //         }
            //         if (baseSet.indexOf(userGuess, position)){
            //             displaySet.splice(position, 1, userGuess);
            //             var dElement = document.getElementById("guess_area");
            //             dElement.innerText = displaySet;
            //         }
            //     else {
            //         turnCount++;
            //         var cElement  = document.getElementById("turns");
            //         cElement.innerText = turnCount;
            //     }
            //     }

        }
        // Save key to variable
        // Compare key to letters in array
        // If key in array, replace "__" with letter, add 1 to turnCount, add letter to guessed_letters
        // If key is not in array, add 1 to turnCount


    // Score function

        // If gameWord === baseSet, player wins, add 1 to winCount
            
        // function checkGame(){
        //     for (var i = 0; i < displaySet.length; ++i) {
        //         console.log(baseSet)
        //         if (displaySet[i] === baseSet[i] && turnCount <= 10){
        //             var wElement = document.getElementById("text_area");
        //             wElement.innerText = "You Win!";
        //         }
        //         else if (turnCount >= 10 && displaySet[i] !== baseSet[i]){
        //             var wElement = document.getElementById("text_area");
        //             wElement.innerText = "You Lose! Play Again?"; 
        //     }

        // }}
            

            
        // If turnCount > 10, player loses, add 1 to lossCount, ask if player wants to play
        // again with button (maybe confirm)

    // Restart game function

 