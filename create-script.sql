/** Create Database Tables for SocialQuizApp  */

CREATE SCHEMA IF NOT EXISTS socialquizapp;

CREATE TABLE IF NOT EXISTS socialquizapp.player (
	player_id serial primary KEY,
    player_name VARCHAR (50),
	e_mail_adress VARCHAR (50),
	date_of_birth DATE,
	password VARCHAR (100),
	password_salt VARCHAR (100), 
	portal_id integer,
	portal_key VARCHAR(100),
	failed_password_attempts integer,
	temp_token_key VARCHAR (100), 
	reset_token VARCHAR (100),
	reset_token_expiry_date TIMESTAMP,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS socialquizapp.quiz (
    quiz_id serial primary KEY,
    creeated_from_plyer_id integer REFERENCES socialquizapp.player (player_id),
    creeated_from_quiz_id integer REFERENCES socialquizapp.quiz (quiz_id),
    quiz_title VARCHAR (50) NOT NULL,
	quiz_description VARCHAR (500) NOT NULL,
	is_active BOOL DEFAULT 'f',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS socialquizapp.post (
	post_id serial primary KEY,
    quiz_id integer REFERENCES socialquizapp.quiz (quiz_id),
	player_id integer REFERENCES socialquizapp.player (player_id),
	question_amount integer,
	post_description VARCHAR (50),
	post_title VARCHAR (50),
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
	
);

CREATE TABLE IF NOT EXISTS socialquizapp.friend_request (
	friend_request_id serial primary KEY,
    player_id_1 integer REFERENCES socialquizapp.player (player_id),
    player_id_2 integer REFERENCES socialquizapp.player (player_id),
    request_message VARCHAR (250),
	status VARCHAR (50),
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS socialquizapp.friendship (
	friendship_id serial primary KEY,
    player_id_1 integer REFERENCES socialquizapp.player (player_id),
    player_id_2 integer REFERENCES socialquizapp.player (player_id),
    date_added DATE NOT NULL DEFAULT CURRENT_TIMESTAMP
);



CREATE TABLE IF NOT EXISTS socialquizapp.question (
    question_id serial primary KEY,
    quiz_id integer REFERENCES socialquizapp.quiz (quiz_id),
	question_category VARCHAR(50),
    question_number integer NOT NULL,
	question VARCHAR(250),
    duration_in_sec integer NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS socialquizapp.answer (
    answer_id serial primary KEY,
    question_id integer REFERENCES socialquizapp.question (question_id),
    answer VARCHAR(250),
	is_correct BOOL DEFAULT 'f'
);

CREATE TABLE IF NOT EXISTS socialquizapp.host_quiz (
    host_quiz_id serial primary KEY,
    player_id integer REFERENCES socialquizapp.player (player_id),
    quiz_id integer REFERENCES socialquizapp.quiz (quiz_id),
	lasts_till TIMESTAMP,
    quiz_title VARCHAR (50) NOT NULL,
	quiz_description VARCHAR (500) NOT NULL,
	is_active BOOL DEFAULT 'f',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS socialquizapp.quiz_game (
    quiz_game_id serial primary KEY,
    host_quiz_id integer REFERENCES socialquizapp.host_quiz (host_quiz_id),
    start_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    end_time TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS socialquizapp.participant (
    participant_id serial primary KEY,
	quiz_game_id integer REFERENCES socialquizapp.quiz_game (quiz_game_id),
	participant_name VARCHAR (25) NOT NULL,
    score DECIMAL(5,2)
);

CREATE TABLE IF NOT EXISTS socialquizapp.choice (
	choice_id serial primary KEY,
	quiz_game_id integer REFERENCES socialquizapp.quiz_game (quiz_game_id),
	participant_id integer REFERENCES socialquizapp.participant (participant_id),
	correct BOOL DEFAULT 'f',
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
