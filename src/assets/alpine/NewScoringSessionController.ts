import Alpine from 'alpinejs';
import type { EventType, ScoringType } from 'src/db/schema/scoring_sessions';

type Team = {
  players: TeamPlayer[];
  strokes: number;
};

type TeamPlayer = {
  id: number;
  name: string;
  strokes: number;
};

document.addEventListener('alpine:init', () => {
  Alpine.data(
    'teamForm',
    (
      courseId: number,
      specialWeek: number,
      eventType: EventType,
      scoringType: ScoringType,
      players: string
    ) => ({
      course: courseId,
      specialWeek: specialWeek === 1,
      eventType: eventType || 'individual',
      selectedPlayers: [] as string[],
      scoringType: scoringType || 'stableford',
      teams: [
        { players: [], strokes: 10 },
        { players: [], strokes: 10 }
      ] as Team[],
      players: (players || []) as TeamPlayer[],

      isTeamEvent() {
        return this.eventType === 'team' || this.eventType === 'team_w_individual';
      },

      teamsNeedStrokes() {
        return this.eventType === 'team';
      },

      playerNeedStrokes() {
        return this.eventType === 'individual' || this.eventType === 'team_w_individual';
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
        const teams = this.teams.filter((team, index) => index !== currentTeamIndex);
        return teams.some((team) => team.players.filter((p) => p.id === playerId).length > 0);
      },

      playerIsInTeam(teamIndex: number, playerId: number) {
        return this.teams[teamIndex].players.some((p) => p.id === playerId);
      },

      toggleTeamPlayer(teamIndex: number, playerId: number) {
        const team = this.teams[teamIndex];
        const playerIndex = team.players.findIndex((p) => p.id === playerId);
        if (playerIndex > -1) {
          team.players.splice(playerIndex, 1);
        } else {
          const player = this.players.find((p) => p.id === playerId);
          if (player) {
            team.players.push({ id: player.id, name: player.name, strokes: 10 });
          }
        }
      },

      hasSelectedPlayer(id: number) {
        let selectedPlayers = [] as number[];
        if (this.eventType !== 'individual') {
          selectedPlayers = this.teams.flatMap((team) => team.players.map((p) => p.id));
        } else {
          selectedPlayers = this.selectedPlayers.map((p) => parseInt(p, 10));
        }
        return selectedPlayers.includes(id);
      },

      getSelectedPlayerStrokes(index: number, playerId: number) {
        if (this.eventType === 'individual') {
          throw new Error('getSelectedPlayerStrokes should not be called for individual events');
        }
        return this.teams[index].players.find((p) => p.id === playerId)?.strokes || 0;
      }
    })
  );
});
