// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), icon()],
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: 'Geist',
            cssVariable: '--font-geist',
            fallbacks: ['--font-noto-sans-sc'],
        },
        {
            provider: fontProviders.fontsource(),
            name: 'Noto Sans SC',
            cssVariable: '--font-noto-sans-sc',
            fallbacks: ['sans-serif'],
        },
    ],
});
