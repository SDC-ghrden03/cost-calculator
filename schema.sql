/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

DROP DATABASE IF EXISTS cost_calculator;

CREATE DATABASE cost_calculator;

USE cost_calculator;

CREATE TABLE location (
  id SERIAL PRIMARY KEY,
  zipcode INT NOT NULL,
  credit_score DECIMAL(6,5) NOT NULL
);
CREATE TABLE cars (
  id SERIAL PRIMARY KEY,
  cost INT NOT NULL
);

INSERT INTO location (zipcode, credit_score) VALUES ('60030', '.00400');
INSERT INTO location (zipcode, credit_score) VALUES ('80030', '.00350');
INSERT INTO location (zipcode, credit_score) VALUES ('80233', '.00425');
INSERT INTO location (zipcode, credit_score) VALUES ('80012', '.00500');
INSERT INTO location (zipcode, credit_score) VALUES ('50012', '1.00');

INSERT INTO cars (cost) VALUES ('10000');
INSERT INTO cars (cost) VALUES ('11485');
INSERT INTO cars (cost) VALUES ('5000');
INSERT INTO cars (cost) VALUES ('6892');
INSERT INTO cars (cost) VALUES ('20000');
