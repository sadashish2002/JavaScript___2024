let randomNum = parseInt(Math.round(Math.random()*100 +1));

const sumbit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi =   document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    sumbit.addEventListener('click',function(e){
       e.preventDefault()
       const guess = parseInt(userInput.value);
       validateGuess(guess)
    })
}
function validateGuess(guess){
       if(isNaN(guess)){
        alert('please enter a valid number')
          
    }else if(guess <1){
        alert('please enter a number more than 1')
    }else if(guess >100){
        alert('please enter a number less than 100')

    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            cleanupGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame()
        }else{
            cleanupGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`You guessed it right !`)
        endGame()
    }else if(guess < randomNum){
       displayMessage(`Number is TOOO low`)
    }else if(guess > randomNum){
       displayMessage(`Number is TOOO high`)

    }
}
function cleanupGuess(guess){
    //clean up method
   userInput.value = ''
   guessSlot.innerHTML += `${guess} `
   numGuess++;
   remaining.innerHTML = `${11- numGuess}`
}
function displayMessage(message){
 lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
// close game if guess is done 
userInput.value = ''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
startOver.appendChild(p);
playGame =false;
newGame();
}

function newGame(){
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
    randomNum = parseInt(Math.round(Math.random()*100 +1));
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled')

    startOver.removeChild(p);
    playGame = true;
});
}
