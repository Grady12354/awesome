// Initialize the game state
const board = Array(9).fill(null);
let currentPlayer = 'X';
let gameEnded = false;

// Add event listeners to each cell
document.querySelectorAll('.cell').forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(index));
});

// Handle cell click
function handleCellClick(index) {
    if (!gameEnded && board[index] === null) {
        board[index] = currentPlayer;
        cell.innerText = currentPlayer;
        checkWinner();
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
}

// Check for a winner
function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            announceWinner(board[a]);
            return;
        }
    }

    if (board.every(cell => cell !== null)) {
        announceDraw();
    }
}

// Announce the winner
function announceWinner(player) {
    gameEnded = true;
    alert(`Player ${player} wins!`);
}

// Announce a draw
function announceDraw() {
    gameEnded = true;
    alert("It's a draw!");
}

// Reset the game
function resetGame() {
    board.fill(null);
    currentPlayer = 'X';
    gameEnded = false;
    document.querySelectorAll('.cell').forEach(cell => {
        cell.innerText = '';
    });
}

// Add event listener for the reset button
document.getElementById('reset-button').addEventListener('click', resetGame);
