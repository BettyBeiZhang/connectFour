import {Component, OnInit} from '@angular/core';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {board, config, currentPlayer} from '../../utils/utils';

/**
 * App-game Component
 * @export
 * @class GameComponent
 * @implements {onInit}
 */
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit  {
  config;
  board;
  currentPlayer;
  showButton: Boolean = false;

  constructor() {}

  ngOnInit() {
    this.board = board;
    this.currentPlayer = currentPlayer;
    this.config = config;
  }

  // Handle for update the board cell by color
  addDiscToBoard(color, xpos, ypos) {
    board[ypos][xpos] = color;
  }

  // Ensure the position will be filling in color isn't taken
  positionIsTaken(xpos, ypos) {
    const value = board[ypos][xpos];

    return value === 0 ? false : true;
  }

  // Handle for change player on button click
  changePlayer() {
    if (this.currentPlayer === 'yellow') {
      this.currentPlayer = 'red';
    } else {
      this.currentPlayer = 'yellow';
    }
  }

  // Function that handle drop to the bottom of the column, start at the bottom
  dropToBottom(x_pos, y_pos) {
    for (let y = 5; y > y_pos; y--) {
      if (board[y][x_pos] === 0) {
        return y;
      }
    }
    return y_pos;
  }

  // when all pieces on board are filled
  gameIsDraw() {
    for (let y = 0; y <= 5; y++) {
      for (let x = 0; x <= 6; x++) {
        if (board[y][x] === 0) {
          return false;
        }
      }
    }

    return true;
  }
  // ngStyle binded function to change/fill in the color in the cell
  getColor(xpos, ypos) {
    if (board[ypos][xpos] === 0) {
      return {
        'background-color': '#bbb',
      };
    } else {
      return {
        'background-color': board[ypos][xpos],
      };
    }
  }

  // Define horizontal win boolean 
  horizontalWin() {
    let currentValue = null,
        previousValue = 0,
        tally = 0;
  
      // Scan each row in series, tallying the length of each series. If a series
      // ever reaches four, return true for a win.
      for (let y = 0; y <= 5; y++) {
          for (let x = 0; x <= 6; x++) {
              currentValue = board[y][x];
              if (currentValue === previousValue && currentValue !== 0) {
                  tally += 1;
              } else {
                  // Reset the tally if you find a gap.
                  tally = 0;
              }
              if (tally === config.countToWin - 1) {
                  return true;
              }
              previousValue = currentValue;
          }

          // After each row, reset the tally and previous value.
          tally = 0;
          previousValue = 0;
      }
      return false;
  }

  // Define vetical win boolean 
  verticalWin() {
    let currentValue = null,
        previousValue = 0,
        tally = 0;

    // Scan each column in series, tallying the length of each series. If a
    // series ever reaches four, return true for a win.
    for (let x = 0; x <= 6; x++) {
        for (let y = 0; y <= 5; y++) {
            currentValue = board[y][x];
            if (currentValue === previousValue && currentValue !== 0) {
                tally += 1;
            } else {
                // Reset the tally if you find a gap.
                tally = 0;
            }
            if (tally === config.countToWin - 1) {
                return true;
            }
            previousValue = currentValue;
        }

        // After each column, reset the tally and previous value.
        tally = 0;
        previousValue = 0;
    }

    // No vertical win was found.
    return false;
}

// Define diagonal win boolean 
 diagonalWin() {
    let x = null,
        y = null,
        xtemp = null,
        ytemp = null,
        currentValue = null,
        previousValue = 0,
        tally = 0;

    // Test for down-right diagonals across the top.
    for (x = 0; x <= 6; x++) {
        xtemp = x;
        ytemp = 0;

        while (xtemp <= 6 && ytemp <= 5) {
            currentValue = board[ytemp][xtemp];
            if (currentValue === previousValue && currentValue !== 0) {
                tally += 1;
            } else {
                // Reset the tally if you find a gap.
                tally = 0;
            }
            if (tally === config.countToWin - 1) {
                return true;
            }
            previousValue = currentValue;

            // Shift down-right one diagonal index.
            xtemp++;
            ytemp++;
        }
        // Reset the tally and previous value when changing diagonals.
        tally = 0;
        previousValue = 0;
    }

    // Test for down-left diagonals across the top.
    for (x = 0; x <= 6; x++) {
        xtemp = x;
        ytemp = 0;

        while (0 <= xtemp && ytemp <= 5) {
            currentValue = board[ytemp][xtemp];
            if (currentValue === previousValue && currentValue !== 0) {
                tally += 1;
            } else {
                tally = 0;
            }
            if (tally === config.countToWin - 1) {
                return true;
            }
            previousValue = currentValue;

            xtemp--;
            ytemp++;
        }
        tally = 0;
        previousValue = 0;
    }

    for (y = 0; y <= 5; y++) {
        xtemp = 0;
        ytemp = y;

        while (xtemp <= 6 && ytemp <= 5) {
            currentValue = board[ytemp][xtemp];
            if (currentValue === previousValue && currentValue !== 0) {
                tally += 1;
            } else {
                tally = 0;
            }
            if (tally === config.countToWin - 1) {
                return true;
            }
            previousValue = currentValue;

            xtemp++;
            ytemp++;
        }
        tally = 0;
        previousValue = 0;
    }

    for (y = 0; y <= 5; y++) {
        xtemp = 6;
        ytemp = y;

        while (0 <= xtemp && ytemp <= 5) {
            currentValue = board[ytemp][xtemp];
            if (currentValue === previousValue && currentValue !== 0) {
                tally += 1;
            } else {
                tally = 0;
            }
            if (tally === config.countToWin - 1) {
                return true;
            }
            previousValue = currentValue;

            xtemp--;
            ytemp++;
        }
        tally = 0;
        previousValue = 0;
    }

    return false;
}


get showPlayAgain() {
    return {
        'display': 'inline-block',
    };
}

  // Function will tragger when user's click event
  btnClick(xpos, ypos) {
    const y_pos = this.dropToBottom(xpos, ypos);

    if (this.positionIsTaken(xpos, y_pos)) {
      alert(this.config.takenMsg);
      return;
    }
    this.addDiscToBoard(this.currentPlayer, xpos, y_pos);
    this.changePlayer();

    if ( this.horizontalWin() || this.verticalWin() || this.diagonalWin() ) {
        alert(this.config.winPrefix + board[y_pos][xpos]);
        this.showButton = true;
        return;
    } else if (this.gameIsDraw()) {
        alert(this.config.drawMsg);
        return;
    }
  }

  // Handle play again button click 
  playAgainClick() {
    location.reload();
  }
}
