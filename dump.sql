PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "__drizzle_migrations" (
			id SERIAL PRIMARY KEY,
			hash text NOT NULL,
			created_at numeric
		);
INSERT INTO __drizzle_migrations VALUES(NULL,'9d43d08076812f2b98ca9e5fd81fa6e56d8036f8e9574691c781a8c78bfd107f',1745241794686);
INSERT INTO __drizzle_migrations VALUES(NULL,'af1c75c3f471ca4cbfeaeb212e37474ea8a44a30a0c093939691caadb151ca44',1745242160927);
INSERT INTO __drizzle_migrations VALUES(NULL,'bfa57ca919937bb94e1a070e06054c11317bf793eacb4b4b24cd0c7ca0206df9',1745242195754);
INSERT INTO __drizzle_migrations VALUES(NULL,'246a8529fcf4b45a5c7781c910c57fa965a4bc7c3d977575c23a3ccfe7ce16da',1746565284942);
CREATE TABLE IF NOT EXISTS `courses` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`club` text NOT NULL,
	`name` text NOT NULL,
	`par` integer NOT NULL,
	`holes_count` integer DEFAULT 0 NOT NULL,
	`events_count` integer DEFAULT 0 NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP)
);
INSERT INTO courses VALUES(1006,'Nynäshamns Golfklubb','Berg-Dal ',72,18,0,'2025-04-21 13:31:25');
INSERT INTO courses VALUES(1008,'Nynäshamns Golfklubb','Dal-Sjö',72,18,0,'2025-04-21 13:31:25');
INSERT INTO courses VALUES(1010,'Nynäshamns Golfklubb','Sjö-Berg',72,18,0,'2025-04-21 13:31:25');
CREATE TABLE IF NOT EXISTS `holes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`index` integer NOT NULL,
	`course_id` integer NOT NULL,
	`number` integer NOT NULL,
	`par` integer NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON UPDATE no action ON DELETE cascade
);
INSERT INTO holes VALUES(1,14,1006,1,5,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(2,8,1006,2,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(3,4,1006,3,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(4,18,1006,4,3,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(5,12,1006,5,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(6,16,1006,6,3,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(7,6,1006,7,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(8,2,1006,8,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(9,10,1006,9,5,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(10,13,1006,10,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(11,11,1006,11,5,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(12,5,1006,12,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(13,3,1006,13,5,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(14,17,1006,14,3,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(15,1,1006,15,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(16,15,1006,16,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(17,7,1006,17,3,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(18,9,1006,18,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(19,13,1008,1,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(20,11,1008,2,5,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(21,5,1008,3,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(22,3,1008,4,5,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(23,17,1008,5,3,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(24,1,1008,6,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(25,15,1008,7,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(26,7,1008,8,3,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(27,9,1008,9,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(28,12,1008,10,5,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(29,2,1008,11,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(30,14,1008,12,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(31,18,1008,13,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(32,8,1008,14,3,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(33,4,1008,15,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(34,6,1008,16,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(35,10,1008,17,3,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(36,16,1008,18,5,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(37,12,1010,1,5,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(38,2,1010,2,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(39,14,1010,3,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(40,18,1010,4,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(41,8,1010,5,3,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(42,4,1010,6,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(43,6,1010,7,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(44,10,1010,8,3,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(45,16,1010,9,5,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(46,13,1010,10,5,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(47,7,1010,11,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(48,3,1010,12,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(49,17,1010,13,3,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(50,11,1010,14,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(51,15,1010,15,3,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(52,5,1010,16,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(53,1,1010,17,4,'2025-04-21 13:31:46');
INSERT INTO holes VALUES(54,9,1010,18,5,'2025-04-21 13:31:46');
CREATE TABLE IF NOT EXISTS `profiles` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`full_name` text NOT NULL,
	`avatar_url` text,
	`guest` integer DEFAULT false NOT NULL,
	`active` integer DEFAULT true NOT NULL
);
INSERT INTO profiles VALUES(1,'Tobias Pettersson','1',0,1);
INSERT INTO profiles VALUES(2,'Kim Fransman','1',0,1);
INSERT INTO profiles VALUES(3,'Urban Garpsäter',NULL,1,1);
INSERT INTO profiles VALUES(4,'Patrik Lindby',NULL,0,1);
INSERT INTO profiles VALUES(5,'Jonathan Frohlund',NULL,0,1);
INSERT INTO profiles VALUES(7,'Fredrik Bohlin','1',0,1);
INSERT INTO profiles VALUES(8,'Daniel Garpsäter','1',0,1);
INSERT INTO profiles VALUES(10,'Marcus Köhler',NULL,0,1);
INSERT INTO profiles VALUES(11,'Niklas Garpsäter','1',0,1);
INSERT INTO profiles VALUES(12,'Håkan Lundholm','1',0,1);
INSERT INTO profiles VALUES(13,'Hannes Eriksson','1',0,1);
CREATE TABLE IF NOT EXISTS `scorecard_players` (
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
INSERT INTO scorecard_players VALUES(23,8,23,0,0,0,'2025-05-10 20:56:58');
INSERT INTO scorecard_players VALUES(24,13,24,0,0,0,'2025-05-10 20:56:58');
INSERT INTO scorecard_players VALUES(25,10,25,0,100,0,'2025-05-10 20:56:58');
INSERT INTO scorecard_players VALUES(26,1,26,0,0,0,'2025-05-10 20:56:58');
CREATE TABLE IF NOT EXISTS `scorecards` (
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
	FOREIGN KEY (`scoring_session_id`) REFERENCES `scoring_sessions`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON UPDATE no action ON DELETE no action
);
INSERT INTO scorecards VALUES(12,5,1008,31,95,32,8,17,0,18,6,1,0,'2025-05-06 14:23:44');
INSERT INTO scorecards VALUES(13,5,1008,32,94,32,11,14,0,18,8,1,0,'2025-05-06 14:23:44');
INSERT INTO scorecards VALUES(14,5,1008,32,94,34,11,13,0,18,9,1,0,'2025-05-06 14:23:44');
INSERT INTO scorecards VALUES(15,5,1008,30,83,33,6,5,0,18,6,1,0,'2025-05-06 14:23:44');
INSERT INTO scorecards VALUES(16,6,1008,33,88,33,15,13,0,18,3,1,0,'2025-05-06 14:30:12');
INSERT INTO scorecards VALUES(17,6,1008,27,103,35,4,18,0,18,13,1,0,'2025-05-06 14:30:12');
INSERT INTO scorecards VALUES(18,6,1008,34,83,34,20,8,0,18,3,1,0,'2025-05-06 14:30:12');
INSERT INTO scorecards VALUES(23,8,1008,5,9,4,0,12,0,2,-1,1,0,'2025-05-10 20:56:58');
INSERT INTO scorecards VALUES(24,8,1008,1,5,2,0,7,0,1,1,1,0,'2025-05-10 20:56:58');
INSERT INTO scorecards VALUES(25,8,1008,5,2,1,0,17,0,1,-3,1,0,'2025-05-10 20:56:58');
INSERT INTO scorecards VALUES(26,8,1008,1,5,2,0,10,0,1,1,1,0,'2025-05-10 20:56:58');
CREATE TABLE IF NOT EXISTS `scoring_sessions` (
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
INSERT INTO scoring_sessions VALUES(8,2,1008,0,0,0,'STARTED',2,0,'2025-05-10 20:56:58');
CREATE TABLE IF NOT EXISTS `seasons` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`state` text DEFAULT 'REGULAR',
	`winners_array` text,
	`closed_at` text,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP)
);
INSERT INTO seasons VALUES(1,'2025','REGULAR',NULL,NULL,'2025-04-21 13:30:16');
CREATE TABLE IF NOT EXISTS `scores` (
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
INSERT INTO scores VALUES(200,16,4,1,1,0,1,3,-1,0,0,'2025-05-06 14:35:59');
INSERT INTO scores VALUES(201,17,6,1,1,0,1,1,1,0,0,'2025-05-06 14:36:05');
INSERT INTO scores VALUES(202,18,6,1,2,0,0,0,2,0,1,'2025-05-06 14:36:10');
INSERT INTO scores VALUES(203,12,5,1,2,0,1,2,0,0,1,'2025-05-06 14:44:54');
INSERT INTO scores VALUES(204,13,5,1,2,0,1,2,0,0,0,'2025-05-06 14:45:01');
INSERT INTO scores VALUES(205,14,6,1,3,0,1,1,1,-10,0,'2025-05-06 14:45:07');
INSERT INTO scores VALUES(206,15,5,1,1,0,0,1,1,0,0,'2025-05-06 14:45:16');
INSERT INTO scores VALUES(208,16,6,2,3,0,1,2,0,-10,0,'2025-05-06 14:49:08');
INSERT INTO scores VALUES(209,17,7,2,2,0,1,1,1,0,0,'2025-05-06 14:49:13');
INSERT INTO scores VALUES(210,18,4,2,1,0,0,3,-1,10,0,'2025-05-06 14:49:16');
INSERT INTO scores VALUES(211,12,6,2,2,0,1,2,0,0,0,'2025-05-06 14:58:07');
INSERT INTO scores VALUES(212,13,6,2,1,0,1,2,0,0,0,'2025-05-06 14:58:14');
INSERT INTO scores VALUES(213,14,6,2,2,0,1,2,0,0,0,'2025-05-06 14:58:18');
INSERT INTO scores VALUES(214,15,7,2,3,0,0,0,2,-10,0,'2025-05-06 14:58:22');
INSERT INTO scores VALUES(215,16,6,3,2,0,1,1,1,0,0,'2025-05-06 15:00:03');
INSERT INTO scores VALUES(216,17,5,3,2,0,1,2,0,0,0,'2025-05-06 15:00:07');
INSERT INTO scores VALUES(217,18,5,3,2,0,1,2,0,0,0,'2025-05-06 15:00:09');
INSERT INTO scores VALUES(218,12,5,3,2,0,1,2,0,0,0,'2025-05-06 15:10:22');
INSERT INTO scores VALUES(219,13,5,3,3,0,1,2,0,-10,1,'2025-05-06 15:10:27');
INSERT INTO scores VALUES(221,14,5,3,1,0,1,2,0,0,0,'2025-05-06 15:10:38');
INSERT INTO scores VALUES(222,15,5,3,2,0,1,2,0,0,0,'2025-05-06 15:10:42');
INSERT INTO scores VALUES(223,16,7,4,3,0,1,1,1,-10,0,'2025-05-06 15:14:15');
INSERT INTO scores VALUES(224,17,7,4,2,0,1,1,1,0,0,'2025-05-06 15:14:19');
INSERT INTO scores VALUES(225,18,6,4,2,0,1,2,0,0,0,'2025-05-06 15:14:29');
INSERT INTO scores VALUES(226,16,3,5,2,0,0,2,0,0,0,'2025-05-06 15:21:11');
INSERT INTO scores VALUES(227,18,3,5,2,0,0,2,0,0,0,'2025-05-06 15:21:13');
INSERT INTO scores VALUES(228,17,8,5,2,0,1,0,4,0,0,'2025-05-06 15:21:17');
INSERT INTO scores VALUES(229,12,6,4,2,0,1,2,0,0,0,'2025-05-06 15:23:20');
INSERT INTO scores VALUES(230,13,6,4,2,0,1,2,0,0,0,'2025-05-06 15:23:29');
INSERT INTO scores VALUES(231,14,7,4,2,0,1,1,1,0,0,'2025-05-06 15:23:33');
INSERT INTO scores VALUES(232,15,6,4,3,0,1,2,0,-10,0,'2025-05-06 15:23:38');
INSERT INTO scores VALUES(233,12,3,5,1,0,1,3,-1,0,0,'2025-05-06 15:28:46');
INSERT INTO scores VALUES(234,13,3,5,1,0,0,2,0,0,0,'2025-05-06 15:28:51');
INSERT INTO scores VALUES(235,14,3,5,2,0,0,2,0,0,0,'2025-05-06 15:29:03');
INSERT INTO scores VALUES(236,15,3,5,2,0,0,2,0,0,0,'2025-05-06 15:29:12');
INSERT INTO scores VALUES(237,18,5,6,2,0,1,2,0,0,0,'2025-05-06 15:31:19');
INSERT INTO scores VALUES(238,16,5,6,2,0,1,2,0,0,0,'2025-05-06 15:31:23');
INSERT INTO scores VALUES(239,17,5,6,2,0,1,2,0,0,0,'2025-05-06 15:31:26');
INSERT INTO scores VALUES(240,12,5,6,2,0,1,2,0,0,0,'2025-05-06 15:40:01');
INSERT INTO scores VALUES(241,13,4,6,2,0,1,3,-1,0,0,'2025-05-06 15:40:08');
INSERT INTO scores VALUES(242,14,5,6,1,0,1,2,0,0,0,'2025-05-06 15:40:19');
INSERT INTO scores VALUES(243,15,4,6,1,0,1,3,-1,0,0,'2025-05-06 15:40:23');
INSERT INTO scores VALUES(244,17,4,7,2,0,1,3,-1,0,0,'2025-05-06 15:42:29');
INSERT INTO scores VALUES(245,18,7,7,2,0,0,0,3,0,0,'2025-05-06 15:42:58');
INSERT INTO scores VALUES(246,16,6,7,3,0,0,0,2,-10,0,'2025-05-06 15:43:02');
INSERT INTO scores VALUES(247,16,3,8,2,0,1,3,-1,0,0,'2025-05-06 15:49:21');
INSERT INTO scores VALUES(248,18,3,8,2,0,1,3,-1,0,0,'2025-05-06 15:49:25');
INSERT INTO scores VALUES(249,17,6,8,2,0,1,0,2,0,0,'2025-05-06 15:49:31');
INSERT INTO scores VALUES(250,15,5,7,3,0,0,1,1,-10,0,'2025-05-06 15:50:33');
INSERT INTO scores VALUES(251,12,5,7,2,0,1,2,0,0,0,'2025-05-06 15:50:38');
INSERT INTO scores VALUES(252,13,4,7,1,0,0,2,0,0,0,'2025-05-06 15:50:46');
INSERT INTO scores VALUES(253,14,5,7,2,0,0,1,1,0,0,'2025-05-06 15:50:53');
INSERT INTO scores VALUES(254,15,3,8,1,0,0,2,0,0,0,'2025-05-06 15:57:19');
INSERT INTO scores VALUES(255,13,3,8,1,0,1,3,-1,0,0,'2025-05-06 15:57:25');
INSERT INTO scores VALUES(256,14,3,8,2,0,1,3,-1,0,0,'2025-05-06 15:57:29');
INSERT INTO scores VALUES(257,12,4,8,2,0,1,2,0,0,0,'2025-05-06 15:57:33');
INSERT INTO scores VALUES(258,18,4,9,2,0,0,2,0,0,0,'2025-05-06 16:01:28');
INSERT INTO scores VALUES(259,16,5,9,2,0,1,2,0,0,0,'2025-05-06 16:01:32');
INSERT INTO scores VALUES(260,17,9,9,2,0,1,0,4,0,0,'2025-05-06 16:01:37');
INSERT INTO scores VALUES(261,12,4,9,1,0,1,3,-1,0,0,'2025-05-06 16:08:19');
INSERT INTO scores VALUES(262,13,5,9,2,0,1,2,0,0,0,'2025-05-06 16:08:52');
INSERT INTO scores VALUES(263,14,5,9,2,0,1,2,0,0,0,'2025-05-06 16:08:59');
INSERT INTO scores VALUES(264,15,5,9,2,0,0,1,1,0,0,'2025-05-06 16:09:02');
INSERT INTO scores VALUES(265,18,6,10,3,0,0,1,1,-10,0,'2025-05-06 16:17:28');
INSERT INTO scores VALUES(266,17,6,10,2,0,1,2,0,0,0,'2025-05-06 16:17:33');
INSERT INTO scores VALUES(267,16,5,10,1,0,1,3,-1,0,0,'2025-05-06 16:17:35');
INSERT INTO scores VALUES(268,12,7,10,2,0,1,1,1,0,0,'2025-05-06 16:28:55');
INSERT INTO scores VALUES(269,13,5,10,1,0,1,3,-1,0,0,'2025-05-06 16:28:59');
INSERT INTO scores VALUES(270,14,5,10,2,0,1,3,-1,0,0,'2025-05-06 16:29:05');
INSERT INTO scores VALUES(271,15,5,10,2,0,0,2,0,0,0,'2025-05-06 16:29:09');
INSERT INTO scores VALUES(272,16,5,11,2,0,1,2,0,0,0,'2025-05-06 16:29:15');
INSERT INTO scores VALUES(273,17,5,11,2,0,1,2,0,0,0,'2025-05-06 16:29:20');
INSERT INTO scores VALUES(274,18,4,11,2,0,1,3,-1,0,0,'2025-05-06 16:29:23');
INSERT INTO scores VALUES(275,12,5,11,2,0,1,2,0,0,0,'2025-05-06 16:39:28');
INSERT INTO scores VALUES(276,13,5,11,2,0,1,2,0,0,0,'2025-05-06 16:39:31');
INSERT INTO scores VALUES(277,14,5,11,2,0,1,2,0,0,0,'2025-05-06 16:39:34');
INSERT INTO scores VALUES(278,15,4,11,1,0,1,3,-1,0,0,'2025-05-06 16:39:37');
INSERT INTO scores VALUES(279,18,4,12,2,0,0,2,0,0,0,'2025-05-06 16:39:57');
INSERT INTO scores VALUES(280,16,4,12,1,0,0,2,0,0,0,'2025-05-06 16:40:00');
INSERT INTO scores VALUES(281,17,4,12,2,0,1,3,-1,0,0,'2025-05-06 16:40:03');
INSERT INTO scores VALUES(282,18,4,13,1,0,0,2,0,0,0,'2025-05-06 16:50:15');
INSERT INTO scores VALUES(283,17,7,13,3,0,1,0,2,-10,0,'2025-05-06 16:50:21');
INSERT INTO scores VALUES(284,16,5,13,1,0,0,1,1,0,0,'2025-05-06 16:50:25');
INSERT INTO scores VALUES(287,12,5,12,2,0,1,2,0,0,0,'2025-05-06 16:51:06');
INSERT INTO scores VALUES(288,13,5,12,2,0,1,2,0,0,0,'2025-05-06 16:51:12');
INSERT INTO scores VALUES(289,14,3,12,1,0,0,3,-1,10,0,'2025-05-06 16:51:16');
INSERT INTO scores VALUES(290,15,5,12,2,0,0,1,1,0,0,'2025-05-06 16:51:19');
INSERT INTO scores VALUES(291,16,4,14,2,0,1,2,0,0,0,'2025-05-06 16:58:35');
INSERT INTO scores VALUES(292,17,3,14,2,0,1,3,-1,0,0,'2025-05-06 16:58:38');
INSERT INTO scores VALUES(293,18,3,14,2,0,1,3,-1,0,0,'2025-05-06 16:58:49');
INSERT INTO scores VALUES(295,12,6,13,2,0,0,0,2,0,1,'2025-05-06 17:00:52');
INSERT INTO scores VALUES(296,13,7,13,2,0,0,0,3,0,0,'2025-05-06 17:00:56');
INSERT INTO scores VALUES(297,14,5,13,2,0,0,1,1,0,0,'2025-05-06 17:00:59');
INSERT INTO scores VALUES(298,15,4,13,1,0,0,2,0,0,0,'2025-05-06 17:01:10');
INSERT INTO scores VALUES(299,18,5,15,1,0,1,2,0,0,0,'2025-05-06 17:09:36');
INSERT INTO scores VALUES(300,16,6,15,2,0,1,1,1,0,0,'2025-05-06 17:10:22');
INSERT INTO scores VALUES(301,17,6,15,3,0,1,1,1,-10,0,'2025-05-06 17:10:27');
INSERT INTO scores VALUES(302,15,3,14,2,0,0,2,0,0,0,'2025-05-06 17:12:34');
INSERT INTO scores VALUES(303,14,4,14,2,0,1,2,0,0,0,'2025-05-06 17:12:38');
INSERT INTO scores VALUES(304,13,5,14,2,0,1,1,1,0,0,'2025-05-06 17:12:44');
INSERT INTO scores VALUES(305,12,6,14,1,0,1,0,2,0,0,'2025-05-06 17:12:47');
INSERT INTO scores VALUES(308,16,5,16,2,0,1,2,0,0,0,'2025-05-06 17:23:33');
INSERT INTO scores VALUES(309,17,4,16,1,0,1,3,-1,0,0,'2025-05-06 17:23:39');
INSERT INTO scores VALUES(310,18,4,16,2,0,1,3,-1,0,0,'2025-05-06 17:23:41');
INSERT INTO scores VALUES(312,12,8,15,2,0,1,0,3,0,1,'2025-05-06 17:24:06');
INSERT INTO scores VALUES(314,13,5,15,2,0,1,2,0,0,0,'2025-05-06 17:24:19');
INSERT INTO scores VALUES(315,14,5,15,2,0,1,2,0,0,0,'2025-05-06 17:24:27');
INSERT INTO scores VALUES(316,15,5,15,2,0,1,2,0,0,0,'2025-05-06 17:24:33');
INSERT INTO scores VALUES(318,14,4,16,2,0,1,3,-1,0,0,'2025-05-06 17:34:37');
INSERT INTO scores VALUES(319,12,4,16,1,0,1,3,-1,0,0,'2025-05-06 17:34:42');
INSERT INTO scores VALUES(320,15,4,16,1,0,0,2,0,0,0,'2025-05-06 17:34:46');
INSERT INTO scores VALUES(321,13,9,16,2,0,1,0,4,0,0,'2025-05-06 17:34:50');
INSERT INTO scores VALUES(322,16,3,17,1,0,1,3,-1,0,0,'2025-05-06 17:35:01');
INSERT INTO scores VALUES(324,18,4,17,2,0,0,1,1,0,0,'2025-05-06 17:35:05');
INSERT INTO scores VALUES(325,17,5,17,2,0,1,1,1,0,0,'2025-05-06 17:35:09');
INSERT INTO scores VALUES(326,14,8,17,2,0,1,0,4,0,0,'2025-05-06 17:41:21');
INSERT INTO scores VALUES(327,12,4,17,2,0,1,2,0,0,0,'2025-05-06 17:41:28');
INSERT INTO scores VALUES(328,15,4,17,2,0,0,1,1,0,0,'2025-05-06 17:41:31');
INSERT INTO scores VALUES(329,13,7,17,2,0,1,0,3,0,0,'2025-05-06 17:41:41');
INSERT INTO scores VALUES(330,16,6,18,1,0,0,1,1,0,0,'2025-05-06 17:52:46');
INSERT INTO scores VALUES(332,17,6,18,1,0,1,2,0,0,0,'2025-05-06 17:52:53');
INSERT INTO scores VALUES(333,18,6,18,2,0,0,1,1,0,0,'2025-05-06 17:52:58');
INSERT INTO scores VALUES(334,12,7,18,2,0,1,1,1,0,0,'2025-05-06 17:56:55');
INSERT INTO scores VALUES(335,13,5,18,2,0,0,2,0,0,0,'2025-05-06 17:56:59');
INSERT INTO scores VALUES(336,14,10,18,2,0,0,0,5,0,0,'2025-05-06 17:57:03');
INSERT INTO scores VALUES(337,15,6,18,2,0,0,1,1,0,0,'2025-05-06 17:57:09');
INSERT INTO scores VALUES(342,23,4,1,2,0,0,2,0,0,0,'2025-05-10 20:57:02');
INSERT INTO scores VALUES(343,24,5,1,2,0,0,1,1,0,0,'2025-05-10 20:57:06');
INSERT INTO scores VALUES(344,25,2,1,1,0,1,5,-3,100,0,'2025-05-10 20:57:09');
INSERT INTO scores VALUES(345,26,5,1,2,0,0,1,1,0,0,'2025-05-10 20:57:12');
INSERT INTO scores VALUES(348,23,5,2,2,0,1,3,-1,0,0,'2025-05-10 20:57:53');
CREATE TABLE IF NOT EXISTS `event_sessions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`event_id` integer NOT NULL,
	`session_id` integer NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`session_id`) REFERENCES `scoring_sessions`(`id`) ON UPDATE no action ON DELETE cascade
);
INSERT INTO event_sessions VALUES(1,1,6,'2025-05-06 23:40:27');
INSERT INTO event_sessions VALUES(2,1,5,'2025-05-06 23:40:27');
CREATE TABLE IF NOT EXISTS `events` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`season_id` integer NOT NULL,
	`course_id` integer NOT NULL,
	`special` integer DEFAULT false,
	`strokes` integer DEFAULT false,
	`team_event` integer DEFAULT false,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`season_id`) REFERENCES `seasons`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON UPDATE no action ON DELETE no action
);
INSERT INTO events VALUES(1,1,1008,0,0,0,'2025-05-06 23:40:26');
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('seasons',1);
INSERT INTO sqlite_sequence VALUES('profiles',13);
INSERT INTO sqlite_sequence VALUES('courses',1010);
INSERT INTO sqlite_sequence VALUES('holes',54);
INSERT INTO sqlite_sequence VALUES('scoring_sessions',8);
INSERT INTO sqlite_sequence VALUES('scorecards',26);
INSERT INTO sqlite_sequence VALUES('scorecard_players',26);
INSERT INTO sqlite_sequence VALUES('scores',348);
INSERT INTO sqlite_sequence VALUES('events',1);
INSERT INTO sqlite_sequence VALUES('event_sessions',2);
CREATE UNIQUE INDEX `course_club_name` ON `courses` (`club`,`name`);
CREATE UNIQUE INDEX `hole_course_number` ON `holes` (`course_id`,`number`);
CREATE UNIQUE INDEX `hole_course_index` ON `holes` (`course_id`,`index`);
CREATE UNIQUE INDEX `profiles_full_name_unique` ON `profiles` (`full_name`);
CREATE UNIQUE INDEX `scorecard_players_player_scorecard` ON `scorecard_players` (`player_id`,`scorecard_id`);
CREATE UNIQUE INDEX `seasons_name_unique` ON `seasons` (`name`);
CREATE UNIQUE INDEX `scores_scorecard_id_hole` ON `scores` (`scorecard_id`,`hole`);
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
END;
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
END;
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
COMMIT;
