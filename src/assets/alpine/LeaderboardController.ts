import Alpine from 'alpinejs';
import type { LeaderboardItem } from 'src/lib/buildLeaderboardItems';
import standardCompRank from 'src/lib/standardCompRank';

document.addEventListener('alpine:init', () => {
  Alpine.data('fruitList', () => ({
    tabs: [
      { name: 'rank', title: 'Poäng' },
      { name: 'kr', title: 'Böter' },
      { name: 'scratch', title: 'Scratch' }
    ],
    currentTab: 'rank',
    finesPlayers: [] as LeaderboardItem[],
    sortedPlayers: [] as LeaderboardItem[],
    scratchPlayers: [] as LeaderboardItem[],
    items: [] as LeaderboardItem[],
    sortedItems: [] as LeaderboardItem[],

    init() {
      const items = leaderboardItems;
      const filteredItems = items.filter((item: LeaderboardItem) => item.events > 0);
      this.items = filteredItems;
      this.sortedItems = standardCompRank(filteredItems, 'points', false, 'average');
    },

    rankColor(rank: number) {
      if (rank > 4) return 'oklch(55.2% 0.016 285.938)';
      if (rank === 1) return 'oklch(82.8% 0.189 84.429)';
      if (rank === 2) return 'oklch(44.4% 0.011 73.639)';
      if (rank === 3) return 'oklch(55.4% 0.135 66.442)';
      return 'oklch(55.2% 0.016 285.938)';
    },

    changeTab(newTab: 'rank' | 'kr' | 'scratch') {
      this.currentTab = newTab;
      if (newTab === 'kr') {
        this.sortedItems = standardCompRank(this.items, 'totalFines', true, null);
      } else if (newTab === 'scratch') {
        this.sortedItems = standardCompRank(this.items, 'averageStrokes', true, null);
      } else {
        this.sortedItems = standardCompRank(this.items, 'points', false, 'average');
      }
    }
  }));
});
