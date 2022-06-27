import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";

export default defineConfig({
  site: "https://open-data-africtivistes.netlify.app/",
  experimental: {
    integrations: true,
  },
  integrations: [
    tailwind(),
    astroI18next({
      baseLanguage: "fr",
      i18next: {
        debug: false,
        supportedLngs: ["en", "fr"],
      },
    }),
  ],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img", "svgo"],
    },
  },
});
