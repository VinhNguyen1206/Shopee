import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
  base: "./", // Adjust if deploying to a subfolder or using relative paths
});
