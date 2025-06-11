PRAGMA defer_foreign_keys=TRUE;
CREATE TABLE `scoring_sessions` (
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
	FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON UPDATE no action ON DELETE no action
);
INSERT INTO scoring_sessions VALUES(5,1,1008,0,0,0,'CLOSED',18,0,'2025-05-06 14:23:44');
INSERT INTO scoring_sessions VALUES(6,2,1008,0,0,0,'CLOSED',18,0,'2025-05-06 14:30:12');
INSERT INTO scoring_sessions VALUES(12,12,1006,0,0,0,'CLOSED',18,0,'2025-05-13 14:28:40');
INSERT INTO scoring_sessions VALUES(13,7,1006,0,0,0,'CLOSED',18,0,'2025-05-13 14:30:17');
INSERT INTO scoring_sessions VALUES(14,2,1008,1,1,1,'CLOSED',18,0,'2025-05-20 14:27:35');
INSERT INTO scoring_sessions VALUES(17,1,1008,1,1,1,'CLOSED',18,0,'2025-05-20 15:09:18');
INSERT INTO scoring_sessions VALUES(19,1,1010,0,0,0,'CLOSED',18,0,'2025-05-27 14:45:11');
INSERT INTO scoring_sessions VALUES(20,11,1010,0,0,0,'CLOSED',18,0,'2025-05-27 14:56:46');
INSERT INTO scoring_sessions VALUES(21,2,1008,0,0,0,'CLOSED',18,0,'2025-06-03 14:37:54');
INSERT INTO scoring_sessions VALUES(22,7,1008,0,0,0,'CLOSED',18,0,'2025-06-03 14:42:49');
INSERT INTO scoring_sessions VALUES(24,13,1010,1,0,0,'PENDING',18,0,'2025-06-10 14:57:48');
INSERT INTO scoring_sessions VALUES(25,1,1010,1,0,0,'PENDING',18,0,'2025-06-10 15:00:58');
