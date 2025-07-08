import Alpine from 'alpinejs';
import EmblaCarousel, { type EmblaCarouselType } from 'embla-carousel';
import { actions } from 'astro:actions';

document.addEventListener('alpine:init', () => {
  Alpine.data('scoring', (startIndex: number, scoringSessionId: number) => ({
    embla: null as EmblaCarouselType | null,
    next: true,
    prev: true,

    isScoring: false,
    playerName: '',
    par: 0,
    hcp: 0,
    number: 0,
    givenStrokes: 0,
    scorecardId: 0,
    scoringSessionId,
    teamScorecardId: 0,
    strokes: 0,
    putts: 0,
    beers: 0,
    ciders: 0,

    init() {
      this.embla = EmblaCarousel(this.$refs.viewport, { loop: false, startIndex: startIndex });
      this.embla.on('select', () => {
        this.next = this.embla?.canScrollNext() ?? false;
        this.prev = this.embla?.canScrollPrev() ?? false;
      });
      this.embla.on('init', () => {
        this.next = this.embla?.canScrollNext() ?? false;
        this.prev = this.embla?.canScrollPrev() ?? false;
      });

      this.embla.on('settle', () => {
        const scrollIndex = this.embla?.selectedScrollSnap();
        actions.setCurrentHole({ scoringSessionId, currentHole: Number(scrollIndex) + 1 });
      });
    },

    scrollNext() {
      this.embla?.scrollNext();
    },

    scrollPrev() {
      this.embla?.scrollPrev();
    },

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
      hcp: number,
      number: number,
      playerName: string,
      givenStrokes: number,
      scorecardId: number,
      teamScorecardId: number,
      strokes: number,
      putts: number,
      beers: number,
      ciders: number
    ) {
      this.par = par;
      this.hcp = hcp;
      this.number = number;
      this.playerName = playerName;
      this.givenStrokes = givenStrokes;
      this.scorecardId = scorecardId;
      this.teamScorecardId = teamScorecardId;
      this.strokes = strokes ?? par;
      this.putts = putts ?? 2;
      this.beers = beers ?? 0;
      this.ciders = ciders ?? 0;

      this.isScoring = true;
    }
  }));
});
