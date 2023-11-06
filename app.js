// GAME LOGIC

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function getComputerChoice() {
  let i = Math.floor(Math.random() * 3);
  let gameFigure = ["rock", "scissors", "paper"];
  return gameFigure[i];
}

function playRound(playerSelection, computerSelection) {
  let tmp = playerSelection.toLowerCase();

  switch (tmp) {
    case "rock":
      if (computerSelection == "rock") {
        roundWinner = "Draw";
      } else if (computerSelection == "scissors") {
        playerScore++;
        roundWinner = "Player";
      } else {
        computerScore++;
        roundWinner = "Computer";
      }
      break;
    case "scissors":
      if (computerSelection == "rock") {
        computerScore++;
        roundWinner = "Computer";
      } else if (computerSelection == "scissors") {
        roundWinner = "Draw";
      } else {
        playerScore++;
        roundWinner = "Player";
      }
      break;
    default: //paper
      if (computerSelection == "rock") {
        playerScore++;
        roundWinner = "Player";
      } else if (computerSelection == "scissors") {
        computerScore++;
        roundWinner = "Computer";
      } else {
        roundWinner = "Draw";
      }
  }
  console.log(playerScore, computerScore, roundWinner);
}

// UI
const scissorsBtn = document.querySelector("#scissors");
const paperBtn = document.querySelector("#paper");
const rockBtn = document.querySelector("#rock");
const signContainer = document.querySelector(".sign-container");
const playerScorePara = document.getElementById("playerScore");
const computerScorePara = document.getElementById("computerScore");
const scoreMessagePara = document.getElementById("scoreMessage");
const playerSignDiv = document.getElementById("playerSign");
const computerSignDiv = document.getElementById("computerSign");
const winnerIsH1 = document.createElement("h1");
winnerIsH1.classList.add("h1");

scissorsBtn.addEventListener("click", () => handleClick("scissors"));
paperBtn.addEventListener("click", () => handleClick("paper"));
rockBtn.addEventListener("click", () => handleClick("rock"));

function handleClick(playerSelection) {
  if (isGameOver()) {
    if (playerScore === 5) {
      winnerIsH1.textContent = "Player has won, congrats. 🎉";
      signContainer.appendChild(winnerIsH1);
    } else {
      winnerIsH1.textContent = "Computer has won. Better luck next time.";
      signContainer.appendChild(winnerIsH1);
    }
    return;
  }

  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  updateSign(playerSelection, computerSelection);
  updateScore();
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

function updateSign(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      playerSignDiv.textContent = "👊";
      break;
    case "scissors":
      playerSignDiv.textContent = "✌️";
      break;
    case "paper":
      playerSignDiv.textContent = "🤚";
      break;
  }

  switch (computerSelection) {
    case "rock":
      computerSignDiv.textContent = "👊";
      break;
    case "scissors":
      computerSignDiv.textContent = "✌️";
      break;
    case "paper":
      computerSignDiv.textContent = "🤚";
      break;
  }
}

function updateScore() {
  if (roundWinner === "Draw") {
    scoreMessagePara.textContent = "It's a draw.";
  } else if (roundWinner === "Player") {
    scoreMessagePara.textContent = "You won!";
  } else if (roundWinner === "Computer") {
    scoreMessagePara.textContent = "You lost.";
  }

  playerScorePara.textContent = `Player: ${playerScore}`;
  computerScorePara.textContent = `Computer: ${computerScore}`;
}
