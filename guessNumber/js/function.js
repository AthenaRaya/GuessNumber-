



var randomNumber  = Math.floor(Math.random() * 99) + 1; // global var generationg a random number between 1 and 99.99

var gamesWon  = 0;
var gamesLost = 0;


var games= document.querySelector('#games');
var guesses = document.querySelector('#guesses');
var lastResult = document.querySelector('#lastResult');
var lowOrHi = document.querySelector('#lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit'); // guessSubmit button from html page 
var guessField = document.querySelector('.guessField');

var guessCount = 1; 
var resetButton = document.querySelector('#reset')
resetButton.style.display = 'none';

var resetButton;
guessField.focus();


//************functions**************

function checkGuess(){ // submit guesses in pressed 
  var userGuess = Number(guessField.value); // Once a guess is submitted, record the guess so the player can see previous guesses
  if(guessCount ===1){
    guesses.innerHTML = 'Previous guesses: ';
  }
  
  guesses.innerHTML += userGuess + ' ';
    
    
    if(userGuess === randomNumber){ // Next, determine if the number is correct ( If so, display a congratulations message. If not, display if the number is too high or too low
      lastResult.innerHTML = 'Congratulations! You got it right!';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.innerHTML= '';
      setGameOver();
      
      gamesWon = gamesWon + 1
      games.innerHTML = 'gameswon:' +gamesWon +'  gameslost:'+ gamesLost; 
      
      }else if(guessCount === 7) { 
        lastResult.innerHTML = 'Sorry, you lost!';
        setGameOver(); 
        gamesLost= gamesLost+ 1;
                    games.innerHTML = 'games Won:' +gamesWon +'  games Lost:'+ gamesLost;
      }else{
        lastResult.innerHTML ='wrong!';
        lastResult.style.backgroundColor ='red';
        if(userGuess < randomNumber){
          lowOrHi.innerHTML = 'Last guess was too low!';
        }else if (userGuess > randomNumber && userGuess <= 99 ) {
          lowOrHi.innerHTML = 'Last guess was too high!';
        }else if (userGuess > 99){
          lowOrHi.innerHTML = 'out of bound input';
          guessCount = guessCount -1;
        }else if(isNaN() === true){
          lowOrHi.innerHTML = 'Not a number! invaild input';
           guessCount = guessCount -1;
          
        }
        
      }
    guessCount++; // add to count : Determine, how many turns the player has left
  
    guessField.value = ''; 
    guessField.focus(); // refocus on the guessField
    
 }

guessSubmit.addEventListener('click',checkGuess); // Event listener waits for button of guessSumit 

function setGameOver(){
  guessField.disabled = true; //  disables the text input 
  guessSubmit.disabled = true; //  disabeles the submit button
  resetButton.style.display = 'inline'; // display reset button 
  resetButton.addEventListener('click',resetGame); // event listener for reset game. 
 
}


function resetGame() {
 
  guessCount = 1; //guessCount back down to 1
  
  var resetParas = document.querySelectorAll('.resultParas p'); // reset text content to blank
  for(var i = 0; i < resetParas.length; i++){
    resetParas[i].textContent = '';
   }
   
   
  resetButton.style.display = 'none'; // Hides the reset button
  
  guessField.disabled = 'false'; // Enables the form elements, and empties and focuses the text field
  guessSubmit.disabled = 'false';
  guessField.focus();
 
 
  lastResult.style.backgroundColor = 'white'; // Removes the background color 
  
  randomNumber = Math.floor(Math.random() * 99) + 1; // Generates a new random number 
}
//************functions* end *************

