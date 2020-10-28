const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';


const getPlayerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK
  } else if (randomValue < 0.67) {
    return PAPER
  } else {
    return SCISSORS
  }
};

const getWInner = (cChoice, pChoice) => {
  return cChoice === pChoice
    ? RESULT_DRAW
    : cChoice === ROCK && pChoice === PAPER ||
      cChoice === PAPER && pChoice === SCISSORS ||
      cChoice === SCISSORS && pChoice === ROCK
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
}

// const getWInner = function (cChoice, pChoice) {
//   if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS) {
//     return RESULT_PLAYER_WINS
//   } else if (cChoice === pChoice) {
//     return RESULT_DRAW
//   } else {
//     return RESULT_COMPUTER_WINS
//   }
// }

startGameBtn.addEventListener('click', function () {
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  console.log(`Player Choice ${playerChoice}`);
  console.log(`Computer Choice ${computerChoice}`);
  const winner = getWInner(computerChoice, playerChoice);
  console.log(winner)
});
