import type { Alpine as AlpineType } from 'alpinejs';
import AutoAnimate from '@marcreichel/alpine-auto-animate';

export default (Alpine: AlpineType) => {
  Alpine.plugin(AutoAnimate);
};
