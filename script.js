// generates random string of rock, paper or scissor(core logic for computer input);
let getComputerChoice = function () {
  let computerInput = Math.trunc(Math.random() * 3) + 1;

  if (computerInput === 1) return "rock";
  if (computerInput === 2) return "paper";
  return "scissor";
};

//takes user-input of rock,paper or scissor;
const getUserChoice = function () {
  const userInput = prompt(
    "Enter rock, paper or scissor. Be careful typo will give computer a point!!",
  );
  return userInput.toLowerCase().trim();
};

//actual game logic;
const gameLogic = function () {
  //fucntion called and stored in respective variables;
  const computerInput = getComputerChoice();
  const userInput = getUserChoice();

  //condion for draw;
  if (computerInput === userInput) {
    console.log(`DRAW!! (You: ${userInput}, Computer: ${computerInput})`);
    return `DRAW!!`;
  }
  //condion for computer winning;
  else if (
    (computerInput === "rock" && userInput === "scissor") ||
    (computerInput === "paper" && userInput === "rock") ||
    (computerInput === "scissor" && userInput === "paper")
  ) {
    console.log(`COMPUTER WON (You: ${userInput}, Computer: ${computerInput})`);
    return `COMPUTER WON`;
  }
  //condion for user winning;
  else if (
    (userInput === "rock" && computerInput === "scissor") ||
    (userInput === "paper" && computerInput === "rock") ||
    (userInput === "scissor" && computerInput === "paper")
  ) {
    console.log(`YOU WON (You: ${userInput}, Computer: ${computerInput})`);
    return `YOU WON`;
  }

  //condition for invalid input from user
  else {
    console.log(`INVALID INPUT: "${userInput}". Lock in brodie😭😭😭`);
    return "INVALID INPUT";
  }
};

//count variable declared;
let humanWinCount = 0;
let computerWinCount = 0;

//score tracker;
for (let i = 0; i < 5; i++) {
  const winner = gameLogic();

  if (winner === "COMPUTER WON" || winner === "INVALID INPUT") {
    computerWinCount++;
  } else if (winner === "YOU WON") {
    humanWinCount++;
  }
}

//score shower
if (humanWinCount > computerWinCount) {
  console.log(
    `FINAL RESULT: YOU WON🥇: Your score(${humanWinCount}), Computer score(${computerWinCount})`,
  );
} else if (humanWinCount < computerWinCount) {
  console.log(
    `FINAL RESULT: YOU HESITATED🥈: Your score(${humanWinCount}), Computer score(${computerWinCount})`,
  );
} else {
  console.log(
    `FINAL RESULT: ONLY SELECT FEW POSSESS THE SKILLS TO DRAW A BEST OF 5😭😭😭: Your score(${humanWinCount}), Computer score(${computerWinCount})`,
  );
}
