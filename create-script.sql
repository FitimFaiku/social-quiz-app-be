/** Create Database Tables for SocialQuizApp  */

CREATE SCHEMA IF NOT EXISTS socialquizapp;

CREATE TABLE IF NOT EXISTS socialquizapp.player (
	id serial primary KEY,
    player_name VARCHAR (50),
	e_mail_adress VARCHAR (50),
	date_of_birth DATE,
	password VARCHAR (100),
	password_salt VARCHAR (100), 
	portal_id integer,
	portal_key VARCHAR(100),
	failed_password_attempts integer,
	last_login_attempt_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	temp_token_key VARCHAR (100), 
	reset_token VARCHAR (100),
	reset_token_expiry_date TIMESTAMP,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS socialquizapp.quiz (
    id serial primary KEY,
    created_from_playerid integer REFERENCES socialquizapp.player (id),
    created_from_quizid integer REFERENCES socialquizapp.quiz (id),
    quiz_title VARCHAR (50) NOT NULL,
	quiz_description VARCHAR (500) NOT NULL,
	is_active BOOL DEFAULT 'f',
	is_private BOOL DEFAULT 't',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS socialquizapp.post (
	id serial primary KEY,
    quizid integer REFERENCES socialquizapp.quiz (id),
	playerid integer REFERENCES socialquizapp.player (id),
	question_amount integer,
	post_description VARCHAR (50),
	post_title VARCHAR (50),
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
	
);

CREATE TABLE IF NOT EXISTS socialquizapp.friend_request (
	id serial primary KEY,
    player_2id integer REFERENCES socialquizapp.player (id),
    player_1id integer REFERENCES socialquizapp.player (id),
    request_message VARCHAR (250),
	status VARCHAR (50),
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS socialquizapp.friendship (
	id serial primary KEY,
    player_1id integer REFERENCES socialquizapp.player (id),
    player_2id integer REFERENCES socialquizapp.player (id),
    date_added DATE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS socialquizapp.question (
    id serial primary KEY,
    quizid integer REFERENCES socialquizapp.quiz (id),
	question_category VARCHAR(50),
    question_number integer NOT NULL,
	question VARCHAR(250),
	question_type VARCHAR(10),
    duration_in_sec integer NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS socialquizapp.answer (
    id serial primary KEY,
    questionid integer REFERENCES socialquizapp.question (id),
    answer VARCHAR(250),
	is_correct BOOL DEFAULT 'f'
);

CREATE TABLE IF NOT EXISTS socialquizapp.host_quiz (
    id serial primary KEY,
    playerid integer REFERENCES socialquizapp.player (id),
    quizid integer REFERENCES socialquizapp.quiz (id),
	lasts_till TIMESTAMP,
    quiz_title VARCHAR (50) NOT NULL,
	quiz_description VARCHAR (500) NOT NULL,
	is_active BOOL DEFAULT 'f',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS socialquizapp.quiz_game (
    id serial primary KEY,
    host_quizid integer REFERENCES socialquizapp.host_quiz (id),
    start_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    end_time TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS socialquizapp.participant (
    id serial primary KEY,
	quiz_gameid integer REFERENCES socialquizapp.quiz_game (id),
	participant_name VARCHAR (25) NOT NULL,
    score DECIMAL(5,2)
);

CREATE TABLE IF NOT EXISTS socialquizapp.choice (
	id serial primary KEY,
	quiz_gameid integer REFERENCES socialquizapp.quiz_game (id),
	participantid integer REFERENCES socialquizapp.participant (id),
	correct BOOL DEFAULT 'f',
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
