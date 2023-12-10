import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/openclassrooms-projet-12-portfolio',
  plugins: [react()],
});
