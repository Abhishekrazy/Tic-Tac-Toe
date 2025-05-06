export class Game {
  constructor() {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.gameOver = false;
    this.winner = null;
    this.difficulty = 'easy'; // Default difficulty
    this.gameMode = 'ai'; // Default game mode: 'ai' or 'multiplayer'
  }

  // Make a move on the board
  makeMove(index) {
    // Check if the cell is already taken or game is over
    if (this.board[index] !== '' || this.gameOver) {
      return false;
    }

    // Place the current player's mark
    this.board[index] = this.currentPlayer;

    // Check for win or draw
    if (this.checkWin()) {
      this.gameOver = true;
      this.winner = this.currentPlayer;
      return true;
    }

    if (this.checkDraw()) {
      this.gameOver = true;
      this.winner = 'draw';
      return true;
    }

    // Switch player
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    return true;
  }

  // AI makes a move
  makeAIMove() {
    if (this.gameOver || this.currentPlayer === 'X' || this.gameMode === 'multiplayer') {
      return false;
    }

    let index;

    switch (this.difficulty) {
      case 'easy':
        index = this.getRandomMove();
        break;
      case 'medium':
        // 50% chance of making a smart move
        index = Math.random() < 0.5 ? this.getSmartMove() : this.getRandomMove();
        break;
      case 'hard':
        index = this.getSmartMove();
        break;
      default:
        index = this.getRandomMove();
    }

    return this.makeMove(index);
  }

  // Get a random valid move
  getRandomMove() {
    const availableMoves = this.getAvailableMoves();
    if (availableMoves.length === 0) return -1;
    
    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    return availableMoves[randomIndex];
  }

  // Get the best move using minimax algorithm (simplified)
  getSmartMove() {
    const availableMoves = this.getAvailableMoves();
    
    // If center is available, take it (good strategy for tic-tac-toe)
    if (this.board[4] === '') {
      return 4;
    }
    
    // Check if AI can win in the next move
    for (const move of availableMoves) {
      this.board[move] = 'O';
      if (this.checkWinForPlayer('O')) {
        this.board[move] = ''; // Reset the move
        return move;
      }
      this.board[move] = ''; // Reset the move
    }
    
    // Check if player can win in the next move and block
    for (const move of availableMoves) {
      this.board[move] = 'X';
      if (this.checkWinForPlayer('X')) {
        this.board[move] = ''; // Reset the move
        return move;
      }
      this.board[move] = ''; // Reset the move
    }
    
    // Take corners if available
    const corners = [0, 2, 6, 8].filter(corner => this.board[corner] === '');
    if (corners.length > 0) {
      return corners[Math.floor(Math.random() * corners.length)];
    }
    
    // Take edges if available
    const edges = [1, 3, 5, 7].filter(edge => this.board[edge] === '');
    if (edges.length > 0) {
      return edges[Math.floor(Math.random() * edges.length)];
    }
    
    // Fallback to random move
    return this.getRandomMove();
  }

  // Get all available moves
  getAvailableMoves() {
    return this.board.reduce((moves, cell, index) => {
      if (cell === '') {
        moves.push(index);
      }
      return moves;
    }, []);
  }

  // Check if the current player has won
  checkWin() {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winPatterns.some(pattern => {
      const [a, b, c] = pattern;
      return (
        this.board[a] !== '' &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      );
    });
  }

  // Check if a specific player has won (used for AI)
  checkWinForPlayer(player) {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winPatterns.some(pattern => {
      const [a, b, c] = pattern;
      return (
        this.board[a] === player &&
        this.board[b] === player &&
        this.board[c] === player
      );
    });
  }

  // Check if the game is a draw
  checkDraw() {
    return this.board.every(cell => cell !== '');
  }

  // Reset the game
  resetGame() {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.gameOver = false;
    this.winner = null;
  }

  // Set the AI difficulty
  setDifficulty(difficulty) {
    this.difficulty = difficulty;
  }

  // Set the game mode
  setGameMode(mode) {
    this.gameMode = mode;
    this.resetGame();
  }
}
