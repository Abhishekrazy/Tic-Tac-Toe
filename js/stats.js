export class Stats {
  constructor() {
    this.stats = {
      wins: 0,
      losses: 0,
      draws: 0
    };
    
    this.loadStats();
  }
  
  // Increment a specific stat
  increment(stat) {
    if (this.stats.hasOwnProperty(stat)) {
      this.stats[stat]++;
      this.saveStats();
    }
  }
  
  // Get all stats
  getStats() {
    return { ...this.stats };
  }
  
  // Reset all stats
  resetStats() {
    this.stats = {
      wins: 0,
      losses: 0,
      draws: 0
    };
    this.saveStats();
  }
  
  // Save stats to localStorage
  saveStats() {
    localStorage.setItem('tictactoe-stats', JSON.stringify(this.stats));
  }
  
  // Load stats from localStorage
  loadStats() {
    const savedStats = localStorage.getItem('tictactoe-stats');
    
    if (savedStats) {
      try {
        const parsedStats = JSON.parse(savedStats);
        this.stats = {
          wins: parsedStats.wins || 0,
          losses: parsedStats.losses || 0,
          draws: parsedStats.draws || 0
        };
      } catch (e) {
        console.error('Error parsing stats from localStorage', e);
      }
    }
  }
}
