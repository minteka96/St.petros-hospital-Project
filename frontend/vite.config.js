/* eslint-disable no-dupe-keys */
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   build: {
//     sourcemap: false, // Disable source maps in build
//   },
//   server: {
//     sourcemap: false, // Disable source maps in dev server
//   },
//   plugins: [react()],
//   resolve: {
//     alias: {
//       icofont: "icofont/dist/icofont.css",
//     },
//   },
//   assetsInclude: ["**/*.woff", "**/*.woff2", "**/*.ttf"],
//   build: {
//     outDir: "dist", // Ensure the output directory is 'dist'
//   },
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    sourcemap: false, // Disable source maps in build
    outDir: "dist",   // Ensure the output directory is 'dist'
  },
  server: {
    sourcemap: false, // Disable source maps in dev server
  },
  plugins: [react()],
  resolve: {
    alias: {
      icofont: "icofont/dist/icofont.css", // Existing alias for icofont
      swiper: 'swiper', // Correct alias for Swiper package
    },
  },
  assetsInclude: [
    "**/*.woff", 
    "**/*.woff2", 
    "**/*.ttf", 
    "**/*.jpg",
    "**/*.JPG"
  ], // Added .JPG to the list
});
