// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon";

export default defineConfig({
  output: 'static',
  site: 'https://aspandyar.github.io',
  base: '/aspandyar', // Remove this if your repo is USERNAME.github.io
  integrations: [
    preact(), 
    icon(), 
    sitemap({
      filter: (page) =>
        !page.includes("/blog/tags") &&
        !page.includes("/blog/techs"),
    })
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    },
  },
});