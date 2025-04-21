import calculateEarnings from 'src/utils/calculateEarnings';

describe('calculateEarnings', () => {
  it('returns 0 for par with 2 putts', () => {
    expect(calculateEarnings(2, 4, 4)).toBe(0);
  });

  it('penalizes for 3 putts', () => {
    expect(calculateEarnings(3, 4, 4)).toBe(-10);
  });

  it('penalizes for 4 putts', () => {
    expect(calculateEarnings(4, 4, 4)).toBe(-30);
  });

  it('rewards for hole-in-one', () => {
    expect(calculateEarnings(2, 1, 3)).toBe(500);
  });

  it('rewards for eagle (-2)', () => {
    expect(calculateEarnings(2, 2, 4)).toBe(100);
  });

  it('rewards for albatross (-3)', () => {
    expect(calculateEarnings(2, 1, 4)).toBe(300);
  });

  it('rewards for condor (-4)', () => {
    expect(calculateEarnings(2, 0, 4)).toBe(500);
  });

  it('combines putt penalty and strokes reward', () => {
    // 3 putts (-10) and eagle (-2 = 100)
    expect(calculateEarnings(3, 2, 4)).toBe(90);
  });

  it('returns 0 for strokes over par with 2 putts', () => {
    expect(calculateEarnings(2, 5, 4)).toBe(0);
  });
});
