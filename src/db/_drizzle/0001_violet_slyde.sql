DROP TRIGGER IF EXISTS update_scorecard_data_after_insert;

--> statement-breakpoint
DROP TRIGGER IF EXISTS update_scorecard_data_after_update;

--> statement-breakpoint
DROP TRIGGER IF EXISTS update_scorecard_data_after_delete;

--> statement-breakpoint
ALTER TABLE `scoring_sessions` ADD `event_type` text DEFAULT 'individual' NOT NULL;

--> statement-breakpoint
ALTER TABLE `scoring_sessions` ADD `scoring_type` text DEFAULT 'stableford' NOT NULL;

--> statement-breakpoint
UPDATE `scoring_sessions`
SET
  event_type = CASE
    WHEN team_event = 1 THEN 'team'
    ELSE 'individual'
  END,
  scoring_type = CASE
    WHEN strokes = 1 THEN 'strokes'
    ELSE 'stableford'
  END;

ALTER TABLE `scoring_sessions`
DROP COLUMN `strokes`;

--> statement-breakpoint
ALTER TABLE `scoring_sessions`
DROP COLUMN `team_event`;

--> statement-breakpoint
CREATE TRIGGER update_scorecard_data_after_insert AFTER INSERT ON scores BEGIN
UPDATE scorecards
SET
  strokes = (
    SELECT
      SUM(strokes)
    FROM
      scores
    WHERE
      scorecard_id = NEW.scorecard_id
  ),
  putts = (
    SELECT
      SUM(putts)
    FROM
      scores
    WHERE
      scorecard_id = NEW.scorecard_id
  ),
  points = (
    SELECT
      SUM(points)
    FROM
      scores
    WHERE
      scorecard_id = NEW.scorecard_id
  ),
  through = (
    SELECT
      COUNT(*)
    FROM
      scores
    WHERE
      scorecard_id = NEW.scorecard_id
  ),
  to_par = (
    SELECT
      SUM(to_par)
    FROM
      scores
    WHERE
      scorecard_id = NEW.scorecard_id
  )
WHERE
  id = NEW.scorecard_id;

UPDATE scorecard_players
SET
  beers = (
    SELECT
      SUM(beers)
    FROM
      scores
    WHERE
      scorecard_id = NEW.scorecard_id
  ),
  ciders = (
    SELECT
      SUM(ciders)
    FROM
      scores
    WHERE
      scorecard_id = NEW.scorecard_id
  ),
  fines = (
    SELECT
      SUM(fines)
    FROM
      scores
    WHERE
      scorecard_id = NEW.scorecard_id
  )
WHERE
  scorecard_id = NEW.scorecard_id
  AND (
    SELECT
      event_type
    FROM
      scoring_sessions
      JOIN scorecards ON scorecards.scoring_session_id = scoring_sessions.id
    WHERE
      scorecards.id = NEW.scorecard_id
  ) = 'individual';

END;

--> statement-breakpoint
CREATE TRIGGER update_scorecard_data_after_update AFTER
UPDATE ON scores BEGIN
UPDATE scorecards
SET
  strokes = (
    SELECT
      SUM(strokes)
    FROM
      scores
    WHERE
      scorecard_id = NEW.scorecard_id
  ),
  putts = (
    SELECT
      SUM(putts)
    FROM
      scores
    WHERE
      scorecard_id = NEW.scorecard_id
  ),
  points = (
    SELECT
      SUM(points)
    FROM
      scores
    WHERE
      scorecard_id = NEW.scorecard_id
  ),
  through = (
    SELECT
      COUNT(*)
    FROM
      scores
    WHERE
      scorecard_id = NEW.scorecard_id
  ),
  to_par = (
    SELECT
      SUM(to_par)
    FROM
      scores
    WHERE
      scorecard_id = NEW.scorecard_id
  )
WHERE
  id = NEW.scorecard_id;

UPDATE scorecard_players
SET
  beers = (
    SELECT
      SUM(beers)
    FROM
      scores
    WHERE
      scorecard_id = NEW.scorecard_id
  ),
  ciders = (
    SELECT
      SUM(ciders)
    FROM
      scores
    WHERE
      scorecard_id = NEW.scorecard_id
  ),
  fines = (
    SELECT
      SUM(fines)
    FROM
      scores
    WHERE
      scorecard_id = NEW.scorecard_id
  )
WHERE
  scorecard_id = NEW.scorecard_id
  AND (
    SELECT
      event_type
    FROM
      scoring_sessions
      JOIN scorecards ON scorecards.scoring_session_id = scoring_sessions.id
    WHERE
      scorecards.id = NEW.scorecard_id
  ) = 'individual';

END;

--> statement-breakpoint
CREATE TRIGGER update_scorecard_data_after_delete AFTER DELETE ON scores BEGIN
UPDATE scorecards
SET
  strokes = (
    SELECT
      SUM(strokes)
    FROM
      scores
    WHERE
      scorecard_id = OLD.scorecard_id
  ),
  putts = (
    SELECT
      SUM(putts)
    FROM
      scores
    WHERE
      scorecard_id = OLD.scorecard_id
  ),
  points = (
    SELECT
      SUM(points)
    FROM
      scores
    WHERE
      scorecard_id = OLD.scorecard_id
  ),
  through = (
    SELECT
      COUNT(*)
    FROM
      scores
    WHERE
      scorecard_id = OLD.scorecard_id
  ),
  to_par = (
    SELECT
      SUM(to_par)
    FROM
      scores
    WHERE
      scorecard_id = OLD.scorecard_id
  )
WHERE
  id = OLD.scorecard_id;

UPDATE scorecard_players
SET
  beers = (
    SELECT
      SUM(beers)
    FROM
      scores
    WHERE
      scorecard_id = OLD.scorecard_id
  ),
  ciders = (
    SELECT
      SUM(ciders)
    FROM
      scores
    WHERE
      scorecard_id = OLD.scorecard_id
  ),
  fines = (
    SELECT
      SUM(fines)
    FROM
      scores
    WHERE
      scorecard_id = OLD.scorecard_id
  )
WHERE
  scorecard_id = OLD.scorecard_id
  AND (
    SELECT
      event_type
    FROM
      scoring_sessions
      JOIN scorecards ON scorecards.scoring_session_id = scoring_sessions.id
    WHERE
      scorecards.id = OLD.scorecard_id
  ) = 'individual';

END;

--> statement-breakpoint
