/* let admin, name;

name = "John";

admin = name;

alert(admin); */
/* let ourPlanetName = "earth";

let currentVisitor;
 */

/* function add7(number) {
  return number + 7;
}

function multiply(factor1, factor2) {
  return factor1 * factor2;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function lastLetter(str) {
  let len = str.length;
  return str.charAt(len - 1);
} */

/* let answer = parseInt(
  prompt("Please enter a number you would like to FizzBuzz up to: ")
);

function fizzBuzz(answer) {
  for (let step = 1; step <= answer; step++) {
    let printOut;

    if (step % 15 === 0) {
      console.log("FizzBuzz");
    } else if (step % 3 === 0) {
      console.log("Fizz");
    } else if (step % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(step);
    }
  }
}

fizzBuzz(answer); */

function getComputerChoice() {
  let i = Math.floor(Math.random() * 3);
  let gameFigure = ["rock", "scissor", "paper"];
  return gameFigure[i];
}

function playRound(playerSelection, computerSelection) {
  let tmp = playerSelection.toLowerCase();
  let winner;
  switch (tmp) {
    case "rock":
      if (computerSelection == "rock") {
        console.log("Draw!");
        winner = 0;
      } else if (computerSelection == "scissor") {
        console.log(
          "You Win! " + playerSelection + " beats " + computerSelection
        );
        winner = 1;
      } else {
        console.log("You Loose! Paper beats Rock");
        winner = -1;
      }
      return winner;
    case "scissor":
      if (computerSelection == "rock") {
        console.log("You Loose! Rock bets Scissors");
        winner = -1;
      } else if (computerSelection == "scissor") {
        console.log("Draw!");
        winner = 0;
      } else {
        console.log("You Win! Scissors beats Paper");
        winner = 1;
      }
      break;
    default: //paper
      if (computerSelection == "rock") {
        console.log("You Win! Paper beats Rock");
        winner = 1;
      } else if (computerSelection == "scissor") {
        console.log("You Loose! Scissor beats Paper");
        winner = -1;
      } else {
        console.log("Draw!");
        winner = 0;
      }
      return winner;
  }
}

function game() {
  let currentStanding = 0;
  for (i = 0; i < 5; i++) {
    choice = prompt("Welche Figur wählst du (Scissor, Rock, Paper)?");
    currentStanding += playRound(choice, getComputerChoice());
    console.log(currentStanding);
  }
  currentStanding < 0
    ? console.log("You loose 😭 ")
    : currentStanding == 0
    ? console.log("Draw")
    : console.log("Winner, winner, chicken diner!");
}

game();
