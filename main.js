let humanScore = 0;
let computerScore = 0;
const maxScore = 5;

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

const btn = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");

btn.addEventListener("click", () => {
  if (computerScore < maxScore && humanScore < maxScore) {
    let computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
    checkResult();
  }
});

btn2.addEventListener("click", () => {
  if (computerScore < maxScore && humanScore < maxScore) {
    let computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
    checkResult();
  }
});

btn3.addEventListener("click", () => {
  if (computerScore < maxScore && humanScore < maxScore) {
    let computerSelection = getComputerChoice();
    playRound("scissor", computerSelection);
    checkResult();
  }
});

function playRound(string, computerChoice) {
  if (string === computerChoice) {
    return;
  }
  if (string === "rock" && computerChoice === "scissor") {
    humanScore++;
  }
  if (string === "rock" && computerChoice === "paper") {
    computerScore++;
  }
  if (string === "paper" && computerChoice === "rock") {
    humanScore++;
  }
  if (string === "paper" && computerChoice === "scissor") {
    computerScore++;
  }
  if (string === "scissor" && computerChoice === "rock") {
    computerScore++;
  }
  if (string === "scissor" && computerChoice === "paper") {
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
      return;
    } else if (computerScore < humanScore) {
      body.append("Human won! Human score is " + humanScore);
      return;
    } else {
      body.append("It's a tie.");
      return;
    }
  }
}

//const resultDiv = document.querySelector(".choices");

//const output = document.createElement("p");
//output.textContent = results();
//resultDiv.appendChild(output);
