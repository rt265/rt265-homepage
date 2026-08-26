// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://watermelonabc.top",
  integrations: [mdx(), sitemap(), icon({
    iconDir: "src/assets/icons",
  }), playformCompress(),],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Geist",
      cssVariable: "--font-geist",
      fallbacks: ["Noto Sans SC", "sans-serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      fallbacks: ["monospace"],
    },
  ],
});
