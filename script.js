let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let winner = null;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6] // Diagonais
];

function handleCellClick(cell) {
    const index = Array.from(cell.parentNode.children).indexOf(cell);
    if (!cell.textContent && !winner) {
        cell.textContent = currentPlayer;
        gameBoard[index] = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            winner = gameBoard[a];
            document.getElementById('winner').textContent = `O jogador ${winner} venceu!`;
            return;
        }
    }
    if (gameBoard.every(cell => cell !== '')) {
        document.getElementById('winner').textContent = 'Empate!';
    }
}

function resetGame() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = '';
    });
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    winner = null;
    document.getElementById('winner').textContent = '';
    currentPlayer = 'X';
}
