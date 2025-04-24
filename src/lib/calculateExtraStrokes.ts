import { cacheable } from './cacheable';

export const calculateExtraStrokes = cacheable(
  (holeIndex: number, playerStrokes: number, holesCount: number): number => {
    let extra = 0;
    if (holeIndex <= playerStrokes) {
      extra = 1;
      if (playerStrokes > holesCount && holeIndex <= playerStrokes - holesCount) {
        extra = 2;
      }
    }
    return extra;
  }
);
