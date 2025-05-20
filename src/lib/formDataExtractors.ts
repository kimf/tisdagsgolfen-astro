export function extractPlayers(formData: FormData | null) {
  if (!formData) {
    return null;
  }

  const players: Record<string, { id: string; strokes: string }> = {};
  for (const [key, value] of formData.entries()) {
    // Match keys like players[0][id] or players[0]['strokes']
    const match = key.match(/^players\[(\d+)\]\[(?:'|")?(\w+)(?:'|")?\]$/);
    if (match) {
      const idx = match[1];
      const prop = match[2];
      players[idx] = players[idx] || {};
      (players[idx] as Record<'id' | 'strokes', string>)[prop as 'id' | 'strokes'] =
        value as string;
    }
  }
  // Convert to array and filter out incomplete entries
  return Object.values(players).filter((p) => p.id);
}

export function extractTeams(formData: FormData | null) {
  if (!formData) {
    return null;
  }

  const teams: Record<string, { strokes: string; players: string[] }> = {};
  for (const [key, value] of formData.entries()) {
    // Match keys like teams[0][strokes] or teams[0][players]
    const match = key.match(/^teams\[(\d+)\]\[(?:'|")?(\w+)(?:'|")?\]$/);
    if (match) {
      const idx = match[1];
      const prop = match[2];
      teams[idx] = teams[idx] || {};
      if (prop === 'players') {
        teams[idx].players = (value as string).split(',').filter(Boolean);
      } else if (prop === 'strokes') {
        teams[idx].strokes = value as string;
      }
    }
  }
  // Convert to array and filter out incomplete entries
  return Object.values(teams).filter((t) => t.players && t.players.length > 0);
}

export function extractScorecards(formData: FormData | null) {
  if (!formData) {
    return null;
  }

  const scorecards: { id: number; strokes: number }[] = [];
  for (const [key, value] of formData.entries()) {
    // Match keys like scorecards[id]['strokes']
    const match = key.match(/^scorecards\[(\w+)\]\[(?:'|")?(\w+)(?:'|")?\]$/);
    if (match) {
      const id = match[1];
      scorecards.push({
        id: Number(id),
        strokes: Number(value)
      });
    }
  }
  return scorecards;
}

export function extractBeersAndCidersForPlayers(formData: FormData | null) {
  if (!formData) {
    return null;
  }

  interface PlayerEntry {
    id: number;
    scorecardId: number;
    beers?: number;
    ciders?: number;
  }

  const playersMap: Record<string, PlayerEntry> = {};

  for (const [key, val] of formData.entries()) {
    const match = key.match(/^player\[(\d+)\]\[(\d+)\]\[(\w+)\]$/);
    if (!match) continue;

    const [, scorecardId, playerId, type] = match;
    const pid = Number(playerId);
    const sid = Number(scorecardId);
    const value = Number(val);

    const drinkType = type as 'beers' | 'ciders';
    const mapKey = `${pid}-${sid}`;

    if (!playersMap[mapKey]) {
      playersMap[mapKey] = { id: pid, scorecardId: sid };
    }
    playersMap[mapKey][drinkType] = value;
  }
  const players: PlayerEntry[] = Object.values(playersMap);

  return players;
}
