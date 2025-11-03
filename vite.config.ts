import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/moodjournal/',  // important for GH Pages
  plugins: [react()],
});
