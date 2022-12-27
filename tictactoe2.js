const GameBoard = function() {
    let board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    const setSquare = function(player, i, j) {
        baord[i][j] = player;
    };

    const getSquare = function(i, j) {
        return board[i][j];
    };

    const initializeBoard = function() {
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

const displayController = function() {
    const board = GameBoard();
    board.initializeBoard();

    let player = 1;

    const createBoard = function() {
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

                square.addEventListener("click", (e) => {
                    let source = e.target || e.srcElement;
                    let coordArr = source.id.split(", ");
                    coordArr[0] = parseInt(coordArr[0]);
                    coordArr[1] = parseInt(coordArr[1]);
                });
    
                gameBoard.appendChild(square);
            });
        });
    };
};


