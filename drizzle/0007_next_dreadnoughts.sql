CREATE TABLE `scores` (
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
	FOREIGN KEY (`scorecard_id`) REFERENCES `scorecards`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `scores_scorecard_id_hole` ON `scores` (`scorecard_id`,`hole`);--> statement-breakpoint
DROP INDEX `hole_course_number`;--> statement-breakpoint
DROP INDEX `hole_course_index`;--> statement-breakpoint
CREATE UNIQUE INDEX `hole_course_number` ON `holes` (`course_id`,`number`);--> statement-breakpoint
CREATE UNIQUE INDEX `hole_course_index` ON `holes` (`course_id`,`index`);
