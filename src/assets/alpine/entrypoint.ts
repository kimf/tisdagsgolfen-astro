import Alpine from 'alpinejs';
import type { Alpine as AlpineType } from 'alpinejs';
import AutoAnimate from '@marcreichel/alpine-auto-animate';

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log('HMR');
  });
}

export default (Alpine: AlpineType) => {
  Alpine.plugin(AutoAnimate);
};
