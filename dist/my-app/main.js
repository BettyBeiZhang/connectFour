(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-game></app-game>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"],
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/game/game.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/game/game.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* style for GameComponent component template */\r\n.container {\r\n    background-color: #f57921;\r\n    width: 350px;\r\n    height: 700px;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n}\r\nh1 {\r\n  font-family: 'Galada', cursive;\r\n}\r\nh2 {\r\n    margin-top: 0px;\r\n}\r\nbutton {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  border: 0;\r\n  background: #bbb;\r\n}\r\n.play-again {\r\n  display: none;\r\n  margin-bottom: 10px;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  width: 50%;\r\n  background: #398bd4;\r\n  color: white;\r\n  text-decoration: none;\r\n  font-family: helvetica;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/game/game.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/game/game.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main connect four game component html template -->\n<div class=\"container vertical center\">\n    <h1>Connect Four</h1>\n    <h2>{{config.playerPrefix}}<span>{{currentPlayer}}</span></h2>\n    <a href=\"#\" *ngIf=\"showButton\" class=\"play-again\" [ngStyle]=\"showPlayAgain\" (click)=\"playAgainClick()\">Play Again</a>\n    <div>\n        <table>\n            <tbody>\n                <tr *ngFor=\"let button of board; index as i\">\n                    <td><button #button type=\"button\" xPos=\"0\" [attr.yPos]=\"i\" [ngStyle]=\"getColor(0,i)\" (click)=\"btnClick(0, i)\"></button></td>\n                    <td><button #button type=\"button\" xPos=\"1\" [attr.yPos]=\"i\" [ngStyle]=\"getColor(1,i)\" (click)=\"btnClick(1, i)\"></button></td>\n                    <td><button #button type=\"button\" xPos=\"2\" [attr.yPos]=\"i\" [ngStyle]=\"getColor(2,i)\" (click)=\"btnClick(2, i)\"></button></td>\n                    <td><button #button type=\"button\" xPos=\"3\" [attr.yPos]=\"i\" [ngStyle]=\"getColor(3,i)\" (click)=\"btnClick(3, i)\"></button></td>\n                    <td><button #button type=\"button\" xPos=\"4\" [attr.yPos]=\"i\" [ngStyle]=\"getColor(4,i)\" (click)=\"btnClick(4, i)\"></button></td>\n                    <td><button #button type=\"button\" xPos=\"5\" [attr.yPos]=\"i\" [ngStyle]=\"getColor(5,i)\" (click)=\"btnClick(5, i)\"></button></td>\n                    <td><button #button type=\"button\" xPos=\"6\" [attr.yPos]=\"i\" [ngStyle]=\"getColor(6,i)\" (click)=\"btnClick(6, i)\"></button></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/game/game.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/app/utils/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * App-game Component
 * @export
 * @class GameComponent
 * @implements {onInit}
 */
var GameComponent = /** @class */ (function () {
    function GameComponent() {
        this.showButton = false;
    }
    GameComponent.prototype.ngOnInit = function () {
        this.board = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["board"];
        this.currentPlayer = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["currentPlayer"];
        this.config = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["config"];
    };
    // Handle for update the board cell by color
    GameComponent.prototype.addDiscToBoard = function (color, xpos, ypos) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["board"][ypos][xpos] = color;
    };
    // Ensure the position will be filling in color isn't taken
    GameComponent.prototype.positionIsTaken = function (xpos, ypos) {
        var value = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["board"][ypos][xpos];
        return value === 0 ? false : true;
    };
    // Handle for change player on button click
    GameComponent.prototype.changePlayer = function () {
        if (this.currentPlayer === 'yellow') {
            this.currentPlayer = 'red';
        }
        else {
            this.currentPlayer = 'yellow';
        }
    };
    // Function that handle drop to the bottom of the column, start at the bottom
    GameComponent.prototype.dropToBottom = function (x_pos, y_pos) {
        for (var y = 5; y > y_pos; y--) {
            if (_utils_utils__WEBPACK_IMPORTED_MODULE_1__["board"][y][x_pos] === 0) {
                return y;
            }
        }
        return y_pos;
    };
    // when all pieces on board are filled
    GameComponent.prototype.gameIsDraw = function () {
        for (var y = 0; y <= 5; y++) {
            for (var x = 0; x <= 6; x++) {
                if (_utils_utils__WEBPACK_IMPORTED_MODULE_1__["board"][y][x] === 0) {
                    return false;
                }
            }
        }
        return true;
    };
    // ngStyle binded function to change/fill in the color in the cell
    GameComponent.prototype.getColor = function (xpos, ypos) {
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_1__["board"][ypos][xpos] === 0) {
            return {
                'background-color': '#bbb',
            };
        }
        else {
            return {
                'background-color': _utils_utils__WEBPACK_IMPORTED_MODULE_1__["board"][ypos][xpos],
            };
        }
    };
    // Define horizontal win boolean 
    GameComponent.prototype.horizontalWin = function () {
        var currentValue = null, previousValue = 0, tally = 0;
        // Scan each row in series, tallying the length of each series. If a series
        // ever reaches four, return true for a win.
        for (var y = 0; y <= 5; y++) {
            for (var x = 0; x <= 6; x++) {
                currentValue = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["board"][y][x];
                if (currentValue === previousValue && currentValue !== 0) {
                    tally += 1;
                }
                else {
                    // Reset the tally if you find a gap.
                    tally = 0;
                }
                if (tally === _utils_utils__WEBPACK_IMPORTED_MODULE_1__["config"].countToWin - 1) {
                    return true;
                }
                previousValue = currentValue;
            }
            // After each row, reset the tally and previous value.
            tally = 0;
            previousValue = 0;
        }
        return false;
    };
    // Define vetical win boolean 
    GameComponent.prototype.verticalWin = function () {
        var currentValue = null, previousValue = 0, tally = 0;
        // Scan each column in series, tallying the length of each series. If a
        // series ever reaches four, return true for a win.
        for (var x = 0; x <= 6; x++) {
            for (var y = 0; y <= 5; y++) {
                currentValue = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["board"][y][x];
                if (currentValue === previousValue && currentValue !== 0) {
                    tally += 1;
                }
                else {
                    // Reset the tally if you find a gap.
                    tally = 0;
                }
                if (tally === _utils_utils__WEBPACK_IMPORTED_MODULE_1__["config"].countToWin - 1) {
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
    };
    // Define diagonal win boolean 
    GameComponent.prototype.diagonalWin = function () {
        var x = null, y = null, xtemp = null, ytemp = null, currentValue = null, previousValue = 0, tally = 0;
        // Test for down-right diagonals across the top.
        for (x = 0; x <= 6; x++) {
            xtemp = x;
            ytemp = 0;
            while (xtemp <= 6 && ytemp <= 5) {
                currentValue = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["board"][ytemp][xtemp];
                if (currentValue === previousValue && currentValue !== 0) {
                    tally += 1;
                }
                else {
                    // Reset the tally if you find a gap.
                    tally = 0;
                }
                if (tally === _utils_utils__WEBPACK_IMPORTED_MODULE_1__["config"].countToWin - 1) {
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
                currentValue = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["board"][ytemp][xtemp];
                if (currentValue === previousValue && currentValue !== 0) {
                    tally += 1;
                }
                else {
                    tally = 0;
                }
                if (tally === _utils_utils__WEBPACK_IMPORTED_MODULE_1__["config"].countToWin - 1) {
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
                currentValue = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["board"][ytemp][xtemp];
                if (currentValue === previousValue && currentValue !== 0) {
                    tally += 1;
                }
                else {
                    tally = 0;
                }
                if (tally === _utils_utils__WEBPACK_IMPORTED_MODULE_1__["config"].countToWin - 1) {
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
                currentValue = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["board"][ytemp][xtemp];
                if (currentValue === previousValue && currentValue !== 0) {
                    tally += 1;
                }
                else {
                    tally = 0;
                }
                if (tally === _utils_utils__WEBPACK_IMPORTED_MODULE_1__["config"].countToWin - 1) {
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
    };
    Object.defineProperty(GameComponent.prototype, "showPlayAgain", {
        get: function () {
            return {
                'display': 'inline-block',
            };
        },
        enumerable: true,
        configurable: true
    });
    // Function will tragger when user's click event
    GameComponent.prototype.btnClick = function (xpos, ypos) {
        var y_pos = this.dropToBottom(xpos, ypos);
        if (this.positionIsTaken(xpos, y_pos)) {
            alert(this.config.takenMsg);
            return;
        }
        this.addDiscToBoard(this.currentPlayer, xpos, y_pos);
        this.changePlayer();
        if (this.horizontalWin() || this.verticalWin() || this.diagonalWin()) {
            alert(this.config.winPrefix + _utils_utils__WEBPACK_IMPORTED_MODULE_1__["board"][y_pos][xpos]);
            this.showButton = true;
            return;
        }
        else if (this.gameIsDraw()) {
            alert(this.config.drawMsg);
            return;
        }
    };
    // Handle play again button click 
    GameComponent.prototype.playAgainClick = function () {
        location.reload();
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/components/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/components/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/utils/utils.ts":
/*!********************************!*\
  !*** ./src/app/utils/utils.ts ***!
  \********************************/
/*! exports provided: config, board, currentPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "board", function() { return board; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentPlayer", function() { return currentPlayer; });
// Create variables for use in the game
var config = {
    startingPlayer: 'yellow',
    playerPrefix: 'Current Player is: ',
    winPrefix: 'The winner is: ',
    countToWin: 4,
    takenMsg: 'This position is already taken. Please make another choice.',
    drawMsg: 'This game is a draw.',
};
// Define the empty board as a two-dimensional array, full of zeros
var board = [
    [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]
];
// define the startingPlayer yellow as current player 1, current play will change
var currentPlayer = config.startingPlayer;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bei52\Desktop\connectFour\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map