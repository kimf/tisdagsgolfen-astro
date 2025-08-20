ALTER TABLE `courses` ADD `final_course` integer DEFAULT false;

--> statement-breakpoint
UPDATE `courses`
SET
  `final_course` = 1
WHERE
  `id` = 1011;

--> statement-breakpoint
