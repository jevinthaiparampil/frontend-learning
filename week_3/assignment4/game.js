function game(playerSelection, computerSelection) {
  var playerScore = 0,
  computerScore = 0;
  for(let i=0; i<5; i++) {
    let playerSelection = prompt("Please enter rock or paper or scissors", "rock");
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    const computerSelection = computerPlay(array);
    console.log(computerSelection);
    let result= playRound(playerSelection, computerSelection);
    if( result == 1) {
      playerScore = playerScore+1;
    }
    else if (result == 0) {
      computerScore = computerScore+1;
    }
    else {
      playerScore = playerScore;
      computerScore = computerScore;
    }
  }
  if(playerScore < computerScore) {
    alert("You loose!");
  }
  else if(playerScore > computerScore) {
    alert("You Win!");
  }
  else {
    alert("Draw!");
  }
}

function computerPlay(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection == 'rock' && computerSelection== 'rock') {
    console.log("Tie");
    return(-1);
  }
  else if(playerSelection == 'rock' && computerSelection== 'paper') {
    console.log("You Lose! Paper beats Rock");
    return(0);
  }
  else if(playerSelection == 'rock' && computerSelection== 'scissors') {
    console.log("You Win! Rock beats Scissors");
    return(1);
  }
  else if(playerSelection == 'paper' && computerSelection== 'rock') {
    console.log("You Win! Paper beats Rock");
    return(1);
  }
  else if(playerSelection == 'paper' && computerSelection== 'paper') {
    console.log("Tie");
    return(-1);
  }
  else if(playerSelection == 'paper' && computerSelection== 'scissors') {
    console.log("You Lose! Scissors beats Paper");
    return(0);
  }
  else if(playerSelection == 'scissors' && computerSelection== 'rock') {
    console.log("You Lose! Rock beats Scissors");
    return(0);
  }
  else if(playerSelection == 'scissors' && computerSelection== 'paper') {
    console.log("You Win! Scissors beats Paper");
    return(1);
  }
  else if(playerSelection == 'scissors' && computerSelection== 'scissors') {
    console.log("Tie");
    return(-1);
  }
  else
  console.log("Invalid Input");
}

const array = ['rock', 'paper', 'scissors'];
game();