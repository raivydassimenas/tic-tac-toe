let player1Score = 0;
let player2Score = 0;
let player1Name = "Player 1";
let player2Name = "Player 2";

const GameBoard = function () {
  let board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const setSquare = function (player, i, j) {
    board[i][j] = player;
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

  const getBoard = function () {
    return board;
  }

  return {
    setSquare,
    getSquare,
    initializeBoard,
    getBoard,
  };
};

const DisplayController = function () {
  document.querySelector("#player1Name").innerText = player1Name;
  document.querySelector("#player2Name").innerText = player2Name;
  const board = GameBoard();
  board.initializeBoard();

  let player = 1;
  let playerToBegin = 1;

  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    player = 1;
    playerToBegin = 1;
    player1Score = 0;
    player2Score = 0;
    board.initializeBoard();
    updateScore();

    renderBoard();
  });

  const submitNamesButton = document.querySelector("#submitNames");
  submitNamesButton.addEventListener("click", (e) => {
    player1Name = document.querySelector("#player1NameInput").value;
    player2Name = document.querySelector("#player2NameInput").value;
    document.querySelector("#player1Name").innerText = player1Name;
    document.querySelector("#player2Name").innerText = player2Name;

    document.querySelector("#player1NameInput").style.display = 'none';
    document.querySelector("#player2NameInput").style.display = 'none';
    submitNamesButton.style.display = 'none';
  });

  const updateScore = function () {
    const player1ScoreSpan = document.querySelector("#player1Score");
    const player2ScoreSpan = document.querySelector("#player2Score");

    player1ScoreSpan.innerText = player1Score;
    player2ScoreSpan.innerText = player2Score;
  };

  const checkWin = function (player) {
    if (
      board.getSquare(0, 0) == player &&
      board.getSquare(0, 1) == player &&
      board.getSquare(0, 2) == player
    ) {
      return true;
    }
    if (
      board.getSquare(1, 0) == player &&
      board.getSquare(1, 1) == player &&
      board.getSquare(1, 2) == player
    ) {
      return true;
    }
    if (
      board.getSquare(2, 0) == player &&
      board.getSquare(2, 1) == player &&
      board.getSquare(2, 2) == player
    ) {
      return true;
    }
    if (
      board.getSquare(0, 0) == player &&
      board.getSquare(1, 0) == player &&
      board.getSquare(2, 0) == player
    ) {
      return true;
    }
    if (
      board.getSquare(0, 1) == player &&
      board.getSquare(1, 1) == player &&
      board.getSquare(2, 1) == player
    ) {
      return true;
    }
    if (
      board.getSquare(0, 2) == player &&
      board.getSquare(1, 2) == player &&
      board.getSquare(2, 2) == player
    ) {
      return true;
    }
    if (
      board.getSquare(0, 0) == player &&
      board.getSquare(1, 1) == player &&
      board.getSquare(2, 2) == player
    ) {
      return true;
    }
    if (
      board.getSquare(0, 2) == player &&
      board.getSquare(1, 1) == player &&
      board.getSquare(2, 0) == player
    ) {
      return true;
    }

    return false;
  };

  const renderBoard = function () {
    const gameBoard = document.querySelector("#board");
    gameBoard.innerHTML = "";

    board.getBoard().forEach((outerElem, outerIndex) => {
      outerElem.forEach((innerElem, innerIndex) => {
        const square = document.createElement("div");
        if (board.getSquare(outerIndex, innerIndex) == 0) {
          square.innerText = "";
        } else if (board.getSquare(outerIndex, innerIndex) == 1) {
          square.innerText = "X";
        } else {
          square.innerText = "O";
        }
        square.classList = "square";
        square.setAttribute("id", "" + outerIndex + ", " + innerIndex);
        if (board.getSquare(outerIndex, innerIndex) == 0) {
          square.addEventListener("click", (e) => {
            board.setSquare(player, outerIndex, innerIndex);
            if (checkWin(player)) {
              if (player == 1) {
                player1Score++;
              } else {
                player2Score++;
              }
              playerToBegin = playerToBegin == 1 ? 2 : 1;
              player = playerToBegin;
              board.initializeBoard();
              updateScore();
              renderBoard();
            } else {
              player = player == 1 ? 2 : 1;
              renderBoard();
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
  };
};

const displayController = DisplayController();
displayController.renderBoard();
