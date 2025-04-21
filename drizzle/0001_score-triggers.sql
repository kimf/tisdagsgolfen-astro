DROP TRIGGER IF EXISTS update_scorecard_data_after_insert; --> statement-breakpoint
CREATE TRIGGER update_scorecard_data_after_insert
AFTER INSERT ON scores
BEGIN
  UPDATE scorecards
  SET
    strokes = (SELECT SUM(strokes) FROM scores WHERE scorecard_id = NEW.scorecard_id),
    putts   = (SELECT SUM(putts) FROM scores WHERE scorecard_id = NEW.scorecard_id),
    points  = (SELECT SUM(points) FROM scores WHERE scorecard_id = NEW.scorecard_id),
    through = (SELECT COUNT(*) FROM scores WHERE scorecard_id = NEW.scorecard_id),
    to_par  = (SELECT SUM(to_par) FROM scores WHERE scorecard_id = NEW.scorecard_id)
  WHERE id = NEW.scorecard_id;

  UPDATE scorecard_players
  SET
    beers  = (SELECT SUM(beers) FROM scores WHERE scorecard_id = NEW.scorecard_id),
    ciders = (SELECT SUM(ciders) FROM scores WHERE scorecard_id = NEW.scorecard_id),
    fines  = (SELECT SUM(fines) FROM scores WHERE scorecard_id = NEW.scorecard_id)
  WHERE scorecard_id = NEW.scorecard_id
    AND (
      SELECT team_event
      FROM scoring_sessions
      JOIN scorecards ON scorecards.scoring_session_id = scoring_sessions.id
      WHERE scorecards.id = NEW.scorecard_id
    ) = 0;
END;--> statement-breakpoint

DROP TRIGGER IF EXISTS update_scorecard_data_after_update; --> statement-breakpoint
CREATE TRIGGER update_scorecard_data_after_update
AFTER UPDATE ON scores
BEGIN
  UPDATE scorecards
  SET
    strokes = (SELECT SUM(strokes) FROM scores WHERE scorecard_id = NEW.scorecard_id),
    putts   = (SELECT SUM(putts) FROM scores WHERE scorecard_id = NEW.scorecard_id),
    points  = (SELECT SUM(points) FROM scores WHERE scorecard_id = NEW.scorecard_id),
    through = (SELECT COUNT(*) FROM scores WHERE scorecard_id = NEW.scorecard_id),
    to_par  = (SELECT SUM(to_par) FROM scores WHERE scorecard_id = NEW.scorecard_id)
  WHERE id = NEW.scorecard_id;

  UPDATE scorecard_players
  SET
    beers  = (SELECT SUM(beers) FROM scores WHERE scorecard_id = NEW.scorecard_id),
    ciders = (SELECT SUM(ciders) FROM scores WHERE scorecard_id = NEW.scorecard_id),
    fines  = (SELECT SUM(fines) FROM scores WHERE scorecard_id = NEW.scorecard_id)
  WHERE scorecard_id = NEW.scorecard_id
    AND (
      SELECT team_event
      FROM scoring_sessions
      JOIN scorecards ON scorecards.scoring_session_id = scoring_sessions.id
      WHERE scorecards.id = NEW.scorecard_id
    ) = 0;
END;--> statement-breakpoint

DROP TRIGGER IF EXISTS update_scorecard_data_after_delete; --> statement-breakpoint
CREATE TRIGGER update_scorecard_data_after_delete
AFTER DELETE ON scores
BEGIN
  UPDATE scorecards
  SET
    strokes = (SELECT SUM(strokes) FROM scores WHERE scorecard_id = OLD.scorecard_id),
    putts   = (SELECT SUM(putts) FROM scores WHERE scorecard_id = OLD.scorecard_id),
    points  = (SELECT SUM(points) FROM scores WHERE scorecard_id = OLD.scorecard_id),
    through = (SELECT COUNT(*) FROM scores WHERE scorecard_id = OLD.scorecard_id),
    to_par  = (SELECT SUM(to_par) FROM scores WHERE scorecard_id = OLD.scorecard_id)
  WHERE id = OLD.scorecard_id;

  UPDATE scorecard_players
  SET
    beers  = (SELECT SUM(beers) FROM scores WHERE scorecard_id = OLD.scorecard_id),
    ciders = (SELECT SUM(ciders) FROM scores WHERE scorecard_id = OLD.scorecard_id),
    fines  = (SELECT SUM(fines) FROM scores WHERE scorecard_id = OLD.scorecard_id)
  WHERE scorecard_id = OLD.scorecard_id
    AND (
      SELECT team_event
      FROM scoring_sessions
      JOIN scorecards ON scorecards.scoring_session_id = scoring_sessions.id
      WHERE scorecards.id = OLD.scorecard_id
    ) = 0;
END;
