import Alpine from 'alpinejs';
document.addEventListener('alpine:init', () => {
  Alpine.data('scoring', () => ({
    isScoring: false,
    playerName: '',
    par: 0,
    index: 0,
    number: 0,
    givenStrokes: 0,
    scorecardId: 0,
    strokes: 0,
    putts: 0,
    beers: 0,
    ciders: 0,

    hideForm() {
      this.isScoring = false;
    },

    changeStrokes(newStrokes: number) {
      this.strokes = newStrokes;
      if (newStrokes === 1) {
        this.putts = 0;
      } else {
        if (this.putts >= newStrokes) {
          this.putts = newStrokes - 1;
        }
      }
    },

    openScoring(
      par: number,
      index: number,
      number: number,
      playerName: string,
      givenStrokes: number,
      scorecardId: number,
      strokes: number,
      putts: number,
      beers: number,
      ciders: number
    ) {
      this.par = par;
      this.index = index;
      this.number = number;
      this.playerName = playerName;
      this.givenStrokes = givenStrokes;
      this.scorecardId = scorecardId;

      this.strokes = strokes ?? par;
      this.putts = putts ?? 2;
      this.beers = beers ?? 0;
      this.ciders = ciders ?? 0;

      this.isScoring = true;
    }
  }));
});
