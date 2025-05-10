/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

// Declare a module to handle the lack of type definitions
declare module '@marcreichel/alpine-auto-animate' {
  const AutoAnimate: any;
  export default AutoAnimate;
}
interface ImportMetaEnv {
  readonly DATABASE_URL: string;
  readonly REDIS_URL: string;
  readonly TURSO_AUTH_TOKEN: string;
  readonly USER_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  Alpine: import('alpinejs').Alpine;
  teamForm: (courseId: number, specialWeek: number, teamEvent: number, strokes: number) => void;
}

declare namespace App {
  interface SessionData {
    userId: string;
  }
  interface Locals extends Runtime {}
}
