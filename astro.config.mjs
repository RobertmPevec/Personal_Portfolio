import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://robertpevec.com', // Your custom domain
  outDir: './dist', // Default output directory for Astro. Change to "docs" for GitHub Pages if needed.
  integrations: [
    tailwind(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000,
    }),
    robotsTxt(),
  ],
  base: '/', // Base path for GitHub Pages (no subfolder for custom domains)
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined, // Ensure correct bundling
        },
      },
    },
  },
});