import { defineConfig, envField, fontProviders } from 'astro/config';
import playformCompress from '@playform/compress';
import compressor from 'astro-compressor';
// import AstroPWA from '@vite-pwa/astro';
import path from 'path';
import fsExtra from 'fs-extra';
import htmx from 'astro-htmx';
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

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

const isProd = process.env.NODE_ENV === 'production';
const redisUrl = process.env.REDIS_URL || '';
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    alpinejs({
      entrypoint: './src/assets/alpine/entrypoint'
    }),
    htmx(),
    // AstroPWA({
    //   mode: 'production',
    //   registerType: 'autoUpdate',
    //   base: '/',
    //   scope: '/',
    //   manifest: {
    //     name: 'Tisdagsgolfen',
    //     short_name: 'TisGolf',
    //     description: 'Tisdagsgolfen',
    //     theme_color: 'oklch(0.141 0.005 285.823)',
    //     background_color: '#f3f3f398',
    //     display: 'standalone',
    //     orientation: 'portrait-primary',
    //     icons: [
    //       {
    //         src: './src/assets/images/logo.png',
    //         sizes: '192x192',
    //         type: 'image/png'
    //       }
    //     ]
    //   },
    //   pwaAssets: {
    //     config: true
    //   },
    //   workbox: {
    //     navigateFallback: '/',
    //     globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}']
    //   },
    //   experimental: {
    //     directoryAndTrailingSlashHandler: true
    //   }
    // }),
    playformCompress(),
    compressor({ gzip: false, brotli: true }),
    copyLegacyContent()
  ],

  image: {
    domains: []
  },

  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),

  session: {
    driver: isProd ? 'redis' : 'fs-lite',
    options: { url: redisUrl }
  },

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
  },

  env: {
    schema: {
      DATABASE_URL: envField.string({ context: 'server', access: 'secret' }),
      TURSO_AUTH_TOKEN: envField.string({
        context: 'server',
        access: 'secret'
      }),
      USER_PASSWORD: envField.string({ context: 'server', access: 'secret' }),
      REDIS_URL: envField.string({ context: 'server', access: 'secret' })
    }
  }
});
