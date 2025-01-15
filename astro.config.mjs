import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://robertpevec.com', // Your site URL
  outDir: './output-test', // Change the output directory here
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
  base: '/', // Base path for the site
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined, // Prevent unwanted chunk splitting
        },
      },
    },
  },
});