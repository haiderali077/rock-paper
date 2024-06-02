let humanScore = 0;
let computerScore = 0;
let rounds = 0;

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissor";
      break;
  }
}

function getHumanChoice() {
  let choice = window.prompt("Enter your choice: ");
  return choice.toLowerCase();
}

function playGame() {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return;
    }
    if (humanChoice === "rock" && computerChoice === "scissor") {
      humanScore++;
    }
    if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
    }
    if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
    }
    if (humanChoice === "paper" && computerChoice === "scissor") {
      computerScore++;
    }
    if (humanChoice === "scissor" && computerChoice === "rock") {
      computerScore++;
    }
    if (humanChoice === "scissor" && computerChoice === "paper") {
      humanScore++;
    }
  }
}

while (rounds < 5) {
  playGame();
  rounds++;
}

if (computerScore > humanScore) {
  console.log("Computer won! computer score is " + computerScore);
}
if (computerScore < humanScore) {
  console.log("Human won! human score is " + humanScore);
}
if (computerScore == humanScore) {
  console.log("Its a tie.");
}
