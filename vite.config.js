import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    cssCodeSplit: true,
    outDir: "dist",
    assetsInlineLimit: 4096,
  },
  css: {
    devSourcemap: true,
  },
});
