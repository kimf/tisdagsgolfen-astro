ALTER TABLE `events` ADD `event_type` text DEFAULT 'individual' NOT NULL;

--> statement-breakpoint
ALTER TABLE `events` ADD `scoring_type` text DEFAULT 'stableford' NOT NULL;

--> statement-breakpoint
--> statement-breakpoint
UPDATE `events`
SET
  event_type = CASE
    WHEN team_event = 1 THEN 'team'
    ELSE 'individual'
  END,
  scoring_type = CASE
    WHEN strokes = 1 THEN 'strokes'
    ELSE 'stableford'
  END;

--> statement-breakpoint
ALTER TABLE `events`
DROP COLUMN `strokes`;

--> statement-breakpoint
ALTER TABLE `events`
DROP COLUMN `team_event`;
