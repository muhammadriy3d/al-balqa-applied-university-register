import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/login',
    plugins: [eslint(), react()],
    server: {    
        // this ensures that the browser opens upon server start
        open: true,
        host: "127.0.0.1",
        port: 3000,
        cors: true
    },
})
