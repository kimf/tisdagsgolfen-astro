import { defineConfig, envField, fontProviders } from 'astro/config';
import playformCompress from '@playform/compress';
import compressor from 'astro-compressor';
import path from 'path';
import fsExtra from 'fs-extra';
import htmx from 'astro-htmx';
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

const COLORS = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m'
};

function format(msg, prefix = '') {
  const start = prefix;
  const end = prefix ? COLORS.reset : '';
  return `${start}moving-legacy-content:${end} ${msg}`;
}

// TODO: Move to Dockerfile instead!
const copyLegacyContent = () => ({
  name: 'copy-legacy-content',
  hooks: {
    'astro:build:done': async () => {
      const legacyDir = path.join(process.cwd(), '_legacy');
      const publicDir = path.join(process.cwd(), './dist/client');

      try {
        if (fsExtra.pathExistsSync(legacyDir)) {
          fsExtra.copySync(legacyDir, publicDir, { overwrite: true });
          console.log(
            format('Successfully moved _legacy contents to public directory', COLORS.green)
          );
        } else {
          console.log(format('_legacy directory not found, skipping', COLORS.yellow));
        }
      } catch (err) {
        console.error(format('Error moving _legacy contents:', err, COLORS.red));
      }
    }
  }
});

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    alpinejs({
      entrypoint: './src/assets/alpine/entrypoint'
    }),
    htmx(),
    playformCompress(),
    compressor({ gzip: false, brotli: true }),
    copyLegacyContent()
  ],

  image: {
    domains: []
  },

  output: 'server',
  adapter: cloudflare(),

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },

  experimental: {
    clientPrerender: true,
    fonts: [
      {
        provider: 'local',
        name: 'VCR_OSD_MONO',
        cssVariable: '--font-vcr',
        variants: [
          {
            weight: 400,
            style: 'normal',
            src: ['./src/assets/fonts/VCR_OSD_MONO_1.001.ttf']
          }
        ]
      },
      {
        provider: fontProviders.google(),
        name: 'Share Tech Mono',
        cssVariable: '--font-mono'
      }
    ]
  }
});
