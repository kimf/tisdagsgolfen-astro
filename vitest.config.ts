/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    globals: true,
    environment: 'node', // or 'jsdom' if you want to test browser code
    include: ['src/_spec/**/*.spec.{ts,js}'],
    coverage: {
      include: ['src/**/*'],
      exclude: ['src/_spec/**/*']
    },
    setupFiles: ['./src/_spec/setup.ts']
  }
});
