import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  // Specify the favicon path
  base: './', // Ensure the base is correctly set
  build: {
    assetsDir: 'assets', // Optional: Specify the assets directory
  },
});
