import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path"; // Import 'resolve' from 'path' module

const ReactCompilerConfig = {};

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // Alias '@' to the 'src' directory
      "@components": resolve(__dirname, "src/components"), // Example for a specific folder
      // Add more aliases as needed
    },
  },
  base: "/", // Adjust if deploying to a subfolder or using relative paths
});
