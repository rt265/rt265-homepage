// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import swup from '@swup/astro';
import icon from "astro-icon";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://watermelonabc.top",
  integrations: [mdx(), sitemap(), icon({
    iconDir: "src/assets/icons",
  }), swup({ theme: false, animationClass: false }), playformCompress(),],
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
