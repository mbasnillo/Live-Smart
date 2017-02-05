DROP DATABASE IF EXISTS LIVESMART;
CREATE DATABASE LIVESMART;
USE LIVESMART;

DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS(
	id INTEGER AUTO_INCREMENT,
	username VARCHAR(256),
	password VARCHAR(256),
	PRIMARY KEY (id)
);