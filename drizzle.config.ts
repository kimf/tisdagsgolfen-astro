import type { Config } from 'drizzle-kit';

const { LOCAL_DB_PATH, DB_ID, D1_TOKEN, CF_ACCOUNT_ID } = process.env;

// const isProd = process.env.NODE_ENV && process.env.NODE_ENV === 'production';
// export default defineConfig({
//   dialect: isProd ? 'turso' : 'sqlite',
//   schema: './src/db/schema/*',
//   out: './src/db/_drizzle',
//   verbose: true,
//   strict: true,
//   dbCredentials: {
//     url: process.env.DATABASE_URL!,
//     authToken: isProd ? process.env.TURSO_AUTH_TOKEN : ''
//   }
// });

// Use better-sqlite driver for local development
export default LOCAL_DB_PATH
  ? ({
      schema: './src/db/schema/*',
      dialect: 'sqlite',
      out: './src/db/_drizzle',
      dbCredentials: {
        url: LOCAL_DB_PATH
      }
    } satisfies Config)
  : ({
      schema: './src/db/schema/*',
      out: './src/db/_drizzle',
      dialect: 'sqlite',
      driver: 'd1-http',
      dbCredentials: {
        databaseId: DB_ID!,
        token: D1_TOKEN!,
        accountId: CF_ACCOUNT_ID!
      }
    } satisfies Config);
