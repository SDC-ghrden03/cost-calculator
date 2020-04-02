/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

DROP DATABASE IF EXISTS cost_calculator;

CREATE DATABASE cost_calculator;

USE cost_calculator;

CREATE TABLE location (
  id SERIAL PRIMARY KEY,
  zipcode INT NOT NULL,
  taxes INT NOT NULL,
  fees INT NOT NULL,
  rate DECIMAL(6,5) NOT NULL
);

CREATE TABLE cars (
  id SERIAL PRIMARY KEY,
  cost INT NOT NULL
);

INSERT INTO location (zipcode, taxes, fees, rate) VALUES ('60030', '1062', '233', '4.00');
INSERT INTO location (zipcode, taxes, fees, rate) VALUES ('80030', '1000', '200', '3.50');
INSERT INTO location (zipcode, taxes, fees, rate) VALUES ('80233', '902', '150', '4.25');
INSERT INTO location (zipcode, taxes, fees, rate) VALUES ('80012', '981', '175', '5.00');
INSERT INTO location (zipcode, taxes, fees, rate) VALUES ('50012', '1262', '250', '1.00');

INSERT INTO cars (cost) VALUES ('10000');
INSERT INTO cars (cost) VALUES ('11485');
INSERT INTO cars (cost) VALUES ('5000');
INSERT INTO cars (cost) VALUES ('6892');
INSERT INTO cars (cost) VALUES ('20000');
