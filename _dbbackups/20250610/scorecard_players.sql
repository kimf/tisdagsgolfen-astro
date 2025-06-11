PRAGMA defer_foreign_keys=TRUE;
CREATE TABLE `scorecard_players` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`player_id` integer NOT NULL,
	`scorecard_id` integer NOT NULL,
	`beers` integer DEFAULT 0,
	`fines` integer DEFAULT 0,
	`ciders` integer DEFAULT 0,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`player_id`) REFERENCES `profiles`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`scorecard_id`) REFERENCES `scorecards`(`id`) ON UPDATE no action ON DELETE cascade
);
INSERT INTO scorecard_players VALUES(12,13,12,0,0,3,'2025-05-06 14:23:44');
INSERT INTO scorecard_players VALUES(13,12,13,0,-10,1,'2025-05-06 14:23:44');
INSERT INTO scorecard_players VALUES(14,11,14,0,0,0,'2025-05-06 14:23:44');
INSERT INTO scorecard_players VALUES(15,1,15,0,-30,0,'2025-05-06 14:23:44');
INSERT INTO scorecard_players VALUES(16,8,16,0,-30,0,'2025-05-06 14:30:12');
INSERT INTO scorecard_players VALUES(17,7,17,0,-20,0,'2025-05-06 14:30:12');
INSERT INTO scorecard_players VALUES(18,2,18,0,0,1,'2025-05-06 14:30:12');
INSERT INTO scorecard_players VALUES(33,12,33,0,0,1,'2025-05-13 14:28:40');
INSERT INTO scorecard_players VALUES(34,2,34,0,10,0,'2025-05-13 14:28:40');
INSERT INTO scorecard_players VALUES(35,11,35,0,-10,0,'2025-05-13 14:28:40');
INSERT INTO scorecard_players VALUES(36,7,36,0,-40,2,'2025-05-13 14:30:18');
INSERT INTO scorecard_players VALUES(37,13,37,0,-10,0,'2025-05-13 14:30:18');
INSERT INTO scorecard_players VALUES(38,5,38,0,-50,2,'2025-05-13 14:30:18');
INSERT INTO scorecard_players VALUES(39,5,39,0,0,0,'2025-05-20 14:27:35');
INSERT INTO scorecard_players VALUES(40,2,39,0,0,0,'2025-05-20 14:27:35');
INSERT INTO scorecard_players VALUES(41,11,40,0,0,0,'2025-05-20 14:27:35');
INSERT INTO scorecard_players VALUES(42,7,40,0,0,0,'2025-05-20 14:27:35');
INSERT INTO scorecard_players VALUES(49,1,43,0,0,0,'2025-05-20 15:09:18');
INSERT INTO scorecard_players VALUES(50,12,43,0,0,0,'2025-05-20 15:09:18');
INSERT INTO scorecard_players VALUES(51,13,43,0,0,0,'2025-05-20 15:09:18');
INSERT INTO scorecard_players VALUES(56,12,48,0,-10,0,'2025-05-27 14:45:12');
INSERT INTO scorecard_players VALUES(57,5,49,0,-20,0,'2025-05-27 14:45:12');
INSERT INTO scorecard_players VALUES(58,2,50,0,20,0,'2025-05-27 14:45:12');
INSERT INTO scorecard_players VALUES(59,1,51,0,-20,0,'2025-05-27 14:45:12');
INSERT INTO scorecard_players VALUES(60,8,52,1,-10,0,'2025-05-27 14:56:47');
INSERT INTO scorecard_players VALUES(61,13,53,0,-30,0,'2025-05-27 14:56:47');
INSERT INTO scorecard_players VALUES(62,11,54,0,-30,0,'2025-05-27 14:56:47');
INSERT INTO scorecard_players VALUES(63,13,55,0,-50,0,'2025-06-03 14:37:55');
INSERT INTO scorecard_players VALUES(64,12,56,0,-10,1,'2025-06-03 14:37:55');
INSERT INTO scorecard_players VALUES(65,2,57,0,-10,0,'2025-06-03 14:37:55');
INSERT INTO scorecard_players VALUES(66,7,58,1,-20,0,'2025-06-03 14:42:49');
INSERT INTO scorecard_players VALUES(67,5,59,0,0,1,'2025-06-03 14:42:49');
INSERT INTO scorecard_players VALUES(68,1,60,0,0,1,'2025-06-03 14:42:49');
INSERT INTO scorecard_players VALUES(73,13,65,0,-40,0,'2025-06-10 14:57:48');
INSERT INTO scorecard_players VALUES(74,5,66,0,0,0,'2025-06-10 14:57:48');
INSERT INTO scorecard_players VALUES(75,10,67,0,-90,2,'2025-06-10 14:57:48');
INSERT INTO scorecard_players VALUES(76,14,68,1,-20,0,'2025-06-10 14:57:48');
INSERT INTO scorecard_players VALUES(77,7,69,0,0,0,'2025-06-10 15:00:58');
INSERT INTO scorecard_players VALUES(78,2,70,0,0,0,'2025-06-10 15:00:58');
INSERT INTO scorecard_players VALUES(79,11,71,0,0,1,'2025-06-10 15:00:58');
INSERT INTO scorecard_players VALUES(80,1,72,0,0,0,'2025-06-10 15:00:58');
