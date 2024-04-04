// Initialize the game state
const board = Array(9).fill(null);
let currentPlayer = 'X';

// Add event listeners to each cell
document.querySelectorAll('.cell').forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(index));
});

// Handle cell click
function handleCellClick(index) {
    if (board[index] === null) {
        board[index] = currentPlayer;
        cell.innerText = currentPlayer;
        checkWinner();
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
}

// Check for a winner
function checkWinner() {
    // Implement your logic to check for a winner (rows, columns, diagonals)
    // Update the UI accordingly
}

// You can add more game logic and features as needed
