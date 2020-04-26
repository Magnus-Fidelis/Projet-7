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
	avatar VARCHAR(500) NOT NULL DEFAULT 'Adefinir',
	createdAt VARCHAR(40) NOT NULL,
	isVerified BOOLEAN NOT NULL DEFAULT false,
	accountType VARCHAR (1) NOT NULL DEFAULT 1,
	favoris TEXT []
);

ALTER TABLE person ADD CONSTRAINT unique_email_adress UNIQUE (email);
ALTER TABLE person ADD CONSTRAINT unique_name UNIQUE (name);
ALTER TABLE person ADD title VARCHAR(100);
ALTER TABLE person ADD favoris TEXT [];

CREATE TABLE categories(
	category_uid UUID NOT NULL PRIMARY KEY,
	name VARCHAR(100) NOT NULL
);


INSERT INTO categories (names, category_uid) VALUES ('créons', uuid_generate_v4());
INSERT INTO categories (name, category_uid) VALUES ('L''Atelier', uuid_generate_v4());
INSERT INTO categories (name, category_uid) VALUES ('créons', uuid_generate_v4()); 
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
	_category VARCHAR(100) NOT NULL
);

CREATE TABLE subjects (
	subject_uid UUID NOT NULL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	description VARCHAR(100) NOT NULL,
	_topic VARCHAR(100) NOT NULL,
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
