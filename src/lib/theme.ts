import { persistentAtom } from '@nanostores/persistent';
import { onMount } from 'nanostores';

export const THEME_MAP = {
  light: 'light',
  dark: 'dark',
  system: undefined
} as const;

type ThemeKey = keyof typeof THEME_MAP;
type ThemeValue = (typeof THEME_MAP)[ThemeKey];

export const STORAGE_THEME_KEY = 'theme' as const;

export const themeStore = persistentAtom<ThemeValue>(STORAGE_THEME_KEY, THEME_MAP.light);

const init = () => {
  themeStore.subscribe((theme) => {
    document.documentElement.classList[theme === THEME_MAP.dark ? 'add' : 'remove'](THEME_MAP.dark);
    const metaTag = document.querySelector('meta[name=theme-color]');
    metaTag?.setAttribute(
      'content',
      theme === THEME_MAP.dark ? 'oklch(0.141 0.005 285.823)' : '#f3f3f398'
    );
  });
  return themeStore.off();
};

if (typeof window !== 'undefined') onMount(themeStore, init);
