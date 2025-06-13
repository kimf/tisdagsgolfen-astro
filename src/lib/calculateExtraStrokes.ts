import { cacheable } from './cacheable';

export const calculateExtraStrokes = cacheable(
  (holeHcp: number, playerStrokes: number, holesCount: number): number => {
    let extra = 0;
    if (holeHcp <= playerStrokes) {
      extra = 1;
      if (playerStrokes > holesCount && holeHcp <= playerStrokes - holesCount) {
        extra = 2;
      }
    }
    return extra;
  }
);
