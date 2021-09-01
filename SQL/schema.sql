DROP DATABASE IF EXISTS school;
CREATE DATABASE school;

\c school;

CREATE TABLE IF NOT EXISTS students (
	id serial PRIMARY KEY NOT NULL,
  firstName VARCHAR(45) NOT NULL,
  lastName VARCHAR(45) NOT NULL,
  vaccinated BOOLEAN NOT NULL,
  subject  VARCHAR(45) NOT NULL

) ;

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('Ring', 'Ding', TRUE, 'Math');

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('Lil', 'Timmy', TRUE, 'Math');

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('Jinga', 'Bong', FALSE, 'Math');

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('Slimy', 'Hing', TRUE, 'Math');

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('Bal', 'Rung', FALSE, 'Math');

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('Airu', 'Creme', FALSE, 'Math');

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('Wotter', 'Otta', TRUE, 'Math');

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('Kris', 'Smisch', TRUE, 'Math');

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('Vira', 'Loady', FALSE, 'Math');

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('Corvid', 'Smith', FALSE, 'Math');

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('Steve', 'Bates', TRUE, 'Math');

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('Don', 'Hulio', TRUE, 'Math');

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('Hose', 'Smoe', TRUE, 'Math');

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('Ging', 'Beaks', FALSE, 'Math');

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('Wat', 'Duh', TRUE, 'Math');

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('Hime', 'Herre', FALSE, 'Math');

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('Jimi', 'Hendrix', TRUE, 'Math');

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('Donuck', 'Dumpy', FALSE, 'Math');

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('John', 'Fig', TRUE, 'Math');

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('Joe', 'Barker', TRUE, 'Math');

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('Remy', 'Hu', FALSE, 'Math');

INSERT INTO students(firstName, lastName, vaccinated, subject) VALUES ('Ron', 'Peasly', TRUE, 'Math');

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO calvin;
