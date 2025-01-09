import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Tourism-City-App-E.lkantara/', 
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

