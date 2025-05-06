import './style.css'
import { Game } from './js/game.js'
import { UI } from './js/ui.js'
import { Stats } from './js/stats.js'

document.querySelector('#app').innerHTML = `
  <!-- Enhanced animated background circles -->
  <div class="fixed inset-0 -z-10 overflow-hidden">
    <!-- Large background circles with enhanced animations -->
    <div class="gradient-circle w-96 h-96 top-1/4 -left-20 animate-float-slow animate-pulse-slow" style="background: radial-gradient(circle, rgba(129,140,248,0.6) 0%, rgba(129,140,248,0) 70%);"></div>
    <div class="gradient-circle w-80 h-80 top-3/4 left-1/3 animate-float-medium animate-pulse-medium" style="background: radial-gradient(circle, rgba(192,132,252,0.6) 0%, rgba(192,132,252,0) 70%);"></div>
    <div class="gradient-circle w-72 h-72 top-1/3 right-1/4 animate-float-fast animate-pulse-fast" style="background: radial-gradient(circle, rgba(244,114,182,0.6) 0%, rgba(244,114,182,0) 70%);"></div>
    <div class="gradient-circle w-64 h-64 bottom-1/4 right-1/4 animate-float-slow animate-pulse-medium" style="background: radial-gradient(circle, rgba(129,140,248,0.6) 0%, rgba(129,140,248,0) 70%);"></div>
    
    <!-- Additional smaller circles for more dynamic background -->
    <div class="gradient-circle w-48 h-48 bottom-1/3 left-1/4 animate-float-medium animate-pulse-slow" style="background: radial-gradient(circle, rgba(167,139,250,0.5) 0%, rgba(167,139,250,0) 70%);"></div>
    <div class="gradient-circle w-40 h-40 top-1/2 right-1/3 animate-float-fast animate-pulse-medium" style="background: radial-gradient(circle, rgba(236,72,153,0.5) 0%, rgba(236,72,153,0) 70%);"></div>
    
    <!-- Spinning gradient overlay for additional motion -->
    <div class="absolute inset-0 opacity-30 animate-spin-slow" style="background: linear-gradient(45deg, rgba(79,70,229,0) 40%, rgba(79,70,229,0.1) 50%, rgba(79,70,229,0) 60%);"></div>
  </div>

  <div class="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-4xl font-bold text-white mb-8 text-center">Tic Tac Toe</h1>
    
    <div class="flex flex-col md:flex-row gap-8 items-start justify-center w-full max-w-4xl">
      <!-- Game board -->
      <div class="game-panel">
        <div class="grid grid-cols-3 gap-3 w-72 h-72">
          <div class="cell" data-index="0"></div>
          <div class="cell" data-index="1"></div>
          <div class="cell" data-index="2"></div>
          <div class="cell" data-index="3"></div>
          <div class="cell" data-index="4"></div>
          <div class="cell" data-index="5"></div>
          <div class="cell" data-index="6"></div>
          <div class="cell" data-index="7"></div>
          <div class="cell" data-index="8"></div>
        </div>
      </div>
      
      <!-- Game info panel -->
      <div class="game-panel md:min-w-[240px]">
        <div id="status" class="text-xl font-medium mb-4">Your turn (X)</div>
        <button id="restart" class="btn-primary mb-6">Restart Game</button>
        
        <div class="mb-6">
          <h3 class="text-lg font-medium mb-2">Game Mode</h3>
          <div class="flex gap-2 mb-4">
            <button id="ai" class="btn-secondary flex-1 game-mode-btn active">vs AI</button>
            <button id="multiplayer" class="btn-secondary flex-1 game-mode-btn">2 Players</button>
          </div>
          
          <div id="ai-options">
            <h3 class="text-lg font-medium mb-2">AI Difficulty</h3>
            <div class="flex gap-2">
              <button id="easy" class="btn-secondary flex-1 active">Easy</button>
              <button id="medium" class="btn-secondary flex-1">Medium</button>
              <button id="hard" class="btn-secondary flex-1">Hard</button>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-medium mb-2">Game Stats</h3>
          <div class="stats-container">
            <div class="flex justify-between mb-2">
              <span>Wins:</span>
              <span id="wins" class="font-medium">0</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Losses:</span>
              <span id="losses" class="font-medium">0</span>
            </div>
            <div class="flex justify-between">
              <span>Draws:</span>
              <span id="draws" class="font-medium">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

// Initialize the game
const game = new Game();
const ui = new UI(game);
const stats = new Stats();

// Start the game
ui.initializeGame();
