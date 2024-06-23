let humanScore = 0;
let computerScore = 0;
const maxScore = 5;

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
}

const btnRock = document.querySelector("#btn-1");
const btnPaper = document.querySelector("#btn-2");
const btnScissor = document.querySelector("#btn-3");

btnRock.addEventListener("click", () => {
  if (computerScore < maxScore && humanScore < maxScore) {
    let computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
    checkResult();
  }
});

btnPaper.addEventListener("click", () => {
  if (computerScore < maxScore && humanScore < maxScore) {
    let computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
    checkResult();
  }
});

btnScissor.addEventListener("click", () => {
  if (computerScore < maxScore && humanScore < maxScore) {
    let computerSelection = getComputerChoice();
    playRound("scissor", computerSelection);
    checkResult();
  }
});

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return;
  }
  if (humanChoice === "rock" && computerChoice === "scissor") {
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissor") {
    computerScore++;
  } else if (humanChoice === "scissor" && computerChoice === "rock") {
    computerScore++;
  } else if (humanChoice === "scissor" && computerChoice === "paper") {
    humanScore++;
  }
}

function checkResult() {
  const body = document.body;

  body.append("Computer score is " + computerScore);
  body.append(document.createElement("br"));
  body.append("Human score is " + humanScore);
  body.append(document.createElement("br"));
  if (humanScore >= maxScore || computerScore >= maxScore) {
    if (computerScore > humanScore) {
      body.append("Computer won! Computer score is " + computerScore);
    } else if (computerScore < humanScore) {
      body.append("Human won! Human score is " + humanScore);
    } else {
      body.append("It's a tie.");
    }
  }
}
