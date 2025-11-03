import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/moodjournal/',  // ensures all built asset paths are correct
  plugins: [react()],
});
