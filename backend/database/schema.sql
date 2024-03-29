DROP DATABASE IF EXISTS LIVESMART;
CREATE DATABASE LIVESMART;
USE LIVESMART;

DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS(
	username VARCHAR(256) NOT NULL,
	password VARCHAR(256) NOT NULL,
	is_admin BOOLEAN DEFAULT FALSE,
	PRIMARY KEY (username)
);

DROP TABLE IF EXISTS USER_CARBON;
CREATE TABLE USER_CARBON(
	username VARCHAR(256) NOT NULL,
	food_score INT(10) NOT NULL,
	travel_score INT(10) NOT NULL,
	home_score INT(10) NOT NULL,
	carbon_level INT(10) NOT NULL,
	carbon_date DATETIME,
	FOREIGN KEY (username) REFERENCES USERS(username) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS GEN_STATS;
CREATE TABLE GEN_STATS(
	username VARCHAR(256) NOT NULL,
	age INT(2) NOT NULL,
	sex ENUM('male', 'female') NOT NULL,
	education ENUM('none', 'elementary', 'highschool', 'bachelors', 'masters', 'doctorate', 'vocational') NOT NULL,
	salary ENUM('none', '0-15', '15-30', '30-45', '45-60', '60plus') NOT NULL,
	score INT(2) NOT NULL,
	perception ENUM('1', '2', '3', '4', '5') NOT NULL,
	FOREIGN KEY (username) REFERENCES USERS(username) ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY (username)
);
