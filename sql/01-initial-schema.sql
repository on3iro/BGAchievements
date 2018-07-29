CREATE SCHEMA bgachievements;

SET search_path TO bgachievements;

CREATE TABLE hello (
	
	id SERIAL PRIMARY KEY,
	message VARCHAR(255)
)