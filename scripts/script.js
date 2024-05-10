let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 1 / 3) {
        return "rock";
    } if (choice > 2 / 3) {
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

function playRound(humanChoice, computerChoice) {
    if (humanSelection === computerSelection) {
        alert("Tie game!");
    }
    else
        if (humanSelection === "rock" && computerSelection === "scissors") {
            alert(humanSelection + " beats " + computerSelection + "You win");
        } else if (humanSelection === "paper" && computerSelection === "rock") {
            alert(humanSelection + " beats " + computerSelection + "You win");
        } else if (humanSelection === "scissors" && computerSelection === "paper") {
            alert(humanSelection + " beats " + computerSelection + "You win");
        } else {
            alert(computerSelection + " beats " + humanSelection + "You lose");
        }
}

playRound(humanSelection, computerSelection);




