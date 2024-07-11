import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()],
  base: 'https://github.com/kleberwender/NLWJouney2024.git',
  build: {
    outDir: 'dist'
  }
});
