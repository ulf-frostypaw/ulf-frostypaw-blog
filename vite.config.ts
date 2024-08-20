import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//import { ViteMinifyPlugin } from "vite-plugin-minify";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    /* ViteMinifyPlugin({
      // Configura ViteMinifyPlugin para que no minifique el HTML
    }), */
    /* {
      name: "markdown-loader",
      transform(code, id) {
        if (id.slice(-3) === ".md") {
          // For .md files, get the raw content
          return `export default ${JSON.stringify(code)};`;
        }
      }
    } */
  ],
});
