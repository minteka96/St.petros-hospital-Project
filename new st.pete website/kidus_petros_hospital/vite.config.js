import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    sourcemap: false, // Disable source maps in build
  },
  server: {
    sourcemap: false, // Disable source maps in dev server
  },
  plugins: [react()],
});