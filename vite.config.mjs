import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({command}) => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [react()],
    server: {
      watch: {
        usePolling: true
      }
    },
  };
});