/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

// Declare a module to handle the lack of type definitions
declare module '@marcreichel/alpine-auto-animate' {
  const AutoAnimate: any;
  export default AutoAnimate;
}
interface Window {
  Alpine: import('alpinejs').Alpine;
  teamForm: (courseId: number, specialWeek: number, eventType: string, scoringType: string) => void;
}

declare namespace App {
  interface SessionData {
    userId: string;
  }
  interface Locals extends Runtime {}
}
