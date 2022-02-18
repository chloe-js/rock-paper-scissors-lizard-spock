let p1Score = 0;
let p2Score = 0;
let activateDifficulty = false;
let playerChoice = document.body.querySelectorAll('.player-control');
let btnDifficulty = document.getElementById('difficulty');
const player1Score = document.getElementById('player-1-score');
const player2Score = document.getElementById('player-2-score');
const opponent = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

// // click event listener for player choice
playerChoice.forEach(i => i.addEventListener('click', function () {
    checkResult(this.value);
}));

// // funtion for turn on Difficulty
btnDifficulty.addEventListener('click', toggleDifficulty);

function toggleDifficulty() {
    activateDifficulty = !activateDifficulty;
    if (activateDifficulty) {
        document.getElementById('difficulty-ref').innerText = 'hard!';
    } else if (!activateDifficulty) {
        document.getElementById('difficulty-ref').innerText = 'easy';
    }
}

// // winning hands values
const weakness = {
    Rock: ['Paper', 'Spock'],
    Paper: ['Lizard', 'Scissors'],
    Scissors: ['Rock', 'Spock'],
    Lizard: ['Scissors', 'Rock'],
    Spock: ['Paper', 'Lizard']
}

// // rules for who wins what hand
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

// // difficulty is on give computer extra winning hands from weakness
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

    // // if win get point if loose no point and draw no point
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
            alertElement.innerText = `CONGRATUALTIONS YOU WON! ${res} BEATS ${opponentHand}`;
        } else if (result === 'draw') {
            alertElement.innerText = `DRAW ${res} VS ${opponentHand}`;
        } else if (result === 'loss') {
            alertElement.innerText = `LOSER! ${opponentHand} BEATS ${res}`;
        }
        document.body.appendChild(alertElement);
        setTimeout(function () {
            document.getElementById('per-round-alert-popup').remove();
        }, 1000);

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
        alertElement.innerText = `CONGRATULATIONS ! YOU ARE THE CHAMPION ! YOUR SCORE: ${p1Score} OPPONENT SCORE: ${p2Score} `;
        document.body.appendChild(alertElement);
        setTimeout(function () {
            document.getElementById('champion-alert').remove();
        }, 7000);
        p1Score = 0;
        player1Score.innerText = String(0);
        p2Score = 0;
        player2Score.innerText = String(0);
    }

    function tryAgainAlertPopUp() {
        const alertElement = document.createElement('span');
        alertElement.setAttribute('class', 'popup-alert');
        alertElement.setAttribute('id', 'tryAgain-alert');
        alertElement.innerText = `YOU LOOSE! YOUR SCORE: ${p1Score} OPPONENT SCORE: ${p2Score}`;
        document.body.appendChild(alertElement);
        setTimeout(function () {
            document.getElementById('tryAgain-alert').remove();
        }, 7000);
        p1Score = 0;
        player1Score.innerText = String(0);
        p2Score = 0;
        player2Score.innerText = String(0);
    }
    // // after hand played, difficulty removed
    if (activateDifficulty) {
        opponent.pop();
        opponent.pop();
    }
}
// // reset button clean score and starts again
document.getElementById('reset-button').addEventListener("click", function () {
    p1Score = 0;
    player1Score.innerText = String(0);
    p2Score = 0;
    player2Score.innerText = String(0);
});