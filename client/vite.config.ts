import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // appType: 'mpa', // disable history fallback
  server: {
    // host: '0.0.0.0', // Allows external access to the dev server.
    port: 3000,
    // proxy: {
    //   '/api': {
    //     target: "https://conacy-web-1.onrender.com/",
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //     // target: 'https://conacy-web-1.onrender.com/',
    //     changeOrigin: true,
    //   },
    // },
    // hmr: {
    //   overlay: false,
    // },
  },
  // server: {
  //   // host: '0.0.0.0', // Allows external access to the dev server.
  //   port: 3000,
  //   proxy: {
  //     '/api': {
  //       target: 'https://conacy-web-1.onrender.com/',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  //   hmr: {
  //     overlay: false,
  //   },
  // }
});
