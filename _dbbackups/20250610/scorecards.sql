PRAGMA defer_foreign_keys = TRUE;

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

INSERT INTO
	scorecards
VALUES
	(
		12,
		5,
		1008,
		31,
		95,
		32,
		8,
		17,
		0,
		18,
		6,
		1,
		0,
		'2025-05-06 14:23:44'
	);

INSERT INTO
	scorecards
VALUES
	(
		13,
		5,
		1008,
		32,
		94,
		32,
		11,
		14,
		0,
		18,
		8,
		1,
		0,
		'2025-05-06 14:23:44'
	);

INSERT INTO
	scorecards
VALUES
	(
		14,
		5,
		1008,
		32,
		94,
		34,
		11,
		13,
		0,
		18,
		9,
		1,
		0,
		'2025-05-06 14:23:44'
	);

INSERT INTO
	scorecards
VALUES
	(
		15,
		5,
		1008,
		30,
		83,
		33,
		6,
		5,
		0,
		18,
		6,
		1,
		0,
		'2025-05-06 14:23:44'
	);

INSERT INTO
	scorecards
VALUES
	(
		16,
		6,
		1008,
		33,
		88,
		33,
		15,
		13,
		0,
		18,
		3,
		1,
		0,
		'2025-05-06 14:30:12'
	);

INSERT INTO
	scorecards
VALUES
	(
		17,
		6,
		1008,
		27,
		103,
		35,
		4,
		18,
		0,
		18,
		13,
		1,
		0,
		'2025-05-06 14:30:12'
	);

INSERT INTO
	scorecards
VALUES
	(
		18,
		6,
		1008,
		34,
		83,
		34,
		20,
		8,
		0,
		18,
		3,
		1,
		0,
		'2025-05-06 14:30:12'
	);

INSERT INTO
	scorecards
VALUES
	(
		33,
		12,
		1006,
		37,
		86,
		31,
		15,
		15,
		0,
		18,
		-1,
		1,
		0,
		'2025-05-13 14:28:40'
	);

INSERT INTO
	scorecards
VALUES
	(
		34,
		12,
		1006,
		38,
		79,
		32,
		20,
		9,
		0,
		18,
		-2,
		1,
		0,
		'2025-05-13 14:28:40'
	);

INSERT INTO
	scorecards
VALUES
	(
		35,
		12,
		1006,
		28,
		95,
		32,
		9,
		13,
		0,
		18,
		10,
		1,
		0,
		'2025-05-13 14:28:40'
	);

INSERT INTO
	scorecards
VALUES
	(
		36,
		13,
		1006,
		28,
		100,
		35,
		9,
		19,
		0,
		18,
		9,
		1,
		0,
		'2025-05-13 14:30:18'
	);

INSERT INTO
	scorecards
VALUES
	(
		37,
		13,
		1006,
		34,
		92,
		33,
		12,
		18,
		0,
		18,
		2,
		1,
		0,
		'2025-05-13 14:30:18'
	);

INSERT INTO
	scorecards
VALUES
	(
		38,
		13,
		1006,
		26,
		89,
		37,
		6,
		6,
		0,
		18,
		11,
		1,
		0,
		'2025-05-13 14:30:18'
	);

INSERT INTO
	scorecards
VALUES
	(
		39,
		14,
		1008,
		44,
		69,
		0,
		15,
		5,
		0,
		18,
		-8,
		1,
		0,
		'2025-05-20 14:27:35'
	);

INSERT INTO
	scorecards
VALUES
	(
		40,
		14,
		1008,
		41,
		79,
		0,
		11,
		12,
		1,
		18,
		-5,
		1,
		0,
		'2025-05-20 14:27:35'
	);

INSERT INTO
	scorecards
VALUES
	(
		43,
		17,
		1008,
		35,
		80,
		0,
		9,
		7,
		0,
		18,
		1,
		1,
		0,
		'2025-05-20 15:09:18'
	);

INSERT INTO
	scorecards
VALUES
	(
		48,
		19,
		1010,
		32,
		92,
		35,
		8,
		15,
		0,
		18,
		5,
		1,
		0,
		'2025-05-27 14:45:12'
	);

INSERT INTO
	scorecards
VALUES
	(
		49,
		19,
		1010,
		29,
		86,
		36,
		4,
		7,
		0,
		18,
		7,
		1,
		0,
		'2025-05-27 14:45:12'
	);

INSERT INTO
	scorecards
