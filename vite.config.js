import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/al-balqa-applied-university-register',
  plugins: [ 
    eslint(),
    react(),
  
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      }
    })
  ],
  server: {    
    // this ensures that the browser opens upon server start
    open: false,
    host: "127.0.0.1",
    port: 3000,
    cors: true
  }, 
})
