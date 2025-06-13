ALTER TABLE `holes` RENAME COLUMN "index" TO "hcp";--> statement-breakpoint
DROP INDEX `hole_course_index`;--> statement-breakpoint
CREATE UNIQUE INDEX `hole_course_hcp` ON `holes` (`course_id`,`hcp`);