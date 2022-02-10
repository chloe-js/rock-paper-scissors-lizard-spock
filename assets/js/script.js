let p1Score = 0
let p2Score = 0

// Create a variable called activateDifficulty, it must initially hold a boolean state of false
// ** Your code below **
let activateDifficulty = false
// ** Your code above **

let playerChoice = document.querySelectorAll('.playerChoice');

const Player1Score = document.getElementById('scoresPlayer1');
const Player2Score = document.getElementById('scoresPlayer2');

// Create a variable called btnDifficulty and assign it the DIFFICULTY button 
// ** Your code below **
let btnDifficulty = document.getElementById('difficulty')
// ** Your code above **

const opponent = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

playerChoice.forEach(i => i.addEventListener('click', function () {
    checkResult(this.value);
}))

// Attach an event listener to it and provide the callback function as toggleDifficulty
// ** Your code below **
btnDifficulty.addEventListener('click', function () {
    toggleDifficulty();
})

// ** Your code above **

// create a function, name the function toggleDifficulty
// Within the function, reference the activateDifficulty variable, and re-assign it true or false whenever it is toggled
// HINT: ! <-- will provide the opposite of the boolean value provided. eg: !variableName 
// ** Your code below **
function toggleDifficulty (){
    !activateDifficulty;
}
// ** Your code above **

// Create a variable named weakness, assign this variable an empty object
// within the object create a key and a value 
// Each key should be an option the player has to play
// Each value should be an ARRAY which contains strings of each item that DEFEATS the specified key
// ** Your code below **
let weakness = { playerChoice, opponent}
// (this.value){ playerChoice, ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']};

// ** Your code above **

const rules = [
    ['Scissors', 'Paper'],
    ['Paper', 'Rock'],
    ['Rock', 'Lizard'],
    ['Lizard', 'Spock'],
    ['Spock', 'Scissors'],
    ['Scissors', 'Lizard'],
    ['Lizard', 'Paper'],
    ['Paper', 'Spock'],
    ['Spock', 'Rock'],
    ['Rock', 'Scissors']
]

function checkResult(res) {

    // As the checkResult function begins to run, check to see IF the activateDifficulty variable is true
    // If it is true, push into the opponent array, the VALUE of each STRING item in the ARRAY which exists in the USER SELECTED KEY
    // HINT: The KEY is the choice of the player, the VALUE is the ARRAY
    // ** Your code below **
    if (!activateDifficulty){
        opponent + playerChoice.value
    }
    // ** Your code above **

    // Instead of supplying 5, supply a reference to the opponent array, as a number.
    // ** Your code below **
    const opponentHand = opponent[Math.floor(Math.random() * opponent[0])];
    // ** Your code above **

    let result = false
    let draw = false;

    for (var i = 0; i < rules.length; i++) {
        if (res === rules[i][0] && opponentHand === rules[i][1]) {
            result = true;
        } else if (res === opponentHand) {
            draw = true;
        }
    }

    if (result && !draw) {
        alert(`${res} beats ${opponentHand} -- YOU WIN!`);
        Player1Score.innerText = String(++p1Score);
    } else if (!result && draw) {
        alert(`DRAW: ${res} vs ${opponentHand}`);
    } else if (!result && !draw) {
        alert(`${res} loses to ${opponentHand} -- YOU LOSE!`);
        Player2Score.innerText = String(++p2Score);
    }

    // Just before we leave the function, check to see IF the activateDifficulty variable is still true
    // If it is true, remove the items you pushed into the opponent array 
    // HINT: Ensure the opponent array reverts back to the original amount in the global scope
    // ** Your code below **
    else if (!activeDifficluty) {
        opponent - playerChoice.value
    }
    // ** Your code above **
}

document.getElementById('resetButton').addEventListener("click", function () {
    Player1Score.innerText = 0;
    Player2Score.innerText = 0;
});