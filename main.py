import tkinter as tk
from tkinter import messagebox

# Initialize the game board (5x5 grid for a bigger board)
board = [[' ' for _ in range(5)] for _ in range(5)]
current_player = 'X'  # Start with X as the first player

def handle_click(row, col):
    global current_player
    if board[row][col] == ' ':
        board[row][col] = current_player
        button = buttons[row][col]
        button.config(text=current_player)
        check_winner()
        current_player = 'O' if current_player == 'X' else 'X'
        update_turn_label()

def check_winner():
    # Check rows, columns, and diagonals for a winner
    for i in range(5):
        if board[i][0] == board[i][1] == board[i][2] == board[i][3] == board[i][4] != ' ':
            announce_winner(board[i][0])
        if board[0][i] == board[1][i] == board[2][i] == board[3][i] == board[4][i] != ' ':
            announce_winner(board[0][i])
    if board[0][0] == board[1][1] == board[2][2] == board[3][3] == board[4][4] != ' ':
        announce_winner(board[0][0])
    if board[0][4] == board[1][3] == board[2][2] == board[3][1] == board[4][0] != ' ':
        announce_winner(board[0][4])

def announce_winner(player):
    messagebox.showinfo("Winner!", f"Player {player} wins!")
    reset_board()

def reset_board():
    for row in range(5):
        for col in range(5):
            board[row][col] = ' '
            buttons[row][col].config(text=' ')
    update_turn_label()

def update_turn_label():
    turn_label.config(text=f"Current Turn: Player {current_player}")

# Create the main window
root = tk.Tk()
root.title("Tic Tac Toe")

# Create buttons for the game board
buttons = []
for row in range(5):
    row_buttons = []
    for col in range(5):
        button = tk.Button(root, text=' ', font=('Arial', 18), height=2, width=5,
                           command=lambda r=row, c=col: handle_click(r, c))
        button.grid(row=row, column=col)
        row_buttons.append(button)
    buttons.append(row_buttons)

# Add label to display current player's turn
turn_label = tk.Label(root, text=f"Current Turn: Player {current_player}", font=('Arial', 14))
turn_label.grid(row=5, columnspan=5)

root.mainloop()  # Start the GUI event loop
