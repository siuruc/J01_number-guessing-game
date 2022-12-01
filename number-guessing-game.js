const prompt = require("prompt-sync")({ sigint: true });

const name = prompt("What is your name? ");
console.log(`Hey there ${name}`);

let newgame = true;

while (newgame === true) {
  // Random number from 1 - 100
  let numberInMind = Math.floor(Math.random() * 100) + 1;
  // This variable is used to determine if the app should continue prompting the user for input
  let foundCorrectNumber = false;
  while (!foundCorrectNumber) {
    // Step 1: Get user input (don't forget that the input is a string)
    const guess = Number(prompt("Please guess a number "));

    // Step 2: Compare the guess to the secret answer and
    // let the user know the feedback (too large, too small, correct).
    if (Number.isInteger(guess) == false) {
      console.log("Not valid, please guess again");
    } else if (guess > 100 || guess < 1) {
      console.log("Choose between 1-100, please guess again");
    } else if (numberInMind > guess) {
      console.log("The number is too small");
    } else if (numberInMind < guess) {
      console.log("The number is too large");
    } else {
      console.log("YOU WON!!!");
      foundCorrectNumber = true;
    }
  }
  startnewgame = prompt("Do you want to start a new game? (Y/N) ");
  if (startnewgame == "Y") {
    newgame = true;
  } else if (startnewgame == "N") {
    console.log("BYE NOW");
    newgame = false;
  }
}
