CREATE TABLE
	`courses` (
		`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
		`club` text NOT NULL,
		`name` text NOT NULL,
		`par` integer NOT NULL,
		`holes_count` integer DEFAULT 0 NOT NULL,
		`events_count` integer DEFAULT 0 NOT NULL,
		`created_at` text DEFAULT (CURRENT_TIMESTAMP)
	);

--> statement-breakpoint
CREATE UNIQUE INDEX `course_club_name` ON `courses` (`club`, `name`);

--> statement-breakpoint
CREATE TABLE
	`event_sessions` (
		`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
		`event_id` integer NOT NULL,
		`session_id` integer NOT NULL,
		`created_at` text DEFAULT (CURRENT_TIMESTAMP),
		FOREIGN KEY (`event_id`) REFERENCES `events` (`id`) ON UPDATE no action ON DELETE cascade,
		FOREIGN KEY (`session_id`) REFERENCES `scoring_sessions` (`id`) ON UPDATE no action ON DELETE cascade
	);

--> statement-breakpoint
CREATE TABLE
	`events` (
		`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
		`season_id` integer NOT NULL,
		`course_id` integer NOT NULL,
		`special` integer DEFAULT false,
		`strokes` integer DEFAULT false,
		`team_event` integer DEFAULT false,
		`created_at` text DEFAULT (CURRENT_TIMESTAMP),
		FOREIGN KEY (`season_id`) REFERENCES `seasons` (`id`) ON UPDATE no action ON DELETE no action,
		FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON UPDATE no action ON DELETE no action
	);

--> statement-breakpoint
CREATE TABLE
	`holes` (
		`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
		`hcp` integer NOT NULL,
		`course_id` integer NOT NULL,
		`number` integer NOT NULL,
		`par` integer NOT NULL,
		`created_at` text DEFAULT (CURRENT_TIMESTAMP),
		FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON UPDATE no action ON DELETE cascade
	);

--> statement-breakpoint
CREATE UNIQUE INDEX `hole_course_number` ON `holes` (`course_id`, `number`);

--> statement-breakpoint
CREATE UNIQUE INDEX `hole_course_hcp` ON `holes` (`course_id`, `hcp`);

--> statement-breakpoint
CREATE TABLE
	`profiles` (
		`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
		`full_name` text NOT NULL,
		`avatar_url` text,
		`guest` integer DEFAULT false NOT NULL,
		`active` integer DEFAULT true NOT NULL
	);

--> statement-breakpoint
CREATE UNIQUE INDEX `profiles_full_name_unique` ON `profiles` (`full_name`);

--> statement-breakpoint
CREATE TABLE
	`scorecard_players` (
		`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
		`player_id` integer NOT NULL,
		`scorecard_id` integer NOT NULL,
		`beers` integer DEFAULT 0,
		`fines` integer DEFAULT 0,
		`ciders` integer DEFAULT 0,
		`created_at` text DEFAULT (CURRENT_TIMESTAMP),
		FOREIGN KEY (`player_id`) REFERENCES `profiles` (`id`) ON UPDATE no action ON DELETE cascade,
		FOREIGN KEY (`scorecard_id`) REFERENCES `scorecards` (`id`) ON UPDATE no action ON DELETE cascade
	);

--> statement-breakpoint
CREATE UNIQUE INDEX `scorecard_players_player_scorecard` ON `scorecard_players` (`player_id`, `scorecard_id`);

--> statement-breakpoint
CREATE TABLE
	`scorecards` (
		`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
		`scoring_session_id` integer NOT NULL,
		`course_id` integer NOT NULL,
		`points` integer DEFAULT 0,
		`strokes` integer DEFAULT 0,
		`putts` integer DEFAULT 0,
		`week_points` integer DEFAULT 0,
		`given_strokes` integer DEFAULT 0,
		`team_index` integer DEFAULT 0,
		`through` integer DEFAULT 0,
		`to_par` integer DEFAULT 0,
		`current_hole` integer DEFAULT 1,
		`part_of_final` integer DEFAULT false,
		`created_at` text DEFAULT (CURRENT_TIMESTAMP),
		FOREIGN KEY (`scoring_session_id`) REFERENCES `scoring_sessions` (`id`) ON UPDATE no action ON DELETE cascade,
		FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON UPDATE no action ON DELETE no action
	);

--> statement-breakpoint
CREATE TABLE
	`scores` (
		`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
		`scorecard_id` integer NOT NULL,
		`strokes` integer DEFAULT 0 NOT NULL,
		`hole` integer NOT NULL,
		`putts` integer DEFAULT 0 NOT NULL,
		`beers` integer DEFAULT 0 NOT NULL,
		`extra_strokes` integer DEFAULT 0 NOT NULL,
		`points` integer DEFAULT 0 NOT NULL,
		`to_par` integer DEFAULT 0 NOT NULL,
		`fines` integer DEFAULT 0 NOT NULL,
		`ciders` integer DEFAULT 0 NOT NULL,
		`created_at` text DEFAULT (CURRENT_TIMESTAMP),
		FOREIGN KEY (`scorecard_id`) REFERENCES `scorecards` (`id`) ON UPDATE no action ON DELETE cascade
	);

--> statement-breakpoint
CREATE UNIQUE INDEX `scores_scorecard_id_hole` ON `scores` (`scorecard_id`, `hole`);

--> statement-breakpoint
CREATE TABLE
	`scoring_sessions` (
		`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
		`owner_id` integer NOT NULL,
		`course_id` integer NOT NULL,
		`special` integer DEFAULT false,
		`strokes` integer DEFAULT false,
		`team_event` integer DEFAULT false,
		`state` text DEFAULT 'STARTED',
		`current_hole` integer DEFAULT 1,
		`part_of_final` integer DEFAULT false,
		`created_at` text DEFAULT (CURRENT_TIMESTAMP),
		FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON UPDATE no action ON DELETE no action
	);

--> statement-breakpoint
CREATE TABLE
	`seasons` (
		`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
		`name` text NOT NULL,
		`state` text DEFAULT 'REGULAR',
		`winners_array` text,
		`closed_at` text,
		`created_at` text DEFAULT (CURRENT_TIMESTAMP)
	);

--> statement-breakpoint
CREATE UNIQUE INDEX `seasons_name_unique` ON `seasons` (`name`);
