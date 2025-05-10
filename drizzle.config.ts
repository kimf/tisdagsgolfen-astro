import { defineConfig } from 'drizzle-kit';

const isProd = process.env.VERCEL;

export default defineConfig({
  dialect: isProd ? 'turso' : 'sqlite',
  schema: './src/db/schema/*',
  out: './src/db/_drizzle',
  verbose: true,
  strict: true,
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: isProd ? process.env.TURSO_AUTH_TOKEN : ''
  }
});
