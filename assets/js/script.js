
let playerChoice = document.querySelectorAll('.playerChoice');

playerChoice.forEach(i => i.addEventListener('click', function () {
    checkResult(this.value);
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
    let result = false
    let draw = false;

    for(var i = 0; i < rules.length; i++){
        if(res === rules[i][0] && opponentHand === rules[i][1]){
            result = true;
        } else if(res === opponentHand){
            draw = true;
        }
    }

    if(result && !draw){
        alert(`${res} beats ${opponentHand} -- YOU WIN!`);
        document.getElementById('scoresPlayer1').innerText = String(++p1Score);
    } else if(!result && draw){
        alert(`DRAW: ${res} vs ${opponentHand}`);
    } else if(!result && !draw){
        alert(`${res} loses to ${opponentHand} -- YOU LOSE!`);
        document.getElementById('scoresPlayer2').innerText = String(++p2Score);
    }
}

  document.getElementById('resetButton').addEventListener("click", function() {
    document.getElementById('scoresPlayer1').innerText = 0;
    document.getElementById('scoresPlayer2').innerText = 0;
  });

// //more that one opentent hand//
//   document.getElementById('difficulty').addEventListener("click", function() {
//     function checkResult(resInc) {
//         const opponentHand = opponent[Math.floor(Math.random() * 5)][Math.floor(Math.random() * 5)];
//         let result = false
//         let draw = false;
    
//         for(var i = 0; i < rules.length; i++){
//             if(resInc === rules[i][0] && opponentHand === rules[i][1][1]){
//                 result = true;
//                 console.log(result)
//             } else if(res === opponentHand){
//                 draw = true;
//             }
//         }
    
//         if(result && !draw){
//             alert(`${res} beats ${opponentHand} -- YOU WIN!`);
//             document.getElementById('scoresPlayer1').innerText = String(++p1Score);
//         } else if(!result && draw){
//             alert(`DRAW: ${res} vs ${opponentHand}`);
//         } else if(!result && !draw){
//             alert(`${res} loses to ${opponentHand} -- YOU LOSE!`);
//             document.getElementById('scoresPlayer2').innerText = String(++p2Score);
//         }
//     }
//   });
  

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