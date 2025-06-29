import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@dev":
        mode === "production"
          ? path.resolve(__dirname, "src/empty-dev-module.js")
          : path.resolve(__dirname, "src/dev-data"),
    },
  },
}));
