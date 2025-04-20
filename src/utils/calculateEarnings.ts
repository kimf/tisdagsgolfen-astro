import { cacheable } from './cacheable';

export const STROKES_MONEY = {
  [-4]: 500,
  [-3]: 300,
  [-2]: 100,
  [-1]: 10
};

export const PUTT_MONEY: Record<
  3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
  number
> = {
  3: -10,
  4: -30,
  5: -60,
  6: -120,
  7: -240,
  8: -480,
  9: -960,
  10: -960,
  11: -960,
  12: -960,
  13: -960,
  14: -960,
  15: -960,
  16: -960,
  17: -960,
  18: -960,
  19: -960
};

export const calculateEarnings = cacheable((putts: number, strokes: number, par: number) => {
  let earnings = 0;

  if (putts > 2) {
    earnings += PUTT_MONEY[putts as keyof typeof PUTT_MONEY];
  }

  const strokesOverPar = strokes - par;
  if (strokes === 1) {
    earnings += 500;
  } else if (strokesOverPar < 0) {
    earnings += STROKES_MONEY[strokesOverPar as -4 | -3 | -2 | -1];
  }
});
