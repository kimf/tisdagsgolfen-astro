import { registerSW } from 'virtual:pwa-register';

registerSW({
  immediate: true,
  onRegisteredSW(swScriptUrl) {
    console.info('SW registered: ', swScriptUrl);
  },
  onOfflineReady() {
    console.info('PWA application ready to work offline');
  }
});
