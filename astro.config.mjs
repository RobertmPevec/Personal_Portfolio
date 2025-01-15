import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // For Tailwind CSS
import sitemap from '@astrojs/sitemap'; // For sitemap generation

export default defineConfig({
  site: 'https://robertpevec.com', // Replace with your site URL
  outDir: './dist', // Ensure output is directed to 'dist'
  integrations: [
    tailwind(), // Adds Tailwind CSS support
    sitemap({
      changefreq: 'weekly', // Optional sitemap settings
      priority: 0.7,
    }),
  ],
});