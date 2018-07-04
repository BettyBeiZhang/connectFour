// Create variables for use in the game
export const config = {
  startingPlayer: 'yellow',
  playerPrefix: 'Current Player is: ',
  winPrefix: 'The winner is: ',
  countToWin: 4,
  takenMsg: 'This position is already taken. Please make another choice.',
  drawMsg: 'This game is a draw.',
};

// Define the empty board as a two-dimensional array, full of zeros
export const board = [
  [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]
];

// define the startingPlayer yellow as current player 1, current play will change
export const currentPlayer = config.startingPlayer;



