// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon";
// Remove the staticAdapter import - not needed for static output

// https://astro.build/config
export default defineConfig({
  output: 'static', // This is enough for static sites
  // Remove the adapter line completely
  site: "https://aspandyar.github.io/aspandyar",
  base: process.env.BASE_PATH || "/",
  integrations: [preact(), icon(), sitemap({
    filter: (page) =>
      !page.includes("/blog/tags") &&
      !page.includes("/blog/techs"),
  }),],

  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    },
  },
});