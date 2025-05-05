import type { Alpine } from 'alpinejs';

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log('HMR');
  });
}

export default (Alpine: Alpine) => {
  // Alpine.plugin();
};
