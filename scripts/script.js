let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.random();
  if (choice < 1 / 3) {
    return "rock";
  }
  if (choice > 2 / 3) {
    return "scissors";
  } else {
    return "paper";
  }
}
// console.log(getComputerChoice());

function getHumanChoice() {
  const choice = prompt("rock, paper or scissors", "choose one").toLowerCase();
  if (choice == "rock" || choice == "paper" || choice == "scissors") {
    return choice;
  } else {
    alert("not a choice, try again");
    getHumanChoice();
  }
}
// console.log(getHumanChoice());

function playRound() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  if (humanSelection === computerSelection) {
    alert("Tie game!");
  } else if (humanSelection === "rock" && computerSelection === "scissors") {
    humanScore++;
    alert(humanSelection + " beats " + computerSelection + ". You win");
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    humanScore++;
    alert(humanSelection + " beats " + computerSelection + ". You win");
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    humanScore++;
    alert(humanSelection + " beats " + computerSelection + ". You win");
  } else {
    computerScore++;
    alert(computerSelection + " beats " + humanSelection + ". You lose");
  }
}

function playGame() {
  playRound();
  console.log("You " + humanScore + " - Computer " + computerScore);

  playRound();
  console.log("You " + humanScore + " - Computer " + computerScore);

  playRound();
  console.log("You " + humanScore + " - Computer " + computerScore);

  playRound();
  console.log("You " + humanScore + " - Computer " + computerScore);

  playRound();
  console.log("You " + humanScore + " - Computer " + computerScore);

  if (humanScore > computerScore) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
}

playGame();
