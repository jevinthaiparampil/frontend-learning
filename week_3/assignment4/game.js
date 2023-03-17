function game(playerSelection) {
  const outcome = document.createElement('div');
  const selection = document.createElement('p.selection');
  const roundResult = document.createElement('p.roundOutput');
  const finalResult = document.createElement('p.finalOutput');

  const computerSelection = computerPlay(comChoice);

  let result= playRound(playerSelection, computerSelection);
  if( result == 1) {
    playerScore = playerScore+1;
  }
  else if (result == 0) {
    computerScore = computerScore+1;
  }
  else {}

  outcome.style.border = '1px solid black';
  outcome.style.backgroundColor = 'black';
  selection.style.color = 'white';
  roundResult.style.color = 'white';
  finalResult.style.color = 'white';
  selection.innerText = 'You :' + playerSelection + '  Computer : ' + computerSelection + '\n';
  roundResult.innerText = 'You :' + playerScore + 'Computer : ' + computerScore + '\n\n';

  if(playerScore == 5) {
    finalResult.innerText = 'You Win!' + '\n\n' + 'Wait! Loading next game!';
    setTimeout(function() {
      window.location.reload();
    }, 4000);
    playerScore = 0,
    computerScore = 0;
  }
  else if(computerScore == 5) {
    finalResult.innerText = 'You Loose!' + '\n\n' + 'Wait! Loading next game!';
    setTimeout(function() {
      window.location.reload();
    }, 4000);
    playerScore = 0,
    computerScore = 0;
  }
  else{}

  outcome.appendChild(selection);
  outcome.appendChild(roundResult);
  outcome.appendChild(finalResult);
  document.body.appendChild(outcome);
}

function computerPlay(comChoice) {
  const item = comChoice[Math.floor(Math.random() * comChoice.length)];
  return item;
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection == computerSelection) {
    return(-1);
  }
  else if((playerSelection == 'rock' && computerSelection== 'scissors') || (playerSelection == 'paper' && computerSelection== 'rock') || 
  (playerSelection == 'scissors' && computerSelection== 'paper')) {
    return(1);
  }
  else {
    return(0);
  }
}

const comChoice = ['rock', 'paper', 'scissors'];
var playerScore = 0,
computerScore = 0;
var playerSelection = "";
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener("click", () => {
      playerSelection = button.id;
      game(playerSelection);
    });
  });
