let playerChoice = document.querySelectorAll('.playerChoice');

let result = false;
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

function checkResult(res) {
    const opponentHand = opponent[Math.floor(Math.random() * 5)];

    rules.forEach(i => {
        console.log(res)
        console.log(opponentHand)
        if (res === i[0] && opponentHand === i[1]) {
            console.log(`${i[0] + ' - ' + res} vs ${i[1] + ' - ' + opponentHand} => WIN`)
            // alert(`You win!\n${res} vs ${opponentHand}`);
            return result = true;
        } else {
            console.log(`${i[0] + ' - ' + res} vs ${i[1] + ' - ' + opponentHand} => LOSE`)
            // alert(`You lose!\n${res} vs ${opponentHand}`);
        }
    })
    console.log(result)
    console.log(res, ' vs ', opponentHand)
}




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