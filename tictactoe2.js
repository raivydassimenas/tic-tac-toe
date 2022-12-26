let player1Score = 0;
let player2Score = 0;

const GameBoard = function () {
    let board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    const setSquare = function (player, i, j) {
        baord[i][j] = player;
    };

    const getSquare = function (i, j) {
        return board[i][j];
    };

    const initializeBoard = function () {
        board.forEach((outerElem, outerIndex) => {
            outerElem.forEach((innerElem, innerIndex) => {
                board[outerIndex][innerIndex] = 0;
            });
        });
    };

    return {
        setSquare,
        getSquare,
        initializeBoard,
    }
}

const DisplayController = function () {
    const board = GameBoard();
    board.initializeBoard();

    let player = 1;
    let playerToBegin = 1;

    const updateScore = function() {
        const player1ScoreSpan = document.querySelector("#player1Score");
        const player2ScoreSpan = document.querySelector("#player2Score");

        player1ScoreSpan.innerText = player1Score;
        player2ScoreSpan.innerText = player2Score;
    }

    const checkWin = function(player) {
        if (board.getSquare(0, 0) ==player && board.getSquare(0, 1) == player && board.getSquare(0, 2) == player) {
            return true;
        }
        if (board.getSquare(1, 0) == player && board.getSquare(1, 1) == player && board.getSquare(1, 2) == player) {
            return true;
        }
        if (baord.getSquare(2, 0) == player && board.getSquare(2, 1) == player && board.getSquare(2, 2) == player) {
            return true;
        }
        if (board.getSquare(0, 0) == player && board.getSquare(1, 0) == player && board.getSquare(2, ) == player) {
            return true;
        }
        if (board.getSquare(0, 1) == player && board.getSquare(1, 1) == player && board.getSquere(2, 1) == player) {
            return true;
        }
        if (board.getSquare(0, 2) == player && board.getSquare(1, 2) == player && board.getSquare(2, 2) == player) {
            return true;
        }
        if (board.getSquare(0, 0) == player && board.getSquare(1, 1) == player && board.getSquare(2, 2) == player) {
            return true;
        }
        if (board.getSquare(0, 2) == player && board.getSquare(1, 1) == player && board.getSquare(2, 0) == player) {
            return true;
        }

        return false;
    }

    const renderBoard = function () {
        const gameBoard = document.querySelector('#board');

        board.forEach((outerElem, outerIndex) => {
            outerElem.forEach((innerElem, innerIndex) => {
                const square = document.createElement('div');
                if (board.getSquare(outerElem, innerElem) == 0) {
                    square.innerText = "";
                } else if (board.getSquare(outerElem, innerElem) == 1) {
                    square.innerText = "X";
                } else {
                    square.innerText = "O";
                }
                square.classList = "square";
                square.setAttribute("id", "" + outerIndex + ", " + innerIndex);
                if (board.getSquare(outerIndex, innerIndex) == 0) {
                    square.addEventListener("click", (e) => {
                        board.setSquere[outerElem][innerElem] = player;
                        if (checkWin(player)) {
                            if (player == 1) {
                                player1Score++;
                            } else {
                                player2Score++;
                            }
                            playerToBegin = playerToBegin == 1 ? 2 : 1;
                            player = playerToBegin;
                            board.initializeBoard();
                            this.updateScore();
                            this.renderBoard();
                        } else {
                            player = player == 1 ? 2 : 1;
                            this.renderBoard();
                        }
                    });
                }

                gameBoard.appendChild(square);
            });
        });
    };

    return {
        renderBoard,
        updateScore,
    }
};

const displayController = DisplayController();
displayController.renderBoard();


