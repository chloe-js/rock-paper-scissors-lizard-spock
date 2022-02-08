let playerChoice = document.querySelectorAll('.playerChoice');

for (var i = 0; i < playerChoice.length; i++) {
   playerChoice[i].addEventListener('click', function() {
      const opponent = ['Rock', 'Paper', 'Scissors', 'Lizard','Spock'];
      const opponentHand = opponent[Math.floor(Math.random() * 5)];

      let playerHand = this.value;
      // https://codepen.io/rpandrews/pen/oKRLxY // limited, included new icons and choices
      if (playerHand === opponentHand) {
         alert(`It's a draw!\n${playerHand} vs ${opponentHand}`);
      } else if (playerHand === 'Scissors' && opponentHand === 'Paper') {
         alert(`You win!\n${playerHand} vs ${opponentHand}`);
      } else if (playerHand === 'Paper' && opponentHand === 'Rock') {
        alert(`You win!\n${playerHand} vs ${opponentHand}`);
     }  else if (playerHand === 'Rock' && opponentHand === 'Lizard') {
        alert(`You win!\n${playerHand} vs ${opponentHand}`);
     }  else if (playerHand === 'Lizard' && opponentHand === 'Spock') {
        alert(`You win!\n${playerHand} vs ${opponentHand}`);
     }  else if (playerHand === 'Spock' && opponentHand === 'Scissors') {
        alert(`You win!\n${playerHand} vs ${opponentHand}`);
     }  else if (playerHand === 'Rock' && opponentHand === 'Scissors') {
        alert(`You win!\n${playerHand} vs ${opponentHand}`);
     }  else if (playerHand === 'Scissors' && opponentHand === 'Lizard') {
        alert(`You win!\n${playerHand} vs ${opponentHand}`);
     }  else if (playerHand === 'Lizard' && opponentHand === 'Paper') {
        alert(`You win!\n${playerHand} vs ${opponentHand}`);
     }  else if (playerHand === 'Paper' && opponentHand === 'Spock') {
        alert(`You win!\n${playerHand} vs ${opponentHand}`);
     }  else if (playerHand === 'Spock' && opponentHand === 'Rock') {
        alert(`You win!\n${playerHand} vs ${opponentHand}`);
     }  else {
         alert(`You lose!\n${playerHand} vs ${opponentHand}`);
      }
   });
}