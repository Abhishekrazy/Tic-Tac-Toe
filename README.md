# Tic Tac Toe with AI

A modern, responsive Tic Tac Toe game with AI opponent and multiplayer options, built with vanilla JavaScript and Tailwind CSS.

<div align="center">
  <img src="https://a.imglink.io/SqQSZ.png" alt="Tic Tac Toe Game" width="500"/>
</div>

## Play Now

You can play the game directly in your browser:

1. **Online Demo**: [Play Tic Tac Toe](https://tictactoe-ai-game.netlify.app) (Example link - deploy your own version)

2. **Local Development**:
   ```bash
   # Clone the repository
   git clone https://github.com/Abhishekrazy/Tic-Tac-Toe.git
   
   # Navigate to the project directory
   cd tictactoe-ai
   
   # Install dependencies
   pnpm install
   
   # Start the development server
   pnpm run dev
   ```

3. **Deploy Your Own**:
   - Fork this repository
   - Deploy to Netlify, Vercel, or GitHub Pages
   - Share with friends!

## Features

- **AI Opponent with 3 Difficulty Levels**:
  - Easy: Makes random moves
  - Medium: 50% chance of making strategic moves
  - Hard: Uses strategy to make the best possible move

- **Multiplayer Mode**:
  - Play against a friend on the same device
  - Switch between AI and multiplayer modes anytime

- **Game Statistics**:
  - Track wins, losses, and draws
  - Stats are saved between sessions

- **Modern UI**:
  - Responsive design works on all devices
  - Beautiful animated background
  - Glass-morphism design elements

## How to Play

1. **Choose Game Mode**:
   - vs AI: Play against the computer
   - 2 Players: Play against a friend

2. **Select AI Difficulty** (AI mode only):
   - Easy: For beginners
   - Medium: For casual players
   - Hard: For a real challenge

3. **Gameplay**:
   - Click on any empty cell to place your mark (X)
   - In AI mode, the computer will automatically make its move (O)
   - In multiplayer mode, players take turns placing X and O
   - First to get three in a row (horizontally, vertically, or diagonally) wins
   - If all cells are filled with no winner, the game ends in a draw

4. **Restart**:
   - Click the "Restart Game" button to start a new game
   - Your stats will be saved

## Technologies Used

- Vanilla JavaScript
- Tailwind CSS
- Vite (build tool)
- HTML5/CSS3
- LocalStorage API

## Development

This project uses Vite for fast development and building. Available commands:

```bash
# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## License

MIT License - feel free to use and modify for your own projects!

## Acknowledgements

- Inspired by classic Tic Tac Toe games
- Built with modern web technologies
- Created as a demonstration of vanilla JavaScript capabilities
