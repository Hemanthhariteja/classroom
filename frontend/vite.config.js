import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify('0.1.0')
  },
  server: { 
    port: 5173
    // Note: Proxy disabled - using VITE_API_BASE_URL from .env instead
    // This allows the frontend to connect to Render backend directly
  }
})