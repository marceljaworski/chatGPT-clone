import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/completions': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
