import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";
import playformInline from "@playform/inline";
import tailwindcss from "@tailwindcss/vite";
import compressor from "astro-compressor";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [
    icon(),
    sitemap(),
    playformCompress(),
    playformInline(),
    compressor(),
  ],
  site: "https://eminaliyev.com/",
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "assets/[hash][extname]",
        },
      },
    },
    plugins: [tailwindcss()],
  },
  build: {
    assets: "assets",
  },
});
