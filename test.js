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

var wordChoice = Math.floor((Math.random() * 9) + 1);
var gameWord = words[wordChoice];
var baseSet = gameWord.split('');
var wElement = document.getElementById("text_area");
var dElement = document.getElementById("guess_area");
var cElement  = document.getElementById("turns");

    // Start game function
    

    
        // Click button to start game
        // Enter your guess will print in text_box
        // Random word will be selected from array of words
            
        

        // Split function will separate random word into letters in array
        // Append "__" to empty array for length of selected word and display "__" array to guess_area
            
    function start_game(){
        for (var i = 0; i < baseSet.length; i++){
            displaySet.push("___");
            var dElement = document.getElementById("guess_area");
            dElement.innerText = displaySet;
            play_game();
        }}


    function play_game(){
        document.onkeyup = function(event) {
            if (turnCount > 10) {
                return;
            } else {
                var userGuess = event.key;
                console.log(userGuess);
                // turnCount++;
                var cElement = document.getElementById("turns");
                cElement.innerText = turnCount;
                if (baseSet.includes(userGuess)){
                    var position = baseSet.indexOf(userGuess);
                    displaySet.splice(position, 1, userGuess);
                    
                    dElement.innerText = displaySet;
                    check_game();
                }
                if (baseSet.includes(userGuess, position + 1)){
                    var newPosition = baseSet.indexOf(userGuess,position + 1);
                    displaySet.splice(newPosition, 1, userGuess);
                    
                    dElement.innerText = displaySet;
                    check_game();
                } 
                else {
                    turnCount++;
                    
                    cElement.innerText = turnCount;
                    check_game();
                }}}}
                
    function check_game(){
        if (displaySet.join() == baseSet.join() && turnCount <= 10){
            console.log(displaySet);
            wElement.innerText = ("You Win!");
        } else if (turnCount > 10){
            // var wElement = document.getElementById("text_area");
            wElement.innerText = ("You Lose! Play Again?");
        } else {
                return;
        }}
        


    // function play_game(){
    //     var cElement  = document.getElementById("turns");
    //     cElement.innerText = turnCount;
    //     console.log(userGuess);
    //     if (baseSet.includes(userGuess)){
    //         var position = baseSet.indexOf(userGuess);
    //         displaySet.splice(position, 1, userGuess);
    //         var dElement = document.getElementById("guess_area");
    //         dElement.innerText = displaySet;
    //     }
    //     if (baseSet.includes(userGuess, position + 1)){
    //         var newPosition = baseSet.indexOf(userGuess,position + 1);
    //         displaySet.splice(newPosition, 1, userGuess);
    //         var dElement = document.getElementById("guess_area");
    //         dElement.innerText = displaySet;
    //     } else {
    //         turnCount++;
    //         var cElement  = document.getElementById("turns");
    //         cElement.innerText = turnCount;
    //     }}
                
            
    // function end_game(){
    //     if (displaySet === baseSet && turnCount <= 10){
    //         var wElement = document.getElementById("text_area");
    //         wElement.innerText = "You Win!";
    //         } else if (turnCount > 10){
    //             var wElement = document.getElementById("text_area");
    //             wElement.innerText = "You Lose! Play Again?"; 
    //     }}

    //     play_game();
    //     end_game();
        

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

        
        // Save key to variable
        // Compare key to letters in array
        // If key in array, replace "__" with letter, add 1 to turnCount, add letter to guessed_letters
        // If key is not in array, add 1 to turnCount


    // Score function

        // If gameWord === baseSet, player wins, add 1 to winCount
            

            
        // If turnCount > 10, player loses, add 1 to lossCount, ask if player wants to play
        // again with button (maybe confirm)

    // Restart game function
 
