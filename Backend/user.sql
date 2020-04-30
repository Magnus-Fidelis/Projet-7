/*
-----------------------
Commande de créations
des catégories
-----------------------
*/
CREATE TABLE person (
	user_uid UUID NOT NULL PRIMARY KEY,
	email VARCHAR(100) NOT NULL,
	title VARCHAR(100) NOT NULL,
	name VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL,
	avatar VARCHAR(500) NOT NULL DEFAULT 'assets/icons/person.svg',
	createdAt VARCHAR(40) NOT NULL,
	isVerified BOOLEAN NOT NULL DEFAULT false,
	accountType VARCHAR (1) NOT NULL DEFAULT 1,
);

ALTER TABLE person ADD CONSTRAINT unique_email_adress UNIQUE (email);
ALTER TABLE person ADD CONSTRAINT unique_name UNIQUE (name);

CREATE TABLE categories(
	category_uid UUID NOT NULL PRIMARY KEY,
	name VARCHAR(100) NOT NULL
);
/*
-----------------------
Commande de créations
des topics
-----------------------
*/

CREATE TABLE topics(
	topic_uid UUID NOT NULL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	description VARCHAR(100) NOT NULL,
	_category UUID NOT NULL
);

CREATE TABLE subjects (
	subject_uid UUID NOT NULL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	description VARCHAR(100) NOT NULL,
	_topic UUID NOT NULL,
	_lastUpdate VARCHAR(50) NOT NULL
);

CREATE TABLE messages (
	message_uid UUID NOT NULL PRIMARY KEY,
	dateCreated VARCHAR(50) NOT NULL,
	dateUpdated VARCHAR(50) NOT NULL,
	_user UUID NOT NULL REFERENCES person (user_uid),
	_subject VARCHAR(100) NOT NULL,
	texts TEXT NOT NULL
);

CREATE TABLE favoris (
	users UUID NOT NULL REFERENCES person(user_uid),
	subject UUID NOT NULL REFERENCES subjects(subject_uid)
);
