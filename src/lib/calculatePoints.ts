import { cacheable } from './cacheable';

interface KeyedArray {
  [key: number]: number;
}
const pointsArray: KeyedArray = [];
pointsArray[-8] = 10;
pointsArray[-7] = 9;
pointsArray[-6] = 8;
pointsArray[-5] = 7;
pointsArray[-4] = 6;
pointsArray[-3] = 5;
pointsArray[-2] = 4;
pointsArray[-1] = 3;
pointsArray[0] = 2;
pointsArray[1] = 1;
pointsArray[2] = 0;
pointsArray[3] = 0;
pointsArray[4] = 0;
pointsArray[5] = 0;
pointsArray[6] = 0;
pointsArray[7] = 0;
pointsArray[8] = 0;
pointsArray[9] = 0;
pointsArray[10] = 0;

/*
- **Dubbelbogey eller sämre**: -3 poäng
- **Bogey**: -1 poäng
- **Par**: 0 poäng
- **Birdie**: +2 poäng
- **Eagle**: +5 poäng
- **Albatross**: +8 poäng
*/
const modifiedPointsArray: KeyedArray = [];
modifiedPointsArray[-8] = 40;
modifiedPointsArray[-7] = 30;
modifiedPointsArray[-6] = 20;
modifiedPointsArray[-5] = 15;
modifiedPointsArray[-4] = 10;
modifiedPointsArray[-3] = 8;
modifiedPointsArray[-2] = 5;
modifiedPointsArray[-1] = 2;
modifiedPointsArray[0] = 0;
modifiedPointsArray[1] = -1;
modifiedPointsArray[2] = -3;
modifiedPointsArray[3] = -3;
modifiedPointsArray[4] = -3;
modifiedPointsArray[5] = -3;
modifiedPointsArray[6] = -3;
modifiedPointsArray[7] = -3;
modifiedPointsArray[8] = -3;
modifiedPointsArray[9] = -3;
modifiedPointsArray[10] = -3;

export const calculatePoints = cacheable(
  (strokes: number, extraStrokes: number, par: number, modifiedPoints = false) => {
    const strokeSum = strokes - extraStrokes;
    const testSum = strokeSum - par;
    return modifiedPoints ? modifiedPointsArray[testSum] : pointsArray[testSum];
  }
);
