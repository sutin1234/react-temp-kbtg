import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore - Tailwind CSS v4 types may not be available yet
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
})
