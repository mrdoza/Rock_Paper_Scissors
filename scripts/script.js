const header = document.createElement('header');
header.textContent = 'Rock - Paper - Scissors';
document.body.appendChild(header);
header.setAttribute("style", "text-align: center; text-decoration: underline; font-size: 30px; font-weight: bold;");


const buttonContainer = document.createElement('div');
document.body.appendChild(buttonContainer);
buttonContainer.id = "buttons";
buttonContainer.setAttribute("style", "height: 100px", "text-align: center;");

const rock = document.createElement('button');
rock.textContent = 'Rock';
buttonContainer.appendChild(rock);
rock.addEventListener('click', function(
  event) {
    playRound(event.target.textContent);
  });

const paper = document.createElement('button');
paper.textContent = 'Paper';
buttonContainer.appendChild(paper);
paper.addEventListener('click', function(event) {
  playRound(event.target.textContent);
});

const scissors = document.createElement('button');
scissors.textContent = 'Scissors';
buttonContainer.appendChild(scissors);
scissors.addEventListener('click', function(event) {
  playRound(event.target.textContent);
});



let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
  let choice = Math.random();
  if (choice < 1 / 3) {
    return "Rock";
  }
  if (choice > 2 / 3) {
    return "Scissors";
  } else {
    return "Paper";
  }
}


function playRound(a) {
  const humanSelection = a;
  const computerSelection = getComputerChoice();
  if (humanSelection === computerSelection) {
    alert("Tie game!");
  } else if (humanSelection === "Rock" && computerSelection === "Scissors") {
    humanScore++;
    alert(humanSelection + " beats " + computerSelection + ". You win");
  } else if (humanSelection === "Paper" && computerSelection === "Rock") {
    humanScore++;
    alert(humanSelection + " beats " + computerSelection + ". You win");
  } else if (humanSelection === "Scissors" && computerSelection === "Paper") {
    humanScore++;
    alert(humanSelection + " beats " + computerSelection + ". You win");
  } else {
    computerScore++;
    alert(computerSelection + " beats " + humanSelection + ". You lose");
  }
  scoreBoard.textContent = "You " + humanScore + " - Computer " + computerScore;
  if (humanScore === 5) {
    alert("Congratulations! You win!");
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    alert("Sorry, you lose!");
    humanScore = 0;
    computerScore = 0;
  }
}

const scoreBoard = document.createElement('div');
scoreBoard.textContent = "You " + humanScore + " - Computer " + computerScore;
document.body.appendChild(scoreBoard);
scoreBoard.setAttribute("style", "text-align: center; font-size: 20px; font-weight: bold;", "height: 100px");
