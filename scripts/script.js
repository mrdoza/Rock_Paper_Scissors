

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 1/3) {
        return "Rock";
    } if (choice > 2/3) {
        return "Scissors";
    } else {
        return "Paper";            
        }   
   }

console.log(getComputerChoice());