import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['path'], // Ne pas externaliser 'path'
    },
  },
});
