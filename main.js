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

let computerSelection = getComputerChoice();
do {
  const btn = document.querySelector("#btn-1");
  btn.addEventListener("click", () => {
    playRound("rock", computerSelection);
    checkResult();
  });

  const btn2 = document.querySelector("#btn-2");
  btn2.addEventListener("click", () => {
    playRound("paper", computerSelection);
    checkResult();
  });

  const btn3 = document.querySelector("#btn-3");
  btn3.addEventListener("click", () => {
    playRound("scissor", computerSelection);
    checkResult();
  });
} while (computerScore && humanScore < 5);

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
  if (humanScore && computerScore < 5) {
    console.log("Computer score is " + computerScore);
    console.log("Human score is " + humanScore);
  } else {
    if (computerScore > humanScore) {
      console.log("Computer won! computer score is " + computerScore);
    } else if (computerScore < humanScore) {
      console.log("Human won! human score is " + humanScore);
    } else {
      console.log("It's a tie.");
    }
  }
}

//const resultDiv = document.querySelector(".choices");

//const output = document.createElement("p");
//output.textContent = results();
//resultDiv.appendChild(output);
