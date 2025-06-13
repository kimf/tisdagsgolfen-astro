import Alpine from 'alpinejs';

type Team = {
  players: string[];
  strokes: number;
};

document.addEventListener('alpine:init', () => {
  Alpine.data(
    'teamForm',
    (courseId: number, specialWeek: number, eventType: string, scoringType: string) => ({
      course: courseId,
      specialWeek: specialWeek === 1,
      eventType: eventType || 'individual',
      selectedPlayers: [] as string[],
      scoringType: scoringType || 'stableford',
      teams: [
        { players: [], strokes: 10 },
        { players: [], strokes: 10 }
      ] as Team[],

      isTeamEvent() {
        return this.eventType !== 'individual';
      },

      addTeam() {
        this.teams.push({ players: [], strokes: 10 });
      },

      removeTeam(index: number) {
        this.teams.splice(index, 1);
      },

      disableSave() {
        if (!this.course) {
          return true;
        }
        if (this.isTeamEvent()) {
          if (this.teams.length === 0) {
            return true;
          }
          return !this.teams.some((t) => t.players.length > 0);
        }
        return this.selectedPlayers.length === 0;
      },

      playerIsInAnotherTeam(playerId: number, currentTeamIndex: number) {
        return this.teams.some(
          (team, index) => index !== currentTeamIndex && team.players.includes(playerId.toString())
        );
      },

      hasSelectedPlayer(id: number) {
        return this.selectedPlayers.includes(id.toString());
      }
    })
  );
});
