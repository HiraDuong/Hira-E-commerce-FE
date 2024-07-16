import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
dotenv.config
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.GOOGLE_LOG_IN_CLIENT_ID' : JSON.stringify(process.env.GOOGLE_LOG_IN_CLIENT_ID)
  }
})
