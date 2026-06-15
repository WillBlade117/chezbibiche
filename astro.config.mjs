import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      tsconfigPaths: true, // <--- LA fameuse ligne qui corrige le bug
    },
  },

  integrations: [sitemap()],
});
