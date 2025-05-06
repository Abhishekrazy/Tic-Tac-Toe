export class UI {
  constructor(game) {
    this.game = game;
    this.cells = document.querySelectorAll('.cell');
    this.statusElement = document.getElementById('status');
    this.restartButton = document.getElementById('restart');
    this.difficultyButtons = document.querySelectorAll('.btn-secondary');
    this.gameModeButtons = document.querySelectorAll('.game-mode-btn');
    
    // Stats elements
    this.winsElement = document.getElementById('wins');
    this.lossesElement = document.getElementById('losses');
    this.drawsElement = document.getElementById('draws');
    
    // Game mode elements
    this.aiOptionsElement = document.getElementById('ai-options');
  }

  // Initialize the game UI and event listeners
  initializeGame() {
    // Add click event to cells
    this.cells.forEach(cell => {
      cell.addEventListener('click', () => {
        this.handleCellClick(cell);
      });
    });

    // Add click event to restart button
    this.restartButton.addEventListener('click', () => {
      this.restartGame();
    });

    // Add click events to difficulty buttons
    this.difficultyButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.setDifficulty(button);
      });
    });
    
    // Add click events to game mode buttons
    this.gameModeButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.setGameMode(button);
      });
    });

    // Load stats from localStorage
    this.loadStats();
    
    // Update the UI
    this.updateBoard();
    this.updateStatus();
  }

  // Handle cell click
  handleCellClick(cell) {
    const index = cell.dataset.index;
    
    // Make player move
    if (this.game.makeMove(index)) {
      this.updateBoard();
      this.updateStatus();
      
      // Check if game is over after player's move
      if (this.game.gameOver) {
        this.handleGameOver();
        return;
      }
      
      // Make AI move after a short delay (only in AI mode)
      if (this.game.gameMode === 'ai') {
        setTimeout(() => {
          if (this.game.makeAIMove()) {
            this.updateBoard();
            this.updateStatus();
            
            // Check if game is over after AI's move
            if (this.game.gameOver) {
              this.handleGameOver();
            }
          }
        }, 500);
      }
    }
  }

  // Update the board UI based on the game state
  updateBoard() {
    this.cells.forEach((cell, index) => {
      const value = this.game.board[index];
      cell.textContent = value;
      
      // Reset classes
      cell.classList.remove('x', 'o');
      
      // Add appropriate class
      if (value === 'X') {
        cell.classList.add('x');
      } else if (value === 'O') {
        cell.classList.add('o');
      }
    });
  }

  // Update the status message
  updateStatus() {
    if (this.game.gameOver) {
      if (this.game.winner === 'X') {
        this.statusElement.textContent = this.game.gameMode === 'multiplayer' ? 'Player X wins!' : 'You win!';
        this.statusElement.classList.add('text-cyan-400');
      } else if (this.game.winner === 'O') {
        this.statusElement.textContent = this.game.gameMode === 'multiplayer' ? 'Player O wins!' : 'AI wins!';
        this.statusElement.classList.add('text-pink-400');
      } else {
        this.statusElement.textContent = 'Game ended in a draw!';
        this.statusElement.classList.remove('text-cyan-400', 'text-pink-400');
      }
    } else {
      this.statusElement.classList.remove('text-cyan-400', 'text-pink-400');
      if (this.game.gameMode === 'multiplayer') {
        this.statusElement.textContent = `Player ${this.game.currentPlayer}'s turn`;
      } else {
        if (this.game.currentPlayer === 'X') {
          this.statusElement.textContent = 'Your turn (X)';
        } else {
          this.statusElement.textContent = 'AI thinking... (O)';
        }
      }
    }
  }

  // Handle game over
  handleGameOver() {
    // Only update stats in AI mode
    if (this.game.gameMode === 'ai') {
      // Update stats
      if (this.game.winner === 'X') {
        this.incrementStat('wins');
      } else if (this.game.winner === 'O') {
        this.incrementStat('losses');
      } else {
        this.incrementStat('draws');
      }
      
      // Save stats
      this.saveStats();
    }
  }

  // Restart the game
  restartGame() {
    this.game.resetGame();
    this.updateBoard();
    this.updateStatus();
  }

  // Set the AI difficulty
  setDifficulty(selectedButton) {
    // Update difficulty in game
    this.game.setDifficulty(selectedButton.id);
    
    // Update UI
    this.difficultyButtons.forEach(button => {
      button.classList.remove('active');
    });
    selectedButton.classList.add('active');
    
    // Restart game when difficulty changes
    this.restartGame();
  }
  
  // Set the game mode
  setGameMode(selectedButton) {
    // Update game mode
    this.game.setGameMode(selectedButton.id);
    
    // Update UI
    this.gameModeButtons.forEach(button => {
      button.classList.remove('active');
    });
    selectedButton.classList.add('active');
    
    // Show/hide AI options based on game mode
    if (this.game.gameMode === 'ai') {
      this.aiOptionsElement.classList.remove('hidden');
    } else {
      this.aiOptionsElement.classList.add('hidden');
    }
    
    // Restart game when mode changes
    this.restartGame();
  }

  // Increment a stat
  incrementStat(stat) {
    const element = this[`${stat}Element`];
    if (element) {
      const currentValue = parseInt(element.textContent);
      element.textContent = currentValue + 1;
    }
  }

  // Save stats to localStorage
  saveStats() {
    const stats = {
      wins: parseInt(this.winsElement.textContent),
      losses: parseInt(this.lossesElement.textContent),
      draws: parseInt(this.drawsElement.textContent)
    };
    
    localStorage.setItem('tictactoe-stats', JSON.stringify(stats));
  }

  // Load stats from localStorage
  loadStats() {
    const savedStats = localStorage.getItem('tictactoe-stats');
    
    if (savedStats) {
      const stats = JSON.parse(savedStats);
      this.winsElement.textContent = stats.wins || 0;
      this.lossesElement.textContent = stats.losses || 0;
      this.drawsElement.textContent = stats.draws || 0;
    }
  }
}
