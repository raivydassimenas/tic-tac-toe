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

    const createBoard = function() {
        const gameBoard = document.querySelector('#board');
    
        board.forEach((outerElem, outerIndex) => {
            const row = document.createElement('div');
            row.classList = "row";
            outerElem.forEach((innerElem, innerIndex) => {
                const square = document.createElement('div');
                square.classList = "square";
                square.setAttribute("id", "" + outerIndex + ", " + innerIndex);
    
                row.appendChild(square);
            });
    
            gameBoard.appendChild(row);
        });
    };

    return {
        setSquare,
        getSquare,
        initializeBoard,
        createBoard,
    }
}

const gameBoard = GameBoard();

