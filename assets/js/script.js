let playerChoice = document.querySelectorAll('.playerChoice');

let result = false;
let draw = false;

playerChoice.forEach(i => i.addEventListener('click', function () {
    checkResult(this.value)
}))

const opponent = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

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
    let p1Score = 0
    let p2Score = 0
function checkResult(res) {
    const opponentHand = opponent[Math.floor(Math.random() * 5)];
    

    rules.forEach(i => {
        console.log(res)
        console.log(opponentHand)
        if (res === opponentHand) {
            console.log(`${i[0] + ' - ' + res} vs ${i[1] + ' - ' + opponentHand} => TIE`)
            return draw = true;
        } 
        else if (res === i[0] && opponentHand === i[1]) {
            console.log(`${i[0] + ' - ' + res} vs ${i[1] + ' - ' + opponentHand} => WIN`)
            return result = true;
        } else {
            console.log(`${i[0] + ' - ' + res} vs ${i[1] + ' - ' + opponentHand} => LOSE`)
        }
    })
    console.log(result)
    console.log(res, ' vs ', opponentHand)

    if (draw){
        alert(`It a Draw!\n${res} vs ${opponentHand}`);
    } else if (result && draw === false){
        alert(`You win!\n${res} vs ${opponentHand}`); ///ternary operator (short if statement)
        incrementScore();
    } else if (!result && !draw){
        alert(`You lose!\n${res} vs ${opponentHand}`);
        incrementWrongAnswer();
    }
}

function incrementScore() {

    document.getElementById("scoresPlayer1").innerText = ++p1Score;

 }

function incrementWrongAnswer() {

    document.getElementById("scoresPlayer2").innerText = ++p2Score;

 }


/////////////////////////////////////////////////////hackernoon//////////////////////////////////////////////////
// const playButton = document.querySelector('#play');

// playButton.addEventListener('click', () => {

//     const computerChoiceID = getComputerChoice();
//     const computerChoice = OPTIONS[computerChoiceID];
//     const computerChoiceElement = document.querySelector('#computer-choice');
//     const output = document.querySelector('#output');
//     const userChoice = OPTIONS[userChoiceID];

//     let result = '';
//     computerChoiceElement.innerHTML = OPTIONS2EMOJI[computerChoiceID];

//     switch (`${computerChoice}-${userChoice}`) {
//         case `${ROCK}-${ROCK}`:
//         case `${SCISSORS}-${SCISSORS}`:
//         case `${PAPER}-${PAPER}`:
//         case `${SPOCK}-${SPOCK}`:
//         case `${LIZARD}-${LIZARD}`:
//             result = 'TIE 👔'
//             break;
//         case `${ROCK}-${SCISSORS}`:
//         case `${ROCK}-${LIZARD}`:
//         case `${SCISSORS}-${PAPER}`:
//         case `${SCISSORS}-${LIZARD}`:
//         case `${PAPER}-${ROCK}`:
//         case `${PAPER}-${SPOCK}`:
//         case `${SPOCK}-${ROCK}`:
//         case `${SPOCK}-${SCISSORS}`:
//         case `${LIZARD}-${PAPER}`:
//         case `${LIZARD}-${SPOCK}`:
//             result = 'COMPUTER WIN 😔💔 🤖🥇'
//             break;
//         case `${ROCK}-${PAPER}`:
//         case `${ROCK}-${SPOCK}`:
//         case `${SCISSORS}-${ROCK}`:
//         case `${SCISSORS}-${SPOCK}`:
//         case `${PAPER}-${SCISSORS}`:
//         case `${PAPER}-${LIZARD}`:
//         case `${SPOCK}-${PAPER}`:
//         case `${SPOCK}-${LIZARD}`:
//         case `${LIZARD}-${ROCK}`:
//         case `${LIZARD}-${SCISSORS}`:
//             result = 'YOU WIN ☺️🥇 🤖💔'
//             break;
//         default:
//             result = 'SOMETHING WRONG. TRY AGAIN. 🐛'

//             output.innerHTML = result;
//     }
// })


/////////////////////////////////love math help///////////////////////////////////////////////////////////////
// for (var i = 0; i < playerChoice.length; i++) {
//    playerChoice[i].addEventListener('click', function() {
//       const opponent = ['Rock', 'Paper', 'Scissors', 'Lizard','Spock'];
//       const opponentHand = opponent[Math.floor(Math.random() * 5)];

//       let playerHand = this.value;
//       // https://codepen.io/rpandrews/pen/oKRLxY // limited, included new icons and choices
//       if (playerHand === opponentHand) {
//         alert(`It's a draw!\n${playerHand} vs ${opponentHand}`);
//         incrementScore();
//       } else if (playerHand === 'Scissors' && opponentHand === 'Paper') {
//         alert(`You win!\n${playerHand} vs ${opponentHand}`);
//         incrementScore();
//       } else if (playerHand === 'Paper' && opponentHand === 'Rock') {
//         alert(`You win!\n${playerHand} vs ${opponentHand}`);
//         incrementScore();
//      }  else if (playerHand === 'Rock' && opponentHand === 'Lizard') {
//         alert(`You win!\n${playerHand} vs ${opponentHand}`);
//         incrementScore();
//      }  else if (playerHand === 'Lizard' && opponentHand === 'Spock') {
//         alert(`You win!\n${playerHand} vs ${opponentHand}`);
//         incrementScore();
//      }  else if (playerHand === 'Spock' && opponentHand === 'Scissors') {
//         alert(`You win!\n${playerHand} vs ${opponentHand}`);
//         incrementScore();
//      }  else if (playerHand === 'Rock' && opponentHand === 'Scissors') {
//         alert(`You win!\n${playerHand} vs ${opponentHand}`);
//         incrementScore();
//      }  else if (playerHand === 'Scissors' && opponentHand === 'Lizard') {
//         alert(`You win!\n${playerHand} vs ${opponentHand}`);
//         incrementScore();
//      }  else if (playerHand === 'Lizard' && opponentHand === 'Paper') {
//         alert(`You win!\n${playerHand} vs ${opponentHand}`);
//         incrementScore();
//      }  else if (playerHand === 'Paper' && opponentHand === 'Spock') {
//         alert(`You win!\n${playerHand} vs ${opponentHand}`);
//         incrementScore();
//      }  else if (playerHand === 'Spock' && opponentHand === 'Rock') {
//         alert(`You win!\n${playerHand} vs ${opponentHand}`);
//         incrementScore();
//      }  else {
//         alert(`You lose!\n${playerHand} vs ${opponentHand}`);
//         incrementWrongAnswer()
//       }
//    });
// }

// function incrementScore() {

//     let oldScore = playerChoice === ;
//     document.getElementById("score").innerText = ++oldScore;

//  }


// function incrementWrongAnswer() {

//     let oldScore = parseInt(document.getElementById("incorrect").innerText);
//     document.getElementById("incorrect").innerText = ++oldScore;

//  }