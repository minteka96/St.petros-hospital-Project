import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/** @type {import('tailwindcss').Config} */

export default defineConfig({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [react()],
});
