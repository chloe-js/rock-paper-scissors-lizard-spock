let p1Score = 0
let p2Score = 0
let activateDifficulty = false
let playerChoice = document.body.querySelectorAll('.playerChoice');
// let playerChoice = document.getElementById('choices');
let btnDifficulty = document.getElementById('difficulty')
const player1Score = document.getElementById('scoresPlayer1');
const player2Score = document.getElementById('scoresPlayer2');
const opponent = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

console.log(playerChoice)
// // click event listener for player choice
playerChoice.forEach(i => i.addEventListener('click', function () {
    checkResult(this.value);
    console.log(this.value)
}))
btnDifficulty.addEventListener('click', toggleDifficulty)
console.log(playerChoice)
// // funtion for turn on Difficulty
function toggleDifficulty() {
    console.log(activateDifficulty);
    activateDifficulty = !activateDifficulty;

    if (activateDifficulty) {
        document.getElementById('level').innerText = ' HARD! ';
    } else if (!activateDifficulty) {
        document.getElementById('level').innerText = ' EASY ';
    }

    console.log(activateDifficulty);
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
        console.log('testing true')
        console.log(weakness[res], ' --access')
        opponent.push(weakness[res][0])
        opponent.push(weakness[res][1])
        console.log(activateDifficulty)
        console.log(opponent)
    }
    console.log(activateDifficulty)
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


    // // if win get point if loose no point and draw no point

    if (result && !draw) {
        // alert(`${res} beats ${opponentHand} -- YOU WIN!`);
        player1Score.innerText = String(++p1Score);
        console.log(p1Score)
        winnerAlertPopUp()
        firstToFive() //////////////////////////////////////////////////////////////////////
    } else if (!result && draw) {
        drawAlertPopUp()
        // alert(`DRAW: ${res} vs ${opponentHand}`);
    } else if (!result && !draw) {
        // alert(`${res} loses to ${opponentHand} -- YOU LOSE!`);
        player2Score.innerText = String(++p2Score);
        loserAlertPopUp()
        firstToFive();
    }

    ///////////////////////////POTENTIAL WINNER ALERT POPUP WHEN eins hand////////////////////////////////////////      

    function winnerAlertPopUp() {
        const alertElement = document.createElement('span');
        alertElement.setAttribute('class', 'popup-alert');
        alertElement.setAttribute('id', 'winner-alert')
        console.dir(alertElement)
        alertElement.innerText = `CONGRATUALTIONS YOU WON! ${res} BEATS ${opponentHand}`;
        document.body.appendChild(alertElement);
        setTimeout(function () {
            document.getElementById('winner-alert').remove();
        }, 1000)
    }

       function loserAlertPopUp() {
        const alertElement = document.createElement('span');
        alertElement.setAttribute('class', 'popup-alert');
        alertElement.setAttribute('id', 'loser-alert')
        console.dir(alertElement)
        alertElement.innerText = `UNFORTUNATELY YOU LOST! ${opponentHand} BEATS ${res}`;
        document.body.appendChild(alertElement);
        setTimeout(function () {
            document.getElementById('loser-alert').remove();
        }, 1000)
    }
       function drawAlertPopUp() {
        const alertElement = document.createElement('span');
        alertElement.setAttribute('class', 'popup-alert');
        alertElement.setAttribute('id', 'draw-alert')
        console.dir(alertElement)
        alertElement.innerText = `ITS A DRAW! TRY AGAIN!`;
        document.body.appendChild(alertElement);
        setTimeout(function () {
            document.getElementById('draw-alert').remove();
        }, 1000)
    }
    ///////////////////////////POTENTIAL WINNER SCORE WHEN HIT 5 in a row////////////////////////////////////////  
    function firstToFive() {
        if (p1Score === 5) {
            // alert(`CONGRATUALTIONS PLAYER 1 YOU WON! YOUR SCORE: ${p1Score} PLAYER 2 SCORE: ${p2Score}`);
            championAlertPopUp()
            console.log(firstToFive)
            console.log(p1Score.length)
        } else if (p2Score === 5) {
            // alert(`YOU LOOSE! PLAYER 2 YOU WON! YOUR SCORE: ${p1Score} PLAYER 2 SCORE: ${p2Score}`);
            tryAgainAlertPopUp()
            console.log(firstToFive)
            console.log(p2Score.length)
        }
    }

    function championAlertPopUp() {
        const alertElement = document.createElement('span');
        alertElement.setAttribute('class', 'popup-alert');
        alertElement.setAttribute('id', 'champion-alert')
        console.dir(alertElement)
        alertElement.innerText = `CONGRATULATIONS ! YOU ARE THE CHAMPION ! YOUR SCORE: ${p1Score} OPPONENT SCORE: ${p2Score} `;
        document.body.appendChild(alertElement);
        setTimeout(function () {
            document.getElementById('champion-alert').remove();
        }, 7000)
            p1Score = 0;
            player1Score.innerText = 0;
            p2Score = 0;
            player2Score.innerText = 0;
    }
    function tryAgainAlertPopUp() {
        const alertElement = document.createElement('span');
        alertElement.setAttribute('class', 'popup-alert');
        alertElement.setAttribute('id', 'tryAgain-alert')
        console.dir(alertElement)
        alertElement.innerText = `YOU LOOSE! YOUR SCORE: ${p1Score} OPPONENT SCORE: ${p2Score}`;
        document.body.appendChild(alertElement);
        setTimeout(function () {
            document.getElementById('tryAgain-alert').remove();
        }, 7000)
            p1Score = 0;
            player1Score.innerText = 0;
            p2Score = 0;
            player2Score.innerText = 0;
    }
    // // after hand played, difficulty removed
    if (activateDifficulty) {
        console.log('testing if still true')
        console.log(activateDifficulty, ' --accessing')
        console.log(opponent, '---this is the arry after')
        console.log(opponent)
        opponent.pop(weakness[0]);
        console.log(opponent.pop(weakness[0]), ' --after removed ')
        console.log(activateDifficulty)
        console.log(opponent, '---this is the after pop')
    }
    console.log(activateDifficulty)
}
// // reset button clean score and starts again
document.getElementById('resetButton').addEventListener("click", function () {
    p1Score = 0;
    player1Score.innerText = 0;
    p2Score = 0;
    player2Score.innerText = 0;
});