VALUES
	(
		50,
		19,
		1010,
		37,
		80,
		30,
		15,
		9,
		0,
		18,
		-1,
		1,
		0,
		'2025-05-27 14:45:12'
	);

INSERT INTO
	scorecards
VALUES
	(
		51,
		19,
		1010,
		32,
		84,
		33,
		8,
		6,
		0,
		18,
		6,
		1,
		0,
		'2025-05-27 14:45:12'
	);

INSERT INTO
	scorecards
VALUES
	(
		52,
		20,
		1010,
		38,
		84,
		31,
		20,
		14,
		0,
		18,
		-2,
		1,
		0,
		'2025-05-27 14:56:47'
	);

INSERT INTO
	scorecards
VALUES
	(
		53,
		20,
		1010,
		32,
		95,
		35,
		8,
		19,
		0,
		18,
		4,
		1,
		0,
		'2025-05-27 14:56:47'
	);

INSERT INTO
	scorecards
VALUES
	(
		54,
		20,
		1010,
		36,
		88,
		33,
		12,
		14,
		0,
		18,
		2,
		1,
		0,
		'2025-05-27 14:56:47'
	);

INSERT INTO
	scorecards
VALUES
	(
		55,
		21,
		1008,
		25,
		105,
		38,
		8,
		17,
		0,
		18,
		16,
		1,
		0,
		'2025-06-03 14:37:55'
	);

INSERT INTO
	scorecards
VALUES
	(
		56,
		21,
		1008,
		26,
		96,
		35,
		10,
		14,
		0,
		18,
		10,
		1,
		0,
		'2025-06-03 14:37:55'
	);

INSERT INTO
	scorecards
VALUES
	(
		57,
		21,
		1008,
		24,
		92,
		32,
		6,
		8,
		0,
		18,
		12,
		1,
		0,
		'2025-06-03 14:37:55'
	);

INSERT INTO
	scorecards
VALUES
	(
		58,
		22,
		1008,
		32,
		94,
		34,
		15,
		18,
		0,
		18,
		4,
		1,
		0,
		'2025-06-03 14:42:49'
	);

INSERT INTO
	scorecards
VALUES
	(
		59,
		22,
		1008,
		34,
		80,
		29,
		20,
		6,
		0,
		18,
		2,
		1,
		0,
		'2025-06-03 14:42:49'
	);

INSERT INTO
	scorecards
VALUES
	(
		60,
		22,
		1008,
		30,
		84,
		34,
		12,
		5,
		0,
		18,
		7,
		1,
		0,
		'2025-06-03 14:42:49'
	);

INSERT INTO
	scorecards
VALUES
	(
		65,
		24,
		1010,
		28,
		99,
		34,
		0,
		17,
		0,
		18,
		10,
		1,
		0,
		1,
		'2025-06-10 14:57:48'
	);

INSERT INTO
	scorecards
VALUES
	(
		66,
		24,
		1010,
		36,
		79,
		31,
		0,
		7,
		0,
		18,
		0,
		1,
		0,
		1,
		'2025-06-10 14:57:48'
	);

INSERT INTO
	scorecards
VALUES
	(
		67,
		24,
		1010,
		22,
		126,
		39,
		0,
		31,
		0,
		18,
		23,
		1,
		0,
		1,
		'2025-06-10 14:57:48'
	);

INSERT INTO
	scorecards
VALUES
	(
		68,
		24,
		1010,
		22,
		112,
		31,
		0,
		18,
		0,
		18,
		22,
		1,
		0,
		1,
		'2025-06-10 14:57:48'
	);

INSERT INTO
	scorecards
VALUES
	(
		69,
		25,
		1010,
		36,
		93,
		0,
		0,
		21,
		0,
		18,
		0,
		1,
		0,
		1,
		'2025-06-10 15:00:58'
	);

INSERT INTO
	scorecards
VALUES
	(
		70,
		25,
		1010,
		29,
		88,
		0,
		0,
		9,
		0,
		18,
		7,
		1,
		0,
		1,
		'2025-06-10 15:00:58'
	);

INSERT INTO
	scorecards
VALUES
	(
		71,
		25,
		1010,
		38,
		87,
		0,
		0,
		14,
		0,
		18,
		1,
		1,
		0,
		1,
		'2025-06-10 15:00:58'
	);

INSERT INTO
	scorecards
VALUES
	(
		72,
		25,
		1010,
		25,
		91,
		0,
		0,
		6,
		0,
		18,
		13,
		1,
		0,
		1,
		'2025-06-10 15:00:58'
	);
