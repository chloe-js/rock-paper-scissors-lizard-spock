let p1Score = 0;
let p2Score = 0;
let activateDifficulty = false;
let playerChoice = document.body.querySelectorAll('.player-control');
let btnDifficulty = document.getElementById('difficulty');
const player1Score = document.getElementById('player-1-score');
const player2Score = document.getElementById('player-2-score');
const opponent = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

playerChoice.forEach(i => i.addEventListener('click', function () {
    checkResult(this.value);
}));

btnDifficulty.addEventListener('click', toggleDifficulty);

function toggleDifficulty() {
    activateDifficulty = !activateDifficulty;
    if (activateDifficulty) {
        document.getElementById('difficulty-ref').innerText = 'hard!';
    } else if (!activateDifficulty) {
        document.getElementById('difficulty-ref').innerText = 'easy';
    }
}

const weakness = {
    Rock: ['Paper', 'Spock'],
    Paper: ['Lizard', 'Scissors'],
    Scissors: ['Rock', 'Spock'],
    Lizard: ['Scissors', 'Rock'],
    Spock: ['Paper', 'Lizard']
}

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
        opponent.push(weakness[res][0]);
        opponent.push(weakness[res][1]);
    }

    const opponentHand = opponent[Math.floor(Math.random() * opponent.length)];
    let result = false;
    let draw = false;

    for (var i = 0; i < rules.length; i++) {
        if (res === rules[i][0] && opponentHand === rules[i][1]) {
            result = true;
        } else if (res === opponentHand) {
            draw = true;
        }
    }

    if (result && !draw) {
        player1Score.innerText = String(++p1Score);
        perRoundAlertPopUp('win');
        firstToFive();
    } else if (!result && draw) {
        perRoundAlertPopUp('draw');
    } else if (!result && !draw) {
        player2Score.innerText = String(++p2Score);
        perRoundAlertPopUp('loss');
        firstToFive();
    }

    function perRoundAlertPopUp(result) {
        const alertElement = document.createElement('span');
        alertElement.setAttribute('class', `popup-alert ${result}`);
        alertElement.setAttribute('id', 'per-round-alert-popup');
        if (result === 'win') {
            alertElement.innerText = `You won! +1 point ${res} BEATS ${opponentHand}`;
        } else if (result === 'draw') {
            alertElement.innerText = `Its a DRAW ${res} and ${opponentHand}, Try again!`;
        } else if (result === 'loss') {
            alertElement.innerText = `You lost! ${opponentHand} BEATS ${res}, Try again!`;
        }
        document.body.appendChild(alertElement);
        setTimeout(function () {
            document.getElementById('per-round-alert-popup').remove();
        }, 2000);

    }

    function firstToFive() {
        if (p1Score === 5) {
            championAlertPopUp();
        } else if (p2Score === 5) {
            tryAgainAlertPopUp();
        }
    }

    function championAlertPopUp() {
        const alertElement = document.createElement('span');
        alertElement.setAttribute('class', 'popup-alert');
        alertElement.setAttribute('id', 'champion-alert');
        alertElement.innerText = `CONGRATULATIONS ! YOU ARE CHAMPION ! YOUR SCORE: ${p1Score} OPPONENT: ${p2Score}`;
        document.body.appendChild(alertElement);
        setTimeout(function () {
            document.getElementById('champion-alert').remove();
        }, 8000);
        p1Score = 0;
        player1Score.innerText = String(0);
        p2Score = 0;
        player2Score.innerText = String(0);
    }

    function tryAgainAlertPopUp() {
        const alertElement = document.createElement('span');
        alertElement.setAttribute('class', 'popup-alert');
        alertElement.setAttribute('id', 'tryAgain-alert');
        alertElement.innerText = `UNFORTUNATELY YOU LOOSE! YOUR SCORE: ${p1Score} OPPONENT SCORE: ${p2Score}`;
        document.body.appendChild(alertElement);
        setTimeout(function () {
            document.getElementById('tryAgain-alert').remove();
        }, 8000);
        p1Score = 0;
        player1Score.innerText = String(0);
        p2Score = 0;
        player2Score.innerText = String(0);
    }
    if (activateDifficulty) {
        opponent.pop();
        opponent.pop();
    }
}
document.getElementById('reset-button').addEventListener("click", function () {
    p1Score = 0;
    player1Score.innerText = String(0);
    p2Score = 0;
    player2Score.innerText = String(0);
});