//set initial variables
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//create a random target number
const generateTarget = () => Math.floor(Math.random() * 10);
//function to find distance between a guess and the target
const getAbsoluteDistance = (target, guess) => Math.abs(target - guess);

//check if userGuess is between 0-9, then find out is the userGuess or computerGuess is closer to the target and return true if user is closer or equal distance
const compareGuesses = (userGuess, computerGuess, target) => {
  if(userGuess < 10 && userGuess > 0) {
    const userDifference = getAbsoluteDistance(target, userGuess);
    const computerDifference = getAbsoluteDistance(target, computerGuess);
    return userDifference <= computerDifference;
  } else {
    alert('Yo, enter a guess between 0-9');
  };
};

//update the display score depending on who wins. Logic is in game.js
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  };
};

//increase the currentRoundNumber. Implemented in game.js
const advanceRound = () => currentRoundNumber++;