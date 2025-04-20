import { describe, it, expect } from 'vitest';
import { calculatePoints } from 'src/utils/calculatePoints';

describe('calculatePoints', () => {
  it('calculates standard points correctly', () => {
    // strokes, extraStrokes, par, modifiedPoints
    expect(calculatePoints(4, 0, 4)).toBe(2); // par
    expect(calculatePoints(3, 0, 4)).toBe(3); // birdie
    expect(calculatePoints(2, 0, 4)).toBe(4); // eagle
    expect(calculatePoints(5, 0, 4)).toBe(1); // bogey
    expect(calculatePoints(6, 0, 4)).toBe(0); // double bogey
    expect(calculatePoints(12, 0, 4)).toBe(0); // out of range, should be 0
  });

  it('calculates modified points correctly', () => {
    expect(calculatePoints(4, 0, 4, true)).toBe(0); // par
    expect(calculatePoints(3, 0, 4, true)).toBe(2); // birdie
    expect(calculatePoints(2, 0, 4, true)).toBe(5); // eagle
    expect(calculatePoints(5, 0, 4, true)).toBe(-1); // bogey
    expect(calculatePoints(6, 0, 4, true)).toBe(-3); // double bogey
    expect(calculatePoints(12, 0, 4, true)).toBe(-3); // out of range, should be -3
  });

  it('handles extraStrokes correctly', () => {
    expect(calculatePoints(6, 2, 4)).toBe(2); // (6-2)-4 = 0 (par)
    expect(calculatePoints(7, 2, 4, true)).toBe(-1); // (7-2)-4 = 1 (bogey, modified)
  });
});
