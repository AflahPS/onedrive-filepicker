import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      OD_CLIENT_ID: 'a3c02a31-1ddc-471f-bf42-856d4bdce3f4',
      OD_TENANT_ID: 'eb5878fb-7eed-444f-867f-85338b144b8a',
      OD_REDIRECT_URI: 'http://localhost:5173',
      OD_SCOPE: 'files.readwrite',
      OD_SECRET: 'lpO8Q~J41XMXWWyFMrPomCyqWA1rZdICyA3E6aEq',
    }
  }
})
