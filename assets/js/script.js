let p1Score = 0
let p2Score = 0
let activateDifficulty = false
let playerChoice = document.querySelectorAll('.playerChoice');
let btnDifficulty = document.getElementById('difficulty')
const player1Score = document.getElementById('scoresPlayer1');
const player2Score = document.getElementById('scoresPlayer2');
const opponent = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

playerChoice.forEach(i => i.addEventListener('click', function () {
    checkResult(this.value);
    console.log(this.value)
}))
btnDifficulty.addEventListener('click', toggleDifficulty)

function toggleDifficulty() {
    console.log(activateDifficulty);
    activateDifficulty = !activateDifficulty;
    console.log(activateDifficulty);
}
const weakness = {
    Rock: ['Paper', 'Spock'],
    Paper: ['Lizard', 'Scissors'],
    Scissors: ['Rock', 'Spock'],
    Lizard: ['Scissors', 'Rock'],
    Spock: ['Paper', 'Lizard']
}
console.log(weakness.Paper)

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

    if (activateDifficulty) {
        console.log('testing true')
        console.log(weakness[res], ' --access')
        opponent.push(weakness[res][0])
        opponent.push(weakness[res][1])
        console.log(activateDifficulty)
        console.log(opponent)

    } console.log(activateDifficulty)
    console.log(opponent)

    const opponentHand = opponent[Math.floor(Math.random() * opponent.length)];

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
        player1Score.innerText = String(++p1Score); 
        console.log(p1Score)
    } else if (!result && draw) {
        alert(`DRAW: ${res} vs ${opponentHand}`);
    } else if (!result && !draw) {
        alert(`${res} loses to ${opponentHand} -- YOU LOSE!`);
        player2Score.innerText = String(++p2Score);
    }

    if (activateDifficulty) {
        console.log('testing if still true')
        console.log(activateDifficulty, ' --accessing')
        console.log(opponent, '---this is the arry after')
        console.log(opponent)
            opponent.pop(weakness[0]);
        console.log(opponent.pop(weakness[0]), ' --after removed ')
        console.log(activateDifficulty)
        console.log(opponent, '---this is the after pop')
    } console.log(activateDifficulty)
}

document.getElementById('resetButton').addEventListener("click", function () {
    p1Score = 0;
    player1Score.innerText = 0;
    p2Score = 0;
    player2Score.innerText = 0;
}); 

btnDifficulty.addEventListener("click", function() {
    
    document.getElementById('level').innerText = 1;
  });