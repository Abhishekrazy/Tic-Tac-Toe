import { defineConfig } from 'vite'

export default defineConfig({
  // Base path for GitHub Pages deployment
  // Comment this out for local development or other deployment targets
  // base: '/tic-tac-toe/',
  
  server: {
    // Configure server options
    port: 3000,
    open: true, // Automatically open browser on server start
  },
  
  build: {
    // Output directory for production build
    outDir: 'dist',
    
    // Minify options
    minify: 'terser',
    
    // Generate sourcemaps for debugging
    sourcemap: false,
  }
})
