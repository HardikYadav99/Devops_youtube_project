import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // This section is for 'npm run dev'
  server: {
    allowedHosts: ["merndemo.local"],
    host: true,
    port: 5173,
  },
  // This section is for 'npm run preview' (which your Dockerfile uses)
  preview: {
    allowedHosts: ["merndemo.local"],
    host: true,
    port: 5173,
  },
});