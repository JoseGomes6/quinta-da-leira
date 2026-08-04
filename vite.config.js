import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/quinta-da-leira/",
  build: {
    outDir: "docs", // Gera a build na pasta docs em vez de dist
  },
});
